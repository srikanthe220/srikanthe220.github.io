/*! trac-script-v2.1.2 2019-01-16 */ !
function(a, b) {
	console.log("in main function");
	function c() {
			try {
					if (N) {
							x(a);
							var b = y(N);
							X.pageSize.push(b), X.viewportResolution = z(N), X.wordCount = A(N), X.imageCount = C(N)
					}
					E(), Y.appnexusIoId = X.appnexusIoId, Y.appnexusIp = X.appnexusIp, Y.appnexusAuctionId = X.appnexusAuctionId, Y.appnexusUid = X.appnexusUid, Y.screenResolution = X.screenResolution, Y.viewportResolution = X.viewportResolution, Y.cookieEnabled = X.cookieEnabled, Y.ver = P, Y.creativeId = X.creativeId, S = setInterval(function() {
							F(), sendError()
					}, L)
			} catch (a) {
					H("init", a)
			}
	}

	function d() {
			try {
					Q = new SockJS(I + "eventbus/"), Q.onopen = function() {
							1 === Q.readyState && (R = !0, Y.connectionMethod = "WebSocket")
					}, Q.onmessage = function(a) {}, Q.onclose = function() {
							R = !1, Y.connectionMethod = "POST"
					}
			} catch (a) {
					H("loadSockJS", a)
			}
	}

	function e() {
			try {
					Y.viewportResolution = z(N)
			} catch (a) {
					H("resize", a)
			}
	}

	function f(a) {
			h(a, Y.mma)
	}

	function g(a) {
			h(a, Y.mmp)
	}

	function h(c, d) {
			try {
					var e, f, g;
					c = c || a.event, null === c.pageX && null !== c.clientX && (e = c.target && c.target.ownerDocument || b, f = e.documentElement, g = e.body, c.pageX = c.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0), c.pageY = c.clientY + (f && f.scrollTop || g && g.scrollTop || 0));
					var h = {
							x: Math.round(c.pageX),
							y: Math.round(c.pageY),
							time: Date.now()
					};
					d.push(h)
			} catch (a) {
					H("mousemove", a)
			}
	}

	function i(a) {
			try {
					var b = {
							x: a.pageX,
							y: a.pageY,
							time: Date.now()
					};
					Y.mcp.push(b)
			} catch (a) {
					H("click", a)
			}
	}

	function j(a) {
			try {
					T.x = Math.round(a.touches[0].pageX), T.y = Math.round(a.touches[0].pageY), T.time = Date.now()
			} catch (a) {
					H("touchstart", a)
			}
	}

	function k(a) {
			o(a, V)
	}

	function l() {
			Y.mma = Y.mma.concat(V), V = []
	}

	function m(a) {
			o(a, U)
	}

	function n() {
			try {
					U.length ? Y.mmp = Y.mmp.concat(U) : Y.mcp.push(T), T = {}, U = []
			} catch (a) {
					H("touchend", a)
			}
	}

	function o(a, b) {
			try {
					b.push({
							x: Math.round(a.touches[0].pageX),
							y: Math.round(a.touches[0].pageY),
							time: Date.now()
					})
			} catch (a) {
					H("touchmove", a)
			}
	}

	function p() {
			try {
					W.push("*")
			} catch (a) {
					H("keyup", a)
			}
	}

	function q() {
			try {
					Y.browserTab = !1, O = setTimeout(function() {
							Q.close()
					}, M)
			} catch (a) {
					H("tabInactive", a)
			}
	}

	function r() {
			try {
					Y.browserTab = !0, R || d(), clearTimeout(O)
			} catch (a) {
					H("tabActive", a)
			}
	}

	function s(a, b) {
			try {
					if (!b || !a) return null;
					a = a.toLowerCase(), b = b.toLowerCase();
					var c = a.match("[?&]" + b + "=([^&]+)");
					return c ? c[1] : null
			} catch (a) {
					H("getQueryParams", a)
			}
	}

	function t(a, b) {
			try {
					a = Number(a), b = Number(b);
					for (var c = "", d = 0; d < b; d++) c += "0";
					return c += a, c.slice(-b)
			} catch (a) {
					H("numberFormat", a)
			}
	}

	function u(a) {
			try {
					a = a || navigator.userAgent;
					var b = v(a),
							c = {};
					return b.name && (c.name = b.name, c.version = b.version), "chrome" === c.name ? c.webkit = !0 : "webkit" === c.name ? c.name = "safari" : "mozilla" === c.name && (c.name = "firefox"), c
			} catch (a) {
					H("getBrowserInfo", a)
			}
	}

	function v(a) {
			try {
					a = a || navigator.userAgent, a = a.toLowerCase();
					var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
					return {
							name: b[1] || "",
							version: b[2] || "0"
					}
			} catch (a) {
					H("userAgentMatch", a)
			}
	}

	function w(a, b, c) {
			try {
					var d = c || d,
							e = new d.XMLHttpRequest;
					return "withCredentials" in e ? e.open(a, b, !0) : "undefined" != typeof XDomainRequest ? (e = new XDomainRequest, e.open(a, b)) : e = null, e
			} catch (a) {
					H("createAjaxRequest", a)
			}
	}

	function x(a) {
			try {
					for (var b = a; b.parent !== top;) b = b.parent;
					if (!(b = b.frameElement)) {
							var c = {
									top: "NA",
									left: "NA",
									size: X.creativeSize || Math.round(a.innerWidth) + "x" + Math.round(a.innerHeight)
							};
							return X.iframesPosition.push(c), X.adLocation.push(c), void(X.adCount = X.iframesPosition.length)
					}
					var d = b.getBoundingClientRect();
					X.adLocation.push({
							top: Math.round(d.top + N.pageYOffset),
							left: Math.round(d.left + N.pageXOffset),
							size: X.creativeSize || Math.round(d.width) + "x" + Math.round(d.height)
					});
					for (var e = {}, f = N.document.getElementsByTagName("iframe"), g = 0; g < f.length; g++) {
							var h = f[g];
							if (h) {
									var i = h.id.toLowerCase();
									if ((d = h.getBoundingClientRect()) && d.width > 1 && d.height > 1 && h.height > 1 && h.width > 1 && (-1 !== i.indexOf("3rd party ad content") || -1 !== i.indexOf("aswift_") || -1 !== i.indexOf("google_ads_iframe_") || -1 !== i.indexOf("ox_") || -1 !== i.indexOf("sas_") || -1 !== i.indexOf("oas_frame") || -1 !== i.indexOf("cto_iframe") || -1 !== i.indexOf("adtechAdContent_main_") || -1 !== i.indexOf("ad_cs_") || -1 !== i.indexOf("btg_unit_") || -1 !== i.indexOf("frame_addoor-pubtag-") || -1 !== i.indexOf("oas_frame_"))) {
											var j = {
															top: Math.round(d.top + N.pageYOffset),
															left: Math.round(d.left + N.pageXOffset),
															size: Math.round(d.width) + "x" + Math.round(d.height)
													},
													k = h.style["z-index"];
											k = "none" !== k || !k || isNaN(parseInt(k)) ? 0 : parseInt(k);
											var l = j.top + "_" + j.left;
											if (e[l]) {
													e[l].z_index > k && (e[l] = {
															z_index: k,
															loc: j
													})
											} else e[l] = {
													z_index: k,
													loc: j
											}
									}
							}
					}
					for (var m in e) X.iframesPosition.push(e[m].loc);
					0 === X.iframesPosition.length && 0 !== X.adLocation.length && X.iframesPosition.push(X.adLocation[0]), X.adCount = X.iframesPosition.length
			} catch (a) {
					H("setAdLocationsInfo", a)
			}
	}

	function y(a) {
			try {
					var b = a.document.documentElement.scrollWidth || a.window.innerWidth;
					return {
							height: a.document.documentElement.scrollHeight || a.window.innerHeight,
							width: b
					}
			} catch (a) {
					H("pageSize", a)
			}
	}

	function z(a) {
			try {
					var b = a.document.querySelector("body");
					return (a.innerWidth || a.document.documentElement.clientWidth || b.clientWidth) + "x" + (a.innerHeight || a.document.documentElement.clientHeight || b.clientHeight)
			} catch (a) {
					H("getViewportResolution", a)
			}
	}

	function A(a) {
			try {
					var b = a.document.querySelector("body");
					if (b) {
							var c = b.innerText || B(a.document.body, a);
							c = c.replace(/\n/gi, " ");
							var d = 0;
							return /\S+/gi.test(c) && (d = c.match(/\S+/gi).length), d
					}
			} catch (a) {
					H("getWordCount", a)
			}
	}

	function B(b, c) {
			try {
					c = c || a;
					var d, e, f, g, h = c.document;
					return c.getSelection && h.createRange ? (d = c.getSelection(), d.rangeCount && (f = d.getRangeAt(0)), e = h.createRange(), e.selectNodeContents(b), d.removeAllRanges(), d.addRange(e), g = d.toString(), d.removeAllRanges(), f && d.addRange(f)) : h.body.createTextRange && (e = h.body.createTextRange(), e.moveToElementText(b), e.select()), g
			} catch (a) {
					H("getInnerText", a)
			}
	}

	function C(a) {
			try {
					for (var b, c = a.document.getElementsByTagName("img"), d = 0, e = c.length; d < e; d++) {
							var f = c[d],
									g = f.clientWidth;
							if (g && g > 1) {
									var h = f.getAttribute("src");
									h && (h = h.toLowerCase(), -1 === h.indexOf(".jpg") && -1 === h.indexOf(".jpeg") && -1 === h.indexOf(".gif") && -1 === h.indexOf(".png") || (b = b ? ++b : 1))
							}
					}
					return b
			} catch (a) {
					H("getImageCount", a)
			}
	}

	function D(a, b) {
			try {
					if (!a || !b) return null;
					if (a.cfg) {
							var c = a.cfg;
							if (b in c) return c[b]
					}
					return null
			} catch (a) {
					H("getSafeFrameCfgProp", a)
			}
	}

	function E(b, c, d) {
			try {
					var e = (b || I) + "client-details?";
					d = d || a, c = c || X || {};
					var f = JSON.stringify(c.pageSize),
							g = JSON.stringify(c.adLocation),
							h = JSON.stringify(c.iframesPosition);
					for (var i in c) c[i] = encodeURIComponent(c[i]);
					return w("GET", e + ("uid=" + c.appnexusUid + "&ip=" + c.appnexusIp + "&aid=" + c.appnexusAuctionId + "&io=" + c.appnexusIoId + "&ts=" + c.eventTime + "&url=" + c.pageURL + "&adv=" + c.adCount + "&img=" + c.imageCount + "&wc=" + c.wordCount + "&con=" + c.connectionMethod + "&br=" + c.browserName + "&bl=" + c.browserLanguage + "&sr=" + c.screenResolution + "&vr=" + c.viewportResolution + "&tab=" + c.browserTab + "&ic=" + c.cookieEnabled + "&adloc=" + g + "&pSize=" + f + "&cId=" + c.creativeId + "&adPos=" + h + "&ver=" + P + "&bUrl=" + c.baseURL + "&kwrds=" + c.keywords + "&tz=" + c.timeZone + "&cs=" + c.creativeSize + "&cpgid=" + c.campaignId + "&devMId=" + c.deviceModelId + "&injPoint=" + c.scriptInjectionPoint + "&per=" + c.permission + "&sf=" + c.safeFrame + "&stc=" + c.isTouch), d).send(), 1
			} catch (a) {
					H("sendUserDetail", a)
			}
	}

	function F() {
			try {
					if (Y.keyPressCount = W.length, N && (Y.Scroll = Math.round(N.pageYOffset) + "," + Math.round(N.pageXOffset)), Y.mma.length > 0 || Y.mmp.length > 0 || Y.mcp.length > 0 || Y.keyPressCount > 0) {
							if (R) Y.timeStamp = Date.now(), Q.send(JSON.stringify(Y));
							else {
									w("POST", I + "client-details2", a).send(JSON.stringify(Y))
							}
							Y.timeSpent = Y.timeSpent + L
					}
					Y.mma = [], Y.mmp = [], Y.mcp = [], W = []
			} catch (a) {
					H("sendUserActivity", a)
			}
	}

	function G() {
			console.log("%cTrace Killed", "color: green; font-size:25px;"), Q.close(), clearInterval(S), X.isTouch ? N ? (N.removeEventListener("touchstart", j), N.removeEventListener("touchend", n), N.removeEventListener("touchmove", m), N.removeEventListener("keyup", p), N.removeEventListener("blur", q), N.removeEventListener("focus", r)) : (a.removeEventListener("touchmove", l), a.removeEventListener("touchend", l)) : N ? (N.removeEventListener("mousemove", g), N.removeEventListener("click", i), N.removeEventListener("keyup", p), N.removeEventListener("blur", q), N.removeEventListener("focus", r), N.removeEventListener("resize", e)) : a.removeEventListener("mousemove", f)
	}

	function H(c, d) {
			try {
					var e = {
									method: c,
									message: d.toString()
							},
							f = e.method + "_" + e.message;
					return J && !J[f] && (K.push(e), J[f] = !0), "main" === c && (sendError(), E()), J
			} catch (c) {
					var g = b.referrer;
					X && X.pageURL && (g = X.pageURL);
					var e = {
									uid: X ? X.appnexusUid : "NA",
									url: g,
									errors: K
							},
							h = I + "trac-err",
							i = w("POST", h, a);
					i.send(JSON.stringify(e)), K = []
			}
	}
	try {
			var I = "https://trac.mediaiqdigital.com/",
					J = {},
					K = [],
					L = 5e3,
					M = 3e5,
					N = null,
					O = null,
					P = "2.4.0",
					Q = null,
					R = !1,
					S = null,
					T = {},
					U = [],
					V = [],
					W = [],
					X = {
							appnexusIp: null,
							creativeId: null,
							campaignId: null,
							appnexusUid: null,
							creativeSize: null,
							appnexusIoId: null,
							deviceModelId: null,
							appnexusAuctionId: null,
							pageURL: null,
							baseURL: null,
							eventTime: null,
							imageCount: null,
							wordCount: null,
							connectionMethod: "GET",
							browserName: null,
							browserLanguage: null,
							screenResolution: null,
							viewportResolution: null,
							browserTab: !0,
							cookieEnabled: null,
							iframesPosition: [],
							adLocation: [],
							adCount: null,
							pageSize: [],
							keywords: null,
							timeZone: null,
							queryString: null,
							scriptInjectionPoint: null,
							permission: null,
							safeFrame: "no",
							isTouch: 0
					},
					Y = {
							appnexusUid: null,
							appnexusIp: null,
							appnexusAuctionId: null,
							appnexusIoId: null,
							connectionMethod: "POST",
							screenResolution: null,
							viewportResolution: null,
							browserTab: !0,
							cookieEnabled: null,
							timeSpent: 5e3,
							timeStamp: null,
							keyPressCount: null,
							keys: [],
							mma: [],
							mmp: [],
							mcp: [],
							ver: null,
							Scroll: null,
							creativeId: null
					};
			if (-1 !== b.cookie.toLowerCase().indexOf("opt-out=1")) return;
			N = function(a) {
					try {
							return a.top.document ? a.top : null
					} catch (a) {
							return null
					}
			}(a);
			var Z = X.queryString = function(a) {
					try {
							for (var b = I.split("//")[1], c = a.getElementsByTagName("script"), d = 0; d < c.length; d++)
									if (-1 !== c[d].src.toLowerCase().indexOf(b)) return decodeURIComponent(c[d].src.toLowerCase())
					} catch (a) {
							H("getQueryString", a)
					}
			}(b);
			X.pageURL = function(a, b, c, d, e) {
					var f;
					try {
							if ("top" === d.scriptInjectionPoint && (f = c.location.href), !f && a && a.document && (f = a.document.URL), !f) {
									var g = s(e, "url");
									g && (f = decodeURI(g))
							}
							if (!f) {
									for (var h = b; h.parent !== top;) h = h.parent;
									f = h.document.referrer
							}
					} catch (a) {
							H("getPageURL", a), f = c.referrer
					}
					var i = f ? f.toLowerCase() : null;
					return !i || -1 === i.indexOf("doubleclick") && -1 === i.indexOf("google") && -1 === i.indexOf("adnxs") || (f = ""), f
			}(N, a, b, X, Z), X.appnexusUid = s(Z, "uid"), X.appnexusIp = s(Z, "ip"), X.creativeId = s(Z, "creativeid"), X.appnexusAuctionId = s(Z, "aid"), X.appnexusIoId = s(Z, "io"), X.creativeSize = s(Z, "creativesize"), X.campaignId = s(Z, "cpid"), X.deviceModelId = s(Z, "mod"), X.eventTime = function() {
					try {
							var a = new Date;
							return a.getFullYear().toString() + "-" + t(a.getUTCMonth() + 1, 2) + "-" + t(a.getUTCDate(), 2) + " " + t(a.getUTCHours(), 2) + ":" + t(a.getUTCMinutes(), 2) + ":" + t(a.getUTCSeconds(), 2) + "." + t(a.getUTCMilliseconds(), 3)
					} catch (a) {
							H("getEventTime", a)
					}
			}(), X.timeZone = function() {
					try {
							var a = new Date,
									b = a.getTimezoneOffset();
							return "number" != typeof b && (b = -1), b
					} catch (a) {
							H("getTimeZone", a)
					}
			}(), X.baseURL = function(a) {
					try {
							if (!a) return "";
							var b = a.split(/[\/\/|\/|?]+/);
							return b[1] ? b[1] : a
					} catch (a) {
							H("getBaseURL", a)
					}
			}(X.pageURL), X.keywords = function(a) {
					try {
							if (!a) return "";
							var b = a.indexOf("//"); - 1 === b ? b = 0 : b += 2;
							var c = a.indexOf("/", b);
							c = c >= 0 ? c : a.length;
							var d = a.substring(c + 1, a.length),
									e = d.split(/[?:\/|.|?|=|&|#|_|+|-]+/),
									f = e.join();
							return f && (f = f.replace(/^,+|,+$/gm, "")), f
					} catch (a) {
							H("getKeywords", a)
					}
			}(X.pageURL), X.browserName = function(a) {
					try {
							if (a = a || navigator.userAgent, a.toLowerCase().match(/(?:msie |trident.+?; rv:)(\d+)/)) return "msie";
							if (a.toLowerCase().match(/edge\/(\d+)/)) return "edge";
							if (a.toLowerCase().match(/(?:^opera.+?version|opr)\/(\d+)/)) return "opera";
							var b = u(a);
							if (b && b.name) return b.name
					} catch (a) {
							H("getBrowserName", a)
					}
			}(navigator.userAgent), X.browserLanguage = function(a) {
					try {
							if (a.languages && a.languages[0]) return a.languages[0];
							if (a.language) return a.language;
							if (a.userLanguage) return a.userLanguage
					} catch (a) {
							H("browserLanguage", a)
					}
			}(navigator), X.cookieEnabled = function(a, b) {
					try {
							var c = b.cookieEnabled;
							return c || (a.cookie = "__XQzT=1", c = -1 !== a.cookie.indexOf("__XQzT=1")), c
					} catch (a) {
							H("isCookieEnabled", a)
					}
			}(b, navigator), X.screenResolution = function(a) {
					try {
							return a && a.screen && a.screen.availWidth && a.screen.availHeight ? a.screen.availWidth + "x" + a.screen.availHeight : "NAxNA"
					} catch (a) {
							H("getScreenResolution", a)
					}
			}(a), X.scriptInjectionPoint = function(a) {
					try {
							if (a.self) return a.self === a.top ? "top" : "iframe"
					} catch (a) {
							H("getInjectionPoint", a)
					}
			}(a), X.permission = N ? "yes" : "no", X.isTouch = function(a) {
					try {
							return a ? Number("ontouchstart" in a) : 0
					} catch (a) {
							H("isTouchDevice", a)
					}
			}(a);
			var $ = function(b) {
					try {
							return b = b || a, b.sf_ || null
					} catch (a) {
							H("getSafeFrameObject", a)
					}
			}(a);
			$ && (X.safeFrame = function(a) {
							try {
									return a ? a.v ? a.v : "yes" : "no"
							} catch (a) {
									H("isSafeFrame", a)
							}
					}($), X.adLocation = function(a, b) {
							try {
									if (!a || !b) return null;
									var c = JSON.parse(D(a, "initialGeometry"));
									return {
											top: parseInt(c.frameCoords_t) || 0,
											left: parseInt(c.frameCoords_l) || 0,
											size: b.creativeSize
									}
							} catch (a) {
									H("getAdLocationFromSafeFrame", a)
							}
					}($, X), X.viewportResolution = function(a) {
							try {
									if (!a) return null;
									var b = JSON.parse(D(a, "initialGeometry")),
											c = b.windowCoords_t || 0,
											d = b.windowCoords_b || 0,
											e = b.windowCoords_l || 0,
											f = b.windowCoords_r || 0;
									return parseInt(f - e) + "x" + parseInt(d - c)
							} catch (a) {
									H("getViewportFromSafeFrame", a)
							}
					}($)), N || setTimeout(G, 18e5),
					function(a, c, d) {
							try {
									c = void 0 !== c && c;
									var e = b.getElementsByTagName("head")[0];
									c && (e = N.document.getElementsByTagName("head")[0]);
									var f = b.createElement("script");
									f.type = "text/javascript", f.src = a, f.onload = d, f.onreadystatechange = function() {
											"complete" == this.readyState && d()
									}, e.appendChild(f)
							} catch (a) {
									H("load_script", a)
							}
					}("https://cdnjs.cloudflare.com/ajax/libs/sockjs-client/1.1.1/sockjs.min.js", !1, d), X.isTouch ? (N && (N.addEventListener("touchstart", j), N.addEventListener("touchmove", m), N.addEventListener("touchend", n), N.addEventListener("keyup", p), N.addEventListener("blur", q), N.addEventListener("focus", r)), a.addEventListener("touchmove", k), a.addEventListener("touchend", l)) : (N && (N.addEventListener("mousemove", g), N.addEventListener("click", i), N.addEventListener("keyup", p), N.addEventListener("blur", q), N.addEventListener("focus", r), N.addEventListener("resize", e)), a.addEventListener("mousemove", f));
			var _ = setInterval(function() {
					"interactive" !== b.readyState && "complete" !== b.readyState || (c(), clearInterval(_))
			}, 3e3)
	} catch (a) {
			H("main", a)
	}
}(window, document);
