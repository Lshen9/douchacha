var hexcase = 0x0
    , b64pad = ''
    , chrsz = 0x8;
var binb2hexeval = 'DOUCHACHA';
var xx = function sh(_0x118e09) {
    var _0x49e162 = {
        'ardHD': function (_0x796a36, _0xddb4c0) {
            return _0x796a36(_0xddb4c0);
        },
        'VylDE': function (_0x1c82f2, _0x54fc5f) {
            return _0x1c82f2 + _0x54fc5f;
        },
        'tCFXA': function (_0x2fdee6) {
            return _0x2fdee6();
        },
        'FjJfc': function (_0x12727b, _0x2f12c5) {
            return _0x12727b + _0x2f12c5;
        }
    };

    function _0x3263bc() {
        // return window["location"]["host"];
        return "www.douchacha.com";
    }

    var _0x2765c9 = _0x49e162["ardHD"](h, _0x49e162["VylDE"](_0x118e09, _0x49e162["tCFXA"](_0x3263bc)))["toString"]();
    _0x2765c9 = _0x49e162["ardHD"](h, _0x49e162["FjJfc"](_0x2765c9["substring"](0x8, 0x10), binb2hexeval))["toString"]();
    return _0x2765c9["substring"](0x0, 0x10);
}
var get_douchacha_sign = function (sig_str) {
    return xx(sig_str);
}

function str2binb(_0x52f560) {
    var _0xb5f372 = {
        'PtCNe': function (_0x56fbaa, _0x36d9b7) {
            return _0x56fbaa - _0x36d9b7;
        },
        'jZsiy': function (_0x5eed0b, _0x3dc63a) {
            return _0x5eed0b << _0x3dc63a;
        },
        'imtFl': function (_0x59ae4f, _0x13318c) {
            return _0x59ae4f < _0x13318c;
        },
        'JRCzz': function (_0x418a27, _0x4c0720) {
            return _0x418a27 * _0x4c0720;
        },
        'NmvzS': function (_0x53d830, _0x1a9db6) {
            return _0x53d830 >> _0x1a9db6;
        },
        'IabpJ': function (_0x54c8b8, _0x3e455a) {
            return _0x54c8b8 << _0x3e455a;
        },
        'oorKC': function (_0x46dd60, _0x2a5234) {
            return _0x46dd60 & _0x2a5234;
        },
        'oOFAS': function (_0x24853b, _0x36d728) {
            return _0x24853b / _0x36d728;
        },
        'mjRMx': function (_0x4ca834, _0x5f2432) {
            return _0x4ca834 % _0x5f2432;
        }
    };
    for (var _0x589bab = [], _0x16534c = _0xb5f372["PtCNe"](_0xb5f372["jZsiy"](0x1, chrsz), 0x1), _0x22d76e = 0x0; _0xb5f372["imtFl"](_0x22d76e, _0xb5f372["JRCzz"](_0x52f560["length"], chrsz)); _0x22d76e += chrsz)
        _0x589bab[_0xb5f372["NmvzS"](_0x22d76e, 0x5)] |= _0xb5f372["IabpJ"](_0xb5f372["oorKC"](_0x52f560["charCodeAt"](_0xb5f372["oOFAS"](_0x22d76e, chrsz)), _0x16534c), _0xb5f372["PtCNe"](0x18, _0xb5f372["mjRMx"](_0x22d76e, 0x20)));
    return _0x589bab;
}

function safe_add(_0x23fe36, _0x31b80e) {
    var _0x425f6e = {
        'bAkrW': function (_0x358787, _0x407c7e) {
            return _0x358787 + _0x407c7e;
        },
        'CSzXY': function (_0x44ca5d, _0x2a8e73) {
            return _0x44ca5d & _0x2a8e73;
        },
        'XIGjI': function (_0x28de4e, _0x2804d8) {
            return _0x28de4e | _0x2804d8;
        },
        'jbnXd': function (_0xf45794, _0x7a8651) {
            return _0xf45794 << _0x7a8651;
        },
        'BTKJS': function (_0x2949c4, _0x485036) {
            return _0x2949c4 + _0x485036;
        },
        'cQUbH': function (_0x219856, _0x81f095) {
            return _0x219856 + _0x81f095;
        },
        'NSUTi': function (_0x1d0545, _0x512335) {
            return _0x1d0545 >> _0x512335;
        },
        'MaJqG': function (_0x2b582c, _0x3fc140) {
            return _0x2b582c & _0x3fc140;
        }
    };
    var _0xf30976 = _0x425f6e["bAkrW"](_0x425f6e["CSzXY"](_0x23fe36, 0xffff), _0x425f6e["CSzXY"](_0x31b80e, 0xffff));
    return _0x425f6e["XIGjI"](_0x425f6e["jbnXd"](_0x425f6e["BTKJS"](_0x425f6e["cQUbH"](_0x425f6e["NSUTi"](_0x23fe36, 0x10), _0x425f6e["NSUTi"](_0x31b80e, 0x10)), _0x425f6e["NSUTi"](_0xf30976, 0x10)), 0x10), _0x425f6e["MaJqG"](_0xf30976, 0xffff));
}

