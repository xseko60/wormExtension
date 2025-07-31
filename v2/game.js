var xURL = "https://xseko60.github.io/wormExtension";
(function (t, e) {
  for (var n = _0x10c9();;) {
    try {
      if (180968 === parseInt(_0x2458(1202)) / 1 * (parseInt(_0x2458(1952)) / 2) + -parseInt(_0x2458(2073)) / 3 * (parseInt(_0x2458(1659)) / 4) + parseInt(_0x2458(1569)) / 5 * (-parseInt(_0x2458(1431)) / 6) + -parseInt(_0x2458(1607)) / 7 + -parseInt(_0x2458(2044)) / 8 + parseInt(_0x2458(1681)) / 9 * (parseInt(_0x2458(1963)) / 10) + parseInt(_0x2458(1653)) / 11 * (parseInt(_0x2458(1757)) / 12)) {
        break;
      }
      n.push(n.shift());
    } catch (t) {
      n.push(n.shift());
    }
  }
})();
document.documentElement[_0x2458(430)](_0x2458(538), _0x2458(843));
window[_0x2458(1439)] = window[_0x2458(1439)] || new Set();
function optimizarTextura(t) {
  if (!t || !t.Hc || !t.Hc[_0x2458(1315)]) {
    return void console[_0x2458(755)](_0x2458(1028));
  }
  const i = t.Hc[_0x2458(1315)];
  const n = i[_0x2458(1344)] || i[_0x2458(1923)]?.[_0x2458(678)] || i[_0x2458(1923)]?.[_0x2458(1025)]?.[_0x2458(1260)] || "";
  if (n && !window[_0x2458(1439)][_0x2458(1824)](n)) {
    try {
      if (n[_0x2458(1631)]("100300_portions.png") && i[_0x2458(953)] > .025) {
        i.resolution = .025;
        console[_0x2458(923)](_0x2458(1642) + i[_0x2458(953)] + _0x2458(1406) + n);
      }
      if (_0x2458(1762) in i) {
        i[_0x2458(1762)] = false;
      } else if ("mipmap" in i[_0x2458(1315)]) {
        i.baseTexture[_0x2458(1762)] = false;
      }
      if ("anisotropicLevel" in i) {
        i.anisotropicLevel = 1;
      } else if (_0x2458(1188) in i[_0x2458(1315)]) {
        i[_0x2458(1315)][_0x2458(1188)] = 1;
      }
      if (i.width > 1024 || i[_0x2458(2052)] > 1024) {
        const a = 1024 / i[_0x2458(1350)];
        const s = 1024 / i.height;
        const r = Math[_0x2458(1940)](a, s);
        if (i[_0x2458(1501)]) {
          i[_0x2458(1501)](i[_0x2458(1350)] * r, i[_0x2458(2052)] * r);
        } else if (i[_0x2458(1923)]?.[_0x2458(1025)] instanceof HTMLImageElement) {
          i[_0x2458(1923)].source[_0x2458(1350)] *= r;
          i.resource[_0x2458(1025)].height *= r;
        }
        console[_0x2458(923)]("🔧 Imagen escalada (" + Math.round(100 * r) + _0x2458(1689) + n);
      }
      if (i[_0x2458(1532)] && !n[_0x2458(1631)]("atlas") && !n[_0x2458(1631)]("sprite")) {
        i[_0x2458(1532)] = false;
      }
      if (i.destroyed || i.resource?.[_0x2458(1910)]) {
        i.destroy(true);
        console[_0x2458(923)]("🗑️ Textura destruida por estado inválido: " + n);
      }
      window[_0x2458(1439)][_0x2458(450)](n);
      console.log(_0x2458(1694) + n);
    } catch (t) {
      console.error("❌ Error al optimizar textura: " + n, t);
    }
  }
}
function checkOrientation() {
  const e = document[_0x2458(2056)](_0x2458(1503));
  if (window[_0x2458(1636)]("(orientation: portrait)")[_0x2458(973)]) {
    e[_0x2458(437)][_0x2458(1470)] = "block";
  } else {
    e.style[_0x2458(1470)] = _0x2458(1505);
  }
}
window[_0x2458(837)](_0x2458(2062), checkOrientation);
window.addEventListener("resize", checkOrientation);
window[_0x2458(705)] = function () {
  document[_0x2458(2056)](_0x2458(891))[_0x2458(437)].width = "100%";
  setTimeout(() => {
    document.getElementById(_0x2458(1546)).style[_0x2458(1775)] = "0";
    setTimeout(() => {
      document[_0x2458(2056)](_0x2458(1546))[_0x2458(496)]();
    }, 500);
  }, 2e3);
};
var __extends = this && this.__extends || function () {
  var t = function (e, i) {
    return (t = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t[_0x2458(1208)] = e;
    } || function (t, e) {
      for (var n in e) if (Object.prototype[_0x2458(1525)][_0x2458(1459)](e, n)) {
        t[n] = e[n];
      }
    })(e, i);
  };
  return function (e, i) {
    if (typeof i !== _0x2458(967) && null !== i) {
      throw new TypeError(_0x2458(622) + String(i) + " is not a constructor or null");
    }
    function o() {
      this[_0x2458(1330)] = e;
    }
    t(e, i);
    e[_0x2458(1938)] = null === i ? Object[_0x2458(667)](i) : (o.prototype = i[_0x2458(1938)], new o());
  };
}();
var Direction;
!function (t) {
  var e;
  e = true;
  var n = function (t, i) {
    var n = e ? function () {
      if (i) {
        var e = i[_0x2458(587)](t, arguments);
        i = null;
        return e;
      }
    } : function () {};
    e = false;
    return n;
  };
  var o = n(this, function () {
    return o[_0x2458(1203)]()[_0x2458(500)](_0x2458(1422))[_0x2458(1203)]().constructor(o)[_0x2458(500)](_0x2458(1422));
  });
  o();
  t[_0x2458(1225)] = _0x2458(1616);
  t[_0x2458(1608)] = "top";
  t[_0x2458(1945)] = _0x2458(684);
  t.RIGHT = _0x2458(1968);
  t[_0x2458(1943)] = _0x2458(1278);
  t[_0x2458(2020)] = _0x2458(1004);
  t[_0x2458(1898)] = "bottom_left";
  t[_0x2458(942)] = "bottom_right";
}(Direction = {});
var Joystick = function (t) {
  var e;
  e = true;
  var n = function (t, i) {
    var n = e ? function () {
      if (i) {
        var e = i[_0x2458(587)](t, arguments);
        i = null;
        return e;
      }
    } : function () {};
    e = false;
    return n;
  };
  !function () {
    n(this, function () {
      var e = new RegExp("function *\\( *\\)");
      var i = new RegExp(_0x2458(766), "i");
      var n = _0x509214(_0x2458(1293));
      if (e[_0x2458(1360)](n + _0x2458(819)) && i[_0x2458(1360)](n + "input")) {
        _0x509214();
      } else {
        n("0");
      }
    })();
  }();
  var o;
  o = true;
  var a = function (t, e) {
    var i = o ? function () {
      if (e) {
        var i = e[_0x2458(587)](t, arguments);
        e = null;
        return i;
      }
    } : function () {};
    o = false;
    return i;
  };
  function s(e) {
    var n = t[_0x2458(1459)](this) || this;
    n[_0x2458(624)] = 0;
    n[_0x2458(1091)] = 0;
    n[_0x2458(1219)] = .5;
    n.settings = Object.assign({
      outerScale: {
        x: 1,
        y: 1
      },
      innerScale: {
        x: 1,
        y: 1
      }
    }, e);
    if (!n[_0x2458(625)][_0x2458(1485)]) {
      var o = new PIXI.Graphics();
      o.beginFill(16711680);
      o.drawCircle(0, 0, 60);
      o[_0x2458(1240)] = .5;
      n[_0x2458(625)][_0x2458(1485)] = o;
    }
    if (!n[_0x2458(625)].inner) {
      var a = new PIXI.Graphics();
      a[_0x2458(1186)](16711680);
      a.drawCircle(0, 0, 35);
      a[_0x2458(1240)] = n[_0x2458(1219)];
      n[_0x2458(625)].inner = a;
    }
    n.initialize();
    return n;
  }
  a(this, function () {
    var t;
    try {
      t = Function(_0x2458(1093) + _0x2458(1611) + ");")();
    } catch (e) {
      t = window;
    }
    var i = t[_0x2458(1087)] = t[_0x2458(1087)] || {};
    var n = [_0x2458(923), _0x2458(755), _0x2458(1750), "error", _0x2458(1743), _0x2458(1638), _0x2458(1084)];
    for (var o = 0; o < n[_0x2458(1543)]; o++) {
      var s = a[_0x2458(1330)].prototype[_0x2458(1875)](a);
      var r = n[o];
      var c = i[r] || s;
      s[_0x2458(1208)] = a[_0x2458(1875)](a);
      s[_0x2458(1203)] = c[_0x2458(1203)][_0x2458(1875)](c);
      i[r] = s;
    }
  })();
  __extends(s, t);
  s[_0x2458(1938)][_0x2458(569)] = function () {
    this[_0x2458(1485)] = this.settings[_0x2458(1485)];
    this.inner = this[_0x2458(625)][_0x2458(677)];
    this.outer[_0x2458(2071)][_0x2458(1756)](this.settings[_0x2458(1396)].x, this.settings[_0x2458(1396)].y);
    this[_0x2458(677)][_0x2458(2071)][_0x2458(1756)](this[_0x2458(625)][_0x2458(903)].x, this.settings[_0x2458(903)].y);
    if (_0x2458(1101) in this[_0x2458(1485)]) {
      this[_0x2458(1485)][_0x2458(1101)][_0x2458(1756)](.5);
    }
    if ("anchor" in this[_0x2458(677)]) {
      this[_0x2458(677)][_0x2458(1101)].set(.5);
    }
    this[_0x2458(542)](this[_0x2458(1485)]);
    this.addChild(this[_0x2458(677)]);
    this[_0x2458(624)] = this[_0x2458(1350)] / 2.5;
    this.innerRadius = this.inner.width / 2;
    this.bindEvents();
  };
  s[_0x2458(1938)][_0x2458(1899)] = function () {
    var e = this;
    this[_0x2458(1690)] = true;
    var n;
    var o;
    var a;
    var s = false;
    this.onDragStart = function (i) {
      var o;
      var r;
      n = i;
      a = this.toLocal(n);
      s = true;
      e[_0x2458(677)][_0x2458(1240)] = 1;
      if (!(null === (r = (o = e[_0x2458(625)]).onStart) || undefined === r)) {
        r[_0x2458(1459)](o);
      }
    };
    this[_0x2458(1508)] = function (i) {
      var n;
      var o;
      if (0 != s) {
        e.inner[_0x2458(798)][_0x2458(1756)](0, 0);
        s = false;
        e.inner[_0x2458(1240)] = e.innerAlphaStandby;
        if (!(null === (o = (n = e[_0x2458(625)])[_0x2458(1179)]) || undefined === o)) {
          o.call(n);
        }
      }
    };
    this.onDragMove = function (i) {
      var n;
      var r;
      var c;
      var l;
      var h;
      var d;
      this.outerRadius = this[_0x2458(1350)] / 2.5;
      this[_0x2458(1091)] = this.inner.width / 2;
      if (0 != s) {
        var u = this[_0x2458(1272)](i);
        var _ = u.x - a.x;
        var f = u.y - a.y;
        var b = new PIXI[_0x2458(1337)](0, 0);
        var p = 0;
        if (0 != _ || 0 != f) {
          if (_ * _ + f * f >= e[_0x2458(624)] * e.outerRadius) {
            e[_0x2458(624)];
          } else {
            e.outerRadius - e[_0x2458(1091)];
          }
          var v = Direction[_0x2458(1225)];
          if (0 == _) {
            if (f > 0) {
              b.set(0, f > e.outerRadius ? e[_0x2458(624)] : f);
              p = 270;
              v = Direction[_0x2458(1945)];
            } else {
              b[_0x2458(1756)](0, -(Math[_0x2458(1076)](f) > e[_0x2458(624)] ? e[_0x2458(624)] : Math[_0x2458(1076)](f)));
              p = 90;
              v = Direction[_0x2458(1608)];
            }
            e.inner[_0x2458(798)][_0x2458(1756)](b.x, b.y);
            o = e[_0x2458(1947)](b);
            return void (null === (r = (n = e[_0x2458(625)])[_0x2458(1375)]) || undefined === r || r.call(n, {
              angle: p,
              direction: v,
              power: o
            }));
          }
          if (0 == f) {
            if (_ > 0) {
              b[_0x2458(1756)](Math[_0x2458(1076)](_) > e[_0x2458(624)] ? e[_0x2458(624)] : Math[_0x2458(1076)](_), 0);
              p = 0;
              v = Direction[_0x2458(1225)];
            } else {
              b[_0x2458(1756)](-(Math.abs(_) > e[_0x2458(624)] ? e[_0x2458(624)] : Math[_0x2458(1076)](_)), 0);
              p = 180;
              v = Direction.RIGHT;
            }
            e[_0x2458(677)].position[_0x2458(1756)](b.x, b.y);
            o = e[_0x2458(1947)](b);
            return void (null === (l = (c = e[_0x2458(625)])[_0x2458(1375)]) || undefined === l || l[_0x2458(1459)](c, {
              angle: p,
              direction: v,
              power: o
            }));
          }
          var m = Math[_0x2458(1076)](f / _);
          var g = Math.atan(m);
          p = 180 * g / Math.PI;
          var w = 0;
          var k = 0;
          if (_ * _ + f * f >= e[_0x2458(624)] * e[_0x2458(624)]) {
            w = e[_0x2458(624)] * Math.cos(g);
            k = e[_0x2458(624)] * Math.sin(g);
          } else {
            w = Math[_0x2458(1076)](_) > e[_0x2458(624)] ? e[_0x2458(624)] : Math[_0x2458(1076)](_);
            k = Math[_0x2458(1076)](f) > e.outerRadius ? e[_0x2458(624)] : Math[_0x2458(1076)](f);
          }
          if (f < 0) {
            k = -Math[_0x2458(1076)](k);
          }
          if (_ < 0) {
            w = -Math[_0x2458(1076)](w);
          }
          if (!(_ > 0 && f < 0)) {
            if (_ < 0 && f < 0) {
              p = 180 - p;
            } else if (_ < 0 && f > 0) {
              p += 180;
            } else if (_ > 0 && f > 0) {
              p = 360 - p;
            }
          }
          b[_0x2458(1756)](w, k);
          o = e[_0x2458(1947)](b);
          v = e.getDirection(b);
          e[_0x2458(677)][_0x2458(798)].set(b.x, b.y);
          if (!(null === (d = (h = e[_0x2458(625)])[_0x2458(1375)]) || undefined === d)) {
            d[_0x2458(1459)](h, {
              angle: p,
              direction: v,
              power: o
            });
          }
        }
      }
    };
  };
  s[_0x2458(1938)].getPower = function (t) {
    var n = t.x - 0;
    var o = t.y - 0;
    return Math[_0x2458(1940)](1, Math[_0x2458(1329)](n * n + o * o) / this[_0x2458(624)]);
  };
  s[_0x2458(1938)].getDirection = function (t) {
    var n = Math[_0x2458(828)](t.y, t.x);
    return n >= -Math.PI / 8 && n < 0 || n >= 0 && n < Math.PI / 8 ? Direction.RIGHT : n >= Math.PI / 8 && n < 3 * Math.PI / 8 ? Direction[_0x2458(942)] : n >= 3 * Math.PI / 8 && n < 5 * Math.PI / 8 ? Direction[_0x2458(1945)] : n >= 5 * Math.PI / 8 && n < 7 * Math.PI / 8 ? Direction[_0x2458(1898)] : n >= 7 * Math.PI / 8 && n < Math.PI || n >= -Math.PI && n < -7 * Math.PI / 8 ? Direction[_0x2458(1225)] : n >= -7 * Math.PI / 8 && n < -5 * Math.PI / 8 ? Direction[_0x2458(1943)] : n >= -5 * Math.PI / 8 && n < -3 * Math.PI / 8 ? Direction.TOP : Direction[_0x2458(2020)];
  };
  return s;
}(PIXI[_0x2458(1042)]);
function _typeof(t) {
  return (_typeof = _0x2458(967) == typeof Symbol && _0x2458(780) == typeof Symbol.iterator ? function (t) {
    return typeof t;
  } : function (t) {
    return t && _0x2458(967) == typeof Symbol && t[_0x2458(1330)] === Symbol && t !== Symbol[_0x2458(1938)] ? _0x2458(780) : typeof t;
  })(t);
}
var lenguaje = {
  es: {
    opciones: _0x2458(1247),
    zoomVelocidad: "Zoom Velocidad",
    anchoPotenciador: "ancho del potenciador",
    auraPotenciador: _0x2458(599),
    anchoComida: _0x2458(1921),
    brilloComida: "brillo de la comida",
    fondo: _0x2458(618),
    laser: _0x2458(1831),
    sectores: "sectores",
    colorJuego: _0x2458(727),
    colorLaser: _0x2458(926),
    colorBorde: "color del borde",
    copiar: _0x2458(638),
    fondos: _0x2458(1008),
    fondo0: "por defecto",
    fondo1: _0x2458(771),
    fondo2: "espacio 2",
    fondo3: "azul",
    fondo4: "espacio 3",
    skinVisible: _0x2458(1593),
    soundTuto1: "descargar sonido",
    soundTuto2: _0x2458(1280),
    soundTuto3: _0x2458(850),
    soundTuto4: _0x2458(2085)
  },
  en: {
    opciones: _0x2458(625),
    zoomVelocidad: _0x2458(1760),
    anchoPotenciador: _0x2458(1559),
    auraPotenciador: _0x2458(1143),
    anchoComida: _0x2458(669),
    brilloComida: _0x2458(1038),
    fondo: _0x2458(1030),
    laser: _0x2458(1271),
    sectores: _0x2458(1896),
    colorJuego: _0x2458(1114),
    colorLaser: _0x2458(863),
    colorBorde: _0x2458(1191),
    copiar: _0x2458(853),
    fondos: _0x2458(1555),
    fondo0: _0x2458(918),
    fondo1: _0x2458(1205),
    fondo2: _0x2458(722),
    fondo3: "Blue Black",
    fondo4: _0x2458(1864),
    skinVisible: _0x2458(581),
    soundTuto1: _0x2458(835),
    soundTuto2: _0x2458(1162),
    soundTuto3: _0x2458(1696),
    soundTuto4: _0x2458(1510)
  },
  uk: {
    opciones: _0x2458(1527),
    anchoPotenciador: _0x2458(1535),
    auraPotenciador: _0x2458(2057),
    anchoComida: _0x2458(507),
    brilloComida: _0x2458(1454),
    fondo: _0x2458(1645),
    laser: _0x2458(1471),
    sectores: _0x2458(642),
    colorJuego: _0x2458(1454),
    colorLaser: _0x2458(1749),
    colorBorde: _0x2458(1289),
    copiar: _0x2458(1885),
    fondos: "????",
    fondo0: _0x2458(932),
    fondo1: _0x2458(1932),
    fondo2: _0x2458(1619),
    fondo3: _0x2458(1301),
    fondo4: _0x2458(962),
    skinVisible: _0x2458(1614),
    soundTuto1: _0x2458(1654),
    soundTuto2: _0x2458(1654),
    soundTuto3: _0x2458(857),
    soundTuto4: _0x2458(696)
  }
};
const _wrmxt = {
  isSkinCustom(t) {
    return _0x2458(602) === typeof t && /[a-zA-Z]/[_0x2458(1360)](t);
  },
  testSkinCustom: function (t) {
    return _wrmxt[_0x2458(1455)](t) ? 34 : t;
  },
  testSkinMod: function (t) {
    return 399 <= t && 999 > t;
  },
  testWear: function (t) {
    return 399 <= t && 999 > t;
  },
  isNumberValid: function (t) {
    return "" !== t && null != t && !isNaN(t);
  },
  validInput: function (t) {
    if (!_wrmxt[_0x2458(954)](t) && !_wrmxt[_0x2458(1455)](t)) {
      return t;
    }
    try {
      let t = $("#inputReplaceSkin").val();
      return encodeURI(_wrmxt[_0x2458(1372)](t) ? t : 35);
    } catch (t) {
      return encodeURI(35);
    }
  },
  aload: false,
  aId: 0
};
var intervalID = null;
var isRunning = false;
var initialInterval = 55;
(function () {
  var t;
  try {
    t = Function(_0x2458(1093) + "{}.constructor(\"return this\")( ));")();
  } catch (e) {
    t = window;
  }
  return t;
})().setInterval(_0x509214, 1e3);
var cycleCounter = 1;
var isIncrementing = true;
let pixi = new Function("return PIXI;")();
let ungirotexture = pixi[_0x2458(1324)].from(_0x2458(1644));
let explotWtexture = pixi[_0x2458(1324)][_0x2458(1054)](_0x2458(879));
var keys = {
  zoom: "z",
  restart: "r",
  giro: "s",
  wormExplot: "x",
  laserHS: "l",
  sectores: "q",
  background: "c",
  noSkin: "f",
  noAuras: "g"
};
function cambiarKey(t, e) {
  if (keys.hasOwnProperty(t)) {
    keys[t] = e;
  }
}
let theoObjects = {
  teamColor: "FFFFFF",
  laserColor: _0x2458(1962),
  colorFondo: _0x2458(1860),
  colorBorde: "FF0000",
  hsTextColor: _0x2458(1962),
  killTextColor: _0x2458(1962),
  minimapBorderColor: _0x2458(1962)
};
var zw_updatezoom;
var zw_multiplier;
var zw_zoomtext;
var crearRegion2;
var zw_servertext;
var zw_serverping;
let ping;
var zw_serverfps;
let canSendMessage = true;
var zw_TopHS_RecordHs;
var zw_Top3HS_RecordHs;
var zw_TopFriends_list;
var zw_TopHS_BestPlayers;
var zw_MinimapTeamCode;
var zw_MinimapSombra;
var zw_lastserver;
var zw_toplist;
var zw_Background;
var ctxHeadshotLine;
var zw_zoomplustexture;
var zw_zoomsubtracttexture;
var zw_giroplustexture;
var zw_girosubtracttexture;
var zw_explotWubtracttexture;
var zw_settingsblockbadwords;
var zw_selectedbackground;
var zw_joystick;
var zw_mobilecontrol;
var zw_mobilecontrol2;
var zw_mobilecontroltextures;
var zw_mobilepredictiontextures;
var zw_mobileprediction;
var zw_joysticks;
var zw_mobilearrowtexture;
var zw_mobilepeedtexture;
var zw_mobilefullscreenstatus;
var zw_mobilecheck;
zw_multiplier = 1;
let frameTimes = [];
let lastFrameTime = performance[_0x2458(1564)]();
var killtext;
var hstext;
var circle;
var backgrounds = ["https://asserts.wormworld.io/backgrounds/bkgnd0.png", "https://asserts.wormworld.io/backgrounds/bkgnd8.png", _0x2458(795), _0x2458(543), _0x2458(1913), _0x2458(1641), _0x2458(746), _0x2458(2093), "https://asserts.wormworld.io/backgrounds/bg_sky_3.png", "https://asserts.wormworld.io/backgrounds/bg_sky_4.png", "https://asserts.wormworld.io/backgrounds/bg_sky_5.png", _0x2458(911), _0x2458(519), _0x2458(1434), _0x2458(1212)];
let currentIndex = localStorage[_0x2458(946)](_0x2458(1975)) ? parseInt(localStorage[_0x2458(946)]("selectedBackground")) : 0;
var fonts = [_0x2458(777), _0x2458(978), _0x2458(1311), _0x2458(1780), _0x2458(1581), "'Times New Roman', serif", _0x2458(1489), "'Impact', sans-serif", "'Lucida Console', monospace", "'Trebuchet MS', sans-serif"];
let currentFontIndex = localStorage[_0x2458(946)](_0x2458(1719)) ? parseInt(localStorage[_0x2458(946)](_0x2458(1719))) : 0;
function getPingColor(t) {
  return t <= 50 ? "#00FF00" : t <= 80 ? _0x2458(1267) : t <= 120 ? _0x2458(1490) : t <= 180 ? _0x2458(2105) : t <= 250 ? _0x2458(1870) : "#FF0000";
}
function getFPSColor(t) {
  return _0x2458(t >= 60 ? 717 : t >= 50 ? 1267 : t >= 40 ? 1490 : t >= 30 ? 2105 : t >= 20 ? 1870 : 927);
}
window[_0x2458(1098)] = t => {
  if (t[_0x2458(659)] > 0) {
    zw_updatezoom(Math[_0x2458(1478)](zw_multiplier - .75 * parseFloat(theoKzObjects[_0x2458(2022)]), .5));
  } else {
    zw_updatezoom(Math[_0x2458(1940)](zw_multiplier + 1.05 * parseFloat(theoKzObjects[_0x2458(2022)]), 50));
  }
};
var zw_mobilecheck = function () {
  return new (new Function(_0x2458(1603))())("iPhone|iPad|iPod|Android", "i").test(navigator[_0x2458(1141)]);
};
var zw_updatezoom = function (t) {
  zw_multiplier = t;
  var i = parseFloat(zw_multiplier[_0x2458(547)](2));
  if (Math[_0x2458(1076)](i) < .01) {
    i = 0;
  } else if (Math[_0x2458(1076)](i - 1) < .01) {
    i = 1;
  }
  zw_zoomtext[_0x2458(792)] = i + "x";
};
var inputReplaceSkin = localStorage[_0x2458(946)](_0x2458(2030));
var isPlaying = false;
window.keyMove = 81;
var theoEvents = {
  eventoPrincipal: null,
  joystick: {
    positionMode: "L",
    checked: true,
    size: 90,
    mode: _0x2458(2079),
    position: {
      left: _0x2458(645),
      bottom: _0x2458(645)
    },
    color: _0x2458(1156),
    pxy: 110
  }
};
var idiomaActual = window[_0x2458(532)][_0x2458(1270)].includes(_0x2458(1536)) ? "es" : window.location[_0x2458(1270)].includes(_0x2458(2025)) ? "uk" : "en";
let lastHsTextColor = null;
let lastKillTextColor = null;
let lastMinimapBorderColor = null;
let frameCount = 0;
let totalFPSTime = 0;
const TWO_PI = 2 * Math.PI;
if (undefined === window[_0x2458(1825)]) {
  window[_0x2458(1825)] = {
    playerX: 0,
    playerY: 0
  };
}
var theoKzObjects = {
  FB_UserID: "",
  fps: false,
  ping: false,
  chngBotSkins: false,
  chngPersonsSkins: false,
  minimapTeamcod: false,
  hideYouNameInMinimap: false,
  Incognito: false,
  laserHS: false,
  spawnInfinity: false,
  backgroundSolid: false,
  sectores: false,
  visiblePowersAll: false,
  speed_zigzag: true,
  timerSpZg: false,
  zoomSpeed: localStorage.getItem(_0x2458(2022)) || 1,
  PotenciadorSize: localStorage[_0x2458(946)](_0x2458(1221)) || 2,
  PotenciadorAura: localStorage[_0x2458(946)](_0x2458(610)) || 1.2,
  ComidaShadow: localStorage[_0x2458(946)]("ComidaShadow") || 2,
  ComidaSize: localStorage[_0x2458(946)](_0x2458(1011)) || 2,
  mouseDelay: localStorage[_0x2458(946)](_0x2458(1500)) || 20,
  smoothCamera: localStorage[_0x2458(946)](_0x2458(1982)) || .5,
  eat_animation: .0025,
  PortionSize: localStorage[_0x2458(1221)] || 2,
  PortionAura: localStorage[_0x2458(610)] || 1.2,
  PortionTransparent: .8,
  FoodTransparent: .3,
  showTeamList: true,
  animationHeadshot: true,
  top8: true,
  killFeed: false,
  noAuras: true,
  noSkin: true,
  KeyCodeRespawn: localStorage[_0x2458(757)] || 82,
  KeyCodeAutoMov: localStorage[_0x2458(1387)] || window[_0x2458(446)],
  AbilityZ: false,
  dead: false,
  FoodShadow: localStorage[_0x2458(1794)] || 2,
  FoodSize: localStorage[_0x2458(1011)] || 2,
  headshot: 0,
  idReplaceSkin: 35,
  visibleSkin: [],
  pL: [],
  gamePad: theoEvents[_0x2458(1517)],
  mobile: false,
  loading: false,
  kill: 0,
  totalKills: 0,
  totalHeadshots: 0,
  adblock: false,
  CLIENTE_ADMIN: 1,
  CLIENTE_ACTIVO: 3,
  CLIENTE_INACTIVO: 4
};
saveGameLocal = localStorage.getItem(_0x2458(1596));
if (saveGameLocal && _0x2458(1476) !== saveGameLocal) {
  let t = JSON.parse(saveGameLocal);
  for (let e in t) theoKzObjects[e] = t[e];
}
let soundEnabled;
theoKzObjects[_0x2458(2016)] = true;
var zwormData = {
  id_user: "",
  nickname: "zworm",
  enemyNameHs: _0x2458(1461),
  teamCode: "",
  playerX: 0,
  playerY: 0,
  hs: 0,
  kill: 0,
  message: "",
  teamColor: localStorage[_0x2458(946)](_0x2458(2046)) || _0x2458(670),
  wssServer: ""
};
const socket = new WebSocket(_0x2458(1124));
const gameState = {
  players: new Map()
};
let lastUpdate = 0;
function handleMessage(t) {
  if (t && t[_0x2458(1720)] === zwormData[_0x2458(1720)]) {
    if (t[_0x2458(504)] && ["gg_107164783301809303612", _0x2458(1922), _0x2458(2012)][_0x2458(1631)](t[_0x2458(504)])) {
      createServerMessage(_0x2458(2100), t[_0x2458(1665)]);
      console[_0x2458(923)](_0x2458(1810) + t[_0x2458(504)] + _0x2458(2038) + t.message);
    }
    switch (t.type) {
      case _0x2458(2001):
        handlers.initialState(t.players);
        break;
      case "playerUpdate":
        handlers[_0x2458(1193)](t);
        break;
      case _0x2458(1698):
        handlers[_0x2458(1698)](t);
        break;
      case "playerDeath":
        handlers[_0x2458(1991)](t);
        break;
      case _0x2458(832):
        removePlayer(t.id);
        break;
      default:
        console[_0x2458(923)]("Mensaje desconocido:", t);
    }
  }
}
function getUserData(t) {
  return clientes[_0x2458(1023)][_0x2458(1110)](i => i[_0x2458(748)] === t);
}
socket[_0x2458(837)]("open", () => console[_0x2458(923)](_0x2458(814)));
socket[_0x2458(837)](_0x2458(2118), () => console[_0x2458(923)]("Desconectado del servidor WebSocket"));
socket[_0x2458(837)](_0x2458(1665), async t => {
  try {
    handleMessage(typeof t[_0x2458(660)] === _0x2458(602) ? JSON[_0x2458(1793)](t.data) : JSON[_0x2458(1793)](await t.data.text()));
  } catch (t) {
    console[_0x2458(682)](_0x2458(1992), t);
  }
});
let messageQueue = [];
let isProcessingQueue = false;
function sendMessage() {
  if (!canSendMessage) {
    return void console[_0x2458(923)](_0x2458(2048));
  }
  const e = $(_0x2458(1491))[_0x2458(898)]()[_0x2458(1209)]();
  if (!e) {
    return;
  }
  canSendMessage = false;
  setTimeout(() => canSendMessage = true, 1e3);
  const i = "zworm".substring(0, 16);
  const n = getUserData(zwormData[_0x2458(504)]);
  const o = {
    type: _0x2458(1587),
    id_user: "",
    nickname: i,
    message: e,
    wssServer: zwormData[_0x2458(1720)],
    color: n?.[_0x2458(1161)] || "rgba(255, 255, 255, 0.1)",
    image: n?.image || "default_icon.png"
  };
  messageQueue.push(o);
  processMessageQueue();
  displayMessage(i, e, zwormData[_0x2458(504)], o[_0x2458(1161)], o[_0x2458(612)], true);
  $(_0x2458(1491)).val("");
}
async function processMessageQueue() {
  if (!isProcessingQueue && 0 !== messageQueue[_0x2458(1543)]) {
    for (isProcessingQueue = true; messageQueue[_0x2458(1543)] > 0;) {
      const e = messageQueue[_0x2458(2072)]();
      try {
        socket.send(JSON[_0x2458(1812)](e));
        await new Promise(t => setTimeout(t, 50));
      } catch (e) {
        console[_0x2458(682)](_0x2458(1048), e);
      }
    }
    isProcessingQueue = false;
  }
}
function displayMessage(t, e, i, n, o, a = false) {
  const r = n || _0x2458(1711);
  const c = o ? _0x2458(805) + o + _0x2458(796) : "";
  const l = "\n        <div class=\"chat-message\" style=\"background: " + r + _0x2458(1573) + c + _0x2458(2043) + i + "\" style=\"color: " + _0x2458(a ? 763 : 608) + "\">" + t + _0x2458(1482) + e + "</span>\n        </div>\n    ";
  $(_0x2458(443))[_0x2458(1715)](l)[_0x2458(1668)]($(_0x2458(443))[0][_0x2458(2077)]);
}
const handlers = {
  initialState: t => {
    t[_0x2458(919)](t => gameState[_0x2458(994)].set(t[_0x2458(504)], t));
    console[_0x2458(923)](_0x2458(1241), t);
  },
  playerUpdate: t => {
    gameState[_0x2458(994)].set(t[_0x2458(504)], {
      ...t
    });
    updateTop8Hs();
    if (t[_0x2458(1954)] && t[_0x2458(1954)] === "") {
      createTeamUbication(t[_0x2458(1954)], t[_0x2458(2046)]);
      createTeamMessage(t[_0x2458(1954)], t.nickname, t.message);
    }
  },
  hsKillUpdate: t => {
    const i = gameState[_0x2458(994)][_0x2458(824)](t[_0x2458(504)]);
    if (i) {
      i[_0x2458(1261)] = t[_0x2458(1261)];
    } else {
      gameState.players.set(t[_0x2458(504)], {
        ...t,
        position: {
          x: 0,
          y: 0
        }
      });
    }
    updateTop8Hs();
  },
  playerDeath: t => {
    gameState[_0x2458(994)][_0x2458(1116)](t.id_user);
    console[_0x2458(923)](_0x2458(1675) + t.nickname + _0x2458(577));
    updateTop8Hs();
    clearTeamUbication();
  }
};
Object[_0x2458(1836)](window, handlers);
let pendingUpdate = null;
let updateTimeout = null;
function sendUpdate(t, e = {}) {
  const n = {
    type: t,
    id_user: "",
    nickname: zwormData[_0x2458(1908)],
    enemyNameHs: zwormData.enemyNameHs,
    hskill: {
      hs: 0,
      kill: zwormData[_0x2458(1320)]
    },
    position: {
      x: zwormData[_0x2458(1941)],
      y: zwormData[_0x2458(1347)]
    },
    message: zwormData[_0x2458(1665)],
    teamCode: "",
    teamColor: zwormData[_0x2458(2046)],
    wssServer: zwormData[_0x2458(1720)],
    ...e
  };
  if (socket.readyState === WebSocket[_0x2458(1876)]) {
    socket[_0x2458(922)](JSON[_0x2458(1812)](n));
  }
}
function sendPlayerUpdate(t, e) {
  const n = Date[_0x2458(1564)]();
  if (n - lastUpdate < 50) {
    if (pendingUpdate) {
      clearTimeout(updateTimeout);
    }
    pendingUpdate = {
      x: t,
      y: e
    };
    return void (updateTimeout = setTimeout(() => {
      if (pendingUpdate) {
        zwormData[_0x2458(1941)] = pendingUpdate.x;
        zwormData[_0x2458(1347)] = pendingUpdate.y;
        sendUpdate(_0x2458(1193), {
          position: pendingUpdate
        });
        pendingUpdate = null;
        lastUpdate = Date[_0x2458(1564)]();
      }
    }, 50 - (n - lastUpdate)));
  }
  zwormData[_0x2458(1941)] = t;
  zwormData[_0x2458(1347)] = e;
  sendUpdate(_0x2458(1193), {
    position: {
      x: t,
      y: e
    }
  });
  lastUpdate = n;
}
function sendPlayerDeath(t, e) {
  sendUpdate(_0x2458(1991), {
    hskill: {
      hs: t,
      kill: e
    }
  });
}
function sendHSKillUpdate(t, e) {
  sendUpdate(_0x2458(1698), {
    hskill: {
      hs: t,
      kill: e
    }
  });
}
let clientes = {
  clientesVencidos: [],
  clientesActivos: []
};
let clientsSkins = {
  clientsSkinsVencidos: [],
  clientsSkinsActivos: []
};
var TIME = new Date().getTime();
async function loadUsers() {
  await fetch("https://xseko60.github.io/wormExtension/api/clients.json?v=" + TIME)[_0x2458(664)](e => e[_0x2458(1621)]())[_0x2458(664)](e => {
    console[_0x2458(923)](e);
    if (e.success) {
      let t = e[_0x2458(1995)];
      clientes.clientesActivos = t[_0x2458(694)](t => t.client_ID);
    } else {
      clientes = {
        clientesVencidos: [],
        clientesActivos: []
      };
      alert(_0x2458(1251));
    }
  });
}
async function loadSkinUnlock() {
  await fetch("https://xseko60.github.io/wormExtension/api/skinsActived.json?v=" + TIME)[_0x2458(664)](e => e[_0x2458(1621)]()).then(e => {
    console.log(e);
    if (e[_0x2458(1672)]) {
      let t = e[_0x2458(1995)];
      clientsSkins[_0x2458(902)] = t[_0x2458(694)](t => t[_0x2458(748)]);
    } else {
      clientsSkins = {
        clientsSkinsVencidos: [],
        clientsSkinsActivos: []
      };
      alert("An error occurred while loading clients");
    }
  });
}
loadUsers();
loadSkinUnlock();
let serverDataTimMap = [];
async function loadServersTimMap() {
  const e = "https://xseko60.github.io/wormExtension/api/serversTimMap.json?v=" + TIME;
  try {
    const i = await fetch(e);
    const n = await i[_0x2458(792)]();
    const o = /<div class=\\"div_item\\">([\s\S]*?)<\\\/div>/g;
    const a = [...n[_0x2458(1430)](o)];
    serverDataTimMap = a[_0x2458(928)](e => {
      const n = e[1];
      const o = n[_0x2458(1784)](/<a href=\\"(.*?)\\" class=\\"select_item\\" data-name=\\"(.*?)\\" data-port=\\"(.*?)\\">(.*?)<\\\/a>/);
      if (!o) {
        return null;
      }
      const a = o[3][_0x2458(1799)](/\\\//g, "/");
      const s = o[2];
      const r = decodeUnicode(o[4][_0x2458(1209)]());
      const c = n[_0x2458(1784)](/<img src=\\"(.*?)\\"/);
      const l = c ? c[1][_0x2458(1799)](/\\\//g, "/") : "";
      return {
        dataCon: a,
        dataRoom: s,
        dataType: _0x2458(906),
        imgSrc: l,
        serverName: r
      };
    })[_0x2458(694)](Boolean);
  } catch (e) {
    console[_0x2458(682)](_0x2458(676), e);
  }
}
var top1Servers = {};
async function extractTopScores() {
  const e = _0x2458(1285) + Date[_0x2458(1564)]();
  try {
    let i = await fetch(e);
    if (!i.ok) {
      throw new Error(_0x2458(977) + i[_0x2458(1801)]);
    }
    let n = await i[_0x2458(1621)]();
    top1Servers = {};
    for (let e in n) {
      const i = n[e];
      if (!i[_0x2458(513)]) {
        continue;
      }
      const o = i.players || [];
      const a = i[_0x2458(513)];
      if (o[_0x2458(1543)] > 0) {
        let n = o[_0x2458(723)]((e, i) => i[_0x2458(644)] > e[_0x2458(644)] ? i : e, o[0]);
        let s = n[_0x2458(644)] >= 1e6 ? (n[_0x2458(644)] / 1e6)[_0x2458(547)](1) + "M" : n[_0x2458(644)] >= 1e3 ? (n[_0x2458(644)] / 1e3)[_0x2458(547)](1) + "K" : n[_0x2458(644)][_0x2458(1203)]();
        let r = n[_0x2458(644)] > 1e7 ? "green" : n[_0x2458(644)] > 2e6 ? "orange" : _0x2458(770);
        top1Servers[a] = {
          ServerName: n[_0x2458(951)],
          Initials: e,
          Score: s,
          StatusColor: r,
          Avatar: i[_0x2458(1748)] || null,
          Name: n.Name || _0x2458(1930),
          TopPlayers: o.slice(0, 10)
        };
      } else if (i[_0x2458(513)]) {
        top1Servers[a] = {
          ServerName: i[_0x2458(1850)],
          Initials: e,
          Score: _0x2458(904),
          StatusColor: "gray",
          Avatar: i[_0x2458(1748)] || _0x2458(1677),
          Name: _0x2458(1714),
          TopPlayers: []
        };
      }
    }
    console[_0x2458(923)]("Datos de Top 1 organizados por WSS:", top1Servers);
  } catch (e) {
    console[_0x2458(682)](_0x2458(1736), e);
  }
}
let serverData = [];
async function loadServersWormWorld() {
  const e = Date.now();
  const i = _0x2458(1528) + e;
  try {
    const e = await fetch(i);
    const n = await e[_0x2458(1621)]();
    serverData = n.map(e => ({
      dataCon: e[_0x2458(1979)],
      dataRoom: e.dataRoom,
      serverName: e[_0x2458(1850)],
      dataType: e[_0x2458(1959)],
      imgSrc: e[_0x2458(1837)]
    }));
    console[_0x2458(923)](serverData);
  } catch (e) {
    console[_0x2458(682)](_0x2458(611), e);
  }
}
function formatScore(t) {
  return t >= 1e6 ? (t / 1e6)[_0x2458(547)](1) + "M" : t >= 1e3 ? (t / 1e3)[_0x2458(547)](1) + "K" : t[_0x2458(1203)]();
}
function getStatusColor(t) {
  return t > 1e7 ? "green" : t > 2e6 ? "orange" : _0x2458(770);
}
async function registerUpdatePlayer(t) {
  await fetch(_0x2458(499), {
    method: _0x2458(1015),
    body: JSON[_0x2458(1812)]({
      data: t
    })
  })[_0x2458(664)](t => t[_0x2458(1621)]())[_0x2458(664)](t => {
    console[_0x2458(923)](t);
  });
}
async function checkSubscriptionExpired(t) {
  await fetch(_0x2458(985), {
    method: "POST",
    body: JSON.stringify({
      code: t
    })
  })[_0x2458(664)](t => t[_0x2458(1621)]())[_0x2458(664)](t => {
    console.log(t);
  });
}
function fetchCustomLogo(t) {
  $[_0x2458(1723)]({
    url: "https://swykz.theoxt.com/api/streming.php",
    method: _0x2458(910),
    dataType: _0x2458(1621),
    success: function (i) {
      var o = i[_0x2458(1833)][_0x2458(588)][_0x2458(694)](function (e) {
        return e[_0x2458(485)] === t;
      });
      if (0 !== o[_0x2458(1543)]) {
        var a = o[0];
        $(_0x2458(1484)).attr(_0x2458(1260), a.logo);
        $(_0x2458(1134))[_0x2458(860)](_0x2458(1260), a[_0x2458(2017)]);
        $(".mm-logo")[_0x2458(860)]("src", a[_0x2458(2017)]);
      } else {
        console[_0x2458(923)](_0x2458(621));
      }
    },
    error: function (t) {
      console[_0x2458(682)]("Error al obtener los datos:", t);
    }
  });
}
async function init() {
  await Promise[_0x2458(1468)]([extractTopScores(), loadServersWormWorld(), loadServersTimMap()]);
  console[_0x2458(923)]("Todo listo");
  renderInterface(serverData, serverDataTimMap, top1Servers);
}
function renderInterface(t, e, i) {
  $(".description-text")[_0x2458(909)]();
  let o = _0x2458(1493);
  const a = {
    sao: "br",
    vin: "us",
    dal: "us",
    fra: "de",
    sgp: "sg",
    tok: "jp",
    syd: "au",
    lon: "gb",
    tor: "ca",
    mex: "mx",
    sin: "sg",
    hil: "us",
    gra: "de"
  };
  const s = [{
    code: "br",
    name: "Peru"
  }, {
    code: "mx",
    name: _0x2458(1499)
  }, {
    code: "us",
    name: _0x2458(1842)
  }, {
    code: "ca",
    name: _0x2458(1088)
  }, {
    code: "de",
    name: "Germania"
  }, {
    code: "fr",
    name: "Francia"
  }, {
    code: "sg",
    name: _0x2458(2024)
  }, {
    code: "jp",
    name: "Japon"
  }, {
    code: "au",
    name: "Australia"
  }, {
    code: "gb",
    name: _0x2458(1576)
  }];
  $(_0x2458(1167))[_0x2458(1715)](_0x2458(1888));
  $(_0x2458(635))[_0x2458(704)](function () {
    let e = $(_0x2458(1227))[_0x2458(898)]();
    let i = $(_0x2458(760))[_0x2458(898)]();
    if (e && "" !== i) {
      zw_lastserver = _0x2458(647) + e + ":" + i + _0x2458(812);
      anApp.r.Hd();
      anApp.sa(zw_lastserver);
      zw_servertext[_0x2458(792)] = "" + zw_lastserver.replace("wss://", "")[_0x2458(1799)](_0x2458(1259), "")[_0x2458(1799)](_0x2458(812), "");
    } else {
      alert(_0x2458(1239));
    }
  });
  const r = $("<ul class=\"ui-tabs-nav\"></ul>");
  const c = $("<div class=\"servers-container\"></div>");
  function l(t) {
    $(_0x2458(1148))[_0x2458(909)]();
    t[_0x2458(919)](function (t) {
      !function (t, e) {
        r = t[_0x2458(1096)];
        let o = /^\d+[a-z]{2}$/i[_0x2458(1360)](r) ? r[_0x2458(1303)](-2)[_0x2458(1768)]() : /^[A-Z]{2}_\d+$/i[_0x2458(1360)](r) ? r[_0x2458(2081)]("_")[0].toLowerCase() : _0x2458(1560);
        var r;
        if ("ae" === o) {
          o = "gb";
        }
        if (!s[_0x2458(601)](t => t[_0x2458(432)] === o)) {
          return;
        }
        let l = t[_0x2458(1979)]?.[_0x2458(1784)](/wss:\/\/([a-z]+)-/i);
        let h = l ? l[1] : null;
        let d = a[h] ? a[h][_0x2458(1839)]() : _0x2458(1279);
        t[_0x2458(1096)].trim().toLowerCase();
        const x = t[_0x2458(1979)] || t[_0x2458(726)];
        let u = e[x] || {
          Score: _0x2458(648),
          StatusColor: _0x2458(1988),
          Avatar: _0x2458(1677)
        };
        let _ = $(_0x2458(1474) + x + "\" value=\"" + t[_0x2458(1096)] + _0x2458(683) + u[_0x2458(644)] + _0x2458(522) + u[_0x2458(1129)] + "\">\n                    <span class=\"status-dot\" style=\"background-color: " + u[_0x2458(1343)] + _0x2458(997) + t[_0x2458(1850)] + _0x2458(1841) + d + "</td>\n                <td class=\"server-top1\" data-score=\"" + u.Score + _0x2458(522) + u.Avatar + "\">" + u.Score + _0x2458(490) + t.imgSrc + _0x2458(1165));
        $(_0x2458(1803) + o + _0x2458(1600)).append(_);
      }({
        serverName: t[_0x2458(1850)] || t[_0x2458(1582)] || "???",
        dataCon: t[_0x2458(1979)] || t[_0x2458(726)],
        dataRoom: t.dataRoom || t[_0x2458(1035)] || _0x2458(648),
        imgSrc: t[_0x2458(1837)] || t.streamerImg || _0x2458(1677)
      }, i);
    });
  }
  s[_0x2458(919)](function (t, e) {
    r.append(_0x2458(1159) + (0 === e ? _0x2458(1882) : "") + _0x2458(441) + t[_0x2458(432)] + _0x2458(825) + t[_0x2458(432)] + "\"></span></a>\n            </li>\n        ");
    c[_0x2458(1715)](_0x2458(2103) + t[_0x2458(432)] + "\" style=\"display: " + _0x2458(0 === e ? 1927 : 1505) + _0x2458(1897));
  });
  $(_0x2458(1167))[_0x2458(1715)](r, c);
  $(_0x2458(1405))[_0x2458(704)](function () {
    var e = $(this)[_0x2458(660)]("country");
    $(_0x2458(1405))[_0x2458(791)](_0x2458(1882));
    $(this)[_0x2458(701)](_0x2458(1882));
    $(".servers-container > div")[_0x2458(1817)]();
    $(_0x2458(1803) + e)[_0x2458(710)](200);
  });
  $(document).on(_0x2458(704), "#toggleServerSource", function () {
    o = o === _0x2458(1493) ? _0x2458(1821) : _0x2458(1493);
    $(this)[_0x2458(792)](o === _0x2458(1493) ? "🔄 Switch to TimMap Servers" : _0x2458(930));
    l(o === _0x2458(1493) ? t : e);
  });
  l(t);
  $(document).on(_0x2458(704), _0x2458(1965), function () {
    let e = $(this)[_0x2458(860)]("value");
    let i = $(this).attr(_0x2458(1558));
    if (i) {
      anApp.r.Hd();
      anApp.sa(i);
      zw_servertext[_0x2458(792)] = e;
      setTimeout(() => {
        zw_servertext[_0x2458(792)] = e;
      }, 2e3);
    }
  });
  createFloatingElements();
  bindHoverEvents(_0x2458(2007));
  bindHoverEvents(_0x2458(915));
}
function createFloatingElements() {
  if (!document.getElementById(_0x2458(1701))) {
    const e = document[_0x2458(1786)](_0x2458(944));
    e.id = _0x2458(1701);
    Object.assign(e[_0x2458(437)], {
      position: "absolute",
      display: _0x2458(1505),
      pointerEvents: "none",
      opacity: "0",
      transition: _0x2458(1629),
      zIndex: _0x2458(1695)
    });
    const i = document[_0x2458(1786)](_0x2458(1530));
    i.id = _0x2458(1779);
    Object[_0x2458(1836)](i[_0x2458(437)], {
      width: "100px",
      height: _0x2458(1880),
      borderRadius: _0x2458(650),
      border: _0x2458(1671),
      boxShadow: _0x2458(1106),
      backgroundColor: "#1a1a1a"
    });
    e[_0x2458(502)](i);
    document[_0x2458(841)][_0x2458(502)](e);
  }
  if (!document[_0x2458(2056)]("top10Preview")) {
    const e = document[_0x2458(1786)](_0x2458(944));
    e.id = _0x2458(1194);
    Object.assign(e[_0x2458(437)], {
      position: _0x2458(1495),
      display: _0x2458(1505),
      pointerEvents: _0x2458(1505),
      opacity: "0",
      transition: _0x2458(1629),
      zIndex: _0x2458(1695),
      padding: "10px",
      borderRadius: _0x2458(721),
      backgroundColor: _0x2458(756),
      color: _0x2458(655),
      fontSize: _0x2458(549),
      minWidth: _0x2458(1782),
      boxShadow: "0 0 10px rgba(0,0,0,0.6)",
      fontFamily: _0x2458(1920)
    });
    const i = document[_0x2458(1786)](_0x2458(944));
    i.id = _0x2458(1424);
    e.appendChild(i);
    document[_0x2458(841)][_0x2458(502)](e);
  }
}
function showAvatar(t, e) {
  if (e) {
    $(_0x2458(979))[_0x2458(860)](_0x2458(1260), e);
    $(_0x2458(1828))[_0x2458(1305)]({
      top: t[_0x2458(1158)] + 10 + "px",
      left: t[_0x2458(1609)] + 10 + "px",
      display: "block"
    })[_0x2458(1561)](true, true).fadeTo(200, 1);
  }
}
function showTop10(t, e) {
  if (e[_0x2458(1543)] > 0) {
    let n = _0x2458(1854);
    n += e[_0x2458(928)]((t, e) => {
      const o = 0 === e;
      return _0x2458(2114) + (o ? _0x2458(1440) : "") + _0x2458(1477) + (o ? "⭐️" : e + 1 + ".") + " " + t[_0x2458(1075)][_0x2458(1799)](/[^\x20-\x7E¡-ÿ\u0E00-\u0E7F\u0900-\u097F]/g, "").trim() + _0x2458(435) + (t[_0x2458(644)] >= 1e6 ? (t[_0x2458(644)] / 1e6)[_0x2458(547)](1) + "M" : t[_0x2458(644)] >= 1e3 ? (t[_0x2458(644)] / 1e3)[_0x2458(547)](1) + "K" : t[_0x2458(644)][_0x2458(1203)]()) + "</span>\n                </div>";
    })[_0x2458(1083)]("");
    $(_0x2458(1312))[_0x2458(1104)](n);
    $(_0x2458(1588)).css({
      top: t[_0x2458(1158)] + 10 + 100 + 10 + "px",
      left: t[_0x2458(1609)] + 10 + "px",
      display: _0x2458(1927)
    })[_0x2458(1561)](true, true).fadeTo(200, 1);
  }
}
function bindHoverEvents(t) {
  $(document)[_0x2458(1787)](_0x2458(1233), t).on(_0x2458(1233), t, function (t) {
    const n = $(this)[_0x2458(1014)]("tr")[_0x2458(860)](_0x2458(1558));
    if (!n) {
      return;
    }
    const o = top1Servers[n];
    if (o) {
      showAvatar(t, o[_0x2458(1129)]);
      showTop10(t, o[_0x2458(1507)] || []);
    }
  });
  $(document)[_0x2458(1787)](_0x2458(1699), t).on(_0x2458(1699), t, function (t) {
    $(_0x2458(1828))[_0x2458(1305)]({
      top: t.pageY + 10 + "px",
      left: t.pageX + 10 + "px"
    });
    $(_0x2458(1588))[_0x2458(1305)]({
      top: t.pageY + 10 + 100 + 10 + "px",
      left: t[_0x2458(1609)] + -75 + "px"
    });
  });
  $(document).off("mouseleave", t).on(_0x2458(799), t, function () {
    $("#avatarPreview")[_0x2458(1561)](true, true).fadeTo(300, 0, function () {
      $(this)[_0x2458(1817)]();
    });
    $(_0x2458(1588)).stop(true, true)[_0x2458(881)](300, 0, function () {
      $(this)[_0x2458(1817)]();
    });
  });
}
function sanitize(t) {
  return t[_0x2458(1799)](/[^\x20-\x7E¡-ÿ\u0E00-\u0E7F\u0900-\u097F]/g, "").trim();
}
function obtenerImagenPorSeleccion(t) {
  let i = "";
  switch (t) {
    case "0":
      i = _0x2458(1067);
      break;
    case "1":
      i = _0x2458(453);
      break;
    case "2":
      i = _0x2458(795);
      break;
    case "3":
      i = "https://asserts.wormworld.io/backgrounds/bkgnd10.png";
      break;
    case "4":
      i = "https://asserts.wormworld.io/backgrounds/bkgnd6.png";
      break;
    case "5":
      i = _0x2458(1641);
      break;
    case "6":
      i = _0x2458(746);
      break;
    case "7":
      i = _0x2458(2093);
      break;
    case "8":
      i = _0x2458(1370);
      break;
    case "9":
      i = "https://asserts.wormworld.io/backgrounds/bg_sky_4.png";
      break;
    case "10":
      i = "https://asserts.wormworld.io/backgrounds/bg_sky_5.png";
      break;
    case "11":
      i = _0x2458(911);
      break;
    case "12":
      i = _0x2458(519);
      break;
    case "13":
      i = _0x2458(1434);
      break;
    case "14":
      i = _0x2458(1212);
      break;
    default:
      console[_0x2458(755)](_0x2458(551));
  }
  return i;
}
function startInterval() {
  clearInterval(intervalID);
  if (null === intervalID) {
    intervalID = setInterval(function () {
      var t = anApp.s.H.sk;
      let e = Math.PI;
      var i = t + e / 360 * 9;
      if (i >= e) {
        i = -t;
      }
      anApp.s.H.sk = i;
    }, 55);
  }
}
function adjustInterval() {
  if (cycleCounter >= 40) {
    if (isIncrementing) {
      initialInterval += 25;
    } else {
      initialInterval -= 100;
    }
    cycleCounter = 1;
  }
}
function controlIntervalAdjustment() {
  if (55 === initialInterval && cycleCounter >= 40) {
    initialInterval += 25;
    cycleCounter = 1;
    isIncrementing = true;
  }
  if (80 === initialInterval) {
    adjustInterval();
  }
  if (105 === initialInterval) {
    adjustInterval();
  }
  if (130 === initialInterval) {
    adjustInterval();
  }
  if (155 === initialInterval) {
    adjustInterval();
  }
  if (180 === initialInterval) {
    adjustInterval();
  }
  if (205 === initialInterval) {
    adjustInterval();
  }
  if (230 === initialInterval) {
    adjustInterval();
  }
  if (255 === initialInterval) {
    adjustInterval();
  }
  if (280 === initialInterval) {
    adjustInterval();
  }
  if (305 === initialInterval) {
    adjustInterval();
  }
  if (330 === initialInterval) {
    adjustInterval();
  }
  if (355 === initialInterval) {
    adjustInterval();
  }
  if (380 === initialInterval) {
    adjustInterval();
  }
  if (405 === initialInterval) {
    adjustInterval();
  }
  if (430 === initialInterval) {
    adjustInterval();
  }
  if (455 === initialInterval && cycleCounter >= 40) {
    initialInterval -= 100;
    cycleCounter = 1;
    isIncrementing = false;
  }
}
function manageIntervalCycle() {
  clearInterval(intervalID);
  if (null === intervalID) {
    let t = anApp.s.H.sk;
    let e = Math.PI;
    let i = t + e / 360 * 9;
    if (i >= e) {
      i = -t;
    }
    anApp.s.H.sk = i;
    cycleCounter += 1;
    controlIntervalAdjustment();
    if (isRunning) {
      intervalID = setInterval(manageIntervalCycle, initialInterval);
    }
  }
}
function starAutoCircle() {
  isRunning = true;
  initialInterval = 55;
  cycleCounter = 1;
  isIncrementing = true;
  manageIntervalCycle();
}
init();
const isPremiumUser = localStorage.getItem(_0x2458(992)) === _0x2458(1348);
const wormxt_5dlrs_Obj = {
  visiblePowersAll: false,
  speed_zigzag: true
};
var wormxt_Obj = {
  laserColor: _0x2458(1962),
  colorFondo: _0x2458(1860),
  colorBorde: _0x2458(1115),
  laserHS: false,
  spawnInfinity: false,
  backgroundSolid: false,
  sectores: false,
  CLIENTE_ADMIN: 1,
  CLIENTE_ACTIVO: 3,
  CLIENTE_INACTIVO: 4
};
const showVersionPays = async function (t) {
  var i = clientes[_0x2458(1023)].find(function (i) {
    return i[_0x2458(748)] === t[_0x2458(1435)].userId;
  });
  if (i) {
    console[_0x2458(923)](_0x2458(876) + t.user_data.userId + _0x2458(1881));
    if (new Date() > new Date(i[_0x2458(1670)])) {
      console.log("La fecha de expiraci�n ha vencido.");
      localStorage.setItem(_0x2458(992), _0x2458(906));
    } else {
      console.log(_0x2458(1277));
      settings5dolars(i[_0x2458(1670)]);
      localStorage.setItem(_0x2458(992), _0x2458(1348));
    }
  } else {
    console[_0x2458(923)](_0x2458(2106));
    localStorage.setItem(_0x2458(992), _0x2458(906));
  }
};
function setSectorsGame() {
  zw_Background[_0x2458(1166)]();
  zw_Background[_0x2458(469)]();
  console[_0x2458(923)](theoObjects.colorFondo);
  if (theoKzObjects[_0x2458(576)]) {
    zw_Background[_0x2458(1186)]("0x" + theoObjects.colorFondo, 1);
    zw_Background[_0x2458(713)](1, "0xFF0000", 1);
    zw_Background[_0x2458(1298)](0, 0, 500);
    zw_Background[_0x2458(1919)]();
  } else if (theoKzObjects[_0x2458(656)]) {
    var e = _0x2458(728).split("");
    var i = 2 * Math.PI / 10;
    for (var n = 0; n < 5; n++) {
      for (var o = 0; o < 10; o++) {
        var a = o * i;
        var s = (o + 1) * i;
        var r = 500 - 100 * (n + .01);
        var c = 0 + Math[_0x2458(1651)](a) * r;
        var l = 0 + Math.sin(a) * r;
        zw_Background.beginFill("0x" + theoObjects.colorFondo, 1);
        zw_Background[_0x2458(713)](.5, "0x" + theoObjects[_0x2458(2087)], 1);
        zw_Background[_0x2458(1108)](0, 0);
        zw_Background[_0x2458(1117)](c, l);
        zw_Background[_0x2458(2041)](0, 0, r, a, s);
        zw_Background[_0x2458(1117)](0, 0);
        zw_Background.endFill();
        if (n < 4) {
          var h = e[n] + (o + 1);
          if (!zw_Background[_0x2458(1890)](h)) {
            var d = new PIXI.TextStyle({
              fontSize: "15px",
              fill: _0x2458(1411)
            });
            var x = new PIXI.Text(h, d);
            x[_0x2458(1101)].set(.5);
            var u = a + (s - a) / 2;
            var _ = r - 50;
            var f = 0 + Math.cos(u) * _;
            var b = 0 + Math.sin(u) * _;
            x[_0x2458(798)][_0x2458(1756)](f, b);
            x[_0x2458(1582)] = h;
            zw_Background[_0x2458(542)](x);
          }
        }
      }
    }
  } else {
    zw_Background[_0x2458(1166)]();
    zw_Background[_0x2458(469)]();
    zw_Background[_0x2458(713)](1, 16711680, 1);
    zw_Background.drawCircle(0, 0, 500);
    zw_Background[_0x2458(1919)]();
  }
}
function decodeUnicode(t) {
  return t.replace(/\\u[\dA-F]{4}/gi, function (t) {
    return String[_0x2458(1610)](parseInt(t[_0x2458(1799)](/\\u/, ""), 16));
  })[_0x2458(1799)](/\\u[0-9A-F]{2}/g, function (t) {
    return String[_0x2458(1610)](parseInt(t[_0x2458(1799)](/\\u/, ""), 16));
  });
}
const settings5dolars = async function (t) {
  var i = $("div[category='theme']");
  addMinicolor(i[1], _0x2458(1336), _0x2458(1427), _0x2458(616), theoObjects.colorFondo);
  addMinicolor(i[1], _0x2458(738), _0x2458(1577), _0x2458(2087), "FF0000");
  addMinicolor(i[1], _0x2458(1258), "LASER", _0x2458(1648), theoObjects[_0x2458(1648)]);
  addMinicolor(i[1], _0x2458(1389), _0x2458(1133), "hsTextColor", theoObjects.hsTextColor);
  addMinicolor(i[1], _0x2458(1107), _0x2458(1497), _0x2458(1538), theoObjects.killTextColor);
  addMinicolor(i[1], _0x2458(1633), _0x2458(1751), _0x2458(1680), theoObjects[_0x2458(1680)]);
  wormxt_5dlrs_Obj.visiblePowersAll = false;
  wormxt_5dlrs_Obj[_0x2458(1226)] = true;
  $(_0x2458(1684))[_0x2458(1715)]("<i class=\"material-icons\"  id=\"user_config\" style=\"position: absolute;background-color: transparent;border-radius: 5px;\">menu</i>");
  $(_0x2458(533)).on(_0x2458(704), function () {
    $(_0x2458(1308)).css("position", "absolute")[_0x2458(1305)](_0x2458(1470), _0x2458(1927));
    giroActive = false;
    toggleGiro();
  });
  let n;
  let o = localStorage[_0x2458(946)](_0x2458(600));
  if (o === _0x2458(1348)) {
    n = true;
    theoKzObjects.showTeamList = true;
  } else if ("false" === o) {
    n = false;
    theoKzObjects[_0x2458(600)] = false;
  } else {
    n = theoKzObjects[_0x2458(600)];
  }
  let a;
  let s = localStorage[_0x2458(946)](_0x2458(820));
  if ("true" === s) {
    a = true;
    theoKzObjects[_0x2458(1109)] = true;
  } else if (s === _0x2458(906)) {
    a = false;
    theoKzObjects[_0x2458(1109)] = false;
  } else {
    a = theoKzObjects[_0x2458(1109)];
  }
  $(_0x2458(460))[_0x2458(1661)](_0x2458(887), false);
  $(_0x2458(460)).on(_0x2458(704), function () {
    if (this[_0x2458(887)]) {
      wormxt_Obj[_0x2458(576)] = true;
      setSectorsGame();
    } else {
      wormxt_Obj.backgroundSolid = false;
      setSectorsGame();
    }
  });
  $("#showAnimationHeadshot").on(_0x2458(1862), function () {
    theoKzObjects[_0x2458(1109)] = $(this).is(":checked");
    localStorage[_0x2458(1425)](_0x2458(820), theoKzObjects[_0x2458(1109)]);
    console[_0x2458(923)](_0x2458(1452), true);
  });
  $(_0x2458(1544)).on(_0x2458(1862), function () {
    theoKzObjects[_0x2458(600)] = $(this).is(_0x2458(1200));
    localStorage[_0x2458(1425)](_0x2458(600), true);
    console.log("Mostrar lista de amigos:", theoKzObjects[_0x2458(600)]);
  });
  $(_0x2458(2098)).on(_0x2458(704), function () {
    $(_0x2458(1308))[_0x2458(1305)](_0x2458(1470), _0x2458(1505));
    giroActive = true;
    toggleGiro();
  });
  let r = $(_0x2458(1458));
  let c = $(_0x2458(1150));
  for (let t = 1; t < 42; t++) {
    const i = _0x2458(487) + t[_0x2458(1203)]()[_0x2458(1297)](2, "0") + ".cur";
    const n = 1 === t ? _0x2458(615) : "";
    const o = $("<img>")[_0x2458(860)]({
      src: i,
      "data-cursor": i,
      alt: _0x2458(878) + t
    });
    const a = $("<div>")[_0x2458(701)](_0x2458(1172))[_0x2458(701)](n).append(o);
    c[_0x2458(1715)](a);
  }
  r[_0x2458(1715)](c);
  $(_0x2458(467))[_0x2458(1715)](r);
  $(_0x2458(1163))[_0x2458(1895)](_0x2458(1693));
  $(_0x2458(772));
  for (let t = 0; t < 20; t++) {
    $(_0x2458(1441))[_0x2458(701)](_0x2458(790))[_0x2458(1305)]({
      left: Math.random() * window[_0x2458(1549)] + "px",
      top: Math[_0x2458(2002)]() * window[_0x2458(1057)] + "px",
      animationDuration: 2 + Math[_0x2458(2002)]() + _0x2458(720) + (5 + 10 * Math.random()) + "s"
    });
  }
  $(_0x2458(1040))[_0x2458(668)](_0x2458(1986) + t + "</span>\n        </div>\n    ");
  $(_0x2458(818))[_0x2458(1715)]("\n\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">Zoom</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"zoom-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">Replay</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"restart-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">Explote</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"wormExplot-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">LaserHS</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"laserHSkey-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">Sectors</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"sectores-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">Background</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"background-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">Giro</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"giro-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">No Skins</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"noSkin-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        \n                            <div class=\"option hotkey\">\n                                <div class=\"hotkey-name\">\n                                    <p class=\"hotkey-letter\">No Auras</p>\n                                </div>\n                                <div class=\"hotkey-keycode\">\n                                    <input type=\"text\" id=\"noAuras-key\" class=\"key-input\">\n                                </div>\n                            </div>\n                        ");
  $(_0x2458(1362))[_0x2458(898)](keys[_0x2458(707)]);
  $(_0x2458(1164)).val("r");
  $(_0x2458(765))[_0x2458(898)](keys[_0x2458(2080)]);
  $("#wormExplot-key")[_0x2458(898)](keys[_0x2458(1580)]);
  $(_0x2458(558)).val(keys[_0x2458(1036)]);
  $(_0x2458(913))[_0x2458(898)]("f");
  $(_0x2458(1033))[_0x2458(898)](keys[_0x2458(1737)]);
  $(_0x2458(1838))[_0x2458(898)](keys[_0x2458(656)]);
  $("#background-key")[_0x2458(898)]("c");
  $(_0x2458(1783)).on(_0x2458(704), function () {
    $("#hotkeys-icon")[_0x2458(701)](_0x2458(615));
    $(_0x2458(1717))[_0x2458(791)](_0x2458(615));
    $(_0x2458(1018))[_0x2458(862)]();
    $("#user-section")[_0x2458(1817)]();
  });
  $(".key-input")[_0x2458(827)](function (t) {
    t.stopPropagation();
  });
  $(_0x2458(1958))[_0x2458(562)](function (t) {
    t[_0x2458(1412)]();
    var n = t.key[_0x2458(1768)]();
    $(this)[_0x2458(898)](n);
    switch ($(this)[_0x2458(860)]("id")) {
      case "zoom-key":
        cambiarKey(_0x2458(707), n);
        break;
      case _0x2458(940):
        cambiarKey("restart", n);
        break;
      case _0x2458(1074):
        cambiarKey(_0x2458(1580), n);
        break;
      case _0x2458(578):
        cambiarKey(_0x2458(2080), n);
        break;
      case "giro-key":
        cambiarKey("giro", n);
        break;
      case "noSkin-key":
        cambiarKey(_0x2458(2061), n);
        break;
      case _0x2458(1286):
        cambiarKey(_0x2458(1737), n);
        break;
      case _0x2458(952):
        cambiarKey(_0x2458(656), n);
        break;
      case _0x2458(1346):
        cambiarKey(_0x2458(1555), n);
    }
    $(this)[_0x2458(571)]();
  });
  $(_0x2458(1918))[_0x2458(1715)](c);
  $(_0x2458(1547)).on(_0x2458(704), function () {
    var i = $(this)[_0x2458(1110)](_0x2458(1530)).attr(_0x2458(1260));
    $(_0x2458(1002))[_0x2458(1305)]({
      cursor: _0x2458(921) + i + _0x2458(607)
    });
    $(_0x2458(1547))[_0x2458(791)](_0x2458(615));
    $(this)[_0x2458(701)](_0x2458(615));
  });
  $(_0x2458(1197)).html("<span style='color: #98928a;' class='settings_span'>EXP: " + t + "</span>");
  $("#sound-hs").val(_0x2458(1237));
  $(_0x2458(769)).val(_0x2458(1207));
  zw_hssound = new Audio($(_0x2458(2008)).val());
  zw_laughsound = new Audio($("#sound-10hs")[_0x2458(898)]());
  $("#sound-hs").on("input", function () {
    zw_hssound[_0x2458(1260)] = $(this)[_0x2458(898)]();
  });
  $(_0x2458(769)).on(_0x2458(534), function () {
    zw_laughsound[_0x2458(1260)] = $(this).val();
  });
  $(_0x2458(995))[_0x2458(1895)](_0x2458(732) + _0x2458(1807) + "<span class=\"names_settings\" id=\"laser\"> " + lenguaje[idiomaActual][_0x2458(433)] + _0x2458(1168) + _0x2458(1978) + _0x2458(732) + "<input type=\"checkbox\" id=\"settings-sectores-switch\">" + _0x2458(1146) + lenguaje[idiomaActual].sectores + _0x2458(1168) + _0x2458(1978) + _0x2458(732) + _0x2458(1539) + _0x2458(1997) + _0x2458(1978) + _0x2458(732) + _0x2458(842) + _0x2458(540) + _0x2458(1978) + _0x2458(553) + _0x2458(984) + "<input id=\"color_paletRGB\" type=\"color\" value=\"#000A11\"><span class=\"names_settings\"  id=\"colorJuego\" > " + lenguaje[idiomaActual][_0x2458(965)] + _0x2458(474) + _0x2458(1978) + _0x2458(984) + _0x2458(593) + _0x2458(890) + lenguaje[idiomaActual].colorLaser + _0x2458(474) + _0x2458(1978) + _0x2458(984) + _0x2458(1822) + _0x2458(1211) + lenguaje[idiomaActual][_0x2458(2087)] + "</span>" + _0x2458(1978));
  const l = {
    color_paletRGB: t => wormxt_Obj[_0x2458(616)] = t,
    color_palet: t => wormxt_Obj[_0x2458(1648)] = t,
    color_palet2: t => wormxt_Obj[_0x2458(2087)] = t
  };
  $(_0x2458(604))[_0x2458(1862)](function () {
    const i = $(this)[_0x2458(860)]("id");
    const n = $(this).val()[_0x2458(1799)]("#", "");
    setSectorsGame();
    console[_0x2458(923)]("Recibiendo el color reemplazado para " + i + ": " + n);
    if (l[i]) {
      l[i](n);
    }
    setSectorsGame();
  });
  wormxt_5dlrs_Obj[_0x2458(714)] = false;
  $(_0x2458(871))[_0x2458(1661)]("checked", wormxt_5dlrs_Obj[_0x2458(714)]);
  $("#settings-notAbilityAll-switch").on("click", function () {
    if (this[_0x2458(887)]) {
      wormxt_5dlrs_Obj[_0x2458(714)] = true;
    } else {
      wormxt_5dlrs_Obj[_0x2458(714)] = false;
    }
  });
  wormxt_5dlrs_Obj[_0x2458(1226)] = true;
  $(_0x2458(1061))[_0x2458(1661)]("checked", wormxt_5dlrs_Obj[_0x2458(1226)]);
  $(_0x2458(1061)).on(_0x2458(704), function () {
    if (this.checked) {
      wormxt_5dlrs_Obj.speed_zigzag = true;
    } else {
      wormxt_5dlrs_Obj[_0x2458(1226)] = false;
    }
  });
  $(_0x2458(1883))[_0x2458(1661)](_0x2458(887), false);
  $(_0x2458(1883)).on(_0x2458(704), function () {
    if (this[_0x2458(887)]) {
      wormxt_Obj[_0x2458(2080)] = true;
    } else {
      wormxt_Obj[_0x2458(2080)] = false;
    }
  });
  $(_0x2458(882))[_0x2458(1661)]("checked", wormxt_Obj.interactive);
  $(_0x2458(882)).on(_0x2458(704), function () {
    if (this.checked) {
      zw_explotWubtracttexture.interactive = false;
    }
  });
  $(_0x2458(905))[_0x2458(1661)](_0x2458(887), false);
  $(_0x2458(905)).on(_0x2458(704), function () {
    if (this.checked) {
      wormxt_Obj.sectores = true;
      setSectorsGame();
    } else {
      wormxt_Obj[_0x2458(656)] = false;
      setSectorsGame();
    }
  });
};
var TIME = new Date()[_0x2458(840)]();
var linkCSS = _0x2458(1571) + TIME;
var unlockSkinsExecuted = false;
var unlockSkinsPrivate = async function (t) {
  if (unlockSkinsExecuted) {
    console[_0x2458(923)](_0x2458(959));
  } else {
    unlockSkinsExecuted = true;
    var i = t.u.si.userId;
    var n = clientsSkins[_0x2458(902)][_0x2458(1110)](t => t[_0x2458(748)] === i);
    if (n && n[_0x2458(1388)]) {
      console[_0x2458(923)](n);
      if (new Date() > new Date(n[_0x2458(1670)])) {
        console[_0x2458(923)](_0x2458(1377));
      } else {
        console.log(_0x2458(688));
        let t = Array[_0x2458(999)](n[_0x2458(1388)]) ? n.Client_VisibleSkinPrivate : [n[_0x2458(1388)]];
        t[_0x2458(919)](t => {
          let n = theoKzObjects[_0x2458(1520)][_0x2458(1110)](e => e.id === t);
          if (n) {
            n[_0x2458(939)] = false;
          }
        });
        console.log(_0x2458(1754) + i + ":", t);
      }
    } else {
      console.log(_0x2458(1763) + i + ".");
    }
  }
};
let giroActive = false;
function toggleGiro() {
  if (giroActive) {
    zw_girosubtracttexture[_0x2458(1392)] = ungirotexture;
    zw_girosubtracttexture.alpha = .25;
    console.log(_0x2458(514));
    isRunning = false;
    initialInterval = 55;
    cycleCounter = 1;
    isIncrementing = true;
    clearInterval(intervalID);
    intervalID = null;
  } else {
    zw_girosubtracttexture[_0x2458(1240)] = .75;
    console.log(_0x2458(1402));
    startInterval();
    isRunning = true;
  }
  giroActive = !giroActive;
}
const showServer2 = async function (t) {
  updateBackground();
  fetchCustomLogo(t.u.si[_0x2458(512)]);
  zwormData[_0x2458(504)] = t.u.si.userId;
  loadStylesheet(linkCSS);
  loadStylesheet(_0x2458(2010));
  console[_0x2458(923)](t, t.u.si.userId);
  zw_hssound = new Audio(_0x2458(1237));
  zw_laughsound = new Audio(_0x2458(1207));
  (zw_explotWubtracttexture = new pixi[_0x2458(2110)]())[_0x2458(1392)] = explotWtexture;
  zw_explotWubtracttexture[_0x2458(1690)] = true;
  zw_explotWubtracttexture[_0x2458(2104)] = true;
  zw_explotWubtracttexture.x = -45;
  zw_explotWubtracttexture.y = 10;
  zw_explotWubtracttexture[_0x2458(1240)] = .25;
  zw_explotWubtracttexture.on("mouseup", function () {
    !function () {
      zw_explotWubtracttexture[_0x2458(1690)] = false;
      var i = 0;
      var n = setInterval(function () {
        var o = 1 - .0075 * i;
        zw_explotWubtracttexture[_0x2458(1240)] = o;
        if (++i > 100) {
          clearInterval(n);
          zw_explotWubtracttexture[_0x2458(1240)] = .25;
          zw_explotWubtracttexture[_0x2458(1690)] = true;
        }
      }, 100);
    }();
    const t = new Uint8Array([NaN, NaN]);
    anApp.o.Wb(t);
    setTimeout(() => {
      let e = zw_lastserver;
      $(_0x2458(848))[_0x2458(1305)](_0x2458(798), "static");
      if (e) {
        anApp.r.Hd();
        anApp.sa(e);
      }
    }, 1e3);
  });
  (zw_girosubtracttexture = new pixi.Sprite())[_0x2458(1392)] = ungirotexture;
  zw_girosubtracttexture.interactive = true;
  zw_girosubtracttexture[_0x2458(2104)] = true;
  zw_girosubtracttexture.x = -10;
  zw_girosubtracttexture.y = 10;
  zw_girosubtracttexture[_0x2458(1240)] = .25;
  zw_girosubtracttexture.on(_0x2458(1354), function () {
    toggleGiro();
  });
  if (zw_mobilecheck()) {
    zw_girosubtracttexture.x = -90;
    zw_explotWubtracttexture.x = -135;
    zw_explotWubtracttexture.y = 10;
    let t = new Function(_0x2458(436))();
    let i = t[_0x2458(1324)][_0x2458(1054)]("https://i.imgur.com/kGjR9yf.png");
    let n = t[_0x2458(1324)][_0x2458(1054)]("https://i.imgur.com/4JZUa1u.png");
    (zw_zoomplustexture = new t[_0x2458(2110)]())[_0x2458(1392)] = i;
    zw_zoomplustexture[_0x2458(1690)] = true;
    zw_zoomplustexture[_0x2458(2104)] = true;
    zw_zoomplustexture.x = -10;
    zw_zoomplustexture.y = 10;
    zw_zoomplustexture[_0x2458(1240)] = .25;
    zw_zoomplustexture.on(_0x2458(1354), function () {
      zw_updatezoom(Math[_0x2458(1940)](zw_multiplier + .25, 50));
    });
    (zw_zoomsubtracttexture = new t.Sprite())[_0x2458(1392)] = n;
    zw_zoomsubtracttexture[_0x2458(1690)] = true;
    zw_zoomsubtracttexture.buttonMode = true;
    zw_zoomsubtracttexture.x = -43;
    zw_zoomsubtracttexture.y = 10;
    zw_zoomsubtracttexture[_0x2458(1240)] = .25;
    zw_zoomsubtracttexture.on(_0x2458(1354), function () {
      zw_updatezoom(Math.max(zw_multiplier - .25, .25));
    });
  }
  $("#game-canvas")[_0x2458(1895)]("<input type=\"text\" id=\"chatInput\" style=\"display: none; position: absolute;\" placeholder=\"Escribe tu mensaje...\" />");
  var i = function () {
    $(_0x2458(1796))[_0x2458(1305)](_0x2458(1470), _0x2458(1505))[_0x2458(898)]("");
    $(_0x2458(582))[_0x2458(431)]();
  };
  $(_0x2458(1796)).on(_0x2458(827), function (t) {
    if (t.key === _0x2458(2094)) {
      (function () {
        let i = $(_0x2458(1796))[_0x2458(898)]();
        if ("" !== $.trim(i)) {
          console.log(_0x2458(1420), i);
          zwormData.message = i;
          setTimeout(() => {
            zwormData[_0x2458(1665)] = "";
          }, 1500);
        }
      })();
      i();
    } else if (t[_0x2458(466)] === _0x2458(1961)) {
      i();
    }
  });
  $(_0x2458(527)).html(_0x2458(1604));
  $(_0x2458(1307))[_0x2458(1104)]("<i class=\"material-icons\">settings</i>");
  $("#mm-leaders")[_0x2458(1104)](_0x2458(783));
  $("#mm-store")[_0x2458(1104)](_0x2458(779));
  $("#mm-wp-settings")[_0x2458(1104)](_0x2458(1318));
  $(_0x2458(1717)).on("click", function () {
    $(_0x2458(1717))[_0x2458(701)](_0x2458(615));
    $(_0x2458(1783))[_0x2458(791)](_0x2458(615));
    $(_0x2458(1918))[_0x2458(862)]();
    $(_0x2458(1018)).hide();
  });
  $(_0x2458(1163))[_0x2458(461)](_0x2458(575));
  $(_0x2458(1684))[_0x2458(1715)](_0x2458(1230));
  $(_0x2458(1684)).append("<span id=\"ping\"></span>");
  $(_0x2458(1178))[_0x2458(461)](_0x2458(1597));
  $(_0x2458(1069)).on("click", function () {
    window[_0x2458(1540)](_0x2458(1909), "_blank");
  });
  $(_0x2458(2082))[_0x2458(461)]("");
  $(_0x2458(1655))[_0x2458(496)]();
  $(_0x2458(1771))[_0x2458(496)]();
  $(".mm-logo")[_0x2458(860)](_0x2458(1260), _0x2458(1742));
  $(_0x2458(1134)).attr(_0x2458(1260), _0x2458(1742));
  $(_0x2458(1652))[_0x2458(496)]();
  $(_0x2458(1734))[_0x2458(496)]();
  $(_0x2458(1446)).click(function () {
    $(".overlay-2")[_0x2458(1305)]("position", "static");
  });
  $(_0x2458(801))[_0x2458(704)](function () {
    $(_0x2458(2068))[_0x2458(1305)]({
      display: _0x2458(1283),
      opacity: "1"
    });
  });
  $("#popup-menu-back")[_0x2458(704)](function () {
    $(_0x2458(2068))[_0x2458(1305)](_0x2458(1775), "0");
  });
  $(_0x2458(1415)).click(function () {
    $(_0x2458(1957))[_0x2458(701)](_0x2458(1034));
    setTimeout(function () {
      $(_0x2458(1957)).removeClass("cambio-skin2");
    }, 350);
  });
  $(_0x2458(1049)).click(function () {
    $(_0x2458(1957))[_0x2458(701)](_0x2458(1034));
    setTimeout(function () {
      $(_0x2458(1957))[_0x2458(791)]("cambio-skin2");
    }, 350);
  });
  const n = ["#mm-player-info", _0x2458(1957), "#mm-settings", _0x2458(1371), _0x2458(1996), "#mm-coins-box"];
  $(n.join(", "))[_0x2458(704)](function () {
    $(_0x2458(2068)).css({
      display: _0x2458(1505),
      opacity: "0"
    });
  });
  [_0x2458(527), "#mm-settings", "#mm-leaders", _0x2458(1996), "#mm-wp-settings"][_0x2458(919)](function (t) {
    $(t)[_0x2458(821)](function () {
      $(this)[_0x2458(1305)]({
        "box-shadow": "inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2)"
      });
    }, function () {
      $(this)[_0x2458(1305)]({
        "box-shadow": _0x2458(829)
      });
    });
  });
  $(_0x2458(758))[_0x2458(461)]("");
  $(_0x2458(1708))[_0x2458(668)](_0x2458(478));
  $("#zwplayagain").prepend("<i class=\"material-icons\">replay</i>");
  $(_0x2458(1484)).on(_0x2458(704), function () {
    var n = prompt("Extension 'W' or 'T':");
    if ("W" === n) {
      $(_0x2458(1484))[_0x2458(792)](_0x2458(2078));
      setTimeout(() => {
        $(_0x2458(1484))[_0x2458(792)](_0x2458(636));
        setTimeout(() => {
          $(_0x2458(1484))[_0x2458(792)](_0x2458(1867));
          setTimeout(() => {
            $(_0x2458(1484))[_0x2458(792)](_0x2458(451));
          }, 2e3);
        }, 1500);
      }, 1e3);
      $(_0x2458(1295))[_0x2458(1104)]("");
      $(_0x2458(1716))[_0x2458(1104)]("");
      $(_0x2458(1617))[_0x2458(1104)]("");
      $(_0x2458(1187))[_0x2458(1104)]("");
      $(".servers-germania")[_0x2458(1104)]("");
      $(".servers-francia")[_0x2458(1104)]("");
      $(_0x2458(1802)).html("");
      $(".servers-japon")[_0x2458(1104)]("");
      $(_0x2458(1746))[_0x2458(1104)]("");
      $(_0x2458(1095))[_0x2458(1104)]("");
      setTimeout(() => {
        for (a = 0; a < serverData[_0x2458(1543)]; a++) {
          var n = serverData[a][_0x2458(1979)];
          var o = serverData[a].dataRoom;
          var s = serverData[a][_0x2458(1850)];
          _0x2458(639);
          var r = serverData[a].imgSrc;
          let i = _0x2458(2113) + r + "\"    style=\"margin-left: 100px;\">\n                    </a>";
          let c = o[_0x2458(1784)](/[a-zA-Z]+/g)[_0x2458(1083)]("");
          let l = document.createElement("p");
          l[_0x2458(448)] = n;
          l.innerHTML = s;
          let h = document[_0x2458(1786)]("div");
          h[_0x2458(1085)](_0x2458(993), _0x2458(1136));
          if ("br" == c) {
            $(_0x2458(1295)).append(h);
            $(h)[_0x2458(1715)](l);
            $(l)[_0x2458(1715)](i);
          } else if ("mx" == c) {
            $(_0x2458(1716))[_0x2458(1715)](h);
            $(h)[_0x2458(1715)](l);
            $(l)[_0x2458(1715)](i);
          } else if ("us" == c) {
            $(".servers-eeuu").append(h);
            $(h)[_0x2458(1715)](l);
            $(l)[_0x2458(1715)](i);
          } else if ("ca" == c) {
            $(_0x2458(1187))[_0x2458(1715)](h);
            $(h)[_0x2458(1715)](l);
            $(l)[_0x2458(1715)](i);
          } else if ("de" == c) {
            $(".servers-germania")[_0x2458(1715)](h);
            $(h)[_0x2458(1715)](l);
            $(l).append(i);
          } else if ("fr" == c) {
            $(_0x2458(1537))[_0x2458(1715)](h);
            $(h)[_0x2458(1715)](l);
            $(l)[_0x2458(1715)](i);
          } else if ("sg" == c) {
            $(".servers-singapur")[_0x2458(1715)](h);
            $(h).append(l);
            $(l).append(i);
          } else if ("jp" == c) {
            $(_0x2458(1542))[_0x2458(1715)](h);
            $(h)[_0x2458(1715)](l);
            $(l)[_0x2458(1715)](i);
          } else if ("au" == c) {
            $(_0x2458(1746))[_0x2458(1715)](h);
            $(h)[_0x2458(1715)](l);
            $(l)[_0x2458(1715)](i);
          } else if ("ae" == c) {
            $(".servers-granbretana").append(h);
            $(h)[_0x2458(1715)](l);
            $(l).append(i);
          }
          $(l)[_0x2458(860)](_0x2458(993), _0x2458(1144));
          $(l)[_0x2458(860)](_0x2458(448), o);
          $(l)[_0x2458(860)](_0x2458(1426), n);
          $(l)[_0x2458(704)](function () {
            $(_0x2458(848)).css(_0x2458(798), _0x2458(929));
            let n = $(this)[_0x2458(860)](_0x2458(1426));
            console[_0x2458(923)](n);
            if (n) {
              t.r.Hd();
              t.sa(n);
              zw_servertext[_0x2458(792)] = $(this)[_0x2458(792)]();
              console[_0x2458(923)]($(this)[_0x2458(792)]());
            }
          });
        }
      }, 3e3);
    } else if ("T" === n) {
      $(_0x2458(1484)).text(_0x2458(2078));
      setTimeout(() => {
        $(_0x2458(1484))[_0x2458(792)](_0x2458(636));
        setTimeout(() => {
          $(_0x2458(1484))[_0x2458(792)](_0x2458(1867));
          setTimeout(() => {
            $(".mm-logo").text("Tim Map");
          }, 2e3);
        }, 1500);
      }, 1e3);
      $(_0x2458(1295))[_0x2458(1104)]("");
      $(_0x2458(1716))[_0x2458(1104)]("");
      $(_0x2458(1617))[_0x2458(1104)]("");
      $(_0x2458(1187))[_0x2458(1104)]("");
      $(_0x2458(657))[_0x2458(1104)]("");
      $(_0x2458(1537)).html("");
      $(".servers-singapur")[_0x2458(1104)]("");
      $(_0x2458(1542))[_0x2458(1104)]("");
      $(_0x2458(1746)).html("");
      $(_0x2458(1095))[_0x2458(1104)]("");
      setTimeout(() => {
        for (a = 0; a < serverDataTimMap[_0x2458(1543)]; a++) {
          var n = serverDataTimMap[a][_0x2458(1979)];
          var o = serverDataTimMap[a][_0x2458(1096)];
          var s = serverDataTimMap[a][_0x2458(1850)];
          var r = serverDataTimMap[a].imgSrc;
          serverDataTimMap[a][_0x2458(1473)];
          let i = o[_0x2458(1784)](/[a-zA-Z]+/g)[_0x2458(1083)]("");
          let c = document[_0x2458(1786)]("p");
          c[_0x2458(448)] = n;
          let l = _0x2458(2113) + r + _0x2458(776);
          let h = /<a\s+href="null"[^>]*>[\s\S]*?<img\s+src="([^"]+)"[^>]*>([^"]+)<\/a>/;
          if (h[_0x2458(1360)](l)) {
            l = l[_0x2458(1799)](h, "");
          }
          let d = _0x2458(1381);
          let x = /<span style=\\"(.*?)"><\\\/span>/;
          if (x[_0x2458(1360)](s)) {
            s = s[_0x2458(1799)](x, d);
          }
          c[_0x2458(1523)] = s;
          let u = document[_0x2458(1786)]("div");
          u[_0x2458(1085)]("class", _0x2458(1136));
          if ("BR" == i) {
            $(_0x2458(1295))[_0x2458(1715)](u);
            $(u)[_0x2458(1715)](c);
            $(c)[_0x2458(1715)](l);
          } else if ("MX" == i) {
            $(".servers-mexico")[_0x2458(1715)](u);
            $(u)[_0x2458(1715)](c);
            $(c)[_0x2458(1715)](l);
          } else if ("US" == i) {
            $(_0x2458(1617))[_0x2458(1715)](u);
            $(u).append(c);
            $(c)[_0x2458(1715)](l);
          } else if ("CA" == i) {
            $(_0x2458(1187))[_0x2458(1715)](u);
            $(u)[_0x2458(1715)](c);
            $(c)[_0x2458(1715)](l);
          } else if ("DE" == i) {
            $(".servers-germania")[_0x2458(1715)](u);
            $(u)[_0x2458(1715)](c);
            $(c).append(l);
          } else if ("FR" == i) {
            $(".servers-francia")[_0x2458(1715)](u);
            $(u)[_0x2458(1715)](c);
            $(c).append(l);
          } else if ("SG" == i) {
            $(".servers-singapur").append(u);
            $(u)[_0x2458(1715)](c);
            $(c).append(l);
          } else if ("JP" == i) {
            $(_0x2458(1542))[_0x2458(1715)](u);
            $(u)[_0x2458(1715)](c);
            $(c)[_0x2458(1715)](l);
          } else if ("AU" == i) {
            $(_0x2458(1746)).append(u);
            $(u)[_0x2458(1715)](c);
            $(c)[_0x2458(1715)](l);
          } else if ("AE" == i) {
            $(_0x2458(1095))[_0x2458(1715)](u);
            $(u)[_0x2458(1715)](c);
            $(c)[_0x2458(1715)](l);
          }
          $(c).attr(_0x2458(993), _0x2458(1144));
          $(c)[_0x2458(860)](_0x2458(448), o);
          $(c)[_0x2458(860)]("data-con", n);
          $(c)[_0x2458(704)](function () {
            $(_0x2458(848))[_0x2458(1305)]("position", _0x2458(929));
            let n = $(this).attr(_0x2458(1426));
            let o = $(this).attr(_0x2458(448));
            console[_0x2458(923)](o);
            if (n) {
              t.r.Hd();
              t.sa(n);
            }
          });
        }
      }, 3e3);
    } else {
      alert("Ingresa 'W' o 'T' para continuar.");
    }
  });
};
const ctx = {
  fontStyle: {
    blanco: new PIXI[_0x2458(1291)]({
      align: "center",
      fill: "#FFF",
      fontSize: 12,
      lineJoin: _0x2458(872),
      stroke: _0x2458(1513),
      strokeThickness: 1,
      whiteSpace: _0x2458(1511),
      wordWrap: true
    })
  }
};
timeFontColors = [_0x2458(1451), "#FFC75A", _0x2458(458), _0x2458(1438), _0x2458(1630), _0x2458(471), "#ff0999"];
timeFontColors2 = ["#51a913", _0x2458(557), _0x2458(458), "#FF4544", _0x2458(1630), "#CCCF81", _0x2458(1171)];
for (let t = 0; t < timeFontColors[_0x2458(1543)]; t++) {
  let e = timeFontColors[t];
  ctx[_0x2458(685)][_0x2458(846) + t] = new PIXI[_0x2458(1291)]({
    align: _0x2458(1086),
    fill: e,
    fontSize: 25,
    lineJoin: _0x2458(872),
    whiteSpace: _0x2458(1511),
    wordWrap: true,
    dropShadow: true,
    dropShadowBlur: 6,
    fontWeight: _0x2458(444)
  });
}
ctx[_0x2458(822)] = {};
const portionTimes = [40, 40, 40, 120, 40, 20, 40];
for (let t = 0; t < portionTimes[_0x2458(1543)]; t++) {
  let e = _0x2458(1601) + t;
  ctx[_0x2458(822)][e] = new PIXI[_0x2458(1195)](portionTimes[t], ctx.fontStyle[_0x2458(846) + t]);
  ctx[_0x2458(822)][e].y = 61;
}
ctx[_0x2458(1376)] = PIXI[_0x2458(1324)].fromImage(_0x2458(2097));
ctx[_0x2458(480)] = new PIXI[_0x2458(2110)](ctx.imgTest_desactived);
ctx.containerImgTest[_0x2458(1101)].set(.5);
ctx.containerImgTest.x = window[_0x2458(1549)] / 2;
ctx[_0x2458(480)].y = window[_0x2458(1057)] / 2;
ctx.containerImgTest[_0x2458(1240)] = .3;
ctx[_0x2458(1594)] = new PIXI[_0x2458(1042)]();
const createCircle = function () {
  if (!window[_0x2458(1825)] || typeof window[_0x2458(1825)][_0x2458(1941)] === _0x2458(2108) || typeof window[_0x2458(1825)][_0x2458(1347)] === _0x2458(2108)) {
    return void console[_0x2458(682)](_0x2458(1572));
  }
  let e = _0x2458(1027);
  if (!ctx[e]) {
    ctx[e] = new PIXI[_0x2458(736)]();
    ctx[e].zIndex = 2;
    ctx[e][_0x2458(1240)] = .9;
    ctx[e].beginFill(16711680);
    ctx[e].drawCircle(0, 0, 2.4);
    ctx[e][_0x2458(1919)]();
    ctx[e][_0x2458(713)](1, _0x2458(1214));
    ctx[e].drawCircle(0, 0, 2.4);
    ctx[e].endFill();
  }
  ctx[e].x = window[_0x2458(1825)].playerX;
  ctx[e].y = window[_0x2458(1825)].playerY;
  if (ctx[_0x2458(1594)]) {
    ctx[_0x2458(1594)].addChild(ctx[e]);
  } else {
    console.error("Error: ctx.pointsContainer no est� definido.");
  }
};
ctx[_0x2458(2084)] = new PIXI[_0x2458(1042)]();
var createServerMessage = function (t, e) {
  if ("" !== e.trim()) {
    toastr[_0x2458(877)] = {
      closeButton: false,
      debug: false,
      newestOnTop: true,
      progressBar: true,
      positionClass: _0x2458(654),
      preventDuplicates: true,
      onclick: null,
      showDuration: _0x2458(1012),
      hideDuration: _0x2458(572),
      timeOut: _0x2458(716),
      extendedTimeOut: _0x2458(572),
      showEasing: _0x2458(1418),
      hideEasing: _0x2458(715),
      showMethod: _0x2458(710),
      hideMethod: "fadeOut",
      toastClass: "server-message-toast"
    };
    toastr[_0x2458(1672)](e, t, {
      iconClass: _0x2458(1529)
    });
  }
};
var createTeamMessage = function (t, e, i) {
  if ("" !== i[_0x2458(1209)]()) {
    gameState.players[_0x2458(919)]((o, a) => {
      if (o.teamCode === t && o[_0x2458(1908)] !== e) {
        let n = o[_0x2458(1908)][_0x2458(1543)] > 12 ? o[_0x2458(1908)][_0x2458(1303)](0, 12) : o[_0x2458(1908)];
        toastr.options = {
          closeButton: false,
          debug: false,
          newestOnTop: true,
          progressBar: true,
          positionClass: _0x2458(654),
          preventDuplicates: true,
          onclick: null,
          showDuration: "300",
          hideDuration: "1000",
          timeOut: _0x2458(716),
          extendedTimeOut: _0x2458(572),
          showEasing: _0x2458(1418),
          hideEasing: _0x2458(715),
          showMethod: "fadeIn",
          hideMethod: _0x2458(724)
        };
        toastr[_0x2458(1672)]("" + i, "" + e, {
          iconClass: _0x2458(1529)
        });
        console[_0x2458(923)](_0x2458(629) + e + _0x2458(643) + n + " (" + a + _0x2458(1744) + t);
      }
    });
  }
};
var createTeamUbication = function (t, e) {
  updateTeamTable(gameState, t);
  gameState[_0x2458(994)][_0x2458(919)]((n, o) => {
    if (n[_0x2458(1954)] === t) {
      let t = n[_0x2458(2046)] || e;
      let i = n[_0x2458(1908)][_0x2458(1799)](/\u3164/g, "")[_0x2458(1799)](/ZW_\d+$/, "")[_0x2458(1209)]();
      if (!ctx[o]) {
        ctx[o] = new PIXI.Graphics();
        ctx[o][_0x2458(941)] = 2;
        ctx[o][_0x2458(1240)] = .9;
        ctx[_0x2458(2084)][_0x2458(542)](ctx[o]);
        let e = new PIXI[_0x2458(1195)](i, {
          fontFamily: fonts[currentFontIndex],
          fontSize: 14,
          fill: t,
          stroke: 0,
          strokeThickness: 2
        });
        e[_0x2458(1101)][_0x2458(1756)](.5);
        e.visible = false;
        e.y = -15;
        ctx[o][_0x2458(542)](e);
        ctx[o][_0x2458(2115)] = new PIXI[_0x2458(1691)](0, 0, 2.4);
        ctx[o][_0x2458(1690)] = true;
        ctx[o].buttonMode = true;
        ctx[o].on("mouseover", () => {
          e[_0x2458(987)] = true;
        });
        ctx[o].on(_0x2458(595), () => {
          e.visible = false;
        });
        ctx[o].on(_0x2458(1354), () => {
          e[_0x2458(987)] = !e[_0x2458(987)];
        });
        ctx[o].on(_0x2458(1515), () => {
          e[_0x2458(987)] = !e[_0x2458(987)];
        });
        ctx[o][_0x2458(1325)] = e;
      }
      ctx[o][_0x2458(469)]();
      ctx[o][_0x2458(1186)](t);
      ctx[o].drawCircle(0, 0, 2.4);
      ctx[o][_0x2458(1919)]();
      ctx[o][_0x2458(713)](1, 0);
      ctx[o].drawCircle(0, 0, 2.4);
      ctx[o][_0x2458(1919)]();
      ctx[o].x = n[_0x2458(798)].x;
      ctx[o].y = n.position.y;
      ctx[o][_0x2458(1325)].y = -15;
      if (ctx[o][_0x2458(1325)][_0x2458(792)] !== i) {
        ctx[o][_0x2458(1325)].text = i;
      }
      if (ctx[o][_0x2458(1325)][_0x2458(437)][_0x2458(817)] !== t) {
        ctx[o].nameText[_0x2458(437)][_0x2458(817)] = t;
      }
    }
  });
};
var clearTeamUbication = function () {
  if (ctx[_0x2458(2084)]) {
    Object[_0x2458(1721)](ctx)[_0x2458(919)](e => {
      if (ctx[e] instanceof PIXI.Graphics && ctx[e].parent === ctx[_0x2458(2084)]) {
        ctx[_0x2458(2084)][_0x2458(465)](ctx[e]);
        ctx[e][_0x2458(1201)](true);
        delete ctx[e];
      }
      if (ctx[e + "_text"] && ctx[e + _0x2458(484)].parent === ctx[_0x2458(2084)]) {
        ctx[_0x2458(2084)][_0x2458(465)](ctx[e + "_text"]);
        ctx[e + _0x2458(484)].destroy(true);
        delete ctx[e + _0x2458(484)];
      }
    });
  } else {
    console[_0x2458(682)](_0x2458(1321));
  }
};
ctx[_0x2458(1310)] = new PIXI.Text(_0x2458(1534), ctx[_0x2458(685)][_0x2458(2034)]);
ctx.titleRec2.y = -5;
ctx[_0x2458(1526)] = new PIXI[_0x2458(1042)]();
ctx.containerHsRec2.x = 30;
ctx[_0x2458(1526)].y = 170;
let playersTexts = [];
for (let t = 0; t < 5; t++) {
  let e = t + 1;
  let i = new PIXI[_0x2458(1195)](e + ".", ctx[_0x2458(685)].blanco);
  i.x = 0;
  i.y = 13 * e;
  ctx[_0x2458(1526)][_0x2458(542)](i);
  let n = new PIXI.Text("--", {
    fill: "#FFFFFF",
    fontSize: 12
  });
  n.x = 15;
  n.y = 13 * e;
  ctx[_0x2458(1526)][_0x2458(542)](n);
  playersTexts[_0x2458(1973)](n);
}
function updatePlayerTable(t) {
  const i = t[_0x2458(994)];
  const n = Array[_0x2458(1054)](i[_0x2458(591)]())[_0x2458(694)](t => t[_0x2458(1954)] === zwormData[_0x2458(1954)]);
  playersTexts[_0x2458(919)]((t, i) => {
    if (n[i]) {
      let e = n[i];
      t[_0x2458(792)] = e[_0x2458(1908)][_0x2458(914)](0, 20);
      t.style[_0x2458(817)] = e[_0x2458(2046)];
    } else {
      t[_0x2458(792)] = "--";
      t[_0x2458(437)][_0x2458(817)] = _0x2458(673);
    }
  });
}
ctx.containerHsRec2.addChild(ctx[_0x2458(1310)]);
zw_TopFriends_list = new PIXI[_0x2458(1042)]();
zw_TopFriends_list.x = 80;
zw_TopFriends_list.y = 185;
const titleTextfriendlist = new PIXI[_0x2458(1195)](_0x2458(1253), {
  fontFamily: fonts[currentFontIndex],
  fontSize: 12,
  fill: 16777215,
  fontWeight: _0x2458(444)
});
titleTextfriendlist.x = 10;
titleTextfriendlist.y = -5;
zw_TopFriends_list.addChild(titleTextfriendlist);
const dividerfriendlist = new PIXI[_0x2458(736)]();
function updateTeamTable(t, e) {
  for (let t = zw_TopFriends_list[_0x2458(1157)][_0x2458(1543)] - 1; t >= 0; t--) {
    let e = zw_TopFriends_list[_0x2458(1157)][t];
    if (e !== titleTextfriendlist && e !== dividerfriendlist) {
      zw_TopFriends_list.removeChild(e);
    }
  }
  let n = 0;
  t[_0x2458(994)][_0x2458(919)]((t, o) => {
    if (t[_0x2458(1954)] === e && t[_0x2458(589)] === zwormData[_0x2458(589)]) {
      let e = t.nickname[_0x2458(1799)](/[_.\s:)+ㅤ]*WP[Z]*_\d+$/g, "")[_0x2458(1209)]();
      let i = /[\u0600-\u06FF]/[_0x2458(1360)](e);
      const o = new PIXI[_0x2458(1195)](n + 1 + ". " + e, {
        fontFamily: fonts[currentFontIndex],
        fontSize: 12,
        fill: t[_0x2458(2046)] || 16777215,
        stroke: 0,
        strokeThickness: 2,
        align: _0x2458(i ? 1968 : 1616)
      });
      o.x = -50;
      o.y = 20 + 15 * n;
      zw_TopFriends_list[_0x2458(542)](o);
      n++;
      if (n >= 10) {
        return;
      }
    }
  });
}
dividerfriendlist[_0x2458(713)](2, 16777215, 1);
dividerfriendlist[_0x2458(1108)](-15, 15);
dividerfriendlist[_0x2458(1117)](80, 15);
dividerfriendlist.x = 5;
zw_TopFriends_list.addChild(dividerfriendlist);
zw_TopHS_RecordHs = new PIXI.Container();
zw_TopHS_RecordHs.x = -55;
zw_TopHS_RecordHs.y = 115;
const titleText = new PIXI[_0x2458(1195)](_0x2458(1450), {
  fontFamily: fonts[currentFontIndex],
  fontSize: 12,
  fill: 16766720,
  fontWeight: "bold"
});
titleText.x = 10;
titleText.y = -5;
zw_TopHS_RecordHs[_0x2458(542)](titleText);
const divider = new PIXI.Graphics();
divider[_0x2458(713)](2, 16777215, 1);
divider[_0x2458(1108)](0, 15);
divider[_0x2458(1117)](80, 15);
divider.x = 5;
zw_TopHS_RecordHs[_0x2458(542)](divider);
zw_Top3HS_RecordHs = new PIXI[_0x2458(1042)]();
zw_Top3HS_RecordHs.y = 25;
const titleText3hs = new PIXI.Text("Top 3 HS (👑)", {
  fontFamily: fonts[currentFontIndex],
  fontSize: 12,
  fill: 16766720,
  fontWeight: _0x2458(444)
});
titleText3hs.x = 10;
titleText3hs.y = -5;
zw_Top3HS_RecordHs[_0x2458(542)](titleText3hs);
const divider3hs = new PIXI[_0x2458(736)]();
divider3hs.lineStyle(2, 16777215, 1);
divider3hs[_0x2458(1108)](0, 15);
divider3hs[_0x2458(1117)](80, 15);
divider3hs.x = 5;
zw_Top3HS_RecordHs[_0x2458(542)](divider3hs);
var playerTexts = [];
const cleanNickname = t => {
  return t[_0x2458(1799)](/[_.\s:)+ㅤ]*WP[Z]*_\d+$/g, "")[_0x2458(1209)]();
};
const updateTop8Hs = function () {
  const e = Array[_0x2458(1054)](gameState[_0x2458(994)][_0x2458(591)]())[_0x2458(694)](e => e[_0x2458(1261)].hs > 0 && "" !== e.nickname[_0x2458(1209)]());
  if (!e[_0x2458(601)](e => e.nickname === zwormData[_0x2458(1908)]) && false) {
    e[_0x2458(1973)]({
      nickname: zwormData[_0x2458(1908)],
      hskill: {
        hs: 0
      },
      teamColor: zwormData[_0x2458(2046)]
    });
  }
  if (0 === e[_0x2458(1543)]) {
    return;
  }
  e[_0x2458(823)]((e, i) => i[_0x2458(1261)].hs - e[_0x2458(1261)].hs);
  for (let e = zw_TopHS_RecordHs[_0x2458(1157)][_0x2458(1543)] - 1; e >= 0; e--) {
    let i = zw_TopHS_RecordHs[_0x2458(1157)][e];
    if (i !== titleText && i !== divider) {
      zw_TopHS_RecordHs.removeChild(i);
    }
  }
  playerTexts.length = 0;
  for (let i = 0; i < Math[_0x2458(1940)](e.length, 6); i++) {
    let n = e[i];
    let o = n.nickname[_0x2458(1799)](/[_.\s:)+ㅤ]*WP[Z]*_\d+$/g, "")[_0x2458(1209)]();
    let a = /[\u0600-\u06FF]/.test(o);
    let s = o[_0x2458(1181)](15, " ");
    let r = ("☠️ " + n[_0x2458(1261)].hs)[_0x2458(1297)](6, " ");
    let c = new PIXI[_0x2458(1195)](i + 1 + _0x2458(1512) + s + " - " + r + _0x2458(526), {
      fontFamily: fonts[currentFontIndex],
      fontSize: 10,
      fill: n[_0x2458(2046)] || 16777215,
      stroke: 0,
      strokeThickness: 2,
      align: a ? "right" : _0x2458(1616),
      wordWrap: true,
      wordWrapWidth: 200,
      breakWords: true
    });
    c.x = 10;
    c.y = 20 + 15 * i;
    playerTexts.push(c);
    zw_TopHS_RecordHs[_0x2458(542)](c);
  }
  zw_Top3HS_RecordHs.y = 30 + 15 * playerTexts.length;
};
const colors = [16777215, 16777215, 16777215, 16777215, 16777215, 16777215, 16777215, 16777215];
const textStyle = {
  align: _0x2458(1086),
  fontSize: 12,
  lineJoin: "round",
  strokeThickness: 1,
  whiteSpace: _0x2458(1511),
  wordWrap: true
};
ctx.titleRec3 = new PIXI[_0x2458(1195)](_0x2458(1352), ctx[_0x2458(685)][_0x2458(2034)]);
ctx.titleRec3.y = -5;
ctx[_0x2458(693)].x = 10;
ctx[_0x2458(1365)] = new PIXI[_0x2458(1042)]();
ctx[_0x2458(1365)].x = -55;
ctx[_0x2458(1365)].y = 280;
for (let t = 0; t < 8; t++) {
  let e = t + 1;
  let i = new PIXI.Text(" ", ctx[_0x2458(685)][_0x2458(2034)]);
  i.x = t >= 9 ? -5 : 0;
  i.y = 13 * e;
  ctx[_0x2458(1365)].addChild(i);
  let n = new PIXI.Text("--", {
    fill: _0x2458(717),
    ...textStyle
  });
  n.x = t >= 9 ? -5 : 0;
  n.y = 13 * e;
  ctx[_0x2458(1365)][_0x2458(542)](n);
  let o = new PIXI[_0x2458(1195)]("?", {
    fill: colors[t % colors[_0x2458(1543)]],
    ...textStyle
  });
  o.x = 70;
  o.y = 13 * e;
  let a = new PIXI[_0x2458(1195)]("--", {
    fill: "#FF0000",
    ...textStyle
  });
  a.x = 125;
  a.y = 13 * e;
  ctx[_0x2458(1365)][_0x2458(542)](a);
}
function _0x2458(t, e) {
  var i = _0x10c9();
  return (_0x2458 = function (t, e) {
    return i[t -= 429];
  })(t, e);
}
ctx[_0x2458(1365)][_0x2458(542)](ctx[_0x2458(693)]);
var createTop1InMinimap = function (t) {
  if (t && t[_0x2458(798)]) {
    if (!ctx[_0x2458(2033)]) {
      ctx[_0x2458(2033)] = new PIXI[_0x2458(736)]();
      ctx[_0x2458(2033)][_0x2458(941)] = 2;
      ctx[_0x2458(2033)][_0x2458(1240)] = .9;
      if (ctx.teamsContainer) {
        ctx[_0x2458(2084)].addChild(ctx.top1Point);
      } else {
        console.error(_0x2458(1321));
      }
    }
    ctx[_0x2458(2033)][_0x2458(469)]();
    ctx[_0x2458(2033)].beginFill(16773120);
    ctx.top1Point[_0x2458(1298)](0, 0, 2.4);
    ctx[_0x2458(2033)][_0x2458(1919)]();
    ctx.top1Point.lineStyle(1, 16711680);
    ctx[_0x2458(2033)][_0x2458(1298)](0, 0, 2.4);
    ctx[_0x2458(2033)][_0x2458(1919)]();
    ctx.top1Point.shadow = true;
    ctx[_0x2458(2033)][_0x2458(1906)] = 16711680;
    ctx[_0x2458(2033)][_0x2458(1432)] = 15;
    ctx.top1Point[_0x2458(970)] = 0;
    ctx[_0x2458(2033)].shadowOffsetY = 0;
    const n = new PIXI[_0x2458(1195)]("👑", {
      fontFamily: _0x2458(1383),
      fontSize: 10,
      fill: 16777215,
      align: "center"
    });
    n.x = -n.width / 2;
    n.y = -n[_0x2458(2052)] / 2;
    ctx[_0x2458(2033)].addChild(n);
    ctx[_0x2458(2033)].x = t.position.x;
    ctx[_0x2458(2033)].y = t.position.y;
    console[_0x2458(923)](_0x2458(1811), t[_0x2458(609)]);
  } else {
    console[_0x2458(682)](_0x2458(481));
  }
};
const updateHeadshotHistory = function (t) {
  for (let i = 0; i < 8; i++) {
    if (ctx.containerHsRec3[_0x2458(1157)][3 * i + 1]) {
      ctx[_0x2458(1365)][_0x2458(1157)][3 * i + 1][_0x2458(792)] = t[i][_0x2458(2064)];
    }
    if (ctx[_0x2458(1365)][_0x2458(1157)][3 * i + 3]) {
      ctx.containerHsRec3.children[3 * i + 2][_0x2458(792)] = t[i].enemyNameHs;
    }
  }
};
function assignPtcValues(t, e, i) {
  let o = portionTimes[e] - parseInt((.99 == i ? 1 : i) * portionTimes[e] / 1);
  let a = _0x2458(1601) + e;
  t.Tf[e].addChild(ctx[_0x2458(822)][a]);
  if (ctx[_0x2458(822)][a]) {
    ctx.ptc[a].x = o >= 100 ? 11 : o >= 10 ? 18 : 26;
    ctx[_0x2458(822)][a].text = o;
  }
}
function account() {
  $(_0x2458(1731))[_0x2458(1817)]();
  $(_0x2458(924)).on(_0x2458(704), function () {
    var i = $(this)[_0x2458(860)](_0x2458(861));
    $(_0x2458(924))[_0x2458(791)]("ui-tab-active");
    $(this)[_0x2458(701)](_0x2458(1882));
    $(_0x2458(1731)).hide();
    $(_0x2458(1803) + i[_0x2458(1768)]()).fadeIn(200);
    $(".servers-container > div")[_0x2458(468)](_0x2458(1803) + i[_0x2458(1768)]())[_0x2458(724)](100);
  });
}
function obtieneUSER() {
  var e = {};
  window[_0x2458(1632)] = function () {
    if ((e = window[_0x2458(1627)]) && Object[_0x2458(1721)](e)[_0x2458(1543)] > 0 && (console[_0x2458(923)](e), e)) {
      var n = window.mouseX - e.qj.If.x;
      var o = window.mouseY - e.qj.If.y;
      var a = e.Mb.ad;
      var s = Math.sqrt(n * n + o * o);
      console[_0x2458(923)](_0x2458(1929), e, "nickname: ", a, _0x2458(594), s);
    }
  };
}
function loadScript2(t, e = true) {
  return new Promise((i, n) => {
    var a = document[_0x2458(1786)]("script");
    a[_0x2458(2059)] = _0x2458(445);
    a.src = t;
    a[_0x2458(2027)] = e;
    a[_0x2458(705)] = i;
    a[_0x2458(2069)] = n;
    document[_0x2458(1857)][_0x2458(502)](a);
  });
}
function loadStylesheet(t) {
  return new Promise((e, i) => {
    var o = document.createElement(_0x2458(1351));
    o[_0x2458(1428)] = _0x2458(592);
    o[_0x2458(2059)] = _0x2458(709);
    o[_0x2458(1270)] = t;
    o[_0x2458(705)] = e;
    o[_0x2458(2069)] = i;
    document.head[_0x2458(502)](o);
  });
}
loadStylesheet("https://fonts.googleapis.com/css2?family=Palanquin+Dark:wght@400;500;600;700&family=Zen+Dots&display=swap");
loadScript2(_0x2458(2004), true);
loadStylesheet("https://cdnjs.cloudflare.com/ajax/libs/jquery-minicolors/2.3.6/jquery.minicolors.min.css");
loadScript2(_0x2458(1937));
loadScript2("https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js");
loadStylesheet(_0x2458(1235));
_0x2458(1733);
var _typeof = _0x2458(967) == typeof Symbol && _0x2458(780) == typeof Symbol[_0x2458(1288)] ? function (t) {
  return typeof t;
} : function (t) {
  return t && "function" == typeof Symbol && t[_0x2458(1330)] === Symbol && t !== Symbol.prototype ? _0x2458(780) : typeof t;
};
var u = function () {
                    function t(t, e) {
                        this.sl = t, this.ol = 0, this.nl = e
                    }
                    return t.prototype.gl = function () {
                        --this.ol < 0 && (this.ol = this.nl.list.length - 1), this.sl.il(!0)
                    }, t.prototype.hl = function () {
                        ++this.ol >= this.nl.list.length && (this.ol = 0), this.sl.il(!0)
                    }, t.prototype.kl = function () {
                        //return i18nCustomBundle(this.nl.name)
                        let get = i18nCustomBundle(this.nl.name)
                        if (this.nl.img) {
                            var where = '<img src="';
                            where = where + xURL + "/images/group/" + this.nl.img;
                            get = where = where + '" height="43" width="220" />';
                        }
                        return get;
                    }, t.prototype.ql = function () {
                        return this.ol >= this.nl.list.length ? Optional.Yg() : Optional.Zg(this.nl.list[this.ol])
                    }, t
                }();
var GoogleAuth;
function _0x10c9() {
  var t = ["#user-icon", "game", "selectedFont", "wssServer", "keys", "#store-go-coins-button", "ajax", "#store-buy-coins_125000", "fondo2", "skinId_A: ", "<input type=\"color\" id=\"colorPicker\" />", "accessToken", "customFormat", "<input id=\"", ".servers-container > div", "documentElement", "use strict", "#mm-coins-box .mm-coins-img", "div[category='", "Error fetching server data:", "noAuras", "offsetHeight", "<span id=\"help-icon\" class=\"material-icons\" data-menu=\"help-menu\">help_outline</span>", "QmFzZVRleHR1cmU=", "expires=", "https://i.imgur.com/Q5g8w1N.png", "exception", ") del equipo ", "abilityUnknown", ".servers-australia", "<input type=\"checkbox\" id=\"toggleTop8\" />", "avatar", "????? ??????", "info", "MINIMAP BORDER", "#store-buy-coins_1250", ".tab.material-button", "Skins privadas desbloqueadas para el usuario ", "ID: ", "set", "24hfRXrZ", "#teamColor", "cachedTexture", "Zoom Speed", "pop", "mipmap", "No se encontraron skins privadas para el usuario ", "<input type=\"checkbox\" id=\"toggleKillFeed\" />", "https://i.imgur.com/WqWsDfi.png", "querySelectorAll", "popup", "toLowerCase", "<li><strong>❌ No se encontraron puertas abiertas.</strong></li>", " FPS", "#mm-skin-next svg", "<option value=\"1\">", "textContent", "clipboard", "opacity", "#wear-description-text", "WormPlus SETTINGS", "https://i.imgur.com/Hg3sKn0.png", "avatarImage", "'Courier New', monospace", "index.game.antiadblocker.continue", "230px", "#hotkeys-icon", "match", "mum-a.wormate.io", "createElement", "off", "backgroundImage", "100% 200%", "charCodeAt", "#profile-stat-totalTimeSpent", "ZOOM SPEED", "parse", "ComidaShadow", "https://i.imgur.com/gvMlosm.png", "#chatInput", "isCustom", "100% 100%", "replace", "Fj (otros)", "status", ".servers-singapur", ".servers-", "getContext", "❌ Cerrado", "Error al construir la URL del script ", "<input type=\"checkbox\" id=\"settings-laserHS-switch\">", "<div class=\"settings-line\">", "hidden", "Servidor ", "Top 1 actualizado:", "stringify", "portion", "guest", "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"><span>", "d29ybWF0ZS1pb185NzB4MjUw", "hide", "<option value=\"6\">6</option>", "avatarUrl", "#main-menu-view", "timmap", "<input id=\"color_palet2\" type=\"color\" value=\"#01D9CC\">", "skin", "has", "coords", "BOOSTER SIZE", "<option value=\"7\">7</option>", "#avatarPreview", "expToNext", "X_x2", "laser de cabeza", "index.game.result.your", "allstreamers", "SHOW FPS", "3.3.1", "assign", "imgSrc", "#sectores-key", "toUpperCase", "<span id=\"hotkeys-icon\" class=\"material-icons\" data-menu=\"hotkeys-menu\">keyboard</span>", "</td>\n                <td class=\"server-region\">", "EEUU", "</div></div>", "cloneNode", "changeBackground", "; path=/", "skinArrayDict", ".connect-button", "hatId", "serverName", " at ", "#leaders-button-highscore", "X_xxlupa", "<div style=\"font-size:14px; font-weight:bold; text-align:center; margin-bottom:8px;\">🏆 Top 10 🏆</div><hr style=\"border-color:#444;\">", "SHOW KILL FEED", "AudioState", "head", "Sky Purp", "&hatId=", "0D0400", "#adbl-4", "change", "util.time.min", "Blue Light", "inline-block", "outerWidth", "Loading...", "mousedown", ".value", "#FF4500", "addTest", "authResponse", " changed to", "fondo3", "bind", "OPEN", "origin", "#mm-action-buttons", "ltmolilci1iurq1i", "100px", " coincide con un ID almacenado en la base de datos.", "ui-tab-active", "#settings-laserHS-switch", "rs:lo", "?????????", "<select id=\"zwtop\">", "VGV4dHVyZQ==", "\n        <div class=\"switchServerSource\" style=\"position: absolute; top: -5px; left: 200px; width: 200px;\">\n            <button id=\"toggleServerSource\" style=\"margin-bottom: 10px; padding: 6px 12px; background: #252535; color: white; border: 1px solid; border-radius: 1px;\">\n                🔄 Switch to TimMap Servers\n            </button>\n        </div>\n        <div class=\"containerDoorsServers\">\n            <select id=\"optionSelect\">\n                <option value=\"sao-a.wormate.io\">sao-a</option>\n                <option value=\"mum-a.wormate.io\">mum-a</option>\n                <option value=\"dxb-a.wormate.io\">dxb-a</option>\n                <option value=\"fra-e.wormate.io\">fra-e</option>\n                <option value=\"fra-d.wormate.io\">fra-d</option>\n                <option value=\"fra-c.wormate.io\">fra-c</option>\n                <option value=\"fra-b.wormate.io\">fra-b</option>\n                <option value=\"waw-a.wormate.io\">waw-a</option>\n                <option value=\"dal-b.wormate.io\">dal-b</option>\n                <option value=\"vin-a.wormate.io\">vin-a</option>\n                <option value=\"dal-a.wormate.io\">dal-a</option>\n                <option value=\"sao-c.wormate.io\">sao-c</option>\n                <option value=\"bhs-a.wormate.io\">bhs-a</option>\n                <option value=\"sao-b.wormate.io\">sao-b</option>\n                <option value=\"hil-a.wormate.io\">hil-a</option>\n                <option value=\"syd-a.wormate.io\">syd-a</option>\n                <option value=\"sin-g.wormate.io\">sin-g</option>\n                <option value=\"gra-a.wormate.io\">gra-a</option>\n                <option value=\"sin-i.wormate.io\">sin-i</option>\n                <option value=\"sin-h.wormate.io\">sin-h</option>\n                <option value=\"sin-f.wormate.io\">sin-f</option>\n                <option value=\"sin-c.wormate.io\">sin-c</option>\n                <option value=\"sin-b.wormate.io\">sin-b</option>\n                <option value=\"sin-a.wormate.io\">sin-a</option>\n                <option value=\"tok-b.wormate.io\">tok-b</option>\n                <option value=\"sin-d.wormate.io\">sin-d</option>\n                <option value=\"sin-e.wormate.io\">sin-e</option>\n            </select>\n            <input type=\"number\" id=\"numberInput\" min=\"0\" placeholder=\"ROOM NUMBER\">\n            <button id=\"connectButton\">CONNECT</button>\n        </div>\n    ", "#leaders-button-level", "getChildByName", "#resultadoPuertas", "a2_", "<span class=\"tooltip\" id=\"tooltipTop8\" style=\"display: none;\">If you enable this option, you will see the list of the top 8 players.</span>", "/start?gameMode=", "after", "sectors", ";\">\n                <table class=\"server-table\">\n                    <thead>\n                        <tr>\n                            <th>On/Off</th>\n                            <th>Name</th>\n                            <th>Región</th>\n                            <th>Top 1</th>\n                            <th>Streamer</th>\n                            <th>Doors</th>\n                        </tr>\n                    </thead>\n                    <tbody></tbody>\n                </table>\n            </div>\n        ", "BOTTOM_LEFT", "bindEvents", ":</div>\n                                        <input type=\"text\" id=\"sound-hs\" class=\"sounds-input\" placeholder=\"Enter sound URL\">\n                                    </div>\n                                    <div class=\"input-container\">\n                                        <div class=\"name\">", "ID copiado: ", "currentTime", "/pub/wuid/", "#profile-stat-bestSurvivalTime", "clientY", "shadowColor", "<option value=\"10\">", "nickname", "https://discord.gg/sJ5R95Rc6Z", "destroyed", "draw", "eyesId", "https://asserts.wormworld.io/backgrounds/bkgnd6.png", "#popup-logout", "BACKGROUND SOLID", "webkitExitFullscreen", "event", "#user-section", "endFill", "Segoe UI, sans-serif", "ancho de la comida", "gg_107696732696574095850", "resource", "readyState", "getElementsByTagName", "#idkopyala", "block", "addAsyncTest", "Cell:", "(unknown)", "scrollTo", "??????", "this is null or not defined", "removeItem", "Nflex", "server", "https://cdn.socket.io/4.4.1/socket.io.min.js", "prototype", "portionUnknown", "min", "playerX", "#please-wait-view", "TOP_LEFT", ".v5", "BOTTOM", "TIMER SPEED AND ZIGZAG", "getPower", "#profile-avatar", "musicEnabled", "list", "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"", "36ZjVyZq", "Conectando a:", "teamCode", "es_ES", "<option value=\"4\">", "#mm-skin-canv", ".key-input", "dataType", "binaryType", "Escape", "FFFFFF", "30SuKXGB", "{0}", ".server-row", "nonbuyableCause", "disposing prev texture: ", "right", "nombre: ", ".toaster-levelup-close", "glassesVariantArray", "exitFullscreen", "push", "enableClasses", "selectedBackground", "chngPersonsSkins", "MTY", "</div>", "dataCon", "</span><span>", "ActiveX2", "smoothCamera", "updatePacketInterval", "#popup-menu-coins-val", ".options-list > div[category=\"theme\"]", "\n        <div class=\"premium-badge\">\n            ⭐ Premium ⭐ <br> \n            Expire: <span id=\"premium-expiration\">", "gg_", "gray", "sgp1", "onDragStart", "playerDeath", "Error al procesar el mensaje:", "unshift", "#tooltipKillFeed", "Users", "#mm-store", "<span class=\"names_settings\"> : Show All Power-Ups</span>", "FLEXIBLE_TYPE", "Kw==", "aipC", "initialState", "random", "<div class=\"settings-icons\">", "https://cdnjs.cloudflare.com/ajax/libs/jquery-minicolors/2.3.6/jquery.minicolors.min.js", "radius", "tint", ".server-top1", "#sound-hs", "div[category='theme']", "https://fonts.googleapis.com/icon?family=Material+Icons", "<option value=\"7\">", "gg_110413852592088957484", "<input type=\"text\" id=\"teamCodeInput\" placeholder=\"Enter team code\" />", "#preview_teamColor", "\" value=\"", "loading", "logo", " ms</strong>", "Dj (boca)", "TOP_RIGHT", "category", "zoomSpeed", "resize", "Singapur", "/uk", "X2_TYPE", "defer", "Incognito", "#zwplayagain", "inputReplaceSkin", ".v4", "Socket closed", "top1Point", "blanco", "gsi:s", "Premium", "</div>\n        <div class=\"box\">\n            <div class=\"progress-bar\">\n                <div class=\"fill\" style=\"width: ", " ha enviado un mensaje: ", "index.game.popup.menu.coins.tab", "level", "arc", "#settings-show-names-switch", "\n            <strong id=\"", "76232xezPRO", "#wear-buy-button", "teamColor", ".Worm_cerca", "⏳ Espera antes de enviar otro mensaje...", "latency", " TYPE: ", "VISIBLE SPEED AND ZIGZAG", "height", "<strong>🏆 Best server: ", "#adbl-continue span", "#store-buy-coins_3250", "getElementById", "????? ???????????", "<option value=\"4\">4</option>", "type", "v8.0", "noSkin", "load", "O2dsX1Bvc2l0aW9uPXZlYzQoKA==", "nombre2", "CLOSING", "canvas", "_init", "#settings-menu", "onerror", "#leaders-button-kills", "scale", "shift", "47643imdzFl", "no-js(\\s|$)", "fps", "dotFormat", "scrollHeight", "Loading.", "dynamic", "laserHS", "split", "#social-buttons", "#stretch-box", "teamsContainer", "sonido link 10cabezas", "anApp", "colorBorde", "sin-f.wormate.io", "eyesDict", "#wear-view", "idReplaceSkin", "ActiveX5", "https://asserts.wormworld.io/backgrounds/bg_sky_2.png", "Enter", "indexOf", "kills", "https://i.imgur.com/K7UPjJJ.jpg", "#clossed_Setings", "caches", "[WormPlus OWNER]", "getImageData", "Ej (gorra?)", "\n            <div class=\"servers-", "buttonMode", "#FFA500", "El ID generado no coincide con ning�n ID almacenado en la base de datos.", "https://i.imgur.com/4ccZ556.png", "undefined", "#adbl-3", "Sprite", "#mm-coins-box", "#mm-player-exp-val", "<a>\n                        <img src=\"", "\n                <div style=\"display:flex; justify-content:space-between; margin: 4px 0; ", "hitArea", "xxx2", "<option value=\"5\">", "close", "https://i.imgur.com/LvJ1RxC.png", "sin-e.wormate.io", "mouseY", "insertAdjacentHTML", "focus", "code", "laser", "https://i.imgur.com/mHp0ozi.png", "</span>\n                    <span>", "return PIXI;", "style", "xXxLupaZ", "region", ":nth-child(", "\" data-country=\"", "\n        <div class=\"name\" style=\"", "#chat-history", "bold", "text/javascript", "keyMove", "killFeed", "value", "R3JhcGhpY3M=", "add", "WormWorld", "game-wrap", "https://asserts.wormworld.io/backgrounds/bkgnd8.png", "byHighScore", "floor", "pointerup", "setTime", "#00B2ED", "#delete-account-yes", "#settings-backgroundSolid-switch", "replaceWith", ".. 5 ..", "index.game.popup.menu.store.tab", "Revisando script ", "removeChild", "key", ".options-list.ps div[category=\"cursor\"]", "not", "clear", "addAttribute", "#CCCF81", " 🌎)", ".. 3 ..", " </span>", "VGV4dA==", "size", "WormSkinData", "<i class=\"material-icons\">fullscreen</i>", "WRAP_MODES", "containerImgTest", "No hay jugadores disponibles para actualizar el top 1.", "fi_aw", "teams", "_text", "id_game", "counter", "https://deltav4.gitlab.io/v7/assets/cursors/cursor_", "hardwareConcurrency", ".v6", "</td>\n                <td><img src=\"", "', change in (ms) ", "#settings-music-enabled-switch", "\" data-option=\"", "hsTextColor", "</span><span><img src=\"", "remove", "#delete-account-view", "gdprConsent", "https://swykz.theoxt.com/api/users/register_update_player.php", "search", "isConsentGiven", "appendChild", "#popup-withdraw-consent", "id_user", "aliases", "querySelector", "?????? ???", "facebook", "background-color", "minicolors", "index.game.toaster.consent.text", "userId", "wsUrl", "Giro deactivated", "reload", "SECTORS", "getRegistrations", "fr_FR", "https://asserts.wormworld.io/backgrounds/arena02.png", "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"><span>", "#popup-menu-back", "\" data-img=\"", "distance", "hatDict", "hex", " ☠️", "#mm-action-play", "chngBotSkins", "#store-locked-bar-text", "google", "minimapTeamcod", "location", "#user_config", "input", "#idcopiar", "glassesId", "setInt16", "afterbegin", "Kg==", "<span class=\"names_settings\"> : Show Speed&Zigzag</span>", "O3VuaWZvcm0gdmVjNCA=", "addChild", "https://asserts.wormworld.io/backgrounds/bkgnd10.png", "https://i.imgur.com/NKAyYa8.png", "keyCode", "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">", "toFixed", "#profile-stat-headshots", "12px", "websockets", "Valor no v�lido, se utilizar� una imagen por defecto.", "\" class=\"toaster toaster-coins\">    <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <div class=\"toaster-coins-val\">+", "<div id=\"display_color\">", "WLp", "ODYxOTI2ODUwNjE5MDUx", "\" style=\"background-color: ", "#f97a1d", "#giro-key", ".tooltip", "#popup-login-gg", "deleteDatabase", "keypress", "#results-view", "format", " / ", "#settings-sfx-enabled-switch", "index.game.antiadblocker.msg4", "\"></div>", "initialize", "signIn", "blur", "1000", "Current track '", "cHJlY2lzaW9uIGhpZ2hwIGZsb2F0O3ZhcnlpbmcgdmVjMiA=", "<canvas id=\"background-canvas\"></canvas>", "backgroundSolid", " ha muerto.", "laserHSkey-key", "a1_", "pivot", "SkinVisible(For public)", "#game-canvas", "fontFamily", "rs:gg", "gsi:then", "revision", "apply", "streamers", "wssCode", "render", "values", "stylesheet", "<input id=\"color_palet\" type=\"color\" value=\"#00243E\">", "Distance:", "mouseout", "prime", "mmm", "#popup-view", "aura del potenciador", "showTeamList", "some", "string", "pointermove", "#color_paletRGB, #color_palet, #color_palet2", "wp-background", "gsi:c", "), auto", "white", "nombre", "PotenciadorAura", "Error al cargar los servidores:", "image", "#final-place", "xXx2", "active", "colorFondo", "https://wormate.io/images/og-share-img-new.jpg", "fondo Solido", "propertyList", "sin", "No hay streamers online.", "Class extends value ", "lowercase", "outerRadius", "settings", "msExitFullscreen", "indexedDB", "Disable Sound", "Mensaje enviado por ", "<div class=\"table-row\"><span>", "description", "#toaster-view", "adblock", ";\" onclick=\"openColorPanel('", "#connectButton", "Loading..", "angleBetween", "copiar", "https://xd.com", "util.time.sec", "X_x5", "???????", " recibido por el jugador ", "Score", "110px", "onopen", "wss://", "???", "startsWith", "50%", "data-opacity", "putImageData", "WHITE", "toast-top-center", "#fff", "sectores", ".servers-germania", "index.game.popup.menu.consent.tab", "deltaY", "data", "   ", "V1JBUF9NT0RFUw==", "index.game.main.menu.unlockSkins.comeAndPlay", "then", "sessionsPlayed", "consented", "create", "prepend", "size of food", "0xffffff", "&glassesId=", "fade IN ", "#FFFFFF", "aradian", "pause", "Error al cargar servidores TimMap:", "inner", "url", "#mm-player-username", "emoji", "start pSC: ", "error", "\">\n                <td class=\"server-status\" data-score=\"", "bottom", "fontStyle", "#profile-view", "#final-replay", "La fecha de skins expiración es válida.", "\n                    <button class=\"connect-button\" data-server=\"", "isIPInEEA", "account_type", "aipAABS", "titleRec3", "filter", "portionDict", "???? ??? 10 ?????", "pressed", "consent_state_2", "blendMode", "#top8List", "addClass", "wormate.io", "<span id=\"user-icon\" class=\"material-icons\" data-menu=\"user-menu\">account_circle</span>", "click", "onload", "FOOD SHADOW", "zoom", "soundTuto2", "text/css", "fadeIn", "contextmenu", "SHOW TEAM LIST", "lineStyle", "visiblePowersAll", "linear", "5000", "#00FF00", "https://i.imgur.com/UKIZZmr.png", "<span id=\"notifications-icon\" class=\"material-icons\" data-menu=\"notifications-menu\">notifications</span>", "s, ", "8px", "Blue", "reduce", "fadeOut", "#withdraw-consent-yes", "wss", "color del juego", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "u4_", "toUTCString", "#popup-login-fb", "<div class=\"settings-checkbox\">", "0000", "getAuthResponse", "waw-a.wormate.io", "Graphics", "index.game.main.menu.unlockSkins.share", "borderColorGroup", "soundTuto4", "R2VvbWV0cnk=", "file", "fade OUT ", "ActiveEmoji", "I18N_LANG", "#userid", "https://asserts.wormworld.io/backgrounds/bg_sky_1.png", "Socket error", "client_ID", "GAME JS 2023 BY SWYKZ", "WebSocket", "host", "index.game.popup.menu.wear.tab", "cookie", "WearSkinData", "warn", "rgba(30, 30, 40, 0.95)", "KeyRespawn", ".mm-merchant-cont", "data-inline", "#numberInput", "js$2", "Web SQL no se puede eliminar automáticamente desde JavaScript.", "lightblue", "atan", "#laserHSkey-key", "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "#store-view-next", "<div id=\"hotkeys-menu\" class=\"menu\">Configuración de teclas rápidas</div>", "#sound-10hs", "red", "espacio", "#firefly-container", "_request", "Arena 3", "antiadblocker", "\"    style=\"margin-left: 100px;\">\n                    </a>", "Arial, sans-serif", "dal-a.wormate.io", "<i class=\"material-icons\">store</i>", "symbol", "aHR0cHM6Ly9nYXRld2F5Lndvcm1hdGUuaW8=", "I18N_MESSAGES", "<i class=\"material-icons\">leaderboard</i>", "#adbl-2", "#final-continue", "background-position", "#tooltipTop8", "xxx5", "<option value=\"13\">", "firefly", "removeClass", "text", "mouthDict", "getAttribute", "https://asserts.wormworld.io/backgrounds/bkgnd9.png", "\" alt=\"User Icon\" style=\"width: 20px; height: 20px; margin-right: 5px; border-radius: 50%;\">", "uk_UA", "position", "mouseleave", "soundTuto3", "#mm-wp-settings", "index.game.popup.menu.store.locked", "<option value=\"2\">", "#toggleTop8", "<img src=\"", "fail", "colorDict", "getCurrentPosition", "dA: NO", "#wear-mouths-button", "//apis.google.com/js/api:client.js", "/wormy", "#avatarUrl", "Conectado al servidor WebSocket", "skinId", "DataReader error: ", "fill", ".hotkey-container", "chain", "showAnimationHeadshot", "hover", "ptc", "sort", "get", "\">\n                <a><span class=\"flag ", "tuNewScore", "keydown", "atan2", "0 1px 1px 0 rgba(0,0,0,.5)", ".v1", "<span id=\"wp-settings-version\" class=\"settings-line\"></span>", "playerDisconnect", "O3VuaWZvcm0gdmVjMiA=", "SIZE FOOD", "download sounds", "Premium Feature", "addEventListener", " ms", "<div id=\"user-menu\" class=\"menu\">Opciones de usuario</div>", "getTime", "body", "<input type=\"checkbox\" id=\"settings-Speed_ZigZag-switch\">", "\n    <style>\n        \n        .fixed-background {\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background-color: black;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            z-index: 99999;\n            transition: opacity 0.5s ease-out;\n        }\n\n        \n        .background-image {\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            background: url('https://i.imgur.com/oXntzBc.jpeg') no-repeat center center/cover;\n            background-size: cover;\n            background-position: center;\n            opacity: 0.3;\n            filter: blur(5px) opacity(1.5);\n        }\n\n        \n        .logo {\n            width: 200px;\n            animation: pulse 4s infinite;\n            margin-bottom: 70px;\n        }\n\n        \n        @keyframes pulse {\n            0% { transform: scale(2); opacity: 1; }\n            50% { transform: scale(2.1); opacity: 0.8; }\n            100% { transform: scale(2); opacity: 1; }\n        }\n\n        \n        .progress-bar-container {\n            width: 50%;\n            height: 10px;\n            background: rgba(255, 255, 255, 0.2);\n            border-radius: 5px;\n            overflow: hidden;\n            position: relative;\n        }\n\n        .progress-bar {\n            width: 0%;\n            height: 100%;\n            background: #252535;\n            transition: width 2s linear;\n        }\n\n        \n        .rotate-gif {\n            display: none; \n            margin-top: 20px;\n            width: 150px;\n        }\n\n        \n        .hearts {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -100%);\n            display: flex;\n            gap: 10px;\n        }\n\n        .one, .two, .three, .four, .five {\n            background-color: #252535;\n            display: inline-block;\n            height: 10px;\n            width: 10px;\n            transform: rotate(-45deg);\n            position: relative;\n        }\n\n        .one:before, .one:after,\n        .two:before, .two:after,\n        .three:before, .three:after,\n        .four:before, .four:after,\n        .five:before, .five:after {\n            content: \"\";\n            background-color: #252535;\n            border-radius: 50%;\n            height: 10px;\n            width: 10px;\n            position: absolute;\n        }\n\n        .one:before, .two:before, .three:before, .four:before, .five:before {\n            top: -5px;\n            left: 0;\n        }\n\n        .one:after, .two:after, .three:after, .four:after, .five:after {\n            left: 5px;\n            top: 0;\n        }\n\n        \n        @keyframes heart {\n            0% {\n                transform: translateY(0) rotate(-45deg) scale(0.3);\n                opacity: 1;\n            }\n            100% {\n                transform: translateY(-150px) rotate(-45deg) scale(1.3);\n                opacity: 0;\n            }\n        }\n\n        .one { animation: heart 1s ease-out infinite; }\n        .two { animation: heart 2s ease-out infinite; }\n        .three { animation: heart 1.5s ease-out infinite; }\n        .four { animation: heart 2.3s ease-out infinite; }\n        .five { animation: heart 1.7s ease-out infinite; }\n    </style>\n\n    <div class=\"fixed-background\" id=\"loading-screen\">\n        <div class=\"background-image\"></div>\n        <img src=\"https://i.imgur.com/Q5g8w1N.png\" alt=\"server logo\" class=\"logo\">\n\n        <div class=\"hearts\">\n            <div class=\"one\"></div>\n            <div class=\"two\"></div>\n            <div class=\"three\"></div>\n            <div class=\"four\"></div>\n            <div class=\"five\"></div>\n        </div>\n\n        <div class=\"progress-bar-container\">\n            <div class=\"progress-bar\" id=\"progress-bar\"></div>\n        </div>\n\n        <!-- GIF de rotación para móviles en vertical -->\n        <img src=\"https://i.imgur.com/CVpwetK.gif\" alt=\"Rotar el dispositivo\" class=\"rotate-gif\" id=\"rotate-gif\">\n    </div>\n", "#store-go-wear-button", "fontPreview", "tfc", "index.game.floating.wellDone", ".overlay-2", "mm-params-nickname", "sonido link cabeza", "ping", "ActiveX10", "copy", "day", "cachedScaleY", "regDate", "???? ??? ??????", "ru_RU", "<option value=\"0\">", "attr", "data-country-name", "toggle", "laser color", "sin-h.wormate.io", "index.game.popup.menu.leaders.tab", "onOpen", "</span></div>", "</a>    </div>    <div class=\"toaster-consent-close\">", "=;expires=", "<option value=\"3\">3</option>", "#settings-notAbilityAll-switch", "round", "clientX", "loading advertisement", "while (true) {}", "El ID ", "options", "Cursor ", "https://i.imgur.com/DbWbUxD.png", "openDatabase", "fadeTo", "#settings-interactive-switch", "fondo4", "Arena 1", "#store-view", "/buyProperty?id=", "checked", "Sky Write", "abilityDict", "<span class=\"names_settings\" id=\"colorLaser\"> ", "progress-bar", "VELOCITY_TYPE", "#profile-experience-val", "stateObject", ".option.toggle[data-option='backgroundSolid'] .box", "Arena 4", ".v0", "val", "index.game.social.shareResult.caption", "PropertyManager", "<option value=\"14\">", "clientsSkinsActivos", "innerScale", "Vacío", "#settings-sectores-switch", "false", "mouseX", "textDict", "empty", "GET", "https://asserts.wormworld.io/backgrounds/arena01.png", "000", "#noSkin-key", "substring", ".server-status", "<span class=\"tooltip\">", "#loading-worm-b", "default", "forEach", "gsi:l", "url(", "send", "log", ".ui-tab", "v1_", "color del laser", "#FF0000", "map", "static", "🔄 Switch to WormWorld Servers", "byLevel", "?? ?????????????", "dA: OK", "attach", "\n                            <div class=\"option toggle ", "headShots", "xxxLupatype", "urlRequest: ", "nonbuyable", "restart-key", "zIndex", "BOTTOM_RIGHT", ".. 9 ..", "div", "soundTuto1", "getItem", "\" min=\"", "interactiveChildren", "//connect.facebook.net/", "timerSpZg", "ServerName", "sectores-key", "resolution", "testSkinMod", "MzI", "coins_1250", "k🍬", "sin-c.wormate.io", "unlockSkinsPrivate ya fue ejecutada anteriormente.", "MOUSE DELAY", "#store-buy-coins_50000", "?????? 3", "/images/guest-avatar-xmas2022.png", "u5_", "colorJuego", "index.game.toaster.consent.iAccept", "function", "save gm: ", "AURA THE BOOSTER", "shadowOffsetX", "sin-d.wormate.io", "Enable Sound", "matches", "#wear-locked-bar-text", "eat_animation", "index.game.social.shareResult.messGood", "HTTP error! Status: ", "Verdana, sans-serif", "#avatarImage", "O2F0dHJpYnV0ZSB2ZWMyIA==", "\" height=\"43\" width=\"180\" />", "\n🔍 Probando servidores Wormate.io (puerto ", "⏱️ Timeout", "<div class=\"container\">", "https://swykz.theoxt.com/api/users/checkSubscriptionExpired.php", "bhs-a.wormate.io", "visible", "QkxFTkRfTU9ERVM=", "O3VuaWZvcm0gbWF0MyA=", "#mm-player-info", "<option value=\"10\">10</option>", "premium", "class", "players", "#settings5dolars", ".. 2 ..", ";\"></span>\n                </td>\n                <td class=\"server-name\">", "skinUnknown", "isArray", "#mm-player-exp-bar", "onmessage", "body, button, input, a, textarea, select, div, span, p", "cHJvamVjdGlvbk1hdHJpeA==", "top_right", "pointerdown", "cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7YXR0cmlidXRlIHZlYzIg", "#final-share-fb", "fondos", "#withdraw-consent-view", "If you enable this option, you will see the list of kills in real time.", "ComidaSize", "300", "&eyesId=", "closest", "POST", "debu", "coins_3250", "#hotkeys-section", "mouthId", ".box", "#707070", "aipAABC", "clientesActivos", "main", "source", "/getUserData", "team_2", "⚠️ Textura inválida o sin baseTexture.", "border-color", "Solid background", "index.game.toaster.consent.link", "month", "#noAuras-key", "cambio-skin2", "room", "giro", "AbilitySkinData", "food shine", "PortionSkinData", ".profile-info", "hypot", "Container", "CHANGE SKINS TO Z WORM", "#highscore-table", "loop", "className", "dead", "Error enviando mensaje:", "#mm-skin-prev", "</option>", "msRequestFullscreen", "angle", "#settings-view", "from", "geolocation", "play", "innerHeight", "velocidad", "eventoPrincipal", "coins", "#settings-Speed_ZigZag-switch", "URL decodificada:", "#congrats-bg", "connected", "https://i.imgur.com/VPkrI9l.png", "fra-b.wormate.io", "https://asserts.wormworld.io/backgrounds/bkgnd0.png", "<option value=\"8\">8</option>", "#buy-premium", "totalPlayTimeSec", "index.game.popup.menu.login.tab", "UElYSQ==", "vin-a.wormate.io", "wormExplot-key", "Name", "abs", "<span id=\"wp-settings-id\" class=\"settings-label\">ID: </span>", "auth2", "username", "#mm-params-game-mode", "https://i.imgur.com/IqQGK58.png", "/pub/leaders", "join", "trace", "setAttribute", "center", "console", "Canada", "svg", "Load sPN: ", "innerRadius", "mouthVariantArray", "return (function() ", "comidax2", ".servers-granbretana", "dataRoom", "data-format", "onwheel", "createElementNS", "/sdk.js", "anchor", "#store-buy-button", "<span class=\"settings-label\">You Color Map: </span>", "html", "\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">", "0 0 10px rgba(0,0,0,0.5)", "killTextColorGroup", "moveTo", "animationHeadshot", "find", "#mm-params-nickname", "MLb", "<input style=\"width: 60px\" type=\"text\" name=\"inputReplaceSkin\" id=\"inputReplaceSkin\" value=\"35\" maxlength=\"4\" onchange=\"setIdReplaceSkin(this)\">", "game color", "FF0000", "delete", "lineTo", "hatVariantArray", "#mm-action-login", "facebook-jssdk", "aqnvgcpz05orkobh", "1eaom01c3pxu9wd3", "https://i.imgur.com/ZFifUoX.png", "wss://zworm.xyz:9800", "#adbl-continue", "sortableChildren", "EYES", "error-view", "Avatar", "�Coincidencia encontrada! El script proviene de la fuente correcta.", "#profile-username", "fileSize", "HS TEXT", ".loading-logo", "https://i.imgur.com/9ui2KwE.png", "conteiner", "base", "async", "<div id=\"final-replay\">Replay</div>", "data-letterCase", "userAgent", "index.game.result.title", "power up glow", "selectSala", "<select id=\"arkaplan\">", "<span class=\"names_settings\" id=\"sectores\"> ", "VISIBLE ALL POWER UPS", ".server-table tbody", "index.game.result.placeInBoard", "<div class=\"icon-selector\"></div>", "O3ZhcnlpbmcgdmVjMiA=", "#login-view", "#wear-view-prev", "UkVQRUFU", "<div><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" x=\"0\" y=\"0\" viewBox=\"0 0 456 456\" xml:space=\"preserve\"><rect x=\"0\" y=\"0\" width=\"456\" height=\"456\" fill=\"#F7941D\"/><path d=\"M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z\" fill=\"#fff\"/></svg><span>", "#222", "children", "pageY", "\n            <li class=\"ui-tabs-tab ui-tab ", "#markup-wrap", "color", "turn up sound", "#background-canvas", "#restart-key", "\" class=\"streamer-image\"></td>\n                <td><button class=\"btn-check-ports\">📡📶</button></td>\n            </tr>\n        ", "removeChildren", ".description-text", "</span>", "ARENA", "flexx", "#ff0999", "cursor-box icon-selector__item", "gger", "</div>\n                                        <button class=\"sound-button\" onclick=\"window.open('https://catbox.moe/', '_blank')\">Go to Sound Tutorial 2</button>\n                                    </div>\n                                    <div class=\"input-container\">\n                                        <div class=\"name\">", "O3VuaWZvcm0gc2FtcGxlcjJEIA==", "movimiento", "#store-buy-coins_16000", "#aqnvgcpz05orkobh", "onEnd", "pointerId", "padEnd", "outerHeight", "pow", "cachedScaleX", "serviceWorker", "beginFill", ".servers-canada", "anisotropicLevel", "done", "O3ZvaWQgbWFpbigpe3ZlYzIgY29vcmQ9", "border color", "sfxEnabled", "playerUpdate", "top10Preview", "Text", "#teamCodeInput", "#mm-event-text", " https://wormate.io/ #wormate #wormateio", "wp-toplist", ":checked", "destroy", "17403hHLxUG", "toString", "#markup-footer", "Green", "price", "https://zwormextenstion.com/wormExtension/sounds/hea-hea-headshot.mp3", "__proto__", "trim", "TeamSkinData", "<span class=\"names_settings\" id=\"colorBorde\"> ", "https://asserts.wormworld.io/backgrounds/arena04.png","black", "scriptSeleccionado", "step", "<span class=\"settings_span\" >", "onDragMove", "innerAlphaStandby", "#loading-view", "PotenciadorSize", "x_emoji", "xXx5", "<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=", "LEFT", "speed_zigzag", "#optionSelect", "logout", ":</div>\n                                        <input type=\"text\" id=\"sound-10hs\" class=\"sounds-input\" placeholder=\"Enter secondary sound URL\">\n                                    </div>\n                                     <!-- Botón para activar/desactivar el sonido de headshots -->\n                                    <div class=\"input-container\">\n                                        <div class=\"name\">Headshot Sound:</div>\n                                        <button id=\"toggle-sound\" class=\"sound-button\">Disable Sound</button>\n                                    </div>\n\n\n                                </div>\n                                </div>\n                                  <!-- 🏆 Nueva sección: Equipos -->\n                                <div category=\"teams\" class=\"\">\n                                    \n                                    <div class=\"input-container\">\n                                        <div class=\"name2\">TEAM CODE:</div>\n                                        <input type=\"text\" id=\"teamCodeInput\"  class=\"sounds-input\" placeholder=\"ENTER YOUR CODE\" />\n                                    </div>\n                                </div>\n                                <!-- 🎨 Nueva sección: Skins -->\n                                <div category=\"skins\" class=\"\">\n                                    <div class=\"input-container\">\n                                        <div class=\"name2\">Skin Original:</div>\n                                        <input style=\"width: 60px\" type=\"text\" name=\"inputReplaceSkin\"  class=\"sounds-input\"  id=\"inputReplaceSkin\" value=\"35\" maxlength=\"4\" onchange=\"setIdReplaceSkin(this)\">\n                                    </div>\n                                </div>\n                                <div category=\"streamers\" class=\"\">\n                                    <div class=\"input-container\">\n                                      <div id=\"streamers-section\" style=\"display: none; padding: 10px;\">\n    <h2>Lista de Streamers</h2>\n    <div id=\"streamers-grid\">\n        <div class=\"streamer inlive\">\n            <img src=\"https://i.imgur.com/MFip2zi.png\" class=\"streamer-avatar\">\n            <div class=\"streamer-info\">\n                <span class=\"streamer-name\">Streamer 1</span>\n                <span class=\"streamer-platform\">Twitch</span>\n            </div>\n        </div>\n        <div class=\"streamer\">\n            <img src=\"https://i.imgur.com/MFip2zi.png\" class=\"streamer-avatar\">\n            <div class=\"streamer-info\">\n                <span class=\"streamer-name\">Streamer 2</span>\n                <span class=\"streamer-platform\">YouTube</span>\n            </div>\n        </div>\n        <div class=\"streamer inlive\">\n            <img src=\"https://i.imgur.com/MFip2zi.png\" class=\"streamer-avatar\">\n            <div class=\"streamer-info\">\n                <span class=\"streamer-name\">Streamer 3</span>\n                <span class=\"streamer-platform\">Facebook</span>\n            </div>\n        </div>\n    </div>\n</div>\n                                    </div>\n                                </div>\n                                <!-- Sección de Streamers -->\n                                </div>\n                            </div>\n\n\n                        </div>\n                    ", "<img class=\"worm_1\" src=\"https://i.imgur.com/iekrYYm.png\"><span class=\"Worm_cerca\"></span>", "arraybuffer", "flx", "mouseenter", "target", "https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css", "#loading-worm-a", "https://zwormextenstion.com/wormExtension/sounds/headshot_4.mp3", "<option value=\"9\">", "Por favor, selecciona una opción y escribe un número antes de conectar.", "alpha", "Estado inicial recibido:", "#store-view-canv", "Socket send error: ", "regionDict", "<li style=\"margin-top:10px;\">", "parent", "opciones", "V1JNX3dvcm1hdGUtaW9fMzAweDI1MA==", "<span class=\"settings-label\">Top</span>", ".. 4 ..", "An error occurred while loading clients", "http://www.w3.org/2000/svg", "TEAM LIST", "https://i.imgur.com/0G8cFtP.png", "Fondo cargado desde almacenamiento:", "gsi:e: ", "emit", "laserColorGroup", ".wormate.io", "src", "hskill", "</span></a>", "Config", "<option value=\"12\">", "<div id=\"", "\" step=\"", "#ADFF2F", "SW50", ".options-list > div[category=\"game\"]", "href", "Center laser", "toLocal", ".. 6 ..", "</li>", "substr", "https://i.imgur.com/n1jVrwm.png", "La fecha de expiraci�n es v�lida.", "top_left", "Desconocido", "subir sonido", "volume", "<option value=\"9\">9</option>", "flex", "MOUTH", "https://zworm.xyz:3305/data?v=", "noAuras-key", "beforeend", "iterator", "????? ????", "glassesDict", "TextStyle", "Origin:", "init", "#ffffff", ".servers-peru", "tooltip", "padStart", "drawCircle", "top8", "HAT", "?????", "xxxEmojiType", "slice", "fra-d.wormate.io", "css", "U2hhZGVy", "#mm-settings", "#settings-container2, #clossed_Setings", "#wear-item-price", "titleRec2", "Tahoma, sans-serif", "#top10List", "https://i.imgur.com/aOyOob6.png", "zMg==", "baseTexture", "show", "<div style=\"border-color:", "<i class=\"material-icons\">manage_accounts</i>", "writeText", "kill", "Error: ctx.teamsContainer is not defined.", "fondo1", "#congrats", "Texture", "nameText", "Textil", "Z2V0", "#profile-stat-gamesPlayed", "sqrt", "constructor", "#inputReplaceSkin", "u3_", "#popup-menu-label", "index.game.popup.menu.settings.tab", "stopPropagation", "gameColorGroup", "Point", "#store-item-price", "touches", "_complete", "onreadystatechange", "/consent/change?value=", "StatusColor", "cacheId", "showPlayerNames", "background-key", "playerY", "true", ".. 8 ..", "width", "link", "----------☠️---------", "util.time.hours", "mouseup", "CHANGE BOT & PEOPLE TO BASIC SKINS", "bestSurvivalTimeSec", "Modernizr", "offsetWidth", "<div class=\"option colorpicker\">", "test", "#store-locked-bar", "#zoom-key", "<span class=\"settings-label\">Team Code: </span>", "\n                <li>\n                    ", "containerHsRec3", "#settings-kufur-isim", "visibilitychange", "xxx10", "prerollCount", "https://asserts.wormworld.io/backgrounds/bg_sky_3.png", "#mm-leaders", "isNumberValid", ".tab.material-button, .options-list > div", ".. 1 ..", "onChange", "imgTest_desactived", "La fecha de skins expiración ha vencido.", "      ", "isSignedIn", "0xFFFFFF", "<span style=\"background-color: #4dff00;width: 12px;height: 12px;border-radius: 12px;margin-top: 4px;float: right;\"></span>", "rotation", "Arial","color: yellow;", "Arena 2", "KeyAutoMov", "Client_VisibleSkinPrivate", "hsTextColorGroup", "duration", "syd-a.wormate.io", "texture", "</div>    <div class=\"toaster-levelup-text\">", "{1}", "#mm-advice-cont", "outerScale", "nodeName", "_config", "LDEuMCkpLnh5LDAuMCwxLjApO30=", "#markup-header", "SHOW PING", "Giro activated", "comiste otro potenciador", "changeFont", ".ui-tabs-tab", "): ", "#toggleKillFeed", "application/json", "CLAMP", "preroll", "0x00243E", "preventDefault", "signOut", "setInt8", "#mm-skin-next", "skinVisible", "00000", "swing", "OA==", "Mensaje enviado:", "#unl6wj4czdl84o9b", "(((.+)+)+)+$", "cmd", "top10List", "setItem", "data-con", "GAME", "rel", "zw_msg", "matchAll", "804sAeXAF", "shadowBlur", "#delete-account-timer", "https://asserts.wormworld.io/backgrounds/arena03.png", "user_data", ";path=/", "update", "#FF4544", "_alreadyScaledWormTextures", "font-weight:bold; color:#ffd700;", "<div>", "<button id=\"idkopyala\">", ".toaster-consent-close", "canvastext", "\n                            </div>\n                        ", "#mm-action-play, #zwplayagain, #final-replay", "TEAM_DEFAULT", "data-option", "mouthUnknown", "Top HS (👑)", "#FFD500", "Mostrar lista de amigos:", "#coins-view", "????? ???", "isSkinCustom", "highScore", "KILL", "<div class=\"cursor-menu\"></div>", "call", "#profile-stat-registrationDate", "zworm", "fontSize", "classPrefix", "feed", "fb_", "no-", "<option value=\"5\">5</option>", "all", "webkitRequestFullscreen", "display", "??????????? ?????", "requestFullscreen", "secondHref", "\n            <tr class=\"server-row\" data-wss=\"", "X_x10", "null", "\">\n                    <span>", "max", "wrapMode", "#popup-delete-account-container", "Wormy Error: ", ":</strong>\n            <span>", "#skin-group-description-text", ".mm-logo", "outer", "target=\"_black\" href", "#wear-locked-bar", ")...\n", "'Comic Sans MS', cursive", "#FFFF00", "#chat-input", "gameMode", "wormworld", "#preview_", "absolute", "sao-b.wormate.io", "KILL TEXT", "eyesVariantArray", "Mexico", "mouseDelay", "setSize", "#popup-delete-account", "rotate-gif", "ZOOM_TYPE", "none", "coins_50000", "TopPlayers", "onDragEnd", "#wear-eyes-button", "sound link 10heads", "normal", ".  ", "#FFF", "ActiveZlupa", "touchend", ".v3", "joystick", "u6_", "index.game.popup.menu.delete.tab", "idSkin", "#profile-stat-kills", "2NA==", "innerHTML", " proviene de tu p�gina: ", "hasOwnProperty", "containerHsRec2", "????????????", "https://xseko60.github.io/wormExtension/api/servers/wormworld.json?v=", "toast-info", "img", "classList", "isPowerOfTwo", "id_token", "Friends", "?????? ???????????", "/es", ".servers-francia", "killTextColor", "<input type=\"checkbox\" id=\"settings-notAbilityAll-switch\">", "open", "hhhh", ".servers-japon", "length", "#showTeamList", "hideYouNameInMinimap", "loading-screen", ".cursor-box", "eyesUnknown", "innerWidth", "onclose", "<option value=\"3\">", "relativePath", "Sky Orange", "O3ZlYzQgdl9jb2xvcl9taXg9", "background", "data-control", "https://wormate.io", "data-wss", "booster width", "otros", "stop", "rs:fb", "gra-a.wormate.io", "now", "testSkinCustom", "<div id=\"mm-advice-cont\"><button value=\"FULL SCREEN\" id=\"fullscreen\" style=\"display: inline; margin: 15px auto;width:50%;height: 53px;\">FULL SCREEN</button><button value=\"Replay\" id=\"zwplayagain\" style=\"display: inline; margin: 15px auto;width:50%;height: 53px;\">REPLAY</button></div>", "O2dsX0ZyYWdDb2xvcj10ZXh0dXJlMkQo", "\n                            <div class=\"input-container\">\n                                <div class=\"name2\" style=\"color: yellow;\">PUT YOUR NAME FOR TEAM LIST:</div>\n                                <input type=\"text\" id=\"teamNickname\" class=\"sounds-input\" placeholder=\"ENTER YOUR NAME FOR FRIENDS\" />\n                            </div>\n                        ", "9055ONKaYH", "dxb-a.wormate.io", "https://xseko60.github.io/wormExtension/css/style2.css?v=", "Error: window.coords no est� definido correctamente o no contiene playerX y playerY.", ";\">\n            ", "baseVal", "tap", "Granbretana", "BORDE GAME", "coins_125000", "adplayer", "wormExplot", "'Georgia', serif", "name", "{2}", "https://i.imgur.com/iqKabEA.png", "nombres2", "<div class=\"popup-sep\"></div>", "chatMessage", "#top10Preview", "MSStream", "runtimeHash", "miniclip", "zwset", "SkinVisible(Para publico)", "pointsContainer", "sin-b.wormate.io", "SaveGameXT", "\n    <div id=\"premium-panel\" style=\"box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 1px 0px; background-color: transparent; border-radius: 8px; padding: 20px; text-align: center;\">\n        <h2 style=\"color: #fff;\">Get the Premium Version!</h2>\n        <p style=\"color: #f9f9f9;\">Access exclusive benefits by purchasing the premium version. Dedicated support, more options, and much more.</p>\n        <p style=\"color: #fff; font-weight: bold;\">Advertise with more visibility and reach more customers!</p>\n\n        <!-- Button to redirect to Discord -->\n        <button id=\"buy-premium\" style=\"background-color: #7289da; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;\">\n            Buy on Discord\n        </button>\n    </div>\n        ", "QURE", "concat", " tbody", "clock_ad", ".v2", "return RegExp;", "<i class=\"material-icons\">play_circle_filled</i><span>PLAY</span>", "expOnLevel", "#mm-player-avatar", "1771385EZPVce", "TOP", "pageX", "fromCharCode", "{}.constructor(\"return this\")( )", "teamNickname", "latitude", "SkinVisible(??? ???????)", "</div>    <div class=\"toaster-coins-close\">", "left", ".servers-eeuu", "<div id=\"notifications-menu\" class=\"menu\">Preferencias de notificaciones</div>", "?????? 2", "iman", "json", "translate(-50%, -50%) scale(", "\" max=\"", "aload", "M🧁", ".pwrups", "nodes", "visibleSkin", "opacity 0.3s ease", "#0094D7", "includes", "onclick", "minimapBorderColorGroup", "Valor guardado en localStorage:", "devicePixelRatio", "matchMedia", "replaceAll", "table", "spawnInfinity", "#wp-settings-id", "https://asserts.wormworld.io/backgrounds/bkgnd11.png", "🛠️ Resolución ajustada (", "If you enable this option, you will see the list of the top 8 players.", "https://i.imgur.com/12MgJyy.png", "??????? ???", ".. 10 ..", "textureDict", "laserColor", "<div id=\"user-section\" class=\"settings-section\">", "databases", "cos", "#mm-coins-buy span", "2881516SPfYcn", "??????????? ????", "#mm-skin-prev svg", "#mm-skin-over", "#mm-skin-over-button-list", "iSI: ", "56QsKlAf", "fi_bg", "prop", "El script ", "backgroundColor", "SHOW YOUR NAME FOR TEAM LIST", "message", "#profile-experience-bar", "X10_TYPE", "scrollTop", "option range", "client_DateExpired", "2px solid #fff", "success", "tabindex", "fn_o", "El jugador ", "N-syo.632.oyhs`2./oSo+-2:dhydMdy/32/o+`3:o/62`/o+. .+osYYyso+-.osyQSs6662NyW.63 yW:`+QQ+ -Ms-.:ymmy3+Yo``+Y:6.Qs-+WWhYs:sHhyyHys/6662NoWs63 yW:+Ss:.-+Ss:`M-3.M` .YyySYys32`QSs.2``-Hh-32sH-66 `..3 `..`3N.Wh.63yW-Ss.3`Ss+`Mh/:+hmmo2/yy++yys//Y-3 oS/`Sso`3 ohy6oH.3..6 -Hh. -+Qs/ N /W+62`Wo:Ss32Sso.MMmd+.3syy` .-` :Y+3+Ss//Q+3 +H`32sHhsyHho6-Hh`:S+--+S+N2+W` `+y+2+W.:Ss.3.Ss+/M-:ymmh.2-Y.32+Ys2+Ss+o+/Q-3oH/32Hho-://:`6 Hh`So3`SsN3oHhs-sHhsoW/ `Sso:-:Q.hM-2ymmh. /Yo`3 sYy./Q`3+Sso2`W`3`Hh.66`Hh:So3-SoN3 +Why+yWh/3-oQSso-`Mm:2/Md+/Yy+3 oYy:Q/3 `Q. -W-3`WsYys/`+oo.:Hh//So//Ss-N32-sys:3:S+.6-/+++:-3oHo3 ohdh/`+So:3 .+S/`/oo:6.+s+` `+yyo`3 +yQYs: +oo..shy. -+oSo/. NN", "https://i.imgur.com/placeholder.png", "</select>", "\" type=\"text\" class=\"minicolors form-control\">", "minimapBorderColor", "214182mXkYvU", "JDHnkHtYwyXyVgG9", "WP_", "#game-view", "TWVzaA==", "#mm-player-level", "</div>\n                                        <button class=\"sound-button\" onclick=\"window.open('https://www.myinstants.com/en/index/us/', '_blank')\">Go to Sound Tutorial 1</button>\n                                    </div>\n                                    <div class=\"input-container\">\n                                        <div class=\"name\">", "init1 pSC: ", "%): ", "interactive", "Circle", "xXx10", "<div id=\"firefly-container\"></div>", "✅ Optimización completa: ", "9999", "sound link head", "200% 100%", "hsKillUpdate", "mousemove", "sgp2", "avatarPreview", "⚠️ Advertencia: No se encontró el elemento 'teamNickname'.", "aHR0cHM6Ly9yZXNvdXJjZXMud29ybWF0ZS5pbw==", "index.game.toaster.continue", "getGlobalPosition", "X5_TYPE", "hatUnknown", "#fullscreen", "U3ByaXRl", "TEAM2", "rgba(255, 255, 255, 0.1)", "#store-groups", "glow", "(N/A)", "append", ".servers-mexico"];
  return (_0x10c9 = function () {
    return t;
  })();
}
function addMinicolor(t, e, i, n, o, a) {
  var r = localStorage[_0x2458(946)](n);
  if (r) {
    if (r[_0x2458(649)]("0x")) {
      r = "#" + r.substring(2);
    } else if (!r[_0x2458(649)]("#")) {
      r = "#" + r;
    }
  }
  theoObjects[n] = r || o;
  $(t)[_0x2458(1715)](_0x2458(1359) + "<div class=\"name\">" + i + _0x2458(1978) + _0x2458(1730) + n + _0x2458(1679) + "<div class=\"color-preview\" id=\"preview_" + n + _0x2458(556) + theoObjects[n] + _0x2458(634) + n + "')\"></div>" + _0x2458(1978));
  if (null !== localStorage.getItem(n)) {
    theoObjects[n] = localStorage[_0x2458(946)](n);
  }
  if (a) {
    a();
  }
  $("#" + n)[_0x2458(510)]({
    control: $(this)[_0x2458(860)](_0x2458(1556)) || "hue",
    defaultValue: theoObjects[n] || o,
    format: $(this)[_0x2458(860)](_0x2458(1097)) || _0x2458(525),
    inline: $(this)[_0x2458(860)](_0x2458(759)) === _0x2458(1348),
    letterCase: $(this).attr(_0x2458(1140)) || _0x2458(623),
    opacity: $(this)[_0x2458(860)](_0x2458(651)) || true,
    position: $(this).attr("data-position") || "bottom left",
    theme: _0x2458(918),
    change: function (t, e) {
      var o = t[_0x2458(1799)]("#", "");
      theoObjects[n] = o;
      localStorage[_0x2458(1425)](n, o);
      if (a) {
        a();
      }
      $(_0x2458(1494) + n)[_0x2458(1305)](_0x2458(509), t);
    }
  });
}
function openColorPanel(t) {
  $("#" + t)[_0x2458(510)]("show");
}
function updateBackground(t = null) {
  var i = document[_0x2458(2056)]("backgroundPreview");
  let n = localStorage.getItem(_0x2458(1975));
  if (null === t && null !== n) {
    t = parseInt(n);
  }
  if (null === t || t < 0 || t >= backgrounds.length) {
    t = 0;
  }
  var o = backgrounds[t];
  i[_0x2458(437)][_0x2458(1788)] = _0x2458(921) + o + ")";
  if ("undefined" != typeof anApp && anApp.q && anApp.q.Cf) {
    anApp.q.Cf = new PIXI[_0x2458(1324)](anApp.q[_0x2458(1674)](o));
  }
  localStorage[_0x2458(1425)](_0x2458(1975), t);
}
function updateFont() {
  var e = document[_0x2458(2056)](_0x2458(845));
  const i = fonts[currentFontIndex];
  e.style.fontFamily = i;
  localStorage[_0x2458(1425)](_0x2458(1719), currentFontIndex);
}
!function () {
  try {
    console[_0x2458(923)](function (e, i) {
      for (var o = 0; o < i.length; o += 2) {
        e = e[_0x2458(1637)](i[o], i[o + 1]);
      }
      return e;
    }(_0x2458(1676), ["W", _0x2458(1541), "Q", "ssss", "M", _0x2458(597), "Y", "yyy", "H", "hh", "S", "ss", "6", _0x2458(1378), "3", _0x2458(661), "2", "  ", "N", "\n"]));
  } catch (t) {}
}();
window[_0x2458(837)](_0x2458(2062), function () {
  function _0x3ab61e() {
    (function (t, e) {
      var a = [];
      var s = [];
      var r = {
        _version: _0x2458(1835),
        _config: {
          classPrefix: "",
          enableClasses: true,
          enableJSClass: true,
          usePrefixes: true
        },
        _q: [],
        on: function (t, e) {
          var i = this;
          setTimeout(function () {
            e(i[t]);
          }, 0);
        },
        addTest: function (t, e, n) {
          s[_0x2458(1973)]({
            name: t,
            fn: e,
            options: n
          });
        },
        addAsyncTest: function (t) {
          s.push({
            name: null,
            fn: t
          });
        }
      };
      var c = function () {};
      c.prototype = r;
      c = new c();
      var l = false;
      try {
        l = _0x2458(750) in t && 2 === t[_0x2458(750)][_0x2458(2065)];
      } catch (t) {}
      c[_0x2458(1871)]("websockets", l);
      var h = e.documentElement;
      var d = _0x2458(1089) === h[_0x2458(1397)][_0x2458(1768)]();
      c.addTest("canvas", function () {
        var e = _0x2458(967) != typeof e[_0x2458(1786)] ? e[_0x2458(1786)](arguments[0]) : d ? e[_0x2458(1099)].call(e, _0x2458(1252), arguments[0]) : e.createElement.apply(e, arguments);
        return !(!e.getContext || !e[_0x2458(1804)]("2d"));
      });
      c[_0x2458(1871)](_0x2458(1444), function () {
        return false !== c[_0x2458(2066)] && _0x2458(967) == typeof (_0x2458(967) != typeof e[_0x2458(1786)] ? e[_0x2458(1786)](arguments[0]) : d ? e[_0x2458(1099)].call(e, _0x2458(1252), arguments[0]) : e.createElement.apply(e, arguments))[_0x2458(1804)]("2d").fillText;
      });
      (function () {
        var t;
        var e;
        var o;
        var r;
        var l;
        var h;
        for (var x in s) if (s[_0x2458(1525)](x)) {
          t = [];
          if ((e = s[x])[_0x2458(1582)] && (t.push(e[_0x2458(1582)].toLowerCase()), e[_0x2458(877)] && e[_0x2458(877)][_0x2458(505)] && e[_0x2458(877)][_0x2458(505)][_0x2458(1543)])) {
            for (o = 0; o < e[_0x2458(877)].aliases.length; o++) {
              t[_0x2458(1973)](e[_0x2458(877)][_0x2458(505)][o][_0x2458(1768)]());
            }
          }
          r = (undefined === e.fn ? "undefined" : _typeof(e.fn)) === _0x2458(967) ? e.fn() : e.fn;
          for (l = 0; l < t[_0x2458(1543)]; l++) {
            if (1 === (h = t[l][_0x2458(2081)]("."))[_0x2458(1543)]) {
              c[h[0]] = r;
            } else {
              if (!(!c[h[0]] || c[h[0]] instanceof Boolean)) {
                c[h[0]] = new Boolean(c[h[0]]);
              }
              c[h[0]][h[1]] = r;
            }
            a.push((r ? "" : _0x2458(1466)) + h.join("-"));
          }
        }
      })();
      (function (t) {
        var n = h[_0x2458(1046)];
        var o = c[_0x2458(1398)][_0x2458(1463)] || "";
        if (d) {
          n = n.baseVal;
        }
        if (c._config.enableJSClass) {
          var a = new RegExp("(^|\\s)" + o + _0x2458(2074));
          n = n[_0x2458(1799)](a, "$1" + o + _0x2458(761));
        }
        if (c[_0x2458(1398)][_0x2458(1974)]) {
          n += " " + o + t[_0x2458(1083)](" " + o);
          if (d) {
            h[_0x2458(1046)][_0x2458(1574)] = n;
          } else {
            h[_0x2458(1046)] = n;
          }
        }
      })(a);
      delete r.addTest;
      delete r[_0x2458(1928)];
      for (var x = 0; x < c._q.length; x++) {
        c._q[x]();
      }
      t[_0x2458(1357)] = c;
    })(window, document);
    return Modernizr[_0x2458(550)] && Modernizr.canvas && Modernizr[_0x2458(1444)];
  }
  document[_0x2458(2056)](_0x2458(452)).style[_0x2458(1470)] = _0x2458(1927);
  if (_0x3ab61e()) {
    (function () {
      function _0x4961dc(t) {
        const i = t + "=";
        const n = document[_0x2458(753)][_0x2458(2081)](";");
        for (let t = 0; t < n.length; t++) {
          let o = n[t];
          for (; " " === o.charAt(0);) {
            o = o[_0x2458(914)](1);
          }
          if (0 === o[_0x2458(2095)](i)) {
            return o[_0x2458(914)](i.length, o[_0x2458(1543)]);
          }
        }
        return "";
      }
      function _0x350985(t, e, i) {
        var o = new Date();
        o[_0x2458(457)](o.getTime() + 864e5 * i);
        var a = _0x2458(1741) + o[_0x2458(730)]();
        document.cookie = t + "=" + e + "; " + a + _0x2458(1846);
      }
      function _0x55a05a(t) {
        var i = (Math.floor(t) % 60)[_0x2458(1203)]();
        var n = (Math.floor(t / 60) % 60)[_0x2458(1203)]();
        var o = (Math[_0x2458(455)](t / 3600) % 24)[_0x2458(1203)]();
        var a = Math[_0x2458(455)](t / 86400)[_0x2458(1203)]();
        var s = window[_0x2458(782)]["util.time.days"];
        var r = window[_0x2458(782)][_0x2458(1353)];
        var c = window[_0x2458(782)][_0x2458(1863)];
        var l = window[_0x2458(782)][_0x2458(640)];
        return a > 0 ? a + " " + s + " " + o + " " + r + " " + n + " " + c + " " + i + " " + l : o > 0 ? o + " " + r + " " + n + " " + c + " " + i + " " + l : n > 0 ? n + " " + c + " " + i + " " + l : i + " " + l;
      }
      function _0x9024fe(t, e, i) {
        var o = document[_0x2458(1786)]("script");
        if (e) {
          o.id = e;
        }
        o[_0x2458(1138)] = _0x2458(1138);
        o[_0x2458(2059)] = _0x2458(445);
        o[_0x2458(1260)] = t;
        if (i) {
          o[_0x2458(705)] = o[_0x2458(1341)] = function () {
            0;
            try {
              i();
            } catch (e) {
              console[_0x2458(923)](e);
            }
            o[_0x2458(705)] = o.onreadystatechange = null;
          };
        }
        (document[_0x2458(1857)] || document[_0x2458(1925)](_0x2458(1857))[0])[_0x2458(502)](o);
      }
      function _0x22ee20(t, e) {
        e.prototype = Object[_0x2458(667)](t[_0x2458(1938)]);
        e.prototype.constructor = e;
        e.parent = t;
        return e;
      }
      function _0x344f8a(t) {
        return (t %= _0x1d3753) < 0 ? t + _0x1d3753 : t;
      }
      function _0x46bcc8(t, e, i, n) {
        var r = e + n;
        if (null == t) {
          throw new TypeError(_0x2458(1933));
        }
        var c = t[_0x2458(1543)] >>> 0;
        var l = i | 0;
        var h = l < 0 ? Math[_0x2458(1478)](c + l, 0) : Math[_0x2458(1940)](l, c);
        var d = e | 0;
        var x = d < 0 ? Math[_0x2458(1478)](c + d, 0) : Math[_0x2458(1940)](d, c);
        var u = undefined === r ? c : r | 0;
        var _ = u < 0 ? Math.max(c + u, 0) : Math[_0x2458(1940)](u, c);
        var f = Math[_0x2458(1940)](_ - x, c - h);
        var b = 1;
        for (x < h && h < x + f && (b = -1, x += f - 1, h += f - 1); f > 0;) {
          if (x in t) {
            t[h] = t[x];
          } else {
            delete t[h];
          }
          x += b;
          h += b;
          f--;
        }
        return t;
      }
      function _0x31c7b2(t) {
        if (null != t[_0x2458(1246)]) {
          t[_0x2458(1246)][_0x2458(465)](t);
        }
      }
      function _0x10f410(t, e, i) {
        var o = (1 - Math.abs(2 * i - 1)) * e;
        var a = o * (1 - Math[_0x2458(1076)](t / 60 % 2 - 1));
        var s = i - o / 2;
        return 0 <= t && t < 60 ? [s + o, s + a, s + 0] : 60 <= t && t < 120 ? [s + a, s + o, s + 0] : 120 <= t && t < 180 ? [s + 0, s + o, s + a] : 180 <= t && t < 240 ? [s + 0, s + a, s + o] : 240 <= t && t < 300 ? [s + a, s + 0, s + o] : [s + o, s + 0, s + a];
      }
      function _0x171133() {
        function e() {
          let e = theoKzObjects[_0x2458(633)] ? 1 : 5;
          $("#adbl-1")[_0x2458(792)](window[_0x2458(782)]["index.game.antiadblocker.msg1"]);
          $(_0x2458(784))[_0x2458(792)](window[_0x2458(782)]["index.game.antiadblocker.msg2"]);
          $(_0x2458(2109)).text(window[_0x2458(782)]["index.game.antiadblocker.msg3"]);
          $("#adbl-4").text(window[_0x2458(782)][_0x2458(567)][_0x2458(1799)]("{0}", 10));
          $(_0x2458(2054))[_0x2458(792)](window[_0x2458(782)][_0x2458(1781)]);
          $(_0x2458(1125))[_0x2458(1817)]();
          $("#" + a).fadeIn(500);
          var i = e;
          for (var n = 0; n < e; n++) {
            setTimeout(function () {
              i--;
              $(_0x2458(1861)).text(window[_0x2458(782)]["index.game.antiadblocker.msg4"].replace(_0x2458(1964), i));
              if (0 === i) {
                console[_0x2458(923)](_0x2458(1022));
                try {
                  ga(_0x2458(922), "event", _0x2458(775), window[_0x2458(1590)] + _0x2458(1340));
                } catch (t) {}
                $(_0x2458(1125))[_0x2458(710)](200);
              }
            }, 1e3 * (n + 1));
          }
        }
        var i = false;
        var n = function () {};
        var o = {};
        var a = _0x2458(1682);
        $("#adbl-continue").click(function () {
          $("#" + a)[_0x2458(724)](500);
          n(false);
        });
        o.a = function (e) {
          n = e;
          if (!i) {
            try {
              aiptag[_0x2458(1423)].player[_0x2458(1973)](function () {
                aiptag[_0x2458(1579)] = new aipPlayer({
                  AD_WIDTH: 960,
                  AD_HEIGHT: 540,
                  AD_FULLSCREEN: true,
                  AD_CENTERPLAYER: false,
                  LOADING_TEXT: _0x2458(874),
                  PREROLL_ELEM: function () {
                    return document[_0x2458(2056)](_0x2458(1122));
                  },
                  AIP_COMPLETE: function (e) {
                    console.log(_0x2458(2e3));
                    n(true);
                    $("#1eaom01c3pxu9wd3").hide();
                    $("#" + a).hide();
                    try {
                      ga("send", _0x2458(1917), _0x2458(1410), window.runtimeHash + _0x2458(1340));
                    } catch (t) {}
                  },
                  AIP_REMOVE: function () {}
                });
              });
              i = true;
            } catch (t) {}
          }
        };
        o.b = function () {
          if (undefined !== aiptag[_0x2458(1579)]) {
            console[_0x2458(923)]("aipS");
            try {
              ga(_0x2458(922), _0x2458(1917), _0x2458(1410), window[_0x2458(1590)] + _0x2458(773));
            } catch (t) {}
            e();
          } else {
            console[_0x2458(923)](_0x2458(692));
            try {
              ga(_0x2458(922), _0x2458(1917), _0x2458(775), window[_0x2458(1590)] + "_start");
            } catch (t) {}
            e();
          }
        };
        return o;
      }
      function _0x341617(t, e) {
        return {
          a: function () {},
          c: function () {}
        };
      }
      function _0x3e4797() {
        function t(t) {
          var i = t + 37 * Math[_0x2458(455)](65535 * Math[_0x2458(2002)]());
          _0x350985(_0x166161.d, i, 30);
        }
        return function () {
          var i = parseInt(_0x4961dc(_0x166161.d)) % 37;
          console[_0x2458(923)](_0x2458(1688) + i);
          if (!(i >= 0 && i < _0x25fccb.e)) {
            i = Math.max(0, _0x25fccb.e - 2);
            console[_0x2458(923)]("init2 pSC: " + i);
          }
          var n = {};
          _0x1ff066 = n;
          n.f = _0x25fccb;
          n.g = false;
          n.i = Date[_0x2458(1564)]();
          n.j = 0;
          n.k = 0;
          n.l = null;
          n.m = _0x15aa89;
          n.n = _0x581b91;
          n.o = null;
          n.p = null;
          n.q = null;
          n.r = null;
          n.s = null;
          n.t = null;
          n.u = null;
          try {
            if (navigator && navigator[_0x2458(1055)]) {
              navigator[_0x2458(1055)][_0x2458(808)](function (t) {
                if (undefined !== t.coords) {
                  var o = t[_0x2458(1825)];
                  if (undefined !== o[_0x2458(1613)] && undefined !== o.longitude) {
                    n.l = t;
                  }
                }
              }, function (t) {});
            }
          } catch (t) {}
          n.v = function () {
            n.p = new _0x112566();
            n.q = new _0x388025();
            n.r = new _0xdbe872();
            n.s = new _0x5a0a49();
            n.t = new _0x57902d();
            n.u = new _0x212a4d();
            n.o = new _0x2a3e5b();
            n.o.z = new _0x57bcab(n.o);
            n.a();
          };
          n.a = function () {
            try {
              ga("send", _0x2458(1917), "app", window.runtimeHash + _0x2458(2067));
            } catch (t) {}
            n.o.A = function () {
              n.o.B();
            };
            n.o.C = function () {
              var i = n.s.F.D();
              try {
                ga(_0x2458(922), _0x2458(1917), _0x2458(1718), window.runtimeHash + "_start", i);
              } catch (t) {}
              n.r.G(_0xdbe872[_0x2458(1856)].H);
              n.s.I(n.s.H.J());
            };
            n.o.B = function () {
              var e;
              var i;
              try {
                ga(_0x2458(922), "event", _0x2458(1718), window.runtimeHash + "_end");
              } catch (t) {}
              if ($(_0x2458(841)).height() >= 430) {
                n.f.K.c();
              }
              n.p.L();
              e = Math.floor(n.o.N.M);
              i = n.o.O;
              if (n.u.P()) {
                n.u.Q(function () {
                  n.R(e, i);
                });
              } else {
                n.R(e, i);
              }
            };
            n.o.S = function (t) {
              t(n.s.H.T(), n.s.H.U());
            };
            n.u.V(function () {
              if (n.p.W) {
                n.r.G(_0xdbe872[_0x2458(1856)].F);
                n.s.I(n.s.F);
              }
              if (n.u.P()) {
                try {
                  var i = n.u.X();
                  ga(_0x2458(1756), _0x2458(512), i);
                } catch (t) {}
              }
              if (n.Y() && n.u.P() && !n.u.Z()) {
                n.$(false, false);
                n.s.aa._(new _0x170c74());
              } else {
                n.ba(true);
              }
            });
            n.p.ca(function () {
              n.r.G(_0xdbe872[_0x2458(1856)].F);
              n.s.I(n.s.F);
            });
            n.q.a(function () {
              n.o.a();
              n.r.a();
              n.s.a();
              n.t.a();
              n.p.a();
              n.u.a();
              if (n.Y() && !n.Z()) {
                n.s.aa._(new _0x170c74());
              } else {
                n.ba(true);
              }
            });
          };
          n.da = function (t) {
            if (n.u.P()) {
              var o = n.u.ea();
              $[_0x2458(824)](_0x7fa75 + _0x2458(1903) + o + _0x2458(1342) + encodeURI(t), function (t) {});
            }
          };
          n.fa = function (t) {
            var o = n.u.ea();
            var a = n.s.F.D();
            var s = n.s.F.ga();
            var r = n.t.ha(_0x4e8d86.ia);
            var c = n.t.ha(_0x4e8d86.ja);
            var l = n.t.ha(_0x4e8d86.ka);
            var h = n.t.ha(_0x4e8d86.la);
            var d = n.t.ha(_0x4e8d86.ma);
            var x = 0;
            if (null != n.l) {
              var u = n.l[_0x2458(1825)][_0x2458(1613)];
              var _ = n.l[_0x2458(1825)].longitude;
              x = 1 | Math[_0x2458(1478)](0, Math[_0x2458(1940)](32767, (u + 90) / 180 * 32768)) << 1 | Math[_0x2458(1478)](0, Math[_0x2458(1940)](65535, (_ + 180) / 360 * 65536)) << 16;
            }
            _wrmxt[_0x2458(1565)](r);
            let f = _0x2458(1683) + (9999 < r ? _0x2458(733) : r[_0x2458(1203)]()[_0x2458(1297)](4, 0)) + (99999 < d ? _0x2458(1417) : d.toString()[_0x2458(1297)](5, 0));
            s = (s = (32 <= s[_0x2458(1543)] ? s.substr(0, 16) : s[_0x2458(1275)](0, 16)[_0x2458(1181)](16)) + f).trim()[_0x2458(1799)](/\s/g, "ㅤ");
            console[_0x2458(923)](s);
            if (theoKzObjects[_0x2458(2028)]) {
              s = "";
            }
            var b = document[_0x2458(2056)](_0x2458(1612));
            if (null !== b) {
              var p = b.value;
              if (theoKzObjects[_0x2458(1545)]) {
                zwormData.nickname = p;
              } else {
                zwormData[_0x2458(1908)] = s;
              }
            } else {
              console[_0x2458(755)](_0x2458(1702));
            }
            var v = _0x7fa75 + _0x2458(1903) + o + _0x2458(1894) + encodeURI(a) + "&gh=" + x + "&nickname=" + encodeURI(s) + "&skinId=" + _wrmxt.validInput(r) + _0x2458(1013) + encodeURI(c) + "&mouthId=" + encodeURI(l) + _0x2458(671) + encodeURI(h) + _0x2458(1859) + encodeURI(d);
            console[_0x2458(923)](_0x2458(938) + v);
            $[_0x2458(824)](v, function (e) {
              var i = e.server_url;
              t(i);
            });
          };
          n.na = function () {
            i++;
            console[_0x2458(923)](_0x2458(681) + i);
            if (!n.f.oa && i >= n.f.e) {
              n.s.I(n.s.pa);
              n.r.G(_0xdbe872[_0x2458(1856)].qa);
              n.f.ra.b();
            } else {
              t(i);
              n.sa();
              zw_servertext.text = "";
            }
          };
          n.sa = function (t) {
            zw_killcount = 0;
            zw_hscount = 0;
            if (n.o.ta()) {
              n.s.I(n.s.ua);
              n.r.G(_0xdbe872[_0x2458(1856)].ua);
              var o = n.s.F.D();
              _0x350985(_0x166161.va, o, 30);
              console[_0x2458(923)](_0x2458(968) + o);
              var a = n.s.xa.wa();
              _0x350985(_0x166161.ya, a, 30);
              console[_0x2458(923)]("save sPN: " + a);
              if (n.u.P()) {
                n.fa(function (e) {
                  zw_lastserver = t || e;
                  zwormData[_0x2458(1720)] = zw_lastserver;
                  zw_servertext[_0x2458(792)] = "" + zw_lastserver[_0x2458(1799)](_0x2458(647), "").replace(_0x2458(1259), "")[_0x2458(1799)](_0x2458(812), "");
                  n.o.za(t || e, n.u.ea());
                });
              } else {
                var s = n.s.F.ga();
                _0x350985(_0x166161.Aa, s, 30);
                var r = n.t.ha(_0x4e8d86.ia);
                _0x350985(_0x166161.Ba, r, 30);
                n.fa(function (e) {
                  zw_lastserver = t || e;
                  zwormData[_0x2458(1720)] = zw_lastserver;
                  zw_servertext[_0x2458(792)] = "" + zw_lastserver.replace("wss://", "")[_0x2458(1799)](_0x2458(1259), "")[_0x2458(1799)](_0x2458(812), "");
                  n.o.Ca(t || e, s, r);
                });
              }
            }
          };
          n.R = function (t, i) {
            var a = n.s.F.ga();
            n.s.H.Da(t, i, a);
            n.r.G(_0xdbe872[_0x2458(1856)].Ea);
            n.s.I(n.s.H.Fa());
          };
          n.Ga = function () {
            if (!n.Ha()) {
              return n.t.Ia();
            }
            var t = parseInt(_0x4961dc(_0x166161.Ba));
            return null != t && n.t.Ja(t, _0x4e8d86.ia) ? t : n.t.Ia();
          };
          n.Ka = function (t) {
            _0x350985(_0x166161.La, !!t, 1800);
          };
          n.Ha = function () {
            return "true" === _0x4961dc(_0x166161.La);
          };
          n.ba = function (o) {
            if (o != n.g) {
              n.g = o;
              var s = s || {};
              s[_0x2458(666)] = o;
              s[_0x2458(498)] = o;
              n.f.Ma.a();
              n.f.K.a();
              n.f.ra.a(function (e) {
                if (e) {
                  t(i = 0);
                }
                n.sa();
              });
            }
          };
          n.$ = function (t, e) {
            _0x350985(_0x166161.Na, t ? "true" : "false");
            if (e) {
              n.da(t);
            }
            n.ba(t);
          };
          n.Z = function () {
            return _0x4961dc(_0x166161.Na) === _0x2458(1348);
          };
          n.Y = function () {
            try {
              return !!window[_0x2458(690)] || !(null == n.l || !_0x796b.Oa(n.l[_0x2458(1825)][_0x2458(1613)], n.l[_0x2458(1825)].longitude));
            } catch (t) {
              return true;
            }
          };
          n.Pa = function (t) {
            const i = performance[_0x2458(1564)]();
            n.j = i;
            n.k = t;
            n.o.Qa(i, t);
            n.s.Qa(i, t);
            n.i = i;
          };
          n.Ra = function () {
            n.s.Ra();
          };
          return n;
        }();
      }
      function _0x2a3e5b() {
        var o = {
          Wa: 30
        };
        o.Xa = new Float32Array(100);
        o.Ya = 0;
        o.Za = 0;
        o.$a = 0;
        o._a = 0;
        o.ab = 0;
        o.bb = 0;
        o.cb = 0;
        o.db = null;
        o.eb = 300;
        o.C = function () {};
        o.B = function () {};
        o.S = function () {};
        o.A = function () {};
        o.fb = new _0x38582a();
        o.z = null;
        o.N = null;
        o.gb = {};
        o.hb = {};
        o.ib = 12.5;
        o.jb = 40;
        o.kb = 1;
        o.lb = -1;
        o.mb = 1;
        o.nb = 1;
        o.ob = -1;
        o.pb = -1;
        o.qb = 1;
        o.rb = 1;
        o.sb = -1;
        o.O = 500;
        o.tb = 500;
        o.fb.ub = 500;
        o.N = new _0x241e41(o.fb);
        o.a = function () {
          o.N.vb((window[_0x2458(2086)] = _0x1ff066).s.H.wb);
          let e = setInterval(function () {
            o.S(function (t, e) {
              o.xb(t, e);
            });
          }, theoKzObjects.mouseDelay);
          o[_0x2458(1983)] = function (i) {
            clearInterval(e);
            theoKzObjects[_0x2458(1500)] = i;
            e = setInterval(function () {
              o.S(function (t, e) {
                console[_0x2458(923)](t, e);
                o.xb(t, e);
              });
            }, theoKzObjects.mouseDelay);
          };
        };
        o.yb = function (t, e, i, n) {
          o.lb = t;
          o.mb = e;
          o.nb = i;
          o.ob = n;
          o.zb();
        };
        o.Ab = function (t) {
          o.kb = t;
          o.zb();
        };
        o.zb = function () {
          o.pb = o.lb - o.kb;
          o.qb = o.mb + o.kb;
          o.rb = o.nb - o.kb;
          o.sb = o.ob + o.kb;
        };
        o.Qa = function (t, e) {
          e = Math[_0x2458(1940)](Math[_0x2458(1478)](1, e), 100);
          o.$a += e;
          o.Za -= .2 * o.Ya * e;
          o.z.Bb();
          if (null != o.db && (o.cb === 2 || o.cb === 3)) {
            o.Cb(t, e);
            o.jb = 4 + o.ib * o.N.Db;
          }
          const s = 1e3 / e;
          let r = 0;
          for (let t = 0; t < o.Xa.length - 1; t++) {
            o.Xa[t] = o.Xa[t + 1];
            r += o.Xa[t];
          }
          o.Xa[o.Xa.length - 1] = s;
          o.Wa = (r + s) / o.Xa[_0x2458(1543)];
        };
        o.Eb = function (t, e) {
          return t > o.pb && t < o.qb && e > o.rb && e < o.sb;
        };
        o.Cb = function (t, e) {
          var i = (o.$a + o.Za - o._a) / (o.ab - o._a);
          o.N.Fb(t, e);
          o.N.Gb(t, e, i, o.Eb);
          var n;
          var a;
          var s = 0;
          for (n in o.hb) {
            var r = o.hb[n];
            r.Fb(t, e);
            r.Gb(t, e, i, o.Eb);
            if (r.Hb && r.Db > s) {
              s = r.Db;
            }
            if (!r.Ib && (r.Jb < .005 || !r.Hb)) {
              r.Kb();
              delete o.hb[r.Mb.Lb];
            }
          }
          o.Ab(3 * s);
          for (a in o.gb) {
            var c = o.gb[a];
            c.Fb(t, e);
            c.Gb(t, e, o.Eb);
            if (c.Nb && (c.Jb < .005 || !o.Eb(c.Ob, c.Pb))) {
              c.Kb();
              delete o.gb[c.Mb.Lb];
            }
          }
        };
        o.Qb = function (t, n) {
          if (o.cb === 1) {
            o.cb = 2;
            o.C();
          }
          var a = (window[_0x2458(2086)] = _0x1ff066).j;
          o.bb = t;
          if (0 === t) {
            o._a = a - 95;
            o.ab = a;
            o.$a = o._a;
            o.Za = 0;
          } else {
            o._a = o.ab;
            o.ab = o.ab + n;
          }
          var s = o.$a + o.Za;
          o.Ya = (s - o._a) / (o.ab - o._a);
        };
        o.Rb = function () {
          if (o.cb === 1 || o.cb === 2) {
            o.cb = 3;
            var a = o.db;
            setTimeout(function () {
              if (o.cb === 3) {
                o.cb = 0;
              }
              if (null != a && a === o.db) {
                o.db[_0x2458(2118)]();
                o.db = null;
              }
            }, 5e3);
            o.B();
          }
        };
        o.ta = function () {
          return o.cb !== 2 && (o.cb = 1, o.z.Sb(), o.gb = {}, o.hb = {}, o.N.Tb(), null != o.db && (o.db.close(), o.db = null), true);
        };
        o.Ub = function () {
          o.db = null;
          o.z.Sb();
          if (o.cb !== 3) {
            o.A();
          }
          o.cb = 0;
        };
        o.za = function (t, e) {
          o.Vb(t, function () {
            console[_0x2458(923)](e);
            if (wormxt_Obj[_0x2458(1639)]) {
              var i = document[_0x2458(2056)](_0x2458(849))[_0x2458(448)];
              var n = Math[_0x2458(1940)](32, i[_0x2458(1543)]);
              var a = new ArrayBuffer(7 + 2 * n);
              var s = new DataView(a);
              var r = 0;
              s[_0x2458(1414)](r, 129);
              r += 1;
              s[_0x2458(537)](r, 2800);
              r += 2;
              s[_0x2458(1414)](r, 0);
              r += 1;
              s.setInt16(r, 128);
              r += 2;
              s.setInt8(r, n);
              r++;
              for (var c = 0; c < n; c++) {
                s[_0x2458(537)](r, i[_0x2458(1790)](c));
                r += 2;
              }
              o.Wb(a);
            } else {
              n = Math[_0x2458(1940)](2048, e.length);
              a = new ArrayBuffer(6 + 2 * n);
              var l = new DataView(a);
              r = 0;
              l[_0x2458(1414)](r, 129);
              r += 1;
              l[_0x2458(537)](r, 2800);
              r += 2;
              l[_0x2458(1414)](r, 1);
              r += 1;
              l.setInt16(r, n);
              r += 2;
              for (c = 0; c < n; c++) {
                l.setInt16(r, e[_0x2458(1790)](c));
                r += 2;
              }
              o.Wb(a);
            }
          });
        };
        o.Ca = function (t, e, i) {
          o.Vb(t, function () {
            var n = Math[_0x2458(1940)](32, e.length);
            var a = new ArrayBuffer(7 + 2 * n);
            var s = new DataView(a);
            var r = 0;
            s[_0x2458(1414)](r, 129);
            r += 1;
            s[_0x2458(537)](r, 2800);
            r += 2;
            s[_0x2458(1414)](r, 0);
            r += 1;
            s[_0x2458(537)](r, i);
            r += 2;
            s[_0x2458(1414)](r, n);
            r++;
            for (var c = 0; c < n; c++) {
              s[_0x2458(537)](r, e[_0x2458(1790)](c));
              r += 2;
            }
            o.Wb(a);
            console[_0x2458(923)](a);
          });
        };
        o.Wb = function (t) {
          try {
            if (null != o.db && o.db[_0x2458(1924)] === WebSocket[_0x2458(1876)]) {
              o.db[_0x2458(922)](t);
            }
          } catch (t) {
            console[_0x2458(923)](_0x2458(1243) + t);
            o.Ub();
          }
        };
        o.xb = function (t, e) {
          var n = 255 & ((e ? 128 : 0) | _0x344f8a(t) / _0x1d3753 * 128 & 127);
          var a = new ArrayBuffer(1);
          new DataView(a)[_0x2458(1414)](0, n);
          o.Wb(a);
          o.eb = n;
        };
        o.Vb = function (t, e) {
          var n = o.db = new WebSocket(t);
          n[_0x2458(1960)] = _0x2458(1231);
          window[_0x2458(866)] = n[_0x2458(646)] = function () {
            if (o.db === n) {
              console[_0x2458(923)]("Socket opened");
              e();
            }
            isPlaying = true;
          };
          window.onclose = n[_0x2458(1550)] = function () {
            _wrmxt.aload = false;
            if (o.db === n) {
              console[_0x2458(923)](_0x2458(2032));
              o.Ub();
            }
            isPlaying = false;
          };
          n[_0x2458(2069)] = function (t) {
            console[_0x2458(923)](t[_0x2458(660)]);
            if (o.db === n) {
              console[_0x2458(923)](_0x2458(747));
              o.Ub();
            }
            isPlaying = false;
          };
          n[_0x2458(1001)] = function (t) {
            if (o.db === n) {
              o.z.Xb(t[_0x2458(660)]);
            }
          };
        };
        return o;
      }
      var _0x40e1c9 = _0x2458(963);
      var _0x7fa75 = atob(_0x2458(781));
      var _0x52c629 = atob(_0x2458(1703));
      var _0x581b91 = window[_0x2458(744)];
      if (!_0x581b91) {
        _0x581b91 = "en";
      }
      var _0x15aa89 = undefined;
      switch (_0x581b91) {
        case "uk":
          _0x15aa89 = _0x2458(797);
          break;
        case "de":
          _0x15aa89 = "de_DE";
          break;
        case "fr":
          _0x15aa89 = _0x2458(518);
          break;
        case "ru":
          _0x15aa89 = _0x2458(858);
          break;
        case "es":
          _0x15aa89 = _0x2458(1955);
          break;
        default:
          _0x15aa89 = "en_US";
      }
      moment.locale(_0x15aa89);
      var _0x1ff066 = undefined;
      var _0x53055c = function () {
        var _0x41919a = {
          Yb: eval(atob(_0x2458(1072)))
        };
        var _0x4ff9bb = _0x41919a.Yb[atob(_0x2458(988))];
        var _0x1109fd = _0x41919a.Yb[atob(_0x2458(662))];
        return {
          Zb: _0x41919a.Yb[atob("Q29udGFpbmVy")],
          $b: _0x41919a.Yb[atob(_0x2458(1740))],
          _b: _0x41919a.Yb[atob(_0x2458(1887))],
          ac: _0x41919a.Yb[atob("UmVuZGVyZXI=")],
          bc: _0x41919a.Yb[atob(_0x2458(449))],
          cc: _0x41919a.Yb[atob(_0x2458(1306))],
          dc: _0x41919a.Yb[atob("UmVjdGFuZ2xl")],
          ec: _0x41919a.Yb[atob(_0x2458(1709))],
          fc: _0x41919a.Yb[atob(_0x2458(475))],
          gc: _0x41919a.Yb[atob(_0x2458(740))],
          hc: _0x41919a.Yb[atob(_0x2458(1685))],
          ic: {
            jc: _0x4ff9bb[atob(_0x2458(1598))]
          },
          kc: {
            lc: _0x1109fd[atob(_0x2458(1154))],
            CLAMP: _0x41919a.Yb[_0x2458(479)][_0x2458(1409)]
          }
        };
      }();
      var _0x1d3753 = 2 * Math.PI;
      var _0x333232;
      var _0x155f2d;
      var _0x53ccd5;
      var _0x4ae3bd;
      _0x333232 = _0x2458(1327);
      _0x155f2d = _0x333232 + _0x2458(1268);
      _0x53ccd5 = _0x333232 + "RmxvYXQ";
      _0x4ae3bd = [atob(_0x155f2d + _0x2458(1419)), atob(_0x155f2d + _0x2458(1977) + "="), atob(_0x155f2d + _0x2458(955) + "="), atob(_0x53ccd5 + _0x2458(1314)), atob(_0x53ccd5 + _0x2458(1522))];
      DataView[_0x2458(1938)].mc = function (t) {
        return this[_0x4ae3bd[0]](t);
      };
      DataView.prototype.nc = function (t) {
        return this[_0x4ae3bd[1]](t);
      };
      DataView[_0x2458(1938)].oc = function (t) {
        return this[_0x4ae3bd[2]](t);
      };
      DataView.prototype.pc = function (t) {
        return this[_0x4ae3bd[3]](t);
      };
      DataView.prototype.qc = function (t) {
        return this[_0x4ae3bd[4]](t);
      };
      var _0x2d8dbf = function () {
        function e(t) {
          this.rc = t;
          this.sc = false;
          this.tc = 1;
        }
        e[_0x2458(892)] = 0;
        e[_0x2458(1998)] = 1;
        e.MAGNETIC_TYPE = 2;
        e.ZOOM_TYPE = 6;
        e[_0x2458(2026)] = 3;
        e[_0x2458(1706)] = 4;
        e[_0x2458(1667)] = 5;
        return e;
      }();
      var _0x112566 = function () {
        function e() {
          this.uc = [];
          this.vc = {};
          this.wc = null;
          this.xc = _0x1c140f.yc();
        }
        e[_0x2458(1938)].a = function () {
          this.L();
        };
        e[_0x2458(1938)].W = function () {
          return null != this.wc;
        };
        e[_0x2458(1938)].zc = function () {
          return null != this.wc ? this.wc[_0x2458(586)] : -1;
        };
        e[_0x2458(1938)].Ac = function () {
          return this.wc;
        };
        e.prototype.L = function () {
          var i = this;
          $[_0x2458(824)](_0x52c629 + _0x2458(1384), function (t) {
            if (t > i.zc()) {
              i.Bc();
            }
          });
        };
        e[_0x2458(1938)].Bc = function () {
          var i = this;
          $[_0x2458(1723)]({
            type: "POST",
            url: _0x2458(1213),
            data: JSON[_0x2458(1812)]({
              reason: 1
            }),
            contentType: _0x2458(1408),
            success: function (t) {
              theoKzObjects[_0x2458(1628)] = t[_0x2458(1628)];
              delete t[_0x2458(1628)];
              theoKzObjects.pL = t[_0x2458(619)];
              theoKzObjects[_0x2458(1520)] = t[_0x2458(1847)];
              if (t[_0x2458(586)] > i.zc()) {
                i.Cc(t);
              }
              unlockSkinsPrivate(anApp);
            },
            error: function (t, e, i) {
              console.error("Error al realizar la solicitud GET:", i);
            }
          });
        };
        e[_0x2458(1938)].ca = function (e) {
          this.uc[_0x2458(1973)](e);
        };
        e[_0x2458(1938)].Dc = function () {
          return this.xc;
        };
        e[_0x2458(1938)].Ec = function () {
          for (var i = 0; i < this.uc[_0x2458(1543)]; i++) {
            this.uc[i]();
          }
        };
        e.prototype.Fc = function (e, i) {
          if (!(e[_0x2458(586)] <= this.zc())) {
            (function (t, e) {
              for (var n in t) if (t[_0x2458(1525)](n)) {
                e(n, t[n]);
              }
            })(this.vc, function (t, e) {
              var a = i[t];
              if (!(null != a && e.Gc === a.Gc)) {
                print(_0x2458(1967) + t + _0x2458(1851) + e.Gc);
                e.Hc.destroy();
              }
            });
            this.vc = i;
            this.wc = e;
            this.xc = _0x1c140f.Ic(this.wc, this.vc);
            this.Ec();
          }
        };
        e[_0x2458(1938)].Cc = function (e) {
          var n = {};
          var o = [];
          var a = [];
          for (var s in e[_0x2458(1647)]) if (e[_0x2458(1647)].hasOwnProperty(s)) {
            var r = e[_0x2458(1647)][s];
            var c = r.isCustom ? r.relativePath : _0x52c629 + r[_0x2458(1552)];
            var l = r[_0x2458(1132)];
            var h = {
              id: s,
              path: c,
              fileSize: l,
              sha256: r.sha256
            };
            o[_0x2458(1973)](h);
            a.push(h);
            c = r[_0x2458(1552)];
            if (!r[_0x2458(1797)]) {
              c = _0x52c629 + r[_0x2458(1552)];
            }
            try {
              n[s] = new _0x46b922(c, _0x53055c.$b[_0x2458(1054)](r[_0x2458(741)] || c));
            } catch (t) {
              console[_0x2458(923)](c);
            }
          }
          this.Fc(e, n);
        };
        return e;
      }();
      var _0x1c140f = function () {
        function e() {
          this.Jc = null;
          this.Kc = null;
          this.Lc = null;
          this.Mc = null;
          this.Nc = null;
          this.Oc = null;
          this.Pc = null;
          this.Qc = null;
          this.Rc = null;
          this.Sc = null;
          this.Tc = null;
          this.Uc = null;
          this.Vc = null;
          this.Wc = null;
          this.Xc = null;
          this.Yc = null;
        }
        function i(t, e) {
          for (var n in t) if (t[_0x2458(1525)](n)) {
            e(n, t[n]);
          }
        }
        e.yc = function () {
          var e = new _0x1c140f();
          e.Jc = {};
          e.Kc = {
            Zc: null,
            $c: null
          };
          e.Lc = {};
          e.Mc = {
            Zc: null
          };
          e.Nc = {};
          e.Oc = {
            _c: _0x2458(673),
            Zc: [],
            $c: []
          };
          e.Pc = {};
          e.Qc = {
            ad: {},
            bd: e.Oc,
            cd: e.Kc
          };
          e.Rc = {};
          e.Sc = {
            Zc: []
          };
          e.Tc = {};
          e.Uc = {
            Zc: []
          };
          e.Vc = {};
          e.Wc = {
            Zc: []
          };
          e.Xc = {};
          e.Yc = {
            Zc: []
          };
          return e;
        };
        e.Ic = function (t, e) {
          var o = new _0x1c140f();
          var a = {};
          i(t[_0x2458(807)], function (t, e) {
            a[t] = e;
          });
          var s = {};
          i(t[_0x2458(1244)], function (t, i) {
            s[t] = new _0x4cf055(e[i.texture].Hc, i.x, i.y, i.w, i.h, i.px, i.py, i.pw, i.ph);
          });
          o.Nc = {};
          for (var r = 0; r < t[_0x2458(1847)][_0x2458(1543)]; r++) {
            var c = t[_0x2458(1847)][r];
            o.Nc[c.id] = new _0x1c140f[_0x2458(477)]("#" + a[c[_0x2458(596)]], c[_0x2458(1137)][_0x2458(928)](function (t) {
              return s[t];
            }), c[_0x2458(1713)][_0x2458(928)](function (t) {
              return s[t];
            }));
          }
          var l = t[_0x2458(998)];
          o.Oc = new _0x1c140f[_0x2458(477)]("#" + a[l[_0x2458(596)]], l[_0x2458(1137)][_0x2458(928)](function (t) {
            return s[t];
          }), l.glow[_0x2458(928)](function (t) {
            return s[t];
          }));
          o.Rc = {};
          i(t.eyesDict, function (t, e) {
            t = parseInt(t);
            o.Rc[t] = new _0x1c140f[_0x2458(754)](e.base.map(function (t) {
              return s[t[_0x2458(439)]];
            }));
          });
          o.Sc = new _0x1c140f[_0x2458(754)](t[_0x2458(1548)][_0x2458(1137)][_0x2458(928)](function (t) {
            return s[t.region];
          }));
          o.Tc = {};
          i(t[_0x2458(793)], function (t, e) {
            t = parseInt(t);
            o.Tc[t] = new _0x1c140f[_0x2458(754)](e[_0x2458(1137)][_0x2458(928)](function (t) {
              return s[t[_0x2458(439)]];
            }));
          });
          o.Uc = new _0x1c140f[_0x2458(754)](t[_0x2458(1449)][_0x2458(1137)][_0x2458(928)](function (t) {
            return s[t[_0x2458(439)]];
          }));
          o.Vc = {};
          i(t[_0x2458(1290)], function (t, e) {
            t = parseInt(t);
            o.Vc[t] = new _0x1c140f[_0x2458(754)](e[_0x2458(1137)].map(function (t) {
              return s[t[_0x2458(439)]];
            }));
          });
          o.Wc = new _0x1c140f[_0x2458(754)](t.glassesUnknown.base[_0x2458(928)](function (t) {
            return s[t.region];
          }));
          o.Xc = {};
          i(t[_0x2458(524)], function (t, e) {
            t = parseInt(t);
            o.Xc[t] = new _0x1c140f[_0x2458(754)](e[_0x2458(1137)][_0x2458(928)](function (t) {
              return s[t[_0x2458(439)]];
            }));
          });
          o.Yc = new _0x1c140f.WearSkinData(t[_0x2458(1707)].base.map(function (t) {
            return s[t[_0x2458(439)]];
          }));
          o.Jc = {};
          i(t[_0x2458(695)], function (t, e) {
            t = parseInt(t);
            o.Jc[t] = new _0x1c140f[_0x2458(1039)](s[e[_0x2458(1137)]], s[e.glow]);
          });
          var h = t[_0x2458(1939)];
          o.Kc = new _0x1c140f[_0x2458(1039)](s[h[_0x2458(1137)]], s[h[_0x2458(1713)]]);
          o.Lc = {};
          i(t[_0x2458(889)], function (t, e) {
            t = parseInt(t);
            o.Lc[t] = new _0x1c140f.AbilitySkinData(s[e[_0x2458(1137)]]);
          });
          var d = t[_0x2458(1745)];
          o.Mc = new _0x1c140f[_0x2458(1037)](s[d[_0x2458(1137)]]);
          o.Pc = {};
          i(t.teamDict, function (t, e) {
            t = parseInt(t);
            o.Pc[t] = new _0x1c140f[_0x2458(1210)](e[_0x2458(1582)], new _0x1c140f[_0x2458(477)]("#" + a[e[_0x2458(1823)][_0x2458(596)]], [], e[_0x2458(1823)][_0x2458(1713)].map(function (t) {
              return s[t];
            })), new _0x1c140f.PortionSkinData([], s[e[_0x2458(1813)][_0x2458(1713)]]));
          });
          o.Qc = new _0x1c140f[_0x2458(1210)]({}, o.Oc, o.Kc);
          return o;
        };
        e[_0x2458(1938)].dd = function (e) {
          var n = this.Nc[e];
          if (n) {
            if (Array[_0x2458(999)](n.$c)) {
              n.$c[_0x2458(919)](t => optimizarTextura(t));
            }
            if (Array[_0x2458(999)](n.Zc)) {
              n.Zc.forEach(t => optimizarTextura(t));
            }
          }
          return n || this.Oc;
        };
        e[_0x2458(1938)].ed = function (t) {
          return this.Pc[t] || this.Qc;
        };
        e[_0x2458(1938)].fd = function (t) {
          return this.Rc[t] || this.Sc;
        };
        e[_0x2458(1938)].gd = function (t) {
          return this.Tc[t] || this.Uc;
        };
        e.prototype.hd = function (t) {
          return this.Vc[t] || this.Wc;
        };
        e[_0x2458(1938)].jd = function (t) {
          return this.Xc[t] || this.Yc;
        };
        e[_0x2458(1938)].kd = function (t) {
          var e = this.Jc[t];
          if (e) {
            if (e.$c) {
              optimizarTextura(e.$c);
            }
            if (e.Zc) {
              optimizarTextura(e.Zc);
            }
          }
          return e || this.Kc;
        };
        e[_0x2458(1938)].ld = function (t) {
          return this.Lc[t] || this.Mc;
        };
        e.TeamSkinData = function (t, e, i) {
          this.ad = t;
          this.bd = e;
          this.cd = i;
        };
        e[_0x2458(477)] = function (t, e, i) {
          this._c = t;
          this.Zc = e;
          this.$c = i;
        };
        e[_0x2458(754)] = function (t) {
          this.Zc = t;
        };
        e[_0x2458(1039)] = function (t, e) {
          this.Zc = t;
          this.$c = e;
        };
        e[_0x2458(1037)] = function (t) {
          this.Zc = t;
        };
        return e;
      }();
      var _0xdbe872 = function () {
        function e() {
          this.md = _0xdbe872[_0x2458(1856)].ua;
          this.nd = false;
          this.od = false;
          this.pd = null;
          this.qd = null;
        }
        e[_0x2458(1938)].a = function () {};
        e[_0x2458(1938)].rd = function (t) {
          this.od = t;
        };
        e.prototype.G = function (t) {
          this.md = t;
          this.sd();
        };
        e[_0x2458(1938)].td = function (t) {
          this.nd = t;
          this.sd();
        };
        e.prototype.sd = function () {};
        e[_0x2458(1938)].ud = function (e, i) {
          if (!(window[_0x2458(2086)] = _0x1ff066).p.W) {
            return null;
          }
          var o = e[i];
          return null == o || 0 == o.length ? null : o[Math[_0x2458(455)](Math[_0x2458(2002)]() * o[_0x2458(1543)])][_0x2458(1844)]();
        };
        e[_0x2458(1938)].vd = function (e, i, n) {
          if (this.od && !(n <= 0)) {
            var a = this.ud(e, i);
            if (null != a) {
              a[_0x2458(1281)] = Math[_0x2458(1940)](1, n);
              a.play();
            }
          }
        };
        e[_0x2458(1938)].wd = function (t, e) {
          if (this.md.xd) {
            this.vd(app.q.yd, t, e);
          }
        };
        e[_0x2458(1938)].zd = function (t, e) {
          if (this.md.Ad) {
            this.vd(app.q.Bd, t, e);
          }
        };
        e[_0x2458(1938)].Cd = function () {};
        e[_0x2458(1938)].Dd = function () {};
        e[_0x2458(1938)].Ed = function () {};
        e.prototype.Fd = function () {};
        e.prototype.Gd = function () {};
        e[_0x2458(1938)].Hd = function () {};
        e[_0x2458(1938)].Id = function (t, e, i) {};
        e[_0x2458(1938)].Jd = function (t) {};
        e[_0x2458(1938)].Kd = function (t) {};
        e[_0x2458(1938)].Ld = function (t) {};
        e[_0x2458(1938)].Md = function (t) {};
        e.prototype.Nd = function (t) {};
        e[_0x2458(1938)].Od = function (t) {};
        e[_0x2458(1938)].Pd = function (t) {};
        e.prototype.Qd = function (t) {};
        e[_0x2458(1938)].Rd = function (t) {};
        e.prototype.Sd = function (t) {};
        e[_0x2458(1938)].Td = function (t) {};
        e[_0x2458(1938)].Ud = function (t) {};
        e.prototype.Vd = function (t) {};
        e[_0x2458(1938)].Wd = function (t) {};
        e[_0x2458(1938)].Xd = function (t, e) {};
        e[_0x2458(1938)].Yd = function (t) {};
        e.prototype.Zd = function (t, e, i) {};
        (function () {
          function n(t) {
            this.$d = new i(t, .5);
            this.$d._d[_0x2458(1045)] = true;
            this.ae = false;
          }
          n.prototype.be = function (t) {
            if (t) {
              this.b();
            } else {
              this.ce();
            }
          };
          n[_0x2458(1938)].b = function () {
            if (!this.ae) {
              this.ae = true;
              this.$d.de = 0;
              this.$d.ee(1500, 100);
            }
          };
          n.prototype.ce = function () {
            if (this.ae) {
              this.ae = false;
              this.$d.fe(1500, 100);
            }
          };
        })();
        (function () {
          function n(t) {
            this.ge = t[_0x2458(928)](function (t) {
              return new i(t, .4);
            });
            o(this.ge, 0, this.ge.length);
            this.he = null;
            this.ie = 0;
            this.ae = false;
            this.je = 1e4;
          }
          function o(t, e, i) {
            for (var o = i - 1; o > e; o--) {
              var a = e + Math.floor(Math[_0x2458(2002)]() * (o - e + 1));
              var s = t[o];
              t[o] = t[a];
              t[a] = s;
            }
          }
          n[_0x2458(1938)].be = function (t) {
            if (t) {
              this.b();
            } else {
              this.ce();
            }
          };
          n[_0x2458(1938)].b = function () {
            if (!this.ae) {
              this.ae = true;
              this.ke(1500);
            }
          };
          n.prototype.ce = function () {
            if (this.ae) {
              this.ae = false;
              if (null != this.he) {
                this.he.fe(800, 50);
              }
            }
          };
          n[_0x2458(1938)].ke = function (t) {
            if (this.ae) {
              if (null == this.he) {
                this.he = this.le();
              }
              if (this.he._d[_0x2458(1902)] + this.je / 1e3 > this.he._d[_0x2458(1390)]) {
                this.he = this.le();
                this.he._d[_0x2458(1902)] = 0;
              }
              console.log(_0x2458(573) + this.he._d[_0x2458(1260)] + _0x2458(491) + (1e3 * (this.he._d[_0x2458(1390)] - this.he._d[_0x2458(1902)]) - this.je));
              this.he.de = 0;
              this.he.ee(t, 100);
              var n = 1e3 * (this.he._d.duration - this.he._d.currentTime) - this.je;
              var o = this;
              var a = setTimeout(function () {
                if (o.ae && a == o.ie) {
                  o.he.fe(o.je, 100);
                  o.he = o.le();
                  o.he._d[_0x2458(1902)] = 0;
                  o.ke(o.je);
                }
              }, n);
              this.ie = a;
            }
          };
          n[_0x2458(1938)].le = function () {
            var i = this.ge[0];
            var n = Math[_0x2458(1478)](1, this.ge[_0x2458(1543)] / 2);
            o(this.ge, n, this.ge[_0x2458(1543)]);
            this.ge[_0x2458(1973)](this.ge[_0x2458(2072)]());
            return i;
          };
        })();
        var i = function () {
          function i(t, e) {
            this._d = t;
            this.me = e;
            this.de = 0;
            t[_0x2458(1281)] = 0;
            this.ne = 0;
            this.oe = false;
          }
          i.prototype.ee = function (t, e) {
            console.log(_0x2458(672) + this._d[_0x2458(1260)]);
            this.pe(true, t, e);
          };
          i[_0x2458(1938)].fe = function (t, i) {
            console[_0x2458(923)](_0x2458(742) + this._d[_0x2458(1260)]);
            this.pe(false, t, i);
          };
          i.prototype.pe = function (t, i, n) {
            if (this.oe) {
              clearInterval(this.ne);
            }
            var a = this;
            var s = 1 / (i / n);
            var r = setInterval(function () {
              if (a.oe && r != a.ne) {
                clearInterval(r);
              } else if (t) {
                a.de = Math.min(1, a.de + s);
                a._d.volume = a.de * a.me;
                if (a.de >= 1) {
                  a.oe = false;
                  clearInterval(r);
                }
              } else {
                a.de = Math[_0x2458(1478)](0, a.de - s);
                a._d[_0x2458(1281)] = a.de * a.me;
                if (a.de <= 0) {
                  a._d[_0x2458(675)]();
                  a.oe = false;
                  clearInterval(r);
                }
              }
            }, n);
            this.oe = true;
            this.ne = r;
            this._d[_0x2458(1056)]();
          };
          return i;
        }();
        e[_0x2458(1856)] = {
          ua: {
            qe: false,
            re: false,
            Ad: true,
            xd: false
          },
          F: {
            qe: false,
            re: true,
            Ad: true,
            xd: false
          },
          H: {
            qe: true,
            re: false,
            Ad: false,
            xd: true
          },
          Ea: {
            qe: false,
            re: false,
            Ad: true,
            xd: false
          },
          qa: {
            qe: false,
            re: false,
            Ad: false,
            xd: false
          }
        };
        return e;
      }();
      var _0x3606ae = function () {
        function e(t) {
          this.se = t;
          this.te = t[_0x2458(824)]()[0];
          this.ue = new _0x53055c.ac({
            view: this.te,
            backgroundColor: 0,
            antialias: true
          });
          this.ve = new _0x53055c.Zb();
          this.ve[_0x2458(1126)] = true;
          this.we = [];
          this.xe = [];
          this.ye = [];
          this.a();
        }
        var s = [{
          ze: 0 + Math.random(_0x1d3753 - 0),
          Ae: 0 + Math.random(_0x1d3753 - 0),
          Be: .1 + Math.random(0.4),
          Ce: 1,
          De: 2,
          Ee: 16737962
        }, {
          ze: 0 + Math.random(_0x1d3753 - 0),
          Ae: 0 + Math.random(_0x1d3753 - 0),
          Be: .1 + Math.random(0.4),
          Ce: 1.5,
          De: 1.5,
          Ee: 16746632
        }, {
          ze: 0 + Math.random(_0x1d3753 - 0),
          Ae: 0 + Math.random(_0x1d3753 - 0),
          Be: .1 + Math.random(0.4),
          Ce: 2,
          De: 1,
          Ee: 16755302
        }, {
          ze: 0 + Math.random(_0x1d3753 - 0),
          Ae: 0 + Math.random(_0x1d3753 - 0),
          Be: .1 + Math.random(0.4),
          Ce: 3,
          De: 2,
          Ee: 11206502
        }, {
          ze: 0 + Math.random(_0x1d3753 - 0),
          Ae: 0 + Math.random(_0x1d3753 - 0),
          Be: .1 + Math.random(0.4),
          Ce: 2.5,
          De: 2.5,
          Ee: 8978312
        }, {
          ze: 0 + Math.random(_0x1d3753 - 0),
          Ae: 0 + Math.random(_0x1d3753 - 0),
          Be: .1 + Math.random(0.4),
          Ce: 2,
          De: 3,
          Ee: 6750122
        }, {
          ze: 0 + Math.random(_0x1d3753 - 0),
          Ae: 0 + Math.random(_0x1d3753 - 0),
          Be: .1 + Math.random(0.4),
          Ce: 5,
          De: 4,
          Ee: 6728447
        }, {
          ze: 0 + Math.random(_0x1d3753 - 0),
          Ae: 0 + Math.random(_0x1d3753 - 0),
          Be: .1 + Math.random(0.4),
          Ce: 4.5,
          De: 4.5,
          Ee: 8947967
        }, {
          ze: 0 + Math.random(_0x1d3753 - 0),
          Ae: 0 + Math.random(_0x1d3753 - 0),
          Be: .1 + Math.random(0.4),
          Ce: 4,
          De: 5,
          Ee: 11167487
        }];
        e[_0x2458(1938)].a = function () {
          var n = window[_0x2458(2086)] = _0x1ff066;
          this.ue[_0x2458(1663)] = 0;
          this.we = new Array(s[_0x2458(1543)]);
          for (var o = 0; o < this.we[_0x2458(1543)]; o++) {
            this.we[o] = new _0x53055c.ec();
            this.we[o][_0x2458(1392)] = n.q.Fe;
            this.we[o].anchor[_0x2458(1756)](.5);
            this.we[o][_0x2458(941)] = 1;
          }
          this.xe = new Array(n.q.Ge[_0x2458(1543)]);
          for (var a = 0; a < this.xe.length; a++) {
            this.xe[a] = new _0x53055c.ec();
            this.xe[a][_0x2458(1392)] = n.q.Ge[a];
            this.xe[a].anchor.set(.5);
            this.xe[a][_0x2458(941)] = 2;
            this.ve.addChild(this.xe[a]);
          }
          this.ye = new Array(this.xe.length);
          for (var r = 0; r < this.ye[_0x2458(1543)]; r++) {
            this.ye[r] = {
              He: Math.random(),
              Ie: Math[_0x2458(2002)](),
              Je: Math[_0x2458(2002)](),
              Ke: Math[_0x2458(2002)]()
            };
          }
          this.Ra();
        };
        e.sc = false;
        e.Le = function (t) {
          e.sc = t;
        };
        e[_0x2458(1938)].Ra = function () {
          var i = window[_0x2458(1635)] ? window.devicePixelRatio : 1;
          var n = this.se[_0x2458(1350)]();
          var o = this.se.height();
          this.ue[_0x2458(2023)](n, o);
          this.ue[_0x2458(953)] = i;
          this.te.width = i * n;
          this.te[_0x2458(2052)] = i * o;
          var a = .8 * Math[_0x2458(1478)](n, o);
          for (var s = 0; s < this.we[_0x2458(1543)]; s++) {
            this.we[s][_0x2458(1350)] = a;
            this.we[s][_0x2458(2052)] = a;
          }
        };
        e[_0x2458(1938)].Pa = function (i, n) {
          if (e.sc) {
            var c = i / 1e3;
            var l = n / 1e3;
            var h = this.se[_0x2458(1350)]();
            var d = this.se[_0x2458(2052)]();
            for (var x = 0; x < this.we.length; x++) {
              var u = s[x % s.length];
              var _ = this.we[x];
              var f = u.Ce * (.08 * c) + u.Ae >= 0 ? Math[_0x2458(1651)]((u.Ce * (.08 * c) + u.Ae) % _0x1d3753) : Math[_0x2458(1651)]((u.Ce * (.08 * c) + u.Ae) % _0x1d3753 + _0x1d3753);
              var b = u.De * (.08 * c) >= 0 ? Math[_0x2458(620)](u.De * (.08 * c) % _0x1d3753) : Math[_0x2458(620)](u.De * (.08 * c) % _0x1d3753 + _0x1d3753);
              var p = .2 + .2 * (u.Ae + u.Be * c >= 0 ? Math[_0x2458(1651)]((u.Ae + u.Be * c) % _0x1d3753) : Math[_0x2458(1651)]((u.Ae + u.Be * c) % _0x1d3753 + _0x1d3753));
              _[_0x2458(2006)] = u.Ee;
              _[_0x2458(1240)] = p;
              _[_0x2458(798)][_0x2458(1756)](h * (.2 + .5 * (f + 1) * .6), d * (.1 + .5 * (b + 1) * .8));
            }
            var v = .05 * Math[_0x2458(1478)](h, d);
            for (var m = 0; m < this.xe[_0x2458(1543)]; m++) {
              var g = this.ye[m];
              var w = this.xe[m];
              var k = _0x1d3753 * m / this.xe.length + g.He;
              g.Ke += g.Ie * l;
              if (g.Ke > 1.3) {
                g.He = Math[_0x2458(2002)]() * _0x1d3753;
                g.Ie = .66 * (.09 + .07 * Math[_0x2458(2002)]());
                g.Je = .15 + .7 * Math.random();
                g.Ke = -.3;
              }
              var y = g.Je + .03 * Math[_0x2458(620)](6 * Math[_0x2458(620)](k + .48 * c));
              var j = g.Ke;
              var z = Math[_0x2458(620)](Math.PI * j) > 1 ? 1 : Math[_0x2458(620)](Math.PI * j) < .1 ? .1 : Number.isFinite(Math[_0x2458(620)](Math.PI * j)) ? Math[_0x2458(620)](Math.PI * j) : 0.55;
              var S = .5 * (.4 + .5 * (1 + Math.sin(k + .12 * c)) * 1.2);
              var I = k + 2 * g.Ie * c;
              w[_0x2458(1240)] = z;
              w[_0x2458(798)].set(h * y, d * j);
              w[_0x2458(1382)] = I;
              var M = w.texture[_0x2458(1350)] / w[_0x2458(1392)][_0x2458(2052)];
              w.width = S * v;
              w[_0x2458(2052)] = S * v * M;
            }
            this.ue[_0x2458(590)](this.ve, null, true);
          }
        };
        return e;
      }();
      var _0x166161 = function () {
        function e() {}
        e.Na = _0x2458(698);
        e.ya = _0x2458(1345);
        e.Me = _0x2458(1949);
        e.Ne = _0x2458(1192);
        e.Oe = _0x2458(691);
        e.va = _0x2458(1492);
        e.Aa = _0x2458(1908);
        e.Ba = "skin";
        e.d = _0x2458(1369);
        e.La = "shared";
        return e;
      }();
      _0x169368 = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
      var _0x796b = {
        Oa: function (t, e) {
          return function (t, e, i) {
            var n = false;
            var o = i[_0x2458(1543)];
            var a = 0;
            for (var s = o - 1; a < o; s = a++) {
              if (i[a][1] > e != i[s][1] > e && t < (i[s][0] - i[a][0]) * (e - i[a][1]) / (i[s][1] - i[a][1]) + i[a][0]) {
                n = !n;
              }
            }
            return n;
          }(e, t, _0x169368);
        }
      };
      var _0x3ed4e2 = function () {
        function e(t, e) {
          var n = undefined;
          var a = undefined;
          if (e) {
            n = 1.3;
            a = i(.93, .34, .25);
          } else {
            n = 1.1;
            a = i(.96, .82, 0);
          }
          return new o(t, a, true, .5, n, .5, .7);
        }
        function i(t, e, i) {
          return ((255 * t & 255) << 16) + ((255 * e & 255) << 8) + (255 * i & 255);
        }
        var n = _0x22ee20(_0x53055c.Zb, function () {
          _0x53055c.Zb[_0x2458(1459)](this);
          this.Pe = [];
          this.Qe = 0;
        });
        n.prototype.Re = function (t) {
          this.Qe += t;
          if (this.Qe >= 1) {
            var n = Math.floor(this.Qe);
            this.Qe -= n;
            var a = function (t) {
              var e;
              e = t > 0 ? "+" + Math[_0x2458(455)](t) : t < 0 ? "-" + Math[_0x2458(455)](t) : "0";
              var a = Math[_0x2458(1940)](1.5, .5 + t / 600);
              var s = undefined;
              if (t < 1) {
                s = _0x2458(1380);
              } else if (t < 30) {
                var r = (t - 1) / 29;
                s = i(1 * (1 - r) + .96 * r, 1 * (1 - r) + .82 * r, 1 * (1 - r) + 0 * r);
              } else if (t < 300) {
                var c = (t - 30) / 270;
                s = i(.96 * (1 - c) + .93 * c, .82 * (1 - c) + .34 * c, 0 * (1 - c) + .25 * c);
              } else if (t < 700) {
                var l = (t - 300) / 400;
                s = i(.93 * (1 - l) + .98 * l, .34 * (1 - l) + 0 * l, .25 * (1 - l) + .98 * l);
              } else {
                s = i(.98, 0, .98);
              }
              var h = Math[_0x2458(2002)]();
              var d = 1 + .5 * Math[_0x2458(2002)]();
              return new o(e, s, true, .5, a, h, d);
            }(n);
            this[_0x2458(542)](a);
            this.Pe[_0x2458(1973)](a);
          }
        };
        n[_0x2458(1938)].Se = function (i) {
          if (i) {
            zw_hscount += 1;
            zwormData.hs = zw_hscount;
            if (zw_hscount % 10) {
              if (soundEnabled) {
                zw_hssound[_0x2458(1056)]();
              }
            } else if (soundEnabled) {
              zw_laughsound[_0x2458(1056)]();
            }
            var o = e(zwormData[_0x2458(1908)][_0x2458(914)](0, 16) + "-☠️-" + zwormData.enemyNameHs[_0x2458(914)](0, 16), true);
            this[_0x2458(542)](o);
            this.Pe[_0x2458(1973)](o);
          } else {
            zw_killcount += 1;
            o = e(window[_0x2458(782)][_0x2458(847)] + "✨", false);
            this[_0x2458(542)](o);
            this.Pe.push(o);
          }
        };
        n[_0x2458(1938)].Te = function (e, i) {
          var o = (window[_0x2458(2086)] = _0x1ff066).s.H.wb;
          var a = o.ue.width / o.ue[_0x2458(953)];
          var s = o.ue[_0x2458(2052)] / o.ue[_0x2458(953)];
          for (var r = 0; r < this.Pe[_0x2458(1543)];) {
            var c = this.Pe[r];
            c.Ue = c.Ue + i / 2e3 * c.Ve;
            c.We = c.We + i / 2e3 * c.Xe;
            c[_0x2458(1240)] = .5 * Math[_0x2458(620)](Math.PI * c.We);
            c[_0x2458(2071)].set(c.Ue);
            c.position.x = a * (.25 + .5 * c.Ye);
            c[_0x2458(798)].y = c.Ze ? s * (1 - .5 * (1 + c.We)) : s * (1 - .5 * (0 + c.We));
            if (c.We > 1) {
              _0x31c7b2(c);
              this.Pe.splice(r, 1);
              r--;
            }
            r++;
          }
        };
        var o = _0x22ee20(_0x53055c.fc, function (t, e, i, n, o, a, s) {
          _0x53055c.fc[_0x2458(1459)](this, t, {
            fill: e,
            fontFamily: fonts[currentFontIndex],
            fontSize: 36
          });
          this[_0x2458(1101)][_0x2458(1756)](.5);
          this.Ze = i;
          this.Ue = n;
          this.Ve = o;
          this.Ye = a;
          this.We = 0;
          this.Xe = s;
        });
        return n;
      }();
      var _0x46b922 = function (t, e) {
        this.Gc = t;
        this.Hc = e;
      };
      var _0x38582a = function () {
        function t() {
          this.af = 0;
          this.bf = 0;
          this.ub = 500;
          this.cf = 4e3;
          this.df = 7e3;
        }
        t.TEAM_DEFAULT = 0;
        t.prototype.ef = function () {
          return 1.02 * this.ub;
        };
        return t;
      }();
      var _0x2daed0 = function () {
        function e(t) {
          this.se = t;
          this.te = t[_0x2458(824)]()[0];
          this.ue = new _0x53055c.ac({
            view: this.te,
            backgroundColor: 0,
            antialias: true
          });
          this.ve = new _0x53055c.Zb();
          this.ve[_0x2458(1126)] = true;
          this.ve.interactive = true;
          this.ve[_0x2458(948)] = true;
          this.ff = Math.floor(360 * Math.random());
          this.gf = 0;
          this.hf = 0;
          this.if = 15;
          this.jf = .5;
          this.kf = 0;
          this.lf = new _0x1f9450();
          this.mf = new _0x53055c.bc();
          this.nf = new _0x53055c.Zb();
          this.pf = new _0x53055c.Zb();
          this.pf[_0x2458(1126)] = true;
          this.qf = new _0x53055c.Zb();
          this.rf = new _0x53055c.Zb();
          this.rf[_0x2458(1126)] = true;
          this.sf = new _0x53055c.Zb();
          this.tf = new n();
          this.uf = new o();
          this.vf = new a();
          this.wf = new _0x3ed4e2();
          this.xf = new _0x53055c.ec();
          this.yf = {
            x: 0,
            y: 0
          };
          this.a();
        }
        e.prototype.a = function () {
          zw_joysticks = [];
          zw_joystick = -1;
          (zw_servertext = new _0x53055c.fc("", {
            fontFamily: fonts[currentFontIndex],
            fontSize: 12,
            fill: _0x2458(1294),
            align: _0x2458(1086)
          })).x = 25;
          (zw_serverping = new _0x53055c.fc("", {
            fontFamily: fonts[currentFontIndex],
            fontSize: 12,
            fill: _0x2458(1294),
            align: "center"
          })).x = 85;
          (zw_serverfps = new _0x53055c.fc("", {
            fontFamily: fonts[currentFontIndex],
            fontSize: 12,
            fill: _0x2458(1294),
            align: _0x2458(1086)
          })).x = 130;
          if (zw_mobilecheck()) {
            zw_joysticks[0] = new Joystick({
              onChange: e => {
                e[_0x2458(674)] = e.angle * (Math.PI / 180);
                anApp.s.H.sk = e[_0x2458(674)] <= Math.PI ? -1 * e[_0x2458(674)] : Math.PI - (e[_0x2458(674)] - Math.PI);
              }
            });
            zw_joysticks[0][_0x2458(987)] = false;
            zw_joysticks[1] = new Joystick({
              outer: _0x53055c.ec[_0x2458(1054)](_0x2458(718)),
              inner: _0x53055c.ec[_0x2458(1054)](_0x2458(1081)),
              onChange: e => {
                e[_0x2458(674)] = e[_0x2458(1052)] * (Math.PI / 180);
                anApp.s.H.sk = e[_0x2458(674)] <= Math.PI ? -1 * e.aradian : Math.PI - (e.aradian - Math.PI);
              }
            });
            zw_joysticks[1][_0x2458(987)] = false;
            zw_joysticks[2] = new Joystick({
              outer: _0x53055c.ec.from(_0x2458(1778)),
              inner: _0x53055c.ec[_0x2458(1054)](_0x2458(1123)),
              onChange: e => {
                e[_0x2458(674)] = e[_0x2458(1052)] * (Math.PI / 180);
                anApp.s.H.sk = e[_0x2458(674)] <= Math.PI ? -1 * e[_0x2458(674)] : Math.PI - (e[_0x2458(674)] - Math.PI);
              }
            });
            zw_joysticks[2].visible = false;
            for (let t = 0; t < zw_joysticks.length; t++) {
              this.rf.addChild(zw_joysticks[t]);
            }
          }
          (zw_zoomtext = new _0x53055c.fc("", {
            align: _0x2458(1086),
            fill: _0x2458(655),
            fontSize: 12,
            lineJoin: _0x2458(872),
            whiteSpace: _0x2458(1511),
            wordWrap: true,
            fontWeight: _0x2458(444)
          })).x = 100;
          zw_zoomtext.y = 90;
          this.rf[_0x2458(542)](zw_zoomtext);
          this.ue.backgroundColor = 0;
          this.lf.zf[_0x2458(941)] = 10;
          this.ve[_0x2458(542)](this.lf.zf);
          (zw_Background = new _0x53055c.bc()).zIndex = 20;
          this.ve[_0x2458(542)](zw_Background);
          (ctxHeadshotLine = new _0x53055c.bc())[_0x2458(941)] = 20;
          this.ve[_0x2458(542)](ctxHeadshotLine);
          this.mf.zIndex = 20;
          this.ve[_0x2458(542)](this.mf);
          this.nf[_0x2458(941)] = 5e3;
          this.ve[_0x2458(542)](this.nf);
          this.pf[_0x2458(941)] = 5100;
          this.ve[_0x2458(542)](this.pf);
          this.qf[_0x2458(941)] = 1e4;
          this.ve[_0x2458(542)](this.qf);
          this.xf[_0x2458(1392)] = (window[_0x2458(2086)] = _0x1ff066).q.Af;
          this.xf.anchor[_0x2458(1756)](.5);
          this.xf[_0x2458(941)] = 1;
          this.rf.addChild(this.xf);
          this.sf.alpha = .6;
          this.sf[_0x2458(941)] = 2;
          this.rf[_0x2458(542)](this.sf);
          this.wf[_0x2458(941)] = 3;
          this.rf[_0x2458(542)](this.wf);
          this.tf[_0x2458(1240)] = .8;
          this.tf[_0x2458(941)] = 4;
          this.rf[_0x2458(542)](this.tf);
          this.uf[_0x2458(941)] = 5;
          this.rf[_0x2458(542)](this.uf);
          this.vf[_0x2458(941)] = 6;
          this.rf[_0x2458(542)](this.vf);
          this.Ra();
        };
        e.prototype.Ra = function () {
          var e = window[_0x2458(1635)] ? window[_0x2458(1635)] : 1;
          var i = this.se[_0x2458(1350)]();
          var n = this.se[_0x2458(2052)]();
          this.ue[_0x2458(2023)](i, n);
          this.ue[_0x2458(953)] = e;
          this.te.width = e * i;
          this.te.height = e * n;
          this.jf = Math[_0x2458(1940)](Math.min(i, n), .625 * Math[_0x2458(1478)](i, n));
          this.xf.position.x = i / 2;
          this.xf[_0x2458(798)].y = n / 2;
          this.xf[_0x2458(1350)] = i;
          this.xf[_0x2458(2052)] = n;
          this.tf[_0x2458(798)].x = 60;
          this.tf[_0x2458(798)].y = 60;
          this.uf.position.x = 110;
          this.uf[_0x2458(798)].y = 10;
          this.vf[_0x2458(798)].x = i - 225;
          this.vf[_0x2458(798)].y = 1;
          this.tf.addChild(ctx[_0x2458(1594)]);
          this.tf[_0x2458(542)](ctx[_0x2458(2084)]);
          if (theoKzObjects[_0x2458(1299)]) {
            this.tf[_0x2458(542)](zw_TopHS_RecordHs);
          } else {
            _0x31c7b2(zw_TopHS_RecordHs);
          }
          if (theoKzObjects[_0x2458(447)]) {
            this.tf.addChild(ctx[_0x2458(1365)]);
          } else {
            _0x31c7b2(ctx[_0x2458(1365)]);
          }
        };
        e.prototype.Te = function (t, e) {
          var n = window[_0x2458(2086)] = _0x1ff066;
          this.if = 15;
          this.nf[_0x2458(1166)]();
          this.pf[_0x2458(1166)]();
          this.qf[_0x2458(1166)]();
          this.sf[_0x2458(1166)]();
          this.lf.Bf(t.af == 0 ? n.q.Cf : n.q.Df);
          if (theoKzObjects && false || false) {
            setSectorsGame();
          } else {
            zw_Background[_0x2458(1166)]();
            zw_Background[_0x2458(469)]();
            zw_Background[_0x2458(713)](1, 16711680, 1);
            zw_Background.drawCircle(0, 0, 500);
            zw_Background[_0x2458(1919)]();
          }
          this.vf.Ef = e;
          this.sf.visible = e;
        };
        e[_0x2458(1938)].Pa = function (e, i) {
          if (this.ue[_0x2458(1350)] <= 5) {
            return;
          }
          const o = (window[_0x2458(2086)] = _0x1ff066).o;
          const a = o.N;
          const s = this.ue[_0x2458(1350)] / this.ue.resolution;
          const r = this.ue.height / this.ue[_0x2458(953)];
          const c = this.tf;
          this.if = o.jb > this.if ? Math[_0x2458(1940)](o.jb, this.if + i * .002) : Math[_0x2458(1478)](o.jb, this.if - i * .002);
          const l = this.if * zw_multiplier;
          const h = this.jf / l;
          const d = a.Ff[_0x2d8dbf[_0x2458(1504)]];
          const x = d && d.sc;
          this.kf = this.kf + i / 1e3 * (.1 * (x ? 1 : 0) - this.kf) > 1 ? 1 : this.kf + i / 1e3 * (.1 * (x ? 1 : 0) - this.kf) < 0 ? 0 : Number.isFinite(this.kf + i / 1e3 * (.1 * (x ? 1 : 0) - this.kf)) ? this.kf + i / 1e3 * (.1 * (x ? 1 : 0) - this.kf) : 0.5;
          this.xf[_0x2458(1240)] = this.kf;
          this.ff = (this.ff + .01 * i) % 360;
          this.gf = Math[_0x2458(620)](e / 1200 * TWO_PI);
          const u = a.Gf();
          const _ = this.yf;
          _.x = u.x + (_.x - u.x) * Math[_0x2458(1183)](1 - theoKzObjects.smoothCamera, i / 33.333);
          _.y = u.y + (_.y - u.y) * Math[_0x2458(1183)](0.5, i / 33.333);
          this.ve[_0x2458(2071)][_0x2458(1756)](h);
          this.ve[_0x2458(798)][_0x2458(1756)](s / 2 - _.x * h, r / 2 - _.y * h);
          const b = s / (2 * h);
          const p = r / (2 * h);
          o.yb(_.x - 1.3 * b, _.x + 1.3 * b, _.y - 1.3 * p, _.y + 1.3 * p);
          this.lf.Te(_.x, _.y, 2 * b, 2 * p);
          const v = o.fb.ub;
          if (theoKzObjects[_0x2458(1047)]) {
            window.coords.playerX = c.Jf.position.x;
            window[_0x2458(1825)].playerY = c.Jf[_0x2458(798)].y;
          }
          zwormData[_0x2458(1941)] = c.Jf[_0x2458(798)].x;
          zwormData.playerY = c.Jf[_0x2458(798)].y;
          ctxHeadshotLine[_0x2458(469)]();
          if (theoKzObjects[_0x2458(2080)]) {
            ctxHeadshotLine[_0x2458(713)](.1, "0x" + theoObjects.laserColor, 1);
            ctxHeadshotLine[_0x2458(1108)](u.x, u.y);
            ctxHeadshotLine[_0x2458(1117)](0, 0);
          }
          const m = Math[_0x2458(1041)](u.x, u.y);
          if (m > v - 10) {
            this.hf = 1 + (m - v) / 10 > 1 ? 1 : 1 + (m - v) / 10 < 0 ? 0 : Number.isFinite(1 + (m - v) / 10) ? 1 + (m - v) / 10 : 0.5;
            const t = this.ff * TWO_PI / 360;
            const e = Math[_0x2458(1651)](t);
            const i = Math[_0x2458(620)](t);
            const o = e * (1 - this.hf) + 1 * this.hf;
            const a = i * (1 - this.hf);
            const s = (Math[_0x2458(828)](a, o) + TWO_PI) % TWO_PI * (360 / TWO_PI);
            const r = this.hf * (.5 + .5 * this.gf);
            const c = _0x10f410(Math[_0x2458(455)](s), 1, .75 - .25 * this.hf);
            this.lf.Hf(c[0], c[1], c[2], .1 + .2 * r);
          } else {
            this.hf = 0;
            const t = _0x10f410(Math[_0x2458(455)](this.ff), 1, .75);
            this.lf.Hf(t[0], t[1], t[2], .1);
          }
          const g = this.sf[_0x2458(1157)];
          const w = g[_0x2458(1543)];
          for (let t = 0; t < w; t++) {
            const e = g[t];
            if (e.If) {
              e[_0x2458(798)].x = s / 2 - (_.x - e.If.x) * h;
              e[_0x2458(798)].y = r / 2 - (_.y - e.If.y) * h;
            }
          }
          c.Jf[_0x2458(798)].x = u.x / v * c.Kf;
          c.Jf[_0x2458(798)].y = u.y / v * c.Kf;
          c.WLp[_0x2458(792)] = parseInt(zw_hscount);
          c.WLp[_0x2458(798)].x = -25 - c[_0x2458(554)][_0x2458(1350)] / 2;
          c[_0x2458(1112)][_0x2458(792)] = parseInt(zw_killcount);
          c.MLb[_0x2458(798)].x = 25 - c[_0x2458(1112)].width / 2;
          if (theoObjects.hsTextColor !== lastHsTextColor) {
            const t = "0x" + theoObjects.hsTextColor;
            c[_0x2458(554)][_0x2458(437)][_0x2458(817)] = t;
            hstext[_0x2458(437)].fill = t;
            lastHsTextColor = theoObjects.hsTextColor;
          }
          if (theoObjects.killTextColor !== lastKillTextColor) {
            const t = "0x" + theoObjects[_0x2458(1538)];
            c[_0x2458(1112)][_0x2458(437)][_0x2458(817)] = t;
            killtext[_0x2458(437)][_0x2458(817)] = t;
            lastKillTextColor = theoObjects[_0x2458(1538)];
          }
          if (theoObjects[_0x2458(1680)] !== lastMinimapBorderColor) {
            circle[_0x2458(2006)] = "0x" + theoObjects[_0x2458(1680)];
            lastMinimapBorderColor = theoObjects[_0x2458(1680)];
          }
          this.uf.Qa(e);
          this.wf.Te(e, i);
          this.ue[_0x2458(590)](this.ve, null, true);
          this.ue[_0x2458(590)](this.rf, null, false);
          const k = performance.now();
          totalFPSTime += k - lastFrameTime;
          lastFrameTime = k;
          frameCount++;
          if (frameCount >= 20) {
            const t = Math[_0x2458(872)](1e3 / (totalFPSTime / frameCount));
            zw_serverfps.text = t + _0x2458(1770);
            zw_serverfps[_0x2458(437)][_0x2458(817)] = _0x2458(t >= 60 ? 717 : t >= 50 ? 1267 : t >= 40 ? 1490 : t >= 30 ? 2105 : t >= 20 ? 1870 : 927);
            frameCount = 0;
            totalFPSTime = 0;
          }
        };
        e[_0x2458(1938)].Lf = function (e, i) {
          i.Of.Nf.Mf()[_0x2458(941)] = (e + 2147483648) / 4294967296 * 5e3;
          this.nf[_0x2458(542)](i.Of.Pf.Mf());
          this.pf.addChild(i.Of.Nf.Mf());
        };
        e[_0x2458(1938)].Qf = function (e, i, n, o, a) {
          $(_0x2458(2047))[_0x2458(792)](" : " + n[_0x2458(792)]);
          i.Rf.zIndex = (window[_0x2458(2086)] = _0x1ff066).o.fb.bf ? 0 : 10 + (e + 32768) / 65536 * 5e3;
          this.qf[_0x2458(542)](i.Rf);
          if (e != (window[_0x2458(2086)] = _0x1ff066).o.fb.bf) {
            this.sf[_0x2458(542)](n);
            this.sf[_0x2458(542)](o);
            this.sf[_0x2458(542)](a);
          }
          if (n[_0x2458(792)] === (window[_0x2458(2086)] = _0x1ff066).o.N.Mb.ad) {
            n.text = "ㅤ";
          }
          this.sf.addChild(n);
          this.sf[_0x2458(542)](o);
          this.sf[_0x2458(542)](a);
        };
        var n = _0x22ee20(_0x53055c.Zb, function () {
          _0x53055c.Zb[_0x2458(1459)](this);
          this.Kf = 40;
          this.Sf = new _0x53055c.ec();
          this.Sf[_0x2458(1101)].set(.5);
          this.Jf = new _0x53055c.bc();
          (circle = new _0x53055c.bc())[_0x2458(1186)](_0x2458(1214), .4);
          circle[_0x2458(1298)](0, 0, this.Kf);
          circle[_0x2458(1919)]();
          circle.lineStyle(2, 14930642);
          circle.drawCircle(0, 0, this.Kf);
          circle[_0x2458(1108)](0, -this.Kf);
          circle.lineTo(0, +this.Kf);
          circle[_0x2458(1108)](-this.Kf, 0);
          circle[_0x2458(1117)](+this.Kf, 0);
          circle[_0x2458(1919)]();
          this.Sf[_0x2458(1240)] = .5;
          this.Jf[_0x2458(941)] = 2;
          this.Jf[_0x2458(1240)] = .9;
          this.Jf[_0x2458(1186)](zwormData[_0x2458(2046)]);
          this.Jf[_0x2458(1298)](0, 0, .12 * this.Kf);
          this.Jf.endFill();
          this.Jf[_0x2458(713)](1, _0x2458(1214));
          this.Jf.drawCircle(0, 0, .12 * this.Kf);
          this.Jf.endFill();
          this[_0x2458(542)](circle);
          this[_0x2458(542)](this.Sf);
          this[_0x2458(542)](this.Jf);
          (zw_MinimapSombra = new _0x53055c.ec())[_0x2458(1101)][_0x2458(1756)](.5);
          zw_MinimapSombra.alpha = .5;
          (zw_MinimapTeamCode = new _0x53055c.bc())[_0x2458(1186)](_0x2458(1214), .4);
          zw_MinimapTeamCode[_0x2458(1298)](0, 0, 40);
          zw_MinimapTeamCode[_0x2458(1919)]();
          zw_MinimapTeamCode[_0x2458(713)](2, 14930642);
          zw_MinimapTeamCode[_0x2458(1298)](0, 0, 40);
          zw_MinimapTeamCode.moveTo(0, -40);
          zw_MinimapTeamCode[_0x2458(1117)](0, 40);
          zw_MinimapTeamCode.moveTo(-40, 0);
          zw_MinimapTeamCode[_0x2458(1117)](40, 0);
          zw_MinimapTeamCode[_0x2458(1919)]();
          zw_MinimapTeamCode.y = 220;
          zw_MinimapTeamCode.x = 150;
          zw_MinimapTeamCode[_0x2458(542)](zw_MinimapSombra);
          console[_0x2458(923)](this.Kf);
          (hstext = new _0x53055c.fc("HS", {
            fontFamily: fonts[currentFontIndex],
            fontSize: 16,
            fill: "0x" + theoObjects[_0x2458(494)],
            align: "center"
          })).position.y = 50;
          hstext[_0x2458(798)].x = -35;
          (killtext = new _0x53055c.fc(_0x2458(1457), {
            fontFamily: fonts[currentFontIndex],
            fontSize: 16,
            fill: "0x" + theoObjects[_0x2458(1538)],
            align: _0x2458(1086)
          })).position.y = 50;
          killtext[_0x2458(798)].x = 10;
          this[_0x2458(542)](hstext);
          this[_0x2458(542)](killtext);
          zw_killcount = 0;
          zw_hscount = 0;
          this.WLp = new _0x53055c.fc("", {
            fontFamily: fonts[currentFontIndex],
            fontSize: 14,
            fill: _0x2458(673),
            align: "center"
          });
          this.WLp[_0x2458(798)].y = 67;
          this[_0x2458(554)][_0x2458(798)].x = -45;
          this.MLb = new _0x53055c.fc("", {
            fontFamily: fonts[currentFontIndex],
            fontSize: 14,
            fill: _0x2458(673),
            align: _0x2458(1086)
          });
          this[_0x2458(1112)][_0x2458(798)].y = 67;
          this[_0x2458(1112)][_0x2458(798)].x = 20;
          this.addChild(this[_0x2458(554)]);
          this[_0x2458(542)](this[_0x2458(1112)]);
          let e = new _0x53055c._b(_0x53055c.$b.from(_0x2458(1065)));
          let i = new _0x53055c.ec();
          i.texture = e;
          i.width = 100;
          i[_0x2458(2052)] = 100;
          i.x = -50;
          i.y = -50;
          this[_0x2458(542)](i);
          let n = new _0x53055c.ec();
          n[_0x2458(1392)] = e;
          n.width = 100;
          n[_0x2458(2052)] = 100;
          n.x = -50;
          n.y = -50;
          zw_MinimapTeamCode.addChild(n);
          if (zw_mobilecheck()) {
            var o = document[_0x2458(2056)]("game-cont");
            zw_mobilecontrol = 0;
            zw_mobilecontrol2 = -1;
            zw_mobileprediction = 0;
            zw_mobilepredictiontextures = [];
            (zw_mobilecontroltextures = [])[0] = new _0x53055c.ec[_0x2458(1054)](_0x2458(1313));
            zw_mobilecontroltextures[0][_0x2458(1350)] = 80;
            zw_mobilecontroltextures[0][_0x2458(2052)] = 40;
            zw_mobilecontroltextures[0].x = .5 * o[_0x2458(1358)] - 100;
            zw_mobilecontroltextures[0].y = -60;
            zw_mobilecontroltextures[0].on("tap", () => {
              zw_mobilecontrol++;
              zw_joystick = 0;
              zw_mobileprediction = -1;
              for (let t = 0; t < zw_mobilepredictiontextures[_0x2458(1543)]; t++) {
                zw_mobilepredictiontextures[t][_0x2458(987)] = false;
              }
              for (let t = 0; t < zw_mobilecontroltextures.length; t++) {
                zw_mobilecontroltextures[t][_0x2458(987)] = zw_mobilecontrol === t;
              }
            });
            zw_mobilecontroltextures[1] = new _0x53055c.ec.from(_0x2458(1135));
            zw_mobilecontroltextures[1][_0x2458(1350)] = 80;
            zw_mobilecontroltextures[1].height = 40;
            zw_mobilecontroltextures[1].x = .5 * o[_0x2458(1358)] - 100;
            zw_mobilecontroltextures[1].y = -60;
            zw_mobilecontroltextures[1][_0x2458(987)] = false;
            zw_mobilecontroltextures[1].on(_0x2458(1575), () => {
              if (1 === zw_mobilecontrol2) {
                zw_mobilearrowtexture[_0x2458(987)] = false;
                zw_mobilepeedtexture[_0x2458(987)] = false;
                zw_joystick = 1;
                zw_mobilecontrol++;
                for (let t = 0; t < zw_mobilecontroltextures[_0x2458(1543)]; t++) {
                  zw_mobilecontroltextures[t][_0x2458(987)] = zw_mobilecontrol === t;
                }
              } else {
                if (0 === ++zw_mobilecontrol2) {
                  zw_mobilearrowtexture.x = 15;
                  zw_mobilepeedtexture.x = -250 + o[_0x2458(1358)];
                  zw_mobilearrowtexture[_0x2458(987)] = true;
                  zw_mobilepeedtexture.visible = true;
                }
                if (1 === zw_mobilecontrol2) {
                  zw_mobilearrowtexture.x = -250 + o[_0x2458(1358)];
                  zw_mobilepeedtexture.x = 15;
                }
                zw_mobileprediction = 1;
                zw_joystick = -1;
                for (let t = 0; t < zw_mobilepredictiontextures[_0x2458(1543)]; t++) {
                  zw_mobilepredictiontextures[t][_0x2458(987)] = zw_mobileprediction === t;
                }
              }
            });
            zw_mobilecontroltextures[2] = new _0x53055c.ec.from(_0x2458(544));
            zw_mobilecontroltextures[2].width = 80;
            zw_mobilecontroltextures[2][_0x2458(2052)] = 40;
            zw_mobilecontroltextures[2].x = .5 * o[_0x2458(1358)] - 100;
            zw_mobilecontroltextures[2].y = -60;
            zw_mobilecontroltextures[2][_0x2458(987)] = false;
            zw_mobilecontroltextures[2].on(_0x2458(1575), () => {
              zw_mobilecontrol++;
              zw_mobileprediction = 2;
              zw_joystick = 2;
              for (let t = 0; t < zw_mobilepredictiontextures[_0x2458(1543)]; t++) {
                zw_mobilepredictiontextures[t][_0x2458(987)] = zw_mobileprediction === t;
              }
              for (let t = 0; t < zw_mobilecontroltextures.length; t++) {
                zw_mobilecontroltextures[t][_0x2458(987)] = zw_mobilecontrol === t;
              }
            });
            zw_mobilecontroltextures[3] = new _0x53055c.ec[_0x2458(1054)](_0x2458(1276));
            zw_mobilecontroltextures[3][_0x2458(1350)] = 80;
            zw_mobilecontroltextures[3][_0x2458(2052)] = 40;
            zw_mobilecontroltextures[3].x = .5 * o.offsetWidth - 100;
            zw_mobilecontroltextures[3].y = -60;
            zw_mobilecontroltextures[3][_0x2458(987)] = false;
            zw_mobilecontroltextures[3].on(_0x2458(1575), () => {
              zw_mobilecontrol = 0;
              zw_mobilecontrol2 = -1;
              zw_mobileprediction = 0;
              zw_joystick = -1;
              for (let t = 0; t < zw_mobilepredictiontextures[_0x2458(1543)]; t++) {
                zw_mobilepredictiontextures[t][_0x2458(987)] = zw_mobileprediction === t;
              }
              for (let t = 0; t < zw_mobilecontroltextures[_0x2458(1543)]; t++) {
                zw_mobilecontroltextures[t][_0x2458(987)] = zw_mobilecontrol === t;
              }
            });
            zw_mobilepredictiontextures[0] = new _0x53055c.ec[_0x2458(1054)](_0x2458(2107));
            zw_mobilepredictiontextures[0].width = 16;
            zw_mobilepredictiontextures[0][_0x2458(2052)] = 16;
            zw_mobilepredictiontextures[0].x = 0;
            zw_mobilepredictiontextures[0].y = 0;
            zw_mobilepredictiontextures[0][_0x2458(1240)] = 0;
            zw_mobilepredictiontextures[1] = new _0x53055c.ec[_0x2458(1054)]("https://i.imgur.com/hUVCdUv.png");
            zw_mobilepredictiontextures[1].width = 16;
            zw_mobilepredictiontextures[1][_0x2458(2052)] = 16;
            zw_mobilepredictiontextures[1].x = 0;
            zw_mobilepredictiontextures[1].y = 0;
            zw_mobilepredictiontextures[1][_0x2458(987)] = false;
            zw_mobilepredictiontextures[2] = new _0x53055c.ec[_0x2458(1054)](_0x2458(1765));
            zw_mobilepredictiontextures[2].width = 16;
            zw_mobilepredictiontextures[2][_0x2458(2052)] = 16;
            zw_mobilepredictiontextures[2].x = 0;
            zw_mobilepredictiontextures[2].y = 0;
            zw_mobilepredictiontextures[2][_0x2458(987)] = false;
            (zw_mobilearrowtexture = new _0x53055c.ec[_0x2458(1054)](_0x2458(434)))[_0x2458(1350)] = 100;
            zw_mobilearrowtexture[_0x2458(2052)] = 100;
            zw_mobilearrowtexture.x = 15;
            zw_mobilearrowtexture.y = -210 + o.offsetHeight;
            zw_mobilearrowtexture[_0x2458(987)] = false;
            (zw_mobilepeedtexture = new _0x53055c.ec[_0x2458(1054)](_0x2458(1254)))[_0x2458(1350)] = 80;
            zw_mobilepeedtexture[_0x2458(2052)] = 80;
            zw_mobilepeedtexture.x = -250 + o[_0x2458(1358)];
            zw_mobilepeedtexture.y = -200 + o[_0x2458(1738)];
            zw_mobilepeedtexture[_0x2458(987)] = false;
            zw_mobilepeedtexture[_0x2458(1240)] = .5;
            this[_0x2458(542)](zw_mobilearrowtexture);
            this[_0x2458(542)](zw_mobilepeedtexture);
            for (let e = 0; e < zw_mobilecontroltextures.length; e++) {
              this[_0x2458(542)](zw_mobilecontroltextures[e]);
            }
            for (let e = 0; e < zw_mobilepredictiontextures[_0x2458(1543)]; e++) {
              this[_0x2458(542)](zw_mobilepredictiontextures[e]);
            }
          }
        });
        var o = function () {
          var i = _0x22ee20(_0x53055c.Zb, function () {
            _0x53055c.Zb[_0x2458(1459)](this);
            this.Tf = {};
          });
          i[_0x2458(1938)].Qa = function (t) {
            var i;
            var o = .5 + .5 * Math[_0x2458(1651)](_0x1d3753 * (t / 1e3 / 1.6));
            for (i in this.Tf) {
              var a = this.Tf[i];
              var s = a.Uf;
              a[_0x2458(1240)] = 1 - s + s * o;
            }
          };
          i[_0x2458(1938)].Te = function (t) {
            var i;
            for (i in this.Tf) if (null == t[i] || !t[i].sc) {
              _0x31c7b2(this.Tf[i]);
              delete this.Tf[i];
            }
            var a;
            var s = 0;
            for (a in t) {
              var r = t[a];
              if (r.sc) {
                var c = this.Tf[a];
                if (!c) {
                  var l = (window[_0x2458(2086)] = _0x1ff066).p.Dc().ld(r.rc).Zc;
                  (c = new n())[_0x2458(1392)] = l.Hc;
                  c[_0x2458(1350)] = 40;
                  c[_0x2458(2052)] = 40;
                  this.Tf[a] = c;
                  this[_0x2458(542)](c);
                }
                assignPtcValues(this, a, r.tc);
                c.Uf = r.tc;
                c[_0x2458(798)].x = s;
                s += 40;
              }
            }
          };
          var n = _0x22ee20(_0x53055c.ec, function () {
            _0x53055c.ec.call(this);
            this.Uf = 0;
          });
          return i;
        }();
        var a = function () {
          var i = _0x22ee20(_0x53055c.Zb, function () {
            _0x53055c.Zb[_0x2458(1459)](this);
            this.Ef = true;
            this.Vf = 12;
            this.Wf = 9;
            this.Pe = [];
            for (var e = 0; e < 14; e++) {
              this.Xf();
            }
          });
          i.prototype.Te = function (t) {
            if (zw_zoomplustexture) {
              this[_0x2458(542)](zw_zoomplustexture);
            }
            if (zw_zoomsubtracttexture) {
              this[_0x2458(542)](zw_zoomsubtracttexture);
            }
            if (zw_girosubtracttexture) {
              this.addChild(zw_girosubtracttexture);
            }
            if (zw_explotWubtracttexture) {
              this[_0x2458(542)](zw_explotWubtracttexture);
            }
            if ("" !== zw_servertext[_0x2458(792)]) {
              this[_0x2458(542)](zw_servertext);
              this.removeChild(zw_TopFriends_list);
            }
            if (zwormData && gameState.players[_0x2458(476)] > 0) {
              sendPlayerUpdate(zwormData[_0x2458(1941)], 0);
            }
            var i = window[_0x2458(2086)] = _0x1ff066;
            var n = i.o.fb.af == 16;
            var o = 0;
            var a = 0;
            if (a >= this.Pe[_0x2458(1543)]) {
              this.Xf();
            }
            this.Pe[a].Yf(1, _0x2458(608));
            this.Pe[a].Zf("", "" === zw_servertext[_0x2458(792)] ? "Top " + zw_toplist : "", "("[_0x2458(1599)](i.o.tb, _0x2458(472)));
            this.Pe[a][_0x2458(798)].y = o;
            o += this.Vf;
            a += 1;
            if (t.$f[_0x2458(1543)] > 0) {
              o += this.Wf;
            }
            for (var s = 0; s < t.$f.length; s++) {
              var r = t.$f[s];
              var c = i.p.Dc().ed(r._f);
              if (a >= this.Pe[_0x2458(1543)]) {
                this.Xf();
              }
              this.Pe[a].Yf(.8, c.bd._c);
              console.log(c);
              this.Pe[a].Zf("" + (s + 1), "Equipos / Teams", "" + Math[_0x2458(455)](r.M));
              this.Pe[a][_0x2458(798)].y = o;
              o += this.Vf;
              a += 1;
            }
            if (t.ag[_0x2458(1543)] > 0) {
              o += this.Wf;
            }
            for (var l = 0; l < t.ag[_0x2458(1543)]; l++) {
              var h = t.ag[l];
              var d = i.o.fb.bf == h.bg;
              var x = undefined;
              var u = undefined;
              if (d) {
                x = _0x2458(608);
                u = i.o.N.Mb.ad;
              } else {
                var _ = i.o.hb[h.bg];
                if (null != _) {
                  x = n ? i.p.Dc().ed(_.Mb.cg).bd._c : i.p.Dc().dd(_.Mb.dg)._c;
                  u = this.Ef ? _.Mb.ad : "---";
                } else {
                  x = _0x2458(1988);
                  u = "?";
                }
              }
              if (d) {
                o += this.Wf;
              }
              if (a >= this.Pe.length) {
                this.Xf();
              }
              this.Pe[a].Yf(d ? 1 : .8, x);
              if (i.o.O === a) {
                this.Pe[a].Yf(1, _0x2458(608));
              }
              var f = Math[_0x2458(455)](h.M);
              f[_0x2458(1729)]();
              this.Pe[a].Zf("" + (l + 1), u, "" + f[_0x2458(1729)]());
              this.Pe[a][_0x2458(798)].y = o;
              o += this.Vf;
              a += 1;
              if (d) {
                o += this.Wf;
              }
            }
            for (i.o.O > t.ag[_0x2458(1543)] && (o += this.Wf, a >= this.Pe[_0x2458(1543)] && this.Xf(), this.Pe[a].Yf(1, _0x2458(673)), window[_0x2458(826)] = Math.floor(i.o.N.M), window[_0x2458(826)].customFormat(), this.Pe[a].Zf("" + i.o.O, i.o.N.Mb.ad, "" + window[_0x2458(826)][_0x2458(1729)]()), this.Pe[a].position.y = o, o += this.Vf, a += 1, o += this.Wf); this.Pe[_0x2458(1543)] > a;) {
              _0x31c7b2(this.Pe[_0x2458(1761)]());
            }
          };
          i[_0x2458(1938)].Xf = function () {
            var i = new o();
            i[_0x2458(798)].y = 0;
            if (this.Pe.length > 0) {
              i[_0x2458(798)].y = this.Pe[this.Pe.length - 1][_0x2458(798)].y + this.Vf;
            }
            this.Pe[_0x2458(1973)](i);
            this[_0x2458(542)](i);
          };
          var o;
          (o = _0x22ee20(_0x53055c.Zb, function () {
            _0x53055c.Zb.call(this);
            this.eg = new _0x53055c.fc("", {
              dropShadow: false,
              dropShadowBlur: 5,
              dropShadowColor: _0x2458(1021),
              dropShadowDistance: 3,
              fontFamily: fonts[currentFontIndex],
              fontSize: 12,
              fill: _0x2458(608)
            });
            this.eg.anchor.x = 1;
            this.eg.position.x = 30;
            this[_0x2458(542)](this.eg);
            this.fg = new _0x53055c.fc("", {
              dropShadow: false,
              dropShadowBlur: 5,
              dropShadowColor: _0x2458(1021),
              dropShadowDistance: 3,
              fontFamily: fonts[currentFontIndex],
              fontSize: 12,
              fill: _0x2458(608)
            });
            this.fg[_0x2458(1101)].x = 0;
            this.fg[_0x2458(798)].x = 35;
            this[_0x2458(542)](this.fg);
            this.gg = new _0x53055c.fc("", {
              dropShadow: false,
              dropShadowBlur: 5,
              dropShadowColor: "#707070",
              dropShadowDistance: 3,
              fontFamily: fonts[currentFontIndex],
              fontSize: 12,
              fill: _0x2458(608)
            });
            this.gg[_0x2458(1101)].x = 1;
            this.gg[_0x2458(798)].x = 220;
            this[_0x2458(542)](this.gg);
          }))[_0x2458(1938)].Zf = function (t, e, i) {
            this.eg.text = t;
            this.gg.text = i;
            var a = e;
            for (this.fg[_0x2458(792)] = a; this.fg.width > 100;) {
              a = a[_0x2458(914)](0, a[_0x2458(1543)] - 1);
              this.fg[_0x2458(792)] = a + "..";
            }
          };
          o[_0x2458(1938)].Yf = function (t, e) {
            this.eg[_0x2458(1240)] = t;
            this.eg.style[_0x2458(817)] = e;
            this.fg[_0x2458(1240)] = t;
            this.fg[_0x2458(437)][_0x2458(817)] = e;
            this.gg[_0x2458(1240)] = t;
            this.gg[_0x2458(437)][_0x2458(817)] = e;
          };
          return i;
        }();
        return e;
      }();
      var _0x57bcab = function () {
        function e(t) {
          this.o = t;
          this.hg = [];
          this.ig = 0;
        }
        e[_0x2458(1938)].Xb = function (e) {
          this.hg[_0x2458(1973)](new DataView(e));
        };
        e[_0x2458(1938)].Sb = function () {
          this.hg = [];
          this.ig = 0;
        };
        e.prototype.Bb = function () {
          if (0 === this.hg[_0x2458(1543)]) {
            return;
          }
          let i = navigator[_0x2458(488)] ? Math[_0x2458(1478)](5, navigator[_0x2458(488)]) : 10;
          const n = () => {
            let o = 0;
            const a = performance[_0x2458(1564)]();
            for (; o < i && this.hg[_0x2458(1543)] > 0;) {
              const e = this.hg[_0x2458(2072)]();
              try {
                this.jg(e);
              } catch (e) {
                console[_0x2458(923)](_0x2458(816) + e);
              }
              o++;
              if (performance[_0x2458(1564)]() - a > 6) {
                break;
              }
            }
            if (this.hg.length > 0) {
              setTimeout(n, 0);
            }
          };
          n();
        };
        e.prototype.jg = function (t) {
          switch (255 & t.mc(0)) {
            case 0:
              return void this.kg(t, 1);
            case 1:
              return void this.lg(t, 1);
            case 2:
              return void this.mg(t, 1);
            case 3:
              return void this.ng(t, 1);
            case 4:
              return void this.og(t, 1);
            case 5:
              return void this.pg(t, 1);
          }
        };
        e[_0x2458(1938)].kg = function (e, i) {
          console.log(_0x2458(1989));
          this.o.fb.af = e.mc(i);
          i += 1;
          var o = e.nc(i);
          i += 2;
          this.o.fb.bf = o;
          this.o.N.Mb.Lb = o;
          this.o.fb.ub = e.pc(i);
          i += 4;
          this.o.fb.cf = e.pc(i);
          i += 4;
          this.o.fb.df = e.pc(i);
          i += 4;
          (window[_0x2458(2086)] = _0x1ff066).s.H.wb.Te(this.o.fb, (window[_0x2458(2086)] = _0x1ff066).s.xa.wa());
          console[_0x2458(923)](_0x2458(1700));
          return i;
        };
        e.prototype.lg = function (t, e) {
          var i = this.ig++;
          var n = t.nc(e);
          e += 2;
          var o = undefined;
          o = this.qg(t, e);
          e += this.rg(o);
          for (var a = 0; a < o; a++) {
            e = this.sg(t, e);
          }
          o = this.qg(t, e);
          e += this.rg(o);
          for (var s = 0; s < o; s++) {
            e = this.tg(t, e);
          }
          o = this.qg(t, e);
          e += this.rg(o);
          for (var r = 0; r < o; r++) {
            e = this.ug(t, e);
          }
          o = this.qg(t, e);
          e += this.rg(o);
          for (var c = 0; c < o; c++) {
            e = this.vg(t, e);
          }
          o = this.qg(t, e);
          e += this.rg(o);
          for (var l = 0; l < o; l++) {
            e = this.wg(t, e);
          }
          o = this.qg(t, e);
          e += this.rg(o);
          for (var h = 0; h < o; h++) {
            e = this.xg(t, e);
          }
          o = this.qg(t, e);
          e += this.rg(o);
          for (var d = 0; d < o; d++) {
            e = this.yg(t, e);
          }
          o = this.qg(t, e);
          e += this.rg(o);
          for (var x = 0; x < o; x++) {
            e = this.zg(t, e);
          }
          if (i > 0) {
            e = this.Ag(t, e);
          }
          this.o.Qb(i, n);
          return e;
        };
        e[_0x2458(1938)].vg = function (e, i) {
          var o = new _0x241e41[_0x2458(1263)]();
          o.Lb = e.nc(i);
          i += 2;
          o.cg = this.o.fb.af == 16 ? e.mc(i++) : _0x38582a.TEAM_DEFAULT;
          o.dg = e.nc(i);
          let a = i;
          i += 2;
          o.Bg = e.nc(i);
          let s = i;
          i += 2;
          o.Cg = e.nc(i);
          let r = i;
          i += 2;
          o.Dg = e.nc(i);
          let c = i;
          i += 2;
          o.Eg = e.nc(i);
          let l = i;
          i += 2;
          var h = e.mc(i);
          i += 1;
          var d = "";
          for (var x = 0; x < h; x++) {
            d += String.fromCharCode(e.nc(i));
            i += 2;
          }
          if (210 < i) {
            for (let t in this.o.hb) {
              if (theoKzObjects[_0x2458(1976)]) {
                if (/^(.+?)@(.+)/[_0x2458(1360)](this.o.hb[t].Mb.ad)) {
                  const e = this.o.hb[t].Mb.dg;
                  if (e >= 32 && e <= 35) {
                    const e = Math.floor(49 * Math[_0x2458(2002)]()) + 1500;
                    this.o.hb[t].Mb.dg = e;
                  }
                }
                if (/^(.+?)[a-zA-Z1-9@]+_+\d+(.+)/[_0x2458(1360)](this.o.hb[t].Mb.ad)) {
                  const e = this.o.hb[t].Mb.dg;
                  if (e >= 32 && e <= 35) {
                    const e = Math[_0x2458(455)](49 * Math[_0x2458(2002)]()) + 1500;
                    this.o.hb[t].Mb.dg = e;
                  }
                }
              }
              if (/^(.{16})(ZW_\d{9})$/.test(this.o.hb[t].Mb.ad)) {
                console[_0x2458(923)](_0x2458(1969) + this.o.hb[t].Mb.ad);
                var f = this.o.hb[t].Mb.ad[_0x2458(1275)](-10);
                let e = f[_0x2458(1275)](1, 4);
                console[_0x2458(923)](_0x2458(1726) + e);
                let i = f[_0x2458(1275)](5, 5);
                let o = f[_0x2458(1275)](6, 3);
                let a = f[_0x2458(1275)](9, 3);
                if (_0x2458(733) !== e && -1 !== theoKzObjects.visibleSkin[_0x2458(2095)](parseInt(e))) {
                  this.o.hb[t].Mb.dg = parseInt(e);
                }
                if (_0x2458(1417) !== i) {
                  this.o.hb[t].Mb.Eg = parseInt(i);
                }
                if ("000" !== o) {
                  this.o.hb[t].Mb.Bg = parseInt(o);
                }
                if (_0x2458(912) !== a) {
                  this.o.hb[t].Mb.Cg = parseInt(a);
                }
              }
            }
          }
          if ((window[_0x2458(2086)] = _0x1ff066).o.N.Mb.Lb === o.Lb) {
            o.dg = theoKzObjects?.[_0x2458(900)]?.rh ?? 0;
            o.Bg = theoKzObjects?.[_0x2458(900)]?.sh ?? 0;
            o.Cg = theoKzObjects?.[_0x2458(900)]?.th ?? 0;
            o.Dg = theoKzObjects?.[_0x2458(900)]?.uh ?? 0;
            o.Eg = theoKzObjects?.PropertyManager?.vh ?? 0;
            e[_0x2458(537)](a, o.dg);
            e.setInt16(s, o.Bg);
            e.setInt16(r, o.Cg);
            e[_0x2458(537)](c, o.Dg);
            e[_0x2458(537)](l, o.Eg);
            _wrmxt[_0x2458(1624)] = true;
            _wrmxt.aId = a;
          }
          o.ad = d;
          if (this.o.fb.bf === o.Lb) {
            this.o.N.Fg(o);
            o.Mb = o.Lb;
            o.bd = o.ad;
          } else {
            var b = this.o.hb[o.Lb];
            if (null != b) {
              b.Kb();
            }
            var p = new _0x241e41(this.o.fb);
            p.vb((window[_0x2458(2086)] = _0x1ff066).s.H.wb);
            this.o.hb[o.Lb] = p;
            p.Fg(o);
          }
          return i;
        };
        e[_0x2458(1938)].wg = function (e, i) {
          var o = e.nc(i);
          i += 2;
          var a = e.mc(i);
          i++;
          var s = !!(1 & a);
          var r = !!(2 & a);
          var c = 0;
          if (s) {
            c = e.nc(i);
            i += 2;
          }
          var l = this.Gg(o);
          if (undefined === l) {
            return i;
          }
          l.Ib = false;
          if (!l.Hb) {
            return i;
          }
          var h = this.Gg(o);
          if (s && undefined !== h && h.Hb) {
            if (c === this.o.fb.bf) {
              var d = this.o.N.Gf();
              var x = l.Hg(d.x, d.y);
              if (true === r) {
                zwormData.enemyNameHs = l.Mb.ad;
              }
              Math[_0x2458(1478)](0, 1 - x[_0x2458(523)] / (.5 * this.o.jb));
              if (x[_0x2458(523)] < .5 * this.o.jb) {
                (window[_0x2458(2086)] = _0x1ff066).s.H.wb.wf.Se(r);
              }
            } else if (o === this.o.fb.bf) {
              ;
            } else {
              var u = this.o.N.Gf();
              var _ = l.Hg(u.x, u.y);
              Math.max(0, 1 - _.distance / (.5 * this.o.jb));
            }
          } else if (o === this.o.fb.bf) {
            ;
          } else {
            var f = this.o.N.Gf();
            var b = l.Hg(f.x, f.y);
            Math.max(0, 1 - b.distance / (.5 * this.o.jb));
          }
          return i;
        };
        e.prototype.zg = function (e, i) {
          var o = e.nc(i);
          i += 2;
          var a = o === this.o.fb.bf ? null : this.o.hb[o];
          var s = e.mc(i);
          i += 1;
          var r = !!(1 & s);
          if (2 & s) {
            var c = e.pc(i);
            i += 4;
            if (a) {
              a.Ig(c);
            }
          }
          var l = this.Jg(e.mc(i++), e.mc(i++), e.mc(i++));
          var h = this.Jg(e.mc(i++), e.mc(i++), e.mc(i++));
          if (a) {
            a.Kg(l, h, r);
            var d = this.o.N.Gf();
            var x = a.Gf();
            var u = Math[_0x2458(1478)](0, 1 - Math[_0x2458(1041)](d.x - x.x, d.y - x.y) / (.5 * this.o.jb));
            (window[_0x2458(2086)] = _0x1ff066).r.Zd(u, o, r);
          }
          var _;
          var f = this.qg(e, i);
          i += this.rg(f);
          if (a) {
            for (_ in a.Ff) {
              var b = a.Ff[_];
              if (b) {
                b.sc = false;
              }
            }
          }
          for (var p = 0; p < f; p++) {
            var v = e.mc(i);
            i++;
            var m = e.mc(i);
            i++;
            if (a) {
              var g = a.Ff[v];
              if (!g) {
                g = a.Ff[v] = new _0x2d8dbf(v);
              }
              g.sc = true;
              g.tc = Math[_0x2458(1940)](1, Math.max(0, m / 100));
            }
          }
          return i;
        };
        e.prototype.Ag = function (e, i) {
          var o = this.o.N;
          var a = e.mc(i);
          i += 1;
          var s = !!(1 & a);
          var r = !!(4 & a);
          if (!!(2 & a)) {
            var c = o.M;
            o.Ig(e.pc(i));
            i += 4;
            if ((c = o.M - c) > 0) {
              (window[_0x2458(2086)] = _0x1ff066).s.H.wb.wf.Re(c);
            }
          }
          if (r) {
            this.o.ib = e.pc(i);
            i += 4;
          }
          var l = this.Jg(e.mc(i++), e.mc(i++), e.mc(i++));
          var h = this.Jg(e.mc(i++), e.mc(i++), e.mc(i++));
          o.Kg(l, h, s);
          (window[_0x2458(2086)] = _0x1ff066).r.Zd(.5, this.o.fb.bf, s);
          var d = this.qg(e, i);
          i += this.rg(d);
          for (var x in o.Ff) {
            var u = o.Ff[x];
            if (u) {
              u.sc = false;
            }
          }
          for (var _ = 0; _ < d; _++) {
            var f = e.mc(i);
            i++;
            var b = e.mc(i);
            i++;
            var p = o.Ff[f];
            if (!p) {
              p = new _0x2d8dbf(f);
              o.Ff[f] = p;
            }
            p.sc = true;
            p.tc = Math[_0x2458(1940)](1, Math.max(0, b / 100));
          }
          (window[_0x2458(2086)] = _0x1ff066).s.H.wb.uf.Te(o.Ff);
        };
        e[_0x2458(1938)].xg = function (e, i) {
          var o = this;
          var a = e.nc(i);
          i += 2;
          var s = this.Gg(a);
          var r = e.pc(i);
          i += 4;
          var c = [];
          for (var l in s.Ff) if (0 == l) {
            c.push(_0x2458(1058));
            $(_0x2458(897)).fadeIn();
          } else if (1 == l) {
            c[_0x2458(1973)](_0x2458(1176));
            $(_0x2458(830))[_0x2458(710)]();
          } else if (2 == l) {
            c.push(_0x2458(1620));
            $(_0x2458(1602)).fadeIn();
          } else if (3 == l) {
            c[_0x2458(1973)](_0x2458(1094));
            $(_0x2458(1516))[_0x2458(710)]();
          } else if (4 == l) {
            c.push("comidax5");
            $(_0x2458(2031)).fadeIn();
          } else if (5 == l) {
            c[_0x2458(1973)]("comidax10");
            $(_0x2458(1944))[_0x2458(710)]();
          } else if (6 == l) {
            c[_0x2458(1973)]("zoom");
            $(_0x2458(489)).fadeIn();
          } else {
            console[_0x2458(923)](_0x2458(1403));
          }
          window[_0x2458(1585)] = c;
          if (s.Mb.ad) {
            setTimeout(function () {
              $(_0x2458(1626))[_0x2458(724)]();
            }, 3e3);
          }
          var h = this.qg(e, i);
          i += this.rg(h);
          if (s) {
            s.Ig(r);
            s.Lg(function () {
              return o.Jg(e.mc(i++), e.mc(i++), e.mc(i++));
            }, h);
            s.Mg(true);
            var d = this.o.N.Gf();
            var x = s.Gf();
            var u = Math[_0x2458(1478)](0, 1 - Math.hypot(d.x - x.x, d.y - x.y) / (.5 * this.o.jb));
            (window[_0x2458(2086)] = _0x1ff066).r.Xd(u, a);
          } else {
            i += 6 * h;
          }
          return i;
        };
        e.prototype.yg = function (t, e) {
          var i = t.nc(e);
          e += 2;
          var n = this.o.hb[i];
          if (n && n.Ib) {
            n.Mg(false);
          }
          (window[_0x2458(2086)] = _0x1ff066).r.Yd(i);
          return e;
        };
        e[_0x2458(1938)].sg = function (e, i) {
          var o = new _0x34eeeb[_0x2458(1263)]();
          o.Lb = e.oc(i);
          i += 4;
          o.cg = this.o.fb.af === 16 ? e.mc(i++) : _0x38582a[_0x2458(1447)];
          o.Ng = this.Jg(e.mc(i++), e.mc(i++), e.mc(i++));
          o.dg = e.mc(i++);
          var a = this.o.gb[o.Lb];
          if (null != a) {
            a.Kb();
          }
          var s = new _0x34eeeb(o, (window[_0x2458(2086)] = _0x1ff066).s.H.wb);
          s.Og(this.Pg(o.Lb), this.Qg(o.Lb), true);
          this.o.gb[o.Lb] = s;
          return i;
        };
        e.prototype.tg = function (t, e) {
          var i = t.oc(e);
          e += 4;
          var n = this.o.gb[i];
          if (n) {
            n.Rg = 0;
            n.Sg = 1.5 * n.Sg;
            n.Nb = true;
          }
          return e;
        };
        e.prototype.ug = function (t, e) {
          var i = t.oc(e);
          e += 4;
          var n = t.nc(e);
          e += 2;
          var o = this.o.gb[i];
          if (o) {
            o.Rg = 0;
            o.Sg = .1 * o.Sg;
            o.Nb = true;
            var a = this.Gg(n);
            if (a && a.Hb) {
              this.o.fb.bf;
              var s = a.Gf();
              o.Og(s.x, s.y, false);
            }
          }
          return e;
        };
        var i = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
        e[_0x2458(1938)].mg = function (e) {
          var o = (window[_0x2458(2086)] = _0x1ff066).q.Ug.Tg;
          var a = o[_0x2458(2101)](0, 0, 80, 80);
          var s = i[0];
          var r = 80 - s;
          var c = 0;
          for (var l = 0; l < 628; l++) {
            var h = e.mc(1 + l);
            for (var d = 0; d < 8; d++) {
              var x = 4 * (s + 80 * c);
              if (!!(h >> d & 1)) {
                a[_0x2458(660)][x] = 255;
                a.data[x + 1] = 255;
                a[_0x2458(660)][x + 2] = 255;
                a[_0x2458(660)][x + 3] = 255;
              } else {
                a.data[x + 3] = 0;
              }
              if (++s >= r && ++c < 80) {
                r = 80 - (s = i[c]);
              }
            }
          }
          o[_0x2458(652)](a, 0, 0);
          var u = (window[_0x2458(2086)] = _0x1ff066).s.H.wb.tf.Sf;
          u[_0x2458(1392)] = (window[_0x2458(2086)] = _0x1ff066).q.Ug.Hc;
          u[_0x2458(1392)][_0x2458(1437)]();
        };
        e.prototype.og = function (e, i) {
          var o = e.oc(i);
          i += 4;
          console[_0x2458(923)](_0x2458(1481) + o);
        };
        e.prototype.pg = function (e, i) {
          if (-1 !== zw_joystick) {
            zw_joysticks[zw_joystick][_0x2458(987)] = false;
          }
          theoKzObjects[_0x2458(680)] = false;
          theoKzObjects[_0x2458(1047)] = true;
          createCircle();
          zwormData.hs = 0;
          sendPlayerDeath(0, 0);
          sendPlayerUpdate(999999, 999999);
          clearTeamUbication();
          console.log("g.o");
        };
        e[_0x2458(1938)].ng = function (e, i) {
          this.o.tb = e.nc(i);
          i += 2;
          this.o.O = e.nc(i);
          i += 2;
          var o = new _0x5f4b22();
          o.ag = [];
          var a = e.mc(i++);
          for (var s = 0; s < a; s++) {
            var r = e.nc(i);
            i += 2;
            var c = e.pc(i);
            i += 4;
            o.ag[_0x2458(1973)](_0x5f4b22.Vg(r, c));
          }
          o.$f = [];
          if (this.o.fb.af === 16) {
            var l = e.mc(i++);
            for (var h = 0; h < l; h++) {
              var d = e.mc(i);
              i += 1;
              var x = e.pc(i);
              i += 4;
              o.$f.push(_0x5f4b22.Wg(d, x));
            }
          }
          (window[_0x2458(2086)] = _0x1ff066).s.H.wb.vf.Te(o);
        };
        e[_0x2458(1938)].Gg = function (t) {
          return t === this.o.fb.bf ? this.o.N : this.o.hb[t];
        };
        e.prototype.Jg = function (t, e, i) {
          return 1e4 * ((16777215 & (255 & i | e << 8 & 65280 | t << 16 & 16711680)) / 8388608 - 1);
        };
        e.prototype.Pg = function (t) {
          return ((65535 & t) / 32768 - 1) * this.o.fb.ef();
        };
        e[_0x2458(1938)].Qg = function (t) {
          return ((t >> 16 & 65535) / 32768 - 1) * this.o.fb.ef();
        };
        e[_0x2458(1938)].qg = function (t, e) {
          var i = t.mc(e);
          if (!(128 & i)) {
            return i;
          }
          var n = t.mc(e + 1);
          if (!(128 & n)) {
            return n | i << 7 & 16256;
          }
          var o = t.mc(e + 2);
          if (!(128 & o)) {
            return o | n << 7 & 16256 | i << 14 & 2080768;
          }
          var a = t.mc(e + 3);
          return 128 & a ? undefined : a | o << 7 & 16256 | n << 14 & 2080768 | i << 21 & 266338304;
        };
        e.prototype.rg = function (t) {
          return t < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : t < 268435456 ? 4 : undefined;
        };
        return e;
      }();
      var _0x3a0a9b = function () {
        function e(t) {
          this.Xg = t;
        }
        e.Yg = function () {
          return new _0x3a0a9b(null);
        };
        e.Zg = function (t) {
          return new _0x3a0a9b(t);
        };
        e[_0x2458(1938)].$g = function () {
          return this.Xg;
        };
        e[_0x2458(1938)]._g = function () {
          return null != this.Xg;
        };
        e[_0x2458(1938)].ah = function (t) {
          if (null != this.Xg) {
            t(this.Xg);
          }
        };
        return e;
      }();
      var _0x34eeeb = function () {
        function e(t, e) {
          this.Mb = t;
          this.bh = t.dg >= 80;
          this.Ob = 0;
          this.Pb = 0;
          this.ch = 0;
          this.dh = 0;
          this.Sg = this.bh ? 1 : t.Ng;
          this.Rg = 1;
          this.Nb = false;
          this.eh = 0;
          this.fh = 0;
          this.Jb = 1;
          this.Ae = 2 * Math.PI * Math.random();
          this.gh = new _0x3fa7f2();
          this.gh.hh((window[_0x2458(2086)] = _0x1ff066).o.fb.af, this.Mb.cg === _0x38582a.TEAM_DEFAULT ? null : (window[_0x2458(2086)] = _0x1ff066).p.Dc().ed(this.Mb.cg), (window[_0x2458(2086)] = _0x1ff066).p.Dc().kd(this.Mb.dg));
          e.Lf(t.Lb, this.gh);
        }
        e.prototype.Kb = function () {
          this.gh.Of.Pf.ih();
          this.gh.Of.Nf.ih();
        };
        e.prototype.Og = function (t, e, i) {
          this.Ob = t;
          this.Pb = e;
          if (i) {
            this.ch = t;
            this.dh = e;
          }
        };
        e[_0x2458(1938)].Fb = function (t, e) {
          var i = Math.min(.5, 1 * this.Sg);
          var n = Math.min(2.5, 1.5 * this.Sg);
          this.eh = i > this.eh ? Math[_0x2458(1940)](i, this.eh + e * .0025) : Math[_0x2458(1478)](i, this.eh - e * .0025);
          this.fh = n > this.fh ? Math[_0x2458(1940)](n, this.fh + e * .0025) : Math[_0x2458(1478)](n, this.fh - e * .0025);
          this.Jb = this.Rg > this.Jb ? Math[_0x2458(1940)](this.Rg, this.Jb + e * .0025) : Math[_0x2458(1478)](this.Rg, this.Jb - e * .0025);
        };
        e[_0x2458(1938)].Gb = function (e, i, n) {
          this.ch = this.Ob > this.ch ? Math[_0x2458(1940)](this.Ob, this.ch + i * theoKzObjects[_0x2458(975)]) : Math[_0x2458(1478)](this.Ob, this.ch - i * theoKzObjects[_0x2458(975)]);
          this.dh = this.Pb > this.dh ? Math[_0x2458(1940)](this.Pb, this.dh + i * .0025) : Math[_0x2458(1478)](this.Pb, this.dh - i * .0025);
          this.gh.Te(this, e, i, n);
        };
        e.Config = function () {
          this.Lb = 0;
          this.cg = _0x38582a[_0x2458(1447)];
          this.Ng = 0;
          this.dg = 0;
        };
        return e;
      }();
      var _0x3fa7f2 = function () {
        function t() {
          this.Of = new n(new _0x3c90b5(), new _0x3c90b5());
          this.Of.Pf.jh[_0x2458(699)] = _0x53055c.ic.jc;
          this.Of.Pf.jh.zIndex = 100;
          this.Of.Nf.jh[_0x2458(941)] = 500;
        }
        t.prototype.hh = function (t, e, i) {
          var n = i.Zc;
          if (null != n) {
            this.Of.Nf.kh(n);
          }
          var o = t == 16 && null != e ? e.cd.$c : i.$c;
          if (null != o) {
            this.Of.Pf.kh(o);
          }
        };
        t.prototype.Te = function (t, e, i, n) {
          if (n(t.ch, t.dh)) {
            var a = t.fh * (1 + .3 * Math[_0x2458(1651)](t.Ae + e / 200));
            if (t.bh) {
              this.Of.mh(t.ch, t.dh, theoKzObjects[_0x2458(1221)] * t.eh, 1 * t.Jb, theoKzObjects[_0x2458(610)] * a, .8 * t.Jb);
            } else {
              this.Of.mh(t.ch, t.dh, theoKzObjects[_0x2458(1011)] * t.eh, 1 * t.Jb, theoKzObjects[_0x2458(1794)] * a, .3 * t.Jb);
            }
          } else {
            this.Of.lh();
          }
        };
        var n = function () {
          function e(t, e) {
            this.Nf = t;
            this.Pf = e;
          }
          e[_0x2458(1938)].mh = function (t, e, i, n, o, a) {
            this.Nf.Mg(true);
            this.Nf.nh(t, e);
            this.Nf.oh(i);
            this.Nf.qh(n);
            this.Pf.Mg(true);
            this.Pf.nh(t, e);
            this.Pf.oh(o);
            this.Pf.qh(a);
          };
          e[_0x2458(1938)].lh = function () {
            this.Nf.Mg(false);
            this.Pf.Mg(false);
          };
          return e;
        }();
        return t;
      }();
      var _0x57902d = function () {
        function e() {
          this.rh = 0;
          this.sh = 0;
          this.th = 0;
          this.uh = 0;
          this.vh = 0;
          this.wh = [];
        }
        function i(t, e) {
          for (var n = 0; n < t[_0x2458(1543)]; n++) {
            if (t[n].id == e) {
              return n;
            }
          }
          return -1;
        }
        e.prototype.a = function () {};
        e[_0x2458(1938)].ha = function (e) {
          if (!theoKzObjects[_0x2458(2016)]) {
            theoKzObjects[_0x2458(900)] = this;
            localStorage[_0x2458(1425)](_0x2458(1596), JSON[_0x2458(1812)](theoKzObjects));
          }
          switch (e) {
            case _0x4e8d86.ia:
              return this.rh;
            case _0x4e8d86.ja:
              return this.sh;
            case _0x4e8d86.ka:
              return this.th;
            case _0x4e8d86.la:
              return this.uh;
            case _0x4e8d86.ma:
              return this.vh;
          }
          return 0;
        };
        e[_0x2458(1938)].xh = function (e) {
          this.wh[_0x2458(1973)](e);
          this.yh();
        };
        e[_0x2458(1938)].Ia = function () {
          if (!(window[_0x2458(2086)] = _0x1ff066).p.W()) {
            return [32, 33, 34, 35][parseInt(Math[_0x2458(2002)]() * [32, 33, 34, 35][_0x2458(1543)])];
          }
          var i = (window[_0x2458(2086)] = _0x1ff066).p.Ac();
          var n = [];
          for (var o = 0; o < i[_0x2458(1847)][_0x2458(1543)]; o++) {
            var a = i[_0x2458(1847)][o];
            if (this.Ja(a.id, _0x4e8d86.ia)) {
              n[_0x2458(1973)](a);
            }
          }
          return 0 === n[_0x2458(1543)] ? 0 : n[parseInt(n[_0x2458(1543)] * Math[_0x2458(2002)]())].id;
        };
        e.prototype.zh = function () {
          if ((window[_0x2458(2086)] = _0x1ff066).p.W) {
            var t = (window[_0x2458(2086)] = _0x1ff066).p.Ac().skinArrayDict;
            var e = i(t, this.rh);
            if (!(e < 0)) {
              for (var n = e + 1; n < t.length; n++) {
                if (this.Ja(t[n].id, _0x4e8d86.ia)) {
                  this.rh = t[n].id;
                  return void this.yh();
                }
              }
              for (var o = 0; o < e; o++) {
                if (this.Ja(t[o].id, _0x4e8d86.ia)) {
                  this.rh = t[o].id;
                  return void this.yh();
                }
              }
            }
          }
        };
        e[_0x2458(1938)].Ah = function () {
          if ((window[_0x2458(2086)] = _0x1ff066).p.W) {
            var n = (window[_0x2458(2086)] = _0x1ff066).p.Ac().skinArrayDict;
            var o = i(n, this.rh);
            if (!(o < 0)) {
              for (var a = o - 1; a >= 0; a--) {
                if (this.Ja(n[a].id, _0x4e8d86.ia)) {
                  this.rh = n[a].id;
                  return void this.yh();
                }
              }
              for (var s = n[_0x2458(1543)] - 1; s > o; s--) {
                if (this.Ja(n[s].id, _0x4e8d86.ia)) {
                  this.rh = n[s].id;
                  return void this.yh();
                }
              }
            }
          }
        };
        e[_0x2458(1938)].Bh = function (t, e) {
          if (!(window[_0x2458(2086)] = _0x1ff066).p.W() || this.Ja(t, e)) {
            switch (e) {
              case _0x4e8d86.ia:
                return void (this.rh != t && (this.rh = t, this.yh()));
              case _0x4e8d86.ja:
                return void (this.sh != t && (this.sh = t, this.yh()));
              case _0x4e8d86.ka:
                return void (this.th != t && (this.th = t, this.yh()));
              case _0x4e8d86.la:
                return void (this.uh != t && (this.uh = t, this.yh()));
              case _0x4e8d86.ma:
                return void (this.vh != t && (this.vh = t, this.yh()));
            }
          }
        };
        e[_0x2458(1938)].Ja = function (e, n) {
          var a = function (t, e) {
            if (!(window[_0x2458(2086)] = _0x1ff066).p.W()) {
              return null;
            }
            var o = (window[_0x2458(2086)] = _0x1ff066).p.Ac();
            if (e === _0x4e8d86.ia) {
              var a = i(o[_0x2458(1847)], t);
              return a < 0 ? null : (console[_0x2458(923)](o[_0x2458(1847)][a]), o[_0x2458(1847)][a]);
            }
            switch (e) {
              case _0x4e8d86.ja:
                return o[_0x2458(2089)][t];
              case _0x4e8d86.ka:
                return o[_0x2458(793)][t];
              case _0x4e8d86.la:
                return o[_0x2458(1290)][t];
              case _0x4e8d86.ma:
                return o[_0x2458(524)][t];
            }
            return null;
          }(e, n);
          return null != a && ((window[_0x2458(2086)] = _0x1ff066).u.P() ? 0 == a[_0x2458(1206)] && !a.nonbuyable || (window[_0x2458(2086)] = _0x1ff066).u.Ch(e, n) : a[_0x2458(1814)]);
        };
        e[_0x2458(1938)].yh = function () {
          for (var i = 0; i < this.wh[_0x2458(1543)]; i++) {
            this.wh[i]();
          }
        };
        return e;
      }();
      var _0x4e8d86 = function () {
        function e() {}
        e.ia = "SKIN";
        e.ja = _0x2458(1127);
        e.ka = _0x2458(1284);
        e.la = "GLASSES";
        e.ma = _0x2458(1300);
        return e;
      }();
      var _0x4cf055 = function (t, e, i, n, o, a, s, r, c) {
        this.Hc = new _0x53055c._b(t, new _0x53055c.dc(e, i, n, o));
        this.Dh = e;
        this.Eh = i;
        this.Fh = n;
        this.Gh = o;
        this.Hh = a || (r || n) / 2;
        this.Ih = s || (c || o) / 2;
        this.Jh = r || n;
        this.Kh = c || o;
        this.Lh = .5 - (this.Hh - .5 * this.Jh) / this.Fh;
        this.Mh = .5 - (this.Ih - .5 * this.Kh) / this.Gh;
        this.Nh = this.Fh / this.Jh;
        this.Oh = this.Gh / this.Kh;
      };
      var _0x388025 = function () {
        function t() {
          this[_0x2458(1674)] = e;
          this.Fe = new _0x53055c._b(_0x53055c.$b[_0x2458(1054)]("/images/bg-obstacle.png"));
          var n;
          var o = _0x53055c.$b.from(_0x2458(1795));
          this.Ge = [new _0x53055c._b(o, new _0x53055c.dc(0, 0, 128, 128)), new _0x53055c._b(o, new _0x53055c.dc(0, 0, 128, 128)), new _0x53055c._b(o, new _0x53055c.dc(0, 0, 128, 128)), new _0x53055c._b(o, new _0x53055c.dc(0, 0, 128, 128)), new _0x53055c._b(o, new _0x53055c.dc(0, 0, 128, 128)), new _0x53055c._b(o, new _0x53055c.dc(0, 0, 128, 128)), new _0x53055c._b(o, new _0x53055c.dc(0, 0, 128, 128)), new _0x53055c._b(o, new _0x53055c.dc(0, 0, 128, 128)), new _0x53055c._b(o, new _0x53055c.dc(0, 0, 128, 128)), new _0x53055c._b(o, new _0x53055c.dc(0, 0, 128, 128)), new _0x53055c._b(o, new _0x53055c.dc(0, 0, 128, 128)), new _0x53055c._b(o, new _0x53055c.dc(0, 0, 128, 128)), new _0x53055c._b(o, new _0x53055c.dc(0, 0, 128, 128)), new _0x53055c._b(o, new _0x53055c.dc(0, 0, 128, 128)), new _0x53055c._b(o, new _0x53055c.dc(0, 0, 128, 128)), new _0x53055c._b(o, new _0x53055c.dc(0, 0, 128, 128))];
          this.Cf = new _0x53055c._b(e());
          (n = _0x53055c.$b.from("/images/bg-pattern-pow2-TEAM2.png"))[_0x2458(1479)] = _0x53055c.kc.lc;
          this.Df = new _0x53055c._b(n);
          this.Af = new _0x53055c._b(_0x53055c.$b[_0x2458(1054)]("/images/lens.png"));
          var a = _0x53055c.$b[_0x2458(1054)]("https://i.imgur.com/VPh6J5u.png");
          this.Ph = new _0x4cf055(a, 158, 86, 67, 124, 148, 63.5, 128, 128);
          this.Qh = new _0x4cf055(a, 158, 4, 87, 74, 203, 63.5, 128, 128);
          var r;
          var c = _0x53055c.$b[_0x2458(1054)](_0x2458(2119));
          var l = _0x53055c.$b[_0x2458(1054)](_0x2458(1584));
          this[_0x2458(680)] = new _0x4cf055(l, 0, 0, 256, 256, 170.5, -163.5, 128, 128);
          this.Rh = new _0x4cf055(c, 156, 4, 87, 74, 285, 63.5, 128, 128);
          this[_0x2458(641)] = new _0x4cf055(c, 156, 80, 87, 60, 170, 1.5, 128, 128);
          this[_0x2458(1830)] = new _0x4cf055(c, 156, 140, 87, 60, 170, 128.5, 128, 128);
          this[_0x2458(1475)] = new _0x4cf055(c, 158, 200, 95, 55, 265, 128.5, 128, 128);
          this[_0x2458(1853)] = new _0x4cf055(c, 79, 8, 75, 77, 265, 1.5, 128, 128);
          (r = window.document.createElement(_0x2458(2066)))[_0x2458(1350)] = 80;
          r[_0x2458(2052)] = 80;
          this.Ug = {
            te: r,
            Tg: r.getContext("2d"),
            Hc: new _0x53055c._b(_0x53055c.$b[_0x2458(1054)](r))
          };
          this.Bd = {};
          this.yd = {};
          this.Sh = [];
          this.Th = null;
        }
        var e = function (t) {
          var i = _0x53055c.$b.from(t || "/images/bg-pattern-pow2-ARENA.png");
          i[_0x2458(1479)] = _0x53055c.kc.lc;
          return i;
        };
        t[_0x2458(1938)].a = function (t) {
          function e() {
            if (0 == --i) {
              t();
            }
          }
          var i = 4;
          this.Bd = {};
          e();
          this.yd = {};
          e();
          this.Sh = [];
          e();
          this.Th = null;
          e();
        };
        return t;
      }();
      var _0x5a0a49 = function () {
        function e() {
          this.H = new _0x4d8a7a();
          this.F = new _0x3b58a2();
          this.Uh = new _0x189a0c();
          this.Vh = new _0x1b9e86();
          this.Wh = new _0x636b85();
          this.Xh = new _0xf48613();
          this.Yh = new _0x1d3509();
          this.Zh = new _0xa28ceb();
          this.xa = new _0x5b3fc2();
          this.zwset = new _0x5dfcad();
          this.$h = new _0x2c583a();
          this._h = new _0x54c61d();
          this.ai = new _0x394d89();
          this.aa = new _0x1a2f3b();
          this.ua = new _0x1a3189();
          this.pa = new _0xfcfa10();
          this.bi = [];
          this.ci = null;
        }
        function i(t, e) {
          if (e != t.length + 1) {
            var n = t[e];
            _0x46bcc8(t, e + 1, e, t[_0x2458(1543)] - e - 1);
            t[t.length - 1] = n;
          }
        }
        e.prototype.a = function () {
          this.bi = [this.H, this.F, this.Uh, this.Vh, this.Wh, this.Xh, this.Yh, this.Zh, this.xa, this[_0x2458(1592)], this.$h, this._h, this.ai, this.aa, this.ua, this.pa];
          for (var e = 0; e < this.bi.length; e++) {
            this.bi[e].a();
          }
          this.ci = new _0x3606ae(_0x501845.di);
        };
        e.prototype.Qa = function (t, e) {
          for (var n = this.bi[_0x2458(1543)] - 1; n >= 0; n--) {
            this.bi[n].Pa(t, e);
          }
          if (this.bi[0] != this.H && this.bi[0] != this.pa && null != this.ci) {
            this.ci.Pa(t, e);
          }
        };
        e[_0x2458(1938)].Ra = function () {
          for (var i = this.bi[_0x2458(1543)] - 1; i >= 0; i--) {
            this.bi[i].Ra();
          }
          if (null != this.ci) {
            this.ci.Ra();
          }
        };
        e[_0x2458(1938)].I = function (t) {
          var e = function (t, e) {
            for (var i = 0; i < t.length; i++) {
              if (t[i] == e) {
                return i;
              }
            }
            return -1;
          }(this.bi, t);
          if (!(e < 0)) {
            this.bi[0].ei();
            (function (t, e) {
              if (0 != e) {
                var i = t[e];
                _0x46bcc8(t, 0, 1, e);
                t[0] = i;
              }
            })(this.bi, e);
            this.fi();
          }
        };
        e[_0x2458(1938)].gi = function () {
          this.bi[0].ei();
          do {
            i(this.bi, 0);
          } while (this.bi[0].rc != 1);
          this.fi();
        };
        e.prototype.fi = function () {
          var t = this.bi[0];
          t.ii();
          t.ji();
          this.ki();
        };
        e[_0x2458(1938)].li = function () {
          return 0 != this.bi[_0x2458(1543)] && this.bi[0].rc == 1 && this.aa.mi();
        };
        e[_0x2458(1938)].ki = function () {
          if (this.li()) {
            this.I(this.aa);
          }
        };
        return e;
      }();
      var _0x5f4b22 = function () {
        function t() {
          this.ag = [];
          this.$f = [];
        }
        t.Vg = function (t, e) {
          return {
            bg: t,
            M: e
          };
        };
        t.Wg = function (t, e) {
          return {
            _f: t,
            M: e
          };
        };
        return t;
      }();
      var _0x212a4d = function () {
        function e() {
          this.ni = [];
          this.oi = [];
          this.pi = [];
          this.qi = false;
          this.ri = "guest";
          this.si = {};
          this.ti = null;
        }
        e.prototype.a = function () {
          this.vi();
        };
        e.prototype.X = function () {
          return this.qi ? this.si[_0x2458(512)] : "";
        };
        e[_0x2458(1938)].wi = function () {
          return this.qi ? this.si[_0x2458(1079)] : "";
        };
        e[_0x2458(1938)].ga = function () {
          return this.qi ? this.si[_0x2458(1908)] : "";
        };
        e[_0x2458(1938)].xi = function () {
          return this.qi ? this.si[_0x2458(1819)] : _0x40e1c9;
        };
        e.prototype.yi = function () {
          return this.qi && this.si.isBuyer;
        };
        e[_0x2458(1938)].Z = function () {
          return this.qi && this.si[_0x2458(501)];
        };
        e.prototype.zi = function () {
          return this.qi ? this.si[_0x2458(1060)] : 0;
        };
        e[_0x2458(1938)].Ai = function () {
          return this.qi ? this.si[_0x2458(2040)] : 1;
        };
        e[_0x2458(1938)].Bi = function () {
          return this.qi ? this.si[_0x2458(1605)] : 0;
        };
        e[_0x2458(1938)].Ci = function () {
          return this.qi ? this.si[_0x2458(1829)] : 50;
        };
        e[_0x2458(1938)].Di = function () {
          return this.qi ? this.si[_0x2458(815)] : 0;
        };
        e[_0x2458(1938)].Ei = function () {
          return this.qi ? this.si.eyesId : 0;
        };
        e[_0x2458(1938)].Fi = function () {
          return this.qi ? this.si[_0x2458(1019)] : 0;
        };
        e[_0x2458(1938)].Gi = function () {
          return this.qi ? this.si.glassesId : 0;
        };
        e[_0x2458(1938)].Hi = function () {
          return this.qi ? this.si[_0x2458(1849)] : 0;
        };
        e.prototype.Ii = function () {
          return this.qi ? this.si.highScore : 0;
        };
        e[_0x2458(1938)].Ji = function () {
          return this.qi ? this.si[_0x2458(1356)] : 0;
        };
        e[_0x2458(1938)].Ki = function () {
          return this.qi ? this.si[_0x2458(2096)] : 0;
        };
        e[_0x2458(1938)].Li = function () {
          return this.qi ? this.si[_0x2458(936)] : 0;
        };
        e.prototype.Mi = function () {
          return this.qi ? this.si[_0x2458(665)] : 0;
        };
        e[_0x2458(1938)].Ni = function () {
          return this.qi ? this.si[_0x2458(1070)] : 0;
        };
        e[_0x2458(1938)].Oi = function () {
          return this.qi ? this.si[_0x2458(856)] : {};
        };
        e[_0x2458(1938)].V = function (t) {
          this.ni.push(t);
          t();
        };
        e.prototype.Pi = function (e) {
          this.oi[_0x2458(1973)](e);
          e();
        };
        e[_0x2458(1938)].Qi = function (e) {
          this.pi[_0x2458(1973)](e);
        };
        e[_0x2458(1938)].Ch = function (e, i) {
          var o = this.si[_0x2458(619)][_0x2458(1599)](theoKzObjects.pL || []);
          if (!o) {
            return false;
          }
          for (var a = 0; a < o[_0x2458(1543)]; a++) {
            var s = o[a];
            if (s.id == e && s[_0x2458(2059)] === i) {
              return true;
            }
          }
          return false;
        };
        e.prototype.P = function () {
          return this.qi;
        };
        e.prototype.ea = function () {
          return this.ri;
        };
        e[_0x2458(1938)].Q = function (t) {
          var e = this;
          if (this.qi) {
            this.Ri(function (i) {
              if (i) {
                var n = e.zi();
                var o = e.Ai();
                e.si = i;
                _0xf72104(e.si);
                e.Si();
                var a = e.zi();
                var s = e.Ai();
                if (s > 1 && s != o) {
                  (window[_0x2458(2086)] = _0x1ff066).s.aa.Ti(new _0x20b128(s));
                }
                var r = a - n;
                if (r >= 20) {
                  (window[_0x2458(2086)] = _0x1ff066).s.aa.Ti(new _0x436162(r));
                }
              }
              if (t) {
                t();
              }
            });
          }
        };
        e[_0x2458(1938)].Ri = function (e) {
          $.get(_0x7fa75 + "/pub/wuid/" + this.ri + _0x2458(1026), function (t) {
            e(t[_0x2458(1435)]);
          });
        };
        e[_0x2458(1938)].Ui = function (e, i, n) {
          var a = this;
          $.get(_0x7fa75 + _0x2458(1903) + this.ri + _0x2458(886) + e + "&type=" + i, function (t) {
            if (1200 == t.code) {
              a.Q(n);
            } else {
              n();
            }
          })[_0x2458(806)](function () {
            n();
          });
        };
        e[_0x2458(1938)].Vi = function () {
          var i = this;
          this.Wi();
          if (_0x2458(2108) != typeof FB) {
            FB.getLoginStatus(function (t) {
              if (_0x2458(1064) !== t.status) {
                FB.login(function (t) {
                  if (_0x2458(1064) === t[_0x2458(1801)] && t[_0x2458(1872)] && t[_0x2458(1872)][_0x2458(1728)]) {
                    i.Yi("facebook", "fb_" + t[_0x2458(1872)][_0x2458(1728)]);
                  } else {
                    i.Xi();
                  }
                });
              } else if (t[_0x2458(1872)] && t[_0x2458(1872)][_0x2458(1728)]) {
                i.Yi(_0x2458(508), _0x2458(1465) + t.authResponse[_0x2458(1728)]);
              } else {
                i.Xi();
              }
            });
          } else {
            this.Xi();
          }
        };
        e[_0x2458(1938)].Zi = function () {
          var i = this;
          this.Wi();
          if (undefined !== GoogleAuth) {
            console.log(_0x2458(920));
            GoogleAuth[_0x2458(664)](function () {
              console[_0x2458(923)](_0x2458(585));
              if (GoogleAuth.isSignedIn[_0x2458(824)]()) {
                console[_0x2458(923)]("gsi:sil");
                var n = GoogleAuth.currentUser[_0x2458(824)]();
                i.Yi(_0x2458(530), _0x2458(1987) + n.getAuthResponse()[_0x2458(1533)]);
              } else {
                GoogleAuth[_0x2458(570)]()[_0x2458(664)](function (e) {
                  if (typeof e[_0x2458(682)] !== _0x2458(2108)) {
                    console.log(_0x2458(1256) + e[_0x2458(682)]);
                    return void i.Xi();
                  }
                  if (e[_0x2458(1379)]()) {
                    console.log(_0x2458(2035));
                    i.Yi("google", _0x2458(1987) + e[_0x2458(734)]().id_token);
                  } else {
                    console[_0x2458(923)](_0x2458(606));
                    i.Xi();
                  }
                });
              }
            });
          } else {
            this.Xi();
          }
        };
        e[_0x2458(1938)].Wi = function () {
          console[_0x2458(923)](_0x2458(1658) + this.qi);
          var n = this.ri;
          var o = this.ti;
          this.qi = false;
          this.ri = "guest";
          this.si = {};
          this.ti = null;
          _0x350985(_0x166161.Oe, "", 60);
          switch (o) {
            case _0x2458(508):
              this.$i();
              break;
            case "google":
              this._i();
          }
          if (n !== this.ri) {
            this.aj();
          } else {
            this.Si();
          }
        };
        e[_0x2458(1938)].bj = function () {
          console.log("dA");
          if (this.qi) {
            $.get(_0x7fa75 + _0x2458(1903) + this.ri + "/deleteAccount", function (t) {
              if (1200 === t[_0x2458(432)]) {
                console[_0x2458(923)](_0x2458(933));
              } else {
                console[_0x2458(923)](_0x2458(809));
              }
            })[_0x2458(806)](function () {
              console[_0x2458(923)]("dA: FAIL");
            });
          }
        };
        e.prototype.vi = function () {
          console[_0x2458(923)]("rs");
          var i = _0x4961dc(_0x166161.Oe);
          var n = this;
          if (_0x2458(508) == i) {
            console[_0x2458(923)](_0x2458(1562));
            (function t() {
              if (_0x2458(2108) != typeof FB) {
                n.Vi();
              } else {
                setTimeout(t, 100);
              }
            })();
          } else if (_0x2458(530) == i) {
            console[_0x2458(923)](_0x2458(584));
            (function t() {
              if (undefined !== GoogleAuth) {
                n.Zi();
              } else {
                setTimeout(t, 100);
              }
            })();
          } else {
            console[_0x2458(923)](_0x2458(1884));
            this.Wi();
          }
        };
        e.prototype.aj = function () {
          for (var i = 0; i < this.ni[_0x2458(1543)]; i++) {
            this.ni[i]();
          }
          this.Si();
        };
        e[_0x2458(1938)].Si = function () {
          for (var i = 0; i < this.oi[_0x2458(1543)]; i++) {
            this.oi[i]();
          }
          var n = this.pi;
          this.pi = [];
          for (var o = 0; o < n[_0x2458(1543)]; o++) {
            n[o]();
          }
        };
        e[_0x2458(1938)].Yi = function (e, i) {
          var o = this;
          $[_0x2458(824)](_0x7fa75 + _0x2458(1903) + i + "/login", function (t) {
            if (t && t[_0x2458(1435)]) {
              checkSubscriptionExpired(t[_0x2458(1435)][_0x2458(512)]);
              registerUpdatePlayer(t.user_data);
              _0xf72104(t[_0x2458(1435)]);
              var s = this.ri;
              o.qi = true;
              o.ri = i;
              o.si = t.user_data;
              o.ti = e;
              _0x350985(_0x166161.Oe, o.ti, 60);
              console[_0x2458(923)](o);
              showServer2(_0x1ff066);
              showVersionPays(t);
              zw_userId = t[_0x2458(1435)][_0x2458(512)];
              $(_0x2458(745))[_0x2458(792)](zw_userId);
              $(_0x2458(813)).attr("src", t[_0x2458(1435)][_0x2458(1819)]);
              $(_0x2458(1640)).text(_0x2458(1755) + zw_userId);
              theoKzObjects[_0x2458(2016)] = false;
              if (s !== i) {
                o.aj();
              } else {
                o.Si();
              }
            } else {
              o.Xi();
            }
          })[_0x2458(806)](function () {
            o.Xi();
          });
        };
        e.prototype.Xi = function () {
          this.Wi();
        };
        e.prototype.$i = function () {
          console[_0x2458(923)]("lo:fb");
          FB[_0x2458(1228)](function () {});
        };
        e[_0x2458(1938)]._i = function () {
          console[_0x2458(923)]("lo:gg");
          GoogleAuth[_0x2458(1413)]();
        };
        return e;
      }();
      var _0x1f9450 = function () {
        function e() {
          this.cj = {};
          this.cj[s] = [1, .5, .25, .5];
          this.cj[r] = _0x53055c._b[_0x2458(653)];
          this.cj[c] = [0, 0];
          this.cj[l] = [0, 0];
          var e = _0x53055c.cc[_0x2458(1054)](x, u, this.cj);
          this.zf = new _0x53055c.hc(d, e);
        }
        var i = _0x2458(579) + Math[_0x2458(2002)]()[_0x2458(1203)](36).substring(2, 15);
        var n = _0x2458(1892) + Math[_0x2458(2002)]()[_0x2458(1203)](36).substring(2, 15);
        var o = atob("dHJhbnNsYXRpb25NYXRyaXg=");
        var a = atob(_0x2458(1003));
        var s = _0x2458(1332) + Math[_0x2458(2002)]()[_0x2458(1203)](36).substring(2, 15);
        var r = _0x2458(729) + Math[_0x2458(2002)]()[_0x2458(1203)](36).substring(2, 15);
        var c = _0x2458(964) + Math[_0x2458(2002)]()[_0x2458(1203)](36).substring(2, 15);
        var l = _0x2458(1518) + Math[_0x2458(2002)]()[_0x2458(1203)](36).substring(2, 15);
        var h = _0x2458(925) + Math[_0x2458(2002)]()[_0x2458(1203)](36).substring(2, 15);
        var d = new _0x53055c.gc()[_0x2458(470)](i, [-.5, -.5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5, .5], 2)[_0x2458(470)](n, [-.5, -.5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5, .5], 2);
        var x = atob(_0x2458(1006)) + i + atob(_0x2458(980)) + n + atob(_0x2458(989)) + o + atob(_0x2458(989)) + a + atob(_0x2458(1151)) + h + atob("O3ZvaWQgbWFpbigpew==") + h + atob("PQ==") + n + atob(_0x2458(2063)) + a + atob("Kg==") + o + atob("KnZlYzMo") + i + atob(_0x2458(1399));
        var u = atob(_0x2458(574)) + h + atob(_0x2458(541)) + s + atob(_0x2458(1175)) + r + atob(_0x2458(833)) + c + atob(_0x2458(833)) + l + atob(_0x2458(1190)) + h + atob(_0x2458(539)) + c + atob(_0x2458(1999)) + l + atob(_0x2458(1554)) + s + atob(_0x2458(1567)) + r + atob("LGNvb3JkKSowLjMrdl9jb2xvcl9taXguYSp2ZWM0KHZfY29sb3JfbWl4LnJnYiwwLjApO30=");
        e[_0x2458(1938)].Hf = function (t, e, i, n) {
          var o = this.cj[s];
          o[0] = t;
          o[1] = e;
          o[2] = i;
          o[3] = n;
        };
        e[_0x2458(1938)].Bf = function (t) {
          this.cj[r] = t;
        };
        e.prototype.Te = function (e, i, n, o) {
          this.zf[_0x2458(798)].x = e;
          this.zf.position.y = i;
          this.zf[_0x2458(2071)].x = n;
          this.zf.scale.y = o;
          var s = this.cj[c];
          s[0] = .2520615384615385 * n;
          s[1] = .4357063736263738 * o;
          var r = this.cj[l];
          r[0] = .2520615384615385 * e;
          r[1] = .4357063736263738 * i;
        };
        return e;
      }();
      var _0x3c90b5 = function () {
        function e() {
          this.jh = new _0x53055c.ec();
          this.dj = 0;
          this.ej = 0;
          this[_0x2458(1759)] = null;
          this.cachedScaleX = 0;
          this[_0x2458(855)] = 0;
        }
        e[_0x2458(1938)].kh = function (e) {
          if (this[_0x2458(1759)] !== e.Hc) {
            this[_0x2458(1759)] = e.Hc;
            this.jh[_0x2458(1392)] = e.Hc;
            this.jh[_0x2458(1101)].set(e.Lh, e.Mh);
            const t = e.Hc[_0x2458(1350)];
            const n = e.Hc[_0x2458(2052)];
            const o = e.Nh / t;
            const a = e.Oh / n;
            if (this[_0x2458(1184)] !== o || this[_0x2458(855)] !== a) {
              this.dj = o;
              this.ej = a;
              this.jh[_0x2458(2071)].set(o, a);
              this[_0x2458(1184)] = o;
              this[_0x2458(855)] = a;
            }
          }
        };
        e[_0x2458(1938)].oh = function (e) {
          const n = this.dj * e;
          const o = this.ej * e;
          if (this.jh[_0x2458(2071)].x !== n || this.jh[_0x2458(2071)].y !== o) {
            this.jh.scale[_0x2458(1756)](n, o);
          }
        };
        e[_0x2458(1938)].fj = function (e) {
          this.jh[_0x2458(1382)] = e;
        };
        e[_0x2458(1938)].nh = function (e, i) {
          this.jh[_0x2458(798)][_0x2458(1756)](e, i);
        };
        e[_0x2458(1938)].Mg = function (e) {
          this.jh[_0x2458(987)] = e;
        };
        e[_0x2458(1938)].gj = function () {
          return this.jh[_0x2458(987)];
        };
        e[_0x2458(1938)].qh = function (e) {
          this.jh[_0x2458(1240)] = e;
        };
        e[_0x2458(1938)].Mf = function () {
          return this.jh;
        };
        e.prototype.ih = function () {
          _0x31c7b2(this.jh);
        };
        return e;
      }();
      var _0x241e41 = function () {
        function e(t) {
          this.fb = t;
          this.Mb = new _0x241e41[_0x2458(1263)]();
          this.Hb = false;
          this.Ib = true;
          this.hj = false;
          this.Db = 0;
          this.ij = 0;
          this.Jb = 1;
          this.jj = 0;
          this.M = 0;
          this.Ff = {};
          this.kj = 0;
          this.lj = new Float32Array(400);
          this.mj = new Float32Array(400);
          this.nj = new Float32Array(400);
          this.oj = null;
          this.pj = null;
          this.qj = null;
          this.b = null;
          this[_0x2458(1429)] = null;
          this.Tb();
        }
        e.prototype.Kb = function () {
          if (null != this.pj) {
            _0x31c7b2(this.pj.Rf);
          }
          if (null != this.qj) {
            _0x31c7b2(this.qj);
          }
          if (null != this.b) {
            _0x31c7b2(this.b);
          }
          if (null != this[_0x2458(1429)]) {
            _0x31c7b2(this.zw_msg);
          }
        };
        e.prototype.Tb = function () {
          this.Ig(.25);
          this.Mb.ad = "";
          this.Ib = true;
          this.Ff = {};
          this.Mg(false);
        };
        e[_0x2458(1938)].Fg = function (t) {
          this.Mb = t;
          this.rj(this.Hb);
        };
        e.prototype.Mg = function (t) {
          var e = this.Hb;
          this.Hb = t;
          this.rj(e);
        };
        e[_0x2458(1938)].Ig = function (e) {
          this.M = 50 * e;
          var o = e;
          if (e > this.fb.cf) {
            o = Math[_0x2458(764)]((e - this.fb.cf) / this.fb.df) * this.fb.df + this.fb.cf;
          }
          var a = Math[_0x2458(1329)](4 * Math[_0x2458(1183)](5 * o, .707106781186548) + 25);
          var s = Math[_0x2458(1940)](200, Math.max(3, 5 * (a - 5) + 1));
          var r = this.kj;
          this.Db = .025 * (5 + .9 * a);
          this.kj = Math.floor(s);
          this.ij = s - this.kj;
          if (r > 0 && r < this.kj) {
            var c = this.lj[2 * r - 2];
            var l = this.lj[2 * r - 1];
            var h = this.mj[2 * r - 2];
            var d = this.mj[2 * r - 1];
            var x = this.nj[2 * r - 2];
            var u = this.nj[2 * r - 1];
            for (var _ = r; _ < this.kj; _++) {
              this.lj[2 * _] = c;
              this.lj[2 * _ + 1] = l;
              this.mj[2 * _] = h;
              this.mj[2 * _ + 1] = d;
              this.nj[2 * _] = x;
              this.nj[2 * _ + 1] = u;
            }
          }
        };
        e[_0x2458(1938)].Lg = function (t, e) {
          this.kj = e;
          for (var i = 0; i < this.kj; i++) {
            this.lj[2 * i] = this.mj[2 * i] = this.nj[2 * i] = t();
            this.lj[2 * i + 1] = this.mj[2 * i + 1] = this.nj[2 * i + 1] = t();
          }
        };
        e.prototype.Kg = function (t, e, i) {
          this.hj = i;
          for (var n = 0; n < this.kj; n++) {
            this.lj[2 * n] = this.mj[2 * n];
            this.lj[2 * n + 1] = this.mj[2 * n + 1];
          }
          var o = t - this.mj[0];
          var a = e - this.mj[1];
          this.sj(o, a, this.kj, this.mj);
        };
        e[_0x2458(1938)].sj = function (t, e, i, n) {
          var o = Math.hypot(t, e);
          if (!(o <= 0)) {
            var a = n[0];
            var s = undefined;
            n[0] += t;
            var r = n[1];
            var c = undefined;
            n[1] += e;
            var l = this.Db / (this.Db + o);
            var h = 1 - 2 * l;
            var d = 1;
            for (var x = i - 1; d < x; d++) {
              s = n[2 * d];
              n[2 * d] = n[2 * d - 2] * h + (s + a) * l;
              a = s;
              c = n[2 * d + 1];
              n[2 * d + 1] = n[2 * d - 1] * h + (c + r) * l;
              r = c;
            }
            h = 1 - 2 * (l = this.ij * this.Db / (this.ij * this.Db + o));
            n[2 * i - 2] = n[2 * i - 4] * h + (n[2 * i - 2] + a) * l;
            n[2 * i - 1] = n[2 * i - 3] * h + (n[2 * i - 1] + r) * l;
          }
        };
        e[_0x2458(1938)].Gf = function () {
          return {
            x: this.nj[0],
            y: this.nj[1]
          };
        };
        e[_0x2458(1938)].Hg = function (e, i) {
          var o = 1e6;
          var a = e;
          var s = i;
          for (var r = 0; r < this.kj; r++) {
            var c = this.nj[2 * r];
            var l = this.nj[2 * r + 1];
            var h = Math[_0x2458(1041)](e - c, i - l);
            if (h < o) {
              o = h;
              a = c;
              s = l;
            }
          }
          return {
            x: a,
            y: s,
            distance: o
          };
        };
        e.prototype.vb = function (t) {
          this.oj = t;
        };
        e[_0x2458(1938)].Fb = function (e, i) {
          this.Jb = (this.Ib ? this.hj ? .9 + .1 * Math[_0x2458(1651)](e / 400 * Math.PI) : 1 : 0) > this.Jb ? Math[_0x2458(1940)](this.Ib ? this.hj ? .9 + .1 * Math[_0x2458(1651)](e / 400 * Math.PI) : 1 : 0, this.Jb + i * 0.00125) : Math[_0x2458(1478)](this.Ib ? this.hj ? .9 + .1 * Math[_0x2458(1651)](e / 400 * Math.PI) : 1 : 0, this.Jb - i * 0.00125);
          this.jj = (this.Ib ? this.hj ? 1 : 0 : 1) > this.jj ? Math[_0x2458(1940)](this.Ib ? this.hj ? 1 : 0 : 1, this.jj + i * .0025) : Math[_0x2458(1478)](this.Ib ? this.hj ? 1 : 0 : 1, this.jj - i * .0025);
          if (null != this.pj) {
            this.pj.Rf[_0x2458(1240)] = this.Jb;
          }
          if (null != this.qj) {
            this.qj.alpha = this.Jb;
          }
        };
        e.prototype.Gb = function (e, i, n, o) {
          if (this.Hb && this.Ib) {
            var s = Math.pow(.11112, i / 95);
            for (var r = 0; r < this.kj; r++) {
              var l = this.lj[2 * r] * (1 - n) + this.mj[2 * r] * n;
              var h = this.lj[2 * r + 1] * (1 - n) + this.mj[2 * r + 1] * n;
              this.nj[2 * r] = l * (1 - s) + this.nj[2 * r] * s;
              this.nj[2 * r + 1] = h * (1 - s) + this.nj[2 * r + 1] * s;
            }
          }
          if (null != this.pj && this.Hb) {
            this.pj.tj(this, e, i, o);
          }
          if (null != this.qj) {
            this.qj.If.x = this.nj[0];
            this.qj.If.y = this.nj[1] - 3 * this.Db;
          }
          if (null != this.b) {
            var d;
            this.b.x = this.qj[_0x2458(798)].x;
            this.b.y = this.qj.position.y + 1;
            for (d in this.b.he) if (null == this.Ff[d] || !this.Ff[d].sc) {
              this.b[_0x2458(465)](this.b.he[d]);
              delete this.b.he[d];
            }
            var x;
            var u = 0;
            c = 0;
            for (x in this.Ff) if (("0" === x || "1" === x) && (i = this.Ff[x]) && i.sc && theoKzObjects[_0x2458(950)]) {
              var _ = this.b.he[x];
              if (!_) {
                const t = portionTimes[x];
                const e = timeFontColors2[x];
                let n = i.tc;
                if (.99 === n) {
                  n = 1;
                }
                let o = t - parseInt(n * t);
                _ = new PIXI[_0x2458(1195)](o, {
                  align: _0x2458(1086),
                  fill: e,
                  fontSize: 20,
                  lineJoin: "round",
                  whiteSpace: "normal",
                  wordWrap: true,
                  dropShadow: true,
                  dropShadowBlur: 6,
                  fontWeight: _0x2458(444)
                });
                this.b.he[x] = _;
                this.b[_0x2458(542)](_);
              }
              const t = portionTimes[x];
              let e = i.tc;
              if (.99 === e) {
                e = 1;
              }
              let n = t - parseInt(e * t);
              _[_0x2458(792)] = n;
              _.x = u;
              _.y = 0;
              u += _[_0x2458(1350)] + 10;
            }
            this.b[_0x2458(580)].x = .5 * this.b[_0x2458(1350)];
            this.b[_0x2458(580)].y = this.b[_0x2458(2052)];
          }
        };
        e[_0x2458(1938)].rj = function (e) {
          if (this.Hb) {
            if (!e) {
              this.uj();
            }
          } else {
            if (null != this.pj) {
              _0x31c7b2(this.pj.Rf);
            }
            if (null != this.qj) {
              _0x31c7b2(this.qj);
            }
            if (null != this.b) {
              _0x31c7b2(this.b);
            }
            if (null != this[_0x2458(1429)]) {
              _0x31c7b2(this[_0x2458(1429)]);
            }
          }
        };
        e[_0x2458(1938)].uj = function () {
          var i = window[_0x2458(2086)] = _0x1ff066;
          if (null == this.pj) {
            this.pj = new _0x4437d9();
          } else {
            _0x31c7b2(this.pj.Rf);
          }
          this.pj.hh(i.o.fb.af, i.p.Dc().ed(this.Mb.cg), i.p.Dc().dd(this.Mb.dg), i.p.Dc().fd(this.Mb.Bg), i.p.Dc().gd(this.Mb.Cg), i.p.Dc().hd(this.Mb.Dg), i.p.Dc().jd(this.Mb.Eg));
          if (null == this.qj) {
            this.qj = new _0x1f99c2("");
            this.qj[_0x2458(437)][_0x2458(583)] = fonts[currentFontIndex];
            this.qj.anchor[_0x2458(1756)](.5);
          } else {
            _0x31c7b2(this.qj);
          }
          if (null == this.b) {
            this.b = new _0x53055c.Zb();
            this.b.he = {};
          } else {
            _0x31c7b2(this.b);
          }
          if (null == this[_0x2458(1429)]) {
            this[_0x2458(1429)] = new _0x53055c.Zb();
          } else {
            _0x31c7b2(this.zw_msg);
          }
          this.qj[_0x2458(437)][_0x2458(1462)] = 14;
          this.qj.style[_0x2458(817)] = i.p.Dc().dd(this.Mb.dg)._c;
          this.qj.text = this.Mb.ad;
          this.oj.Qf(this.Mb.Lb, this.pj, this.qj, this.b, this[_0x2458(1429)]);
        };
        e[_0x2458(1263)] = function () {
          this.Lb = 0;
          this.cg = _0x38582a.TEAM_DEFAULT;
          this.dg = 0;
          this.Bg = 0;
          this.Cg = 0;
          this.Dg = 0;
          this.Eg = 0;
          this.ad = "";
        };
        return e;
      }();
      var _0x1f99c2 = _0x22ee20(_0x53055c.fc, function (t, e, i) {
        _0x53055c.fc[_0x2458(1459)](this, t, e, i);
        this.If = {
          x: 0,
          y: 0
        };
      });
      var _0x4437d9 = function () {
        function e() {
          this.Rf = new _0x53055c.Zb();
          this.Rf[_0x2458(1126)] = true;
          this.vj = new w();
          this.vj[_0x2458(941)] = 1.6;
          this.wj = 0;
          this.xj = new Array(797);
          this.xj[0] = this.yj(0, new _0x3c90b5(), new _0x3c90b5());
          for (let t = 0; t < 797; t++) {
            this.xj[t] = this.yj(t, new _0x3c90b5(), new _0x3c90b5());
          }
          this.zj = 0;
          this.Aj = 0;
          this.Bj = 0;
        }
        var o = .1 * Math.PI;
        var a = -.06640625;
        var c = -.03515625;
        var l = -.0625;
        var u = -.1015625;
        var b = -.125;
        var m = -.1015625;
        e[_0x2458(1938)].yj = function (e, o, a) {
          var r = new y(o, a);
          const c = .001 * (2 * (797 - e) + 1 + 3);
          const l = .001 * (2 * (797 - e) - 2 + 3);
          o.jh[_0x2458(941)] = c;
          a.jh.zIndex = l;
          return r;
        };
        e[_0x2458(1938)].hh = function (e, i, n, o, a, s, r) {
          var l = n.Zc;
          var h = e == 16 ? i.bd.$c : n.$c;
          if (l[_0x2458(1543)] && h[_0x2458(1543)]) {
            this.xj[_0x2458(919)]((t, e) => {
              t.Nf.kh(l[e % l[_0x2458(1543)]]);
              t.Pf.kh(h[e % h[_0x2458(1543)]]);
            });
          }
          this.vj.hh(o, a, s, r);
        };
        var w;
        (w = _0x22ee20(_0x53055c.Zb, function () {
          _0x53055c.Zb.call(this);
          this[_0x2458(1126)] = true;
          this.Cj = [];
          this.Dj = [];
          this.Ej = [];
          this.Fj = [];
          this.Gj = new _0x53055c.Zb();
          this.Hj = [];
          for (var e = 0; e < 4; e++) {
            var i = new _0x3c90b5();
            i.kh((window[_0x2458(2086)] = _0x1ff066).q.Ph);
            this.Gj[_0x2458(542)](i.jh);
            this.Hj[_0x2458(1973)](i);
          }
          this.Gj[_0x2458(941)] = .0011;
          this.addChild(this.Gj);
          this.Ij();
          this.Jj = new _0x3c90b5();
          this.Jj.kh((window[_0x2458(2086)] = _0x1ff066).q.Qh);
          this.Jj.jh[_0x2458(941)] = .001;
          this.addChild(this.Jj.jh);
          this.Kj();
          this[_0x2458(1232)] = new _0x3c90b5();
          this[_0x2458(1232)].kh((window[_0x2458(2086)] = _0x1ff066).q.Rh);
          this.flx.jh[_0x2458(941)] = .001;
          this[_0x2458(542)](this[_0x2458(1232)].jh);
          this.flexx();
          this.xxx5 = new _0x3c90b5();
          this[_0x2458(788)].kh((window[_0x2458(2086)] = _0x1ff066).q[_0x2458(641)]);
          this[_0x2458(788)].jh.zIndex = .001;
          this[_0x2458(542)](this[_0x2458(788)].jh);
          this[_0x2458(1223)]();
          this[_0x2458(2116)] = new _0x3c90b5();
          this.xxx2.kh((window[_0x2458(2086)] = _0x1ff066).q[_0x2458(1830)]);
          this[_0x2458(2116)].jh[_0x2458(941)] = .001;
          this[_0x2458(542)](this[_0x2458(2116)].jh);
          this[_0x2458(614)]();
          this[_0x2458(1368)] = new _0x3c90b5();
          this.xxx10.kh((window[_0x2458(2086)] = _0x1ff066).q.X_x10);
          this[_0x2458(1368)].jh[_0x2458(941)] = .001;
          this[_0x2458(542)](this[_0x2458(1368)].jh);
          this[_0x2458(1692)]();
          this[_0x2458(937)] = new _0x3c90b5();
          this.xxxLupatype.kh((window[_0x2458(2086)] = _0x1ff066).q[_0x2458(1853)]);
          this.xxxLupatype.jh[_0x2458(941)] = .001;
          this.addChild(this[_0x2458(937)].jh);
          this[_0x2458(438)]();
          this[_0x2458(1302)] = new _0x3c90b5();
          this[_0x2458(1302)].kh((window[_0x2458(2086)] = _0x1ff066).q.emoji);
          this.xxxEmojiType.jh[_0x2458(941)] = .001;
          this[_0x2458(542)](this.xxxEmojiType.jh);
          this[_0x2458(1222)]();
        }))[_0x2458(1938)].hh = function (t, e, i, n) {
          this.Lj(.002, this.Cj, t.Zc);
          this.Lj(.003, this.Dj, e.Zc);
          this.Lj(.004, this.Fj, n.Zc);
          this.Lj(.005, this.Ej, i.Zc);
        };
        w[_0x2458(1938)].Lj = function (t, e, i) {
          const o = i[_0x2458(1543)];
          const a = e[_0x2458(1543)];
          for (let t = a; t < o; t++) {
            const t = new _0x3c90b5();
            e.push(t);
            this.addChild(t.Mf());
          }
          for (let t = a; t > o; t--) {
            e[_0x2458(1761)]().ih();
          }
          let s = t;
          for (let t = 0; t < o; t++) {
            s += 1e-4;
            const o = e[t];
            o.kh(i[t]);
            o.jh[_0x2458(941)] = s;
          }
        };
        w.prototype.mh = function (t, e, i, n) {
          this[_0x2458(987)] = true;
          this[_0x2458(798)][_0x2458(1756)](t, e);
          this[_0x2458(1382)] = n;
          [this.Cj, this.Dj, this.Ej, this.Fj][_0x2458(919)]((t, e) => {
            _0x2458(2019);
            _0x2458(2102);
            _0x2458(1800);
            t[_0x2458(919)](t => t.oh(i));
          });
        };
        w.prototype.lh = function () {
          this[_0x2458(987)] = false;
        };
        w[_0x2458(1938)].Mj = function (t, e, i, n) {
          this.Gj[_0x2458(987)] = true;
          var a = i / 1e3;
          var s = 1 / this.Hj[_0x2458(1543)];
          for (var r = 0; r < this.Hj[_0x2458(1543)]; r++) {
            var c = 1 - (a + s * r) % 1;
            this.Hj[r].jh.alpha = 1 - c;
            this.Hj[r].oh(e * (.5 + 4.5 * c));
          }
        };
        w[_0x2458(1938)].Ij = function () {
          this.Gj[_0x2458(987)] = false;
        };
        w[_0x2458(1938)].Nj = function (t, e, i, n) {
          this.Jj.jh[_0x2458(987)] = true;
          this.Jj.jh[_0x2458(1240)] = (t.hj ? .9 : .2) > this.Jj.jh.alpha ? Math[_0x2458(1940)](t.hj ? .9 : .2, this.Jj.jh.alpha + n * .0025) : Math[_0x2458(1478)](t.hj ? .9 : .2, this.Jj.jh.alpha - n * .0025);
          this.Jj.oh(e);
        };
        w.prototype[_0x2458(1935)] = function (t, e, i, n) {
          this[_0x2458(1232)].jh[_0x2458(987)] = true;
          this[_0x2458(1232)].oh(e);
        };
        w[_0x2458(1938)].flexx = function () {
          this[_0x2458(1232)].jh.visible = false;
        };
        w.prototype[_0x2458(2092)] = function (t, e, i, n) {
          this[_0x2458(788)].jh.visible = true;
          this[_0x2458(788)].jh[_0x2458(1240)] = (t.hj ? .9 : .2) > this.Jj.jh[_0x2458(1240)] ? Math[_0x2458(1940)](t.hj ? .9 : .2, this.Jj.jh[_0x2458(1240)] + n * .0025) : Math[_0x2458(1478)](t.hj ? .9 : .2, this.Jj.jh[_0x2458(1240)] - n * .0025);
          this.xxx5.oh(e);
        };
        w.prototype.xXx5 = function () {
          this[_0x2458(788)].jh.visible = false;
        };
        w[_0x2458(1938)][_0x2458(743)] = function (t, e, i, n) {
          this[_0x2458(1302)].jh[_0x2458(987)] = true;
          this[_0x2458(1302)].oh(e);
        };
        w[_0x2458(1938)].x_emoji = function () {
          this.xxxEmojiType.jh[_0x2458(987)] = false;
        };
        w[_0x2458(1938)][_0x2458(1981)] = function (t, e, i, n) {
          this.xxx2.jh.visible = true;
          this.xxx2.jh[_0x2458(1240)] = (t.hj ? .9 : .2) > this.Jj.jh[_0x2458(1240)] ? Math[_0x2458(1940)](t.hj ? .9 : .2, this.Jj.jh[_0x2458(1240)] + n * .0025) : Math[_0x2458(1478)](t.hj ? .9 : .2, this.Jj.jh[_0x2458(1240)] - n * .0025);
          this.xxx2.oh(e);
        };
        w[_0x2458(1938)][_0x2458(614)] = function () {
          this[_0x2458(2116)].jh.visible = false;
        };
        w[_0x2458(1938)][_0x2458(852)] = function (t, e, i, n) {
          this[_0x2458(1368)].jh[_0x2458(987)] = true;
          this[_0x2458(1368)].jh[_0x2458(1240)] = (t.hj ? .9 : .2) > this.Jj.jh[_0x2458(1240)] ? Math[_0x2458(1940)](t.hj ? .9 : .2, this.Jj.jh[_0x2458(1240)] + n * .0025) : Math[_0x2458(1478)](t.hj ? .9 : .2, this.Jj.jh[_0x2458(1240)] - n * .0025);
          this[_0x2458(1368)].oh(e);
        };
        w[_0x2458(1938)][_0x2458(1692)] = function () {
          this[_0x2458(1368)].jh[_0x2458(987)] = false;
        };
        w[_0x2458(1938)].ActiveZlupa = function (t, e, i, n) {
          this[_0x2458(937)].jh.visible = true;
          this.xxxLupatype.jh.alpha = (t.hj ? .9 : .2) > this.Jj.jh[_0x2458(1240)] ? Math[_0x2458(1940)](t.hj ? .9 : .2, this.Jj.jh[_0x2458(1240)] + n * .0025) : Math[_0x2458(1478)](t.hj ? .9 : .2, this.Jj.jh[_0x2458(1240)] - n * .0025);
          this[_0x2458(937)].oh(e);
        };
        w.prototype[_0x2458(438)] = function () {
          this[_0x2458(937)].jh[_0x2458(987)] = false;
        };
        w.prototype.Kj = function () {
          this.Jj.jh.visible = false;
        };
        e.prototype.Oj = function (e) {
          return this.Aj + this.Bj * Math[_0x2458(620)](e * o - this.zj);
        };
        e[_0x2458(1938)].tj = function (e, i, n, o) {
          const w = 2 * e.Db;
          const k = e.nj;
          const j = e.kj;
          const z = 4 * j - 3;
          this.zj = i / 400 * Math.PI;
          this.Aj = 1.5 * w;
          this.Bj = .1 * w * e.jj;
          let S;
          let I;
          let M;
          let $;
          let T = k[0];
          let C = k[1];
          if (o(T, C)) {
            S = k[2];
            I = k[3];
            M = k[4];
            $ = k[5];
            const t = Math.atan2($ + 2 * C - 3 * I, M + 2 * T - 3 * S);
            const e = y[_0x2458(637)];
            this.vj.mh(T, C, w, t);
            this.xj[0].mh(T, C, w, this.Oj(0), t);
            this.xj[1].mh(.64453125 * T + .45703125 * S + u * M, .64453125 * C + .45703125 * I + u * $, w, this.Oj(1), e(this.xj[0], this.xj[2]));
            this.xj[2].mh(.375 * T + .75 * S + b * M, .375 * C + .75 * I + b * $, w, this.Oj(2), e(this.xj[1], this.xj[3]));
            this.xj[3].mh(.15234375 * T + .94921875 * S + m * M, .15234375 * C + .94921875 * I + m * $, w, this.Oj(3), e(this.xj[2], this.xj[4]));
          } else {
            for (let t = 0; t < 4; t++) {
              this.xj[t].lh();
            }
            this.vj.lh();
          }
          let P = 4;
          const A = 2 * j - 4;
          for (let t = 2; t < A; t += 2) {
            T = k[t];
            C = k[t + 1];
            if (o(T, C)) {
              const e = k[t - 2];
              const i = k[t - 1];
              S = k[t + 2];
              I = k[t + 3];
              M = k[t + 4];
              $ = k[t + 5];
              this.xj[P].mh(T, C, w, this.Oj(P), y[_0x2458(637)](this.xj[P - 1], this.xj[P + 1]));
              P++;
              this.xj[P].mh(a * e + .84375 * T + .2578125 * S + c * M, a * i + .84375 * C + .2578125 * I + c * $, w, this.Oj(P), y[_0x2458(637)](this.xj[P - 1], this.xj[P + 1]));
              P++;
              this.xj[P].mh(l * e + .5625 * T + .5625 * S + l * M, l * i + .5625 * C + .5625 * I + l * $, w, this.Oj(P), y[_0x2458(637)](this.xj[P - 1], this.xj[P + 1]));
              P++;
              this.xj[P].mh(c * e + .2578125 * T + .84375 * S + a * M, c * i + .2578125 * C + .84375 * I + a * $, w, this.Oj(P), y[_0x2458(637)](this.xj[P - 1], this.xj[P + 1]));
              P++;
            } else {
              for (let t = 0; t < 4; t++) {
                this.xj[P++].lh();
              }
            }
          }
          const O = 2 * j - 4;
          T = k[O];
          C = k[O + 1];
          if (o(T, C)) {
            const t = k[O - 2];
            const e = k[O - 1];
            S = k[O + 2];
            I = k[O + 3];
            const i = this.Oj[_0x2458(1875)](this);
            const n = y[_0x2458(637)];
            this.xj[z - 5].mh(T, C, w, i(z - 5), n(this.xj[z - 6], this.xj[z - 4]));
            this.xj[z - 4].mh(m * t + .94921875 * T + .15234375 * S, m * e + .94921875 * C + .15234375 * I, w, i(z - 4), n(this.xj[z - 5], this.xj[z - 3]));
            this.xj[z - 3].mh(b * t + .75 * T + .375 * S, b * e + .75 * C + .375 * I, w, i(z - 3), n(this.xj[z - 4], this.xj[z - 2]));
            this.xj[z - 2].mh(u * t + .45703125 * T + .64453125 * S, u * e + .45703125 * C + .64453125 * I, w, i(z - 2), n(this.xj[z - 3], this.xj[z - 1]));
            this.xj[z - 1].mh(S, I, w, i(z - 1), n(this.xj[z - 2], this.xj[z - 1]));
          } else {
            for (let t = z - 5; t <= z - 1; t++) {
              this.xj[t].lh();
            }
          }
          if (0 === this.wj && z > 0) {
            this.Rf.addChild(this.vj);
          }
          for (this.wj > 0 && 0 === z && _0x31c7b2(this.vj); this.wj < z;) {
            const t = this.xj[this.wj];
            this.Rf[_0x2458(542)](t.Nf.Mf());
            this.Rf[_0x2458(542)](t.Pf.Mf());
            this.wj++;
          }
          for (; this.wj > z;) {
            this.wj--;
            const t = this.xj[this.wj];
            t.Pf.ih();
            t.Nf.ih();
          }
          if (theoKzObjects[_0x2458(680)] && e?.Mb?.Mb) {
            this.vj[_0x2458(743)](e, w, i, n);
          } else {
            this.vj.x_emoji();
          }
          if (!this.xj[0].gj()) {
            this.vj.Ij();
            this.vj.Kj();
            this.vj[_0x2458(1170)]();
            this.vj[_0x2458(614)]();
            this.vj[_0x2458(1223)]();
            this.vj.xXx10();
            return void this.vj[_0x2458(438)]();
          }
          const D = e.Ff;
          const F = D[_0x2d8dbf.MAGNETIC_TYPE];
          const E = D[_0x2d8dbf.VELOCITY_TYPE];
          const N = D[_0x2d8dbf[_0x2458(1998)]];
          const H = D[_0x2d8dbf[_0x2458(2026)]];
          const R = D[_0x2d8dbf.X5_TYPE];
          const L = D[_0x2d8dbf[_0x2458(1667)]];
          const K = D[_0x2d8dbf[_0x2458(1504)]];
          if (F?.sc) {
            this.vj.Mj(e, w, i, n);
          } else {
            this.vj.Ij();
          }
          if (E?.sc) {
            this.vj.Nj(e, w, i, n);
          } else {
            this.vj.Kj();
          }
          if (true && N?.sc) {
            this.vj[_0x2458(1935)](e, w, i, n);
          } else {
            this.vj[_0x2458(1170)]();
          }
          if (theoKzObjects[_0x2458(714)]) {
            if (H?.sc) {
              this.vj[_0x2458(1981)](e, w, i, n);
            } else {
              this.vj[_0x2458(614)]();
            }
            if (R?.sc) {
              this.vj[_0x2458(2092)](e, w, i, n);
            } else {
              this.vj[_0x2458(1223)]();
            }
            if (L?.sc) {
              this.vj[_0x2458(852)](e, w, i, n);
            } else {
              this.vj.xXx10();
            }
            if (K?.sc) {
              this.vj[_0x2458(1514)](e, w, i, n);
            } else {
              this.vj[_0x2458(438)]();
            }
          } else {
            this.vj[_0x2458(614)]();
            this.vj[_0x2458(1223)]();
            this.vj[_0x2458(1692)]();
            this.vj.xXxLupaZ();
          }
        };
        var y = function () {
          function i(t, e) {
            this.Nf = t;
            this.Nf.Mg(false);
            this.Pf = e;
            this.Pf.Mg(false);
          }
          i[_0x2458(1938)].mh = function (t, i, n, o, a) {
            this.Nf.Mg(theoKzObjects[_0x2458(2061)]);
            this.Nf.nh(t, i);
            this.Nf.oh(n);
            this.Nf.fj(a);
            this.Pf.Mg(theoKzObjects[_0x2458(1737)]);
            this.Pf.nh(t, i);
            this.Pf.oh(o);
            this.Pf.fj(a);
          };
          i[_0x2458(1938)].lh = function () {
            this.Nf.Mg(false);
            this.Pf.Mg(false);
          };
          i[_0x2458(1938)].gj = function () {
            return this.Nf.gj();
          };
          i[_0x2458(637)] = function (t, i) {
            return Math[_0x2458(828)](t.Nf.jh[_0x2458(798)].y - i.Nf.jh[_0x2458(798)].y, t.Nf.jh[_0x2458(798)].x - i.Nf.jh.position.x);
          };
          return i;
        }();
        return e;
      }();
      var _0x418bed = function () {
        function e(t) {
          this.se = t;
          this.te = t[_0x2458(824)]()[0];
          this.ue = new _0x53055c.ac({
            view: this.te,
            transparent: true
          });
          this.sc = false;
          this.Pj = new _0x4437d9();
          this.Pj.Rf[_0x2458(542)](this.Pj.vj);
          this.Qj = 0;
          this.Rj = 0;
          this.Ng = 1;
          this.rh = 0;
          this.sh = 0;
          this.th = 0;
          this.uh = 0;
          this.vh = 0;
          this.Sj = false;
          this.Tj = false;
          this.Uj = false;
          this.Vj = false;
          this.Wj = false;
          this.Xj = false;
          this.Yj = false;
          this.Zj = false;
          this.$j = false;
          this._j = false;
          this.Ra();
          this.Fb();
          var i = this;
          (window[_0x2458(2086)] = _0x1ff066).p.ca(function () {
            if ((window[_0x2458(2086)] = _0x1ff066).p.W()) {
              i.Fb();
            }
          });
        }
        e[_0x2458(1938)].Fb = function () {
          var t = window[_0x2458(2086)] = _0x1ff066;
          this.Pj.hh(0, null, t.p.Dc().dd(this.rh), t.p.Dc().fd(this.sh), t.p.Dc().gd(this.th), t.p.Dc().hd(this.uh), t.p.Dc().jd(this.vh));
        };
        e[_0x2458(1938)].Le = function (t) {
          this.sc = t;
        };
        e.prototype.ak = function (t, e, i) {
          this.rh = t;
          this.Sj = e;
          this.Xj = i;
          this.Fb();
        };
        e[_0x2458(1938)].bk = function (t, e, i) {
          this.sh = t;
          this.Tj = e;
          this.Yj = i;
          this.Fb();
        };
        e[_0x2458(1938)].ck = function (t, e, i) {
          this.th = t;
          this.Uj = e;
          this.Zj = i;
          this.Fb();
        };
        e.prototype.dk = function (t, e, i) {
          this.uh = t;
          this.Vj = e;
          this.$j = i;
          this.Fb();
        };
        e[_0x2458(1938)].ek = function (t, e, i) {
          this.vh = t;
          this.Wj = e;
          this._j = i;
          this.Fb();
        };
        e[_0x2458(1938)].Ra = function () {
          var i = window[_0x2458(1635)] ? window[_0x2458(1635)] : 1;
          this.Qj = this.se.width();
          this.Rj = this.se[_0x2458(2052)]();
          this.ue[_0x2458(2023)](this.Qj, this.Rj);
          this.ue[_0x2458(953)] = i;
          this.te[_0x2458(1350)] = i * this.Qj;
          this.te[_0x2458(2052)] = i * this.Rj;
          this.Ng = this.Rj / 4;
          var n = 2 * Math[_0x2458(455)](this.Qj / this.Ng) - 5 > this.Pj.xj[_0x2458(1543)] ? this.Pj.xj[_0x2458(1543)] : 2 * Math[_0x2458(455)](this.Qj / this.Ng) - 5 < 1 ? 1 : Number.isFinite(2 * Math[_0x2458(455)](this.Qj / this.Ng) - 5) ? 2 * Math[_0x2458(455)](this.Qj / this.Ng) - 5 : .5 * (1 + this.Pj.xj[_0x2458(1543)]);
          if (this.Pj.wj != n) {
            for (var o = n; o < this.Pj.xj[_0x2458(1543)]; o++) {
              this.Pj.xj[o].lh();
            }
            for (; this.Pj.wj < n;) {
              this.Pj.Rf[_0x2458(542)](this.Pj.xj[this.Pj.wj].Nf.Mf());
              this.Pj.Rf[_0x2458(542)](this.Pj.xj[this.Pj.wj].Pf.Mf());
              this.Pj.wj += 1;
            }
            for (; this.Pj.wj > n;) {
              this.Pj.wj -= 1;
              this.Pj.xj[this.Pj.wj].Pf.ih();
              this.Pj.xj[this.Pj.wj].Nf.ih();
            }
          }
        };
        e[_0x2458(1938)].Pa = function () {
          if (this.sc && (window[_0x2458(2086)] = _0x1ff066).p.W) {
            var i = Date[_0x2458(1564)]() / 200;
            var n = Math.sin(i);
            var o = this.Ng;
            var a = 1.5 * this.Ng;
            var s = this.Qj - .5 * (this.Qj - .5 * o * (this.Pj.wj - 1));
            var r = .5 * this.Rj;
            var c = 0;
            var l = 0;
            for (var h = -1; h < this.Pj.wj; h++) {
              var d = h;
              var x = Math[_0x2458(1651)](1 * d / 12 * Math.PI - i) * (1 - Math[_0x2458(1183)](16, -1 * d / 12));
              if (h >= 0) {
                var u = s + -.5 * o * d;
                var _ = r + .5 * o * x;
                var f = 2 * o;
                var b = 2 * a;
                var p = Math[_0x2458(828)](l - x, d - c);
                if (0 == h) {
                  this.Pj.vj.mh(u, _, f, p);
                }
                this.Pj.xj[h].mh(u, _, f, b, p);
                var v = this.Sj ? this.Xj ? .4 + .2 * n : .9 + .1 * n : this.Xj ? .4 : 1;
                this.Pj.xj[h].Nf.qh(v);
                this.Pj.xj[h].Pf.qh(v);
              }
              c = d;
              l = x;
            }
            for (var m = 0; m < this.Pj.vj.Cj[_0x2458(1543)]; m++) {
              var g = this.Tj ? this.Yj ? .4 + .2 * n : .9 + .1 * n : this.Yj ? .4 : 1;
              this.Pj.vj.Cj[m].qh(g);
            }
            for (var w = 0; w < this.Pj.vj.Dj.length; w++) {
              var k = this.Uj ? this.Zj ? .4 + .2 * n : .9 + .1 * n : this.Zj ? .4 : 1;
              this.Pj.vj.Dj[w].qh(k);
            }
            for (var y = 0; y < this.Pj.vj.Ej.length; y++) {
              var j = this.Vj ? this.$j ? .4 + .2 * n : .9 + .1 * n : this.$j ? .4 : 1;
              this.Pj.vj.Ej[y].qh(j);
            }
            for (var z = 0; z < this.Pj.vj.Fj.length; z++) {
              var S = this.Wj ? this._j ? .4 + .2 * n : .9 + .1 * n : this._j ? .4 : 1;
              this.Pj.vj.Fj[z].qh(S);
            }
            this.ue[_0x2458(590)](this.Pj.Rf);
          }
        };
        return e;
      }();
      var _0x501845 = function () {
        function e(t) {
          this.rc = t;
        }
        e.fk = $(_0x2458(1684));
        e.gk = $(_0x2458(563));
        e.hk = $(_0x2458(1820));
        e.ik = $(_0x2458(598));
        e.jk = $(_0x2458(632));
        e.kk = $(_0x2458(1220));
        e.lk = $(_0x2458(2083));
        e.mk = $("#game-canvas");
        e.di = $("#background-canvas");
        e.nk = $(_0x2458(2082));
        e.ok = $(_0x2458(1160));
        e[_0x2458(1938)].a = function () {};
        e[_0x2458(1938)].ii = function () {};
        e[_0x2458(1938)].ji = function () {};
        e[_0x2458(1938)].ei = function () {};
        e[_0x2458(1938)].Ra = function () {};
        e[_0x2458(1938)].Pa = function (t, e) {};
        return e;
      }();
      var _0x4d8a7a = function () {
        var e = $("#final-caption");
        var i = $(_0x2458(785));
        var n = $(_0x2458(1063));
        var o = $(_0x2458(1421));
        $(_0x2458(1323));
        var a = $(_0x2458(1007));
        var s = $("#final-message");
        var r = $("#final-score");
        var c = $(_0x2458(613));
        var l = $("#final-board");
        var h = _0x22ee20(_0x501845, function () {
          _0x501845[_0x2458(1459)](this, 0);
          var o = this;
          var a = window[_0x2458(2086)] = _0x1ff066;
          var s = _0x501845.mk[_0x2458(824)]()[0];
          console[_0x2458(923)]("sSE=" + _0x25fccb.qk);
          e[_0x2458(792)](window[_0x2458(782)][_0x2458(1142)]);
          i.text(window[_0x2458(782)]["index.game.result.continue"]);
          i[_0x2458(704)](function () {
            a.r.Cd();
            a.r.G(_0xdbe872.AudioState.F);
            a.s.I(a.s.F);
          });
          $("#game-canvas").attr(_0x2458(1673), 0)[_0x2458(431)]();
          $(_0x2458(582)).click();
          $("#game-canvas")[_0x2458(562)](function (t) {
            console[_0x2458(923)](t);
            if (t[_0x2458(1234)].type !== _0x2458(792)) {
              if (t[_0x2458(466)].toLowerCase() === keys[_0x2458(707)]) {
                zw_updatezoom(1);
              }
              if (t[_0x2458(466)][_0x2458(1768)]() === "r") {
                let t = zw_lastserver;
                $(_0x2458(848))[_0x2458(1305)](_0x2458(798), _0x2458(929));
                if (t) {
                  anApp.r.Hd();
                  anApp.sa(t);
                }
              }
              if (t[_0x2458(466)][_0x2458(1768)]() === keys[_0x2458(1580)]) {
                const t = new Uint8Array([NaN, NaN]);
                anApp.o.Wb(t);
                setTimeout(() => {
                  let i = zw_lastserver;
                  $(_0x2458(848))[_0x2458(1305)](_0x2458(798), _0x2458(929));
                  if (i) {
                    anApp.r.Hd();
                    anApp.sa(i);
                  }
                }, 1e3);
              }
              if (t[_0x2458(466)][_0x2458(1768)]() === keys[_0x2458(2080)]) {
                $(".option.toggle[data-option='laserHS'] .box")[_0x2458(704)]();
              }
              if (t[_0x2458(466)][_0x2458(1768)]() === "q") {
                $(".option.toggle[data-option='sectores'] .box")[_0x2458(704)]();
                setSectorsGame();
              }
              if (t[_0x2458(466)].toLowerCase() === keys[_0x2458(1555)]) {
                $(_0x2458(895))[_0x2458(704)]();
                setSectorsGame();
              }
              if (t[_0x2458(466)][_0x2458(1768)]() === keys[_0x2458(2061)]) {
                theoKzObjects.noSkin = !theoKzObjects[_0x2458(2061)];
              }
              if (t[_0x2458(466)][_0x2458(1768)]() === keys[_0x2458(1737)]) {
                theoKzObjects[_0x2458(1737)] = !theoKzObjects[_0x2458(1737)];
              }
              if (t[_0x2458(466)][_0x2458(1768)]() === keys[_0x2458(1036)]) {
                if (isRunning) {
                  isRunning = false;
                  initialInterval = 55;
                  cycleCounter = 1;
                  isIncrementing = true;
                  clearInterval(intervalID);
                  intervalID = null;
                  zw_girosubtracttexture.texture = ungirotexture;
                  zw_girosubtracttexture[_0x2458(1240)] = .25;
                } else {
                  zw_girosubtracttexture[_0x2458(1240)] = .75;
                  startInterval();
                  isRunning = true;
                }
              }
            }
          });
          $(_0x2458(582))[_0x2458(827)](function (t) {
            if ("Enter" === t.key) {
              r();
            }
            if (32 == t[_0x2458(545)]) {
              o.rk = true;
            }
            if (49 == t.keyCode) {
              theoKzObjects[_0x2458(680)] = true;
              setTimeout(() => {
                theoKzObjects[_0x2458(680)] = false;
              }, 2e3);
            }
            t[_0x2458(545)];
          }).keyup(function (t) {
            if (32 == t[_0x2458(545)]) {
              o.rk = false;
            }
          });
          var r = function () {
            $(_0x2458(1796))[_0x2458(1305)](_0x2458(1470), _0x2458(1927)).focus();
          };
          s[_0x2458(837)]("touchstart", function (t) {
            if (t = t || window.event) {
              o.rk = t[_0x2458(1339)][_0x2458(1543)] >= 2;
            }
            t[_0x2458(1412)]();
          }, true);
          s[_0x2458(837)]("touchend", function (t) {
            if (t = t || window[_0x2458(1917)]) {
              o.rk = t[_0x2458(1339)].length >= 2;
            }
          }, true);
          s[_0x2458(837)](_0x2458(1699), function (t) {
            if ((t = t || window.event && undefined !== t.clientX) && !isRunning) {
              var i = t[_0x2458(873)];
              var a = t.clientY;
              window[_0x2458(907)] = i;
              window[_0x2458(429)] = a;
              o.sk = Math.atan2(a - .5 * s[_0x2458(1738)], i - .5 * s.offsetWidth);
            }
          }, true);
          s[_0x2458(837)](_0x2458(1868), function (t) {
            o.rk = true;
          }, true);
          s[_0x2458(837)](_0x2458(1354), function (t) {
            o.rk = false;
          }, true);
          if (zw_mobilecheck()) {
            var c;
            var l = -1;
            s[_0x2458(837)]("touchmove", function (t) {
              if (t = t || window.event) {
                t = t[_0x2458(1339)][0];
                var i = .5 * s.offsetWidth;
                var a = .5 * s[_0x2458(1738)];
                if (zw_mobilearrowtexture[_0x2458(987)]) {
                  i = zw_mobilearrowtexture.x + 110;
                  a = zw_mobilearrowtexture.y + 110;
                }
                if (-1 === zw_joystick) {
                  o.sk = Math[_0x2458(828)](t[_0x2458(1158)] - a, t.pageX - i);
                }
                if (-1 != zw_mobileprediction) {
                  var c = Math[_0x2458(1329)]((i - t[_0x2458(1609)]) * (i - t[_0x2458(1609)]) + (a - t[_0x2458(1158)]) * (a - t[_0x2458(1158)]));
                  zw_mobilepredictiontextures[zw_mobileprediction].x = .5 * s[_0x2458(1358)] + (c < 110 ? c : 110) * Math[_0x2458(1651)](o.sk) - 68;
                  zw_mobilepredictiontextures[zw_mobileprediction].y = .5 * s[_0x2458(1738)] + (c < 110 ? c : 110) * Math[_0x2458(620)](o.sk) - 68;
                  zw_mobilepredictiontextures[zw_mobileprediction][_0x2458(1240)] = 1;
                }
              }
            }, true);
            s[_0x2458(837)]("touchend", function (t) {
              if (-1 != zw_mobileprediction) {
                zw_mobilepredictiontextures[zw_mobileprediction][_0x2458(1240)] = .25;
              }
              if (t && -1 === l) {
                o.rk = t[_0x2458(1339)][_0x2458(1543)] >= 2;
              }
            }, true);
            s.addEventListener(_0x2458(1005), function (t) {
              let i;
              let a;
              let s = zw_zoomplustexture[_0x2458(1705)]();
              let r = zw_zoomsubtracttexture[_0x2458(1705)]();
              if (undefined !== zw_girosubtracttexture && undefined !== zw_explotWubtracttexture) {
                i = zw_girosubtracttexture.getGlobalPosition();
                a = zw_explotWubtracttexture[_0x2458(1705)]();
              }
              let h = zw_mobilecontroltextures[zw_mobilecontrol].getGlobalPosition();
              let d = zw_mobilepeedtexture[_0x2458(1705)]();
              if (undefined !== a && undefined !== i) {
                if (t.clientX > a.x && t[_0x2458(873)] <= a.x + zw_explotWubtracttexture[_0x2458(1350)] && t[_0x2458(1905)] > a.y && t.clientY <= a.y + zw_explotWubtracttexture.height) {
                  return void zw_explotWubtracttexture[_0x2458(1257)]("mouseup");
                }
                if (t[_0x2458(873)] > i.x && t[_0x2458(873)] <= i.x + zw_girosubtracttexture.width && t[_0x2458(1905)] > i.y && t[_0x2458(1905)] <= i.y + zw_girosubtracttexture[_0x2458(2052)]) {
                  return void zw_girosubtracttexture[_0x2458(1257)](_0x2458(1354));
                }
              }
              if (t[_0x2458(873)] > s.x && t.clientX <= s.x + zw_zoomplustexture.width && t[_0x2458(1905)] > s.y && t.clientY <= s.y + zw_zoomplustexture[_0x2458(2052)]) {
                zw_zoomplustexture[_0x2458(1257)]("mouseup");
              } else if (t[_0x2458(873)] > r.x && t[_0x2458(873)] <= r.x + zw_zoomsubtracttexture[_0x2458(1350)] && t[_0x2458(1905)] > r.y && t[_0x2458(1905)] <= r.y + zw_zoomsubtracttexture[_0x2458(2052)]) {
                zw_zoomsubtracttexture[_0x2458(1257)]("mouseup");
              } else {
                if (!(t[_0x2458(873)] > h.x && t.clientX <= h.x + zw_mobilecontroltextures[zw_mobilecontrol].width && t[_0x2458(1905)] > h.y && t[_0x2458(1905)] <= h.y + zw_mobilecontroltextures[zw_mobilecontrol].height)) {
                  return zw_mobilepeedtexture[_0x2458(987)] && t[_0x2458(873)] > d.x && t[_0x2458(873)] <= d.x + zw_mobilepeedtexture.width && t[_0x2458(1905)] > d.y && t.clientY <= d.y + zw_mobilepeedtexture.height ? (l = t[_0x2458(1180)], o.rk = true, void (zw_mobilepeedtexture[_0x2458(1240)] = 1)) : void (-1 !== zw_joystick && !zw_joysticks[zw_joystick][_0x2458(987)] && (c = t[_0x2458(1180)], zw_joysticks[zw_joystick].x = t[_0x2458(873)], zw_joysticks[zw_joystick].y = t[_0x2458(1905)], zw_joysticks[zw_joystick][_0x2458(987)] = true, zw_joysticks[zw_joystick][_0x2458(1990)](t)));
                }
                zw_mobilecontroltextures[zw_mobilecontrol][_0x2458(1257)](_0x2458(1575));
              }
            }, true);
            s[_0x2458(837)](_0x2458(456), function (t) {
              if (t[_0x2458(1180)] == l) {
                o.rk = false;
                l = -1;
                zw_mobilepeedtexture[_0x2458(1240)] = .5;
              }
              if (t[_0x2458(1180)] == c && -1 !== zw_joystick) {
                zw_joysticks[zw_joystick][_0x2458(987)] = false;
                zw_joysticks[zw_joystick][_0x2458(1508)](t);
              }
            }, true);
            s[_0x2458(837)](_0x2458(603), function (t) {
              if (t[_0x2458(1180)] == c && -1 !== zw_joystick) {
                zw_joysticks[zw_joystick][_0x2458(1218)](t);
              }
            }, true);
          }
          this.wb = new _0x2daed0(_0x501845.mk);
          this.cb = 0;
          this.sk = 0;
          this.rk = false;
          theoEvents[_0x2458(1059)] = o;
        });
        h[_0x2458(1938)].a = function () {};
        h[_0x2458(1938)].ii = function () {
          if (this.cb == 0) {
            _0x501845.fk[_0x2458(1561)]();
            _0x501845.fk.fadeIn(500);
            _0x501845.gk[_0x2458(1561)]();
            _0x501845.gk[_0x2458(724)](1);
            _0x501845.hk[_0x2458(1561)]();
            _0x501845.hk[_0x2458(724)](50);
            _0x501845.ik[_0x2458(1561)]();
            _0x501845.ik[_0x2458(724)](50);
            _0x501845.jk[_0x2458(1561)]();
            _0x501845.jk[_0x2458(724)](50);
            _0x501845.kk[_0x2458(1561)]();
            _0x501845.kk[_0x2458(724)](50);
            _0x501845.lk[_0x2458(1561)]();
            _0x501845.lk[_0x2458(724)](1);
            _0x501845.di[_0x2458(1561)]();
            _0x501845.di[_0x2458(724)](50);
            _0x3606ae.Le(false);
            _0x501845.nk[_0x2458(1561)]();
            _0x501845.nk[_0x2458(724)](50);
            _0x501845.ok[_0x2458(1561)]();
            _0x501845.ok[_0x2458(724)](50);
          } else {
            _0x501845.fk[_0x2458(1561)]();
            _0x501845.fk.fadeIn(500);
            _0x501845.gk.stop();
            _0x501845.gk[_0x2458(710)](500);
            _0x501845.hk.stop();
            _0x501845.hk[_0x2458(724)](50);
            _0x501845.ik.stop();
            _0x501845.ik[_0x2458(724)](50);
            _0x501845.jk[_0x2458(1561)]();
            _0x501845.jk[_0x2458(724)](50);
            _0x501845.kk[_0x2458(1561)]();
            _0x501845.kk[_0x2458(724)](50);
            _0x501845.lk.stop();
            _0x501845.lk[_0x2458(724)](1);
            _0x501845.di[_0x2458(1561)]();
            _0x501845.di.fadeOut(50);
            _0x3606ae.Le(false);
            _0x501845.nk[_0x2458(1561)]();
            _0x501845.nk[_0x2458(724)](50);
            _0x501845.ok[_0x2458(1561)]();
            _0x501845.ok[_0x2458(724)](50);
          }
        };
        h[_0x2458(1938)].J = function () {
          this.cb = 0;
          return this;
        };
        h[_0x2458(1938)].Fa = function () {
          console[_0x2458(923)]("re");
          n.hide();
          setTimeout(function () {
            console[_0x2458(923)](_0x2458(1660));
            n[_0x2458(710)](100);
          }, 100);
          o[_0x2458(1817)]();
          setTimeout(function () {
            console[_0x2458(923)](_0x2458(482));
            o.fadeIn(100);
          }, 100);
          this.cb = 1;
          return this;
        };
        h.prototype.ji = function () {
          this.rk = false;
          this.wb.Ra();
          if (this.cb == 1) {
            (window[_0x2458(2086)] = _0x1ff066).r.Gd();
          }
        };
        h.prototype.Ra = function () {
          this.wb.Ra();
        };
        h[_0x2458(1938)].Pa = function (t, e) {
          this.wb.Pa(t, e);
        };
        h[_0x2458(1938)].Da = function (e, i, n) {
          var o;
          var h;
          var d;
          var x;
          var u;
          var _;
          var f;
          var b;
          var p;
          var m = undefined;
          var g = undefined;
          var w = undefined;
          if (i >= 1 && i <= 10) {
            m = window[_0x2458(782)]["index.game.result.place.i" + i];
            g = window[_0x2458(782)][_0x2458(1149)];
            w = window[_0x2458(782)][_0x2458(976)][_0x2458(1799)](_0x2458(1964), n)[_0x2458(1799)](_0x2458(1394), e).replace(_0x2458(1583), m);
          } else {
            m = "";
            g = window[_0x2458(782)]["index.game.result.tryHit"];
            w = window[_0x2458(782)]["index.game.social.shareResult.messNorm"][_0x2458(1799)]("{0}", n)[_0x2458(1799)](_0x2458(1394), e);
          }
          s[_0x2458(1104)](window[_0x2458(782)][_0x2458(1832)]);
          r.html(e);
          c[_0x2458(1104)](m);
          l[_0x2458(1104)](g);
          if (_0x25fccb.qk) {
            var k = window[_0x2458(782)]["index.game.result.share"];
            window[_0x2458(782)][_0x2458(899)];
            o = k;
            h = _0x2458(1557);
            d = _0x2458(702);
            x = w;
            u = w;
            _ = _0x2458(617);
            b = (f = _0x2458)(1155) + o + f(867);
            (p = $(b)).click(function () {
              if ("undefined" != typeof FB && undefined !== FB.ui) {
                FB.ui({
                  method: f(1464),
                  display: f(1767),
                  link: h,
                  name: d,
                  caption: x,
                  description: u,
                  picture: _
                }, function () {});
              }
            });
            a[_0x2458(909)]()[_0x2458(1715)](p);
          }
        };
        h[_0x2458(1938)].T = function () {
          return this.sk;
        };
        h[_0x2458(1938)].U = function () {
          return this.rk;
        };
        return h;
      }();
      _0x212361 = $(_0x2458(1236));
      _0x53a144 = $(_0x2458(917));
      _0xa5e5c7 = $("#loading-worm-c");
      _0x1ccbcb = [_0x2458(1798), _0x2458(1789), _0x2458(1697), "200% 200%"];
      _0x1a3189 = _0x22ee20(_0x501845, function () {
        _0x501845[_0x2458(1459)](this, 0);
      });
      _0x1a3189.prototype.a = function () {};
      _0x1a3189[_0x2458(1938)].ii = function () {
        _0x501845.fk[_0x2458(1561)]();
        _0x501845.fk[_0x2458(724)](50);
        _0x501845.gk[_0x2458(1561)]();
        _0x501845.gk[_0x2458(724)](50);
        _0x501845.hk.stop();
        _0x501845.hk[_0x2458(724)](50);
        _0x501845.ik[_0x2458(1561)]();
        _0x501845.ik.fadeOut(50);
        _0x501845.jk[_0x2458(1561)]();
        _0x501845.jk[_0x2458(724)](50);
        _0x501845.kk[_0x2458(1561)]();
        _0x501845.kk[_0x2458(710)](500);
        _0x501845.lk.stop();
        _0x501845.lk[_0x2458(710)](1);
        _0x501845.di[_0x2458(1561)]();
        _0x501845.di[_0x2458(710)](500);
        _0x3606ae.Le(true);
        _0x501845.nk[_0x2458(1561)]();
        _0x501845.nk[_0x2458(724)](50);
        _0x501845.ok[_0x2458(1561)]();
        _0x501845.ok.fadeOut(50);
      };
      _0x1a3189[_0x2458(1938)].ji = function () {
        this.tk();
      };
      _0x1a3189[_0x2458(1938)].tk = function () {
        _0x212361[_0x2458(1305)](_0x2458(786), _0x2458(1789));
        for (var e = 0; e < _0x1ccbcb[_0x2458(1543)]; e++) {
          var i = Math[_0x2458(455)](Math[_0x2458(2002)]() * _0x1ccbcb.length);
          var n = _0x1ccbcb[e];
          _0x1ccbcb[e] = _0x1ccbcb[i];
          _0x1ccbcb[i] = n;
        }
        _0x212361[_0x2458(1305)](_0x2458(786), _0x1ccbcb[0]);
        _0x53a144[_0x2458(1305)](_0x2458(786), _0x1ccbcb[1]);
        _0xa5e5c7[_0x2458(1305)](_0x2458(786), _0x1ccbcb[2]);
      };
      $(_0x2458(1197));
      _0x43c227 = $(_0x2458(1957));
      _0x1eaa63 = $("#mm-skin-prev");
      _0x2766fa = $(_0x2458(1415));
      _0x2bbd25 = $(_0x2458(1656));
      _0x3d70f1 = $(_0x2458(1657));
      _0x49ae3d = $(_0x2458(1111));
      _0x2fec6b = $(_0x2458(1080));
      _0x3c700c = $(_0x2458(1878));
      _0x3570ac = $(_0x2458(527));
      _0xbc6cfd = $("#mm-action-guest");
      _0x2924a1 = $(_0x2458(1119));
      _0x382689 = $(_0x2458(990));
      _0x551f2e = $("#mm-store");
      _0x4d358d = $(_0x2458(1371));
      _0xbb92a0 = $(_0x2458(1307));
      _0x7854e8 = $(_0x2458(2111));
      _0x207536 = $(_0x2458(1606));
      _0x3c3ee5 = $(_0x2458(679));
      _0x1129c0 = $("#mm-coins-val");
      _0x308830 = $(_0x2458(1e3));
      _0x15ce5a = $(_0x2458(2112));
      _0x14e5ce = $(_0x2458(1686));
      _0x3b58a2 = _0x22ee20(_0x501845, function () {
        _0x501845[_0x2458(1459)](this, 1);
        var e = window[_0x2458(2086)] = _0x1ff066;
        this.uk = new _0x418bed(_0x43c227);
        _0x2fec6b[_0x2458(704)](function () {
          e.r.Cd();
        });
        _0x43c227.click(function () {
          if (e.u.P()) {
            e.r.Cd();
            e.s.I(e.s.$h);
          }
        });
        _0x1eaa63[_0x2458(704)](function () {
          e.r.Cd();
          e.t.Ah();
        });
        _0x2766fa[_0x2458(704)](function () {
          e.r.Cd();
          e.t.zh();
        });
        _0x49ae3d.keypress(function (t) {
          if (13 == t.keyCode) {
            e.na();
          }
        });
        _0x3570ac[_0x2458(704)](function () {
          e.r.Cd();
          e.na();
        });
        _0xbc6cfd[_0x2458(704)](function () {
          e.r.Cd();
          e.na();
        });
        _0x2924a1[_0x2458(704)](function () {
          e.r.Cd();
          e.s.I(e.s.Zh);
        });
        _0xbb92a0[_0x2458(704)](function () {
          e.r.Cd();
          e.s.I(e.s.xa);
        });
        _0x382689[_0x2458(704)](function () {
          if (e.u.P()) {
            e.r.Cd();
            e.s.I(e.s.Yh);
          }
        });
        _0x4d358d[_0x2458(704)](function () {
          if (e.u.P()) {
            e.r.Cd();
            e.s.I(e.s.Xh);
          }
        });
        _0x551f2e.click(function () {
          if (e.u.P()) {
            e.r.Cd();
            e.s.I(e.s._h);
          }
        });
        _0x7854e8.click(function () {
          if (e.u.P()) {
            e.r.Cd();
            e.s.I(e.s.Wh);
          }
        });
        this.vk();
        this.wk();
        $(_0x2458(785))[_0x2458(1895)](_0x2458(1139));
        $(_0x2458(687)).click(function () {
          let t = zw_lastserver;
          if (t) {
            anApp.r.Hd();
            anApp.sa(t);
          }
        });
        _0x551f2e[_0x2458(1895)]("<div id=\"mm-wp-settings\" style=\"\">Settings</div>");
        $(_0x2458(1395)).html(_0x2458(1566));
        $(_0x2458(2029))[_0x2458(704)](function () {
          let t = zw_lastserver;
          if (t) {
            anApp.r.Hd();
            anApp.sa(t);
          }
        });
        $(_0x2458(1708))[_0x2458(704)](function () {
          if (zw_mobilefullscreenstatus) {
            if (document[_0x2458(1972)]) {
              document[_0x2458(1972)]();
            } else if (document.webkitExitFullscreen) {
              document[_0x2458(1916)]();
            } else if (document[_0x2458(626)]) {
              document[_0x2458(626)]();
            } else if (document[_0x2458(841)][_0x2458(1916)]) {
              document[_0x2458(841)].webkitExitFullscreen();
            }
            zw_mobilefullscreenstatus = false;
          } else {
            if (document[_0x2458(1732)][_0x2458(1472)]) {
              document[_0x2458(1732)].requestFullscreen();
            } else if (document[_0x2458(1732)][_0x2458(1469)]) {
              document[_0x2458(1732)][_0x2458(1469)]();
            } else if (document[_0x2458(1732)].msRequestFullscreen) {
              document[_0x2458(1732)][_0x2458(1051)]();
            } else if (document[_0x2458(841)][_0x2458(1469)]) {
              document[_0x2458(841)][_0x2458(1469)]();
            }
            zw_mobilefullscreenstatus = true;
          }
        });
        $(_0x2458(801))[_0x2458(704)](function () {
          if (e.u.P()) {
            e.r.Cd();
            e.s.I(e.s[_0x2458(1592)]);
          }
        });
        var i = _0x4961dc(_0x166161.va);
        if (_0x2458(1169) != i && _0x2458(1710) != i) {
          i = _0x2458(1169);
        }
        _0x2fec6b[_0x2458(898)](i);
        console[_0x2458(923)]("Load GM: " + i);
      });
      _0x3b58a2.prototype.a = function () {
        var t = window[_0x2458(2086)] = _0x1ff066;
        var e = this;
        t.u.V(function () {
          t.s.F.xk();
        });
        t.u.Pi(function () {
          if (t.u.P()) {
            t.t.Bh(t.u.Di(), _0x4e8d86.ia);
            t.t.Bh(t.u.Ei(), _0x4e8d86.ja);
            t.t.Bh(t.u.Fi(), _0x4e8d86.ka);
            t.t.Bh(t.u.Gi(), _0x4e8d86.la);
            t.t.Bh(t.u.Hi(), _0x4e8d86.ma);
          } else {
            t.t.Bh(t.Ga(), _0x4e8d86.ia);
            t.t.Bh(0, _0x4e8d86.ja);
            t.t.Bh(0, _0x4e8d86.ka);
            t.t.Bh(0, _0x4e8d86.la);
            t.t.Bh(0, _0x4e8d86.ma);
          }
        });
        t.u.Pi(function () {
          _0x3570ac.toggle(t.u.P());
          _0x2924a1[_0x2458(862)](!t.u.P());
          _0xbc6cfd[_0x2458(862)](!t.u.P());
          _0x4d358d[_0x2458(862)](t.u.P());
          _0x551f2e[_0x2458(862)](t.u.P());
          _0x7854e8[_0x2458(862)](t.u.P());
          if (t.u.P()) {
            _0x2bbd25.hide();
            _0x3c3ee5[_0x2458(1104)](t.u.wi());
            _0x207536.attr("src", t.u.xi());
            _0x1129c0[_0x2458(1104)](t.u.zi());
            _0x308830[_0x2458(1350)](100 * t.u.Bi() / t.u.Ci() + "%");
            _0x15ce5a[_0x2458(1104)](t.u.Bi() + _0x2458(565) + t.u.Ci());
            _0x14e5ce[_0x2458(1104)](t.u.Ai());
            _0x49ae3d[_0x2458(898)](t.u.ga());
          } else {
            _0x2bbd25[_0x2458(862)](_0x25fccb.qk && !t.Ha());
            _0x3c3ee5[_0x2458(1104)](_0x3c3ee5[_0x2458(660)](_0x2458(1814)));
            _0x207536.attr(_0x2458(1260), _0x40e1c9);
            _0x1129c0[_0x2458(1104)]("10");
            _0x308830[_0x2458(1350)]("0");
            _0x15ce5a[_0x2458(1104)]("");
            _0x14e5ce[_0x2458(1104)](1);
            _0x49ae3d[_0x2458(898)](_0x4961dc(_0x166161.Aa));
          }
        });
        t.t.xh(function () {
          e.uk.ak(t.t.ha(_0x4e8d86.ia), false, false);
          e.uk.bk(t.t.ha(_0x4e8d86.ja), false, false);
          e.uk.ck(t.t.ha(_0x4e8d86.ka), false, false);
          e.uk.dk(t.t.ha(_0x4e8d86.la), false, false);
          e.uk.ek(t.t.ha(_0x4e8d86.ma), false, false);
        });
      };
      _0x3b58a2[_0x2458(1938)].ii = function () {
        _0x501845.fk[_0x2458(1561)]();
        _0x501845.fk[_0x2458(724)](50);
        _0x501845.gk[_0x2458(1561)]();
        _0x501845.gk.fadeOut(50);
        _0x501845.hk[_0x2458(1561)]();
        _0x501845.hk[_0x2458(710)](500);
        _0x501845.ik[_0x2458(1561)]();
        _0x501845.ik[_0x2458(724)](50);
        _0x501845.jk.stop();
        _0x501845.jk[_0x2458(724)](50);
        _0x501845.kk[_0x2458(1561)]();
        _0x501845.kk[_0x2458(724)](50);
        _0x501845.lk.stop();
        _0x501845.lk.fadeIn(1);
        _0x501845.di.stop();
        _0x501845.di.fadeIn(500);
        _0x3606ae.Le(true);
        _0x501845.nk[_0x2458(1561)]();
        _0x501845.nk[_0x2458(710)](500);
        _0x501845.ok[_0x2458(1561)]();
        _0x501845.ok.fadeIn(500);
      };
      _0x3b58a2[_0x2458(1938)].ji = function () {
        (window[_0x2458(2086)] = _0x1ff066).r.Dd();
        this.uk.Le(true);
      };
      _0x3b58a2.prototype.ei = function () {
        this.uk.Le(false);
      };
      _0x3b58a2.prototype.Ra = function () {
        this.uk.Ra();
      };
      _0x3b58a2[_0x2458(1938)].Pa = function (t, e) {
        this.uk.Pa();
      };
      _0x3b58a2[_0x2458(1938)].ga = function () {
        return _0x49ae3d[_0x2458(898)]();
      };
      _0x3b58a2[_0x2458(1938)].D = function () {
        return _0x2fec6b[_0x2458(898)]();
      };
      _0x3b58a2.prototype.xk = function () {
        _0x3c700c[_0x2458(1316)]();
      };
      _0x3b58a2[_0x2458(1938)].vk = function () {
        var e = $("#mm-advice-cont")[_0x2458(1157)]();
        var i = 0;
        setInterval(function () {
          e.eq(i)[_0x2458(724)](500, function () {
            if (++i >= e.length) {
              i = 0;
            }
            e.eq(i)[_0x2458(710)](500).css(_0x2458(1470), _0x2458(1865));
          });
        }, 3e3);
      };
      _0x3b58a2.prototype.wk = function () {
        function e() {
          i.Ka(true);
          setTimeout(function () {
            _0x2bbd25[_0x2458(1817)]();
          }, 3e3);
        }
        var i = window[_0x2458(2086)] = _0x1ff066;
        if (_0x25fccb.qk && !i.Ha()) {
          _0x2bbd25[_0x2458(1316)]();
          var n = window[_0x2458(782)][_0x2458(737)];
          var o = encodeURIComponent(window[_0x2458(782)][_0x2458(663)] + _0x2458(1198));
          var a = encodeURIComponent(window[_0x2458(782)][_0x2458(663)]);
          _0x3d70f1[_0x2458(1715)]($(_0x2458(1224) + o + _0x2458(520) + n + _0x2458(1262))[_0x2458(704)](e));
          _0x3d70f1[_0x2458(1715)]($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + a + _0x2458(1815) + n + "</span></a>")[_0x2458(704)](e));
        }
      };
      _0xfcfa10 = _0x22ee20(_0x501845, function () {
        _0x501845[_0x2458(1459)](this, 0);
      });
      _0xfcfa10[_0x2458(1938)].a = function () {};
      _0xfcfa10[_0x2458(1938)].ii = function () {
        _0x501845.fk[_0x2458(1561)]();
        _0x501845.fk[_0x2458(724)](50);
        _0x501845.gk[_0x2458(1561)]();
        _0x501845.gk[_0x2458(724)](50);
        _0x501845.hk[_0x2458(1561)]();
        _0x501845.hk[_0x2458(724)](50);
        _0x501845.ik[_0x2458(1561)]();
        _0x501845.ik[_0x2458(724)](50);
        _0x501845.jk[_0x2458(1561)]();
        _0x501845.jk[_0x2458(724)](50);
        _0x501845.kk.stop();
        _0x501845.kk[_0x2458(724)](50);
        _0x501845.lk[_0x2458(1561)]();
        _0x501845.lk[_0x2458(724)](1);
        _0x501845.di[_0x2458(1561)]();
        _0x501845.di[_0x2458(724)](50);
        _0x3606ae.Le(false);
        _0x501845.nk[_0x2458(1561)]();
        _0x501845.nk[_0x2458(724)](50);
        _0x501845.ok[_0x2458(1561)]();
        _0x501845.ok[_0x2458(724)](50);
      };
      _0x1576e2 = $("#toaster-stack");
      _0x1a2f3b = _0x22ee20(_0x501845, function () {
        _0x501845[_0x2458(1459)](this, 0);
        this.yk = [];
        this.zk = null;
      });
      _0x1a2f3b[_0x2458(1938)].a = function () {};
      _0x1a2f3b[_0x2458(1938)].ii = function () {
        _0x501845.fk[_0x2458(1561)]();
        _0x501845.fk[_0x2458(724)](50);
        _0x501845.gk.stop();
        _0x501845.gk[_0x2458(724)](50);
        _0x501845.hk[_0x2458(1561)]();
        _0x501845.hk[_0x2458(724)](50);
        _0x501845.ik[_0x2458(1561)]();
        _0x501845.ik[_0x2458(724)](50);
        _0x501845.jk.stop();
        _0x501845.jk[_0x2458(710)](500);
        _0x501845.kk[_0x2458(1561)]();
        _0x501845.kk[_0x2458(724)](50);
        _0x501845.lk[_0x2458(1561)]();
        _0x501845.lk.fadeIn(1);
        _0x501845.di[_0x2458(1561)]();
        _0x501845.di[_0x2458(710)](500);
        _0x3606ae.Le(true);
        _0x501845.nk[_0x2458(1561)]();
        _0x501845.nk.fadeOut(50);
        _0x501845.ok[_0x2458(1561)]();
        _0x501845.ok[_0x2458(710)](500);
      };
      _0x1a2f3b[_0x2458(1938)].ji = function () {
        this.Ak();
      };
      _0x1a2f3b[_0x2458(1938)].mi = function () {
        return null != this.zk || this.yk.length > 0;
      };
      _0x1a2f3b.prototype._ = function (t) {
        this.yk[_0x2458(1993)](t);
        setTimeout(function () {
          (window[_0x2458(2086)] = _0x1ff066).s.ki();
        }, 0);
      };
      _0x1a2f3b[_0x2458(1938)].Ti = function (t) {
        this.yk[_0x2458(1973)](t);
        setTimeout(function () {
          (window[_0x2458(2086)] = _0x1ff066).s.ki();
        }, 0);
      };
      _0x1a2f3b[_0x2458(1938)].Ak = function () {
        var e = this;
        if (null == this.zk) {
          if (0 == this.yk[_0x2458(1543)]) {
            return void (window[_0x2458(2086)] = _0x1ff066).s.gi();
          }
          var i = this.yk[_0x2458(2072)]();
          this.zk = i;
          var n = i.Bk();
          n[_0x2458(1817)]();
          n[_0x2458(710)](300);
          _0x1576e2[_0x2458(1715)](n);
          i.Ck = function () {
            n[_0x2458(724)](300);
            setTimeout(function () {
              n.remove();
            }, 300);
            if (e.zk == i) {
              e.zk = null;
            }
            e.Ak();
          };
          i.ji();
        }
      };
      var _0x3987d2 = function () {
        var e = $(_0x2458(1333));
        var i = $("#popup-menu-coins-box");
        var n = $(_0x2458(1984));
        $(_0x2458(521)).click(function () {
          var t = window[_0x2458(2086)] = _0x1ff066;
          t.r.Cd();
          t.s.gi();
        });
        i[_0x2458(704)](function () {
          var t = window[_0x2458(2086)] = _0x1ff066;
          if (t.u.P()) {
            t.r.Cd();
            t.s.I(t.s.Wh);
          }
        });
        var o = _0x22ee20(_0x501845, function (e, i) {
          _0x501845[_0x2458(1459)](this, 1);
          this.ad = e;
          this.Dk = i;
        });
        var a = "\n                        <div id=\"settings-menu\" style=\"display: flex; opacity: 0; z-index: 2;\">\n                            <div class=\"navigation\">\n                                <div class=\"tab material-button active\" category=\"profile\"  style=\"position: relative; overflow: hidden;\">\n                                    <i class=\"material-icons\">person</i>\n                                    <span>Profile</span>\n                                </div>\n                                <div class=\"tab material-button\" category=\"game\"  style=\"position: relative; overflow: hidden;\">\n                                    <i class=\"material-icons\">games</i>\n                                    <span>Game</span>\n                                </div>\n                                <div class=\"tab material-button\" category=\"theme\" style=\"position: relative; overflow: hidden;\">\n                                    <i class=\"material-icons\">palette</i>\n                                    <span>Theme</span>\n                                </div>\n                                <div class=\"tab material-button\" id=\"button-inputs\" data-toggle=\"modal\" data-target=\"#hotkeysModal\" category=\"controls\" style=\"position: relative; overflow: hidden;\">\n                                    <i class=\"material-icons\">keyboard</i>\n                                    <span>Controls</span>\n                                </div>\n                                <div class=\"tab material-button\" category=\"cursor\" style=\"position: relative; overflow: hidden;\">\n                                    <i class=\"material-icons\">mouse</i>\n                                    <span>Cursor</span>\n                                </div>\n                                <div class=\"tab material-button\" category=\"sound\" style=\"position: relative; overflow: hidden;\">\n                                    <i class=\"material-icons\">volume_up</i>\n                                    <span>Sound</span>\n                                </div>\n                                 <!-- 🏆 Nueva pestaña: Equipos -->\n                                <div class=\"tab material-button\" category=\"teams\" style=\"position: relative; overflow: hidden;\">\n                                    <i class=\"material-icons\">group</i>\n                                    <span>Teams</span>\n                                </div>\n                                <!-- 🎨 Nueva pestaña: Skins -->\n                                <div class=\"tab material-button\" category=\"skins\" style=\"position: relative; overflow: hidden;\">\n                                    <i class=\"material-icons\">brush</i>\n                                    <span>Skins</span>\n                                </div>\n                                 <!-- 🎨 Nueva pestaña: Stremers  -->\n                                <div class=\"tab material-button\" category=\"streamers\" style=\"position: relative; overflow: hidden;\">\n                                    <i class=\"material-icons\">live_tv</i>\n                                    <span>Live</span>\n                                </div>\n                            </div>\n\n                            <div class=\"options-list ps\">\n                                <div category=\"game\" class=\"\">\n                                    <div class=\"background-container\">\n                                        <div class=\"name2\">SELECT BACKGROUND</div>\n                                        <div class=\"background-selector\">\n                                                <button id=\"prevBackground\" class=\"nav-button\" onclick=\"changeBackground(-1)\">❮</button>\n                                                <div id=\"backgroundPreview\" class=\"background-preview\"></div>\n                                                <button id=\"nextBackground\" class=\"nav-button\" onclick=\"changeBackground(1)\">❯</button>\n                                            </div>\n                                    </div>\n                                    <div class=\"background-container\">\n                                        <div class=\"name2\">SELECT FONT IN GAME</div>\n                                        <div class=\"background-selector\">\n                                                <button id=\"prevFont\" class=\"nav-button\" onclick=\"changeFont(-1)\">❮</button>\n                                                <div id=\"fontPreview\" class=\"font-preview\">AaBbCc</div>\n                                                <button id=\"nextFont\" class=\"nav-button\" onclick=\"changeFont(1)\">❯</button>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div category=\"theme\" class=\"\">\n\n                                </div>\n                                <div category=\"controls\" class=\"\">\n                                    <div class=\"hotkey-container\"></div>\n                                </div>\n                                <div category=\"profile\" class=\"active\">\n                                    <div class=\"profile-card\">\n                                        <!-- Imagen de perfil -->\n                                        <div class=\"profile-picture\">\n                                            <img src=\"https://i.imgur.com/gUysDha.png\" id=\"avatarUrl\" alt=\"Profile Picture\">\n                                        </div>\n                                        \n                                        <!-- Datos del usuario -->\n                                        <div class=\"profile-info\">\n                                            <h2>User Profile</h2>\n                                            <!--p><strong>Nombre:</strong> <span id=\"username\">Usuario</span></p>\n                                            <p><strong>Email:</strong> <span id=\"useremail\">usuario@email.com</span></p-->\n                                            \n                                            <!-- Contenedor del ID con botón para copiar -->\n                                            <div class=\"profile-id-container\">\n                                                <span id=\"idperfil\">ID: <span id=\"userid\"></span></span>\n                                                <button id=\"idcopiar\" class=\"copy-button\">Copy ID</button>\n                                            </div>\n                                            <button id=\"resetScript\" class=\"reset-button\">Change Version</button>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div category=\"cursor\" class=\"\"></div>\n                                <div category=\"sound\" class=\"\">\n                                 <!-- Contenedor de enlaces con botones -->\n                                <div class=\"sound-inputs\">\n                                    <div class=\"input-container\">\n                                        <div class=\"name\">" + lenguaje[idiomaActual][_0x2458(945)] + _0x2458(1687) + lenguaje[idiomaActual][_0x2458(708)] + _0x2458(1174) + lenguaje[idiomaActual][_0x2458(800)] + _0x2458(1900) + lenguaje[idiomaActual][_0x2458(739)] + _0x2458(1229);
        $(_0x2458(1053))[_0x2458(1895)](a);
        $(_0x2458(1753)).on(_0x2458(704), function () {
          var i = $(this)[_0x2458(860)](_0x2458(2021));
          if (!$(this).hasClass(_0x2458(615))) {
            $(_0x2458(1373))[_0x2458(791)](_0x2458(615));
            $(this)[_0x2458(701)]("active");
            $(_0x2458(1735) + i + "']")[_0x2458(701)]("active");
          }
        });
        document[_0x2458(2056)]("resetScript")[_0x2458(837)]("click", async function () {
          localStorage.clear();
          sessionStorage.clear();
          if (window[_0x2458(627)]) {
            (await indexedDB[_0x2458(1650)]()).forEach(t => indexedDB[_0x2458(561)](t.name));
          }
          if (window[_0x2458(880)]) {
            console[_0x2458(755)](_0x2458(762));
          }
          document[_0x2458(753)][_0x2458(2081)](";")[_0x2458(919)](function (t) {
            document[_0x2458(753)] = t[_0x2458(1799)](/^ +/, "")[_0x2458(1799)](/=.*/, _0x2458(869) + new Date()[_0x2458(730)]() + _0x2458(1436));
          });
          if (_0x2458(2099) in window) {
            caches[_0x2458(1721)]()[_0x2458(664)](function (t) {
              for (let e of t) caches.delete(e);
            });
          }
          if (_0x2458(1185) in navigator) {
            const t = await navigator[_0x2458(1185)][_0x2458(517)]();
            for (let e of t) await e.unregister();
          }
          localStorage[_0x2458(1934)](_0x2458(1215));
          location[_0x2458(515)]();
        });
        soundEnabled = true;
        $("#toggle-sound")[_0x2458(704)](function () {
          soundEnabled = !soundEnabled;
          $(this).text(_0x2458(soundEnabled ? 628 : 972));
        });
        $(_0x2458(535))[_0x2458(704)](function () {
          navigator[_0x2458(1774)][_0x2458(1319)](zw_userId);
          alert(_0x2458(1901) + zw_userId);
        });
        window[_0x2458(1845)] = function (e) {
          let n = localStorage[_0x2458(946)](_0x2458(1975));
          currentIndex = null !== n ? parseInt(n) : 0;
          currentIndex = (currentIndex + e + backgrounds[_0x2458(1543)]) % backgrounds[_0x2458(1543)];
          updateBackground(currentIndex);
        };
        window[_0x2458(1404)] = function (e) {
          currentFontIndex = (currentFontIndex + e + fonts[_0x2458(1543)]) % fonts[_0x2458(1543)];
          updateFont();
        };
        updateFont();
        const s = [{
          id: _0x2458(851),
          label: _0x2458(1834),
          category: _0x2458(1718),
          tooltip: ""
        }, {
          id: _0x2458(2075),
          label: _0x2458(1401),
          category: _0x2458(1718),
          tooltip: ""
        }, {
          id: _0x2458(528),
          label: _0x2458(1355),
          category: "game",
          tooltip: ""
        }, {
          id: _0x2458(1976),
          label: _0x2458(1043),
          category: _0x2458(1718),
          tooltip: ""
        }, {
          id: _0x2458(1299),
          label: "SHOW TOP HS",
          category: _0x2458(1718),
          tooltip: _0x2458(1643)
        }, {
          id: "killFeed",
          label: _0x2458(1855),
          category: "game",
          tooltip: _0x2458(1010)
        }, {
          id: _0x2458(531),
          label: _0x2458(712),
          category: _0x2458(483),
          tooltip: ""
        }];
        const r = [{
          name: _0x2458(1792),
          id: _0x2458(2022),
          min: .1,
          max: 15,
          step: .1,
          category: _0x2458(1718),
          tooltip: ""
        }];
        const c = {
          game: document.querySelector(_0x2458(1269)),
          teams: document[_0x2458(506)](".options-list > div[category=\"teams\"]"),
          theme: document[_0x2458(506)](_0x2458(1985)),
          controls: document[_0x2458(506)](".options-list > div[category=\"controls\"]")
        };
        if (isPremiumUser) {
          s[_0x2458(1973)]({
            id: _0x2458(2028),
            label: "INCOGNITO",
            category: _0x2458(1718),
            tooltip: _0x2458(836)
          }, {
            id: _0x2458(2080),
            label: "LASER HS",
            category: _0x2458(1718),
            tooltip: _0x2458(836)
          }, {
            id: _0x2458(576),
            label: _0x2458(1915),
            category: _0x2458(1718),
            tooltip: _0x2458(836)
          }, {
            id: _0x2458(656),
            label: _0x2458(516),
            category: _0x2458(1718),
            tooltip: "Premium Feature"
          }, {
            id: _0x2458(1226),
            label: _0x2458(2051),
            category: _0x2458(1718),
            tooltip: _0x2458(836)
          }, {
            id: _0x2458(950),
            label: _0x2458(1946),
            category: _0x2458(1718),
            tooltip: _0x2458(836)
          }, {
            id: "visiblePowersAll",
            label: _0x2458(1147),
            category: "game",
            tooltip: _0x2458(836)
          }, {
            id: "hideYouNameInMinimap",
            label: _0x2458(1664),
            category: _0x2458(483),
            tooltip: _0x2458(836)
          });
          const e = _0x2458(1568);
          c.teams.insertAdjacentHTML(_0x2458(1287), e);
          r.push({
            name: _0x2458(1826),
            id: _0x2458(1221),
            min: 1,
            max: 6,
            step: 1,
            category: _0x2458(1718),
            tooltip: "Premium Feature"
          }, {
            name: _0x2458(969),
            id: _0x2458(610),
            min: 1.2,
            max: 3.2,
            step: .2,
            category: _0x2458(1718),
            tooltip: _0x2458(836)
          }, {
            name: _0x2458(706),
            id: _0x2458(1794),
            min: .5,
            max: 3,
            step: .5,
            category: _0x2458(1718),
            tooltip: _0x2458(836)
          }, {
            name: _0x2458(834),
            id: "ComidaSize",
            min: .5,
            max: 3,
            step: .5,
            category: "game",
            tooltip: _0x2458(836)
          }, {
            name: _0x2458(960),
            id: "mouseDelay",
            min: 10,
            max: 20,
            step: 1,
            category: _0x2458(1718),
            tooltip: _0x2458(836)
          }, {
            name: "SMOOTH CAMERA",
            id: _0x2458(1982),
            min: .1,
            max: .9,
            step: .1,
            category: _0x2458(1718),
            tooltip: _0x2458(836)
          });
        }
        r.forEach(e => {
          const n = parseFloat(theoKzObjects[e.id]);
          const o = document[_0x2458(1786)](_0x2458(944));
          o.className = _0x2458(1669);
          o[_0x2458(1523)] = _0x2458(442) + (e[_0x2458(1296)][_0x2458(1631)]("Premium") ? _0x2458(1385) : "") + "\">" + e[_0x2458(1582)] + "</div>\n        <div class=\"value\">" + n + _0x2458(2037) + (n - e[_0x2458(1940)]) / (e.max - e[_0x2458(1940)]) * 100 + "%;\"></div>\n            </div>\n            <input type=\"range\" id=\"" + e.id + _0x2458(947) + e[_0x2458(1940)] + _0x2458(1623) + e[_0x2458(1478)] + _0x2458(1266) + e[_0x2458(1216)] + _0x2458(2015) + n + "\">\n        </div>\n    ";
          const a = o.querySelector(_0x2458(534));
          const s = o[_0x2458(506)](_0x2458(1869));
          const r = o[_0x2458(506)](".fill");
          a[_0x2458(837)](_0x2458(534), () => {
            s[_0x2458(1773)] = a[_0x2458(448)];
            r[_0x2458(437)][_0x2458(1350)] = (a[_0x2458(448)] - e[_0x2458(1940)]) / (e[_0x2458(1478)] - e[_0x2458(1940)]) * 100 + "%";
            theoKzObjects[e.id] = a[_0x2458(448)];
            localStorage[_0x2458(1425)](e.id, a.value);
            if (e.id === _0x2458(1500)) {
              anApp.o[_0x2458(1983)](parseInt(a.value));
            }
          });
          c[e[_0x2458(2021)]].appendChild(o);
        });
        s[_0x2458(919)](e => {
          const n = localStorage[_0x2458(946)](e.id) === _0x2458(1348);
          const o = _0x2458(935) + (n ? "on" : "") + _0x2458(493) + e.id + "\">\n                                <div class=\"name\" style=\"" + (e[_0x2458(1296)][_0x2458(1631)](_0x2458(2036)) ? _0x2458(1385) : "") + "\">" + e.label + "</div>\n                                <div class=\"box\"><div class=\"ball\"></div></div>\n                                " + (e[_0x2458(1296)] ? _0x2458(916) + e[_0x2458(1296)] + _0x2458(1168) : "") + _0x2458(1445);
          c[e[_0x2458(2021)]][_0x2458(430)](_0x2458(1287), o);
        });
        document.querySelectorAll(_0x2458(1020))[_0x2458(919)](e => {
          e[_0x2458(837)](_0x2458(704), function (t) {
            t[_0x2458(1335)]();
            const n = this.parentElement;
            const o = n[_0x2458(794)](_0x2458(1448));
            const a = !n[_0x2458(1531)].contains("on");
            n[_0x2458(1531)][_0x2458(862)]("on", a);
            theoKzObjects[o] = a;
            localStorage[_0x2458(1425)](o, a);
            const s = n[_0x2458(506)](_0x2458(559));
            if (s) {
              s[_0x2458(437)][_0x2458(1470)] = _0x2458(a ? 1927 : 1505);
            }
            console[_0x2458(923)](o + _0x2458(1873), a);
          });
        });
        addMinicolor($(_0x2458(2009))[1], "teamColorGroup", "YOUR COLOR IN MAP", _0x2458(2046), "FFFFFF");
        $(_0x2458(1758)).on("input", function () {
          let i = $(this)[_0x2458(898)]();
          $(_0x2458(2014))[_0x2458(1305)](_0x2458(509), i);
          localStorage.setItem(_0x2458(2046), zwormData[_0x2458(2046)]);
          zwormData.teamColor = "0x" + i[_0x2458(914)](1);
          console.log(zwormData[_0x2458(2046)]);
        });
        let l = localStorage[_0x2458(946)](_0x2458(2046));
        if (l) {
          zwormData[_0x2458(2046)] = l;
          $("#preview_teamColor")[_0x2458(1305)]("background-color", "#" + l[_0x2458(914)](2));
          $("#teamColor")[_0x2458(898)]("#" + l[_0x2458(914)](2));
        }
        _0x2458(2003);
        _0x2458(703);
        _0x2458(1840);
        _0x2458(719);
        _0x2458(1739);
        _0x2458(1978);
        _0x2458(839);
        _0x2458(768);
        _0x2458(1618);
        _0x2458(1649);
        _0x2458(1077);
        _0x2458(1442);
        lenguaje[idiomaActual][_0x2458(638)];
        _0x2458(1586);
        _0x2458(1808);
        _0x2458(1747);
        _0x2458(1893);
        _0x2458(1764);
        _0x2458(1586);
        _0x2458(1808);
        _0x2458(1103);
        _0x2458(1727);
        _0x2458(1978);
        _0x2458(1808);
        _0x2458(1363);
        _0x2458(2013);
        _0x2458(1978);
        _0x2458(1586);
        _0x2458(1808);
        lenguaje[idiomaActual][_0x2458(1008)];
        _0x2458(1145);
        _0x2458(859);
        lenguaje[idiomaActual].fondo0;
        _0x2458(1772);
        lenguaje[idiomaActual][_0x2458(1322)];
        _0x2458(803);
        lenguaje[idiomaActual][_0x2458(1725)];
        _0x2458(1551);
        lenguaje[idiomaActual][_0x2458(1874)];
        _0x2458(1050);
        _0x2458(1956);
        lenguaje[idiomaActual][_0x2458(883)];
        _0x2458(1050);
        _0x2458(2117);
        _0x2458(1326);
        _0x2458(1050);
        _0x2458(2011);
        _0x2458(1858);
        _0x2458(1050);
        _0x2458(1050);
        _0x2458(1238);
        _0x2458(1553);
        _0x2458(1907);
        _0x2458(888);
        _0x2458(1050);
        _0x2458(884);
        _0x2458(1264);
        _0x2458(1386);
        _0x2458(1050);
        _0x2458(789);
        _0x2458(774);
        _0x2458(1050);
        _0x2458(901);
        _0x2458(896);
        _0x2458(1050);
        _0x2458(1678);
        _0x2458(1978);
        _0x2458(1586);
        _0x2458(1808);
        _0x2458(1249);
        _0x2458(1886);
        _0x2458(870);
        _0x2458(2058);
        _0x2458(1467);
        _0x2458(1818);
        _0x2458(1827);
        _0x2458(1068);
        _0x2458(1282);
        _0x2458(991);
        _0x2458(1678);
        _0x2458(1978);
        _0x2458(1586);
        _0x2458(1808);
        _0x2458(1217);
        lenguaje[idiomaActual][_0x2458(1416)];
        _0x2458(1168);
        _0x2458(1113);
        _0x2458(1978);
        _0x2458(1586);
        _0x2458(831);
        _0x2458(1978);
        _0x2458(1978);
        let h = "true" === localStorage.getItem("top8") || localStorage[_0x2458(946)](_0x2458(1299)) !== _0x2458(906) && true;
        let d = localStorage[_0x2458(946)]("killFeed") === _0x2458(1348) || localStorage.getItem("killFeed") !== _0x2458(906) && theoKzObjects[_0x2458(447)];
        $(_0x2458(804)).prop(_0x2458(887), h);
        $("#toggleKillFeed")[_0x2458(1661)](_0x2458(887), d);
        $(_0x2458(700))[_0x2458(862)](h);
        $("#killFeed")[_0x2458(862)](d);
        if ("true" === localStorage[_0x2458(946)](_0x2458(1299)) || "false" === localStorage[_0x2458(946)]("top8")) {
          theoKzObjects[_0x2458(1299)] = h;
          localStorage[_0x2458(1425)](_0x2458(1299), h);
        }
        if (localStorage.getItem(_0x2458(447)) === _0x2458(1348) || localStorage[_0x2458(946)]("killFeed") === _0x2458(906)) {
          theoKzObjects[_0x2458(447)] = d;
          localStorage[_0x2458(1425)](_0x2458(447), d);
        }
        $(_0x2458(804)).on("change", function () {
          theoKzObjects[_0x2458(1299)] = this.checked;
          $(_0x2458(700)).toggle(this[_0x2458(887)]);
          localStorage[_0x2458(1425)]("top8", theoKzObjects[_0x2458(1299)]);
        });
        $(_0x2458(1407)).on(_0x2458(1862), function () {
          theoKzObjects[_0x2458(447)] = this[_0x2458(887)];
          $("#killFeed")[_0x2458(862)](this.checked);
          localStorage[_0x2458(1425)](_0x2458(447), theoKzObjects[_0x2458(447)]);
        });
        $(_0x2458(804)).hover(function () {
          $(_0x2458(787))[_0x2458(710)]();
        }, function () {
          $(_0x2458(787))[_0x2458(724)]();
        });
        $(_0x2458(1407))[_0x2458(821)](function () {
          $(_0x2458(1994))[_0x2458(710)]();
        }, function () {
          $(_0x2458(1994))[_0x2458(724)]();
        });
        $(_0x2458(1196)).on(_0x2458(534), function () {
          zwormData[_0x2458(1954)] = $(this)[_0x2458(898)]();
          localStorage.setItem("teamCode", "");
          console[_0x2458(923)]("Team Code updated:", zwormData[_0x2458(1954)]);
        });
        let x = localStorage[_0x2458(946)](_0x2458(1954));
        if (x) {
          zwormData[_0x2458(1954)] = x;
          $(_0x2458(1196))[_0x2458(898)](x);
        }
        zw_selectedbackground = 0;
        zw_toplist = 10;
        var u = $("#arkaplan");
        var _ = $("#zwtop");
        var f = localStorage[_0x2458(946)](_0x2458(605));
        if (f) {
          var b = parseInt(f);
          u[_0x2458(898)](b);
          zw_selectedbackground = b;
        }
        const p = localStorage.getItem(_0x2458(1199));
        if (p) {
          const t = parseInt(p);
          zw_toplist = t;
        }
        let v = _wrmxt[_0x2458(1372)](theoKzObjects[_0x2458(2091)]);
        if (v) {
          $(_0x2458(1331))[_0x2458(898)](theoKzObjects[_0x2458(2091)]);
        } else {
          let e = $(_0x2458(1331)).val();
          v = "" !== e && null != e && !isNaN(e);
          theoKzObjects.idReplaceSkin = v ? e : 35;
        }
        _[_0x2458(898)](zw_toplist);
        u[_0x2458(1862)](function (e) {
          var n = obtenerImagenPorSeleccion(zw_selectedbackground = this[_0x2458(448)]);
          if (n) {
            anApp.q.Cf = new PIXI[_0x2458(1324)](anApp.q[_0x2458(1674)](n));
          }
          localStorage[_0x2458(1425)](_0x2458(605), this[_0x2458(448)][_0x2458(1203)]());
        });
        _.change(function (e) {
          zw_toplist = this.value;
          localStorage.setItem(_0x2458(1199), this[_0x2458(448)][_0x2458(1203)]());
        });
        $(_0x2458(1926))[_0x2458(704)](function () {
          navigator.clipboard.writeText(zw_userId);
        });
        o[_0x2458(1938)].a = function () {
          o[_0x2458(1246)][_0x2458(1938)].a[_0x2458(1459)](this);
          if (!o.Ek) {
            o.Ek = true;
            var i = window[_0x2458(2086)] = _0x1ff066;
            i.u.Pi(function () {
              if (i.u.P()) {
                n.html(i.u.zi());
              } else {
                n.html("0");
              }
            });
          }
        };
        o.Fk = $(_0x2458(1453));
        o.Gk = $("#leaders-view");
        o.Hk = $(_0x2458(686));
        o.Ik = $("#settings-view");
        o.Jk = $(_0x2458(1152));
        o.Kk = $("#skins-view");
        o.Lk = $(_0x2458(885));
        o[_0x2458(1592)] = $("#wormtr-settings-view");
        o.Mk = $(_0x2458(2090));
        o.Nk = $(_0x2458(1009));
        o.Ok = $(_0x2458(497));
        o.Pk = $(_0x2458(1942));
        o[_0x2458(1938)].ii = function () {
          _0x501845.fk[_0x2458(1561)]();
          _0x501845.fk[_0x2458(724)](200);
          _0x501845.gk[_0x2458(1561)]();
          _0x501845.gk[_0x2458(724)](200);
          _0x501845.hk[_0x2458(1561)]();
          _0x501845.hk[_0x2458(724)](200);
          _0x501845.ik[_0x2458(1561)]();
          _0x501845.ik[_0x2458(710)](200);
          _0x501845.jk[_0x2458(1561)]();
          _0x501845.jk[_0x2458(724)](200);
          _0x501845.kk.stop();
          _0x501845.kk[_0x2458(724)](200);
          _0x501845.nk[_0x2458(1561)]();
          _0x501845.nk[_0x2458(710)](200);
          _0x501845.ok[_0x2458(1561)]();
          _0x501845.ok.fadeIn(200);
          e.html(this.ad);
          i.toggle(this.Dk);
          this.Qk();
          this.Rk();
        };
        o[_0x2458(1938)].Rk = function () {};
        o[_0x2458(1938)].Sk = function () {
          _0x3987d2.Pk[_0x2458(1561)]();
          _0x3987d2.Pk[_0x2458(710)](300);
        };
        o[_0x2458(1938)].Qk = function () {
          _0x3987d2.Pk.stop();
          _0x3987d2.Pk[_0x2458(724)](300);
        };
        return o;
      }();
      _0xe7ebe5 = $(_0x2458(1724));
      _0x3a628c = $(_0x2458(961));
      _0x2548cd = $(_0x2458(1177));
      _0x3d7d3a = $("#store-buy-coins_7000");
      _0x42fb3f = $(_0x2458(2055));
      _0x9a3f57 = $(_0x2458(1752));
      _0x636b85 = _0x22ee20(_0x3987d2, function () {
        _0x3987d2[_0x2458(1459)](this, window[_0x2458(782)][_0x2458(2039)], false);
        var e = window[_0x2458(2086)] = _0x1ff066;
        var i = this;
        _0xe7ebe5[_0x2458(704)](function () {
          e.r.Cd();
          i.Tk(_0x2458(1578));
        });
        _0x3a628c.click(function () {
          e.r.Cd();
          i.Tk(_0x2458(1506));
        });
        _0x2548cd[_0x2458(704)](function () {
          e.r.Cd();
          i.Tk("coins_16000");
        });
        _0x3d7d3a[_0x2458(704)](function () {
          e.r.Cd();
          i.Tk("coins_7000");
        });
        _0x42fb3f[_0x2458(704)](function () {
          e.r.Cd();
          i.Tk(_0x2458(1017));
        });
        _0x9a3f57.click(function () {
          e.r.Cd();
          i.Tk(_0x2458(956));
        });
      });
      _0x636b85[_0x2458(1938)].a = function () {
        _0x636b85[_0x2458(1246)][_0x2458(1938)].a[_0x2458(1459)](this);
      };
      _0x636b85[_0x2458(1938)].Rk = function () {
        _0x3987d2.Fk[_0x2458(1561)]();
        _0x3987d2.Fk.fadeIn(200);
        _0x3987d2.Gk[_0x2458(1561)]();
        _0x3987d2.Gk[_0x2458(724)](50);
        _0x3987d2.Hk[_0x2458(1561)]();
        _0x3987d2.Hk[_0x2458(724)](50);
        _0x3987d2.Jk[_0x2458(1561)]();
        _0x3987d2.Jk[_0x2458(724)](50);
        _0x3987d2.Ik[_0x2458(1561)]();
        _0x3987d2.Ik[_0x2458(724)](50);
        _0x3987d2.Kk[_0x2458(1561)]();
        _0x3987d2.Kk[_0x2458(724)](50);
        _0x3987d2.Lk[_0x2458(1561)]();
        _0x3987d2.Lk.fadeOut(50);
        _0x3987d2.Mk[_0x2458(1561)]();
        _0x3987d2.Mk.fadeOut(50);
        _0x3987d2[_0x2458(1592)][_0x2458(1561)]();
        _0x3987d2[_0x2458(1592)][_0x2458(724)](50);
        _0x3987d2.Nk[_0x2458(1561)]();
        _0x3987d2.Nk.fadeOut(50);
        _0x3987d2.Ok.stop();
        _0x3987d2.Ok[_0x2458(724)](50);
      };
      _0x636b85.prototype.ji = function () {
        (window[_0x2458(2086)] = _0x1ff066).r.Dd();
      };
      _0x636b85[_0x2458(1938)].Tk = function (t) {};
      _0xd70569 = $(_0x2458(1044));
      _0x740b1 = $(_0x2458(1889));
      _0x54c9d0 = $(_0x2458(1852));
      _0x1deb30 = $(_0x2458(2070));
      _0xf48613 = _0x22ee20(_0x3987d2, function () {
        _0x3987d2[_0x2458(1459)](this, window[_0x2458(782)][_0x2458(865)], true);
        var e = window[_0x2458(2086)] = _0x1ff066;
        var i = this;
        this.Uk = {};
        this.Vk = {
          Wk: {
            Xk: _0x740b1,
            Yk: _0x2458(931)
          },
          Zk: {
            Xk: _0x54c9d0,
            Yk: _0x2458(454)
          },
          $k: {
            Xk: _0x1deb30,
            Yk: "byKillsAndHeadShots"
          }
        };
        _0x740b1[_0x2458(704)](function () {
          e.r.Cd();
          i._k(i.Vk.Wk);
        });
        _0x54c9d0[_0x2458(704)](function () {
          e.r.Cd();
          i._k(i.Vk.Zk);
        });
        _0x1deb30[_0x2458(704)](function () {
          e.r.Cd();
          i._k(i.Vk.$k);
        });
      });
      _0xf48613[_0x2458(1938)].a = function () {
        _0xf48613[_0x2458(1246)].prototype.a.call(this);
      };
      _0xf48613[_0x2458(1938)].Rk = function () {
        _0x3987d2.Fk[_0x2458(1561)]();
        _0x3987d2.Fk.fadeOut(50);
        _0x3987d2.Gk.stop();
        _0x3987d2.Gk[_0x2458(710)](200);
        _0x3987d2.Hk.stop();
        _0x3987d2.Hk[_0x2458(724)](50);
        _0x3987d2.Jk[_0x2458(1561)]();
        _0x3987d2.Jk[_0x2458(724)](50);
        _0x3987d2.Ik.stop();
        _0x3987d2.Ik.fadeOut(50);
        _0x3987d2.Kk.stop();
        _0x3987d2.Kk.fadeOut(50);
        _0x3987d2.Lk[_0x2458(1561)]();
        _0x3987d2.Lk[_0x2458(724)](50);
        _0x3987d2.Mk.stop();
        _0x3987d2.Mk[_0x2458(724)](50);
        _0x3987d2[_0x2458(1592)].stop();
        _0x3987d2[_0x2458(1592)].fadeOut(50);
        _0x3987d2.Nk[_0x2458(1561)]();
        _0x3987d2.Nk[_0x2458(724)](50);
        _0x3987d2.Ok.stop();
        _0x3987d2.Ok.fadeOut(50);
      };
      _0xf48613[_0x2458(1938)].ji = function () {
        (window[_0x2458(2086)] = _0x1ff066).r.Dd();
        var e = this;
        this.Sk();
        $[_0x2458(824)](_0x7fa75 + _0x2458(1082), function (t) {
          e.Uk = t;
          e._k(null != e.al ? e.al : e.Vk.Wk);
          e.Qk();
        })[_0x2458(1189)](function () {
          e.Qk();
        });
      };
      _0xf48613[_0x2458(1938)]._k = function (t) {
        this.al = t;
        for (var i in this.Vk) if (this.Vk[_0x2458(1525)](i)) {
          this.Vk[i].Xk.removeClass(_0x2458(697));
        }
        this.al.Xk[_0x2458(701)](_0x2458(697));
        var n = this.Uk[this.al.Yk];
        var o = "";
        for (var a = 0; a < n[_0x2458(1543)]; a++) {
          var s = n[a];
          o += _0x2458(630) + (a + 1) + _0x2458(495) + s.avatarUrl + "\"/></span><span>" + s[_0x2458(1079)] + _0x2458(1980) + s[_0x2458(2040)] + _0x2458(1980) + s[_0x2458(1456)] + "</span><span>" + s.headShots + _0x2458(565) + s[_0x2458(2096)] + _0x2458(867);
        }
        _0xd70569[_0x2458(909)]();
        _0xd70569[_0x2458(1715)](o);
      };
      _0x41a74a = $(_0x2458(560));
      _0x54ff02 = $(_0x2458(731));
      _0xa28ceb = _0x22ee20(_0x3987d2, function () {
        _0x3987d2[_0x2458(1459)](this, window[_0x2458(782)][_0x2458(1071)], false);
        var e = window[_0x2458(2086)] = _0x1ff066;
        var i = this;
        _0x41a74a[_0x2458(704)](function () {
          e.r.Cd();
          i.Sk();
          e.u.Qi(function () {
            i.Qk();
          });
          setTimeout(function () {
            i.Qk();
          }, 1e4);
          e.u.Zi();
        });
        _0x54ff02[_0x2458(704)](function () {
          e.r.Cd();
          i.Sk();
          e.u.Qi(function () {
            i.Qk();
          });
          setTimeout(function () {
            i.Qk();
          }, 1e4);
          e.u.Vi();
        });
      });
      _0xa28ceb[_0x2458(1938)].a = function () {
        _0xa28ceb[_0x2458(1246)].prototype.a.call(this);
      };
      _0xa28ceb.prototype.Rk = function () {
        _0x3987d2.Fk[_0x2458(1561)]();
        _0x3987d2.Fk[_0x2458(724)](50);
        _0x3987d2.Gk.stop();
        _0x3987d2.Gk[_0x2458(724)](50);
        _0x3987d2.Hk[_0x2458(1561)]();
        _0x3987d2.Hk[_0x2458(724)](50);
        _0x3987d2.Jk.stop();
        _0x3987d2.Jk.fadeIn(200);
        _0x3987d2.Ik[_0x2458(1561)]();
        _0x3987d2.Ik[_0x2458(724)](50);
        _0x3987d2.Kk[_0x2458(1561)]();
        _0x3987d2.Kk[_0x2458(724)](50);
        _0x3987d2.Lk[_0x2458(1561)]();
        _0x3987d2.Lk.fadeOut(50);
        _0x3987d2.Mk[_0x2458(1561)]();
        _0x3987d2.Mk[_0x2458(724)](50);
        _0x3987d2[_0x2458(1592)].stop();
        _0x3987d2[_0x2458(1592)][_0x2458(724)](50);
        _0x3987d2.Nk.stop();
        _0x3987d2.Nk[_0x2458(724)](50);
        _0x3987d2.Ok[_0x2458(1561)]();
        _0x3987d2.Ok.fadeOut(50);
      };
      _0xa28ceb.prototype.ji = function () {
        (window[_0x2458(2086)] = _0x1ff066).r.Dd();
      };
      _0x2d2e21 = $(_0x2458(1948));
      _0x2be406 = $(_0x2458(1131));
      _0x48a55a = $(_0x2458(1666));
      _0x57d28d = $(_0x2458(893));
      _0x261ee3 = $("#profile-level");
      _0x495970 = $("#profile-stat-highScore");
      _0x3a6e72 = $(_0x2458(1904));
      _0xd1bfa6 = $(_0x2458(1521));
      _0x12903d = $(_0x2458(548));
      _0x5d6fc7 = $(_0x2458(1328));
      _0x44a931 = $(_0x2458(1791));
      _0x1ff050 = $(_0x2458(1460));
      _0x1d3509 = _0x22ee20(_0x3987d2, function () {
        _0x3987d2[_0x2458(1459)](this, window[_0x2458(782)]["index.game.popup.menu.profile.tab"], true);
      });
      _0x1d3509[_0x2458(1938)].a = function () {
        _0x1d3509[_0x2458(1246)][_0x2458(1938)].a[_0x2458(1459)](this);
      };
      _0x1d3509[_0x2458(1938)].Rk = function () {
        _0x3987d2.Fk[_0x2458(1561)]();
        _0x3987d2.Fk.fadeOut(50);
        _0x3987d2.Gk.stop();
        _0x3987d2.Gk.fadeOut(50);
        _0x3987d2.Hk[_0x2458(1561)]();
        _0x3987d2.Hk.fadeIn(200);
        _0x3987d2.Jk[_0x2458(1561)]();
        _0x3987d2.Jk[_0x2458(724)](50);
        _0x3987d2.Ik.stop();
        _0x3987d2.Ik[_0x2458(724)](50);
        _0x3987d2.Kk[_0x2458(1561)]();
        _0x3987d2.Kk[_0x2458(724)](50);
        _0x3987d2.Lk.stop();
        _0x3987d2.Lk.fadeOut(50);
        _0x3987d2.Mk[_0x2458(1561)]();
        _0x3987d2.Mk[_0x2458(724)](50);
        _0x3987d2[_0x2458(1592)].stop();
        _0x3987d2[_0x2458(1592)][_0x2458(724)](50);
        _0x3987d2.Nk[_0x2458(1561)]();
        _0x3987d2.Nk[_0x2458(724)](50);
        _0x3987d2.Ok.stop();
        _0x3987d2.Ok[_0x2458(724)](50);
      };
      _0x1d3509[_0x2458(1938)].ji = function () {
        var e = window[_0x2458(2086)] = _0x1ff066;
        e.r.Dd();
        var i = e.u.Oi();
        var n = moment([i.year, i[_0x2458(1032)] - 1, i[_0x2458(854)]])[_0x2458(564)]("LL");
        _0x2be406[_0x2458(1104)](e.u.wi());
        _0x2d2e21[_0x2458(860)]("src", e.u.xi());
        _0x48a55a[_0x2458(1350)](100 * e.u.Bi() / e.u.Ci() + "%");
        _0x57d28d.html(e.u.Bi() + _0x2458(565) + e.u.Ci());
        _0x261ee3[_0x2458(1104)](e.u.Ai());
        _0x495970[_0x2458(1104)](e.u.Ii());
        _0x3a6e72.html(_0x55a05a(e.u.Ji()));
        _0xd1bfa6.html(e.u.Ki());
        _0x12903d[_0x2458(1104)](e.u.Li());
        _0x5d6fc7[_0x2458(1104)](e.u.Mi());
        _0x44a931[_0x2458(1104)](_0x55a05a(e.u.Ni()));
        _0x1ff050.html(n);
      };
      _0x745e04 = $(_0x2458(492));
      _0x39dc9f = $(_0x2458(566));
      _0xd1ef25 = $(_0x2458(2042));
      _0x38b462 = $(_0x2458(1914));
      _0x227c82 = $("#popup-logout-container");
      _0x564793 = $(_0x2458(1502));
      _0x3fd201 = $(_0x2458(1480));
      _0x1c0e1c = $(_0x2458(503));
      _0x5b3fc2 = _0x22ee20(_0x3987d2, function () {
        _0x3987d2[_0x2458(1459)](this, window[_0x2458(782)][_0x2458(1334)], false);
        var e = this;
        var i = window[_0x2458(2086)] = _0x1ff066;
        _0x745e04[_0x2458(704)](function () {
          var n = !!_0x745e04[_0x2458(1661)](_0x2458(887));
          _0x350985(_0x166161.Me, n, 30);
          i.r.td(n);
          i.r.Cd();
        });
        _0x39dc9f[_0x2458(704)](function () {
          var n = !!_0x39dc9f.prop(_0x2458(887));
          _0x350985(_0x166161.Ne, n, 30);
          i.r.rd(n);
          i.r.Cd();
        });
        _0xd1ef25[_0x2458(704)](function () {
          i.r.Cd();
        });
        _0x38b462[_0x2458(704)](function () {
          i.r.Cd();
          e.Sk();
          setTimeout(function () {
            e.Qk();
          }, 2e3);
          i.u.Wi();
        });
        _0x564793.click(function () {
          if (i.u.P()) {
            i.r.Cd();
            i.s.I(i.s.Vh);
          } else {
            i.r.Hd();
          }
        });
        _0x1c0e1c[_0x2458(704)](function () {
          if (i.Y()) {
            i.r.Cd();
            i.s.I(i.s.Uh);
          } else {
            i.r.Hd();
          }
        });
      });
      _0x5b3fc2[_0x2458(1938)].a = function () {
        _0x5b3fc2.parent.prototype.a.call(this);
        var e = window[_0x2458(2086)] = _0x1ff066;
        var i = undefined;
        i = _0x4961dc(_0x166161.Me) !== _0x2458(906);
        _0x745e04.prop("checked", i);
        e.r.td(i);
        var n = undefined;
        n = _0x4961dc(_0x166161.Ne) !== _0x2458(906);
        _0x39dc9f.prop(_0x2458(887), n);
        e.r.rd(n);
        var o = undefined;
        o = "false" !== _0x4961dc(_0x166161.ya);
        console[_0x2458(923)](_0x2458(1090) + o);
        _0xd1ef25[_0x2458(1661)]("checked", o);
        e.u.V(function () {
          _0x227c82[_0x2458(862)](e.u.P());
          _0x3fd201[_0x2458(862)](e.u.P());
        });
      };
      _0x5b3fc2[_0x2458(1938)].Rk = function () {
        _0x3987d2.Fk[_0x2458(1561)]();
        _0x3987d2.Fk[_0x2458(724)](50);
        _0x3987d2.Gk[_0x2458(1561)]();
        _0x3987d2.Gk.fadeOut(50);
        _0x3987d2.Hk.stop();
        _0x3987d2.Hk.fadeOut(50);
        _0x3987d2.Jk.stop();
        _0x3987d2.Jk[_0x2458(724)](50);
        _0x3987d2.Ik[_0x2458(1561)]();
        _0x3987d2.Ik[_0x2458(710)](200);
        _0x3987d2.Kk.stop();
        _0x3987d2.Kk[_0x2458(724)](50);
        _0x3987d2.Lk[_0x2458(1561)]();
        _0x3987d2.Lk[_0x2458(724)](50);
        _0x3987d2.Mk[_0x2458(1561)]();
        _0x3987d2.Mk[_0x2458(724)](50);
        _0x3987d2[_0x2458(1592)][_0x2458(1561)]();
        _0x3987d2[_0x2458(1592)].fadeOut(50);
        _0x3987d2.Nk.stop();
        _0x3987d2.Nk.fadeOut(50);
        _0x3987d2.Ok[_0x2458(1561)]();
        _0x3987d2.Ok[_0x2458(724)](50);
      };
      _0x5b3fc2[_0x2458(1938)].ji = function () {
        var e = window[_0x2458(2086)] = _0x1ff066;
        e.r.Dd();
        if (e.Y()) {
          _0x1c0e1c[_0x2458(1316)]();
        } else {
          _0x1c0e1c[_0x2458(1817)]();
        }
      };
      _0x5b3fc2[_0x2458(1938)].wa = function () {
        return _0xd1ef25[_0x2458(1661)](_0x2458(887));
      };
      var _0x2c583a = function () {
        var e = $(_0x2458(1242));
        var i = $("#skin-description-text");
        var n = $(_0x2458(1483));
        var o = $(_0x2458(1361));
        var a = $(_0x2458(529));
        var s = $(_0x2458(1102));
        var r = $(_0x2458(1338));
        var c = $(_0x2458(1712));
        var l = $("#store-view-prev");
        var h = $(_0x2458(767));
        var d = _0x22ee20(_0x3987d2, function () {
          _0x3987d2[_0x2458(1459)](this, window[_0x2458(782)]["index.game.popup.menu.skins.tab"], true);
          var n = this;
          var o = window[_0x2458(2086)] = _0x1ff066;
          this.bl = null;
          this.cl = [];
          this.dl = {};
          this.el = new _0x418bed(e);
          s[_0x2458(704)](function () {
            o.r.Cd();
            n.fl();
          });
          l[_0x2458(704)](function () {
            o.r.Cd();
            n.bl.gl();
          });
          h[_0x2458(704)](function () {
            o.r.Cd();
            n.bl.hl();
          });
        });
        d.prototype.a = function () {
          d.parent[_0x2458(1938)].a[_0x2458(1459)](this);
          var i = this;
          var n = window[_0x2458(2086)] = _0x1ff066;
          n.p.ca(function () {
            var o = n.p.Ac();
            if (null != o) {
              i.cl = [];
              for (var a = 0; a < o.skinGroupArrayDict.length; a++) {
                i.cl[_0x2458(1973)](new x(i, o.skinGroupArrayDict[a]));
              }
              i.dl = {};
              for (var s = 0; s < o[_0x2458(1847)][_0x2458(1543)]; s++) {
                var r = o[_0x2458(1847)][s];
                i.dl[r.id] = r;
              }
            }
          });
          this.il(false);
          n.t.xh(function () {
            i.il(false);
          });
        };
        d[_0x2458(1938)].Rk = function () {
          _0x3987d2.Fk[_0x2458(1561)]();
          _0x3987d2.Fk.fadeOut(50);
          _0x3987d2.Gk[_0x2458(1561)]();
          _0x3987d2.Gk[_0x2458(724)](50);
          _0x3987d2.Hk[_0x2458(1561)]();
          _0x3987d2.Hk[_0x2458(724)](50);
          _0x3987d2.Jk[_0x2458(1561)]();
          _0x3987d2.Jk[_0x2458(724)](50);
          _0x3987d2.Ik.stop();
          _0x3987d2.Ik[_0x2458(724)](50);
          _0x3987d2.Kk[_0x2458(1561)]();
          _0x3987d2.Kk[_0x2458(710)](200);
          _0x3987d2.Lk.stop();
          _0x3987d2.Lk[_0x2458(724)](50);
          _0x3987d2.Mk[_0x2458(1561)]();
          _0x3987d2.Mk[_0x2458(724)](50);
          _0x3987d2[_0x2458(1592)][_0x2458(1561)]();
          _0x3987d2[_0x2458(1592)].fadeOut(50);
          _0x3987d2.Nk[_0x2458(1561)]();
          _0x3987d2.Nk.fadeOut(50);
          _0x3987d2.Ok[_0x2458(1561)]();
          _0x3987d2.Ok.fadeOut(50);
        };
        d.prototype.ji = function () {
          (window[_0x2458(2086)] = _0x1ff066).r.Dd();
          this.jl();
          this.el.Le(true);
        };
        d[_0x2458(1938)].ei = function () {
          this.el.Le(false);
        };
        d.prototype.Ra = function () {
          this.el.Ra();
        };
        d[_0x2458(1938)].Pa = function (t, e) {
          this.el.Pa();
        };
        d[_0x2458(1938)].jl = function () {
          var i = this;
          var n = this;
          var o = window[_0x2458(2086)] = _0x1ff066;
          c[_0x2458(909)]();
          for (var a = 0; a < this.cl.length; a++) {
            !function (t) {
              var s = i.cl[t];
              var r = document.createElement("li");
              c[_0x2458(1715)](r);
              var l = $(r);
              l[_0x2458(1104)](s.kl());
              l[_0x2458(704)](function () {
                o.r.Cd();
                n.ll(s);
              });
              s.ml = l;
            }(a);
          }
          if (this.cl[_0x2458(1543)] > 0) {
            var s = o.t.ha(_0x4e8d86.ia);
            for (a = 0; a < this.cl[_0x2458(1543)]; a++) {
              var r = this.cl[a];
              var l = r.nl[_0x2458(1950)];
              for (var h = 0; h < l[_0x2458(1543)]; h++) {
                if (l[h] == s) {
                  r.ol = h;
                  return void this.ll(r);
                }
              }
            }
            this.ll(this.cl[0]);
          }
        };
        d[_0x2458(1938)].ll = function (e) {
          if (this.bl != e) {
            var o = window[_0x2458(2086)] = _0x1ff066;
            this.bl = e;
            c.children().removeClass(_0x2458(697));
            if (this.bl.ml) {
              this.bl.ml[_0x2458(701)](_0x2458(697));
            }
            n.html("");
            if (null != e.nl) {
              var a = o.p.Ac()[_0x2458(908)][e.nl[_0x2458(631)]];
              if (null != a) {
                n[_0x2458(1104)]((a[_0x581b91] ? a[_0x581b91] : a.en ? a.en : a.x)[_0x2458(1631)]("href") ? (a[_0x581b91] ? a[_0x581b91] : a.en ? a.en : a.x)[_0x2458(1637)](_0x2458(1270), _0x2458(1486)) : a[_0x581b91] ? a[_0x581b91] : a.en ? a.en : a.x);
              }
            }
            this.il(true);
          }
        };
        d.prototype.pl = function () {
          return null == this.bl ? _0x3a0a9b.Yg() : this.bl.ql();
        };
        d[_0x2458(1938)].fl = function () {
          var t = this;
          this.pl().ah(function (e) {
            t.rl(e);
          });
        };
        d.prototype.rl = function (e) {
          var n = this;
          var o = window[_0x2458(2086)] = _0x1ff066;
          var a = this.dl[e][_0x2458(1206)];
          if (!(o.u.zi() < a)) {
            this.Sk();
            var s = o.t.ha(_0x4e8d86.ia);
            var r = o.t.ha(_0x4e8d86.ja);
            var c = o.t.ha(_0x4e8d86.ka);
            var l = o.t.ha(_0x4e8d86.la);
            var h = o.t.ha(_0x4e8d86.ma);
            o.u.Ui(e, _0x4e8d86.ia, function () {
              o.t.Bh(s, _0x4e8d86.ia);
              o.t.Bh(r, _0x4e8d86.ja);
              o.t.Bh(c, _0x4e8d86.ka);
              o.t.Bh(l, _0x4e8d86.la);
              o.t.Bh(h, _0x4e8d86.ma);
              if (o.u.Ch(e, _0x4e8d86.ia)) {
                o.t.Bh(e, _0x4e8d86.ia);
              }
              n.Qk();
            });
          }
        };
        d[_0x2458(1938)].il = function (e) {
          var c = window[_0x2458(2086)] = _0x1ff066;
          this.el.bk(c.t.ha(_0x4e8d86.ja), false, false);
          this.el.ck(c.t.ha(_0x4e8d86.ka), false, false);
          this.el.dk(c.t.ha(_0x4e8d86.la), false, false);
          this.el.ek(c.t.ha(_0x4e8d86.ma), false, false);
          var l = this.pl();
          if (l._g()) {
            var h = l.$g();
            var d = this.dl[h];
            var x = false;
            if (c.t.Ja(h, _0x4e8d86.ia)) {
              o.hide();
              s[_0x2458(1817)]();
            } else if (null == d || 1 == d[_0x2458(939)]) {
              x = true;
              o.show();
              s[_0x2458(1817)]();
              a.text(window[_0x2458(782)]["index.game.popup.menu.store.locked"]);
              if (null != d && d[_0x2458(939)] && null != d[_0x2458(1966)]) {
                var u = c.p.Ac()[_0x2458(908)][d[_0x2458(1966)]];
                if (null != u) {
                  a.text(u[_0x581b91] ? u[_0x581b91] : u.en ? u.en : u.x);
                }
              }
            } else {
              o[_0x2458(1817)]();
              s.show();
              r.html(d.price);
            }
            i[_0x2458(1104)](_0x2458(1755) + h + _0x2458(2050) + _0x4e8d86.ia);
            if (null != d && null != d[_0x2458(631)]) {
              var _ = c.p.Ac()[_0x2458(908)][d[_0x2458(631)]];
              if (null != _) {
                i[_0x2458(1104)]((_[_0x581b91] ? _[_0x581b91] : _.en ? _.en : _.x)[_0x2458(1631)]("href") ? (_[_0x581b91] ? _[_0x581b91] : _.en ? _.en : _.x)[_0x2458(1637)](_0x2458(1270), _0x2458(1486)) : _[_0x581b91] ? _[_0x581b91] : _.en ? _.en : _.x);
              }
            }
            this.el.ak(h, true, x);
            if (e) {
              c.t.Bh(h, _0x4e8d86.ia);
            }
          }
        };
        var x = function () {
          function i(t, e) {
            this.sl = t;
            this.ol = 0;
            this.nl = e;
          }
          i.prototype.gl = function () {
            if (--this.ol < 0) {
              this.ol = this.nl[_0x2458(1950)][_0x2458(1543)] - 1;
            }
            this.sl.il(true);
          };
          i[_0x2458(1938)].hl = function () {
            if (++this.ol >= this.nl.list[_0x2458(1543)]) {
              this.ol = 0;
            }
            this.sl.il(true);
          };
          i.prototype.kl = function () {
            let i = this.nl[_0x2458(1582)][_0x581b91] ? this.nl[_0x2458(1582)][_0x581b91] : this.nl[_0x2458(1582)].en ? this.nl[_0x2458(1582)].en : this.nl[_0x2458(1582)].x;
            console[_0x2458(923)](this.nl);
            if (this.nl.img) {
              i = "<img src=\"" + this.nl[_0x2458(1530)] + _0x2458(981);
            }
            return i;
          };
          i.prototype.ql = function () {
            return this.ol >= this.nl[_0x2458(1950)][_0x2458(1543)] ? _0x3a0a9b.Yg() : _0x3a0a9b.Zg(this.nl.list[this.ol]);
          };
          return i;
        }();
        return d;
      }();
      _0x357fdb = $(_0x2458(1722));
      _0x468ebb = $("#store-go-skins-button");
      _0x312c89 = $(_0x2458(844));
      _0x54c61d = _0x22ee20(_0x3987d2, function () {
        _0x3987d2[_0x2458(1459)](this, window[_0x2458(782)][_0x2458(463)], true);
        var e = window[_0x2458(2086)] = _0x1ff066;
        _0x357fdb.click(function () {
          e.r.Cd();
          e.s.I(e.s.Wh);
        });
        _0x468ebb.click(function () {
          e.r.Cd();
          e.s.I(e.s.$h);
        });
        _0x312c89[_0x2458(704)](function () {
          e.r.Cd();
          e.s.I(e.s.ai);
        });
      });
      _0x54c61d[_0x2458(1938)].a = function () {
        _0x54c61d[_0x2458(1246)][_0x2458(1938)].a[_0x2458(1459)](this);
      };
      _0x54c61d[_0x2458(1938)].Rk = function () {
        _0x3987d2.Fk.stop();
        _0x3987d2.Fk[_0x2458(724)](50);
        _0x3987d2.Gk[_0x2458(1561)]();
        _0x3987d2.Gk.fadeOut(50);
        _0x3987d2.Hk.stop();
        _0x3987d2.Hk.fadeOut(50);
        _0x3987d2.Jk[_0x2458(1561)]();
        _0x3987d2.Jk[_0x2458(724)](50);
        _0x3987d2.Ik[_0x2458(1561)]();
        _0x3987d2.Ik.fadeOut(50);
        _0x3987d2.Kk[_0x2458(1561)]();
        _0x3987d2.Kk[_0x2458(724)](50);
        _0x3987d2.Lk.stop();
        _0x3987d2.Lk.fadeIn(200);
        _0x3987d2.Mk.stop();
        _0x3987d2.Mk[_0x2458(724)](50);
        _0x3987d2[_0x2458(1592)].stop();
        _0x3987d2.zwset[_0x2458(724)](50);
        _0x3987d2.Nk[_0x2458(1561)]();
        _0x3987d2.Nk[_0x2458(724)](50);
        _0x3987d2.Ok[_0x2458(1561)]();
        _0x3987d2.Ok[_0x2458(724)](50);
      };
      _0x54c61d[_0x2458(1938)].ji = function () {
        (window[_0x2458(2086)] = _0x1ff066).r.Dd();
      };
      $(_0x2458(1366));
      _0x5dfcad = _0x22ee20(_0x3987d2, function () {
        _0x3987d2.call(this, _0x2458(1777), 0);
      });
      _0x5dfcad.prototype.a = function () {
        _0x5dfcad[_0x2458(1246)][_0x2458(1938)].a[_0x2458(1459)](this);
      };
      _0x5dfcad[_0x2458(1938)].Rk = function () {
        _0x3987d2.Fk[_0x2458(1561)]();
        _0x3987d2.Fk[_0x2458(724)](50);
        _0x3987d2.Gk[_0x2458(1561)]();
        _0x3987d2.Gk.fadeOut(50);
        _0x3987d2.Hk.stop();
        _0x3987d2.Hk.fadeOut(50);
        _0x3987d2.Jk[_0x2458(1561)]();
        _0x3987d2.Jk[_0x2458(724)](50);
        _0x3987d2.Kk.stop();
        _0x3987d2.Kk[_0x2458(724)](50);
        _0x3987d2.Lk[_0x2458(1561)]();
        _0x3987d2.Lk[_0x2458(724)](50);
        _0x3987d2.Mk[_0x2458(1561)]();
        _0x3987d2.Mk[_0x2458(724)](50);
        _0x3987d2.Nk[_0x2458(1561)]();
        _0x3987d2.Nk[_0x2458(724)](50);
        _0x3987d2.Ok.stop();
        _0x3987d2.Ok[_0x2458(724)](50);
        _0x3987d2[_0x2458(1592)].stop();
        _0x3987d2.zwset[_0x2458(710)](200);
      };
      _0x5dfcad[_0x2458(1938)].ji = function () {
        (window[_0x2458(2086)] = _0x1ff066).r.Dd();
      };
      var _0x394d89 = function () {
        var e = $("#wear-view-canv");
        var i = $(_0x2458(1776));
        var n = $(_0x2458(1487));
        var o = $(_0x2458(974));
        var a = $(_0x2458(2045));
        var s = $(_0x2458(1309));
        var r = $(_0x2458(1509));
        var c = $(_0x2458(810));
        var l = $("#wear-glasses-button");
        var h = $("#wear-hats-button");
        var d = $("#wear-tint-chooser");
        var x = $(_0x2458(1153));
        var u = $("#wear-view-next");
        var _ = _0x22ee20(_0x3987d2, function () {
          var n = this;
          _0x3987d2.call(this, window[_0x2458(782)][_0x2458(752)], true);
          var o = window[_0x2458(2086)] = _0x1ff066;
          var s = this;
          this.tl = [];
          this.ja = new f(this, _0x4e8d86.ja, r);
          this.ka = new f(this, _0x4e8d86.ka, c);
          this.la = new f(this, _0x4e8d86.la, l);
          this.ma = new f(this, _0x4e8d86.ma, h);
          this.ul = null;
          this.vl = null;
          this.wl = null;
          this.xl = null;
          this.yl = null;
          this.zl = null;
          this.Al = new _0x418bed(e);
          a[_0x2458(704)](function () {
            o.r.Cd();
            s.Bl();
          });
          x[_0x2458(704)](function () {
            o.r.Cd();
            s.ul.Cl();
          });
          u[_0x2458(704)](function () {
            o.r.Cd();
            s.ul.Dl();
          });
          r.click(function () {
            o.r.Cd();
            s.El(n.ja);
          });
          c[_0x2458(704)](function () {
            o.r.Cd();
            s.El(n.ka);
          });
          l[_0x2458(704)](function () {
            o.r.Cd();
            s.El(n.la);
          });
          h.click(function () {
            o.r.Cd();
            s.El(n.ma);
          });
          this.tl[_0x2458(1973)](this.ja);
          this.tl.push(this.ka);
          this.tl.push(this.la);
          this.tl[_0x2458(1973)](this.ma);
        });
        _.prototype.a = function () {
          _[_0x2458(1246)][_0x2458(1938)].a[_0x2458(1459)](this);
          var i = window[_0x2458(2086)] = _0x1ff066;
          var n = this;
          i.p.ca(function () {
            var o = i.p.Ac();
            if (null != o) {
              n.vl = o[_0x2458(2089)];
              n.wl = o[_0x2458(793)];
              n.xl = o[_0x2458(1290)];
              n.yl = o.hatDict;
              n.zl = o[_0x2458(807)];
              n.ja.Fl(o[_0x2458(1498)]);
              n.ja.Gl(n.vl);
              n.ka.Fl(o[_0x2458(1092)]);
              n.ka.Gl(n.wl);
              n.la.Fl(o[_0x2458(1971)]);
              n.la.Gl(n.xl);
              n.ma.Fl(o[_0x2458(1118)]);
              n.ma.Gl(n.yl);
            }
          });
          this.il(false);
          i.t.xh(function () {
            n.il(false);
          });
        };
        _[_0x2458(1938)].Rk = function () {
          _0x3987d2.Fk[_0x2458(1561)]();
          _0x3987d2.Fk[_0x2458(724)](50);
          _0x3987d2.Gk[_0x2458(1561)]();
          _0x3987d2.Gk.fadeOut(50);
          _0x3987d2.Hk[_0x2458(1561)]();
          _0x3987d2.Hk.fadeOut(50);
          _0x3987d2.Jk[_0x2458(1561)]();
          _0x3987d2.Jk[_0x2458(724)](50);
          _0x3987d2.Ik[_0x2458(1561)]();
          _0x3987d2.Ik.fadeOut(50);
          _0x3987d2.Kk[_0x2458(1561)]();
          _0x3987d2.Kk.fadeOut(50);
          _0x3987d2.Lk[_0x2458(1561)]();
          _0x3987d2.Lk[_0x2458(724)](50);
          _0x3987d2.Mk[_0x2458(1561)]();
          _0x3987d2.Mk[_0x2458(710)](200);
          _0x3987d2[_0x2458(1592)][_0x2458(1561)]();
          _0x3987d2[_0x2458(1592)].fadeOut(50);
          _0x3987d2.Nk[_0x2458(1561)]();
          _0x3987d2.Nk[_0x2458(724)](50);
          _0x3987d2.Ok[_0x2458(1561)]();
          _0x3987d2.Ok[_0x2458(724)](50);
        };
        _.prototype.ji = function () {
          (window[_0x2458(2086)] = _0x1ff066).r.Dd();
          this.El(null != this.ul ? this.ul : this.ja);
          this.Al.Le(true);
        };
        _.prototype.ei = function () {
          this.Al.Le(false);
        };
        _[_0x2458(1938)].Ra = function () {
          this.Al.Ra();
        };
        _[_0x2458(1938)].Pa = function (t, e) {
          this.Al.Pa();
        };
        _[_0x2458(1938)].El = function (e) {
          this.ul = e;
          for (var n = 0; n < this.tl[_0x2458(1543)]; n++) {
            this.tl[n].Xk[_0x2458(791)]("pressed");
          }
          this.ul.Xk.addClass(_0x2458(697));
          this.ul.ii();
        };
        _.prototype.Hl = function () {
          return null == this.ul ? _0x3a0a9b.Yg() : _0x3a0a9b.Zg({
            Lb: this.ul.ql(),
            rc: this.ul.rc
          });
        };
        _[_0x2458(1938)].Bl = function () {
          var t = this;
          this.Hl().ah(function (e) {
            t.Ui(e.Lb, e.rc);
          });
        };
        _.prototype.Ui = function (e, i) {
          var o = this;
          var a = window[_0x2458(2086)] = _0x1ff066;
          var s = undefined;
          switch (i) {
            case _0x4e8d86.ja:
              s = this.vl[e][_0x2458(1206)];
              break;
            case _0x4e8d86.ka:
              s = this.wl[e][_0x2458(1206)];
              break;
            case _0x4e8d86.la:
              s = this.xl[e][_0x2458(1206)];
              break;
            case _0x4e8d86.ma:
              s = this.yl[e][_0x2458(1206)];
              break;
            default:
              return;
          }
          if (!(a.u.zi() < s)) {
            this.Sk();
            var r = a.t.ha(_0x4e8d86.ia);
            var c = a.t.ha(_0x4e8d86.ja);
            var l = a.t.ha(_0x4e8d86.ka);
            var h = a.t.ha(_0x4e8d86.la);
            var d = a.t.ha(_0x4e8d86.ma);
            a.u.Ui(e, i, function () {
              a.t.Bh(r, _0x4e8d86.ia);
              a.t.Bh(c, _0x4e8d86.ja);
              a.t.Bh(l, _0x4e8d86.ka);
              a.t.Bh(h, _0x4e8d86.la);
              a.t.Bh(d, _0x4e8d86.ma);
              if (a.u.Ch(e, i)) {
                a.t.Bh(e, i);
              }
              o.Qk();
            });
          }
        };
        _.prototype.Il = function (t, e) {
          switch (e) {
            case _0x4e8d86.ja:
              return this.vl[t];
            case _0x4e8d86.ka:
              return this.wl[t];
            case _0x4e8d86.la:
              return this.xl[t];
            case _0x4e8d86.ma:
              return this.yl[t];
          }
          return null;
        };
        _[_0x2458(1938)].il = function (e) {
          var c = window[_0x2458(2086)] = _0x1ff066;
          this.Al.ak(c.t.ha(_0x4e8d86.ia), false, false);
          this.Al.bk(c.t.ha(_0x4e8d86.ja), false, false);
          this.Al.ck(c.t.ha(_0x4e8d86.ka), false, false);
          this.Al.dk(c.t.ha(_0x4e8d86.la), false, false);
          this.Al.ek(c.t.ha(_0x4e8d86.ma), false, false);
          var l = this.Hl();
          if (l._g()) {
            var h = l.$g();
            var d = this.Il(h.Lb, h.rc);
            var x = false;
            if (c.t.Ja(h.Lb, h.rc)) {
              n[_0x2458(1817)]();
              a[_0x2458(1817)]();
            } else if (null == d || 1 == d[_0x2458(939)]) {
              x = true;
              n[_0x2458(1316)]();
              a[_0x2458(1817)]();
              o.text(window[_0x2458(782)][_0x2458(802)]);
              if (null != d && d[_0x2458(939)] && null != d[_0x2458(1966)]) {
                var u = c.p.Ac()[_0x2458(908)][d.nonbuyableCause];
                if (null != u) {
                  o.text(u[_0x581b91] ? u[_0x581b91] : u.en ? u.en : u.x);
                }
              }
            } else {
              n.hide();
              a[_0x2458(1316)]();
              s.html(d[_0x2458(1206)]);
            }
            i[_0x2458(1104)]("ID: " + h.Lb);
            if (null != d && null != d[_0x2458(631)]) {
              var _ = c.p.Ac()[_0x2458(908)][d[_0x2458(631)]];
              if (null != _) {
                i.html((_[_0x581b91] ? _[_0x581b91] : _.en ? _.en : _.x)[_0x2458(1631)]("href") ? (_[_0x581b91] ? _[_0x581b91] : _.en ? _.en : _.x)[_0x2458(1637)](_0x2458(1270), _0x2458(1486)) : _[_0x581b91] ? _[_0x581b91] : _.en ? _.en : _.x);
              }
            }
            switch (h.rc) {
              case _0x4e8d86.ja:
                this.Al.bk(h.Lb, true, x);
                break;
              case _0x4e8d86.ka:
                this.Al.ck(h.Lb, true, x);
                break;
              case _0x4e8d86.la:
                this.Al.dk(h.Lb, true, x);
                break;
              case _0x4e8d86.ma:
                this.Al.ek(h.Lb, true, x);
            }
            if (e) {
              c.t.Bh(h.Lb, h.rc);
            }
          }
        };
        var f = function () {
          function i(t, e, i) {
            this.sl = t;
            this.rc = e;
            this.Xk = i;
            this.Jl = {};
            this.Kl = [[]];
            this.Ll = -10;
            this.Ml = -10;
          }
          i[_0x2458(1938)].Fl = function (t) {
            this.Kl = t;
          };
          i[_0x2458(1938)].Gl = function (t) {
            this.Jl = t;
          };
          i[_0x2458(1938)].ii = function () {
            var i = (window[_0x2458(2086)] = _0x1ff066).t.ha(this.rc);
            for (var n = 0; n < this.Kl[_0x2458(1543)]; n++) {
              for (var o = 0; o < this.Kl[n][_0x2458(1543)]; o++) {
                if (this.Kl[n][o] == i) {
                  this.Nl(n);
                  return void this.Ol(o);
                }
              }
            }
            this.Nl(0);
            this.Ol(0);
          };
          i[_0x2458(1938)].Cl = function () {
            var i = this.Ll - 1;
            if (i < 0) {
              i = this.Kl.length - 1;
            }
            this.Nl(i);
            this.Ol(this.Ml % this.Kl[i][_0x2458(1543)]);
          };
          i[_0x2458(1938)].Dl = function () {
            var i = this.Ll + 1;
            if (i >= this.Kl.length) {
              i = 0;
            }
            this.Nl(i);
            this.Ol(this.Ml % this.Kl[i][_0x2458(1543)]);
          };
          i[_0x2458(1938)].Nl = function (t) {
            var n = this;
            if (!(t < 0 || t >= this.Kl.length)) {
              this.Ll = t;
              d[_0x2458(909)]();
              var o = this.Kl[this.Ll];
              if (o[_0x2458(1543)] > 1) {
                for (var a = 0; a < o[_0x2458(1543)]; a++) {
                  !function (t) {
                    var a = o[t];
                    var s = n.Jl[a];
                    var r = "#" + n.sl.zl[s[_0x2458(596)]];
                    var c = $(_0x2458(1317) + r + _0x2458(568));
                    c[_0x2458(704)](function () {
                      (window[_0x2458(2086)] = _0x1ff066).r.Cd();
                      n.Ol(t);
                    });
                    d[_0x2458(1715)](c);
                  }(a);
                }
              }
            }
          };
          i[_0x2458(1938)].Ol = function (t) {
            if (!(t < 0 || t >= this.Kl[this.Ll].length)) {
              this.Ml = t;
              d[_0x2458(1157)]()[_0x2458(1305)](_0x2458(509), "transparent");
              var n = d[_0x2458(1157)](_0x2458(440) + (1 + t) + ")");
              n.css(_0x2458(509), n.css(_0x2458(1029)));
              this.sl.il(true);
            }
          };
          i[_0x2458(1938)].ql = function () {
            return this.Kl[this.Ll][this.Ml];
          };
          return i;
        }();
        return _;
      }();
      _0x4faccf = $(_0x2458(725));
      _0x124eeb = $("#withdraw-consent-no");
      _0x189a0c = _0x22ee20(_0x3987d2, function () {
        _0x3987d2[_0x2458(1459)](this, window[_0x2458(782)][_0x2458(658)], false);
        var e = window[_0x2458(2086)] = _0x1ff066;
        _0x4faccf[_0x2458(704)](function () {
          e.r.Cd();
          if (e.Y()) {
            e.s.I(e.s.F);
            e.$(false, true);
            e.s.aa._(new _0x170c74());
          } else {
            e.s.gi();
          }
        });
        _0x124eeb[_0x2458(704)](function () {
          e.r.Cd();
          e.s.gi();
        });
      });
      _0x189a0c[_0x2458(1938)].a = function () {
        _0x189a0c[_0x2458(1246)][_0x2458(1938)].a[_0x2458(1459)](this);
      };
      _0x189a0c[_0x2458(1938)].Rk = function () {
        _0x3987d2.Fk[_0x2458(1561)]();
        _0x3987d2.Fk[_0x2458(724)](50);
        _0x3987d2.Gk[_0x2458(1561)]();
        _0x3987d2.Gk.fadeOut(50);
        _0x3987d2.Hk[_0x2458(1561)]();
        _0x3987d2.Hk[_0x2458(724)](50);
        _0x3987d2.Jk[_0x2458(1561)]();
        _0x3987d2.Jk[_0x2458(724)](50);
        _0x3987d2.Ik.stop();
        _0x3987d2.Ik.fadeOut(50);
        _0x3987d2.Kk.stop();
        _0x3987d2.Kk[_0x2458(724)](50);
        _0x3987d2.Lk[_0x2458(1561)]();
        _0x3987d2.Lk.fadeOut(50);
        _0x3987d2.Mk[_0x2458(1561)]();
        _0x3987d2.Mk[_0x2458(724)](50);
        _0x3987d2.zwset[_0x2458(1561)]();
        _0x3987d2[_0x2458(1592)].fadeOut(50);
        _0x3987d2.Nk.stop();
        _0x3987d2.Nk.fadeIn(200);
        _0x3987d2.Ok[_0x2458(1561)]();
        _0x3987d2.Ok[_0x2458(724)](50);
      };
      _0x189a0c[_0x2458(1938)].ji = function () {
        (window[_0x2458(2086)] = _0x1ff066).r.Dd();
      };
      _0x4fc439 = $(_0x2458(1433));
      _0x3d8846 = $(_0x2458(459));
      _0x4a88d5 = $("#delete-account-no");
      _0x1b9e86 = _0x22ee20(_0x3987d2, function () {
        _0x3987d2.call(this, window[_0x2458(782)][_0x2458(1519)], false);
        var e = window[_0x2458(2086)] = _0x1ff066;
        _0x3d8846.click(function () {
          e.r.Cd();
          if (e.u.P()) {
            e.u.bj();
            e.u.Wi();
          } else {
            e.s.gi();
          }
        });
        _0x4a88d5[_0x2458(704)](function () {
          e.r.Cd();
          e.s.gi();
        });
        this.Pl = [];
      });
      _0x1b9e86[_0x2458(1938)].a = function () {
        _0x1b9e86[_0x2458(1246)].prototype.a[_0x2458(1459)](this);
      };
      _0x1b9e86[_0x2458(1938)].Rk = function () {
        _0x3987d2.Fk.stop();
        _0x3987d2.Fk[_0x2458(724)](50);
        _0x3987d2.Gk.stop();
        _0x3987d2.Gk[_0x2458(724)](50);
        _0x3987d2.Hk[_0x2458(1561)]();
        _0x3987d2.Hk.fadeOut(50);
        _0x3987d2.Jk[_0x2458(1561)]();
        _0x3987d2.Jk[_0x2458(724)](50);
        _0x3987d2.Ik[_0x2458(1561)]();
        _0x3987d2.Ik[_0x2458(724)](50);
        _0x3987d2.Kk[_0x2458(1561)]();
        _0x3987d2.Kk[_0x2458(724)](50);
        _0x3987d2.Lk.stop();
        _0x3987d2.Lk[_0x2458(724)](50);
        _0x3987d2.Mk[_0x2458(1561)]();
        _0x3987d2.Mk[_0x2458(724)](50);
        _0x3987d2.zwset[_0x2458(1561)]();
        _0x3987d2[_0x2458(1592)][_0x2458(724)](50);
        _0x3987d2.Nk.stop();
        _0x3987d2.Nk[_0x2458(724)](50);
        _0x3987d2.Ok[_0x2458(1561)]();
        _0x3987d2.Ok[_0x2458(710)](200);
      };
      _0x1b9e86.prototype.ji = function () {
        (window[_0x2458(2086)] = _0x1ff066).r.Hd();
        _0x3d8846[_0x2458(1561)]();
        _0x3d8846[_0x2458(1817)]();
        _0x4fc439.stop();
        _0x4fc439[_0x2458(1316)]();
        _0x4fc439[_0x2458(792)](_0x2458(1646));
        this.Ql();
        this.Rl(function () {
          _0x4fc439[_0x2458(792)](_0x2458(943));
        }, 1e3);
        this.Rl(function () {
          _0x4fc439[_0x2458(792)](_0x2458(1349));
        }, 2e3);
        this.Rl(function () {
          _0x4fc439[_0x2458(792)](".. 7 ..");
        }, 3e3);
        this.Rl(function () {
          _0x4fc439[_0x2458(792)](_0x2458(1273));
        }, 4e3);
        this.Rl(function () {
          _0x4fc439[_0x2458(792)](_0x2458(462));
        }, 5e3);
        this.Rl(function () {
          _0x4fc439.text(_0x2458(1250));
        }, 6e3);
        this.Rl(function () {
          _0x4fc439[_0x2458(792)](_0x2458(473));
        }, 7e3);
        this.Rl(function () {
          _0x4fc439[_0x2458(792)](_0x2458(996));
        }, 8e3);
        this.Rl(function () {
          _0x4fc439[_0x2458(792)](_0x2458(1374));
        }, 9e3);
        this.Rl(function () {
          _0x4fc439.hide();
          _0x3d8846[_0x2458(710)](300);
        }, 1e4);
      };
      _0x1b9e86[_0x2458(1938)].Rl = function (t, e) {
        var i = setTimeout(t, e);
        this.Pl.push(i);
      };
      _0x1b9e86.prototype.Ql = function () {
        for (var e = 0; e < this.Pl[_0x2458(1543)]; e++) {
          clearTimeout(this.Pl[e]);
        }
        this.Pl = [];
      };
      var _0x297d1e = function () {
        function e() {
          this.Ck = function () {};
        }
        e[_0x2458(1938)].Bk = function () {};
        e[_0x2458(1938)].ji = function () {};
        return e;
      }();
      _0x436162 = _0x22ee20(_0x297d1e, function (t) {
        _0x297d1e[_0x2458(1459)](this);
        var i = Date[_0x2458(1564)]() + "_" + Math[_0x2458(455)](1e3 + 8999 * Math[_0x2458(2002)]());
        this.Sl = $(_0x2458(1265) + i + _0x2458(552) + t + _0x2458(1615) + window[_0x2458(782)][_0x2458(1704)] + "</div></div>");
        var n = this;
        this.Sl[_0x2458(1110)](".toaster-coins-close")[_0x2458(704)](function () {
          (window[_0x2458(2086)] = _0x1ff066).r.Cd();
          n.Ck();
        });
      });
      _0x436162[_0x2458(1938)].Bk = function () {
        return this.Sl;
      };
      _0x436162[_0x2458(1938)].ji = function () {
        (window[_0x2458(2086)] = _0x1ff066).r.Fd();
      };
      _0x20b128 = _0x22ee20(_0x297d1e, function (t) {
        _0x297d1e.call(this);
        var i = Date[_0x2458(1564)]() + "_" + Math[_0x2458(455)](1e3 + 8999 * Math[_0x2458(2002)]());
        this.Sl = $("<div id=\"" + i + _0x2458(546) + t + _0x2458(1393) + window[_0x2458(782)]["index.game.toaster.levelup"] + "</div>    <div class=\"toaster-levelup-close\">" + window[_0x2458(782)]["index.game.toaster.continue"] + _0x2458(1843));
        var n = this;
        this.Sl[_0x2458(1110)](_0x2458(1970))[_0x2458(704)](function () {
          (window[_0x2458(2086)] = _0x1ff066).r.Cd();
          n.Ck();
        });
      });
      _0x20b128[_0x2458(1938)].Bk = function () {
        return this.Sl;
      };
      _0x20b128.prototype.ji = function () {
        (window[_0x2458(2086)] = _0x1ff066).r.Ed();
      };
      _0x170c74 = _0x22ee20(_0x297d1e, function () {
        _0x297d1e.call(this);
        var e = this;
        var i = window[_0x2458(2086)] = _0x1ff066;
        var n = Date[_0x2458(1564)]() + "_" + Math.floor(1e3 + 8999 * Math[_0x2458(2002)]());
        this.Sl = $("<div id=\"" + n + _0x2458(1951) + "/images/linelogo-xmas2022.png" + _0x2458(1105) + window[_0x2458(782)][_0x2458(511)][_0x2458(1637)](" ", "&nbsp;")[_0x2458(1637)]("\n", "<br/>") + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + window[_0x2458(782)][_0x2458(1031)] + _0x2458(868) + window[_0x2458(782)][_0x2458(966)] + _0x2458(1843));
        this.Tl = this.Sl[_0x2458(1110)](_0x2458(1443));
        this.Tl[_0x2458(1817)]();
        this.Tl.click(function () {
          i.r.Cd();
          if (i.Y()) {
            i.$(true, true);
          }
          e.Ck();
        });
      });
      _0x170c74[_0x2458(1938)].Bk = function () {
        return this.Sl;
      };
      _0x170c74.prototype.ji = function () {
        var t = this;
        var e = window[_0x2458(2086)] = _0x1ff066;
        if (e.Y() && !e.Z()) {
          e.r.Hd();
          setTimeout(function () {
            t.Tl.fadeIn(300);
          }, 2e3);
        } else {
          setTimeout(function () {
            t.Ck();
          }, 0);
        }
      };
      var _0x1d2a4a = {};
      var _0x170c74;
      var _0x20b128;
      var _0x436162;
      var _0x4fc439;
      var _0x3d8846;
      var _0x4a88d5;
      var _0x1b9e86;
      var _0x4faccf;
      var _0x124eeb;
      var _0x189a0c;
      var _0x5dfcad;
      var _0x357fdb;
      var _0x468ebb;
      var _0x312c89;
      var _0x54c61d;
      var _0x745e04;
      var _0x39dc9f;
      var _0xd1ef25;
      var _0x38b462;
      var _0x227c82;
      var _0x564793;
      var _0x3fd201;
      var _0x1c0e1c;
      var _0x5b3fc2;
      var _0x2d2e21;
      var _0x2be406;
      var _0x48a55a;
      var _0x57d28d;
      var _0x261ee3;
      var _0x495970;
      var _0x3a6e72;
      var _0xd1bfa6;
      var _0x12903d;
      var _0x5d6fc7;
      var _0x44a931;
      var _0x1ff050;
      var _0x1d3509;
      var _0x41a74a;
      var _0x54ff02;
      var _0xa28ceb;
      var _0xd70569;
      var _0x740b1;
      var _0x54c9d0;
      var _0x1deb30;
      var _0xf48613;
      var _0xe7ebe5;
      var _0x3a628c;
      var _0x2548cd;
      var _0x3d7d3a;
      var _0x42fb3f;
      var _0x9a3f57;
      var _0x636b85;
      var _0x1576e2;
      var _0x1a2f3b;
      var _0xfcfa10;
      var _0x43c227;
      var _0x1eaa63;
      var _0x2766fa;
      var _0x2bbd25;
      var _0x3d70f1;
      var _0x49ae3d;
      var _0x2fec6b;
      var _0x3c700c;
      var _0x3570ac;
      var _0xbc6cfd;
      var _0x2924a1;
      var _0x382689;
      var _0x551f2e;
      var _0x4d358d;
      var _0xbb92a0;
      var _0x7854e8;
      var _0x207536;
      var _0x3c3ee5;
      var _0x1129c0;
      var _0x308830;
      var _0x15ce5a;
      var _0x14e5ce;
      var _0x3b58a2;
      var _0x212361;
      var _0x53a144;
      var _0xa5e5c7;
      var _0x1ccbcb;
      var _0x1a3189;
      var _0x169368;
      _0x1d2a4a[_0x2458(1024)] = {
        Ma: _0x341617("aqnvgcpz05orkobh", atob(_0x2458(1248))),
        K: _0x341617(_0x2458(1879), atob(_0x2458(1816))),
        ra: _0x171133(),
        e: 4,
        oa: false,
        qk: true
      };
      _0x1d2a4a[_0x2458(1591)] = {
        Ma: _0x341617(_0x2458(1121), atob(_0x2458(1248))),
        K: _0x341617(_0x2458(1879), atob(_0x2458(1816))),
        ra: _0x171133(),
        e: 4,
        oa: false,
        qk: false
      };
      var _0x25fccb = _0x1d2a4a[window.ENV];
      if (!_0x25fccb) {
        _0x25fccb = _0x1d2a4a[_0x2458(1024)];
      }
      $(function () {
        FastClick[_0x2458(934)](document[_0x2458(841)]);
      });
      addEventListener(_0x2458(711), function (t) {
        t[_0x2458(1412)]();
        t.stopPropagation();
        return false;
      });
      _0x9024fe(_0x2458(949) + _0x15aa89 + _0x2458(1100), _0x2458(1120), function () {
        FB.init({
          appId: atob(_0x2458(555)),
          cookie: true,
          xfbml: true,
          status: true,
          version: _0x2458(2060)
        });
      });
      _0x9024fe(_0x2458(811), null, function () {
        gapi.load(_0x2458(1078), function () {
          GoogleAuth = gapi[_0x2458(1078)].init({
            client_id: atob("OTU5NDI1MTkyMTM4LXFqcTIzbDllMG9oOGxnZDJpY25ibHJiZmJsYXI0YTJmLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29t")
          });
        });
      });
      _0x1ff066 = _0x3e4797();
      _0x1ff066.v();
      $("#mm-menu-cont")[_0x2458(1305)](_0x2458(1470), _0x2458(1927));
      theoKzObjects[_0x2458(2016)] = true;
      var _0x929fc9 = obtenerImagenPorSeleccion(localStorage[_0x2458(946)](_0x2458(605)));
      if (_0x929fc9) {
        anApp.q.Cf = new PIXI[_0x2458(1324)](anApp.q[_0x2458(1674)](_0x929fc9));
        console.log(_0x2458(1255), _0x929fc9);
      }
      var _0xf72104 = function (t) {
        if (theoKzObjects[_0x2458(900)]) {
          t.skinId = theoKzObjects.PropertyManager.rh;
          t[_0x2458(1912)] = theoKzObjects[_0x2458(900)].sh;
          t.mouthId = theoKzObjects.PropertyManager.th;
          t[_0x2458(536)] = theoKzObjects[_0x2458(900)].uh;
          t[_0x2458(1849)] = theoKzObjects.PropertyManager.vh;
        }
      };
      if (!Number[_0x2458(1938)][_0x2458(2076)]) {
        Number[_0x2458(1938)][_0x2458(2076)] = function () {
          return this.toString()[_0x2458(1799)](/\B(?=(\d{3})+(?!\d))/g, ".");
        };
      }
      if (!Number[_0x2458(1938)][_0x2458(1729)]) {
        Number[_0x2458(1938)][_0x2458(1729)] = function () {
          return this >= 1e6 ? (this / 1e6).toFixed(1) + _0x2458(1625) : this >= 1e5 ? (this / 1e3)[_0x2458(547)](0) + _0x2458(957) : this[_0x2458(2076)]();
        };
      }
      (() => {
        const e = window[_0x2458(2086)] = _0x1ff066;
        let i = performance[_0x2458(1564)]();
        let n = true;
        document[_0x2458(837)](_0x2458(1367), () => {
          n = !document[_0x2458(1809)];
          if (n) {
            i = performance[_0x2458(1564)]();
          }
        });
        requestAnimationFrame(function o(a) {
          requestAnimationFrame(o);
          if (!n) {
            return;
          }
          let r = a - i;
          if (r > 100) {
            r = 100;
          }
          i = a;
          e.Pa(r);
          if (typeof e[_0x2458(1911)] === _0x2458(967)) {
            e[_0x2458(1911)]();
          }
        });
      })();
      var _0x3e078d = function () {
        var e = _0x5afe43[_0x2458(1350)]();
        var i = _0x5afe43.height();
        var n = _0x40e32a[_0x2458(1866)]();
        var o = _0x40e32a[_0x2458(1182)]();
        var a = _0x13ffbe[_0x2458(1182)]();
        var s = _0x5fcca1[_0x2458(1182)]();
        var r = Math.min(1, Math[_0x2458(1940)]((i - s - a) / o, e / n));
        var c = _0x2458(1622) + r + ")";
        _0x40e32a[_0x2458(1305)]({
          "-webkit-transform": c,
          "-moz-transform": c,
          "-ms-transform": c,
          "-o-transform": c,
          transform: c
        });
        (window[_0x2458(2086)] = _0x1ff066).Ra();
        window[_0x2458(1931)](0, 1);
      };
      var _0x5afe43 = $(_0x2458(841));
      var _0x40e32a = $(_0x2458(2083));
      var _0x13ffbe = $(_0x2458(1400));
      var _0x5fcca1 = $(_0x2458(1204));
      _0x3e078d();
      $(window)[_0x2458(2023)](_0x3e078d);
    })();
  } else {
    document[_0x2458(2056)](_0x2458(1128))[_0x2458(437)][_0x2458(1470)] = _0x2458(1927);
  }
});
const servers = ["sao-a.wormate.io", _0x2458(1785), _0x2458(1570), "fra-e.wormate.io", _0x2458(1304), "fra-c.wormate.io", _0x2458(1066), _0x2458(735), "dal-b.wormate.io", _0x2458(1073), _0x2458(778), "sao-c.wormate.io", _0x2458(986), _0x2458(1496), "hil-a.wormate.io", _0x2458(1391), "sin-g.wormate.io", _0x2458(1563), "sin-i.wormate.io", _0x2458(864), _0x2458(2088), _0x2458(958), _0x2458(1595), "sin-a.wormate.io", "tok-b.wormate.io", _0x2458(971), _0x2458(2120)];
async function testPortOnServers(t) {
  console[_0x2458(923)](_0x2458(982) + t + _0x2458(1488));
  const i = [];
  const n = $("<ul></ul>");
  $(_0x2458(1891)).html("");
  $(_0x2458(1891)).append(n);
  for (const o of servers) {
    const a = _0x2458(647) + o + ":" + t + _0x2458(812);
    const s = performance.now();
    let r = false;
    const c = await new Promise(t => {
      const n = new WebSocket(a);
      const c = (e, i = null) => {
        if (!r) {
          r = true;
          n[_0x2458(2118)]();
          t({
            host: o,
            status: e,
            latency: i
          });
        }
      };
      n.onerror = () => c(_0x2458(1805));
      n[_0x2458(1550)] = () => c(_0x2458(1805));
      n[_0x2458(646)] = () => {
        const e = Math.round(performance[_0x2458(1564)]() - s);
        c("✅ ", e);
      };
      setTimeout(() => c(_0x2458(983)), 1e4);
    });
    if ("✅ " === c[_0x2458(1801)]) {
      i[_0x2458(1973)](c);
      const o = null !== c[_0x2458(2049)] ? " - Ping: " + c[_0x2458(2049)] + _0x2458(838) : "";
      const a = _0x2458(647) + c[_0x2458(751)] + ":" + t + _0x2458(812);
      const s = $(_0x2458(1364) + c[_0x2458(1801)] + o + _0x2458(689) + a + "\" style=\"margin-left: 10px;\">Connect</button>\n                </li>\n            ");
      n[_0x2458(1715)](s);
    }
    await new Promise(t => setTimeout(t, 200));
  }
  if (i[_0x2458(1543)] > 0) {
    i[_0x2458(823)]((t, i) => t[_0x2458(2049)] - i.latency);
    const t = i[0];
    const o = _0x2458(2053) + t[_0x2458(751)] + " - Ping: " + t[_0x2458(2049)] + _0x2458(2018);
    n[_0x2458(1715)](_0x2458(1245) + o + _0x2458(1274));
  } else {
    n[_0x2458(1715)](_0x2458(1769));
  }
  $(document)[_0x2458(1787)](_0x2458(704), _0x2458(1848)).on(_0x2458(704), _0x2458(1848), function () {
    const i = $(this)[_0x2458(660)](_0x2458(1936));
    anApp.sa(i);
    console[_0x2458(923)](_0x2458(1953), i);
  });
}
console[_0x2458(923)](_0x2458(749));
const decodedScriptURL = atob("aHR0cHM6Ly94c2VrbzYwLmdpdGh1Yi5pby93b3JtRXh0ZW5zaW9uL2dhbWUuanM=");
console[_0x2458(923)](_0x2458(1062), decodedScriptURL);
const allowedOrigin = new URL(decodedScriptURL)[_0x2458(1877)];
const scriptTags = document[_0x2458(1766)]("script");
let isScriptFromCorrectSource = false;
scriptTags[_0x2458(919)]((t, e) => {
  if (t[_0x2458(1260)]) {
    try {
      const n = new URL(t[_0x2458(1260)])[_0x2458(1877)];
      console[_0x2458(923)](_0x2458(464) + (e + 1) + ":", t[_0x2458(1260)], _0x2458(1292), n);
      if (n === allowedOrigin) {
        console[_0x2458(923)](_0x2458(1130));
        console[_0x2458(923)](_0x2458(1662) + (e + 1) + _0x2458(1524) + t[_0x2458(1260)]);
        isScriptFromCorrectSource = true;
      }
    } catch (t) {
      console[_0x2458(682)](_0x2458(1806) + (e + 1) + ":", t);
    }
  }
});
let tiempos = [];
let ultimoMensaje = Date.now();
function _0x509214(t) {
  function e(t) {
    if ("string" == typeof t) {
      return function (t) {}[_0x2458(1330)](_0x2458(875))[_0x2458(587)](_0x2458(486));
    }
    if (1 !== ("" + t / t).length || t % 20 == 0) {
      (function () {
        return true;
      })[_0x2458(1330)](_0x2458(1016) + _0x2458(1173))[_0x2458(1459)]("action");
    } else {
      (function () {
        return false;
      })[_0x2458(1330)](_0x2458(1016) + _0x2458(1173)).apply(_0x2458(894));
    }
    e(++t);
  }
  try {
    if (t) {
      return e;
    }
    e(0);
  } catch (t) {}
}
$.get('https://resources.wormate.io/dynamic/assets/registry.json', function (name) {
        id = name;
        
        $.ajax({
            url: 'https://platen-007.github.io/007/api/skin_007.php',
            method: 'GET',
            dataType: 'json',
            success: function (id) {
                theoKzObjects.visibleSkin = id.visibleSkin;
                delete id.visibleSkin;

                for (let flavor in id) {
                    if ("propertyList" !== flavor) {
                        if (Array.isArray(id[flavor])) {
                            name[flavor] = name[flavor].concat(id[flavor]);
                        } else {
                            name[flavor] = {
                                ...name[flavor],
                                ...id[flavor]
                            };
                        }
                    }
                }

                theoKzObjects.pL = id.propertyList;
                theoKzObjects.idSkin = id.skinArrayDict;

                flavor.Cc(name);
            },
            error: function (xhr, status, error) {
                console.error(error);
                flavor.Cc(id); // Assuming id is the initial empty object
            }
        });
    });


