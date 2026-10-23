// ==UserScript==
// @name         YYJ Collector - Auto Copy Data Nasabah
// @namespace    yyj-collector-tools
// @version      2.2
// @description  Auto buka Detail -> Rincian Pengguna, salin Nama/Telepon(diawali 8)/Aplikasi ke clipboard, ekspor XLSX. Auto-pagination (fix: lanjut ke halaman 2, 3, dst).
// @match        https://admin.yuanyiyanjie.org/id/collector-platform/cases*
// @require      https://cdn.sheetjs.com/xlsx-0.20.3/package/dist/xlsx.full.min.js
// @updateURL    https://raw.githubusercontent.com/zinkmr3-hash/botsistemdrx/refs/heads/main/YYJ-Collector-Auto-Copy-Data-Nasabah.user.js
// @downloadURL  https://raw.githubusercontent.com/zinkmr3-hash/botsistemdrx/refs/heads/main/YYJ-Collector-Auto-Copy-Data-Nasabah.user.js
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    // ============ KONFIGURASI ============
    const DELAY_MS       = 800;   // jeda antar aksi — turunkan ke 500 jika koneksi cepat
    const TIMEOUT_MS     = 10000; // timeout tunggu elemen
    const AUTO_COPY      = true;  // salin tiap nasabah ke clipboard
    const AUTO_NEXT_PAGE = true;  // lanjut halaman berikutnya otomatis
    // =====================================

    const KEY_DATA = 'yyj_data';
    const KEY_RUN  = 'yyj_running';
    const KEY_PROC = 'yyj_processing';
    const KEY_PAGE = 'yyj_page';     // halaman daftar yang sedang dikerjakan

    let navLock = false; // anti-loop: cuma 1 boot yang jalan dalam satu waktu

    // ---------- Utils ----------
    const sleep = (ms) => new Promise(r => setTimeout(r, ms));

    function waitFor(fn, timeout = TIMEOUT_MS, interval = 200) {
        return new Promise((resolve, reject) => {
            const t0 = Date.now();
            (function poll() {
                try { const el = fn(); if (el) return resolve(el); } catch (e) {}
                if (Date.now() - t0 > timeout) return reject(new Error('Timeout menunggu elemen'));
                setTimeout(poll, interval);
            })();
        });
    }

    function currentRowKeys() {
        return [...document.querySelectorAll('tr.ant-table-row[data-row-key]')]
            .map(tr => tr.getAttribute('data-row-key'));
    }

    function getData()     { try { return GM_getValue(KEY_DATA, {}); } catch (e) { return {}; } }
    function setData(d)    { GM_setValue(KEY_DATA, d); }
    function isRunning()   { return GM_getValue(KEY_RUN, false); }
    function setRunning(v) { GM_setValue(KEY_RUN, v); }
    function getProcessing()   { return GM_getValue(KEY_PROC, null); }
    function setProcessing(v)  { GM_setValue(KEY_PROC, v); }
    function getPage()     { return GM_getValue(KEY_PAGE, 1); }
    function setPage(n)    { GM_setValue(KEY_PAGE, n); }

    // Normalisasi nomor: 62xxx -> 8xxx, 0xxx -> 8xxx (hanya digit, awalan 8)
    function normalizePhone(raw) {
        let p = String(raw || '').replace(/\D/g, '');
        if (p.startsWith('62'))  p = p.slice(2);
        else if (p.startsWith('0')) p = p.slice(1);
        if (!p.startsWith('8')) p = '8' + p;
        return p;
    }

    function copyText(t) {
        if (!AUTO_COPY) return;
        const ta = document.createElement('textarea');
        ta.value = t;
        ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0;';
        document.body.appendChild(ta);
        ta.focus(); ta.select();
        try { document.execCommand('copy'); } catch (e) {}
        ta.remove();
    }

    // ---------- Helper pagination ----------
    function activePage() {
        const li = document.querySelector('.ant-pagination-item-active');
        if (!li) return 1;
        return parseInt(li.getAttribute('title') || li.textContent, 10) || 1;
    }

    // Kembalikan elemen tombol "next" yang bisa diklik, atau null kalau sudah halaman terakhir
    function getNextBtn() {
        const li = document.querySelector('.ant-pagination-next');
        if (!li) return null;
        if (li.classList.contains('ant-pagination-disabled') ||
            li.getAttribute('aria-disabled') === 'true') return null;
        const btn = li.querySelector('button');
        if (btn && btn.disabled) return null;
        return btn || li.querySelector('a') || li;
    }

    // Klik "next" lalu tunggu isi tabel benar-benar berganti. Return true kalau berhasil.
    async function clickNextAndWait() {
        const btn = getNextBtn();
        if (!btn) return false;
        const before = new Set(currentRowKeys());
        await sleep(DELAY_MS);
        btn.click();
        await waitFor(() => {
            const now = currentRowKeys();
            return now.length > 0 && now.some(k => !before.has(k)) ? true : null;
        }, 15000, 300);
        await sleep(600);
        return true;
    }

    // ---------- Panel UI ----------
    const panel = document.createElement('div');
    panel.style.cssText = 'position:fixed;top:70px;right:12px;z-index:999999;background:#fff;' +
        'border:1px solid #d9d9d9;border-radius:8px;box-shadow:0 4px 16px rgba(0,0,0,.15);' +
        'padding:12px;width:250px;font:13px/1.5 -apple-system,Segoe UI,Arial;';
    panel.innerHTML = `
        <div style="font-weight:700;margin-bottom:8px;">🤖 Auto Copy Nasabah</div>
        <div style="display:flex;gap:6px;margin-bottom:8px;">
            <button id="yyjStart" style="flex:1;padding:6px;background:#1677ff;color:#fff;border:none;border-radius:4px;cursor:pointer;">▶ Mulai</button>
            <button id="yyjStop" style="flex:1;padding:6px;background:#ff4d4f;color:#fff;border:none;border-radius:4px;cursor:pointer;">⏹ Stop</button>
        </div>
        <div style="display:flex;gap:6px;margin-bottom:8px;">
            <button id="yyjXlsx" style="flex:1;padding:6px;background:#52c41a;color:#fff;border:none;border-radius:4px;cursor:pointer;">⬇ XLSX</button>
            <button id="yyjReset" style="flex:1;padding:6px;background:#faad14;color:#fff;border:none;border-radius:4px;cursor:pointer;">🗡 Reset</button>
        </div>
        <div id="yyjStatus" style="background:#f5f5f5;border-radius:4px;padding:6px;min-height:36px;font-size:12px;word-break:break-all;">Siap.</div>
    `;
    document.body.appendChild(panel);

    const statusEl = panel.querySelector('#yyjStatus');
    function log(msg) { statusEl.innerHTML = msg + '<br><small>' + new Date().toLocaleTimeString('id-ID') + '</small>'; }

    panel.querySelector('#yyjStart').onclick = () => {
        setRunning(true);
        // mulai dari halaman yang sedang dibuka
        if (!/\/cases\/C\d+/.test(location.pathname)) setPage(activePage());
        log('▶ Mulai...');
        boot();
    };
    panel.querySelector('#yyjStop').onclick  = () => { setRunning(false); setProcessing(null); log('⏹ Stop.'); };
    panel.querySelector('#yyjReset').onclick = () => {
        setRunning(false);
        GM_deleteValue(KEY_DATA);
        GM_deleteValue(KEY_PAGE);
        setProcessing(null);
        log('🗑 Data dihapus.');
    };
    panel.querySelector('#yyjXlsx').onclick  = exportXLSX;

    // ---------- Ekspor XLSX ----------
    function exportXLSX() {
        const d = getData();
        const keys = Object.keys(d);
        if (keys.length === 0) { log('Belum ada data.'); return; }

        const aoa = [['NAMA', 'MOBILE', 'APPLIKASI']];
        for (const k of keys) {
            const v = d[k];
            aoa.push([v.nama || '', normalizePhone(v.telepon), v.aplikasi || '']);
        }
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet(aoa);
        ws['!cols'] = [{ wch: 30 }, { wch: 16 }, { wch: 18 }];
        XLSX.utils.book_append_sheet(wb, ws, 'Nasabah');
        XLSX.writeFile(wb, 'data_nasabah_' + new Date().toISOString().slice(0, 10) + '.xlsx');
        log('✅ XLSX diekspor: <b>' + keys.length + '</b> nasabah.');
    }

    // ---------- Ekstraksi field di halaman Detail ----------
    function extractField(label) {
        const items = document.querySelectorAll('.ant-descriptions-item');
        for (const it of items) {
            const lb = it.querySelector('.ant-descriptions-item-label');
            if (lb && lb.textContent.trim().replace(/\s+/g, ' ') === label) {
                const ct = it.querySelector('.ant-descriptions-item-content');
                if (ct) return ct.textContent.trim().replace(/\s+/g, ' ');
            }
        }
        const all = [...document.querySelectorAll('span, div, label')];
        for (const el of all) {
            if (el.children.length === 0 && el.textContent.trim().replace(/\s+/g, ' ') === label) {
                const parent = el.parentElement;
                if (parent) {
                    const sib = [...parent.children].find(c => c !== el && c.textContent.trim());
                    if (sib) return sib.textContent.trim().replace(/\s+/g, ' ');
                }
            }
        }
        return '';
    }

    // ---------- FASE 1: Halaman Detail Kasus ----------
    async function processDetailPage() {
        const caseNo = (location.pathname.match(/cases\/(C\d+)/) || [])[1];
        if (!caseNo) return;

        log('📄 Detail: <b>' + caseNo + '</b>');

        const tabBtn = await waitFor(() =>
            document.querySelector('.ant-tabs-tab[data-node-key="user"] .ant-tabs-tab-btn') ||
            document.querySelector('[id^="rc-tabs"][id$="-tab-user"]')
        );
        if (tabBtn.getAttribute('aria-selected') !== 'true') {
            tabBtn.click();
            await sleep(400);
        }

        await waitFor(() => extractField('Nama sesuai identitas') ? true : null, 5000, 150);
        const nama     = extractField('Nama sesuai identitas');
        const telepon  = normalizePhone(extractField('Telepon peminjam'));
        const aplikasi = extractField('Aplikasi pinjaman');

        const d = getData();
        d[caseNo] = { nama, telepon, aplikasi };
        setData(d);
        setProcessing(null);

        copyText(`${nama}\t${telepon}\t${aplikasi}`);

        const count = Object.keys(d).length;
        log(`✅ <b>${count}</b> | ${nama} | ${telepon} | ${aplikasi}`);

        await sleep(DELAY_MS);
        history.back();
    }

    // ---------- FASE 2: Halaman Daftar Kasus ----------
    // Return true jika boot() perlu dijalankan ulang (setelah pindah halaman).
    async function processListPage() {
        await waitFor(() => currentRowKeys().length > 0);
        await sleep(300);

        // Setelah history.back(), tabel sering reset ke halaman 1.
        // Maju lagi ke halaman yang sedang dikerjakan.
        const targetPage = getPage();
        while (activePage() < targetPage) {
            log(`↪ Menuju halaman <b>${targetPage}</b> (sekarang ${activePage()})...`);
            const ok = await clickNextAndWait();
            if (!ok) break;
        }

        const data = getData();
        const rows = [...document.querySelectorAll('tr.ant-table-row[data-row-key]')];

        let target = null;
        for (const tr of rows) {
            const key = tr.getAttribute('data-row-key');
            if (!data[key]) { target = tr; break; }
        }

        if (target) {
            const key = target.getAttribute('data-row-key');
            setProcessing(key);
            setPage(activePage()); // ingat halaman ini untuk kembali nanti
            const link = target.querySelector('td:last-child a') ||
                         [...target.querySelectorAll('a,button,span')].find(e => e.textContent.trim() === 'Detail');
            if (link) { await sleep(DELAY_MS); link.click(); }
            return false;
        }

        // Semua baris halaman ini selesai → pagination
        if (AUTO_NEXT_PAGE) {
            if (getNextBtn()) {
                const cur = activePage();
                log(`Halaman ${cur} selesai → ke halaman ${cur + 1}...`);
                try {
                    const ok = await clickNextAndWait();
                    if (ok) {
                        setPage(activePage());
                        return true; // lanjut proses halaman baru (setelah navLock dilepas)
                    }
                } catch (e) {
                    log('⚠️ Halaman tidak berubah, coba lagi...');
                    setTimeout(boot, 3000);
                    return false;
                }
            }
            setRunning(false);
            const n = Object.keys(getData()).length;
            log(`🏁 Selesai semua halaman! <b>${n}</b> nasabah.<br>Klik ⬇ XLSX untuk ekspor.`);
        } else {
            setRunning(false);
            log('🏁 Semua baris di halaman ini selesai.');
        }
        return false;
    }

    // ---------- Router (dengan lock) ----------
    async function boot() {
        if (!isRunning() || navLock) return;
        navLock = true;
        let again = false;
        try {
            if (/\/cases\/C\d+/.test(location.pathname)) await processDetailPage();
            else again = await processListPage();
        } catch (e) {
            log('⚠️ ' + e.message + ' — ulang...');
            setTimeout(boot, 2500);
        } finally {
            navLock = false; // lock dilepas SEBELUM boot dipanggil lagi
        }
        if (again) setTimeout(boot, 300);
    }

    // Deteksi navigasi SPA (react-router tidak memicu reload)
    let lastUrl = location.href;
    new MutationObserver(() => {
        if (!isRunning()) return;
        if (location.href !== lastUrl) {
            lastUrl = location.href;
            setTimeout(boot, 500);
        }
    }).observe(document.documentElement, { childList: true, subtree: true });

    if (isRunning()) {
        log('▶ Resume...' + (getProcessing() ? '<br>Terakhir: ' + getProcessing() : ''));
        setTimeout(boot, 1200);
    } else {
        log('Siap. Tekan <b>Mulai</b> di tab kasus.');
    }
})();
