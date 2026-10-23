// ==UserScript==
// @name         YYJ Collector - Auto Isi Log Penagihan
// @namespace    yyj-collector-tools
// @version      1.1
// @description  Auto buka Detail -> Tambah catatan penagihan -> isi form (Hasil kontak, catatan acak, tanggal "Sekarang") -> Simpan catatan. Auto-pagination.
// @match        https://admin.yuanyiyanjie.org/id/collector-platform/cases*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    // ============ KONFIGURASI ============
    const DELAY_MS       = 800;    // jeda antar aksi
    const TIMEOUT_MS     = 10000;  // timeout tunggu elemen
    const AUTO_NEXT_PAGE = true;   // lanjut halaman berikutnya otomatis

    const ADD_BTN_TEXT   = 'Tambah catatan';           // teks tombol di halaman Detail (cocok sebagian)
    const MODAL_TITLE    = 'Tambah catatan penagihan'; // judul popup
    const HASIL_LABEL    = 'Hasil kontak';             // kolom 2
    const HASIL_VALUE    = 'Tidak ada respons';        // opsi yang dipilih (fallback: opsi urutan ke-2)
    const CATATAN_LABEL  = 'Catatan tindak lanjut';    // kolom 5
    const CATATAN_CHOICES = ['tidak ada respons', 'belum ada respons']; // dipilih acak per nasabah
    const TANGGAL_LABEL  = 'Tindak lanjut berikutnya'; // kolom 6 (date picker)
    const SAVE_TEXT      = 'Simpan catatan';
    // =====================================

    const KEY_DONE = 'yyjlog_done';
    const KEY_RUN  = 'yyjlog_running';
    const KEY_PROC = 'yyjlog_processing';
    const KEY_PAGE = 'yyjlog_page';

    let navLock = false;

    // ---------- Utils ----------
    const sleep = (ms) => new Promise(r => setTimeout(r, ms));
    const norm  = (s) => String(s || '').replace(/\s+/g, ' ').trim().toLowerCase();

    function waitFor(fn, timeout = TIMEOUT_MS, interval = 200, msg = 'Timeout menunggu elemen') {
        return new Promise((resolve, reject) => {
            const t0 = Date.now();
            (function poll() {
                try { const el = fn(); if (el) return resolve(el); } catch (e) {}
                if (Date.now() - t0 > timeout) return reject(new Error(msg));
                setTimeout(poll, interval);
            })();
        });
    }

    function currentRowKeys() {
        return [...document.querySelectorAll('tr.ant-table-row[data-row-key]')]
            .map(tr => tr.getAttribute('data-row-key'));
    }

    function getDone()     { try { return GM_getValue(KEY_DONE, {}); } catch (e) { return {}; } }
    function setDone(d)    { GM_setValue(KEY_DONE, d); }
    function isRunning()   { return GM_getValue(KEY_RUN, false); }
    function setRunning(v) { GM_setValue(KEY_RUN, v); }
    function getProcessing()  { return GM_getValue(KEY_PROC, null); }
    function setProcessing(v) { GM_setValue(KEY_PROC, v); }
    function getPage()     { return GM_getValue(KEY_PAGE, 1); }
    function setPage(n)    { GM_setValue(KEY_PAGE, n); }

    // Simulasi klik "penuh" (antd Select/Picker butuh mousedown, bukan hanya click)
    function fullClick(el) {
        const opt = { bubbles: true, cancelable: true };
        el.dispatchEvent(new MouseEvent('mousedown', opt));
        el.dispatchEvent(new MouseEvent('mouseup', opt));
        el.dispatchEvent(new MouseEvent('click', opt));
    }

    // Isi textarea/input agar terbaca React
    function setNativeValue(el, value) {
        const proto = Object.getPrototypeOf(el);
        Object.getOwnPropertyDescriptor(proto, 'value').set.call(el, value);
        el.dispatchEvent(new Event('input',  { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
    }

    // ---------- Helper pagination ----------
    function activePage() {
        const li = document.querySelector('.ant-pagination-item-active');
        if (!li) return 1;
        return parseInt(li.getAttribute('title') || li.textContent, 10) || 1;
    }

    function getNextBtn() {
        const li = document.querySelector('.ant-pagination-next');
        if (!li) return null;
        if (li.classList.contains('ant-pagination-disabled') ||
            li.getAttribute('aria-disabled') === 'true') return null;
        const btn = li.querySelector('button');
        if (btn && btn.disabled) return null;
        return btn || li.querySelector('a') || li;
    }

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
    panel.style.cssText = 'position:fixed;top:70px;right:276px;z-index:999999;background:#fff;' +
        'border:1px solid #d9d9d9;border-radius:8px;box-shadow:0 4px 16px rgba(0,0,0,.15);' +
        'padding:12px;width:250px;font:13px/1.5 -apple-system,Segoe UI,Arial;';
    panel.innerHTML = `
        <div style="font-weight:700;margin-bottom:8px;">📝 Auto Isi Log</div>
        <div style="display:flex;gap:6px;margin-bottom:8px;">
            <button id="ylStart" style="flex:1;padding:6px;background:#1677ff;color:#fff;border:none;border-radius:4px;cursor:pointer;">▶ Mulai</button>
            <button id="ylStop" style="flex:1;padding:6px;background:#ff4d4f;color:#fff;border:none;border-radius:4px;cursor:pointer;">⏹ Stop</button>
            <button id="ylReset" style="flex:1;padding:6px;background:#faad14;color:#fff;border:none;border-radius:4px;cursor:pointer;">🗡 Reset</button>
        </div>
        <div id="ylStatus" style="background:#f5f5f5;border-radius:4px;padding:6px;min-height:36px;font-size:12px;word-break:break-all;">Siap.</div>
    `;
    document.body.appendChild(panel);

    const statusEl = panel.querySelector('#ylStatus');
    function log(msg) { statusEl.innerHTML = msg + '<br><small>' + new Date().toLocaleTimeString('id-ID') + '</small>'; }

    panel.querySelector('#ylStart').onclick = () => {
        setRunning(true);
        if (!/\/cases\/C\d+/.test(location.pathname)) setPage(activePage());
        log('▶ Mulai...');
        boot();
    };
    panel.querySelector('#ylStop').onclick  = () => { setRunning(false); setProcessing(null); log('⏹ Stop.'); };
    panel.querySelector('#ylReset').onclick = () => {
        setRunning(false);
        GM_deleteValue(KEY_DONE);
        GM_deleteValue(KEY_PAGE);
        setProcessing(null);
        log('🗑 Daftar selesai dihapus.');
    };

    // ---------- Helper popup ----------
    function getModal() {
        const modals = [...document.querySelectorAll('.ant-modal')].filter(m => {
            const t = m.querySelector('.ant-modal-title');
            return t && norm(t.textContent).includes(norm(MODAL_TITLE)) && m.offsetParent !== null;
        });
        return modals[modals.length - 1] || null;
    }

    function getFormItem(modal, label) {
        const items = [...modal.querySelectorAll('.ant-form-item')];
        return items.find(it => {
            const lb = it.querySelector('.ant-form-item-label label');
            return lb && norm(lb.textContent).includes(norm(label));
        }) || null;
    }

    function visibleSelectDropdown() {
        return [...document.querySelectorAll('.ant-select-dropdown')]
            .find(d => !d.classList.contains('ant-select-dropdown-hidden') && d.offsetParent !== null) || null;
    }

    // ---------- Isi form popup ----------
    async function fillModal(modal) {
        // Kolom 1 (Jenis), 3 (Nomor telepon), 4 (Hubungan): biarkan default.

        // Kolom 2: Hasil kontak -> buka dropdown, pilih "Tidak ada respons" (opsi urutan ke-2)
        const hasilItem = getFormItem(modal, HASIL_LABEL);
        if (!hasilItem) throw new Error('Kolom "' + HASIL_LABEL + '" tidak ditemukan');
        const sel = hasilItem.querySelector('.ant-select-selector') || hasilItem.querySelector('.ant-select');
        fullClick(sel);
        const dd = await waitFor(visibleSelectDropdown, 5000, 150, 'Dropdown Hasil kontak tidak muncul');
        await sleep(300);
        const options = [...dd.querySelectorAll('.ant-select-item-option')];
        if (!options.length) throw new Error('Opsi Hasil kontak kosong');
        const opt = options.find(o => norm(o.textContent) === norm(HASIL_VALUE)) || options[1] || options[0];
        opt.click();
        await sleep(400);

        // Kolom 5: Catatan -> acak
        const catItem = getFormItem(modal, CATATAN_LABEL);
        const ta = catItem && catItem.querySelector('textarea');
        if (!ta) throw new Error('Kolom "' + CATATAN_LABEL + '" tidak ditemukan');
        const catatan = CATATAN_CHOICES[Math.floor(Math.random() * CATATAN_CHOICES.length)];
        ta.focus();
        setNativeValue(ta, catatan);
        await sleep(300);

        // Kolom 6: Tanggal -> klik field, klik "Sekarang"
        const tglItem = getFormItem(modal, TANGGAL_LABEL);
        const inp = tglItem && tglItem.querySelector('.ant-picker input');
        if (!inp) throw new Error('Kolom "' + TANGGAL_LABEL + '" tidak ditemukan');
        inp.focus();
        fullClick(inp);
        const nowBtn = await waitFor(() =>
            document.querySelector('.ant-picker-dropdown:not(.ant-picker-dropdown-hidden) .ant-picker-now-btn'),
            5000, 150, 'Tombol "Sekarang" tidak muncul');
        await sleep(300);
        nowBtn.click();
        await sleep(500);

        // Jika panel masih terbuka dan ada tombol OK ("Baik"), klik juga
        const okBtn = document.querySelector('.ant-picker-dropdown:not(.ant-picker-dropdown-hidden) .ant-picker-ok button:not([disabled])');
        if (okBtn) { okBtn.click(); await sleep(400); }

        if (!inp.value) throw new Error('Tanggal gagal terisi');
        return catatan;
    }

    async function saveModal(modal) {
        const btn = [...modal.querySelectorAll('.ant-modal-footer button')]
            .find(b => norm(b.textContent) === norm(SAVE_TEXT));
        if (!btn) throw new Error('Tombol "' + SAVE_TEXT + '" tidak ditemukan');
        await sleep(DELAY_MS);
        btn.click();
        // tunggu popup tertutup
        await waitFor(() => getModal() ? null : true, 10000, 300, 'POPUP_TIDAK_TERTUTUP');
    }

    // ---------- FASE 1: Halaman Detail ----------
    async function processDetailPage() {
        const caseNo = (location.pathname.match(/cases\/(C\d+)/) || [])[1];
        if (!caseNo) return;

        const done = getDone();
        if (done[caseNo]) { await sleep(DELAY_MS); history.back(); return; }

        log('📄 Detail: <b>' + caseNo + '</b>');

        const addBtn = await waitFor(() => {
            const els = [...document.querySelectorAll('button, a, span')]
                .filter(e => !e.closest('.ant-modal') && norm(e.textContent).includes(norm(ADD_BTN_TEXT)));
            // ambil elemen terdalam yang cocok, lalu naik ke button jika ada
            const inner = els.find(e => ![...e.children].some(c => norm(c.textContent).includes(norm(ADD_BTN_TEXT))));
            return inner ? (inner.closest('button') || inner) : null;
        }, TIMEOUT_MS, 200, 'Tombol "' + ADD_BTN_TEXT + '" tidak ditemukan di halaman Detail');
        await sleep(400);
        addBtn.click();

        const modal = await waitFor(getModal, 8000, 200, 'Popup "' + MODAL_TITLE + '" tidak muncul');
        await sleep(600);

        const catatan = await fillModal(modal);
        try {
            await saveModal(modal);
        } catch (e) {
            if (e.message === 'POPUP_TIDAK_TERTUTUP') {
                // jangan lanjut agar tidak ada log ganda
                setRunning(false);
                log('⚠️ Popup belum tertutup setelah Simpan (cek validasi form). Dihentikan di <b>' + caseNo + '</b>.');
                return;
            }
            throw e;
        }

        done[caseNo] = catatan;
        setDone(done);
        setProcessing(null);
        log(`✅ <b>${Object.keys(done).length}</b> | ${caseNo} | "${catatan}"`);

        await sleep(DELAY_MS);
        history.back();
    }

    // ---------- FASE 2: Halaman Daftar ----------
    async function processListPage() {
        await waitFor(() => currentRowKeys().length > 0);
        await sleep(300);

        const targetPage = getPage();
        while (activePage() < targetPage) {
            log(`↪ Menuju halaman <b>${targetPage}</b> (sekarang ${activePage()})...`);
            const ok = await clickNextAndWait();
            if (!ok) break;
        }

        const done = getDone();
        const rows = [...document.querySelectorAll('tr.ant-table-row[data-row-key]')];

        let target = null;
        for (const tr of rows) {
            if (!done[tr.getAttribute('data-row-key')]) { target = tr; break; }
        }

        if (target) {
            setProcessing(target.getAttribute('data-row-key'));
            setPage(activePage());
            const link = target.querySelector('td:last-child a') ||
                         [...target.querySelectorAll('a,button,span')].find(e => e.textContent.trim() === 'Detail');
            if (link) { await sleep(DELAY_MS); link.click(); }
            return false;
        }

        if (AUTO_NEXT_PAGE) {
            if (getNextBtn()) {
                const cur = activePage();
                log(`Halaman ${cur} selesai → ke halaman ${cur + 1}...`);
                try {
                    const ok = await clickNextAndWait();
                    if (ok) { setPage(activePage()); return true; }
                } catch (e) {
                    log('⚠️ Halaman tidak berubah, coba lagi...');
                    setTimeout(boot, 3000);
                    return false;
                }
            }
            setRunning(false);
            log(`🏁 Selesai semua halaman! <b>${Object.keys(getDone()).length}</b> nasabah diisi.`);
        } else {
            setRunning(false);
            log('🏁 Semua baris di halaman ini selesai.');
        }
        return false;
    }

    // ---------- Router ----------
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
            navLock = false;
        }
        if (again) setTimeout(boot, 300);
    }

    // Deteksi navigasi SPA
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
        log('Siap. Tekan <b>Mulai</b> di halaman daftar kasus.');
    }
})();
