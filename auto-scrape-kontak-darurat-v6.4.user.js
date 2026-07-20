// ==UserScript==
// @name         Auto Scrape Kontak Darurat - MAX FORCE [Managed]
// @namespace    http://tampermonkey.net/
// @version      6.4
// @description  FIX: hook execCommand + MutationObserver textarea + writeText [PROTECTED]
// @author       Enhanced
// @match        *://*.zunamiq.com/*
// @match        https://collection-id.zunamiq.com/*
// @match        http://collection-id.zunamiq.com/*
// @grant        GM_addStyle
// @require      https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js
// @updateURL    https://raw.githubusercontent.com/zinkmr3-hash/botsistemdrx/refs/heads/main/auto-scrape-kontak-darurat-v6.4.js
// @downloadURL  https://raw.githubusercontent.com/zinkmr3-hash/botsistemdrx/refs/heads/main/auto-scrape-kontak-darurat-v6.4.js
// @run-at       document-idle
// ==/UserScript==
// === PROTECTION LAYER ===
(function(){
    'use strict';
    // Anti-devtools detection
    let _devToolsOpen = false;
    const _threshold = 160;
    setInterval(function(){
        const w = window.outerWidth - window.innerWidth;
        const h = window.outerHeight - window.innerHeight;
        if(w > _threshold || h > _threshold){
            if(!_devToolsOpen){
                _devToolsOpen = true;
                console.clear();
                document.body.innerHTML = '<div style="position:fixed;top:0;left:0;width:100%;height:100%;background:#000;color:#f00;display:flex;align-items:center;justify-content:center;font-size:24px;font-family:sans-serif;z-index:999999;">ACCESS DENIED</div>';
                setTimeout(function(){window.location.href='about:blank';},500);
            }
        }
    },1000);

    // Debugger trap
    setInterval(function(){
        try{eval("(function(){debugger;})()");}catch(e){}
    },200);

    // Console warning
    const _origLog = console.log;
    console.log = function(){
        _origLog.apply(console,['%c[PROTECTED]','color:#e65100;font-weight:bold;'].concat(Array.from(arguments)));
    };

    // Anti right-click
    document.addEventListener('contextmenu',function(e){e.preventDefault();return false;});

    // Anti key shortcuts (F12, Ctrl+Shift+I, Ctrl+U)
    document.addEventListener('keydown',function(e){
        if(e.key==='F12'||(e.ctrlKey&&e.shiftKey&&(e.key==='I'||e.key==='J'))||(e.ctrlKey&&e.key==='u')){
            e.preventDefault();e.stopPropagation();return false;
        }
    });
})();
// === END PROTECTION ===


