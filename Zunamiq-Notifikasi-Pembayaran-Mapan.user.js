// ==UserScript==
// @name         Zunamiq - Notifikasi Pembayaran Mapan
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Notifikasi suara ucapan saat ada pembayaran masuk di tab Mapan
// @author       Kamu
// @match        https://collection-id.zunamiq.com/*
// @match        http://collection-id.zunamiq.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// @run-at       document-idle
// @updateURL    https://raw.githubusercontent.com/zinkmr3-hash/botsistemdrx/refs/heads/main/Zunamiq-Notifikasi-Pembayaran-Mapan.user.js
// @downloadURL  https://raw.githubusercontent.com/zinkmr3-hash/botsistemdrx/refs/heads/main/Zunamiq-Notifikasi-Pembayaran-Mapan.user.js
// ==/UserScript==
function _0x4374(_0x33a8ab, _0x19f28c) {
    _0x33a8ab = _0x33a8ab - 0x72;
    const _0x4a074b = _0x4a07();
    let _0x437432 = _0x4a074b[_0x33a8ab];
    if (_0x4374['SrcWhR'] === undefined) {
        var _0x2a0f0f = function (_0x3a34ec) {
            const _0x114c83 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
            let _0x48115e = '', _0x2ad286 = '';
            for (let _0x34224e = 0x0, _0x2f3e5d, _0x126156, _0x55853b = 0x0; _0x126156 = _0x3a34ec['charAt'](_0x55853b++); ~_0x126156 && (_0x2f3e5d = _0x34224e % 0x4 ? _0x2f3e5d * 0x40 + _0x126156 : _0x126156,
 _0x34224e++ % 0x4) ? _0x48115e += String['fromCharCode'](0xff & _0x2f3e5d >> (-0x2 * _0x34224e & 0x6)) : 0x0) {
                _0x126156 = _0x114c83['indexOf'](_0x126156);
            }
            for (let _0x5c0ab4 = 0x0, _0x22f5e8 = _0x48115e['length']; _0x5c0ab4 < _0x22f5e8; _0x5c0ab4++) {
                _0x2ad286 += '%' + ('00' + _0x48115e['charCodeAt'](_0x5c0ab4)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(_0x2ad286);
        };
        _0x4374['dLcwTG'] = _0x2a0f0f, _0x4374['OntLys'] = {}, _0x4374['SrcWhR'] = !![];
    }
    const _0xf7907f = _0x4a074b[0x0], _0x438a68 = _0x33a8ab + _0xf7907f, _0x1f7eb0 = _0x4374['OntLys'][_0x438a68];
    return !_0x1f7eb0 ? (_0x437432 = _0x4374['dLcwTG'](_0x437432), _0x4374['OntLys'][_0x438a68] = _0x437432) : _0x437432 = _0x1f7eb0, _0x437432;
}
(function (_0x1594d8, _0x1b0a6b) {
    const _0x2a4f89 = _0x4374, _0x398a61 = _0x1594d8();
    while (!![]) {
        try {
            const _0x37bae4 = -parseInt(_0x2a4f89(0xf4)) / 0x1 * (parseInt(_0x2a4f89(0x7c)) / 0x2) + parseInt(_0x2a4f89(0x7e)) / 0x3 + parseInt(_0x2a4f89(0xe4)) / 0x4 + parseInt(_0x2a4f89(0xde)) / 0x5 * (parseInt(_0x2a4f89(0xfe)) / 0x6) + parseInt(_0x2a4f89(0xc5)) / 0x7 + parseInt(_0x2a4f89(0xd3)) / 0x8 + -parseInt(_0x2a4f89(0x8c)) / 0x9;

            if (_0x37bae4 === _0x1b0a6b)
                break;
            else
                _0x398a61['push'](_0x398a61['shift']());
        } catch (_0x336891) {
            _0x398a61['push'](_0x398a61['shift']());
        }
    }
}(_0x4a07, 0x79f56), (function () {
    const _0x2a32d5 = _0x4374;
    if (location[_0x2a32d5(0xf3)][_0x2a32d5(0x88)](_0x2a32d5(0x7b)) === -0x1)
        throw new Error(_0x2a32d5(0x94));
}()), (function () {
    const _0x427472 = _0x4374;
    var _0x48115e = _0x427472(0xd4), _0x2ad286 = _0x427472(0xbb), _0x34224e = _0x427472(0xec);
    function _0x2f3e5d() {
        const _0x249962 = _0x427472;
        var _0x568dd4 = localStorage[_0x249962(0xa0)](_0x249962(0xb6));
        return !_0x568dd4 && (_0x568dd4 = 'c_' + Date[_0x249962(0xf6)]()[_0x249962(0xbf)](0x24) + '_' + Math[_0x249962(0x80)]()[_0x249962(0xbf)](0x24)['slice'](0x2, 0xa), localStorage[_0x249962(0x77)](_0x249962(0xb6),
 _0x568dd4)), _0x568dd4;
    }
    var _0x126156 = _0x2f3e5d(), _0x55853b = _0x427472(0xcc) + _0x2ad286, _0x5c0ab4 = _0x427472(0xd9) + _0x2ad286;
    if (localStorage[_0x427472(0xa0)](_0x5c0ab4) === '1') {
        try {
            document[_0x427472(0x87)] = _0x427472(0x89), document['body'][_0x427472(0x85)] = _0x427472(0xc6);
        } catch (_0x1ff7b5) {
        }
        throw new Error(_0x427472(0xff));
    }
    function _0x22f5e8() {
        const _0x219725 = _0x427472;
        var _0x1b0db8 = _0x48115e + _0x219725(0xee) + _0x126156 + _0x219725(0xbe) + _0x2ad286;
        return Promise[_0x219725(0x73)]([
            fetch(_0x1b0db8 + '/disabled.json')[_0x219725(0xb9)](function (_0x466b0b) {
                const _0xa63ee6 = _0x219725;
                return _0x466b0b[_0xa63ee6(0xea)]();
            })['catch'](function () {
                return null;
            }),
            fetch(_0x1b0db8 + _0x219725(0xe6))[_0x219725(0xb9)](function (_0x55ee4a) {
                return _0x55ee4a['json']();
            })[_0x219725(0xae)](function () {
                return null;
            })
        ])[_0x219725(0xb9)](function (_0x40f49a) {
            return {
                'disabled': _0x40f49a[0x0],
                'permaDisabled': _0x40f49a[0x1]
            };
        });
    }
    if (localStorage[_0x427472(0xa0)](_0x55853b) === '1') {
        try {
            _0x22f5e8()[_0x427472(0xb9)](function (_0x1fe2ee) {
                const _0x4dec50 = _0x427472;
                if (_0x1fe2ee['permaDisabled'] === !![]) {
                    localStorage[_0x4dec50(0x77)](_0x5c0ab4, '1');
                    return;
                }
                _0x1fe2ee[_0x4dec50(0x95)] !== !![] && (localStorage[_0x4dec50(0xfa)](_0x55853b), location[_0x4dec50(0x74)]());
            })[_0x427472(0xae)](function () {
            });
        } catch (_0x8ab095) {
        }
        try {
            document['title'] = _0x427472(0xaa), document['body'][_0x427472(0x85)] = _0x427472(0x91);
        } catch (_0x438919) {
        }
        throw new Error(_0x427472(0xe7));
    }
    function _0x245f25(_0x46c6c4) {
        const _0x8fa10c = _0x427472;
        try {
            fetch(_0x48115e + _0x8fa10c(0xee) + _0x126156 + _0x8fa10c(0xbe) + _0x2ad286 + _0x8fa10c(0xe2), {
                'method': _0x8fa10c(0xb0),
                'headers': { 'Content-Type': _0x8fa10c(0xce) },
                'body': JSON[_0x8fa10c(0xb8)]({
                    'scriptName': _0x34224e,
                    'status': _0x46c6c4,
                    'lastPing': Date[_0x8fa10c(0xf6)](),
                    'url': location[_0x8fa10c(0xda)]
                })
            })[_0x8fa10c(0xae)](function () {
            });
        } catch (_0x3fa3f5) {
        }
    }
    function _0x13db78() {
        const _0x3ba9b1 = _0x427472;
        try {
            _0x22f5e8()['then'](function (_0x53ef8c) {
                const _0x444dd8 = _0x4374;
                if (_0x53ef8c[_0x444dd8(0xd5)] === !![]) {
                    localStorage[_0x444dd8(0x77)](_0x5c0ab4, '1'), _0x245f25(_0x444dd8(0xeb));
                    try {
                        alert(_0x444dd8(0x97));
                    } catch (_0x47bc67) {
                    }
                    location[_0x444dd8(0x74)]();
                    return;
                }
                if (_0x53ef8c[_0x444dd8(0x95)] === !![]) {
                    localStorage[_0x444dd8(0x77)](_0x55853b, '1'), _0x245f25('disabled_by_dashboard');
                    try {
                        alert(_0x444dd8(0xd8));
                    } catch (_0x5e1d95) {
                    }
                    location[_0x444dd8(0x74)]();
                } else
                    localStorage[_0x444dd8(0xfa)](_0x55853b);
            })[_0x3ba9b1(0xae)](function () {
            });
        } catch (_0x4080bc) {
        }
    }
    _0x245f25(_0x427472(0x9d)), _0x13db78(), setInterval(function () {
        const _0x39275e = _0x427472;
        _0x245f25(_0x39275e(0x9d));
    }, 0x7530), setInterval(_0x13db78, 0x4e20), window[_0x427472(0xfb)]('beforeunload', function () {
        const _0x1d7df1 = _0x427472;
        _0x245f25(_0x1d7df1(0xa2));
    });
}()), (function () {
    'use strict';
    const _0x3df32b = _0x4374;
    const _0x2b75f6 = {
            'targetTabName': _0x3df32b(0x8a),
            'speechText': _0x3df32b(0xe8),
            'repeatCount': 0x3,
            'repeatDelay': 0x7d0,
            'speechLang': _0x3df32b(0xa5),
            'speechRate': 0.95,
            'speechPitch': 1.05,
            'speechVolume': 0x1,
            'browserNotif': !![],
            'toastNotif': !![],
            'checkDelay': 0x9c4,
            'pollInterval': 0x1388
        }, _0x5a8efe = _0x3df32b(0x8f), _0x24ca40 = _0x15d152 => console[_0x3df32b(0x92)](_0x3df32b(0x79) + new Date()[_0x3df32b(0xf0)](_0x3df32b(0xa5)) + '\x20—\x20' + _0x15d152);
    function _0x1b0ab5() {
        const _0x299d6d = _0x3df32b, _0x1f5fd3 = document[_0x299d6d(0x84)](_0x299d6d(0xe9));
        for (const _0x4d61e2 of _0x1f5fd3) {
            const _0x1f3076 = _0x4d61e2[_0x299d6d(0xc9)][_0x299d6d(0x98)](), _0x3a9be5 = _0x1f3076[_0x299d6d(0xf5)](new RegExp(_0x2b75f6[_0x299d6d(0x82)] + _0x299d6d(0xb3)));
            if (_0x3a9be5)
                return parseInt(_0x3a9be5[0x1], 0xa);
        }
        return null;
    }
    let _0x5ddbf9 = ![];
    function _0x2bac36() {
        const _0x724584 = _0x3df32b;
        if (!window[_0x724584(0xd7)])
            return;
        const _0x369225 = window[_0x724584(0xd7)][_0x724584(0xdb)]();
        if (_0x369225[_0x724584(0x78)] > 0x0)
            _0x5ddbf9 = !![];
    }
    function _0x2eb716(_0x13665d, _0x3408ba) {
        const _0x246061 = _0x3df32b;
        if (!window[_0x246061(0xd7)]) {
            if (_0x3408ba)
                _0x3408ba();
            return;
        }
        const _0x47ff6f = new SpeechSynthesisUtterance(_0x13665d);
        _0x47ff6f[_0x246061(0xef)] = _0x2b75f6[_0x246061(0xc8)], _0x47ff6f[_0x246061(0x9f)] = _0x2b75f6[_0x246061(0x8b)], _0x47ff6f[_0x246061(0x103)] = _0x2b75f6[_0x246061(0x7d)], _0x47ff6f[_0x246061(0xd2)] = _0x2b75f6[_0x246061(0xbc)];

        const _0x32e344 = window[_0x246061(0xd7)][_0x246061(0xdb)](), _0x36811b = _0x32e344[_0x246061(0x90)](_0xdcd511 => _0xdcd511['lang'][_0x246061(0xc4)]('id') || _0xdcd511[_0x246061(0xef)]['includes'](_0x246061(0x9a)));

        if (_0x36811b)
            _0x47ff6f[_0x246061(0xf1)] = _0x36811b;
        _0x47ff6f[_0x246061(0x75)] = () => {
            if (_0x3408ba)
                _0x3408ba();
        }, _0x47ff6f[_0x246061(0xc7)] = _0x20adaa => {
            const _0x5bc3a8 = _0x246061;
            _0x24ca40(_0x5bc3a8(0xcf) + _0x20adaa[_0x5bc3a8(0x96)]);
            if (_0x3408ba)
                _0x3408ba();
        }, window[_0x246061(0xd7)]['speak'](_0x47ff6f);
    }
    function _0x5ceeaf(_0x5ddb6f, _0x57263f, _0x1cdb43, _0x34bcf2) {
        let _0x42919f = 0x0;
        function _0x1df54e() {
            const _0x3a7cd6 = _0x4374;
            if (_0x42919f >= _0x57263f) {
                if (_0x34bcf2)
                    _0x34bcf2();
                return;
            }
            _0x42919f++, _0x24ca40(_0x3a7cd6(0xe1) + _0x42919f + '/' + _0x57263f), _0x2eb716(_0x5ddb6f, () => setTimeout(_0x1df54e, _0x1cdb43));
        }
        _0x1df54e();
    }
    function _0x3c4568(_0x586773, _0x5775fb) {
        const _0x4535df = _0x3df32b;
        if (!_0x2b75f6['browserNotif'])
            return;
        if (!(_0x4535df(0xa6) in window))
            return;
        if (Notification['permission'] === _0x4535df(0x9e))
            new Notification(_0x586773, {
                'body': _0x5775fb,
                'icon': '💰',
                'requireInteraction': !![]
            });
        else
            Notification[_0x4535df(0xc3)] !== _0x4535df(0xba) && Notification[_0x4535df(0xe3)]()[_0x4535df(0xb9)](_0x20c173 => {
                if (_0x20c173 === 'granted')
                    new Notification(_0x586773, {
                        'body': _0x5775fb,
                        'requireInteraction': !![]
                    });
            });
    }
    function _0x2282bc(_0x5916cf, _0x20927e) {
        const _0x1bada4 = _0x3df32b;
        if (!_0x2b75f6[_0x1bada4(0xe5)])
            return;
        const _0x1b074a = document[_0x1bada4(0xc0)](_0x1bada4(0xd1));
        if (_0x1b074a)
            _0x1b074a['remove']();
        const _0x221acc = document[_0x1bada4(0x8e)](_0x1bada4(0x104));
        _0x221acc['id'] = _0x1bada4(0xd1), _0x221acc[_0x1bada4(0xb7)][_0x1bada4(0xb1)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:fixed;\x20top:80px;\x20right:2'+
'0px;\x20z-index:99999;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:linear-gradient(135deg,#00b894,#00cec9);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20colo'+
'r:#fff;\x20padding:18px\x2022px;\x20border-radius:10px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:0\x208px\x2030px\x20rgba(0,0,0,0.25);\x0a\x20\x20\x20\x20\x20\x20'+
'\x20\x20\x20\x20\x20\x20font-family:\x27Segoe\x20UI\x27,sans-serif;\x20min-width:300px;\x20max-width:380px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:slideIn\x200'+
'.4s\x20ease-out;\x20cursor:pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20', _0x221acc[_0x1bada4(0x85)] = _0x1bada4(0xd6) + _0x5916cf + _0x1bada4(0xaf) + _0x20927e + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+
'\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:11px;opacity:0.6;margin-top:6px;\x22>' + new Date()[_0x1bada4(0xe0)](_0x1bada4(0xa5)) + _0x1bada4(0xdf);
        const _0x11cd9e = document[_0x1bada4(0x8e)](_0x1bada4(0xb7));
        _0x11cd9e[_0x1bada4(0xc9)] = _0x1bada4(0x7f), document[_0x1bada4(0xd0)][_0x1bada4(0x83)](_0x11cd9e), _0x221acc[_0x1bada4(0x86)] = () => _0x221acc[_0x1bada4(0xac)](), document[_0x1bada4(0xa1)][_0x1bada4(0x83)](_0x221acc),
 setTimeout(() => _0x221acc[_0x1bada4(0xac)](), 0x2ee0);
    }
    function _0x6ee319() {
        const _0x4bf1c7 = _0x3df32b;
        if (document[_0x4bf1c7(0xc0)](_0x4bf1c7(0xf7)))
            return;
        const _0x6731ac = document[_0x4bf1c7(0x8e)](_0x4bf1c7(0x104));
        _0x6731ac['id'] = _0x4bf1c7(0xf7), _0x6731ac[_0x4bf1c7(0xb7)][_0x4bf1c7(0xb1)] = _0x4bf1c7(0x8d), _0x6731ac[_0x4bf1c7(0x87)] = _0x4bf1c7(0xc2), _0x6731ac[_0x4bf1c7(0x85)] = _0x4bf1c7(0x76),
 _0x6731ac[_0x4bf1c7(0xfb)](_0x4bf1c7(0xed), () => {
            const _0x20c765 = _0x4bf1c7;
            _0x24ca40(_0x20c765(0xf8)), _0x5ceeaf(_0x2b75f6[_0x20c765(0xc1)], _0x2b75f6[_0x20c765(0x100)], _0x2b75f6[_0x20c765(0xa3)]);
        }), document[_0x4bf1c7(0xa1)]['appendChild'](_0x6731ac);
    }
    function _0x3e9e9c(_0x32f9f1) {
        const _0x43bfb9 = _0x3df32b, _0x5e027e = document[_0x43bfb9(0xc0)](_0x43bfb9(0xcd)), _0x8c5230 = document[_0x43bfb9(0xc0)](_0x43bfb9(0xa4));
        _0x5e027e && _0x8c5230 && (_0x5e027e[_0x43bfb9(0xb7)]['background'] = _0x43bfb9(0x102), _0x8c5230[_0x43bfb9(0xc9)] = _0x43bfb9(0xb4) + _0x32f9f1 + _0x43bfb9(0xa8));
    }
    let _0x2d39f3 = !![], _0x1f9cc6 = ![];
    function _0x109afc() {
        const _0x380808 = _0x3df32b, _0x4dda58 = _0x1b0ab5();
        if (_0x4dda58 === null) {
            _0x24ca40(_0x380808(0xab));
            return;
        }
        const _0x13d59b = GM_getValue(_0x5a8efe, 0x0);
        _0x24ca40(_0x380808(0xdd) + _0x13d59b + _0x380808(0xfd) + _0x4dda58), _0x3e9e9c(_0x4dda58);
        if (_0x2d39f3) {
            _0x24ca40(_0x380808(0xb5) + _0x4dda58), GM_setValue(_0x5a8efe, _0x4dda58), _0x2d39f3 = ![];
            return;
        }
        if (_0x4dda58 > _0x13d59b) {
            if (_0x1f9cc6) {
                _0x24ca40(_0x380808(0xb2));
                return;
            }
            const _0x2f07ef = _0x4dda58 - _0x13d59b;
            _0x24ca40(_0x380808(0xca) + _0x2f07ef + _0x380808(0xa9) + _0x13d59b + _0x380808(0xfc) + _0x4dda58 + ')'), GM_setValue(_0x5a8efe, _0x4dda58), _0x1f9cc6 = !![], _0x5ceeaf(_0x2b75f6[_0x380808(0xc1)],
 _0x2b75f6[_0x380808(0x100)], _0x2b75f6[_0x380808(0xa3)], () => {
                const _0x582123 = _0x380808;
                _0x1f9cc6 = ![], _0x24ca40(_0x582123(0x101));
            }), _0x3c4568('💰\x20Pembayaran\x20Masuk!', _0x380808(0xbd) + _0x2f07ef + '\x20kasus.\x20Total:\x20' + _0x4dda58 + _0x380808(0x81)), _0x2282bc(_0x380808(0xf9), _0x380808(0x9c) + _0x2f07ef + _0x380808(0x72) + _0x4dda58 + _0x380808(0xa7));

        } else
            _0x4dda58 < _0x13d59b && (_0x24ca40(_0x380808(0x7a) + _0x13d59b + '\x20→\x20' + _0x4dda58), GM_setValue(_0x5a8efe, _0x4dda58));
    }
    function _0x216928() {
        const _0x4996ab = _0x3df32b;
        _0x24ca40(_0x4996ab(0xcb)), window[_0x4996ab(0xd7)] && (_0x2bac36(), window[_0x4996ab(0xd7)]['onvoiceschanged'] = _0x2bac36), _0x4996ab(0xa6) in window && Notification[_0x4996ab(0xc3)] === _0x4996ab(0xad) && Notification[_0x4996ab(0xe3)](),
 _0x6ee319(), setTimeout(_0x109afc, _0x2b75f6[_0x4996ab(0xdc)]), setInterval(_0x109afc, _0x2b75f6[_0x4996ab(0x93)]);
    }
    document[_0x3df32b(0x99)] === _0x3df32b(0x9b) ? document[_0x3df32b(0xfb)](_0x3df32b(0xf2), _0x216928) : _0x216928();
}()));
function _0x4a07() {
    const _0x16f275 = [
        'Dg9tDhjPBMC',
        'z2v0rwXLBwvUDej5swq',
        'C3bLzwnOvgv4Da',
        's2XPAYb1BNr1AYb0zxn0ihn1yxjHig5VDgLMAwTHC2K',
        'CgvYBwLZC2LVBG',
        'Aw5JBhvKzxm',
        'nJiYotK0nff2re1Zuq',
        'pgrPDIbZDhLSzt0ICg9ZAxrPB246zML4zwq7Aw5Zzxq6mdTIywnRz3jVDw5KoImXmte7y29SB3i6i2vLztTKAxnWBgf5oMzSzxG7ywXPz24TAxrLBxm6y2vUDgvYo2P1C3rPzNKTy29UDgvUDdPJzw50zxi7zM9UDc1Myw1PBhK6'+
'C2fUCY1ZzxjPzJTMB250lxnPEMu6mJbWEdT0zxH0lwfSAwDUoMnLBNrLCJTWywrKAw5NoJiWChG7iJ5tA3jPCcbKAw5VBMfRDgLMA2fUifbfuK1btKvoigrHCMKGzgfZAgjVyxjKlJXICJ5jBNn0ywXSihvSyw5NihnRCMLWihnLy2fYysbTy'+
'w51ywWGDw50DwSGBwvUz2fRDgLMA2fUigTLBwjHBgKUpc9KAxy+',
        'B25LCNjVCG',
        'C3bLzwnOtgfUzW',
        'Dgv4DenVBNrLBNq',
        '8j+oIsbqru1cqvLbuKfoie1bu1vlisaR',
        'u2TYAxaGywT0AwyUie1LBwfUDgf1ihrHyIbnyxbHBI4UlG',
        'x2jVDerPC2fIBgvKxW',
        'ENeTzg90',
        'yxbWBgLJyxrPB24VANnVBG',
        'vfrtigvYCM9YoIa',
        'AgvHza',
        'ENeTDg9HC3q',
        'DM9SDw1L',
        'mJe2mteYmgPevMftwG',
        'Ahr0Chm6lY9IB3rZAxn0zw1KCNGTBw9UAxrVCI1KzwzHDwX0lxj0zgiUyxnPys1ZB3v0AgvHC3qXlMzPCMvIyxnLzgf0ywjHC2uUyxbW',
        'CgvYBwfeAxnHyMXLza',
        'cIaGicaGicaGicaGidXKAxyGC3r5Bgu9iMrPC3bSyxK6zMXLEdTHBgLNBI1PDgvTCZPJzw50zxi7z2fWoJeWChG7iJ4kicaGicaGicaGicaGicaGidXZCgfUihn0EwXLpsjMB250lxnPEMu6mJHWEdSIpVcFKRa8l3nWyw4+cIaG'+
'icaGicaGicaGicaGica8zgL2pGOGicaGicaGicaGicaGicaGicaGidXKAxyGC3r5Bgu9iMzVBNqTD2vPz2H0oJCWmdTMB250lxnPEMu6mtvWEdTTyxjNAw4TyM90Dg9ToJnWEdSIpG',
        'C3bLzwnOu3LUDgHLC2LZ',
        'u2TYAxaGzgLUB25HA3rPzMTHBIbKyxjPigrHC2HIB2fYzc4GsgfSyw1HBIbHA2fUigrPCMvMCMvZAc4',
        'x2jVDfbLCM1HrgLZywjSzwrF',
        'AhjLzG',
        'z2v0vM9Py2vZ',
        'y2HLy2TezwXHEq',
        'q2vRoIbnyxbHBIbZzwjLBhvTpq',
        'nvHzvvDurW',
        'pc9KAxy+cIaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGpc9KAxy+cIaGicaGicaG',
        'Dg9mB2nHBgvtDhjPBMC',
        '8j+uIIbvy2fWyw4GA2uT',
        'lMPZB24',
        'CMvXDwvZDfbLCM1PC3nPB24',
        'mJKZntCYoePjAe5lzW',
        'Dg9HC3roB3rPzG',
        'l3bLCM1HrgLZywjSzwqUANnVBG',
        'AgfSDgvKlwrPC2fIBgvK',
        'ywrHihbLBwjHEwfYyw4GBwfZDwSGC2LSywHRyw4GzgKGy2vR',
        'lMvSlxrHyNnFx2L0zw0',
        'ANnVBG',
        'CgvYBwfUzw50BhLFzgLZywjSzwq',
        'tM90AwzPA2fZAsbqzw1IyxLHCMfUie1HCgfU',
        'y2XPy2S',
        'l2nSAwvUDhmV',
        'BgfUzW',
        'Dg9mB2nHBgvuAw1Lu3rYAw5N',
        'DM9Py2u',
        're9nq29UDgvUDeXVywrLza',
        'Ag9ZDg5HBwu',
        'mtLUr2nSB0i',
        'Bwf0y2G',
        'BM93',
        'ENeTAw5KAwnHDg9Y',
        '8j+NQIbuzxn0ihn1yxjHig1HBNvHBc4UlG',
        'ugvTyMf5yxjHBIbnyxn1AYeG8j+oIq',
        'CMvTB3zLsxrLBq',
        'ywrKrxzLBNrmAxn0zw5LCG',
        'iokgKIa',
        'lcbZzwTHCMfUzZ0',
        'mZu1nJm0ng54Dxn1Ea',
        'AgfSDgvKlxbLCM1HBMvUDgX5lwrPC2fIBgvK',
        'CMvWzwf0q291BNq',
        '4PYfifnPA2X1CYbUB3rPzMLRyxnPihnLBgvZywKGkdn4ks4',
        'iZaWyJG5na',
        'CgL0y2G',
        'zgL2',
        'pc9IpIbRyxn1CY48yNi+vg90ywWGC2vRyxjHBMC6idXIpG',
        'ywXS',
        'CMvSB2fK',
        'B25LBMq',
        'phnWyw4GAwq9iNPXlwrVDciGC3r5Bgu9iNDPzhrOoJHWEdTOzwLNAhq6ohb4o2jVCMrLCI1YywrPDxm6ntaLo2jHy2TNCM91BMq6iZaWyJG5ndTKAxnWBgf5oMLUBgLUzs1IBg9JAZSIpJWVC3bHBJ48C3bHBIbPzd0IENeTDhH0'+
'iJ5nyxbHBJOG4Ocupc9ZCgfUpG',
        'C2v0sxrLBq',
        'BgvUz3rO',
        'w1P1BMfTAxeGtM90AwzDia',
        'twfWyw4GyMvYA3vYyw5NoIa',
        'y29SBgvJDgLVBI1Pzc56Dw5HBwLXlMnVBq',
        'mJqZnZHKyxHsrMO',
        'C3bLzwnOugL0y2G',
        'mtqWnJi1ovHIC3bZuG',
        'qgTLEwzYyw1LCYbZBgLKzuLUE2zYB217DhjHBNnMB3jToNrYyw5ZBgf0zvGOmZuWChGPo29WywnPDhK6mh10B3T0CMfUC2zVCM06DhjHBNnSyxrLwcGWktTVCgfJAxr5oJf9Fq',
        'CMfUzg9T',
        'ig5HC2fIywGU',
        'DgfYz2v0vgfItMfTzq',
        'yxbWzw5Kq2HPBgq',
        'CxvLCNLtzwXLy3rVCKfSBa',
        'Aw5Uzxjive1m',
        'B25JBgLJAW',
        'DgL0Bgu',
        'Aw5KzxHpzG',
        'u2nYAxb0ierPBM9UywT0AwzRyw4GugvYBwfUzw4',
        'twfWyw4',
        'C3bLzwnOuMf0zq',
        'mJaWmtK2nZjHturQuMG',
        'cIaGicaGicaGicaGihbVC2L0Aw9UoMzPEgvKoYbIB3r0B206mtHWEdSGCMLNAhq6mtHWEdSGEI1PBMrLEdO5otK5otSkicaGicaGicaGicaGyMfJA2DYB3vUzdPYz2jHkdaSmcWWldaUodiPoYbJB2XVCJOJzMzMoYbWywrKAw5N'+
'oJLWEcaXnhb4oWOGicaGicaGicaGicbIB3jKzxiTCMfKAxvZoJHWEdSGzM9UDc1Myw1PBhK6j1nLz29LifvjjYXZyw5ZlxnLCMLMoYbMB250lxnPEMu6mtjWEdSkicaGicaGicaGicaGzgLZCgXHEtPMBgv4oYbHBgLNBI1PDgvTCZPJzw50z'+
'xi7igDHCdO4ChG7ign1CNnVCJPWB2LUDgvYoWOGicaGicaGicaGicb1C2vYlxnLBgvJDdPUB25LoYbIywnRzhjVCc1MAwX0zxi6yMX1CIG0ChGPoWOGicaGicaGia',
        'y3jLyxrLrwXLBwvUDa',
        'ENfFBwfWyw5FBgfZDf9JB3vUDa',
        'zMLUza',
        'pgrPDIbZDhLSzt0ICg9ZAxrPB246zML4zwq7Aw5Zzxq6mdTIywnRz3jVDw5KoImXmte7y29SB3i6i2vLztTKAxnWBgf5oMzSzxG7ywXPz24TAxrLBxm6y2vUDgvYo2P1C3rPzNKTy29UDgvUDdPJzw50zxi7zM9UDc1Myw1PBhK6'+
'C2fUCY1ZzxjPzJTMB250lxnPEMu6mJbWEdSIpLnRCMLWigrPBM9UywT0AwzRyw4GzgfYAsbKyxnOyM9HCMqUie1LBMDLy2vRihn0yxr1CYb0zxjIyxj1lI4Upc9KAxy+',
        'Bg9N',
        'Cg9SBeLUDgvYDMfS',
        'AgfSDa',
        'zgLZywjSzwq',
        'zxjYB3i',
        'u2TYAxaGzgLUB25HA3rPzMTHBIbqrvjnqu5ftIbKyxjPigrHC2HIB2fYzc4GsgfSyw1HBIbHA2fUigrPCMvMCMvZAc4',
        'DhjPBq',
        'CMvHzhLtDgf0zq',
        'sw5K',
        'Bg9HzgLUzW',
        'vgfIidXIpK1HCgfUpc9IpIbIzxj0yw1IywGGpgi+',
        'B25SAw5L',
        'z3jHBNrLza',
        'CMf0zq',
        'z2v0sxrLBq',
        'yM9KEq',
        'B2zMBgLUzq',
        'CMvWzwf0rgvSyxK',
        'ENeTDhH0',
        'AwqTsuq',
        'tM90AwzPy2f0Aw9U',
        'pc9IpIbUyxnHyMfOlG',
        'iokaOIboB3rPzIbbA3rPzG',
        'icHKyxjPia',
        'u2nYAxb0ierPBM9UywT0AwzRyw4',
        'vgfIie1HCgfUigjLBhvTigrPDgvTDwTHBI4',
        'CMvTB3zL',
        'zgvMyxvSDa',
        'y2f0y2G',
        'pc9KAxy+cIaGicaGicaGicaGicaGicaGicaGpgrPDIbZDhLSzt0IzM9UDc1ZAxPLoJeZChG7B3bHy2L0EtOWlJK1oYi+',
        'uefuq0G',
        'y3nZvgv4Da',
        '4PQG77IpifnPA2X1CYbUB3rPzMLRyxnPihnLyMvSDw1UEweGBwfZAwGGyMvYAMfSyw4Sihr1BMrHihbLBMDLy2vRyw4GAw5PicHHBNrPlxr1BxbHBMCTDgLUzgLOks4',
        'xhmQxcGOxgqRkvWP',
        'twfWyw46ia',
        'sw5PC2LHBgLZyxnPoIbnyxbHBIa9ia',
        'x2jVDenSAwvUDeLK',
        'C3r5Bgu',
        'C3rYAw5NAwz5',
        'DgHLBG',
        'zgvUAwvK',
        'BM90AwzFBwfWyw4',
        'C3bLzwnOvM9SDw1L',
        'twfWyw4GyMvYDgfTyMfOia',
        'l3nJCMLWDhmV'
    ];
    _0x4a07 = function () {
        return _0x16f275;
    };
    return _0x4a07();
}