function rol(_0x5c5f30, _0x17cdea) {
    var _0x5b5c71 = {
        'PZKeU': function (_0x16ce06, _0x5d6663) {
            return _0x16ce06 | _0x5d6663;
        },
        'DTVCl': function (_0x69f95b, _0x1a23ce) {
            return _0x69f95b << _0x1a23ce;
        },
        'dnfyt': function (_0x152dca, _0x356fe8) {
            return _0x152dca >>> _0x356fe8;
        },
        'NnHYz': function (_0x81f613, _0x25e551) {
            return _0x81f613 - _0x25e551;
        }
    };
    return _0x5b5c71["PZKeU"](_0x5b5c71["DTVCl"](_0x5c5f30, _0x17cdea), _0x5b5c71["dnfyt"](_0x5c5f30, _0x5b5c71["NnHYz"](0x20, _0x17cdea)));
}

function core_ha(_0x360212, _0x442865) {
    var _0x5b7ffa = {
        'sVsUX': function (_0x3750fe, _0x2df843) {
            return _0x3750fe >> _0x2df843;
        },
        'cBBUv': function (_0x466a17, _0x462bc7) {
            return _0x466a17 << _0x462bc7;
        },
        'CWWcV': function (_0xc3ed57, _0x4ca821) {
            return _0xc3ed57 - _0x4ca821;
        },
        'SfcQE': function (_0x331cd8, _0x2f1177) {
            return _0x331cd8 % _0x2f1177;
        },
        'rXbTy': function (_0x1d364d, _0x5d8bac) {
            return _0x1d364d + _0x5d8bac;
        },
        'XIsWI': function (_0xb4b3f0, _0x25e9c7) {
            return _0xb4b3f0 << _0x25e9c7;
        },
        'akZNc': function (_0x407e18, _0x47393e) {
            return _0x407e18 + _0x47393e;
        },
        'eJBPd': function (_0x8aebe, _0x541a27) {
            return _0x8aebe(_0x541a27);
        },
        'pnuyS': function (_0xb06eb5, _0x3cbbd5) {
            return _0xb06eb5 < _0x3cbbd5;
        },
        'WkbLb': "3|0|2|5|4|1",
        'DCvVw': function (_0x52ef5e, _0x4bf1bd, _0x5d91be) {
            return _0x52ef5e(_0x4bf1bd, _0x5d91be);
        },
        'xIHLz': function (_0x5449ca, _0x341752, _0x30ba5e) {
            return _0x5449ca(_0x341752, _0x30ba5e);
        },
        'WOCTN': function (_0xbd82c, _0x279c95) {
            return _0xbd82c > _0x279c95;
        },
        'vNHRr': "2|5|4|1|3|6|0",
        'QEima': function (_0x531e57, _0x3147a7) {
            return _0x531e57 > _0x3147a7;
        },
        'OnYQo': function (_0xddf7b5, _0x49587e) {
            return _0xddf7b5 + _0x49587e;
        },
        'Hivni': function (_0xd71410, _0x1b9c73) {
            return _0xd71410 ^ _0x1b9c73;
        },
        'TSZeT': function (_0x581e84, _0xd52763) {
            return _0x581e84 ^ _0xd52763;
        },
        'wxnTg': function (_0x1300a3, _0x171d65) {
            return _0x1300a3 ^ _0x171d65;
        },
        'xrTgV': function (_0x1c6ebb, _0x49b595) {
            return _0x1c6ebb - _0x49b595;
        },
        'mVLhS': function (_0x15ea77, _0x41f419) {
            return _0x15ea77 - _0x41f419;
        },
        'Hydca': function (_0x5c25f7, _0x2af4f5, _0x32201e) {
            return _0x5c25f7(_0x2af4f5, _0x32201e);
        },
        'Bsdcp': function (_0xb868a9, _0x1ea321, _0x3822e1) {
            return _0xb868a9(_0x1ea321, _0x3822e1);
        },
        'zmqAc': function (_0x230390, _0xb0704d, _0x1da8f2, _0x1079c5, _0x4f8103) {
            return _0x230390(_0xb0704d, _0x1da8f2, _0x1079c5, _0x4f8103);
        },
        'FQOZU': function (_0x4761be, _0x2a8afd) {
            return _0x4761be(_0x2a8afd);
        },
        'COPfS': function (_0xa9bbe, _0x56f62b, _0x393c6e) {
            return _0xa9bbe(_0x56f62b, _0x393c6e);
        },
        'JoKWn': function (_0x34c555, _0x1c5d5d, _0x18edb5) {
            return _0x34c555(_0x1c5d5d, _0x18edb5);
        }
    };
    _0x360212[_0x5b7ffa["sVsUX"](_0x442865, 0x5)] |= _0x5b7ffa["cBBUv"](0x80, _0x5b7ffa["CWWcV"](0x18, _0x5b7ffa["SfcQE"](_0x442865, 0x20)));
    _0x360212[_0x5b7ffa["rXbTy"](_0x5b7ffa["XIsWI"](_0x5b7ffa["sVsUX"](_0x5b7ffa["akZNc"](_0x442865, 0x40), 0x9), 0x4), 0xf)] = _0x442865;
    for (var _0xb73c58 = _0x5b7ffa["eJBPd"](Array, 0x50), _0x4492ef = 0x67452302, _0x145844 = -0x10325477, _0x15d096 = -0x67452302, _0x4e9ed9 = 0x10325477, _0x3f06af = -0x3c2d1e10, _0x566bd = 0x0; _0x5b7ffa["pnuyS"](_0x566bd, _0x360212["length"]); _0x566bd += 0x10) {
        var _0x250820 = _0x5b7ffa["WkbLb"]["split"]('|')
            , _0x3b87bd = 0x0;
        while (!![]) {
            switch (_0x250820[_0x3b87bd++]) {
                case '0':
                    _0x4492ef = _0x5b7ffa["DCvVw"](safe_add, _0x4492ef, _0x388b8b);
                    continue;
                case '1':
                    _0x3f06af = _0x5b7ffa["DCvVw"](safe_add, _0x3f06af, _0x5b18f9);
                    continue;
                case '2':
                    _0x145844 = _0x5b7ffa["xIHLz"](safe_add, _0x145844, _0x5f458a);
                    continue;
                case '3':
                    for (var _0x388b8b = _0x4492ef, _0x5f458a = _0x145844, _0x45b256 = _0x15d096, _0xa15ee1 = _0x4e9ed9, _0x5b18f9 = _0x3f06af, _0x1a4abd = 0x0; _0x5b7ffa["WOCTN"](0x50, _0x1a4abd); _0x1a4abd++) {
                        var _0x19a447 = _0x5b7ffa["vNHRr"]["split"]('|')
                            , _0x2a5147 = 0x0;
                        while (!![]) {
                            switch (_0x19a447[_0x2a5147++]) {
                                case '0':
                                    _0x4492ef = _0x212931;
                                    continue;
                                case '1':
                                    _0x4e9ed9 = _0x15d096;
                                    continue;
                                case '2':
                                    _0xb73c58[_0x1a4abd] = _0x5b7ffa["QEima"](0x10, _0x1a4abd) ? _0x360212[_0x5b7ffa["OnYQo"](_0x566bd, _0x1a4abd)] : _0x5b7ffa["xIHLz"](rol, _0x5b7ffa["Hivni"](_0x5b7ffa["TSZeT"](_0x5b7ffa["wxnTg"](_0xb73c58[_0x5b7ffa["xrTgV"](_0x1a4abd, 0x3)], _0xb73c58[_0x5b7ffa["xrTgV"](_0x1a4abd, 0x8)]), _0xb73c58[_0x5b7ffa["mVLhS"](_0x1a4abd, 0xe)]), _0xb73c58[_0x5b7ffa["mVLhS"](_0x1a4abd, 0x10)]), 0x1);
                                    continue;
                                case '3':
                                    _0x15d096 = _0x5b7ffa["Hydca"](rol, _0x145844, 0x1e);
                                    continue;
                                case '4':
                                    _0x3f06af = _0x4e9ed9;
                                    continue;
                                case '5':
                                    var _0x212931 = _0x5b7ffa["Hydca"](safe_add, _0x5b7ffa["Bsdcp"](safe_add, _0x5b7ffa["Bsdcp"](rol, _0x4492ef, 0x5), _0x5b7ffa["zmqAc"](ha_ft, _0x1a4abd, _0x145844, _0x15d096, _0x4e9ed9)), _0x5b7ffa["Bsdcp"](safe_add, _0x5b7ffa["Bsdcp"](safe_add, _0x3f06af, _0xb73c58[_0x1a4abd]), _0x5b7ffa["FQOZU"](ha_kt, _0x1a4abd)));
                                    continue;
                                case '6':
                                    _0x145844 = _0x4492ef;
                                    continue;
                            }
                            break;
                        }
                    }
                    continue;
                case '4':
                    _0x4e9ed9 = _0x5b7ffa["COPfS"](safe_add, _0x4e9ed9, _0xa15ee1);
                    continue;
                case '5':
                    _0x15d096 = _0x5b7ffa["JoKWn"](safe_add, _0x15d096, _0x45b256);
                    continue;
            }
            break;
        }
    }
    return [_0x4492ef, _0x145844, _0x15d096, _0x4e9ed9, _0x3f06af];
}

