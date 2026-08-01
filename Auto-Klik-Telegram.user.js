// ==UserScript==
// @name         Auto Klik Telegram
// @namespace    http://tampermonkey.net/
// @version      6.0
// @description  Auto klik opsi "Telegram" di dropdown "..." untuk semua nasabah, tanpa membuka tab/jendela baru
// @match        https://collection-id.zunamiq.com/*
// @grant        none
// @run-at       document-idle
// @updateURL    https://raw.githubusercontent.com/zinkmr3-hash/botsistemdrx/refs/heads/main/Auto-Klik-Telegram.user.js
// @downloadURL  https://raw.githubusercontent.com/zinkmr3-hash/botsistemdrx/refs/heads/main/Auto-Klik-Telegram.user.js
// ==/UserScript==

(function () {
  'use strict';

  /* =========================================================
     KONFIGURASI — cek & sesuaikan lewat Inspect Element kalau perlu
     ========================================================= */
  const CONFIG = {
    // Baris nasabah di list utama
    nasabahRowSelector: '.el-table__row',
    detailButtonText: 'Detil',

    // Trigger dropdown "..." (span pembungkus tombol titik tiga)
    dropdownTriggerSelector: '.el-drop-link.el-dropdown-selfdefine[aria-haspopup="list"]',

    // Teks item menu, dipakai untuk verifikasi dropdown yang benar & klik target
    whatsappText: 'Whatsapp',
    telegramText: 'Telegram',

    // Tab untuk kembali ke list nasabah
    tabDaftarNasabahText: 'tugasku',

    nextPageSelector: '.btn-next',

    delay: { short: 300, medium: 600, long: 1000 },
  };

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  // ---------- Helper umum ----------

  function findByText(selector, text, root = document) {
    const els = Array.from(root.querySelectorAll(selector));
    return els.find((el) => el.textContent.trim().toLowerCase().includes(text.toLowerCase()));
  }

  function findAllByText(selector, text, root = document) {
    return Array.from(root.querySelectorAll(selector)).filter((el) =>
      el.textContent.trim().toLowerCase().includes(text.toLowerCase())
    );
  }

  function simulateClick(el) {
    if (!el) return false;
    el.scrollIntoView({ block: 'center' });
    el.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    el.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
    el.click();
    return true;
  }

  // el-dropdown Element-UI defaultnya trigger via HOVER, bukan click.
  // Simulasikan mouseenter/mouseover di trigger DAN wrapper .el-dropdown-nya.
  function simulateHoverOpen(el) {
    if (!el) return false;
    const wrapper = el.closest('.el-dropdown') || el;
    [wrapper, el].forEach((target) => {
      target.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
      target.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
    });
    return true;
  }

  function simulateHoverClose(el) {
    if (!el) return false;
    const wrapper = el.closest('.el-dropdown') || el;
    [el, wrapper].forEach((target) => {
      target.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true }));
      target.dispatchEvent(new MouseEvent('mouseout', { bubbles: true }));
    });
    return true;
  }

  function isReallyVisible(el) {
    if (!el) return false;
    const style = window.getComputedStyle(el);
    if (style.display === 'none' || style.visibility === 'hidden') return false;
    const rect = el.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0;
  }

  function log(msg) {
    console.log('[Auto Klik Telegram]', msg);
    updateStatus(msg);
  }

  // ---------- Cegah tab/jendela baru terbuka ----------

  // Bungkus fn (klik li "Telegram") supaya window.open dan navigasi <a target="_blank">
  // tidak benar-benar membuka tab baru, tapi klik-nya (dan efek sampingnya di server)
  // tetap jalan seperti biasa.
  async function clickWithoutNewTab(fn) {
    const originalOpen = window.open;
    window.open = function (url) {
      log(`(tab baru dicegah) URL yang seharusnya dibuka: ${url}`);
      // Kembalikan object dummy supaya kode yang memanggil window.open tidak error
      return { closed: true, close: () => {}, focus: () => {} };
    };

    function blockBlankLinkNav(e) {
      let el = e.target;
      while (el && el !== document) {
        if (el.tagName === 'A' && el.getAttribute('target') === '_blank') {
          e.preventDefault();
          break;
        }
        el = el.parentElement;
      }
    }
    document.addEventListener('click', blockBlankLinkNav, true);

    try {
      await fn();
      await sleep(CONFIG.delay.short);
    } finally {
      window.open = originalOpen;
      document.removeEventListener('click', blockBlankLinkNav, true);
    }
  }

  // ---------- State anti-duplikat ----------

  const processedIds = new Set();

  function getRowId(row) {
    const cell = row.querySelector('.cell');
    return cell ? cell.textContent.trim() : row.textContent.replace(/\s+/g, ' ').trim();
  }

  // ---------- Proses 1 nasabah ----------

  async function processNasabahDetail(rowId) {
    if (rowId && processedIds.has(rowId)) {
      log(`Nasabah ${rowId} sudah diproses sebelumnya, skip (anti-duplikat)`);
      return;
    }

    // Bisa ada lebih dari satu dropdown "..." di halaman (mis. dropdown akun di
    // navbar atas juga pakai class serupa). Coba satu per satu, verifikasi isinya
    // benar2 berisi "Whatsapp" & "Telegram" sebelum diklik.
    const triggers = Array.from(document.querySelectorAll(CONFIG.dropdownTriggerSelector));
    log(`Ditemukan ${triggers.length} trigger dropdown "..." di halaman`);
    let done = false;

    for (const trigger of triggers) {
      if (!isReallyVisible(trigger)) continue;

      simulateHoverOpen(trigger);
      await sleep(CONFIG.delay.medium);

      const menuId = trigger.getAttribute('aria-controls');
      let menu = menuId ? document.getElementById(menuId) : null;
      if (!menu) {
        menu = Array.from(document.querySelectorAll('.el-dropdown-menu')).find(isReallyVisible);
      }

      if (!menu || !isReallyVisible(menu)) {
        console.log('[Auto Klik Telegram] DEBUG - menu tidak visible untuk trigger:', trigger.outerHTML.slice(0, 300));
        simulateHoverClose(trigger);
        continue; // dropdown ini tidak kebuka / tidak ketemu, coba yang lain
      }

      const isRightMenu =
        findByText('li', CONFIG.whatsappText, menu) && findByText('li', CONFIG.telegramText, menu);

      if (!isRightMenu) {
        // Bukan dropdown yang dimaksud -> tutup lagi, lanjut ke trigger berikutnya
        simulateHoverClose(trigger);
        await sleep(CONFIG.delay.short);
        continue;
      }

      // Ketemu dropdown yang benar. Cari item "Telegram" (urutan ke-2).
      let telegramItem = findByText('li', CONFIG.telegramText, menu);
      if (!telegramItem) {
        const items = menu.querySelectorAll('li');
        telegramItem = items[1]; // fallback: urutan ke-2 (index 1)
      }

      if (!telegramItem) {
        log('Item "Telegram" tidak ditemukan di dropdown, skip nasabah ini');
        break;
      }

      await clickWithoutNewTab(async () => {
        simulateClick(telegramItem);
      });

      log(`Klik "Telegram" berhasil untuk nasabah ${rowId || '(tanpa id)'}`);
      done = true;
      break;
    }

    if (!done) {
      log('Dropdown "..." dengan opsi Telegram tidak ditemukan di halaman ini, skip');
    }

    if (rowId) processedIds.add(rowId);
  }

  // ---------- Navigasi kembali ke list nasabah ----------

  async function goBackToNasabahList() {
    let tab = findByText('li', CONFIG.tabDaftarNasabahText);
    if (!tab) tab = findByText('*', CONFIG.tabDaftarNasabahText);
    if (tab) {
      simulateClick(tab);
      await sleep(CONFIG.delay.long);
      return true;
    }
    log(`Tab "${CONFIG.tabDaftarNasabahText}" tidak ditemukan, tidak bisa kembali ke list`);
    return false;
  }

  // ---------- Loop utama ----------

  let running = false;

  async function mainLoop() {
    running = true;
    const MAX_ITERATIONS = 2000;
    let iterations = 0;

    while (running) {
      iterations++;
      if (iterations > MAX_ITERATIONS) {
        log('Batas maksimal loop tercapai, berhenti.');
        running = false;
        break;
      }

      const rows = document.querySelectorAll(CONFIG.nasabahRowSelector);
      log(`Memproses ${rows.length} nasabah di halaman ini`);

      for (let i = 0; i < rows.length; i++) {
        if (!running) return;
        const currentRows = document.querySelectorAll(CONFIG.nasabahRowSelector);
        const row = currentRows[i];
        if (!row) continue;

        const rowId = getRowId(row);

        if (processedIds.has(rowId)) {
          log(`Nasabah ${rowId} sudah diproses, skip tanpa buka detail`);
          continue;
        }

        const detailBtn = findByText('a, button, span', CONFIG.detailButtonText, row) || row;
        simulateClick(detailBtn);
        await sleep(CONFIG.delay.long);

        await processNasabahDetail(rowId);

        const back = await goBackToNasabahList();
        if (!back) {
          running = false;
          return;
        }
      }

      const nextBtn = document.querySelector(CONFIG.nextPageSelector);
      const isDisabled = nextBtn && (nextBtn.disabled || nextBtn.classList.contains('disabled'));

      if (nextBtn && !isDisabled) {
        log('Lanjut ke halaman berikutnya');
        simulateClick(nextBtn);
        await sleep(CONFIG.delay.long);
      } else {
        log('Sudah halaman terakhir. Selesai.');
        running = false;
      }
    }
  }

  // ---------- UI kontrol kecil ----------

  let statusEl;

  function updateStatus(msg) {
    if (statusEl) statusEl.textContent = msg;
  }

  function buildControlPanel() {
    const panel = document.createElement('div');
    panel.style.cssText =
      'position:fixed;bottom:20px;right:20px;z-index:99999;background:#1e1e1e;color:#fff;padding:10px 14px;border-radius:8px;font-size:12px;font-family:sans-serif;box-shadow:0 2px 8px rgba(0,0,0,.3);max-width:280px;';

    statusEl = document.createElement('div');
    statusEl.textContent = 'Siap.';
    statusEl.style.marginBottom = '8px';
    panel.appendChild(statusEl);

    const startBtn = document.createElement('button');
    startBtn.textContent = 'Mulai Auto Telegram';
    startBtn.style.cssText =
      'margin-right:6px;padding:4px 10px;background:#2e7d32;color:#fff;border:none;border-radius:4px;cursor:pointer;';
    startBtn.onclick = () => {
      if (!running) mainLoop();
    };

    const stopBtn = document.createElement('button');
    stopBtn.textContent = 'Stop';
    stopBtn.style.cssText =
      'padding:4px 10px;background:#c62828;color:#fff;border:none;border-radius:4px;cursor:pointer;';
    stopBtn.onclick = () => {
      running = false;
      log('Dihentikan manual.');
    };

    panel.appendChild(startBtn);
    panel.appendChild(stopBtn);
    document.body.appendChild(panel);
  }

  window.addEventListener('load', () => {
    setTimeout(buildControlPanel, 1000);
  });
})();
