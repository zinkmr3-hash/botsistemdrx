// ==UserScript==
// @name         Auto Isi Collection - FAST STABLE [Managed]
// @namespace    http://tampermonkey.net/
// @version      38.1
// @description  Update: index disesuaikan, timing dipercepat tapi tetap aman CAPTCHA [PROTECTED]
// @author       Enhanced
// @match        https://collection-id.zunamiq.com/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/zinkmr3-hash/botsistemdrx/refs/heads/main/auto-adlogs-v4.8.1.user.js
// @downloadURL  https://raw.githubusercontent.com/zinkmr3-hash/botsistemdrx/refs/heads/main/auto-adlogs-v4.8.1.user.js
// @run-at       document-idle
// ==/UserScript==
(function (_0x30abe4, _0x37fc29) {
    const _0x217845 = _0x3552, _0x44fd85 = _0x30abe4();
    while (!![]) {
        try {
            const _0x19c9f7 = -parseInt(_0x217845(0x110)) / 0x1 * (parseInt(_0x217845(0x176)) / 0x2) + parseInt(_0x217845(0x132)) / 0x3 * (-parseInt(_0x217845(0x12a)) / 0x4) + parseInt(_0x217845(0x11d)) / 0x5 * (-parseInt(_0x217845(0x128)) / 0x6) + -parseInt(_0x217845(0x10c)) / 0x7 * (parseInt(_0x217845(0xfd)) / 0x8) + parseInt(_0x217845(0x106)) / 0x9 * (parseInt(_0x217845(0xf4)) / 0xa) + parseInt(_0x217845(0x111)) / 0xb + parseInt(_0x217845(0x15f)) / 0xc * (parseInt(_0x217845(0x114)) / 0xd);

            if (_0x19c9f7 === _0x37fc29)
                break;
            else
                _0x44fd85['push'](_0x44fd85['shift']());
        } catch (_0x413cf3) {
            _0x44fd85['push'](_0x44fd85['shift']());
        }
    }
}(_0x3b3c, 0x53bcf), (function () {
    const _0x47d9ce = _0x3552;
    if (location[_0x47d9ce(0x158)]['indexOf'](_0x47d9ce(0x10b)) === -0x1)
        throw new Error(_0x47d9ce(0x135));
}()), (function () {
    const _0x45a550 = _0x3552;
    var _0x3da472 = _0x45a550(0x113), _0x21d0be = _0x45a550(0x13a), _0xdf87d1 = _0x45a550(0x151);
    function _0x15bcc9() {
        const _0x569c76 = _0x45a550;
        var _0x31723f = localStorage[_0x569c76(0x171)](_0x569c76(0xf3));
        return !_0x31723f && (_0x31723f = 'c_' + Date[_0x569c76(0x126)]()[_0x569c76(0xfe)](0x24) + '_' + Math[_0x569c76(0x16a)]()['toString'](0x24)[_0x569c76(0x156)](0x2, 0xa), localStorage[_0x569c76(0x10a)](_0x569c76(0xf3),
 _0x31723f)), _0x31723f;
    }
    var _0x3001cf = _0x15bcc9(), _0x367198 = _0x45a550(0x115) + _0x21d0be;
    if (localStorage[_0x45a550(0x171)](_0x367198) === '1') {
        try {
            fetch(_0x3da472 + _0x45a550(0x13b) + _0x3001cf + _0x45a550(0x15b) + _0x21d0be + _0x45a550(0x117))[_0x45a550(0x163)](function (_0xd57dee) {
                const _0x4e4a15 = _0x45a550;
                return _0xd57dee[_0x4e4a15(0x102)]();
            })[_0x45a550(0x163)](function (_0x1a632a) {
                const _0xa1d810 = _0x45a550;
                _0x1a632a !== !![] && (localStorage[_0xa1d810(0x150)](_0x367198), location[_0xa1d810(0x147)]());
            })[_0x45a550(0x11a)](function () {
            });
        } catch (_0x46c8da) {
        }
        try {
            document[_0x45a550(0x12d)] = _0x45a550(0x14a), document[_0x45a550(0x139)][_0x45a550(0xff)] = _0x45a550(0xf6);
        } catch (_0x31f48e) {
        }
        throw new Error('halted-disabled');
    }
    function _0x940354(_0xc19f88) {
        const _0x2efe66 = _0x45a550;
        try {
            fetch(_0x3da472 + '/clients/' + _0x3001cf + '/scripts/' + _0x21d0be + _0x2efe66(0x148), {
                'method': _0x2efe66(0x152),
                'headers': { 'Content-Type': _0x2efe66(0x177) },
                'body': JSON[_0x2efe66(0x164)]({
                    'scriptName': _0xdf87d1,
                    'status': _0xc19f88,
                    'lastPing': Date[_0x2efe66(0x126)](),
                    'url': location['href']
                })
            })[_0x2efe66(0x11a)](function () {
            });
        } catch (_0x292e8b) {
        }
    }
    function _0x46a672() {
        const _0x5d633d = _0x45a550;
        try {
            fetch(_0x3da472 + _0x5d633d(0x13b) + _0x3001cf + _0x5d633d(0x15b) + _0x21d0be + _0x5d633d(0x117))[_0x5d633d(0x163)](function (_0x5727b3) {
                const _0x50e26b = _0x5d633d;
                return _0x5727b3[_0x50e26b(0x102)]();
            })[_0x5d633d(0x163)](function (_0x2bfbd1) {
                const _0x3663b7 = _0x5d633d;
                if (_0x2bfbd1 === !![]) {
                    localStorage[_0x3663b7(0x10a)](_0x367198, '1'), _0x940354('disabled_by_dashboard');
                    try {
                        alert(_0x3663b7(0x13f));
                    } catch (_0x3e2610) {
                    }
                    location[_0x3663b7(0x147)]();
                } else
                    localStorage['removeItem'](_0x367198);
            })['catch'](function () {
            });
        } catch (_0x352a96) {
        }
    }
    _0x940354('online'), _0x46a672(), setInterval(function () {
        const _0x23e5de = _0x45a550;
        _0x940354(_0x23e5de(0x130));
    }, 0x7530), setInterval(_0x46a672, 0x4e20), window[_0x45a550(0x104)](_0x45a550(0x174), function () {
        const _0x175458 = _0x45a550;
        _0x940354(_0x175458(0x16f));
    });
}()), (function () {
    'use strict';
    const _0x145d00 = _0x3552;
    let _0x5137f2 = ![];
    const _0x6e7c01 = 0xa0;
    setInterval(function () {
        const _0x438a33 = _0x3552, _0x55d78f = window['outerWidth'] - window[_0x438a33(0x13d)], _0x30d3e2 = window[_0x438a33(0x165)] - window[_0x438a33(0x175)];
        (_0x55d78f > _0x6e7c01 || _0x30d3e2 > _0x6e7c01) && (!_0x5137f2 && (_0x5137f2 = !![], console[_0x438a33(0x161)](), document[_0x438a33(0x139)]['innerHTML'] = _0x438a33(0x138),
 setTimeout(function () {
            const _0x4d7998 = _0x438a33;
            window[_0x4d7998(0x12b)][_0x4d7998(0x16b)] = _0x4d7998(0x124);
        }, 0x1f4)));
    }, 0x3e8), setInterval(function () {
        try {
            eval('(function () {\n    debugger;\n}());');
        } catch (_0x5644db) {
        }
    }, 0xc8);
    const _0x2e13ab = console[_0x145d00(0xf7)];
    console[_0x145d00(0xf7)] = function () {
        const _0x38a23b = _0x145d00;
        _0x2e13ab[_0x38a23b(0x16e)](console, [
            _0x38a23b(0x16d),
            _0x38a23b(0x10e)
        ][_0x38a23b(0x100)](Array[_0x38a23b(0x136)](arguments)));
    }, document[_0x145d00(0x104)]('contextmenu', function (_0x6f0836) {
        const _0xdb7624 = _0x145d00;
        return _0x6f0836[_0xdb7624(0x149)](), ![];
    }), document[_0x145d00(0x104)](_0x145d00(0x10d), function (_0x1d8a8d) {
        const _0xb23859 = _0x145d00;
        if (_0x1d8a8d[_0xb23859(0x122)] === _0xb23859(0x162) || _0x1d8a8d[_0xb23859(0x173)] && _0x1d8a8d[_0xb23859(0x166)] && (_0x1d8a8d['key'] === 'I' || _0x1d8a8d['key'] === 'J') || _0x1d8a8d[_0xb23859(0x173)] && _0x1d8a8d[_0xb23859(0x122)] === 'u'+
'')
            return _0x1d8a8d[_0xb23859(0x149)](), _0x1d8a8d[_0xb23859(0x112)](), ![];
    });
}()), (function () {
    'use strict';
    const _0x1e267b = _0x3552;
    let _0x3d566d = localStorage[_0x1e267b(0x171)]('botStatus') === _0x1e267b(0x178) ? ![] : !![], _0x579895 = ![];
    const _0x2c8be2 = _0x1a9ff7 => new Promise(_0x4e3a84 => setTimeout(_0x4e3a84, _0x1a9ff7));
    function _0x4208e4(_0x2474f9) {
        const _0x4354e7 = _0x1e267b;
        console[_0x4354e7(0xf7)](_0x4354e7(0x11b), _0x2474f9);
    }
    function _0x311d74(_0xb5ad3d) {
        const _0x306b0f = _0x1e267b;
        if (!_0xb5ad3d)
            return;
        _0xb5ad3d[_0x306b0f(0x11c)]({ 'block': _0x306b0f(0x153) }), _0xb5ad3d[_0x306b0f(0xf9)](new MouseEvent(_0x306b0f(0x12c), { 'bubbles': !![] })), _0xb5ad3d[_0x306b0f(0xf9)](new MouseEvent(_0x306b0f(0x167),
 { 'bubbles': !![] })), _0xb5ad3d[_0x306b0f(0x11e)]();
    }
    function _0x27cf03(_0x37e3bc, _0x9a40a6) {
        const _0x1ce891 = _0x1e267b;
        if (!_0x37e3bc)
            return;
        const _0x1f6573 = Object[_0x1ce891(0x160)](_0x37e3bc[_0x1ce891(0xfb)], _0x1ce891(0x127))?.[_0x1ce891(0x129)];
        if (_0x1f6573)
            _0x1f6573[_0x1ce891(0x15a)](_0x37e3bc, _0x9a40a6);
        else
            _0x37e3bc[_0x1ce891(0x127)] = _0x9a40a6;
        _0x37e3bc[_0x1ce891(0xf9)](new Event(_0x1ce891(0xf5), { 'bubbles': !![] })), _0x37e3bc[_0x1ce891(0xf9)](new Event(_0x1ce891(0x14c), { 'bubbles': !![] }));
    }
    function _0x421116() {
        const _0x5870da = _0x1e267b, _0x24601f = document[_0x5870da(0x139)][_0x5870da(0x145)], _0x6b7078 = _0x24601f[_0x5870da(0x168)](/([ABC])\s*Tingkat\s*pengguna/i);
        return _0x6b7078 ? _0x6b7078[0x1] : 'C';
    }
    async function _0x4f27b5(_0x4da306, _0x493431 = 0x0) {
        const _0x262ebd = _0x1e267b;
        if (!_0x4da306)
            return;
        _0x311d74(_0x4da306[_0x262ebd(0x137)](_0x262ebd(0xf5)) || _0x4da306), await _0x2c8be2(0x258);
        const _0x5971ed = Array[_0x262ebd(0x136)](document[_0x262ebd(0x141)]('.el-select-dropdown'))[_0x262ebd(0x108)](_0x2a9f87 => _0x2a9f87[_0x262ebd(0x13e)] !== null)?.['querySel'+
'ectorAll'](_0x262ebd(0x157)) || [];
        _0x5971ed[_0x493431] && (_0x5971ed[_0x493431][_0x262ebd(0x11e)](), await _0x2c8be2(0x12c));
    }
    async function _0x54ee29() {
        const _0x41e383 = _0x1e267b;
        _0x4208e4(_0x41e383(0x144)), await _0x2c8be2(0x258);
        let _0x3aaddf = Array[_0x41e383(0x136)](document[_0x41e383(0x141)](_0x41e383(0x123)))[_0x41e383(0x108)](_0x4d4e6d => {
            const _0x155f09 = _0x41e383, _0x4bb9e2 = _0x4d4e6d[_0x155f09(0x145)]['trim']()[_0x155f09(0x14d)]();
            return (_0x4bb9e2 === _0x155f09(0x119) || _0x4bb9e2 === _0x155f09(0x146)) && !_0x4d4e6d[_0x155f09(0x116)] && !_0x4d4e6d[_0x155f09(0x14b)][_0x155f09(0x17a)](_0x155f09(0x125));

        });
        if (!_0x3aaddf)
            _0x3aaddf = document['querySelector'](_0x41e383(0x120));
        if (!_0x3aaddf)
            return;
        _0x311d74(_0x3aaddf);
        for (let _0x3f3f25 = 0x0; _0x3f3f25 < 0x1e; _0x3f3f25++) {
            let _0x442b35 = Array[_0x41e383(0x136)](document[_0x41e383(0x141)](_0x41e383(0xfc)))[_0x41e383(0x108)](_0x4f1500 => _0x4f1500[_0x41e383(0x145)][_0x41e383(0x170)]()[_0x41e383(0x14d)]() === _0x41e383(0x14e) && _0x4f1500[_0x41e383(0x13e)] !== null);

            if (_0x442b35) {
                _0x311d74(_0x442b35), _0x442b35[_0x41e383(0x11e)](), _0x4208e4(_0x41e383(0x16c)), await _0x2c8be2(0x4b0);
                break;
            }
            await _0x2c8be2(0x12c);
        }
        window['location'][_0x41e383(0x16b)] = _0x41e383(0xfa), setTimeout(() => location[_0x41e383(0x147)](), 0x3e8);
    }
    async function _0xe949e4() {
        const _0xbc2791 = _0x1e267b;
        if (_0x3d566d || _0x579895)
            return;
        _0x579895 = !![];
        try {
            await _0x2c8be2(0x5dc);
            const _0x246291 = _0x421116(), _0x2636f9 = document[_0xbc2791(0x141)](_0xbc2791(0x143));
            for (let _0x3e13ce of _0x2636f9) {
                const _0x153c3e = (_0x3e13ce[_0xbc2791(0x145)] || '')[_0xbc2791(0x14d)](), _0x44172c = _0x3e13ce[_0xbc2791(0x137)](_0xbc2791(0x12f)), _0x196875 = _0x3e13ce[_0xbc2791(0x137)](_0xbc2791(0x15e));

                if (_0x153c3e['includes'](_0xbc2791(0x179)))
                    await _0x4f27b5(_0x44172c, 0x0);
                if (_0x153c3e[_0xbc2791(0x134)](_0xbc2791(0x17c)))
                    await _0x4f27b5(_0x44172c, 0x0);
                if (_0x153c3e[_0xbc2791(0x134)](_0xbc2791(0x15c)))
                    await _0x4f27b5(_0x44172c, 0x5);
                if (_0x153c3e[_0xbc2791(0x134)](_0xbc2791(0xf8)))
                    await _0x4f27b5(_0x44172c, 0x8);
                if (_0x153c3e[_0xbc2791(0x134)](_0xbc2791(0x17d)) && _0x196875) {
                    const _0x5e7ccb = [
                            _0xbc2791(0x121),
                            _0xbc2791(0x109)
                        ], _0x5dbc56 = _0x5e7ccb[Math[_0xbc2791(0x101)](Math[_0xbc2791(0x16a)]() * _0x5e7ccb[_0xbc2791(0x133)])];
                    _0x27cf03(_0x196875, _0x5dbc56 + '\x20' + _0x246291);
                }
            }
            await _0x54ee29();
        } catch (_0x1facef) {
            _0x4208e4('ERROR:\x20' + _0x1facef['message']);
        }
        _0x579895 = ![];
    }
    async function _0x39d8fd() {
        const _0x4485d7 = _0x1e267b;
        _0x4208e4(_0x4485d7(0x15d) + (_0x3d566d ? _0x4485d7(0x159) : _0x4485d7(0x142)));
        while (!_0x3d566d) {
            if (location[_0x4485d7(0x14f)][_0x4485d7(0x134)](_0x4485d7(0x103))) {
                await _0x2c8be2(0x7d0);
                const _0x322771 = document[_0x4485d7(0x141)](_0x4485d7(0x154));
                let _0x5ead3d = null;
                for (let _0xce19f4 of _0x322771) {
                    let _0x3b062f = _0xce19f4['querySelector'](_0x4485d7(0x123));
                    if (_0x3b062f && _0x3b062f[_0x4485d7(0x145)][_0x4485d7(0x134)](_0x4485d7(0x155))) {
                        _0x5ead3d = _0x3b062f;
                        break;
                    }
                }
                _0x5ead3d ? (_0x4208e4(_0x4485d7(0x169)), _0x311d74(_0x5ead3d), await _0x2c8be2(0x4b0)) : (_0x4208e4(_0x4485d7(0x13c)), await _0x2c8be2(0xfa0), location[_0x4485d7(0x147)]());

            } else
                location[_0x4485d7(0x14f)][_0x4485d7(0x134)](_0x4485d7(0x140)) && await _0xe949e4();
            await _0x2c8be2(0x320);
        }
    }
    function _0x2c5eec() {
        const _0xb2dc1f = _0x1e267b;
        if (document[_0xb2dc1f(0x17b)](_0xb2dc1f(0x11f)))
            return;
        const _0x4a8f26 = document[_0xb2dc1f(0x107)]('div');
        _0x4a8f26['id'] = 'botUI', _0x4a8f26[_0xb2dc1f(0x105)] = _0xb2dc1f(0xf2);
        const _0x4a9d70 = document[_0xb2dc1f(0x107)](_0xb2dc1f(0x123));
        _0x4a9d70[_0xb2dc1f(0x145)] = _0xb2dc1f(0x178), _0x4a9d70['style'] = _0xb2dc1f(0x131);
        const _0x2c7f9f = document[_0xb2dc1f(0x107)](_0xb2dc1f(0x123));
        _0x2c7f9f[_0xb2dc1f(0x145)] = _0xb2dc1f(0x10f), _0x2c7f9f['style'] = 'background:red;color:#fff;padding:12px\x2020px;margin:5px;border:none;cursor:pointer;border-radius:4px;'+
'font-weight:bold', _0x4a9d70['onclick'] = () => {
            const _0x3f7080 = _0xb2dc1f;
            localStorage[_0x3f7080(0x10a)](_0x3f7080(0x172), _0x3f7080(0x178)), location['reload']();
        }, _0x2c7f9f['onclick'] = () => {
            const _0x25b263 = _0xb2dc1f;
            localStorage[_0x25b263(0x10a)](_0x25b263(0x172), 'STOP'), _0x3d566d = !![], _0x4208e4('BOT\x20STOPPED'), location[_0x25b263(0x147)]();
        }, _0x4a8f26[_0xb2dc1f(0x118)](_0x4a9d70, _0x2c7f9f), document[_0xb2dc1f(0x139)][_0xb2dc1f(0x12e)](_0x4a8f26);
    }
    !_0x3d566d && _0x39d8fd(), setInterval(_0x2c5eec, 0x3e8), _0x2c5eec();
}()));
function _0x3552(_0x205601, _0x5b6beb) {
    _0x205601 = _0x205601 - 0xf2;
    const _0x3b3cad = _0x3b3c();
    let _0x355268 = _0x3b3cad[_0x205601];
    if (_0x3552['CjJOQW'] === undefined) {
        var _0x2e0c38 = function (_0x611780) {
            const _0x4038a1 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
            let _0x3da472 = '', _0x21d0be = '';
            for (let _0xdf87d1 = 0x0, _0x15bcc9, _0x3001cf, _0x367198 = 0x0; _0x3001cf = _0x611780['charAt'](_0x367198++); ~_0x3001cf && (_0x15bcc9 = _0xdf87d1 % 0x4 ? _0x15bcc9 * 0x40 + _0x3001cf : _0x3001cf,
 _0xdf87d1++ % 0x4) ? _0x3da472 += String['fromCharCode'](0xff & _0x15bcc9 >> (-0x2 * _0xdf87d1 & 0x6)) : 0x0) {
                _0x3001cf = _0x4038a1['indexOf'](_0x3001cf);
            }
            for (let _0x940354 = 0x0, _0x46a672 = _0x3da472['length']; _0x940354 < _0x46a672; _0x940354++) {
                _0x21d0be += '%' + ('00' + _0x3da472['charCodeAt'](_0x940354)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(_0x21d0be);
        };
        _0x3552['wkBrbM'] = _0x2e0c38, _0x3552['jJANkL'] = {}, _0x3552['CjJOQW'] = !![];
    }
    const _0x4139ff = _0x3b3cad[0x0], _0x2cecfe = _0x205601 + _0x4139ff, _0x4a4d67 = _0x3552['jJANkL'][_0x2cecfe];
    return !_0x4a4d67 ? (_0x355268 = _0x3552['wkBrbM'](_0x355268), _0x3552['jJANkL'][_0x2cecfe] = _0x355268) : _0x355268 = _0x4a4d67, _0x355268;
}
function _0x3b3c() {
    const _0x306ce7 = [
        'nJCWwfHpCvDp',
        'Aw5WDxq',
        'pgrPDIbZDhLSzt0ICg9ZAxrPB246zML4zwq7Aw5Zzxq6mdTIywnRz3jVDw5KoImXmte7y29SB3i6i2vLztTKAxnWBgf5oMzSzxG7ywXPz24TAxrLBxm6y2vUDgvYo2P1C3rPzNKTy29UDgvUDdPJzw50zxi7zM9UDc1Myw1PBhK6'+
'C2fUCY1ZzxjPzJTMB250lxnPEMu6mJbWEdSIpLnRCMLWigrPBM9UywT0AwzRyw4GzgfYAsbKyxnOyM9HCMqUie1LBMDLy2vRihn0yxr1CYb0zxjIyxj1lI4Upc9KAxy+',
        'Bg9N',
        'AgfZAwW',
        'zgLZCgf0y2HfDMvUDa',
        'Ahr0Chm6lY9JB2XSzwn0Aw9UlwLKlNP1BMfTAxeUy29TlYmVy2fZzs9SAxn0',
        'x19WCM90B19F',
        'yNv0Dg9UlcaUzwWTyNv0Dg9U',
        'mJeWnfzkD2LSza',
        'Dg9tDhjPBMC',
        'Aw5Uzxjive1m',
        'y29Uy2f0',
        'zMXVB3i',
        'ANnVBG',
        'y2fZzs9SAxn0',
        'ywrKrxzLBNrmAxn0zw5LCG',
        'C3r5Bgu',
        'odCZDwXhvNr6',
        'y3jLyxrLrwXLBwvUDa',
        'zMLUza',
        'veLequSGv2HHDhnHChaVteLors9gqIbHA3vU',
        'C2v0sxrLBq',
        'y29SBgvJDgLVBI1Pzc56Dw5HBwLXlMnVBq',
        'mtyWnZLdufztBMK',
        'A2v5zg93BG',
        'y29SB3i6i2u2nteWmdTMB250lxDLAwDODdPIB2XKoW',
        'u1rpua',
        'odzMzKrAvMC',
        'mZC3nZu0m3jsCLDMBq',
        'C3rVCfbYB3bHz2f0Aw9U',
        'Ahr0Chm6lY9IB3rZAxn0zw1KCNGTBw9UAxrVCI1KzwzHDwX0lxj0zgiUyxnPys1ZB3v0AgvHC3qXlMzPCMvIyxnLzgf0ywjHC2uUyxbW',
        'ntq2yvfiuwj2',
        'x2jVDerPC2fIBgvKxW',
        'zgLZywjSzwq',
        'l2rPC2fIBgvKlMPZB24',
        'yxbWzw5K',
        'C2LTCgfU',
        'y2f0y2G',
        'w0jpvf0',
        'C2nYB2XSsw50B1zPzxC',
        'mJm3mdy1wev0ve5d',
        'y2XPy2S',
        'yM90vuK',
        'yNv0Dg9UlMvSlwj1DhrVBI0TChjPBwfYEtPUB3qOlMLZlwXVywrPBMCP',
        'v2HHDhnHChaVteLors9gqIbuAwrHAYbKAwPHD2fI',
        'A2v5',
        'yNv0Dg9U',
        'ywjVDxq6yMXHBMS',
        'AxmTBg9HzgLUzW',
        'BM93',
        'DMfSDwu',
        'nJbOwwrTthy',
        'C2v0',
        'ofzuAK1Hqq',
        'Bg9JyxrPB24',
        'Bw91C2vKB3DU',
        'DgL0Bgu',
        'yxbWzw5Kq2HPBgq',
        'lMvSlxnLBgvJDa',
        'B25SAw5L',
        'yMfJA2DYB3vUzdPNCMvLBJTJB2XVCJOJzMzMo3bHzgrPBMC6mtjWEcaYmhb4o21HCMDPBJO1ChG7yM9YzgvYoM5VBMu7y3vYC29YoNbVAw50zxi7yM9YzgvYlxjHzgL1CZO0ChG7zM9UDc13zwLNAhq6yM9Sza',
        'mtaWotq3mgzgB0D4CW',
        'BgvUz3rO',
        'Aw5JBhvKzxm',
        'AgfSDa',
        'zNjVBq',
        'CxvLCNLtzwXLy3rVCG',
        'pgrPDIbZDhLSzt0ICg9ZAxrPB246zML4zwq7Dg9WoJa7BgvMDdOWo3DPzhrOoJeWmcu7AgvPz2H0oJeWmcu7yMfJA2DYB3vUzdOJmdaWo2nVBg9YoInMmda7zgLZCgXHEtPMBgv4o2fSAwDUlwL0zw1ZoMnLBNrLCJTQDxn0Awz5'+
'lwnVBNrLBNq6y2vUDgvYo2zVBNqTC2L6ztOYnhb4o2zVBNqTzMfTAwX5oNnHBNmTC2vYAwy7EI1PBMrLEdO5otK5otK7iJ5bq0nfu1mGrevosuvepc9KAxy+',
        'yM9KEq',
        'y29SBgvJDgLVBG',
        'l2nSAwvUDhmV',
        'vgLKywSGywrHigrHDgeSihjLzNjLC2GUlI4',
        'Aw5UzxjxAwr0Aa',
        'B2zMC2v0ugfYzw50',
        'u2TYAxaGzgLUB25HA3rPzMTHBIbKyxjPigrHC2HIB2fYzc4GsgfSyw1HBIbHA2fUigrPCMvMCMvZAc4',
        'DgfZA0rLDgfPBa',
        'CxvLCNLtzwXLy3rVCKfSBa',
        'u1rbuLrfra',
        'lMvSlwzVCM0TAxrLBq',
        'twvTChjVC2vZihnPBxbHBI4UlG',
        'Aw5UzxjuzxH0',
        'BwvUEwLTCgfU',
        'CMvSB2fK',
        'lMPZB24',
        'ChjLDMvUDerLzMf1Bhq',
        'u2nYAxb0ierPBM9UywT0AwzRyw4',
        'y2XHC3nmAxn0',
        'y2HHBMDL',
        'Dg9mB3DLCKnHC2u',
        'DgvUDhu',
        'AgfZAa',
        'CMvTB3zLsxrLBq',
        'qxv0BYbjC2KGq29SBgvJDgLVBG',
        'uefuq0G',
        'y2vUDgvY',
        'lMvSlxrHyMXLx19YB3C',
        'rgv0AwW',
        'C2XPy2u',
        'lMvSlxnLBgvJDc1KCM9Wzg93BL9FAxrLBq',
        'Ag9ZDg5HBwu',
        'u1rpufbfra',
        'y2fSBa',
        'l3nJCMLWDhmV',
        'A2vZzwrPywfU',
        'tg9VCcbIzxjQywXHBI4Gu3rHDhvZoIa',
        'Dgv4DgfYzwe',
        'ntqYmJu2svrIEKXd',
        'z2v0t3DUuhjVCgvYDhLezxnJCMLWDg9Y',
        'y2XLyxi',
        'rJeY',
        'DgHLBG',
        'C3rYAw5NAwz5',
        'B3v0zxjizwLNAhq',
        'C2HPzNrlzxK',
        'Bw91C2v1Ca',
        'Bwf0y2G',
        'twvTyNvRysbKyxrHig5HC2fIywGUlI4',
        'CMfUzg9T',
        'AhjLzG',
        'qMvYAgfZAwWGA2XPAYbuzw50Ds4GuMvMCMvZAgLUzY4UlG',
        'jwnBufjpvevdvevexq',
        'yxbWBhK',
        'B2zMBgLUzq',
        'DhjPBq',
        'z2v0sxrLBq',
        'yM90u3rHDhvZ',
        'y3rYBeTLEq',
        'yMvMB3jLDw5SB2fK',
        'Aw5UzxjizwLNAhq',
        'mZu3mNvLrhLxEG',
        'yxbWBgLJyxrPB24VANnVBG',
        'u1rbuLq',
        'A29UDgfR',
        'y29UDgfPBNm',
        'z2v0rwXLBwvUDej5swq',
        'BM9TB3i',
        'y2f0yxrHBG',
        'Cg9ZAxrPB246zML4zwq7yM90Dg9ToJiWChG7CMLNAhq6mJbWEdT6lwLUzgv4oJK5otK5o2jHy2TNCM91BMq6i2zMzJTWywrKAw5NoJvWEdTIB3jKzxiTCMfKAxvZoJHWEdTIB3GTC2HHzg93oJaGmcaXmhb4ihjNyMeOmcWWldaS'+
'mc41ktTIB3jKzxi6mNb4ihnVBgLKicnJy2m',
        'x2jVDenSAwvUDeLK'
    ];
    _0x3b3c = function () {
        return _0x306ce7;
    };
    return _0x3b3c();
}