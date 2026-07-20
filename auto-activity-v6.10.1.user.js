// ==UserScript==
// @name         Auto Activity Collection - NONSTOP [Managed]
// @namespace    http://tampermonkey.net/
// @version      6.10.1
// @description  Anti-CAPTCHA: hapus double dispatch, jeda natural, idle 30-60 dtk, UI transparan [PROTECTED]
// @author       Enhanced
// @match        https://collection-id.zunamiq.com/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/zinkmr3-hash/botsistemdrx/refs/heads/main/auto-activity-v6.10.1.user.js
// @downloadURL  https://raw.githubusercontent.com/zinkmr3-hash/botsistemdrx/refs/heads/main/auto-activity-v6.10.1.user.js
// @run-at       document-idle
// ==/UserScript==

/* OBFUSCATED - AUTHORIZED USE ONLY - DO NOT MODIFY */
(function(){
'use strict';

// String decoder
var _g6xNazifhapP=window.atob||function(a){return a;};
var _KBaeS7FZRNQj=["dXNlIHN0cmljdA==","PGRpdiBzdHlsZT0icG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7YmFja2dyb3VuZDojMDAwO2NvbG9yOiNmMDA7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2ZvbnQtc2l6ZToyNHB4O2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7ei1pbmRleDo5OTk5OTk7Ij5BQ0NFU1MgREVOSUVEPC9kaXY+","YWJvdXQ6Ymxhbms=","KGZ1bmN0aW9uKCl7ZGVidWdnZXI7fSkoKQ==","JWNbUFJPVEVDVEVEXQ==","Y29sb3I6I2U2NTEwMDtmb250LXdlaWdodDpib2xkOw==","Y29udGV4dG1lbnU=","a2V5ZG93bg==","RjEy","SQ==","Sg==","dQ==","ZGl2","bWFyZ2luOjAgMCA0cHggMDsgY29sb3I6IzkwY2FmOTsgZm9udC1zaXplOjExcHg7","c3RhdHVzLXRleHQ=","Zm9udC1zaXplOjEwcHg7IGNvbG9yOm9yYW5nZTsgZm9udC13ZWlnaHQ6Ym9sZDsgbWFyZ2luLWJvdHRvbTo0cHg7","Zm9udC1zaXplOjEwcHg7IGNvbG9yOiNkZGQ7IG1hcmdpbi1ib3R0b206MXB4Ow==","Y2xpY2stY291bnQ=","Y29sb3I6I2ZmZjs=","cGFnZS1udW0=","cm93LWNvdW50","Zm9udC1zaXplOjEwcHg7IGNvbG9yOiNhYWE7IG1hcmdpbi1ib3R0b206MXB4Ow==","bW91c2Utc3RhdHVz","c2Nyb2xsLXN0YXR1cw==","Zm9udC1zaXplOjEwcHg7IG1hcmdpbi1ib3R0b206NHB4Ow==","aWRsZS1zdGF0dXM=","Y29sb3I6IzY5ZjBhZTs=","Zm9udC1zaXplOjlweDsgYmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LDAuMDcpOyBib3JkZXItcmFkaXVzOjRweDsgcGFkZGluZzo0cHg7IG1hcmdpbi1ib3R0b206NHB4OyBjb2xvcjojY2NjOyB0ZXh0LWFsaWduOmxlZnQ7IGxpbmUtaGVpZ2h0OjEuNjs=","dXB0aW1l","cmVzdGFydC1jb3VudA==","bGFzdC1waW5n","Zm9udC1zaXplOjlweDsgYmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LDAuMDcpOyBib3JkZXItcmFkaXVzOjRweDsgcGFkZGluZzo0cHg7IG1hcmdpbi1ib3R0b206NHB4OyBjb2xvcjojY2NjOyB0ZXh0LWFsaWduOmxlZnQ7","cmVmcmVzaC1zZWxlY3Q=","Zm9udC1zaXplOjlweDsgYmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuNSk7IGNvbG9yOiNmZmY7IGJvcmRlcjoxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjIpOyBib3JkZXItcmFkaXVzOjNweDsgcGFkZGluZzoxcHg7","MTA=","MzA=","NjA=","MzAw","NjAw","MA==","cmVmcmVzaC1jb3VudGRvd24=","Y29sb3I6I2ZmYjc0ZDsgZm9udC13ZWlnaHQ6Ym9sZDsgZm9udC1zaXplOjlweDs=","c3RvcC1idG4=","YmFja2dyb3VuZDpyZ2JhKDI0NCw2Nyw1NCwwLjg1KTtjb2xvcjp3aGl0ZTtib3JkZXI6bm9uZTtwYWRkaW5nOjVweDtib3JkZXItcmFkaXVzOjRweDtjdXJzb3I6cG9pbnRlcjtmb250LXdlaWdodDpib2xkO3dpZHRoOjEwMCU7bWFyZ2luLWJvdHRvbTozcHg7Zm9udC1zaXplOjEwcHg7","c3RhcnQtYnRu","YmFja2dyb3VuZDpyZ2JhKDc2LDE3NSw4MCwwLjg1KTtjb2xvcjp3aGl0ZTtib3JkZXI6bm9uZTtwYWRkaW5nOjVweDtib3JkZXItcmFkaXVzOjRweDtjdXJzb3I6cG9pbnRlcjtmb250LXdlaWdodDpib2xkO3dpZHRoOjEwMCU7bWFyZ2luLWJvdHRvbTozcHg7Zm9udC1zaXplOjEwcHg7","cmVmcmVzaC1ub3ctYnRu","YmFja2dyb3VuZDpyZ2JhKDI1NSwxNTIsMCwwLjg1KTtjb2xvcjp3aGl0ZTtib3JkZXI6bm9uZTtwYWRkaW5nOjVweDtib3JkZXItcmFkaXVzOjRweDtjdXJzb3I6cG9pbnRlcjtmb250LXdlaWdodDpib2xkO3dpZHRoOjEwMCU7Zm9udC1zaXplOjEwcHg7","Zm9udC1zaXplOjhweDtjb2xvcjojODg4O21hcmdpbi10b3A6NXB4O21hcmdpbi1ib3R0b206MDs=","bWFycXVlZS13cmFw","bWFycXVlZS10ZXh0","ZW1vamktcm93","ZW1vamktYm91bmNl","I3N0YXR1cy10ZXh0","I2NsaWNrLWNvdW50","I3Jvdy1jb3VudA==","I3BhZ2UtbnVt","I21vdXNlLXN0YXR1cw==","I3Njcm9sbC1zdGF0dXM=","I2lkbGUtc3RhdHVz","I2xhc3QtcGluZw==","I3VwdGltZQ==","I3Jlc3RhcnQtY291bnQ=","I3JlZnJlc2gtY291bnRkb3du","I3JlZnJlc2gtc2VsZWN0","YWFfcnVubmluZw==","dHJ1ZQ==","YWFfY2xpY2tlZA==","YWFfcm93SW5kZXg=","YWFfcGFnZQ==","YWFfcmVzdGFydHM=","YWFfc3RhcnRUaW1l","YWFfcmVmcmVzaFNlYw==","X2FhX3BhZ2U=","X2FhX2lkeA==","MQ==","W0F1dG9SZWZyZXNoXSBNZW55aW1wYW4gc3RhdGUgJiByZWxvYWQuLi4=","Tm9uYWt0aWY=","I3JlZnJlc2gtbm93LWJ0bg==","bW91c2Vtb3Zl","bW91c2VvdmVy","bW91c2VlbnRlcg==","U2hpZnQ=","a2V5dXA=","b3Jhbmdl","Z3JlZW4=","LQ==","LmVsLXRhYmxlX19ib2R5LXdyYXBwZXI=","LmVsLXRhYmxlX19maXhlZC1ib2R5LXdyYXBwZXI=","LmVsLXNjcm9sbGJhcl9fd3JhcA==","LmFwcC1tYWlu","Lm1haW4tY29udGFpbmVy","LmVsLW1haW4=","LmNvbnRlbnQtd3JhcHBlcg==","4oaTIGRvd24=","4oaRIHVw","ZWw=","IA==","4oaRIGtlbWJhbGkgYXRhcw==","c3RhbmRieQ==","LmVsLXBhZ2luYXRpb24gLmJ0bi1uZXh0","ZGlzYWJsZWQ=","aXMtZGlzYWJsZWQ=","LmVsLXBhZ2VyIGxpLmFjdGl2ZSwgLmVsLXBhZ2VyIC5udW1iZXIuYWN0aXZl","LmVsLXRhYmxlX19yb3c=","YSwgYnV0dG9uLCAuZWwtYnV0dG9u","ZGV0aWw=","ZGV0YWls","dGQ=","LmVsLXBhZ2VyIGxpLm51bWJlcg==","L2Nhc2UvbGlzdA==","Iy9jYXNlL2xpc3Q=","c21vb3Ro","Y2VudGVy","8J+SpCBJRExFIE5BVFVSQUwuLi4=","I2FhYQ==","U1RBVFVTOiBSVU5OSU5H","W1BhZ2luYXRpb25dIPCflIEgU2VtdWEgaGFsYW1hbiBzZWxlc2FpLCBrZW1iYWxpIGtlIGhhbC4x","W0F1dG9DbGlja10gRXJyb3I6","UkVTVEFSVElORy4uLg==","U1RBVFVTOiBPRkY=","cmVk","W0F1dG9BY3Rpdml0eV0gRGloZW50aWthbiBvbGVoIHVzZXIu","I3N0YXJ0LWJ0bg==","I3N0b3AtYnRu","W0F1dG9BY3Rpdml0eSB2Ni43XSBBdXRvLXN0YXJ0Li4u"];
var _3G1TJzipzB28=function(i){return _g6xNazifhapP(_KBaeS7FZRNQj[i]);};

// Anti-debug layer
var _MFW9CaVj4jL1=Date.now();
var _xEznTEVQeGCl=function(){
    var _BC_2wuYAR8My=document.createElement('div');
    _BC_2wuYAR8My.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:#000;color:#f00;display:flex;align-items:center;justify-content:center;font-size:20px;z-index:999999;';
    _BC_2wuYAR8My.innerHTML='ACCESS DENIED';
    setInterval(function(){
        if(window.outerWidth-window.innerWidth>160||window.outerHeight-window.innerHeight>160){
            document.body.innerHTML='';
            document.body.appendChild(_BC_2wuYAR8My);
            setTimeout(function(){location.href='about:blank';},300);
        }
    },500);
    setInterval(function(){try{eval("(function(){debugger;})()");}catch(e){}},200);
};
_xEznTEVQeGCl();

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
    _3G1TJzipzB28(0);
    // Anti-devtools detection
    let _a1$cTDtWV4z4 = false;
    const _uErvTBpq2RVm = 160;
    setInterval(function(){
        const w = window.outerWidth - window.innerWidth;
        const h = window.outerHeight - window.innerHeight;
        if(w > _uErvTBpq2RVm || h > _uErvTBpq2RVm){
            if(!_a1$cTDtWV4z4){
                _a1$cTDtWV4z4 = true;
                console.clear();
                document.body.innerHTML = _3G1TJzipzB28(1);
                setTimeout(function(){window.location.href=_3G1TJzipzB28(2);},500);
            }
        }
    },1000);

    // Debugger trap
    setInterval(function(){
        try{eval(_3G1TJzipzB28(3));}catch(e){}
    },200);

    // Console warning
    const _inbvRwMYgC0N = console.log;
    console.log = function(){
        _inbvRwMYgC0N.apply(console,[_3G1TJzipzB28(4),_3G1TJzipzB28(5)].concat(Array.from(arguments)));
    };

    // Anti right-click
    document.addEventListener(_3G1TJzipzB28(6),function(e){e.preventDefault();return false;});

    // Anti key shortcuts (F12, Ctrl+Shift+I, Ctrl+U)
    document.addEventListener(_3G1TJzipzB28(7),function(e){
        if(e.key===_3G1TJzipzB28(8)||(e.ctrlKey&&e.shiftKey&&(e.key===_3G1TJzipzB28(9)||e.key===_3G1TJzipzB28(10)))||(e.ctrlKey&&e.key===_3G1TJzipzB28(11))){
            e.preventDefault();e.stopPropagation();return false;
        }
    });
})();
// === END PROTECTION ===


