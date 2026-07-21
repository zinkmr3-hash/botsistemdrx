// ==UserScript==
// @name         WIDA-Auto-copy-data-nasabah-v4.5
// @namespace    http://tampermonkey.net/
// @version      4.5
// @description  FIX: pagination tidak berulang - Output XLSX
// @author       You
// @match        *://*.zunamiq.com/*
// @match        https://collection-id.zunamiq.com/*
// @match        http://collection-id.zunamiq.com/*
// @grant        GM_addStyle
// @require      https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js
// @updateURL    https://raw.githubusercontent.com/zinkmr3-hash/botsistemdrx/main/WIDA-Auto-copy-data-nasabah-v4.5.user.js
// @downloadURL  https://raw.githubusercontent.com/zinkmr3-hash/botsistemdrx/main/WIDA-Auto-copy-data-nasabah-v4.5.user.js
// @version      v4.5  // <-- naikkan versi saat update
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    console.log("🔥 SCRIPT AUTO SCRAPE v4.5 MULAI 🔥");

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

        const ambilDetail = () => {
            let nama = '', hp = '', apk = '';
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

                const hpPatterns = [
                    /telepon genggam\s*[:\-]\s*(0?8[\d]{7,13})/i,
                    /telepon\s*[:\-]\s*(0?8[\d]{7,13})/i,
                    /no\.?\s*hp\s*[:\-]\s*(0?8[\d]{7,13})/i,
                    /mobile\s*[:\-]\s*(0?8[\d]{7,13})/i,
                    /hp\s*[:\-]\s*(0?8[\d]{7,13})/i
                ];
                for (const p of hpPatterns) {
                    const m = body.match(p);
                    if (m?.[1]) {
                        const candidate = m[1].trim();
                        if (/^0?8\d{7,13}$/.test(candidate)) {
                            hp = candidate;
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
            return { nama: nama || '-', hp: hp || '-', apk: apk || '-' };
        };

        const downloadExcel = (hasil) => {
            const seen = {};
            const bersih = hasil.filter(d => {
                if (d.nama === '-' && d.hp === '-') return false;
                if (d.hp !== '-' && !/^0?8\d{7,13}$/.test(d.hp)) return false;
                if (d.nama.includes(':')) return false;
                const key = d.nama.toLowerCase().trim() + '###' + d.hp.trim();
                if (seen[key]) return false;
                seen[key] = true;
                return true;
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

                            tombol.click();
                            await delay(500);

                            // Tunggu halaman detail load
                            let attempts = 0;
                            while (attempts < 20) {
                                if (document.body?.innerText?.includes('nama')) break;
                                await delay(300);
                                attempts++;
                            }
                            await delay(500);

                            const detail = ambilDetail();
                            hasil.push(detail);
                            log(`✅ [${hasil.length}] ${detail.nama} | ${detail.hp}`);

                            // ========== FIX: KEMBALI KE LIST DAN KE HALAMAN YANG BENAR ==========
                            // Simpan state halaman saat ini
                            sessionStorage.setItem('scrape_current_page', currentPage);

                            // Kembali ke list
                            history.back();
                            await delay(1000);

                            // Tunggu sampai di list dan pastikan di halaman yang benar
                            let listAttempts = 0;
                            while (listAttempts < 15) {
                                const buttons = getDetilButtons();
                                if (buttons.length > 0) {
                                    // Cek apakah sudah di halaman yang benar
                                    const currentPageEl = document.querySelector('.el-pagination .active, .el-pager .active');
                                    const currentPageNum = currentPageEl ? parseInt(currentPageEl.innerText) : 1;

                                    if (currentPageNum === currentPage) {
                                        console.log('[Scrape] Sudah di halaman', currentPage);
                                        break;
                                    } else {
                                        // Navigasi ke halaman yang benar
                                        console.log('[Scrape] Di halaman', currentPageNum, 'harusnya', currentPage);
                                        await goToPage(currentPage);
                                        await delay(1000);
                                    }
                                }
                                await delay(500);
                                listAttempts++;
                            }

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
                alert(`✅ SELESAI!\n\n${total} nasabah unik berhasil disimpan sebagai .xlsx!`);
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