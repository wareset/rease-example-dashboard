System.register([],(function(exports,module){'use strict';return{execute:(function(){exports('v',ve);/* eslint-disable */
/*
dester builds:
__src__/shared/index.ts
__src__/utils/other.ts
__src__/utils/is.ts
__src__/utils/Map.ts
__src__/utils/thens.ts
__src__/utils/subscribe.ts
__src__/attrs.ts
__src__/listen.ts
__src__/resize.ts
__src__/ReaseObserveble.ts
__src__/main.ts
__src__/global.ts
index.ts
*/
var e = {
    svg: "http://www.w3.org/2000/svg",
    math: "http://www.w3.org/1998/Math/MathML"
}, t = Object, r = t.defineProperty, n = t.getPrototypeOf, s = t.getOwnPropertyDescriptor, a = () => {}, o = () => a, i = "undefined" != typeof window, l = {}, u = e => e && e._ && e._.ir === l, h = Array.isArray, c = e => "function" == typeof e, f = t.is || ((e, t) => e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t), d = e => null != e && c(e.then), v = e => null != e && c(e.subscribe), p = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/, g = e => p.test(e);

var _ = "undefined" != typeof Map ? Map : class BudgetMap {
    constructor(e) {
        this._ = e ? e.slice() : [];
    }
    delete(e) {
        for (var t = this._.length; t--; ) if (this._[t][0] === e) return this._.splice(t, 1), 
        !0;
        return !1;
    }
    get(e) {
        for (var t = this._.length; t--; ) if (this._[t][0] === e) return this._[t][1];
    }
    set(e, t) {
        for (var r = -1, n = this._.length; n--; ) if (this._[n][0] === e) {
            r = n;
            break;
        }
        return r < 0 ? this._.push([ e, t ]) : this._[r][1] = t, this;
    }
}, b = (e, t, r) => {
    e.then((e => {
        m(e, t, r);
    }));
}, m = (e, t, r) => {
    d(e) ? e.then((e => {
        m(e, t, r);
    })) : t(e, r);
}, E = (e, t, r) => {
    if (e.length) for (var n = [], s = [ e.length ], a = s[0]; a-- > 0; ) m(e[a], T, [ n, a, s, t, r ]); else t([], r);
}, N = e => {
    var t, r = !1, n = [];
    return e((e => {
        m(e, (e => {
            r = !0, t = e;
            for (var s = 0; s < n.length; s++) n[s][0](n[s][1](t));
        }));
    })), {
        then: e => N((s => {
            r ? s(e(t)) : n.push([ s, e ]);
        }))
    };
}, T = (e, t) => {
    t[0][t[1]] = e, --t[2][0] || t[3](t[0], t[4]);
}, y = (e, t, r) => {
    var n = () => {
        t = a;
    }, s = [], o = e.subscribe((e => {
        if (1 === s.push(e)) {
            for (var a = 0; a < s.length; a++) t(s[a], r, n);
            s = [];
        }
    }));
    return n = () => {
        o && (t = a, o.unsubscribe ? o.unsubscribe() : o(), o = null);
    }, t === a && n(), n;
}, k = (e, t, r) => {
    var n = [ a, a, () => {
        n[2] === a || (n[2] = t = a, n[1](), n[0]());
    } ];
    return n[0] = y(e, ((e, t, r) => {
        t.u[0] = r, t.u[1](), t.u[1] = L(e, ((e, t, r) => {
            t.u[1] = r, t.f(e, t.c, t.u[2]);
        }), t);
    }), {
        u: n,
        f: t,
        c: r
    }), n[2];
}, L = (e, t, r) => {
    if (d(e)) e = R(e); else if (!v(e)) return t(e, r, a), a;
    return k(e, t, r);
}, w = (e, t, r) => y(O(e), t, r), R = e => ({
    subscribe: (t, r) => {
        var n = () => {
            t = a;
        };
        return b(e, (e => {
            t(e, r, n);
        })), n;
    }
}), O = e => ({
    subscribe: (t, r) => {
        e = e.slice();
        for (var n = [], s = {}, a = [ 0 ], o = () => {
            for (var e in s) s[e]();
        }, i = e.length, l = 0; l < i; l++) s[l] = L(e[l], C, [ l, i, n, s, a, [ !1 ], t, r, o ]);
        return o;
    }
}), M = (e, t) => ({
    subscribe: (r, n) => {
        var s = [ a, a, () => {
            s[2] === a || (s[2] = r = a, s[1](), s[0]());
        } ];
        return s[0] = w(e, ((e, r, n) => {
            r.u[0] = n, r.u[1](), r.u[1] = L(t(e), ((e, t, r) => {
                t.u[1] = r, t.f(e, t.c, s[2]);
            }), r);
        }), {
            u: s,
            f: r,
            c: n
        }), s[2];
    }
}), C = (e, [t, r, n, s, a, o, i, l, u], h) => {
    n[t] = e, s[t] = h, (a[0] === r || o[0] !== (o[0] = !0) && ++a[0] === r) && i(n.slice(), l, u);
}, S = /^style--/, A = /^class--/, x = e => e, U = e => {
    switch (typeof e) {
      case "string":
        return e;

      case "object":
        var t = "", r = "";
        if (h(e)) for (var n, s = 0; s < e.length; s++) (n = U(e[s])) && (t += r + n, r = " "); else if (e) for (var a in e) e[a] && (t += r + a, 
        r = " ");
        return t;

      default:
        return "";
    }
}, F = {}, H = e => F[e] || (F[e] = e.replace(/([A-Z])/g, "-$1").toLowerCase()), I = e => {
    switch (typeof e) {
      case "string":
        return e;

      case "object":
        var t = "";
        if (h(e)) for (var r, n = 0; n < e.length; n++) (r = I(e[n])) && (t += r + (";" === r[r.length - 1] ? "" : ";")); else if (e) for (var s in e) null != e[s] && (t += H(s) + ":" + e[s] + ";");
        return t;

      default:
        return "";
    }
}, $ = (e, t, r) => {
    r ? e.classList.add(t) : e.classList.remove(t);
}, j = [ (e, t, r, n) => {
    if (r ? e.setAttribute(t, r) : e.removeAttribute(t), n._.ac) for (var s in n._.ac) $(e, s, n._.ac[s]);
    (e => {
        e.home._is.css && !e.home._is.css[2] && e.node && e.node.classList.add(e.home._is.css[1]);
    })(n);
}, U ], G = [ (e, t, r, n) => {
    if (r ? e.setAttribute(t, r) : e.removeAttribute(t), n._.as) for (var s in n._.as) e.style[s] = n._.as[s];
}, I ], P = [ (e, t, r, n) => {
    $(e, t = t.slice(7), n._.ac[t] = r);
}, x ], W = [ (e, t, r, n) => {
    e.style[t = t.slice(7)] = n._.as[t] = r;
}, x ], X = [ (e, t, r) => {
    "_" === t[0] || z(e.localName, t, e).set ? e[t] = r : null == r || "" === r ? e.removeAttribute(t) : e.getAttribute(t) !== r && e.setAttribute(t, r);
}, x ], q = (e, t) => "class" === e ? j : "style" === e ? G : A.test(e) ? (t.ac || (t.ac = {}), 
P) : S.test(e) ? (t.as || (t.as = {}), W) : X, B = {}, z = (e, t, r) => (B[e] || (B[e] = {}))[t] || (B[e][t] = s(n(r), t) || {}), [D, Z] = (() => {
    if (!i) return [ o, a ];
    var e = document, t = setTimeout, n = clearTimeout, s = (e, t, r, n) => (e.addEventListener(t, r, n), 
    () => {
        e.removeEventListener(t, r, n);
    }), l = e => {
        e.cancelable && e.preventDefault();
    }, u = e => {
        e.stopPropagation();
    }, c = (e, t) => function(r) {
        for (var n = 0; n < e.length; n++) e[n].call(this, r, t);
    }, f = (e, t) => function(r) {
        r.target === e && t.call(this, r);
    }, d = e => function(t) {
        t.isTrusted && e.call(this, t);
    }, v = (e, t, r) => function(n) {
        ((e, t) => {
            var r = t;
            for (var n in _) {
                if (!(_[n][0] in e) && !(_[n][1] in e)) return !1;
                r--;
            }
            return !r;
        })(t, r) && e.call(this, n);
    }, p = [], g = [], _ = {}, b = () => {
        b = a, s(e, "keyup", (t => {
            for (var r = 0; r < p.length; r++) p[r][0].length ? p[r][1].call(e, t) : p.splice(r--, 1);
            delete _[t.code + t.key];
        }), !1), s(e, "keydown", (t => {
            _[t.code + t.key] = [ t.code, t.key ];
            for (var r = 0; r < g.length; r++) g[r][0].length ? g[r][1].call(e, t) : g.splice(r--, 1);
        }), !1);
    }, m = 0, E = () => {
        m--;
    }, N = 0, T = () => {
        N--;
    }, y = 0, k = () => {
        y--;
    }, L = e, w = L, R = L, O = L, M = (e, t) => e.contains(t), C = (e, t) => function(r) {
        (R === e || M(e, R)) && t.call(this, r);
    }, S = (e, t) => function(r) {
        (O === e || M(e, O)) && t.call(this, r);
    }, A = (e, t) => function(r) {
        R !== e && !M(e, R) && t.call(this, r);
    }, x = (e, t) => function(r) {
        O !== e && !M(e, O) && t.call(this, r);
    }, U = 0, F = (e, t) => (U++, function(r) {
        L !== e && !M(e, L) && t.call(e, r);
    }), H = () => {
        U--;
    }, I = 0, $ = (e, t) => (I++, function(r) {
        w !== e && !M(e, w) && t.call(e, r);
    }), j = () => {
        I--;
    }, G = 0, P = (e, t) => (G++, function(r) {
        R !== e && !M(e, R) && t.call(e, r);
    }), W = () => {
        G--;
    }, X = 0, q = (e, t) => (X++, function(r) {
        O !== e && !M(e, O) && t.call(e, r);
    }), B = () => {
        X--;
    }, z = "tapstart tapmove tapend inhover infocus unhover unfocus".split(" "), [D, Z, J, K, Q, V, Y] = z, ee = a, te = a, re = !1, ne = () => {
        ne = a;
        try {
            s(window, "test", a, r({}, "passive", {
                get: () => !(re = !0)
            }));
        } catch (e2) {}
        var o = (e, t, r, n) => {
            var s = document.createEvent("CustomEvent");
            return s.initCustomEvent(e, r, n, t), s;
        }, i = (e, t) => e.dispatchEvent(t);
        ee = (e, t) => {
            if (L = R, R = e.target, L !== R) {
                var r = {
                    event: e,
                    last: L,
                    next: R
                };
                G > 0 && i(L, o(V, r, !0)), U > 0 && i(R, o(K, r, !1));
            }
            te(R, t);
        }, te = (e, t) => {
            if ((w = O) !== (O = t === D ? e : O)) {
                var r = {
                    event: event,
                    last: w,
                    next: O
                };
                X > 0 && i(w, o(Y, r, !0)), I > 0 && i(O, o(Q, r, !1));
            }
        };
        var l, u, h, c = (e, t) => {
            var r = e.target;
            switch (t) {
              case D:
                m > 0 && i(r, o(D, {
                    event: e
                }, !0, !0));
                break;

              case Z:
                N > 0 && i(r, o(Z, {
                    event: e
                }, !0, !0));
                break;

              case J:
                y > 0 && i(r, o(J, {
                    event: e
                }, !0, !0));
            }
        }, f = () => {
            l = !1;
        }, d = (e, t) => {
            e.touches.length < 2 && (l = !0, c(e, t));
        }, v = (e, r) => {
            l ? (n(u), u = t(f)) : c(e, r);
        };
        for (var p in h = "onpointermove" in e ? {
            pointerdown: e => {
                ee(e, D);
            },
            pointerup: e => {
                ee(e, J);
            },
            pointercancel: e => {
                ee(e, J);
            },
            pointerout: e => {
                ee(e, Z);
            },
            pointerover: e => {
                ee(e, Z);
            },
            touchstart: e => {
                d(e, D);
            },
            touchmove: e => {
                d(e, Z);
            },
            touchend: e => {
                d(e, J);
            },
            touchcancel: e => {
                d(e, J);
            },
            mousedown: e => {
                v(e, D);
            },
            mousemove: e => {
                v(e, Z);
            },
            mouseup: e => {
                v(e, J);
            }
        } : {
            touchstart: e => {
                ee(e, D), d(e, D);
            },
            touchmove: e => {
                ee(e, Z), d(e, Z);
            },
            touchend: e => {
                ee(e, J), d(e, J);
            },
            touchcancel: e => {
                ee(e, J), d(e, J);
            },
            mousedown: e => {
                ee(e, D), v(e, D);
            },
            mousemove: e => {
                ee(e, Z), v(e, Z);
            },
            mouseup: e => {
                ee(e, J), v(e, J);
            },
            mouseout: e => {
                ee(e, Z);
            },
            mouseover: e => {
                ee(e, Z);
            }
        }) s(e, p, h[p], !0);
    }, [se, ae, oe, ie] = [ K, Q, V, Y ].map((e => e + "ed"));
    return [ (e, t, r, n) => {
        for (var a, o, i = h(r) ? r.slice() : [ r ], _ = c(i, n), L = {}, w = 0, R = [], O = () => {
            for (i.length = 0; R.length > 0; ) R.pop()();
        }, M = !1, U = !1, I = !1, G = !1, X = t.split(/[^a-z\d]+/i), z = X.length; z--; ) if (o = X[z]) switch (o) {
          case "once":
            i.push(O);
            break;

          case "strict":
            I = !0;
            break;

          case "keysup":
            G = !0;
            break;

          case "passive":
            M = !0;
            break;

          case "capture":
            U = !0;
            break;

          case "self":
            _ = f(e, _);
            break;

          case "trusted":
            _ = d(_);
            break;

          case "stop":
            i.unshift(u);
            break;

          case "prevent":
            i.unshift(l);
            break;

          case se:
            _ = C(e, _);
            break;

          case ae:
            _ = S(e, _);
            break;

          case oe:
            _ = A(e, _);
            break;

          case ie:
            _ = x(e, _);
            break;

          default:
            if (1 === o.length || /[A-Z]/.test(o[0])) o in L || (L[o] = !0, w++); else if (!z) switch (a = o) {
              case K:
                U = !0, _ = F(e, _), R.push(H);
                break;

              case Q:
                U = !0, _ = $(e, _), R.push(j);
                break;

              case V:
                U = !1, _ = P(e, _), R.push(W);
                break;

              case Y:
                U = !1, _ = q(e, _), R.push(B);
            }
        }
        if (ne(), (w || I) && (b(), _ = v(_, L, w)), a) {
            switch (a) {
              case D:
                m++, R.push(E);
                break;

              case Z:
                N++, R.push(T);
                break;

              case J:
                y++, R.push(k);
            }
            var ee = re ? {
                passive: M,
                capture: U
            } : U;
            R.push(s(e, a, _, ee));
        } else (G ? p : g).push([ i, _ ]);
        return O;
    }, t => {
        te(t && t.contains ? t : e, D);
    } ];
})(), J = (e, t) => r => D(r.node, e, t, r), K = (() => {
    if (!i) return o;
    var e, t = new _, r = setTimeout, n = clearTimeout, s = e => {
        for (var r, n, s, a, o = 0; o < e.length; o++) if (r = e[o].target, (n = t.get(r)) && (s = r.offsetWidth || r.clientWidth, 
        a = r.offsetHeight || r.clientHeight, n.w !== s || n.h !== a)) {
            n.w = s, n.h = a;
            for (var i, l, u = n.l, h = 0; h < u.length; h++) {
                l = {
                    width: s,
                    height: a,
                    delta: {
                        x: s - (i = u[h])[1].x || 0,
                        y: a - i[1].y || 0
                    },
                    target: r
                }, i[1].x = s, i[1].y = a;
                for (var c = 2; c < i.length; c++) i[c].call(r, l, i[0]);
                i.length || u.splice(h--, 1);
            }
        }
    }, l = () => {
        l = a;
        try {
            e = new ResizeObserver(s);
        } catch (e3) {
            var o, i = [], u = () => {
                n(o), s(i), i.length && (o = r(u, 25));
            };
            e = {
                observe: e => {
                    i.push({
                        target: e
                    }), r(u);
                },
                unobserve: e => {
                    r((e => {
                        if (!t.get(e)) for (var r = i.length; r-- > 0; ) if (i[r].target === e) {
                            i.splice(r, 1);
                            break;
                        }
                    }), 1, e);
                }
            }, document.addEventListener("visibilitychange", (() => {
                document.hidden ? n(o) : u();
            }), !1);
        }
    };
    return (s, a, o) => {
        l();
        var i, u = [ o, {} ].concat(a);
        (i = t.get(s)) ? (i.l.push(u), i.s++) : (t.set(s, i = {
            w: -1,
            h: -1,
            l: [ u ],
            s: 1
        }), e.observe(s));
        var h = r(((e, t) => {
            for (var r = {
                width: e.offsetWidth || e.clientWidth,
                height: e.offsetHeight || e.clientHeight,
                delta: {
                    x: 0,
                    y: 0
                },
                target: e
            }, n = 2; n < t.length; n++) t[n].call(e, r, t[0]);
        }), 0, s, u);
        return u.push((() => {
            n(h), u.pop();
        })), () => {
            u.length = 0, --i.s < 1 && (t.delete(s), e.unobserve(s));
        };
    };
})(), Q = e => t => K(t.node, e, t), V = (e, t) => {
    return !f(e, t) || null != (r = t) && "object" == typeof r || c(t);
    var r;
}, Y = (e, t, r) => {
    var n = e._;
    n.break = !0;
    var s = n.queue;
    if (1 === s.push({
        f: r,
        n: e._value = t
    })) {
        for (var a, o = n.index, i = n.items, l = 0; l < s.length; l++) if ((a = s[l].f) || l > s.length - 2) {
            n.break = !1, o[0] = 0;
            for (var u, h = s[l]; o[0] < i.length; o[0]++) if (u = o[0], (a || V(i[u].o, h.n)) && i[u].s(e._value = i[u].o = h.n), 
            !a && n.break) {
                i[u].o = e._value;
                break;
            }
        }
        n.queue = [];
    }
    return e;
}; exports({b:y,w:w,D:D,Z:Z,J:J,Q:Q});

class ReaseSubject {
    constructor(e, t) {
        this._ = {
            items: [],
            queue: [],
            onFst: t,
            onLst: null,
            break: !1,
            index: [ 0 ]
        }, Y(this, e, !1);
    }
    get() {
        return this._value;
    }
    set(e) {
        return this._.queue.length > 0 || V(this._value, e) ? Y(this, e, !1) : this;
    }
    next(e) {
        return Y(this, e, !0);
    }
    clear() {
        for (var e = this._.items, t = e.length; t-- > 0; ) e[t].u();
        return this;
    }
    subscribe(e, t) {
        var r = {
            s: n => {
                e(n, t, r.u);
            },
            u: () => {
                if (r.s !== r.u) {
                    r.s = r.u = a;
                    var e = s.indexOf(r);
                    e < 0 || (s.splice(e, 1), e > n.index[0] || n.index[0]--), s.length < 1 && n.onLst && n.onLst(this);
                }
            },
            o: {}
        }, n = this._, s = n.items;
        return s.length < 1 && n.onFst && (n.onLst = n.onFst(this)), s.push(r), n.queue.length < 1 && r.s(r.o = this._value), 
        r.u;
    }
}

var ee = ReaseSubject.prototype;

r(ee, "$", {
    get: ee.get,
    set: ee.set
});

for (var te = function(e, t) {
    r(ee, e[t], {
        value: function() {
            var r = this.get();
            return r = null != r && r[e[t]] ? r[e[t]](arguments) : r, t ? r + "" : r;
        }
    });
}, re = [ "valueOf", "toString", "toJSON" ], ne = 3; ne-- > 0; ) te(re, ne);

var se, ae, oe, ie = e => e instanceof ReaseSubject, le = exports('l',M), ue = {
    ROOT: "ROOT",
    COMPONENT: "COMPONENT",
    ELEMENT: "ELEMENT",
    FRAGMENT: "FRAGMENT",
    SLOT: "SLOT",
    TEXT: "TEXT",
    EXPRESSION: "EXPRESSION",
    COMMENT: "COMMENT",
    HTML: "HTML",
    RULES: {
        TAG: "RULE_TAG",
        IF: "RULE_IF",
        ELIF: "RULE_ELIF",
        ELSE: "RULE_ELSE",
        WATCH: "RULE_WATCH",
        AWAIT: "RULE_AWAIT",
        THEN: "RULE_THEN",
        FOR: "RULE_FOR"
    }
}, he = e => {
    oe = e, se = e.high, ae = e.home;
}, ce = e => {
    oe = e.parent;
}, fe = () => {
    oe = null;
};

function de(e) {
    var t = u(this) ? this : oe;
    if (!u(t)) throw e;
    if (t.type !== ue.COMPONENT) throw e;
    t.on ? (t._.oc || (t._.oc = [])).push(e) : e(t);
}

function ve(e) {
    var t = u(this) ? this : oe;
    if (!u(t)) throw e;
    t.on ? (t._.od || (t._.od = [])).push(e) : e(t);
}

var pe, ge = (e, t, r) => {
    if (!u(e)) throw e;
    var n = oe, s = se, a = ae;
    he(e), e.type === ue.COMPONENT && (se = ae = e);
    var o = t.apply(e, r);
    return oe = n, se = s, ae = a, o;
}, _e = () => oe, be = e => {
    if (e._.esu) for (var t, r = e._.esu; r.length; ) (t = r.pop()) && c(t = t.destroy || t) && (he(e), 
    t(e));
}, me = {
    3: [],
    8: []
}, Ee = /^(?:audio|bgsound|source|track|video|dialog|link|meta|style|applet|embed|noembed|object|param|canvas|noscript|script|button|datalist|fieldset|form|input|keygen|label|legend|meter|optgroup|option|output|progress|select|textarea|frame|frameset|iframe|noframes)$/i, Ne = (e, t) => {
    var r = e.nodeType;
    if (3 === r || 8 === r) me[r].length < t && me[r].push(e); else if (1 === r && !Ee.test(e.localName) && ((r = e.localName + e.namespaceURI) in me || (me[r] = []), 
    me[r].length < t)) {
        for (var n = e.childNodes, s = n.length; s-- > 0; ) e.removeChild(n[s]);
        e.value && (e.value = null), e.type && (e.type = null), me[r].push(e);
    }
}, Te = e => {
    if (e._.od) for (;e._.od.length; ) e._.od.pop()(e);
}, ye = e => {
    if (e && e.on) {
        e.on = !1, be(e), Te(e), Oe(e), e._.ods && e._.ods();
        var t = e.node;
        t && t.parentNode && t.parentNode.removeChild(t), ke(e), t && Ne(t, 25), e._.$ && (e._.$ = 1, 
        Fe(e));
    }
}, ke = e => {
    for (;e.children.length; ) ye(e.children.pop());
}, Le = (e, t) => {
    e._.ods = t, e.on || e._.ods();
}, we = e => t => {
    if (t.root.node) for (var r, n, s = t; ;) if (r = (s = s.parent).node) {
        1 === r.nodeType ? (e(t, r), r.appendChild(t.node)) : (e(t, r = (n = r).parentNode), 
        r.insertBefore(t.node, n));
        break;
    }
}, Re = e => {
    var t, r, n, s = e.attrs;
    for (var o in e.props) if (r = s[o] = {
        is: null,
        _is: t = e.props[o],
        high: e.high,
        _: {
            $: 0,
            u: a
        }
    }, v(t) || d(t) && (t = R(t), 1)) {
        if (Ue(r), r._.u = k(t, ((e, [t, r, n, s], a) => {
            r._.u = a, t.on ? r.is !== (r.is = e = s[1](e)) && t.node && s[0](t.node, n, e, t) : a(), 
            Fe(r);
        }), [ e, r, o, q(o, e._) ]), !e.on) {
            r._.u();
            break;
        }
    } else n = q(o, e._), r.is = t = n[1](t), e.node && n[0](e.node, o, t, e);
}, Oe = e => {
    var t = e.attrs;
    if (t) {
        e.attrs = null;
        var r = e.node;
        for (var n in t) r && (r.hasAttribute(n) ? r.removeAttribute(n) : n in r && (r[n] = null)), 
        t[n]._.u(), Fe(t[n]);
    }
}, Me = (pe = we(((t, r) => {
    var n = e[t.is] || r.namespaceURI, s = t.is + n, a = s in me && me[s].pop();
    if (a) for (var o = a.attributes, i = o.length; i-- > 0; ) a.removeAttribute(o[i].name); else a = document.createElementNS(n, t.is);
    t.node = a, (e => {
        if (e.use) for (var t = e._.esu || (e._.esu = []), r = 0; r < e.use.length; r++) if (he(e), 
        t.push(e.use[r](e)), !e.on) {
            be(e);
            break;
        }
    })(t), Re(t), he(t);
})), e => {
    e.attrs = {}, pe(e), e.node || Re(e);
}), Ce = we((e => {
    me[3].length ? (e.node = me[3].pop()).data = "" : e.node = document.createTextNode("");
})), Se = we((e => {
    me[3].length ? (e.node = me[3].pop()).data = e.is : e.node = document.createTextNode(e.is);
})), Ae = we((e => {
    me[8].length ? (e.node = me[8].pop()).data = e.is : e.node = document.createComment(e.is);
})), xe = (e, t, r, n, s, a) => oe = oe.children[oe.children.push({
    type: e,
    name: a,
    is: r,
    _is: t,
    node: null,
    props: n,
    use: s,
    root: oe.root,
    home: ae,
    high: se,
    parent: oe,
    children: [],
    slots: null,
    attrs: null,
    on: oe.on,
    pub: {},
    _: {
        ir: l,
        $: 0
    }
}) - 1], Ue = e => {
    e.high._.$++, e._.$++;
}, Fe = e => {
    if (e._.$ > 0) if (e._.$--, e.type !== ue.COMPONENT && e.type !== ue.ROOT) e.high && Fe(e.high); else if (0 === e._.$) {
        e._.$ = NaN;
        var t = e._.oc;
        if (t) {
            for (var r = [], n = 0; n < t.length && (he(e), r.push(t[n](e)), e.on); n++) ;
            fe(), E(r, ((e, t) => {
                if (t.on) {
                    for (var r = e.length; r--; ) c(e[r]) && ve(e[r]);
                    t.high && Fe(t.high);
                } else for (var n = e.length; n--; ) c(e[n]) && (he(t), e[n](t));
                fe();
            }), e);
        } else e.high && Fe(e.high);
    }
}, He = e => {
    oe.on && void 0 !== e && "" !== e && (Se(xe(ue.TEXT, e, "" + e)), ce(oe));
}, Ie = e => {
    if (oe.on && void 0 !== e && "" !== e) {
        var t = xe(ue.EXPRESSION, e, "");
        Se(t), Ue(t), Le(t, L(e, ((e, t, r) => {
            t.on ? (e = void 0 === e ? "" : "" + e, t.is !== (t.is = e) && t.node && (t.node.data = e)) : r(), 
            Fe(t);
        }), t)), ce(t);
    }
}, $e = e => {
    oe.on && void 0 !== e && "" !== e && (Ae(xe(ue.COMMENT, e, "" + e)), ce(oe));
}, je = e => {
    if (oe.on && void 0 !== e && "" !== e) {
        var t = xe(ue.COMMENT, e, "");
        Ae(t), Ue(t), Le(t, L(e, ((e, t, r) => {
            t.on ? (e = void 0 === e ? "" : "" + e, t.is !== (t.is = e) && t.node && (t.node.data = e)) : r(), 
            Fe(t);
        }), t)), ce(t);
    }
}, Ge = {}, Pe = (e, t) => {
    if (oe.on) {
        var r = xe(ue.HTML, e, "");
        Ce(r), Ue(r), Le(r, L(e, ((e, [t, r, n], s) => {
            if (t.on) {
                if (e = void 0 === e ? "" : "" + e, t.is !== (t.is = e) && t.node) {
                    for (var a; r.length; ) (a = r.pop()).parentNode.removeChild(a);
                    if (e) {
                        var o = t.node.parentNode, i = o.namespaceURI;
                        (Ge[i] || (Ge[i] = document.createElementNS(i, "div"))).innerHTML = n ? n.createHTML(e) : e;
                        for (var l = Ge[i].childNodes, u = 0; u < l.length; u++) r.push(a = l[u]), o.insertBefore(a, t.node);
                    }
                }
            } else s();
            Fe(t);
        }), [ r, r._.html = [], t ])), ce(r);
    }
}, We = (e, t) => {
    for (var r, n = e.children, s = 0; s < n.length; s++) {
        if (!(r = n[s]).node || 1 !== r.node.nodeType) if (r.type === ue.HTML) for (;r._.html.length; ) t.appendChild(r._.html[0]); else We(r, t);
        r.node && t.appendChild(r.node);
    }
}, Xe = e => {
    for (var t = e.slots, r = 0; r < t.length; r++) e.on && t[r][1]();
}, qe = t => {
    var r = oe;
    r.slots = t, Ue(r), Le(r, L(r._is, ((t, r, n) => {
        if (r.on) {
            if (r.is !== (r.is = t)) {
                switch (typeof t) {
                  case "function":
                    ke(r), he(r), Ke(t, r.props, r.use)(r.slots);
                    break;

                  case "string":
                    if ("r-slot" === t) ke(r), he(r), De(r._.sn, r.props, r.use)((() => {
                        Xe(r);
                    })); else {
                        var s = r.children[0], a = g(t), o = !s || s.type !== ue.ELEMENT && s.type !== ue.FRAGMENT || a || t in e, i = !!r.root.node;
                        if ("r-fragment" === t) {
                            if (o) ke(r), he(r), rt(r.props, r.use)(Xe(r)); else if (be(s), Te(s), Oe(s), s.type = ue.FRAGMENT, 
                            s.is = null, i) {
                                var l = s.node, u = l.parentNode;
                                u.removeChild(l), Ce(s);
                                for (var h = s.node, c = l.childNodes, f = c.length; f-- > 0; ) u.insertBefore(c[f], h), 
                                h = c[f];
                            }
                        } else if (o || s && (s.is in e || g(s.is))) ke(r), he(r), Ve(t, r.props, r.use)(a || Xe(r)); else {
                            be(s), Te(s), Oe(s);
                            var d = s.type;
                            if (s.type = ue.ELEMENT, s.is = t, i) {
                                var v = s.node;
                                if (v.parentNode.removeChild(v), Me(s), d !== ue.FRAGMENT) for (var p = v.childNodes; p.length; ) s.node.appendChild(p[0]); else We(s, s.node);
                                Qe();
                            }
                        }
                    }
                    break;

                  default:
                    ke(r);
                }
                fe();
            }
        } else n();
        Fe(r);
    }), r)), ce(r);
}, Be = (e, t, r, n) => oe.on ? (Ce(xe(ue.RULES.TAG, e, null, t || {}, r)), oe._.sn = n, 
qe) : a, ze = e => {
    for (var t = oe, r = t.home.slots, n = 0; n < r.length && (r[n][0] !== t._is || (oe = t, 
    se = t.high, ae = t.home.home, t.is = !0, r[n][1](), t.on)); n++) ;
    t.is ? (se = t.high, ae = t.home) : e && e.call(t), ce(t);
}, De = (e, t, r) => oe.on ? (Ce(xe(ue.SLOT, e, !1, t, r, e)), ze) : a, Ze = (e, t) => {
    t && !(t[1] in e.css) && (c(t[0]) && (t[0] = t[0]("." + t[1])), e.css[t[1]] = "", 
    e._.$++, e._.od.push(L(t[0], ((e, [t, r, n, s, a], o) => {
        if (t.on) {
            if (n[0] !== (n[0] = e) && (t.css[r] = e, t.node)) {
                var i = s[0] || (s[0] = document.getElementById(r) || (e => {
                    var t = document.createElement("style");
                    return t.id = e, document.head.appendChild(t), t;
                })(r));
                i.textContent !== e && (i.textContent = e);
            }
        } else o();
        a[0] && (a[0] = !1, Fe(t));
    }), [ e, t[1], [ "" ], [ null ], [ !0 ] ])));
}, Je = e => {
    var t = oe;
    t.slots = e, Ue(t), se = ae = t, t.is.call(t, t.props), Fe(t), se = t.high, ae = t.home, 
    ce(t);
}, Ke = (e, t, r) => oe.on ? (xe(ue.COMPONENT, e, e, t || {}, r, e.name), Ze(oe.root, e.css), 
Je) : a, Qe = () => {
    var e = oe;
    (e => {
        if (e._.esu) for (var t, r = e._.esu, n = 0; n < r.length; n++) if ((t = r[n]) && c(t = t.created) && (he(e), 
        t(e), !e.on)) {
            be(e);
            break;
        }
    })(e), ce(e);
}, Ve = (e, t, r) => oe.on ? (Me(xe(ue.ELEMENT, e, e, t || {}, r)), Qe) : a, Ye = e => {
    e.call(oe);
}, et = (e, t, r, n) => {
    var s = a;
    if (oe.on) {
        var o = xe(ue.ELEMENT, n, e, t || {}, r);
        Ue(o), Le(o, L(n, ((e, [t, r], n) => {
            if (t.on) if (t.is !== (e || (e = r)) && t.node) {
                be(t), Te(t), Oe(t), t.is = e;
                var s = t.node;
                s.parentNode.removeChild(s), Me(t);
                for (var a = s.childNodes; a.length; ) t.node.appendChild(a[0]);
                Qe();
            } else t.is = e; else n();
            Fe(t);
        }), [ o, e ])), o.on && (he(o), Me(o), s = Qe);
    }
    return s;
}, tt = () => {
    ce(oe);
}, rt = (e, t) => oe.on ? (Ce(xe(ue.FRAGMENT, null, null, e, t)), tt) : a, nt = (e, t) => t > 0 ? !e : e, st = e => {
    var t = oe;
    Ue(t), Le(t, y(O(t.parent._.if), ((e, [t, r, n], s) => {
        t.on ? t.is !== (t.is = e.every(nt)) && (t.is ? (he(t), r.call(t, e[n]), fe()) : (Te(t), 
        ke(t))) : s(), Fe(t);
    }), [ t, e || a, t.parent._.if.length - 1 ])), ce(t);
}, at = (e, t, r) => oe.on ? (Ce(xe(ue.RULES.IF, e, !1, t, r)), oe.parent._.if = [ e ], 
st) : a, ot = (e, t, r) => oe.on ? (Ce(xe(ue.RULES.ELIF, e, !1, t, r)), oe.parent._.if = [ e, ...oe.parent._.if || [ !0 ] ], 
st) : a, it = (e, t) => oe.on ? (Ce(xe(ue.RULES.ELSE, null, !1, e, t)), oe.parent._.if = [ !0, ...oe.parent._.if || [ !0 ] ], 
st) : a, lt = e => {
    var t = oe;
    Ue(t), Le(t, L(t._is, ((e, [t, r], n) => {
        t.on ? (Te(t), ke(t), he(t), r.call(t, t.is = e), fe()) : n(), Fe(t);
    }), [ t, e || a ])), ce(t);
}, ut = (e, t, r) => oe.on ? (Ce(xe(ue.RULES.WATCH, e, void 0, t, r)), lt) : a, ht = e => {
    var t = oe, r = [ !0 ];
    Le(t, L(t._is, ((e, [t, r], n) => {
        r[0] = !1, t.is = t.parent._.await = e, n(), Te(t), ke(t);
    }), [ t, r ])), r[0] && e && t.on && (he(t), e.call(t, t.is), fe()), ce(t);
}, ct = (e, t, r) => oe.on ? (Ce(xe(ue.RULES.AWAIT, oe._.await = e, void 0, t, r)), 
ht) : a, ft = e => {
    var t = oe;
    Ue(t), Le(t, L(t._is, ((e, [t, r], n) => {
        n(), t.on && (he(t), r.call(t, t.is = e), fe()), Fe(t);
    }), [ t, e || a ])), ce(t);
}, dt = (e, t) => oe.on ? (Ce(xe(ue.RULES.THEN, oe._.await, void 0, e, t)), ft) : a, vt = e => e > 0 ? 1 : e < 0 ? -1 : 0, pt = (e, t, r, n, s) => {
    var a;
    return he(e), rt(e.props, e.use)(((a = oe)._.for = [ r, t ], s.call(e, t, r, n))), 
    fe(), a;
}, gt = e => {
    var t = oe;
    Ue(t), Le(t, L(t._is, ((e, [t, r, n, s], a) => {
        if (t.on) {
            var o = t.children, i = typeof e;
            if (t.is !== (t.is = e) || "object" === i) {
                var l;
                if (e) switch (i) {
                  case "number":
                    if (l = vt(e |= 0)) if (s[0] !== (s[0] = i) || vt(n[0]) !== l) {
                        ke(t);
                        for (var u = 0, c = 0; u !== e && (pt(t, u + l, c++, e, r), t.on); u += l) ;
                    } else if (l === vt(e - n[0])) for (var f = n[0], d = f * l; f !== e && (pt(t, f + l, d++, e, r), 
                    t.on); f += l) ; else for (var v = e * l; o.length > v; ) ye(o.pop()); else ke(t);
                    break;

                  case "string":
                    if (s[0] !== (s[0] = i)) {
                        ke(t);
                        for (var p = 0; p < e.length && (pt(t, e[p], p, e, r), t.on); p++) ;
                    } else {
                        for (var g = !1; o.length > e.length; ) ye(o.pop());
                        for (var b = 0; b < e.length; b++) if (e[b] !== n[0][b]) {
                            if (!g) for (g = !0; o.length > b; ) ye(o.pop());
                            if (pt(t, e[b], b, e, r), !t.on) break;
                        }
                    }
                    break;

                  case "object":
                    if (h(e)) {
                        var m = new _;
                        if (s[0] !== (s[0] = "a")) for (var E, N = 0; N < e.length && (m.set(e[N], (E = m.get(e[N])) ? E + 1 : 1), 
                        pt(t, e[N], N, e, r), t.on); N++) ; else {
                            for (var T, y = 0; y < e.length; y++) if (m.set(e[y], (T = m.get(e[y])) ? T + 1 : 1), 
                            T = n[0].get(e[y])) n[0].set(e[y], T - 1); else if (pt(t, e[y], y, e, r), !t.on) break;
                            for (var k, L, w = o.length; w--; ) (L = n[0].get(k = o[w]._.for[1])) && (n[0].set(k, L - 1), 
                            ye(o.splice(w, 1)[0]));
                        }
                        e = m;
                    } else if (s[0] !== (s[0] = i)) {
                        for (var R in ke(t), e) if (pt(t, e[R], R, e, r), !t.on) break;
                    } else {
                        for (var O, M = {}, C = o.length; C--; ) e[(O = o[C]._.for)[0]] === O[1] ? M[O[0]] = !0 : ye(o.splice(C, 1)[0]);
                        for (var S in e) if (!0 !== M[S] && (pt(t, e[S], S, e, r), !t.on)) break;
                    }
                    break;

                  default:
                    throw e;
                } else s[0] = "", ke(t);
                n[0] = e;
            }
        } else a();
        Fe(t);
    }), [ t, e, [ null ], [ "" ] ])), ce(t);
}, _t = (e, t, r) => oe.on ? (Ce(xe(ue.RULES.FOR, e, null, t, r)), gt) : a, bt = e => {
    if (e.parentNode && e.parentNode.removeChild(e), e.childNodes) for (var t = e.childNodes, r = t.length; r-- > 0; ) bt(t[r]);
    Ne(e, 999);
}, mt = (e, [t, r, n, s, a]) => {
    var o = oe, i = se, l = ae;
    if (a && t.node) for (var u, h = t.node.childNodes, c = h.length; c-- > 0; ) "script" !== (u = h[c]).localName && "style" !== u.localName && bt(u);
    se = ae = oe = t, t._.$++, Ke(r, n, s)((ve((e => {
        e.root.node = null, ye(e.root);
    })), [])), Fe(t), oe = o, se = i, ae = l;
}, Et = (e, {hydrate: t = !0, target: r = null, pub: n = {}, props: s = {}, use: a, beforeCreated: o = null, onCreated: i = null} = {}) => {
    var l = oe;
    oe = {
        on: !0,
        _: {},
        children: []
    };
    var u = xe(ue.ROOT, null, null, {}, void 0);
    u.css = {}, u.high = u.home = u.parent = null, u.pub = n, u.node = r, u.root = u, 
    i && (u._.oc = [ i ]), ve((e => {
        e.node = null;
    })), oe = l;
    var h = [ u, e, s, a, t ];
    o ? m(o(u), mt, h) : mt(0, h);
}, Nt = (e, t) => {
    if (u(e) || u(e = _e())) return e;
    throw "not external " + t.name;
}, Tt = (e, t) => new ReaseSubject(e, t), yt = function e(t, r) {
    var n = Nt(this, e), s = Tt(t, r);
    return ve.call(n, (() => {
        s.clear();
    })), s;
}, kt = function e(t, r, n) {
    var s = Nt(this, e), a = y(t, r, n);
    return ve.call(s, a), a;
}, Lt = function e(t, r, n) {
    var s = Nt(this, e), a = L(t, r, n);
    return ve.call(s, a), a;
}, wt = function(e, t, r) {
    var n = Nt(this, Lt), s = w(e, t, r);
    return ve.call(n, s), s;
}, Rt = e => {
    if (u(e)) {
        if (e.parent) {
            var t = e.parent.children, r = t.indexOf(e);
            r < 0 || t.splice(r, 1);
        }
        ye(e);
    }
}, Ot = function e(t, r, n, s) {
    var a = Nt(this, e), o = D(t, r, n, s);
    return ve.call(a, o), o;
}, Mt = function e(t, r, n) {
    var s = Nt(this, e), a = K(t, r, n);
    return ve.call(s, a), a;
}; exports({g:ge,_:_e,H:He,I:Ie,$:$e,K:Ke,V:Ve,Y:Ye,a:at,T:Tt,y:yt,k:kt,L:Lt,R:Rt,O:Ot});var rease=/*#__PURE__*/Object.freeze({__proto__:null,ReaseSubject:ReaseSubject,TYPES:ue,_$:le,_c:Ke,_d:et,_e:Ve,_f:rt,_fc:Ye,_h:Pe,_n:$e,_nd:je,_ra:ct,_rd:Be,_re:it,_rf:_t,_ri:at,_rl:ot,_rt:dt,_rw:ut,_s:De,_t:He,_ul:J,_ur:Q,_x:Ie,context:_e,createReaseApp:Et,destroy:Rt,infocusElement:Z,involve:ge,isContext:u,isSubject:ie,isSubscribable:v,isThenable:d,listenEvent:Ot,listenEventGlobal:D,listenResize:Mt,listenResizeGlobal:K,observablefySafeAll:O,observablefySafeAllWithProxy:M,observablefyThenable:R,onCreated:de,onDestroy:ve,subject:yt,subjectGlobal:Tt,subscribe:kt,subscribeGlobal:y,subscribeSafe:Lt,subscribeSafeAll:wt,subscribeSafeAllGlobal:w,subscribeSafeGlobal:L,then:b,thenSafe:m,thenSafeAll:E,thenablefy:N});console.log(rease);

// import App from '#components/App.rease'

window.addEventListener('load', () => {
  module.import('./ddb8c86e.js').then((chunk) => {
    Et(chunk.default, {
      target: document.body,
    
      beforeCreated: () => {
        console.time('ReaseApp');
      },
      onCreated: () => {
        console.timeEnd('ReaseApp');
      }
    });
  });
});})}}));