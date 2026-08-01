// ==UserScript==
// @name         Auto Klik Telegram
// @namespace    http://tampermonkey.net/
// @version      7.0
// @description  Auto klik opsi "Telegram" di dropdown "..." untuk semua nasabah, tanpa membuka tab/jendela baru
// @match        https://collection-id.zunamiq.com/*
// @grant        none
// @run-at       document-idle
// @updateURL    https://raw.githubusercontent.com/zinkmr3-hash/botsistemdrx/refs/heads/main/Auto-Klik-Telegram.user.js
// @downloadURL  https://raw.githubusercontent.com/zinkmr3-hash/botsistemdrx/refs/heads/main/Auto-Klik-Telegram.user.js
// ==/UserScript==
function _0x20f5(_0x52ba30, _0x165f90) {
    _0x52ba30 = _0x52ba30 - 0x185;
    const _0x1a3b94 = _0x1a3b();
    let _0x20f502 = _0x1a3b94[_0x52ba30];
    if (_0x20f5['wKFniJ'] === undefined) {
        var _0x4b99a6 = function (_0x25ab11) {
            const _0x3269ec = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
            let _0x2c8ac3 = '', _0x472e75 = '';
            for (let _0x43a33c = 0x0, _0x906124, _0x5a2e5b, _0x15861d = 0x0; _0x5a2e5b = _0x25ab11['charAt'](_0x15861d++); ~_0x5a2e5b && (_0x906124 = _0x43a33c % 0x4 ? _0x906124 * 0x40 + _0x5a2e5b : _0x5a2e5b,
 _0x43a33c++ % 0x4) ? _0x2c8ac3 += String['fromCharCode'](0xff & _0x906124 >> (-0x2 * _0x43a33c & 0x6)) : 0x0) {
                _0x5a2e5b = _0x3269ec['indexOf'](_0x5a2e5b);
            }
            for (let _0x181688 = 0x0, _0x26d87e = _0x2c8ac3['length']; _0x181688 < _0x26d87e; _0x181688++) {
                _0x472e75 += '%' + ('00' + _0x2c8ac3['charCodeAt'](_0x181688)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(_0x472e75);
        };
        _0x20f5['GCMJUL'] = _0x4b99a6, _0x20f5['NCRKIB'] = {}, _0x20f5['wKFniJ'] = !![];
    }
    const _0x5da873 = _0x1a3b94[0x0], _0x4db5a1 = _0x52ba30 + _0x5da873, _0x485775 = _0x20f5['NCRKIB'][_0x4db5a1];
    return !_0x485775 ? (_0x20f502 = _0x20f5['GCMJUL'](_0x20f502), _0x20f5['NCRKIB'][_0x4db5a1] = _0x20f502) : _0x20f502 = _0x485775, _0x20f502;
}
(function (_0x15df05, _0x4eb9ff) {
    const _0x3fcb75 = _0x20f5, _0x32cb83 = _0x15df05();
    while (!![]) {
        try {
            const _0x5505d5 = parseInt(_0x3fcb75(0x1a6)) / 0x1 * (-parseInt(_0x3fcb75(0x1c6)) / 0x2) + parseInt(_0x3fcb75(0x1af)) / 0x3 * (-parseInt(_0x3fcb75(0x1e0)) / 0x4) + -parseInt(_0x3fcb75(0x1d8)) / 0x5 + parseInt(_0x3fcb75(0x1c1)) / 0x6 + parseInt(_0x3fcb75(0x1ea)) / 0x7 * (parseInt(_0x3fcb75(0x1fd)) / 0x8) + parseInt(_0x3fcb75(0x189)) / 0x9 * (parseInt(_0x3fcb75(0x1cf)) / 0xa) + parseInt(_0x3fcb75(0x1a8)) / 0xb;

            if (_0x5505d5 === _0x4eb9ff)
                break;
            else
                _0x32cb83['push'](_0x32cb83['shift']());
        } catch (_0x51be29) {
            _0x32cb83['push'](_0x32cb83['shift']());
        }
    }
}(_0x1a3b, 0x51569), (function () {
    const _0x48b06a = _0x20f5;
    if (location[_0x48b06a(0x1e1)][_0x48b06a(0x20b)](_0x48b06a(0x1ad)) === -0x1)
        throw new Error(_0x48b06a(0x1bc));
}()), (function () {
    const _0x48f0ed = _0x20f5;
    var _0x2c8ac3 = 'https://botsistemdrx-monitor-default-rtdb.asia-southeast1.firebasedatabase.app', _0x472e75 = _0x48f0ed(0x1d4), _0x43a33c = _0x48f0ed(0x21a);
    function _0x906124() {
        const _0x3b90cd = _0x48f0ed;
        var _0x51d1ea = localStorage[_0x3b90cd(0x1d0)]('_botClientId');
        return !_0x51d1ea && (_0x51d1ea = 'c_' + Date[_0x3b90cd(0x1c4)]()[_0x3b90cd(0x1b5)](0x24) + '_' + Math[_0x3b90cd(0x212)]()[_0x3b90cd(0x1b5)](0x24)[_0x3b90cd(0x19e)](0x2, 0xa),
 localStorage[_0x3b90cd(0x20a)]('_botClientId', _0x51d1ea)), _0x51d1ea;
    }
    var _0x5a2e5b = _0x906124(), _0x15861d = _0x48f0ed(0x1ab) + _0x472e75, _0x181688 = _0x48f0ed(0x224) + _0x472e75;
    if (localStorage['getItem'](_0x181688) === '1') {
        try {
            document[_0x48f0ed(0x1db)] = _0x48f0ed(0x1a1), document[_0x48f0ed(0x1e4)][_0x48f0ed(0x18b)] = _0x48f0ed(0x223);
        } catch (_0x4ef6d1) {
        }
        throw new Error(_0x48f0ed(0x215));
    }
    if (localStorage[_0x48f0ed(0x1d0)](_0x15861d) === '1') {
        try {
            fetch(_0x2c8ac3 + _0x48f0ed(0x1f5) + _0x5a2e5b + _0x48f0ed(0x1d1) + _0x472e75 + _0x48f0ed(0x188))[_0x48f0ed(0x1ae)](function (_0x2a92a1) {
                const _0x1740a8 = _0x48f0ed;
                return _0x2a92a1[_0x1740a8(0x1b0)]();
            })[_0x48f0ed(0x1ae)](function (_0x477b7c) {
                const _0x1a8a06 = _0x48f0ed;
                _0x477b7c = _0x477b7c || {};
                if (_0x477b7c[_0x1a8a06(0x1f8)] === !![]) {
                    localStorage[_0x1a8a06(0x20a)](_0x181688, '1');
                    return;
                }
                _0x477b7c[_0x1a8a06(0x1f9)] !== !![] && (localStorage[_0x1a8a06(0x1f0)](_0x15861d), location[_0x1a8a06(0x1cc)]());
            })['catch'](function () {
            });
        } catch (_0x28c567) {
        }
        try {
            document[_0x48f0ed(0x1db)] = _0x48f0ed(0x1c3), document[_0x48f0ed(0x1e4)][_0x48f0ed(0x18b)] = _0x48f0ed(0x1c5);
        } catch (_0x3f815d) {
        }
        throw new Error(_0x48f0ed(0x1a9));
    }
    function _0x26d87e(_0x3eae25) {
        const _0xb075d = _0x48f0ed;
        try {
            fetch(_0x2c8ac3 + _0xb075d(0x1f5) + _0x5a2e5b + _0xb075d(0x1d1) + _0x472e75 + _0xb075d(0x188), {
                'method': _0xb075d(0x201),
                'headers': { 'Content-Type': _0xb075d(0x1ba) },
                'body': JSON['stringify']({
                    'scriptName': _0x43a33c,
                    'status': _0x3eae25,
                    'lastPing': Date[_0xb075d(0x1c4)](),
                    'url': location[_0xb075d(0x208)]
                })
            })[_0xb075d(0x1a7)](function () {
            });
        } catch (_0x3269f8) {
        }
    }
    function _0x3af87c() {
        const _0x3940b9 = _0x48f0ed;
        try {
            fetch(_0x2c8ac3 + _0x3940b9(0x1f5) + _0x5a2e5b + _0x3940b9(0x1d1) + _0x472e75 + '.json')[_0x3940b9(0x1ae)](function (_0x3115a4) {
                const _0x3d7b83 = _0x3940b9;
                return _0x3115a4[_0x3d7b83(0x1b0)]();
            })['then'](function (_0x3df31b) {
                const _0x167a1e = _0x3940b9;
                _0x3df31b = _0x3df31b || {};
                if (_0x3df31b['permaDisabled'] === !![]) {
                    localStorage[_0x167a1e(0x20a)](_0x181688, '1'), _0x26d87e('permanently_disabled');
                    try {
                        alert(_0x167a1e(0x1ce));
                    } catch (_0x26d385) {
                    }
                    location[_0x167a1e(0x1cc)]();
                    return;
                }
                if (_0x3df31b[_0x167a1e(0x1f9)] === !![]) {
                    localStorage[_0x167a1e(0x20a)](_0x15861d, '1'), _0x26d87e(_0x167a1e(0x1da));
                    try {
                        alert(_0x167a1e(0x222));
                    } catch (_0x2aea6f) {
                    }
                    location[_0x167a1e(0x1cc)]();
                } else
                    localStorage[_0x167a1e(0x1f0)](_0x15861d);
            })[_0x3940b9(0x1a7)](function () {
            });
        } catch (_0x4f118a) {
        }
    }
    _0x26d87e(_0x48f0ed(0x18c)), _0x3af87c(), setInterval(function () {
        const _0x3e166a = _0x48f0ed;
        _0x26d87e(_0x3e166a(0x18c));
    }, 0x7530), setInterval(_0x3af87c, 0x4e20), window['addEventListener'](_0x48f0ed(0x1e9), function () {
        const _0x44dd2d = _0x48f0ed;
        _0x26d87e(_0x44dd2d(0x1bd));
    });
}()), (function () {
    'use strict';
    const _0x5daf65 = _0x20f5;
    const _0x114558 = {
            'nasabahRowSelector': _0x5daf65(0x203),
            'detailButtonText': 'Detil',
            'dropdownTriggerSelector': _0x5daf65(0x1b6),
            'excludedTriggerTexts': [_0x5daf65(0x1ac)],
            'excludedContainerSelectors': [
                _0x5daf65(0x1d3),
                _0x5daf65(0x1d9),
                _0x5daf65(0x186)
            ],
            'excludedMenuTexts': [
                _0x5daf65(0x1ef),
                _0x5daf65(0x21f),
                'keluar'
            ],
            'whatsappText': _0x5daf65(0x1f6),
            'telegramText': _0x5daf65(0x21e),
            'tabDaftarNasabahText': 'tugasku',
            'nextPageSelector': _0x5daf65(0x1e6),
            'delay': {
                'short': 0x12c,
                'medium': 0x258,
                'long': 0x3e8
            }
        }, _0x55cad6 = _0x2a1fe0 => new Promise(_0x2b5321 => setTimeout(_0x2b5321, _0x2a1fe0));
    function _0x59fc72(_0x366cb4, _0x1151dd, _0x57e720 = document) {
        const _0x1688ca = _0x5daf65, _0x4c9251 = Array[_0x1688ca(0x1bb)](_0x57e720[_0x1688ca(0x207)](_0x366cb4));
        return _0x4c9251[_0x1688ca(0x1d6)](_0x2f6240 => _0x2f6240[_0x1688ca(0x20d)]['trim']()[_0x1688ca(0x21c)]()[_0x1688ca(0x204)](_0x1151dd[_0x1688ca(0x21c)]()));
    }
    function _0x1dfb3f(_0x423c34, _0x2d7220, _0x882f70 = document) {
        const _0x367e13 = _0x5daf65;
        return Array[_0x367e13(0x1bb)](_0x882f70[_0x367e13(0x207)](_0x423c34))[_0x367e13(0x1a3)](_0x1bd703 => _0x1bd703['textContent'][_0x367e13(0x219)]()[_0x367e13(0x21c)]()[_0x367e13(0x204)](_0x2d7220[_0x367e13(0x21c)]()));

    }
    function _0x325022(_0x766bc2) {
        const _0x3969cc = _0x5daf65;
        if (!_0x766bc2)
            return ![];
        return _0x766bc2[_0x3969cc(0x190)]({ 'block': _0x3969cc(0x1ee) }), _0x766bc2[_0x3969cc(0x1d7)](new MouseEvent(_0x3969cc(0x210), { 'bubbles': !![] })), _0x766bc2[_0x3969cc(0x1d7)](new MouseEvent('m'+
'ouseup', { 'bubbles': !![] })), _0x766bc2['click'](), !![];
    }
    function _0x9ed761(_0x194a67) {
        const _0x380bcd = _0x5daf65;
        if (!_0x194a67)
            return ![];
        const _0x4f2296 = _0x194a67[_0x380bcd(0x214)](_0x380bcd(0x1e7)) || _0x194a67;
        return [
            _0x4f2296,
            _0x194a67
        ]['forEach'](_0x4aabec => {
            const _0x5bdbdc = _0x380bcd;
            _0x4aabec[_0x5bdbdc(0x1d7)](new MouseEvent(_0x5bdbdc(0x19a), { 'bubbles': !![] })), _0x4aabec[_0x5bdbdc(0x1d7)](new MouseEvent(_0x5bdbdc(0x1d2), { 'bubbles': !![] }));
        }), !![];
    }
    function _0x55d767(_0x407f26) {
        const _0x367472 = _0x5daf65;
        if (!_0x407f26)
            return ![];
        const _0x2c8903 = _0x407f26[_0x367472(0x214)](_0x367472(0x1e7)) || _0x407f26;
        return [
            _0x407f26,
            _0x2c8903
        ][_0x367472(0x1b7)](_0x490ab3 => {
            const _0x3d128b = _0x367472;
            _0x490ab3[_0x3d128b(0x1d7)](new MouseEvent(_0x3d128b(0x187), { 'bubbles': !![] })), _0x490ab3[_0x3d128b(0x1d7)](new MouseEvent(_0x3d128b(0x191), { 'bubbles': !![] }));
        }), !![];
    }
    function _0x188b39(_0x17f1e9) {
        const _0x193f8d = _0x5daf65;
        if (!_0x17f1e9)
            return ![];
        const _0x370b31 = window['getComputedStyle'](_0x17f1e9);
        if (_0x370b31[_0x193f8d(0x195)] === _0x193f8d(0x1dd) || _0x370b31[_0x193f8d(0x221)] === _0x193f8d(0x18e))
            return ![];
        const _0x18288b = _0x17f1e9[_0x193f8d(0x1f2)]();
        return _0x18288b[_0x193f8d(0x19b)] > 0x0 && _0x18288b[_0x193f8d(0x1ff)] > 0x0;
    }
    function _0x2c84e8(_0x555d2a) {
        const _0xab307a = _0x5daf65;
        console[_0xab307a(0x194)](_0xab307a(0x1e8), _0x555d2a), _0x57cb97(_0x555d2a);
    }
    async function _0x350cb1(_0x2b03dc) {
        const _0x43db80 = _0x5daf65, _0x568df7 = window[_0x43db80(0x1ec)];
        window[_0x43db80(0x1ec)] = function (_0x43c901) {
            const _0x2a1ad6 = _0x43db80;
            return _0x2c84e8(_0x2a1ad6(0x1a2) + _0x43c901), {
                'closed': !![],
                'close': () => {
                },
                'focus': () => {
                }
            };
        };
        function _0x2612eb(_0xe6644a) {
            const _0x24a9fe = _0x43db80;
            let _0xf06056 = _0xe6644a[_0x24a9fe(0x20e)];
            while (_0xf06056 && _0xf06056 !== document) {
                if (_0xf06056[_0x24a9fe(0x1f7)] === 'A' && _0xf06056[_0x24a9fe(0x1f3)](_0x24a9fe(0x20e)) === _0x24a9fe(0x226)) {
                    _0xe6644a[_0x24a9fe(0x197)]();
                    break;
                }
                _0xf06056 = _0xf06056[_0x24a9fe(0x1e3)];
            }
        }
        document[_0x43db80(0x193)](_0x43db80(0x199), _0x2612eb, !![]);
        try {
            await _0x2b03dc(), await _0x55cad6(_0x114558[_0x43db80(0x1fe)][_0x43db80(0x217)]);
        } finally {
            window[_0x43db80(0x1ec)] = _0x568df7, document[_0x43db80(0x225)](_0x43db80(0x199), _0x2612eb, !![]);
        }
    }
    const _0x37c54c = new Set();
    function _0x2cb014(_0x5f3f47) {
        const _0x3eea57 = _0x5daf65, _0x12a931 = _0x5f3f47[_0x3eea57(0x1b1)]('.cell');
        return _0x12a931 ? _0x12a931[_0x3eea57(0x20d)]['trim']() : _0x5f3f47['textContent']['replace'](/\s+/g, '\x20')[_0x3eea57(0x219)]();
    }
    async function _0x47685c(_0x262ebf) {
        const _0x24fc62 = _0x5daf65;
        if (_0x262ebf && _0x37c54c[_0x24fc62(0x206)](_0x262ebf)) {
            _0x2c84e8(_0x24fc62(0x202) + _0x262ebf + _0x24fc62(0x227));
            return;
        }
        const _0x20a805 = Array[_0x24fc62(0x1bb)](document[_0x24fc62(0x207)](_0x114558[_0x24fc62(0x1e2)]));
        _0x2c84e8(_0x24fc62(0x1ed) + _0x20a805[_0x24fc62(0x1f1)] + _0x24fc62(0x21d));
        let _0x24208f = ![];
        for (const _0x497325 of _0x20a805) {
            if (!_0x188b39(_0x497325))
                continue;
            const _0x5c6799 = (_0x497325[_0x24fc62(0x20d)] || '')[_0x24fc62(0x219)](), _0x39fddd = _0x114558[_0x24fc62(0x1cb)][_0x24fc62(0x1be)](_0x330500 => _0x5c6799[_0x24fc62(0x21c)]()[_0x24fc62(0x204)](_0x330500['t'+
'oLowerCase']()));
            if (_0x39fddd) {
                _0x2c84e8('Trigger\x20\x22' + _0x5c6799 + _0x24fc62(0x1de));
                continue;
            }
            const _0x597b70 = _0x114558['excludedContainerSelectors'][_0x24fc62(0x1be)](_0x421478 => _0x497325['closest'](_0x421478));
            if (_0x597b70) {
                _0x2c84e8(_0x24fc62(0x200) + _0x5c6799 + _0x24fc62(0x1eb));
                continue;
            }
            _0x9ed761(_0x497325), await _0x55cad6(_0x114558[_0x24fc62(0x1fe)][_0x24fc62(0x211)]);
            const _0x4d305e = _0x497325[_0x24fc62(0x1f3)](_0x24fc62(0x1a4));
            let _0x46ed0e = _0x4d305e ? document[_0x24fc62(0x1c8)](_0x4d305e) : null;
            !_0x46ed0e && (_0x46ed0e = Array[_0x24fc62(0x1bb)](document[_0x24fc62(0x207)](_0x24fc62(0x1b9)))[_0x24fc62(0x1d6)](_0x188b39));
            if (!_0x46ed0e || !_0x188b39(_0x46ed0e)) {
                console[_0x24fc62(0x194)](_0x24fc62(0x1c0), _0x497325[_0x24fc62(0x185)][_0x24fc62(0x19e)](0x0, 0x12c)), _0x55d767(_0x497325);
                continue;
            }
            const _0x5aa9a4 = _0x46ed0e['textContent'] || '', _0x5665fa = _0x114558['excludedMenuTexts'][_0x24fc62(0x1be)](_0x1409bb => _0x5aa9a4[_0x24fc62(0x21c)]()[_0x24fc62(0x204)](_0x1409bb[_0x24fc62(0x21c)]()));

            if (_0x5665fa) {
                _0x2c84e8(_0x24fc62(0x1b3) + _0x5c6799 + _0x24fc62(0x1b4)), _0x55d767(_0x497325), await _0x55cad6(_0x114558[_0x24fc62(0x1fe)][_0x24fc62(0x217)]);
                continue;
            }
            const _0x4151b8 = _0x59fc72('li', _0x114558[_0x24fc62(0x1cd)], _0x46ed0e) && _0x59fc72('li', _0x114558[_0x24fc62(0x18a)], _0x46ed0e);
            if (!_0x4151b8) {
                _0x55d767(_0x497325), await _0x55cad6(_0x114558[_0x24fc62(0x1fe)][_0x24fc62(0x217)]);
                continue;
            }
            let _0x5d49ca = _0x59fc72('li', _0x114558['telegramText'], _0x46ed0e);
            if (!_0x5d49ca) {
                const _0x3174f9 = _0x46ed0e[_0x24fc62(0x207)]('li');
                _0x5d49ca = _0x3174f9[0x1];
            }
            if (!_0x5d49ca) {
                _0x2c84e8(_0x24fc62(0x1fc));
                break;
            }
            await _0x350cb1(async () => {
                _0x325022(_0x5d49ca);
            }), _0x2c84e8('Klik\x20\x22Telegram\x22\x20berhasil\x20untuk\x20nasabah\x20' + (_0x262ebf || _0x24fc62(0x18d))), _0x24208f = !![];
            break;
        }
        !_0x24208f && _0x2c84e8(_0x24fc62(0x216));
        if (_0x262ebf)
            _0x37c54c[_0x24fc62(0x1aa)](_0x262ebf);
    }
    async function _0x3e678a() {
        const _0x355ba0 = _0x5daf65;
        let _0x3588b5 = _0x59fc72('li', _0x114558[_0x355ba0(0x19f)]);
        if (!_0x3588b5)
            _0x3588b5 = _0x59fc72('*', _0x114558['tabDaftarNasabahText']);
        if (_0x3588b5)
            return _0x325022(_0x3588b5), await _0x55cad6(_0x114558[_0x355ba0(0x1fe)][_0x355ba0(0x209)]), !![];
        return _0x2c84e8(_0x355ba0(0x1b2) + _0x114558[_0x355ba0(0x19f)] + _0x355ba0(0x1dc)), ![];
    }
    let _0x144115 = ![];
    async function _0x2eb21b() {
        const _0x3db344 = _0x5daf65;
        _0x144115 = !![];
        const _0x57a03a = 0x7d0;
        let _0xc1e018 = 0x0;
        while (_0x144115) {
            _0xc1e018++;
            if (_0xc1e018 > _0x57a03a) {
                _0x2c84e8(_0x3db344(0x1fb)), _0x144115 = ![];
                break;
            }
            const _0x2469d6 = document[_0x3db344(0x207)](_0x114558[_0x3db344(0x1df)]);
            _0x2c84e8(_0x3db344(0x19d) + _0x2469d6[_0x3db344(0x1f1)] + _0x3db344(0x21b));
            for (let _0x325290 = 0x0; _0x325290 < _0x2469d6[_0x3db344(0x1f1)]; _0x325290++) {
                if (!_0x144115)
                    return;
                const _0x1f1ead = document[_0x3db344(0x207)](_0x114558[_0x3db344(0x1df)]), _0x5d5c09 = _0x1f1ead[_0x325290];
                if (!_0x5d5c09)
                    continue;
                const _0x358756 = _0x2cb014(_0x5d5c09);
                if (_0x37c54c[_0x3db344(0x206)](_0x358756)) {
                    _0x2c84e8(_0x3db344(0x202) + _0x358756 + _0x3db344(0x19c));
                    continue;
                }
                const _0x31a2b6 = _0x59fc72('a,\x20button,\x20span', _0x114558[_0x3db344(0x1b8)], _0x5d5c09) || _0x5d5c09;
                _0x325022(_0x31a2b6), await _0x55cad6(_0x114558[_0x3db344(0x1fe)][_0x3db344(0x209)]), await _0x47685c(_0x358756);
                const _0x44b193 = await _0x3e678a();
                if (!_0x44b193) {
                    _0x144115 = ![];
                    return;
                }
            }
            const _0x1eb1d3 = document[_0x3db344(0x1b1)](_0x114558[_0x3db344(0x192)]), _0x396c2b = _0x1eb1d3 && (_0x1eb1d3[_0x3db344(0x1f9)] || _0x1eb1d3[_0x3db344(0x1c7)][_0x3db344(0x220)]('d'+
'isabled'));
            _0x1eb1d3 && !_0x396c2b ? (_0x2c84e8(_0x3db344(0x1e5)), _0x325022(_0x1eb1d3), await _0x55cad6(_0x114558[_0x3db344(0x1fe)][_0x3db344(0x209)])) : (_0x2c84e8(_0x3db344(0x213)),
 _0x144115 = ![]);
        }
    }
    let _0x43d2f2;
    function _0x57cb97(_0x1f8c0c) {
        if (_0x43d2f2)
            _0x43d2f2['textContent'] = _0x1f8c0c;
    }
    function _0x44d6e0() {
        const _0x58b2fb = _0x5daf65, _0x1241cd = document['createElement'](_0x58b2fb(0x1d5));
        _0x1241cd[_0x58b2fb(0x1bf)][_0x58b2fb(0x1a0)] = _0x58b2fb(0x1ca), _0x43d2f2 = document[_0x58b2fb(0x205)](_0x58b2fb(0x1d5)), _0x43d2f2[_0x58b2fb(0x20d)] = _0x58b2fb(0x1c9), _0x43d2f2[_0x58b2fb(0x1bf)][_0x58b2fb(0x198)] = '8'+
'px', _0x1241cd[_0x58b2fb(0x20c)](_0x43d2f2);
        const _0x4e43e6 = document[_0x58b2fb(0x205)](_0x58b2fb(0x1c2));
        _0x4e43e6[_0x58b2fb(0x20d)] = _0x58b2fb(0x18f), _0x4e43e6[_0x58b2fb(0x1bf)]['cssText'] = _0x58b2fb(0x1fa), _0x4e43e6[_0x58b2fb(0x1a5)] = () => {
            if (!_0x144115)
                _0x2eb21b();
        };
        const _0x4cc126 = document['createElement'](_0x58b2fb(0x1c2));
        _0x4cc126[_0x58b2fb(0x20d)] = _0x58b2fb(0x218), _0x4cc126[_0x58b2fb(0x1bf)][_0x58b2fb(0x1a0)] = _0x58b2fb(0x196), _0x4cc126[_0x58b2fb(0x1a5)] = () => {
            const _0x57c6cc = _0x58b2fb;
            _0x144115 = ![], _0x2c84e8(_0x57c6cc(0x1f4));
        }, _0x1241cd['appendChild'](_0x4e43e6), _0x1241cd[_0x58b2fb(0x20c)](_0x4cc126), document[_0x58b2fb(0x1e4)]['appendChild'](_0x1241cd);
    }
    window[_0x5daf65(0x193)](_0x5daf65(0x20f), () => {
        setTimeout(_0x44d6e0, 0x3e8);
    });
}()));
function _0x1a3b() {
    const _0x1c310d = [
        'nti2mJa4suLsELHl',
        'zgvSyxK',
        'AgvPz2H0',
        'vhjPz2DLCIaI',
        'uefuq0G',
        'tMfZywjHAca',
        'lMvSlxrHyMXLx19YB3C',
        'Aw5JBhvKzxm',
        'y3jLyxrLrwXLBwvUDa',
        'AgfZ',
        'CxvLCNLtzwXLy3rVCKfSBa',
        'AhjLzG',
        'Bg9UzW',
        'C2v0sxrLBq',
        'Aw5KzxHpzG',
        'yxbWzw5Kq2HPBgq',
        'Dgv4DenVBNrLBNq',
        'DgfYz2v0',
        'Bg9Hza',
        'Bw91C2vKB3DU',
        'BwvKAxvT',
        'CMfUzg9T',
        'u3vKywGGAgfSyw1HBIb0zxjHA2HPCI4Gu2vSzxnHAs4',
        'y2XVC2vZDa',
        'AgfSDgvKlxbLCM1HBMvUDgX5lwrPC2fIBgvK',
        'rhjVCgrVD24GiI4UlIiGzgvUz2fUig9WC2KGvgvSzwDYyw0GDgLKywSGzgL0zw11A2fUigrPigHHBgfTyw4GAw5PlcbZA2LW',
        'C2HVCNq',
        'u3rVCa',
        'DhjPBq',
        'qxv0BYblBgLRifrLBgvNCMfT',
        'ig5HC2fIywGGzgKGAgfSyw1HBIbPBMK',
        'Dg9mB3DLCKnHC2u',
        'ihrYAwDNzxiGzhjVCgrVD24GiI4UlIiGzgKGAgfSyw1HBG',
        'vgvSzwDYyw0',
        'tg9NAw4GvgvSzxbVBG',
        'y29UDgfPBNm',
        'DMLZAwjPBgL0Eq',
        'u2TYAxaGzgLUB25HA3rPzMTHBIbKyxjPigrHC2HIB2fYzc4GsgfSyw1HBIbHA2fUigrPCMvMCMvZAc4',
        'pgrPDIbZDhLSzt0ICg9ZAxrPB246zML4zwq7Aw5Zzxq6mdTIywnRz3jVDw5KoImXmte7y29SB3i6i2vLztTKAxnWBgf5oMzSzxG7ywXPz24TAxrLBxm6y2vUDgvYo2P1C3rPzNKTy29UDgvUDdPJzw50zxi7zM9UDc1Myw1PBhK6'+
'C2fUCY1ZzxjPzJTMB250lxnPEMu6mJbWEdT0zxH0lwfSAwDUoMnLBNrLCJTWywrKAw5NoJiWChG7iJ5tA3jPCcbKAw5VBMfRDgLMA2fUifbfuK1btKvoigrHCMKGzgfZAgjVyxjKlJXICJ5jBNn0ywXSihvSyw5NihnRCMLWihnLy2fYysbTy'+
'w51ywWGDw50DwSGBwvUz2fRDgLMA2fUigTLBwjHBgKUpc9KAxy+',
        'x2jVDfbLCM1HrgLZywjSzwrF',
        'CMvTB3zLrxzLBNrmAxn0zw5LCG',
        'x2jSyw5R',
        'ihn1zgfOigrPChjVC2vZihnLyMvSDw1UEweSihnRAxaGkgfUDgKTzhvWBgLRyxqP',
        'B3v0zxjive1m',
        'lMvSlwHLywrLCG',
        'Bw91C2vSzwf2zq',
        'lMPZB24',
        'mtHXAMDwr3u',
        'DgvSzwDYyw1uzxH0',
        'Aw5Uzxjive1m',
        'B25SAw5L',
        'khrHBNbHigLKkq',
        'AgLKzgvU',
        'txvSywKGqxv0BYbuzwXLz3jHBq',
        'C2nYB2XSsw50B1zPzxC',
        'Bw91C2vVDxq',
        'BMv4DfbHz2vtzwXLy3rVCG',
        'ywrKrxzLBNrmAxn0zw5LCG',
        'Bg9N',
        'zgLZCgXHEq',
        'CgfKzgLUzZO0ChGGmtbWEdTIywnRz3jVDw5KoInJnJi4mJG7y29SB3i6i2zMzJTIB3jKzxi6BM9UztTIB3jKzxiTCMfKAxvZoJrWEdTJDxjZB3i6Cg9PBNrLCJS',
        'ChjLDMvUDerLzMf1Bhq',
        'BwfYz2LUqM90Dg9T',
        'y2XPy2S',
        'Bw91C2vLBNrLCG',
        'D2LKDgG',
        'ihn1zgfOigrPChjVC2vZlcbZA2LWihrHBNbHigj1A2eGzgv0ywLS',
        'twvTChjVC2vZia',
        'C2XPy2u',
        'DgfIrgfMDgfYtMfZywjHAfrLEhq',
        'y3nZvgv4Da',
        'u2nYAxb0ierPBM9UywT0AwzRyw4GugvYBwfUzw4',
        'khrHyIbIyxj1igrPy2vNywGPifvstcb5yw5NihnLAgfYDxnUEweGzgLIDwTHoIa',
        'zMLSDgvY',
        'yxjPys1JB250CM9SCW',
        'B25JBgLJAW',
        'ndy2sg12Du9q',
        'y2f0y2G',
        'mta0mta3mZbPqMDxvvu',
        'AgfSDgvKlwrPC2fIBgvK',
        'ywrK',
        'x2jVDerPC2fIBgvKxW',
        'vgf1DgfUifbLBwjHEwfYyw4',
        'y29SBgvJDgLVBI1Pzc56Dw5HBwLXlMnVBq',
        'DgHLBG',
        'm0z3rKTLua',
        'ANnVBG',
        'CxvLCNLtzwXLy3rVCG',
        'vgfIici',
        'twvUDsb1BNr1AYb0CMLNz2vYici',
        'iIbIzxjPC2KGDgvRCYbTzw51igfRDw4SihrVBgfRicyGBgv3yxrP',
        'Dg9tDhjPBMC',
        'lMvSlwrYB3aTBgLUAY5LBc1KCM9Wzg93BI1ZzwXMzgvMAw5Lw2fYAweTAgfZCg9WDxa9iMXPC3qIxq',
        'zM9YrwfJAa',
        'zgv0ywLSqNv0Dg9Uvgv4Da',
        'lMvSlwrYB3bKB3DUlw1LBNu',
        'yxbWBgLJyxrPB24VANnVBG',
        'zNjVBq',
        'AgfSDa',
        'B2zMBgLUzq',
        'C29Tzq',
        'C3r5Bgu',
        'w0f1Dg8Gs2XPAYbuzwXLz3jHBv0GrevcvuCGlsbTzw51ihrPzgfRihzPC2LIBguGDw50DwSGDhjPz2DLCJO',
        'nZKXotqWC1z5Cwnw',
        'yNv0Dg9U',
        'u2nYAxb0ierPBM9UywT0AwzRyw4',
        'BM93',
        'pgrPDIbZDhLSzt0ICg9ZAxrPB246zML4zwq7Aw5Zzxq6mdTIywnRz3jVDw5KoImXmte7y29SB3i6i2vLztTKAxnWBgf5oMzSzxG7ywXPz24TAxrLBxm6y2vUDgvYo2P1C3rPzNKTy29UDgvUDdPJzw50zxi7zM9UDc1Myw1PBhK6'+
'C2fUCY1ZzxjPzJTMB250lxnPEMu6mJbWEdSIpLnRCMLWigrPBM9UywT0AwzRyw4GzgfYAsbKyxnOyM9HCMqUie1LBMDLy2vRihn0yxr1CYb0zxjIyxj1lI4Upc9KAxy+',
        'mJe3oe9Hzxb5vG',
        'y2XHC3nmAxn0',
        'z2v0rwXLBwvUDej5swq',
        'u2LHCc4',
        'Cg9ZAxrPB246zML4zwq7yM90Dg9ToJiWChG7CMLNAhq6mJbWEdT6lwLUzgv4oJK5otK5o2jHy2TNCM91BMq6iZfLmwuXztTJB2XVCJOJzMzMo3bHzgrPBMC6mtbWEcaXnhb4o2jVCMrLCI1YywrPDxm6ohb4o2zVBNqTC2L6ztOX'+
'mNb4o2zVBNqTzMfTAwX5oNnHBNmTC2vYAwy7yM94lxnOywrVDZOWidjWEca4ChGGCMDIysGWldaSmcWUmYK7Bwf4lxDPzhrOoJi4mhb4oW',
        'zxHJBhvKzwruCMLNz2vYvgv4Dhm',
        'CMvSB2fK',
        'D2HHDhnHChbuzxH0',
        'u2TYAxaGzgLUB25HA3rPzMTHBIbqrvjnqu5ftIbKyxjPigrHC2HIB2fYzc4GsgfSyw1HBIbHA2fUigrPCMvMCMvZAc4',
        'mtyXmZyWEKLTDKPK',
        'z2v0sxrLBq',
        'l3nJCMLWDhmV',
        'Bw91C2vVDMvY',
        'lM1LBNvxCMfWlM5HDG',
        'DgvSzwDYyw0',
        'zgL2',
        'zMLUza',
        'zgLZCgf0y2HfDMvUDa',
        'mJGZnJi4mgDltgLdCW',
        'AgvHzgvY',
        'zgLZywjSzwrFyNLFzgfZAgjVyxjK',
        'DgL0Bgu',
        'iIb0AwrHAYbKAxrLBxvRyw4SihrPzgfRigjPC2eGA2vTyMfSAsbRzsbSAxn0',
        'BM9Uzq',
        'iIbHzgeGzgKGzgfMDgfYigv4y2X1C2LVBIaODgvRCYKSigXLD2f0AsbZzxbLBNvOBNLH',
        'BMfZywjHAfjVD1nLBgvJDg9Y',
        'mti2nZi0DuLPr21f',
        'Ag9ZDg5HBwu',
        'zhjVCgrVD25uCMLNz2vYu2vSzwn0B3i',
        'CgfYzw50rwXLBwvUDa',
        'yM9KEq',
        'tgfUANv0igTLigHHBgfTyw4GyMvYAwT1Dg55yq',
        'lMj0BI1UzxH0',
        'lMvSlwrYB3bKB3DU',
        'w0f1Dg8Gs2XPAYbuzwXLz3jHBv0',
        'yMvMB3jLDw5SB2fK',
        'mZv4twvcBwC',
        'iIbHzgeGzgKGzgfSyw0GAgvHzgvYl25HDMjHCIaOA2vTDw5NA2LUyw4GBwvUDsbHA3vUksWGBgv3yxrPihnLCgvUDwHUEwe',
        'B3bLBG',
        'rgL0zw11A2fUia',
        'y2vUDgvY',
        'sw5MB3jTyxnPiefRDw4',
        'CMvTB3zLsxrLBq',
        'BgvUz3rO',
        'z2v0qM91BMrPBMDdBgLLBNrszwn0',
        'z2v0qxr0CMLIDxrL',
        'rgLOzw50AwTHBIbTyw51ywWU',
        'l2nSAwvUDhmV',
        'v2HHDhnHCha',
        'DgfNtMfTzq',
        'CgvYBwfeAxnHyMXLza',
        'zgLZywjSzwq',
        'BwfYz2LUlxjPz2H0oJzWEdTWywrKAw5NoJrWEcaXmhb4o2jHy2TNCM91BMq6iZjLn2qZmJTJB2XVCJOJzMzMo2jVCMrLCJPUB25Lo2jVCMrLCI1YywrPDxm6nhb4o2n1CNnVCJPWB2LUDgvYoW',
        'qMf0yxmGBwfRC2LTywWGBg9VCcb0zxjJyxbHAsWGyMvYAgvUDgKU',
        'sxrLBsaIvgvSzwDYyw0IihrPzgfRigrPDgvTDwTHBIbKAsbKCM9Wzg93BIWGC2TPCcbUyxnHyMfOigLUAq'
    ];
    _0x1a3b = function () {
        return _0x1c310d;
    };
    return _0x1a3b();
}
