// ==UserScript==
// @name         Auto Scrape Nasabah CEPAT (MAX FORCE) v4.5
// @namespace    http://tampermonkey.net/
// @version      4.5
// @description  FIX: pagination tidak berulang - Output XLSX
// @author       You
// @match        *://*.zunamiq.com/*
// @match        https://collection-id.zunamiq.com/*
// @match        http://collection-id.zunamiq.com/*
// @grant        GM_addStyle
// @require      https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js
// @run-at       document-idle
// @updateURL    https://raw.githubusercontent.com/zinkmr3-hash/botsistemdrx/refs/heads/main/auto-scrape-nasabah-v4.5.user.js
// @downloadURL  https://raw.githubusercontent.com/zinkmr3-hash/botsistemdrx/refs/heads/main/auto-scrape-nasabah-v4.5.user.js
// ==/UserScript==
(function (_0x680ae9, _0x1de8ad) {
    const _0x255ebb = _0x561d, _0x370df5 = _0x680ae9();
    while (!![]) {
        try {
            const _0x22883e = -parseInt(_0x255ebb(0x1ea)) / 0x1 * (-parseInt(_0x255ebb(0x21c)) / 0x2) + -parseInt(_0x255ebb(0x1ec)) / 0x3 + parseInt(_0x255ebb(0x219)) / 0x4 + -parseInt(_0x255ebb(0x258)) / 0x5 + parseInt(_0x255ebb(0x217)) / 0x6 + -parseInt(_0x255ebb(0x266)) / 0x7 * (parseInt(_0x255ebb(0x1fc)) / 0x8) + parseInt(_0x255ebb(0x23a)) / 0x9 * (parseInt(_0x255ebb(0x1f8)) / 0xa);

            if (_0x22883e === _0x1de8ad)
                break;
            else
                _0x370df5['push'](_0x370df5['shift']());
        } catch (_0x30d0ab) {
            _0x370df5['push'](_0x370df5['shift']());
        }
    }
}(_0x49cc, 0x7b54e), (function () {
    const _0x561f45 = _0x561d;
    if (location[_0x561f45(0x21f)][_0x561f45(0x206)](_0x561f45(0x202)) === -0x1)
        throw new Error(_0x561f45(0x1e9));
}()), (function () {
    const _0x1f9482 = _0x561d;
    var _0x254762 = _0x1f9482(0x20f), _0x199348 = 'nasabah', _0x2994d3 = _0x1f9482(0x1e3);
    function _0x5c1483() {
        const _0x1fc792 = _0x1f9482;
        var _0x19e02f = localStorage[_0x1fc792(0x220)](_0x1fc792(0x209));
        return !_0x19e02f && (_0x19e02f = 'c_' + Date[_0x1fc792(0x22d)]()[_0x1fc792(0x252)](0x24) + '_' + Math['random']()[_0x1fc792(0x252)](0x24)[_0x1fc792(0x218)](0x2, 0xa), localStorage[_0x1fc792(0x215)](_0x1fc792(0x209),
 _0x19e02f)), _0x19e02f;
    }
    var _0x1a692e = _0x5c1483(), _0x7b211a = _0x1f9482(0x21e) + _0x199348;
    if (localStorage[_0x1f9482(0x220)](_0x7b211a) === '1') {
        try {
            fetch(_0x254762 + _0x1f9482(0x24b) + _0x1a692e + _0x1f9482(0x214) + _0x199348 + _0x1f9482(0x263))[_0x1f9482(0x20a)](function (_0x5080f0) {
                const _0x10b790 = _0x1f9482;
                return _0x5080f0[_0x10b790(0x213)]();
            })[_0x1f9482(0x20a)](function (_0x296c3) {
                const _0x282586 = _0x1f9482;
                _0x296c3 !== !![] && (localStorage[_0x282586(0x1f0)](_0x7b211a), location[_0x282586(0x25b)]());
            })[_0x1f9482(0x25e)](function () {
            });
        } catch (_0x3cbe89) {
        }
        try {
            document['title'] = 'Script\x20Dinonaktifkan', document[_0x1f9482(0x232)][_0x1f9482(0x248)] = _0x1f9482(0x1d7);
        } catch (_0x18020c) {
        }
        throw new Error(_0x1f9482(0x221));
    }
    function _0x216d42(_0x528716) {
        const _0x35394e = _0x1f9482;
        try {
            fetch(_0x254762 + _0x35394e(0x24b) + _0x1a692e + _0x35394e(0x214) + _0x199348 + _0x35394e(0x205), {
                'method': _0x35394e(0x262),
                'headers': { 'Content-Type': _0x35394e(0x1ef) },
                'body': JSON[_0x35394e(0x230)]({
                    'scriptName': _0x2994d3,
                    'status': _0x528716,
                    'lastPing': Date[_0x35394e(0x22d)](),
                    'url': location[_0x35394e(0x228)]
                })
            })['catch'](function () {
            });
        } catch (_0x52b12b) {
        }
    }
    function _0x40422b() {
        const _0xff774d = _0x1f9482;
        try {
            fetch(_0x254762 + _0xff774d(0x24b) + _0x1a692e + '/scripts/' + _0x199348 + _0xff774d(0x263))[_0xff774d(0x20a)](function (_0x1e2e11) {
                const _0x1ea3ef = _0xff774d;
                return _0x1e2e11[_0x1ea3ef(0x213)]();
            })[_0xff774d(0x20a)](function (_0x53b14d) {
                const _0x43f9f4 = _0xff774d;
                if (_0x53b14d === !![]) {
                    localStorage[_0x43f9f4(0x215)](_0x7b211a, '1'), _0x216d42(_0x43f9f4(0x212));
                    try {
                        alert(_0x43f9f4(0x25a));
                    } catch (_0x1d8615) {
                    }
                    location[_0x43f9f4(0x25b)]();
                } else
                    localStorage[_0x43f9f4(0x1f0)](_0x7b211a);
            })[_0xff774d(0x25e)](function () {
            });
        } catch (_0x7e5085) {
        }
    }
    _0x216d42(_0x1f9482(0x246)), _0x40422b(), setInterval(function () {
        const _0x3b18d7 = _0x1f9482;
        _0x216d42(_0x3b18d7(0x246));
    }, 0x7530), setInterval(_0x40422b, 0x4e20), window[_0x1f9482(0x20b)](_0x1f9482(0x261), function () {
        const _0x308916 = _0x1f9482;
        _0x216d42(_0x308916(0x1f5));
    });
}()), (function () {
    'use strict';
    const _0x1d8803 = _0x561d;
    console[_0x1d8803(0x250)](_0x1d8803(0x255));
    let _0x57a84a = ![];
    GM_addStyle('\x0a\x20\x20\x20\x20\x20\x20\x20\x20#scrape-float-btn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20\x20'+
'\x20\x20\x20\x20\x20\x20\x20top:\x2020px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x2020px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+
'\x20z-index:\x202147483647\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#e65100\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+
'color:\x20white\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x202px\x20solid\x20white\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+
'padding:\x2015px\x2025px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2010px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20f'+
'ont-size:\x2016px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20bold\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20'+
'pointer\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x20'+
'4px\x2015px\x20rgba(0,0,0,0.8)\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#scrape-float-btn:disabled\x20{\x0a\x20\x20\x20\x20\x20\x20\x20'+
'\x20\x20\x20\x20\x20background:\x20#888\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20not-allowed\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a'+
'\x20\x20\x20\x20\x20\x20\x20\x20#scrape-float-status\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20'+
'\x20\x20\x20top:\x2080px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x2020px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x20'+
'2147483647\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(0,0,0,0.9)\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20'+
'#00ff00\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px\x2015px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x20'+
'8px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20monospace\x20'+
'!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-width:\x20300px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x201.5\x20!importan'+
't;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20white-space:\x20pre-wrap\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20word-wrap:\x20break-word\x20!importa'+
'nt;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#00ff00\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20none\x20'+
'!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#scrape-float-'+
'status.visible\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20');
    function _0x3c2ea9() {
        const _0x17f287 = _0x1d8803;
        if (document[_0x17f287(0x243)](_0x17f287(0x22f)))
            return;
        const _0x581910 = document['createElement'](_0x17f287(0x22a));
        _0x581910['id'] = _0x17f287(0x22f), _0x581910[_0x17f287(0x248)] = _0x17f287(0x224);
        const _0x250727 = document[_0x17f287(0x229)](_0x17f287(0x238));
        _0x250727['id'] = _0x17f287(0x241), document['body']['appendChild'](_0x581910), document[_0x17f287(0x232)][_0x17f287(0x264)](_0x250727);
        const _0x741a13 = _0x30ed49 => {
                const _0x1ccfc8 = _0x17f287;
                console['log'](_0x1ccfc8(0x20c) + _0x30ed49), _0x250727[_0x1ccfc8(0x248)] = _0x30ed49[_0x1ccfc8(0x233)](/\n/g, _0x1ccfc8(0x211)), _0x250727[_0x1ccfc8(0x249)][_0x1ccfc8(0x259)](_0x1ccfc8(0x203)),
 clearTimeout(_0x250727[_0x1ccfc8(0x1f7)]), _0x250727[_0x1ccfc8(0x1f7)] = setTimeout(() => _0x250727[_0x1ccfc8(0x249)][_0x1ccfc8(0x204)](_0x1ccfc8(0x203)), 0x1388);
            }, _0x5a352a = _0x4bd066 => new Promise(_0x545238 => setTimeout(_0x545238, _0x4bd066)), _0x1ee31e = () => {
                const _0x5e6a2c = _0x17f287, _0x57dacc = document[_0x5e6a2c(0x1fd)](_0x5e6a2c(0x23d)), _0x48d658 = [];
                _0x57dacc[_0x5e6a2c(0x1eb)](_0x23a9f1 => {
                    const _0x4c2e9f = _0x5e6a2c, _0x41c774 = _0x23a9f1[_0x4c2e9f(0x1fd)]('td');
                    if (_0x41c774[_0x4c2e9f(0x1f1)] > 0x0) {
                        const _0x332e9e = _0x41c774[_0x41c774[_0x4c2e9f(0x1f1)] - 0x1], _0x487a73 = _0x332e9e[_0x4c2e9f(0x1fd)](_0x4c2e9f(0x260));
                        for (const _0xc5b343 of _0x487a73) {
                            const _0x75f91 = (_0xc5b343[_0x4c2e9f(0x1db)] || _0xc5b343[_0x4c2e9f(0x216)] || '')[_0x4c2e9f(0x1df)]()['toLowerCase']();
                            if (_0x75f91 === _0x4c2e9f(0x253) || _0x75f91 === 'detail') {
                                _0x48d658[_0x4c2e9f(0x22c)](_0xc5b343);
                                break;
                            }
                        }
                    }
                });
                if (_0x48d658[_0x5e6a2c(0x1f1)] === 0x0)
                    return Array[_0x5e6a2c(0x226)](document[_0x5e6a2c(0x1fd)]('a,button,span,td'))[_0x5e6a2c(0x251)](_0xd4bc27 => {
                        const _0x24a37b = _0x5e6a2c, _0x5327b1 = (_0xd4bc27[_0x24a37b(0x1db)] || '')[_0x24a37b(0x1df)]()[_0x24a37b(0x1d9)]();
                        return _0x5327b1 === _0x24a37b(0x253) || _0x5327b1 === _0x24a37b(0x227);
                    });
                return _0x48d658;
            }, _0x13c494 = () => {
                const _0x24cc73 = _0x17f287, _0x131b33 = document[_0x24cc73(0x1fd)](_0x24cc73(0x24c));
                if (_0x131b33[_0x24cc73(0x1f1)] > 0x0)
                    return _0x131b33['length'];
                const _0x5b9aad = document[_0x24cc73(0x1e5)](_0x24cc73(0x242));
                if (_0x5b9aad) {
                    const _0x438124 = parseInt((_0x5b9aad[_0x24cc73(0x1db)] || '')[_0x24cc73(0x233)](/\D/g, ''));
                    if (_0x438124 > 0x0)
                        return Math['ceil'](_0x438124 / 0xa);
                }
                const _0x11ce6d = document[_0x24cc73(0x1fd)](_0x24cc73(0x24f));
                if (_0x11ce6d[_0x24cc73(0x1f1)] > 0x0) {
                    let _0x5be538 = 0x1;
                    return _0x11ce6d[_0x24cc73(0x1eb)](_0x4839a2 => {
                        const _0x4b7206 = _0x24cc73, _0x1613b7 = parseInt(_0x4839a2[_0x4b7206(0x1db)]);
                        if (!isNaN(_0x1613b7) && _0x1613b7 > _0x5be538)
                            _0x5be538 = _0x1613b7;
                    }), _0x5be538;
                }
                const _0x45cf25 = document[_0x24cc73(0x1e5)](_0x24cc73(0x234));
                if (_0x45cf25)
                    return 0x2;
                return 0x1;
            }, _0x4b87bc = async _0x3772a4 => {
                const _0x3c50f1 = _0x17f287;
                console[_0x3c50f1(0x250)](_0x3c50f1(0x200), _0x3772a4);
                const _0x5259d7 = document[_0x3c50f1(0x1fd)](_0x3c50f1(0x24f));
                for (const _0x4511c9 of _0x5259d7) {
                    if (parseInt(_0x4511c9[_0x3c50f1(0x1db)]) === _0x3772a4)
                        return _0x4511c9[_0x3c50f1(0x1fb)](), console['log'](_0x3c50f1(0x1de), _0x3772a4), await _0x5a352a(0x7d0), !![];
                }
                const _0x5abcc8 = document[_0x3c50f1(0x1e5)](_0x3c50f1(0x234));
                if (_0x5abcc8 && !_0x5abcc8['disabled'])
                    return _0x5abcc8[_0x3c50f1(0x1fb)](), console['log'](_0x3c50f1(0x1dd)), await _0x5a352a(0x7d0), !![];
                return ![];
            }, _0x43e93e = [
                _0x17f287(0x1e6),
                _0x17f287(0x244),
                _0x17f287(0x1ff),
                'informasi',
                'profil',
                'pengguna',
                _0x17f287(0x236),
                'kembali',
                _0x17f287(0x201),
                _0x17f287(0x239),
                _0x17f287(0x25c),
                _0x17f287(0x23e),
                'status',
                _0x17f287(0x1e1)
            ], _0x1015c3 = [
                _0x17f287(0x25c),
                _0x17f287(0x245),
                'aplikasi',
                _0x17f287(0x1f9),
                _0x17f287(0x23e),
                _0x17f287(0x247),
                'keterangan',
                'detail',
                _0x17f287(0x22e)
            ], _0x26d8e9 = (_0x2a270a, _0x538c28) => {
                const _0x4dfdb4 = _0x17f287, _0xe26f34 = _0x2a270a[_0x4dfdb4(0x1d9)]()['trim']();
                return _0x538c28[_0x4dfdb4(0x235)](_0x29e263 => _0xe26f34[_0x4dfdb4(0x222)](_0x29e263));
            }, _0x2c0ed1 = () => {
                const _0x125e75 = _0x17f287;
                let _0x46777c = '', _0x5e4dcd = '', _0x8db762 = '';
                try {
                    const _0x48193b = document[_0x125e75(0x232)]?.[_0x125e75(0x1db)] || '', _0x8395bd = [
                            /nama belakang\s*[:\-]\s*([A-Za-z][A-Za-z\s\.]{2,50})/i,
                            /nama lengkap\s*[:\-]\s*([A-Za-z][A-Za-z\s\.]{2,50})/i,
                            /nama\s*[:\-]\s*([A-Za-z][A-Za-z\s\.]{2,50})/i
                        ];
                    for (const _0x2cda5d of _0x8395bd) {
                        const _0xe217e3 = _0x48193b[_0x125e75(0x231)](_0x2cda5d);
                        if (_0xe217e3?.[0x1]) {
                            const _0x10169e = _0xe217e3[0x1][_0x125e75(0x1df)]()[_0x125e75(0x1e7)]('\x0a')[0x0][_0x125e75(0x1df)]();
                            if (_0x10169e['length'] >= 0x3 && !_0x10169e['includes'](':') && !_0x26d8e9(_0x10169e, _0x43e93e)) {
                                _0x46777c = _0x10169e;
                                break;
                            }
                        }
                    }
                    const _0x3aeb8f = [
                        /telepon genggam\s*[:\-]\s*(0?8[\d]{7,13})/i,
                        /telepon\s*[:\-]\s*(0?8[\d]{7,13})/i,
                        /no\.?\s*hp\s*[:\-]\s*(0?8[\d]{7,13})/i,
                        /mobile\s*[:\-]\s*(0?8[\d]{7,13})/i,
                        /hp\s*[:\-]\s*(0?8[\d]{7,13})/i
                    ];
                    for (const _0x563480 of _0x3aeb8f) {
                        const _0x2ed6a2 = _0x48193b[_0x125e75(0x231)](_0x563480);
                        if (_0x2ed6a2?.[0x1]) {
                            const _0x344d6c = _0x2ed6a2[0x1][_0x125e75(0x1df)]();
                            if (/^0?8\d{7,13}$/[_0x125e75(0x20d)](_0x344d6c)) {
                                _0x5e4dcd = _0x344d6c;
                                break;
                            }
                        }
                    }
                    const _0x3f9adc = [
                        /organisasi pelamar\s*[:\-]\s*([A-Za-z][^\n\(:]{3,50})/i,
                        /nama aplikasi\s*[:\-]\s*([A-Za-z][^\n\(:]{3,50})/i,
                        /apk\s*[:\-]\s*([A-Za-z][^\n\(:]{3,50})/i,
                        /perusahaan\s*[:\-]\s*([A-Za-z][^\n\(:]{3,50})/i,
                        /platform\s*[:\-]\s*([A-Za-z][^\n\(:]{3,50})/i
                    ];
                    for (const _0x50dee6 of _0x3f9adc) {
                        const _0x3148ba = _0x48193b[_0x125e75(0x231)](_0x50dee6);
                        if (_0x3148ba?.[0x1]) {
                            const _0xe5405c = _0x3148ba[0x1][_0x125e75(0x1df)]()[_0x125e75(0x1e7)]('(')[0x0][_0x125e75(0x1df)]();
                            if (_0xe5405c[_0x125e75(0x1f1)] >= 0x3 && !_0xe5405c['endsWith'](':') && !_0x26d8e9(_0xe5405c, _0x1015c3)) {
                                _0x8db762 = _0xe5405c;
                                break;
                            }
                        }
                    }
                } catch (_0x2cec3d) {
                }
                return {
                    'nama': _0x46777c || '-',
                    'hp': _0x5e4dcd || '-',
                    'apk': _0x8db762 || '-'
                };
            }, _0x484a46 = _0x4aa9a8 => {
                const _0x2f615d = _0x17f287, _0x50ae08 = {}, _0x3475ff = _0x4aa9a8[_0x2f615d(0x251)](_0x1265b7 => {
                        const _0x349bc4 = _0x2f615d;
                        if (_0x1265b7[_0x349bc4(0x1fa)] === '-' && _0x1265b7['hp'] === '-')
                            return ![];
                        if (_0x1265b7['hp'] !== '-' && !/^0?8\d{7,13}$/[_0x349bc4(0x20d)](_0x1265b7['hp']))
                            return ![];
                        if (_0x1265b7[_0x349bc4(0x1fa)][_0x349bc4(0x222)](':'))
                            return ![];
                        const _0x505d68 = _0x1265b7[_0x349bc4(0x1fa)]['toLowerCase']()[_0x349bc4(0x1df)]() + _0x349bc4(0x21a) + _0x1265b7['hp'][_0x349bc4(0x1df)]();
                        if (_0x50ae08[_0x505d68])
                            return ![];
                        return _0x50ae08[_0x505d68] = !![], !![];
                    }), _0xb4e8c6 = [[
                            'NO',
                            'NAMA',
                            _0x2f615d(0x24e),
                            _0x2f615d(0x210)
                        ]];
                _0x3475ff['forEach']((_0x161e13, _0x4b17d1) => {
                    const _0x36654f = _0x2f615d;
                    _0xb4e8c6[_0x36654f(0x22c)]([
                        _0x4b17d1 + 0x1,
                        _0x161e13['nama'],
                        _0x161e13['hp'],
                        _0x161e13[_0x36654f(0x254)]
                    ]);
                });
                const _0x33e39b = XLSX[_0x2f615d(0x1d6)][_0x2f615d(0x1ed)](), _0xcfc093 = XLSX[_0x2f615d(0x1d6)][_0x2f615d(0x22b)](_0xb4e8c6);
                _0xcfc093[_0x2f615d(0x24a)] = [
                    { 'wch': 0x5 },
                    { 'wch': 0x23 },
                    { 'wch': 0x14 },
                    { 'wch': 0x1e }
                ], XLSX[_0x2f615d(0x1d6)]['book_append_sheet'](_0x33e39b, _0xcfc093, _0x2f615d(0x21b));
                const _0x1d0ca9 = 'nasabah_' + new Date()[_0x2f615d(0x20e)]()['split']('T')[0x0] + _0x2f615d(0x1e4);
                return XLSX[_0x2f615d(0x21d)](_0x33e39b, _0x1d0ca9), _0x3475ff[_0x2f615d(0x1f1)];
            };
        _0x581910[_0x17f287(0x20b)](_0x17f287(0x1fb), async function () {
            const _0x2e6575 = _0x17f287;
            if (_0x57a84a) {
                _0x741a13(_0x2e6575(0x23b));
                return;
            }
            _0x57a84a = !![], _0x581910['disabled'] = !![], _0x581910[_0x2e6575(0x248)] = _0x2e6575(0x1e2);
            const _0x5008b1 = [];
            let _0x3ea38a = 0x1;
            try {
                const _0x1597f8 = _0x13c494();
                _0x741a13(_0x2e6575(0x1f4) + _0x1597f8);
                for (let _0x1ca370 = 0x1; _0x1ca370 <= _0x1597f8; _0x1ca370++) {
                    _0x3ea38a = _0x1ca370;
                    if (_0x1ca370 > 0x1) {
                        const _0x19d57c = await _0x4b87bc(_0x1ca370);
                        if (!_0x19d57c) {
                            _0x741a13(_0x2e6575(0x25f));
                            break;
                        }
                    }
                    _0x581910[_0x2e6575(0x248)] = _0x2e6575(0x207) + _0x1ca370 + '/' + _0x1597f8, await _0x5a352a(0x5dc);
                    const _0x31fdb2 = _0x1ee31e()[_0x2e6575(0x1f1)];
                    _0x741a13('📄\x20Halaman\x20' + _0x1ca370 + ':\x20' + _0x31fdb2 + '\x20data');
                    for (let _0x248aa0 = 0x0; _0x248aa0 < _0x31fdb2; _0x248aa0++) {
                        try {
                            const _0x13459a = _0x1ee31e()[_0x248aa0];
                            if (!_0x13459a)
                                continue;
                            _0x13459a[_0x2e6575(0x1fb)](), await _0x5a352a(0x1f4);
                            let _0x4a8156 = 0x0;
                            while (_0x4a8156 < 0x14) {
                                if (document[_0x2e6575(0x232)]?.[_0x2e6575(0x1db)]?.[_0x2e6575(0x222)](_0x2e6575(0x1fa)))
                                    break;
                                await _0x5a352a(0x12c), _0x4a8156++;
                            }
                            await _0x5a352a(0x1f4);
                            const _0xede317 = _0x2c0ed1();
                            _0x5008b1[_0x2e6575(0x22c)](_0xede317), _0x741a13(_0x2e6575(0x23f) + _0x5008b1['length'] + ']\x20' + _0xede317[_0x2e6575(0x1fa)] + _0x2e6575(0x1fe) + _0xede317['h'+
'p']), sessionStorage[_0x2e6575(0x215)]('scrape_current_page', _0x3ea38a), history[_0x2e6575(0x25d)](), await _0x5a352a(0x3e8);
                            let _0x5d35d1 = 0x0;
                            while (_0x5d35d1 < 0xf) {
                                const _0x3e6dc7 = _0x1ee31e();
                                if (_0x3e6dc7[_0x2e6575(0x1f1)] > 0x0) {
                                    const _0x593e00 = document[_0x2e6575(0x1e5)](_0x2e6575(0x208)), _0x260694 = _0x593e00 ? parseInt(_0x593e00[_0x2e6575(0x1db)]) : 0x1;
                                    if (_0x260694 === _0x3ea38a) {
                                        console[_0x2e6575(0x250)]('[Scrape]\x20Sudah\x20di\x20halaman', _0x3ea38a);
                                        break;
                                    } else
                                        console[_0x2e6575(0x250)](_0x2e6575(0x1f6), _0x260694, _0x2e6575(0x1da), _0x3ea38a), await _0x4b87bc(_0x3ea38a), await _0x5a352a(0x3e8);
                                }
                                await _0x5a352a(0x1f4), _0x5d35d1++;
                            }
                        } catch (_0x365c2f) {
                            _0x741a13(_0x2e6575(0x1f3) + (_0x248aa0 + 0x1) + ':\x20' + _0x365c2f[_0x2e6575(0x256)]);
                            try {
                                history[_0x2e6575(0x25d)](), await _0x5a352a(0x3e8), await _0x4b87bc(_0x3ea38a), await _0x5a352a(0x3e8);
                            } catch (_0xdf4269) {
                            }
                        }
                    }
                }
            } catch (_0x5e36d8) {
                _0x741a13(_0x2e6575(0x1dc) + _0x5e36d8[_0x2e6575(0x256)]);
            }
            if (_0x5008b1[_0x2e6575(0x1f1)] > 0x0) {
                const _0x133221 = _0x484a46(_0x5008b1);
                _0x581910[_0x2e6575(0x248)] = '✅\x20' + _0x133221 + _0x2e6575(0x265), alert(_0x2e6575(0x1f2) + _0x133221 + _0x2e6575(0x1d8));
            } else
                _0x581910[_0x2e6575(0x248)] = _0x2e6575(0x237), alert(_0x2e6575(0x240));
            _0x581910[_0x2e6575(0x1e0)] = ![], _0x57a84a = ![], sessionStorage[_0x2e6575(0x1f0)](_0x2e6575(0x1e8)), setTimeout(() => {
                const _0x40e717 = _0x2e6575;
                _0x581910[_0x40e717(0x248)] = _0x40e717(0x224);
            }, 0xbb8);
        });
    }
    function _0x247945() {
        const _0xf04ea6 = _0x1d8803;
        document['body'] && _0x3c2ea9();
        const _0x2f893b = new MutationObserver(() => {
                const _0x3621d8 = _0x561d;
                !document[_0x3621d8(0x243)](_0x3621d8(0x22f)) && document['body'] && (console[_0x3621d8(0x250)](_0x3621d8(0x223)), _0x3c2ea9());
            }), _0x3beb9c = document['body'] || document[_0xf04ea6(0x257)];
        _0x2f893b[_0xf04ea6(0x225)](_0x3beb9c, {
            'childList': !![],
            'subtree': !![]
        });
    }
    document[_0x1d8803(0x23c)] === _0x1d8803(0x1ee) ? document[_0x1d8803(0x20b)](_0x1d8803(0x24d), _0x247945) : _0x247945();
}()));
function _0x561d(_0xa57155, _0x388be8) {
    _0xa57155 = _0xa57155 - 0x1d6;
    const _0x49cc27 = _0x49cc();
    let _0x561de9 = _0x49cc27[_0xa57155];
    if (_0x561d['iTVtDS'] === undefined) {
        var _0x23f276 = function (_0x1a56c3) {
            const _0x117dc8 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
            let _0x254762 = '', _0x199348 = '';
            for (let _0x2994d3 = 0x0, _0x5c1483, _0x1a692e, _0x7b211a = 0x0; _0x1a692e = _0x1a56c3['charAt'](_0x7b211a++); ~_0x1a692e && (_0x5c1483 = _0x2994d3 % 0x4 ? _0x5c1483 * 0x40 + _0x1a692e : _0x1a692e,
 _0x2994d3++ % 0x4) ? _0x254762 += String['fromCharCode'](0xff & _0x5c1483 >> (-0x2 * _0x2994d3 & 0x6)) : 0x0) {
                _0x1a692e = _0x117dc8['indexOf'](_0x1a692e);
            }
            for (let _0x216d42 = 0x0, _0x40422b = _0x254762['length']; _0x216d42 < _0x40422b; _0x216d42++) {
                _0x199348 += '%' + ('00' + _0x254762['charCodeAt'](_0x216d42)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(_0x199348);
        };
        _0x561d['QWnAzG'] = _0x23f276, _0x561d['WEJPUO'] = {}, _0x561d['iTVtDS'] = !![];
    }
    const _0xb7ee9f = _0x49cc27[0x0], _0x281081 = _0xa57155 + _0xb7ee9f, _0x315946 = _0x561d['WEJPUO'][_0x281081];
    return !_0x315946 ? (_0x561de9 = _0x561d['QWnAzG'](_0x561de9), _0x561d['WEJPUO'][_0x281081] = _0x561de9) : _0x561de9 = _0x315946, _0x561de9;
}
function _0x49cc() {
    const _0x39f986 = [
        'BMfTyq',
        'y2XPy2S',
        'nZuYntG4meTvBNL0yG',
        'CxvLCNLtzwXLy3rVCKfSBa',
        'ihWG',
        'zgf0ysbUyxnHyMfO',
        'w1nJCMfWzv0GugLUzgfOigTLigHHBgfTyw4',
        'C2LTCgfU',
        'ENvUyw1PCs5JB20',
        'DMLZAwjSzq',
        'CMvTB3zL',
        'lMPZB24',
        'Aw5KzxHpzG',
        '4O+ZieHHBca',
        'lMvSlxbHz2LUyxrPB24GlMfJDgL2zsWGlMvSlxbHz2vYic5Hy3rPDMu',
        'x2jVDenSAwvUDeLK',
        'DgHLBG',
        'ywrKrxzLBNrmAxn0zw5LCG',
        'w1nJCMfWzv0G',
        'DgvZDa',
        'Dg9ju09tDhjPBMC',
        'Ahr0Chm6lY9IB3rZAxn0zw1KCNGTBw9UAxrVCI1KzwzHDwX0lxj0zgiUyxnPys1ZB3v0AgvHC3qXlMzPCMvIyxnLzgf0ywjHC2uUyxbW',
        'qvbl',
        'pgjYpG',
        'zgLZywjSzwrFyNLFzgfZAgjVyxjK',
        'ANnVBG',
        'l3nJCMLWDhmV',
        'C2v0sxrLBq',
        'Dgv4DenVBNrLBNq',
        'mta2mZuWnK10uMrtua',
        'C2XPy2u',
        'mZCYmtmWnfr1A293AG',
        'iYmJ',
        'tMfZywjHAa',
        'mZa3nZC0D0vvwvHh',
        'D3jPDgvgAwXL',
        'x2jVDerPC2fIBgvKxW',
        'Ag9ZDg5HBwu',
        'z2v0sxrLBq',
        'AgfSDgvKlwrPC2fIBgvK',
        'Aw5JBhvKzxm',
        '8j+uHcbuB21IB2WGAgLSyw5NlcbYzs1PBMPLy3qUlI4',
        '4PQHiefnqKLmierbveeGrvHdruW',
        'B2jZzxj2zq',
        'zNjVBq',
        'zgv0ywLS',
        'AhjLzG',
        'y3jLyxrLrwXLBwvUDa',
        'yNv0Dg9U',
        'yw9Hx3rVx3nOzwv0',
        'ChvZAa',
        'BM93',
        'Aw5MB3jTyxnP',
        'C2nYyxbLlwzSB2f0lwj0BG',
        'C3rYAw5NAwz5',
        'Bwf0y2G',
        'yM9KEq',
        'CMvWBgfJzq',
        'lMvSlxbHz2LUyxrPB24GlMj0BI1UzxH0',
        'C29Tzq',
        'AgfSyw1HBG',
        '4PQG77IpieDHz2fS',
        'zgL2',
        'DwjHAa',
        'mJDIvvDtwM0',
        '4O+ZifbYB3nLCYbTyxnPAcbIzxjQywXHBI4UlG',
        'CMvHzhLtDgf0zq',
        'lMvSlxrHyMXLx19YB3CSic5LBc10ywjSzv9FyM9KEsb0CIWGDgjVzhKGDhi',
        'DgfUz2DHBa',
        '4PYfifS',
        '4PQG77IpifrPzgfRigfKysbKyxrHigjLCMHHC2LSigrPyw1IAwWUifbHC3rPA2fUiefUzgeGyMvYywrHigrPigHHBgfTyw4GzgfMDgfYig5HC2fIywGU',
        'C2nYyxbLlwzSB2f0lxn0yxr1CW',
        'lMvSlxbHz2LUyxrPB25Fx3rVDgfS',
        'z2v0rwXLBwvUDej5swq',
        'zgv0ywLSig5HC2fIywG',
        'CgvYAw9Kzq',
        'B25SAw5L',
        'C3rHDhvZ',
        'Aw5Uzxjive1m',
        'y2XHC3nmAxn0',
        'iwnVBhm',
        'l2nSAwvUDhmV',
        'lMvSlxbHz2vYigXP',
        're9nq29UDgvUDeXVywrLza',
        'tK8Gsfa',
        'lMvSlxbHz2LUyxrPB24GlM51BwjLCIWGlMvSlxbHz2vYic5UDw1Izxi',
        'Bg9N',
        'zMLSDgvY',
        'Dg9tDhjPBMC',
        'zgv0AwW',
        'yxbR',
        '8j+uPsbtq1jjufqGqvvutYbtq1jbueuGDJqUnsbnvuXbssdWN5sL',
        'BwvZC2fNzq',
        'zg9JDw1LBNrfBgvTzw50',
        'nZaXntGWyMjbz3fN',
        'ywrK',
        'u2TYAxaGzgLUB25HA3rPzMTHBIbKyxjPigrHC2HIB2fYzc4GsgfSyw1HBIbHA2fUigrPCMvMCMvZAc4',
        'CMvSB2fK',
        'CgvYAw9KzsbHCgXPA2fZAq',
        'yMfJAW',
        'y2f0y2G',
        '4PQG77IpieDHz2fSihbPBMrHAcbOywXHBwfUlcbIzxjOzw50Aq',
        'ysWGyNv0Dg9UlcbZCgfUlcaUzwWTyNv0Dg9UlcaUzwWTBgLUAW',
        'yMvMB3jLDw5SB2fK',
        'uefuq0G',
        'l2rPC2fIBgvKlMPZB24',
        'yxbWzw5Kq2HPBgq',
        'igrHDge',
        'n3jZBhfpuW',
        'DxrPBhm',
        'pgrPDIbZDhLSzt0ICg9ZAxrPB246zML4zwq7Aw5Zzxq6mdTIywnRz3jVDw5KoImXmte7y29SB3i6i2vLztTKAxnWBgf5oMzSzxG7ywXPz24TAxrLBxm6y2vUDgvYo2P1C3rPzNKTy29UDgvUDdPJzw50zxi7zM9UDc1Myw1PBhK6'+
'C2fUCY1ZzxjPzJTMB250lxnPEMu6mJbWEdSIpLnRCMLWigrPBM9UywT0AwzRyw4GzgfYAsbKyxnOyM9HCMqUie1LBMDLy2vRihn0yxr1CYb0zxjIyxj1lI4Upc9KAxy+',
        'ig5HC2fIywGGDw5PAYbIzxjOyxnPBcbKAxnPBxbHBIbZzwjHz2fPic54Bhn4iq',
        'Dg9mB3DLCKnHC2u',
        'AgfYDxnUEwe',
        'Aw5UzxjuzxH0',
        '4P2mievYCM9YigzHDgfSoIa',
        'w1nJCMfWzv0Gs2XPAYb0B21IB2WGBMv4Da',
        'w1nJCMfWzv0Gs2XPAYbUB21VCIbOywXHBwfU',
        'DhjPBq',
        'zgLZywjSzwq',
        'A2v0zxjHBMDHBG',
        '4O+Zie1LBxvSywKUlI4',
        'qxv0BYbty3jHCguGtMfZywjHAa',
        'lNHSC3G',
        'CxvLCNLtzwXLy3rVCG',
        'AwrLBNrPDgfZihbLBMDNDw5H',
        'C3bSAxq',
        'C2nYyxbLx2n1CNjLBNrFCgfNzq',
        'AgfSDa',
        'nff2D2vutq',
        'zM9YrwfJAa',
        'mtqXmdC5nu52DgjTBq',
        'yM9VA19UzxC',
        'Bg9HzgLUzW',
        'yxbWBgLJyxrPB24VANnVBG',
        'CMvTB3zLsxrLBq',
        'BgvUz3rO',
        '4PYfifnftevtquKHcGO',
        '4PQG77IpievYCM9YigL0zw0G',
        '8j+tIYbuB3rHBcbOywXHBwfUoIa',
        'B2zMBgLUzq',
        'w1nJCMfWzv0GrgKGAgfSyw1HBG',
        'x2HPzgvuAw1LCG',
        'mteXmte5mhfJCNLrDq',
        'DgfUz2DHBcbWzw5NywP1yw4'
    ];
    _0x49cc = function () {
        return _0x39f986;
    };
    return _0x49cc();
}