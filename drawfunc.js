_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
	[18], {
		"20a2": function(e, t, o) {
			e.exports = o("nOHt")
		},
		"6VPp": function(e, t, o) {
			"use strict";
			var n = o("nKUr"),
				i = o("MX0m"),
				r = o.n(i),
				s = o("q1tI"),
				a = o("Ya7B"),
				c = o("kOrG"),
				x = o("YSmr"),
				l = "#FFF";
			t.a = Object(a.c)((function(e) {
				var t = Object(s.useRef)();
				return Object(s.useEffect)((function() {
					var o = t.current.getContext("2d");
					o.strokeStyle = l, o.lineWidth = 8;
					var n = 60;
					if (e.timeStarted) {
						var i, r, s = performance.now() - e.elapsedTime,
							a = 0;
						if (e.speed != x.kb) r = e.speed == x.ib ? .5 * e.value : e.speed == x.lb ? 2 * e.value : e.value, e.reduced && (r /= 4);
						else {
							var p = .2 * e.value,
								d = 2 * e.value - p,
								b = Math.pow(d / 100, 1 / e.turnMax);
							r = p + 100 * Math.pow(b, e.turnMax - e.turnNum)
						}
						var u = !1;
						return e.reduced ? c.a.play("timeout", !1, .9) : s / r < .8 && (u = setTimeout((function() {
								c.a.play("timeout", !1, .9)
							}), .8 * r - s)), i = requestAnimationFrame((function t(s) {
								var c = (s - e.elapsedTime) / r,
									x = c >= 1;
								if ((c - a > .001 || x) && (a = c, o.clearRect(0, 0, 120, 120), o.beginPath(), o.arc(n, n, 56, 0, 2 * Math.PI), o.stroke(), !x)) {
									o.fillStyle = c <= .8 && !e.reduced ? l : "#F7B500", o.beginPath(), o.moveTo(n, n), o.arc(n, n, 44, 1.5 * Math.PI, 1.5 * Math.PI + 2 * Math.PI * c, !0), o.lineTo(n, n), o.fill()
								}
								x || (i = requestAnimationFrame(t))
							})),
							function() {
								c.a.pause("timeout"), u && clearTimeout(u), cancelAnimationFrame(i)
							}
					}
					o.beginPath(), o.arc(n, n, 56, 0, 2 * Math.PI), o.stroke()
				}), [e.timeStarted]), Object(n.jsxs)(n.Fragment, {
					children: [Object(n.jsx)("canvas", {
						ref: t,
						width: 120,
						height: 120,
						className: "jsx-241293408 time"
					}), Object(n.jsx)(r.a, {
						id: "2409927210",
						children: ["canvas.jsx-241293408{position:absolute;width:60px;height:60px;top:20px;right:20px;font-family:Ubuntu;font-weight:500;font-size:36px;color:rgba(255,255,255,.69);}", "@media (max-width:640px){canvas.jsx-241293408{z-index:5;width:40px;height:40px;top:12px;right:10px;}}"]
					}), Object(n.jsx)(r.a, {
						id: "2667873027",
						children: [".ar .time{left:20px;right:initial;}", "@media (max-width:640px){.ar .time{left:10px;}}"]
					})]
				})
			}), (function(e) {
				return {
					reduced: e.data.configs.speed == x.hb,
					speed: e.data.configs.speed,
					elapsedTime: e.data.elapsedTime,
					timeStarted: e.data.timeStarted,
					turnNum: e.data.turnNum,
					turnMax: e.data.turnMax
				}
			}))
		},
		HF4s: function(e, t, o) {
			"use strict";
			o.r(t), o.d(t, "__N_SSG", (function() {
				return me
			}));
			var n = o("nKUr"),
				i = o("jT3O"),
				r = o("z7pX"),
				s = o("MX0m"),
				a = o.n(s),
				c = o("CBA4"),
				x = o("q1tI"),
				l = o.n(x),
				p = o("20a2"),
				d = "undefined" !== typeof navigator && navigator.userAgent.toLowerCase().indexOf("firefox") > 0;

			function b(e, t, o) {
				e.addEventListener ? e.addEventListener(t, o, !1) : e.attachEvent && e.attachEvent("on".concat(t), (function() {
					o(window.event)
				}))
			}

			function u(e, t) {
				for (var o = t.slice(0, t.length - 1), n = 0; n < o.length; n++) o[n] = e[o[n].toLowerCase()];
				return o
			}

			function f(e) {
				"string" !== typeof e && (e = "");
				for (var t = (e = e.replace(/\s/g, "")).split(","), o = t.lastIndexOf(""); o >= 0;) t[o - 1] += ",", t.splice(o, 1), o = t.lastIndexOf("");
				return t
			}
			for (var h = {
					backspace: 8,
					tab: 9,
					clear: 12,
					enter: 13,
					return: 13,
					esc: 27,
					escape: 27,
					space: 32,
					left: 37,
					up: 38,
					right: 39,
					down: 40,
					del: 46,
					delete: 46,
					ins: 45,
					insert: 45,
					home: 36,
					end: 35,
					pageup: 33,
					pagedown: 34,
					capslock: 20,
					"\u21ea": 20,
					",": 188,
					".": 190,
					"/": 191,
					"`": 192,
					"-": d ? 173 : 189,
					"=": d ? 61 : 187,
					";": d ? 59 : 186,
					"'": 222,
					"[": 219,
					"]": 221,
					"\\": 220
				}, m = {
					"\u21e7": 16,
					shift: 16,
					"\u2325": 18,
					alt: 18,
					option: 18,
					"\u2303": 17,
					ctrl: 17,
					control: 17,
					"\u2318": 91,
					cmd: 91,
					command: 91
				}, g = {
					16: "shiftKey",
					18: "altKey",
					17: "ctrlKey",
					91: "metaKey",
					shiftKey: 16,
					ctrlKey: 17,
					altKey: 18,
					metaKey: 91
				}, j = {
					16: !1,
					18: !1,
					17: !1,
					91: !1
				}, w = {}, y = 1; y < 20; y++) h["f".concat(y)] = 111 + y;
			var k = [],
				v = "all",
				_ = [],
				O = function(e) {
					return h[e.toLowerCase()] || m[e.toLowerCase()] || e.toUpperCase().charCodeAt(0)
				};

			function F(e) {
				v = e || "all"
			}

			function C() {
				return v || "all"
			}
			var E = function(e) {
				var t = e.key,
					o = e.scope,
					n = e.method,
					i = e.splitKey,
					r = void 0 === i ? "+" : i;
				f(t).forEach((function(e) {
					var t = e.split(r),
						i = t.length,
						s = t[i - 1],
						a = "*" === s ? "*" : O(s);
					if (w[a]) {
						o || (o = C());
						var c = i > 1 ? u(m, t) : [];
						w[a] = w[a].map((function(e) {
							return (!n || e.method === n) && e.scope === o && function(e, t) {
								for (var o = e.length >= t.length ? e : t, n = e.length >= t.length ? t : e, i = !0, r = 0; r < o.length; r++) - 1 === n.indexOf(o[r]) && (i = !1);
								return i
							}(e.mods, c) ? {} : e
						}))
					}
				}))
			};

			function z(e, t, o) {
				var n;
				if (t.scope === o || "all" === t.scope) {
					for (var i in n = t.mods.length > 0, j) Object.prototype.hasOwnProperty.call(j, i) && (!j[i] && t.mods.indexOf(+i) > -1 || j[i] && -1 === t.mods.indexOf(+i)) && (n = !1);
					(0 !== t.mods.length || j[16] || j[18] || j[17] || j[91]) && !n && "*" !== t.shortcut || !1 === t.method(e, t) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), e.cancelBubble && (e.cancelBubble = !0))
				}
			}

			function T(e) {
				var t = w["*"],
					o = e.keyCode || e.which || e.charCode;
				if (N.filter.call(this, e)) {
					if (93 !== o && 224 !== o || (o = 91), -1 === k.indexOf(o) && 229 !== o && k.push(o), ["ctrlKey", "altKey", "shiftKey", "metaKey"].forEach((function(t) {
							var o = g[t];
							e[t] && -1 === k.indexOf(o) ? k.push(o) : !e[t] && k.indexOf(o) > -1 ? k.splice(k.indexOf(o), 1) : "metaKey" === t && e[t] && 3 === k.length && (e.ctrlKey || e.shiftKey || e.altKey || (k = k.slice(k.indexOf(o))))
						})), o in j) {
						for (var n in j[o] = !0, m) m[n] === o && (N[n] = !0);
						if (!t) return
					}
					for (var i in j) Object.prototype.hasOwnProperty.call(j, i) && (j[i] = e[g[i]]);
					e.getModifierState && (!e.altKey || e.ctrlKey) && e.getModifierState("AltGraph") && (-1 === k.indexOf(17) && k.push(17), -1 === k.indexOf(18) && k.push(18), j[17] = !0, j[18] = !0);
					var r = C();
					if (t)
						for (var s = 0; s < t.length; s++) t[s].scope === r && ("keydown" === e.type && t[s].keydown || "keyup" === e.type && t[s].keyup) && z(e, t[s], r);
					if (o in w)
						for (var a = 0; a < w[o].length; a++)
							if (("keydown" === e.type && w[o][a].keydown || "keyup" === e.type && w[o][a].keyup) && w[o][a].key) {
								for (var c = w[o][a], x = c.splitKey, l = c.key.split(x), p = [], d = 0; d < l.length; d++) p.push(O(l[d]));
								p.sort().join("") === k.sort().join("") && z(e, c, r)
							}
				}
			}

			function N(e, t, o) {
				k = [];
				var n = f(e),
					i = [],
					r = "all",
					s = document,
					a = 0,
					c = !1,
					x = !0,
					l = "+";
				for (void 0 === o && "function" === typeof t && (o = t), "[object Object]" === Object.prototype.toString.call(t) && (t.scope && (r = t.scope), t.element && (s = t.element), t.keyup && (c = t.keyup), void 0 !== t.keydown && (x = t.keydown), "string" === typeof t.splitKey && (l = t.splitKey)), "string" === typeof t && (r = t); a < n.length; a++) i = [], (e = n[a].split(l)).length > 1 && (i = u(m, e)), (e = "*" === (e = e[e.length - 1]) ? "*" : O(e)) in w || (w[e] = []), w[e].push({
					keyup: c,
					keydown: x,
					scope: r,
					mods: i,
					shortcut: n[a],
					method: o,
					key: n[a],
					splitKey: l
				});
				"undefined" !== typeof s && ! function(e) {
					return _.indexOf(e) > -1
				}(s) && window && (_.push(s), b(s, "keydown", (function(e) {
					T(e)
				})), b(window, "focus", (function() {
					k = []
				})), b(s, "keyup", (function(e) {
					T(e),
						function(e) {
							var t = e.keyCode || e.which || e.charCode,
								o = k.indexOf(t);
							if (o >= 0 && k.splice(o, 1), e.key && "meta" === e.key.toLowerCase() && k.splice(0, k.length), 93 !== t && 224 !== t || (t = 91), t in j)
								for (var n in j[t] = !1, m) m[n] === t && (N[n] = !1)
						}(e)
				})))
			}
			var L = {
				setScope: F,
				getScope: C,
				deleteScope: function(e, t) {
					var o, n;
					for (var i in e || (e = C()), w)
						if (Object.prototype.hasOwnProperty.call(w, i))
							for (o = w[i], n = 0; n < o.length;) o[n].scope === e ? o.splice(n, 1) : n++;
					C() === e && F(t || "all")
				},
				getPressedKeyCodes: function() {
					return k.slice(0)
				},
				isPressed: function(e) {
					return "string" === typeof e && (e = O(e)), -1 !== k.indexOf(e)
				},
				filter: function(e) {
					var t = e.target || e.srcElement,
						o = t.tagName,
						n = !0;
					return !t.isContentEditable && ("INPUT" !== o && "TEXTAREA" !== o && "SELECT" !== o || t.readOnly) || (n = !1), n
				},
				unbind: function(e) {
					if (e) {
						if (Array.isArray(e)) e.forEach((function(e) {
							e.key && E(e)
						}));
						else if ("object" === typeof e) e.key && E(e);
						else if ("string" === typeof e) {
							for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) o[n - 1] = arguments[n];
							var i = o[0],
								r = o[1];
							"function" === typeof i && (r = i, i = ""), E({
								key: e,
								scope: i,
								method: r,
								splitKey: "+"
							})
						}
					} else Object.keys(w).forEach((function(e) {
						return delete w[e]
					}))
				}
			};
			for (var S in L) Object.prototype.hasOwnProperty.call(L, S) && (N[S] = L[S]);
			if ("undefined" !== typeof window) {
				var B = window.hotkeys;
				N.noConflict = function(e) {
					return e && window.hotkeys === N && (window.hotkeys = B), N
				}, window.hotkeys = N
			}
			var A = N;

			function P(e, t, o, n) {
				o instanceof Array && (n = o, o = void 0);
				var i = o || {},
					r = i.enableOnTags,
					s = i.filter,
					a = Object(x.useRef)(null),
					c = Object(x.useCallback)((function(e, o) {
						return (null === a.current || document.activeElement === a.current) && (t(e, o), !0)
					}), n ? [a].concat(n) : [a]);
				return Object(x.useEffect)((function() {
					return o && o.enableOnTags && (A.filter = function(e) {
							var t = e.target,
								o = e.srcElement,
								n = t && t.tagName || o && o.tagName;
							return Boolean(n && r && r.includes(n))
						}), s && (A.filter = s), A(e, o || {}, c),
						function() {
							return A.unbind(e, c)
						}
				}), [c, o, r, s, e]), a
			}
			var M = o("Ya7B");

			function K(e, t, o) {
				var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
					i = t.getBoundingClientRect(),
					r = e.touches ? [e.touches[0].clientX, e.touches[0].clientY] : [e.clientX, e.clientY];
				return [Math.round((r[0] - i.left + n) / o), Math.round((r[1] - i.top) / o)]
			}

			function D(e, t, o, n, i, s) {
				var a = function(e, t, o) {
						var n = t,
							i = o;
						if (p(t, o, e)) {
							for (; p(n + 1, i, e);) n++;
							var r = n;
							do {
								for (n = t - 1, i++; p(n + 1, i, e) && n + 1 <= r;) n++
							} while (n == r);
							return {
								x: t,
								y: o,
								w: r - t,
								h: --i - o
							}
						}
						return {
							w: -1,
							h: -1
						}
					},
					c = function(e, t, o) {
						var n = t,
							i = o;
						if (p(t, o, e)) {
							for (; p(n - 1, i, e);) n--;
							var r = n;
							do {
								for (n = t + 1, i--; p(n - 1, i, e) && n - 1 >= r;) n--
							} while (n == r);
							return {
								x: r,
								y: ++i,
								w: t - r,
								h: o - i
							}
						}
						return {
							w: -1,
							h: -1
						}
					},
					x = function(e, t, o) {
						var n = t,
							i = o;
						if (p(t, o, e)) {
							for (; p(n, i + 1, e);) i++;
							var r = i;
							do {
								for (i = o - 1, n--; p(n, i + 1, e) && i + 1 <= r;) i++
							} while (i == r);
							return {
								x: ++n,
								y: o,
								w: t - n,
								h: r - o
							}
						}
						return {
							w: -1,
							h: -1
						}
					},
					l = function(e, t, o) {
						var n = t,
							i = o;
						if (p(t, o, e)) {
							for (; p(n, i - 1, e);) i--;
							var r = i;
							do {
								for (i = o + 1, n++; p(n, i - 1, e) && i - 1 >= r;) i--
							} while (i == r);
							return {
								x: t,
								y: r,
								w: --n - t,
								h: o - r
							}
						}
						return {
							w: -1,
							h: -1
						}
					},
					p = function(e, t, o) {
						if (b[e][t]) return !1;
						var n = 4 * (e + t * i),
							r = g.slice(n, n + 4),
							s = Math.abs(o[0] - r[0]),
							a = Math.abs(o[1] - r[1]),
							c = Math.abs(o[2] - r[2]),
							x = Math.abs(o[3] - r[3]);
						return s < 20 && a < 20 && c < 20 && x < 20 || 0 == r[3] && 255 == o[0] && 255 == o[1] && 255 == o[2] || 0 == o[3] && 255 == r[0] && 255 == r[1] && 255 == r[2]
                    },
                    d = function(e) {
                        for (var t = e[0], o = e[1], n = t + e[2], i = o + e[3], r = t; r < n; r++)
                            for (var s = o; s < i; s++) b[r][s] = !0;
                        e[0]-=2;
                        e[1]-=2;
                        e[2]+=2;
                        e[3]+=2;
                        return e
                    };
				t = Math.round(t), o = Math.round(o);
				var b, u = parseInt(n.replace("#", "0x")),
					f = u % 256,
					h = (u = Math.floor(u / 256)) % 256,
					m = u = Math.floor(u / 256);
				! function() {
					b = [];
					for (var e = -1; e <= i; e++) b[e] = [];
					b[-1] = [], b[i] = [];
					for (var t = -1; t <= s; t++) b[-1][t] = 1, b[i][t] = 1;
					for (var o = 0; o < i; o++) b[o][-1] = 1, b[o][s] = 1
				}();
				for (var g = e.getImageData(0, 0, i, s).data, j = 4 * (t + o * i), w = [g[j], g[j + 1], g[j + 2], g[j + 3]], y = [], k = 0; k <= i; k++) y[k] = [];
				if (p(t, o, [m, h, f, 255])) return [];
				for (; p(t - 1, o, w);) t--;
				for (; p(t, o - 1, w);) o--;
				var v, _, O = a(w, t, o),
					F = {
						x: t,
						y: o,
						w: O.w,
						h: O.h,
						ref: 0,
						andada: 0
					},
					C = O.w,
					E = d([O.x, O.y, O.w + 1, O.h + 1]);
				do {
					for (v = 0, 2 == F.ref && (v += F.andada); v <= F.h;) - 1 != (_ = (O = l(w, F.x + F.w + 1, F.y + F.h - v)).h) ? (y[_].push({
						x: O.x,
						y: O.y,
						w: O.w,
						h: O.h,
						ref: 1,
						andada: F.h + 1 - v
					}), E.push.apply(E, Object(r.a)(d([O.x, O.y, O.w + 1, O.h + 1]))), _ > C && (C = _), v += _) : v++;
					for (v = 0, 1 == F.ref && (v += F.andada); v <= F.h;) - 1 != (_ = (O = x(w, F.x - 1, F.y + v)).h) ? (y[_].push({
						x: O.x,
						y: O.y,
						w: O.w,
						h: O.h,
						ref: 2,
						andada: F.h + 1 - v
					}), E.push.apply(E, Object(r.a)(d([O.x, O.y, O.w + 1, O.h + 1]))), _ > C && (C = _), v += _) : v++;
					for (v = 0, 4 == F.ref && (v += F.andada); v <= F.w;) - 1 != (_ = (O = a(w, F.x + v, F.y + F.h + 1)).w) ? (y[_].push({
						x: O.x,
						y: O.y,
						w: O.w,
						h: O.h,
						ref: 3,
						andada: F.w + 1 - v
					}), E.push.apply(E, Object(r.a)(d([O.x, O.y, O.w + 1, O.h + 1]))), _ > C && (C = _), v += _) : v++;
					for (v = 0, 3 == F.ref && (v += F.andada); v <= F.w;) - 1 != (_ = (O = c(w, F.x + F.w - v, F.y - 1)).w) ? (y[_].push({
						x: O.x,
						y: O.y,
						w: O.w,
						h: O.h,
						ref: 4,
						andada: F.w + 1 - v
					}), E.push.apply(E, Object(r.a)(d([O.x, O.y, O.w + 1, O.h + 1]))), _ > C && (C = _), v += _) : v++;
					for (F = y[C].pop(); null == F && C > 0;) F = y[--C].pop()
				} while (null != F);
				return E
			}
			var G = o("YSmr"),
				R = o("kOrG"),
				Y = o("QW0y");
			var I = Object(M.c)((function(e) {
					var t = Object(x.useRef)(),
						o = Object(x.useRef)();

					function i(n, i) {
						var s = K(i, o.current, e.scale / e.density),
							a = e.thickness * e.density;
						n.clearRect(0, 0, e.width * e.density, e.height * e.density), n.fillStyle = "#FFF", n.strokeStyle = "#FFF", n.lineWidth = 2 * e.density, n.beginPath(), n.arc.apply(n, Object(r.a)(s).concat([a / 2 + 1, 0, 2 * Math.PI])), t.current ? n.fill() : n.stroke(), n.beginPath(), n.moveTo(s[0], s[1] - a / 2 - 2.5 * e.density), n.lineTo(s[0], s[1] - a / 2 - 10.5 * e.density), n.stroke(), n.beginPath(), n.moveTo(s[0], s[1] + a / 2 + 2.5 * e.density), n.lineTo(s[0], s[1] + a / 2 + 10.5 * e.density), n.stroke(), n.beginPath(), n.moveTo(s[0] - a / 2 - 2.5 * e.density, s[1]), n.lineTo(s[0] - a / 2 - 10.5 * e.density, s[1]), n.stroke(), n.beginPath(), n.moveTo(s[0] + a / 2 + 2.5 * e.density, s[1]), n.lineTo(s[0] + a / 2 + 10.5 * e.density, s[1]), n.stroke(), n.strokeStyle = "#000", n.lineWidth = 1 * e.density, n.beginPath(), n.arc.apply(n, Object(r.a)(s).concat([a / 2, 0, 2 * Math.PI])), n.stroke(), n.beginPath(), n.moveTo(s[0], s[1] - a / 2 - 3 * e.density), n.lineTo(s[0], s[1] - a / 2 - 10 * e.density), n.stroke(), n.beginPath(), n.moveTo(s[0], s[1] + a / 2 + 3 * e.density), n.lineTo(s[0], s[1] + a / 2 + 10 * e.density), n.stroke(), n.beginPath(), n.moveTo(s[0] - a / 2 - 3 * e.density, s[1]), n.lineTo(s[0] - a / 2 - 10 * e.density, s[1]), n.stroke(), n.beginPath(), n.moveTo(s[0] + a / 2 + 3 * e.density, s[1]), n.lineTo(s[0] + a / 2 + 10 * e.density, s[1]), n.stroke()
					}
					return Object(x.useEffect)((function() {
						t.current = !1;
						var n = o.current.getContext("2d");

						function r(e) {
							t.current = !0, i(n, e)
						}

						function s(e) {
							t.current = !1, i(n, e)
						}

						function a(e) {
							i(n, e)
						}
						return document.addEventListener("mousemove", a, !1), document.addEventListener("touchmove", a, !1), e.hidden && (o.current.addEventListener("mousedown", r, !1), o.current.addEventListener("touchstart", r, !1), document.addEventListener("mouseup", s, !1), document.addEventListener("mousecancel", s, !1), document.addEventListener("touchend", s, !1), document.addEventListener("touchcancel", s, !1)),
							function() {
								document.removeEventListener("mousemove", a, !1), document.removeEventListener("touchmove", a, !1), e.hidden && (document.removeEventListener("mouseup", s, !1), document.removeEventListener("mousecancel", s, !1), document.removeEventListener("touchend", s, !1), document.removeEventListener("touchcancel", s, !1))
							}
					}), [e.thickness, e.scale]), Object(n.jsxs)(n.Fragment, {
						children: [Object(n.jsx)("canvas", {
							ref: o,
							width: e.width * e.density,
							height: e.height * e.density,
							className: a.a.dynamic([
								["3457905390", [e.width, e.height]]
							])
						}), Object(n.jsx)(a.a, {
							id: "3457905390",
							dynamic: [e.width, e.height],
							children: ["canvas.__jsx-style-dynamic-selector{position:absolute;top:0;left:0;cursor:none;width:".concat(e.width, "px;height:").concat(e.height, "px;}")]
						})]
					})
				}), (function(e) {
					return {
						scale: e.scale
					}
				})),
				X = o("xvhg"),
				q = o("H+61"),
				U = o("UlJF");

			function W(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function H(e, t) {
				return (H = Object.setPrototypeOf || function(e, t) {
					return e.__proto__ = t, e
				})(e, t)
			}

			function V(e) {
				return (V = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				})(e)
			}

			function Z(e, t) {
				return !t || "object" !== V(t) && "function" !== typeof t ? W(e) : t
			}

			function Q(e) {
				return (Q = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
					return e.__proto__ || Object.getPrototypeOf(e)
				})(e)
			}
			var J = o("cpVT");

			function $(e) {
				var t = function() {
					if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" === typeof Proxy) return !0;
					try {
						return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
					} catch (e) {
						return !1
					}
				}();
				return function() {
					var o, n = Q(e);
					if (t) {
						var i = Q(this).constructor;
						o = Reflect.construct(n, arguments, i)
					} else o = n.apply(this, arguments);
					return Z(this, o)
				}
			}
			var ee = function(e) {
				! function(e, t) {
					if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && H(e, t)
				}(o, e);
				var t = $(o);

				function o(e) {
					var n;
					return Object(q.a)(this, o), n = t.call(this, e), Object(J.a)(W(n), "_unblock", (function(e) {
						n._blocked = !1;
						var t = K(e, n._ref.current, n.props.scale / n._zoom),
							o = Object(X.a)(t, 2),
							i = o[0],
							r = o[1];
						n._coord = {
							x: i * n.props.density,
							y: r * n.props.density,
							new: !0
						}, [G.ub, G.vb, G.yb, G.Ab, G.Bb].includes(n.props.tool) && n._pathsGeo.push({
							nivel: 6,
							tool: n.props.tool
						})
					})), Object(J.a)(W(n), "_block", (function(e) {
						if (n._blocked = !0, n._pathsGeo.length) {
							var t = n._pathsGeo.length - 1;
							n._pathsGeo[t].pos ? 6 == n._pathsGeo[t].nivel && (n._pathsGeo[t].nivel = 5) : n._pathsGeo.splice(t, 1)
						}
					})), Object(J.a)(W(n), "_move", (function(e) {
						if (n._active && !n._blocked) {
							var t = K(e, n._ref.current, n.props.scale / n._zoom),
								o = Object(X.a)(t, 2),
								i = o[0],
								r = o[1];
							i *= n.props.density, r *= n.props.density, n._coord && ([G.zb, G.wb].includes(n.props.tool) ? (n._paths.push({
								pos: [n._coord.x, n._coord.y, i, r],
								nivel: 5,
								new: n._coord.new
							}), n._coord = {
								x: i,
								y: r
							}) : n._pathsGeo.length > 0 && [G.ub, G.vb, G.yb, G.Ab, G.Bb].includes(n.props.tool) && (n._pathsGeo[n._pathsGeo.length - 1].pos = [n._coord.x, n._coord.y, i, r]))
						}
					})), Object(J.a)(W(n), "_animate", (function() {
						if (n._active) {
							var e, t, o, i, r = Date.now(),
								s = -1;
							n._ctx.clearRect(0, 0, n.props.width * n.props.density, n.props.height * n.props.density), n._ctx.lineWidth = n.props.thickness * n.props.density;
							for (var a = 0; a < n._paths.length; a++) {
								if (s != (o = n._paths[a]).nivel || o.new) {
									if (-1 != s && (n._ctx.lineTo(t.pos[2], t.pos[3]), n._ctx.stroke()), o.new) {
										s = -1;
										continue
									}
									n._ctx.beginPath(), n._ctx.moveTo(o.pos[0], o.pos[1]), i = n._opacities - 500 * (5 - o.nivel)
								}
								if (t = o, e = r - i, 4 == (i = Math.ceil((2500 - e) / 2500 * 1e3) + "").length) n._ctx.strokeStyle = "rgb(".concat(n._color, ")");
								else {
									for (var c = 0; c < 3 - i.length; c++) i = "0" + i;
									n._ctx.strokeStyle = "rgba(".concat(n._color + ",." + i, ")")
								}
								n._ctx.quadraticCurveTo(t.pos[0], t.pos[1], t.pos[0] + (t.pos[2] - t.pos[0]) / 2, t.pos[1] + (t.pos[3] - t.pos[1]) / 2), s = t.nivel
							} - 1 != s && (n._ctx.lineTo(t.pos[2], t.pos[3]), n._ctx.stroke());
							for (var x = 0; x < n._pathsGeo.length; x++)
								if ((o = n._pathsGeo[x]).pos) {
									if (6 == o.nivel) n._ctx.strokeStyle = "rgb(".concat(n._color, ")");
									else if (e = r - (i = n._opacities - 500 * (5 - o.nivel)), 4 == (i = Math.ceil((2500 - e) / 2500 * 1e3) + "").length) n._ctx.strokeStyle = "rgb(".concat(n._color, ")");
									else {
										for (var l = 0; l < 3 - i.length; l++) i = "0" + i;
										n._ctx.strokeStyle = "rgba(".concat(n._color + ",." + i, ")")
									}
									switch (n._ctx.fillStyle = n._ctx.strokeStyle, o.tool) {
										case G.yb:
											n._ctx.beginPath(), n._ctx.moveTo(o.pos[0], o.pos[1]), n._ctx.lineTo(o.pos[2], o.pos[3]), n._ctx.stroke();
											break;
										case G.Bb:
											n._ctx.beginPath(), n._ctx.rect(o.pos[0], o.pos[1], o.pos[2] - o.pos[0], o.pos[3] - o.pos[1]), n._ctx.stroke();
											break;
										case G.Ab:
											n._ctx.beginPath(), n._ctx.rect(o.pos[0], o.pos[1], o.pos[2] - o.pos[0], o.pos[3] - o.pos[1]), n._ctx.fill();
											break;
										case G.vb:
											var p = (o.pos[2] - o.pos[0]) / 2,
												d = (o.pos[3] - o.pos[1]) / 2,
												b = Math.round(o.pos[0] + p),
												u = Math.round(o.pos[1] + d),
												f = (Math.sqrt(2) - 1) / 3 * 4;
											n._ctx.beginPath(), n._ctx.moveTo(b, u - d), n._ctx.bezierCurveTo(b + f * p, u - d, b + p, u - f * d, b + p, u), n._ctx.bezierCurveTo(b + p, u + f * d, b + f * p, u + d, b, u + d), n._ctx.bezierCurveTo(b - f * p, u + d, b - p, u + f * d, b - p, u), n._ctx.bezierCurveTo(b - p, u - f * d, b - f * p, u - d, b, u - d), n._ctx.stroke();
											break;
										case G.ub:
											var h = (o.pos[2] - o.pos[0]) / 2,
												m = (o.pos[3] - o.pos[1]) / 2,
												g = Math.round(o.pos[0] + h),
												j = Math.round(o.pos[1] + m),
												w = (Math.sqrt(2) - 1) / 3 * 4;
											n._ctx.beginPath(), n._ctx.moveTo(g, j - m), n._ctx.bezierCurveTo(g + w * h, j - m, g + h, j - w * m, g + h, j), n._ctx.bezierCurveTo(g + h, j + w * m, g + w * h, j + m, g, j + m), n._ctx.bezierCurveTo(g - w * h, j + m, g - h, j + w * m, g - h, j), n._ctx.bezierCurveTo(g - h, j - w * m, g - w * h, j - m, g, j - m), n._ctx.fill()
									}
								}
							window.requestAnimationFrame(n._animate)
						}
					})), n._ctx = null, n._paths = [], n._pathsGeo = [], n._coord = null, n._opacities = Date.now(), n._ref = l.a.createRef(), n._timer = !1, n._active = !1, n._color = "50,50,50", n._blocked = !0, n._widthChange = 0, n._zoom = 1, n
				}
				return Object(U.a)(o, [{
					key: "componentDidMount",
					value: function() {
						this.start(), this.props.mobile && (this._zoom = G.b / this._ref.current.offsetHeight, this._widthChange = (G.c / this._zoom - window.innerWidth) / 2), document.addEventListener("mousedown", this._unblock, !1), document.addEventListener("mouseup", this._block, !1), document.addEventListener("mousecancel", this._block, !1), document.addEventListener("touchstart", this._unblock, !1), document.addEventListener("touchend", this._block, !1), document.addEventListener("touchcancel", this._block, !1)
					}
				}, {
					key: "componentWillUnmount",
					value: function() {
						this.stop(), document.removeEventListener("mousedown", this._unblock, !1), document.removeEventListener("mouseup", this._block, !1), document.removeEventListener("mousecancel", this._block, !1), document.removeEventListener("touchstart", this._unblock, !1), document.removeEventListener("touchend", this._block, !1), document.removeEventListener("touchcancel", this._block, !1)
					}
				}, {
					key: "start",
					value: function() {
						var e = this;
						if (!this._active) {
							var t = this._ref.current;
							this._paths = [], this._coord = null, this._opacities = Date.now(), this._ctx = t.getContext("2d"), this._ctx.strokeStyle = "rgb(".concat(this._color, ")"), this._ctx.lineCap = "round", window.requestAnimationFrame(this._animate), document.addEventListener("mousemove", this._move, !0), document.addEventListener("touchmove", this._move, !0), this._timer = setInterval((function() {
								for (var t, o = 0; o < e._paths.length; o++)(t = e._paths[o]).nivel--, 0 === t.nivel && e._paths.splice(o--, 1);
								for (var n = 0; n < e._pathsGeo.length; n++) 6 != (t = e._pathsGeo[n]).nivel && (t.nivel--, 0 === t.nivel && e._pathsGeo.splice(n--, 1));
								e._opacities = Date.now()
							}), 500), this._active = !0
						}
					}
				}, {
					key: "stop",
					value: function() {
						this._active && (this._active = !1, document.removeEventListener("mousemove", this._move, !0), document.removeEventListener("touchmove", this._move, !0), this._timer && clearInterval(this._timer))
					}
				}, {
					key: "render",
					value: function() {
						return Object(n.jsxs)(n.Fragment, {
							children: [Object(n.jsx)("canvas", {
								ref: this._ref,
								width: this.props.width * this.props.density,
								height: this.props.height * this.props.density,
								className: a.a.dynamic([
									["3798211712", [this.props.width, this.props.height]]
								])
							}), Object(n.jsx)(a.a, {
								id: "3798211712",
								dynamic: [this.props.width, this.props.height],
								children: ["canvas.__jsx-style-dynamic-selector{position:absolute;cursor:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:".concat(this.props.width, "px;height:").concat(this.props.height, "px;}")]
							})]
						})
					}
				}]), o
			}(l.a.Component);
			var te = Object(M.c)(ee, (function(e) {
					return {
						scale: e.scale,
						mobile: e.mobile
					}
				})),
				oe = o("TSYQ"),
				ne = o.n(oe),
				ie = [
					[G.zb, "pen"],
					[G.wb, "ers"],
					[G.Bb, "reb"],
					[G.vb, "ellb"],
					[G.Ab, "rec"],
					[G.ub, "ell"],
					[G.yb, "lin"],
					[G.xb, "fil"]
				];
			var re = function(e) {
					return Object(n.jsxs)("div", {
						className: "jsx-3659451671 " + (ne()("tools", {
							disabled: e.disabled,
							submenu: e.submenu
						}) || ""),
						children: [Object(n.jsxs)("div", {
							className: "jsx-3659451671",
							children: [ie.map((function(t) {
								var o = Object(X.a)(t, 2),
									i = o[0],
									r = o[1];
								return Object(n.jsx)("div", {
									onClick: e.disabled ? null : function() {
										return e.onChange(i)
									},
									className: "jsx-3659451671 " + (ne()("tool", r, {
										sel: i == e.value
									}) || "")
								}, i)
							})), Object(n.jsx)("div", {
								onClick: function() {
									return e.onUndo()
								},
								className: "jsx-3659451671 tool undo"
							}), Object(n.jsx)("div", {
								onClick: function() {
									return e.onRedo()
								},
								className: "jsx-3659451671 tool redo"
							})]
						}), Object(n.jsx)(a.a, {
							id: "3396782148",
							children: [".tools.jsx-3659451671{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".tools.jsx-3659451671>div.jsx-3659451671{padding:8px;width:106px;height:298px;border-radius:9px;border:2px rgba(255,142,175,.0) solid;background-color:rgba(94,25,51,.5);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start;}", ".tool.jsx-3659451671{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;cursor:pointer;width:46px;height:50px;border:2px rgba(255,142,175,0.6) solid;border-radius:5px;margin:0 0 7px;}", ".tool.jsx-3659451671:hover{border-color:rgba(255,142,175,1);}", ".tool.jsx-3659451671:hover.jsx-3659451671:after{color:rgba(255,142,175,1);}", ".tool.jsx-3659451671:hover.jsx-3659451671:before{background-color:rgba(216,216,216,.15);}", ".tool.jsx-3659451671:before{content:'';margin:2px;-webkit-flex:1;-ms-flex:1;flex:1;border-radius:3px;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;}", ".tool.sel.jsx-3659451671,.tool.jsx-3659451671:active{border-color:#FFF;}", ".sel.jsx-3659451671:before,.sel.jsx-3659451671:hover.jsx-3659451671:before,.tool.jsx-3659451671:active.jsx-3659451671:before{background-color:rgba(216,216,216,.5);}", ".tool.sel.jsx-3659451671:after,.tool.sel.jsx-3659451671:hover.jsx-3659451671:after,.tool.jsx-3659451671:active.jsx-3659451671:after{color:#FFF;}", ".tool.jsx-3659451671:after{position:absolute;font-family:ico;font-size:25px;color:rgba(255,142,175,0.6);}", ".undo.jsx-3659451671,.redo.jsx-3659451671{margin:0;}", ".pen.jsx-3659451671:after{font-size:29px;content:'\\e905';}", ".ers.jsx-3659451671:after{font-size:30px;content:'\\e903';}", ".lin.jsx-3659451671:after{font-size:30px;content:'\\e902';}", ".reb.jsx-3659451671:after{content:'\\e90a';}", ".ellb.jsx-3659451671:after{content:'\\e90c';}", ".rec.jsx-3659451671:after{content:'\\e909';}", ".ell.jsx-3659451671:after{content:'\\e90b';}", ".fil.jsx-3659451671:after{font-size:29px;content:'\\e904';}", ".undo.jsx-3659451671:after{content:'\\e901';}", ".redo.jsx-3659451671:after{content:'\\e900';}", ".disabled.jsx-3659451671>div.jsx-3659451671{background-color:rgba(94,25,51,.4);border-color:rgba(255,142,175,.3);}", ".disabled.jsx-3659451671 .tool.jsx-3659451671,.disabled.jsx-3659451671 .tool.jsx-3659451671:hover{border-color:rgba(255,142,175,.3);background-color:rgba(255,142,175,.1) !important;cursor:initial;}", ".disabled.jsx-3659451671 .tool.jsx-3659451671:after,.disabled.jsx-3659451671 .tool.jsx-3659451671:hover.jsx-3659451671:after{color:rgba(255,142,175,.3);}", ".disabled.jsx-3659451671 .tool.sel.jsx-3659451671:before,.disabled.jsx-3659451671 .tool.jsx-3659451671:active.jsx-3659451671:before,.disabled.jsx-3659451671 .tool.jsx-3659451671:hover.jsx-3659451671:before{display:none;}", "@media (max-width:640px){.tools.jsx-3659451671{position:absolute;bottom:85px;left:0;display:none;}.tools.submenu.jsx-3659451671{display:inherit;}.tools.jsx-3659451671>div.jsx-3659451671{padding:5px;width:96px;height:254px;border-width:0;background:transparent;}.tool.jsx-3659451671{width:42px;height:44px;border:2px #9C81CB solid;border-radius:4px;margin:0 0 3px;}.tool.jsx-3659451671:before{margin:1px;background-color:rgba(255,255,255,.75);}.tool.jsx-3659451671:after{color:#9C81CB;}.tool.jsx-3659451671:hover{border-color:#9C81CB;}.tool.jsx-3659451671:hover.jsx-3659451671:after{color:#FFF;}.tool.jsx-3659451671:hover.jsx-3659451671:before{background-color:rgba(156,129,203,.8);}.tool.sel.jsx-3659451671,.tool.jsx-3659451671:active{border-color:#9C81CB;}.sel.jsx-3659451671:before,.sel.jsx-3659451671:hover.jsx-3659451671:before,.tool.jsx-3659451671:active.jsx-3659451671:before{background-color:rgba(156,129,203,.8);}.tool.sel.jsx-3659451671:after,.tool.sel.jsx-3659451671:hover.jsx-3659451671:after,.tool.jsx-3659451671:active.jsx-3659451671:after{color:#FFF;}}"]
						}), Object(n.jsx)(a.a, {
							id: "3185328314",
							children: ["@media (max-width:640px){.ar .tools{left:initial;right:0;}}"]
						})]
					})
				},
				se = ["#000000", "#666666", "#0050CD", "#FFFFFF", "#AAAAAA", "#26C9FF", "#017420", "#691506", "#964112", "#11B03C", "#FF0013", "#FF7829", "#B0701C", "#99004E", "#CB5A57", "#FFC126", "#FF008F", "#FEAFA8"];
			var ae = function(e) {
					var t = e.value,
						o = e.disabled,
						i = e.onChange;
					return Object(n.jsxs)("div", {
						className: "jsx-3071142060 " + (ne()("colors", {
							disabled: o
						}) || ""),
						children: [Object(n.jsxs)("div", {
							className: "jsx-3071142060",
							children: [se.map((function(e) {
								return Object(n.jsx)("div", {
									style: {
										backgroundColor: e
									},
									onClick: o ? null : function() {
										return i(e)
									},
									className: "jsx-3071142060 " + (ne()("color", {
										sel: e == t
									}) || "")
								}, e)
							})), Object(n.jsx)("input", {
								disabled: o,
								type: "color",
								value: o ? "#AF3B4E" : t,
								onChange: function(e) {
									return i(e.target.value)
								},
								className: "jsx-3071142060"
							})]
						}), Object(n.jsx)(a.a, {
							id: "3071142060",
							children: [".colors.jsx-3071142060{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".colors.jsx-3071142060>div.jsx-3071142060{padding:10px 8px;width:106px;height:296px;border-radius:9px;background-color:rgba(94,25,51,.5);border:2px rgba(94,25,51,0) solid;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start;}", ".color.jsx-3071142060{border:2px solid #4F163A;width:28px;height:29px;border-radius:4px;cursor:pointer;margin:0 0 7px;}", "input.jsx-3071142060{border:2px solid #4F163A;border-radius:5px;width:102px;height:52px;padding:0;-webkit-appearance:none;cursor:pointer;background:none;}", 'input[type="color"].jsx-3071142060::-webkit-color-swatch-wrapper{padding:0;border-radius:4px;}', 'input[type="color"].jsx-3071142060::-webkit-color-swatch{border:none;border-radius:4px;}', ".disabled.jsx-3071142060>div.jsx-3071142060{background-color:rgba(94,25,51,.4);border-color:rgba(255,142,175,.3);}", ".disabled.jsx-3071142060 .color.jsx-3071142060{border-color:rgba(255,142,175,.3);background-color:rgba(255,142,175,.1) !important;cursor:initial;}", "input.jsx-3071142060:disabled{cursor:initial;border-color:rgba(255,142,175,.3);}", "@media (max-width:640px){input.jsx-3071142060{display:none;}.colors.jsx-3071142060{overflow:scroll;margin:0 5px;width:124px;height:52px;border-radius:4px;background-color:rgba(94,25,51,.5);border:2px rgba(94,25,51,0) solid;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.disabled.jsx-3071142060{background-color:rgba(94,25,51,.4);border-color:rgba(255,142,175,.3);}.disabled.jsx-3071142060>div.jsx-3071142060{background-color:transparent;border-color:transparent;}.colors.jsx-3071142060>div.jsx-3071142060{width:217px;height:auto;background-color:transparent;padding:0;border-radius:0;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.color.jsx-3071142060{border:1px solid #4F163A;width:18px;height:18px;border-radius:2px;margin:2px;}.sel.jsx-3071142060{box-shadow:0 0 0 1px rgba(255,255,255,.6);}.disabled.jsx-3071142060>div.jsx-3071142060 .sel.jsx-3071142060{box-shadow:none;}}"]
						})]
					})
				},
				ce = [2, 6, 10, 14, 18];
			var xe = function(e) {
					return Object(n.jsxs)("div", {
						className: "jsx-340028725 " + (ne()("options", {
							disabled: e.disabled,
                            submenu: e.submenu
                        }) || ""),
                        children: [Object(n.jsx)("div", {
                            className: "jsx-340028725",
                            children: [ce.map((function(t) {
                                return Object(n.jsx)("div", {
                                    onClick: e.disabled ? null : function() {
                                        document.getElementsByClassName("thikness-input")[0].value=t;
                                        return e.onChangeThickness(t)
                                    },
                                    className: "jsx-340028725 " + (ne()("thickness", {
                                        sel: e.thickness == t
                                    }) || "")
                                }, t)
                            })), [Object(n.jsx)("span", {
                                className: "jsx-340028725"
                            }), Object(n.jsx)("input", {
                                //disabled: e.disabled,
                                maxLength: 3,
                                type: "text",
                                onChange: function(t) {
                                    if (t.target.value>500){t.target.value=500;}
                                    if (t.target.value=="00" || t.target.value=="000"){t.target.value=0;}
                                    t.target.value = t.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')
                                    return e.onChangeThickness(t.target.value);
                                },
                                className: "thikness-input"
                            }), Object(n.jsx)("span", {
                                className: "jsx-340028725"
                            })]]
                        }), Object(n.jsxs)("div", {
							className: "jsx-340028725 bxopacity",
							children: [Object(n.jsx)("span", {
								className: "jsx-340028725"
							}), Object(n.jsx)("input", {
								disabled: e.disabled,
								type: "range",
								value: e.opacity,
								min: "0.1",
								max: "1",
								step: "0.1",
								onChange: function(t) {
									return e.onChangeOpacity(t.target.value)
								},
								className: "jsx-340028725"
							}), Object(n.jsx)("span", {
								className: "jsx-340028725"
							})]
						}), Object(n.jsx)(a.a, {
							id: "2464861888",
							children: [".options.jsx-340028725{width:560px;height:54px;padding:3px;border-radius:9px;background-color:rgba(94,25,51,.5);border:2px rgba(94,25,51,0) solid;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", ".options.jsx-340028725>div.jsx-340028725{padding:0 15px;-webkit-flex:1;-ms-flex:1;flex:1;border:2px rgba(255,142,175,.6) solid;border-radius:9px;margin:4px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".thickness.jsx-340028725{cursor:pointer;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:2px rgba(255,142,175,0.6) solid;width:28px;height:28px;border-radius:100%;}", ".thickness.jsx-340028725:hover{border-color:rgba(255,142,175,1);}", ".thickness.jsx-340028725:hover.jsx-340028725:before{background-color:rgba(255,142,175,1);}", ".thickness.jsx-340028725:hover.jsx-340028725:after{background-color:rgba(216,216,216,.15);}", ".thickness.jsx-340028725:before{position:absolute;content:'';background-color:rgba(255,142,175,0.6);border-radius:100%;}", ".thickness.jsx-340028725:after{content:'';margin:2px;-webkit-flex:1;-ms-flex:1;flex:1;border-radius:3px;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;border-radius:50%;}", ".thickness.sel.jsx-340028725,.thickness.sel.jsx-340028725:hover{border-color:#FFF;}", ".thickness.sel.jsx-340028725:before,.thickness.sel.jsx-340028725:hover.jsx-340028725:before{background-color:#FFF;}", ".thickness.sel.jsx-340028725:after,.thickness.sel.jsx-340028725:hover.jsx-340028725:after{background-color:rgba(216,216,216,.5);}", ".thickness.jsx-340028725:nth-child(1):before{width:2px;height:2px;}", ".thickness.jsx-340028725:nth-child(2):before{width:6px;height:6px;}", ".thickness.jsx-340028725:nth-child(3):before{width:10px;height:10px;}", ".thickness.jsx-340028725:nth-child(4):before{width:14px;height:14px;}", ".thickness.jsx-340028725:nth-child(5):before{width:18px;height:18px;}", ".bxopacity.jsx-340028725 span.jsx-340028725{width:18px;height:18px;border:2px #FFF solid;border-radius:50%;}", ".bxopacity.jsx-340028725 span.jsx-340028725:nth-of-type(1){background-color:rgba(255,255,255,.34);}", ".bxopacity.jsx-340028725 span.jsx-340028725:nth-of-type(2){background-color:#FFF;}", "input[type=range].jsx-340028725{background:none;-webkit-appearance:none;width:170px;}", "input[type=range].jsx-340028725:focus{outline:none;}", "input[type=range].jsx-340028725::-webkit-slider-runnable-track{width:100%;height:5px;cursor:pointer;-webkit-animate:0.2s-jsx-340028725;animate:0.2s-jsx-340028725;box-shadow:0px 0px 0px #000000;background:#4F163A;border-radius:5px;border:0px solid #000000;}", "input[type=range].jsx-340028725:disabled.jsx-340028725::-webkit-slider-runnable-track{background:rgba(255,142,175,.3);}", "input[type=range].jsx-340028725::-webkit-slider-thumb{border:none;height:20px;width:20px;border-radius:50px;background:#E16D8F;cursor:pointer;-webkit-appearance:none;margin-top:-8px;}", "input[type=range].jsx-340028725:hover.jsx-340028725::-webkit-slider-thumb{background:#F8A8BF;}", "input[type=range].jsx-340028725:disabled.jsx-340028725::-webkit-slider-thumb{display:none;}", "input[type=range].jsx-340028725:focus.jsx-340028725::-webkit-slider-runnable-track{background:#4F163A;}", "input[type=range].jsx-340028725::-moz-range-track{width:100%;height:5px;cursor:pointer;-webkit-animate:0.2s-jsx-340028725;animate:0.2s-jsx-340028725;box-shadow:0px 0px 0px #000000;background:#4F163A;border-radius:5px;border:0px solid #000000;}", "input[type=range].jsx-340028725:disabled.jsx-340028725::-moz-range-track{background:rgba(255,142,175,.3);}", "input[type=range].jsx-340028725::-moz-range-thumb{border:none;height:20px;width:20px;border-radius:50px;background:#E16D8F;cursor:pointer;}", "input[type=range].jsx-340028725:hover.jsx-340028725::-moz-range-thumb{background:#F8A8BF;}", "input[type=range].jsx-340028725:disabled.jsx-340028725::-moz-range-thumb{display:none;}", "input[type=range].jsx-340028725::-ms-track{width:100%;height:5px;cursor:pointer;-webkit-animate:0.2s-jsx-340028725;animate:0.2s-jsx-340028725;background:transparent;border-color:transparent;color:transparent;}", "input[type=range].jsx-340028725::-ms-fill-lower{background:#4F163A;border:0px solid #000000;border-radius:10px;box-shadow:0px 0px 0px #000000;}", "input[type=range].jsx-340028725:disabled.jsx-340028725::-ms-fill-lower{background:rgba(255,142,175,.3);}", "input[type=range].jsx-340028725::-ms-fill-upper{background:#4F163A;border:0px solid #000000;border-radius:10px;box-shadow:0px 0px 0px #000000;}", "input[type=range].jsx-340028725::-ms-thumb{border:none;height:20px;width:20px;border-radius:50px;background:#E16D8F;cursor:pointer;}", "input[type=range].jsx-340028725:hover.jsx-340028725::-ms-thumb{background:#F8A8BF;}", "input[type=range].jsx-340028725:disabled.jsx-340028725::-ms-thumb{display:none;}", "input[type=range].jsx-340028725:focus.jsx-340028725::-ms-fill-lower{background:#4F163A;}", "input[type=range].jsx-340028725:focus.jsx-340028725::-ms-fill-upper{background:#4F163A;}", ".disabled.jsx-340028725{background-color:rgba(94,25,51,.4);border-color:rgba(255,142,175,.3);}", ".disabled.jsx-340028725>div.jsx-340028725,.disabled.jsx-340028725 .thickness.jsx-340028725,.disabled.jsx-340028725 .thickness.jsx-340028725:hover{cursor:initial;border-color:rgba(255,142,175,.3);}", ".disabled.jsx-340028725 .thickness.sel.jsx-340028725:after,.disabled.jsx-340028725 .thickness.sel.jsx-340028725:hover.jsx-340028725:after,.disabled.jsx-340028725 .thickness.jsx-340028725:hover.jsx-340028725:after{display:none;}", ".disabled.jsx-340028725 .thickness.jsx-340028725:before,.disabled.jsx-340028725 .thickness.jsx-340028725:hover.jsx-340028725:before{background-color:rgba(255,142,175,.3);}", ".disabled.jsx-340028725 .bxopacity.jsx-340028725 span.jsx-340028725{border-color:rgba(255,142,175,0);background-color:rgba(255,142,175,.3);}", ".disabled.jsx-340028725 .bxopacity.jsx-340028725 span.jsx-340028725:nth-of-type(1){border-color:rgba(255,142,175,.3);background-color:rgba(255,142,175,0);}", "@media (max-width:640px){.options.jsx-340028725{width:90px;height:197px;border-radius:0;border-width:0;background:transparent;display:none;}.options.submenu.jsx-340028725{display:inherit;}.options.jsx-340028725>div.jsx-340028725{background-color:rgba(255,255,255,.75);padding:5px;border-color:#9C81CB;border-radius:5px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:calc(100% - 10px);margin:0 4px;}.thickness.jsx-340028725{border-color:#9C81CB;width:26px;height:26px;}.thickness.jsx-340028725:before{background-color:#9C81CB;}.thickness.jsx-340028725:hover{border-color:#9C81CB;}.thickness.jsx-340028725:hover.jsx-340028725:before{background-color:#9C81CB;}.thickness.jsx-340028725:hover.jsx-340028725:after{background-color:rgba(156,129,203,.7);}.thickness.sel.jsx-340028725,.thickness.sel.jsx-340028725:hover{border-color:#9C81CB;}.thickness.sel.jsx-340028725:before,.thickness.sel.jsx-340028725:hover.jsx-340028725:before{background-color:#9C81CB;}.thickness.sel.jsx-340028725:after,.thickness.sel.jsx-340028725:hover.jsx-340028725:after{background-color:rgba(156,129,203,.7);}.bxopacity.jsx-340028725{width:30px;}.bxopacity.jsx-340028725 span.jsx-340028725{border-color:#9C81CB;}.bxopacity.jsx-340028725 span.jsx-340028725:nth-of-type(1){background-color:#9C81CB;}.bxopacity.jsx-340028725 span.jsx-340028725:nth-of-type(2){background-color:transparent;}input[type=range].jsx-340028725{width:120px;-webkit-transform:rotateZ(-90deg);-ms-transform:rotateZ(-90deg);transform:rotateZ(-90deg);}input[type=range].jsx-340028725::-webkit-slider-runnable-track{background:#9C81CB;}input[type=range].jsx-340028725::-webkit-slider-thumb{border:2px #9C81CB solid;background:#FFF;}input[type=range].jsx-340028725:hover.jsx-340028725::-webkit-slider-thumb{background:#9C81CB;}}"]
						}), Object(n.jsx)(a.a, {
							id: "4060568284",
							children: ["@media (max-width:640px){.ar .options .bxopacity span:nth-of-type(1){background-color:transparent;}.ar .options .bxopacity span:nth-of-type(2){background-color:#9C81CB;}}"]
						})]
					})
				},
				le = o("cXB8"),
				pe = o("6VPp"),
				de = o("umcP"),
				be = o("WZCv");
			var ue = function(e) {
				return Object(n.jsxs)("div", {
					className: "jsx-1759433088 toolsmobile",
					children: [Object(n.jsx)("button", {
						onClick: function() {
							return e.onChange(G.ob)
						},
						disabled: e.disabled,
						className: "jsx-1759433088 " + ("tool " + ["pen", "ers", "lin", "reb", "ellb", "rec", "ell", "fil"][e.value - 1] || !1)
					}), Object(n.jsx)("button", {
						onClick: function() {
							return e.onChange(G.nb)
						},
						disabled: e.disabled,
						className: "jsx-1759433088 opacity"
					}), e.children, Object(n.jsx)(a.a, {
						id: "241478012",
						children: [".toolsmobile.jsx-1759433088{-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;padding:10px 5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}", "button.jsx-1759433088{margin:0 0 0 5px;width:50px;height:52px;border-radius:3px;background:#FFFFFF;border:none;box-shadow:0 3px 0 #CBC6D8;color:#481D92;}", "button.jsx-1759433088:active{-webkit-transform:translateY(2px);-ms-transform:translateY(2px);transform:translateY(2px);background-color:#C2AEE3;box-shadow:0 1px 0 #CBC6D8;}", "button.jsx-1759433088:disabled{opacity:.47;cursor:none;}", "button.jsx-1759433088:nth-of-type(1){margin:0;}", ".toolsmobile.jsx-1759433088>.small{width:50px;height:52px;border-radius:3px;background:#FFFFFF;border:none;box-shadow:0 3px 0 #CBC6D8;padding:0;}", ".toolsmobile.jsx-1759433088>.small:active{margin:0;-webkit-transform:translateY(2px);-ms-transform:translateY(2px);transform:translateY(2px);background-color:#C2AEE3;box-shadow:0 1px 0 #CBC6D8;}", ".toolsmobile.jsx-1759433088>.small strong{display:none;}", ".toolsmobile.jsx-1759433088>.small .pencil{width:27px;height:28px;background-image:url(/images/edit_m.svg);}", ".toolsmobile.jsx-1759433088>.small .ready{width:27px;height:22px;background-image:url(/images/check_m.svg);}", ".opacity.jsx-1759433088:before{content:'\\e913';font-family:ico;font-size:30px;}", ".tool.jsx-1759433088:after{font-family:ico;font-size:25px;}", ".pen.jsx-1759433088:after{font-size:29px;content:'\\e905';}", ".ers.jsx-1759433088:after{font-size:30px;content:'\\e903';}", ".lin.jsx-1759433088:after{font-size:30px;content:'\\e902';}", ".reb.jsx-1759433088:after{content:'\\e90a';}", ".ellb.jsx-1759433088:after{content:'\\e90c';}", ".rec.jsx-1759433088:after{content:'\\e909';}", ".ell.jsx-1759433088:after{content:'\\e90b';}", ".fil.jsx-1759433088:after{font-size:29px;content:'\\e904';}"]
					}), Object(n.jsx)(a.a, {
						id: "3760199605",
						children: [".ar .toolsmobile button{margin:0;}", ".ar .toolsmobile button:nth-of-type(2){margin-right:5px;}"]
					})]
				})
			};

			function fe() {
				var e = Object(i.a)(["drawtxt2"]);
				return fe = function() {
					return e
				}, e
			}

			function he() {
				var e = Object(i.a)(["drawtxt1"]);
				return he = function() {
					return e
				}, e
			}
			var me = !0;
			t.default = Object(M.c)((function(e) {
				var t = Object(c.d)(),
					o = Object(p.useRouter)(),
					i = Object(x.useState)(e.turnNum)[0],
					s = Object(x.useState)(e.previous)[0],
					l = Object(x.useState)([]),
					d = l[0],
					b = l[1],
					u = Object(x.useState)([]),
					f = u[0],
					h = u[1],
					m = Object(x.useState)(1),
					g = m[0],
					j = m[1],
					w = Object(x.useState)("#000000"),
					y = w[0],
					k = w[1],
					v = Object(x.useState)(1),
					_ = v[0],
					O = v[1],
					F = Object(x.useState)(6),
					C = F[0],
					E = F[1],
					z = Object(x.useState)(!1),
					T = z[0],
					N = z[1],
					L = Object(x.useState)(G.mb),
					S = L[0],
					B = L[1],
					A = Object(x.useRef)(),
					M = Object(x.useRef)(),
					X = Object(x.useRef)();

				function q(e) {
					k(e), B(G.mb)
				}

				function U() {
					T || (b((function(e) {
						var t = e.slice();
						return t.length && A.current.push(t.pop()), t
					})), B(G.mb), V(!1))
				}

				function W() {
					if (!T && A.current.length) {
						var e = A.current.pop();
						b((function(t) {
							return [].concat(Object(r.a)(t), [e])
						})), B(G.mb), V(e)
					}
				}

				function H(e) {
					N(e), B(G.mb)
				}

				function V(t) {
					i == e.turnNum && e.emit(G.F, {
						t: i,
						v: t
					})
				}
				Object(x.useEffect)((function() {
					document.body.style.backgroundImage = "linear-gradient(215deg, rgba(153,16,80,1) 0%, rgba(231,77,78,1) 85%)", e.socket ? (o.prefetch("/write"), o.prefetch("/memory"), o.prefetch("/book"), A.current = [], e.previous && e.previous.type == G.Fb || R.a.play("yourTurn", !1, .7)) : o.replace("/")
				}), []), Object(x.useEffect)((function() {
					if (!T) {
						var t = [],
							o = M.current;
						o.addEventListener("mousedown", a, !1), o.addEventListener("touchstart", a, !1);
						var n = 1,
							i = 0;
						e.mobile && (n = G.b / o.offsetHeight, i = (G.c / n - window.innerWidth) / 2);
						var s = e.scale / n;
						return function() {
							o.removeEventListener("mousedown", a, !1), o.removeEventListener("touchstart", a, !1)
						}
					}

					function a(e) {
						e.preventDefault(), B(G.mb), g == G.xb ? (V(t = [g, [y, _]].concat(Object(r.a)(D.apply(void 0, [X.current.getContext("2d")].concat(Object(r.a)(K(e, o, s / G.d, i)), [y, G.c * G.d, G.b * G.d])).map((function(e) {
							return Math.round(e / G.d)
						}))))), b((function(e) {
							return [].concat(Object(r.a)(e), [t])
						}))) : (t = g != G.wb ? [g, [y, C, _], K(e, o, s, i)] : [g, 2 * C, K(e, o, s, i)], document.addEventListener("mousemove", c, !1), document.addEventListener("touchmove", c, !1), document.addEventListener("mouseup", x, !1), document.addEventListener("mousecancel", x, !1), document.addEventListener("touchend", x, !1), document.addEventListener("touchcancel", x, !1), h([t])), A.current.splice(0)
					}

					function c(e) {
						e.stopPropagation(), g == G.zb || g == G.wb ? t.push(K(e, o, s, i)) : t[3] = K(e, o, s, i), h([t])
					}

					function x() {
						V(t), document.removeEventListener("mousemove", c, !1), document.removeEventListener("touchmove", c, !1), document.removeEventListener("mouseup", x, !1), document.removeEventListener("mousecancel", x, !1), document.removeEventListener("touchend", x, !1), document.removeEventListener("touchcancel", x, !1), b((function(e) {
							return [].concat(Object(r.a)(e), [t])
						})), h([])
					}
				}), [e.scale, y, C, _, d, g, T, e.mobile]), P("ctrl+z, command+z", U, [T]), P("ctrl+shift+z, command+shift+z", W, [T]);
				var Z = s && s.type == G.Gb;
				return Object(n.jsxs)("div", {
					className: "jsx-1562482592 draw",
					children: [Object(n.jsx)(le.a, {
						color: e.mobile ? "#481D92" : "#C02F4E"
					}), Object(n.jsx)(pe.a, {
						value: G.rb
					}), !e.mobile && Object(n.jsx)(ae, {
						disabled: T,
						onChange: q,
						value: y
					}), Object(n.jsxs)("div", {
						className: "jsx-1562482592 center",
						children: [Object(n.jsx)(be.a, {
							draw: !Z,
							subtitle: t(Z ? he() : fe()),
							title: Z ? s.data : "",
							dark: e.hidden,
							children: Object(n.jsxs)("div", {
								ref: M,
								className: "jsx-1562482592 drawingContainer",
								children: [Object(n.jsx)(Y.a, {
									ref: X,
									data: d,
									width: G.c,
									height: G.b,
									density: G.d,
									hidden: e.hidden
								}), !e.hidden && Object(n.jsx)(Y.a, {
									data: f,
									width: G.c,
									height: G.b,
									density: G.d
								}), e.hidden && Object(n.jsx)(te, {
									width: G.c,
									height: G.b,
									density: G.d,
									tool: g,
									thickness: C
								}), !T && !e.mobile && Object(n.jsx)(I, {
									width: G.c,
									height: G.b,
									thickness: [G.xb, G.Ab, G.ub].includes(g) ? 2 : g != G.wb ? C : 2 * C,
									density: G.d,
									hidden: e.hidden
								})]
							})
						}), Object(n.jsxs)("div", {
							className: "jsx-1562482592 bottom",
							children: [Object(n.jsx)(xe, {
								disabled: T,
								onChangeThickness: function(e) {
									E(e), B(G.mb)
								},
								onChangeOpacity: function(e) {
									return O(e)
								},
								thickness: C,
								opacity: _,
								submenu: S == G.nb
							}), !e.mobile && Object(n.jsx)(de.a, {
								disabled: !d.length,
								onChange: H
							})]
						})]
					}), e.mobile && Object(n.jsxs)(ue, {
						disabled: T,
						value: g,
						onChange: function(e) {
							T || B((function(t) {
								return t == e ? G.mb : e
							}))
						},
						children: [Object(n.jsx)(ae, {
							disabled: T,
							onChange: q,
							value: y
						}), Object(n.jsx)(de.a, {
							disabled: !d.length,
							onChange: H
						})]
					}), Object(n.jsx)(re, {
						disabled: T,
						onChange: function(e) {
							j(e), B(G.mb)
						},
						value: g,
						onUndo: U,
						onRedo: W,
						submenu: S == G.ob
					}), Object(n.jsx)(a.a, {
						id: "2448119299",
						children: [".draw.jsx-1562482592{position:relative;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".center.jsx-1562482592{padding:35px 0 25px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", ".drawingContainer.jsx-1562482592{position:relative;}", ".bottom.jsx-1562482592{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:60px;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", "@media (max-width:640px){.draw.jsx-1562482592{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:relative;}.center.jsx-1562482592{-webkit-flex:1;-ms-flex:1;flex:1;padding:0;}.draw.jsx-1562482592>.step,.draw.jsx-1562482592>.time{top:10px;}.draw.jsx-1562482592 .center.jsx-1562482592>.book{border-radius:0;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;width:auto;height:auto;-webkit-flex:1;-ms-flex:1;flex:1;box-shadow:0px -2px 0px 0px #6E46D5,0px 2px 0px 0px #011946,0 4px 2px 0 rgba(0,0,0,0.50);}.draw.jsx-1562482592 .center.jsx-1562482592>.book:before{display:none;}.draw.jsx-1562482592 .center.jsx-1562482592>.book .header{height:65px;}.draw.jsx-1562482592 .center.jsx-1562482592>.book .header h3{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:10px;padding:0 68px;}.draw.jsx-1562482592 .center.jsx-1562482592>.book .core{margin:0 0 10px;border-radius:0;box-shadow:0px 1px 0px 0px #C4C4C4,0px 2px 0px 0px #FFF,0px 3px 0px 0px #C4C4C4,0px 4px 0px 0px #FFF,0px 5px 0px 0px #C4C4C4,0px 6px 0px 0px #FFF;}.draw.jsx-1562482592 .center.jsx-1562482592>.dark .core{margin:0 0 10px;border-radius:0;box-shadow:0px 1px 0px 0px #343434,0px 2px 0px 0px #000000,0px 3px 0px 0px #343434,0px 4px 0px 0px #000000,0px 5px 0px 0px #343434,0px 6px 0px 0px #000000;}.bottom.jsx-1562482592{position:absolute;left:0;bottom:93px;height:auto;width:auto;}.drawingContainer.jsx-1562482592{-webkit-flex:1;-ms-flex:1;flex:1;}.drawingContainer.jsx-1562482592 canvas{height:100% !important;width:auto;left:50%;-webkit-transform:translate(-50%,0);-ms-transform:translate(-50%,0);transform:translate(-50%,0);}}"]
					}), Object(n.jsx)(a.a, {
						id: "273907530",
						children: [".ar .draw .book .core{direction:initial;}", "@media (max-width:640px){.ar .draw .bottom{left:initial;right:0px;}}"]
					})]
				})
			}), (function(e) {
				return {
					socket: e.socket,
					previous: e.data.previous,
					emit: e.emit,
					mobile: e.mobile,
					scale: e.scale,
					hidden: e.data.configs.visible == G.Hb,
					turnNum: e.data.turnNum
				}
			}))
		},
		TSYQ: function(e, t, o) {
			var n;
			! function() {
				"use strict";
				var o = {}.hasOwnProperty;

				function i() {
					for (var e = [], t = 0; t < arguments.length; t++) {
						var n = arguments[t];
						if (n) {
							var r = typeof n;
							if ("string" === r || "number" === r) e.push(n);
							else if (Array.isArray(n) && n.length) {
								var s = i.apply(null, n);
								s && e.push(s)
							} else if ("object" === r)
								for (var a in n) o.call(n, a) && n[a] && e.push(a)
						}
					}
					return e.join(" ")
				}
				e.exports ? (i.default = i, e.exports = i) : void 0 === (n = function() {
					return i
				}.apply(t, [])) || (e.exports = n)
			}()
		},
		WZCv: function(e, t, o) {
			"use strict";
			var n = o("nKUr"),
				i = o("MX0m"),
				r = o.n(i),
				s = o("Ya7B"),
				a = o("TSYQ"),
				c = o.n(a),
				x = o("f5HD");
			t.a = Object(s.c)((function(e) {
				var t = e.draw,
					o = e.subtitle,
					i = e.title,
					s = e.children,
					a = e.dark;
				return Object(n.jsxs)("div", {
					className: "jsx-1307288772 " + (c()("book", {
						dark: a
					}) || ""),
					children: [Object(n.jsxs)("div", {
						className: "jsx-1307288772 header",
						children: [Object(n.jsx)(x.a, {}), Object(n.jsx)("div", {
							className: "jsx-1307288772 logo",
							children: Object(n.jsx)("figure", {
								className: "jsx-1307288772"
							})
						}), Object(n.jsx)("h4", {
							className: "jsx-1307288772 " + (t ? "drawing" : ""),
							children: o
						}), Object(n.jsx)("h3", {
							className: "jsx-1307288772",
							children: i
						})]
					}), Object(n.jsx)("div", {
						className: "jsx-1307288772 core",
						children: s
					}), Object(n.jsx)(r.a, {
						id: "436413053",
						children: [".book.jsx-1307288772{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:770px;height:562px;background-color:#301A6B;border-radius:9px;box-shadow:0px -3px 0px 0px #6E46D5,0px 2px 0px 0px #011946,0 8px 4px 0 rgba(0,0,0,0.50);}", ".book.jsx-1307288772:before{content:'';width:518px;height:59px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);top:-20px;position:absolute;background-image:url(/images/argolas.png);background-repeat:no-repeat;z-index:4;}", ".header.jsx-1307288772{background-color:#481D92;height:102px;border-radius:9px 9px 0 0;box-shadow:inset 0px -2px 0px 0px #6E46D5;border-bottom:6px #160839 solid;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;z-index:2;}", ".logo.jsx-1307288772{margin:-3px 0 6px;width:178px;height:44px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-image:url(/images/bx_logo.png);}", ".logo.jsx-1307288772 figure.jsx-1307288772{width:72px;height:20px;background-size:cover;background-image:url(/images/logo.svg);background-repeat:no-repeat;}", 'h4.jsx-1307288772{font-family:"Black";font-size:16px;color:#43DE99;-webkit-letter-spacing:1.6px;-moz-letter-spacing:1.6px;-ms-letter-spacing:1.6px;letter-spacing:1.6px;text-align:center;margin:0 0 2px;}', ".tooltip.jsx-1307288772{width:50px;height:40px;position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;top:10px;left:10px;background-repeat:no-repeat;background-position:center;cursor:pointer;}", ".tooltip.jsx-1307288772:hover>.tooltip{display:block;}", ".tooltip.jsx-1307288772 section.jsx-1307288772>.tooltip{width:160px;}", ".ic_freestyle.jsx-1307288772{background-image:url('/images/freestyle.svg');}", ".ic_details.jsx-1307288772{background-image:url('/images/details.svg');}", ".ic_mistery.jsx-1307288772{background-image:url('/images/mistery.svg');}", ".drawing.jsx-1307288772{font-size:22px;margin:14px 0 0 0;}", 'h3.jsx-1307288772{font-family:"Black";font-size:27px;color:#FFFFFF;text-align:center;line-height:29px;text-transform:uppercase;text-shadow:rgb(23,5,87) 4px 0px 0px,rgb(23,5,87) 3.87565px 0.989616px 0px,rgb(23,5,87) 3.51033px 1.9177px 0px,rgb(23,5,87) 2.92676px 2.72656px 0px,rgb(23,5,87) 2.16121px 3.36588px 0px,rgb(23,5,87) 1.26129px 3.79594px 0px,rgb(23,5,87) 0.282949px 3.98998px 0px,rgb(23,5,87) -0.712984px 3.93594px 0px,rgb(23,5,87) -1.66459px 3.63719px 0px,rgb(23,5,87) -2.51269px 3.11229px 0px,rgb(23,5,87) -3.20457px 2.39389px 0px,rgb(23,5,87) -3.69721px 1.52664px 0px,rgb(23,5,87) -3.95997px 0.56448px 0px,rgb(23,5,87) -3.97652px -0.432781px 0px,rgb(23,5,87) -3.74583px -1.40313px 0px,rgb(23,5,87) -3.28224px -2.28625px 0px,rgb(23,5,87) -2.61457px -3.02721px 0px,rgb(23,5,87) -1.78435px -3.57996px 0px,rgb(23,5,87) -0.843183px -3.91012px 0px,rgb(23,5,87) 0.150409px -3.99717px 0px,rgb(23,5,87) 1.13465px -3.8357px 0px,rgb(23,5,87) 2.04834px -3.43574px 0px,rgb(23,5,87) 2.83468px -2.82216px 0px,rgb(23,5,87) 3.44477px -2.03312px 0px,rgb(23,5,87) 3.84068px -1.11766px 0px,rgb(23,5,87) 3.9978px -0.132717px 0px;}', ".core.jsx-1307288772{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;margin:0 6px 30px;background-color:#FFF;background-image:url(/images/bgcanvas.svg);background-repeat:no-repeat;background-position:center;border-radius:0 0 9px 9px;box-shadow:0px 2px 0px 0px #C4C4C4,0px 4px 0px 0px #FFF,0px 6px 0px 0px #C4C4C4,0px 8px 0px 0px #FFF,0px 10px 0px 0px #C4C4C4,0px 12px 0px 0px #FFF,0px 14px 0px 0px #C4C4C4,0px 16px 0px 0px #FFF,0px 18px 0px 0px #160C30;overflow:hidden;}", ".dark.jsx-1307288772 .core.jsx-1307288772{background-color:#000000;background-image:url(/images/bgcanvas_dark.svg);box-shadow:0px 2px 0px 0px #343434,0px 4px 0px 0px #000000,0px 6px 0px 0px #343434,0px 8px 0px 0px #000000,0px 10px 0px 0px #343434,0px 12px 0px 0px #000000,0px 14px 0px 0px #343434,0px 16px 0px 0px #000000,0px 18px 0px 0px #160C30;}", "@media (max-width:640px){.book.jsx-1307288772{width:312px;height:240px;border-radius:5px;box-shadow:0px -2px 0px 0px #6E46D5,0px 2px 0px 0px #011946,0 8px 4px 0 rgba(0,0,0,0.50);}.book.jsx-1307288772:before{content:'';width:219px;height:25px;top:-10px;background-size:cover;}.header.jsx-1307288772{height:45px;border-radius:6px 6px 0 0;box-shadow:inset 0px -1px 0px 0px #6E46D5;border-bottom:2px #160839 solid;}.header.jsx-1307288772>.sound{display:none;}.logo.jsx-1307288772{display:none;}h4.jsx-1307288772{margin:8px 0 5px;font-size:10px;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;}.drawing.jsx-1307288772{font-size:13px;margin:20px 70px 0;}h3.jsx-1307288772{font-size:14px;line-height:14px;text-shadow:rgb(23,5,87) 2px 0px 0px,rgb(23,5,87) 1.75517px 0.958851px 0px,rgb(23,5,87) 1.0806px 1.68294px 0px,rgb(23,5,87) 0.141474px 1.99499px 0px,rgb(23,5,87) -0.832294px 1.81859px 0px,rgb(23,5,87) -1.60229px 1.19694px 0px,rgb(23,5,87) -1.97998px 0.28224px 0px,rgb(23,5,87) -1.87291px -0.701566px 0px,rgb(23,5,87) -1.30729px -1.5136px 0px,rgb(23,5,87) -0.421592px -1.95506px 0px,rgb(23,5,87) 0.567324px -1.91785px 0px,rgb(23,5,87) 1.41734px -1.41108px 0px,rgb(23,5,87) 1.92034px -0.558831px 0px;}.core.jsx-1307288772{margin:0 6px 25px;background-color:#FFF;background-image:url(/images/bgcanvas_mobile.svg);background-size:500px 900px;border-radius:0 0 5px 5px;}.dark.jsx-1307288772 .core.jsx-1307288772{background-image:url(/images/bgcanvas_mobile_dark.svg);}}"]
					}), Object(n.jsx)(r.a, {
						id: "3765270832",
						children: [".ar .book div.tooltip{left:initial;right:10px;}"]
					})]
				})
			}), (function(e) {
				return {
					mobile: e.mobile
				}
			}))
		},
		cXB8: function(e, t, o) {
			"use strict";
			var n = o("nKUr"),
				i = o("MX0m"),
				r = o.n(i),
				s = o("q1tI"),
				a = o("Ya7B"),
				c = o("CBA4");
			var x = Object(a.c)((function(e) {
				var t = e.count,
					o = e.players,
					i = e.color,
					s = e.reverse;
				return 0 == t ? null : Object(n.jsxs)("div", {
					className: r.a.dynamic([
						["1819235521", [i, i]]
					]) + " check",
					children: [Object(n.jsx)("i", {
						className: r.a.dynamic([
							["1819235521", [i, i]]
						])
					}), Object(n.jsx)("p", {
						className: r.a.dynamic([
							["1819235521", [i, i]]
						]),
						children: s ? o + "/" + t : t + "/" + o
					}), Object(n.jsx)(r.a, {
						id: "1819235521",
						dynamic: [i, i],
						children: [".check.__jsx-style-dynamic-selector{margin:10px 0 0;width:18px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;background-color:#FFF;padding:3px;border-radius:20px;line-height:1;overflow:hidden;-webkit-animation-name:width-__jsx-style-dynamic-selector;animation-name:width-__jsx-style-dynamic-selector;-webkit-animation-duration:250ms;animation-duration:250ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}", "i.__jsx-style-dynamic-selector{width:18px;min-width:18px;height:18px;border-radius:50%;background-color:".concat(i, ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}"), "i.__jsx-style-dynamic-selector:before{margin:1px 0 0;content:'\\e910';font-family:ico;color:#FFF;font-size:8px;line-height:10px;}", 'p.__jsx-style-dynamic-selector{margin:1px 5px 0;-webkit-flex:1;-ms-flex:1;flex:1;font-family:"Black";font-size:16px;color:'.concat(i, ";-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;text-align:center;}"), "@-webkit-keyframes width-__jsx-style-dynamic-selector{from{width:18px;opacity:0;}to{width:80px;opacity:1;}}", "@keyframes width-__jsx-style-dynamic-selector{from{width:18px;opacity:0;}to{width:80px;opacity:1;}}", "@-webkit-keyframes widthMobile-__jsx-style-dynamic-selector{from{width:18px;opacity:0;}to{width:45px;opacity:1;}}", "@keyframes widthMobile-__jsx-style-dynamic-selector{from{width:18px;opacity:0;}to{width:45px;opacity:1;}}", "@media (max-width:640px){.check.__jsx-style-dynamic-selector{margin:5px 0 0;width:13px;padding:2px;border-radius:20px;-webkit-animation-name:widthMobile-__jsx-style-dynamic-selector;animation-name:widthMobile-__jsx-style-dynamic-selector;}i.__jsx-style-dynamic-selector{width:13px;min-width:13px;height:13px;}i.__jsx-style-dynamic-selector:before{font-size:6px;line-height:8px;}p.__jsx-style-dynamic-selector{margin:2px 3px 0;font-size:9px;}}"]
					})]
				})
			}), (function(e) {
				var t = e.data.users.filter((function(e) {
					return !e.viewer && !e.away
				}));
				return {
					players: t.length,
					count: t.filter((function(e) {
						return e.ready
					})).length
				}
			}));
			t.a = Object(a.c)((function(e) {
				var t = Object(s.useState)(e.turnNum)[0],
					o = Object(s.useState)(e.turnMax)[0],
					i = Object(s.useState)(e.color)[0],
					a = Object(c.a)();
				return Object(n.jsxs)("div", {
					className: "jsx-2120888168 step",
					children: [a ? o + "/" + (t + 1) : t + 1 + "/" + o, Object(n.jsx)(x, {
						color: i,
						reverse: a
					}), Object(n.jsx)(r.a, {
						id: "646283104",
						children: ['div.jsx-2120888168{min-width:86px;position:absolute;top:20px;left:20px;font-family:"Black";font-size:41px;line-height:41px;color:#FFFFFF;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}', "@media (max-width:640px){div.jsx-2120888168{min-height:45px;min-width:49px;top:10px;left:10px;font-size:23px;line-height:23px;z-index:5;}}"]
					}), Object(n.jsx)(r.a, {
						id: "2555919105",
						children: [".ar .step{left:initial;right:20px;}", "@media (max-width:640px){.ar .step{left:initial;right:10px;}}"]
					})]
				})
			}), (function(e) {
				return {
					turnNum: e.data.turnNum,
					turnMax: e.data.turnMax
				}
			}))
		},
		s8YG: function(e, t, o) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/draw", function() {
				return o("HF4s")
			}])
		},
		umcP: function(e, t, o) {
			"use strict";
			var n = o("nKUr"),
				i = o("jT3O"),
				r = o("CBA4"),
				s = o("q1tI"),
				a = o("Ya7B"),
				c = o("YSmr"),
				x = o("4qaV"),
				l = o("atwx");

			function p() {
				var e = Object(i.a)(["edit"]);
				return p = function() {
					return e
				}, e
			}

			function d() {
				var e = Object(i.a)(["ready"]);
				return d = function() {
					return e
				}, e
			}
			t.a = Object(a.c)((function(e) {
				var t = e.disabled,
					o = e.onChange,
					i = e.emit,
					a = Object(r.d)(),
					b = Object(s.useState)(!1),
					u = b[0],
					f = b[1];
				return Object(n.jsx)(x.a, {
					type: "small",
					disabled: t && !u,
					selected: u,
					onClick: function() {
						f((function(e) {
							var t = !e;
							return i(c.O, t), o && o(t), t
						}))
					},
					children: u ? Object(n.jsxs)(n.Fragment, {
						children: [Object(n.jsx)(l.a, {
							icon: "pencil"
						}), Object(n.jsx)("strong", {
							children: a(p())
						})]
					}) : Object(n.jsxs)(n.Fragment, {
						children: [Object(n.jsx)(l.a, {
							icon: "ready"
						}), Object(n.jsx)("strong", {
							children: a(d())
						})]
					})
				})
			}), (function(e) {
				return {
					emit: e.emit
				}
			}))
		}
	},
	[
		["s8YG", 0, 1, 2, 4, 3, 5, 9]
	]
]);
