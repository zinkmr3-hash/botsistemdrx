// ==UserScript==
// @name         Zunamiq - Notifikasi Pembayaran Mapan
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Notifikasi suara ucapan saat ada pembayaran masuk di tab Mapan
// @author       Kamu
// @match        https://collection-id.zunamiq.com/*
// @match        http://collection-id.zunamiq.com/*
// @updateURL    https://raw.githubusercontent.com/zinkmr3-hash/botsistemdrx/refs/heads/main/Zunamiq-Notifikasi-Pembayaran-Mapan.user.js
// @downloadURL  https://raw.githubusercontent.com/zinkmr3-hash/botsistemdrx/refs/heads/main/Zunamiq-Notifikasi-Pembayaran-Mapan.user.js
// @grant        GM_setValue
// @grant        GM_getValue
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    /* ==================== KONFIGURASI ==================== */
    const CONFIG = {
        targetTabName: 'Mapan',           // Nama tab yang dipantau
        speechText: 'ada pembayaran masuk silahkan di cek', // Ucapan TTS
        repeatCount: 3,                   // Ulang suara berapa kali
        repeatDelay: 2000,                // Jeda antar ucapan (ms)
        speechLang: 'id-ID',              // Bahasa TTS
        speechRate: 0.95,                 // Kecepatan bicara (0.1 - 10)
        speechPitch: 1.05,                // Nada suara (0 - 2)
        speechVolume: 1.0,                // Volume (0 - 1)
        browserNotif: true,               // Notifikasi desktop
        toastNotif: true,                 // Toast di halaman
        checkDelay: 2500                  // Tunggu DOM siap (ms)
    };

    const STORAGE_KEY = 'zq_mapan_last_count';

    /* ==================== UTILITAS ==================== */
    const log = (msg) => console.log(`[Zunamiq Notif] ${new Date().toLocaleTimeString('id-ID')} — ${msg}`);

    // Ambil angka dari teks tab, contoh: "Mapan (1)" → 1
    function getMapanCount() {
        const tabs = document.querySelectorAll('.el-tabs__item');
        for (const tab of tabs) {
            const text = tab.textContent.trim();
            const match = text.match(new RegExp(`${CONFIG.targetTabName}\\s*\\((\\d+)\\)`));
            if (match) return parseInt(match[1], 10);
        }
        return null;
    }

    /* ==================== TEXT TO SPEECH ==================== */
    let voicesReady = false;

    function loadVoices() {
        if (!window.speechSynthesis) return;
        const voices = window.speechSynthesis.getVoices();
        if (voices.length > 0) voicesReady = true;
    }

    function speakOnce(text, onDone) {
        if (!window.speechSynthesis) {
            if (onDone) onDone();
            return;
        }

        const u = new SpeechSynthesisUtterance(text);
        u.lang = CONFIG.speechLang;
        u.rate = CONFIG.speechRate;
        u.pitch = CONFIG.speechPitch;
        u.volume = CONFIG.speechVolume;

        // Pilih voice bahasa Indonesia kalau ada
        const voices = window.speechSynthesis.getVoices();
        const idVoice = voices.find(v => v.lang.includes('id') || v.lang.includes('Ind'));
        if (idVoice) u.voice = idVoice;

        u.onend = () => { if (onDone) onDone(); };
        u.onerror = (e) => { log('TTS error: ' + e.error); if (onDone) onDone(); };

        window.speechSynthesis.speak(u);
    }

    function speakLoop(text, times, delay, onComplete) {
        let i = 0;
        function next() {
            if (i >= times) {
                if (onComplete) onComplete();
                return;
            }
            i++;
            log(`🔊 Ucapan ke-${i}/${times}`);
            speakOnce(text, () => setTimeout(next, delay));
        }
        next();
    }

    /* ==================== NOTIFIKASI VISUAL ==================== */
    function browserNotify(title, body) {
        if (!CONFIG.browserNotif) return;
        if (!('Notification' in window)) return;

        if (Notification.permission === 'granted') {
            new Notification(title, { body, icon: '💰', requireInteraction: true });
        } else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then(p => {
                if (p === 'granted') new Notification(title, { body, requireInteraction: true });
            });
        }
    }

    function showToast(title, msg) {
        if (!CONFIG.toastNotif) return;

        const old = document.getElementById('zq-toast');
        if (old) old.remove();

        const t = document.createElement('div');
        t.id = 'zq-toast';
        t.style.cssText = `
            position:fixed; top:80px; right:20px; z-index:99999;
            background:linear-gradient(135deg,#00b894,#00cec9);
            color:#fff; padding:18px 22px; border-radius:10px;
            box-shadow:0 8px 30px rgba(0,0,0,0.25);
            font-family:'Segoe UI',sans-serif; min-width:300px; max-width:380px;
            animation:slideIn 0.4s ease-out; cursor:pointer;
        `;
        t.innerHTML = `
            <div style="display:flex;align-items:center;gap:10px;">
                <span style="font-size:28px;">💰</span>
                <div>
                    <div style="font-weight:700;font-size:15px;margin-bottom:3px;">${title}</div>
                    <div style="font-size:13px;opacity:0.95;">${msg}</div>
                    <div style="font-size:11px;opacity:0.6;margin-top:6px;">${new Date().toLocaleString('id-ID')}</div>
                </div>
            </div>
        `;

        const s = document.createElement('style');
        s.textContent = `@keyframes slideIn{from{transform:translateX(350px);opacity:0}to{transform:translateX(0);opacity:1}}`;
        document.head.appendChild(s);

        t.onclick = () => t.remove();
        document.body.appendChild(t);
        setTimeout(() => t.remove(), 12000);
    }

    /* ==================== INDICATOR STATUS ==================== */
    function createIndicator() {
        if (document.getElementById('zq-indicator')) return;

        const d = document.createElement('div');
        d.id = 'zq-indicator';
        // POSISI DIUBAH: right:18px → left:18px (pojok kiri bawah)
        d.style.cssText = `
            position:fixed; bottom:18px; left:18px; z-index:99999;
            background:rgba(0,0,0,0.82); color:#fff; padding:9px 14px;
            border-radius:8px; font-family:'Segoe UI',sans-serif; font-size:12px;
            display:flex; align-items:center; gap:8px; cursor:pointer;
            user-select:none; backdrop-filter:blur(4px);
        `;
        d.title = 'Klik untuk test suara notifikasi';
        d.innerHTML = `<span id="zq-dot" style="width:8px;height:8px;border-radius:50%;background:#00b894;display:inline-block;"></span><span id="zq-txt">Mapan: —</span>`;

        d.addEventListener('click', () => {
            log('🧪 Test suara manual...');
            speakLoop(CONFIG.speechText, CONFIG.repeatCount, CONFIG.repeatDelay);
        });

        document.body.appendChild(d);
    }

    function updateIndicator(count) {
        const dot = document.getElementById('zq-dot');
        const txt = document.getElementById('zq-txt');
        if (dot && txt) {
            dot.style.background = '#00b894';
            txt.textContent = `Mapan: ${count} • Notif Aktif`;
        }
    }

    /* ==================== LOGIKA UTAMA ==================== */
    let isFirstRun = true;

    function checkPayment() {
        const current = getMapanCount();

        if (current === null) {
            log('Tab Mapan belum ditemukan.');
            return;
        }

        const last = GM_getValue(STORAGE_KEY, 0);
        log(`Cek: Mapan sebelum=${last}, sekarang=${current}`);
        updateIndicator(current);

        if (isFirstRun) {
            log(`Inisialisasi: Mapan = ${current}`);
            GM_setValue(STORAGE_KEY, current);
            isFirstRun = false;
            return;
        }

        if (current > last) {
            const tambah = current - last;
            log(`🎉 PEMBAYARAN MASUK! +${tambah} (dari ${last} → ${current})`);

            GM_setValue(STORAGE_KEY, current);

            // Suara 3x
            speakLoop(CONFIG.speechText, CONFIG.repeatCount, CONFIG.repeatDelay);

            // Notifikasi desktop
            browserNotify('💰 Pembayaran Masuk!', `Mapan bertambah ${tambah} kasus. Total: ${current} nasabah.`);

            // Toast
            showToast('Pembayaran Masuk! 🎉', `Tab <b>Mapan</b> bertambah <b>${tambah}</b> kasus.<br>Total sekarang: <b>${current}</b> nasabah.`);

        } else if (current < last) {
            log(`Mapan berkurang: ${last} → ${current}`);
            GM_setValue(STORAGE_KEY, current);
        }
    }

    /* ==================== INIT ==================== */
    function init() {
        log('Skrip aktif. Memantau tab Mapan...');

        // Preload TTS voices
        if (window.speechSynthesis) {
            loadVoices();
            window.speechSynthesis.onvoiceschanged = loadVoices;
        }

        // Minta izin notifikasi
        if ('Notification' in window && Notification.permission === 'default') {
            Notification.requestPermission();
        }

        createIndicator();

        // Delay agar DOM Element UI siap
        setTimeout(checkPayment, CONFIG.checkDelay);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