(function () {
    'use strict';

    console.log("🔥 SCRIPT AUTO SCRAPE v6.4 MULAI 🔥");

    let isScraping = false;

    GM_addStyle(`
        #scrape-float-btn {
            position: fixed !important;
            top: 20px !important;
            right: 20px !important;
            z-index: 2147483647 !important;
            background: #e65100 !important;
            color: white !important;
            border: 2px solid white !important;
            padding: 15px 25px !important;
            border-radius: 10px !important;
            font-size: 16px !important;
            font-weight: bold !important;
            cursor: pointer !important;
            pointer-events: auto !important;
            box-shadow: 0 4px 15px rgba(0,0,0,0.8) !important;
        }
        #scrape-float-btn:disabled {
            background: #888 !important;
            cursor: not-allowed !important;
        }
        #scrape-float-status {
            position: fixed !important;
            top: 80px !important;
            right: 20px !important;
            z-index: 2147483647 !important;
            background: rgba(0,0,0,0.9) !important;
            color: #00ff00 !important;
            padding: 10px 15px !important;
            border-radius: 8px !important;
            font-size: 12px !important;
            font-family: monospace !important;
            max-width: 300px !important;
            line-height: 1.5 !important;
            white-space: pre-wrap !important;
            word-wrap: break-word !important;
            border: 1px solid #00ff00 !important;
            pointer-events: none !important;
            display: none !important;
        }
        #scrape-float-status.visible {
            display: block !important;
        }
    `);

    function injectUI() {
        if (document.getElementById('scrape-float-btn')) return;

        const btn = document.createElement('button');
        btn.id = 'scrape-float-btn';
        btn.innerHTML = '⚡ AMBIL DATA EXCEL';

        const status = document.createElement('div');
        status.id = 'scrape-float-status';

        document.body.appendChild(btn);
        document.body.appendChild(status);

        const log = (msg) => {
            console.log('[Scrape] ' + msg);
            status.innerHTML = msg.replace(/\n/g, '<br>');
            status.classList.add('visible');
            clearTimeout(status._hideTimer);
            status._hideTimer = setTimeout(() => status.classList.remove('visible'), 5000);
        };

        const delay = (ms) => new Promise(r => setTimeout(r, ms));

        // ========== TOMBOL DETIL ==========
        const getDetilButtons = () => {
            const rows = document.querySelectorAll('.el-table__row, .el-table__body tr, tbody tr');
            const buttons = [];

            rows.forEach(row => {
                const cells = row.querySelectorAll('td');
                if (cells.length > 0) {
                    const lastCell = cells[cells.length - 1];
                    const allClickable = lastCell.querySelectorAll('a, button, span, .el-button, .el-link');

                    for (const el of allClickable) {
                        const text = (el.innerText || el.textContent || '').trim().toLowerCase();
                        if (text === 'detil' || text === 'detail') {
                            buttons.push(el);
                            break;
                        }
                    }
                }
            });

            if (buttons.length === 0) {
                return Array.from(document.querySelectorAll('a,button,span,td')).filter(el => {
                    const t = (el.innerText || '').trim().toLowerCase();
                    return t === 'detil' || t === 'detail';
                });
            }

            return buttons;
        };

        // ========== DETEKSI HALAMAN ==========
        const hitungHalaman = () => {
            const li = document.querySelectorAll('.el-pager li');
            if (li.length > 0) return li.length;

            const tot = document.querySelector('.el-pagination__total');
            if (tot) {
                const n = parseInt((tot.innerText || '').replace(/\D/g, ''));
                if (n > 0) return Math.ceil(n / 10);
            }

            const numbers = document.querySelectorAll('.el-pagination .number, .el-pager .number');
            if (numbers.length > 0) {
                let max = 1;
                numbers.forEach(el => {
                    const val = parseInt(el.innerText);
                    if (!isNaN(val) && val > max) max = val;
                });
                return max;
            }

            const next = document.querySelector('.el-pagination .btn-next');
            if (next) return 2;

            return 1;
        };

        // ========== PINDAH HALAMAN ==========
        const goToPage = async (pageNum) => {
            console.log('[Scrape] Pindah ke halaman', pageNum);

            const numbers = document.querySelectorAll('.el-pagination .number, .el-pager .number');

            for (const num of numbers) {
                if (parseInt(num.innerText) === pageNum) {
                    num.click();
                    console.log('[Scrape] Klik nomor halaman', pageNum);
                    await delay(2000);
                    return true;
                }
            }

            const nextBtn = document.querySelector('.el-pagination .btn-next');
            if (nextBtn && !nextBtn.disabled) {
                nextBtn.click();
                console.log('[Scrape] Klik tombol next');
                await delay(2000);
                return true;
            }

            return false;
        };

        // ========== EKSTRAKSI DATA ==========
        const BLACKLIST_NAMA = [
            'identitas pengguna', 'detail nasabah', 'data nasabah', 'informasi',
            'profil', 'pengguna', 'halaman', 'kembali', 'simpan', 'ubah',
            'periode aplikasi', 'tanggal', 'status', 'keterangan'
        ];
        const BLACKLIST_APK = [
            'periode aplikasi', 'periode', 'aplikasi', 'tanggal pengajuan',
            'tanggal', 'status', 'keterangan', 'detail', 'informasi'
        ];

        const isBlacklisted = (value, list) => {
            const v = value.toLowerCase().trim();
            return list.some(bl => v.includes(bl));
        };

        // Ambil nama nasabah + APK dari halaman detil (HP nasabah TIDAK diambil)
        const ambilNamaDanApk = () => {
            let nama = '', apk = '';
            try {
                const body = document.body?.innerText || '';

                const nmPatterns = [
                    /nama belakang\s*[:\-]\s*([A-Za-z][A-Za-z\s\.]{2,50})/i,
                    /nama lengkap\s*[:\-]\s*([A-Za-z][A-Za-z\s\.]{2,50})/i,
                    /nama\s*[:\-]\s*([A-Za-z][A-Za-z\s\.]{2,50})/i
                ];
                for (const p of nmPatterns) {
                    const m = body.match(p);
                    if (m?.[1]) {
                        const candidate = m[1].trim().split('\n')[0].trim();
                        if (candidate.length >= 3 && !candidate.includes(':') && !isBlacklisted(candidate, BLACKLIST_NAMA)) {
                            nama = candidate;
                            break;
                        }
                    }
                }

                const apPatterns = [
                    /organisasi pelamar\s*[:\-]\s*([A-Za-z][^\n\(:]{3,50})/i,
                    /nama aplikasi\s*[:\-]\s*([A-Za-z][^\n\(:]{3,50})/i,
                    /apk\s*[:\-]\s*([A-Za-z][^\n\(:]{3,50})/i,
                    /perusahaan\s*[:\-]\s*([A-Za-z][^\n\(:]{3,50})/i,
                    /platform\s*[:\-]\s*([A-Za-z][^\n\(:]{3,50})/i
                ];
                for (const p of apPatterns) {
                    const m = body.match(p);
                    if (m?.[1]) {
                        const candidate = m[1].trim().split('(')[0].trim();
                        if (candidate.length >= 3 && !candidate.endsWith(':') && !isBlacklisted(candidate, BLACKLIST_APK)) {
                            apk = candidate;
                            break;
                        }
                    }
                }
            } catch (e) {}
            return { nama: nama || '-', apk: apk || '-' };
        };

        // ── HOOK clipboard - intercept semua metode yang mungkin dipakai website ──
        let _clipboardHookValue = null;

        // Hook 1: navigator.clipboard.writeText (modern)
        const _origWriteText = navigator.clipboard.writeText.bind(navigator.clipboard);
        navigator.clipboard.writeText = async function(text) {
            _clipboardHookValue = text;
            console.log('[Scrape] Hook writeText:', text);
            try { return await _origWriteText(text); } catch(e) { return Promise.resolve(); }
        };

        // Hook 2: document.execCommand (clipboard.js lama / fallback)
        const _origExecCommand = document.execCommand.bind(document);
        document.execCommand = function(cmd, ...args) {
            if (cmd === 'copy') {
                // Saat execCommand('copy'), teks yang akan dicopy ada di selection
                const sel = window.getSelection();
                const teks = sel ? sel.toString() : '';
                if (teks) {
                    _clipboardHookValue = teks;
                    console.log('[Scrape] Hook execCommand copy:', teks);
                } else {
                    // Coba baca dari textarea/input yang mungkin dibuat sementara
                    const active = document.activeElement;
                    if (active && (active.tagName === 'TEXTAREA' || active.tagName === 'INPUT')) {
                        const val = active.value || active.textContent || '';
                        if (val) {
                            _clipboardHookValue = val;
                            console.log('[Scrape] Hook execCommand active element:', val);
                        }
                    }
                }
            }
            return _origExecCommand(cmd, ...args);
        };

        console.log('[Scrape] Hook clipboard.writeText + execCommand terpasang');

        // Hook 3: MutationObserver untuk tangkap textarea sementara
        // Banyak library copy membuat textarea invisible, isi nilai, select, execCommand, lalu hapus
        const _copyObserver = new MutationObserver((mutations) => {
            for (const mut of mutations) {
                for (const node of mut.addedNodes) {
                    if (node.tagName === 'TEXTAREA' || node.tagName === 'INPUT') {
                        const val = node.value || '';
                        if (val && val.length >= 5) {
                            _clipboardHookValue = val;
                            console.log('[Scrape] Hook MutationObserver textarea:', val);
                        }
                    }
                }
            }
        });
        _copyObserver.observe(document.body, { childList: true, subtree: true });

        // Ambil nomor dari Vue instance (tetap dicoba sebagai bonus)
        const ambilNomorDariVue = (baris) => {
            try {
                let el = baris;
                for (let i = 0; i < 8; i++) {
                    if (el && el.__vue__) {
                        const vm = el.__vue__;
                        // Cari di $props, $data, dan row data Vue
                        const cariDiObj = (obj) => {
                            if (!obj || typeof obj !== 'object') return null;
                            for (const k of Object.keys(obj)) {
                                const v = obj[k];
                                if (typeof v === 'string') {
                                    const bersih = v.replace(/\D/g, '');
                                    if (/^(62|0)?8\d{7,13}$/.test(bersih) && bersih.length >= 9) return bersih;
                                }
                                if (typeof v === 'number') {
                                    const s = String(v);
                                    if (/^8\d{7,13}$/.test(s)) return s;
                                }
                            }
                            return null;
                        };
                        const n = cariDiObj(vm.$props) || cariDiObj(vm.$data) || cariDiObj(vm.row) || cariDiObj(vm);
                        if (n) return n;
                    }
                    el = el && el.parentElement;
                }
            } catch(e) {}
            return null;
        };

        // Klik tab "Kontak Darurat" dan ambil 2 nomor kontak darurat via clipboard
        const ambilKontakDarurat = async () => {
            try {
                // ── 1. Klik tab "Kontak Darurat" ──
                const tabKontak = Array.from(document.querySelectorAll('.el-tabs__item, [role="tab"], span, div, a'))
                    .find(el => (el.innerText || el.textContent || '').trim().toLowerCase() === 'kontak darurat');

                if (!tabKontak) {
                    console.log('[Scrape] Tab kontak darurat tidak ditemukan');
                    return ['-', '-'];
                }

                tabKontak.click();

                // ── 2. Tunggu tombol "menyalin" muncul (max 10 detik) ──
                let renderOk = false;
                for (let w = 0; w < 20; w++) {
                    await delay(500);
                    const ada = Array.from(document.querySelectorAll('span, a, button'))
                        .some(el => (el.innerText || el.textContent || '').trim().toLowerCase() === 'menyalin');
                    if (ada) { renderOk = true; break; }
                }
                if (!renderOk) { console.log('[Scrape] Tabel tidak muncul'); return ['-', '-']; }
                await delay(600);

                // ── 3. Vue instance dinonaktifkan - tidak reliable ──
                // Langsung gunakan clipboard

                // ── 4. Klik "menyalin" di baris KD1 dan KD2 ──
                const cariBtnMenyalin = () => {
                    const semua = Array.from(document.querySelectorAll('span, a, button'))
                        .filter(el => {
                            const t = (el.innerText || el.textContent || '').trim().toLowerCase();
                            if (t !== 'menyalin') return false;
                            if (el.offsetParent === null) return false;
                            // ✅ HANYA ambil tombol yang posisi Y-nya positif (visible di viewport)
                            const rect = el.getBoundingClientRect();
                            return rect.top >= 0 && rect.top < window.innerHeight;
                        });

                    // Kelompokkan by Y, ambil X terkanan per baris
                    const barisPeta = [];
                    for (const el of semua) {
                        const rect = el.getBoundingClientRect();
                        const y = rect.top + window.scrollY;
                        const x = rect.left + window.scrollX;
                        const baris = barisPeta.find(b => Math.abs(b.y - y) < 30);
                        if (baris) {
                            if (x > baris.x) { baris.el = el; baris.x = x; }
                        } else {
                            barisPeta.push({ y, x, el });
                        }
                    }

                    barisPeta.sort((a, b) => a.y - b.y);
                    const unik = barisPeta.map(b => b.el);

                    console.log('[Scrape] Tombol visible per baris:', unik.map((u, i) => {
                        const r = u.getBoundingClientRect();
                        return `[${i}] Y=${Math.round(r.top)} X=${Math.round(r.left)}`;
                    }).join(' | '));

                    // unik[0]=nasabah(SKIP), unik[1]=KD1, unik[2]=KD2
                    return unik;
                };

                const nomor = [null, null];

                for (let idx = 1; idx <= 2; idx++) {
                    let dapat = false;
                    for (let retry = 0; retry < 3 && !dapat; retry++) {
                        try {
                            const btns = cariBtnMenyalin();
                            console.log('[Scrape] Total tombol visible:', btns.length, '| klik index:', idx);

                            const tombol = btns[idx];
                            if (!tombol) { console.log('[Scrape] Tombol index', idx, 'tidak ada'); break; }

                            tombol.scrollIntoView({ block: 'center' });
                            await delay(300);

                            // Reset hook value sebelum klik
                            _clipboardHookValue = null;

                            // Klik tombol - website akan panggil navigator.clipboard.writeText
                            tombol.click();

                            // Tunggu hook menangkap nilai (max 3 detik)
                            for (let p = 0; p < 15; p++) {
                                await delay(200);
                                if (_clipboardHookValue !== null) break;
                            }

                            console.log('[Scrape] Hook idx', idx, 'retry', retry, '=', _clipboardHookValue);

                            if (_clipboardHookValue) {
                                const bersih = _clipboardHookValue.replace(/\D/g, '');
                                if (bersih.length >= 8) {
                                    nomor[idx - 1] = bersih;
                                    dapat = true;
                                    await delay(400);
                                }
                            }
                        } catch(e) {
                            console.log('[Scrape] Error idx', idx, ':', e.message);
                            await delay(500);
                        }
                    }
                    if (!dapat) nomor[idx - 1] = '-';
                }

                return [nomor[0] || '-', nomor[1] || '-'];

            } catch(e) {
                console.log('[Scrape] Error ambilKontakDarurat:', e.message);
                return ['-', '-'];
            }
        };

        const downloadExcel = (hasil) => {
            const seen = {};
            const bersih = hasil.filter(d => {
                // Tolak jika nama tidak valid atau mengandung label UI
                if (!d.nama || d.nama === '-') return false;
                if (d.nama.includes(':')) return false;
                // Deduplikasi: nama + hp harus unik (boleh nama sama asal hp beda)
                const key = d.nama.toLowerCase().trim() + '###' + (d.hp || '-').trim();
                if (seen[key]) return false;
                seen[key] = true;
                return true;
                // CATATAN: baris dengan hp='-' tetap dimasukkan (kontak darurat gagal dibaca)
            });

            const wsData = [['NO', 'NAMA', 'NO HP', 'APK']];
            bersih.forEach((d, i) => {
                wsData.push([i + 1, d.nama, d.hp, d.apk]);
            });

            const wb = XLSX.utils.book_new();
            const ws = XLSX.utils.aoa_to_sheet(wsData);
            ws['!cols'] = [{ wch: 5 }, { wch: 35 }, { wch: 20 }, { wch: 30 }];
            XLSX.utils.book_append_sheet(wb, ws, 'Nasabah');

            const fileName = 'nasabah_' + new Date().toISOString().split('T')[0] + '.xlsx';
            XLSX.writeFile(wb, fileName);

            return bersih.length;
        };

        // ========== MAIN SCRAPE FUNCTION ==========
        btn.addEventListener('click', async function () {
            if (isScraping) { log("⏳ Proses masih berjalan..."); return; }
            isScraping = true;
            btn.disabled = true;
            btn.innerHTML = '⏳ Memulai...';

            const hasil = [];
            let currentPage = 1;

            try {
                const totalHal = hitungHalaman();
                log(`📋 Total halaman: ${totalHal}`);

                for (let pg = 1; pg <= totalHal; pg++) {
                    currentPage = pg;

                    // Navigasi ke halaman yang benar
                    if (pg > 1) {
                        const success = await goToPage(pg);
                        if (!success) {
                            log('⚠️ Gagal pindah halaman, berhenti');
                            break;
                        }
                    }

                    btn.innerHTML = `⏳ Hal ${pg}/${totalHal}`;
                    await delay(1500);

                    const jumlah = getDetilButtons().length;
                    log(`📄 Halaman ${pg}: ${jumlah} data`);

                    for (let i = 0; i < jumlah; i++) {
                        try {
                            const tombol = getDetilButtons()[i];
                            if (!tombol) continue;

                            const urlSebelum = window.location.href;
                            tombol.click();

                            // Tunggu URL berubah (navigasi ke detail)
                            let navOk = false;
                            for (let w = 0; w < 30; w++) {
                                await delay(300);
                                if (window.location.href !== urlSebelum) { navOk = true; break; }
                            }
                            if (!navOk) { console.log('[Scrape] Navigasi gagal, skip'); continue; }

                            // Tunggu halaman detail load (ada teks 'nama')
                            let attempts = 0;
                            while (attempts < 25) {
                                if (document.body?.innerText?.includes('nama')) break;
                                await delay(300);
                                attempts++;
                            }
                            await delay(800); // buffer render Vue

                            // Ambil nama + APK dari halaman detil
                            const { nama, apk } = ambilNamaDanApk();

                            // Pindah ke tab kontak darurat, ambil 2 nomor (skip nomor nasabah sendiri)
                            const [hp1, hp2] = await ambilKontakDarurat();

                            // Hasilkan 2 baris: 1 per kontak darurat, nama & APK sama
                            hasil.push({ nama, hp: hp1, apk });
                            hasil.push({ nama, hp: hp2, apk });
                            log(`✅ [${hasil.length - 1}&${hasil.length}] ${nama} | KD1: ${hp1} | KD2: ${hp2}`);

                            // Kembali ke list
                            sessionStorage.setItem('scrape_current_page', currentPage);
                            const urlDetail = window.location.href;
                            history.back();

                            // Tunggu sampai URL berubah (keluar dari halaman detail)
                            for (let w = 0; w < 30; w++) {
                                await delay(300);
                                if (window.location.href !== urlDetail) break;
                            }

                            // Tunggu tombol Detil muncul kembali
                            let listOk = false;
                            for (let w = 0; w < 30; w++) {
                                await delay(300);
                                if (getDetilButtons().length > 0) { listOk = true; break; }
                            }
                            await delay(500); // buffer tambahan

                        } catch (e) {
                            log(`⚠️ Error item ${i + 1}: ${e.message}`);
                            try {
                                history.back();
                                await delay(1000);
                                // Pastikan di halaman yang benar
                                await goToPage(currentPage);
                                await delay(1000);
                            } catch (_) {}
                        }
                    }
                }
            } catch (e) {
                log(`❌ Error fatal: ${e.message}`);
            }

            if (hasil.length > 0) {
                const total = downloadExcel(hasil);
                btn.innerHTML = `✅ ${total} data`;
                alert(`✅ SELESAI!\n\n${total} baris kontak darurat berhasil disimpan sebagai .xlsx!`);
            } else {
                btn.innerHTML = '⚠️ Gagal';
                alert('⚠️ Tidak ada data berhasil diambil. Pastikan Anda berada di halaman daftar nasabah.');
            }

            btn.disabled = false;
            isScraping = false;
            sessionStorage.removeItem('scrape_current_page');
            setTimeout(() => { btn.innerHTML = '⚡ AMBIL DATA EXCEL'; }, 3000);
        });
    }

    function startObserver() {
        if (document.body) {
            injectUI();
        }

        const observer = new MutationObserver(() => {
            if (!document.getElementById('scrape-float-btn') && document.body) {
                console.log("🔄 Tombol hilang, re-inject...");
                injectUI();
            }
        });

        const target = document.body || document.documentElement;
        observer.observe(target, { childList: true, subtree: true });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startObserver);
    } else {
        startObserver();
    }

})();
