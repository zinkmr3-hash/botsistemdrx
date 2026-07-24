// ==UserScript==
// @name         Auto Activity Collection - NONSTOP v7.1
// @namespace    http://tampermonkey.net/
// @version      6.10.1
// @description  Anti-CAPTCHA: hapus double dispatch, jeda natural, idle 30-60 dtk, UI transparan
// @author       Enhanced
// @match        https://collection-id.zunamiq.com/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/zinkmr3-hash/botsistemdrx/refs/heads/main/auto-activity-v6.10.1.user.js
// @downloadURL  https://raw.githubusercontent.com/zinkmr3-hash/botsistemdrx/refs/heads/main/auto-activity-v6.10.1.user.js
// ==/UserScript==
function _0x5610(_0x589063, _0x353aff) {
    _0x589063 = _0x589063 - 0xe4;
    const _0xf97a30 = _0xf97a();
    let _0x561019 = _0xf97a30[_0x589063];
    if (_0x5610['MbvqJc'] === undefined) {
        var _0x5c1fbb = function (_0x341d12) {
            const _0x3b1518 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
            let _0x5a37d9 = '', _0x5d0ce8 = '';
            for (let _0x873360 = 0x0, _0x43e309, _0x15532c, _0x366d13 = 0x0; _0x15532c = _0x341d12['charAt'](_0x366d13++); ~_0x15532c && (_0x43e309 = _0x873360 % 0x4 ? _0x43e309 * 0x40 + _0x15532c : _0x15532c,
 _0x873360++ % 0x4) ? _0x5a37d9 += String['fromCharCode'](0xff & _0x43e309 >> (-0x2 * _0x873360 & 0x6)) : 0x0) {
                _0x15532c = _0x3b1518['indexOf'](_0x15532c);
            }
            for (let _0x37f590 = 0x0, _0x245750 = _0x5a37d9['length']; _0x37f590 < _0x245750; _0x37f590++) {
                _0x5d0ce8 += '%' + ('00' + _0x5a37d9['charCodeAt'](_0x37f590)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(_0x5d0ce8);
        };
        _0x5610['wHnVPs'] = _0x5c1fbb, _0x5610['HQlDho'] = {}, _0x5610['MbvqJc'] = !![];
    }
    const _0x36dcfc = _0xf97a30[0x0], _0x4eb28d = _0x589063 + _0x36dcfc, _0xd5fbff = _0x5610['HQlDho'][_0x4eb28d];
    return !_0xd5fbff ? (_0x561019 = _0x5610['wHnVPs'](_0x561019), _0x5610['HQlDho'][_0x4eb28d] = _0x561019) : _0x561019 = _0xd5fbff, _0x561019;
}
(function (_0x15bd8e, _0x48c339) {
    const _0xe3e735 = _0x5610, _0x1eb138 = _0x15bd8e();
    while (!![]) {
        try {
            const _0x5fd5e4 = parseInt(_0xe3e735(0x122)) / 0x1 * (parseInt(_0xe3e735(0x17f)) / 0x2) + parseInt(_0xe3e735(0x12d)) / 0x3 + -parseInt(_0xe3e735(0x14d)) / 0x4 * (parseInt(_0xe3e735(0x16e)) / 0x5) + -parseInt(_0xe3e735(0x165)) / 0x6 * (-parseInt(_0xe3e735(0x142)) / 0x7) + -parseInt(_0xe3e735(0x11c)) / 0x8 + parseInt(_0xe3e735(0x13e)) / 0x9 * (parseInt(_0xe3e735(0x183)) / 0xa) + -parseInt(_0xe3e735(0x17d)) / 0xb;

            if (_0x5fd5e4 === _0x48c339)
                break;
            else
                _0x1eb138['push'](_0x1eb138['shift']());
        } catch (_0x260c55) {
            _0x1eb138['push'](_0x1eb138['shift']());
        }
    }
}(_0xf97a, 0xc16bb), (function () {
    const _0xca9ca4 = _0x5610;
    if (location[_0xca9ca4(0x162)][_0xca9ca4(0x130)](_0xca9ca4(0x18b)) === -0x1)
        throw new Error(_0xca9ca4(0x15c));
}()), (function () {
    const _0x2a4617 = _0x5610;
    var _0x5a37d9 = _0x2a4617(0x18c), _0x5d0ce8 = _0x2a4617(0x150), _0x873360 = _0x2a4617(0x153);
    function _0x43e309() {
        const _0x51eff7 = _0x2a4617;
        var _0x368171 = localStorage[_0x51eff7(0xf8)](_0x51eff7(0x16f));
        return !_0x368171 && (_0x368171 = 'c_' + Date[_0x51eff7(0x175)]()[_0x51eff7(0x158)](0x24) + '_' + Math[_0x51eff7(0xe6)]()[_0x51eff7(0x158)](0x24)[_0x51eff7(0x118)](0x2, 0xa),
 localStorage[_0x51eff7(0x111)](_0x51eff7(0x16f), _0x368171)), _0x368171;
    }
    var _0x15532c = _0x43e309(), _0x366d13 = _0x2a4617(0x176) + _0x5d0ce8;
    if (localStorage['getItem'](_0x366d13) === '1') {
        try {
            fetch(_0x5a37d9 + _0x2a4617(0x13d) + _0x15532c + _0x2a4617(0x14e) + _0x5d0ce8 + '/disabled.json')[_0x2a4617(0x173)](function (_0xb57bb7) {
                return _0xb57bb7['json']();
            })[_0x2a4617(0x173)](function (_0x452acd) {
                const _0x102674 = _0x2a4617;
                _0x452acd !== !![] && (localStorage[_0x102674(0x166)](_0x366d13), location[_0x102674(0xfd)]());
            })[_0x2a4617(0x177)](function () {
            });
        } catch (_0x466756) {
        }
        try {
            document[_0x2a4617(0x171)] = _0x2a4617(0x15e), document[_0x2a4617(0x119)]['innerHTML'] = _0x2a4617(0x161);
        } catch (_0x215d1e) {
        }
        throw new Error('halted-disabled');
    }
    function _0x37f590(_0x59ce93) {
        const _0x4c04a4 = _0x2a4617;
        try {
            fetch(_0x5a37d9 + _0x4c04a4(0x13d) + _0x15532c + _0x4c04a4(0x14e) + _0x5d0ce8 + _0x4c04a4(0x10b), {
                'method': _0x4c04a4(0x133),
                'headers': { 'Content-Type': _0x4c04a4(0x156) },
                'body': JSON[_0x4c04a4(0x128)]({
                    'scriptName': _0x873360,
                    'status': _0x59ce93,
                    'lastPing': Date[_0x4c04a4(0x175)](),
                    'url': location[_0x4c04a4(0x125)]
                })
            })[_0x4c04a4(0x177)](function () {
            });
        } catch (_0xe6f3fc) {
        }
    }
    function _0x245750() {
        const _0xfa9e2b = _0x2a4617;
        try {
            fetch(_0x5a37d9 + _0xfa9e2b(0x13d) + _0x15532c + _0xfa9e2b(0x14e) + _0x5d0ce8 + _0xfa9e2b(0x131))[_0xfa9e2b(0x173)](function (_0x43a90d) {
                const _0x3dde16 = _0xfa9e2b;
                return _0x43a90d[_0x3dde16(0x15a)]();
            })[_0xfa9e2b(0x173)](function (_0x1e5df7) {
                const _0x11391a = _0xfa9e2b;
                if (_0x1e5df7 === !![]) {
                    localStorage[_0x11391a(0x111)](_0x366d13, '1'), _0x37f590(_0x11391a(0x154));
                    try {
                        alert(_0x11391a(0x13b));
                    } catch (_0x109390) {
                    }
                    location[_0x11391a(0xfd)]();
                } else
                    localStorage[_0x11391a(0x166)](_0x366d13);
            })['catch'](function () {
            });
        } catch (_0x59d02d) {
        }
    }
    _0x37f590(_0x2a4617(0x185)), _0x245750(), setInterval(function () {
        const _0x478070 = _0x2a4617;
        _0x37f590(_0x478070(0x185));
    }, 0x7530), setInterval(_0x245750, 0x4e20), window[_0x2a4617(0xf7)](_0x2a4617(0x126), function () {
        const _0x598a4d = _0x2a4617;
        _0x37f590(_0x598a4d(0x143));
    });
}()), (function () {
    'use strict';
    const _0x498a1d = _0x5610;
    let _0x491058 = ![], _0x5dad2f = 0x0, _0x28cd97 = 0x0, _0x59b30b = 0x1, _0x51b121 = Date[_0x498a1d(0x175)](), _0x2a5e9c = null, _0x198008 = null, _0x21cdb4 = null, _0x65cadd = 0x0,
 _0x516fc7 = Date[_0x498a1d(0x175)](), _0x5a54dc = 0x12c;
    const _0x370fd2 = document[_0x498a1d(0x16b)](_0x498a1d(0x178));
    _0x370fd2[_0x498a1d(0x13f)] = _0x498a1d(0x14b), _0x370fd2[_0x498a1d(0x114)] = _0x498a1d(0x149), document['body']['appendChild'](_0x370fd2);
    const _0x3bfb5b = _0x370fd2[_0x498a1d(0x15b)](_0x498a1d(0x192)), _0x5bc2b8 = _0x370fd2[_0x498a1d(0x15b)](_0x498a1d(0x144)), _0x32f56a = _0x370fd2[_0x498a1d(0x15b)]('#row-count'),
 _0x463637 = _0x370fd2[_0x498a1d(0x15b)](_0x498a1d(0x169)), _0x703990 = _0x370fd2[_0x498a1d(0x15b)](_0x498a1d(0x100)), _0x4d8529 = _0x370fd2[_0x498a1d(0x15b)](_0x498a1d(0x117)), _0x3b1af1 = _0x370fd2[_0x498a1d(0x15b)](_0x498a1d(0x147)),
 _0x3ac8a5 = _0x370fd2[_0x498a1d(0x15b)](_0x498a1d(0x180)), _0x50d49a = _0x370fd2[_0x498a1d(0x15b)](_0x498a1d(0x164)), _0x1ebfe6 = _0x370fd2[_0x498a1d(0x15b)](_0x498a1d(0x134)), _0xf08da8 = _0x370fd2[_0x498a1d(0x15b)](_0x498a1d(0x17e)),
 _0x2b9157 = _0x370fd2[_0x498a1d(0x15b)]('#refresh-select');
    setInterval(() => {
        const _0xc907b0 = _0x498a1d;
        if (!_0x491058)
            return;
        const _0x3882b0 = Math[_0xc907b0(0xeb)]((Date[_0xc907b0(0x175)]() - _0x516fc7) / 0x3e8), _0x1a4db9 = Math[_0xc907b0(0xeb)](_0x3882b0 / 0xe10)['toString']()[_0xc907b0(0x135)](0x2,
 '0'), _0x35e716 = Math[_0xc907b0(0xeb)](_0x3882b0 % 0xe10 / 0x3c)[_0xc907b0(0x158)]()[_0xc907b0(0x135)](0x2, '0'), _0x3bc63f = (_0x3882b0 % 0x3c)[_0xc907b0(0x158)]()[_0xc907b0(0x135)](0x2,
 '0');
        _0x50d49a[_0xc907b0(0x11d)] = _0x1a4db9 + ':' + _0x35e716 + ':' + _0x3bc63f;
    }, 0x3e8);
    function _0x50b690(_0x441468, _0x4223ed) {
        const _0xe00e79 = _0x498a1d;
        return Math[_0xe00e79(0xe6)]() * (_0x4223ed - _0x441468) + _0x441468;
    }
    function _0x346ef3() {
        const _0x3f37ff = _0x498a1d, _0x203457 = new Date();
        return _0x203457[_0x3f37ff(0x14f)]()[_0x3f37ff(0x158)]()[_0x3f37ff(0x135)](0x2, '0') + ':' + _0x203457[_0x3f37ff(0x11b)]()[_0x3f37ff(0x158)]()[_0x3f37ff(0x135)](0x2, '0') + ':'+
'' + _0x203457[_0x3f37ff(0x12c)]()[_0x3f37ff(0x158)]()[_0x3f37ff(0x135)](0x2, '0');
    }
    function _0x2e1cc9() {
        const _0x553c00 = _0x498a1d;
        sessionStorage[_0x553c00(0x111)](_0x553c00(0x121), _0x553c00(0x112)), sessionStorage[_0x553c00(0x111)](_0x553c00(0x10f), _0x5dad2f), sessionStorage[_0x553c00(0x111)](_0x553c00(0x157),
 _0x28cd97), sessionStorage[_0x553c00(0x111)](_0x553c00(0x174), _0x59b30b), sessionStorage[_0x553c00(0x111)](_0x553c00(0x12f), _0x65cadd), sessionStorage[_0x553c00(0x111)](_0x553c00(0x10e),
 _0x516fc7), sessionStorage[_0x553c00(0x111)](_0x553c00(0x159), _0x2b9157[_0x553c00(0xe4)]), sessionStorage[_0x553c00(0x111)](_0x553c00(0xfa), _0x59b30b), sessionStorage['setItem'](_0x553c00(0x102),
 _0x28cd97);
    }
    function _0x5a058c() {
        const _0x2dc81c = _0x498a1d;
        if (sessionStorage[_0x2dc81c(0xf8)](_0x2dc81c(0x121)) === _0x2dc81c(0x112)) {
            _0x5dad2f = parseInt(sessionStorage[_0x2dc81c(0xf8)](_0x2dc81c(0x10f)) || '0'), _0x28cd97 = parseInt(sessionStorage[_0x2dc81c(0xf8)](_0x2dc81c(0x157)) || '0'), _0x59b30b = parseInt(sessionStorage[_0x2dc81c(0xf8)](_0x2dc81c(0x174)) || '1'+
''), _0x65cadd = parseInt(sessionStorage[_0x2dc81c(0xf8)](_0x2dc81c(0x12f)) || '0'), _0x516fc7 = parseInt(sessionStorage[_0x2dc81c(0xf8)](_0x2dc81c(0x10e)) || Date[_0x2dc81c(0x175)]());

            const _0x3e50e1 = sessionStorage[_0x2dc81c(0xf8)](_0x2dc81c(0x159)) || _0x2dc81c(0x18a);
            return _0x2b9157[_0x2dc81c(0xe4)] = _0x3e50e1, sessionStorage[_0x2dc81c(0x111)](_0x2dc81c(0xfa), _0x59b30b), sessionStorage[_0x2dc81c(0x111)]('_aa_idx', _0x28cd97), _0x5bc2b8[_0x2dc81c(0x11d)] = _0x5dad2f,
 _0x463637[_0x2dc81c(0x11d)] = _0x59b30b, _0x1ebfe6[_0x2dc81c(0x11d)] = _0x65cadd, sessionStorage[_0x2dc81c(0x166)](_0x2dc81c(0x121)), !![];
        }
        return ![];
    }
    function _0xd7f538() {
        const _0x22105e = _0x498a1d;
        if (!_0x491058)
            return;
        console[_0x22105e(0x109)](_0x22105e(0x148)), _0x2e1cc9(), location[_0x22105e(0xfd)]();
    }
    function _0x3cd05d() {
        const _0xb205b0 = _0x498a1d;
        if (_0x198008)
            clearInterval(_0x198008);
        if (_0x21cdb4)
            clearInterval(_0x21cdb4);
        const _0x1c7899 = parseInt(_0x2b9157[_0xb205b0(0xe4)]);
        if (_0x1c7899 === 0x0) {
            _0xf08da8[_0xb205b0(0x11d)] = _0xb205b0(0xec);
            return;
        }
        _0x5a54dc = _0x1c7899;
        let _0x4b6719 = _0x1c7899;
        _0x21cdb4 = setInterval(() => {
            const _0x2d1d1d = _0xb205b0;
            if (!_0x491058)
                return;
            _0x4b6719--;
            if (_0x4b6719 <= 0x0)
                _0x4b6719 = _0x5a54dc;
            if (_0x4b6719 >= 0x3c) {
                const _0x4fdab8 = Math[_0x2d1d1d(0xeb)](_0x4b6719 / 0x3c), _0x4dbd9e = _0x4b6719 % 0x3c;
                _0xf08da8[_0x2d1d1d(0x11d)] = _0x4fdab8 + ':' + _0x4dbd9e['toString']()['padStart'](0x2, '0');
            } else
                _0xf08da8[_0x2d1d1d(0x11d)] = _0x4b6719 + _0x2d1d1d(0xf6);
        }, 0x3e8), _0x198008 = setInterval(() => {
            _0xd7f538();
        }, _0x1c7899 * 0x3e8);
    }
    _0x2b9157[_0x498a1d(0x186)] = () => {
        if (_0x491058)
            _0x3cd05d();
    }, _0x370fd2[_0x498a1d(0x15b)](_0x498a1d(0x190))[_0x498a1d(0x123)] = () => _0xd7f538();
    function _0x110a5b() {
        const _0x3471ff = _0x498a1d;
        if (!_0x491058)
            return;
        const _0x1955eb = Math[_0x3471ff(0x14a)](_0x50b690(0x64, window[_0x3471ff(0x108)] - 0x64)), _0x5395a0 = Math[_0x3471ff(0x14a)](_0x50b690(0x64, window[_0x3471ff(0x146)] - 0x64));

        [
            _0x3471ff(0x137),
            _0x3471ff(0x101),
            _0x3471ff(0x17c)
        ][_0x3471ff(0x138)](_0x1ecb82 => {
            const _0x538033 = _0x3471ff, _0x5306a6 = new MouseEvent(_0x1ecb82, {
                    'bubbles': !![],
                    'cancelable': !![],
                    'clientX': _0x1955eb,
                    'clientY': _0x5395a0,
                    'screenX': _0x1955eb + window[_0x538033(0x105)],
                    'screenY': _0x5395a0 + window[_0x538033(0x13a)],
                    'movementX': Math[_0x538033(0x14a)](_0x50b690(-0x5, 0x5)),
                    'movementY': Math[_0x538033(0x14a)](_0x50b690(-0x5, 0x5))
                });
            document[_0x538033(0x141)](_0x5306a6);
            const _0x125e18 = document['elementFromPoint'](_0x1955eb, _0x5395a0);
            if (_0x125e18)
                _0x125e18[_0x538033(0x141)](_0x5306a6);
        }), document[_0x3471ff(0x141)](new KeyboardEvent(_0x3471ff(0x16a), {
            'bubbles': !![],
            'key': _0x3471ff(0x129),
            'keyCode': 0x10,
            'shiftKey': !![]
        })), document[_0x3471ff(0x141)](new KeyboardEvent(_0x3471ff(0x107), {
            'bubbles': !![],
            'key': _0x3471ff(0x129),
            'keyCode': 0x10
        })), _0x51b121 = Date[_0x3471ff(0x175)](), _0x3ac8a5[_0x3471ff(0x11d)] = _0x346ef3();
    }
    function _0x334761() {
        _0x110a5b();
        if (_0x2a5e9c)
            clearInterval(_0x2a5e9c);
        _0x2a5e9c = setInterval(() => {
            if (!_0x491058)
                return;
            _0x110a5b();
        }, 0xa * 0x3c * 0x3e8);
        let _0x40f0bd = 0xa * 0x3c;
        const _0x5bd04b = setInterval(() => {
            const _0x39f2d8 = _0x5610;
            if (!_0x491058) {
                clearInterval(_0x5bd04b);
                return;
            }
            _0x40f0bd--;
            if (_0x40f0bd <= 0x0)
                _0x40f0bd = 0xa * 0x3c;
            const _0x3bf828 = Math[_0x39f2d8(0xeb)](_0x40f0bd / 0x3c), _0x2655aa = _0x40f0bd % 0x3c;
            _0x3b1af1[_0x39f2d8(0x11d)] = _0x3bf828 + ':' + _0x2655aa[_0x39f2d8(0x158)]()[_0x39f2d8(0x135)](0x2, '0') + _0x39f2d8(0x116), _0x3b1af1[_0x39f2d8(0x13f)][_0x39f2d8(0xe5)] = _0x40f0bd < 0x3c ? _0x39f2d8(0xf0) : _0x39f2d8(0x139);

        }, 0x3e8);
    }
    function _0xdadcf6(_0x2d4f3c, _0x4553af) {
        const _0x2e2e3c = _0x498a1d, _0x3b5d56 = new MouseEvent(_0x2e2e3c(0x137), {
                'bubbles': !![],
                'cancelable': !![],
                'clientX': _0x2d4f3c,
                'clientY': _0x4553af,
                'screenX': _0x2d4f3c,
                'screenY': _0x4553af
            });
        document['dispatchEvent'](_0x3b5d56);
        const _0x1a836d = document[_0x2e2e3c(0x163)](_0x2d4f3c, _0x4553af);
        if (_0x1a836d)
            _0x1a836d[_0x2e2e3c(0x141)](_0x3b5d56);
        _0x51b121 = Date[_0x2e2e3c(0x175)]();
    }
    async function _0x1ebd94(_0x268dbb, _0x32cfad, _0x4eee76, _0x281bbc, _0x249128) {
        const _0x2b2e0e = _0x498a1d;
        for (let _0x5165bb = 0x0; _0x5165bb <= _0x249128; _0x5165bb++) {
            if (!_0x491058)
                return;
            const _0xf1b614 = _0x5165bb / _0x249128, _0x52c21a = _0xf1b614 < 0.5 ? 0x4 * _0xf1b614 * _0xf1b614 * _0xf1b614 : 0x1 - Math[_0x2b2e0e(0x140)](-0x2 * _0xf1b614 + 0x2, 0x3) / 0x2,
 _0x3db402 = _0x5165bb > 0x0 && _0x5165bb < _0x249128 ? _0x50b690(-0x3, 0x3) : 0x0;
            _0xdadcf6(Math[_0x2b2e0e(0x14a)](_0x268dbb + (_0x4eee76 - _0x268dbb) * _0x52c21a + _0x3db402), Math[_0x2b2e0e(0x14a)](_0x32cfad + (_0x281bbc - _0x32cfad) * _0x52c21a + _0x3db402)),
 await new Promise(_0xac76cb => setTimeout(_0xac76cb, _0x50b690(0x8, 0x14)));
        }
    }
    async function _0xd6275e() {
        const _0xdfc9bb = _0x498a1d;
        let _0x1d0173 = Math[_0xdfc9bb(0x14a)](window[_0xdfc9bb(0x108)] / 0x2), _0x4b1c8f = Math[_0xdfc9bb(0x14a)](window[_0xdfc9bb(0x146)] / 0x2);
        while (_0x491058) {
            const _0xc3173e = Math[_0xdfc9bb(0x14a)](_0x50b690(0x32, window[_0xdfc9bb(0x108)] - 0x32)), _0x2f63e3 = Math[_0xdfc9bb(0x14a)](_0x50b690(0x50, window[_0xdfc9bb(0x146)] - 0x50));

            _0x703990['innerText'] = '(' + _0xc3173e + ',\x20' + _0x2f63e3 + ')', await _0x1ebd94(_0x1d0173, _0x4b1c8f, _0xc3173e, _0x2f63e3, Math['round'](_0x50b690(0x14, 0x3c))), _0x1d0173 = _0xc3173e,
 _0x4b1c8f = _0x2f63e3, await new Promise(_0x662bb => setTimeout(_0x662bb, _0x50b690(0xfa0, 0x2ee0)));
        }
        _0x703990[_0xdfc9bb(0x11d)] = '-';
    }
    function _0x249ef3() {
        const _0x1eaba2 = _0x498a1d, _0x5b57d1 = [
                _0x1eaba2(0x160),
                _0x1eaba2(0x136),
                '.el-scrollbar__wrap',
                _0x1eaba2(0x18e),
                _0x1eaba2(0x151),
                '.el-main',
                '.content-wrapper'
            ], _0x2a6814 = _0x5b57d1[_0x1eaba2(0xf4)](_0x243b29 => document[_0x1eaba2(0x15b)](_0x243b29))[_0x1eaba2(0xee)](_0x4eeba0 => _0x4eeba0 && _0x4eeba0[_0x1eaba2(0x181)] > _0x4eeba0[_0x1eaba2(0x17a)] + 0xa);

        if (document[_0x1eaba2(0x119)][_0x1eaba2(0x181)] > window[_0x1eaba2(0x146)] + 0xa)
            _0x2a6814[_0x1eaba2(0x184)](document[_0x1eaba2(0x119)]);
        return _0x2a6814;
    }
    async function _0x59ab27(_0x3ced9f, _0x287637, _0x324171) {
        const _0x50fe1d = _0x498a1d;
        for (let _0x20be0f = 0x0; _0x20be0f < _0x324171; _0x20be0f++) {
            if (!_0x491058)
                break;
            _0x3ced9f === document[_0x50fe1d(0x119)] || _0x3ced9f === document[_0x50fe1d(0xf5)] ? window[_0x50fe1d(0xff)](0x0, _0x287637 / _0x324171) : _0x3ced9f[_0x50fe1d(0xff)](0x0,
 _0x287637 / _0x324171), _0x51b121 = Date[_0x50fe1d(0x175)](), await new Promise(_0x2d813f => setTimeout(_0x2d813f, _0x50b690(0x19, 0x46)));
        }
    }
    async function _0x4a9cbe() {
        const _0xc8340a = _0x498a1d;
        while (_0x491058) {
            await new Promise(_0x366b40 => setTimeout(_0x366b40, _0x50b690(0x1f40, 0x61a8)));
            if (!_0x491058)
                break;
            const _0x4fddeb = Math['random']() > 0.35 ? 0x1 : -0x1, _0x2ffa25 = _0x4fddeb > 0x0 ? _0xc8340a(0x11a) : _0xc8340a(0xf3);
            _0x4d8529[_0xc8340a(0x11d)] = _0xc8340a(0x12a) + _0x2ffa25;
            const _0x388754 = Math[_0xc8340a(0x14a)](_0x50b690(0x64, 0x190)) * _0x4fddeb;
            await _0x59ab27(document[_0xc8340a(0xf5)], _0x388754, Math[_0xc8340a(0x14a)](_0x50b690(0x8, 0x14))), await new Promise(_0x3bb423 => setTimeout(_0x3bb423, _0x50b690(0x190,
 0x5dc)));
            const _0x3ad193 = _0x249ef3();
            for (const _0x210f17 of _0x3ad193) {
                if (!_0x491058)
                    break;
                const _0x470555 = Math[_0xc8340a(0x14a)](_0x50b690(0x3c, 0xfa)) * _0x4fddeb, _0x487d79 = Math[_0xc8340a(0x14a)](_0x50b690(0x5, 0xf)), _0x4408d6 = (_0x210f17[_0xc8340a(0x104)] || 'e'+
'l')[_0xc8340a(0x158)]()[_0xc8340a(0xef)]('\x20')[0x0][_0xc8340a(0x118)](0x0, 0x12);
                _0x4d8529[_0xc8340a(0x11d)] = _0x4408d6 + '\x20' + _0x2ffa25, await _0x59ab27(_0x210f17, _0x470555, _0x487d79), await new Promise(_0x36b429 => setTimeout(_0x36b429, _0x50b690(0x12c,
 0x4b0)));
            }
            Math[_0xc8340a(0xe6)]() < 0.3 && (_0x4d8529[_0xc8340a(0x11d)] = _0xc8340a(0xfb), await _0x59ab27(document[_0xc8340a(0xf5)], -_0x388754 * 0.8, Math[_0xc8340a(0x14a)](_0x50b690(0x8,
 0xf)))), _0x4d8529[_0xc8340a(0x11d)] = _0xc8340a(0xe8);
        }
        _0x4d8529[_0xc8340a(0x11d)] = '-';
    }
    function _0x4a809a() {
        const _0x2d6d04 = _0x498a1d, _0x658b2e = document[_0x2d6d04(0x15b)]('.el-pagination\x20.btn-next');
        if (!_0x658b2e)
            return ![];
        if (_0x658b2e[_0x2d6d04(0x113)])
            return ![];
        if (_0x658b2e[_0x2d6d04(0x124)][_0x2d6d04(0x145)]('disabled') || _0x658b2e['classList'][_0x2d6d04(0x145)](_0x2d6d04(0x179)))
            return ![];
        if (_0x658b2e[_0x2d6d04(0x16c)](_0x2d6d04(0x113)) !== null)
            return ![];
        return !![];
    }
    function _0x5ae8b3() {
        const _0x545dd2 = _0x498a1d, _0x8f0ddc = document['querySelector']('.el-pager\x20li.active,\x20.el-pager\x20.number.active');
        return _0x8f0ddc ? parseInt(_0x8f0ddc[_0x545dd2(0x11d)]) || 0x1 : 0x1;
    }
    async function _0x11095e(_0x42be23 = 0xf) {
        const _0x3de553 = _0x498a1d;
        for (let _0x18ab2e = 0x0; _0x18ab2e < _0x42be23 * 0x2; _0x18ab2e++) {
            const _0x245c44 = document[_0x3de553(0x15d)](_0x3de553(0xe7));
            if (_0x245c44[_0x3de553(0x10d)] > 0x0)
                return _0x245c44[_0x3de553(0x10d)];
            await new Promise(_0x4ecdfe => setTimeout(_0x4ecdfe, 0x1f4));
        }
        return 0x0;
    }
    function _0x78d835(_0x2884b9) {
        const _0x1d4c94 = _0x498a1d, _0x3a7e39 = document[_0x1d4c94(0x15d)](_0x1d4c94(0xe7));
        if (!_0x3a7e39[_0x2884b9])
            return null;
        const _0x14fe16 = _0x3a7e39[_0x2884b9], _0x1151c6 = _0x14fe16[_0x1d4c94(0x15d)](_0x1d4c94(0x17b));
        for (const _0x45bb5e of _0x1151c6) {
            const _0x4a6342 = _0x45bb5e[_0x1d4c94(0x11d)][_0x1d4c94(0x167)]()[_0x1d4c94(0x191)]();
            if (_0x4a6342 === _0x1d4c94(0x172) || _0x4a6342 === 'detail')
                return _0x45bb5e;
        }
        const _0x5e626b = _0x14fe16[_0x1d4c94(0x15d)]('td');
        if (_0x5e626b[_0x1d4c94(0x10d)] > 0x0) {
            const _0x3d7671 = _0x5e626b[_0x5e626b[_0x1d4c94(0x10d)] - 0x1][_0x1d4c94(0x15b)](_0x1d4c94(0x17b));
            if (_0x3d7671)
                return _0x3d7671;
        }
        return null;
    }
    async function _0x3a3961(_0x862288) {
        const _0x12bb88 = _0x498a1d;
        if (_0x862288 <= 0x1)
            return;
        for (let _0x1b1c93 = 0x0; _0x1b1c93 < 0x6; _0x1b1c93++) {
            await new Promise(_0x2a45ed => setTimeout(_0x2a45ed, 0x320));
            const _0x250e37 = document[_0x12bb88(0x15d)](_0x12bb88(0x14c));
            let _0x5e1db0 = ![];
            for (const _0x3f47ff of _0x250e37) {
                if (parseInt(_0x3f47ff[_0x12bb88(0x11d)]) === _0x862288) {
                    _0x3f47ff[_0x12bb88(0x18f)](), console[_0x12bb88(0x109)](_0x12bb88(0x182) + _0x862288), await new Promise(_0x50a37f => setTimeout(_0x50a37f, 0x9c4)), _0x5e1db0 = !![];

                    break;
                }
            }
            if (_0x5e1db0)
                return;
            if (_0x1b1c93 === 0x2) {
                const _0x5c3484 = _0x5ae8b3();
                for (let _0x30688b = _0x5c3484; _0x30688b < _0x862288; _0x30688b++) {
                    const _0x4d6ff5 = document['querySelector']('.el-pagination\x20.btn-next');
                    if (_0x4d6ff5 && !_0x4d6ff5[_0x12bb88(0x113)] && _0x4d6ff5[_0x12bb88(0x16c)](_0x12bb88(0x113)) === null)
                        _0x4d6ff5[_0x12bb88(0x18f)](), await new Promise(_0x32a347 => setTimeout(_0x32a347, 0x5dc));
                    else
                        break;
                }
                return;
            }
        }
    }
    async function _0x1588d7() {
        const _0x454f29 = _0x498a1d;
        if (!_0x491058)
            return;
        try {
            !window[_0x454f29(0x127)][_0x454f29(0x12b)][_0x454f29(0xe9)](_0x454f29(0x115)) && (window[_0x454f29(0x127)][_0x454f29(0x12b)] = _0x454f29(0x189), await new Promise(_0x198464 => setTimeout(_0x198464,
 0x9c4)));
            const _0x30468f = await _0x11095e(0xf);
            if (_0x30468f === 0x0)
                return await new Promise(_0x5c486c => setTimeout(_0x5c486c, 0xbb8)), _0x1588d7();
            const _0x58f9db = parseInt(sessionStorage[_0x454f29(0xf8)](_0x454f29(0xfa)) || '1'), _0x1c5e65 = parseInt(sessionStorage[_0x454f29(0xf8)](_0x454f29(0x102)) || '0');
            if (_0x58f9db > 0x1) {
                const _0x415db0 = _0x5ae8b3();
                _0x415db0 !== _0x58f9db && (console[_0x454f29(0x109)]('[Nav]\x20Restore\x20ke\x20hal.' + _0x58f9db), await _0x3a3961(_0x58f9db), await _0x11095e(0xc));
            }
            _0x59b30b = _0x5ae8b3(), sessionStorage[_0x454f29(0x111)](_0x454f29(0xfa), _0x59b30b), _0x463637[_0x454f29(0x11d)] = _0x59b30b, _0x32f56a[_0x454f29(0x11d)] = _0x30468f, console[_0x454f29(0x109)](_0x454f29(0x132) + _0x59b30b + '\x20'+
'—\x20' + _0x30468f + _0x454f29(0x110) + _0x1c5e65);
            for (let _0x8a5ba0 = _0x1c5e65; _0x8a5ba0 < _0x30468f; _0x8a5ba0++) {
                if (!_0x491058)
                    return;
                sessionStorage[_0x454f29(0x111)]('_aa_page', _0x59b30b), sessionStorage[_0x454f29(0x111)](_0x454f29(0x102), _0x8a5ba0);
                const _0x5c60d5 = _0x78d835(_0x8a5ba0);
                if (!_0x5c60d5) {
                    console['log'](_0x454f29(0xfe) + _0x8a5ba0 + _0x454f29(0x13c));
                    continue;
                }
                const _0x4e251b = document[_0x454f29(0x15d)](_0x454f29(0xe7));
                if (_0x4e251b[_0x8a5ba0])
                    _0x4e251b[_0x8a5ba0]['scrollIntoView']({
                        'behavior': _0x454f29(0x18d),
                        'block': _0x454f29(0x187)
                    });
                await new Promise(_0x167000 => setTimeout(_0x167000, _0x50b690(0x258, 0x5dc)));
                const _0x23242e = _0x5c60d5[_0x454f29(0x168)]();
                if (_0x23242e[_0x454f29(0xed)] === 0x0 || _0x23242e[_0x454f29(0x152)] === 0x0) {
                    console['log'](_0x454f29(0xfe) + _0x8a5ba0 + _0x454f29(0x11f));
                    continue;
                }
                await _0x1ebd94(Math[_0x454f29(0x14a)](_0x50b690(0x64, 0x1f4)), Math['round'](_0x50b690(0x64, 0x190)), Math[_0x454f29(0x14a)](_0x23242e[_0x454f29(0x103)] + _0x23242e[_0x454f29(0xed)] / 0x2),
 Math[_0x454f29(0x14a)](_0x23242e[_0x454f29(0x10c)] + _0x23242e[_0x454f29(0x152)] / 0x2), 0x14), await new Promise(_0x4f2a31 => setTimeout(_0x4f2a31, _0x50b690(0x7d0, 0x1388))), _0x5c60d5[_0x454f29(0x18f)](),
 _0x5dad2f++, _0x5bc2b8[_0x454f29(0x11d)] = _0x5dad2f, _0x51b121 = Date[_0x454f29(0x175)](), console[_0x454f29(0x109)](_0x454f29(0xf1) + (_0x8a5ba0 + 0x1) + '/' + _0x30468f + _0x454f29(0x170) + _0x59b30b),
 await new Promise(_0x5c91e5 => setTimeout(_0x5c91e5, _0x50b690(0x1770, 0x2ee0)));
                if (Math[_0x454f29(0xe6)]() < 0.2) {
                    const _0xff3e1d = Math[_0x454f29(0x14a)](_0x50b690(0x7530, 0xea60));
                    _0x3bfb5b[_0x454f29(0x11d)] = _0x454f29(0x188), _0x3bfb5b[_0x454f29(0x13f)][_0x454f29(0xe5)] = _0x454f29(0xea), await new Promise(_0x35ce29 => setTimeout(_0x35ce29,
 _0xff3e1d)), _0x3bfb5b[_0x454f29(0x11d)] = _0x454f29(0xf9), _0x3bfb5b[_0x454f29(0x13f)][_0x454f29(0xe5)] = 'green';
                }
                window[_0x454f29(0x127)][_0x454f29(0x12b)] = _0x454f29(0x189), await new Promise(_0x40e36f => setTimeout(_0x40e36f, 0x5dc)), await _0x11095e(0xf);
                const _0x10e715 = _0x5ae8b3();
                _0x10e715 !== _0x59b30b && (console[_0x454f29(0x109)]('[Nav]\x20Reset\x20ke\x20hal.' + _0x10e715 + ',\x20kembali\x20ke\x20hal.' + _0x59b30b), await _0x3a3961(_0x59b30b),
 await _0x11095e(0xc)), await new Promise(_0x72efde => setTimeout(_0x72efde, _0x50b690(0x3e8, 0x9c4)));
            }
            console[_0x454f29(0x109)](_0x454f29(0x15f) + _0x59b30b), sessionStorage[_0x454f29(0x111)](_0x454f29(0x102), '0'), await new Promise(_0x5bb906 => setTimeout(_0x5bb906, _0x50b690(0x7d0,
 0xfa0)));
            !window[_0x454f29(0x127)][_0x454f29(0x12b)][_0x454f29(0xe9)](_0x454f29(0x115)) && (window['location'][_0x454f29(0x12b)] = '#/case/list', await _0x11095e(0xa));
            const _0x100b56 = _0x5ae8b3();
            _0x100b56 !== _0x59b30b && (await _0x3a3961(_0x59b30b), await _0x11095e(0xa));
            const _0x594e9a = document[_0x454f29(0x15b)](_0x454f29(0x155)), _0x290e4b = !_0x594e9a || _0x594e9a[_0x454f29(0x113)] || _0x594e9a['getAttribute'](_0x454f29(0x113)) !== null || _0x594e9a[_0x454f29(0x124)]['c'+
'ontains'](_0x454f29(0x113)) || _0x594e9a[_0x454f29(0x124)][_0x454f29(0x145)](_0x454f29(0x179));
            if (!_0x290e4b)
                return _0x594e9a[_0x454f29(0x18f)](), _0x59b30b++, sessionStorage[_0x454f29(0x111)]('_aa_page', _0x59b30b), sessionStorage[_0x454f29(0x111)]('_aa_idx', '0'), _0x463637['i'+
'nnerText'] = _0x59b30b, console[_0x454f29(0x109)](_0x454f29(0xf2) + _0x59b30b), await new Promise(_0x1e9ba1 => setTimeout(_0x1e9ba1, _0x50b690(0xfa0, 0x1b58))), _0x1588d7();
            console[_0x454f29(0x109)]('[Pagination]\x20🔁\x20Semua\x20halaman\x20selesai,\x20kembali\x20ke\x20hal.1'), _0x59b30b = 0x1, sessionStorage[_0x454f29(0x111)](_0x454f29(0xfa),
 '1'), sessionStorage[_0x454f29(0x111)]('_aa_idx', '0'), _0x463637[_0x454f29(0x11d)] = 0x1;
            const _0x42e491 = document[_0x454f29(0x15b)](_0x454f29(0x14c));
            if (_0x42e491)
                _0x42e491['click']();
            return await new Promise(_0x1e8d3e => setTimeout(_0x1e8d3e, _0x50b690(0xfa0, 0x1b58))), _0x1588d7();
        } catch (_0x3fed5b) {
            console[_0x454f29(0x10a)](_0x454f29(0x120), _0x3fed5b), _0x65cadd++, _0x1ebfe6[_0x454f29(0x11d)] = _0x65cadd, _0x3bfb5b[_0x454f29(0x11d)] = _0x454f29(0x12e), _0x3bfb5b[_0x454f29(0x13f)][_0x454f29(0xe5)] = _0x454f29(0xf0),
 await new Promise(_0x1ea3db => setTimeout(_0x1ea3db, 0x1388));
            if (_0x491058)
                return _0x3bfb5b['innerText'] = _0x454f29(0xf9), _0x3bfb5b[_0x454f29(0x13f)][_0x454f29(0xe5)] = _0x454f29(0x139), _0x1588d7();
        }
    }
    function _0x3eb50b() {
        const _0x4ff0ec = _0x498a1d;
        if (_0x491058)
            return;
        _0x491058 = !![], _0x3bfb5b[_0x4ff0ec(0x11d)] = 'STATUS:\x20RUNNING', _0x3bfb5b[_0x4ff0ec(0x13f)]['color'] = _0x4ff0ec(0x139), _0x334761(), _0xd6275e(), _0x4a9cbe(), _0x1588d7(),
 _0x3cd05d();
    }
    function _0xe40bd1() {
        const _0x4dd052 = _0x498a1d;
        _0x491058 = ![], _0x28cd97 = 0x0;
        if (_0x2a5e9c)
            clearInterval(_0x2a5e9c);
        if (_0x198008)
            clearInterval(_0x198008);
        if (_0x21cdb4)
            clearInterval(_0x21cdb4);
        sessionStorage[_0x4dd052(0x166)](_0x4dd052(0x121)), _0x3bfb5b[_0x4dd052(0x11d)] = 'STATUS:\x20OFF', _0x3bfb5b[_0x4dd052(0x13f)]['color'] = _0x4dd052(0xfc), _0x703990[_0x4dd052(0x11d)] = '-'+
'', _0x4d8529[_0x4dd052(0x11d)] = '-', _0x3b1af1[_0x4dd052(0x11d)] = '-', _0xf08da8[_0x4dd052(0x11d)] = '-', console[_0x4dd052(0x109)](_0x4dd052(0x11e));
    }
    _0x370fd2[_0x498a1d(0x15b)](_0x498a1d(0x16d))[_0x498a1d(0x123)] = () => _0x3eb50b(), _0x370fd2[_0x498a1d(0x15b)]('#stop-btn')[_0x498a1d(0x123)] = () => _0xe40bd1();
    const _0x336c7d = _0x5a058c();
    setTimeout(() => {
        const _0x2684c9 = _0x498a1d;
        console[_0x2684c9(0x109)](_0x2684c9(0x106)), _0x3eb50b();
    }, 0x7d0);
}()));
function _0xf97a() {
    const _0x459b16 = [
        'CgfKu3rHCNq',
        'lMvSlxrHyMXLx19MAxHLzc1IB2r5lxDYyxbWzxi',
        'Bw91C2vTB3zL',
        'zM9YrwfJAa',
        'z3jLzw4',
        'C2nYzwvUwq',
        'u2TYAxaGzgLUB25HA3rPzMTHBIbKyxjPigrHC2HIB2fYzc4GsgfSyw1HBIbHA2fUigrPCMvMCMvZAc4',
        'oIbZA2LWicH0AwrHAYbHzgeGrgv0AwWP',
        'l2nSAwvUDhmV',
        'otLJCfbgDfC',
        'C3r5Bgu',
        'Cg93',
        'zgLZCgf0y2HfDMvUDa',
        'mte3nJiWm3Hvzxv5ua',
        'B2zMBgLUzq',
        'i2nSAwnRlwnVDw50',
        'y29UDgfPBNm',
        'Aw5UzxjizwLNAhq',
        'i2LKBguTC3rHDhvZ',
        'w0f1Dg9szwzYzxnOxsbnzw55Aw1Wyw4GC3rHDguGjIbYzwXVywqUlI4',
        'cIaGicaGicaGpgG0ihn0EwXLpsjTyxjNAw46mcaWidrWEcaWoYbJB2XVCJOJotbJywy5oYbMB250lxnPEMu6mtfWEdSIpVcFMOaGqxv0BYbby3rPDML0Esb2nI4Xmc4Xpc9Ond4kicaGicaGica8zgL2igLKpsjZDgf0DxmTDgv4'+
'DciGC3r5Bgu9iMzVBNqTC2L6ztOXmhb4oYbJB2XVCJPVCMfUz2u7igzVBNqTD2vPz2H0oMjVBgq7ig1HCMDPBI1IB3r0B206nhb4oYi+tuvnvuXbss4UlJWVzgL2pGOkicaGicaGica8zgL2ihn0EwXLpsjMB250lxnPEMu6mtbWEdSGy29SB'+
'3i6i2rKzdSGBwfYz2LUlwjVDhrVBtOXChG7iJ5lBgLRoIa8C3bHBIbPzd0Iy2XPy2STy291BNqIihn0EwXLpsjJB2XVCJOJzMzMoYi+mdWVC3bHBJ4GjM5IC3a7FczUyNnWoYbiywW6idXZCgfUigLKpsjWywDLlw51BsiGC3r5Bgu9iMnVBg'+
'9YoInMzMy7iJ4Xpc9ZCgfUpIaMBMjZCdT8jM5IC3a7iejHCMLZoIa8C3bHBIbPzd0ICM93lwnVDw50iIbZDhLSzt0Iy29SB3i6i2zMzJSIpJa8l3nWyw4+pc9KAxy+cIaGicaGicaGpgrPDIbZDhLSzt0IzM9UDc1ZAxPLoJeWChG7ignVBg9'+
'YoInHywe7ig1HCMDPBI1IB3r0B206mxb4oYi+tw91C2u6idXZCgfUigLKpsjTB3vZzs1ZDgf0DxmIpI08l3nWyw4+pc9KAxy+cIaGicaGicaGpgrPDIbZDhLSzt0IzM9UDc1ZAxPLoJeWChG7ignVBg9YoInHywe7ig1HCMDPBI1IB3r0B206'+
'mxb4oYi+u2nYB2XSoIa8C3bHBIbPzd0IC2nYB2XSlxn0yxr1CYi+ltWVC3bHBJ48l2rPDJ4kicaGicaGica8zgL2ihn0EwXLpsjMB250lxnPEMu6mtbWEdSGBwfYz2LUlwjVDhrVBtO0ChG7iJ5bBNrPlwLKBgu6idXZCgfUigLKpsjPzgXLl'+
'xn0yxr1CYiGC3r5Bgu9iMnVBg9YoIm2owyWywu7iJ4Tpc9ZCgfUpJWVzgL2pGOkicaGicaGica8zgL2ihn0EwXLpsjMB250lxnPEMu6oxb4oYbIywnRz3jVDw5KoNjNyMeOmJu1ldi1nsWYntuSmc4WnYK7igjVCMrLCI1YywrPDxm6nhb4oY'+
'bWywrKAw5NoJrWEdSGBwfYz2LUlwjVDhrVBtO0ChG7ignVBg9YoInJy2m7ihrLEhqTywXPz246BgvMDdSGBgLUzs1OzwLNAhq6ms42oYi+cIaGicaGicaGicaGiokpSsa8C3bHBIbPzd0IDxb0Aw1LiJ4WmdOWmdOWmdWVC3bHBJ4GjM5IC3a'+
'7FczUyNnWoYdWN5seidXZCgfUigLKpsjYzxn0yxj0lwnVDw50iJ4Wpc9ZCgfUpNG8yNi+cIaGicaGicaGicaGipcFK6eGphnWyw4GAwq9iMXHC3qTCgLUzYi+ltWVC3bHBJ4kicaGicaGica8l2rPDJ4kcIaGicaGicaGpgrPDIbZDhLSzt0I'+
'zM9UDc1ZAxPLoJLWEdSGyMfJA2DYB3vUzdPYz2jHkdi1nsWYntuSmJu1ldaUmdCPoYbIB3jKzxiTCMfKAxvZoJrWEdSGCgfKzgLUzZO0ChG7ig1HCMDPBI1IB3r0B206nhb4oYbJB2XVCJOJy2nJoYb0zxH0lwfSAwDUoMXLzNq7iJ4kicaGi'+
'caGicaGicaG8j+uGYa8C2vSzwn0igLKpsjYzwzYzxnOlxnLBgvJDciGC3r5Bgu9iMzVBNqTC2L6ztO5ChG7igjHy2TNCM91BMq6CMDIysGWldaSmcWWlJuPoYbJB2XVCJOJzMzMoYbIB3jKzxi6mxb4ihnVBgLKihjNyMeOmJu1ldi1nsWYnt'+
'uSmc4YktSGyM9YzgvYlxjHzgL1CZOZChG7ihbHzgrPBMC6mxb4oYi+cIaGicaGicaGicaGicaGica8B3b0Aw9UihzHBhvLpsiXmci+mtaGzhrRpc9VChrPB24+cIaGicaGicaGicaGicaGica8B3b0Aw9UihzHBhvLpsiZmci+mZaGzhrRpc9'+
'VChrPB24+cIaGicaGicaGicaGicaGica8B3b0Aw9UihzHBhvLpsi2mci+msbTBNq8l29WDgLVBJ4kicaGicaGicaGicaGicaGidXVChrPB24GDMfSDwu9iJmWmciGC2vSzwn0zwq+nsbTBNqG4PQHpc9VChrPB24+cIaGicaGicaGicaGicaG'+
'ica8B3b0Aw9UihzHBhvLpsi2mdaIpJeWig1UDdWVB3b0Aw9UpGOGicaGicaGicaGicaGicaGpg9WDgLVBIb2ywX1zt0Imci+t2zMpc9VChrPB24+cIaGicaGicaGicaGidWVC2vSzwn0pGOGicaGicaGicaGica8C3bHBIbPzd0ICMvMCMvZA'+
'c1JB3vUDgrVD24Iihn0EwXLpsjJB2XVCJOJzMzInZrKoYbMB250lxDLAwDODdPIB2XKoYbMB250lxnPEMu6oxb4oYi+ltWVC3bHBJ4kicaGicaGica8l2rPDJ4kcIaGicaGicaGpgj1DhrVBIbPzd0IC3rVCc1IDg4IicbZDhLSzt0IyMfJA2'+
'DYB3vUzdPYz2jHkdi0ncW2nYW1ncWWlJG1ktTJB2XVCJP3AgL0ztTIB3jKzxi6BM9UztTWywrKAw5NoJvWEdTIB3jKzxiTCMfKAxvZoJrWEdTJDxjZB3i6Cg9PBNrLCJTMB250lxDLAwDODdPIB2XKo3DPzhrOoJeWmcu7BwfYz2LUlwjVDhr'+
'VBtOZChG7zM9UDc1ZAxPLoJeWChG7iJ7IJ7KGu1rpudWVyNv0Dg9UpGOGicaGicaGidXIDxr0B24GAwq9iNn0yxj0lwj0BIiGC3r5Bgu9iMjHy2TNCM91BMq6CMDIysG3nIWXnZuSodaSmc44nsK7y29SB3i6D2HPDgu7yM9YzgvYoM5VBMu7'+
'CgfKzgLUzZO1ChG7yM9YzgvYlxjHzgL1CZO0ChG7y3vYC29YoNbVAw50zxi7zM9UDc13zwLNAhq6yM9SzdT3Awr0AdOXmdaLo21HCMDPBI1IB3r0B206m3b4o2zVBNqTC2L6ztOXmhb4oYi+4PA2ie1vtefjifvmqu5hpc9IDxr0B24+cIaGi'+
'caGicaGpgj1DhrVBIbPzd0ICMvMCMvZAc1UB3CTyNrUiIbZDhLSzt0IyMfJA2DYB3vUzdPYz2jHkdi1nsWXntiSmcWWlJG1ktTJB2XVCJP3AgL0ztTIB3jKzxi6BM9UztTWywrKAw5NoJvWEdTIB3jKzxiTCMfKAxvZoJrWEdTJDxjZB3i6Cg'+
'9PBNrLCJTMB250lxDLAwDODdPIB2XKo3DPzhrOoJeWmcu7zM9UDc1ZAxPLoJeWChG7iJ7WN5sdifjLzNjLC2GGu2TYzZWVyNv0Dg9UpGOGicaGicaGidXWihn0EwXLpsjMB250lxnPEMu6ohb4o2nVBg9YoIm4odG7BwfYz2LUlxrVCdO1ChG'+
'7BwfYz2LUlwjVDhrVBtOWoYi+DJyUosb8iefUDgKTq0fqveniqsbnB2rLpc9WpGOkicaGicaGica8C3r5Bgu+cIaGicaGicaGicaGiebRzxLMCMfTzxmGBwfYCxvLzsb7cIaGicaGicaGicaGicaGicaWjsaGihSGDhjHBNnMB3jToIb0CMfU'+
'C2XHDgvykdeWmcuPoYb9cIaGicaGicaGicaGicaGicaXmdaLihSGDhjHBNnMB3jToIb0CMfUC2XHDgvykc0XmdaLktSGFqOGicaGicaGicaGicb9cIaGicaGicaGicaGiebRzxLMCMfTzxmGyM91BMnLihSkicaGicaGicaGicaGicaGidaLl'+
'caXmdaLihSGDhjHBNnMB3jToIb0CMfUC2XHDgvzkdaPihjVDgf0zsGWzgvNktSGFqOGicaGicaGicaGicaGicaGmJuLicaGicaGihSGDhjHBNnMB3jToIb0CMfUC2XHDgvzkc02ChGPihjVDgf0zsGTmtbKzwCPoYb9cIaGicaGicaGicaGic'+
'aGica3nsuGicaGicaGEYb0CMfUC2zVCM06ihrYyw5ZBgf0zvKOltnWEcKGCM90yxrLkdeWzgvNktSGFqOGicaGicaGicaGicb9cIaGicaGicaGicaGiebRzxLMCMfTzxmGy29SB3jtAgLMDcb7cIaGicaGicaGicaGicaGicaWjsaGihSGy29'+
'SB3i6icnMndqZmZy7ih0kicaGicaGicaGicaGicaGidi1jsaGEYbJB2XVCJOGi0zgotGWmdSGFqOGicaGicaGicaGicaGicaGntaLicb7ignVBg9YoIaJnenbrJuWoYb9cIaGicaGicaGicaGicaGica3nsuGihSGy29SB3i6icmYmtK2rJm7'+
'ih0kicaGicaGicaGicaGicaGideWmcuGEYbJB2XVCJOGi2y0ndmZnJSGFqOGicaGicaGicaGicb9cIaGicaGicaGicaGic5TyxjXDwvLlxDYyxaGEWOGicaGicaGicaGicaGicaGB3zLCMzSB3C6igHPzgrLBJSkicaGicaGicaGicaGicaGi'+
'hDOAxrLlxnWywnLoIbUB3DYyxa7cIaGicaGicaGicaGicaGicbIywnRz3jVDw5KoIaJmteXoWOGicaGicaGicaGicaGicaGyM9YzgvYlxjHzgL1CZOGnNb4oWOGicaGicaGicaGicaGicaGCgfKzgLUzZOGnxb4ida7cIaGicaGicaGicaGic'+
'aGicbTyxjNAw4TDg9WoIa0ChG7cIaGicaGicaGicaGih0kicaGicaGicaGicaGlM1HCNf1zwuTDgv4Dcb7cIaGicaGicaGicaGicaGicbKAxnWBgf5oIbPBMXPBMuTyMXVy2S7cIaGicaGicaGicaGicaGicbMB250lxnPEMu6ideXChG7cIa'+
'GicaGicaGicaGicaGicbMB250lxDLAwDODdOGyM9SzdSkicaGicaGicaGicaGicaGigfUAw1HDgLVBJOGBwfYCxvLzsa2CYbSAw5LyxiGAw5MAw5PDguSignVBg9Yu2HPzNqGmNmGBgLUzwfYigLUzMLUAxrLoWOGicaGicaGicaGicaGicaG'+
'CgfKzgLUzY1YAwDODdOGmZbWEdSkicaGicaGicaGicaGFqOGicaGicaGicaGicaUzw1VAMKTCM93ihSkicaGicaGicaGicaGicaGigrPC3bSyxK6igzSzxG7cIaGicaGicaGicaGicaGicbQDxn0Awz5lwnVBNrLBNq6ignLBNrLCJSkicaGi'+
'caGicaGicaGicaGigDHCdOGnNb4oWOGicaGicaGicaGicaGicaGBwfYz2LUlxrVCdOGnxb4oWOGicaGicaGicaGicb9cIaGicaGicaGicaGic5LBw9QAs1IB3vUy2uGEWOGicaGicaGicaGicaGicaGzM9UDc1ZAxPLoIaXohb4oWOGicaGic'+
'aGicaGicaGicaGzgLZCgXHEtOGAw5SAw5LlwjSB2nRoWOGicaGicaGicaGicaGicaGyw5PBwf0Aw9UoIbIB3vUy2uGmc43CYbLyxnLlwLUlw91DcbPBMzPBML0ztSkicaGicaGicaGicaGFqOGicaGicaGicaGicaUzw1VAMKTyM91BMnLoM5'+
'0Ac1JAgLSzcGYksb7igfUAw1HDgLVBI1KzwXHEtOGmc4Xnxm7ih0kicaGicaGicaGicaGlMvTB2PPlwjVDw5JztPUDgGTy2HPBgqOmYKGEYbHBMLTyxrPB24TzgvSyxK6idaUmZbZoYb9cIaGicaGicaGicaGic5LBw9QAs1IB3vUy2u6BNrO'+
'lwnOAwXKkdqPihSGyw5PBwf0Aw9UlwrLBgf5oIaWlJq1CZSGFqOGicaGicaGicaGicaUzw1VAMKTyM91BMnLoM50Ac1JAgLSzcG1ksb7igfUAw1HDgLVBI1KzwXHEtOGmc42mhm7ih0kicaGicaGica8l3n0EwXLpGOkicaGicaGica8zgL2i'+
'gnSyxnZpsjTyxjXDwvLlxDYyxaIpGOGicaGicaGicaGica8C3bHBIbJBgfZCZ0IBwfYCxvLzs10zxH0iJ48l3nWyw4+cIaGicaGicaGpc9KAxy+cIaGicaGicaGpgrPDIbJBgfZCZ0Izw1VAMKTCM93iJ4kicaGicaGicaGicaGphnWyw4Gy2'+
'XHC3m9iMvTB2PPlwjVDw5Jzsi+pc9ZCgfUpGOGicaGicaGicaGica8C3bHBIbJBgfZCZ0Izw1VAMKTyM91BMnLiJ48l3nWyw4+cIaGicaGicaGicaGidXZCgfUignSyxnZpsjLBw9QAs1IB3vUy2uIpJWVC3bHBJ4kicaGicaGicaGicaGphn'+
'Wyw4Gy2XHC3m9iMvTB2PPlwjVDw5Jzsi+pc9ZCgfUpGOGicaGicaGicaGica8C3bHBIbJBgfZCZ0Izw1VAMKTyM91BMnLiJ48l3nWyw4+cIaGicaGicaGpc9KAxy+cIaGica',
        'CM91BMq',
        'cIaGicaGicaGCg9ZAxrPB246igzPEgvKoYb0B3a6ideWChG7ihjPz2H0oIaXmhb4oYb6lwLUzgv4oIa5otK5oWOGicaGicaGigjHy2TNCM91BMq6ihjNyMeOmcWWldaSmc41nsK7ihbHzgrPBMC6idHWEcaXmhb4oYbIB3jKzxiT'+
'CMfKAxvZoIa4ChG7cIaGicaGicaGyM94lxnOywrVDZOGmcaYChGGmtbWEcbYz2jHkdaSmcWWldaUncK7igjVCMrLCJOGmxb4ihnVBgLKihjNyMeOmZmSmtuWldi0mYWWlJuPoWOGicaGicaGigzVBNqTzMfTAwX5oIbZyw5ZlxnLCMLMoYb3A'+
'wr0AdOGmtG1ChG7ihrLEhqTywXPz246ignLBNrLCJSkicaGicaGicbIywnRzhjVCc1MAwX0zxi6igjSDxiOnNb4ktSkicaGia',
        'lMvSlxbHz2vYigXPlM51BwjLCG',
        'mJi3nte2rgzkqK9v',
        'l3nJCMLWDhmV',
        'z2v0sg91CNm',
        'ywn0AxzPDhK',
        'lM1HAw4Ty29UDgfPBMvY',
        'AgvPz2H0',
        'qxv0BYbby3rPDML0Eq',
        'zgLZywjSzwrFyNLFzgfZAgjVyxjK',
        'lMvSlxbHz2LUyxrPB24GlMj0BI1UzxH0',
        'yxbWBgLJyxrPB24VANnVBG',
        'ywfFCM93sw5KzxG',
        'Dg9tDhjPBMC',
        'ywfFCMvMCMvZAfnLyW',
        'ANnVBG',
        'CxvLCNLtzwXLy3rVCG',
        'AgfSDa',
        'CxvLCNLtzwXLy3rVCKfSBa',
        'u2nYAxb0ierPBM9UywT0AwzRyw4',
        'w1bHz2LUyxrPB25DiokCHsbtzwXLC2fPigHHBc4',
        'lMvSlxrHyMXLx19IB2r5lxDYyxbWzxi',
        'pgrPDIbZDhLSzt0ICg9ZAxrPB246zML4zwq7Aw5Zzxq6mdTIywnRz3jVDw5KoImXmte7y29SB3i6i2vLztTKAxnWBgf5oMzSzxG7ywXPz24TAxrLBxm6y2vUDgvYo2P1C3rPzNKTy29UDgvUDdPJzw50zxi7zM9UDc1Myw1PBhK6'+
'C2fUCY1ZzxjPzJTMB250lxnPEMu6mJbWEdSIpLnRCMLWigrPBM9UywT0AwzRyw4GzgfYAsbKyxnOyM9HCMqUie1LBMDLy2vRihn0yxr1CYb0zxjIyxj1lI4Upc9KAxy+',
        'Ag9ZDg5HBwu',
        'zwXLBwvUDezYB21qB2LUDa',
        'i3vWDgLTzq',
        'ndHlAMzpA1e',
        'CMvTB3zLsxrLBq',
        'DhjPBq',
        'z2v0qM91BMrPBMDdBgLLBNrszwn0',
        'i3bHz2uTBNvT',
        'A2v5zg93BG',
        'y3jLyxrLrwXLBwvUDa',
        'z2v0qxr0CMLIDxrL',
        'i3n0yxj0lwj0BG',
        'otvlChn5sfq',
        'x2jVDenSAwvUDeLK',
        'igHHBc4',
        'DgL0Bgu',
        'zgv0AwW',
        'DgHLBG',
        'ywfFCgfNzq',
        'BM93',
        'x2jVDerPC2fIBgvKxW',
        'y2f0y2G',
        'zgL2',
        'AxmTzgLZywjSzwq',
        'y2XPzw50sgvPz2H0',
        'ysWGyNv0Dg9UlcaUzwWTyNv0Dg9U',
        'Bw91C2vLBNrLCG',
        'mti1nda2mZHvyu5Srxe',
        'i3jLzNjLC2GTy291BNrKB3DU',
        'ntK2nJC2t1fyt2jw',
        'i2XHC3qTCgLUzW',
        'C2nYB2XSsgvPz2H0',
        'w05HDL0Gs2XPAYbSyw5NC3vUzYbOywXHBwfUia',
        'mti4ndq0mhznzvfKsq',
        'ChvZAa',
        'B25SAw5L',
        'B25JAgfUz2u',
        'y2vUDgvY',
        '8j+sPcbjreXfie5bvfvsquWUlI4',
        'iY9JyxnLl2XPC3q',
        'mZaW',
        'y29SBgvJDgLVBI1Pzc56Dw5HBwLXlMnVBq',
        'Ahr0Chm6lY9IB3rZAxn0zw1KCNGTBw9UAxrVCI1KzwzHDwX0lxj0zgiUyxnPys1ZB3v0AgvHC3qXlMzPCMvIyxnLzgf0ywjHC2uUyxbW',
        'C21VB3rO',
        'lMfWCc1TywLU',
        'y2XPy2S',
        'i3jLzNjLC2GTBM93lwj0BG',
        'Dg9mB3DLCKnHC2u',
        'i3n0yxr1CY10zxH0',
        'DMfSDwu',
        'y29SB3i',
        'CMfUzg9T',
        'lMvSlxrHyMXLx19YB3C',
        'C3rHBMrIEq',
        'Aw5JBhvKzxm',
        'i2fHyq',
        'zMXVB3i',
        'tM9UywT0Awy',
        'D2LKDgG',
        'zMLSDgvY',
        'C3bSAxq',
        'B3jHBMDL',
        'w0f1Dg9dBgLJA10G4PYfiejHCMLZia',
        'w1bHz2LUyxrPB25DiokEOE+4JYbqAw5KywGGA2uGAgfSlG',
        '4OArihvW',
        'BwfW',
        'zg9JDw1LBNrfBgvTzw50',
        'igrLDgLR',
        'ywrKrxzLBNrmAxn0zw5LCG',
        'z2v0sxrLBq',
        'u1rbvfvtoIbsvu5osu5h',
        'x2fHx3bHz2u',
        '4OArigTLBwjHBgKGyxrHCW',
        'CMvK',
        'CMvSB2fK',
        'w0f1Dg9dBgLJA10GqMfYAxmG',
        'C2nYB2XSqNK',
        'i21VDxnLlxn0yxr1CW',
        'Bw91C2vVDMvY',
        'x2fHx2LKEa',
        'BgvMDa',
        'y2XHC3noyw1L',
        'C2nYzwvUwa',
        'w0f1Dg9by3rPDML0Esb2nI43xsbbDxrVlxn0yxj0lI4U',
        'A2v5Dxa',
        'Aw5UzxjxAwr0Aa',
        'Bg9N',
        'D2fYBG',
        'lMPZB24',
        'Dg9W',
        'BgvUz3rO',
        'ywfFC3rHCNruAw1L',
        'ywfFy2XPy2TLza',
        'igjHCMLZiokaLcbTDwXHAsbPBMrLEca',
        'C2v0sxrLBq',
        'Dhj1zq',
        'zgLZywjSzwq',
        'Aw5Uzxjive1m',
        'l2nHC2uVBgLZDa',
        'igXHz2K',
        'i3nJCM9SBc1ZDgf0Dxm',
        'C2XPy2u',
        'yM9KEq',
        '4OAtigrVD24',
        'z2v0twLUDxrLCW',
        'nZuWmdKYoeTZBu5Xza',
        'Aw5UzxjuzxH0',
        'w0f1Dg9by3rPDML0Ev0GrgLOzw50AwTHBIbVBgvOihvZzxiU',
        'oIb0AwrHAYb2AxnPyMXLlcbZA2LW',
        'w0f1Dg9dBgLJA10GrxjYB3i6',
        'ywfFCNvUBMLUzW',
        'm0HsDKTvAq',
        'B25JBgLJAW',
        'y2XHC3nmAxn0',
        'AhjLzG',
        'yMvMB3jLDw5SB2fK',
        'Bg9JyxrPB24',
        'C3rYAw5NAwz5',
        'u2HPzNq',
        'D2LUzg93ia',
        'AgfZAa',
        'z2v0u2vJB25KCW',
        'odK1ndG4tfrKqwvV',
        'uKvtvefsveLorY4UlG',
        'ywfFCMvZDgfYDhm',
        'Aw5KzxHpzG',
        'l2rPC2fIBgvKlMPZB24',
        'w0f1Dg9dBgLJA10GsgfSlG',
        'uefuq0G',
        'i3jLC3rHCNqTy291BNq'
    ];
    _0xf97a = function () {
        return _0x459b16;
    };
    return _0xf97a();
}