function ha_ft(_0x3acb44, _0x3a0e87, _0x494ac9, _0x27376e) {
    var _0x57e8cd = {
        'lyUYw': function (_0x588bd3, _0x1c0ad5) {
            return _0x588bd3 > _0x1c0ad5;
        },
        'FnEDy': function (_0x3387ac, _0x2b247f) {
            return _0x3387ac | _0x2b247f;
        },
        'mByZr': function (_0x1aa736, _0x5d3caa) {
            return _0x1aa736 & _0x5d3caa;
        },
        'JKWob': function (_0x1a9838, _0x27849d) {
            return _0x1a9838 ^ _0x27849d;
        },
        'suOnS': function (_0x4becb1, _0x56ceb6) {
            return _0x4becb1 ^ _0x56ceb6;
        },
        'iQTTR': function (_0x1c60cc, _0x42ee76) {
            return _0x1c60cc > _0x42ee76;
        },
        'IoQwz': function (_0xb37564, _0x221bba) {
            return _0xb37564 | _0x221bba;
        },
        'HGLPh': function (_0x1428fa, _0x35dcc5) {
            return _0x1428fa & _0x35dcc5;
        },
        'gMkHU': function (_0x3f47a1, _0x37e6b6) {
            return _0x3f47a1 ^ _0x37e6b6;
        }
    };
    return _0x57e8cd["lyUYw"](0x14, _0x3acb44) ? _0x57e8cd["FnEDy"](_0x57e8cd["mByZr"](_0x3a0e87, _0x494ac9), _0x57e8cd["mByZr"](~_0x3a0e87, _0x27376e)) : _0x57e8cd["lyUYw"](0x28, _0x3acb44) ? _0x57e8cd["JKWob"](_0x57e8cd["suOnS"](_0x3a0e87, _0x494ac9), _0x27376e) : _0x57e8cd["iQTTR"](0x3c, _0x3acb44) ? _0x57e8cd["IoQwz"](_0x57e8cd["IoQwz"](_0x57e8cd["mByZr"](_0x3a0e87, _0x494ac9), _0x57e8cd["mByZr"](_0x3a0e87, _0x27376e)), _0x57e8cd["HGLPh"](_0x494ac9, _0x27376e)) : _0x57e8cd["gMkHU"](_0x57e8cd["gMkHU"](_0x3a0e87, _0x494ac9), _0x27376e);
}

