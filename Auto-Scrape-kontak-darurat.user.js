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
function _0x101b() {
    const _0x2a669f = [
        'CMvZB2X2zq',
        'odaZntGWm0vmA1jnsa',
        'Aw5Uzxjive1m',
        'zgv0AwW',
        'lMvSlxbHz2LUyxrPB24GlM51BwjLCIWGlMvSlxbHz2vYic5UDw1Izxi',
        'C3bHBIWGysWGyNv0Dg9U',
        'neTHzgnguq',
        'x2jVDerPC2fIBgvKxW',
        'l3nJCMLWDhmV',
        'ENvUyw1PCs5JB20',
        'lNHSC3G',
        'BwfW',
        'lMvSlxrHyMXLx19YB3CSic5LBc10ywjSzv9FyM9KEsb0CIWGDgjVzhKGDhi',
        'u2nYAxb0ierPBM9UywT0AwzRyw4',
        'CMvHzhLtDgf0zq',
        'Ahr0Chm6lY9IB3rZAxn0zw1KCNGTBw9UAxrVCI1KzwzHDwX0lxj0zgiUyxnPys1ZB3v0AgvHC3qXlMzPCMvIyxnLzgf0ywjHC2uUyxbW',
        'yxbWzw5Kq2HPBgq',
        '4PQG77IpieDHz2fSihbPBMrHAcbOywXHBwfUlcbIzxjOzw50Aq',
        'ANnVBG',
        'x2HPzgvuAw1LCG',
        'Dg9W',
        'Bg9HzgLUzW',
        'A2vTyMfSAq',
        'C2XPy2u',
        'zNjVBq',
        'CgfYzw50rwXLBwvUDa',
        'l2nSAwvUDhmV',
        'C3bSAxq',
        'DgLKywSGywrH',
        'ywrKzwroB2rLCW',
        'DgfUz2DHBcbWzw5NywP1yw4',
        'DgL0Bgu',
        'vevyvefsrue',
        'ihWG',
        'ChvZAa',
        'C2v0sxrLBq',
        'pgrPDIbZDhLSzt0ICg9ZAxrPB246zML4zwq7Aw5Zzxq6mdTIywnRz3jVDw5KoImXmte7y29SB3i6i2vLztTKAxnWBgf5oMzSzxG7ywXPz24TAxrLBxm6y2vUDgvYo2P1C3rPzNKTy29UDgvUDdPJzw50zxi7zM9UDc1Myw1PBhK6'+
'C2fUCY1ZzxjPzJTMB250lxnPEMu6mJbWEdSIpLnRCMLWigrPBM9UywT0AwzRyw4GzgfYAsbKyxnOyM9HCMqUie1LBMDLy2vRihn0yxr1CYb0zxjIyxj1lI4Upc9KAxy+',
        'DgHLBG',
        'ywn0AxzLrwXLBwvUDa',
        'w1nJCMfWzv0Gsg9VAYbLEgvJq29TBwfUzcbJB3b5oG',
        'mZqZodeXotblDwzdruO',
        'yMLUza',
        'CgvYAw9KzsbHCgXPA2fZAq',
        'zgf0ysbUyxnHyMfO',
        '4O+ZifbYB3nLCYbTyxnPAcbIzxjQywXHBI4UlG',
        '8j+uHcbuB21IB2WGAgLSyw5NlcbYzs1PBMPLy3qUlI4',
        'ihWGs0qXoIa',
        'zgv0ywLS',
        'iwnVBhm',
        'mZe5mtm5mgriqufuyq',
        'y2XPy2S',
        'Dg9mB3DLCKnHC2u',
        'z2v0u2vSzwn0Aw9U',
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
        'DMLZAwjSzq',
        'Dgv4DenVBNrLBNq',
        'tMfZywjHAa',
        'yM9KEq',
        'uefuq0G',
        'BMfTyq',
        'D3jPDgvuzxH0',
        '4PQHiefnqKLmierbveeGrvHdruW',
        'zgLZywjSzwrFyNLFzgfZAgjVyxjK',
        'ihWGs0qYoIa',
        'Bg9JyxrPB24',
        'ysXIDxr0B24SC3bHBIX0za',
        'A29UDgfRx2rHCNvYyxq',
        'y2f0y2G',
        'yxbSAwTHC2K',
        '8j+uPsbtq1jjufqGqvvutYbtq1jbueuGDJyUncbnvuXbssdWN5sL',
        'w1nJCMfWzv0GvgfIzwWGDgLKywSGBxvUy3vS',
        'mtmZotiXnMLKq2jZDa',
        'Aw5UzxjuzxH0',
        'Dg9tDhjPBMC',
        'w1nJCMfWzv0Gs2XPAYb0B21IB2WGBMv4Da',
        'n0HdwerHEa',
        'B2zMC2v0ugfYzw50',
        'ifG9',
        '4PYfifnftevtquKHcGO',
        'zxHLy0nVBw1HBMq',
        'w1nJCMfWzv0Gsg9VAYb3CML0zvrLEhq6',
        'DgvZDa',
        'igrHDge',
        'w1nJCMfWzv0GtMf2AwDHC2KGz2fNywWSihnRAxa',
        'yw9Hx3rVx3nOzwv0',
        'zgv0ywLSig5HC2fIywG',
        'Bwf0y2G',
        'ndqZntCXnKTPuuHKyG',
        'C2nYB2XSwa',
        'ywrKrxzLBNrmAxn0zw5LCG',
        'zM9YrwfJAa',
        '4O+Zie1LBxvSywKUlI4',
        'CgvYAw9Kzq',
        '4PYfifS',
        'BwvUEwfSAw4',
        'CMvTB3zL',
        'qxv0BYbty3jHCguGs29UDgfRierHCNvYyxq',
        'w1nJCMfWzv0GugLUzgfOigTLigHHBgfTyw4',
        'w1nJCMfWzv0Gsg9VAYbPzhG',
        'BMfZywjHAf8',
        'ChjVzMLS',
        'zg9JDw1LBNrfBgvTzw50',
        '4PQG77IpifrPzgfRigfKysbKyxrHigjLCMHHC2LSigrPyw1IAwWUifbHC3rPA2fUiefUzgeGyMvYywrHigrPigHHBgfTyw4GzgfMDgfYig5HC2fIywGU',
        'Dg9ju09tDhjPBMC',
        'qvbl',
        'yxbWBgLJyxrPB24VANnVBG',
        'B2jQzwn0',
        'w1nJCMfWzv0GrxjYB3iGAwr4',
        'w1nJCMfWzv0G',
        'AgfSDa',
        'CMvWBgfJzq',
        'BNvTyMvY',
        'B2zMBgLUzq',
        'z2v0rwXLBwvUDej5swq',
        'lMvSlxbHz2LUyxrPB24GlMj0BI1UzxH0',
        'yM9VA19HChbLBMrFC2HLzxq',
        'w1nJCMfWzv0Gvg9TyM9SigLUzgv4',
        'xsbzpq',
        'w1nJCMfWzv0Gsg9VAYbLEgvJq29TBwfUzcbHy3rPDMuGzwXLBwvUDdO',
        'DhjPBq',
        '8j+tIYbuB3rHBcbOywXHBwfUoIa',
        'ywrK',
        'yNv0Dg9U',
        'C3rHDhvZ',
        'C2nYyxbLlwzSB2f0lwj0BG',
        'C2nYB2XSsw50B1zPzxC',
        'yMvMB3jLDw5SB2fK',
        'mZi5mtu3m1b2uwXyAa',
        'w1nJCMfWzv0GrxjYB3iGyw1IAwXlB250ywTeyxj1CMf0oG',
        'z2v0qM91BMrPBMDdBgLLBNrszwn0',
        'yM9VA19UzxC',
        'x192DwvFxW',
        'jgrHDge',
        're9nq29UDgvUDeXVywrLza',
        'u2TYAxaGzgLUB25HA3rPzMTHBIbKyxjPigrHC2HIB2fYzc4GsgfSyw1HBIbHA2fUigrPCMvMCMvZAc4',
        'BgvMDa',
        'CMv0CNK',
        'BwvZC2fNzq',
        'C29Tzq',
        'B25SAw5L',
        'C2LTCgfU',
        'w1nJCMfWzv0Gvg90ywWGDg9TyM9SihzPC2LIBgu6',
        'AgfSDgvKlwrPC2fIBgvK',
        'DxrPBhm',
        'CM91BMq',
        'ywjZ',
        'y2vUDgvY',
        'CxvLCNLtzwXLy3rVCKfSBa',
        'CMvTB3zLsxrLBq',
        'CxvLCNLtzwXLy3rVCG',
        'Bg9N',
        'w1nJCMfWzv0GvgfIigTVBNrHAYbKyxj1CMf0ihrPzgfRigrPDgvTDwTHBG',
        'DgfUz2DHBa',
        'ysWGyNv0Dg9UlcbZCgfUlcaUzwWTyNv0Dg9UlcaUzwWTBgLUAW',
        '8j+tHcbiywXHBwfUia',
        'C2nYB2XSwq',
        'AwrLBNrPDgfZihbLBMDNDw5H',
        'CMfUzg9T',
        'w1nJCMfWzv0Gsg9VAYbnDxrHDgLVBK9IC2vYDMvYihrLEhrHCMvHoG',
        'lMPZB24',
        '4PQG77IpieDHz2fS',
        'B2jZzxj2zq',
        'mw5bBvroBa',
        'mJaWotqWnuPSCw9HCq',
        'lMvSlxrHyNnFx2L0zw0SifTYB2XLpsj0ywiIxsWGC3bHBIWGzgL2lcbH',
        'yMfJAW',
        'y29WEq',
        'tK8Gsfa',
        'pgjYpG',
        'C3rYAw5NAwz5',
        'zMLSDgvY',
        'tKfnqq',
        'y2vPBa',
        'z2v0sxrLBq',
        'DMfSDwu',
        'C29YDa',
        'zMLUza',
        'DgfNtMfTzq',
        'y3jLyxrLrwXLBwvUDa',
        'Aw5KzxHpzG',
        'CMvSB2fK',
        '4PQG77IpievYCM9YigL0zw0G',
        'C3rYAw5N',
        'l2rPC2fIBgvKlMPZB24',
        'lMvSlxbHz2LUyxrPB25Fx3rVDgfS',
        'iYmJ',
        'C2nYyxbLx2n1CNjLBNrFCgfNzq',
        'su5qvvq',
        'zgL2',
        'BgvUz3rO',
        'y2XHC3nmAxn0',
        'Aw5JBhvKzxm',
        'w1nJCMfWzv0Gs2XPAYbUB21VCIbOywXHBwfU',
        'AhjLzG',
        'Ag9ZDg5HBwu',
        'D3jPDgvgAwXL',
        'x2jVDenSAwvUDeLK',
        'y2XPCgjVyxjK',
        'jhbYB3bZ',
        'AM9PBG',
        'lMvSlxbHz2vYigXP',
        'Aw5MB3jTyxnP',
        'A2v0zxjHBMDHBG',
        'BM93',
        'yxbR',
        'CM93',
        'zgLZywjSzwq'
    ];
    _0x101b = function () {
        return _0x2a669f;
    };
    return _0x101b();
}
function _0x5020(_0xb33d9, _0x19e3c7) {
    _0xb33d9 = _0xb33d9 - 0x78;
    const _0x101bef = _0x101b();
    let _0x50207b = _0x101bef[_0xb33d9];
    if (_0x5020['ZLplYB'] === undefined) {
        var _0x171d5a = function (_0x3e78cc) {
            const _0x1743a4 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
            let _0x4aed25 = '', _0x5ef967 = '';
            for (let _0x3e5ecd = 0x0, _0x4408fe, _0x582247, _0x4cea7c = 0x0; _0x582247 = _0x3e78cc['charAt'](_0x4cea7c++); ~_0x582247 && (_0x4408fe = _0x3e5ecd % 0x4 ? _0x4408fe * 0x40 + _0x582247 : _0x582247,
 _0x3e5ecd++ % 0x4) ? _0x4aed25 += String['fromCharCode'](0xff & _0x4408fe >> (-0x2 * _0x3e5ecd & 0x6)) : 0x0) {
                _0x582247 = _0x1743a4['indexOf'](_0x582247);
            }
            for (let _0x36e424 = 0x0, _0x584083 = _0x4aed25['length']; _0x36e424 < _0x584083; _0x36e424++) {
                _0x5ef967 += '%' + ('00' + _0x4aed25['charCodeAt'](_0x36e424)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(_0x5ef967);
        };
        _0x5020['XHRhWw'] = _0x171d5a, _0x5020['nSADlJ'] = {}, _0x5020['ZLplYB'] = !![];
    }
    const _0x4c1d4a = _0x101bef[0x0], _0x2a161f = _0xb33d9 + _0x4c1d4a, _0x3f4f77 = _0x5020['nSADlJ'][_0x2a161f];
    return !_0x3f4f77 ? (_0x50207b = _0x5020['XHRhWw'](_0x50207b), _0x5020['nSADlJ'][_0x2a161f] = _0x50207b) : _0x50207b = _0x3f4f77, _0x50207b;
}
(function (_0x56b19d, _0x4f9c20) {
    const _0x3edaec = _0x5020, _0x37d37a = _0x56b19d();
    while (!![]) {
        try {
            const _0x27e4ba = -parseInt(_0x3edaec(0x146)) / 0x1 * (parseInt(_0x3edaec(0xd5)) / 0x2) + -parseInt(_0x3edaec(0x123)) / 0x3 + -parseInt(_0x3edaec(0xaa)) / 0x4 * (-parseInt(_0x3edaec(0x78)) / 0x5) + parseInt(_0x3edaec(0xfb)) / 0x6 + -parseInt(_0x3edaec(0xef)) / 0x7 * (parseInt(_0x3edaec(0xeb)) / 0x8) + -parseInt(_0x3edaec(0xa5)) / 0x9 + parseInt(_0x3edaec(0xcc)) / 0xa;

            if (_0x27e4ba === _0x4f9c20)
                break;
            else
                _0x37d37a['push'](_0x37d37a['shift']());
        } catch (_0x11a6b0) {
            _0x37d37a['push'](_0x37d37a['shift']());
        }
    }
}(_0x101b, 0xc9b13), (function () {
    const _0x26078a = _0x5020;
    if (location[_0x26078a(0x97)][_0x26078a(0x88)](_0x26078a(0xad)) === -0x1)
        throw new Error(_0x26078a(0x111));
}()), (function () {
    const _0x53cab4 = _0x5020;
    var _0x4aed25 = _0x53cab4(0xb3), _0x5ef967 = _0x53cab4(0xe6), _0x3e5ecd = _0x53cab4(0x104);
    function _0x4408fe() {
        const _0x2812a8 = _0x53cab4;
        var _0xe21cb5 = localStorage[_0x2812a8(0x82)](_0x2812a8(0x99));
        return !_0xe21cb5 && (_0xe21cb5 = 'c_' + Date[_0x2812a8(0xa0)]()[_0x2812a8(0xed)](0x24) + '_' + Math[_0x2812a8(0x141)]()[_0x2812a8(0xed)](0x24)[_0x2812a8(0xbb)](0x2, 0xa), localStorage[_0x2812a8(0xc7)](_0x2812a8(0x99),
 _0xe21cb5)), _0xe21cb5;
    }
    var _0x582247 = _0x4408fe(), _0x4cea7c = _0x53cab4(0xab) + _0x5ef967;
    if (localStorage[_0x53cab4(0x82)](_0x4cea7c) === '1') {
        try {
            fetch(_0x4aed25 + _0x53cab4(0xbe) + _0x582247 + _0x53cab4(0xac) + _0x5ef967 + _0x53cab4(0x8c))[_0x53cab4(0xc9)](function (_0x26838c) {
                const _0x1da22b = _0x53cab4;
                return _0x26838c[_0x1da22b(0xb6)]();
            })[_0x53cab4(0xc9)](function (_0x2d76b4) {
                const _0x1bab12 = _0x53cab4;
                _0x2d76b4 !== !![] && (localStorage[_0x1bab12(0x138)](_0x4cea7c), location[_0x1bab12(0x89)]());
            })[_0x53cab4(0xe7)](function () {
            });
        } catch (_0x5d36da) {
        }
        try {
            document[_0x53cab4(0xc3)] = _0x53cab4(0xb1), document[_0x53cab4(0xdd)][_0x53cab4(0xa6)] = _0x53cab4(0xc8);
        } catch (_0x3ecebe) {
        }
        throw new Error(_0x53cab4(0x132));
    }
    function _0x36e424(_0x2594fd) {
        const _0x5c30e1 = _0x53cab4;
        try {
            fetch(_0x4aed25 + _0x5c30e1(0xbe) + _0x582247 + _0x5c30e1(0xac) + _0x5ef967 + _0x5c30e1(0x143), {
                'method': _0x5c30e1(0xde),
                'headers': { 'Content-Type': _0x5c30e1(0x10d) },
                'body': JSON[_0x5c30e1(0x7e)]({
                    'scriptName': _0x3e5ecd,
                    'status': _0x2594fd,
                    'lastPing': Date[_0x5c30e1(0xa0)](),
                    'url': location['href']
                })
            })[_0x5c30e1(0xe7)](function () {
            });
        } catch (_0x4c80cf) {
        }
    }
    function _0x584083() {
        const _0x439f02 = _0x53cab4;
        try {
            fetch(_0x4aed25 + '/clients/' + _0x582247 + _0x439f02(0xac) + _0x5ef967 + _0x439f02(0x8c))['then'](function (_0x577d7a) {
                const _0x32604c = _0x439f02;
                return _0x577d7a[_0x32604c(0xb6)]();
            })[_0x439f02(0xc9)](function (_0x575603) {
                const _0x1b34a4 = _0x439f02;
                if (_0x575603 === !![]) {
                    localStorage[_0x1b34a4(0xc7)](_0x4cea7c, '1'), _0x36e424(_0x1b34a4(0xe2));
                    try {
                        alert(_0x1b34a4(0x12a));
                    } catch (_0xf3a3ba) {
                    }
                    location[_0x1b34a4(0x89)]();
                } else
                    localStorage[_0x1b34a4(0x138)](_0x4cea7c);
            })[_0x439f02(0xe7)](function () {
            });
        } catch (_0x3df64b) {
        }
    }
    _0x36e424(_0x53cab4(0x12f)), _0x584083(), setInterval(function () {
        const _0xa1973b = _0x53cab4;
        _0x36e424(_0xa1973b(0x12f));
    }, 0x7530), setInterval(_0x584083, 0x4e20), window[_0x53cab4(0xfd)](_0x53cab4(0x122), function () {
        const _0x5f4907 = _0x53cab4;
        _0x36e424(_0x5f4907(0x114));
    });
}()), (function () {
    'use strict';
    const _0x3d4ad3 = _0x5020;
    console[_0x3d4ad3(0x13a)](_0x3d4ad3(0xe9));
    let _0x1968ad = ![];
    GM_addStyle(_0x3d4ad3(0xd9));
    function _0xee0cfc() {
        const _0x587c78 = _0x3d4ad3;
        if (document[_0x587c78(0x115)]('scrape-float-btn'))
            return;
        const _0x104b4d = document[_0x587c78(0x87)](_0x587c78(0x11e));
        _0x104b4d['id'] = _0x587c78(0x120), _0x104b4d[_0x587c78(0xa6)] = _0x587c78(0xe1);
        const _0x360534 = document[_0x587c78(0x87)](_0x587c78(0x91));
        _0x360534['id'] = 'scrape-float-status', document[_0x587c78(0xdd)][_0x587c78(0xb4)](_0x104b4d), document[_0x587c78(0xdd)][_0x587c78(0xb4)](_0x360534);
        const _0x22d127 = _0x26c8f4 => {
                const _0x19e479 = _0x587c78;
                console[_0x19e479(0x13a)](_0x19e479(0x110) + _0x26c8f4), _0x360534[_0x19e479(0xa6)] = _0x26c8f4[_0x19e479(0x112)](/\n/g, _0x19e479(0x7d)), _0x360534[_0x19e479(0x93)][_0x19e479(0x11d)](_0x19e479(0xda)),
 clearTimeout(_0x360534[_0x19e479(0xb7)]), _0x360534[_0x19e479(0xb7)] = setTimeout(() => _0x360534[_0x19e479(0x93)][_0x19e479(0x103)](_0x19e479(0xda)), 0x1388);
            }, _0x27771c = _0xc95bce => new Promise(_0xc2b393 => setTimeout(_0xc2b393, _0xc95bce)), _0x56146c = () => {
                const _0x1785d8 = _0x587c78, _0x46f89d = document[_0x1785d8(0x137)](_0x1785d8(0xb0)), _0x3a0bd0 = [];
                _0x46f89d[_0x1785d8(0xfe)](_0x6e7ccc => {
                    const _0x51124b = _0x1785d8, _0x68a537 = _0x6e7ccc[_0x51124b(0x137)]('td');
                    if (_0x68a537[_0x51124b(0x92)] > 0x0) {
                        const _0x52d84d = _0x68a537[_0x68a537[_0x51124b(0x92)] - 0x1], _0x408063 = _0x52d84d[_0x51124b(0x137)](_0x51124b(0x13d));
                        for (const _0x2abcb1 of _0x408063) {
                            const _0x3ad59b = (_0x2abcb1[_0x51124b(0xec)] || _0x2abcb1[_0x51124b(0xdb)] || '')[_0x51124b(0x11b)]()[_0x51124b(0xd7)]();
                            if (_0x3ad59b === _0x51124b(0xa7) || _0x3ad59b === _0x51124b(0xd3)) {
                                _0x3a0bd0[_0x51124b(0xc6)](_0x2abcb1);
                                break;
                            }
                        }
                    }
                });
                if (_0x3a0bd0[_0x1785d8(0x92)] === 0x0)
                    return Array[_0x1785d8(0xbc)](document[_0x1785d8(0x137)](_0x1785d8(0xe5)))[_0x1785d8(0x7f)](_0x369e48 => {
                        const _0x23ba44 = _0x1785d8, _0x1bebfc = (_0x369e48['innerText'] || '')[_0x23ba44(0x11b)]()[_0x23ba44(0xd7)]();
                        return _0x1bebfc === _0x23ba44(0xa7) || _0x1bebfc === _0x23ba44(0xd3);
                    });
                return _0x3a0bd0;
            }, _0x1ea167 = () => {
                const _0x37c962 = _0x587c78, _0x370ac4 = document[_0x37c962(0x137)](_0x37c962(0x9d));
                if (_0x370ac4[_0x37c962(0x92)] > 0x0)
                    return _0x370ac4[_0x37c962(0x92)];
                const _0x48802e = document[_0x37c962(0x139)](_0x37c962(0x8d));
                if (_0x48802e) {
                    const _0x34702e = parseInt((_0x48802e[_0x37c962(0xec)] || '')[_0x37c962(0x112)](/\D/g, ''));
                    if (_0x34702e > 0x0)
                        return Math[_0x37c962(0x81)](_0x34702e / 0xa);
                }
                const _0x90c88a = document[_0x37c962(0x137)](_0x37c962(0xa8));
                if (_0x90c88a[_0x37c962(0x92)] > 0x0) {
                    let _0x3ea014 = 0x1;
                    return _0x90c88a[_0x37c962(0xfe)](_0x5a747d => {
                        const _0x3e819c = _0x37c962, _0x302d33 = parseInt(_0x5a747d[_0x3e819c(0xec)]);
                        if (!isNaN(_0x302d33) && _0x302d33 > _0x3ea014)
                            _0x3ea014 = _0x302d33;
                    }), _0x3ea014;
                }
                const _0x599c62 = document['querySelector'](_0x37c962(0x116));
                if (_0x599c62)
                    return 0x2;
                return 0x1;
            }, _0x3c43f0 = async _0x23e986 => {
                const _0x2d5e0f = _0x587c78;
                console[_0x2d5e0f(0x13a)](_0x2d5e0f(0x105), _0x23e986);
                const _0x1121f0 = document[_0x2d5e0f(0x137)](_0x2d5e0f(0xa8));
                for (const _0x45b186 of _0x1121f0) {
                    if (parseInt(_0x45b186[_0x2d5e0f(0xec)]) === _0x23e986)
                        return _0x45b186['click'](), console[_0x2d5e0f(0x13a)](_0x2d5e0f(0x95), _0x23e986), await _0x27771c(0x7d0), !![];
                }
                const _0x44358d = document['querySelector'](_0x2d5e0f(0x116));
                if (_0x44358d && !_0x44358d[_0x2d5e0f(0xa3)])
                    return _0x44358d[_0x2d5e0f(0xd6)](), console[_0x2d5e0f(0x13a)](_0x2d5e0f(0xee)), await _0x27771c(0x7d0), !![];
                return ![];
            }, _0x3dfa42 = [
                _0x587c78(0x140),
                _0x587c78(0xf9),
                _0x587c78(0xcf),
                _0x587c78(0x9e),
                _0x587c78(0x108),
                'pengguna',
                'halaman',
                _0x587c78(0xba),
                _0x587c78(0x130),
                'ubah',
                _0x587c78(0xce),
                _0x587c78(0x13c),
                _0x587c78(0x11f),
                _0x587c78(0x9f)
            ], _0x583e27 = [
                'periode\x20aplikasi',
                _0x587c78(0x100),
                _0x587c78(0xe8),
                _0x587c78(0xc2),
                _0x587c78(0x13c),
                _0x587c78(0x11f),
                _0x587c78(0x9f),
                _0x587c78(0xd3),
                _0x587c78(0x9e)
            ], _0x89e298 = (_0x1f2b8f, _0x2a5ed0) => {
                const _0x37993e = _0x587c78, _0x20a4be = _0x1f2b8f[_0x37993e(0xd7)]()[_0x37993e(0x11b)]();
                return _0x2a5ed0[_0x37993e(0x12e)](_0x104321 => _0x20a4be[_0x37993e(0x94)](_0x104321));
            }, _0x4153fa = () => {
                const _0x1aa222 = _0x587c78;
                let _0x50a945 = '', _0x47a7db = '';
                try {
                    const _0x353e5d = document[_0x1aa222(0xdd)]?.[_0x1aa222(0xec)] || '', _0x4286bd = [
                            /nama belakang\s*[:\-]\s*([A-Za-z][A-Za-z\s\.]{2,50})/i,
                            /nama lengkap\s*[:\-]\s*([A-Za-z][A-Za-z\s\.]{2,50})/i,
                            /nama\s*[:\-]\s*([A-Za-z][A-Za-z\s\.]{2,50})/i
                        ];
                    for (const _0x83af0e of _0x4286bd) {
                        const _0x5a128b = _0x353e5d[_0x1aa222(0xfa)](_0x83af0e);
                        if (_0x5a128b?.[0x1]) {
                            const _0x2c6a0c = _0x5a128b[0x1][_0x1aa222(0x11b)]()[_0x1aa222(0xbf)]('\x0a')[0x0][_0x1aa222(0x11b)]();
                            if (_0x2c6a0c[_0x1aa222(0x92)] >= 0x3 && !_0x2c6a0c[_0x1aa222(0x94)](':') && !_0x89e298(_0x2c6a0c, _0x3dfa42)) {
                                _0x50a945 = _0x2c6a0c;
                                break;
                            }
                        }
                    }
                    const _0x1f76b6 = [
                        /organisasi pelamar\s*[:\-]\s*([A-Za-z][^\n\(:]{3,50})/i,
                        /nama aplikasi\s*[:\-]\s*([A-Za-z][^\n\(:]{3,50})/i,
                        /apk\s*[:\-]\s*([A-Za-z][^\n\(:]{3,50})/i,
                        /perusahaan\s*[:\-]\s*([A-Za-z][^\n\(:]{3,50})/i,
                        /platform\s*[:\-]\s*([A-Za-z][^\n\(:]{3,50})/i
                    ];
                    for (const _0x2a4700 of _0x1f76b6) {
                        const _0x364365 = _0x353e5d['match'](_0x2a4700);
                        if (_0x364365?.[0x1]) {
                            const _0x1b46a8 = _0x364365[0x1][_0x1aa222(0x11b)]()[_0x1aa222(0xbf)]('(')[0x0][_0x1aa222(0x11b)]();
                            if (_0x1b46a8[_0x1aa222(0x92)] >= 0x3 && !_0x1b46a8['endsWith'](':') && !_0x89e298(_0x1b46a8, _0x583e27)) {
                                _0x47a7db = _0x1b46a8;
                                break;
                            }
                        }
                    }
                } catch (_0x55729e) {
                }
                return {
                    'nama': _0x50a945 || '-',
                    'apk': _0x47a7db || '-'
                };
            };
        let _0x3102a6 = null;
        const _0x277988 = navigator[_0x587c78(0x9a)][_0x587c78(0xe0)][_0x587c78(0xcd)](navigator[_0x587c78(0x9a)]);
        navigator[_0x587c78(0x9a)]['writeText'] = async function (_0x281f26) {
            const _0x40712a = _0x587c78;
            _0x3102a6 = _0x281f26, console[_0x40712a(0x13a)](_0x40712a(0xf4), _0x281f26);
            try {
                return await _0x277988(_0x281f26);
            } catch (_0x2bc242) {
                return Promise[_0x40712a(0xa4)]();
            }
        };
        const _0x5e7d1c = document[_0x587c78(0xf3)][_0x587c78(0xcd)](document);
        document[_0x587c78(0xf3)] = function (_0x3b6369, ..._0x314c75) {
            const _0x4ccd4e = _0x587c78;
            if (_0x3b6369 === _0x4ccd4e(0x7b)) {
                const _0x1751d8 = window[_0x4ccd4e(0xd8)](), _0x4cc6e7 = _0x1751d8 ? _0x1751d8[_0x4ccd4e(0xed)]() : '';
                if (_0x4cc6e7)
                    _0x3102a6 = _0x4cc6e7, console['log'](_0x4ccd4e(0xcb), _0x4cc6e7);
                else {
                    const _0x27a34c = document[_0x4ccd4e(0xca)];
                    if (_0x27a34c && (_0x27a34c['tagName'] === _0x4ccd4e(0xc4) || _0x27a34c[_0x4ccd4e(0x86)] === _0x4ccd4e(0x90))) {
                        const _0x3bdfeb = _0x27a34c[_0x4ccd4e(0x83)] || _0x27a34c[_0x4ccd4e(0xdb)] || '';
                        _0x3bdfeb && (_0x3102a6 = _0x3bdfeb, console[_0x4ccd4e(0x13a)](_0x4ccd4e(0x11a), _0x3bdfeb));
                    }
                }
            }
            return _0x5e7d1c(_0x3b6369, ..._0x314c75);
        }, console[_0x587c78(0x13a)]('[Scrape]\x20Hook\x20clipboard.writeText\x20+\x20execCommand\x20terpasang');
        const _0x236c3d = new MutationObserver(_0x3d5290 => {
            const _0x12a459 = _0x587c78;
            for (const _0x21d079 of _0x3d5290) {
                for (const _0xa155ca of _0x21d079[_0x12a459(0xc1)]) {
                    if (_0xa155ca[_0x12a459(0x86)] === _0x12a459(0xc4) || _0xa155ca[_0x12a459(0x86)] === _0x12a459(0x90)) {
                        const _0x27e127 = _0xa155ca[_0x12a459(0x83)] || '';
                        _0x27e127 && _0x27e127[_0x12a459(0x92)] >= 0x5 && (_0x3102a6 = _0x27e127, console[_0x12a459(0x13a)](_0x12a459(0x142), _0x27e127));
                    }
                }
            }
        });
        _0x236c3d[_0x587c78(0x145)](document[_0x587c78(0xdd)], {
            'childList': !![],
            'subtree': !![]
        });
        const _0x3f083b = _0x5ab5f0 => {
                const _0x14f163 = _0x587c78;
                try {
                    let _0x361b02 = _0x5ab5f0;
                    for (let _0xa29747 = 0x0; _0xa29747 < 0x8; _0xa29747++) {
                        if (_0x361b02 && _0x361b02[_0x14f163(0x127)]) {
                            const _0xfb40b7 = _0x361b02['__vue__'], _0x1de9f1 = _0x2aaec4 => {
                                    const _0x167547 = _0x14f163;
                                    if (!_0x2aaec4 || typeof _0x2aaec4 !== _0x167547(0x10e))
                                        return null;
                                    for (const _0x39783e of Object['keys'](_0x2aaec4)) {
                                        const _0x12e082 = _0x2aaec4[_0x39783e];
                                        if (typeof _0x12e082 === _0x167547(0x8b)) {
                                            const _0x3738f9 = _0x12e082[_0x167547(0x112)](/\D/g, '');
                                            if (/^(62|0)?8\d{7,13}$/[_0x167547(0xf5)](_0x3738f9) && _0x3738f9[_0x167547(0x92)] >= 0x9)
                                                return _0x3738f9;
                                        }
                                        if (typeof _0x12e082 === _0x167547(0x113)) {
                                            const _0x290cd9 = String(_0x12e082);
                                            if (/^8\d{7,13}$/[_0x167547(0xf5)](_0x290cd9))
                                                return _0x290cd9;
                                        }
                                    }
                                    return null;
                                }, _0x17f8a0 = _0x1de9f1(_0xfb40b7[_0x14f163(0x9b)]) || _0x1de9f1(_0xfb40b7[_0x14f163(0x128)]) || _0x1de9f1(_0xfb40b7[_0x14f163(0xa2)]) || _0x1de9f1(_0xfb40b7);

                            if (_0x17f8a0)
                                return _0x17f8a0;
                        }
                        _0x361b02 = _0x361b02 && _0x361b02[_0x14f163(0xbd)];
                    }
                } catch (_0x2fa0b0) {
                }
                return null;
            }, _0x2bd34c = async () => {
                const _0x23d245 = _0x587c78;
                try {
                    const _0x1821bd = Array[_0x23d245(0xbc)](document[_0x23d245(0x137)](_0x23d245(0x79)))[_0x23d245(0x85)](_0x81730f => (_0x81730f[_0x23d245(0xec)] || _0x81730f[_0x23d245(0xdb)] || '')[_0x23d245(0x11b)]()['t'+
'oLowerCase']() === 'kontak\x20darurat');
                    if (!_0x1821bd)
                        return console[_0x23d245(0x13a)](_0x23d245(0x13b)), [
                            '-',
                            '-'
                        ];
                    _0x1821bd[_0x23d245(0xd6)]();
                    let _0x4afe9e = ![];
                    for (let _0x387ad8 = 0x0; _0x387ad8 < 0x14; _0x387ad8++) {
                        await _0x27771c(0x1f4);
                        const _0x573021 = Array[_0x23d245(0xbc)](document[_0x23d245(0x137)](_0x23d245(0xa9)))[_0x23d245(0x12e)](_0x58fc44 => (_0x58fc44[_0x23d245(0xec)] || _0x58fc44[_0x23d245(0xdb)] || '')[_0x23d245(0x11b)]()[_0x23d245(0xd7)]() === _0x23d245(0x102));

                        if (_0x573021) {
                            _0x4afe9e = !![];
                            break;
                        }
                    }
                    if (!_0x4afe9e)
                        return console[_0x23d245(0x13a)](_0x23d245(0xea)), [
                            '-',
                            '-'
                        ];
                    await _0x27771c(0x258);
                    const _0x5633ea = () => {
                            const _0xdd8682 = _0x23d245, _0x245188 = Array[_0xdd8682(0xbc)](document[_0xdd8682(0x137)](_0xdd8682(0xa9)))[_0xdd8682(0x7f)](_0x394057 => {
                                    const _0xcd4ecb = _0xdd8682, _0x165f45 = (_0x394057['innerText'] || _0x394057[_0xcd4ecb(0xdb)] || '')['trim']()[_0xcd4ecb(0xd7)]();
                                    if (_0x165f45 !== _0xcd4ecb(0x102))
                                        return ![];
                                    if (_0x394057[_0xcd4ecb(0xf0)] === null)
                                        return ![];
                                    const _0x59df4e = _0x394057['getBoundingClientRect']();
                                    return _0x59df4e[_0xcd4ecb(0xb8)] >= 0x0 && _0x59df4e[_0xcd4ecb(0xb8)] < window['innerHeight'];
                                }), _0x4ca608 = [];
                            for (const _0x107396 of _0x245188) {
                                const _0x15a64b = _0x107396[_0xdd8682(0x125)](), _0x336a54 = _0x15a64b[_0xdd8682(0xb8)] + window[_0xdd8682(0x13f)], _0x16f895 = _0x15a64b[_0xdd8682(0x12b)] + window[_0xdd8682(0xfc)],
 _0x4ccc09 = _0x4ca608[_0xdd8682(0x85)](_0x425bbc => Math[_0xdd8682(0x135)](_0x425bbc['y'] - _0x336a54) < 0x1e);
                                _0x4ccc09 ? _0x16f895 > _0x4ccc09['x'] && (_0x4ccc09['el'] = _0x107396, _0x4ccc09['x'] = _0x16f895) : _0x4ca608[_0xdd8682(0xc6)]({
                                    'y': _0x336a54,
                                    'x': _0x16f895,
                                    'el': _0x107396
                                });
                            }
                            _0x4ca608[_0xdd8682(0x84)]((_0x553e70, _0x5d48be) => _0x553e70['y'] - _0x5d48be['y']);
                            const _0x36d9d1 = _0x4ca608[_0xdd8682(0xaf)](_0x5c3279 => _0x5c3279['el']);
                            return console[_0xdd8682(0x13a)]('[Scrape]\x20Tombol\x20visible\x20per\x20baris:', _0x36d9d1[_0xdd8682(0xaf)]((_0x41fd08, _0x1f6fe5) => {
                                const _0x326956 = _0xdd8682, _0xb9cd76 = _0x41fd08[_0x326956(0x125)]();
                                return '[' + _0x1f6fe5 + _0x326956(0x119) + Math[_0x326956(0x134)](_0xb9cd76['top']) + _0x326956(0xf1) + Math['round'](_0xb9cd76[_0x326956(0x12b)]);
                            })[_0xdd8682(0x9c)](_0xdd8682(0xc5))), _0x36d9d1;
                        }, _0x3157c9 = [
                            null,
                            null
                        ];
                    for (let _0x41e593 = 0x1; _0x41e593 <= 0x2; _0x41e593++) {
                        let _0x5b9087 = ![];
                        for (let _0x20b778 = 0x0; _0x20b778 < 0x3 && !_0x5b9087; _0x20b778++) {
                            try {
                                const _0x13540c = _0x5633ea();
                                console[_0x23d245(0x13a)](_0x23d245(0x131), _0x13540c[_0x23d245(0x92)], '|\x20klik\x20index:', _0x41e593);
                                const _0xd0a27 = _0x13540c[_0x41e593];
                                if (!_0xd0a27) {
                                    console[_0x23d245(0x13a)](_0x23d245(0x118), _0x41e593, _0x23d245(0xc0));
                                    break;
                                }
                                _0xd0a27[_0x23d245(0x121)]({ 'block': _0x23d245(0x136) }), await _0x27771c(0x12c), _0x3102a6 = null, _0xd0a27[_0x23d245(0xd6)]();
                                for (let _0x1f4589 = 0x0; _0x1f4589 < 0xf; _0x1f4589++) {
                                    await _0x27771c(0xc8);
                                    if (_0x3102a6 !== null)
                                        break;
                                }
                                console[_0x23d245(0x13a)](_0x23d245(0x106), _0x41e593, _0x23d245(0x12c), _0x20b778, '=', _0x3102a6);
                                if (_0x3102a6) {
                                    const _0x47d734 = _0x3102a6[_0x23d245(0x112)](/\D/g, '');
                                    _0x47d734[_0x23d245(0x92)] >= 0x8 && (_0x3157c9[_0x41e593 - 0x1] = _0x47d734, _0x5b9087 = !![], await _0x27771c(0x190));
                                }
                            } catch (_0x4d1936) {
                                console[_0x23d245(0x13a)](_0x23d245(0x10f), _0x41e593, ':', _0x4d1936['message']), await _0x27771c(0x1f4);
                            }
                        }
                        if (!_0x5b9087)
                            _0x3157c9[_0x41e593 - 0x1] = '-';
                    }
                    return [
                        _0x3157c9[0x0] || '-',
                        _0x3157c9[0x1] || '-'
                    ];
                } catch (_0x118f3c) {
                    return console[_0x23d245(0x13a)](_0x23d245(0x124), _0x118f3c[_0x23d245(0x12d)]), [
                        '-',
                        '-'
                    ];
                }
            }, _0x4bde3a = _0xf68891 => {
                const _0x70f572 = _0x587c78, _0x230925 = {}, _0x5b8fcb = _0xf68891['filter'](_0x1d832d => {
                        const _0x5023cc = _0x5020;
                        if (!_0x1d832d[_0x5023cc(0xdf)] || _0x1d832d[_0x5023cc(0xdf)] === '-')
                            return ![];
                        if (_0x1d832d[_0x5023cc(0xdf)][_0x5023cc(0x94)](':'))
                            return ![];
                        const _0x8ae970 = _0x1d832d[_0x5023cc(0xdf)][_0x5023cc(0xd7)]()[_0x5023cc(0x11b)]() + _0x5023cc(0x8e) + (_0x1d832d['hp'] || '-')[_0x5023cc(0x11b)]();
                        if (_0x230925[_0x8ae970])
                            return ![];
                        return _0x230925[_0x8ae970] = !![], !![];
                    }), _0x23ba72 = [[
                            'NO',
                            _0x70f572(0x80),
                            _0x70f572(0x7c),
                            _0x70f572(0x10c)
                        ]];
                _0x5b8fcb[_0x70f572(0xfe)]((_0x3a8582, _0x415923) => {
                    const _0x56a065 = _0x70f572;
                    _0x23ba72[_0x56a065(0xc6)]([
                        _0x415923 + 0x1,
                        _0x3a8582[_0x56a065(0xdf)],
                        _0x3a8582['hp'],
                        _0x3a8582[_0x56a065(0xa1)]
                    ]);
                });
                const _0x57a76b = XLSX[_0x70f572(0x133)][_0x70f572(0x126)](), _0x33fd13 = XLSX[_0x70f572(0x133)][_0x70f572(0xf8)](_0x23ba72);
                _0x33fd13[_0x70f572(0xd4)] = [
                    { 'wch': 0x5 },
                    { 'wch': 0x23 },
                    { 'wch': 0x14 },
                    { 'wch': 0x1e }
                ], XLSX[_0x70f572(0x133)][_0x70f572(0x117)](_0x57a76b, _0x33fd13, _0x70f572(0xdc));
                const _0x3c0b67 = _0x70f572(0x107) + new Date()[_0x70f572(0x10b)]()[_0x70f572(0xbf)]('T')[0x0] + _0x70f572(0xae);
                return XLSX[_0x70f572(0x98)](_0x57a76b, _0x3c0b67), _0x5b8fcb[_0x70f572(0x92)];
            };
        _0x104b4d[_0x587c78(0xfd)](_0x587c78(0xd6), async function () {
            const _0x406b91 = _0x587c78;
            if (_0x1968ad) {
                _0x22d127(_0x406b91(0xd0));
                return;
            }
            _0x1968ad = !![], _0x104b4d[_0x406b91(0xa3)] = !![], _0x104b4d[_0x406b91(0xa6)] = _0x406b91(0xff);
            const _0x567b28 = [];
            let _0x4171d0 = 0x1;
            try {
                const _0x21fc0f = _0x1ea167();
                _0x22d127(_0x406b91(0x11c) + _0x21fc0f);
                for (let _0x5984c8 = 0x1; _0x5984c8 <= _0x21fc0f; _0x5984c8++) {
                    _0x4171d0 = _0x5984c8;
                    if (_0x5984c8 > 0x1) {
                        const _0x270eff = await _0x3c43f0(_0x5984c8);
                        if (!_0x270eff) {
                            _0x22d127(_0x406b91(0xb5));
                            break;
                        }
                    }
                    _0x104b4d[_0x406b91(0xa6)] = '⏳\x20Hal\x20' + _0x5984c8 + '/' + _0x21fc0f, await _0x27771c(0x5dc);
                    const _0x394b49 = _0x56146c()['length'];
                    _0x22d127(_0x406b91(0x13e) + _0x5984c8 + ':\x20' + _0x394b49 + _0x406b91(0xf6));
                    for (let _0x11b807 = 0x0; _0x11b807 < _0x394b49; _0x11b807++) {
                        try {
                            const _0x380cd1 = _0x56146c()[_0x11b807];
                            if (!_0x380cd1)
                                continue;
                            const _0xd3745a = window[_0x406b91(0xe4)][_0x406b91(0x96)];
                            _0x380cd1[_0x406b91(0xd6)]();
                            let _0x4f3c38 = ![];
                            for (let _0x3e1ee7 = 0x0; _0x3e1ee7 < 0x1e; _0x3e1ee7++) {
                                await _0x27771c(0x12c);
                                if (window[_0x406b91(0xe4)][_0x406b91(0x96)] !== _0xd3745a) {
                                    _0x4f3c38 = !![];
                                    break;
                                }
                            }
                            if (!_0x4f3c38) {
                                console[_0x406b91(0x13a)](_0x406b91(0xf7));
                                continue;
                            }
                            let _0x4fc8a4 = 0x0;
                            while (_0x4fc8a4 < 0x19) {
                                if (document[_0x406b91(0xdd)]?.[_0x406b91(0xec)]?.[_0x406b91(0x94)](_0x406b91(0xdf)))
                                    break;
                                await _0x27771c(0x12c), _0x4fc8a4++;
                            }
                            await _0x27771c(0x320);
                            const {
                                    nama: _0x33d8c0,
                                    apk: _0x1b2862
                                } = _0x4153fa(), [_0x467cf2, _0x5635e3] = await _0x2bd34c();
                            _0x567b28[_0x406b91(0xc6)]({
                                'nama': _0x33d8c0,
                                'hp': _0x467cf2,
                                'apk': _0x1b2862
                            }), _0x567b28[_0x406b91(0xc6)]({
                                'nama': _0x33d8c0,
                                'hp': _0x5635e3,
                                'apk': _0x1b2862
                            }), _0x22d127(_0x406b91(0x101) + (_0x567b28['length'] - 0x1) + '&' + _0x567b28[_0x406b91(0x92)] + ']\x20' + _0x33d8c0 + _0x406b91(0xd2) + _0x467cf2 + _0x406b91(0xe3) + _0x5635e3),
 sessionStorage[_0x406b91(0xc7)](_0x406b91(0x8f), _0x4171d0);
                            const _0x13de83 = window['location'][_0x406b91(0x96)];
                            history[_0x406b91(0x7a)]();
                            for (let _0x46f743 = 0x0; _0x46f743 < 0x1e; _0x46f743++) {
                                await _0x27771c(0x12c);
                                if (window[_0x406b91(0xe4)][_0x406b91(0x96)] !== _0x13de83)
                                    break;
                            }
                            let _0xca0351 = ![];
                            for (let _0xd5eeb2 = 0x0; _0xd5eeb2 < 0x1e; _0xd5eeb2++) {
                                await _0x27771c(0x12c);
                                if (_0x56146c()[_0x406b91(0x92)] > 0x0) {
                                    _0xca0351 = !![];
                                    break;
                                }
                            }
                            await _0x27771c(0x1f4);
                        } catch (_0x3b403f) {
                            _0x22d127(_0x406b91(0x8a) + (_0x11b807 + 0x1) + ':\x20' + _0x3b403f[_0x406b91(0x12d)]);
                            try {
                                history[_0x406b91(0x7a)](), await _0x27771c(0x3e8), await _0x3c43f0(_0x4171d0), await _0x27771c(0x3e8);
                            } catch (_0x541894) {
                            }
                        }
                    }
                }
            } catch (_0x5e13c2) {
                _0x22d127('❌\x20Error\x20fatal:\x20' + _0x5e13c2['message']);
            }
            if (_0x567b28[_0x406b91(0x92)] > 0x0) {
                const _0x589f71 = _0x4bde3a(_0x567b28);
                _0x104b4d[_0x406b91(0xa6)] = '✅\x20' + _0x589f71 + _0x406b91(0xf6), alert(_0x406b91(0xf2) + _0x589f71 + '\x20baris\x20kontak\x20darurat\x20berhasil\x20disimpan\x20se'+
'bagai\x20.xlsx!');
            } else
                _0x104b4d[_0x406b91(0xa6)] = _0x406b91(0x144), alert(_0x406b91(0x10a));
            _0x104b4d[_0x406b91(0xa3)] = ![], _0x1968ad = ![], sessionStorage[_0x406b91(0x138)]('scrape_current_page'), setTimeout(() => {
                const _0x5d8a4f = _0x406b91;
                _0x104b4d[_0x5d8a4f(0xa6)] = _0x5d8a4f(0xe1);
            }, 0xbb8);
        });
    }
    function _0x3589a5() {
        const _0x56cd78 = _0x3d4ad3;
        document[_0x56cd78(0xdd)] && _0xee0cfc();
        const _0x16d483 = new MutationObserver(() => {
                const _0x131d52 = _0x56cd78;
                !document[_0x131d52(0x115)](_0x131d52(0x120)) && document[_0x131d52(0xdd)] && (console[_0x131d52(0x13a)](_0x131d52(0xd1)), _0xee0cfc());
            }), _0x3ea8b6 = document[_0x56cd78(0xdd)] || document[_0x56cd78(0x109)];
        _0x16d483[_0x56cd78(0x145)](_0x3ea8b6, {
            'childList': !![],
            'subtree': !![]
        });
    }
    document[_0x3d4ad3(0xb2)] === _0x3d4ad3(0xb9) ? document[_0x3d4ad3(0xfd)](_0x3d4ad3(0x129), _0x3589a5) : _0x3589a5();
}()));