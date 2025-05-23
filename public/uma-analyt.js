!(function () {
	"use strict";
	((t) => {
		const {
				screen: { width: e, height: a },
				navigator: { language: r, doNotTrack: i, msDoNotTrack: n },
				location: o,
				document: s,
				history: c,
				top: u,
				doNotTrack: d,
			} = t,
			{ hostname: l, href: h, origin: m } = o,
			{ currentScript: f, referrer: p } = s,
			g = h.startsWith("data:") ? void 0 : t.localStorage;
		if (!f) return;
		const y = "data-",
			b = "true",
			v = f.getAttribute.bind(f),
			w = v(y + "website-id"),
			N = v(y + "host-url"),
			S = v(y + "tag"),
			T = "false" !== v(y + "auto-track"),
			k = v(y + "do-not-track") === b,
			A = v(y + "exclude-search") === b,
			j = v(y + "exclude-hash") === b,
			x = v(y + "domains") || "",
			O = x.split(",").map((t) => t.trim()),
			E = `${(N || "https://api-gateway.umami.dev" || f.src.split("/").slice(0, -1).join("/")).replace(/\/$/, "")}/api/send`,
			L = `${e}x${a}`,
			$ = /data-umami-event-([\w-_]+)/,
			D = y + "umami-event",
			K = 300,
			U = () => ({
				website: w,
				screen: L,
				language: r,
				title: F,
				hostname: l,
				url: R,
				referrer: z,
				tag: S || void 0,
				id: P || void 0,
			}),
			_ = (t, e, a) => {
				a &&
					((z = R),
					(R = new URL(a, o.href)),
					A && (R.search = ""),
					j && (R.hash = ""),
					(R = R.toString()),
					R !== z && setTimeout(C, K));
			},
			B = () =>
				G ||
				!w ||
				(g && g.getItem("umami.disabled")) ||
				(x && !O.includes(l)) ||
				(k &&
					(() => {
						const t = d || i || n;
						return 1 === t || "1" === t || "yes" === t;
					})()),
			W = async (t, e = "event") => {
				if (B()) return;
				const a = { "Content-Type": "application/json" };
				void 0 !== J && (a["x-umami-cache"] = J);
				try {
					const r = await fetch(E, {
							method: "POST",
							body: JSON.stringify({ type: e, payload: t }),
							headers: a,
							credentials: "omit",
						}),
						i = await r.json();
					i && ((G = !!i.disabled), (J = i.cache));
				} catch (t) {}
			},
			q = () => {
				M ||
					(C(),
					(() => {
						const t = (t, e, a) => {
							const r = t[e];
							return (...e) => (a.apply(null, e), r.apply(t, e));
						};
						(c.pushState = t(c, "pushState", _)), (c.replaceState = t(c, "replaceState", _));
					})(),
					(() => {
						const t = new MutationObserver(([t]) => {
								F = t && t.target ? t.target.text : void 0;
							}),
							e = s.querySelector("head > title");
						e && t.observe(e, { subtree: !0, characterData: !0, childList: !0 });
					})(),
					s.addEventListener(
						"click",
						async (t) => {
							const e = (t) => ["BUTTON", "A"].includes(t),
								a = async (t) => {
									const e = t.getAttribute.bind(t),
										a = e(D);
									if (a) {
										const r = {};
										return (
											t.getAttributeNames().forEach((t) => {
												const a = t.match($);
												a && (r[a[1]] = e(t));
											}),
											C(a, r)
										);
									}
								},
								r = t.target,
								i = e(r.tagName)
									? r
									: ((t, a) => {
											let r = t;
											for (let t = 0; t < a; t++) {
												if (e(r.tagName)) return r;
												if (((r = r.parentElement), !r)) return null;
											}
										})(r, 10);
							if (!i) return a(r);
							{
								const { href: e, target: r } = i,
									n = i.getAttribute(D);
								if (n)
									if ("A" === i.tagName) {
										const s =
											"_blank" === r ||
											t.ctrlKey ||
											t.shiftKey ||
											t.metaKey ||
											(t.button && 1 === t.button);
										if (n && e)
											return (
												s || t.preventDefault(),
												a(i).then(() => {
													s || (("_top" === r ? u.location : o).href = e);
												})
											);
									} else if ("BUTTON" === i.tagName) return a(i);
							}
						},
						!0,
					),
					(M = !0));
			},
			C = (t, e) =>
				W(
					"string" == typeof t
						? { ...U(), name: t, data: e }
						: "object" == typeof t
							? { ...t }
							: "function" == typeof t
								? t(U())
								: U(),
				),
			I = (t, e) => (
				"string" == typeof t && (P = t),
				(J = ""),
				W({ ...U(), data: "object" == typeof t ? t : e }, "identify")
			);
		t.umami || (t.umami = { track: C, identify: I });
		let J,
			M,
			P,
			R = h,
			z = p.startsWith(m) ? "" : p,
			F = s.title,
			G = !1;
		T &&
			!B() &&
			("complete" === s.readyState ? q() : s.addEventListener("readystatechange", q, !0));
	})(window);
})();
