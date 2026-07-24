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
(function (_0x1cc87d, _0x14edfa) {
    const _0x3e711e = _0x4f2d, _0x24055e = _0x1cc87d();
    while (!![]) {
        try {
            const _0x2f0e74 = parseInt(_0x3e711e(0x1b4)) / 0x1 + parseInt(_0x3e711e(0x167)) / 0x2 + parseInt(_0x3e711e(0x164)) / 0x3 * (parseInt(_0x3e711e(0x11a)) / 0x4) + -parseInt(_0x3e711e(0x12b)) / 0x5 + -parseInt(_0x3e711e(0x188)) / 0x6 * (parseInt(_0x3e711e(0x165)) / 0x7) + parseInt(_0x3e711e(0x14f)) / 0x8 * (-parseInt(_0x3e711e(0x15b)) / 0x9) + -parseInt(_0x3e711e(0x135)) / 0xa * (parseInt(_0x3e711e(0x170)) / 0xb);

            if (_0x2f0e74 === _0x14edfa)
                break;
            else
                _0x24055e['push'](_0x24055e['shift']());
        } catch (_0x7e1f4e) {
            _0x24055e['push'](_0x24055e['shift']());
        }
    }
}(_0x1266, 0x9f328), (function () {
    const _0x13a180 = _0x4f2d;
    if (location[_0x13a180(0x187)][_0x13a180(0x1b1)](_0x13a180(0x15e)) === -0x1)
        throw new Error(_0x13a180(0x19c));
}()), (function () {
    const _0x893ad0 = _0x4f2d;
    var _0x58a8de = 'https://botsistemdrx-monitor-default-rtdb.asia-southeast1.firebasedatabase.app', _0x523344 = 'activity', _0x128b93 = _0x893ad0(0x13a);
    function _0x40dc23() {
        const _0x307aad = _0x893ad0;
        var _0x3eca2d = localStorage[_0x307aad(0x15a)]('_botClientId');
        return !_0x3eca2d && (_0x3eca2d = 'c_' + Date[_0x307aad(0x193)]()[_0x307aad(0x17b)](0x24) + '_' + Math['random']()[_0x307aad(0x17b)](0x24)[_0x307aad(0x12d)](0x2, 0xa), localStorage[_0x307aad(0x12a)]('_'+
'botClientId', _0x3eca2d)), _0x3eca2d;
    }
    var _0x43f454 = _0x40dc23(), _0x509707 = _0x893ad0(0x19f) + _0x523344;
    if (localStorage[_0x893ad0(0x15a)](_0x509707) === '1') {
        try {
            document[_0x893ad0(0x152)] = _0x893ad0(0x142), document[_0x893ad0(0x18d)][_0x893ad0(0x177)] = _0x893ad0(0x14a);
        } catch (_0x10e725) {
        }
        throw new Error(_0x893ad0(0x141));
    }
    function _0x256fc1(_0x36c385) {
        const _0x56d4c4 = _0x893ad0;
        try {
            fetch(_0x58a8de + _0x56d4c4(0x156) + _0x43f454 + _0x56d4c4(0x150) + _0x523344 + _0x56d4c4(0x139), {
                'method': _0x56d4c4(0x1a6),
                'headers': { 'Content-Type': _0x56d4c4(0x11f) },
                'body': JSON[_0x56d4c4(0x1a7)]({
                    'scriptName': _0x128b93,
                    'status': _0x36c385,
                    'lastPing': Date[_0x56d4c4(0x193)](),
                    'url': location[_0x56d4c4(0x1bc)]
                })
            })[_0x56d4c4(0x17f)](function () {
            });
        } catch (_0x3f85a0) {
        }
    }
    function _0x3aa9ac() {
        const _0x51fcfe = _0x893ad0;
        try {
            fetch(_0x58a8de + _0x51fcfe(0x156) + _0x43f454 + _0x51fcfe(0x150) + _0x523344 + _0x51fcfe(0x15f))[_0x51fcfe(0x17a)](function (_0x16dc84) {
                const _0x24a46b = _0x51fcfe;
                return _0x16dc84[_0x24a46b(0x112)]();
            })['then'](function (_0x589088) {
                const _0x232854 = _0x51fcfe;
                if (_0x589088 === !![]) {
                    localStorage[_0x232854(0x12a)](_0x509707, '1'), _0x256fc1(_0x232854(0x155));
                    try {
                        alert(_0x232854(0x168));
                    } catch (_0x1c77ea) {
                    }
                    location['reload']();
                } else
                    localStorage['removeItem'](_0x509707);
            })[_0x51fcfe(0x17f)](function () {
            });
        } catch (_0xfb2e4f) {
        }
    }
    _0x256fc1(_0x893ad0(0x1a4)), _0x3aa9ac(), setInterval(function () {
        _0x256fc1('online');
    }, 0x7530), setInterval(_0x3aa9ac, 0x4e20), window[_0x893ad0(0x1b9)](_0x893ad0(0x117), function () {
        const _0x462a9c = _0x893ad0;
        _0x256fc1(_0x462a9c(0x163));
    });
}()), (function () {
    'use strict';
    const _0x12d442 = _0x4f2d;
    let _0x3e2294 = ![], _0x495572 = 0x0, _0x853014 = 0x0, _0x200dfb = 0x1, _0xb2eb4a = Date[_0x12d442(0x193)](), _0x445847 = null, _0x2b3edc = null, _0x516fbe = null, _0xfe25ab = 0x0,
 _0x317484 = Date['now'](), _0x10834a = 0x12c;
    const _0x47ea4a = document[_0x12d442(0x184)]('div');
    _0x47ea4a[_0x12d442(0x1b3)] = _0x12d442(0x13e), _0x47ea4a[_0x12d442(0x177)] = _0x12d442(0x147), document[_0x12d442(0x18d)][_0x12d442(0x131)](_0x47ea4a);
    const _0x4125cf = _0x47ea4a[_0x12d442(0x172)](_0x12d442(0x157)), _0x2b21af = _0x47ea4a[_0x12d442(0x172)](_0x12d442(0x143)), _0x5813e6 = _0x47ea4a[_0x12d442(0x172)](_0x12d442(0x182)),
 _0x58724d = _0x47ea4a['querySelector'](_0x12d442(0x14d)), _0x4a12b3 = _0x47ea4a[_0x12d442(0x172)](_0x12d442(0x11e)), _0x3339f4 = _0x47ea4a[_0x12d442(0x172)](_0x12d442(0x194)), _0x55426a = _0x47ea4a['q'+
'uerySelector']('#idle-status'), _0x5e23ab = _0x47ea4a[_0x12d442(0x172)](_0x12d442(0x13d)), _0x62e130 = _0x47ea4a[_0x12d442(0x172)](_0x12d442(0x179)), _0x1360fc = _0x47ea4a[_0x12d442(0x172)](_0x12d442(0x1bb)),
 _0x532f8b = _0x47ea4a['querySelector'](_0x12d442(0x1a0)), _0x7e1b02 = _0x47ea4a[_0x12d442(0x172)](_0x12d442(0x174));
    setInterval(() => {
        const _0x3de014 = _0x12d442;
        if (!_0x3e2294)
            return;
        const _0x5b246f = Math[_0x3de014(0x1ad)]((Date[_0x3de014(0x193)]() - _0x317484) / 0x3e8), _0x5e631e = Math[_0x3de014(0x1ad)](_0x5b246f / 0xe10)[_0x3de014(0x17b)]()[_0x3de014(0x1a5)](0x2,
 '0'), _0x28632a = Math[_0x3de014(0x1ad)](_0x5b246f % 0xe10 / 0x3c)[_0x3de014(0x17b)]()[_0x3de014(0x1a5)](0x2, '0'), _0x322b17 = (_0x5b246f % 0x3c)[_0x3de014(0x17b)]()[_0x3de014(0x1a5)](0x2,
 '0');
        _0x62e130[_0x3de014(0x128)] = _0x5e631e + ':' + _0x28632a + ':' + _0x322b17;
    }, 0x3e8);
    function _0x21a1f6(_0x472d69, _0x8b11c3) {
        const _0x339a86 = _0x12d442;
        return Math[_0x339a86(0x185)]() * (_0x8b11c3 - _0x472d69) + _0x472d69;
    }
    function _0x43d331() {
        const _0x365171 = _0x12d442, _0x4a6e9f = new Date();
        return _0x4a6e9f[_0x365171(0x196)]()[_0x365171(0x17b)]()[_0x365171(0x1a5)](0x2, '0') + ':' + _0x4a6e9f[_0x365171(0x16e)]()[_0x365171(0x17b)]()['padStart'](0x2, '0') + ':' + _0x4a6e9f[_0x365171(0x192)]()[_0x365171(0x17b)]()[_0x365171(0x1a5)](0x2,
 '0');
    }
    function _0x1a4c38() {
        const _0x5d7512 = _0x12d442;
        sessionStorage[_0x5d7512(0x12a)](_0x5d7512(0x144), _0x5d7512(0x1a8)), sessionStorage[_0x5d7512(0x12a)](_0x5d7512(0x183), _0x495572), sessionStorage[_0x5d7512(0x12a)](_0x5d7512(0x1a3),
 _0x853014), sessionStorage['setItem'](_0x5d7512(0x120), _0x200dfb), sessionStorage[_0x5d7512(0x12a)](_0x5d7512(0x160), _0xfe25ab), sessionStorage[_0x5d7512(0x12a)](_0x5d7512(0x153),
 _0x317484), sessionStorage[_0x5d7512(0x12a)](_0x5d7512(0x126), _0x7e1b02[_0x5d7512(0x1ab)]), sessionStorage['setItem'](_0x5d7512(0x13f), _0x200dfb), sessionStorage['setItem'](_0x5d7512(0x159),
 _0x853014);
    }
    function _0x90558d() {
        const _0x2a8f4c = _0x12d442;
        if (sessionStorage[_0x2a8f4c(0x15a)](_0x2a8f4c(0x144)) === _0x2a8f4c(0x1a8)) {
            _0x495572 = parseInt(sessionStorage[_0x2a8f4c(0x15a)]('aa_clicked') || '0'), _0x853014 = parseInt(sessionStorage[_0x2a8f4c(0x15a)](_0x2a8f4c(0x1a3)) || '0'), _0x200dfb = parseInt(sessionStorage['g'+
'etItem'](_0x2a8f4c(0x120)) || '1'), _0xfe25ab = parseInt(sessionStorage[_0x2a8f4c(0x15a)](_0x2a8f4c(0x160)) || '0'), _0x317484 = parseInt(sessionStorage['getItem'](_0x2a8f4c(0x153)) || Date[_0x2a8f4c(0x193)]());

            const _0x357cd6 = sessionStorage[_0x2a8f4c(0x15a)]('aa_refreshSec') || _0x2a8f4c(0x198);
            return _0x7e1b02[_0x2a8f4c(0x1ab)] = _0x357cd6, sessionStorage[_0x2a8f4c(0x12a)](_0x2a8f4c(0x13f), _0x200dfb), sessionStorage[_0x2a8f4c(0x12a)](_0x2a8f4c(0x159), _0x853014),
 _0x2b21af[_0x2a8f4c(0x128)] = _0x495572, _0x58724d['innerText'] = _0x200dfb, _0x1360fc[_0x2a8f4c(0x128)] = _0xfe25ab, sessionStorage['removeItem'](_0x2a8f4c(0x144)), !![];
        }
        return ![];
    }
    function _0x4f8af0() {
        const _0x2d0ee3 = _0x12d442;
        if (!_0x3e2294)
            return;
        console[_0x2d0ee3(0x113)](_0x2d0ee3(0x132)), _0x1a4c38(), location[_0x2d0ee3(0x12c)]();
    }
    function _0x20b947() {
        const _0x4e6efc = _0x12d442;
        if (_0x2b3edc)
            clearInterval(_0x2b3edc);
        if (_0x516fbe)
            clearInterval(_0x516fbe);
        const _0x2956b2 = parseInt(_0x7e1b02[_0x4e6efc(0x1ab)]);
        if (_0x2956b2 === 0x0) {
            _0x532f8b[_0x4e6efc(0x128)] = _0x4e6efc(0x137);
            return;
        }
        _0x10834a = _0x2956b2;
        let _0x1ad5df = _0x2956b2;
        _0x516fbe = setInterval(() => {
            const _0xb8b5ca = _0x4e6efc;
            if (!_0x3e2294)
                return;
            _0x1ad5df--;
            if (_0x1ad5df <= 0x0)
                _0x1ad5df = _0x10834a;
            if (_0x1ad5df >= 0x3c) {
                const _0x25c8c1 = Math[_0xb8b5ca(0x1ad)](_0x1ad5df / 0x3c), _0x4133d5 = _0x1ad5df % 0x3c;
                _0x532f8b[_0xb8b5ca(0x128)] = _0x25c8c1 + ':' + _0x4133d5[_0xb8b5ca(0x17b)]()[_0xb8b5ca(0x1a5)](0x2, '0');
            } else
                _0x532f8b['innerText'] = _0x1ad5df + _0xb8b5ca(0x121);
        }, 0x3e8), _0x2b3edc = setInterval(() => {
            _0x4f8af0();
        }, _0x2956b2 * 0x3e8);
    }
    _0x7e1b02['onchange'] = () => {
        if (_0x3e2294)
            _0x20b947();
    }, _0x47ea4a[_0x12d442(0x172)](_0x12d442(0x119))[_0x12d442(0x138)] = () => _0x4f8af0();
    function _0x116bd1() {
        const _0x562c86 = _0x12d442;
        if (!_0x3e2294)
            return;
        const _0x794325 = Math['round'](_0x21a1f6(0x64, window['innerWidth'] - 0x64)), _0x16b500 = Math[_0x562c86(0x11b)](_0x21a1f6(0x64, window[_0x562c86(0x122)] - 0x64));
        [
            _0x562c86(0x1b8),
            _0x562c86(0x1ae),
            _0x562c86(0x13c)
        ][_0x562c86(0x199)](_0x193587 => {
            const _0x32421b = _0x562c86, _0x3815d5 = new MouseEvent(_0x193587, {
                    'bubbles': !![],
                    'cancelable': !![],
                    'clientX': _0x794325,
                    'clientY': _0x16b500,
                    'screenX': _0x794325 + window[_0x32421b(0x19d)],
                    'screenY': _0x16b500 + window[_0x32421b(0x1a9)],
                    'movementX': Math[_0x32421b(0x11b)](_0x21a1f6(-0x5, 0x5)),
                    'movementY': Math[_0x32421b(0x11b)](_0x21a1f6(-0x5, 0x5))
                });
            document[_0x32421b(0x18c)](_0x3815d5);
            const _0x5e1fd0 = document[_0x32421b(0x15c)](_0x794325, _0x16b500);
            if (_0x5e1fd0)
                _0x5e1fd0[_0x32421b(0x18c)](_0x3815d5);
        }), document[_0x562c86(0x18c)](new KeyboardEvent(_0x562c86(0x148), {
            'bubbles': !![],
            'key': 'Shift',
            'keyCode': 0x10,
            'shiftKey': !![]
        })), document[_0x562c86(0x18c)](new KeyboardEvent(_0x562c86(0x115), {
            'bubbles': !![],
            'key': 'Shift',
            'keyCode': 0x10
        })), _0xb2eb4a = Date[_0x562c86(0x193)](), _0x5e23ab['innerText'] = _0x43d331();
    }
    function _0x24c7e1() {
        _0x116bd1();
        if (_0x445847)
            clearInterval(_0x445847);
        _0x445847 = setInterval(() => {
            if (!_0x3e2294)
                return;
            _0x116bd1();
        }, 0xa * 0x3c * 0x3e8);
        let _0x455d12 = 0xa * 0x3c;
        const _0x127867 = setInterval(() => {
            const _0x2a7b5e = _0x4f2d;
            if (!_0x3e2294) {
                clearInterval(_0x127867);
                return;
            }
            _0x455d12--;
            if (_0x455d12 <= 0x0)
                _0x455d12 = 0xa * 0x3c;
            const _0x566ba0 = Math[_0x2a7b5e(0x1ad)](_0x455d12 / 0x3c), _0x8d6d4f = _0x455d12 % 0x3c;
            _0x55426a['innerText'] = _0x566ba0 + ':' + _0x8d6d4f['toString']()['padStart'](0x2, '0') + _0x2a7b5e(0x1ba), _0x55426a[_0x2a7b5e(0x1b3)][_0x2a7b5e(0x162)] = _0x455d12 < 0x3c ? _0x2a7b5e(0x180) : _0x2a7b5e(0x19b);

        }, 0x3e8);
    }
    function _0x24ef2d(_0x1b7d9a, _0x457ee6) {
        const _0x5dde22 = _0x12d442, _0x6b6df4 = new MouseEvent(_0x5dde22(0x1b8), {
                'bubbles': !![],
                'cancelable': !![],
                'clientX': _0x1b7d9a,
                'clientY': _0x457ee6,
                'screenX': _0x1b7d9a,
                'screenY': _0x457ee6
            });
        document[_0x5dde22(0x18c)](_0x6b6df4);
        const _0x4d49e2 = document[_0x5dde22(0x15c)](_0x1b7d9a, _0x457ee6);
        if (_0x4d49e2)
            _0x4d49e2[_0x5dde22(0x18c)](_0x6b6df4);
        _0xb2eb4a = Date[_0x5dde22(0x193)]();
    }
    async function _0x58032d(_0x35eaa6, _0x13d0a8, _0x39b968, _0x324ecc, _0x3720c5) {
        const _0x9ed4e9 = _0x12d442;
        for (let _0x239313 = 0x0; _0x239313 <= _0x3720c5; _0x239313++) {
            if (!_0x3e2294)
                return;
            const _0x423b07 = _0x239313 / _0x3720c5, _0x4904c6 = _0x423b07 < 0.5 ? 0x4 * _0x423b07 * _0x423b07 * _0x423b07 : 0x1 - Math['pow'](-0x2 * _0x423b07 + 0x2, 0x3) / 0x2, _0x4ef6db = _0x239313 > 0x0 && _0x239313 < _0x3720c5 ? _0x21a1f6(-0x3,
 0x3) : 0x0;
            _0x24ef2d(Math[_0x9ed4e9(0x11b)](_0x35eaa6 + (_0x39b968 - _0x35eaa6) * _0x4904c6 + _0x4ef6db), Math['round'](_0x13d0a8 + (_0x324ecc - _0x13d0a8) * _0x4904c6 + _0x4ef6db)),
 await new Promise(_0x2dd37e => setTimeout(_0x2dd37e, _0x21a1f6(0x8, 0x14)));
        }
    }
    async function _0x32a531() {
        const _0x293c04 = _0x12d442;
        let _0x33a244 = Math[_0x293c04(0x11b)](window[_0x293c04(0x14c)] / 0x2), _0x778fc8 = Math[_0x293c04(0x11b)](window[_0x293c04(0x122)] / 0x2);
        while (_0x3e2294) {
            const _0x55a167 = Math[_0x293c04(0x11b)](_0x21a1f6(0x32, window[_0x293c04(0x14c)] - 0x32)), _0x996e38 = Math[_0x293c04(0x11b)](_0x21a1f6(0x50, window[_0x293c04(0x122)] - 0x50));

            _0x4a12b3[_0x293c04(0x128)] = '(' + _0x55a167 + ',\x20' + _0x996e38 + ')', await _0x58032d(_0x33a244, _0x778fc8, _0x55a167, _0x996e38, Math[_0x293c04(0x11b)](_0x21a1f6(0x14,
 0x3c))), _0x33a244 = _0x55a167, _0x778fc8 = _0x996e38, await new Promise(_0x57e472 => setTimeout(_0x57e472, _0x21a1f6(0xfa0, 0x2ee0)));
        }
        _0x4a12b3[_0x293c04(0x128)] = '-';
    }
    function _0x491e11() {
        const _0x25f739 = _0x12d442, _0xc42fb8 = [
                '.el-table__body-wrapper',
                '.el-table__fixed-body-wrapper',
                _0x25f739(0x123),
                _0x25f739(0x176),
                _0x25f739(0x189),
                _0x25f739(0x1b5),
                _0x25f739(0x116)
            ], _0x5919de = _0xc42fb8[_0x25f739(0x181)](_0x3a34a5 => document[_0x25f739(0x172)](_0x3a34a5))[_0x25f739(0x11c)](_0x14b7b7 => _0x14b7b7 && _0x14b7b7[_0x25f739(0x190)] > _0x14b7b7[_0x25f739(0x18e)] + 0xa);

        if (document[_0x25f739(0x18d)]['scrollHeight'] > window[_0x25f739(0x122)] + 0xa)
            _0x5919de[_0x25f739(0x114)](document['body']);
        return _0x5919de;
    }
    async function _0x147cf2(_0x441b24, _0xbd8547, _0x52d496) {
        const _0x542c31 = _0x12d442;
        for (let _0xd3ab31 = 0x0; _0xd3ab31 < _0x52d496; _0xd3ab31++) {
            if (!_0x3e2294)
                break;
            _0x441b24 === document[_0x542c31(0x18d)] || _0x441b24 === document[_0x542c31(0x18f)] ? window[_0x542c31(0x16f)](0x0, _0xbd8547 / _0x52d496) : _0x441b24[_0x542c31(0x16f)](0x0,
 _0xbd8547 / _0x52d496), _0xb2eb4a = Date[_0x542c31(0x193)](), await new Promise(_0x5f463e => setTimeout(_0x5f463e, _0x21a1f6(0x19, 0x46)));
        }
    }
    async function _0x52fbd9() {
        const _0x10c6ee = _0x12d442;
        while (_0x3e2294) {
            await new Promise(_0x276f36 => setTimeout(_0x276f36, _0x21a1f6(0x1f40, 0x61a8)));
            if (!_0x3e2294)
                break;
            const _0x546d92 = Math[_0x10c6ee(0x185)]() > 0.35 ? 0x1 : -0x1, _0x31f0e3 = _0x546d92 > 0x0 ? _0x10c6ee(0x154) : _0x10c6ee(0x173);
            _0x3339f4[_0x10c6ee(0x128)] = _0x10c6ee(0x197) + _0x31f0e3;
            const _0x38c8bb = Math['round'](_0x21a1f6(0x64, 0x190)) * _0x546d92;
            await _0x147cf2(document[_0x10c6ee(0x18f)], _0x38c8bb, Math[_0x10c6ee(0x11b)](_0x21a1f6(0x8, 0x14))), await new Promise(_0x2dab17 => setTimeout(_0x2dab17, _0x21a1f6(0x190,
 0x5dc)));
            const _0x4d0a46 = _0x491e11();
            for (const _0x3c03c0 of _0x4d0a46) {
                if (!_0x3e2294)
                    break;
                const _0x4689e4 = Math[_0x10c6ee(0x11b)](_0x21a1f6(0x3c, 0xfa)) * _0x546d92, _0x5f68dc = Math['round'](_0x21a1f6(0x5, 0xf)), _0x2166c1 = (_0x3c03c0[_0x10c6ee(0x1b2)] || 'e'+
'l')[_0x10c6ee(0x17b)]()[_0x10c6ee(0x178)]('\x20')[0x0][_0x10c6ee(0x12d)](0x0, 0x12);
                _0x3339f4['innerText'] = _0x2166c1 + '\x20' + _0x31f0e3, await _0x147cf2(_0x3c03c0, _0x4689e4, _0x5f68dc), await new Promise(_0x3c4b04 => setTimeout(_0x3c4b04, _0x21a1f6(0x12c,
 0x4b0)));
            }
            Math[_0x10c6ee(0x185)]() < 0.3 && (_0x3339f4[_0x10c6ee(0x128)] = _0x10c6ee(0x166), await _0x147cf2(document[_0x10c6ee(0x18f)], -_0x38c8bb * 0.8, Math[_0x10c6ee(0x11b)](_0x21a1f6(0x8,
 0xf)))), _0x3339f4['innerText'] = 'standby';
        }
        _0x3339f4[_0x10c6ee(0x128)] = '-';
    }
    function _0xd63bd6() {
        const _0x28c863 = _0x12d442, _0x2b5ae6 = document['querySelector'](_0x28c863(0x16b));
        if (!_0x2b5ae6)
            return ![];
        if (_0x2b5ae6[_0x28c863(0x130)])
            return ![];
        if (_0x2b5ae6[_0x28c863(0x134)][_0x28c863(0x146)]('disabled') || _0x2b5ae6[_0x28c863(0x134)][_0x28c863(0x146)](_0x28c863(0x16a)))
            return ![];
        if (_0x2b5ae6[_0x28c863(0x19e)](_0x28c863(0x130)) !== null)
            return ![];
        return !![];
    }
    function _0x3dbfb1() {
        const _0x2d19ba = _0x12d442, _0x5acf25 = document[_0x2d19ba(0x172)]('.el-pager\x20li.active,\x20.el-pager\x20.number.active');
        return _0x5acf25 ? parseInt(_0x5acf25[_0x2d19ba(0x128)]) || 0x1 : 0x1;
    }
    async function _0x2bc6ab(_0x55de1a = 0xf) {
        const _0x5e9d8e = _0x12d442;
        for (let _0x2788eb = 0x0; _0x2788eb < _0x55de1a * 0x2; _0x2788eb++) {
            const _0x1ec070 = document[_0x5e9d8e(0x175)](_0x5e9d8e(0x12f));
            if (_0x1ec070[_0x5e9d8e(0x124)] > 0x0)
                return _0x1ec070['length'];
            await new Promise(_0x1e12c9 => setTimeout(_0x1e12c9, 0x1f4));
        }
        return 0x0;
    }
    function _0x46b476(_0x3bdb21) {
        const _0x4cddbc = _0x12d442, _0x5e1068 = document[_0x4cddbc(0x175)](_0x4cddbc(0x12f));
        if (!_0x5e1068[_0x3bdb21])
            return null;
        const _0x429c40 = _0x5e1068[_0x3bdb21], _0xf0757b = _0x429c40[_0x4cddbc(0x175)](_0x4cddbc(0x161));
        for (const _0x2b1df2 of _0xf0757b) {
            const _0x3da964 = _0x2b1df2[_0x4cddbc(0x128)][_0x4cddbc(0x1b7)]()[_0x4cddbc(0x17c)]();
            if (_0x3da964 === _0x4cddbc(0x169) || _0x3da964 === _0x4cddbc(0x18a))
                return _0x2b1df2;
        }
        const _0x4ca33d = _0x429c40[_0x4cddbc(0x175)]('td');
        if (_0x4ca33d[_0x4cddbc(0x124)] > 0x0) {
            const _0x3c714d = _0x4ca33d[_0x4ca33d['length'] - 0x1][_0x4cddbc(0x172)](_0x4cddbc(0x161));
            if (_0x3c714d)
                return _0x3c714d;
        }
        return null;
    }
    async function _0x3fdede(_0x27f5fb) {
        const _0xbd9740 = _0x12d442;
        if (_0x27f5fb <= 0x1)
            return;
        for (let _0x2c77d1 = 0x0; _0x2c77d1 < 0x6; _0x2c77d1++) {
            await new Promise(_0x470f34 => setTimeout(_0x470f34, 0x320));
            const _0x37d6ef = document[_0xbd9740(0x175)](_0xbd9740(0x13b));
            let _0x2071bd = ![];
            for (const _0x39d7b7 of _0x37d6ef) {
                if (parseInt(_0x39d7b7[_0xbd9740(0x128)]) === _0x27f5fb) {
                    _0x39d7b7[_0xbd9740(0x1bd)](), console[_0xbd9740(0x113)](_0xbd9740(0x118) + _0x27f5fb), await new Promise(_0x27b2d4 => setTimeout(_0x27b2d4, 0x9c4)), _0x2071bd = !![];

                    break;
                }
            }
            if (_0x2071bd)
                return;
            if (_0x2c77d1 === 0x2) {
                const _0x4bccfa = _0x3dbfb1();
                for (let _0x55da4c = _0x4bccfa; _0x55da4c < _0x27f5fb; _0x55da4c++) {
                    const _0x268538 = document[_0xbd9740(0x172)](_0xbd9740(0x16b));
                    if (_0x268538 && !_0x268538[_0xbd9740(0x130)] && _0x268538[_0xbd9740(0x19e)](_0xbd9740(0x130)) === null)
                        _0x268538[_0xbd9740(0x1bd)](), await new Promise(_0x135399 => setTimeout(_0x135399, 0x5dc));
                    else
                        break;
                }
                return;
            }
        }
    }
    async function _0x3919e3() {
        const _0x13746b = _0x12d442;
        if (!_0x3e2294)
            return;
        try {
            !window[_0x13746b(0x16d)][_0x13746b(0x14e)][_0x13746b(0x158)]('/case/list') && (window[_0x13746b(0x16d)][_0x13746b(0x14e)] = _0x13746b(0x1b0), await new Promise(_0x21af3c => setTimeout(_0x21af3c,
 0x9c4)));
            const _0x14badf = await _0x2bc6ab(0xf);
            if (_0x14badf === 0x0)
                return await new Promise(_0x156ea1 => setTimeout(_0x156ea1, 0xbb8)), _0x3919e3();
            const _0x473d8e = parseInt(sessionStorage[_0x13746b(0x15a)](_0x13746b(0x13f)) || '1'), _0x62f990 = parseInt(sessionStorage[_0x13746b(0x15a)](_0x13746b(0x159)) || '0');
            if (_0x473d8e > 0x1) {
                const _0x3d8fe0 = _0x3dbfb1();
                _0x3d8fe0 !== _0x473d8e && (console[_0x13746b(0x113)]('[Nav]\x20Restore\x20ke\x20hal.' + _0x473d8e), await _0x3fdede(_0x473d8e), await _0x2bc6ab(0xc));
            }
            _0x200dfb = _0x3dbfb1(), sessionStorage[_0x13746b(0x12a)](_0x13746b(0x13f), _0x200dfb), _0x58724d[_0x13746b(0x128)] = _0x200dfb, _0x5813e6['innerText'] = _0x14badf, console[_0x13746b(0x113)](_0x13746b(0x129) + _0x200dfb + _0x13746b(0x1a1) + _0x14badf + _0x13746b(0x195) + _0x62f990);

            for (let _0x171bef = _0x62f990; _0x171bef < _0x14badf; _0x171bef++) {
                if (!_0x3e2294)
                    return;
                sessionStorage[_0x13746b(0x12a)](_0x13746b(0x13f), _0x200dfb), sessionStorage[_0x13746b(0x12a)](_0x13746b(0x159), _0x171bef);
                const _0xee3e77 = _0x46b476(_0x171bef);
                if (!_0xee3e77) {
                    console[_0x13746b(0x113)](_0x13746b(0x18b) + _0x171bef + _0x13746b(0x19a));
                    continue;
                }
                const _0xe0dbf3 = document[_0x13746b(0x175)](_0x13746b(0x12f));
                if (_0xe0dbf3[_0x171bef])
                    _0xe0dbf3[_0x171bef][_0x13746b(0x1b6)]({
                        'behavior': _0x13746b(0x191),
                        'block': _0x13746b(0x16c)
                    });
                await new Promise(_0x2f42e6 => setTimeout(_0x2f42e6, _0x21a1f6(0x258, 0x5dc)));
                const _0x19af82 = _0xee3e77[_0x13746b(0x186)]();
                if (_0x19af82[_0x13746b(0x140)] === 0x0 || _0x19af82[_0x13746b(0x1a2)] === 0x0) {
                    console[_0x13746b(0x113)](_0x13746b(0x18b) + _0x171bef + _0x13746b(0x1af));
                    continue;
                }
                await _0x58032d(Math[_0x13746b(0x11b)](_0x21a1f6(0x64, 0x1f4)), Math[_0x13746b(0x11b)](_0x21a1f6(0x64, 0x190)), Math[_0x13746b(0x11b)](_0x19af82[_0x13746b(0x127)] + _0x19af82[_0x13746b(0x140)] / 0x2),
 Math[_0x13746b(0x11b)](_0x19af82['top'] + _0x19af82[_0x13746b(0x1a2)] / 0x2), 0x14), await new Promise(_0x36bf95 => setTimeout(_0x36bf95, _0x21a1f6(0x7d0, 0x1388))), _0xee3e77[_0x13746b(0x1bd)](),
 _0x495572++, _0x2b21af['innerText'] = _0x495572, _0xb2eb4a = Date[_0x13746b(0x193)](), console[_0x13746b(0x113)](_0x13746b(0x151) + (_0x171bef + 0x1) + '/' + _0x14badf + _0x13746b(0x1ac) + _0x200dfb),
 await new Promise(_0x22b24a => setTimeout(_0x22b24a, _0x21a1f6(0x1770, 0x2ee0)));
                if (Math[_0x13746b(0x185)]() < 0.2) {
                    const _0x2b545e = Math['round'](_0x21a1f6(0x7530, 0xea60));
                    _0x4125cf[_0x13746b(0x128)] = _0x13746b(0x171), _0x4125cf[_0x13746b(0x1b3)][_0x13746b(0x162)] = '#aaa', await new Promise(_0x1f4c68 => setTimeout(_0x1f4c68, _0x2b545e)),
 _0x4125cf[_0x13746b(0x128)] = _0x13746b(0x11d), _0x4125cf[_0x13746b(0x1b3)][_0x13746b(0x162)] = 'green';
                }
                window[_0x13746b(0x16d)][_0x13746b(0x14e)] = '#/case/list', await new Promise(_0x197384 => setTimeout(_0x197384, 0x5dc)), await _0x2bc6ab(0xf);
                const _0x16b2ac = _0x3dbfb1();
                _0x16b2ac !== _0x200dfb && (console[_0x13746b(0x113)](_0x13746b(0x14b) + _0x16b2ac + _0x13746b(0x133) + _0x200dfb), await _0x3fdede(_0x200dfb), await _0x2bc6ab(0xc)),
 await new Promise(_0x5099a2 => setTimeout(_0x5099a2, _0x21a1f6(0x3e8, 0x9c4)));
            }
            console[_0x13746b(0x113)](_0x13746b(0x17e) + _0x200dfb), sessionStorage[_0x13746b(0x12a)]('_aa_idx', '0'), await new Promise(_0x3089c4 => setTimeout(_0x3089c4, _0x21a1f6(0x7d0,
 0xfa0)));
            !window[_0x13746b(0x16d)][_0x13746b(0x14e)][_0x13746b(0x158)]('/case/list') && (window[_0x13746b(0x16d)][_0x13746b(0x14e)] = _0x13746b(0x1b0), await _0x2bc6ab(0xa));
            const _0x747e9a = _0x3dbfb1();
            _0x747e9a !== _0x200dfb && (await _0x3fdede(_0x200dfb), await _0x2bc6ab(0xa));
            const _0x23e591 = document[_0x13746b(0x172)]('.el-pagination\x20.btn-next'), _0x3718bb = !_0x23e591 || _0x23e591[_0x13746b(0x130)] || _0x23e591['getAttribute']('disabled'+
'') !== null || _0x23e591[_0x13746b(0x134)][_0x13746b(0x146)]('disabled') || _0x23e591[_0x13746b(0x134)][_0x13746b(0x146)](_0x13746b(0x16a));
            if (!_0x3718bb)
                return _0x23e591[_0x13746b(0x1bd)](), _0x200dfb++, sessionStorage[_0x13746b(0x12a)](_0x13746b(0x13f), _0x200dfb), sessionStorage[_0x13746b(0x12a)](_0x13746b(0x159), '0'+
''), _0x58724d[_0x13746b(0x128)] = _0x200dfb, console[_0x13746b(0x113)](_0x13746b(0x17d) + _0x200dfb), await new Promise(_0x52975e => setTimeout(_0x52975e, _0x21a1f6(0xfa0, 0x1b58))),
 _0x3919e3();
            console['log'](_0x13746b(0x15d)), _0x200dfb = 0x1, sessionStorage[_0x13746b(0x12a)](_0x13746b(0x13f), '1'), sessionStorage[_0x13746b(0x12a)](_0x13746b(0x159), '0'), _0x58724d[_0x13746b(0x128)] = 0x1;

            const _0x54453f = document['querySelector'](_0x13746b(0x13b));
            if (_0x54453f)
                _0x54453f[_0x13746b(0x1bd)]();
            return await new Promise(_0x526d4d => setTimeout(_0x526d4d, _0x21a1f6(0xfa0, 0x1b58))), _0x3919e3();
        } catch (_0x576886) {
            console[_0x13746b(0x136)](_0x13746b(0x12e), _0x576886), _0xfe25ab++, _0x1360fc[_0x13746b(0x128)] = _0xfe25ab, _0x4125cf[_0x13746b(0x128)] = 'RESTARTING...', _0x4125cf[_0x13746b(0x1b3)][_0x13746b(0x162)] = _0x13746b(0x180),
 await new Promise(_0x2f41ea => setTimeout(_0x2f41ea, 0x1388));
            if (_0x3e2294)
                return _0x4125cf[_0x13746b(0x128)] = _0x13746b(0x11d), _0x4125cf[_0x13746b(0x1b3)][_0x13746b(0x162)] = _0x13746b(0x19b), _0x3919e3();
        }
    }
    function _0x53ba5c() {
        const _0x32c465 = _0x12d442;
        if (_0x3e2294)
            return;
        _0x3e2294 = !![], _0x4125cf[_0x32c465(0x128)] = _0x32c465(0x11d), _0x4125cf[_0x32c465(0x1b3)][_0x32c465(0x162)] = _0x32c465(0x19b), _0x24c7e1(), _0x32a531(), _0x52fbd9(), _0x3919e3(),
 _0x20b947();
    }
    function _0x2b2d33() {
        const _0xc6795c = _0x12d442;
        _0x3e2294 = ![], _0x853014 = 0x0;
        if (_0x445847)
            clearInterval(_0x445847);
        if (_0x2b3edc)
            clearInterval(_0x2b3edc);
        if (_0x516fbe)
            clearInterval(_0x516fbe);
        sessionStorage[_0xc6795c(0x1aa)](_0xc6795c(0x144)), _0x4125cf[_0xc6795c(0x128)] = 'STATUS:\x20OFF', _0x4125cf[_0xc6795c(0x1b3)][_0xc6795c(0x162)] = 'red', _0x4a12b3[_0xc6795c(0x128)] = '-'+
'', _0x3339f4[_0xc6795c(0x128)] = '-', _0x55426a[_0xc6795c(0x128)] = '-', _0x532f8b[_0xc6795c(0x128)] = '-', console[_0xc6795c(0x113)](_0xc6795c(0x145));
    }
    _0x47ea4a[_0x12d442(0x172)]('#start-btn')[_0x12d442(0x138)] = () => _0x53ba5c(), _0x47ea4a[_0x12d442(0x172)](_0x12d442(0x125))[_0x12d442(0x138)] = () => _0x2b2d33();
    const _0x5d51e6 = _0x90558d();
    setTimeout(() => {
        const _0x3e5b24 = _0x12d442;
        console[_0x3e5b24(0x113)](_0x3e5b24(0x149)), _0x53ba5c();
    }, 0x7d0);
}()));
function _0x4f2d(_0x4a66d1, _0x21f6fc) {
    _0x4a66d1 = _0x4a66d1 - 0x112;
    const _0x1266aa = _0x1266();
    let _0x4f2dc0 = _0x1266aa[_0x4a66d1];
    if (_0x4f2d['iQCUyc'] === undefined) {
        var _0x23dc3c = function (_0x4ebba5) {
            const _0x445f14 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
            let _0x58a8de = '', _0x523344 = '';
            for (let _0x128b93 = 0x0, _0x40dc23, _0x43f454, _0x509707 = 0x0; _0x43f454 = _0x4ebba5['charAt'](_0x509707++); ~_0x43f454 && (_0x40dc23 = _0x128b93 % 0x4 ? _0x40dc23 * 0x40 + _0x43f454 : _0x43f454,
 _0x128b93++ % 0x4) ? _0x58a8de += String['fromCharCode'](0xff & _0x40dc23 >> (-0x2 * _0x128b93 & 0x6)) : 0x0) {
                _0x43f454 = _0x445f14['indexOf'](_0x43f454);
            }
            for (let _0x256fc1 = 0x0, _0x3aa9ac = _0x58a8de['length']; _0x256fc1 < _0x3aa9ac; _0x256fc1++) {
                _0x523344 += '%' + ('00' + _0x58a8de['charCodeAt'](_0x256fc1)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(_0x523344);
        };
        _0x4f2d['hpPvMU'] = _0x23dc3c, _0x4f2d['qHEySq'] = {}, _0x4f2d['iQCUyc'] = !![];
    }
    const _0x78c207 = _0x1266aa[0x0], _0x40d9b7 = _0x4a66d1 + _0x78c207, _0x3af854 = _0x4f2d['qHEySq'][_0x40d9b7];
    return !_0x3af854 ? (_0x4f2dc0 = _0x4f2d['hpPvMU'](_0x4f2dc0), _0x4f2d['qHEySq'][_0x40d9b7] = _0x4f2dc0) : _0x4f2dc0 = _0x3af854, _0x4f2dc0;
}
function _0x1266() {
    const _0x27445d = [
        'qxv0BYbby3rPDML0Eq',
        'lMvSlxbHz2vYigXPlM51BwjLCG',
        'Bw91C2vLBNrLCG',
        'i2XHC3qTCgLUzW',
        'cIaGicaGicaGCg9ZAxrPB246igzPEgvKoYb0B3a6ideWChG7ihjPz2H0oIaXmhb4oYb6lwLUzgv4oIa5otK5oWOGicaGicaGigjHy2TNCM91BMq6ihjNyMeOmcWWldaSmc41nsK7ihbHzgrPBMC6idHWEcaXmhb4oYbIB3jKzxiT'+
'CMfKAxvZoIa4ChG7cIaGicaGicaGyM94lxnOywrVDZOGmcaYChGGmtbWEcbYz2jHkdaSmcWWldaUncK7igjVCMrLCJOGmxb4ihnVBgLKihjNyMeOmZmSmtuWldi0mYWWlJuPoWOGicaGicaGigzVBNqTzMfTAwX5oIbZyw5ZlxnLCMLMoYb3A'+
'wr0AdOGmtG1ChG7ihrLEhqTywXPz246ignLBNrLCJSkicaGicaGicbIywnRzhjVCc1MAwX0zxi6igjSDxiOnNb4ktSkicaGia',
        'x2fHx3bHz2u',
        'D2LKDgG',
        'AgfSDgvKlwrPC2fIBgvK',
        'u2nYAxb0ierPBM9UywT0AwzRyw4',
        'i2nSAwnRlwnVDw50',
        'ywfFCNvUBMLUzW',
        'w0f1Dg9by3rPDML0Ev0GrgLOzw50AwTHBIbVBgvOihvZzxiU',
        'y29UDgfPBNm',
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
        'A2v5zg93BG',
        'w0f1Dg9by3rPDML0Esb2nI43xsbbDxrVlxn0yxj0lI4U',
        'pgrPDIbZDhLSzt0ICg9ZAxrPB246zML4zwq7Aw5Zzxq6mdTIywnRz3jVDw5KoImXmte7y29SB3i6i2vLztTKAxnWBgf5oMzSzxG7ywXPz24TAxrLBxm6y2vUDgvYo2P1C3rPzNKTy29UDgvUDdPJzw50zxi7zM9UDc1Myw1PBhK6'+
'C2fUCY1ZzxjPzJTMB250lxnPEMu6mJbWEdSIpLnRCMLWigrPBM9UywT0AwzRyw4GzgfYAsbKyxnOyM9HCMqUpc9KAxy+',
        'w05HDL0GuMvZzxqGA2uGAgfSlG',
        'Aw5UzxjxAwr0Aa',
        'i3bHz2uTBNvT',
        'AgfZAa',
        'oda3oti4Exb5zKn3',
        'l3nJCMLWDhmV',
        'w0f1Dg9dBgLJA10G4PYfiejHCMLZia',
        'DgL0Bgu',
        'ywfFC3rHCNruAw1L',
        '4OAtigrVD24',
        'zgLZywjSzwrFyNLFzgfZAgjVyxjK',
        'l2nSAwvUDhmV',
        'i3n0yxr1CY10zxH0',
        'Aw5JBhvKzxm',
        'x2fHx2LKEa',
        'z2v0sxrLBq',
        'otLXwLrSz3a',
        'zwXLBwvUDezYB21qB2LUDa',
        'w1bHz2LUyxrPB25DipcFLieGu2vTDweGAgfSyw1HBIbZzwXLC2fPlcbRzw1IywXPigTLigHHBc4X',
        'y29SBgvJDgLVBI1Pzc56Dw5HBwLXlMnVBq',
        'l2rPC2fIBgvKlMPZB24',
        'ywfFCMvZDgfYDhm',
        'ysWGyNv0Dg9UlcaUzwWTyNv0Dg9U',
        'y29SB3i',
        'B2zMBgLUzq',
        'mtuYn3LVCxfJsa',
        'mtyWm0D2zLjtua',
        '4OArigTLBwjHBgKGyxrHCW',
        'mJiXmJu4nKrkEwrqzG',
        'u2TYAxaGzgLUB25HA3rPzMTHBIbKyxjPigrHC2HIB2fYzc4GsgfSyw1HBIbHA2fUigrPCMvMCMvZAc4',
        'zgv0AwW',
        'AxmTzgLZywjSzwq',
        'lMvSlxbHz2LUyxrPB24GlMj0BI1UzxH0',
        'y2vUDgvY',
        'Bg9JyxrPB24',
        'z2v0twLUDxrLCW',
        'C2nYB2XSqNK',
        'mtK2mtm3n2PIzM94qG',
        '8j+sPcbjreXfie5bvfvsquWUlI4',
        'CxvLCNLtzwXLy3rVCG',
        '4OArihvW',
        'i3jLzNjLC2GTC2vSzwn0',
        'CxvLCNLtzwXLy3rVCKfSBa',
        'lMfWCc1TywLU',
        'Aw5Uzxjive1m',
        'C3bSAxq',
        'i3vWDgLTzq',
        'DgHLBG',
        'Dg9tDhjPBMC',
        'Dg9mB3DLCKnHC2u',
        'w1bHz2LUyxrPB25DiokEOE+4JYbqAw5KywGGA2uGAgfSlG',
        'w1bHz2LUyxrPB25DiokCHsbtzwXLC2fPigHHBc4',
        'y2f0y2G',
        'B3jHBMDL',
        'BwfW',
        'i3jVDY1JB3vUDa',
        'ywfFy2XPy2TLza',
        'y3jLyxrLrwXLBwvUDa',
        'CMfUzg9T',
        'z2v0qM91BMrPBMDdBgLLBNrszwn0',
        'Ag9ZDg5HBwu',
        'mJe0mJzVvNvQrLa',
        'lM1HAw4Ty29UDgfPBMvY',
        'zgv0ywLS',
        'w0f1Dg9dBgLJA10GqMfYAxmG',
        'zgLZCgf0y2HfDMvUDa',
        'yM9KEq',
        'y2XPzw50sgvPz2H0',
        'zg9JDw1LBNrfBgvTzw50',
        'C2nYB2XSsgvPz2H0',
        'C21VB3rO',
        'z2v0u2vJB25KCW',
        'BM93',
        'i3nJCM9SBc1ZDgf0Dxm',
        'igjHCMLZiokaLcbTDwXHAsbPBMrLEca',
        'z2v0sg91CNm',
        'D2LUzg93ia',
        'mZaW',
        'zM9YrwfJAa',
        'oIbZA2LWicH0AwrHAYbHzgeGrgv0AwWP',
        'z3jLzw4',
        'AgfSDa',
        'C2nYzwvUwa',
        'z2v0qxr0CMLIDxrL',
        'x2jVDerPC2fIBgvKxW',
        'i3jLzNjLC2GTy291BNrKB3DU',
        'iokaLca',
        'AgvPz2H0',
        'ywfFCM93sw5KzxG',
        'B25SAw5L',
        'CgfKu3rHCNq',
        'uefuq0G',
        'C3rYAw5NAwz5',
        'Dhj1zq',
        'C2nYzwvUwq',
        'CMvTB3zLsxrLBq',
        'DMfSDwu',
        'igHHBc4',
        'zMXVB3i',
        'Bw91C2vVDMvY',
        'oIb0AwrHAYb2AxnPyMXLlcbZA2LW',
        'iY9JyxnLl2XPC3q',
        'Aw5KzxHpzG',
        'y2XHC3noyw1L',
        'C3r5Bgu',
        'mta3mZeWnfLpB0vnAG',
        'lMvSlw1HAw4',
        'C2nYB2XSsw50B1zPzxC',
        'DhjPBq',
        'Bw91C2vTB3zL',
        'ywrKrxzLBNrmAxn0zw5LCG',
        'igXHz2K',
        'i3jLC3rHCNqTy291BNq',
        'AhjLzG',
        'y2XPy2S',
        'ANnVBG',
        'Bg9N',
        'ChvZAa',
        'A2v5Dxa',
        'lMnVBNrLBNqTD3jHChbLCG',
        'yMvMB3jLDw5SB2fK',
        'w05HDL0Gs2XPAYbSyw5NC3vUzYbOywXHBwfUia',
        'i3jLzNjLC2GTBM93lwj0BG',
        'oti2oeHWCLDAvq',
        'CM91BMq',
        'zMLSDgvY',
        'u1rbvfvtoIbsvu5osu5h',
        'i21VDxnLlxn0yxr1CW',
        'yxbWBgLJyxrPB24VANnVBG',
        'ywfFCgfNzq',
        'igrLDgLR',
        'Aw5UzxjizwLNAhq',
        'lMvSlxnJCM9SBgjHCL9FD3jHCa',
        'BgvUz3rO',
        'i3n0B3aTyNrU',
        'ywfFCMvMCMvZAfnLyW',
        'BgvMDa',
        'Aw5UzxjuzxH0',
        'w0f1Dg9dBgLJA10GsgfSlG',
        'C2v0sxrLBq',
        'mJK5odu1nvvfB2rdta',
        'CMvSB2fK',
        'C2XPy2u',
        'w0f1Dg9dBgLJA10GrxjYB3i6',
        'lMvSlxrHyMXLx19YB3C',
        'zgLZywjSzwq',
        'yxbWzw5Kq2HPBgq',
        'w0f1Dg9szwzYzxnOxsbnzw55Aw1Wyw4GC3rHDguGjIbYzwXVywqUlI4',
        'lcbRzw1IywXPigTLigHHBc4',
        'y2XHC3nmAxn0',
        'mtbqDuXJr0W',
        'D2fYBG',
        'tM9UywT0Awy',
        'B25JBgLJAW',
        'lMPZB24'
    ];
    _0x1266 = function () {
        return _0x27445d;
    };
    return _0x1266();
}