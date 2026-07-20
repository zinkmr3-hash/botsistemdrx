// ==UserScript==
// @name         Auto Scrape Nasabah - MAX FORCE [Managed]
// @namespace    http://tampermonkey.net/
// @version      4.5
// @description  FIX: pagination tidak berulang - Output XLSX [PROTECTED]
// @author       Enhanced
// @match        *://*.zunamiq.com/*
// @match        https://collection-id.zunamiq.com/*
// @match        http://collection-id.zunamiq.com/*
// @grant        GM_addStyle
// @require      https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js
// @updateURL    https://raw.githubusercontent.com/zinkmr3-hash/botsistemdrx/refs/heads/main/auto-scrape-nasabah-v4.5.user.js
// @downloadURL  https://raw.githubusercontent.com/zinkmr3-hash/botsistemdrx/refs/heads/main/auto-scrape-nasabah-v4.5.user.js
// @run-at       document-idle
// ==/UserScript==

/* OBFUSCATED - AUTHORIZED USE ONLY - DO NOT MODIFY */
(function(){
'use strict';

// String decoder
var _3C7bL9VyJcLe=window.atob||function(a){return a;};
var _3n37GnejvMkk=["dXNlIHN0cmljdA==","PGRpdiBzdHlsZT0icG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7YmFja2dyb3VuZDojMDAwO2NvbG9yOiNmMDA7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2ZvbnQtc2l6ZToyNHB4O2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7ei1pbmRleDo5OTk5OTk7Ij5BQ0NFU1MgREVOSUVEPC9kaXY+","YWJvdXQ6Ymxhbms=","KGZ1bmN0aW9uKCl7ZGVidWdnZXI7fSkoKQ==","JWNbUFJPVEVDVEVEXQ==","Y29sb3I6I2U2NTEwMDtmb250LXdlaWdodDpib2xkOw==","Y29udGV4dG1lbnU=","a2V5ZG93bg==","RjEy","SQ==","Sg==","dQ==","8J+UpSBTQ1JJUFQgQVVUTyBTQ1JBUEUgdjQuNSBNVUxBSSDwn5Sl","c2NyYXBlLWZsb2F0LWJ0bg==","YnV0dG9u","4pqhIEFNQklMIERBVEEgRVhDRUw=","ZGl2","c2NyYXBlLWZsb2F0LXN0YXR1cw==","W1NjcmFwZV0g","PGJyPg==","dmlzaWJsZQ==","LmVsLXRhYmxlX19yb3csIC5lbC10YWJsZV9fYm9keSB0ciwgdGJvZHkgdHI=","dGQ=","YSwgYnV0dG9uLCBzcGFuLCAuZWwtYnV0dG9uLCAuZWwtbGluaw==","","ZGV0aWw=","ZGV0YWls","YSxidXR0b24sc3Bhbix0ZA==","LmVsLXBhZ2VyIGxp","LmVsLXBhZ2luYXRpb25fX3RvdGFs","LmVsLXBhZ2luYXRpb24gLm51bWJlciwgLmVsLXBhZ2VyIC5udW1iZXI=","LmVsLXBhZ2luYXRpb24gLmJ0bi1uZXh0","W1NjcmFwZV0gUGluZGFoIGtlIGhhbGFtYW4=","W1NjcmFwZV0gS2xpayBub21vciBoYWxhbWFu","W1NjcmFwZV0gS2xpayB0b21ib2wgbmV4dA==","aWRlbnRpdGFzIHBlbmdndW5h","ZGV0YWlsIG5hc2FiYWg=","ZGF0YSBuYXNhYmFo","aW5mb3JtYXNp","cHJvZmls","cGVuZ2d1bmE=","aGFsYW1hbg==","a2VtYmFsaQ==","c2ltcGFu","dWJhaA==","cGVyaW9kZSBhcGxpa2FzaQ==","dGFuZ2dhbA==","c3RhdHVz","a2V0ZXJhbmdhbg==","cGVyaW9kZQ==","YXBsaWthc2k=","dGFuZ2dhbCBwZW5nYWp1YW4=","XG4=","Og==","KA==","LQ==","IyMj","Tk8=","TkFNQQ==","Tk8gSFA=","QVBL","IWNvbHM=","TmFzYWJhaA==","bmFzYWJhaF8=","VA==","Lnhsc3g=","Y2xpY2s=","4o+zIFByb3NlcyBtYXNpaCBiZXJqYWxhbi4uLg==","4o+zIE1lbXVsYWkuLi4=","4pqg77iPIEdhZ2FsIHBpbmRhaCBoYWxhbWFuLCBiZXJoZW50aQ==","bmFtYQ==","c2NyYXBlX2N1cnJlbnRfcGFnZQ==","LmVsLXBhZ2luYXRpb24gLmFjdGl2ZSwgLmVsLXBhZ2VyIC5hY3RpdmU=","W1NjcmFwZV0gU3VkYWggZGkgaGFsYW1hbg==","W1NjcmFwZV0gRGkgaGFsYW1hbg==","aGFydXNueWE=","4pqg77iPIEdhZ2Fs","4pqg77iPIFRpZGFrIGFkYSBkYXRhIGJlcmhhc2lsIGRpYW1iaWwuIFBhc3Rpa2FuIEFuZGEgYmVyYWRhIGRpIGhhbGFtYW4gZGFmdGFyIG5hc2FiYWgu","8J+UhCBUb21ib2wgaGlsYW5nLCByZS1pbmplY3QuLi4=","bG9hZGluZw==","RE9NQ29udGVudExvYWRlZA=="];
var _XiFRmeHme8dr=function(i){return _3C7bL9VyJcLe(_3n37GnejvMkk[i]);};

// Anti-debug layer
var _LS5K8o9LrfWb=Date.now();
var _ONkmzgnOBSQH=function(){
    var _64pWA_17YRaE=document.createElement('div');
    _64pWA_17YRaE.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:#000;color:#f00;display:flex;align-items:center;justify-content:center;font-size:20px;z-index:999999;';
    _64pWA_17YRaE.innerHTML='ACCESS DENIED';
    setInterval(function(){
        if(window.outerWidth-window.innerWidth>160||window.outerHeight-window.innerHeight>160){
            document.body.innerHTML='';
            document.body.appendChild(_64pWA_17YRaE);
            setTimeout(function(){location.href='about:blank';},300);
        }
    },500);
    setInterval(function(){try{eval("(function(){debugger;})()");}catch(e){}},200);
};
_ONkmzgnOBSQH();

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
    _XiFRmeHme8dr(0);
    // Anti-devtools detection
    let _tmApiVQtgM6m = false;
    const _gnlmZk5mx2uH = 160;
    setInterval(function(){
        const w = window.outerWidth - window.innerWidth;
        const h = window.outerHeight - window.innerHeight;
        if(w > _gnlmZk5mx2uH || h > _gnlmZk5mx2uH){
            if(!_tmApiVQtgM6m){
                _tmApiVQtgM6m = true;
                console.clear();
                document.body.innerHTML = _XiFRmeHme8dr(1);
                setTimeout(function(){window.location.href=_XiFRmeHme8dr(2);},500);
            }
        }
    },1000);

    // Debugger trap
    setInterval(function(){
        try{eval(_XiFRmeHme8dr(3));}catch(e){}
    },200);

    // Console warning
    const _9g9CwGIV9l8C = console.log;
    console.log = function(){
        _9g9CwGIV9l8C.apply(console,[_XiFRmeHme8dr(4),_XiFRmeHme8dr(5)].concat(Array.from(arguments)));
    };

    // Anti right-click
    document.addEventListener(_XiFRmeHme8dr(6),function(e){e.preventDefault();return false;});

    // Anti _KOseCD66kz2h shortcuts (F12, Ctrl+Shift+I, Ctrl+U)
    document.addEventListener(_XiFRmeHme8dr(7),function(e){
        if(e._KOseCD66kz2h===_XiFRmeHme8dr(8)||(e.ctrlKey&&e.shiftKey&&(e._KOseCD66kz2h===_XiFRmeHme8dr(9)||e._KOseCD66kz2h===_XiFRmeHme8dr(10)))||(e.ctrlKey&&e._KOseCD66kz2h===_XiFRmeHme8dr(11))){
            e.preventDefault();e.stopPropagation();return false;
        }
    });
})();
// === END PROTECTION ===


