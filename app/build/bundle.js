
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function () {
    'use strict';

    /* eslint-disable */
    /*
    dester builds:
    __src__/shared/index.ts
    __src__/utils/is.ts
    __src__/utils/other.ts
    __src__/utils/thens.ts
    __src__/utils/subscribe.ts
    __src__/attrs.ts
    __src__/listen.ts
    __src__/resize.ts
    __src__/ReaseObserveble.ts
    __src__/main.ts
    __src__/global.ts
    __src__/window.ts
    index.ts
    */
    var e = {
        svg: "http://www.w3.org/2000/svg",
        math: "http://www.w3.org/1998/Math/MathML"
    }, t = "undefined" != typeof window, r$1 = {}, n = e => e && e._ && e._.ir === r$1, s = Array.isArray, o = e => "function" == typeof e, i = e => null != e && o(e.then), a = e => null != e && o(e.subscribe), l = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/, h = e => l.test(e), u = Object, c = u.defineProperty, f = u.getPrototypeOf, d$1 = u.getOwnPropertyDescriptor, v = () => {}, p = () => v, g = e => e, _ = (e, t, r) => {
        e.then((e => {
            b(e, t, r);
        }));
    }, b = (e, t, r) => {
        i(e) ? e.then((e => {
            b(e, t, r);
        })) : t(e, r);
    }, E = (e, t, r) => {
        if (e.length) for (var n = [], s = [ e.length ], o = s[0]; o-- > 0; ) b(e[o], N, [ n, o, s, t, r ]); else t([], r);
    }, m = e => {
        var t, r = !1, n = [];
        return e((e => {
            b(e, (e => {
                r = !0, t = e;
                for (var s = 0; s < n.length; s++) n[s][0](n[s][1](t));
            }));
        })), {
            then: e => m((s => {
                r ? s(e(t)) : n.push([ s, e ]);
            }))
        };
    }, N = (e, t) => {
        t[0][t[1]] = e, --t[2][0] || t[3](t[0], t[4]);
    }, T = (e, t, r) => {
        var n = () => {
            t = v;
        }, s = [], o = e.subscribe((e => {
            if (s.push(e), 1 === s.length) {
                for (var o = 0; o < s.length; o++) t(s[o], r, n);
                s = [];
            }
        }));
        return n = () => {
            t = v, o && (o.unsubscribe ? o.unsubscribe() : o()), o = null;
        }, t === v && n(), n;
    }, L = (e, t, r) => {
        var n = v, s = v, o = () => {
            t = v, n(), s();
        };
        return s = T(e, ((e, i, a) => {
            s = a, n(), n = w(e, ((e, s, i) => {
                n = i, t(e, r, o);
            }));
        })), o;
    }, w = (e, t, r) => {
        if (i(e)) e = R(e); else if (!a(e)) return t(e, r, v), v;
        return L(e, t, r);
    }, y = (e, t, r) => T(k(e), t, r), R = e => ({
        subscribe: (t, r) => {
            var n = () => {
                t = v;
            };
            return _(e, (e => {
                t(e, r, n);
            })), n;
        }
    }), k = e => ({
        subscribe: (t, r) => {
            e = e.slice();
            for (var n = [], s = {}, o = [ 0 ], i = () => {
                for (var e in s) s[e]();
            }, a = e.length, l = 0; l < a; l++) s[l] = w(e[l], M, [ l, a, n, s, o, [ !1 ], t, r, i ]);
            return i;
        }
    }), S = (e, t) => ({
        subscribe: (r, n) => {
            var s = v, o = v, i = () => {
                r = v, s(), o();
            };
            return o = T(k(e), ((e, a, l) => {
                o = l, s(), s = w(t(e), ((e, t, o) => {
                    s = o, r(e, n, i);
                }));
            })), i;
        }
    }), M = (e, [t, r, n, s, o, i, a, l, h], u) => {
        n[t] = e, s[t] = u, (o[0] === r || i[0] !== (i[0] = !0) && ++o[0] === r) && a(n.slice(0), l, h);
    }, A = /^style--/, O = /^class--/, C = e => e, H = e => {
        switch (typeof e) {
          case "string":
            return e;

          case "object":
            var t = "", r = "";
            if (s(e)) for (var n, o = 0; o < e.length; o++) (n = H(e[o])) && (t += r + n, r = " "); else if (e) for (var i in e) e[i] && (t += r + i, 
            r = " ");
            return t;

          default:
            return "";
        }
    }, I = {}, U = e => I[e] || (I[e] = e.replace(/([A-Z])/g, "-$1").toLowerCase()), $ = e => {
        switch (typeof e) {
          case "string":
            return e;

          case "object":
            var t = "";
            if (s(e)) for (var r, n = 0; n < e.length; n++) (r = $(e[n])) && (t += r + (";" === r[r.length - 1] ? "" : ";")); else if (e) for (var o in e) null != e[o] && (t += U(o) + ":" + e[o] + ";");
            return t;

          default:
            return "";
        }
    }, F = (e, t, r) => {
        r ? e.classList.add(t) : e.classList.remove(t);
    }, G = [ (e, t, r, n) => {
        if (r ? e.setAttribute(t, r) : e.removeAttribute(t), n._.ac) for (var s in n._.ac) F(e, s, n._.ac[s]);
        (e => {
            e.home._is.css && !e.home._is.css[2] && e.node && e.node.classList.add(e.home._is.css[1]);
        })(n);
    }, H ], j = [ (e, t, r, n) => {
        if (r ? e.setAttribute(t, r) : e.removeAttribute(t), n._.as) for (var s in n._.as) e.style[s] = n._.as[s];
    }, $ ], W = [ (e, t, r, n) => {
        F(e, t = t.slice(7), n._.ac[t] = r);
    }, C ], P = [ (e, t, r, n) => {
        e.style[t = t.slice(7)] = n._.as[t] = r;
    }, C ], x = [ (e, t, r) => {
        "_" === t[0] || D(e.localName, t, e).set ? e[t] = r : null == r || "" === r ? e.removeAttribute(t) : e.getAttribute(t) !== r && e.setAttribute(t, r);
    }, C ], z = (e, t) => "class" === e ? G : "style" === e ? j : O.test(e) ? (t.ac || (t.ac = {}), 
    W) : A.test(e) ? (t.as || (t.as = {}), P) : x, X = {}, D = (e, t, r) => (X[e] || (X[e] = {}))[t] || (X[e][t] = d$1(f(r), t) || {}), q = (() => {
        if (!t) return p;
        var e, r, n = e => {
            e.preventDefault();
        }, o = e => {
            e.stopPropagation();
        }, i = (e, t) => function(r) {
            for (var n = 0; n < e.length; n++) e[n].call(this, r, t);
        }, a = e => function(t) {
            t.target === this && e.call(this, t);
        }, l = e => function(t) {
            t.isTrusted && e.call(this, t);
        }, h = (e, t, r) => function(n) {
            ((e, t) => {
                var r = t;
                for (var n in f) {
                    if (!(f[n][0] in e) && !(f[n][1] in e)) return !1;
                    r--;
                }
                return !r;
            })(t, r) && e.call(this, n);
        }, u = [], f = {}, d = () => {
            d = v, document.addEventListener("keyup", (e => {
                delete f[e.code + e.key];
            }), !1), document.addEventListener("keydown", (e => {
                f[e.code + e.key] = [ e.code, e.key ];
                for (var t = 0; t < u.length; t++) u[t][0].length ? u[t][1].call(document.body, e) : u.splice(t--, 1);
            }), !1);
        }, g = (t, r) => function(n) {
            (!t || e && (e === t || t.contains(e))) && r.call(this, n);
        }, _ = (e, t) => function(n) {
            (!e || r && (r === e || e.contains(r))) && t.call(this, n);
        }, b = (t, r) => function(n) {
            (!t || !e || e !== t && !t.contains(e)) && r.call(this, n);
        }, E = (e, t) => function(n) {
            (!e || !r || r !== e && !e.contains(r)) && t.call(this, n);
        }, m = !1, N = () => {
            N = v;
            try {
                window.addEventListener("test", v, c({}, "passive", {
                    get: () => !(m = !0)
                }));
            } catch (e2) {}
            var t, n = "start move end".split(" "), [s, o, i] = n, a = e => {
                var t = document.createEvent("CustomEvent");
                return t.initCustomEvent(e, !0), t;
            }, l = (e, t) => {
                e.dispatchEvent(t);
            }, h = (t, n, o) => {
                if (!o || 1 === t.touches.length) {
                    var i = e, h = r;
                    e = t.target, r = n === s ? e : r, i !== e && (i && l(i, a("outhover")), l(e, a("inhover"))), 
                    h !== r && (h && l(h, a("outfocus")), l(r, a("infocus")));
                }
            };
            if ("onpointermove" in document) t = {
                pointerdown: e => {
                    h(e, s, !1);
                },
                pointermove: e => {
                    h(e, o, !1);
                },
                pointerup: e => {
                    h(e, i, !1);
                },
                pointercancel: e => {
                    h(e, i, !1);
                }
            }; else {
                var u = 0, f = (e, t) => {
                    ++u >= (u = 1) && h(e, t, !1);
                }, d = (e, t) => {
                    --u <= (u = -1) && h(e, t, !0);
                };
                t = {
                    mousedown: e => {
                        f(e, s);
                    },
                    mousemove: e => {
                        f(e, o);
                    },
                    mouseup: e => {
                        f(e, i);
                    },
                    touchstart: e => {
                        d(e, s);
                    },
                    touchmove: e => {
                        d(e, o);
                    },
                    touchend: e => {
                        d(e, i);
                    },
                    touchcancel: e => {
                        d(e, i);
                    }
                };
            }
            for (var p in t) document.addEventListener(p, t[p], !0);
        };
        return (e, t, r, c) => {
            for (var f, v, p = s(r) ? r.slice() : [ r ], T = i(p, c), L = {}, w = 0, y = () => {
                p.length = 0, f && e.removeEventListener(f, T, O);
            }, R = !1, k = !1, S = !1, M = t.split(/[^a-z\d]+/i), A = M.length; A--; ) if (v = M[A]) switch (v) {
              case "once":
                p.push(y);
                break;

              case "strict":
                S = !0;
                break;

              case "passive":
                R = !0;
                break;

              case "capture":
                k = !0;
                break;

              case "self":
                T = a(T);
                break;

              case "trusted":
                T = l(T);
                break;

              case "stop":
                p.unshift(o);
                break;

              case "prevent":
                p.unshift(n);
                break;

              case "inhovered":
                T = g(e, T);
                break;

              case "infocused":
                T = _(e, T);
                break;

              case "outhovered":
                T = b(e, T);
                break;

              case "outfocused":
                T = E(e, T);
                break;

              default:
                1 === v.length || /[A-Z]/.test(v[0]) ? v in L || (L[v] = !0, w++) : A || (f = v);
            }
            var O = m ? {
                passive: R,
                capture: k
            } : k;
            return N(), (w || S) && (d(), T = h(T, L, w)), f ? e.addEventListener(f = M[0], T, O) : u.push([ p, T ]), 
            y;
        };
    })(), B = (e, t) => r => q(r.node, e, t, r), Y = (() => {
        if (!t) return p;
        var e, r = "__REASE_RESIZE", n = setTimeout, s = clearTimeout, o = t => {
            for (var n, s, o, i, a = 0; a < t.length; a++) if ((s = (n = t[a].target)[r]) && s.l.length) {
                if (o = n.offsetWidth || n.clientWidth, i = n.offsetHeight || n.clientHeight, s.w !== o || s.h !== i) {
                    s.w = o, s.h = i;
                    for (var l, h = {
                        width: o,
                        height: i,
                        target: n
                    }, u = s.l, c = 0; c < u.length; c++) {
                        l = u[c];
                        for (var f = 1; f < l.length; f++) l[f].call(n, h, l[0]);
                        l.length || u.splice(c--, 1);
                    }
                    s.l.length || e.unobserve(n);
                }
            } else e.unobserve(n);
        }, i = () => {
            i = v;
            try {
                e = new ResizeObserver(o);
            } catch (e3) {
                var t, a = [], l = () => {
                    s(t), o(a), a.length && (t = n(l, 25));
                };
                e = {
                    observe: e => {
                        a.push({
                            target: e
                        }), n(l);
                    },
                    unobserve: e => {
                        n((e => {
                            var t = e[r];
                            if (!t || !t.l.length) for (var n = a.length; n--; ) if (a[n].target === e) {
                                a.splice(n, 1);
                                break;
                            }
                        }), 1, e);
                    }
                }, document.addEventListener("visibilitychange", (() => {
                    document.hidden ? s(t) : l();
                }), !1);
            }
        };
        return (t, s, o) => {
            i();
            var a = [ o ].concat(s), l = t[r] || (t[r] = {
                l: []
            });
            l.l.push(a), 1 === l.l.length && e.observe(t);
            var h = n((() => {
                var e = t.offsetWidth || t.clientWidth, r = t.offsetHeight || t.clientHeight, n = {
                    width: e,
                    height: r,
                    target: t
                };
                l.w = e, l.h = r;
                for (var s = 1; s < a.length; s++) a[s].call(t, n, a[0]);
            }));
            return a.push((() => {
                clearTimeout(h), a.pop();
            })), () => {
                a.length = 0, !l.l[1] && (!l.l[0] || l.l[0] === a) && e.unobserve(t);
            };
        };
    })(), Z = e => t => Y(t.node, e, t), J = (e, t, r) => {
        e._value = t;
        var n = e._;
        n.break = !0;
        var s, i, a, l = n.items, h = n.queue;
        if (h.push({
            f: r,
            n: t
        }), 1 === h.length) {
            for (var u, c = 0; c < h.length; c++) if ((u = h[c].f) || c > h.length - 2) {
                n.break = !1;
                for (var f = h[c], d = 0; d < l.length; d++) if ((u || (s = l[d].o, i = f.n, a = void 0, 
                !((e, t) => e == e ? e === t : t != t)(s, i) || null != (a = i) && "object" == typeof a || o(i))) && l[d].s(e._value = l[d].o = f.n), 
                !u && n.break) {
                    l[d].o = e._value;
                    break;
                }
            }
            n.queue = [];
        }
        return e;
    };

    class ReaseSubject {
        constructor(e, t, r, n) {
            this._ = {
                items: [],
                queue: [],
                mwSet: r || (r = g),
                mwGet: n || g,
                onFst: t || v,
                onLst: v,
                break: !1
            }, this._value = r(e, this);
        }
        get on() {
            return this._.items.length > 0;
        }
        get value() {
            return this._value;
        }
        get() {
            return this._.mwGet(this._value, this);
        }
        set(e) {
            return J(this, this._.mwSet(e, this), !1);
        }
        next(e) {
            return J(this, this._.mwSet(e, this), !0);
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
                    if (r.s !== v) {
                        for (var e = s.length; e-- > 0; ) if (s[e].s === r.s) {
                            s.splice(e, 1);
                            break;
                        }
                        r.s = r.u = v, s.length || n.onLst(this);
                    }
                },
                o: {}
            }, n = this._, s = n.items;
            return s.length || (n.onLst = n.onFst(this) || v), s.push(r), n.queue.length || r.s(r.o = this._value), 
            r.u;
        }
    }

    var K = ReaseSubject.prototype;

    c(K, "$", {
        get: K.get,
        set: K.set
    });

    for (var Q = function(e, t) {
        c(K, e[t], {
            value: function() {
                var r = this.get();
                return r = null != r && r[e[t]] ? r[e[t]](arguments) : r, t ? r + "" : r;
            }
        });
    }, V = [ "valueOf", "toString", "toJSON" ], ee = 3; ee-- > 0; ) Q(V, ee);

    var te, re, ne, se = e => e instanceof ReaseSubject, oe = S, ie = {
        ROOT: "ROOT",
        COMPONENT: "COMPONENT",
        ELEMENT: "ELEMENT",
        ELEMENT_DYNAMIC: "ELEMENT_DYNAMIC",
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
    }, ae = e => {
        ne = e, te = e.high, re = e.home;
    }, le = e => {
        ne = e.parent;
    }, he = () => {
        ne = null;
    };

    function ue(e) {
        var t = n(this) ? this : ne;
        if (!n(t)) throw e;
        if (t.type !== ie.COMPONENT) throw e;
        t.on ? (t._.oc || (t._.oc = [])).push(e) : e(t);
    }

    function ce(e) {
        var t = n(this) ? this : ne;
        if (!n(t)) throw e;
        t.on ? (t._.od || (t._.od = [])).push(e) : e(t);
    }

    var fe, de = (e, t, r) => {
        if (!n(e)) throw e;
        var s = ne, o = te, i = re;
        ae(e), e.type === ie.COMPONENT && (te = re = e);
        var a = t.apply(e, r);
        return ne = s, te = o, re = i, a;
    }, ve = () => ne, pe = e => {
        if (e._.esu) for (var t, r = e._.esu; r.length; ) (t = r.pop()) && o(t = t.destroy || t) && (ae(e), 
        t(e));
    }, ge = {
        3: [],
        8: []
    }, _e = /^(?:script|style|audio|video|button|datalist|fieldset|form|input|label|legend|meter|optgroup|option|output|progress|select|textarea|iframe|object|embed)$/i, be = (e, t) => {
        var r = e.nodeType;
        if (3 === r || 8 === r) ge[r].length < t && ge[r].push(e); else if (1 === r && !_e.test(e.localName) && ((r = e.localName + e.namespaceURI) in ge || (ge[r] = []), 
        ge[r].length < t)) {
            for (var n = e.childNodes, s = n.length; s-- > 0; ) e.removeChild(n[s]);
            e.value && (e.value = null), e.type && (e.type = null), ge[r].push(e);
        }
    }, Ee = e => {
        if (e._.od) for (;e._.od.length; ) e._.od.pop()(e);
    }, me = e => {
        if (e && e.on) {
            e.on = !1, pe(e), Ee(e), ye(e), e._.ods && e._.ods();
            var t = e.node;
            t && t.parentNode && t.parentNode.removeChild(t), Ne(e), t && be(t, 25), e._.$ && (e._.$ = 1, 
            Ce(e));
        }
    }, Ne = e => {
        for (;e.children.length; ) me(e.children.pop());
    }, Te = (e, t) => {
        e._.ods = t, e.on || e._.ods();
    }, Le = e => t => {
        if (t.root.node) for (var r, n, s = t; ;) if (r = (s = s.parent).node) {
            1 === r.nodeType ? (e(t, r), r.appendChild(t.node)) : (e(t, r = (n = r).parentNode), 
            r.insertBefore(t.node, n));
            break;
        }
    }, we = e => {
        var t, r, n, s = e.attrs;
        for (var o in e.props) if (r = s[o] = {
            is: null,
            _is: t = e.props[o],
            high: e.high,
            _: {
                $: 0,
                u: v
            }
        }, a(t) || i(t) && (t = R(t), 1)) {
            if (Oe(r), r._.u = L(t, ((e, [t, r, n, s], o) => {
                r._.u = o, t.on ? r.is !== (r.is = e = s[1](e)) && t.node && s[0](t.node, n, e, t) : o(), 
                Ce(r);
            }), [ e, r, o, z(o, e._) ]), !e.on) {
                r._.u();
                break;
            }
        } else n = z(o, e._), r.is = t = n[1](t), e.node && n[0](e.node, o, t, e);
    }, ye = e => {
        var t = e.attrs;
        if (t) {
            e.attrs = null;
            var r = e.node;
            for (var n in t) r && (r.hasAttribute(n) ? r.removeAttribute(n) : n in r && (r[n] = null)), 
            t[n]._.u(), Ce(t[n]);
        }
    }, Re = (fe = Le(((t, r) => {
        var n = e[t.is] || r.namespaceURI, s = t.is + n, o = s in ge && ge[s].pop();
        if (o) for (var i = o.attributes, a = i.length; a-- > 0; ) o.removeAttribute(i[a].name); else o = document.createElementNS(n, t.is);
        t.node = o, (e => {
            if (e.use) for (var t = e._.esu || (e._.esu = []), r = 0; r < e.use.length; r++) if (ae(e), 
            t.push(e.use[r](e)), !e.on) {
                pe(e);
                break;
            }
        })(t), we(t), ae(t);
    })), e => {
        e.attrs = {}, fe(e), e.node || we(e);
    }), ke = Le((e => {
        ge[3].length ? (e.node = ge[3].pop()).data = "" : e.node = document.createTextNode("");
    })), Se = Le((e => {
        ge[3].length ? (e.node = ge[3].pop()).data = e.is : e.node = document.createTextNode(e.is);
    })), Me = Le((e => {
        ge[8].length ? (e.node = ge[8].pop()).data = e.is : e.node = document.createComment(e.is);
    })), Ae = (e, t, n, s, o, i) => ne = ne.children[ne.children.push({
        type: e,
        name: i,
        is: n,
        _is: t,
        node: null,
        props: s,
        use: o,
        root: ne.root,
        home: re,
        high: te,
        parent: ne,
        children: [],
        slots: null,
        attrs: null,
        on: ne.on,
        pub: {},
        _: {
            ir: r$1,
            $: 0
        }
    }) - 1], Oe = e => {
        e.high._.$++, e._.$++;
    }, Ce = e => {
        if (e && e._.$ > 0) if (e._.$--, e.type !== ie.COMPONENT && e.type !== ie.ROOT) Ce(e.high); else if (0 === e._.$) {
            e._.$ = NaN;
            var t = e._.oc;
            if (t) {
                for (var r = [], n = 0; n < t.length && (ae(e), r.push(t[n](e)), e.on); n++) ;
                he(), E(r, ((e, t) => {
                    if (t.on) {
                        for (var r = e.length; r--; ) o(e[r]) && ce(e[r]);
                        Ce(t.high);
                    } else for (var n = e.length; n--; ) o(e[n]) && (ae(t), e[n](t));
                    he();
                }), e);
            } else Ce(e.high);
        }
    }, He = e => {
        if (ne.on && void 0 !== e && "" !== e) {
            var t = Ae(ie.EXPRESSION, e, "");
            Se(t), Oe(t), Te(t, w(e, ((e, t, r) => {
                t.on ? (Ne(t), o(e) && (ae(t), e = e.call(t), he()), e = void 0 === e ? "" : "" + e, 
                t.is !== (t.is = e) && t.node && (t.node.data = e)) : r(), Ce(t);
            }), t)), le(t);
        }
    }, Ie = e => {
        ne.on && void 0 !== e && "" !== e && (Se(Ae(ie.TEXT, e, "" + e)), le(ne));
    }, Ue = e => {
        if (ne.on && void 0 !== e && "" !== e) {
            var t = Ae(ie.COMMENT, e, "");
            Me(t), Oe(t), Te(t, w(e, ((e, t, r) => {
                t.on ? (e = void 0 === e ? "" : "" + e, t.is !== (t.is = e) && t.node && (t.node.data = e)) : r(), 
                Ce(t);
            }), t)), le(t);
        }
    }, $e = {}, Fe = (e, t) => {
        if (ne.on) {
            var r = Ae(ie.HTML, e, "");
            ke(r), Oe(r), Te(r, w(e, ((e, [t, r, n], s) => {
                if (t.on) {
                    if (e = void 0 === e ? "" : "" + e, t.is !== (t.is = e) && t.node) {
                        for (var o; r.length; ) (o = r.pop()).parentNode.removeChild(o);
                        if (e) {
                            var i = t.node.parentNode, a = i.namespaceURI;
                            ($e[a] || ($e[a] = document.createElementNS(a, "div"))).innerHTML = n ? n.createHTML(e) : e;
                            for (var l = $e[a].childNodes, h = 0; h < l.length; h++) r.push(o = l[h]), i.insertBefore(o, t.node);
                        }
                    }
                } else s();
                Ce(t);
            }), [ r, r._.html = [], t ])), le(r);
        }
    }, Ge = (e, t) => {
        for (var r, n = e.children, s = 0; s < n.length; s++) {
            if (!(r = n[s]).node || 1 !== r.node.nodeType) if (r.type === ie.HTML) for (;r._.html.length; ) t.appendChild(r._.html[0]); else Ge(r, t);
            r.node && t.appendChild(r.node);
        }
    }, je = e => e[1](), We = t => {
        var r = ne;
        r.slots = t, Oe(r), Te(r, w(r._is, ((t, r, n) => {
            if (r.on) {
                if (r.is !== (r.is = t)) {
                    switch (typeof t) {
                      case "function":
                        Ne(r), ae(r), qe(t, r.props, r.use)(r.slots);
                        break;

                      case "string":
                        if ("r-slot" === t) Ne(r), ae(r), ze(r._.sn, r.props, r.use)((() => {
                            r.slots.forEach(je);
                        })); else {
                            var s = r.children[0], o = h(t), i = !s || s.type !== ie.ELEMENT && s.type !== ie.FRAGMENT || o || t in e, a = !!r.root.node;
                            if ("r-fragment" === t) {
                                if (i) Ne(r), ae(r), Qe(r.props, r.use)(r.slots.forEach(je)); else if (pe(s), Ee(s), 
                                ye(s), s.type = ie.FRAGMENT, s.is = null, a) {
                                    var l = s.node, u = l.parentNode;
                                    u.removeChild(l), ke(s);
                                    for (var c = s.node, f = l.childNodes, d = f.length; d-- > 0; ) u.insertBefore(f[d], c), 
                                    c = f[d];
                                }
                            } else if (i || s && (s.is in e || h(s.is))) Ne(r), ae(r), Ye(t, r.props, r.use)(o || r.slots.forEach(je)); else {
                                pe(s), Ee(s), ye(s);
                                var v = s.type;
                                if (s.type = ie.ELEMENT, s.is = t, a) {
                                    var p = s.node;
                                    if (p.parentNode.removeChild(p), Re(s), v !== ie.FRAGMENT) for (var g = p.childNodes; g.length; ) s.node.appendChild(g[0]); else Ge(s, s.node);
                                    Be();
                                }
                            }
                        }
                        break;

                      default:
                        Ne(r);
                    }
                    he();
                }
            } else n();
            Ce(r);
        }), r)), le(r);
    }, Pe = (e, t, r, n) => ne.on ? (ke(Ae(ie.RULES.TAG, e, null, t || {}, r)), ne._.sn = n, 
    We) : v, xe = e => {
        for (var t = ne, r = t.home.slots, n = 0; n < r.length && (r[n][0] !== t._is || (ne = t, 
        te = t.high, re = t.home.home, t.is = !0, r[n][1](), t.on)); n++) ;
        t.is ? (te = t.high, re = t.home) : e && e.call(t), le(t);
    }, ze = (e, t, r) => ne.on ? (ke(Ae(ie.SLOT, e, !1, t, r, e)), xe) : v, Xe = (e, t) => {
        t && !(t[1] in e.css) && (o(t[0]) && (t[0] = t[0]("." + t[1])), e.css[t[1]] = "", 
        e._.$++, e._.od.push(w(t[0], ((e, [t, r, n, s, o], i) => {
            if (t.on) {
                if (n[0] !== (n[0] = e) && (t.css[r] = e, t.node)) {
                    var a = s[0] || (s[0] = document.getElementById(r) || (e => {
                        var t = document.createElement("style");
                        return t.id = e, document.head.appendChild(t), t;
                    })(r));
                    a.textContent !== e && (a.textContent = e);
                }
            } else i();
            o[0] && (o[0] = !1, Ce(t));
        }), [ e, t[1], [ "" ], [ null ], [ !0 ] ])));
    }, De = e => {
        var t = ne;
        t.slots = e, Oe(t), te = re = t, t.is.call(t, t.props), Ce(t), te = t.high, re = t.home, 
        le(t);
    }, qe = (e, t, r) => ne.on ? (Ae(ie.COMPONENT, e, e, t || {}, r, e.name), Xe(ne.root, e.css), 
    De) : v, Be = () => {
        var e = ne;
        (e => {
            if (e._.esu) for (var t, r = e._.esu, n = 0; n < r.length; n++) if ((t = r[n]) && o(t = t.created) && (ae(e), 
            t(e), !e.on)) {
                pe(e);
                break;
            }
        })(e), le(e);
    }, Ye = (e, t, r) => ne.on ? (Re(Ae(ie.ELEMENT, e, e, t || {}, r)), Be) : v, Ze = e => {
        e.call(ne);
    }, Je = (e, t, r, n) => {
        var s = v;
        if (ne.on) {
            var o = Ae(ie.ELEMENT_DYNAMIC, n, e, t || {}, r);
            Oe(o), Te(o, w(n, ((e, [t, r], n) => {
                if (t.on) if (t.is !== (e || (e = r)) && t.node) {
                    pe(t), Ee(t), ye(t), t.is = e;
                    var s = t.node;
                    s.parentNode.removeChild(s), Re(t);
                    for (var o = s.childNodes; o.length; ) t.node.appendChild(o[0]);
                    Be();
                } else t.is = e; else n();
                Ce(t);
            }), [ o, e ])), o.on && (ae(o), Re(o), s = Be);
        }
        return s;
    }, Ke = () => {
        le(ne);
    }, Qe = (e, t) => ne.on ? (ke(Ae(ie.FRAGMENT, null, null, e, t)), Ke) : v, Ve = (e, t) => t > 0 ? !e : e, et = e => {
        var t = ne;
        Oe(t), Te(t, T(k(t.parent._.if), ((e, [t, r, n], s) => {
            t.on ? t.is !== (t.is = e.every(Ve)) && (t.is ? (ae(t), r.call(t, e[n]), he()) : (Ee(t), 
            Ne(t))) : s(), Ce(t);
        }), [ t, e || v, t.parent._.if.length - 1 ])), le(t);
    }, tt = (e, t, r) => ne.on ? (ke(Ae(ie.RULES.IF, e, !1, t, r)), ne.parent._.if = [ e ], 
    et) : v, rt = (e, t, r) => ne.on ? (ke(Ae(ie.RULES.ELIF, e, !1, t, r)), ne.parent._.if = [ e, ...ne.parent._.if || [ !0 ] ], 
    et) : v, nt = (e, t) => ne.on ? (ke(Ae(ie.RULES.ELSE, null, !1, e, t)), ne.parent._.if = [ !0, ...ne.parent._.if || [ !0 ] ], 
    et) : v, st = e => {
        var t = ne;
        Oe(t), Te(t, w(t._is, ((e, [t, r], n) => {
            t.on ? (Ee(t), Ne(t), ae(t), r.call(t, t.is = e), he()) : n(), Ce(t);
        }), [ t, e || v ])), le(t);
    }, ot = (e, t, r) => ne.on ? (ke(Ae(ie.RULES.WATCH, e, void 0, t, r)), st) : v, it = e => {
        var t = ne, r = [ !0 ];
        Te(t, w(t._is, ((e, [t, r], n) => {
            r[0] = !1, t.is = t.parent._.await = e, n(), Ee(t), Ne(t);
        }), [ t, r ])), r[0] && e && t.on && (ae(t), e.call(t, t.is), he()), le(t);
    }, at = (e, t, r) => ne.on ? (ke(Ae(ie.RULES.AWAIT, ne._.await = e, void 0, t, r)), 
    it) : v, lt = e => {
        var t = ne;
        Oe(t), Te(t, w(t._is, ((e, [t, r], n) => {
            n(), t.on && (ae(t), r.call(t, t.is = e), he()), Ce(t);
        }), [ t, e || v ])), le(t);
    }, ht = (e, t) => ne.on ? (ke(Ae(ie.RULES.THEN, ne._.await, void 0, e, t)), lt) : v, ut = e => e > 0 ? 1 : e < 0 ? -1 : 0, ct = (e, t, r, n, s) => {
        var o;
        return ae(e), Qe(e.props, e.use)(((o = ne)._.for = [ r, t ], s.call(e, t, r, n))), 
        he(), o;
    }, ft = e => {
        var t = ne;
        Oe(t), Te(t, w(t._is, ((e, [t, r, n, o], i) => {
            if (t.on) {
                var a = t.children, l = typeof e;
                if (t.is !== (t.is = e) || "object" === l) {
                    var h;
                    if (e) switch (l) {
                      case "number":
                        if (h = ut(e |= 0)) if (o[0] !== (o[0] = l) || ut(n[0]) !== h) {
                            Ne(t);
                            for (var u = 0, c = 0; u !== e && (ct(t, u + h, c++, e, r), t.on); u += h) ;
                        } else if (h === ut(e - n[0])) for (var f = n[0], d = f * h; f !== e && (ct(t, f + h, d++, e, r), 
                        t.on); f += h) ; else for (var v = e * h; a.length > v; ) me(a.pop()); else Ne(t);
                        break;

                      case "string":
                        if (o[0] !== (o[0] = l)) {
                            Ne(t);
                            for (var p = 0; p < e.length && (ct(t, e[p], p, e, r), t.on); p++) ;
                        } else {
                            for (var g = !1; a.length > e.length; ) me(a.pop());
                            for (var _ = 0; _ < e.length; _++) if (e[_] !== n[0][_]) {
                                if (!g) for (g = !0; a.length > _; ) me(a.pop());
                                if (ct(t, e[_], _, e, r), !t.on) break;
                            }
                        }
                        break;

                      case "object":
                        if (s(e)) {
                            var b = new Map;
                            if (o[0] !== (o[0] = "a")) for (var E, m = 0; m < e.length && (b.set(e[m], (E = b.get(e[m])) ? E + 1 : 1), 
                            ct(t, e[m], m, e, r), t.on); m++) ; else {
                                for (var N, T = 0; T < e.length; T++) if (b.set(e[T], (N = b.get(e[T])) ? N + 1 : 1), 
                                N = n[0].get(e[T])) n[0].set(e[T], N - 1); else if (ct(t, e[T], T, e, r), !t.on) break;
                                for (var L, w, y = a.length; y--; ) (w = n[0].get(L = a[y]._.for[1])) && (n[0].set(L, w - 1), 
                                me(a.splice(y, 1)[0]));
                            }
                            e = b;
                        } else if (o[0] !== (o[0] = l)) {
                            for (var R in Ne(t), e) if (ct(t, e[R], R, e, r), !t.on) break;
                        } else {
                            for (var k, S = {}, M = a.length; M--; ) e[(k = a[M]._.for)[0]] === k[1] ? S[k[0]] = !0 : me(a.splice(M, 1)[0]);
                            for (var A in e) if (!0 !== S[A] && (ct(t, e[A], A, e, r), !t.on)) break;
                        }
                        break;

                      default:
                        throw e;
                    } else o[0] = "", Ne(t);
                    n[0] = e;
                }
            } else i();
            Ce(t);
        }), [ t, e, [ null ], [ "" ] ])), le(t);
    }, dt = (e, t, r) => ne.on ? (ke(Ae(ie.RULES.FOR, e, null, t, r)), ft) : v, vt = e => {
        if (e.parentNode && e.parentNode.removeChild(e), e.childNodes) for (var t = e.childNodes, r = t.length; r-- > 0; ) vt(t[r]);
        be(e, 999);
    }, pt = (e, [t, r, n, s, o]) => {
        var i = ne, a = te, l = re;
        if (o && t.node) for (var h, u = t.node.childNodes, c = u.length; c-- > 0; ) "script" !== (h = u[c]).localName && "style" !== h.localName && vt(h);
        te = re = ne = t, t._.$++, qe(r, n, s)((ce((e => {
            e.root.node = null, me(e.root);
        })), [])), Ce(t), ne = i, te = a, re = l;
    }, gt = (e, {hydrate: t = !0, target: r = null, pub: n = {}, props: s = {}, use: o, beforeCreated: i = null, onCreated: a = null} = {}) => {
        var l = ne;
        ne = {
            on: !0,
            _: {},
            children: []
        };
        var h = Ae(ie.ROOT, null, null, {}, void 0);
        h.css = {}, h.high = h.home = h.parent = null, h.pub = n, h.node = r, h.root = h, 
        a && (h._.oc = [ a ]), ce((e => {
            e.node = null;
        })), ne = l;
        var u = [ h, e, s, o, t ];
        i ? b(i(h), pt, u) : pt(0, u);
    }, _t = (e, t) => {
        if (n(e) || n(e = ve())) return e;
        throw "not external " + t.name;
    }, bt = (e, t, r, n) => new ReaseSubject(e, t, r, n), Et = function e(t, r, n, s) {
        var o = _t(this, e), i = bt(t, r, n, s);
        return ce.call(o, (() => {
            i.clear();
        })), i;
    }, mt = function e(t, r, n) {
        var s = _t(this, e), o = T(t, r, n);
        return ce.call(s, o), o;
    }, Nt = function e(t, r, n) {
        var s = _t(this, e), o = w(t, r, n);
        return ce.call(s, o), o;
    }, Tt = function(e, t, r) {
        var n = _t(this, Nt), s = y(e, t, r);
        return ce.call(n, s), s;
    }, Lt = e => {
        if (n(e)) {
            if (e.parent) for (var t = e.parent.children, r = t.length; r-- > 0; ) if (t[r] === e) {
                t.splice(r, 1);
                break;
            }
            me(e);
        }
    }, wt = function e(t, r, n, s) {
        var o = _t(this, e), i = q(t, r, n, s);
        return ce.call(o, i), i;
    }, yt = function e(t, r, n) {
        var s = _t(this, e), o = Y(t, r, n);
        return ce.call(s, o), o;
    }, Rt = t ? window : {
        innerWidth: 0,
        innerHeight: 0,
        outerWidth: 0,
        outerHeight: 0
    }, kt = 0, St = () => {
        Ut.$ = $t.$ = Ft.$ = Gt.$ = -1;
    }, Mt = () => {
        setTimeout(St);
    }, At = t ? () => (kt++ || window.addEventListener("resize", Mt), () => {
        --kt || window.removeEventListener("resize", Mt);
    }) : p, Ot = () => Rt.innerWidth, Ct = () => Rt.innerHeight, Ht = () => Rt.outerWidth, It = () => Rt.outerHeight, Ut = bt(0, At, Ot, Ot), $t = bt(0, At, Ct, Ct), Ft = bt(0, At, Ht, Ht), Gt = bt(0, At, It, It);

    var rease = /*#__PURE__*/Object.freeze({
        __proto__: null,
        $innerHeight: $t,
        $innerWidth: Ut,
        $outerHeight: Gt,
        $outerWidth: Ft,
        ReaseSubject: ReaseSubject,
        TYPES: ie,
        _$: oe,
        _c: qe,
        _d: Je,
        _e: Ye,
        _f: Qe,
        _fc: Ze,
        _h: Fe,
        _n: Ue,
        _ra: at,
        _rd: Pe,
        _re: nt,
        _rf: dt,
        _ri: tt,
        _rl: rt,
        _rt: ht,
        _rw: ot,
        _s: ze,
        _t: Ie,
        _ul: B,
        _ur: Z,
        _x: He,
        context: ve,
        createReaseApp: gt,
        destroy: Lt,
        involve: de,
        isContext: n,
        isSubject: se,
        isSubscribable: a,
        isThenable: i,
        listen: wt,
        listenGlobal: q,
        onCreated: ue,
        onDestroy: ce,
        resize: yt,
        resizeGlobal: Y,
        subject: Et,
        subjectGlobal: bt,
        subscribablefySafeAll: k,
        subscribablefySafeAllWithProxy: S,
        subscribablefyThenable: R,
        subscribe: mt,
        subscribeGlobal: T,
        subscribeSafe: Nt,
        subscribeSafeAll: Tt,
        subscribeSafeAllGlobal: y,
        subscribeSafeGlobal: w,
        then: _,
        thenSafe: b,
        thenSafeAll: E,
        thenablefy: m
    });

    /* eslint-disable @typescript-eslint/explicit-function-return-type */

    const [DashboardContextmenu, useDashboardContextmenu, schema2contextmenu] = (() => {
      
      
      let lastCEvent;

      const $cmenuFn = bt(null);

      const hideDashboardContextmenu = () => { $cmenuFn.$ = null; };
      
      const useDashboardContextmenu = (fn, notSelf) =>
        (ctx) => q(
          ctx.node, 'contextmenu-prevent-stop' + (notSelf ? '' : '-self'), (e) => {
            lastCEvent = e, $cmenuFn.$ = [fn, ctx];
          }
        );

      function DashboardContextmenu(
        
      ) {
        const $clientX = Et(0);
        const $clientY = Et(0);
        // const $opacity = subject<number>(0)
        
        const resizer = (e) => {
          // $opacity.$ = 0
          // console.log(111, e)
          $clientX.$ = lastCEvent.clientX;
          $clientY.$ = lastCEvent.clientY;
          if ($clientX.$ + e.width > window.innerWidth) $clientX.$ -= e.width;
          if ($clientY.$ + e.height > window.innerHeight) $clientY.$ -= e.height;
          // $opacity.$ = 1
        }
      
        ;(
            tt(/*r1.$*/$cmenuFn)(([cmenuFn, ctx]) => {
                Ye("div", { class: ['position-absolute', 'top-0', 'bottom-0', 'start-0', 'end-0'], "style--z-index": "1" }, [B('pointerdown-prevent-stop-self', hideDashboardContextmenu)])(Ze(() => {
                wt(window, 'resize', hideDashboardContextmenu)
      
                ;(
                        Ye("div", { class: [
                      'position-fixed',
                      'animated zoomIn',
                      'dropdown-menu dropdown-menu-dark show'
                    ], style: "--animate-duration: 0.125s", "style--left": /*r2.$*/oe([$clientX], (_$0) => (_$0[0] + 'px')), "style--top": /*r2.$*/oe([$clientY], (_$0) => (_$0[0] + 'px')) }, [Z(resizer), B('contextmenu-prevent-stop', () => {}), B('click-prevent-stop', hideDashboardContextmenu)])(Ze(() => { cmenuFn(ctx); }))

                );
              }));

          })

        );
      }

      const schema2contextmenu = (
        SCHEMA
      ) => (ctx) => {
        for (const schema of SCHEMA) {
          if (schema) {
              Ye("li")(
        Ye("button", { type: "button", class: "dropdown-item" }, [B('click', () => { schema.click(ctx); })])(
          He(/*r1.$*/schema.title)
        )
      );

          } else {
              Ye("li")(
        Ye("hr", { class: "dropdown-divider" })()
      );

          }
        }
      };

      // DashboardContextmenu.css = <style jsx>{`
      // .card * {
      //   color: inherit !important;
      //   background: inherit !important;
      // }
      // `}</style>

      return [DashboardContextmenu, useDashboardContextmenu, schema2contextmenu]
    })();

    const noop = (() => {});

    const __random__ = Math.random;

    const { round, ceil, floor, max, min } = Math;

    const random = () => __random__() || random();

    const randomTo = (
      min,
      max = min
    ) => round(random() * (max - min) + min);

    const random_string = () => randomTo(1e16, 9e16).toString(36);

    var clearSelection = () => {
      if (window.getSelection) {
        // @ts-ignore
        if (window.getSelection().empty) { // Chrome
        // @ts-ignore
          window.getSelection().empty();
        // @ts-ignore
        } else if (window.getSelection().removeAllRanges) { // Firefox
        // @ts-ignore
          window.getSelection().removeAllRanges();
        }
        // @ts-ignore
      } else if (document.selection) { // IE?
        // @ts-ignore
        document.selection.empty();
      }
    };

    /* eslint-disable */

    var d = (t, o) => d => {
        var n = d.node, x = {
            ctx: d,
            is: !1,
            dx: 0,
            dy: 0,
            ox: 0,
            oy: 0
        }, y = [ q(n, "pointerdown", ((e, d) => {
            d.is = !0, d.ox = d.oy = 0, d.dx = e.clientX, d.dy = e.clientY, t({
                type: "start",
                event: e,
                detail: o,
                delta: {
                    x: 0,
                    y: 0
                },
                offset: {
                    x: 0,
                    y: 0
                }
            }, d.ctx);
        }), x), q(document, "pointermove", ((e, d) => {
            if (d.is) {
                var n = e.clientX, x = e.clientY, y = n - d.dx, r = x - d.dy;
                d.ox += y, d.oy += r, t({
                    type: "move",
                    event: e,
                    detail: o,
                    delta: {
                        x: y,
                        y: r
                    },
                    offset: {
                        x: d.ox,
                        y: d.oy
                    }
                }, d.ctx), d.dx = n, d.dy = x;
            }
        }), x), q(document, "pointerup", ((e, d) => {
            d.is && (d.is = !1, t({
                type: "end",
                event: e,
                detail: o,
                delta: {
                    x: 0,
                    y: 0
                },
                offset: {
                    x: d.ox,
                    y: d.oy
                }
            }, d.ctx));
        }), x) ];
        return () => {
            for (var e = y.length; e--; ) y[e]();
        };
    };

    /* eslint-disable */
    /*
    dester builds:
    index.ts
    */
    var r = (r, a, v) => {
        var e = 1;
        a < 0 && (a = -a), r < 0 && (e = -1, r = -r);
        var t = (r += a) % a;
        r -= t + a;
        var u = e > 0 ? t >= a / 2 : t > a / 2;
        return u && (r += a), v && (r += a * v * e, t && e > 0 !== (v < 0 && !u || v > 0 && u) || (r -= (v > 0 ? a : -a) * e)), 
        r && r * e;
    };

    /* eslint-disable @typescript-eslint/explicit-function-return-type */

    const $GRID_COEF_W = bt(10);
    const $GRID_COEF_H = bt(10);
    y([Ut, $t], ([w, h]) => {
      // $GRID_COEF_W.$ = 100 / ceil(100 / ($GRID_COEF_H.$ / w * h))

      $GRID_COEF_W.$ = 100 / round(w / 50);
      $GRID_COEF_H.$ = 100 / round(h / 50);
    });

    const $FOCUSED_ID = bt('');
    const $HOVERED_ID = bt('');

    let Z_INDEX = 1;
    const Z_INDEXES = {};
    const fixZIndexes = (
      lastZindex,
      id
    ) => {
      if (Z_INDEX > 4e9) {
        for (const id in Z_INDEXES) Z_INDEXES[id].$ = 1;
        lastZindex.$ = Z_INDEX = 2;
      } else if (Z_INDEX !== lastZindex.$) {
        lastZindex.$ = ++Z_INDEX;
      }
      $HOVERED_ID.$ = $FOCUSED_ID.$ = id;
    };

    const useClearHoverAndFocusListener = (ctx) =>
      q(ctx.node, 'pointerdown-capture', () => {
        $HOVERED_ID.$ = $FOCUSED_ID.$ = '';
      });

    const title_btn = (
      name,
      onClick
    ) => {
        Ye("button", { type: "button", class: [
          'btn btn-sm btn-primary',
          'p-0 ms-2 lh-1 rounded-pill',
          'd-inline-flex justify-content-center align-items-center'
        ], "style--width": "1.625em", "style--height": "1.625em" }, [B('click', onClick)])(
        Ye("i", { role: "img", "aria-label": name, class: [`bi-${name}`], style: "margin-bottom:-0.0625em;" })()
      );

    };

    const $IS_RESIZE_GRID = bt('');
    const showResizeGrid = (cursor) => { $IS_RESIZE_GRID.$ = cursor; };
    const hideResizeGrid = () => { $IS_RESIZE_GRID.$ = ''; };
    const desktopResizeGrid = ($styleTop$) => {
      const imageColor = 'rgba(128,128,128,0.25)';
      const image = `linear-gradient(to right, ${imageColor} 1px,transparent 1px),linear-gradient(to bottom,${imageColor} 1px,transparent 1px)`
      ;(
          Ye("div", { class: ['position-absolute', 'bottom-0', 'start-0', 'end-0'], style: /*r2.$*/oe([$GRID_COEF_H, $GRID_COEF_W, $IS_RESIZE_GRID, $styleTop$], (_$0) => ({
            zIndex         : 1,
            top            : _$0[3],
            cursor         : _$0[2],
            display        : _$0[2] ? 'block' : 'none',
            backgroundImage: image,
            backgroundSize : `${_$0[1]}% ${_$0[0]}%`
          })) }, [B('contextmenu-prevent-stop', noop)])()

      );
    };

    const setSize = (wh, coef) => 100 / parseFloat(wh) * coef;

    function DesktopWindow(
      
      {
        title,
        top,
        left,
        right,
        bottom
      }





     = {}
    ) {
      const id = this.pub.id = random_string();

      const w = randomTo(30, 60), h = randomTo(30, 60);
      if (top == null) top = randomTo(0, 100 - h);
      if (left == null) left = randomTo(0, 100 - w);
      if (right == null) right = randomTo(0, 100 - w - left);
      if (bottom == null) bottom = randomTo(0, 100 - h - top);
      
      const setTop = (v) =>
        top = r(max(v, 0), $GRID_COEF_H.$);
      const setLeft = (v) =>
        left = r(min(v, 100 - $GRID_COEF_W.$), $GRID_COEF_W.$);
      const setRight = (v) =>
        right = r(min(v, 100 - $GRID_COEF_W.$), $GRID_COEF_W.$);
      const setBottom = (v) =>
        bottom = r(min(v, 100 - $GRID_COEF_H.$), $GRID_COEF_H.$);
      setTop(top), setLeft(left), setRight(right), setBottom(bottom);

      const setHoveredId = () => { $HOVERED_ID.$ = id; };
      const setZIindex = () => { fixZIndexes($zi, id); };
      const $zi = Z_INDEXES[id] = Et(-1);
      ce(() => { delete Z_INDEXES[id]; });
      setZIindex();

      const windowClose = () => { Lt(this); };
      const $isFullscreen = Et(false);
      const toggleFullscreen = () => { $isFullscreen.$ = !$isFullscreen.$; };

      const $fullscreenTitle = Et();
      mt($isFullscreen, (isFullscreen) => {
        $fullscreenTitle.$ = isFullscreen ? 'Восстановить' : 'Развернуть';
      })

      ;(
          Ye("div", { id: id, class: ['card', 'position-absolute'], style: /*r2.$*/oe([$zi, $isFullscreen], (_$0) => ({
            top   : (_$0[1] ? 0 : top) + '%',
            left  : (_$0[1] ? 0 : left) + '%',
            right : (_$0[1] ? 0 : right) + '%',
            bottom: (_$0[1] ? 0 : bottom) + '%',
            
            zIndex: _$0[0],

            minWidth : '4em',
            minHeight: '4em'
          })) }, [B('pointerdown', setZIindex), B('inhover', setHoveredId), B('infocus', setZIindex)])(
        Ye("div", { class: [
              'card-header',
              'd-flex align-items-center',
              'p-1 overflow-hidden user-select-none'
            ], "style--z-index": "1" }, [useDashboardContextmenu(schema2contextmenu([
              { title: $fullscreenTitle, click: toggleFullscreen },,
              { title: 'Закрыть', click: windowClose }
            ]), true)])(
          Ye("div", { class: ['flex-fill', 'text-truncate', 'px-1'], style: "margin-bottom:-0.0625em;" }, [B('dblclick', toggleFullscreen), d((e, ctx) => {
                /* MOVE BY TITLE */
                clearSelection();
                const [typeA, $isFs, setTop, setLeft, setRight, setBottom] = e.detail;

                if (!$isFs.$) {
                  typeA[0] = e.type;
                  const node = ctx.parent.parent.node; 

                  let style;
                  if (e.type === 'start') {
                    setTimeout((typeA) => {
                      if (typeA[0] !== 'end') {
                        showResizeGrid(ctx.node.style.cursor = 'move');
                      }
                    }, 125, typeA);
                    style = getComputedStyle(node);
                  } else {
                    style = node.style;
                  }

                  const t = parseFloat(style.top) + e.delta.y;
                  const l = parseFloat(style.left) + e.delta.x;
                  const r = parseFloat(style.right) - e.delta.x;
                  const b = parseFloat(style.bottom) - e.delta.y;

                  style = node.style;
                  if (e.type === 'end') {
                    hideResizeGrid();
                    ctx.node.style.cursor = '';
                    const pes = getComputedStyle(node.parentElement);
                    style.top = setTop(setSize(pes.height, t)) + '%';
                    style.left = setLeft(setSize(pes.width, l)) + '%';
                    style.right = setRight(setSize(pes.width, r)) + '%';
                    style.bottom = setBottom(setSize(pes.height, b)) + '%';
                  } else {
                    style.top = t + 'px';
                    style.left = l + 'px';
                    style.right = r + 'px';
                    style.bottom = b + 'px';
                  }
                }
              }, [[''], $isFullscreen, setTop, setLeft, setRight, setBottom])])(
            He(/*r2.$*/oe([title], (_$0) => (_$0[0] || id)))
          ),
          Ye("div", { class: "text-nowrap" })(
            Ie((
                title_btn('dash-lg', noop),
                title_btn('plus-lg', toggleFullscreen),
                title_btn('x-lg', windowClose)
              ))
          )
        ),
        Ye("div", { class: ['card-body', 'position-relative'], "style--z-index": "1" })(
          Ye("div", { class: ['position-absolute', 'top-0', 'start-0', 'w-100', 'h-100'], "style--z-index": "1" })(
            Ie("empty")
          ),
          Ye("div", { class: ['position-absolute', 'top-0', 'start-0', 'w-100', 'h-100'], "style--display": /*r2.$*/oe([$FOCUSED_ID], (_$0) => (_$0[0] === id ? 'none' : 'block')), "style--backgroundColor": 'rgba(0,0,0,0.05)', "style--z-index": "1" }, [B('contextmenu-prevent-stop', noop)])()
        ),
        tt(/*r2.$*/oe([$isFullscreen], (_$0) => (!_$0[0])))(() => {
          Ye("div", { style: "position:absolute;z-index:1;top:-0.25em;left:0;width:100%;height:0.5em;cursor:ns-resize;" }, [d((e, ctx) => {
                /* RESIZE TOP */
                clearSelection();

                const node = ctx.parent.parent.node; 
                let style;
                if (e.type === 'start') style = getComputedStyle(node), showResizeGrid('ns-resize');
                else style = node.style;

                const t = parseFloat(style.top) + e.delta.y;

                style = node.style;
                if (e.type === 'end') {
                  hideResizeGrid();
                  const pes = getComputedStyle(node.parentElement);
                  style.top = setTop(setSize(pes.height, t)) + '%';
                } else {
                  style.top = t + 'px';
                }
              }, [setTop])])();
          Ye("div", { style: "position:absolute;z-index:1;bottom:-0.25em;left:0;width:100%;height:0.5em;cursor:ns-resize;" }, [d((e, ctx) => {
                /* RESIZE BOTTOM */
                clearSelection();

                const node = ctx.parent.parent.node; 
                let style;
                if (e.type === 'start') style = getComputedStyle(node), showResizeGrid('ns-resize');
                else style = node.style;

                const b = parseFloat(style.bottom) - e.delta.y;

                style = node.style;
                if (e.type === 'end') {
                  hideResizeGrid();
                  const [setBottom] = e.detail;
                  const pes = getComputedStyle(node.parentElement);
                  style.bottom = setBottom(setSize(pes.height, b)) + '%';
                } else {
                  style.bottom = b + 'px';
                }
              }, [setBottom])])();
          Ye("div", { style: "position:absolute;z-index:1;top:0;left:-0.25em;width:0.5em;height:100%;cursor:ew-resize;" }, [d((e, ctx) => {
                /* RESIZE LEFT */
                clearSelection();

                const node = ctx.parent.parent.node; 
                let style;
                if (e.type === 'start') style = getComputedStyle(node), showResizeGrid('ew-resize');
                else style = node.style;

                const l = parseFloat(style.left) + e.delta.x;

                style = node.style;
                if (e.type === 'end') {
                  hideResizeGrid();
                  const [setLeft] = e.detail;
                  const pes = getComputedStyle(node.parentElement);
                  style.left = setLeft(setSize(pes.width, l)) + '%';
                } else {
                  style.left = l + 'px';
                }
              }, [setLeft])])();
          Ye("div", { style: "position:absolute;z-index:1;top:0;right:-0.25em;width:0.5em;height:100%;cursor:ew-resize;" }, [d((e, ctx) => {
                /* RESIZE RIGHT */
                clearSelection();

                const node = ctx.parent.parent.node; 
                let style;
                if (e.type === 'start') style = getComputedStyle(node), showResizeGrid('ew-resize');
                else style = node.style;

                const r = parseFloat(style.right) - e.delta.x;

                style = node.style;
                if (e.type === 'end') {
                  hideResizeGrid();
                  const [setRight] = e.detail;
                  const pes = getComputedStyle(node.parentElement);
                  style.right = setRight(setSize(pes.width, r)) + '%';
                } else {
                  style.right = r + 'px';
                }
              }, [setRight])])();
          Ye("div", { style: "position:absolute;z-index:1;top:-0.375em;left:-0.375em;width:0.75em;height:0.75em;cursor:nw-resize;" }, [d((e, ctx) => {
                /* RESIZE TOP-LEFT */
                clearSelection();

                const node = ctx.parent.parent.node; 
                let style;
                if (e.type === 'start') style = getComputedStyle(node), showResizeGrid('nw-resize');
                else style = node.style;

                const t = parseFloat(style.top) + e.delta.y;
                const l = parseFloat(style.left) + e.delta.x;

                style = node.style;
                if (e.type === 'end') {
                  hideResizeGrid();
                  const [setTop, setLeft] = e.detail;
                  const pes = getComputedStyle(node.parentElement);
                  style.top = setTop(setSize(pes.height, t)) + '%';
                  style.left = setLeft(setSize(pes.width, l)) + '%';
                } else {
                  style.top = t + 'px';
                  style.left = l + 'px';
                }
              }, [setTop, setLeft])])();
          Ye("div", { style: "position:absolute;z-index:1;top:-0.375em;right:-0.375em;width:0.75em;height:0.75em;cursor:ne-resize;" }, [d((e, ctx) => {
                /* RESIZE TOP-RIGHT */
                clearSelection();

                const node = ctx.parent.parent.node; 
                let style;
                if (e.type === 'start') style = getComputedStyle(node), showResizeGrid('ne-resize');
                else style = node.style;

                const t = parseFloat(style.top) + e.delta.y;
                const r = parseFloat(style.right) - e.delta.x;

                style = node.style;
                if (e.type === 'end') {
                  hideResizeGrid();
                  const [setTop, setRight] = e.detail;
                  const pes = getComputedStyle(node.parentElement);
                  style.top = setTop(setSize(pes.height, t)) + '%';
                  style.right = setRight(setSize(pes.width, r)) + '%';
                } else {
                  style.top = t + 'px';
                  style.right = r + 'px';
                }
              }, [setTop, setRight])])();
          Ye("div", { style: "position:absolute;z-index:1;bottom:-0.375em;left:-0.375em;width:0.75em;height:0.75em;cursor:sw-resize;" }, [d((e, ctx) => {
                /* RESIZE BOTTOM-LEFT */
                clearSelection();

                const node = ctx.parent.parent.node; 
                let style;
                if (e.type === 'start') style = getComputedStyle(node), showResizeGrid('sw-resize');
                else style = node.style;

                const b = parseFloat(style.bottom) - e.delta.y;
                const l = parseFloat(style.left) + e.delta.x;

                style = node.style;
                if (e.type === 'end') {
                  hideResizeGrid();
                  const [setBottom, setLeft] = e.detail;
                  const pes = getComputedStyle(node.parentElement);
                  style.bottom = setBottom(setSize(pes.height, b)) + '%';
                  style.left = setLeft(setSize(pes.width, l)) + '%';
                } else {
                  style.bottom = b + 'px';
                  style.left = l + 'px';
                }
              }, [setBottom, setLeft])])();
          Ye("div", { style: "position:absolute;z-index:1;bottom:-0.375em;right:-0.375em;width:0.75em;height:0.75em;cursor:se-resize;" }, [d((e, ctx) => {
                /* RESIZE BOTTOM-RIGHT */
                clearSelection();

                const node = ctx.parent.parent.node; 
                let style;
                if (e.type === 'start') style = getComputedStyle(node), showResizeGrid('se-resize');
                else style = node.style;

                const b = parseFloat(style.bottom) - e.delta.y;
                const r = parseFloat(style.right) - e.delta.x;

                style = node.style;
                if (e.type === 'end') {
                  hideResizeGrid();
                  const [setBottom, setRight] = e.detail;
                  const pes = getComputedStyle(node.parentElement);
                  style.bottom = setBottom(setSize(pes.height, b)) + '%';
                  style.right = setRight(setSize(pes.width, r)) + '%';
                } else {
                  style.bottom = b + 'px';
                  style.right = r + 'px';
                }
              }, [setBottom, setRight])])();
        })
      )

      );
    }

    /* eslint-disable @typescript-eslint/explicit-function-return-type */

    const SCHEMA_CONTEXTMENU = [
      { title: 'Создать файл', click: () => {} },
      { title: 'Создать папку', click: () => {} },,

      { title: 'Настройки', click: () => {} },,

      {
        title: '__Создать пустое окно__',
        click: (ctx) => {
          de(ctx, () => {
              qe(DesktopWindow)([]);

          }, []);
        }
      },
    ];

    const contextmenu = schema2contextmenu(SCHEMA_CONTEXTMENU);

    function DashboardDesktop(
      
    ) {
      const styleTop = '2em'
      ;(
          Ye("div", { class: ['position-absolute', 'bottom-0', 'start-0', 'end-0'], "style--z-index": "1", "style--top": styleTop }, [useDashboardContextmenu(contextmenu), useClearHoverAndFocusListener])(
        qe(DesktopWindow)([])
      )

      );
      desktopResizeGrid(styleTop);
    }

    var createCssGragient = () => {
      const res = [];
      for (let a, i = 20; i-- > 0;) {
        a = [random() * 99, random() * 99, random() * 99].sort((a, b) => a - b);
        res.push(`linear-gradient(${
      randomTo(-360, 360)
    }deg, transparent ${a[0]}%, hsl(${
      randomTo(240, 420)
    },100%,60%) ${a[1]}%, transparent ${a[2]}%)`);
      }

      return '' + res
    };

    /* eslint-disable @typescript-eslint/explicit-function-return-type */

    function DashboardTopbar(
      
    ) {
        Ye("div", { class: ['position-absolute', 'w-100', 'top-0', 'left-0'], "style--z-index": "1", "style--height": '2em', "style--backgroundColor": 'rgba(0,0,0,0.5)' }, [useDashboardContextmenu(() => {
                Qe()(
            Ie("TopBarContextMenu")
          );

        })])(
      );

    }

    function Dashboard(
      
    ) {
        Ye("div", { class: ['position-fixed', 'w-100', 'h-100', 'top-0', 'start-0'] })(
        Ye("div", { style: 'position:absolute;top:-20px;bottom:-20px;left:-20px;right:-20px;', "style--backgroundColor": 'hsl(0,80%,60%)', "style--backgroundImage": createCssGragient(), "style--filter": 'blur(10px)' })(),
        qe(DashboardTopbar)([]),
        qe(DashboardDesktop)([]),
        qe(DashboardContextmenu)([])
      );

    }

    /* eslint-disable @typescript-eslint/explicit-function-return-type */

    function App(
      
    ) {
        qe(Dashboard)([]);

    }

    console.log(rease);

    gt(App, {
      target: document.body,

      beforeCreated: () => {
        console.time('ReaseApp');
      },
      onCreated: () => {
        console.timeEnd('ReaseApp');
      }
    });

})();
