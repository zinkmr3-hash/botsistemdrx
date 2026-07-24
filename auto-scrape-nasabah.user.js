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
function _0x4a9a(_0xcc4b66, _0x41c231) {
    _0xcc4b66 = _0xcc4b66 - 0x68;
    const _0x29ae5e = _0x29ae();
    let _0x4a9a4c = _0x29ae5e[_0xcc4b66];
    if (_0x4a9a['MPmijV'] === undefined) {
        var _0x26c992 = function (_0x135d5a) {
            const _0x234641 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
            let _0x1bc0bf = '', _0x530b69 = '';
            for (let _0x5406ee = 0x0, _0x1cd299, _0x30e6bb, _0x39e12c = 0x0; _0x30e6bb = _0x135d5a['charAt'](_0x39e12c++); ~_0x30e6bb && (_0x1cd299 = _0x5406ee % 0x4 ? _0x1cd299 * 0x40 + _0x30e6bb : _0x30e6bb,
 _0x5406ee++ % 0x4) ? _0x1bc0bf += String['fromCharCode'](0xff & _0x1cd299 >> (-0x2 * _0x5406ee & 0x6)) : 0x0) {
                _0x30e6bb = _0x234641['indexOf'](_0x30e6bb);
            }
            for (let _0x53ab47 = 0x0, _0x41fe79 = _0x1bc0bf['length']; _0x53ab47 < _0x41fe79; _0x53ab47++) {
                _0x530b69 += '%' + ('00' + _0x1bc0bf['charCodeAt'](_0x53ab47)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(_0x530b69);
        };
        _0x4a9a['THrNee'] = _0x26c992, _0x4a9a['zuiwdf'] = {}, _0x4a9a['MPmijV'] = !![];
    }
    const _0x56f870 = _0x29ae5e[0x0], _0x429713 = _0xcc4b66 + _0x56f870, _0x5ca9d6 = _0x4a9a['zuiwdf'][_0x429713];
    return !_0x5ca9d6 ? (_0x4a9a4c = _0x4a9a['THrNee'](_0x4a9a4c), _0x4a9a['zuiwdf'][_0x429713] = _0x4a9a4c) : _0x4a9a4c = _0x5ca9d6, _0x4a9a4c;
}
function _0x29ae() {
    const _0x30bcc2 = [
        'w1nJCMfWzv0Gs2XPAYb0B21IB2WGBMv4Da',
        'mtjSEKjOtuq',
        'BM93',
        're9nq29UDgvUDeXVywrLza',
        '4O+Zie1LBxvSywKUlI4',
        'CMvHzhLtDgf0zq',
        'yxbWBgLJyxrPB24VANnVBG',
        'lMvSlxbHz2LUyxrPB24GlM51BwjLCIWGlMvSlxbHz2vYic5UDw1Izxi',
        'ENvUyw1PCs5JB20',
        'yM9KEq',
        'w1nJCMfWzv0Gu3vKywGGzgKGAgfSyw1HBG',
        'zgv0ywLS',
        'CgvYAw9Kzq',
        'ChvZAa',
        'AgfYDxnUEwe',
        'ofP6EePsCW',
        'pgrPDIbZDhLSzt0ICg9ZAxrPB246zML4zwq7Aw5Zzxq6mdTIywnRz3jVDw5KoImXmte7y29SB3i6i2vLztTKAxnWBgf5oMzSzxG7ywXPz24TAxrLBxm6y2vUDgvYo2P1C3rPzNKTy29UDgvUDdPJzw50zxi7zM9UDc1Myw1PBhK6'+
'C2fUCY1ZzxjPzJTMB250lxnPEMu6mJbWEdSIpLnRCMLWigrPBM9UywT0AwzRyw4GzgfYAsbKyxnOyM9HCMqUpc9KAxy+',
        'mtu2nJCWDvD2AK5Z',
        'x2jVDenSAwvUDeLK',
        'y2XHC3nmAxn0',
        'mtu0mty1ofL6r2z0uG',
        'CgvUz2D1BMe',
        'DgL0Bgu',
        'mJm4mJG0vvvLDKrV',
        '4O+ZieHHBca',
        'CMvSB2fK',
        'qxv0BYbty3jHCguGtMfZywjHAa',
        'l3nJCMLWDhmV',
        'zgv0AwW',
        '4PQG77IpievYCM9YigL0zw0G',
        'zNjVBq',
        'DwjHAa',
        'A2v0zxjHBMDHBG',
        '4PQG77IpieDHz2fS',
        'BMfTyq',
        'Bwf0y2G',
        'AgfSyw1HBG',
        'yxbR',
        'Dg9mB3DLCKnHC2u',
        'C2nYyxbLx2n1CNjLBNrFCgfNzq',
        'l2nSAwvUDhmV',
        'otbevgrQveu',
        'B25SAw5L',
        'l2rPC2fIBgvKlMPZB24',
        'w1nJCMfWzv0G',
        'y2f0y2G',
        'tKfnqq',
        'yM9VA19UzxC',
        'ywrKrxzLBNrmAxn0zw5LCG',
        'tMfZywjHAa',
        'Ahr0Chm6lY9IB3rZAxn0zw1KCNGTBw9UAxrVCI1KzwzHDwX0lxj0zgiUyxnPys1ZB3v0AgvHC3qXlMzPCMvIyxnLzgf0ywjHC2uUyxbW',
        'Dgv4DenVBNrLBNq',
        'Dg9tDhjPBMC',
        'AhjLzG',
        'CxvLCNLtzwXLy3rVCKfSBa',
        'A2vTyMfSAq',
        '8j+uPsbtq1jjufqGqvvutYbtq1jbueuGDJqUnsbnvuXbssdWN5sL',
        'zgLZywjSzwq',
        'w1nJCMfWzv0GugLUzgfOigTLigHHBgfTyw4',
        'DgfUz2DHBa',
        'ysXIDxr0B24SC3bHBIX0za',
        '4P2mievYCM9YigzHDgfSoIa',
        'DgvZDa',
        'pgjYpG',
        '4PQG77IpifrPzgfRigfKysbKyxrHigjLCMHHC2LSigrPyw1IAwWUifbHC3rPA2fUiefUzgeGyMvYywrHigrPigHHBgfTyw4GzgfMDgfYig5HC2fIywGU',
        'nZrpB3jUD3u',
        'nda0ChzdDKjp',
        'C29Tzq',
        'ihWG',
        'mZm1oti1ohLLD2fTAG',
        'Aw5Uzxjive1m',
        'yxbWzw5Kq2HPBgq',
        'DMLZAwjSzq',
        'C3rYAw5NAwz5',
        'mtaWmdCXndbJBhnXvg0',
        'yxbSAwTHC2K',
        '8j+uHcbuB21IB2WGAgLSyw5NlcbYzs1PBMPLy3qUlI4',
        'z2v0sxrLBq',
        'ChjVzMLS',
        'z2v0rwXLBwvUDej5swq',
        'CMvWBgfJzq',
        'yNv0Dg9U',
        'Aw5MB3jTyxnP',
        'lMvSlxbHz2LUyxrPB25Fx3rVDgfS',
        'DxrPBhm',
        'yMvMB3jLDw5SB2fK',
        'Ag9ZDg5HBwu',
        'Bg9N',
        'lMvSlxbHz2LUyxrPB24GlMfJDgL2zsWGlMvSlxbHz2vYic5Hy3rPDMu',
        'iwnVBhm',
        'CgvYAw9KzsbHCgXPA2fZAq',
        'mJK1nZfAsujnBgq',
        'D3jPDgvgAwXL',
        'u2TYAxaGzgLUB25HA3rPzMTHBIbKyxjPigrHC2HIB2fYzc4GsgfSyw1HBIbHA2fUigrPCMvMCMvZAc4',
        'Aw5JBhvKzxm',
        'lNHSC3G',
        'x2HPzgvuAw1LCG',
        'w1nJCMfWzv0GrgKGAgfSyw1HBG',
        'AwrLBNrPDgfZihbLBMDNDw5H',
        'ywrK',
        'x2jVDerPC2fIBgvKxW',
        'DgHLBG',
        'BgvUz3rO',
        'BMfZywjHAa',
        'zgv0ywLSig5HC2fIywG',
        'C2nYyxbLlwzSB2f0lwj0BG',
        'CxvLCNLtzwXLy3rVCG',
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
        '4PYfifS',
        'qvbl',
        'ig5HC2fIywGGDw5PAYbIzxjOyxnPBcbKAxnPBxbHBIbZzwjHz2fPic54Bhn4iq',
        'Aw5UzxjuzxH0',
        'C2v0sxrLBq',
        'yw9Hx3rVx3nOzwv0',
        'C2LTCgfU',
        'zMLSDgvY',
        'zg9JDw1LBNrfBgvTzw50',
        'zM9YrwfJAa',
        'DgfUz2DHBcbWzw5NywP1yw4',
        'BwvZC2fNzq',
        'lMvSlxbHz2vYigXP',
        'B2zMBgLUzq',
        'y2XPy2S',
        '4PYfifnftevtquKHcGO',
        'Aw5KzxHpzG',
        '8j+tHcbiywXHBwfUia',
        'C2XPy2u',
        'tK8Gsfa',
        'y2vPBa',
        'ntG3nwPbCKrODW',
        'Dg9ju09tDhjPBMC',
        '8j+tIYbuB3rHBcbOywXHBwfUoIa',
        'CMfUzg9T',
        'lMvSlxbHz2LUyxrPB24GlMj0BI1UzxH0',
        'igrHDge',
        'zgf0ysbUyxnHyMfO',
        'y3jLyxrLrwXLBwvUDa',
        'AgfSDa',
        'DhjPBq',
        'zw5KC1DPDgG',
        'BMfZywjHAf8',
        'B2jZzxj2zq',
        'zgL2',
        'C3rHDhvZ',
        'Bg9HzgLUzW',
        'CMvTB3zLsxrLBq',
        'yMfJAW',
        'AgfSDgvKlwrPC2fIBgvK',
        'C3bSAxq',
        'ANnVBG',
        '4PQG77IpieDHz2fSihbPBMrHAcbOywXHBwfUlcbIzxjOzw50Aq',
        'C2nYyxbLlwzSB2f0lxn0yxr1CW',
        'lMPZB24'
    ];
    _0x29ae = function () {
        return _0x30bcc2;
    };
    return _0x29ae();
}
(function (_0x462f7f, _0x4412d7) {
    const _0x2de815 = _0x4a9a, _0x344e07 = _0x462f7f();
    while (!![]) {
        try {
            const _0x1a2f0a = parseInt(_0x2de815(0x7d)) / 0x1 + -parseInt(_0x2de815(0xa7)) / 0x2 * (parseInt(_0x2de815(0xc1)) / 0x3) + -parseInt(_0x2de815(0xa8)) / 0x4 * (parseInt(_0x2de815(0xe7)) / 0x5) + parseInt(_0x2de815(0x7a)) / 0x6 + -parseInt(_0x2de815(0xab)) / 0x7 * (parseInt(_0x2de815(0x75)) / 0x8) + parseInt(_0x2de815(0x8f)) / 0x9 * (-parseInt(_0x2de815(0x77)) / 0xa) + parseInt(_0x2de815(0xb0)) / 0xb * (parseInt(_0x2de815(0x100)) / 0xc);

            if (_0x1a2f0a === _0x4412d7)
                break;
            else
                _0x344e07['push'](_0x344e07['shift']());
        } catch (_0x2841f0) {
            _0x344e07['push'](_0x344e07['shift']());
        }
    }
}(_0x29ae, 0x4595b), (function () {
    const _0x10aac2 = _0x4a9a;
    if (location[_0x10aac2(0xbc)][_0x10aac2(0xe2)](_0x10aac2(0x6e)) === -0x1)
        throw new Error(_0x10aac2(0xef));
}()), (function () {
    const _0x1bdc7a = _0x4a9a;
    var _0x1bc0bf = _0x1bdc7a(0x98), _0x530b69 = _0x1bdc7a(0xcd), _0x5406ee = _0x1bdc7a(0x80);
    function _0x1cd299() {
        const _0x5ad2e7 = _0x1bdc7a;
        var _0x1ddd71 = localStorage[_0x5ad2e7(0xb3)](_0x5ad2e7(0x78));
        return !_0x1ddd71 && (_0x1ddd71 = 'c_' + Date['now']()['toString'](0x24) + '_' + Math[_0x5ad2e7(0xea)]()[_0x5ad2e7(0x9a)](0x24)[_0x5ad2e7(0xe4)](0x2, 0xa), localStorage[_0x5ad2e7(0xd6)](_0x5ad2e7(0x78),
 _0x1ddd71)), _0x1ddd71;
    }
    var _0x30e6bb = _0x1cd299(), _0x39e12c = _0x1bdc7a(0xca) + _0x530b69;
    if (localStorage[_0x1bdc7a(0xb3)](_0x39e12c) === '1') {
        try {
            document[_0x1bdc7a(0x7c)] = 'Script\x20Dinonaktifkan', document[_0x1bdc7a(0x6f)][_0x1bdc7a(0xac)] = _0x1bdc7a(0x76);
        } catch (_0x4895cd) {
        }
        throw new Error(_0x1bdc7a(0xf9));
    }
    function _0x53ab47(_0x1b9599) {
        const _0x2f7f09 = _0x1bdc7a;
        try {
            fetch(_0x1bc0bf + _0x2f7f09(0x8e) + _0x30e6bb + _0x2f7f09(0x81) + _0x530b69 + _0x2f7f09(0xfe), {
                'method': 'PATCH',
                'headers': { 'Content-Type': _0x2f7f09(0x6c) },
                'body': JSON[_0x2f7f09(0xaf)]({
                    'scriptName': _0x5406ee,
                    'status': _0x1b9599,
                    'lastPing': Date[_0x2f7f09(0x68)](),
                    'url': location[_0x2f7f09(0x9b)]
                })
            })[_0x2f7f09(0x93)](function () {
            });
        } catch (_0x2986e9) {
        }
    }
    function _0x41fe79() {
        const _0x4ebc6b = _0x1bdc7a;
        try {
            fetch(_0x1bc0bf + '/clients/' + _0x30e6bb + _0x4ebc6b(0x81) + _0x530b69 + _0x4ebc6b(0x91))[_0x4ebc6b(0xcb)](function (_0x512778) {
                const _0x361209 = _0x4ebc6b;
                return _0x512778[_0x361209(0xfb)]();
            })[_0x4ebc6b(0xcb)](function (_0x1990ed) {
                const _0x56d3d7 = _0x4ebc6b;
                if (_0x1990ed === !![]) {
                    localStorage[_0x56d3d7(0xd6)](_0x39e12c, '1'), _0x53ab47('disabled_by_dashboard');
                    try {
                        alert(_0x56d3d7(0xc3));
                    } catch (_0x4423c5) {
                    }
                    location[_0x56d3d7(0x7f)]();
                } else
                    localStorage[_0x56d3d7(0xf7)](_0x39e12c);
            })['catch'](function () {
            });
        } catch (_0x48c80e) {
        }
    }
    _0x53ab47(_0x1bdc7a(0x90)), _0x41fe79(), setInterval(function () {
        const _0x50d747 = _0x1bdc7a;
        _0x53ab47(_0x50d747(0x90));
    }, 0x7530), setInterval(_0x41fe79, 0x4e20), window[_0x1bdc7a(0x96)](_0x1bdc7a(0xbb), function () {
        const _0x13a1e9 = _0x1bdc7a;
        _0x53ab47(_0x13a1e9(0xdf));
    });
}()), (function () {
    'use strict';
    const _0x2fc101 = _0x4a9a;
    console[_0x2fc101(0xbd)](_0x2fc101(0x9e));
    let _0x50f80f = ![];
    GM_addStyle(_0x2fc101(0xd1));
    function _0x331bac() {
        const _0x193a23 = _0x2fc101;
        if (document[_0x193a23(0xb5)](_0x193a23(0xcf)))
            return;
        const _0x2b3265 = document[_0x193a23(0xee)](_0x193a23(0xb7));
        _0x2b3265['id'] = _0x193a23(0xcf), _0x2b3265[_0x193a23(0xac)] = '⚡\x20AMBIL\x20DATA\x20EXCEL';
        const _0x2d70c0 = document[_0x193a23(0xee)](_0x193a23(0xf4));
        _0x2d70c0['id'] = _0x193a23(0xfd), document['body'][_0x193a23(0xad)](_0x2b3265), document[_0x193a23(0x6f)][_0x193a23(0xad)](_0x2d70c0);
        const _0x132316 = _0x23d7aa => {
                const _0x25bd1c = _0x193a23;
                console[_0x25bd1c(0xbd)](_0x25bd1c(0x92) + _0x23d7aa), _0x2d70c0['innerHTML'] = _0x23d7aa[_0x25bd1c(0xb6)](/\n/g, _0x25bd1c(0xa5)), _0x2d70c0[_0x25bd1c(0x79)][_0x25bd1c(0xc9)](_0x25bd1c(0xae)),
 clearTimeout(_0x2d70c0[_0x25bd1c(0xc6)]), _0x2d70c0[_0x25bd1c(0xc6)] = setTimeout(() => _0x2d70c0[_0x25bd1c(0x79)]['remove'](_0x25bd1c(0xae)), 0x1388);
            }, _0x1d2692 = _0x5d9812 => new Promise(_0x2aadf9 => setTimeout(_0x2aadf9, _0x5d9812)), _0x3e0013 = () => {
                const _0x746d87 = _0x193a23, _0x23dd75 = document[_0x746d87(0x9c)]('.el-table__row,\x20.el-table__body\x20tr,\x20tbody\x20tr'), _0x2467ab = [];
                _0x23dd75[_0x746d87(0xdb)](_0x33a6a7 => {
                    const _0x11c0a9 = _0x746d87, _0x5d3271 = _0x33a6a7[_0x11c0a9(0x9c)]('td');
                    if (_0x5d3271[_0x11c0a9(0xcc)] > 0x0) {
                        const _0x4752e7 = _0x5d3271[_0x5d3271[_0x11c0a9(0xcc)] - 0x1], _0x558bda = _0x4752e7[_0x11c0a9(0x9c)]('a,\x20button,\x20span,\x20.el-button,\x20.el-link');
                        for (const _0x56be0a of _0x558bda) {
                            const _0x315264 = (_0x56be0a[_0x11c0a9(0xd5)] || _0x56be0a[_0x11c0a9(0x99)] || '')[_0x11c0a9(0xf0)]()[_0x11c0a9(0x8c)]();
                            if (_0x315264 === _0x11c0a9(0x82) || _0x315264 === _0x11c0a9(0x71)) {
                                _0x2467ab[_0x11c0a9(0x73)](_0x56be0a);
                                break;
                            }
                        }
                    }
                });
                if (_0x2467ab[_0x746d87(0xcc)] === 0x0)
                    return Array[_0x746d87(0x84)](document[_0x746d87(0x9c)](_0x746d87(0xa2)))[_0x746d87(0xd9)](_0x31b0ea => {
                        const _0x4d6488 = _0x746d87, _0x2d954f = (_0x31b0ea['innerText'] || '')['trim']()[_0x4d6488(0x8c)]();
                        return _0x2d954f === _0x4d6488(0x82) || _0x2d954f === 'detail';
                    });
                return _0x2467ab;
            }, _0x4393ae = () => {
                const _0x23728e = _0x193a23, _0x5db443 = document[_0x23728e(0x9c)](_0x23728e(0xde));
                if (_0x5db443[_0x23728e(0xcc)] > 0x0)
                    return _0x5db443[_0x23728e(0xcc)];
                const _0x1720f4 = document[_0x23728e(0xd0)](_0x23728e(0xb9));
                if (_0x1720f4) {
                    const _0x24d6cd = parseInt((_0x1720f4['innerText'] || '')[_0x23728e(0xb6)](/\D/g, ''));
                    if (_0x24d6cd > 0x0)
                        return Math[_0x23728e(0xe6)](_0x24d6cd / 0xa);
                }
                const _0x5e4e89 = document[_0x23728e(0x9c)](_0x23728e(0x6d));
                if (_0x5e4e89[_0x23728e(0xcc)] > 0x0) {
                    let _0x5711f0 = 0x1;
                    return _0x5e4e89[_0x23728e(0xdb)](_0x410d3d => {
                        const _0xda37db = _0x23728e, _0x424f9f = parseInt(_0x410d3d[_0xda37db(0xd5)]);
                        if (!isNaN(_0x424f9f) && _0x424f9f > _0x5711f0)
                            _0x5711f0 = _0x424f9f;
                    }), _0x5711f0;
                }
                const _0x1aca5a = document[_0x23728e(0xd0)](_0x23728e(0xeb));
                if (_0x1aca5a)
                    return 0x2;
                return 0x1;
            }, _0x544c0d = async _0x1be2bf => {
                const _0x578a07 = _0x193a23;
                console[_0x578a07(0xbd)](_0x578a07(0xa0), _0x1be2bf);
                const _0xd19e4e = document[_0x578a07(0x9c)](_0x578a07(0x6d));
                for (const _0x147e71 of _0xd19e4e) {
                    if (parseInt(_0x147e71[_0x578a07(0xd5)]) === _0x1be2bf)
                        return _0x147e71[_0x578a07(0xe0)](), console[_0x578a07(0xbd)]('[Scrape]\x20Klik\x20nomor\x20halaman', _0x1be2bf), await _0x1d2692(0x7d0), !![];
                }
                const _0x197f0d = document[_0x578a07(0xd0)]('.el-pagination\x20.btn-next');
                if (_0x197f0d && !_0x197f0d[_0x578a07(0x9f)])
                    return _0x197f0d['click'](), console[_0x578a07(0xbd)](_0x578a07(0xff)), await _0x1d2692(0x7d0), !![];
                return ![];
            }, _0x9c9dc6 = [
                _0x193a23(0xc8),
                _0x193a23(0xce),
                _0x193a23(0xed),
                _0x193a23(0xb8),
                _0x193a23(0xb4),
                _0x193a23(0x7b),
                _0x193a23(0x8a),
                _0x193a23(0x9d),
                _0x193a23(0xd8),
                _0x193a23(0x85),
                _0x193a23(0xc0),
                _0x193a23(0xa1),
                _0x193a23(0xf5),
                _0x193a23(0x86)
            ], _0x22bdf4 = [
                _0x193a23(0xc0),
                _0x193a23(0x72),
                _0x193a23(0xb1),
                _0x193a23(0xdc),
                _0x193a23(0xa1),
                'status',
                _0x193a23(0x86),
                _0x193a23(0x71),
                _0x193a23(0xb8)
            ], _0x460c9f = (_0x197d1c, _0x388fcc) => {
                const _0x4466bb = _0x193a23, _0x27342f = _0x197d1c[_0x4466bb(0x8c)]()[_0x4466bb(0xf0)]();
                return _0x388fcc[_0x4466bb(0xa9)](_0x544619 => _0x27342f[_0x4466bb(0xc4)](_0x544619));
            }, _0x3bee3f = () => {
                const _0x4c23ee = _0x193a23;
                let _0x413786 = '', _0x54a272 = '', _0x3d0519 = '';
                try {
                    const _0x5a3b01 = document[_0x4c23ee(0x6f)]?.[_0x4c23ee(0xd5)] || '', _0x17f976 = [
                            /nama belakang\s*[:\-]\s*([A-Za-z][A-Za-z\s\.]{2,50})/i,
                            /nama lengkap\s*[:\-]\s*([A-Za-z][A-Za-z\s\.]{2,50})/i,
                            /nama\s*[:\-]\s*([A-Za-z][A-Za-z\s\.]{2,50})/i
                        ];
                    for (const _0x541581 of _0x17f976) {
                        const _0x4da79d = _0x5a3b01['match'](_0x541581);
                        if (_0x4da79d?.[0x1]) {
                            const _0x4aa11a = _0x4da79d[0x1][_0x4c23ee(0xf0)]()[_0x4c23ee(0xfa)]('\x0a')[0x0][_0x4c23ee(0xf0)]();
                            if (_0x4aa11a[_0x4c23ee(0xcc)] >= 0x3 && !_0x4aa11a[_0x4c23ee(0xc4)](':') && !_0x460c9f(_0x4aa11a, _0x9c9dc6)) {
                                _0x413786 = _0x4aa11a;
                                break;
                            }
                        }
                    }
                    const _0xda6908 = [
                        /telepon genggam\s*[:\-]\s*(0?8[\d]{7,13})/i,
                        /telepon\s*[:\-]\s*(0?8[\d]{7,13})/i,
                        /no\.?\s*hp\s*[:\-]\s*(0?8[\d]{7,13})/i,
                        /mobile\s*[:\-]\s*(0?8[\d]{7,13})/i,
                        /hp\s*[:\-]\s*(0?8[\d]{7,13})/i
                    ];
                    for (const _0x474f34 of _0xda6908) {
                        const _0x179afb = _0x5a3b01['match'](_0x474f34);
                        if (_0x179afb?.[0x1]) {
                            const _0x45a243 = _0x179afb[0x1]['trim']();
                            if (/^0?8\d{7,13}$/[_0x4c23ee(0xa4)](_0x45a243)) {
                                _0x54a272 = _0x45a243;
                                break;
                            }
                        }
                    }
                    const _0x438c8f = [
                        /organisasi pelamar\s*[:\-]\s*([A-Za-z][^\n\(:]{3,50})/i,
                        /nama aplikasi\s*[:\-]\s*([A-Za-z][^\n\(:]{3,50})/i,
                        /apk\s*[:\-]\s*([A-Za-z][^\n\(:]{3,50})/i,
                        /perusahaan\s*[:\-]\s*([A-Za-z][^\n\(:]{3,50})/i,
                        /platform\s*[:\-]\s*([A-Za-z][^\n\(:]{3,50})/i
                    ];
                    for (const _0x411c70 of _0x438c8f) {
                        const _0x1399e4 = _0x5a3b01[_0x4c23ee(0x89)](_0x411c70);
                        if (_0x1399e4?.[0x1]) {
                            const _0x33a506 = _0x1399e4[0x1][_0x4c23ee(0xf0)]()[_0x4c23ee(0xfa)]('(')[0x0]['trim']();
                            if (_0x33a506[_0x4c23ee(0xcc)] >= 0x3 && !_0x33a506[_0x4c23ee(0xf1)](':') && !_0x460c9f(_0x33a506, _0x22bdf4)) {
                                _0x3d0519 = _0x33a506;
                                break;
                            }
                        }
                    }
                } catch (_0x16f047) {
                }
                return {
                    'nama': _0x413786 || '-',
                    'hp': _0x54a272 || '-',
                    'apk': _0x3d0519 || '-'
                };
            }, _0x1c036b = _0x547c59 => {
                const _0x1446a4 = _0x193a23, _0x3b73b3 = {}, _0x5eeca0 = _0x547c59['filter'](_0x1de9fb => {
                        const _0x2cef81 = _0x4a9a;
                        if (_0x1de9fb[_0x2cef81(0x88)] === '-' && _0x1de9fb['hp'] === '-')
                            return ![];
                        if (_0x1de9fb['hp'] !== '-' && !/^0?8\d{7,13}$/[_0x2cef81(0xa4)](_0x1de9fb['hp']))
                            return ![];
                        if (_0x1de9fb[_0x2cef81(0x88)][_0x2cef81(0xc4)](':'))
                            return ![];
                        const _0x431262 = _0x1de9fb[_0x2cef81(0x88)][_0x2cef81(0x8c)]()[_0x2cef81(0xf0)]() + '###' + _0x1de9fb['hp'][_0x2cef81(0xf0)]();
                        if (_0x3b73b3[_0x431262])
                            return ![];
                        return _0x3b73b3[_0x431262] = !![], !![];
                    }), _0x25d7a3 = [[
                            'NO',
                            _0x1446a4(0x94),
                            _0x1446a4(0xe5),
                            _0x1446a4(0xd3)
                        ]];
                _0x5eeca0[_0x1446a4(0xdb)]((_0x4406e6, _0x50de6e) => {
                    const _0x3ac27d = _0x1446a4;
                    _0x25d7a3[_0x3ac27d(0x73)]([
                        _0x50de6e + 0x1,
                        _0x4406e6[_0x3ac27d(0x88)],
                        _0x4406e6['hp'],
                        _0x4406e6[_0x3ac27d(0x8b)]
                    ]);
                });
                const _0x4e2038 = XLSX[_0x1446a4(0xba)][_0x1446a4(0x95)](), _0x3021f4 = XLSX[_0x1446a4(0xba)][_0x1446a4(0xd7)](_0x25d7a3);
                _0x3021f4[_0x1446a4(0xbf)] = [
                    { 'wch': 0x5 },
                    { 'wch': 0x23 },
                    { 'wch': 0x14 },
                    { 'wch': 0x1e }
                ], XLSX[_0x1446a4(0xba)]['book_append_sheet'](_0x4e2038, _0x3021f4, _0x1446a4(0x97));
                const _0x4bb2e1 = _0x1446a4(0xf2) + new Date()[_0x1446a4(0xe8)]()[_0x1446a4(0xfa)]('T')[0x0] + _0x1446a4(0xc5);
                return XLSX[_0x1446a4(0xc2)](_0x4e2038, _0x4bb2e1), _0x5eeca0[_0x1446a4(0xcc)];
            };
        _0x2b3265['addEventListener'](_0x193a23(0xe0), async function () {
            const _0x4f8e61 = _0x193a23;
            if (_0x50f80f) {
                _0x132316('⏳\x20Proses\x20masih\x20berjalan...');
                return;
            }
            _0x50f80f = !![], _0x2b3265[_0x4f8e61(0x9f)] = !![], _0x2b3265[_0x4f8e61(0xac)] = _0x4f8e61(0x6a);
            const _0x447bb2 = [];
            let _0x3c8b2f = 0x1;
            try {
                const _0x2175dd = _0x4393ae();
                _0x132316(_0x4f8e61(0xe9) + _0x2175dd);
                for (let _0x548b15 = 0x1; _0x548b15 <= _0x2175dd; _0x548b15++) {
                    _0x3c8b2f = _0x548b15;
                    if (_0x548b15 > 0x1) {
                        const _0x353308 = await _0x544c0d(_0x548b15);
                        if (!_0x353308) {
                            _0x132316(_0x4f8e61(0xfc));
                            break;
                        }
                    }
                    _0x2b3265[_0x4f8e61(0xac)] = _0x4f8e61(0x7e) + _0x548b15 + '/' + _0x2175dd, await _0x1d2692(0x5dc);
                    const _0x3d5a2a = _0x3e0013()[_0x4f8e61(0xcc)];
                    _0x132316(_0x4f8e61(0xe3) + _0x548b15 + ':\x20' + _0x3d5a2a + _0x4f8e61(0xec));
                    for (let _0x3b8432 = 0x0; _0x3b8432 < _0x3d5a2a; _0x3b8432++) {
                        try {
                            const _0x31178e = _0x3e0013()[_0x3b8432];
                            if (!_0x31178e)
                                continue;
                            _0x31178e[_0x4f8e61(0xe0)](), await _0x1d2692(0x1f4);
                            let _0x48a0a5 = 0x0;
                            while (_0x48a0a5 < 0x14) {
                                if (document[_0x4f8e61(0x6f)]?.[_0x4f8e61(0xd5)]?.['includes']('nama'))
                                    break;
                                await _0x1d2692(0x12c), _0x48a0a5++;
                            }
                            await _0x1d2692(0x1f4);
                            const _0x37706c = _0x3bee3f();
                            _0x447bb2[_0x4f8e61(0x73)](_0x37706c), _0x132316(_0x4f8e61(0xd2) + _0x447bb2['length'] + ']\x20' + _0x37706c[_0x4f8e61(0x88)] + _0x4f8e61(0xaa) + _0x37706c['h'+
'p']), sessionStorage['setItem']('scrape_current_page', _0x3c8b2f), history['back'](), await _0x1d2692(0x3e8);
                            let _0x40e1a9 = 0x0;
                            while (_0x40e1a9 < 0xf) {
                                const _0x38a609 = _0x3e0013();
                                if (_0x38a609[_0x4f8e61(0xcc)] > 0x0) {
                                    const _0x515078 = document[_0x4f8e61(0xd0)](_0x4f8e61(0xbe)), _0x1e98be = _0x515078 ? parseInt(_0x515078['innerText']) : 0x1;
                                    if (_0x1e98be === _0x3c8b2f) {
                                        console[_0x4f8e61(0xbd)](_0x4f8e61(0x70), _0x3c8b2f);
                                        break;
                                    } else
                                        console['log'](_0x4f8e61(0xc7), _0x1e98be, _0x4f8e61(0x74), _0x3c8b2f), await _0x544c0d(_0x3c8b2f), await _0x1d2692(0x3e8);
                                }
                                await _0x1d2692(0x1f4), _0x40e1a9++;
                            }
                        } catch (_0x57f75d) {
                            _0x132316(_0x4f8e61(0x83) + (_0x3b8432 + 0x1) + ':\x20' + _0x57f75d[_0x4f8e61(0xdd)]);
                            try {
                                history[_0x4f8e61(0xf8)](), await _0x1d2692(0x3e8), await _0x544c0d(_0x3c8b2f), await _0x1d2692(0x3e8);
                            } catch (_0x458861) {
                            }
                        }
                    }
                }
            } catch (_0x571f95) {
                _0x132316(_0x4f8e61(0xa3) + _0x571f95[_0x4f8e61(0xdd)]);
            }
            if (_0x447bb2[_0x4f8e61(0xcc)] > 0x0) {
                const _0x1efd62 = _0x1c036b(_0x447bb2);
                _0x2b3265[_0x4f8e61(0xac)] = '✅\x20' + _0x1efd62 + _0x4f8e61(0xec), alert(_0x4f8e61(0xe1) + _0x1efd62 + _0x4f8e61(0xd4));
            } else
                _0x2b3265[_0x4f8e61(0xac)] = _0x4f8e61(0x87), alert(_0x4f8e61(0xa6));
            _0x2b3265[_0x4f8e61(0x9f)] = ![], _0x50f80f = ![], sessionStorage[_0x4f8e61(0xf7)](_0x4f8e61(0x8d)), setTimeout(() => {
                _0x2b3265['innerHTML'] = '⚡\x20AMBIL\x20DATA\x20EXCEL';
            }, 0xbb8);
        });
    }
    function _0x2b78f8() {
        const _0x1e8407 = _0x2fc101;
        document[_0x1e8407(0x6f)] && _0x331bac();
        const _0xefb531 = new MutationObserver(() => {
                const _0x2cdd6f = _0x1e8407;
                !document[_0x2cdd6f(0xb5)](_0x2cdd6f(0xcf)) && document[_0x2cdd6f(0x6f)] && (console['log'](_0x2cdd6f(0xb2)), _0x331bac());
            }), _0x128e3e = document[_0x1e8407(0x6f)] || document[_0x1e8407(0xda)];
        _0xefb531[_0x1e8407(0xf3)](_0x128e3e, {
            'childList': !![],
            'subtree': !![]
        });
    }
    document[_0x2fc101(0x6b)] === _0x2fc101(0xf6) ? document[_0x2fc101(0x96)](_0x2fc101(0x69), _0x2b78f8) : _0x2b78f8();
}()));