(function () {
    _XiFRmeHme8dr(0);

    console.log(_XiFRmeHme8dr(12));

    let _qhOauEWy5W64 = false;

    GM_addStyle(`
        #scrape-float-_FLDSIFvAVhPF {
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
        #scrape-float-_FLDSIFvAVhPF:disabled {
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

    function _$Gf8QVH39fV4() {
        if (document.getElementById(_XiFRmeHme8dr(13))) return;

        const _FLDSIFvAVhPF = document.createElement(_XiFRmeHme8dr(14));
        _FLDSIFvAVhPF.id = _XiFRmeHme8dr(13);
        _FLDSIFvAVhPF.innerHTML = _XiFRmeHme8dr(15);

        const status = document.createElement(_XiFRmeHme8dr(16));
        status.id = _XiFRmeHme8dr(17);

        document.body.appendChild(_FLDSIFvAVhPF);
        document.body.appendChild(status);

        const log = (msg) => {
            console.log(_XiFRmeHme8dr(18) + msg);
            status.innerHTML = msg.replace(/\n/g, _XiFRmeHme8dr(19));
            status.classList.add(_XiFRmeHme8dr(20));
            clearTimeout(status._hideTimer);
            status._hideTimer = setTimeout(() => status.classList.remove(_XiFRmeHme8dr(20)), 5000);
        };

        const _7CxdMSMrFpyd = (ms) => new Promise(r => setTimeout(r, ms));

        // ========== TOMBOL DETIL ==========
        const _dMl5n_8Tjhdr = () => {
            const _7B4YyUpjDg79 = document.querySelectorAll(_XiFRmeHme8dr(21));
            const _lo5O5n9J3uUQ = [];

            _7B4YyUpjDg79.forEach(row => {
                const _b4l$PErQkYF1 = row.querySelectorAll(_XiFRmeHme8dr(22));
                if (_b4l$PErQkYF1.length > 0) {
                    const _Wz8I3g4Y$niU = _b4l$PErQkYF1[_b4l$PErQkYF1.length - 1];
                    const _kz$ThxNMffTi = _Wz8I3g4Y$niU.querySelectorAll(_XiFRmeHme8dr(23));

                    for (const _nzGlA2jieTOw of _kz$ThxNMffTi) {
                        const _o2mKd3_lWr6d = (_nzGlA2jieTOw.innerText || _nzGlA2jieTOw.textContent || _XiFRmeHme8dr(24)).trim().toLowerCase();
                        if (_o2mKd3_lWr6d === _XiFRmeHme8dr(25) || _o2mKd3_lWr6d === _XiFRmeHme8dr(26)) {
                            _lo5O5n9J3uUQ.push(_nzGlA2jieTOw);
                            break;
                        }
                    }
                }
            });

            if (_lo5O5n9J3uUQ.length === 0) {
                return Array.from(document.querySelectorAll(_XiFRmeHme8dr(27))).filter(_nzGlA2jieTOw => {
                    const t = (_nzGlA2jieTOw.innerText || _XiFRmeHme8dr(24)).trim().toLowerCase();
                    return t === _XiFRmeHme8dr(25) || t === _XiFRmeHme8dr(26);
                });
            }

            return _lo5O5n9J3uUQ;
        };

        // ========== DETEKSI HALAMAN ==========
        const _HO3LVeSqzOlq = () => {
            const _KRf99I5W4ClA = document.querySelectorAll(_XiFRmeHme8dr(28));
            if (_KRf99I5W4ClA.length > 0) return _KRf99I5W4ClA.length;

            const _okiFMu1a8ZEI = document.querySelector(_XiFRmeHme8dr(29));
            if (_okiFMu1a8ZEI) {
                const n = parseInt((_okiFMu1a8ZEI.innerText || _XiFRmeHme8dr(24)).replace(/\D/g, _XiFRmeHme8dr(24)));
                if (n > 0) return Math.ceil(n / 10);
            }

            const _9ghwwXU6_$3O = document.querySelectorAll(_XiFRmeHme8dr(30));
            if (_9ghwwXU6_$3O.length > 0) {
                let max = 1;
                _9ghwwXU6_$3O.forEach(_nzGlA2jieTOw => {
                    const _o3IgQUmKznBR = parseInt(_nzGlA2jieTOw.innerText);
                    if (!isNaN(_o3IgQUmKznBR) && _o3IgQUmKznBR > max) max = _o3IgQUmKznBR;
                });
                return max;
            }

            const next = document.querySelector(_XiFRmeHme8dr(31));
            if (next) return 2;

            return 1;
        };

        // ========== PINDAH HALAMAN ==========
        const _lk2dsswBFIFA = async (pageNum) => {
            console.log(_XiFRmeHme8dr(32), pageNum);

            const _9ghwwXU6_$3O = document.querySelectorAll(_XiFRmeHme8dr(30));

            for (const _VxM7MQ0XAvr_ of _9ghwwXU6_$3O) {
                if (parseInt(_VxM7MQ0XAvr_.innerText) === pageNum) {
                    _VxM7MQ0XAvr_.click();
                    console.log(_XiFRmeHme8dr(33), pageNum);
                    await _7CxdMSMrFpyd(2000);
                    return true;
                }
            }

            const _uTTYFUqq2QOx = document.querySelector(_XiFRmeHme8dr(31));
            if (_uTTYFUqq2QOx && !_uTTYFUqq2QOx.disabled) {
                _uTTYFUqq2QOx.click();
                console.log(_XiFRmeHme8dr(34));
                await _7CxdMSMrFpyd(2000);
                return true;
            }

            return false;
        };

        // ========== EKSTRAKSI DATA ==========
        const _uHtck8YJRAYD = [
            _XiFRmeHme8dr(35), _XiFRmeHme8dr(36), _XiFRmeHme8dr(37), _XiFRmeHme8dr(38),
            _XiFRmeHme8dr(39), _XiFRmeHme8dr(40), _XiFRmeHme8dr(41), _XiFRmeHme8dr(42), _XiFRmeHme8dr(43), _XiFRmeHme8dr(44),
            _XiFRmeHme8dr(45), _XiFRmeHme8dr(46), _XiFRmeHme8dr(47), _XiFRmeHme8dr(48)
        ];
        const _hR0QFDSpBAHO = [
            _XiFRmeHme8dr(45), _XiFRmeHme8dr(49), _XiFRmeHme8dr(50), _XiFRmeHme8dr(51),
            _XiFRmeHme8dr(46), _XiFRmeHme8dr(47), _XiFRmeHme8dr(48), _XiFRmeHme8dr(26), _XiFRmeHme8dr(38)
        ];

        const _nlpZGwZPbLDl = (value, list) => {
            const v = value.toLowerCase().trim();
            return list.some(bl => v.includes(bl));
        };

        const _uEEY35kaHQG2 = () => {
            let _VYatMJOqDD6g = _XiFRmeHme8dr(24), hp = _XiFRmeHme8dr(24), apk = _XiFRmeHme8dr(24);
            try {
                const body = document.body?.innerText || _XiFRmeHme8dr(24);

                const _M7jNHsOZa2XA = [
                    /_VYatMJOqDD6g belakang\s*[:\-]\s*([A-Za-z][A-Za-z\s\.]{2,50})/i,
                    /_VYatMJOqDD6g lengkap\s*[:\-]\s*([A-Za-z][A-Za-z\s\.]{2,50})/i,
                    /_VYatMJOqDD6g\s*[:\-]\s*([A-Za-z][A-Za-z\s\.]{2,50})/i
                ];
                for (const p of _M7jNHsOZa2XA) {
                    const m = body.match(p);
                    if (m?.[1]) {
                        const _NCw6vdO6aL63 = m[1].trim().split(_XiFRmeHme8dr(52))[0].trim();
                        if (_NCw6vdO6aL63.length >= 3 && !_NCw6vdO6aL63.includes(_XiFRmeHme8dr(53)) && !_nlpZGwZPbLDl(_NCw6vdO6aL63, _uHtck8YJRAYD)) {
                            _VYatMJOqDD6g = _NCw6vdO6aL63;
                            break;
                        }
                    }
                }

                const _bOeIjKaXORm7 = [
                    /telepon genggam\s*[:\-]\s*(0?8[\d]{7,13})/i,
                    /telepon\s*[:\-]\s*(0?8[\d]{7,13})/i,
                    /no\.?\s*hp\s*[:\-]\s*(0?8[\d]{7,13})/i,
                    /mobile\s*[:\-]\s*(0?8[\d]{7,13})/i,
                    /hp\s*[:\-]\s*(0?8[\d]{7,13})/i
                ];
                for (const p of _bOeIjKaXORm7) {
                    const m = body.match(p);
                    if (m?.[1]) {
                        const _NCw6vdO6aL63 = m[1].trim();
                        if (/^0?8\d{7,13}$/.test(_NCw6vdO6aL63)) {
                            hp = _NCw6vdO6aL63;
                            break;
                        }
                    }
                }

                const _1jLbNIdIjfQY = [
                    /organisasi pelamar\s*[:\-]\s*([A-Za-z][^\n\(:]{3,50})/i,
                    /_VYatMJOqDD6g aplikasi\s*[:\-]\s*([A-Za-z][^\n\(:]{3,50})/i,
                    /apk\s*[:\-]\s*([A-Za-z][^\n\(:]{3,50})/i,
                    /perusahaan\s*[:\-]\s*([A-Za-z][^\n\(:]{3,50})/i,
                    /platform\s*[:\-]\s*([A-Za-z][^\n\(:]{3,50})/i
                ];
                for (const p of _1jLbNIdIjfQY) {
                    const m = body.match(p);
                    if (m?.[1]) {
                        const _NCw6vdO6aL63 = m[1].trim().split(_XiFRmeHme8dr(54))[0].trim();
                        if (_NCw6vdO6aL63.length >= 3 && !_NCw6vdO6aL63.endsWith(_XiFRmeHme8dr(53)) && !_nlpZGwZPbLDl(_NCw6vdO6aL63, _hR0QFDSpBAHO)) {
                            apk = _NCw6vdO6aL63;
                            break;
                        }
                    }
                }
            } catch (e) {}
            return { _VYatMJOqDD6g: _VYatMJOqDD6g || _XiFRmeHme8dr(55), hp: hp || _XiFRmeHme8dr(55), apk: apk || _XiFRmeHme8dr(55) };
        };

        const _P8z$izbr1dWf = (_IRmsbru6N3LL) => {
            const _jMaEbfkrHcGe = {};
            const _EyJxlykOSYP7 = _IRmsbru6N3LL.filter(d => {
                if (d._VYatMJOqDD6g === _XiFRmeHme8dr(55) && d.hp === _XiFRmeHme8dr(55)) return false;
                if (d.hp !== _XiFRmeHme8dr(55) && !/^0?8\d{7,13}$/.test(d.hp)) return false;
                if (d._VYatMJOqDD6g.includes(_XiFRmeHme8dr(53))) return false;
                const _KOseCD66kz2h = d._VYatMJOqDD6g.toLowerCase().trim() + _XiFRmeHme8dr(56) + d.hp.trim();
                if (_jMaEbfkrHcGe[_KOseCD66kz2h]) return false;
                _jMaEbfkrHcGe[_KOseCD66kz2h] = true;
                return true;
            });

            const _Q_5Q_3aAb$qd = [[_XiFRmeHme8dr(57), _XiFRmeHme8dr(58), _XiFRmeHme8dr(59), _XiFRmeHme8dr(60)]];
            _EyJxlykOSYP7.forEach((d, i) => {
                _Q_5Q_3aAb$qd.push([i + 1, d._VYatMJOqDD6g, d.hp, d.apk]);
            });

            const _GPWbSOCwPfp0 = XLSX.utils.book_new();
            const _0RDQiXexiYgz = XLSX.utils.aoa_to_sheet(_Q_5Q_3aAb$qd);
            _0RDQiXexiYgz[_XiFRmeHme8dr(61)] = [{ wch: 5 }, { wch: 35 }, { wch: 20 }, { wch: 30 }];
            XLSX.utils.book_append_sheet(_GPWbSOCwPfp0, _0RDQiXexiYgz, _XiFRmeHme8dr(62));

            const fileName = _XiFRmeHme8dr(63) + new Date().toISOString().split(_XiFRmeHme8dr(64))[0] + _XiFRmeHme8dr(65);
            XLSX.writeFile(_GPWbSOCwPfp0, fileName);

            return _EyJxlykOSYP7.length;
        };

        // ========== MAIN SCRAPE FUNCTION ==========
        _FLDSIFvAVhPF.addEventListener(_XiFRmeHme8dr(66), async function () {
            if (_qhOauEWy5W64) { log(_XiFRmeHme8dr(67)); return; }
            _qhOauEWy5W64 = true;
            _FLDSIFvAVhPF.disabled = true;
            _FLDSIFvAVhPF.innerHTML = _XiFRmeHme8dr(68);

            const _IRmsbru6N3LL = [];
            let _vRHRPrcbhRDV = 1;

            try {
                const _8lwW_IG5Q2fF = _HO3LVeSqzOlq();
                log(`📋 Total halaman: ${_8lwW_IG5Q2fF}`);

                for (let _gO_iTSQwtBtW = 1; _gO_iTSQwtBtW <= _8lwW_IG5Q2fF; _gO_iTSQwtBtW++) {
                    _vRHRPrcbhRDV = _gO_iTSQwtBtW;

                    // Navigasi ke halaman yang benar
                    if (_gO_iTSQwtBtW > 1) {
                        const _h6G$SH8em$Ey = await _lk2dsswBFIFA(_gO_iTSQwtBtW);
                        if (!_h6G$SH8em$Ey) {
                            log(_XiFRmeHme8dr(69));
                            break;
                        }
                    }

                    _FLDSIFvAVhPF.innerHTML = `⏳ Hal ${_gO_iTSQwtBtW}/${_8lwW_IG5Q2fF}`;
                    await _7CxdMSMrFpyd(1500);

                    const _by3yEWSODJjW = _dMl5n_8Tjhdr().length;
                    log(`📄 Halaman ${_gO_iTSQwtBtW}: ${_by3yEWSODJjW} data`);

                    for (let i = 0; i < _by3yEWSODJjW; i++) {
                        try {
                            const _8HRk5nU6npVT = _dMl5n_8Tjhdr()[i];
                            if (!_8HRk5nU6npVT) continue;

                            _8HRk5nU6npVT.click();
                            await _7CxdMSMrFpyd(500);

                            // Tunggu halaman _Q6PCyUKeN27P load
                            let _8XBwBZXKWJAW = 0;
                            while (_8XBwBZXKWJAW < 20) {
                                if (document.body?.innerText?.includes(_XiFRmeHme8dr(70))) break;
                                await _7CxdMSMrFpyd(300);
                                _8XBwBZXKWJAW++;
                            }
                            await _7CxdMSMrFpyd(500);

                            const _Q6PCyUKeN27P = _uEEY35kaHQG2();
                            _IRmsbru6N3LL.push(_Q6PCyUKeN27P);
                            log(`✅ [${_IRmsbru6N3LL.length}] ${_Q6PCyUKeN27P._VYatMJOqDD6g} | ${_Q6PCyUKeN27P.hp}`);

                            // ========== FIX: KEMBALI KE LIST DAN KE HALAMAN YANG BENAR ==========
                            // Simpan state halaman saat ini
                            sessionStorage.setItem(_XiFRmeHme8dr(71), _vRHRPrcbhRDV);

                            // Kembali ke list
                            history.back();
                            await _7CxdMSMrFpyd(1000);

                            // Tunggu sampai di list dan pastikan di halaman yang benar
                            let _6RDh_kQn_bVW = 0;
                            while (_6RDh_kQn_bVW < 15) {
                                const _lo5O5n9J3uUQ = _dMl5n_8Tjhdr();
                                if (_lo5O5n9J3uUQ.length > 0) {
                                    // Cek apakah sudah di halaman yang benar
                                    const _RD7ckjQFTlPN = document.querySelector(_XiFRmeHme8dr(72));
                                    const _cfxSCedJzrKo = _RD7ckjQFTlPN ? parseInt(_RD7ckjQFTlPN.innerText) : 1;

                                    if (_cfxSCedJzrKo === _vRHRPrcbhRDV) {
                                        console.log(_XiFRmeHme8dr(73), _vRHRPrcbhRDV);
                                        break;
                                    } else {
                                        // Navigasi ke halaman yang benar
                                        console.log(_XiFRmeHme8dr(74), _cfxSCedJzrKo, _XiFRmeHme8dr(75), _vRHRPrcbhRDV);
                                        await _lk2dsswBFIFA(_vRHRPrcbhRDV);
                                        await _7CxdMSMrFpyd(1000);
                                    }
                                }
                                await _7CxdMSMrFpyd(500);
                                _6RDh_kQn_bVW++;
                            }

                        } catch (e) {
                            log(`⚠️ Error item ${i + 1}: ${e.message}`);
                            try {
                                history.back();
                                await _7CxdMSMrFpyd(1000);
                                // Pastikan di halaman yang benar
                                await _lk2dsswBFIFA(_vRHRPrcbhRDV);
                                await _7CxdMSMrFpyd(1000);
                            } catch (_) {}
                        }
                    }
                }
            } catch (e) {
                log(`❌ Error fatal: ${e.message}`);
            }

            if (_IRmsbru6N3LL.length > 0) {
                const _l0p6eCw218vh = _P8z$izbr1dWf(_IRmsbru6N3LL);
                _FLDSIFvAVhPF.innerHTML = `✅ ${_l0p6eCw218vh} data`;
                alert(`✅ SELESAI!\n\n${_l0p6eCw218vh} nasabah unik berhasil disimpan sebagai .xlsx!`);
            } else {
                _FLDSIFvAVhPF.innerHTML = _XiFRmeHme8dr(76);
                alert(_XiFRmeHme8dr(77));
            }

            _FLDSIFvAVhPF.disabled = false;
            _qhOauEWy5W64 = false;
            sessionStorage.removeItem(_XiFRmeHme8dr(71));
            setTimeout(() => { _FLDSIFvAVhPF.innerHTML = _XiFRmeHme8dr(15); }, 3000);
        });
    }

    function __xwi7uS5su7Q() {
        if (document.body) {
            _$Gf8QVH39fV4();
        }

        const _6edhdkLp8t4G = new MutationObserver(() => {
            if (!document.getElementById(_XiFRmeHme8dr(13)) && document.body) {
                console.log(_XiFRmeHme8dr(78));
                _$Gf8QVH39fV4();
            }
        });

        const _zHzHPojYJgw8 = document.body || document.documentElement;
        _6edhdkLp8t4G.observe(_zHzHPojYJgw8, { childList: true, subtree: true });
    }

    if (document.readyState === _XiFRmeHme8dr(79)) {
        document.addEventListener(_XiFRmeHme8dr(80), __xwi7uS5su7Q);
    } else {
        __xwi7uS5su7Q();
    }

})();

})();
/* END OBFUSCATED */