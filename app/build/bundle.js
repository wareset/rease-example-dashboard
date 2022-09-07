
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
    }, t = "undefined" != typeof window, r$1 = {}, n$1 = e => e && e._ && e._.ir === r$1, s = Array.isArray, a$1 = e => "function" == typeof e, o = e => null != e && a$1(e.then), i$1 = e => null != e && a$1(e.subscribe), l = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/, h = e => l.test(e), u = Object, c = u.defineProperty, f = u.getPrototypeOf, d = u.getOwnPropertyDescriptor, v = () => {}, p = () => v, g = e => e, _ = (e, t, r) => {
        e.then((e => {
            b(e, t, r);
        }));
    }, b = (e, t, r) => {
        o(e) ? e.then((e => {
            b(e, t, r);
        })) : t(e, r);
    }, m = (e, t, r) => {
        if (e.length) for (var n = [], s = [ e.length ], a = s[0]; a-- > 0; ) b(e[a], N, [ n, a, s, t, r ]); else t([], r);
    }, E = e => {
        var t, r = !1, n = [];
        return e((e => {
            b(e, (e => {
                r = !0, t = e;
                for (var s = 0; s < n.length; s++) n[s][0](n[s][1](t));
            }));
        })), {
            then: e => E((s => {
                r ? s(e(t)) : n.push([ s, e ]);
            }))
        };
    }, N = (e, t) => {
        t[0][t[1]] = e, --t[2][0] || t[3](t[0], t[4]);
    }, T = (e, t, r) => {
        var n = () => {
            t = v;
        }, s = [], a = e.subscribe((e => {
            if (s.push(e), 1 === s.length) {
                for (var a = 0; a < s.length; a++) t(s[a], r, n);
                s = [];
            }
        }));
        return n = () => {
            t = v, a && (a.unsubscribe ? a.unsubscribe() : a()), a = null;
        }, t === v && n(), n;
    }, w = (e, t, r) => {
        var n = v, s = v, a = () => {
            t = v, n(), s();
        };
        return s = T(e, ((e, o, i) => {
            s = i, n(), n = k(e, ((e, s, o) => {
                n = o, t(e, r, a);
            }));
        })), a;
    }, k = (e, t, r) => {
        if (o(e)) e = y(e); else if (!i$1(e)) return t(e, r, v), v;
        return w(e, t, r);
    }, L = (e, t, r) => T(R(e), t, r), y = e => ({
        subscribe: (t, r) => {
            var n = () => {
                t = v;
            };
            return _(e, (e => {
                t(e, r, n);
            })), n;
        }
    }), R = e => ({
        subscribe: (t, r) => {
            e = e.slice();
            for (var n = [], s = {}, a = [ 0 ], o = () => {
                for (var e in s) s[e]();
            }, i = e.length, l = 0; l < i; l++) s[l] = k(e[l], M, [ l, i, n, s, a, [ !1 ], t, r, o ]);
            return o;
        }
    }), S = (e, t) => ({
        subscribe: (r, n) => {
            var s = v, a = v, o = () => {
                r = v, s(), a();
            };
            return a = T(R(e), ((e, i, l) => {
                a = l, s(), s = k(t(e), ((e, t, a) => {
                    s = a, r(e, n, o);
                }));
            })), o;
        }
    }), M = (e, [t, r, n, s, a, o, i, l, h], u) => {
        n[t] = e, s[t] = u, (a[0] === r || o[0] !== (o[0] = !0) && ++a[0] === r) && i(n.slice(0), l, h);
    }, A = /^style--/, O = /^class--/, C = e => e, H = e => {
        switch (typeof e) {
          case "string":
            return e;

          case "object":
            var t = "", r = "";
            if (s(e)) for (var n, a = 0; a < e.length; a++) (n = H(e[a])) && (t += r + n, r = " "); else if (e) for (var o in e) e[o] && (t += r + o, 
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
            if (s(e)) for (var r, n = 0; n < e.length; n++) (r = $(e[n])) && (t += r + (";" === r[r.length - 1] ? "" : ";")); else if (e) for (var a in e) null != e[a] && (t += U(a) + ":" + e[a] + ";");
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
    W) : A.test(e) ? (t.as || (t.as = {}), P) : x, X = {}, D = (e, t, r) => (X[e] || (X[e] = {}))[t] || (X[e][t] = d(f(r), t) || {}), q = (() => {
        if (!t) return p;
        var e = document, r = setTimeout, n = clearTimeout, a = (e, t, r, n) => (e.addEventListener(t, r, n), 
        () => {
            e.removeEventListener(t, r, n);
        }), o = e => {
            e.cancelable && e.preventDefault();
        }, i = e => {
            e.stopPropagation();
        }, l = (e, t) => function(r) {
            for (var n = 0; n < e.length; n++) e[n].call(this, r, t);
        }, h = (e, t) => function(r) {
            r.target === e && t.call(this, r);
        }, u = e => function(t) {
            t.isTrusted && e.call(this, t);
        }, f = (e, t, r) => function(n) {
            ((e, t) => {
                var r = t;
                for (var n in _) {
                    if (!(_[n][0] in e) && !(_[n][1] in e)) return !1;
                    r--;
                }
                return !r;
            })(t, r) && e.call(this, n);
        }, d = [], g = [], _ = {}, b = () => {
            b = v, a(e, "keyup", (t => {
                for (var r = 0; r < d.length; r++) d[r][0].length ? d[r][1].call(e, t) : d.splice(r--, 1);
                delete _[t.code + t.key];
            }), !1), a(e, "keydown", (t => {
                _[t.code + t.key] = [ t.code, t.key ];
                for (var r = 0; r < g.length; r++) g[r][0].length ? g[r][1].call(e, t) : g.splice(r--, 1);
            }), !1);
        }, m = (t, r, n, s) => {
            var a = e.createEvent("CustomEvent");
            return a.initCustomEvent(t, r, n, s), a;
        }, E = (e, t) => {
            e.dispatchEvent(t);
        }, N = 0, T = () => {
            N--;
        }, w = 0, k = () => {
            w--;
        }, L = 0, y = () => {
            L--;
        }, R = e.head, S = R, M = R, A = R, O = (e, t) => e.contains(t), C = (e, t) => function(r) {
            (M === e || O(e, M)) && t.call(this, r);
        }, H = (e, t) => function(r) {
            (A === e || O(e, A)) && t.call(this, r);
        }, I = (e, t) => function(r) {
            M !== e && !O(e, M) && t.call(this, r);
        }, U = (e, t) => function(r) {
            A !== e && !O(e, A) && t.call(this, r);
        }, $ = 0, F = (e, t) => ($++, function(r) {
            R !== e && !O(e, R) && t.call(e, r);
        }), G = () => {
            $--;
        }, j = 0, W = (e, t) => (j++, function(r) {
            S !== e && !O(e, S) && t.call(e, r);
        }), P = () => {
            j--;
        }, x = 0, z = (e, t) => (x++, function(r) {
            M !== e && !O(e, M) && t.call(e, r);
        }), X = () => {
            x--;
        }, D = 0, q = (e, t) => (D++, function(r) {
            A !== e && !O(e, A) && t.call(e, r);
        }), B = () => {
            D--;
        }, Y = "tapstart tapmove tapend inhover infocus unhover unfocus".split(" "), [Z, J, K, Q, V, ee, te] = Y, re = !1, ne = () => {
            ne = v;
            try {
                a(window, "test", v, c({}, "passive", {
                    get: () => !(re = !0)
                }));
            } catch (e2) {}
            var t, s, o, i = (e, t) => {
                var r;
                R = M, S = A, M = e.target, A = t === Z ? M : A, R !== M && (r = {
                    event: e
                }, x && E(R, m(ee, !0, !1, r)), $ && E(M, m(Q, !0, !1, r))), S !== A && (r = {
                    event: e
                }, D && E(S, m(te, !0, !1, r)), j && E(A, m(V, !0, !1, r)));
            }, l = (e, t) => {
                var r = e.target;
                switch (t) {
                  case Z:
                    N && E(r, m(Z, !0, !0, {
                        event: e
                    }));
                    break;

                  case J:
                    w && E(r, m(J, !0, !0, {
                        event: e
                    }));
                    break;

                  case K:
                    L && E(r, m(K, !0, !0, {
                        event: e
                    }));
                }
            }, h = () => {
                t = !1;
            }, u = (e, r) => {
                e.touches.length < 2 && (t = !0, l(e, r));
            }, f = (e, a) => {
                t ? (n(s), s = r(h)) : l(e, a);
            };
            for (var d in o = "onpointermove" in e ? {
                pointerdown: e => {
                    i(e, Z);
                },
                pointermove: e => {
                    i(e, J);
                },
                pointerup: e => {
                    i(e, K);
                },
                pointercancel: e => {
                    i(e, K);
                },
                touchstart: e => {
                    u(e, Z);
                },
                touchmove: e => {
                    u(e, J);
                },
                touchend: e => {
                    u(e, K);
                },
                touchcancel: e => {
                    u(e, K);
                },
                mousedown: e => {
                    f(e, Z);
                },
                mousemove: e => {
                    f(e, J);
                },
                mouseup: e => {
                    f(e, K);
                }
            } : {
                touchstart: e => {
                    i(e, Z), u(e, Z);
                },
                touchmove: e => {
                    i(e, J), u(e, J);
                },
                touchend: e => {
                    i(e, K), u(e, K);
                },
                touchcancel: e => {
                    i(e, K), u(e, K);
                },
                mousedown: e => {
                    i(e, Z), f(e, Z);
                },
                mousemove: e => {
                    i(e, J), f(e, J);
                },
                mouseup: e => {
                    i(e, K), f(e, K);
                }
            }) a(e, d, o[d], !0);
        };
        return (e, t, r, n) => {
            for (var c, v, p = s(r) ? r.slice() : [ r ], _ = l(p, n), m = {}, E = 0, R = [], S = () => {
                for (p.length = 0; R.length; ) R.pop()();
            }, M = !1, A = !1, O = !1, $ = !1, j = t.split(/[^a-z\d]+/i), x = j.length; x--; ) if (v = j[x]) switch (v) {
              case "once":
                p.push(S);
                break;

              case "strict":
                O = !0;
                break;

              case "keysup":
                $ = !0;
                break;

              case "passive":
                M = !0;
                break;

              case "capture":
                A = !0;
                break;

              case "self":
                _ = h(e, _);
                break;

              case "trusted":
                _ = u(_);
                break;

              case "stop":
                p.unshift(i);
                break;

              case "prevent":
                p.unshift(o);
                break;

              case "inhovered":
                _ = C(e, _);
                break;

              case "infocused":
                _ = H(e, _);
                break;

              case "unhovered":
                _ = I(e, _);
                break;

              case "unfocused":
                _ = U(e, _);
                break;

              default:
                if (1 === v.length || /[A-Z]/.test(v[0])) v in m || (m[v] = !0, E++); else if (!x) switch (c = v) {
                  case Q:
                    _ = F(e, _), R.push(G);
                    break;

                  case V:
                    _ = W(e, _), R.push(P);
                    break;

                  case ee:
                    _ = z(e, _), R.push(X);
                    break;

                  case te:
                    _ = q(e, _), R.push(B);
                }
            }
            if (ne(), (E || O) && (b(), _ = f(_, m, E)), c) {
                switch (c) {
                  case Z:
                    N++, R.push(T);
                    break;

                  case J:
                    w++, R.push(k);
                    break;

                  case K:
                    L++, R.push(y);
                }
                var D = re ? {
                    passive: M,
                    capture: A
                } : A;
                R.push(a(e, c, _, D));
            } else ($ ? d : g).push([ p, _ ]);
            return S;
        };
    })(), B = (e, t) => r => q(r.node, e, t, r), Y = (() => {
        if (!t) return p;
        var e, r = "__REASE_RESIZE", n = setTimeout, s = clearTimeout, a = t => {
            for (var n, s, a, o, i = 0; i < t.length; i++) if ((s = (n = t[i].target)[r]) && s.l.length) {
                if (a = n.offsetWidth || n.clientWidth, o = n.offsetHeight || n.clientHeight, s.w !== a || s.h !== o) {
                    s.w = a, s.h = o;
                    for (var l, h = {
                        width: a,
                        height: o,
                        target: n
                    }, u = s.l, c = 0; c < u.length; c++) {
                        l = u[c];
                        for (var f = 1; f < l.length; f++) l[f].call(n, h, l[0]);
                        l.length || u.splice(c--, 1);
                    }
                    s.l.length || e.unobserve(n);
                }
            } else e.unobserve(n);
        }, o = () => {
            o = v;
            try {
                e = new ResizeObserver(a);
            } catch (e3) {
                var t, i = [], l = () => {
                    s(t), a(i), i.length && (t = n(l, 25));
                };
                e = {
                    observe: e => {
                        i.push({
                            target: e
                        }), n(l);
                    },
                    unobserve: e => {
                        n((e => {
                            var t = e[r];
                            if (!t || !t.l.length) for (var n = i.length; n--; ) if (i[n].target === e) {
                                i.splice(n, 1);
                                break;
                            }
                        }), 1, e);
                    }
                }, document.addEventListener("visibilitychange", (() => {
                    document.hidden ? s(t) : l();
                }), !1);
            }
        };
        return (t, s, a) => {
            o();
            var i = [ a ].concat(s), l = t[r] || (t[r] = {
                l: []
            });
            l.l.push(i), 1 === l.l.length && e.observe(t);
            var h = n((() => {
                var e = t.offsetWidth || t.clientWidth, r = t.offsetHeight || t.clientHeight, n = {
                    width: e,
                    height: r,
                    target: t
                };
                l.w = e, l.h = r;
                for (var s = 1; s < i.length; s++) i[s].call(t, n, i[0]);
            }));
            return i.push((() => {
                clearTimeout(h), i.pop();
            })), () => {
                i.length = 0, !l.l[1] && (!l.l[0] || l.l[0] === i) && e.unobserve(t);
            };
        };
    })(), Z = e => t => Y(t.node, e, t), J = (e, t, r) => {
        e._value = t;
        var n = e._;
        n.break = !0;
        var s, o, i, l = n.items, h = n.queue;
        if (h.push({
            f: r,
            n: t
        }), 1 === h.length) {
            for (var u, c = 0; c < h.length; c++) if ((u = h[c].f) || c > h.length - 2) {
                n.break = !1;
                for (var f = h[c], d = 0; d < l.length; d++) if ((u || (s = l[d].o, o = f.n, i = void 0, 
                !((e, t) => e == e ? e === t : t != t)(s, o) || null != (i = o) && "object" == typeof i || a$1(o))) && l[d].s(e._value = l[d].o = f.n), 
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

    var te, re, ne, se = e => e instanceof ReaseSubject, ae = S, oe = {
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
    }, ie = e => {
        ne = e, te = e.high, re = e.home;
    }, le = e => {
        ne = e.parent;
    }, he = () => {
        ne = null;
    };

    function ue(e) {
        var t = n$1(this) ? this : ne;
        if (!n$1(t)) throw e;
        if (t.type !== oe.COMPONENT) throw e;
        t.on ? (t._.oc || (t._.oc = [])).push(e) : e(t);
    }

    function ce(e) {
        var t = n$1(this) ? this : ne;
        if (!n$1(t)) throw e;
        t.on ? (t._.od || (t._.od = [])).push(e) : e(t);
    }

    var fe, de = (e, t, r) => {
        if (!n$1(e)) throw e;
        var s = ne, a = te, o = re;
        ie(e), e.type === oe.COMPONENT && (te = re = e);
        var i = t.apply(e, r);
        return ne = s, te = a, re = o, i;
    }, ve = () => ne, pe = e => {
        if (e._.esu) for (var t, r = e._.esu; r.length; ) (t = r.pop()) && a$1(t = t.destroy || t) && (ie(e), 
        t(e));
    }, ge = {
        3: [],
        8: []
    }, _e = /^(?:audio|bgsound|source|track|video|dialog|link|meta|style|applet|embed|noembed|object|param|canvas|noscript|script|button|datalist|fieldset|form|input|keygen|label|legend|meter|optgroup|option|output|progress|select|textarea|frame|frameset|iframe|noframes)$/i, be = (e, t) => {
        var r = e.nodeType;
        if (3 === r || 8 === r) ge[r].length < t && ge[r].push(e); else if (1 === r && !_e.test(e.localName) && ((r = e.localName + e.namespaceURI) in ge || (ge[r] = []), 
        ge[r].length < t)) {
            for (var n = e.childNodes, s = n.length; s-- > 0; ) e.removeChild(n[s]);
            e.value && (e.value = null), e.type && (e.type = null), ge[r].push(e);
        }
    }, me = e => {
        if (e._.od) for (;e._.od.length; ) e._.od.pop()(e);
    }, Ee = e => {
        if (e && e.on) {
            e.on = !1, pe(e), me(e), Le(e), e._.ods && e._.ods();
            var t = e.node;
            t && t.parentNode && t.parentNode.removeChild(t), Ne(e), t && be(t, 25), e._.$ && (e._.$ = 1, 
            Ce(e));
        }
    }, Ne = e => {
        for (;e.children.length; ) Ee(e.children.pop());
    }, Te = (e, t) => {
        e._.ods = t, e.on || e._.ods();
    }, we = e => t => {
        if (t.root.node) for (var r, n, s = t; ;) if (r = (s = s.parent).node) {
            1 === r.nodeType ? (e(t, r), r.appendChild(t.node)) : (e(t, r = (n = r).parentNode), 
            r.insertBefore(t.node, n));
            break;
        }
    }, ke = e => {
        var t, r, n, s = e.attrs;
        for (var a in e.props) if (r = s[a] = {
            is: null,
            _is: t = e.props[a],
            high: e.high,
            _: {
                $: 0,
                u: v
            }
        }, i$1(t) || o(t) && (t = y(t), 1)) {
            if (Oe(r), r._.u = w(t, ((e, [t, r, n, s], a) => {
                r._.u = a, t.on ? r.is !== (r.is = e = s[1](e)) && t.node && s[0](t.node, n, e, t) : a(), 
                Ce(r);
            }), [ e, r, a, z(a, e._) ]), !e.on) {
                r._.u();
                break;
            }
        } else n = z(a, e._), r.is = t = n[1](t), e.node && n[0](e.node, a, t, e);
    }, Le = e => {
        var t = e.attrs;
        if (t) {
            e.attrs = null;
            var r = e.node;
            for (var n in t) r && (r.hasAttribute(n) ? r.removeAttribute(n) : n in r && (r[n] = null)), 
            t[n]._.u(), Ce(t[n]);
        }
    }, ye = (fe = we(((t, r) => {
        var n = e[t.is] || r.namespaceURI, s = t.is + n, a = s in ge && ge[s].pop();
        if (a) for (var o = a.attributes, i = o.length; i-- > 0; ) a.removeAttribute(o[i].name); else a = document.createElementNS(n, t.is);
        t.node = a, (e => {
            if (e.use) for (var t = e._.esu || (e._.esu = []), r = 0; r < e.use.length; r++) if (ie(e), 
            t.push(e.use[r](e)), !e.on) {
                pe(e);
                break;
            }
        })(t), ke(t), ie(t);
    })), e => {
        e.attrs = {}, fe(e), e.node || ke(e);
    }), Re = we((e => {
        ge[3].length ? (e.node = ge[3].pop()).data = "" : e.node = document.createTextNode("");
    })), Se = we((e => {
        ge[3].length ? (e.node = ge[3].pop()).data = e.is : e.node = document.createTextNode(e.is);
    })), Me = we((e => {
        ge[8].length ? (e.node = ge[8].pop()).data = e.is : e.node = document.createComment(e.is);
    })), Ae = (e, t, n, s, a, o) => ne = ne.children[ne.children.push({
        type: e,
        name: o,
        is: n,
        _is: t,
        node: null,
        props: s,
        use: a,
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
        if (e && e._.$ > 0) if (e._.$--, e.type !== oe.COMPONENT && e.type !== oe.ROOT) Ce(e.high); else if (0 === e._.$) {
            e._.$ = NaN;
            var t = e._.oc;
            if (t) {
                for (var r = [], n = 0; n < t.length && (ie(e), r.push(t[n](e)), e.on); n++) ;
                he(), m(r, ((e, t) => {
                    if (t.on) {
                        for (var r = e.length; r--; ) a$1(e[r]) && ce(e[r]);
                        Ce(t.high);
                    } else for (var n = e.length; n--; ) a$1(e[n]) && (ie(t), e[n](t));
                    he();
                }), e);
            } else Ce(e.high);
        }
    }, He = e => {
        if (ne.on && void 0 !== e && "" !== e) {
            var t = Ae(oe.EXPRESSION, e, "");
            Se(t), Oe(t), Te(t, k(e, ((e, t, r) => {
                t.on ? (Ne(t), a$1(e) && (ie(t), e = e.call(t), he()), e = void 0 === e ? "" : "" + e, 
                t.is !== (t.is = e) && t.node && (t.node.data = e)) : r(), Ce(t);
            }), t)), le(t);
        }
    }, Ie = e => {
        ne.on && void 0 !== e && "" !== e && (Se(Ae(oe.TEXT, e, "" + e)), le(ne));
    }, Ue = e => {
        if (ne.on && void 0 !== e && "" !== e) {
            var t = Ae(oe.COMMENT, e, "");
            Me(t), Oe(t), Te(t, k(e, ((e, t, r) => {
                t.on ? (e = void 0 === e ? "" : "" + e, t.is !== (t.is = e) && t.node && (t.node.data = e)) : r(), 
                Ce(t);
            }), t)), le(t);
        }
    }, $e = {}, Fe = (e, t) => {
        if (ne.on) {
            var r = Ae(oe.HTML, e, "");
            Re(r), Oe(r), Te(r, k(e, ((e, [t, r, n], s) => {
                if (t.on) {
                    if (e = void 0 === e ? "" : "" + e, t.is !== (t.is = e) && t.node) {
                        for (var a; r.length; ) (a = r.pop()).parentNode.removeChild(a);
                        if (e) {
                            var o = t.node.parentNode, i = o.namespaceURI;
                            ($e[i] || ($e[i] = document.createElementNS(i, "div"))).innerHTML = n ? n.createHTML(e) : e;
                            for (var l = $e[i].childNodes, h = 0; h < l.length; h++) r.push(a = l[h]), o.insertBefore(a, t.node);
                        }
                    }
                } else s();
                Ce(t);
            }), [ r, r._.html = [], t ])), le(r);
        }
    }, Ge = (e, t) => {
        for (var r, n = e.children, s = 0; s < n.length; s++) {
            if (!(r = n[s]).node || 1 !== r.node.nodeType) if (r.type === oe.HTML) for (;r._.html.length; ) t.appendChild(r._.html[0]); else Ge(r, t);
            r.node && t.appendChild(r.node);
        }
    }, je = e => e[1](), We = t => {
        var r = ne;
        r.slots = t, Oe(r), Te(r, k(r._is, ((t, r, n) => {
            if (r.on) {
                if (r.is !== (r.is = t)) {
                    switch (typeof t) {
                      case "function":
                        Ne(r), ie(r), qe(t, r.props, r.use)(r.slots);
                        break;

                      case "string":
                        if ("r-slot" === t) Ne(r), ie(r), ze(r._.sn, r.props, r.use)((() => {
                            r.slots.forEach(je);
                        })); else {
                            var s = r.children[0], a = h(t), o = !s || s.type !== oe.ELEMENT && s.type !== oe.FRAGMENT || a || t in e, i = !!r.root.node;
                            if ("r-fragment" === t) {
                                if (o) Ne(r), ie(r), Qe(r.props, r.use)(r.slots.forEach(je)); else if (pe(s), me(s), 
                                Le(s), s.type = oe.FRAGMENT, s.is = null, i) {
                                    var l = s.node, u = l.parentNode;
                                    u.removeChild(l), Re(s);
                                    for (var c = s.node, f = l.childNodes, d = f.length; d-- > 0; ) u.insertBefore(f[d], c), 
                                    c = f[d];
                                }
                            } else if (o || s && (s.is in e || h(s.is))) Ne(r), ie(r), Ye(t, r.props, r.use)(a || r.slots.forEach(je)); else {
                                pe(s), me(s), Le(s);
                                var v = s.type;
                                if (s.type = oe.ELEMENT, s.is = t, i) {
                                    var p = s.node;
                                    if (p.parentNode.removeChild(p), ye(s), v !== oe.FRAGMENT) for (var g = p.childNodes; g.length; ) s.node.appendChild(g[0]); else Ge(s, s.node);
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
    }, Pe = (e, t, r, n) => ne.on ? (Re(Ae(oe.RULES.TAG, e, null, t || {}, r)), ne._.sn = n, 
    We) : v, xe = e => {
        for (var t = ne, r = t.home.slots, n = 0; n < r.length && (r[n][0] !== t._is || (ne = t, 
        te = t.high, re = t.home.home, t.is = !0, r[n][1](), t.on)); n++) ;
        t.is ? (te = t.high, re = t.home) : e && e.call(t), le(t);
    }, ze = (e, t, r) => ne.on ? (Re(Ae(oe.SLOT, e, !1, t, r, e)), xe) : v, Xe = (e, t) => {
        t && !(t[1] in e.css) && (a$1(t[0]) && (t[0] = t[0]("." + t[1])), e.css[t[1]] = "", 
        e._.$++, e._.od.push(k(t[0], ((e, [t, r, n, s, a], o) => {
            if (t.on) {
                if (n[0] !== (n[0] = e) && (t.css[r] = e, t.node)) {
                    var i = s[0] || (s[0] = document.getElementById(r) || (e => {
                        var t = document.createElement("style");
                        return t.id = e, document.head.appendChild(t), t;
                    })(r));
                    i.textContent !== e && (i.textContent = e);
                }
            } else o();
            a[0] && (a[0] = !1, Ce(t));
        }), [ e, t[1], [ "" ], [ null ], [ !0 ] ])));
    }, De = e => {
        var t = ne;
        t.slots = e, Oe(t), te = re = t, t.is.call(t, t.props), Ce(t), te = t.high, re = t.home, 
        le(t);
    }, qe = (e, t, r) => ne.on ? (Ae(oe.COMPONENT, e, e, t || {}, r, e.name), Xe(ne.root, e.css), 
    De) : v, Be = () => {
        var e = ne;
        (e => {
            if (e._.esu) for (var t, r = e._.esu, n = 0; n < r.length; n++) if ((t = r[n]) && a$1(t = t.created) && (ie(e), 
            t(e), !e.on)) {
                pe(e);
                break;
            }
        })(e), le(e);
    }, Ye = (e, t, r) => ne.on ? (ye(Ae(oe.ELEMENT, e, e, t || {}, r)), Be) : v, Ze = e => {
        e.call(ne);
    }, Je = (e, t, r, n) => {
        var s = v;
        if (ne.on) {
            var a = Ae(oe.ELEMENT_DYNAMIC, n, e, t || {}, r);
            Oe(a), Te(a, k(n, ((e, [t, r], n) => {
                if (t.on) if (t.is !== (e || (e = r)) && t.node) {
                    pe(t), me(t), Le(t), t.is = e;
                    var s = t.node;
                    s.parentNode.removeChild(s), ye(t);
                    for (var a = s.childNodes; a.length; ) t.node.appendChild(a[0]);
                    Be();
                } else t.is = e; else n();
                Ce(t);
            }), [ a, e ])), a.on && (ie(a), ye(a), s = Be);
        }
        return s;
    }, Ke = () => {
        le(ne);
    }, Qe = (e, t) => ne.on ? (Re(Ae(oe.FRAGMENT, null, null, e, t)), Ke) : v, Ve = (e, t) => t > 0 ? !e : e, et = e => {
        var t = ne;
        Oe(t), Te(t, T(R(t.parent._.if), ((e, [t, r, n], s) => {
            t.on ? t.is !== (t.is = e.every(Ve)) && (t.is ? (ie(t), r.call(t, e[n]), he()) : (me(t), 
            Ne(t))) : s(), Ce(t);
        }), [ t, e || v, t.parent._.if.length - 1 ])), le(t);
    }, tt = (e, t, r) => ne.on ? (Re(Ae(oe.RULES.IF, e, !1, t, r)), ne.parent._.if = [ e ], 
    et) : v, rt = (e, t, r) => ne.on ? (Re(Ae(oe.RULES.ELIF, e, !1, t, r)), ne.parent._.if = [ e, ...ne.parent._.if || [ !0 ] ], 
    et) : v, nt = (e, t) => ne.on ? (Re(Ae(oe.RULES.ELSE, null, !1, e, t)), ne.parent._.if = [ !0, ...ne.parent._.if || [ !0 ] ], 
    et) : v, st = e => {
        var t = ne;
        Oe(t), Te(t, k(t._is, ((e, [t, r], n) => {
            t.on ? (me(t), Ne(t), ie(t), r.call(t, t.is = e), he()) : n(), Ce(t);
        }), [ t, e || v ])), le(t);
    }, at = (e, t, r) => ne.on ? (Re(Ae(oe.RULES.WATCH, e, void 0, t, r)), st) : v, ot = e => {
        var t = ne, r = [ !0 ];
        Te(t, k(t._is, ((e, [t, r], n) => {
            r[0] = !1, t.is = t.parent._.await = e, n(), me(t), Ne(t);
        }), [ t, r ])), r[0] && e && t.on && (ie(t), e.call(t, t.is), he()), le(t);
    }, it = (e, t, r) => ne.on ? (Re(Ae(oe.RULES.AWAIT, ne._.await = e, void 0, t, r)), 
    ot) : v, lt = e => {
        var t = ne;
        Oe(t), Te(t, k(t._is, ((e, [t, r], n) => {
            n(), t.on && (ie(t), r.call(t, t.is = e), he()), Ce(t);
        }), [ t, e || v ])), le(t);
    }, ht = (e, t) => ne.on ? (Re(Ae(oe.RULES.THEN, ne._.await, void 0, e, t)), lt) : v, ut = e => e > 0 ? 1 : e < 0 ? -1 : 0, ct = (e, t, r, n, s) => {
        var a;
        return ie(e), Qe(e.props, e.use)(((a = ne)._.for = [ r, t ], s.call(e, t, r, n))), 
        he(), a;
    }, ft = e => {
        var t = ne;
        Oe(t), Te(t, k(t._is, ((e, [t, r, n, a], o) => {
            if (t.on) {
                var i = t.children, l = typeof e;
                if (t.is !== (t.is = e) || "object" === l) {
                    var h;
                    if (e) switch (l) {
                      case "number":
                        if (h = ut(e |= 0)) if (a[0] !== (a[0] = l) || ut(n[0]) !== h) {
                            Ne(t);
                            for (var u = 0, c = 0; u !== e && (ct(t, u + h, c++, e, r), t.on); u += h) ;
                        } else if (h === ut(e - n[0])) for (var f = n[0], d = f * h; f !== e && (ct(t, f + h, d++, e, r), 
                        t.on); f += h) ; else for (var v = e * h; i.length > v; ) Ee(i.pop()); else Ne(t);
                        break;

                      case "string":
                        if (a[0] !== (a[0] = l)) {
                            Ne(t);
                            for (var p = 0; p < e.length && (ct(t, e[p], p, e, r), t.on); p++) ;
                        } else {
                            for (var g = !1; i.length > e.length; ) Ee(i.pop());
                            for (var _ = 0; _ < e.length; _++) if (e[_] !== n[0][_]) {
                                if (!g) for (g = !0; i.length > _; ) Ee(i.pop());
                                if (ct(t, e[_], _, e, r), !t.on) break;
                            }
                        }
                        break;

                      case "object":
                        if (s(e)) {
                            var b = new Map;
                            if (a[0] !== (a[0] = "a")) for (var m, E = 0; E < e.length && (b.set(e[E], (m = b.get(e[E])) ? m + 1 : 1), 
                            ct(t, e[E], E, e, r), t.on); E++) ; else {
                                for (var N, T = 0; T < e.length; T++) if (b.set(e[T], (N = b.get(e[T])) ? N + 1 : 1), 
                                N = n[0].get(e[T])) n[0].set(e[T], N - 1); else if (ct(t, e[T], T, e, r), !t.on) break;
                                for (var w, k, L = i.length; L--; ) (k = n[0].get(w = i[L]._.for[1])) && (n[0].set(w, k - 1), 
                                Ee(i.splice(L, 1)[0]));
                            }
                            e = b;
                        } else if (a[0] !== (a[0] = l)) {
                            for (var y in Ne(t), e) if (ct(t, e[y], y, e, r), !t.on) break;
                        } else {
                            for (var R, S = {}, M = i.length; M--; ) e[(R = i[M]._.for)[0]] === R[1] ? S[R[0]] = !0 : Ee(i.splice(M, 1)[0]);
                            for (var A in e) if (!0 !== S[A] && (ct(t, e[A], A, e, r), !t.on)) break;
                        }
                        break;

                      default:
                        throw e;
                    } else a[0] = "", Ne(t);
                    n[0] = e;
                }
            } else o();
            Ce(t);
        }), [ t, e, [ null ], [ "" ] ])), le(t);
    }, dt = (e, t, r) => ne.on ? (Re(Ae(oe.RULES.FOR, e, null, t, r)), ft) : v, vt = e => {
        if (e.parentNode && e.parentNode.removeChild(e), e.childNodes) for (var t = e.childNodes, r = t.length; r-- > 0; ) vt(t[r]);
        be(e, 999);
    }, pt = (e, [t, r, n, s, a]) => {
        var o = ne, i = te, l = re;
        if (a && t.node) for (var h, u = t.node.childNodes, c = u.length; c-- > 0; ) "script" !== (h = u[c]).localName && "style" !== h.localName && vt(h);
        te = re = ne = t, t._.$++, qe(r, n, s)((ce((e => {
            e.root.node = null, Ee(e.root);
        })), [])), Ce(t), ne = o, te = i, re = l;
    }, gt = (e, {hydrate: t = !0, target: r = null, pub: n = {}, props: s = {}, use: a, beforeCreated: o = null, onCreated: i = null} = {}) => {
        var l = ne;
        ne = {
            on: !0,
            _: {},
            children: []
        };
        var h = Ae(oe.ROOT, null, null, {}, void 0);
        h.css = {}, h.high = h.home = h.parent = null, h.pub = n, h.node = r, h.root = h, 
        i && (h._.oc = [ i ]), ce((e => {
            e.node = null;
        })), ne = l;
        var u = [ h, e, s, a, t ];
        o ? b(o(h), pt, u) : pt(0, u);
    }, _t = (e, t) => {
        if (n$1(e) || n$1(e = ve())) return e;
        throw "not external " + t.name;
    }, bt = (e, t, r, n) => new ReaseSubject(e, t, r, n), mt = function e(t, r, n, s) {
        var a = _t(this, e), o = bt(t, r, n, s);
        return ce.call(a, (() => {
            o.clear();
        })), o;
    }, Et = function e(t, r, n) {
        var s = _t(this, e), a = T(t, r, n);
        return ce.call(s, a), a;
    }, Nt = function e(t, r, n) {
        var s = _t(this, e), a = k(t, r, n);
        return ce.call(s, a), a;
    }, Tt = function(e, t, r) {
        var n = _t(this, Nt), s = L(e, t, r);
        return ce.call(n, s), s;
    }, wt = e => {
        if (n$1(e)) {
            if (e.parent) for (var t = e.parent.children, r = t.length; r-- > 0; ) if (t[r] === e) {
                t.splice(r, 1);
                break;
            }
            Ee(e);
        }
    }, kt = function e(t, r, n, s) {
        var a = _t(this, e), o = q(t, r, n, s);
        return ce.call(a, o), o;
    }, Lt = function e(t, r, n) {
        var s = _t(this, e), a = Y(t, r, n);
        return ce.call(s, a), a;
    }, yt = t ? window : {
        innerWidth: 0,
        innerHeight: 0,
        outerWidth: 0,
        outerHeight: 0
    }, Rt = 0, St = () => {
        It.$ = Ut.$ = $t.$ = Ft.$ = window.outerHeight - 1;
    }, Mt = t ? () => (Rt++ || window.addEventListener("resize", St, !0), () => {
        --Rt || window.removeEventListener("resize", St, !0);
    }) : p, At = () => yt.innerWidth, Ot = () => yt.innerHeight, Ct = () => yt.outerWidth, Ht = () => yt.outerHeight, It = bt(0, Mt, At, At), Ut = bt(0, Mt, Ot, Ot), $t = bt(0, Mt, Ct, Ct), Ft = bt(0, Mt, Ht, Ht);

    var rease = /*#__PURE__*/Object.freeze({
        __proto__: null,
        $innerHeight: Ut,
        $innerWidth: It,
        $outerHeight: Ft,
        $outerWidth: $t,
        ReaseSubject: ReaseSubject,
        TYPES: oe,
        _$: ae,
        _c: qe,
        _d: Je,
        _e: Ye,
        _f: Qe,
        _fc: Ze,
        _h: Fe,
        _n: Ue,
        _ra: it,
        _rd: Pe,
        _re: nt,
        _rf: dt,
        _ri: tt,
        _rl: rt,
        _rt: ht,
        _rw: at,
        _s: ze,
        _t: Ie,
        _ul: B,
        _ur: Z,
        _x: He,
        context: ve,
        createReaseApp: gt,
        destroy: wt,
        involve: de,
        isContext: n$1,
        isSubject: se,
        isSubscribable: i$1,
        isThenable: o,
        listen: kt,
        listenGlobal: q,
        onCreated: ue,
        onDestroy: ce,
        resize: Lt,
        resizeGlobal: Y,
        subject: mt,
        subjectGlobal: bt,
        subscribablefySafeAll: R,
        subscribablefySafeAllWithProxy: S,
        subscribablefyThenable: y,
        subscribe: Et,
        subscribeGlobal: T,
        subscribeSafe: Nt,
        subscribeSafeAll: Tt,
        subscribeSafeAllGlobal: L,
        subscribeSafeGlobal: k,
        then: _,
        thenSafe: b,
        thenSafeAll: m,
        thenablefy: E
    });

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
        const $clientX = mt(0);
        const $clientY = mt(0);
        // const $opacity = subject<number>(0)
        
        const resizer = (e) => {
          const w = e.width, h = e.height;

          let clientX = $clientX.$;
          let clientY = $clientY.$;

          // $opacity.$ = 0
          // console.log(111, e)
          clientX = lastCEvent.clientX;
          clientY = lastCEvent.clientY;
          if (clientX + w > window.innerWidth) clientX -= w;
          if (clientY + h > window.innerHeight) clientY -= h;
          if (clientX < 0) clientX = 0;
          if (clientY < 0) clientY = 0;
          // $opacity.$ = 1

          $clientX.$ = clientX;
          $clientY.$ = clientY;
        }
      
        ;(
            tt(/*r1.$*/$cmenuFn)(([cmenuFn, ctx]) => {
                Ye("div", { class: ['position-absolute', 'top-0', 'bottom-0', 'start-0', 'end-0'], "style--z-index": "1" }, [B('tapstart-prevent-stop-self', hideDashboardContextmenu)])(Ze(() => {
                kt(window, 'resize', hideDashboardContextmenu);
                clearSelection()
      
                ;(
                        Ye("div", { class: [
                      'position-fixed',
                      'animated zoomIn',
                      'dropdown-menu dropdown-menu-dark show'
                    ], style: "--animate-duration: 0.125s", "style--left": /*r2.$*/ae([$clientX], (_$0) => (_$0[0] + 'px')), "style--top": /*r2.$*/ae([$clientY], (_$0) => (_$0[0] + 'px')) }, [Z(resizer), B('contextmenu-prevent-stop', []), B('click-prevent-stop', hideDashboardContextmenu)])(Ze(() => { cmenuFn(ctx); }))

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

    const dataget = (
      E, key
    ) => E.getAttribute('data-' + key);

    const __random__ = Math.random;

    const { round, ceil, floor, max, min } = Math;

    const random = () => __random__() || random();

    const randomTo = (
      min,
      max = min
    ) => round(random() * (max - min) + min);

    const __parseFloat__ = parseFloat;

    const random_string = () => randomTo(1e16, 9e16).toString(36);

    /* eslint-disable */

    var a = e => {
        e.stopPropagation(), e.cancelable && e.preventDefault();
    }, n = e => {
        var t = 0, o = 0;
        if ("touches" in e) {
            var a = e.touches[0];
            a && (t = a.clientX, o = a.clientY);
        } else t = e.clientX, o = e.clientY;
        return [ t, o ];
    }, i = (t, o) => i => {
        var r = i.node, d = {
            ctx: i,
            isDown: !1,
            isMove: !1,
            dx: 0,
            dy: 0,
            ox: 0,
            oy: 0
        }, s = [ q(r, "tapstart-capture", ((e, t) => {
            var o = e.detail.event;
            t.isDown = !0, t.isMove = !1, t.ox = t.oy = 0, [t.dx, t.dy] = n(o);
        }), d), q(document, "tapmove-capture", ((e, i) => {
            var r = e.detail.event;
            if (i.isMove) {
                var [d, s] = n(r), l = d - i.dx, v = s - i.dy;
                i.ox += l, i.oy += v, a(r), t({
                    type: "move",
                    event: r,
                    detail: o,
                    delta: {
                        x: l,
                        y: v
                    },
                    offset: {
                        x: i.ox,
                        y: i.oy
                    }
                }, i.ctx), i.dx = d, i.dy = s;
            } else i.isDown && (i.isDown = !1, i.isMove = !0, a(r), t({
                type: "start",
                event: r,
                detail: o,
                delta: {
                    x: 0,
                    y: 0
                },
                offset: {
                    x: 0,
                    y: 0
                }
            }, i.ctx));
        }), d), q(document, "tapend-capture", ((e, n) => {
            if (n.isMove) {
                var i = e.detail.event;
                n.isDown = n.isMove = !1, a(i), t({
                    type: "end",
                    event: i,
                    detail: o,
                    delta: {
                        x: 0,
                        y: 0
                    },
                    offset: {
                        x: n.ox,
                        y: n.oy
                    }
                }, n.ctx);
            } else n.isDown && (n.isDown = !1);
        }), d) ];
        return () => {
            for (var e = s.length; e-- > 0; ) s[e]();
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
    // @ts-ignore
    window.aliquot = r;
    const $GRID_COEF_W = bt(10);
    const $GRID_COEF_H = bt(10);
    L([It, Ut], ([w, h]) => {
      // $GRID_COEF_W.$ = 100 / ceil(100 / ($GRID_COEF_H.$ / w * h))

      const wc = r(w / 50, 6) || r(w / 50, 4) || 2;

      $GRID_COEF_W.$ = 100 / wc;
      $GRID_COEF_H.$ = 100 / (r(h / (w / wc), 6) || (w > h ? 2 : 3));

      // console.log([w, h])
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
        Z_INDEX = 1;
        for (const id in Z_INDEXES) Z_INDEXES[id].$ = ++Z_INDEX;
        lastZindex.$ = ++Z_INDEX;
      } else if (Z_INDEX !== lastZindex.$) {
        lastZindex.$ = ++Z_INDEX;
      }
      $HOVERED_ID.$ = $FOCUSED_ID.$ = id;
    };

    const useClearHoverAndFocusListener = (ctx) =>
      q(ctx.node, 'tapstart-capture-self', () => {
        $HOVERED_ID.$ = $FOCUSED_ID.$ = '';
      });

    const title_btn = (
      name,
      bg,
      onClick
    ) => {
        Ye("button", { type: "button", class: [
          'btn btn-sm btn-' + bg,
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
          Ye("div", { class: ['position-absolute', 'bottom-0', 'start-0', 'end-0'], style: /*r2.$*/ae([$GRID_COEF_H, $GRID_COEF_W, $IS_RESIZE_GRID, $styleTop$], (_$0) => ({
            zIndex         : 1,
            top            : _$0[3],
            cursor         : _$0[2],
            display        : _$0[2] ? 'block' : 'none',
            backgroundImage: image,
            backgroundSize : `${_$0[1]}% ${_$0[0]}%`
          })) }, [B('contextmenu-prevent-stop', noop)])()

      );
    };

    const setSize = (wh, coef) => 100 / __parseFloat__(wh) * coef;

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

      const w = randomTo(30, 50), h = randomTo(30, 50);
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
      const $zi = Z_INDEXES[id] = mt(-1);
      ce(() => { delete Z_INDEXES[id]; });
      setZIindex();

      const windowClose = () => { wt(this); };
      const $isFullscreen = mt(false);
      const toggleFullscreen = () => { $isFullscreen.$ = !$isFullscreen.$; };

      const $fullscreenTitle = mt();
      Et($isFullscreen, (isFullscreen) => {
        $fullscreenTitle.$ = isFullscreen ? 'Восстановить' : 'Развернуть';
      })

      ;(
          Ye("div", { id: id, class: ['card', 'position-absolute', 'bg-dark text-white'], style: /*r2.$*/ae([$GRID_COEF_H, $GRID_COEF_W, $zi, $isFullscreen], (_$0) => ({
            top   : (_$0[3] ? 0 : top) + '%',
            left  : (_$0[3] ? 0 : left) + '%',
            right : (_$0[3] ? 0 : right) + '%',
            bottom: (_$0[3] ? 0 : bottom) + '%',
            
            zIndex: _$0[2],

            minWidth : _$0[1] + '%',
            minHeight: _$0[0] + '%',
          })) }, [B('inhover', setHoveredId), B('infocus', setZIindex), 
            i((e, ctx) => {
              const [typeA, $isFs, setTop, setLeft, setRight, setBottom] = e.detail;

              if (e.type === 'start' && !$isFs.$) {
                typeA[0] = dataget(e.event.target , 'resize'); 
              }

              if (typeA[0]) {
                const dr = typeA[0];
                const node = ctx.node; 

                let style;
                if (e.type === 'start') {
                  style = getComputedStyle(node);
                  showResizeGrid(dr === 'move' ? dr : dr + '-resize');
                } else {
                  style = node.style;
                }

                let t, l, r, b;

                if (dr === 'move' || dr[0] === 'n') {
                  t = __parseFloat__(style.top) + e.delta.y;
                }
                if (dr === 'move' || dr === 'w' || dr[1] === 'w') {
                  l = __parseFloat__(style.left) + e.delta.x;
                }
                if (dr === 'move' || dr === 'e' || dr[1] === 'e') {
                  r = __parseFloat__(style.right) - e.delta.x;
                }
                if (dr === 'move' || dr[0] === 's') {
                  b = __parseFloat__(style.bottom) - e.delta.y;
                }

                style = node.style;
                if (e.type === 'end') {
                  typeA[0] = null;
                  hideResizeGrid();
                  const pes = getComputedStyle(node.parentElement);
                  if (dr === 'move' || dr[0] === 'n') {
                    style.top = setTop(setSize(pes.height, t)) + '%';
                  }
                  if (dr === 'move' || dr === 'w' || dr[1] === 'w') {
                    style.left = setLeft(setSize(pes.width, l)) + '%';
                  }
                  if (dr === 'move' || dr === 'e' || dr[1] === 'e') {
                    style.right = setRight(setSize(pes.width, r)) + '%';
                  }
                  if (dr === 'move' || dr[0] === 's') {
                    style.bottom = setBottom(setSize(pes.height, b)) + '%';
                  }
                } else {
                  clearSelection();
                  if (dr === 'move' || dr[0] === 'n') {
                    style.top = t + 'px';
                  }
                  if (dr === 'move' || dr === 'w' || dr[1] === 'w') {
                    style.left = l + 'px';
                  }
                  if (dr === 'move' || dr === 'e' || dr[1] === 'e') {
                    style.right = r + 'px';
                  }
                  if (dr === 'move' || dr[0] === 's') {
                    style.bottom = b + 'px';
                  }
                }
              }
            }, [[null], $isFullscreen, setTop, setLeft, setRight, setBottom])
          ])(
        Ye("div", { class: /*r2.$*/ae([$FOCUSED_ID], (_$0) => ([
              'card-header',
              'd-flex align-items-center',
              'p-1 overflow-hidden user-select-none',
              _$0[0] === id ? 'bg-primary' : 'bg-secondary'
            ])), "style--opacity": /*r2.$*/ae([$HOVERED_ID], (_$0) => (_$0[0] === id ? 1 : 0.875)), "style--z-index": "1" }, [useDashboardContextmenu(schema2contextmenu([
              { title: $fullscreenTitle, click: toggleFullscreen },,
              { title: 'Закрыть', click: windowClose }
            ]), true)])(
          Ye("div", { class: ['flex-fill', 'text-truncate', 'px-1'], style: "margin-bottom:-0.0625em;", "data-resize": "move" }, [B('dblclick', toggleFullscreen)])(
            He(/*r2.$*/ae([title], (_$0) => (_$0[0] || id)))
          ),
          Ye("div", { class: "text-nowrap" })(
            Ie((
                title_btn('dash-lg', 'dark', noop),
                title_btn('plus-lg', 'dark', toggleFullscreen),
                title_btn('x-lg', 'danger', windowClose)
              ))
          )
        ),
        Ye("div", { class: ['card-body', 'position-relative'], "style--z-index": "1" })(
          Ye("div", { style: 'z-index:1;position:absolute;top:2px;bottom:2px;left:2px;right:2px;' })(
            ze()(() => {
              Ie("empty");
            })
          ),
          Ye("div", { class: ['position-absolute', 'top-0', 'start-0', 'w-100', 'h-100'], "style--display": /*r2.$*/ae([$FOCUSED_ID], (_$0) => (_$0[0] === id ? 'none' : 'block')), "style--backgroundColor": 'rgba(0,0,0,0.05)', "style--z-index": "1" }, [B('contextmenu-prevent-stop', noop)])()
        ),
        tt(/*r2.$*/ae([$isFullscreen], (_$0) => (!_$0[0])))(() => {
          Ye("div", { style: "position:absolute;z-index:1;top:-0.25em;left:0;width:100%;height:0.5em;cursor:n-resize;", "data-resize": "n" })();
          Ye("div", { style: "position:absolute;z-index:1;bottom:-0.25em;left:0;width:100%;height:0.5em;cursor:s-resize;", "data-resize": "s" })();
          Ye("div", { style: "position:absolute;z-index:1;top:0;left:-0.25em;width:0.5em;height:100%;cursor:w-resize;", "data-resize": "w" })();
          Ye("div", { style: "position:absolute;z-index:1;top:0;right:-0.25em;width:0.5em;height:100%;cursor:e-resize;", "data-resize": "e" })();
          Ye("div", { style: "position:absolute;z-index:1;top:-0.375em;left:-0.375em;width:0.75em;height:0.75em;cursor:nw-resize;", "data-resize": "nw" })();
          Ye("div", { style: "position:absolute;z-index:1;top:-0.375em;right:-0.375em;width:0.75em;height:0.75em;cursor:ne-resize;", "data-resize": "ne" })();
          Ye("div", { style: "position:absolute;z-index:1;bottom:-0.375em;left:-0.375em;width:0.75em;height:0.75em;cursor:sw-resize;", "data-resize": "sw" })();
          Ye("div", { style: "position:absolute;z-index:1;bottom:-0.375em;right:-0.375em;width:0.75em;height:0.75em;cursor:se-resize;", "data-resize": "se" })();
        })
      )

      );
    }

    /* eslint-disable @typescript-eslint/explicit-function-return-type */

    function DashboardTopbar(
      
    ) {
        Ye("div", { class: ['position-absolute', 'w-100', 'top-0', 'left-0'], "style--z-index": "1", "style--height": '2em', "style--backgroundColor": 'rgba(0,0,0,0.75)' }, [useDashboardContextmenu(() => {
                Qe()(
            Ie("TopBarContextMenu")
          );

        })])(
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
