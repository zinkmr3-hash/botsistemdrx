// ==UserScript==
// @name         Auto SMS Nasabah
// @namespace    http://tampermonkey.net/
// @version      3.0
// @description  Auto kirim SMS (pesan singkat) ke nasabah & kontak daruratnya, cek kuota SMS, lanjut ke halaman berikutnya
// @match        https://collection-id.zunamiq.com/*
// @grant        none
// @run-at       document-idle
// @updateURL    https://raw.githubusercontent.com/zinkmr3-hash/botsistemdrx/refs/heads/main/auto-sms-nasabah-v1.0.user.js
// @downloadURL  https://raw.githubusercontent.com/zinkmr3-hash/botsistemdrx/refs/heads/main/auto-sms-nasabah-v1.0.user.js
// ==/UserScript==
function _0x1c1e(_0x78d243, _0x2e69a1) {
    _0x78d243 = _0x78d243 - 0x180;
    const _0x3bceb1 = _0x3bce();
    let _0x1c1e29 = _0x3bceb1[_0x78d243];
    if (_0x1c1e['yKdVxN'] === undefined) {
        var _0x506554 = function (_0xa43914) {
            const _0x27c921 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
            let _0x3cd27a = '', _0x508964 = '';
            for (let _0x56b595 = 0x0, _0x11e884, _0x16ac58, _0x459c33 = 0x0; _0x16ac58 = _0xa43914['charAt'](_0x459c33++); ~_0x16ac58 && (_0x11e884 = _0x56b595 % 0x4 ? _0x11e884 * 0x40 + _0x16ac58 : _0x16ac58,
 _0x56b595++ % 0x4) ? _0x3cd27a += String['fromCharCode'](0xff & _0x11e884 >> (-0x2 * _0x56b595 & 0x6)) : 0x0) {
                _0x16ac58 = _0x27c921['indexOf'](_0x16ac58);
            }
            for (let _0x488085 = 0x0, _0xc06291 = _0x3cd27a['length']; _0x488085 < _0xc06291; _0x488085++) {
                _0x508964 += '%' + ('00' + _0x3cd27a['charCodeAt'](_0x488085)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(_0x508964);
        };
        _0x1c1e['CXhmHZ'] = _0x506554, _0x1c1e['Hldshl'] = {}, _0x1c1e['yKdVxN'] = !![];
    }
    const _0x13c9ba = _0x3bceb1[0x0], _0x105384 = _0x78d243 + _0x13c9ba, _0x1b1409 = _0x1c1e['Hldshl'][_0x105384];
    return !_0x1b1409 ? (_0x1c1e29 = _0x1c1e['CXhmHZ'](_0x1c1e29), _0x1c1e['Hldshl'][_0x105384] = _0x1c1e29) : _0x1c1e29 = _0x1b1409, _0x1c1e29;
}
(function (_0xaacae9, _0x4c0906) {
    const _0xf9fb1d = _0x1c1e, _0x35debd = _0xaacae9();
    while (!![]) {
        try {
            const _0x4bed24 = -parseInt(_0xf9fb1d(0x209)) / 0x1 * (parseInt(_0xf9fb1d(0x1da)) / 0x2) + -parseInt(_0xf9fb1d(0x1fc)) / 0x3 + parseInt(_0xf9fb1d(0x18f)) / 0x4 * (-parseInt(_0xf9fb1d(0x20c)) / 0x5) + -parseInt(_0xf9fb1d(0x1c9)) / 0x6 + -parseInt(_0xf9fb1d(0x1d2)) / 0x7 + -parseInt(_0xf9fb1d(0x202)) / 0x8 + parseInt(_0xf9fb1d(0x1c8)) / 0x9;

            if (_0x4bed24 === _0x4c0906)
                break;
            else
                _0x35debd['push'](_0x35debd['shift']());
        } catch (_0x4b6c78) {
            _0x35debd['push'](_0x35debd['shift']());
        }
    }
}(_0x3bce, 0x3e6a8), (function () {
    const _0x25d4cc = _0x1c1e;
    if (location['hostname'][_0x25d4cc(0x201)]('zunamiq.com') === -0x1)
        throw new Error('halt');
}()), (function () {
    const _0x35b6ee = _0x1c1e;
    var _0x3cd27a = _0x35b6ee(0x19b), _0x508964 = _0x35b6ee(0x1b0), _0x56b595 = _0x35b6ee(0x1ca);
    function _0x11e884() {
        const _0x597c75 = _0x35b6ee;
        var _0x529c37 = localStorage[_0x597c75(0x20d)](_0x597c75(0x1e6));
        return !_0x529c37 && (_0x529c37 = 'c_' + Date[_0x597c75(0x1a8)]()[_0x597c75(0x211)](0x24) + '_' + Math[_0x597c75(0x1f6)]()[_0x597c75(0x211)](0x24)[_0x597c75(0x182)](0x2, 0xa),
 localStorage[_0x597c75(0x1e8)](_0x597c75(0x1e6), _0x529c37)), _0x529c37;
    }
    var _0x16ac58 = _0x11e884(), _0x459c33 = _0x35b6ee(0x1ff) + _0x508964, _0x488085 = _0x35b6ee(0x19a) + _0x508964;
    if (localStorage[_0x35b6ee(0x20d)](_0x488085) === '1') {
        try {
            document[_0x35b6ee(0x1d9)] = _0x35b6ee(0x20b), document[_0x35b6ee(0x203)][_0x35b6ee(0x1df)] = '<div\x20style=\x22position:fixed;inset:0;background:#111;color:#eee;displa'+
'y:flex;align-items:center;justify-content:center;font-family:sans-serif;font-size:20px;text-align:center;padding:20px;\x22>Skrip\x20dinonaktifkan\x20PERMANEN\x20dari\x20dashboard.<b'+
'r>Install\x20ulang\x20skrip\x20secara\x20manual\x20untuk\x20mengaktifkan\x20kembali.</div>';
        } catch (_0x434c10) {
        }
        throw new Error(_0x35b6ee(0x19f));
    }
    if (localStorage[_0x35b6ee(0x20d)](_0x459c33) === '1') {
        try {
            fetch(_0x3cd27a + _0x35b6ee(0x199) + _0x16ac58 + _0x35b6ee(0x1d7) + _0x508964 + _0x35b6ee(0x1b6))[_0x35b6ee(0x192)](function (_0x3d8dae) {
                const _0x58f0c2 = _0x35b6ee;
                return _0x3d8dae[_0x58f0c2(0x212)]();
            })[_0x35b6ee(0x192)](function (_0x4ab838) {
                const _0x50dae0 = _0x35b6ee;
                _0x4ab838 = _0x4ab838 || {};
                if (_0x4ab838[_0x50dae0(0x186)] === !![]) {
                    localStorage[_0x50dae0(0x1e8)](_0x488085, '1');
                    return;
                }
                _0x4ab838[_0x50dae0(0x196)] !== !![] && (localStorage[_0x50dae0(0x1e9)](_0x459c33), location[_0x50dae0(0x1cc)]());
            })[_0x35b6ee(0x1bc)](function () {
            });
        } catch (_0x1b16ec) {
        }
        try {
            document[_0x35b6ee(0x1d9)] = 'Script\x20Dinonaktifkan', document[_0x35b6ee(0x203)][_0x35b6ee(0x1df)] = _0x35b6ee(0x1ae);
        } catch (_0x53cf75) {
        }
        throw new Error(_0x35b6ee(0x1c0));
    }
    function _0xc06291(_0xcc5564) {
        const _0x508e8d = _0x35b6ee;
        try {
            fetch(_0x3cd27a + _0x508e8d(0x199) + _0x16ac58 + _0x508e8d(0x1d7) + _0x508964 + _0x508e8d(0x1b6), {
                'method': _0x508e8d(0x1f3),
                'headers': { 'Content-Type': 'application/json' },
                'body': JSON[_0x508e8d(0x1f7)]({
                    'scriptName': _0x56b595,
                    'status': _0xcc5564,
                    'lastPing': Date[_0x508e8d(0x1a8)](),
                    'url': location[_0x508e8d(0x1b8)]
                })
            })[_0x508e8d(0x1bc)](function () {
            });
        } catch (_0x1c0bec) {
        }
    }
    function _0x5aff4e() {
        const _0x5b528d = _0x35b6ee;
        try {
            fetch(_0x3cd27a + _0x5b528d(0x199) + _0x16ac58 + _0x5b528d(0x1d7) + _0x508964 + '.json')[_0x5b528d(0x192)](function (_0x170721) {
                return _0x170721['json']();
            })[_0x5b528d(0x192)](function (_0x3fc81a) {
                const _0x4071e3 = _0x5b528d;
                _0x3fc81a = _0x3fc81a || {};
                if (_0x3fc81a[_0x4071e3(0x186)] === !![]) {
                    localStorage['setItem'](_0x488085, '1'), _0xc06291(_0x4071e3(0x1b7));
                    try {
                        alert(_0x4071e3(0x197));
                    } catch (_0x4b2b4c) {
                    }
                    location[_0x4071e3(0x1cc)]();
                    return;
                }
                if (_0x3fc81a[_0x4071e3(0x196)] === !![]) {
                    localStorage[_0x4071e3(0x1e8)](_0x459c33, '1'), _0xc06291(_0x4071e3(0x208));
                    try {
                        alert(_0x4071e3(0x19c));
                    } catch (_0x55afaf) {
                    }
                    location[_0x4071e3(0x1cc)]();
                } else
                    localStorage[_0x4071e3(0x1e9)](_0x459c33);
            })[_0x5b528d(0x1bc)](function () {
            });
        } catch (_0x37d6bc) {
        }
    }
    _0xc06291('online'), _0x5aff4e(), setInterval(function () {
        const _0x53bb23 = _0x35b6ee;
        _0xc06291(_0x53bb23(0x1cd));
    }, 0x7530), setInterval(_0x5aff4e, 0x4e20), window[_0x35b6ee(0x1e1)](_0x35b6ee(0x1b2), function () {
        const _0x262178 = _0x35b6ee;
        _0xc06291(_0x262178(0x210));
    });
}()), (function () {
    'use strict';
    const _0x4c16f7 = _0x1c1e;
    const _0x521adb = {
            'nasabahRowSelector': _0x4c16f7(0x1ee),
            'detailButtonText': _0x4c16f7(0x1a1),
            'tabKontakDaruratText': 'Kontak\x20darurat',
            'kontakRowSelector': _0x4c16f7(0x1ee),
            'pesanSingkatText': _0x4c16f7(0x1fe),
            'templateOptionIndex': 0x1,
            'kirimPesanText': _0x4c16f7(0x20e),
            'kuotaLabelText': _0x4c16f7(0x214),
            'closeModalSelector': '.el-dialog__headerbtn,\x20.el-dialog__close,\x20.el-icon-close',
            'nextPageSelector': '.btn-next',
            'dialogSelector': '.el-dialog[aria-label=\x22Mengirim\x20Pesan\x22]',
            'kuotaTipSelector': _0x4c16f7(0x1f5),
            'tabDaftarNasabahText': 'tugasku',
            'delay': {
                'short': 0xc8,
                'medium': 0x190,
                'long': 0x320
            }
        }, _0xc91157 = _0x14274c => new Promise(_0x1fd209 => setTimeout(_0x1fd209, _0x14274c));
    function _0x5ddc5(_0x5d81dd, _0x12fada, _0x46f1d8 = document) {
        const _0x1d6039 = _0x4c16f7, _0xbd881c = Array[_0x1d6039(0x1fa)](_0x46f1d8[_0x1d6039(0x1fd)](_0x5d81dd));
        return _0xbd881c[_0x1d6039(0x1fb)](_0x32c631 => _0x32c631[_0x1d6039(0x1f0)][_0x1d6039(0x1a6)]()[_0x1d6039(0x1c3)]()[_0x1d6039(0x20f)](_0x12fada[_0x1d6039(0x1c3)]()));
    }
    function _0x2b929d(_0xf84cf6, _0x1fc02c, _0x2038a9 = document) {
        const _0x51a6db = _0x4c16f7, _0x2bd524 = Array[_0x51a6db(0x1fa)](_0x2038a9[_0x51a6db(0x1fd)](_0xf84cf6));
        return _0x2bd524[_0x51a6db(0x180)](_0x23b895 => _0x23b895[_0x51a6db(0x1f0)][_0x51a6db(0x1a6)]()['toLowerCase']()[_0x51a6db(0x20f)](_0x1fc02c[_0x51a6db(0x1c3)]()));
    }
    function _0x918d36(_0x20d3ab) {
        const _0x3d8d84 = _0x4c16f7;
        if (!_0x20d3ab)
            return ![];
        return _0x20d3ab[_0x3d8d84(0x1ea)]({ 'block': _0x3d8d84(0x1ec) }), _0x20d3ab['dispatchEvent'](new MouseEvent('mousedown', { 'bubbles': !![] })), _0x20d3ab['dispatchEvent'](new MouseEvent(_0x3d8d84(0x1c1),
 { 'bubbles': !![] })), _0x20d3ab[_0x3d8d84(0x1ad)](), !![];
    }
    function _0x1cce65(_0x48a5a1) {
        const _0x325aab = _0x4c16f7;
        if (!_0x48a5a1)
            return ![];
        const _0x4d6b3d = window[_0x325aab(0x1e2)](_0x48a5a1);
        if (_0x4d6b3d[_0x325aab(0x1d0)] === _0x325aab(0x1ed) || _0x4d6b3d[_0x325aab(0x1f9)] === _0x325aab(0x1f8))
            return ![];
        const _0x51ef2f = _0x48a5a1[_0x325aab(0x1af)]();
        return _0x51ef2f[_0x325aab(0x18c)] > 0x0 && _0x51ef2f[_0x325aab(0x1ef)] > 0x0;
    }
    async function _0x1ae746(_0x561678 = 0x5dc) {
        const _0x57710f = _0x4c16f7, _0x8039d2 = Date[_0x57710f(0x1a8)]();
        while (Date[_0x57710f(0x1a8)]() - _0x8039d2 < _0x561678) {
            const _0x548197 = Array[_0x57710f(0x1fa)](document[_0x57710f(0x1fd)]('.el-select-dropdown,\x20.el-popper')), _0x50150f = _0x548197[_0x57710f(0x1fb)](_0x4ab826 => _0x1cce65(_0x4ab826) && _0x4ab826[_0x57710f(0x1fd)](_0x57710f(0x1a2))[_0x57710f(0x1c7)] > 0x0);

            if (_0x50150f)
                return _0x50150f;
            await _0xc91157(0x64);
        }
        return null;
    }
    async function _0x2a43f0(_0x1b2f21, _0x17b986) {
        const _0x27a30 = _0x4c16f7;
        _0x918d36(_0x1b2f21);
        const _0x9b59fb = await _0x1ae746();
        if (!_0x9b59fb)
            return _0x3331a7(_0x27a30(0x1a0)), ![];
        const _0x5dfd4d = Array['from'](_0x9b59fb[_0x27a30(0x1fd)]('.el-select-dropdown__item,\x20li'))[_0x27a30(0x180)](_0x1cce65);
        if (_0x5dfd4d[_0x17b986])
            return _0x918d36(_0x5dfd4d[_0x17b986]), await _0xc91157(_0x521adb[_0x27a30(0x181)][_0x27a30(0x193)]), !![];
        return _0x3331a7(_0x27a30(0x1ab) + _0x17b986 + _0x27a30(0x20a) + _0x5dfd4d['length'] + ')'), ![];
    }
    function _0x551b94() {
        const _0x2e95df = _0x4c16f7, _0x1e54e1 = Array[_0x2e95df(0x1fa)](document[_0x2e95df(0x1fd)]('.el-dialog,\x20.el-dialog__wrapper,\x20.el-message-box'))['filter'](_0x1cce65);
        let _0x406938 = _0x1e54e1['find'](_0x137cbb => _0x5ddc5(_0x2e95df(0x1db), _0x521adb[_0x2e95df(0x19d)], _0x137cbb)) || _0x1e54e1[0x0];
        if (!_0x406938)
            return null;
        const _0x4c9841 = _0x406938[_0x2e95df(0x1f0)] || '';
        let _0x4c1d2a = _0x4c9841['match'](/(\d+)\s*pesan(?:\s*yang)?\s*(?:yang\s*)?tersedia/i);
        if (!_0x4c1d2a)
            _0x4c1d2a = _0x4c9841[_0x2e95df(0x207)](/tersedia\D{0,15}(\d+)/i);
        if (!_0x4c1d2a)
            _0x4c1d2a = _0x4c9841[_0x2e95df(0x207)](/sisa\s*(?:pesan|sms|kuota)\D{0,10}(\d+)/i);
        if (_0x4c1d2a)
            return parseInt(_0x4c1d2a[0x1], 0xa);
        return null;
    }
    async function _0x1d376c(_0xd92dad = 0x898, _0x344ccd = 0xc8) {
        const _0x4829be = _0x4c16f7, _0x41abd4 = Date['now']();
        let _0x1d4ff6 = _0x551b94();
        while (_0x1d4ff6 === null && Date[_0x4829be(0x1a8)]() - _0x41abd4 < _0xd92dad) {
            await _0xc91157(_0x344ccd), _0x1d4ff6 = _0x551b94();
        }
        return _0x1d4ff6;
    }
    async function _0xfaae84() {
        const _0x7e7b4 = _0x4c16f7;
        let _0x1fc163 = Array[_0x7e7b4(0x1fa)](document['querySelectorAll'](_0x521adb[_0x7e7b4(0x1de)]))[_0x7e7b4(0x1fb)](_0x1cce65);
        !_0x1fc163 && (_0x1fc163 = Array[_0x7e7b4(0x1fa)](document['querySelectorAll'](_0x7e7b4(0x1e0)))[_0x7e7b4(0x1fb)](_0x1cce65));
        const _0x4e9905 = _0x1fc163 ? _0x1fc163[_0x7e7b4(0x1dd)](_0x521adb[_0x7e7b4(0x187)]) || _0x1fc163[_0x7e7b4(0x190)](_0x7e7b4(0x1d1))?.[_0x7e7b4(0x1dd)](_0x521adb[_0x7e7b4(0x187)]) : document[_0x7e7b4(0x1dd)](_0x521adb[_0x7e7b4(0x187)]);

        if (_0x4e9905)
            _0x918d36(_0x4e9905);
        await _0xc91157(_0x521adb[_0x7e7b4(0x181)][_0x7e7b4(0x193)]);
    }
    function _0x3331a7(_0x2e0de4) {
        const _0x3c3d7f = _0x4c16f7;
        console[_0x3c3d7f(0x1d8)](_0x3c3d7f(0x1e3), _0x2e0de4), _0x39cafa(_0x2e0de4);
    }
    const _0xc69a3f = new Set(), _0x5498f5 = new Set();
    let _0x20d58e = ![];
    function _0x297cdb(_0x3d0042) {
        const _0x377783 = _0x4c16f7;
        return _0x3d0042[_0x377783(0x1f0)][_0x377783(0x1a7)](/\s+/g, '\x20')[_0x377783(0x1a6)]();
    }
    function _0x37288a() {
        const _0xfe87f3 = _0x4c16f7, _0x5aa06a = document[_0xfe87f3(0x1dd)](_0xfe87f3(0x1a9));
        return _0x5aa06a ? _0x5aa06a[_0xfe87f3(0x1be)](_0xfe87f3(0x18d)) : null;
    }
    async function _0x583b61(_0x3a0872) {
        const _0x4c9ff4 = _0x4c16f7, _0x401bf6 = _0x297cdb(_0x3a0872);
        if (_0xc69a3f['has'](_0x401bf6)) {
            _0x3331a7(_0x4c9ff4(0x206));
            return;
        }
        const _0x5f38c6 = _0x5ddc5('a,\x20span,\x20button', _0x521adb[_0x4c9ff4(0x1d6)], _0x3a0872);
        if (!_0x5f38c6) {
            _0x3331a7(_0x4c9ff4(0x1dc)), console['log']('[Auto\x20SMS\x20Nasabah]\x20DEBUG\x20-\x20isi\x20baris\x20yang\x20gagal:\x0a', _0x3a0872[_0x4c9ff4(0x1df)][_0x4c9ff4(0x182)](0x0,
 0x5dc));
            return;
        }
        _0x918d36(_0x5f38c6), await _0xc91157(_0x521adb[_0x4c9ff4(0x181)][_0x4c9ff4(0x198)]);
        let _0x8d0033 = Array[_0x4c9ff4(0x1fa)](document[_0x4c9ff4(0x1fd)](_0x521adb[_0x4c9ff4(0x1de)]))[_0x4c9ff4(0x1fb)](_0x1cce65);
        !_0x8d0033 && (_0x8d0033 = Array[_0x4c9ff4(0x1fa)](document[_0x4c9ff4(0x1fd)]('.el-dialog'))['find'](_0x1cce65));
        if (!_0x8d0033) {
            _0x3331a7(_0x4c9ff4(0x1ba));
            return;
        }
        _0xc69a3f['add'](_0x401bf6);
        const _0x2483a0 = _0x8d0033[_0x4c9ff4(0x1dd)](_0x4c9ff4(0x194));
        if (!_0x2483a0) {
            _0x3331a7(_0x4c9ff4(0x1bd)), await _0xfaae84();
            return;
        }
        const _0x2daffc = await _0x2a43f0(_0x2483a0, _0x521adb[_0x4c9ff4(0x1cb)]);
        if (!_0x2daffc) {
            await _0xfaae84();
            return;
        }
        const _0x5e3238 = _0x5ddc5(_0x4c9ff4(0x1b4), _0x521adb[_0x4c9ff4(0x19d)], _0x8d0033);
        if (!_0x5e3238) {
            _0x3331a7(_0x4c9ff4(0x1d5)), await _0xfaae84();
            return;
        }
        _0x918d36(_0x5e3238), await _0xc91157(_0x521adb['delay'][_0x4c9ff4(0x198)]);
        const _0x2b1e83 = await _0x1d376c();
        _0x3331a7(_0x4c9ff4(0x200) + (_0x2b1e83 === null ? _0x4c9ff4(0x1f4) : _0x2b1e83)), _0x2b1e83 === 0x0 && (_0x3331a7(_0x4c9ff4(0x1d4)), _0x20d58e = !![]), await _0xfaae84();
    }
    async function _0x3a5cd7() {
        const _0x1e5446 = _0x4c16f7, _0xddfd9a = _0x37288a();
        if (_0xddfd9a && _0x5498f5[_0x1e5446(0x1bf)](_0xddfd9a)) {
            _0x3331a7(_0x1e5446(0x19e) + _0xddfd9a + _0x1e5446(0x1a5));
            return;
        }
        const _0x85554 = _0x5ddc5('*', _0x521adb[_0x1e5446(0x1b3)]);
        if (!_0x85554) {
            _0x3331a7(_0x1e5446(0x1a3));
            return;
        }
        _0x918d36(_0x85554), await _0xc91157(_0x521adb[_0x1e5446(0x181)]['medium']);
        const _0x3599b8 = await _0x453d3a();
        _0x3331a7(_0x1e5446(0x1ac) + _0x3599b8[_0x1e5446(0x1c7)] + _0x1e5446(0x1c4)), _0x20d58e = ![];
        for (let _0x27b562 = 0x0; _0x27b562 < _0x3599b8[_0x1e5446(0x1c7)]; _0x27b562++) {
            if (!_0x2913a9)
                return;
            if (_0x20d58e) {
                _0x3331a7(_0x1e5446(0x216));
                break;
            }
            const _0x2cba04 = _0x366c24(), _0x4c7741 = _0x2cba04[_0x27b562];
            if (!_0x4c7741)
                continue;
            await _0x583b61(_0x4c7741), await _0xc91157(_0x521adb[_0x1e5446(0x181)][_0x1e5446(0x193)]);
        }
        if (_0xddfd9a)
            _0x5498f5[_0x1e5446(0x1b1)](_0xddfd9a);
    }
    function _0x366c24() {
        const _0x4b7bc2 = _0x4c16f7, _0x5d66f8 = document[_0x4b7bc2(0x1fd)](_0x521adb[_0x4b7bc2(0x1e4)]);
        return Array['from'](_0x5d66f8)[_0x4b7bc2(0x180)](_0x5e44b5 => !!_0x5ddc5(_0x4b7bc2(0x1f2), _0x521adb['pesanSingkatText'], _0x5e44b5));
    }
    async function _0x453d3a(_0x42dc83 = 0x9c4) {
        const _0x389f13 = _0x4c16f7, _0x186e83 = Date[_0x389f13(0x1a8)]();
        let _0x27994f = _0x366c24();
        while (_0x27994f[_0x389f13(0x1c7)] === 0x0 && Date[_0x389f13(0x1a8)]() - _0x186e83 < _0x42dc83) {
            await _0xc91157(0x96), _0x27994f = _0x366c24();
        }
        if (_0x27994f[_0x389f13(0x1c7)] === 0x0) {
            const _0x5d21d7 = document[_0x389f13(0x1fd)](_0x521adb[_0x389f13(0x1e4)]);
            console[_0x389f13(0x1d8)](_0x389f13(0x1eb), _0x5d21d7[_0x389f13(0x1c7)]), _0x5d21d7[_0x389f13(0x188)]((_0x1cebe7, _0x34dff1) => {
                const _0x2511d9 = _0x389f13;
                console[_0x2511d9(0x1d8)]('[Auto\x20SMS\x20Nasabah][DEBUG]\x20Row\x20' + _0x34dff1 + ':', _0x1cebe7[_0x2511d9(0x191)]['slice'](0x0, 0x12c));
            });
        }
        return _0x27994f;
    }
    let _0x2913a9 = ![];
    async function _0x367393() {
        const _0x33a7a5 = _0x4c16f7;
        let _0x5840a4 = _0x5ddc5('li', _0x521adb[_0x33a7a5(0x18b)]);
        if (!_0x5840a4)
            _0x5840a4 = _0x5ddc5('*', _0x521adb[_0x33a7a5(0x18b)]);
        if (_0x5840a4)
            return _0x918d36(_0x5840a4), await _0xc91157(_0x521adb[_0x33a7a5(0x181)][_0x33a7a5(0x198)]), !![];
        return _0x3331a7(_0x33a7a5(0x189) + _0x521adb[_0x33a7a5(0x18b)] + _0x33a7a5(0x195)), ![];
    }
    async function _0x266194() {
        const _0x300960 = _0x4c16f7;
        _0x2913a9 = !![];
        const _0x5ce3c4 = 0x7d0;
        let _0x1e237d = 0x0;
        while (_0x2913a9) {
            _0x1e237d++;
            if (_0x1e237d > _0x5ce3c4) {
                _0x3331a7('Batas\x20maksimal\x20loop\x20tercapai,\x20berhenti\x20(kemungkinan\x20ada\x20masalah\x20navigasi).'), _0x2913a9 = ![];
                break;
            }
            const _0x2b9705 = document[_0x300960(0x1fd)](_0x521adb[_0x300960(0x1f1)]);
            _0x3331a7(_0x300960(0x1cf) + _0x2b9705[_0x300960(0x1c7)] + '\x20nasabah\x20di\x20halaman\x20ini');
            for (let _0x4f7c41 = 0x0; _0x4f7c41 < _0x2b9705[_0x300960(0x1c7)]; _0x4f7c41++) {
                if (!_0x2913a9)
                    return;
                const _0xe9937b = document[_0x300960(0x1fd)](_0x521adb[_0x300960(0x1f1)]), _0x17c6c7 = _0xe9937b[_0x4f7c41];
                if (!_0x17c6c7)
                    continue;
                const _0x7befb2 = _0x5ddc5(_0x300960(0x1e7), _0x521adb['detailButtonText'], _0x17c6c7) || _0x17c6c7;
                _0x918d36(_0x7befb2), await _0xc91157(_0x521adb[_0x300960(0x181)][_0x300960(0x198)]), await _0x3a5cd7();
                const _0x3026e8 = await _0x367393();
                if (!_0x3026e8) {
                    _0x2913a9 = ![];
                    return;
                }
            }
            const _0x3d112b = document[_0x300960(0x1dd)](_0x521adb[_0x300960(0x215)]), _0x2d659b = _0x3d112b && (_0x3d112b['disabled'] || _0x3d112b[_0x300960(0x1ce)][_0x300960(0x1a4)](_0x300960(0x196)));

            _0x3d112b && !_0x2d659b ? (_0x3331a7(_0x300960(0x1e5)), _0x918d36(_0x3d112b), await _0xc91157(_0x521adb[_0x300960(0x181)][_0x300960(0x198)])) : (_0x3331a7(_0x300960(0x185)),
 _0x2913a9 = ![]);
        }
    }
    let _0x3bb3bd;
    function _0x39cafa(_0x39b3c0) {
        if (_0x3bb3bd)
            _0x3bb3bd['textContent'] = _0x39b3c0;
    }
    function _0xd3a0f3() {
        const _0x1dd9c1 = _0x4c16f7, _0x148788 = document[_0x1dd9c1(0x204)](_0x1dd9c1(0x217));
        _0x148788['style'][_0x1dd9c1(0x213)] = _0x1dd9c1(0x1c2), _0x3bb3bd = document[_0x1dd9c1(0x204)](_0x1dd9c1(0x217)), _0x3bb3bd['textContent'] = _0x1dd9c1(0x184), _0x3bb3bd[_0x1dd9c1(0x18a)][_0x1dd9c1(0x183)] = _0x1dd9c1(0x1c6),
 _0x148788[_0x1dd9c1(0x1bb)](_0x3bb3bd);
        const _0x369432 = document[_0x1dd9c1(0x204)](_0x1dd9c1(0x1b5));
        _0x369432[_0x1dd9c1(0x1f0)] = _0x1dd9c1(0x205), _0x369432['style']['cssText'] = _0x1dd9c1(0x1aa), _0x369432['onclick'] = () => {
            if (!_0x2913a9)
                _0x266194();
        };
        const _0x836901 = document[_0x1dd9c1(0x204)]('button');
        _0x836901['textContent'] = _0x1dd9c1(0x1d3), _0x836901[_0x1dd9c1(0x18a)][_0x1dd9c1(0x213)] = _0x1dd9c1(0x1c5), _0x836901[_0x1dd9c1(0x1b9)] = () => {
            _0x2913a9 = ![], _0x3331a7('Dihentikan\x20manual.');
        }, _0x148788[_0x1dd9c1(0x1bb)](_0x369432), _0x148788[_0x1dd9c1(0x1bb)](_0x836901), document[_0x1dd9c1(0x203)][_0x1dd9c1(0x1bb)](_0x148788);
    }
    window[_0x4c16f7(0x1e1)](_0x4c16f7(0x18e), () => {
        setTimeout(_0xd3a0f3, 0x1f4);
    });
}()));
function _0x3bce() {
    const _0xc3d48c = [
        'ysWGyNv0Dg9UlcbZCgfU',
        'C2v0sxrLBq',
        'CMvTB3zLsxrLBq',
        'C2nYB2XSsw50B1zPzxC',
        'w0f1Dg8Gu01tie5HC2fIywHDw0rfqLvhxsbuB3rHBcbLBgvTzw4GiI5LBc10ywjSzv9FCM93iIbKAsbOywXHBwfUoG',
        'y2vUDgvY',
        'BM9Uzq',
        'lMvSlxrHyMXLx19YB3C',
        'AgvPz2H0',
        'Dgv4DenVBNrLBNq',
        'BMfZywjHAfjVD1nLBgvJDg9Y',
        'ysWGC3bHBIWGyNv0Dg9UlcbKAxySigXPlcb0zcWGAq',
        'uefuq0G',
        'DgLKywSGDgvYyMfJyq',
        'lNrPCa',
        'CMfUzg9T',
        'C3rYAw5NAwz5',
        'AgLKzgvU',
        'DMLZAwjPBgL0Eq',
        'zNjVBq',
        'zMLUza',
        'mti0mdK0ngf0AfvnAG',
        'CxvLCNLtzwXLy3rVCKfSBa',
        'ugvZyw4GC2LUz2THDa',
        'x2jVDerPC2fIBgvKxW',
        'ugvZyw4GDgvYA2LYAw0UieT1B3rHifnnuYb0zxjZAxnHoIa',
        'Aw5KzxHpzG',
        'mJeXmty4mfrjzvLjrW',
        'yM9KEq',
        'y3jLyxrLrwXLBwvUDa',
        'txvSywKGqxv0BYbttvm',
        's29UDgfRigLUAsbZDwrHAcbKAxbYB3nLCYbZzwjLBhvTBNLHlcbZA2LWicHHBNrPlwr1CgXPA2f0kq',
        'Bwf0y2G',
        'zgLZywjSzwrFyNLFzgfZAgjVyxjK',
        'mtaXu0jVtxfy',
        'ihrPzgfRigrPDgvTDwTHBIaOANvTBgfOig9WC2KGDgvYBgLOyxq6ia',
        'u2nYAxb0ierPBM9UywT0AwzRyw4GugvYBwfUzw4',
        'mJq4nZG1BxHACeHe',
        'z2v0sxrLBq',
        's2LYAw0GCgvZyw4',
        'Aw5JBhvKzxm',
        'B2zMBgLUzq',
        'Dg9tDhjPBMC',
        'ANnVBG',
        'y3nZvgv4Da',
        'ugvZyw4GEwfUzYb0zxjZzwrPyq',
        'BMv4DfbHz2vtzwXLy3rVCG',
        's3vVDgeGBMfZywjHAcbPBMKGC3vKywGGmcWGC2TPCcbZAxnHigTVBNrHAYbKyxj1CMf0ihrHBNbHigj1A2eGCg9WDxa',
        'zgL2',
        'zMLSDgvY',
        'zgvSyxK',
        'C2XPy2u',
        'BwfYz2LUqM90Dg9T',
        'u2LHCc4',
        'u3vKywGGAgfSyw1HBIb0zxjHA2HPCI4Gu2vSzxnHAs4',
        'CgvYBwfeAxnHyMXLza',
        'y2XVC2vnB2rHBfnLBgvJDg9Y',
        'zM9YrwfJAa',
        'vgfIici',
        'C3r5Bgu',
        'DgfIrgfMDgfYtMfZywjHAfrLEhq',
        'D2LKDgG',
        'DgfZAY1Pza',
        'Bg9Hza',
        'mtj4u1Lhs2m',
        'y2XVC2vZDa',
        'B3v0zxjive1m',
        'DgHLBG',
        'C2HVCNq',
        'lMvSlxnLBgvJDcaUzwWTAw5WDxrFx2LUBMvYlcaUzwWTC2vSzwn0',
        'iIb0AwrHAYbKAxrLBxvRyw4SihrPzgfRigjPC2eGA2vTyMfSAsbRzsbSAxn0',
        'zgLZywjSzwq',
        'u2TYAxaGzgLUB25HA3rPzMTHBIbqrvjnqu5ftIbKyxjPigrHC2HIB2fYzc4GsgfSyw1HBIbHA2fUigrPCMvMCMvZAc4',
        'Bg9UzW',
        'l2nSAwvUDhmV',
        'x2jVDfbLCM1HrgLZywjSzwrF',
        'Ahr0Chm6lY9IB3rZAxn0zw1KCNGTBw9UAxrVCI1KzwzHDwX0lxj0zgiUyxnPys1ZB3v0AgvHC3qXlMzPCMvIyxnLzgf0ywjHC2uUyxbW',
        'u2TYAxaGzgLUB25HA3rPzMTHBIbKyxjPigrHC2HIB2fYzc4GsgfSyw1HBIbHA2fUigrPCMvMCMvZAc4',
        'A2LYAw1qzxnHBLrLEhq',
        'tMfZywjHAcaODgfZAY1Pzca',
        'AgfSDgvKlxbLCM1HBMvUDgX5lwrPC2fIBgvK',
        'rhjVCgrVD24GDgvTCgXHDguGDgLKywSGzgL0zw11A2fU',
        'rgv0AwW',
        'BgKSic5LBc1ZzwXLy3qTzhjVCgrVD25Fx2L0zw0',
        'vgfIicjlB250ywSGzgfYDxjHDciGDgLKywSGzgL0zw11A2fU',
        'y29UDgfPBNm',
        'ksbZDwrHAcbKAxbYB3nLCYbZzwjLBhvTBNLHlcbZA2LWicHHBNrPlwr1CgXPA2f0kq',
        'DhjPBq',
        'CMvWBgfJzq',
        'BM93',
        'w3rHC2STAwrD',
        'BwfYz2LUlxjPz2H0oJzWEdTWywrKAw5NoJrWEcaXmhb4o2jHy2TNCM91BMq6iZjLn2qZmJTJB2XVCJOJzMzMo2jVCMrLCJPUB25Lo2jVCMrLCI1YywrPDxm6nhb4o2n1CNnVCJPWB2LUDgvYoW',
        't3bZAsb0zw1WBgf0zsbPBMrLEca',
        'rgL0zw11A2fUia',
        'y2XPy2S',
        'pgrPDIbZDhLSzt0ICg9ZAxrPB246zML4zwq7Aw5Zzxq6mdTIywnRz3jVDw5KoImXmte7y29SB3i6i2vLztTKAxnWBgf5oMzSzxG7ywXPz24TAxrLBxm6y2vUDgvYo2P1C3rPzNKTy29UDgvUDdPJzw50zxi7zM9UDc1Myw1PBhK6'+
'C2fUCY1ZzxjPzJTMB250lxnPEMu6mJbWEdSIpLnRCMLWigrPBM9UywT0AwzRyw4GzgfYAsbKyxnOyM9HCMqUie1LBMDLy2vRihn0yxr1CYb0zxjIyxj1lI4Upc9KAxy+',
        'z2v0qM91BMrPBMDdBgLLBNrszwn0',
        'C21Z',
        'ywrK',
        'yMvMB3jLDw5SB2fK',
        'DgfIs29UDgfRrgfYDxjHDfrLEhq',
        'yNv0Dg9UlcbZCgfU',
        'yNv0Dg9U',
        'lMPZB24',
        'CgvYBwfUzw50BhLFzgLZywjSzwq',
        'AhjLzG',
        'B25JBgLJAW',
        'ug9WDxaGA2LYAw0GCgvZyw4GDgLKywSGzgL0zw11A2fUlcbZA2LW',
        'yxbWzw5Kq2HPBgq',
        'y2f0y2G',
        'rMLLBgqGDgvTCgXHDguGDgLKywSGzgL0zw11A2fUlcbZA2LWig5HC2fIywGGAw5P',
        'z2v0qxr0CMLIDxrL',
        'AgfZ',
        'AgfSDgvKlwrPC2fIBgvK',
        'Bw91C2v1Ca',
        'Cg9ZAxrPB246zML4zwq7yM90Dg9ToJiWChG7CMLNAhq6mJbWEdT6lwLUzgv4oJK5otK5o2jHy2TNCM91BMq6iZfLmwuXztTJB2XVCJOJzMzMo3bHzgrPBMC6mtbWEcaXnhb4o2jVCMrLCI1YywrPDxm6ohb4o2zVBNqTC2L6ztOX'+
'mNb4o2zVBNqTzMfTAwX5oNnHBNmTC2vYAwy7yM94lxnOywrVDZOWidjWEca4ChGGCMDIysGWldaSmcWUmYK7Bwf4lxDPzhrOoJi2mhb4oW',
        'Dg9mB3DLCKnHC2u',
        'igTVBNrHAYbKyxj1CMf0',
        'CgfKzgLUzZO0ChGGmtbWEdTIywnRz3jVDw5KoInJnJi4mJG7y29SB3i6i2zMzJTIB3jKzxi6BM9UztTIB3jKzxiTCMfKAxvZoJrWEdTJDxjZB3i6Cg9PBNrLCJS',
        'ohb4',
        'BgvUz3rO',
        'mty1nJCXntvJq3DtD08',
        'mZa1odiXmLz3r1LHwG',
        'qxv0BYbttvmGtMfZywjHAa',
        'DgvTCgXHDgvpChrPB25jBMrLEa',
        'CMvSB2fK',
        'B25SAw5L',
        'y2XHC3nmAxn0',
        'twvTChjVC2vZia',
        'zgLZCgXHEq',
        'lMvSlwrPywXVz19FD3jHChbLCG',
        'ntK1mJCZzw5isMT5',
        'u3rVCa',
        's3vVDgeGu01tig5HC2fIywGGAw5Pihn1zgfOidaGlsbRB250ywSGzgfYDxjHDcbIzxjPA3v0BNLHicHUyxnHyMfOihLHBMCGC2fTysKGywTHBIbKAs1ZA2LWihrHBNbHigj1A2eGCg9WDxa',
        'vg9TyM9SicjlAxjPBsbWzxnHBIiGDgLKywSGzgL0zw11A2fU',
        'CgvZyw5tAw5NA2f0vgv4Da',
        'l3nJCMLWDhmV',
        'Bg9N',
        'DgL0Bgu',
        'mZiZoefwqK9syW',
        'yNv0Dg9UlcbZCgfUlcaUzwWTyNv0Dg9U',
        'tgLUAYaIugvZyw4GC2LUz2THDciGDgLKywSGzgL0zw11A2fUigrPigjHCMLZigLUAsWGC2TPCa',
        'CxvLCNLtzwXLy3rVCG',
        'zgLHBg9Nu2vSzwn0B3i',
        'Aw5Uzxjive1m',
        'lMvSlwrPywXVzW',
        'ywrKrxzLBNrmAxn0zw5LCG',
        'z2v0q29TChv0zwrtDhLSzq',
        'w0f1Dg8Gu01tie5HC2fIywHD',
        'A29UDgfRuM93u2vSzwn0B3i',
        'tgfUANv0igTLigHHBgfTyw4GyMvYAwT1Dg55yq',
        'x2jVDenSAwvUDeLK'
    ];
    _0x3bce = function () {
        return _0xc3d48c;
    };
    return _0x3bce();
}