function ha_kt(_0x24d20d) {
    var _0x50bb54 = {
        'SMSDj': function (_0x52c22d, _0x362859) {
            return _0x52c22d > _0x362859;
        }
    };
    return _0x50bb54["SMSDj"](0x14, _0x24d20d) ? 0x5a827999 : _0x50bb54["SMSDj"](0x28, _0x24d20d) ? 0x6ed9eba2 : _0x50bb54["SMSDj"](0x3c, _0x24d20d) ? -0x70e44324 : -0x359d3e2a;
}

function binb2hex(_0x212733) {
    var _0x1a17de = {
        'Sqwmc': "0123456789ABCDEF",
        'lnUci': "0123456789abcdef",
        'nFepU': function (_0x55c6dd, _0x4b3f88) {
            return _0x55c6dd < _0x4b3f88;
        },
        'hDRMY': function (_0x2e324e, _0x535cb3) {
            return _0x2e324e * _0x535cb3;
        },
        'GSiLD': function (_0x127ff9, _0x2ab6e2) {
            return _0x127ff9 + _0x2ab6e2;
        },
        'xRJUF': function (_0x173e8f, _0x3f1cc3) {
            return _0x173e8f & _0x3f1cc3;
        },
        'WOvmw': function (_0x5b0807, _0xe25f29) {
            return _0x5b0807 >> _0xe25f29;
        },
        'FaPnQ': function (_0x5509c1, _0x5e42e0) {
            return _0x5509c1 >> _0x5e42e0;
        },
        'AfUKs': function (_0x1ebea7, _0x3fdc27) {
            return _0x1ebea7 + _0x3fdc27;
        },
        'UDtVt': function (_0x25b744, _0x33354a) {
            return _0x25b744 - _0x33354a;
        },
        'waowK': function (_0x41e53f, _0x10a58d) {
            return _0x41e53f % _0x10a58d;
        },
        'NCUku': function (_0x451f1e, _0x3b8682) {
            return _0x451f1e >> _0x3b8682;
        },
        'fCfNq': function (_0x1363f2, _0xdcfa4) {
            return _0x1363f2 >> _0xdcfa4;
        },
        'ioCYu': function (_0x195a4c, _0x1a243f) {
            return _0x195a4c * _0x1a243f;
        },
        'toBOx': function (_0xb28bdf, _0x4cd759) {
            return _0xb28bdf - _0x4cd759;
        }
    };
    for (var _0x2ef997 = hexcase ? _0x1a17de["Sqwmc"] : _0x1a17de["lnUci"], _0x484789 = '', _0x1b0e34 = 0x0; _0x1a17de["nFepU"](_0x1b0e34, _0x1a17de["hDRMY"](0x4, _0x212733["length"])); _0x1b0e34++)
        _0x484789 += _0x1a17de["GSiLD"](_0x2ef997["charAt"](_0x1a17de["xRJUF"](_0x1a17de["WOvmw"](_0x212733[_0x1a17de["FaPnQ"](_0x1b0e34, 0x2)], _0x1a17de["AfUKs"](_0x1a17de["hDRMY"](0x8, _0x1a17de["UDtVt"](0x3, _0x1a17de["waowK"](_0x1b0e34, 0x4))), 0x4)), 0xf)), _0x2ef997["charAt"](_0x1a17de["xRJUF"](_0x1a17de["NCUku"](_0x212733[_0x1a17de["fCfNq"](_0x1b0e34, 0x2)], _0x1a17de["ioCYu"](0x8, _0x1a17de["toBOx"](0x3, _0x1a17de["waowK"](_0x1b0e34, 0x4)))), 0xf)));
    return _0x484789;
}

function h(_0x62e50a) {
    var _0xca470b = {
        'qxHfX': function (_0xd22072, _0x31b6c6) {
            return _0xd22072(_0x31b6c6);
        },
        'wdGuX': function (_0x172a58, _0x57f2c9, _0x39a3fd) {
            return _0x172a58(_0x57f2c9, _0x39a3fd);
        },
        'WzxYo': function (_0x173a81, _0x2ef40e) {
            return _0x173a81(_0x2ef40e);
        },
        'RfbyC': function (_0x15bde8, _0x84fa6) {
            return _0x15bde8 * _0x84fa6;
        }
    };
    return _0xca470b["qxHfX"](binb2hex, _0xca470b["wdGuX"](core_ha, _0xca470b["WzxYo"](str2binb, _0x62e50a), _0xca470b["RfbyC"](_0x62e50a["length"], chrsz)));
}