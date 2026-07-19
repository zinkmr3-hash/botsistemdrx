// ==UserScript==
// @name         Auto Activity Collection - NONSTOP v7.1
// @namespace    http://tampermonkey.net/
// @version      6.10.1
// @description  Anti-CAPTCHA: hapus double dispatch, jeda natural, idle 30-60 dtk, UI transparan
// @author       Enhanced
// @match        https://collection-id.zunamiq.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let isRunning = false;
    let totalClicked = 0;
    let currentRowIndex = 0;
    let currentPage = 1;
    let lastActivityTime = Date.now();
    let antiIdleTimer    = null;
    let refreshTimer     = null;
    let refreshCountTimer = null;
    let restartCount     = 0;
    let startTime        = Date.now();
    let refreshIntervalSeconds = 300;

    // --- UI DASHBOARD ---
    const menu = document.createElement('div');
    menu.style = `
        position: fixed; top: 10px; right: 10px; z-index: 9999;
        background: rgba(0,0,0,0.55); padding: 8px 10px; border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.4); border: 1px solid rgba(33,150,243,0.5);
        font-family: sans-serif; width: 185px; text-align: center;
        backdrop-filter: blur(6px);
    `;
    menu.innerHTML = `
        <h4 style="margin:0 0 4px 0; color:#90caf9; font-size:11px;">🚀 Auto Activity v6.10.1</h4>
        <div id="status-text" style="font-size:10px; color:orange; font-weight:bold; margin-bottom:4px;">MEMULAI...</div>

        <div style="font-size:10px; color:#ddd; margin-bottom:1px;">Klik: <span id="click-count" style="color:#fff;">0</span> &nbsp;|&nbsp; Hal: <span id="page-num" style="color:#fff;">1</span> &nbsp;|&nbsp; Baris: <span id="row-count" style="color:#fff;">0</span></div>
        <div style="font-size:10px; color:#aaa; margin-bottom:1px;">Mouse: <span id="mouse-status">-</span></div>
        <div style="font-size:10px; color:#aaa; margin-bottom:1px;">Scroll: <span id="scroll-status">-</span></div>
        <div style="font-size:10px; margin-bottom:4px;">Anti-idle: <span id="idle-status" style="color:#69f0ae;">-</span></div>

        <div style="font-size:9px; background:rgba(255,255,255,0.07); border-radius:4px; padding:4px; margin-bottom:4px; color:#ccc; text-align:left; line-height:1.6;">
            ⏱ <span id="uptime">00:00:00</span> &nbsp;|&nbsp; 🔄 <span id="restart-count">0</span>x<br>
            📡 <span id="last-ping">-</span>
        </div>

        <div style="font-size:9px; background:rgba(255,255,255,0.07); border-radius:4px; padding:4px; margin-bottom:4px; color:#ccc; text-align:left;">
            🔃 <select id="refresh-select" style="font-size:9px; background:rgba(0,0,0,0.5); color:#fff; border:1px solid rgba(255,255,255,0.2); border-radius:3px; padding:1px;">
                <option value="10">10 dtk</option>
                <option value="30">30 dtk</option>
                <option value="60">1 mnt</option>
                <option value="300" selected>5 mnt ⚡</option>
                <option value="600">10 mnt</option>
                <option value="0">Off</option>
            </select>
            <span id="refresh-countdown" style="color:#ffb74d; font-weight:bold; font-size:9px;">-</span>
        </div>

        <button id="stop-btn"  style="background:rgba(244,67,54,0.85);color:white;border:none;padding:5px;border-radius:4px;cursor:pointer;font-weight:bold;width:100%;margin-bottom:3px;font-size:10px;">⏹ STOP</button>
        <button id="start-btn" style="background:rgba(76,175,80,0.85);color:white;border:none;padding:5px;border-radius:4px;cursor:pointer;font-weight:bold;width:100%;margin-bottom:3px;font-size:10px;">▶ MULAI ULANG</button>
        <button id="refresh-now-btn" style="background:rgba(255,152,0,0.85);color:white;border:none;padding:5px;border-radius:4px;cursor:pointer;font-weight:bold;width:100%;font-size:10px;">🔃 Refresh Skrg</button>
        <p style="font-size:8px;color:#888;margin-top:5px;margin-bottom:0;">v6.9 | Anti-CAPTCHA Mode</p>

        <style>
            @keyframes marquee {
                0%   { transform: translateX(100%); }
                100% { transform: translateX(-100%); }
            }
            @keyframes bounce {
                0%, 100% { transform: translateY(0) rotate(0deg); }
                25%       { transform: translateY(-6px) rotate(-10deg); }
                75%       { transform: translateY(-3px) rotate(10deg); }
            }
            @keyframes colorShift {
                0%   { color: #f44336; }
                25%  { color: #FF9800; }
                50%  { color: #4CAF50; }
                75%  { color: #2196F3; }
                100% { color: #f44336; }
            }
            .marquee-wrap {
                overflow: hidden;
                white-space: nowrap;
                background: #111;
                border-radius: 6px;
                padding: 5px 0;
                margin-top: 4px;
            }
            .marquee-text {
                display: inline-block;
                font-size: 11px;
                font-weight: bold;
                animation: marquee 6s linear infinite, colorShift 2s linear infinite;
                padding-right: 30px;
            }
            .emoji-row {
                display: flex;
                justify-content: center;
                gap: 6px;
                margin-top: 5px;
            }
            .emoji-bounce {
                font-size: 18px;
                display: inline-block;
                animation: bounce 0.7s ease-in-out infinite;
            }
            .emoji-bounce:nth-child(2) { animation-delay: 0.15s; }
            .emoji-bounce:nth-child(3) { animation-delay: 0.30s; }
            .emoji-bounce:nth-child(4) { animation-delay: 0.45s; }
            .emoji-bounce:nth-child(5) { animation-delay: 0.60s; }
        </style>

        <div class="marquee-wrap">
            <span class="marquee-text"></span>
        </div>
        <div class="emoji-row">
            <span class="emoji-bounce"></span>
            <span class="emoji-bounce"></span>
            <span class="emoji-bounce"></span>
            <span class="emoji-bounce"></span>
            <span class="emoji-bounce"></span>
        </div>
    `;
    document.body.appendChild(menu);

    const statusText        = menu.querySelector('#status-text');
    const clickCountDisp    = menu.querySelector('#click-count');
    const rowCountDisp      = menu.querySelector('#row-count');
    const pageNumDisp       = menu.querySelector('#page-num');
    const mouseStatusDisp   = menu.querySelector('#mouse-status');
    const scrollStatusDisp  = menu.querySelector('#scroll-status');
    const idleStatusDisp    = menu.querySelector('#idle-status');
    const lastPingDisp      = menu.querySelector('#last-ping');
    const uptimeDisp        = menu.querySelector('#uptime');
    const restartCountDisp  = menu.querySelector('#restart-count');
    const refreshCountdown  = menu.querySelector('#refresh-countdown');
    const refreshSelect     = menu.querySelector('#refresh-select');

    // --- UPTIME ---
    setInterval(() => {
        if (!isRunning) return;
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const h = Math.floor(elapsed / 3600).toString().padStart(2,'0');
        const m = Math.floor((elapsed % 3600) / 60).toString().padStart(2,'0');
        const s = (elapsed % 60).toString().padStart(2,'0');
        uptimeDisp.innerText = `${h}:${m}:${s}`;
    }, 1000);

    // --- HELPER ---
    function randomBetween(min, max) {
        return Math.random() * (max - min) + min;
    }
    function nowTime() {
        const d = new Date();
        return `${d.getHours().toString().padStart(2,'0')}:${d.getMinutes().toString().padStart(2,'0')}:${d.getSeconds().toString().padStart(2,'0')}`;
    }

    // --- SIMPAN STATE KE sessionStorage ---
    function saveState() {
        sessionStorage.setItem('aa_running',      'true');
        sessionStorage.setItem('aa_clicked',      totalClicked);
        sessionStorage.setItem('aa_rowIndex',     currentRowIndex);
        sessionStorage.setItem('aa_page',         currentPage);
        sessionStorage.setItem('aa_restarts',     restartCount);
        sessionStorage.setItem('aa_startTime',    startTime);
        sessionStorage.setItem('aa_refreshSec',   refreshSelect.value);
        // Simpan juga key yang dipakai autoclick
        sessionStorage.setItem('_aa_page',        currentPage);
        sessionStorage.setItem('_aa_idx',         currentRowIndex);
    }

    // --- RESTORE STATE SETELAH REFRESH ---
    function restoreState() {
        if (sessionStorage.getItem('aa_running') === 'true') {
            totalClicked    = parseInt(sessionStorage.getItem('aa_clicked')   || '0');
            currentRowIndex = parseInt(sessionStorage.getItem('aa_rowIndex')  || '0');
            currentPage     = parseInt(sessionStorage.getItem('aa_page')      || '1');
            restartCount    = parseInt(sessionStorage.getItem('aa_restarts')  || '0');
            startTime       = parseInt(sessionStorage.getItem('aa_startTime') || Date.now());
            const savedSec  = sessionStorage.getItem('aa_refreshSec') || '300';
            refreshSelect.value = savedSec;

            // Restore key autoclick
            sessionStorage.setItem('_aa_page', currentPage);
            sessionStorage.setItem('_aa_idx',  currentRowIndex);

            clickCountDisp.innerText   = totalClicked;
            pageNumDisp.innerText      = currentPage;
            restartCountDisp.innerText = restartCount;

            sessionStorage.removeItem('aa_running');
            return true;
        }
        return false;
    }

    // --- DO REFRESH ---
    function doRefresh() {
        if (!isRunning) return;
        console.log('[AutoRefresh] Menyimpan state & reload...');
        saveState();
        location.reload();
    }

    // --- JADWALKAN AUTO REFRESH ---
    function scheduleRefresh() {
        if (refreshTimer)      clearInterval(refreshTimer);
        if (refreshCountTimer) clearInterval(refreshCountTimer);

        const seconds = parseInt(refreshSelect.value);
        if (seconds === 0) {
            refreshCountdown.innerText = 'Nonaktif';
            return;
        }

        refreshIntervalSeconds = seconds;
        let secsLeft = seconds;

        refreshCountTimer = setInterval(() => {
            if (!isRunning) return;
            secsLeft--;
            if (secsLeft <= 0) secsLeft = refreshIntervalSeconds;
            if (secsLeft >= 60) {
                const rm = Math.floor(secsLeft / 60);
                const rs = secsLeft % 60;
                refreshCountdown.innerText = `${rm}:${rs.toString().padStart(2,'0')}`;
            } else {
                refreshCountdown.innerText = `${secsLeft} detik`;
            }
        }, 1000);

        refreshTimer = setInterval(() => {
            doRefresh();
        }, seconds * 1000);
    }

    refreshSelect.onchange = () => {
        if (isRunning) scheduleRefresh();
    };

    menu.querySelector('#refresh-now-btn').onclick = () => doRefresh();

    // --- ANTI-IDLE PING ---
    function sendAntiIdlePing() {
        if (!isRunning) return;
        const x = Math.round(randomBetween(100, window.innerWidth - 100));
        const y = Math.round(randomBetween(100, window.innerHeight - 100));

        ['mousemove', 'mouseover', 'mouseenter'].forEach(type => {
            const evt = new MouseEvent(type, {
                bubbles: true, cancelable: true,
                clientX: x, clientY: y,
                screenX: x + window.screenX, screenY: y + window.screenY,
                movementX: Math.round(randomBetween(-5, 5)),
                movementY: Math.round(randomBetween(-5, 5))
            });
            document.dispatchEvent(evt);
            const el = document.elementFromPoint(x, y);
            if (el) el.dispatchEvent(evt);
        });

        document.dispatchEvent(new KeyboardEvent('keydown', { bubbles:true, key:'Shift', keyCode:16, shiftKey:true }));
        document.dispatchEvent(new KeyboardEvent('keyup',   { bubbles:true, key:'Shift', keyCode:16 }));

        lastActivityTime = Date.now();
        lastPingDisp.innerText = nowTime();
    }

    function startAntiIdleLoop() {
        sendAntiIdlePing();
        if (antiIdleTimer) clearInterval(antiIdleTimer);
        antiIdleTimer = setInterval(() => {
            if (!isRunning) return;
            sendAntiIdlePing();
        }, 10 * 60 * 1000);

        let countdown = 10 * 60;
        const ct = setInterval(() => {
            if (!isRunning) { clearInterval(ct); return; }
            countdown--;
            if (countdown <= 0) countdown = 10 * 60;
            const mn = Math.floor(countdown / 60);
            const sc = countdown % 60;
            idleStatusDisp.innerText = `${mn}:${sc.toString().padStart(2,'0')} lagi`;
            idleStatusDisp.style.color = countdown < 60 ? 'orange' : 'green';
        }, 1000);
    }

    // --- SIMULASI MOUSE ---
    function simulateMouseMove(x, y) {
        const evt = new MouseEvent('mousemove', {
            bubbles: true, cancelable: true,
            clientX: x, clientY: y, screenX: x, screenY: y
        });
        document.dispatchEvent(evt);
        const el = document.elementFromPoint(x, y);
        if (el) el.dispatchEvent(evt);
        lastActivityTime = Date.now();
    }

    async function smoothMouseMove(fromX, fromY, toX, toY, steps) {
        for (let i = 0; i <= steps; i++) {
            if (!isRunning) return;
            const t = i / steps;
            const ease = t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t+2, 3)/2;
            const noise = (i > 0 && i < steps) ? randomBetween(-3, 3) : 0;
            simulateMouseMove(
                Math.round(fromX + (toX - fromX) * ease + noise),
                Math.round(fromY + (toY - fromY) * ease + noise)
            );
            await new Promise(r => setTimeout(r, randomBetween(8, 20)));
        }
    }

    async function startMouseSimulation() {
        let cx = Math.round(window.innerWidth / 2);
        let cy = Math.round(window.innerHeight / 2);
        while (isRunning) {
            const tx = Math.round(randomBetween(50, window.innerWidth - 50));
            const ty = Math.round(randomBetween(80, window.innerHeight - 80));
            mouseStatusDisp.innerText = `(${tx}, ${ty})`;
            await smoothMouseMove(cx, cy, tx, ty, Math.round(randomBetween(20, 60)));
            cx = tx; cy = ty;
            await new Promise(r => setTimeout(r, randomBetween(4000, 12000)));
        }
        mouseStatusDisp.innerText = '-';
    }

    // --- SCROLL ENHANCED ---
    function getAllScrollable() {
        const selectors = [
            '.el-table__body-wrapper',
            '.el-table__fixed-body-wrapper',
            '.el-scrollbar__wrap',
            '.app-main',
            '.main-container',
            '.el-main',
            '.content-wrapper',
        ];
        const found = selectors
            .map(s => document.querySelector(s))
            .filter(el => el && el.scrollHeight > el.clientHeight + 10);
        if (document.body.scrollHeight > window.innerHeight + 10) found.push(document.body);
        return found;
    }

    async function smoothScroll(el, distance, steps) {
        for (let i = 0; i < steps; i++) {
            if (!isRunning) break;
            if (el === document.body || el === document.documentElement) {
                window.scrollBy(0, distance / steps);
            } else {
                el.scrollBy(0, distance / steps);
            }
            lastActivityTime = Date.now();
            await new Promise(r => setTimeout(r, randomBetween(25, 70)));
        }
    }

    async function startScrollSimulation() {
        while (isRunning) {
            await new Promise(r => setTimeout(r, randomBetween(8000, 25000)));
            if (!isRunning) break;

            const dir = Math.random() > 0.35 ? 1 : -1;
            const label = dir > 0 ? '↓ down' : '↑ up';

            scrollStatusDisp.innerText = `window ${label}`;
            const winDist = Math.round(randomBetween(100, 400)) * dir;
            await smoothScroll(document.documentElement, winDist, Math.round(randomBetween(8, 20)));

            await new Promise(r => setTimeout(r, randomBetween(400, 1500)));

            const scrollables = getAllScrollable();
            for (const el of scrollables) {
                if (!isRunning) break;
                const dist  = Math.round(randomBetween(60, 250)) * dir;
                const steps = Math.round(randomBetween(5, 15));
                const name  = (el.className || 'el').toString().split(' ')[0].slice(0, 18);
                scrollStatusDisp.innerText = `${name} ${label}`;
                await smoothScroll(el, dist, steps);
                await new Promise(r => setTimeout(r, randomBetween(300, 1200)));
            }

            if (Math.random() < 0.3) {
                scrollStatusDisp.innerText = '↑ kembali atas';
                await smoothScroll(document.documentElement, -winDist * 0.8, Math.round(randomBetween(8, 15)));
            }

            scrollStatusDisp.innerText = 'standby';
        }
        scrollStatusDisp.innerText = '-';
    }

    // ========== PAGINATION HELPERS ==========
    function hasNextPage() {
        const btn = document.querySelector('.el-pagination .btn-next');
        if (!btn) return false;
        if (btn.disabled) return false;
        if (btn.classList.contains('disabled') || btn.classList.contains('is-disabled')) return false;
        if (btn.getAttribute('disabled') !== null) return false;
        return true;
    }

    function getCurrentActivePage() {
        const active = document.querySelector('.el-pager li.active, .el-pager .number.active');
        return active ? (parseInt(active.innerText) || 1) : 1;
    }

    async function waitForRows(maxSec = 15) {
        for (let i = 0; i < maxSec * 2; i++) {
            const r = document.querySelectorAll('.el-table__row');
            if (r.length > 0) return r.length;
            await new Promise(r => setTimeout(r, 500));
        }
        return 0;
    }

    // Ambil tombol Detil di baris ke-idx — selalu re-query DOM segar
    function getDetilBtnAtIndex(idx) {
        const rows = document.querySelectorAll('.el-table__row');
        if (!rows[idx]) return null;
        const row = rows[idx];
        const allBtns = row.querySelectorAll('a, button, .el-button');
        for (const el of allBtns) {
            const txt = el.innerText.trim().toLowerCase();
            if (txt === 'detil' || txt === 'detail') return el;
        }
        // Fallback: tombol pertama di cell terakhir
        const cells = row.querySelectorAll('td');
        if (cells.length > 0) {
            const el = cells[cells.length - 1].querySelector('a, button, .el-button');
            if (el) return el;
        }
        return null;
    }

    // Navigasi kembali ke halaman tertentu setelah reset ke hal.1
    async function goBackToPage(targetPage) {
        if (targetPage <= 1) return;
        for (let attempt = 0; attempt < 6; attempt++) {
            await new Promise(r => setTimeout(r, 800));
            // Coba klik nomor langsung
            const nums = document.querySelectorAll('.el-pager li.number');
            let found = false;
            for (const n of nums) {
                if (parseInt(n.innerText) === targetPage) {
                    n.click();
                    console.log(`[Nav] Klik langsung halaman ${targetPage}`);
                    await new Promise(r => setTimeout(r, 2500));
                    found = true;
                    break;
                }
            }
            if (found) return;
            // Fallback: klik next berulang dari halaman aktif
            if (attempt === 2) {
                const cur = getCurrentActivePage();
                for (let p = cur; p < targetPage; p++) {
                    const nb = document.querySelector('.el-pagination .btn-next');
                    if (nb && !nb.disabled && nb.getAttribute('disabled') === null) {
                        nb.click();
                        await new Promise(r => setTimeout(r, 1500));
                    } else break;
                }
                return;
            }
        }
    }

    // ========== AUTO KLIK NONSTOP ==========
    async function startAutoClick() {
        if (!isRunning) return;
        try {
            // Pastikan di halaman list
            if (!window.location.hash.includes('/case/list')) {
                window.location.hash = '#/case/list';
                await new Promise(r => setTimeout(r, 2500));
            }

            // Tunggu tabel muncul
            const rowCount = await waitForRows(15);
            if (rowCount === 0) {
                await new Promise(r => setTimeout(r, 3000));
                return startAutoClick();
            }

            // ===== RESTORE STATE: ambil halaman & index dari sessionStorage =====
            const savedPage  = parseInt(sessionStorage.getItem('_aa_page')  || '1');
            const savedIndex = parseInt(sessionStorage.getItem('_aa_idx')   || '0');

            // Navigasi ke halaman yang tersimpan jika bukan halaman 1
            if (savedPage > 1) {
                const pageNow = getCurrentActivePage();
                if (pageNow !== savedPage) {
                    console.log(`[Nav] Restore ke hal.${savedPage}`);
                    await goBackToPage(savedPage);
                    await waitForRows(12);
                }
            }

            currentPage = getCurrentActivePage();
            sessionStorage.setItem('_aa_page', currentPage);
            pageNumDisp.innerText = currentPage;
            rowCountDisp.innerText = rowCount;
            console.log(`[AutoClick] Hal.${currentPage} — ${rowCount} baris — mulai index ${savedIndex}`);

            // ===== LOOP PER INDEX =====
            for (let i = savedIndex; i < rowCount; i++) {
                if (!isRunning) return;

                // Simpan progress sebelum klik (untuk restore setelah refresh/reset)
                sessionStorage.setItem('_aa_page',  currentPage);
                sessionStorage.setItem('_aa_idx',   i);

                const btn = getDetilBtnAtIndex(i);
                if (!btn) {
                    console.log(`[AutoClick] Baris ${i}: skip (tidak ada Detil)`);
                    continue;
                }

                // Scroll ke baris
                const rows = document.querySelectorAll('.el-table__row');
                if (rows[i]) rows[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
                await new Promise(r => setTimeout(r, randomBetween(600, 1500)));

                // Gerak mouse
                const rect = btn.getBoundingClientRect();
                if (rect.width === 0 || rect.height === 0) {
                    console.log(`[AutoClick] Baris ${i}: tidak visible, skip`);
                    continue;
                }
                await smoothMouseMove(
                    Math.round(randomBetween(100, 500)),
                    Math.round(randomBetween(100, 400)),
                    Math.round(rect.left + rect.width / 2),
                    Math.round(rect.top  + rect.height / 2),
                    20
                );

                await new Promise(r => setTimeout(r, randomBetween(2000, 5000)));

                // KLIK 1x BERSIH
                btn.click();
                totalClicked++;
                clickCountDisp.innerText = totalClicked;
                lastActivityTime = Date.now();
                console.log(`[AutoClick] ✅ Baris ${i+1}/${rowCount} hal.${currentPage}`);

                // Tunggu detail load
                await new Promise(r => setTimeout(r, randomBetween(6000, 12000)));

                // Idle natural ~20%
                if (Math.random() < 0.2) {
                    const idleMs = Math.round(randomBetween(30000, 60000));
                    statusText.innerText = '💤 IDLE NATURAL...';
                    statusText.style.color = '#aaa';
                    await new Promise(r => setTimeout(r, idleMs));
                    statusText.innerText = 'STATUS: RUNNING';
                    statusText.style.color = 'green';
                }

                // Kembali ke list
                window.location.hash = '#/case/list';
                await new Promise(r => setTimeout(r, 1500));
                await waitForRows(15);

                // Website selalu reset ke hal.1 — navigasi kembali ke halaman yang benar
                const pageNow = getCurrentActivePage();
                if (pageNow !== currentPage) {
                    console.log(`[Nav] Reset ke hal.${pageNow}, kembali ke hal.${currentPage}`);
                    await goBackToPage(currentPage);
                    await waitForRows(12);
                }

                await new Promise(r => setTimeout(r, randomBetween(1000, 2500)));
            }

            // ===== SELESAI SEMUA BARIS — PINDAH HALAMAN BERIKUTNYA =====
            console.log(`[Pagination] ✅ Selesai hal.${currentPage}`);
            sessionStorage.setItem('_aa_idx', '0'); // reset index untuk halaman baru
            await new Promise(r => setTimeout(r, randomBetween(2000, 4000)));

            // Pastikan di list dan di halaman yang benar dulu
            if (!window.location.hash.includes('/case/list')) {
                window.location.hash = '#/case/list';
                await waitForRows(10);
            }
            const pageCurrent = getCurrentActivePage();
            if (pageCurrent !== currentPage) {
                await goBackToPage(currentPage);
                await waitForRows(10);
            }

            // Cek tombol next
            const nextBtn = document.querySelector('.el-pagination .btn-next');
            const nextDisabled = !nextBtn ||
                nextBtn.disabled ||
                nextBtn.getAttribute('disabled') !== null ||
                nextBtn.classList.contains('disabled') ||
                nextBtn.classList.contains('is-disabled');

            if (!nextDisabled) {
                nextBtn.click();
                currentPage++;
                sessionStorage.setItem('_aa_page', currentPage);
                sessionStorage.setItem('_aa_idx',  '0');
                pageNumDisp.innerText = currentPage;
                console.log(`[Pagination] ➡️ Pindah ke hal.${currentPage}`);
                await new Promise(r => setTimeout(r, randomBetween(4000, 7000)));
                return startAutoClick();
            }

            // Halaman terakhir — ulang dari awal
            console.log('[Pagination] 🔁 Semua halaman selesai, kembali ke hal.1');
            currentPage = 1;
            sessionStorage.setItem('_aa_page', '1');
            sessionStorage.setItem('_aa_idx',  '0');
            pageNumDisp.innerText = 1;
            const firstBtn = document.querySelector('.el-pager li.number');
            if (firstBtn) firstBtn.click();
            await new Promise(r => setTimeout(r, randomBetween(4000, 7000)));
            return startAutoClick();

        } catch (err) {
            console.warn('[AutoClick] Error:', err);
            restartCount++;
            restartCountDisp.innerText = restartCount;
            statusText.innerText = 'RESTARTING...';
            statusText.style.color = 'orange';
            await new Promise(r => setTimeout(r, 5000));
            if (isRunning) {
                statusText.innerText = 'STATUS: RUNNING';
                statusText.style.color = 'green';
                return startAutoClick();
            }
        }
    }


    // =============================================
    // START SEMUA
    // =============================================
    function startAll() {
        if (isRunning) return;
        isRunning = true;
        statusText.innerText = 'STATUS: RUNNING';
        statusText.style.color = 'green';
        startAntiIdleLoop();
        startMouseSimulation();
        startScrollSimulation();
        startAutoClick();
        scheduleRefresh();
    }

    // =============================================
    // STOP SEMUA
    // =============================================
    function stopAll() {
        isRunning = false;
        currentRowIndex = 0;
        if (antiIdleTimer)    clearInterval(antiIdleTimer);
        if (refreshTimer)     clearInterval(refreshTimer);
        if (refreshCountTimer) clearInterval(refreshCountTimer);
        sessionStorage.removeItem('aa_running');
        statusText.innerText = 'STATUS: OFF';
        statusText.style.color = 'red';
        mouseStatusDisp.innerText  = '-';
        scrollStatusDisp.innerText = '-';
        idleStatusDisp.innerText   = '-';
        refreshCountdown.innerText = '-';
        console.log('[AutoActivity] Dihentikan oleh user.');
    }

    menu.querySelector('#start-btn').onclick = () => startAll();
    menu.querySelector('#stop-btn').onclick  = () => stopAll();

    // =============================================
    // AUTO-START
    // =============================================
    const wasRunning = restoreState();
    setTimeout(() => {
        console.log('[AutoActivity v6.7] Auto-start...');
        startAll();
    }, 2000);

})();