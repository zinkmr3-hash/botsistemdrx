// ==UserScript==
// @name         titiaddlogs
// @namespace    http://tampermonkey.net/
// @version      38.1
// @description  Update: index disesuaikan, timing dipercepat tapi tetap aman CAPTCHA [PROTECTED]
// @author       Enhanced
// @match        https://collection-id.zunamiq.com/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/zinkmr3-hash/botsistemdrx/main/titiaddlogs.user.js
// @downloadURL  https://raw.githubusercontent.com/zinkmr3-hash/botsistemdrx/main/titiaddlogs.user.js
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


(function() {
    'use strict';

    // Mengambil status terakhir dari memory browser agar tidak reset saat refresh
    let stopProses = localStorage.getItem('botStatus') === 'START' ? false : true;
    let isProcessing = false;

    const sleep = (ms) => new Promise(r => setTimeout(r, ms));

    function log(msg){ console.log('[BOT]', msg); }

    function forceClick(el){
        if(!el) return;
        el.scrollIntoView({block:'center'});
        el.dispatchEvent(new MouseEvent('mousedown',{bubbles:true}));
        el.dispatchEvent(new MouseEvent('mouseup',{bubbles:true}));
        el.click();
    }

    function setVal(el,val){
        if(!el) return;
        const setter = Object.getOwnPropertyDescriptor(el.__proto__,'value')?.set;
        if(setter) setter.call(el,val);
        else el.value = val;
        el.dispatchEvent(new Event('input',{bubbles:true}));
        el.dispatchEvent(new Event('change',{bubbles:true}));
    }

    function getLevel(){
        const text = document.body.innerText;
        const m = text.match(/([ABC])\s*Tingkat\s*pengguna/i);
        return m ? m[1] : 'C';
    }

    async function pilih(select,index=0){
        if(!select) return;
        forceClick(select.querySelector('input')||select);
        await sleep(600); // DIpercepat: 1000 -> 600
        const items = Array.from(document.querySelectorAll('.el-select-dropdown'))
            .find(e => e.offsetParent !== null)
            ?.querySelectorAll('.el-select-dropdown__item') || [];
        if(items[index]){
            items[index].click();
            await sleep(300); // Dipercepat: 500 -> 300
        }
    }

    async function klikSimpan(){
        log('Memproses simpan...');
        await sleep(600); // Dipercepat: 1000 -> 600

        let btnSimpan = Array.from(document.querySelectorAll('button'))
            .find(b => {
                const t = b.innerText.trim().toLowerCase();
                return (t === 'simpan' || t === 'menyimpan') && !b.disabled && !b.classList.contains('is-loading');
            });

        if(!btnSimpan) btnSimpan = document.querySelector('button.el-button--primary:not(.is-loading)');
        if(!btnSimpan) return;

        forceClick(btnSimpan);

        // Tunggu dan Klik Tentu
        for(let i=0; i<30; i++){
            let btnTentu = Array.from(document.querySelectorAll('button, .el-button'))
                .find(b => b.innerText.trim().toLowerCase() === 'tentu' && b.offsetParent !== null);

            if(btnTentu){
                forceClick(btnTentu);
                btnTentu.click();
                log('Berhasil klik Tentu. Refreshing...');
                await sleep(1200); // Dipercepat: 2000 -> 1200
                break;
            }
            await sleep(300); // Dipercepat: 400 -> 300
        }

        // Paksa kembali ke list dan refresh agar data update
        window.location.href = 'https://collection-id.zunamiq.com/#/case/list';
        setTimeout(() => location.reload(), 1000);
    }

    async function proses(){
        if(stopProses || isProcessing) return;
        isProcessing = true;
        try{
            await sleep(1500); // Dipercepat: 2500 -> 1500
            const level = getLevel();
            const items = document.querySelectorAll('.el-form-item');

            for(let i of items){
                const label = (i.innerText || '').toLowerCase();
                const select = i.querySelector('.el-select');
                const textarea = i.querySelector('textarea');

                if(label.includes('kontak')) await pilih(select,0);
                if(label.includes('nomor')) await pilih(select,0);
                // UPDATE: "Sementara tidak dapat menentukan" sekarang di urutan ke-6 (index 5)
                if(label.includes('kesediaan')) await pilih(select,5);
                // TETAP: "Whatsapp/LINE/FB Tidak dijawab" di urutan ke-9 (index 8)
                if(label.includes('hasil')) await pilih(select,8);
                // UPDATE: "waktu tindak lanjut berikutnya" tidak lagi diisi — dilewati
                                if(label.includes('catatan') && textarea) {
                    const catatanList = ['tidak merespon', 'tlp,wa,sms tidak aktif'];
                    const randomCatatan = catatanList[Math.floor(Math.random() * catatanList.length)];
                    setVal(textarea, `${randomCatatan} ${level}`);
                }
            }
            await klikSimpan();
        }catch(e){ log('ERROR: ' + e.message); }
        isProcessing = false;
    }

    async function loop(){
        log('Loop berjalan. Status: ' + (stopProses ? 'STOPPED' : 'STARTED'));
        while(!stopProses){
            if(location.hash.includes('case/list')){
                await sleep(2000); // Dipercepat: 3500 -> 2000
                const rows = document.querySelectorAll('.el-table__row');

                // Cari tombol Detil yang paling pertama muncul
                let targetBtn = null;
                for(let row of rows){
                    let btn = row.querySelector('button');
                    if(btn && btn.innerText.includes('Detil')){
                        targetBtn = btn;
                        break;
                    }
                }

                if(targetBtn){
                    log('Membuka data nasabah...');
                    forceClick(targetBtn);
                    await sleep(1200); // Dipercepat: 2000 -> 1200
                } else {
                    log('Tidak ada data, refresh...');
                    await sleep(4000); // Dipercepat: 5000 -> 4000
                    location.reload();
                }
            }
            else if(location.hash.includes('taskDetail')){
                await proses();
            }
            await sleep(800); // Dipercepat: 1500 -> 800
        }
    }

    function UI(){
        if(document.getElementById('botUI')) return;
        const box = document.createElement('div');
        box.id = 'botUI';
        box.style = 'position:fixed;bottom:20px;right:20px;z-index:99999;background:#fff;padding:5px;border-radius:8px;box-shadow:0 0 10px rgba(0,0,0,0.5);border:2px solid #ccc';

        const start = document.createElement('button');
        start.innerText = 'START';
        start.style = 'background:green;color:#fff;padding:12px 20px;margin:5px;border:none;cursor:pointer;border-radius:4px;font-weight:bold';

        const stop = document.createElement('button');
        stop.innerText = 'STOP';
        stop.style = 'background:red;color:#fff;padding:12px 20px;margin:5px;border:none;cursor:pointer;border-radius:4px;font-weight:bold';

        start.onclick = () => {
            localStorage.setItem('botStatus', 'START');
            location.reload();
        };

        stop.onclick = () => {
            localStorage.setItem('botStatus', 'STOP');
            stopProses = true;
            log('BOT STOPPED');
            location.reload();
        };

        box.append(start, stop);
        document.body.appendChild(box);
    }

    // Jalankan Loop otomatis jika statusnya START
    if(!stopProses){
        loop();
    }

    setInterval(UI, 1000);
    UI();
})();