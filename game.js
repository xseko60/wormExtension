var _0x40b61e = _0x2458;
(function(_0x560c00, _0x45ea9b) {
    var _0x44d67f = _0x2458
      , _0x5649b4 = _0x560c00();
    while (!![]) {
        try {
            var _0x11b38d = parseInt(_0x44d67f(0x4b2)) / 0x1 * (parseInt(_0x44d67f(0x7a0)) / 0x2) + -parseInt(_0x44d67f(0x819)) / 0x3 * (parseInt(_0x44d67f(0x67b)) / 0x4) + parseInt(_0x44d67f(0x621)) / 0x5 * (-parseInt(_0x44d67f(0x597)) / 0x6) + -parseInt(_0x44d67f(0x647)) / 0x7 + -parseInt(_0x44d67f(0x7fc)) / 0x8 + parseInt(_0x44d67f(0x691)) / 0x9 * (parseInt(_0x44d67f(0x7ab)) / 0xa) + parseInt(_0x44d67f(0x675)) / 0xb * (parseInt(_0x44d67f(0x6dd)) / 0xc);
            if (_0x11b38d === _0x45ea9b)
                break;
            else
                _0x5649b4['push'](_0x5649b4['shift']());
        } catch (_0x3d2cfc) {
            _0x5649b4['push'](_0x5649b4['shift']());
        }
    }
}(_0x10c9, 0x2c2e8),
document['documentElement'][_0x40b61e(0x1ae)](_0x40b61e(0x21a), _0x40b61e(0x34b)),
window[_0x40b61e(0x59f)] = window[_0x40b61e(0x59f)] || new Set());
const resolutionLimit = 0.025
  , scaleFactor = 0.5;
function optimizarTextura(_0x1eb6bc) {
    var _0x1479ae = _0x40b61e;
    if (!_0x1eb6bc || !_0x1eb6bc['Hc'] || !_0x1eb6bc['Hc'][_0x1479ae(0x523)]) {
        console[_0x1479ae(0x2f3)](_0x1479ae(0x404));
        return;
    }
    const _0x3e4803 = _0x1eb6bc['Hc'][_0x1479ae(0x523)]
      , _0x21d2c1 = _0x3e4803[_0x1479ae(0x540)] || _0x3e4803[_0x1479ae(0x783)]?.[_0x1479ae(0x2a6)] || _0x3e4803[_0x1479ae(0x783)]?.[_0x1479ae(0x401)]?.[_0x1479ae(0x4ec)] || '';
    if (!_0x21d2c1 || window[_0x1479ae(0x59f)][_0x1479ae(0x720)](_0x21d2c1))
        return;
    try {
        _0x21d2c1[_0x1479ae(0x65f)]('100300_portions.png') && _0x3e4803[_0x1479ae(0x3b9)] > resolutionLimit && (_0x3e4803['resolution'] = resolutionLimit,
        console[_0x1479ae(0x39b)](_0x1479ae(0x66a) + _0x3e4803[_0x1479ae(0x3b9)] + _0x1479ae(0x57e) + _0x21d2c1));
        if (_0x1479ae(0x6e2)in _0x3e4803)
            _0x3e4803[_0x1479ae(0x6e2)] = ![];
        else
            'mipmap'in _0x3e4803[_0x1479ae(0x523)] && (_0x3e4803['baseTexture'][_0x1479ae(0x6e2)] = ![]);
        if ('anisotropicLevel'in _0x3e4803)
            _0x3e4803['anisotropicLevel'] = 0x1;
        else
            _0x1479ae(0x4a4)in _0x3e4803[_0x1479ae(0x523)] && (_0x3e4803[_0x1479ae(0x523)][_0x1479ae(0x4a4)] = 0x1);
        const _0x41e0b9 = 0x400
          , _0x59244b = 0x400;
        if (_0x3e4803['width'] > _0x41e0b9 || _0x3e4803[_0x1479ae(0x804)] > _0x59244b) {
            const _0x3600ae = _0x41e0b9 / _0x3e4803[_0x1479ae(0x546)]
              , _0x5e4b91 = _0x59244b / _0x3e4803['height']
              , _0x1611c5 = Math[_0x1479ae(0x794)](_0x3600ae, _0x5e4b91);
            if (_0x3e4803[_0x1479ae(0x5dd)])
                _0x3e4803[_0x1479ae(0x5dd)](_0x3e4803[_0x1479ae(0x546)] * _0x1611c5, _0x3e4803[_0x1479ae(0x804)] * _0x1611c5);
            else
                _0x3e4803[_0x1479ae(0x783)]?.[_0x1479ae(0x401)]instanceof HTMLImageElement && (_0x3e4803[_0x1479ae(0x783)]['source'][_0x1479ae(0x546)] *= _0x1611c5,
                _0x3e4803['resource'][_0x1479ae(0x401)]['height'] *= _0x1611c5);
            console[_0x1479ae(0x39b)]('🔧\x20Imagen\x20escalada\x20(' + Math['round'](_0x1611c5 * 0x64) + _0x1479ae(0x699) + _0x21d2c1);
        }
        _0x3e4803[_0x1479ae(0x5fc)] && !_0x21d2c1[_0x1479ae(0x65f)]('atlas') && !_0x21d2c1[_0x1479ae(0x65f)]('sprite') && (_0x3e4803[_0x1479ae(0x5fc)] = ![]),
        (_0x3e4803['destroyed'] || _0x3e4803['resource']?.[_0x1479ae(0x776)]) && (_0x3e4803['destroy'](!![]),
        console[_0x1479ae(0x39b)]('🗑️\x20Textura\x20destruida\x20por\x20estado\x20inválido:\x20' + _0x21d2c1)),
        window[_0x1479ae(0x59f)][_0x1479ae(0x1c2)](_0x21d2c1),
        console['log'](_0x1479ae(0x69e) + _0x21d2c1);
    } catch (_0x463918) {
        console['error']('❌\x20Error\x20al\x20optimizar\x20textura:\x20' + _0x21d2c1, _0x463918);
    }
}
function checkOrientation() {
    var _0x9cc6f1 = _0x40b61e;
    const _0x5dfdc1 = document[_0x9cc6f1(0x808)](_0x9cc6f1(0x5df));
    window[_0x9cc6f1(0x664)]('(orientation:\x20portrait)')[_0x9cc6f1(0x3cd)] ? _0x5dfdc1[_0x9cc6f1(0x1b5)][_0x9cc6f1(0x5be)] = 'block' : _0x5dfdc1['style'][_0x9cc6f1(0x5be)] = _0x9cc6f1(0x5e1);
}
window[_0x40b61e(0x345)](_0x40b61e(0x80e), checkOrientation),
window['addEventListener']('resize', checkOrientation),
window[_0x40b61e(0x2c1)] = function() {
    var _0x390352 = _0x40b61e;
    document[_0x390352(0x808)](_0x390352(0x37b))[_0x390352(0x1b5)]['width'] = '100%',
    setTimeout( () => {
        var _0x3a1b25 = _0x390352;
        document['getElementById'](_0x3a1b25(0x60a))['style'][_0x3a1b25(0x6ef)] = '0',
        setTimeout( () => {
            var _0x17af86 = _0x3a1b25;
            document[_0x17af86(0x808)](_0x17af86(0x60a))[_0x17af86(0x1f0)]();
        }
        , 0x1f4);
    }
    , 0x7d0);
}
;
var __extends = this && this['__extends'] || (function() {
    var _0x3ef1b1 = function(_0x3a2214, _0x2edbe5) {
        return _0x3ef1b1 = Object['setPrototypeOf'] || {
            '__proto__': []
        }instanceof Array && function(_0x1e32dd, _0x2cfbd) {
            var _0x3570ab = _0x2458;
            _0x1e32dd[_0x3570ab(0x4b8)] = _0x2cfbd;
        }
        || function(_0x51b8a2, _0x46191c) {
            var _0x167b49 = _0x2458;
            for (var _0x67505a in _0x46191c)
                if (Object['prototype'][_0x167b49(0x5f5)][_0x167b49(0x5b3)](_0x46191c, _0x67505a))
                    _0x51b8a2[_0x67505a] = _0x46191c[_0x67505a];
        }
        ,
        _0x3ef1b1(_0x3a2214, _0x2edbe5);
    };
    return function(_0x29a4d, _0x56bf78) {
        var _0x56e9e6 = _0x2458;
        if (typeof _0x56bf78 !== _0x56e9e6(0x3c7) && _0x56bf78 !== null)
            throw new TypeError(_0x56e9e6(0x26e) + String(_0x56bf78) + '\x20is\x20not\x20a\x20constructor\x20or\x20null');
        _0x3ef1b1(_0x29a4d, _0x56bf78);
        function _0x57da0d() {
            var _0x5b216f = _0x56e9e6;
            this[_0x5b216f(0x532)] = _0x29a4d;
        }
        _0x29a4d[_0x56e9e6(0x792)] = _0x56bf78 === null ? Object[_0x56e9e6(0x29b)](_0x56bf78) : (_0x57da0d['prototype'] = _0x56bf78[_0x56e9e6(0x792)],
        new _0x57da0d());
    }
    ;
}()), Direction;
(function(_0x447407) {
    var _0x56cf2b = _0x40b61e
      , _0x230ca4 = (function() {
        var _0x412558 = !![];
        return function(_0x49d7a9, _0x32935d) {
            var _0x407155 = _0x412558 ? function() {
                var _0xa927d1 = _0x2458;
                if (_0x32935d) {
                    var _0x5e27b0 = _0x32935d[_0xa927d1(0x24b)](_0x49d7a9, arguments);
                    return _0x32935d = null,
                    _0x5e27b0;
                }
            }
            : function() {}
            ;
            return _0x412558 = ![],
            _0x407155;
        }
        ;
    }())
      , _0xb4ea2d = _0x230ca4(this, function() {
        var _0x568db5 = _0x2458;
        return _0xb4ea2d[_0x568db5(0x4b3)]()[_0x568db5(0x1f4)](_0x568db5(0x58e))[_0x568db5(0x4b3)]()['constructor'](_0xb4ea2d)[_0x568db5(0x1f4)](_0x568db5(0x58e));
    });
    _0xb4ea2d(),
    _0x447407[_0x56cf2b(0x4c9)] = _0x56cf2b(0x650),
    _0x447407[_0x56cf2b(0x648)] = 'top',
    _0x447407[_0x56cf2b(0x799)] = _0x56cf2b(0x2ac),
    _0x447407['RIGHT'] = _0x56cf2b(0x7b0),
    _0x447407[_0x56cf2b(0x797)] = _0x56cf2b(0x4fe),
    _0x447407[_0x56cf2b(0x7e4)] = _0x56cf2b(0x3ec),
    _0x447407[_0x56cf2b(0x76a)] = 'bottom_left',
    _0x447407[_0x56cf2b(0x3ae)] = 'bottom_right';
}(Direction = {}));
var Joystick = function(_0x3efcb3) {
    var _0x194de0 = _0x40b61e
      , _0x41823f = (function() {
        var _0x3f4ad0 = !![];
        return function(_0x4de6cb, _0x42fdd8) {
            var _0x3982ef = _0x3f4ad0 ? function() {
                var _0x4c9b6d = _0x2458;
                if (_0x42fdd8) {
                    var _0x27efb5 = _0x42fdd8[_0x4c9b6d(0x24b)](_0x4de6cb, arguments);
                    return _0x42fdd8 = null,
                    _0x27efb5;
                }
            }
            : function() {}
            ;
            return _0x3f4ad0 = ![],
            _0x3982ef;
        }
        ;
    }());
    (function() {
        _0x41823f(this, function() {
            var _0x554bb1 = _0x2458
              , _0x595bd5 = new RegExp('function\x20*\x5c(\x20*\x5c)')
              , _0x4a1ef9 = new RegExp(_0x554bb1(0x2fe),'i')
              , _0x3e29d3 = _0x509214(_0x554bb1(0x50d));
            !_0x595bd5[_0x554bb1(0x550)](_0x3e29d3 + _0x554bb1(0x333)) || !_0x4a1ef9[_0x554bb1(0x550)](_0x3e29d3 + 'input') ? _0x3e29d3('0') : _0x509214();
        })();
    }());
    var _0x31b4cd = (function() {
        var _0x4e73e2 = !![];
        return function(_0x21cfe9, _0x51ccde) {
            var _0x4eb9c2 = _0x4e73e2 ? function() {
                var _0xa2fc3d = _0x2458;
                if (_0x51ccde) {
                    var _0x26f9a2 = _0x51ccde[_0xa2fc3d(0x24b)](_0x21cfe9, arguments);
                    return _0x51ccde = null,
                    _0x26f9a2;
                }
            }
            : function() {}
            ;
            return _0x4e73e2 = ![],
            _0x4eb9c2;
        }
        ;
    }())
      , _0x4df1ff = _0x31b4cd(this, function() {
        var _0x55e485 = _0x2458, _0x3a92ea;
        try {
            var _0x1dbc49 = Function(_0x55e485(0x445) + _0x55e485(0x64b) + ');');
            _0x3a92ea = _0x1dbc49();
        } catch (_0x3cfbda) {
            _0x3a92ea = window;
        }
        var _0x48d69e = _0x3a92ea[_0x55e485(0x43f)] = _0x3a92ea[_0x55e485(0x43f)] || {}
          , _0x584ac1 = [_0x55e485(0x39b), _0x55e485(0x2f3), _0x55e485(0x6d6), 'error', _0x55e485(0x6cf), _0x55e485(0x666), _0x55e485(0x43c)];
        for (var _0x1814e0 = 0x0; _0x1814e0 < _0x584ac1[_0x55e485(0x607)]; _0x1814e0++) {
            var _0x42b577 = _0x31b4cd[_0x55e485(0x532)]['prototype'][_0x55e485(0x753)](_0x31b4cd)
              , _0x434565 = _0x584ac1[_0x1814e0]
              , _0x4b7245 = _0x48d69e[_0x434565] || _0x42b577;
            _0x42b577[_0x55e485(0x4b8)] = _0x31b4cd[_0x55e485(0x753)](_0x31b4cd),
            _0x42b577[_0x55e485(0x4b3)] = _0x4b7245[_0x55e485(0x4b3)][_0x55e485(0x753)](_0x4b7245),
            _0x48d69e[_0x434565] = _0x42b577;
        }
    });
    _0x4df1ff(),
    __extends(_0x409e73, _0x3efcb3);
    function _0x409e73(_0x394931) {
        var _0x391b9f = _0x2458
          , _0x389662 = _0x3efcb3[_0x391b9f(0x5b3)](this) || this;
        _0x389662[_0x391b9f(0x270)] = 0x0,
        _0x389662[_0x391b9f(0x443)] = 0x0,
        _0x389662[_0x391b9f(0x4c3)] = 0.5,
        _0x389662['settings'] = Object['assign']({
            'outerScale': {
                'x': 0x1,
                'y': 0x1
            },
            'innerScale': {
                'x': 0x1,
                'y': 0x1
            }
        }, _0x394931);
        if (!_0x389662[_0x391b9f(0x271)][_0x391b9f(0x5cd)]) {
            var _0x59adcb = new PIXI['Graphics']();
            _0x59adcb['beginFill'](0xff0000),
            _0x59adcb['drawCircle'](0x0, 0x0, 0x3c),
            _0x59adcb[_0x391b9f(0x4d8)] = 0.5,
            _0x389662[_0x391b9f(0x271)][_0x391b9f(0x5cd)] = _0x59adcb;
        }
        if (!_0x389662[_0x391b9f(0x271)]['inner']) {
            var _0x526f44 = new PIXI['Graphics']();
            _0x526f44[_0x391b9f(0x4a2)](0xff0000),
            _0x526f44['drawCircle'](0x0, 0x0, 0x23),
            _0x526f44[_0x391b9f(0x4d8)] = _0x389662[_0x391b9f(0x4c3)],
            _0x389662[_0x391b9f(0x271)]['inner'] = _0x526f44;
        }
        return _0x389662['initialize'](),
        _0x389662;
    }
    return _0x409e73[_0x194de0(0x792)][_0x194de0(0x239)] = function() {
        var _0x1054ed = _0x194de0;
        this[_0x1054ed(0x5cd)] = this['settings'][_0x1054ed(0x5cd)],
        this['inner'] = this[_0x1054ed(0x271)][_0x1054ed(0x2a5)],
        this['outer'][_0x1054ed(0x817)][_0x1054ed(0x6dc)](this['settings'][_0x1054ed(0x574)]['x'], this['settings'][_0x1054ed(0x574)]['y']),
        this[_0x1054ed(0x2a5)][_0x1054ed(0x817)][_0x1054ed(0x6dc)](this[_0x1054ed(0x271)][_0x1054ed(0x387)]['x'], this['settings'][_0x1054ed(0x387)]['y']),
        _0x1054ed(0x44d)in this[_0x1054ed(0x5cd)] && this[_0x1054ed(0x5cd)][_0x1054ed(0x44d)][_0x1054ed(0x6dc)](0.5),
        'anchor'in this[_0x1054ed(0x2a5)] && this[_0x1054ed(0x2a5)][_0x1054ed(0x44d)]['set'](0.5),
        this[_0x1054ed(0x21e)](this[_0x1054ed(0x5cd)]),
        this['addChild'](this[_0x1054ed(0x2a5)]),
        this[_0x1054ed(0x270)] = this[_0x1054ed(0x546)] / 2.5,
        this['innerRadius'] = this['inner']['width'] / 0x2,
        this['bindEvents']();
    }
    ,
    _0x409e73[_0x194de0(0x792)][_0x194de0(0x76b)] = function() {
        var _0x440f60 = _0x194de0
          , _0x3b11c9 = this;
        this[_0x440f60(0x69a)] = !![];
        var _0xd7f993 = ![], _0x48e416, _0x334a05, _0x3e9021;
        this['onDragStart'] = function(_0x1b2bac) {
            var _0x8258ff = _0x440f60, _0x2d25bc, _0x4428b1;
            _0x48e416 = _0x1b2bac,
            _0x3e9021 = this['toLocal'](_0x48e416),
            _0xd7f993 = !![],
            _0x3b11c9[_0x8258ff(0x2a5)][_0x8258ff(0x4d8)] = 0x1,
            (_0x4428b1 = (_0x2d25bc = _0x3b11c9[_0x8258ff(0x271)])['onStart']) === null || _0x4428b1 === void 0x0 ? void 0x0 : _0x4428b1[_0x8258ff(0x5b3)](_0x2d25bc);
        }
        ,
        this[_0x440f60(0x5e4)] = function(_0x40e6ea) {
            var _0xf1fe46 = _0x440f60, _0x4b3261, _0x45b5ca;
            if (_0xd7f993 == ![])
                return;
            _0x3b11c9['inner'][_0xf1fe46(0x31e)][_0xf1fe46(0x6dc)](0x0, 0x0),
            _0xd7f993 = ![],
            _0x3b11c9['inner'][_0xf1fe46(0x4d8)] = _0x3b11c9['innerAlphaStandby'],
            (_0x45b5ca = (_0x4b3261 = _0x3b11c9[_0xf1fe46(0x271)])[_0xf1fe46(0x49b)]) === null || _0x45b5ca === void 0x0 ? void 0x0 : _0x45b5ca['call'](_0x4b3261);
        }
        ,
        this['onDragMove'] = function(_0x38ef5c) {
            var _0x36faa0 = _0x440f60;
            this['outerRadius'] = this[_0x36faa0(0x546)] / 2.5,
            this[_0x36faa0(0x443)] = this['inner']['width'] / 0x2;
            var _0x3139cc, _0x2c3007, _0x441ec, _0x563248, _0x36c396, _0x1f5df3;
            if (_0xd7f993 == ![])
                return;
            var _0x308b45 = this[_0x36faa0(0x4f8)](_0x38ef5c)
              , _0x4edb8a = _0x308b45['x'] - _0x3e9021['x']
              , _0x3defc0 = _0x308b45['y'] - _0x3e9021['y']
              , _0x117fc5 = new PIXI[(_0x36faa0(0x539))](0x0,0x0)
              , _0x3dbd00 = 0x0;
            if (_0x4edb8a == 0x0 && _0x3defc0 == 0x0)
                return;
            var _0xb1db9a = 0x0;
            _0x4edb8a * _0x4edb8a + _0x3defc0 * _0x3defc0 >= _0x3b11c9[_0x36faa0(0x270)] * _0x3b11c9['outerRadius'] ? _0xb1db9a = _0x3b11c9[_0x36faa0(0x270)] : _0xb1db9a = _0x3b11c9['outerRadius'] - _0x3b11c9[_0x36faa0(0x443)];
            var _0x440fe0 = Direction[_0x36faa0(0x4c9)];
            if (_0x4edb8a == 0x0) {
                _0x3defc0 > 0x0 ? (_0x117fc5['set'](0x0, _0x3defc0 > _0x3b11c9['outerRadius'] ? _0x3b11c9[_0x36faa0(0x270)] : _0x3defc0),
                _0x3dbd00 = 0x10e,
                _0x440fe0 = Direction[_0x36faa0(0x799)]) : (_0x117fc5[_0x36faa0(0x6dc)](0x0, -(Math[_0x36faa0(0x434)](_0x3defc0) > _0x3b11c9[_0x36faa0(0x270)] ? _0x3b11c9[_0x36faa0(0x270)] : Math[_0x36faa0(0x434)](_0x3defc0))),
                _0x3dbd00 = 0x5a,
                _0x440fe0 = Direction[_0x36faa0(0x648)]);
                _0x3b11c9['inner'][_0x36faa0(0x31e)][_0x36faa0(0x6dc)](_0x117fc5['x'], _0x117fc5['y']),
                _0x334a05 = _0x3b11c9[_0x36faa0(0x79b)](_0x117fc5),
                (_0x2c3007 = (_0x3139cc = _0x3b11c9[_0x36faa0(0x271)])[_0x36faa0(0x55f)]) === null || _0x2c3007 === void 0x0 ? void 0x0 : _0x2c3007['call'](_0x3139cc, {
                    'angle': _0x3dbd00,
                    'direction': _0x440fe0,
                    'power': _0x334a05
                });
                return;
            }
            if (_0x3defc0 == 0x0) {
                _0x4edb8a > 0x0 ? (_0x117fc5[_0x36faa0(0x6dc)](Math[_0x36faa0(0x434)](_0x4edb8a) > _0x3b11c9[_0x36faa0(0x270)] ? _0x3b11c9[_0x36faa0(0x270)] : Math[_0x36faa0(0x434)](_0x4edb8a), 0x0),
                _0x3dbd00 = 0x0,
                _0x440fe0 = Direction[_0x36faa0(0x4c9)]) : (_0x117fc5[_0x36faa0(0x6dc)](-(Math['abs'](_0x4edb8a) > _0x3b11c9[_0x36faa0(0x270)] ? _0x3b11c9[_0x36faa0(0x270)] : Math[_0x36faa0(0x434)](_0x4edb8a)), 0x0),
                _0x3dbd00 = 0xb4,
                _0x440fe0 = Direction['RIGHT']);
                _0x3b11c9[_0x36faa0(0x2a5)]['position'][_0x36faa0(0x6dc)](_0x117fc5['x'], _0x117fc5['y']),
                _0x334a05 = _0x3b11c9[_0x36faa0(0x79b)](_0x117fc5),
                (_0x563248 = (_0x441ec = _0x3b11c9[_0x36faa0(0x271)])[_0x36faa0(0x55f)]) === null || _0x563248 === void 0x0 ? void 0x0 : _0x563248[_0x36faa0(0x5b3)](_0x441ec, {
                    'angle': _0x3dbd00,
                    'direction': _0x440fe0,
                    'power': _0x334a05
                });
                return;
            }
            var _0x40a361 = Math[_0x36faa0(0x434)](_0x3defc0 / _0x4edb8a)
              , _0x983852 = Math['atan'](_0x40a361);
            _0x3dbd00 = _0x983852 * 0xb4 / Math['PI'];
            var _0x449942 = 0x0
              , _0x6219b5 = 0x0;
            _0x4edb8a * _0x4edb8a + _0x3defc0 * _0x3defc0 >= _0x3b11c9[_0x36faa0(0x270)] * _0x3b11c9[_0x36faa0(0x270)] ? (_0x449942 = _0x3b11c9[_0x36faa0(0x270)] * Math['cos'](_0x983852),
            _0x6219b5 = _0x3b11c9[_0x36faa0(0x270)] * Math['sin'](_0x983852)) : (_0x449942 = Math[_0x36faa0(0x434)](_0x4edb8a) > _0x3b11c9[_0x36faa0(0x270)] ? _0x3b11c9[_0x36faa0(0x270)] : Math[_0x36faa0(0x434)](_0x4edb8a),
            _0x6219b5 = Math[_0x36faa0(0x434)](_0x3defc0) > _0x3b11c9['outerRadius'] ? _0x3b11c9[_0x36faa0(0x270)] : Math[_0x36faa0(0x434)](_0x3defc0));
            _0x3defc0 < 0x0 && (_0x6219b5 = -Math[_0x36faa0(0x434)](_0x6219b5));
            _0x4edb8a < 0x0 && (_0x449942 = -Math[_0x36faa0(0x434)](_0x449942));
            if (_0x4edb8a > 0x0 && _0x3defc0 < 0x0) {} else {
                if (_0x4edb8a < 0x0 && _0x3defc0 < 0x0)
                    _0x3dbd00 = 0xb4 - _0x3dbd00;
                else {
                    if (_0x4edb8a < 0x0 && _0x3defc0 > 0x0)
                        _0x3dbd00 = _0x3dbd00 + 0xb4;
                    else
                        _0x4edb8a > 0x0 && _0x3defc0 > 0x0 && (_0x3dbd00 = 0x168 - _0x3dbd00);
                }
            }
            _0x117fc5[_0x36faa0(0x6dc)](_0x449942, _0x6219b5),
            _0x334a05 = _0x3b11c9[_0x36faa0(0x79b)](_0x117fc5),
            _0x440fe0 = _0x3b11c9['getDirection'](_0x117fc5),
            _0x3b11c9[_0x36faa0(0x2a5)][_0x36faa0(0x31e)]['set'](_0x117fc5['x'], _0x117fc5['y']),
            (_0x1f5df3 = (_0x36c396 = _0x3b11c9[_0x36faa0(0x271)])[_0x36faa0(0x55f)]) === null || _0x1f5df3 === void 0x0 ? void 0x0 : _0x1f5df3[_0x36faa0(0x5b3)](_0x36c396, {
                'angle': _0x3dbd00,
                'direction': _0x440fe0,
                'power': _0x334a05
            });
        }
        ;
    }
    ,
    _0x409e73[_0x194de0(0x792)]['getPower'] = function(_0x26b361) {
        var _0x2c1150 = _0x194de0
          , _0x1f406c = _0x26b361['x'] - 0x0
          , _0x588fa0 = _0x26b361['y'] - 0x0;
        return Math[_0x2c1150(0x794)](0x1, Math[_0x2c1150(0x531)](_0x1f406c * _0x1f406c + _0x588fa0 * _0x588fa0) / this[_0x2c1150(0x270)]);
    }
    ,
    _0x409e73[_0x194de0(0x792)]['getDirection'] = function(_0x1694ee) {
        var _0xba51ce = _0x194de0
          , _0x37deaf = Math[_0xba51ce(0x33c)](_0x1694ee['y'], _0x1694ee['x']);
        if (_0x37deaf >= -Math['PI'] / 0x8 && _0x37deaf < 0x0 || _0x37deaf >= 0x0 && _0x37deaf < Math['PI'] / 0x8)
            return Direction['RIGHT'];
        else {
            if (_0x37deaf >= Math['PI'] / 0x8 && _0x37deaf < 0x3 * Math['PI'] / 0x8)
                return Direction[_0xba51ce(0x3ae)];
            else {
                if (_0x37deaf >= 0x3 * Math['PI'] / 0x8 && _0x37deaf < 0x5 * Math['PI'] / 0x8)
                    return Direction[_0xba51ce(0x799)];
                else {
                    if (_0x37deaf >= 0x5 * Math['PI'] / 0x8 && _0x37deaf < 0x7 * Math['PI'] / 0x8)
                        return Direction[_0xba51ce(0x76a)];
                    else {
                        if (_0x37deaf >= 0x7 * Math['PI'] / 0x8 && _0x37deaf < Math['PI'] || _0x37deaf >= -Math['PI'] && _0x37deaf < -0x7 * Math['PI'] / 0x8)
                            return Direction[_0xba51ce(0x4c9)];
                        else {
                            if (_0x37deaf >= -0x7 * Math['PI'] / 0x8 && _0x37deaf < -0x5 * Math['PI'] / 0x8)
                                return Direction[_0xba51ce(0x797)];
                            else
                                return _0x37deaf >= -0x5 * Math['PI'] / 0x8 && _0x37deaf < -0x3 * Math['PI'] / 0x8 ? Direction['TOP'] : Direction[_0xba51ce(0x7e4)];
                        }
                    }
                }
            }
        }
    }
    ,
    _0x409e73;
}(PIXI[_0x40b61e(0x412)]);
function _typeof(_0x15fa11) {
    '@babel/helpers - typeof';
    var _0xc0079d = _0x40b61e;
    return (_typeof = _0xc0079d(0x3c7) == typeof Symbol && _0xc0079d(0x30c) == typeof Symbol['iterator'] ? function(_0x347be8) {
        return typeof _0x347be8;
    }
    : function(_0x2a2e2f) {
        var _0x1af106 = _0xc0079d;
        return _0x2a2e2f && _0x1af106(0x3c7) == typeof Symbol && _0x2a2e2f[_0x1af106(0x532)] === Symbol && _0x2a2e2f !== Symbol[_0x1af106(0x792)] ? _0x1af106(0x30c) : typeof _0x2a2e2f;
    }
    )(_0x15fa11);
}
var lenguaje = {
    'es': {
        'opciones': _0x40b61e(0x4df),
        'zoomVelocidad': 'Zoom\x20Velocidad',
        'anchoPotenciador': 'ancho\x20del\x20potenciador',
        'auraPotenciador': _0x40b61e(0x257),
        'anchoComida': _0x40b61e(0x781),
        'brilloComida': 'brillo\x20de\x20la\x20comida',
        'fondo': _0x40b61e(0x26a),
        'laser': _0x40b61e(0x727),
        'sectores': 'sectores',
        'colorJuego': _0x40b61e(0x2d7),
        'colorLaser': _0x40b61e(0x39e),
        'colorBorde': 'color\x20del\x20borde',
        'copiar': _0x40b61e(0x27e),
        'fondos': _0x40b61e(0x3f0),
        'fondo0': 'por\x20defecto',
        'fondo1': _0x40b61e(0x303),
        'fondo2': 'espacio\x202',
        'fondo3': 'azul',
        'fondo4': 'espacio\x203',
        'skinVisible': _0x40b61e(0x639),
        'soundTuto1': 'descargar\x20sonido',
        'soundTuto2': _0x40b61e(0x500),
        'soundTuto3': _0x40b61e(0x352),
        'soundTuto4': _0x40b61e(0x825)
    },
    'en': {
        'opciones': _0x40b61e(0x271),
        'zoomVelocidad': _0x40b61e(0x6e0),
        'anchoPotenciador': _0x40b61e(0x617),
        'auraPotenciador': _0x40b61e(0x477),
        'anchoComida': _0x40b61e(0x29d),
        'brilloComida': _0x40b61e(0x40e),
        'fondo': _0x40b61e(0x406),
        'laser': _0x40b61e(0x4f7),
        'sectores': _0x40b61e(0x768),
        'colorJuego': _0x40b61e(0x45a),
        'colorLaser': _0x40b61e(0x35f),
        'colorBorde': _0x40b61e(0x4a7),
        'copiar': _0x40b61e(0x355),
        'fondos': _0x40b61e(0x613),
        'fondo0': _0x40b61e(0x396),
        'fondo1': _0x40b61e(0x4b5),
        'fondo2': _0x40b61e(0x2d2),
        'fondo3': 'Blue\x20Black',
        'fondo4': _0x40b61e(0x748),
        'skinVisible': _0x40b61e(0x245),
        'soundTuto1': _0x40b61e(0x343),
        'soundTuto2': _0x40b61e(0x48a),
        'soundTuto3': _0x40b61e(0x6a0),
        'soundTuto4': _0x40b61e(0x5e6)
    },
    'uk': {
        'opciones': _0x40b61e(0x5f7),
        'anchoPotenciador': _0x40b61e(0x5ff),
        'auraPotenciador': _0x40b61e(0x809),
        'anchoComida': _0x40b61e(0x1fb),
        'brilloComida': _0x40b61e(0x5ae),
        'fondo': _0x40b61e(0x66d),
        'laser': _0x40b61e(0x5bf),
        'sectores': _0x40b61e(0x282),
        'colorJuego': _0x40b61e(0x5ae),
        'colorLaser': _0x40b61e(0x6d5),
        'colorBorde': _0x40b61e(0x509),
        'copiar': _0x40b61e(0x75d),
        'fondos': '????',
        'fondo0': _0x40b61e(0x3a4),
        'fondo1': _0x40b61e(0x78c),
        'fondo2': _0x40b61e(0x653),
        'fondo3': _0x40b61e(0x515),
        'fondo4': _0x40b61e(0x3c2),
        'skinVisible': _0x40b61e(0x64e),
        'soundTuto1': _0x40b61e(0x676),
        'soundTuto2': _0x40b61e(0x676),
        'soundTuto3': _0x40b61e(0x359),
        'soundTuto4': _0x40b61e(0x2b8)
    }
};
const _wrmxt = {
    'isSkinCustom'(_0x3bac95) {
        var _0x304168 = _0x40b61e
          , _0x49d0f7 = /[a-zA-Z]/;
        return _0x304168(0x25a) === typeof _0x3bac95 && _0x49d0f7[_0x304168(0x550)](_0x3bac95);
    },
    'testSkinCustom': function(_0x53e952) {
        var _0x2ef8d0 = _0x40b61e;
        return _wrmxt[_0x2ef8d0(0x5af)](_0x53e952) ? 0x22 || 0x21 : _0x53e952;
    },
    'testSkinMod': function(_0x43ac19) {
        return 0x18f <= _0x43ac19 && 0x3e7 > _0x43ac19;
    },
    'testWear': function(_0x168767) {
        return 0x18f <= _0x168767 && 0x3e7 > _0x168767;
    },
    'isNumberValid': function(_0x1ebed4) {
        return '' !== _0x1ebed4 && null !== _0x1ebed4 && void 0x0 !== _0x1ebed4 && !isNaN(_0x1ebed4);
    },
    'validInput': function(_0x5138aa) {
        var _0x181851 = _0x40b61e;
        if (!_wrmxt[_0x181851(0x3ba)](_0x5138aa) && !_wrmxt[_0x181851(0x5af)](_0x5138aa))
            return _0x5138aa;
        try {
            let _0x1e92e9 = $('#inputReplaceSkin')['val']();
            return encodeURI(_wrmxt[_0x181851(0x55c)](_0x1e92e9) ? _0x1e92e9 : 0x23);
        } catch (_0x279a2c) {
            return encodeURI(0x23);
        }
    },
    'aload': ![],
    'aId': 0x0
};
let lastSendTime = Date[_0x40b61e(0x61c)]();
const setIdReplaceSkin = function(_0x215de7) {
    var _0x4b1b27 = _0x40b61e;
    theoKzObjects[_0x4b1b27(0x82b)] = _wrmxt[_0x4b1b27(0x55c)](_0x215de7[_0x4b1b27(0x1c0)]) ? _0x215de7[_0x4b1b27(0x1c0)] : 0x23,
    localStorage['setItem']('SaveGameXT', JSON['stringify'](theoKzObjects));
};
var intervalID = null
  , isRunning = ![]
  , initialInterval = 0x37;
(function() {
    var _0x2f29ad = function() {
        var _0x76256e = _0x2458, _0x4655ac;
        try {
            _0x4655ac = Function(_0x76256e(0x445) + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');')();
        } catch (_0xf22e96) {
            _0x4655ac = window;
        }
        return _0x4655ac;
    }
      , _0x3d9ecb = _0x2f29ad();
    _0x3d9ecb['setInterval'](_0x509214, 0x3e8);
}());
var cycleCounter = 0x1
  , isIncrementing = !![];
let pixi = new Function('return\x20PIXI;')()
  , girotexture = pixi[_0x40b61e(0x52c)]['from']('https://i.imgur.com/0aN5Zek.png')
  , ungirotexture = pixi[_0x40b61e(0x52c)]['from'](_0x40b61e(0x66c))
  , explotWtexture = pixi[_0x40b61e(0x52c)][_0x40b61e(0x41e)](_0x40b61e(0x36f));
var keys = {
    'zoom': 'z',
    'restart': 'r',
    'giro': 's',
    'wormExplot': 'x',
    'laserHS': 'l',
    'sectores': 'q',
    'background': 'c',
    'noSkin': 'f',
    'noAuras': 'g'
};
function cambiarKey(_0x21bff2, _0x1aa641) {
    keys['hasOwnProperty'](_0x21bff2) && (keys[_0x21bff2] = _0x1aa641);
}
let theoObjects = {
    'teamColor': 'FFFFFF',
    'laserColor': _0x40b61e(0x7aa),
    'colorFondo': _0x40b61e(0x744),
    'colorBorde': 'FF0000',
    'hsTextColor': _0x40b61e(0x7aa),
    'killTextColor': _0x40b61e(0x7aa),
    'minimapBorderColor': _0x40b61e(0x7aa)
};
var zw_updatezoom, zw_multiplier, zw_zoomtext, crearRegion2, qkq2089cen = null, zw_servertext, zw_serverping;
let ping;
var zw_serverfps;
let canSendMessage = !![];
var zw_TopHS_RecordHs, zw_Top3HS_RecordHs, zw_TopFriends_list, zw_TopHS_BestPlayers, zw_MinimapTeamCode, zw_MinimapSombra, zw_lastserver, zw_toplist, zw_Background, ctxHeadshotLine, zw_zoomplustexture, zw_zoomsubtracttexture, zw_giroplustexture, zw_girosubtracttexture, zw_explotWubtracttexture, zw_settingsblockbadwords, zw_selectedbackground, zw_joystick, zw_mobilecontrol, zw_mobilecontrol2, zw_mobilecontroltextures, zw_mobilepredictiontextures, zw_mobileprediction, zw_joysticks, zw_mobilearrowtexture, zw_mobilepeedtexture, zw_mobilefullscreenstatus, zw_mobilecheck;
zw_multiplier = 0x1;
let frameTimes = []
  , lastFrameTime = performance[_0x40b61e(0x61c)]();
var killtext, hstext, circle, backgrounds = ['https://asserts.wormworld.io/backgrounds/bkgnd0.png', 'https://asserts.wormworld.io/backgrounds/bkgnd8.png', _0x40b61e(0x31b), _0x40b61e(0x21f), _0x40b61e(0x779), _0x40b61e(0x669), _0x40b61e(0x2ea), _0x40b61e(0x82d), 'https://asserts.wormworld.io/backgrounds/bg_sky_3.png', 'https://asserts.wormworld.io/backgrounds/bg_sky_4.png', 'https://asserts.wormworld.io/backgrounds/bg_sky_5.png', _0x40b61e(0x38f), _0x40b61e(0x207), _0x40b61e(0x59a), _0x40b61e(0x4bc)];
let currentIndex = localStorage[_0x40b61e(0x3b2)](_0x40b61e(0x7b7)) ? parseInt(localStorage[_0x40b61e(0x3b2)]('selectedBackground')) : 0x0;
var fonts = [_0x40b61e(0x309), _0x40b61e(0x3d2), _0x40b61e(0x51f), _0x40b61e(0x6f4), _0x40b61e(0x62d), '\x27Times\x20New\x20Roman\x27,\x20serif', _0x40b61e(0x5d1), '\x27Impact\x27,\x20sans-serif', '\x27Lucida\x20Console\x27,\x20monospace', '\x27Trebuchet\x20MS\x27,\x20sans-serif'];
let currentFontIndex = localStorage[_0x40b61e(0x3b2)](_0x40b61e(0x6b7)) ? parseInt(localStorage[_0x40b61e(0x3b2)](_0x40b61e(0x6b7))) : 0x0;
function getPingColor(_0x56615e) {
    var _0x3d281c = _0x40b61e;
    if (_0x56615e <= 0x32)
        return '#00FF00';
    if (_0x56615e <= 0x50)
        return _0x3d281c(0x4f3);
    if (_0x56615e <= 0x78)
        return _0x3d281c(0x5d2);
    if (_0x56615e <= 0xb4)
        return _0x3d281c(0x839);
    if (_0x56615e <= 0xfa)
        return _0x3d281c(0x74e);
    return '#FF0000';
}
function getFPSColor(_0x73dbf7) {
    var _0x5ddc21 = _0x40b61e;
    if (_0x73dbf7 >= 0x3c)
        return _0x5ddc21(0x2cd);
    if (_0x73dbf7 >= 0x32)
        return _0x5ddc21(0x4f3);
    if (_0x73dbf7 >= 0x28)
        return _0x5ddc21(0x5d2);
    if (_0x73dbf7 >= 0x1e)
        return _0x5ddc21(0x839);
    if (_0x73dbf7 >= 0x14)
        return _0x5ddc21(0x74e);
    return _0x5ddc21(0x39f);
}
window[_0x40b61e(0x44a)] = _0x4c14a6 => {
    var _0x5d69e8 = _0x40b61e;
    _0x4c14a6[_0x5d69e8(0x293)] > 0x0 ? zw_updatezoom(Math[_0x5d69e8(0x5c6)](zw_multiplier - 0.75 * parseFloat(theoKzObjects[_0x5d69e8(0x7e6)]), 0.5)) : zw_updatezoom(Math[_0x5d69e8(0x794)](zw_multiplier + 1.05 * parseFloat(theoKzObjects[_0x5d69e8(0x7e6)]), 0x32));
}
;
var zw_mobilecheck = function() {
    var _0x5b9247 = _0x40b61e
      , _0x23c4fc = new Function(_0x5b9247(0x643))();
    return new _0x23c4fc('iPhone|iPad|iPod|Android','i')['test'](navigator[_0x5b9247(0x475)]);
}
  , zw_updatezoom = function(_0x226d7b) {
    var _0x27e159 = _0x40b61e;
    zw_multiplier = _0x226d7b;
    var _0x51abe3 = parseFloat(zw_multiplier[_0x27e159(0x223)](0x2));
    if (Math[_0x27e159(0x434)](_0x51abe3) < 0.01)
        _0x51abe3 = 0x0;
    else
        Math[_0x27e159(0x434)](_0x51abe3 - 0x1) < 0.01 && (_0x51abe3 = 0x1);
    zw_zoomtext[_0x27e159(0x318)] = _0x51abe3 + 'x';
}
  , inputReplaceSkin = localStorage[_0x40b61e(0x3b2)](_0x40b61e(0x7ee))
  , PilotoAutomatico = null
  , isPlaying = ![];
window['keyMove'] = 0x51;
var theoEvents = {
    'eventoPrincipal': null,
    'joystick': {
        'positionMode': 'L',
        'checked': !0x0,
        'size': 0x5a,
        'mode': _0x40b61e(0x81f),
        'position': {
            'left': _0x40b61e(0x285),
            'bottom': _0x40b61e(0x285)
        },
        'color': _0x40b61e(0x484),
        'pxy': 0x6e
    }
}
  , idiomaActual = window[_0x40b61e(0x214)][_0x40b61e(0x4f6)]['includes'](_0x40b61e(0x600)) ? 'es' : window['location'][_0x40b61e(0x4f6)]['includes'](_0x40b61e(0x7e9)) ? 'uk' : 'en';
let lastHsTextColor = null
  , lastKillTextColor = null
  , lastMinimapBorderColor = null
  , frameCount = 0x0
  , totalFPSTime = 0x0;
const FPS_AVERAGE_WINDOW = 0x14
  , TWO_PI = 0x2 * Math['PI'];
typeof window[_0x40b61e(0x721)] === 'undefined' && (window[_0x40b61e(0x721)] = {
    'playerX': 0x0,
    'playerY': 0x0
});
var theoKzObjects = {
    'FB_UserID': '',
    'fps': ![],
    'ping': ![],
    'chngBotSkins': ![],
    'chngPersonsSkins': ![],
    'minimapTeamcod': ![],
    'hideYouNameInMinimap': ![],
    'Incognito': ![],
    'laserHS': ![],
    'spawnInfinity': ![],
    'backgroundSolid': ![],
    'sectores': ![],
    'visiblePowersAll': ![],
    'speed_zigzag': !![],
    'timerSpZg': ![],
    'zoomSpeed': localStorage['getItem'](_0x40b61e(0x7e6)) || 0x1,
    'PotenciadorSize': localStorage[_0x40b61e(0x3b2)](_0x40b61e(0x4c5)) || 0x2,
    'PotenciadorAura': localStorage[_0x40b61e(0x3b2)](_0x40b61e(0x262)) || 1.2,
    'ComidaShadow': localStorage[_0x40b61e(0x3b2)]('ComidaShadow') || 0x2,
    'ComidaSize': localStorage[_0x40b61e(0x3b2)](_0x40b61e(0x3f3)) || 0x2,
    'mouseDelay': localStorage[_0x40b61e(0x3b2)](_0x40b61e(0x5dc)) || 0x14,
    'smoothCamera': localStorage[_0x40b61e(0x3b2)](_0x40b61e(0x7be)) || 0.5,
    'eat_animation': 0.0025,
    'PortionSize': localStorage[_0x40b61e(0x4c5)] || 0x2,
    'PortionAura': localStorage[_0x40b61e(0x262)] || 1.2,
    'PortionTransparent': 0.8,
    'FoodTransparent': 0.3,
    'showTeamList': !![],
    'animationHeadshot': !![],
    'top8': !![],
    'killFeed': ![],
    'noAuras': !![],
    'noSkin': !![],
    'KeyCodeRespawn': localStorage[_0x40b61e(0x2f5)] || 0x52,
    'KeyCodeAutoMov': localStorage[_0x40b61e(0x56b)] || window[_0x40b61e(0x1be)],
    'AbilityZ': ![],
    'dead': ![],
    'FoodShadow': localStorage[_0x40b61e(0x702)] || 0x2,
    'FoodSize': localStorage[_0x40b61e(0x3f3)] || 0x2,
    'headshot': 0x0,
    'idReplaceSkin': 0x23,
    'visibleSkin': [],
    'pL': [],
    'gamePad': theoEvents[_0x40b61e(0x5ed)],
    'mobile': !0x1,
    'loading': ![],
    'kill': 0x0,
    'totalKills': 0x0,
    'totalHeadshots': 0x0,
    'adblock': ![],
    'CLIENTE_ADMIN': 0x1,
    'CLIENTE_ACTIVO': 0x3,
    'CLIENTE_INACTIVO': 0x4
};
saveGameLocal = localStorage['getItem'](_0x40b61e(0x63c));
if (saveGameLocal && _0x40b61e(0x5c4) !== saveGameLocal) {
    let t = JSON['parse'](saveGameLocal);
    for (let e in t)
        theoKzObjects[e] = t[e];
}
theoKzObjects[_0x40b61e(0x7e0)] = !![];
let soundEnabled;
var zwormData = {
    'id_user': '',
    'nickname': 'zworm',
    'enemyNameHs': _0x40b61e(0x5b5),
    'teamCode': '',
    'playerX': 0x0,
    'playerY': 0x0,
    'hs': 0x0,
    'kill': 0x0,
    'message': '',
    'teamColor': localStorage[_0x40b61e(0x3b2)](_0x40b61e(0x7fe)) || _0x40b61e(0x29e),
    'wssServer': ''
};
const socket = new WebSocket(_0x40b61e(0x464))
  , gameState = {
    'players': new Map()
};
let lastUpdate = 0x0;
const UPDATE_INTERVAL = 0x32;
socket[_0x40b61e(0x345)]('open', () => console[_0x40b61e(0x39b)](_0x40b61e(0x32e))),
socket[_0x40b61e(0x345)](_0x40b61e(0x846), () => console[_0x40b61e(0x39b)]('Desconectado\x20del\x20servidor\x20WebSocket')),
socket[_0x40b61e(0x345)](_0x40b61e(0x681), async _0x157a0b => {
    var _0x119b0b = _0x40b61e;
    try {
        const _0xf9e3a5 = typeof _0x157a0b[_0x119b0b(0x294)] === _0x119b0b(0x25a) ? JSON[_0x119b0b(0x701)](_0x157a0b['data']) : JSON[_0x119b0b(0x701)](await _0x157a0b['data']['text']());
        handleMessage(_0xf9e3a5);
    } catch (_0x2d6aa4) {
        console[_0x119b0b(0x2aa)](_0x119b0b(0x7c8), _0x2d6aa4);
    }
}
);
function handleMessage(_0x123dcb) {
    var _0x24e3f2 = _0x40b61e;
    if (!_0x123dcb || _0x123dcb[_0x24e3f2(0x6b8)] !== zwormData[_0x24e3f2(0x6b8)])
        return;
    _0x123dcb[_0x24e3f2(0x1f8)] && ['gg_107164783301809303612', _0x24e3f2(0x782), _0x24e3f2(0x7dc)][_0x24e3f2(0x65f)](_0x123dcb[_0x24e3f2(0x1f8)]) && (createServerMessage(_0x24e3f2(0x834), _0x123dcb[_0x24e3f2(0x681)]),
    console[_0x24e3f2(0x39b)](_0x24e3f2(0x712) + _0x123dcb[_0x24e3f2(0x1f8)] + _0x24e3f2(0x7f6) + _0x123dcb['message']));
    switch (_0x123dcb['type']) {
    case _0x24e3f2(0x7d1):
        handlers['initialState'](_0x123dcb['players']);
        break;
    case 'playerUpdate':
        handlers[_0x24e3f2(0x4a9)](_0x123dcb);
        break;
    case _0x24e3f2(0x6a2):
        handlers[_0x24e3f2(0x6a2)](_0x123dcb);
        break;
    case 'playerDeath':
        handlers[_0x24e3f2(0x7c7)](_0x123dcb);
        break;
    case _0x24e3f2(0x340):
        removePlayer(_0x123dcb['id']);
        break;
    default:
        console[_0x24e3f2(0x39b)]('Mensaje\x20desconocido:', _0x123dcb);
    }
}
function getUserData(_0x5c6061) {
    var _0x514695 = _0x40b61e;
    return clientes[_0x514695(0x3ff)][_0x514695(0x456)](_0x4ba2c => _0x4ba2c[_0x514695(0x2ec)] === _0x5c6061);
}
let messageQueue = []
  , isProcessingQueue = ![];
function sendMessage() {
    var _0x27f2c8 = _0x40b61e;
    if (!canSendMessage) {
        console[_0x27f2c8(0x39b)](_0x27f2c8(0x800));
        return;
    }
    const _0x4c6531 = $(_0x27f2c8(0x5d3))[_0x27f2c8(0x382)]()[_0x27f2c8(0x4b9)]();
    if (!_0x4c6531)
        return;
    canSendMessage = ![],
    setTimeout( () => canSendMessage = !![], 0x3e8);
    const _0x3b84ca = zwormData['nickname']['substring'](0x0, 0x10)
      , _0x4059f2 = getUserData(zwormData[_0x27f2c8(0x1f8)])
      , _0x14a0e3 = {
        'type': _0x27f2c8(0x633),
        'id_user': zwormData['id_user'],
        'nickname': _0x3b84ca,
        'message': _0x4c6531,
        'wssServer': zwormData[_0x27f2c8(0x6b8)],
        'color': _0x4059f2?.[_0x27f2c8(0x489)] || 'rgba(255,\x20255,\x20255,\x200.1)',
        'image': _0x4059f2?.['image'] || 'default_icon.png'
    };
    messageQueue['push'](_0x14a0e3),
    processMessageQueue(),
    displayMessage(_0x3b84ca, _0x4c6531, zwormData[_0x27f2c8(0x1f8)], _0x14a0e3[_0x27f2c8(0x489)], _0x14a0e3[_0x27f2c8(0x264)], !![]),
    $(_0x27f2c8(0x5d3))['val']('');
}
async function processMessageQueue() {
    var _0x48a645 = _0x40b61e;
    if (isProcessingQueue || messageQueue[_0x48a645(0x607)] === 0x0)
        return;
    isProcessingQueue = !![];
    while (messageQueue[_0x48a645(0x607)] > 0x0) {
        const _0x3a747a = messageQueue[_0x48a645(0x818)]();
        try {
            socket['send'](JSON[_0x48a645(0x714)](_0x3a747a)),
            await new Promise(_0x22fec4 => setTimeout(_0x22fec4, 0x32));
        } catch (_0x50472c) {
            console[_0x48a645(0x2aa)](_0x48a645(0x418), _0x50472c);
        }
    }
    isProcessingQueue = ![];
}
function displayMessage(_0x19bad8, _0x498d6b, _0x9f1636, _0x59c8ec, _0x2e9205, _0x46a131=![]) {
    var _0x1dfaff = _0x40b61e;
    const _0x2ffce7 = _0x59c8ec || _0x1dfaff(0x6af)
      , _0x1e583e = _0x2e9205 ? _0x1dfaff(0x325) + _0x2e9205 + _0x1dfaff(0x31c) : ''
      , _0xb97fb2 = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chat-message\x22\x20style=\x22background:\x20' + _0x2ffce7 + _0x1dfaff(0x625) + _0x1e583e + _0x1dfaff(0x7fb) + _0x9f1636 + '\x22\x20style=\x22color:\x20' + (_0x46a131 ? _0x1dfaff(0x2fb) : _0x1dfaff(0x260)) + '\x22>' + _0x19bad8 + _0x1dfaff(0x5ca) + _0x498d6b + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20';
    $(_0x1dfaff(0x1bb))[_0x1dfaff(0x6b3)](_0xb97fb2)[_0x1dfaff(0x684)]($(_0x1dfaff(0x1bb))[0x0][_0x1dfaff(0x81d)]);
}
const handlers = {
    'initialState': _0x2ba949 => {
        var _0x413f5c = _0x40b61e;
        _0x2ba949[_0x413f5c(0x397)](_0x42cc1b => gameState[_0x413f5c(0x3e2)]['set'](_0x42cc1b[_0x413f5c(0x1f8)], _0x42cc1b)),
        console[_0x413f5c(0x39b)](_0x413f5c(0x4d9), _0x2ba949);
    }
    ,
    'playerUpdate': _0x29d79e => {
        var _0x5a0cc2 = _0x40b61e;
        gameState[_0x5a0cc2(0x3e2)]['set'](_0x29d79e[_0x5a0cc2(0x1f8)], {
            ..._0x29d79e
        }),
        updateTop8Hs(),
        _0x29d79e[_0x5a0cc2(0x7a2)] && _0x29d79e[_0x5a0cc2(0x7a2)] === zwormData['teamCode'] && (createTeamUbication(_0x29d79e[_0x5a0cc2(0x7a2)], _0x29d79e[_0x5a0cc2(0x7fe)]),
        createTeamMessage(_0x29d79e[_0x5a0cc2(0x7a2)], _0x29d79e['nickname'], _0x29d79e['message']));
    }
    ,
    'hsKillUpdate': _0xde33ab => {
        var _0x44e44a = _0x40b61e;
        const _0x428483 = gameState[_0x44e44a(0x3e2)][_0x44e44a(0x338)](_0xde33ab[_0x44e44a(0x1f8)]);
        _0x428483 ? _0x428483[_0x44e44a(0x4ed)] = _0xde33ab[_0x44e44a(0x4ed)] : gameState['players']['set'](_0xde33ab[_0x44e44a(0x1f8)], {
            ..._0xde33ab,
            'position': {
                'x': 0x0,
                'y': 0x0
            }
        }),
        updateTop8Hs();
    }
    ,
    'playerDeath': _0x3d60ee => {
        var _0x20e5ca = _0x40b61e;
        gameState[_0x20e5ca(0x3e2)][_0x20e5ca(0x45c)](_0x3d60ee['id_user']),
        console[_0x20e5ca(0x39b)](_0x20e5ca(0x68b) + _0x3d60ee['nickname'] + _0x20e5ca(0x241)),
        updateTop8Hs(),
        clearTeamUbication();
    }
};
Object[_0x40b61e(0x72c)](window, handlers);
let pendingUpdate = null
  , updateTimeout = null;
function sendUpdate(_0x19629d, _0x526479={}) {
    var _0x30af7d = _0x40b61e;
    const _0xd3c736 = {
        'type': _0x19629d,
        'id_user': zwormData['id_user'],
        'nickname': zwormData[_0x30af7d(0x774)],
        'enemyNameHs': zwormData['enemyNameHs'],
        'hskill': {
            'hs': zwormData['hs'],
            'kill': zwormData[_0x30af7d(0x528)]
        },
        'position': {
            'x': zwormData[_0x30af7d(0x795)],
            'y': zwormData[_0x30af7d(0x543)]
        },
        'message': zwormData[_0x30af7d(0x681)],
        'teamCode': zwormData['teamCode'],
        'teamColor': zwormData[_0x30af7d(0x7fe)],
        'wssServer': zwormData[_0x30af7d(0x6b8)],
        ..._0x526479
    };
    socket['readyState'] === WebSocket[_0x30af7d(0x754)] && socket[_0x30af7d(0x39a)](JSON[_0x30af7d(0x714)](_0xd3c736));
}
function sendPlayerUpdate(_0x22a2e1, _0x51c36d) {
    var _0x473dac = _0x40b61e;
    const _0x3fc1b4 = Date[_0x473dac(0x61c)]();
    if (_0x3fc1b4 - lastUpdate < UPDATE_INTERVAL) {
        pendingUpdate && clearTimeout(updateTimeout);
        pendingUpdate = {
            'x': _0x22a2e1,
            'y': _0x51c36d
        },
        updateTimeout = setTimeout( () => {
            var _0x4dbe89 = _0x473dac;
            pendingUpdate && (zwormData[_0x4dbe89(0x795)] = pendingUpdate['x'],
            zwormData[_0x4dbe89(0x543)] = pendingUpdate['y'],
            sendUpdate(_0x4dbe89(0x4a9), {
                'position': pendingUpdate
            }),
            pendingUpdate = null,
            lastUpdate = Date[_0x4dbe89(0x61c)]());
        }
        , UPDATE_INTERVAL - (_0x3fc1b4 - lastUpdate));
        return;
    }
    zwormData[_0x473dac(0x795)] = _0x22a2e1,
    zwormData[_0x473dac(0x543)] = _0x51c36d,
    sendUpdate(_0x473dac(0x4a9), {
        'position': {
            'x': _0x22a2e1,
            'y': _0x51c36d
        }
    }),
    lastUpdate = _0x3fc1b4;
}
function sendPlayerDeath(_0x4b647d, _0x1f04bf) {
    var _0x2f4cae = _0x40b61e;
    sendUpdate(_0x2f4cae(0x7c7), {
        'hskill': {
            'hs': _0x4b647d,
            'kill': _0x1f04bf
        }
    });
}
function sendHSKillUpdate(_0x2bdd83, _0x1d48c4) {
    var _0x41d56f = _0x40b61e;
    sendUpdate(_0x41d56f(0x6a2), {
        'hskill': {
            'hs': _0x2bdd83,
            'kill': _0x1d48c4
        }
    });
}
let clientes = {
    'clientesVencidos': [],
    'clientesActivos': []
}
  , clientsSkins = {
    'clientsSkinsVencidos': [],
    'clientsSkinsActivos': []
};
var TIME = new Date()['getTime']();
async function loadUsers() {
    var _0x29d3ad = _0x40b61e;
    await fetch('https://xseko60.github.io/wormExtension/api/clients.json?v=' + TIME)[_0x29d3ad(0x298)](_0x40c2bf => _0x40c2bf[_0x29d3ad(0x655)]())[_0x29d3ad(0x298)](_0x28dbf1 => {
        var _0x124cec = _0x29d3ad;
        console[_0x124cec(0x39b)](_0x28dbf1);
        if (_0x28dbf1['success']) {
            let _0x3c5073 = _0x28dbf1[_0x124cec(0x7cb)];
            clientes['clientesActivos'] = _0x3c5073[_0x124cec(0x2b6)](_0x2e99aa => {
                return _0x2e99aa['client_ID'];
            }
            );
        } else
            clientes = {
                'clientesVencidos': [],
                'clientesActivos': []
            },
            alert(_0x124cec(0x4e3));
    }
    );
}
loadUsers();
async function loadSkinUnlock() {
    var _0x2602b9 = _0x40b61e;
    await fetch('https://xseko60.github.io/wormExtension/api/skinsActived.json?v=' + TIME)[_0x2602b9(0x298)](_0x40472b => _0x40472b[_0x2602b9(0x655)]())['then'](_0x14d00e => {
        var _0x23271a = _0x2602b9;
        console['log'](_0x14d00e);
        if (_0x14d00e[_0x23271a(0x688)]) {
            let _0x3a87c6 = _0x14d00e[_0x23271a(0x7cb)];
            clientsSkins[_0x23271a(0x386)] = _0x3a87c6[_0x23271a(0x2b6)](_0x1c5865 => {
                var _0x1e8b8e = _0x23271a;
                return _0x1c5865[_0x1e8b8e(0x2ec)];
            }
            );
        } else
            clientsSkins = {
                'clientsSkinsVencidos': [],
                'clientsSkinsActivos': []
            },
            alert('An\x20error\x20occurred\x20while\x20loading\x20clients');
    }
    );
}
loadSkinUnlock();
let serverDataTimMap = [];
async function loadServersTimMap() {
    var _0xeb7943 = _0x40b61e;
    const _0x1948e7 = 'https://xseko60.github.io/wormExtension/api/serversTimMap.json?v=' + TIME;
    try {
        const _0x5548ec = await fetch(_0x1948e7)
          , _0x22c50b = await _0x5548ec[_0xeb7943(0x318)]()
          , _0x4ea406 = /<div class=\\"div_item\\">([\s\S]*?)<\\\/div>/g
          , _0x2422b6 = [..._0x22c50b[_0xeb7943(0x596)](_0x4ea406)];
        serverDataTimMap = _0x2422b6[_0xeb7943(0x3a0)](_0x2370f1 => {
            var _0x91ad8a = _0xeb7943;
            const _0x49516a = _0x2370f1[0x1]
              , _0x23b48d = /<a href=\\"(.*?)\\" class=\\"select_item\\" data-name=\\"(.*?)\\" data-port=\\"(.*?)\\">(.*?)<\\\/a>/
              , _0x20a7b1 = _0x49516a[_0x91ad8a(0x6f8)](_0x23b48d);
            if (!_0x20a7b1)
                return null;
            const _0x3b8dbc = _0x20a7b1[0x3][_0x91ad8a(0x707)](/\\\//g, '/')
              , _0x5cd4a5 = _0x20a7b1[0x2]
              , _0x518ad8 = decodeUnicode(_0x20a7b1[0x4][_0x91ad8a(0x4b9)]())
              , _0x4ea9e5 = /<img src=\\"(.*?)\\"/
              , _0x2d9184 = _0x49516a[_0x91ad8a(0x6f8)](_0x4ea9e5)
              , _0x5e0038 = _0x2d9184 ? _0x2d9184[0x1][_0x91ad8a(0x707)](/\\\//g, '/') : '';
            return {
                'dataCon': _0x3b8dbc,
                'dataRoom': _0x5cd4a5,
                'dataType': _0x91ad8a(0x38a),
                'imgSrc': _0x5e0038,
                'serverName': _0x518ad8
            };
        }
        )[_0xeb7943(0x2b6)](Boolean);
    } catch (_0x5acc24) {
        console[_0xeb7943(0x2aa)](_0xeb7943(0x2a4), _0x5acc24);
    }
}
var top1Servers = {};
async function extractTopScores() {
    var _0x1ef296 = _0x40b61e;
    const _0x283b82 = _0x1ef296(0x505) + Date[_0x1ef296(0x61c)]();
    try {
        let _0x2432ba = await fetch(_0x283b82);
        if (!_0x2432ba['ok'])
            throw new Error(_0x1ef296(0x3d1) + _0x2432ba[_0x1ef296(0x709)]);
        let _0x42d0b1 = await _0x2432ba[_0x1ef296(0x655)]();
        top1Servers = {};
        for (let _0x4d5916 in _0x42d0b1) {
            const _0x34e7fc = _0x42d0b1[_0x4d5916];
            if (!_0x34e7fc[_0x1ef296(0x201)])
                continue;
            const _0x42d444 = _0x34e7fc['players'] || []
              , _0x47e1b6 = _0x34e7fc[_0x1ef296(0x201)];
            if (_0x42d444[_0x1ef296(0x607)] > 0x0) {
                let _0x38e99a = _0x42d444[_0x1ef296(0x2d3)]( (_0x29e172, _0x46f607) => _0x46f607[_0x1ef296(0x284)] > _0x29e172[_0x1ef296(0x284)] ? _0x46f607 : _0x29e172, _0x42d444[0x0])
                  , _0x496cd5 = formatScore(_0x38e99a[_0x1ef296(0x284)])
                  , _0xbe6f1 = getStatusColor(_0x38e99a[_0x1ef296(0x284)]);
                top1Servers[_0x47e1b6] = {
                    'ServerName': _0x38e99a[_0x1ef296(0x3b7)],
                    'Initials': _0x4d5916,
                    'Score': _0x496cd5,
                    'StatusColor': _0xbe6f1,
                    'Avatar': _0x34e7fc[_0x1ef296(0x6d4)] || null,
                    'Name': _0x38e99a['Name'] || _0x1ef296(0x78a),
                    'TopPlayers': _0x42d444['slice'](0x0, 0xa)
                };
            } else
                _0x34e7fc[_0x1ef296(0x201)] && (top1Servers[_0x47e1b6] = {
                    'ServerName': _0x34e7fc[_0x1ef296(0x73a)],
                    'Initials': _0x4d5916,
                    'Score': _0x1ef296(0x388),
                    'StatusColor': 'gray',
                    'Avatar': _0x34e7fc[_0x1ef296(0x6d4)] || _0x1ef296(0x68d),
                    'Name': _0x1ef296(0x6b2),
                    'TopPlayers': []
                });
        }
        console[_0x1ef296(0x39b)]('Datos\x20de\x20Top\x201\x20organizados\x20por\x20WSS:', top1Servers);
    } catch (_0x450960) {
        console[_0x1ef296(0x2aa)](_0x1ef296(0x6c8), _0x450960);
    }
}
let serverData = [];
async function loadServersWormWorld() {
    var _0x331fdc = _0x40b61e;
    const _0x402e88 = Date['now']()
      , _0x15ab24 = _0x331fdc(0x5f8) + _0x402e88;
    try {
        const _0x2ed67a = await fetch(_0x15ab24)
          , _0x5c93c5 = await _0x2ed67a[_0x331fdc(0x655)]();
        serverData = _0x5c93c5['map'](_0x5c0602 => ({
            'dataCon': _0x5c0602[_0x331fdc(0x7bb)],
            'dataRoom': _0x5c0602['dataRoom'],
            'serverName': _0x5c0602[_0x331fdc(0x73a)],
            'dataType': _0x5c0602[_0x331fdc(0x7a7)],
            'imgSrc': _0x5c0602[_0x331fdc(0x72d)]
        })),
        console[_0x331fdc(0x39b)](serverData);
    } catch (_0x365f84) {
        console[_0x331fdc(0x2aa)](_0x331fdc(0x263), _0x365f84);
    }
}
function formatScore(_0x164cd2) {
    var _0x1d8b28 = _0x40b61e;
    if (_0x164cd2 >= 0xf4240)
        return (_0x164cd2 / 0xf4240)[_0x1d8b28(0x223)](0x1) + 'M';
    else {
        if (_0x164cd2 >= 0x3e8)
            return (_0x164cd2 / 0x3e8)[_0x1d8b28(0x223)](0x1) + 'K';
    }
    return _0x164cd2[_0x1d8b28(0x4b3)]();
}
function getStatusColor(_0x2466f0) {
    var _0x193071 = _0x40b61e;
    if (_0x2466f0 > 0x989680)
        return 'green';
    else
        return _0x2466f0 > 0x1e8480 ? 'orange' : _0x193071(0x302);
}
async function registerUpdatePlayer(_0x518297) {
    var _0x59451e = _0x40b61e;
    await fetch(_0x59451e(0x1f3), {
        'method': _0x59451e(0x3f7),
        'body': JSON[_0x59451e(0x714)]({
            'data': _0x518297
        })
    })[_0x59451e(0x298)](_0xf9b98d => _0xf9b98d[_0x59451e(0x655)]())[_0x59451e(0x298)](_0x5a4831 => {
        var _0x3d6c7f = _0x59451e;
        console[_0x3d6c7f(0x39b)](_0x5a4831);
    }
    );
}
async function checkSubscriptionExpired(_0x7e7ea7) {
    var _0x1594c9 = _0x40b61e;
    await fetch(_0x1594c9(0x3d9), {
        'method': 'POST',
        'body': JSON['stringify']({
            'code': _0x7e7ea7
        })
    })[_0x1594c9(0x298)](_0x1c4e0b => _0x1c4e0b[_0x1594c9(0x655)]())[_0x1594c9(0x298)](_0x26bd83 => {
        console['log'](_0x26bd83);
    }
    );
}
function fetchCustomLogo(_0x1e2b9c) {
    var _0x5a12f7 = _0x40b61e;
    $[_0x5a12f7(0x6bb)]({
        'url': 'https://swykz.theoxt.com/api/streming.php',
        'method': _0x5a12f7(0x38e),
        'dataType': _0x5a12f7(0x655),
        'success': function(_0x1e2114) {
            var _0x3b2aff = _0x5a12f7
              , _0x16aa50 = _0x1e2114[_0x3b2aff(0x729)][_0x3b2aff(0x24c)][_0x3b2aff(0x2b6)](function(_0x1e1fab) {
                var _0x2efc70 = _0x3b2aff;
                return _0x1e1fab[_0x2efc70(0x1e5)] === _0x1e2b9c;
            });
            if (_0x16aa50[_0x3b2aff(0x607)] === 0x0) {
                console[_0x3b2aff(0x39b)](_0x3b2aff(0x26d));
                return;
            }
            var _0x24a3f2 = _0x16aa50[0x0];
            $(_0x3b2aff(0x5cc))['attr'](_0x3b2aff(0x4ec), _0x24a3f2['logo']),
            $(_0x3b2aff(0x46e))[_0x3b2aff(0x35c)](_0x3b2aff(0x4ec), _0x24a3f2[_0x3b2aff(0x7e1)]),
            $('.mm-logo')[_0x3b2aff(0x35c)]('src', _0x24a3f2[_0x3b2aff(0x7e1)]);
        },
        'error': function(_0x3471da) {
            var _0x445b34 = _0x5a12f7;
            console[_0x445b34(0x2aa)]('Error\x20al\x20obtener\x20los\x20datos:', _0x3471da);
        }
    });
}
async function init() {
    var _0x16d2dd = _0x40b61e;
    await Promise[_0x16d2dd(0x5bc)]([extractTopScores(), loadServersWormWorld(), loadServersTimMap()]),
    console[_0x16d2dd(0x39b)]('Todo\x20listo'),
    renderInterface(serverData, serverDataTimMap, top1Servers);
}
function renderInterface(_0x10bdab, _0x2deec8, _0x274f58) {
    var _0x4caef7 = _0x40b61e;
    $('.description-text')[_0x4caef7(0x38d)]();
    let _0x111cc3 = _0x4caef7(0x5d5);
    const _0x3ee368 = {
        'sao': 'br',
        'vin': 'us',
        'dal': 'us',
        'fra': 'de',
        'sgp': 'sg',
        'tok': 'jp',
        'syd': 'au',
        'lon': 'gb',
        'tor': 'ca',
        'mex': 'mx',
        'sin': 'sg',
        'hil': 'us',
        'gra': 'de'
    }
      , _0x1a0c25 = [{
        'code': 'br',
        'name': 'Peru'
    }, {
        'code': 'mx',
        'name': _0x4caef7(0x5db)
    }, {
        'code': 'us',
        'name': _0x4caef7(0x732)
    }, {
        'code': 'ca',
        'name': _0x4caef7(0x440)
    }, {
        'code': 'de',
        'name': 'Germania'
    }, {
        'code': 'fr',
        'name': 'Francia'
    }, {
        'code': 'sg',
        'name': _0x4caef7(0x7e8)
    }, {
        'code': 'jp',
        'name': 'Japon'
    }, {
        'code': 'au',
        'name': 'Australia'
    }, {
        'code': 'gb',
        'name': _0x4caef7(0x628)
    }];
    function _0xb829cc(_0xe28633) {
        var _0x29fafe = _0x4caef7;
        if (/^\d+[a-z]{2}$/i[_0x29fafe(0x550)](_0xe28633))
            return _0xe28633[_0x29fafe(0x517)](-0x2)[_0x29fafe(0x6e8)]();
        else
            return /^[A-Z]{2}_\d+$/i[_0x29fafe(0x550)](_0xe28633) ? _0xe28633[_0x29fafe(0x821)]('_')[0x0]['toLowerCase']() : _0x29fafe(0x618);
    }
    $(_0x4caef7(0x48f))[_0x4caef7(0x6b3)](_0x4caef7(0x760)),
    $(_0x4caef7(0x27b))[_0x4caef7(0x2c0)](function() {
        var _0x11dad6 = _0x4caef7;
        let _0x5eae94 = $(_0x11dad6(0x4cb))[_0x11dad6(0x382)]()
          , _0x38b3ce = $(_0x11dad6(0x2f8))[_0x11dad6(0x382)]();
        if (!_0x5eae94 || _0x38b3ce === '') {
            alert(_0x11dad6(0x4d7));
            return;
        }
        zw_lastserver = _0x11dad6(0x287) + _0x5eae94 + ':' + _0x38b3ce + _0x11dad6(0x32c),
        anApp['r']['Hd'](),
        anApp['sa'](zw_lastserver),
        zw_servertext[_0x11dad6(0x318)] = '' + zw_lastserver['replace']('wss://', '')[_0x11dad6(0x707)](_0x11dad6(0x4eb), '')[_0x11dad6(0x707)](_0x11dad6(0x32c), '');
    });
    const _0x26202c = $('<ul\x20class=\x22ui-tabs-nav\x22></ul>')
      , _0x5a5297 = $('<div\x20class=\x22servers-container\x22></div>');
    _0x1a0c25[_0x4caef7(0x397)](function(_0xc3b25a, _0x518df1) {
        var _0x1640b8 = _0x4caef7;
        _0x26202c['append'](_0x1640b8(0x487) + (_0x518df1 === 0x0 ? _0x1640b8(0x75a) : '') + _0x1640b8(0x1b9) + _0xc3b25a[_0x1640b8(0x1b0)] + _0x1640b8(0x339) + _0xc3b25a[_0x1640b8(0x1b0)] + '\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20'),
        _0x5a5297[_0x1640b8(0x6b3)](_0x1640b8(0x837) + _0xc3b25a[_0x1640b8(0x1b0)] + '\x22\x20style=\x22display:\x20' + (_0x518df1 === 0x0 ? _0x1640b8(0x787) : _0x1640b8(0x5e1)) + _0x1640b8(0x769));
    }),
    $(_0x4caef7(0x48f))[_0x4caef7(0x6b3)](_0x26202c, _0x5a5297),
    $(_0x4caef7(0x57d))[_0x4caef7(0x2c0)](function() {
        var _0x177082 = _0x4caef7
          , _0x10fc8c = $(this)[_0x177082(0x294)]('country');
        $(_0x177082(0x57d))[_0x177082(0x317)](_0x177082(0x75a)),
        $(this)[_0x177082(0x2bd)](_0x177082(0x75a)),
        $('.servers-container\x20>\x20div')[_0x177082(0x719)](),
        $(_0x177082(0x70b) + _0x10fc8c)[_0x177082(0x2c6)](0xc8);
    });
    function _0x5561fd(_0x228eb7) {
        var _0x241b52 = _0x4caef7;
        $(_0x241b52(0x47c))[_0x241b52(0x38d)](),
        _0x228eb7[_0x241b52(0x397)](function(_0x2b59a9) {
            var _0x24e054 = _0x241b52;
            const _0x51794e = {
                'serverName': _0x2b59a9[_0x24e054(0x73a)] || _0x2b59a9[_0x24e054(0x62e)] || '???',
                'dataCon': _0x2b59a9[_0x24e054(0x7bb)] || _0x2b59a9[_0x24e054(0x2d6)],
                'dataRoom': _0x2b59a9['dataRoom'] || _0x2b59a9[_0x24e054(0x40b)] || _0x24e054(0x288),
                'imgSrc': _0x2b59a9[_0x24e054(0x72d)] || _0x2b59a9['streamerImg'] || _0x24e054(0x68d)
            };
            _0xe1e0a9(_0x51794e, _0x274f58);
        });
    }
    $(document)['on'](_0x4caef7(0x2c0), '#toggleServerSource', function() {
        var _0x934be = _0x4caef7;
        _0x111cc3 = _0x111cc3 === _0x934be(0x5d5) ? _0x934be(0x71d) : _0x934be(0x5d5),
        $(this)[_0x934be(0x318)](_0x111cc3 === _0x934be(0x5d5) ? '🔄\x20Switch\x20to\x20TimMap\x20Servers' : _0x934be(0x3a2)),
        _0x5561fd(_0x111cc3 === _0x934be(0x5d5) ? _0x10bdab : _0x2deec8);
    }),
    _0x5561fd(_0x10bdab);
    function _0xe1e0a9(_0x3abd23, _0x26c221) {
        var _0x7546b5 = _0x4caef7;
        let _0x5dff97 = _0xb829cc(_0x3abd23[_0x7546b5(0x448)]);
        if (_0x5dff97 === 'ae')
            _0x5dff97 = 'gb';
        if (!_0x1a0c25[_0x7546b5(0x259)](_0x1c6f4d => _0x1c6f4d[_0x7546b5(0x1b0)] === _0x5dff97))
            return;
        let _0x492b15 = _0x3abd23[_0x7546b5(0x7bb)]?.[_0x7546b5(0x6f8)](/wss:\/\/([a-z]+)-/i)
          , _0x2ebc57 = _0x492b15 ? _0x492b15[0x1] : null
          , _0x511fa5 = _0x3ee368[_0x2ebc57] ? _0x3ee368[_0x2ebc57][_0x7546b5(0x72f)]() : _0x7546b5(0x4ff)
          , _0x1bcda6 = _0x3abd23[_0x7546b5(0x448)]['trim']()['toLowerCase']();
        const _0xb25d5d = _0x3abd23[_0x7546b5(0x7bb)] || _0x3abd23[_0x7546b5(0x2d6)];
        let _0x457110 = _0x26c221[_0xb25d5d] || {
            'Score': _0x7546b5(0x288),
            'StatusColor': _0x7546b5(0x7c4),
            'Avatar': _0x7546b5(0x68d)
        }
          , _0x5ce674 = $(_0x7546b5(0x5c2) + _0xb25d5d + '\x22\x20value=\x22' + _0x3abd23[_0x7546b5(0x448)] + _0x7546b5(0x2ab) + _0x457110[_0x7546b5(0x284)] + _0x7546b5(0x20a) + _0x457110[_0x7546b5(0x469)] + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22status-dot\x22\x20style=\x22background-color:\x20' + _0x457110[_0x7546b5(0x53f)] + _0x7546b5(0x3e5) + _0x3abd23[_0x7546b5(0x73a)] + _0x7546b5(0x731) + _0x511fa5 + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22server-top1\x22\x20data-score=\x22' + _0x457110['Score'] + _0x7546b5(0x20a) + _0x457110['Avatar'] + '\x22>' + _0x457110['Score'] + _0x7546b5(0x1ea) + _0x3abd23['imgSrc'] + _0x7546b5(0x48d));
        $(_0x7546b5(0x70b) + _0x5dff97 + _0x7546b5(0x640))['append'](_0x5ce674);
    }
    $(document)['on'](_0x4caef7(0x2c0), _0x4caef7(0x7ad), function() {
        var _0x508895 = _0x4caef7;
        let _0x39b569 = $(this)[_0x508895(0x35c)]('value')
          , _0x353730 = $(this)['attr'](_0x508895(0x616));
        _0x353730 && (anApp['r']['Hd'](),
        anApp['sa'](_0x353730),
        zw_servertext[_0x508895(0x318)] = _0x39b569,
        setTimeout( () => {
            var _0x32b448 = _0x508895;
            zw_servertext[_0x32b448(0x318)] = _0x39b569;
        }
        , 0x7d0));
    }),
    createFloatingElements(),
    bindHoverEvents(_0x4caef7(0x7d7)),
    bindHoverEvents(_0x4caef7(0x393));
}
function createFloatingElements() {
    var _0x1e224f = _0x40b61e;
    if (!document['getElementById'](_0x1e224f(0x6a5))) {
        const _0x4e5158 = document[_0x1e224f(0x6fa)](_0x1e224f(0x3b0));
        _0x4e5158['id'] = _0x1e224f(0x6a5),
        Object['assign'](_0x4e5158[_0x1e224f(0x1b5)], {
            'position': 'absolute',
            'display': _0x1e224f(0x5e1),
            'pointerEvents': 'none',
            'opacity': '0',
            'transition': _0x1e224f(0x65d),
            'zIndex': _0x1e224f(0x69f)
        });
        const _0x33642e = document[_0x1e224f(0x6fa)](_0x1e224f(0x5fa));
        _0x33642e['id'] = _0x1e224f(0x6f3),
        Object[_0x1e224f(0x72c)](_0x33642e[_0x1e224f(0x1b5)], {
            'width': '100px',
            'height': _0x1e224f(0x758),
            'borderRadius': _0x1e224f(0x28a),
            'border': _0x1e224f(0x687),
            'boxShadow': _0x1e224f(0x452),
            'backgroundColor': '#1a1a1a'
        }),
        _0x4e5158[_0x1e224f(0x1f6)](_0x33642e),
        document[_0x1e224f(0x349)][_0x1e224f(0x1f6)](_0x4e5158);
    }
    if (!document[_0x1e224f(0x808)]('top10Preview')) {
        const _0x1385e9 = document[_0x1e224f(0x6fa)](_0x1e224f(0x3b0));
        _0x1385e9['id'] = _0x1e224f(0x4aa),
        Object['assign'](_0x1385e9[_0x1e224f(0x1b5)], {
            'position': _0x1e224f(0x5d7),
            'display': _0x1e224f(0x5e1),
            'pointerEvents': _0x1e224f(0x5e1),
            'opacity': '0',
            'transition': _0x1e224f(0x65d),
            'zIndex': _0x1e224f(0x69f),
            'padding': '10px',
            'borderRadius': _0x1e224f(0x2d1),
            'backgroundColor': _0x1e224f(0x2f4),
            'color': _0x1e224f(0x28f),
            'fontSize': _0x1e224f(0x225),
            'minWidth': _0x1e224f(0x6f6),
            'boxShadow': '0\x200\x2010px\x20rgba(0,0,0,0.6)',
            'fontFamily': _0x1e224f(0x780)
        });
        const _0x40c937 = document[_0x1e224f(0x6fa)](_0x1e224f(0x3b0));
        _0x40c937['id'] = _0x1e224f(0x590),
        _0x1385e9['appendChild'](_0x40c937),
        document[_0x1e224f(0x349)][_0x1e224f(0x1f6)](_0x1385e9);
    }
}
function showAvatar(_0x2984ab, _0x26f3bc) {
    var _0x1d0238 = _0x40b61e;
    _0x26f3bc && ($(_0x1d0238(0x3d3))[_0x1d0238(0x35c)](_0x1d0238(0x4ec), _0x26f3bc),
    $(_0x1d0238(0x724))[_0x1d0238(0x519)]({
        'top': _0x2984ab[_0x1d0238(0x486)] + 0xa + 'px',
        'left': _0x2984ab[_0x1d0238(0x649)] + 0xa + 'px',
        'display': 'block'
    })[_0x1d0238(0x619)](!![], !![])['fadeTo'](0xc8, 0x1));
}
function showTop10(_0x10b50e, _0x1fd6ee) {
    var _0x5e05a8 = _0x40b61e;
    if (_0x1fd6ee[_0x5e05a8(0x607)] > 0x0) {
        let _0x37bd2b = _0x5e05a8(0x73e);
        _0x37bd2b += _0x1fd6ee[_0x5e05a8(0x3a0)]( (_0x4de57c, _0x4273fe) => {
            var _0x52f45f = _0x5e05a8;
            const _0x2dd04a = _0x4273fe === 0x0;
            return _0x52f45f(0x842) + (_0x2dd04a ? _0x52f45f(0x5a0) : '') + _0x52f45f(0x5c5) + (_0x2dd04a ? '⭐️' : _0x4273fe + 0x1 + '.') + '\x20' + sanitize(_0x4de57c[_0x52f45f(0x433)]) + _0x52f45f(0x1b3) + formatScore(_0x4de57c[_0x52f45f(0x284)]) + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>';
        }
        )[_0x5e05a8(0x43b)](''),
        $(_0x5e05a8(0x520))[_0x5e05a8(0x450)](_0x37bd2b);
        const _0x5658a9 = 0x64;
        $(_0x5e05a8(0x634))['css']({
            'top': _0x10b50e[_0x5e05a8(0x486)] + 0xa + _0x5658a9 + 0xa + 'px',
            'left': _0x10b50e[_0x5e05a8(0x649)] + 0xa + 'px',
            'display': _0x5e05a8(0x787)
        })[_0x5e05a8(0x619)](!![], !![])['fadeTo'](0xc8, 0x1);
    }
}
function bindHoverEvents(_0x5634ca) {
    var _0x5bf5fc = _0x40b61e;
    $(document)[_0x5bf5fc(0x6fb)](_0x5bf5fc(0x4d1), _0x5634ca)['on'](_0x5bf5fc(0x4d1), _0x5634ca, function(_0x317213) {
        var _0x2a46b9 = _0x5bf5fc;
        const _0x45fe8b = $(this)[_0x2a46b9(0x3f6)]('tr')[_0x2a46b9(0x35c)](_0x2a46b9(0x616));
        if (!_0x45fe8b)
            return;
        const _0x553b7a = top1Servers[_0x45fe8b];
        _0x553b7a && (showAvatar(_0x317213, _0x553b7a[_0x2a46b9(0x469)]),
        showTop10(_0x317213, _0x553b7a[_0x2a46b9(0x5e3)] || []));
    }),
    $(document)[_0x5bf5fc(0x6fb)](_0x5bf5fc(0x6a3), _0x5634ca)['on'](_0x5bf5fc(0x6a3), _0x5634ca, function(_0x5ee25b) {
        var _0x4db58b = _0x5bf5fc;
        const _0x2bc79e = 0x64;
        $(_0x4db58b(0x724))[_0x4db58b(0x519)]({
            'top': _0x5ee25b['pageY'] + 0xa + 'px',
            'left': _0x5ee25b['pageX'] + 0xa + 'px'
        }),
        $(_0x4db58b(0x634))[_0x4db58b(0x519)]({
            'top': _0x5ee25b['pageY'] + 0xa + _0x2bc79e + 0xa + 'px',
            'left': _0x5ee25b[_0x4db58b(0x649)] + -0x4b + 'px'
        });
    }),
    $(document)['off']('mouseleave', _0x5634ca)['on'](_0x5bf5fc(0x31f), _0x5634ca, function() {
        var _0x3b76b0 = _0x5bf5fc;
        $('#avatarPreview')[_0x3b76b0(0x619)](!![], !![])['fadeTo'](0x12c, 0x0, function() {
            var _0x1623b0 = _0x3b76b0;
            $(this)[_0x1623b0(0x719)]();
        }),
        $(_0x3b76b0(0x634))['stop'](!![], !![])[_0x3b76b0(0x371)](0x12c, 0x0, function() {
            var _0x159aaa = _0x3b76b0;
            $(this)[_0x159aaa(0x719)]();
        });
    });
}
init();
function sanitize(_0x571df0) {
    var _0x2629a3 = _0x40b61e;
    return _0x571df0[_0x2629a3(0x707)](/[^\x20-\x7E¡-ÿ\u0E00-\u0E7F\u0900-\u097F]/g, '')['trim']();
}
function obtenerImagenPorSeleccion(_0x434341) {
    var _0x14e912 = _0x40b61e;
    let _0x3a1489 = '';
    switch (_0x434341) {
    case '0':
        _0x3a1489 = _0x14e912(0x42b);
        break;
    case '1':
        _0x3a1489 = _0x14e912(0x1c5);
        break;
    case '2':
        _0x3a1489 = _0x14e912(0x31b);
        break;
    case '3':
        _0x3a1489 = 'https://asserts.wormworld.io/backgrounds/bkgnd10.png';
        break;
    case '4':
        _0x3a1489 = 'https://asserts.wormworld.io/backgrounds/bkgnd6.png';
        break;
    case '5':
        _0x3a1489 = _0x14e912(0x669);
        break;
    case '6':
        _0x3a1489 = _0x14e912(0x2ea);
        break;
    case '7':
        _0x3a1489 = _0x14e912(0x82d);
        break;
    case '8':
        _0x3a1489 = _0x14e912(0x55a);
        break;
    case '9':
        _0x3a1489 = 'https://asserts.wormworld.io/backgrounds/bg_sky_4.png';
        break;
    case '10':
        _0x3a1489 = 'https://asserts.wormworld.io/backgrounds/bg_sky_5.png';
        break;
    case '11':
        _0x3a1489 = _0x14e912(0x38f);
        break;
    case '12':
        _0x3a1489 = _0x14e912(0x207);
        break;
    case '13':
        _0x3a1489 = _0x14e912(0x59a);
        break;
    case '14':
        _0x3a1489 = _0x14e912(0x4bc);
        break;
    default:
        console[_0x14e912(0x2f3)](_0x14e912(0x227));
    }
    return _0x3a1489;
}
function startInterval() {
    clearInterval(intervalID),
    intervalID === null && (intervalID = setInterval(function() {
        var _0x78aa4c = anApp['s']['H']['sk'];
        let _0x218713 = Math['PI'];
        var _0x25833b = _0x78aa4c + _0x218713 / 0x168 * 0x9;
        _0x25833b >= _0x218713 && (_0x25833b = -_0x78aa4c),
        anApp['s']['H']['sk'] = _0x25833b;
    }, 0x37));
}
function adjustInterval() {
    cycleCounter >= 0x28 && (isIncrementing ? initialInterval += 0x19 : initialInterval -= 0x64,
    cycleCounter = 0x1);
}
function controlIntervalAdjustment() {
    initialInterval === 0x37 && cycleCounter >= 0x28 && (initialInterval += 0x19,
    cycleCounter = 0x1,
    isIncrementing = !![]);
    if (initialInterval === 0x50)
        adjustInterval();
    if (initialInterval === 0x69)
        adjustInterval();
    if (initialInterval === 0x82)
        adjustInterval();
    if (initialInterval === 0x9b)
        adjustInterval();
    if (initialInterval === 0xb4)
        adjustInterval();
    if (initialInterval === 0xcd)
        adjustInterval();
    if (initialInterval === 0xe6)
        adjustInterval();
    if (initialInterval === 0xff)
        adjustInterval();
    if (initialInterval === 0x118)
        adjustInterval();
    if (initialInterval === 0x131)
        adjustInterval();
    if (initialInterval === 0x14a)
        adjustInterval();
    if (initialInterval === 0x163)
        adjustInterval();
    if (initialInterval === 0x17c)
        adjustInterval();
    if (initialInterval === 0x195)
        adjustInterval();
    if (initialInterval === 0x1ae)
        adjustInterval();
    initialInterval === 0x1c7 && cycleCounter >= 0x28 && (initialInterval -= 0x64,
    cycleCounter = 0x1,
    isIncrementing = ![]);
}
function manageIntervalCycle() {
    clearInterval(intervalID);
    if (intervalID === null) {
        let _0xc5b195 = anApp['s']['H']['sk']
          , _0x30b06e = Math['PI']
          , _0xffa5ee = _0xc5b195 + _0x30b06e / 0x168 * 0x9;
        _0xffa5ee >= _0x30b06e && (_0xffa5ee = -_0xc5b195),
        anApp['s']['H']['sk'] = _0xffa5ee,
        cycleCounter += 0x1,
        controlIntervalAdjustment(),
        isRunning && (intervalID = setInterval(manageIntervalCycle, initialInterval));
    }
}
function starAutoCircle() {
    isRunning = !![],
    initialInterval = 0x37,
    cycleCounter = 0x1,
    isIncrementing = !![],
    manageIntervalCycle();
}
const isPremiumUser = localStorage['getItem'](_0x40b61e(0x3e0)) === _0x40b61e(0x544)
  , wormxt_5dlrs_Obj = {
    'visiblePowersAll': ![],
    'speed_zigzag': !![]
};
var wormxt_Obj = {
    'laserColor': _0x40b61e(0x7aa),
    'colorFondo': _0x40b61e(0x744),
    'colorBorde': _0x40b61e(0x45b),
    'laserHS': ![],
    'spawnInfinity': ![],
    'backgroundSolid': ![],
    'sectores': ![],
    'CLIENTE_ADMIN': 0x1,
    'CLIENTE_ACTIVO': 0x3,
    'CLIENTE_INACTIVO': 0x4
};
const showVersionPays = async function(_0x597e45) {
    var _0x462d12 = _0x40b61e
      , _0x53d3e1 = clientes[_0x462d12(0x3ff)]['find'](function(_0x11db33) {
        var _0x43343c = _0x462d12;
        return _0x11db33[_0x43343c(0x2ec)] === _0x597e45[_0x43343c(0x59b)]['userId'];
    });
    if (_0x53d3e1) {
        console[_0x462d12(0x39b)](_0x462d12(0x36c) + _0x597e45['user_data']['userId'] + _0x462d12(0x759));
        const _0x1fa3d4 = new Date()
          , _0x3e4aa1 = new Date(_0x53d3e1[_0x462d12(0x686)]);
        _0x1fa3d4 > _0x3e4aa1 ? (console['log']('La\x20fecha\x20de\x20expiraci�n\x20ha\x20vencido.'),
        localStorage['setItem'](_0x462d12(0x3e0), _0x462d12(0x38a))) : (console['log'](_0x462d12(0x4fd)),
        settings5dolars(_0x53d3e1[_0x462d12(0x686)]),
        localStorage['setItem'](_0x462d12(0x3e0), _0x462d12(0x544)));
    } else
        console[_0x462d12(0x39b)](_0x462d12(0x83a)),
        localStorage['setItem'](_0x462d12(0x3e0), _0x462d12(0x38a));
};
function setSectorsGame() {
    var _0x1abfa4 = _0x40b61e;
    zw_Background[_0x1abfa4(0x48e)](),
    zw_Background[_0x1abfa4(0x1d5)](),
    console[_0x1abfa4(0x39b)](theoObjects['colorFondo']);
    if (theoKzObjects[_0x1abfa4(0x240)])
        zw_Background[_0x1abfa4(0x4a2)]('0x' + theoObjects['colorFondo'], 0x1),
        zw_Background[_0x1abfa4(0x2c9)](0x1, '0x' + theoObjects['colorBorde'], 0x1),
        zw_Background[_0x1abfa4(0x512)](0x0, 0x0, 0x1f4),
        zw_Background[_0x1abfa4(0x77f)]();
    else {
        if (theoKzObjects[_0x1abfa4(0x290)]) {
            var _0x1ab94d = 0x0
              , _0x5a9352 = 0x0
              , _0x38eba9 = 0x1f4
              , _0x5ec0a2 = _0x38eba9
              , _0x37ab08 = 0x2 * _0x5ec0a2 / 0x5
              , _0x106fcd = _0x1abfa4(0x2d8)['split']('')
              , _0x34027d = Math['PI'] * 0x2 / 0xa;
            for (var _0x24988e = 0x0; _0x24988e < 0x5; _0x24988e++) {
                for (var _0x28c86f = 0x0; _0x28c86f < 0xa; _0x28c86f++) {
                    var _0x2a2e4c = _0x28c86f * _0x34027d
                      , _0x28d521 = (_0x28c86f + 0x1) * _0x34027d
                      , _0xa6ca04 = _0x38eba9 - (_0x24988e + 0.01) * (_0x37ab08 / 0x2)
                      , _0x1fb378 = _0x1ab94d + Math[_0x1abfa4(0x673)](_0x2a2e4c) * _0xa6ca04
                      , _0x2d780f = _0x5a9352 + Math['sin'](_0x2a2e4c) * _0xa6ca04;
                    zw_Background['beginFill']('0x' + theoObjects['colorFondo'], 0x1),
                    zw_Background[_0x1abfa4(0x2c9)](0.5, '0x' + theoObjects[_0x1abfa4(0x827)], 0x1),
                    zw_Background[_0x1abfa4(0x454)](_0x1ab94d, _0x5a9352),
                    zw_Background[_0x1abfa4(0x45d)](_0x1fb378, _0x2d780f),
                    zw_Background[_0x1abfa4(0x7f9)](_0x1ab94d, _0x5a9352, _0xa6ca04, _0x2a2e4c, _0x28d521),
                    zw_Background[_0x1abfa4(0x45d)](_0x1ab94d, _0x5a9352),
                    zw_Background['endFill']();
                    if (_0x24988e < 0x4) {
                        var _0x5eff83 = _0x106fcd[_0x24988e] + (_0x28c86f + 0x1);
                        if (!zw_Background[_0x1abfa4(0x762)](_0x5eff83)) {
                            var _0x2e54e0 = new PIXI['TextStyle']({
                                'fontSize': '15px',
                                'fill': _0x1abfa4(0x583)
                            })
                              , _0xe65f33 = new PIXI['Text'](_0x5eff83,_0x2e54e0);
                            _0xe65f33[_0x1abfa4(0x44d)]['set'](0.5);
                            var _0x8a61ec = _0x2a2e4c + (_0x28d521 - _0x2a2e4c) / 0x2
                              , _0x2a0911 = _0xa6ca04 - _0x37ab08 / 0x4
                              , _0x4bb147 = _0x1ab94d + Math['cos'](_0x8a61ec) * _0x2a0911
                              , _0x2b9a43 = _0x5a9352 + Math['sin'](_0x8a61ec) * _0x2a0911;
                            _0xe65f33[_0x1abfa4(0x31e)][_0x1abfa4(0x6dc)](_0x4bb147, _0x2b9a43),
                            _0xe65f33[_0x1abfa4(0x62e)] = _0x5eff83,
                            zw_Background[_0x1abfa4(0x21e)](_0xe65f33);
                        }
                    }
                }
            }
        } else
            zw_Background[_0x1abfa4(0x48e)](),
            zw_Background[_0x1abfa4(0x1d5)](),
            zw_Background[_0x1abfa4(0x2c9)](0x1, 0xff0000, 0x1),
            zw_Background['drawCircle'](0x0, 0x0, 0x1f4),
            zw_Background[_0x1abfa4(0x77f)]();
    }
}
function decodeUnicode(_0x1e3d1d) {
    var _0xe5d0f2 = _0x40b61e;
    return _0x1e3d1d['replace'](/\\u[\dA-F]{4}/gi, function(_0x914601) {
        var _0x2e3161 = _0x2458;
        return String[_0x2e3161(0x64a)](parseInt(_0x914601[_0x2e3161(0x707)](/\\u/, ''), 0x10));
    })[_0xe5d0f2(0x707)](/\\u[0-9A-F]{2}/g, function(_0x233311) {
        var _0x55996f = _0xe5d0f2;
        return String[_0x55996f(0x64a)](parseInt(_0x233311[_0x55996f(0x707)](/\\u/, ''), 0x10));
    });
}
const settings5dolars = async function(_0x384b68) {
    var _0x22f858 = _0x40b61e
      , _0x5ebec1 = $('div[category=\x27theme\x27]');
    addMinicolor(_0x5ebec1[0x1], _0x22f858(0x538), _0x22f858(0x593), _0x22f858(0x268), theoObjects['colorFondo']),
    addMinicolor(_0x5ebec1[0x1], _0x22f858(0x2e2), _0x22f858(0x629), _0x22f858(0x827), theoObjects['colorBorde']),
    addMinicolor(_0x5ebec1[0x1], _0x22f858(0x4ea), 'LASER', _0x22f858(0x670), theoObjects[_0x22f858(0x670)]),
    addMinicolor(_0x5ebec1[0x1], _0x22f858(0x56d), _0x22f858(0x46d), 'hsTextColor', theoObjects['hsTextColor']),
    addMinicolor(_0x5ebec1[0x1], _0x22f858(0x453), _0x22f858(0x5d9), _0x22f858(0x602), theoObjects['killTextColor']),
    addMinicolor(_0x5ebec1[0x1], _0x22f858(0x661), _0x22f858(0x6d7), _0x22f858(0x690), theoObjects[_0x22f858(0x690)]),
    wormxt_5dlrs_Obj['visiblePowersAll'] = ![],
    wormxt_5dlrs_Obj[_0x22f858(0x4ca)] = !![],
    $(_0x22f858(0x694))[_0x22f858(0x6b3)]('<i\x20class=\x22material-icons\x22\x20\x20id=\x22user_config\x22\x20style=\x22position:\x20absolute;background-color:\x20transparent;border-radius:\x205px;\x22>menu</i>'),
    $(_0x22f858(0x215))['on'](_0x22f858(0x2c0), function() {
        var _0x384804 = _0x22f858;
        $(_0x384804(0x51c))['css']('position', 'absolute')[_0x384804(0x519)](_0x384804(0x5be), _0x384804(0x787)),
        giroActive = ![],
        toggleGiro();
    });
    let _0x40fd36 = localStorage[_0x22f858(0x3b2)](_0x22f858(0x258)), _0x5abd16;
    if (_0x40fd36 === _0x22f858(0x544))
        _0x5abd16 = !![],
        theoKzObjects['showTeamList'] = !![];
    else
        _0x40fd36 === 'false' ? (_0x5abd16 = ![],
        theoKzObjects[_0x22f858(0x258)] = ![]) : _0x5abd16 = theoKzObjects[_0x22f858(0x258)];
    let _0x2d7da2 = localStorage[_0x22f858(0x3b2)](_0x22f858(0x334)), _0x57769f;
    if (_0x2d7da2 === 'true')
        _0x57769f = !![],
        theoKzObjects[_0x22f858(0x455)] = !![];
    else
        _0x2d7da2 === _0x22f858(0x38a) ? (_0x57769f = ![],
        theoKzObjects[_0x22f858(0x455)] = ![]) : _0x57769f = theoKzObjects[_0x22f858(0x455)];
    $(_0x22f858(0x1cc))[_0x22f858(0x67d)](_0x22f858(0x377), wormxt_Obj['backgroundSolid']),
    $(_0x22f858(0x1cc))['on'](_0x22f858(0x2c0), function() {
        var _0x5a2cd5 = _0x22f858;
        this[_0x5a2cd5(0x377)] ? (wormxt_Obj[_0x5a2cd5(0x240)] = !![],
        setSectorsGame()) : (wormxt_Obj['backgroundSolid'] = ![],
        setSectorsGame());
    }),
    $('#showAnimationHeadshot')['on'](_0x22f858(0x746), function() {
        var _0x1a70f5 = _0x22f858;
        theoKzObjects[_0x1a70f5(0x455)] = $(this)['is'](':checked'),
        localStorage[_0x1a70f5(0x591)](_0x1a70f5(0x334), theoKzObjects[_0x1a70f5(0x455)]),
        console[_0x1a70f5(0x39b)](_0x1a70f5(0x5ac), theoKzObjects['animationHeadshot']);
    }),
    $(_0x22f858(0x608))['on'](_0x22f858(0x746), function() {
        var _0x579cb0 = _0x22f858;
        theoKzObjects[_0x579cb0(0x258)] = $(this)['is'](_0x579cb0(0x4b0)),
        localStorage[_0x579cb0(0x591)](_0x579cb0(0x258), theoKzObjects['showTeamList']),
        console['log']('Mostrar\x20lista\x20de\x20amigos:', theoKzObjects[_0x579cb0(0x258)]);
    }),
    $(_0x22f858(0x832))['on'](_0x22f858(0x2c0), function() {
        var _0x3717f7 = _0x22f858;
        $(_0x3717f7(0x51c))[_0x3717f7(0x519)](_0x3717f7(0x5be), _0x3717f7(0x5e1)),
        giroActive = !![],
        toggleGiro();
    });
    function _0x3fb896(_0x467c4a, _0x449d89, _0x51d411) {
        $(_0x467c4a)['on']('input', function() {
            var _0x57f68f = _0x2458;
            wormxt_Obj[_0x449d89] = $(this)[_0x57f68f(0x382)](),
            localStorage[_0x57f68f(0x591)](_0x51d411, $(this)[_0x57f68f(0x382)]()),
            console[_0x57f68f(0x39b)](_0x57f68f(0x662), localStorage['getItem'](_0x51d411));
        });
    }
    let _0x303788 = $(_0x22f858(0x5b2))
      , _0x5e6601 = $(_0x22f858(0x47e));
    for (let _0x5ca10c = 0x1; _0x5ca10c < 0x2a; _0x5ca10c++) {
        const _0x521918 = _0x22f858(0x1e7) + _0x5ca10c[_0x22f858(0x4b3)]()[_0x22f858(0x511)](0x2, '0') + '.cur'
          , _0x5ae730 = _0x5ca10c === 0x1 ? _0x22f858(0x267) : ''
          , _0x359e50 = $('<img>')[_0x22f858(0x35c)]({
            'src': _0x521918,
            'data-cursor': _0x521918,
            'alt': _0x22f858(0x36e) + _0x5ca10c
        })
          , _0x5cc117 = $('<div>')[_0x22f858(0x2bd)](_0x22f858(0x494))[_0x22f858(0x2bd)](_0x5ae730)['append'](_0x359e50);
        _0x5e6601[_0x22f858(0x6b3)](_0x5cc117);
    }
    _0x303788[_0x22f858(0x6b3)](_0x5e6601),
    $(_0x22f858(0x1d3))[_0x22f858(0x6b3)](_0x303788),
    $(_0x22f858(0x48b))[_0x22f858(0x767)](_0x22f858(0x69d));
    const _0x1c504f = 0x14
      , _0x1d3549 = $(_0x22f858(0x304));
    for (let _0x5c5b48 = 0x0; _0x5c5b48 < _0x1c504f; _0x5c5b48++) {
        let _0x3b7d9d = $(_0x22f858(0x5a1))[_0x22f858(0x2bd)](_0x22f858(0x316));
        _0x3b7d9d[_0x22f858(0x519)]({
            'left': Math['random']() * window[_0x22f858(0x60d)] + 'px',
            'top': Math[_0x22f858(0x7d2)]() * window[_0x22f858(0x421)] + 'px',
            'animationDuration': 0x2 + Math[_0x22f858(0x7d2)]() + _0x22f858(0x2d0) + (0x5 + Math['random']() * 0xa) + 's'
        });
    }
    $(_0x22f858(0x410))[_0x22f858(0x29c)](_0x22f858(0x7c2) + _0x384b68 + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20'),
    $(_0x22f858(0x332))[_0x22f858(0x6b3)]('\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22option\x20hotkey\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-name\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22hotkey-letter\x22>Zoom</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-keycode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22zoom-key\x22\x20class=\x22key-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22option\x20hotkey\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-name\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22hotkey-letter\x22>Replay</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-keycode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22restart-key\x22\x20class=\x22key-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22option\x20hotkey\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-name\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22hotkey-letter\x22>Explote</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-keycode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22wormExplot-key\x22\x20class=\x22key-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22option\x20hotkey\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-name\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22hotkey-letter\x22>LaserHS</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-keycode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22laserHSkey-key\x22\x20class=\x22key-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22option\x20hotkey\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-name\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22hotkey-letter\x22>Sectors</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-keycode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22sectores-key\x22\x20class=\x22key-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22option\x20hotkey\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-name\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22hotkey-letter\x22>Background</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-keycode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22background-key\x22\x20class=\x22key-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22option\x20hotkey\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-name\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22hotkey-letter\x22>Giro</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-keycode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22giro-key\x22\x20class=\x22key-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22option\x20hotkey\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-name\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22hotkey-letter\x22>No\x20Skins</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-keycode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22noSkin-key\x22\x20class=\x22key-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22option\x20hotkey\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-name\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22hotkey-letter\x22>No\x20Auras</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-keycode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22noAuras-key\x22\x20class=\x22key-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'),
    $(_0x22f858(0x552))[_0x22f858(0x382)](keys[_0x22f858(0x2c3)]),
    $(_0x22f858(0x48c))['val'](keys['restart']),
    $(_0x22f858(0x2fd))[_0x22f858(0x382)](keys[_0x22f858(0x820)]),
    $('#wormExplot-key')[_0x22f858(0x382)](keys[_0x22f858(0x62c)]),
    $(_0x22f858(0x22e))['val'](keys[_0x22f858(0x40c)]),
    $(_0x22f858(0x391))[_0x22f858(0x382)](keys['noSkin']),
    $(_0x22f858(0x409))[_0x22f858(0x382)](keys[_0x22f858(0x6c9)]),
    $(_0x22f858(0x72e))[_0x22f858(0x382)](keys[_0x22f858(0x290)]),
    $('#background-key')[_0x22f858(0x382)](keys['background']),
    $(_0x22f858(0x6f7))['on'](_0x22f858(0x2c0), function() {
        var _0x1adefb = _0x22f858;
        $('#hotkeys-icon')[_0x1adefb(0x2bd)](_0x1adefb(0x267)),
        $(_0x1adefb(0x6b5))[_0x1adefb(0x317)](_0x1adefb(0x267)),
        $(_0x1adefb(0x3fa))[_0x1adefb(0x35e)](),
        $('#user-section')[_0x1adefb(0x719)]();
    }),
    $('.key-input')[_0x22f858(0x33b)](function(_0x3cbf15) {
        _0x3cbf15['stopPropagation']();
    }),
    $(_0x22f858(0x7a6))[_0x22f858(0x232)](function(_0xd8b075) {
        var _0x80eb92 = _0x22f858;
        _0xd8b075[_0x80eb92(0x584)]();
        var _0x156d22 = _0xd8b075['key'][_0x80eb92(0x6e8)]();
        $(this)[_0x80eb92(0x382)](_0x156d22);
        var _0x47635c = $(this)[_0x80eb92(0x35c)]('id');
        switch (_0x47635c) {
        case 'zoom-key':
            cambiarKey(_0x80eb92(0x2c3), _0x156d22);
            break;
        case _0x80eb92(0x3ac):
            cambiarKey('restart', _0x156d22);
            break;
        case _0x80eb92(0x432):
            cambiarKey(_0x80eb92(0x62c), _0x156d22);
            break;
        case _0x80eb92(0x242):
            cambiarKey(_0x80eb92(0x820), _0x156d22);
            break;
        case 'giro-key':
            cambiarKey('giro', _0x156d22);
            break;
        case 'noSkin-key':
            cambiarKey(_0x80eb92(0x80d), _0x156d22);
            break;
        case _0x80eb92(0x506):
            cambiarKey(_0x80eb92(0x6c9), _0x156d22);
            break;
        case _0x80eb92(0x3b8):
            cambiarKey(_0x80eb92(0x290), _0x156d22);
            break;
        case _0x80eb92(0x542):
            cambiarKey(_0x80eb92(0x613), _0x156d22);
            break;
        }
        $(this)[_0x80eb92(0x23b)]();
    }),
    $(_0x22f858(0x77e))[_0x22f858(0x6b3)](_0x5e6601),
    $(_0x22f858(0x60b))['on'](_0x22f858(0x2c0), function() {
        var _0x332e70 = _0x22f858
          , _0x493176 = $(this)[_0x332e70(0x456)](_0x332e70(0x5fa))['attr'](_0x332e70(0x4ec));
        $(_0x332e70(0x3ea))[_0x332e70(0x519)]({
            'cursor': _0x332e70(0x399) + _0x493176 + _0x332e70(0x25f)
        }),
        $(_0x332e70(0x60b))[_0x332e70(0x317)](_0x332e70(0x267)),
        $(this)[_0x332e70(0x2bd)](_0x332e70(0x267));
    }),
    $(_0x22f858(0x4ad))['html']('<span\x20style=\x27color:\x20#98928a;\x27\x20class=\x27settings_span\x27>EXP:\x20' + _0x384b68 + '</span>'),
    $('#sound-hs')['val'](_0x22f858(0x4d5)),
    $(_0x22f858(0x301))['val'](_0x22f858(0x4b7)),
    zw_hssound = new Audio($(_0x22f858(0x7d8))['val']()),
    zw_laughsound = new Audio($('#sound-10hs')[_0x22f858(0x382)]()),
    $('#sound-hs')['on']('input', function() {
        var _0x2fdd88 = _0x22f858;
        zw_hssound[_0x2fdd88(0x4ec)] = $(this)[_0x2fdd88(0x382)]();
    }),
    $(_0x22f858(0x301))['on'](_0x22f858(0x216), function() {
        var _0x3d00b0 = _0x22f858;
        zw_laughsound[_0x3d00b0(0x4ec)] = $(this)['val']();
    }),
    $(_0x22f858(0x3e3))[_0x22f858(0x767)](_0x22f858(0x2dc) + _0x22f858(0x70f) + '<span\x20class=\x22names_settings\x22\x20id=\x22laser\x22>\x20' + lenguaje[idiomaActual][_0x22f858(0x1b1)] + _0x22f858(0x490) + _0x22f858(0x7ba) + _0x22f858(0x2dc) + '<input\x20type=\x22checkbox\x22\x20id=\x22settings-sectores-switch\x22>' + _0x22f858(0x47a) + lenguaje[idiomaActual]['sectores'] + _0x22f858(0x490) + _0x22f858(0x7ba) + _0x22f858(0x2dc) + _0x22f858(0x603) + _0x22f858(0x7cd) + _0x22f858(0x7ba) + _0x22f858(0x2dc) + _0x22f858(0x34a) + _0x22f858(0x21c) + _0x22f858(0x7ba) + _0x22f858(0x229) + _0x22f858(0x3d8) + '<input\x20id=\x22color_paletRGB\x22\x20type=\x22color\x22\x20value=\x22#000A11\x22>' + '<span\x20class=\x22names_settings\x22\x20\x20id=\x22colorJuego\x22\x20>\x20' + lenguaje[idiomaActual][_0x22f858(0x3c5)] + _0x22f858(0x1da) + _0x22f858(0x7ba) + _0x22f858(0x3d8) + _0x22f858(0x251) + _0x22f858(0x37a) + lenguaje[idiomaActual]['colorLaser'] + _0x22f858(0x1da) + _0x22f858(0x7ba) + _0x22f858(0x3d8) + _0x22f858(0x71e) + _0x22f858(0x4bb) + lenguaje[idiomaActual][_0x22f858(0x827)] + '</span>' + _0x22f858(0x7ba));
    const _0x41fc45 = {
        'color_paletRGB': _0x4a250f => wormxt_Obj[_0x22f858(0x268)] = _0x4a250f,
        'color_palet': _0x44166a => wormxt_Obj[_0x22f858(0x670)] = _0x44166a,
        'color_palet2': _0x5b349b => wormxt_Obj[_0x22f858(0x827)] = _0x5b349b
    };
    $(_0x22f858(0x25c))[_0x22f858(0x746)](function() {
        var _0x4f1815 = _0x22f858;
        const _0x2bcb8c = $(this)[_0x4f1815(0x35c)]('id')
          , _0x180ca5 = $(this)['val']()[_0x4f1815(0x707)]('#', '');
        setSectorsGame(),
        console[_0x4f1815(0x39b)]('Recibiendo\x20el\x20color\x20reemplazado\x20para\x20' + _0x2bcb8c + ':\x20' + _0x180ca5),
        _0x41fc45[_0x2bcb8c] && _0x41fc45[_0x2bcb8c](_0x180ca5),
        setSectorsGame();
    }),
    wormxt_5dlrs_Obj[_0x22f858(0x2ca)] = ![],
    $(_0x22f858(0x367))[_0x22f858(0x67d)]('checked', wormxt_5dlrs_Obj[_0x22f858(0x2ca)]),
    $('#settings-notAbilityAll-switch')['on']('click', function() {
        var _0x237871 = _0x22f858;
        this[_0x237871(0x377)] ? wormxt_5dlrs_Obj[_0x237871(0x2ca)] = !![] : wormxt_5dlrs_Obj[_0x237871(0x2ca)] = ![];
    }),
    wormxt_5dlrs_Obj[_0x22f858(0x4ca)] = !![],
    $(_0x22f858(0x425))[_0x22f858(0x67d)]('checked', wormxt_5dlrs_Obj[_0x22f858(0x4ca)]),
    $(_0x22f858(0x425))['on'](_0x22f858(0x2c0), function() {
        var _0x57c01b = _0x22f858;
        this['checked'] ? wormxt_5dlrs_Obj['speed_zigzag'] = !![] : wormxt_5dlrs_Obj[_0x57c01b(0x4ca)] = ![];
    }),
    $(_0x22f858(0x75b))[_0x22f858(0x67d)](_0x22f858(0x377), wormxt_Obj['laserHS']),
    $(_0x22f858(0x75b))['on'](_0x22f858(0x2c0), function() {
        var _0x50008c = _0x22f858;
        this[_0x50008c(0x377)] ? wormxt_Obj[_0x50008c(0x820)] = !![] : wormxt_Obj[_0x50008c(0x820)] = ![];
    }),
    $(_0x22f858(0x372))[_0x22f858(0x67d)]('checked', wormxt_Obj['interactive']),
    $(_0x22f858(0x372))['on'](_0x22f858(0x2c0), function() {
        if (this['checked'])
            zw_explotWubtracttexture['interactive'] = ![];
        else {}
    }),
    $(_0x22f858(0x389))[_0x22f858(0x67d)](_0x22f858(0x377), wormxt_Obj['sectores']),
    $(_0x22f858(0x389))['on'](_0x22f858(0x2c0), function() {
        var _0x3f1c43 = _0x22f858;
        this['checked'] ? (wormxt_Obj['sectores'] = !![],
        setSectorsGame()) : (wormxt_Obj[_0x3f1c43(0x290)] = ![],
        setSectorsGame());
    });
};
var TIME = new Date()[_0x40b61e(0x348)]()
  , linkCSS = _0x40b61e(0x623) + TIME
  , unlockSkinsExecuted = ![]
  , unlockSkinsPrivate = async function(_0x224688) {
    var _0xd5ab68 = _0x40b61e;
    if (unlockSkinsExecuted) {
        console[_0xd5ab68(0x39b)](_0xd5ab68(0x3bf));
        return;
    }
    unlockSkinsExecuted = !![];
    var _0x5bbe93 = _0x224688['u']['si']['userId']
      , _0x2af705 = clientsSkins[_0xd5ab68(0x386)][_0xd5ab68(0x456)](_0x455b5a => _0x455b5a[_0xd5ab68(0x2ec)] === _0x5bbe93);
    if (_0x2af705 && _0x2af705[_0xd5ab68(0x56c)]) {
        console[_0xd5ab68(0x39b)](_0x2af705);
        const _0x863e6b = new Date()
          , _0x210992 = new Date(_0x2af705[_0xd5ab68(0x686)]);
        if (_0x863e6b > _0x210992)
            console[_0xd5ab68(0x39b)](_0xd5ab68(0x561));
        else {
            console['log'](_0xd5ab68(0x2b0));
            let _0x48d442 = Array[_0xd5ab68(0x3e7)](_0x2af705[_0xd5ab68(0x56c)]) ? _0x2af705['Client_VisibleSkinPrivate'] : [_0x2af705[_0xd5ab68(0x56c)]];
            _0x48d442[_0xd5ab68(0x397)](_0x4f8870 => {
                var _0x904994 = _0xd5ab68;
                let _0x47db97 = theoKzObjects[_0x904994(0x5f0)][_0x904994(0x456)](_0x1c9531 => _0x1c9531['id'] === _0x4f8870);
                _0x47db97 && (_0x47db97[_0x904994(0x3ab)] = ![]);
            }
            ),
            console['log'](_0xd5ab68(0x6da) + _0x5bbe93 + ':', _0x48d442);
        }
    } else
        console['log'](_0xd5ab68(0x6e3) + _0x5bbe93 + '.');
};
let giroActive = ![];
function toggleGiro() {
    var _0x56718c = _0x40b61e;
    giroActive ? (zw_girosubtracttexture[_0x56718c(0x570)] = ungirotexture,
    zw_girosubtracttexture['alpha'] = 0.25,
    console['log'](_0x56718c(0x202)),
    isRunning = ![],
    initialInterval = 0x37,
    cycleCounter = 0x1,
    isIncrementing = !![],
    clearInterval(intervalID),
    intervalID = null) : (zw_girosubtracttexture[_0x56718c(0x4d8)] = 0.75,
    console['log'](_0x56718c(0x57a)),
    startInterval(),
    isRunning = !![]),
    giroActive = !giroActive;
}
const showServer2 = async function(_0x180e19) {
    var _0x3130bf = _0x40b61e;
    updateBackground(),
    fetchCustomLogo(_0x180e19['u']['si'][_0x3130bf(0x200)]),
    zwormData[_0x3130bf(0x1f8)] = _0x180e19['u']['si']['userId'],
    loadStylesheet(linkCSS),
    loadStylesheet(_0x3130bf(0x7da)),
    console[_0x3130bf(0x39b)](_0x180e19, _0x180e19['u']['si']['userId']),
    zw_hssound = new Audio(_0x3130bf(0x4d5)),
    zw_laughsound = new Audio(_0x3130bf(0x4b7)),
    zw_explotWubtracttexture = new pixi[(_0x3130bf(0x83e))](),
    (zw_explotWubtracttexture[_0x3130bf(0x570)] = explotWtexture,
    zw_explotWubtracttexture[_0x3130bf(0x69a)] = !![]),
    zw_explotWubtracttexture[_0x3130bf(0x838)] = !![],
    zw_explotWubtracttexture['x'] = -0x2d,
    zw_explotWubtracttexture['y'] = 0xa,
    zw_explotWubtracttexture[_0x3130bf(0x4d8)] = 0.25;
    function _0x3ac71d() {
        var _0x376c20 = _0x3130bf;
        zw_explotWubtracttexture[_0x376c20(0x69a)] = ![];
        var _0x5a4e4f = 0x2710
          , _0x3d4a55 = 0x1
          , _0x4ab568 = 0.25
          , _0x23aa45 = 0x64
          , _0x1d9a46 = (_0x3d4a55 - _0x4ab568) / _0x23aa45
          , _0x2cbb14 = 0x0
          , _0x527b39 = setInterval(function() {
            var _0x1e75ef = _0x376c20
              , _0x143b38 = _0x3d4a55 - _0x1d9a46 * _0x2cbb14;
            zw_explotWubtracttexture[_0x1e75ef(0x4d8)] = _0x143b38,
            _0x2cbb14++,
            _0x2cbb14 > _0x23aa45 && (clearInterval(_0x527b39),
            zw_explotWubtracttexture[_0x1e75ef(0x4d8)] = _0x4ab568,
            zw_explotWubtracttexture[_0x1e75ef(0x69a)] = !![]);
        }, _0x5a4e4f / _0x23aa45);
    }
    zw_explotWubtracttexture['on']('mouseup', function() {
        _0x3ac71d();
        const _0x1b02d4 = new Uint8Array([NaN, NaN]);
        anApp['o']['Wb'](_0x1b02d4),
        setTimeout( () => {
            var _0x441d5f = _0x2458;
            let _0x22870f = zw_lastserver;
            $(_0x441d5f(0x350))[_0x441d5f(0x519)](_0x441d5f(0x31e), 'static'),
            _0x22870f && (anApp['r']['Hd'](),
            anApp['sa'](_0x22870f));
        }
        , 0x3e8);
    }),
    zw_girosubtracttexture = new pixi['Sprite'](),
    (zw_girosubtracttexture[_0x3130bf(0x570)] = ungirotexture,
    zw_girosubtracttexture['interactive'] = !![]),
    zw_girosubtracttexture[_0x3130bf(0x838)] = !![],
    zw_girosubtracttexture['x'] = -0xa,
    zw_girosubtracttexture['y'] = 0xa,
    zw_girosubtracttexture[_0x3130bf(0x4d8)] = 0.25,
    zw_girosubtracttexture['on'](_0x3130bf(0x54a), function() {
        toggleGiro();
    });
    if (zw_mobilecheck()) {
        zw_girosubtracttexture['x'] = -0x5a,
        zw_explotWubtracttexture['x'] = -0x87,
        zw_explotWubtracttexture['y'] = 0xa;
        let _0x3e91a4 = new Function(_0x3130bf(0x1b4))()
          , _0x56d912 = _0x3e91a4[_0x3130bf(0x52c)][_0x3130bf(0x41e)]('https://i.imgur.com/kGjR9yf.png')
          , _0x496c31 = _0x3e91a4[_0x3130bf(0x52c)][_0x3130bf(0x41e)]('https://i.imgur.com/4JZUa1u.png');
        zw_zoomplustexture = new _0x3e91a4[(_0x3130bf(0x83e))](),
        (zw_zoomplustexture[_0x3130bf(0x570)] = _0x56d912,
        zw_zoomplustexture[_0x3130bf(0x69a)] = !![]),
        zw_zoomplustexture[_0x3130bf(0x838)] = !![],
        zw_zoomplustexture['x'] = -0xa,
        zw_zoomplustexture['y'] = 0xa,
        zw_zoomplustexture[_0x3130bf(0x4d8)] = 0.25,
        zw_zoomplustexture['on'](_0x3130bf(0x54a), function() {
            var _0x5d9664 = _0x3130bf;
            zw_updatezoom(Math[_0x5d9664(0x794)](zw_multiplier + 0.25, 0x32));
        }),
        zw_zoomsubtracttexture = new _0x3e91a4['Sprite'](),
        (zw_zoomsubtracttexture[_0x3130bf(0x570)] = _0x496c31,
        zw_zoomsubtracttexture[_0x3130bf(0x69a)] = !![]),
        zw_zoomsubtracttexture['buttonMode'] = !![],
        zw_zoomsubtracttexture['x'] = -0x2b,
        zw_zoomsubtracttexture['y'] = 0xa,
        zw_zoomsubtracttexture[_0x3130bf(0x4d8)] = 0.25,
        zw_zoomsubtracttexture['on'](_0x3130bf(0x54a), function() {
            zw_updatezoom(Math['max'](zw_multiplier - 0.25, 0.25));
        });
    }
    $('#game-canvas')[_0x3130bf(0x767)]('<input\x20type=\x22text\x22\x20id=\x22chatInput\x22\x20style=\x22display:\x20none;\x20position:\x20absolute;\x22\x20placeholder=\x22Escribe\x20tu\x20mensaje...\x22\x20/>');
    var _0x2cf202 = function() {
        var _0x2ad73c = _0x3130bf;
        $(_0x2ad73c(0x704))[_0x2ad73c(0x519)](_0x2ad73c(0x5be), _0x2ad73c(0x5e1))[_0x2ad73c(0x382)](''),
        $(_0x2ad73c(0x246))[_0x2ad73c(0x1af)]();
    }
      , _0x4f247b = function() {
        var _0x412f2b = _0x3130bf;
        let _0x3f7fc0 = $(_0x412f2b(0x704))[_0x412f2b(0x382)]();
        $['trim'](_0x3f7fc0) !== '' && (console['log'](_0x412f2b(0x58c), _0x3f7fc0),
        zwormData['message'] = _0x3f7fc0,
        setTimeout( () => {
            var _0x24ad59 = _0x412f2b;
            zwormData[_0x24ad59(0x681)] = '';
        }
        , 0x5dc));
    };
    $(_0x3130bf(0x704))['on'](_0x3130bf(0x33b), function(_0x13c5b2) {
        var _0xe06513 = _0x3130bf;
        if (_0x13c5b2['key'] === _0xe06513(0x82e))
            _0x4f247b(),
            _0x2cf202();
        else
            _0x13c5b2[_0xe06513(0x1d2)] === _0xe06513(0x7a9) && _0x2cf202();
    }),
    $(_0x3130bf(0x20f))['html'](_0x3130bf(0x644)),
    $(_0x3130bf(0x51b))[_0x3130bf(0x450)]('<i\x20class=\x22material-icons\x22>settings</i>'),
    $('#mm-leaders')[_0x3130bf(0x450)](_0x3130bf(0x30f)),
    $('#mm-store')[_0x3130bf(0x450)](_0x3130bf(0x30b)),
    $('#mm-zw-settings')[_0x3130bf(0x450)](_0x3130bf(0x526)),
    $(_0x3130bf(0x6b5))['on']('click', function() {
        var _0x47a35f = _0x3130bf;
        $(_0x47a35f(0x6b5))[_0x47a35f(0x2bd)](_0x47a35f(0x267)),
        $(_0x47a35f(0x6f7))[_0x47a35f(0x317)](_0x47a35f(0x267)),
        $(_0x47a35f(0x77e))[_0x47a35f(0x35e)](),
        $(_0x47a35f(0x3fa))['hide']();
    }),
    $(_0x3130bf(0x48b))[_0x3130bf(0x1cd)](_0x3130bf(0x23f)),
    $(_0x3130bf(0x694))[_0x3130bf(0x6b3)](_0x3130bf(0x4ce)),
    $(_0x3130bf(0x694))['append']('<span\x20id=\x22ping\x22></span>'),
    $(_0x3130bf(0x49a))[_0x3130bf(0x1cd)](_0x3130bf(0x63d)),
    $(_0x3130bf(0x42d))['on']('click', function() {
        var _0xf8fb68 = _0x3130bf;
        window[_0xf8fb68(0x604)](_0xf8fb68(0x775), '_blank');
    }),
    $(_0x3130bf(0x822))[_0x3130bf(0x1cd)](''),
    $(_0x3130bf(0x677))[_0x3130bf(0x1f0)](),
    $(_0x3130bf(0x6eb))[_0x3130bf(0x1f0)](),
    $('.mm-logo')[_0x3130bf(0x35c)](_0x3130bf(0x4ec), _0x3130bf(0x6ce)),
    $(_0x3130bf(0x46e))['attr'](_0x3130bf(0x4ec), _0x3130bf(0x6ce)),
    $(_0x3130bf(0x674))[_0x3130bf(0x1f0)](),
    $(_0x3130bf(0x6c6))[_0x3130bf(0x1f0)](),
    $(_0x3130bf(0x5a6))['click'](function() {
        var _0x5f5b33 = _0x3130bf;
        $('.overlay-2')[_0x5f5b33(0x519)]('position', 'static');
    }),
    $(_0x3130bf(0x321))[_0x3130bf(0x2c0)](function() {
        var _0x47a7db = _0x3130bf;
        $(_0x47a7db(0x814))[_0x47a7db(0x519)]({
            'display': _0x47a7db(0x503),
            'opacity': '1'
        });
    }),
    $('#popup-menu-back')[_0x3130bf(0x2c0)](function() {
        var _0x4357fc = _0x3130bf;
        $(_0x4357fc(0x814))[_0x4357fc(0x519)](_0x4357fc(0x6ef), '0');
    }),
    $(_0x3130bf(0x587))['click'](function() {
        var _0x4cce33 = _0x3130bf;
        $(_0x4cce33(0x7a5))[_0x4cce33(0x2bd)](_0x4cce33(0x40a)),
        setTimeout(function() {
            var _0x12c0ca = _0x4cce33;
            $(_0x12c0ca(0x7a5))['removeClass']('cambio-skin2');
        }, 0x15e);
    }),
    $(_0x3130bf(0x419))['click'](function() {
        var _0x7cfee3 = _0x3130bf;
        $(_0x7cfee3(0x7a5))[_0x7cfee3(0x2bd)](_0x7cfee3(0x40a)),
        setTimeout(function() {
            var _0x1d7e67 = _0x7cfee3;
            $(_0x1d7e67(0x7a5))[_0x1d7e67(0x317)]('cambio-skin2');
        }, 0x15e);
    });
    const _0xd2b4b4 = ['#mm-player-info', _0x3130bf(0x7a5), '#mm-settings', _0x3130bf(0x55b), _0x3130bf(0x7cc), '#mm-coins-box'];
    $(_0xd2b4b4['join'](',\x20'))[_0x3130bf(0x2c0)](function() {
        var _0x405ec5 = _0x3130bf;
        $(_0x405ec5(0x814))['css']({
            'display': _0x405ec5(0x5e1),
            'opacity': '0'
        });
    });
    const _0x4f3529 = [_0x3130bf(0x20f), '#mm-settings', '#mm-leaders', _0x3130bf(0x7cc), '#mm-zw-settings'];
    _0x4f3529[_0x3130bf(0x397)](function(_0x2347c7) {
        var _0x18590e = _0x3130bf;
        $(_0x2347c7)[_0x18590e(0x335)](function() {
            var _0x36ad75 = _0x18590e;
            $(this)[_0x36ad75(0x519)]({
                'box-shadow': 'inset\x200\x200\x2020px\x20rgba(255,\x20255,\x20255,\x200.5),\x200\x200\x2020px\x20rgba(255,\x20255,\x20255,\x200.2)'
            });
        }, function() {
            var _0x37fb2b = _0x18590e;
            $(this)[_0x37fb2b(0x519)]({
                'box-shadow': _0x37fb2b(0x33d)
            });
        });
    }),
    $(_0x3130bf(0x2f6))[_0x3130bf(0x1cd)](''),
    $(_0x3130bf(0x6ac))[_0x3130bf(0x29c)](_0x3130bf(0x1de)),
    $('#zwplayagain')['prepend']('<i\x20class=\x22material-icons\x22>replay</i>'),
    $(_0x3130bf(0x5cc))['on'](_0x3130bf(0x2c0), function() {
        var _0x6f1f75 = _0x3130bf
          , _0x5f0dc5 = prompt('Extension\x20\x27W\x27\x20or\x20\x27T\x27:');
        if (_0x5f0dc5 === 'W')
            $(_0x6f1f75(0x5cc))[_0x6f1f75(0x318)](_0x6f1f75(0x81e)),
            setTimeout( () => {
                var _0x5ef34a = _0x6f1f75;
                $(_0x5ef34a(0x5cc))[_0x5ef34a(0x318)](_0x5ef34a(0x27c)),
                setTimeout( () => {
                    var _0x569736 = _0x5ef34a;
                    $(_0x569736(0x5cc))[_0x569736(0x318)](_0x569736(0x74b)),
                    setTimeout( () => {
                        var _0x41b6a4 = _0x569736;
                        $(_0x41b6a4(0x5cc))[_0x41b6a4(0x318)](_0x41b6a4(0x1c3));
                    }
                    , 0x7d0);
                }
                , 0x5dc);
            }
            , 0x3e8),
            $(_0x6f1f75(0x50f))[_0x6f1f75(0x450)](''),
            $(_0x6f1f75(0x6b4))[_0x6f1f75(0x450)](''),
            $(_0x6f1f75(0x651))[_0x6f1f75(0x450)](''),
            $(_0x6f1f75(0x4a3))[_0x6f1f75(0x450)](''),
            $('.servers-germania')[_0x6f1f75(0x450)](''),
            $('.servers-francia')[_0x6f1f75(0x450)](''),
            $(_0x6f1f75(0x70a))['html'](''),
            $('.servers-japon')[_0x6f1f75(0x450)](''),
            $(_0x6f1f75(0x6d2))[_0x6f1f75(0x450)](''),
            $(_0x6f1f75(0x447))[_0x6f1f75(0x450)](''),
            setTimeout( () => {
                var _0x4326c6 = _0x6f1f75;
                for (a = 0x0; a < serverData[_0x4326c6(0x607)]; a++) {
                    var _0xe4edeb = serverData[a][_0x4326c6(0x7bb)]
                      , _0x5913df = serverData[a]['dataRoom']
                      , _0x2821f3 = serverData[a][_0x4326c6(0x73a)]
                      , _0x2f79aa = _0x4326c6(0x27f)
                      , _0x107ad8 = serverData[a]['imgSrc'];
                    let _0x211fd7 = _0x4326c6(0x841) + _0x107ad8 + '\x22\x20\x20\x20\x20style=\x22margin-left:\x20100px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>'
                      , _0x26252f = _0x5913df[_0x4326c6(0x6f8)](/[a-zA-Z]+/g)[_0x4326c6(0x43b)]('')
                      , _0x4bb650 = document['createElement']('p');
                    _0x4bb650[_0x4326c6(0x1c0)] = _0xe4edeb,
                    _0x4bb650['innerHTML'] = _0x2821f3;
                    let _0x3996a0 = document[_0x4326c6(0x6fa)]('div');
                    _0x3996a0[_0x4326c6(0x43d)](_0x4326c6(0x3e1), _0x4326c6(0x470));
                    if (_0x26252f == 'br')
                        $(_0x4326c6(0x50f))['append'](_0x3996a0),
                        $(_0x3996a0)[_0x4326c6(0x6b3)](_0x4bb650),
                        $(_0x4bb650)[_0x4326c6(0x6b3)](_0x211fd7);
                    else {
                        if (_0x26252f == 'mx')
                            $(_0x4326c6(0x6b4))[_0x4326c6(0x6b3)](_0x3996a0),
                            $(_0x3996a0)[_0x4326c6(0x6b3)](_0x4bb650),
                            $(_0x4bb650)[_0x4326c6(0x6b3)](_0x211fd7);
                        else {
                            if (_0x26252f == 'us')
                                $('.servers-eeuu')['append'](_0x3996a0),
                                $(_0x3996a0)[_0x4326c6(0x6b3)](_0x4bb650),
                                $(_0x4bb650)[_0x4326c6(0x6b3)](_0x211fd7);
                            else {
                                if (_0x26252f == 'ca')
                                    $(_0x4326c6(0x4a3))[_0x4326c6(0x6b3)](_0x3996a0),
                                    $(_0x3996a0)[_0x4326c6(0x6b3)](_0x4bb650),
                                    $(_0x4bb650)[_0x4326c6(0x6b3)](_0x211fd7);
                                else {
                                    if (_0x26252f == 'de')
                                        $('.servers-germania')[_0x4326c6(0x6b3)](_0x3996a0),
                                        $(_0x3996a0)[_0x4326c6(0x6b3)](_0x4bb650),
                                        $(_0x4bb650)['append'](_0x211fd7);
                                    else {
                                        if (_0x26252f == 'fr')
                                            $(_0x4326c6(0x601))[_0x4326c6(0x6b3)](_0x3996a0),
                                            $(_0x3996a0)[_0x4326c6(0x6b3)](_0x4bb650),
                                            $(_0x4bb650)[_0x4326c6(0x6b3)](_0x211fd7);
                                        else {
                                            if (_0x26252f == 'sg')
                                                $('.servers-singapur')[_0x4326c6(0x6b3)](_0x3996a0),
                                                $(_0x3996a0)['append'](_0x4bb650),
                                                $(_0x4bb650)['append'](_0x211fd7);
                                            else {
                                                if (_0x26252f == 'jp')
                                                    $(_0x4326c6(0x606))[_0x4326c6(0x6b3)](_0x3996a0),
                                                    $(_0x3996a0)[_0x4326c6(0x6b3)](_0x4bb650),
                                                    $(_0x4bb650)[_0x4326c6(0x6b3)](_0x211fd7);
                                                else {
                                                    if (_0x26252f == 'au')
                                                        $(_0x4326c6(0x6d2))[_0x4326c6(0x6b3)](_0x3996a0),
                                                        $(_0x3996a0)[_0x4326c6(0x6b3)](_0x4bb650),
                                                        $(_0x4bb650)[_0x4326c6(0x6b3)](_0x211fd7);
                                                    else
                                                        _0x26252f == 'ae' && ($('.servers-granbretana')['append'](_0x3996a0),
                                                        $(_0x3996a0)[_0x4326c6(0x6b3)](_0x4bb650),
                                                        $(_0x4bb650)['append'](_0x211fd7));
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    $(_0x4bb650)[_0x4326c6(0x35c)](_0x4326c6(0x3e1), _0x4326c6(0x478)),
                    $(_0x4bb650)[_0x4326c6(0x35c)](_0x4326c6(0x1c0), _0x5913df),
                    $(_0x4bb650)[_0x4326c6(0x35c)](_0x4326c6(0x592), _0xe4edeb),
                    $(_0x4bb650)[_0x4326c6(0x2c0)](function() {
                        var _0x113d54 = _0x4326c6;
                        $(_0x113d54(0x350))['css'](_0x113d54(0x31e), _0x113d54(0x3a1));
                        let _0x1c990c = $(this)[_0x113d54(0x35c)](_0x113d54(0x592));
                        console[_0x113d54(0x39b)](_0x1c990c),
                        _0x1c990c && (_0x180e19['r']['Hd'](),
                        _0x180e19['sa'](_0x1c990c),
                        zw_servertext[_0x113d54(0x318)] = $(this)[_0x113d54(0x318)](),
                        console[_0x113d54(0x39b)]($(this)[_0x113d54(0x318)]()));
                    });
                }
            }
            , 0xbb8);
        else
            _0x5f0dc5 === 'T' ? ($(_0x6f1f75(0x5cc))['text'](_0x6f1f75(0x81e)),
            setTimeout( () => {
                var _0x39b3d9 = _0x6f1f75;
                $(_0x39b3d9(0x5cc))[_0x39b3d9(0x318)](_0x39b3d9(0x27c)),
                setTimeout( () => {
                    var _0xe340b5 = _0x39b3d9;
                    $(_0xe340b5(0x5cc))[_0xe340b5(0x318)](_0xe340b5(0x74b)),
                    setTimeout( () => {
                        $('.mm-logo')['text']('Tim\x20Map');
                    }
                    , 0x7d0);
                }
                , 0x5dc);
            }
            , 0x3e8),
            $(_0x6f1f75(0x50f))[_0x6f1f75(0x450)](''),
            $(_0x6f1f75(0x6b4))[_0x6f1f75(0x450)](''),
            $(_0x6f1f75(0x651))[_0x6f1f75(0x450)](''),
            $(_0x6f1f75(0x4a3))[_0x6f1f75(0x450)](''),
            $(_0x6f1f75(0x291))[_0x6f1f75(0x450)](''),
            $(_0x6f1f75(0x601))['html'](''),
            $('.servers-singapur')[_0x6f1f75(0x450)](''),
            $(_0x6f1f75(0x606))[_0x6f1f75(0x450)](''),
            $(_0x6f1f75(0x6d2))['html'](''),
            $(_0x6f1f75(0x447))[_0x6f1f75(0x450)](''),
            setTimeout( () => {
                var _0x3378eb = _0x6f1f75;
                for (a = 0x0; a < serverDataTimMap[_0x3378eb(0x607)]; a++) {
                    var _0x352e31 = serverDataTimMap[a][_0x3378eb(0x7bb)]
                      , _0x3716a4 = serverDataTimMap[a][_0x3378eb(0x448)]
                      , _0x1253ac = serverDataTimMap[a][_0x3378eb(0x73a)]
                      , _0x11820a = serverDataTimMap[a]['imgSrc']
                      , _0x5a5dae = serverDataTimMap[a][_0x3378eb(0x5c1)];
                    let _0x2a48fe = _0x3716a4[_0x3378eb(0x6f8)](/[a-zA-Z]+/g)[_0x3378eb(0x43b)]('')
                      , _0x445824 = document[_0x3378eb(0x6fa)]('p');
                    _0x445824[_0x3378eb(0x1c0)] = _0x352e31;
                    let _0x308e15 = _0x3378eb(0x841) + _0x11820a + _0x3378eb(0x308)
                      , _0x45d038 = /<a\s+href="null"[^>]*>[\s\S]*?<img\s+src="([^"]+)"[^>]*>([^"]+)<\/a>/;
                    _0x45d038[_0x3378eb(0x550)](_0x308e15) ? _0x308e15 = _0x308e15[_0x3378eb(0x707)](_0x45d038, '') : _0x308e15;
                    let _0x481695 = _0x3378eb(0x565)
                      , _0x3bf03 = /<span style=\\"(.*?)"><\\\/span>/;
                    _0x3bf03[_0x3378eb(0x550)](_0x1253ac) ? _0x1253ac = _0x1253ac[_0x3378eb(0x707)](_0x3bf03, _0x481695) : _0x1253ac;
                    _0x445824[_0x3378eb(0x5f3)] = _0x1253ac;
                    let _0x472879 = document[_0x3378eb(0x6fa)]('div');
                    _0x472879[_0x3378eb(0x43d)]('class', _0x3378eb(0x470));
                    if (_0x2a48fe == 'BR')
                        $(_0x3378eb(0x50f))[_0x3378eb(0x6b3)](_0x472879),
                        $(_0x472879)[_0x3378eb(0x6b3)](_0x445824),
                        $(_0x445824)[_0x3378eb(0x6b3)](_0x308e15);
                    else {
                        if (_0x2a48fe == 'MX')
                            $('.servers-mexico')[_0x3378eb(0x6b3)](_0x472879),
                            $(_0x472879)[_0x3378eb(0x6b3)](_0x445824),
                            $(_0x445824)[_0x3378eb(0x6b3)](_0x308e15);
                        else {
                            if (_0x2a48fe == 'US')
                                $(_0x3378eb(0x651))[_0x3378eb(0x6b3)](_0x472879),
                                $(_0x472879)['append'](_0x445824),
                                $(_0x445824)[_0x3378eb(0x6b3)](_0x308e15);
                            else {
                                if (_0x2a48fe == 'CA')
                                    $(_0x3378eb(0x4a3))[_0x3378eb(0x6b3)](_0x472879),
                                    $(_0x472879)[_0x3378eb(0x6b3)](_0x445824),
                                    $(_0x445824)[_0x3378eb(0x6b3)](_0x308e15);
                                else {
                                    if (_0x2a48fe == 'DE')
                                        $('.servers-germania')[_0x3378eb(0x6b3)](_0x472879),
                                        $(_0x472879)[_0x3378eb(0x6b3)](_0x445824),
                                        $(_0x445824)['append'](_0x308e15);
                                    else {
                                        if (_0x2a48fe == 'FR')
                                            $('.servers-francia')[_0x3378eb(0x6b3)](_0x472879),
                                            $(_0x472879)[_0x3378eb(0x6b3)](_0x445824),
                                            $(_0x445824)['append'](_0x308e15);
                                        else {
                                            if (_0x2a48fe == 'SG')
                                                $('.servers-singapur')['append'](_0x472879),
                                                $(_0x472879)[_0x3378eb(0x6b3)](_0x445824),
                                                $(_0x445824)['append'](_0x308e15);
                                            else {
                                                if (_0x2a48fe == 'JP')
                                                    $(_0x3378eb(0x606))[_0x3378eb(0x6b3)](_0x472879),
                                                    $(_0x472879)[_0x3378eb(0x6b3)](_0x445824),
                                                    $(_0x445824)[_0x3378eb(0x6b3)](_0x308e15);
                                                else {
                                                    if (_0x2a48fe == 'AU')
                                                        $(_0x3378eb(0x6d2))['append'](_0x472879),
                                                        $(_0x472879)[_0x3378eb(0x6b3)](_0x445824),
                                                        $(_0x445824)[_0x3378eb(0x6b3)](_0x308e15);
                                                    else
                                                        _0x2a48fe == 'AE' && ($(_0x3378eb(0x447))[_0x3378eb(0x6b3)](_0x472879),
                                                        $(_0x472879)[_0x3378eb(0x6b3)](_0x445824),
                                                        $(_0x445824)[_0x3378eb(0x6b3)](_0x308e15));
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    $(_0x445824)['attr'](_0x3378eb(0x3e1), _0x3378eb(0x478)),
                    $(_0x445824)[_0x3378eb(0x35c)](_0x3378eb(0x1c0), _0x3716a4),
                    $(_0x445824)[_0x3378eb(0x35c)]('data-con', _0x352e31),
                    $(_0x445824)[_0x3378eb(0x2c0)](function() {
                        var _0x3eee32 = _0x3378eb;
                        $(_0x3eee32(0x350))[_0x3eee32(0x519)]('position', _0x3eee32(0x3a1));
                        let _0x168a2d = $(this)['attr'](_0x3eee32(0x592))
                          , _0x8b1ba9 = $(this)['attr'](_0x3eee32(0x1c0));
                        console[_0x3eee32(0x39b)](_0x8b1ba9),
                        _0x168a2d && (_0x180e19['r']['Hd'](),
                        _0x180e19['sa'](_0x168a2d));
                    });
                }
            }
            , 0xbb8)) : alert('Ingresa\x20\x27W\x27\x20o\x20\x27T\x27\x20para\x20continuar.');
    });
}
  , ctx = {
    'fontStyle': {
        'blanco': new PIXI[(_0x40b61e(0x50b))]({
            'align': 'center',
            'fill': '#FFF',
            'fontSize': 0xc,
            'lineJoin': _0x40b61e(0x368),
            'stroke': _0x40b61e(0x5e9),
            'strokeThickness': 0x1,
            'whiteSpace': _0x40b61e(0x5e7),
            'wordWrap': !![]
        })
    }
};
timeFontColors = [_0x40b61e(0x5ab), '#FFC75A', _0x40b61e(0x1ca), _0x40b61e(0x59e), _0x40b61e(0x65e), _0x40b61e(0x1d7), '#ff0999'],
timeFontColors2 = ['#51a913', _0x40b61e(0x22d), _0x40b61e(0x1ca), '#FF4544', _0x40b61e(0x65e), '#CCCF81', _0x40b61e(0x493)];
for (let index = 0x0; index < timeFontColors[_0x40b61e(0x607)]; index++) {
    let color = timeFontColors[index];
    ctx[_0x40b61e(0x2ad)][_0x40b61e(0x34e) + index] = new PIXI[(_0x40b61e(0x50b))]({
        'align': _0x40b61e(0x43e),
        'fill': color,
        'fontSize': 0x19,
        'lineJoin': _0x40b61e(0x368),
        'whiteSpace': _0x40b61e(0x5e7),
        'wordWrap': !![],
        'dropShadow': !![],
        'dropShadowBlur': 0x6,
        'fontWeight': _0x40b61e(0x1bc)
    });
}
ctx[_0x40b61e(0x336)] = {};
const portionTimes = [0x28, 0x28, 0x28, 0x78, 0x28, 0x14, 0x28];
for (let i = 0x0; i < portionTimes[_0x40b61e(0x607)]; i++) {
    let name = _0x40b61e(0x641) + i;
    ctx[_0x40b61e(0x336)][name] = new PIXI[(_0x40b61e(0x4ab))](portionTimes[i],ctx['fontStyle'][_0x40b61e(0x34e) + i]),
    ctx[_0x40b61e(0x336)][name]['y'] = 0x3d;
}
ctx[_0x40b61e(0x560)] = PIXI[_0x40b61e(0x52c)]['fromImage'](_0x40b61e(0x831)),
ctx[_0x40b61e(0x1e0)] = new PIXI[(_0x40b61e(0x83e))](ctx['imgTest_desactived']),
ctx['containerImgTest'][_0x40b61e(0x44d)]['set'](0.5),
ctx['containerImgTest']['x'] = window[_0x40b61e(0x60d)] / 0x2,
ctx[_0x40b61e(0x1e0)]['y'] = window[_0x40b61e(0x421)] / 0x2,
ctx['containerImgTest'][_0x40b61e(0x4d8)] = 0.3,
ctx[_0x40b61e(0x63a)] = new PIXI[(_0x40b61e(0x412))]();
const createCircle = function() {
    var _0x2895c0 = _0x40b61e;
    const _0x7ea4fd = 0xff0000;
    if (!window[_0x2895c0(0x721)] || typeof window[_0x2895c0(0x721)][_0x2895c0(0x795)] === _0x2895c0(0x83c) || typeof window[_0x2895c0(0x721)][_0x2895c0(0x543)] === _0x2895c0(0x83c)) {
        console[_0x2895c0(0x2aa)](_0x2895c0(0x624));
        return;
    }
    let _0x398776 = _0x2895c0(0x403);
    !ctx[_0x398776] && (ctx[_0x398776] = new PIXI[(_0x2895c0(0x2e0))](),
    ctx[_0x398776]['zIndex'] = 0x2,
    ctx[_0x398776][_0x2895c0(0x4d8)] = 0.9,
    ctx[_0x398776]['beginFill'](_0x7ea4fd),
    ctx[_0x398776]['drawCircle'](0x0, 0x0, 0.06 * 0x28),
    ctx[_0x398776][_0x2895c0(0x77f)](),
    ctx[_0x398776][_0x2895c0(0x2c9)](0x1, _0x2895c0(0x4be)),
    ctx[_0x398776]['drawCircle'](0x0, 0x0, 0.06 * 0x28),
    ctx[_0x398776]['endFill']()),
    ctx[_0x398776]['x'] = window[_0x2895c0(0x721)]['playerX'],
    ctx[_0x398776]['y'] = window[_0x2895c0(0x721)]['playerY'],
    ctx[_0x2895c0(0x63a)] ? ctx[_0x2895c0(0x63a)]['addChild'](ctx[_0x398776]) : console['error']('Error:\x20ctx.pointsContainer\x20no\x20est�\x20definido.');
};
ctx[_0x40b61e(0x824)] = new PIXI[(_0x40b61e(0x412))]();
var createServerMessage = function(_0x1d7005, _0xe72002) {
    var _0x1adad4 = _0x40b61e;
    if (_0xe72002['trim']() === '')
        return;
    toastr[_0x1adad4(0x36d)] = {
        'closeButton': ![],
        'debug': ![],
        'newestOnTop': !![],
        'progressBar': !![],
        'positionClass': _0x1adad4(0x28e),
        'preventDuplicates': !![],
        'onclick': null,
        'showDuration': _0x1adad4(0x3f4),
        'hideDuration': _0x1adad4(0x23c),
        'timeOut': _0x1adad4(0x2cc),
        'extendedTimeOut': _0x1adad4(0x23c),
        'showEasing': _0x1adad4(0x58a),
        'hideEasing': _0x1adad4(0x2cb),
        'showMethod': _0x1adad4(0x2c6),
        'hideMethod': 'fadeOut',
        'toastClass': 'server-message-toast'
    },
    toastr[_0x1adad4(0x688)](_0xe72002, _0x1d7005, {
        'iconClass': _0x1adad4(0x5f9)
    });
}
  , createTeamMessage = function(_0x5cfda9, _0xeb3f60, _0x2004f0) {
    var _0xb70a74 = _0x40b61e;
    if (_0x2004f0[_0xb70a74(0x4b9)]() === '')
        return;
    gameState['players'][_0xb70a74(0x397)]( (_0x461ee8, _0x4b8cff) => {
        var _0x346e82 = _0xb70a74;
        if (_0x461ee8['teamCode'] === _0x5cfda9 && _0x461ee8[_0x346e82(0x774)] !== _0xeb3f60) {
            let _0x3a3d89 = _0x461ee8[_0x346e82(0x774)][_0x346e82(0x607)] > 0xc ? _0x461ee8[_0x346e82(0x774)][_0x346e82(0x517)](0x0, 0xc) : _0x461ee8[_0x346e82(0x774)];
            toastr['options'] = {
                'closeButton': ![],
                'debug': ![],
                'newestOnTop': !![],
                'progressBar': !![],
                'positionClass': _0x346e82(0x28e),
                'preventDuplicates': !![],
                'onclick': null,
                'showDuration': '300',
                'hideDuration': '1000',
                'timeOut': _0x346e82(0x2cc),
                'extendedTimeOut': _0x346e82(0x23c),
                'showEasing': _0x346e82(0x58a),
                'hideEasing': _0x346e82(0x2cb),
                'showMethod': 'fadeIn',
                'hideMethod': _0x346e82(0x2d4)
            },
            toastr[_0x346e82(0x688)]('' + _0x2004f0, '' + _0xeb3f60, {
                'iconClass': _0x346e82(0x5f9)
            }),
            console[_0x346e82(0x39b)](_0x346e82(0x275) + _0xeb3f60 + _0x346e82(0x283) + _0x3a3d89 + '\x20(' + _0x4b8cff + _0x346e82(0x6d0) + _0x5cfda9);
        }
    }
    );
}
  , createTeamUbication = function(_0x51da46, _0x92431f) {
    var _0xfa8afa = _0x40b61e;
    updateTeamTable(gameState, _0x51da46),
    gameState[_0xfa8afa(0x3e2)][_0xfa8afa(0x397)]( (_0x52d1f6, _0x1284c0) => {
        var _0x589a5a = _0xfa8afa;
        if (_0x52d1f6[_0x589a5a(0x7a2)] === _0x51da46) {
            let _0x2d6831 = _0x52d1f6[_0x589a5a(0x7fe)] || _0x92431f
              , _0x14fba5 = _0x52d1f6[_0x589a5a(0x774)][_0x589a5a(0x707)](/\u3164/g, '')[_0x589a5a(0x707)](/ZW_\d+$/, '')[_0x589a5a(0x4b9)]();
            if (!ctx[_0x1284c0]) {
                ctx[_0x1284c0] = new PIXI['Graphics'](),
                ctx[_0x1284c0][_0x589a5a(0x3ad)] = 0x2,
                ctx[_0x1284c0][_0x589a5a(0x4d8)] = 0.9,
                ctx[_0x589a5a(0x824)][_0x589a5a(0x21e)](ctx[_0x1284c0]);
                let _0x3e58f1 = new PIXI[(_0x589a5a(0x4ab))](_0x14fba5,{
                    'fontFamily': fonts[currentFontIndex],
                    'fontSize': 0xe,
                    'fill': _0x2d6831,
                    'stroke': 0x0,
                    'strokeThickness': 0x2
                });
                _0x3e58f1[_0x589a5a(0x44d)][_0x589a5a(0x6dc)](0.5),
                _0x3e58f1['visible'] = ![],
                _0x3e58f1['y'] = -0xf,
                ctx[_0x1284c0][_0x589a5a(0x21e)](_0x3e58f1),
                ctx[_0x1284c0][_0x589a5a(0x843)] = new PIXI[(_0x589a5a(0x69b))](0x0,0x0,0.12 * 0x14),
                ctx[_0x1284c0][_0x589a5a(0x69a)] = !![],
                ctx[_0x1284c0]['buttonMode'] = !![],
                ctx[_0x1284c0]['on']('mouseover', () => {
                    var _0x5737cf = _0x589a5a;
                    _0x3e58f1[_0x5737cf(0x3db)] = !![];
                }
                ),
                ctx[_0x1284c0]['on'](_0x589a5a(0x253), () => {
                    _0x3e58f1['visible'] = ![];
                }
                ),
                ctx[_0x1284c0]['on'](_0x589a5a(0x54a), () => {
                    var _0x351a6e = _0x589a5a;
                    _0x3e58f1[_0x351a6e(0x3db)] = !_0x3e58f1[_0x351a6e(0x3db)];
                }
                ),
                ctx[_0x1284c0]['on'](_0x589a5a(0x5eb), () => {
                    var _0x2232cb = _0x589a5a;
                    _0x3e58f1[_0x2232cb(0x3db)] = !_0x3e58f1[_0x2232cb(0x3db)];
                }
                ),
                ctx[_0x1284c0][_0x589a5a(0x52d)] = _0x3e58f1;
            }
            ctx[_0x1284c0][_0x589a5a(0x1d5)](),
            ctx[_0x1284c0][_0x589a5a(0x4a2)](_0x2d6831),
            ctx[_0x1284c0]['drawCircle'](0x0, 0x0, 0.12 * 0x14),
            ctx[_0x1284c0][_0x589a5a(0x77f)](),
            ctx[_0x1284c0][_0x589a5a(0x2c9)](0x1, 0x0),
            ctx[_0x1284c0]['drawCircle'](0x0, 0x0, 0.12 * 0x14),
            ctx[_0x1284c0][_0x589a5a(0x77f)](),
            ctx[_0x1284c0]['x'] = _0x52d1f6[_0x589a5a(0x31e)]['x'],
            ctx[_0x1284c0]['y'] = _0x52d1f6['position']['y'],
            ctx[_0x1284c0][_0x589a5a(0x52d)]['y'] = -0xf,
            ctx[_0x1284c0][_0x589a5a(0x52d)][_0x589a5a(0x318)] !== _0x14fba5 && (ctx[_0x1284c0][_0x589a5a(0x52d)]['text'] = _0x14fba5),
            ctx[_0x1284c0][_0x589a5a(0x52d)][_0x589a5a(0x1b5)][_0x589a5a(0x331)] !== _0x2d6831 && (ctx[_0x1284c0]['nameText'][_0x589a5a(0x1b5)][_0x589a5a(0x331)] = _0x2d6831);
        }
    }
    );
}
  , clearTeamUbication = function() {
    var _0x4a29e1 = _0x40b61e;
    ctx[_0x4a29e1(0x824)] ? Object[_0x4a29e1(0x6b9)](ctx)[_0x4a29e1(0x397)](_0x5998cb => {
        var _0x3ec767 = _0x4a29e1;
        ctx[_0x5998cb]instanceof PIXI['Graphics'] && ctx[_0x5998cb]['parent'] === ctx[_0x3ec767(0x824)] && (ctx[_0x3ec767(0x824)][_0x3ec767(0x1d1)](ctx[_0x5998cb]),
        ctx[_0x5998cb][_0x3ec767(0x4b1)](!![]),
        delete ctx[_0x5998cb]),
        ctx[_0x5998cb + '_text'] && ctx[_0x5998cb + _0x3ec767(0x1e4)]['parent'] === ctx[_0x3ec767(0x824)] && (ctx[_0x3ec767(0x824)][_0x3ec767(0x1d1)](ctx[_0x5998cb + '_text']),
        ctx[_0x5998cb + _0x3ec767(0x1e4)]['destroy'](!![]),
        delete ctx[_0x5998cb + _0x3ec767(0x1e4)]);
    }
    ) : console[_0x4a29e1(0x2aa)](_0x4a29e1(0x529));
};
ctx[_0x40b61e(0x51e)] = new PIXI['Text'](_0x40b61e(0x5fe),ctx[_0x40b61e(0x2ad)][_0x40b61e(0x7f2)]),
ctx['titleRec2']['y'] = -0x5,
ctx[_0x40b61e(0x5f6)] = new PIXI[(_0x40b61e(0x412))](),
ctx['containerHsRec2']['x'] = 0x1e,
ctx[_0x40b61e(0x5f6)]['y'] = 0xaa;
let playersTexts = [];
for (let index = 0x0; index < 0x5; index++) {
    let wallBounce = index + 0x1
      , deltaCoordinate = new PIXI[(_0x40b61e(0x4ab))](wallBounce + '.',ctx[_0x40b61e(0x2ad)]['blanco']);
    deltaCoordinate['x'] = 0x0,
    deltaCoordinate['y'] = 0xd * wallBounce,
    ctx[_0x40b61e(0x5f6)][_0x40b61e(0x21e)](deltaCoordinate);
    let playerNameText = new PIXI['Text']('--',{
        'fill': '#FFFFFF',
        'fontSize': 0xc
    });
    playerNameText['x'] = 0xf,
    playerNameText['y'] = 0xd * wallBounce,
    ctx[_0x40b61e(0x5f6)][_0x40b61e(0x21e)](playerNameText),
    playersTexts[_0x40b61e(0x7b5)](playerNameText);
}
ctx['containerHsRec2']['addChild'](ctx[_0x40b61e(0x51e)]);
function updatePlayerTable(_0x5b6942) {
    var _0x8f9486 = _0x40b61e;
    const _0x5bbc4d = _0x5b6942[_0x8f9486(0x3e2)]
      , _0x510d3f = Array[_0x8f9486(0x41e)](_0x5bbc4d[_0x8f9486(0x24f)]())
      , _0x55dbff = _0x510d3f[_0x8f9486(0x2b6)](_0x13a8b1 => _0x13a8b1[_0x8f9486(0x7a2)] === zwormData[_0x8f9486(0x7a2)]);
    playersTexts[_0x8f9486(0x397)]( (_0x3e5963, _0x572572) => {
        var _0x5c6464 = _0x8f9486;
        if (_0x55dbff[_0x572572]) {
            let _0x5e032e = _0x55dbff[_0x572572];
            _0x3e5963[_0x5c6464(0x318)] = _0x5e032e[_0x5c6464(0x774)][_0x5c6464(0x392)](0x0, 0x14),
            _0x3e5963['style'][_0x5c6464(0x331)] = _0x5e032e[_0x5c6464(0x7fe)];
        } else
            _0x3e5963[_0x5c6464(0x318)] = '--',
            _0x3e5963[_0x5c6464(0x1b5)][_0x5c6464(0x331)] = _0x5c6464(0x2a1);
    }
    );
}
zw_TopFriends_list = new PIXI[(_0x40b61e(0x412))](),
zw_TopFriends_list['x'] = 0x50,
zw_TopFriends_list['y'] = 0xb9;
const titleTextfriendlist = new PIXI[(_0x40b61e(0x4ab))](_0x40b61e(0x4e5),{
    'fontFamily': fonts[currentFontIndex],
    'fontSize': 0xc,
    'fill': 0xffffff,
    'fontWeight': _0x40b61e(0x1bc)
});
titleTextfriendlist['x'] = 0xa,
titleTextfriendlist['y'] = -0x5,
zw_TopFriends_list['addChild'](titleTextfriendlist);
const dividerfriendlist = new PIXI[(_0x40b61e(0x2e0))]();
dividerfriendlist[_0x40b61e(0x2c9)](0x2, 0xffffff, 0x1),
dividerfriendlist[_0x40b61e(0x454)](-0xf, 0xf),
dividerfriendlist[_0x40b61e(0x45d)](0x50, 0xf),
dividerfriendlist['x'] = 0x5,
zw_TopFriends_list['addChild'](dividerfriendlist);
function updateTeamTable(_0x3a2e4c, _0x513c23) {
    var _0x394e6b = _0x40b61e;
    for (let _0x211bed = zw_TopFriends_list[_0x394e6b(0x485)][_0x394e6b(0x607)] - 0x1; _0x211bed >= 0x0; _0x211bed--) {
        let _0x1da394 = zw_TopFriends_list[_0x394e6b(0x485)][_0x211bed];
        _0x1da394 !== titleTextfriendlist && _0x1da394 !== dividerfriendlist && zw_TopFriends_list['removeChild'](_0x1da394);
    }
    let _0x5e495e = 0x0;
    const _0x1622fc = 0xa;
    _0x3a2e4c[_0x394e6b(0x3e2)][_0x394e6b(0x397)]( (_0x2dd2f7, _0x4b85a9) => {
        var _0x2ad24c = _0x394e6b;
        if (_0x2dd2f7[_0x2ad24c(0x7a2)] === _0x513c23 && _0x2dd2f7[_0x2ad24c(0x24d)] === zwormData[_0x2ad24c(0x24d)]) {
            let _0x527a2d = cleanNickname(_0x2dd2f7['nickname'])
              , _0x26065e = /[\u0600-\u06FF]/[_0x2ad24c(0x550)](_0x527a2d);
            const _0x58472a = new PIXI[(_0x2ad24c(0x4ab))](_0x5e495e + 0x1 + '.\x20' + _0x527a2d,{
                'fontFamily': fonts[currentFontIndex],
                'fontSize': 0xc,
                'fill': _0x2dd2f7[_0x2ad24c(0x7fe)] || 0xffffff,
                'stroke': 0x0,
                'strokeThickness': 0x2,
                'align': _0x26065e ? _0x2ad24c(0x7b0) : _0x2ad24c(0x650)
            });
            _0x58472a['x'] = -0x32,
            _0x58472a['y'] = 0x14 + _0x5e495e * 0xf,
            zw_TopFriends_list[_0x2ad24c(0x21e)](_0x58472a),
            _0x5e495e++;
            if (_0x5e495e >= _0x1622fc)
                return;
        }
    }
    );
}
zw_TopHS_RecordHs = new PIXI['Container'](),
zw_TopHS_RecordHs['x'] = -0x37,
zw_TopHS_RecordHs['y'] = 0x73;
const titleText = new PIXI[(_0x40b61e(0x4ab))](_0x40b61e(0x5aa),{
    'fontFamily': fonts[currentFontIndex],
    'fontSize': 0xc,
    'fill': 0xffd700,
    'fontWeight': 'bold'
});
titleText['x'] = 0xa,
titleText['y'] = -0x5,
zw_TopHS_RecordHs[_0x40b61e(0x21e)](titleText);
const divider = new PIXI['Graphics']();
divider[_0x40b61e(0x2c9)](0x2, 0xffffff, 0x1),
divider[_0x40b61e(0x454)](0x0, 0xf),
divider[_0x40b61e(0x45d)](0x50, 0xf),
divider['x'] = 0x5,
zw_TopHS_RecordHs[_0x40b61e(0x21e)](divider),
zw_Top3HS_RecordHs = new PIXI[(_0x40b61e(0x412))](),
zw_Top3HS_RecordHs['y'] = 0x19;
const titleText3hs = new PIXI['Text']('Top\x203\x20HS\x20(👑)',{
    'fontFamily': fonts[currentFontIndex],
    'fontSize': 0xc,
    'fill': 0xffd700,
    'fontWeight': _0x40b61e(0x1bc)
});
titleText3hs['x'] = 0xa,
titleText3hs['y'] = -0x5,
zw_Top3HS_RecordHs[_0x40b61e(0x21e)](titleText3hs);
const divider3hs = new PIXI[(_0x40b61e(0x2e0))]();
divider3hs['lineStyle'](0x2, 0xffffff, 0x1),
divider3hs[_0x40b61e(0x454)](0x0, 0xf),
divider3hs[_0x40b61e(0x45d)](0x50, 0xf),
divider3hs['x'] = 0x5,
zw_Top3HS_RecordHs[_0x40b61e(0x21e)](divider3hs);
var playerTexts = [];
const cleanNickname = _0x377105 => {
    var _0x11f5a6 = _0x40b61e;
    return _0x377105[_0x11f5a6(0x707)](/[_.\s:)+ㅤ]*ZW[Z]*_\d+$/g, '')[_0x11f5a6(0x4b9)]();
}
  , updateTop8Hs = function() {
    var _0x1faca5 = _0x40b61e;
    const _0x1b2239 = Array[_0x1faca5(0x41e)](gameState[_0x1faca5(0x3e2)][_0x1faca5(0x24f)]())
      , _0x225d36 = _0x1b2239[_0x1faca5(0x2b6)](_0x532729 => _0x532729[_0x1faca5(0x4ed)]['hs'] > 0x0 && _0x532729['nickname'][_0x1faca5(0x4b9)]() !== '');
    let _0x247046 = _0x225d36[_0x1faca5(0x259)](_0x56f456 => _0x56f456['nickname'] === zwormData[_0x1faca5(0x774)]);
    !_0x247046 && zwormData['hs'] > 0x0 && _0x225d36[_0x1faca5(0x7b5)]({
        'nickname': zwormData[_0x1faca5(0x774)],
        'hskill': {
            'hs': zwormData['hs']
        },
        'teamColor': zwormData[_0x1faca5(0x7fe)]
    });
    if (_0x225d36[_0x1faca5(0x607)] === 0x0)
        return;
    _0x225d36[_0x1faca5(0x337)]( (_0x12c8a7, _0x5ac813) => _0x5ac813[_0x1faca5(0x4ed)]['hs'] - _0x12c8a7[_0x1faca5(0x4ed)]['hs']);
    for (let _0x405088 = zw_TopHS_RecordHs[_0x1faca5(0x485)][_0x1faca5(0x607)] - 0x1; _0x405088 >= 0x0; _0x405088--) {
        let _0x45776a = zw_TopHS_RecordHs[_0x1faca5(0x485)][_0x405088];
        _0x45776a !== titleText && _0x45776a !== divider && zw_TopHS_RecordHs['removeChild'](_0x45776a);
    }
    playerTexts['length'] = 0x0;
    const _0x588a32 = 0xc8;
    for (let _0x21a87d = 0x0; _0x21a87d < Math[_0x1faca5(0x794)](_0x225d36['length'], 0x6); _0x21a87d++) {
        let _0x1260ad = _0x225d36[_0x21a87d]
          , _0x2b5551 = cleanNickname(_0x1260ad['nickname'])
          , _0x1a8ba2 = /[\u0600-\u06FF]/['test'](_0x2b5551)
          , _0x903065 = _0x2b5551[_0x1faca5(0x49d)](0xf, '\x20')
          , _0x23898e = ('☠️\x20' + _0x1260ad[_0x1faca5(0x4ed)]['hs'])[_0x1faca5(0x511)](0x6, '\x20')
          , _0x3665a3 = new PIXI[(_0x1faca5(0x4ab))](_0x21a87d + 0x1 + _0x1faca5(0x5e8) + _0x903065 + '\x20-\x20' + _0x23898e + _0x1faca5(0x20e),{
            'fontFamily': fonts[currentFontIndex],
            'fontSize': 0xa,
            'fill': _0x1260ad[_0x1faca5(0x7fe)] || 0xffffff,
            'stroke': 0x0,
            'strokeThickness': 0x2,
            'align': _0x1a8ba2 ? 'right' : _0x1faca5(0x650),
            'wordWrap': !![],
            'wordWrapWidth': _0x588a32,
            'breakWords': !![]
        });
        _0x3665a3['x'] = 0xa,
        _0x3665a3['y'] = 0x14 + _0x21a87d * 0xf,
        playerTexts['push'](_0x3665a3),
        zw_TopHS_RecordHs[_0x1faca5(0x21e)](_0x3665a3);
    }
    zw_Top3HS_RecordHs['y'] = 0x1e + playerTexts['length'] * 0xf;
}
  , colors = [0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff]
  , textStyle = {
    'align': _0x40b61e(0x43e),
    'fontSize': 0xc,
    'lineJoin': 'round',
    'strokeThickness': 0x1,
    'whiteSpace': _0x40b61e(0x5e7),
    'wordWrap': !![]
};
ctx['titleRec3'] = new PIXI[(_0x40b61e(0x4ab))](_0x40b61e(0x548),ctx[_0x40b61e(0x2ad)][_0x40b61e(0x7f2)]),
ctx['titleRec3']['y'] = -0x5,
ctx[_0x40b61e(0x2b5)]['x'] = 0xa,
ctx[_0x40b61e(0x555)] = new PIXI[(_0x40b61e(0x412))](),
ctx[_0x40b61e(0x555)]['x'] = -0x37,
ctx[_0x40b61e(0x555)]['y'] = 0x118;
for (let index = 0x0; index < 0x8; index++) {
    let wallBounce = index + 0x1
      , deltaCoordinate = new PIXI['Text']('\x20',ctx[_0x40b61e(0x2ad)][_0x40b61e(0x7f2)]);
    deltaCoordinate['x'] = index >= 0x9 ? -0x5 : 0x0,
    deltaCoordinate['y'] = 0xd * wallBounce,
    ctx[_0x40b61e(0x555)]['addChild'](deltaCoordinate);
    let playerNameText = new PIXI['Text']('--',{
        'fill': _0x40b61e(0x2cd),
        ...textStyle
    });
    playerNameText['x'] = index >= 0x9 ? -0x5 : 0x0,
    playerNameText['y'] = 0xd * wallBounce,
    ctx[_0x40b61e(0x555)][_0x40b61e(0x21e)](playerNameText);
    let playerName2Text = new PIXI[(_0x40b61e(0x4ab))]('?',{
        'fill': colors[index % colors[_0x40b61e(0x607)]],
        ...textStyle
    });
    playerName2Text['x'] = 0x46,
    playerName2Text['y'] = 0xd * wallBounce;
    let playerHsText = new PIXI[(_0x40b61e(0x4ab))]('--',{
        'fill': '#FF0000',
        ...textStyle
    });
    playerHsText['x'] = 0x7d,
    playerHsText['y'] = 0xd * wallBounce,
    ctx[_0x40b61e(0x555)][_0x40b61e(0x21e)](playerHsText);
}
function _0x2458(_0x308cf4, _0x2c731f) {
    var _0x5cd49e = _0x10c9();
    return _0x2458 = function(_0x1675e4, _0x36e294) {
        _0x1675e4 = _0x1675e4 - 0x1ad;
        var _0x1bf784 = _0x5cd49e[_0x1675e4];
        return _0x1bf784;
    }
    ,
    _0x2458(_0x308cf4, _0x2c731f);
}
ctx[_0x40b61e(0x555)][_0x40b61e(0x21e)](ctx[_0x40b61e(0x2b5)]);
var createTop1InMinimap = function(_0x22e27f) {
    var _0x25a839 = _0x40b61e;
    if (_0x22e27f && _0x22e27f[_0x25a839(0x31e)]) {
        let _0x576929 = 0xfff000;
        !ctx[_0x25a839(0x7f1)] && (ctx[_0x25a839(0x7f1)] = new PIXI[(_0x25a839(0x2e0))](),
        ctx[_0x25a839(0x7f1)][_0x25a839(0x3ad)] = 0x2,
        ctx[_0x25a839(0x7f1)][_0x25a839(0x4d8)] = 0.9,
        ctx['teamsContainer'] ? ctx[_0x25a839(0x824)]['addChild'](ctx['top1Point']) : console['error'](_0x25a839(0x529)));
        ctx[_0x25a839(0x7f1)][_0x25a839(0x1d5)](),
        ctx[_0x25a839(0x7f1)]['beginFill'](_0x576929),
        ctx['top1Point'][_0x25a839(0x512)](0x0, 0x0, 0.06 * 0x28),
        ctx[_0x25a839(0x7f1)][_0x25a839(0x77f)](),
        ctx['top1Point']['lineStyle'](0x1, 0xff0000),
        ctx[_0x25a839(0x7f1)][_0x25a839(0x512)](0x0, 0x0, 0.06 * 0x28),
        ctx[_0x25a839(0x7f1)][_0x25a839(0x77f)](),
        ctx['top1Point']['shadow'] = !![],
        ctx[_0x25a839(0x7f1)][_0x25a839(0x772)] = 0xff0000,
        ctx[_0x25a839(0x7f1)][_0x25a839(0x598)] = 0xf,
        ctx['top1Point'][_0x25a839(0x3ca)] = 0x0,
        ctx[_0x25a839(0x7f1)]['shadowOffsetY'] = 0x0;
        const _0x4ae097 = new PIXI[(_0x25a839(0x4ab))]('👑',{
            'fontFamily': _0x25a839(0x567),
            'fontSize': 0xa,
            'fill': 0xffffff,
            'align': 'center'
        });
        _0x4ae097['x'] = -_0x4ae097['width'] / 0x2,
        _0x4ae097['y'] = -_0x4ae097[_0x25a839(0x804)] / 0x2,
        ctx[_0x25a839(0x7f1)]['addChild'](_0x4ae097),
        ctx[_0x25a839(0x7f1)]['x'] = _0x22e27f['position']['x'],
        ctx[_0x25a839(0x7f1)]['y'] = _0x22e27f['position']['y'],
        console[_0x25a839(0x39b)](_0x25a839(0x713), _0x22e27f[_0x25a839(0x261)]);
    } else
        console[_0x25a839(0x2aa)](_0x25a839(0x1e1));
};
const updateHeadshotHistory = function(_0x1d5d35) {
    var _0x5f2aee = _0x40b61e;
    for (let _0x52941e = 0x0; _0x52941e < 0x8; _0x52941e++) {
        ctx['containerHsRec3'][_0x5f2aee(0x485)][0x3 * _0x52941e + 0x1] && (ctx[_0x5f2aee(0x555)][_0x5f2aee(0x485)][0x3 * _0x52941e + 0x1][_0x5f2aee(0x318)] = _0x1d5d35[_0x52941e][_0x5f2aee(0x810)]),
        ctx[_0x5f2aee(0x555)][_0x5f2aee(0x485)][0x3 * _0x52941e + 0x3] && (ctx['containerHsRec3']['children'][0x3 * _0x52941e + 0x2][_0x5f2aee(0x318)] = _0x1d5d35[_0x52941e]['enemyNameHs']);
    }
};
function assignPtcValues(_0x1cd609, _0x2a037c, _0x4d03d6) {
    var _0x161156 = _0x40b61e;
    let _0x3a5e53 = portionTimes[_0x2a037c] - parseInt((0.99 == _0x4d03d6 ? 0x1 : _0x4d03d6) * portionTimes[_0x2a037c] / 0x1)
      , _0x3b326a = _0x161156(0x641) + _0x2a037c;
    _0x1cd609['Tf'][_0x2a037c]['addChild'](ctx[_0x161156(0x336)][_0x3b326a]),
    ctx[_0x161156(0x336)][_0x3b326a] && (ctx['ptc'][_0x3b326a]['x'] = _0x3a5e53 >= 0x64 ? 0xb : _0x3a5e53 >= 0xa ? 0x12 : 0x1a,
    ctx[_0x161156(0x336)][_0x3b326a]['text'] = _0x3a5e53);
}
function account() {
    var _0x3f720e = _0x40b61e;
    $(_0x3f720e(0x6c3))[_0x3f720e(0x719)](),
    $(_0x3f720e(0x39c))['on'](_0x3f720e(0x2c0), function() {
        var _0x57df37 = _0x3f720e
          , _0x25929b = $(this)[_0x57df37(0x35c)](_0x57df37(0x35d));
        $(_0x57df37(0x39c))[_0x57df37(0x317)]('ui-tab-active'),
        $(this)[_0x57df37(0x2bd)](_0x57df37(0x75a)),
        $(_0x57df37(0x6c3))['hide'](),
        $(_0x57df37(0x70b) + _0x25929b[_0x57df37(0x6e8)]())['fadeIn'](0xc8),
        $('.servers-container\x20>\x20div')[_0x57df37(0x1d4)](_0x57df37(0x70b) + _0x25929b[_0x57df37(0x6e8)]())[_0x57df37(0x2d4)](0x64);
    });
}
function obtieneUSER() {
    var _0x1d265c = _0x40b61e
      , _0x2959d9 = {}
      , _0x3a56af = {};
    window[_0x1d265c(0x660)] = function() {
        var _0x34b110 = _0x1d265c;
        _0x3a56af = window[_0x34b110(0x65b)];
        if (_0x3a56af && Object[_0x34b110(0x6b9)](_0x3a56af)[_0x34b110(0x607)] > 0x0) {
            console[_0x34b110(0x39b)](_0x3a56af);
            if (_0x3a56af) {
                var _0x972c31 = window['mouseX'] - _0x3a56af['qj']['If']['x']
                  , _0x2526c9 = window['mouseY'] - _0x3a56af['qj']['If']['y']
                  , _0x418314 = _0x3a56af['Mb']['ad']
                  , _0x4be492 = Math['sqrt'](_0x972c31 * _0x972c31 + _0x2526c9 * _0x2526c9);
                console[_0x34b110(0x39b)](_0x34b110(0x789), _0x3a56af, 'nickname:\x20', _0x418314, _0x34b110(0x252), _0x4be492);
            }
        }
    }
    ;
}
;function loadScript2(_0x21007a, _0x4ab89e=!![]) {
    return new Promise( (_0x160cce, _0x396a44) => {
        var _0x35ea12 = _0x2458
          , _0x69b22a = document[_0x35ea12(0x6fa)]('script');
        _0x69b22a[_0x35ea12(0x80b)] = _0x35ea12(0x1bd),
        _0x69b22a['src'] = _0x21007a,
        _0x69b22a[_0x35ea12(0x7eb)] = _0x4ab89e,
        _0x69b22a[_0x35ea12(0x2c1)] = _0x160cce,
        _0x69b22a[_0x35ea12(0x815)] = _0x396a44,
        document[_0x35ea12(0x741)][_0x35ea12(0x1f6)](_0x69b22a);
    }
    );
}
function loadStylesheet(_0x949a75) {
    return new Promise( (_0x3b2625, _0x42ba9a) => {
        var _0x520f40 = _0x2458
          , _0x24ba39 = document['createElement'](_0x520f40(0x547));
        _0x24ba39[_0x520f40(0x594)] = _0x520f40(0x250),
        _0x24ba39[_0x520f40(0x80b)] = _0x520f40(0x2c5),
        _0x24ba39[_0x520f40(0x4f6)] = _0x949a75,
        _0x24ba39[_0x520f40(0x2c1)] = _0x3b2625,
        _0x24ba39[_0x520f40(0x815)] = _0x42ba9a,
        document['head'][_0x520f40(0x1f6)](_0x24ba39);
    }
    );
}
loadStylesheet('https://fonts.googleapis.com/css2?family=Palanquin+Dark:wght@400;500;600;700&family=Zen+Dots&display=swap'),
loadScript2(_0x40b61e(0x7d4), !![]),
loadStylesheet('https://cdnjs.cloudflare.com/ajax/libs/jquery-minicolors/2.3.6/jquery.minicolors.min.css'),
loadScript2(_0x40b61e(0x791)),
loadScript2('https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js'),
loadStylesheet(_0x40b61e(0x4d3)),
_0x40b61e(0x6c5);
var _typeof = _0x40b61e(0x3c7) == typeof Symbol && _0x40b61e(0x30c) == typeof Symbol[_0x40b61e(0x508)] ? function(_0x576f99) {
    return typeof _0x576f99;
}
: function(_0x4929cf) {
    var _0x53c903 = _0x40b61e;
    return _0x4929cf && 'function' == typeof Symbol && _0x4929cf[_0x53c903(0x532)] === Symbol && _0x4929cf !== Symbol['prototype'] ? _0x53c903(0x30c) : typeof _0x4929cf;
}
, GoogleAuth;
!(function() {
    var _0xc58cd3 = _0x40b61e;
    try {
        console[_0xc58cd3(0x39b)](function(_0x31e5c8, _0x40dbd7) {
            var _0x3a643a = _0xc58cd3;
            for (var _0x4333bb = 0x0; _0x4333bb < _0x40dbd7['length']; _0x4333bb += 0x2)
                _0x31e5c8 = _0x31e5c8[_0x3a643a(0x665)](_0x40dbd7[_0x4333bb], _0x40dbd7[_0x4333bb + 0x1]);
            return _0x31e5c8;
        }(_0xc58cd3(0x68c), ['W', _0xc58cd3(0x605), 'Q', 'ssss', 'M', _0xc58cd3(0x255), 'Y', 'yyy', 'H', 'hh', 'S', 'ss', '6', _0xc58cd3(0x562), '3', _0xc58cd3(0x295), '2', '\x20\x20', 'N', '\x0a']));
    } catch (_0x38b453) {}
}()),
window[_0x40b61e(0x345)](_0x40b61e(0x80e), function() {
    var _0x1023c0 = _0x40b61e;
    function _0x3ab61e() {
        var _0x1d9f93 = _0x2458;
        return function(_0x3740f8, _0x50e6a6, _0x52fca6) {
            var _0x20d426 = _0x2458;
            function _0x2b1bf1(_0x1b3901, _0x1eea29) {
                return (void 0x0 === _0x1b3901 ? 'undefined' : _typeof(_0x1b3901)) === _0x1eea29;
            }
            function _0x30cade() {
                var _0x5cafaa = _0x2458;
                return _0x5cafaa(0x3c7) != typeof _0x50e6a6[_0x5cafaa(0x6fa)] ? _0x50e6a6[_0x5cafaa(0x6fa)](arguments[0x0]) : _0x47714f ? _0x50e6a6[_0x5cafaa(0x44b)]['call'](_0x50e6a6, _0x5cafaa(0x4e4), arguments[0x0]) : _0x50e6a6['createElement']['apply'](_0x50e6a6, arguments);
            }
            var _0x24c39d = []
              , _0x1ccf62 = []
              , _0x38ae24 = {
                '_version': _0x20d426(0x72b),
                '_config': {
                    'classPrefix': '',
                    'enableClasses': !0x0,
                    'enableJSClass': !0x0,
                    'usePrefixes': !0x0
                },
                '_q': [],
                'on': function(_0x573942, _0x5a076d) {
                    var _0x362ea0 = this;
                    setTimeout(function() {
                        _0x5a076d(_0x362ea0[_0x573942]);
                    }, 0x0);
                },
                'addTest': function(_0x56622d, _0x596f35, _0x5daa55) {
                    var _0x2e6c8b = _0x20d426;
                    _0x1ccf62[_0x2e6c8b(0x7b5)]({
                        'name': _0x56622d,
                        'fn': _0x596f35,
                        'options': _0x5daa55
                    });
                },
                'addAsyncTest': function(_0x37c572) {
                    _0x1ccf62['push']({
                        'name': null,
                        'fn': _0x37c572
                    });
                }
            }
              , _0x4239dd = function() {};
            _0x4239dd['prototype'] = _0x38ae24,
            _0x4239dd = new _0x4239dd();
            var _0x46cb51 = !0x1;
            try {
                _0x46cb51 = _0x20d426(0x2ee)in _0x3740f8 && 0x2 === _0x3740f8[_0x20d426(0x2ee)][_0x20d426(0x811)];
            } catch (_0x556d89) {}
            _0x4239dd[_0x20d426(0x74f)]('websockets', _0x46cb51);
            var _0x3672ef = _0x50e6a6['documentElement']
              , _0x47714f = _0x20d426(0x441) === _0x3672ef[_0x20d426(0x575)][_0x20d426(0x6e8)]();
            _0x4239dd['addTest']('canvas', function() {
                var _0x53446a = _0x20d426
                  , _0x204c70 = _0x30cade('canvas');
                return !(!_0x204c70['getContext'] || !_0x204c70[_0x53446a(0x70c)]('2d'));
            }),
            _0x4239dd[_0x20d426(0x74f)](_0x20d426(0x5a4), function() {
                var _0x432f76 = _0x20d426;
                return !0x1 !== _0x4239dd[_0x432f76(0x812)] && _0x432f76(0x3c7) == typeof _0x30cade('canvas')[_0x432f76(0x70c)]('2d')['fillText'];
            }),
            (function() {
                var _0x2c8bff = _0x20d426, _0x419101, _0x5dae70, _0x1d4e78, _0x593a07, _0x3d4d42, _0x163c1b, _0x82550d;
                for (var _0x3552c8 in _0x1ccf62)
                    if (_0x1ccf62[_0x2c8bff(0x5f5)](_0x3552c8)) {
                        if (_0x419101 = [],
                        _0x5dae70 = _0x1ccf62[_0x3552c8],
                        _0x5dae70[_0x2c8bff(0x62e)] && (_0x419101['push'](_0x5dae70[_0x2c8bff(0x62e)]['toLowerCase']()),
                        _0x5dae70[_0x2c8bff(0x36d)] && _0x5dae70[_0x2c8bff(0x36d)][_0x2c8bff(0x1f9)] && _0x5dae70[_0x2c8bff(0x36d)][_0x2c8bff(0x1f9)][_0x2c8bff(0x607)])) {
                            for (_0x1d4e78 = 0x0; _0x1d4e78 < _0x5dae70[_0x2c8bff(0x36d)]['aliases']['length']; _0x1d4e78++)
                                _0x419101[_0x2c8bff(0x7b5)](_0x5dae70[_0x2c8bff(0x36d)][_0x2c8bff(0x1f9)][_0x1d4e78][_0x2c8bff(0x6e8)]());
                        }
                        for (_0x593a07 = _0x2b1bf1(_0x5dae70['fn'], _0x2c8bff(0x3c7)) ? _0x5dae70['fn']() : _0x5dae70['fn'],
                        _0x3d4d42 = 0x0; _0x3d4d42 < _0x419101[_0x2c8bff(0x607)]; _0x3d4d42++)
                            _0x163c1b = _0x419101[_0x3d4d42],
                            _0x82550d = _0x163c1b[_0x2c8bff(0x821)]('.'),
                            0x1 === _0x82550d[_0x2c8bff(0x607)] ? _0x4239dd[_0x82550d[0x0]] = _0x593a07 : (!_0x4239dd[_0x82550d[0x0]] || _0x4239dd[_0x82550d[0x0]]instanceof Boolean || (_0x4239dd[_0x82550d[0x0]] = new Boolean(_0x4239dd[_0x82550d[0x0]])),
                            _0x4239dd[_0x82550d[0x0]][_0x82550d[0x1]] = _0x593a07),
                            _0x24c39d['push']((_0x593a07 ? '' : _0x2c8bff(0x5ba)) + _0x82550d['join']('-'));
                    }
            }()),
            function(_0x4fce4a) {
                var _0x5976ac = _0x20d426
                  , _0x2b2fe1 = _0x3672ef[_0x5976ac(0x416)]
                  , _0x14eca9 = _0x4239dd[_0x5976ac(0x576)][_0x5976ac(0x5b7)] || '';
                if (_0x47714f && (_0x2b2fe1 = _0x2b2fe1['baseVal']),
                _0x4239dd['_config']['enableJSClass']) {
                    var _0xb690cb = new RegExp('(^|\x5cs)' + _0x14eca9 + _0x5976ac(0x81a));
                    _0x2b2fe1 = _0x2b2fe1[_0x5976ac(0x707)](_0xb690cb, '$1' + _0x14eca9 + _0x5976ac(0x2f9));
                }
                _0x4239dd[_0x5976ac(0x576)][_0x5976ac(0x7b6)] && (_0x2b2fe1 += '\x20' + _0x14eca9 + _0x4fce4a[_0x5976ac(0x43b)]('\x20' + _0x14eca9),
                _0x47714f ? _0x3672ef[_0x5976ac(0x416)][_0x5976ac(0x626)] = _0x2b2fe1 : _0x3672ef[_0x5976ac(0x416)] = _0x2b2fe1);
            }(_0x24c39d),
            delete _0x38ae24['addTest'],
            delete _0x38ae24[_0x20d426(0x788)];
            for (var _0x2842f0 = 0x0; _0x2842f0 < _0x4239dd['_q']['length']; _0x2842f0++)
                _0x4239dd['_q'][_0x2842f0]();
            _0x3740f8[_0x20d426(0x54d)] = _0x4239dd;
        }(window, document),
        Modernizr[_0x1d9f93(0x226)] && Modernizr['canvas'] && Modernizr[_0x1d9f93(0x5a4)];
    }
    if (document[_0x1023c0(0x808)](_0x1023c0(0x1c4))['style'][_0x1023c0(0x5be)] = _0x1023c0(0x787),
    !_0x3ab61e())
        return void (document[_0x1023c0(0x808)](_0x1023c0(0x468))[_0x1023c0(0x1b5)][_0x1023c0(0x5be)] = _0x1023c0(0x787));
    !(function() {
        var _0x5b9465 = _0x1023c0;
        function _0x3392fc() {
            var _0x240744 = _0x2458;
            return window[_0x240744(0x826)] = _0x1ff066;
        }
        function _0x4961dc(_0x29740e) {
            var _0x50375f = _0x2458;
            const _0x1b0bb1 = _0x29740e + '='
              , _0x4eac51 = document[_0x50375f(0x2f1)][_0x50375f(0x821)](';');
            for (let _0xc2e354 = 0x0; _0xc2e354 < _0x4eac51['length']; _0xc2e354++) {
                let _0x584e2f = _0x4eac51[_0xc2e354];
                while (_0x584e2f['charAt'](0x0) === '\x20') {
                    _0x584e2f = _0x584e2f[_0x50375f(0x392)](0x1);
                }
                if (_0x584e2f[_0x50375f(0x82f)](_0x1b0bb1) === 0x0)
                    return _0x584e2f[_0x50375f(0x392)](_0x1b0bb1['length'], _0x584e2f[_0x50375f(0x607)]);
            }
            return '';
        }
        function _0x350985(_0xf4f914, _0x278ef6, _0x16fc90) {
            var _0xc9ef54 = _0x2458
              , _0x286ff8 = new Date();
            _0x286ff8[_0xc9ef54(0x1c9)](_0x286ff8['getTime']() + 0x5265c00 * _0x16fc90);
            var _0x1b74ba = _0xc9ef54(0x6cd) + _0x286ff8[_0xc9ef54(0x2da)]();
            document['cookie'] = _0xf4f914 + '=' + _0x278ef6 + ';\x20' + _0x1b74ba + _0xc9ef54(0x736);
        }
        function _0x2ca325(_0xef2c8e) {
            var _0x47fb43 = _0x2458;
            return window[_0x47fb43(0x30e)][_0xef2c8e];
        }
        function _0x5547e0(_0x10bb93) {
            return _0x10bb93[_0x581b91] ? _0x10bb93[_0x581b91] : _0x10bb93['en'] ? _0x10bb93['en'] : _0x10bb93['x'];
        }
        function _0x55a05a(_0x58bb1f) {
            var _0x24c342 = _0x2458
              , _0x56eab8 = (Math['floor'](_0x58bb1f) % 0x3c)[_0x24c342(0x4b3)]()
              , _0x582a32 = (Math['floor'](_0x58bb1f / 0x3c) % 0x3c)[_0x24c342(0x4b3)]()
              , _0x47af96 = (Math[_0x24c342(0x1c7)](_0x58bb1f / 0xe10) % 0x18)[_0x24c342(0x4b3)]()
              , _0xbf0ea3 = Math[_0x24c342(0x1c7)](_0x58bb1f / 0x15180)[_0x24c342(0x4b3)]()
              , _0x47227b = _0x2ca325('util.time.days')
              , _0x3c83e2 = _0x2ca325(_0x24c342(0x549))
              , _0x16ce55 = _0x2ca325(_0x24c342(0x747))
              , _0x17799d = _0x2ca325(_0x24c342(0x280));
            return _0xbf0ea3 > 0x0 ? _0xbf0ea3 + '\x20' + _0x47227b + '\x20' + _0x47af96 + '\x20' + _0x3c83e2 + '\x20' + _0x582a32 + '\x20' + _0x16ce55 + '\x20' + _0x56eab8 + '\x20' + _0x17799d : _0x47af96 > 0x0 ? _0x47af96 + '\x20' + _0x3c83e2 + '\x20' + _0x582a32 + '\x20' + _0x16ce55 + '\x20' + _0x56eab8 + '\x20' + _0x17799d : _0x582a32 > 0x0 ? _0x582a32 + '\x20' + _0x16ce55 + '\x20' + _0x56eab8 + '\x20' + _0x17799d : _0x56eab8 + '\x20' + _0x17799d;
        }
        function _0x2fe590(_0x295dce) {
            var _0x496663 = _0x2458;
            return _0x295dce[_0x496663(0x65f)]('href') ? _0x295dce[_0x496663(0x665)](_0x496663(0x4f6), _0x496663(0x5ce)) : _0x295dce;
        }
        function _0x9024fe(_0x4f7749, _0x2a067f, _0x260ac7) {
            var _0x50d9e5 = _0x2458
              , _0x19be72 = document[_0x50d9e5(0x6fa)]('script')
              , _0x59ca49 = !0x0;
            _0x2a067f && (_0x19be72['id'] = _0x2a067f),
            _0x19be72[_0x50d9e5(0x472)] = _0x50d9e5(0x472),
            _0x19be72[_0x50d9e5(0x80b)] = _0x50d9e5(0x1bd),
            _0x19be72[_0x50d9e5(0x4ec)] = _0x4f7749,
            _0x260ac7 && (_0x19be72[_0x50d9e5(0x2c1)] = _0x19be72[_0x50d9e5(0x53d)] = function() {
                var _0x2b27ee = _0x50d9e5;
                _0x59ca49 = !0x1;
                try {
                    _0x260ac7();
                } catch (_0x186cf3) {
                    console[_0x2b27ee(0x39b)](_0x186cf3);
                }
                _0x19be72[_0x2b27ee(0x2c1)] = _0x19be72['onreadystatechange'] = null;
            }
            ),
            (document[_0x50d9e5(0x741)] || document[_0x50d9e5(0x785)](_0x50d9e5(0x741))[0x0])[_0x50d9e5(0x1f6)](_0x19be72);
        }
        function _0x22ee20(_0x34bb57, _0x196743) {
            var _0x5909eb = _0x2458
              , _0x50fbb1 = _0x196743;
            return _0x50fbb1['prototype'] = Object[_0x5909eb(0x29b)](_0x34bb57[_0x5909eb(0x792)]),
            _0x50fbb1['prototype']['constructor'] = _0x50fbb1,
            _0x50fbb1['parent'] = _0x34bb57,
            _0x50fbb1;
        }
        function _0x344f8a(_0x3f896c) {
            return _0x3f896c %= _0x1d3753,
            _0x3f896c < 0x0 ? _0x3f896c + _0x1d3753 : _0x3f896c;
        }
        function _0x54eb86(_0x38f057, _0x374546, _0x30c1c7) {
            return _0x1d73cf(_0x30c1c7, _0x38f057, _0x374546);
        }
        function _0x1d73cf(_0x24b3cd, _0x498fed, _0x4ea822) {
            return _0x24b3cd > _0x4ea822 ? _0x4ea822 : _0x24b3cd < _0x498fed ? _0x498fed : Number['isFinite'](_0x24b3cd) ? _0x24b3cd : 0.5 * (_0x498fed + _0x4ea822);
        }
        function _0x2c6321(_0x4ef2c1, _0x4af41d, _0x4548ea, _0x589fb5) {
            var _0x16441c = _0x2458;
            return _0x4af41d > _0x4ef2c1 ? Math[_0x16441c(0x794)](_0x4af41d, _0x4ef2c1 + _0x4548ea * _0x589fb5) : Math[_0x16441c(0x5c6)](_0x4af41d, _0x4ef2c1 - _0x4548ea * _0x589fb5);
        }
        function _0x29be4a(_0x1546ee, _0x472d31, _0xb01cd7, _0xcbc33, _0x41baa6) {
            var _0x49e3f = _0x2458;
            return _0x472d31 + (_0x1546ee - _0x472d31) * Math[_0x49e3f(0x49f)](0x1 - _0xcbc33, _0xb01cd7 / _0x41baa6);
        }
        function _0x2063c6(_0x4b4c5f, _0x47e62c, _0xfce1ed) {
            return _0x4b4c5f * (0x1 - _0xfce1ed) + _0x47e62c * _0xfce1ed;
        }
        function _0x46bcc8(_0x5d6bac, _0x106502, _0x1b7212, _0x52d94c) {
            var _0x2a545f = _0x2458
              , _0x532e57 = _0x1b7212
              , _0xe49af4 = _0x106502
              , _0x3395d5 = _0x106502 + _0x52d94c;
            if (null == _0x5d6bac)
                throw new TypeError(_0x2a545f(0x78d));
            var _0x1b35ec = _0x5d6bac[_0x2a545f(0x607)] >>> 0x0
              , _0x20fbc5 = _0x532e57 >> 0x0
              , _0x7c4f40 = _0x20fbc5 < 0x0 ? Math[_0x2a545f(0x5c6)](_0x1b35ec + _0x20fbc5, 0x0) : Math[_0x2a545f(0x794)](_0x20fbc5, _0x1b35ec)
              , _0x831aa5 = _0xe49af4 >> 0x0
              , _0x29fc78 = _0x831aa5 < 0x0 ? Math[_0x2a545f(0x5c6)](_0x1b35ec + _0x831aa5, 0x0) : Math[_0x2a545f(0x794)](_0x831aa5, _0x1b35ec)
              , _0x271ac0 = void 0x0 === _0x3395d5 ? _0x1b35ec : _0x3395d5 >> 0x0
              , _0x5736e4 = _0x271ac0 < 0x0 ? Math['max'](_0x1b35ec + _0x271ac0, 0x0) : Math[_0x2a545f(0x794)](_0x271ac0, _0x1b35ec)
              , _0x43053f = Math[_0x2a545f(0x794)](_0x5736e4 - _0x29fc78, _0x1b35ec - _0x7c4f40)
              , _0x208713 = 0x1;
            for (_0x29fc78 < _0x7c4f40 && _0x7c4f40 < _0x29fc78 + _0x43053f && (_0x208713 = -0x1,
            _0x29fc78 += _0x43053f - 0x1,
            _0x7c4f40 += _0x43053f - 0x1); _0x43053f > 0x0; )
                _0x29fc78 in _0x5d6bac ? _0x5d6bac[_0x7c4f40] = _0x5d6bac[_0x29fc78] : delete _0x5d6bac[_0x7c4f40],
                _0x29fc78 += _0x208713,
                _0x7c4f40 += _0x208713,
                _0x43053f--;
            return _0x5d6bac;
        }
        function _0x10ba4b(_0x328071) {
            var _0x2ddc1c = _0x2458;
            return _0x328071[_0x2ddc1c(0x70c)]('2d');
        }
        function _0x31c7b2(_0x23e3d0) {
            var _0x19c7a7 = _0x2458;
            null != _0x23e3d0[_0x19c7a7(0x4de)] && _0x23e3d0[_0x19c7a7(0x4de)][_0x19c7a7(0x1d1)](_0x23e3d0);
        }
        function _0x3acefb(_0x26bdf3) {
            var _0x549571 = _0x2458;
            return _0x26bdf3[parseInt(Math[_0x549571(0x7d2)]() * _0x26bdf3[_0x549571(0x607)])];
        }
        function _0xa9c50e() {
            var _0x374c21 = _0x2458;
            return Math[_0x374c21(0x7d2)]()[_0x374c21(0x4b3)](0x24)['substring'](0x2, 0xf);
        }
        function _0x10f410(_0x3efb39, _0x1b0df9, _0x4316e8) {
            var _0x40ebf4 = _0x2458
              , _0x230d2d = (0x1 - Math['abs'](0x2 * _0x4316e8 - 0x1)) * _0x1b0df9
              , _0x3eb520 = _0x230d2d * (0x1 - Math[_0x40ebf4(0x434)](_0x3efb39 / 0x3c % 0x2 - 0x1))
              , _0x5e44d2 = _0x4316e8 - _0x230d2d / 0x2;
            return 0x0 <= _0x3efb39 && _0x3efb39 < 0x3c ? [_0x5e44d2 + _0x230d2d, _0x5e44d2 + _0x3eb520, _0x5e44d2 + 0x0] : 0x3c <= _0x3efb39 && _0x3efb39 < 0x78 ? [_0x5e44d2 + _0x3eb520, _0x5e44d2 + _0x230d2d, _0x5e44d2 + 0x0] : 0x78 <= _0x3efb39 && _0x3efb39 < 0xb4 ? [_0x5e44d2 + 0x0, _0x5e44d2 + _0x230d2d, _0x5e44d2 + _0x3eb520] : 0xb4 <= _0x3efb39 && _0x3efb39 < 0xf0 ? [_0x5e44d2 + 0x0, _0x5e44d2 + _0x3eb520, _0x5e44d2 + _0x230d2d] : 0xf0 <= _0x3efb39 && _0x3efb39 < 0x12c ? [_0x5e44d2 + _0x3eb520, _0x5e44d2 + 0x0, _0x5e44d2 + _0x230d2d] : [_0x5e44d2 + _0x230d2d, _0x5e44d2 + 0x0, _0x5e44d2 + _0x3eb520];
        }
        function _0x171133() {
            var _0x36d6d7 = _0x2458;
            function _0x4ea31b() {
                var _0x20c51e = _0x2458;
                let _0xfeaffb = theoKzObjects[_0x20c51e(0x279)] ? 0x1 : 0x5;
                $('#adbl-1')[_0x20c51e(0x318)](_0x2ca325('index.game.antiadblocker.msg1')),
                $(_0x20c51e(0x310))[_0x20c51e(0x318)](_0x2ca325('index.game.antiadblocker.msg2')),
                $(_0x20c51e(0x83d))['text'](_0x2ca325('index.game.antiadblocker.msg3')),
                $('#adbl-4')['text'](_0x2ca325(_0x20c51e(0x237))[_0x20c51e(0x707)]('{0}', 0xa)),
                $(_0x20c51e(0x806))[_0x20c51e(0x318)](_0x2ca325(_0x20c51e(0x6f5))),
                $(_0x20c51e(0x465))[_0x20c51e(0x719)](),
                $('#' + _0x1d9a9c)['fadeIn'](0x1f4);
                for (var _0x5f4657 = _0xfeaffb, _0x254494 = 0x0; _0x254494 < _0xfeaffb; _0x254494++)
                    setTimeout(function() {
                        var _0x5e1fbc = _0x20c51e;
                        if (_0x5f4657--,
                        $(_0x5e1fbc(0x745))['text'](_0x2ca325('index.game.antiadblocker.msg4')['replace'](_0x5e1fbc(0x7ac), _0x5f4657)),
                        0x0 === _0x5f4657) {
                            console[_0x5e1fbc(0x39b)](_0x5e1fbc(0x3fe));
                            try {
                                ga(_0x5e1fbc(0x39a), 'event', _0x5e1fbc(0x307), window[_0x5e1fbc(0x636)] + _0x5e1fbc(0x53c));
                            } catch (_0x5df466) {}
                            $(_0x5e1fbc(0x465))[_0x5e1fbc(0x2c6)](0xc8);
                        }
                    }, 0x3e8 * (_0x254494 + 0x1));
            }
            var _0xfc575d = !0x1
              , _0x19611c = function() {}
              , _0x429365 = {}
              , _0x1d9a9c = _0x36d6d7(0x692);
            return $('#adbl-continue')['click'](function() {
                var _0x1e2531 = _0x36d6d7;
                $('#' + _0x1d9a9c)[_0x1e2531(0x2d4)](0x1f4),
                _0x19611c(!0x1);
            }),
            _0x429365['a'] = function(_0x10436a) {
                var _0x5d65ac = _0x36d6d7;
                if (_0x19611c = _0x10436a,
                !_0xfc575d)
                    try {
                        aiptag[_0x5d65ac(0x58f)]['player'][_0x5d65ac(0x7b5)](function() {
                            var _0x535de3 = _0x5d65ac;
                            aiptag[_0x535de3(0x62b)] = new aipPlayer({
                                'AD_WIDTH': 0x3c0,
                                'AD_HEIGHT': 0x21c,
                                'AD_FULLSCREEN': !0x0,
                                'AD_CENTERPLAYER': !0x1,
                                'LOADING_TEXT': _0x535de3(0x36a),
                                'PREROLL_ELEM': function() {
                                    var _0x121f2e = _0x535de3;
                                    return document[_0x121f2e(0x808)](_0x121f2e(0x462));
                                },
                                'AIP_COMPLETE': function(_0x8c21f9) {
                                    var _0x218c65 = _0x535de3;
                                    console['log'](_0x218c65(0x7d0)),
                                    _0x19611c(!0x0),
                                    $('#1eaom01c3pxu9wd3')['hide'](),
                                    $('#' + _0x1d9a9c)['hide']();
                                    try {
                                        ga('send', _0x218c65(0x77d), _0x218c65(0x582), window['runtimeHash'] + _0x218c65(0x53c));
                                    } catch (_0x5b24f7) {}
                                },
                                'AIP_REMOVE': function() {}
                            });
                        }),
                        _0xfc575d = !0x0;
                    } catch (_0x1c3cd4) {}
            }
            ,
            _0x429365['b'] = function() {
                var _0x291319 = _0x36d6d7;
                if (void 0x0 !== aiptag[_0x291319(0x62b)]) {
                    console[_0x291319(0x39b)]('aipS');
                    try {
                        ga(_0x291319(0x39a), _0x291319(0x77d), _0x291319(0x582), window[_0x291319(0x636)] + _0x291319(0x305));
                    } catch (_0x3ecd6b) {}
                    _0x4ea31b();
                } else {
                    console[_0x291319(0x39b)](_0x291319(0x2b4));
                    try {
                        ga(_0x291319(0x39a), _0x291319(0x77d), _0x291319(0x307), window[_0x291319(0x636)] + '_start');
                    } catch (_0x48f551) {}
                    _0x4ea31b();
                }
            }
            ,
            _0x429365;
        }
        function _0x341617(_0x3be43c, _0x321de9) {
            return {
                'a': function() {},
                'c': function() {}
            };
        }
        function _0x3e4797() {
            function _0x5a8e82(_0x16ad55) {
                var _0x47e53d = _0x2458
                  , _0xc43298 = _0x16ad55 + 0x25 * Math[_0x47e53d(0x1c7)](0xffff * Math[_0x47e53d(0x7d2)]());
                _0x350985(_0x166161['d'], _0xc43298, 0x1e);
            }
            function _0x3ab73() {
                return parseInt(_0x4961dc(_0x166161['d'])) % 0x25;
            }
            return (function() {
                var _0x29e533 = _0x2458
                  , _0x1fb94f = _0x3ab73();
                console[_0x29e533(0x39b)](_0x29e533(0x698) + _0x1fb94f);
                !(_0x1fb94f >= 0x0 && _0x1fb94f < _0x25fccb['e']) && (_0x1fb94f = Math['max'](0x0, _0x25fccb['e'] - 0x2),
                console[_0x29e533(0x39b)]('init2\x20pSC:\x20' + _0x1fb94f));
                var _0x271144 = {};
                _0x1ff066 = _0x271144,
                _0x271144['f'] = _0x25fccb,
                _0x271144['g'] = ![],
                _0x271144['i'] = Date[_0x29e533(0x61c)](),
                _0x271144['j'] = 0x0,
                _0x271144['k'] = 0x0,
                _0x271144['l'] = null,
                _0x271144['m'] = _0x15aa89,
                _0x271144['n'] = _0x581b91,
                _0x271144['o'] = null,
                _0x271144['p'] = null,
                _0x271144['q'] = null,
                _0x271144['r'] = null,
                _0x271144['s'] = null,
                _0x271144['t'] = null,
                _0x271144['u'] = null;
                try {
                    navigator && navigator[_0x29e533(0x41f)] && navigator[_0x29e533(0x41f)][_0x29e533(0x328)](function(_0xd4dd39) {
                        var _0x309ff4 = _0x29e533;
                        if (void 0x0 !== _0xd4dd39['coords']) {
                            var _0xf6a65 = _0xd4dd39[_0x309ff4(0x721)];
                            void 0x0 !== _0xf6a65[_0x309ff4(0x64d)] && void 0x0 !== _0xf6a65['longitude'] && (_0x271144['l'] = _0xd4dd39);
                        }
                    }, function(_0x3a05ef) {});
                } catch (_0x39f6d8) {}
                return _0x271144['v'] = function() {
                    _0x271144['p'] = new _0x112566(),
                    _0x271144['q'] = new _0x388025(),
                    _0x271144['r'] = new _0xdbe872(),
                    _0x271144['s'] = new _0x5a0a49(),
                    _0x271144['t'] = new _0x57902d(),
                    _0x271144['u'] = new _0x212a4d(),
                    _0x271144['o'] = new _0x2a3e5b(),
                    _0x271144['o']['z'] = new _0x57bcab(_0x271144['o']),
                    _0x271144['a']();
                }
                ,
                _0x271144['a'] = function() {
                    var _0x2292b8 = _0x29e533;
                    try {
                        ga('send', _0x2292b8(0x77d), 'app', window['runtimeHash'] + _0x2292b8(0x813));
                    } catch (_0x3897e1) {}
                    _0x271144['o']['A'] = function() {
                        _0x271144['o']['B']();
                    }
                    ,
                    _0x271144['o']['C'] = function() {
                        var _0x288a3a = _0x2292b8
                          , _0x41f042 = _0x271144['s']['F']['D']();
                        try {
                            ga(_0x288a3a(0x39a), _0x288a3a(0x77d), _0x288a3a(0x6b6), window['runtimeHash'] + '_start', _0x41f042);
                        } catch (_0xeded43) {}
                        _0x271144['r']['G'](_0xdbe872[_0x288a3a(0x740)]['H']),
                        _0x271144['s']['I'](_0x271144['s']['H']['J']());
                    }
                    ,
                    _0x271144['o']['B'] = function() {
                        var _0x51ed37 = _0x2292b8;
                        try {
                            ga(_0x51ed37(0x39a), 'event', _0x51ed37(0x6b6), window['runtimeHash'] + '_end');
                        } catch (_0x527f1d) {}
                        $(_0x51ed37(0x349))['height']() >= 0x1ae && _0x271144['f']['K']['c'](),
                        _0x271144['p']['L'](),
                        (function() {
                            var _0x234336 = Math['floor'](_0x271144['o']['N']['M'])
                              , _0x19f1ad = _0x271144['o']['O'];
                            _0x271144['u']['P']() ? _0x271144['u']['Q'](function() {
                                _0x271144['R'](_0x234336, _0x19f1ad);
                            }) : _0x271144['R'](_0x234336, _0x19f1ad);
                        }());
                    }
                    ,
                    _0x271144['o']['S'] = function(_0x262349) {
                        _0x262349(_0x271144['s']['H']['T'](), _0x271144['s']['H']['U']());
                    }
                    ,
                    _0x271144['u']['V'](function() {
                        var _0x59e6ed = _0x2292b8;
                        if (_0x271144['p']['W'] && (_0x271144['r']['G'](_0xdbe872[_0x59e6ed(0x740)]['F']),
                        _0x271144['s']['I'](_0x271144['s']['F'])),
                        _0x271144['u']['P']())
                            try {
                                var _0x4d59f0 = _0x271144['u']['X']();
                                ga(_0x59e6ed(0x6dc), _0x59e6ed(0x200), _0x4d59f0);
                            } catch (_0x293dbf) {}
                        _0x271144['Y']() && _0x271144['u']['P']() && !_0x271144['u']['Z']() ? (_0x271144['$'](![], ![]),
                        _0x271144['s']['aa']['_'](new _0xefd538())) : _0x271144['ba'](!![]);
                    }),
                    _0x271144['p']['ca'](function() {
                        var _0x18b5cf = _0x2292b8;
                        _0x271144['r']['G'](_0xdbe872[_0x18b5cf(0x740)]['F']),
                        _0x271144['s']['I'](_0x271144['s']['F']);
                    }),
                    _0x271144['q']['a'](function() {
                        _0x271144['o']['a'](),
                        _0x271144['r']['a'](),
                        _0x271144['s']['a'](),
                        _0x271144['t']['a'](),
                        _0x271144['p']['a'](),
                        _0x271144['u']['a'](),
                        _0x271144['Y']() && !_0x271144['Z']() ? _0x271144['s']['aa']['_'](new _0xefd538()) : _0x271144['ba'](!![]);
                    });
                }
                ,
                _0x271144['da'] = function(_0x117abe) {
                    var _0x56b71c = _0x29e533;
                    if (_0x271144['u']['P']()) {
                        var _0x92a20 = _0x271144['u']['ea']();
                        $[_0x56b71c(0x338)](_0x7fa75 + _0x56b71c(0x76f) + _0x92a20 + _0x56b71c(0x53e) + encodeURI(_0x117abe), function(_0x1b60f2) {});
                    }
                }
                ,
                _0x271144['fa'] = function(_0x325038) {
                    var _0x5e8630 = _0x29e533
                      , _0x177872 = _0x271144['u']['ea']()
                      , _0x52e765 = _0x271144['s']['F']['D']()
                      , _0x5e8c50 = _0x271144['s']['F']['ga']()
                      , _0x2d56f9 = _0x271144['t']['ha'](_0x4e8d86['ia'])
                      , _0x3f8d0c = _0x271144['t']['ha'](_0x4e8d86['ja'])
                      , _0x27085d = _0x271144['t']['ha'](_0x4e8d86['ka'])
                      , _0x24b76d = _0x271144['t']['ha'](_0x4e8d86['la'])
                      , _0x818b07 = _0x271144['t']['ha'](_0x4e8d86['ma'])
                      , _0x588925 = 0x0;
                    if (null != _0x271144['l']) {
                        var _0x50df3c = _0x271144['l'][_0x5e8630(0x721)][_0x5e8630(0x64d)]
                          , _0x2b0dee = _0x271144['l'][_0x5e8630(0x721)]['longitude'];
                        _0x588925 = 0x1 | Math[_0x5e8630(0x5c6)](0x0, Math[_0x5e8630(0x794)](0x7fff, (_0x50df3c + 0x5a) / 0xb4 * 0x8000)) << 0x1 | Math[_0x5e8630(0x5c6)](0x0, Math[_0x5e8630(0x794)](0xffff, (_0x2b0dee + 0xb4) / 0x168 * 0x10000)) << 0x10;
                    }
                    _wrmxt[_0x5e8630(0x61d)](_0x2d56f9);
                    let _0x501ac5 = _0x5e8630(0x693) + (0x270f < _0x2d56f9 ? _0x5e8630(0x2dd) : _0x2d56f9[_0x5e8630(0x4b3)]()[_0x5e8630(0x511)](0x4, 0x0)) + (0x1869f < _0x818b07 ? _0x5e8630(0x589) : _0x818b07['toString']()[_0x5e8630(0x511)](0x5, 0x0));
                    _0x5e8c50 = (0x20 <= _0x5e8c50[_0x5e8630(0x607)] ? _0x5e8c50['substr'](0x0, 0x10) : _0x5e8c50[_0x5e8630(0x4fb)](0x0, 0x10)[_0x5e8630(0x49d)](0x10)) + _0x501ac5,
                    _0x5e8c50 = _0x5e8c50['trim']()[_0x5e8630(0x707)](/\s/g, 'ㅤ'),
                    console[_0x5e8630(0x39b)](_0x5e8c50);
                    theoKzObjects[_0x5e8630(0x7ec)] && (_0x5e8c50 = '');
                    var _0x658aad = document[_0x5e8630(0x808)](_0x5e8630(0x64c));
                    if (_0x658aad !== null) {
                        var _0x3adc30 = _0x658aad['value'];
                        theoKzObjects[_0x5e8630(0x609)] ? zwormData['nickname'] = _0x3adc30 : zwormData[_0x5e8630(0x774)] = _0x5e8c50;
                    } else
                        console[_0x5e8630(0x2f3)](_0x5e8630(0x6a6));
                    var _0x47d31c = _0x7fa75 + _0x5e8630(0x76f) + _0x177872 + _0x5e8630(0x766) + encodeURI(_0x52e765) + '&gh=' + _0x588925 + '&nickname=' + encodeURI(_0x5e8c50) + '&skinId=' + _wrmxt['validInput'](_0x2d56f9) + _0x5e8630(0x3f5) + encodeURI(_0x3f8d0c) + '&mouthId=' + encodeURI(_0x27085d) + _0x5e8630(0x29f) + encodeURI(_0x24b76d) + _0x5e8630(0x743) + encodeURI(_0x818b07);
                    console[_0x5e8630(0x39b)](_0x5e8630(0x3aa) + _0x47d31c),
                    $[_0x5e8630(0x338)](_0x47d31c, function(_0x1e3f53) {
                        var _0xdf3770 = _0x1e3f53['server_url'];
                        _0x325038(_0xdf3770);
                    });
                }
                ,
                _0x271144['na'] = function() {
                    var _0x3be885 = _0x29e533;
                    _0x1fb94f++,
                    console[_0x3be885(0x39b)](_0x3be885(0x2a9) + _0x1fb94f),
                    !_0x271144['f']['oa'] && _0x1fb94f >= _0x271144['f']['e'] ? (_0x271144['s']['I'](_0x271144['s']['pa']),
                    _0x271144['r']['G'](_0xdbe872[_0x3be885(0x740)]['qa']),
                    _0x271144['f']['ra']['b']()) : (_0x5a8e82(_0x1fb94f),
                    _0x271144['sa'](),
                    zw_servertext['text'] = '');
                }
                ,
                _0x271144['sa'] = function(_0x1827b8) {
                    var _0x5c09a7 = _0x29e533;
                    zw_killcount = 0x0,
                    zw_hscount = 0x0;
                    if (_0x271144['o']['ta']()) {
                        _0x271144['s']['I'](_0x271144['s']['ua']),
                        _0x271144['r']['G'](_0xdbe872[_0x5c09a7(0x740)]['ua']);
                        var _0x33d94e = _0x271144['s']['F']['D']();
                        _0x350985(_0x166161['va'], _0x33d94e, 0x1e),
                        console[_0x5c09a7(0x39b)](_0x5c09a7(0x3c8) + _0x33d94e);
                        var _0x4ec246 = _0x271144['s']['xa']['wa']();
                        if (_0x350985(_0x166161['ya'], _0x4ec246, 0x1e),
                        console[_0x5c09a7(0x39b)]('save\x20sPN:\x20' + _0x4ec246),
                        _0x271144['u']['P']())
                            _0x271144['fa'](function(_0x192e83) {
                                var _0x2e4240 = _0x5c09a7;
                                zw_lastserver = _0x1827b8 ? _0x1827b8 : _0x192e83,
                                zwormData[_0x2e4240(0x6b8)] = zw_lastserver,
                                zw_servertext[_0x2e4240(0x318)] = '' + zw_lastserver[_0x2e4240(0x707)](_0x2e4240(0x287), '')['replace'](_0x2e4240(0x4eb), '')[_0x2e4240(0x707)](_0x2e4240(0x32c), ''),
                                _0x271144['o']['za'](_0x1827b8 || _0x192e83, _0x271144['u']['ea']());
                            });
                        else {
                            var _0x3680fc = _0x271144['s']['F']['ga']();
                            _0x350985(_0x166161['Aa'], _0x3680fc, 0x1e);
                            var _0x4592c1 = _0x271144['t']['ha'](_0x4e8d86['ia']);
                            _0x350985(_0x166161['Ba'], _0x4592c1, 0x1e),
                            _0x271144['fa'](function(_0x543ee6) {
                                var _0xf7db30 = _0x5c09a7;
                                zw_lastserver = _0x1827b8 ? _0x1827b8 : _0x543ee6,
                                zwormData[_0xf7db30(0x6b8)] = zw_lastserver,
                                zw_servertext[_0xf7db30(0x318)] = '' + zw_lastserver['replace']('wss://', '')[_0xf7db30(0x707)](_0xf7db30(0x4eb), '')[_0xf7db30(0x707)](_0xf7db30(0x32c), ''),
                                _0x271144['o']['Ca'](_0x1827b8 || _0x543ee6, _0x3680fc, _0x4592c1);
                            });
                        }
                    }
                }
                ,
                _0x271144['R'] = function(_0x53243a, _0x20fa5c) {
                    var _0x343428 = _0x29e533
                      , _0x2c9b6a = _0x271144['s']['F']['ga']();
                    _0x271144['s']['H']['Da'](_0x53243a, _0x20fa5c, _0x2c9b6a),
                    _0x271144['r']['G'](_0xdbe872[_0x343428(0x740)]['Ea']),
                    _0x271144['s']['I'](_0x271144['s']['H']['Fa']());
                }
                ,
                _0x271144['Ga'] = function() {
                    if (!_0x271144['Ha']())
                        return _0x271144['t']['Ia']();
                    var _0x270456 = parseInt(_0x4961dc(_0x166161['Ba']));
                    return null != _0x270456 && _0x271144['t']['Ja'](_0x270456, _0x4e8d86['ia']) ? _0x270456 : _0x271144['t']['Ia']();
                }
                ,
                _0x271144['Ka'] = function(_0x201421) {
                    _0x350985(_0x166161['La'], !!_0x201421, 0x708);
                }
                ,
                _0x271144['Ha'] = function() {
                    return 'true' === _0x4961dc(_0x166161['La']);
                }
                ,
                _0x271144['ba'] = function(_0x32307f) {
                    var _0x5b6d02 = _0x29e533;
                    if (_0x32307f != _0x271144['g']) {
                        _0x271144['g'] = _0x32307f;
                        var _0x2045b3 = _0x2045b3 || {};
                        _0x2045b3[_0x5b6d02(0x29a)] = _0x32307f,
                        _0x2045b3[_0x5b6d02(0x1f2)] = _0x32307f,
                        _0x271144['f']['Ma']['a'](),
                        _0x271144['f']['K']['a'](),
                        _0x271144['f']['ra']['a'](function(_0x24b16f) {
                            _0x24b16f && _0x5a8e82(_0x1fb94f = 0x0),
                            _0x271144['sa']();
                        });
                    }
                }
                ,
                _0x271144['$'] = function(_0xea691e, _0xb081d2) {
                    _0x350985(_0x166161['Na'], _0xea691e ? 'true' : 'false'),
                    _0xb081d2 && _0x271144['da'](_0xea691e),
                    _0x271144['ba'](_0xea691e);
                }
                ,
                _0x271144['Z'] = function() {
                    var _0x182e59 = _0x29e533;
                    switch (_0x4961dc(_0x166161['Na'])) {
                    case _0x182e59(0x544):
                        return !![];
                    default:
                        return ![];
                    }
                }
                ,
                _0x271144['Y'] = function() {
                    var _0x126cf5 = _0x29e533;
                    try {
                        return !!window[_0x126cf5(0x2b2)] || !(null == _0x271144['l'] || !_0x796b['Oa'](_0x271144['l'][_0x126cf5(0x721)][_0x126cf5(0x64d)], _0x271144['l'][_0x126cf5(0x721)]['longitude']));
                    } catch (_0x15cfbe) {
                        return !![];
                    }
                }
                ,
                _0x271144['Pa'] = function(_0x71af5b) {
                    var _0x1886ce = _0x29e533;
                    const _0x43eedb = performance[_0x1886ce(0x61c)]();
                    _0x271144['j'] = _0x43eedb,
                    _0x271144['k'] = _0x71af5b,
                    _0x271144['o']['Qa'](_0x43eedb, _0x71af5b),
                    _0x271144['s']['Qa'](_0x43eedb, _0x71af5b),
                    _0x271144['i'] = _0x43eedb;
                }
                ,
                _0x271144['Ra'] = function() {
                    _0x271144['s']['Ra']();
                }
                ,
                _0x271144;
            }());
        }
        function _0x2a3e5b() {
            var _0xa92a4e = {
                'Sa': 0x0,
                'Ta': 0x1,
                'Ua': 0x2,
                'Va': 0x3
            }
              , _0x8467dc = {};
            return _0x8467dc['Wa'] = 0x1e,
            _0x8467dc['Xa'] = new Float32Array(0x64),
            _0x8467dc['Ya'] = 0x0,
            _0x8467dc['Za'] = 0x0,
            _0x8467dc['$a'] = 0x0,
            _0x8467dc['_a'] = 0x0,
            _0x8467dc['ab'] = 0x0,
            _0x8467dc['bb'] = 0x0,
            _0x8467dc['cb'] = _0xa92a4e['Sa'],
            _0x8467dc['db'] = null,
            _0x8467dc['eb'] = 0x12c,
            _0x8467dc['C'] = function() {}
            ,
            _0x8467dc['B'] = function() {}
            ,
            _0x8467dc['S'] = function() {}
            ,
            _0x8467dc['A'] = function() {}
            ,
            _0x8467dc['fb'] = new _0x38582a(),
            _0x8467dc['z'] = null,
            _0x8467dc['N'] = null,
            _0x8467dc['gb'] = {},
            _0x8467dc['hb'] = {},
            _0x8467dc['ib'] = 12.5,
            _0x8467dc['jb'] = 0x28,
            _0x8467dc['kb'] = 0x1,
            _0x8467dc['lb'] = -0x1,
            _0x8467dc['mb'] = 0x1,
            _0x8467dc['nb'] = 0x1,
            _0x8467dc['ob'] = -0x1,
            _0x8467dc['pb'] = -0x1,
            _0x8467dc['qb'] = 0x1,
            _0x8467dc['rb'] = 0x1,
            _0x8467dc['sb'] = -0x1,
            _0x8467dc['O'] = 0x1f4,
            _0x8467dc['tb'] = 0x1f4,
            _0x8467dc['fb']['ub'] = 0x1f4,
            _0x8467dc['N'] = new _0x241e41(_0x8467dc['fb']),
            _0x8467dc['a'] = function() {
                var _0x306e58 = _0x2458;
                _0x8467dc['N']['vb'](_0x3392fc()['s']['H']['wb']);
                let _0x768b20 = setInterval(function() {
                    _0x8467dc['S'](function(_0x2ff797, _0x612ac) {
                        _0x8467dc['xb'](_0x2ff797, _0x612ac);
                    });
                }, theoKzObjects['mouseDelay']);
                _0x8467dc[_0x306e58(0x7bf)] = function(_0x738f03) {
                    var _0xcfc4b8 = _0x306e58;
                    clearInterval(_0x768b20),
                    theoKzObjects[_0xcfc4b8(0x5dc)] = _0x738f03,
                    _0x768b20 = setInterval(function() {
                        _0x8467dc['S'](function(_0x2b8f38, _0x260be5) {
                            var _0x58535f = _0x2458;
                            console[_0x58535f(0x39b)](_0x2b8f38, _0x260be5),
                            _0x8467dc['xb'](_0x2b8f38, _0x260be5);
                        });
                    }, theoKzObjects['mouseDelay']);
                }
                ;
            }
            ,
            _0x8467dc['yb'] = function(_0x5779a5, _0x31c534, _0x5f232f, _0x180c8b) {
                _0x8467dc['lb'] = _0x5779a5,
                _0x8467dc['mb'] = _0x31c534,
                _0x8467dc['nb'] = _0x5f232f,
                _0x8467dc['ob'] = _0x180c8b,
                _0x8467dc['zb']();
            }
            ,
            _0x8467dc['Ab'] = function(_0x46cea6) {
                _0x8467dc['kb'] = _0x46cea6,
                _0x8467dc['zb']();
            }
            ,
            _0x8467dc['zb'] = function() {
                _0x8467dc['pb'] = _0x8467dc['lb'] - _0x8467dc['kb'],
                _0x8467dc['qb'] = _0x8467dc['mb'] + _0x8467dc['kb'],
                _0x8467dc['rb'] = _0x8467dc['nb'] - _0x8467dc['kb'],
                _0x8467dc['sb'] = _0x8467dc['ob'] + _0x8467dc['kb'];
            }
            ,
            _0x8467dc['Qa'] = function(_0x458721, _0x5cd6bc) {
                var _0x52dbc9 = _0x2458;
                _0x5cd6bc = Math[_0x52dbc9(0x794)](Math[_0x52dbc9(0x5c6)](0x1, _0x5cd6bc), 0x64),
                _0x8467dc['$a'] += _0x5cd6bc,
                _0x8467dc['Za'] -= 0.2 * _0x8467dc['Ya'] * _0x5cd6bc,
                _0x8467dc['z']['Bb']();
                _0x8467dc['db'] != null && (_0x8467dc['cb'] === _0xa92a4e['Ua'] || _0x8467dc['cb'] === _0xa92a4e['Va']) && (_0x8467dc['Cb'](_0x458721, _0x5cd6bc),
                _0x8467dc['jb'] = 0x4 + _0x8467dc['ib'] * _0x8467dc['N']['Db']);
                const _0x34e0d3 = 0x3e8 / _0x5cd6bc;
                let _0x46727c = 0x0;
                for (let _0x234422 = 0x0; _0x234422 < _0x8467dc['Xa']['length'] - 0x1; _0x234422++) {
                    _0x8467dc['Xa'][_0x234422] = _0x8467dc['Xa'][_0x234422 + 0x1],
                    _0x46727c += _0x8467dc['Xa'][_0x234422];
                }
                _0x8467dc['Xa'][_0x8467dc['Xa']['length'] - 0x1] = _0x34e0d3,
                _0x8467dc['Wa'] = (_0x46727c + _0x34e0d3) / _0x8467dc['Xa'][_0x52dbc9(0x607)];
            }
            ,
            _0x8467dc['Eb'] = function(_0x221442, _0x14f5a7) {
                return _0x221442 > _0x8467dc['pb'] && _0x221442 < _0x8467dc['qb'] && _0x14f5a7 > _0x8467dc['rb'] && _0x14f5a7 < _0x8467dc['sb'];
            }
            ,
            _0x8467dc['Cb'] = function(_0xad237c, _0x5d2fc8) {
                var _0x140d69 = _0x8467dc['$a'] + _0x8467dc['Za']
                  , _0x5b92c0 = (_0x140d69 - _0x8467dc['_a']) / (_0x8467dc['ab'] - _0x8467dc['_a']);
                _0x8467dc['N']['Fb'](_0xad237c, _0x5d2fc8),
                _0x8467dc['N']['Gb'](_0xad237c, _0x5d2fc8, _0x5b92c0, _0x8467dc['Eb']);
                var _0x1e635e = 0x0, _0x4a85e5;
                for (_0x4a85e5 in _0x8467dc['hb']) {
                    var _0x568af3 = _0x8467dc['hb'][_0x4a85e5];
                    _0x568af3['Fb'](_0xad237c, _0x5d2fc8),
                    _0x568af3['Gb'](_0xad237c, _0x5d2fc8, _0x5b92c0, _0x8467dc['Eb']),
                    _0x568af3['Hb'] && _0x568af3['Db'] > _0x1e635e && (_0x1e635e = _0x568af3['Db']),
                    !(_0x568af3['Ib'] || !(_0x568af3['Jb'] < 0.005) && _0x568af3['Hb']) && (_0x568af3['Kb'](),
                    delete _0x8467dc['hb'][_0x568af3['Mb']['Lb']]);
                }
                _0x8467dc['Ab'](0x3 * _0x1e635e);
                var _0x357496;
                for (_0x357496 in _0x8467dc['gb']) {
                    var _0x3cce81 = _0x8467dc['gb'][_0x357496];
                    _0x3cce81['Fb'](_0xad237c, _0x5d2fc8),
                    _0x3cce81['Gb'](_0xad237c, _0x5d2fc8, _0x8467dc['Eb']),
                    _0x3cce81['Nb'] && (_0x3cce81['Jb'] < 0.005 || !_0x8467dc['Eb'](_0x3cce81['Ob'], _0x3cce81['Pb'])) && (_0x3cce81['Kb'](),
                    delete _0x8467dc['gb'][_0x3cce81['Mb']['Lb']]);
                }
            }
            ,
            _0x8467dc['Qb'] = function(_0x424b03, _0x343961) {
                _0x8467dc['cb'] === _0xa92a4e['Ta'] && (_0x8467dc['cb'] = _0xa92a4e['Ua'],
                _0x8467dc['C']());
                var _0x336213 = _0x3392fc()['j'];
                _0x8467dc['bb'] = _0x424b03;
                0x0 === _0x424b03 ? (_0x8467dc['_a'] = _0x336213 - 0x5f,
                _0x8467dc['ab'] = _0x336213,
                _0x8467dc['$a'] = _0x8467dc['_a'],
                _0x8467dc['Za'] = 0x0) : (_0x8467dc['_a'] = _0x8467dc['ab'],
                _0x8467dc['ab'] = _0x8467dc['ab'] + _0x343961);
                var _0x159af6 = _0x8467dc['$a'] + _0x8467dc['Za'];
                _0x8467dc['Ya'] = (_0x159af6 - _0x8467dc['_a']) / (_0x8467dc['ab'] - _0x8467dc['_a']);
            }
            ,
            _0x8467dc['Rb'] = function() {
                if (_0x8467dc['cb'] === _0xa92a4e['Ta'] || _0x8467dc['cb'] === _0xa92a4e['Ua']) {
                    _0x8467dc['cb'] = _0xa92a4e['Va'];
                    var _0x1a7e77 = _0x8467dc['db'];
                    setTimeout(function() {
                        var _0x4e0403 = _0x2458;
                        _0x8467dc['cb'] === _0xa92a4e['Va'] && (_0x8467dc['cb'] = _0xa92a4e['Sa']),
                        null != _0x1a7e77 && _0x1a7e77 === _0x8467dc['db'] && (_0x8467dc['db'][_0x4e0403(0x846)](),
                        _0x8467dc['db'] = null);
                    }, 0x1388),
                    _0x8467dc['B']();
                }
            }
            ,
            _0x8467dc['ta'] = function() {
                return _0x8467dc['cb'] !== _0xa92a4e['Ua'] && (_0x8467dc['cb'] = _0xa92a4e['Ta'],
                _0x8467dc['z']['Sb'](),
                _0x8467dc['gb'] = {},
                _0x8467dc['hb'] = {},
                _0x8467dc['N']['Tb'](),
                null != _0x8467dc['db'] && (_0x8467dc['db']['close'](),
                _0x8467dc['db'] = null),
                !![]);
            }
            ,
            _0x8467dc['Ub'] = function() {
                _0x8467dc['db'] = null,
                _0x8467dc['z']['Sb'](),
                _0x8467dc['cb'] !== _0xa92a4e['Va'] && _0x8467dc['A'](),
                _0x8467dc['cb'] = _0xa92a4e['Sa'];
            }
            ,
            _0x8467dc['za'] = function(_0x3b760d, _0x41ba28) {
                _0x8467dc['Vb'](_0x3b760d, function() {
                    var _0x419b39 = _0x2458;
                    console[_0x419b39(0x39b)](_0x41ba28);
                    if (wormxt_Obj[_0x419b39(0x667)]) {
                        var _0x524cb8 = document[_0x419b39(0x808)](_0x419b39(0x351))[_0x419b39(0x1c0)]
                          , _0x14c0c6 = 0x80
                          , _0x33e5f6 = Math[_0x419b39(0x794)](0x20, _0x524cb8[_0x419b39(0x607)])
                          , _0x365289 = new ArrayBuffer(0x7 + 0x2 * _0x33e5f6)
                          , _0x417560 = new DataView(_0x365289)
                          , _0x4fb05 = 0x0;
                        _0x417560[_0x419b39(0x586)](_0x4fb05, 0x81),
                        _0x4fb05 = _0x4fb05 + 0x1,
                        _0x417560[_0x419b39(0x219)](_0x4fb05, 0xaf0),
                        _0x4fb05 = _0x4fb05 + 0x2,
                        _0x417560[_0x419b39(0x586)](_0x4fb05, 0x0),
                        _0x4fb05 = _0x4fb05 + 0x1,
                        _0x417560['setInt16'](_0x4fb05, _0x14c0c6),
                        _0x4fb05 = _0x4fb05 + 0x2,
                        _0x417560['setInt8'](_0x4fb05, _0x33e5f6),
                        _0x4fb05++;
                        var _0x17c3d7 = 0x0;
                        for (; _0x17c3d7 < _0x33e5f6; _0x17c3d7++) {
                            _0x417560[_0x419b39(0x219)](_0x4fb05, _0x524cb8[_0x419b39(0x6fe)](_0x17c3d7)),
                            _0x4fb05 = _0x4fb05 + 0x2;
                        }
                        _0x8467dc['Wb'](_0x365289);
                    } else {
                        var _0x33e5f6 = Math[_0x419b39(0x794)](0x800, _0x41ba28['length'])
                          , _0x365289 = new ArrayBuffer(0x6 + 0x2 * _0x33e5f6)
                          , _0x962ea7 = new DataView(_0x365289)
                          , _0x4fb05 = 0x0;
                        _0x962ea7[_0x419b39(0x586)](_0x4fb05, 0x81),
                        _0x4fb05 = _0x4fb05 + 0x1,
                        _0x962ea7[_0x419b39(0x219)](_0x4fb05, 0xaf0),
                        _0x4fb05 = _0x4fb05 + 0x2,
                        _0x962ea7[_0x419b39(0x586)](_0x4fb05, 0x1),
                        _0x4fb05 = _0x4fb05 + 0x1,
                        _0x962ea7['setInt16'](_0x4fb05, _0x33e5f6),
                        _0x4fb05 = _0x4fb05 + 0x2;
                        var _0x17c3d7 = 0x0;
                        for (; _0x17c3d7 < _0x33e5f6; _0x17c3d7++) {
                            _0x962ea7['setInt16'](_0x4fb05, _0x41ba28[_0x419b39(0x6fe)](_0x17c3d7)),
                            _0x4fb05 = _0x4fb05 + 0x2;
                        }
                        _0x8467dc['Wb'](_0x365289);
                    }
                });
            }
            ,
            _0x8467dc['Ca'] = function(_0x3a09c0, _0x20c057, _0x42707b) {
                _0x8467dc['Vb'](_0x3a09c0, function() {
                    var _0x494f1d = _0x2458
                      , _0x42ee3d = Math[_0x494f1d(0x794)](0x20, _0x20c057['length'])
                      , _0x4fd5ae = new ArrayBuffer(0x7 + 0x2 * _0x42ee3d)
                      , _0xa0c2dc = new DataView(_0x4fd5ae)
                      , _0xae6a05 = 0x0;
                    _0xa0c2dc[_0x494f1d(0x586)](_0xae6a05, 0x81),
                    _0xae6a05 = _0xae6a05 + 0x1,
                    _0xa0c2dc[_0x494f1d(0x219)](_0xae6a05, 0xaf0),
                    _0xae6a05 = _0xae6a05 + 0x2,
                    _0xa0c2dc[_0x494f1d(0x586)](_0xae6a05, 0x0),
                    _0xae6a05 = _0xae6a05 + 0x1,
                    _0xa0c2dc[_0x494f1d(0x219)](_0xae6a05, _0x42707b),
                    _0xae6a05 = _0xae6a05 + 0x2,
                    _0xa0c2dc[_0x494f1d(0x586)](_0xae6a05, _0x42ee3d),
                    _0xae6a05++;
                    var _0x3d1c5a = 0x0;
                    for (; _0x3d1c5a < _0x42ee3d; _0x3d1c5a++) {
                        _0xa0c2dc[_0x494f1d(0x219)](_0xae6a05, _0x20c057[_0x494f1d(0x6fe)](_0x3d1c5a)),
                        _0xae6a05 = _0xae6a05 + 0x2;
                    }
                    _0x8467dc['Wb'](_0x4fd5ae),
                    console[_0x494f1d(0x39b)](_0x4fd5ae);
                });
            }
            ,
            _0x8467dc['Wb'] = function(_0x2ed525) {
                var _0x3e676b = _0x2458;
                try {
                    null != _0x8467dc['db'] && _0x8467dc['db'][_0x3e676b(0x784)] === WebSocket[_0x3e676b(0x754)] && _0x8467dc['db'][_0x3e676b(0x39a)](_0x2ed525);
                } catch (_0x2814a7) {
                    console[_0x3e676b(0x39b)](_0x3e676b(0x4db) + _0x2814a7),
                    _0x8467dc['Ub']();
                }
            }
            ,
            _0x8467dc['xb'] = function(_0x59cb00, _0x543714) {
                var _0x6e172e = _0x2458
                  , _0x194223 = _0x543714 ? 0x80 : 0x0
                  , _0x33deb6 = _0x344f8a(_0x59cb00) / _0x1d3753 * 0x80 & 0x7f
                  , _0x189ac1 = 0xff & (_0x194223 | _0x33deb6)
                  , _0x299a43 = new ArrayBuffer(0x1);
                new DataView(_0x299a43)[_0x6e172e(0x586)](0x0, _0x189ac1),
                _0x8467dc['Wb'](_0x299a43),
                _0x8467dc['eb'] = _0x189ac1;
            }
            ,
            _0x8467dc['Vb'] = function(_0x3915a7, _0x4dcb5f) {
                var _0x5a5843 = _0x2458
                  , _0x192663 = _0x8467dc['db'] = new WebSocket(_0x3915a7);
                _0x192663[_0x5a5843(0x7a8)] = _0x5a5843(0x4cf),
                window[_0x5a5843(0x362)] = _0x192663[_0x5a5843(0x286)] = function() {
                    var _0x381ca8 = _0x5a5843;
                    _0x8467dc['db'] === _0x192663 && (console[_0x381ca8(0x39b)]('Socket\x20opened'),
                    _0x4dcb5f()),
                    isPlaying = !![];
                }
                ,
                window['onclose'] = _0x192663[_0x5a5843(0x60e)] = function() {
                    var _0x372c55 = _0x5a5843;
                    _wrmxt['aload'] = ![],
                    _0x8467dc['db'] === _0x192663 && (console[_0x372c55(0x39b)](_0x372c55(0x7f0)),
                    _0x8467dc['Ub']()),
                    isPlaying = ![];
                }
                ,
                _0x192663[_0x5a5843(0x815)] = function(_0x48dbdc) {
                    var _0x3086ae = _0x5a5843;
                    console[_0x3086ae(0x39b)](_0x48dbdc[_0x3086ae(0x294)]),
                    _0x8467dc['db'] === _0x192663 && (console[_0x3086ae(0x39b)](_0x3086ae(0x2eb)),
                    _0x8467dc['Ub']()),
                    isPlaying = ![];
                }
                ,
                _0x192663[_0x5a5843(0x3e9)] = function(_0x44a7be) {
                    var _0x2c623a = _0x5a5843;
                    _0x8467dc['db'] === _0x192663 && _0x8467dc['z']['Xb'](_0x44a7be[_0x2c623a(0x294)]);
                }
                ;
            }
            ,
            _0x8467dc;
        }
        var _0x4f20ed = '/images/linelogo-xmas2022.png'
          , _0x40e1c9 = _0x5b9465(0x3c3)
          , _0x1178ba = /iPad|iPhone|iPod/[_0x5b9465(0x550)](navigator[_0x5b9465(0x475)]) && !window[_0x5b9465(0x635)]
          , _0x7fa75 = atob(_0x5b9465(0x30d))
          , _0x52c629 = atob(_0x5b9465(0x6a7))
          , _0x581b91 = window[_0x5b9465(0x2e8)];
        _0x581b91 || (_0x581b91 = 'en');
        var _0x15aa89 = void 0x0;
        switch (_0x581b91) {
        case 'uk':
            _0x15aa89 = _0x5b9465(0x31d);
            break;
        case 'de':
            _0x15aa89 = 'de_DE';
            break;
        case 'fr':
            _0x15aa89 = _0x5b9465(0x206);
            break;
        case 'ru':
            _0x15aa89 = _0x5b9465(0x35a);
            break;
        case 'es':
            _0x15aa89 = _0x5b9465(0x7a3);
            break;
        default:
            _0x15aa89 = 'en_US';
        }
        moment['locale'](_0x15aa89);
        var _0xd0e94e = !0x1
          , _0x1ff066 = void 0x0
          , _0x53055c = (function() {
            var _0x55a326 = _0x5b9465
              , _0x41919a = {
                'Yb': eval(atob(_0x55a326(0x430)))
            }
              , _0x4ff9bb = _0x41919a['Yb'][atob(_0x55a326(0x3dc))]
              , _0x1109fd = _0x41919a['Yb'][atob(_0x55a326(0x296))];
            return {
                'Zb': _0x41919a['Yb'][atob('Q29udGFpbmVy')],
                '$b': _0x41919a['Yb'][atob(_0x55a326(0x6cc))],
                '_b': _0x41919a['Yb'][atob(_0x55a326(0x75f))],
                'ac': _0x41919a['Yb'][atob('UmVuZGVyZXI=')],
                'bc': _0x41919a['Yb'][atob(_0x55a326(0x1c1))],
                'cc': _0x41919a['Yb'][atob(_0x55a326(0x51a))],
                'dc': _0x41919a['Yb'][atob('UmVjdGFuZ2xl')],
                'ec': _0x41919a['Yb'][atob(_0x55a326(0x6ad))],
                'fc': _0x41919a['Yb'][atob(_0x55a326(0x1db))],
                'gc': _0x41919a['Yb'][atob(_0x55a326(0x2e4))],
                'hc': _0x41919a['Yb'][atob(_0x55a326(0x695))],
                'ic': {
                    'jc': _0x4ff9bb[atob(_0x55a326(0x63e))]
                },
                'kc': {
                    'lc': _0x1109fd[atob(_0x55a326(0x482))],
                    'CLAMP': _0x41919a['Yb'][_0x55a326(0x1df)][_0x55a326(0x581)]
                }
            };
        }())
          , _0x1d3753 = 0x2 * Math['PI'];
        !(function() {
            var _0x4fd9d8 = _0x5b9465
              , _0x333232 = _0x4fd9d8(0x52f)
              , _0x2c6553 = '='
              , _0x155f2d = _0x333232 + _0x4fd9d8(0x4f4)
              , _0x53ccd5 = _0x333232 + 'RmxvYXQ'
              , _0x4ae3bd = [atob(_0x155f2d + _0x4fd9d8(0x58b)), atob(_0x155f2d + _0x4fd9d8(0x7b9) + _0x2c6553), atob(_0x155f2d + _0x4fd9d8(0x3bb) + _0x2c6553), atob(_0x53ccd5 + _0x4fd9d8(0x522)), atob(_0x53ccd5 + _0x4fd9d8(0x5f2))];
            DataView[_0x4fd9d8(0x792)]['mc'] = function(_0x2f40e4) {
                return this[_0x4ae3bd[0x0]](_0x2f40e4);
            }
            ,
            DataView['prototype']['nc'] = function(_0x468d7c) {
                return this[_0x4ae3bd[0x1]](_0x468d7c);
            }
            ,
            DataView[_0x4fd9d8(0x792)]['oc'] = function(_0x500574) {
                return this[_0x4ae3bd[0x2]](_0x500574);
            }
            ,
            DataView['prototype']['pc'] = function(_0x226d00) {
                return this[_0x4ae3bd[0x3]](_0x226d00);
            }
            ,
            DataView['prototype']['qc'] = function(_0x5f57d5) {
                return this[_0x4ae3bd[0x4]](_0x5f57d5);
            }
            ;
        }());
        var _0x2d8dbf = (function() {
            var _0x133441 = _0x5b9465;
            function _0x2c12ac(_0x52eb82) {
                this['rc'] = _0x52eb82,
                this['sc'] = !0x1,
                this['tc'] = 0x1;
            }
            return _0x2c12ac[_0x133441(0x37c)] = 0x0,
            _0x2c12ac[_0x133441(0x7ce)] = 0x1,
            _0x2c12ac['MAGNETIC_TYPE'] = 0x2,
            _0x2c12ac['ZOOM_TYPE'] = 0x6,
            _0x2c12ac[_0x133441(0x7ea)] = 0x3,
            _0x2c12ac[_0x133441(0x6aa)] = 0x4,
            _0x2c12ac[_0x133441(0x683)] = 0x5,
            _0x2c12ac;
        }())
          , _0x112566 = (function() {
            var _0x193d1c = _0x5b9465;
            function _0x3ced4e() {
                this['uc'] = [],
                this['vc'] = {},
                this['wc'] = null,
                this['xc'] = _0x1c140f['yc']();
            }
            function _0x4083dd(_0x4c42ef, _0x514ad3) {
                var _0x50b5f7 = _0x2458;
                for (var _0x11ec30 in _0x4c42ef)
                    _0x4c42ef[_0x50b5f7(0x5f5)](_0x11ec30) && _0x514ad3(_0x11ec30, _0x4c42ef[_0x11ec30]);
            }
            return _0x3ced4e[_0x193d1c(0x792)]['a'] = function() {
                this['L']();
            }
            ,
            _0x3ced4e[_0x193d1c(0x792)]['W'] = function() {
                return null != this['wc'];
            }
            ,
            _0x3ced4e[_0x193d1c(0x792)]['zc'] = function() {
                var _0x1aeda2 = _0x193d1c;
                return null != this['wc'] ? this['wc'][_0x1aeda2(0x24a)] : -0x1;
            }
            ,
            _0x3ced4e[_0x193d1c(0x792)]['Ac'] = function() {
                return this['wc'];
            }
            ,
            _0x3ced4e['prototype']['L'] = function() {
                var _0x47afe5 = _0x193d1c
                  , _0x159a8a = this;
                $[_0x47afe5(0x338)](_0x52c629 + _0x47afe5(0x568), function(_0x555053) {
                    _0x555053 > _0x159a8a['zc']() && _0x159a8a['Bc']();
                });
            }
            ,
            _0x3ced4e[_0x193d1c(0x792)]['Bc'] = function() {
                var _0x248f0b = _0x193d1c
                  , _0x3ebc8d = this;
                $[_0x248f0b(0x6bb)]({
                    'type': 'POST',
                    'url': _0x248f0b(0x4bd),
                    'data': JSON[_0x248f0b(0x714)]({
                        'reason': 0x1
                    }),
                    'contentType': _0x248f0b(0x580),
                    'success': function(_0x334674) {
                        var _0x26196e = _0x248f0b;
                        theoKzObjects[_0x26196e(0x65c)] = _0x334674[_0x26196e(0x65c)],
                        delete _0x334674[_0x26196e(0x65c)],
                        theoKzObjects['pL'] = _0x334674[_0x26196e(0x26b)],
                        theoKzObjects[_0x26196e(0x5f0)] = _0x334674[_0x26196e(0x737)],
                        _0x334674[_0x26196e(0x24a)] > _0x3ebc8d['zc']() && _0x3ebc8d['Cc'](_0x334674),
                        unlockSkinsPrivate(anApp);
                    },
                    'error': function(_0x4dd36c, _0x58476e, _0x5b8a0e) {
                        console['error']('Error\x20al\x20realizar\x20la\x20solicitud\x20GET:', _0x5b8a0e);
                    }
                });
            }
            ,
            _0x3ced4e[_0x193d1c(0x792)]['ca'] = function(_0x4e3ef7) {
                var _0x46fe2b = _0x193d1c;
                this['uc'][_0x46fe2b(0x7b5)](_0x4e3ef7);
            }
            ,
            _0x3ced4e[_0x193d1c(0x792)]['Dc'] = function() {
                return this['xc'];
            }
            ,
            _0x3ced4e[_0x193d1c(0x792)]['Ec'] = function() {
                var _0x16483c = _0x193d1c;
                for (var _0x949002 = 0x0; _0x949002 < this['uc'][_0x16483c(0x607)]; _0x949002++)
                    this['uc'][_0x949002]();
            }
            ,
            _0x3ced4e['prototype']['Fc'] = function(_0xd4c5d3, _0x55d24d) {
                var _0x5ba380 = _0x193d1c;
                if (!(_0xd4c5d3[_0x5ba380(0x24a)] <= this['zc']())) {
                    var _0x160198 = _0x55d24d;
                    _0x4083dd(this['vc'], function(_0x529069, _0x3c5dc4) {
                        var _0x1e8201 = _0x5ba380
                          , _0x4a33c6 = _0x160198[_0x529069];
                        null != _0x4a33c6 && _0x3c5dc4['Gc'] === _0x4a33c6['Gc'] || (print(_0x1e8201(0x7af) + _0x529069 + _0x1e8201(0x73b) + _0x3c5dc4['Gc']),
                        _0x3c5dc4['Hc']['destroy']());
                    }),
                    this['vc'] = _0x160198,
                    this['wc'] = _0xd4c5d3,
                    this['xc'] = _0x1c140f['Ic'](this['wc'], this['vc']),
                    this['Ec']();
                }
            }
            ,
            _0x3ced4e[_0x193d1c(0x792)]['Cc'] = function(_0x47eac7) {
                var _0x1f88cc = _0x193d1c
                  , _0x4098c1 = {}
                  , _0x21336e = []
                  , _0x18cceb = []
                  , _0x3b96ea = 0x0;
                for (var _0x3813c3 in _0x47eac7[_0x1f88cc(0x66f)]) {
                    if (_0x47eac7[_0x1f88cc(0x66f)]['hasOwnProperty'](_0x3813c3)) {
                        var _0x1f6d73 = _0x47eac7[_0x1f88cc(0x66f)][_0x3813c3]
                          , _0x3d3207 = _0x1f6d73['isCustom']
                          , _0x5656c9 = _0x3d3207 ? _0x1f6d73['relativePath'] : _0x52c629 + _0x1f6d73[_0x1f88cc(0x610)]
                          , _0x1109da = _0x1f6d73[_0x1f88cc(0x46c)]
                          , _0x57e3e1 = _0x1f6d73['sha256']
                          , _0xd747e2 = {
                            'id': _0x3813c3,
                            'path': _0x5656c9,
                            'fileSize': _0x1109da,
                            'sha256': _0x57e3e1
                        };
                        _0x21336e[_0x1f88cc(0x7b5)](_0xd747e2),
                        _0x18cceb['push'](_0xd747e2),
                        _0x3b96ea += _0x1109da;
                        var _0x5656c9 = _0x1f6d73[_0x1f88cc(0x610)];
                        !_0x1f6d73[_0x1f88cc(0x705)] && (_0x5656c9 = _0x52c629 + _0x1f6d73[_0x1f88cc(0x610)]);
                        try {
                            _0x4098c1[_0x3813c3] = new _0x46b922(_0x5656c9,_0x53055c['$b'][_0x1f88cc(0x41e)](_0x1f6d73[_0x1f88cc(0x2e5)] || _0x5656c9));
                        } catch (_0x4416af) {
                            console[_0x1f88cc(0x39b)](_0x5656c9);
                        }
                    }
                }
                this['Fc'](_0x47eac7, _0x4098c1);
            }
            ,
            _0x3ced4e;
        }())
          , _0x1c140f = (function() {
            var _0x43c040 = _0x5b9465;
            function _0x16e7f1() {
                this['Jc'] = null,
                this['Kc'] = null,
                this['Lc'] = null,
                this['Mc'] = null,
                this['Nc'] = null,
                this['Oc'] = null,
                this['Pc'] = null,
                this['Qc'] = null,
                this['Rc'] = null,
                this['Sc'] = null,
                this['Tc'] = null,
                this['Uc'] = null,
                this['Vc'] = null,
                this['Wc'] = null,
                this['Xc'] = null,
                this['Yc'] = null;
            }
            function _0x77cec8(_0x473863, _0x454c4f) {
                var _0x14e945 = _0x2458;
                for (var _0x50bca2 in _0x473863)
                    _0x473863[_0x14e945(0x5f5)](_0x50bca2) && _0x454c4f(_0x50bca2, _0x473863[_0x50bca2]);
            }
            return _0x16e7f1['yc'] = function() {
                var _0x2b03fb = _0x2458
                  , _0x2534a4 = new _0x1c140f();
                return _0x2534a4['Jc'] = {},
                _0x2534a4['Kc'] = {
                    'Zc': null,
                    '$c': null
                },
                _0x2534a4['Lc'] = {},
                _0x2534a4['Mc'] = {
                    'Zc': null
                },
                _0x2534a4['Nc'] = {},
                _0x2534a4['Oc'] = {
                    '_c': _0x2b03fb(0x2a1),
                    'Zc': [],
                    '$c': []
                },
                _0x2534a4['Pc'] = {},
                _0x2534a4['Qc'] = {
                    'ad': {},
                    'bd': _0x2534a4['Oc'],
                    'cd': _0x2534a4['Kc']
                },
                _0x2534a4['Rc'] = {},
                _0x2534a4['Sc'] = {
                    'Zc': []
                },
                _0x2534a4['Tc'] = {},
                _0x2534a4['Uc'] = {
                    'Zc': []
                },
                _0x2534a4['Vc'] = {},
                _0x2534a4['Wc'] = {
                    'Zc': []
                },
                _0x2534a4['Xc'] = {},
                _0x2534a4['Yc'] = {
                    'Zc': []
                },
                _0x2534a4;
            }
            ,
            _0x16e7f1['Ic'] = function(_0x36c891, _0x2c8a12) {
                var _0xafdbca = _0x2458
                  , _0x1cd87a = new _0x1c140f()
                  , _0x3c4522 = {};
                _0x77cec8(_0x36c891[_0xafdbca(0x327)], function(_0x3de646, _0x507842) {
                    _0x3c4522[_0x3de646] = _0x507842;
                });
                var _0x3e9724 = {};
                _0x77cec8(_0x36c891[_0xafdbca(0x4dc)], function(_0x4fb089, _0x46f5aa) {
                    _0x3e9724[_0x4fb089] = new _0x4cf055(_0x2c8a12[_0x46f5aa['texture']]['Hc'],_0x46f5aa['x'],_0x46f5aa['y'],_0x46f5aa['w'],_0x46f5aa['h'],_0x46f5aa['px'],_0x46f5aa['py'],_0x46f5aa['pw'],_0x46f5aa['ph']);
                }),
                _0x1cd87a['Nc'] = {};
                for (var _0x6a2ee7 = 0x0; _0x6a2ee7 < _0x36c891[_0xafdbca(0x737)][_0xafdbca(0x607)]; _0x6a2ee7++) {
                    var _0x27f0f2 = _0x36c891[_0xafdbca(0x737)][_0x6a2ee7];
                    _0x1cd87a['Nc'][_0x27f0f2['id']] = new _0x1c140f[(_0xafdbca(0x1dd))]('#' + _0x3c4522[_0x27f0f2[_0xafdbca(0x254)]],_0x27f0f2[_0xafdbca(0x471)][_0xafdbca(0x3a0)](function(_0x3007d4) {
                        return _0x3e9724[_0x3007d4];
                    }),_0x27f0f2[_0xafdbca(0x6b1)][_0xafdbca(0x3a0)](function(_0x23a03e) {
                        return _0x3e9724[_0x23a03e];
                    }));
                }
                var _0x4ec005 = _0x36c891[_0xafdbca(0x3e6)];
                _0x1cd87a['Oc'] = new _0x1c140f[(_0xafdbca(0x1dd))]('#' + _0x3c4522[_0x4ec005[_0xafdbca(0x254)]],_0x4ec005[_0xafdbca(0x471)][_0xafdbca(0x3a0)](function(_0x5f3aad) {
                    return _0x3e9724[_0x5f3aad];
                }),_0x4ec005['glow'][_0xafdbca(0x3a0)](function(_0x31590e) {
                    return _0x3e9724[_0x31590e];
                })),
                _0x1cd87a['Rc'] = {},
                _0x77cec8(_0x36c891['eyesDict'], function(_0x2b812c, _0x2e5983) {
                    var _0x2fea1c = _0xafdbca;
                    _0x2b812c = parseInt(_0x2b812c),
                    _0x1cd87a['Rc'][_0x2b812c] = new _0x1c140f[(_0x2fea1c(0x2f2))](_0x2e5983['base']['map'](function(_0x5120cf) {
                        var _0x4c5d2a = _0x2fea1c;
                        return _0x3e9724[_0x5120cf[_0x4c5d2a(0x1b7)]];
                    }));
                }),
                _0x1cd87a['Sc'] = new _0x1c140f[(_0xafdbca(0x2f2))](_0x36c891[_0xafdbca(0x60c)][_0xafdbca(0x471)][_0xafdbca(0x3a0)](function(_0xc9caf) {
                    return _0x3e9724[_0xc9caf['region']];
                })),
                _0x1cd87a['Tc'] = {},
                _0x77cec8(_0x36c891[_0xafdbca(0x319)], function(_0x265e0a, _0x5c5caf) {
                    var _0x3d4582 = _0xafdbca;
                    _0x265e0a = parseInt(_0x265e0a),
                    _0x1cd87a['Tc'][_0x265e0a] = new _0x1c140f[(_0x3d4582(0x2f2))](_0x5c5caf[_0x3d4582(0x471)][_0x3d4582(0x3a0)](function(_0x3c1d8e) {
                        var _0x42cbbd = _0x3d4582;
                        return _0x3e9724[_0x3c1d8e[_0x42cbbd(0x1b7)]];
                    }));
                }),
                _0x1cd87a['Uc'] = new _0x1c140f[(_0xafdbca(0x2f2))](_0x36c891[_0xafdbca(0x5a9)][_0xafdbca(0x471)][_0xafdbca(0x3a0)](function(_0x5822b2) {
                    var _0x1ac173 = _0xafdbca;
                    return _0x3e9724[_0x5822b2[_0x1ac173(0x1b7)]];
                })),
                _0x1cd87a['Vc'] = {},
                _0x77cec8(_0x36c891[_0xafdbca(0x50a)], function(_0x1d53d5, _0x6b428e) {
                    var _0x2e311f = _0xafdbca;
                    _0x1d53d5 = parseInt(_0x1d53d5),
                    _0x1cd87a['Vc'][_0x1d53d5] = new _0x1c140f[(_0x2e311f(0x2f2))](_0x6b428e[_0x2e311f(0x471)]['map'](function(_0x3c6f80) {
                        var _0x153d2a = _0x2e311f;
                        return _0x3e9724[_0x3c6f80[_0x153d2a(0x1b7)]];
                    }));
                }),
                _0x1cd87a['Wc'] = new _0x1c140f[(_0xafdbca(0x2f2))](_0x36c891['glassesUnknown']['base'][_0xafdbca(0x3a0)](function(_0x144b44) {
                    return _0x3e9724[_0x144b44['region']];
                })),
                _0x1cd87a['Xc'] = {},
                _0x77cec8(_0x36c891[_0xafdbca(0x20c)], function(_0x56cf8c, _0x556dec) {
                    var _0x3ea1b2 = _0xafdbca;
                    _0x56cf8c = parseInt(_0x56cf8c),
                    _0x1cd87a['Xc'][_0x56cf8c] = new _0x1c140f[(_0x3ea1b2(0x2f2))](_0x556dec[_0x3ea1b2(0x471)][_0x3ea1b2(0x3a0)](function(_0xeb5af1) {
                        var _0x822af9 = _0x3ea1b2;
                        return _0x3e9724[_0xeb5af1[_0x822af9(0x1b7)]];
                    }));
                }),
                _0x1cd87a['Yc'] = new _0x1c140f['WearSkinData'](_0x36c891[_0xafdbca(0x6ab)]['base']['map'](function(_0x5739cd) {
                    var _0x249387 = _0xafdbca;
                    return _0x3e9724[_0x5739cd[_0x249387(0x1b7)]];
                })),
                _0x1cd87a['Jc'] = {},
                _0x77cec8(_0x36c891[_0xafdbca(0x2b7)], function(_0xe7f78, _0x507df8) {
                    var _0xa6fe56 = _0xafdbca;
                    _0xe7f78 = parseInt(_0xe7f78),
                    _0x1cd87a['Jc'][_0xe7f78] = new _0x1c140f[(_0xa6fe56(0x40f))](_0x3e9724[_0x507df8[_0xa6fe56(0x471)]],_0x3e9724[_0x507df8['glow']]);
                });
                var _0xa2a6af = _0x36c891[_0xafdbca(0x793)];
                _0x1cd87a['Kc'] = new _0x1c140f[(_0xafdbca(0x40f))](_0x3e9724[_0xa2a6af[_0xafdbca(0x471)]],_0x3e9724[_0xa2a6af[_0xafdbca(0x6b1)]]),
                _0x1cd87a['Lc'] = {},
                _0x77cec8(_0x36c891[_0xafdbca(0x379)], function(_0x2df77c, _0x3ff038) {
                    var _0x507ef6 = _0xafdbca;
                    _0x2df77c = parseInt(_0x2df77c),
                    _0x1cd87a['Lc'][_0x2df77c] = new _0x1c140f['AbilitySkinData'](_0x3e9724[_0x3ff038[_0x507ef6(0x471)]]);
                });
                var _0x53074c = _0x36c891[_0xafdbca(0x6d1)];
                return _0x1cd87a['Mc'] = new _0x1c140f[(_0xafdbca(0x40d))](_0x3e9724[_0x53074c[_0xafdbca(0x471)]]),
                _0x1cd87a['Pc'] = {},
                _0x77cec8(_0x36c891['teamDict'], function(_0x48df78, _0xe51f7a) {
                    var _0x2c004b = _0xafdbca;
                    _0x48df78 = parseInt(_0x48df78),
                    _0x1cd87a['Pc'][_0x48df78] = new _0x1c140f[(_0x2c004b(0x4ba))](_0xe51f7a[_0x2c004b(0x62e)],new _0x1c140f[(_0x2c004b(0x1dd))]('#' + _0x3c4522[_0xe51f7a[_0x2c004b(0x71f)][_0x2c004b(0x254)]],[],_0xe51f7a[_0x2c004b(0x71f)][_0x2c004b(0x6b1)]['map'](function(_0x3d9b8c) {
                        return _0x3e9724[_0x3d9b8c];
                    })),new _0x1c140f['PortionSkinData']([],_0x3e9724[_0xe51f7a[_0x2c004b(0x715)][_0x2c004b(0x6b1)]]));
                }),
                _0x1cd87a['Qc'] = new _0x1c140f[(_0xafdbca(0x4ba))]({},_0x1cd87a['Oc'],_0x1cd87a['Kc']),
                _0x1cd87a;
            }
            ,
            _0x16e7f1[_0x43c040(0x792)]['dd'] = function(_0x2c7479) {
                var _0x4ef852 = _0x43c040
                  , _0x268de1 = this['Nc'][_0x2c7479];
                return _0x268de1 && (Array[_0x4ef852(0x3e7)](_0x268de1['$c']) && _0x268de1['$c'][_0x4ef852(0x397)](_0x1db898 => optimizarTextura(_0x1db898)),
                Array[_0x4ef852(0x3e7)](_0x268de1['Zc']) && _0x268de1['Zc']['forEach'](_0x4f692c => optimizarTextura(_0x4f692c))),
                _0x268de1 || this['Oc'];
            }
            ,
            _0x16e7f1[_0x43c040(0x792)]['ed'] = function(_0x55deca) {
                var _0x39a64c = this['Pc'][_0x55deca];
                return _0x39a64c || this['Qc'];
            }
            ,
            _0x16e7f1[_0x43c040(0x792)]['fd'] = function(_0x3ed6ad) {
                var _0x436280 = this['Rc'][_0x3ed6ad];
                return _0x436280 || this['Sc'];
            }
            ,
            _0x16e7f1[_0x43c040(0x792)]['gd'] = function(_0x4a6404) {
                var _0x9ebe5c = this['Tc'][_0x4a6404];
                return _0x9ebe5c || this['Uc'];
            }
            ,
            _0x16e7f1['prototype']['hd'] = function(_0x4194d8) {
                var _0x1a89bc = this['Vc'][_0x4194d8];
                return _0x1a89bc || this['Wc'];
            }
            ,
            _0x16e7f1[_0x43c040(0x792)]['jd'] = function(_0x4f0177) {
                var _0x304555 = this['Xc'][_0x4f0177];
                return _0x304555 || this['Yc'];
            }
            ,
            _0x16e7f1[_0x43c040(0x792)]['kd'] = function(_0x12bc39) {
                var _0x2812af = this['Jc'][_0x12bc39];
                if (_0x2812af) {
                    if (_0x2812af['$c'])
                        optimizarTextura(_0x2812af['$c']);
                    if (_0x2812af['Zc'])
                        optimizarTextura(_0x2812af['Zc']);
                }
                return _0x2812af || this['Kc'];
            }
            ,
            _0x16e7f1[_0x43c040(0x792)]['ld'] = function(_0x481f43) {
                var _0x5f1816 = this['Lc'][_0x481f43];
                return _0x5f1816 || this['Mc'];
            }
            ,
            _0x16e7f1['TeamSkinData'] = (function() {
                function _0x106399(_0x2102af, _0xdbea2c, _0x24b241) {
                    this['ad'] = _0x2102af,
                    this['bd'] = _0xdbea2c,
                    this['cd'] = _0x24b241;
                }
                return _0x106399;
            }()),
            _0x16e7f1[_0x43c040(0x1dd)] = (function() {
                function _0x2b4b06(_0x5b9a16, _0x5175e2, _0x5a24c6) {
                    this['_c'] = _0x5b9a16,
                    this['Zc'] = _0x5175e2,
                    this['$c'] = _0x5a24c6;
                }
                return _0x2b4b06;
            }()),
            _0x16e7f1[_0x43c040(0x2f2)] = (function() {
                function _0x28e65a(_0x1cab34) {
                    this['Zc'] = _0x1cab34;
                }
                return _0x28e65a;
            }()),
            _0x16e7f1[_0x43c040(0x40f)] = (function() {
                function _0x4e87a1(_0x3f7f47, _0x51363a) {
                    this['Zc'] = _0x3f7f47,
                    this['$c'] = _0x51363a;
                }
                return _0x4e87a1;
            }()),
            _0x16e7f1[_0x43c040(0x40d)] = (function() {
                function _0x288e1c(_0x166611) {
                    this['Zc'] = _0x166611;
                }
                return _0x288e1c;
            }()),
            _0x16e7f1;
        }())
          , _0xdbe872 = (function() {
            var _0x210e9a = _0x5b9465;
            function _0x11bd32() {
                var _0xbb79d = _0x2458;
                this['md'] = _0xdbe872[_0xbb79d(0x740)]['ua'],
                this['nd'] = !0x1,
                this['od'] = !0x1,
                this['pd'] = null,
                this['qd'] = null;
            }
            _0x11bd32[_0x210e9a(0x792)]['a'] = function() {}
            ,
            _0x11bd32[_0x210e9a(0x792)]['rd'] = function(_0x5419f7) {
                this['od'] = _0x5419f7;
            }
            ,
            _0x11bd32['prototype']['G'] = function(_0xe11e7c) {
                this['md'] = _0xe11e7c,
                this['sd']();
            }
            ,
            _0x11bd32[_0x210e9a(0x792)]['td'] = function(_0x3313bb) {
                this['nd'] = _0x3313bb,
                this['sd']();
            }
            ,
            _0x11bd32['prototype']['sd'] = function() {}
            ,
            _0x11bd32[_0x210e9a(0x792)]['ud'] = function(_0x1d26d5, _0x186b89) {
                var _0x23a5ad = _0x210e9a;
                if (!_0x3392fc()['p']['W'])
                    return null;
                var _0x5cd4da = _0x1d26d5[_0x186b89];
                return null == _0x5cd4da || 0x0 == _0x5cd4da['length'] ? null : _0x5cd4da[Math[_0x23a5ad(0x1c7)](Math[_0x23a5ad(0x7d2)]() * _0x5cd4da[_0x23a5ad(0x607)])][_0x23a5ad(0x734)]();
            }
            ,
            _0x11bd32[_0x210e9a(0x792)]['vd'] = function(_0x383121, _0x2c1b17, _0x3454fa) {
                var _0x4ea849 = _0x210e9a;
                if (this['od'] && !(_0x3454fa <= 0x0)) {
                    var _0x1cae2c = this['ud'](_0x383121, _0x2c1b17);
                    null != _0x1cae2c && (_0x1cae2c[_0x4ea849(0x501)] = Math[_0x4ea849(0x794)](0x1, _0x3454fa),
                    _0x1cae2c['play']());
                }
            }
            ,
            _0x11bd32[_0x210e9a(0x792)]['wd'] = function(_0x336cff, _0x206858) {
                this['md']['xd'] && this['vd'](app['q']['yd'], _0x336cff, _0x206858);
            }
            ,
            _0x11bd32[_0x210e9a(0x792)]['zd'] = function(_0x448746, _0x3e5e4c) {
                this['md']['Ad'] && this['vd'](app['q']['Bd'], _0x448746, _0x3e5e4c);
            }
            ,
            _0x11bd32[_0x210e9a(0x792)]['Cd'] = function() {}
            ,
            _0x11bd32[_0x210e9a(0x792)]['Dd'] = function() {}
            ,
            _0x11bd32[_0x210e9a(0x792)]['Ed'] = function() {}
            ,
            _0x11bd32['prototype']['Fd'] = function() {}
            ,
            _0x11bd32['prototype']['Gd'] = function() {}
            ,
            _0x11bd32[_0x210e9a(0x792)]['Hd'] = function() {}
            ,
            _0x11bd32[_0x210e9a(0x792)]['Id'] = function(_0x4a4a8b, _0x37ea72, _0x2bf415) {}
            ,
            _0x11bd32[_0x210e9a(0x792)]['Jd'] = function(_0x91a9e4) {}
            ,
            _0x11bd32[_0x210e9a(0x792)]['Kd'] = function(_0x5a5136) {}
            ,
            _0x11bd32[_0x210e9a(0x792)]['Ld'] = function(_0x16ccbd) {}
            ,
            _0x11bd32[_0x210e9a(0x792)]['Md'] = function(_0x408d0a) {}
            ,
            _0x11bd32['prototype']['Nd'] = function(_0x4d8838) {}
            ,
            _0x11bd32[_0x210e9a(0x792)]['Od'] = function(_0x544186) {}
            ,
            _0x11bd32[_0x210e9a(0x792)]['Pd'] = function(_0x136f8f) {}
            ,
            _0x11bd32['prototype']['Qd'] = function(_0x7ace95) {}
            ,
            _0x11bd32[_0x210e9a(0x792)]['Rd'] = function(_0x4ca14f) {}
            ,
            _0x11bd32['prototype']['Sd'] = function(_0x385f1f) {}
            ,
            _0x11bd32[_0x210e9a(0x792)]['Td'] = function(_0x32c0bc) {}
            ,
            _0x11bd32[_0x210e9a(0x792)]['Ud'] = function(_0x1ece07) {}
            ,
            _0x11bd32['prototype']['Vd'] = function(_0x2ba0f9) {}
            ,
            _0x11bd32[_0x210e9a(0x792)]['Wd'] = function(_0x4fc049) {}
            ,
            _0x11bd32[_0x210e9a(0x792)]['Xd'] = function(_0x3d1661, _0x1f86cf) {}
            ,
            _0x11bd32[_0x210e9a(0x792)]['Yd'] = function(_0x5e78e3) {}
            ,
            _0x11bd32['prototype']['Zd'] = function(_0x1fc5dd, _0xf83d0e, _0x437eb7) {}
            ;
            var _0x3ed324 = ((function() {
                var _0xda3d6a = _0x210e9a;
                function _0x93d311(_0x41ba49) {
                    var _0x3164f9 = _0x2458;
                    this['$d'] = new _0x3ed324(_0x41ba49,0.5),
                    this['$d']['_d'][_0x3164f9(0x415)] = !0x0,
                    this['ae'] = !0x1;
                }
                _0x93d311['prototype']['be'] = function(_0x4a2433) {
                    _0x4a2433 ? this['b']() : this['ce']();
                }
                ,
                _0x93d311[_0xda3d6a(0x792)]['b'] = function() {
                    this['ae'] || (this['ae'] = !0x0,
                    this['$d']['de'] = 0x0,
                    this['$d']['ee'](0x5dc, 0x64));
                }
                ,
                _0x93d311['prototype']['ce'] = function() {
                    this['ae'] && (this['ae'] = !0x1,
                    this['$d']['fe'](0x5dc, 0x64));
                }
                ;
            }()),
            (function() {
                var _0x4a1078 = _0x210e9a;
                function _0x54dea2(_0x78bb23) {
                    var _0x1ad981 = _0x2458;
                    this['ge'] = _0x78bb23[_0x1ad981(0x3a0)](function(_0xff4769) {
                        return new _0x3ed324(_0xff4769,0.4);
                    }),
                    _0x2756d8(this['ge'], 0x0, this['ge']['length']),
                    this['he'] = null,
                    this['ie'] = 0x0,
                    this['ae'] = !0x1,
                    this['je'] = 0x2710;
                }
                function _0x2756d8(_0x18b909, _0x4dc255, _0x4f17dc) {
                    var _0xf0b42e = _0x2458;
                    for (var _0x760571 = _0x4f17dc - 0x1; _0x760571 > _0x4dc255; _0x760571--) {
                        var _0x55d130 = _0x4dc255 + Math['floor'](Math[_0xf0b42e(0x7d2)]() * (_0x760571 - _0x4dc255 + 0x1))
                          , _0xef221a = _0x18b909[_0x760571];
                        _0x18b909[_0x760571] = _0x18b909[_0x55d130],
                        _0x18b909[_0x55d130] = _0xef221a;
                    }
                }
                _0x54dea2[_0x4a1078(0x792)]['be'] = function(_0x3ba575) {
                    _0x3ba575 ? this['b']() : this['ce']();
                }
                ,
                _0x54dea2[_0x4a1078(0x792)]['b'] = function() {
                    this['ae'] || (this['ae'] = !0x0,
                    this['ke'](0x5dc));
                }
                ,
                _0x54dea2['prototype']['ce'] = function() {
                    this['ae'] && (this['ae'] = !0x1,
                    null != this['he'] && this['he']['fe'](0x320, 0x32));
                }
                ,
                _0x54dea2[_0x4a1078(0x792)]['ke'] = function(_0xd8e79a) {
                    var _0x4704ea = _0x4a1078;
                    if (this['ae']) {
                        null == this['he'] && (this['he'] = this['le']()),
                        this['he']['_d'][_0x4704ea(0x76e)] + this['je'] / 0x3e8 > this['he']['_d'][_0x4704ea(0x56e)] && (this['he'] = this['le'](),
                        this['he']['_d'][_0x4704ea(0x76e)] = 0x0),
                        console['log'](_0x4704ea(0x23d) + this['he']['_d'][_0x4704ea(0x4ec)] + _0x4704ea(0x1eb) + (0x3e8 * (this['he']['_d'][_0x4704ea(0x56e)] - this['he']['_d'][_0x4704ea(0x76e)]) - this['je'])),
                        this['he']['de'] = 0x0,
                        this['he']['ee'](_0xd8e79a, 0x64);
                        var _0x2680c8 = 0x3e8 * (this['he']['_d']['duration'] - this['he']['_d']['currentTime']) - this['je']
                          , _0x549c96 = this
                          , _0x46b130 = setTimeout(function() {
                            var _0x408a45 = _0x4704ea;
                            _0x549c96['ae'] && _0x46b130 == _0x549c96['ie'] && (_0x549c96['he']['fe'](_0x549c96['je'], 0x64),
                            _0x549c96['he'] = _0x549c96['le'](),
                            _0x549c96['he']['_d'][_0x408a45(0x76e)] = 0x0,
                            _0x549c96['ke'](_0x549c96['je']));
                        }, _0x2680c8);
                        this['ie'] = _0x46b130;
                    }
                }
                ,
                _0x54dea2[_0x4a1078(0x792)]['le'] = function() {
                    var _0x23dea9 = _0x4a1078
                      , _0x8b2147 = this['ge'][0x0]
                      , _0xdb976d = Math[_0x23dea9(0x5c6)](0x1, this['ge'][_0x23dea9(0x607)] / 0x2);
                    return _0x2756d8(this['ge'], _0xdb976d, this['ge'][_0x23dea9(0x607)]),
                    this['ge'][_0x23dea9(0x7b5)](this['ge'][_0x23dea9(0x818)]()),
                    _0x8b2147;
                }
                ;
            }()),
            (function() {
                var _0x12dacf = _0x210e9a;
                function _0x75b3ff(_0x14cc22, _0x19cd00) {
                    var _0x4969ac = _0x2458;
                    this['_d'] = _0x14cc22,
                    this['me'] = _0x19cd00,
                    this['de'] = 0x0,
                    _0x14cc22[_0x4969ac(0x501)] = 0x0,
                    this['ne'] = 0x0,
                    this['oe'] = !0x1;
                }
                return _0x75b3ff['prototype']['ee'] = function(_0x4cc230, _0x27ef16) {
                    var _0x3ab44d = _0x2458;
                    console['log'](_0x3ab44d(0x2a0) + this['_d'][_0x3ab44d(0x4ec)]),
                    this['pe'](!0x0, _0x4cc230, _0x27ef16);
                }
                ,
                _0x75b3ff[_0x12dacf(0x792)]['fe'] = function(_0x5685d4, _0x11d405) {
                    var _0x31fc5a = _0x12dacf;
                    console[_0x31fc5a(0x39b)](_0x31fc5a(0x2e6) + this['_d'][_0x31fc5a(0x4ec)]),
                    this['pe'](!0x1, _0x5685d4, _0x11d405);
                }
                ,
                _0x75b3ff['prototype']['pe'] = function(_0x5ee3b0, _0x1bccb2, _0x45454f) {
                    var _0x297a7e = _0x12dacf;
                    this['oe'] && clearInterval(this['ne']);
                    var _0x543f1d = this
                      , _0xfbae78 = 0x1 / (_0x1bccb2 / _0x45454f)
                      , _0x13906d = setInterval(function() {
                        var _0x20669e = _0x2458;
                        if (_0x543f1d['oe'] && _0x13906d != _0x543f1d['ne'])
                            return void clearInterval(_0x13906d);
                        _0x5ee3b0 ? (_0x543f1d['de'] = Math['min'](0x1, _0x543f1d['de'] + _0xfbae78),
                        _0x543f1d['_d']['volume'] = _0x543f1d['de'] * _0x543f1d['me'],
                        _0x543f1d['de'] >= 0x1 && (_0x543f1d['oe'] = !0x1,
                        clearInterval(_0x13906d))) : (_0x543f1d['de'] = Math[_0x20669e(0x5c6)](0x0, _0x543f1d['de'] - _0xfbae78),
                        _0x543f1d['_d'][_0x20669e(0x501)] = _0x543f1d['de'] * _0x543f1d['me'],
                        _0x543f1d['de'] <= 0x0 && (_0x543f1d['_d'][_0x20669e(0x2a3)](),
                        _0x543f1d['oe'] = !0x1,
                        clearInterval(_0x13906d)));
                    }, _0x45454f);
                    this['oe'] = !0x0,
                    this['ne'] = _0x13906d,
                    this['_d'][_0x297a7e(0x420)]();
                }
                ,
                _0x75b3ff;
            }()));
            return _0x11bd32[_0x210e9a(0x740)] = {
                'ua': {
                    'qe': !0x1,
                    're': !0x1,
                    'Ad': !0x0,
                    'xd': !0x1
                },
                'F': {
                    'qe': !0x1,
                    're': !0x0,
                    'Ad': !0x0,
                    'xd': !0x1
                },
                'H': {
                    'qe': !0x0,
                    're': !0x1,
                    'Ad': !0x1,
                    'xd': !0x0
                },
                'Ea': {
                    'qe': !0x1,
                    're': !0x1,
                    'Ad': !0x0,
                    'xd': !0x1
                },
                'qa': {
                    'qe': !0x1,
                    're': !0x1,
                    'Ad': !0x1,
                    'xd': !0x1
                }
            },
            _0x11bd32;
        }())
          , _0x3606ae = (function() {
            var _0x4137d1 = _0x5b9465;
            function _0x5618f5(_0x168609) {
                var _0x19e3b9 = _0x2458;
                this['se'] = _0x168609,
                this['te'] = _0x168609[_0x19e3b9(0x338)]()[0x0],
                this['ue'] = new _0x53055c['ac']({
                    'view': this['te'],
                    'backgroundColor': _0x359a4a,
                    'antialias': !0x0
                }),
                this['ve'] = new _0x53055c['Zb'](),
                this['ve'][_0x19e3b9(0x466)] = !0x0,
                this['we'] = [],
                this['xe'] = [],
                this['ye'] = [],
                this['a']();
            }
            var _0x359a4a = 0x0
              , _0x2b67fd = function(_0x3714da, _0x525f8c) {
                return _0x3714da + Math['random'](_0x525f8c - _0x3714da);
            }
              , _0x30bca1 = function(_0x300b8e) {
                var _0x4d5ef3 = _0x2458;
                return _0x300b8e >= 0x0 ? Math[_0x4d5ef3(0x673)](_0x300b8e % _0x1d3753) : Math[_0x4d5ef3(0x673)](_0x300b8e % _0x1d3753 + _0x1d3753);
            }
              , _0x5334ad = function(_0x965bc9) {
                var _0x527766 = _0x2458;
                return _0x965bc9 >= 0x0 ? Math[_0x527766(0x26c)](_0x965bc9 % _0x1d3753) : Math[_0x527766(0x26c)](_0x965bc9 % _0x1d3753 + _0x1d3753);
            }
              , _0x253672 = [{
                'ze': _0x2b67fd(0x0, _0x1d3753),
                'Ae': _0x2b67fd(0x0, _0x1d3753),
                'Be': _0x2b67fd(0.1, 0.5),
                'Ce': 0x1,
                'De': 0x2,
                'Ee': 0xff66aa
            }, {
                'ze': _0x2b67fd(0x0, _0x1d3753),
                'Ae': _0x2b67fd(0x0, _0x1d3753),
                'Be': _0x2b67fd(0.1, 0.5),
                'Ce': 1.5,
                'De': 1.5,
                'Ee': 0xff8888
            }, {
                'ze': _0x2b67fd(0x0, _0x1d3753),
                'Ae': _0x2b67fd(0x0, _0x1d3753),
                'Be': _0x2b67fd(0.1, 0.5),
                'Ce': 0x2,
                'De': 0x1,
                'Ee': 0xffaa66
            }, {
                'ze': _0x2b67fd(0x0, _0x1d3753),
                'Ae': _0x2b67fd(0x0, _0x1d3753),
                'Be': _0x2b67fd(0.1, 0.5),
                'Ce': 0x3,
                'De': 0x2,
                'Ee': 0xaaff66
            }, {
                'ze': _0x2b67fd(0x0, _0x1d3753),
                'Ae': _0x2b67fd(0x0, _0x1d3753),
                'Be': _0x2b67fd(0.1, 0.5),
                'Ce': 2.5,
                'De': 2.5,
                'Ee': 0x88ff88
            }, {
                'ze': _0x2b67fd(0x0, _0x1d3753),
                'Ae': _0x2b67fd(0x0, _0x1d3753),
                'Be': _0x2b67fd(0.1, 0.5),
                'Ce': 0x2,
                'De': 0x3,
                'Ee': 0x66ffaa
            }, {
                'ze': _0x2b67fd(0x0, _0x1d3753),
                'Ae': _0x2b67fd(0x0, _0x1d3753),
                'Be': _0x2b67fd(0.1, 0.5),
                'Ce': 0x5,
                'De': 0x4,
                'Ee': 0x66aaff
            }, {
                'ze': _0x2b67fd(0x0, _0x1d3753),
                'Ae': _0x2b67fd(0x0, _0x1d3753),
                'Be': _0x2b67fd(0.1, 0.5),
                'Ce': 4.5,
                'De': 4.5,
                'Ee': 0x8888ff
            }, {
                'ze': _0x2b67fd(0x0, _0x1d3753),
                'Ae': _0x2b67fd(0x0, _0x1d3753),
                'Be': _0x2b67fd(0.1, 0.5),
                'Ce': 0x4,
                'De': 0x5,
                'Ee': 0xaa66ff
            }];
            return _0x5618f5[_0x4137d1(0x792)]['a'] = function() {
                var _0x2ddbd7 = _0x4137d1
                  , _0x5b653c = _0x3392fc();
                this['ue'][_0x2ddbd7(0x67f)] = _0x359a4a,
                this['we'] = new Array(_0x253672[_0x2ddbd7(0x607)]);
                for (var _0x3a9363 = 0x0; _0x3a9363 < this['we'][_0x2ddbd7(0x607)]; _0x3a9363++) {
                    this['we'][_0x3a9363] = new _0x53055c['ec'](),
                    this['we'][_0x3a9363][_0x2ddbd7(0x570)] = _0x5b653c['q']['Fe'],
                    this['we'][_0x3a9363]['anchor'][_0x2ddbd7(0x6dc)](0.5),
                    this['we'][_0x3a9363][_0x2ddbd7(0x3ad)] = 0x1;
                }
                this['xe'] = new Array(_0x5b653c['q']['Ge'][_0x2ddbd7(0x607)]);
                for (var _0x2ca5d2 = 0x0; _0x2ca5d2 < this['xe']['length']; _0x2ca5d2++) {
                    this['xe'][_0x2ca5d2] = new _0x53055c['ec'](),
                    this['xe'][_0x2ca5d2][_0x2ddbd7(0x570)] = _0x5b653c['q']['Ge'][_0x2ca5d2],
                    this['xe'][_0x2ca5d2]['anchor']['set'](0.5),
                    this['xe'][_0x2ca5d2][_0x2ddbd7(0x3ad)] = 0x2,
                    this['ve']['addChild'](this['xe'][_0x2ca5d2]);
                }
                this['ye'] = new Array(this['xe']['length']);
                for (var _0x598626 = 0x0; _0x598626 < this['ye'][_0x2ddbd7(0x607)]; _0x598626++) {
                    this['ye'][_0x598626] = {
                        'He': Math['random'](),
                        'Ie': Math[_0x2ddbd7(0x7d2)](),
                        'Je': Math[_0x2ddbd7(0x7d2)](),
                        'Ke': Math[_0x2ddbd7(0x7d2)]()
                    };
                }
                this['Ra']();
            }
            ,
            _0x5618f5['sc'] = !0x1,
            _0x5618f5['Le'] = function(_0x250c45) {
                _0x5618f5['sc'] = _0x250c45;
            }
            ,
            _0x5618f5[_0x4137d1(0x792)]['Ra'] = function() {
                var _0x5f12ab = _0x4137d1
                  , _0x15ac3d = window[_0x5f12ab(0x663)] ? window['devicePixelRatio'] : 0x1
                  , _0x44b340 = this['se'][_0x5f12ab(0x546)]()
                  , _0x2703b8 = this['se']['height']();
                this['ue'][_0x5f12ab(0x7e7)](_0x44b340, _0x2703b8),
                this['ue'][_0x5f12ab(0x3b9)] = _0x15ac3d,
                this['te']['width'] = _0x15ac3d * _0x44b340,
                this['te'][_0x5f12ab(0x804)] = _0x15ac3d * _0x2703b8;
                for (var _0x17cced = 0.8 * Math[_0x5f12ab(0x5c6)](_0x44b340, _0x2703b8), _0x1639f8 = 0x0; _0x1639f8 < this['we'][_0x5f12ab(0x607)]; _0x1639f8++)
                    this['we'][_0x1639f8][_0x5f12ab(0x546)] = _0x17cced,
                    this['we'][_0x1639f8][_0x5f12ab(0x804)] = _0x17cced;
            }
            ,
            _0x5618f5[_0x4137d1(0x792)]['Pa'] = function(_0x53e8fc, _0x2590ac) {
                var _0x433a15 = _0x4137d1;
                if (_0x5618f5['sc']) {
                    for (var _0xdc24ab = _0x53e8fc / 0x3e8, _0x42ea0d = _0x2590ac / 0x3e8, _0x5eac19 = this['se'][_0x433a15(0x546)](), _0x5701d7 = this['se'][_0x433a15(0x804)](), _0x370e8b = 0x0; _0x370e8b < this['we']['length']; _0x370e8b++) {
                        var _0x1ae905 = _0x253672[_0x370e8b % _0x253672['length']]
                          , _0x1b4845 = this['we'][_0x370e8b]
                          , _0x4216de = _0x30bca1(_0x1ae905['Ce'] * (0.08 * _0xdc24ab) + _0x1ae905['Ae'])
                          , _0x336feb = _0x5334ad(_0x1ae905['De'] * (0.08 * _0xdc24ab))
                          , _0x30c7bd = 0.2 + 0.2 * _0x30bca1(_0x1ae905['Ae'] + _0x1ae905['Be'] * _0xdc24ab);
                        _0x1b4845[_0x433a15(0x7d6)] = _0x1ae905['Ee'],
                        _0x1b4845[_0x433a15(0x4d8)] = _0x30c7bd,
                        _0x1b4845[_0x433a15(0x31e)][_0x433a15(0x6dc)](_0x5eac19 * (0.2 + 0.5 * (_0x4216de + 0x1) * 0.6), _0x5701d7 * (0.1 + 0.5 * (_0x336feb + 0x1) * 0.8));
                    }
                    for (var _0x3f364a = 0.05 * Math[_0x433a15(0x5c6)](_0x5eac19, _0x5701d7), _0x4feff3 = 0x0; _0x4feff3 < this['xe'][_0x433a15(0x607)]; _0x4feff3++) {
                        var _0x251ade = this['ye'][_0x4feff3]
                          , _0x585e1f = this['xe'][_0x4feff3]
                          , _0x2124af = _0x1d3753 * _0x4feff3 / this['xe']['length'] + _0x251ade['He'];
                        _0x251ade['Ke'] += _0x251ade['Ie'] * _0x42ea0d,
                        _0x251ade['Ke'] > 1.3 && (_0x251ade['He'] = Math[_0x433a15(0x7d2)]() * _0x1d3753,
                        _0x251ade['Ie'] = 0.66 * (0.09 + 0.07 * Math[_0x433a15(0x7d2)]()),
                        _0x251ade['Je'] = 0.15 + 0.7 * Math['random'](),
                        _0x251ade['Ke'] = -0.3);
                        var _0x2a8d2f = _0x251ade['Je'] + 0.03 * Math[_0x433a15(0x26c)](0x6 * Math[_0x433a15(0x26c)](_0x2124af + 0.48 * _0xdc24ab))
                          , _0x5c1fd8 = _0x251ade['Ke']
                          , _0x8aa873 = _0x1d73cf(Math[_0x433a15(0x26c)](Math['PI'] * _0x5c1fd8), 0.1, 0x1)
                          , _0x390f47 = 0.5 * (0.4 + 0.5 * (0x1 + Math['sin'](_0x2124af + 0.12 * _0xdc24ab)) * 1.2)
                          , _0xf5b2dd = _0x2124af + 0x2 * _0x251ade['Ie'] * _0xdc24ab;
                        _0x585e1f[_0x433a15(0x4d8)] = _0x8aa873,
                        _0x585e1f[_0x433a15(0x31e)]['set'](_0x5eac19 * _0x2a8d2f, _0x5701d7 * _0x5c1fd8),
                        _0x585e1f[_0x433a15(0x566)] = _0xf5b2dd;
                        var _0x13993e = _0x585e1f['texture'][_0x433a15(0x546)] / _0x585e1f[_0x433a15(0x570)][_0x433a15(0x804)];
                        _0x585e1f['width'] = _0x390f47 * _0x3f364a,
                        _0x585e1f[_0x433a15(0x804)] = _0x390f47 * _0x3f364a * _0x13993e;
                    }
                    this['ue'][_0x433a15(0x24e)](this['ve'], null, !0x0);
                }
            }
            ,
            _0x5618f5;
        }())
          , _0x166161 = (function() {
            var _0x4df9bd = _0x5b9465;
            function _0x24ada6() {}
            return _0x24ada6['Na'] = _0x4df9bd(0x2ba),
            _0x24ada6['ya'] = _0x4df9bd(0x541),
            _0x24ada6['Me'] = _0x4df9bd(0x79d),
            _0x24ada6['Ne'] = _0x4df9bd(0x4a8),
            _0x24ada6['Oe'] = _0x4df9bd(0x2b3),
            _0x24ada6['va'] = _0x4df9bd(0x5d4),
            _0x24ada6['Aa'] = _0x4df9bd(0x774),
            _0x24ada6['Ba'] = 'skin',
            _0x24ada6['d'] = _0x4df9bd(0x559),
            _0x24ada6['La'] = 'shared',
            _0x24ada6;
        }())
          , _0x796b = (function() {
            function _0x1e7d0b(_0x59a0d6, _0x2815c7, _0x40c3f2) {
                var _0x30fc0b = _0x2458;
                for (var _0x5546e3 = !0x1, _0x47ab92 = _0x40c3f2[_0x30fc0b(0x607)], _0x469d9d = 0x0, _0x15ddcd = _0x47ab92 - 0x1; _0x469d9d < _0x47ab92; _0x15ddcd = _0x469d9d++)
                    _0x40c3f2[_0x469d9d][0x1] > _0x2815c7 != _0x40c3f2[_0x15ddcd][0x1] > _0x2815c7 && _0x59a0d6 < (_0x40c3f2[_0x15ddcd][0x0] - _0x40c3f2[_0x469d9d][0x0]) * (_0x2815c7 - _0x40c3f2[_0x469d9d][0x1]) / (_0x40c3f2[_0x15ddcd][0x1] - _0x40c3f2[_0x469d9d][0x1]) + _0x40c3f2[_0x469d9d][0x0] && (_0x5546e3 = !_0x5546e3);
                return _0x5546e3;
            }
            var _0x169368 = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
            return {
                'Oa': function(_0x209271, _0x1ba45e) {
                    return _0x1e7d0b(_0x1ba45e, _0x209271, _0x169368);
                }
            };
        }())
          , _0x3ed4e2 = (function() {
            var _0x266c4d = _0x5b9465;
            function _0x229200(_0x33eccf) {
                var _0x3829f0 = _0x2458
                  , _0x3bc10a = void 0x0;
                _0x3bc10a = _0x33eccf > 0x0 ? '+' + Math[_0x3829f0(0x1c7)](_0x33eccf) : _0x33eccf < 0x0 ? '-' + Math[_0x3829f0(0x1c7)](_0x33eccf) : '0';
                var _0x444dc4 = Math[_0x3829f0(0x794)](1.5, 0.5 + _0x33eccf / 0x258)
                  , _0x10b510 = void 0x0;
                if (_0x33eccf < 0x1)
                    _0x10b510 = _0x3829f0(0x564);
                else {
                    if (_0x33eccf < 0x1e) {
                        var _0x1f5b8d = (_0x33eccf - 0x1) / 0x1d;
                        _0x10b510 = _0x5d3a9b(0x1 * (0x1 - _0x1f5b8d) + 0.96 * _0x1f5b8d, 0x1 * (0x1 - _0x1f5b8d) + 0.82 * _0x1f5b8d, 0x1 * (0x1 - _0x1f5b8d) + 0x0 * _0x1f5b8d);
                    } else {
                        if (_0x33eccf < 0x12c) {
                            var _0x22adb2 = (_0x33eccf - 0x1e) / 0x10e;
                            _0x10b510 = _0x5d3a9b(0.96 * (0x1 - _0x22adb2) + 0.93 * _0x22adb2, 0.82 * (0x1 - _0x22adb2) + 0.34 * _0x22adb2, 0x0 * (0x1 - _0x22adb2) + 0.25 * _0x22adb2);
                        } else {
                            if (_0x33eccf < 0x2bc) {
                                var _0x66f464 = (_0x33eccf - 0x12c) / 0x190;
                                _0x10b510 = _0x5d3a9b(0.93 * (0x1 - _0x66f464) + 0.98 * _0x66f464, 0.34 * (0x1 - _0x66f464) + 0x0 * _0x66f464, 0.25 * (0x1 - _0x66f464) + 0.98 * _0x66f464);
                            } else
                                _0x10b510 = _0x5d3a9b(0.98, 0x0, 0.98);
                        }
                    }
                }
                var _0x4d883c = Math[_0x3829f0(0x7d2)]()
                  , _0x2bac36 = 0x1 + 0.5 * Math[_0x3829f0(0x7d2)]();
                return new _0x4f35b4(_0x3bc10a,_0x10b510,!![],0.5,_0x444dc4,_0x4d883c,_0x2bac36);
            }
            function _0x469614(_0x336814, _0x188865) {
                var _0x53dcf7 = void 0x0
                  , _0x2bd29f = void 0x0;
                return _0x188865 ? (_0x53dcf7 = 1.3,
                _0x2bd29f = _0x5d3a9b(0.93, 0.34, 0.25)) : (_0x53dcf7 = 1.1,
                _0x2bd29f = _0x5d3a9b(0.96, 0.82, 0x0)),
                new _0x4f35b4(_0x336814,_0x2bd29f,!![],0.5,_0x53dcf7,0.5,0.7);
            }
            function _0x5d3a9b(_0x537746, _0x38ee97, _0x797a6d) {
                return ((0xff * _0x537746 & 0xff) << 0x10) + ((0xff * _0x38ee97 & 0xff) << 0x8) + (0xff * _0x797a6d & 0xff);
            }
            var _0x131fe1 = _0x22ee20(_0x53055c['Zb'], function() {
                var _0x1f15f0 = _0x2458;
                _0x53055c['Zb'][_0x1f15f0(0x5b3)](this),
                this['Pe'] = [],
                this['Qe'] = 0x0;
            });
            _0x131fe1['prototype']['Re'] = function(_0x497197) {
                var _0x39188c = _0x2458;
                if (this['Qe'] += _0x497197,
                this['Qe'] >= 0x1) {
                    var _0xd783f = Math['floor'](this['Qe']);
                    this['Qe'] -= _0xd783f;
                    var _0x8ad62d = _0x229200(_0xd783f);
                    this[_0x39188c(0x21e)](_0x8ad62d),
                    this['Pe'][_0x39188c(0x7b5)](_0x8ad62d);
                }
            }
            ,
            _0x131fe1[_0x266c4d(0x792)]['Se'] = function(_0x258f5c) {
                var _0x323e65 = _0x266c4d;
                if (_0x258f5c) {
                    zw_hscount += 0x1,
                    zwormData['hs'] = zw_hscount;
                    !(zw_hscount % 0xa) ? soundEnabled && zw_laughsound[_0x323e65(0x420)]() : soundEnabled && zw_hssound[_0x323e65(0x420)]();
                    var _0x1cb5f3 = _0x469614(zwormData[_0x323e65(0x774)][_0x323e65(0x392)](0x0, 0x10) + '-☠️-' + zwormData['enemyNameHs'][_0x323e65(0x392)](0x0, 0x10), !![]);
                    this[_0x323e65(0x21e)](_0x1cb5f3),
                    this['Pe'][_0x323e65(0x7b5)](_0x1cb5f3);
                } else {
                    zw_killcount += 0x1;
                    var _0x1cb5f3 = _0x469614(_0x2ca325(_0x323e65(0x34f)) + '✨', ![]);
                    this[_0x323e65(0x21e)](_0x1cb5f3),
                    this['Pe']['push'](_0x1cb5f3);
                }
            }
            ,
            _0x131fe1[_0x266c4d(0x792)]['Te'] = function(_0x3c6ab3, _0x463238) {
                var _0x26b377 = _0x266c4d
                  , _0x4e691b = _0x3392fc()['s']['H']['wb']
                  , _0x109492 = _0x4e691b['ue']['width'] / _0x4e691b['ue'][_0x26b377(0x3b9)]
                  , _0x54c239 = _0x4e691b['ue'][_0x26b377(0x804)] / _0x4e691b['ue'][_0x26b377(0x3b9)]
                  , _0x5684ea = 0x0;
                for (; _0x5684ea < this['Pe'][_0x26b377(0x607)]; ) {
                    var _0x314365 = this['Pe'][_0x5684ea];
                    _0x314365['Ue'] = _0x314365['Ue'] + _0x463238 / 0x7d0 * _0x314365['Ve'],
                    _0x314365['We'] = _0x314365['We'] + _0x463238 / 0x7d0 * _0x314365['Xe'],
                    _0x314365[_0x26b377(0x4d8)] = 0.5 * Math[_0x26b377(0x26c)](Math['PI'] * _0x314365['We']),
                    _0x314365[_0x26b377(0x817)]['set'](_0x314365['Ue']),
                    _0x314365['position']['x'] = _0x109492 * (0.25 + 0.5 * _0x314365['Ye']),
                    _0x314365[_0x26b377(0x31e)]['y'] = _0x314365['Ze'] ? _0x54c239 * (0x1 - 0.5 * (0x1 + _0x314365['We'])) : _0x54c239 * (0x1 - 0.5 * (0x0 + _0x314365['We'])),
                    _0x314365['We'] > 0x1 && (_0x31c7b2(_0x314365),
                    this['Pe']['splice'](_0x5684ea, 0x1),
                    _0x5684ea--),
                    _0x5684ea++;
                }
            }
            ;
            var _0x4f35b4 = (function() {
                return _0x22ee20(_0x53055c['fc'], function(_0x203f55, _0x184b7e, _0x5e0a12, _0x139291, _0x5ebe05, _0x54ed95, _0x15f7bf) {
                    var _0x4b50fc = _0x2458;
                    _0x53055c['fc'][_0x4b50fc(0x5b3)](this, _0x203f55, {
                        'fill': _0x184b7e,
                        'fontFamily': fonts[currentFontIndex],
                        'fontSize': 0x24
                    }),
                    this[_0x4b50fc(0x44d)][_0x4b50fc(0x6dc)](0.5),
                    this['Ze'] = _0x5e0a12,
                    this['Ue'] = _0x139291,
                    this['Ve'] = _0x5ebe05,
                    this['Ye'] = _0x54ed95,
                    this['We'] = 0x0,
                    this['Xe'] = _0x15f7bf;
                });
            }());
            return _0x131fe1;
        }())
          , _0x46b922 = (function() {
            function _0x3fbb50(_0x1e9da2, _0x447181) {
                this['Gc'] = _0x1e9da2,
                this['Hc'] = _0x447181;
            }
            return _0x3fbb50;
        }())
          , _0x1dea8f = {
            '$e': 0x0,
            '_e': 0x10
        }
          , _0x38582a = (function() {
            function _0x82114d() {
                this['af'] = _0x1dea8f['$e'],
                this['bf'] = 0x0,
                this['ub'] = 0x1f4,
                this['cf'] = 0xfa0,
                this['df'] = 0x1b58;
            }
            return _0x82114d['TEAM_DEFAULT'] = 0x0,
            _0x82114d['prototype']['ef'] = function() {
                return 1.02 * this['ub'];
            }
            ,
            _0x82114d;
        }())
          , _0x2daed0 = (function() {
            var _0x4d7f8b = _0x5b9465;
            function _0x7e8a91(_0xf8d32f) {
                var _0x26eabb = _0x2458;
                this['se'] = _0xf8d32f,
                this['te'] = _0xf8d32f[_0x26eabb(0x338)]()[0x0],
                this['ue'] = new _0x53055c['ac']({
                    'view': this['te'],
                    'backgroundColor': _0x508f3f,
                    'antialias': !![]
                }),
                this['ve'] = new _0x53055c['Zb'](),
                this['ve'][_0x26eabb(0x466)] = !![],
                this['ve']['interactive'] = !![],
                this['ve'][_0x26eabb(0x3b4)] = !![],
                this['ff'] = Math['floor'](0x168 * Math['random']()),
                this['gf'] = 0x0,
                this['hf'] = 0x0,
                this['if'] = 0xf,
                this['jf'] = 0.5,
                this['kf'] = 0x0,
                this['lf'] = new _0x1f9450(),
                this['mf'] = new _0x53055c['bc'](),
                this['nf'] = new _0x53055c['Zb'](),
                this['pf'] = new _0x53055c['Zb'](),
                this['pf'][_0x26eabb(0x466)] = !![],
                this['qf'] = new _0x53055c['Zb'](),
                this['rf'] = new _0x53055c['Zb'](),
                this['rf'][_0x26eabb(0x466)] = !![],
                this['sf'] = new _0x53055c['Zb'](),
                this['tf'] = new _0x4bb664(),
                this['uf'] = new _0x408fdc(),
                this['vf'] = new _0x2b4dd1(),
                this['wf'] = new _0x3ed4e2(),
                this['xf'] = new _0x53055c['ec'](),
                this['yf'] = {
                    'x': 0x0,
                    'y': 0x0
                },
                this['a']();
            }
            var _0x508f3f = 0x0;
            _0x7e8a91['prototype']['a'] = function() {
                var _0x2c48cb = _0x2458;
                zw_joysticks = [],
                zw_joystick = -0x1,
                zw_servertext = new _0x53055c['fc']('',{
                    'fontFamily': fonts[currentFontIndex],
                    'fontSize': 0xc,
                    'fill': _0x2c48cb(0x50e),
                    'align': _0x2c48cb(0x43e)
                }),
                zw_servertext['x'] = 0x19,
                zw_serverping = new _0x53055c['fc']('',{
                    'fontFamily': fonts[currentFontIndex],
                    'fontSize': 0xc,
                    'fill': _0x2c48cb(0x50e),
                    'align': 'center'
                }),
                zw_serverping['x'] = 0x55,
                zw_serverfps = new _0x53055c['fc']('',{
                    'fontFamily': fonts[currentFontIndex],
                    'fontSize': 0xc,
                    'fill': _0x2c48cb(0x50e),
                    'align': _0x2c48cb(0x43e)
                }),
                zw_serverfps['x'] = 0x82;
                if (zw_mobilecheck()) {
                    zw_joysticks[0x0] = new Joystick({
                        'onChange': _0x1b25dc => {
                            var _0x385fcd = _0x2c48cb;
                            _0x1b25dc[_0x385fcd(0x2a2)] = _0x1b25dc['angle'] * (Math['PI'] / 0xb4),
                            anApp['s']['H']['sk'] = _0x1b25dc[_0x385fcd(0x2a2)] <= Math['PI'] ? -0x1 * _0x1b25dc[_0x385fcd(0x2a2)] : Math['PI'] - (_0x1b25dc[_0x385fcd(0x2a2)] - Math['PI']);
                        }
                    }),
                    zw_joysticks[0x0][_0x2c48cb(0x3db)] = ![],
                    zw_joysticks[0x1] = new Joystick({
                        'outer': _0x53055c['ec'][_0x2c48cb(0x41e)](_0x2c48cb(0x2ce)),
                        'inner': _0x53055c['ec'][_0x2c48cb(0x41e)](_0x2c48cb(0x439)),
                        'onChange': _0x4680d8 => {
                            var _0x405ce1 = _0x2c48cb;
                            _0x4680d8[_0x405ce1(0x2a2)] = _0x4680d8[_0x405ce1(0x41c)] * (Math['PI'] / 0xb4),
                            anApp['s']['H']['sk'] = _0x4680d8[_0x405ce1(0x2a2)] <= Math['PI'] ? -0x1 * _0x4680d8['aradian'] : Math['PI'] - (_0x4680d8['aradian'] - Math['PI']);
                        }
                    }),
                    zw_joysticks[0x1][_0x2c48cb(0x3db)] = ![],
                    zw_joysticks[0x2] = new Joystick({
                        'outer': _0x53055c['ec']['from'](_0x2c48cb(0x6f2)),
                        'inner': _0x53055c['ec'][_0x2c48cb(0x41e)](_0x2c48cb(0x463)),
                        'onChange': _0x2f5bf => {
                            var _0x23bca6 = _0x2c48cb;
                            _0x2f5bf[_0x23bca6(0x2a2)] = _0x2f5bf[_0x23bca6(0x41c)] * (Math['PI'] / 0xb4),
                            anApp['s']['H']['sk'] = _0x2f5bf[_0x23bca6(0x2a2)] <= Math['PI'] ? -0x1 * _0x2f5bf[_0x23bca6(0x2a2)] : Math['PI'] - (_0x2f5bf[_0x23bca6(0x2a2)] - Math['PI']);
                        }
                    }),
                    zw_joysticks[0x2]['visible'] = ![];
                    for (let _0x175810 = 0x0; _0x175810 < zw_joysticks['length']; _0x175810++) {
                        this['rf']['addChild'](zw_joysticks[_0x175810]);
                    }
                }
                zw_zoomtext = new _0x53055c['fc']('',{
                    'align': _0x2c48cb(0x43e),
                    'fill': _0x2c48cb(0x28f),
                    'fontSize': 0xc,
                    'lineJoin': _0x2c48cb(0x368),
                    'whiteSpace': _0x2c48cb(0x5e7),
                    'wordWrap': !![],
                    'fontWeight': _0x2c48cb(0x1bc)
                }),
                zw_zoomtext['x'] = 0x64,
                zw_zoomtext['y'] = 0x5a,
                this['rf'][_0x2c48cb(0x21e)](zw_zoomtext),
                this['ue']['backgroundColor'] = _0x508f3f,
                this['lf']['zf'][_0x2c48cb(0x3ad)] = 0xa,
                this['ve'][_0x2c48cb(0x21e)](this['lf']['zf']),
                zw_Background = new _0x53055c['bc'](),
                zw_Background['zIndex'] = 0x14,
                this['ve'][_0x2c48cb(0x21e)](zw_Background),
                ctxHeadshotLine = new _0x53055c['bc'](),
                ctxHeadshotLine[_0x2c48cb(0x3ad)] = 0x14,
                this['ve'][_0x2c48cb(0x21e)](ctxHeadshotLine),
                this['mf']['zIndex'] = 0x14,
                this['ve'][_0x2c48cb(0x21e)](this['mf']),
                this['nf'][_0x2c48cb(0x3ad)] = 0x1388,
                this['ve'][_0x2c48cb(0x21e)](this['nf']),
                this['pf'][_0x2c48cb(0x3ad)] = 0x13ec,
                this['ve'][_0x2c48cb(0x21e)](this['pf']),
                this['qf'][_0x2c48cb(0x3ad)] = 0x2710,
                this['ve'][_0x2c48cb(0x21e)](this['qf']),
                this['xf'][_0x2c48cb(0x570)] = _0x3392fc()['q']['Af'],
                this['xf']['anchor'][_0x2c48cb(0x6dc)](0.5),
                this['xf'][_0x2c48cb(0x3ad)] = 0x1,
                this['rf']['addChild'](this['xf']),
                this['sf']['alpha'] = 0.6,
                this['sf'][_0x2c48cb(0x3ad)] = 0x2,
                this['rf'][_0x2c48cb(0x21e)](this['sf']),
                this['wf'][_0x2c48cb(0x3ad)] = 0x3,
                this['rf'][_0x2c48cb(0x21e)](this['wf']),
                this['tf'][_0x2c48cb(0x4d8)] = 0.8,
                this['tf'][_0x2c48cb(0x3ad)] = 0x4,
                this['rf'][_0x2c48cb(0x21e)](this['tf']),
                this['uf'][_0x2c48cb(0x3ad)] = 0x5,
                this['rf'][_0x2c48cb(0x21e)](this['uf']),
                this['vf'][_0x2c48cb(0x3ad)] = 0x6,
                this['rf'][_0x2c48cb(0x21e)](this['vf']),
                this['Ra']();
            }
            ,
            _0x7e8a91['prototype']['Ra'] = function() {
                var _0x1b8de3 = _0x2458
                  , _0x46842c = window[_0x1b8de3(0x663)] ? window[_0x1b8de3(0x663)] : 0x1
                  , _0x3607e4 = this['se'][_0x1b8de3(0x546)]()
                  , _0x533971 = this['se'][_0x1b8de3(0x804)]();
                this['ue'][_0x1b8de3(0x7e7)](_0x3607e4, _0x533971),
                this['ue'][_0x1b8de3(0x3b9)] = _0x46842c,
                this['te']['width'] = _0x46842c * _0x3607e4,
                this['te']['height'] = _0x46842c * _0x533971,
                this['jf'] = Math[_0x1b8de3(0x794)](Math['min'](_0x3607e4, _0x533971), 0.625 * Math[_0x1b8de3(0x5c6)](_0x3607e4, _0x533971)),
                this['xf']['position']['x'] = _0x3607e4 / 0x2,
                this['xf'][_0x1b8de3(0x31e)]['y'] = _0x533971 / 0x2,
                this['xf'][_0x1b8de3(0x546)] = _0x3607e4,
                this['xf'][_0x1b8de3(0x804)] = _0x533971,
                this['tf'][_0x1b8de3(0x31e)]['x'] = 0x3c,
                this['tf'][_0x1b8de3(0x31e)]['y'] = 0x3c,
                this['uf']['position']['x'] = 0x6e,
                this['uf'][_0x1b8de3(0x31e)]['y'] = 0xa,
                this['vf'][_0x1b8de3(0x31e)]['x'] = _0x3607e4 - 0xe1,
                this['vf'][_0x1b8de3(0x31e)]['y'] = 0x1,
                this['tf']['addChild'](ctx[_0x1b8de3(0x63a)]),
                this['tf'][_0x1b8de3(0x21e)](ctx[_0x1b8de3(0x824)]),
                theoKzObjects[_0x1b8de3(0x513)] ? this['tf'][_0x1b8de3(0x21e)](zw_TopHS_RecordHs) : _0x31c7b2(zw_TopHS_RecordHs),
                theoKzObjects[_0x1b8de3(0x1bf)] ? this['tf']['addChild'](ctx[_0x1b8de3(0x555)]) : _0x31c7b2(ctx[_0x1b8de3(0x555)]);
            }
            ,
            _0x7e8a91['prototype']['Te'] = function(_0x28b5a9, _0x494830) {
                var _0x4f0942 = _0x2458
                  , _0x429475 = _0x3392fc();
                this['if'] = 0xf,
                this['nf'][_0x4f0942(0x48e)](),
                this['pf'][_0x4f0942(0x48e)](),
                this['qf'][_0x4f0942(0x48e)](),
                this['sf'][_0x4f0942(0x48e)](),
                this['lf']['Bf'](_0x28b5a9['af'] == _0x1dea8f['$e'] ? _0x429475['q']['Cf'] : _0x429475['q']['Df']),
                theoKzObjects && theoKzObjects['backgroundSolid'] || theoKzObjects['sectores'] ? setSectorsGame() : (zw_Background[_0x4f0942(0x48e)](),
                zw_Background[_0x4f0942(0x1d5)](),
                zw_Background[_0x4f0942(0x2c9)](0x1, 0xff0000, 0x1),
                zw_Background['drawCircle'](0x0, 0x0, 0x1f4),
                zw_Background[_0x4f0942(0x77f)]()),
                this['vf']['Ef'] = _0x494830,
                this['sf']['visible'] = _0x494830;
            }
            ,
            _0x7e8a91[_0x4d7f8b(0x792)]['Pa'] = function(_0x5d5032, _0x4306be) {
                var _0x5434e0 = _0x4d7f8b;
                if (this['ue'][_0x5434e0(0x546)] <= 0x5)
                    return;
                const _0x392f64 = _0x3392fc()
                  , _0x41d836 = _0x392f64['o']
                  , _0x532619 = _0x41d836['N']
                  , _0x1457c8 = this['ue'][_0x5434e0(0x546)] / this['ue']['resolution']
                  , _0x4417fb = this['ue']['height'] / this['ue'][_0x5434e0(0x3b9)]
                  , _0x5d0e9f = this['tf'];
                this['if'] = _0x2c6321(this['if'], _0x41d836['jb'], _0x4306be, 0.002);
                const _0x2d4087 = this['if'] * zw_multiplier
                  , _0x14b072 = this['jf'] / _0x2d4087
                  , _0x9c1d21 = _0x532619['Ff'][_0x2d8dbf[_0x5434e0(0x5e0)]]
                  , _0x330cee = _0x9c1d21 && _0x9c1d21['sc'];
                this['kf'] = _0x54eb86(0x0, 0x1, this['kf'] + _0x4306be / 0x3e8 * (0.1 * (_0x330cee ? 0x1 : 0x0) - this['kf'])),
                this['xf'][_0x5434e0(0x4d8)] = this['kf'],
                this['ff'] = (this['ff'] + 0.01 * _0x4306be) % 0x168,
                this['gf'] = Math[_0x5434e0(0x26c)](_0x5d5032 / 0x4b0 * TWO_PI);
                const _0x596d64 = _0x532619['Gf']()
                  , _0x4469a4 = this['yf'];
                _0x4469a4['x'] = _0x29be4a(_0x4469a4['x'], _0x596d64['x'], _0x4306be, theoKzObjects['smoothCamera'], 33.333),
                _0x4469a4['y'] = _0x29be4a(_0x4469a4['y'], _0x596d64['y'], _0x4306be, 0.5, 33.333);
                const _0x3dc30e = _0x14b072;
                this['ve'][_0x5434e0(0x817)][_0x5434e0(0x6dc)](_0x3dc30e),
                this['ve'][_0x5434e0(0x31e)][_0x5434e0(0x6dc)](_0x1457c8 / 0x2 - _0x4469a4['x'] * _0x3dc30e, _0x4417fb / 0x2 - _0x4469a4['y'] * _0x3dc30e);
                const _0x891699 = _0x1457c8 / (0x2 * _0x3dc30e)
                  , _0x4d304a = _0x4417fb / (0x2 * _0x3dc30e);
                _0x41d836['yb'](_0x4469a4['x'] - 1.3 * _0x891699, _0x4469a4['x'] + 1.3 * _0x891699, _0x4469a4['y'] - 1.3 * _0x4d304a, _0x4469a4['y'] + 1.3 * _0x4d304a),
                this['lf']['Te'](_0x4469a4['x'], _0x4469a4['y'], 0x2 * _0x891699, 0x2 * _0x4d304a);
                const _0x47b695 = _0x41d836['fb']['ub'];
                theoKzObjects[_0x5434e0(0x417)] && (window['coords']['playerX'] = _0x5d0e9f['Jf']['position']['x'],
                window[_0x5434e0(0x721)]['playerY'] = _0x5d0e9f['Jf'][_0x5434e0(0x31e)]['y']);
                zwormData[_0x5434e0(0x795)] = _0x5d0e9f['Jf'][_0x5434e0(0x31e)]['x'],
                zwormData['playerY'] = _0x5d0e9f['Jf'][_0x5434e0(0x31e)]['y'],
                ctxHeadshotLine[_0x5434e0(0x1d5)]();
                theoKzObjects[_0x5434e0(0x820)] && (ctxHeadshotLine[_0x5434e0(0x2c9)](0.1, '0x' + theoObjects['laserColor'], 0x1),
                ctxHeadshotLine[_0x5434e0(0x454)](_0x596d64['x'], _0x596d64['y']),
                ctxHeadshotLine[_0x5434e0(0x45d)](0x0, 0x0));
                const _0x28e987 = Math[_0x5434e0(0x411)](_0x596d64['x'], _0x596d64['y']);
                if (_0x28e987 > _0x47b695 - 0xa) {
                    this['hf'] = _0x54eb86(0x0, 0x1, 0x1 + (_0x28e987 - _0x47b695) / 0xa);
                    const _0x31cdc7 = this['ff'] * TWO_PI / 0x168
                      , _0x50b7fa = Math[_0x5434e0(0x673)](_0x31cdc7)
                      , _0x288839 = Math[_0x5434e0(0x26c)](_0x31cdc7)
                      , _0x13f1c4 = _0x50b7fa * (0x1 - this['hf']) + 0x1 * this['hf']
                      , _0x51f9a2 = _0x288839 * (0x1 - this['hf'])
                      , _0x375651 = (Math[_0x5434e0(0x33c)](_0x51f9a2, _0x13f1c4) + TWO_PI) % TWO_PI * (0x168 / TWO_PI)
                      , _0x39a04a = this['hf'] * (0.5 + 0.5 * this['gf'])
                      , _0xbab596 = _0x10f410(Math[_0x5434e0(0x1c7)](_0x375651), 0x1, 0.75 - 0.25 * this['hf']);
                    this['lf']['Hf'](_0xbab596[0x0], _0xbab596[0x1], _0xbab596[0x2], 0.1 + 0.2 * _0x39a04a);
                } else {
                    this['hf'] = 0x0;
                    const _0xeb20c = _0x10f410(Math[_0x5434e0(0x1c7)](this['ff']), 0x1, 0.75);
                    this['lf']['Hf'](_0xeb20c[0x0], _0xeb20c[0x1], _0xeb20c[0x2], 0.1);
                }
                const _0xeab0aa = this['sf'][_0x5434e0(0x485)]
                  , _0x516e41 = _0xeab0aa[_0x5434e0(0x607)];
                for (let _0x2cc885 = 0x0; _0x2cc885 < _0x516e41; _0x2cc885++) {
                    const _0x4d774b = _0xeab0aa[_0x2cc885];
                    _0x4d774b['If'] && (_0x4d774b[_0x5434e0(0x31e)]['x'] = _0x1457c8 / 0x2 - (_0x4469a4['x'] - _0x4d774b['If']['x']) * _0x3dc30e,
                    _0x4d774b[_0x5434e0(0x31e)]['y'] = _0x4417fb / 0x2 - (_0x4469a4['y'] - _0x4d774b['If']['y']) * _0x3dc30e);
                }
                _0x5d0e9f['Jf'][_0x5434e0(0x31e)]['x'] = _0x596d64['x'] / _0x47b695 * _0x5d0e9f['Kf'],
                _0x5d0e9f['Jf'][_0x5434e0(0x31e)]['y'] = _0x596d64['y'] / _0x47b695 * _0x5d0e9f['Kf'],
                _0x5d0e9f['WLp'][_0x5434e0(0x318)] = parseInt(zw_hscount),
                _0x5d0e9f['WLp'][_0x5434e0(0x31e)]['x'] = -0x19 - _0x5d0e9f[_0x5434e0(0x22a)][_0x5434e0(0x546)] / 0x2,
                _0x5d0e9f[_0x5434e0(0x458)][_0x5434e0(0x318)] = parseInt(zw_killcount),
                _0x5d0e9f['MLb'][_0x5434e0(0x31e)]['x'] = 0x19 - _0x5d0e9f[_0x5434e0(0x458)]['width'] / 0x2;
                if (theoObjects['hsTextColor'] !== lastHsTextColor) {
                    const _0x54bea2 = '0x' + theoObjects['hsTextColor'];
                    _0x5d0e9f[_0x5434e0(0x22a)][_0x5434e0(0x1b5)][_0x5434e0(0x331)] = _0x54bea2,
                    hstext[_0x5434e0(0x1b5)]['fill'] = _0x54bea2,
                    lastHsTextColor = theoObjects['hsTextColor'];
                }
                if (theoObjects['killTextColor'] !== lastKillTextColor) {
                    const _0x12963d = '0x' + theoObjects[_0x5434e0(0x602)];
                    _0x5d0e9f[_0x5434e0(0x458)][_0x5434e0(0x1b5)][_0x5434e0(0x331)] = _0x12963d,
                    killtext[_0x5434e0(0x1b5)][_0x5434e0(0x331)] = _0x12963d,
                    lastKillTextColor = theoObjects[_0x5434e0(0x602)];
                }
                theoObjects[_0x5434e0(0x690)] !== lastMinimapBorderColor && (circle[_0x5434e0(0x7d6)] = '0x' + theoObjects[_0x5434e0(0x690)],
                lastMinimapBorderColor = theoObjects[_0x5434e0(0x690)]);
                this['uf']['Qa'](_0x5d5032),
                this['wf']['Te'](_0x5d5032, _0x4306be),
                this['ue'][_0x5434e0(0x24e)](this['ve'], null, !![]),
                this['ue'][_0x5434e0(0x24e)](this['rf'], null, ![]);
                const _0x43d052 = performance['now']();
                totalFPSTime += _0x43d052 - lastFrameTime,
                lastFrameTime = _0x43d052,
                frameCount++;
                if (frameCount >= FPS_AVERAGE_WINDOW) {
                    const _0x3f74d4 = Math[_0x5434e0(0x368)](0x3e8 / (totalFPSTime / frameCount));
                    zw_serverfps['text'] = _0x3f74d4 + _0x5434e0(0x6ea),
                    zw_serverfps[_0x5434e0(0x1b5)][_0x5434e0(0x331)] = getFPSColor(_0x3f74d4),
                    frameCount = 0x0,
                    totalFPSTime = 0x0;
                }
            }
            ,
            _0x7e8a91[_0x4d7f8b(0x792)]['Lf'] = function(_0x1bb504, _0x5aff58) {
                var _0x4aef98 = _0x4d7f8b;
                _0x5aff58['Of']['Nf']['Mf']()[_0x4aef98(0x3ad)] = (_0x1bb504 + 0x80000000) / 0x100000000 * 0x1388,
                this['nf'][_0x4aef98(0x21e)](_0x5aff58['Of']['Pf']['Mf']()),
                this['pf']['addChild'](_0x5aff58['Of']['Nf']['Mf']());
            }
            ,
            _0x7e8a91[_0x4d7f8b(0x792)]['Qf'] = function(_0x3677aa, _0x1581bf, _0x1d1ee0, _0x173b38, _0x24b258) {
                var _0x4e769d = _0x4d7f8b;
                $(_0x4e769d(0x7ff))[_0x4e769d(0x318)]('\x20:\x20' + _0x1d1ee0[_0x4e769d(0x318)]),
                _0x1581bf['Rf']['zIndex'] = _0x3392fc()['o']['fb']['bf'] ? 0x0 : 0xa + (_0x3677aa + 0x8000) / 0x10000 * 0x1388,
                this['qf'][_0x4e769d(0x21e)](_0x1581bf['Rf']),
                _0x3677aa != _0x3392fc()['o']['fb']['bf'] && (this['sf'][_0x4e769d(0x21e)](_0x1d1ee0),
                this['sf'][_0x4e769d(0x21e)](_0x173b38),
                this['sf'][_0x4e769d(0x21e)](_0x24b258)),
                _0x1d1ee0[_0x4e769d(0x318)] === _0x3392fc()['o']['N']['Mb']['ad'] && (_0x1d1ee0['text'] = 'ㅤ'),
                this['sf']['addChild'](_0x1d1ee0),
                this['sf'][_0x4e769d(0x21e)](_0x173b38),
                this['sf'][_0x4e769d(0x21e)](_0x24b258);
            }
            ;
            var _0x4bb664 = (function() {
                return _0x22ee20(_0x53055c['Zb'], function() {
                    var _0x5efcbd = _0x2458;
                    _0x53055c['Zb'][_0x5efcbd(0x5b3)](this),
                    this['Kf'] = 0x28,
                    this['Sf'] = new _0x53055c['ec'](),
                    this['Sf'][_0x5efcbd(0x44d)]['set'](0.5),
                    this['Jf'] = new _0x53055c['bc'](),
                    circle = new _0x53055c['bc'](),
                    circle[_0x5efcbd(0x4a2)](_0x5efcbd(0x4be), 0.4),
                    circle[_0x5efcbd(0x512)](0x0, 0x0, this['Kf']),
                    circle[_0x5efcbd(0x77f)](),
                    circle['lineStyle'](0x2, 0xe3d2d2),
                    circle['drawCircle'](0x0, 0x0, this['Kf']),
                    circle[_0x5efcbd(0x454)](0x0, -this['Kf']),
                    circle['lineTo'](0x0, +this['Kf']),
                    circle[_0x5efcbd(0x454)](-this['Kf'], 0x0),
                    circle[_0x5efcbd(0x45d)](+this['Kf'], 0x0),
                    circle[_0x5efcbd(0x77f)](),
                    this['Sf'][_0x5efcbd(0x4d8)] = 0.5,
                    this['Jf'][_0x5efcbd(0x3ad)] = 0x2,
                    this['Jf'][_0x5efcbd(0x4d8)] = 0.9,
                    this['Jf'][_0x5efcbd(0x4a2)](zwormData[_0x5efcbd(0x7fe)]),
                    this['Jf'][_0x5efcbd(0x512)](0x0, 0x0, 0.12 * this['Kf']),
                    this['Jf']['endFill'](),
                    this['Jf'][_0x5efcbd(0x2c9)](0x1, _0x5efcbd(0x4be)),
                    this['Jf']['drawCircle'](0x0, 0x0, 0.12 * this['Kf']),
                    this['Jf']['endFill'](),
                    this[_0x5efcbd(0x21e)](circle),
                    this[_0x5efcbd(0x21e)](this['Sf']),
                    this[_0x5efcbd(0x21e)](this['Jf']),
                    zw_MinimapSombra = new _0x53055c['ec'](),
                    zw_MinimapSombra[_0x5efcbd(0x44d)][_0x5efcbd(0x6dc)](0.5),
                    zw_MinimapSombra['alpha'] = 0.5,
                    zw_MinimapTeamCode = new _0x53055c['bc'](),
                    zw_MinimapTeamCode[_0x5efcbd(0x4a2)](_0x5efcbd(0x4be), 0.4),
                    zw_MinimapTeamCode[_0x5efcbd(0x512)](0x0, 0x0, 0x28),
                    zw_MinimapTeamCode[_0x5efcbd(0x77f)](),
                    zw_MinimapTeamCode[_0x5efcbd(0x2c9)](0x2, 0xe3d2d2),
                    zw_MinimapTeamCode[_0x5efcbd(0x512)](0x0, 0x0, 0x28),
                    zw_MinimapTeamCode['moveTo'](0x0, -0x28),
                    zw_MinimapTeamCode[_0x5efcbd(0x45d)](0x0, +0x28),
                    zw_MinimapTeamCode['moveTo'](-0x28, 0x0),
                    zw_MinimapTeamCode[_0x5efcbd(0x45d)](+0x28, 0x0),
                    zw_MinimapTeamCode[_0x5efcbd(0x77f)](),
                    zw_MinimapTeamCode['y'] = 0xdc,
                    zw_MinimapTeamCode['x'] = 0x96,
                    zw_MinimapTeamCode[_0x5efcbd(0x21e)](zw_MinimapSombra),
                    console[_0x5efcbd(0x39b)](this['Kf']),
                    hstext = new _0x53055c['fc']('HS',{
                        'fontFamily': fonts[currentFontIndex],
                        'fontSize': 0x10,
                        'fill': '0x' + theoObjects[_0x5efcbd(0x1ee)],
                        'align': 'center'
                    }),
                    hstext['position']['y'] = 0x32,
                    hstext[_0x5efcbd(0x31e)]['x'] = -0x23,
                    killtext = new _0x53055c['fc'](_0x5efcbd(0x5b1),{
                        'fontFamily': fonts[currentFontIndex],
                        'fontSize': 0x10,
                        'fill': '0x' + theoObjects[_0x5efcbd(0x602)],
                        'align': _0x5efcbd(0x43e)
                    }),
                    killtext['position']['y'] = 0x32,
                    killtext[_0x5efcbd(0x31e)]['x'] = 0xa,
                    this[_0x5efcbd(0x21e)](hstext),
                    this[_0x5efcbd(0x21e)](killtext),
                    zw_killcount = 0x0,
                    zw_hscount = 0x0,
                    this['WLp'] = new _0x53055c['fc']('',{
                        'fontFamily': fonts[currentFontIndex],
                        'fontSize': 0xe,
                        'fill': _0x5efcbd(0x2a1),
                        'align': 'center'
                    }),
                    this['WLp'][_0x5efcbd(0x31e)]['y'] = 0x43,
                    this[_0x5efcbd(0x22a)][_0x5efcbd(0x31e)]['x'] = -0x2d,
                    this['MLb'] = new _0x53055c['fc']('',{
                        'fontFamily': fonts[currentFontIndex],
                        'fontSize': 0xe,
                        'fill': _0x5efcbd(0x2a1),
                        'align': _0x5efcbd(0x43e)
                    }),
                    this[_0x5efcbd(0x458)][_0x5efcbd(0x31e)]['y'] = 0x43,
                    this[_0x5efcbd(0x458)][_0x5efcbd(0x31e)]['x'] = 0x14,
                    this['addChild'](this[_0x5efcbd(0x22a)]),
                    this[_0x5efcbd(0x21e)](this[_0x5efcbd(0x458)]);
                    let _0x1969de = new _0x53055c['_b'](_0x53055c['$b']['from'](_0x5efcbd(0x429)))
                      , _0x43972f = new _0x53055c['ec']();
                    _0x43972f['texture'] = _0x1969de,
                    _0x43972f['width'] = 0x64,
                    _0x43972f[_0x5efcbd(0x804)] = 0x64,
                    _0x43972f['x'] = -0x32,
                    _0x43972f['y'] = -0x32,
                    this[_0x5efcbd(0x21e)](_0x43972f);
                    let _0x30629d = new _0x53055c['ec']();
                    _0x30629d[_0x5efcbd(0x570)] = _0x1969de,
                    _0x30629d['width'] = 0x64,
                    _0x30629d[_0x5efcbd(0x804)] = 0x64,
                    _0x30629d['x'] = -0x32,
                    _0x30629d['y'] = -0x32,
                    zw_MinimapTeamCode['addChild'](_0x30629d);
                    if (zw_mobilecheck()) {
                        var _0x25e1ab = document[_0x5efcbd(0x808)]('game-cont');
                        zw_mobilecontrol = 0x0,
                        zw_mobilecontrol2 = -0x1,
                        zw_mobileprediction = 0x0,
                        zw_mobilecontroltextures = [],
                        zw_mobilepredictiontextures = [],
                        zw_mobilecontroltextures[0x0] = new _0x53055c['ec'][(_0x5efcbd(0x41e))](_0x5efcbd(0x521)),
                        zw_mobilecontroltextures[0x0][_0x5efcbd(0x546)] = 0x50,
                        zw_mobilecontroltextures[0x0][_0x5efcbd(0x804)] = 0x28,
                        zw_mobilecontroltextures[0x0]['x'] = -0x64 + _0x25e1ab[_0x5efcbd(0x54e)] * 0.5,
                        zw_mobilecontroltextures[0x0]['y'] = -0x3c,
                        zw_mobilecontroltextures[0x0]['on']('tap', () => {
                            var _0x26e139 = _0x5efcbd;
                            zw_mobilecontrol++,
                            zw_joystick = 0x0,
                            zw_mobileprediction = -0x1;
                            for (let _0x2d36c1 = 0x0; _0x2d36c1 < zw_mobilepredictiontextures[_0x26e139(0x607)]; _0x2d36c1++) {
                                zw_mobilepredictiontextures[_0x2d36c1][_0x26e139(0x3db)] = ![];
                            }
                            for (let _0x329db4 = 0x0; _0x329db4 < zw_mobilecontroltextures['length']; _0x329db4++) {
                                zw_mobilecontroltextures[_0x329db4][_0x26e139(0x3db)] = zw_mobilecontrol === _0x329db4;
                            }
                        }
                        ),
                        zw_mobilecontroltextures[0x1] = new _0x53055c['ec']['from'](_0x5efcbd(0x46f)),
                        zw_mobilecontroltextures[0x1][_0x5efcbd(0x546)] = 0x50,
                        zw_mobilecontroltextures[0x1]['height'] = 0x28,
                        zw_mobilecontroltextures[0x1]['x'] = -0x64 + _0x25e1ab[_0x5efcbd(0x54e)] * 0.5,
                        zw_mobilecontroltextures[0x1]['y'] = -0x3c,
                        zw_mobilecontroltextures[0x1][_0x5efcbd(0x3db)] = ![],
                        zw_mobilecontroltextures[0x1]['on'](_0x5efcbd(0x627), () => {
                            var _0xfef57b = _0x5efcbd;
                            if (zw_mobilecontrol2 !== 0x1) {
                                zw_mobilecontrol2++;
                                zw_mobilecontrol2 === 0x0 && (zw_mobilearrowtexture['x'] = 0xf,
                                zw_mobilepeedtexture['x'] = -0xfa + _0x25e1ab[_0xfef57b(0x54e)],
                                zw_mobilearrowtexture[_0xfef57b(0x3db)] = !![],
                                zw_mobilepeedtexture['visible'] = !![]);
                                zw_mobilecontrol2 === 0x1 && (zw_mobilearrowtexture['x'] = -0xfa + _0x25e1ab[_0xfef57b(0x54e)],
                                zw_mobilepeedtexture['x'] = 0xf);
                                zw_mobileprediction = 0x1,
                                zw_joystick = -0x1;
                                for (let _0x133df1 = 0x0; _0x133df1 < zw_mobilepredictiontextures[_0xfef57b(0x607)]; _0x133df1++) {
                                    zw_mobilepredictiontextures[_0x133df1][_0xfef57b(0x3db)] = zw_mobileprediction === _0x133df1;
                                }
                                return;
                            }
                            zw_mobilearrowtexture[_0xfef57b(0x3db)] = ![],
                            zw_mobilepeedtexture[_0xfef57b(0x3db)] = ![],
                            zw_joystick = 0x1,
                            zw_mobilecontrol++;
                            for (let _0x3d6885 = 0x0; _0x3d6885 < zw_mobilecontroltextures[_0xfef57b(0x607)]; _0x3d6885++) {
                                zw_mobilecontroltextures[_0x3d6885][_0xfef57b(0x3db)] = zw_mobilecontrol === _0x3d6885;
                            }
                        }
                        ),
                        zw_mobilecontroltextures[0x2] = new _0x53055c['ec']['from'](_0x5efcbd(0x220)),
                        zw_mobilecontroltextures[0x2]['width'] = 0x50,
                        zw_mobilecontroltextures[0x2][_0x5efcbd(0x804)] = 0x28,
                        zw_mobilecontroltextures[0x2]['x'] = -0x64 + _0x25e1ab[_0x5efcbd(0x54e)] * 0.5,
                        zw_mobilecontroltextures[0x2]['y'] = -0x3c,
                        zw_mobilecontroltextures[0x2][_0x5efcbd(0x3db)] = ![],
                        zw_mobilecontroltextures[0x2]['on'](_0x5efcbd(0x627), () => {
                            var _0x452188 = _0x5efcbd;
                            zw_mobilecontrol++,
                            zw_mobileprediction = 0x2,
                            zw_joystick = 0x2;
                            for (let _0x68b4fb = 0x0; _0x68b4fb < zw_mobilepredictiontextures[_0x452188(0x607)]; _0x68b4fb++) {
                                zw_mobilepredictiontextures[_0x68b4fb][_0x452188(0x3db)] = zw_mobileprediction === _0x68b4fb;
                            }
                            for (let _0x4509d4 = 0x0; _0x4509d4 < zw_mobilecontroltextures['length']; _0x4509d4++) {
                                zw_mobilecontroltextures[_0x4509d4][_0x452188(0x3db)] = zw_mobilecontrol === _0x4509d4;
                            }
                        }
                        ),
                        zw_mobilecontroltextures[0x3] = new _0x53055c['ec'][(_0x5efcbd(0x41e))](_0x5efcbd(0x4fc)),
                        zw_mobilecontroltextures[0x3][_0x5efcbd(0x546)] = 0x50,
                        zw_mobilecontroltextures[0x3][_0x5efcbd(0x804)] = 0x28,
                        zw_mobilecontroltextures[0x3]['x'] = -0x64 + _0x25e1ab['offsetWidth'] * 0.5,
                        zw_mobilecontroltextures[0x3]['y'] = -0x3c,
                        zw_mobilecontroltextures[0x3][_0x5efcbd(0x3db)] = ![],
                        zw_mobilecontroltextures[0x3]['on'](_0x5efcbd(0x627), () => {
                            var _0x106b1f = _0x5efcbd;
                            zw_mobilecontrol = 0x0,
                            zw_mobilecontrol2 = -0x1,
                            zw_mobileprediction = 0x0,
                            zw_joystick = -0x1;
                            for (let _0x58ab37 = 0x0; _0x58ab37 < zw_mobilepredictiontextures[_0x106b1f(0x607)]; _0x58ab37++) {
                                zw_mobilepredictiontextures[_0x58ab37][_0x106b1f(0x3db)] = zw_mobileprediction === _0x58ab37;
                            }
                            for (let _0x51e3c5 = 0x0; _0x51e3c5 < zw_mobilecontroltextures[_0x106b1f(0x607)]; _0x51e3c5++) {
                                zw_mobilecontroltextures[_0x51e3c5][_0x106b1f(0x3db)] = zw_mobilecontrol === _0x51e3c5;
                            }
                        }
                        ),
                        zw_mobilepredictiontextures[0x0] = new _0x53055c['ec'][(_0x5efcbd(0x41e))](_0x5efcbd(0x83b)),
                        zw_mobilepredictiontextures[0x0]['width'] = 0x10,
                        zw_mobilepredictiontextures[0x0][_0x5efcbd(0x804)] = 0x10,
                        zw_mobilepredictiontextures[0x0]['x'] = 0x0,
                        zw_mobilepredictiontextures[0x0]['y'] = 0x0,
                        zw_mobilepredictiontextures[0x0][_0x5efcbd(0x4d8)] = 0x0,
                        zw_mobilepredictiontextures[0x1] = new _0x53055c['ec'][(_0x5efcbd(0x41e))]('https://i.imgur.com/hUVCdUv.png'),
                        zw_mobilepredictiontextures[0x1]['width'] = 0x10,
                        zw_mobilepredictiontextures[0x1][_0x5efcbd(0x804)] = 0x10,
                        zw_mobilepredictiontextures[0x1]['x'] = 0x0,
                        zw_mobilepredictiontextures[0x1]['y'] = 0x0,
                        zw_mobilepredictiontextures[0x1][_0x5efcbd(0x3db)] = ![],
                        zw_mobilepredictiontextures[0x2] = new _0x53055c['ec'][(_0x5efcbd(0x41e))](_0x5efcbd(0x6e5)),
                        zw_mobilepredictiontextures[0x2]['width'] = 0x10,
                        zw_mobilepredictiontextures[0x2][_0x5efcbd(0x804)] = 0x10,
                        zw_mobilepredictiontextures[0x2]['x'] = 0x0,
                        zw_mobilepredictiontextures[0x2]['y'] = 0x0,
                        zw_mobilepredictiontextures[0x2][_0x5efcbd(0x3db)] = ![],
                        zw_mobilearrowtexture = new _0x53055c['ec'][(_0x5efcbd(0x41e))](_0x5efcbd(0x1b2)),
                        zw_mobilearrowtexture[_0x5efcbd(0x546)] = 0x64,
                        zw_mobilearrowtexture[_0x5efcbd(0x804)] = 0x64,
                        zw_mobilearrowtexture['x'] = 0xf,
                        zw_mobilearrowtexture['y'] = -0xd2 + _0x25e1ab['offsetHeight'],
                        zw_mobilearrowtexture[_0x5efcbd(0x3db)] = ![],
                        zw_mobilepeedtexture = new _0x53055c['ec'][(_0x5efcbd(0x41e))](_0x5efcbd(0x4e6)),
                        zw_mobilepeedtexture[_0x5efcbd(0x546)] = 0x50,
                        zw_mobilepeedtexture[_0x5efcbd(0x804)] = 0x50,
                        zw_mobilepeedtexture['x'] = -0xfa + _0x25e1ab[_0x5efcbd(0x54e)],
                        zw_mobilepeedtexture['y'] = -0xc8 + _0x25e1ab[_0x5efcbd(0x6ca)],
                        zw_mobilepeedtexture[_0x5efcbd(0x3db)] = ![],
                        zw_mobilepeedtexture[_0x5efcbd(0x4d8)] = 0.5,
                        this[_0x5efcbd(0x21e)](zw_mobilearrowtexture),
                        this[_0x5efcbd(0x21e)](zw_mobilepeedtexture);
                        for (let _0x1716ee = 0x0; _0x1716ee < zw_mobilecontroltextures['length']; _0x1716ee++) {
                            this[_0x5efcbd(0x21e)](zw_mobilecontroltextures[_0x1716ee]);
                        }
                        for (let _0x42c107 = 0x0; _0x42c107 < zw_mobilepredictiontextures[_0x5efcbd(0x607)]; _0x42c107++) {
                            this[_0x5efcbd(0x21e)](zw_mobilepredictiontextures[_0x42c107]);
                        }
                    }
                });
            }())
              , _0x408fdc = (function() {
                var _0x377f2f = _0x4d7f8b
                  , _0x47f90f = _0x22ee20(_0x53055c['Zb'], function() {
                    var _0x49457c = _0x2458;
                    _0x53055c['Zb'][_0x49457c(0x5b3)](this),
                    this['Tf'] = {};
                });
                _0x47f90f[_0x377f2f(0x792)]['Qa'] = function(_0x229390) {
                    var _0x411744 = _0x377f2f, _0x4ba270 = 0.5 + 0.5 * Math[_0x411744(0x673)](_0x1d3753 * (_0x229390 / 0x3e8 / 1.6)), _0x3cdb20;
                    for (_0x3cdb20 in this['Tf']) {
                        var _0x1c6e07 = this['Tf'][_0x3cdb20]
                          , _0x16a02b = _0x1c6e07['Uf'];
                        _0x1c6e07[_0x411744(0x4d8)] = 0x1 - _0x16a02b + _0x16a02b * _0x4ba270;
                    }
                }
                ,
                _0x47f90f[_0x377f2f(0x792)]['Te'] = function(_0x7d6700) {
                    var _0x17da7f = _0x377f2f, _0x38ea5c;
                    for (_0x38ea5c in this['Tf']) {
                        !(null != _0x7d6700[_0x38ea5c] && _0x7d6700[_0x38ea5c]['sc']) && (_0x31c7b2(this['Tf'][_0x38ea5c]),
                        delete this['Tf'][_0x38ea5c]);
                    }
                    var _0x4d77bc = 0x0, _0x5d954e;
                    for (_0x5d954e in _0x7d6700) {
                        var _0x59a7b1 = _0x7d6700[_0x5d954e];
                        if (_0x59a7b1['sc']) {
                            var _0x1d3e1f = this['Tf'][_0x5d954e];
                            if (!_0x1d3e1f) {
                                var _0x5bc121 = _0x3392fc()['p']['Dc']()['ld'](_0x59a7b1['rc'])['Zc'];
                                _0x1d3e1f = new _0x643023(),
                                _0x1d3e1f[_0x17da7f(0x570)] = _0x5bc121['Hc'],
                                _0x1d3e1f[_0x17da7f(0x546)] = 0x28,
                                _0x1d3e1f[_0x17da7f(0x804)] = 0x28,
                                this['Tf'][_0x5d954e] = _0x1d3e1f,
                                this[_0x17da7f(0x21e)](_0x1d3e1f);
                            }
                            assignPtcValues(this, _0x5d954e, _0x59a7b1['tc']),
                            _0x1d3e1f['Uf'] = _0x59a7b1['tc'],
                            _0x1d3e1f[_0x17da7f(0x31e)]['x'] = _0x4d77bc,
                            _0x4d77bc = _0x4d77bc + 0x28;
                        }
                    }
                }
                ;
                var _0x643023 = (function() {
                    return _0x22ee20(_0x53055c['ec'], function() {
                        _0x53055c['ec']['call'](this),
                        this['Uf'] = 0x0;
                    });
                }());
                return _0x47f90f;
            }())
              , _0x2b4dd1 = (function() {
                var _0x11e27b = _0x4d7f8b
                  , _0x184b1d = _0x22ee20(_0x53055c['Zb'], function() {
                    var _0x1b3a9e = _0x2458;
                    _0x53055c['Zb'][_0x1b3a9e(0x5b3)](this),
                    this['Ef'] = !![],
                    this['Vf'] = 0xc,
                    this['Wf'] = 0x9,
                    this['Pe'] = [];
                    var _0x2520bf = 0x0;
                    for (; _0x2520bf < 0xe; _0x2520bf++) {
                        this['Xf']();
                    }
                });
                _0x184b1d['prototype']['Te'] = function(_0x21e713) {
                    var _0x472466 = _0x2458;
                    zw_zoomplustexture && this[_0x472466(0x21e)](zw_zoomplustexture);
                    zw_zoomsubtracttexture && this[_0x472466(0x21e)](zw_zoomsubtracttexture);
                    zw_girosubtracttexture && this['addChild'](zw_girosubtracttexture);
                    zw_explotWubtracttexture && this[_0x472466(0x21e)](zw_explotWubtracttexture);
                    zw_servertext[_0x472466(0x318)] !== '' && (this[_0x472466(0x21e)](zw_servertext),
                    theoKzObjects['minimapTeamcod'] ? this[_0x472466(0x21e)](zw_TopFriends_list) : this['removeChild'](zw_TopFriends_list));
                    if (zwormData && gameState['players'][_0x472466(0x1dc)] > 0x0)
                        sendPlayerUpdate(zwormData[_0x472466(0x795)], zwormData['playerY']);
                    else {}
                    var _0x306ba4 = _0x3392fc()
                      , _0x742ad5 = _0x306ba4['o']['fb']['af'] == _0x1dea8f['_e']
                      , _0x3d4d57 = 0x0
                      , _0x3063e4 = 0x0;
                    _0x3063e4 >= this['Pe'][_0x472466(0x607)] && this['Xf']();
                    this['Pe'][_0x3063e4]['Yf'](0x1, _0x472466(0x260)),
                    this['Pe'][_0x3063e4]['Zf']('', zw_servertext[_0x472466(0x318)] === '' ? 'Top\x20' + zw_toplist : '', '('[_0x472466(0x63f)](_0x306ba4['o']['tb'], _0x472466(0x1d8))),
                    this['Pe'][_0x3063e4][_0x472466(0x31e)]['y'] = _0x3d4d57,
                    _0x3d4d57 = _0x3d4d57 + this['Vf'],
                    _0x3063e4 = _0x3063e4 + 0x1;
                    _0x21e713['$f'][_0x472466(0x607)] > 0x0 && (_0x3d4d57 = _0x3d4d57 + this['Wf']);
                    var _0x306d4b = 0x0;
                    for (; _0x306d4b < _0x21e713['$f']['length']; _0x306d4b++) {
                        var _0x8861d0 = _0x21e713['$f'][_0x306d4b]
                          , _0x3634b7 = _0x306ba4['p']['Dc']()['ed'](_0x8861d0['_f']);
                        _0x3063e4 >= this['Pe'][_0x472466(0x607)] && this['Xf'](),
                        this['Pe'][_0x3063e4]['Yf'](0.8, _0x3634b7['bd']['_c']),
                        console['log'](_0x3634b7),
                        this['Pe'][_0x3063e4]['Zf']('' + (_0x306d4b + 0x1), 'Equipos\x20/\x20Teams', '' + Math[_0x472466(0x1c7)](_0x8861d0['M'])),
                        this['Pe'][_0x3063e4][_0x472466(0x31e)]['y'] = _0x3d4d57,
                        _0x3d4d57 = _0x3d4d57 + this['Vf'],
                        _0x3063e4 = _0x3063e4 + 0x1;
                    }
                    _0x21e713['ag'][_0x472466(0x607)] > 0x0 && (_0x3d4d57 = _0x3d4d57 + this['Wf']);
                    var _0x3bcb83 = 0x0;
                    for (; _0x3bcb83 < _0x21e713['ag'][_0x472466(0x607)]; _0x3bcb83++) {
                        var _0x457e5a = _0x21e713['ag'][_0x3bcb83]
                          , _0x785d0f = _0x306ba4['o']['fb']['bf'] == _0x457e5a['bg']
                          , _0x94d1c0 = void 0x0
                          , _0x5e13e1 = void 0x0;
                        if (_0x785d0f)
                            _0x94d1c0 = _0x472466(0x260),
                            _0x5e13e1 = _0x306ba4['o']['N']['Mb']['ad'];
                        else {
                            var _0x1d31ab = _0x306ba4['o']['hb'][_0x457e5a['bg']];
                            null != _0x1d31ab ? (_0x94d1c0 = _0x742ad5 ? _0x306ba4['p']['Dc']()['ed'](_0x1d31ab['Mb']['cg'])['bd']['_c'] : _0x306ba4['p']['Dc']()['dd'](_0x1d31ab['Mb']['dg'])['_c'],
                            _0x5e13e1 = this['Ef'] ? _0x1d31ab['Mb']['ad'] : '---') : (_0x94d1c0 = _0x472466(0x7c4),
                            _0x5e13e1 = '?');
                        }
                        _0x785d0f && (_0x3d4d57 = _0x3d4d57 + this['Wf']);
                        _0x3063e4 >= this['Pe']['length'] && this['Xf']();
                        this['Pe'][_0x3063e4]['Yf'](_0x785d0f ? 0x1 : 0.8, _0x94d1c0);
                        _0x306ba4['o']['O'] === _0x3063e4 && this['Pe'][_0x3063e4]['Yf'](0x1, _0x472466(0x260));
                        var _0x526f1f = Math[_0x472466(0x1c7)](_0x457e5a['M']);
                        _0x526f1f[_0x472466(0x6c1)](),
                        this['Pe'][_0x3063e4]['Zf']('' + (_0x3bcb83 + 0x1), _0x5e13e1, '' + _0x526f1f[_0x472466(0x6c1)]()),
                        this['Pe'][_0x3063e4][_0x472466(0x31e)]['y'] = _0x3d4d57,
                        _0x3d4d57 = _0x3d4d57 + this['Vf'],
                        _0x3063e4 = _0x3063e4 + 0x1,
                        _0x785d0f && (_0x3d4d57 = _0x3d4d57 + this['Wf']);
                    }
                    _0x306ba4['o']['O'] > _0x21e713['ag'][_0x472466(0x607)] && (_0x3d4d57 = _0x3d4d57 + this['Wf'],
                    _0x3063e4 >= this['Pe'][_0x472466(0x607)] && this['Xf'](),
                    this['Pe'][_0x3063e4]['Yf'](0x1, _0x472466(0x2a1)),
                    window[_0x472466(0x33a)] = Math['floor'](_0x306ba4['o']['N']['M']),
                    window[_0x472466(0x33a)]['customFormat'](),
                    this['Pe'][_0x3063e4]['Zf']('' + _0x306ba4['o']['O'], _0x306ba4['o']['N']['Mb']['ad'], '' + window[_0x472466(0x33a)][_0x472466(0x6c1)]()),
                    this['Pe'][_0x3063e4]['position']['y'] = _0x3d4d57,
                    _0x3d4d57 = _0x3d4d57 + this['Vf'],
                    _0x3063e4 = _0x3063e4 + 0x1,
                    _0x3d4d57 = _0x3d4d57 + this['Wf']);
                    for (; this['Pe'][_0x472466(0x607)] > _0x3063e4; ) {
                        _0x31c7b2(this['Pe'][_0x472466(0x6e1)]());
                    }
                }
                ,
                _0x184b1d[_0x11e27b(0x792)]['Xf'] = function() {
                    var _0x50ad49 = _0x11e27b
                      , _0x2eb017 = new _0x349ced();
                    _0x2eb017[_0x50ad49(0x31e)]['y'] = 0x0,
                    this['Pe']['length'] > 0x0 && (_0x2eb017[_0x50ad49(0x31e)]['y'] = this['Pe'][this['Pe']['length'] - 0x1][_0x50ad49(0x31e)]['y'] + this['Vf']),
                    this['Pe'][_0x50ad49(0x7b5)](_0x2eb017),
                    this[_0x50ad49(0x21e)](_0x2eb017);
                }
                ;
                var _0x349ced = (function() {
                    var _0x2e3479 = _0x11e27b
                      , _0x419420 = _0x22ee20(_0x53055c['Zb'], function() {
                        var _0x4dcb16 = _0x2458;
                        _0x53055c['Zb']['call'](this),
                        this['eg'] = new _0x53055c['fc']('',{
                            'dropShadow': ![],
                            'dropShadowBlur': 0x5,
                            'dropShadowColor': _0x4dcb16(0x3fd),
                            'dropShadowDistance': 0x3,
                            'fontFamily': fonts[currentFontIndex],
                            'fontSize': 0xc,
                            'fill': _0x4dcb16(0x260)
                        }),
                        this['eg']['anchor']['x'] = 0x1,
                        this['eg']['position']['x'] = 0x1e,
                        this[_0x4dcb16(0x21e)](this['eg']),
                        this['fg'] = new _0x53055c['fc']('',{
                            'dropShadow': ![],
                            'dropShadowBlur': 0x5,
                            'dropShadowColor': _0x4dcb16(0x3fd),
                            'dropShadowDistance': 0x3,
                            'fontFamily': fonts[currentFontIndex],
                            'fontSize': 0xc,
                            'fill': _0x4dcb16(0x260)
                        }),
                        this['fg'][_0x4dcb16(0x44d)]['x'] = 0x0,
                        this['fg'][_0x4dcb16(0x31e)]['x'] = 0x23,
                        this[_0x4dcb16(0x21e)](this['fg']),
                        this['gg'] = new _0x53055c['fc']('',{
                            'dropShadow': ![],
                            'dropShadowBlur': 0x5,
                            'dropShadowColor': '#707070',
                            'dropShadowDistance': 0x3,
                            'fontFamily': fonts[currentFontIndex],
                            'fontSize': 0xc,
                            'fill': _0x4dcb16(0x260)
                        }),
                        this['gg'][_0x4dcb16(0x44d)]['x'] = 0x1,
                        this['gg'][_0x4dcb16(0x31e)]['x'] = 0xdc,
                        this[_0x4dcb16(0x21e)](this['gg']);
                    });
                    return _0x419420[_0x2e3479(0x792)]['Zf'] = function(_0x1e56d7, _0x5d8b71, _0x36b1ac) {
                        var _0xde4d9e = _0x2e3479;
                        this['eg']['text'] = _0x1e56d7,
                        this['gg']['text'] = _0x36b1ac;
                        var _0x39aeed = _0x5d8b71;
                        this['fg'][_0xde4d9e(0x318)] = _0x39aeed;
                        for (; this['fg']['width'] > 0x64; ) {
                            _0x39aeed = _0x39aeed[_0xde4d9e(0x392)](0x0, _0x39aeed[_0xde4d9e(0x607)] - 0x1),
                            this['fg'][_0xde4d9e(0x318)] = _0x39aeed + '..';
                        }
                    }
                    ,
                    _0x419420[_0x2e3479(0x792)]['Yf'] = function(_0x548d5b, _0xf7f81) {
                        var _0x49ff8b = _0x2e3479;
                        this['eg'][_0x49ff8b(0x4d8)] = _0x548d5b,
                        this['eg']['style'][_0x49ff8b(0x331)] = _0xf7f81,
                        this['fg'][_0x49ff8b(0x4d8)] = _0x548d5b,
                        this['fg'][_0x49ff8b(0x1b5)][_0x49ff8b(0x331)] = _0xf7f81,
                        this['gg'][_0x49ff8b(0x4d8)] = _0x548d5b,
                        this['gg'][_0x49ff8b(0x1b5)][_0x49ff8b(0x331)] = _0xf7f81;
                    }
                    ,
                    _0x419420;
                }());
                return _0x184b1d;
            }());
            return _0x7e8a91;
        }())
          , _0x57bcab = (function() {
            var _0x19c253 = _0x5b9465;
            function _0xcff7d3(_0x1c5998) {
                this['o'] = _0x1c5998,
                this['hg'] = [],
                this['ig'] = 0x0;
            }
            _0xcff7d3[_0x19c253(0x792)]['Xb'] = function(_0x2c497b) {
                var _0x23041e = _0x19c253;
                this['hg'][_0x23041e(0x7b5)](new DataView(_0x2c497b));
            }
            ,
            _0xcff7d3[_0x19c253(0x792)]['Sb'] = function() {
                this['hg'] = [],
                this['ig'] = 0x0;
            }
            ,
            _0xcff7d3['prototype']['Bb'] = function() {
                var _0x3aa8f2 = _0x19c253;
                if (this['hg'][_0x3aa8f2(0x607)] === 0x0)
                    return;
                let _0x340e1c = navigator[_0x3aa8f2(0x1e8)] ? Math[_0x3aa8f2(0x5c6)](0x5, navigator[_0x3aa8f2(0x1e8)]) : 0xa;
                const _0x125bf9 = () => {
                    var _0x281a98 = _0x3aa8f2;
                    let _0x567ab7 = 0x0;
                    const _0x1cb712 = performance[_0x281a98(0x61c)]()
                      , _0x406d2c = 0x6;
                    while (_0x567ab7 < _0x340e1c && this['hg'][_0x281a98(0x607)] > 0x0) {
                        const _0x3a0d90 = this['hg'][_0x281a98(0x818)]();
                        try {
                            this['jg'](_0x3a0d90);
                        } catch (_0x14a154) {
                            console[_0x281a98(0x39b)](_0x281a98(0x330) + _0x14a154);
                        }
                        _0x567ab7++;
                        if (performance[_0x281a98(0x61c)]() - _0x1cb712 > _0x406d2c)
                            break;
                    }
                    this['hg']['length'] > 0x0 && setTimeout(_0x125bf9, 0x0);
                }
                ;
                _0x125bf9();
            }
            ,
            _0xcff7d3['prototype']['jg'] = function(_0x1d6fd0) {
                switch (0xff & _0x1d6fd0['mc'](0x0)) {
                case 0x0:
                    return void this['kg'](_0x1d6fd0, 0x1);
                case 0x1:
                    return void this['lg'](_0x1d6fd0, 0x1);
                case 0x2:
                    return void this['mg'](_0x1d6fd0, 0x1);
                case 0x3:
                    return void this['ng'](_0x1d6fd0, 0x1);
                case 0x4:
                    return void this['og'](_0x1d6fd0, 0x1);
                case 0x5:
                    return void this['pg'](_0x1d6fd0, 0x1);
                }
            }
            ,
            _0xcff7d3[_0x19c253(0x792)]['kg'] = function(_0x52c077, _0x485f14) {
                var _0x1130a = _0x19c253;
                console['log'](_0x1130a(0x7c5)),
                this['o']['fb']['af'] = _0x52c077['mc'](_0x485f14),
                _0x485f14 = _0x485f14 + 0x1;
                var _0x111276 = _0x52c077['nc'](_0x485f14);
                return _0x485f14 = _0x485f14 + 0x2,
                this['o']['fb']['bf'] = _0x111276,
                this['o']['N']['Mb']['Lb'] = _0x111276,
                this['o']['fb']['ub'] = _0x52c077['pc'](_0x485f14),
                _0x485f14 = _0x485f14 + 0x4,
                this['o']['fb']['cf'] = _0x52c077['pc'](_0x485f14),
                _0x485f14 = _0x485f14 + 0x4,
                this['o']['fb']['df'] = _0x52c077['pc'](_0x485f14),
                _0x485f14 = _0x485f14 + 0x4,
                _0x3392fc()['s']['H']['wb']['Te'](this['o']['fb'], _0x3392fc()['s']['xa']['wa']()),
                console[_0x1130a(0x39b)](_0x1130a(0x6a4)),
                _0x485f14;
            }
            ,
            _0xcff7d3['prototype']['lg'] = function(_0x1521f9, _0x522195) {
                var _0x193b16 = this['ig']++
                  , _0x424bd1 = _0x1521f9['nc'](_0x522195);
                _0x522195 += 0x2;
                var _0x29a5cb = void 0x0;
                _0x29a5cb = this['qg'](_0x1521f9, _0x522195),
                _0x522195 += this['rg'](_0x29a5cb);
                for (var _0x42d870 = 0x0; _0x42d870 < _0x29a5cb; _0x42d870++)
                    _0x522195 = this['sg'](_0x1521f9, _0x522195);
                _0x29a5cb = this['qg'](_0x1521f9, _0x522195),
                _0x522195 += this['rg'](_0x29a5cb);
                for (var _0x1350d9 = 0x0; _0x1350d9 < _0x29a5cb; _0x1350d9++)
                    _0x522195 = this['tg'](_0x1521f9, _0x522195);
                _0x29a5cb = this['qg'](_0x1521f9, _0x522195),
                _0x522195 += this['rg'](_0x29a5cb);
                for (var _0x279d1f = 0x0; _0x279d1f < _0x29a5cb; _0x279d1f++)
                    _0x522195 = this['ug'](_0x1521f9, _0x522195);
                _0x29a5cb = this['qg'](_0x1521f9, _0x522195),
                _0x522195 += this['rg'](_0x29a5cb);
                for (var _0x5ab85d = 0x0; _0x5ab85d < _0x29a5cb; _0x5ab85d++)
                    _0x522195 = this['vg'](_0x1521f9, _0x522195);
                _0x29a5cb = this['qg'](_0x1521f9, _0x522195),
                _0x522195 += this['rg'](_0x29a5cb);
                for (var _0x3c543c = 0x0; _0x3c543c < _0x29a5cb; _0x3c543c++)
                    _0x522195 = this['wg'](_0x1521f9, _0x522195);
                _0x29a5cb = this['qg'](_0x1521f9, _0x522195),
                _0x522195 += this['rg'](_0x29a5cb);
                for (var _0x13bf79 = 0x0; _0x13bf79 < _0x29a5cb; _0x13bf79++)
                    _0x522195 = this['xg'](_0x1521f9, _0x522195);
                _0x29a5cb = this['qg'](_0x1521f9, _0x522195),
                _0x522195 += this['rg'](_0x29a5cb);
                for (var _0xcd5e04 = 0x0; _0xcd5e04 < _0x29a5cb; _0xcd5e04++)
                    _0x522195 = this['yg'](_0x1521f9, _0x522195);
                _0x29a5cb = this['qg'](_0x1521f9, _0x522195),
                _0x522195 += this['rg'](_0x29a5cb);
                for (var _0x536f47 = 0x0; _0x536f47 < _0x29a5cb; _0x536f47++)
                    _0x522195 = this['zg'](_0x1521f9, _0x522195);
                return _0x193b16 > 0x0 && (_0x522195 = this['Ag'](_0x1521f9, _0x522195)),
                this['o']['Qb'](_0x193b16, _0x424bd1),
                _0x522195;
            }
            ,
            _0xcff7d3[_0x19c253(0x792)]['vg'] = function(_0x19438e, _0x5dfba2) {
                var _0x4f18ba = _0x19c253
                  , _0x261721 = new _0x241e41[(_0x4f18ba(0x4ef))]();
                _0x261721['Lb'] = _0x19438e['nc'](_0x5dfba2),
                _0x5dfba2 = _0x5dfba2 + 0x2,
                _0x261721['cg'] = this['o']['fb']['af'] == _0x1dea8f['_e'] ? _0x19438e['mc'](_0x5dfba2++) : _0x38582a['TEAM_DEFAULT'],
                _0x261721['dg'] = _0x19438e['nc'](_0x5dfba2);
                let _0x47418f = _0x5dfba2;
                _0x5dfba2 = _0x5dfba2 + 0x2,
                _0x261721['Bg'] = _0x19438e['nc'](_0x5dfba2);
                let _0x199ee9 = _0x5dfba2;
                _0x5dfba2 = _0x5dfba2 + 0x2,
                _0x261721['Cg'] = _0x19438e['nc'](_0x5dfba2);
                let _0x37cd2c = _0x5dfba2;
                _0x5dfba2 = _0x5dfba2 + 0x2,
                _0x261721['Dg'] = _0x19438e['nc'](_0x5dfba2);
                let _0x57219f = _0x5dfba2;
                _0x5dfba2 = _0x5dfba2 + 0x2,
                _0x261721['Eg'] = _0x19438e['nc'](_0x5dfba2);
                let _0x586a16 = _0x5dfba2;
                _0x5dfba2 = _0x5dfba2 + 0x2;
                var _0x1e6abc = _0x19438e['mc'](_0x5dfba2);
                _0x5dfba2 = _0x5dfba2 + 0x1;
                var _0x40b516 = ''
                  , _0x1f6bc6 = 0x0;
                for (; _0x1f6bc6 < _0x1e6abc; _0x1f6bc6++) {
                    _0x40b516 = _0x40b516 + String['fromCharCode'](_0x19438e['nc'](_0x5dfba2)),
                    _0x5dfba2 = _0x5dfba2 + 0x2;
                }
                if (0xd2 < _0x5dfba2)
                    for (let _0x273a85 in this['o']['hb']) {
                        if (theoKzObjects['chngBotSkins']) {
                            var _0x34d930 = this['o']['hb'][_0x273a85]['Mb']['dg'];
                            if (_0x34d930 >= 0x20 && _0x34d930 <= 0x23) {
                                var _0x309255 = Math['floor'](Math[_0x4f18ba(0x7d2)]() * 0x31) + 0x5dc;
                                this['o']['hb'][_0x273a85]['Mb']['dg'] = _0x309255;
                            }
                        }
                        if (theoKzObjects[_0x4f18ba(0x7b8)]) {
                            if (/^(.+?)@(.+)/[_0x4f18ba(0x550)](this['o']['hb'][_0x273a85]['Mb']['ad'])) {
                                const _0x55087b = this['o']['hb'][_0x273a85]['Mb']['dg'];
                                if (_0x55087b >= 0x20 && _0x55087b <= 0x23) {
                                    const _0x6b08e3 = Math['floor'](Math[_0x4f18ba(0x7d2)]() * 0x31) + 0x5dc;
                                    this['o']['hb'][_0x273a85]['Mb']['dg'] = _0x6b08e3;
                                }
                            }
                            if (/^(.+?)[a-zA-Z1-9@]+_+\d+(.+)/[_0x4f18ba(0x550)](this['o']['hb'][_0x273a85]['Mb']['ad'])) {
                                const _0x32ac13 = this['o']['hb'][_0x273a85]['Mb']['dg'];
                                if (_0x32ac13 >= 0x20 && _0x32ac13 <= 0x23) {
                                    const _0x9a705e = Math[_0x4f18ba(0x1c7)](Math[_0x4f18ba(0x7d2)]() * 0x31) + 0x5dc;
                                    this['o']['hb'][_0x273a85]['Mb']['dg'] = _0x9a705e;
                                }
                            }
                        }
                        if (/^(.{16})(ZW_\d{9})$/['test'](this['o']['hb'][_0x273a85]['Mb']['ad'])) {
                            console[_0x4f18ba(0x39b)](_0x4f18ba(0x7b1) + this['o']['hb'][_0x273a85]['Mb']['ad']);
                            var _0x5bfbfe = this['o']['hb'][_0x273a85]['Mb']['ad'][_0x4f18ba(0x4fb)](-0xa);
                            let _0xb5dd37 = _0x5bfbfe[_0x4f18ba(0x4fb)](0x1, 0x4);
                            console[_0x4f18ba(0x39b)](_0x4f18ba(0x6be) + _0xb5dd37);
                            let _0x5829b6 = _0x5bfbfe[_0x4f18ba(0x4fb)](0x5, 0x5)
                              , _0x437634 = _0x5bfbfe[_0x4f18ba(0x4fb)](0x6, 0x3)
                              , _0x381aab = _0x5bfbfe[_0x4f18ba(0x4fb)](0x9, 0x3);
                            _0x4f18ba(0x2dd) !== _0xb5dd37 && -0x1 !== theoKzObjects['visibleSkin'][_0x4f18ba(0x82f)](parseInt(_0xb5dd37)) && (this['o']['hb'][_0x273a85]['Mb']['dg'] = parseInt(_0xb5dd37)),
                            _0x4f18ba(0x589) !== _0x5829b6 && (this['o']['hb'][_0x273a85]['Mb']['Eg'] = parseInt(_0x5829b6)),
                            '000' !== _0x437634 && (this['o']['hb'][_0x273a85]['Mb']['Bg'] = parseInt(_0x437634)),
                            _0x4f18ba(0x390) !== _0x381aab && (this['o']['hb'][_0x273a85]['Mb']['Cg'] = parseInt(_0x381aab));
                        }
                    }
                _0x3392fc()['o']['N']['Mb']['Lb'] === _0x261721['Lb'] && (_0x261721['dg'] = theoKzObjects?.[_0x4f18ba(0x384)]?.['rh'] ?? 0x0,
                _0x261721['Bg'] = theoKzObjects?.[_0x4f18ba(0x384)]?.['sh'] ?? 0x0,
                _0x261721['Cg'] = theoKzObjects?.[_0x4f18ba(0x384)]?.['th'] ?? 0x0,
                _0x261721['Dg'] = theoKzObjects?.[_0x4f18ba(0x384)]?.['uh'] ?? 0x0,
                _0x261721['Eg'] = theoKzObjects?.['PropertyManager']?.['vh'] ?? 0x0,
                _0x19438e[_0x4f18ba(0x219)](_0x47418f, _0x261721['dg']),
                _0x19438e['setInt16'](_0x199ee9, _0x261721['Bg']),
                _0x19438e['setInt16'](_0x37cd2c, _0x261721['Cg']),
                _0x19438e[_0x4f18ba(0x219)](_0x57219f, _0x261721['Dg']),
                _0x19438e[_0x4f18ba(0x219)](_0x586a16, _0x261721['Eg']),
                _wrmxt[_0x4f18ba(0x658)] = !![],
                _wrmxt['aId'] = _0x47418f);
                if (_0x261721['ad'] = _0x40b516,
                this['o']['fb']['bf'] === _0x261721['Lb'])
                    this['o']['N']['Fg'](_0x261721),
                    _0x261721['Mb'] = _0x261721['Lb'],
                    _0x261721['bd'] = _0x261721['ad'];
                else {
                    var _0x4fda6e = this['o']['hb'][_0x261721['Lb']];
                    null != _0x4fda6e && _0x4fda6e['Kb']();
                    var _0x20d1e8 = new _0x241e41(this['o']['fb']);
                    _0x20d1e8['vb'](_0x3392fc()['s']['H']['wb']),
                    this['o']['hb'][_0x261721['Lb']] = _0x20d1e8,
                    _0x20d1e8['Fg'](_0x261721);
                }
                return _0x5dfba2;
            }
            ,
            _0xcff7d3[_0x19c253(0x792)]['wg'] = function(_0x45c10a, _0xb2418b) {
                var _0x46497c = _0x19c253
                  , _0x47ddf0 = _0x45c10a['nc'](_0xb2418b);
                _0xb2418b += 0x2;
                var _0xc3fb0e = _0x45c10a['mc'](_0xb2418b);
                _0xb2418b++;
                var _0x42734d = !!(0x1 & _0xc3fb0e)
                  , _0x2c366d = !!(0x2 & _0xc3fb0e)
                  , _0x458070 = 0x0;
                _0x42734d && (_0x458070 = _0x45c10a['nc'](_0xb2418b),
                _0xb2418b += 0x2);
                var _0x4542a7 = this['Gg'](_0x47ddf0);
                if (void 0x0 === _0x4542a7)
                    return _0xb2418b;
                if (_0x4542a7['Ib'] = ![],
                !_0x4542a7['Hb'])
                    return _0xb2418b;
                var _0x48bec1 = this['Gg'](_0x47ddf0);
                if (_0x42734d && (void 0x0 !== _0x48bec1 && _0x48bec1['Hb'])) {
                    if (_0x458070 === this['o']['fb']['bf']) {
                        var _0x427fcd = this['o']['N']['Gf']()
                          , _0xd954 = _0x4542a7['Hg'](_0x427fcd['x'], _0x427fcd['y']);
                        _0x2c366d === !![] && (zwormData['enemyNameHs'] = _0x4542a7['Mb']['ad']),
                        Math[_0x46497c(0x5c6)](0x0, 0x1 - _0xd954[_0x46497c(0x20b)] / (0.5 * this['o']['jb'])),
                        _0xd954[_0x46497c(0x20b)] < 0.5 * this['o']['jb'] && _0x3392fc()['s']['H']['wb']['wf']['Se'](_0x2c366d);
                    } else {
                        if (_0x47ddf0 === this['o']['fb']['bf']) {} else {
                            var _0x457d4b = this['o']['N']['Gf']()
                              , _0x14d5c6 = _0x4542a7['Hg'](_0x457d4b['x'], _0x457d4b['y']);
                            Math['max'](0x0, 0x1 - _0x14d5c6['distance'] / (0.5 * this['o']['jb']));
                        }
                    }
                } else {
                    if (_0x47ddf0 === this['o']['fb']['bf']) {} else {
                        var _0x44dc93 = this['o']['N']['Gf']()
                          , _0x4100b4 = _0x4542a7['Hg'](_0x44dc93['x'], _0x44dc93['y']);
                        Math['max'](0x0, 0x1 - _0x4100b4['distance'] / (0.5 * this['o']['jb']));
                    }
                }
                return _0xb2418b;
            }
            ,
            _0xcff7d3['prototype']['zg'] = function(_0x1dd631, _0x5ea2ad) {
                var _0x4b348c = _0x19c253
                  , _0x1add25 = _0x1dd631['nc'](_0x5ea2ad);
                _0x5ea2ad += 0x2;
                var _0x785f34 = _0x1add25 === this['o']['fb']['bf'] ? null : this['o']['hb'][_0x1add25]
                  , _0x71f87a = _0x1dd631['mc'](_0x5ea2ad);
                _0x5ea2ad += 0x1;
                var _0x3c8577 = !!(0x1 & _0x71f87a);
                if (!!(0x2 & _0x71f87a)) {
                    var _0x5cdf5c = _0x1dd631['pc'](_0x5ea2ad);
                    _0x5ea2ad += 0x4,
                    _0x785f34 && _0x785f34['Ig'](_0x5cdf5c);
                }
                var _0xcbb2a1 = this['Jg'](_0x1dd631['mc'](_0x5ea2ad++), _0x1dd631['mc'](_0x5ea2ad++), _0x1dd631['mc'](_0x5ea2ad++))
                  , _0x112a83 = this['Jg'](_0x1dd631['mc'](_0x5ea2ad++), _0x1dd631['mc'](_0x5ea2ad++), _0x1dd631['mc'](_0x5ea2ad++));
                if (_0x785f34) {
                    _0x785f34['Kg'](_0xcbb2a1, _0x112a83, _0x3c8577);
                    var _0x5b4bf7 = this['o']['N']['Gf']()
                      , _0xcdd9c8 = _0x785f34['Gf']()
                      , _0x10067c = Math[_0x4b348c(0x5c6)](0x0, 0x1 - Math[_0x4b348c(0x411)](_0x5b4bf7['x'] - _0xcdd9c8['x'], _0x5b4bf7['y'] - _0xcdd9c8['y']) / (0.5 * this['o']['jb']));
                    _0x3392fc()['r']['Zd'](_0x10067c, _0x1add25, _0x3c8577);
                }
                var _0x1230f1 = this['qg'](_0x1dd631, _0x5ea2ad);
                if (_0x5ea2ad += this['rg'](_0x1230f1),
                _0x785f34) {
                    var _0x1a40af;
                    for (_0x1a40af in _0x785f34['Ff']) {
                        var _0x47cfdd = _0x785f34['Ff'][_0x1a40af];
                        _0x47cfdd && (_0x47cfdd['sc'] = ![]);
                    }
                }
                var _0x31c378 = 0x0;
                for (; _0x31c378 < _0x1230f1; _0x31c378++) {
                    var _0x9eb8cb = _0x1dd631['mc'](_0x5ea2ad);
                    _0x5ea2ad++;
                    var _0x1f86e7 = _0x1dd631['mc'](_0x5ea2ad);
                    if (_0x5ea2ad++,
                    _0x785f34) {
                        var _0x3460e7 = _0x785f34['Ff'][_0x9eb8cb];
                        !_0x3460e7 && (_0x3460e7 = _0x785f34['Ff'][_0x9eb8cb] = new _0x2d8dbf(_0x9eb8cb)),
                        _0x3460e7['sc'] = !![],
                        _0x3460e7['tc'] = Math[_0x4b348c(0x794)](0x1, Math['max'](0x0, _0x1f86e7 / 0x64));
                    }
                }
                return _0x5ea2ad;
            }
            ,
            _0xcff7d3['prototype']['Ag'] = function(_0x1a2a68, _0x5c458b) {
                var _0x1f9358 = _0x19c253
                  , _0x569945 = this['o']['N']
                  , _0xf7e7bc = _0x1a2a68['mc'](_0x5c458b);
                _0x5c458b += 0x1;
                var _0x593205 = !!(0x1 & _0xf7e7bc)
                  , _0x513bd1 = !!(0x2 & _0xf7e7bc)
                  , _0x11d903 = !!(0x4 & _0xf7e7bc);
                if (_0x513bd1) {
                    var _0x3a22a7 = _0x569945['M'];
                    _0x569945['Ig'](_0x1a2a68['pc'](_0x5c458b)),
                    _0x5c458b += 0x4,
                    _0x3a22a7 = _0x569945['M'] - _0x3a22a7,
                    _0x3a22a7 > 0x0 && _0x3392fc()['s']['H']['wb']['wf']['Re'](_0x3a22a7);
                }
                _0x11d903 && (this['o']['ib'] = _0x1a2a68['pc'](_0x5c458b),
                _0x5c458b += 0x4);
                var _0xe6c287 = this['Jg'](_0x1a2a68['mc'](_0x5c458b++), _0x1a2a68['mc'](_0x5c458b++), _0x1a2a68['mc'](_0x5c458b++))
                  , _0x358b0c = this['Jg'](_0x1a2a68['mc'](_0x5c458b++), _0x1a2a68['mc'](_0x5c458b++), _0x1a2a68['mc'](_0x5c458b++));
                _0x569945['Kg'](_0xe6c287, _0x358b0c, _0x593205),
                _0x3392fc()['r']['Zd'](0.5, this['o']['fb']['bf'], _0x593205);
                var _0x5109df = this['qg'](_0x1a2a68, _0x5c458b);
                _0x5c458b += this['rg'](_0x5109df);
                for (var _0x103b3d in _0x569945['Ff']) {
                    var _0x505fa0 = _0x569945['Ff'][_0x103b3d];
                    _0x505fa0 && (_0x505fa0['sc'] = !0x1);
                }
                for (var _0x35ed1e = 0x0; _0x35ed1e < _0x5109df; _0x35ed1e++) {
                    var _0x25acf7 = _0x1a2a68['mc'](_0x5c458b);
                    _0x5c458b++;
                    var _0x26f29d = _0x1a2a68['mc'](_0x5c458b);
                    _0x5c458b++;
                    var _0xaa2ac7 = _0x569945['Ff'][_0x25acf7];
                    _0xaa2ac7 || (_0xaa2ac7 = new _0x2d8dbf(_0x25acf7),
                    _0x569945['Ff'][_0x25acf7] = _0xaa2ac7),
                    _0xaa2ac7['sc'] = !0x0,
                    _0xaa2ac7['tc'] = Math[_0x1f9358(0x794)](0x1, Math['max'](0x0, _0x26f29d / 0x64));
                }
                _0x3392fc()['s']['H']['wb']['uf']['Te'](_0x569945['Ff']);
            }
            ,
            _0xcff7d3[_0x19c253(0x792)]['xg'] = function(_0x609d5b, _0x5dcff6) {
                var _0x5ded59 = _0x19c253
                  , _0x294dae = this
                  , _0xfde3d3 = _0x609d5b['nc'](_0x5dcff6);
                _0x5dcff6 += 0x2;
                var _0x3349ed = this['Gg'](_0xfde3d3)
                  , _0x524abe = _0x609d5b['pc'](_0x5dcff6);
                _0x5dcff6 += 0x4;
                var _0x6254a1 = [];
                for (var _0x12d764 in _0x3349ed['Ff']) {
                    if (0x0 == _0x12d764)
                        _0x6254a1['push'](_0x5ded59(0x422)),
                        $(_0x5ded59(0x381))['fadeIn']();
                    else {
                        if (0x1 == _0x12d764)
                            _0x6254a1[_0x5ded59(0x7b5)](_0x5ded59(0x498)),
                            $(_0x5ded59(0x33e))[_0x5ded59(0x2c6)]();
                        else {
                            if (0x2 == _0x12d764)
                                _0x6254a1['push'](_0x5ded59(0x654)),
                                $(_0x5ded59(0x642))['fadeIn']();
                            else {
                                if (0x3 == _0x12d764)
                                    _0x6254a1[_0x5ded59(0x7b5)](_0x5ded59(0x446)),
                                    $(_0x5ded59(0x5ec))[_0x5ded59(0x2c6)]();
                                else {
                                    if (0x4 == _0x12d764)
                                        _0x6254a1['push']('comidax5'),
                                        $(_0x5ded59(0x7ef))['fadeIn']();
                                    else {
                                        if (0x5 == _0x12d764)
                                            _0x6254a1[_0x5ded59(0x7b5)]('comidax10'),
                                            $(_0x5ded59(0x798))[_0x5ded59(0x2c6)]();
                                        else
                                            0x6 == _0x12d764 ? (_0x6254a1[_0x5ded59(0x7b5)]('zoom'),
                                            $(_0x5ded59(0x1e9))['fadeIn']()) : console[_0x5ded59(0x39b)](_0x5ded59(0x57b));
                                    }
                                }
                            }
                        }
                    }
                }
                window[_0x5ded59(0x631)] = _0x6254a1;
                if (_0x3349ed['Mb']['ad'])
                    setTimeout(function() {
                        var _0x390340 = _0x5ded59;
                        $(_0x390340(0x65a))[_0x390340(0x2d4)]();
                    }, 0xbb8);
                else {}
                var _0x332079 = this['qg'](_0x609d5b, _0x5dcff6);
                if (_0x5dcff6 += this['rg'](_0x332079),
                _0x3349ed) {
                    _0x3349ed['Ig'](_0x524abe),
                    _0x3349ed['Lg'](function() {
                        return _0x294dae['Jg'](_0x609d5b['mc'](_0x5dcff6++), _0x609d5b['mc'](_0x5dcff6++), _0x609d5b['mc'](_0x5dcff6++));
                    }, _0x332079),
                    _0x3349ed['Mg'](!0x0);
                    var _0x2725b8 = this['o']['N']['Gf']()
                      , _0x53a751 = _0x3349ed['Gf']()
                      , _0x4ef98e = Math[_0x5ded59(0x5c6)](0x0, 0x1 - Math['hypot'](_0x2725b8['x'] - _0x53a751['x'], _0x2725b8['y'] - _0x53a751['y']) / (0.5 * this['o']['jb']));
                    _0x3392fc()['r']['Xd'](_0x4ef98e, _0xfde3d3);
                } else
                    _0x5dcff6 += 0x6 * _0x332079;
                return _0x5dcff6;
            }
            ,
            _0xcff7d3['prototype']['yg'] = function(_0xaeb7ec, _0x5e4a9c) {
                var _0x4b3cf4 = _0xaeb7ec['nc'](_0x5e4a9c);
                _0x5e4a9c += 0x2;
                var _0x4e7d89 = this['o']['hb'][_0x4b3cf4]
                  , _0x54a31b = [];
                return _0x4e7d89 && _0x4e7d89['Ib'] && _0x4e7d89['Mg'](!0x1),
                _0x3392fc()['r']['Yd'](_0x4b3cf4),
                _0x5e4a9c;
            }
            ,
            _0xcff7d3[_0x19c253(0x792)]['sg'] = function(_0x1921e0, _0x12092e) {
                var _0x11ba6c = _0x19c253
                  , _0x155f14 = new _0x34eeeb[(_0x11ba6c(0x4ef))]();
                _0x155f14['Lb'] = _0x1921e0['oc'](_0x12092e),
                _0x12092e += 0x4,
                _0x155f14['cg'] = this['o']['fb']['af'] === _0x1dea8f['_e'] ? _0x1921e0['mc'](_0x12092e++) : _0x38582a[_0x11ba6c(0x5a7)],
                _0x155f14['Ng'] = this['Jg'](_0x1921e0['mc'](_0x12092e++), _0x1921e0['mc'](_0x12092e++), _0x1921e0['mc'](_0x12092e++)),
                _0x155f14['dg'] = _0x1921e0['mc'](_0x12092e++);
                var _0x5f3821 = this['o']['gb'][_0x155f14['Lb']];
                null != _0x5f3821 && _0x5f3821['Kb']();
                var _0x8564d3 = new _0x34eeeb(_0x155f14,_0x3392fc()['s']['H']['wb']);
                return _0x8564d3['Og'](this['Pg'](_0x155f14['Lb']), this['Qg'](_0x155f14['Lb']), !0x0),
                this['o']['gb'][_0x155f14['Lb']] = _0x8564d3,
                _0x12092e;
            }
            ,
            _0xcff7d3['prototype']['tg'] = function(_0xfb4a0f, _0x55f231) {
                var _0x1018ff = _0xfb4a0f['oc'](_0x55f231);
                _0x55f231 += 0x4;
                var _0x5c7fc9 = this['o']['gb'][_0x1018ff];
                return _0x5c7fc9 && (_0x5c7fc9['Rg'] = 0x0,
                _0x5c7fc9['Sg'] = 1.5 * _0x5c7fc9['Sg'],
                _0x5c7fc9['Nb'] = !0x0),
                _0x55f231;
            }
            ,
            _0xcff7d3['prototype']['ug'] = function(_0xfe0095, _0x1f572f) {
                var _0x1166ba = _0xfe0095['oc'](_0x1f572f);
                _0x1f572f += 0x4;
                var _0x319fd5 = _0xfe0095['nc'](_0x1f572f);
                _0x1f572f += 0x2;
                var _0x1eb1e5 = this['o']['gb'][_0x1166ba];
                if (_0x1eb1e5) {
                    _0x1eb1e5['Rg'] = 0x0,
                    _0x1eb1e5['Sg'] = 0.1 * _0x1eb1e5['Sg'],
                    _0x1eb1e5['Nb'] = !0x0;
                    var _0x1a731d = this['Gg'](_0x319fd5);
                    if (_0x1a731d && _0x1a731d['Hb']) {
                        var _0x4a52a6 = (this['o']['fb']['bf'],
                        _0x1a731d['Gf']());
                        _0x1eb1e5['Og'](_0x4a52a6['x'], _0x4a52a6['y'], !0x1);
                    }
                }
                return _0x1f572f;
            }
            ;
            var _0x105227 = [0x22, 0x1d, 0x1a, 0x18, 0x16, 0x14, 0x12, 0x11, 0xf, 0xe, 0xd, 0xc, 0xb, 0xa, 0x9, 0x8, 0x8, 0x7, 0x6, 0x6, 0x5, 0x5, 0x4, 0x4, 0x3, 0x3, 0x2, 0x2, 0x2, 0x1, 0x1, 0x1, 0x1, 0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x2, 0x2, 0x2, 0x3, 0x3, 0x4, 0x4, 0x5, 0x5, 0x6, 0x6, 0x7, 0x8, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x11, 0x12, 0x14, 0x16, 0x18, 0x1a, 0x1d, 0x22];
            return _0xcff7d3[_0x19c253(0x792)]['mg'] = function(_0xe532ec) {
                var _0x28670d = _0x19c253;
                for (var _0x37f3af = _0x3392fc()['q']['Ug']['Tg'], _0x1e934f = _0x37f3af[_0x28670d(0x835)](0x0, 0x0, 0x50, 0x50), _0x5a14c3 = _0x105227[0x0], _0x382f82 = 0x50 - _0x5a14c3, _0x5890d4 = 0x0, _0x48dc89 = 0x0; _0x48dc89 < 0x274; _0x48dc89++)
                    for (var _0x4992a5 = _0xe532ec['mc'](0x1 + _0x48dc89), _0x2c04c4 = 0x0; _0x2c04c4 < 0x8; _0x2c04c4++) {
                        var _0x51af29 = 0x0 != (_0x4992a5 >> _0x2c04c4 & 0x1)
                          , _0x3a9a6a = 0x4 * (_0x5a14c3 + 0x50 * _0x5890d4);
                        _0x51af29 ? (_0x1e934f[_0x28670d(0x294)][_0x3a9a6a] = 0xff,
                        _0x1e934f['data'][_0x3a9a6a + 0x1] = 0xff,
                        _0x1e934f[_0x28670d(0x294)][_0x3a9a6a + 0x2] = 0xff,
                        _0x1e934f[_0x28670d(0x294)][_0x3a9a6a + 0x3] = 0xff) : _0x1e934f['data'][_0x3a9a6a + 0x3] = 0x0,
                        ++_0x5a14c3 >= _0x382f82 && ++_0x5890d4 < 0x50 && (_0x5a14c3 = _0x105227[_0x5890d4],
                        _0x382f82 = 0x50 - _0x5a14c3);
                    }
                _0x37f3af[_0x28670d(0x28c)](_0x1e934f, 0x0, 0x0);
                var _0x3da6b4 = _0x3392fc()['s']['H']['wb']['tf']['Sf'];
                _0x3da6b4[_0x28670d(0x570)] = _0x3392fc()['q']['Ug']['Hc'],
                _0x3da6b4[_0x28670d(0x570)][_0x28670d(0x59d)]();
            }
            ,
            _0xcff7d3['prototype']['og'] = function(_0x7af6a8, _0x592d91) {
                var _0x57958f = _0x19c253
                  , _0x2e7a57 = _0x7af6a8['oc'](_0x592d91);
                _0x592d91 += 0x4,
                console[_0x57958f(0x39b)](_0x57958f(0x5c9) + _0x2e7a57);
            }
            ,
            _0xcff7d3['prototype']['pg'] = function(_0x35859a, _0x343a7e) {
                var _0xced6a6 = _0x19c253;
                zw_joystick !== -0x1 && (zw_joysticks[zw_joystick][_0xced6a6(0x3db)] = ![]),
                theoKzObjects[_0xced6a6(0x2a8)] = ![],
                theoKzObjects[_0xced6a6(0x417)] = !![],
                createCircle(),
                zwormData['hs'] = 0x0,
                sendPlayerDeath(0x0, 0x0),
                sendPlayerUpdate(0xf423f, 0xf423f),
                clearTeamUbication(),
                console['log']('g.o');
            }
            ,
            _0xcff7d3[_0x19c253(0x792)]['ng'] = function(_0x5c69aa, _0x3005e7) {
                var _0x1cb89e = _0x19c253;
                this['o']['tb'] = _0x5c69aa['nc'](_0x3005e7),
                _0x3005e7 += 0x2,
                this['o']['O'] = _0x5c69aa['nc'](_0x3005e7),
                _0x3005e7 += 0x2;
                var _0x3df160 = new _0x5f4b22();
                _0x3df160['ag'] = [];
                for (var _0x1622fe = _0x5c69aa['mc'](_0x3005e7++), _0x470f3f = 0x0; _0x470f3f < _0x1622fe; _0x470f3f++) {
                    var _0x11e2a4 = _0x5c69aa['nc'](_0x3005e7);
                    _0x3005e7 += 0x2;
                    var _0x287f12 = _0x5c69aa['pc'](_0x3005e7);
                    _0x3005e7 += 0x4,
                    _0x3df160['ag'][_0x1cb89e(0x7b5)](_0x5f4b22['Vg'](_0x11e2a4, _0x287f12));
                }
                if (_0x3df160['$f'] = [],
                this['o']['fb']['af'] === _0x1dea8f['_e'])
                    for (var _0x452263 = _0x5c69aa['mc'](_0x3005e7++), _0x5999eb = 0x0; _0x5999eb < _0x452263; _0x5999eb++) {
                        var _0x678baa = _0x5c69aa['mc'](_0x3005e7);
                        _0x3005e7 += 0x1;
                        var _0x350a93 = _0x5c69aa['pc'](_0x3005e7);
                        _0x3005e7 += 0x4,
                        _0x3df160['$f']['push'](_0x5f4b22['Wg'](_0x678baa, _0x350a93));
                    }
                _0x3392fc()['s']['H']['wb']['vf']['Te'](_0x3df160);
            }
            ,
            _0xcff7d3[_0x19c253(0x792)]['Gg'] = function(_0x3f0989) {
                return _0x3f0989 === this['o']['fb']['bf'] ? this['o']['N'] : this['o']['hb'][_0x3f0989];
            }
            ,
            _0xcff7d3['prototype']['Jg'] = function(_0x2b3854, _0x393c93, _0xd94ce4) {
                return 0x2710 * ((0xffffff & (0xff & _0xd94ce4 | _0x393c93 << 0x8 & 0xff00 | _0x2b3854 << 0x10 & 0xff0000)) / 0x800000 - 0x1);
            }
            ,
            _0xcff7d3['prototype']['Pg'] = function(_0x6ba252) {
                return ((0xffff & _0x6ba252) / 0x8000 - 0x1) * this['o']['fb']['ef']();
            }
            ,
            _0xcff7d3[_0x19c253(0x792)]['Qg'] = function(_0x1b83df) {
                return ((_0x1b83df >> 0x10 & 0xffff) / 0x8000 - 0x1) * this['o']['fb']['ef']();
            }
            ,
            _0xcff7d3[_0x19c253(0x792)]['qg'] = function(_0x4027cf, _0x32ff1e) {
                var _0xff568f = _0x4027cf['mc'](_0x32ff1e);
                if (0x0 == (0x80 & _0xff568f))
                    return _0xff568f;
                var _0x1090f6 = _0x4027cf['mc'](_0x32ff1e + 0x1);
                if (0x0 == (0x80 & _0x1090f6))
                    return _0x1090f6 | _0xff568f << 0x7 & 0x3f80;
                var _0x5990a0 = _0x4027cf['mc'](_0x32ff1e + 0x2);
                if (0x0 == (0x80 & _0x5990a0))
                    return _0x5990a0 | _0x1090f6 << 0x7 & 0x3f80 | _0xff568f << 0xe & 0x1fc000;
                var _0x1f850a = _0x4027cf['mc'](_0x32ff1e + 0x3);
                return 0x0 == (0x80 & _0x1f850a) ? _0x1f850a | _0x5990a0 << 0x7 & 0x3f80 | _0x1090f6 << 0xe & 0x1fc000 | _0xff568f << 0x15 & 0xfe00000 : void 0x0;
            }
            ,
            _0xcff7d3['prototype']['rg'] = function(_0x44ca5d) {
                return _0x44ca5d < 0x80 ? 0x1 : _0x44ca5d < 0x4000 ? 0x2 : _0x44ca5d < 0x200000 ? 0x3 : _0x44ca5d < 0x10000000 ? 0x4 : void 0x0;
            }
            ,
            _0xcff7d3;
        }())
          , _0x3a0a9b = (function() {
            var _0x1c313d = _0x5b9465;
            function _0x37a89f(_0x23431a) {
                this['Xg'] = _0x23431a;
            }
            return _0x37a89f['Yg'] = function() {
                return new _0x3a0a9b(null);
            }
            ,
            _0x37a89f['Zg'] = function(_0x1ac3a2) {
                return new _0x3a0a9b(_0x1ac3a2);
            }
            ,
            _0x37a89f[_0x1c313d(0x792)]['$g'] = function() {
                return this['Xg'];
            }
            ,
            _0x37a89f[_0x1c313d(0x792)]['_g'] = function() {
                return null != this['Xg'];
            }
            ,
            _0x37a89f[_0x1c313d(0x792)]['ah'] = function(_0x30db4d) {
                null != this['Xg'] && _0x30db4d(this['Xg']);
            }
            ,
            _0x37a89f;
        }())
          , _0x34eeeb = (function() {
            var _0x2b65b2 = _0x5b9465;
            function _0x25eb0a(_0x596753, _0x8d80b) {
                this['Mb'] = _0x596753,
                this['bh'] = _0x596753['dg'] >= 0x50,
                this['Ob'] = 0x0,
                this['Pb'] = 0x0,
                this['ch'] = 0x0,
                this['dh'] = 0x0,
                this['Sg'] = this['bh'] ? 0x1 : _0x596753['Ng'],
                this['Rg'] = 0x1,
                this['Nb'] = !0x1,
                this['eh'] = 0x0,
                this['fh'] = 0x0,
                this['Jb'] = 0x1,
                this['Ae'] = 0x2 * Math['PI'] * Math['random'](),
                this['gh'] = new _0x3fa7f2(),
                this['gh']['hh'](_0x3392fc()['o']['fb']['af'], this['Mb']['cg'] === _0x38582a['TEAM_DEFAULT'] ? null : _0x3392fc()['p']['Dc']()['ed'](this['Mb']['cg']), _0x3392fc()['p']['Dc']()['kd'](this['Mb']['dg'])),
                _0x8d80b['Lf'](_0x596753['Lb'], this['gh']);
            }
            return _0x25eb0a['prototype']['Kb'] = function() {
                this['gh']['Of']['Pf']['ih'](),
                this['gh']['Of']['Nf']['ih']();
            }
            ,
            _0x25eb0a['prototype']['Og'] = function(_0x4a1c8f, _0x40748f, _0x12fb6d) {
                this['Ob'] = _0x4a1c8f,
                this['Pb'] = _0x40748f,
                _0x12fb6d && (this['ch'] = _0x4a1c8f,
                this['dh'] = _0x40748f);
            }
            ,
            _0x25eb0a[_0x2b65b2(0x792)]['Fb'] = function(_0x121a08, _0x386d6f) {
                var _0x3716a3 = Math['min'](0.5, 0x1 * this['Sg'])
                  , _0xcf2a0b = Math['min'](2.5, 1.5 * this['Sg']);
                this['eh'] = _0x2c6321(this['eh'], _0x3716a3, _0x386d6f, 0.0025),
                this['fh'] = _0x2c6321(this['fh'], _0xcf2a0b, _0x386d6f, 0.0025),
                this['Jb'] = _0x2c6321(this['Jb'], this['Rg'], _0x386d6f, 0.0025);
            }
            ,
            _0x25eb0a[_0x2b65b2(0x792)]['Gb'] = function(_0x186a44, _0x52f06b, _0x3d3a6f) {
                var _0x86f663 = _0x2b65b2;
                this['ch'] = _0x2c6321(this['ch'], this['Ob'], _0x52f06b, theoKzObjects[_0x86f663(0x3cf)]),
                this['dh'] = _0x2c6321(this['dh'], this['Pb'], _0x52f06b, 0.0025),
                this['gh']['Te'](this, _0x186a44, _0x52f06b, _0x3d3a6f);
            }
            ,
            _0x25eb0a['Config'] = (function() {
                function _0x2bf068() {
                    var _0x5a95ef = _0x2458;
                    this['Lb'] = 0x0,
                    this['cg'] = _0x38582a[_0x5a95ef(0x5a7)],
                    this['Ng'] = 0x0,
                    this['dg'] = 0x0;
                }
                return _0x2bf068;
            }()),
            _0x25eb0a;
        }())
          , _0x3fa7f2 = (function() {
            function _0x25497c() {
                var _0x5e5864 = _0x2458;
                this['Of'] = new _0x2312f7(new _0x3c90b5(),new _0x3c90b5()),
                this['Of']['Pf']['jh'][_0x5e5864(0x2bb)] = _0x53055c['ic']['jc'],
                this['Of']['Pf']['jh']['zIndex'] = _0x4ac294,
                this['Of']['Nf']['jh'][_0x5e5864(0x3ad)] = _0x1a4f7b;
            }
            var _0x1a4f7b = 0x1f4
              , _0x4ac294 = 0x64;
            _0x25497c['prototype']['hh'] = function(_0x45d38a, _0x37c188, _0x374a8e) {
                var _0x5c5d69 = _0x374a8e['Zc'];
                null != _0x5c5d69 && this['Of']['Nf']['kh'](_0x5c5d69);
                var _0x1d2b10 = _0x45d38a == _0x1dea8f['_e'] && null != _0x37c188 ? _0x37c188['cd']['$c'] : _0x374a8e['$c'];
                null != _0x1d2b10 && this['Of']['Pf']['kh'](_0x1d2b10);
            }
            ,
            _0x25497c['prototype']['Te'] = function(_0x4a6990, _0x4e51db, _0x3c8c71, _0x115f0e) {
                var _0x5eb179 = _0x2458;
                if (!_0x115f0e(_0x4a6990['ch'], _0x4a6990['dh']))
                    return void this['Of']['lh']();
                var _0x45d691 = _0x4a6990['fh'] * (0x1 + 0.3 * Math[_0x5eb179(0x673)](_0x4a6990['Ae'] + _0x4e51db / 0xc8));
                _0x4a6990['bh'] ? this['Of']['mh'](_0x4a6990['ch'], _0x4a6990['dh'], theoKzObjects[_0x5eb179(0x4c5)] * _0x4a6990['eh'], 0x1 * _0x4a6990['Jb'], theoKzObjects[_0x5eb179(0x262)] * _0x45d691, 0.8 * _0x4a6990['Jb']) : this['Of']['mh'](_0x4a6990['ch'], _0x4a6990['dh'], theoKzObjects[_0x5eb179(0x3f3)] * _0x4a6990['eh'], 0x1 * _0x4a6990['Jb'], theoKzObjects[_0x5eb179(0x702)] * _0x45d691, 0.3 * _0x4a6990['Jb']);
            }
            ;
            var _0x2312f7 = (function() {
                var _0x464056 = _0x2458;
                function _0x51294d(_0x5a7d3b, _0x42cf3d) {
                    this['Nf'] = _0x5a7d3b,
                    this['Pf'] = _0x42cf3d;
                }
                return _0x51294d[_0x464056(0x792)]['mh'] = function(_0x50a747, _0x33aeaf, _0x2e5fef, _0x4b277a, _0x316748, _0x300c42) {
                    this['Nf']['Mg'](!![]),
                    this['Nf']['nh'](_0x50a747, _0x33aeaf),
                    this['Nf']['oh'](_0x2e5fef),
                    this['Nf']['qh'](_0x4b277a),
                    this['Pf']['Mg'](!![]),
                    this['Pf']['nh'](_0x50a747, _0x33aeaf),
                    this['Pf']['oh'](_0x316748),
                    this['Pf']['qh'](_0x300c42);
                }
                ,
                _0x51294d[_0x464056(0x792)]['lh'] = function() {
                    this['Nf']['Mg'](![]),
                    this['Pf']['Mg'](![]);
                }
                ,
                _0x51294d;
            }());
            return _0x25497c;
        }())
          , _0x57902d = (function() {
            var _0x2813e2 = _0x5b9465;
            function _0x1d1a88() {
                this['rh'] = 0x0,
                this['sh'] = 0x0,
                this['th'] = 0x0,
                this['uh'] = 0x0,
                this['vh'] = 0x0,
                this['wh'] = [];
            }
            function _0xbfe35a(_0x330cf7, _0x3edbba) {
                var _0x382719 = _0x2458;
                if (!_0x3392fc()['p']['W']())
                    return null;
                var _0xa57d82 = _0x3392fc()['p']['Ac']();
                if (_0x3edbba === _0x4e8d86['ia']) {
                    var _0x3229bc = _0x19e512(_0xa57d82[_0x382719(0x737)], _0x330cf7);
                    return _0x3229bc < 0x0 ? null : (console[_0x382719(0x39b)](_0xa57d82[_0x382719(0x737)][_0x3229bc]),
                    _0xa57d82[_0x382719(0x737)][_0x3229bc]);
                }
                switch (_0x3edbba) {
                case _0x4e8d86['ja']:
                    return _0xa57d82[_0x382719(0x829)][_0x330cf7];
                case _0x4e8d86['ka']:
                    return _0xa57d82[_0x382719(0x319)][_0x330cf7];
                case _0x4e8d86['la']:
                    return _0xa57d82[_0x382719(0x50a)][_0x330cf7];
                case _0x4e8d86['ma']:
                    return _0xa57d82[_0x382719(0x20c)][_0x330cf7];
                }
                return null;
            }
            function _0x19e512(_0x43a138, _0x521617) {
                var _0x93dc2 = _0x2458;
                for (var _0x26ef9c = 0x0; _0x26ef9c < _0x43a138[_0x93dc2(0x607)]; _0x26ef9c++)
                    if (_0x43a138[_0x26ef9c]['id'] == _0x521617)
                        return _0x26ef9c;
                return -0x1;
            }
            return _0x1d1a88['prototype']['a'] = function() {}
            ,
            _0x1d1a88[_0x2813e2(0x792)]['ha'] = function(_0x10a685) {
                var _0x3857d4 = _0x2813e2;
                !theoKzObjects[_0x3857d4(0x7e0)] && (theoKzObjects[_0x3857d4(0x384)] = this,
                localStorage[_0x3857d4(0x591)](_0x3857d4(0x63c), JSON[_0x3857d4(0x714)](theoKzObjects)));
                switch (_0x10a685) {
                case _0x4e8d86['ia']:
                    return this['rh'];
                case _0x4e8d86['ja']:
                    return this['sh'];
                case _0x4e8d86['ka']:
                    return this['th'];
                case _0x4e8d86['la']:
                    return this['uh'];
                case _0x4e8d86['ma']:
                    return this['vh'];
                }
                return 0x0;
            }
            ,
            _0x1d1a88[_0x2813e2(0x792)]['xh'] = function(_0x2614b7) {
                var _0x307a86 = _0x2813e2;
                this['wh'][_0x307a86(0x7b5)](_0x2614b7),
                this['yh']();
            }
            ,
            _0x1d1a88[_0x2813e2(0x792)]['Ia'] = function() {
                var _0x26c197 = _0x2813e2;
                if (!_0x3392fc()['p']['W']())
                    return _0x3acefb([0x20, 0x21, 0x22, 0x23]);
                for (var _0x114293 = _0x3392fc()['p']['Ac'](), _0x1f4044 = [], _0x2f6650 = 0x0; _0x2f6650 < _0x114293[_0x26c197(0x737)][_0x26c197(0x607)]; _0x2f6650++) {
                    var _0x2a0783 = _0x114293[_0x26c197(0x737)][_0x2f6650];
                    this['Ja'](_0x2a0783['id'], _0x4e8d86['ia']) && _0x1f4044[_0x26c197(0x7b5)](_0x2a0783);
                }
                return 0x0 === _0x1f4044[_0x26c197(0x607)] ? 0x0 : _0x1f4044[parseInt(_0x1f4044[_0x26c197(0x607)] * Math[_0x26c197(0x7d2)]())]['id'];
            }
            ,
            _0x1d1a88['prototype']['zh'] = function() {
                if (_0x3392fc()['p']['W']) {
                    var _0x14a8af = _0x3392fc()['p']['Ac']()['skinArrayDict']
                      , _0x41268e = _0x19e512(_0x14a8af, this['rh']);
                    if (!(_0x41268e < 0x0)) {
                        for (var _0x32f3ba = _0x41268e + 0x1; _0x32f3ba < _0x14a8af['length']; _0x32f3ba++)
                            if (this['Ja'](_0x14a8af[_0x32f3ba]['id'], _0x4e8d86['ia']))
                                return this['rh'] = _0x14a8af[_0x32f3ba]['id'],
                                void this['yh']();
                        for (var _0x44486d = 0x0; _0x44486d < _0x41268e; _0x44486d++)
                            if (this['Ja'](_0x14a8af[_0x44486d]['id'], _0x4e8d86['ia']))
                                return this['rh'] = _0x14a8af[_0x44486d]['id'],
                                void this['yh']();
                    }
                }
            }
            ,
            _0x1d1a88[_0x2813e2(0x792)]['Ah'] = function() {
                var _0x505e61 = _0x2813e2;
                if (_0x3392fc()['p']['W']) {
                    var _0x5477a8 = _0x3392fc()['p']['Ac']()['skinArrayDict']
                      , _0x466091 = _0x19e512(_0x5477a8, this['rh']);
                    if (!(_0x466091 < 0x0)) {
                        for (var _0x29cdb7 = _0x466091 - 0x1; _0x29cdb7 >= 0x0; _0x29cdb7--)
                            if (this['Ja'](_0x5477a8[_0x29cdb7]['id'], _0x4e8d86['ia']))
                                return this['rh'] = _0x5477a8[_0x29cdb7]['id'],
                                void this['yh']();
                        for (var _0x3d0a78 = _0x5477a8[_0x505e61(0x607)] - 0x1; _0x3d0a78 > _0x466091; _0x3d0a78--)
                            if (this['Ja'](_0x5477a8[_0x3d0a78]['id'], _0x4e8d86['ia']))
                                return this['rh'] = _0x5477a8[_0x3d0a78]['id'],
                                void this['yh']();
                    }
                }
            }
            ,
            _0x1d1a88[_0x2813e2(0x792)]['Bh'] = function(_0x2f0c0d, _0x3b5e4f) {
                if (!_0x3392fc()['p']['W']() || this['Ja'](_0x2f0c0d, _0x3b5e4f))
                    switch (_0x3b5e4f) {
                    case _0x4e8d86['ia']:
                        return void (this['rh'] != _0x2f0c0d && (this['rh'] = _0x2f0c0d,
                        this['yh']()));
                    case _0x4e8d86['ja']:
                        return void (this['sh'] != _0x2f0c0d && (this['sh'] = _0x2f0c0d,
                        this['yh']()));
                    case _0x4e8d86['ka']:
                        return void (this['th'] != _0x2f0c0d && (this['th'] = _0x2f0c0d,
                        this['yh']()));
                    case _0x4e8d86['la']:
                        return void (this['uh'] != _0x2f0c0d && (this['uh'] = _0x2f0c0d,
                        this['yh']()));
                    case _0x4e8d86['ma']:
                        return void (this['vh'] != _0x2f0c0d && (this['vh'] = _0x2f0c0d,
                        this['yh']()));
                    }
            }
            ,
            _0x1d1a88[_0x2813e2(0x792)]['Ja'] = function(_0x20d712, _0x20b369) {
                var _0x31dbc1 = _0x2813e2
                  , _0x139636 = _0xbfe35a(_0x20d712, _0x20b369);
                return null != _0x139636 && (_0x3392fc()['u']['P']() ? 0x0 == _0x139636[_0x31dbc1(0x4b6)] && !_0x139636['nonbuyable'] || _0x3392fc()['u']['Ch'](_0x20d712, _0x20b369) : _0x139636[_0x31dbc1(0x716)]);
            }
            ,
            _0x1d1a88[_0x2813e2(0x792)]['yh'] = function() {
                var _0x3f4d94 = _0x2813e2;
                for (var _0xa1d545 = 0x0; _0xa1d545 < this['wh'][_0x3f4d94(0x607)]; _0xa1d545++) {
                    this['wh'][_0xa1d545]();
                }
            }
            ,
            _0x1d1a88;
        }())
          , _0x4e8d86 = (function() {
            var _0x8478d1 = _0x5b9465;
            function _0x4f3a8d() {}
            return _0x4f3a8d['ia'] = 'SKIN',
            _0x4f3a8d['ja'] = _0x8478d1(0x467),
            _0x4f3a8d['ka'] = _0x8478d1(0x504),
            _0x4f3a8d['la'] = 'GLASSES',
            _0x4f3a8d['ma'] = _0x8478d1(0x514),
            _0x4f3a8d;
        }())
          , _0x4cf055 = (function() {
            function _0x50be21(_0x52f362, _0x236ac6, _0x5b1041, _0x486b92, _0x487fab, _0x479696, _0x1868e0, _0x6ce2c3, _0x9593b2) {
                this['Hc'] = new _0x53055c['_b'](_0x52f362,new _0x53055c['dc'](_0x236ac6,_0x5b1041,_0x486b92,_0x487fab)),
                this['Dh'] = _0x236ac6,
                this['Eh'] = _0x5b1041,
                this['Fh'] = _0x486b92,
                this['Gh'] = _0x487fab,
                this['Hh'] = _0x479696 || (_0x6ce2c3 || _0x486b92) / 0x2,
                this['Ih'] = _0x1868e0 || (_0x9593b2 || _0x487fab) / 0x2,
                this['Jh'] = _0x6ce2c3 || _0x486b92,
                this['Kh'] = _0x9593b2 || _0x487fab,
                this['Lh'] = 0.5 - (this['Hh'] - 0.5 * this['Jh']) / this['Fh'],
                this['Mh'] = 0.5 - (this['Ih'] - 0.5 * this['Kh']) / this['Gh'],
                this['Nh'] = this['Fh'] / this['Jh'],
                this['Oh'] = this['Gh'] / this['Kh'];
            }
            return _0x50be21;
        }())
          , _0x388025 = (function() {
            var _0x5f24dc = _0x5b9465;
            function _0x321831() {
                var _0x2896af = _0x2458;
                this[_0x2896af(0x68a)] = _0x4b106f,
                this['Fe'] = new _0x53055c['_b'](_0x53055c['$b'][_0x2896af(0x41e)]('/images/bg-obstacle.png'));
                var _0x428b5b = _0x53055c['$b']['from'](_0x2896af(0x703));
                this['Ge'] = [new _0x53055c['_b'](_0x428b5b,new _0x53055c['dc'](0x0,0x0,0x80,0x80)), new _0x53055c['_b'](_0x428b5b,new _0x53055c['dc'](0x0,0x0,0x80,0x80)), new _0x53055c['_b'](_0x428b5b,new _0x53055c['dc'](0x0,0x0,0x80,0x80)), new _0x53055c['_b'](_0x428b5b,new _0x53055c['dc'](0x0,0x0,0x80,0x80)), new _0x53055c['_b'](_0x428b5b,new _0x53055c['dc'](0x0,0x0,0x80,0x80)), new _0x53055c['_b'](_0x428b5b,new _0x53055c['dc'](0x0,0x0,0x80,0x80)), new _0x53055c['_b'](_0x428b5b,new _0x53055c['dc'](0x0,0x0,0x80,0x80)), new _0x53055c['_b'](_0x428b5b,new _0x53055c['dc'](0x0,0x0,0x80,0x80)), new _0x53055c['_b'](_0x428b5b,new _0x53055c['dc'](0x0,0x0,0x80,0x80)), new _0x53055c['_b'](_0x428b5b,new _0x53055c['dc'](0x0,0x0,0x80,0x80)), new _0x53055c['_b'](_0x428b5b,new _0x53055c['dc'](0x0,0x0,0x80,0x80)), new _0x53055c['_b'](_0x428b5b,new _0x53055c['dc'](0x0,0x0,0x80,0x80)), new _0x53055c['_b'](_0x428b5b,new _0x53055c['dc'](0x0,0x0,0x80,0x80)), new _0x53055c['_b'](_0x428b5b,new _0x53055c['dc'](0x0,0x0,0x80,0x80)), new _0x53055c['_b'](_0x428b5b,new _0x53055c['dc'](0x0,0x0,0x80,0x80)), new _0x53055c['_b'](_0x428b5b,new _0x53055c['dc'](0x0,0x0,0x80,0x80))],
                this['Cf'] = new _0x53055c['_b'](_0x4b106f()),
                this['Df'] = new _0x53055c['_b']((function() {
                    var _0x12a077 = _0x2896af
                      , _0x172e5d = _0x53055c['$b']['from']('/images/bg-pattern-pow2-TEAM2.png');
                    return _0x172e5d[_0x12a077(0x5c7)] = _0x53055c['kc']['lc'],
                    _0x172e5d;
                }())),
                this['Af'] = new _0x53055c['_b'](_0x53055c['$b'][_0x2896af(0x41e)]('/images/lens.png'));
                var _0xd57a80 = _0x53055c['$b'][_0x2896af(0x41e)]('https://i.imgur.com/VPh6J5u.png');
                this['Ph'] = new _0x4cf055(_0xd57a80,0x9e,0x56,0x43,0x7c,0x94,63.5,0x80,0x80),
                this['Qh'] = new _0x4cf055(_0xd57a80,0x9e,0x4,0x57,0x4a,0xcb,63.5,0x80,0x80);
                var _0x235ef8 = _0x53055c['$b'][_0x2896af(0x41e)](_0x2896af(0x847))
                  , _0x4a6b96 = _0x53055c['$b'][_0x2896af(0x41e)](_0x2896af(0x630));
                this[_0x2896af(0x2a8)] = new _0x4cf055(_0x4a6b96,0x0,0x0,0x100,0x100,170.5,-163.5,0x80,0x80),
                this['Rh'] = new _0x4cf055(_0x235ef8,0x9c,0x4,0x57,0x4a,0x11d,63.5,0x80,0x80),
                this[_0x2896af(0x281)] = new _0x4cf055(_0x235ef8,0x9c,0x50,0x57,0x3c,0xaa,1.5,0x80,0x80),
                this[_0x2896af(0x726)] = new _0x4cf055(_0x235ef8,0x9c,0x8c,0x57,0x3c,0xaa,128.5,0x80,0x80),
                this[_0x2896af(0x5c3)] = new _0x4cf055(_0x235ef8,0x9e,0xc8,0x5f,0x37,0x109,128.5,0x80,0x80),
                this[_0x2896af(0x73d)] = new _0x4cf055(_0x235ef8,0x4f,0x8,0x4b,0x4d,0x109,1.5,0x80,0x80),
                this['Ug'] = (function() {
                    var _0x309a57 = _0x2896af
                      , _0x2e3af4 = window['document']['createElement'](_0x309a57(0x812));
                    return _0x2e3af4[_0x309a57(0x546)] = 0x50,
                    _0x2e3af4[_0x309a57(0x804)] = 0x50,
                    {
                        'te': _0x2e3af4,
                        'Tg': _0x2e3af4['getContext']('2d'),
                        'Hc': new _0x53055c['_b'](_0x53055c['$b'][_0x309a57(0x41e)](_0x2e3af4))
                    };
                }()),
                this['Bd'] = {},
                this['yd'] = {},
                this['Sh'] = [],
                this['Th'] = null;
            }
            var _0x4b106f = function(_0x3af51d) {
                var _0x4b9479 = _0x2458
                  , _0xc4e57e = _0x53055c['$b']['from'](_0x3af51d || '/images/bg-pattern-pow2-ARENA.png');
                return _0xc4e57e[_0x4b9479(0x5c7)] = _0x53055c['kc']['lc'],
                _0xc4e57e;
            };
            return _0x321831[_0x5f24dc(0x792)]['a'] = function(_0x286c3c) {
                function _0x4a47f5() {
                    0x0 == --_0x984e22 && _0x286c3c();
                }
                var _0x984e22 = 0x4;
                this['Bd'] = {},
                _0x4a47f5(),
                this['yd'] = {},
                _0x4a47f5(),
                this['Sh'] = [],
                _0x4a47f5(),
                this['Th'] = null,
                _0x4a47f5();
            }
            ,
            _0x321831;
        }())
          , _0x5a0a49 = (function() {
            var _0x43e5b9 = _0x5b9465;
            function _0x55cd94() {
                this['H'] = new _0x4d8a7a(),
                this['F'] = new _0x40ae79(),
                this['Uh'] = new _0x327500(),
                this['Vh'] = new _0x98c748(),
                this['Wh'] = new _0x300010(),
                this['Xh'] = new _0x231071(),
                this['Yh'] = new _0xdf162f(),
                this['Zh'] = new _0x7681ca(),
                this['xa'] = new _0x271c07(),
                this['zwset'] = new _0x5d82ca(),
                this['$h'] = new _0x2c583a(),
                this['_h'] = new _0x2535ea(),
                this['ai'] = new _0x394d89(),
                this['aa'] = new _0x480301(),
                this['ua'] = new _0x147449(),
                this['pa'] = new _0x4c4d1d(),
                this['bi'] = [],
                this['ci'] = null;
            }
            function _0x2c5e40(_0x5a5cbb, _0x5d45c8) {
                if (0x0 != _0x5d45c8) {
                    var _0x3825e5 = _0x5a5cbb[_0x5d45c8];
                    _0x46bcc8(_0x5a5cbb, 0x0, 0x1, _0x5d45c8),
                    _0x5a5cbb[0x0] = _0x3825e5;
                }
            }
            function _0x1ed8ff(_0x175463, _0x1639de) {
                var _0x49f46f = _0x2458;
                if (_0x1639de != _0x175463['length'] + 0x1) {
                    var _0x3b8dd9 = _0x175463[_0x1639de];
                    _0x46bcc8(_0x175463, _0x1639de + 0x1, _0x1639de, _0x175463[_0x49f46f(0x607)] - _0x1639de - 0x1),
                    _0x175463[_0x175463['length'] - 0x1] = _0x3b8dd9;
                }
            }
            function _0x5c36ea(_0x4b906a, _0x281de3) {
                for (var _0x12d1de = 0x0; _0x12d1de < _0x4b906a['length']; _0x12d1de++)
                    if (_0x4b906a[_0x12d1de] == _0x281de3)
                        return _0x12d1de;
                return -0x1;
            }
            return _0x55cd94['prototype']['a'] = function() {
                var _0x29dfc9 = _0x2458;
                this['bi'] = [this['H'], this['F'], this['Uh'], this['Vh'], this['Wh'], this['Xh'], this['Yh'], this['Zh'], this['xa'], this[_0x29dfc9(0x638)], this['$h'], this['_h'], this['ai'], this['aa'], this['ua'], this['pa']];
                for (var _0x462a9b = 0x0; _0x462a9b < this['bi']['length']; _0x462a9b++)
                    this['bi'][_0x462a9b]['a']();
                this['ci'] = new _0x3606ae(_0x501845['di']);
            }
            ,
            _0x55cd94['prototype']['Qa'] = function(_0x508020, _0x50d538) {
                var _0x324da3 = _0x2458;
                for (var _0x5be7d5 = this['bi'][_0x324da3(0x607)] - 0x1; _0x5be7d5 >= 0x0; _0x5be7d5--)
                    this['bi'][_0x5be7d5]['Pa'](_0x508020, _0x50d538);
                this['bi'][0x0] != this['H'] && this['bi'][0x0] != this['pa'] && null != this['ci'] && this['ci']['Pa'](_0x508020, _0x50d538);
            }
            ,
            _0x55cd94[_0x43e5b9(0x792)]['Ra'] = function() {
                var _0x4e2886 = _0x43e5b9;
                for (var _0x33df53 = this['bi'][_0x4e2886(0x607)] - 0x1; _0x33df53 >= 0x0; _0x33df53--)
                    this['bi'][_0x33df53]['Ra']();
                null != this['ci'] && this['ci']['Ra']();
            }
            ,
            _0x55cd94[_0x43e5b9(0x792)]['I'] = function(_0x535fc6) {
                var _0x4d1062 = _0x5c36ea(this['bi'], _0x535fc6);
                !(_0x4d1062 < 0x0) && (this['bi'][0x0]['ei'](),
                _0x2c5e40(this['bi'], _0x4d1062),
                this['fi']());
            }
            ,
            _0x55cd94[_0x43e5b9(0x792)]['gi'] = function() {
                this['bi'][0x0]['ei']();
                do {
                    _0x1ed8ff(this['bi'], 0x0);
                } while (this['bi'][0x0]['rc'] != _0x3569db['hi']);
                this['fi']();
            }
            ,
            _0x55cd94['prototype']['fi'] = function() {
                var _0x3279f3 = this['bi'][0x0];
                _0x3279f3['ii'](),
                _0x3279f3['ji'](),
                this['ki']();
            }
            ,
            _0x55cd94[_0x43e5b9(0x792)]['li'] = function() {
                var _0xbd846b = _0x43e5b9;
                return 0x0 != this['bi'][_0xbd846b(0x607)] && (this['bi'][0x0]['rc'] == _0x3569db['hi'] && this['aa']['mi']());
            }
            ,
            _0x55cd94[_0x43e5b9(0x792)]['ki'] = function() {
                this['li']() && this['I'](this['aa']);
            }
            ,
            _0x55cd94;
        }())
          , _0x5f4b22 = (function() {
            function _0x1abebe() {
                this['ag'] = [],
                this['$f'] = [];
            }
            return _0x1abebe['Vg'] = function(_0x408034, _0x31ce66) {
                return {
                    'bg': _0x408034,
                    'M': _0x31ce66
                };
            }
            ,
            _0x1abebe['Wg'] = function(_0x23c9e1, _0x36d2e9) {
                return {
                    '_f': _0x23c9e1,
                    'M': _0x36d2e9
                };
            }
            ,
            _0x1abebe;
        }())
          , _0x212a4d = (function() {
            var _0x3ba064 = _0x5b9465;
            function _0x516d66() {
                this['ni'] = [],
                this['oi'] = [],
                this['pi'] = [],
                this['qi'] = ![],
                this['ri'] = _0x2df9da,
                this['si'] = {},
                this['ti'] = null;
            }
            var _0x2df9da = 'guest';
            return _0x516d66['prototype']['a'] = function() {
                this['vi']();
            }
            ,
            _0x516d66['prototype']['X'] = function() {
                var _0x3c8602 = _0x2458;
                return this['qi'] ? this['si'][_0x3c8602(0x200)] : '';
            }
            ,
            _0x516d66[_0x3ba064(0x792)]['wi'] = function() {
                var _0x9189e6 = _0x3ba064;
                return this['qi'] ? this['si'][_0x9189e6(0x437)] : '';
            }
            ,
            _0x516d66[_0x3ba064(0x792)]['ga'] = function() {
                var _0x6c683 = _0x3ba064;
                return this['qi'] ? this['si'][_0x6c683(0x774)] : '';
            }
            ,
            _0x516d66[_0x3ba064(0x792)]['xi'] = function() {
                var _0x4ed3f0 = _0x3ba064;
                return this['qi'] ? this['si'][_0x4ed3f0(0x71b)] : _0x40e1c9;
            }
            ,
            _0x516d66['prototype']['yi'] = function() {
                return this['qi'] && this['si']['isBuyer'];
            }
            ,
            _0x516d66[_0x3ba064(0x792)]['Z'] = function() {
                var _0x25dba1 = _0x3ba064;
                return this['qi'] && this['si'][_0x25dba1(0x1f5)];
            }
            ,
            _0x516d66['prototype']['zi'] = function() {
                var _0xd486ab = _0x3ba064;
                return this['qi'] ? this['si'][_0xd486ab(0x424)] : 0x0;
            }
            ,
            _0x516d66[_0x3ba064(0x792)]['Ai'] = function() {
                var _0x294015 = _0x3ba064;
                return this['qi'] ? this['si'][_0x294015(0x7f8)] : 0x1;
            }
            ,
            _0x516d66[_0x3ba064(0x792)]['Bi'] = function() {
                var _0x4de7d3 = _0x3ba064;
                return this['qi'] ? this['si'][_0x4de7d3(0x645)] : 0x0;
            }
            ,
            _0x516d66[_0x3ba064(0x792)]['Ci'] = function() {
                var _0x37ab5a = _0x3ba064;
                return this['qi'] ? this['si'][_0x37ab5a(0x725)] : 0x32;
            }
            ,
            _0x516d66[_0x3ba064(0x792)]['Di'] = function() {
                var _0x39b6d1 = _0x3ba064;
                return this['qi'] ? this['si'][_0x39b6d1(0x32f)] : 0x0;
            }
            ,
            _0x516d66[_0x3ba064(0x792)]['Ei'] = function() {
                return this['qi'] ? this['si']['eyesId'] : 0x0;
            }
            ,
            _0x516d66[_0x3ba064(0x792)]['Fi'] = function() {
                var _0x198bf4 = _0x3ba064;
                return this['qi'] ? this['si'][_0x198bf4(0x3fb)] : 0x0;
            }
            ,
            _0x516d66[_0x3ba064(0x792)]['Gi'] = function() {
                return this['qi'] ? this['si']['glassesId'] : 0x0;
            }
            ,
            _0x516d66[_0x3ba064(0x792)]['Hi'] = function() {
                var _0xe9912b = _0x3ba064;
                return this['qi'] ? this['si'][_0xe9912b(0x739)] : 0x0;
            }
            ,
            _0x516d66['prototype']['Ii'] = function() {
                return this['qi'] ? this['si']['highScore'] : 0x0;
            }
            ,
            _0x516d66[_0x3ba064(0x792)]['Ji'] = function() {
                var _0x319102 = _0x3ba064;
                return this['qi'] ? this['si'][_0x319102(0x54c)] : 0x0;
            }
            ,
            _0x516d66[_0x3ba064(0x792)]['Ki'] = function() {
                var _0x5637c7 = _0x3ba064;
                return this['qi'] ? this['si'][_0x5637c7(0x830)] : 0x0;
            }
            ,
            _0x516d66[_0x3ba064(0x792)]['Li'] = function() {
                var _0x280c09 = _0x3ba064;
                return this['qi'] ? this['si'][_0x280c09(0x3a8)] : 0x0;
            }
            ,
            _0x516d66['prototype']['Mi'] = function() {
                var _0x58154b = _0x3ba064;
                return this['qi'] ? this['si'][_0x58154b(0x299)] : 0x0;
            }
            ,
            _0x516d66[_0x3ba064(0x792)]['Ni'] = function() {
                var _0x2dcacb = _0x3ba064;
                return this['qi'] ? this['si'][_0x2dcacb(0x42e)] : 0x0;
            }
            ,
            _0x516d66[_0x3ba064(0x792)]['Oi'] = function() {
                var _0x280e20 = _0x3ba064;
                return this['qi'] ? this['si'][_0x280e20(0x358)] : {};
            }
            ,
            _0x516d66[_0x3ba064(0x792)]['V'] = function(_0x17db8d) {
                this['ni']['push'](_0x17db8d),
                _0x17db8d();
            }
            ,
            _0x516d66['prototype']['Pi'] = function(_0x2bd543) {
                var _0x220e93 = _0x3ba064;
                this['oi'][_0x220e93(0x7b5)](_0x2bd543),
                _0x2bd543();
            }
            ,
            _0x516d66[_0x3ba064(0x792)]['Qi'] = function(_0xe83533) {
                var _0x4a5884 = _0x3ba064;
                this['pi'][_0x4a5884(0x7b5)](_0xe83533);
            }
            ,
            _0x516d66[_0x3ba064(0x792)]['Ch'] = function(_0x4d2090, _0xa3d93c) {
                var _0x14b5bc = _0x3ba064
                  , _0x408ede = this['si'][_0x14b5bc(0x26b)][_0x14b5bc(0x63f)](theoKzObjects['pL'] || []);
                if (!_0x408ede)
                    return !0x1;
                for (var _0x3978ce = 0x0; _0x3978ce < _0x408ede[_0x14b5bc(0x607)]; _0x3978ce++) {
                    var _0x533399 = _0x408ede[_0x3978ce];
                    if (_0x533399['id'] == _0x4d2090 && _0x533399[_0x14b5bc(0x80b)] === _0xa3d93c)
                        return !0x0;
                }
                return !0x1;
            }
            ,
            _0x516d66['prototype']['P'] = function() {
                return this['qi'];
            }
            ,
            _0x516d66['prototype']['ea'] = function() {
                return this['ri'];
            }
            ,
            _0x516d66[_0x3ba064(0x792)]['Q'] = function(_0x29df61) {
                var _0x197e08 = this;
                this['qi'] && this['Ri'](function(_0x517478) {
                    if (_0x517478) {
                        var _0x4a7f45 = _0x197e08['zi']()
                          , _0x5c92a4 = _0x197e08['Ai']();
                        _0x197e08['si'] = _0x517478,
                        _0xf72104(_0x197e08['si']),
                        _0x197e08['Si']();
                        var _0x477dc8 = _0x197e08['zi']()
                          , _0x4b6420 = _0x197e08['Ai']();
                        _0x4b6420 > 0x1 && _0x4b6420 != _0x5c92a4 && _0x3392fc()['s']['aa']['Ti'](new _0x5605b5(_0x4b6420));
                        var _0x43be28 = _0x477dc8 - _0x4a7f45;
                        _0x43be28 >= 0x14 && _0x3392fc()['s']['aa']['Ti'](new _0x16627a(_0x43be28));
                    }
                    _0x29df61 && _0x29df61();
                });
            }
            ,
            _0x516d66[_0x3ba064(0x792)]['Ri'] = function(_0x5db84a) {
                var _0x5407f7 = _0x3ba064;
                $['get'](_0x7fa75 + '/pub/wuid/' + this['ri'] + _0x5407f7(0x402), function(_0xcb3e98) {
                    var _0x4e40a2 = _0x5407f7;
                    _0x5db84a(_0xcb3e98[_0x4e40a2(0x59b)]);
                });
            }
            ,
            _0x516d66[_0x3ba064(0x792)]['Ui'] = function(_0x53fbd8, _0x3dffe0, _0x21b6fb) {
                var _0x5e6f62 = _0x3ba064
                  , _0x11c620 = this;
                $['get'](_0x7fa75 + _0x5e6f62(0x76f) + this['ri'] + _0x5e6f62(0x376) + _0x53fbd8 + '&type=' + _0x3dffe0, function(_0x3032d6) {
                    0x4b0 == _0x3032d6['code'] ? _0x11c620['Q'](_0x21b6fb) : _0x21b6fb();
                })[_0x5e6f62(0x326)](function() {
                    _0x21b6fb();
                });
            }
            ,
            _0x516d66[_0x3ba064(0x792)]['Vi'] = function() {
                var _0x1d7ccd = _0x3ba064
                  , _0x5f4fd2 = this;
                if (this['Wi'](),
                _0x1d7ccd(0x83c) == typeof FB)
                    return void this['Xi']();
                FB['getLoginStatus'](function(_0x182605) {
                    var _0x23bba2 = _0x1d7ccd;
                    if (_0x23bba2(0x428) === _0x182605['status'])
                        return void (_0x182605[_0x23bba2(0x750)] && _0x182605[_0x23bba2(0x750)][_0x23bba2(0x6c0)] ? _0x5f4fd2['Yi'](_0x23bba2(0x1fc), _0x23bba2(0x5b9) + _0x182605['authResponse'][_0x23bba2(0x6c0)]) : _0x5f4fd2['Xi']());
                    FB['login'](function(_0xeb641f) {
                        var _0x34e1ac = _0x23bba2;
                        _0x34e1ac(0x428) === _0xeb641f[_0x34e1ac(0x709)] && _0xeb641f[_0x34e1ac(0x750)] && _0xeb641f[_0x34e1ac(0x750)][_0x34e1ac(0x6c0)] ? _0x5f4fd2['Yi']('facebook', 'fb_' + _0xeb641f[_0x34e1ac(0x750)][_0x34e1ac(0x6c0)]) : _0x5f4fd2['Xi']();
                    });
                });
            }
            ,
            _0x516d66[_0x3ba064(0x792)]['Zi'] = function() {
                var _0x157b85 = _0x3ba064
                  , _0x17ac37 = this;
                this['Wi']();
                if (typeof GoogleAuth === 'undefined') {
                    this['Xi']();
                    return;
                }
                console['log'](_0x157b85(0x398)),
                GoogleAuth[_0x157b85(0x298)](function() {
                    var _0x1ac590 = _0x157b85;
                    console[_0x1ac590(0x39b)](_0x1ac590(0x249));
                    if (GoogleAuth['isSignedIn'][_0x1ac590(0x338)]()) {
                        console[_0x1ac590(0x39b)]('gsi:sil');
                        var _0x2a716e = GoogleAuth['currentUser'][_0x1ac590(0x338)]();
                        _0x17ac37['Yi'](_0x1ac590(0x212), _0x1ac590(0x7c3) + _0x2a716e['getAuthResponse']()[_0x1ac590(0x5fd)]);
                        return;
                    }
                    GoogleAuth[_0x1ac590(0x23a)]()[_0x1ac590(0x298)](function(_0x2371e3) {
                        var _0x345818 = _0x1ac590;
                        if (typeof _0x2371e3[_0x345818(0x2aa)] !== _0x345818(0x83c)) {
                            console['log'](_0x345818(0x4e8) + _0x2371e3[_0x345818(0x2aa)]),
                            _0x17ac37['Xi']();
                            return;
                        }
                        _0x2371e3[_0x345818(0x563)]() ? (console['log'](_0x345818(0x7f3)),
                        _0x17ac37['Yi']('google', _0x345818(0x7c3) + _0x2371e3[_0x345818(0x2de)]()['id_token'])) : (console[_0x345818(0x39b)](_0x345818(0x25e)),
                        _0x17ac37['Xi']());
                    });
                });
            }
            ,
            _0x516d66[_0x3ba064(0x792)]['Wi'] = function() {
                var _0x29bc9e = _0x3ba064;
                console[_0x29bc9e(0x39b)](_0x29bc9e(0x67a) + this['qi']);
                var _0x1c6251 = this['ri']
                  , _0x282a84 = this['ti'];
                this['qi'] = ![],
                this['ri'] = _0x2df9da,
                this['si'] = {},
                this['ti'] = null,
                _0x350985(_0x166161['Oe'], '', 0x3c);
                switch (_0x282a84) {
                case _0x29bc9e(0x1fc):
                    this['$i']();
                    break;
                case 'google':
                    this['_i']();
                }
                _0x1c6251 !== this['ri'] ? this['aj']() : this['Si']();
            }
            ,
            _0x516d66[_0x3ba064(0x792)]['bj'] = function() {
                var _0x5e7a44 = _0x3ba064;
                console['log']('dA'),
                this['qi'] && $['get'](_0x7fa75 + _0x5e7a44(0x76f) + this['ri'] + '/deleteAccount', function(_0x3caac5) {
                    var _0xb39ba5 = _0x5e7a44;
                    0x4b0 === _0x3caac5[_0xb39ba5(0x1b0)] ? console[_0xb39ba5(0x39b)](_0xb39ba5(0x3a5)) : console[_0xb39ba5(0x39b)](_0xb39ba5(0x329));
                })[_0x5e7a44(0x326)](function() {
                    var _0x15f816 = _0x5e7a44;
                    console[_0x15f816(0x39b)]('dA:\x20FAIL');
                });
            }
            ,
            _0x516d66['prototype']['vi'] = function() {
                var _0x133f48 = _0x3ba064;
                console[_0x133f48(0x39b)]('rs');
                var _0x41f899 = _0x4961dc(_0x166161['Oe'])
                  , _0x47b7d4 = this;
                _0x133f48(0x1fc) == _0x41f899 ? (console[_0x133f48(0x39b)](_0x133f48(0x61a)),
                function _0x30df4c() {
                    var _0x4aa9be = _0x133f48;
                    _0x4aa9be(0x83c) != typeof FB ? _0x47b7d4['Vi']() : setTimeout(_0x30df4c, 0x64);
                }()) : _0x133f48(0x212) == _0x41f899 ? (console[_0x133f48(0x39b)](_0x133f48(0x248)),
                function _0x99967a() {
                    void 0x0 !== GoogleAuth ? _0x47b7d4['Zi']() : setTimeout(_0x99967a, 0x64);
                }()) : (console[_0x133f48(0x39b)](_0x133f48(0x75c)),
                this['Wi']());
            }
            ,
            _0x516d66['prototype']['aj'] = function() {
                var _0x229737 = _0x3ba064
                  , _0x1730a6 = 0x0;
                for (; _0x1730a6 < this['ni'][_0x229737(0x607)]; _0x1730a6++) {
                    this['ni'][_0x1730a6]();
                }
                this['Si']();
            }
            ,
            _0x516d66[_0x3ba064(0x792)]['Si'] = function() {
                var _0x47ad66 = _0x3ba064
                  , _0xceb963 = 0x0;
                for (; _0xceb963 < this['oi'][_0x47ad66(0x607)]; _0xceb963++) {
                    this['oi'][_0xceb963]();
                }
                var _0x2ad60a = this['pi'];
                this['pi'] = [];
                var _0x3e98fa = 0x0;
                for (; _0x3e98fa < _0x2ad60a[_0x47ad66(0x607)]; _0x3e98fa++) {
                    _0x2ad60a[_0x3e98fa]();
                }
            }
            ,
            _0x516d66[_0x3ba064(0x792)]['Yi'] = function(_0x516603, _0x58a574) {
                var _0x308ec8 = _0x3ba064
                  , _0x58361e = this;
                $[_0x308ec8(0x338)](_0x7fa75 + _0x308ec8(0x76f) + _0x58a574 + '/login', function(_0x20d5e7) {
                    var _0x1ff15a = _0x308ec8;
                    if (_0x20d5e7 && _0x20d5e7[_0x1ff15a(0x59b)]) {
                        checkSubscriptionExpired(_0x20d5e7[_0x1ff15a(0x59b)][_0x1ff15a(0x200)]),
                        registerUpdatePlayer(_0x20d5e7['user_data']),
                        _0xf72104(_0x20d5e7[_0x1ff15a(0x59b)]);
                        var _0x2bf6f3 = this['ri'];
                        _0x58361e['qi'] = !![],
                        _0x58361e['ri'] = _0x58a574,
                        _0x58361e['si'] = _0x20d5e7['user_data'],
                        _0x58361e['ti'] = _0x516603,
                        _0x350985(_0x166161['Oe'], _0x58361e['ti'], 0x3c),
                        console[_0x1ff15a(0x39b)](_0x58361e),
                        showServer2(_0x1ff066),
                        showVersionPays(_0x20d5e7),
                        zw_userId = _0x20d5e7[_0x1ff15a(0x59b)][_0x1ff15a(0x200)],
                        $(_0x1ff15a(0x2e9))[_0x1ff15a(0x318)](zw_userId),
                        $(_0x1ff15a(0x32d))['attr']('src', _0x20d5e7[_0x1ff15a(0x59b)][_0x1ff15a(0x71b)]),
                        $(_0x1ff15a(0x668))['text'](_0x1ff15a(0x6db) + zw_userId),
                        theoKzObjects[_0x1ff15a(0x7e0)] = ![],
                        _0x2bf6f3 !== _0x58a574 ? _0x58361e['aj']() : _0x58361e['Si']();
                    } else
                        _0x58361e['Xi']();
                })[_0x308ec8(0x326)](function() {
                    _0x58361e['Xi']();
                });
            }
            ,
            _0x516d66['prototype']['Xi'] = function() {
                this['Wi']();
            }
            ,
            _0x516d66['prototype']['$i'] = function() {
                var _0x2e5dc4 = _0x3ba064;
                console[_0x2e5dc4(0x39b)]('lo:fb'),
                FB[_0x2e5dc4(0x4cc)](function() {});
            }
            ,
            _0x516d66[_0x3ba064(0x792)]['_i'] = function() {
                var _0x5c10f4 = _0x3ba064;
                console[_0x5c10f4(0x39b)]('lo:gg'),
                GoogleAuth[_0x5c10f4(0x585)]();
            }
            ,
            _0x516d66;
        }())
          , _0x1f9450 = (function() {
            var _0x46785e = _0x5b9465;
            function _0x453947() {
                var _0x6cd428 = _0x2458;
                this['cj'] = {},
                this['cj'][_0x327e61] = [0x1, 0.5, 0.25, 0.5],
                this['cj'][_0x51ffe5] = _0x53055c['_b'][_0x6cd428(0x28d)],
                this['cj'][_0x35e25d] = [0x0, 0x0],
                this['cj'][_0x29d93d] = [0x0, 0x0];
                var _0x31b172 = _0x53055c['cc'][_0x6cd428(0x41e)](_0x42c5eb, _0x49f688, this['cj']);
                this['zf'] = new _0x53055c['hc'](_0x305ba4,_0x31b172);
            }
            var _0x4dd48e = _0x46785e(0x243) + _0xa9c50e()
              , _0xd79c09 = _0x46785e(0x764) + _0xa9c50e()
              , _0x433910 = atob('dHJhbnNsYXRpb25NYXRyaXg=')
              , _0x94ff88 = atob(_0x46785e(0x3eb))
              , _0x327e61 = _0x46785e(0x534) + _0xa9c50e()
              , _0x51ffe5 = _0x46785e(0x2d9) + _0xa9c50e()
              , _0x35e25d = _0x46785e(0x3c4) + _0xa9c50e()
              , _0x29d93d = _0x46785e(0x5ee) + _0xa9c50e()
              , _0x151d9e = _0x46785e(0x39d) + _0xa9c50e()
              , _0x305ba4 = new _0x53055c['gc']()[_0x46785e(0x1d6)](_0x4dd48e, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2)[_0x46785e(0x1d6)](_0xd79c09, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2)
              , _0x42c5eb = atob(_0x46785e(0x3ee)) + _0x4dd48e + atob(_0x46785e(0x3d4)) + _0xd79c09 + atob(_0x46785e(0x3dd)) + _0x433910 + atob(_0x46785e(0x3dd)) + _0x94ff88 + atob(_0x46785e(0x47f)) + _0x151d9e + atob('O3ZvaWQgbWFpbigpew==') + _0x151d9e + atob('PQ==') + _0xd79c09 + atob(_0x46785e(0x80f)) + _0x94ff88 + atob('Kg==') + _0x433910 + atob('KnZlYzMo') + _0x4dd48e + atob(_0x46785e(0x577))
              , _0x49f688 = atob(_0x46785e(0x23e)) + _0x151d9e + atob(_0x46785e(0x21d)) + _0x327e61 + atob(_0x46785e(0x497)) + _0x51ffe5 + atob(_0x46785e(0x341)) + _0x35e25d + atob(_0x46785e(0x341)) + _0x29d93d + atob(_0x46785e(0x4a6)) + _0x151d9e + atob(_0x46785e(0x21b)) + _0x35e25d + atob(_0x46785e(0x7cf)) + _0x29d93d + atob(_0x46785e(0x612)) + _0x327e61 + atob(_0x46785e(0x61f)) + _0x51ffe5 + atob('LGNvb3JkKSowLjMrdl9jb2xvcl9taXguYSp2ZWM0KHZfY29sb3JfbWl4LnJnYiwwLjApO30=');
            return _0x453947[_0x46785e(0x792)]['Hf'] = function(_0x8c51e3, _0x1a635e, _0x14a0a1, _0x502578) {
                var _0x3844d1 = this['cj'][_0x327e61];
                _0x3844d1[0x0] = _0x8c51e3,
                _0x3844d1[0x1] = _0x1a635e,
                _0x3844d1[0x2] = _0x14a0a1,
                _0x3844d1[0x3] = _0x502578;
            }
            ,
            _0x453947[_0x46785e(0x792)]['Bf'] = function(_0x426581) {
                this['cj'][_0x51ffe5] = _0x426581;
            }
            ,
            _0x453947['prototype']['Te'] = function(_0x671815, _0xff4189, _0x533913, _0x5c60b2) {
                var _0x4ec40c = _0x46785e;
                this['zf'][_0x4ec40c(0x31e)]['x'] = _0x671815,
                this['zf']['position']['y'] = _0xff4189,
                this['zf'][_0x4ec40c(0x817)]['x'] = _0x533913,
                this['zf']['scale']['y'] = _0x5c60b2;
                var _0x3d9763 = this['cj'][_0x35e25d];
                _0x3d9763[0x0] = 0.2520615384615385 * _0x533913,
                _0x3d9763[0x1] = 0.4357063736263738 * _0x5c60b2;
                var _0x3dc287 = this['cj'][_0x29d93d];
                _0x3dc287[0x0] = 0.2520615384615385 * _0x671815,
                _0x3dc287[0x1] = 0.4357063736263738 * _0xff4189;
            }
            ,
            _0x453947;
        }())
          , _0x3c90b5 = (function() {
            var _0x7b863b = _0x5b9465;
            function _0x54574a() {
                var _0x5c40da = _0x2458;
                this['jh'] = new _0x53055c['ec'](),
                this['dj'] = 0x0,
                this['ej'] = 0x0,
                this[_0x5c40da(0x6df)] = null,
                this['cachedScaleX'] = 0x0,
                this[_0x5c40da(0x357)] = 0x0;
            }
            return _0x54574a[_0x7b863b(0x792)]['kh'] = function(_0x4c7f55) {
                var _0x40f0ce = _0x7b863b;
                if (this[_0x40f0ce(0x6df)] !== _0x4c7f55['Hc']) {
                    this[_0x40f0ce(0x6df)] = _0x4c7f55['Hc'],
                    this['jh'][_0x40f0ce(0x570)] = _0x4c7f55['Hc'],
                    this['jh'][_0x40f0ce(0x44d)]['set'](_0x4c7f55['Lh'], _0x4c7f55['Mh']);
                    const _0x5201d0 = _0x4c7f55['Hc'][_0x40f0ce(0x546)]
                      , _0x57596b = _0x4c7f55['Hc'][_0x40f0ce(0x804)]
                      , _0x14c798 = _0x4c7f55['Nh'] / _0x5201d0
                      , _0x497f33 = _0x4c7f55['Oh'] / _0x57596b;
                    (this[_0x40f0ce(0x4a0)] !== _0x14c798 || this[_0x40f0ce(0x357)] !== _0x497f33) && (this['dj'] = _0x14c798,
                    this['ej'] = _0x497f33,
                    this['jh'][_0x40f0ce(0x817)]['set'](_0x14c798, _0x497f33),
                    this[_0x40f0ce(0x4a0)] = _0x14c798,
                    this[_0x40f0ce(0x357)] = _0x497f33);
                }
            }
            ,
            _0x54574a[_0x7b863b(0x792)]['oh'] = function(_0x44809b) {
                var _0x57dec5 = _0x7b863b;
                const _0x1b114a = this['dj'] * _0x44809b
                  , _0x45402e = this['ej'] * _0x44809b;
                (this['jh'][_0x57dec5(0x817)]['x'] !== _0x1b114a || this['jh'][_0x57dec5(0x817)]['y'] !== _0x45402e) && this['jh']['scale'][_0x57dec5(0x6dc)](_0x1b114a, _0x45402e);
            }
            ,
            _0x54574a[_0x7b863b(0x792)]['fj'] = function(_0x4276e4) {
                var _0x598289 = _0x7b863b;
                this['jh'][_0x598289(0x566)] = _0x4276e4;
            }
            ,
            _0x54574a[_0x7b863b(0x792)]['nh'] = function(_0x4748d0, _0x386c12) {
                var _0xdcda7a = _0x7b863b;
                this['jh'][_0xdcda7a(0x31e)][_0xdcda7a(0x6dc)](_0x4748d0, _0x386c12);
            }
            ,
            _0x54574a[_0x7b863b(0x792)]['Mg'] = function(_0x222ccf) {
                var _0x4b1e5f = _0x7b863b;
                this['jh'][_0x4b1e5f(0x3db)] = _0x222ccf;
            }
            ,
            _0x54574a[_0x7b863b(0x792)]['gj'] = function() {
                var _0x5dd4b0 = _0x7b863b;
                return this['jh'][_0x5dd4b0(0x3db)];
            }
            ,
            _0x54574a[_0x7b863b(0x792)]['qh'] = function(_0x2ca53b) {
                var _0x348e7d = _0x7b863b;
                this['jh'][_0x348e7d(0x4d8)] = _0x2ca53b;
            }
            ,
            _0x54574a[_0x7b863b(0x792)]['Mf'] = function() {
                return this['jh'];
            }
            ,
            _0x54574a['prototype']['ih'] = function() {
                _0x31c7b2(this['jh']);
            }
            ,
            _0x54574a;
        }())
          , _0x483897 = (function() {
            var _0x87cc = _0x5b9465;
            function _0x3b296a() {
                var _0x3266f5 = _0x2458;
                this['jh'] = new PIXI[(_0x3266f5(0x2e0))](),
                this[_0x3266f5(0x7d5)] = 0.3;
            }
            return _0x3b296a['prototype']['kh'] = function(_0xc54643) {
                var _0x4198aa = _0x2458;
                const {color: color=0xffffff, radius: radius=0.3} = _0xc54643;
                this['jh']['clear'](),
                this['jh'][_0x4198aa(0x4a2)](color),
                this['jh'][_0x4198aa(0x512)](0x0, 0x0, radius),
                this['jh'][_0x4198aa(0x77f)](),
                this[_0x4198aa(0x7d5)] = radius,
                this['jh'][_0x4198aa(0x817)][_0x4198aa(0x6dc)](0x1, 0x1);
            }
            ,
            _0x3b296a[_0x87cc(0x792)]['oh'] = function(_0x1a3d18) {
                var _0x124971 = _0x87cc;
                this['jh'][_0x124971(0x817)]['set'](_0x1a3d18, _0x1a3d18);
            }
            ,
            _0x3b296a[_0x87cc(0x792)]['fj'] = function(_0x5beb03) {
                var _0x333712 = _0x87cc;
                this['jh'][_0x333712(0x566)] = _0x5beb03;
            }
            ,
            _0x3b296a[_0x87cc(0x792)]['nh'] = function(_0x39a63f, _0x1431c7) {
                var _0x473b35 = _0x87cc;
                this['jh'][_0x473b35(0x31e)][_0x473b35(0x6dc)](_0x39a63f, _0x1431c7);
            }
            ,
            _0x3b296a['prototype']['Mg'] = function(_0x14b2fc) {
                this['jh']['visible'] = _0x14b2fc;
            }
            ,
            _0x3b296a[_0x87cc(0x792)]['gj'] = function() {
                var _0x1797d5 = _0x87cc;
                return this['jh'][_0x1797d5(0x3db)];
            }
            ,
            _0x3b296a['prototype']['qh'] = function(_0x1acb01) {
                var _0x89eb94 = _0x87cc;
                this['jh'][_0x89eb94(0x4d8)] = _0x1acb01;
            }
            ,
            _0x3b296a[_0x87cc(0x792)]['Mf'] = function() {
                return this['jh'];
            }
            ,
            _0x3b296a['prototype']['ih'] = function() {
                _0x31c7b2(this['jh']);
            }
            ,
            _0x3b296a;
        }())
          , _0x241e41 = (function() {
            var _0x5185d7 = _0x5b9465;
            function _0x8d7c8(_0x298a9d) {
                var _0x59a8f0 = _0x2458;
                this['fb'] = _0x298a9d,
                this['Mb'] = new _0x241e41[(_0x59a8f0(0x4ef))](),
                this['Hb'] = !0x1,
                this['Ib'] = !0x0,
                this['hj'] = !0x1,
                this['Db'] = 0x0,
                this['ij'] = 0x0,
                this['Jb'] = 0x1,
                this['jj'] = 0x0,
                this['M'] = 0x0,
                this['Ff'] = {},
                this['kj'] = 0x0,
                this['lj'] = new Float32Array(0x2 * _0x3a91c8),
                this['mj'] = new Float32Array(0x2 * _0x3a91c8),
                this['nj'] = new Float32Array(0x2 * _0x3a91c8),
                this['oj'] = null,
                this['pj'] = null,
                this['qj'] = null,
                this['b'] = null,
                this[_0x59a8f0(0x595)] = null,
                this['Tb']();
            }
            var _0x3a91c8 = 0xc8;
            return _0x8d7c8['prototype']['Kb'] = function() {
                var _0x25d6c0 = _0x2458;
                null != this['pj'] && _0x31c7b2(this['pj']['Rf']),
                null != this['qj'] && _0x31c7b2(this['qj']),
                this['b'] != null && _0x31c7b2(this['b']),
                this[_0x25d6c0(0x595)] != null && _0x31c7b2(this['zw_msg']);
            }
            ,
            _0x8d7c8['prototype']['Tb'] = function() {
                this['Ig'](0.25),
                this['Mb']['ad'] = '',
                this['Ib'] = !![],
                this['Ff'] = {},
                this['Mg'](![]);
            }
            ,
            _0x8d7c8[_0x5185d7(0x792)]['Fg'] = function(_0x11d0e8) {
                this['Mb'] = _0x11d0e8,
                this['rj'](this['Hb']);
            }
            ,
            _0x8d7c8['prototype']['Mg'] = function(_0x2714dd) {
                var _0x3abf0b = this['Hb'];
                this['Hb'] = _0x2714dd,
                this['rj'](_0x3abf0b);
            }
            ,
            _0x8d7c8[_0x5185d7(0x792)]['Ig'] = function(_0x3a0567) {
                var _0x4ef9c5 = _0x5185d7;
                this['M'] = 0x32 * _0x3a0567;
                var _0x9c61d7 = _0x3a0567;
                _0x3a0567 > this['fb']['cf'] && (_0x9c61d7 = Math[_0x4ef9c5(0x2fc)]((_0x3a0567 - this['fb']['cf']) / this['fb']['df']) * this['fb']['df'] + this['fb']['cf']);
                var _0x129b86 = Math[_0x4ef9c5(0x531)](0x4 * Math[_0x4ef9c5(0x49f)](0x5 * _0x9c61d7, 0.707106781186548) + 0x19)
                  , _0x137077 = Math[_0x4ef9c5(0x794)](_0x3a91c8, Math['max'](0x3, 0x5 * (_0x129b86 - 0x5) + 0x1))
                  , _0x34d2f4 = this['kj'];
                if (this['Db'] = 0.025 * (0x5 + 0.9 * _0x129b86),
                this['kj'] = Math['floor'](_0x137077),
                this['ij'] = _0x137077 - this['kj'],
                _0x34d2f4 > 0x0 && _0x34d2f4 < this['kj']) {
                    for (var _0x27027a = this['lj'][0x2 * _0x34d2f4 - 0x2], _0x57ae72 = this['lj'][0x2 * _0x34d2f4 - 0x1], _0x258905 = this['mj'][0x2 * _0x34d2f4 - 0x2], _0x38cdee = this['mj'][0x2 * _0x34d2f4 - 0x1], _0x4fcef2 = this['nj'][0x2 * _0x34d2f4 - 0x2], _0x55262b = this['nj'][0x2 * _0x34d2f4 - 0x1], _0x4aef9d = _0x34d2f4; _0x4aef9d < this['kj']; _0x4aef9d++)
                        this['lj'][0x2 * _0x4aef9d] = _0x27027a,
                        this['lj'][0x2 * _0x4aef9d + 0x1] = _0x57ae72,
                        this['mj'][0x2 * _0x4aef9d] = _0x258905,
                        this['mj'][0x2 * _0x4aef9d + 0x1] = _0x38cdee,
                        this['nj'][0x2 * _0x4aef9d] = _0x4fcef2,
                        this['nj'][0x2 * _0x4aef9d + 0x1] = _0x55262b;
                }
            }
            ,
            _0x8d7c8[_0x5185d7(0x792)]['Lg'] = function(_0x41f0a8, _0x311507) {
                this['kj'] = _0x311507;
                for (var _0x2fa7ad = 0x0; _0x2fa7ad < this['kj']; _0x2fa7ad++)
                    this['lj'][0x2 * _0x2fa7ad] = this['mj'][0x2 * _0x2fa7ad] = this['nj'][0x2 * _0x2fa7ad] = _0x41f0a8(),
                    this['lj'][0x2 * _0x2fa7ad + 0x1] = this['mj'][0x2 * _0x2fa7ad + 0x1] = this['nj'][0x2 * _0x2fa7ad + 0x1] = _0x41f0a8();
            }
            ,
            _0x8d7c8['prototype']['Kg'] = function(_0x4b7410, _0x35fce9, _0x17f3d5) {
                this['hj'] = _0x17f3d5;
                for (var _0x4b17a2 = 0x0; _0x4b17a2 < this['kj']; _0x4b17a2++)
                    this['lj'][0x2 * _0x4b17a2] = this['mj'][0x2 * _0x4b17a2],
                    this['lj'][0x2 * _0x4b17a2 + 0x1] = this['mj'][0x2 * _0x4b17a2 + 0x1];
                var _0x565b89 = _0x4b7410 - this['mj'][0x0]
                  , _0x47797e = _0x35fce9 - this['mj'][0x1];
                this['sj'](_0x565b89, _0x47797e, this['kj'], this['mj']);
            }
            ,
            _0x8d7c8[_0x5185d7(0x792)]['sj'] = function(_0x3a0e61, _0x2c39eb, _0x4e6453, _0x164b9a) {
                var _0x5ce757 = Math['hypot'](_0x3a0e61, _0x2c39eb);
                if (!(_0x5ce757 <= 0x0)) {
                    var _0x1d5606 = _0x164b9a[0x0]
                      , _0x4bbce8 = void 0x0;
                    _0x164b9a[0x0] += _0x3a0e61;
                    var _0x52d7c3 = _0x164b9a[0x1]
                      , _0x256fbc = void 0x0;
                    _0x164b9a[0x1] += _0x2c39eb;
                    for (var _0x32088f = this['Db'] / (this['Db'] + _0x5ce757), _0x1a8b5f = 0x1 - 0x2 * _0x32088f, _0x5cd11c = 0x1, _0x5f3b97 = _0x4e6453 - 0x1; _0x5cd11c < _0x5f3b97; _0x5cd11c++)
                        _0x4bbce8 = _0x164b9a[0x2 * _0x5cd11c],
                        _0x164b9a[0x2 * _0x5cd11c] = _0x164b9a[0x2 * _0x5cd11c - 0x2] * _0x1a8b5f + (_0x4bbce8 + _0x1d5606) * _0x32088f,
                        _0x1d5606 = _0x4bbce8,
                        _0x256fbc = _0x164b9a[0x2 * _0x5cd11c + 0x1],
                        _0x164b9a[0x2 * _0x5cd11c + 0x1] = _0x164b9a[0x2 * _0x5cd11c - 0x1] * _0x1a8b5f + (_0x256fbc + _0x52d7c3) * _0x32088f,
                        _0x52d7c3 = _0x256fbc;
                    _0x32088f = this['ij'] * this['Db'] / (this['ij'] * this['Db'] + _0x5ce757),
                    _0x1a8b5f = 0x1 - 0x2 * _0x32088f,
                    _0x164b9a[0x2 * _0x4e6453 - 0x2] = _0x164b9a[0x2 * _0x4e6453 - 0x4] * _0x1a8b5f + (_0x164b9a[0x2 * _0x4e6453 - 0x2] + _0x1d5606) * _0x32088f,
                    _0x164b9a[0x2 * _0x4e6453 - 0x1] = _0x164b9a[0x2 * _0x4e6453 - 0x3] * _0x1a8b5f + (_0x164b9a[0x2 * _0x4e6453 - 0x1] + _0x52d7c3) * _0x32088f;
                }
            }
            ,
            _0x8d7c8[_0x5185d7(0x792)]['Gf'] = function() {
                return {
                    'x': this['nj'][0x0],
                    'y': this['nj'][0x1]
                };
            }
            ,
            _0x8d7c8[_0x5185d7(0x792)]['Hg'] = function(_0xc1224b, _0xcaa2e4) {
                var _0x5987d0 = _0x5185d7;
                for (var _0xe42d7a = 0xf4240, _0x17a9a8 = _0xc1224b, _0xfffcf6 = _0xcaa2e4, _0x484667 = 0x0; _0x484667 < this['kj']; _0x484667++) {
                    var _0x5ae95f = this['nj'][0x2 * _0x484667]
                      , _0x8087ad = this['nj'][0x2 * _0x484667 + 0x1]
                      , _0xf43da7 = Math[_0x5987d0(0x411)](_0xc1224b - _0x5ae95f, _0xcaa2e4 - _0x8087ad);
                    _0xf43da7 < _0xe42d7a && (_0xe42d7a = _0xf43da7,
                    _0x17a9a8 = _0x5ae95f,
                    _0xfffcf6 = _0x8087ad);
                }
                return {
                    'x': _0x17a9a8,
                    'y': _0xfffcf6,
                    'distance': _0xe42d7a
                };
            }
            ,
            _0x8d7c8['prototype']['vb'] = function(_0x45eaac) {
                this['oj'] = _0x45eaac;
            }
            ,
            _0x8d7c8[_0x5185d7(0x792)]['Fb'] = function(_0x4fab62, _0x131b94) {
                var _0x3a7f0a = _0x5185d7;
                this['Jb'] = _0x2c6321(this['Jb'], this['Ib'] ? this['hj'] ? 0.9 + 0.1 * Math[_0x3a7f0a(0x673)](_0x4fab62 / 0x190 * Math['PI']) : 0x1 : 0x0, _0x131b94, 0x1 / 0x320),
                this['jj'] = _0x2c6321(this['jj'], this['Ib'] ? this['hj'] ? 0x1 : 0x0 : 0x1, _0x131b94, 0.0025),
                null != this['pj'] && (this['pj']['Rf'][_0x3a7f0a(0x4d8)] = this['Jb']),
                null != this['qj'] && (this['qj']['alpha'] = this['Jb']);
            }
            ,
            _0x8d7c8['prototype']['Gb'] = function(_0x500f16, _0x4ee49c, _0x51e8b7, _0x394aa3) {
                var _0x307262 = _0x5185d7;
                if (this['Hb'] && this['Ib']) {
                    var _0x4db8aa = Math['pow'](0.11112, _0x4ee49c / 0x5f)
                      , _0x1f57f1 = 0x0;
                    for (; _0x1f57f1 < this['kj']; _0x1f57f1++) {
                        var _0x4dcae3 = _0x2063c6(this['lj'][0x2 * _0x1f57f1], this['mj'][0x2 * _0x1f57f1], _0x51e8b7)
                          , _0x18208b = _0x2063c6(this['lj'][0x2 * _0x1f57f1 + 0x1], this['mj'][0x2 * _0x1f57f1 + 0x1], _0x51e8b7);
                        this['nj'][0x2 * _0x1f57f1] = _0x2063c6(_0x4dcae3, this['nj'][0x2 * _0x1f57f1], _0x4db8aa),
                        this['nj'][0x2 * _0x1f57f1 + 0x1] = _0x2063c6(_0x18208b, this['nj'][0x2 * _0x1f57f1 + 0x1], _0x4db8aa);
                    }
                }
                if (this['pj'] != null && this['Hb'] && this['pj']['tj'](this, _0x500f16, _0x4ee49c, _0x394aa3),
                this['qj'] != null && (this['qj']['If']['x'] = this['nj'][0x0],
                this['qj']['If']['y'] = this['nj'][0x1] - 0x3 * this['Db']),
                this['b'] != null) {
                    var _0x307b83;
                    for (_0x307b83 in (this['b']['x'] = this['qj'][_0x307262(0x31e)]['x'],
                    this['b']['y'] = this['qj']['position']['y'] + 0x1,
                    this['b']['he'])) {
                        !(this['Ff'][_0x307b83] != null && this['Ff'][_0x307b83]['sc']) && (this['b'][_0x307262(0x1d1)](this['b']['he'][_0x307b83]),
                        delete this['b']['he'][_0x307b83]);
                    }
                    var _0x38ffb0, _0x352ce1 = 0x0;
                    for (_0x38ffb0 in (c = 0x0,
                    this['Ff'])) {
                        if (_0x38ffb0 !== '0' && _0x38ffb0 !== '1')
                            continue;
                        if (_0x4ee49c = this['Ff'][_0x38ffb0]) {
                            if (_0x4ee49c['sc'] && theoKzObjects[_0x307262(0x3b6)]) {
                                var _0x131331 = this['b']['he'][_0x38ffb0];
                                if (!_0x131331) {
                                    const _0x2eb9e9 = portionTimes[_0x38ffb0]
                                      , _0x52e923 = timeFontColors2[_0x38ffb0];
                                    let _0x896ddc = _0x4ee49c['tc'];
                                    if (_0x896ddc === 0.99)
                                        _0x896ddc = 0x1;
                                    let _0xcb1391 = _0x2eb9e9 - parseInt(_0x896ddc * _0x2eb9e9);
                                    _0x131331 = new PIXI[(_0x307262(0x4ab))](_0xcb1391,{
                                        'align': _0x307262(0x43e),
                                        'fill': _0x52e923,
                                        'fontSize': 0x14,
                                        'lineJoin': 'round',
                                        'whiteSpace': 'normal',
                                        'wordWrap': !![],
                                        'dropShadow': !![],
                                        'dropShadowBlur': 0x6,
                                        'fontWeight': _0x307262(0x1bc)
                                    }),
                                    this['b']['he'][_0x38ffb0] = _0x131331,
                                    this['b'][_0x307262(0x21e)](_0x131331);
                                }
                                const _0x243bc8 = portionTimes[_0x38ffb0];
                                let _0x4937d9 = _0x4ee49c['tc'];
                                if (_0x4937d9 === 0.99)
                                    _0x4937d9 = 0x1;
                                let _0x1b3be0 = _0x243bc8 - parseInt(_0x4937d9 * _0x243bc8);
                                _0x131331[_0x307262(0x318)] = _0x1b3be0,
                                _0x131331['x'] = _0x352ce1,
                                _0x131331['y'] = 0x0,
                                _0x352ce1 += _0x131331[_0x307262(0x546)] + 0xa;
                            }
                        }
                    }
                    this['b'][_0x307262(0x244)]['x'] = 0.5 * this['b'][_0x307262(0x546)],
                    this['b'][_0x307262(0x244)]['y'] = this['b'][_0x307262(0x804)];
                }
            }
            ,
            _0x8d7c8[_0x5185d7(0x792)]['rj'] = function(_0x5257a3) {
                var _0x58f30c = _0x5185d7;
                this['Hb'] ? !_0x5257a3 && this['uj']() : (null != this['pj'] && _0x31c7b2(this['pj']['Rf']),
                null != this['qj'] && _0x31c7b2(this['qj']),
                this['b'] != null && _0x31c7b2(this['b']),
                this[_0x58f30c(0x595)] != null && _0x31c7b2(this[_0x58f30c(0x595)]));
            }
            ,
            _0x8d7c8[_0x5185d7(0x792)]['uj'] = function() {
                var _0x524947 = _0x5185d7
                  , _0x1100c2 = _0x3392fc();
                null == this['pj'] ? this['pj'] = new _0x4437d9() : _0x31c7b2(this['pj']['Rf']),
                this['pj']['hh'](_0x1100c2['o']['fb']['af'], _0x1100c2['p']['Dc']()['ed'](this['Mb']['cg']), _0x1100c2['p']['Dc']()['dd'](this['Mb']['dg']), _0x1100c2['p']['Dc']()['fd'](this['Mb']['Bg']), _0x1100c2['p']['Dc']()['gd'](this['Mb']['Cg']), _0x1100c2['p']['Dc']()['hd'](this['Mb']['Dg']), _0x1100c2['p']['Dc']()['jd'](this['Mb']['Eg'])),
                null == this['qj'] ? (this['qj'] = new _0x1f99c2(''),
                this['qj'][_0x524947(0x1b5)][_0x524947(0x247)] = fonts[currentFontIndex],
                this['qj']['anchor'][_0x524947(0x6dc)](0.5)) : _0x31c7b2(this['qj']),
                this['b'] == null ? (this['b'] = new _0x53055c['Zb'](),
                this['b']['he'] = {}) : _0x31c7b2(this['b']),
                this[_0x524947(0x595)] == null ? this[_0x524947(0x595)] = new _0x53055c['Zb']() : _0x31c7b2(this['zw_msg']),
                this['qj'][_0x524947(0x1b5)][_0x524947(0x5b6)] = 0xe,
                this['qj']['style'][_0x524947(0x331)] = _0x1100c2['p']['Dc']()['dd'](this['Mb']['dg'])['_c'],
                this['qj']['text'] = this['Mb']['ad'],
                this['oj']['Qf'](this['Mb']['Lb'], this['pj'], this['qj'], this['b'], this[_0x524947(0x595)]);
            }
            ,
            _0x8d7c8[_0x5185d7(0x4ef)] = (function() {
                function _0x460955() {
                    this['Lb'] = 0x0,
                    this['cg'] = _0x38582a['TEAM_DEFAULT'],
                    this['dg'] = 0x0,
                    this['Bg'] = 0x0,
                    this['Cg'] = 0x0,
                    this['Dg'] = 0x0,
                    this['Eg'] = 0x0,
                    this['ad'] = '';
                }
                return _0x460955;
            }()),
            _0x8d7c8;
        }())
          , _0x1f99c2 = (function() {
            return _0x22ee20(_0x53055c['fc'], function(_0x444652, _0x155c90, _0x457e77) {
                var _0x20129a = _0x2458;
                _0x53055c['fc'][_0x20129a(0x5b3)](this, _0x444652, _0x155c90, _0x457e77),
                this['If'] = {
                    'x': 0x0,
                    'y': 0x0
                };
            });
        }())
          , _0x4437d9 = (function() {
            var _0x57fc87 = _0x5b9465;
            function _0x2f8d6d() {
                var _0xb7b339 = _0x2458;
                this['Rf'] = new _0x53055c['Zb'](),
                this['Rf'][_0xb7b339(0x466)] = !0x0,
                this['vj'] = new _0x117124(),
                this['vj'][_0xb7b339(0x3ad)] = _0x49a4c9 * (0x2 * (_0x4f5521 + 0x1) + 0x1 + 0x3),
                this['wj'] = 0x0,
                this['xj'] = new Array(_0x4f5521),
                this['xj'][0x0] = this['yj'](0x0, new _0x3c90b5(), new _0x3c90b5());
                for (let _0x3b3ef3 = 0x0; _0x3b3ef3 < _0x4f5521; _0x3b3ef3++) {
                    this['xj'][_0x3b3ef3] = this['yj'](_0x3b3ef3, new _0x3c90b5(), new _0x3c90b5());
                }
                this['zj'] = 0x0,
                this['Aj'] = 0x0,
                this['Bj'] = 0x0;
            }
            var _0x49a4c9 = 0.001
              , _0x4f5521 = 0x31d
              , _0x3726fb = 0.1 * Math['PI']
              , _0xc4ea42 = -0.06640625
              , _0x2e3238 = 0.84375
              , _0x480b7b = 0.2578125
              , _0x23043c = -0.03515625
              , _0x2f13ff = -0.0625
              , _0x13933e = 0.5625
              , _0x7fe931 = 0x3 * _0xc4ea42 + _0x2e3238
              , _0x3c7a60 = _0x480b7b - 0x3 * _0xc4ea42
              , _0x2ba2b3 = _0xc4ea42 + _0x23043c
              , _0x3b3a39 = 0.375
              , _0x3bc4c2 = 0.75
              , _0x32109c = _0x2f13ff + _0x2f13ff
              , _0x3919a1 = 0x3 * _0x23043c + _0x480b7b
              , _0x3ba81c = _0x2e3238 - 0x3 * _0x23043c
              , _0x22609a = _0x23043c + _0xc4ea42;
            _0x2f8d6d[_0x57fc87(0x792)]['yj'] = function(_0xadc472, _0x5d44e0, _0x5496db) {
                var _0x1fc6a7 = _0x57fc87
                  , _0x4682d3 = new _0x3a6898(_0x5d44e0,_0x5496db);
                const _0xfd65ae = _0x49a4c9 * (0x2 * (_0x4f5521 - _0xadc472) + 0x1 + 0x3)
                  , _0x4bf269 = _0x49a4c9 * (0x2 * (_0x4f5521 - _0xadc472) - 0x2 + 0x3);
                return _0x5d44e0['jh'][_0x1fc6a7(0x3ad)] = _0xfd65ae,
                _0x5496db['jh']['zIndex'] = _0x4bf269,
                _0x4682d3;
            }
            ,
            _0x2f8d6d[_0x57fc87(0x792)]['hh'] = function(_0x329ad9, _0x3ef27c, _0x4c888d, _0x2fa3bc, _0xa303d4, _0x3c0489, _0x21c712) {
                var _0x22a14e = _0x57fc87
                  , _0x31f6f0 = _0x4c888d['Zc']
                  , _0x3cdb7a = _0x329ad9 == _0x1dea8f['_e'] ? _0x3ef27c['bd']['$c'] : _0x4c888d['$c'];
                _0x31f6f0[_0x22a14e(0x607)] && _0x3cdb7a[_0x22a14e(0x607)] && this['xj'][_0x22a14e(0x397)]( (_0x110491, _0xb45073) => {
                    var _0xecd68d = _0x22a14e;
                    _0x110491['Nf']['kh'](_0x31f6f0[_0xb45073 % _0x31f6f0[_0xecd68d(0x607)]]),
                    _0x110491['Pf']['kh'](_0x3cdb7a[_0xb45073 % _0x3cdb7a[_0xecd68d(0x607)]]);
                }
                ),
                this['vj']['hh'](_0x2fa3bc, _0xa303d4, _0x3c0489, _0x21c712);
            }
            ;
            var _0x117124 = (function() {
                var _0x16c71a = _0x57fc87
                  , _0x14bdf4 = _0x22ee20(_0x53055c['Zb'], function() {
                    var _0x523086 = _0x2458;
                    _0x53055c['Zb']['call'](this),
                    this[_0x523086(0x466)] = !![],
                    this['Cj'] = [],
                    this['Dj'] = [],
                    this['Ej'] = [],
                    this['Fj'] = [],
                    this['Gj'] = new _0x53055c['Zb'](),
                    this['Hj'] = [];
                    for (var _0x35c9e7 = 0x0; _0x35c9e7 < 0x4; _0x35c9e7++) {
                        var _0x86b9c5 = new _0x3c90b5();
                        _0x86b9c5['kh'](_0x3392fc()['q']['Ph']),
                        this['Gj'][_0x523086(0x21e)](_0x86b9c5['jh']),
                        this['Hj'][_0x523086(0x7b5)](_0x86b9c5);
                    }
                    this['Gj'][_0x523086(0x3ad)] = 0.0011,
                    this['addChild'](this['Gj']),
                    this['Ij'](),
                    this['Jj'] = new _0x3c90b5(),
                    this['Jj']['kh'](_0x3392fc()['q']['Qh']),
                    this['Jj']['jh'][_0x523086(0x3ad)] = 0.001,
                    this['addChild'](this['Jj']['jh']),
                    this['Kj'](),
                    this[_0x523086(0x4d0)] = new _0x3c90b5(),
                    this[_0x523086(0x4d0)]['kh'](_0x3392fc()['q']['Rh']),
                    this['flx']['jh'][_0x523086(0x3ad)] = 0.001,
                    this[_0x523086(0x21e)](this[_0x523086(0x4d0)]['jh']),
                    this['flexx'](),
                    this['xxx5'] = new _0x3c90b5(),
                    this[_0x523086(0x314)]['kh'](_0x3392fc()['q'][_0x523086(0x281)]),
                    this[_0x523086(0x314)]['jh']['zIndex'] = 0.001,
                    this[_0x523086(0x21e)](this[_0x523086(0x314)]['jh']),
                    this[_0x523086(0x4c7)](),
                    this[_0x523086(0x844)] = new _0x3c90b5(),
                    this['xxx2']['kh'](_0x3392fc()['q'][_0x523086(0x726)]),
                    this[_0x523086(0x844)]['jh'][_0x523086(0x3ad)] = 0.001,
                    this[_0x523086(0x21e)](this[_0x523086(0x844)]['jh']),
                    this[_0x523086(0x266)](),
                    this[_0x523086(0x558)] = new _0x3c90b5(),
                    this['xxx10']['kh'](_0x3392fc()['q']['X_x10']),
                    this[_0x523086(0x558)]['jh'][_0x523086(0x3ad)] = 0.001,
                    this[_0x523086(0x21e)](this[_0x523086(0x558)]['jh']),
                    this[_0x523086(0x69c)](),
                    this[_0x523086(0x3a9)] = new _0x3c90b5(),
                    this['xxxLupatype']['kh'](_0x3392fc()['q'][_0x523086(0x73d)]),
                    this['xxxLupatype']['jh'][_0x523086(0x3ad)] = 0.001,
                    this['addChild'](this[_0x523086(0x3a9)]['jh']),
                    this[_0x523086(0x1b6)](),
                    this[_0x523086(0x516)] = new _0x3c90b5(),
                    this[_0x523086(0x516)]['kh'](_0x3392fc()['q']['emoji']),
                    this['xxxEmojiType']['jh'][_0x523086(0x3ad)] = 0.001,
                    this[_0x523086(0x21e)](this['xxxEmojiType']['jh']),
                    this[_0x523086(0x4c6)]();
                });
                return _0x14bdf4[_0x16c71a(0x792)]['hh'] = function(_0x21eab3, _0x46b368, _0x32689c, _0xb6baeb) {
                    this['Lj'](0.002, this['Cj'], _0x21eab3['Zc']),
                    this['Lj'](0.003, this['Dj'], _0x46b368['Zc']),
                    this['Lj'](0.004, this['Fj'], _0xb6baeb['Zc']),
                    this['Lj'](0.005, this['Ej'], _0x32689c['Zc']);
                }
                ,
                _0x14bdf4[_0x16c71a(0x792)]['Lj'] = function(_0x44efb8, _0x516230, _0x4a781f) {
                    var _0x141154 = _0x16c71a;
                    const _0x50cdde = _0x4a781f[_0x141154(0x607)]
                      , _0x48c1ed = _0x516230[_0x141154(0x607)];
                    for (let _0x56fb85 = _0x48c1ed; _0x56fb85 < _0x50cdde; _0x56fb85++) {
                        const _0x4a6aa4 = new _0x3c90b5();
                        _0x516230['push'](_0x4a6aa4),
                        this['addChild'](_0x4a6aa4['Mf']());
                    }
                    for (let _0x262389 = _0x48c1ed; _0x262389 > _0x50cdde; _0x262389--) {
                        _0x516230[_0x141154(0x6e1)]()['ih']();
                    }
                    let _0x2ea5f2 = _0x44efb8;
                    for (let _0xdbb4b4 = 0x0; _0xdbb4b4 < _0x50cdde; _0xdbb4b4++) {
                        _0x2ea5f2 += 0.0001;
                        const _0x5c21a1 = _0x516230[_0xdbb4b4];
                        _0x5c21a1['kh'](_0x4a781f[_0xdbb4b4]),
                        _0x5c21a1['jh'][_0x141154(0x3ad)] = _0x2ea5f2;
                    }
                }
                ,
                _0x14bdf4['prototype']['mh'] = function(_0x47b088, _0x2c9238, _0x31fac5, _0x55610a) {
                    var _0x54d625 = _0x16c71a;
                    this[_0x54d625(0x3db)] = !![],
                    this[_0x54d625(0x31e)][_0x54d625(0x6dc)](_0x47b088, _0x2c9238),
                    this[_0x54d625(0x566)] = _0x55610a,
                    [this['Cj'], this['Dj'], this['Ej'], this['Fj']][_0x54d625(0x397)]( (_0xb622f9, _0x456fbe) => {
                        var _0x3df3f8 = _0x54d625;
                        const _0x1b5122 = ['Cj\x20(ojos)', _0x3df3f8(0x7e3), _0x3df3f8(0x836), _0x3df3f8(0x708)][_0x456fbe];
                        _0xb622f9[_0x3df3f8(0x397)](_0x4627db => _0x4627db['oh'](_0x31fac5));
                    }
                    );
                }
                ,
                _0x14bdf4['prototype']['lh'] = function() {
                    var _0x3cbba4 = _0x16c71a;
                    this[_0x3cbba4(0x3db)] = !0x1;
                }
                ,
                _0x14bdf4[_0x16c71a(0x792)]['Mj'] = function(_0x3bf62c, _0x255722, _0x33350c, _0x55af0a) {
                    var _0x5a401f = _0x16c71a;
                    this['Gj'][_0x5a401f(0x3db)] = !![];
                    var _0x18687b = _0x33350c / 0x3e8
                      , _0x59cb13 = 0x1 / this['Hj'][_0x5a401f(0x607)];
                    for (var _0x3c5118 = 0x0; _0x3c5118 < this['Hj'][_0x5a401f(0x607)]; _0x3c5118++) {
                        var _0xe54968 = 0x1 - (_0x18687b + _0x59cb13 * _0x3c5118) % 0x1;
                        this['Hj'][_0x3c5118]['jh']['alpha'] = 0x1 - _0xe54968,
                        this['Hj'][_0x3c5118]['oh'](_0x255722 * (0.5 + 4.5 * _0xe54968));
                    }
                }
                ,
                _0x14bdf4[_0x16c71a(0x792)]['Ij'] = function() {
                    var _0x4f82e9 = _0x16c71a;
                    this['Gj'][_0x4f82e9(0x3db)] = !0x1;
                }
                ,
                _0x14bdf4[_0x16c71a(0x792)]['Nj'] = function(_0x643898, _0x3ebcbb, _0x2f0207, _0x5e2f7d) {
                    var _0x221297 = _0x16c71a;
                    this['Jj']['jh'][_0x221297(0x3db)] = !![],
                    this['Jj']['jh'][_0x221297(0x4d8)] = _0x2c6321(this['Jj']['jh']['alpha'], _0x643898['hj'] ? 0.9 : 0.2, _0x5e2f7d, 0.0025),
                    this['Jj']['oh'](_0x3ebcbb);
                }
                ,
                _0x14bdf4['prototype'][_0x16c71a(0x78f)] = function(_0x455da1, _0x2a69ba, _0x4449a1, _0x26ceb0) {
                    var _0x39d588 = _0x16c71a;
                    this[_0x39d588(0x4d0)]['jh'][_0x39d588(0x3db)] = !![],
                    this[_0x39d588(0x4d0)]['oh'](_0x2a69ba);
                }
                ,
                _0x14bdf4[_0x16c71a(0x792)]['flexx'] = function() {
                    var _0x944dac = _0x16c71a;
                    this[_0x944dac(0x4d0)]['jh']['visible'] = ![];
                }
                ,
                _0x14bdf4['prototype'][_0x16c71a(0x82c)] = function(_0x318868, _0x24ef0c, _0x4657e9, _0x3d2323) {
                    var _0x826b2e = _0x16c71a;
                    this[_0x826b2e(0x314)]['jh']['visible'] = !![],
                    this[_0x826b2e(0x314)]['jh'][_0x826b2e(0x4d8)] = _0x2c6321(this['Jj']['jh'][_0x826b2e(0x4d8)], _0x318868['hj'] ? 0.9 : 0.2, _0x3d2323, 0.0025),
                    this['xxx5']['oh'](_0x24ef0c);
                }
                ,
                _0x14bdf4['prototype']['xXx5'] = function() {
                    var _0x4dd8aa = _0x16c71a;
                    this[_0x4dd8aa(0x314)]['jh']['visible'] = ![];
                }
                ,
                _0x14bdf4[_0x16c71a(0x792)][_0x16c71a(0x2e7)] = function(_0xe5a676, _0x298a65, _0x56208a, _0x3e69fb) {
                    var _0x255749 = _0x16c71a;
                    this[_0x255749(0x516)]['jh'][_0x255749(0x3db)] = !![],
                    this[_0x255749(0x516)]['oh'](_0x298a65);
                }
                ,
                _0x14bdf4[_0x16c71a(0x792)]['x_emoji'] = function() {
                    var _0x3d1ab7 = _0x16c71a;
                    this['xxxEmojiType']['jh'][_0x3d1ab7(0x3db)] = ![];
                }
                ,
                _0x14bdf4[_0x16c71a(0x792)][_0x16c71a(0x7bd)] = function(_0x5a8ff6, _0x11d269, _0x5b2a6d, _0x5e2bee) {
                    var _0x5dadf3 = _0x16c71a;
                    this['xxx2']['jh']['visible'] = !![],
                    this['xxx2']['jh'][_0x5dadf3(0x4d8)] = _0x2c6321(this['Jj']['jh'][_0x5dadf3(0x4d8)], _0x5a8ff6['hj'] ? 0.9 : 0.2, _0x5e2bee, 0.0025),
                    this['xxx2']['oh'](_0x11d269);
                }
                ,
                _0x14bdf4[_0x16c71a(0x792)][_0x16c71a(0x266)] = function() {
                    var _0xdd8aba = _0x16c71a;
                    this[_0xdd8aba(0x844)]['jh']['visible'] = ![];
                }
                ,
                _0x14bdf4[_0x16c71a(0x792)][_0x16c71a(0x354)] = function(_0x3171d5, _0x40066c, _0x43ec10, _0x44cf60) {
                    var _0x7758c0 = _0x16c71a;
                    this[_0x7758c0(0x558)]['jh'][_0x7758c0(0x3db)] = !![],
                    this[_0x7758c0(0x558)]['jh'][_0x7758c0(0x4d8)] = _0x2c6321(this['Jj']['jh'][_0x7758c0(0x4d8)], _0x3171d5['hj'] ? 0.9 : 0.2, _0x44cf60, 0.0025),
                    this[_0x7758c0(0x558)]['oh'](_0x40066c);
                }
                ,
                _0x14bdf4[_0x16c71a(0x792)][_0x16c71a(0x69c)] = function() {
                    var _0x2bb9e5 = _0x16c71a;
                    this[_0x2bb9e5(0x558)]['jh'][_0x2bb9e5(0x3db)] = ![];
                }
                ,
                _0x14bdf4[_0x16c71a(0x792)]['ActiveZlupa'] = function(_0x2f3388, _0x500443, _0x2c79d2, _0x526721) {
                    var _0x305c54 = _0x16c71a;
                    this[_0x305c54(0x3a9)]['jh']['visible'] = !![],
                    this['xxxLupatype']['jh']['alpha'] = _0x2c6321(this['Jj']['jh'][_0x305c54(0x4d8)], _0x2f3388['hj'] ? 0.9 : 0.2, _0x526721, 0.0025),
                    this[_0x305c54(0x3a9)]['oh'](_0x500443);
                }
                ,
                _0x14bdf4['prototype'][_0x16c71a(0x1b6)] = function() {
                    var _0x1684ed = _0x16c71a;
                    this[_0x1684ed(0x3a9)]['jh'][_0x1684ed(0x3db)] = ![];
                }
                ,
                _0x14bdf4['prototype']['Kj'] = function() {
                    this['Jj']['jh']['visible'] = !0x1;
                }
                ,
                _0x14bdf4;
            }());
            _0x2f8d6d['prototype']['Oj'] = function(_0x26cebb) {
                var _0x45495b = _0x57fc87;
                return this['Aj'] + this['Bj'] * Math[_0x45495b(0x26c)](_0x26cebb * _0x3726fb - this['zj']);
            }
            ,
            _0x2f8d6d[_0x57fc87(0x792)]['tj'] = function(_0x200f01, _0x32c08d, _0x534f27, _0x9eb208) {
                var _0x2ee593 = _0x57fc87;
                const _0x4e37ba = 0x2 * _0x200f01['Db']
                  , _0x588877 = _0x200f01['nj']
                  , _0x911c75 = _0x200f01['kj']
                  , _0xd51659 = 0x4 * _0x911c75 - 0x3;
                this['zj'] = _0x32c08d / 0x190 * Math['PI'],
                this['Aj'] = 1.5 * _0x4e37ba,
                this['Bj'] = 0.1 * _0x4e37ba * _0x200f01['jj'];
                let _0x1b7054 = _0x588877[0x0], _0x4be62c = _0x588877[0x1], _0x48ff31, _0x4505dd, _0x46762d, _0x233f3f;
                if (_0x9eb208(_0x1b7054, _0x4be62c)) {
                    _0x48ff31 = _0x588877[0x2],
                    _0x4505dd = _0x588877[0x3],
                    _0x46762d = _0x588877[0x4],
                    _0x233f3f = _0x588877[0x5];
                    const _0x18fdb2 = Math['atan2'](_0x233f3f + 0x2 * _0x4be62c - 0x3 * _0x4505dd, _0x46762d + 0x2 * _0x1b7054 - 0x3 * _0x48ff31)
                      , _0x3f404d = _0x3a6898[_0x2ee593(0x27d)];
                    this['vj']['mh'](_0x1b7054, _0x4be62c, _0x4e37ba, _0x18fdb2),
                    this['xj'][0x0]['mh'](_0x1b7054, _0x4be62c, _0x4e37ba, this['Oj'](0x0), _0x18fdb2),
                    this['xj'][0x1]['mh'](_0x7fe931 * _0x1b7054 + _0x3c7a60 * _0x48ff31 + _0x2ba2b3 * _0x46762d, _0x7fe931 * _0x4be62c + _0x3c7a60 * _0x4505dd + _0x2ba2b3 * _0x233f3f, _0x4e37ba, this['Oj'](0x1), _0x3f404d(this['xj'][0x0], this['xj'][0x2])),
                    this['xj'][0x2]['mh'](_0x3b3a39 * _0x1b7054 + _0x3bc4c2 * _0x48ff31 + _0x32109c * _0x46762d, _0x3b3a39 * _0x4be62c + _0x3bc4c2 * _0x4505dd + _0x32109c * _0x233f3f, _0x4e37ba, this['Oj'](0x2), _0x3f404d(this['xj'][0x1], this['xj'][0x3])),
                    this['xj'][0x3]['mh'](_0x3919a1 * _0x1b7054 + _0x3ba81c * _0x48ff31 + _0x22609a * _0x46762d, _0x3919a1 * _0x4be62c + _0x3ba81c * _0x4505dd + _0x22609a * _0x233f3f, _0x4e37ba, this['Oj'](0x3), _0x3f404d(this['xj'][0x2], this['xj'][0x4]));
                } else {
                    for (let _0x491c76 = 0x0; _0x491c76 < 0x4; _0x491c76++)
                        this['xj'][_0x491c76]['lh']();
                    this['vj']['lh']();
                }
                let _0x16e56d = 0x4;
                const _0x38a4cf = 0x2 * _0x911c75 - 0x4;
                for (let _0x7360f2 = 0x2; _0x7360f2 < _0x38a4cf; _0x7360f2 += 0x2) {
                    _0x1b7054 = _0x588877[_0x7360f2],
                    _0x4be62c = _0x588877[_0x7360f2 + 0x1];
                    const _0x49b132 = _0x9eb208(_0x1b7054, _0x4be62c);
                    if (_0x49b132) {
                        const _0x32389d = _0x588877[_0x7360f2 - 0x2]
                          , _0x478a12 = _0x588877[_0x7360f2 - 0x1];
                        _0x48ff31 = _0x588877[_0x7360f2 + 0x2],
                        _0x4505dd = _0x588877[_0x7360f2 + 0x3],
                        _0x46762d = _0x588877[_0x7360f2 + 0x4],
                        _0x233f3f = _0x588877[_0x7360f2 + 0x5],
                        this['xj'][_0x16e56d]['mh'](_0x1b7054, _0x4be62c, _0x4e37ba, this['Oj'](_0x16e56d), _0x3a6898[_0x2ee593(0x27d)](this['xj'][_0x16e56d - 0x1], this['xj'][_0x16e56d + 0x1])),
                        _0x16e56d++,
                        this['xj'][_0x16e56d]['mh'](_0xc4ea42 * _0x32389d + _0x2e3238 * _0x1b7054 + _0x480b7b * _0x48ff31 + _0x23043c * _0x46762d, _0xc4ea42 * _0x478a12 + _0x2e3238 * _0x4be62c + _0x480b7b * _0x4505dd + _0x23043c * _0x233f3f, _0x4e37ba, this['Oj'](_0x16e56d), _0x3a6898[_0x2ee593(0x27d)](this['xj'][_0x16e56d - 0x1], this['xj'][_0x16e56d + 0x1])),
                        _0x16e56d++,
                        this['xj'][_0x16e56d]['mh'](_0x2f13ff * _0x32389d + _0x13933e * _0x1b7054 + _0x13933e * _0x48ff31 + _0x2f13ff * _0x46762d, _0x2f13ff * _0x478a12 + _0x13933e * _0x4be62c + _0x13933e * _0x4505dd + _0x2f13ff * _0x233f3f, _0x4e37ba, this['Oj'](_0x16e56d), _0x3a6898[_0x2ee593(0x27d)](this['xj'][_0x16e56d - 0x1], this['xj'][_0x16e56d + 0x1])),
                        _0x16e56d++,
                        this['xj'][_0x16e56d]['mh'](_0x23043c * _0x32389d + _0x480b7b * _0x1b7054 + _0x2e3238 * _0x48ff31 + _0xc4ea42 * _0x46762d, _0x23043c * _0x478a12 + _0x480b7b * _0x4be62c + _0x2e3238 * _0x4505dd + _0xc4ea42 * _0x233f3f, _0x4e37ba, this['Oj'](_0x16e56d), _0x3a6898[_0x2ee593(0x27d)](this['xj'][_0x16e56d - 0x1], this['xj'][_0x16e56d + 0x1])),
                        _0x16e56d++;
                    } else {
                        for (let _0x35ad82 = 0x0; _0x35ad82 < 0x4; _0x35ad82++)
                            this['xj'][_0x16e56d++]['lh']();
                    }
                }
                const _0x523774 = 0x2 * _0x911c75 - 0x4;
                _0x1b7054 = _0x588877[_0x523774],
                _0x4be62c = _0x588877[_0x523774 + 0x1];
                if (_0x9eb208(_0x1b7054, _0x4be62c)) {
                    const _0x4d9903 = _0x588877[_0x523774 - 0x2]
                      , _0x19215b = _0x588877[_0x523774 - 0x1];
                    _0x48ff31 = _0x588877[_0x523774 + 0x2],
                    _0x4505dd = _0x588877[_0x523774 + 0x3];
                    const _0x243e9a = this['Oj'][_0x2ee593(0x753)](this)
                      , _0x4ca77e = _0x3a6898[_0x2ee593(0x27d)];
                    this['xj'][_0xd51659 - 0x5]['mh'](_0x1b7054, _0x4be62c, _0x4e37ba, _0x243e9a(_0xd51659 - 0x5), _0x4ca77e(this['xj'][_0xd51659 - 0x6], this['xj'][_0xd51659 - 0x4])),
                    this['xj'][_0xd51659 - 0x4]['mh'](_0x22609a * _0x4d9903 + _0x3ba81c * _0x1b7054 + _0x3919a1 * _0x48ff31, _0x22609a * _0x19215b + _0x3ba81c * _0x4be62c + _0x3919a1 * _0x4505dd, _0x4e37ba, _0x243e9a(_0xd51659 - 0x4), _0x4ca77e(this['xj'][_0xd51659 - 0x5], this['xj'][_0xd51659 - 0x3])),
                    this['xj'][_0xd51659 - 0x3]['mh'](_0x32109c * _0x4d9903 + _0x3bc4c2 * _0x1b7054 + _0x3b3a39 * _0x48ff31, _0x32109c * _0x19215b + _0x3bc4c2 * _0x4be62c + _0x3b3a39 * _0x4505dd, _0x4e37ba, _0x243e9a(_0xd51659 - 0x3), _0x4ca77e(this['xj'][_0xd51659 - 0x4], this['xj'][_0xd51659 - 0x2])),
                    this['xj'][_0xd51659 - 0x2]['mh'](_0x2ba2b3 * _0x4d9903 + _0x3c7a60 * _0x1b7054 + _0x7fe931 * _0x48ff31, _0x2ba2b3 * _0x19215b + _0x3c7a60 * _0x4be62c + _0x7fe931 * _0x4505dd, _0x4e37ba, _0x243e9a(_0xd51659 - 0x2), _0x4ca77e(this['xj'][_0xd51659 - 0x3], this['xj'][_0xd51659 - 0x1])),
                    this['xj'][_0xd51659 - 0x1]['mh'](_0x48ff31, _0x4505dd, _0x4e37ba, _0x243e9a(_0xd51659 - 0x1), _0x4ca77e(this['xj'][_0xd51659 - 0x2], this['xj'][_0xd51659 - 0x1]));
                } else {
                    for (let _0x506cf8 = _0xd51659 - 0x5; _0x506cf8 <= _0xd51659 - 0x1; _0x506cf8++)
                        this['xj'][_0x506cf8]['lh']();
                }
                if (this['wj'] === 0x0 && _0xd51659 > 0x0)
                    this['Rf']['addChild'](this['vj']);
                if (this['wj'] > 0x0 && _0xd51659 === 0x0)
                    _0x31c7b2(this['vj']);
                while (this['wj'] < _0xd51659) {
                    const _0xc26c2e = this['xj'][this['wj']];
                    this['Rf'][_0x2ee593(0x21e)](_0xc26c2e['Nf']['Mf']()),
                    this['Rf'][_0x2ee593(0x21e)](_0xc26c2e['Pf']['Mf']()),
                    this['wj']++;
                }
                while (this['wj'] > _0xd51659) {
                    this['wj']--;
                    const _0x2e9d4c = this['xj'][this['wj']];
                    _0x2e9d4c['Pf']['ih'](),
                    _0x2e9d4c['Nf']['ih']();
                }
                const _0xa5434b = theoKzObjects[_0x2ee593(0x2a8)] && _0x200f01?.['Mb']?.['Mb'];
                if (_0xa5434b)
                    this['vj'][_0x2ee593(0x2e7)](_0x200f01, _0x4e37ba, _0x32c08d, _0x534f27);
                else
                    this['vj']['x_emoji']();
                const _0x5c6d51 = this['xj'][0x0]['gj']();
                if (!_0x5c6d51) {
                    this['vj']['Ij'](),
                    this['vj']['Kj'](),
                    this['vj'][_0x2ee593(0x492)](),
                    this['vj'][_0x2ee593(0x266)](),
                    this['vj'][_0x2ee593(0x4c7)](),
                    this['vj']['xXx10'](),
                    this['vj'][_0x2ee593(0x1b6)]();
                    return;
                }
                const _0x3c97cc = _0x200f01['Ff']
                  , _0x254e9d = _0x3c97cc[_0x2d8dbf['MAGNETIC_TYPE']]
                  , _0x29da00 = _0x3c97cc[_0x2d8dbf['VELOCITY_TYPE']]
                  , _0x38bb7e = _0x3c97cc[_0x2d8dbf[_0x2ee593(0x7ce)]]
                  , _0x598595 = _0x3c97cc[_0x2d8dbf[_0x2ee593(0x7ea)]]
                  , _0x31ef0a = _0x3c97cc[_0x2d8dbf['X5_TYPE']]
                  , _0x17afe2 = _0x3c97cc[_0x2d8dbf[_0x2ee593(0x683)]]
                  , _0x1d08d1 = _0x3c97cc[_0x2d8dbf[_0x2ee593(0x5e0)]];
                _0x254e9d?.['sc'] ? this['vj']['Mj'](_0x200f01, _0x4e37ba, _0x32c08d, _0x534f27) : this['vj']['Ij'](),
                _0x29da00?.['sc'] ? this['vj']['Nj'](_0x200f01, _0x4e37ba, _0x32c08d, _0x534f27) : this['vj']['Kj'](),
                theoKzObjects['speed_zigzag'] && _0x38bb7e?.['sc'] ? this['vj'][_0x2ee593(0x78f)](_0x200f01, _0x4e37ba, _0x32c08d, _0x534f27) : this['vj'][_0x2ee593(0x492)](),
                theoKzObjects[_0x2ee593(0x2ca)] ? (_0x598595?.['sc'] ? this['vj'][_0x2ee593(0x7bd)](_0x200f01, _0x4e37ba, _0x32c08d, _0x534f27) : this['vj'][_0x2ee593(0x266)](),
                _0x31ef0a?.['sc'] ? this['vj'][_0x2ee593(0x82c)](_0x200f01, _0x4e37ba, _0x32c08d, _0x534f27) : this['vj'][_0x2ee593(0x4c7)](),
                _0x17afe2?.['sc'] ? this['vj'][_0x2ee593(0x354)](_0x200f01, _0x4e37ba, _0x32c08d, _0x534f27) : this['vj']['xXx10'](),
                _0x1d08d1?.['sc'] ? this['vj'][_0x2ee593(0x5ea)](_0x200f01, _0x4e37ba, _0x32c08d, _0x534f27) : this['vj'][_0x2ee593(0x1b6)]()) : (this['vj'][_0x2ee593(0x266)](),
                this['vj'][_0x2ee593(0x4c7)](),
                this['vj'][_0x2ee593(0x69c)](),
                this['vj']['xXxLupaZ']());
            }
            ;
            var _0x3a6898 = (function() {
                var _0x5c3bd1 = _0x57fc87;
                function _0x465f46(_0x1ae32a, _0x500e08) {
                    this['Nf'] = _0x1ae32a,
                    this['Nf']['Mg'](!0x1),
                    this['Pf'] = _0x500e08,
                    this['Pf']['Mg'](!0x1);
                }
                return _0x465f46[_0x5c3bd1(0x792)]['mh'] = function(_0x36944c, _0x320fe5, _0x1cae1a, _0x54b23d, _0x207657) {
                    var _0x46adfc = _0x5c3bd1;
                    this['Nf']['Mg'](theoKzObjects[_0x46adfc(0x80d)]),
                    this['Nf']['nh'](_0x36944c, _0x320fe5),
                    this['Nf']['oh'](_0x1cae1a),
                    this['Nf']['fj'](_0x207657),
                    this['Pf']['Mg'](theoKzObjects[_0x46adfc(0x6c9)]),
                    this['Pf']['nh'](_0x36944c, _0x320fe5),
                    this['Pf']['oh'](_0x54b23d),
                    this['Pf']['fj'](_0x207657);
                }
                ,
                _0x465f46[_0x5c3bd1(0x792)]['lh'] = function() {
                    this['Nf']['Mg'](!0x1),
                    this['Pf']['Mg'](!0x1);
                }
                ,
                _0x465f46[_0x5c3bd1(0x792)]['gj'] = function() {
                    return this['Nf']['gj']();
                }
                ,
                _0x465f46[_0x5c3bd1(0x27d)] = function(_0x7288a4, _0x24e736) {
                    var _0x587322 = _0x5c3bd1;
                    return Math[_0x587322(0x33c)](_0x7288a4['Nf']['jh'][_0x587322(0x31e)]['y'] - _0x24e736['Nf']['jh'][_0x587322(0x31e)]['y'], _0x7288a4['Nf']['jh'][_0x587322(0x31e)]['x'] - _0x24e736['Nf']['jh']['position']['x']);
                }
                ,
                _0x465f46;
            }());
            return _0x2f8d6d;
        }())
          , _0x418bed = (function() {
            var _0x50a6cb = _0x5b9465;
            function _0x1b613b(_0x56154f) {
                var _0x34d3c4 = _0x2458;
                this['se'] = _0x56154f,
                this['te'] = _0x56154f[_0x34d3c4(0x338)]()[0x0],
                this['ue'] = new _0x53055c['ac']({
                    'view': this['te'],
                    'transparent': !0x0
                }),
                this['sc'] = !0x1,
                this['Pj'] = new _0x4437d9(),
                this['Pj']['Rf'][_0x34d3c4(0x21e)](this['Pj']['vj']),
                this['Qj'] = 0x0,
                this['Rj'] = 0x0,
                this['Ng'] = 0x1,
                this['rh'] = 0x0,
                this['sh'] = 0x0,
                this['th'] = 0x0,
                this['uh'] = 0x0,
                this['vh'] = 0x0,
                this['Sj'] = !0x1,
                this['Tj'] = !0x1,
                this['Uj'] = !0x1,
                this['Vj'] = !0x1,
                this['Wj'] = !0x1,
                this['Xj'] = !0x1,
                this['Yj'] = !0x1,
                this['Zj'] = !0x1,
                this['$j'] = !0x1,
                this['_j'] = !0x1,
                this['Ra'](),
                this['Fb']();
                var _0x1572b5 = this;
                _0x3392fc()['p']['ca'](function() {
                    _0x3392fc()['p']['W']() && _0x1572b5['Fb']();
                });
            }
            return _0x1b613b[_0x50a6cb(0x792)]['Fb'] = function() {
                var _0x323630 = _0x3392fc();
                this['Pj']['hh'](_0x1dea8f['$e'], null, _0x323630['p']['Dc']()['dd'](this['rh']), _0x323630['p']['Dc']()['fd'](this['sh']), _0x323630['p']['Dc']()['gd'](this['th']), _0x323630['p']['Dc']()['hd'](this['uh']), _0x323630['p']['Dc']()['jd'](this['vh']));
            }
            ,
            _0x1b613b[_0x50a6cb(0x792)]['Le'] = function(_0x130448) {
                this['sc'] = _0x130448;
            }
            ,
            _0x1b613b['prototype']['ak'] = function(_0x472a8a, _0x18c300, _0x3ce1a9) {
                this['rh'] = _0x472a8a,
                this['Sj'] = _0x18c300,
                this['Xj'] = _0x3ce1a9,
                this['Fb']();
            }
            ,
            _0x1b613b[_0x50a6cb(0x792)]['bk'] = function(_0x3b8a12, _0x3dbfd3, _0x5835da) {
                this['sh'] = _0x3b8a12,
                this['Tj'] = _0x3dbfd3,
                this['Yj'] = _0x5835da,
                this['Fb']();
            }
            ,
            _0x1b613b[_0x50a6cb(0x792)]['ck'] = function(_0x599422, _0x41e23b, _0xb3f502) {
                this['th'] = _0x599422,
                this['Uj'] = _0x41e23b,
                this['Zj'] = _0xb3f502,
                this['Fb']();
            }
            ,
            _0x1b613b['prototype']['dk'] = function(_0x5191ad, _0x51f015, _0x1eb243) {
                this['uh'] = _0x5191ad,
                this['Vj'] = _0x51f015,
                this['$j'] = _0x1eb243,
                this['Fb']();
            }
            ,
            _0x1b613b[_0x50a6cb(0x792)]['ek'] = function(_0x56d8ed, _0x539772, _0x1f48d9) {
                this['vh'] = _0x56d8ed,
                this['Wj'] = _0x539772,
                this['_j'] = _0x1f48d9,
                this['Fb']();
            }
            ,
            _0x1b613b[_0x50a6cb(0x792)]['Ra'] = function() {
                var _0x4a9d96 = _0x50a6cb
                  , _0x47616a = window[_0x4a9d96(0x663)] ? window[_0x4a9d96(0x663)] : 0x1;
                this['Qj'] = this['se']['width'](),
                this['Rj'] = this['se'][_0x4a9d96(0x804)](),
                this['ue'][_0x4a9d96(0x7e7)](this['Qj'], this['Rj']),
                this['ue'][_0x4a9d96(0x3b9)] = _0x47616a,
                this['te'][_0x4a9d96(0x546)] = _0x47616a * this['Qj'],
                this['te'][_0x4a9d96(0x804)] = _0x47616a * this['Rj'],
                this['Ng'] = this['Rj'] / 0x4;
                var _0x3664e4 = _0x54eb86(0x1, this['Pj']['xj'][_0x4a9d96(0x607)], 0x2 * Math[_0x4a9d96(0x1c7)](this['Qj'] / this['Ng']) - 0x5);
                if (this['Pj']['wj'] != _0x3664e4) {
                    for (var _0x44b5cb = _0x3664e4; _0x44b5cb < this['Pj']['xj'][_0x4a9d96(0x607)]; _0x44b5cb++)
                        this['Pj']['xj'][_0x44b5cb]['lh']();
                    for (; this['Pj']['wj'] < _0x3664e4; )
                        this['Pj']['Rf'][_0x4a9d96(0x21e)](this['Pj']['xj'][this['Pj']['wj']]['Nf']['Mf']()),
                        this['Pj']['Rf'][_0x4a9d96(0x21e)](this['Pj']['xj'][this['Pj']['wj']]['Pf']['Mf']()),
                        this['Pj']['wj'] += 0x1;
                    for (; this['Pj']['wj'] > _0x3664e4; )
                        this['Pj']['wj'] -= 0x1,
                        this['Pj']['xj'][this['Pj']['wj']]['Pf']['ih'](),
                        this['Pj']['xj'][this['Pj']['wj']]['Nf']['ih']();
                }
            }
            ,
            _0x1b613b[_0x50a6cb(0x792)]['Pa'] = function() {
                var _0x285a1c = _0x50a6cb;
                if (this['sc']) {
                    if (_0x3392fc()['p']['W']) {
                        for (var _0x59b1b1 = Date[_0x285a1c(0x61c)](), _0x10afb1 = _0x59b1b1 / 0xc8, _0x29e266 = Math['sin'](_0x10afb1), _0x3e19e6 = this['Ng'], _0x538950 = 1.5 * this['Ng'], _0x303047 = this['Qj'] - 0.5 * (this['Qj'] - 0.5 * _0x3e19e6 * (this['Pj']['wj'] - 0x1)), _0x567fa0 = 0.5 * this['Rj'], _0x527b1e = 0x0, _0x194440 = 0x0, _0x25d62d = -0x1; _0x25d62d < this['Pj']['wj']; _0x25d62d++) {
                            var _0x33d05f = _0x25d62d
                              , _0x30485d = Math[_0x285a1c(0x673)](0x1 * _0x33d05f / 0xc * Math['PI'] - _0x10afb1) * (0x1 - Math[_0x285a1c(0x49f)](0x10, -0x1 * _0x33d05f / 0xc));
                            if (_0x25d62d >= 0x0) {
                                var _0x1bd63f = _0x303047 + -0.5 * _0x3e19e6 * _0x33d05f
                                  , _0x452a88 = _0x567fa0 + 0.5 * _0x3e19e6 * _0x30485d
                                  , _0x4b78c7 = 0x2 * _0x3e19e6
                                  , _0x216059 = 0x2 * _0x538950
                                  , _0x48f532 = Math[_0x285a1c(0x33c)](_0x194440 - _0x30485d, _0x33d05f - _0x527b1e);
                                0x0 == _0x25d62d && this['Pj']['vj']['mh'](_0x1bd63f, _0x452a88, _0x4b78c7, _0x48f532),
                                this['Pj']['xj'][_0x25d62d]['mh'](_0x1bd63f, _0x452a88, _0x4b78c7, _0x216059, _0x48f532);
                                var _0x105a35 = this['Sj'] ? this['Xj'] ? 0.4 + 0.2 * _0x29e266 : 0.9 + 0.1 * _0x29e266 : this['Xj'] ? 0.4 : 0x1;
                                this['Pj']['xj'][_0x25d62d]['Nf']['qh'](_0x105a35),
                                this['Pj']['xj'][_0x25d62d]['Pf']['qh'](_0x105a35);
                            }
                            _0x527b1e = _0x33d05f,
                            _0x194440 = _0x30485d;
                        }
                        for (var _0x1db263 = 0x0; _0x1db263 < this['Pj']['vj']['Cj'][_0x285a1c(0x607)]; _0x1db263++) {
                            var _0x878cbe = this['Tj'] ? this['Yj'] ? 0.4 + 0.2 * _0x29e266 : 0.9 + 0.1 * _0x29e266 : this['Yj'] ? 0.4 : 0x1;
                            this['Pj']['vj']['Cj'][_0x1db263]['qh'](_0x878cbe);
                        }
                        for (var _0x55503b = 0x0; _0x55503b < this['Pj']['vj']['Dj']['length']; _0x55503b++) {
                            var _0x29591c = this['Uj'] ? this['Zj'] ? 0.4 + 0.2 * _0x29e266 : 0.9 + 0.1 * _0x29e266 : this['Zj'] ? 0.4 : 0x1;
                            this['Pj']['vj']['Dj'][_0x55503b]['qh'](_0x29591c);
                        }
                        for (var _0x25d4b1 = 0x0; _0x25d4b1 < this['Pj']['vj']['Ej']['length']; _0x25d4b1++) {
                            var _0x50abd5 = this['Vj'] ? this['$j'] ? 0.4 + 0.2 * _0x29e266 : 0.9 + 0.1 * _0x29e266 : this['$j'] ? 0.4 : 0x1;
                            this['Pj']['vj']['Ej'][_0x25d4b1]['qh'](_0x50abd5);
                        }
                        for (var _0x46af13 = 0x0; _0x46af13 < this['Pj']['vj']['Fj']['length']; _0x46af13++) {
                            var _0x50a391 = this['Wj'] ? this['_j'] ? 0.4 + 0.2 * _0x29e266 : 0.9 + 0.1 * _0x29e266 : this['_j'] ? 0.4 : 0x1;
                            this['Pj']['vj']['Fj'][_0x46af13]['qh'](_0x50a391);
                        }
                        this['ue'][_0x285a1c(0x24e)](this['Pj']['Rf']);
                    }
                }
            }
            ,
            _0x1b613b;
        }())
          , _0x501845 = (function() {
            var _0x5ea559 = _0x5b9465;
            function _0x2fa9d2(_0x187f9e) {
                this['rc'] = _0x187f9e;
            }
            return _0x2fa9d2['fk'] = $(_0x5ea559(0x694)),
            _0x2fa9d2['gk'] = $(_0x5ea559(0x233)),
            _0x2fa9d2['hk'] = $(_0x5ea559(0x71c)),
            _0x2fa9d2['ik'] = $(_0x5ea559(0x256)),
            _0x2fa9d2['jk'] = $(_0x5ea559(0x278)),
            _0x2fa9d2['kk'] = $(_0x5ea559(0x4c4)),
            _0x2fa9d2['lk'] = $(_0x5ea559(0x823)),
            _0x2fa9d2['mk'] = $('#game-canvas'),
            _0x2fa9d2['di'] = $('#background-canvas'),
            _0x2fa9d2['nk'] = $(_0x5ea559(0x822)),
            _0x2fa9d2['ok'] = $(_0x5ea559(0x488)),
            _0x2fa9d2[_0x5ea559(0x792)]['a'] = function() {}
            ,
            _0x2fa9d2[_0x5ea559(0x792)]['ii'] = function() {}
            ,
            _0x2fa9d2[_0x5ea559(0x792)]['ji'] = function() {}
            ,
            _0x2fa9d2[_0x5ea559(0x792)]['ei'] = function() {}
            ,
            _0x2fa9d2[_0x5ea559(0x792)]['Ra'] = function() {}
            ,
            _0x2fa9d2[_0x5ea559(0x792)]['Pa'] = function(_0xd2d84a, _0x296aa3) {}
            ,
            _0x2fa9d2;
        }())
          , _0x4d8a7a = (function() {
            var _0x301f58 = _0x5b9465;
            function _0x578f1a(_0x29f0fd, _0x21ddcc, _0x16e2c7, _0x4d0069, _0x4986ec, _0x370bc2) {
                var _0x3919c3 = _0x2458
                  , _0x4f660f = _0x3919c3(0x483) + _0x29f0fd + _0x3919c3(0x363)
                  , _0x3b297e = $(_0x4f660f);
                return _0x3b297e['click'](function() {
                    var _0x1cc6ed = _0x3919c3;
                    'undefined' != typeof FB && void 0x0 !== FB['ui'] && FB['ui']({
                        'method': _0x1cc6ed(0x5b8),
                        'display': _0x1cc6ed(0x6e7),
                        'link': _0x21ddcc,
                        'name': _0x16e2c7,
                        'caption': _0x4d0069,
                        'description': _0x4986ec,
                        'picture': _0x370bc2
                    }, function() {});
                }),
                _0x3b297e;
            }
            var _0x2ee987 = $('#final-caption')
              , _0x2d862b = $(_0x301f58(0x311))
              , _0x3e9179 = $(_0x301f58(0x427))
              , _0x55a5ac = $(_0x301f58(0x58d))
              , _0xff7dd = ($(_0x301f58(0x52b)),
            $(_0x301f58(0x3ef)))
              , _0x1a8d0d = $('#final-message')
              , _0x501f62 = $('#final-score')
              , _0xe1d160 = $(_0x301f58(0x265))
              , _0x101adb = $('#final-board')
              , _0x424bd9 = _0x22ee20(_0x501845, function() {
                var _0x4fff20 = _0x301f58;
                _0x501845[_0x4fff20(0x5b3)](this, _0x3569db['pk']);
                var _0x1130dd = this
                  , _0x3794f4 = _0x3392fc()
                  , _0x5f2664 = _0x501845['mk'][_0x4fff20(0x338)]()[0x0];
                console[_0x4fff20(0x39b)]('sSE=' + _0x25fccb['qk']),
                _0x2ee987[_0x4fff20(0x318)](_0x2ca325(_0x4fff20(0x476))),
                _0x2d862b['text'](_0x2ca325('index.game.result.continue')),
                _0x2d862b[_0x4fff20(0x2c0)](function() {
                    _0x3794f4['r']['Cd'](),
                    _0x3794f4['r']['G'](_0xdbe872['AudioState']['F']),
                    _0x3794f4['s']['I'](_0x3794f4['s']['F']);
                }),
                $('#game-canvas')['attr'](_0x4fff20(0x689), 0x0)[_0x4fff20(0x1af)](),
                $(_0x4fff20(0x246))['click'](),
                $('#game-canvas')[_0x4fff20(0x232)](function(_0x3cc02d) {
                    var _0x4c6bd7 = _0x4fff20;
                    console[_0x4c6bd7(0x39b)](_0x3cc02d);
                    if (_0x3cc02d[_0x4c6bd7(0x4d2)]['type'] === _0x4c6bd7(0x318))
                        return;
                    _0x3cc02d[_0x4c6bd7(0x1d2)]['toLowerCase']() === keys[_0x4c6bd7(0x2c3)] && zw_updatezoom(0x1);
                    if (_0x3cc02d[_0x4c6bd7(0x1d2)][_0x4c6bd7(0x6e8)]() === keys['restart']) {
                        let _0x22ad4b = zw_lastserver;
                        $(_0x4c6bd7(0x350))[_0x4c6bd7(0x519)](_0x4c6bd7(0x31e), _0x4c6bd7(0x3a1)),
                        _0x22ad4b && (anApp['r']['Hd'](),
                        anApp['sa'](_0x22ad4b));
                    }
                    if (_0x3cc02d[_0x4c6bd7(0x1d2)][_0x4c6bd7(0x6e8)]() === keys[_0x4c6bd7(0x62c)]) {
                        const _0x1020b8 = new Uint8Array([NaN, NaN]);
                        anApp['o']['Wb'](_0x1020b8),
                        setTimeout( () => {
                            var _0x392312 = _0x4c6bd7;
                            let _0x1d98be = zw_lastserver;
                            $(_0x392312(0x350))[_0x392312(0x519)](_0x392312(0x31e), _0x392312(0x3a1)),
                            _0x1d98be && (anApp['r']['Hd'](),
                            anApp['sa'](_0x1d98be));
                        }
                        , 0x3e8);
                    }
                    _0x3cc02d[_0x4c6bd7(0x1d2)][_0x4c6bd7(0x6e8)]() === keys[_0x4c6bd7(0x820)] && $('.option.toggle[data-option=\x27laserHS\x27]\x20.box')[_0x4c6bd7(0x2c0)](),
                    _0x3cc02d[_0x4c6bd7(0x1d2)][_0x4c6bd7(0x6e8)]() === keys['sectores'] && ($('.option.toggle[data-option=\x27sectores\x27]\x20.box')[_0x4c6bd7(0x2c0)](),
                    setSectorsGame()),
                    _0x3cc02d[_0x4c6bd7(0x1d2)]['toLowerCase']() === keys[_0x4c6bd7(0x613)] && ($(_0x4c6bd7(0x37f))[_0x4c6bd7(0x2c0)](),
                    setSectorsGame()),
                    _0x3cc02d[_0x4c6bd7(0x1d2)][_0x4c6bd7(0x6e8)]() === keys[_0x4c6bd7(0x80d)] && (theoKzObjects['noSkin'] = !theoKzObjects[_0x4c6bd7(0x80d)]),
                    _0x3cc02d[_0x4c6bd7(0x1d2)][_0x4c6bd7(0x6e8)]() === keys[_0x4c6bd7(0x6c9)] && (theoKzObjects[_0x4c6bd7(0x6c9)] = !theoKzObjects[_0x4c6bd7(0x6c9)]),
                    _0x3cc02d[_0x4c6bd7(0x1d2)][_0x4c6bd7(0x6e8)]() === keys[_0x4c6bd7(0x40c)] && (isRunning ? (isRunning = ![],
                    initialInterval = 0x37,
                    cycleCounter = 0x1,
                    isIncrementing = !![],
                    clearInterval(intervalID),
                    intervalID = null,
                    zw_girosubtracttexture['texture'] = ungirotexture,
                    zw_girosubtracttexture[_0x4c6bd7(0x4d8)] = 0.25) : (zw_girosubtracttexture[_0x4c6bd7(0x4d8)] = 0.75,
                    startInterval(),
                    isRunning = !![]));
                }),
                $(_0x4fff20(0x246))[_0x4fff20(0x33b)](function(_0x514485) {
                    var _0x499ec0 = _0x4fff20;
                    _0x514485['key'] === 'Enter' && _0x15f71d();
                    0x20 == _0x514485[_0x499ec0(0x221)] && (_0x1130dd['rk'] = !![]);
                    0x31 == _0x514485['keyCode'] && (theoKzObjects[_0x499ec0(0x2a8)] = !![],
                    setTimeout( () => {
                        var _0x5c0190 = _0x499ec0;
                        theoKzObjects[_0x5c0190(0x2a8)] = ![];
                    }
                    , 0x7d0));
                    if (0x36 == _0x514485[_0x499ec0(0x221)]) {}
                })['keyup'](function(_0xaf6ede) {
                    var _0x1fba52 = _0x4fff20;
                    0x20 == _0xaf6ede[_0x1fba52(0x221)] && (_0x1130dd['rk'] = ![]);
                });
                var _0x15f71d = function() {
                    var _0x4a3952 = _0x4fff20;
                    $(_0x4a3952(0x704))[_0x4a3952(0x519)](_0x4a3952(0x5be), _0x4a3952(0x787))['focus']();
                };
                _0x5f2664[_0x4fff20(0x345)]('touchstart', function(_0x2258f4) {
                    var _0x45765e = _0x4fff20;
                    (_0x2258f4 = _0x2258f4 || window['event']) && (_0x1130dd['rk'] = _0x2258f4[_0x45765e(0x53b)][_0x45765e(0x607)] >= 0x2),
                    _0x2258f4[_0x45765e(0x584)]();
                }, !![]),
                _0x5f2664[_0x4fff20(0x345)]('touchend', function(_0xfb7e0b) {
                    var _0x3a0fde = _0x4fff20;
                    (_0xfb7e0b = _0xfb7e0b || window[_0x3a0fde(0x77d)]) && (_0x1130dd['rk'] = _0xfb7e0b[_0x3a0fde(0x53b)]['length'] >= 0x2);
                }, !![]),
                _0x5f2664[_0x4fff20(0x345)](_0x4fff20(0x6a3), function(_0x1d4044) {
                    var _0x1b234d = _0x4fff20;
                    _0x1d4044 = _0x1d4044 || window['event'] && typeof _0x1d4044['clientX'] !== 'undefined';
                    if (_0x1d4044 && !isRunning) {
                        var _0x514b7f = _0x1d4044[_0x1b234d(0x369)]
                          , _0x46640a = _0x1d4044['clientY'];
                        window[_0x1b234d(0x38b)] = _0x514b7f,
                        window[_0x1b234d(0x1ad)] = _0x46640a,
                        _0x1130dd['sk'] = Math['atan2'](_0x46640a - 0.5 * _0x5f2664[_0x1b234d(0x6ca)], _0x514b7f - 0.5 * _0x5f2664['offsetWidth']);
                    }
                }, !![]),
                _0x5f2664[_0x4fff20(0x345)](_0x4fff20(0x74c), function(_0x2a9b0a) {
                    _0x1130dd['rk'] = !![];
                }, !![]),
                _0x5f2664[_0x4fff20(0x345)](_0x4fff20(0x54a), function(_0x4810da) {
                    _0x1130dd['rk'] = ![];
                }, !![]);
                if (zw_mobilecheck()) {
                    var _0x5ba4d7, _0x3409b4 = -0x1;
                    _0x5f2664[_0x4fff20(0x345)]('touchmove', function(_0x3ae15e) {
                        var _0x230591 = _0x4fff20;
                        if (_0x3ae15e = _0x3ae15e || window['event']) {
                            _0x3ae15e = _0x3ae15e[_0x230591(0x53b)][0x0];
                            var _0x421116 = 0.5 * _0x5f2664['offsetWidth']
                              , _0x46e5b3 = 0.5 * _0x5f2664[_0x230591(0x6ca)]
                              , _0xff80e4 = 0x6e;
                            zw_mobilearrowtexture[_0x230591(0x3db)] && (_0x421116 = zw_mobilearrowtexture['x'] + 0x6e,
                            _0x46e5b3 = zw_mobilearrowtexture['y'] + 0x6e);
                            zw_joystick === -0x1 && (_0x1130dd['sk'] = Math[_0x230591(0x33c)](_0x3ae15e[_0x230591(0x486)] - _0x46e5b3, _0x3ae15e['pageX'] - _0x421116));
                            if (zw_mobileprediction != -0x1) {
                                var _0x5aca69 = Math[_0x230591(0x531)]((_0x421116 - _0x3ae15e[_0x230591(0x649)]) * (_0x421116 - _0x3ae15e[_0x230591(0x649)]) + (_0x46e5b3 - _0x3ae15e[_0x230591(0x486)]) * (_0x46e5b3 - _0x3ae15e[_0x230591(0x486)]));
                                zw_mobilepredictiontextures[zw_mobileprediction]['x'] = 0.5 * _0x5f2664[_0x230591(0x54e)] + (_0x5aca69 < _0xff80e4 ? _0x5aca69 : _0xff80e4) * Math[_0x230591(0x673)](_0x1130dd['sk']) - 0x44,
                                zw_mobilepredictiontextures[zw_mobileprediction]['y'] = 0.5 * _0x5f2664[_0x230591(0x6ca)] + (_0x5aca69 < _0xff80e4 ? _0x5aca69 : _0xff80e4) * Math[_0x230591(0x26c)](_0x1130dd['sk']) - 0x44,
                                zw_mobilepredictiontextures[zw_mobileprediction][_0x230591(0x4d8)] = 0x1;
                            }
                        }
                    }, !0x0),
                    _0x5f2664[_0x4fff20(0x345)]('touchend', function(_0x4432b2) {
                        var _0x212250 = _0x4fff20;
                        zw_mobileprediction != -0x1 && (zw_mobilepredictiontextures[zw_mobileprediction][_0x212250(0x4d8)] = 0.25),
                        _0x4432b2 && _0x3409b4 === -0x1 && (_0x1130dd['rk'] = _0x4432b2[_0x212250(0x53b)][_0x212250(0x607)] >= 0x2);
                    }, !0x0),
                    _0x5f2664['addEventListener'](_0x4fff20(0x3ed), function(_0x27c912) {
                        var _0x33f206 = _0x4fff20;
                        let _0xc63c6 = zw_zoomplustexture[_0x33f206(0x6a9)](), _0x5e5235 = zw_zoomsubtracttexture[_0x33f206(0x6a9)](), _0x10743d, _0x52fd0d;
                        zw_girosubtracttexture !== undefined && zw_explotWubtracttexture !== undefined && (_0x10743d = zw_girosubtracttexture['getGlobalPosition'](),
                        _0x52fd0d = zw_explotWubtracttexture[_0x33f206(0x6a9)]());
                        let _0x2f14a8 = zw_mobilecontroltextures[zw_mobilecontrol]['getGlobalPosition']()
                          , _0xd2714e = zw_mobilepeedtexture[_0x33f206(0x6a9)]();
                        if (_0x52fd0d !== undefined && _0x10743d !== undefined) {
                            if (_0x27c912['clientX'] > _0x52fd0d['x'] && _0x27c912[_0x33f206(0x369)] <= _0x52fd0d['x'] + zw_explotWubtracttexture[_0x33f206(0x546)] && _0x27c912[_0x33f206(0x771)] > _0x52fd0d['y'] && _0x27c912['clientY'] <= _0x52fd0d['y'] + zw_explotWubtracttexture['height']) {
                                zw_explotWubtracttexture[_0x33f206(0x4e9)]('mouseup');
                                return;
                            }
                            if (_0x27c912[_0x33f206(0x369)] > _0x10743d['x'] && _0x27c912[_0x33f206(0x369)] <= _0x10743d['x'] + zw_girosubtracttexture['width'] && _0x27c912[_0x33f206(0x771)] > _0x10743d['y'] && _0x27c912[_0x33f206(0x771)] <= _0x10743d['y'] + zw_girosubtracttexture[_0x33f206(0x804)]) {
                                zw_girosubtracttexture[_0x33f206(0x4e9)](_0x33f206(0x54a));
                                return;
                            }
                        }
                        if (_0x27c912[_0x33f206(0x369)] > _0xc63c6['x'] && _0x27c912['clientX'] <= _0xc63c6['x'] + zw_zoomplustexture['width'] && _0x27c912[_0x33f206(0x771)] > _0xc63c6['y'] && _0x27c912['clientY'] <= _0xc63c6['y'] + zw_zoomplustexture[_0x33f206(0x804)]) {
                            zw_zoomplustexture[_0x33f206(0x4e9)]('mouseup');
                            return;
                        }
                        if (_0x27c912[_0x33f206(0x369)] > _0x5e5235['x'] && _0x27c912[_0x33f206(0x369)] <= _0x5e5235['x'] + zw_zoomsubtracttexture[_0x33f206(0x546)] && _0x27c912[_0x33f206(0x771)] > _0x5e5235['y'] && _0x27c912[_0x33f206(0x771)] <= _0x5e5235['y'] + zw_zoomsubtracttexture[_0x33f206(0x804)]) {
                            zw_zoomsubtracttexture[_0x33f206(0x4e9)]('mouseup');
                            return;
                        }
                        if (_0x27c912[_0x33f206(0x369)] > _0x2f14a8['x'] && _0x27c912['clientX'] <= _0x2f14a8['x'] + zw_mobilecontroltextures[zw_mobilecontrol]['width'] && _0x27c912[_0x33f206(0x771)] > _0x2f14a8['y'] && _0x27c912[_0x33f206(0x771)] <= _0x2f14a8['y'] + zw_mobilecontroltextures[zw_mobilecontrol]['height']) {
                            zw_mobilecontroltextures[zw_mobilecontrol][_0x33f206(0x4e9)](_0x33f206(0x627));
                            return;
                        }
                        if (zw_mobilepeedtexture[_0x33f206(0x3db)] && _0x27c912[_0x33f206(0x369)] > _0xd2714e['x'] && _0x27c912[_0x33f206(0x369)] <= _0xd2714e['x'] + zw_mobilepeedtexture['width'] && _0x27c912[_0x33f206(0x771)] > _0xd2714e['y'] && _0x27c912['clientY'] <= _0xd2714e['y'] + zw_mobilepeedtexture['height']) {
                            _0x3409b4 = _0x27c912[_0x33f206(0x49c)],
                            _0x1130dd['rk'] = !![],
                            zw_mobilepeedtexture[_0x33f206(0x4d8)] = 0x1;
                            return;
                        }
                        zw_joystick !== -0x1 && (!zw_joysticks[zw_joystick][_0x33f206(0x3db)] && (_0x5ba4d7 = _0x27c912[_0x33f206(0x49c)],
                        zw_joysticks[zw_joystick]['x'] = _0x27c912[_0x33f206(0x369)],
                        zw_joysticks[zw_joystick]['y'] = _0x27c912[_0x33f206(0x771)],
                        zw_joysticks[zw_joystick][_0x33f206(0x3db)] = !![],
                        zw_joysticks[zw_joystick][_0x33f206(0x7c6)](_0x27c912)));
                    }, !0x0),
                    _0x5f2664[_0x4fff20(0x345)](_0x4fff20(0x1c8), function(_0x5a4ca7) {
                        var _0x70bc2d = _0x4fff20;
                        _0x5a4ca7[_0x70bc2d(0x49c)] == _0x3409b4 && (_0x1130dd['rk'] = ![],
                        _0x3409b4 = -0x1,
                        zw_mobilepeedtexture[_0x70bc2d(0x4d8)] = 0.5),
                        _0x5a4ca7[_0x70bc2d(0x49c)] == _0x5ba4d7 && (zw_joystick !== -0x1 && (zw_joysticks[zw_joystick][_0x70bc2d(0x3db)] = ![],
                        zw_joysticks[zw_joystick][_0x70bc2d(0x5e4)](_0x5a4ca7)));
                    }, !0x0),
                    _0x5f2664[_0x4fff20(0x345)](_0x4fff20(0x25b), function(_0x5aaa1c) {
                        var _0x3e085c = _0x4fff20;
                        _0x5aaa1c[_0x3e085c(0x49c)] == _0x5ba4d7 && (zw_joystick !== -0x1 && zw_joysticks[zw_joystick][_0x3e085c(0x4c2)](_0x5aaa1c));
                    }, !0x0);
                }
                this['wb'] = new _0x2daed0(_0x501845['mk']),
                this['cb'] = _0x5e4a1d['J'],
                this['sk'] = 0x0,
                this['rk'] = ![],
                theoEvents[_0x4fff20(0x423)] = _0x1130dd;
            });
            _0x424bd9[_0x301f58(0x792)]['a'] = function() {}
            ,
            _0x424bd9[_0x301f58(0x792)]['ii'] = function() {
                var _0x292791 = _0x301f58;
                this['cb'] == _0x5e4a1d['J'] ? (_0x501845['fk'][_0x292791(0x619)](),
                _0x501845['fk']['fadeIn'](0x1f4),
                _0x501845['gk'][_0x292791(0x619)](),
                _0x501845['gk'][_0x292791(0x2d4)](0x1),
                _0x501845['hk'][_0x292791(0x619)](),
                _0x501845['hk'][_0x292791(0x2d4)](0x32),
                _0x501845['ik'][_0x292791(0x619)](),
                _0x501845['ik'][_0x292791(0x2d4)](0x32),
                _0x501845['jk'][_0x292791(0x619)](),
                _0x501845['jk'][_0x292791(0x2d4)](0x32),
                _0x501845['kk'][_0x292791(0x619)](),
                _0x501845['kk'][_0x292791(0x2d4)](0x32),
                _0x501845['lk'][_0x292791(0x619)](),
                _0x501845['lk'][_0x292791(0x2d4)](0x1),
                _0x501845['di'][_0x292791(0x619)](),
                _0x501845['di'][_0x292791(0x2d4)](0x32),
                _0x3606ae['Le'](![]),
                _0x501845['nk'][_0x292791(0x619)](),
                _0x501845['nk'][_0x292791(0x2d4)](0x32),
                _0x501845['ok'][_0x292791(0x619)](),
                _0x501845['ok'][_0x292791(0x2d4)](0x32)) : (_0x501845['fk'][_0x292791(0x619)](),
                _0x501845['fk']['fadeIn'](0x1f4),
                _0x501845['gk']['stop'](),
                _0x501845['gk'][_0x292791(0x2c6)](0x1f4),
                _0x501845['hk']['stop'](),
                _0x501845['hk'][_0x292791(0x2d4)](0x32),
                _0x501845['ik']['stop'](),
                _0x501845['ik'][_0x292791(0x2d4)](0x32),
                _0x501845['jk'][_0x292791(0x619)](),
                _0x501845['jk'][_0x292791(0x2d4)](0x32),
                _0x501845['kk'][_0x292791(0x619)](),
                _0x501845['kk'][_0x292791(0x2d4)](0x32),
                _0x501845['lk']['stop'](),
                _0x501845['lk'][_0x292791(0x2d4)](0x1),
                _0x501845['di'][_0x292791(0x619)](),
                _0x501845['di']['fadeOut'](0x32),
                _0x3606ae['Le'](![]),
                _0x501845['nk'][_0x292791(0x619)](),
                _0x501845['nk'][_0x292791(0x2d4)](0x32),
                _0x501845['ok'][_0x292791(0x619)](),
                _0x501845['ok'][_0x292791(0x2d4)](0x32));
            }
            ,
            _0x424bd9[_0x301f58(0x792)]['J'] = function() {
                return this['cb'] = _0x5e4a1d['J'],
                this;
            }
            ,
            _0x424bd9[_0x301f58(0x792)]['Fa'] = function() {
                var _0x7e47c7 = _0x301f58;
                return console[_0x7e47c7(0x39b)]('re'),
                (_0x3e9179['hide'](),
                setTimeout(function() {
                    var _0x312c4b = _0x7e47c7;
                    console[_0x312c4b(0x39b)](_0x312c4b(0x67c)),
                    _0x3e9179[_0x312c4b(0x2c6)](0x64);
                }, 0x64),
                _0x55a5ac[_0x7e47c7(0x719)](),
                setTimeout(function() {
                    var _0x5207ab = _0x7e47c7;
                    console[_0x5207ab(0x39b)](_0x5207ab(0x1e2)),
                    _0x55a5ac['fadeIn'](0x64);
                }, 0x64),
                this['cb'] = _0x5e4a1d['Fa'],
                this);
            }
            ,
            _0x424bd9['prototype']['ji'] = function() {
                this['rk'] = ![],
                this['wb']['Ra'](),
                this['cb'] == _0x5e4a1d['Fa'] && _0x3392fc()['r']['Gd']();
            }
            ,
            _0x424bd9['prototype']['Ra'] = function() {
                this['wb']['Ra']();
            }
            ,
            _0x424bd9[_0x301f58(0x792)]['Pa'] = function(_0x10c77b, _0x96f091) {
                this['wb']['Pa'](_0x10c77b, _0x96f091);
            }
            ,
            _0x424bd9[_0x301f58(0x792)]['Da'] = function(_0xdb4c00, _0x29f576, _0x41bdc7) {
                var _0xcd3e21 = _0x301f58
                  , _0x5c32c7 = void 0x0
                  , _0x1c7dbd = void 0x0
                  , _0x29baed = void 0x0;
                if (_0x29f576 >= 0x1 && _0x29f576 <= 0xa ? (_0x5c32c7 = _0x2ca325('index.game.result.place.i' + _0x29f576),
                _0x1c7dbd = _0x2ca325(_0xcd3e21(0x47d)),
                _0x29baed = _0x2ca325(_0xcd3e21(0x3d0))[_0xcd3e21(0x707)](_0xcd3e21(0x7ac), _0x41bdc7)[_0xcd3e21(0x707)](_0xcd3e21(0x572), _0xdb4c00)['replace'](_0xcd3e21(0x62f), _0x5c32c7)) : (_0x5c32c7 = '',
                _0x1c7dbd = _0x2ca325('index.game.result.tryHit'),
                _0x29baed = _0x2ca325('index.game.social.shareResult.messNorm')[_0xcd3e21(0x707)]('{0}', _0x41bdc7)[_0xcd3e21(0x707)](_0xcd3e21(0x572), _0xdb4c00)),
                _0x1a8d0d[_0xcd3e21(0x450)](_0x2ca325(_0xcd3e21(0x728))),
                _0x501f62['html'](_0xdb4c00),
                _0xe1d160[_0xcd3e21(0x450)](_0x5c32c7),
                _0x101adb[_0xcd3e21(0x450)](_0x1c7dbd),
                _0x25fccb['qk']) {
                    var _0x283711 = _0x2ca325('index.game.result.share');
                    _0x2ca325(_0xcd3e21(0x383)),
                    _0xff7dd[_0xcd3e21(0x38d)]()[_0xcd3e21(0x6b3)](_0x578f1a(_0x283711, _0xcd3e21(0x615), _0xcd3e21(0x2be), _0x29baed, _0x29baed, _0xcd3e21(0x269)));
                }
            }
            ,
            _0x424bd9[_0x301f58(0x792)]['T'] = function() {
                return this['sk'];
            }
            ,
            _0x424bd9[_0x301f58(0x792)]['U'] = function() {
                return this['rk'];
            }
            ;
            var _0x5e4a1d = {
                'J': 0x0,
                'Fa': 0x1
            };
            return _0x424bd9;
        }())
          , _0x147449 = (function() {
            var _0x57ced6 = _0x5b9465
              , _0x212361 = $(_0x57ced6(0x4d4))
              , _0x53a144 = $(_0x57ced6(0x395))
              , _0xa5e5c7 = $('#loading-worm-c')
              , _0x1ccbcb = [_0x57ced6(0x706), _0x57ced6(0x6fd), _0x57ced6(0x6a1), '200%\x20200%']
              , _0x1a3189 = _0x22ee20(_0x501845, function() {
                var _0x4fc5cf = _0x57ced6;
                _0x501845[_0x4fc5cf(0x5b3)](this, _0x3569db['pk']);
            });
            return _0x1a3189['prototype']['a'] = function() {}
            ,
            _0x1a3189[_0x57ced6(0x792)]['ii'] = function() {
                var _0x18a1a1 = _0x57ced6;
                _0x501845['fk'][_0x18a1a1(0x619)](),
                _0x501845['fk'][_0x18a1a1(0x2d4)](0x32),
                _0x501845['gk'][_0x18a1a1(0x619)](),
                _0x501845['gk'][_0x18a1a1(0x2d4)](0x32),
                _0x501845['hk']['stop'](),
                _0x501845['hk'][_0x18a1a1(0x2d4)](0x32),
                _0x501845['ik'][_0x18a1a1(0x619)](),
                _0x501845['ik']['fadeOut'](0x32),
                _0x501845['jk'][_0x18a1a1(0x619)](),
                _0x501845['jk'][_0x18a1a1(0x2d4)](0x32),
                _0x501845['kk'][_0x18a1a1(0x619)](),
                _0x501845['kk'][_0x18a1a1(0x2c6)](0x1f4),
                _0x501845['lk']['stop'](),
                _0x501845['lk'][_0x18a1a1(0x2c6)](0x1),
                _0x501845['di'][_0x18a1a1(0x619)](),
                _0x501845['di'][_0x18a1a1(0x2c6)](0x1f4),
                _0x3606ae['Le'](!0x0),
                _0x501845['nk'][_0x18a1a1(0x619)](),
                _0x501845['nk'][_0x18a1a1(0x2d4)](0x32),
                _0x501845['ok'][_0x18a1a1(0x619)](),
                _0x501845['ok']['fadeOut'](0x32);
            }
            ,
            _0x1a3189[_0x57ced6(0x792)]['ji'] = function() {
                this['tk']();
            }
            ,
            _0x1a3189[_0x57ced6(0x792)]['tk'] = function() {
                var _0x146475 = _0x57ced6;
                _0x212361[_0x146475(0x519)](_0x146475(0x312), _0x146475(0x6fd));
                for (var _0x2b9a47 = 0x0; _0x2b9a47 < _0x1ccbcb[_0x146475(0x607)]; _0x2b9a47++) {
                    var _0x2fb1fd = Math[_0x146475(0x1c7)](Math[_0x146475(0x7d2)]() * _0x1ccbcb['length'])
                      , _0x184af8 = _0x1ccbcb[_0x2b9a47];
                    _0x1ccbcb[_0x2b9a47] = _0x1ccbcb[_0x2fb1fd],
                    _0x1ccbcb[_0x2fb1fd] = _0x184af8;
                }
                _0x212361[_0x146475(0x519)](_0x146475(0x312), _0x1ccbcb[0x0]),
                _0x53a144[_0x146475(0x519)](_0x146475(0x312), _0x1ccbcb[0x1]),
                _0xa5e5c7[_0x146475(0x519)](_0x146475(0x312), _0x1ccbcb[0x2]);
            }
            ,
            _0x1a3189;
        }())
          , _0x40ae79 = (function() {
            var _0x2068ff = _0x5b9465
              , _0x43c227 = ($(_0x2068ff(0x4ad)),
            $(_0x2068ff(0x7a5)))
              , _0x1eaa63 = $('#mm-skin-prev')
              , _0x2766fa = $(_0x2068ff(0x587))
              , _0x2bbd25 = $(_0x2068ff(0x678))
              , _0x3d70f1 = $(_0x2068ff(0x679))
              , _0x49ae3d = $(_0x2068ff(0x457))
              , _0x2fec6b = $(_0x2068ff(0x438))
              , _0x3c700c = $(_0x2068ff(0x756))
              , _0x3570ac = $(_0x2068ff(0x20f))
              , _0xbc6cfd = $('#mm-action-guest')
              , _0x2924a1 = $(_0x2068ff(0x45f))
              , _0x382689 = $(_0x2068ff(0x3de))
              , _0x551f2e = $('#mm-store')
              , _0x4d358d = $(_0x2068ff(0x55b))
              , _0xbb92a0 = $(_0x2068ff(0x51b))
              , _0x7854e8 = $(_0x2068ff(0x83f))
              , _0x207536 = $(_0x2068ff(0x646))
              , _0x3c3ee5 = $(_0x2068ff(0x2a7))
              , _0x1129c0 = $('#mm-coins-val')
              , _0x308830 = $(_0x2068ff(0x3e8))
              , _0x15ce5a = $(_0x2068ff(0x840))
              , _0x14e5ce = $(_0x2068ff(0x696))
              , _0x3b58a2 = _0x22ee20(_0x501845, function() {
                var _0x18eb75 = _0x2068ff;
                _0x501845[_0x18eb75(0x5b3)](this, _0x3569db['hi']);
                var _0x353f8a = _0x3392fc();
                this['uk'] = new _0x418bed(_0x43c227),
                _0x2fec6b[_0x18eb75(0x2c0)](function() {
                    _0x353f8a['r']['Cd']();
                }),
                _0x43c227['click'](function() {
                    _0x353f8a['u']['P']() && (_0x353f8a['r']['Cd'](),
                    _0x353f8a['s']['I'](_0x353f8a['s']['$h']));
                }),
                _0x1eaa63[_0x18eb75(0x2c0)](function() {
                    _0x353f8a['r']['Cd'](),
                    _0x353f8a['t']['Ah']();
                }),
                _0x2766fa[_0x18eb75(0x2c0)](function() {
                    _0x353f8a['r']['Cd'](),
                    _0x353f8a['t']['zh']();
                }),
                _0x49ae3d['keypress'](function(_0x4dcd69) {
                    0xd == _0x4dcd69['keyCode'] && _0x353f8a['na']();
                }),
                _0x3570ac[_0x18eb75(0x2c0)](function() {
                    _0x353f8a['r']['Cd'](),
                    _0x353f8a['na']();
                }),
                _0xbc6cfd[_0x18eb75(0x2c0)](function() {
                    _0x353f8a['r']['Cd'](),
                    _0x353f8a['na']();
                }),
                _0x2924a1[_0x18eb75(0x2c0)](function() {
                    _0x353f8a['r']['Cd'](),
                    _0x353f8a['s']['I'](_0x353f8a['s']['Zh']);
                }),
                _0xbb92a0[_0x18eb75(0x2c0)](function() {
                    _0x353f8a['r']['Cd'](),
                    _0x353f8a['s']['I'](_0x353f8a['s']['xa']);
                }),
                _0x382689[_0x18eb75(0x2c0)](function() {
                    _0x353f8a['u']['P']() && (_0x353f8a['r']['Cd'](),
                    _0x353f8a['s']['I'](_0x353f8a['s']['Yh']));
                }),
                _0x4d358d[_0x18eb75(0x2c0)](function() {
                    _0x353f8a['u']['P']() && (_0x353f8a['r']['Cd'](),
                    _0x353f8a['s']['I'](_0x353f8a['s']['Xh']));
                }),
                _0x551f2e['click'](function() {
                    _0x353f8a['u']['P']() && (_0x353f8a['r']['Cd'](),
                    _0x353f8a['s']['I'](_0x353f8a['s']['_h']));
                }),
                _0x7854e8['click'](function() {
                    _0x353f8a['u']['P']() && (_0x353f8a['r']['Cd'](),
                    _0x353f8a['s']['I'](_0x353f8a['s']['Wh']));
                }),
                this['vk'](),
                this['wk'](),
                $(_0x18eb75(0x311))[_0x18eb75(0x767)](_0x18eb75(0x473)),
                $(_0x18eb75(0x2af))['click'](function() {
                    let _0x41da49 = zw_lastserver;
                    _0x41da49 && (anApp['r']['Hd'](),
                    anApp['sa'](_0x41da49));
                }),
                _0x551f2e[_0x18eb75(0x767)]('<div\x20id=\x22mm-zw-settings\x22\x20style=\x22\x22>Settings</div>');
                let _0x24950a = $(_0x18eb75(0x573));
                _0x24950a['html'](_0x18eb75(0x61e)),
                $(_0x18eb75(0x7ed))[_0x18eb75(0x2c0)](function() {
                    let _0x39bc65 = zw_lastserver;
                    _0x39bc65 && (anApp['r']['Hd'](),
                    anApp['sa'](_0x39bc65));
                }),
                $(_0x18eb75(0x6ac))[_0x18eb75(0x2c0)](function() {
                    var _0x216daa = _0x18eb75;
                    if (zw_mobilefullscreenstatus) {
                        if (document[_0x216daa(0x7b4)])
                            document[_0x216daa(0x7b4)]();
                        else {
                            if (document['webkitExitFullscreen'])
                                document[_0x216daa(0x77c)]();
                            else {
                                if (document[_0x216daa(0x272)])
                                    document[_0x216daa(0x272)]();
                                else
                                    document[_0x216daa(0x349)][_0x216daa(0x77c)] && document[_0x216daa(0x349)]['webkitExitFullscreen']();
                            }
                        }
                        zw_mobilefullscreenstatus = ![];
                    } else {
                        if (document[_0x216daa(0x6c4)][_0x216daa(0x5c0)])
                            document[_0x216daa(0x6c4)]['requestFullscreen']();
                        else {
                            if (document[_0x216daa(0x6c4)][_0x216daa(0x5bd)])
                                document[_0x216daa(0x6c4)][_0x216daa(0x5bd)]();
                            else {
                                if (document[_0x216daa(0x6c4)]['msRequestFullscreen'])
                                    document[_0x216daa(0x6c4)][_0x216daa(0x41b)]();
                                else
                                    document[_0x216daa(0x349)][_0x216daa(0x5bd)] && document[_0x216daa(0x349)][_0x216daa(0x5bd)]();
                            }
                        }
                        zw_mobilefullscreenstatus = !![];
                    }
                }),
                $(_0x18eb75(0x321))[_0x18eb75(0x2c0)](function() {
                    var _0x236556 = _0x18eb75;
                    _0x353f8a['u']['P']() && (_0x353f8a['r']['Cd'](),
                    _0x353f8a['s']['I'](_0x353f8a['s'][_0x236556(0x638)]));
                });
                var _0xf6f9cc = _0x4961dc(_0x166161['va']);
                _0x18eb75(0x491) != _0xf6f9cc && _0x18eb75(0x6ae) != _0xf6f9cc && (_0xf6f9cc = _0x18eb75(0x491)),
                _0x2fec6b[_0x18eb75(0x382)](_0xf6f9cc),
                console[_0x18eb75(0x39b)]('Load\x20GM:\x20' + _0xf6f9cc);
            });
            return _0x3b58a2['prototype']['a'] = function() {
                var _0x1db277 = _0x3392fc()
                  , _0x18ae4e = this;
                _0x1db277['u']['V'](function() {
                    _0x1db277['s']['F']['xk']();
                }),
                _0x1db277['u']['Pi'](function() {
                    _0x1db277['u']['P']() ? (_0x1db277['t']['Bh'](_0x1db277['u']['Di'](), _0x4e8d86['ia']),
                    _0x1db277['t']['Bh'](_0x1db277['u']['Ei'](), _0x4e8d86['ja']),
                    _0x1db277['t']['Bh'](_0x1db277['u']['Fi'](), _0x4e8d86['ka']),
                    _0x1db277['t']['Bh'](_0x1db277['u']['Gi'](), _0x4e8d86['la']),
                    _0x1db277['t']['Bh'](_0x1db277['u']['Hi'](), _0x4e8d86['ma'])) : (_0x1db277['t']['Bh'](_0x1db277['Ga'](), _0x4e8d86['ia']),
                    _0x1db277['t']['Bh'](0x0, _0x4e8d86['ja']),
                    _0x1db277['t']['Bh'](0x0, _0x4e8d86['ka']),
                    _0x1db277['t']['Bh'](0x0, _0x4e8d86['la']),
                    _0x1db277['t']['Bh'](0x0, _0x4e8d86['ma']));
                }),
                _0x1db277['u']['Pi'](function() {
                    var _0x885a33 = _0x2458;
                    _0x3570ac['toggle'](_0x1db277['u']['P']()),
                    _0x2924a1[_0x885a33(0x35e)](!_0x1db277['u']['P']()),
                    _0xbc6cfd[_0x885a33(0x35e)](!_0x1db277['u']['P']()),
                    _0x4d358d[_0x885a33(0x35e)](_0x1db277['u']['P']()),
                    _0x551f2e[_0x885a33(0x35e)](_0x1db277['u']['P']()),
                    _0x7854e8[_0x885a33(0x35e)](_0x1db277['u']['P']()),
                    _0x1db277['u']['P']() ? (_0x2bbd25['hide'](),
                    _0x3c3ee5[_0x885a33(0x450)](_0x1db277['u']['wi']()),
                    _0x207536['attr']('src', _0x1db277['u']['xi']()),
                    _0x1129c0[_0x885a33(0x450)](_0x1db277['u']['zi']()),
                    _0x308830[_0x885a33(0x546)](0x64 * _0x1db277['u']['Bi']() / _0x1db277['u']['Ci']() + '%'),
                    _0x15ce5a[_0x885a33(0x450)](_0x1db277['u']['Bi']() + _0x885a33(0x235) + _0x1db277['u']['Ci']()),
                    _0x14e5ce[_0x885a33(0x450)](_0x1db277['u']['Ai']()),
                    _0x49ae3d[_0x885a33(0x382)](_0x1db277['u']['ga']())) : (_0x2bbd25[_0x885a33(0x35e)](_0x25fccb['qk'] && !_0x1db277['Ha']()),
                    _0x3c3ee5[_0x885a33(0x450)](_0x3c3ee5[_0x885a33(0x294)](_0x885a33(0x716))),
                    _0x207536['attr'](_0x885a33(0x4ec), _0x40e1c9),
                    _0x1129c0[_0x885a33(0x450)]('10'),
                    _0x308830[_0x885a33(0x546)]('0'),
                    _0x15ce5a[_0x885a33(0x450)](''),
                    _0x14e5ce[_0x885a33(0x450)](0x1),
                    _0x49ae3d[_0x885a33(0x382)](_0x4961dc(_0x166161['Aa'])));
                }),
                _0x1db277['t']['xh'](function() {
                    _0x18ae4e['uk']['ak'](_0x1db277['t']['ha'](_0x4e8d86['ia']), !0x1, !0x1),
                    _0x18ae4e['uk']['bk'](_0x1db277['t']['ha'](_0x4e8d86['ja']), !0x1, !0x1),
                    _0x18ae4e['uk']['ck'](_0x1db277['t']['ha'](_0x4e8d86['ka']), !0x1, !0x1),
                    _0x18ae4e['uk']['dk'](_0x1db277['t']['ha'](_0x4e8d86['la']), !0x1, !0x1),
                    _0x18ae4e['uk']['ek'](_0x1db277['t']['ha'](_0x4e8d86['ma']), !0x1, !0x1);
                });
            }
            ,
            _0x3b58a2[_0x2068ff(0x792)]['ii'] = function() {
                var _0x4fbb59 = _0x2068ff;
                _0x501845['fk'][_0x4fbb59(0x619)](),
                _0x501845['fk'][_0x4fbb59(0x2d4)](0x32),
                _0x501845['gk'][_0x4fbb59(0x619)](),
                _0x501845['gk']['fadeOut'](0x32),
                _0x501845['hk'][_0x4fbb59(0x619)](),
                _0x501845['hk'][_0x4fbb59(0x2c6)](0x1f4),
                _0x501845['ik'][_0x4fbb59(0x619)](),
                _0x501845['ik'][_0x4fbb59(0x2d4)](0x32),
                _0x501845['jk']['stop'](),
                _0x501845['jk'][_0x4fbb59(0x2d4)](0x32),
                _0x501845['kk'][_0x4fbb59(0x619)](),
                _0x501845['kk'][_0x4fbb59(0x2d4)](0x32),
                _0x501845['lk']['stop'](),
                _0x501845['lk']['fadeIn'](0x1),
                _0x501845['di']['stop'](),
                _0x501845['di']['fadeIn'](0x1f4),
                _0x3606ae['Le'](!0x0),
                _0x501845['nk'][_0x4fbb59(0x619)](),
                _0x501845['nk'][_0x4fbb59(0x2c6)](0x1f4),
                _0x501845['ok'][_0x4fbb59(0x619)](),
                _0x501845['ok']['fadeIn'](0x1f4);
            }
            ,
            _0x3b58a2[_0x2068ff(0x792)]['ji'] = function() {
                _0x3392fc()['r']['Dd'](),
                this['uk']['Le'](!0x0);
            }
            ,
            _0x3b58a2['prototype']['ei'] = function() {
                this['uk']['Le'](!0x1);
            }
            ,
            _0x3b58a2['prototype']['Ra'] = function() {
                this['uk']['Ra']();
            }
            ,
            _0x3b58a2[_0x2068ff(0x792)]['Pa'] = function(_0x5a8bab, _0x3f8474) {
                this['uk']['Pa']();
            }
            ,
            _0x3b58a2[_0x2068ff(0x792)]['ga'] = function() {
                var _0xbfa66c = _0x2068ff;
                return _0x49ae3d[_0xbfa66c(0x382)]();
            }
            ,
            _0x3b58a2[_0x2068ff(0x792)]['D'] = function() {
                var _0x5ebd4f = _0x2068ff;
                return _0x2fec6b[_0x5ebd4f(0x382)]();
            }
            ,
            _0x3b58a2['prototype']['xk'] = function() {
                var _0x300917 = _0x2068ff;
                _0x3c700c[_0x300917(0x524)]();
            }
            ,
            _0x3b58a2[_0x2068ff(0x792)]['vk'] = function() {
                var _0x1b21b8 = _0x2068ff
                  , _0x53722f = $('#mm-advice-cont')[_0x1b21b8(0x485)]()
                  , _0x301491 = 0x0;
                setInterval(function() {
                    var _0x399a6e = _0x1b21b8;
                    _0x53722f['eq'](_0x301491)[_0x399a6e(0x2d4)](0x1f4, function() {
                        var _0x1a227f = _0x399a6e;
                        ++_0x301491 >= _0x53722f['length'] && (_0x301491 = 0x0),
                        _0x53722f['eq'](_0x301491)[_0x1a227f(0x2c6)](0x1f4)['css'](_0x1a227f(0x5be), _0x1a227f(0x749));
                    });
                }, 0xbb8);
            }
            ,
            _0x3b58a2['prototype']['wk'] = function() {
                var _0x1db08b = _0x2068ff;
                function _0x544f8d() {
                    _0x4b7f88['Ka'](!0x0),
                    setTimeout(function() {
                        var _0x5471cb = _0x2458;
                        _0x2bbd25[_0x5471cb(0x719)]();
                    }, 0xbb8);
                }
                var _0x4b7f88 = _0x3392fc();
                if (_0x25fccb['qk'] && !_0x4b7f88['Ha']()) {
                    _0x2bbd25[_0x1db08b(0x524)]();
                    var _0x3b4fe4 = _0x2ca325(_0x1db08b(0x2e1))
                      , _0x550ebe = encodeURIComponent(_0x2ca325(_0x1db08b(0x297)) + _0x1db08b(0x4ae))
                      , _0x52c382 = encodeURIComponent(_0x2ca325(_0x1db08b(0x297)));
                    _0x3d70f1[_0x1db08b(0x6b3)]($(_0x1db08b(0x4c8) + _0x550ebe + _0x1db08b(0x208) + _0x3b4fe4 + _0x1db08b(0x4ee))[_0x1db08b(0x2c0)](_0x544f8d)),
                    _0x3d70f1[_0x1db08b(0x6b3)]($('<a\x20class=\x22mm-skin-over-button\x22\x20id=\x22mm-skin-over-fb\x22\x20target=\x22_blank\x22\x20href=\x22https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=' + _0x52c382 + _0x1db08b(0x717) + _0x3b4fe4 + '</span></a>')[_0x1db08b(0x2c0)](_0x544f8d));
                }
            }
            ,
            _0x3b58a2;
        }())
          , _0x4c4d1d = (function() {
            var _0x3a31f0 = _0x5b9465
              , _0xfcfa10 = _0x22ee20(_0x501845, function() {
                var _0x17db23 = _0x2458;
                _0x501845[_0x17db23(0x5b3)](this, _0x3569db['pk']);
            });
            return _0xfcfa10[_0x3a31f0(0x792)]['a'] = function() {}
            ,
            _0xfcfa10[_0x3a31f0(0x792)]['ii'] = function() {
                var _0x4eae4c = _0x3a31f0;
                _0x501845['fk'][_0x4eae4c(0x619)](),
                _0x501845['fk'][_0x4eae4c(0x2d4)](0x32),
                _0x501845['gk'][_0x4eae4c(0x619)](),
                _0x501845['gk'][_0x4eae4c(0x2d4)](0x32),
                _0x501845['hk'][_0x4eae4c(0x619)](),
                _0x501845['hk'][_0x4eae4c(0x2d4)](0x32),
                _0x501845['ik'][_0x4eae4c(0x619)](),
                _0x501845['ik'][_0x4eae4c(0x2d4)](0x32),
                _0x501845['jk'][_0x4eae4c(0x619)](),
                _0x501845['jk'][_0x4eae4c(0x2d4)](0x32),
                _0x501845['kk']['stop'](),
                _0x501845['kk'][_0x4eae4c(0x2d4)](0x32),
                _0x501845['lk'][_0x4eae4c(0x619)](),
                _0x501845['lk'][_0x4eae4c(0x2d4)](0x1),
                _0x501845['di'][_0x4eae4c(0x619)](),
                _0x501845['di'][_0x4eae4c(0x2d4)](0x32),
                _0x3606ae['Le'](!0x1),
                _0x501845['nk'][_0x4eae4c(0x619)](),
                _0x501845['nk'][_0x4eae4c(0x2d4)](0x32),
                _0x501845['ok'][_0x4eae4c(0x619)](),
                _0x501845['ok'][_0x4eae4c(0x2d4)](0x32);
            }
            ,
            _0xfcfa10;
        }())
          , _0x480301 = (function() {
            var _0x19511d = _0x5b9465
              , _0x1576e2 = $('#toaster-stack')
              , _0x1a2f3b = _0x22ee20(_0x501845, function() {
                var _0x3cbd24 = _0x2458;
                _0x501845[_0x3cbd24(0x5b3)](this, _0x3569db['pk']),
                this['yk'] = [],
                this['zk'] = null;
            });
            return _0x1a2f3b[_0x19511d(0x792)]['a'] = function() {}
            ,
            _0x1a2f3b[_0x19511d(0x792)]['ii'] = function() {
                var _0x1e54d3 = _0x19511d;
                _0x501845['fk'][_0x1e54d3(0x619)](),
                _0x501845['fk'][_0x1e54d3(0x2d4)](0x32),
                _0x501845['gk']['stop'](),
                _0x501845['gk'][_0x1e54d3(0x2d4)](0x32),
                _0x501845['hk'][_0x1e54d3(0x619)](),
                _0x501845['hk'][_0x1e54d3(0x2d4)](0x32),
                _0x501845['ik'][_0x1e54d3(0x619)](),
                _0x501845['ik'][_0x1e54d3(0x2d4)](0x32),
                _0x501845['jk']['stop'](),
                _0x501845['jk'][_0x1e54d3(0x2c6)](0x1f4),
                _0x501845['kk'][_0x1e54d3(0x619)](),
                _0x501845['kk'][_0x1e54d3(0x2d4)](0x32),
                _0x501845['lk'][_0x1e54d3(0x619)](),
                _0x501845['lk']['fadeIn'](0x1),
                _0x501845['di'][_0x1e54d3(0x619)](),
                _0x501845['di'][_0x1e54d3(0x2c6)](0x1f4),
                _0x3606ae['Le'](!0x0),
                _0x501845['nk'][_0x1e54d3(0x619)](),
                _0x501845['nk']['fadeOut'](0x32),
                _0x501845['ok'][_0x1e54d3(0x619)](),
                _0x501845['ok'][_0x1e54d3(0x2c6)](0x1f4);
            }
            ,
            _0x1a2f3b[_0x19511d(0x792)]['ji'] = function() {
                this['Ak']();
            }
            ,
            _0x1a2f3b[_0x19511d(0x792)]['mi'] = function() {
                return null != this['zk'] || this['yk']['length'] > 0x0;
            }
            ,
            _0x1a2f3b['prototype']['_'] = function(_0x1f36a4) {
                var _0x3afdb5 = _0x19511d;
                this['yk'][_0x3afdb5(0x7c9)](_0x1f36a4),
                setTimeout(function() {
                    _0x3392fc()['s']['ki']();
                }, 0x0);
            }
            ,
            _0x1a2f3b[_0x19511d(0x792)]['Ti'] = function(_0x3b9ae4) {
                var _0x58c332 = _0x19511d;
                this['yk'][_0x58c332(0x7b5)](_0x3b9ae4),
                setTimeout(function() {
                    _0x3392fc()['s']['ki']();
                }, 0x0);
            }
            ,
            _0x1a2f3b[_0x19511d(0x792)]['Ak'] = function() {
                var _0x51f8ce = _0x19511d
                  , _0x30c8f8 = this;
                if (null == this['zk']) {
                    if (0x0 == this['yk'][_0x51f8ce(0x607)])
                        return void _0x3392fc()['s']['gi']();
                    var _0x2d8549 = this['yk'][_0x51f8ce(0x818)]();
                    this['zk'] = _0x2d8549;
                    var _0x3eb0f2 = _0x2d8549['Bk']();
                    _0x3eb0f2[_0x51f8ce(0x719)](),
                    _0x3eb0f2[_0x51f8ce(0x2c6)](0x12c),
                    _0x1576e2[_0x51f8ce(0x6b3)](_0x3eb0f2),
                    _0x2d8549['Ck'] = function() {
                        var _0x31f3ca = _0x51f8ce;
                        _0x3eb0f2[_0x31f3ca(0x2d4)](0x12c),
                        setTimeout(function() {
                            _0x3eb0f2['remove']();
                        }, 0x12c),
                        _0x30c8f8['zk'] == _0x2d8549 && (_0x30c8f8['zk'] = null),
                        _0x30c8f8['Ak']();
                    }
                    ,
                    _0x2d8549['ji']();
                }
            }
            ,
            _0x1a2f3b;
        }())
          , _0x3569db = {
            'pk': 0x0,
            'hi': 0x1
        }
          , _0x3987d2 = (function() {
            var _0x291fbf = _0x5b9465
              , _0x4ab1f6 = $(_0x291fbf(0x535))
              , _0x28cff0 = $('#popup-menu-coins-box')
              , _0x46fd08 = $(_0x291fbf(0x7c0));
            $(_0x291fbf(0x209))['click'](function() {
                var _0x39eaa0 = _0x3392fc();
                _0x39eaa0['r']['Cd'](),
                _0x39eaa0['s']['gi']();
            }),
            _0x28cff0[_0x291fbf(0x2c0)](function() {
                var _0x1df67a = _0x3392fc();
                _0x1df67a['u']['P']() && (_0x1df67a['r']['Cd'](),
                _0x1df67a['s']['I'](_0x1df67a['s']['Wh']));
            });
            var _0x4386cf = _0x22ee20(_0x501845, function(_0x174597, _0x53da04) {
                var _0x50ff7e = _0x291fbf;
                _0x501845[_0x50ff7e(0x5b3)](this, _0x3569db['hi']),
                this['ad'] = _0x174597,
                this['Dk'] = _0x53da04;
            })
              , _0x4c45ea = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22settings-menu\x22\x20style=\x22display:\x20flex;\x20opacity:\x200;\x20z-index:\x202;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22navigation\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tab\x20material-button\x20active\x22\x20category=\x22profile\x22\x20\x20style=\x22position:\x20relative;\x20overflow:\x20hidden;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22material-icons\x22>person</i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Profile</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tab\x20material-button\x22\x20category=\x22game\x22\x20\x20style=\x22position:\x20relative;\x20overflow:\x20hidden;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22material-icons\x22>games</i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Game</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tab\x20material-button\x22\x20category=\x22theme\x22\x20style=\x22position:\x20relative;\x20overflow:\x20hidden;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22material-icons\x22>palette</i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Theme</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tab\x20material-button\x22\x20id=\x22button-inputs\x22\x20data-toggle=\x22modal\x22\x20data-target=\x22#hotkeysModal\x22\x20category=\x22controls\x22\x20style=\x22position:\x20relative;\x20overflow:\x20hidden;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22material-icons\x22>keyboard</i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Controls</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tab\x20material-button\x22\x20category=\x22cursor\x22\x20style=\x22position:\x20relative;\x20overflow:\x20hidden;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22material-icons\x22>mouse</i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Cursor</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tab\x20material-button\x22\x20category=\x22sound\x22\x20style=\x22position:\x20relative;\x20overflow:\x20hidden;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22material-icons\x22>volume_up</i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Sound</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20🏆\x20Nueva\x20pestaña:\x20Equipos\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tab\x20material-button\x22\x20category=\x22teams\x22\x20style=\x22position:\x20relative;\x20overflow:\x20hidden;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22material-icons\x22>group</i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Teams</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20🎨\x20Nueva\x20pestaña:\x20Skins\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tab\x20material-button\x22\x20category=\x22skins\x22\x20style=\x22position:\x20relative;\x20overflow:\x20hidden;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22material-icons\x22>brush</i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Skins</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20🎨\x20Nueva\x20pestaña:\x20Stremers\x20\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tab\x20material-button\x22\x20category=\x22streamers\x22\x20style=\x22position:\x20relative;\x20overflow:\x20hidden;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22material-icons\x22>live_tv</i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Live</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22options-list\x20ps\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20category=\x22game\x22\x20class=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22background-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22name2\x22>SELECT\x20BACKGROUND</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22background-selector\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22prevBackground\x22\x20class=\x22nav-button\x22\x20onclick=\x22changeBackground(-1)\x22>❮</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22backgroundPreview\x22\x20class=\x22background-preview\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22nextBackground\x22\x20class=\x22nav-button\x22\x20onclick=\x22changeBackground(1)\x22>❯</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22background-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22name2\x22>SELECT\x20FONT\x20IN\x20GAME</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22background-selector\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22prevFont\x22\x20class=\x22nav-button\x22\x20onclick=\x22changeFont(-1)\x22>❮</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22fontPreview\x22\x20class=\x22font-preview\x22>AaBbCc</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22nextFont\x22\x20class=\x22nav-button\x22\x20onclick=\x22changeFont(1)\x22>❯</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20category=\x22theme\x22\x20class=\x22\x22>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20category=\x22controls\x22\x20class=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hotkey-container\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20category=\x22profile\x22\x20class=\x22active\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-card\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Imagen\x20de\x20perfil\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-picture\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://i.imgur.com/gUysDha.png\x22\x20id=\x22avatarUrl\x22\x20alt=\x22Profile\x20Picture\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Datos\x20del\x20usuario\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2>User\x20Profile</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--p><strong>Nombre:</strong>\x20<span\x20id=\x22username\x22>Usuario</span></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Email:</strong>\x20<span\x20id=\x22useremail\x22>usuario@email.com</span></p-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Contenedor\x20del\x20ID\x20con\x20botón\x20para\x20copiar\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profile-id-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22idperfil\x22>ID:\x20<span\x20id=\x22userid\x22></span></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22idcopiar\x22\x20class=\x22copy-button\x22>Copy\x20ID</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22resetScript\x22\x20class=\x22reset-button\x22>Change\x20Version</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20category=\x22cursor\x22\x20class=\x22\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20category=\x22sound\x22\x20class=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Contenedor\x20de\x20enlaces\x20con\x20botones\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sound-inputs\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22input-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22name\x22>' + lenguaje[idiomaActual][_0x291fbf(0x3b1)] + _0x291fbf(0x697) + lenguaje[idiomaActual][_0x291fbf(0x2c4)] + _0x291fbf(0x496) + lenguaje[idiomaActual][_0x291fbf(0x320)] + _0x291fbf(0x76c) + lenguaje[idiomaActual][_0x291fbf(0x2e3)] + _0x291fbf(0x4cd);
            $(_0x291fbf(0x41d))[_0x291fbf(0x767)](_0x4c45ea),
            $(_0x291fbf(0x6d9))['on'](_0x291fbf(0x2c0), function() {
                var _0x3d1e1d = _0x291fbf
                  , _0xb8732 = $(this)[_0x3d1e1d(0x35c)](_0x3d1e1d(0x7e5));
                if ($(this)['hasClass'](_0x3d1e1d(0x267)))
                    return;
                $(_0x3d1e1d(0x55d))[_0x3d1e1d(0x317)](_0x3d1e1d(0x267)),
                $(this)[_0x3d1e1d(0x2bd)]('active'),
                $(_0x3d1e1d(0x6c7) + _0xb8732 + '\x27]')[_0x3d1e1d(0x2bd)]('active');
            }),
            document[_0x291fbf(0x808)]('resetScript')[_0x291fbf(0x345)]('click', async function() {
                var _0x387591 = _0x291fbf;
                localStorage['clear'](),
                sessionStorage['clear']();
                if (window[_0x387591(0x273)]) {
                    const _0x41e601 = await indexedDB[_0x387591(0x672)]();
                    _0x41e601['forEach'](_0x1aad24 => indexedDB[_0x387591(0x231)](_0x1aad24['name']));
                }
                window[_0x387591(0x370)] && console[_0x387591(0x2f3)](_0x387591(0x2fa));
                document[_0x387591(0x2f1)][_0x387591(0x821)](';')[_0x387591(0x397)](function(_0x381083) {
                    var _0x1b6a74 = _0x387591;
                    document[_0x1b6a74(0x2f1)] = _0x381083[_0x1b6a74(0x707)](/^ +/, '')[_0x1b6a74(0x707)](/=.*/, _0x1b6a74(0x365) + new Date()[_0x1b6a74(0x2da)]() + _0x1b6a74(0x59c));
                });
                _0x387591(0x833)in window && caches[_0x387591(0x6b9)]()[_0x387591(0x298)](function(_0x40e682) {
                    for (let _0x62ed94 of _0x40e682)
                        caches['delete'](_0x62ed94);
                });
                if (_0x387591(0x4a1)in navigator) {
                    const _0x3d4033 = await navigator[_0x387591(0x4a1)][_0x387591(0x205)]();
                    for (let _0x2d25f3 of _0x3d4033) {
                        await _0x2d25f3['unregister']();
                    }
                }
                localStorage[_0x387591(0x78e)](_0x387591(0x4bf)),
                location[_0x387591(0x203)]();
            }),
            soundEnabled = !![],
            $('#toggle-sound')[_0x291fbf(0x2c0)](function() {
                var _0x2d1257 = _0x291fbf;
                soundEnabled = !soundEnabled,
                $(this)['text'](soundEnabled ? _0x2d1257(0x274) : _0x2d1257(0x3cc));
            }),
            $(_0x291fbf(0x217))[_0x291fbf(0x2c0)](function() {
                var _0x4314b2 = _0x291fbf;
                navigator[_0x4314b2(0x6ee)][_0x4314b2(0x527)](zw_userId),
                alert(_0x4314b2(0x76d) + zw_userId);
            }),
            window[_0x291fbf(0x735)] = function(_0x10ff0b) {
                var _0x2c5302 = _0x291fbf;
                let _0x2d88a9 = localStorage[_0x2c5302(0x3b2)](_0x2c5302(0x7b7));
                currentIndex = _0x2d88a9 !== null ? parseInt(_0x2d88a9) : 0x0,
                currentIndex = (currentIndex + _0x10ff0b + backgrounds[_0x2c5302(0x607)]) % backgrounds[_0x2c5302(0x607)],
                updateBackground(currentIndex);
            }
            ,
            window[_0x291fbf(0x57c)] = function(_0x587ee4) {
                var _0xc042c2 = _0x291fbf;
                currentFontIndex = (currentFontIndex + _0x587ee4 + fonts[_0xc042c2(0x607)]) % fonts[_0xc042c2(0x607)],
                updateFont();
            }
            ,
            updateFont();
            const _0x19fffc = [{
                'id': _0x291fbf(0x353),
                'label': _0x291fbf(0x72a),
                'category': _0x291fbf(0x6b6),
                'tooltip': ''
            }, {
                'id': _0x291fbf(0x81b),
                'label': _0x291fbf(0x579),
                'category': _0x291fbf(0x6b6),
                'tooltip': ''
            }, {
                'id': _0x291fbf(0x210),
                'label': _0x291fbf(0x54b),
                'category': 'game',
                'tooltip': ''
            }, {
                'id': _0x291fbf(0x7b8),
                'label': _0x291fbf(0x413),
                'category': _0x291fbf(0x6b6),
                'tooltip': ''
            }, {
                'id': _0x291fbf(0x513),
                'label': 'SHOW\x20TOP\x20HS',
                'category': _0x291fbf(0x6b6),
                'tooltip': _0x291fbf(0x66b)
            }, {
                'id': 'killFeed',
                'label': _0x291fbf(0x73f),
                'category': 'game',
                'tooltip': _0x291fbf(0x3f2)
            }, {
                'id': _0x291fbf(0x213),
                'label': _0x291fbf(0x2c8),
                'category': _0x291fbf(0x1e3),
                'tooltip': ''
            }]
              , _0x1f8489 = [{
                'name': _0x291fbf(0x700),
                'id': _0x291fbf(0x7e6),
                'min': 0.1,
                'max': 0xf,
                'step': 0.1,
                'category': _0x291fbf(0x6b6),
                'tooltip': ''
            }]
              , _0xce4ace = {
                'game': document['querySelector'](_0x291fbf(0x4f5)),
                'teams': document[_0x291fbf(0x1fa)]('.options-list\x20>\x20div[category=\x22teams\x22]'),
                'theme': document[_0x291fbf(0x1fa)](_0x291fbf(0x7c1)),
                'controls': document[_0x291fbf(0x1fa)]('.options-list\x20>\x20div[category=\x22controls\x22]')
            };
            if (isPremiumUser) {
                _0x19fffc[_0x291fbf(0x7b5)]({
                    'id': _0x291fbf(0x7ec),
                    'label': 'INCOGNITO',
                    'category': _0x291fbf(0x6b6),
                    'tooltip': _0x291fbf(0x344)
                }, {
                    'id': _0x291fbf(0x820),
                    'label': 'LASER\x20HS',
                    'category': _0x291fbf(0x6b6),
                    'tooltip': _0x291fbf(0x344)
                }, {
                    'id': _0x291fbf(0x240),
                    'label': _0x291fbf(0x77b),
                    'category': _0x291fbf(0x6b6),
                    'tooltip': _0x291fbf(0x344)
                }, {
                    'id': _0x291fbf(0x290),
                    'label': _0x291fbf(0x204),
                    'category': _0x291fbf(0x6b6),
                    'tooltip': 'Premium\x20Feature'
                }, {
                    'id': _0x291fbf(0x4ca),
                    'label': _0x291fbf(0x803),
                    'category': _0x291fbf(0x6b6),
                    'tooltip': _0x291fbf(0x344)
                }, {
                    'id': _0x291fbf(0x3b6),
                    'label': _0x291fbf(0x79a),
                    'category': _0x291fbf(0x6b6),
                    'tooltip': _0x291fbf(0x344)
                }, {
                    'id': 'visiblePowersAll',
                    'label': _0x291fbf(0x47b),
                    'category': 'game',
                    'tooltip': _0x291fbf(0x344)
                }, {
                    'id': 'hideYouNameInMinimap',
                    'label': _0x291fbf(0x680),
                    'category': _0x291fbf(0x1e3),
                    'tooltip': _0x291fbf(0x344)
                });
                const _0x3b1e44 = _0x291fbf(0x620);
                _0xce4ace['teams']['insertAdjacentHTML'](_0x291fbf(0x507), _0x3b1e44),
                _0x1f8489['push']({
                    'name': _0x291fbf(0x722),
                    'id': _0x291fbf(0x4c5),
                    'min': 0x1,
                    'max': 0x6,
                    'step': 0x1,
                    'category': _0x291fbf(0x6b6),
                    'tooltip': 'Premium\x20Feature'
                }, {
                    'name': _0x291fbf(0x3c9),
                    'id': _0x291fbf(0x262),
                    'min': 1.2,
                    'max': 3.2,
                    'step': 0.2,
                    'category': _0x291fbf(0x6b6),
                    'tooltip': _0x291fbf(0x344)
                }, {
                    'name': _0x291fbf(0x2c2),
                    'id': _0x291fbf(0x702),
                    'min': 0.5,
                    'max': 0x3,
                    'step': 0.5,
                    'category': _0x291fbf(0x6b6),
                    'tooltip': _0x291fbf(0x344)
                }, {
                    'name': _0x291fbf(0x342),
                    'id': 'ComidaSize',
                    'min': 0.5,
                    'max': 0x3,
                    'step': 0.5,
                    'category': 'game',
                    'tooltip': _0x291fbf(0x344)
                }, {
                    'name': _0x291fbf(0x3c0),
                    'id': 'mouseDelay',
                    'min': 0xa,
                    'max': 0x14,
                    'step': 0x1,
                    'category': _0x291fbf(0x6b6),
                    'tooltip': _0x291fbf(0x344)
                }, {
                    'name': 'SMOOTH\x20CAMERA',
                    'id': _0x291fbf(0x7be),
                    'min': 0.1,
                    'max': 0.9,
                    'step': 0.1,
                    'category': _0x291fbf(0x6b6),
                    'tooltip': _0x291fbf(0x344)
                });
            }
            _0x1f8489['forEach'](_0x491beb => {
                var _0x480c8d = _0x291fbf;
                const _0x3f2086 = parseFloat(theoKzObjects[_0x491beb['id']])
                  , _0x2ecbf1 = document[_0x480c8d(0x6fa)](_0x480c8d(0x3b0));
                _0x2ecbf1['className'] = _0x480c8d(0x685),
                _0x2ecbf1[_0x480c8d(0x5f3)] = _0x480c8d(0x1ba) + (_0x491beb[_0x480c8d(0x510)][_0x480c8d(0x65f)]('Premium') ? _0x480c8d(0x569) : '') + '\x22>' + _0x491beb[_0x480c8d(0x62e)] + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22value\x22>' + _0x3f2086 + _0x480c8d(0x7f5) + (_0x3f2086 - _0x491beb[_0x480c8d(0x794)]) / (_0x491beb['max'] - _0x491beb[_0x480c8d(0x794)]) * 0x64 + '%;\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22' + _0x491beb['id'] + _0x480c8d(0x3b3) + _0x491beb[_0x480c8d(0x794)] + _0x480c8d(0x657) + _0x491beb[_0x480c8d(0x5c6)] + _0x480c8d(0x4f2) + _0x491beb[_0x480c8d(0x4c0)] + _0x480c8d(0x7df) + _0x3f2086 + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20';
                const _0x1c51a7 = _0x2ecbf1['querySelector'](_0x480c8d(0x216))
                  , _0x59a5fe = _0x2ecbf1[_0x480c8d(0x1fa)](_0x480c8d(0x74d))
                  , _0x5007f1 = _0x2ecbf1[_0x480c8d(0x1fa)]('.fill');
                _0x1c51a7[_0x480c8d(0x345)](_0x480c8d(0x216), () => {
                    var _0x9bfc34 = _0x480c8d;
                    _0x59a5fe[_0x9bfc34(0x6ed)] = _0x1c51a7[_0x9bfc34(0x1c0)],
                    _0x5007f1[_0x9bfc34(0x1b5)][_0x9bfc34(0x546)] = (_0x1c51a7[_0x9bfc34(0x1c0)] - _0x491beb[_0x9bfc34(0x794)]) / (_0x491beb[_0x9bfc34(0x5c6)] - _0x491beb[_0x9bfc34(0x794)]) * 0x64 + '%',
                    theoKzObjects[_0x491beb['id']] = _0x1c51a7[_0x9bfc34(0x1c0)],
                    localStorage[_0x9bfc34(0x591)](_0x491beb['id'], _0x1c51a7['value']),
                    _0x491beb['id'] === _0x9bfc34(0x5dc) && anApp['o'][_0x9bfc34(0x7bf)](parseInt(_0x1c51a7['value']));
                }
                ),
                _0xce4ace[_0x491beb[_0x480c8d(0x7e5)]]['appendChild'](_0x2ecbf1);
            }
            ),
            _0x19fffc[_0x291fbf(0x397)](_0xa69520 => {
                var _0x100d9c = _0x291fbf;
                const _0x2f7cdc = localStorage[_0x100d9c(0x3b2)](_0xa69520['id']) === _0x100d9c(0x544)
                  , _0x36662d = _0x100d9c(0x3a7) + (_0x2f7cdc ? 'on' : '') + _0x100d9c(0x1ed) + _0xa69520['id'] + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22name\x22\x20style=\x22' + (_0xa69520[_0x100d9c(0x510)][_0x100d9c(0x65f)](_0x100d9c(0x7f4)) ? _0x100d9c(0x569) : '') + '\x22>' + _0xa69520['label'] + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22box\x22><div\x20class=\x22ball\x22></div></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0xa69520[_0x100d9c(0x510)] ? _0x100d9c(0x394) + _0xa69520[_0x100d9c(0x510)] + _0x100d9c(0x490) : '') + _0x100d9c(0x5a5);
                _0xce4ace[_0xa69520[_0x100d9c(0x7e5)]][_0x100d9c(0x1ae)](_0x100d9c(0x507), _0x36662d);
            }
            ),
            document['querySelectorAll'](_0x291fbf(0x3fc))[_0x291fbf(0x397)](_0x541c0f => {
                var _0x4b76a8 = _0x291fbf;
                _0x541c0f[_0x4b76a8(0x345)](_0x4b76a8(0x2c0), function(_0x5608a4) {
                    var _0x1120b0 = _0x4b76a8;
                    _0x5608a4[_0x1120b0(0x537)]();
                    const _0x17eb4d = this['parentElement']
                      , _0x42fa59 = _0x17eb4d[_0x1120b0(0x31a)](_0x1120b0(0x5a8))
                      , _0x7b236a = !_0x17eb4d[_0x1120b0(0x5fb)]['contains']('on');
                    _0x17eb4d[_0x1120b0(0x5fb)][_0x1120b0(0x35e)]('on', _0x7b236a),
                    theoKzObjects[_0x42fa59] = _0x7b236a,
                    localStorage[_0x1120b0(0x591)](_0x42fa59, _0x7b236a);
                    const _0xb9a6aa = _0x17eb4d[_0x1120b0(0x1fa)](_0x1120b0(0x22f));
                    if (_0xb9a6aa)
                        _0xb9a6aa[_0x1120b0(0x1b5)][_0x1120b0(0x5be)] = _0x7b236a ? _0x1120b0(0x787) : _0x1120b0(0x5e1);
                    console[_0x1120b0(0x39b)](_0x42fa59 + _0x1120b0(0x751), _0x7b236a);
                });
            }
            );
            var _0x4c96bc = $(_0x291fbf(0x7d9));
            addMinicolor(_0x4c96bc[0x1], 'teamColorGroup', 'YOUR\x20COLOR\x20IN\x20MAP', _0x291fbf(0x7fe), theoObjects['teamColor']),
            $(_0x291fbf(0x6de))['on']('input', function() {
                var _0x4f68c7 = _0x291fbf;
                let _0x2bdfad = $(this)[_0x4f68c7(0x382)]();
                $(_0x4f68c7(0x7de))[_0x4f68c7(0x519)](_0x4f68c7(0x1fd), _0x2bdfad),
                localStorage['setItem'](_0x4f68c7(0x7fe), zwormData[_0x4f68c7(0x7fe)]),
                zwormData['teamColor'] = '0x' + _0x2bdfad[_0x4f68c7(0x392)](0x1),
                console['log'](zwormData[_0x4f68c7(0x7fe)]);
            });
            let _0x35c0a4 = localStorage[_0x291fbf(0x3b2)](_0x291fbf(0x7fe));
            _0x35c0a4 && (zwormData[_0x291fbf(0x7fe)] = _0x35c0a4,
            $('#preview_teamColor')[_0x291fbf(0x519)]('background-color', '#' + _0x35c0a4[_0x291fbf(0x392)](0x2)),
            $('#teamColor')[_0x291fbf(0x382)]('#' + _0x35c0a4[_0x291fbf(0x392)](0x2)));
            var _0x281972 = '<div\x20id=\x22wormtr-settings-view\x22\x20class=\x22base-popup-view\x22\x20style=\x22opacity:\x201;\x22>' + _0x291fbf(0x7d3) + _0x291fbf(0x2bf) + _0x291fbf(0x730) + '<span\x20id=\x22settings-icon\x22\x20class=\x22material-icons\x22\x20data-menu=\x22settings-menu\x22>settings</span>' + _0x291fbf(0x2cf) + _0x291fbf(0x6cb) + _0x291fbf(0x7ba) + _0x291fbf(0x347) + _0x291fbf(0x300) + '<div\x20id=\x22settings-menu\x22\x20class=\x22menu\x22>Ajustes\x20generales</div>' + _0x291fbf(0x652) + '<div\x20id=\x22help-menu\x22\x20class=\x22menu\x22>Ayuda\x20y\x20soporte</div>' + _0x291fbf(0x671) + '<div\x20class=\x22settings-line\x22>' + _0x291fbf(0x435) + _0x291fbf(0x5a2) + lenguaje[idiomaActual][_0x291fbf(0x27e)] + '</button>' + '</div>' + _0x291fbf(0x632) + _0x291fbf(0x710) + _0x291fbf(0x6d3) + '<label\x20for=\x22toggleTop8\x22>Show\x20Top\x208</label>' + _0x291fbf(0x765) + '</div>' + '<div\x20class=\x22settings-line\x22>' + _0x291fbf(0x6e4) + '<label\x20for=\x22toggleKillFeed\x22>Show\x20Kill\x20Feed</label>' + '<span\x20class=\x22tooltip\x22\x20id=\x22tooltipKillFeed\x22\x20style=\x22display:\x20none;\x22>If\x20you\x20enable\x20this\x20option,\x20you\x20will\x20see\x20the\x20list\x20of\x20kills\x20in\x20real\x20time.</span>' + '</div>' + _0x291fbf(0x632) + _0x291fbf(0x710) + _0x291fbf(0x44f) + _0x291fbf(0x6bf) + _0x291fbf(0x7ba) + '<div\x20class=\x22popup-sep\x22></div>' + _0x291fbf(0x710) + _0x291fbf(0x553) + _0x291fbf(0x7dd) + _0x291fbf(0x7ba) + _0x291fbf(0x632) + _0x291fbf(0x710) + '<span\x20class=\x22settings-label\x22>' + lenguaje[idiomaActual][_0x291fbf(0x3f0)] + '</span>' + _0x291fbf(0x479) + _0x291fbf(0x35b) + lenguaje[idiomaActual]['fondo0'] + '</option>' + _0x291fbf(0x6ec) + lenguaje[idiomaActual][_0x291fbf(0x52a)] + '</option>' + _0x291fbf(0x323) + lenguaje[idiomaActual][_0x291fbf(0x6bd)] + '</option>' + _0x291fbf(0x60f) + lenguaje[idiomaActual][_0x291fbf(0x752)] + _0x291fbf(0x41a) + _0x291fbf(0x7a4) + lenguaje[idiomaActual][_0x291fbf(0x373)] + _0x291fbf(0x41a) + _0x291fbf(0x845) + _0x291fbf(0x52e) + _0x291fbf(0x41a) + '<option\x20value=\x226\x22>' + 'Sky\x20Blue' + '</option>' + _0x291fbf(0x7db) + _0x291fbf(0x742) + _0x291fbf(0x41a) + '<option\x20value=\x228\x22>' + 'Sky\x20Violet' + _0x291fbf(0x41a) + _0x291fbf(0x4d6) + _0x291fbf(0x611) + '</option>' + _0x291fbf(0x773) + _0x291fbf(0x378) + _0x291fbf(0x41a) + '<option\x20value=\x2211\x22>' + _0x291fbf(0x374) + '</option>' + _0x291fbf(0x4f0) + _0x291fbf(0x56a) + _0x291fbf(0x41a) + _0x291fbf(0x315) + _0x291fbf(0x306) + _0x291fbf(0x41a) + _0x291fbf(0x385) + _0x291fbf(0x380) + _0x291fbf(0x41a) + _0x291fbf(0x68e) + _0x291fbf(0x7ba) + _0x291fbf(0x632) + _0x291fbf(0x710) + _0x291fbf(0x4e1) + _0x291fbf(0x75e) + '<option\x20value=\x221\x22>1</option>' + '<option\x20value=\x222\x22>2</option>' + _0x291fbf(0x366) + _0x291fbf(0x80a) + _0x291fbf(0x5bb) + _0x291fbf(0x71a) + _0x291fbf(0x723) + _0x291fbf(0x42c) + _0x291fbf(0x502) + _0x291fbf(0x3df) + _0x291fbf(0x68e) + _0x291fbf(0x7ba) + _0x291fbf(0x632) + _0x291fbf(0x710) + _0x291fbf(0x4c1) + lenguaje[idiomaActual][_0x291fbf(0x588)] + _0x291fbf(0x490) + _0x291fbf(0x459) + _0x291fbf(0x7ba) + _0x291fbf(0x632) + _0x291fbf(0x33f) + _0x291fbf(0x7ba) + _0x291fbf(0x7ba);
            let _0x90fc7e = localStorage['getItem']('top8') === 'true' ? !![] : localStorage[_0x291fbf(0x3b2)](_0x291fbf(0x513)) === _0x291fbf(0x38a) ? ![] : theoKzObjects['top8']
              , _0x463655 = localStorage[_0x291fbf(0x3b2)]('killFeed') === _0x291fbf(0x544) ? !![] : localStorage['getItem']('killFeed') === _0x291fbf(0x38a) ? ![] : theoKzObjects[_0x291fbf(0x1bf)];
            $(_0x291fbf(0x324))['prop'](_0x291fbf(0x377), _0x90fc7e),
            $('#toggleKillFeed')[_0x291fbf(0x67d)](_0x291fbf(0x377), _0x463655),
            $(_0x291fbf(0x2bc))[_0x291fbf(0x35e)](_0x90fc7e),
            $('#killFeed')[_0x291fbf(0x35e)](_0x463655);
            (localStorage[_0x291fbf(0x3b2)](_0x291fbf(0x513)) === 'true' || localStorage[_0x291fbf(0x3b2)]('top8') === 'false') && (theoKzObjects[_0x291fbf(0x513)] = _0x90fc7e,
            localStorage[_0x291fbf(0x591)](_0x291fbf(0x513), _0x90fc7e));
            (localStorage['getItem'](_0x291fbf(0x1bf)) === _0x291fbf(0x544) || localStorage[_0x291fbf(0x3b2)]('killFeed') === _0x291fbf(0x38a)) && (theoKzObjects[_0x291fbf(0x1bf)] = _0x463655,
            localStorage[_0x291fbf(0x591)](_0x291fbf(0x1bf), _0x463655));
            $(_0x291fbf(0x324))['on']('change', function() {
                var _0x2c5f78 = _0x291fbf;
                theoKzObjects[_0x2c5f78(0x513)] = this['checked'],
                $(_0x2c5f78(0x2bc))['toggle'](this[_0x2c5f78(0x377)]),
                localStorage[_0x2c5f78(0x591)]('top8', theoKzObjects[_0x2c5f78(0x513)]);
            }),
            $(_0x291fbf(0x57f))['on'](_0x291fbf(0x746), function() {
                var _0x5b8b84 = _0x291fbf;
                theoKzObjects[_0x5b8b84(0x1bf)] = this[_0x5b8b84(0x377)],
                $('#killFeed')[_0x5b8b84(0x35e)](this['checked']),
                localStorage[_0x5b8b84(0x591)](_0x5b8b84(0x1bf), theoKzObjects[_0x5b8b84(0x1bf)]);
            }),
            $(_0x291fbf(0x324))['hover'](function() {
                var _0x5b3d73 = _0x291fbf;
                $(_0x5b3d73(0x313))[_0x5b3d73(0x2c6)]();
            }, function() {
                var _0x377300 = _0x291fbf;
                $(_0x377300(0x313))[_0x377300(0x2d4)]();
            }),
            $(_0x291fbf(0x57f))[_0x291fbf(0x335)](function() {
                var _0x70e78f = _0x291fbf;
                $(_0x70e78f(0x7ca))[_0x70e78f(0x2c6)]();
            }, function() {
                var _0x31d32f = _0x291fbf;
                $(_0x31d32f(0x7ca))[_0x31d32f(0x2d4)]();
            }),
            $(_0x291fbf(0x4ac))['on'](_0x291fbf(0x216), function() {
                var _0x208117 = _0x291fbf;
                zwormData[_0x208117(0x7a2)] = $(this)[_0x208117(0x382)](),
                localStorage['setItem']('teamCode', zwormData['teamCode']),
                console[_0x208117(0x39b)]('Team\x20Code\x20updated:', zwormData[_0x208117(0x7a2)]);
            });
            let _0x18a8f8 = localStorage[_0x291fbf(0x3b2)](_0x291fbf(0x7a2));
            _0x18a8f8 && (zwormData[_0x291fbf(0x7a2)] = _0x18a8f8,
            $(_0x291fbf(0x4ac))[_0x291fbf(0x382)](_0x18a8f8));
            zw_selectedbackground = 0x0,
            zw_toplist = 0xa;
            var _0x1d1205 = $('#arkaplan')
              , _0x5cf9fc = $('#zwtop')
              , _0xe2978e = localStorage[_0x291fbf(0x3b2)](_0x291fbf(0x25d));
            if (_0xe2978e) {
                var _0x7bd042 = parseInt(_0xe2978e);
                _0x1d1205[_0x291fbf(0x382)](_0x7bd042),
                zw_selectedbackground = _0x7bd042;
            }
            const _0x1fb49a = localStorage['getItem'](_0x291fbf(0x4af));
            if (_0x1fb49a) {
                const _0x148b50 = parseInt(_0x1fb49a);
                zw_toplist = _0x148b50;
            }
            let _0x39d898 = _wrmxt[_0x291fbf(0x55c)](theoKzObjects[_0x291fbf(0x82b)]);
            if (_0x39d898)
                $(_0x291fbf(0x533))[_0x291fbf(0x382)](theoKzObjects[_0x291fbf(0x82b)]);
            else {
                let _0x217c8e = $(_0x291fbf(0x533))['val']();
                _0x39d898 = _wrmxt['isNumberValid'](_0x217c8e),
                theoKzObjects['idReplaceSkin'] = _0x39d898 ? _0x217c8e : 0x23;
            }
            ;return _0x5cf9fc[_0x291fbf(0x382)](zw_toplist),
            _0x1d1205[_0x291fbf(0x746)](function(_0x24e563) {
                var _0x4ce201 = _0x291fbf;
                zw_selectedbackground = this[_0x4ce201(0x1c0)];
                var _0x588f0f = obtenerImagenPorSeleccion(zw_selectedbackground);
                _0x588f0f && (anApp['q']['Cf'] = new PIXI[(_0x4ce201(0x52c))](anApp['q'][_0x4ce201(0x68a)](_0x588f0f))),
                localStorage[_0x4ce201(0x591)](_0x4ce201(0x25d), this[_0x4ce201(0x1c0)][_0x4ce201(0x4b3)]());
            }),
            _0x5cf9fc['change'](function(_0x32705c) {
                var _0xe3653a = _0x291fbf;
                zw_toplist = this['value'],
                localStorage['setItem'](_0xe3653a(0x4af), this[_0xe3653a(0x1c0)][_0xe3653a(0x4b3)]());
            }),
            $(_0x291fbf(0x786))[_0x291fbf(0x2c0)](function() {
                navigator['clipboard']['writeText'](zw_userId);
            }),
            (_0x4386cf[_0x291fbf(0x792)]['a'] = function() {
                var _0x4f4279 = _0x291fbf;
                if (_0x4386cf[_0x4f4279(0x4de)][_0x4f4279(0x792)]['a'][_0x4f4279(0x5b3)](this),
                !_0x4386cf['Ek']) {
                    _0x4386cf['Ek'] = !0x0;
                    var _0x426595 = _0x3392fc();
                    _0x426595['u']['Pi'](function() {
                        _0x426595['u']['P']() ? _0x46fd08['html'](_0x426595['u']['zi']()) : _0x46fd08['html']('0');
                    });
                }
            }
            ,
            _0x4386cf['Fk'] = $(_0x291fbf(0x5ad)),
            _0x4386cf['Gk'] = $('#leaders-view'),
            _0x4386cf['Hk'] = $(_0x291fbf(0x2ae)),
            _0x4386cf['Ik'] = $('#settings-view'),
            _0x4386cf['Jk'] = $(_0x291fbf(0x480)),
            _0x4386cf['Kk'] = $('#skins-view'),
            _0x4386cf['Lk'] = $(_0x291fbf(0x375)),
            _0x4386cf[_0x291fbf(0x638)] = $('#wormtr-settings-view'),
            _0x4386cf['Mk'] = $(_0x291fbf(0x82a)),
            _0x4386cf['Nk'] = $(_0x291fbf(0x3f1)),
            _0x4386cf['Ok'] = $(_0x291fbf(0x1f1)),
            _0x4386cf['Pk'] = $(_0x291fbf(0x796)),
            _0x4386cf[_0x291fbf(0x792)]['ii'] = function() {
                var _0x463118 = _0x291fbf;
                _0x501845['fk'][_0x463118(0x619)](),
                _0x501845['fk'][_0x463118(0x2d4)](0xc8),
                _0x501845['gk'][_0x463118(0x619)](),
                _0x501845['gk'][_0x463118(0x2d4)](0xc8),
                _0x501845['hk'][_0x463118(0x619)](),
                _0x501845['hk'][_0x463118(0x2d4)](0xc8),
                _0x501845['ik'][_0x463118(0x619)](),
                _0x501845['ik'][_0x463118(0x2c6)](0xc8),
                _0x501845['jk'][_0x463118(0x619)](),
                _0x501845['jk'][_0x463118(0x2d4)](0xc8),
                _0x501845['kk']['stop'](),
                _0x501845['kk'][_0x463118(0x2d4)](0xc8),
                _0x501845['nk'][_0x463118(0x619)](),
                _0x501845['nk'][_0x463118(0x2c6)](0xc8),
                _0x501845['ok'][_0x463118(0x619)](),
                _0x501845['ok']['fadeIn'](0xc8),
                _0x4ab1f6['html'](this['ad']),
                _0x28cff0['toggle'](this['Dk']),
                this['Qk'](),
                this['Rk']();
            }
            ,
            _0x4386cf[_0x291fbf(0x792)]['Rk'] = function() {}
            ,
            _0x4386cf[_0x291fbf(0x792)]['Sk'] = function() {
                var _0x5d834a = _0x291fbf;
                _0x3987d2['Pk'][_0x5d834a(0x619)](),
                _0x3987d2['Pk'][_0x5d834a(0x2c6)](0x12c);
            }
            ,
            _0x4386cf[_0x291fbf(0x792)]['Qk'] = function() {
                var _0x5d616 = _0x291fbf;
                _0x3987d2['Pk']['stop'](),
                _0x3987d2['Pk'][_0x5d616(0x2d4)](0x12c);
            }
            ,
            _0x4386cf);
        }())
          , _0x300010 = (function() {
            var _0x1f6afa = _0x5b9465
              , _0xe7ebe5 = $(_0x1f6afa(0x6bc))
              , _0x3a628c = $(_0x1f6afa(0x3c1))
              , _0x2548cd = $(_0x1f6afa(0x499))
              , _0x3d7d3a = $('#store-buy-coins_7000')
              , _0x42fb3f = $(_0x1f6afa(0x807))
              , _0x9a3f57 = $(_0x1f6afa(0x6d8))
              , _0x636b85 = _0x22ee20(_0x3987d2, function() {
                var _0x56e1d9 = _0x1f6afa;
                _0x3987d2[_0x56e1d9(0x5b3)](this, _0x2ca325(_0x56e1d9(0x7f7)), !0x1);
                var _0x39d0ec = _0x3392fc()
                  , _0x336c43 = this;
                _0xe7ebe5[_0x56e1d9(0x2c0)](function() {
                    var _0x2c3117 = _0x56e1d9;
                    _0x39d0ec['r']['Cd'](),
                    _0x336c43['Tk'](_0x2c3117(0x62a));
                }),
                _0x3a628c['click'](function() {
                    var _0x110a4c = _0x56e1d9;
                    _0x39d0ec['r']['Cd'](),
                    _0x336c43['Tk'](_0x110a4c(0x5e2));
                }),
                _0x2548cd[_0x56e1d9(0x2c0)](function() {
                    _0x39d0ec['r']['Cd'](),
                    _0x336c43['Tk']('coins_16000');
                }),
                _0x3d7d3a[_0x56e1d9(0x2c0)](function() {
                    _0x39d0ec['r']['Cd'](),
                    _0x336c43['Tk']('coins_7000');
                }),
                _0x42fb3f[_0x56e1d9(0x2c0)](function() {
                    var _0x2c96b0 = _0x56e1d9;
                    _0x39d0ec['r']['Cd'](),
                    _0x336c43['Tk'](_0x2c96b0(0x3f9));
                }),
                _0x9a3f57['click'](function() {
                    var _0x20ed5a = _0x56e1d9;
                    _0x39d0ec['r']['Cd'](),
                    _0x336c43['Tk'](_0x20ed5a(0x3bc));
                });
            });
            return _0x636b85[_0x1f6afa(0x792)]['a'] = function() {
                var _0xca84b5 = _0x1f6afa;
                _0x636b85[_0xca84b5(0x4de)][_0xca84b5(0x792)]['a'][_0xca84b5(0x5b3)](this);
            }
            ,
            _0x636b85[_0x1f6afa(0x792)]['Rk'] = function() {
                var _0xd34bb2 = _0x1f6afa;
                _0x3987d2['Fk'][_0xd34bb2(0x619)](),
                _0x3987d2['Fk']['fadeIn'](0xc8),
                _0x3987d2['Gk'][_0xd34bb2(0x619)](),
                _0x3987d2['Gk'][_0xd34bb2(0x2d4)](0x32),
                _0x3987d2['Hk'][_0xd34bb2(0x619)](),
                _0x3987d2['Hk'][_0xd34bb2(0x2d4)](0x32),
                _0x3987d2['Jk'][_0xd34bb2(0x619)](),
                _0x3987d2['Jk'][_0xd34bb2(0x2d4)](0x32),
                _0x3987d2['Ik'][_0xd34bb2(0x619)](),
                _0x3987d2['Ik'][_0xd34bb2(0x2d4)](0x32),
                _0x3987d2['Kk'][_0xd34bb2(0x619)](),
                _0x3987d2['Kk'][_0xd34bb2(0x2d4)](0x32),
                _0x3987d2['Lk'][_0xd34bb2(0x619)](),
                _0x3987d2['Lk']['fadeOut'](0x32),
                _0x3987d2['Mk'][_0xd34bb2(0x619)](),
                _0x3987d2['Mk']['fadeOut'](0x32),
                _0x3987d2[_0xd34bb2(0x638)][_0xd34bb2(0x619)](),
                _0x3987d2[_0xd34bb2(0x638)][_0xd34bb2(0x2d4)](0x32),
                _0x3987d2['Nk'][_0xd34bb2(0x619)](),
                _0x3987d2['Nk']['fadeOut'](0x32),
                _0x3987d2['Ok']['stop'](),
                _0x3987d2['Ok'][_0xd34bb2(0x2d4)](0x32);
            }
            ,
            _0x636b85['prototype']['ji'] = function() {
                _0x3392fc()['r']['Dd']();
            }
            ,
            _0x636b85[_0x1f6afa(0x792)]['Tk'] = function(_0x581fd8) {}
            ,
            _0x636b85;
        }())
          , _0x231071 = (function() {
            var _0x17b6d4 = _0x5b9465
              , _0xd70569 = $(_0x17b6d4(0x414))
              , _0x740b1 = $(_0x17b6d4(0x761))
              , _0x54c9d0 = $(_0x17b6d4(0x73c))
              , _0x1deb30 = $(_0x17b6d4(0x816))
              , _0xf48613 = _0x22ee20(_0x3987d2, function() {
                var _0x580a8b = _0x17b6d4;
                _0x3987d2[_0x580a8b(0x5b3)](this, _0x2ca325(_0x580a8b(0x361)), !0x0);
                var _0x59bc30 = _0x3392fc()
                  , _0x10a820 = this;
                this['Uk'] = {},
                this['Vk'] = {
                    'Wk': {
                        'Xk': _0x740b1,
                        'Yk': _0x580a8b(0x3a3)
                    },
                    'Zk': {
                        'Xk': _0x54c9d0,
                        'Yk': _0x580a8b(0x1c6)
                    },
                    '$k': {
                        'Xk': _0x1deb30,
                        'Yk': 'byKillsAndHeadShots'
                    }
                },
                _0x740b1[_0x580a8b(0x2c0)](function() {
                    _0x59bc30['r']['Cd'](),
                    _0x10a820['_k'](_0x10a820['Vk']['Wk']);
                }),
                _0x54c9d0[_0x580a8b(0x2c0)](function() {
                    _0x59bc30['r']['Cd'](),
                    _0x10a820['_k'](_0x10a820['Vk']['Zk']);
                }),
                _0x1deb30[_0x580a8b(0x2c0)](function() {
                    _0x59bc30['r']['Cd'](),
                    _0x10a820['_k'](_0x10a820['Vk']['$k']);
                });
            });
            return _0xf48613[_0x17b6d4(0x792)]['a'] = function() {
                var _0x35bb6c = _0x17b6d4;
                _0xf48613[_0x35bb6c(0x4de)]['prototype']['a']['call'](this);
            }
            ,
            _0xf48613[_0x17b6d4(0x792)]['Rk'] = function() {
                var _0x8ba3ff = _0x17b6d4;
                _0x3987d2['Fk'][_0x8ba3ff(0x619)](),
                _0x3987d2['Fk']['fadeOut'](0x32),
                _0x3987d2['Gk']['stop'](),
                _0x3987d2['Gk'][_0x8ba3ff(0x2c6)](0xc8),
                _0x3987d2['Hk']['stop'](),
                _0x3987d2['Hk'][_0x8ba3ff(0x2d4)](0x32),
                _0x3987d2['Jk'][_0x8ba3ff(0x619)](),
                _0x3987d2['Jk'][_0x8ba3ff(0x2d4)](0x32),
                _0x3987d2['Ik']['stop'](),
                _0x3987d2['Ik']['fadeOut'](0x32),
                _0x3987d2['Kk']['stop'](),
                _0x3987d2['Kk']['fadeOut'](0x32),
                _0x3987d2['Lk'][_0x8ba3ff(0x619)](),
                _0x3987d2['Lk'][_0x8ba3ff(0x2d4)](0x32),
                _0x3987d2['Mk']['stop'](),
                _0x3987d2['Mk'][_0x8ba3ff(0x2d4)](0x32),
                _0x3987d2[_0x8ba3ff(0x638)]['stop'](),
                _0x3987d2[_0x8ba3ff(0x638)]['fadeOut'](0x32),
                _0x3987d2['Nk'][_0x8ba3ff(0x619)](),
                _0x3987d2['Nk'][_0x8ba3ff(0x2d4)](0x32),
                _0x3987d2['Ok']['stop'](),
                _0x3987d2['Ok']['fadeOut'](0x32);
            }
            ,
            _0xf48613[_0x17b6d4(0x792)]['ji'] = function() {
                var _0x777757 = _0x17b6d4;
                _0x3392fc()['r']['Dd']();
                var _0x3aefc7 = this;
                this['Sk'](),
                $[_0x777757(0x338)](_0x7fa75 + _0x777757(0x43a), function(_0x43129e) {
                    _0x3aefc7['Uk'] = _0x43129e,
                    _0x3aefc7['_k'](null != _0x3aefc7['al'] ? _0x3aefc7['al'] : _0x3aefc7['Vk']['Wk']),
                    _0x3aefc7['Qk']();
                })[_0x777757(0x4a5)](function() {
                    _0x3aefc7['Qk']();
                });
            }
            ,
            _0xf48613[_0x17b6d4(0x792)]['_k'] = function(_0x1ed4df) {
                var _0x2db099 = _0x17b6d4;
                this['al'] = _0x1ed4df;
                for (var _0xecc854 in this['Vk'])
                    if (this['Vk'][_0x2db099(0x5f5)](_0xecc854)) {
                        var _0x207f21 = this['Vk'][_0xecc854];
                        _0x207f21['Xk']['removeClass'](_0x2db099(0x2b9));
                    }
                this['al']['Xk'][_0x2db099(0x2bd)](_0x2db099(0x2b9));
                for (var _0xcfe3c7 = this['Uk'][this['al']['Yk']], _0x27ed08 = '', _0x442106 = 0x0; _0x442106 < _0xcfe3c7[_0x2db099(0x607)]; _0x442106++) {
                    var _0xae17e4 = _0xcfe3c7[_0x442106];
                    _0x27ed08 += _0x2db099(0x276) + (_0x442106 + 0x1) + _0x2db099(0x1ef) + _0xae17e4['avatarUrl'] + '\x22/></span><span>' + _0xae17e4[_0x2db099(0x437)] + _0x2db099(0x7bc) + _0xae17e4[_0x2db099(0x7f8)] + _0x2db099(0x7bc) + _0xae17e4[_0x2db099(0x5b0)] + '</span><span>' + _0xae17e4['headShots'] + _0x2db099(0x235) + _0xae17e4[_0x2db099(0x830)] + _0x2db099(0x363);
                }
                _0xd70569[_0x2db099(0x38d)](),
                _0xd70569[_0x2db099(0x6b3)](_0x27ed08);
            }
            ,
            _0xf48613;
        }())
          , _0x7681ca = (function() {
            var _0x2a82cf = _0x5b9465
              , _0x41a74a = $(_0x2a82cf(0x230))
              , _0x54ff02 = $(_0x2a82cf(0x2db))
              , _0xa28ceb = _0x22ee20(_0x3987d2, function() {
                var _0x57e230 = _0x2a82cf;
                _0x3987d2[_0x57e230(0x5b3)](this, _0x2ca325(_0x57e230(0x42f)), !0x1);
                var _0x211567 = _0x3392fc()
                  , _0x94da5f = this;
                _0x41a74a[_0x57e230(0x2c0)](function() {
                    _0x211567['r']['Cd'](),
                    _0x94da5f['Sk'](),
                    _0x211567['u']['Qi'](function() {
                        _0x94da5f['Qk']();
                    }),
                    setTimeout(function() {
                        _0x94da5f['Qk']();
                    }, 0x2710),
                    _0x211567['u']['Zi']();
                }),
                _0x54ff02[_0x57e230(0x2c0)](function() {
                    _0x211567['r']['Cd'](),
                    _0x94da5f['Sk'](),
                    _0x211567['u']['Qi'](function() {
                        _0x94da5f['Qk']();
                    }),
                    setTimeout(function() {
                        _0x94da5f['Qk']();
                    }, 0x2710),
                    _0x211567['u']['Vi']();
                });
            });
            return _0xa28ceb[_0x2a82cf(0x792)]['a'] = function() {
                var _0x555783 = _0x2a82cf;
                _0xa28ceb[_0x555783(0x4de)]['prototype']['a']['call'](this);
            }
            ,
            _0xa28ceb['prototype']['Rk'] = function() {
                var _0x2b2e3b = _0x2a82cf;
                _0x3987d2['Fk'][_0x2b2e3b(0x619)](),
                _0x3987d2['Fk'][_0x2b2e3b(0x2d4)](0x32),
                _0x3987d2['Gk']['stop'](),
                _0x3987d2['Gk'][_0x2b2e3b(0x2d4)](0x32),
                _0x3987d2['Hk'][_0x2b2e3b(0x619)](),
                _0x3987d2['Hk'][_0x2b2e3b(0x2d4)](0x32),
                _0x3987d2['Jk']['stop'](),
                _0x3987d2['Jk']['fadeIn'](0xc8),
                _0x3987d2['Ik'][_0x2b2e3b(0x619)](),
                _0x3987d2['Ik'][_0x2b2e3b(0x2d4)](0x32),
                _0x3987d2['Kk'][_0x2b2e3b(0x619)](),
                _0x3987d2['Kk'][_0x2b2e3b(0x2d4)](0x32),
                _0x3987d2['Lk'][_0x2b2e3b(0x619)](),
                _0x3987d2['Lk']['fadeOut'](0x32),
                _0x3987d2['Mk'][_0x2b2e3b(0x619)](),
                _0x3987d2['Mk'][_0x2b2e3b(0x2d4)](0x32),
                _0x3987d2[_0x2b2e3b(0x638)]['stop'](),
                _0x3987d2[_0x2b2e3b(0x638)][_0x2b2e3b(0x2d4)](0x32),
                _0x3987d2['Nk']['stop'](),
                _0x3987d2['Nk'][_0x2b2e3b(0x2d4)](0x32),
                _0x3987d2['Ok'][_0x2b2e3b(0x619)](),
                _0x3987d2['Ok']['fadeOut'](0x32);
            }
            ,
            _0xa28ceb['prototype']['ji'] = function() {
                _0x3392fc()['r']['Dd']();
            }
            ,
            _0xa28ceb;
        }())
          , _0xdf162f = (function() {
            var _0x47a05c = _0x5b9465
              , _0x2d2e21 = $(_0x47a05c(0x79c))
              , _0x2be406 = $(_0x47a05c(0x46b))
              , _0x48a55a = $(_0x47a05c(0x682))
              , _0x57d28d = $(_0x47a05c(0x37d))
              , _0x261ee3 = $('#profile-level')
              , _0x495970 = $('#profile-stat-highScore')
              , _0x3a6e72 = $(_0x47a05c(0x770))
              , _0xd1bfa6 = $(_0x47a05c(0x5f1))
              , _0x12903d = $(_0x47a05c(0x224))
              , _0x5d6fc7 = $(_0x47a05c(0x530))
              , _0x44a931 = $(_0x47a05c(0x6ff))
              , _0x1ff050 = $(_0x47a05c(0x5b4))
              , _0x1d3509 = _0x22ee20(_0x3987d2, function() {
                var _0x417b71 = _0x47a05c;
                _0x3987d2[_0x417b71(0x5b3)](this, _0x2ca325('index.game.popup.menu.profile.tab'), !0x0);
            });
            return _0x1d3509[_0x47a05c(0x792)]['a'] = function() {
                var _0x3bbbba = _0x47a05c;
                _0x1d3509[_0x3bbbba(0x4de)][_0x3bbbba(0x792)]['a'][_0x3bbbba(0x5b3)](this);
            }
            ,
            _0x1d3509[_0x47a05c(0x792)]['Rk'] = function() {
                var _0x567595 = _0x47a05c;
                _0x3987d2['Fk'][_0x567595(0x619)](),
                _0x3987d2['Fk']['fadeOut'](0x32),
                _0x3987d2['Gk']['stop'](),
                _0x3987d2['Gk']['fadeOut'](0x32),
                _0x3987d2['Hk'][_0x567595(0x619)](),
                _0x3987d2['Hk']['fadeIn'](0xc8),
                _0x3987d2['Jk'][_0x567595(0x619)](),
                _0x3987d2['Jk'][_0x567595(0x2d4)](0x32),
                _0x3987d2['Ik']['stop'](),
                _0x3987d2['Ik'][_0x567595(0x2d4)](0x32),
                _0x3987d2['Kk'][_0x567595(0x619)](),
                _0x3987d2['Kk'][_0x567595(0x2d4)](0x32),
                _0x3987d2['Lk']['stop'](),
                _0x3987d2['Lk']['fadeOut'](0x32),
                _0x3987d2['Mk'][_0x567595(0x619)](),
                _0x3987d2['Mk'][_0x567595(0x2d4)](0x32),
                _0x3987d2[_0x567595(0x638)]['stop'](),
                _0x3987d2[_0x567595(0x638)][_0x567595(0x2d4)](0x32),
                _0x3987d2['Nk'][_0x567595(0x619)](),
                _0x3987d2['Nk'][_0x567595(0x2d4)](0x32),
                _0x3987d2['Ok']['stop'](),
                _0x3987d2['Ok'][_0x567595(0x2d4)](0x32);
            }
            ,
            _0x1d3509[_0x47a05c(0x792)]['ji'] = function() {
                var _0xba68da = _0x47a05c
                  , _0x4ec4cc = _0x3392fc();
                _0x4ec4cc['r']['Dd']();
                var _0x1997bb = _0x4ec4cc['u']['Oi']()
                  , _0x30de89 = moment([_0x1997bb['year'], _0x1997bb[_0xba68da(0x408)] - 0x1, _0x1997bb[_0xba68da(0x356)]])[_0xba68da(0x234)]('LL');
                _0x2be406[_0xba68da(0x450)](_0x4ec4cc['u']['wi']()),
                _0x2d2e21[_0xba68da(0x35c)]('src', _0x4ec4cc['u']['xi']()),
                _0x48a55a[_0xba68da(0x546)](0x64 * _0x4ec4cc['u']['Bi']() / _0x4ec4cc['u']['Ci']() + '%'),
                _0x57d28d['html'](_0x4ec4cc['u']['Bi']() + _0xba68da(0x235) + _0x4ec4cc['u']['Ci']()),
                _0x261ee3[_0xba68da(0x450)](_0x4ec4cc['u']['Ai']()),
                _0x495970[_0xba68da(0x450)](_0x4ec4cc['u']['Ii']()),
                _0x3a6e72['html'](_0x55a05a(_0x4ec4cc['u']['Ji']())),
                _0xd1bfa6['html'](_0x4ec4cc['u']['Ki']()),
                _0x12903d[_0xba68da(0x450)](_0x4ec4cc['u']['Li']()),
                _0x5d6fc7[_0xba68da(0x450)](_0x4ec4cc['u']['Mi']()),
                _0x44a931[_0xba68da(0x450)](_0x55a05a(_0x4ec4cc['u']['Ni']())),
                _0x1ff050['html'](_0x30de89);
            }
            ,
            _0x1d3509;
        }())
          , _0x271c07 = (function() {
            var _0x3e59de = _0x5b9465
              , _0x745e04 = $(_0x3e59de(0x1ec))
              , _0x39dc9f = $(_0x3e59de(0x236))
              , _0xd1ef25 = $(_0x3e59de(0x7fa))
              , _0x38b462 = $(_0x3e59de(0x77a))
              , _0x227c82 = $('#popup-logout-container')
              , _0x564793 = $(_0x3e59de(0x5de))
              , _0x3fd201 = $(_0x3e59de(0x5c8))
              , _0x1c0e1c = $(_0x3e59de(0x1f7))
              , _0x5b3fc2 = _0x22ee20(_0x3987d2, function() {
                var _0x5efa3a = _0x3e59de;
                _0x3987d2[_0x5efa3a(0x5b3)](this, _0x2ca325(_0x5efa3a(0x536)), !0x1);
                var _0x38be39 = this
                  , _0xeedc0a = _0x3392fc();
                _0x745e04[_0x5efa3a(0x2c0)](function() {
                    var _0x251823 = _0x5efa3a
                      , _0x1c2b49 = !!_0x745e04[_0x251823(0x67d)](_0x251823(0x377));
                    _0x350985(_0x166161['Me'], _0x1c2b49, 0x1e),
                    _0xeedc0a['r']['td'](_0x1c2b49),
                    _0xeedc0a['r']['Cd']();
                }),
                _0x39dc9f[_0x5efa3a(0x2c0)](function() {
                    var _0x179c98 = _0x5efa3a
                      , _0xd4ff01 = !!_0x39dc9f['prop'](_0x179c98(0x377));
                    _0x350985(_0x166161['Ne'], _0xd4ff01, 0x1e),
                    _0xeedc0a['r']['rd'](_0xd4ff01),
                    _0xeedc0a['r']['Cd']();
                }),
                _0xd1ef25[_0x5efa3a(0x2c0)](function() {
                    _0xeedc0a['r']['Cd']();
                }),
                _0x38b462[_0x5efa3a(0x2c0)](function() {
                    _0xeedc0a['r']['Cd'](),
                    _0x38be39['Sk'](),
                    setTimeout(function() {
                        _0x38be39['Qk']();
                    }, 0x7d0),
                    _0xeedc0a['u']['Wi']();
                }),
                _0x564793['click'](function() {
                    _0xeedc0a['u']['P']() ? (_0xeedc0a['r']['Cd'](),
                    _0xeedc0a['s']['I'](_0xeedc0a['s']['Vh'])) : _0xeedc0a['r']['Hd']();
                }),
                _0x1c0e1c[_0x5efa3a(0x2c0)](function() {
                    _0xeedc0a['Y']() ? (_0xeedc0a['r']['Cd'](),
                    _0xeedc0a['s']['I'](_0xeedc0a['s']['Uh'])) : _0xeedc0a['r']['Hd']();
                });
            });
            return _0x5b3fc2[_0x3e59de(0x792)]['a'] = function() {
                var _0x20cb4f = _0x3e59de;
                _0x5b3fc2['parent']['prototype']['a']['call'](this);
                var _0x227d3c = _0x3392fc()
                  , _0x310c0d = void 0x0;
                switch (_0x4961dc(_0x166161['Me'])) {
                case _0x20cb4f(0x38a):
                    _0x310c0d = !0x1;
                    break;
                default:
                    _0x310c0d = !0x0;
                }
                _0x745e04['prop']('checked', _0x310c0d),
                _0x227d3c['r']['td'](_0x310c0d);
                var _0x201dd7 = void 0x0;
                switch (_0x4961dc(_0x166161['Ne'])) {
                case _0x20cb4f(0x38a):
                    _0x201dd7 = !0x1;
                    break;
                default:
                    _0x201dd7 = !0x0;
                }
                _0x39dc9f['prop'](_0x20cb4f(0x377), _0x201dd7),
                _0x227d3c['r']['rd'](_0x201dd7);
                var _0x14ee0a = void 0x0;
                switch (_0x4961dc(_0x166161['ya'])) {
                case 'false':
                    _0x14ee0a = !0x1;
                    break;
                default:
                    _0x14ee0a = !0x0;
                }
                console[_0x20cb4f(0x39b)](_0x20cb4f(0x442) + _0x14ee0a),
                _0xd1ef25[_0x20cb4f(0x67d)]('checked', _0x14ee0a),
                _0x227d3c['u']['V'](function() {
                    var _0x5677e7 = _0x20cb4f;
                    _0x227c82[_0x5677e7(0x35e)](_0x227d3c['u']['P']()),
                    _0x3fd201[_0x5677e7(0x35e)](_0x227d3c['u']['P']());
                });
            }
            ,
            _0x5b3fc2[_0x3e59de(0x792)]['Rk'] = function() {
                var _0x2345d4 = _0x3e59de;
                _0x3987d2['Fk'][_0x2345d4(0x619)](),
                _0x3987d2['Fk'][_0x2345d4(0x2d4)](0x32),
                _0x3987d2['Gk'][_0x2345d4(0x619)](),
                _0x3987d2['Gk']['fadeOut'](0x32),
                _0x3987d2['Hk']['stop'](),
                _0x3987d2['Hk']['fadeOut'](0x32),
                _0x3987d2['Jk']['stop'](),
                _0x3987d2['Jk'][_0x2345d4(0x2d4)](0x32),
                _0x3987d2['Ik'][_0x2345d4(0x619)](),
                _0x3987d2['Ik'][_0x2345d4(0x2c6)](0xc8),
                _0x3987d2['Kk']['stop'](),
                _0x3987d2['Kk'][_0x2345d4(0x2d4)](0x32),
                _0x3987d2['Lk'][_0x2345d4(0x619)](),
                _0x3987d2['Lk'][_0x2345d4(0x2d4)](0x32),
                _0x3987d2['Mk'][_0x2345d4(0x619)](),
                _0x3987d2['Mk'][_0x2345d4(0x2d4)](0x32),
                _0x3987d2[_0x2345d4(0x638)][_0x2345d4(0x619)](),
                _0x3987d2[_0x2345d4(0x638)]['fadeOut'](0x32),
                _0x3987d2['Nk']['stop'](),
                _0x3987d2['Nk']['fadeOut'](0x32),
                _0x3987d2['Ok'][_0x2345d4(0x619)](),
                _0x3987d2['Ok'][_0x2345d4(0x2d4)](0x32);
            }
            ,
            _0x5b3fc2[_0x3e59de(0x792)]['ji'] = function() {
                var _0x513451 = _0x3e59de
                  , _0x17b2fd = _0x3392fc();
                _0x17b2fd['r']['Dd'](),
                _0x17b2fd['Y']() ? _0x1c0e1c[_0x513451(0x524)]() : _0x1c0e1c[_0x513451(0x719)]();
            }
            ,
            _0x5b3fc2[_0x3e59de(0x792)]['wa'] = function() {
                var _0x3e5061 = _0x3e59de;
                return _0xd1ef25[_0x3e5061(0x67d)](_0x3e5061(0x377));
            }
            ,
            _0x5b3fc2;
        }())
          , _0x2c583a = (function() {
            var _0x47764b = _0x5b9465
              , _0x3efdb1 = $(_0x47764b(0x4da))
              , _0xf5347a = $('#skin-description-text')
              , _0x29fc82 = $(_0x47764b(0x5cb))
              , _0x1c9115 = $(_0x47764b(0x551))
              , _0x28a138 = $(_0x47764b(0x211))
              , _0x2e0e3d = $(_0x47764b(0x44e))
              , _0xe1bdd1 = $(_0x47764b(0x53a))
              , _0x2fe238 = $(_0x47764b(0x6b0))
              , _0x3e62a1 = $('#store-view-prev')
              , _0x81f94e = $(_0x47764b(0x2ff))
              , _0xc458d2 = _0x22ee20(_0x3987d2, function() {
                var _0x2f16e6 = _0x47764b;
                _0x3987d2[_0x2f16e6(0x5b3)](this, _0x2ca325('index.game.popup.menu.skins.tab'), !0x0);
                var _0x6c64db = this
                  , _0xec7901 = _0x3392fc();
                this['bl'] = null,
                this['cl'] = [],
                this['dl'] = {},
                this['el'] = new _0x418bed(_0x3efdb1),
                _0x2e0e3d[_0x2f16e6(0x2c0)](function() {
                    _0xec7901['r']['Cd'](),
                    _0x6c64db['fl']();
                }),
                _0x3e62a1[_0x2f16e6(0x2c0)](function() {
                    _0xec7901['r']['Cd'](),
                    _0x6c64db['bl']['gl']();
                }),
                _0x81f94e[_0x2f16e6(0x2c0)](function() {
                    _0xec7901['r']['Cd'](),
                    _0x6c64db['bl']['hl']();
                });
            });
            _0xc458d2['prototype']['a'] = function() {
                var _0x3cf83b = _0x47764b;
                _0xc458d2['parent'][_0x3cf83b(0x792)]['a'][_0x3cf83b(0x5b3)](this);
                var _0x461a08 = this
                  , _0x349bf5 = _0x3392fc();
                _0x349bf5['p']['ca'](function() {
                    var _0x4d1581 = _0x3cf83b
                      , _0x4c7e75 = _0x349bf5['p']['Ac']();
                    if (null != _0x4c7e75) {
                        _0x461a08['cl'] = [];
                        for (var _0x34175e = 0x0; _0x34175e < _0x4c7e75['skinGroupArrayDict']['length']; _0x34175e++)
                            _0x461a08['cl'][_0x4d1581(0x7b5)](new _0x369e2e(_0x461a08,_0x4c7e75['skinGroupArrayDict'][_0x34175e]));
                        _0x461a08['dl'] = {};
                        for (var _0x2e3e86 = 0x0; _0x2e3e86 < _0x4c7e75[_0x4d1581(0x737)][_0x4d1581(0x607)]; _0x2e3e86++) {
                            var _0x10ef95 = _0x4c7e75[_0x4d1581(0x737)][_0x2e3e86];
                            _0x461a08['dl'][_0x10ef95['id']] = _0x10ef95;
                        }
                    }
                }),
                this['il'](!0x1),
                _0x349bf5['t']['xh'](function() {
                    _0x461a08['il'](!0x1);
                });
            }
            ,
            _0xc458d2[_0x47764b(0x792)]['Rk'] = function() {
                var _0x3057c2 = _0x47764b;
                _0x3987d2['Fk'][_0x3057c2(0x619)](),
                _0x3987d2['Fk']['fadeOut'](0x32),
                _0x3987d2['Gk'][_0x3057c2(0x619)](),
                _0x3987d2['Gk'][_0x3057c2(0x2d4)](0x32),
                _0x3987d2['Hk'][_0x3057c2(0x619)](),
                _0x3987d2['Hk'][_0x3057c2(0x2d4)](0x32),
                _0x3987d2['Jk'][_0x3057c2(0x619)](),
                _0x3987d2['Jk'][_0x3057c2(0x2d4)](0x32),
                _0x3987d2['Ik']['stop'](),
                _0x3987d2['Ik'][_0x3057c2(0x2d4)](0x32),
                _0x3987d2['Kk'][_0x3057c2(0x619)](),
                _0x3987d2['Kk'][_0x3057c2(0x2c6)](0xc8),
                _0x3987d2['Lk']['stop'](),
                _0x3987d2['Lk'][_0x3057c2(0x2d4)](0x32),
                _0x3987d2['Mk'][_0x3057c2(0x619)](),
                _0x3987d2['Mk'][_0x3057c2(0x2d4)](0x32),
                _0x3987d2[_0x3057c2(0x638)][_0x3057c2(0x619)](),
                _0x3987d2[_0x3057c2(0x638)]['fadeOut'](0x32),
                _0x3987d2['Nk'][_0x3057c2(0x619)](),
                _0x3987d2['Nk']['fadeOut'](0x32),
                _0x3987d2['Ok'][_0x3057c2(0x619)](),
                _0x3987d2['Ok']['fadeOut'](0x32);
            }
            ,
            _0xc458d2['prototype']['ji'] = function() {
                _0x3392fc()['r']['Dd'](),
                this['jl'](),
                this['el']['Le'](!0x0);
            }
            ,
            _0xc458d2[_0x47764b(0x792)]['ei'] = function() {
                this['el']['Le'](!0x1);
            }
            ,
            _0xc458d2['prototype']['Ra'] = function() {
                this['el']['Ra']();
            }
            ,
            _0xc458d2[_0x47764b(0x792)]['Pa'] = function(_0x335d0a, _0x2f9631) {
                this['el']['Pa']();
            }
            ,
            _0xc458d2[_0x47764b(0x792)]['jl'] = function() {
                var _0xd86c74 = _0x47764b
                  , _0x1dacaa = this
                  , _0x2b4a28 = this
                  , _0x279c84 = _0x3392fc();
                _0x2fe238[_0xd86c74(0x38d)]();
                for (var _0x492c75 = 0x0; _0x492c75 < this['cl']['length']; _0x492c75++)
                    !function(_0x21c3c7) {
                        var _0x717f6c = _0xd86c74
                          , _0x1844b7 = _0x1dacaa['cl'][_0x21c3c7]
                          , _0x3b64de = document['createElement']('li');
                        _0x2fe238[_0x717f6c(0x6b3)](_0x3b64de);
                        var _0x568e2c = $(_0x3b64de);
                        _0x568e2c[_0x717f6c(0x450)](_0x1844b7['kl']()),
                        _0x568e2c[_0x717f6c(0x2c0)](function() {
                            _0x279c84['r']['Cd'](),
                            _0x2b4a28['ll'](_0x1844b7);
                        }),
                        _0x1844b7['ml'] = _0x568e2c;
                    }(_0x492c75);
                if (this['cl'][_0xd86c74(0x607)] > 0x0) {
                    for (var _0x445882 = _0x279c84['t']['ha'](_0x4e8d86['ia']), _0x492c75 = 0x0; _0x492c75 < this['cl'][_0xd86c74(0x607)]; _0x492c75++)
                        for (var _0x1e275c = this['cl'][_0x492c75], _0x1ac6fa = _0x1e275c['nl'][_0xd86c74(0x79e)], _0x50ee0b = 0x0; _0x50ee0b < _0x1ac6fa[_0xd86c74(0x607)]; _0x50ee0b++)
                            if (_0x1ac6fa[_0x50ee0b] == _0x445882)
                                return _0x1e275c['ol'] = _0x50ee0b,
                                void this['ll'](_0x1e275c);
                    this['ll'](this['cl'][0x0]);
                }
            }
            ,
            _0xc458d2[_0x47764b(0x792)]['ll'] = function(_0x55bd99) {
                var _0x5c3630 = _0x47764b;
                if (this['bl'] != _0x55bd99) {
                    var _0x5e6a17 = _0x3392fc();
                    if (this['bl'] = _0x55bd99,
                    _0x2fe238['children']()['removeClass'](_0x5c3630(0x2b9)),
                    this['bl']['ml'] && this['bl']['ml'][_0x5c3630(0x2bd)](_0x5c3630(0x2b9)),
                    _0x29fc82['html'](''),
                    null != _0x55bd99['nl']) {
                        var _0x46f8bd = _0x5e6a17['p']['Ac']()[_0x5c3630(0x38c)][_0x55bd99['nl'][_0x5c3630(0x277)]];
                        null != _0x46f8bd && _0x29fc82[_0x5c3630(0x450)](_0x2fe590(_0x5547e0(_0x46f8bd)));
                    }
                    this['il'](!0x0);
                }
            }
            ,
            _0xc458d2['prototype']['pl'] = function() {
                return null == this['bl'] ? _0x3a0a9b['Yg']() : this['bl']['ql']();
            }
            ,
            _0xc458d2[_0x47764b(0x792)]['fl'] = function() {
                var _0x14f0da = this;
                this['pl']()['ah'](function(_0x1281fc) {
                    _0x14f0da['rl'](_0x1281fc);
                });
            }
            ,
            _0xc458d2['prototype']['rl'] = function(_0x409580) {
                var _0x1eb4eb = _0x47764b
                  , _0x1d85fc = this
                  , _0x20554f = _0x3392fc()
                  , _0x31166e = this['dl'][_0x409580][_0x1eb4eb(0x4b6)];
                if (!(_0x20554f['u']['zi']() < _0x31166e)) {
                    this['Sk']();
                    var _0x54675e = _0x20554f['t']['ha'](_0x4e8d86['ia'])
                      , _0x59051d = _0x20554f['t']['ha'](_0x4e8d86['ja'])
                      , _0x9b1228 = _0x20554f['t']['ha'](_0x4e8d86['ka'])
                      , _0x2cea56 = _0x20554f['t']['ha'](_0x4e8d86['la'])
                      , _0x57f5b9 = _0x20554f['t']['ha'](_0x4e8d86['ma']);
                    _0x20554f['u']['Ui'](_0x409580, _0x4e8d86['ia'], function() {
                        _0x20554f['t']['Bh'](_0x54675e, _0x4e8d86['ia']),
                        _0x20554f['t']['Bh'](_0x59051d, _0x4e8d86['ja']),
                        _0x20554f['t']['Bh'](_0x9b1228, _0x4e8d86['ka']),
                        _0x20554f['t']['Bh'](_0x2cea56, _0x4e8d86['la']),
                        _0x20554f['t']['Bh'](_0x57f5b9, _0x4e8d86['ma']),
                        _0x20554f['u']['Ch'](_0x409580, _0x4e8d86['ia']) && _0x20554f['t']['Bh'](_0x409580, _0x4e8d86['ia']),
                        _0x1d85fc['Qk']();
                    });
                }
            }
            ,
            _0xc458d2[_0x47764b(0x792)]['il'] = function(_0x8b4502) {
                var _0x3eb4a3 = _0x47764b
                  , _0x4b414e = _0x3392fc();
                this['el']['bk'](_0x4b414e['t']['ha'](_0x4e8d86['ja']), !0x1, !0x1),
                this['el']['ck'](_0x4b414e['t']['ha'](_0x4e8d86['ka']), !0x1, !0x1),
                this['el']['dk'](_0x4b414e['t']['ha'](_0x4e8d86['la']), !0x1, !0x1),
                this['el']['ek'](_0x4b414e['t']['ha'](_0x4e8d86['ma']), !0x1, !0x1);
                var _0x2f8357 = this['pl']();
                if (_0x2f8357['_g']()) {
                    var _0x1ef5c0 = _0x2f8357['$g']()
                      , _0x28f646 = this['dl'][_0x1ef5c0]
                      , _0x5613c5 = ![];
                    if (_0x4b414e['t']['Ja'](_0x1ef5c0, _0x4e8d86['ia']))
                        _0x1c9115['hide'](),
                        _0x2e0e3d[_0x3eb4a3(0x719)]();
                    else {
                        if (null == _0x28f646 || 0x1 == _0x28f646[_0x3eb4a3(0x3ab)]) {
                            _0x5613c5 = !![],
                            _0x1c9115['show'](),
                            _0x2e0e3d[_0x3eb4a3(0x719)](),
                            _0x28a138['text'](_0x2ca325('index.game.popup.menu.store.locked'));
                            if (null != _0x28f646 && _0x28f646[_0x3eb4a3(0x3ab)] && null != _0x28f646[_0x3eb4a3(0x7ae)]) {
                                var _0x599ad9 = _0x4b414e['p']['Ac']()[_0x3eb4a3(0x38c)][_0x28f646[_0x3eb4a3(0x7ae)]];
                                null != _0x599ad9 && _0x28a138['text'](_0x5547e0(_0x599ad9));
                            }
                        } else
                            _0x1c9115[_0x3eb4a3(0x719)](),
                            _0x2e0e3d['show'](),
                            _0xe1bdd1['html'](_0x28f646['price']);
                    }
                    _0xf5347a[_0x3eb4a3(0x450)](_0x3eb4a3(0x6db) + _0x1ef5c0 + _0x3eb4a3(0x802) + _0x4e8d86['ia']);
                    if (null != _0x28f646 && null != _0x28f646[_0x3eb4a3(0x277)]) {
                        var _0x2f4a1d = _0x4b414e['p']['Ac']()[_0x3eb4a3(0x38c)][_0x28f646[_0x3eb4a3(0x277)]];
                        null != _0x2f4a1d && _0xf5347a[_0x3eb4a3(0x450)](_0x2fe590(_0x5547e0(_0x2f4a1d)));
                    }
                    this['el']['ak'](_0x1ef5c0, !![], _0x5613c5),
                    _0x8b4502 && _0x4b414e['t']['Bh'](_0x1ef5c0, _0x4e8d86['ia']);
                }
            }
            ;
            var _0x369e2e = (function() {
                var _0x580775 = _0x47764b;
                function _0x4e245a(_0x3487bf, _0xba7a75) {
                    this['sl'] = _0x3487bf,
                    this['ol'] = 0x0,
                    this['nl'] = _0xba7a75;
                }
                return _0x4e245a['prototype']['gl'] = function() {
                    var _0x2945b2 = _0x2458;
                    --this['ol'] < 0x0 && (this['ol'] = this['nl'][_0x2945b2(0x79e)][_0x2945b2(0x607)] - 0x1),
                    this['sl']['il'](!0x0);
                }
                ,
                _0x4e245a[_0x580775(0x792)]['hl'] = function() {
                    var _0x5be15c = _0x580775;
                    ++this['ol'] >= this['nl']['list'][_0x5be15c(0x607)] && (this['ol'] = 0x0),
                    this['sl']['il'](!0x0);
                }
                ,
                _0x4e245a['prototype']['kl'] = function() {
                    var _0x50b5af = _0x580775;
                    let _0x534f91 = _0x5547e0(this['nl'][_0x50b5af(0x62e)]);
                    return console[_0x50b5af(0x39b)](this['nl']),
                    this['nl']['img'] && (_0x534f91 = '<img\x20src=\x22' + this['nl'][_0x50b5af(0x5fa)] + _0x50b5af(0x3d5)),
                    _0x534f91;
                }
                ,
                _0x4e245a['prototype']['ql'] = function() {
                    var _0x4ee9fd = _0x580775;
                    return this['ol'] >= this['nl'][_0x4ee9fd(0x79e)][_0x4ee9fd(0x607)] ? _0x3a0a9b['Yg']() : _0x3a0a9b['Zg'](this['nl']['list'][this['ol']]);
                }
                ,
                _0x4e245a;
            }());
            return _0xc458d2;
        }())
          , _0x2535ea = (function() {
            var _0x282ef9 = _0x5b9465
              , _0x357fdb = $(_0x282ef9(0x6ba))
              , _0x468ebb = $('#store-go-skins-button')
              , _0x312c89 = $(_0x282ef9(0x34c))
              , _0x54c61d = _0x22ee20(_0x3987d2, function() {
                var _0x545078 = _0x282ef9;
                _0x3987d2[_0x545078(0x5b3)](this, _0x2ca325(_0x545078(0x1cf)), !0x0);
                var _0x4af22d = _0x3392fc();
                _0x357fdb['click'](function() {
                    _0x4af22d['r']['Cd'](),
                    _0x4af22d['s']['I'](_0x4af22d['s']['Wh']);
                }),
                _0x468ebb['click'](function() {
                    _0x4af22d['r']['Cd'](),
                    _0x4af22d['s']['I'](_0x4af22d['s']['$h']);
                }),
                _0x312c89[_0x545078(0x2c0)](function() {
                    _0x4af22d['r']['Cd'](),
                    _0x4af22d['s']['I'](_0x4af22d['s']['ai']);
                });
            });
            return _0x54c61d[_0x282ef9(0x792)]['a'] = function() {
                var _0x589424 = _0x282ef9;
                _0x54c61d[_0x589424(0x4de)][_0x589424(0x792)]['a'][_0x589424(0x5b3)](this);
            }
            ,
            _0x54c61d[_0x282ef9(0x792)]['Rk'] = function() {
                var _0x5c03bc = _0x282ef9;
                _0x3987d2['Fk']['stop'](),
                _0x3987d2['Fk'][_0x5c03bc(0x2d4)](0x32),
                _0x3987d2['Gk'][_0x5c03bc(0x619)](),
                _0x3987d2['Gk']['fadeOut'](0x32),
                _0x3987d2['Hk']['stop'](),
                _0x3987d2['Hk']['fadeOut'](0x32),
                _0x3987d2['Jk'][_0x5c03bc(0x619)](),
                _0x3987d2['Jk'][_0x5c03bc(0x2d4)](0x32),
                _0x3987d2['Ik'][_0x5c03bc(0x619)](),
                _0x3987d2['Ik']['fadeOut'](0x32),
                _0x3987d2['Kk'][_0x5c03bc(0x619)](),
                _0x3987d2['Kk'][_0x5c03bc(0x2d4)](0x32),
                _0x3987d2['Lk']['stop'](),
                _0x3987d2['Lk']['fadeIn'](0xc8),
                _0x3987d2['Mk']['stop'](),
                _0x3987d2['Mk'][_0x5c03bc(0x2d4)](0x32),
                _0x3987d2[_0x5c03bc(0x638)]['stop'](),
                _0x3987d2['zwset'][_0x5c03bc(0x2d4)](0x32),
                _0x3987d2['Nk'][_0x5c03bc(0x619)](),
                _0x3987d2['Nk'][_0x5c03bc(0x2d4)](0x32),
                _0x3987d2['Ok'][_0x5c03bc(0x619)](),
                _0x3987d2['Ok'][_0x5c03bc(0x2d4)](0x32);
            }
            ,
            _0x54c61d[_0x282ef9(0x792)]['ji'] = function() {
                _0x3392fc()['r']['Dd']();
            }
            ,
            _0x54c61d;
        }())
          , _0x5d82ca = (function() {
            var _0x22b51d = _0x5b9465
              , _0x47153b = $(_0x22b51d(0x556))
              , _0x5dfcad = _0x22ee20(_0x3987d2, function() {
                var _0x2a9a30 = _0x22b51d;
                _0x3987d2['call'](this, _0x2a9a30(0x6f1), 0x0);
            });
            return _0x5dfcad['prototype']['a'] = function() {
                var _0x3979d0 = _0x22b51d;
                _0x5dfcad[_0x3979d0(0x4de)][_0x3979d0(0x792)]['a'][_0x3979d0(0x5b3)](this);
            }
            ,
            _0x5dfcad[_0x22b51d(0x792)]['Rk'] = function() {
                var _0x515af4 = _0x22b51d;
                _0x3987d2['Fk'][_0x515af4(0x619)](),
                _0x3987d2['Fk'][_0x515af4(0x2d4)](0x32),
                _0x3987d2['Gk'][_0x515af4(0x619)](),
                _0x3987d2['Gk']['fadeOut'](0x32),
                _0x3987d2['Hk']['stop'](),
                _0x3987d2['Hk']['fadeOut'](0x32),
                _0x3987d2['Jk'][_0x515af4(0x619)](),
                _0x3987d2['Jk'][_0x515af4(0x2d4)](0x32),
                _0x3987d2['Kk']['stop'](),
                _0x3987d2['Kk'][_0x515af4(0x2d4)](0x32),
                _0x3987d2['Lk'][_0x515af4(0x619)](),
                _0x3987d2['Lk'][_0x515af4(0x2d4)](0x32),
                _0x3987d2['Mk'][_0x515af4(0x619)](),
                _0x3987d2['Mk'][_0x515af4(0x2d4)](0x32),
                _0x3987d2['Nk'][_0x515af4(0x619)](),
                _0x3987d2['Nk'][_0x515af4(0x2d4)](0x32),
                _0x3987d2['Ok']['stop'](),
                _0x3987d2['Ok'][_0x515af4(0x2d4)](0x32),
                _0x3987d2[_0x515af4(0x638)]['stop'](),
                _0x3987d2['zwset'][_0x515af4(0x2c6)](0xc8);
            }
            ,
            _0x5dfcad[_0x22b51d(0x792)]['ji'] = function() {
                var _0x270021 = _0x3392fc();
                _0x270021['r']['Dd']();
            }
            ,
            _0x5dfcad;
        }())
          , _0x394d89 = (function() {
            var _0x5824b0 = _0x5b9465
              , _0x2c1a17 = $('#wear-view-canv')
              , _0x148f5e = $(_0x5824b0(0x6f0))
              , _0x3031b6 = $(_0x5824b0(0x5cf))
              , _0x38f41c = $(_0x5824b0(0x3ce))
              , _0x1574af = $(_0x5824b0(0x7fd))
              , _0x4c30b5 = $(_0x5824b0(0x51d))
              , _0x430ac5 = $(_0x5824b0(0x5e5))
              , _0x133eb6 = $(_0x5824b0(0x32a))
              , _0x5682e5 = $('#wear-glasses-button')
              , _0x4a486b = $('#wear-hats-button')
              , _0x2557f4 = $('#wear-tint-chooser')
              , _0x85ed28 = $(_0x5824b0(0x481))
              , _0x1fd246 = $('#wear-view-next')
              , _0x51297b = _0x22ee20(_0x3987d2, function() {
                var _0x570d41 = _0x5824b0
                  , _0x4547f9 = this;
                _0x3987d2['call'](this, _0x2ca325(_0x570d41(0x2f0)), !0x0);
                var _0x17d9f3 = _0x3392fc()
                  , _0x291116 = this;
                this['tl'] = [],
                this['ja'] = new _0x230a63(this,_0x4e8d86['ja'],_0x430ac5),
                this['ka'] = new _0x230a63(this,_0x4e8d86['ka'],_0x133eb6),
                this['la'] = new _0x230a63(this,_0x4e8d86['la'],_0x5682e5),
                this['ma'] = new _0x230a63(this,_0x4e8d86['ma'],_0x4a486b),
                this['ul'] = null,
                this['vl'] = null,
                this['wl'] = null,
                this['xl'] = null,
                this['yl'] = null,
                this['zl'] = null,
                this['Al'] = new _0x418bed(_0x2c1a17),
                _0x1574af[_0x570d41(0x2c0)](function() {
                    _0x17d9f3['r']['Cd'](),
                    _0x291116['Bl']();
                }),
                _0x85ed28[_0x570d41(0x2c0)](function() {
                    _0x17d9f3['r']['Cd'](),
                    _0x291116['ul']['Cl']();
                }),
                _0x1fd246[_0x570d41(0x2c0)](function() {
                    _0x17d9f3['r']['Cd'](),
                    _0x291116['ul']['Dl']();
                }),
                _0x430ac5['click'](function() {
                    _0x17d9f3['r']['Cd'](),
                    _0x291116['El'](_0x4547f9['ja']);
                }),
                _0x133eb6[_0x570d41(0x2c0)](function() {
                    _0x17d9f3['r']['Cd'](),
                    _0x291116['El'](_0x4547f9['ka']);
                }),
                _0x5682e5[_0x570d41(0x2c0)](function() {
                    _0x17d9f3['r']['Cd'](),
                    _0x291116['El'](_0x4547f9['la']);
                }),
                _0x4a486b['click'](function() {
                    _0x17d9f3['r']['Cd'](),
                    _0x291116['El'](_0x4547f9['ma']);
                }),
                this['tl'][_0x570d41(0x7b5)](this['ja']),
                this['tl']['push'](this['ka']),
                this['tl']['push'](this['la']),
                this['tl'][_0x570d41(0x7b5)](this['ma']);
            });
            _0x51297b['prototype']['a'] = function() {
                var _0x58cca7 = _0x5824b0;
                _0x51297b[_0x58cca7(0x4de)][_0x58cca7(0x792)]['a'][_0x58cca7(0x5b3)](this);
                var _0x50e8d3 = _0x3392fc()
                  , _0x593fc2 = this;
                _0x50e8d3['p']['ca'](function() {
                    var _0xd198d = _0x58cca7
                      , _0x420259 = _0x50e8d3['p']['Ac']();
                    null != _0x420259 && (_0x593fc2['vl'] = _0x420259[_0xd198d(0x829)],
                    _0x593fc2['wl'] = _0x420259[_0xd198d(0x319)],
                    _0x593fc2['xl'] = _0x420259[_0xd198d(0x50a)],
                    _0x593fc2['yl'] = _0x420259['hatDict'],
                    _0x593fc2['zl'] = _0x420259[_0xd198d(0x327)],
                    _0x593fc2['ja']['Fl'](_0x420259[_0xd198d(0x5da)]),
                    _0x593fc2['ja']['Gl'](_0x593fc2['vl']),
                    _0x593fc2['ka']['Fl'](_0x420259[_0xd198d(0x444)]),
                    _0x593fc2['ka']['Gl'](_0x593fc2['wl']),
                    _0x593fc2['la']['Fl'](_0x420259[_0xd198d(0x7b3)]),
                    _0x593fc2['la']['Gl'](_0x593fc2['xl']),
                    _0x593fc2['ma']['Fl'](_0x420259[_0xd198d(0x45e)]),
                    _0x593fc2['ma']['Gl'](_0x593fc2['yl']));
                }),
                this['il'](!0x1),
                _0x50e8d3['t']['xh'](function() {
                    _0x593fc2['il'](!0x1);
                });
            }
            ,
            _0x51297b[_0x5824b0(0x792)]['Rk'] = function() {
                var _0x23797e = _0x5824b0;
                _0x3987d2['Fk'][_0x23797e(0x619)](),
                _0x3987d2['Fk'][_0x23797e(0x2d4)](0x32),
                _0x3987d2['Gk'][_0x23797e(0x619)](),
                _0x3987d2['Gk']['fadeOut'](0x32),
                _0x3987d2['Hk'][_0x23797e(0x619)](),
                _0x3987d2['Hk']['fadeOut'](0x32),
                _0x3987d2['Jk'][_0x23797e(0x619)](),
                _0x3987d2['Jk'][_0x23797e(0x2d4)](0x32),
                _0x3987d2['Ik'][_0x23797e(0x619)](),
                _0x3987d2['Ik']['fadeOut'](0x32),
                _0x3987d2['Kk'][_0x23797e(0x619)](),
                _0x3987d2['Kk']['fadeOut'](0x32),
                _0x3987d2['Lk'][_0x23797e(0x619)](),
                _0x3987d2['Lk'][_0x23797e(0x2d4)](0x32),
                _0x3987d2['Mk'][_0x23797e(0x619)](),
                _0x3987d2['Mk'][_0x23797e(0x2c6)](0xc8),
                _0x3987d2[_0x23797e(0x638)][_0x23797e(0x619)](),
                _0x3987d2[_0x23797e(0x638)]['fadeOut'](0x32),
                _0x3987d2['Nk'][_0x23797e(0x619)](),
                _0x3987d2['Nk'][_0x23797e(0x2d4)](0x32),
                _0x3987d2['Ok'][_0x23797e(0x619)](),
                _0x3987d2['Ok'][_0x23797e(0x2d4)](0x32);
            }
            ,
            _0x51297b['prototype']['ji'] = function() {
                _0x3392fc()['r']['Dd'](),
                this['El'](null != this['ul'] ? this['ul'] : this['ja']),
                this['Al']['Le'](!0x0);
            }
            ,
            _0x51297b['prototype']['ei'] = function() {
                this['Al']['Le'](!0x1);
            }
            ,
            _0x51297b[_0x5824b0(0x792)]['Ra'] = function() {
                this['Al']['Ra']();
            }
            ,
            _0x51297b[_0x5824b0(0x792)]['Pa'] = function(_0x59e79f, _0x5e3540) {
                this['Al']['Pa']();
            }
            ,
            _0x51297b[_0x5824b0(0x792)]['El'] = function(_0x1dabb6) {
                var _0x3f39f3 = _0x5824b0;
                this['ul'] = _0x1dabb6;
                for (var _0x3638e3 = 0x0; _0x3638e3 < this['tl'][_0x3f39f3(0x607)]; _0x3638e3++)
                    this['tl'][_0x3638e3]['Xk'][_0x3f39f3(0x317)]('pressed');
                this['ul']['Xk']['addClass'](_0x3f39f3(0x2b9)),
                this['ul']['ii']();
            }
            ,
            _0x51297b['prototype']['Hl'] = function() {
                return null == this['ul'] ? _0x3a0a9b['Yg']() : _0x3a0a9b['Zg']({
                    'Lb': this['ul']['ql'](),
                    'rc': this['ul']['rc']
                });
            }
            ,
            _0x51297b[_0x5824b0(0x792)]['Bl'] = function() {
                var _0x25c373 = this;
                this['Hl']()['ah'](function(_0x2ee4cc) {
                    _0x25c373['Ui'](_0x2ee4cc['Lb'], _0x2ee4cc['rc']);
                });
            }
            ,
            _0x51297b['prototype']['Ui'] = function(_0x4ab824, _0x48822f) {
                var _0x8ea15d = _0x5824b0
                  , _0xd42071 = this
                  , _0x137022 = _0x3392fc()
                  , _0x1bbbc9 = void 0x0;
                switch (_0x48822f) {
                case _0x4e8d86['ja']:
                    _0x1bbbc9 = this['vl'][_0x4ab824][_0x8ea15d(0x4b6)];
                    break;
                case _0x4e8d86['ka']:
                    _0x1bbbc9 = this['wl'][_0x4ab824][_0x8ea15d(0x4b6)];
                    break;
                case _0x4e8d86['la']:
                    _0x1bbbc9 = this['xl'][_0x4ab824][_0x8ea15d(0x4b6)];
                    break;
                case _0x4e8d86['ma']:
                    _0x1bbbc9 = this['yl'][_0x4ab824][_0x8ea15d(0x4b6)];
                    break;
                default:
                    return;
                }
                if (!(_0x137022['u']['zi']() < _0x1bbbc9)) {
                    this['Sk']();
                    var _0x28ab73 = _0x137022['t']['ha'](_0x4e8d86['ia'])
                      , _0xa48200 = _0x137022['t']['ha'](_0x4e8d86['ja'])
                      , _0x25b303 = _0x137022['t']['ha'](_0x4e8d86['ka'])
                      , _0x3af862 = _0x137022['t']['ha'](_0x4e8d86['la'])
                      , _0xf94e20 = _0x137022['t']['ha'](_0x4e8d86['ma']);
                    _0x137022['u']['Ui'](_0x4ab824, _0x48822f, function() {
                        _0x137022['t']['Bh'](_0x28ab73, _0x4e8d86['ia']),
                        _0x137022['t']['Bh'](_0xa48200, _0x4e8d86['ja']),
                        _0x137022['t']['Bh'](_0x25b303, _0x4e8d86['ka']),
                        _0x137022['t']['Bh'](_0x3af862, _0x4e8d86['la']),
                        _0x137022['t']['Bh'](_0xf94e20, _0x4e8d86['ma']),
                        _0x137022['u']['Ch'](_0x4ab824, _0x48822f) && _0x137022['t']['Bh'](_0x4ab824, _0x48822f),
                        _0xd42071['Qk']();
                    });
                }
            }
            ,
            _0x51297b['prototype']['Il'] = function(_0xd061ae, _0x4b5eaa) {
                switch (_0x4b5eaa) {
                case _0x4e8d86['ja']:
                    return this['vl'][_0xd061ae];
                case _0x4e8d86['ka']:
                    return this['wl'][_0xd061ae];
                case _0x4e8d86['la']:
                    return this['xl'][_0xd061ae];
                case _0x4e8d86['ma']:
                    return this['yl'][_0xd061ae];
                }
                return null;
            }
            ,
            _0x51297b[_0x5824b0(0x792)]['il'] = function(_0x58bf9b) {
                var _0xbfbb98 = _0x5824b0
                  , _0x108aeb = _0x3392fc();
                this['Al']['ak'](_0x108aeb['t']['ha'](_0x4e8d86['ia']), !0x1, !0x1),
                this['Al']['bk'](_0x108aeb['t']['ha'](_0x4e8d86['ja']), !0x1, !0x1),
                this['Al']['ck'](_0x108aeb['t']['ha'](_0x4e8d86['ka']), !0x1, !0x1),
                this['Al']['dk'](_0x108aeb['t']['ha'](_0x4e8d86['la']), !0x1, !0x1),
                this['Al']['ek'](_0x108aeb['t']['ha'](_0x4e8d86['ma']), !0x1, !0x1);
                var _0x39a72c = this['Hl']();
                if (_0x39a72c['_g']()) {
                    var _0x5199dd = _0x39a72c['$g']()
                      , _0x177685 = this['Il'](_0x5199dd['Lb'], _0x5199dd['rc'])
                      , _0x3070b4 = ![];
                    if (_0x108aeb['t']['Ja'](_0x5199dd['Lb'], _0x5199dd['rc']))
                        _0x3031b6[_0xbfbb98(0x719)](),
                        _0x1574af[_0xbfbb98(0x719)]();
                    else {
                        if (null == _0x177685 || 0x1 == _0x177685[_0xbfbb98(0x3ab)]) {
                            _0x3070b4 = !![],
                            _0x3031b6[_0xbfbb98(0x524)](),
                            _0x1574af[_0xbfbb98(0x719)](),
                            _0x38f41c['text'](_0x2ca325(_0xbfbb98(0x322)));
                            if (null != _0x177685 && _0x177685[_0xbfbb98(0x3ab)] && null != _0x177685[_0xbfbb98(0x7ae)]) {
                                var _0x33a2bf = _0x108aeb['p']['Ac']()[_0xbfbb98(0x38c)][_0x177685['nonbuyableCause']];
                                null != _0x33a2bf && _0x38f41c['text'](_0x5547e0(_0x33a2bf));
                            }
                        } else
                            _0x3031b6['hide'](),
                            _0x1574af[_0xbfbb98(0x524)](),
                            _0x4c30b5['html'](_0x177685[_0xbfbb98(0x4b6)]);
                    }
                    _0x148f5e[_0xbfbb98(0x450)]('ID:\x20' + _0x5199dd['Lb']);
                    if (null != _0x177685 && null != _0x177685[_0xbfbb98(0x277)]) {
                        var _0x2aa26e = _0x108aeb['p']['Ac']()[_0xbfbb98(0x38c)][_0x177685[_0xbfbb98(0x277)]];
                        null != _0x2aa26e && _0x148f5e['html'](_0x2fe590(_0x5547e0(_0x2aa26e)));
                    }
                    switch (_0x5199dd['rc']) {
                    case _0x4e8d86['ja']:
                        this['Al']['bk'](_0x5199dd['Lb'], !![], _0x3070b4);
                        break;
                    case _0x4e8d86['ka']:
                        this['Al']['ck'](_0x5199dd['Lb'], !![], _0x3070b4);
                        break;
                    case _0x4e8d86['la']:
                        this['Al']['dk'](_0x5199dd['Lb'], !![], _0x3070b4);
                        break;
                    case _0x4e8d86['ma']:
                        this['Al']['ek'](_0x5199dd['Lb'], !![], _0x3070b4);
                        break;
                    }
                    _0x58bf9b && _0x108aeb['t']['Bh'](_0x5199dd['Lb'], _0x5199dd['rc']);
                }
            }
            ;
            var _0x230a63 = (function() {
                var _0x4f28cb = _0x5824b0;
                function _0x3de315(_0x2085b2, _0x5a81f6, _0x8b8eac) {
                    this['sl'] = _0x2085b2,
                    this['rc'] = _0x5a81f6,
                    this['Xk'] = _0x8b8eac,
                    this['Jl'] = {},
                    this['Kl'] = [[]],
                    this['Ll'] = -0xa,
                    this['Ml'] = -0xa;
                }
                return _0x3de315[_0x4f28cb(0x792)]['Fl'] = function(_0x1dba48) {
                    this['Kl'] = _0x1dba48;
                }
                ,
                _0x3de315[_0x4f28cb(0x792)]['Gl'] = function(_0x1657d1) {
                    this['Jl'] = _0x1657d1;
                }
                ,
                _0x3de315[_0x4f28cb(0x792)]['ii'] = function() {
                    var _0x54bd14 = _0x4f28cb;
                    for (var _0x5b3eb5 = _0x3392fc(), _0x2a43f8 = _0x5b3eb5['t']['ha'](this['rc']), _0x577b6c = 0x0; _0x577b6c < this['Kl'][_0x54bd14(0x607)]; _0x577b6c++)
                        for (var _0xb203b8 = 0x0; _0xb203b8 < this['Kl'][_0x577b6c][_0x54bd14(0x607)]; _0xb203b8++)
                            if (this['Kl'][_0x577b6c][_0xb203b8] == _0x2a43f8)
                                return this['Nl'](_0x577b6c),
                                void this['Ol'](_0xb203b8);
                    this['Nl'](0x0),
                    this['Ol'](0x0);
                }
                ,
                _0x3de315[_0x4f28cb(0x792)]['Cl'] = function() {
                    var _0x386ef4 = _0x4f28cb
                      , _0x4cb7fe = this['Ll'] - 0x1;
                    _0x4cb7fe < 0x0 && (_0x4cb7fe = this['Kl']['length'] - 0x1),
                    this['Nl'](_0x4cb7fe),
                    this['Ol'](this['Ml'] % this['Kl'][_0x4cb7fe][_0x386ef4(0x607)]);
                }
                ,
                _0x3de315[_0x4f28cb(0x792)]['Dl'] = function() {
                    var _0x4e8364 = _0x4f28cb
                      , _0x103a4a = this['Ll'] + 0x1;
                    _0x103a4a >= this['Kl']['length'] && (_0x103a4a = 0x0),
                    this['Nl'](_0x103a4a),
                    this['Ol'](this['Ml'] % this['Kl'][_0x103a4a][_0x4e8364(0x607)]);
                }
                ,
                _0x3de315[_0x4f28cb(0x792)]['Nl'] = function(_0x3ac648) {
                    var _0x4516b1 = _0x4f28cb
                      , _0x5656b1 = this;
                    if (!(_0x3ac648 < 0x0 || _0x3ac648 >= this['Kl']['length'])) {
                        this['Ll'] = _0x3ac648,
                        _0x2557f4[_0x4516b1(0x38d)]();
                        var _0x431e18 = this['Kl'][this['Ll']];
                        if (_0x431e18[_0x4516b1(0x607)] > 0x1) {
                            for (var _0x212dc5 = 0x0; _0x212dc5 < _0x431e18[_0x4516b1(0x607)]; _0x212dc5++)
                                !function(_0x55c19f) {
                                    var _0x30108c = _0x4516b1
                                      , _0x1aa209 = _0x431e18[_0x55c19f]
                                      , _0x57cfa4 = _0x5656b1['Jl'][_0x1aa209]
                                      , _0x3162df = '#' + _0x5656b1['sl']['zl'][_0x57cfa4[_0x30108c(0x254)]]
                                      , _0x3d40f9 = $(_0x30108c(0x525) + _0x3162df + _0x30108c(0x238));
                                    _0x3d40f9[_0x30108c(0x2c0)](function() {
                                        _0x3392fc()['r']['Cd'](),
                                        _0x5656b1['Ol'](_0x55c19f);
                                    }),
                                    _0x2557f4[_0x30108c(0x6b3)](_0x3d40f9);
                                }(_0x212dc5);
                        }
                    }
                }
                ,
                _0x3de315[_0x4f28cb(0x792)]['Ol'] = function(_0x520de6) {
                    var _0x528233 = _0x4f28cb;
                    if (!(_0x520de6 < 0x0 || _0x520de6 >= this['Kl'][this['Ll']]['length'])) {
                        this['Ml'] = _0x520de6,
                        _0x2557f4[_0x528233(0x485)]()[_0x528233(0x519)](_0x528233(0x1fd), 'transparent');
                        var _0x1db28b = _0x2557f4[_0x528233(0x485)](_0x528233(0x1b8) + (0x1 + _0x520de6) + ')');
                        _0x1db28b['css'](_0x528233(0x1fd), _0x1db28b['css'](_0x528233(0x405))),
                        this['sl']['il'](!0x0);
                    }
                }
                ,
                _0x3de315[_0x4f28cb(0x792)]['ql'] = function() {
                    return this['Kl'][this['Ll']][this['Ml']];
                }
                ,
                _0x3de315;
            }());
            return _0x51297b;
        }())
          , _0x327500 = (function() {
            var _0x43b711 = _0x5b9465
              , _0x4faccf = $(_0x43b711(0x2d5))
              , _0x124eeb = $('#withdraw-consent-no')
              , _0x189a0c = _0x22ee20(_0x3987d2, function() {
                var _0x16287e = _0x43b711;
                _0x3987d2[_0x16287e(0x5b3)](this, _0x2ca325(_0x16287e(0x292)), !0x1);
                var _0x291994 = _0x3392fc();
                _0x4faccf[_0x16287e(0x2c0)](function() {
                    _0x291994['r']['Cd'](),
                    _0x291994['Y']() ? (_0x291994['s']['I'](_0x291994['s']['F']),
                    _0x291994['$'](!0x1, !0x0),
                    _0x291994['s']['aa']['_'](new _0xefd538())) : _0x291994['s']['gi']();
                }),
                _0x124eeb[_0x16287e(0x2c0)](function() {
                    _0x291994['r']['Cd'](),
                    _0x291994['s']['gi']();
                });
            });
            return _0x189a0c[_0x43b711(0x792)]['a'] = function() {
                var _0x40f2aa = _0x43b711;
                _0x189a0c[_0x40f2aa(0x4de)][_0x40f2aa(0x792)]['a'][_0x40f2aa(0x5b3)](this);
            }
            ,
            _0x189a0c[_0x43b711(0x792)]['Rk'] = function() {
                var _0x2f85d4 = _0x43b711;
                _0x3987d2['Fk'][_0x2f85d4(0x619)](),
                _0x3987d2['Fk'][_0x2f85d4(0x2d4)](0x32),
                _0x3987d2['Gk'][_0x2f85d4(0x619)](),
                _0x3987d2['Gk']['fadeOut'](0x32),
                _0x3987d2['Hk'][_0x2f85d4(0x619)](),
                _0x3987d2['Hk'][_0x2f85d4(0x2d4)](0x32),
                _0x3987d2['Jk'][_0x2f85d4(0x619)](),
                _0x3987d2['Jk'][_0x2f85d4(0x2d4)](0x32),
                _0x3987d2['Ik']['stop'](),
                _0x3987d2['Ik']['fadeOut'](0x32),
                _0x3987d2['Kk']['stop'](),
                _0x3987d2['Kk'][_0x2f85d4(0x2d4)](0x32),
                _0x3987d2['Lk'][_0x2f85d4(0x619)](),
                _0x3987d2['Lk']['fadeOut'](0x32),
                _0x3987d2['Mk'][_0x2f85d4(0x619)](),
                _0x3987d2['Mk'][_0x2f85d4(0x2d4)](0x32),
                _0x3987d2['zwset'][_0x2f85d4(0x619)](),
                _0x3987d2[_0x2f85d4(0x638)]['fadeOut'](0x32),
                _0x3987d2['Nk']['stop'](),
                _0x3987d2['Nk']['fadeIn'](0xc8),
                _0x3987d2['Ok'][_0x2f85d4(0x619)](),
                _0x3987d2['Ok'][_0x2f85d4(0x2d4)](0x32);
            }
            ,
            _0x189a0c[_0x43b711(0x792)]['ji'] = function() {
                _0x3392fc()['r']['Dd']();
            }
            ,
            _0x189a0c;
        }())
          , _0x98c748 = (function() {
            var _0x1bfa48 = _0x5b9465
              , _0x4fc439 = $(_0x1bfa48(0x599))
              , _0x3d8846 = $(_0x1bfa48(0x1cb))
              , _0x4a88d5 = $('#delete-account-no')
              , _0x1b9e86 = _0x22ee20(_0x3987d2, function() {
                var _0x437371 = _0x1bfa48;
                _0x3987d2['call'](this, _0x2ca325(_0x437371(0x5ef)), !0x1);
                var _0x2c6e37 = _0x3392fc();
                _0x3d8846['click'](function() {
                    _0x2c6e37['r']['Cd'](),
                    _0x2c6e37['u']['P']() ? (_0x2c6e37['u']['bj'](),
                    _0x2c6e37['u']['Wi']()) : _0x2c6e37['s']['gi']();
                }),
                _0x4a88d5[_0x437371(0x2c0)](function() {
                    _0x2c6e37['r']['Cd'](),
                    _0x2c6e37['s']['gi']();
                }),
                this['Pl'] = [];
            });
            return _0x1b9e86[_0x1bfa48(0x792)]['a'] = function() {
                var _0x57c2ac = _0x1bfa48;
                _0x1b9e86[_0x57c2ac(0x4de)]['prototype']['a'][_0x57c2ac(0x5b3)](this);
            }
            ,
            _0x1b9e86[_0x1bfa48(0x792)]['Rk'] = function() {
                var _0x42cebb = _0x1bfa48;
                _0x3987d2['Fk']['stop'](),
                _0x3987d2['Fk'][_0x42cebb(0x2d4)](0x32),
                _0x3987d2['Gk']['stop'](),
                _0x3987d2['Gk'][_0x42cebb(0x2d4)](0x32),
                _0x3987d2['Hk'][_0x42cebb(0x619)](),
                _0x3987d2['Hk']['fadeOut'](0x32),
                _0x3987d2['Jk'][_0x42cebb(0x619)](),
                _0x3987d2['Jk'][_0x42cebb(0x2d4)](0x32),
                _0x3987d2['Ik'][_0x42cebb(0x619)](),
                _0x3987d2['Ik'][_0x42cebb(0x2d4)](0x32),
                _0x3987d2['Kk'][_0x42cebb(0x619)](),
                _0x3987d2['Kk'][_0x42cebb(0x2d4)](0x32),
                _0x3987d2['Lk']['stop'](),
                _0x3987d2['Lk'][_0x42cebb(0x2d4)](0x32),
                _0x3987d2['Mk'][_0x42cebb(0x619)](),
                _0x3987d2['Mk'][_0x42cebb(0x2d4)](0x32),
                _0x3987d2['zwset'][_0x42cebb(0x619)](),
                _0x3987d2[_0x42cebb(0x638)][_0x42cebb(0x2d4)](0x32),
                _0x3987d2['Nk']['stop'](),
                _0x3987d2['Nk'][_0x42cebb(0x2d4)](0x32),
                _0x3987d2['Ok'][_0x42cebb(0x619)](),
                _0x3987d2['Ok'][_0x42cebb(0x2c6)](0xc8);
            }
            ,
            _0x1b9e86['prototype']['ji'] = function() {
                var _0x50d57a = _0x1bfa48;
                _0x3392fc()['r']['Hd'](),
                _0x3d8846[_0x50d57a(0x619)](),
                _0x3d8846[_0x50d57a(0x719)](),
                _0x4fc439['stop'](),
                _0x4fc439[_0x50d57a(0x524)](),
                _0x4fc439[_0x50d57a(0x318)](_0x50d57a(0x66e)),
                this['Ql'](),
                this['Rl'](function() {
                    var _0x8409a6 = _0x50d57a;
                    _0x4fc439[_0x8409a6(0x318)](_0x8409a6(0x3af));
                }, 0x3e8),
                this['Rl'](function() {
                    var _0x773946 = _0x50d57a;
                    _0x4fc439[_0x773946(0x318)](_0x773946(0x545));
                }, 0x7d0),
                this['Rl'](function() {
                    var _0x1347a0 = _0x50d57a;
                    _0x4fc439[_0x1347a0(0x318)]('..\x207\x20..');
                }, 0xbb8),
                this['Rl'](function() {
                    var _0x4baadc = _0x50d57a;
                    _0x4fc439[_0x4baadc(0x318)](_0x4baadc(0x4f9));
                }, 0xfa0),
                this['Rl'](function() {
                    var _0x3c9f30 = _0x50d57a;
                    _0x4fc439[_0x3c9f30(0x318)](_0x3c9f30(0x1ce));
                }, 0x1388),
                this['Rl'](function() {
                    var _0x4005b0 = _0x50d57a;
                    _0x4fc439['text'](_0x4005b0(0x4e2));
                }, 0x1770),
                this['Rl'](function() {
                    var _0x4a78ea = _0x50d57a;
                    _0x4fc439[_0x4a78ea(0x318)](_0x4a78ea(0x1d9));
                }, 0x1b58),
                this['Rl'](function() {
                    var _0x286c44 = _0x50d57a;
                    _0x4fc439[_0x286c44(0x318)](_0x286c44(0x3e4));
                }, 0x1f40),
                this['Rl'](function() {
                    var _0x1f8961 = _0x50d57a;
                    _0x4fc439[_0x1f8961(0x318)](_0x1f8961(0x55e));
                }, 0x2328),
                this['Rl'](function() {
                    var _0x407bdd = _0x50d57a;
                    _0x4fc439['hide'](),
                    _0x3d8846[_0x407bdd(0x2c6)](0x12c);
                }, 0x2710);
            }
            ,
            _0x1b9e86[_0x1bfa48(0x792)]['Rl'] = function(_0x418715, _0xbb278c) {
                var _0x22d22b = setTimeout(_0x418715, _0xbb278c);
                this['Pl']['push'](_0x22d22b);
            }
            ,
            _0x1b9e86['prototype']['Ql'] = function() {
                var _0x4d9f49 = _0x1bfa48;
                for (var _0x482c6a = 0x0; _0x482c6a < this['Pl'][_0x4d9f49(0x607)]; _0x482c6a++)
                    clearTimeout(this['Pl'][_0x482c6a]);
                this['Pl'] = [];
            }
            ,
            _0x1b9e86;
        }())
          , _0x297d1e = (function() {
            var _0x5ea1a1 = _0x5b9465;
            function _0x4676b1() {
                this['Ck'] = function() {}
                ;
            }
            return _0x4676b1[_0x5ea1a1(0x792)]['Bk'] = function() {}
            ,
            _0x4676b1[_0x5ea1a1(0x792)]['ji'] = function() {}
            ,
            _0x4676b1;
        }())
          , _0x16627a = (function() {
            var _0x13b488 = _0x5b9465
              , _0x436162 = _0x22ee20(_0x297d1e, function(_0x48804e) {
                var _0x32d857 = _0x2458;
                _0x297d1e[_0x32d857(0x5b3)](this);
                var _0x1721be = Date[_0x32d857(0x61c)]() + '_' + Math[_0x32d857(0x1c7)](0x3e8 + 0x2327 * Math[_0x32d857(0x7d2)]());
                this['Sl'] = $(_0x32d857(0x4f1) + _0x1721be + _0x32d857(0x228) + _0x48804e + _0x32d857(0x64f) + _0x2ca325(_0x32d857(0x6a8)) + '</div></div>');
                var _0xb51a58 = this;
                this['Sl'][_0x32d857(0x456)]('.toaster-coins-close')[_0x32d857(0x2c0)](function() {
                    _0x3392fc()['r']['Cd'](),
                    _0xb51a58['Ck']();
                });
            });
            return _0x436162[_0x13b488(0x792)]['Bk'] = function() {
                return this['Sl'];
            }
            ,
            _0x436162[_0x13b488(0x792)]['ji'] = function() {
                _0x3392fc()['r']['Fd']();
            }
            ,
            _0x436162;
        }())
          , _0x5605b5 = (function() {
            var _0xf63d9b = _0x5b9465
              , _0x20b128 = _0x22ee20(_0x297d1e, function(_0x4a8466) {
                var _0xe9734e = _0x2458;
                _0x297d1e['call'](this);
                var _0x23da61 = Date[_0xe9734e(0x61c)]() + '_' + Math[_0xe9734e(0x1c7)](0x3e8 + 0x2327 * Math[_0xe9734e(0x7d2)]());
                this['Sl'] = $('<div\x20id=\x22' + _0x23da61 + _0xe9734e(0x222) + _0x4a8466 + _0xe9734e(0x571) + _0x2ca325('index.game.toaster.levelup') + '</div>\x20\x20\x20\x20<div\x20class=\x22toaster-levelup-close\x22>' + _0x2ca325('index.game.toaster.continue') + _0xe9734e(0x733));
                var _0x1332dc = this;
                this['Sl'][_0xe9734e(0x456)](_0xe9734e(0x7b2))[_0xe9734e(0x2c0)](function() {
                    _0x3392fc()['r']['Cd'](),
                    _0x1332dc['Ck']();
                });
            });
            return _0x20b128[_0xf63d9b(0x792)]['Bk'] = function() {
                return this['Sl'];
            }
            ,
            _0x20b128['prototype']['ji'] = function() {
                _0x3392fc()['r']['Ed']();
            }
            ,
            _0x20b128;
        }())
          , _0xefd538 = (function() {
            var _0x2875a5 = _0x5b9465
              , _0x170c74 = _0x22ee20(_0x297d1e, function() {
                var _0x5a146a = _0x2458;
                _0x297d1e['call'](this);
                var _0x144172 = this
                  , _0x57935b = _0x3392fc()
                  , _0xfdf100 = Date[_0x5a146a(0x61c)]() + '_' + Math['floor'](0x3e8 + 0x2327 * Math[_0x5a146a(0x7d2)]());
                this['Sl'] = $('<div\x20id=\x22' + _0xfdf100 + _0x5a146a(0x79f) + _0x4f20ed + _0x5a146a(0x451) + _0x2ca325(_0x5a146a(0x1ff))[_0x5a146a(0x665)]('\x20', '&nbsp;')[_0x5a146a(0x665)]('\x0a', '<br/>') + '</span>\x20\x20\x20\x20\x20\x20\x20\x20<a\x20class=\x22toaster-consent-accepted-link\x22\x20href=\x22/privacy-policy\x22>' + _0x2ca325(_0x5a146a(0x407)) + _0x5a146a(0x364) + _0x2ca325(_0x5a146a(0x3c6)) + _0x5a146a(0x733)),
                this['Tl'] = this['Sl'][_0x5a146a(0x456)](_0x5a146a(0x5a3)),
                this['Tl'][_0x5a146a(0x719)](),
                this['Tl']['click'](function() {
                    _0x57935b['r']['Cd'](),
                    _0x57935b['Y']() && _0x57935b['$'](!0x0, !0x0),
                    _0x144172['Ck']();
                });
            });
            return _0x170c74[_0x2875a5(0x792)]['Bk'] = function() {
                return this['Sl'];
            }
            ,
            _0x170c74['prototype']['ji'] = function() {
                var _0x15a50d = this
                  , _0x8a07a5 = _0x3392fc();
                _0x8a07a5['Y']() && !_0x8a07a5['Z']() ? (_0x8a07a5['r']['Hd'](),
                setTimeout(function() {
                    _0x15a50d['Tl']['fadeIn'](0x12c);
                }, 0x7d0)) : setTimeout(function() {
                    _0x15a50d['Ck']();
                }, 0x0);
            }
            ,
            _0x170c74;
        }())
          , _0x1d2a4a = {};
        _0x1d2a4a[_0x5b9465(0x400)] = {
            'Ma': _0x341617('aqnvgcpz05orkobh', atob(_0x5b9465(0x4e0))),
            'K': _0x341617(_0x5b9465(0x757), atob(_0x5b9465(0x718))),
            'ra': _0x171133(),
            'e': 0x4,
            'oa': !0x1,
            'qk': !0x0
        },
        _0x1d2a4a[_0x5b9465(0x637)] = {
            'Ma': _0x341617(_0x5b9465(0x461), atob(_0x5b9465(0x4e0))),
            'K': _0x341617(_0x5b9465(0x757), atob(_0x5b9465(0x718))),
            'ra': _0x171133(),
            'e': 0x4,
            'oa': !0x1,
            'qk': !0x1
        };
        var _0x25fccb = _0x1d2a4a[window['ENV']];
        _0x25fccb || (_0x25fccb = _0x1d2a4a[_0x5b9465(0x400)]),
        $(function() {
            var _0x45ef1d = _0x5b9465;
            FastClick[_0x45ef1d(0x3a6)](document[_0x45ef1d(0x349)]);
        }),
        addEventListener(_0x5b9465(0x2c7), function(_0x4d601b) {
            var _0x2f9901 = _0x5b9465;
            return _0x4d601b[_0x2f9901(0x584)](),
            _0x4d601b['stopPropagation'](),
            !0x1;
        }),
        _0x9024fe(_0x5b9465(0x3b5) + _0x15aa89 + _0x5b9465(0x44c), _0x5b9465(0x460), function() {
            var _0x3a1c8d = _0x5b9465;
            FB['init']({
                'appId': atob(_0x3a1c8d(0x22b)),
                'cookie': !0x0,
                'xfbml': !0x0,
                'status': !0x0,
                'version': _0x3a1c8d(0x80c)
            });
        }),
        _0x9024fe(_0x5b9465(0x32b), null, function() {
            var _0x4df63f = _0x5b9465;
            gapi['load'](_0x4df63f(0x436), function() {
                var _0x125ed6 = _0x4df63f;
                GoogleAuth = gapi[_0x125ed6(0x436)]['init']({
                    'client_id': atob('OTU5NDI1MTkyMTM4LXFqcTIzbDllMG9oOGxnZDJpY25ibHJiZmJsYXI0YTJmLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29t')
                });
            });
        }),
        _0x1ff066 = _0x3e4797(),
        _0x1ff066['v'](),
        $('#mm-menu-cont')[_0x5b9465(0x519)](_0x5b9465(0x5be), _0x5b9465(0x787)),
        theoKzObjects[_0x5b9465(0x7e0)] = !![];
        var _0x929fc9 = obtenerImagenPorSeleccion(localStorage[_0x5b9465(0x3b2)](_0x5b9465(0x25d)));
        _0x929fc9 && (anApp['q']['Cf'] = new PIXI[(_0x5b9465(0x52c))](anApp['q'][_0x5b9465(0x68a)](_0x929fc9)),
        console['log'](_0x5b9465(0x4e7), _0x929fc9));
        var _0xf72104 = function(_0x39a65) {
            var _0x8825ef = _0x5b9465;
            theoKzObjects[_0x8825ef(0x384)] && (_0x39a65['skinId'] = theoKzObjects['PropertyManager']['rh'],
            _0x39a65[_0x8825ef(0x778)] = theoKzObjects[_0x8825ef(0x384)]['sh'],
            _0x39a65['mouthId'] = theoKzObjects['PropertyManager']['th'],
            _0x39a65[_0x8825ef(0x218)] = theoKzObjects[_0x8825ef(0x384)]['uh'],
            _0x39a65[_0x8825ef(0x739)] = theoKzObjects['PropertyManager']['vh']);
        };
        !Number[_0x5b9465(0x792)][_0x5b9465(0x81c)] && (Number[_0x5b9465(0x792)][_0x5b9465(0x81c)] = function() {
            var _0x3ad6ed = _0x5b9465;
            return this['toString']()[_0x3ad6ed(0x707)](/\B(?=(\d{3})+(?!\d))/g, '.');
        }
        );
        !Number[_0x5b9465(0x792)][_0x5b9465(0x6c1)] && (Number[_0x5b9465(0x792)][_0x5b9465(0x6c1)] = function() {
            var _0x2a9793 = _0x5b9465;
            if (this >= 0xf4240)
                return (this / 0xf4240)['toFixed'](0x1) + _0x2a9793(0x659);
            else
                return this >= 0x186a0 ? (this / 0x3e8)[_0x2a9793(0x223)](0x0) + _0x2a9793(0x3bd) : this[_0x2a9793(0x81c)]();
        }
        );
        (( () => {
            var _0x263a4d = _0x5b9465;
            const _0xbb0e56 = _0x3392fc()
              , _0x5f3a09 = 0x64;
            let _0x243550 = performance[_0x263a4d(0x61c)]()
              , _0x5d0ffd = !![];
            document[_0x263a4d(0x345)](_0x263a4d(0x557), () => {
                var _0x1466a2 = _0x263a4d;
                _0x5d0ffd = !document[_0x1466a2(0x711)],
                _0x5d0ffd && (_0x243550 = performance[_0x1466a2(0x61c)]());
            }
            );
            function _0x4a4b66(_0x2c5c53) {
                var _0x172e4d = _0x263a4d;
                requestAnimationFrame(_0x4a4b66);
                if (!_0x5d0ffd)
                    return;
                let _0x1865d9 = _0x2c5c53 - _0x243550;
                if (_0x1865d9 > _0x5f3a09)
                    _0x1865d9 = _0x5f3a09;
                _0x243550 = _0x2c5c53,
                _0xbb0e56['Pa'](_0x1865d9),
                typeof _0xbb0e56[_0x172e4d(0x777)] === _0x172e4d(0x3c7) && _0xbb0e56[_0x172e4d(0x777)]();
            }
            requestAnimationFrame(_0x4a4b66);
        }
        )());
        var _0x3e078d = function() {
            var _0x100a9f = _0x5b9465
              , _0x33b599 = _0x5afe43[_0x100a9f(0x546)]()
              , _0x2e58f4 = _0x5afe43['height']()
              , _0x3d138c = _0x40e32a[_0x100a9f(0x74a)]()
              , _0x3f76ec = _0x40e32a[_0x100a9f(0x49e)]()
              , _0x10325f = _0x13ffbe[_0x100a9f(0x49e)]()
              , _0x3058b0 = _0x5fcca1[_0x100a9f(0x49e)]()
              , _0x57f4d7 = Math['min'](0x1, Math[_0x100a9f(0x794)]((_0x2e58f4 - _0x3058b0 - _0x10325f) / _0x3f76ec, _0x33b599 / _0x3d138c))
              , _0x514fa1 = _0x100a9f(0x656) + _0x57f4d7 + ')';
            _0x40e32a[_0x100a9f(0x519)]({
                '-webkit-transform': _0x514fa1,
                '-moz-transform': _0x514fa1,
                '-ms-transform': _0x514fa1,
                '-o-transform': _0x514fa1,
                'transform': _0x514fa1
            }),
            _0x3392fc()['Ra'](),
            window[_0x100a9f(0x78b)](0x0, 0x1);
        }
          , _0x5afe43 = $(_0x5b9465(0x349))
          , _0x40e32a = $(_0x5b9465(0x823))
          , _0x13ffbe = $(_0x5b9465(0x578))
          , _0x5fcca1 = $(_0x5b9465(0x4b4));
        _0x3e078d(),
        $(window)[_0x5b9465(0x7e7)](_0x3e078d);
    }());
});
function _0x10c9() {
    var _0x29783a = ['#user-icon', 'game', 'selectedFont', 'wssServer', 'keys', '#store-go-coins-button', 'ajax', '#store-buy-coins_125000', 'fondo2', 'skinId_A:\x20', '<input\x20type=\x22color\x22\x20id=\x22colorPicker\x22\x20/>', 'accessToken', 'customFormat', '<input\x20id=\x22', '.servers-container\x20>\x20div', 'documentElement', 'use\x20strict', '#mm-coins-box\x20.mm-coins-img', 'div[category=\x27', 'Error\x20fetching\x20server\x20data:', 'noAuras', 'offsetHeight', '<span\x20id=\x22help-icon\x22\x20class=\x22material-icons\x22\x20data-menu=\x22help-menu\x22>help_outline</span>', 'QmFzZVRleHR1cmU=', 'expires=', 'https://i.imgur.com/jXzoG5D.png', 'exception', ')\x20del\x20equipo\x20', 'abilityUnknown', '.servers-australia', '<input\x20type=\x22checkbox\x22\x20id=\x22toggleTop8\x22\x20/>', 'avatar', '?????\x20??????', 'info', 'MINIMAP\x20BORDER', '#store-buy-coins_1250', '.tab.material-button', 'Skins\x20privadas\x20desbloqueadas\x20para\x20el\x20usuario\x20', 'ID:\x20', 'set', '24hfRXrZ', '#teamColor', 'cachedTexture', 'Zoom\x20Speed', 'pop', 'mipmap', 'No\x20se\x20encontraron\x20skins\x20privadas\x20para\x20el\x20usuario\x20', '<input\x20type=\x22checkbox\x22\x20id=\x22toggleKillFeed\x22\x20/>', 'https://i.imgur.com/WqWsDfi.png', 'querySelectorAll', 'popup', 'toLowerCase', '<li><strong>❌\x20No\x20se\x20encontraron\x20puertas\x20abiertas.</strong></li>', '\x20FPS', '#mm-skin-next\x20svg', '<option\x20value=\x221\x22>', 'textContent', 'clipboard', 'opacity', '#wear-description-text', 'ZWORM\x20SETTINGS', 'https://i.imgur.com/Hg3sKn0.png', 'avatarImage', '\x27Courier\x20New\x27,\x20monospace', 'index.game.antiadblocker.continue', '230px', '#hotkeys-icon', 'match', 'mum-a.wormate.io', 'createElement', 'off', 'backgroundImage', '100%\x20200%', 'charCodeAt', '#profile-stat-totalTimeSpent', 'ZOOM\x20SPEED', 'parse', 'ComidaShadow', 'https://i.imgur.com/gvMlosm.png', '#chatInput', 'isCustom', '100%\x20100%', 'replace', 'Fj\x20(otros)', 'status', '.servers-singapur', '.servers-', 'getContext', '❌\x20Cerrado', 'Error\x20al\x20construir\x20la\x20URL\x20del\x20script\x20', '<input\x20type=\x22checkbox\x22\x20id=\x22settings-laserHS-switch\x22>', '<div\x20class=\x22settings-line\x22>', 'hidden', 'Servidor\x20', 'Top\x201\x20actualizado:', 'stringify', 'portion', 'guest', '\x22><img\x20src=\x22data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\x22><span>', 'd29ybWF0ZS1pb185NzB4MjUw', 'hide', '<option\x20value=\x226\x22>6</option>', 'avatarUrl', '#main-menu-view', 'timmap', '<input\x20id=\x22color_palet2\x22\x20type=\x22color\x22\x20value=\x22#01D9CC\x22>', 'skin', 'has', 'coords', 'BOOSTER\x20SIZE', '<option\x20value=\x227\x22>7</option>', '#avatarPreview', 'expToNext', 'X_x2', 'laser\x20de\x20cabeza', 'index.game.result.your', 'allstreamers', 'SHOW\x20FPS', '3.3.1', 'assign', 'imgSrc', '#sectores-key', 'toUpperCase', '<span\x20id=\x22hotkeys-icon\x22\x20class=\x22material-icons\x22\x20data-menu=\x22hotkeys-menu\x22>keyboard</span>', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22server-region\x22>', 'EEUU', '</div></div>', 'cloneNode', 'changeBackground', ';\x20path=/', 'skinArrayDict', '.connect-button', 'hatId', 'serverName', '\x20at\x20', '#leaders-button-highscore', 'X_xxlupa', '<div\x20style=\x22font-size:14px;\x20font-weight:bold;\x20text-align:center;\x20margin-bottom:8px;\x22>🏆\x20Top\x2010\x20🏆</div><hr\x20style=\x22border-color:#444;\x22>', 'SHOW\x20KILL\x20FEED', 'AudioState', 'head', 'Sky\x20Purp', '&hatId=', '0D0400', '#adbl-4', 'change', 'util.time.min', 'Blue\x20Light', 'inline-block', 'outerWidth', 'Loading...', 'mousedown', '.value', '#FF4500', 'addTest', 'authResponse', '\x20changed\x20to', 'fondo3', 'bind', 'OPEN', 'origin', '#mm-action-buttons', 'ltmolilci1iurq1i', '100px', '\x20coincide\x20con\x20un\x20ID\x20almacenado\x20en\x20la\x20base\x20de\x20datos.', 'ui-tab-active', '#settings-laserHS-switch', 'rs:lo', '?????????', '<select\x20id=\x22zwtop\x22>', 'VGV4dHVyZQ==', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22switchServerSource\x22\x20style=\x22position:\x20absolute;\x20top:\x20-5px;\x20left:\x20200px;\x20width:\x20200px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22toggleServerSource\x22\x20style=\x22margin-bottom:\x2010px;\x20padding:\x206px\x2012px;\x20background:\x20#252535;\x20color:\x20white;\x20border:\x201px\x20solid;\x20border-radius:\x201px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🔄\x20Switch\x20to\x20TimMap\x20Servers\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22containerDoorsServers\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22optionSelect\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22sao-a.wormate.io\x22>sao-a</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22mum-a.wormate.io\x22>mum-a</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22dxb-a.wormate.io\x22>dxb-a</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22fra-e.wormate.io\x22>fra-e</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22fra-d.wormate.io\x22>fra-d</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22fra-c.wormate.io\x22>fra-c</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22fra-b.wormate.io\x22>fra-b</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22waw-a.wormate.io\x22>waw-a</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22dal-b.wormate.io\x22>dal-b</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22vin-a.wormate.io\x22>vin-a</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22dal-a.wormate.io\x22>dal-a</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22sao-c.wormate.io\x22>sao-c</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22bhs-a.wormate.io\x22>bhs-a</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22sao-b.wormate.io\x22>sao-b</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22hil-a.wormate.io\x22>hil-a</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22syd-a.wormate.io\x22>syd-a</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22sin-g.wormate.io\x22>sin-g</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22gra-a.wormate.io\x22>gra-a</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22sin-i.wormate.io\x22>sin-i</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22sin-h.wormate.io\x22>sin-h</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22sin-f.wormate.io\x22>sin-f</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22sin-c.wormate.io\x22>sin-c</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22sin-b.wormate.io\x22>sin-b</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22sin-a.wormate.io\x22>sin-a</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22tok-b.wormate.io\x22>tok-b</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22sin-d.wormate.io\x22>sin-d</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22sin-e.wormate.io\x22>sin-e</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22numberInput\x22\x20min=\x220\x22\x20placeholder=\x22ROOM\x20NUMBER\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22connectButton\x22>CONNECT</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20', '#leaders-button-level', 'getChildByName', '#resultadoPuertas', 'a2_', '<span\x20class=\x22tooltip\x22\x20id=\x22tooltipTop8\x22\x20style=\x22display:\x20none;\x22>If\x20you\x20enable\x20this\x20option,\x20you\x20will\x20see\x20the\x20list\x20of\x20the\x20top\x208\x20players.</span>', '/start?gameMode=', 'after', 'sectors', ';\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20class=\x22server-table\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>On/Off</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Name</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Región</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Top\x201</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Streamer</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Doors</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody></tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'BOTTOM_LEFT', 'bindEvents', ':</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22sound-hs\x22\x20class=\x22sounds-input\x22\x20placeholder=\x22Enter\x20sound\x20URL\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22input-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22name\x22>', 'ID\x20copiado:\x20', 'currentTime', '/pub/wuid/', '#profile-stat-bestSurvivalTime', 'clientY', 'shadowColor', '<option\x20value=\x2210\x22>', 'nickname', 'https://discord.gg/sJ5R95Rc6Z', 'destroyed', 'draw', 'eyesId', 'https://asserts.wormworld.io/backgrounds/bkgnd6.png', '#popup-logout', 'BACKGROUND\x20SOLID', 'webkitExitFullscreen', 'event', '#user-section', 'endFill', 'Segoe\x20UI,\x20sans-serif', 'ancho\x20de\x20la\x20comida', 'gg_107696732696574095850', 'resource', 'readyState', 'getElementsByTagName', '#idkopyala', 'block', 'addAsyncTest', 'Cell:', '(unknown)', 'scrollTo', '??????', 'this\x20is\x20null\x20or\x20not\x20defined', 'removeItem', 'Nflex', 'server', 'https://cdn.socket.io/4.4.1/socket.io.min.js', 'prototype', 'portionUnknown', 'min', 'playerX', '#please-wait-view', 'TOP_LEFT', '.v5', 'BOTTOM', 'TIMER\x20SPEED\x20AND\x20ZIGZAG', 'getPower', '#profile-avatar', 'musicEnabled', 'list', '\x22\x20class=\x22toaster\x20toaster-consent-accepted\x22>\x20\x20\x20\x20<img\x20class=\x22toaster-consent-accepted-logo\x22\x20src=\x22', '36ZjVyZq', 'Conectando\x20a:', 'teamCode', 'es_ES', '<option\x20value=\x224\x22>', '#mm-skin-canv', '.key-input', 'dataType', 'binaryType', 'Escape', 'FFFFFF', '30SuKXGB', '{0}', '.server-row', 'nonbuyableCause', 'disposing\x20prev\x20texture:\x20', 'right', 'nombre:\x20', '.toaster-levelup-close', 'glassesVariantArray', 'exitFullscreen', 'push', 'enableClasses', 'selectedBackground', 'chngPersonsSkins', 'MTY', '</div>', 'dataCon', '</span><span>', 'ActiveX2', 'smoothCamera', 'updatePacketInterval', '#popup-menu-coins-val', '.options-list\x20>\x20div[category=\x22theme\x22]', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22premium-badge\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20⭐\x20Premium\x20⭐\x20<br>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Expire:\x20<span\x20id=\x22premium-expiration\x22>', 'gg_', 'gray', 'sgp1', 'onDragStart', 'playerDeath', 'Error\x20al\x20procesar\x20el\x20mensaje:', 'unshift', '#tooltipKillFeed', 'Users', '#mm-store', '<span\x20class=\x22names_settings\x22>\x20:\x20Show\x20All\x20Power-Ups</span>', 'FLEXIBLE_TYPE', 'Kw==', 'aipC', 'initialState', 'random', '<div\x20class=\x22settings-icons\x22>', 'https://cdnjs.cloudflare.com/ajax/libs/jquery-minicolors/2.3.6/jquery.minicolors.min.js', 'radius', 'tint', '.server-top1', '#sound-hs', 'div[category=\x27theme\x27]', 'https://fonts.googleapis.com/icon?family=Material+Icons', '<option\x20value=\x227\x22>', 'gg_110413852592088957484', '<input\x20type=\x22text\x22\x20id=\x22teamCodeInput\x22\x20placeholder=\x22Enter\x20team\x20code\x22\x20/>', '#preview_teamColor', '\x22\x20value=\x22', 'loading', 'logo', '\x20ms</strong>', 'Dj\x20(boca)', 'TOP_RIGHT', 'category', 'zoomSpeed', 'resize', 'Singapur', '/uk', 'X2_TYPE', 'defer', 'Incognito', '#zwplayagain', 'inputReplaceSkin', '.v4', 'Socket\x20closed', 'top1Point', 'blanco', 'gsi:s', 'Premium', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22box\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress-bar\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22fill\x22\x20style=\x22width:\x20', '\x20ha\x20enviado\x20un\x20mensaje:\x20', 'index.game.popup.menu.coins.tab', 'level', 'arc', '#settings-show-names-switch', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20id=\x22', '76232xezPRO', '#wear-buy-button', 'teamColor', '.Worm_cerca', '⏳\x20Espera\x20antes\x20de\x20enviar\x20otro\x20mensaje...', 'latency', '\x20TYPE:\x20', 'VISIBLE\x20SPEED\x20AND\x20ZIGZAG', 'height', '<strong>🏆\x20Best\x20server:\x20', '#adbl-continue\x20span', '#store-buy-coins_3250', 'getElementById', '?????\x20???????????', '<option\x20value=\x224\x22>4</option>', 'type', 'v8.0', 'noSkin', 'load', 'O2dsX1Bvc2l0aW9uPXZlYzQoKA==', 'nombre2', 'CLOSING', 'canvas', '_init', '#settings-menu', 'onerror', '#leaders-button-kills', 'scale', 'shift', '47643imdzFl', 'no-js(\x5cs|$)', 'fps', 'dotFormat', 'scrollHeight', 'Loading.', 'dynamic', 'laserHS', 'split', '#social-buttons', '#stretch-box', 'teamsContainer', 'sonido\x20link\x2010cabezas', 'anApp', 'colorBorde', 'sin-f.wormate.io', 'eyesDict', '#wear-view', 'idReplaceSkin', 'ActiveX5', 'https://asserts.wormworld.io/backgrounds/bg_sky_2.png', 'Enter', 'indexOf', 'kills', 'https://i.imgur.com/K7UPjJJ.jpg', '#clossed_Setings', 'caches', '[Zworm\x20OWNER]', 'getImageData', 'Ej\x20(gorra?)', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-', 'buttonMode', '#FFA500', 'El\x20ID\x20generado\x20no\x20coincide\x20con\x20ning�n\x20ID\x20almacenado\x20en\x20la\x20base\x20de\x20datos.', 'https://i.imgur.com/4ccZ556.png', 'undefined', '#adbl-3', 'Sprite', '#mm-coins-box', '#mm-player-exp-val', '<a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;\x20justify-content:space-between;\x20margin:\x204px\x200;\x20', 'hitArea', 'xxx2', '<option\x20value=\x225\x22>', 'close', 'https://i.imgur.com/LvJ1RxC.png', 'sin-e.wormate.io', 'mouseY', 'insertAdjacentHTML', 'focus', 'code', 'laser', 'https://i.imgur.com/mHp0ozi.png', '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>', 'return\x20PIXI;', 'style', 'xXxLupaZ', 'region', ':nth-child(', '\x22\x20data-country=\x22', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22name\x22\x20style=\x22', '#chat-history', 'bold', 'text/javascript', 'keyMove', 'killFeed', 'value', 'R3JhcGhpY3M=', 'add', 'WormWorld', 'game-wrap', 'https://asserts.wormworld.io/backgrounds/bkgnd8.png', 'byHighScore', 'floor', 'pointerup', 'setTime', '#00B2ED', '#delete-account-yes', '#settings-backgroundSolid-switch', 'replaceWith', '..\x205\x20..', 'index.game.popup.menu.store.tab', 'Revisando\x20script\x20', 'removeChild', 'key', '.options-list.ps\x20div[category=\x22cursor\x22]', 'not', 'clear', 'addAttribute', '#CCCF81', '\x20🌎)', '..\x203\x20..', '\x20</span>', 'VGV4dA==', 'size', 'WormSkinData', '<i\x20class=\x22material-icons\x22>fullscreen</i>', 'WRAP_MODES', 'containerImgTest', 'No\x20hay\x20jugadores\x20disponibles\x20para\x20actualizar\x20el\x20top\x201.', 'fi_aw', 'teams', '_text', 'id_game', 'counter', 'https://deltav4.gitlab.io/v7/assets/cursors/cursor_', 'hardwareConcurrency', '.v6', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><img\x20src=\x22', '\x27,\x20change\x20in\x20(ms)\x20', '#settings-music-enabled-switch', '\x22\x20data-option=\x22', 'hsTextColor', '</span><span><img\x20src=\x22', 'remove', '#delete-account-view', 'gdprConsent', 'https://swykz.theoxt.com/api/users/register_update_player.php', 'search', 'isConsentGiven', 'appendChild', '#popup-withdraw-consent', 'id_user', 'aliases', 'querySelector', '??????\x20???', 'facebook', 'background-color', 'minicolors', 'index.game.toaster.consent.text', 'userId', 'wsUrl', 'Giro\x20deactivated', 'reload', 'SECTORS', 'getRegistrations', 'fr_FR', 'https://asserts.wormworld.io/backgrounds/arena02.png', '\x22><img\x20src=\x22data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\x22><span>', '#popup-menu-back', '\x22\x20data-img=\x22', 'distance', 'hatDict', 'hex', '\x20☠️', '#mm-action-play', 'chngBotSkins', '#store-locked-bar-text', 'google', 'minimapTeamcod', 'location', '#user_config', 'input', '#idcopiar', 'glassesId', 'setInt16', 'afterbegin', 'Kg==', '<span\x20class=\x22names_settings\x22>\x20:\x20Show\x20Speed&Zigzag</span>', 'O3VuaWZvcm0gdmVjNCA=', 'addChild', 'https://asserts.wormworld.io/backgrounds/bkgnd10.png', 'https://i.imgur.com/NKAyYa8.png', 'keyCode', '\x22\x20class=\x22toaster\x20toaster-levelup\x22>\x20\x20\x20\x20<img\x20class=\x22toaster-levelup-img\x22\x20alt=\x22Wormate\x20Level\x20Up\x20Star\x22\x20src=\x22/images/level-star.svg\x22\x20/>\x20\x20\x20\x20<div\x20class=\x22toaster-levelup-val\x22>', 'toFixed', '#profile-stat-headshots', '12px', 'websockets', 'Valor\x20no\x20v�lido,\x20se\x20utilizar�\x20una\x20imagen\x20por\x20defecto.', '\x22\x20class=\x22toaster\x20toaster-coins\x22>\x20\x20\x20\x20<img\x20class=\x22toaster-coins-img\x22\x20alt=\x22Wormate\x20Coin\x22\x20src=\x22/images/coin_320.png\x22\x20/>\x20\x20\x20\x20<div\x20class=\x22toaster-coins-val\x22>+', '<div\x20id=\x22display_color\x22>', 'WLp', 'ODYxOTI2ODUwNjE5MDUx', '\x22\x20style=\x22background-color:\x20', '#f97a1d', '#giro-key', '.tooltip', '#popup-login-gg', 'deleteDatabase', 'keypress', '#results-view', 'format', '\x20/\x20', '#settings-sfx-enabled-switch', 'index.game.antiadblocker.msg4', '\x22></div>', 'initialize', 'signIn', 'blur', '1000', 'Current\x20track\x20\x27', 'cHJlY2lzaW9uIGhpZ2hwIGZsb2F0O3ZhcnlpbmcgdmVjMiA=', '<canvas\x20id=\x22background-canvas\x22></canvas>', 'backgroundSolid', '\x20ha\x20muerto.', 'laserHSkey-key', 'a1_', 'pivot', 'SkinVisible(For\x20public)', '#game-canvas', 'fontFamily', 'rs:gg', 'gsi:then', 'revision', 'apply', 'streamers', 'wssCode', 'render', 'values', 'stylesheet', '<input\x20id=\x22color_palet\x22\x20type=\x22color\x22\x20value=\x22#00243E\x22>', 'Distance:', 'mouseout', 'prime', 'mmm', '#popup-view', 'aura\x20del\x20potenciador', 'showTeamList', 'some', 'string', 'pointermove', '#color_paletRGB,\x20#color_palet,\x20#color_palet2', 'zw-background', 'gsi:c', '),\x20auto', 'white', 'nombre', 'PotenciadorAura', 'Error\x20al\x20cargar\x20los\x20servidores:', 'image', '#final-place', 'xXx2', 'active', 'colorFondo', 'https://wormate.io/images/og-share-img-new.jpg', 'fondo\x20Solido', 'propertyList', 'sin', 'No\x20hay\x20streamers\x20online.', 'Class\x20extends\x20value\x20', 'lowercase', 'outerRadius', 'settings', 'msExitFullscreen', 'indexedDB', 'Disable\x20Sound', 'Mensaje\x20enviado\x20por\x20', '<div\x20class=\x22table-row\x22><span>', 'description', '#toaster-view', 'adblock', ';\x22\x20onclick=\x22openColorPanel(\x27', '#connectButton', 'Loading..', 'angleBetween', 'copiar', 'https://xd.com', 'util.time.sec', 'X_x5', '???????', '\x20recibido\x20por\x20el\x20jugador\x20', 'Score', '110px', 'onopen', 'wss://', '???', 'startsWith', '50%', 'data-opacity', 'putImageData', 'WHITE', 'toast-top-center', '#fff', 'sectores', '.servers-germania', 'index.game.popup.menu.consent.tab', 'deltaY', 'data', '\x20\x20\x20', 'V1JBUF9NT0RFUw==', 'index.game.main.menu.unlockSkins.comeAndPlay', 'then', 'sessionsPlayed', 'consented', 'create', 'prepend', 'size\x20of\x20food', '0xffffff', '&glassesId=', 'fade\x20IN\x20', '#FFFFFF', 'aradian', 'pause', 'Error\x20al\x20cargar\x20servidores\x20TimMap:', 'inner', 'url', '#mm-player-username', 'emoji', 'start\x20pSC:\x20', 'error', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22server-status\x22\x20data-score=\x22', 'bottom', 'fontStyle', '#profile-view', '#final-replay', 'La\x20fecha\x20de\x20skins\x20expiración\x20es\x20válida.', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22connect-button\x22\x20data-server=\x22', 'isIPInEEA', 'account_type', 'aipAABS', 'titleRec3', 'filter', 'portionDict', '????\x20???\x2010\x20?????', 'pressed', 'consent_state_2', 'blendMode', '#top8List', 'addClass', 'wormate.io', '<span\x20id=\x22user-icon\x22\x20class=\x22material-icons\x22\x20data-menu=\x22user-menu\x22>account_circle</span>', 'click', 'onload', 'FOOD\x20SHADOW', 'zoom', 'soundTuto2', 'text/css', 'fadeIn', 'contextmenu', 'SHOW\x20TEAM\x20LIST', 'lineStyle', 'visiblePowersAll', 'linear', '5000', '#00FF00', 'https://i.imgur.com/UKIZZmr.png', '<span\x20id=\x22notifications-icon\x22\x20class=\x22material-icons\x22\x20data-menu=\x22notifications-menu\x22>notifications</span>', 's,\x20', '8px', 'Blue', 'reduce', 'fadeOut', '#withdraw-consent-yes', 'wss', 'color\x20del\x20juego', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'u4_', 'toUTCString', '#popup-login-fb', '<div\x20class=\x22settings-checkbox\x22>', '0000', 'getAuthResponse', 'waw-a.wormate.io', 'Graphics', 'index.game.main.menu.unlockSkins.share', 'borderColorGroup', 'soundTuto4', 'R2VvbWV0cnk=', 'file', 'fade\x20OUT\x20', 'ActiveEmoji', 'I18N_LANG', '#userid', 'https://asserts.wormworld.io/backgrounds/bg_sky_1.png', 'Socket\x20error', 'client_ID', 'GAME\x20JS\x202023\x20BY\x20SWYKZ', 'WebSocket', 'host', 'index.game.popup.menu.wear.tab', 'cookie', 'WearSkinData', 'warn', 'rgba(30,\x2030,\x2040,\x200.95)', 'KeyRespawn', '.mm-merchant-cont', 'data-inline', '#numberInput', 'js$2', 'Web\x20SQL\x20no\x20se\x20puede\x20eliminar\x20automáticamente\x20desde\x20JavaScript.', 'lightblue', 'atan', '#laserHSkey-key', '\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', '#store-view-next', '<div\x20id=\x22hotkeys-menu\x22\x20class=\x22menu\x22>Configuración\x20de\x20teclas\x20rápidas</div>', '#sound-10hs', 'red', 'espacio', '#firefly-container', '_request', 'Arena\x203', 'antiadblocker', '\x22\x20\x20\x20\x20style=\x22margin-left:\x20100px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>', 'Arial,\x20sans-serif', 'dal-a.wormate.io', '<i\x20class=\x22material-icons\x22>store</i>', 'symbol', 'aHR0cHM6Ly9nYXRld2F5Lndvcm1hdGUuaW8=', 'I18N_MESSAGES', '<i\x20class=\x22material-icons\x22>leaderboard</i>', '#adbl-2', '#final-continue', 'background-position', '#tooltipTop8', 'xxx5', '<option\x20value=\x2213\x22>', 'firefly', 'removeClass', 'text', 'mouthDict', 'getAttribute', 'https://asserts.wormworld.io/backgrounds/bkgnd9.png', '\x22\x20alt=\x22User\x20Icon\x22\x20style=\x22width:\x2020px;\x20height:\x2020px;\x20margin-right:\x205px;\x20border-radius:\x2050%;\x22>', 'uk_UA', 'position', 'mouseleave', 'soundTuto3', '#mm-zw-settings', 'index.game.popup.menu.store.locked', '<option\x20value=\x222\x22>', '#toggleTop8', '<img\x20src=\x22', 'fail', 'colorDict', 'getCurrentPosition', 'dA:\x20NO', '#wear-mouths-button', '//apis.google.com/js/api:client.js', '/wormy', '#avatarUrl', 'Conectado\x20al\x20servidor\x20WebSocket', 'skinId', 'DataReader\x20error:\x20', 'fill', '.hotkey-container', 'chain', 'showAnimationHeadshot', 'hover', 'ptc', 'sort', 'get', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20', 'tuNewScore', 'keydown', 'atan2', '0\x201px\x201px\x200\x20rgba(0,0,0,.5)', '.v1', '<span\x20id=\x22zw-settings-version\x22\x20class=\x22settings-line\x22></span>', 'playerDisconnect', 'O3VuaWZvcm0gdmVjMiA=', 'SIZE\x20FOOD', 'download\x20sounds', 'Premium\x20Feature', 'addEventListener', '\x20ms', '<div\x20id=\x22user-menu\x22\x20class=\x22menu\x22>Opciones\x20de\x20usuario</div>', 'getTime', 'body', '<input\x20type=\x22checkbox\x22\x20id=\x22settings-Speed_ZigZag-switch\x22>', '\x0a\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Preloader\x20en\x20pantalla\x20completa\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20.fixed-background\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20black;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2099999;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20opacity\x200.5s\x20ease-out;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Imagen\x20de\x20fondo\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20.background-image\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20url(\x27https://i.imgur.com/oXntzBc.jpeg\x27)\x20no-repeat\x20center\x20center/cover;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-size:\x20cover;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-position:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200.3;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20blur(5px)\x20opacity(1.5);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Estilos\x20del\x20logo\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20200px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20pulse\x204s\x20infinite;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2070px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Animación\x20de\x20pulso\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20pulse\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200%\x20{\x20transform:\x20scale(2);\x20opacity:\x201;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2050%\x20{\x20transform:\x20scale(2.1);\x20opacity:\x200.8;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20100%\x20{\x20transform:\x20scale(2);\x20opacity:\x201;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Barra\x20de\x20carga\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20.progress-bar-container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(255,\x20255,\x20255,\x200.2);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.progress-bar\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x200%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#252535;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20width\x202s\x20linear;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20GIF\x20de\x20rotación\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20.rotate-gif\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x20/*\x20Oculto\x20por\x20defecto\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20150px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Corazones\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20.hearts\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translate(-50%,\x20-100%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.one,\x20.two,\x20.three,\x20.four,\x20.five\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#252535;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20inline-block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20rotate(-45deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.one:before,\x20.one:after,\x0a\x20\x20\x20\x20\x20\x20\x20\x20.two:before,\x20.two:after,\x0a\x20\x20\x20\x20\x20\x20\x20\x20.three:before,\x20.three:after,\x0a\x20\x20\x20\x20\x20\x20\x20\x20.four:before,\x20.four:after,\x0a\x20\x20\x20\x20\x20\x20\x20\x20.five:before,\x20.five:after\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20content:\x20\x22\x22;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#252535;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.one:before,\x20.two:before,\x20.three:before,\x20.four:before,\x20.five:before\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x20-5px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.one:after,\x20.two:after,\x20.three:after,\x20.four:after,\x20.five:after\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Animación\x20de\x20los\x20corazones\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20heart\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateY(0)\x20rotate(-45deg)\x20scale(0.3);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20100%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateY(-150px)\x20rotate(-45deg)\x20scale(1.3);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.one\x20{\x20animation:\x20heart\x201s\x20ease-out\x20infinite;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.two\x20{\x20animation:\x20heart\x202s\x20ease-out\x20infinite;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.three\x20{\x20animation:\x20heart\x201.5s\x20ease-out\x20infinite;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.four\x20{\x20animation:\x20heart\x202.3s\x20ease-out\x20infinite;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.five\x20{\x20animation:\x20heart\x201.7s\x20ease-out\x20infinite;\x20}\x0a\x20\x20\x20\x20</style>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22fixed-background\x22\x20id=\x22loading-screen\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22background-image\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://i.imgur.com/jXzoG5D.png\x22\x20alt=\x22server\x20logo\x22\x20class=\x22logo\x22>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hearts\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22one\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22two\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22three\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22four\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22five\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress-bar-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22progress-bar\x22\x20id=\x22progress-bar\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20GIF\x20de\x20rotación\x20para\x20móviles\x20en\x20vertical\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://i.imgur.com/CVpwetK.gif\x22\x20alt=\x22Rotar\x20el\x20dispositivo\x22\x20class=\x22rotate-gif\x22\x20id=\x22rotate-gif\x22>\x0a\x20\x20\x20\x20</div>\x0a', '#store-go-wear-button', 'fontPreview', 'tfc', 'index.game.floating.wellDone', '.overlay-2', 'mm-params-nickname', 'sonido\x20link\x20cabeza', 'ping', 'ActiveX10', 'copy', 'day', 'cachedScaleY', 'regDate', '????\x20???\x20??????', 'ru_RU', '<option\x20value=\x220\x22>', 'attr', 'data-country-name', 'toggle', 'laser\x20color', 'sin-h.wormate.io', 'index.game.popup.menu.leaders.tab', 'onOpen', '</span></div>', '</a>\x20\x20\x20\x20</div>\x20\x20\x20\x20<div\x20class=\x22toaster-consent-close\x22>', '=;expires=', '<option\x20value=\x223\x22>3</option>', '#settings-notAbilityAll-switch', 'round', 'clientX', 'loading\x20advertisement', 'while\x20(true)\x20{}', 'El\x20ID\x20', 'options', 'Cursor\x20', 'https://i.imgur.com/DbWbUxD.png', 'openDatabase', 'fadeTo', '#settings-interactive-switch', 'fondo4', 'Arena\x201', '#store-view', '/buyProperty?id=', 'checked', 'Sky\x20Write', 'abilityDict', '<span\x20class=\x22names_settings\x22\x20id=\x22colorLaser\x22>\x20', 'progress-bar', 'VELOCITY_TYPE', '#profile-experience-val', 'stateObject', '.option.toggle[data-option=\x27backgroundSolid\x27]\x20.box', 'Arena\x204', '.v0', 'val', 'index.game.social.shareResult.caption', 'PropertyManager', '<option\x20value=\x2214\x22>', 'clientsSkinsActivos', 'innerScale', 'Vacío', '#settings-sectores-switch', 'false', 'mouseX', 'textDict', 'empty', 'GET', 'https://asserts.wormworld.io/backgrounds/arena01.png', '000', '#noSkin-key', 'substring', '.server-status', '<span\x20class=\x22tooltip\x22>', '#loading-worm-b', 'default', 'forEach', 'gsi:l', 'url(', 'send', 'log', '.ui-tab', 'v1_', 'color\x20del\x20laser', '#FF0000', 'map', 'static', '🔄\x20Switch\x20to\x20WormWorld\x20Servers', 'byLevel', '??\x20?????????????', 'dA:\x20OK', 'attach', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22option\x20toggle\x20', 'headShots', 'xxxLupatype', 'urlRequest:\x20', 'nonbuyable', 'restart-key', 'zIndex', 'BOTTOM_RIGHT', '..\x209\x20..', 'div', 'soundTuto1', 'getItem', '\x22\x20min=\x22', 'interactiveChildren', '//connect.facebook.net/', 'timerSpZg', 'ServerName', 'sectores-key', 'resolution', 'testSkinMod', 'MzI', 'coins_1250', 'k🍬', 'sin-c.wormate.io', 'unlockSkinsPrivate\x20ya\x20fue\x20ejecutada\x20anteriormente.', 'MOUSE\x20DELAY', '#store-buy-coins_50000', '??????\x203', '/images/guest-avatar-xmas2022.png', 'u5_', 'colorJuego', 'index.game.toaster.consent.iAccept', 'function', 'save\x20gm:\x20', 'AURA\x20THE\x20BOOSTER', 'shadowOffsetX', 'sin-d.wormate.io', 'Enable\x20Sound', 'matches', '#wear-locked-bar-text', 'eat_animation', 'index.game.social.shareResult.messGood', 'HTTP\x20error!\x20Status:\x20', 'Verdana,\x20sans-serif', '#avatarImage', 'O2F0dHJpYnV0ZSB2ZWMyIA==', '\x22\x20height=\x2243\x22\x20width=\x22180\x22\x20/>', '\x0a🔍\x20Probando\x20servidores\x20Wormate.io\x20(puerto\x20', '⏱️\x20Timeout', '<div\x20class=\x22container\x22>', 'https://swykz.theoxt.com/api/users/checkSubscriptionExpired.php', 'bhs-a.wormate.io', 'visible', 'QkxFTkRfTU9ERVM=', 'O3VuaWZvcm0gbWF0MyA=', '#mm-player-info', '<option\x20value=\x2210\x22>10</option>', 'premium', 'class', 'players', '#settings5dolars', '..\x202\x20..', ';\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22server-name\x22>', 'skinUnknown', 'isArray', '#mm-player-exp-bar', 'onmessage', 'body,\x20button,\x20input,\x20a,\x20textarea,\x20select,\x20div,\x20span,\x20p', 'cHJvamVjdGlvbk1hdHJpeA==', 'top_right', 'pointerdown', 'cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7YXR0cmlidXRlIHZlYzIg', '#final-share-fb', 'fondos', '#withdraw-consent-view', 'If\x20you\x20enable\x20this\x20option,\x20you\x20will\x20see\x20the\x20list\x20of\x20kills\x20in\x20real\x20time.', 'ComidaSize', '300', '&eyesId=', 'closest', 'POST', 'debu', 'coins_3250', '#hotkeys-section', 'mouthId', '.box', '#707070', 'aipAABC', 'clientesActivos', 'main', 'source', '/getUserData', 'team_2', '⚠️\x20Textura\x20inválida\x20o\x20sin\x20baseTexture.', 'border-color', 'Solid\x20background', 'index.game.toaster.consent.link', 'month', '#noAuras-key', 'cambio-skin2', 'room', 'giro', 'AbilitySkinData', 'food\x20shine', 'PortionSkinData', '.profile-info', 'hypot', 'Container', 'CHANGE\x20SKINS\x20TO\x20Z\x20WORM', '#highscore-table', 'loop', 'className', 'dead', 'Error\x20enviando\x20mensaje:', '#mm-skin-prev', '</option>', 'msRequestFullscreen', 'angle', '#settings-view', 'from', 'geolocation', 'play', 'innerHeight', 'velocidad', 'eventoPrincipal', 'coins', '#settings-Speed_ZigZag-switch', 'URL\x20decodificada:', '#congrats-bg', 'connected', 'https://i.imgur.com/VPkrI9l.png', 'fra-b.wormate.io', 'https://asserts.wormworld.io/backgrounds/bkgnd0.png', '<option\x20value=\x228\x22>8</option>', '#buy-premium', 'totalPlayTimeSec', 'index.game.popup.menu.login.tab', 'UElYSQ==', 'vin-a.wormate.io', 'wormExplot-key', 'Name', 'abs', '<span\x20id=\x22zw-settings-id\x22\x20class=\x22settings-label\x22>ID:\x20</span>', 'auth2', 'username', '#mm-params-game-mode', 'https://i.imgur.com/IqQGK58.png', '/pub/leaders', 'join', 'trace', 'setAttribute', 'center', 'console', 'Canada', 'svg', 'Load\x20sPN:\x20', 'innerRadius', 'mouthVariantArray', 'return\x20(function()\x20', 'comidax2', '.servers-granbretana', 'dataRoom', 'data-format', 'onwheel', 'createElementNS', '/sdk.js', 'anchor', '#store-buy-button', '<span\x20class=\x22settings-label\x22>You\x20Color\x20Map:\x20</span>', 'html', '\x22\x20alt=\x22Wormate.io\x20logo\x22/>\x20\x20\x20\x20<div\x20class=\x22toaster-consent-accepted-container\x22>\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22toaster-consent-accepted-text\x22>', '0\x200\x2010px\x20rgba(0,0,0,0.5)', 'killTextColorGroup', 'moveTo', 'animationHeadshot', 'find', '#mm-params-nickname', 'MLb', '<input\x20style=\x22width:\x2060px\x22\x20type=\x22text\x22\x20name=\x22inputReplaceSkin\x22\x20id=\x22inputReplaceSkin\x22\x20value=\x2235\x22\x20maxlength=\x224\x22\x20onchange=\x22setIdReplaceSkin(this)\x22>', 'game\x20color', 'FF0000', 'delete', 'lineTo', 'hatVariantArray', '#mm-action-login', 'facebook-jssdk', 'aqnvgcpz05orkobh', '1eaom01c3pxu9wd3', 'https://i.imgur.com/ZFifUoX.png', 'wss://zworm.xyz:9800', '#adbl-continue', 'sortableChildren', 'EYES', 'error-view', 'Avatar', '�Coincidencia\x20encontrada!\x20El\x20script\x20proviene\x20de\x20la\x20fuente\x20correcta.', '#profile-username', 'fileSize', 'HS\x20TEXT', '.loading-logo', 'https://i.imgur.com/9ui2KwE.png', 'conteiner', 'base', 'async', '<div\x20id=\x22final-replay\x22>Replay</div>', 'data-letterCase', 'userAgent', 'index.game.result.title', 'power\x20up\x20glow', 'selectSala', '<select\x20id=\x22arkaplan\x22>', '<span\x20class=\x22names_settings\x22\x20id=\x22sectores\x22>\x20', 'VISIBLE\x20ALL\x20POWER\x20UPS', '.server-table\x20tbody', 'index.game.result.placeInBoard', '<div\x20class=\x22icon-selector\x22></div>', 'O3ZhcnlpbmcgdmVjMiA=', '#login-view', '#wear-view-prev', 'UkVQRUFU', '<div><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20version=\x221.1\x22\x20x=\x220\x22\x20y=\x220\x22\x20viewBox=\x220\x200\x20456\x20456\x22\x20xml:space=\x22preserve\x22><rect\x20x=\x220\x22\x20y=\x220\x22\x20width=\x22456\x22\x20height=\x22456\x22\x20fill=\x22#F7941D\x22/><path\x20d=\x22M242.7\x20456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9\x2035.6-79.5\x2079.5-79.5h62v64.6h-44.4c-13.9\x200-25.3\x2011.3-25.3\x2025.3v50h68.5l-9.5\x2071.9h-59.1V456z\x22\x20fill=\x22#fff\x22/></svg><span>', '#222', 'children', 'pageY', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20', '#markup-wrap', 'color', 'turn\x20up\x20sound', '#background-canvas', '#restart-key', '\x22\x20class=\x22streamer-image\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><button\x20class=\x22btn-check-ports\x22>📡📶</button></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'removeChildren', '.description-text', '</span>', 'ARENA', 'flexx', '#ff0999', 'cursor-box\x20icon-selector__item', 'gger', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22sound-button\x22\x20onclick=\x22window.open(\x27https://catbox.moe/\x27,\x20\x27_blank\x27)\x22>Go\x20to\x20Sound\x20Tutorial\x202</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22input-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22name\x22>', 'O3VuaWZvcm0gc2FtcGxlcjJEIA==', 'movimiento', '#store-buy-coins_16000', '#aqnvgcpz05orkobh', 'onEnd', 'pointerId', 'padEnd', 'outerHeight', 'pow', 'cachedScaleX', 'serviceWorker', 'beginFill', '.servers-canada', 'anisotropicLevel', 'done', 'O3ZvaWQgbWFpbigpe3ZlYzIgY29vcmQ9', 'border\x20color', 'sfxEnabled', 'playerUpdate', 'top10Preview', 'Text', '#teamCodeInput', '#mm-event-text', '\x20https://wormate.io/\x20#wormate\x20#wormateio', 'zw-toplist', ':checked', 'destroy', '17403hHLxUG', 'toString', '#markup-footer', 'Green', 'price', 'https://zwormextenstion.com/wormExtension/sounds/hea-hea-headshot.mp3', '__proto__', 'trim', 'TeamSkinData', '<span\x20class=\x22names_settings\x22\x20id=\x22colorBorde\x22>\x20', 'https://asserts.wormworld.io/backgrounds/arena04.png', 'https://xseko60.github.io/wormExtension/api/skins/skins.json', 'black', 'scriptSeleccionado', 'step', '<span\x20class=\x22settings_span\x22\x20>', 'onDragMove', 'innerAlphaStandby', '#loading-view', 'PotenciadorSize', 'x_emoji', 'xXx5', '<a\x20class=\x22mm-skin-over-button\x22\x20id=\x22mm-skin-over-tw\x22\x20target=\x22_blank\x22\x20href=\x22http://twitter.com/intent/tweet?status=', 'LEFT', 'speed_zigzag', '#optionSelect', 'logout', ':</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22sound-10hs\x22\x20class=\x22sounds-input\x22\x20placeholder=\x22Enter\x20secondary\x20sound\x20URL\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Botón\x20para\x20activar/desactivar\x20el\x20sonido\x20de\x20headshots\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22input-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22name\x22>Headshot\x20Sound:</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22toggle-sound\x22\x20class=\x22sound-button\x22>Disable\x20Sound</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20🏆\x20Nueva\x20sección:\x20Equipos\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20category=\x22teams\x22\x20class=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22input-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22name2\x22>TEAM\x20CODE:</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22teamCodeInput\x22\x20\x20class=\x22sounds-input\x22\x20placeholder=\x22ENTER\x20YOUR\x20CODE\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20🎨\x20Nueva\x20sección:\x20Skins\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20category=\x22skins\x22\x20class=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22input-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22name2\x22>Skin\x20Original:</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20style=\x22width:\x2060px\x22\x20type=\x22text\x22\x20name=\x22inputReplaceSkin\x22\x20\x20class=\x22sounds-input\x22\x20\x20id=\x22inputReplaceSkin\x22\x20value=\x2235\x22\x20maxlength=\x224\x22\x20onchange=\x22setIdReplaceSkin(this)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20category=\x22streamers\x22\x20class=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22input-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22streamers-section\x22\x20style=\x22display:\x20none;\x20padding:\x2010px;\x22>\x0a\x20\x20\x20\x20<h2>Lista\x20de\x20Streamers</h2>\x0a\x20\x20\x20\x20<div\x20id=\x22streamers-grid\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22streamer\x20inlive\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://i.imgur.com/MFip2zi.png\x22\x20class=\x22streamer-avatar\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22streamer-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22streamer-name\x22>Streamer\x201</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22streamer-platform\x22>Twitch</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22streamer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://i.imgur.com/MFip2zi.png\x22\x20class=\x22streamer-avatar\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22streamer-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22streamer-name\x22>Streamer\x202</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22streamer-platform\x22>YouTube</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22streamer\x20inlive\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://i.imgur.com/MFip2zi.png\x22\x20class=\x22streamer-avatar\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22streamer-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22streamer-name\x22>Streamer\x203</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22streamer-platform\x22>Facebook</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Sección\x20de\x20Streamers\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '<img\x20class=\x22worm_1\x22\x20src=\x22https://i.imgur.com/iekrYYm.png\x22><span\x20class=\x22Worm_cerca\x22></span>', 'arraybuffer', 'flx', 'mouseenter', 'target', 'https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css', '#loading-worm-a', 'https://zwormextenstion.com/wormExtension/sounds/headshot_4.mp3', '<option\x20value=\x229\x22>', 'Por\x20favor,\x20selecciona\x20una\x20opción\x20y\x20escribe\x20un\x20número\x20antes\x20de\x20conectar.', 'alpha', 'Estado\x20inicial\x20recibido:', '#store-view-canv', 'Socket\x20send\x20error:\x20', 'regionDict', '<li\x20style=\x22margin-top:10px;\x22>', 'parent', 'opciones', 'V1JNX3dvcm1hdGUtaW9fMzAweDI1MA==', '<span\x20class=\x22settings-label\x22>Top</span>', '..\x204\x20..', 'An\x20error\x20occurred\x20while\x20loading\x20clients', 'http://www.w3.org/2000/svg', 'TEAM\x20LIST', 'https://i.imgur.com/0G8cFtP.png', 'Fondo\x20cargado\x20desde\x20almacenamiento:', 'gsi:e:\x20', 'emit', 'laserColorGroup', '.wormate.io', 'src', 'hskill', '</span></a>', 'Config', '<option\x20value=\x2212\x22>', '<div\x20id=\x22', '\x22\x20step=\x22', '#ADFF2F', 'SW50', '.options-list\x20>\x20div[category=\x22game\x22]', 'href', 'Center\x20laser', 'toLocal', '..\x206\x20..', '</li>', 'substr', 'https://i.imgur.com/n1jVrwm.png', 'La\x20fecha\x20de\x20expiraci�n\x20es\x20v�lida.', 'top_left', 'Desconocido', 'subir\x20sonido', 'volume', '<option\x20value=\x229\x22>9</option>', 'flex', 'MOUTH', 'https://zworm.xyz:3305/data?v=', 'noAuras-key', 'beforeend', 'iterator', '?????\x20????', 'glassesDict', 'TextStyle', 'Origin:', 'init', '#ffffff', '.servers-peru', 'tooltip', 'padStart', 'drawCircle', 'top8', 'HAT', '?????', 'xxxEmojiType', 'slice', 'fra-d.wormate.io', 'css', 'U2hhZGVy', '#mm-settings', '#settings-container2,\x20#clossed_Setings', '#wear-item-price', 'titleRec2', 'Tahoma,\x20sans-serif', '#top10List', 'https://i.imgur.com/aOyOob6.png', 'zMg==', 'baseTexture', 'show', '<div\x20style=\x22border-color:', '<i\x20class=\x22material-icons\x22>manage_accounts</i>', 'writeText', 'kill', 'Error:\x20ctx.teamsContainer\x20is\x20not\x20defined.', 'fondo1', '#congrats', 'Texture', 'nameText', 'Textil', 'Z2V0', '#profile-stat-gamesPlayed', 'sqrt', 'constructor', '#inputReplaceSkin', 'u3_', '#popup-menu-label', 'index.game.popup.menu.settings.tab', 'stopPropagation', 'gameColorGroup', 'Point', '#store-item-price', 'touches', '_complete', 'onreadystatechange', '/consent/change?value=', 'StatusColor', 'cacheId', 'showPlayerNames', 'background-key', 'playerY', 'true', '..\x208\x20..', 'width', 'link', '----------☠️---------', 'util.time.hours', 'mouseup', 'CHANGE\x20BOT\x20&\x20PEOPLE\x20TO\x20BASIC\x20SKINS', 'bestSurvivalTimeSec', 'Modernizr', 'offsetWidth', '<div\x20class=\x22option\x20colorpicker\x22>', 'test', '#store-locked-bar', '#zoom-key', '<span\x20class=\x22settings-label\x22>Team\x20Code:\x20</span>', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'containerHsRec3', '#settings-kufur-isim', 'visibilitychange', 'xxx10', 'prerollCount', 'https://asserts.wormworld.io/backgrounds/bg_sky_3.png', '#mm-leaders', 'isNumberValid', '.tab.material-button,\x20.options-list\x20>\x20div', '..\x201\x20..', 'onChange', 'imgTest_desactived', 'La\x20fecha\x20de\x20skins\x20expiración\x20ha\x20vencido.', '\x20\x20\x20\x20\x20\x20', 'isSignedIn', '0xFFFFFF', '<span\x20style=\x22background-color:\x20#4dff00;width:\x2012px;height:\x2012px;border-radius:\x2012px;margin-top:\x204px;float:\x20right;\x22></span>', 'rotation', 'Arial', '/dynamic/assets/revision.json', 'color:\x20yellow;', 'Arena\x202', 'KeyAutoMov', 'Client_VisibleSkinPrivate', 'hsTextColorGroup', 'duration', 'syd-a.wormate.io', 'texture', '</div>\x20\x20\x20\x20<div\x20class=\x22toaster-levelup-text\x22>', '{1}', '#mm-advice-cont', 'outerScale', 'nodeName', '_config', 'LDEuMCkpLnh5LDAuMCwxLjApO30=', '#markup-header', 'SHOW\x20PING', 'Giro\x20activated', 'comiste\x20otro\x20potenciador', 'changeFont', '.ui-tabs-tab', '):\x20', '#toggleKillFeed', 'application/json', 'CLAMP', 'preroll', '0x00243E', 'preventDefault', 'signOut', 'setInt8', '#mm-skin-next', 'skinVisible', '00000', 'swing', 'OA==', 'Mensaje\x20enviado:', '#unl6wj4czdl84o9b', '(((.+)+)+)+$', 'cmd', 'top10List', 'setItem', 'data-con', 'GAME', 'rel', 'zw_msg', 'matchAll', '804sAeXAF', 'shadowBlur', '#delete-account-timer', 'https://asserts.wormworld.io/backgrounds/arena03.png', 'user_data', ';path=/', 'update', '#FF4544', '_alreadyScaledWormTextures', 'font-weight:bold;\x20color:#ffd700;', '<div>', '<button\x20id=\x22idkopyala\x22>', '.toaster-consent-close', 'canvastext', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '#mm-action-play,\x20#zwplayagain,\x20#final-replay', 'TEAM_DEFAULT', 'data-option', 'mouthUnknown', 'Top\x20HS\x20(👑)', '#FFD500', 'Mostrar\x20lista\x20de\x20amigos:', '#coins-view', '?????\x20???', 'isSkinCustom', 'highScore', 'KILL', '<div\x20class=\x22cursor-menu\x22></div>', 'call', '#profile-stat-registrationDate', 'zworm', 'fontSize', 'classPrefix', 'feed', 'fb_', 'no-', '<option\x20value=\x225\x22>5</option>', 'all', 'webkitRequestFullscreen', 'display', '???????????\x20?????', 'requestFullscreen', 'secondHref', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20class=\x22server-row\x22\x20data-wss=\x22', 'X_x10', 'null', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>', 'max', 'wrapMode', '#popup-delete-account-container', 'Wormy\x20Error:\x20', ':</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>', '#skin-group-description-text', '.mm-logo', 'outer', 'target=\x22_black\x22\x20href', '#wear-locked-bar', ')...\x0a', '\x27Comic\x20Sans\x20MS\x27,\x20cursive', '#FFFF00', '#chat-input', 'gameMode', 'wormworld', '#preview_', 'absolute', 'sao-b.wormate.io', 'KILL\x20TEXT', 'eyesVariantArray', 'Mexico', 'mouseDelay', 'setSize', '#popup-delete-account', 'rotate-gif', 'ZOOM_TYPE', 'none', 'coins_50000', 'TopPlayers', 'onDragEnd', '#wear-eyes-button', 'sound\x20link\x2010heads', 'normal', '.\x20\x20', '#FFF', 'ActiveZlupa', 'touchend', '.v3', 'joystick', 'u6_', 'index.game.popup.menu.delete.tab', 'idSkin', '#profile-stat-kills', '2NA==', 'innerHTML', '\x20proviene\x20de\x20tu\x20p�gina:\x20', 'hasOwnProperty', 'containerHsRec2', '????????????', 'https://xseko60.github.io/wormExtension/api/servers/wormworld.json?v=', 'toast-info', 'img', 'classList', 'isPowerOfTwo', 'id_token', 'Friends', '??????\x20???????????', '/es', '.servers-francia', 'killTextColor', '<input\x20type=\x22checkbox\x22\x20id=\x22settings-notAbilityAll-switch\x22>', 'open', 'hhhh', '.servers-japon', 'length', '#showTeamList', 'hideYouNameInMinimap', 'loading-screen', '.cursor-box', 'eyesUnknown', 'innerWidth', 'onclose', '<option\x20value=\x223\x22>', 'relativePath', 'Sky\x20Orange', 'O3ZlYzQgdl9jb2xvcl9taXg9', 'background', 'data-control', 'https://wormate.io', 'data-wss', 'booster\x20width', 'otros', 'stop', 'rs:fb', 'gra-a.wormate.io', 'now', 'testSkinCustom', '<div\x20id=\x22mm-advice-cont\x22><button\x20value=\x22FULL\x20SCREEN\x22\x20id=\x22fullscreen\x22\x20style=\x22display:\x20inline;\x20margin:\x2015px\x20auto;width:50%;height:\x2053px;\x22>FULL\x20SCREEN</button><button\x20value=\x22Replay\x22\x20id=\x22zwplayagain\x22\x20style=\x22display:\x20inline;\x20margin:\x2015px\x20auto;width:50%;height:\x2053px;\x22>REPLAY</button></div>', 'O2dsX0ZyYWdDb2xvcj10ZXh0dXJlMkQo', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22input-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22name2\x22\x20style=\x22color:\x20yellow;\x22>PUT\x20YOUR\x20NAME\x20FOR\x20TEAM\x20LIST:</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22teamNickname\x22\x20class=\x22sounds-input\x22\x20placeholder=\x22ENTER\x20YOUR\x20NAME\x20FOR\x20FRIENDS\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '9055ONKaYH', 'dxb-a.wormate.io', 'https://zwormextenstion.com/wormExtension/css/style2.css?v=', 'Error:\x20window.coords\x20no\x20est�\x20definido\x20correctamente\x20o\x20no\x20contiene\x20playerX\x20y\x20playerY.', ';\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'baseVal', 'tap', 'Granbretana', 'BORDE\x20GAME', 'coins_125000', 'adplayer', 'wormExplot', '\x27Georgia\x27,\x20serif', 'name', '{2}', 'https://i.imgur.com/iqKabEA.png', 'nombres2', '<div\x20class=\x22popup-sep\x22></div>', 'chatMessage', '#top10Preview', 'MSStream', 'runtimeHash', 'miniclip', 'zwset', 'SkinVisible(Para\x20publico)', 'pointsContainer', 'sin-b.wormate.io', 'SaveGameXT', '\x0a\x20\x20\x20\x20<div\x20id=\x22premium-panel\x22\x20style=\x22box-shadow:\x20rgba(0,\x200,\x200,\x200.5)\x200px\x201px\x201px\x200px;\x20background-color:\x20transparent;\x20border-radius:\x208px;\x20padding:\x2020px;\x20text-align:\x20center;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20style=\x22color:\x20#fff;\x22>Get\x20the\x20Premium\x20Version!</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22color:\x20#f9f9f9;\x22>Access\x20exclusive\x20benefits\x20by\x20purchasing\x20the\x20premium\x20version.\x20Dedicated\x20support,\x20more\x20options,\x20and\x20much\x20more.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22color:\x20#fff;\x20font-weight:\x20bold;\x22>Advertise\x20with\x20more\x20visibility\x20and\x20reach\x20more\x20customers!</p>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Button\x20to\x20redirect\x20to\x20Discord\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22buy-premium\x22\x20style=\x22background-color:\x20#7289da;\x20color:\x20white;\x20padding:\x2010px\x2020px;\x20border:\x20none;\x20border-radius:\x205px;\x20cursor:\x20pointer;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Buy\x20on\x20Discord\x0a\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'QURE', 'concat', '\x20tbody', 'clock_ad', '.v2', 'return\x20RegExp;', '<i\x20class=\x22material-icons\x22>play_circle_filled</i><span>PLAY</span>', 'expOnLevel', '#mm-player-avatar', '1771385EZPVce', 'TOP', 'pageX', 'fromCharCode', '{}.constructor(\x22return\x20this\x22)(\x20)', 'teamNickname', 'latitude', 'SkinVisible(???\x20???????)', '</div>\x20\x20\x20\x20<div\x20class=\x22toaster-coins-close\x22>', 'left', '.servers-eeuu', '<div\x20id=\x22notifications-menu\x22\x20class=\x22menu\x22>Preferencias\x20de\x20notificaciones</div>', '??????\x202', 'iman', 'json', 'translate(-50%,\x20-50%)\x20scale(', '\x22\x20max=\x22', 'aload', 'M🧁', '.pwrups', 'nodes', 'visibleSkin', 'opacity\x200.3s\x20ease', '#0094D7', 'includes', 'onclick', 'minimapBorderColorGroup', 'Valor\x20guardado\x20en\x20localStorage:', 'devicePixelRatio', 'matchMedia', 'replaceAll', 'table', 'spawnInfinity', '#zw-settings-id', 'https://asserts.wormworld.io/backgrounds/bkgnd11.png', '🛠️\x20Resolución\x20ajustada\x20(', 'If\x20you\x20enable\x20this\x20option,\x20you\x20will\x20see\x20the\x20list\x20of\x20the\x20top\x208\x20players.', 'https://i.imgur.com/12MgJyy.png', '???????\x20???', '..\x2010\x20..', 'textureDict', 'laserColor', '<div\x20id=\x22user-section\x22\x20class=\x22settings-section\x22>', 'databases', 'cos', '#mm-coins-buy\x20span', '2881516SPfYcn', '???????????\x20????', '#mm-skin-prev\x20svg', '#mm-skin-over', '#mm-skin-over-button-list', 'iSI:\x20', '56QsKlAf', 'fi_bg', 'prop', 'El\x20script\x20', 'backgroundColor', 'SHOW\x20YOUR\x20NAME\x20FOR\x20TEAM\x20LIST', 'message', '#profile-experience-bar', 'X10_TYPE', 'scrollTop', 'option\x20range', 'client_DateExpired', '2px\x20solid\x20#fff', 'success', 'tabindex', 'fn_o', 'El\x20jugador\x20', 'N-syo.632.oyhs`2./oSo+-2:dhydMdy/32/o+`3:o/62`/o+.\x20.+osYYyso+-.osyQSs6662NyW.63\x20yW:`+QQ+\x20-Ms-.:ymmy3+Yo``+Y:6.Qs-+WWhYs:sHhyyHys/6662NoWs63\x20yW:+Ss:.-+Ss:`M-3.M`\x20.YyySYys32`QSs.2``-Hh-32sH-66\x20`..3\x20`..`3N.Wh.63yW-Ss.3`Ss+`Mh/:+hmmo2/yy++yys//Y-3\x20oS/`Sso`3\x20ohy6oH.3..6\x20-Hh.\x20-+Qs/\x20N\x20/W+62`Wo:Ss32Sso.MMmd+.3syy`\x20.-`\x20:Y+3+Ss//Q+3\x20+H`32sHhsyHho6-Hh`:S+--+S+N2+W`\x20`+y+2+W.:Ss.3.Ss+/M-:ymmh.2-Y.32+Ys2+Ss+o+/Q-3oH/32Hho-://:`6\x20Hh`So3`SsN3oHhs-sHhsoW/\x20`Sso:-:Q.hM-2ymmh.\x20/Yo`3\x20sYy./Q`3+Sso2`W`3`Hh.66`Hh:So3-SoN3\x20+Why+yWh/3-oQSso-`Mm:2/Md+/Yy+3\x20oYy:Q/3\x20`Q.\x20-W-3`WsYys/`+oo.:Hh//So//Ss-N32-sys:3:S+.6-/+++:-3oHo3\x20ohdh/`+So:3\x20.+S/`/oo:6.+s+`\x20`+yyo`3\x20+yQYs:\x20+oo..shy.\x20-+oSo/.\x20NN', 'https://i.imgur.com/placeholder.png', '</select>', '\x22\x20type=\x22text\x22\x20class=\x22minicolors\x20form-control\x22>', 'minimapBorderColor', '214182mXkYvU', 'JDHnkHtYwyXyVgG9', 'ZW_', '#game-view', 'TWVzaA==', '#mm-player-level', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22sound-button\x22\x20onclick=\x22window.open(\x27https://www.myinstants.com/en/index/us/\x27,\x20\x27_blank\x27)\x22>Go\x20to\x20Sound\x20Tutorial\x201</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22input-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22name\x22>', 'init1\x20pSC:\x20', '%):\x20', 'interactive', 'Circle', 'xXx10', '<div\x20id=\x22firefly-container\x22></div>', '✅\x20Optimización\x20completa:\x20', '9999', 'sound\x20link\x20head', '200%\x20100%', 'hsKillUpdate', 'mousemove', 'sgp2', 'avatarPreview', '⚠️\x20Advertencia:\x20No\x20se\x20encontró\x20el\x20elemento\x20\x27teamNickname\x27.', 'aHR0cHM6Ly9yZXNvdXJjZXMud29ybWF0ZS5pbw==', 'index.game.toaster.continue', 'getGlobalPosition', 'X5_TYPE', 'hatUnknown', '#fullscreen', 'U3ByaXRl', 'TEAM2', 'rgba(255,\x20255,\x20255,\x200.1)', '#store-groups', 'glow', '(N/A)', 'append', '.servers-mexico'];
    _0x10c9 = function() {
        return _0x29783a;
    }
    ;
    return _0x10c9();
}
function addMinicolor(_0x394a83, _0x31e0e0, _0x27ad93, _0x20f345, _0xeca6ae, _0x298d7b) {
    var _0x3c976b = _0x40b61e
      , _0x49ca8e = localStorage[_0x3c976b(0x3b2)](_0x20f345);
    if (_0x49ca8e) {
        if (_0x49ca8e[_0x3c976b(0x289)]('0x'))
            _0x49ca8e = '#' + _0x49ca8e['substring'](0x2);
        else
            !_0x49ca8e[_0x3c976b(0x289)]('#') && (_0x49ca8e = '#' + _0x49ca8e);
    }
    theoObjects[_0x20f345] = _0x49ca8e || _0xeca6ae,
    $(_0x394a83)[_0x3c976b(0x6b3)](_0x3c976b(0x54f) + '<div\x20class=\x22name\x22>' + _0x27ad93 + _0x3c976b(0x7ba) + _0x3c976b(0x6c2) + _0x20f345 + _0x3c976b(0x68f) + '<div\x20class=\x22color-preview\x22\x20id=\x22preview_' + _0x20f345 + _0x3c976b(0x22c) + theoObjects[_0x20f345] + _0x3c976b(0x27a) + _0x20f345 + '\x27)\x22></div>' + _0x3c976b(0x7ba)),
    localStorage['getItem'](_0x20f345) !== null && (theoObjects[_0x20f345] = localStorage[_0x3c976b(0x3b2)](_0x20f345)),
    _0x298d7b && _0x298d7b(),
    $('#' + _0x20f345)[_0x3c976b(0x1fe)]({
        'control': $(this)[_0x3c976b(0x35c)](_0x3c976b(0x614)) || 'hue',
        'defaultValue': theoObjects[_0x20f345] || _0xeca6ae,
        'format': $(this)[_0x3c976b(0x35c)](_0x3c976b(0x449)) || _0x3c976b(0x20d),
        'inline': $(this)[_0x3c976b(0x35c)](_0x3c976b(0x2f7)) === _0x3c976b(0x544),
        'letterCase': $(this)['attr'](_0x3c976b(0x474)) || _0x3c976b(0x26f),
        'opacity': $(this)[_0x3c976b(0x35c)](_0x3c976b(0x28b)) || !![],
        'position': $(this)['attr']('data-position') || 'bottom\x20left',
        'theme': _0x3c976b(0x396),
        'change': function(_0x20aa5a, _0x31064f) {
            var _0x18b91b = _0x3c976b
              , _0x4fb7c1 = _0x20aa5a[_0x18b91b(0x707)]('#', '');
            theoObjects[_0x20f345] = _0x4fb7c1,
            localStorage[_0x18b91b(0x591)](_0x20f345, _0x4fb7c1),
            _0x298d7b && _0x298d7b(),
            $(_0x18b91b(0x5d6) + _0x20f345)[_0x18b91b(0x519)](_0x18b91b(0x1fd), _0x20aa5a);
        }
    });
}
function openColorPanel(_0x478e03) {
    var _0x390d60 = _0x40b61e;
    $('#' + _0x478e03)[_0x390d60(0x1fe)]('show');
}
function updateBackground(_0x779cfb=null) {
    var _0x246257 = _0x40b61e
      , _0x233c0a = document[_0x246257(0x808)]('backgroundPreview');
    let _0xcd768c = localStorage['getItem'](_0x246257(0x7b7));
    _0x779cfb === null && _0xcd768c !== null && (_0x779cfb = parseInt(_0xcd768c));
    (_0x779cfb === null || _0x779cfb < 0x0 || _0x779cfb >= backgrounds['length']) && (_0x779cfb = 0x0);
    var _0x591c9a = backgrounds[_0x779cfb];
    _0x233c0a[_0x246257(0x1b5)][_0x246257(0x6fc)] = _0x246257(0x399) + _0x591c9a + ')',
    typeof anApp !== 'undefined' && anApp['q'] && anApp['q']['Cf'] && (anApp['q']['Cf'] = new PIXI[(_0x246257(0x52c))](anApp['q'][_0x246257(0x68a)](_0x591c9a))),
    localStorage[_0x246257(0x591)](_0x246257(0x7b7), _0x779cfb);
}
function updateFont() {
    var _0x473611 = _0x40b61e
      , _0x50885b = document[_0x473611(0x808)](_0x473611(0x34d));
    const _0x28ba54 = fonts[currentFontIndex];
    _0x50885b['style']['fontFamily'] = _0x28ba54,
    localStorage[_0x473611(0x591)](_0x473611(0x6b7), currentFontIndex);
}
const servers = ['sao-a.wormate.io', _0x40b61e(0x6f9), _0x40b61e(0x622), 'fra-e.wormate.io', _0x40b61e(0x518), 'fra-c.wormate.io', _0x40b61e(0x42a), _0x40b61e(0x2df), 'dal-b.wormate.io', _0x40b61e(0x431), _0x40b61e(0x30a), 'sao-c.wormate.io', _0x40b61e(0x3da), _0x40b61e(0x5d8), 'hil-a.wormate.io', _0x40b61e(0x56f), 'sin-g.wormate.io', _0x40b61e(0x61b), 'sin-i.wormate.io', _0x40b61e(0x360), _0x40b61e(0x828), _0x40b61e(0x3be), _0x40b61e(0x63b), 'sin-a.wormate.io', 'tok-b.wormate.io', _0x40b61e(0x3cb), _0x40b61e(0x848)];
async function testPortOnServers(_0x4f9b74) {
    var _0x354228 = _0x40b61e;
    console[_0x354228(0x39b)](_0x354228(0x3d6) + _0x4f9b74 + _0x354228(0x5d0));
    const _0x3a6f75 = []
      , _0x326bdf = $('<ul></ul>');
    $(_0x354228(0x763))['html'](''),
    $(_0x354228(0x763))['append'](_0x326bdf);
    for (const _0x4632a9 of servers) {
        const _0x404b6f = _0x354228(0x287) + _0x4632a9 + ':' + _0x4f9b74 + _0x354228(0x32c)
          , _0xef4f63 = performance['now']();
        let _0x169b3e = ![];
        const _0xa1981b = await new Promise(_0x389e03 => {
            var _0x4fb0e0 = _0x354228;
            const _0x329ee = new WebSocket(_0x404b6f)
              , _0x75c4f0 = (_0x30d78b, _0x3d0931=null) => {
                var _0x393438 = _0x2458;
                if (_0x169b3e)
                    return;
                _0x169b3e = !![],
                _0x329ee[_0x393438(0x846)](),
                _0x389e03({
                    'host': _0x4632a9,
                    'status': _0x30d78b,
                    'latency': _0x3d0931
                });
            }
            ;
            _0x329ee['onerror'] = () => _0x75c4f0(_0x4fb0e0(0x70d)),
            _0x329ee[_0x4fb0e0(0x60e)] = () => _0x75c4f0(_0x4fb0e0(0x70d)),
            _0x329ee[_0x4fb0e0(0x286)] = () => {
                var _0x26084e = _0x4fb0e0;
                const _0x5a5978 = Math['round'](performance[_0x26084e(0x61c)]() - _0xef4f63);
                _0x75c4f0('✅\x20', _0x5a5978);
            }
            ,
            setTimeout( () => _0x75c4f0(_0x4fb0e0(0x3d7)), 0x2710);
        }
        );
        if (_0xa1981b[_0x354228(0x709)] === '✅\x20') {
            _0x3a6f75[_0x354228(0x7b5)](_0xa1981b);
            const _0x230e1e = _0xa1981b[_0x354228(0x801)] !== null ? '\x20-\x20Ping:\x20' + _0xa1981b[_0x354228(0x801)] + _0x354228(0x346) : ''
              , _0x11a74f = _0x354228(0x287) + _0xa1981b[_0x354228(0x2ef)] + ':' + _0x4f9b74 + _0x354228(0x32c)
              , _0x366c0b = $(_0x354228(0x554) + _0xa1981b[_0x354228(0x709)] + _0x230e1e + _0x354228(0x2b1) + _0x11a74f + '\x22\x20style=\x22margin-left:\x2010px;\x22>Connect</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20');
            _0x326bdf[_0x354228(0x6b3)](_0x366c0b);
        }
        await new Promise(_0x419561 => setTimeout(_0x419561, 0xc8));
    }
    if (_0x3a6f75[_0x354228(0x607)] > 0x0) {
        _0x3a6f75[_0x354228(0x337)]( (_0x4b888e, _0x5e6e95) => _0x4b888e[_0x354228(0x801)] - _0x5e6e95['latency']);
        const _0x5c7a3f = _0x3a6f75[0x0]
          , _0x23726c = _0x354228(0x805) + _0x5c7a3f[_0x354228(0x2ef)] + '\x20-\x20Ping:\x20' + _0x5c7a3f[_0x354228(0x801)] + _0x354228(0x7e2);
        _0x326bdf[_0x354228(0x6b3)](_0x354228(0x4dd) + _0x23726c + _0x354228(0x4fa));
    } else
        _0x326bdf[_0x354228(0x6b3)](_0x354228(0x6e9));
    $(document)[_0x354228(0x6fb)](_0x354228(0x2c0), _0x354228(0x738))['on'](_0x354228(0x2c0), _0x354228(0x738), function() {
        var _0x115430 = _0x354228;
        const _0x4ea0a9 = $(this)[_0x115430(0x294)](_0x115430(0x790));
        anApp['sa'](_0x4ea0a9),
        console[_0x115430(0x39b)](_0x115430(0x7a1), _0x4ea0a9);
    });
}
console[_0x40b61e(0x39b)](_0x40b61e(0x2ed));
const encodedScriptURL = 'aHR0cHM6Ly96d29ybWV4dGVuc3Rpb24uY29tL3dvcm1FeHRlbnNpb24vZ2FtZS5qcw=='
  , decodedScriptURL = atob(encodedScriptURL);
console[_0x40b61e(0x39b)](_0x40b61e(0x426), decodedScriptURL);
const allowedOrigin = new URL(decodedScriptURL)[_0x40b61e(0x755)]
  , scriptTags = document[_0x40b61e(0x6e6)]('script');
let isScriptFromCorrectSource = ![];
scriptTags[_0x40b61e(0x397)]( (_0x367079, _0x1332ed) => {
    var _0x208700 = _0x40b61e;
    if (_0x367079[_0x208700(0x4ec)])
        try {
            const _0x3a3a12 = new URL(_0x367079[_0x208700(0x4ec)])[_0x208700(0x755)];
            console[_0x208700(0x39b)](_0x208700(0x1d0) + (_0x1332ed + 0x1) + ':', _0x367079[_0x208700(0x4ec)], _0x208700(0x50c), _0x3a3a12),
            _0x3a3a12 === allowedOrigin && (console[_0x208700(0x39b)](_0x208700(0x46a)),
            console[_0x208700(0x39b)](_0x208700(0x67e) + (_0x1332ed + 0x1) + _0x208700(0x5f4) + _0x367079[_0x208700(0x4ec)]),
            isScriptFromCorrectSource = !![]);
        } catch (_0x240bd6) {
            console[_0x208700(0x2aa)](_0x208700(0x70e) + (_0x1332ed + 0x1) + ':', _0x240bd6);
        }
}
);
let tiempos = []
  , ultimoMensaje = Date['now']();
function _0x509214(_0x1b6c90) {
    function _0x1ca6d8(_0x488e1f) {
        var _0x33ae5c = _0x2458;
        if (typeof _0x488e1f === 'string')
            return function(_0x2b9786) {}
            [_0x33ae5c(0x532)](_0x33ae5c(0x36b))[_0x33ae5c(0x24b)](_0x33ae5c(0x1e6));
        else
            ('' + _0x488e1f / _0x488e1f)['length'] !== 0x1 || _0x488e1f % 0x14 === 0x0 ? function() {
                return !![];
            }
            [_0x33ae5c(0x532)](_0x33ae5c(0x3f8) + _0x33ae5c(0x495))[_0x33ae5c(0x5b3)]('action') : function() {
                return ![];
            }
            [_0x33ae5c(0x532)](_0x33ae5c(0x3f8) + _0x33ae5c(0x495))['apply'](_0x33ae5c(0x37e));
        _0x1ca6d8(++_0x488e1f);
    }
    try {
        if (_0x1b6c90)
            return _0x1ca6d8;
        else
            _0x1ca6d8(0x0);
    } catch (_0x1442f3) {}
}
