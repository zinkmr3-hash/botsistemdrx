// ==UserScript==
// @name         Auto Scrape kontak darurat CEPAT (MAX FORCE) v6.4
// @namespace    http://tampermonkey.net/
// @version      6.4
// @description  FIX: hook execCommand + MutationObserver textarea + writeText
// @author       You
// @match        *://*.zunamiq.com/*
// @match        https://collection-id.zunamiq.com/*
// @match        http://collection-id.zunamiq.com/*
// @grant        GM_addStyle
// @require      https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js
// @run-at       document-idle
// @updateURL    https://raw.githubusercontent.com/zinkmr3-hash/botsistemdrx/refs/heads/main/auto-scrape-kontak-darurat-v6.4.user.js
// @downloadURL  https://raw.githubusercontent.com/zinkmr3-hash/botsistemdrx/refs/heads/main/auto-scrape-kontak-darurat-v6.4.user.js
// ==/UserScript==
(function (_0x46ad85, _0x5a1e6c) {
    const _0x24d0fa = _0x5ec7, _0x41ccad = _0x46ad85();
    while (!![]) {
        try {
            const _0x4c71c8 = -parseInt(_0x24d0fa(0x211)) / 0x1 * (parseInt(_0x24d0fa(0x1af)) / 0x2) + -parseInt(_0x24d0fa(0x1fc)) / 0x3 * (parseInt(_0x24d0fa(0x1ff)) / 0x4) + -parseInt(_0x24d0fa(0x204)) / 0x5 + -parseInt(_0x24d0fa(0x1e3)) / 0x6 * (parseInt(_0x24d0fa(0x181)) / 0x7) + parseInt(_0x24d0fa(0x180)) / 0x8 + -parseInt(_0x24d0fa(0x1de)) / 0x9 + parseInt(_0x24d0fa(0x1d0)) / 0xa * (parseInt(_0x24d0fa(0x1f4)) / 0xb);

            if (_0x4c71c8 === _0x5a1e6c)
                break;
            else
                _0x41ccad['push'](_0x41ccad['shift']());
        } catch (_0x12bbe0) {
            _0x41ccad['push'](_0x41ccad['shift']());
        }
    }
}(_0x2cc5, 0x9fb51), (function () {
    const _0xb026b1 = _0x5ec7;
    if (location[_0xb026b1(0x1c9)][_0xb026b1(0x18c)]('zunamiq.com') === -0x1)
        throw new Error(_0xb026b1(0x1c3));
}()), (function () {
    const _0x284fc6 = _0x5ec7;
    var _0x2d82dc = _0x284fc6(0x1fd), _0x1e2a42 = 'kontak_darurat', _0x2e8ff7 = 'Auto\x20Scrape\x20Kontak\x20Darurat';
    function _0x30bbde() {
        const _0x415802 = _0x284fc6;
        var _0x2d9711 = localStorage[_0x415802(0x178)](_0x415802(0x1b5));
        return !_0x2d9711 && (_0x2d9711 = 'c_' + Date[_0x415802(0x1dc)]()[_0x415802(0x16e)](0x24) + '_' + Math[_0x415802(0x1ee)]()['toString'](0x24)[_0x415802(0x191)](0x2, 0xa), localStorage[_0x415802(0x1b0)]('_'+
'botClientId', _0x2d9711)), _0x2d9711;
    }
    var _0x359eca = _0x30bbde(), _0x481c3e = _0x284fc6(0x1bd) + _0x1e2a42;
    if (localStorage[_0x284fc6(0x178)](_0x481c3e) === '1') {
        try {
            document[_0x284fc6(0x208)] = _0x284fc6(0x19b), document[_0x284fc6(0x187)][_0x284fc6(0x1a9)] = _0x284fc6(0x171);
        } catch (_0x271203) {
        }
        throw new Error(_0x284fc6(0x207));
    }
    function _0x93c9bf(_0xe01759) {
        const _0x1f2274 = _0x284fc6;
        try {
            fetch(_0x2d82dc + _0x1f2274(0x1d2) + _0x359eca + _0x1f2274(0x1b6) + _0x1e2a42 + _0x1f2274(0x1cf), {
                'method': _0x1f2274(0x19d),
                'headers': { 'Content-Type': _0x1f2274(0x1f1) },
                'body': JSON[_0x1f2274(0x1d4)]({
                    'scriptName': _0x2e8ff7,
                    'status': _0xe01759,
                    'lastPing': Date[_0x1f2274(0x1dc)](),
                    'url': location[_0x1f2274(0x16a)]
                })
            })[_0x1f2274(0x22e)](function () {
            });
        } catch (_0x5261eb) {
        }
    }
    function _0x385f56() {
        const _0x25f54e = _0x284fc6;
        try {
            fetch(_0x2d82dc + _0x25f54e(0x1d2) + _0x359eca + _0x25f54e(0x1b6) + _0x1e2a42 + _0x25f54e(0x1e1))[_0x25f54e(0x1a6)](function (_0x43fa49) {
                const _0x2df1d5 = _0x25f54e;
                return _0x43fa49[_0x2df1d5(0x1c4)]();
            })[_0x25f54e(0x1a6)](function (_0x2ccd42) {
                const _0x15bce3 = _0x25f54e;
                if (_0x2ccd42 === !![]) {
                    localStorage[_0x15bce3(0x1b0)](_0x481c3e, '1'), _0x93c9bf(_0x15bce3(0x179));
                    try {
                        alert(_0x15bce3(0x222));
                    } catch (_0x4d620b) {
                    }
                    location[_0x15bce3(0x1bc)]();
                } else
                    localStorage[_0x15bce3(0x1ca)](_0x481c3e);
            })['catch'](function () {
            });
        } catch (_0x5dcd84) {
        }
    }
    _0x93c9bf(_0x284fc6(0x18e)), _0x385f56(), setInterval(function () {
        const _0x5d1866 = _0x284fc6;
        _0x93c9bf(_0x5d1866(0x18e));
    }, 0x7530), setInterval(_0x385f56, 0x4e20), window[_0x284fc6(0x17b)](_0x284fc6(0x213), function () {
        const _0x126991 = _0x284fc6;
        _0x93c9bf(_0x126991(0x220));
    });
}()), (function () {
    'use strict';
    const _0x50fe97 = _0x5ec7;
    console[_0x50fe97(0x18d)](_0x50fe97(0x186));
    let _0x116499 = ![];
    GM_addStyle(_0x50fe97(0x194));
    function _0x424a0a() {
        const _0x5f00d3 = _0x50fe97;
        if (document[_0x5f00d3(0x195)]('scrape-float-btn'))
            return;
        const _0x378e6e = document[_0x5f00d3(0x206)](_0x5f00d3(0x1d1));
        _0x378e6e['id'] = _0x5f00d3(0x189), _0x378e6e[_0x5f00d3(0x1a9)] = _0x5f00d3(0x230);
        const _0x3da57c = document[_0x5f00d3(0x206)](_0x5f00d3(0x1a2));
        _0x3da57c['id'] = _0x5f00d3(0x202), document['body'][_0x5f00d3(0x1ec)](_0x378e6e), document['body'][_0x5f00d3(0x1ec)](_0x3da57c);
        const _0x32063c = _0x285bbc => {
                const _0x4e6204 = _0x5f00d3;
                console[_0x4e6204(0x18d)](_0x4e6204(0x1e9) + _0x285bbc), _0x3da57c[_0x4e6204(0x1a9)] = _0x285bbc['replace'](/\n/g, _0x4e6204(0x193)), _0x3da57c[_0x4e6204(0x17a)][_0x4e6204(0x1bf)](_0x4e6204(0x1e5)),
 clearTimeout(_0x3da57c[_0x4e6204(0x1c6)]), _0x3da57c[_0x4e6204(0x1c6)] = setTimeout(() => _0x3da57c[_0x4e6204(0x17a)][_0x4e6204(0x1b4)](_0x4e6204(0x1e5)), 0x1388);
            }, _0x465991 = _0x5c52a3 => new Promise(_0x1ff851 => setTimeout(_0x1ff851, _0x5c52a3)), _0x33bfcf = () => {
                const _0x5df279 = _0x5f00d3, _0x44d0a6 = document[_0x5df279(0x188)](_0x5df279(0x1fa)), _0x63d39a = [];
                _0x44d0a6[_0x5df279(0x1eb)](_0x4f30f8 => {
                    const _0x970fcc = _0x5df279, _0x5bbcba = _0x4f30f8[_0x970fcc(0x188)]('td');
                    if (_0x5bbcba[_0x970fcc(0x1cc)] > 0x0) {
                        const _0x5381e3 = _0x5bbcba[_0x5bbcba[_0x970fcc(0x1cc)] - 0x1], _0x45aea8 = _0x5381e3[_0x970fcc(0x188)](_0x970fcc(0x21f));
                        for (const _0x1129d4 of _0x45aea8) {
                            const _0x18e82d = (_0x1129d4['innerText'] || _0x1129d4[_0x970fcc(0x19e)] || '')[_0x970fcc(0x21e)]()[_0x970fcc(0x1a5)]();
                            if (_0x18e82d === _0x970fcc(0x218) || _0x18e82d === _0x970fcc(0x1ba)) {
                                _0x63d39a[_0x970fcc(0x168)](_0x1129d4);
                                break;
                            }
                        }
                    }
                });
                if (_0x63d39a[_0x5df279(0x1cc)] === 0x0)
                    return Array[_0x5df279(0x1a8)](document[_0x5df279(0x188)](_0x5df279(0x1d8)))['filter'](_0x543828 => {
                        const _0x3a1e7d = _0x5df279, _0x6b1f35 = (_0x543828[_0x3a1e7d(0x1be)] || '')[_0x3a1e7d(0x21e)]()[_0x3a1e7d(0x1a5)]();
                        return _0x6b1f35 === _0x3a1e7d(0x218) || _0x6b1f35 === _0x3a1e7d(0x1ba);
                    });
                return _0x63d39a;
            }, _0x3f77e6 = () => {
                const _0x56c1ae = _0x5f00d3, _0x52a745 = document['querySelectorAll']('.el-pager\x20li');
                if (_0x52a745[_0x56c1ae(0x1cc)] > 0x0)
                    return _0x52a745[_0x56c1ae(0x1cc)];
                const _0x5e3337 = document[_0x56c1ae(0x1dd)]('.el-pagination__total');
                if (_0x5e3337) {
                    const _0x5b6854 = parseInt((_0x5e3337[_0x56c1ae(0x1be)] || '')[_0x56c1ae(0x199)](/\D/g, ''));
                    if (_0x5b6854 > 0x0)
                        return Math['ceil'](_0x5b6854 / 0xa);
                }
                const _0x1068bd = document['querySelectorAll'](_0x56c1ae(0x1e0));
                if (_0x1068bd[_0x56c1ae(0x1cc)] > 0x0) {
                    let _0xceb5ea = 0x1;
                    return _0x1068bd[_0x56c1ae(0x1eb)](_0x12e803 => {
                        const _0x4634e1 = _0x56c1ae, _0x43a100 = parseInt(_0x12e803[_0x4634e1(0x1be)]);
                        if (!isNaN(_0x43a100) && _0x43a100 > _0xceb5ea)
                            _0xceb5ea = _0x43a100;
                    }), _0xceb5ea;
                }
                const _0x404e16 = document[_0x56c1ae(0x1dd)](_0x56c1ae(0x21d));
                if (_0x404e16)
                    return 0x2;
                return 0x1;
            }, _0x2c6097 = async _0x34ce81 => {
                const _0x1f0755 = _0x5f00d3;
                console[_0x1f0755(0x18d)](_0x1f0755(0x16d), _0x34ce81);
                const _0x1512fb = document[_0x1f0755(0x188)](_0x1f0755(0x1e0));
                for (const _0x56c2f5 of _0x1512fb) {
                    if (parseInt(_0x56c2f5[_0x1f0755(0x1be)]) === _0x34ce81)
                        return _0x56c2f5[_0x1f0755(0x1cd)](), console['log'](_0x1f0755(0x1ad), _0x34ce81), await _0x465991(0x7d0), !![];
                }
                const _0x270aba = document[_0x1f0755(0x1dd)](_0x1f0755(0x21d));
                if (_0x270aba && !_0x270aba[_0x1f0755(0x1c0)])
                    return _0x270aba[_0x1f0755(0x1cd)](), console[_0x1f0755(0x18d)](_0x1f0755(0x205)), await _0x465991(0x7d0), !![];
                return ![];
            }, _0x3aab3d = [
                _0x5f00d3(0x1ae),
                _0x5f00d3(0x226),
                'data\x20nasabah',
                _0x5f00d3(0x1ef),
                _0x5f00d3(0x1a7),
                _0x5f00d3(0x227),
                'halaman',
                _0x5f00d3(0x22c),
                _0x5f00d3(0x1ed),
                _0x5f00d3(0x1c7),
                'periode\x20aplikasi',
                'tanggal',
                _0x5f00d3(0x183),
                _0x5f00d3(0x231)
            ], _0x1fd730 = [
                _0x5f00d3(0x18b),
                _0x5f00d3(0x203),
                _0x5f00d3(0x182),
                'tanggal\x20pengajuan',
                _0x5f00d3(0x22f),
                _0x5f00d3(0x183),
                _0x5f00d3(0x231),
                _0x5f00d3(0x1ba),
                _0x5f00d3(0x1ef)
            ], _0x23e717 = (_0x3a559f, _0x1c0054) => {
                const _0x27713e = _0x5f00d3, _0x2d25e0 = _0x3a559f[_0x27713e(0x1a5)]()[_0x27713e(0x21e)]();
                return _0x1c0054[_0x27713e(0x17d)](_0x184756 => _0x2d25e0['includes'](_0x184756));
            }, _0x5b7e0c = () => {
                const _0x253184 = _0x5f00d3;
                let _0x3911dc = '', _0xf31c5d = '';
                try {
                    const _0x7801a8 = document[_0x253184(0x187)]?.[_0x253184(0x1be)] || '', _0x283112 = [
                            /nama belakang\s*[:\-]\s*([A-Za-z][A-Za-z\s\.]{2,50})/i,
                            /nama lengkap\s*[:\-]\s*([A-Za-z][A-Za-z\s\.]{2,50})/i,
                            /nama\s*[:\-]\s*([A-Za-z][A-Za-z\s\.]{2,50})/i
                        ];
                    for (const _0x4671cb of _0x283112) {
                        const _0x76e24b = _0x7801a8[_0x253184(0x22b)](_0x4671cb);
                        if (_0x76e24b?.[0x1]) {
                            const _0x25fcda = _0x76e24b[0x1][_0x253184(0x21e)]()[_0x253184(0x1db)]('\x0a')[0x0][_0x253184(0x21e)]();
                            if (_0x25fcda[_0x253184(0x1cc)] >= 0x3 && !_0x25fcda[_0x253184(0x21c)](':') && !_0x23e717(_0x25fcda, _0x3aab3d)) {
                                _0x3911dc = _0x25fcda;
                                break;
                            }
                        }
                    }
                    const _0x27f076 = [
                        /organisasi pelamar\s*[:\-]\s*([A-Za-z][^\n\(:]{3,50})/i,
                        /nama aplikasi\s*[:\-]\s*([A-Za-z][^\n\(:]{3,50})/i,
                        /apk\s*[:\-]\s*([A-Za-z][^\n\(:]{3,50})/i,
                        /perusahaan\s*[:\-]\s*([A-Za-z][^\n\(:]{3,50})/i,
                        /platform\s*[:\-]\s*([A-Za-z][^\n\(:]{3,50})/i
                    ];
                    for (const _0x264ceb of _0x27f076) {
                        const _0x2b0938 = _0x7801a8[_0x253184(0x22b)](_0x264ceb);
                        if (_0x2b0938?.[0x1]) {
                            const _0x2901f4 = _0x2b0938[0x1][_0x253184(0x21e)]()[_0x253184(0x1db)]('(')[0x0][_0x253184(0x21e)]();
                            if (_0x2901f4[_0x253184(0x1cc)] >= 0x3 && !_0x2901f4[_0x253184(0x1c5)](':') && !_0x23e717(_0x2901f4, _0x1fd730)) {
                                _0xf31c5d = _0x2901f4;
                                break;
                            }
                        }
                    }
                } catch (_0x2badf3) {
                }
                return {
                    'nama': _0x3911dc || '-',
                    'apk': _0xf31c5d || '-'
                };
            };
        let _0x56d793 = null;
        const _0x1cd0d8 = navigator[_0x5f00d3(0x17f)][_0x5f00d3(0x1f6)][_0x5f00d3(0x1f9)](navigator[_0x5f00d3(0x17f)]);
        navigator[_0x5f00d3(0x17f)][_0x5f00d3(0x1f6)] = async function (_0x4ea7de) {
            const _0x10a66c = _0x5f00d3;
            _0x56d793 = _0x4ea7de, console[_0x10a66c(0x18d)](_0x10a66c(0x1b7), _0x4ea7de);
            try {
                return await _0x1cd0d8(_0x4ea7de);
            } catch (_0x4402b7) {
                return Promise[_0x10a66c(0x1d5)]();
            }
        };
        const _0x110cb3 = document[_0x5f00d3(0x1d9)][_0x5f00d3(0x1f9)](document);
        document[_0x5f00d3(0x1d9)] = function (_0x3245ab, ..._0x5bb4b6) {
            const _0x1ab483 = _0x5f00d3;
            if (_0x3245ab === _0x1ab483(0x17c)) {
                const _0x83816d = window[_0x1ab483(0x1c2)](), _0x8916c1 = _0x83816d ? _0x83816d['toString']() : '';
                if (_0x8916c1)
                    _0x56d793 = _0x8916c1, console[_0x1ab483(0x18d)](_0x1ab483(0x212), _0x8916c1);
                else {
                    const _0x48eb87 = document[_0x1ab483(0x174)];
                    if (_0x48eb87 && (_0x48eb87[_0x1ab483(0x1ac)] === _0x1ab483(0x1df) || _0x48eb87[_0x1ab483(0x1ac)] === _0x1ab483(0x1bb))) {
                        const _0x5048f6 = _0x48eb87[_0x1ab483(0x20d)] || _0x48eb87[_0x1ab483(0x19e)] || '';
                        _0x5048f6 && (_0x56d793 = _0x5048f6, console['log'](_0x1ab483(0x170), _0x5048f6));
                    }
                }
            }
            return _0x110cb3(_0x3245ab, ..._0x5bb4b6);
        }, console[_0x5f00d3(0x18d)](_0x5f00d3(0x19a));
        const _0x26afb1 = new MutationObserver(_0x2749b9 => {
            const _0x4c8920 = _0x5f00d3;
            for (const _0x3cb909 of _0x2749b9) {
                for (const _0x375032 of _0x3cb909['addedNodes']) {
                    if (_0x375032[_0x4c8920(0x1ac)] === 'TEXTAREA' || _0x375032['tagName'] === _0x4c8920(0x1bb)) {
                        const _0x35f79d = _0x375032[_0x4c8920(0x20d)] || '';
                        _0x35f79d && _0x35f79d['length'] >= 0x5 && (_0x56d793 = _0x35f79d, console[_0x4c8920(0x18d)](_0x4c8920(0x198), _0x35f79d));
                    }
                }
            }
        });
        _0x26afb1[_0x5f00d3(0x1a0)](document[_0x5f00d3(0x187)], {
            'childList': !![],
            'subtree': !![]
        });
        const _0x22136f = _0x310de6 => {
                const _0x385e12 = _0x5f00d3;
                try {
                    let _0x2eeced = _0x310de6;
                    for (let _0x960637 = 0x0; _0x960637 < 0x8; _0x960637++) {
                        if (_0x2eeced && _0x2eeced[_0x385e12(0x19f)]) {
                            const _0x26fd56 = _0x2eeced[_0x385e12(0x19f)], _0x10eb6c = _0x2dd477 => {
                                    const _0x48568c = _0x385e12;
                                    if (!_0x2dd477 || typeof _0x2dd477 !== 'object')
                                        return null;
                                    for (const _0x4a53f6 of Object[_0x48568c(0x1e4)](_0x2dd477)) {
                                        const _0x3e087e = _0x2dd477[_0x4a53f6];
                                        if (typeof _0x3e087e === _0x48568c(0x20b)) {
                                            const _0x190ccb = _0x3e087e['replace'](/\D/g, '');
                                            if (/^(62|0)?8\d{7,13}$/[_0x48568c(0x1f7)](_0x190ccb) && _0x190ccb[_0x48568c(0x1cc)] >= 0x9)
                                                return _0x190ccb;
                                        }
                                        if (typeof _0x3e087e === _0x48568c(0x201)) {
                                            const _0x4cfe7e = String(_0x3e087e);
                                            if (/^8\d{7,13}$/['test'](_0x4cfe7e))
                                                return _0x4cfe7e;
                                        }
                                    }
                                    return null;
                                }, _0x21adb2 = _0x10eb6c(_0x26fd56[_0x385e12(0x200)]) || _0x10eb6c(_0x26fd56['$data']) || _0x10eb6c(_0x26fd56[_0x385e12(0x233)]) || _0x10eb6c(_0x26fd56);

                            if (_0x21adb2)
                                return _0x21adb2;
                        }
                        _0x2eeced = _0x2eeced && _0x2eeced[_0x385e12(0x20a)];
                    }
                } catch (_0x42f43f) {
                }
                return null;
            }, _0x7f7c34 = async () => {
                const _0x49459e = _0x5f00d3;
                try {
                    const _0x4c3dc4 = Array[_0x49459e(0x1a8)](document[_0x49459e(0x188)]('.el-tabs__item,\x20[role=\x22tab\x22],\x20span,\x20div,\x20a'))[_0x49459e(0x20e)](_0x156d18 => (_0x156d18[_0x49459e(0x1be)] || _0x156d18[_0x49459e(0x19e)] || '')[_0x49459e(0x21e)]()[_0x49459e(0x1a5)]() === _0x49459e(0x1d7));

                    if (!_0x4c3dc4)
                        return console[_0x49459e(0x18d)](_0x49459e(0x214)), [
                            '-',
                            '-'
                        ];
                    _0x4c3dc4[_0x49459e(0x1cd)]();
                    let _0x1f234f = ![];
                    for (let _0x55dce3 = 0x0; _0x55dce3 < 0x14; _0x55dce3++) {
                        await _0x465991(0x1f4);
                        const _0x2d9d49 = Array['from'](document[_0x49459e(0x188)]('span,\x20a,\x20button'))[_0x49459e(0x17d)](_0xb44ba5 => (_0xb44ba5[_0x49459e(0x1be)] || _0xb44ba5[_0x49459e(0x19e)] || '')[_0x49459e(0x21e)]()['t'+
'oLowerCase']() === 'menyalin');
                        if (_0x2d9d49) {
                            _0x1f234f = !![];
                            break;
                        }
                    }
                    if (!_0x1f234f)
                        return console['log'](_0x49459e(0x228)), [
                            '-',
                            '-'
                        ];
                    await _0x465991(0x258);
                    const _0x4bee10 = () => {
                            const _0x7edf11 = _0x49459e, _0xa2ce07 = Array[_0x7edf11(0x1a8)](document[_0x7edf11(0x188)](_0x7edf11(0x1ab)))[_0x7edf11(0x1f8)](_0x1a8763 => {
                                    const _0x2739bd = _0x7edf11, _0x5de0b2 = (_0x1a8763[_0x2739bd(0x1be)] || _0x1a8763['textContent'] || '')['trim']()[_0x2739bd(0x1a5)]();
                                    if (_0x5de0b2 !== _0x2739bd(0x225))
                                        return ![];
                                    if (_0x1a8763[_0x2739bd(0x18a)] === null)
                                        return ![];
                                    const _0x29b982 = _0x1a8763['getBoundingClientRect']();
                                    return _0x29b982[_0x2739bd(0x20c)] >= 0x0 && _0x29b982[_0x2739bd(0x20c)] < window[_0x2739bd(0x1e6)];
                                }), _0x41e7f8 = [];
                            for (const _0x32de0c of _0xa2ce07) {
                                const _0x416b8f = _0x32de0c[_0x7edf11(0x1fe)](), _0x3fe17b = _0x416b8f[_0x7edf11(0x20c)] + window[_0x7edf11(0x20f)], _0x5143a0 = _0x416b8f[_0x7edf11(0x192)] + window['s'+
'crollX'], _0x1522b3 = _0x41e7f8[_0x7edf11(0x20e)](_0x256117 => Math[_0x7edf11(0x1a1)](_0x256117['y'] - _0x3fe17b) < 0x1e);
                                _0x1522b3 ? _0x5143a0 > _0x1522b3['x'] && (_0x1522b3['el'] = _0x32de0c, _0x1522b3['x'] = _0x5143a0) : _0x41e7f8[_0x7edf11(0x168)]({
                                    'y': _0x3fe17b,
                                    'x': _0x5143a0,
                                    'el': _0x32de0c
                                });
                            }
                            _0x41e7f8[_0x7edf11(0x21a)]((_0x1ed5ad, _0x952d71) => _0x1ed5ad['y'] - _0x952d71['y']);
                            const _0x5b61af = _0x41e7f8[_0x7edf11(0x1ce)](_0x5f2d4d => _0x5f2d4d['el']);
                            return console['log'](_0x7edf11(0x1c1), _0x5b61af[_0x7edf11(0x1ce)]((_0x2482c3, _0x17a6dc) => {
                                const _0x1f7f3b = _0x7edf11, _0x421294 = _0x2482c3[_0x1f7f3b(0x1fe)]();
                                return '[' + _0x17a6dc + _0x1f7f3b(0x19c) + Math[_0x1f7f3b(0x1f2)](_0x421294['top']) + _0x1f7f3b(0x217) + Math['round'](_0x421294[_0x1f7f3b(0x192)]);

                            })[_0x7edf11(0x216)](_0x7edf11(0x232))), _0x5b61af;
                        }, _0x554158 = [
                            null,
                            null
                        ];
                    for (let _0x7b2d0d = 0x1; _0x7b2d0d <= 0x2; _0x7b2d0d++) {
                        let _0x4cda01 = ![];
                        for (let _0x218acb = 0x0; _0x218acb < 0x3 && !_0x4cda01; _0x218acb++) {
                            try {
                                const _0x1f7103 = _0x4bee10();
                                console[_0x49459e(0x18d)]('[Scrape]\x20Total\x20tombol\x20visible:', _0x1f7103['length'], _0x49459e(0x215), _0x7b2d0d);
                                const _0x1c6159 = _0x1f7103[_0x7b2d0d];
                                if (!_0x1c6159) {
                                    console['log'](_0x49459e(0x1b8), _0x7b2d0d, _0x49459e(0x175));
                                    break;
                                }
                                _0x1c6159[_0x49459e(0x184)]({ 'block': 'center' }), await _0x465991(0x12c), _0x56d793 = null, _0x1c6159[_0x49459e(0x1cd)]();
                                for (let _0x1b2ed3 = 0x0; _0x1b2ed3 < 0xf; _0x1b2ed3++) {
                                    await _0x465991(0xc8);
                                    if (_0x56d793 !== null)
                                        break;
                                }
                                console[_0x49459e(0x18d)]('[Scrape]\x20Hook\x20idx', _0x7b2d0d, _0x49459e(0x22d), _0x218acb, '=', _0x56d793);
                                if (_0x56d793) {
                                    const _0x545d64 = _0x56d793[_0x49459e(0x199)](/\D/g, '');
                                    _0x545d64[_0x49459e(0x1cc)] >= 0x8 && (_0x554158[_0x7b2d0d - 0x1] = _0x545d64, _0x4cda01 = !![], await _0x465991(0x190));
                                }
                            } catch (_0x26f0ed) {
                                console[_0x49459e(0x18d)](_0x49459e(0x1b1), _0x7b2d0d, ':', _0x26f0ed[_0x49459e(0x223)]), await _0x465991(0x1f4);
                            }
                        }
                        if (!_0x4cda01)
                            _0x554158[_0x7b2d0d - 0x1] = '-';
                    }
                    return [
                        _0x554158[0x0] || '-',
                        _0x554158[0x1] || '-'
                    ];
                } catch (_0x43b119) {
                    return console[_0x49459e(0x18d)](_0x49459e(0x197), _0x43b119[_0x49459e(0x223)]), [
                        '-',
                        '-'
                    ];
                }
            }, _0x327ff6 = _0x132808 => {
                const _0x48c15d = _0x5f00d3, _0x3ee44f = {}, _0x295d2a = _0x132808[_0x48c15d(0x1f8)](_0x29195c => {
                        const _0x3f6349 = _0x48c15d;
                        if (!_0x29195c[_0x3f6349(0x16c)] || _0x29195c[_0x3f6349(0x16c)] === '-')
                            return ![];
                        if (_0x29195c[_0x3f6349(0x16c)][_0x3f6349(0x21c)](':'))
                            return ![];
                        const _0x5043cf = _0x29195c[_0x3f6349(0x16c)]['toLowerCase']()[_0x3f6349(0x21e)]() + _0x3f6349(0x18f) + (_0x29195c['hp'] || '-')['trim']();
                        if (_0x3ee44f[_0x5043cf])
                            return ![];
                        return _0x3ee44f[_0x5043cf] = !![], !![];
                    }), _0x66a000 = [[
                            'NO',
                            _0x48c15d(0x1d6),
                            _0x48c15d(0x17e),
                            _0x48c15d(0x1b2)
                        ]];
                _0x295d2a['forEach']((_0x5cfebb, _0x5c2959) => {
                    const _0x1b849d = _0x48c15d;
                    _0x66a000[_0x1b849d(0x168)]([
                        _0x5c2959 + 0x1,
                        _0x5cfebb['nama'],
                        _0x5cfebb['hp'],
                        _0x5cfebb[_0x1b849d(0x1f3)]
                    ]);
                });
                const _0x5f6467 = XLSX[_0x48c15d(0x169)][_0x48c15d(0x1e7)](), _0x1b964d = XLSX[_0x48c15d(0x169)][_0x48c15d(0x1f5)](_0x66a000);
                _0x1b964d[_0x48c15d(0x1a4)] = [
                    { 'wch': 0x5 },
                    { 'wch': 0x23 },
                    { 'wch': 0x14 },
                    { 'wch': 0x1e }
                ], XLSX[_0x48c15d(0x169)][_0x48c15d(0x224)](_0x5f6467, _0x1b964d, 'Nasabah');
                const _0x29a8a1 = _0x48c15d(0x16b) + new Date()[_0x48c15d(0x21b)]()[_0x48c15d(0x1db)]('T')[0x0] + _0x48c15d(0x185);
                return XLSX[_0x48c15d(0x229)](_0x5f6467, _0x29a8a1), _0x295d2a[_0x48c15d(0x1cc)];
            };
        _0x378e6e[_0x5f00d3(0x17b)]('click', async function () {
            const _0x315c13 = _0x5f00d3;
            if (_0x116499) {
                _0x32063c(_0x315c13(0x209));
                return;
            }
            _0x116499 = !![], _0x378e6e[_0x315c13(0x1c0)] = !![], _0x378e6e[_0x315c13(0x1a9)] = _0x315c13(0x221);
            const _0xf872ae = [];
            let _0x4545be = 0x1;
            try {
                const _0x122dd4 = _0x3f77e6();
                _0x32063c(_0x315c13(0x1da) + _0x122dd4);
                for (let _0x198c24 = 0x1; _0x198c24 <= _0x122dd4; _0x198c24++) {
                    _0x4545be = _0x198c24;
                    if (_0x198c24 > 0x1) {
                        const _0x2e797e = await _0x2c6097(_0x198c24);
                        if (!_0x2e797e) {
                            _0x32063c(_0x315c13(0x22a));
                            break;
                        }
                    }
                    _0x378e6e[_0x315c13(0x1a9)] = _0x315c13(0x196) + _0x198c24 + '/' + _0x122dd4, await _0x465991(0x5dc);
                    const _0x313a88 = _0x33bfcf()[_0x315c13(0x1cc)];
                    _0x32063c(_0x315c13(0x16f) + _0x198c24 + ':\x20' + _0x313a88 + _0x315c13(0x177));
                    for (let _0x4c801f = 0x0; _0x4c801f < _0x313a88; _0x4c801f++) {
                        try {
                            const _0x3aad82 = _0x33bfcf()[_0x4c801f];
                            if (!_0x3aad82)
                                continue;
                            const _0x3746dd = window[_0x315c13(0x219)][_0x315c13(0x16a)];
                            _0x3aad82[_0x315c13(0x1cd)]();
                            let _0x21ea2c = ![];
                            for (let _0x435a90 = 0x0; _0x435a90 < 0x1e; _0x435a90++) {
                                await _0x465991(0x12c);
                                if (window[_0x315c13(0x219)][_0x315c13(0x16a)] !== _0x3746dd) {
                                    _0x21ea2c = !![];
                                    break;
                                }
                            }
                            if (!_0x21ea2c) {
                                console[_0x315c13(0x18d)](_0x315c13(0x1d3));
                                continue;
                            }
                            let _0xeda7dc = 0x0;
                            while (_0xeda7dc < 0x19) {
                                if (document[_0x315c13(0x187)]?.[_0x315c13(0x1be)]?.[_0x315c13(0x21c)](_0x315c13(0x16c)))
                                    break;
                                await _0x465991(0x12c), _0xeda7dc++;
                            }
                            await _0x465991(0x320);
                            const {
                                    nama: _0x70ddd8,
                                    apk: _0x258615
                                } = _0x5b7e0c(), [_0x2da6e3, _0x4ebe2d] = await _0x7f7c34();
                            _0xf872ae[_0x315c13(0x168)]({
                                'nama': _0x70ddd8,
                                'hp': _0x2da6e3,
                                'apk': _0x258615
                            }), _0xf872ae[_0x315c13(0x168)]({
                                'nama': _0x70ddd8,
                                'hp': _0x4ebe2d,
                                'apk': _0x258615
                            }), _0x32063c(_0x315c13(0x1e8) + (_0xf872ae[_0x315c13(0x1cc)] - 0x1) + '&' + _0xf872ae[_0x315c13(0x1cc)] + ']\x20' + _0x70ddd8 + _0x315c13(0x1ea) + _0x2da6e3 + _0x315c13(0x1b9) + _0x4ebe2d),
 sessionStorage[_0x315c13(0x1b0)](_0x315c13(0x1b3), _0x4545be);
                            const _0x4523e8 = window['location']['href'];
                            history[_0x315c13(0x173)]();
                            for (let _0x1314a3 = 0x0; _0x1314a3 < 0x1e; _0x1314a3++) {
                                await _0x465991(0x12c);
                                if (window[_0x315c13(0x219)][_0x315c13(0x16a)] !== _0x4523e8)
                                    break;
                            }
                            let _0x4e9916 = ![];
                            for (let _0x5d9f80 = 0x0; _0x5d9f80 < 0x1e; _0x5d9f80++) {
                                await _0x465991(0x12c);
                                if (_0x33bfcf()[_0x315c13(0x1cc)] > 0x0) {
                                    _0x4e9916 = !![];
                                    break;
                                }
                            }
                            await _0x465991(0x1f4);
                        } catch (_0x3263c8) {
                            _0x32063c(_0x315c13(0x1c8) + (_0x4c801f + 0x1) + ':\x20' + _0x3263c8[_0x315c13(0x223)]);
                            try {
                                history[_0x315c13(0x173)](), await _0x465991(0x3e8), await _0x2c6097(_0x4545be), await _0x465991(0x3e8);
                            } catch (_0xeab1e4) {
                            }
                        }
                    }
                }
            } catch (_0x582ca5) {
                _0x32063c(_0x315c13(0x176) + _0x582ca5[_0x315c13(0x223)]);
            }
            if (_0xf872ae[_0x315c13(0x1cc)] > 0x0) {
                const _0x3841fc = _0x327ff6(_0xf872ae);
                _0x378e6e[_0x315c13(0x1a9)] = '✅\x20' + _0x3841fc + _0x315c13(0x177), alert(_0x315c13(0x1a3) + _0x3841fc + _0x315c13(0x172));
            } else
                _0x378e6e[_0x315c13(0x1a9)] = _0x315c13(0x1fb), alert(_0x315c13(0x1aa));
            _0x378e6e[_0x315c13(0x1c0)] = ![], _0x116499 = ![], sessionStorage[_0x315c13(0x1ca)](_0x315c13(0x1b3)), setTimeout(() => {
                const _0x12dcb3 = _0x315c13;
                _0x378e6e[_0x12dcb3(0x1a9)] = _0x12dcb3(0x230);
            }, 0xbb8);
        });
    }
    function _0x260150() {
        const _0x584aaa = _0x50fe97;
        document[_0x584aaa(0x187)] && _0x424a0a();
        const _0x304cb5 = new MutationObserver(() => {
                const _0x16821d = _0x584aaa;
                !document[_0x16821d(0x195)](_0x16821d(0x189)) && document['body'] && (console['log'](_0x16821d(0x190)), _0x424a0a());
            }), _0xb952fe = document[_0x584aaa(0x187)] || document[_0x584aaa(0x210)];
        _0x304cb5[_0x584aaa(0x1a0)](_0xb952fe, {
            'childList': !![],
            'subtree': !![]
        });
    }
    document[_0x50fe97(0x1e2)] === _0x50fe97(0x1cb) ? document[_0x50fe97(0x17b)](_0x50fe97(0x1f0), _0x260150) : _0x260150();
}()));
function _0x5ec7(_0x281170, _0x2cb638) {
    _0x281170 = _0x281170 - 0x168;
    const _0x2cc562 = _0x2cc5();
    let _0x5ec787 = _0x2cc562[_0x281170];
    if (_0x5ec7['hQOgWN'] === undefined) {
        var _0x31e795 = function (_0x24aa3f) {
            const _0x5e36b2 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
            let _0x2d82dc = '', _0x1e2a42 = '';
            for (let _0x2e8ff7 = 0x0, _0x30bbde, _0x359eca, _0x481c3e = 0x0; _0x359eca = _0x24aa3f['charAt'](_0x481c3e++); ~_0x359eca && (_0x30bbde = _0x2e8ff7 % 0x4 ? _0x30bbde * 0x40 + _0x359eca : _0x359eca,
 _0x2e8ff7++ % 0x4) ? _0x2d82dc += String['fromCharCode'](0xff & _0x30bbde >> (-0x2 * _0x2e8ff7 & 0x6)) : 0x0) {
                _0x359eca = _0x5e36b2['indexOf'](_0x359eca);
            }
            for (let _0x93c9bf = 0x0, _0x385f56 = _0x2d82dc['length']; _0x93c9bf < _0x385f56; _0x93c9bf++) {
                _0x1e2a42 += '%' + ('00' + _0x2d82dc['charCodeAt'](_0x93c9bf)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(_0x1e2a42);
        };
        _0x5ec7['GFimZo'] = _0x31e795, _0x5ec7['sQAilx'] = {}, _0x5ec7['hQOgWN'] = !![];
    }
    const _0x2f5513 = _0x2cc562[0x0], _0x5beecb = _0x281170 + _0x2f5513, _0x3c7d0c = _0x5ec7['sQAilx'][_0x5beecb];
    return !_0x3c7d0c ? (_0x5ec787 = _0x5ec7['GFimZo'](_0x5ec787), _0x5ec7['sQAilx'][_0x5beecb] = _0x5ec787) : _0x5ec787 = _0x3c7d0c, _0x5ec787;
}
function _0x2cc5() {
    const _0xddb1d4 = [
        'mtC4oty5nvjSCLHdsa',
        'vevyvefsrue',
        'lMvSlxbHz2LUyxrPB24GlM51BwjLCIWGlMvSlxbHz2vYic5UDw1Izxi',
        'l2rPC2fIBgvKlMPZB24',
        'CMvHzhLtDgf0zq',
        'mJCWmhfVCvrPtW',
        'A2v5CW',
        'DMLZAwjSzq',
        'Aw5UzxjizwLNAhq',
        'yM9VA19UzxC',
        '4PYfifS',
        'w1nJCMfWzv0G',
        'ihWGs0qXoIa',
        'zM9YrwfJAa',
        'yxbWzw5Kq2HPBgq',
        'C2LTCgfU',
        'CMfUzg9T',
        'Aw5MB3jTyxnP',
        're9nq29UDgvUDeXVywrLza',
        'yxbWBgLJyxrPB24VANnVBG',
        'CM91BMq',
        'yxbR',
        'mZiZota3odDQA2zADKi',
        'yw9Hx3rVx3nOzwv0',
        'D3jPDgvuzxH0',
        'DgvZDa',
        'zMLSDgvY',
        'yMLUza',
        'lMvSlxrHyMXLx19YB3CSic5LBc10ywjSzv9FyM9KEsb0CIWGDgjVzhKGDhi',
        '4PQG77IpieDHz2fS',
        'mty5nJHXrhPvuha',
        'Ahr0Chm6lY9IB3rZAxn0zw1KCNGTBw9UAxrVCI1KzwzHDwX0lxj0zgiUyxnPys1ZB3v0AgvHC3qXlMzPCMvIyxnLzgf0ywjHC2uUyxbW',
        'z2v0qM91BMrPBMDdBgLLBNrszwn0',
        'nJaWDeTWrLjO',
        'jhbYB3bZ',
        'BNvTyMvY',
        'C2nYyxbLlwzSB2f0lxn0yxr1CW',
        'CgvYAw9Kzq',
        'ntmXnty4nxvNCuPpyq',
        'w1nJCMfWzv0Gs2XPAYb0B21IB2WGBMv4Da',
        'y3jLyxrLrwXLBwvUDa',
        'AgfSDgvKlwrPC2fIBgvK',
        'DgL0Bgu',
        '4O+ZifbYB3nLCYbTyxnPAcbIzxjQywXHBI4UlG',
        'CgfYzw50rwXLBwvUDa',
        'C3rYAw5N',
        'Dg9W',
        'DMfSDwu',
        'zMLUza',
        'C2nYB2XSwq',
        'zg9JDw1LBNrfBgvTzw50',
        'mwDQwunpwq',
        'w1nJCMfWzv0Gsg9VAYbLEgvJq29TBwfUzcbJB3b5oG',
        'yMvMB3jLDw5SB2fK',
        'w1nJCMfWzv0GvgfIigTVBNrHAYbKyxj1CMf0ihrPzgfRigrPDgvTDwTHBG',
        'FcbRBgLRigLUzgv4oG',
        'AM9PBG',
        'ifG9',
        'zgv0AwW',
        'Bg9JyxrPB24',
        'C29YDa',
        'Dg9ju09tDhjPBMC',
        'Aw5JBhvKzxm',
        'lMvSlxbHz2LUyxrPB24GlMj0BI1UzxH0',
        'DhjPBq',
        'ysWGyNv0Dg9UlcbZCgfUlcaUzwWTyNv0Dg9UlcaUzwWTBgLUAW',
        'B2zMBgLUzq',
        '4O+Zie1LBxvSywKUlI4',
        'u2TYAxaGzgLUB25HA3rPzMTHBIbKyxjPigrHC2HIB2fYzc4GsgfSyw1HBIbHA2fUigrPCMvMCMvZAc4',
        'BwvZC2fNzq',
        'yM9VA19HChbLBMrFC2HLzxq',
        'BwvUEwfSAw4',
        'zgv0ywLSig5HC2fIywG',
        'CgvUz2D1BMe',
        'w1nJCMfWzv0GvgfIzwWGDgLKywSGBxvUy3vS',
        'D3jPDgvgAwXL',
        '4PQG77IpieDHz2fSihbPBMrHAcbOywXHBwfUlcbIzxjOzw50Aq',
        'Bwf0y2G',
        'A2vTyMfSAq',
        'CMv0CNK',
        'y2f0y2G',
        'DgfUz2DHBa',
        '4PQHiefnqKLmierbveeGrvHdruW',
        'A2v0zxjHBMDHBG',
        'ihWG',
        'CM93',
        'ChvZAa',
        'DxrPBhm',
        'AhjLzG',
        'BMfZywjHAf8',
        'BMfTyq',
        'w1nJCMfWzv0GugLUzgfOigTLigHHBgfTyw4',
        'Dg9tDhjPBMC',
        '8j+tHcbiywXHBwfUia',
        'w1nJCMfWzv0Gsg9VAYbLEgvJq29TBwfUzcbHy3rPDMuGzwXLBwvUDdO',
        'pgrPDIbZDhLSzt0ICg9ZAxrPB246zML4zwq7Aw5Zzxq6mdTIywnRz3jVDw5KoImXmte7y29SB3i6i2vLztTKAxnWBgf5oMzSzxG7ywXPz24TAxrLBxm6y2vUDgvYo2P1C3rPzNKTy29UDgvUDdPJzw50zxi7zM9UDc1Myw1PBhK6'+
'C2fUCY1ZzxjPzJTMB250lxnPEMu6mJbWEdSIpLnRCMLWigrPBM9UywT0AwzRyw4GzgfYAsbKyxnOyM9HCMqUpc9KAxy+',
        'igjHCMLZigTVBNrHAYbKyxj1CMf0igjLCMHHC2LSigrPC2LTCgfUihnLyMfNywKGlNHSC3GH',
        'yMfJAW',
        'ywn0AxzLrwXLBwvUDa',
        'DgLKywSGywrH',
        '4P2mievYCM9YigzHDgfSoIa',
        'igrHDge',
        'z2v0sxrLBq',
        'zgLZywjSzwrFyNLFzgfZAgjVyxjK',
        'y2XHC3nmAxn0',
        'ywrKrxzLBNrmAxn0zw5LCG',
        'y29WEq',
        'C29Tzq',
        'tK8Gsfa',
        'y2XPCgjVyxjK',
        'nZu0otCZnLPXyNvvyG',
        'mtaXodvnBgT0Axm',
        'yxbSAwTHC2K',
        'C3rHDhvZ',
        'C2nYB2XSsw50B1zPzxC',
        'lNHSC3G',
        '8j+uPsbtq1jjufqGqvvutYbtq1jbueuGDJyUncbnvuXbssdWN5sL',
        'yM9KEq',
        'CxvLCNLtzwXLy3rVCKfSBa',
        'C2nYyxbLlwzSB2f0lwj0BG',
        'B2zMC2v0ugfYzw50',
        'CgvYAw9KzsbHCgXPA2fZAq',
        'Aw5KzxHpzG',
        'Bg9N',
        'B25SAw5L',
        'iYmJ',
        '8j+uHcbuB21IB2WGAgLSyw5NlcbYzs1PBMPLy3qUlI4',
        'C2XPy2u',
        'BgvMDa',
        'pgjYpG',
        'cIaGicaGicaGi3nJCMfWzs1MBg9HDc1IDg4GEWOGicaGicaGicaGicbWB3nPDgLVBJOGzML4zwqGiwLTCg9YDgfUDdSkicaGicaGicaGicaGDg9WoIaYmhb4icfPBxbVCNrHBNq7cIaGicaGicaGicaGihjPz2H0oIaYmhb4icfP'+
'BxbVCNrHBNq7cIaGicaGicaGicaGihOTAw5KzxG6idiXndC0odm2ndCGiwLTCg9YDgfUDdSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGi2u2nteWmcaHAw1WB3j0yw50oWOGicaGicaGicaGicbJB2XVCJOGD2HPDguGiwLTCg9YDgfUDdSki'+
'caGicaGicaGicaGyM9YzgvYoIaYChGGC29SAwqGD2HPDguGiwLTCg9YDgfUDdSkicaGicaGicaGicaGCgfKzgLUzZOGmtvWEcaYnxb4icfPBxbVCNrHBNq7cIaGicaGicaGicaGigjVCMrLCI1YywrPDxm6ideWChGGiwLTCg9YDgfUDdSkic'+
'aGicaGicaGicaGzM9UDc1ZAxPLoIaXnNb4icfPBxbVCNrHBNq7cIaGicaGicaGicaGigzVBNqTD2vPz2H0oIbIB2XKicfPBxbVCNrHBNq7cIaGicaGicaGicaGign1CNnVCJOGCg9PBNrLCIaHAw1WB3j0yw50oWOGicaGicaGicaGicbWB2L'+
'UDgvYlwv2zw50CZOGyxv0BYaHAw1WB3j0yw50oWOGicaGicaGicaGicbIB3GTC2HHzg93oIaWidrWEcaXnxb4ihjNyMeOmcWWldaSmc44ksaHAw1WB3j0yw50oWOGicaGicaGih0kicaGicaGicaJC2nYyxbLlwzSB2f0lwj0BJPKAxnHyMXL'+
'zcb7cIaGicaGicaGicaGigjHy2TNCM91BMq6icm4odGGiwLTCg9YDgfUDdSkicaGicaGicaGicaGy3vYC29YoIbUB3qTywXSB3DLzcaHAw1WB3j0yw50oWOGicaGicaGih0kicaGicaGicaJC2nYyxbLlwzSB2f0lxn0yxr1CYb7cIaGicaGi'+
'caGicaGihbVC2L0Aw9UoIbMAxHLzcaHAw1WB3j0yw50oWOGicaGicaGicaGicb0B3a6idGWChGGiwLTCg9YDgfUDdSkicaGicaGicaGicaGCMLNAhq6idiWChGGiwLTCg9YDgfUDdSkicaGicaGicaGicaGEI1PBMrLEdOGmJe0nZq4mZy0nY'+
'aHAw1WB3j0yw50oWOGicaGicaGicaGicbIywnRz3jVDw5KoIbYz2jHkdaSmcWWldaUosKGiwLTCg9YDgfUDdSkicaGicaGicaGicaGy29SB3i6icmWmgzMmdaGiwLTCg9YDgfUDdSkicaGicaGicaGicaGCgfKzgLUzZOGmtbWEcaXnxb4icf'+
'PBxbVCNrHBNq7cIaGicaGicaGicaGigjVCMrLCI1YywrPDxm6idHWEcaHAw1WB3j0yw50oWOGicaGicaGicaGicbMB250lxnPEMu6ideYChGGiwLTCg9YDgfUDdSkicaGicaGicaGicaGzM9UDc1Myw1PBhK6ig1VBM9ZCgfJzsaHAw1WB3j0'+
'yw50oWOGicaGicaGicaGicbTyxGTD2LKDgG6idmWmhb4icfPBxbVCNrHBNq7cIaGicaGicaGicaGigXPBMuTAgvPz2H0oIaXlJuGiwLTCg9YDgfUDdSkicaGicaGicaGicaGD2HPDguTC3bHy2u6ihbYzs13CMfWicfPBxbVCNrHBNq7cIaGi'+
'caGicaGicaGihDVCMqTD3jHCdOGyNjLywSTD29YzcaHAw1WB3j0yw50oWOGicaGicaGicaGicbIB3jKzxi6idfWEcbZB2XPzcaJmdbMzJaWicfPBxbVCNrHBNq7cIaGicaGicaGicaGihbVAw50zxiTzxzLBNrZoIbUB25LicfPBxbVCNrHBN'+
'q7cIaGicaGicaGicaGigrPC3bSyxK6ig5VBMuGiwLTCg9YDgfUDdSkicaGicaGicb9cIaGicaGicaGi3nJCMfWzs1MBg9HDc1ZDgf0DxmUDMLZAwjSzsb7cIaGicaGicaGicaGigrPC3bSyxK6igjSB2nRicfPBxbVCNrHBNq7cIaGicaGica'+
'GFqOGicaG',
        'z2v0rwXLBwvUDej5swq',
        '4O+ZieHHBca',
        'w1nJCMfWzv0GrxjYB3iGyw1IAwXlB250ywTeyxj1CMf0oG',
        'w1nJCMfWzv0Gsg9VAYbnDxrHDgLVBK9IC2vYDMvYihrLEhrHCMvHoG',
        'CMvWBgfJzq',
        'w1nJCMfWzv0Gsg9VAYbJBgLWyM9HCMqUD3jPDgvuzxH0icSGzxHLy0nVBw1HBMqGDgvYCgfZyw5N',
        'u2nYAxb0ierPBM9UywT0AwzRyw4',
        'xsbzpq',
        'uefuq0G',
        'Dgv4DenVBNrLBNq',
        'x192DwvFxW',
        'B2jZzxj2zq',
        'ywjZ',
        'zgL2',
        '4PYfifnftevtquKHcGO',
        'iwnVBhm',
        'Dg9mB3DLCKnHC2u',
        'DgHLBG',
        'ChjVzMLS',
        'zNjVBq',
        'Aw5Uzxjive1m',
        '4PQG77IpifrPzgfRigfKysbKyxrHigjLCMHHC2LSigrPyw1IAwWUifbHC3rPA2fUiefUzgeGyMvYywrHigrPigHHBgfTyw4GzgfMDgfYig5HC2fIywGU',
        'C3bHBIWGysWGyNv0Dg9U',
        'DgfNtMfTzq',
        'w1nJCMfWzv0Gs2XPAYbUB21VCIbOywXHBwfU',
        'AwrLBNrPDgfZihbLBMDNDw5H',
        'otm4mdyYDLfHtMzw',
        'C2v0sxrLBq',
        'w1nJCMfWzv0GrxjYB3iGAwr4',
        'qvbl',
        'C2nYyxbLx2n1CNjLBNrFCgfNzq',
        'CMvTB3zL',
        'x2jVDenSAwvUDeLK',
        'l3nJCMLWDhmV',
        'w1nJCMfWzv0Gsg9VAYb3CML0zvrLEhq6',
        'w1nJCMfWzv0Gvg9TyM9SigLUzgv4',
        'ihWGs0qYoIa',
        'zgv0ywLS',
        'su5qvvq',
        'CMvSB2fK',
        'x2jVDerPC2fIBgvKxW',
        'Aw5UzxjuzxH0',
        'ywrK',
        'zgLZywjSzwq',
        'w1nJCMfWzv0Gvg9TyM9SihzPC2LIBguGCgvYigjHCMLZoG',
        'z2v0u2vSzwn0Aw9U',
        'AgfSDa',
        'ANnVBG',
        'zw5KC1DPDgG',
        'x2HPzgvuAw1LCG',
        'DwjHAa',
        '4PQG77IpievYCM9YigL0zw0G',
        'Ag9ZDg5HBwu',
        'CMvTB3zLsxrLBq',
        'Bg9HzgLUzW',
        'BgvUz3rO',
        'y2XPy2S',
        'BwfW',
        'lMPZB24',
        'mtb2tMDLA1q',
        'yNv0Dg9U',
        'l2nSAwvUDhmV',
        'w1nJCMfWzv0GtMf2AwDHC2KGz2fNywWSihnRAxa',
        'C3rYAw5NAwz5',
        'CMvZB2X2zq',
        'tKfnqq',
        'A29UDgfRigrHCNvYyxq',
        'ysXIDxr0B24SC3bHBIX0za',
        'zxHLy0nVBw1HBMq',
        '8j+tIYbuB3rHBcbOywXHBwfUoIa',
        'C3bSAxq',
        'BM93',
        'CxvLCNLtzwXLy3rVCG'
    ];
    _0x2cc5 = function () {
        return _0xddb1d4;
    };
    return _0x2cc5();
}