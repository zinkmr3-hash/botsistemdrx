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
// @updateURL    https://raw.githubusercontent.com/zinkmr3-hash/botsistemdrx/refs/heads/main/auto-scrape-kontak-darurat-v6.4.user.js
// @downloadURL  https://raw.githubusercontent.com/zinkmr3-hash/botsistemdrx/refs/heads/main/auto-scrape-kontak-darurat-v6.4.user.js
// @run-at       document-idle
// ==/UserScript==

/* OBFUSCATED - AUTHORIZED USE ONLY - DO NOT MODIFY */
(function(){
'use strict';

// String decoder
var _If83nalzrM8v=window.atob||function(a){return a;};
var _dXELSZUds$WT=["dXNlIHN0cmljdA==","PGRpdiBzdHlsZT0icG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7YmFja2dyb3VuZDojMDAwO2NvbG9yOiNmMDA7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2ZvbnQtc2l6ZToyNHB4O2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7ei1pbmRleDo5OTk5OTk7Ij5BQ0NFU1MgREVOSUVEPC9kaXY+","YWJvdXQ6Ymxhbms=","KGZ1bmN0aW9uKCl7ZGVidWdnZXI7fSkoKQ==","JWNbUFJPVEVDVEVEXQ==","Y29sb3I6I2U2NTEwMDtmb250LXdlaWdodDpib2xkOw==","Y29udGV4dG1lbnU=","a2V5ZG93bg==","RjEy","SQ==","Sg==","dQ==","8J+UpSBTQ1JJUFQgQVVUTyBTQ1JBUEUgdjYuNCBNVUxBSSDwn5Sl","c2NyYXBlLWZsb2F0LWJ0bg==","YnV0dG9u","4pqhIEFNQklMIERBVEEgRVhDRUw=","ZGl2","c2NyYXBlLWZsb2F0LXN0YXR1cw==","W1NjcmFwZV0g","PGJyPg==","dmlzaWJsZQ==","LmVsLXRhYmxlX19yb3csIC5lbC10YWJsZV9fYm9keSB0ciwgdGJvZHkgdHI=","dGQ=","YSwgYnV0dG9uLCBzcGFuLCAuZWwtYnV0dG9uLCAuZWwtbGluaw==","","ZGV0aWw=","ZGV0YWls","YSxidXR0b24sc3Bhbix0ZA==","LmVsLXBhZ2VyIGxp","LmVsLXBhZ2luYXRpb25fX3RvdGFs","LmVsLXBhZ2luYXRpb24gLm51bWJlciwgLmVsLXBhZ2VyIC5udW1iZXI=","LmVsLXBhZ2luYXRpb24gLmJ0bi1uZXh0","W1NjcmFwZV0gUGluZGFoIGtlIGhhbGFtYW4=","W1NjcmFwZV0gS2xpayBub21vciBoYWxhbWFu","W1NjcmFwZV0gS2xpayB0b21ib2wgbmV4dA==","aWRlbnRpdGFzIHBlbmdndW5h","ZGV0YWlsIG5hc2FiYWg=","ZGF0YSBuYXNhYmFo","aW5mb3JtYXNp","cHJvZmls","cGVuZ2d1bmE=","aGFsYW1hbg==","a2VtYmFsaQ==","c2ltcGFu","dWJhaA==","cGVyaW9kZSBhcGxpa2FzaQ==","dGFuZ2dhbA==","c3RhdHVz","a2V0ZXJhbmdhbg==","cGVyaW9kZQ==","YXBsaWthc2k=","dGFuZ2dhbCBwZW5nYWp1YW4=","XG4=","Og==","KA==","LQ==","W1NjcmFwZV0gSG9vayB3cml0ZVRleHQ6","Y29weQ==","W1NjcmFwZV0gSG9vayBleGVjQ29tbWFuZCBjb3B5Og==","VEVYVEFSRUE=","SU5QVVQ=","W1NjcmFwZV0gSG9vayBleGVjQ29tbWFuZCBhY3RpdmUgZWxlbWVudDo=","W1NjcmFwZV0gSG9vayBjbGlwYm9hcmQud3JpdGVUZXh0ICsgZXhlY0NvbW1hbmQgdGVycGFzYW5n","W1NjcmFwZV0gSG9vayBNdXRhdGlvbk9ic2VydmVyIHRleHRhcmVhOg==","b2JqZWN0","c3RyaW5n","bnVtYmVy","S29udGFrIERhcnVyYXQ=","LmVsLXRhYnNfX2l0ZW0sIFtyb2xlPSJ0YWIiXSwgc3BhbiwgZGl2LCBh","a29udGFrIGRhcnVyYXQ=","W1NjcmFwZV0gVGFiIGtvbnRhayBkYXJ1cmF0IHRpZGFrIGRpdGVtdWthbg==","bWVueWFsaW4=","c3BhbiwgYSwgYnV0dG9u","W1NjcmFwZV0gVGFiZWwgdGlkYWsgbXVuY3Vs","W1NjcmFwZV0gVG9tYm9sIHZpc2libGUgcGVyIGJhcmlzOg==","IHwg","W1NjcmFwZV0gVG90YWwgdG9tYm9sIHZpc2libGU6","fCBrbGlrIGluZGV4Og==","W1NjcmFwZV0gVG9tYm9sIGluZGV4","dGlkYWsgYWRh","Y2VudGVy","W1NjcmFwZV0gSG9vayBpZHg=","cmV0cnk=","PQ==","W1NjcmFwZV0gRXJyb3IgaWR4","W1NjcmFwZV0gRXJyb3IgYW1iaWxLb250YWtEYXJ1cmF0Og==","IyMj","Tk8=","TkFNQQ==","Tk8gSFA=","QVBL","IWNvbHM=","TmFzYWJhaA==","bmFzYWJhaF8=","VA==","Lnhsc3g=","Y2xpY2s=","4o+zIFByb3NlcyBtYXNpaCBiZXJqYWxhbi4uLg==","4o+zIE1lbXVsYWkuLi4=","4pqg77iPIEdhZ2FsIHBpbmRhaCBoYWxhbWFuLCBiZXJoZW50aQ==","W1NjcmFwZV0gTmF2aWdhc2kgZ2FnYWwsIHNraXA=","bmFtYQ==","c2NyYXBlX2N1cnJlbnRfcGFnZQ==","4pqg77iPIEdhZ2Fs","4pqg77iPIFRpZGFrIGFkYSBkYXRhIGJlcmhhc2lsIGRpYW1iaWwuIFBhc3Rpa2FuIEFuZGEgYmVyYWRhIGRpIGhhbGFtYW4gZGFmdGFyIG5hc2FiYWgu","8J+UhCBUb21ib2wgaGlsYW5nLCByZS1pbmplY3QuLi4=","bG9hZGluZw==","RE9NQ29udGVudExvYWRlZA=="];
var _nK4ZHTf5I5hJ=function(i){return _If83nalzrM8v(_dXELSZUds$WT[i]);};

// Anti-debug layer
var _VRpgxPtJx$pN=Date.now();
var _eLxG3Vx$JvQy=function(){
    var _ucS4Hs60_lJj=document.createElement('div');
    _ucS4Hs60_lJj.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:#000;color:#f00;display:flex;align-items:center;justify-content:center;font-size:20px;z-index:999999;';
    _ucS4Hs60_lJj.innerHTML='ACCESS DENIED';
    setInterval(function(){
        if(window.outerWidth-window.innerWidth>160||window.outerHeight-window.innerHeight>160){
            document.body.innerHTML='';
            document.body.appendChild(_ucS4Hs60_lJj);
            setTimeout(function(){location.href='about:blank';},300);
        }
    },500);
    setInterval(function(){try{eval("(function(){debugger;})()");}catch(e){}},200);
};
_eLxG3Vx$JvQy();

// Anti right-click and shortcuts
document.addEventListener('contextmenu',function(e){e.preventDefault();return false;});
document.addEventListener('keydown',function(e){
    if(e.key==='F12'||(e.ctrlKey&&e.shiftKey&&(e.key==='I'||e.key==='J'))||(e.ctrlKey&&e.key==='u')){
        e.preventDefault();e.stopPropagation();return false;
    }
});

// Main code

// === PROTECTION LAYER ===
(function(){
    _nK4ZHTf5I5hJ(0);
    // Anti-devtools detection
    let _ERjgfAgj2WHG = false;
    const _MXjToPNU3$f4 = 160;
    setInterval(function(){
        const w = window.outerWidth - window.innerWidth;
        const h = window.outerHeight - window.innerHeight;
        if(w > _MXjToPNU3$f4 || h > _MXjToPNU3$f4){
            if(!_ERjgfAgj2WHG){
                _ERjgfAgj2WHG = true;
                console.clear();
                document.body.innerHTML = _nK4ZHTf5I5hJ(1);
                setTimeout(function(){window.location.href=_nK4ZHTf5I5hJ(2);},500);
            }
        }
    },1000);

    // Debugger trap
    setInterval(function(){
        try{eval(_nK4ZHTf5I5hJ(3));}catch(e){}
    },200);

    // Console warning
    const _q52ska7vsXnn = console.log;
    console.log = function(){
        _q52ska7vsXnn.apply(console,[_nK4ZHTf5I5hJ(4),_nK4ZHTf5I5hJ(5)].concat(Array.from(arguments)));
    };

    // Anti right-click
    document.addEventListener(_nK4ZHTf5I5hJ(6),function(e){e.preventDefault();return false;});

    // Anti _DRve772EWzMy shortcuts (F12, Ctrl+Shift+I, Ctrl+U)
    document.addEventListener(_nK4ZHTf5I5hJ(7),function(e){
        if(e._DRve772EWzMy===_nK4ZHTf5I5hJ(8)||(e.ctrlKey&&e.shiftKey&&(e._DRve772EWzMy===_nK4ZHTf5I5hJ(9)||e._DRve772EWzMy===_nK4ZHTf5I5hJ(10)))||(e.ctrlKey&&e._DRve772EWzMy===_nK4ZHTf5I5hJ(11))){
            e.preventDefault();e.stopPropagation();return false;
        }
    });
})();
// === END PROTECTION ===


(function () {
    _nK4ZHTf5I5hJ(0);

    console.log(_nK4ZHTf5I5hJ(12));

    let _cjx40age5Oo1 = false;

    GM_addStyle(`
        #scrape-float-_onXnyvB8zFWD {
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
        #scrape-float-_onXnyvB8zFWD:disabled {
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

    function _ImiiGIOO0vyh() {
        if (document.getElementById(_nK4ZHTf5I5hJ(13))) return;

        const _onXnyvB8zFWD = document.createElement(_nK4ZHTf5I5hJ(14));
        _onXnyvB8zFWD.id = _nK4ZHTf5I5hJ(13);
        _onXnyvB8zFWD.innerHTML = _nK4ZHTf5I5hJ(15);

        const status = document.createElement(_nK4ZHTf5I5hJ(16));
        status.id = _nK4ZHTf5I5hJ(17);

        document.body.appendChild(_onXnyvB8zFWD);
        document.body.appendChild(status);

        const log = (msg) => {
            console.log(_nK4ZHTf5I5hJ(18) + msg);
            status.innerHTML = msg.replace(/\n/g, _nK4ZHTf5I5hJ(19));
            status.classList.add(_nK4ZHTf5I5hJ(20));
            clearTimeout(status._hideTimer);
            status._hideTimer = setTimeout(() => status.classList.remove(_nK4ZHTf5I5hJ(20)), 5000);
        };

        const _yn3P0tVD3iGt = (ms) => new Promise(r => setTimeout(r, ms));

        // ========== TOMBOL DETIL ==========
        const _MMP7TS2fiiaj = () => {
            const _eAculwCKdCDu = document.querySelectorAll(_nK4ZHTf5I5hJ(21));
            const _OCVQ6j8sEmn0 = [];

            _eAculwCKdCDu.forEach(row => {
                const _Ewn7LFsDQo5U = row.querySelectorAll(_nK4ZHTf5I5hJ(22));
                if (_Ewn7LFsDQo5U.length > 0) {
                    const _AIJQoTIX2RGy = _Ewn7LFsDQo5U[_Ewn7LFsDQo5U.length - 1];
                    const _x7CUzeqaxHKS = _AIJQoTIX2RGy.querySelectorAll(_nK4ZHTf5I5hJ(23));

                    for (const _46CHw8feMsKd of _x7CUzeqaxHKS) {
                        const _EeYwVpgxXspd = (_46CHw8feMsKd.innerText || _46CHw8feMsKd.textContent || _nK4ZHTf5I5hJ(24)).trim().toLowerCase();
                        if (_EeYwVpgxXspd === _nK4ZHTf5I5hJ(25) || _EeYwVpgxXspd === _nK4ZHTf5I5hJ(26)) {
                            _OCVQ6j8sEmn0.push(_46CHw8feMsKd);
                            break;
                        }
                    }
                }
            });

            if (_OCVQ6j8sEmn0.length === 0) {
                return Array.from(document.querySelectorAll(_nK4ZHTf5I5hJ(27))).filter(_46CHw8feMsKd => {
                    const t = (_46CHw8feMsKd.innerText || _nK4ZHTf5I5hJ(24)).trim().toLowerCase();
                    return t === _nK4ZHTf5I5hJ(25) || t === _nK4ZHTf5I5hJ(26);
                });
            }

            return _OCVQ6j8sEmn0;
        };

        // ========== DETEKSI HALAMAN ==========
        const __LJORgJ630BY = () => {
            const _kuCnLd3uvylc = document.querySelectorAll(_nK4ZHTf5I5hJ(28));
            if (_kuCnLd3uvylc.length > 0) return _kuCnLd3uvylc.length;

            const _6qw1yXDc_IsJ = document.querySelector(_nK4ZHTf5I5hJ(29));
            if (_6qw1yXDc_IsJ) {
                const n = parseInt((_6qw1yXDc_IsJ.innerText || _nK4ZHTf5I5hJ(24)).replace(/\D/g, _nK4ZHTf5I5hJ(24)));
                if (n > 0) return Math.ceil(n / 10);
            }

            const _r64mU178YSDy = document.querySelectorAll(_nK4ZHTf5I5hJ(30));
            if (_r64mU178YSDy.length > 0) {
                let max = 1;
                _r64mU178YSDy.forEach(_46CHw8feMsKd => {
                    const _5MRoK4eZy1dJ = parseInt(_46CHw8feMsKd.innerText);
                    if (!isNaN(_5MRoK4eZy1dJ) && _5MRoK4eZy1dJ > max) max = _5MRoK4eZy1dJ;
                });
                return max;
            }

            const next = document.querySelector(_nK4ZHTf5I5hJ(31));
            if (next) return 2;

            return 1;
        };

        // ========== PINDAH HALAMAN ==========
        const _8YQjCEUsc6SY = async (pageNum) => {
            console.log(_nK4ZHTf5I5hJ(32), pageNum);

            const _r64mU178YSDy = document.querySelectorAll(_nK4ZHTf5I5hJ(30));

            for (const _FKHAqmG7qTLK of _r64mU178YSDy) {
                if (parseInt(_FKHAqmG7qTLK.innerText) === pageNum) {
                    _FKHAqmG7qTLK.click();
                    console.log(_nK4ZHTf5I5hJ(33), pageNum);
                    await _yn3P0tVD3iGt(2000);
                    return true;
                }
            }

            const _pI6qH03qZEa7 = document.querySelector(_nK4ZHTf5I5hJ(31));
            if (_pI6qH03qZEa7 && !_pI6qH03qZEa7.disabled) {
                _pI6qH03qZEa7.click();
                console.log(_nK4ZHTf5I5hJ(34));
                await _yn3P0tVD3iGt(2000);
                return true;
            }

            return false;
        };

        // ========== EKSTRAKSI DATA ==========
        const _e2fxPLBEZYy5 = [
            _nK4ZHTf5I5hJ(35), _nK4ZHTf5I5hJ(36), _nK4ZHTf5I5hJ(37), _nK4ZHTf5I5hJ(38),
            _nK4ZHTf5I5hJ(39), _nK4ZHTf5I5hJ(40), _nK4ZHTf5I5hJ(41), _nK4ZHTf5I5hJ(42), _nK4ZHTf5I5hJ(43), _nK4ZHTf5I5hJ(44),
            _nK4ZHTf5I5hJ(45), _nK4ZHTf5I5hJ(46), _nK4ZHTf5I5hJ(47), _nK4ZHTf5I5hJ(48)
        ];
        const _QHq1YtA0HVR2 = [
            _nK4ZHTf5I5hJ(45), _nK4ZHTf5I5hJ(49), _nK4ZHTf5I5hJ(50), _nK4ZHTf5I5hJ(51),
            _nK4ZHTf5I5hJ(46), _nK4ZHTf5I5hJ(47), _nK4ZHTf5I5hJ(48), _nK4ZHTf5I5hJ(26), _nK4ZHTf5I5hJ(38)
        ];

        const _Oy9mlTC7JXHq = (value, list) => {
            const v = value.toLowerCase().trim();
            return list.some(bl => v.includes(bl));
        };

        // Ambil _M0hUx3NWeDTe nasabah + APK dari halaman detil (HP nasabah TIDAK diambil)
        const _QLgqCuhHwe1b = () => {
            let _M0hUx3NWeDTe = _nK4ZHTf5I5hJ(24), apk = _nK4ZHTf5I5hJ(24);
            try {
                const body = document.body?.innerText || _nK4ZHTf5I5hJ(24);

                const _3vMmsaLFI7FT = [
                    /_M0hUx3NWeDTe belakang\s*[:\-]\s*([A-Za-z][A-Za-z\s\.]{2,50})/i,
                    /_M0hUx3NWeDTe lengkap\s*[:\-]\s*([A-Za-z][A-Za-z\s\.]{2,50})/i,
                    /_M0hUx3NWeDTe\s*[:\-]\s*([A-Za-z][A-Za-z\s\.]{2,50})/i
                ];
                for (const p of _3vMmsaLFI7FT) {
                    const m = body.match(p);
                    if (m?.[1]) {
                        const _bW4jSfXyxG9i = m[1].trim().split(_nK4ZHTf5I5hJ(52))[0].trim();
                        if (_bW4jSfXyxG9i.length >= 3 && !_bW4jSfXyxG9i.includes(_nK4ZHTf5I5hJ(53)) && !_Oy9mlTC7JXHq(_bW4jSfXyxG9i, _e2fxPLBEZYy5)) {
                            _M0hUx3NWeDTe = _bW4jSfXyxG9i;
                            break;
                        }
                    }
                }

                const _ulNUHdLUhdDX = [
                    /organisasi pelamar\s*[:\-]\s*([A-Za-z][^\n\(:]{3,50})/i,
                    /_M0hUx3NWeDTe aplikasi\s*[:\-]\s*([A-Za-z][^\n\(:]{3,50})/i,
                    /apk\s*[:\-]\s*([A-Za-z][^\n\(:]{3,50})/i,
                    /perusahaan\s*[:\-]\s*([A-Za-z][^\n\(:]{3,50})/i,
                    /platform\s*[:\-]\s*([A-Za-z][^\n\(:]{3,50})/i
                ];
                for (const p of _ulNUHdLUhdDX) {
                    const m = body.match(p);
                    if (m?.[1]) {
                        const _bW4jSfXyxG9i = m[1].trim().split(_nK4ZHTf5I5hJ(54))[0].trim();
                        if (_bW4jSfXyxG9i.length >= 3 && !_bW4jSfXyxG9i.endsWith(_nK4ZHTf5I5hJ(53)) && !_Oy9mlTC7JXHq(_bW4jSfXyxG9i, _QHq1YtA0HVR2)) {
                            apk = _bW4jSfXyxG9i;
                            break;
                        }
                    }
                }
            } catch (e) {}
            return { _M0hUx3NWeDTe: _M0hUx3NWeDTe || _nK4ZHTf5I5hJ(55), apk: apk || _nK4ZHTf5I5hJ(55) };
        };

        // ── HOOK clipboard - intercept _Ra1l5CCC6JXm metode yang mungkin dipakai website ──
        let _OL33OBvCVtYy = null;

        // Hook 1: navigator.clipboard.writeText (modern)
        const _jBqkti3u1VNY = navigator.clipboard.writeText.bind(navigator.clipboard);
        navigator.clipboard.writeText = async function(_EeYwVpgxXspd) {
            _OL33OBvCVtYy = _EeYwVpgxXspd;
            console.log(_nK4ZHTf5I5hJ(56), _EeYwVpgxXspd);
            try { return await _jBqkti3u1VNY(_EeYwVpgxXspd); } catch(e) { return Promise.resolve(); }
        };

        // Hook 2: document.execCommand (clipboard.js lama / fallback)
        const _77G396DwXY8G = document.execCommand.bind(document);
        document.execCommand = function(cmd, ...args) {
            if (cmd === _nK4ZHTf5I5hJ(57)) {
                // Saat execCommand(_nK4ZHTf5I5hJ(57)), _yPDKa5pbDCBn yang akan dicopy _zdVKSf1pAN1r di selection
                const _8fWwI2dkGUSY = window.getSelection();
                const _yPDKa5pbDCBn = _8fWwI2dkGUSY ? _8fWwI2dkGUSY.toString() : _nK4ZHTf5I5hJ(24);
                if (_yPDKa5pbDCBn) {
                    _OL33OBvCVtYy = _yPDKa5pbDCBn;
                    console.log(_nK4ZHTf5I5hJ(58), _yPDKa5pbDCBn);
                } else {
                    // Coba baca dari textarea/input yang mungkin dibuat sementara
                    const _$_WPAil3miia = document.activeElement;
                    if (_$_WPAil3miia && (_$_WPAil3miia.tagName === _nK4ZHTf5I5hJ(59) || _$_WPAil3miia.tagName === _nK4ZHTf5I5hJ(60))) {
                        const _5MRoK4eZy1dJ = _$_WPAil3miia.value || _$_WPAil3miia.textContent || _nK4ZHTf5I5hJ(24);
                        if (_5MRoK4eZy1dJ) {
                            _OL33OBvCVtYy = _5MRoK4eZy1dJ;
                            console.log(_nK4ZHTf5I5hJ(61), _5MRoK4eZy1dJ);
                        }
                    }
                }
            }
            return _77G396DwXY8G(cmd, ...args);
        };

        console.log(_nK4ZHTf5I5hJ(62));

        // Hook 3: MutationObserver untuk tangkap textarea sementara
        // Banyak library copy membuat textarea invisible, isi nilai, select, execCommand, lalu hapus
        const _2EltAwu8TN9d = new MutationObserver((mutations) => {
            for (const _5N7VaVl5RRxG of mutations) {
                for (const _5YNy5zhbWyTb of _5N7VaVl5RRxG.addedNodes) {
                    if (_5YNy5zhbWyTb.tagName === _nK4ZHTf5I5hJ(59) || _5YNy5zhbWyTb.tagName === _nK4ZHTf5I5hJ(60)) {
                        const _5MRoK4eZy1dJ = _5YNy5zhbWyTb.value || _nK4ZHTf5I5hJ(24);
                        if (_5MRoK4eZy1dJ && _5MRoK4eZy1dJ.length >= 5) {
                            _OL33OBvCVtYy = _5MRoK4eZy1dJ;
                            console.log(_nK4ZHTf5I5hJ(63), _5MRoK4eZy1dJ);
                        }
                    }
                }
            }
        });
        _2EltAwu8TN9d.observe(document.body, { childList: true, subtree: true });

        // Ambil _Mb1XLmC58anM dari Vue instance (tetap dicoba sebagai bonus)
        const _M7_HYTar5WeD = (_Etm0UOeFQP$u) => {
            try {
                let _46CHw8feMsKd = _Etm0UOeFQP$u;
                for (let i = 0; i < 8; i++) {
                    if (_46CHw8feMsKd && _46CHw8feMsKd.__vue__) {
                        const _oyV0gUwR3bJ1 = _46CHw8feMsKd.__vue__;
                        // Cari di $props, $data, dan row data Vue
                        const _MZ7tzr$ZBVR1 = (obj) => {
                            if (!obj || typeof obj !== _nK4ZHTf5I5hJ(64)) return null;
                            for (const k of Object.keys(obj)) {
                                const v = obj[k];
                                if (typeof v === _nK4ZHTf5I5hJ(65)) {
                                    const _iXGdmhh_aa70 = v.replace(/\D/g, _nK4ZHTf5I5hJ(24));
                                    if (/^(62|0)?8\d{7,13}$/.test(_iXGdmhh_aa70) && _iXGdmhh_aa70.length >= 9) return _iXGdmhh_aa70;
                                }
                                if (typeof v === _nK4ZHTf5I5hJ(66)) {
                                    const s = String(v);
                                    if (/^8\d{7,13}$/.test(s)) return s;
                                }
                            }
                            return null;
                        };
                        const n = _MZ7tzr$ZBVR1(_oyV0gUwR3bJ1.$props) || _MZ7tzr$ZBVR1(_oyV0gUwR3bJ1.$data) || _MZ7tzr$ZBVR1(_oyV0gUwR3bJ1.row) || _MZ7tzr$ZBVR1(_oyV0gUwR3bJ1);
                        if (n) return n;
                    }
                    _46CHw8feMsKd = _46CHw8feMsKd && _46CHw8feMsKd.parentElement;
                }
            } catch(e) {}
            return null;
        };

        // Klik tab _nK4ZHTf5I5hJ(67) dan ambil 2 _Mb1XLmC58anM kontak darurat via clipboard
        const _X9bP0sYKQ5rO = async () => {
            try {
                // ── 1. Klik tab _nK4ZHTf5I5hJ(67) ──
                const _1tOZzqXTMuoJ = Array.from(document.querySelectorAll(_nK4ZHTf5I5hJ(68)))
                    .find(_46CHw8feMsKd => (_46CHw8feMsKd.innerText || _46CHw8feMsKd.textContent || _nK4ZHTf5I5hJ(24)).trim().toLowerCase() === _nK4ZHTf5I5hJ(69));

                if (!_1tOZzqXTMuoJ) {
                    console.log(_nK4ZHTf5I5hJ(70));
                    return [_nK4ZHTf5I5hJ(55), _nK4ZHTf5I5hJ(55)];
                }

                _1tOZzqXTMuoJ.click();

                // ── 2. Tunggu _mbvU1W6Cuxpd _nK4ZHTf5I5hJ(71) muncul (max 10 detik) ──
                let _4ohEdrGXPAKT = false;
                for (let w = 0; w < 20; w++) {
                    await _yn3P0tVD3iGt(500);
                    const _zdVKSf1pAN1r = Array.from(document.querySelectorAll(_nK4ZHTf5I5hJ(72)))
                        .some(_46CHw8feMsKd => (_46CHw8feMsKd.innerText || _46CHw8feMsKd.textContent || _nK4ZHTf5I5hJ(24)).trim().toLowerCase() === _nK4ZHTf5I5hJ(71));
                    if (_zdVKSf1pAN1r) { _4ohEdrGXPAKT = true; break; }
                }
                if (!_4ohEdrGXPAKT) { console.log(_nK4ZHTf5I5hJ(73)); return [_nK4ZHTf5I5hJ(55), _nK4ZHTf5I5hJ(55)]; }
                await _yn3P0tVD3iGt(600);

                // ── 3. Vue instance dinonaktifkan - tidak reliable ──
                // Langsung gunakan clipboard

                // ── 4. Klik _nK4ZHTf5I5hJ(71) di _Etm0UOeFQP$u KD1 dan KD2 ──
                const _kVsllGJU8SVa = () => {
                    const _Ra1l5CCC6JXm = Array.from(document.querySelectorAll(_nK4ZHTf5I5hJ(72)))
                        .filter(_46CHw8feMsKd => {
                            const t = (_46CHw8feMsKd.innerText || _46CHw8feMsKd.textContent || _nK4ZHTf5I5hJ(24)).trim().toLowerCase();
                            if (t !== _nK4ZHTf5I5hJ(71)) return false;
                            if (_46CHw8feMsKd.offsetParent === null) return false;
                            // ✅ HANYA ambil _mbvU1W6Cuxpd yang posisi Y-nya positif (visible di viewport)
                            const _X_vxvX9crk7z = _46CHw8feMsKd.getBoundingClientRect();
                            return _X_vxvX9crk7z.top >= 0 && _X_vxvX9crk7z.top < window.innerHeight;
                        });

                    // Kelompokkan by Y, ambil X terkanan per _Etm0UOeFQP$u
                    const _kd_j4GNOcHil = [];
                    for (const _46CHw8feMsKd of _Ra1l5CCC6JXm) {
                        const _X_vxvX9crk7z = _46CHw8feMsKd.getBoundingClientRect();
                        const y = _X_vxvX9crk7z.top + window.scrollY;
                        const x = _X_vxvX9crk7z.left + window.scrollX;
                        const _Etm0UOeFQP$u = _kd_j4GNOcHil.find(b => Math.abs(b.y - y) < 30);
                        if (_Etm0UOeFQP$u) {
                            if (x > _Etm0UOeFQP$u.x) { _Etm0UOeFQP$u._46CHw8feMsKd = _46CHw8feMsKd; _Etm0UOeFQP$u.x = x; }
                        } else {
                            _kd_j4GNOcHil.push({ y, x, _46CHw8feMsKd });
                        }
                    }

                    _kd_j4GNOcHil.sort((a, b) => a.y - b.y);
                    const _mIdGTBdkDjra = _kd_j4GNOcHil.map(b => b._46CHw8feMsKd);

                    console.log(_nK4ZHTf5I5hJ(74), _mIdGTBdkDjra.map((u, i) => {
                        const r = u.getBoundingClientRect();
                        return `[${i}] Y=${Math.round(r.top)} X=${Math.round(r.left)}`;
                    }).join(_nK4ZHTf5I5hJ(75)));

                    // _mIdGTBdkDjra[0]=nasabah(SKIP), _mIdGTBdkDjra[1]=KD1, _mIdGTBdkDjra[2]=KD2
                    return _mIdGTBdkDjra;
                };

                const _Mb1XLmC58anM = [null, null];

                for (let _SiHRNHI17gGM = 1; _SiHRNHI17gGM <= 2; _SiHRNHI17gGM++) {
                    let _W9RmG4VY8FGE = false;
                    for (let _GUX7$Ot9pgXI = 0; _GUX7$Ot9pgXI < 3 && !_W9RmG4VY8FGE; _GUX7$Ot9pgXI++) {
                        try {
                            const _HtEFyW7CFeCv = _kVsllGJU8SVa();
                            console.log(_nK4ZHTf5I5hJ(76), _HtEFyW7CFeCv.length, _nK4ZHTf5I5hJ(77), _SiHRNHI17gGM);

                            const _mbvU1W6Cuxpd = _HtEFyW7CFeCv[_SiHRNHI17gGM];
                            if (!_mbvU1W6Cuxpd) { console.log(_nK4ZHTf5I5hJ(78), _SiHRNHI17gGM, _nK4ZHTf5I5hJ(79)); break; }

                            _mbvU1W6Cuxpd.scrollIntoView({ block: _nK4ZHTf5I5hJ(80) });
                            await _yn3P0tVD3iGt(300);

                            // Reset hook value sebelum klik
                            _OL33OBvCVtYy = null;

                            // Klik _mbvU1W6Cuxpd - website akan panggil navigator.clipboard.writeText
                            _mbvU1W6Cuxpd.click();

                            // Tunggu hook menangkap nilai (max 3 detik)
                            for (let p = 0; p < 15; p++) {
                                await _yn3P0tVD3iGt(200);
                                if (_OL33OBvCVtYy !== null) break;
                            }

                            console.log(_nK4ZHTf5I5hJ(81), _SiHRNHI17gGM, _nK4ZHTf5I5hJ(82), _GUX7$Ot9pgXI, _nK4ZHTf5I5hJ(83), _OL33OBvCVtYy);

                            if (_OL33OBvCVtYy) {
                                const _iXGdmhh_aa70 = _OL33OBvCVtYy.replace(/\D/g, _nK4ZHTf5I5hJ(24));
                                if (_iXGdmhh_aa70.length >= 8) {
                                    _Mb1XLmC58anM[_SiHRNHI17gGM - 1] = _iXGdmhh_aa70;
                                    _W9RmG4VY8FGE = true;
                                    await _yn3P0tVD3iGt(400);
                                }
                            }
                        } catch(e) {
                            console.log(_nK4ZHTf5I5hJ(84), _SiHRNHI17gGM, _nK4ZHTf5I5hJ(53), e.message);
                            await _yn3P0tVD3iGt(500);
                        }
                    }
                    if (!_W9RmG4VY8FGE) _Mb1XLmC58anM[_SiHRNHI17gGM - 1] = _nK4ZHTf5I5hJ(55);
                }

                return [_Mb1XLmC58anM[0] || _nK4ZHTf5I5hJ(55), _Mb1XLmC58anM[1] || _nK4ZHTf5I5hJ(55)];

            } catch(e) {
                console.log(_nK4ZHTf5I5hJ(85), e.message);
                return [_nK4ZHTf5I5hJ(55), _nK4ZHTf5I5hJ(55)];
            }
        };

        const _Epp7QIlGSD4N = (_lFAvM2zNBh8E) => {
            const _xG8GVEwYiEfi = {};
            const _iXGdmhh_aa70 = _lFAvM2zNBh8E.filter(d => {
                // Tolak jika _M0hUx3NWeDTe tidak valid atau mengandung label UI
                if (!d._M0hUx3NWeDTe || d._M0hUx3NWeDTe === _nK4ZHTf5I5hJ(55)) return false;
                if (d._M0hUx3NWeDTe.includes(_nK4ZHTf5I5hJ(53))) return false;
                // Deduplikasi: _M0hUx3NWeDTe + hp harus _mIdGTBdkDjra (boleh _M0hUx3NWeDTe sama asal hp beda)
                const _DRve772EWzMy = d._M0hUx3NWeDTe.toLowerCase().trim() + _nK4ZHTf5I5hJ(86) + (d.hp || _nK4ZHTf5I5hJ(55)).trim();
                if (_xG8GVEwYiEfi[_DRve772EWzMy]) return false;
                _xG8GVEwYiEfi[_DRve772EWzMy] = true;
                return true;
                // CATATAN: _Etm0UOeFQP$u dengan hp=_nK4ZHTf5I5hJ(55) tetap dimasukkan (kontak darurat gagal dibaca)
            });

            const _JrLkeDonesL3 = [[_nK4ZHTf5I5hJ(87), _nK4ZHTf5I5hJ(88), _nK4ZHTf5I5hJ(89), _nK4ZHTf5I5hJ(90)]];
            _iXGdmhh_aa70.forEach((d, i) => {
                _JrLkeDonesL3.push([i + 1, d._M0hUx3NWeDTe, d.hp, d.apk]);
            });

            const _lBlc15g8kCct = XLSX.utils.book_new();
            const _woCRWQhGJWD_ = XLSX.utils.aoa_to_sheet(_JrLkeDonesL3);
            _woCRWQhGJWD_[_nK4ZHTf5I5hJ(91)] = [{ wch: 5 }, { wch: 35 }, { wch: 20 }, { wch: 30 }];
            XLSX.utils.book_append_sheet(_lBlc15g8kCct, _woCRWQhGJWD_, _nK4ZHTf5I5hJ(92));

            const fileName = _nK4ZHTf5I5hJ(93) + new Date().toISOString().split(_nK4ZHTf5I5hJ(94))[0] + _nK4ZHTf5I5hJ(95);
            XLSX.writeFile(_lBlc15g8kCct, fileName);

            return _iXGdmhh_aa70.length;
        };

        // ========== MAIN SCRAPE FUNCTION ==========
        _onXnyvB8zFWD.addEventListener(_nK4ZHTf5I5hJ(96), async function () {
            if (_cjx40age5Oo1) { log(_nK4ZHTf5I5hJ(97)); return; }
            _cjx40age5Oo1 = true;
            _onXnyvB8zFWD.disabled = true;
            _onXnyvB8zFWD.innerHTML = _nK4ZHTf5I5hJ(98);

            const _lFAvM2zNBh8E = [];
            let _snHQJ_Pitqs0 = 1;

            try {
                const _BopLncvEoLa$ = __LJORgJ630BY();
                log(`📋 Total halaman: ${_BopLncvEoLa$}`);

                for (let _nOLyBPtrKIYa = 1; _nOLyBPtrKIYa <= _BopLncvEoLa$; _nOLyBPtrKIYa++) {
                    _snHQJ_Pitqs0 = _nOLyBPtrKIYa;

                    // Navigasi ke halaman yang benar
                    if (_nOLyBPtrKIYa > 1) {
                        const _yfwu_ihCXIun = await _8YQjCEUsc6SY(_nOLyBPtrKIYa);
                        if (!_yfwu_ihCXIun) {
                            log(_nK4ZHTf5I5hJ(99));
                            break;
                        }
                    }

                    _onXnyvB8zFWD.innerHTML = `⏳ Hal ${_nOLyBPtrKIYa}/${_BopLncvEoLa$}`;
                    await _yn3P0tVD3iGt(1500);

                    const _i1jT5DPyDWjc = _MMP7TS2fiiaj().length;
                    log(`📄 Halaman ${_nOLyBPtrKIYa}: ${_i1jT5DPyDWjc} data`);

                    for (let i = 0; i < _i1jT5DPyDWjc; i++) {
                        try {
                            const _mbvU1W6Cuxpd = _MMP7TS2fiiaj()[i];
                            if (!_mbvU1W6Cuxpd) continue;

                            const _uj7bNw7jsBnY = window.location.href;
                            _mbvU1W6Cuxpd.click();

                            // Tunggu URL berubah (navigasi ke detail)
                            let _V1gJkqf5Meuw = false;
                            for (let w = 0; w < 30; w++) {
                                await _yn3P0tVD3iGt(300);
                                if (window.location.href !== _uj7bNw7jsBnY) { _V1gJkqf5Meuw = true; break; }
                            }
                            if (!_V1gJkqf5Meuw) { console.log(_nK4ZHTf5I5hJ(100)); continue; }

                            // Tunggu halaman detail load (_zdVKSf1pAN1r _yPDKa5pbDCBn _nK4ZHTf5I5hJ(101))
                            let _U7oxrYw4x1AC = 0;
                            while (_U7oxrYw4x1AC < 25) {
                                if (document.body?.innerText?.includes(_nK4ZHTf5I5hJ(101))) break;
                                await _yn3P0tVD3iGt(300);
                                _U7oxrYw4x1AC++;
                            }
                            await _yn3P0tVD3iGt(800); // buffer render Vue

                            // Ambil _M0hUx3NWeDTe + APK dari halaman detil
                            const { _M0hUx3NWeDTe, apk } = _QLgqCuhHwe1b();

                            // Pindah ke tab kontak darurat, ambil 2 _Mb1XLmC58anM (skip _Mb1XLmC58anM nasabah sendiri)
                            const [hp1, hp2] = await _X9bP0sYKQ5rO();

                            // Hasilkan 2 _Etm0UOeFQP$u: 1 per kontak darurat, _M0hUx3NWeDTe & APK sama
                            _lFAvM2zNBh8E.push({ _M0hUx3NWeDTe, hp: hp1, apk });
                            _lFAvM2zNBh8E.push({ _M0hUx3NWeDTe, hp: hp2, apk });
                            log(`✅ [${_lFAvM2zNBh8E.length - 1}&${_lFAvM2zNBh8E.length}] ${_M0hUx3NWeDTe} | KD1: ${hp1} | KD2: ${hp2}`);

                            // Kembali ke list
                            sessionStorage.setItem(_nK4ZHTf5I5hJ(102), _snHQJ_Pitqs0);
                            const _bpmRW4mIFtD5 = window.location.href;
                            history.back();

                            // Tunggu sampai URL berubah (keluar dari halaman detail)
                            for (let w = 0; w < 30; w++) {
                                await _yn3P0tVD3iGt(300);
                                if (window.location.href !== _bpmRW4mIFtD5) break;
                            }

                            // Tunggu _mbvU1W6Cuxpd Detil muncul kembali
                            let _WZbm70ahvQjE = false;
                            for (let w = 0; w < 30; w++) {
                                await _yn3P0tVD3iGt(300);
                                if (_MMP7TS2fiiaj().length > 0) { _WZbm70ahvQjE = true; break; }
                            }
                            await _yn3P0tVD3iGt(500); // buffer tambahan

                        } catch (e) {
                            log(`⚠️ Error item ${i + 1}: ${e.message}`);
                            try {
                                history.back();
                                await _yn3P0tVD3iGt(1000);
                                // Pastikan di halaman yang benar
                                await _8YQjCEUsc6SY(_snHQJ_Pitqs0);
                                await _yn3P0tVD3iGt(1000);
                            } catch (_) {}
                        }
                    }
                }
            } catch (e) {
                log(`❌ Error fatal: ${e.message}`);
            }

            if (_lFAvM2zNBh8E.length > 0) {
                const _QozKg6WxVtMA = _Epp7QIlGSD4N(_lFAvM2zNBh8E);
                _onXnyvB8zFWD.innerHTML = `✅ ${_QozKg6WxVtMA} data`;
                alert(`✅ SELESAI!\n\n${_QozKg6WxVtMA} _Etm0UOeFQP$u kontak darurat berhasil disimpan sebagai .xlsx!`);
            } else {
                _onXnyvB8zFWD.innerHTML = _nK4ZHTf5I5hJ(103);
                alert(_nK4ZHTf5I5hJ(104));
            }

            _onXnyvB8zFWD.disabled = false;
            _cjx40age5Oo1 = false;
            sessionStorage.removeItem(_nK4ZHTf5I5hJ(102));
            setTimeout(() => { _onXnyvB8zFWD.innerHTML = _nK4ZHTf5I5hJ(15); }, 3000);
        });
    }

    function _3Qna9Ae0j$NI() {
        if (document.body) {
            _ImiiGIOO0vyh();
        }

        const _wl00GYqwDd0C = new MutationObserver(() => {
            if (!document.getElementById(_nK4ZHTf5I5hJ(13)) && document.body) {
                console.log(_nK4ZHTf5I5hJ(105));
                _ImiiGIOO0vyh();
            }
        });

        const _fTYKrLOl28uq = document.body || document.documentElement;
        _wl00GYqwDd0C.observe(_fTYKrLOl28uq, { childList: true, subtree: true });
    }

    if (document.readyState === _nK4ZHTf5I5hJ(106)) {
        document.addEventListener(_nK4ZHTf5I5hJ(107), _3Qna9Ae0j$NI);
    } else {
        _3Qna9Ae0j$NI();
    }

})();

})();
/* END OBFUSCATED */