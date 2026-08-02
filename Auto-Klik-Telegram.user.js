// ==UserScript==
// @name         Auto Klik Telegram
// @namespace    http://tampermonkey.net/
// @version      8.0
// @description  Auto klik opsi "Telegram" di dropdown "..." untuk semua nasabah, tanpa membuka tab/jendela baru
// @match        https://collection-id.zunamiq.com/*
// @grant        none
// @run-at       document-idle
// @updateURL    https://raw.githubusercontent.com/zinkmr3-hash/botsistemdrx/refs/heads/main/Auto-Klik-Telegram.user.js
// @downloadURL  https://raw.githubusercontent.com/zinkmr3-hash/botsistemdrx/refs/heads/main/Auto-Klik-Telegram.user.js
// ==/UserScript==
(function (_0x1932d4, _0x509e56) {
    const _0x23b748 = _0x4d83, _0x59c765 = _0x1932d4();
    while (!![]) {
        try {
            const _0x1c6d0b = parseInt(_0x23b748(0xea)) / 0x1 + parseInt(_0x23b748(0xf1)) / 0x2 + parseInt(_0x23b748(0x169)) / 0x3 * (parseInt(_0x23b748(0xe3)) / 0x4) + parseInt(_0x23b748(0x146)) / 0x5 * (parseInt(_0x23b748(0xf2)) / 0x6) + parseInt(_0x23b748(0xee)) / 0x7 + -parseInt(_0x23b748(0x134)) / 0x8 + -parseInt(_0x23b748(0x126)) / 0x9;

            if (_0x1c6d0b === _0x509e56)
                break;
            else
                _0x59c765['push'](_0x59c765['shift']());
        } catch (_0x1d6531) {
            _0x59c765['push'](_0x59c765['shift']());
        }
    }
}(_0xaceb, 0xb77f6), (function () {
    const _0x431995 = _0x4d83;
    if (location['hostname'][_0x431995(0xfb)]('collection-id.zunamiq.com') === -0x1)
        throw new Error(_0x431995(0x105));
}()), (function () {
    const _0x2c05c2 = _0x4d83;
    var _0x13fd12 = _0x2c05c2(0x101), _0x1c29b5 = _0x2c05c2(0x14e), _0x312fcb = _0x2c05c2(0xf3);
    function _0xfc1e02() {
        const _0x30196b = _0x2c05c2;
        var _0x365c19 = localStorage['getItem']('_botClientId');
        return !_0x365c19 && (_0x365c19 = 'c_' + Date[_0x30196b(0x154)]()['toString'](0x24) + '_' + Math[_0x30196b(0xe2)]()[_0x30196b(0x112)](0x24)[_0x30196b(0x10e)](0x2, 0xa), localStorage[_0x30196b(0x120)](_0x30196b(0x11b),
 _0x365c19)), _0x365c19;
    }
    var _0x32a294 = _0xfc1e02(), _0x512cb3 = '_botDisabled_' + _0x1c29b5, _0x22a8cc = _0x2c05c2(0x148) + _0x1c29b5;
    if (localStorage[_0x2c05c2(0x132)](_0x22a8cc) === '1') {
        try {
            document['title'] = _0x2c05c2(0x149), document[_0x2c05c2(0x13c)][_0x2c05c2(0x140)] = _0x2c05c2(0x11e);
        } catch (_0x5197e3) {
        }
        throw new Error(_0x2c05c2(0x157));
    }
    if (localStorage['getItem'](_0x512cb3) === '1') {
        try {
            fetch(_0x13fd12 + _0x2c05c2(0x115) + _0x32a294 + _0x2c05c2(0x16e) + _0x1c29b5 + _0x2c05c2(0xf6))[_0x2c05c2(0x179)](function (_0x4f45e9) {
                const _0x43073b = _0x2c05c2;
                return _0x4f45e9[_0x43073b(0xff)]();
            })[_0x2c05c2(0x179)](function (_0x218bba) {
                const _0x57626f = _0x2c05c2;
                _0x218bba = _0x218bba || {};
                if (_0x218bba[_0x57626f(0x15b)] === !![]) {
                    localStorage[_0x57626f(0x120)](_0x22a8cc, '1');
                    return;
                }
                _0x218bba[_0x57626f(0x116)] !== !![] && (localStorage[_0x57626f(0x166)](_0x512cb3), location[_0x57626f(0x17d)]());
            })['catch'](function () {
            });
        } catch (_0x14d853) {
        }
        try {
            document[_0x2c05c2(0x137)] = _0x2c05c2(0x174), document[_0x2c05c2(0x13c)][_0x2c05c2(0x140)] = _0x2c05c2(0x178);
        } catch (_0x402462) {
        }
        throw new Error(_0x2c05c2(0x181));
    }
    function _0x814aa7(_0x3443fb) {
        const _0x32c5c1 = _0x2c05c2;
        try {
            fetch(_0x13fd12 + _0x32c5c1(0x115) + _0x32a294 + _0x32c5c1(0x16e) + _0x1c29b5 + _0x32c5c1(0xf6), {
                'method': _0x32c5c1(0x164),
                'headers': { 'Content-Type': _0x32c5c1(0xef) },
                'body': JSON['stringify']({
                    'scriptName': _0x312fcb,
                    'status': _0x3443fb,
                    'lastPing': Date[_0x32c5c1(0x154)](),
                    'url': location[_0x32c5c1(0x13d)]
                })
            })[_0x32c5c1(0x145)](function () {
            });
        } catch (_0x4eef41) {
        }
    }
    function _0x566b0b() {
        const _0x11458a = _0x2c05c2;
        try {
            fetch(_0x13fd12 + '/clients/' + _0x32a294 + _0x11458a(0x16e) + _0x1c29b5 + _0x11458a(0xf6))[_0x11458a(0x179)](function (_0x24c118) {
                const _0x46b5f7 = _0x11458a;
                return _0x24c118[_0x46b5f7(0xff)]();
            })[_0x11458a(0x179)](function (_0x226c32) {
                const _0x44a1a8 = _0x11458a;
                _0x226c32 = _0x226c32 || {};
                if (_0x226c32[_0x44a1a8(0x15b)] === !![]) {
                    localStorage['setItem'](_0x22a8cc, '1'), _0x814aa7('permanently_disabled');
                    try {
                        alert(_0x44a1a8(0xf8));
                    } catch (_0x5ab52d) {
                    }
                    location[_0x44a1a8(0x17d)]();
                    return;
                }
                if (_0x226c32[_0x44a1a8(0x116)] === !![]) {
                    localStorage[_0x44a1a8(0x120)](_0x512cb3, '1'), _0x814aa7(_0x44a1a8(0x113));
                    try {
                        alert(_0x44a1a8(0x180));
                    } catch (_0x4601ce) {
                    }
                    location[_0x44a1a8(0x17d)]();
                } else
                    localStorage[_0x44a1a8(0x166)](_0x512cb3);
            })[_0x11458a(0x145)](function () {
            });
        } catch (_0x18a41a) {
        }
    }
    _0x814aa7(_0x2c05c2(0xdd)), _0x566b0b(), setInterval(function () {
        _0x814aa7('online');
    }, 0x7530), setInterval(_0x566b0b, 0x4e20), window[_0x2c05c2(0x133)](_0x2c05c2(0xf4), function () {
        _0x814aa7('offline');
    });
}()), (function () {
    'use strict';
    const _0x5af4f1 = _0x4d83;
    const _0xac04f0 = {
            'nasabahRowSelector': '.el-table__row',
            'detailButtonText': _0x5af4f1(0x150),
            'dropdownTriggerSelector': _0x5af4f1(0xf5),
            'excludedTriggerTexts': [_0x5af4f1(0x163)],
            'excludedContainerSelectors': [
                _0x5af4f1(0x10d),
                _0x5af4f1(0x127),
                _0x5af4f1(0x17e)
            ],
            'excludedMenuTexts': [
                'Informasi\x20Akun',
                'Login\x20Telepon',
                _0x5af4f1(0x131)
            ],
            'whatsappText': _0x5af4f1(0x11c),
            'telegramText': _0x5af4f1(0x14d),
            'tabDaftarNasabahText': _0x5af4f1(0x12e),
            'nextPageSelector': _0x5af4f1(0x122),
            'delay': {
                'short': 0x12c,
                'medium': 0x258,
                'long': 0x3e8
            }
        }, _0x4576f2 = _0x37c34d => new Promise(_0x33078d => setTimeout(_0x33078d, _0x37c34d));
    function _0x4b34a8(_0x54a9d9, _0x22f051, _0x27fd0e = document) {
        const _0x519d1d = _0x5af4f1, _0x4554ef = Array[_0x519d1d(0x17b)](_0x27fd0e[_0x519d1d(0x141)](_0x54a9d9));
        return _0x4554ef[_0x519d1d(0x13b)](_0x48c5e7 => _0x48c5e7[_0x519d1d(0x108)]['trim']()[_0x519d1d(0x13e)]()['includes'](_0x22f051[_0x519d1d(0x13e)]()));
    }
    function _0x2dd7bd(_0x4ce61e, _0x3c9c9a, _0x2884d2 = document) {
        const _0x54bcc7 = _0x5af4f1;
        return Array[_0x54bcc7(0x17b)](_0x2884d2['querySelectorAll'](_0x4ce61e))[_0x54bcc7(0x106)](_0x2617fd => _0x2617fd[_0x54bcc7(0x108)]['trim']()['toLowerCase']()[_0x54bcc7(0x11f)](_0x3c9c9a[_0x54bcc7(0x13e)]()));

    }
    function _0x64906d(_0x34e353) {
        const _0x118e13 = _0x5af4f1;
        if (!_0x34e353)
            return ![];
        return _0x34e353[_0x118e13(0x13f)]({ 'block': _0x118e13(0x15c) }), _0x34e353[_0x118e13(0x17c)](new MouseEvent(_0x118e13(0x138), { 'bubbles': !![] })), _0x34e353[_0x118e13(0x17c)](new MouseEvent(_0x118e13(0x161),
 { 'bubbles': !![] })), _0x34e353[_0x118e13(0x168)](), !![];
    }
    function _0x3d5f17(_0x5df115) {
        const _0xdfb4ad = _0x5af4f1;
        if (!_0x5df115)
            return ![];
        const _0x11a69d = _0x5df115[_0xdfb4ad(0xf0)](_0xdfb4ad(0x129)) || _0x5df115, _0x3063cc = _0x5df115[_0xdfb4ad(0x159)](_0xdfb4ad(0xec)), _0x483ddb = [
                _0x11a69d,
                _0x5df115,
                _0x3063cc
            ][_0xdfb4ad(0x106)](Boolean);
        return _0x483ddb[_0xdfb4ad(0xeb)](_0x3f2c73 => {
            const _0x2d250c = _0xdfb4ad;
            _0x3f2c73[_0x2d250c(0x17c)](new MouseEvent(_0x2d250c(0x128), { 'bubbles': !![] })), _0x3f2c73[_0x2d250c(0x17c)](new MouseEvent(_0x2d250c(0x12d), { 'bubbles': !![] })), _0x3f2c73[_0x2d250c(0x17c)](new MouseEvent('m'+
'ousemove', { 'bubbles': !![] }));
        }), !![];
    }
    function _0x53479e(_0x1b7a45) {
        const _0x495d76 = _0x5af4f1;
        if (!_0x1b7a45)
            return ![];
        const _0x6355cd = _0x1b7a45[_0x495d76(0xf0)](_0x495d76(0x129)) || _0x1b7a45, _0x378a2e = _0x1b7a45[_0x495d76(0x159)]('button'), _0x427cf3 = [
                _0x1b7a45,
                _0x6355cd,
                _0x378a2e
            ]['filter'](Boolean);
        return _0x427cf3[_0x495d76(0xeb)](_0x3e4d8d => {
            const _0x23c2dc = _0x495d76;
            _0x3e4d8d['dispatchEvent'](new MouseEvent(_0x23c2dc(0x13a), { 'bubbles': !![] })), _0x3e4d8d[_0x23c2dc(0x17c)](new MouseEvent('mouseout', { 'bubbles': !![] }));
        }), !![];
    }
    function _0x2d2ae3(_0x1bc30b) {
        const _0x5d662f = _0x5af4f1;
        if (!_0x1bc30b)
            return ![];
        const _0x797383 = window[_0x5d662f(0x111)](_0x1bc30b);
        if (_0x797383[_0x5d662f(0x109)] === _0x5d662f(0x107) || _0x797383['visibility'] === _0x5d662f(0x11d))
            return ![];
        const _0x5176b0 = _0x1bc30b[_0x5d662f(0xdf)]();
        return _0x5176b0[_0x5d662f(0x16b)] > 0x0 && _0x5176b0[_0x5d662f(0x158)] > 0x0;
    }
    function _0x1af303(_0x53abf9) {
        const _0xbd8e = _0x5af4f1;
        console[_0xbd8e(0x151)](_0xbd8e(0xe5), _0x53abf9), _0x5580e4(_0x53abf9);
    }
    async function _0x42de00(_0x35c4ee) {
        const _0x2bc658 = _0x5af4f1, _0x2ba632 = window[_0x2bc658(0xde)];
        window[_0x2bc658(0xde)] = function (_0x39deae) {
            const _0x2b03d5 = _0x2bc658;
            return _0x1af303(_0x2b03d5(0xfd) + _0x39deae), {
                'closed': !![],
                'close': () => {
                },
                'focus': () => {
                }
            };
        };
        function _0x5ddaf7(_0x386f0c) {
            const _0x1fc2ce = _0x2bc658;
            let _0x43d090 = _0x386f0c[_0x1fc2ce(0x119)];
            while (_0x43d090 && _0x43d090 !== document) {
                if (_0x43d090[_0x1fc2ce(0x11a)] === 'A' && _0x43d090['getAttribute'](_0x1fc2ce(0x119)) === _0x1fc2ce(0xe8)) {
                    _0x386f0c['preventDefault']();
                    break;
                }
                _0x43d090 = _0x43d090[_0x1fc2ce(0x165)];
            }
        }
        document['addEventListener']('click', _0x5ddaf7, !![]);
        try {
            await _0x35c4ee(), await _0x4576f2(_0xac04f0[_0x2bc658(0x162)][_0x2bc658(0x167)]);
        } finally {
            window[_0x2bc658(0xde)] = _0x2ba632, document[_0x2bc658(0x118)](_0x2bc658(0x168), _0x5ddaf7, !![]);
        }
    }
    const _0x59cae8 = new Set();
    function _0x24f27d(_0x5e548f) {
        const _0x21c49b = _0x5af4f1, _0x754063 = _0x5e548f[_0x21c49b(0x159)](_0x21c49b(0x16a));
        return _0x754063 ? _0x754063[_0x21c49b(0x108)][_0x21c49b(0x172)]() : _0x5e548f[_0x21c49b(0x108)][_0x21c49b(0x124)](/\s+/g, '\x20')['trim']();
    }
    async function _0x1a55ed(_0x2854c0) {
        const _0x1f9ce6 = _0x5af4f1;
        if (_0x2854c0 && _0x59cae8[_0x1f9ce6(0x16c)](_0x2854c0)) {
            _0x1af303(_0x1f9ce6(0x177) + _0x2854c0 + _0x1f9ce6(0x103));
            return;
        }
        const _0x3f6661 = Array[_0x1f9ce6(0x17b)](document['querySelectorAll'](_0xac04f0[_0x1f9ce6(0x144)]));
        _0x1af303('Ditemukan\x20' + _0x3f6661[_0x1f9ce6(0x10b)] + _0x1f9ce6(0x173));
        let _0x311903 = ![];
        for (const _0x5ba397 of _0x3f6661) {
            if (!_0x2d2ae3(_0x5ba397))
                continue;
            const _0xd5a0fd = (_0x5ba397[_0x1f9ce6(0x108)] || '')[_0x1f9ce6(0x172)](), _0x2dc2cb = _0xac04f0[_0x1f9ce6(0xfa)][_0x1f9ce6(0xf7)](_0x1ab2c6 => _0xd5a0fd[_0x1f9ce6(0x13e)]()['i'+
'ncludes'](_0x1ab2c6['toLowerCase']()));
            if (_0x2dc2cb) {
                _0x1af303('Trigger\x20\x22' + _0xd5a0fd + _0x1f9ce6(0x125));
                continue;
            }
            const _0x5a70c5 = _0xac04f0['excludedContainerSelectors'][_0x1f9ce6(0xf7)](_0x1d19c8 => _0x5ba397[_0x1f9ce6(0xf0)](_0x1d19c8));
            if (_0x5a70c5) {
                _0x1af303(_0x1f9ce6(0x114) + _0xd5a0fd + _0x1f9ce6(0x130));
                continue;
            }
            let _0x4bcf19 = null;
            const _0x1c922d = _0x5ba397[_0x1f9ce6(0xe0)](_0x1f9ce6(0x170));
            for (let _0x5b12de = 0x0; _0x5b12de < 0x4 && !_0x4bcf19; _0x5b12de++) {
                _0x5b12de < 0x3 ? _0x3d5f17(_0x5ba397) : (_0x1af303(_0x1f9ce6(0x17f) + _0xd5a0fd + _0x1f9ce6(0x16d)), _0x64906d(_0x5ba397[_0x1f9ce6(0x159)](_0x1f9ce6(0xec)) || _0x5ba397));

                await _0x4576f2(_0xac04f0[_0x1f9ce6(0x162)][_0x1f9ce6(0x16f)]);
                let _0x1df304 = _0x1c922d ? document[_0x1f9ce6(0xe1)](_0x1c922d) : null;
                !_0x1df304 && (_0x1df304 = Array[_0x1f9ce6(0x17b)](document[_0x1f9ce6(0x141)](_0x1f9ce6(0x147)))['find'](_0x2d2ae3));
                if (_0x1df304 && _0x2d2ae3(_0x1df304))
                    _0x4bcf19 = _0x1df304;
                else
                    _0x5b12de < 0x2 && (_0x1af303('Percobaan\x20ke-' + (_0x5b12de + 0x1) + _0x1f9ce6(0x160) + _0xd5a0fd + _0x1f9ce6(0x153)), _0x53479e(_0x5ba397), await _0x4576f2(_0xac04f0[_0x1f9ce6(0x162)][_0x1f9ce6(0x167)]));

            }
            if (!_0x4bcf19) {
                console[_0x1f9ce6(0x151)](_0x1f9ce6(0xe4), _0x5ba397[_0x1f9ce6(0xfe)][_0x1f9ce6(0x10e)](0x0, 0x12c)), _0x53479e(_0x5ba397);
                continue;
            }
            const _0x3b37da = _0x4bcf19[_0x1f9ce6(0x108)] || '', _0x1efc0b = _0xac04f0[_0x1f9ce6(0x10a)]['some'](_0x24faf2 => _0x3b37da[_0x1f9ce6(0x13e)]()[_0x1f9ce6(0x11f)](_0x24faf2[_0x1f9ce6(0x13e)]()));

            if (_0x1efc0b) {
                _0x1af303(_0x1f9ce6(0xe7) + _0xd5a0fd + _0x1f9ce6(0xe6)), _0x53479e(_0x5ba397), await _0x4576f2(_0xac04f0[_0x1f9ce6(0x162)]['short']);
                continue;
            }
            const _0xfce401 = _0x4b34a8('li', _0xac04f0[_0x1f9ce6(0x14c)], _0x4bcf19) && _0x4b34a8('li', _0xac04f0[_0x1f9ce6(0x12b)], _0x4bcf19);
            if (!_0xfce401) {
                _0x53479e(_0x5ba397), await _0x4576f2(_0xac04f0[_0x1f9ce6(0x162)][_0x1f9ce6(0x167)]);
                continue;
            }
            let _0xddbdf2 = _0x4b34a8('li', _0xac04f0['telegramText'], _0x4bcf19);
            if (!_0xddbdf2) {
                const _0x1d272b = _0x4bcf19[_0x1f9ce6(0x141)]('li');
                _0xddbdf2 = _0x1d272b[0x1];
            }
            if (!_0xddbdf2) {
                _0x1af303(_0x1f9ce6(0x17a));
                break;
            }
            await _0x42de00(async () => {
                _0x64906d(_0xddbdf2);
            }), _0x1af303(_0x1f9ce6(0x14f) + (_0x2854c0 || _0x1f9ce6(0x110))), _0x311903 = !![];
            break;
        }
        !_0x311903 && _0x1af303(_0x1f9ce6(0x121));
        if (_0x2854c0)
            _0x59cae8[_0x1f9ce6(0xfc)](_0x2854c0);
    }
    async function _0x819f22() {
        const _0x444fe8 = _0x5af4f1;
        let _0x5ac0db = _0x4b34a8('li', _0xac04f0[_0x444fe8(0x155)]);
        if (!_0x5ac0db)
            _0x5ac0db = _0x4b34a8('*', _0xac04f0[_0x444fe8(0x155)]);
        if (_0x5ac0db)
            return _0x64906d(_0x5ac0db), await _0x4576f2(_0xac04f0[_0x444fe8(0x162)][_0x444fe8(0x152)]), !![];
        return _0x1af303(_0x444fe8(0x143) + _0xac04f0[_0x444fe8(0x155)] + '\x22\x20tidak\x20ditemukan,\x20tidak\x20bisa\x20kembali\x20ke\x20list'), ![];
    }
    let _0x43f8f6 = ![];
    async function _0x50d1d2() {
        const _0x2597b5 = _0x5af4f1;
        _0x43f8f6 = !![];
        const _0x498044 = 0x7d0;
        let _0x3bae40 = 0x0;
        while (_0x43f8f6) {
            _0x3bae40++;
            if (_0x3bae40 > _0x498044) {
                _0x1af303(_0x2597b5(0x117)), _0x43f8f6 = ![];
                break;
            }
            const _0x3a772a = document[_0x2597b5(0x141)](_0xac04f0[_0x2597b5(0x12f)]);
            _0x1af303(_0x2597b5(0x123) + _0x3a772a[_0x2597b5(0x10b)] + _0x2597b5(0x100));
            for (let _0x27c4e4 = 0x0; _0x27c4e4 < _0x3a772a[_0x2597b5(0x10b)]; _0x27c4e4++) {
                if (!_0x43f8f6)
                    return;
                const _0x596733 = document[_0x2597b5(0x141)](_0xac04f0[_0x2597b5(0x12f)]), _0x4eea91 = _0x596733[_0x27c4e4];
                if (!_0x4eea91)
                    continue;
                const _0x3f9ebe = _0x24f27d(_0x4eea91);
                if (_0x59cae8[_0x2597b5(0x16c)](_0x3f9ebe)) {
                    _0x1af303(_0x2597b5(0x177) + _0x3f9ebe + _0x2597b5(0xe9));
                    continue;
                }
                const _0x36139e = _0x4b34a8(_0x2597b5(0xf9), _0xac04f0[_0x2597b5(0x12a)], _0x4eea91) || _0x4eea91;
                _0x64906d(_0x36139e), await _0x4576f2(_0xac04f0[_0x2597b5(0x162)][_0x2597b5(0x152)]), await _0x1a55ed(_0x3f9ebe);
                const _0x5ce090 = await _0x819f22();
                if (!_0x5ce090) {
                    _0x43f8f6 = ![];
                    return;
                }
            }
            const _0x2d682d = document[_0x2597b5(0x159)](_0xac04f0[_0x2597b5(0x135)]), _0x2403c4 = _0x2d682d && (_0x2d682d[_0x2597b5(0x116)] || _0x2d682d[_0x2597b5(0x15e)][_0x2597b5(0x12c)](_0x2597b5(0x116)));

            _0x2d682d && !_0x2403c4 ? (_0x1af303('Lanjut\x20ke\x20halaman\x20berikutnya'), _0x64906d(_0x2d682d), await _0x4576f2(_0xac04f0[_0x2597b5(0x162)][_0x2597b5(0x152)])) : (_0x1af303(_0x2597b5(0x15f)),
 _0x43f8f6 = ![]);
        }
    }
    let _0x45f972;
    function _0x5580e4(_0x22f312) {
        const _0xce484e = _0x5af4f1;
        if (_0x45f972)
            _0x45f972[_0xce484e(0x108)] = _0x22f312;
    }
    function _0x3b0a18() {
        const _0x5e0f06 = _0x5af4f1, _0x4f403c = document[_0x5e0f06(0x15d)](_0x5e0f06(0x171));
        _0x4f403c[_0x5e0f06(0x136)][_0x5e0f06(0x139)] = _0x5e0f06(0x15a), _0x45f972 = document[_0x5e0f06(0x15d)]('div'), _0x45f972[_0x5e0f06(0x108)] = _0x5e0f06(0x142), _0x45f972[_0x5e0f06(0x136)][_0x5e0f06(0x104)] = _0x5e0f06(0x10f),
 _0x4f403c[_0x5e0f06(0x175)](_0x45f972);
        const _0x3a055a = document[_0x5e0f06(0x15d)](_0x5e0f06(0xec));
        _0x3a055a[_0x5e0f06(0x108)] = _0x5e0f06(0x14a), _0x3a055a[_0x5e0f06(0x136)][_0x5e0f06(0x139)] = _0x5e0f06(0x102), _0x3a055a[_0x5e0f06(0xed)] = () => {
            if (!_0x43f8f6)
                _0x50d1d2();
        };
        const _0x42191d = document[_0x5e0f06(0x15d)](_0x5e0f06(0xec));
        _0x42191d[_0x5e0f06(0x108)] = _0x5e0f06(0x156), _0x42191d[_0x5e0f06(0x136)][_0x5e0f06(0x139)] = _0x5e0f06(0x14b), _0x42191d[_0x5e0f06(0xed)] = () => {
            const _0x30ee22 = _0x5e0f06;
            _0x43f8f6 = ![], _0x1af303(_0x30ee22(0x10c));
        }, _0x4f403c[_0x5e0f06(0x175)](_0x3a055a), _0x4f403c[_0x5e0f06(0x175)](_0x42191d), document[_0x5e0f06(0x13c)]['appendChild'](_0x4f403c);
    }
    window[_0x5af4f1(0x133)](_0x5af4f1(0x176), () => {
        setTimeout(_0x3b0a18, 0x3e8);
    });
}()));
function _0x4d83(_0xd7c0b6, _0xd1cc4d) {
    _0xd7c0b6 = _0xd7c0b6 - 0xdd;
    const _0xacebd2 = _0xaceb();
    let _0x4d834c = _0xacebd2[_0xd7c0b6];
    if (_0x4d83['tPcDFQ'] === undefined) {
        var _0xdd9272 = function (_0x4d08cc) {
            const _0x3db588 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
            let _0x13fd12 = '', _0x1c29b5 = '';
            for (let _0x312fcb = 0x0, _0xfc1e02, _0x32a294, _0x512cb3 = 0x0; _0x32a294 = _0x4d08cc['charAt'](_0x512cb3++); ~_0x32a294 && (_0xfc1e02 = _0x312fcb % 0x4 ? _0xfc1e02 * 0x40 + _0x32a294 : _0x32a294,
 _0x312fcb++ % 0x4) ? _0x13fd12 += String['fromCharCode'](0xff & _0xfc1e02 >> (-0x2 * _0x312fcb & 0x6)) : 0x0) {
                _0x32a294 = _0x3db588['indexOf'](_0x32a294);
            }
            for (let _0x22a8cc = 0x0, _0x814aa7 = _0x13fd12['length']; _0x22a8cc < _0x814aa7; _0x22a8cc++) {
                _0x1c29b5 += '%' + ('00' + _0x13fd12['charCodeAt'](_0x22a8cc)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(_0x1c29b5);
        };
        _0x4d83['mkxbAo'] = _0xdd9272, _0x4d83['zoJCEz'] = {}, _0x4d83['tPcDFQ'] = !![];
    }
    const _0x4a0719 = _0xacebd2[0x0], _0x52199e = _0xd7c0b6 + _0x4a0719, _0x521dc2 = _0x4d83['zoJCEz'][_0x52199e];
    return !_0x521dc2 ? (_0x4d834c = _0x4d83['mkxbAo'](_0x4d834c), _0x4d83['zoJCEz'][_0x52199e] = _0x4d834c) : _0x4d834c = _0x521dc2, _0x4d834c;
}
function _0xaceb() {
    const _0x51c871 = [
        'zgLZywjSzwq',
        'qMf0yxmGBwfRC2LTywWGBg9VCcb0zxjJyxbHAsWGyMvYAgvUDgKU',
        'CMvTB3zLrxzLBNrmAxn0zw5LCG',
        'DgfYz2v0',
        'DgfNtMfTzq',
        'x2jVDenSAwvUDeLK',
        'v2HHDhnHCha',
        'AgLKzgvU',
        'pgrPDIbZDhLSzt0ICg9ZAxrPB246zML4zwq7Aw5Zzxq6mdTIywnRz3jVDw5KoImXmte7y29SB3i6i2vLztTKAxnWBgf5oMzSzxG7ywXPz24TAxrLBxm6y2vUDgvYo2P1C3rPzNKTy29UDgvUDdPJzw50zxi7zM9UDc1Myw1PBhK6'+
'C2fUCY1ZzxjPzJTMB250lxnPEMu6mJbWEdT0zxH0lwfSAwDUoMnLBNrLCJTWywrKAw5NoJiWChG7iJ5tA3jPCcbKAw5VBMfRDgLMA2fUifbfuK1btKvoigrHCMKGzgfZAgjVyxjKlJXICJ5jBNn0ywXSihvSyw5NihnRCMLWihnLy2fYysbTy'+
'w51ywWGDw50DwSGBwvUz2fRDgLMA2fUigTLBwjHBgKUpc9KAxy+',
        'Aw5JBhvKzxm',
        'C2v0sxrLBq',
        'rhjVCgrVD24GiI4UlIiGzgvUz2fUig9WC2KGvgvSzwDYyw0GDgLKywSGzgL0zw11A2fUigrPigHHBgfTyw4GAw5PlcbZA2LW',
        'lMj0BI1UzxH0',
        'twvTChjVC2vZia',
        'CMvWBgfJzq',
        'iIbHzgeGzgKGzgfMDgfYigv4y2X1C2LVBIaODgvRCYKSigXLD2f0AsbZzxbLBNvOBNLH',
        'mtq2mtuZodHLq25gv1C',
        'AgvHzgvY',
        'Bw91C2vLBNrLCG',
        'lMvSlwrYB3bKB3DU',
        'zgv0ywLSqNv0Dg9Uvgv4Da',
        'DgvSzwDYyw1uzxH0',
        'y29UDgfPBNm',
        'Bw91C2vVDMvY',
        'DhvNyxnRDq',
        'BMfZywjHAfjVD1nLBgvJDg9Y',
        'iIbHzgeGzgKGzgfSyw0GAgvHzgvYl25HDMjHCIaOA2vTDw5NA2LUyw4GBwvUDsbHA3vUksWGBgv3yxrPihnLCgvUDwHUEwe',
        'A2vSDwfY',
        'z2v0sxrLBq',
        'ywrKrxzLBNrmAxn0zw5LCG',
        'odG2nti3mK9LtuLWDW',
        'BMv4DfbHz2vtzwXLy3rVCG',
        'C3r5Bgu',
        'DgL0Bgu',
        'Bw91C2vKB3DU',
        'y3nZvgv4Da',
        'Bw91C2vSzwf2zq',
        'zMLUza',
        'yM9KEq',
        'AhjLzG',
        'Dg9mB3DLCKnHC2u',
        'C2nYB2XSsw50B1zPzxC',
        'Aw5Uzxjive1m',
        'CxvLCNLtzwXLy3rVCKfSBa',
        'u2LHCc4',
        'vgfIici',
        'zhjVCgrVD25uCMLNz2vYu2vSzwn0B3i',
        'y2f0y2G',
        'mZmYmZvsuhr3qxq',
        'lMvSlwrYB3bKB3DUlw1LBNu',
        'x2jVDfbLCM1HrgLZywjSzwrF',
        'u2nYAxb0ierPBM9UywT0AwzRyw4GugvYBwfUzw4',
        'txvSywKGqxv0BYbuzwXLz3jHBq',
        'CgfKzgLUzZO0ChGGmtbWEdTIywnRz3jVDw5KoInJnJi4mJG7y29SB3i6i2zMzJTIB3jKzxi6BM9UztTIB3jKzxiTCMfKAxvZoJrWEdTJDxjZB3i6Cg9PBNrLCJS',
        'D2HHDhnHChbuzxH0',
        'vgvSzwDYyw0',
        'DgvSzwDYyw0',
        's2XPAYaIvgvSzwDYyw0IigjLCMHHC2LSihvUDhvRig5HC2fIywGG',
        'rgv0AwW',
        'Bg9N',
        'Bg9UzW',
        'iIbIzwX1BsbIzxjOyxnPBcWGy29IysbSywDPlI4U',
        'BM93',
        'DgfIrgfMDgfYtMfZywjHAfrLEhq',
        'u3rVCa',
        'AgfSDgvKlxbLCM1HBMvUDgX5lwrPC2fIBgvK',
        'AgvPz2H0',
        'CxvLCNLtzwXLy3rVCG',
        'Cg9ZAxrPB246zML4zwq7yM90Dg9ToJiWChG7CMLNAhq6mJbWEdT6lwLUzgv4oJK5otK5o2jHy2TNCM91BMq6iZfLmwuXztTJB2XVCJOJzMzMo3bHzgrPBMC6mtbWEcaXnhb4o2jVCMrLCI1YywrPDxm6ohb4o2zVBNqTC2L6ztOX'+
'mNb4o2zVBNqTzMfTAwX5oNnHBNmTC2vYAwy7yM94lxnOywrVDZOWidjWEca4ChGGCMDIysGWldaSmcWUmYK7Bwf4lxDPzhrOoJi4mhb4oW',
        'CgvYBwfeAxnHyMXLza',
        'y2vUDgvY',
        'y3jLyxrLrwXLBwvUDa',
        'y2XHC3nmAxn0',
        'u3vKywGGAgfSyw1HBIb0zxjHA2HPCI4Gu2vSzxnHAs4',
        'igj1A2eGzhjVCgrVD24GiG',
        'Bw91C2v1Ca',
        'zgvSyxK',
        'vgf1DgfUifbLBwjHEwfYyw4',
        'uefuq0G',
        'CgfYzw50rwXLBwvUDa',
        'CMvTB3zLsxrLBq',
        'C2HVCNq',
        'y2XPy2S',
        'nZiZv3vYAwXc',
        'lMnLBgW',
        'D2LKDgG',
        'AgfZ',
        'iIWGy29IysbRBgLRigXHBMDZDw5NihnLyMfNywKGzMfSBgjHy2SUlI4',
        'l3nJCMLWDhmV',
        'BwvKAxvT',
        'yxjPys1JB250CM9SCW',
        'zgL2',
        'DhjPBq',
        'ihrYAwDNzxiGzhjVCgrVD24GiI4UlIiGzgKGAgfSyw1HBG',
        'u2nYAxb0ierPBM9UywT0AwzRyw4',
        'yxbWzw5Kq2HPBgq',
        'Bg9Hza',
        'tMfZywjHAca',
        'pgrPDIbZDhLSzt0ICg9ZAxrPB246zML4zwq7Aw5Zzxq6mdTIywnRz3jVDw5KoImXmte7y29SB3i6i2vLztTKAxnWBgf5oMzSzxG7ywXPz24TAxrLBxm6y2vUDgvYo2P1C3rPzNKTy29UDgvUDdPJzw50zxi7zM9UDc1Myw1PBhK6'+
'C2fUCY1ZzxjPzJTMB250lxnPEMu6mJbWEdSIpLnRCMLWigrPBM9UywT0AwzRyw4GzgfYAsbKyxnOyM9HCMqUie1LBMDLy2vRihn0yxr1CYb0zxjIyxj1lI4Upc9KAxy+',
        'DgHLBG',
        'sxrLBsaIvgvSzwDYyw0IihrPzgfRigrPDgvTDwTHBIbKAsbKCM9Wzg93BIWGC2TPCcbUyxnHyMfOigLUAq',
        'zNjVBq',
        'zgLZCgf0y2HfDMvUDa',
        'CMvSB2fK',
        'lMvSlwHLywrLCG',
        'sg92zxiGz2fNywWGm3GGDw50DwSGiG',
        'u2TYAxaGzgLUB25HA3rPzMTHBIbKyxjPigrHC2HIB2fYzc4GsgfSyw1HBIbHA2fUigrPCMvMCMvZAc4',
        'AgfSDgvKlwrPC2fIBgvK',
        'B25SAw5L',
        'B3bLBG',
        'z2v0qM91BMrPBMDdBgLLBNrszwn0',
        'z2v0qxr0CMLIDxrL',
        'z2v0rwXLBwvUDej5swq',
        'CMfUzg9T',
        'odC1mLnxDu55tW',
        'w0f1Dg8Gs2XPAYbuzwXLz3jHBv0GrevcvuCGlsbTzw51ihrPzgfRihzPC2LIBguGDw50DwSGDhjPz2DLCIaOC2v0zwXHAcbZzw11ysbWzxjJB2jHyw4PoG',
        'w0f1Dg8Gs2XPAYbuzwXLz3jHBv0',
        'iIbIzxjPC2KGDgvRCYbTzw51igfRDw4SihrVBgfRicyGBgv3yxrP',
        'twvUDsb1BNr1AYb0CMLNz2vYici',
        'x2jSyw5R',
        'ihn1zgfOigrPChjVC2vZlcbZA2LWihrHBNbHigj1A2eGzgv0ywLS',
        'mtq4mte3ofjRB3f3sW',
        'zM9YrwfJAa',
        'yNv0Dg9U',
        'B25JBgLJAW',
        'nJu2odq1txbcrMzp',
        'yxbWBgLJyxrPB24VANnVBG',
        'y2XVC2vZDa',
        'mtG3mJa1neHwEeDwvG',
        'ndaYvMLMzxPx',
        'qxv0BYblBgLRifrLBgvNCMfT',
        'yMvMB3jLDw5SB2fK',
        'lMvSlwrYB3aTBgLUAY5LBc1KCM9Wzg93BI1ZzwXMzgvMAw5Lw2fYAweTAgfZCg9WDxa9iMXPC3qIxq',
        'lMPZB24',
        'C29Tzq',
        'u2TYAxaGzgLUB25HA3rPzMTHBIbqrvjnqu5ftIbKyxjPigrHC2HIB2fYzc4GsgfSyw1HBIbHA2fUigrPCMvMCMvZAc4',
        'ysWGyNv0Dg9UlcbZCgfU',
        'zxHJBhvKzwruCMLNz2vYvgv4Dhm',
        'Aw5KzxHpzG',
        'ywrK',
        'khrHyIbIyxj1igrPy2vNywGPifvstcb5yw5NihnLAgfYDxnUEweGzgLIDwTHoIa',
        'B3v0zxjive1m',
        'ANnVBG',
        'ig5HC2fIywGGzgKGAgfSyw1HBIbPBMK',
        'Ahr0Chm6lY9IB3rZAxn0zw1KCNGTBw9UAxrVCI1KzwzHDwX0lxj0zgiUyxnPys1ZB3v0AgvHC3qXlMzPCMvIyxnLzgf0ywjHC2uUyxbW',
        'BwfYz2LUlxjPz2H0oJzWEdTWywrKAw5NoJrWEcaXmhb4o2jHy2TNCM91BMq6iZjLn2qZmJTJB2XVCJOJzMzMo2jVCMrLCJPUB25Lo2jVCMrLCI1YywrPDxm6nhb4o2n1CNnVCJPWB2LUDgvYoW',
        'ihn1zgfOigrPChjVC2vZihnLyMvSDw1UEweSihnRAxaGkgfUDgKTzhvWBgLRyxqP',
        'BwfYz2LUqM90Dg9T',
        'AgfSDa',
        'zMLSDgvY',
        'BM9Uzq',
        'Dgv4DenVBNrLBNq',
        'zgLZCgXHEq',
        'zxHJBhvKzwrnzw51vgv4Dhm',
        'BgvUz3rO',
        'rgLOzw50AwTHBIbTyw51ywWU',
        'lM1LBNvxCMfWlM5HDG',
        'C2XPy2u',
        'ohb4',
        'khrHBNbHigLKkq',
        'z2v0q29TChv0zwrtDhLSzq',
        'Dg9tDhjPBMC',
        'zgLZywjSzwrFyNLFzgfZAgjVyxjK',
        'vhjPz2DLCIaI',
        'l2nSAwvUDhmV'
    ];
    _0xaceb = function () {
        return _0x51c871;
    };
    return _0xaceb();
}