(function() {
    _3G1TJzipzB28(0);

    let _CNvfy3jZvBr3 = false;
    let _h8Gc9nkn5u4P = 0;
    let _5VfAK95ghOQv = 0;
    let _vJ1_WZt5myw0 = 1;
    let _K8eSOB9sTUse = Date.now();
    let _MhZw_W_YAsVZ    = null;
    let _xZCjDFYuQevy     = null;
    let _1eEY15QBTbUH = null;
    let _pLlHNyshG3$w     = 0;
    let _LDhgSj$01h8r        = Date.now();
    let _C1FgjENz02hM = 300;

    // --- UI DASHBOARD ---
    const _VLCwhOzDlhJo = document.createElement(_3G1TJzipzB28(12));
    _VLCwhOzDlhJo.style = `
        position: fixed; top: 10px; right: 10px; z-index: 9999;
        background: rgba(0,0,0,0.55); padding: 8px 10px; border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.4); border: 1px solid rgba(33,150,243,0.5);
        font-family: sans-serif; width: 185px; text-align: center;
        backdrop-filter: blur(6px);
    `;
    _VLCwhOzDlhJo.innerHTML = `
        <h4 style=_3G1TJzipzB28(13)>🚀 Auto Activity v6.10.1</h4>
        <div id=_3G1TJzipzB28(14) style=_3G1TJzipzB28(15)>MEMULAI...</div>

        <div style=_3G1TJzipzB28(16)>Klik: <span id=_3G1TJzipzB28(17) style=_3G1TJzipzB28(18)>0</span> &nbsp;|&nbsp; Hal: <span id=_3G1TJzipzB28(19) style=_3G1TJzipzB28(18)>1</span> &nbsp;|&nbsp; Baris: <span id=_3G1TJzipzB28(20) style=_3G1TJzipzB28(18)>0</span></div>
        <div style=_3G1TJzipzB28(21)>Mouse: <span id=_3G1TJzipzB28(22)>-</span></div>
        <div style=_3G1TJzipzB28(21)>Scroll: <span id=_3G1TJzipzB28(23)>-</span></div>
        <div style=_3G1TJzipzB28(24)>Anti-idle: <span id=_3G1TJzipzB28(25) style=_3G1TJzipzB28(26)>-</span></div>

        <div style=_3G1TJzipzB28(27)>
            ⏱ <span id=_3G1TJzipzB28(28)>00:00:00</span> &nbsp;|&nbsp; 🔄 <span id=_3G1TJzipzB28(29)>0</span>x<br>
            📡 <span id=_3G1TJzipzB28(30)>-</span>
        </div>

        <div style=_3G1TJzipzB28(31)>
            🔃 <select id=_3G1TJzipzB28(32) style=_3G1TJzipzB28(33)>
                <option value=_3G1TJzipzB28(34)>10 dtk</option>
                <option value=_3G1TJzipzB28(35)>30 dtk</option>
                <option value=_3G1TJzipzB28(36)>1 mnt</option>
                <option value=_3G1TJzipzB28(37) selected>5 mnt ⚡</option>
                <option value=_3G1TJzipzB28(38)>10 mnt</option>
                <option value=_3G1TJzipzB28(39)>Off</option>
            </select>
            <span id=_3G1TJzipzB28(40) style=_3G1TJzipzB28(41)>-</span>
        </div>

        <button id=_3G1TJzipzB28(42)  style=_3G1TJzipzB28(43)>⏹ STOP</button>
        <button id=_3G1TJzipzB28(44) style=_3G1TJzipzB28(45)>▶ MULAI ULANG</button>
        <button id=_3G1TJzipzB28(46) style=_3G1TJzipzB28(47)>🔃 Refresh Skrg</button>
        <p style=_3G1TJzipzB28(48)>v6.9 | Anti-CAPTCHA Mode</p>

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
            .emoji-_5x3z$O5apuU5 {
                display: flex;
                justify-content: center;
                gap: 6px;
                margin-top: 5px;
            }
            .emoji-bounce {
                font-size: 18px;
                display: inline-block;
                animation: bounce 0.7s _tb7MT_rfKtvC-in-out infinite;
            }
            .emoji-bounce:nth-child(2) { animation-delay: 0.15s; }
            .emoji-bounce:nth-child(3) { animation-delay: 0.30s; }
            .emoji-bounce:nth-child(4) { animation-delay: 0.45s; }
            .emoji-bounce:nth-child(5) { animation-delay: 0.60s; }
        </style>

        <div class=_3G1TJzipzB28(49)>
            <span class=_3G1TJzipzB28(50)></span>
        </div>
        <div class=_3G1TJzipzB28(51)>
            <span class=_3G1TJzipzB28(52)></span>
            <span class=_3G1TJzipzB28(52)></span>
            <span class=_3G1TJzipzB28(52)></span>
            <span class=_3G1TJzipzB28(52)></span>
            <span class=_3G1TJzipzB28(52)></span>
        </div>
    `;
    document.body.appendChild(_VLCwhOzDlhJo);

    const _Zx2wxkAkuHoc        = _VLCwhOzDlhJo.querySelector(_3G1TJzipzB28(53));
    const _TG729bbeEvc0    = _VLCwhOzDlhJo.querySelector(_3G1TJzipzB28(54));
    const _wIZD_jKJTK1f      = _VLCwhOzDlhJo.querySelector(_3G1TJzipzB28(55));
    const _zmDWRkhlV4I0       = _VLCwhOzDlhJo.querySelector(_3G1TJzipzB28(56));
    const _IATxhD4zoNYD   = _VLCwhOzDlhJo.querySelector(_3G1TJzipzB28(57));
    const _VGdVlUQ2n0qe  = _VLCwhOzDlhJo.querySelector(_3G1TJzipzB28(58));
    const _GYOSdxOwRas2    = _VLCwhOzDlhJo.querySelector(_3G1TJzipzB28(59));
    const _WbpmXok9fJ1x      = _VLCwhOzDlhJo.querySelector(_3G1TJzipzB28(60));
    const _A93jMXDqZ_$e        = _VLCwhOzDlhJo.querySelector(_3G1TJzipzB28(61));
    const _sZXL5DJfLtHQ  = _VLCwhOzDlhJo.querySelector(_3G1TJzipzB28(62));
    const _hi5pY$DZQQv1  = _VLCwhOzDlhJo.querySelector(_3G1TJzipzB28(63));
    const _KgZlynVM9vaI     = _VLCwhOzDlhJo.querySelector(_3G1TJzipzB28(64));

    // --- UPTIME ---
    setInterval(() => {
        if (!_CNvfy3jZvBr3) return;
        const _PDGmM_j9BQQb = Math.floor((Date.now() - _LDhgSj$01h8r) / 1000);
        const h = Math.floor(_PDGmM_j9BQQb / 3600).toString().padStart(2,_3G1TJzipzB28(39));
        const m = Math.floor((_PDGmM_j9BQQb % 3600) / 60).toString().padStart(2,_3G1TJzipzB28(39));
        const s = (_PDGmM_j9BQQb % 60).toString().padStart(2,_3G1TJzipzB28(39));
        _A93jMXDqZ_$e.innerText = `${h}:${m}:${s}`;
    }, 1000);

    // --- HELPER ---
    function _HRu_P4aa8Tdo(min, max) {
        return Math.random() * (max - min) + min;
    }
    function _LFzhJ7wEcvqr() {
        const d = new Date();
        return `${d.getHours().toString().padStart(2,_3G1TJzipzB28(39))}:${d.getMinutes().toString().padStart(2,_3G1TJzipzB28(39))}:${d.getSeconds().toString().padStart(2,_3G1TJzipzB28(39))}`;
    }

    // --- SIMPAN STATE KE sessionStorage ---
    function _b5CvcW5r9VZ0() {
        sessionStorage.setItem(_3G1TJzipzB28(65),      _3G1TJzipzB28(66));
        sessionStorage.setItem(_3G1TJzipzB28(67),      _h8Gc9nkn5u4P);
        sessionStorage.setItem(_3G1TJzipzB28(68),     _5VfAK95ghOQv);
        sessionStorage.setItem(_3G1TJzipzB28(69),         _vJ1_WZt5myw0);
        sessionStorage.setItem(_3G1TJzipzB28(70),     _pLlHNyshG3$w);
        sessionStorage.setItem(_3G1TJzipzB28(71),    _LDhgSj$01h8r);
        sessionStorage.setItem(_3G1TJzipzB28(72),   _KgZlynVM9vaI.value);
        // Simpan juga key yang dipakai autoclick
        sessionStorage.setItem(_3G1TJzipzB28(73),        _vJ1_WZt5myw0);
        sessionStorage.setItem(_3G1TJzipzB28(74),         _5VfAK95ghOQv);
    }

    // --- RESTORE STATE SETELAH REFRESH ---
    function _e6krg5RPg2zE() {
        if (sessionStorage.getItem(_3G1TJzipzB28(65)) === _3G1TJzipzB28(66)) {
            _h8Gc9nkn5u4P    = parseInt(sessionStorage.getItem(_3G1TJzipzB28(67))   || _3G1TJzipzB28(39));
            _5VfAK95ghOQv = parseInt(sessionStorage.getItem(_3G1TJzipzB28(68))  || _3G1TJzipzB28(39));
            _vJ1_WZt5myw0     = parseInt(sessionStorage.getItem(_3G1TJzipzB28(69))      || _3G1TJzipzB28(75));
            _pLlHNyshG3$w    = parseInt(sessionStorage.getItem(_3G1TJzipzB28(70))  || _3G1TJzipzB28(39));
            _LDhgSj$01h8r       = parseInt(sessionStorage.getItem(_3G1TJzipzB28(71)) || Date.now());
            const _wBc_dUoAKQZc  = sessionStorage.getItem(_3G1TJzipzB28(72)) || _3G1TJzipzB28(37);
            _KgZlynVM9vaI.value = _wBc_dUoAKQZc;

            // Restore key autoclick
            sessionStorage.setItem(_3G1TJzipzB28(73), _vJ1_WZt5myw0);
            sessionStorage.setItem(_3G1TJzipzB28(74),  _5VfAK95ghOQv);

            _TG729bbeEvc0.innerText   = _h8Gc9nkn5u4P;
            _zmDWRkhlV4I0.innerText      = _vJ1_WZt5myw0;
            _sZXL5DJfLtHQ.innerText = _pLlHNyshG3$w;

            sessionStorage.removeItem(_3G1TJzipzB28(65));
            return true;
        }
        return false;
    }

    // --- DO REFRESH ---
    function _ynPoOPUtY7us() {
        if (!_CNvfy3jZvBr3) return;
        console.log(_3G1TJzipzB28(76));
        _b5CvcW5r9VZ0();
        location.reload();
    }

    // --- JADWALKAN AUTO REFRESH ---
    function _SDeSQ06xZqFj() {
        if (_xZCjDFYuQevy)      clearInterval(_xZCjDFYuQevy);
        if (_1eEY15QBTbUH) clearInterval(_1eEY15QBTbUH);

        const _K2gyB1tFoIJd = parseInt(_KgZlynVM9vaI.value);
        if (_K2gyB1tFoIJd === 0) {
            _hi5pY$DZQQv1.innerText = _3G1TJzipzB28(77);
            return;
        }

        _C1FgjENz02hM = _K2gyB1tFoIJd;
        let _NLD$3_9tfPcF = _K2gyB1tFoIJd;

        _1eEY15QBTbUH = setInterval(() => {
            if (!_CNvfy3jZvBr3) return;
            _NLD$3_9tfPcF--;
            if (_NLD$3_9tfPcF <= 0) _NLD$3_9tfPcF = _C1FgjENz02hM;
            if (_NLD$3_9tfPcF >= 60) {
                const _GDSrkphLSX4n = Math.floor(_NLD$3_9tfPcF / 60);
                const _Q2pxGKcFD0IW = _NLD$3_9tfPcF % 60;
                _hi5pY$DZQQv1.innerText = `${_GDSrkphLSX4n}:${_Q2pxGKcFD0IW.toString().padStart(2,_3G1TJzipzB28(39))}`;
            } else {
                _hi5pY$DZQQv1.innerText = `${_NLD$3_9tfPcF} detik`;
            }
        }, 1000);

        _xZCjDFYuQevy = setInterval(() => {
            _ynPoOPUtY7us();
        }, _K2gyB1tFoIJd * 1000);
    }

    _KgZlynVM9vaI.onchange = () => {
        if (_CNvfy3jZvBr3) _SDeSQ06xZqFj();
    };

    _VLCwhOzDlhJo.querySelector(_3G1TJzipzB28(78)).onclick = () => _ynPoOPUtY7us();

    // --- ANTI-IDLE PING ---
    function _OGJMXngeq3EB() {
        if (!_CNvfy3jZvBr3) return;
        const x = Math.round(_HRu_P4aa8Tdo(100, window.innerWidth - 100));
        const y = Math.round(_HRu_P4aa8Tdo(100, window.innerHeight - 100));

        [_3G1TJzipzB28(79), _3G1TJzipzB28(80), _3G1TJzipzB28(81)].forEach(type => {
            const _uSPLauNi96j3 = new MouseEvent(type, {
                bubbles: true, cancelable: true,
                clientX: x, clientY: y,
                screenX: x + window.screenX, screenY: y + window.screenY,
                movementX: Math.round(_HRu_P4aa8Tdo(-5, 5)),
                movementY: Math.round(_HRu_P4aa8Tdo(-5, 5))
            });
            document.dispatchEvent(_uSPLauNi96j3);
            const _koa9ddiR43Ym = document.elementFromPoint(x, y);
            if (_koa9ddiR43Ym) _koa9ddiR43Ym.dispatchEvent(_uSPLauNi96j3);
        });

        document.dispatchEvent(new KeyboardEvent(_3G1TJzipzB28(7), { bubbles:true, key:_3G1TJzipzB28(82), keyCode:16, shiftKey:true }));
        document.dispatchEvent(new KeyboardEvent(_3G1TJzipzB28(83),   { bubbles:true, key:_3G1TJzipzB28(82), keyCode:16 }));

        _K8eSOB9sTUse = Date.now();
        _WbpmXok9fJ1x.innerText = _LFzhJ7wEcvqr();
    }

    function _2dB9StoN1krn() {
        _OGJMXngeq3EB();
        if (_MhZw_W_YAsVZ) clearInterval(_MhZw_W_YAsVZ);
        _MhZw_W_YAsVZ = setInterval(() => {
            if (!_CNvfy3jZvBr3) return;
            _OGJMXngeq3EB();
        }, 10 * 60 * 1000);

        let _Jecj1Ghfi6dx = 10 * 60;
        const _latoSnoJiWlN = setInterval(() => {
            if (!_CNvfy3jZvBr3) { clearInterval(_latoSnoJiWlN); return; }
            _Jecj1Ghfi6dx--;
            if (_Jecj1Ghfi6dx <= 0) _Jecj1Ghfi6dx = 10 * 60;
            const _UbsQeDKlNaLC = Math.floor(_Jecj1Ghfi6dx / 60);
            const _o6RRxiAMqU5h = _Jecj1Ghfi6dx % 60;
            _GYOSdxOwRas2.innerText = `${_UbsQeDKlNaLC}:${_o6RRxiAMqU5h.toString().padStart(2,_3G1TJzipzB28(39))} lagi`;
            _GYOSdxOwRas2.style.color = _Jecj1Ghfi6dx < 60 ? _3G1TJzipzB28(84) : _3G1TJzipzB28(85);
        }, 1000);
    }

    // --- SIMULASI MOUSE ---
    function _whOgzHjGrn_X(x, y) {
        const _uSPLauNi96j3 = new MouseEvent(_3G1TJzipzB28(79), {
            bubbles: true, cancelable: true,
            clientX: x, clientY: y, screenX: x, screenY: y
        });
        document.dispatchEvent(_uSPLauNi96j3);
        const _koa9ddiR43Ym = document.elementFromPoint(x, y);
        if (_koa9ddiR43Ym) _koa9ddiR43Ym.dispatchEvent(_uSPLauNi96j3);
        _K8eSOB9sTUse = Date.now();
    }

    async function _UgfDMLTxdox5(_l6LpWmsabPQM, _W5cqRsYB1z4A, _8Cge67OvL7oO, _QLFAY0gNhr1E, _GJXjL7rwq1pY) {
        for (let i = 0; i <= _GJXjL7rwq1pY; i++) {
            if (!_CNvfy3jZvBr3) return;
            const t = i / _GJXjL7rwq1pY;
            const _tb7MT_rfKtvC = t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t+2, 3)/2;
            const _4g62CDt7nkWM = (i > 0 && i < _GJXjL7rwq1pY) ? _HRu_P4aa8Tdo(-3, 3) : 0;
            _whOgzHjGrn_X(
                Math.round(_l6LpWmsabPQM + (_8Cge67OvL7oO - _l6LpWmsabPQM) * _tb7MT_rfKtvC + _4g62CDt7nkWM),
                Math.round(_W5cqRsYB1z4A + (_QLFAY0gNhr1E - _W5cqRsYB1z4A) * _tb7MT_rfKtvC + _4g62CDt7nkWM)
            );
            await new Promise(r => setTimeout(r, _HRu_P4aa8Tdo(8, 20)));
        }
    }

    async function _bgfFfeAl0F9C() {
        let _N5s5bBA2rHeq = Math.round(window.innerWidth / 2);
        let _ThzLiNf$p5Lr = Math.round(window.innerHeight / 2);
        while (_CNvfy3jZvBr3) {
            const __4DYvJjX$UN$ = Math.round(_HRu_P4aa8Tdo(50, window.innerWidth - 50));
            const _M_O$YErQ8LO8 = Math.round(_HRu_P4aa8Tdo(80, window.innerHeight - 80));
            _IATxhD4zoNYD.innerText = `(${__4DYvJjX$UN$}, ${_M_O$YErQ8LO8})`;
            await _UgfDMLTxdox5(_N5s5bBA2rHeq, _ThzLiNf$p5Lr, __4DYvJjX$UN$, _M_O$YErQ8LO8, Math.round(_HRu_P4aa8Tdo(20, 60)));
            _N5s5bBA2rHeq = __4DYvJjX$UN$; _ThzLiNf$p5Lr = _M_O$YErQ8LO8;
            await new Promise(r => setTimeout(r, _HRu_P4aa8Tdo(4000, 12000)));
        }
        _IATxhD4zoNYD.innerText = _3G1TJzipzB28(86);
    }

    // --- SCROLL ENHANCED ---
    function _qXGNb7jHooJd() {
        const _rGLtSP0upeBa = [
            _3G1TJzipzB28(87),
            _3G1TJzipzB28(88),
            _3G1TJzipzB28(89),
            _3G1TJzipzB28(90),
            _3G1TJzipzB28(91),
            _3G1TJzipzB28(92),
            _3G1TJzipzB28(93),
        ];
        const _XB68ZFuiC_6U = _rGLtSP0upeBa
            .map(s => document.querySelector(s))
            .filter(_koa9ddiR43Ym => _koa9ddiR43Ym && _koa9ddiR43Ym.scrollHeight > _koa9ddiR43Ym.clientHeight + 10);
        if (document.body.scrollHeight > window.innerHeight + 10) _XB68ZFuiC_6U.push(document.body);
        return _XB68ZFuiC_6U;
    }

    async function _ZQuQ0kn3IgaX(_koa9ddiR43Ym, _F0UnKwIL2d4K, _GJXjL7rwq1pY) {
        for (let i = 0; i < _GJXjL7rwq1pY; i++) {
            if (!_CNvfy3jZvBr3) break;
            if (_koa9ddiR43Ym === document.body || _koa9ddiR43Ym === document.documentElement) {
                window.scrollBy(0, _F0UnKwIL2d4K / _GJXjL7rwq1pY);
            } else {
                _koa9ddiR43Ym.scrollBy(0, _F0UnKwIL2d4K / _GJXjL7rwq1pY);
            }
            _K8eSOB9sTUse = Date.now();
            await new Promise(r => setTimeout(r, _HRu_P4aa8Tdo(25, 70)));
        }
    }

    async function _cgcQAHKzrwFr() {
        while (_CNvfy3jZvBr3) {
            await new Promise(r => setTimeout(r, _HRu_P4aa8Tdo(8000, 25000)));
            if (!_CNvfy3jZvBr3) break;

            const _LqzxowyGAdTr = Math.random() > 0.35 ? 1 : -1;
            const _Ir0yf0IpgWeZ = _LqzxowyGAdTr > 0 ? _3G1TJzipzB28(94) : _3G1TJzipzB28(95);

            _VGdVlUQ2n0qe.innerText = `window ${_Ir0yf0IpgWeZ}`;
            const _ss4UKtZV98ro = Math.round(_HRu_P4aa8Tdo(100, 400)) * _LqzxowyGAdTr;
            await _ZQuQ0kn3IgaX(document.documentElement, _ss4UKtZV98ro, Math.round(_HRu_P4aa8Tdo(8, 20)));

            await new Promise(r => setTimeout(r, _HRu_P4aa8Tdo(400, 1500)));

            const _yPw6yflyZMP5 = _qXGNb7jHooJd();
            for (const _koa9ddiR43Ym of _yPw6yflyZMP5) {
                if (!_CNvfy3jZvBr3) break;
                const _bPl8Ug4BtSj0  = Math.round(_HRu_P4aa8Tdo(60, 250)) * _LqzxowyGAdTr;
                const _GJXjL7rwq1pY = Math.round(_HRu_P4aa8Tdo(5, 15));
                const name  = (_koa9ddiR43Ym.className || _3G1TJzipzB28(96)).toString().split(_3G1TJzipzB28(97))[0].slice(0, 18);
                _VGdVlUQ2n0qe.innerText = `${name} ${_Ir0yf0IpgWeZ}`;
                await _ZQuQ0kn3IgaX(_koa9ddiR43Ym, _bPl8Ug4BtSj0, _GJXjL7rwq1pY);
                await new Promise(r => setTimeout(r, _HRu_P4aa8Tdo(300, 1200)));
            }

            if (Math.random() < 0.3) {
                _VGdVlUQ2n0qe.innerText = _3G1TJzipzB28(98);
                await _ZQuQ0kn3IgaX(document.documentElement, -_ss4UKtZV98ro * 0.8, Math.round(_HRu_P4aa8Tdo(8, 15)));
            }

            _VGdVlUQ2n0qe.innerText = _3G1TJzipzB28(99);
        }
        _VGdVlUQ2n0qe.innerText = _3G1TJzipzB28(86);
    }

    // ========== PAGINATION HELPERS ==========
    function _n2b7uCME2rSX() {
        const _BA6MLZByf2j2 = document.querySelector(_3G1TJzipzB28(100));
        if (!_BA6MLZByf2j2) return false;
        if (_BA6MLZByf2j2.disabled) return false;
        if (_BA6MLZByf2j2.classList.contains(_3G1TJzipzB28(101)) || _BA6MLZByf2j2.classList.contains(_3G1TJzipzB28(102))) return false;
        if (_BA6MLZByf2j2.getAttribute(_3G1TJzipzB28(101)) !== null) return false;
        return true;
    }

    function _cZ4sMVc3NxXW() {
        const _sPjfZJq4nkZY = document.querySelector(_3G1TJzipzB28(103));
        return _sPjfZJq4nkZY ? (parseInt(_sPjfZJq4nkZY.innerText) || 1) : 1;
    }

    async function _vhwsIEuMl5M7(_K6AAGroosuOj = 15) {
        for (let i = 0; i < _K6AAGroosuOj * 2; i++) {
            const r = document.querySelectorAll(_3G1TJzipzB28(104));
            if (r.length > 0) return r.length;
            await new Promise(r => setTimeout(r, 500));
        }
        return 0;
    }

    // Ambil tombol Detil di baris ke-_RGsZ$Cc7S71m — selalu re-query DOM segar
    function _Z8ROBVTDuJma(_RGsZ$Cc7S71m) {
        const _syzpHUOlWZay = document.querySelectorAll(_3G1TJzipzB28(104));
        if (!_syzpHUOlWZay[_RGsZ$Cc7S71m]) return null;
        const _5x3z$O5apuU5 = _syzpHUOlWZay[_RGsZ$Cc7S71m];
        const _6caV_9UbNRnl = _5x3z$O5apuU5.querySelectorAll(_3G1TJzipzB28(105));
        for (const _koa9ddiR43Ym of _6caV_9UbNRnl) {
            const _EHigr1$BQPnj = _koa9ddiR43Ym.innerText.trim().toLowerCase();
            if (_EHigr1$BQPnj === _3G1TJzipzB28(106) || _EHigr1$BQPnj === _3G1TJzipzB28(107)) return _koa9ddiR43Ym;
        }
        // Fallback: tombol pertama di cell terakhir
        const _E3vA9ZmLwhBN = _5x3z$O5apuU5.querySelectorAll(_3G1TJzipzB28(108));
        if (_E3vA9ZmLwhBN.length > 0) {
            const _koa9ddiR43Ym = _E3vA9ZmLwhBN[_E3vA9ZmLwhBN.length - 1].querySelector(_3G1TJzipzB28(105));
            if (_koa9ddiR43Ym) return _koa9ddiR43Ym;
        }
        return null;
    }

    // Navigasi kembali ke halaman tertentu setelah reset ke hal.1
    async function _UKJBd8cUp6A5(_hU_G_Fu65nek) {
        if (_hU_G_Fu65nek <= 1) return;
        for (let _kL6D96i1TZPM = 0; _kL6D96i1TZPM < 6; _kL6D96i1TZPM++) {
            await new Promise(r => setTimeout(r, 800));
            // Coba klik nomor langsung
            const _SFk4tZxKQdhv = document.querySelectorAll(_3G1TJzipzB28(109));
            let _XB68ZFuiC_6U = false;
            for (const n of _SFk4tZxKQdhv) {
                if (parseInt(n.innerText) === _hU_G_Fu65nek) {
                    n.click();
                    console.log(`[Nav] Klik langsung halaman ${_hU_G_Fu65nek}`);
                    await new Promise(r => setTimeout(r, 2500));
                    _XB68ZFuiC_6U = true;
                    break;
                }
            }
            if (_XB68ZFuiC_6U) return;
            // Fallback: klik next berulang dari halaman aktif
            if (_kL6D96i1TZPM === 2) {
                const _ieKXFuTACbpZ = _cZ4sMVc3NxXW();
                for (let p = _ieKXFuTACbpZ; p < _hU_G_Fu65nek; p++) {
                    const _Zpitb3cOl5do = document.querySelector(_3G1TJzipzB28(100));
                    if (_Zpitb3cOl5do && !_Zpitb3cOl5do.disabled && _Zpitb3cOl5do.getAttribute(_3G1TJzipzB28(101)) === null) {
                        _Zpitb3cOl5do.click();
                        await new Promise(r => setTimeout(r, 1500));
                    } else break;
                }
                return;
            }
        }
    }

    // ========== AUTO KLIK NONSTOP ==========
    async function _PfL4ooGUIy6R() {
        if (!_CNvfy3jZvBr3) return;
        try {
            // Pastikan di halaman list
            if (!window.location.hash.includes(_3G1TJzipzB28(110))) {
                window.location.hash = _3G1TJzipzB28(111);
                await new Promise(r => setTimeout(r, 2500));
            }

            // Tunggu tabel muncul
            const _Y6E$5DuVEw1s = await _vhwsIEuMl5M7(15);
            if (_Y6E$5DuVEw1s === 0) {
                await new Promise(r => setTimeout(r, 3000));
                return _PfL4ooGUIy6R();
            }

            // ===== RESTORE STATE: ambil halaman & index dari sessionStorage =====
            const _UBeKnGjOWO3j  = parseInt(sessionStorage.getItem(_3G1TJzipzB28(73))  || _3G1TJzipzB28(75));
            const _WA4JeIGHJUQ_ = parseInt(sessionStorage.getItem(_3G1TJzipzB28(74))   || _3G1TJzipzB28(39));

            // Navigasi ke halaman yang tersimpan jika bukan halaman 1
            if (_UBeKnGjOWO3j > 1) {
                const _vcTEjM96ELSe = _cZ4sMVc3NxXW();
                if (_vcTEjM96ELSe !== _UBeKnGjOWO3j) {
                    console.log(`[Nav] Restore ke hal.${_UBeKnGjOWO3j}`);
                    await _UKJBd8cUp6A5(_UBeKnGjOWO3j);
                    await _vhwsIEuMl5M7(12);
                }
            }

            _vJ1_WZt5myw0 = _cZ4sMVc3NxXW();
            sessionStorage.setItem(_3G1TJzipzB28(73), _vJ1_WZt5myw0);
            _zmDWRkhlV4I0.innerText = _vJ1_WZt5myw0;
            _wIZD_jKJTK1f.innerText = _Y6E$5DuVEw1s;
            console.log(`[AutoClick] Hal.${_vJ1_WZt5myw0} — ${_Y6E$5DuVEw1s} baris — mulai index ${_WA4JeIGHJUQ_}`);

            // ===== LOOP PER INDEX =====
            for (let i = _WA4JeIGHJUQ_; i < _Y6E$5DuVEw1s; i++) {
                if (!_CNvfy3jZvBr3) return;

                // Simpan progress sebelum klik (untuk restore setelah refresh/reset)
                sessionStorage.setItem(_3G1TJzipzB28(73),  _vJ1_WZt5myw0);
                sessionStorage.setItem(_3G1TJzipzB28(74),   i);

                const _BA6MLZByf2j2 = _Z8ROBVTDuJma(i);
                if (!_BA6MLZByf2j2) {
                    console.log(`[AutoClick] Baris ${i}: skip (tidak ada Detil)`);
                    continue;
                }

                // Scroll ke baris
                const _syzpHUOlWZay = document.querySelectorAll(_3G1TJzipzB28(104));
                if (_syzpHUOlWZay[i]) _syzpHUOlWZay[i].scrollIntoView({ behavior: _3G1TJzipzB28(112), block: _3G1TJzipzB28(113) });
                await new Promise(r => setTimeout(r, _HRu_P4aa8Tdo(600, 1500)));

                // Gerak mouse
                const _ml7tKXhyTJ1P = _BA6MLZByf2j2.getBoundingClientRect();
                if (_ml7tKXhyTJ1P.width === 0 || _ml7tKXhyTJ1P.height === 0) {
                    console.log(`[AutoClick] Baris ${i}: tidak visible, skip`);
                    continue;
                }
                await _UgfDMLTxdox5(
                    Math.round(_HRu_P4aa8Tdo(100, 500)),
                    Math.round(_HRu_P4aa8Tdo(100, 400)),
                    Math.round(_ml7tKXhyTJ1P.left + _ml7tKXhyTJ1P.width / 2),
                    Math.round(_ml7tKXhyTJ1P.top  + _ml7tKXhyTJ1P.height / 2),
                    20
                );

                await new Promise(r => setTimeout(r, _HRu_P4aa8Tdo(2000, 5000)));

                // KLIK 1x BERSIH
                _BA6MLZByf2j2.click();
                _h8Gc9nkn5u4P++;
                _TG729bbeEvc0.innerText = _h8Gc9nkn5u4P;
                _K8eSOB9sTUse = Date.now();
                console.log(`[AutoClick] ✅ Baris ${i+1}/${_Y6E$5DuVEw1s} hal.${_vJ1_WZt5myw0}`);

                // Tunggu detail load
                await new Promise(r => setTimeout(r, _HRu_P4aa8Tdo(6000, 12000)));

                // Idle natural ~20%
                if (Math.random() < 0.2) {
                    const _SvseSCcgsAPz = Math.round(_HRu_P4aa8Tdo(30000, 60000));
                    _Zx2wxkAkuHoc.innerText = _3G1TJzipzB28(114);
                    _Zx2wxkAkuHoc.style.color = _3G1TJzipzB28(115);
                    await new Promise(r => setTimeout(r, _SvseSCcgsAPz));
                    _Zx2wxkAkuHoc.innerText = _3G1TJzipzB28(116);
                    _Zx2wxkAkuHoc.style.color = _3G1TJzipzB28(85);
                }

                // Kembali ke list
                window.location.hash = _3G1TJzipzB28(111);
                await new Promise(r => setTimeout(r, 1500));
                await _vhwsIEuMl5M7(15);

                // Website selalu reset ke hal.1 — navigasi kembali ke halaman yang benar
                const _vcTEjM96ELSe = _cZ4sMVc3NxXW();
                if (_vcTEjM96ELSe !== _vJ1_WZt5myw0) {
                    console.log(`[Nav] Reset ke hal.${_vcTEjM96ELSe}, kembali ke hal.${_vJ1_WZt5myw0}`);
                    await _UKJBd8cUp6A5(_vJ1_WZt5myw0);
                    await _vhwsIEuMl5M7(12);
                }

                await new Promise(r => setTimeout(r, _HRu_P4aa8Tdo(1000, 2500)));
            }

            // ===== SELESAI SEMUA BARIS — PINDAH HALAMAN BERIKUTNYA =====
            console.log(`[Pagination] ✅ Selesai hal.${_vJ1_WZt5myw0}`);
            sessionStorage.setItem(_3G1TJzipzB28(74), _3G1TJzipzB28(39)); // reset index untuk halaman baru
            await new Promise(r => setTimeout(r, _HRu_P4aa8Tdo(2000, 4000)));

            // Pastikan di list dan di halaman yang benar dulu
            if (!window.location.hash.includes(_3G1TJzipzB28(110))) {
                window.location.hash = _3G1TJzipzB28(111);
                await _vhwsIEuMl5M7(10);
            }
            const _wUTjsVQhtKq$ = _cZ4sMVc3NxXW();
            if (_wUTjsVQhtKq$ !== _vJ1_WZt5myw0) {
                await _UKJBd8cUp6A5(_vJ1_WZt5myw0);
                await _vhwsIEuMl5M7(10);
            }

            // Cek tombol next
            const _fPYm$tBTtr8c = document.querySelector(_3G1TJzipzB28(100));
            const _0dCeYUFiTB9G = !_fPYm$tBTtr8c ||
                _fPYm$tBTtr8c.disabled ||
                _fPYm$tBTtr8c.getAttribute(_3G1TJzipzB28(101)) !== null ||
                _fPYm$tBTtr8c.classList.contains(_3G1TJzipzB28(101)) ||
                _fPYm$tBTtr8c.classList.contains(_3G1TJzipzB28(102));

            if (!_0dCeYUFiTB9G) {
                _fPYm$tBTtr8c.click();
                _vJ1_WZt5myw0++;
                sessionStorage.setItem(_3G1TJzipzB28(73), _vJ1_WZt5myw0);
                sessionStorage.setItem(_3G1TJzipzB28(74),  _3G1TJzipzB28(39));
                _zmDWRkhlV4I0.innerText = _vJ1_WZt5myw0;
                console.log(`[Pagination] ➡️ Pindah ke hal.${_vJ1_WZt5myw0}`);
                await new Promise(r => setTimeout(r, _HRu_P4aa8Tdo(4000, 7000)));
                return _PfL4ooGUIy6R();
            }

            // Halaman terakhir — ulang dari awal
            console.log(_3G1TJzipzB28(117));
            _vJ1_WZt5myw0 = 1;
            sessionStorage.setItem(_3G1TJzipzB28(73), _3G1TJzipzB28(75));
            sessionStorage.setItem(_3G1TJzipzB28(74),  _3G1TJzipzB28(39));
            _zmDWRkhlV4I0.innerText = 1;
            const _du4NirARlerG = document.querySelector(_3G1TJzipzB28(109));
            if (_du4NirARlerG) _du4NirARlerG.click();
            await new Promise(r => setTimeout(r, _HRu_P4aa8Tdo(4000, 7000)));
            return _PfL4ooGUIy6R();

        } catch (err) {
            console.warn(_3G1TJzipzB28(118), err);
            _pLlHNyshG3$w++;
            _sZXL5DJfLtHQ.innerText = _pLlHNyshG3$w;
            _Zx2wxkAkuHoc.innerText = _3G1TJzipzB28(119);
            _Zx2wxkAkuHoc.style.color = _3G1TJzipzB28(84);
            await new Promise(r => setTimeout(r, 5000));
            if (_CNvfy3jZvBr3) {
                _Zx2wxkAkuHoc.innerText = _3G1TJzipzB28(116);
                _Zx2wxkAkuHoc.style.color = _3G1TJzipzB28(85);
                return _PfL4ooGUIy6R();
            }
        }
    }


    // =============================================
    // START SEMUA
    // =============================================
    function _7LyxZA7DlmAi() {
        if (_CNvfy3jZvBr3) return;
        _CNvfy3jZvBr3 = true;
        _Zx2wxkAkuHoc.innerText = _3G1TJzipzB28(116);
        _Zx2wxkAkuHoc.style.color = _3G1TJzipzB28(85);
        _2dB9StoN1krn();
        _bgfFfeAl0F9C();
        _cgcQAHKzrwFr();
        _PfL4ooGUIy6R();
        _SDeSQ06xZqFj();
    }

    // =============================================
    // STOP SEMUA
    // =============================================
    function _io5274cVp26I() {
        _CNvfy3jZvBr3 = false;
        _5VfAK95ghOQv = 0;
        if (_MhZw_W_YAsVZ)    clearInterval(_MhZw_W_YAsVZ);
        if (_xZCjDFYuQevy)     clearInterval(_xZCjDFYuQevy);
        if (_1eEY15QBTbUH) clearInterval(_1eEY15QBTbUH);
        sessionStorage.removeItem(_3G1TJzipzB28(65));
        _Zx2wxkAkuHoc.innerText = _3G1TJzipzB28(120);
        _Zx2wxkAkuHoc.style.color = _3G1TJzipzB28(121);
        _IATxhD4zoNYD.innerText  = _3G1TJzipzB28(86);
        _VGdVlUQ2n0qe.innerText = _3G1TJzipzB28(86);
        _GYOSdxOwRas2.innerText   = _3G1TJzipzB28(86);
        _hi5pY$DZQQv1.innerText = _3G1TJzipzB28(86);
        console.log(_3G1TJzipzB28(122));
    }

    _VLCwhOzDlhJo.querySelector(_3G1TJzipzB28(123)).onclick = () => _7LyxZA7DlmAi();
    _VLCwhOzDlhJo.querySelector(_3G1TJzipzB28(124)).onclick  = () => _io5274cVp26I();

    // =============================================
    // AUTO-START
    // =============================================
    const _96D53Hz86Tle = _e6krg5RPg2zE();
    setTimeout(() => {
        console.log(_3G1TJzipzB28(125));
        _7LyxZA7DlmAi();
    }, 2000);

})();

})();
/* END OBFUSCATED */