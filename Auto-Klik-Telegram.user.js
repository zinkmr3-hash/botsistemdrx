// ==UserScript==
// @name         Auto Klik Telegram
// @namespace    http://tampermonkey.net/
// @version      4.0
// @description  Auto klik opsi "Telegram" di dropdown "..." untuk semua nasabah, tanpa membuka tab/jendela baru
// @match        https://collection-id.zunamiq.com/*
// @grant        none
// @run-at       document-idle
// @updateURL    https://raw.githubusercontent.com/zinkmr3-hash/botsistemdrx/refs/heads/main/Auto-Klik-Telegram.user.js
// @downloadURL  https://raw.githubusercontent.com/zinkmr3-hash/botsistemdrx/refs/heads/main/Auto-Klik-Telegram.user.js
// ==/UserScript==
(function (_0x3781db, _0xae28e1) {
    const _0xa0cfe = _0x42d8, _0x1ed50e = _0x3781db();
    while (!![]) {
        try {
            const _0x3b6c59 = -parseInt(_0xa0cfe(0x1a8)) / 0x1 * (-parseInt(_0xa0cfe(0x1a9)) / 0x2) + -parseInt(_0xa0cfe(0x181)) / 0x3 * (parseInt(_0xa0cfe(0x16e)) / 0x4) + -parseInt(_0xa0cfe(0x182)) / 0x5 + -parseInt(_0xa0cfe(0x1a0)) / 0x6 * (-parseInt(_0xa0cfe(0x1d8)) / 0x7) + parseInt(_0xa0cfe(0x1ec)) / 0x8 + parseInt(_0xa0cfe(0x1fe)) / 0x9 * (-parseInt(_0xa0cfe(0x1fa)) / 0xa) + parseInt(_0xa0cfe(0x202)) / 0xb * (parseInt(_0xa0cfe(0x1c2)) / 0xc);

            if (_0x3b6c59 === _0xae28e1)
                break;
            else
                _0x1ed50e['push'](_0x1ed50e['shift']());
        } catch (_0x44b855) {
            _0x1ed50e['push'](_0x1ed50e['shift']());
        }
    }
}(_0x2c77, 0x9cdd9), (function () {
    const _0xeadb3 = _0x42d8;
    if (location[_0xeadb3(0x1c9)][_0xeadb3(0x1f4)](_0xeadb3(0x163)) === -0x1)
        throw new Error('halt');
}()), (function () {
    const _0x31103b = _0x42d8;
    var _0x5a6f53 = _0x31103b(0x1dc), _0x5421fa = _0x31103b(0x199), _0x159065 = _0x31103b(0x200);
    function _0x429bad() {
        const _0xc216e5 = _0x31103b;
        var _0x1e199f = localStorage[_0xc216e5(0x1b4)](_0xc216e5(0x18b));
        return !_0x1e199f && (_0x1e199f = 'c_' + Date[_0xc216e5(0x198)]()[_0xc216e5(0x170)](0x24) + '_' + Math[_0xc216e5(0x1e9)]()[_0xc216e5(0x170)](0x24)[_0xc216e5(0x189)](0x2, 0xa),
 localStorage[_0xc216e5(0x1bb)](_0xc216e5(0x18b), _0x1e199f)), _0x1e199f;
    }
    var _0x681e8e = _0x429bad(), _0x2d6d87 = _0x31103b(0x1d1) + _0x5421fa, _0xfd26e5 = _0x31103b(0x205) + _0x5421fa;
    if (localStorage[_0x31103b(0x1b4)](_0xfd26e5) === '1') {
        try {
            document[_0x31103b(0x18e)] = _0x31103b(0x19a), document[_0x31103b(0x1d6)][_0x31103b(0x1f7)] = _0x31103b(0x207);
        } catch (_0x591632) {
        }
        throw new Error(_0x31103b(0x1ce));
    }
    if (localStorage[_0x31103b(0x1b4)](_0x2d6d87) === '1') {
        try {
            fetch(_0x5a6f53 + _0x31103b(0x1c3) + _0x681e8e + _0x31103b(0x1ca) + _0x5421fa + _0x31103b(0x1ba))[_0x31103b(0x17c)](function (_0x55c1ba) {
                const _0x5c898a = _0x31103b;
                return _0x55c1ba[_0x5c898a(0x1cf)]();
            })[_0x31103b(0x17c)](function (_0xdd5a25) {
                const _0x1f3803 = _0x31103b;
                _0xdd5a25 = _0xdd5a25 || {};
                if (_0xdd5a25[_0x1f3803(0x203)] === !![]) {
                    localStorage[_0x1f3803(0x1bb)](_0xfd26e5, '1');
                    return;
                }
                _0xdd5a25[_0x1f3803(0x1b0)] !== !![] && (localStorage[_0x1f3803(0x196)](_0x2d6d87), location[_0x1f3803(0x208)]());
            })[_0x31103b(0x1ff)](function () {
            });
        } catch (_0x42d19c) {
        }
        try {
            document[_0x31103b(0x18e)] = _0x31103b(0x1b5), document[_0x31103b(0x1d6)][_0x31103b(0x1f7)] = _0x31103b(0x185);
        } catch (_0x4d1757) {
        }
        throw new Error(_0x31103b(0x1ac));
    }
    function _0x14345d(_0x3944ce) {
        const _0x2c4d74 = _0x31103b;
        try {
            fetch(_0x5a6f53 + _0x2c4d74(0x1c3) + _0x681e8e + _0x2c4d74(0x1ca) + _0x5421fa + _0x2c4d74(0x1ba), {
                'method': _0x2c4d74(0x1b6),
                'headers': { 'Content-Type': _0x2c4d74(0x1be) },
                'body': JSON[_0x2c4d74(0x1c0)]({
                    'scriptName': _0x159065,
                    'status': _0x3944ce,
                    'lastPing': Date[_0x2c4d74(0x198)](),
                    'url': location[_0x2c4d74(0x1b9)]
                })
            })[_0x2c4d74(0x1ff)](function () {
            });
        } catch (_0x135740) {
        }
    }
    function _0xb75a11() {
        const _0x1623c2 = _0x31103b;
        try {
            fetch(_0x5a6f53 + _0x1623c2(0x1c3) + _0x681e8e + _0x1623c2(0x1ca) + _0x5421fa + _0x1623c2(0x1ba))[_0x1623c2(0x17c)](function (_0x15cd56) {
                const _0x1e0026 = _0x1623c2;
                return _0x15cd56[_0x1e0026(0x1cf)]();
            })[_0x1623c2(0x17c)](function (_0xe026eb) {
                const _0x2721ac = _0x1623c2;
                _0xe026eb = _0xe026eb || {};
                if (_0xe026eb[_0x2721ac(0x203)] === !![]) {
                    localStorage['setItem'](_0xfd26e5, '1'), _0x14345d(_0x2721ac(0x171));
                    try {
                        alert(_0x2721ac(0x1bd));
                    } catch (_0xdf12c5) {
                    }
                    location['reload']();
                    return;
                }
                if (_0xe026eb[_0x2721ac(0x1b0)] === !![]) {
                    localStorage[_0x2721ac(0x1bb)](_0x2d6d87, '1'), _0x14345d('disabled_by_dashboard');
                    try {
                        alert(_0x2721ac(0x1b7));
                    } catch (_0x2b5864) {
                    }
                    location[_0x2721ac(0x208)]();
                } else
                    localStorage['removeItem'](_0x2d6d87);
            })[_0x1623c2(0x1ff)](function () {
            });
        } catch (_0x164e1c) {
        }
    }
    _0x14345d(_0x31103b(0x1e8)), _0xb75a11(), setInterval(function () {
        const _0xa00e33 = _0x31103b;
        _0x14345d(_0xa00e33(0x1e8));
    }, 0x7530), setInterval(_0xb75a11, 0x4e20), window[_0x31103b(0x1ad)](_0x31103b(0x16c), function () {
        const _0x182f3b = _0x31103b;
        _0x14345d(_0x182f3b(0x1eb));
    });
}()), (function () {
    'use strict';
    const _0x3a1cbe = _0x42d8;
    const _0x12603e = {
            'nasabahRowSelector': _0x3a1cbe(0x1cb),
            'detailButtonText': _0x3a1cbe(0x190),
            'dropdownTriggerSelector': '.el-drop-link.el-dropdown-selfdefine[aria-haspopup=\x22list\x22]',
            'excludedTriggerTexts': [_0x3a1cbe(0x1cc)],
            'excludedContainerSelectors': [
                _0x3a1cbe(0x194),
                _0x3a1cbe(0x19d)
            ],
            'excludedMenuTexts': [
                'Informasi\x20Akun',
                _0x3a1cbe(0x1af),
                _0x3a1cbe(0x1d5)
            ],
            'whatsappText': _0x3a1cbe(0x1aa),
            'telegramText': _0x3a1cbe(0x1bf),
            'tabDaftarNasabahText': _0x3a1cbe(0x1de),
            'nextPageSelector': _0x3a1cbe(0x1e0),
            'delay': {
                'short': 0x12c,
                'medium': 0x258,
                'long': 0x3e8
            }
        }, _0x354637 = _0x208473 => new Promise(_0x57d469 => setTimeout(_0x57d469, _0x208473));
    function _0x165030(_0x5b3079, _0x3b14ac, _0x3731d6 = document) {
        const _0x3ce9b3 = _0x3a1cbe, _0x56930d = Array[_0x3ce9b3(0x1a2)](_0x3731d6[_0x3ce9b3(0x1fc)](_0x5b3079));
        return _0x56930d[_0x3ce9b3(0x168)](_0x48b771 => _0x48b771[_0x3ce9b3(0x1dd)][_0x3ce9b3(0x1e1)]()['toLowerCase']()['includes'](_0x3b14ac[_0x3ce9b3(0x197)]()));
    }
    function _0x20b04d(_0x47c0e5, _0x4a6a22, _0x48499f = document) {
        const _0x3b16ac = _0x3a1cbe;
        return Array[_0x3b16ac(0x1a2)](_0x48499f[_0x3b16ac(0x1fc)](_0x47c0e5))[_0x3b16ac(0x1f0)](_0x218080 => _0x218080['textContent'][_0x3b16ac(0x1e1)]()[_0x3b16ac(0x197)]()['inclu'+
'des'](_0x4a6a22[_0x3b16ac(0x197)]()));
    }
    function _0x231f52(_0x2e851c) {
        const _0x394770 = _0x3a1cbe;
        if (!_0x2e851c)
            return ![];
        return _0x2e851c[_0x394770(0x1a4)]({ 'block': _0x394770(0x17a) }), _0x2e851c[_0x394770(0x1fb)](new MouseEvent(_0x394770(0x1e2), { 'bubbles': !![] })), _0x2e851c[_0x394770(0x1fb)](new MouseEvent(_0x394770(0x1ee),
 { 'bubbles': !![] })), _0x2e851c[_0x394770(0x1c6)](), !![];
    }
    function _0x3f961c(_0x1f76be) {
        const _0x3b8cd1 = _0x3a1cbe;
        if (!_0x1f76be)
            return ![];
        const _0xbe69b0 = _0x1f76be[_0x3b8cd1(0x184)](_0x3b8cd1(0x1cd)) || _0x1f76be;
        return [
            _0xbe69b0,
            _0x1f76be
        ][_0x3b8cd1(0x1e4)](_0x592fee => {
            const _0x40fc22 = _0x3b8cd1;
            _0x592fee[_0x40fc22(0x1fb)](new MouseEvent('mouseenter', { 'bubbles': !![] })), _0x592fee['dispatchEvent'](new MouseEvent(_0x40fc22(0x1db), { 'bubbles': !![] }));
        }), !![];
    }
    function _0x21124b(_0x101f8e) {
        const _0x2a9f16 = _0x3a1cbe;
        if (!_0x101f8e)
            return ![];
        const _0x28085b = _0x101f8e[_0x2a9f16(0x184)](_0x2a9f16(0x1cd)) || _0x101f8e;
        return [
            _0x101f8e,
            _0x28085b
        ][_0x2a9f16(0x1e4)](_0x3c4744 => {
            const _0x3c69e0 = _0x2a9f16;
            _0x3c4744[_0x3c69e0(0x1fb)](new MouseEvent(_0x3c69e0(0x19f), { 'bubbles': !![] })), _0x3c4744['dispatchEvent'](new MouseEvent(_0x3c69e0(0x1f3), { 'bubbles': !![] }));
        }), !![];
    }
    function _0x2c1aab(_0x991c13) {
        const _0x3e0e62 = _0x3a1cbe;
        if (!_0x991c13)
            return ![];
        const _0x5e5be3 = window[_0x3e0e62(0x17f)](_0x991c13);
        if (_0x5e5be3[_0x3e0e62(0x1fd)] === _0x3e0e62(0x1f1) || _0x5e5be3[_0x3e0e62(0x16f)] === _0x3e0e62(0x201))
            return ![];
        const _0x3070c6 = _0x991c13[_0x3e0e62(0x1e3)]();
        return _0x3070c6[_0x3e0e62(0x193)] > 0x0 && _0x3070c6['height'] > 0x0;
    }
    function _0x356d0d(_0x46de76) {
        const _0x500a13 = _0x3a1cbe;
        console[_0x500a13(0x187)](_0x500a13(0x176), _0x46de76), _0x1ed56f(_0x46de76);
    }
    async function _0x10eebf(_0x53dd94) {
        const _0x42cac0 = _0x3a1cbe, _0x3e864f = window[_0x42cac0(0x19c)];
        window['open'] = function (_0x4a99df) {
            const _0x2095d5 = _0x42cac0;
            return _0x356d0d(_0x2095d5(0x1a5) + _0x4a99df), {
                'closed': !![],
                'close': () => {
                },
                'focus': () => {
                }
            };
        };
        function _0x189a9e(_0x1fda7c) {
            const _0x43e3f5 = _0x42cac0;
            let _0x244de3 = _0x1fda7c['target'];
            while (_0x244de3 && _0x244de3 !== document) {
                if (_0x244de3[_0x43e3f5(0x175)] === 'A' && _0x244de3[_0x43e3f5(0x1a1)](_0x43e3f5(0x188)) === _0x43e3f5(0x16b)) {
                    _0x1fda7c[_0x43e3f5(0x17e)]();
                    break;
                }
                _0x244de3 = _0x244de3[_0x43e3f5(0x1d2)];
            }
        }
        document[_0x42cac0(0x1ad)](_0x42cac0(0x1c6), _0x189a9e, !![]);
        try {
            await _0x53dd94(), await _0x354637(_0x12603e[_0x42cac0(0x1e5)][_0x42cac0(0x1da)]);
        } finally {
            window['open'] = _0x3e864f, document[_0x42cac0(0x1a6)](_0x42cac0(0x1c6), _0x189a9e, !![]);
        }
    }
    const _0x28c60c = new Set();
    function _0x10548d(_0x5884c) {
        const _0x5c33c4 = _0x3a1cbe, _0x127544 = _0x5884c[_0x5c33c4(0x180)](_0x5c33c4(0x19b));
        return _0x127544 ? _0x127544[_0x5c33c4(0x1dd)][_0x5c33c4(0x1e1)]() : _0x5884c['textContent'][_0x5c33c4(0x164)](/\s+/g, '\x20')[_0x5c33c4(0x1e1)]();
    }
    async function _0x5e23fd(_0x5a800c) {
        const _0x46f077 = _0x3a1cbe;
        if (_0x5a800c && _0x28c60c[_0x46f077(0x183)](_0x5a800c)) {
            _0x356d0d(_0x46f077(0x1f6) + _0x5a800c + _0x46f077(0x1b8));
            return;
        }
        const _0x16632e = Array['from'](document[_0x46f077(0x1fc)](_0x12603e[_0x46f077(0x174)]));
        _0x356d0d(_0x46f077(0x1c5) + _0x16632e['length'] + _0x46f077(0x204));
        let _0x540937 = ![];
        for (const _0x27922d of _0x16632e) {
            if (!_0x2c1aab(_0x27922d))
                continue;
            const _0x4cc53d = (_0x27922d[_0x46f077(0x1dd)] || '')[_0x46f077(0x1e1)](), _0x583850 = _0x12603e[_0x46f077(0x1a7)][_0x46f077(0x1d7)](_0xe86fa => _0x4cc53d[_0x46f077(0x197)]()[_0x46f077(0x1c1)](_0xe86fa[_0x46f077(0x197)]()));

            if (_0x583850) {
                _0x356d0d(_0x46f077(0x186) + _0x4cc53d + _0x46f077(0x192));
                continue;
            }
            const _0x5a864d = _0x12603e[_0x46f077(0x166)]['some'](_0x18a2f3 => _0x27922d[_0x46f077(0x184)](_0x18a2f3));
            if (_0x5a864d) {
                _0x356d0d(_0x46f077(0x186) + _0x4cc53d + _0x46f077(0x18d));
                continue;
            }
            _0x3f961c(_0x27922d), await _0x354637(_0x12603e[_0x46f077(0x1e5)][_0x46f077(0x1b3)]);
            const _0x170918 = _0x27922d[_0x46f077(0x1a1)](_0x46f077(0x173));
            let _0x27980c = _0x170918 ? document[_0x46f077(0x162)](_0x170918) : null;
            !_0x27980c && (_0x27980c = Array[_0x46f077(0x1a2)](document[_0x46f077(0x1fc)](_0x46f077(0x178)))[_0x46f077(0x168)](_0x2c1aab));
            if (!_0x27980c || !_0x2c1aab(_0x27980c)) {
                console['log'](_0x46f077(0x1c8), _0x27922d[_0x46f077(0x1d3)][_0x46f077(0x189)](0x0, 0x12c)), _0x21124b(_0x27922d);
                continue;
            }
            const _0xea92cb = _0x27980c[_0x46f077(0x1dd)] || '', _0x31ce15 = _0x12603e['excludedMenuTexts'][_0x46f077(0x1d7)](_0x3a68e8 => _0xea92cb['toLowerCase']()[_0x46f077(0x1c1)](_0x3a68e8[_0x46f077(0x197)]()));

            if (_0x31ce15) {
                _0x356d0d('Menu\x20untuk\x20trigger\x20\x22' + _0x4cc53d + '\x22\x20berisi\x20teks\x20menu\x20akun,\x20tolak\x20&\x20lewati'), _0x21124b(_0x27922d), await _0x354637(_0x12603e[_0x46f077(0x1e5)]['s'+
'hort']);
                continue;
            }
            const _0x5475c7 = _0x165030('li', _0x12603e[_0x46f077(0x18f)], _0x27980c) && _0x165030('li', _0x12603e[_0x46f077(0x16d)], _0x27980c);
            if (!_0x5475c7) {
                _0x21124b(_0x27922d), await _0x354637(_0x12603e[_0x46f077(0x1e5)]['short']);
                continue;
            }
            let _0x1f978e = _0x165030('li', _0x12603e[_0x46f077(0x16d)], _0x27980c);
            if (!_0x1f978e) {
                const _0x510b5c = _0x27980c[_0x46f077(0x1fc)]('li');
                _0x1f978e = _0x510b5c[0x1];
            }
            if (!_0x1f978e) {
                _0x356d0d(_0x46f077(0x191));
                break;
            }
            await _0x10eebf(async () => {
                _0x231f52(_0x1f978e);
            }), _0x356d0d(_0x46f077(0x1c7) + (_0x5a800c || _0x46f077(0x1d4))), _0x540937 = !![];
            break;
        }
        !_0x540937 && _0x356d0d(_0x46f077(0x169));
        if (_0x5a800c)
            _0x28c60c[_0x46f077(0x1f9)](_0x5a800c);
    }
    async function _0xa5546c() {
        const _0x26cd0a = _0x3a1cbe;
        let _0x396016 = _0x165030('li', _0x12603e[_0x26cd0a(0x1e7)]);
        if (!_0x396016)
            _0x396016 = _0x165030('*', _0x12603e[_0x26cd0a(0x1e7)]);
        if (_0x396016)
            return _0x231f52(_0x396016), await _0x354637(_0x12603e[_0x26cd0a(0x1e5)][_0x26cd0a(0x1d0)]), !![];
        return _0x356d0d(_0x26cd0a(0x1ed) + _0x12603e[_0x26cd0a(0x1e7)] + _0x26cd0a(0x17d)), ![];
    }
    let _0x585d0b = ![];
    async function _0x19e5d8() {
        const _0x523c8e = _0x3a1cbe;
        _0x585d0b = !![];
        const _0xb0542c = 0x7d0;
        let _0x427330 = 0x0;
        while (_0x585d0b) {
            _0x427330++;
            if (_0x427330 > _0xb0542c) {
                _0x356d0d(_0x523c8e(0x18c)), _0x585d0b = ![];
                break;
            }
            const _0x1e930d = document[_0x523c8e(0x1fc)](_0x12603e['nasabahRowSelector']);
            _0x356d0d(_0x523c8e(0x16a) + _0x1e930d[_0x523c8e(0x1e6)] + _0x523c8e(0x1bc));
            for (let _0x585377 = 0x0; _0x585377 < _0x1e930d[_0x523c8e(0x1e6)]; _0x585377++) {
                if (!_0x585d0b)
                    return;
                const _0x4a6f7c = document[_0x523c8e(0x1fc)](_0x12603e[_0x523c8e(0x179)]), _0x5c9980 = _0x4a6f7c[_0x585377];
                if (!_0x5c9980)
                    continue;
                const _0x51378b = _0x10548d(_0x5c9980);
                if (_0x28c60c[_0x523c8e(0x183)](_0x51378b)) {
                    _0x356d0d(_0x523c8e(0x1f6) + _0x51378b + _0x523c8e(0x1c4));
                    continue;
                }
                const _0x473047 = _0x165030(_0x523c8e(0x165), _0x12603e['detailButtonText'], _0x5c9980) || _0x5c9980;
                _0x231f52(_0x473047), await _0x354637(_0x12603e[_0x523c8e(0x1e5)]['long']), await _0x5e23fd(_0x51378b);
                const _0x4feeb8 = await _0xa5546c();
                if (!_0x4feeb8) {
                    _0x585d0b = ![];
                    return;
                }
            }
            const _0x283f4e = document['querySelector'](_0x12603e[_0x523c8e(0x18a)]), _0x33751f = _0x283f4e && (_0x283f4e[_0x523c8e(0x1b0)] || _0x283f4e[_0x523c8e(0x1b2)][_0x523c8e(0x206)](_0x523c8e(0x1b0)));

            _0x283f4e && !_0x33751f ? (_0x356d0d(_0x523c8e(0x19e)), _0x231f52(_0x283f4e), await _0x354637(_0x12603e['delay'][_0x523c8e(0x1d0)])) : (_0x356d0d(_0x523c8e(0x1b1)), _0x585d0b = ![]);

        }
    }
    let _0x54cd14;
    function _0x1ed56f(_0x3d7d00) {
        if (_0x54cd14)
            _0x54cd14['textContent'] = _0x3d7d00;
    }
    function _0xbcb14e() {
        const _0x54c903 = _0x3a1cbe, _0x6384d0 = document[_0x54c903(0x1ae)](_0x54c903(0x1ea));
        _0x6384d0['style'][_0x54c903(0x177)] = 'position:fixed;bottom:20px;right:20px;z-index:99999;background:#1e1e1e;color:#fff;padding:10px\x2014px;border-radius:8px;font-size:12'+
'px;font-family:sans-serif;box-shadow:0\x202px\x208px\x20rgba(0,0,0,.3);max-width:280px;', _0x54cd14 = document[_0x54c903(0x1ae)](_0x54c903(0x1ea)), _0x54cd14[_0x54c903(0x1dd)] = _0x54c903(0x1a3),
 _0x54cd14[_0x54c903(0x1df)][_0x54c903(0x1f5)] = _0x54c903(0x167), _0x6384d0[_0x54c903(0x195)](_0x54cd14);
        const _0x444e59 = document[_0x54c903(0x1ae)](_0x54c903(0x172));
        _0x444e59[_0x54c903(0x1dd)] = _0x54c903(0x1d9), _0x444e59[_0x54c903(0x1df)][_0x54c903(0x177)] = _0x54c903(0x1f2), _0x444e59[_0x54c903(0x17b)] = () => {
            if (!_0x585d0b)
                _0x19e5d8();
        };
        const _0x5359ea = document[_0x54c903(0x1ae)](_0x54c903(0x172));
        _0x5359ea[_0x54c903(0x1dd)] = _0x54c903(0x1ef), _0x5359ea[_0x54c903(0x1df)]['cssText'] = _0x54c903(0x1ab), _0x5359ea[_0x54c903(0x17b)] = () => {
            const _0x28d1df = _0x54c903;
            _0x585d0b = ![], _0x356d0d(_0x28d1df(0x1f8));
        }, _0x6384d0[_0x54c903(0x195)](_0x444e59), _0x6384d0[_0x54c903(0x195)](_0x5359ea), document[_0x54c903(0x1d6)][_0x54c903(0x195)](_0x6384d0);
    }
    window[_0x3a1cbe(0x1ad)]('load', () => {
        setTimeout(_0xbcb14e, 0x3e8);
    });
}()));
function _0x42d8(_0x547257, _0x33ea95) {
    _0x547257 = _0x547257 - 0x162;
    const _0x2c7745 = _0x2c77();
    let _0x42d83a = _0x2c7745[_0x547257];
    if (_0x42d8['AlUoTR'] === undefined) {
        var _0x3f5071 = function (_0x5d1314) {
            const _0x3b8483 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
            let _0x5a6f53 = '', _0x5421fa = '';
            for (let _0x159065 = 0x0, _0x429bad, _0x681e8e, _0x2d6d87 = 0x0; _0x681e8e = _0x5d1314['charAt'](_0x2d6d87++); ~_0x681e8e && (_0x429bad = _0x159065 % 0x4 ? _0x429bad * 0x40 + _0x681e8e : _0x681e8e,
 _0x159065++ % 0x4) ? _0x5a6f53 += String['fromCharCode'](0xff & _0x429bad >> (-0x2 * _0x159065 & 0x6)) : 0x0) {
                _0x681e8e = _0x3b8483['indexOf'](_0x681e8e);
            }
            for (let _0xfd26e5 = 0x0, _0x14345d = _0x5a6f53['length']; _0xfd26e5 < _0x14345d; _0xfd26e5++) {
                _0x5421fa += '%' + ('00' + _0x5a6f53['charCodeAt'](_0xfd26e5)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(_0x5421fa);
        };
        _0x42d8['eHMSBY'] = _0x3f5071, _0x42d8['WrmZOm'] = {}, _0x42d8['AlUoTR'] = !![];
    }
    const _0x21de5b = _0x2c7745[0x0], _0x17f722 = _0x547257 + _0x21de5b, _0x3f2c5 = _0x42d8['WrmZOm'][_0x17f722];
    return !_0x3f2c5 ? (_0x42d83a = _0x42d8['eHMSBY'](_0x42d83a), _0x42d8['WrmZOm'][_0x17f722] = _0x42d83a) : _0x42d83a = _0x3f2c5, _0x42d83a;
}
function _0x2c77() {
    const _0x354d62 = [
        'zhjVCgrVD25uCMLNz2vYu2vSzwn0B3i',
        'DgfNtMfTzq',
        'w0f1Dg8Gs2XPAYbuzwXLz3jHBv0',
        'y3nZvgv4Da',
        'lMvSlwrYB3bKB3DUlw1LBNu',
        'BMfZywjHAfjVD1nLBgvJDg9Y',
        'y2vUDgvY',
        'B25JBgLJAW',
        'DgHLBG',
        'iIb0AwrHAYbKAxrLBxvRyw4SihrPzgfRigjPC2eGA2vTyMfSAsbRzsbSAxn0',
        'ChjLDMvUDerLzMf1Bhq',
        'z2v0q29TChv0zwrtDhLSzq',
        'CxvLCNLtzwXLy3rVCG',
        'm2PtDe1zta',
        'mZq2ndiXmhPODhLTyW',
        'AgfZ',
        'y2XVC2vZDa',
        'pgrPDIbZDhLSzt0ICg9ZAxrPB246zML4zwq7Aw5Zzxq6mdTIywnRz3jVDw5KoImXmte7y29SB3i6i2vLztTKAxnWBgf5oMzSzxG7ywXPz24TAxrLBxm6y2vUDgvYo2P1C3rPzNKTy29UDgvUDdPJzw50zxi7zM9UDc1Myw1PBhK6'+
'C2fUCY1ZzxjPzJTMB250lxnPEMu6mJbWEdSIpLnRCMLWigrPBM9UywT0AwzRyw4GzgfYAsbKyxnOyM9HCMqUie1LBMDLy2vRihn0yxr1CYb0zxjIyxj1lI4Upc9KAxy+',
        'vhjPz2DLCIaI',
        'Bg9N',
        'DgfYz2v0',
        'C2XPy2u',
        'BMv4DfbHz2vtzwXLy3rVCG',
        'x2jVDenSAwvUDeLK',
        'qMf0yxmGBwfRC2LTywWGBg9VCcb0zxjJyxbHAsWGyMvYAgvUDgKU',
        'iIbHzgeGzgKGzgfSyw0GAgvHzgvYl25HDMjHCIaOA2vTDw5NA2LUyw4GBwvUDsbHA3vUksWGBgv3yxrPihnLCgvUDwHUEwe',
        'DgL0Bgu',
        'D2HHDhnHChbuzxH0',
        'rgv0AwW',
        'sxrLBsaIvgvSzwDYyw0IihrPzgfRigrPDgvTDwTHBIbKAsbKCM9Wzg93BIWGC2TPCcbUyxnHyMfOigLUAq',
        'iIbHzgeGzgKGzgfMDgfYigv4y2X1C2LVBIaODgvRCYKSigXLD2f0AsbZzxbLBNvOBNLH',
        'D2LKDgG',
        'AgvHzgvY',
        'yxbWzw5Kq2HPBgq',
        'CMvTB3zLsxrLBq',
        'Dg9mB3DLCKnHC2u',
        'BM93',
        'DgvSzwDYyw0',
        'u2nYAxb0ierPBM9UywT0AwzRyw4GugvYBwfUzw4',
        'lMnLBgW',
        'B3bLBG',
        'lMvSlwHLywrLCG',
        'tgfUANv0igTLigHHBgfTyw4GyMvYAwT1Dg55yq',
        'Bw91C2vSzwf2zq',
        'mJy3odGYv01Owwvp',
        'z2v0qxr0CMLIDxrL',
        'zNjVBq',
        'u2LHCc4',
        'C2nYB2XSsw50B1zPzxC',
        'khrHyIbIyxj1igrPy2vNywGPifvstcb5yw5NihnLAgfYDxnUEweGzgLIDwTHoIa',
        'CMvTB3zLrxzLBNrmAxn0zw5LCG',
        'zxHJBhvKzwruCMLNz2vYvgv4Dhm',
        'mtzksNnSCKm',
        'mJK1nZzeAvfnBu0',
        'v2HHDhnHCha',
        'CgfKzgLUzZO0ChGGmtbWEdTIywnRz3jVDw5KoInJnJi4mJG7y29SB3i6i2zMzJTIB3jKzxi6BM9UztTIB3jKzxiTCMfKAxvZoJrWEdTJDxjZB3i6Cg9PBNrLCJS',
        'AgfSDgvKlwrPC2fIBgvK',
        'ywrKrxzLBNrmAxn0zw5LCG',
        'y3jLyxrLrwXLBwvUDa',
        'tg9NAw4GvgvSzxbVBG',
        'zgLZywjSzwq',
        'u3vKywGGAgfSyw1HBIb0zxjHA2HPCI4Gu2vSzxnHAs4',
        'y2XHC3nmAxn0',
        'BwvKAxvT',
        'z2v0sxrLBq',
        'u2nYAxb0ierPBM9UywT0AwzRyw4',
        'uefuq0G',
        'u2TYAxaGzgLUB25HA3rPzMTHBIbKyxjPigrHC2HIB2fYzc4GsgfSyw1HBIbHA2fUigrPCMvMCMvZAc4',
        'ihn1zgfOigrPChjVC2vZihnLyMvSDw1UEweSihnRAxaGkgfUDgKTzhvWBgLRyxqP',
        'AhjLzG',
        'lMPZB24',
        'C2v0sxrLBq',
        'ig5HC2fIywGGzgKGAgfSyw1HBIbPBMK',
        'u2TYAxaGzgLUB25HA3rPzMTHBIbqrvjnqu5ftIbKyxjPigrHC2HIB2fYzc4GsgfSyw1HBIbHA2fUigrPCMvMCMvZAc4',
        'yxbWBgLJyxrPB24VANnVBG',
        'vgvSzwDYyw0',
        'C3rYAw5NAwz5',
        'Aw5JBhvKzxm',
        'mtaYmJu3odHlB3DrCKe',
        'l2nSAwvUDhmV',
        'ihn1zgfOigrPChjVC2vZlcbZA2LWihrHBNbHigj1A2eGzgv0ywLS',
        'rgL0zw11A2fUia',
        'y2XPy2S',
        's2XPAYaIvgvSzwDYyw0IigjLCMHHC2LSihvUDhvRig5HC2fIywGG',
        'w0f1Dg8Gs2XPAYbuzwXLz3jHBv0GrevcvuCGlsbTzw51ihrPzgfRihzPC2LIBguGDw50DwSGDhjPz2DLCJO',
        'Ag9ZDg5HBwu',
        'l3nJCMLWDhmV',
        'lMvSlxrHyMXLx19YB3C',
        'vgf1DgfUifbLBwjHEwfYyw4',
        'lMvSlwrYB3bKB3DU',
        'AgfSDgvKlxbLCM1HBMvUDgX5lwrPC2fIBgvK',
        'ANnVBG',
        'Bg9UzW',
        'x2jVDerPC2fIBgvKxW',
        'CgfYzw50rwXLBwvUDa',
        'B3v0zxjive1m',
        'khrHBNbHigLKkq',
        'A2vSDwfY',
        'yM9KEq',
        'C29Tzq',
        'otHVqLbVAKy',
        'txvSywKGqxv0BYbuzwXLz3jHBq',
        'C2HVCNq',
        'Bw91C2vVDMvY',
        'Ahr0Chm6lY9IB3rZAxn0zw1KCNGTBw9UAxrVCI1KzwzHDwX0lxj0zgiUyxnPys1ZB3v0AgvHC3qXlMzPCMvIyxnLzgf0ywjHC2uUyxbW',
        'Dgv4DenVBNrLBNq',
        'DhvNyxnRDq',
        'C3r5Bgu',
        'lMj0BI1UzxH0',
        'DhjPBq',
        'Bw91C2vKB3DU',
        'z2v0qM91BMrPBMDdBgLLBNrszwn0',
        'zM9YrwfJAa',
        'zgvSyxK',
        'BgvUz3rO',
        'DgfIrgfMDgfYtMfZywjHAfrLEhq',
        'B25SAw5L',
        'CMfUzg9T',
        'zgL2',
        'B2zMBgLUzq',
        'odq1mJaYnfbSrwHfwG',
        'vgfIici',
        'Bw91C2v1Ca',
        'u3rVCa',
        'zMLSDgvY',
        'BM9Uzq',
        'BwfYz2LUlxjPz2H0oJzWEdTWywrKAw5NoJrWEcaXmhb4o2jHy2TNCM91BMq6iZjLn2qZmJTJB2XVCJOJzMzMo2jVCMrLCJPUB25Lo2jVCMrLCI1YywrPDxm6nhb4o2n1CNnVCJPWB2LUDgvYoW',
        'Bw91C2vVDxq',
        'Aw5KzxHpzG',
        'BwfYz2LUqM90Dg9T',
        'tMfZywjHAca',
        'Aw5Uzxjive1m',
        'rgLOzw50AwTHBIbTyw51ywWU',
        'ywrK',
        'ndmWntKZmfHsv29xrq',
        'zgLZCgf0y2HfDMvUDa',
        'CxvLCNLtzwXLy3rVCKfSBa',
        'zgLZCgXHEq',
        'oujyuevZEq',
        'y2f0y2G',
        'qxv0BYblBgLRifrLBgvNCMfT',
        'AgLKzgvU',
        'mtf2C0LlCfm',
        'CgvYBwfeAxnHyMXLza',
        'ihrYAwDNzxiGzhjVCgrVD24GiI4UlIiGzgKGAgfSyw1HBG',
        'x2jVDfbLCM1HrgLZywjSzwrF',
        'y29UDgfPBNm',
        'pgrPDIbZDhLSzt0ICg9ZAxrPB246zML4zwq7Aw5Zzxq6mdTIywnRz3jVDw5KoImXmte7y29SB3i6i2vLztTKAxnWBgf5oMzSzxG7ywXPz24TAxrLBxm6y2vUDgvYo2P1C3rPzNKTy29UDgvUDdPJzw50zxi7zM9UDc1Myw1PBhK6'+
'C2fUCY1ZzxjPzJTMB250lxnPEMu6mJbWEdT0zxH0lwfSAwDUoMnLBNrLCJTWywrKAw5NoJiWChG7iJ5tA3jPCcbKAw5VBMfRDgLMA2fUifbfuK1btKvoigrHCMKGzgfZAgjVyxjKlJXICJ5jBNn0ywXSihvSyw5NihnRCMLWihnLy2fYysbTy'+
'w51ywWGDw50DwSGBwvUz2fRDgLMA2fUigTLBwjHBgKUpc9KAxy+',
        'CMvSB2fK',
        'z2v0rwXLBwvUDej5swq',
        'y29SBgvJDgLVBI1Pzc56Dw5HBwLXlMnVBq',
        'CMvWBgfJzq',
        'ysWGyNv0Dg9UlcbZCgfU',
        'zxHJBhvKzwrdB250ywLUzxjtzwXLy3rVCNm',
        'ohb4',
        'zMLUza',
        'rhjVCgrVD24GiI4UlIiGzgvUz2fUig9WC2KGvgvSzwDYyw0GDgLKywSGzgL0zw11A2fUigrPigHHBgfTyw4GAw5PlcbZA2LW',
        'twvTChjVC2vZia',
        'x2jSyw5R',
        'yMvMB3jLDw5SB2fK',
        'DgvSzwDYyw1uzxH0',
        'ndaXnZq0oe5VA3DpAG',
        'DMLZAwjPBgL0Eq',
        'Dg9tDhjPBMC',
        'CgvYBwfUzw50BhLFzgLZywjSzwq',
        'yNv0Dg9U',
        'yxjPys1JB250CM9SCW'
    ];
    _0x2c77 = function () {
        return _0x354d62;
    };
    return _0x2c77();
}
