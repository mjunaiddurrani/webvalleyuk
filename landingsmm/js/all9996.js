function generateNotification(t, e, n) {
    n || (n = "");
    var i = "";
    "danger" == t ? i = "fa fa-exclamation-triangle" : "success" == t || 1 == t ? (i = "fa fa-check", t = "success") : "info" == t ? i = "fa fa-info-circle" : "error" != t && 0 != t || (t = "danger", i = "fa fa-exclamation-triangle"), $.notify({
        icon: i,
        title: "",
        message: e,
        url: n,
        target: "_blank"
    }, {
        element: "body",
        position: null,
        type: t,
        allow_dismiss: !0,
        newest_on_top: !1,
        showProgressbar: !1,
        placement: {
            from: "bottom",
            align: "right"
        },
        offset: 20,
        spacing: 10,
        z_index: 1031,
        delay: 5e3,
        timer: 1e3,
        url_target: "_blank",
        mouse_over: null,
        animate: {
            enter: "animated fadeInDown",
            exit: "animated fadeOutUp"
        },
        onShow: null,
        onShown: null,
        onClose: null,
        onClosed: null,
        icon_type: "class",
        template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
    })
}

function recallajax() {
    $(document).on("submit", "#CrudForm,.CrudForm", function () {
        var _thisForm = $(this);
        if (!$(this).data("nosubmit")) {
            var submitBtn = $("input[type=submit]", $(this));
            submitBtn.hide();
            var parentDiv = submitBtn.parent();
            !$("#loaderBtn").length > 0 && parentDiv.append('<button id="loaderBtn" class="btn btn-success pull-right"><i class="fa fa-circle-o-notch fa-spin"></i></button>')
        }
        var validationAllowed = !0,
            seconds = (new Date).getTime() / 1e3,
            formData = new FormData($(this)[0]);
        return "function" == typeof validateCrudForm && (validationAllowed = validateCrudForm()), validationAllowed ? ($.ajax({
            type: $(this).attr("method"),
            data: formData,
            async: !0,
            contentType: !1,
            processData: !1,
            url: $(this).attr("action"),
            beforeSend: function (t) {
                "function" == typeof beforeSubmit && beforeSubmit()
            },
            success: function (result) {
                if (_thisForm.data("nosubmit") || submitBtn.show(), $("#loaderBtn").remove(), _thisForm.attr("data-noinfo") || (generateNotification("2", result), $("html, body").animate({
                        scrollTop: 0
                    }, "slow")), seconds = (new Date).getTime() / 1e3, _thisForm.attr("data-customcallback")) {
                    var _func = _thisForm.attr("data-customcallback");
                    eval("typeof " + _func + " === 'function'") && eval(_func + "(" + result + ")")
                } else "function" == typeof afterSubmit && afterSubmit(), "function" == typeof afterSubmitResult && afterSubmitResult(result)
            },
            error: function (error) {
                if (_thisForm.attr("data-noinfo") || generateNotification("0", "Some Error Occured"), _thisForm.data("nosubmit") || submitBtn.show(), _thisForm.attr("data-customcallbackFail")) {
                    var _func = _thisForm.attr("data-customcallbackFail");
                    eval("typeof " + _func + " === 'function'") && window[_func](error.responseText)
                } else "function" == typeof afterSubmitFail && afterSubmitFail(), "function" == typeof afterSubmitResultFail && afterSubmitResultFail(error.responseText);
                $("#loaderBtn").remove(), seconds = (new Date).getTime() / 1e3
            }
        }), !1) : (generateNotification("0", "Validation Error"), !1)
    })
}

function ReloadPage() {
    window.location.href = "thankyou"
}

function afterSubmitResult(t) {
    t && (t = JSON.parse(t)).status && (generateNotification(t.status, t.data), setTimeout(function () {
        ReloadPage()
    }, 2e3))
}! function (t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (t, e) {
    "use strict";
    var n = [],
        i = Object.getPrototypeOf,
        r = n.slice,
        o = n.flat ? function (t) {
            return n.flat.call(t)
        } : function (t) {
            return n.concat.apply([], t)
        },
        s = n.push,
        a = n.indexOf,
        l = {},
        c = l.toString,
        u = l.hasOwnProperty,
        f = u.toString,
        d = f.call(Object),
        h = {},
        p = function (t) {
            return "function" == typeof t && "number" != typeof t.nodeType
        },
        g = function (t) {
            return null != t && t === t.window
        },
        m = t.document,
        v = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function y(t, e, n) {
        var i, r, o = (n = n || m).createElement("script");
        if (o.text = t, e)
            for (i in v)(r = e[i] || e.getAttribute && e.getAttribute(i)) && o.setAttribute(i, r);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function b(t) {
        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? l[c.call(t)] || "object" : typeof t
    }
    var _ = "3.5.1",
        w = function (t, e) {
            return new w.fn.init(t, e)
        };

    function x(t) {
        var e = !!t && "length" in t && t.length,
            n = b(t);
        return !p(t) && !g(t) && ("array" === n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
    }
    w.fn = w.prototype = {
        jquery: _,
        constructor: w,
        length: 0,
        toArray: function () {
            return r.call(this)
        },
        get: function (t) {
            return null == t ? r.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        pushStack: function (t) {
            var e = w.merge(this.constructor(), t);
            return e.prevObject = this, e
        },
        each: function (t) {
            return w.each(this, t)
        },
        map: function (t) {
            return this.pushStack(w.map(this, function (e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function () {
            return this.pushStack(r.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        even: function () {
            return this.pushStack(w.grep(this, function (t, e) {
                return (e + 1) % 2
            }))
        },
        odd: function () {
            return this.pushStack(w.grep(this, function (t, e) {
                return e % 2
            }))
        },
        eq: function (t) {
            var e = this.length,
                n = +t + (t < 0 ? e : 0);
            return this.pushStack(0 <= n && n < e ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    }, w.extend = w.fn.extend = function () {
        var t, e, n, i, r, o, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || p(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (t = arguments[a]))
                for (e in t) i = t[e], "__proto__" !== e && s !== i && (c && i && (w.isPlainObject(i) || (r = Array.isArray(i))) ? (n = s[e], o = r && !Array.isArray(n) ? [] : r || w.isPlainObject(n) ? n : {}, r = !1, s[e] = w.extend(c, o, i)) : void 0 !== i && (s[e] = i));
        return s
    }, w.extend({
        expando: "jQuery" + (_ + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (t) {
            throw new Error(t)
        },
        noop: function () {},
        isPlainObject: function (t) {
            var e, n;
            return !(!t || "[object Object]" !== c.call(t) || (e = i(t)) && ("function" != typeof (n = u.call(e, "constructor") && e.constructor) || f.call(n) !== d))
        },
        isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        globalEval: function (t, e, n) {
            y(t, {
                nonce: e && e.nonce
            }, n)
        },
        each: function (t, e) {
            var n, i = 0;
            if (x(t))
                for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
            else
                for (i in t)
                    if (!1 === e.call(t[i], i, t[i])) break;
            return t
        },
        makeArray: function (t, e) {
            var n = e || [];
            return null != t && (x(Object(t)) ? w.merge(n, "string" == typeof t ? [t] : t) : s.call(n, t)), n
        },
        inArray: function (t, e, n) {
            return null == e ? -1 : a.call(e, t, n)
        },
        merge: function (t, e) {
            for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i];
            return t.length = r, t
        },
        grep: function (t, e, n) {
            for (var i = [], r = 0, o = t.length, s = !n; r < o; r++) !e(t[r], r) !== s && i.push(t[r]);
            return i
        },
        map: function (t, e, n) {
            var i, r, s = 0,
                a = [];
            if (x(t))
                for (i = t.length; s < i; s++) null != (r = e(t[s], s, n)) && a.push(r);
            else
                for (s in t) null != (r = e(t[s], s, n)) && a.push(r);
            return o(a)
        },
        guid: 1,
        support: h
    }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
        l["[object " + e + "]"] = e.toLowerCase()
    });
    var T = function (t) {
        var e, n, i, r, o, s, a, l, c, u, f, d, h, p, g, m, v, y, b, _ = "sizzle" + 1 * new Date,
            w = t.document,
            x = 0,
            T = 0,
            C = lt(),
            E = lt(),
            S = lt(),
            A = lt(),
            k = function (t, e) {
                return t === e && (f = !0), 0
            },
            D = {}.hasOwnProperty,
            O = [],
            I = O.pop,
            P = O.push,
            N = O.push,
            $ = O.slice,
            L = function (t, e) {
                for (var n = 0, i = t.length; n < i; n++)
                    if (t[n] === e) return n;
                return -1
            },
            M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            j = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\[\\da-fA-F]{1,6}" + j + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            F = "\\[" + j + "*(" + R + ")(?:" + j + "*([*^$|!~]?=)" + j + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + j + "*\\]",
            H = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
            z = new RegExp(j + "+", "g"),
            B = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g"),
            q = new RegExp("^" + j + "*," + j + "*"),
            W = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
            Y = new RegExp(j + "|>"),
            U = new RegExp(H),
            V = new RegExp("^" + R + "$"),
            X = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + F),
                PSEUDO: new RegExp("^" + H),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + M + ")$", "i"),
                needsContext: new RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)", "i")
            },
            Q = /HTML$/i,
            K = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            tt = /[+~]/,
            et = new RegExp("\\\\[\\da-fA-F]{1,6}" + j + "?|\\\\([^\\r\\n\\f])", "g"),
            nt = function (t, e) {
                var n = "0x" + t.slice(1) - 65536;
                return e || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            it = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            rt = function (t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            },
            ot = function () {
                d()
            },
            st = _t(function (t) {
                return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            N.apply(O = $.call(w.childNodes), w.childNodes), O[w.childNodes.length].nodeType
        } catch (e) {
            N = {
                apply: O.length ? function (t, e) {
                    P.apply(t, $.call(e))
                } : function (t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }

        function at(t, e, i, r) {
            var o, a, c, u, f, p, v, y = e && e.ownerDocument,
                w = e ? e.nodeType : 9;
            if (i = i || [], "string" != typeof t || !t || 1 !== w && 9 !== w && 11 !== w) return i;
            if (!r && (d(e), e = e || h, g)) {
                if (11 !== w && (f = J.exec(t)))
                    if (o = f[1]) {
                        if (9 === w) {
                            if (!(c = e.getElementById(o))) return i;
                            if (c.id === o) return i.push(c), i
                        } else if (y && (c = y.getElementById(o)) && b(e, c) && c.id === o) return i.push(c), i
                    } else {
                        if (f[2]) return N.apply(i, e.getElementsByTagName(t)), i;
                        if ((o = f[3]) && n.getElementsByClassName && e.getElementsByClassName) return N.apply(i, e.getElementsByClassName(o)), i
                    } if (n.qsa && !A[t + " "] && (!m || !m.test(t)) && (1 !== w || "object" !== e.nodeName.toLowerCase())) {
                    if (v = t, y = e, 1 === w && (Y.test(t) || W.test(t))) {
                        for ((y = tt.test(t) && vt(e.parentNode) || e) === e && n.scope || ((u = e.getAttribute("id")) ? u = u.replace(it, rt) : e.setAttribute("id", u = _)), a = (p = s(t)).length; a--;) p[a] = (u ? "#" + u : ":scope") + " " + bt(p[a]);
                        v = p.join(",")
                    }
                    try {
                        return N.apply(i, y.querySelectorAll(v)), i
                    } catch (e) {
                        A(t, !0)
                    } finally {
                        u === _ && e.removeAttribute("id")
                    }
                }
            }
            return l(t.replace(B, "$1"), e, i, r)
        }

        function lt() {
            var t = [];
            return function e(n, r) {
                return t.push(n + " ") > i.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
        }

        function ct(t) {
            return t[_] = !0, t
        }

        function ut(t) {
            var e = h.createElement("fieldset");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function ft(t, e) {
            for (var n = t.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = e
        }

        function dt(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function ht(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function pt(t) {
            return function (e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function gt(t) {
            return function (e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && st(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function mt(t) {
            return ct(function (e) {
                return e = +e, ct(function (n, i) {
                    for (var r, o = t([], n.length, e), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function vt(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }
        for (e in n = at.support = {}, o = at.isXML = function (t) {
                var e = t.namespaceURI,
                    n = (t.ownerDocument || t).documentElement;
                return !Q.test(e || n && n.nodeName || "HTML")
            }, d = at.setDocument = function (t) {
                var e, r, s = t ? t.ownerDocument || t : w;
                return s != h && 9 === s.nodeType && s.documentElement && (p = (h = s).documentElement, g = !o(h), w != h && (r = h.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ot, !1) : r.attachEvent && r.attachEvent("onunload", ot)), n.scope = ut(function (t) {
                    return p.appendChild(t).appendChild(h.createElement("div")), void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length
                }), n.attributes = ut(function (t) {
                    return t.className = "i", !t.getAttribute("className")
                }), n.getElementsByTagName = ut(function (t) {
                    return t.appendChild(h.createComment("")), !t.getElementsByTagName("*").length
                }), n.getElementsByClassName = Z.test(h.getElementsByClassName), n.getById = ut(function (t) {
                    return p.appendChild(t).id = _, !h.getElementsByName || !h.getElementsByName(_).length
                }), n.getById ? (i.filter.ID = function (t) {
                    var e = t.replace(et, nt);
                    return function (t) {
                        return t.getAttribute("id") === e
                    }
                }, i.find.ID = function (t, e) {
                    if (void 0 !== e.getElementById && g) {
                        var n = e.getElementById(t);
                        return n ? [n] : []
                    }
                }) : (i.filter.ID = function (t) {
                    var e = t.replace(et, nt);
                    return function (t) {
                        var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }, i.find.ID = function (t, e) {
                    if (void 0 !== e.getElementById && g) {
                        var n, i, r, o = e.getElementById(t);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === t) return [o];
                            for (r = e.getElementsByName(t), i = 0; o = r[i++];)
                                if ((n = o.getAttributeNode("id")) && n.value === t) return [o]
                        }
                        return []
                    }
                }), i.find.TAG = n.getElementsByTagName ? function (t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0
                } : function (t, e) {
                    var n, i = [],
                        r = 0,
                        o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }, i.find.CLASS = n.getElementsByClassName && function (t, e) {
                    if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t)
                }, v = [], m = [], (n.qsa = Z.test(h.querySelectorAll)) && (ut(function (t) {
                    var e;
                    p.appendChild(t).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + j + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || m.push("\\[" + j + "*(?:value|" + M + ")"), t.querySelectorAll("[id~=" + _ + "-]").length || m.push("~="), (e = h.createElement("input")).setAttribute("name", ""), t.appendChild(e), t.querySelectorAll("[name='']").length || m.push("\\[" + j + "*name" + j + "*=" + j + "*(?:''|\"\")"), t.querySelectorAll(":checked").length || m.push(":checked"), t.querySelectorAll("a#" + _ + "+*").length || m.push(".#.+[+~]"), t.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]")
                }), ut(function (t) {
                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = h.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && m.push("name" + j + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), m.push(",.*:")
                })), (n.matchesSelector = Z.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ut(function (t) {
                    n.disconnectedMatch = y.call(t, "*"), y.call(t, "[s!='']:x"), v.push("!=", H)
                }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), e = Z.test(p.compareDocumentPosition), b = e || Z.test(p.contains) ? function (t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function (t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, k = e ? function (t, e) {
                    if (t === e) return f = !0, 0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i || (1 & (i = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t == h || t.ownerDocument == w && b(w, t) ? -1 : e == h || e.ownerDocument == w && b(w, e) ? 1 : u ? L(u, t) - L(u, e) : 0 : 4 & i ? -1 : 1)
                } : function (t, e) {
                    if (t === e) return f = !0, 0;
                    var n, i = 0,
                        r = t.parentNode,
                        o = e.parentNode,
                        s = [t],
                        a = [e];
                    if (!r || !o) return t == h ? -1 : e == h ? 1 : r ? -1 : o ? 1 : u ? L(u, t) - L(u, e) : 0;
                    if (r === o) return dt(t, e);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (; s[i] === a[i];) i++;
                    return i ? dt(s[i], a[i]) : s[i] == w ? -1 : a[i] == w ? 1 : 0
                }), h
            }, at.matches = function (t, e) {
                return at(t, null, null, e)
            }, at.matchesSelector = function (t, e) {
                if (d(t), n.matchesSelector && g && !A[e + " "] && (!v || !v.test(e)) && (!m || !m.test(e))) try {
                    var i = y.call(t, e);
                    if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (t) {
                    A(e, !0)
                }
                return 0 < at(e, h, null, [t]).length
            }, at.contains = function (t, e) {
                return (t.ownerDocument || t) != h && d(t), b(t, e)
            }, at.attr = function (t, e) {
                (t.ownerDocument || t) != h && d(t);
                var r = i.attrHandle[e.toLowerCase()],
                    o = r && D.call(i.attrHandle, e.toLowerCase()) ? r(t, e, !g) : void 0;
                return void 0 !== o ? o : n.attributes || !g ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value : null
            }, at.escape = function (t) {
                return (t + "").replace(it, rt)
            }, at.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, at.uniqueSort = function (t) {
                var e, i = [],
                    r = 0,
                    o = 0;
                if (f = !n.detectDuplicates, u = !n.sortStable && t.slice(0), t.sort(k), f) {
                    for (; e = t[o++];) e === t[o] && (r = i.push(o));
                    for (; r--;) t.splice(i[r], 1)
                }
                return u = null, t
            }, r = at.getText = function (t) {
                var e, n = "",
                    i = 0,
                    o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += r(t)
                    } else if (3 === o || 4 === o) return t.nodeValue
                } else
                    for (; e = t[i++];) n += r(e);
                return n
            }, (i = at.selectors = {
                cacheLength: 50,
                createPseudo: ct,
                match: X,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (t) {
                        return t[1] = t[1].replace(et, nt), t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function (t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || at.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && at.error(t[0]), t
                    },
                    PSEUDO: function (t) {
                        var e, n = !t[6] && t[2];
                        return X.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && U.test(n) && (e = s(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(et, nt).toLowerCase();
                        return "*" === t ? function () {
                            return !0
                        } : function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function (t) {
                        var e = C[t + " "];
                        return e || (e = new RegExp("(^|" + j + ")" + t + "(" + j + "|$)")) && C(t, function (t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (t, e, n) {
                        return function (i) {
                            var r = at.attr(i, t);
                            return null == r ? "!=" === e : !e || (r += "", "=" === e ? r === n : "!=" === e ? r !== n : "^=" === e ? n && 0 === r.indexOf(n) : "*=" === e ? n && -1 < r.indexOf(n) : "$=" === e ? n && r.slice(-n.length) === n : "~=" === e ? -1 < (" " + r.replace(z, " ") + " ").indexOf(n) : "|=" === e && (r === n || r.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function (t, e, n, i, r) {
                        var o = "nth" !== t.slice(0, 3),
                            s = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === i && 0 === r ? function (t) {
                            return !!t.parentNode
                        } : function (e, n, l) {
                            var c, u, f, d, h, p, g = o !== s ? "nextSibling" : "previousSibling",
                                m = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                y = !l && !a,
                                b = !1;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (d = e; d = d[g];)
                                            if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        p = g = "only" === t && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [s ? m.firstChild : m.lastChild], s && y) {
                                    for (b = (h = (c = (u = (f = (d = m)[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[t] || [])[0] === x && c[1]) && c[2], d = h && m.childNodes[h]; d = ++h && d && d[g] || (b = h = 0) || p.pop();)
                                        if (1 === d.nodeType && ++b && d === e) {
                                            u[t] = [x, h, b];
                                            break
                                        }
                                } else if (y && (b = h = (c = (u = (f = (d = e)[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[t] || [])[0] === x && c[1]), !1 === b)
                                    for (;
                                        (d = ++h && d && d[g] || (b = h = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((u = (f = d[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[t] = [x, b]), d !== e)););
                                return (b -= r) === i || b % i == 0 && 0 <= b / i
                            }
                        }
                    },
                    PSEUDO: function (t, e) {
                        var n, r = i.pseudos[t] || i.setFilters[t.toLowerCase()] || at.error("unsupported pseudo: " + t);
                        return r[_] ? r(e) : 1 < r.length ? (n = [t, t, "", e], i.setFilters.hasOwnProperty(t.toLowerCase()) ? ct(function (t, n) {
                            for (var i, o = r(t, e), s = o.length; s--;) t[i = L(t, o[s])] = !(n[i] = o[s])
                        }) : function (t) {
                            return r(t, 0, n)
                        }) : r
                    }
                },
                pseudos: {
                    not: ct(function (t) {
                        var e = [],
                            n = [],
                            i = a(t.replace(B, "$1"));
                        return i[_] ? ct(function (t, e, n, r) {
                            for (var o, s = i(t, null, r, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
                        }) : function (t, r, o) {
                            return e[0] = t, i(e, null, o, n), e[0] = null, !n.pop()
                        }
                    }),
                    has: ct(function (t) {
                        return function (e) {
                            return 0 < at(t, e).length
                        }
                    }),
                    contains: ct(function (t) {
                        return t = t.replace(et, nt),
                            function (e) {
                                return -1 < (e.textContent || r(e)).indexOf(t)
                            }
                    }),
                    lang: ct(function (t) {
                        return V.test(t || "") || at.error("unsupported lang: " + t), t = t.replace(et, nt).toLowerCase(),
                            function (e) {
                                var n;
                                do {
                                    if (n = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function (e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function (t) {
                        return t === p
                    },
                    focus: function (t) {
                        return t === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: gt(!1),
                    disabled: gt(!0),
                    checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                    },
                    empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (t) {
                        return !i.pseudos.empty(t)
                    },
                    header: function (t) {
                        return G.test(t.nodeName)
                    },
                    input: function (t) {
                        return K.test(t.nodeName)
                    },
                    button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: mt(function () {
                        return [0]
                    }),
                    last: mt(function (t, e) {
                        return [e - 1]
                    }),
                    eq: mt(function (t, e, n) {
                        return [n < 0 ? n + e : n]
                    }),
                    even: mt(function (t, e) {
                        for (var n = 0; n < e; n += 2) t.push(n);
                        return t
                    }),
                    odd: mt(function (t, e) {
                        for (var n = 1; n < e; n += 2) t.push(n);
                        return t
                    }),
                    lt: mt(function (t, e, n) {
                        for (var i = n < 0 ? n + e : e < n ? e : n; 0 <= --i;) t.push(i);
                        return t
                    }),
                    gt: mt(function (t, e, n) {
                        for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                        return t
                    })
                }
            }).pseudos.nth = i.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) i.pseudos[e] = ht(e);
        for (e in {
                submit: !0,
                reset: !0
            }) i.pseudos[e] = pt(e);

        function yt() {}

        function bt(t) {
            for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
            return i
        }

        function _t(t, e, n) {
            var i = e.dir,
                r = e.next,
                o = r || i,
                s = n && "parentNode" === o,
                a = T++;
            return e.first ? function (e, n, r) {
                for (; e = e[i];)
                    if (1 === e.nodeType || s) return t(e, n, r);
                return !1
            } : function (e, n, l) {
                var c, u, f, d = [x, a];
                if (l) {
                    for (; e = e[i];)
                        if ((1 === e.nodeType || s) && t(e, n, l)) return !0
                } else
                    for (; e = e[i];)
                        if (1 === e.nodeType || s)
                            if (u = (f = e[_] || (e[_] = {}))[e.uniqueID] || (f[e.uniqueID] = {}), r && r === e.nodeName.toLowerCase()) e = e[i] || e;
                            else {
                                if ((c = u[o]) && c[0] === x && c[1] === a) return d[2] = c[2];
                                if ((u[o] = d)[2] = t(e, n, l)) return !0
                            } return !1
            }
        }

        function wt(t) {
            return 1 < t.length ? function (e, n, i) {
                for (var r = t.length; r--;)
                    if (!t[r](e, n, i)) return !1;
                return !0
            } : t[0]
        }

        function xt(t, e, n, i, r) {
            for (var o, s = [], a = 0, l = t.length, c = null != e; a < l; a++)(o = t[a]) && (n && !n(o, i, r) || (s.push(o), c && e.push(a)));
            return s
        }

        function Tt(t, e, n, i, r, o) {
            return i && !i[_] && (i = Tt(i)), r && !r[_] && (r = Tt(r, o)), ct(function (o, s, a, l) {
                var c, u, f, d = [],
                    h = [],
                    p = s.length,
                    g = o || function (t, e, n) {
                        for (var i = 0, r = e.length; i < r; i++) at(t, e[i], n);
                        return n
                    }(e || "*", a.nodeType ? [a] : a, []),
                    m = !t || !o && e ? g : xt(g, d, t, a, l),
                    v = n ? r || (o ? t : p || i) ? [] : s : m;
                if (n && n(m, v, a, l), i)
                    for (c = xt(v, h), i(c, [], a, l), u = c.length; u--;)(f = c[u]) && (v[h[u]] = !(m[h[u]] = f));
                if (o) {
                    if (r || t) {
                        if (r) {
                            for (c = [], u = v.length; u--;)(f = v[u]) && c.push(m[u] = f);
                            r(null, v = [], c, l)
                        }
                        for (u = v.length; u--;)(f = v[u]) && -1 < (c = r ? L(o, f) : d[u]) && (o[c] = !(s[c] = f))
                    }
                } else v = xt(v === s ? v.splice(p, v.length) : v), r ? r(null, s, v, l) : N.apply(s, v)
            })
        }

        function Ct(t) {
            for (var e, n, r, o = t.length, s = i.relative[t[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = _t(function (t) {
                    return t === e
                }, a, !0), f = _t(function (t) {
                    return -1 < L(e, t)
                }, a, !0), d = [function (t, n, i) {
                    var r = !s && (i || n !== c) || ((e = n).nodeType ? u(t, n, i) : f(t, n, i));
                    return e = null, r
                }]; l < o; l++)
                if (n = i.relative[t[l].type]) d = [_t(wt(d), n)];
                else {
                    if ((n = i.filter[t[l].type].apply(null, t[l].matches))[_]) {
                        for (r = ++l; r < o && !i.relative[t[r].type]; r++);
                        return Tt(1 < l && wt(d), 1 < l && bt(t.slice(0, l - 1).concat({
                            value: " " === t[l - 2].type ? "*" : ""
                        })).replace(B, "$1"), n, l < r && Ct(t.slice(l, r)), r < o && Ct(t = t.slice(r)), r < o && bt(t))
                    }
                    d.push(n)
                } return wt(d)
        }
        return yt.prototype = i.filters = i.pseudos, i.setFilters = new yt, s = at.tokenize = function (t, e) {
            var n, r, o, s, a, l, c, u = E[t + " "];
            if (u) return e ? 0 : u.slice(0);
            for (a = t, l = [], c = i.preFilter; a;) {
                for (s in n && !(r = q.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), n = !1, (r = W.exec(a)) && (n = r.shift(), o.push({
                        value: n,
                        type: r[0].replace(B, " ")
                    }), a = a.slice(n.length)), i.filter) !(r = X[s].exec(a)) || c[s] && !(r = c[s](r)) || (n = r.shift(), o.push({
                    value: n,
                    type: s,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return e ? a.length : a ? at.error(t) : E(t, l).slice(0)
        }, a = at.compile = function (t, e) {
            var n, r, o, a, l, u, f = [],
                p = [],
                m = S[t + " "];
            if (!m) {
                for (e || (e = s(t)), n = e.length; n--;)(m = Ct(e[n]))[_] ? f.push(m) : p.push(m);
                (m = S(t, (r = p, a = 0 < (o = f).length, l = 0 < r.length, u = function (t, e, n, s, u) {
                    var f, p, m, v = 0,
                        y = "0",
                        b = t && [],
                        _ = [],
                        w = c,
                        T = t || l && i.find.TAG("*", u),
                        C = x += null == w ? 1 : Math.random() || .1,
                        E = T.length;
                    for (u && (c = e == h || e || u); y !== E && null != (f = T[y]); y++) {
                        if (l && f) {
                            for (p = 0, e || f.ownerDocument == h || (d(f), n = !g); m = r[p++];)
                                if (m(f, e || h, n)) {
                                    s.push(f);
                                    break
                                } u && (x = C)
                        }
                        a && ((f = !m && f) && v--, t && b.push(f))
                    }
                    if (v += y, a && y !== v) {
                        for (p = 0; m = o[p++];) m(b, _, e, n);
                        if (t) {
                            if (0 < v)
                                for (; y--;) b[y] || _[y] || (_[y] = I.call(s));
                            _ = xt(_)
                        }
                        N.apply(s, _), u && !t && 0 < _.length && 1 < v + o.length && at.uniqueSort(s)
                    }
                    return u && (x = C, c = w), b
                }, a ? ct(u) : u))).selector = t
            }
            return m
        }, l = at.select = function (t, e, n, r) {
            var o, l, c, u, f, d = "function" == typeof t && t,
                h = !r && s(t = d.selector || t);
            if (n = n || [], 1 === h.length) {
                if (2 < (l = h[0] = h[0].slice(0)).length && "ID" === (c = l[0]).type && 9 === e.nodeType && g && i.relative[l[1].type]) {
                    if (!(e = (i.find.ID(c.matches[0].replace(et, nt), e) || [])[0])) return n;
                    d && (e = e.parentNode), t = t.slice(l.shift().value.length)
                }
                for (o = X.needsContext.test(t) ? 0 : l.length; o-- && (c = l[o], !i.relative[u = c.type]);)
                    if ((f = i.find[u]) && (r = f(c.matches[0].replace(et, nt), tt.test(l[0].type) && vt(e.parentNode) || e))) {
                        if (l.splice(o, 1), !(t = r.length && bt(l))) return N.apply(n, r), n;
                        break
                    }
            }
            return (d || a(t, h))(r, e, !g, n, !e || tt.test(t) && vt(e.parentNode) || e), n
        }, n.sortStable = _.split("").sort(k).join("") === _, n.detectDuplicates = !!f, d(), n.sortDetached = ut(function (t) {
            return 1 & t.compareDocumentPosition(h.createElement("fieldset"))
        }), ut(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || ft("type|href|height|width", function (t, e, n) {
            if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), n.attributes && ut(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || ft("value", function (t, e, n) {
            if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }), ut(function (t) {
            return null == t.getAttribute("disabled")
        }) || ft(M, function (t, e, n) {
            var i;
            if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), at
    }(t);
    w.find = T, w.expr = T.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = T.uniqueSort, w.text = T.getText, w.isXMLDoc = T.isXML, w.contains = T.contains, w.escapeSelector = T.escape;
    var C = function (t, e, n) {
            for (var i = [], r = void 0 !== n;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (r && w(t).is(n)) break;
                    i.push(t)
                } return i
        },
        E = function (t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        },
        S = w.expr.match.needsContext;

    function A(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }
    var k = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function D(t, e, n) {
        return p(e) ? w.grep(t, function (t, i) {
            return !!e.call(t, i, t) !== n
        }) : e.nodeType ? w.grep(t, function (t) {
            return t === e !== n
        }) : "string" != typeof e ? w.grep(t, function (t) {
            return -1 < a.call(e, t) !== n
        }) : w.filter(e, t, n)
    }
    w.filter = function (t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? w.find.matchesSelector(i, t) ? [i] : [] : w.find.matches(t, w.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, w.fn.extend({
        find: function (t) {
            var e, n, i = this.length,
                r = this;
            if ("string" != typeof t) return this.pushStack(w(t).filter(function () {
                for (e = 0; e < i; e++)
                    if (w.contains(r[e], this)) return !0
            }));
            for (n = this.pushStack([]), e = 0; e < i; e++) w.find(t, r[e], n);
            return 1 < i ? w.uniqueSort(n) : n
        },
        filter: function (t) {
            return this.pushStack(D(this, t || [], !1))
        },
        not: function (t) {
            return this.pushStack(D(this, t || [], !0))
        },
        is: function (t) {
            return !!D(this, "string" == typeof t && S.test(t) ? w(t) : t || [], !1).length
        }
    });
    var O, I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function (t, e, n) {
        var i, r;
        if (!t) return this;
        if (n = n || O, "string" == typeof t) {
            if (!(i = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : I.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
            if (i[1]) {
                if (e = e instanceof w ? e[0] : e, w.merge(this, w.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : m, !0)), k.test(i[1]) && w.isPlainObject(e))
                    for (i in e) p(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                return this
            }
            return (r = m.getElementById(i[2])) && (this[0] = r, this.length = 1), this
        }
        return t.nodeType ? (this[0] = t, this.length = 1, this) : p(t) ? void 0 !== n.ready ? n.ready(t) : t(w) : w.makeArray(t, this)
    }).prototype = w.fn, O = w(m);
    var P = /^(?:parents|prev(?:Until|All))/,
        N = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function $(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }
    w.fn.extend({
        has: function (t) {
            var e = w(t, this),
                n = e.length;
            return this.filter(function () {
                for (var t = 0; t < n; t++)
                    if (w.contains(this, e[t])) return !0
            })
        },
        closest: function (t, e) {
            var n, i = 0,
                r = this.length,
                o = [],
                s = "string" != typeof t && w(t);
            if (!S.test(t))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && w.find.matchesSelector(n, t))) {
                            o.push(n);
                            break
                        } return this.pushStack(1 < o.length ? w.uniqueSort(o) : o)
        },
        index: function (t) {
            return t ? "string" == typeof t ? a.call(w(t), this[0]) : a.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (t, e) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(t, e))))
        },
        addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), w.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function (t) {
            return C(t, "parentNode")
        },
        parentsUntil: function (t, e, n) {
            return C(t, "parentNode", n)
        },
        next: function (t) {
            return $(t, "nextSibling")
        },
        prev: function (t) {
            return $(t, "previousSibling")
        },
        nextAll: function (t) {
            return C(t, "nextSibling")
        },
        prevAll: function (t) {
            return C(t, "previousSibling")
        },
        nextUntil: function (t, e, n) {
            return C(t, "nextSibling", n)
        },
        prevUntil: function (t, e, n) {
            return C(t, "previousSibling", n)
        },
        siblings: function (t) {
            return E((t.parentNode || {}).firstChild, t)
        },
        children: function (t) {
            return E(t.firstChild)
        },
        contents: function (t) {
            return null != t.contentDocument && i(t.contentDocument) ? t.contentDocument : (A(t, "template") && (t = t.content || t), w.merge([], t.childNodes))
        }
    }, function (t, e) {
        w.fn[t] = function (n, i) {
            var r = w.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = w.filter(i, r)), 1 < this.length && (N[t] || w.uniqueSort(r), P.test(t) && r.reverse()), this.pushStack(r)
        }
    });
    var L = /[^\x20\t\r\n\f]+/g;

    function M(t) {
        return t
    }

    function j(t) {
        throw t
    }

    function R(t, e, n, i) {
        var r;
        try {
            t && p(r = t.promise) ? r.call(t).done(e).fail(n) : t && p(r = t.then) ? r.call(t, e, n) : e.apply(void 0, [t].slice(i))
        } catch (t) {
            n.apply(void 0, [t])
        }
    }
    w.Callbacks = function (t) {
        var e, n;
        t = "string" == typeof t ? (e = t, n = {}, w.each(e.match(L) || [], function (t, e) {
            n[e] = !0
        }), n) : w.extend({}, t);
        var i, r, o, s, a = [],
            l = [],
            c = -1,
            u = function () {
                for (s = s || t.once, o = i = !0; l.length; c = -1)
                    for (r = l.shift(); ++c < a.length;) !1 === a[c].apply(r[0], r[1]) && t.stopOnFalse && (c = a.length, r = !1);
                t.memory || (r = !1), i = !1, s && (a = r ? [] : "")
            },
            f = {
                add: function () {
                    return a && (r && !i && (c = a.length - 1, l.push(r)), function e(n) {
                        w.each(n, function (n, i) {
                            p(i) ? t.unique && f.has(i) || a.push(i) : i && i.length && "string" !== b(i) && e(i)
                        })
                    }(arguments), r && !i && u()), this
                },
                remove: function () {
                    return w.each(arguments, function (t, e) {
                        for (var n; - 1 < (n = w.inArray(e, a, n));) a.splice(n, 1), n <= c && c--
                    }), this
                },
                has: function (t) {
                    return t ? -1 < w.inArray(t, a) : 0 < a.length
                },
                empty: function () {
                    return a && (a = []), this
                },
                disable: function () {
                    return s = l = [], a = r = "", this
                },
                disabled: function () {
                    return !a
                },
                lock: function () {
                    return s = l = [], r || i || (a = r = ""), this
                },
                locked: function () {
                    return !!s
                },
                fireWith: function (t, e) {
                    return s || (e = [t, (e = e || []).slice ? e.slice() : e], l.push(e), i || u()), this
                },
                fire: function () {
                    return f.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!o
                }
            };
        return f
    }, w.extend({
        Deferred: function (e) {
            var n = [
                    ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                    ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                r = {
                    state: function () {
                        return i
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function (t) {
                        return r.then(null, t)
                    },
                    pipe: function () {
                        var t = arguments;
                        return w.Deferred(function (e) {
                            w.each(n, function (n, i) {
                                var r = p(t[i[4]]) && t[i[4]];
                                o[i[1]](function () {
                                    var t = r && r.apply(this, arguments);
                                    t && p(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, r ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    then: function (e, i, r) {
                        var o = 0;

                        function s(e, n, i, r) {
                            return function () {
                                var a = this,
                                    l = arguments,
                                    c = function () {
                                        var t, c;
                                        if (!(e < o)) {
                                            if ((t = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            c = t && ("object" == typeof t || "function" == typeof t) && t.then, p(c) ? r ? c.call(t, s(o, n, M, r), s(o, n, j, r)) : (o++, c.call(t, s(o, n, M, r), s(o, n, j, r), s(o, n, M, n.notifyWith))) : (i !== M && (a = void 0, l = [t]), (r || n.resolveWith)(a, l))
                                        }
                                    },
                                    u = r ? c : function () {
                                        try {
                                            c()
                                        } catch (t) {
                                            w.Deferred.exceptionHook && w.Deferred.exceptionHook(t, u.stackTrace), o <= e + 1 && (i !== j && (a = void 0, l = [t]), n.rejectWith(a, l))
                                        }
                                    };
                                e ? u() : (w.Deferred.getStackHook && (u.stackTrace = w.Deferred.getStackHook()), t.setTimeout(u))
                            }
                        }
                        return w.Deferred(function (t) {
                            n[0][3].add(s(0, t, p(r) ? r : M, t.notifyWith)), n[1][3].add(s(0, t, p(e) ? e : M)), n[2][3].add(s(0, t, p(i) ? i : j))
                        }).promise()
                    },
                    promise: function (t) {
                        return null != t ? w.extend(t, r) : r
                    }
                },
                o = {};
            return w.each(n, function (t, e) {
                var s = e[2],
                    a = e[5];
                r[e[1]] = s.add, a && s.add(function () {
                    i = a
                }, n[3 - t][2].disable, n[3 - t][3].disable, n[0][2].lock, n[0][3].lock), s.add(e[3].fire), o[e[0]] = function () {
                    return o[e[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[e[0] + "With"] = s.fireWith
            }), r.promise(o), e && e.call(o, o), o
        },
        when: function (t) {
            var e = arguments.length,
                n = e,
                i = Array(n),
                o = r.call(arguments),
                s = w.Deferred(),
                a = function (t) {
                    return function (n) {
                        i[t] = this, o[t] = 1 < arguments.length ? r.call(arguments) : n, --e || s.resolveWith(i, o)
                    }
                };
            if (e <= 1 && (R(t, s.done(a(n)).resolve, s.reject, !e), "pending" === s.state() || p(o[n] && o[n].then))) return s.then();
            for (; n--;) R(o[n], a(n), s.reject);
            return s.promise()
        }
    });
    var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function (e, n) {
        t.console && t.console.warn && e && F.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
    }, w.readyException = function (e) {
        t.setTimeout(function () {
            throw e
        })
    };
    var H = w.Deferred();

    function z() {
        m.removeEventListener("DOMContentLoaded", z), t.removeEventListener("load", z), w.ready()
    }
    w.fn.ready = function (t) {
        return H.then(t).catch(function (t) {
            w.readyException(t)
        }), this
    }, w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (t) {
            (!0 === t ? --w.readyWait : w.isReady) || (w.isReady = !0) !== t && 0 < --w.readyWait || H.resolveWith(m, [w])
        }
    }), w.ready.then = H.then, "complete" === m.readyState || "loading" !== m.readyState && !m.documentElement.doScroll ? t.setTimeout(w.ready) : (m.addEventListener("DOMContentLoaded", z), t.addEventListener("load", z));
    var B = function (t, e, n, i, r, o, s) {
            var a = 0,
                l = t.length,
                c = null == n;
            if ("object" === b(n))
                for (a in r = !0, n) B(t, e, a, n[a], !0, o, s);
            else if (void 0 !== i && (r = !0, p(i) || (s = !0), c && (s ? (e.call(t, i), e = null) : (c = e, e = function (t, e, n) {
                    return c.call(w(t), n)
                })), e))
                for (; a < l; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
            return r ? t : c ? e.call(t) : l ? e(t[0], n) : o
        },
        q = /^-ms-/,
        W = /-([a-z])/g;

    function Y(t, e) {
        return e.toUpperCase()
    }

    function U(t) {
        return t.replace(q, "ms-").replace(W, Y)
    }
    var V = function (t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    };

    function X() {
        this.expando = w.expando + X.uid++
    }
    X.uid = 1, X.prototype = {
        cache: function (t) {
            var e = t[this.expando];
            return e || (e = {}, V(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        },
        set: function (t, e, n) {
            var i, r = this.cache(t);
            if ("string" == typeof e) r[U(e)] = n;
            else
                for (i in e) r[U(i)] = e[i];
            return r
        },
        get: function (t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][U(e)]
        },
        access: function (t, e, n) {
            return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
        },
        remove: function (t, e) {
            var n, i = t[this.expando];
            if (void 0 !== i) {
                if (void 0 !== e) {
                    n = (e = Array.isArray(e) ? e.map(U) : (e = U(e)) in i ? [e] : e.match(L) || []).length;
                    for (; n--;) delete i[e[n]]
                }(void 0 === e || w.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function (t) {
            var e = t[this.expando];
            return void 0 !== e && !w.isEmptyObject(e)
        }
    };
    var Q = new X,
        K = new X,
        G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function J(t, e, n) {
        var i, r;
        if (void 0 === n && 1 === t.nodeType)
            if (i = "data-" + e.replace(Z, "-$&").toLowerCase(), "string" == typeof (n = t.getAttribute(i))) {
                try {
                    n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : G.test(r) ? JSON.parse(r) : r)
                } catch (t) {}
                K.set(t, e, n)
            } else n = void 0;
        return n
    }
    w.extend({
        hasData: function (t) {
            return K.hasData(t) || Q.hasData(t)
        },
        data: function (t, e, n) {
            return K.access(t, e, n)
        },
        removeData: function (t, e) {
            K.remove(t, e)
        },
        _data: function (t, e, n) {
            return Q.access(t, e, n)
        },
        _removeData: function (t, e) {
            Q.remove(t, e)
        }
    }), w.fn.extend({
        data: function (t, e) {
            var n, i, r, o = this[0],
                s = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (r = K.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = U(i.slice(5)), J(o, i, r[i]));
                    Q.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function () {
                K.set(this, t)
            }) : B(this, function (e) {
                var n;
                if (o && void 0 === e) return void 0 !== (n = K.get(o, t)) ? n : void 0 !== (n = J(o, t)) ? n : void 0;
                this.each(function () {
                    K.set(this, t, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function (t) {
            return this.each(function () {
                K.remove(this, t)
            })
        }
    }), w.extend({
        queue: function (t, e, n) {
            var i;
            if (t) return e = (e || "fx") + "queue", i = Q.get(t, e), n && (!i || Array.isArray(n) ? i = Q.access(t, e, w.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function (t, e) {
            e = e || "fx";
            var n = w.queue(t, e),
                i = n.length,
                r = n.shift(),
                o = w._queueHooks(t, e);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, function () {
                w.dequeue(t, e)
            }, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function (t, e) {
            var n = e + "queueHooks";
            return Q.get(t, n) || Q.access(t, n, {
                empty: w.Callbacks("once memory").add(function () {
                    Q.remove(t, [e + "queue", n])
                })
            })
        }
    }), w.fn.extend({
        queue: function (t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? w.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                var n = w.queue(this, t, e);
                w._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && w.dequeue(this, t)
            })
        },
        dequeue: function (t) {
            return this.each(function () {
                w.dequeue(this, t)
            })
        },
        clearQueue: function (t) {
            return this.queue(t || "fx", [])
        },
        promise: function (t, e) {
            var n, i = 1,
                r = w.Deferred(),
                o = this,
                s = this.length,
                a = function () {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)(n = Q.get(o[s], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(e)
        }
    });
    var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        et = new RegExp("^(?:([+-])=|)(" + tt + ")([a-z%]*)$", "i"),
        nt = ["Top", "Right", "Bottom", "Left"],
        it = m.documentElement,
        rt = function (t) {
            return w.contains(t.ownerDocument, t)
        },
        ot = {
            composed: !0
        };
    it.getRootNode && (rt = function (t) {
        return w.contains(t.ownerDocument, t) || t.getRootNode(ot) === t.ownerDocument
    });
    var st = function (t, e) {
        return "none" === (t = e || t).style.display || "" === t.style.display && rt(t) && "none" === w.css(t, "display")
    };

    function at(t, e, n, i) {
        var r, o, s = 20,
            a = i ? function () {
                return i.cur()
            } : function () {
                return w.css(t, e, "")
            },
            l = a(),
            c = n && n[3] || (w.cssNumber[e] ? "" : "px"),
            u = t.nodeType && (w.cssNumber[e] || "px" !== c && +l) && et.exec(w.css(t, e));
        if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; s--;) w.style(t, e, u + c), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), u /= o;
            u *= 2, w.style(t, e, u + c), n = n || []
        }
        return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
    }
    var lt = {};

    function ct(t, e) {
        for (var n, i, r, o, s, a, l, c = [], u = 0, f = t.length; u < f; u++)(i = t[u]).style && (n = i.style.display, e ? ("none" === n && (c[u] = Q.get(i, "display") || null, c[u] || (i.style.display = "")), "" === i.style.display && st(i) && (c[u] = (l = s = o = void 0, s = (r = i).ownerDocument, a = r.nodeName, (l = lt[a]) || (o = s.body.appendChild(s.createElement(a)), l = w.css(o, "display"), o.parentNode.removeChild(o), "none" === l && (l = "block"), lt[a] = l)))) : "none" !== n && (c[u] = "none", Q.set(i, "display", n)));
        for (u = 0; u < f; u++) null != c[u] && (t[u].style.display = c[u]);
        return t
    }
    w.fn.extend({
        show: function () {
            return ct(this, !0)
        },
        hide: function () {
            return ct(this)
        },
        toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                st(this) ? w(this).show() : w(this).hide()
            })
        }
    });
    var ut, ft, dt = /^(?:checkbox|radio)$/i,
        ht = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        pt = /^$|^module$|\/(?:java|ecma)script/i;
    ut = m.createDocumentFragment().appendChild(m.createElement("div")), (ft = m.createElement("input")).setAttribute("type", "radio"), ft.setAttribute("checked", "checked"), ft.setAttribute("name", "t"), ut.appendChild(ft), h.checkClone = ut.cloneNode(!0).cloneNode(!0).lastChild.checked, ut.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!ut.cloneNode(!0).lastChild.defaultValue, ut.innerHTML = "<option></option>", h.option = !!ut.lastChild;
    var gt = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function mt(t, e) {
        var n;
        return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && A(t, e) ? w.merge([t], n) : n
    }

    function vt(t, e) {
        for (var n = 0, i = t.length; n < i; n++) Q.set(t[n], "globalEval", !e || Q.get(e[n], "globalEval"))
    }
    gt.tbody = gt.tfoot = gt.colgroup = gt.caption = gt.thead, gt.th = gt.td, h.option || (gt.optgroup = gt.option = [1, "<select multiple='multiple'>", "</select>"]);
    var yt = /<|&#?\w+;/;

    function bt(t, e, n, i, r) {
        for (var o, s, a, l, c, u, f = e.createDocumentFragment(), d = [], h = 0, p = t.length; h < p; h++)
            if ((o = t[h]) || 0 === o)
                if ("object" === b(o)) w.merge(d, o.nodeType ? [o] : o);
                else if (yt.test(o)) {
            for (s = s || f.appendChild(e.createElement("div")), a = (ht.exec(o) || ["", ""])[1].toLowerCase(), l = gt[a] || gt._default, s.innerHTML = l[1] + w.htmlPrefilter(o) + l[2], u = l[0]; u--;) s = s.lastChild;
            w.merge(d, s.childNodes), (s = f.firstChild).textContent = ""
        } else d.push(e.createTextNode(o));
        for (f.textContent = "", h = 0; o = d[h++];)
            if (i && -1 < w.inArray(o, i)) r && r.push(o);
            else if (c = rt(o), s = mt(f.appendChild(o), "script"), c && vt(s), n)
            for (u = 0; o = s[u++];) pt.test(o.type || "") && n.push(o);
        return f
    }
    var _t = /^key/,
        wt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        xt = /^([^.]*)(?:\.(.+)|)/;

    function Tt() {
        return !0
    }

    function Ct() {
        return !1
    }

    function Et(t, e) {
        return t === function () {
            try {
                return m.activeElement
            } catch (t) {}
        }() == ("focus" === e)
    }

    function St(t, e, n, i, r, o) {
        var s, a;
        if ("object" == typeof e) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), e) St(t, a, n, i, e[a], o);
            return t
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Ct;
        else if (!r) return t;
        return 1 === o && (s = r, (r = function (t) {
            return w().off(t), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = w.guid++)), t.each(function () {
            w.event.add(this, e, r, i, n)
        })
    }

    function At(t, e, n) {
        n ? (Q.set(t, e, !1), w.event.add(t, e, {
            namespace: !1,
            handler: function (t) {
                var i, o, s = Q.get(this, e);
                if (1 & t.isTrigger && this[e]) {
                    if (s.length)(w.event.special[e] || {}).delegateType && t.stopPropagation();
                    else if (s = r.call(arguments), Q.set(this, e, s), i = n(this, e), this[e](), s !== (o = Q.get(this, e)) || i ? Q.set(this, e, !1) : o = {}, s !== o) return t.stopImmediatePropagation(), t.preventDefault(), o.value
                } else s.length && (Q.set(this, e, {
                    value: w.event.trigger(w.extend(s[0], w.Event.prototype), s.slice(1), this)
                }), t.stopImmediatePropagation())
            }
        })) : void 0 === Q.get(t, e) && w.event.add(t, e, Tt)
    }
    w.event = {
        global: {},
        add: function (t, e, n, i, r) {
            var o, s, a, l, c, u, f, d, h, p, g, m = Q.get(t);
            if (V(t))
                for (n.handler && (n = (o = n).handler, r = o.selector), r && w.find.matchesSelector(it, r), n.guid || (n.guid = w.guid++), (l = m.events) || (l = m.events = Object.create(null)), (s = m.handle) || (s = m.handle = function (e) {
                        return void 0 !== w && w.event.triggered !== e.type ? w.event.dispatch.apply(t, arguments) : void 0
                    }), c = (e = (e || "").match(L) || [""]).length; c--;) h = g = (a = xt.exec(e[c]) || [])[1], p = (a[2] || "").split(".").sort(), h && (f = w.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, f = w.event.special[h] || {}, u = w.extend({
                    type: h,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && w.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, o), (d = l[h]) || ((d = l[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, i, p, s) || t.addEventListener && t.addEventListener(h, s)), f.add && (f.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, u) : d.push(u), w.event.global[h] = !0)
        },
        remove: function (t, e, n, i, r) {
            var o, s, a, l, c, u, f, d, h, p, g, m = Q.hasData(t) && Q.get(t);
            if (m && (l = m.events)) {
                for (c = (e = (e || "").match(L) || [""]).length; c--;)
                    if (h = g = (a = xt.exec(e[c]) || [])[1], p = (a[2] || "").split(".").sort(), h) {
                        for (f = w.event.special[h] || {}, d = l[h = (i ? f.delegateType : f.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) u = d[o], !r && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(o, 1), u.selector && d.delegateCount--, f.remove && f.remove.call(t, u));
                        s && !d.length && (f.teardown && !1 !== f.teardown.call(t, p, m.handle) || w.removeEvent(t, h, m.handle), delete l[h])
                    } else
                        for (h in l) w.event.remove(t, h + e[c], n, i, !0);
                w.isEmptyObject(l) && Q.remove(t, "handle events")
            }
        },
        dispatch: function (t) {
            var e, n, i, r, o, s, a = new Array(arguments.length),
                l = w.event.fix(t),
                c = (Q.get(this, "events") || Object.create(null))[l.type] || [],
                u = w.event.special[l.type] || {};
            for (a[0] = l, e = 1; e < arguments.length; e++) a[e] = arguments[e];
            if (l.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
                for (s = w.event.handlers.call(this, l, c), e = 0;
                    (r = s[e++]) && !l.isPropagationStopped();)
                    for (l.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o, l.data = o.data, void 0 !== (i = ((w.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, l), l.result
            }
        },
        handlers: function (t, e) {
            var n, i, r, o, s, a = [],
                l = e.delegateCount,
                c = t.target;
            if (l && c.nodeType && !("click" === t.type && 1 <= t.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                        for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[r = (i = e[n]).selector + " "] && (s[r] = i.needsContext ? -1 < w(r, this).index(c) : w.find(r, this, null, [c]).length), s[r] && o.push(i);
                        o.length && a.push({
                            elem: c,
                            handlers: o
                        })
                    } return c = this, l < e.length && a.push({
                elem: c,
                handlers: e.slice(l)
            }), a
        },
        addProp: function (t, e) {
            Object.defineProperty(w.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: p(e) ? function () {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function (e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function (t) {
            return t[w.expando] ? t : new w.Event(t)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function (t) {
                    var e = this || t;
                    return dt.test(e.type) && e.click && A(e, "input") && At(e, "click", Tt), !1
                },
                trigger: function (t) {
                    var e = this || t;
                    return dt.test(e.type) && e.click && A(e, "input") && At(e, "click"), !0
                },
                _default: function (t) {
                    var e = t.target;
                    return dt.test(e.type) && e.click && A(e, "input") && Q.get(e, "click") || A(e, "a")
                }
            },
            beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, w.removeEvent = function (t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }, w.Event = function (t, e) {
        if (!(this instanceof w.Event)) return new w.Event(t, e);
        t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Tt : Ct, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && w.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[w.expando] = !0
    }, w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: Ct,
        isPropagationStopped: Ct,
        isImmediatePropagationStopped: Ct,
        isSimulated: !1,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = Tt, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = Tt, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = Tt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (t) {
            var e = t.button;
            return null == t.which && _t.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && wt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, w.event.addProp), w.each({
        focus: "focusin",
        blur: "focusout"
    }, function (t, e) {
        w.event.special[t] = {
            setup: function () {
                return At(this, t, Et), !1
            },
            trigger: function () {
                return At(this, t), !0
            },
            delegateType: e
        }
    }), w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (t, e) {
        w.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function (t) {
                var n, i = t.relatedTarget,
                    r = t.handleObj;
                return i && (i === this || w.contains(this, i)) || (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), w.fn.extend({
        on: function (t, e, n, i) {
            return St(this, t, e, n, i)
        },
        one: function (t, e, n, i) {
            return St(this, t, e, n, i, 1)
        },
        off: function (t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, w(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, e, t[r]);
                return this
            }
            return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = Ct), this.each(function () {
                w.event.remove(this, t, n, e)
            })
        }
    });
    var kt = /<script|<style|<link/i,
        Dt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function It(t, e) {
        return A(t, "table") && A(11 !== e.nodeType ? e : e.firstChild, "tr") && w(t).children("tbody")[0] || t
    }

    function Pt(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function Nt(t) {
        return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
    }

    function $t(t, e) {
        var n, i, r, o, s, a;
        if (1 === e.nodeType) {
            if (Q.hasData(t) && (a = Q.get(t).events))
                for (r in Q.remove(e, "handle events"), a)
                    for (n = 0, i = a[r].length; n < i; n++) w.event.add(e, r, a[r][n]);
            K.hasData(t) && (o = K.access(t), s = w.extend({}, o), K.set(e, s))
        }
    }

    function Lt(t, e, n, i) {
        e = o(e);
        var r, s, a, l, c, u, f = 0,
            d = t.length,
            g = d - 1,
            m = e[0],
            v = p(m);
        if (v || 1 < d && "string" == typeof m && !h.checkClone && Dt.test(m)) return t.each(function (r) {
            var o = t.eq(r);
            v && (e[0] = m.call(this, r, o.html())), Lt(o, e, n, i)
        });
        if (d && (s = (r = bt(e, t[0].ownerDocument, !1, t, i)).firstChild, 1 === r.childNodes.length && (r = s), s || i)) {
            for (l = (a = w.map(mt(r, "script"), Pt)).length; f < d; f++) c = r, f !== g && (c = w.clone(c, !0, !0), l && w.merge(a, mt(c, "script"))), n.call(t[f], c, f);
            if (l)
                for (u = a[a.length - 1].ownerDocument, w.map(a, Nt), f = 0; f < l; f++) c = a[f], pt.test(c.type || "") && !Q.access(c, "globalEval") && w.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? w._evalUrl && !c.noModule && w._evalUrl(c.src, {
                    nonce: c.nonce || c.getAttribute("nonce")
                }, u) : y(c.textContent.replace(Ot, ""), c, u))
        }
        return t
    }

    function Mt(t, e, n) {
        for (var i, r = e ? w.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || w.cleanData(mt(i)), i.parentNode && (n && rt(i) && vt(mt(i, "script")), i.parentNode.removeChild(i));
        return t
    }
    w.extend({
        htmlPrefilter: function (t) {
            return t
        },
        clone: function (t, e, n) {
            var i, r, o, s, a, l, c, u = t.cloneNode(!0),
                f = rt(t);
            if (!(h.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || w.isXMLDoc(t)))
                for (s = mt(u), i = 0, r = (o = mt(t)).length; i < r; i++) a = o[i], "input" === (c = (l = s[i]).nodeName.toLowerCase()) && dt.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
            if (e)
                if (n)
                    for (o = o || mt(t), s = s || mt(u), i = 0, r = o.length; i < r; i++) $t(o[i], s[i]);
                else $t(t, u);
            return 0 < (s = mt(u, "script")).length && vt(s, !f && mt(t, "script")), u
        },
        cleanData: function (t) {
            for (var e, n, i, r = w.event.special, o = 0; void 0 !== (n = t[o]); o++)
                if (V(n)) {
                    if (e = n[Q.expando]) {
                        if (e.events)
                            for (i in e.events) r[i] ? w.event.remove(n, i) : w.removeEvent(n, i, e.handle);
                        n[Q.expando] = void 0
                    }
                    n[K.expando] && (n[K.expando] = void 0)
                }
        }
    }), w.fn.extend({
        detach: function (t) {
            return Mt(this, t, !0)
        },
        remove: function (t) {
            return Mt(this, t)
        },
        text: function (t) {
            return B(this, function (t) {
                return void 0 === t ? w.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function () {
            return Lt(this, arguments, function (t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || It(this, t).appendChild(t)
            })
        },
        prepend: function () {
            return Lt(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = It(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function () {
            return Lt(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function () {
            return Lt(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (w.cleanData(mt(t, !1)), t.textContent = "");
            return this
        },
        clone: function (t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function () {
                return w.clone(this, t, e)
            })
        },
        html: function (t) {
            return B(this, function (t) {
                var e = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !kt.test(t) && !gt[(ht.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = w.htmlPrefilter(t);
                    try {
                        for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (w.cleanData(mt(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function () {
            var t = [];
            return Lt(this, arguments, function (e) {
                var n = this.parentNode;
                w.inArray(this, t) < 0 && (w.cleanData(mt(this)), n && n.replaceChild(e, this))
            }, t)
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, e) {
        w.fn[t] = function (t) {
            for (var n, i = [], r = w(t), o = r.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), w(r[a])[e](n), s.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var jt = new RegExp("^(" + tt + ")(?!px)[a-z%]+$", "i"),
        Rt = function (e) {
            var n = e.ownerDocument.defaultView;
            return n && n.opener || (n = t), n.getComputedStyle(e)
        },
        Ft = function (t, e, n) {
            var i, r, o = {};
            for (r in e) o[r] = t.style[r], t.style[r] = e[r];
            for (r in i = n.call(t), e) t.style[r] = o[r];
            return i
        },
        Ht = new RegExp(nt.join("|"), "i");

    function zt(t, e, n) {
        var i, r, o, s, a = t.style;
        return (n = n || Rt(t)) && ("" !== (s = n.getPropertyValue(e) || n[e]) || rt(t) || (s = w.style(t, e)), !h.pixelBoxStyles() && jt.test(s) && Ht.test(e) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function Bt(t, e) {
        return {
            get: function () {
                if (!t()) return (this.get = e).apply(this, arguments);
                delete this.get
            }
        }
    }! function () {
        function e() {
            if (u) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", it.appendChild(c).appendChild(u);
                var e = t.getComputedStyle(u);
                i = "1%" !== e.top, l = 12 === n(e.marginLeft), u.style.right = "60%", s = 36 === n(e.right), r = 36 === n(e.width), u.style.position = "absolute", o = 12 === n(u.offsetWidth / 3), it.removeChild(c), u = null
            }
        }

        function n(t) {
            return Math.round(parseFloat(t))
        }
        var i, r, o, s, a, l, c = m.createElement("div"),
            u = m.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === u.style.backgroundClip, w.extend(h, {
            boxSizingReliable: function () {
                return e(), r
            },
            pixelBoxStyles: function () {
                return e(), s
            },
            pixelPosition: function () {
                return e(), i
            },
            reliableMarginLeft: function () {
                return e(), l
            },
            scrollboxSize: function () {
                return e(), o
            },
            reliableTrDimensions: function () {
                var e, n, i, r;
                return null == a && (e = m.createElement("table"), n = m.createElement("tr"), i = m.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", n.style.height = "1px", i.style.height = "9px", it.appendChild(e).appendChild(n).appendChild(i), r = t.getComputedStyle(n), a = 3 < parseInt(r.height), it.removeChild(e)), a
            }
        }))
    }();
    var qt = ["Webkit", "Moz", "ms"],
        Wt = m.createElement("div").style,
        Yt = {};

    function Ut(t) {
        return w.cssProps[t] || Yt[t] || (t in Wt ? t : Yt[t] = function (t) {
            for (var e = t[0].toUpperCase() + t.slice(1), n = qt.length; n--;)
                if ((t = qt[n] + e) in Wt) return t
        }(t) || t)
    }
    var Vt = /^(none|table(?!-c[ea]).+)/,
        Xt = /^--/,
        Qt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Kt = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Gt(t, e, n) {
        var i = et.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
    }

    function Zt(t, e, n, i, r, o) {
        var s = "width" === e ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (l += w.css(t, n + nt[s], !0, r)), i ? ("content" === n && (l -= w.css(t, "padding" + nt[s], !0, r)), "margin" !== n && (l -= w.css(t, "border" + nt[s] + "Width", !0, r))) : (l += w.css(t, "padding" + nt[s], !0, r), "padding" !== n ? l += w.css(t, "border" + nt[s] + "Width", !0, r) : a += w.css(t, "border" + nt[s] + "Width", !0, r));
        return !i && 0 <= o && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - a - .5)) || 0), l
    }

    function Jt(t, e, n) {
        var i = Rt(t),
            r = (!h.boxSizingReliable() || n) && "border-box" === w.css(t, "boxSizing", !1, i),
            o = r,
            s = zt(t, e, i),
            a = "offset" + e[0].toUpperCase() + e.slice(1);
        if (jt.test(s)) {
            if (!n) return s;
            s = "auto"
        }
        return (!h.boxSizingReliable() && r || !h.reliableTrDimensions() && A(t, "tr") || "auto" === s || !parseFloat(s) && "inline" === w.css(t, "display", !1, i)) && t.getClientRects().length && (r = "border-box" === w.css(t, "boxSizing", !1, i), (o = a in t) && (s = t[a])), (s = parseFloat(s) || 0) + Zt(t, e, n || (r ? "border" : "content"), o, i, s) + "px"
    }

    function te(t, e, n, i, r) {
        return new te.prototype.init(t, e, n, i, r)
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var n = zt(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, o, s, a = U(e),
                    l = Xt.test(e),
                    c = t.style;
                if (l || (e = Ut(a)), s = w.cssHooks[e] || w.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(t, !1, i)) ? r : c[e];
                "string" == (o = typeof n) && (r = et.exec(n)) && r[1] && (n = at(t, e, r), o = "number"), null != n && n == n && ("number" !== o || l || (n += r && r[3] || (w.cssNumber[a] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l ? c.setProperty(e, n) : c[e] = n))
            }
        },
        css: function (t, e, n, i) {
            var r, o, s, a = U(e);
            return Xt.test(e) || (e = Ut(a)), (s = w.cssHooks[e] || w.cssHooks[a]) && "get" in s && (r = s.get(t, !0, n)), void 0 === r && (r = zt(t, e, i)), "normal" === r && e in Kt && (r = Kt[e]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }), w.each(["height", "width"], function (t, e) {
        w.cssHooks[e] = {
            get: function (t, n, i) {
                if (n) return !Vt.test(w.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Jt(t, e, i) : Ft(t, Qt, function () {
                    return Jt(t, e, i)
                })
            },
            set: function (t, n, i) {
                var r, o = Rt(t),
                    s = !h.scrollboxSize() && "absolute" === o.position,
                    a = (s || i) && "border-box" === w.css(t, "boxSizing", !1, o),
                    l = i ? Zt(t, e, i, a, o) : 0;
                return a && s && (l -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(o[e]) - Zt(t, e, "border", !1, o) - .5)), l && (r = et.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n, n = w.css(t, e)), Gt(0, n, l)
            }
        }
    }), w.cssHooks.marginLeft = Bt(h.reliableMarginLeft, function (t, e) {
        if (e) return (parseFloat(zt(t, "marginLeft")) || t.getBoundingClientRect().left - Ft(t, {
            marginLeft: 0
        }, function () {
            return t.getBoundingClientRect().left
        })) + "px"
    }), w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (t, e) {
        w.cssHooks[t + e] = {
            expand: function (n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[t + nt[i] + e] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, "margin" !== t && (w.cssHooks[t + e].set = Gt)
    }), w.fn.extend({
        css: function (t, e) {
            return B(this, function (t, e, n) {
                var i, r, o = {},
                    s = 0;
                if (Array.isArray(e)) {
                    for (i = Rt(t), r = e.length; s < r; s++) o[e[s]] = w.css(t, e[s], !1, i);
                    return o
                }
                return void 0 !== n ? w.style(t, e, n) : w.css(t, e)
            }, t, e, 1 < arguments.length)
        }
    }), ((w.Tween = te).prototype = {
        constructor: te,
        init: function (t, e, n, i, r, o) {
            this.elem = t, this.prop = n, this.easing = r || w.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (w.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var t = te.propHooks[this.prop];
            return t && t.get ? t.get(this) : te.propHooks._default.get(this)
        },
        run: function (t) {
            var e, n = te.propHooks[this.prop];
            return this.options.duration ? this.pos = e = w.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : te.propHooks._default.set(this), this
        }
    }).init.prototype = te.prototype, (te.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = w.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            },
            set: function (t) {
                w.fx.step[t.prop] ? w.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !w.cssHooks[t.prop] && null == t.elem.style[Ut(t.prop)] ? t.elem[t.prop] = t.now : w.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }).scrollTop = te.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, w.easing = {
        linear: function (t) {
            return t
        },
        swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, w.fx = te.prototype.init, w.fx.step = {};
    var ee, ne, ie, re, oe = /^(?:toggle|show|hide)$/,
        se = /queueHooks$/;

    function ae() {
        ne && (!1 === m.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(ae) : t.setTimeout(ae, w.fx.interval), w.fx.tick())
    }

    function le() {
        return t.setTimeout(function () {
            ee = void 0
        }), ee = Date.now()
    }

    function ce(t, e) {
        var n, i = 0,
            r = {
                height: t
            };
        for (e = e ? 1 : 0; i < 4; i += 2 - e) r["margin" + (n = nt[i])] = r["padding" + n] = t;
        return e && (r.opacity = r.width = t), r
    }

    function ue(t, e, n) {
        for (var i, r = (fe.tweeners[e] || []).concat(fe.tweeners["*"]), o = 0, s = r.length; o < s; o++)
            if (i = r[o].call(n, e, t)) return i
    }

    function fe(t, e, n) {
        var i, r, o = 0,
            s = fe.prefilters.length,
            a = w.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (r) return !1;
                for (var e = ee || le(), n = Math.max(0, c.startTime + c.duration - e), i = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++) c.tweens[o].run(i);
                return a.notifyWith(t, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1)
            },
            c = a.promise({
                elem: t,
                props: w.extend({}, e),
                opts: w.extend(!0, {
                    specialEasing: {},
                    easing: w.easing._default
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: ee || le(),
                duration: n.duration,
                tweens: [],
                createTween: function (e, n) {
                    var i = w.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function (e) {
                    var n = 0,
                        i = e ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) c.tweens[n].run(1);
                    return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
                }
            }),
            u = c.props;
        for (function (t, e) {
                var n, i, r, o, s;
                for (n in t)
                    if (r = e[i = U(n)], o = t[n], Array.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), (s = w.cssHooks[i]) && "expand" in s)
                        for (n in o = s.expand(o), delete t[i], o) n in t || (t[n] = o[n], e[n] = r);
                    else e[i] = r
            }(u, c.opts.specialEasing); o < s; o++)
            if (i = fe.prefilters[o].call(c, t, u, c.opts)) return p(i.stop) && (w._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
        return w.map(u, ue, c), p(c.opts.start) && c.opts.start.call(t, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), w.fx.timer(w.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c
    }
    w.Animation = w.extend(fe, {
        tweeners: {
            "*": [function (t, e) {
                var n = this.createTween(t, e);
                return at(n.elem, t, et.exec(e), n), n
            }]
        },
        tweener: function (t, e) {
            p(t) ? (e = t, t = ["*"]) : t = t.match(L);
            for (var n, i = 0, r = t.length; i < r; i++) n = t[i], fe.tweeners[n] = fe.tweeners[n] || [], fe.tweeners[n].unshift(e)
        },
        prefilters: [function (t, e, n) {
            var i, r, o, s, a, l, c, u, f = "width" in e || "height" in e,
                d = this,
                h = {},
                p = t.style,
                g = t.nodeType && st(t),
                m = Q.get(t, "fxshow");
            for (i in n.queue || (null == (s = w._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
                    s.unqueued || a()
                }), s.unqueued++, d.always(function () {
                    d.always(function () {
                        s.unqueued--, w.queue(t, "fx").length || s.empty.fire()
                    })
                })), e)
                if (r = e[i], oe.test(r)) {
                    if (delete e[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[i]) continue;
                        g = !0
                    }
                    h[i] = m && m[i] || w.style(t, i)
                } if ((l = !w.isEmptyObject(e)) || !w.isEmptyObject(h))
                for (i in f && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = m && m.display) && (c = Q.get(t, "display")), "none" === (u = w.css(t, "display")) && (c ? u = c : (ct([t], !0), c = t.style.display || c, u = w.css(t, "display"), ct([t]))), ("inline" === u || "inline-block" === u && null != c) && "none" === w.css(t, "float") && (l || (d.done(function () {
                        p.display = c
                    }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function () {
                        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                    })), l = !1, h) l || (m ? "hidden" in m && (g = m.hidden) : m = Q.access(t, "fxshow", {
                    display: c
                }), o && (m.hidden = !g), g && ct([t], !0), d.done(function () {
                    for (i in g || ct([t]), Q.remove(t, "fxshow"), h) w.style(t, i, h[i])
                })), l = ue(g ? m[i] : 0, i, d), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
        }],
        prefilter: function (t, e) {
            e ? fe.prefilters.unshift(t) : fe.prefilters.push(t)
        }
    }), w.speed = function (t, e, n) {
        var i = t && "object" == typeof t ? w.extend({}, t) : {
            complete: n || !n && e || p(t) && t,
            duration: t,
            easing: n && e || e && !p(e) && e
        };
        return w.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in w.fx.speeds ? i.duration = w.fx.speeds[i.duration] : i.duration = w.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            p(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue)
        }, i
    }, w.fn.extend({
        fadeTo: function (t, e, n, i) {
            return this.filter(st).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i)
        },
        animate: function (t, e, n, i) {
            var r = w.isEmptyObject(t),
                o = w.speed(e, n, i),
                s = function () {
                    var e = fe(this, w.extend({}, t), o);
                    (r || Q.get(this, "finish")) && e.stop(!0)
                };
            return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function (t, e, n) {
            var i = function (t) {
                var e = t.stop;
                delete t.stop, e(n)
            };
            return "string" != typeof t && (n = e, e = t, t = void 0), e && this.queue(t || "fx", []), this.each(function () {
                var e = !0,
                    r = null != t && t + "queueHooks",
                    o = w.timers,
                    s = Q.get(this);
                if (r) s[r] && s[r].stop && i(s[r]);
                else
                    for (r in s) s[r] && s[r].stop && se.test(r) && i(s[r]);
                for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
                !e && n || w.dequeue(this, t)
            })
        },
        finish: function (t) {
            return !1 !== t && (t = t || "fx"), this.each(function () {
                var e, n = Q.get(this),
                    i = n[t + "queue"],
                    r = n[t + "queueHooks"],
                    o = w.timers,
                    s = i ? i.length : 0;
                for (n.finish = !0, w.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; e < s; e++) i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish
            })
        }
    }), w.each(["toggle", "show", "hide"], function (t, e) {
        var n = w.fn[e];
        w.fn[e] = function (t, i, r) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(ce(e, !0), t, i, r)
        }
    }), w.each({
        slideDown: ce("show"),
        slideUp: ce("hide"),
        slideToggle: ce("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (t, e) {
        w.fn[t] = function (t, n, i) {
            return this.animate(e, t, n, i)
        }
    }), w.timers = [], w.fx.tick = function () {
        var t, e = 0,
            n = w.timers;
        for (ee = Date.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
        n.length || w.fx.stop(), ee = void 0
    }, w.fx.timer = function (t) {
        w.timers.push(t), w.fx.start()
    }, w.fx.interval = 13, w.fx.start = function () {
        ne || (ne = !0, ae())
    }, w.fx.stop = function () {
        ne = null
    }, w.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, w.fn.delay = function (e, n) {
        return e = w.fx && w.fx.speeds[e] || e, n = n || "fx", this.queue(n, function (n, i) {
            var r = t.setTimeout(n, e);
            i.stop = function () {
                t.clearTimeout(r)
            }
        })
    }, ie = m.createElement("input"), re = m.createElement("select").appendChild(m.createElement("option")), ie.type = "checkbox", h.checkOn = "" !== ie.value, h.optSelected = re.selected, (ie = m.createElement("input")).value = "t", ie.type = "radio", h.radioValue = "t" === ie.value;
    var de, he = w.expr.attrHandle;
    w.fn.extend({
        attr: function (t, e) {
            return B(this, w.attr, t, e, 1 < arguments.length)
        },
        removeAttr: function (t) {
            return this.each(function () {
                w.removeAttr(this, t)
            })
        }
    }), w.extend({
        attr: function (t, e, n) {
            var i, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? w.prop(t, e, n) : (1 === o && w.isXMLDoc(t) || (r = w.attrHooks[e.toLowerCase()] || (w.expr.match.bool.test(e) ? de : void 0)), void 0 !== n ? null === n ? void w.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : null == (i = w.find.attr(t, e)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function (t, e) {
                    if (!h.radioValue && "radio" === e && A(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        },
        removeAttr: function (t, e) {
            var n, i = 0,
                r = e && e.match(L);
            if (r && 1 === t.nodeType)
                for (; n = r[i++];) t.removeAttribute(n)
        }
    }), de = {
        set: function (t, e, n) {
            return !1 === e ? w.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var n = he[e] || w.find.attr;
        he[e] = function (t, e, i) {
            var r, o, s = e.toLowerCase();
            return i || (o = he[s], he[s] = r, r = null != n(t, e, i) ? s : null, he[s] = o), r
        }
    });
    var pe = /^(?:input|select|textarea|button)$/i,
        ge = /^(?:a|area)$/i;

    function me(t) {
        return (t.match(L) || []).join(" ")
    }

    function ve(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function ye(t) {
        return Array.isArray(t) ? t : "string" == typeof t && t.match(L) || []
    }
    w.fn.extend({
        prop: function (t, e) {
            return B(this, w.prop, t, e, 1 < arguments.length)
        },
        removeProp: function (t) {
            return this.each(function () {
                delete this[w.propFix[t] || t]
            })
        }
    }), w.extend({
        prop: function (t, e, n) {
            var i, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(t) || (e = w.propFix[e] || e, r = w.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = w.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : pe.test(t.nodeName) || ge.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), h.optSelected || (w.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function (t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        w.propFix[this.toLowerCase()] = this
    }), w.fn.extend({
        addClass: function (t) {
            var e, n, i, r, o, s, a, l = 0;
            if (p(t)) return this.each(function (e) {
                w(this).addClass(t.call(this, e, ve(this)))
            });
            if ((e = ye(t)).length)
                for (; n = this[l++];)
                    if (r = ve(n), i = 1 === n.nodeType && " " + me(r) + " ") {
                        for (s = 0; o = e[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (a = me(i)) && n.setAttribute("class", a)
                    } return this
        },
        removeClass: function (t) {
            var e, n, i, r, o, s, a, l = 0;
            if (p(t)) return this.each(function (e) {
                w(this).removeClass(t.call(this, e, ve(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = ye(t)).length)
                for (; n = this[l++];)
                    if (r = ve(n), i = 1 === n.nodeType && " " + me(r) + " ") {
                        for (s = 0; o = e[s++];)
                            for (; - 1 < i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
                        r !== (a = me(i)) && n.setAttribute("class", a)
                    } return this
        },
        toggleClass: function (t, e) {
            var n = typeof t,
                i = "string" === n || Array.isArray(t);
            return "boolean" == typeof e && i ? e ? this.addClass(t) : this.removeClass(t) : p(t) ? this.each(function (n) {
                w(this).toggleClass(t.call(this, n, ve(this), e), e)
            }) : this.each(function () {
                var e, r, o, s;
                if (i)
                    for (r = 0, o = w(this), s = ye(t); e = s[r++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                else void 0 !== t && "boolean" !== n || ((e = ve(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Q.get(this, "__className__") || ""))
            })
        },
        hasClass: function (t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++];)
                if (1 === n.nodeType && -1 < (" " + me(ve(n)) + " ").indexOf(e)) return !0;
            return !1
        }
    });
    var be = /\r/g;
    w.fn.extend({
        val: function (t) {
            var e, n, i, r = this[0];
            return arguments.length ? (i = p(t), this.each(function (n) {
                var r;
                1 === this.nodeType && (null == (r = i ? t.call(this, n, w(this).val()) : t) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = w.map(r, function (t) {
                    return null == t ? "" : t + ""
                })), (e = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
            })) : r ? (e = w.valHooks[r.type] || w.valHooks[r.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(be, "") : null == n ? "" : n : void 0
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = w.find.attr(t, "value");
                    return null != e ? e : me(w.text(t))
                }
            },
            select: {
                get: function (t) {
                    var e, n, i, r = t.options,
                        o = t.selectedIndex,
                        s = "select-one" === t.type,
                        a = s ? null : [],
                        l = s ? o + 1 : r.length;
                    for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                        if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (e = w(n).val(), s) return e;
                            a.push(e)
                        } return a
                },
                set: function (t, e) {
                    for (var n, i, r = t.options, o = w.makeArray(e), s = r.length; s--;)((i = r[s]).selected = -1 < w.inArray(w.valHooks.option.get(i), o)) && (n = !0);
                    return n || (t.selectedIndex = -1), o
                }
            }
        }
    }), w.each(["radio", "checkbox"], function () {
        w.valHooks[this] = {
            set: function (t, e) {
                if (Array.isArray(e)) return t.checked = -1 < w.inArray(w(t).val(), e)
            }
        }, h.checkOn || (w.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    }), h.focusin = "onfocusin" in t;
    var _e = /^(?:focusinfocus|focusoutblur)$/,
        we = function (t) {
            t.stopPropagation()
        };
    w.extend(w.event, {
        trigger: function (e, n, i, r) {
            var o, s, a, l, c, f, d, h, v = [i || m],
                y = u.call(e, "type") ? e.type : e,
                b = u.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = h = a = i = i || m, 3 !== i.nodeType && 8 !== i.nodeType && !_e.test(y + w.event.triggered) && (-1 < y.indexOf(".") && (y = (b = y.split(".")).shift(), b.sort()), c = y.indexOf(":") < 0 && "on" + y, (e = e[w.expando] ? e : new w.Event(y, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = b.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : w.makeArray(n, [e]), d = w.event.special[y] || {}, r || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!r && !d.noBubble && !g(i)) {
                    for (l = d.delegateType || y, _e.test(l + y) || (s = s.parentNode); s; s = s.parentNode) v.push(s), a = s;
                    a === (i.ownerDocument || m) && v.push(a.defaultView || a.parentWindow || t)
                }
                for (o = 0;
                    (s = v[o++]) && !e.isPropagationStopped();) h = s, e.type = 1 < o ? l : d.bindType || y, (f = (Q.get(s, "events") || Object.create(null))[e.type] && Q.get(s, "handle")) && f.apply(s, n), (f = c && s[c]) && f.apply && V(s) && (e.result = f.apply(s, n), !1 === e.result && e.preventDefault());
                return e.type = y, r || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !V(i) || c && p(i[y]) && !g(i) && ((a = i[c]) && (i[c] = null), w.event.triggered = y, e.isPropagationStopped() && h.addEventListener(y, we), i[y](), e.isPropagationStopped() && h.removeEventListener(y, we), w.event.triggered = void 0, a && (i[c] = a)), e.result
            }
        },
        simulate: function (t, e, n) {
            var i = w.extend(new w.Event, n, {
                type: t,
                isSimulated: !0
            });
            w.event.trigger(i, null, e)
        }
    }), w.fn.extend({
        trigger: function (t, e) {
            return this.each(function () {
                w.event.trigger(t, e, this)
            })
        },
        triggerHandler: function (t, e) {
            var n = this[0];
            if (n) return w.event.trigger(t, e, n, !0)
        }
    }), h.focusin || w.each({
        focus: "focusin",
        blur: "focusout"
    }, function (t, e) {
        var n = function (t) {
            w.event.simulate(e, t.target, w.event.fix(t))
        };
        w.event.special[e] = {
            setup: function () {
                var i = this.ownerDocument || this.document || this,
                    r = Q.access(i, e);
                r || i.addEventListener(t, n, !0), Q.access(i, e, (r || 0) + 1)
            },
            teardown: function () {
                var i = this.ownerDocument || this.document || this,
                    r = Q.access(i, e) - 1;
                r ? Q.access(i, e, r) : (i.removeEventListener(t, n, !0), Q.remove(i, e))
            }
        }
    });
    var xe = t.location,
        Te = {
            guid: Date.now()
        },
        Ce = /\?/;
    w.parseXML = function (e) {
        var n;
        if (!e || "string" != typeof e) return null;
        try {
            n = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + e), n
    };
    var Ee = /\[\]$/,
        Se = /\r?\n/g,
        Ae = /^(?:submit|button|image|reset|file)$/i,
        ke = /^(?:input|select|textarea|keygen)/i;

    function De(t, e, n, i) {
        var r;
        if (Array.isArray(e)) w.each(e, function (e, r) {
            n || Ee.test(t) ? i(t, r) : De(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
        });
        else if (n || "object" !== b(e)) i(t, e);
        else
            for (r in e) De(t + "[" + r + "]", e[r], n, i)
    }
    w.param = function (t, e) {
        var n, i = [],
            r = function (t, e) {
                var n = p(e) ? e() : e;
                i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == t) return "";
        if (Array.isArray(t) || t.jquery && !w.isPlainObject(t)) w.each(t, function () {
            r(this.name, this.value)
        });
        else
            for (n in t) De(n, t[n], e, r);
        return i.join("&")
    }, w.fn.extend({
        serialize: function () {
            return w.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var t = w.prop(this, "elements");
                return t ? w.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !w(this).is(":disabled") && ke.test(this.nodeName) && !Ae.test(t) && (this.checked || !dt.test(t))
            }).map(function (t, e) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, function (t) {
                    return {
                        name: e.name,
                        value: t.replace(Se, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Se, "\r\n")
                }
            }).get()
        }
    });
    var Oe = /%20/g,
        Ie = /#.*$/,
        Pe = /([?&])_=[^&]*/,
        Ne = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        $e = /^(?:GET|HEAD)$/,
        Le = /^\/\//,
        Me = {},
        je = {},
        Re = "*/".concat("*"),
        Fe = m.createElement("a");

    function He(t) {
        return function (e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, r = 0,
                o = e.toLowerCase().match(L) || [];
            if (p(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function ze(t, e, n, i) {
        var r = {},
            o = t === je;

        function s(a) {
            var l;
            return r[a] = !0, w.each(t[a] || [], function (t, a) {
                var c = a(e, n, i);
                return "string" != typeof c || o || r[c] ? o ? !(l = c) : void 0 : (e.dataTypes.unshift(c), s(c), !1)
            }), l
        }
        return s(e.dataTypes[0]) || !r["*"] && s("*")
    }

    function Be(t, e) {
        var n, i, r = w.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
        return i && w.extend(!0, t, i), t
    }
    Fe.href = xe.href, w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: xe.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xe.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Re,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (t, e) {
            return e ? Be(Be(t, w.ajaxSettings), e) : Be(w.ajaxSettings, t)
        },
        ajaxPrefilter: He(Me),
        ajaxTransport: He(je),
        ajax: function (e, n) {
            "object" == typeof e && (n = e, e = void 0), n = n || {};
            var i, r, o, s, a, l, c, u, f, d, h = w.ajaxSetup({}, n),
                p = h.context || h,
                g = h.context && (p.nodeType || p.jquery) ? w(p) : w.event,
                v = w.Deferred(),
                y = w.Callbacks("once memory"),
                b = h.statusCode || {},
                _ = {},
                x = {},
                T = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function (t) {
                        var e;
                        if (c) {
                            if (!s)
                                for (s = {}; e = Ne.exec(o);) s[e[1].toLowerCase() + " "] = (s[e[1].toLowerCase() + " "] || []).concat(e[2]);
                            e = s[t.toLowerCase() + " "]
                        }
                        return null == e ? null : e.join(", ")
                    },
                    getAllResponseHeaders: function () {
                        return c ? o : null
                    },
                    setRequestHeader: function (t, e) {
                        return null == c && (t = x[t.toLowerCase()] = x[t.toLowerCase()] || t, _[t] = e), this
                    },
                    overrideMimeType: function (t) {
                        return null == c && (h.mimeType = t), this
                    },
                    statusCode: function (t) {
                        var e;
                        if (t)
                            if (c) C.always(t[C.status]);
                            else
                                for (e in t) b[e] = [b[e], t[e]];
                        return this
                    },
                    abort: function (t) {
                        var e = t || T;
                        return i && i.abort(e), E(0, e), this
                    }
                };
            if (v.promise(C), h.url = ((e || h.url || xe.href) + "").replace(Le, xe.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(L) || [""], null == h.crossDomain) {
                l = m.createElement("a");
                try {
                    l.href = h.url, l.href = l.href, h.crossDomain = Fe.protocol + "//" + Fe.host != l.protocol + "//" + l.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), ze(Me, h, n, C), c) return C;
            for (f in (u = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !$e.test(h.type), r = h.url.replace(Ie, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Oe, "+")) : (d = h.url.slice(r.length), h.data && (h.processData || "string" == typeof h.data) && (r += (Ce.test(r) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (r = r.replace(Pe, "$1"), d = (Ce.test(r) ? "&" : "?") + "_=" + Te.guid++ + d), h.url = r + d), h.ifModified && (w.lastModified[r] && C.setRequestHeader("If-Modified-Since", w.lastModified[r]), w.etag[r] && C.setRequestHeader("If-None-Match", w.etag[r])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Re + "; q=0.01" : "") : h.accepts["*"]), h.headers) C.setRequestHeader(f, h.headers[f]);
            if (h.beforeSend && (!1 === h.beforeSend.call(p, C, h) || c)) return C.abort();
            if (T = "abort", y.add(h.complete), C.done(h.success), C.fail(h.error), i = ze(je, h, n, C)) {
                if (C.readyState = 1, u && g.trigger("ajaxSend", [C, h]), c) return C;
                h.async && 0 < h.timeout && (a = t.setTimeout(function () {
                    C.abort("timeout")
                }, h.timeout));
                try {
                    c = !1, i.send(_, E)
                } catch (e) {
                    if (c) throw e;
                    E(-1, e)
                }
            } else E(-1, "No Transport");

            function E(e, n, s, l) {
                var f, d, m, _, x, T = n;
                c || (c = !0, a && t.clearTimeout(a), i = void 0, o = l || "", C.readyState = 0 < e ? 4 : 0, f = 200 <= e && e < 300 || 304 === e, s && (_ = function (t, e, n) {
                    for (var i, r, o, s, a = t.contents, l = t.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (i)
                        for (r in a)
                            if (a[r] && a[r].test(i)) {
                                l.unshift(r);
                                break
                            } if (l[0] in n) o = l[0];
                    else {
                        for (r in n) {
                            if (!l[0] || t.converters[r + " " + l[0]]) {
                                o = r;
                                break
                            }
                            s || (s = r)
                        }
                        o = o || s
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o]
                }(h, C, s)), !f && -1 < w.inArray("script", h.dataTypes) && (h.converters["text script"] = function () {}), _ = function (t, e, n, i) {
                    var r, o, s, a, l, c = {},
                        u = t.dataTypes.slice();
                    if (u[1])
                        for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
                    for (o = u.shift(); o;)
                        if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = u.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                        if (!(s = c[l + " " + o] || c["* " + o]))
                            for (r in c)
                                if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0], u.unshift(a[1]));
                                    break
                                } if (!0 !== s)
                            if (s && t.throws) e = s(e);
                            else try {
                                e = s(e)
                            } catch (t) {
                                return {
                                    state: "parsererror",
                                    error: s ? t : "No conversion from " + l + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: e
                    }
                }(h, _, C, f), f ? (h.ifModified && ((x = C.getResponseHeader("Last-Modified")) && (w.lastModified[r] = x), (x = C.getResponseHeader("etag")) && (w.etag[r] = x)), 204 === e || "HEAD" === h.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = _.state, d = _.data, f = !(m = _.error))) : (m = T, !e && T || (T = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (n || T) + "", f ? v.resolveWith(p, [d, T, C]) : v.rejectWith(p, [C, T, m]), C.statusCode(b), b = void 0, u && g.trigger(f ? "ajaxSuccess" : "ajaxError", [C, h, f ? d : m]), y.fireWith(p, [C, T]), u && (g.trigger("ajaxComplete", [C, h]), --w.active || w.event.trigger("ajaxStop")))
            }
            return C
        },
        getJSON: function (t, e, n) {
            return w.get(t, e, n, "json")
        },
        getScript: function (t, e) {
            return w.get(t, void 0, e, "script")
        }
    }), w.each(["get", "post"], function (t, e) {
        w[e] = function (t, n, i, r) {
            return p(n) && (r = r || i, i = n, n = void 0), w.ajax(w.extend({
                url: t,
                type: e,
                dataType: r,
                data: n,
                success: i
            }, w.isPlainObject(t) && t))
        }
    }), w.ajaxPrefilter(function (t) {
        var e;
        for (e in t.headers) "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "")
    }), w._evalUrl = function (t, e, n) {
        return w.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function () {}
            },
            dataFilter: function (t) {
                w.globalEval(t, e, n)
            }
        })
    }, w.fn.extend({
        wrapAll: function (t) {
            var e;
            return this[0] && (p(t) && (t = t.call(this[0])), e = w(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this
        },
        wrapInner: function (t) {
            return p(t) ? this.each(function (e) {
                w(this).wrapInner(t.call(this, e))
            }) : this.each(function () {
                var e = w(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function (t) {
            var e = p(t);
            return this.each(function (n) {
                w(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function (t) {
            return this.parent(t).not("body").each(function () {
                w(this).replaceWith(this.childNodes)
            }), this
        }
    }), w.expr.pseudos.hidden = function (t) {
        return !w.expr.pseudos.visible(t)
    }, w.expr.pseudos.visible = function (t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, w.ajaxSettings.xhr = function () {
        try {
            return new t.XMLHttpRequest
        } catch (t) {}
    };
    var qe = {
            0: 200,
            1223: 204
        },
        We = w.ajaxSettings.xhr();
    h.cors = !!We && "withCredentials" in We, h.ajax = We = !!We, w.ajaxTransport(function (e) {
        var n, i;
        if (h.cors || We && !e.crossDomain) return {
            send: function (r, o) {
                var s, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (s in e.xhrFields) a[s] = e.xhrFields[s];
                for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) a.setRequestHeader(s, r[s]);
                n = function (t) {
                    return function () {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(qe[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = a.ontimeout = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
                    4 === a.readyState && t.setTimeout(function () {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    a.send(e.hasContent && e.data || null)
                } catch (r) {
                    if (n) throw r
                }
            },
            abort: function () {
                n && n()
            }
        }
    }), w.ajaxPrefilter(function (t) {
        t.crossDomain && (t.contents.script = !1)
    }), w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (t) {
                return w.globalEval(t), t
            }
        }
    }), w.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), w.ajaxTransport("script", function (t) {
        var e, n;
        if (t.crossDomain || t.scriptAttrs) return {
            send: function (i, r) {
                e = w("<script>").attr(t.scriptAttrs || {}).prop({
                    charset: t.scriptCharset,
                    src: t.url
                }).on("load error", n = function (t) {
                    e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
                }), m.head.appendChild(e[0])
            },
            abort: function () {
                n && n()
            }
        }
    });
    var Ye, Ue = [],
        Ve = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var t = Ue.pop() || w.expando + "_" + Te.guid++;
            return this[t] = !0, t
        }
    }), w.ajaxPrefilter("json jsonp", function (e, n, i) {
        var r, o, s, a = !1 !== e.jsonp && (Ve.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ve.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = p(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ve, "$1" + r) : !1 !== e.jsonp && (e.url += (Ce.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
            return s || w.error(r + " was not called"), s[0]
        }, e.dataTypes[0] = "json", o = t[r], t[r] = function () {
            s = arguments
        }, i.always(function () {
            void 0 === o ? w(t).removeProp(r) : t[r] = o, e[r] && (e.jsonpCallback = n.jsonpCallback, Ue.push(r)), s && p(o) && o(s[0]), s = o = void 0
        }), "script"
    }), h.createHTMLDocument = ((Ye = m.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ye.childNodes.length), w.parseHTML = function (t, e, n) {
        return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (h.createHTMLDocument ? ((i = (e = m.implementation.createHTMLDocument("")).createElement("base")).href = m.location.href, e.head.appendChild(i)) : e = m), o = !n && [], (r = k.exec(t)) ? [e.createElement(r[1])] : (r = bt([t], e, o), o && o.length && w(o).remove(), w.merge([], r.childNodes)));
        var i, r, o
    }, w.fn.load = function (t, e, n) {
        var i, r, o, s = this,
            a = t.indexOf(" ");
        return -1 < a && (i = me(t.slice(a)), t = t.slice(0, a)), p(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), 0 < s.length && w.ajax({
            url: t,
            type: r || "GET",
            dataType: "html",
            data: e
        }).done(function (t) {
            o = arguments, s.html(i ? w("<div>").append(w.parseHTML(t)).find(i) : t)
        }).always(n && function (t, e) {
            s.each(function () {
                n.apply(this, o || [t.responseText, e, t])
            })
        }), this
    }, w.expr.pseudos.animated = function (t) {
        return w.grep(w.timers, function (e) {
            return t === e.elem
        }).length
    }, w.offset = {
        setOffset: function (t, e, n) {
            var i, r, o, s, a, l, c = w.css(t, "position"),
                u = w(t),
                f = {};
            "static" === c && (t.style.position = "relative"), a = u.offset(), o = w.css(t, "top"), l = w.css(t, "left"), ("absolute" === c || "fixed" === c) && -1 < (o + l).indexOf("auto") ? (s = (i = u.position()).top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), p(e) && (e = e.call(t, n, w.extend({}, a))), null != e.top && (f.top = e.top - a.top + s), null != e.left && (f.left = e.left - a.left + r), "using" in e ? e.using.call(t, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), u.css(f))
        }
    }, w.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                w.offset.setOffset(this, t, e)
            });
            var e, n, i = this[0];
            return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function () {
            if (this[0]) {
                var t, e, n, i = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === w.css(i, "position")) e = i.getBoundingClientRect();
                else {
                    for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === w.css(t, "position");) t = t.parentNode;
                    t && t !== i && 1 === t.nodeType && ((r = w(t).offset()).top += w.css(t, "borderTopWidth", !0), r.left += w.css(t, "borderLeftWidth", !0))
                }
                return {
                    top: e.top - r.top - w.css(i, "marginTop", !0),
                    left: e.left - r.left - w.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent; t && "static" === w.css(t, "position");) t = t.offsetParent;
                return t || it
            })
        }
    }), w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (t, e) {
        var n = "pageYOffset" === e;
        w.fn[t] = function (i) {
            return B(this, function (t, i, r) {
                var o;
                if (g(t) ? o = t : 9 === t.nodeType && (o = t.defaultView), void 0 === r) return o ? o[e] : t[i];
                o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : t[i] = r
            }, t, i, arguments.length)
        }
    }), w.each(["top", "left"], function (t, e) {
        w.cssHooks[e] = Bt(h.pixelPosition, function (t, n) {
            if (n) return n = zt(t, e), jt.test(n) ? w(t).position()[e] + "px" : n
        })
    }), w.each({
        Height: "height",
        Width: "width"
    }, function (t, e) {
        w.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function (n, i) {
            w.fn[i] = function (r, o) {
                var s = arguments.length && (n || "boolean" != typeof r),
                    a = n || (!0 === r || !0 === o ? "margin" : "border");
                return B(this, function (e, n, r) {
                    var o;
                    return g(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === r ? w.css(e, n, a) : w.style(e, n, r, a)
                }, e, s ? r : void 0, s)
            }
        })
    }), w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        w.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), w.fn.extend({
        bind: function (t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function (t, e) {
            return this.off(t, null, e)
        },
        delegate: function (t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function (t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        },
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
        w.fn[e] = function (t, n) {
            return 0 < arguments.length ? this.on(e, null, t, n) : this.trigger(e)
        }
    });
    var Xe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    w.proxy = function (t, e) {
        var n, i, o;
        if ("string" == typeof e && (n = t[e], e = t, t = n), p(t)) return i = r.call(arguments, 2), (o = function () {
            return t.apply(e || this, i.concat(r.call(arguments)))
        }).guid = t.guid = t.guid || w.guid++, o
    }, w.holdReady = function (t) {
        t ? w.readyWait++ : w.ready(!0)
    }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = A, w.isFunction = p, w.isWindow = g, w.camelCase = U, w.type = b, w.now = Date.now, w.isNumeric = function (t) {
        var e = w.type(t);
        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
    }, w.trim = function (t) {
        return null == t ? "" : (t + "").replace(Xe, "")
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return w
    });
    var Qe = t.jQuery,
        Ke = t.$;
    return w.noConflict = function (e) {
        return t.$ === w && (t.$ = Ke), e && t.jQuery === w && (t.jQuery = Qe), w
    }, void 0 === e && (t.jQuery = t.$ = w), w
}),
function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Popper = e()
}(this, function () {
    "use strict";

    function t(t) {
        return t && "[object Function]" === {}.toString.call(t)
    }

    function e(t, e) {
        if (1 !== t.nodeType) return [];
        var n = getComputedStyle(t, null);
        return e ? n[e] : n
    }

    function n(t) {
        return "HTML" === t.nodeName ? t : t.parentNode || t.host
    }

    function i(t) {
        if (!t) return document.body;
        switch (t.nodeName) {
            case "HTML":
            case "BODY":
                return t.ownerDocument.body;
            case "#document":
                return t.body
        }
        var r = e(t),
            o = r.overflow,
            s = r.overflowX,
            a = r.overflowY;
        return /(auto|scroll)/.test(o + a + s) ? t : i(n(t))
    }

    function r(t) {
        var n = t && t.offsetParent,
            i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === e(n, "position") ? r(n) : n : t ? t.ownerDocument.documentElement : document.documentElement
    }

    function o(t) {
        return null === t.parentNode ? t : o(t.parentNode)
    }

    function s(t, e) {
        if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
        var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? t : e,
            a = n ? e : t,
            l = document.createRange();
        l.setStart(i, 0), l.setEnd(a, 0);
        var c = l.commonAncestorContainer;
        if (t !== c && e !== c || i.contains(a)) return function (t) {
            var e = t.nodeName;
            return "BODY" !== e && ("HTML" === e || r(t.firstElementChild) === t)
        }(c) ? c : r(c);
        var u = o(t);
        return u.host ? s(u.host, e) : s(t, o(e).host)
    }

    function a(t) {
        var e = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            n = t.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var i = t.ownerDocument.documentElement;
            return (t.ownerDocument.scrollingElement || i)[e]
        }
        return t[e]
    }

    function l(t, e) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            i = a(e, "top"),
            r = a(e, "left"),
            o = n ? -1 : 1;
        return t.top += i * o, t.bottom += i * o, t.left += r * o, t.right += r * o, t
    }

    function c(t, e) {
        var n = "x" === e ? "Left" : "Top",
            i = "Left" == n ? "Right" : "Bottom";
        return parseFloat(t["border" + n + "Width"], 10) + parseFloat(t["border" + i + "Width"], 10)
    }

    function u(t, e, n, i) {
        return R(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], Y() ? n["offset" + t] + i["margin" + ("Height" === t ? "Top" : "Left")] + i["margin" + ("Height" === t ? "Bottom" : "Right")] : 0)
    }

    function f() {
        var t = document.body,
            e = document.documentElement,
            n = Y() && getComputedStyle(e);
        return {
            height: u("Height", t, e, n),
            width: u("Width", t, e, n)
        }
    }

    function d(t) {
        return Q({}, t, {
            right: t.left + t.width,
            bottom: t.top + t.height
        })
    }

    function h(t) {
        var n = {};
        if (Y()) try {
            n = t.getBoundingClientRect();
            var i = a(t, "top"),
                r = a(t, "left");
            n.top += i, n.left += r, n.bottom += i, n.right += r
        } catch (t) {} else n = t.getBoundingClientRect();
        var o = {
                left: n.left,
                top: n.top,
                width: n.right - n.left,
                height: n.bottom - n.top
            },
            s = "HTML" === t.nodeName ? f() : {},
            l = s.width || t.clientWidth || o.right - o.left,
            u = s.height || t.clientHeight || o.bottom - o.top,
            h = t.offsetWidth - l,
            p = t.offsetHeight - u;
        if (h || p) {
            var g = e(t);
            h -= c(g, "x"), p -= c(g, "y"), o.width -= h, o.height -= p
        }
        return d(o)
    }

    function p(t, n) {
        var r = Y(),
            o = "HTML" === n.nodeName,
            s = h(t),
            a = h(n),
            c = i(t),
            u = e(n),
            f = parseFloat(u.borderTopWidth, 10),
            p = parseFloat(u.borderLeftWidth, 10),
            g = d({
                top: s.top - a.top - f,
                left: s.left - a.left - p,
                width: s.width,
                height: s.height
            });
        if (g.marginTop = 0, g.marginLeft = 0, !r && o) {
            var m = parseFloat(u.marginTop, 10),
                v = parseFloat(u.marginLeft, 10);
            g.top -= f - m, g.bottom -= f - m, g.left -= p - v, g.right -= p - v, g.marginTop = m, g.marginLeft = v
        }
        return (r ? n.contains(c) : n === c && "BODY" !== c.nodeName) && (g = l(g, n)), g
    }

    function g(t) {
        var e = t.ownerDocument.documentElement,
            n = p(t, e),
            i = R(e.clientWidth, window.innerWidth || 0),
            r = R(e.clientHeight, window.innerHeight || 0),
            o = a(e),
            s = a(e, "left");
        return d({
            top: o - n.top + n.marginTop,
            left: s - n.left + n.marginLeft,
            width: i,
            height: r
        })
    }

    function m(t) {
        var i = t.nodeName;
        return "BODY" !== i && "HTML" !== i && ("fixed" === e(t, "position") || m(n(t)))
    }

    function v(t, e, r, o) {
        var a = {
                top: 0,
                left: 0
            },
            l = s(t, e);
        if ("viewport" === o) a = g(l);
        else {
            var c;
            "scrollParent" === o ? "BODY" === (c = i(n(e))).nodeName && (c = t.ownerDocument.documentElement) : c = "window" === o ? t.ownerDocument.documentElement : o;
            var u = p(c, l);
            if ("HTML" !== c.nodeName || m(l)) a = u;
            else {
                var d = f(),
                    h = d.height,
                    v = d.width;
                a.top += u.top - u.marginTop, a.bottom = h + u.top, a.left += u.left - u.marginLeft, a.right = v + u.left
            }
        }
        return a.left += r, a.top += r, a.right -= r, a.bottom -= r, a
    }

    function y(t) {
        return t.width * t.height
    }

    function b(t, e, n, i, r) {
        var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === t.indexOf("auto")) return t;
        var s = v(n, i, o, r),
            a = {
                top: {
                    width: s.width,
                    height: e.top - s.top
                },
                right: {
                    width: s.right - e.right,
                    height: s.height
                },
                bottom: {
                    width: s.width,
                    height: s.bottom - e.bottom
                },
                left: {
                    width: e.left - s.left,
                    height: s.height
                }
            },
            l = Object.keys(a).map(function (t) {
                return Q({
                    key: t
                }, a[t], {
                    area: y(a[t])
                })
            }).sort(function (t, e) {
                return e.area - t.area
            }),
            c = l.filter(function (t) {
                var e = t.width,
                    i = t.height;
                return e >= n.clientWidth && i >= n.clientHeight
            }),
            u = 0 < c.length ? c[0].key : l[0].key,
            f = t.split("-")[1];
        return u + (f ? "-" + f : "")
    }

    function _(t, e, n) {
        return p(n, s(e, n))
    }

    function w(t) {
        var e = getComputedStyle(t),
            n = parseFloat(e.marginTop) + parseFloat(e.marginBottom),
            i = parseFloat(e.marginLeft) + parseFloat(e.marginRight);
        return {
            width: t.offsetWidth + i,
            height: t.offsetHeight + n
        }
    }

    function x(t) {
        var e = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return t.replace(/left|right|bottom|top/g, function (t) {
            return e[t]
        })
    }

    function T(t, e, n) {
        n = n.split("-")[0];
        var i = w(t),
            r = {
                width: i.width,
                height: i.height
            },
            o = -1 !== ["right", "left"].indexOf(n),
            s = o ? "top" : "left",
            a = o ? "left" : "top",
            l = o ? "height" : "width",
            c = o ? "width" : "height";
        return r[s] = e[s] + e[l] / 2 - i[l] / 2, r[a] = n === a ? e[a] - i[c] : e[x(a)], r
    }

    function C(t, e) {
        return Array.prototype.find ? t.find(e) : t.filter(e)[0]
    }

    function E(e, n, i) {
        return (void 0 === i ? e : e.slice(0, function (t, e, n) {
            if (Array.prototype.findIndex) return t.findIndex(function (t) {
                return t[e] === n
            });
            var i = C(t, function (t) {
                return t[e] === n
            });
            return t.indexOf(i)
        }(e, "name", i))).forEach(function (e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var i = e.function || e.fn;
            e.enabled && t(i) && (n.offsets.popper = d(n.offsets.popper), n.offsets.reference = d(n.offsets.reference), n = i(n, e))
        }), n
    }

    function S(t, e) {
        return t.some(function (t) {
            var n = t.name;
            return t.enabled && n === e
        })
    }

    function A(t) {
        for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length - 1; i++) {
            var r = e[i],
                o = r ? "" + r + n : t;
            if (void 0 !== document.body.style[o]) return o
        }
        return null
    }

    function k(t) {
        var e = t.ownerDocument;
        return e ? e.defaultView : window
    }

    function D(t, e, n, r) {
        n.updateBound = r, k(t).addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var o = i(t);
        return function t(e, n, r, o) {
            var s = "BODY" === e.nodeName,
                a = s ? e.ownerDocument.defaultView : e;
            a.addEventListener(n, r, {
                passive: !0
            }), s || t(i(a.parentNode), n, r, o), o.push(a)
        }(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n
    }

    function O() {
        var t, e;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, k(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function (t) {
            t.removeEventListener("scroll", e.updateBound)
        }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e))
    }

    function I(t) {
        return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
    }

    function P(t, e) {
        Object.keys(e).forEach(function (n) {
            var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && I(e[n]) && (i = "px"), t.style[n] = e[n] + i
        })
    }

    function N(t, e, n) {
        var i = C(t, function (t) {
                return t.name === e
            }),
            r = !!i && t.some(function (t) {
                return t.name === n && t.enabled && t.order < i.order
            });
        if (!r) {
            var o = "`" + e + "`";
            console.warn("`" + n + "` modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return r
    }

    function $(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            n = G.indexOf(t),
            i = G.slice(n + 1).concat(G.slice(0, n));
        return e ? i.reverse() : i
    }

    function L(t, e, n, i) {
        var r = [0, 0],
            o = -1 !== ["right", "left"].indexOf(i),
            s = t.split(/(\+|\-)/).map(function (t) {
                return t.trim()
            }),
            a = s.indexOf(C(s, function (t) {
                return -1 !== t.search(/,|\s/)
            }));
        s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            c = -1 === a ? [s] : [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))];
        return (c = c.map(function (t, i) {
            var r = (1 === i ? !o : o) ? "height" : "width",
                s = !1;
            return t.reduce(function (t, e) {
                return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, s = !0, t) : s ? (t[t.length - 1] += e, s = !1, t) : t.concat(e)
            }, []).map(function (t) {
                return function (t, e, n, i) {
                    var r = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                        o = +r[1],
                        s = r[2];
                    if (!o) return t;
                    if (0 === s.indexOf("%")) {
                        var a;
                        switch (s) {
                            case "%p":
                                a = n;
                                break;
                            case "%":
                            case "%r":
                            default:
                                a = i
                        }
                        return d(a)[e] / 100 * o
                    }
                    return "vh" === s || "vw" === s ? ("vh" === s ? R(document.documentElement.clientHeight, window.innerHeight || 0) : R(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o : o
                }(t, r, e, n)
            })
        })).forEach(function (t, e) {
            t.forEach(function (n, i) {
                I(n) && (r[e] += n * ("-" === t[i - 1] ? -1 : 1))
            })
        }), r
    }
    for (var M = Math.min, j = Math.floor, R = Math.max, F = "undefined" != typeof window && "undefined" != typeof document, H = ["Edge", "Trident", "Firefox"], z = 0, B = 0; B < H.length; B += 1)
        if (F && 0 <= navigator.userAgent.indexOf(H[B])) {
            z = 1;
            break
        } var q, W = F && window.Promise ? function (t) {
            var e = !1;
            return function () {
                e || (e = !0, window.Promise.resolve().then(function () {
                    e = !1, t()
                }))
            }
        } : function (t) {
            var e = !1;
            return function () {
                e || (e = !0, setTimeout(function () {
                    e = !1, t()
                }, z))
            }
        },
        Y = function () {
            return null == q && (q = -1 !== navigator.appVersion.indexOf("MSIE 10")), q
        },
        U = function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        },
        V = function () {
            function t(t, e) {
                for (var n, i = 0; i < e.length; i++)(n = e[i]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
            return function (e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        X = function (t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        },
        Q = Object.assign || function (t) {
            for (var e, n = 1; n < arguments.length; n++)
                for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
        },
        K = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        G = K.slice(3),
        Z = "flip",
        J = "clockwise",
        tt = "counterclockwise",
        et = function () {
            function e(n, i) {
                var r = this,
                    o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                U(this, e), this.scheduleUpdate = function () {
                    return requestAnimationFrame(r.update)
                }, this.update = W(this.update.bind(this)), this.options = Q({}, e.Defaults, o), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = n && n.jquery ? n[0] : n, this.popper = i && i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(Q({}, e.Defaults.modifiers, o.modifiers)).forEach(function (t) {
                    r.options.modifiers[t] = Q({}, e.Defaults.modifiers[t] || {}, o.modifiers ? o.modifiers[t] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function (t) {
                    return Q({
                        name: t
                    }, r.options.modifiers[t])
                }).sort(function (t, e) {
                    return t.order - e.order
                }), this.modifiers.forEach(function (e) {
                    e.enabled && t(e.onLoad) && e.onLoad(r.reference, r.popper, r.options, e, r.state)
                }), this.update();
                var s = this.options.eventsEnabled;
                s && this.enableEventListeners(), this.state.eventsEnabled = s
            }
            return V(e, [{
                key: "update",
                value: function () {
                    return function () {
                        if (!this.state.isDestroyed) {
                            var t = {
                                instance: this,
                                styles: {},
                                arrowStyles: {},
                                attributes: {},
                                flipped: !1,
                                offsets: {}
                            };
                            t.offsets.reference = _(this.state, this.popper, this.reference), t.placement = b(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.offsets.popper = T(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = "absolute", t = E(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t))
                        }
                    }.call(this)
                }
            }, {
                key: "destroy",
                value: function () {
                    return function () {
                        return this.state.isDestroyed = !0, S(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", this.popper.style[A("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                    }.call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function () {
                    return function () {
                        this.state.eventsEnabled || (this.state = D(this.reference, this.options, this.state, this.scheduleUpdate))
                    }.call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function () {
                    return O.call(this)
                }
            }]), e
        }();
    return et.Utils = ("undefined" == typeof window ? global : window).PopperUtils, et.placements = K, et.Defaults = {
        placement: "bottom",
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function () {},
        onUpdate: function () {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function (t) {
                    var e = t.placement,
                        n = e.split("-")[0],
                        i = e.split("-")[1];
                    if (i) {
                        var r = t.offsets,
                            o = r.reference,
                            s = r.popper,
                            a = -1 !== ["bottom", "top"].indexOf(n),
                            l = a ? "left" : "top",
                            c = a ? "width" : "height",
                            u = {
                                start: X({}, l, o[l]),
                                end: X({}, l, o[l] + o[c] - s[c])
                            };
                        t.offsets.popper = Q({}, s, u[i])
                    }
                    return t
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function (t, e) {
                    var n, i = e.offset,
                        r = t.placement,
                        o = t.offsets,
                        s = o.popper,
                        a = o.reference,
                        l = r.split("-")[0];
                    return n = I(+i) ? [+i, 0] : L(i, s, a, l), "left" === l ? (s.top += n[0], s.left -= n[1]) : "right" === l ? (s.top += n[0], s.left += n[1]) : "top" === l ? (s.left += n[0], s.top -= n[1]) : "bottom" === l && (s.left += n[0], s.top += n[1]), t.popper = s, t
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function (t, e) {
                    var n = e.boundariesElement || r(t.instance.popper);
                    t.instance.reference === n && (n = r(n));
                    var i = v(t.instance.popper, t.instance.reference, e.padding, n);
                    e.boundaries = i;
                    var o = e.priority,
                        s = t.offsets.popper,
                        a = {
                            primary: function (t) {
                                var n = s[t];
                                return s[t] < i[t] && !e.escapeWithReference && (n = R(s[t], i[t])), X({}, t, n)
                            },
                            secondary: function (t) {
                                var n = "right" === t ? "left" : "top",
                                    r = s[n];
                                return s[t] > i[t] && !e.escapeWithReference && (r = M(s[n], i[t] - ("right" === t ? s.width : s.height))), X({}, n, r)
                            }
                        };
                    return o.forEach(function (t) {
                        var e = -1 === ["left", "top"].indexOf(t) ? "secondary" : "primary";
                        s = Q({}, s, a[e](t))
                    }), t.offsets.popper = s, t
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function (t) {
                    var e = t.offsets,
                        n = e.popper,
                        i = e.reference,
                        r = t.placement.split("-")[0],
                        o = j,
                        s = -1 !== ["top", "bottom"].indexOf(r),
                        a = s ? "right" : "bottom",
                        l = s ? "left" : "top",
                        c = s ? "width" : "height";
                    return n[a] < o(i[l]) && (t.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[a]) && (t.offsets.popper[l] = o(i[a])), t
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function (t, n) {
                    var i;
                    if (!N(t.instance.modifiers, "arrow", "keepTogether")) return t;
                    var r = n.element;
                    if ("string" == typeof r) {
                        if (!(r = t.instance.popper.querySelector(r))) return t
                    } else if (!t.instance.popper.contains(r)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                    var o = t.placement.split("-")[0],
                        s = t.offsets,
                        a = s.popper,
                        l = s.reference,
                        c = -1 !== ["left", "right"].indexOf(o),
                        u = c ? "height" : "width",
                        f = c ? "Top" : "Left",
                        h = f.toLowerCase(),
                        p = c ? "left" : "top",
                        g = c ? "bottom" : "right",
                        m = w(r)[u];
                    l[g] - m < a[h] && (t.offsets.popper[h] -= a[h] - (l[g] - m)), l[h] + m > a[g] && (t.offsets.popper[h] += l[h] + m - a[g]), t.offsets.popper = d(t.offsets.popper);
                    var v = l[h] + l[u] / 2 - m / 2,
                        y = e(t.instance.popper),
                        b = parseFloat(y["margin" + f], 10),
                        _ = parseFloat(y["border" + f + "Width"], 10),
                        x = v - t.offsets.popper[h] - b - _;
                    return x = R(M(a[u] - m, x), 0), t.arrowElement = r, t.offsets.arrow = (X(i = {}, h, Math.round(x)), X(i, p, ""), i), t
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function (t, e) {
                    if (S(t.instance.modifiers, "inner")) return t;
                    if (t.flipped && t.placement === t.originalPlacement) return t;
                    var n = v(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement),
                        i = t.placement.split("-")[0],
                        r = x(i),
                        o = t.placement.split("-")[1] || "",
                        s = [];
                    switch (e.behavior) {
                        case Z:
                            s = [i, r];
                            break;
                        case J:
                            s = $(i);
                            break;
                        case tt:
                            s = $(i, !0);
                            break;
                        default:
                            s = e.behavior
                    }
                    return s.forEach(function (a, l) {
                        if (i !== a || s.length === l + 1) return t;
                        i = t.placement.split("-")[0], r = x(i);
                        var c = t.offsets.popper,
                            u = t.offsets.reference,
                            f = j,
                            d = "left" === i && f(c.right) > f(u.left) || "right" === i && f(c.left) < f(u.right) || "top" === i && f(c.bottom) > f(u.top) || "bottom" === i && f(c.top) < f(u.bottom),
                            h = f(c.left) < f(n.left),
                            p = f(c.right) > f(n.right),
                            g = f(c.top) < f(n.top),
                            m = f(c.bottom) > f(n.bottom),
                            v = "left" === i && h || "right" === i && p || "top" === i && g || "bottom" === i && m,
                            y = -1 !== ["top", "bottom"].indexOf(i),
                            b = !!e.flipVariations && (y && "start" === o && h || y && "end" === o && p || !y && "start" === o && g || !y && "end" === o && m);
                        (d || v || b) && (t.flipped = !0, (d || v) && (i = s[l + 1]), b && (o = function (t) {
                            return "end" === t ? "start" : "start" === t ? "end" : t
                        }(o)), t.placement = i + (o ? "-" + o : ""), t.offsets.popper = Q({}, t.offsets.popper, T(t.instance.popper, t.offsets.reference, t.placement)), t = E(t.instance.modifiers, t, "flip"))
                    }), t
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport"
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function (t) {
                    var e = t.placement,
                        n = e.split("-")[0],
                        i = t.offsets,
                        r = i.popper,
                        o = i.reference,
                        s = -1 !== ["left", "right"].indexOf(n),
                        a = -1 === ["top", "left"].indexOf(n);
                    return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), t.placement = x(e), t.offsets.popper = d(r), t
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function (t) {
                    if (!N(t.instance.modifiers, "hide", "preventOverflow")) return t;
                    var e = t.offsets.reference,
                        n = C(t.instance.modifiers, function (t) {
                            return "preventOverflow" === t.name
                        }).boundaries;
                    if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                        if (!0 === t.hide) return t;
                        t.hide = !0, t.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === t.hide) return t;
                        t.hide = !1, t.attributes["x-out-of-boundaries"] = !1
                    }
                    return t
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function (t, e) {
                    var n = e.x,
                        i = e.y,
                        o = t.offsets.popper,
                        s = C(t.instance.modifiers, function (t) {
                            return "applyStyle" === t.name
                        }).gpuAcceleration;
                    void 0 !== s && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var a, l, c = void 0 === s ? e.gpuAcceleration : s,
                        u = h(r(t.instance.popper)),
                        f = {
                            position: o.position
                        },
                        d = {
                            left: j(o.left),
                            top: j(o.top),
                            bottom: j(o.bottom),
                            right: j(o.right)
                        },
                        p = "bottom" === n ? "top" : "bottom",
                        g = "right" === i ? "left" : "right",
                        m = A("transform");
                    if (l = "bottom" == p ? -u.height + d.bottom : d.top, a = "right" == g ? -u.width + d.right : d.left, c && m) f[m] = "translate3d(" + a + "px, " + l + "px, 0)", f[p] = 0, f[g] = 0, f.willChange = "transform";
                    else {
                        var v = "bottom" == p ? -1 : 1,
                            y = "right" == g ? -1 : 1;
                        f[p] = l * v, f[g] = a * y, f.willChange = p + ", " + g
                    }
                    var b = {
                        "x-placement": t.placement
                    };
                    return t.attributes = Q({}, b, t.attributes), t.styles = Q({}, f, t.styles), t.arrowStyles = Q({}, t.offsets.arrow, t.arrowStyles), t
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function (t) {
                    return P(t.instance.popper, t.styles),
                        function (t, e) {
                            Object.keys(e).forEach(function (n) {
                                !1 === e[n] ? t.removeAttribute(n) : t.setAttribute(n, e[n])
                            })
                        }(t.instance.popper, t.attributes), t.arrowElement && Object.keys(t.arrowStyles).length && P(t.arrowElement, t.arrowStyles), t
                },
                onLoad: function (t, e, n, i, r) {
                    var o = _(0, e, t),
                        s = b(n.placement, o, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return e.setAttribute("x-placement", s), P(e, {
                        position: "absolute"
                    }), n
                },
                gpuAcceleration: void 0
            }
        }
    }, et
}),
function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper)
}(this, function (t, e, n) {
    "use strict";

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function r(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t
    }

    function o() {
        return (o = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }).apply(this, arguments)
    }
    e = e && e.hasOwnProperty("default") ? e.default : e, n = n && n.hasOwnProperty("default") ? n.default : n;
    var s, a, l, c, u, f, d, h, p, g, m, v, y, b, _, w, x, T, C = function (t) {
            var e = !1;
            var n = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function (t) {
                    do {
                        t += ~~(1e6 * Math.random())
                    } while (document.getElementById(t));
                    return t
                },
                getSelectorFromElement: function (e) {
                    var n, i = e.getAttribute("data-target");
                    i && "#" !== i || (i = e.getAttribute("href") || ""), "#" === i.charAt(0) && (n = i, i = n = "function" == typeof t.escapeSelector ? t.escapeSelector(n).substr(1) : n.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1"));
                    try {
                        return t(document).find(i).length > 0 ? i : null
                    } catch (t) {
                        return null
                    }
                },
                reflow: function (t) {
                    return t.offsetHeight
                },
                triggerTransitionEnd: function (n) {
                    t(n).trigger(e.end)
                },
                supportsTransitionEnd: function () {
                    return Boolean(e)
                },
                isElement: function (t) {
                    return (t[0] || t).nodeType
                },
                typeCheckConfig: function (t, e, i) {
                    for (var r in i)
                        if (Object.prototype.hasOwnProperty.call(i, r)) {
                            var o = i[r],
                                s = e[r],
                                a = s && n.isElement(s) ? "element" : (l = s, {}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());
                            if (!new RegExp(o).test(a)) throw new Error(t.toUpperCase() + ': Option "' + r + '" provided type "' + a + '" but expected type "' + o + '".')
                        } var l
                }
            };
            return e = ("undefined" == typeof window || !window.QUnit) && {
                end: "transitionend"
            }, t.fn.emulateTransitionEnd = function (e) {
                var i = this,
                    r = !1;
                return t(this).one(n.TRANSITION_END, function () {
                    r = !0
                }), setTimeout(function () {
                    r || n.triggerTransitionEnd(i)
                }, e), this
            }, n.supportsTransitionEnd() && (t.event.special[n.TRANSITION_END] = {
                bindType: e.end,
                delegateType: e.end,
                handle: function (e) {
                    if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                }
            }), n
        }(e),
        E = (a = "alert", c = "." + (l = "bs.alert"), u = (s = e).fn[a], f = {
            CLOSE: "close" + c,
            CLOSED: "closed" + c,
            CLICK_DATA_API: "click" + c + ".data-api"
        }, "alert", "fade", "show", d = function () {
            function t(t) {
                this._element = t
            }
            var e = t.prototype;
            return e.close = function (t) {
                t = t || this._element;
                var e = this._getRootElement(t);
                this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
            }, e.dispose = function () {
                s.removeData(this._element, l), this._element = null
            }, e._getRootElement = function (t) {
                var e = C.getSelectorFromElement(t),
                    n = !1;
                return e && (n = s(e)[0]), n || (n = s(t).closest(".alert")[0]), n
            }, e._triggerCloseEvent = function (t) {
                var e = s.Event(f.CLOSE);
                return s(t).trigger(e), e
            }, e._removeElement = function (t) {
                var e = this;
                s(t).removeClass("show"), C.supportsTransitionEnd() && s(t).hasClass("fade") ? s(t).one(C.TRANSITION_END, function (n) {
                    return e._destroyElement(t, n)
                }).emulateTransitionEnd(150) : this._destroyElement(t)
            }, e._destroyElement = function (t) {
                s(t).detach().trigger(f.CLOSED).remove()
            }, t._jQueryInterface = function (e) {
                return this.each(function () {
                    var n = s(this),
                        i = n.data(l);
                    i || (i = new t(this), n.data(l, i)), "close" === e && i[e](this)
                })
            }, t._handleDismiss = function (t) {
                return function (e) {
                    e && e.preventDefault(), t.close(this)
                }
            }, r(t, null, [{
                key: "VERSION",
                get: function () {
                    return "4.0.0"
                }
            }]), t
        }(), s(document).on(f.CLICK_DATA_API, '[data-dismiss="alert"]', d._handleDismiss(new d)), s.fn[a] = d._jQueryInterface, s.fn[a].Constructor = d, s.fn[a].noConflict = function () {
            return s.fn[a] = u, d._jQueryInterface
        }, d),
        S = (p = "button", m = "." + (g = "bs.button"), v = ".data-api", y = (h = e).fn[p], b = "active", "btn", "focus", _ = '[data-toggle^="button"]', '[data-toggle="buttons"]', "input", ".active", w = ".btn", x = {
            CLICK_DATA_API: "click" + m + v,
            FOCUS_BLUR_DATA_API: "focus" + m + v + " blur" + m + v
        }, T = function () {
            function t(t) {
                this._element = t
            }
            var e = t.prototype;
            return e.toggle = function () {
                var t = !0,
                    e = !0,
                    n = h(this._element).closest('[data-toggle="buttons"]')[0];
                if (n) {
                    var i = h(this._element).find("input")[0];
                    if (i) {
                        if ("radio" === i.type)
                            if (i.checked && h(this._element).hasClass(b)) t = !1;
                            else {
                                var r = h(n).find(".active")[0];
                                r && h(r).removeClass(b)
                            } if (t) {
                            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                            i.checked = !h(this._element).hasClass(b), h(i).trigger("change")
                        }
                        i.focus(), e = !1
                    }
                }
                e && this._element.setAttribute("aria-pressed", !h(this._element).hasClass(b)), t && h(this._element).toggleClass(b)
            }, e.dispose = function () {
                h.removeData(this._element, g), this._element = null
            }, t._jQueryInterface = function (e) {
                return this.each(function () {
                    var n = h(this).data(g);
                    n || (n = new t(this), h(this).data(g, n)), "toggle" === e && n[e]()
                })
            }, r(t, null, [{
                key: "VERSION",
                get: function () {
                    return "4.0.0"
                }
            }]), t
        }(), h(document).on(x.CLICK_DATA_API, _, function (t) {
            t.preventDefault();
            var e = t.target;
            h(e).hasClass("btn") || (e = h(e).closest(w)), T._jQueryInterface.call(h(e), "toggle")
        }).on(x.FOCUS_BLUR_DATA_API, _, function (t) {
            var e = h(t.target).closest(w)[0];
            h(e).toggleClass("focus", /^focus(in)?$/.test(t.type))
        }), h.fn[p] = T._jQueryInterface, h.fn[p].Constructor = T, h.fn[p].noConflict = function () {
            return h.fn[p] = y, T._jQueryInterface
        }, T),
        A = function (t) {
            var e = "carousel",
                n = "bs.carousel",
                i = "." + n,
                s = t.fn[e],
                a = {
                    interval: 5e3,
                    keyboard: !0,
                    slide: !1,
                    pause: "hover",
                    wrap: !0
                },
                l = {
                    interval: "(number|boolean)",
                    keyboard: "boolean",
                    slide: "(boolean|string)",
                    pause: "(string|boolean)",
                    wrap: "boolean"
                },
                c = "next",
                u = "prev",
                f = {
                    SLIDE: "slide" + i,
                    SLID: "slid" + i,
                    KEYDOWN: "keydown" + i,
                    MOUSEENTER: "mouseenter" + i,
                    MOUSELEAVE: "mouseleave" + i,
                    TOUCHEND: "touchend" + i,
                    LOAD_DATA_API: "load" + i + ".data-api",
                    CLICK_DATA_API: "click" + i + ".data-api"
                },
                d = "active",
                h = {
                    ACTIVE: ".active",
                    ACTIVE_ITEM: ".active.carousel-item",
                    ITEM: ".carousel-item",
                    NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                    INDICATORS: ".carousel-indicators",
                    DATA_SLIDE: "[data-slide], [data-slide-to]",
                    DATA_RIDE: '[data-ride="carousel"]'
                },
                p = function () {
                    function s(e, n) {
                        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(h.INDICATORS)[0], this._addEventListeners()
                    }
                    var p = s.prototype;
                    return p.next = function () {
                        this._isSliding || this._slide(c)
                    }, p.nextWhenVisible = function () {
                        !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
                    }, p.prev = function () {
                        this._isSliding || this._slide(u)
                    }, p.pause = function (e) {
                        e || (this._isPaused = !0), t(this._element).find(h.NEXT_PREV)[0] && C.supportsTransitionEnd() && (C.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                    }, p.cycle = function (t) {
                        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                    }, p.to = function (e) {
                        var n = this;
                        this._activeElement = t(this._element).find(h.ACTIVE_ITEM)[0];
                        var i = this._getItemIndex(this._activeElement);
                        if (!(e > this._items.length - 1 || e < 0))
                            if (this._isSliding) t(this._element).one(f.SLID, function () {
                                return n.to(e)
                            });
                            else {
                                if (i === e) return this.pause(), void this.cycle();
                                var r = e > i ? c : u;
                                this._slide(r, this._items[e])
                            }
                    }, p.dispose = function () {
                        t(this._element).off(i), t.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                    }, p._getConfig = function (t) {
                        return t = o({}, a, t), C.typeCheckConfig(e, t, l), t
                    }, p._addEventListeners = function () {
                        var e = this;
                        this._config.keyboard && t(this._element).on(f.KEYDOWN, function (t) {
                            return e._keydown(t)
                        }), "hover" === this._config.pause && (t(this._element).on(f.MOUSEENTER, function (t) {
                            return e.pause(t)
                        }).on(f.MOUSELEAVE, function (t) {
                            return e.cycle(t)
                        }), "ontouchstart" in document.documentElement && t(this._element).on(f.TOUCHEND, function () {
                            e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
                                return e.cycle(t)
                            }, 500 + e._config.interval)
                        }))
                    }, p._keydown = function (t) {
                        if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                            case 37:
                                t.preventDefault(), this.prev();
                                break;
                            case 39:
                                t.preventDefault(), this.next()
                        }
                    }, p._getItemIndex = function (e) {
                        return this._items = t.makeArray(t(e).parent().find(h.ITEM)), this._items.indexOf(e)
                    }, p._getItemByDirection = function (t, e) {
                        var n = t === c,
                            i = t === u,
                            r = this._getItemIndex(e),
                            o = this._items.length - 1;
                        if ((i && 0 === r || n && r === o) && !this._config.wrap) return e;
                        var s = (r + (t === u ? -1 : 1)) % this._items.length;
                        return -1 === s ? this._items[this._items.length - 1] : this._items[s]
                    }, p._triggerSlideEvent = function (e, n) {
                        var i = this._getItemIndex(e),
                            r = this._getItemIndex(t(this._element).find(h.ACTIVE_ITEM)[0]),
                            o = t.Event(f.SLIDE, {
                                relatedTarget: e,
                                direction: n,
                                from: r,
                                to: i
                            });
                        return t(this._element).trigger(o), o
                    }, p._setActiveIndicatorElement = function (e) {
                        if (this._indicatorsElement) {
                            t(this._indicatorsElement).find(h.ACTIVE).removeClass(d);
                            var n = this._indicatorsElement.children[this._getItemIndex(e)];
                            n && t(n).addClass(d)
                        }
                    }, p._slide = function (e, n) {
                        var i, r, o, s = this,
                            a = t(this._element).find(h.ACTIVE_ITEM)[0],
                            l = this._getItemIndex(a),
                            u = n || a && this._getItemByDirection(e, a),
                            p = this._getItemIndex(u),
                            g = Boolean(this._interval);
                        if (e === c ? (i = "carousel-item-left", r = "carousel-item-next", o = "left") : (i = "carousel-item-right", r = "carousel-item-prev", o = "right"), u && t(u).hasClass(d)) this._isSliding = !1;
                        else if (!this._triggerSlideEvent(u, o).isDefaultPrevented() && a && u) {
                            this._isSliding = !0, g && this.pause(), this._setActiveIndicatorElement(u);
                            var m = t.Event(f.SLID, {
                                relatedTarget: u,
                                direction: o,
                                from: l,
                                to: p
                            });
                            C.supportsTransitionEnd() && t(this._element).hasClass("slide") ? (t(u).addClass(r), C.reflow(u), t(a).addClass(i), t(u).addClass(i), t(a).one(C.TRANSITION_END, function () {
                                t(u).removeClass(i + " " + r).addClass(d), t(a).removeClass(d + " " + r + " " + i), s._isSliding = !1, setTimeout(function () {
                                    return t(s._element).trigger(m)
                                }, 0)
                            }).emulateTransitionEnd(600)) : (t(a).removeClass(d), t(u).addClass(d), this._isSliding = !1, t(this._element).trigger(m)), g && this.cycle()
                        }
                    }, s._jQueryInterface = function (e) {
                        return this.each(function () {
                            var i = t(this).data(n),
                                r = o({}, a, t(this).data());
                            "object" == typeof e && (r = o({}, r, e));
                            var l = "string" == typeof e ? e : r.slide;
                            if (i || (i = new s(this, r), t(this).data(n, i)), "number" == typeof e) i.to(e);
                            else if ("string" == typeof l) {
                                if (void 0 === i[l]) throw new TypeError('No method named "' + l + '"');
                                i[l]()
                            } else r.interval && (i.pause(), i.cycle())
                        })
                    }, s._dataApiClickHandler = function (e) {
                        var i = C.getSelectorFromElement(this);
                        if (i) {
                            var r = t(i)[0];
                            if (r && t(r).hasClass("carousel")) {
                                var a = o({}, t(r).data(), t(this).data()),
                                    l = this.getAttribute("data-slide-to");
                                l && (a.interval = !1), s._jQueryInterface.call(t(r), a), l && t(r).data(n).to(l), e.preventDefault()
                            }
                        }
                    }, r(s, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function () {
                            return a
                        }
                    }]), s
                }();
            return t(document).on(f.CLICK_DATA_API, h.DATA_SLIDE, p._dataApiClickHandler), t(window).on(f.LOAD_DATA_API, function () {
                t(h.DATA_RIDE).each(function () {
                    var e = t(this);
                    p._jQueryInterface.call(e, e.data())
                })
            }), t.fn[e] = p._jQueryInterface, t.fn[e].Constructor = p, t.fn[e].noConflict = function () {
                return t.fn[e] = s, p._jQueryInterface
            }, p
        }(e),
        k = function (t) {
            var e = "collapse",
                n = "bs.collapse",
                i = "." + n,
                s = t.fn[e],
                a = {
                    toggle: !0,
                    parent: ""
                },
                l = {
                    toggle: "boolean",
                    parent: "(string|element)"
                },
                c = {
                    SHOW: "show" + i,
                    SHOWN: "shown" + i,
                    HIDE: "hide" + i,
                    HIDDEN: "hidden" + i,
                    CLICK_DATA_API: "click" + i + ".data-api"
                },
                u = "show",
                f = "collapse",
                d = "collapsing",
                h = "collapsed",
                p = "width",
                g = {
                    ACTIVES: ".show, .collapsing",
                    DATA_TOGGLE: '[data-toggle="collapse"]'
                },
                m = function () {
                    function i(e, n) {
                        this._isTransitioning = !1, this._element = e, this._config = this._getConfig(n), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                        for (var i = t(g.DATA_TOGGLE), r = 0; r < i.length; r++) {
                            var o = i[r],
                                s = C.getSelectorFromElement(o);
                            null !== s && t(s).filter(e).length > 0 && (this._selector = s, this._triggerArray.push(o))
                        }
                        this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                    }
                    var s = i.prototype;
                    return s.toggle = function () {
                        t(this._element).hasClass(u) ? this.hide() : this.show()
                    }, s.show = function () {
                        var e, r, o = this;
                        if (!(this._isTransitioning || t(this._element).hasClass(u) || (this._parent && 0 === (e = t.makeArray(t(this._parent).find(g.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (e = null), e && (r = t(e).not(this._selector).data(n)) && r._isTransitioning))) {
                            var s = t.Event(c.SHOW);
                            if (t(this._element).trigger(s), !s.isDefaultPrevented()) {
                                e && (i._jQueryInterface.call(t(e).not(this._selector), "hide"), r || t(e).data(n, null));
                                var a = this._getDimension();
                                t(this._element).removeClass(f).addClass(d), this._element.style[a] = 0, this._triggerArray.length > 0 && t(this._triggerArray).removeClass(h).attr("aria-expanded", !0), this.setTransitioning(!0);
                                var l = function () {
                                    t(o._element).removeClass(d).addClass(f).addClass(u), o._element.style[a] = "", o.setTransitioning(!1), t(o._element).trigger(c.SHOWN)
                                };
                                if (C.supportsTransitionEnd()) {
                                    var p = "scroll" + (a[0].toUpperCase() + a.slice(1));
                                    t(this._element).one(C.TRANSITION_END, l).emulateTransitionEnd(600), this._element.style[a] = this._element[p] + "px"
                                } else l()
                            }
                        }
                    }, s.hide = function () {
                        var e = this;
                        if (!this._isTransitioning && t(this._element).hasClass(u)) {
                            var n = t.Event(c.HIDE);
                            if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                                var i = this._getDimension();
                                if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", C.reflow(this._element), t(this._element).addClass(d).removeClass(f).removeClass(u), this._triggerArray.length > 0)
                                    for (var r = 0; r < this._triggerArray.length; r++) {
                                        var o = this._triggerArray[r],
                                            s = C.getSelectorFromElement(o);
                                        null !== s && (t(s).hasClass(u) || t(o).addClass(h).attr("aria-expanded", !1))
                                    }
                                this.setTransitioning(!0);
                                var a = function () {
                                    e.setTransitioning(!1), t(e._element).removeClass(d).addClass(f).trigger(c.HIDDEN)
                                };
                                this._element.style[i] = "", C.supportsTransitionEnd() ? t(this._element).one(C.TRANSITION_END, a).emulateTransitionEnd(600) : a()
                            }
                        }
                    }, s.setTransitioning = function (t) {
                        this._isTransitioning = t
                    }, s.dispose = function () {
                        t.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                    }, s._getConfig = function (t) {
                        return (t = o({}, a, t)).toggle = Boolean(t.toggle), C.typeCheckConfig(e, t, l), t
                    }, s._getDimension = function () {
                        return t(this._element).hasClass(p) ? p : "height"
                    }, s._getParent = function () {
                        var e = this,
                            n = null;
                        C.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = t(this._config.parent)[0];
                        var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                        return t(n).find(r).each(function (t, n) {
                            e._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n])
                        }), n
                    }, s._addAriaAndCollapsedClass = function (e, n) {
                        if (e) {
                            var i = t(e).hasClass(u);
                            n.length > 0 && t(n).toggleClass(h, !i).attr("aria-expanded", i)
                        }
                    }, i._getTargetFromElement = function (e) {
                        var n = C.getSelectorFromElement(e);
                        return n ? t(n)[0] : null
                    }, i._jQueryInterface = function (e) {
                        return this.each(function () {
                            var r = t(this),
                                s = r.data(n),
                                l = o({}, a, r.data(), "object" == typeof e && e);
                            if (!s && l.toggle && /show|hide/.test(e) && (l.toggle = !1), s || (s = new i(this, l), r.data(n, s)), "string" == typeof e) {
                                if (void 0 === s[e]) throw new TypeError('No method named "' + e + '"');
                                s[e]()
                            }
                        })
                    }, r(i, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function () {
                            return a
                        }
                    }]), i
                }();
            return t(document).on(c.CLICK_DATA_API, g.DATA_TOGGLE, function (e) {
                "A" === e.currentTarget.tagName && e.preventDefault();
                var i = t(this),
                    r = C.getSelectorFromElement(this);
                t(r).each(function () {
                    var e = t(this),
                        r = e.data(n) ? "toggle" : i.data();
                    m._jQueryInterface.call(e, r)
                })
            }), t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function () {
                return t.fn[e] = s, m._jQueryInterface
            }, m
        }(e),
        D = function (t) {
            var e = "dropdown",
                i = "bs.dropdown",
                s = "." + i,
                a = ".data-api",
                l = t.fn[e],
                c = new RegExp("38|40|27"),
                u = {
                    HIDE: "hide" + s,
                    HIDDEN: "hidden" + s,
                    SHOW: "show" + s,
                    SHOWN: "shown" + s,
                    CLICK: "click" + s,
                    CLICK_DATA_API: "click" + s + a,
                    KEYDOWN_DATA_API: "keydown" + s + a,
                    KEYUP_DATA_API: "keyup" + s + a
                },
                f = "disabled",
                d = "show",
                h = "dropup",
                p = "dropdown-menu-right",
                g = '[data-toggle="dropdown"]',
                m = ".dropdown-menu",
                v = {
                    offset: 0,
                    flip: !0,
                    boundary: "scrollParent"
                },
                y = {
                    offset: "(number|string|function)",
                    flip: "boolean",
                    boundary: "(string|element)"
                },
                b = function () {
                    function a(t, e) {
                        this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                    }
                    var l = a.prototype;
                    return l.toggle = function () {
                        if (!this._element.disabled && !t(this._element).hasClass(f)) {
                            var e = a._getParentFromElement(this._element),
                                i = t(this._menu).hasClass(d);
                            if (a._clearMenus(), !i) {
                                var r = {
                                        relatedTarget: this._element
                                    },
                                    o = t.Event(u.SHOW, r);
                                if (t(e).trigger(o), !o.isDefaultPrevented()) {
                                    if (!this._inNavbar) {
                                        if (void 0 === n) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                        var s = this._element;
                                        t(e).hasClass(h) && (t(this._menu).hasClass("dropdown-menu-left") || t(this._menu).hasClass(p)) && (s = e), "scrollParent" !== this._config.boundary && t(e).addClass("position-static"), this._popper = new n(s, this._menu, this._getPopperConfig())
                                    }
                                    "ontouchstart" in document.documentElement && 0 === t(e).closest(".navbar-nav").length && t("body").children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(d), t(e).toggleClass(d).trigger(t.Event(u.SHOWN, r))
                                }
                            }
                        }
                    }, l.dispose = function () {
                        t.removeData(this._element, i), t(this._element).off(s), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
                    }, l.update = function () {
                        this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                    }, l._addEventListeners = function () {
                        var e = this;
                        t(this._element).on(u.CLICK, function (t) {
                            t.preventDefault(), t.stopPropagation(), e.toggle()
                        })
                    }, l._getConfig = function (n) {
                        return n = o({}, this.constructor.Default, t(this._element).data(), n), C.typeCheckConfig(e, n, this.constructor.DefaultType), n
                    }, l._getMenuElement = function () {
                        if (!this._menu) {
                            var e = a._getParentFromElement(this._element);
                            this._menu = t(e).find(m)[0]
                        }
                        return this._menu
                    }, l._getPlacement = function () {
                        var e = t(this._element).parent(),
                            n = "bottom-start";
                        return e.hasClass(h) ? (n = "top-start", t(this._menu).hasClass(p) && (n = "top-end")) : e.hasClass("dropright") ? n = "right-start" : e.hasClass("dropleft") ? n = "left-start" : t(this._menu).hasClass(p) && (n = "bottom-end"), n
                    }, l._detectNavbar = function () {
                        return t(this._element).closest(".navbar").length > 0
                    }, l._getPopperConfig = function () {
                        var t = this,
                            e = {};
                        return "function" == typeof this._config.offset ? e.fn = function (e) {
                            return e.offsets = o({}, e.offsets, t._config.offset(e.offsets) || {}), e
                        } : e.offset = this._config.offset, {
                            placement: this._getPlacement(),
                            modifiers: {
                                offset: e,
                                flip: {
                                    enabled: this._config.flip
                                },
                                preventOverflow: {
                                    boundariesElement: this._config.boundary
                                }
                            }
                        }
                    }, a._jQueryInterface = function (e) {
                        return this.each(function () {
                            var n = t(this).data(i);
                            if (n || (n = new a(this, "object" == typeof e ? e : null), t(this).data(i, n)), "string" == typeof e) {
                                if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                                n[e]()
                            }
                        })
                    }, a._clearMenus = function (e) {
                        if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                            for (var n = t.makeArray(t(g)), r = 0; r < n.length; r++) {
                                var o = a._getParentFromElement(n[r]),
                                    s = t(n[r]).data(i),
                                    l = {
                                        relatedTarget: n[r]
                                    };
                                if (s) {
                                    var c = s._menu;
                                    if (t(o).hasClass(d) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && t.contains(o, e.target))) {
                                        var f = t.Event(u.HIDE, l);
                                        t(o).trigger(f), f.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), n[r].setAttribute("aria-expanded", "false"), t(c).removeClass(d), t(o).removeClass(d).trigger(t.Event(u.HIDDEN, l)))
                                    }
                                }
                            }
                    }, a._getParentFromElement = function (e) {
                        var n, i = C.getSelectorFromElement(e);
                        return i && (n = t(i)[0]), n || e.parentNode
                    }, a._dataApiKeydownHandler = function (e) {
                        if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || t(e.target).closest(m).length)) : c.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !t(this).hasClass(f))) {
                            var n = a._getParentFromElement(this),
                                i = t(n).hasClass(d);
                            if ((i || 27 === e.which && 32 === e.which) && (!i || 27 !== e.which && 32 !== e.which)) {
                                var r = t(n).find(".dropdown-menu .dropdown-item:not(.disabled)").get();
                                if (0 !== r.length) {
                                    var o = r.indexOf(e.target);
                                    38 === e.which && o > 0 && o--, 40 === e.which && o < r.length - 1 && o++, o < 0 && (o = 0), r[o].focus()
                                }
                            } else {
                                if (27 === e.which) {
                                    var s = t(n).find(g)[0];
                                    t(s).trigger("focus")
                                }
                                t(this).trigger("click")
                            }
                        }
                    }, r(a, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function () {
                            return v
                        }
                    }, {
                        key: "DefaultType",
                        get: function () {
                            return y
                        }
                    }]), a
                }();
            return t(document).on(u.KEYDOWN_DATA_API, g, b._dataApiKeydownHandler).on(u.KEYDOWN_DATA_API, m, b._dataApiKeydownHandler).on(u.CLICK_DATA_API + " " + u.KEYUP_DATA_API, b._clearMenus).on(u.CLICK_DATA_API, g, function (e) {
                e.preventDefault(), e.stopPropagation(), b._jQueryInterface.call(t(this), "toggle")
            }).on(u.CLICK_DATA_API, ".dropdown form", function (t) {
                t.stopPropagation()
            }), t.fn[e] = b._jQueryInterface, t.fn[e].Constructor = b, t.fn[e].noConflict = function () {
                return t.fn[e] = l, b._jQueryInterface
            }, b
        }(e),
        O = function (t) {
            var e = "bs.modal",
                n = "." + e,
                i = t.fn.modal,
                s = {
                    backdrop: !0,
                    keyboard: !0,
                    focus: !0,
                    show: !0
                },
                a = {
                    backdrop: "(boolean|string)",
                    keyboard: "boolean",
                    focus: "boolean",
                    show: "boolean"
                },
                l = {
                    HIDE: "hide" + n,
                    HIDDEN: "hidden" + n,
                    SHOW: "show" + n,
                    SHOWN: "shown" + n,
                    FOCUSIN: "focusin" + n,
                    RESIZE: "resize" + n,
                    CLICK_DISMISS: "click.dismiss" + n,
                    KEYDOWN_DISMISS: "keydown.dismiss" + n,
                    MOUSEUP_DISMISS: "mouseup.dismiss" + n,
                    MOUSEDOWN_DISMISS: "mousedown.dismiss" + n,
                    CLICK_DATA_API: "click" + n + ".data-api"
                },
                c = "modal-open",
                u = "fade",
                f = "show",
                d = {
                    DIALOG: ".modal-dialog",
                    DATA_TOGGLE: '[data-toggle="modal"]',
                    DATA_DISMISS: '[data-dismiss="modal"]',
                    FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                    STICKY_CONTENT: ".sticky-top",
                    NAVBAR_TOGGLER: ".navbar-toggler"
                },
                h = function () {
                    function i(e, n) {
                        this._config = this._getConfig(n), this._element = e, this._dialog = t(e).find(d.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
                    }
                    var h = i.prototype;
                    return h.toggle = function (t) {
                        return this._isShown ? this.hide() : this.show(t)
                    }, h.show = function (e) {
                        var n = this;
                        if (!this._isTransitioning && !this._isShown) {
                            C.supportsTransitionEnd() && t(this._element).hasClass(u) && (this._isTransitioning = !0);
                            var i = t.Event(l.SHOW, {
                                relatedTarget: e
                            });
                            t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), t(document.body).addClass(c), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(l.CLICK_DISMISS, d.DATA_DISMISS, function (t) {
                                return n.hide(t)
                            }), t(this._dialog).on(l.MOUSEDOWN_DISMISS, function () {
                                t(n._element).one(l.MOUSEUP_DISMISS, function (e) {
                                    t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                                })
                            }), this._showBackdrop(function () {
                                return n._showElement(e)
                            }))
                        }
                    }, h.hide = function (e) {
                        var n = this;
                        if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
                            var i = t.Event(l.HIDE);
                            if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                                this._isShown = !1;
                                var r = C.supportsTransitionEnd() && t(this._element).hasClass(u);
                                r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(l.FOCUSIN), t(this._element).removeClass(f), t(this._element).off(l.CLICK_DISMISS), t(this._dialog).off(l.MOUSEDOWN_DISMISS), r ? t(this._element).one(C.TRANSITION_END, function (t) {
                                    return n._hideModal(t)
                                }).emulateTransitionEnd(300) : this._hideModal()
                            }
                        }
                    }, h.dispose = function () {
                        t.removeData(this._element, e), t(window, document, this._element, this._backdrop).off(n), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
                    }, h.handleUpdate = function () {
                        this._adjustDialog()
                    }, h._getConfig = function (t) {
                        return t = o({}, s, t), C.typeCheckConfig("modal", t, a), t
                    }, h._showElement = function (e) {
                        var n = this,
                            i = C.supportsTransitionEnd() && t(this._element).hasClass(u);
                        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && C.reflow(this._element), t(this._element).addClass(f), this._config.focus && this._enforceFocus();
                        var r = t.Event(l.SHOWN, {
                                relatedTarget: e
                            }),
                            o = function () {
                                n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(r)
                            };
                        i ? t(this._dialog).one(C.TRANSITION_END, o).emulateTransitionEnd(300) : o()
                    }, h._enforceFocus = function () {
                        var e = this;
                        t(document).off(l.FOCUSIN).on(l.FOCUSIN, function (n) {
                            document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus()
                        })
                    }, h._setEscapeEvent = function () {
                        var e = this;
                        this._isShown && this._config.keyboard ? t(this._element).on(l.KEYDOWN_DISMISS, function (t) {
                            27 === t.which && (t.preventDefault(), e.hide())
                        }) : this._isShown || t(this._element).off(l.KEYDOWN_DISMISS)
                    }, h._setResizeEvent = function () {
                        var e = this;
                        this._isShown ? t(window).on(l.RESIZE, function (t) {
                            return e.handleUpdate(t)
                        }) : t(window).off(l.RESIZE)
                    }, h._hideModal = function () {
                        var e = this;
                        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
                            t(document.body).removeClass(c), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(l.HIDDEN)
                        })
                    }, h._removeBackdrop = function () {
                        this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
                    }, h._showBackdrop = function (e) {
                        var n = this,
                            i = t(this._element).hasClass(u) ? u : "";
                        if (this._isShown && this._config.backdrop) {
                            var r = C.supportsTransitionEnd() && i;
                            if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", i && t(this._backdrop).addClass(i), t(this._backdrop).appendTo(document.body), t(this._element).on(l.CLICK_DISMISS, function (t) {
                                    n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                                }), r && C.reflow(this._backdrop), t(this._backdrop).addClass(f), !e) return;
                            if (!r) return void e();
                            t(this._backdrop).one(C.TRANSITION_END, e).emulateTransitionEnd(150)
                        } else if (!this._isShown && this._backdrop) {
                            t(this._backdrop).removeClass(f);
                            var o = function () {
                                n._removeBackdrop(), e && e()
                            };
                            C.supportsTransitionEnd() && t(this._element).hasClass(u) ? t(this._backdrop).one(C.TRANSITION_END, o).emulateTransitionEnd(150) : o()
                        } else e && e()
                    }, h._adjustDialog = function () {
                        var t = this._element.scrollHeight > document.documentElement.clientHeight;
                        !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                    }, h._resetAdjustments = function () {
                        this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                    }, h._checkScrollbar = function () {
                        var t = document.body.getBoundingClientRect();
                        this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                    }, h._setScrollbar = function () {
                        var e = this;
                        if (this._isBodyOverflowing) {
                            t(d.FIXED_CONTENT).each(function (n, i) {
                                var r = t(i)[0].style.paddingRight,
                                    o = t(i).css("padding-right");
                                t(i).data("padding-right", r).css("padding-right", parseFloat(o) + e._scrollbarWidth + "px")
                            }), t(d.STICKY_CONTENT).each(function (n, i) {
                                var r = t(i)[0].style.marginRight,
                                    o = t(i).css("margin-right");
                                t(i).data("margin-right", r).css("margin-right", parseFloat(o) - e._scrollbarWidth + "px")
                            }), t(d.NAVBAR_TOGGLER).each(function (n, i) {
                                var r = t(i)[0].style.marginRight,
                                    o = t(i).css("margin-right");
                                t(i).data("margin-right", r).css("margin-right", parseFloat(o) + e._scrollbarWidth + "px")
                            });
                            var n = document.body.style.paddingRight,
                                i = t("body").css("padding-right");
                            t("body").data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                        }
                    }, h._resetScrollbar = function () {
                        t(d.FIXED_CONTENT).each(function (e, n) {
                            var i = t(n).data("padding-right");
                            void 0 !== i && t(n).css("padding-right", i).removeData("padding-right")
                        }), t(d.STICKY_CONTENT + ", " + d.NAVBAR_TOGGLER).each(function (e, n) {
                            var i = t(n).data("margin-right");
                            void 0 !== i && t(n).css("margin-right", i).removeData("margin-right")
                        });
                        var e = t("body").data("padding-right");
                        void 0 !== e && t("body").css("padding-right", e).removeData("padding-right")
                    }, h._getScrollbarWidth = function () {
                        var t = document.createElement("div");
                        t.className = "modal-scrollbar-measure", document.body.appendChild(t);
                        var e = t.getBoundingClientRect().width - t.clientWidth;
                        return document.body.removeChild(t), e
                    }, i._jQueryInterface = function (n, r) {
                        return this.each(function () {
                            var s = t(this).data(e),
                                a = o({}, i.Default, t(this).data(), "object" == typeof n && n);
                            if (s || (s = new i(this, a), t(this).data(e, s)), "string" == typeof n) {
                                if (void 0 === s[n]) throw new TypeError('No method named "' + n + '"');
                                s[n](r)
                            } else a.show && s.show(r)
                        })
                    }, r(i, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function () {
                            return s
                        }
                    }]), i
                }();
            return t(document).on(l.CLICK_DATA_API, d.DATA_TOGGLE, function (n) {
                var i, r = this,
                    s = C.getSelectorFromElement(this);
                s && (i = t(s)[0]);
                var a = t(i).data(e) ? "toggle" : o({}, t(i).data(), t(this).data());
                "A" !== this.tagName && "AREA" !== this.tagName || n.preventDefault();
                var c = t(i).one(l.SHOW, function (e) {
                    e.isDefaultPrevented() || c.one(l.HIDDEN, function () {
                        t(r).is(":visible") && r.focus()
                    })
                });
                h._jQueryInterface.call(t(i), a, this)
            }), t.fn.modal = h._jQueryInterface, t.fn.modal.Constructor = h, t.fn.modal.noConflict = function () {
                return t.fn.modal = i, h._jQueryInterface
            }, h
        }(e),
        I = function (t) {
            var e = "tooltip",
                i = "bs.tooltip",
                s = "." + i,
                a = t.fn[e],
                l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
                c = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "(number|string)",
                    container: "(string|element|boolean)",
                    fallbackPlacement: "(string|array)",
                    boundary: "(string|element)"
                },
                u = {
                    AUTO: "auto",
                    TOP: "top",
                    RIGHT: "right",
                    BOTTOM: "bottom",
                    LEFT: "left"
                },
                f = {
                    animation: !0,
                    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    selector: !1,
                    placement: "top",
                    offset: 0,
                    container: !1,
                    fallbackPlacement: "flip",
                    boundary: "scrollParent"
                },
                d = "show",
                h = "out",
                p = {
                    HIDE: "hide" + s,
                    HIDDEN: "hidden" + s,
                    SHOW: "show" + s,
                    SHOWN: "shown" + s,
                    INSERTED: "inserted" + s,
                    CLICK: "click" + s,
                    FOCUSIN: "focusin" + s,
                    FOCUSOUT: "focusout" + s,
                    MOUSEENTER: "mouseenter" + s,
                    MOUSELEAVE: "mouseleave" + s
                },
                g = "fade",
                m = "show",
                v = "hover",
                y = "focus",
                b = function () {
                    function a(t, e) {
                        if (void 0 === n) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                        this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
                    }
                    var b = a.prototype;
                    return b.enable = function () {
                        this._isEnabled = !0
                    }, b.disable = function () {
                        this._isEnabled = !1
                    }, b.toggleEnabled = function () {
                        this._isEnabled = !this._isEnabled
                    }, b.toggle = function (e) {
                        if (this._isEnabled)
                            if (e) {
                                var n = this.constructor.DATA_KEY,
                                    i = t(e.currentTarget).data(n);
                                i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                            } else {
                                if (t(this.getTipElement()).hasClass(m)) return void this._leave(null, this);
                                this._enter(null, this)
                            }
                    }, b.dispose = function () {
                        clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                    }, b.show = function () {
                        var e = this;
                        if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                        var i = t.Event(this.constructor.Event.SHOW);
                        if (this.isWithContent() && this._isEnabled) {
                            t(this.element).trigger(i);
                            var r = t.contains(this.element.ownerDocument.documentElement, this.element);
                            if (i.isDefaultPrevented() || !r) return;
                            var o = this.getTipElement(),
                                s = C.getUID(this.constructor.NAME);
                            o.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && t(o).addClass(g);
                            var l = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                                c = this._getAttachment(l);
                            this.addAttachmentClass(c);
                            var u = !1 === this.config.container ? document.body : t(this.config.container);
                            t(o).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(o).appendTo(u), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, o, {
                                placement: c,
                                modifiers: {
                                    offset: {
                                        offset: this.config.offset
                                    },
                                    flip: {
                                        behavior: this.config.fallbackPlacement
                                    },
                                    arrow: {
                                        element: ".arrow"
                                    },
                                    preventOverflow: {
                                        boundariesElement: this.config.boundary
                                    }
                                },
                                onCreate: function (t) {
                                    t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                                },
                                onUpdate: function (t) {
                                    e._handlePopperPlacementChange(t)
                                }
                            }), t(o).addClass(m), "ontouchstart" in document.documentElement && t("body").children().on("mouseover", null, t.noop);
                            var f = function () {
                                e.config.animation && e._fixTransition();
                                var n = e._hoverState;
                                e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), n === h && e._leave(null, e)
                            };
                            C.supportsTransitionEnd() && t(this.tip).hasClass(g) ? t(this.tip).one(C.TRANSITION_END, f).emulateTransitionEnd(a._TRANSITION_DURATION) : f()
                        }
                    }, b.hide = function (e) {
                        var n = this,
                            i = this.getTipElement(),
                            r = t.Event(this.constructor.Event.HIDE),
                            o = function () {
                                n._hoverState !== d && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
                            };
                        t(this.element).trigger(r), r.isDefaultPrevented() || (t(i).removeClass(m), "ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), this._activeTrigger.click = !1, this._activeTrigger[y] = !1, this._activeTrigger[v] = !1, C.supportsTransitionEnd() && t(this.tip).hasClass(g) ? t(i).one(C.TRANSITION_END, o).emulateTransitionEnd(150) : o(), this._hoverState = "")
                    }, b.update = function () {
                        null !== this._popper && this._popper.scheduleUpdate()
                    }, b.isWithContent = function () {
                        return Boolean(this.getTitle())
                    }, b.addAttachmentClass = function (e) {
                        t(this.getTipElement()).addClass("bs-tooltip-" + e)
                    }, b.getTipElement = function () {
                        return this.tip = this.tip || t(this.config.template)[0], this.tip
                    }, b.setContent = function () {
                        var e = t(this.getTipElement());
                        this.setElementContent(e.find(".tooltip-inner"), this.getTitle()), e.removeClass(g + " " + m)
                    }, b.setElementContent = function (e, n) {
                        var i = this.config.html;
                        "object" == typeof n && (n.nodeType || n.jquery) ? i ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()) : e[i ? "html" : "text"](n)
                    }, b.getTitle = function () {
                        var t = this.element.getAttribute("data-original-title");
                        return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
                    }, b._getAttachment = function (t) {
                        return u[t.toUpperCase()]
                    }, b._setListeners = function () {
                        var e = this;
                        this.config.trigger.split(" ").forEach(function (n) {
                            if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
                                return e.toggle(t)
                            });
                            else if ("manual" !== n) {
                                var i = n === v ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                                    r = n === v ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                                t(e.element).on(i, e.config.selector, function (t) {
                                    return e._enter(t)
                                }).on(r, e.config.selector, function (t) {
                                    return e._leave(t)
                                })
                            }
                            t(e.element).closest(".modal").on("hide.bs.modal", function () {
                                return e.hide()
                            })
                        }), this.config.selector ? this.config = o({}, this.config, {
                            trigger: "manual",
                            selector: ""
                        }) : this._fixTitle()
                    }, b._fixTitle = function () {
                        var t = typeof this.element.getAttribute("data-original-title");
                        (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                    }, b._enter = function (e, n) {
                        var i = this.constructor.DATA_KEY;
                        (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? y : v] = !0), t(n.getTipElement()).hasClass(m) || n._hoverState === d ? n._hoverState = d : (clearTimeout(n._timeout), n._hoverState = d, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
                            n._hoverState === d && n.show()
                        }, n.config.delay.show) : n.show())
                    }, b._leave = function (e, n) {
                        var i = this.constructor.DATA_KEY;
                        (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? y : v] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = h, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
                            n._hoverState === h && n.hide()
                        }, n.config.delay.hide) : n.hide())
                    }, b._isWithActiveTrigger = function () {
                        for (var t in this._activeTrigger)
                            if (this._activeTrigger[t]) return !0;
                        return !1
                    }, b._getConfig = function (n) {
                        return "number" == typeof (n = o({}, this.constructor.Default, t(this.element).data(), n)).delay && (n.delay = {
                            show: n.delay,
                            hide: n.delay
                        }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), C.typeCheckConfig(e, n, this.constructor.DefaultType), n
                    }, b._getDelegateConfig = function () {
                        var t = {};
                        if (this.config)
                            for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                        return t
                    }, b._cleanTipClass = function () {
                        var e = t(this.getTipElement()),
                            n = e.attr("class").match(l);
                        null !== n && n.length > 0 && e.removeClass(n.join(""))
                    }, b._handlePopperPlacementChange = function (t) {
                        this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
                    }, b._fixTransition = function () {
                        var e = this.getTipElement(),
                            n = this.config.animation;
                        null === e.getAttribute("x-placement") && (t(e).removeClass(g), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
                    }, a._jQueryInterface = function (e) {
                        return this.each(function () {
                            var n = t(this).data(i),
                                r = "object" == typeof e && e;
                            if ((n || !/dispose|hide/.test(e)) && (n || (n = new a(this, r), t(this).data(i, n)), "string" == typeof e)) {
                                if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                                n[e]()
                            }
                        })
                    }, r(a, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function () {
                            return f
                        }
                    }, {
                        key: "NAME",
                        get: function () {
                            return e
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function () {
                            return i
                        }
                    }, {
                        key: "Event",
                        get: function () {
                            return p
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function () {
                            return s
                        }
                    }, {
                        key: "DefaultType",
                        get: function () {
                            return c
                        }
                    }]), a
                }();
            return t.fn[e] = b._jQueryInterface, t.fn[e].Constructor = b, t.fn[e].noConflict = function () {
                return t.fn[e] = a, b._jQueryInterface
            }, b
        }(e),
        P = function (t) {
            var e = "popover",
                n = "bs.popover",
                i = "." + n,
                s = t.fn[e],
                a = new RegExp("(^|\\s)bs-popover\\S+", "g"),
                l = o({}, I.Default, {
                    placement: "right",
                    trigger: "click",
                    content: "",
                    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                }),
                c = o({}, I.DefaultType, {
                    content: "(string|element|function)"
                }),
                u = {
                    HIDE: "hide" + i,
                    HIDDEN: "hidden" + i,
                    SHOW: "show" + i,
                    SHOWN: "shown" + i,
                    INSERTED: "inserted" + i,
                    CLICK: "click" + i,
                    FOCUSIN: "focusin" + i,
                    FOCUSOUT: "focusout" + i,
                    MOUSEENTER: "mouseenter" + i,
                    MOUSELEAVE: "mouseleave" + i
                },
                f = function (o) {
                    var s, f;

                    function d() {
                        return o.apply(this, arguments) || this
                    }
                    f = o, (s = d).prototype = Object.create(f.prototype), s.prototype.constructor = s, s.__proto__ = f;
                    var h = d.prototype;
                    return h.isWithContent = function () {
                        return this.getTitle() || this._getContent()
                    }, h.addAttachmentClass = function (e) {
                        t(this.getTipElement()).addClass("bs-popover-" + e)
                    }, h.getTipElement = function () {
                        return this.tip = this.tip || t(this.config.template)[0], this.tip
                    }, h.setContent = function () {
                        var e = t(this.getTipElement());
                        this.setElementContent(e.find(".popover-header"), this.getTitle());
                        var n = this._getContent();
                        "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(".popover-body"), n), e.removeClass("fade show")
                    }, h._getContent = function () {
                        return this.element.getAttribute("data-content") || this.config.content
                    }, h._cleanTipClass = function () {
                        var e = t(this.getTipElement()),
                            n = e.attr("class").match(a);
                        null !== n && n.length > 0 && e.removeClass(n.join(""))
                    }, d._jQueryInterface = function (e) {
                        return this.each(function () {
                            var i = t(this).data(n),
                                r = "object" == typeof e ? e : null;
                            if ((i || !/destroy|hide/.test(e)) && (i || (i = new d(this, r), t(this).data(n, i)), "string" == typeof e)) {
                                if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
                                i[e]()
                            }
                        })
                    }, r(d, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function () {
                            return l
                        }
                    }, {
                        key: "NAME",
                        get: function () {
                            return e
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function () {
                            return n
                        }
                    }, {
                        key: "Event",
                        get: function () {
                            return u
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function () {
                            return i
                        }
                    }, {
                        key: "DefaultType",
                        get: function () {
                            return c
                        }
                    }]), d
                }(I);
            return t.fn[e] = f._jQueryInterface, t.fn[e].Constructor = f, t.fn[e].noConflict = function () {
                return t.fn[e] = s, f._jQueryInterface
            }, f
        }(e),
        N = function (t) {
            var e = "scrollspy",
                n = "bs.scrollspy",
                i = "." + n,
                s = t.fn[e],
                a = {
                    offset: 10,
                    method: "auto",
                    target: ""
                },
                l = {
                    offset: "number",
                    method: "string",
                    target: "(string|element)"
                },
                c = {
                    ACTIVATE: "activate" + i,
                    SCROLL: "scroll" + i,
                    LOAD_DATA_API: "load" + i + ".data-api"
                },
                u = "active",
                f = {
                    DATA_SPY: '[data-spy="scroll"]',
                    ACTIVE: ".active",
                    NAV_LIST_GROUP: ".nav, .list-group",
                    NAV_LINKS: ".nav-link",
                    NAV_ITEMS: ".nav-item",
                    LIST_ITEMS: ".list-group-item",
                    DROPDOWN: ".dropdown",
                    DROPDOWN_ITEMS: ".dropdown-item",
                    DROPDOWN_TOGGLE: ".dropdown-toggle"
                },
                d = "position",
                h = function () {
                    function s(e, n) {
                        var i = this;
                        this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + f.NAV_LINKS + "," + this._config.target + " " + f.LIST_ITEMS + "," + this._config.target + " " + f.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(c.SCROLL, function (t) {
                            return i._process(t)
                        }), this.refresh(), this._process()
                    }
                    var h = s.prototype;
                    return h.refresh = function () {
                        var e = this,
                            n = this._scrollElement === this._scrollElement.window ? "offset" : d,
                            i = "auto" === this._config.method ? n : this._config.method,
                            r = i === d ? this._getScrollTop() : 0;
                        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), t.makeArray(t(this._selector)).map(function (e) {
                            var n, o = C.getSelectorFromElement(e);
                            if (o && (n = t(o)[0]), n) {
                                var s = n.getBoundingClientRect();
                                if (s.width || s.height) return [t(n)[i]().top + r, o]
                            }
                            return null
                        }).filter(function (t) {
                            return t
                        }).sort(function (t, e) {
                            return t[0] - e[0]
                        }).forEach(function (t) {
                            e._offsets.push(t[0]), e._targets.push(t[1])
                        })
                    }, h.dispose = function () {
                        t.removeData(this._element, n), t(this._scrollElement).off(i), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                    }, h._getConfig = function (n) {
                        if ("string" != typeof (n = o({}, a, n)).target) {
                            var i = t(n.target).attr("id");
                            i || (i = C.getUID(e), t(n.target).attr("id", i)), n.target = "#" + i
                        }
                        return C.typeCheckConfig(e, n, l), n
                    }, h._getScrollTop = function () {
                        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                    }, h._getScrollHeight = function () {
                        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                    }, h._getOffsetHeight = function () {
                        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                    }, h._process = function () {
                        var t = this._getScrollTop() + this._config.offset,
                            e = this._getScrollHeight(),
                            n = this._config.offset + e - this._getOffsetHeight();
                        if (this._scrollHeight !== e && this.refresh(), t >= n) {
                            var i = this._targets[this._targets.length - 1];
                            this._activeTarget !== i && this._activate(i)
                        } else {
                            if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                            for (var r = this._offsets.length; r--;) this._activeTarget !== this._targets[r] && t >= this._offsets[r] && (void 0 === this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r])
                        }
                    }, h._activate = function (e) {
                        this._activeTarget = e, this._clear();
                        var n = this._selector.split(",");
                        n = n.map(function (t) {
                            return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                        });
                        var i = t(n.join(","));
                        i.hasClass("dropdown-item") ? (i.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(u), i.addClass(u)) : (i.addClass(u), i.parents(f.NAV_LIST_GROUP).prev(f.NAV_LINKS + ", " + f.LIST_ITEMS).addClass(u), i.parents(f.NAV_LIST_GROUP).prev(f.NAV_ITEMS).children(f.NAV_LINKS).addClass(u)), t(this._scrollElement).trigger(c.ACTIVATE, {
                            relatedTarget: e
                        })
                    }, h._clear = function () {
                        t(this._selector).filter(f.ACTIVE).removeClass(u)
                    }, s._jQueryInterface = function (e) {
                        return this.each(function () {
                            var i = t(this).data(n);
                            if (i || (i = new s(this, "object" == typeof e && e), t(this).data(n, i)), "string" == typeof e) {
                                if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
                                i[e]()
                            }
                        })
                    }, r(s, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.0.0"
                        }
                    }, {
                        key: "Default",
                        get: function () {
                            return a
                        }
                    }]), s
                }();
            return t(window).on(c.LOAD_DATA_API, function () {
                for (var e = t.makeArray(t(f.DATA_SPY)), n = e.length; n--;) {
                    var i = t(e[n]);
                    h._jQueryInterface.call(i, i.data())
                }
            }), t.fn[e] = h._jQueryInterface, t.fn[e].Constructor = h, t.fn[e].noConflict = function () {
                return t.fn[e] = s, h._jQueryInterface
            }, h
        }(e),
        $ = function (t) {
            var e = "bs.tab",
                n = "." + e,
                i = t.fn.tab,
                o = {
                    HIDE: "hide" + n,
                    HIDDEN: "hidden" + n,
                    SHOW: "show" + n,
                    SHOWN: "shown" + n,
                    CLICK_DATA_API: "click.bs.tab.data-api"
                },
                s = "active",
                a = "show",
                l = ".active",
                c = "> li > .active",
                u = function () {
                    function n(t) {
                        this._element = t
                    }
                    var i = n.prototype;
                    return i.show = function () {
                        var e = this;
                        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(s) || t(this._element).hasClass("disabled"))) {
                            var n, i, r = t(this._element).closest(".nav, .list-group")[0],
                                a = C.getSelectorFromElement(this._element);
                            if (r) {
                                var u = "UL" === r.nodeName ? c : l;
                                i = (i = t.makeArray(t(r).find(u)))[i.length - 1]
                            }
                            var f = t.Event(o.HIDE, {
                                    relatedTarget: this._element
                                }),
                                d = t.Event(o.SHOW, {
                                    relatedTarget: i
                                });
                            if (i && t(i).trigger(f), t(this._element).trigger(d), !d.isDefaultPrevented() && !f.isDefaultPrevented()) {
                                a && (n = t(a)[0]), this._activate(this._element, r);
                                var h = function () {
                                    var n = t.Event(o.HIDDEN, {
                                            relatedTarget: e._element
                                        }),
                                        r = t.Event(o.SHOWN, {
                                            relatedTarget: i
                                        });
                                    t(i).trigger(n), t(e._element).trigger(r)
                                };
                                n ? this._activate(n, n.parentNode, h) : h()
                            }
                        }
                    }, i.dispose = function () {
                        t.removeData(this._element, e), this._element = null
                    }, i._activate = function (e, n, i) {
                        var r = this,
                            o = ("UL" === n.nodeName ? t(n).find(c) : t(n).children(l))[0],
                            s = i && C.supportsTransitionEnd() && o && t(o).hasClass("fade"),
                            a = function () {
                                return r._transitionComplete(e, o, i)
                            };
                        o && s ? t(o).one(C.TRANSITION_END, a).emulateTransitionEnd(150) : a()
                    }, i._transitionComplete = function (e, n, i) {
                        if (n) {
                            t(n).removeClass(a + " " + s);
                            var r = t(n.parentNode).find("> .dropdown-menu .active")[0];
                            r && t(r).removeClass(s), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                        }
                        if (t(e).addClass(s), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), C.reflow(e), t(e).addClass(a), e.parentNode && t(e.parentNode).hasClass("dropdown-menu")) {
                            var o = t(e).closest(".dropdown")[0];
                            o && t(o).find(".dropdown-toggle").addClass(s), e.setAttribute("aria-expanded", !0)
                        }
                        i && i()
                    }, n._jQueryInterface = function (i) {
                        return this.each(function () {
                            var r = t(this),
                                o = r.data(e);
                            if (o || (o = new n(this), r.data(e, o)), "string" == typeof i) {
                                if (void 0 === o[i]) throw new TypeError('No method named "' + i + '"');
                                o[i]()
                            }
                        })
                    }, r(n, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.0.0"
                        }
                    }]), n
                }();
            return t(document).on(o.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (e) {
                e.preventDefault(), u._jQueryInterface.call(t(this), "show")
            }), t.fn.tab = u._jQueryInterface, t.fn.tab.Constructor = u, t.fn.tab.noConflict = function () {
                return t.fn.tab = i, u._jQueryInterface
            }, u
        }(e);
    ! function (t) {
        if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var e = t.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(e), t.Util = C, t.Alert = E, t.Button = S, t.Carousel = A, t.Collapse = k, t.Dropdown = D, t.Modal = O, t.Popover = P, t.Scrollspy = N, t.Tab = $, t.Tooltip = I, Object.defineProperty(t, "__esModule", {
        value: !0
    })
}),
function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function (t) {
    "use strict";

    function e(t, e) {
        t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e
    }

    function n(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function i(t) {
        return "string" == typeof t
    }

    function r(t) {
        return "function" == typeof t
    }

    function o(t) {
        return "number" == typeof t
    }

    function s(t) {
        return void 0 === t
    }

    function a(t) {
        return "object" == typeof t
    }

    function l(t) {
        return !1 !== t
    }

    function c() {
        return "undefined" != typeof window
    }

    function u(t) {
        return r(t) || i(t)
    }

    function f(t) {
        return (bt = pe(t, oe)) && hn
    }

    function d(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    }

    function h(t, e) {
        return !e && console.warn(t)
    }

    function p(t, e) {
        return t && (oe[t] = e) && bt && (bt[t] = e) || oe
    }

    function g() {
        return 0
    }

    function m(t) {
        var e, n, i = t[0];
        if (a(i) || r(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
            for (n = de.length; n-- && !de[n].targetTest(i););
            e = de[n]
        }
        for (n = t.length; n--;) t[n] && (t[n]._gsap || (t[n]._gsap = new Me(t[n], e))) || t.splice(n, 1);
        return t
    }

    function v(t) {
        return t._gsap || m(be(t))[0]._gsap
    }

    function y(t, e, n) {
        return (n = t[e]) && r(n) ? t[e]() : s(n) && t.getAttribute && t.getAttribute(e) || n
    }

    function b(t, e) {
        return (t = t.split(",")).forEach(e) || t
    }

    function _(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }

    function w(t, e) {
        for (var n = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < n;);
        return i < n
    }

    function x(t, e, n) {
        var i, r = o(t[1]),
            s = (r ? 2 : 1) + (e < 2 ? 0 : 1),
            a = t[s];
        if (r && (a.duration = t[1]), a.parent = n, e) {
            for (i = a; n && !("immediateRender" in i);) i = n.vars.defaults || {}, n = l(n.vars.inherit) && n.parent;
            a.immediateRender = l(i.immediateRender), e < 2 ? a.runBackwards = 1 : a.startAt = t[s - 1]
        }
        return a
    }

    function T() {
        var t, e, n = ae.length,
            i = ae.slice(0);
        for (le = {}, t = ae.length = 0; t < n; t++)(e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }

    function C(t, e, n, i) {
        ae.length && T(), t.render(e, n, i), ae.length && T()
    }

    function E(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(ie).length < 2 ? e : i(t) ? t.trim() : t
    }

    function S(t) {
        return t
    }

    function A(t, e) {
        for (var n in e) n in t || (t[n] = e[n]);
        return t
    }

    function k(t, e) {
        for (var n in e) n in t || "duration" === n || "ease" === n || (t[n] = e[n])
    }

    function D(t, e) {
        for (var n in e) "__proto__" !== n && "constructor" !== n && "prototype" !== n && (t[n] = a(e[n]) ? D(t[n] || (t[n] = {}), e[n]) : e[n]);
        return t
    }

    function O(t, e) {
        var n, i = {};
        for (n in t) n in e || (i[n] = t[n]);
        return i
    }

    function I(t) {
        var e = t.parent || gt,
            n = t.keyframes ? k : A;
        if (l(t.inherit))
            for (; e;) n(t, e.vars.defaults), e = e.parent || e._dp;
        return t
    }

    function P(t, e, n, i) {
        void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
        var r = e._prev,
            o = e._next;
        r ? r._next = o : t[n] === e && (t[n] = o), o ? o._prev = r : t[i] === e && (t[i] = r), e._next = e._prev = e.parent = null
    }

    function N(t, e) {
        !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0
    }

    function $(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var n = t; n;) n._dirty = 1, n = n.parent;
        return t
    }

    function L(t) {
        return t._repeat ? ge(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }

    function M(t, e) {
        return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }

    function j(t) {
        return t._end = _(t._start + (t._tDur / Math.abs(t._ts || t._rts || qt) || 0))
    }

    function R(t, e) {
        var n = t._dp;
        return n && n.smoothChildTiming && t._ts && (t._start = _(n._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), j(t), n._dirty || $(n, t)), t
    }

    function F(t, e) {
        var n;
        if ((e._time || e._initted && !e._dur) && (n = M(t.rawTime(), e), (!e._dur || ve(0, e.totalDuration(), n) - e._tTime > qt) && e.render(n, !0)), $(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (n = t; n._dp;) 0 <= n.rawTime() && n.totalTime(n._tTime), n = n._dp;
            t._zTime = -qt
        }
    }

    function H(t, e, n, i) {
        return e.parent && N(e), e._start = _(n + e._delay), e._end = _(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
            function (t, e, n, i, r) {
                void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
                var o, s = t[i];
                if (r)
                    for (o = e[r]; s && s[r] > o;) s = s._prev;
                s ? (e._next = s._next, s._next = e) : (e._next = t[n], t[n] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t
            }(t, e, "_first", "_last", t._sort ? "_start" : 0), t._recent = e, i || F(t, e), t
    }

    function z(t, e) {
        return (oe.ScrollTrigger || d("scrollTrigger", e)) && oe.ScrollTrigger.create(e, t)
    }

    function B(t, e, n, i) {
        return qe(t, e), t._initted ? !n && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && wt !== Se.frame ? (ae.push(t), t._lazy = [e, i], 1) : void 0 : 1
    }

    function q(t, e, n, i) {
        var r = t._repeat,
            o = _(e) || 0,
            s = t._tTime / t._tDur;
        return s && !i && (t._time *= o / t._dur), t._dur = o, t._tDur = r ? r < 0 ? 1e10 : _(o * (r + 1) + t._rDelay * r) : o, s && !i ? R(t, t._tTime = t._tDur * s) : t.parent && j(t), n || $(t.parent, t), t
    }

    function W(t) {
        return t instanceof Fe ? $(t) : q(t, t._dur)
    }

    function Y(t, e) {
        var n, r, o = t.labels,
            s = t._recent || me,
            a = t.duration() >= Bt ? s.endTime(!1) : t._dur;
        return i(e) && (isNaN(e) || e in o) ? "<" === (n = e.charAt(0)) || ">" === n ? ("<" === n ? s._start : s.endTime(0 <= s._repeat)) + (parseFloat(e.substr(1)) || 0) : (n = e.indexOf("=")) < 0 ? (e in o || (o[e] = a), o[e]) : (r = +(e.charAt(n - 1) + e.substr(n + 1)), 1 < n ? Y(t, e.substr(0, n - 1)) + r : a + r) : null == e ? a : +e
    }

    function U(t, e) {
        return t || 0 === t ? e(t) : e
    }

    function V(t) {
        if ("string" != typeof t) return "";
        var e = re.exec(t);
        return e ? t.substr(e.index + e[0].length) : ""
    }

    function X(t, e) {
        return t && a(t) && "length" in t && (!e && !t.length || t.length - 1 in t && a(t[0])) && !t.nodeType && t !== mt
    }

    function Q(t) {
        return t.sort(function () {
            return .5 - Math.random()
        })
    }

    function K(t) {
        if (r(t)) return t;
        var e = a(t) ? t : {
                each: t
            },
            n = Pe(e.ease),
            o = e.from || 0,
            s = parseFloat(e.base) || 0,
            l = {},
            c = 0 < o && o < 1,
            u = isNaN(o) || c,
            f = e.axis,
            d = o,
            h = o;
        return i(o) ? d = h = {
                center: .5,
                edges: .5,
                end: 1
            } [o] || 0 : !c && u && (d = o[0], h = o[1]),
            function (t, i, r) {
                var a, c, p, g, m, v, y, b, w, x = (r || e).length,
                    T = l[x];
                if (!T) {
                    if (!(w = "auto" === e.grid ? 0 : (e.grid || [1, Bt])[1])) {
                        for (y = -Bt; y < (y = r[w++].getBoundingClientRect().left) && w < x;);
                        w--
                    }
                    for (T = l[x] = [], a = u ? Math.min(w, x) * d - .5 : o % w, c = u ? x * h / w - .5 : o / w | 0, b = Bt, v = y = 0; v < x; v++) p = v % w - a, g = c - (v / w | 0), T[v] = m = f ? Math.abs("y" === f ? g : p) : Vt(p * p + g * g), y < m && (y = m), m < b && (b = m);
                    "random" === o && Q(T), T.max = y - b, T.min = b, T.v = x = (parseFloat(e.amount) || parseFloat(e.each) * (x < w ? x - 1 : f ? "y" === f ? x / w : w : Math.max(w, x / w)) || 0) * ("edges" === o ? -1 : 1), T.b = x < 0 ? s - x : s, T.u = V(e.amount || e.each) || 0, n = n && x < 0 ? Ie(n) : n
                }
                return x = (T[t] - T.min) / T.max || 0, _(T.b + (n ? n(x) : x) * T.v) + T.u
            }
    }

    function G(t) {
        var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
        return function (n) {
            var i = Math.round(parseFloat(n) / t) * t * e;
            return (i - i % 1) / e + (o(n) ? 0 : V(n))
        }
    }

    function Z(t, e) {
        var n, i, s = Gt(t);
        return !s && a(t) && (n = s = t.radius || Bt, t.values ? (t = be(t.values), (i = !o(t[0])) && (n *= n)) : t = G(t.increment)), U(e, s ? r(t) ? function (e) {
            return i = t(e), Math.abs(i - e) <= n ? i : e
        } : function (e) {
            for (var r, s, a = parseFloat(i ? e.x : e), l = parseFloat(i ? e.y : 0), c = Bt, u = 0, f = t.length; f--;)(r = i ? (r = t[f].x - a) * r + (s = t[f].y - l) * s : Math.abs(t[f] - a)) < c && (c = r, u = f);
            return u = !n || c <= n ? t[u] : e, i || u === e || o(e) ? u : u + V(e)
        } : G(t))
    }

    function J(t, e, n, i) {
        return U(Gt(t) ? !e : !0 === n ? !!(n = 0) : !i, function () {
            return Gt(t) ? t[~~(Math.random() * t.length)] : (n = n || 1e-5) && (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((t - n / 2 + Math.random() * (e - t + .99 * n)) / n) * n * i) / i
        })
    }

    function tt(t, e, n) {
        return U(n, function (n) {
            return t[~~e(n)]
        })
    }

    function et(t) {
        for (var e, n, i, r, o = 0, s = ""; ~(e = t.indexOf("random(", o));) i = t.indexOf(")", e), r = "[" === t.charAt(e + 7), n = t.substr(e + 7, i - e - 7).match(r ? ie : Zt), s += t.substr(o, e - o) + J(r ? n : +n[0], r ? 0 : +n[1], +n[2] || 1e-5), o = i + 1;
        return s + t.substr(o, t.length - o)
    }

    function nt(t, e, n) {
        var i, r, o, s = t.labels,
            a = Bt;
        for (i in s)(r = s[i] - e) < 0 == !!n && r && a > (r = Math.abs(r)) && (o = i, a = r);
        return o
    }

    function it(t) {
        return N(t), t.progress() < 1 && we(t, "onInterrupt"), t
    }

    function rt(t, e, n) {
        return (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (n - e) * t * 6 : t < .5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) * xe + .5 | 0
    }

    function ot(t, e, n) {
        var i, r, s, a, l, c, u, f, d, h, p = t ? o(t) ? [t >> 16, t >> 8 & xe, t & xe] : 0 : Te.black;
        if (!p) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Te[t]) p = Te[t];
            else if ("#" === t.charAt(0)) {
                if (t.length < 6 && (t = "#" + (i = t.charAt(1)) + i + (r = t.charAt(2)) + r + (s = t.charAt(3)) + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(p = parseInt(t.substr(1, 6), 16)) >> 16, p >> 8 & xe, p & xe, parseInt(t.substr(7), 16) / 255];
                p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & xe, t & xe]
            } else if ("hsl" === t.substr(0, 3))
                if (p = h = t.match(Zt), e) {
                    if (~t.indexOf("=")) return p = t.match(Jt), n && p.length < 4 && (p[3] = 1), p
                } else a = +p[0] % 360 / 360, l = p[1] / 100, i = 2 * (c = p[2] / 100) - (r = c <= .5 ? c * (l + 1) : c + l - c * l), 3 < p.length && (p[3] *= 1), p[0] = rt(a + 1 / 3, i, r), p[1] = rt(a, i, r), p[2] = rt(a - 1 / 3, i, r);
            else p = t.match(Zt) || Te.transparent;
            p = p.map(Number)
        }
        return e && !h && (i = p[0] / xe, r = p[1] / xe, s = p[2] / xe, c = ((u = Math.max(i, r, s)) + (f = Math.min(i, r, s))) / 2, u === f ? a = l = 0 : (d = u - f, l = .5 < c ? d / (2 - u - f) : d / (u + f), a = u === i ? (r - s) / d + (r < s ? 6 : 0) : u === r ? (s - i) / d + 2 : (i - r) / d + 4, a *= 60), p[0] = ~~(a + .5), p[1] = ~~(100 * l + .5), p[2] = ~~(100 * c + .5)), n && p.length < 4 && (p[3] = 1), p
    }

    function st(t) {
        var e = [],
            n = [],
            i = -1;
        return t.split(Ce).forEach(function (t) {
            var r = t.match(te) || [];
            e.push.apply(e, r), n.push(i += r.length + 1)
        }), e.c = n, e
    }

    function at(t, e, n) {
        var i, r, o, s, a = "",
            l = (t + a).match(Ce),
            c = e ? "hsla(" : "rgba(",
            u = 0;
        if (!l) return t;
        if (l = l.map(function (t) {
                return (t = ot(t, e, 1)) && c + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
            }), n && (o = st(t), (i = n.c).join(a) !== o.c.join(a)))
            for (s = (r = t.replace(Ce, "1").split(te)).length - 1; u < s; u++) a += r[u] + (~i.indexOf(u) ? l.shift() || c + "0,0,0,0)" : (o.length ? o : l.length ? l : n).shift());
        if (!r)
            for (s = (r = t.split(Ce)).length - 1; u < s; u++) a += r[u] + l[u];
        return a + r[s]
    }

    function lt(t) {
        var e, n = t.join(" ");
        if (Ce.lastIndex = 0, Ce.test(n)) return e = Ee.test(n), t[1] = at(t[1], e), t[0] = at(t[0], e, st(t[1])), !0
    }

    function ct(t, e) {
        for (var n, i = t._first; i;) i instanceof Fe ? ct(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? ct(i.timeline, e) : (n = i._ease, i._ease = i._yEase, i._yEase = n, i._yoyo = e)), i = i._next
    }

    function ut(t, e, n, i) {
        void 0 === n && (n = function (t) {
            return 1 - e(1 - t)
        }), void 0 === i && (i = function (t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
        });
        var r, o = {
            easeIn: e,
            easeOut: n,
            easeInOut: i
        };
        return b(t, function (t) {
            for (var e in ke[t] = oe[t] = o, ke[r = t.toLowerCase()] = n, o) ke[r + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = ke[t + "." + e] = o[e]
        }), o
    }

    function ft(t) {
        return function (e) {
            return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
        }
    }

    function dt(t, e, n) {
        function i(t) {
            return 1 === t ? 1 : r * Math.pow(2, -10 * t) * Qt((t - s) * o) + 1
        }
        var r = 1 <= e ? e : 1,
            o = (n || (t ? .3 : .45)) / (e < 1 ? e : 1),
            s = o / Wt * (Math.asin(1 / r) || 0),
            a = "out" === t ? i : "in" === t ? function (t) {
                return 1 - i(1 - t)
            } : ft(i);
        return o = Wt / o, a.config = function (e, n) {
            return dt(t, e, n)
        }, a
    }

    function ht(t, e) {
        function n(t) {
            return t ? --t * t * ((e + 1) * t + e) + 1 : 0
        }
        void 0 === e && (e = 1.70158);
        var i = "out" === t ? n : "in" === t ? function (t) {
            return 1 - n(1 - t)
        } : ft(n);
        return i.config = function (e) {
            return ht(t, e)
        }, i
    }
    var pt, gt, mt, vt, yt, bt, _t, wt, xt, Tt, Ct, Et, St, At, kt, Dt, Ot, It, Pt, Nt, $t, Lt, Mt, jt, Rt, Ft, Ht = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
        zt = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        Bt = 1e8,
        qt = 1 / Bt,
        Wt = 2 * Math.PI,
        Yt = Wt / 4,
        Ut = 0,
        Vt = Math.sqrt,
        Xt = Math.cos,
        Qt = Math.sin,
        Kt = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function () {},
        Gt = Array.isArray,
        Zt = /(?:-?\.?\d|\.)+/gi,
        Jt = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        te = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        ee = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        ne = /[+-]=-?[.\d]+/,
        ie = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
        re = /[\d.+\-=]+(?:e[-+]\d*)*/i,
        oe = {},
        se = {},
        ae = [],
        le = {},
        ce = {},
        ue = {},
        fe = 30,
        de = [],
        he = "",
        pe = function (t, e) {
            for (var n in e) t[n] = e[n];
            return t
        },
        ge = function (t, e) {
            var n = Math.floor(t /= e);
            return t && n === t ? n - 1 : n
        },
        me = {
            _start: 0,
            endTime: g
        },
        ve = function (t, e, n) {
            return n < t ? t : e < n ? e : n
        },
        ye = [].slice,
        be = function (t, e) {
            return !i(t) || e || !vt && Ae() ? Gt(t) ? function (t, e, n) {
                return void 0 === n && (n = []), t.forEach(function (t) {
                    return i(t) && !e || X(t, 1) ? n.push.apply(n, be(t)) : n.push(t)
                }) || n
            }(t, e) : X(t) ? ye.call(t, 0) : t ? [t] : [] : ye.call(yt.querySelectorAll(t), 0)
        },
        _e = function (t, e, n, i, r) {
            var o = e - t,
                s = i - n;
            return U(r, function (e) {
                return n + ((e - t) / o * s || 0)
            })
        },
        we = function (t, e, n) {
            var i, r, o = t.vars,
                s = o[e];
            if (s) return i = o[e + "Params"], r = o.callbackScope || t, n && ae.length && T(), i ? s.apply(r, i) : s.call(r)
        },
        xe = 255,
        Te = {
            aqua: [0, xe, xe],
            lime: [0, xe, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, xe],
            navy: [0, 0, 128],
            white: [xe, xe, xe],
            olive: [128, 128, 0],
            yellow: [xe, xe, 0],
            orange: [xe, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [xe, 0, 0],
            pink: [xe, 192, 203],
            cyan: [0, xe, xe],
            transparent: [xe, xe, xe, 0]
        },
        Ce = function () {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in Te) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi")
        }(),
        Ee = /hsl[a]?\(/,
        Se = (Ot = Date.now, It = 500, Pt = 33, Nt = Ot(), $t = Nt, Mt = Lt = 1e3 / 240, At = {
            time: 0,
            frame: 0,
            tick: function () {
                Ne(!0)
            },
            deltaRatio: function (t) {
                return kt / (1e3 / (t || 60))
            },
            wake: function () {
                _t && (!vt && c() && (mt = vt = window, yt = mt.document || {}, oe.gsap = hn, (mt.gsapVersions || (mt.gsapVersions = [])).push(hn.version), f(bt || mt.GreenSockGlobals || !mt.gsap && mt || {}), St = mt.requestAnimationFrame), Ct && At.sleep(), Et = St || function (t) {
                    return setTimeout(t, Mt - 1e3 * At.time + 1 | 0)
                }, Tt = 1, Ne(2))
            },
            sleep: function () {
                (St ? mt.cancelAnimationFrame : clearTimeout)(Ct), Tt = 0, Et = g
            },
            lagSmoothing: function (t, e) {
                It = t || 1e8, Pt = Math.min(e, It, 0)
            },
            fps: function (t) {
                Lt = 1e3 / (t || 240), Mt = 1e3 * At.time + Lt
            },
            add: function (t) {
                jt.indexOf(t) < 0 && jt.push(t), Ae()
            },
            remove: function (t) {
                var e;
                ~(e = jt.indexOf(t)) && jt.splice(e, 1) && e <= Dt && Dt--
            },
            _listeners: jt = []
        }),
        Ae = function () {
            return !Tt && Se.wake()
        },
        ke = {},
        De = /^[\d.\-M][\d.\-,\s]/,
        Oe = /["']/g,
        Ie = function (t) {
            return function (e) {
                return 1 - t(1 - e)
            }
        },
        Pe = function (t, e) {
            return t && (r(t) ? t : ke[t] || function (t) {
                var e = (t + "").split("("),
                    n = ke[e[0]];
                return n && 1 < e.length && n.config ? n.config.apply(null, ~t.indexOf("{") ? [function (t) {
                    for (var e, n, i, r = {}, o = t.substr(1, t.length - 3).split(":"), s = o[0], a = 1, l = o.length; a < l; a++) n = o[a], e = a !== l - 1 ? n.lastIndexOf(",") : n.length, i = n.substr(0, e), r[s] = isNaN(i) ? i.replace(Oe, "").trim() : +i, s = n.substr(e + 1).trim();
                    return r
                }(e[1])] : function (t) {
                    var e = t.indexOf("(") + 1,
                        n = t.indexOf(")"),
                        i = t.indexOf("(", e);
                    return t.substring(e, ~i && i < n ? t.indexOf(")", n + 1) : n)
                }(t).split(",").map(E)) : ke._CE && De.test(t) ? ke._CE("", t) : n
            }(t)) || e
        };

    function Ne(t) {
        var e, n, i, r, o = Ot() - $t,
            s = !0 === t;
        if (It < o && (Nt += o - Pt), (0 < (e = (i = ($t += o) - Nt) - Mt) || s) && (r = ++At.frame, kt = i - 1e3 * At.time, At.time = i /= 1e3, Mt += e + (Lt <= e ? 4 : Lt - e), n = 1), s || (Ct = Et(Ne)), n)
            for (Dt = 0; Dt < jt.length; Dt++) jt[Dt](i, kt, r, t)
    }

    function $e(t) {
        return t < Ft ? Rt * t * t : t < .7272727272727273 ? Rt * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? Rt * (t -= 2.25 / 2.75) * t + .9375 : Rt * Math.pow(t - 2.625 / 2.75, 2) + .984375
    }
    b("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
        var n = e < 5 ? e + 1 : e;
        ut(t + ",Power" + (n - 1), e ? function (t) {
            return Math.pow(t, n)
        } : function (t) {
            return t
        }, function (t) {
            return 1 - Math.pow(1 - t, n)
        }, function (t) {
            return t < .5 ? Math.pow(2 * t, n) / 2 : 1 - Math.pow(2 * (1 - t), n) / 2
        })
    }), ke.Linear.easeNone = ke.none = ke.Linear.easeIn, ut("Elastic", dt("in"), dt("out"), dt()), Rt = 7.5625, Ft = 1 / 2.75, ut("Bounce", function (t) {
        return 1 - $e(1 - t)
    }, $e), ut("Expo", function (t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    }), ut("Circ", function (t) {
        return -(Vt(1 - t * t) - 1)
    }), ut("Sine", function (t) {
        return 1 === t ? 1 : 1 - Xt(t * Yt)
    }), ut("Back", ht("in"), ht("out"), ht()), ke.SteppedEase = ke.steps = oe.SteppedEase = {
        config: function (t, e) {
            void 0 === t && (t = 1);
            var n = 1 / t,
                i = t + (e ? 0 : 1),
                r = e ? 1 : 0;
            return function (t) {
                return ((i * ve(0, .99999999, t) | 0) + r) * n
            }
        }
    }, zt.ease = ke["quad.out"], b("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (t) {
        return he += t + "," + t + "Params,"
    });
    var Le, Me = function (t, e) {
            this.id = Ut++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : y, this.set = e ? e.getSetter : Je
        },
        je = ((Le = Re.prototype).delay = function (t) {
            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
        }, Le.duration = function (t) {
            return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
        }, Le.totalDuration = function (t) {
            return arguments.length ? (this._dirty = 0, q(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, Le.totalTime = function (t, e) {
            if (Ae(), !arguments.length) return this._tTime;
            var n = this._dp;
            if (n && n.smoothChildTiming && this._ts) {
                for (R(this, t), !n._dp || n.parent || F(n, this); n.parent;) n.parent._time !== n._start + (0 <= n._ts ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
                !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && H(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === qt || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), C(this, t, e)), this
        }, Le.time = function (t, e) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + L(this)) % this._dur || (t ? this._dur : 0), e) : this._time
        }, Le.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }, Le.progress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + L(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }, Le.iteration = function (t, e) {
            var n = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * n, e) : this._repeat ? ge(this._tTime, n) + 1 : 1
        }, Le.timeScale = function (t) {
            if (!arguments.length) return this._rts === -qt ? 0 : this._rts;
            if (this._rts === t) return this;
            var e = this.parent && this._ts ? M(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0, this._ts = this._ps || t === -qt ? 0 : this._rts,
                function (t) {
                    for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
                    return t
                }(this.totalTime(ve(-this._delay, this._tDur, e), !0))
        }, Le.paused = function (t) {
            return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Ae(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= qt) && Math.abs(this._zTime) !== qt))), this) : this._ps
        }, Le.startTime = function (t) {
            if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return !e || !e._sort && this.parent || H(e, this, t - this._delay), this
            }
            return this._start
        }, Le.endTime = function (t) {
            return this._start + (l(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
        }, Le.rawTime = function (t) {
            var e = this.parent || this._dp;
            return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? M(e.rawTime(t), this) : this._tTime : this._tTime
        }, Le.globalTime = function (t) {
            for (var e = this, n = arguments.length ? t : e.rawTime(); e;) n = e._start + n / (e._ts || 1), e = e._dp;
            return n
        }, Le.repeat = function (t) {
            return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, W(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
        }, Le.repeatDelay = function (t) {
            return arguments.length ? (this._rDelay = t, W(this)) : this._rDelay
        }, Le.yoyo = function (t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, Le.seek = function (t, e) {
            return this.totalTime(Y(this, t), l(e))
        }, Le.restart = function (t, e) {
            return this.play().totalTime(t ? -this._delay : 0, l(e))
        }, Le.play = function (t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, Le.reverse = function (t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, Le.pause = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, Le.resume = function () {
            return this.paused(!1)
        }, Le.reversed = function (t) {
            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -qt : 0)), this) : this._rts < 0
        }, Le.invalidate = function () {
            return this._initted = this._act = 0, this._zTime = -qt, this
        }, Le.isActive = function () {
            var t, e = this.parent || this._dp,
                n = this._start;
            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= n && t < this.endTime(!0) - qt))
        }, Le.eventCallback = function (t, e, n) {
            var i = this.vars;
            return 1 < arguments.length ? (e ? (i[t] = e, n && (i[t + "Params"] = n), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t]
        }, Le.then = function (t) {
            var e = this;
            return new Promise(function (n) {
                function i() {
                    var t = e.then;
                    e.then = null, r(o) && (o = o(e)) && (o.then || o === e) && (e.then = t), n(o), e.then = t
                }
                var o = r(t) ? t : S;
                e._initted && 1 === e.totalProgress() && 0 <= e._ts || !e._tTime && e._ts < 0 ? i() : e._prom = i
            })
        }, Le.kill = function () {
            it(this)
        }, Re);

    function Re(t, e) {
        var n = t.parent || gt;
        this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, q(this, +t.duration, 1, 1), this.data = t.data, Tt || Se.wake(), n && H(n, this, e || 0 === e ? e : n._time, 1), t.reversed && this.reverse(), t.paused && this.paused(!0)
    }
    A(je.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -qt,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Fe = function (t) {
        function s(e, i) {
            var r;
            return void 0 === e && (e = {}), (r = t.call(this, e, i) || this).labels = {}, r.smoothChildTiming = !!e.smoothChildTiming, r.autoRemoveChildren = !!e.autoRemoveChildren, r._sort = l(e.sortChildren), r.parent && F(r.parent, n(r)), e.scrollTrigger && z(n(r), e.scrollTrigger), r
        }
        e(s, t);
        var a = s.prototype;
        return a.to = function (t, e, n, i) {
            return new Ve(t, x(arguments, 0, this), Y(this, o(e) ? i : n)), this
        }, a.from = function (t, e, n, i) {
            return new Ve(t, x(arguments, 1, this), Y(this, o(e) ? i : n)), this
        }, a.fromTo = function (t, e, n, i, r) {
            return new Ve(t, x(arguments, 2, this), Y(this, o(e) ? r : i)), this
        }, a.set = function (t, e, n) {
            return e.duration = 0, e.parent = this, I(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Ve(t, e, Y(this, n), 1), this
        }, a.call = function (t, e, n) {
            return H(this, Ve.delayedCall(0, t, e), Y(this, n))
        }, a.staggerTo = function (t, e, n, i, r, o, s) {
            return n.duration = e, n.stagger = n.stagger || i, n.onComplete = o, n.onCompleteParams = s, n.parent = this, new Ve(t, n, Y(this, r)), this
        }, a.staggerFrom = function (t, e, n, i, r, o, s) {
            return n.runBackwards = 1, I(n).immediateRender = l(n.immediateRender), this.staggerTo(t, e, n, i, r, o, s)
        }, a.staggerFromTo = function (t, e, n, i, r, o, s, a) {
            return i.startAt = n, I(i).immediateRender = l(i.immediateRender), this.staggerTo(t, e, i, r, o, s, a)
        }, a.render = function (t, e, n) {
            var i, r, o, s, a, l, c, u, f, d, h, p, g = this._time,
                m = this._dirty ? this.totalDuration() : this._tDur,
                v = this._dur,
                y = this !== gt && m - qt < t && 0 <= t ? m : t < qt ? 0 : t,
                b = this._zTime < 0 != t < 0 && (this._initted || !v);
            if (y !== this._tTime || n || b) {
                if (g !== this._time && v && (y += this._time - g, t += this._time - g), i = y, f = this._start, l = !(u = this._ts), b && (v || (g = this._zTime), !t && e || (this._zTime = t)), this._repeat) {
                    if (h = this._yoyo, a = v + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * a + t, e, n);
                    if (i = _(y % a), y === m ? (s = this._repeat, i = v) : ((s = ~~(y / a)) && s === y / a && (i = v, s--), v < i && (i = v)), d = ge(this._tTime, a), !g && this._tTime && d !== s && (d = s), h && 1 & s && (i = v - i, p = 1), s !== d && !this._lock) {
                        var w = h && 1 & d,
                            x = w === (h && 1 & s);
                        if (s < d && (w = !w), g = w ? 0 : v, this._lock = 1, this.render(g || (p ? 0 : _(s * a)), e, !v)._lock = 0, !e && this.parent && we(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1), g !== this._time || l != !this._ts) return this;
                        if (v = this._dur, m = this._tDur, x && (this._lock = 2, g = w ? v : -1e-4, this.render(g, !0), this.vars.repeatRefresh && !p && this.invalidate()), this._lock = 0, !this._ts && !l) return this;
                        ct(this, p)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (c = function (t, e, n) {
                        var i;
                        if (e < n)
                            for (i = t._first; i && i._start <= n;) {
                                if (!i._dur && "isPause" === i.data && i._start > e) return i;
                                i = i._next
                            } else
                                for (i = t._last; i && i._start >= n;) {
                                    if (!i._dur && "isPause" === i.data && i._start < e) return i;
                                    i = i._prev
                                }
                    }(this, _(g), _(i))) && (y -= i - (i = c._start)), this._tTime = y, this._time = i, this._act = !u, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, g = 0), g || !(i || !v && 0 <= t) || e || we(this, "onStart"), g <= i && 0 <= t)
                    for (r = this._first; r;) {
                        if (o = r._next, (r._act || i >= r._start) && r._ts && c !== r) {
                            if (r.parent !== this) return this.render(t, e, n);
                            if (r.render(0 < r._ts ? (i - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (i - r._start) * r._ts, e, n), i !== this._time || !this._ts && !l) {
                                c = 0, o && (y += this._zTime = -qt);
                                break
                            }
                        }
                        r = o
                    } else {
                        r = this._last;
                        for (var T = t < 0 ? t : i; r;) {
                            if (o = r._prev, (r._act || T <= r._end) && r._ts && c !== r) {
                                if (r.parent !== this) return this.render(t, e, n);
                                if (r.render(0 < r._ts ? (T - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (T - r._start) * r._ts, e, n), i !== this._time || !this._ts && !l) {
                                    c = 0, o && (y += this._zTime = T ? -qt : qt);
                                    break
                                }
                            }
                            r = o
                        }
                    }
                if (c && !e && (this.pause(), c.render(g <= i ? 0 : -qt)._zTime = g <= i ? 1 : -1, this._ts)) return this._start = f, j(this), this.render(t, e, n);
                this._onUpdate && !e && we(this, "onUpdate", !0), (y === m && m >= this.totalDuration() || !y && g) && (f !== this._start && Math.abs(u) === Math.abs(this._ts) || this._lock || (!t && v || !(y === m && 0 < this._ts || !y && this._ts < 0) || N(this, 1), e || t < 0 && !g || !y && !g || (we(this, y === m ? "onComplete" : "onReverseComplete", !0), !this._prom || y < m && 0 < this.timeScale() || this._prom())))
            }
            return this
        }, a.add = function (t, e) {
            var n = this;
            if (o(e) || (e = Y(this, e)), !(t instanceof je)) {
                if (Gt(t)) return t.forEach(function (t) {
                    return n.add(t, e)
                }), this;
                if (i(t)) return this.addLabel(t, e);
                if (!r(t)) return this;
                t = Ve.delayedCall(0, t)
            }
            return this !== t ? H(this, t, e) : this
        }, a.getChildren = function (t, e, n, i) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === n && (n = !0), void 0 === i && (i = -Bt);
            for (var r = [], o = this._first; o;) o._start >= i && (o instanceof Ve ? e && r.push(o) : (n && r.push(o), t && r.push.apply(r, o.getChildren(!0, e, n)))), o = o._next;
            return r
        }, a.getById = function (t) {
            for (var e = this.getChildren(1, 1, 1), n = e.length; n--;)
                if (e[n].vars.id === t) return e[n]
        }, a.remove = function (t) {
            return i(t) ? this.removeLabel(t) : r(t) ? this.killTweensOf(t) : (P(this, t), t === this._recent && (this._recent = this._last), $(this))
        }, a.totalTime = function (e, n) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = _(Se.time - (0 < this._ts ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, n), this._forcing = 0, this) : this._tTime
        }, a.addLabel = function (t, e) {
            return this.labels[t] = Y(this, e), this
        }, a.removeLabel = function (t) {
            return delete this.labels[t], this
        }, a.addPause = function (t, e, n) {
            var i = Ve.delayedCall(0, e || g, n);
            return i.data = "isPause", this._hasPause = 1, H(this, i, Y(this, t))
        }, a.removePause = function (t) {
            var e = this._first;
            for (t = Y(this, t); e;) e._start === t && "isPause" === e.data && N(e), e = e._next
        }, a.killTweensOf = function (t, e, n) {
            for (var i = this.getTweensOf(t, n), r = i.length; r--;) ze !== i[r] && i[r].kill(t, e);
            return this
        }, a.getTweensOf = function (t, e) {
            for (var n, i = [], r = be(t), s = this._first, a = o(e); s;) s instanceof Ve ? w(s._targets, r) && (a ? (!ze || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && i.push(s) : (n = s.getTweensOf(r, e)).length && i.push.apply(i, n), s = s._next;
            return i
        }, a.tweenTo = function (t, e) {
            e = e || {};
            var n = this,
                i = Y(n, t),
                r = e.startAt,
                o = e.onStart,
                s = e.onStartParams,
                a = e.immediateRender,
                l = Ve.to(n, A({
                    ease: "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: i,
                    overwrite: "auto",
                    duration: e.duration || Math.abs((i - (r && "time" in r ? r.time : n._time)) / n.timeScale()) || qt,
                    onStart: function () {
                        n.pause();
                        var t = e.duration || Math.abs((i - n._time) / n.timeScale());
                        l._dur !== t && q(l, t, 0, 1).render(l._time, !0, !0), o && o.apply(l, s || [])
                    }
                }, e));
            return a ? l.render(0) : l
        }, a.tweenFromTo = function (t, e, n) {
            return this.tweenTo(e, A({
                startAt: {
                    time: Y(this, t)
                }
            }, n))
        }, a.recent = function () {
            return this._recent
        }, a.nextLabel = function (t) {
            return void 0 === t && (t = this._time), nt(this, Y(this, t))
        }, a.previousLabel = function (t) {
            return void 0 === t && (t = this._time), nt(this, Y(this, t), 1)
        }, a.currentLabel = function (t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + qt)
        }, a.shiftChildren = function (t, e, n) {
            void 0 === n && (n = 0);
            for (var i, r = this._first, o = this.labels; r;) r._start >= n && (r._start += t, r._end += t), r = r._next;
            if (e)
                for (i in o) o[i] >= n && (o[i] += t);
            return $(this)
        }, a.invalidate = function () {
            var e = this._first;
            for (this._lock = 0; e;) e.invalidate(), e = e._next;
            return t.prototype.invalidate.call(this)
        }, a.clear = function (t) {
            void 0 === t && (t = !0);
            for (var e, n = this._first; n;) e = n._next, this.remove(n), n = e;
            return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), $(this)
        }, a.totalDuration = function (t) {
            var e, n, i, r = 0,
                o = this,
                s = o._last,
                a = Bt;
            if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -t : t));
            if (o._dirty) {
                for (i = o.parent; s;) e = s._prev, s._dirty && s.totalDuration(), a < (n = s._start) && o._sort && s._ts && !o._lock ? (o._lock = 1, H(o, s, n - s._delay, 1)._lock = 0) : a = n, n < 0 && s._ts && (r -= n, (!i && !o._dp || i && i.smoothChildTiming) && (o._start += n / o._ts, o._time -= n, o._tTime -= n), o.shiftChildren(-n, !1, -1 / 0), a = 0), s._end > r && s._ts && (r = s._end), s = e;
                q(o, o === gt && o._time > r ? o._time : r, 1, 1), o._dirty = 0
            }
            return o._tDur
        }, s.updateRoot = function (t) {
            if (gt._ts && (C(gt, M(t, gt)), wt = Se.frame), Se.frame >= fe) {
                fe += Ht.autoSleep || 120;
                var e = gt._first;
                if ((!e || !e._ts) && Ht.autoSleep && Se._listeners.length < 2) {
                    for (; e && !e._ts;) e = e._next;
                    e || Se.sleep()
                }
            }
        }, s
    }(je);

    function He(t, e, n, o, s, l) {
        var c, u, f, d;
        if (ce[t] && !1 !== (c = new ce[t]).init(s, c.rawVars ? e[t] : function (t, e, n, o, s) {
                if (r(t) && (t = We(t, s, e, n, o)), !a(t) || t.style && t.nodeType || Gt(t) || Kt(t)) return i(t) ? We(t, s, e, n, o) : t;
                var l, c = {};
                for (l in t) c[l] = We(t[l], s, e, n, o);
                return c
            }(e[t], o, s, l, n), n, o, l) && (n._pt = u = new ln(n._pt, s, t, 0, 1, c.render, c, 0, c.priority), n !== xt))
            for (f = n._ptLookup[n._targets.indexOf(s)], d = c._props.length; d--;) f[c._props[d]] = u;
        return c
    }
    A(Fe.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var ze, Be = function (t, e, n, o, s, a, l, c, u) {
            r(o) && (o = o(s || 0, t, a));
            var f, h = t[e],
                p = "get" !== n ? n : r(h) ? u ? t[e.indexOf("set") || !r(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : h,
                g = r(h) ? u ? Ze : Ge : Ke;
            if (i(o) && (~o.indexOf("random(") && (o = et(o)), "=" === o.charAt(1) && (o = parseFloat(p) + parseFloat(o.substr(2)) * ("-" === o.charAt(0) ? -1 : 1) + (V(p) || 0))), p !== o) return isNaN(p * o) ? (h || e in t || d(e, o), function (t, e, n, i, r, o, s) {
                var a, l, c, u, f, d, h, p, g = new ln(this._pt, t, e, 0, 1, nn, null, r),
                    m = 0,
                    v = 0;
                for (g.b = n, g.e = i, n += "", (h = ~(i += "").indexOf("random(")) && (i = et(i)), o && (o(p = [n, i], t, e), n = p[0], i = p[1]), l = n.match(ee) || []; a = ee.exec(i);) u = a[0], f = i.substring(m, a.index), c ? c = (c + 1) % 5 : "rgba(" === f.substr(-5) && (c = 1), u !== l[v++] && (d = parseFloat(l[v - 1]) || 0, g._pt = {
                    _next: g._pt,
                    p: f || 1 === v ? f : ",",
                    s: d,
                    c: "=" === u.charAt(1) ? parseFloat(u.substr(2)) * ("-" === u.charAt(0) ? -1 : 1) : parseFloat(u) - d,
                    m: c && c < 4 ? Math.round : 0
                }, m = ee.lastIndex);
                return g.c = m < i.length ? i.substring(m, i.length) : "", g.fp = s, (ne.test(i) || h) && (g.e = 0), this._pt = g
            }.call(this, t, e, p, o, g, c || Ht.stringFilter, u)) : (f = new ln(this._pt, t, e, +p || 0, o - (p || 0), "boolean" == typeof h ? en : tn, 0, g), u && (f.fp = u), l && f.modifier(l, this, t), this._pt = f)
        },
        qe = function t(e, n) {
            var i, r, o, s, a, c, u, f, d, h, p, g, y, b = e.vars,
                _ = b.ease,
                w = b.startAt,
                x = b.immediateRender,
                C = b.lazy,
                E = b.onUpdate,
                S = b.onUpdateParams,
                k = b.callbackScope,
                D = b.runBackwards,
                I = b.yoyoEase,
                P = b.keyframes,
                $ = b.autoRevert,
                L = e._dur,
                M = e._startAt,
                j = e._targets,
                R = e.parent,
                F = R && "nested" === R.data ? R.parent._targets : j,
                H = "auto" === e._overwrite && !pt,
                z = e.timeline;
            if (!z || P && _ || (_ = "none"), e._ease = Pe(_, zt.ease), e._yEase = I ? Ie(Pe(!0 === I ? _ : I, zt.ease)) : 0, I && e._yoyo && !e._repeat && (I = e._yEase, e._yEase = e._ease, e._ease = I), !z) {
                if (g = (f = j[0] ? v(j[0]).harness : 0) && b[f.prop], i = O(b, se), M && M.render(-1, !0).kill(), w) {
                    if (N(e._startAt = Ve.set(j, A({
                            data: "isStart",
                            overwrite: !1,
                            parent: R,
                            immediateRender: !0,
                            lazy: l(C),
                            startAt: null,
                            delay: 0,
                            onUpdate: E,
                            onUpdateParams: S,
                            callbackScope: k,
                            stagger: 0
                        }, w))), x)
                        if (0 < n) $ || (e._startAt = 0);
                        else if (L && !(n < 0 && M)) return void(n && (e._zTime = n))
                } else if (D && L)
                    if (M) $ || (e._startAt = 0);
                    else if (n && (x = !1), o = A({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: x && l(C),
                        immediateRender: x,
                        stagger: 0,
                        parent: R
                    }, i), g && (o[f.prop] = g), N(e._startAt = Ve.set(j, o)), x) {
                    if (!n) return
                } else t(e._startAt, qt);
                for (e._pt = 0, C = L && l(C) || C && !L, r = 0; r < j.length; r++) {
                    if (u = (a = j[r])._gsap || m(j)[r]._gsap, e._ptLookup[r] = h = {}, le[u.id] && ae.length && T(), p = F === j ? r : F.indexOf(a), f && !1 !== (d = new f).init(a, g || i, e, p, F) && (e._pt = s = new ln(e._pt, a, d.name, 0, 1, d.render, d, 0, d.priority), d._props.forEach(function (t) {
                            h[t] = s
                        }), d.priority && (c = 1)), !f || g)
                        for (o in i) ce[o] && (d = He(o, i, e, p, a, F)) ? d.priority && (c = 1) : h[o] = s = Be.call(e, a, o, "get", i[o], p, F, 0, b.stringFilter);
                    e._op && e._op[r] && e.kill(a, e._op[r]), H && e._pt && (ze = e, gt.killTweensOf(a, h, e.globalTime(0)), y = !e.parent, ze = 0), e._pt && C && (le[u.id] = 1)
                }
                c && an(e), e._onInit && e._onInit(e)
            }
            e._from = !z && !!b.runBackwards, e._onUpdate = E, e._initted = (!e._op || e._pt) && !y
        },
        We = function (t, e, n, o, s) {
            return r(t) ? t.call(e, n, o, s) : i(t) && ~t.indexOf("random(") ? et(t) : t
        },
        Ye = he + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
        Ue = (Ye + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
        Ve = function (t) {
            function r(e, i, r, s) {
                var c;
                "number" == typeof i && (r.duration = i, i = r, r = null);
                var f, d, p, v, y, b, w, x, T = (c = t.call(this, s ? i : I(i), r) || this).vars,
                    C = T.duration,
                    E = T.delay,
                    S = T.immediateRender,
                    k = T.stagger,
                    D = T.overwrite,
                    O = T.keyframes,
                    P = T.defaults,
                    N = T.scrollTrigger,
                    $ = T.yoyoEase,
                    L = c.parent,
                    M = (Gt(e) || Kt(e) ? o(e[0]) : "length" in i) ? [e] : be(e);
                if (c._targets = M.length ? m(M) : h("GSAP target " + e + " not found. https://greensock.com", !Ht.nullTargetWarn) || [], c._ptLookup = [], c._overwrite = D, O || k || u(C) || u(E)) {
                    if (i = c.vars, (f = c.timeline = new Fe({
                            data: "nested",
                            defaults: P || {}
                        })).kill(), f.parent = f._dp = n(c), f._start = 0, O) A(f.vars.defaults, {
                        ease: "none"
                    }), O.forEach(function (t) {
                        return f.to(M, t, ">")
                    });
                    else {
                        if (v = M.length, w = k ? K(k) : g, a(k))
                            for (y in k) ~Ye.indexOf(y) && ((x = x || {})[y] = k[y]);
                        for (d = 0; d < v; d++) {
                            for (y in p = {}, i) Ue.indexOf(y) < 0 && (p[y] = i[y]);
                            p.stagger = 0, $ && (p.yoyoEase = $), x && pe(p, x), b = M[d], p.duration = +We(C, n(c), d, b, M), p.delay = (+We(E, n(c), d, b, M) || 0) - c._delay, !k && 1 === v && p.delay && (c._delay = E = p.delay, c._start += E, p.delay = 0), f.to(b, p, w(d, b, M))
                        }
                        f.duration() ? C = E = 0 : c.timeline = 0
                    }
                    C || c.duration(C = f.duration())
                } else c.timeline = 0;
                return !0 !== D || pt || (ze = n(c), gt.killTweensOf(M), ze = 0), L && F(L, n(c)), (S || !C && !O && c._start === _(L._time) && l(S) && function t(e) {
                    return !e || e._ts && t(e.parent)
                }(n(c)) && "nested" !== L.data) && (c._tTime = -qt, c.render(Math.max(0, -E))), N && z(n(c), N), c
            }
            e(r, t);
            var s = r.prototype;
            return s.render = function (t, e, n) {
                var i, r, o, s, a, l, c, u, f, d = this._time,
                    h = this._tDur,
                    p = this._dur,
                    g = h - qt < t && 0 <= t ? h : t < qt ? 0 : t;
                if (p) {
                    if (g !== this._tTime || !t || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
                        if (i = g, u = this.timeline, this._repeat) {
                            if (s = p + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * s + t, e, n);
                            if (i = _(g % s), g === h ? (o = this._repeat, i = p) : ((o = ~~(g / s)) && o === g / s && (i = p, o--), p < i && (i = p)), (l = this._yoyo && 1 & o) && (f = this._yEase, i = p - i), a = ge(this._tTime, s), i === d && !n && this._initted) return this;
                            o !== a && (u && this._yEase && ct(u, l), !this.vars.repeatRefresh || l || this._lock || (this._lock = n = 1, this.render(_(s * o), !0).invalidate()._lock = 0))
                        }
                        if (!this._initted) {
                            if (B(this, t < 0 ? t : i, n, e)) return this._tTime = 0, this;
                            if (p !== this._dur) return this.render(t, e, n)
                        }
                        for (this._tTime = g, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = c = (f || this._ease)(i / p), this._from && (this.ratio = c = 1 - c), !i || d || e || we(this, "onStart"), r = this._pt; r;) r.r(c, r.d), r = r._next;
                        u && u.render(t < 0 ? t : !i && l ? -qt : u._dur * c, e, n) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, n), we(this, "onUpdate")), this._repeat && o !== a && this.vars.onRepeat && !e && this.parent && we(this, "onRepeat"), g !== this._tDur && g || this._tTime !== g || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), !t && p || !(g === this._tDur && 0 < this._ts || !g && this._ts < 0) || N(this, 1), e || t < 0 && !d || !g && !d || (we(this, g === h ? "onComplete" : "onReverseComplete", !0), !this._prom || g < h && 0 < this.timeScale() || this._prom()))
                    }
                } else ! function (t, e, n, i) {
                    var r, o, s, a = t.ratio,
                        l = e < 0 || !e && (!t._start && function t(e) {
                            var n = e.parent;
                            return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n))
                        }(t) || (t._ts < 0 || t._dp._ts < 0) && "isFromStart" !== t.data && "isStart" !== t.data) ? 0 : 1,
                        c = t._rDelay,
                        u = 0;
                    if (c && t._repeat && (u = ve(0, t._tDur, e), o = ge(u, c), s = ge(t._tTime, c), t._yoyo && 1 & o && (l = 1 - l), o !== s && (a = 1 - l, t.vars.repeatRefresh && t._initted && t.invalidate())), l !== a || i || t._zTime === qt || !e && t._zTime) {
                        if (!t._initted && B(t, e, i, n)) return;
                        for (s = t._zTime, t._zTime = e || (n ? qt : 0), n = n || e && !s, t.ratio = l, t._from && (l = 1 - l), t._time = 0, t._tTime = u, n || we(t, "onStart"), r = t._pt; r;) r.r(l, r.d), r = r._next;
                        t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !n && we(t, "onUpdate"), u && t._repeat && !n && t.parent && we(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === l && (l && N(t, 1), n || (we(t, l ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                    } else t._zTime || (t._zTime = e)
                }(this, t, e, n);
                return this
            }, s.targets = function () {
                return this._targets
            }, s.invalidate = function () {
                return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this)
            }, s.kill = function (t, e) {
                if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? it(this) : this;
                if (this.timeline) {
                    var n = this.timeline.totalDuration();
                    return this.timeline.killTweensOf(t, e, ze && !0 !== ze.vars.overwrite)._first || it(this), this.parent && n !== this.timeline.totalDuration() && q(this, this._dur * this.timeline._tDur / n, 0, 1), this
                }
                var r, o, s, a, l, c, u, f = this._targets,
                    d = t ? be(t) : f,
                    h = this._ptLookup,
                    p = this._pt;
                if ((!e || "all" === e) && function (t, e) {
                        for (var n = t.length, i = n === e.length; i && n-- && t[n] === e[n];);
                        return n < 0
                    }(f, d)) return "all" === e && (this._pt = 0), it(this);
                for (r = this._op = this._op || [], "all" !== e && (i(e) && (l = {}, b(e, function (t) {
                        return l[t] = 1
                    }), e = l), e = function (t, e) {
                        var n, i, r, o, s = t[0] ? v(t[0]).harness : 0,
                            a = s && s.aliases;
                        if (!a) return e;
                        for (i in n = pe({}, e), a)
                            if (i in n)
                                for (r = (o = a[i].split(",")).length; r--;) n[o[r]] = n[i];
                        return n
                    }(f, e)), u = f.length; u--;)
                    if (~d.indexOf(f[u]))
                        for (l in o = h[u], "all" === e ? (r[u] = e, a = o, s = {}) : (s = r[u] = r[u] || {}, a = e), a)(c = o && o[l]) && ("kill" in c.d && !0 !== c.d.kill(l) || P(this, c, "_pt"), delete o[l]), "all" !== s && (s[l] = 1);
                return this._initted && !this._pt && p && it(this), this
            }, r.to = function (t, e, n) {
                return new r(t, e, n)
            }, r.from = function (t, e) {
                return new r(t, x(arguments, 1))
            }, r.delayedCall = function (t, e, n, i) {
                return new r(e, 0, {
                    immediateRender: !1,
                    lazy: !1,
                    overwrite: !1,
                    delay: t,
                    onComplete: e,
                    onReverseComplete: e,
                    onCompleteParams: n,
                    onReverseCompleteParams: n,
                    callbackScope: i
                })
            }, r.fromTo = function (t, e, n) {
                return new r(t, x(arguments, 2))
            }, r.set = function (t, e) {
                return e.duration = 0, e.repeatDelay || (e.repeat = 0), new r(t, e)
            }, r.killTweensOf = function (t, e, n) {
                return gt.killTweensOf(t, e, n)
            }, r
        }(je);

    function Xe(t, e, n) {
        return t.setAttribute(e, n)
    }

    function Qe(t, e, n, i) {
        i.mSet(t, e, i.m.call(i.tween, n, i.mt), i)
    }
    A(Ve.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), b("staggerTo,staggerFrom,staggerFromTo", function (t) {
        Ve[t] = function () {
            var e = new Fe,
                n = ye.call(arguments, 0);
            return n.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, n)
        }
    });
    var Ke = function (t, e, n) {
            return t[e] = n
        },
        Ge = function (t, e, n) {
            return t[e](n)
        },
        Ze = function (t, e, n, i) {
            return t[e](i.fp, n)
        },
        Je = function (t, e) {
            return r(t[e]) ? Ge : s(t[e]) && t.setAttribute ? Xe : Ke
        },
        tn = function (t, e) {
            return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e)
        },
        en = function (t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        nn = function (t, e) {
            var n = e._pt,
                i = "";
            if (!t && e.b) i = e.b;
            else if (1 === t && e.e) i = e.e;
            else {
                for (; n;) i = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round(1e4 * (n.s + n.c * t)) / 1e4) + i, n = n._next;
                i += e.c
            }
            e.set(e.t, e.p, i, e)
        },
        rn = function (t, e) {
            for (var n = e._pt; n;) n.r(t, n.d), n = n._next
        },
        on = function (t, e, n, i) {
            for (var r, o = this._pt; o;) r = o._next, o.p === i && o.modifier(t, e, n), o = r
        },
        sn = function (t) {
            for (var e, n, i = this._pt; i;) n = i._next, i.p === t && !i.op || i.op === t ? P(this, i, "_pt") : i.dep || (e = 1), i = n;
            return !e
        },
        an = function (t) {
            for (var e, n, i, r, o = t._pt; o;) {
                for (e = o._next, n = i; n && n.pr > o.pr;) n = n._next;
                (o._prev = n ? n._prev : r) ? o._prev._next = o: i = o, (o._next = n) ? n._prev = o : r = o, o = e
            }
            t._pt = i
        },
        ln = (cn.prototype.modifier = function (t, e, n) {
            this.mSet = this.mSet || this.set, this.set = Qe, this.m = t, this.mt = n, this.tween = e
        }, cn);

    function cn(t, e, n, i, r, o, s, a, l) {
        this.t = e, this.s = i, this.c = r, this.p = n, this.r = o || tn, this.d = s || this, this.set = a || Ke, this.pr = l || 0, (this._next = t) && (t._prev = this)
    }
    b(he + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (t) {
        return se[t] = 1
    }), oe.TweenMax = oe.TweenLite = Ve, oe.TimelineLite = oe.TimelineMax = Fe, gt = new Fe({
        sortChildren: !1,
        defaults: zt,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), Ht.stringFilter = lt;
    var un = {
        registerPlugin: function () {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            e.forEach(function (t) {
                return function (t) {
                    var e = (t = !t.name && t.default || t).name,
                        n = r(t),
                        i = e && !n && t.init ? function () {
                            this._props = []
                        } : t,
                        o = {
                            init: g,
                            render: rn,
                            add: Be,
                            kill: sn,
                            modifier: on,
                            rawVars: 0
                        },
                        s = {
                            targetTest: 0,
                            get: 0,
                            getSetter: Je,
                            aliases: {},
                            register: 0
                        };
                    if (Ae(), t !== i) {
                        if (ce[e]) return;
                        A(i, A(O(t, o), s)), pe(i.prototype, pe(o, O(t, s))), ce[i.prop = e] = i, t.targetTest && (de.push(i), se[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                    }
                    p(e, i), t.register && t.register(hn, i, ln)
                }(t)
            })
        },
        timeline: function (t) {
            return new Fe(t)
        },
        getTweensOf: function (t, e) {
            return gt.getTweensOf(t, e)
        },
        getProperty: function (t, e, n, r) {
            i(t) && (t = be(t)[0]);
            var o = v(t || {}).get,
                s = n ? S : E;
            return "native" === n && (n = ""), t ? e ? s((ce[e] && ce[e].get || o)(t, e, n, r)) : function (e, n, i) {
                return s((ce[e] && ce[e].get || o)(t, e, n, i))
            } : t
        },
        quickSetter: function (t, e, n) {
            if (1 < (t = be(t)).length) {
                var i = t.map(function (t) {
                        return hn.quickSetter(t, e, n)
                    }),
                    r = i.length;
                return function (t) {
                    for (var e = r; e--;) i[e](t)
                }
            }
            t = t[0] || {};
            var o = ce[e],
                s = v(t),
                a = s.harness && (s.harness.aliases || {})[e] || e,
                l = o ? function (e) {
                    var i = new o;
                    xt._pt = 0, i.init(t, n ? e + n : e, xt, 0, [t]), i.render(1, i), xt._pt && rn(1, xt)
                } : s.set(t, a);
            return o ? l : function (e) {
                return l(t, a, n ? e + n : e, s, 1)
            }
        },
        isTweening: function (t) {
            return 0 < gt.getTweensOf(t, !0).length
        },
        defaults: function (t) {
            return t && t.ease && (t.ease = Pe(t.ease, zt.ease)), D(zt, t || {})
        },
        config: function (t) {
            return D(Ht, t || {})
        },
        registerEffect: function (t) {
            var e = t.name,
                n = t.effect,
                i = t.plugins,
                r = t.defaults,
                o = t.extendTimeline;
            (i || "").split(",").forEach(function (t) {
                return t && !ce[t] && !oe[t] && h(e + " effect requires " + t + " plugin.")
            }), ue[e] = function (t, e, i) {
                return n(be(t), A(e || {}, r), i)
            }, o && (Fe.prototype[e] = function (t, n, i) {
                return this.add(ue[e](t, a(n) ? n : (i = n) && {}, this), i)
            })
        },
        registerEase: function (t, e) {
            ke[t] = Pe(e)
        },
        parseEase: function (t, e) {
            return arguments.length ? Pe(t, e) : ke
        },
        getById: function (t) {
            return gt.getById(t)
        },
        exportRoot: function (t, e) {
            void 0 === t && (t = {});
            var n, i, r = new Fe(t);
            for (r.smoothChildTiming = l(t.smoothChildTiming), gt.remove(r), r._dp = 0, r._time = r._tTime = gt._time, n = gt._first; n;) i = n._next, !e && !n._dur && n instanceof Ve && n.vars.onComplete === n._targets[0] || H(r, n, n._start - n._delay), n = i;
            return H(gt, r, 0), r
        },
        utils: {
            wrap: function t(e, n, i) {
                var r = n - e;
                return Gt(e) ? tt(e, t(0, e.length), n) : U(i, function (t) {
                    return (r + (t - e) % r) % r + e
                })
            },
            wrapYoyo: function t(e, n, i) {
                var r = n - e,
                    o = 2 * r;
                return Gt(e) ? tt(e, t(0, e.length - 1), n) : U(i, function (t) {
                    return e + (r < (t = (o + (t - e) % o) % o || 0) ? o - t : t)
                })
            },
            distribute: K,
            random: J,
            snap: Z,
            normalize: function (t, e, n) {
                return _e(t, e, 0, 1, n)
            },
            getUnit: V,
            clamp: function (t, e, n) {
                return U(n, function (n) {
                    return ve(t, e, n)
                })
            },
            splitColor: ot,
            toArray: be,
            mapRange: _e,
            pipe: function () {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return function (t) {
                    return e.reduce(function (t, e) {
                        return e(t)
                    }, t)
                }
            },
            unitize: function (t, e) {
                return function (n) {
                    return t(parseFloat(n)) + (e || V(n))
                }
            },
            interpolate: function t(e, n, r, o) {
                var s = isNaN(e + n) ? 0 : function (t) {
                    return (1 - t) * e + t * n
                };
                if (!s) {
                    var a, l, c, u, f, d = i(e),
                        h = {};
                    if (!0 === r && (o = 1) && (r = null), d) e = {
                        p: e
                    }, n = {
                        p: n
                    };
                    else if (Gt(e) && !Gt(n)) {
                        for (c = [], u = e.length, f = u - 2, l = 1; l < u; l++) c.push(t(e[l - 1], e[l]));
                        u--, s = function (t) {
                            t *= u;
                            var e = Math.min(f, ~~t);
                            return c[e](t - e)
                        }, r = n
                    } else o || (e = pe(Gt(e) ? [] : {}, e));
                    if (!c) {
                        for (a in n) Be.call(h, e, a, "get", n[a]);
                        s = function (t) {
                            return rn(t, h) || (d ? e.p : e)
                        }
                    }
                }
                return U(r, s)
            },
            shuffle: Q
        },
        install: f,
        effects: ue,
        ticker: Se,
        updateRoot: Fe.updateRoot,
        plugins: ce,
        globalTimeline: gt,
        core: {
            PropTween: ln,
            globals: p,
            Tween: Ve,
            Timeline: Fe,
            Animation: je,
            getCache: v,
            _removeLinkedListItem: P,
            suppressOverwrites: function (t) {
                return pt = t
            }
        }
    };

    function fn(t, e) {
        for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e;) n = n._next;
        return n
    }

    function dn(t, e) {
        return {
            name: t,
            rawVars: 1,
            init: function (t, n, r) {
                r._onInit = function (t) {
                    var r, o;
                    if (i(n) && (r = {}, b(n, function (t) {
                            return r[t] = 1
                        }), n = r), e) {
                        for (o in r = {}, n) r[o] = e(n[o]);
                        n = r
                    }! function (t, e) {
                        var n, i, r, o = t._targets;
                        for (n in e)
                            for (i = o.length; i--;)(r = (r = t._ptLookup[i][n]) && r.d) && (r._pt && (r = fn(r, n)), r && r.modifier && r.modifier(e[n], t, o[i], n))
                    }(t, n)
                }
            }
        }
    }
    b("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
        return un[t] = Ve[t]
    }), Se.add(Fe.updateRoot), xt = un.to({}, {
        duration: 0
    });
    var hn = un.registerPlugin({
        name: "attr",
        init: function (t, e, n, i, r) {
            var o, s;
            for (o in e)(s = this.add(t, "setAttribute", (t.getAttribute(o) || 0) + "", e[o], i, r, 0, 0, o)) && (s.op = o), this._props.push(o)
        }
    }, {
        name: "endArray",
        init: function (t, e) {
            for (var n = e.length; n--;) this.add(t, n, t[n] || 0, e[n])
        }
    }, dn("roundProps", G), dn("modifiers"), dn("snap", Z)) || un;

    function pn(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function gn(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function mn(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    }

    function vn(t, e) {
        var n = e.s + e.c * t;
        e.set(e.t, e.p, ~~(n + (n < 0 ? -.5 : .5)) + e.u, e)
    }

    function yn(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }

    function bn(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    }

    function _n(t, e, n) {
        return t.style[e] = n
    }

    function wn(t, e, n) {
        return t.style.setProperty(e, n)
    }

    function xn(t, e, n) {
        return t._gsap[e] = n
    }

    function Tn(t, e, n) {
        return t._gsap.scaleX = t._gsap.scaleY = n
    }

    function Cn(t, e, n, i, r) {
        var o = t._gsap;
        o.scaleX = o.scaleY = n, o.renderTransform(r, o)
    }

    function En(t, e, n, i, r) {
        var o = t._gsap;
        o[e] = n, o.renderTransform(r, o)
    }

    function Sn(t, e) {
        var n = Xn.createElementNS ? Xn.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Xn.createElement(t);
        return n.style ? n : Xn.createElement(t)
    }

    function An(t, e, n) {
        var i = getComputedStyle(t);
        return i[e] || i.getPropertyValue(e.replace(Ti, "-$1").toLowerCase()) || i.getPropertyValue(e) || !n && An(t, Oi(e) || e, 1) || ""
    }

    function kn() {
        "undefined" != typeof window && window.document && (Vn = window, Xn = Vn.document, Qn = Xn.documentElement, Gn = Sn("div") || {
            style: {}
        }, Zn = Sn("div"), Ai = Oi(Ai), ki = Ai + "Origin", Gn.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", ti = !!Oi("perspective"), Kn = 1)
    }

    function Dn(t) {
        var e, n = Sn("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            i = this.parentNode,
            r = this.nextSibling,
            o = this.style.cssText;
        if (Qn.appendChild(n), n.appendChild(this), this.style.display = "block", t) try {
            e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = Dn
        } catch (t) {} else this._gsapBBox && (e = this._gsapBBox());
        return i && (r ? i.insertBefore(this, r) : i.appendChild(this)), Qn.removeChild(n), this.style.cssText = o, e
    }

    function On(t, e) {
        for (var n = e.length; n--;)
            if (t.hasAttribute(e[n])) return t.getAttribute(e[n])
    }

    function In(t) {
        var e;
        try {
            e = t.getBBox()
        } catch (n) {
            e = Dn.call(t, !0)
        }
        return e && (e.width || e.height) || t.getBBox === Dn || (e = Dn.call(t, !0)), !e || e.width || e.x || e.y ? e : {
            x: +On(t, ["x", "cx", "x1"]) || 0,
            y: +On(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }

    function Pn(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !In(t))
    }

    function Nn(t, e) {
        if (e) {
            var n = t.style;
            e in bi && e !== ki && (e = Ai), n.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), n.removeProperty(e.replace(Ti, "-$1").toLowerCase())) : n.removeAttribute(e)
        }
    }

    function $n(t, e, n, i, r, o) {
        var s = new ln(t._pt, e, n, 0, 1, o ? bn : yn);
        return (t._pt = s).b = i, s.e = r, t._props.push(n), s
    }

    function Ln(t, e, n, i) {
        var r, o, s, a, l = parseFloat(n) || 0,
            c = (n + "").trim().substr((l + "").length) || "px",
            u = Gn.style,
            f = Ci.test(e),
            d = "svg" === t.tagName.toLowerCase(),
            h = (d ? "client" : "offset") + (f ? "Width" : "Height"),
            p = "px" === i,
            g = "%" === i;
        return i === c || !l || Ii[i] || Ii[c] ? l : ("px" === c || p || (l = Ln(t, e, n, "px")), a = t.getCTM && Pn(t), !g && "%" !== c || !bi[e] && !~e.indexOf("adius") ? (u[f ? "width" : "height"] = 100 + (p ? c : i), o = ~e.indexOf("adius") || "em" === i && t.appendChild && !d ? t : t.parentNode, a && (o = (t.ownerSVGElement || {}).parentNode), o && o !== Xn && o.appendChild || (o = Xn.body), (s = o._gsap) && g && s.width && f && s.time === Se.time ? _(l / s.width * 100) : (!g && "%" !== c || (u.position = An(t, "position")), o === t && (u.position = "static"), o.appendChild(Gn), r = Gn[h], o.removeChild(Gn), u.position = "absolute", f && g && ((s = v(o)).time = Se.time, s.width = o[h]), _(p ? r * l / 100 : r && l ? 100 / r * l : 0))) : (r = a ? t.getBBox()[f ? "width" : "height"] : t[h], _(g ? l / r * 100 : l / 100 * r)))
    }

    function Mn(t, e, n, i) {
        var r;
        return Kn || kn(), e in Si && "transform" !== e && ~(e = Si[e]).indexOf(",") && (e = e.split(",")[0]), bi[e] && "transform" !== e ? (r = Mi(t, i), r = "transformOrigin" !== e ? r[e] : ji(An(t, ki)) + " " + r.zOrigin + "px") : (r = t.style[e]) && "auto" !== r && !i && !~(r + "").indexOf("calc(") || (r = Ni[e] && Ni[e](t, e, n) || An(t, e) || y(t, e) || ("opacity" === e ? 1 : 0)), n && !~(r + "").trim().indexOf(" ") ? Ln(t, e, r, n) + n : r
    }

    function jn(t, e, n, i) {
        if (!n || "none" === n) {
            var r = Oi(e, t, 1),
                o = r && An(t, r, 1);
            o && o !== n ? (e = r, n = o) : "borderColor" === e && (n = An(t, "borderTopColor"))
        }
        var s, a, l, c, u, f, d, h, p, g, m, v, y = new ln(this._pt, t.style, e, 0, 1, nn),
            b = 0,
            _ = 0;
        if (y.b = n, y.e = i, n += "", "auto" == (i += "") && (t.style[e] = i, i = An(t, e) || i, t.style[e] = n), lt(s = [n, i]), i = s[1], l = (n = s[0]).match(te) || [], (i.match(te) || []).length) {
            for (; a = te.exec(i);) d = a[0], p = i.substring(b, a.index), u ? u = (u + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (u = 1), d !== (f = l[_++] || "") && (c = parseFloat(f) || 0, m = f.substr((c + "").length), (v = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) && (d = d.substr(2)), h = parseFloat(d), g = d.substr((h + "").length), b = te.lastIndex - g.length, g || (g = g || Ht.units[e] || m, b === i.length && (i += g, y.e += g)), m !== g && (c = Ln(t, e, f, g) || 0), y._pt = {
                _next: y._pt,
                p: p || 1 === _ ? p : ",",
                s: c,
                c: v ? v * h : h - c,
                m: u && u < 4 || "zIndex" === e ? Math.round : 0
            });
            y.c = b < i.length ? i.substring(b, i.length) : ""
        } else y.r = "display" === e && "none" === i ? bn : yn;
        return ne.test(i) && (y.e = 0), this._pt = y
    }

    function Rn(t) {
        var e = t.split(" "),
            n = e[0],
            i = e[1] || "50%";
        return "top" !== n && "bottom" !== n && "left" !== i && "right" !== i || (t = n, n = i, i = t), e[0] = Pi[n] || n, e[1] = Pi[i] || i, e.join(" ")
    }

    function Fn(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var n, i, r, o = e.t,
                s = o.style,
                a = e.u,
                l = o._gsap;
            if ("all" === a || !0 === a) s.cssText = "", i = 1;
            else
                for (r = (a = a.split(",")).length; - 1 < --r;) n = a[r], bi[n] && (i = 1, n = "transformOrigin" === n ? ki : Ai), Nn(o, n);
            i && (Nn(o, Ai), l && (l.svg && o.removeAttribute("transform"), Mi(o, 1), l.uncache = 1))
        }
    }

    function Hn(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    }

    function zn(t) {
        var e = An(t, Ai);
        return Hn(e) ? $i : e.substr(7).match(Jt).map(_)
    }

    function Bn(t, e) {
        var n, i, r, o, s = t._gsap || v(t),
            a = t.style,
            l = zn(t);
        return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(r = t.transform.baseVal.consolidate().matrix).a, r.b, r.c, r.d, r.e, r.f]).join(",") ? $i : l : (l !== $i || t.offsetParent || t === Qn || s.svg || (r = a.display, a.display = "block", (n = t.parentNode) && t.offsetParent || (o = 1, i = t.nextSibling, Qn.appendChild(t)), l = zn(t), r ? a.display = r : Nn(t, "display"), o && (i ? n.insertBefore(t, i) : n ? n.appendChild(t) : Qn.removeChild(t))), e && 6 < l.length ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
    }

    function qn(t, e, n, i, r, o) {
        var s, a, l, c = t._gsap,
            u = r || Bn(t, !0),
            f = c.xOrigin || 0,
            d = c.yOrigin || 0,
            h = c.xOffset || 0,
            p = c.yOffset || 0,
            g = u[0],
            m = u[1],
            v = u[2],
            y = u[3],
            b = u[4],
            _ = u[5],
            w = e.split(" "),
            x = parseFloat(w[0]) || 0,
            T = parseFloat(w[1]) || 0;
        n ? u !== $i && (a = g * y - m * v) && (l = x * (-m / a) + T * (g / a) - (g * _ - m * b) / a, x = x * (y / a) + T * (-v / a) + (v * _ - y * b) / a, T = l) : (x = (s = In(t)).x + (~w[0].indexOf("%") ? x / 100 * s.width : x), T = s.y + (~(w[1] || w[0]).indexOf("%") ? T / 100 * s.height : T)), i || !1 !== i && c.smooth ? (b = x - f, _ = T - d, c.xOffset = h + (b * g + _ * v) - b, c.yOffset = p + (b * m + _ * y) - _) : c.xOffset = c.yOffset = 0, c.xOrigin = x, c.yOrigin = T, c.smooth = !!i, c.origin = e, c.originIsAbsolute = !!n, t.style[ki] = "0px 0px", o && ($n(o, c, "xOrigin", f, x), $n(o, c, "yOrigin", d, T), $n(o, c, "xOffset", h, c.xOffset), $n(o, c, "yOffset", p, c.yOffset)), t.setAttribute("data-svg-origin", x + " " + T)
    }

    function Wn(t, e, n) {
        var i = V(e);
        return _(parseFloat(e) + parseFloat(Ln(t, "x", n + "px", i))) + i
    }

    function Yn(t, e, n, r, o, s) {
        var a, l, c = 360,
            u = i(o),
            f = parseFloat(o) * (u && ~o.indexOf("rad") ? _i : 1),
            d = s ? f * s : f - r,
            h = r + d + "deg";
        return u && ("short" === (a = o.split("_")[1]) && (d %= c) != d % 180 && (d += d < 0 ? c : -c), "cw" === a && d < 0 ? d = (d + 36e9) % c - ~~(d / c) * c : "ccw" === a && 0 < d && (d = (d - 36e9) % c - ~~(d / c) * c)), t._pt = l = new ln(t._pt, e, n, r, d, gn), l.e = h, l.u = "deg", t._props.push(n), l
    }

    function Un(t, e, n) {
        var i, r, o, s, a, l, c, u = Zn.style,
            f = n._gsap;
        for (r in u.cssText = getComputedStyle(n).cssText + ";position:absolute;display:block;", u[Ai] = e, Xn.body.appendChild(Zn), i = Mi(Zn, 1), bi)(o = f[r]) !== (s = i[r]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 && (a = V(o) !== (c = V(s)) ? Ln(n, r, o, c) : parseFloat(o), l = parseFloat(s), t._pt = new ln(t._pt, f, r, a, l - a, pn), t._pt.u = c || 0, t._props.push(r));
        Xn.body.removeChild(Zn)
    }
    Ve.version = Fe.version = hn.version = "3.6.0", _t = 1, c() && Ae();
    var Vn, Xn, Qn, Kn, Gn, Zn, Jn, ti, ei = ke.Power0,
        ni = ke.Power1,
        ii = ke.Power2,
        ri = ke.Power3,
        oi = ke.Power4,
        si = ke.Linear,
        ai = ke.Quad,
        li = ke.Cubic,
        ci = ke.Quart,
        ui = ke.Quint,
        fi = ke.Strong,
        di = ke.Elastic,
        hi = ke.Back,
        pi = ke.SteppedEase,
        gi = ke.Bounce,
        mi = ke.Sine,
        vi = ke.Expo,
        yi = ke.Circ,
        bi = {},
        _i = 180 / Math.PI,
        wi = Math.PI / 180,
        xi = Math.atan2,
        Ti = /([A-Z])/g,
        Ci = /(?:left|right|width|margin|padding|x)/i,
        Ei = /[\s,\(]\S/,
        Si = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        Ai = "transform",
        ki = Ai + "Origin",
        Di = "O,Moz,ms,Ms,Webkit".split(","),
        Oi = function (t, e, n) {
            var i = (e || Gn).style,
                r = 5;
            if (t in i && !n) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); r-- && !(Di[r] + t in i););
            return r < 0 ? null : (3 === r ? "ms" : 0 <= r ? Di[r] : "") + t
        },
        Ii = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        Pi = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        Ni = {
            clearProps: function (t, e, n, i, r) {
                if ("isFromStart" !== r.data) {
                    var o = t._pt = new ln(t._pt, e, n, 0, 0, Fn);
                    return o.u = i, o.pr = -10, o.tween = r, t._props.push(n), 1
                }
            }
        },
        $i = [1, 0, 0, 1, 0, 0],
        Li = {},
        Mi = function (t, e) {
            var n = t._gsap || new Me(t);
            if ("x" in n && !e && !n.uncache) return n;
            var i, r, o, s, a, l, c, u, f, d, h, p, g, m, v, y, b, w, x, T, C, E, S, A, k, D, O, I, P, N, $, L, M = t.style,
                j = n.scaleX < 0,
                R = "deg",
                F = An(t, ki) || "0";
            return i = r = o = l = c = u = f = d = h = 0, s = a = 1, n.svg = !(!t.getCTM || !Pn(t)), m = Bn(t, n.svg), n.svg && (A = !n.uncache && t.getAttribute("data-svg-origin"), qn(t, A || F, !!A || n.originIsAbsolute, !1 !== n.smooth, m)), p = n.xOrigin || 0, g = n.yOrigin || 0, m !== $i && (w = m[0], x = m[1], T = m[2], C = m[3], i = E = m[4], r = S = m[5], 6 === m.length ? (s = Math.sqrt(w * w + x * x), a = Math.sqrt(C * C + T * T), l = w || x ? xi(x, w) * _i : 0, (f = T || C ? xi(T, C) * _i + l : 0) && (a *= Math.cos(f * wi)), n.svg && (i -= p - (p * w + g * T), r -= g - (p * x + g * C))) : (L = m[6], N = m[7], O = m[8], I = m[9], P = m[10], $ = m[11], i = m[12], r = m[13], o = m[14], c = (v = xi(L, P)) * _i, v && (A = E * (y = Math.cos(-v)) + O * (b = Math.sin(-v)), k = S * y + I * b, D = L * y + P * b, O = E * -b + O * y, I = S * -b + I * y, P = L * -b + P * y, $ = N * -b + $ * y, E = A, S = k, L = D), u = (v = xi(-T, P)) * _i, v && (y = Math.cos(-v), $ = C * (b = Math.sin(-v)) + $ * y, w = A = w * y - O * b, x = k = x * y - I * b, T = D = T * y - P * b), l = (v = xi(x, w)) * _i, v && (A = w * (y = Math.cos(v)) + x * (b = Math.sin(v)), k = E * y + S * b, x = x * y - w * b, S = S * y - E * b, w = A, E = k), c && 359.9 < Math.abs(c) + Math.abs(l) && (c = l = 0, u = 180 - u), s = _(Math.sqrt(w * w + x * x + T * T)), a = _(Math.sqrt(S * S + L * L)), v = xi(E, S), f = 2e-4 < Math.abs(v) ? v * _i : 0, h = $ ? 1 / ($ < 0 ? -$ : $) : 0), n.svg && (A = t.getAttribute("transform"), n.forceCSS = t.setAttribute("transform", "") || !Hn(An(t, Ai)), A && t.setAttribute("transform", A))), 90 < Math.abs(f) && Math.abs(f) < 270 && (j ? (s *= -1, f += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (a *= -1, f += f <= 0 ? 180 : -180)), n.x = i - ((n.xPercent = i && (n.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * n.xPercent / 100 : 0) + "px", n.y = r - ((n.yPercent = r && (n.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0))) ? t.offsetHeight * n.yPercent / 100 : 0) + "px", n.z = o + "px", n.scaleX = _(s), n.scaleY = _(a), n.rotation = _(l) + R, n.rotationX = _(c) + R, n.rotationY = _(u) + R, n.skewX = f + R, n.skewY = d + R, n.transformPerspective = h + "px", (n.zOrigin = parseFloat(F.split(" ")[2]) || 0) && (M[ki] = ji(F)), n.xOffset = n.yOffset = 0, n.force3D = Ht.force3D, n.renderTransform = n.svg ? qi : ti ? Bi : Ri, n.uncache = 0, n
        },
        ji = function (t) {
            return (t = t.split(" "))[0] + " " + t[1]
        },
        Ri = function (t, e) {
            e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Bi(t, e)
        },
        Fi = "0deg",
        Hi = "0px",
        zi = ") ",
        Bi = function (t, e) {
            var n = e || this,
                i = n.xPercent,
                r = n.yPercent,
                o = n.x,
                s = n.y,
                a = n.z,
                l = n.rotation,
                c = n.rotationY,
                u = n.rotationX,
                f = n.skewX,
                d = n.skewY,
                h = n.scaleX,
                p = n.scaleY,
                g = n.transformPerspective,
                m = n.force3D,
                v = n.target,
                y = n.zOrigin,
                b = "",
                _ = "auto" === m && t && 1 !== t || !0 === m;
            if (y && (u !== Fi || c !== Fi)) {
                var w, x = parseFloat(c) * wi,
                    T = Math.sin(x),
                    C = Math.cos(x);
                x = parseFloat(u) * wi, o = Wn(v, o, T * (w = Math.cos(x)) * -y), s = Wn(v, s, -Math.sin(x) * -y), a = Wn(v, a, C * w * -y + y)
            }
            g !== Hi && (b += "perspective(" + g + zi), (i || r) && (b += "translate(" + i + "%, " + r + "%) "), !_ && o === Hi && s === Hi && a === Hi || (b += a !== Hi || _ ? "translate3d(" + o + ", " + s + ", " + a + ") " : "translate(" + o + ", " + s + zi), l !== Fi && (b += "rotate(" + l + zi), c !== Fi && (b += "rotateY(" + c + zi), u !== Fi && (b += "rotateX(" + u + zi), f === Fi && d === Fi || (b += "skew(" + f + ", " + d + zi), 1 === h && 1 === p || (b += "scale(" + h + ", " + p + zi), v.style[Ai] = b || "translate(0, 0)"
        },
        qi = function (t, e) {
            var n, i, r, o, s, a = e || this,
                l = a.xPercent,
                c = a.yPercent,
                u = a.x,
                f = a.y,
                d = a.rotation,
                h = a.skewX,
                p = a.skewY,
                g = a.scaleX,
                m = a.scaleY,
                v = a.target,
                y = a.xOrigin,
                b = a.yOrigin,
                w = a.xOffset,
                x = a.yOffset,
                T = a.forceCSS,
                C = parseFloat(u),
                E = parseFloat(f);
            d = parseFloat(d), h = parseFloat(h), (p = parseFloat(p)) && (h += p = parseFloat(p), d += p), d || h ? (d *= wi, h *= wi, n = Math.cos(d) * g, i = Math.sin(d) * g, r = Math.sin(d - h) * -m, o = Math.cos(d - h) * m, h && (p *= wi, s = Math.tan(h - p), r *= s = Math.sqrt(1 + s * s), o *= s, p && (s = Math.tan(p), n *= s = Math.sqrt(1 + s * s), i *= s)), n = _(n), i = _(i), r = _(r), o = _(o)) : (n = g, o = m, i = r = 0), (C && !~(u + "").indexOf("px") || E && !~(f + "").indexOf("px")) && (C = Ln(v, "x", u, "px"), E = Ln(v, "y", f, "px")), (y || b || w || x) && (C = _(C + y - (y * n + b * r) + w), E = _(E + b - (y * i + b * o) + x)), (l || c) && (C = _(C + l / 100 * (s = v.getBBox()).width), E = _(E + c / 100 * s.height)), s = "matrix(" + n + "," + i + "," + r + "," + o + "," + C + "," + E + ")", v.setAttribute("transform", s), T && (v.style[Ai] = s)
        };
    b("padding,margin,Width,Radius", function (t, e) {
        var n = "Right",
            i = "Bottom",
            r = "Left",
            o = (e < 3 ? ["Top", n, i, r] : ["Top" + r, "Top" + n, i + n, i + r]).map(function (n) {
                return e < 2 ? t + n : "border" + n + t
            });
        Ni[1 < e ? "border" + t : t] = function (t, e, n, i, r) {
            var s, a;
            if (arguments.length < 4) return s = o.map(function (e) {
                return Mn(t, e, n)
            }), 5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a;
            s = (i + "").split(" "), a = {}, o.forEach(function (t, e) {
                return a[t] = s[e] = s[e] || s[(e - 1) / 2 | 0]
            }), t.init(e, a, r)
        }
    });
    var Wi, Yi, Ui = {
        name: "css",
        register: kn,
        targetTest: function (t) {
            return t.style && t.nodeType
        },
        init: function (t, e, n, i, r) {
            var o, s, a, l, c, u, f, h, p, g, m, v, y, b, _, w = this._props,
                x = t.style,
                T = n.vars.startAt;
            for (f in Kn || kn(), e)
                if ("autoRound" !== f && (s = e[f], !ce[f] || !He(f, e, n, i, t, r)))
                    if (c = typeof s, u = Ni[f], "function" === c && (c = typeof (s = s.call(n, i, t, r))), "string" === c && ~s.indexOf("random(") && (s = et(s)), u) u(this, t, f, s, n) && (_ = 1);
                    else if ("--" === f.substr(0, 2)) s += "", h = V(o = (getComputedStyle(t).getPropertyValue(f) + "").trim()), (p = V(s)) ? h !== p && (o = Ln(t, f, o, p) + p) : h && (s += h), this.add(x, "setProperty", o, s, i, r, 0, 0, f);
            else if ("undefined" !== c) {
                if (T && f in T ? (o = "function" == typeof T[f] ? T[f].call(n, i, t, r) : T[f], f in Ht.units && !V(o) && (o += Ht.units[f]), "=" === (o + "").charAt(1) && (o = Mn(t, f))) : o = Mn(t, f), l = parseFloat(o), (g = "string" === c && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)), a = parseFloat(s), f in Si && ("autoAlpha" === f && (1 === l && "hidden" === Mn(t, "visibility") && a && (l = 0), $n(this, x, "visibility", l ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)), "scale" !== f && "transform" !== f && ~(f = Si[f]).indexOf(",") && (f = f.split(",")[0])), m = f in bi)
                    if (v || ((y = t._gsap).renderTransform && !e.parseTransform || Mi(t, e.parseTransform), b = !1 !== e.smoothOrigin && y.smooth, (v = this._pt = new ln(this._pt, x, Ai, 0, 1, y.renderTransform, y, 0, -1)).dep = 1), "scale" === f) this._pt = new ln(this._pt, y, "scaleY", y.scaleY, g ? g * a : a - y.scaleY), w.push("scaleY", f), f += "X";
                    else {
                        if ("transformOrigin" === f) {
                            s = Rn(s), y.svg ? qn(t, s, 0, b, 0, this) : ((p = parseFloat(s.split(" ")[2]) || 0) !== y.zOrigin && $n(this, y, "zOrigin", y.zOrigin, p), $n(this, x, f, ji(o), ji(s)));
                            continue
                        }
                        if ("svgOrigin" === f) {
                            qn(t, s, 1, b, 0, this);
                            continue
                        }
                        if (f in Li) {
                            Yn(this, y, f, l, s, g);
                            continue
                        }
                        if ("smoothOrigin" === f) {
                            $n(this, y, "smooth", y.smooth, s);
                            continue
                        }
                        if ("force3D" === f) {
                            y[f] = s;
                            continue
                        }
                        if ("transform" === f) {
                            Un(this, s, t);
                            continue
                        }
                    }
                else f in x || (f = Oi(f) || f);
                if (m || (a || 0 === a) && (l || 0 === l) && !Ei.test(s) && f in x) a = a || 0, (h = (o + "").substr((l + "").length)) !== (p = V(s) || (f in Ht.units ? Ht.units[f] : h)) && (l = Ln(t, f, o, p)), this._pt = new ln(this._pt, m ? y : x, f, l, g ? g * a : a - l, m || "px" !== p && "zIndex" !== f || !1 === e.autoRound ? pn : vn), this._pt.u = p || 0, h !== p && (this._pt.b = o, this._pt.r = mn);
                else if (f in x) jn.call(this, t, f, o, s);
                else {
                    if (!(f in t)) {
                        d(f, s);
                        continue
                    }
                    this.add(t, f, t[f], s, i, r)
                }
                w.push(f)
            }
            _ && an(this)
        },
        get: Mn,
        aliases: Si,
        getSetter: function (t, e, n) {
            var i = Si[e];
            return i && i.indexOf(",") < 0 && (e = i), e in bi && e !== ki && (t._gsap.x || Mn(t, "x")) ? n && Jn === n ? "scale" === e ? Tn : xn : (Jn = n || {}) && ("scale" === e ? Cn : En) : t.style && !s(t.style[e]) ? _n : ~e.indexOf("-") ? wn : Je(t, e)
        },
        core: {
            _removeProperty: Nn,
            _getMatrix: Bn
        }
    };
    hn.utils.checkPrefix = Oi, Yi = b("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (Wi = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (t) {
        bi[t] = 1
    }), b(Wi, function (t) {
        Ht.units[t] = "deg", Li[t] = 1
    }), Si[Yi[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Wi, b("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (t) {
        var e = t.split(":");
        Si[e[1]] = Yi[e[0]]
    }), b("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
        Ht.units[t] = "px"
    }), hn.registerPlugin(Ui);
    var Vi = hn.registerPlugin(Ui) || hn,
        Xi = Vi.core.Tween;
    t.Back = hi, t.Bounce = gi, t.CSSPlugin = Ui, t.Circ = yi, t.Cubic = li, t.Elastic = di, t.Expo = vi, t.Linear = si, t.Power0 = ei, t.Power1 = ni, t.Power2 = ii, t.Power3 = ri, t.Power4 = oi, t.Quad = ai, t.Quart = ci, t.Quint = ui, t.Sine = mi, t.SteppedEase = pi, t.Strong = fi, t.TimelineLite = Fe, t.TimelineMax = Fe, t.TweenLite = Ve, t.TweenMax = Xi, t.default = Vi, t.gsap = Vi, "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", {
        value: !0
    }) : delete t.default
}),
function (t) {
    t.fn.tilt = function (e) {
        var n = this,
            i = function () {
                this.ticking || (requestAnimationFrame(u.bind(this)), this.ticking = !0)
            },
            r = function () {
                var e = this;
                void 0 !== this.timeout && clearTimeout(this.timeout), t(this).css({
                    transition: this.settings.speed + "ms " + this.settings.easing
                }), this.timeout = setTimeout(function () {
                    t(e).css({
                        transition: ""
                    })
                }, this.settings.speed)
            },
            o = function () {
                this.ticking = !1, t(this).css({
                    "will-change": "transform"
                }), r.call(this), t(this).trigger("tilt.mouseEnter")
            },
            s = function () {
                return void 0 === event && (event = {
                    pageX: t(this).offset().left + t(this).width() / 2,
                    pageY: t(this).offset().top + t(this).height() / 2
                }), {
                    x: event.pageX,
                    y: event.pageY
                }
            },
            a = function () {
                this.mousePositions = s(), i.call(this)
            },
            l = function () {
                r.call(this), this.reset = !0, i.call(this), t(this).trigger("tilt.mouseLeave")
            },
            c = function () {
                var e = this.clientWidth,
                    n = this.clientHeight,
                    i = (this.mousePositions.x - t(this).offset().left) / e,
                    r = (this.mousePositions.y - t(this).offset().top) / n;
                return {
                    tiltX: (this.settings.maxTilt / 2 - i * this.settings.maxTilt).toFixed(2),
                    tiltY: (r * this.settings.maxTilt - this.settings.maxTilt / 2).toFixed(2),
                    percentageX: 100 * i,
                    percentageY: 100 * r
                }
            },
            u = function () {
                return this.transforms = c.call(this), this.reset ? (this.reset = !1, void t(this).css("transform", "perspective(" + this.settings.perspective + "px) rotateX(0deg) rotateY(0deg)")) : (t(this).css("transform", "perspective(" + this.settings.perspective + "px) rotateX(" + ("x" === this.settings.axis ? 0 : this.transforms.tiltY) + "deg) rotateY(" + ("y" === this.settings.axis ? 0 : this.transforms.tiltX) + "deg) scale3d(" + this.settings.scale + "," + this.settings.scale + "," + this.settings.scale + ")"), t(this).trigger("change", [this.transforms]), void(this.ticking = !1))
            };
        return this.methods = {
            getValues: function () {
                var e = [];
                return t(n).each(function () {
                    this.mousePositions = s(), e.push(c.call(this))
                }), e
            },
            reset: function (t) {
                function e() {
                    return t.apply(this, arguments)
                }
                return e.toString = function () {
                    return t.toString()
                }, e
            }(function () {
                l(), setTimeout(function () {
                    reset = !1
                }, n.settings.transition)
            }),
            destroy: function () {
                t(n).each(function () {
                    t(this).css({
                        "will-change": "",
                        transform: ""
                    }), t(this).off("mousemove mouseenter mouseleave")
                })
            }
        }, this.each(function () {
            var n = this;
            this.settings = t.extend({
                maxTilt: t(this).is("[data-tilt-max]") ? t(this).data("tilt-max") : 20,
                perspective: t(this).is("[data-tilt-perspective]") ? t(this).data("tilt-perspective") : 1e3,
                easing: t(this).is("[data-tilt-easing]") ? t(this).data("tilt-easing") : "cubic-bezier(.03,.98,.52,.99)",
                scale: t(this).is("[data-tilt-scale]") ? t(this).data("tilt-scale") : "1",
                speed: t(this).is("[data-tilt-speed]") ? t(this).data("tilt-speed") : "300",
                transition: !t(this).is("[data-tilt-transition]") || t(this).data("tilt-transition"),
                axis: t(this).is("[data-tilt-axis]") ? t(this).data("tilt-axis") : null,
                reset: !t(this).is("[data-tilt-reset]") || t(this).data("tilt-reset")
            }, e), this.init = function () {
                (function () {
                    t(this).on("mousemove", a), t(this).on("mouseenter", o), this.settings.reset && t(this).on("mouseleave", l)
                }).call(n)
            }, this.init()
        })
    }
}(jQuery),
function (t, e, n, i) {
    "use strict";

    function r(t, e) {
        var i, r, o, s = [],
            a = 0;
        t && t.isDefaultPrevented() || (t.preventDefault(), e = e || {}, t && t.data && (e = h(t.data.options, e)), i = e.$target || n(t.currentTarget).trigger("blur"), (o = n.fancybox.getInstance()) && o.$trigger && o.$trigger.is(i) || (e.selector ? s = n(e.selector) : (r = i.attr("data-fancybox") || "") ? s = (s = t.data ? t.data.items : []).length ? s.filter('[data-fancybox="' + r + '"]') : n('[data-fancybox="' + r + '"]') : s = [i], (a = n(s).index(i)) < 0 && (a = 0), (o = n.fancybox.open(s, e, a)).$trigger = i))
    }
    if (t.console = t.console || {
            info: function (t) {}
        }, n) {
        if (n.fn.fancybox) return void console.info("fancyBox already initialized");
        var o = {
                closeExisting: !1,
                loop: !1,
                gutter: 50,
                keyboard: !0,
                preventCaptionOverlap: !0,
                arrows: !0,
                infobar: !0,
                smallBtn: "auto",
                toolbar: "auto",
                buttons: ["zoom", "slideShow", "thumbs", "close"],
                idleTime: 3,
                protect: !1,
                modal: !1,
                image: {
                    preload: !1
                },
                ajax: {
                    settings: {
                        data: {
                            fancybox: !0
                        }
                    }
                },
                iframe: {
                    tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
                    preload: !0,
                    css: {},
                    attr: {
                        scrolling: "auto"
                    }
                },
                video: {
                    tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                    format: "",
                    autoStart: !0
                },
                defaultType: "image",
                animationEffect: "zoom",
                animationDuration: 366,
                zoomOpacity: "auto",
                transitionEffect: "fade",
                transitionDuration: 366,
                slideClass: "",
                baseClass: "",
                baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
                spinnerTpl: '<div class="fancybox-loading"></div>',
                errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
                btnTpl: {
                    download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                    zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                    close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                    arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
                    arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
                    smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
                },
                parentEl: "body",
                hideScrollbar: !0,
                autoFocus: !0,
                backFocus: !0,
                trapFocus: !0,
                fullScreen: {
                    autoStart: !1
                },
                touch: {
                    vertical: !0,
                    momentum: !0
                },
                hash: null,
                media: {},
                slideShow: {
                    autoStart: !1,
                    speed: 3e3
                },
                thumbs: {
                    autoStart: !1,
                    hideOnClose: !0,
                    parentEl: ".fancybox-container",
                    axis: "y"
                },
                wheel: "auto",
                onInit: n.noop,
                beforeLoad: n.noop,
                afterLoad: n.noop,
                beforeShow: n.noop,
                afterShow: n.noop,
                beforeClose: n.noop,
                afterClose: n.noop,
                onActivate: n.noop,
                onDeactivate: n.noop,
                clickContent: function (t, e) {
                    return "image" === t.type && "zoom"
                },
                clickSlide: "close",
                clickOutside: "close",
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1,
                mobile: {
                    preventCaptionOverlap: !1,
                    idleTime: !1,
                    clickContent: function (t, e) {
                        return "image" === t.type && "toggleControls"
                    },
                    clickSlide: function (t, e) {
                        return "image" === t.type ? "toggleControls" : "close"
                    },
                    dblclickContent: function (t, e) {
                        return "image" === t.type && "zoom"
                    },
                    dblclickSlide: function (t, e) {
                        return "image" === t.type && "zoom"
                    }
                },
                lang: "en",
                i18n: {
                    en: {
                        CLOSE: "Close",
                        NEXT: "Next",
                        PREV: "Previous",
                        ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                        PLAY_START: "Start slideshow",
                        PLAY_STOP: "Pause slideshow",
                        FULL_SCREEN: "Full screen",
                        THUMBS: "Thumbnails",
                        DOWNLOAD: "Download",
                        SHARE: "Share",
                        ZOOM: "Zoom"
                    },
                    de: {
                        CLOSE: "Schlie&szlig;en",
                        NEXT: "Weiter",
                        PREV: "Zur&uuml;ck",
                        ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                        PLAY_START: "Diaschau starten",
                        PLAY_STOP: "Diaschau beenden",
                        FULL_SCREEN: "Vollbild",
                        THUMBS: "Vorschaubilder",
                        DOWNLOAD: "Herunterladen",
                        SHARE: "Teilen",
                        ZOOM: "Vergr&ouml;&szlig;ern"
                    }
                }
            },
            s = n(t),
            a = n(e),
            l = 0,
            c = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function (e) {
                return t.setTimeout(e, 1e3 / 60)
            },
            u = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function (e) {
                t.clearTimeout(e)
            },
            f = function () {
                var t, n = e.createElement("fakeelement"),
                    i = {
                        transition: "transitionend",
                        OTransition: "oTransitionEnd",
                        MozTransition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd"
                    };
                for (t in i)
                    if (void 0 !== n.style[t]) return i[t];
                return "transitionend"
            }(),
            d = function (t) {
                return t && t.length && t[0].offsetHeight
            },
            h = function (t, e) {
                var i = n.extend(!0, {}, t, e);
                return n.each(e, function (t, e) {
                    n.isArray(e) && (i[t] = e)
                }), i
            },
            p = function (t) {
                var i, r;
                return !(!t || t.ownerDocument !== e) && (n(".fancybox-container").css("pointer-events", "none"), i = {
                    x: t.getBoundingClientRect().left + t.offsetWidth / 2,
                    y: t.getBoundingClientRect().top + t.offsetHeight / 2
                }, r = e.elementFromPoint(i.x, i.y) === t, n(".fancybox-container").css("pointer-events", ""), r)
            },
            g = function (t, e, i) {
                var r = this;
                r.opts = h({
                    index: i
                }, n.fancybox.defaults), n.isPlainObject(e) && (r.opts = h(r.opts, e)), n.fancybox.isMobile && (r.opts = h(r.opts, r.opts.mobile)), r.id = r.opts.id || ++l, r.currIndex = parseInt(r.opts.index, 10) || 0, r.prevIndex = null, r.prevPos = null, r.currPos = 0, r.firstRun = !0, r.group = [], r.slides = {}, r.addContent(t), r.group.length && r.init()
            };
        n.extend(g.prototype, {
                init: function () {
                    var i, r, o = this,
                        s = o.group[o.currIndex].opts;
                    s.closeExisting && n.fancybox.close(!0), n("body").addClass("fancybox-active"), !n.fancybox.getInstance() && !1 !== s.hideScrollbar && !n.fancybox.isMobile && e.body.scrollHeight > t.innerHeight && (n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (t.innerWidth - e.documentElement.clientWidth) + "px;}</style>"), n("body").addClass("compensate-for-scrollbar")), r = "", n.each(s.buttons, function (t, e) {
                        r += s.btnTpl[e] || ""
                    }), i = n(o.translate(o, s.baseTpl.replace("{{buttons}}", r).replace("{{arrows}}", s.btnTpl.arrowLeft + s.btnTpl.arrowRight))).attr("id", "fancybox-container-" + o.id).addClass(s.baseClass).data("FancyBox", o).appendTo(s.parentEl), o.$refs = {
                        container: i
                    }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (t) {
                        o.$refs[t] = i.find(".fancybox-" + t)
                    }), o.trigger("onInit"), o.activate(), o.jumpTo(o.currIndex)
                },
                translate: function (t, e) {
                    var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
                    return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
                        return void 0 === n[e] ? t : n[e]
                    })
                },
                addContent: function (t) {
                    var e, i = this,
                        r = n.makeArray(t);
                    n.each(r, function (t, e) {
                        var r, o, s, a, l, c = {},
                            u = {};
                        n.isPlainObject(e) ? (c = e, u = e.opts || e) : "object" === n.type(e) && n(e).length ? (u = (r = n(e)).data() || {}, (u = n.extend(!0, {}, u, u.options)).$orig = r, c.src = i.opts.src || u.src || r.attr("href"), c.type || c.src || (c.type = "inline", c.src = e)) : c = {
                            type: "html",
                            src: e + ""
                        }, c.opts = n.extend(!0, {}, i.opts, u), n.isArray(u.buttons) && (c.opts.buttons = u.buttons), n.fancybox.isMobile && c.opts.mobile && (c.opts = h(c.opts, c.opts.mobile)), o = c.type || c.opts.type, a = c.src || "", !o && a && ((s = a.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (o = "video", c.opts.video.format || (c.opts.video.format = "video/" + ("ogv" === s[1] ? "ogg" : s[1]))) : a.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? o = "image" : a.match(/\.(pdf)((\?|#).*)?$/i) ? (o = "iframe", c = n.extend(!0, c, {
                            contentType: "pdf",
                            opts: {
                                iframe: {
                                    preload: !1
                                }
                            }
                        })) : "#" === a.charAt(0) && (o = "inline")), o ? c.type = o : i.trigger("objectNeedsType", c), c.contentType || (c.contentType = n.inArray(c.type, ["html", "inline", "ajax"]) > -1 ? "html" : c.type), c.index = i.group.length, "auto" == c.opts.smallBtn && (c.opts.smallBtn = n.inArray(c.type, ["html", "inline", "ajax"]) > -1), "auto" === c.opts.toolbar && (c.opts.toolbar = !c.opts.smallBtn), c.$thumb = c.opts.$thumb || null, c.opts.$trigger && c.index === i.opts.index && (c.$thumb = c.opts.$trigger.find("img:first"), c.$thumb.length && (c.opts.$orig = c.opts.$trigger)), c.$thumb && c.$thumb.length || !c.opts.$orig || (c.$thumb = c.opts.$orig.find("img:first")), c.$thumb && !c.$thumb.length && (c.$thumb = null), c.thumb = c.opts.thumb || (c.$thumb ? c.$thumb[0].src : null), "function" === n.type(c.opts.caption) && (c.opts.caption = c.opts.caption.apply(e, [i, c])), "function" === n.type(i.opts.caption) && (c.opts.caption = i.opts.caption.apply(e, [i, c])), c.opts.caption instanceof n || (c.opts.caption = void 0 === c.opts.caption ? "" : c.opts.caption + ""), "ajax" === c.type && ((l = a.split(/\s+/, 2)).length > 1 && (c.src = l.shift(), c.opts.filter = l.shift())), c.opts.modal && (c.opts = n.extend(!0, c.opts, {
                            trapFocus: !0,
                            infobar: 0,
                            toolbar: 0,
                            smallBtn: 0,
                            keyboard: 0,
                            slideShow: 0,
                            fullScreen: 0,
                            thumbs: 0,
                            touch: 0,
                            clickContent: !1,
                            clickSlide: !1,
                            clickOutside: !1,
                            dblclickContent: !1,
                            dblclickSlide: !1,
                            dblclickOutside: !1
                        })), i.group.push(c)
                    }), Object.keys(i.slides).length && (i.updateControls(), (e = i.Thumbs) && e.isActive && (e.create(), e.focus()))
                },
                addEvents: function () {
                    var e = this;
                    e.removeEvents(), e.$refs.container.on("click.fb-close", "[data-fancybox-close]", function (t) {
                        t.stopPropagation(), t.preventDefault(), e.close(t)
                    }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (t) {
                        t.stopPropagation(), t.preventDefault(), e.previous()
                    }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (t) {
                        t.stopPropagation(), t.preventDefault(), e.next()
                    }).on("click.fb", "[data-fancybox-zoom]", function (t) {
                        e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                    }), s.on("orientationchange.fb resize.fb", function (t) {
                        t && t.originalEvent && "resize" === t.originalEvent.type ? (e.requestId && u(e.requestId), e.requestId = c(function () {
                            e.update(t)
                        })) : (e.current && "iframe" === e.current.type && e.$refs.stage.hide(), setTimeout(function () {
                            e.$refs.stage.show(), e.update(t)
                        }, n.fancybox.isMobile ? 600 : 250))
                    }), a.on("keydown.fb", function (t) {
                        var i = (n.fancybox ? n.fancybox.getInstance() : null).current,
                            r = t.keyCode || t.which;
                        if (9 != r) return !i.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || n(t.target).is("input,textarea,video,audio,select") ? void 0 : 8 === r || 27 === r ? (t.preventDefault(), void e.close(t)) : 37 === r || 38 === r ? (t.preventDefault(), void e.previous()) : 39 === r || 40 === r ? (t.preventDefault(), void e.next()) : void e.trigger("afterKeydown", t, r);
                        i.opts.trapFocus && e.focus(t)
                    }), e.group[e.currIndex].opts.idleTime && (e.idleSecondsCounter = 0, a.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function (t) {
                        e.idleSecondsCounter = 0, e.isIdle && e.showControls(), e.isIdle = !1
                    }), e.idleInterval = t.setInterval(function () {
                        ++e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime && !e.isDragging && (e.isIdle = !0, e.idleSecondsCounter = 0, e.hideControls())
                    }, 1e3))
                },
                removeEvents: function () {
                    var e = this;
                    s.off("orientationchange.fb resize.fb"), a.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), e.idleInterval && (t.clearInterval(e.idleInterval), e.idleInterval = null)
                },
                previous: function (t) {
                    return this.jumpTo(this.currPos - 1, t)
                },
                next: function (t) {
                    return this.jumpTo(this.currPos + 1, t)
                },
                jumpTo: function (t, e) {
                    var i, r, o, s, a, l, c, u, f, h = this,
                        p = h.group.length;
                    if (!(h.isDragging || h.isClosing || h.isAnimating && h.firstRun)) {
                        if (t = parseInt(t, 10), !(o = h.current ? h.current.opts.loop : h.opts.loop) && (t < 0 || t >= p)) return !1;
                        if (i = h.firstRun = !Object.keys(h.slides).length, a = h.current, h.prevIndex = h.currIndex, h.prevPos = h.currPos, s = h.createSlide(t), p > 1 && ((o || s.index < p - 1) && h.createSlide(t + 1), (o || s.index > 0) && h.createSlide(t - 1)), h.current = s, h.currIndex = s.index, h.currPos = s.pos, h.trigger("beforeShow", i), h.updateControls(), s.forcedDuration = void 0, n.isNumeric(e) ? s.forcedDuration = e : e = s.opts[i ? "animationDuration" : "transitionDuration"], e = parseInt(e, 10), r = h.isMoved(s), s.$slide.addClass("fancybox-slide--current"), i) return s.opts.animationEffect && e && h.$refs.container.css("transition-duration", e + "ms"), h.$refs.container.addClass("fancybox-is-open").trigger("focus"), h.loadSlide(s), void h.preload("image");
                        l = n.fancybox.getTranslate(a.$slide), c = n.fancybox.getTranslate(h.$refs.stage), n.each(h.slides, function (t, e) {
                            n.fancybox.stop(e.$slide, !0)
                        }), a.pos !== s.pos && (a.isComplete = !1), a.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"), r ? (f = l.left - (a.pos * l.width + a.pos * a.opts.gutter), n.each(h.slides, function (t, i) {
                            i.$slide.removeClass("fancybox-animated").removeClass(function (t, e) {
                                return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                            });
                            var r = i.pos * l.width + i.pos * i.opts.gutter;
                            n.fancybox.setTranslate(i.$slide, {
                                top: 0,
                                left: r - c.left + f
                            }), i.pos !== s.pos && i.$slide.addClass("fancybox-slide--" + (i.pos > s.pos ? "next" : "previous")), d(i.$slide), n.fancybox.animate(i.$slide, {
                                top: 0,
                                left: (i.pos - s.pos) * l.width + (i.pos - s.pos) * i.opts.gutter
                            }, e, function () {
                                i.$slide.css({
                                    transform: "",
                                    opacity: ""
                                }).removeClass("fancybox-slide--next fancybox-slide--previous"), i.pos === h.currPos && h.complete()
                            })
                        })) : e && s.opts.transitionEffect && (u = "fancybox-animated fancybox-fx-" + s.opts.transitionEffect, a.$slide.addClass("fancybox-slide--" + (a.pos > s.pos ? "next" : "previous")), n.fancybox.animate(a.$slide, u, e, function () {
                            a.$slide.removeClass(u).removeClass("fancybox-slide--next fancybox-slide--previous")
                        }, !1)), s.isLoaded ? h.revealContent(s) : h.loadSlide(s), h.preload("image")
                    }
                },
                createSlide: function (t) {
                    var e, i, r = this;
                    return i = (i = t % r.group.length) < 0 ? r.group.length + i : i, !r.slides[t] && r.group[i] && (e = n('<div class="fancybox-slide"></div>').appendTo(r.$refs.stage), r.slides[t] = n.extend(!0, {}, r.group[i], {
                        pos: t,
                        $slide: e,
                        isLoaded: !1
                    }), r.updateSlide(r.slides[t])), r.slides[t]
                },
                scaleToActual: function (t, e, i) {
                    var r, o, s, a, l, c = this,
                        u = c.current,
                        f = u.$content,
                        d = n.fancybox.getTranslate(u.$slide).width,
                        h = n.fancybox.getTranslate(u.$slide).height,
                        p = u.width,
                        g = u.height;
                    c.isAnimating || c.isMoved() || !f || "image" != u.type || !u.isLoaded || u.hasError || (c.isAnimating = !0, n.fancybox.stop(f), t = void 0 === t ? .5 * d : t, e = void 0 === e ? .5 * h : e, (r = n.fancybox.getTranslate(f)).top -= n.fancybox.getTranslate(u.$slide).top, r.left -= n.fancybox.getTranslate(u.$slide).left, a = p / r.width, l = g / r.height, o = .5 * d - .5 * p, s = .5 * h - .5 * g, p > d && ((o = r.left * a - (t * a - t)) > 0 && (o = 0), o < d - p && (o = d - p)), g > h && ((s = r.top * l - (e * l - e)) > 0 && (s = 0), s < h - g && (s = h - g)), c.updateCursor(p, g), n.fancybox.animate(f, {
                        top: s,
                        left: o,
                        scaleX: a,
                        scaleY: l
                    }, i || 366, function () {
                        c.isAnimating = !1
                    }), c.SlideShow && c.SlideShow.isActive && c.SlideShow.stop())
                },
                scaleToFit: function (t) {
                    var e, i = this,
                        r = i.current,
                        o = r.$content;
                    i.isAnimating || i.isMoved() || !o || "image" != r.type || !r.isLoaded || r.hasError || (i.isAnimating = !0, n.fancybox.stop(o), e = i.getFitPos(r), i.updateCursor(e.width, e.height), n.fancybox.animate(o, {
                        top: e.top,
                        left: e.left,
                        scaleX: e.width / o.width(),
                        scaleY: e.height / o.height()
                    }, t || 366, function () {
                        i.isAnimating = !1
                    }))
                },
                getFitPos: function (t) {
                    var e, i, r, o, s = t.$content,
                        a = t.$slide,
                        l = t.width || t.opts.width,
                        c = t.height || t.opts.height,
                        u = {};
                    return !!(t.isLoaded && s && s.length) && (e = n.fancybox.getTranslate(this.$refs.stage).width, i = n.fancybox.getTranslate(this.$refs.stage).height, e -= parseFloat(a.css("paddingLeft")) + parseFloat(a.css("paddingRight")) + parseFloat(s.css("marginLeft")) + parseFloat(s.css("marginRight")), i -= parseFloat(a.css("paddingTop")) + parseFloat(a.css("paddingBottom")) + parseFloat(s.css("marginTop")) + parseFloat(s.css("marginBottom")), l && c || (l = e, c = i), (l *= r = Math.min(1, e / l, i / c)) > e - .5 && (l = e), (c *= r) > i - .5 && (c = i), "image" === t.type ? (u.top = Math.floor(.5 * (i - c)) + parseFloat(a.css("paddingTop")), u.left = Math.floor(.5 * (e - l)) + parseFloat(a.css("paddingLeft"))) : "video" === t.contentType && (c > l / (o = t.opts.width && t.opts.height ? l / c : t.opts.ratio || 16 / 9) ? c = l / o : l > c * o && (l = c * o)), u.width = l, u.height = c, u)
                },
                update: function (t) {
                    var e = this;
                    n.each(e.slides, function (n, i) {
                        e.updateSlide(i, t)
                    })
                },
                updateSlide: function (t, e) {
                    var i = this,
                        r = t && t.$content,
                        o = t.width || t.opts.width,
                        s = t.height || t.opts.height,
                        a = t.$slide;
                    i.adjustCaption(t), r && (o || s || "video" === t.contentType) && !t.hasError && (n.fancybox.stop(r), n.fancybox.setTranslate(r, i.getFitPos(t)), t.pos === i.currPos && (i.isAnimating = !1, i.updateCursor())), i.adjustLayout(t), a.length && (a.trigger("refresh"), t.pos === i.currPos && i.$refs.toolbar.add(i.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", a.get(0).scrollHeight > a.get(0).clientHeight)), i.trigger("onUpdate", t, e)
                },
                centerSlide: function (t) {
                    var e = this,
                        i = e.current,
                        r = i.$slide;
                    !e.isClosing && i && (r.siblings().css({
                        transform: "",
                        opacity: ""
                    }), r.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), n.fancybox.animate(r, {
                        top: 0,
                        left: 0,
                        opacity: 1
                    }, void 0 === t ? 0 : t, function () {
                        r.css({
                            transform: "",
                            opacity: ""
                        }), i.isComplete || e.complete()
                    }, !1))
                },
                isMoved: function (t) {
                    var e, i, r = t || this.current;
                    return !!r && (i = n.fancybox.getTranslate(this.$refs.stage), e = n.fancybox.getTranslate(r.$slide), !r.$slide.hasClass("fancybox-animated") && (Math.abs(e.top - i.top) > .5 || Math.abs(e.left - i.left) > .5))
                },
                updateCursor: function (t, e) {
                    var i, r, o = this,
                        s = o.current,
                        a = o.$refs.container;
                    s && !o.isClosing && o.Guestures && (a.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), r = !!(i = o.canPan(t, e)) || o.isZoomable(), a.toggleClass("fancybox-is-zoomable", r), n("[data-fancybox-zoom]").prop("disabled", !r), i ? a.addClass("fancybox-can-pan") : r && ("zoom" === s.opts.clickContent || n.isFunction(s.opts.clickContent) && "zoom" == s.opts.clickContent(s)) ? a.addClass("fancybox-can-zoomIn") : s.opts.touch && (s.opts.touch.vertical || o.group.length > 1) && "video" !== s.contentType && a.addClass("fancybox-can-swipe"))
                },
                isZoomable: function () {
                    var t, e = this,
                        n = e.current;
                    if (n && !e.isClosing && "image" === n.type && !n.hasError) {
                        if (!n.isLoaded) return !0;
                        if ((t = e.getFitPos(n)) && (n.width > t.width || n.height > t.height)) return !0
                    }
                    return !1
                },
                isScaledDown: function (t, e) {
                    var i = !1,
                        r = this.current,
                        o = r.$content;
                    return void 0 !== t && void 0 !== e ? i = t < r.width && e < r.height : o && (i = (i = n.fancybox.getTranslate(o)).width < r.width && i.height < r.height), i
                },
                canPan: function (t, e) {
                    var i = this.current,
                        r = null,
                        o = !1;
                    return "image" === i.type && (i.isComplete || t && e) && !i.hasError && (o = this.getFitPos(i), void 0 !== t && void 0 !== e ? r = {
                        width: t,
                        height: e
                    } : i.isComplete && (r = n.fancybox.getTranslate(i.$content)), r && o && (o = Math.abs(r.width - o.width) > 1.5 || Math.abs(r.height - o.height) > 1.5)), o
                },
                loadSlide: function (t) {
                    var e, i, r, o = this;
                    if (!t.isLoading && !t.isLoaded) {
                        if (t.isLoading = !0, !1 === o.trigger("beforeLoad", t)) return t.isLoading = !1, !1;
                        switch (e = t.type, (i = t.$slide).off("refresh").trigger("onReset").addClass(t.opts.slideClass), e) {
                            case "image":
                                o.setImage(t);
                                break;
                            case "iframe":
                                o.setIframe(t);
                                break;
                            case "html":
                                o.setContent(t, t.src || t.content);
                                break;
                            case "video":
                                o.setContent(t, t.opts.video.tpl.replace(/\{\{src\}\}/gi, t.src).replace("{{format}}", t.opts.videoFormat || t.opts.video.format || "").replace("{{poster}}", t.thumb || ""));
                                break;
                            case "inline":
                                n(t.src).length ? o.setContent(t, n(t.src)) : o.setError(t);
                                break;
                            case "ajax":
                                o.showLoading(t), r = n.ajax(n.extend({}, t.opts.ajax.settings, {
                                    url: t.src,
                                    success: function (e, n) {
                                        "success" === n && o.setContent(t, e)
                                    },
                                    error: function (e, n) {
                                        e && "abort" !== n && o.setError(t)
                                    }
                                })), i.one("onReset", function () {
                                    r.abort()
                                });
                                break;
                            default:
                                o.setError(t)
                        }
                        return !0
                    }
                },
                setImage: function (t) {
                    var i, r = this;
                    setTimeout(function () {
                        var e = t.$image;
                        r.isClosing || !t.isLoading || e && e.length && e[0].complete || t.hasError || r.showLoading(t)
                    }, 50), r.checkSrcset(t), t.$content = n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")), !1 !== t.opts.preload && t.opts.width && t.opts.height && t.thumb && (t.width = t.opts.width, t.height = t.opts.height, (i = e.createElement("img")).onerror = function () {
                        n(this).remove(), t.$ghost = null
                    }, i.onload = function () {
                        r.afterLoad(t)
                    }, t.$ghost = n(i).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb)), r.setBigImage(t)
                },
                checkSrcset: function (e) {
                    var n, i, r, o, s = e.opts.srcset || e.opts.image.srcset;
                    if (s) {
                        r = t.devicePixelRatio || 1, o = t.innerWidth * r, (i = s.split(",").map(function (t) {
                            var e = {};
                            return t.trim().split(/\s+/).forEach(function (t, n) {
                                var i = parseInt(t.substring(0, t.length - 1), 10);
                                if (0 === n) return e.url = t;
                                i && (e.value = i, e.postfix = t[t.length - 1])
                            }), e
                        })).sort(function (t, e) {
                            return t.value - e.value
                        });
                        for (var a = 0; a < i.length; a++) {
                            var l = i[a];
                            if ("w" === l.postfix && l.value >= o || "x" === l.postfix && l.value >= r) {
                                n = l;
                                break
                            }
                        }!n && i.length && (n = i[i.length - 1]), n && (e.src = n.url, e.width && e.height && "w" == n.postfix && (e.height = e.width / e.height * n.value, e.width = n.value), e.opts.srcset = s)
                    }
                },
                setBigImage: function (t) {
                    var i = this,
                        r = e.createElement("img"),
                        o = n(r);
                    t.$image = o.one("error", function () {
                        i.setError(t)
                    }).one("load", function () {
                        var e;
                        t.$ghost || (i.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), i.afterLoad(t)), i.isClosing || (t.opts.srcset && ((e = t.opts.sizes) && "auto" !== e || (e = (t.width / t.height > 1 && s.width() / s.height() > 1 ? "100" : Math.round(t.width / t.height * 100)) + "vw"), o.attr("sizes", e).attr("srcset", t.opts.srcset)), t.$ghost && setTimeout(function () {
                            t.$ghost && !i.isClosing && t.$ghost.hide()
                        }, Math.min(300, Math.max(1e3, t.height / 1600))), i.hideLoading(t))
                    }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (r.complete || "complete" == r.readyState) && o.naturalWidth && o.naturalHeight ? o.trigger("load") : r.error && o.trigger("error")
                },
                resolveImageSlideSize: function (t, e, n) {
                    var i = parseInt(t.opts.width, 10),
                        r = parseInt(t.opts.height, 10);
                    t.width = e, t.height = n, i > 0 && (t.width = i, t.height = Math.floor(i * n / e)), r > 0 && (t.width = Math.floor(r * e / n), t.height = r)
                },
                setIframe: function (t) {
                    var e, i = this,
                        r = t.opts.iframe,
                        o = t.$slide;
                    t.$content = n('<div class="fancybox-content' + (r.preload ? " fancybox-is-hidden" : "") + '"></div>').css(r.css).appendTo(o), o.addClass("fancybox-slide--" + t.contentType), t.$iframe = e = n(r.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(r.attr).appendTo(t.$content), r.preload ? (i.showLoading(t), e.on("load.fb error.fb", function (e) {
                        this.isReady = 1, t.$slide.trigger("refresh"), i.afterLoad(t)
                    }), o.on("refresh.fb", function () {
                        var n, i = t.$content,
                            s = r.css.width,
                            a = r.css.height;
                        if (1 === e[0].isReady) {
                            try {
                                n = e.contents().find("body")
                            } catch (t) {}
                            n && n.length && n.children().length && (o.css("overflow", "visible"), i.css({
                                width: "100%",
                                "max-width": "100%",
                                height: "9999px"
                            }), void 0 === s && (s = Math.ceil(Math.max(n[0].clientWidth, n.outerWidth(!0)))), i.css("width", s || "").css("max-width", ""), void 0 === a && (a = Math.ceil(Math.max(n[0].clientHeight, n.outerHeight(!0)))), i.css("height", a || ""), o.css("overflow", "auto")), i.removeClass("fancybox-is-hidden")
                        }
                    })) : i.afterLoad(t), e.attr("src", t.src), o.one("onReset", function () {
                        try {
                            n(this).find("iframe").hide().unbind().attr("src", "//about:blank")
                        } catch (t) {}
                        n(this).off("refresh.fb").empty(), t.isLoaded = !1, t.isRevealed = !1
                    })
                },
                setContent: function (t, e) {
                    var i = this;
                    i.isClosing || (i.hideLoading(t), t.$content && n.fancybox.stop(t.$content), t.$slide.empty(), function (t) {
                        return t && t.hasOwnProperty && t instanceof n
                    }(e) && e.parent().length ? ((e.hasClass("fancybox-content") || e.parent().hasClass("fancybox-content")) && e.parents(".fancybox-slide").trigger("onReset"), t.$placeholder = n("<div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === n.type(e) && (e = n("<div>").append(n.trim(e)).contents()), t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function () {
                        n(this).find("video,audio").trigger("pause"), t.$placeholder && (t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (n(this).empty(), t.isLoaded = !1, t.isRevealed = !1)
                    }), n(e).appendTo(t.$slide), n(e).is("video,audio") && (n(e).addClass("fancybox-video"), n(e).wrap("<div></div>"), t.contentType = "video", t.opts.width = t.opts.width || n(e).attr("width"), t.opts.height = t.opts.height || n(e).attr("height")), t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), t.$content.siblings().hide(), t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()), t.$content.addClass("fancybox-content"), t.$slide.addClass("fancybox-slide--" + t.contentType), i.afterLoad(t))
                },
                setError: function (t) {
                    t.hasError = !0, t.$slide.trigger("onReset").removeClass("fancybox-slide--" + t.contentType).addClass("fancybox-slide--error"), t.contentType = "html", this.setContent(t, this.translate(t, t.opts.errorTpl)), t.pos === this.currPos && (this.isAnimating = !1)
                },
                showLoading: function (t) {
                    var e = this;
                    (t = t || e.current) && !t.$spinner && (t.$spinner = n(e.translate(e, e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))
                },
                hideLoading: function (t) {
                    (t = t || this.current) && t.$spinner && (t.$spinner.stop().remove(), delete t.$spinner)
                },
                afterLoad: function (t) {
                    var e = this;
                    e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function (t) {
                        return 2 == t.button && t.preventDefault(), !0
                    }), "image" === t.type && n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), e.adjustCaption(t), e.adjustLayout(t), t.pos === e.currPos && e.updateCursor(), e.revealContent(t))
                },
                adjustCaption: function (t) {
                    var e, n = this,
                        i = t || n.current,
                        r = i.opts.caption,
                        o = i.opts.preventCaptionOverlap,
                        s = n.$refs.caption,
                        a = !1;
                    s.toggleClass("fancybox-caption--separate", o), o && r && r.length && (i.pos !== n.currPos ? ((e = s.clone().appendTo(s.parent())).children().eq(0).empty().html(r), a = e.outerHeight(!0), e.empty().remove()) : n.$caption && (a = n.$caption.outerHeight(!0)), i.$slide.css("padding-bottom", a || ""))
                },
                adjustLayout: function (t) {
                    var e, n, i, r, o = t || this.current;
                    o.isLoaded && !0 !== o.opts.disableLayoutFix && (o.$content.css("margin-bottom", ""), o.$content.outerHeight() > o.$slide.height() + .5 && (i = o.$slide[0].style["padding-bottom"], r = o.$slide.css("padding-bottom"), parseFloat(r) > 0 && (e = o.$slide[0].scrollHeight, o.$slide.css("padding-bottom", 0), Math.abs(e - o.$slide[0].scrollHeight) < 1 && (n = r), o.$slide.css("padding-bottom", i))), o.$content.css("margin-bottom", n))
                },
                revealContent: function (t) {
                    var e, i, r, o, s = this,
                        a = t.$slide,
                        l = !1,
                        c = !1,
                        u = s.isMoved(t),
                        f = t.isRevealed;
                    return t.isRevealed = !0, e = t.opts[s.firstRun ? "animationEffect" : "transitionEffect"], r = t.opts[s.firstRun ? "animationDuration" : "transitionDuration"], r = parseInt(void 0 === t.forcedDuration ? r : t.forcedDuration, 10), !u && t.pos === s.currPos && r || (e = !1), "zoom" === e && (t.pos === s.currPos && r && "image" === t.type && !t.hasError && (c = s.getThumbPos(t)) ? l = s.getFitPos(t) : e = "fade"), "zoom" === e ? (s.isAnimating = !0, l.scaleX = l.width / c.width, l.scaleY = l.height / c.height, "auto" == (o = t.opts.zoomOpacity) && (o = Math.abs(t.width / t.height - c.width / c.height) > .1), o && (c.opacity = .1, l.opacity = 1), n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), c), d(t.$content), void n.fancybox.animate(t.$content, l, r, function () {
                        s.isAnimating = !1, s.complete()
                    })) : (s.updateSlide(t), e ? (n.fancybox.stop(a), i = "fancybox-slide--" + (t.pos >= s.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + e, a.addClass(i).removeClass("fancybox-slide--current"), t.$content.removeClass("fancybox-is-hidden"), d(a), "image" !== t.type && t.$content.hide().show(0), void n.fancybox.animate(a, "fancybox-slide--current", r, function () {
                        a.removeClass(i).css({
                            transform: "",
                            opacity: ""
                        }), t.pos === s.currPos && s.complete()
                    }, !0)) : (t.$content.removeClass("fancybox-is-hidden"), f || !u || "image" !== t.type || t.hasError || t.$content.hide().fadeIn("fast"), void(t.pos === s.currPos && s.complete())))
                },
                getThumbPos: function (t) {
                    var e, i, r, o, s, a = !1,
                        l = t.$thumb;
                    return !(!l || !p(l[0])) && (e = n.fancybox.getTranslate(l), i = parseFloat(l.css("border-top-width") || 0), r = parseFloat(l.css("border-right-width") || 0), o = parseFloat(l.css("border-bottom-width") || 0), s = parseFloat(l.css("border-left-width") || 0), a = {
                        top: e.top + i,
                        left: e.left + s,
                        width: e.width - r - s,
                        height: e.height - i - o,
                        scaleX: 1,
                        scaleY: 1
                    }, e.width > 0 && e.height > 0 && a)
                },
                complete: function () {
                    var t, e = this,
                        i = e.current,
                        r = {};
                    !e.isMoved() && i.isLoaded && (i.isComplete || (i.isComplete = !0, i.$slide.siblings().trigger("onReset"), e.preload("inline"), d(i.$slide), i.$slide.addClass("fancybox-slide--complete"), n.each(e.slides, function (t, i) {
                        i.pos >= e.currPos - 1 && i.pos <= e.currPos + 1 ? r[i.pos] = i : i && (n.fancybox.stop(i.$slide), i.$slide.off().remove())
                    }), e.slides = r), e.isAnimating = !1, e.updateCursor(), e.trigger("afterShow"), i.opts.video.autoStart && i.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function () {
                        Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(), e.next()
                    }), i.opts.autoFocus && "html" === i.contentType && ((t = i.$content.find("input[autofocus]:enabled:visible:first")).length ? t.trigger("focus") : e.focus(null, !0)), i.$slide.scrollTop(0).scrollLeft(0))
                },
                preload: function (t) {
                    var e, n, i = this;
                    i.group.length < 2 || (n = i.slides[i.currPos + 1], (e = i.slides[i.currPos - 1]) && e.type === t && i.loadSlide(e), n && n.type === t && i.loadSlide(n))
                },
                focus: function (t, i) {
                    var r, o, s = this,
                        a = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
                    s.isClosing || ((r = (r = !t && s.current && s.current.isComplete ? s.current.$slide.find("*:visible" + (i ? ":not(.fancybox-close-small)" : "")) : s.$refs.container.find("*:visible")).filter(a).filter(function () {
                        return "hidden" !== n(this).css("visibility") && !n(this).hasClass("disabled")
                    })).length ? (o = r.index(e.activeElement), t && t.shiftKey ? (o < 0 || 0 == o) && (t.preventDefault(), r.eq(r.length - 1).trigger("focus")) : (o < 0 || o == r.length - 1) && (t && t.preventDefault(), r.eq(0).trigger("focus"))) : s.$refs.container.trigger("focus"))
                },
                activate: function () {
                    var t = this;
                    n(".fancybox-container").each(function () {
                        var e = n(this).data("FancyBox");
                        e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), e.isVisible = !1)
                    }), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), t.trigger("onActivate"), t.addEvents()
                },
                close: function (t, e) {
                    var i, r, o, s, a, l, u, f = this,
                        h = f.current,
                        p = function () {
                            f.cleanUp(t)
                        };
                    return !(f.isClosing || (f.isClosing = !0, !1 === f.trigger("beforeClose", t) ? (f.isClosing = !1, c(function () {
                        f.update()
                    }), 1) : (f.removeEvents(), o = h.$content, i = h.opts.animationEffect, r = n.isNumeric(e) ? e : i ? h.opts.animationDuration : 0, h.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), !0 !== t ? n.fancybox.stop(h.$slide) : i = !1, h.$slide.siblings().trigger("onReset").remove(), r && f.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", r + "ms"), f.hideLoading(h), f.hideControls(!0), f.updateCursor(), "zoom" !== i || o && r && "image" === h.type && !f.isMoved() && !h.hasError && (u = f.getThumbPos(h)) || (i = "fade"), "zoom" === i ? (n.fancybox.stop(o), s = n.fancybox.getTranslate(o), l = {
                        top: s.top,
                        left: s.left,
                        scaleX: s.width / u.width,
                        scaleY: s.height / u.height,
                        width: u.width,
                        height: u.height
                    }, a = h.opts.zoomOpacity, "auto" == a && (a = Math.abs(h.width / h.height - u.width / u.height) > .1), a && (u.opacity = 0), n.fancybox.setTranslate(o, l), d(o), n.fancybox.animate(o, u, r, p), 0) : (i && r ? n.fancybox.animate(h.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + i, r, p) : !0 === t ? setTimeout(p, r) : p(), 0))))
                },
                cleanUp: function (e) {
                    var i, r, o, s = this,
                        a = s.current.opts.$orig;
                    s.current.$slide.trigger("onReset"), s.$refs.container.empty().remove(), s.trigger("afterClose", e), s.current.opts.backFocus && (a && a.length && a.is(":visible") || (a = s.$trigger), a && a.length && (r = t.scrollX, o = t.scrollY, a.trigger("focus"), n("html, body").scrollTop(o).scrollLeft(r))), s.current = null, (i = n.fancybox.getInstance()) ? i.activate() : (n("body").removeClass("fancybox-active compensate-for-scrollbar"), n("#fancybox-style-noscroll").remove())
                },
                trigger: function (t, e) {
                    var i, r = Array.prototype.slice.call(arguments, 1),
                        o = this,
                        s = e && e.opts ? e : o.current;
                    if (s ? r.unshift(s) : s = o, r.unshift(o), n.isFunction(s.opts[t]) && (i = s.opts[t].apply(s, r)), !1 === i) return i;
                    "afterClose" !== t && o.$refs ? o.$refs.container.trigger(t + ".fb", r) : a.trigger(t + ".fb", r)
                },
                updateControls: function () {
                    var t = this,
                        i = t.current,
                        r = i.index,
                        o = t.$refs.container,
                        s = t.$refs.caption,
                        a = i.opts.caption;
                    i.$slide.trigger("refresh"), a && a.length ? (t.$caption = s, s.children().eq(0).html(a)) : t.$caption = null, t.hasHiddenControls || t.isIdle || t.showControls(), o.find("[data-fancybox-count]").html(t.group.length), o.find("[data-fancybox-index]").html(r + 1), o.find("[data-fancybox-prev]").prop("disabled", !i.opts.loop && r <= 0), o.find("[data-fancybox-next]").prop("disabled", !i.opts.loop && r >= t.group.length - 1), "image" === i.type ? o.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", i.opts.image.src || i.src).show() : i.opts.toolbar && o.find("[data-fancybox-download],[data-fancybox-zoom]").hide(), n(e.activeElement).is(":hidden,[disabled]") && t.$refs.container.trigger("focus")
                },
                hideControls: function (t) {
                    var e = ["infobar", "toolbar", "nav"];
                    !t && this.current.opts.preventCaptionOverlap || e.push("caption"), this.$refs.container.removeClass(e.map(function (t) {
                        return "fancybox-show-" + t
                    }).join(" ")), this.hasHiddenControls = !0
                },
                showControls: function () {
                    var t = this,
                        e = t.current ? t.current.opts : t.opts,
                        n = t.$refs.container;
                    t.hasHiddenControls = !1, t.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-caption", !!t.$caption).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal)
                },
                toggleControls: function () {
                    this.hasHiddenControls ? this.showControls() : this.hideControls()
                }
            }), n.fancybox = {
                version: "3.5.7",
                defaults: o,
                getInstance: function (t) {
                    var e = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                        i = Array.prototype.slice.call(arguments, 1);
                    return e instanceof g && ("string" === n.type(t) ? e[t].apply(e, i) : "function" === n.type(t) && t.apply(e, i), e)
                },
                open: function (t, e, n) {
                    return new g(t, e, n)
                },
                close: function (t) {
                    var e = this.getInstance();
                    e && (e.close(), !0 === t && this.close(t))
                },
                destroy: function () {
                    this.close(!0), a.add("body").off("click.fb-start", "**")
                },
                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                use3d: function () {
                    var n = e.createElement("div");
                    return t.getComputedStyle && t.getComputedStyle(n) && t.getComputedStyle(n).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11)
                }(),
                getTranslate: function (t) {
                    var e;
                    return !(!t || !t.length) && {
                        top: (e = t[0].getBoundingClientRect()).top || 0,
                        left: e.left || 0,
                        width: e.width,
                        height: e.height,
                        opacity: parseFloat(t.css("opacity"))
                    }
                },
                setTranslate: function (t, e) {
                    var n = "",
                        i = {};
                    if (t && e) return void 0 === e.left && void 0 === e.top || (n = (void 0 === e.left ? t.position().left : e.left) + "px, " + (void 0 === e.top ? t.position().top : e.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), void 0 !== e.scaleX && void 0 !== e.scaleY ? n += " scale(" + e.scaleX + ", " + e.scaleY + ")" : void 0 !== e.scaleX && (n += " scaleX(" + e.scaleX + ")"), n.length && (i.transform = n), void 0 !== e.opacity && (i.opacity = e.opacity), void 0 !== e.width && (i.width = e.width), void 0 !== e.height && (i.height = e.height), t.css(i)
                },
                animate: function (t, e, i, r, o) {
                    var s, a = this;
                    n.isFunction(i) && (r = i, i = null), a.stop(t), s = a.getTranslate(t), t.on(f, function (l) {
                        (!l || !l.originalEvent || t.is(l.originalEvent.target) && "z-index" != l.originalEvent.propertyName) && (a.stop(t), n.isNumeric(i) && t.css("transition-duration", ""), n.isPlainObject(e) ? void 0 !== e.scaleX && void 0 !== e.scaleY && a.setTranslate(t, {
                            top: e.top,
                            left: e.left,
                            width: s.width * e.scaleX,
                            height: s.height * e.scaleY,
                            scaleX: 1,
                            scaleY: 1
                        }) : !0 !== o && t.removeClass(e), n.isFunction(r) && r(l))
                    }), n.isNumeric(i) && t.css("transition-duration", i + "ms"), n.isPlainObject(e) ? (void 0 !== e.scaleX && void 0 !== e.scaleY && (delete e.width, delete e.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")), n.fancybox.setTranslate(t, e)) : t.addClass(e), t.data("timer", setTimeout(function () {
                        t.trigger(f)
                    }, i + 33))
                },
                stop: function (t, e) {
                    t && t.length && (clearTimeout(t.data("timer")), e && t.trigger(f), t.off(f).css("transition-duration", ""), t.parent().removeClass("fancybox-is-scaling"))
                }
            }, n.fn.fancybox = function (t) {
                var e;
                return (e = (t = t || {}).selector || !1) ? n("body").off("click.fb-start", e).on("click.fb-start", e, {
                    options: t
                }, r) : this.off("click.fb-start").on("click.fb-start", {
                    items: this,
                    options: t
                }, r), this
            }, a.on("click.fb-start", "[data-fancybox]", r), a.on("click.fb-start", "[data-fancybox-trigger]", function (t) {
                n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]').eq(n(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
                    $trigger: n(this)
                })
            }),
            function () {
                var t = null;
                a.on("mousedown mouseup focus blur", ".fancybox-button", function (e) {
                    switch (e.type) {
                        case "mousedown":
                            t = n(this);
                            break;
                        case "mouseup":
                            t = null;
                            break;
                        case "focusin":
                            n(".fancybox-button").removeClass("fancybox-focus"), n(this).is(t) || n(this).is("[disabled]") || n(this).addClass("fancybox-focus");
                            break;
                        case "focusout":
                            n(".fancybox-button").removeClass("fancybox-focus")
                    }
                })
            }()
    }
}(window, document, jQuery),
function (t) {
    "use strict";
    var e = {
            youtube: {
                matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                params: {
                    autoplay: 1,
                    autohide: 1,
                    fs: 1,
                    rel: 0,
                    hd: 1,
                    wmode: "transparent",
                    enablejsapi: 1,
                    html5: 1
                },
                paramPlace: 8,
                type: "iframe",
                url: "https://www.youtube-nocookie.com/embed/$4",
                thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
            },
            vimeo: {
                matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                params: {
                    autoplay: 1,
                    hd: 1,
                    show_title: 1,
                    show_byline: 1,
                    show_portrait: 0,
                    fullscreen: 1
                },
                paramPlace: 3,
                type: "iframe",
                url: "//player.vimeo.com/video/$2"
            },
            instagram: {
                matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                type: "image",
                url: "//$1/p/$2/media/?size=l"
            },
            gmap_place: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                type: "iframe",
                url: function (t) {
                    return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
                }
            },
            gmap_search: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                type: "iframe",
                url: function (t) {
                    return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
                }
            }
        },
        n = function (e, n, i) {
            if (e) return i = i || "", "object" === t.type(i) && (i = t.param(i, !0)), t.each(n, function (t, n) {
                e = e.replace("$" + t, n || "")
            }), i.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + i), e
        };
    t(document).on("objectNeedsType.fb", function (i, r, o) {
        var s, a, l, c, u, f, d, h = o.src || "",
            p = !1;
        s = t.extend(!0, {}, e, o.opts.media), t.each(s, function (e, i) {
            if (l = h.match(i.matcher)) {
                if (p = i.type, d = e, f = {}, i.paramPlace && l[i.paramPlace]) {
                    "?" == (u = l[i.paramPlace])[0] && (u = u.substring(1)), u = u.split("&");
                    for (var r = 0; r < u.length; ++r) {
                        var s = u[r].split("=", 2);
                        2 == s.length && (f[s[0]] = decodeURIComponent(s[1].replace(/\+/g, " ")))
                    }
                }
                return c = t.extend(!0, {}, i.params, o.opts[e], f), h = "function" === t.type(i.url) ? i.url.call(this, l, c, o) : n(i.url, l, c), a = "function" === t.type(i.thumb) ? i.thumb.call(this, l, c, o) : n(i.thumb, l), "youtube" === e ? h = h.replace(/&t=((\d+)m)?(\d+)s/, function (t, e, n, i) {
                    return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(i, 10))
                }) : "vimeo" === e && (h = h.replace("&%23", "#")), !1
            }
        }), p ? (o.opts.thumb || o.opts.$thumb && o.opts.$thumb.length || (o.opts.thumb = a), "iframe" === p && (o.opts = t.extend(!0, o.opts, {
            iframe: {
                preload: !1,
                attr: {
                    scrolling: "no"
                }
            }
        })), t.extend(o, {
            type: p,
            src: h,
            origSrc: o.src,
            contentSource: d,
            contentType: "image" === p ? "image" : "gmap_place" == d || "gmap_search" == d ? "map" : "video"
        })) : h && (o.type = o.opts.defaultType)
    });
    var i = {
        youtube: {
            src: "https://www.youtube.com/iframe_api",
            class: "YT",
            loading: !1,
            loaded: !1
        },
        vimeo: {
            src: "https://player.vimeo.com/api/player.js",
            class: "Vimeo",
            loading: !1,
            loaded: !1
        },
        load: function (t) {
            var e, n = this;
            this[t].loaded ? setTimeout(function () {
                n.done(t)
            }) : this[t].loading || (this[t].loading = !0, (e = document.createElement("script")).type = "text/javascript", e.src = this[t].src, "youtube" === t ? window.onYouTubeIframeAPIReady = function () {
                n[t].loaded = !0, n.done(t)
            } : e.onload = function () {
                n[t].loaded = !0, n.done(t)
            }, document.body.appendChild(e))
        },
        done: function (e) {
            var n, i;
            "youtube" === e && delete window.onYouTubeIframeAPIReady, (n = t.fancybox.getInstance()) && (i = n.current.$content.find("iframe"), "youtube" === e && void 0 !== YT && YT ? new YT.Player(i.attr("id"), {
                events: {
                    onStateChange: function (t) {
                        0 == t.data && n.next()
                    }
                }
            }) : "vimeo" === e && void 0 !== Vimeo && Vimeo && new Vimeo.Player(i).on("ended", function () {
                n.next()
            }))
        }
    };
    t(document).on({
        "afterShow.fb": function (t, e, n) {
            e.group.length > 1 && ("youtube" === n.contentSource || "vimeo" === n.contentSource) && i.load(n.contentSource)
        }
    })
}(jQuery),
function (t, e, n) {
    "use strict";
    var i = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function (e) {
            return t.setTimeout(e, 1e3 / 60)
        },
        r = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function (e) {
            t.clearTimeout(e)
        },
        o = function (e) {
            var n = [];
            for (var i in e = (e = e.originalEvent || e || t.e).touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e]) e[i].pageX ? n.push({
                x: e[i].pageX,
                y: e[i].pageY
            }) : e[i].clientX && n.push({
                x: e[i].clientX,
                y: e[i].clientY
            });
            return n
        },
        s = function (t, e, n) {
            return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
        },
        a = function (t) {
            if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || n.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;
            for (var e = 0, i = t[0].attributes, r = i.length; e < r; e++)
                if ("data-fancybox-" === i[e].nodeName.substr(0, 14)) return !0;
            return !1
        },
        l = function (e) {
            var n = t.getComputedStyle(e)["overflow-y"],
                i = t.getComputedStyle(e)["overflow-x"],
                r = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
                o = ("scroll" === i || "auto" === i) && e.scrollWidth > e.clientWidth;
            return r || o
        },
        c = function (t) {
            for (var e = !1; !(e = l(t.get(0))) && ((t = t.parent()).length && !t.hasClass("fancybox-stage") && !t.is("body")););
            return e
        },
        u = function (t) {
            var e = this;
            e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(e, "ontouchstart"))
        };
    u.prototype.destroy = function () {
        var t = this;
        t.$container.off(".fb.touch"), n(e).off(".fb.touch"), t.requestId && (r(t.requestId), t.requestId = null), t.tapped && (clearTimeout(t.tapped), t.tapped = null)
    }, u.prototype.ontouchstart = function (i) {
        var r = this,
            l = n(i.target),
            u = r.instance,
            f = u.current,
            d = f.$slide,
            h = f.$content,
            p = "touchstart" == i.type;
        if (p && r.$container.off("mousedown.fb.touch"), (!i.originalEvent || 2 != i.originalEvent.button) && d.length && l.length && !a(l) && !a(l.parent()) && (l.is("img") || !(i.originalEvent.clientX > l[0].clientWidth + l.offset().left))) {
            if (!f || u.isAnimating || f.$slide.hasClass("fancybox-animated")) return i.stopPropagation(), void i.preventDefault();
            r.realPoints = r.startPoints = o(i), r.startPoints.length && (f.touch && i.stopPropagation(), r.startEvent = i, r.canTap = !0, r.$target = l, r.$content = h, r.opts = f.opts.touch, r.isPanning = !1, r.isSwiping = !1, r.isZooming = !1, r.isScrolling = !1, r.canPan = u.canPan(), r.startTime = (new Date).getTime(), r.distanceX = r.distanceY = r.distance = 0, r.canvasWidth = Math.round(d[0].clientWidth), r.canvasHeight = Math.round(d[0].clientHeight), r.contentLastPos = null, r.contentStartPos = n.fancybox.getTranslate(r.$content) || {
                top: 0,
                left: 0
            }, r.sliderStartPos = n.fancybox.getTranslate(d), r.stagePos = n.fancybox.getTranslate(u.$refs.stage), r.sliderStartPos.top -= r.stagePos.top, r.sliderStartPos.left -= r.stagePos.left, r.contentStartPos.top -= r.stagePos.top, r.contentStartPos.left -= r.stagePos.left, n(e).off(".fb.touch").on(p ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(r, "ontouchend")).on(p ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(r, "ontouchmove")), n.fancybox.isMobile && e.addEventListener("scroll", r.onscroll, !0), ((r.opts || r.canPan) && (l.is(r.$stage) || r.$stage.find(l).length) || (l.is(".fancybox-image") && i.preventDefault(), n.fancybox.isMobile && l.parents(".fancybox-caption").length)) && (r.isScrollable = c(l) || c(l.parent()), n.fancybox.isMobile && r.isScrollable || i.preventDefault(), (1 === r.startPoints.length || f.hasError) && (r.canPan ? (n.fancybox.stop(r.$content), r.isPanning = !0) : r.isSwiping = !0, r.$container.addClass("fancybox-is-grabbing")), 2 === r.startPoints.length && "image" === f.type && (f.isLoaded || f.$ghost) && (r.canTap = !1, r.isSwiping = !1, r.isPanning = !1, r.isZooming = !0, n.fancybox.stop(r.$content), r.centerPointStartX = .5 * (r.startPoints[0].x + r.startPoints[1].x) - n(t).scrollLeft(), r.centerPointStartY = .5 * (r.startPoints[0].y + r.startPoints[1].y) - n(t).scrollTop(), r.percentageOfImageAtPinchPointX = (r.centerPointStartX - r.contentStartPos.left) / r.contentStartPos.width, r.percentageOfImageAtPinchPointY = (r.centerPointStartY - r.contentStartPos.top) / r.contentStartPos.height, r.startDistanceBetweenFingers = s(r.startPoints[0], r.startPoints[1]))))
        }
    }, u.prototype.onscroll = function (t) {
        this.isScrolling = !0, e.removeEventListener("scroll", this.onscroll, !0)
    }, u.prototype.ontouchmove = function (t) {
        var e = this;
        return void 0 !== t.originalEvent.buttons && 0 === t.originalEvent.buttons ? void e.ontouchend(t) : e.isScrolling ? void(e.canTap = !1) : (e.newPoints = o(t), void((e.opts || e.canPan) && e.newPoints.length && e.newPoints.length && (e.isSwiping && !0 === e.isSwiping || t.preventDefault(), e.distanceX = s(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = s(e.newPoints[0], e.startPoints[0], "y"), e.distance = s(e.newPoints[0], e.startPoints[0]), e.distance > 0 && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))))
    }, u.prototype.onSwipe = function (e) {
        var o, s = this,
            a = s.instance,
            l = s.isSwiping,
            c = s.sliderStartPos.left || 0;
        if (!0 !== l) "x" == l && (s.distanceX > 0 && (s.instance.group.length < 2 || 0 === s.instance.current.index && !s.instance.current.opts.loop) ? c += Math.pow(s.distanceX, .8) : s.distanceX < 0 && (s.instance.group.length < 2 || s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop) ? c -= Math.pow(-s.distanceX, .8) : c += s.distanceX), s.sliderLastPos = {
            top: "x" == l ? 0 : s.sliderStartPos.top + s.distanceY,
            left: c
        }, s.requestId && (r(s.requestId), s.requestId = null), s.requestId = i(function () {
            s.sliderLastPos && (n.each(s.instance.slides, function (t, e) {
                var i = e.pos - s.instance.currPos;
                n.fancybox.setTranslate(e.$slide, {
                    top: s.sliderLastPos.top,
                    left: s.sliderLastPos.left + i * s.canvasWidth + i * e.opts.gutter
                })
            }), s.$container.addClass("fancybox-is-sliding"))
        });
        else if (Math.abs(s.distance) > 10) {
            if (s.canTap = !1, a.group.length < 2 && s.opts.vertical ? s.isSwiping = "y" : a.isDragging || !1 === s.opts.vertical || "auto" === s.opts.vertical && n(t).width() > 800 ? s.isSwiping = "x" : (o = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) / Math.PI), s.isSwiping = o > 45 && o < 135 ? "y" : "x"), "y" === s.isSwiping && n.fancybox.isMobile && s.isScrollable) return void(s.isScrolling = !0);
            a.isDragging = s.isSwiping, s.startPoints = s.newPoints, n.each(a.slides, function (t, e) {
                var i, r;
                n.fancybox.stop(e.$slide), i = n.fancybox.getTranslate(e.$slide), r = n.fancybox.getTranslate(a.$refs.stage), e.$slide.css({
                    transform: "",
                    opacity: "",
                    "transition-duration": ""
                }).removeClass("fancybox-animated").removeClass(function (t, e) {
                    return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                }), e.pos === a.current.pos && (s.sliderStartPos.top = i.top - r.top, s.sliderStartPos.left = i.left - r.left), n.fancybox.setTranslate(e.$slide, {
                    top: i.top - r.top,
                    left: i.left - r.left
                })
            }), a.SlideShow && a.SlideShow.isActive && a.SlideShow.stop()
        }
    }, u.prototype.onPan = function () {
        var t = this;
        s(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5) ? t.startPoints = t.newPoints : (t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId && r(t.requestId), t.requestId = i(function () {
            n.fancybox.setTranslate(t.$content, t.contentLastPos)
        }))
    }, u.prototype.limitMovement = function () {
        var t, e, n, i, r, o, s = this,
            a = s.canvasWidth,
            l = s.canvasHeight,
            c = s.distanceX,
            u = s.distanceY,
            f = s.contentStartPos,
            d = f.left,
            h = f.top,
            p = f.width,
            g = f.height;
        return r = p > a ? d + c : d, o = h + u, t = Math.max(0, .5 * a - .5 * p), e = Math.max(0, .5 * l - .5 * g), n = Math.min(a - p, .5 * a - .5 * p), i = Math.min(l - g, .5 * l - .5 * g), c > 0 && r > t && (r = t - 1 + Math.pow(-t + d + c, .8) || 0), c < 0 && r < n && (r = n + 1 - Math.pow(n - d - c, .8) || 0), u > 0 && o > e && (o = e - 1 + Math.pow(-e + h + u, .8) || 0), u < 0 && o < i && (o = i + 1 - Math.pow(i - h - u, .8) || 0), {
            top: o,
            left: r
        }
    }, u.prototype.limitPosition = function (t, e, n, i) {
        var r = this.canvasWidth,
            o = this.canvasHeight;
        return n > r ? t = (t = t > 0 ? 0 : t) < r - n ? r - n : t : t = Math.max(0, r / 2 - n / 2), i > o ? e = (e = e > 0 ? 0 : e) < o - i ? o - i : e : e = Math.max(0, o / 2 - i / 2), {
            top: e,
            left: t
        }
    }, u.prototype.onZoom = function () {
        var e = this,
            o = e.contentStartPos,
            a = o.width,
            l = o.height,
            c = o.left,
            u = o.top,
            f = s(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers,
            d = Math.floor(a * f),
            h = Math.floor(l * f),
            p = (a - d) * e.percentageOfImageAtPinchPointX,
            g = (l - h) * e.percentageOfImageAtPinchPointY,
            m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
            v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
            y = m - e.centerPointStartX,
            b = {
                top: u + (g + (v - e.centerPointStartY)),
                left: c + (p + y),
                scaleX: f,
                scaleY: f
            };
        e.canTap = !1, e.newWidth = d, e.newHeight = h, e.contentLastPos = b, e.requestId && r(e.requestId), e.requestId = i(function () {
            n.fancybox.setTranslate(e.$content, e.contentLastPos)
        })
    }, u.prototype.ontouchend = function (t) {
        var i = this,
            s = i.isSwiping,
            a = i.isPanning,
            l = i.isZooming,
            c = i.isScrolling;
        if (i.endPoints = o(t), i.dMs = Math.max((new Date).getTime() - i.startTime, 1), i.$container.removeClass("fancybox-is-grabbing"), n(e).off(".fb.touch"), e.removeEventListener("scroll", i.onscroll, !0), i.requestId && (r(i.requestId), i.requestId = null), i.isSwiping = !1, i.isPanning = !1, i.isZooming = !1, i.isScrolling = !1, i.instance.isDragging = !1, i.canTap) return i.onTap(t);
        i.speed = 100, i.velocityX = i.distanceX / i.dMs * .5, i.velocityY = i.distanceY / i.dMs * .5, a ? i.endPanning() : l ? i.endZooming() : i.endSwiping(s, c)
    }, u.prototype.endSwiping = function (t, e) {
        var i = this,
            r = !1,
            o = i.instance.group.length,
            s = Math.abs(i.distanceX),
            a = "x" == t && o > 1 && (i.dMs > 130 && s > 10 || s > 50);
        i.sliderLastPos = null, "y" == t && !e && Math.abs(i.distanceY) > 50 ? (n.fancybox.animate(i.instance.current.$slide, {
            top: i.sliderStartPos.top + i.distanceY + 150 * i.velocityY,
            opacity: 0
        }, 200), r = i.instance.close(!0, 250)) : a && i.distanceX > 0 ? r = i.instance.previous(300) : a && i.distanceX < 0 && (r = i.instance.next(300)), !1 !== r || "x" != t && "y" != t || i.instance.centerSlide(200), i.$container.removeClass("fancybox-is-sliding")
    }, u.prototype.endPanning = function () {
        var t, e, i, r = this;
        r.contentLastPos && (!1 === r.opts.momentum || r.dMs > 350 ? (t = r.contentLastPos.left, e = r.contentLastPos.top) : (t = r.contentLastPos.left + 500 * r.velocityX, e = r.contentLastPos.top + 500 * r.velocityY), (i = r.limitPosition(t, e, r.contentStartPos.width, r.contentStartPos.height)).width = r.contentStartPos.width, i.height = r.contentStartPos.height, n.fancybox.animate(r.$content, i, 366))
    }, u.prototype.endZooming = function () {
        var t, e, i, r, o = this,
            s = o.instance.current,
            a = o.newWidth,
            l = o.newHeight;
        o.contentLastPos && (t = o.contentLastPos.left, r = {
            top: e = o.contentLastPos.top,
            left: t,
            width: a,
            height: l,
            scaleX: 1,
            scaleY: 1
        }, n.fancybox.setTranslate(o.$content, r), a < o.canvasWidth && l < o.canvasHeight ? o.instance.scaleToFit(150) : a > s.width || l > s.height ? o.instance.scaleToActual(o.centerPointStartX, o.centerPointStartY, 150) : (i = o.limitPosition(t, e, a, l), n.fancybox.animate(o.$content, i, 150)))
    }, u.prototype.onTap = function (e) {
        var i, r = this,
            s = n(e.target),
            a = r.instance,
            l = a.current,
            c = e && o(e) || r.startPoints,
            u = c[0] ? c[0].x - n(t).scrollLeft() - r.stagePos.left : 0,
            f = c[0] ? c[0].y - n(t).scrollTop() - r.stagePos.top : 0,
            d = function (t) {
                var i = l.opts[t];
                if (n.isFunction(i) && (i = i.apply(a, [l, e])), i) switch (i) {
                    case "close":
                        a.close(r.startEvent);
                        break;
                    case "toggleControls":
                        a.toggleControls();
                        break;
                    case "next":
                        a.next();
                        break;
                    case "nextOrClose":
                        a.group.length > 1 ? a.next() : a.close(r.startEvent);
                        break;
                    case "zoom":
                        "image" == l.type && (l.isLoaded || l.$ghost) && (a.canPan() ? a.scaleToFit() : a.isScaledDown() ? a.scaleToActual(u, f) : a.group.length < 2 && a.close(r.startEvent))
                }
            };
        if ((!e.originalEvent || 2 != e.originalEvent.button) && (s.is("img") || !(u > s[0].clientWidth + s.offset().left))) {
            if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) i = "Outside";
            else if (s.is(".fancybox-slide")) i = "Slide";
            else {
                if (!a.current.$content || !a.current.$content.find(s).addBack().filter(s).length) return;
                i = "Content"
            }
            if (r.tapped) {
                if (clearTimeout(r.tapped), r.tapped = null, Math.abs(u - r.tapX) > 50 || Math.abs(f - r.tapY) > 50) return this;
                d("dblclick" + i)
            } else r.tapX = u, r.tapY = f, l.opts["dblclick" + i] && l.opts["dblclick" + i] !== l.opts["click" + i] ? r.tapped = setTimeout(function () {
                r.tapped = null, a.isAnimating || d("click" + i)
            }, 500) : d("click" + i);
            return this
        }
    }, n(e).on("onActivate.fb", function (t, e) {
        e && !e.Guestures && (e.Guestures = new u(e))
    }).on("beforeClose.fb", function (t, e) {
        e && e.Guestures && e.Guestures.destroy()
    })
}(window, document, jQuery),
function (t, e) {
    "use strict";
    e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
            slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'
        },
        slideShow: {
            autoStart: !1,
            speed: 3e3,
            progress: !0
        }
    });
    var n = function (t) {
        this.instance = t, this.init()
    };
    e.extend(n.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        init: function () {
            var t = this,
                n = t.instance,
                i = n.group[n.currIndex].opts.slideShow;
            t.$button = n.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
                t.toggle()
            }), n.group.length < 2 || !i ? t.$button.hide() : i.progress && (t.$progress = e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner))
        },
        set: function (t) {
            var n = this,
                i = n.instance,
                r = i.current;
            r && (!0 === t || r.opts.loop || i.currIndex < i.group.length - 1) ? n.isActive && "video" !== r.contentType && (n.$progress && e.fancybox.animate(n.$progress.show(), {
                scaleX: 1
            }, r.opts.slideShow.speed), n.timer = setTimeout(function () {
                i.current.opts.loop || i.current.index != i.group.length - 1 ? i.next() : i.jumpTo(0)
            }, r.opts.slideShow.speed)) : (n.stop(), i.idleSecondsCounter = 0, i.showControls())
        },
        clear: function () {
            var t = this;
            clearTimeout(t.timer), t.timer = null, t.$progress && t.$progress.removeAttr("style").hide()
        },
        start: function () {
            var t = this,
                e = t.instance.current;
            e && (t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), t.isActive = !0, e.isComplete && t.set(!0), t.instance.trigger("onSlideShowChange", !0))
        },
        stop: function () {
            var t = this,
                e = t.instance.current;
            t.clear(), t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), t.isActive = !1, t.instance.trigger("onSlideShowChange", !1), t.$progress && t.$progress.removeAttr("style").hide()
        },
        toggle: function () {
            var t = this;
            t.isActive ? t.stop() : t.start()
        }
    }), e(t).on({
        "onInit.fb": function (t, e) {
            e && !e.SlideShow && (e.SlideShow = new n(e))
        },
        "beforeShow.fb": function (t, e, n, i) {
            var r = e && e.SlideShow;
            i ? r && n.opts.slideShow.autoStart && r.start() : r && r.isActive && r.clear()
        },
        "afterShow.fb": function (t, e, n) {
            var i = e && e.SlideShow;
            i && i.isActive && i.set()
        },
        "afterKeydown.fb": function (n, i, r, o, s) {
            var a = i && i.SlideShow;
            !a || !r.opts.slideShow || 80 !== s && 32 !== s || e(t.activeElement).is("button,a,input") || (o.preventDefault(), a.toggle())
        },
        "beforeClose.fb onDeactivate.fb": function (t, e) {
            var n = e && e.SlideShow;
            n && n.stop()
        }
    }), e(t).on("visibilitychange", function () {
        var n = e.fancybox.getInstance(),
            i = n && n.SlideShow;
        i && i.isActive && (t.hidden ? i.clear() : i.set())
    })
}(document, jQuery),
function (t, e) {
    "use strict";
    var n = function () {
        for (var e = [
                ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
            ], n = {}, i = 0; i < e.length; i++) {
            var r = e[i];
            if (r && r[1] in t) {
                for (var o = 0; o < r.length; o++) n[e[0][o]] = r[o];
                return n
            }
        }
        return !1
    }();
    if (n) {
        var i = {
            request: function (e) {
                (e = e || t.documentElement)[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
            },
            exit: function () {
                t[n.exitFullscreen]()
            },
            toggle: function (e) {
                e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e)
            },
            isFullscreen: function () {
                return Boolean(t[n.fullscreenElement])
            },
            enabled: function () {
                return Boolean(t[n.fullscreenEnabled])
            }
        };
        e.extend(!0, e.fancybox.defaults, {
            btnTpl: {
                fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'
            },
            fullScreen: {
                autoStart: !1
            }
        }), e(t).on(n.fullscreenchange, function () {
            var t = i.isFullscreen(),
                n = e.fancybox.getInstance();
            n && (n.current && "image" === n.current.type && n.isAnimating && (n.isAnimating = !1, n.update(!0, !0, 0), n.isComplete || n.complete()), n.trigger("onFullscreenChange", t), n.$refs.container.toggleClass("fancybox-is-fullscreen", t), n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t))
        })
    }
    e(t).on({
        "onInit.fb": function (t, e) {
            n ? e && e.group[e.currIndex].opts.fullScreen ? (e.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (t) {
                t.stopPropagation(), t.preventDefault(), i.toggle()
            }), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && i.request(), e.FullScreen = i) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide() : e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove()
        },
        "afterKeydown.fb": function (t, e, n, i, r) {
            e && e.FullScreen && 70 === r && (i.preventDefault(), e.FullScreen.toggle())
        },
        "beforeClose.fb": function (t, e) {
            e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && i.exit()
        }
    })
}(document, jQuery),
function (t, e) {
    "use strict";
    var n = "fancybox-thumbs";
    e.fancybox.defaults = e.extend(!0, {
        btnTpl: {
            thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'
        },
        thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y"
        }
    }, e.fancybox.defaults);
    var i = function (t) {
        this.init(t)
    };
    e.extend(i.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        isActive: !1,
        init: function (t) {
            var e = this,
                n = t.group,
                i = 0;
            e.instance = t, e.opts = n[t.currIndex].opts.thumbs, t.Thumbs = e, e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]");
            for (var r = 0, o = n.length; r < o && (n[r].thumb && i++, !(i > 1)); r++);
            i > 1 && e.opts ? (e.$button.removeAttr("style").on("click", function () {
                e.toggle()
            }), e.isActive = !0) : e.$button.hide()
        },
        create: function () {
            var t, i = this,
                r = i.instance,
                o = i.opts.parentEl,
                s = [];
            i.$grid || (i.$grid = e('<div class="' + n + " " + n + "-" + i.opts.axis + '"></div>').appendTo(r.$refs.container.find(o).addBack().filter(o)), i.$grid.on("click", "a", function () {
                r.jumpTo(e(this).attr("data-index"))
            })), i.$list || (i.$list = e('<div class="' + n + '__list">').appendTo(i.$grid)), e.each(r.group, function (e, n) {
                (t = n.thumb) || "image" !== n.type || (t = n.src), s.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (t && t.length ? ' style="background-image:url(' + t + ')"' : 'class="fancybox-thumbs-missing"') + "></a>")
            }), i.$list[0].innerHTML = s.join(""), "x" === i.opts.axis && i.$list.width(parseInt(i.$grid.css("padding-right"), 10) + r.group.length * i.$list.children().eq(0).outerWidth(!0))
        },
        focus: function (t) {
            var e, n, i = this,
                r = i.$list,
                o = i.$grid;
            i.instance.current && (n = (e = r.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + i.instance.current.index + '"]').addClass("fancybox-thumbs-active")).position(), "y" === i.opts.axis && (n.top < 0 || n.top > r.height() - e.outerHeight()) ? r.stop().animate({
                scrollTop: r.scrollTop() + n.top
            }, t) : "x" === i.opts.axis && (n.left < o.scrollLeft() || n.left > o.scrollLeft() + (o.width() - e.outerWidth())) && r.parent().stop().animate({
                scrollLeft: n.left
            }, t))
        },
        update: function () {
            var t = this;
            t.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), t.isVisible ? (t.$grid || t.create(), t.instance.trigger("onThumbsShow"), t.focus(0)) : t.$grid && t.instance.trigger("onThumbsHide"), t.instance.update()
        },
        hide: function () {
            this.isVisible = !1, this.update()
        },
        show: function () {
            this.isVisible = !0, this.update()
        },
        toggle: function () {
            this.isVisible = !this.isVisible, this.update()
        }
    }), e(t).on({
        "onInit.fb": function (t, e) {
            var n;
            e && !e.Thumbs && ((n = new i(e)).isActive && !0 === n.opts.autoStart && n.show())
        },
        "beforeShow.fb": function (t, e, n, i) {
            var r = e && e.Thumbs;
            r && r.isVisible && r.focus(i ? 0 : 250)
        },
        "afterKeydown.fb": function (t, e, n, i, r) {
            var o = e && e.Thumbs;
            o && o.isActive && 71 === r && (i.preventDefault(), o.toggle())
        },
        "beforeClose.fb": function (t, e) {
            var n = e && e.Thumbs;
            n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide()
        }
    })
}(document, jQuery),
function (t, e) {
    "use strict";
    e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
            share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'
        },
        share: {
            url: function (t, e) {
                return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location
            },
            tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/websitevalleyuk"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
        }
    }), e(t).on("click", "[data-fancybox-share]", function () {
        var t, n, i = e.fancybox.getInstance(),
            r = i.current || null;
        r && ("function" === e.type(r.opts.share.url) && (t = r.opts.share.url.apply(r, [i, r])), n = r.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === r.type ? encodeURIComponent(r.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, function (t) {
            var e = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;",
                "`": "&#x60;",
                "=": "&#x3D;"
            };
            return String(t).replace(/[&<>"'`=\/]/g, function (t) {
                return e[t]
            })
        }(t)).replace(/\{\{descr\}\}/g, i.$caption ? encodeURIComponent(i.$caption.text()) : ""), e.fancybox.open({
            src: i.translate(i, n),
            type: "html",
            opts: {
                touch: !1,
                animationEffect: !1,
                afterLoad: function (t, e) {
                    i.$refs.container.one("beforeClose.fb", function () {
                        t.close(null, 0)
                    }), e.$content.find(".fancybox-share__button").click(function () {
                        return window.open(this.href, "Share", "width=550, height=450"), !1
                    })
                },
                mobile: {
                    autoFocus: !1
                }
            }
        }))
    })
}(document, jQuery),
function (t, e, n) {
    "use strict";

    function i() {
        var e = t.location.hash.substr(1),
            n = e.split("-"),
            i = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) && parseInt(n.pop(-1), 10) || 1;
        return {
            hash: e,
            index: i < 1 ? 1 : i,
            gallery: n.join("-")
        }
    }

    function r(t) {
        "" !== t.gallery && n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1).focus().trigger("click.fb-start")
    }

    function o(t) {
        var e, n;
        return !!t && ("" !== (n = (e = t.current ? t.current.opts : t.opts).hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : "")) && n)
    }
    n.escapeSelector || (n.escapeSelector = function (t) {
        return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function (t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        })
    }), n(function () {
        !1 !== n.fancybox.defaults.hash && (n(e).on({
            "onInit.fb": function (t, e) {
                var n, r;
                !1 !== e.group[e.currIndex].opts.hash && (n = i(), (r = o(e)) && n.gallery && r == n.gallery && (e.currIndex = n.index - 1))
            },
            "beforeShow.fb": function (n, i, r, s) {
                var a;
                r && !1 !== r.opts.hash && (a = o(i)) && (i.currentHash = a + (i.group.length > 1 ? "-" + (r.index + 1) : ""), t.location.hash !== "#" + i.currentHash && (s && !i.origHash && (i.origHash = t.location.hash), i.hashTimer && clearTimeout(i.hashTimer), i.hashTimer = setTimeout(function () {
                    "replaceState" in t.history ? (t.history[s ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + i.currentHash), s && (i.hasCreatedHistory = !0)) : t.location.hash = i.currentHash, i.hashTimer = null
                }, 300)))
            },
            "beforeClose.fb": function (n, i, r) {
                r && !1 !== r.opts.hash && (clearTimeout(i.hashTimer), i.currentHash && i.hasCreatedHistory ? t.history.back() : i.currentHash && ("replaceState" in t.history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + (i.origHash || "")) : t.location.hash = i.origHash), i.currentHash = null)
            }
        }), n(t).on("hashchange.fb", function () {
            var t = i(),
                e = null;
            n.each(n(".fancybox-container").get().reverse(), function (t, i) {
                var r = n(i).data("FancyBox");
                if (r && r.currentHash) return e = r, !1
            }), e ? e.currentHash === t.gallery + "-" + t.index || 1 === t.index && e.currentHash == t.gallery || (e.currentHash = null, e.close()) : "" !== t.gallery && r(t)
        }), setTimeout(function () {
            n.fancybox.getInstance() || r(i())
        }, 50))
    })
}(window, document, jQuery),
function (t, e) {
    "use strict";
    var n = (new Date).getTime();
    e(t).on({
        "onInit.fb": function (t, e, i) {
            e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (t) {
                var i = e.current,
                    r = (new Date).getTime();
                e.group.length < 2 || !1 === i.opts.wheel || "auto" === i.opts.wheel && "image" !== i.type || (t.preventDefault(), t.stopPropagation(), i.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t, r - n < 250 || (n = r, e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())))
            })
        }
    })
}(document, jQuery),
function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function (t) {
    "use strict";

    function e(t) {
        return t
    }

    function n() {
        return "undefined" != typeof window
    }

    function i() {
        return D || n() && (D = window.gsap) && D.registerPlugin && D
    }

    function r(t) {
        return !!~L.indexOf(t)
    }

    function o(t, e) {
        var n = e.s;
        return function (e) {
            return arguments.length ? t[n] = e : t[n]
        }
    }

    function s(t, e) {
        var n = e.s,
            i = e.d2;
        return (n = "scroll" + i) && r(t) ? Math.max(N[n], $[n]) - (I["inner" + i] || N["client" + i] || $["client" + i]) : t[n] - t["offset" + i]
    }

    function a(t) {
        return "string" == typeof t
    }

    function l(t) {
        return "function" == typeof t
    }

    function c(t) {
        return "number" == typeof t
    }

    function u(t) {
        return "object" == typeof t
    }

    function f(t) {
        return I.getComputedStyle(t)
    }

    function d(t, e) {
        for (var n in e) n in t || (t[n] = e[n]);
        return t
    }

    function h(t, e) {
        var n = e && "matrix(1, 0, 0, 1, 0, 0)" !== f(t)[Y] && D.to(t, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0
            }).progress(1),
            i = t.getBoundingClientRect();
        return n && n.progress(0).kill(), i
    }

    function p(t, e) {
        var n = e.d2;
        return t["offset" + n] || t["client" + n] || 0
    }

    function g(t, e, n, i) {
        return n.split(",").forEach(function (n) {
            return t(e, n, i)
        })
    }

    function m(t, e, n) {
        return t.addEventListener(e, n, {
            passive: !0
        })
    }

    function v(t, e, n) {
        return t.removeEventListener(e, n)
    }

    function y(t, e) {
        if (a(t)) {
            var n = t.indexOf("="),
                i = ~n ? (t.charAt(n - 1) + 1) * parseFloat(t.substr(n + 1)) : 0;
            i && (t.indexOf("%") > n && (i *= e / 100), t = t.substr(0, n - 1)), t = i + (t in bt ? bt[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)
        }
        return t
    }

    function b(t, e, n, i, o, s, a) {
        var l = o.startColor,
            c = o.endColor,
            u = o.fontSize,
            f = o.indent,
            d = o.fontWeight,
            h = P.createElement("div"),
            p = r(n),
            g = -1 !== t.indexOf("scroller"),
            m = p ? $ : n,
            v = -1 !== t.indexOf("start"),
            y = v ? l : c,
            b = "border-color:" + y + ";font-size:" + u + ";color:" + y + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return b += "position:" + (g && p ? "fixed;" : "absolute;"), !g && p || (b += (i === mt ? nt : it) + ":" + (s + parseFloat(f)) + "px;"), a && (b += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), h._isStart = v, h.setAttribute("class", "gsap-marker-" + t), h.style.cssText = b, h.innerText = e || 0 === e ? t + "-" + e : t, m.insertBefore(h, m.children[0]), h._offset = h["offset" + i.op.d2], _t(h, 0, i, p, v), h
    }

    function _() {
        return R = R || j(St)
    }

    function w() {
        R || (R = j(St), Q || Et("scrollStart"), Q = V())
    }

    function x() {
        return !q && 200 < V() - Q && M.restart(!0)
    }

    function T(t) {
        for (var e = Et("refreshInit"), n = wt.length, i = n; i--;) wt[i].scroll.rec = wt[i].scroll();
        for (i = 0; i < n; i++) wt[i] && wt[i].refresh(!0 !== t);
        for (e.forEach(function (t) {
                return t && t.render && t.render(-1)
            }), i = wt.length; i--;) wt[i].scroll.rec = 0;
        Et("refresh")
    }

    function C(t, e, n) {
        if (Ot(n), t.parentNode === e) {
            var i = e.parentNode;
            i && (i.insertBefore(t, e), i.removeChild(e))
        }
    }

    function E(t, e, n) {
        if (t.parentNode !== e) {
            for (var i, r = At.length, o = e.style, s = t.style; r--;) o[i = At[r]] = n[i];
            o.position = "absolute" === n.position ? "absolute" : "relative", s[it] = s[nt] = "auto", o.overflow = "visible", o.boxSizing = "border-box", o[rt] = p(t, gt) + pt, o[ot] = p(t, mt) + pt, o[ut] = s[ft] = s[et] = s[tt] = "0", s[rt] = n[rt], s[ot] = n[ot], s[ut] = n[ut], t.parentNode.insertBefore(e, t), e.appendChild(t)
        }
    }

    function S(t) {
        for (var e = kt.length, n = t.style, i = [], r = 0; r < e; r++) i.push(kt[r], n[kt[r]]);
        return i.t = t, i
    }

    function A(t, e, n, i, r, o, s, u, d, p, g, m) {
        if (l(t) && (t = t(u)), a(t) && "max" === t.substr(0, 3) && (t = m + ("=" === t.charAt(4) ? y("0" + t.substr(3), n) : 0)), c(t)) s && _t(s, n, i, g, !0);
        else {
            l(e) && (e = e(u));
            var v, b, _, w = F(e)[0] || $,
                x = h(w) || {},
                T = t.split(" ");
            x && (x.left || x.top) || "none" !== f(w).display || (_ = w.style.display, w.style.display = "block", x = h(w), _ ? w.style.display = _ : w.style.removeProperty("display")), v = y(T[0], x[i.d]), b = y(T[1] || "0", n), t = x[i.p] - d[i.p] - p + v + r - b, s && _t(s, b, i, g, n - b < 20 || s._isStart && 20 < b), n -= n - b
        }
        if (o) {
            var C = t + n,
                E = o._isStart;
            m = "scroll" + i.d2, _t(o, C, i, g, E && 20 < C || !E && (g ? Math.max($[m], N[m]) : o.parentNode[m]) <= C + 1), g && (d = h(s), g && (o.style[i.op.p] = d[i.op.p] - i.op.m - o._offset + pt))
        }
        return Math.round(t)
    }

    function k(t, e) {
        var n, i = r(t) ? e.sc : o(t, e),
            s = "_scroll" + e.p2;
        return t[s] = i,
            function e(r, o, a, l, c) {
                var u = e.tween,
                    f = o.onComplete;
                return u && u.kill(), n = i(), o[s] = r, (o.modifiers = {})[s] = function (t) {
                    return i() !== n ? (u.kill(), e.tween = 0, t = i()) : l && (t = a + l * u.ratio + c * u.ratio * u.ratio), n = Math.round(t)
                }, o.onComplete = function () {
                    e.tween = 0, f && f.call(u)
                }, u = e.tween = D.to(t, o)
            }
    }
    var D, O, I, P, N, $, L, M, j, R, F, H, z, B, q, W, Y, U = 1,
        V = Date.now,
        X = V(),
        Q = 0,
        K = 1,
        G = Math.abs,
        Z = "scrollLeft",
        J = "scrollTop",
        tt = "left",
        et = "top",
        nt = "right",
        it = "bottom",
        rt = "width",
        ot = "height",
        st = "Right",
        at = "Left",
        lt = "Top",
        ct = "Bottom",
        ut = "padding",
        ft = "margin",
        dt = "Width",
        ht = "Height",
        pt = "px",
        gt = {
            s: Z,
            p: tt,
            p2: at,
            os: nt,
            os2: st,
            d: rt,
            d2: dt,
            a: "x",
            sc: function (t) {
                return arguments.length ? I.scrollTo(t, mt.sc()) : I.pageXOffset || P[Z] || N[Z] || $[Z] || 0
            }
        },
        mt = {
            s: J,
            p: et,
            p2: lt,
            os: it,
            os2: ct,
            d: ot,
            d2: ht,
            a: "y",
            op: gt,
            sc: function (t) {
                return arguments.length ? I.scrollTo(gt.sc(), t) : I.pageYOffset || P[J] || N[J] || $[J] || 0
            }
        },
        vt = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal"
        },
        yt = {
            toggleActions: "play",
            anticipatePin: 0
        },
        bt = {
            top: 0,
            left: 0,
            center: .5,
            bottom: 1,
            right: 1
        },
        _t = function (t, e, n, i, r) {
            var o = {},
                s = n[r ? "os2" : "p2"],
                a = n[r ? "p2" : "os2"];
            t._isFlipped = r, o[n.a + "Percent"] = r ? -100 : 0, o[n.a] = r ? 1 : 0, o["border" + s + dt] = 1, o["border" + a + dt] = 0, o[n.p] = e, D.set(t, o)
        },
        wt = [],
        xt = {},
        Tt = {},
        Ct = [],
        Et = function (t) {
            return Tt[t] && Tt[t].map(function (t) {
                return t()
            }) || Ct
        },
        St = function () {
            var t = wt.length,
                e = 0,
                n = V(),
                i = 50 <= n - X;
            for (i && (Q && !W && 200 < n - Q && (Q = 0, Et("scrollEnd")), z = X, X = n); e < t; e++) wt[e] && wt[e].update(0, i);
            R = 0
        },
        At = [tt, et, it, nt, ft + ct, ft + st, ft + lt, ft + at, "display", "flexShrink"],
        kt = At.concat([rt, ot, "boxSizing", "max" + dt, "max" + ht, "position", ft, ut, ut + lt, ut + st, ut + ct, ut + at]),
        Dt = /([A-Z])/g,
        Ot = function (t) {
            for (var e, n, i = t.t.style, r = t.length, o = 0; o < r; o += 2) n = t[o + 1], e = t[o], n ? i[e] = n : i[e] && i.removeProperty(e.replace(Dt, "-$1").toLowerCase())
        },
        It = {
            left: 0,
            top: 0
        },
        Pt = /(?:webkit|moz|length)/i;
    gt.op = mt;
    var Nt = ($t.prototype.init = function (t, n) {
        if (this.progress = 0, this.vars && this.kill(1), K) {
            var i, g, _, T, O, N, L, M, j, R, B, Y, X, Z, J, tt, et, nt, it, ht, bt, _t, Tt, Ct, Et, St, At, kt, Dt, Nt, Lt, Mt, jt, Rt, Ft, Ht, zt = (t = d(a(t) || c(t) || t.nodeType ? {
                    trigger: t
                } : t, yt)).horizontal ? gt : mt,
                Bt = t.onUpdate,
                qt = t.toggleClass,
                Wt = t.id,
                Yt = t.onToggle,
                Ut = t.onRefresh,
                Vt = t.scrub,
                Xt = t.trigger,
                Qt = t.pin,
                Kt = t.pinSpacing,
                Gt = t.invalidateOnRefresh,
                Zt = t.anticipatePin,
                Jt = t.onScrubComplete,
                te = t.onSnapComplete,
                ee = t.once,
                ne = t.snap,
                ie = t.pinReparent,
                re = !Vt && 0 !== Vt,
                oe = F(t.scroller || I)[0],
                se = D.core.getCache(oe),
                ae = r(oe),
                le = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                ce = re && (ee ? "play" : t.toggleActions).split(" "),
                ue = "markers" in t ? t.markers : yt.markers,
                fe = ae ? 0 : parseFloat(f(oe)["border" + zt.p2 + dt]) || 0,
                de = this,
                he = function t() {
                    return $t.removeEventListener("scrollEnd", t) || de.refresh()
                },
                pe = t.onRefreshInit && function () {
                    return t.onRefreshInit(de)
                };
            Zt *= 45, wt.push(de), de.scroller = oe, de.scroll = ae ? zt.sc : o(oe, zt), O = de.scroll(), de.vars = t, n = n || t.animation, se.tweenScroll = se.tweenScroll || {
                top: k(oe, mt),
                left: k(oe, gt)
            }, de.tweenTo = i = se.tweenScroll[zt.p], n && (n.vars.lazy = !1, n._initted || !1 !== n.vars.immediateRender && n.render(-.01, !0, !0), de.animation = n.pause(), n.scrollTrigger = de, (jt = c(Vt) && Vt) && (Mt = D.to(n, {
                ease: "power3",
                duration: jt,
                onComplete: function () {
                    return Jt && Jt(de)
                }
            })), Dt = 0, Wt = Wt || n.vars.id), ne && (u(ne) || (ne = {
                snapTo: ne
            }), _ = l(ne.snapTo) ? ne.snapTo : "labels" === ne.snapTo ? function (t) {
                return function (e) {
                    var n, i = [],
                        r = t.labels,
                        o = t.duration();
                    for (n in r) i.push(r[n] / o);
                    return D.utils.snap(i, e)
                }
            }(n) : D.utils.snap(ne.snapTo), Rt = u(Rt = ne.duration || {
                min: .1,
                max: 2
            }) ? H(Rt.min, Rt.max) : H(Rt, Rt), Ft = D.delayedCall(ne.delay || jt / 2 || .1, function () {
                if (!Q || Q === Lt && !W) {
                    var t = n && !re ? n.totalProgress() : de.progress,
                        e = (t - Nt) / (V() - z) * 1e3 || 0,
                        r = G(e / 2) * e / .185,
                        o = t + r,
                        s = H(0, 1, _(o, de)),
                        a = s - t - r,
                        l = de.scroll(),
                        c = Math.round(L + s * Z),
                        u = i.tween;
                    if (l <= M && L <= l) {
                        if (u && !u._initted) {
                            if (u.data <= Math.abs(c - l)) return;
                            u.kill()
                        }
                        i(c, {
                            duration: Rt(G(.185 * Math.max(G(o - t), G(s - t)) / e / .05 || 0)),
                            ease: ne.ease || "power3",
                            data: Math.abs(c - l),
                            onComplete: function () {
                                Dt = Nt = n && !re ? n.totalProgress() : de.progress, te && te(de)
                            }
                        }, L + t * Z, r * Z, a * Z)
                    }
                } else Ft.restart(!0)
            }).pause()), Wt && (xt[Wt] = de), Xt = de.trigger = F(Xt || Qt)[0], Qt = !0 === Qt ? Xt : F(Qt)[0], a(qt) && (qt = {
                targets: Xt,
                className: qt
            }), Qt && (!1 === Kt || Kt === ft || (Kt = "flex" !== f(Qt.parentNode).display && ut), de.pin = Qt, !1 !== t.force3D && D.set(Qt, {
                force3D: !0
            }), (g = D.core.getCache(Qt)).spacer ? J = g.pinState : (g.spacer = nt = P.createElement("div"), nt.setAttribute("class", "pin-spacer" + (Wt ? " pin-spacer-" + Wt : "")), g.pinState = J = S(Qt)), de.spacer = nt = g.spacer, kt = f(Qt), Ct = kt[Kt + zt.os2], ht = D.getProperty(Qt), bt = D.quickSetter(Qt, zt.a, pt), E(Qt, nt, kt), et = S(Qt)), ue && (X = u(ue) ? d(ue, vt) : vt, B = b("scroller-start", Wt, oe, zt, X, 0), Y = b("scroller-end", Wt, oe, zt, X, 0, B), it = B["offset" + zt.op.d2], j = b("start", Wt, oe, zt, X, it), R = b("end", Wt, oe, zt, X, it), ae || (function (t) {
                t.style.position = "absolute" === f(t).position ? "absolute" : "relative"
            }(oe), D.set([B, Y], {
                force3D: !0
            }), St = D.quickSetter(B, zt.a, pt), At = D.quickSetter(Y, zt.a, pt))), de.revert = function (t) {
                var e = !1 !== t;
                e !== T && (de.update(e), Qt && e && C(Qt, nt, J), T = e)
            }, de.refresh = function (e) {
                if (!q && Ht)
                    if (Qt && e && Q) m($t, "scrollEnd", he);
                    else {
                        var i = Math.max(de.scroll(), de.scroll.rec || 0),
                            r = de.progress;
                        q = 1, Mt && Mt.kill(), Gt && n && n.progress(0).invalidate().progress(de.progress), T || de.revert();
                        var o, c, u, d, g, v, b, _ = (ae ? I["inner" + zt.d2] : oe["client" + zt.d2]) || 0,
                            w = ae ? It : h(oe),
                            x = s(oe, zt),
                            C = 0,
                            k = 0,
                            O = t.end,
                            P = t.endTrigger || Xt,
                            N = t.start || (Qt || !Xt ? "0 0" : "0 100%"),
                            F = Qt && Math.max(0, wt.indexOf(de)) || 0;
                        if (F)
                            for (v = F; v--;) wt[v].pin === Qt && wt[v].revert();
                        if (L = A(N, Xt, _, zt, de.scroll(), j, B, de, w, fe, ae, x) || (Qt ? -.001 : 0), l(O) && (O = O(de)), a(O) && !O.indexOf("+=") && (~O.indexOf(" ") ? O = (a(N) ? N.split(" ")[0] : "") + O : (C = y(O.substr(2), _), O = a(N) ? N : L + C, P = Xt)), M = Math.max(L, A(O || (P ? "100% 0" : x), P, _, zt, de.scroll() + C, R, Y, de, w, fe, ae, x)) || -.001, Z = M - L || (L -= .01) && .001, Qt) {
                            for (v = F; v--;)(b = wt[v]).pin === Qt && b.start - b._pinPush < L && (k += b.end - b.start);
                            if (L += k, M += k, de._pinPush = k, j && k && ((o = {})[zt.a] = "+=" + k, D.set([j, R], o)), o = f(Qt), d = zt === mt, u = de.scroll(), _t = parseFloat(ht(zt.a)) + k, E(Qt, nt, o), et = S(Qt), c = h(Qt, !0), Kt && (nt.style[Kt + zt.os2] = Z + k + pt, (Et = Kt === ut ? p(Qt, zt) + Z + k : 0) && (nt.style[zt.d] = Et + pt), ae && de.scroll(i)), ae && ((g = {
                                    top: c.top + (d ? u - L : 0) + pt,
                                    left: c.left + (d ? 0 : u - L) + pt,
                                    boxSizing: "border-box",
                                    position: "fixed"
                                })[rt] = g.maxWidth = Math.ceil(c.width) + pt, g[ot] = g.maxHeight = Math.ceil(c.height) + pt, g[ft] = g[ft + lt] = g[ft + st] = g[ft + ct] = g[ft + at] = "0", g[ut] = o[ut], g[ut + lt] = o[ut + lt], g[ut + st] = o[ut + st], g[ut + ct] = o[ut + ct], g[ut + at] = o[ut + at], tt = function (t, e, n) {
                                    for (var i, r = [], o = t.length, s = n ? 8 : 0; s < o; s += 2) i = t[s], r.push(i, i in e ? e[i] : t[s + 1]);
                                    return r.t = t.t, r
                                }(J, g, ie)), n ? (n.progress(1, !0), Tt = ht(zt.a) - _t + Z + k, Z !== Tt && tt.splice(tt.length - 2, 2), n.progress(0, !0)) : Tt = Z, F)
                                for (v = 0; v < F; v++) wt[v].pin === Qt && wt[v].revert(!1)
                        } else if (Xt && de.scroll())
                            for (c = Xt.parentNode; c && c !== $;) c._pinOffset && (L -= c._pinOffset, M -= c._pinOffset), c = c.parentNode;
                        de.start = L, de.end = M, de.scroll() < i && de.scroll(i), de.revert(!1), q = 0, r !== de.progress && (Mt && n.totalProgress(r, !0), de.progress = r, de.update()), Qt && Kt && (nt._pinOffset = Math.round(de.progress * Tt)), Ut && Ut(de)
                    }
            }, de.getVelocity = function () {
                return (de.scroll() - N) / (V() - z) * 1e3 || 0
            }, de.update = function (t, e) {
                var r, o, a, l, c, u = de.scroll(),
                    d = t ? 0 : (u - L) / Z,
                    p = d < 0 ? 0 : 1 < d ? 1 : d || 0,
                    g = de.progress;
                if (e && (N = O, O = u, ne && (Nt = Dt, Dt = n && !re ? n.totalProgress() : p)), Zt && !p && Qt && !q && L < u + (u - N) / (V() - z) * Zt && (p = 1e-4), p !== g && Ht) {
                    if (l = (c = (r = de.isActive = !!p && p < 1) != (!!g && g < 1)) || !!p != !!g, de.direction = g < p ? 1 : -1, de.progress = p, re || (!Mt || q || U ? n && n.totalProgress(p, !!q) : (Mt.vars.totalProgress = p, Mt.invalidate().restart())), Qt)
                        if (t && Kt && (nt.style[Kt + zt.os2] = Ct), ae) {
                            if (l) {
                                if (a = !t && u + 1 >= s(oe, zt), ie) {
                                    if (!q && (r || a)) {
                                        var m = h(Qt, !0),
                                            v = u - L;
                                        Qt.style.top = m.top + (zt === mt ? v : 0) + pt, Qt.style.left = m.left + (zt === mt ? 0 : v) + pt
                                    }! function (t, e) {
                                        if (t.parentNode !== e) {
                                            var n, i, r = t.style;
                                            if (e === $)
                                                for (n in t._stOrig = r.cssText, i = f(t)) + n || Pt.test(n) || !i[n] || "string" != typeof r[n] || "0" === n || (r[n] = i[n]);
                                            else r.cssText = t._stOrig;
                                            e.appendChild(t)
                                        }
                                    }(Qt, q || !r && !a ? nt : $)
                                }
                                Ot(r || a ? tt : et), Tt !== Z && p < 1 && r || bt(_t + (1 !== p || a ? 0 : Tt))
                            }
                        } else bt(_t + Tt * p);
                    !ne || i.tween || q || U || (Lt = Q, Ft.restart(!0)), qt && c && (!ee || r) && F(qt.targets).forEach(function (t) {
                        return t.classList[r ? "add" : "remove"](qt.className)
                    }), !Bt || re || t || Bt(de), l && !q ? (o = p && !g ? 0 : 1 === p ? 1 : 1 === g ? 2 : 3, 1 === p && ee ? de.kill() : re && (a = !c && "none" !== ce[o + 1] && ce[o + 1] || ce[o], n && ("complete" === a || "reset" === a || a in n) && ("complete" === a ? n.pause().totalProgress(1) : "reset" === a ? n.restart(!0).pause() : n[a]()), Bt && Bt(de)), !c && U || (Yt && c && Yt(de), le[o] && le[o](de), ee && (le[o] = 0), c || le[o = 1 === p ? 1 : 3] && le[o](de))) : re && Bt && !q && Bt(de)
                }
                At && (St(u + (B._isFlipped ? 1 : 0)), At(u))
            }, de.enable = function () {
                Ht || (Ht = !0, m(oe, "resize", x), m(oe, "scroll", w), pe && m($t, "refreshInit", pe), n && (n.add ? D.delayedCall(.01, de.refresh) && (Z = .01) && (L = M = 0) : de.refresh()))
            }, de.disable = function (t) {
                if (Ht && (Ht = de.isActive = !1, Mt && Mt.pause(), t !== Ht && de.update(1), Qt && C(Qt, nt, J), pe && v($t, "refreshInit", pe), Ft && (Ft.pause(), i.tween && i.tween.kill()), !ae)) {
                    for (var e = wt.length; e--;)
                        if (wt[e].scroller === oe && wt[e] !== de) return;
                    v(oe, "resize", x), v(oe, "scroll", w)
                }
            }, de.kill = function (t) {
                de.disable(t), Wt && delete xt[Wt], wt.splice(wt.indexOf(de), 1), n && (n.scrollTrigger = null)
            }, de.enable()
        } else this.update = this.refresh = this.kill = e
    }, $t.register = function (t) {
        if (D = t || i(), n() && window.document && (I = window, P = document, N = P.documentElement, $ = P.body), D && (F = D.utils.toArray, H = D.utils.clamp, D.core.globals("ScrollTrigger", $t), $)) {
            j = I.requestAnimationFrame || function (t) {
                return setTimeout(t, 16)
            }, m(I, "mousewheel", w), L = [I, P, N, $], m(P, "scroll", w);
            var r, o = $.style,
                s = o.borderTop;
            o.borderTop = "1px solid #000", r = h($), mt.m = Math.round(r.top + mt.sc()) || 0, gt.m = Math.round(r.left + gt.sc()) || 0, s ? o.borderTop = s : o.removeProperty("border-top"), B = setInterval(_, 100), D.delayedCall(.5, function () {
                return U = 0
            }), m(P, "touchcancel", e), m($, "touchstart", e), g(m, P, "pointerdown,touchstart,mousedown", function () {
                return W = 1
            }), g(m, P, "pointerup,touchend,mouseup", function () {
                return W = 0
            }), Y = D.utils.checkPrefix("transform"), kt.push(Y), O = V(), M = D.delayedCall(.2, T).pause(), m(P, "visibilitychange", function () {
                return P.hidden || T()
            }), m(P, "DOMContentLoaded", T), m(I, "load", function () {
                return Q || T()
            }), m(I, "resize", x)
        }
        return O
    }, $t.defaults = function (t) {
        for (var e in t) yt[e] = t[e]
    }, $t.kill = function () {
        K = 0, wt.slice(0).forEach(function (t) {
            return t.kill(1)
        })
    }, $t);

    function $t(t, e) {
        O || $t.register(D) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(t, e)
    }
    Nt.version = "3.3.3", Nt.create = function (t, e) {
        return new Nt(t, e)
    }, Nt.refresh = function (t) {
        return t ? x() : T(!0)
    }, Nt.update = St, Nt.maxScroll = function (t, e) {
        return s(t, e ? gt : mt)
    }, Nt.getScrollFunc = function (t, e) {
        return (e = e ? gt : mt) && (r(t) ? e.sc : o(t, e))
    }, Nt.getById = function (t) {
        return xt[t]
    }, Nt.getAll = function () {
        return wt.slice(0)
    }, Nt.syncInterval = function (t) {
        return clearInterval(B) || (B = t) && setInterval(_, t)
    }, Nt.isScrolling = function () {
        return !!Q
    }, Nt.addEventListener = function (t, e) {
        var n = Tt[t] || (Tt[t] = []);
        ~n.indexOf(e) || n.push(e)
    }, Nt.removeEventListener = function (t, e) {
        var n = Tt[t],
            i = n && n.indexOf(e);
        0 <= i && n.splice(i, 1)
    }, Nt.batch = function (t, e) {
        function n(t, e) {
            var n = [],
                i = [],
                r = D.delayedCall(s, function () {
                    e(n, i), n = [], i = []
                }).pause();
            return function (t) {
                n.length || r.restart(!0), n.push(t.trigger), i.push(t), a <= n.length && r.progress(1)
            }
        }
        var i, r = [],
            o = {},
            s = e.interval || .016,
            a = e.batchMax || 1e9;
        for (i in e) o[i] = "on" === i.substr(0, 2) && l(e[i]) && "onRefreshInit" !== i ? n(0, e[i]) : e[i];
        return l(a) && (a = a(), Nt.addEventListener("refresh", function () {
            return a = e.batchMax()
        })), F(t).forEach(function (t) {
            var e = {};
            for (i in o) e[i] = o[i];
            e.trigger = t, r.push(Nt.create(e))
        }), r
    }, i() && D.registerPlugin(Nt), t.ScrollTrigger = Nt, t.default = Nt, "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", {
        value: !0
    }) : delete t.default
}),
function (t) {
    t.fn.notifyMe = function (e) {
        t(this);
        var n = t(this).find("input[name=email]"),
            i = t(this).attr("action"),
            r = t(this).find(".note");
        t(this).on("submit", function (e) {
            e.preventDefault();
            var o = n.val();
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(o) ? ($(".message").removeClass("error bad-email success-full"), $(".message").hide().html("").fadeIn(), $(".fa-spinner").addClass("fa-spin").removeClass("opacity-0"), r.show(), t.ajax({
                type: "POST",
                url: i,
                data: {
                    email: o
                },
                dataType: "json",
                error: function (t) {
                    r.hide(), $(".fa-spinner").addClass("opacity-0").removeClass("fa-spin"), $(".block-message").addClass("show-block-error").removeClass("show-block-valid"), 404 == t.status ? $(".message").html('<p class="notify-valid">Service is not available at the moment.<br>Please check your internet connection or try again later.</p>').fadeIn() : $(".message").html('<p class="notify-valid">Oops. Looks like something went wrong.<br>Please try again later.</p>').fadeIn()
                }
            }).done(function (t) {
                r.hide(), "success" == t.status ? ($(".fa-spinner").addClass("opacity-0").removeClass("fa-spin"), $(".message").removeClass("bad-email").addClass("success-full"), $(".block-message").addClass("show-block-valid").removeClass("show-block-error"), $(".message").html('<p class="notify-valid">Congrats! You are in list.<br>We will inform you as soon as we finish.</p>').fadeIn()) : "ValidationError" == t.type ? ($(".fa-spinner").addClass("opacity-0").removeClass("fa-spin"), $(".message").html('<p class="notify-valid">This email address looks fake or invalid.<br>Please enter a real email address.</p>').fadeIn()) : ($(".fa-spinner").addClass("opacity-0").removeClass("fa-spin"), $(".message").html('<p class="notify-valid">Oops. Looks like something went wrong.<br>Please try again later.</p>').fadeIn())
            })) : ($(".fa-spinner").addClass("opacity-0").removeClass("fa-spin"), $(".message").addClass("bad-email").removeClass("success-full"), $(".block-message").addClass("show-block-error").removeClass("show-block-valid"), $(".message").html('<p class="notify-valid">Your e-mail address is incorrect.<br>Please check it and try again.</p>').fadeIn(), r.hide()), $("#notifyMe input").on("keyup keypress", function (t) {
                13 == (t.keyCode || t.which) ? (t.preventDefault(), $("#notifyMe").submit()) : ($(".block-message").addClass("").removeClass("show-block-valid show-block-error"), $(".message").fadeOut())
            })
        })
    }
}(jQuery),
function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? t(require("jquery")) : t(jQuery)
}(function (t) {
    var e = {
        element: "body",
        position: null,
        type: "info",
        allow_dismiss: !0,
        newest_on_top: !1,
        showProgressbar: !1,
        placement: {
            from: "top",
            align: "right"
        },
        offset: 20,
        spacing: 10,
        z_index: 1031,
        delay: 5e3,
        timer: 1e3,
        url_target: "_blank",
        mouse_over: null,
        animate: {
            enter: "animated fadeInDown",
            exit: "animated fadeOutUp"
        },
        onShow: null,
        onShown: null,
        onClose: null,
        onClosed: null,
        icon_type: "class",
        template: '<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
    };

    function n(n, i, r) {
        i = {
            content: {
                message: "object" == typeof i ? i.message : i,
                title: i.title ? i.title : "",
                icon: i.icon ? i.icon : "",
                url: i.url ? i.url : "#",
                target: i.target ? i.target : "-"
            }
        }, r = t.extend(!0, {}, i, r), this.settings = t.extend(!0, {}, e, r), this._defaults = e, "-" == this.settings.content.target && (this.settings.content.target = this.settings.url_target), this.animations = {
            start: "webkitAnimationStart oanimationstart MSAnimationStart animationstart",
            end: "webkitAnimationEnd oanimationend MSAnimationEnd animationend"
        }, "number" == typeof this.settings.offset && (this.settings.offset = {
            x: this.settings.offset,
            y: this.settings.offset
        }), this.init()
    }
    String.format = function () {
        for (var t = arguments[0], e = 1; e < arguments.length; e++) t = t.replace(RegExp("\\{" + (e - 1) + "\\}", "gm"), arguments[e]);
        return t
    }, t.extend(n.prototype, {
        init: function () {
            var t = this;
            this.buildNotify(), this.settings.content.icon && this.setIcon(), "#" != this.settings.content.url && this.styleURL(), this.placement(), this.bind(), this.notify = {
                $ele: this.$ele,
                update: function (e, n) {
                    var i = {};
                    for (var e in "string" == typeof e ? i[e] = n : i = e, i) switch (e) {
                        case "type":
                            this.$ele.removeClass("alert-" + t.settings.type), this.$ele.find('[data-notify="progressbar"] > .progress-bar').removeClass("progress-bar-" + t.settings.type), t.settings.type = i[e], this.$ele.addClass("alert-" + i[e]).find('[data-notify="progressbar"] > .progress-bar').addClass("progress-bar-" + i[e]);
                            break;
                        case "icon":
                            var r = this.$ele.find('[data-notify="icon"]');
                            "class" == t.settings.icon_type.toLowerCase() ? r.removeClass(t.settings.content.icon).addClass(i[e]) : (r.is("img") || r.find("img"), r.attr("src", i[e]));
                            break;
                        case "progress":
                            var o = t.settings.delay - t.settings.delay * (i[e] / 100);
                            this.$ele.data("notify-delay", o), this.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", i[e]).css("width", i[e] + "%");
                            break;
                        case "url":
                            this.$ele.find('[data-notify="url"]').attr("href", i[e]);
                            break;
                        case "target":
                            this.$ele.find('[data-notify="url"]').attr("target", i[e]);
                            break;
                        default:
                            this.$ele.find('[data-notify="' + e + '"]').html(i[e])
                    }
                    var s = this.$ele.outerHeight() + parseInt(t.settings.spacing) + parseInt(t.settings.offset.y);
                    t.reposition(s)
                },
                close: function () {
                    t.close()
                }
            }
        },
        buildNotify: function () {
            var e = this.settings.content;
            this.$ele = t(String.format(this.settings.template, this.settings.type, e.title, e.message, e.url, e.target)), this.$ele.attr("data-notify-position", this.settings.placement.from + "-" + this.settings.placement.align), this.settings.allow_dismiss || this.$ele.find('[data-notify="dismiss"]').css("display", "none"), (this.settings.delay <= 0 && !this.settings.showProgressbar || !this.settings.showProgressbar) && this.$ele.find('[data-notify="progressbar"]').remove()
        },
        setIcon: function () {
            "class" == this.settings.icon_type.toLowerCase() ? this.$ele.find('[data-notify="icon"]').addClass(this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').is("img") ? this.$ele.find('[data-notify="icon"]').attr("src", this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').append('<img src="' + this.settings.content.icon + '" alt="Notify Icon" />')
        },
        styleURL: function () {
            this.$ele.find('[data-notify="url"]').css({
                backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)",
                height: "100%",
                left: "0px",
                position: "absolute",
                top: "0px",
                width: "100%",
                zIndex: this.settings.z_index + 1
            }), this.$ele.find('[data-notify="dismiss"]').css({
                position: "absolute",
                right: "10px",
                top: "5px",
                zIndex: this.settings.z_index + 2
            })
        },
        placement: function () {
            var e = this,
                n = this.settings.offset.y,
                i = {
                    display: "inline-block",
                    margin: "0px auto",
                    position: this.settings.position ? this.settings.position : "body" === this.settings.element ? "fixed" : "absolute",
                    transition: "all .5s ease-in-out",
                    zIndex: this.settings.z_index
                },
                r = !1,
                o = this.settings;
            switch (t('[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])').each(function () {
                return n = Math.max(n, parseInt(t(this).css(o.placement.from)) + parseInt(t(this).outerHeight()) + parseInt(o.spacing))
            }), 1 == this.settings.newest_on_top && (n = this.settings.offset.y), i[this.settings.placement.from] = n + "px", this.settings.placement.align) {
                case "left":
                case "right":
                    i[this.settings.placement.align] = this.settings.offset.x + "px";
                    break;
                case "center":
                    i.left = 0, i.right = 0
            }
            this.$ele.css(i).addClass(this.settings.animate.enter), t.each(Array("webkit", "moz", "o", "ms", ""), function (t, n) {
                e.$ele[0].style[n + "AnimationIterationCount"] = 1
            }), t(this.settings.element).append(this.$ele), 1 == this.settings.newest_on_top && (n = parseInt(n) + parseInt(this.settings.spacing) + this.$ele.outerHeight(), this.reposition(n)), t.isFunction(e.settings.onShow) && e.settings.onShow.call(this.$ele), this.$ele.one(this.animations.start, function (t) {
                r = !0
            }).one(this.animations.end, function (n) {
                t.isFunction(e.settings.onShown) && e.settings.onShown.call(this)
            }), setTimeout(function () {
                r || t.isFunction(e.settings.onShown) && e.settings.onShown.call(this)
            }, 600)
        },
        bind: function () {
            var e = this;
            if (this.$ele.find('[data-notify="dismiss"]').on("click", function () {
                    e.close()
                }), this.$ele.mouseover(function (e) {
                    t(this).data("data-hover", "true")
                }).mouseout(function (e) {
                    t(this).data("data-hover", "false")
                }), this.$ele.data("data-hover", "false"), this.settings.delay > 0) {
                e.$ele.data("notify-delay", e.settings.delay);
                var n = setInterval(function () {
                    var t = parseInt(e.$ele.data("notify-delay")) - e.settings.timer;
                    if ("false" === e.$ele.data("data-hover") && "pause" == e.settings.mouse_over || "pause" != e.settings.mouse_over) {
                        var i = (e.settings.delay - t) / e.settings.delay * 100;
                        e.$ele.data("notify-delay", t), e.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", i).css("width", i + "%")
                    }
                    t <= -e.settings.timer && (clearInterval(n), e.close())
                }, e.settings.timer)
            }
        },
        close: function () {
            var e = this,
                n = parseInt(this.$ele.css(this.settings.placement.from)),
                i = !1;
            this.$ele.data("closing", "true").addClass(this.settings.animate.exit), e.reposition(n), t.isFunction(e.settings.onClose) && e.settings.onClose.call(this.$ele), this.$ele.one(this.animations.start, function (t) {
                i = !0
            }).one(this.animations.end, function (n) {
                t(this).remove(), t.isFunction(e.settings.onClosed) && e.settings.onClosed.call(this)
            }), setTimeout(function () {
                i || (e.$ele.remove(), e.settings.onClosed && e.settings.onClosed(e.$ele))
            }, 600)
        },
        reposition: function (e) {
            var n = this,
                i = '[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])',
                r = this.$ele.nextAll(i);
            1 == this.settings.newest_on_top && (r = this.$ele.prevAll(i)), r.each(function () {
                t(this).css(n.settings.placement.from, e), e = parseInt(e) + parseInt(n.settings.spacing) + t(this).outerHeight()
            })
        }
    }), t.notify = function (t, e) {
        return new n(this, t, e).notify
    }, t.notifyDefaults = function (n) {
        return e = t.extend(!0, {}, e, n)
    }, t.notifyClose = function (e) {
        void 0 === e || "all" == e ? t("[data-notify]").find('[data-notify="dismiss"]').trigger("click") : t('[data-notify-position="' + e + '"]').find('[data-notify="dismiss"]').trigger("click")
    }
}), $(document).ready(function () {
        recallajax()
    }),
    function (t, e) {
        "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.AOS = e() : t.AOS = e()
    }(this, function () {
        return function (t) {
            function e(i) {
                if (n[i]) return n[i].exports;
                var r = n[i] = {
                    exports: {},
                    id: i,
                    loaded: !1
                };
                return t[i].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
            }
            var n = {};
            return e.m = t, e.c = n, e.p = "dist/", e(0)
        }([function (t, e, n) {
            "use strict";

            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var r = Object.assign || function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                    }
                    return t
                },
                o = (i(n(1)), n(6)),
                s = i(o),
                a = i(n(7)),
                l = i(n(8)),
                c = i(n(9)),
                u = i(n(10)),
                f = i(n(11)),
                d = i(n(14)),
                h = [],
                p = !1,
                g = {
                    offset: 120,
                    delay: 0,
                    easing: "ease",
                    duration: 400,
                    disable: !1,
                    once: !1,
                    startEvent: "DOMContentLoaded",
                    throttleDelay: 99,
                    debounceDelay: 50,
                    disableMutationObserver: !1
                },
                m = function () {
                    if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (p = !0), p) return h = (0, f.default)(h, g), (0, u.default)(h, g.once), h
                },
                v = function () {
                    h = (0, d.default)(), m()
                };
            t.exports = {
                init: function (t) {
                    g = r(g, t), h = (0, d.default)();
                    var e = document.all && !window.atob;
                    return function (t) {
                        return !0 === t || "mobile" === t && c.default.mobile() || "phone" === t && c.default.phone() || "tablet" === t && c.default.tablet() || "function" == typeof t && !0 === t()
                    }(g.disable) || e ? void h.forEach(function (t, e) {
                        t.node.removeAttribute("data-aos"), t.node.removeAttribute("data-aos-easing"), t.node.removeAttribute("data-aos-duration"), t.node.removeAttribute("data-aos-delay")
                    }) : (document.querySelector("body").setAttribute("data-aos-easing", g.easing), document.querySelector("body").setAttribute("data-aos-duration", g.duration), document.querySelector("body").setAttribute("data-aos-delay", g.delay), "DOMContentLoaded" === g.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? m(!0) : "load" === g.startEvent ? window.addEventListener(g.startEvent, function () {
                        m(!0)
                    }) : document.addEventListener(g.startEvent, function () {
                        m(!0)
                    }), window.addEventListener("resize", (0, a.default)(m, g.debounceDelay, !0)), window.addEventListener("orientationchange", (0, a.default)(m, g.debounceDelay, !0)), window.addEventListener("scroll", (0, s.default)(function () {
                        (0, u.default)(h, g.once)
                    }, g.throttleDelay)), g.disableMutationObserver || (0, l.default)("[data-aos]", v), h)
                },
                refresh: m,
                refreshHard: v
            }
        }, function (t, e) {}, , , , , function (t, e) {
            (function (e) {
                "use strict";

                function n(t, e, n) {
                    function r(e) {
                        var n = f,
                            i = d;
                        return f = d = void 0, v = e, p = t.apply(i, n)
                    }

                    function s(t) {
                        var n = t - m;
                        return void 0 === m || n >= e || n < 0 || x && t - v >= h
                    }

                    function l() {
                        var t = w();
                        return s(t) ? c(t) : void(g = setTimeout(l, function (t) {
                            var n = e - (t - m);
                            return x ? _(n, h - (t - v)) : n
                        }(t)))
                    }

                    function c(t) {
                        return g = void 0, T && f ? r(t) : (f = d = void 0, p)
                    }

                    function u() {
                        var t = w(),
                            n = s(t);
                        if (f = arguments, d = this, m = t, n) {
                            if (void 0 === g) return function (t) {
                                return v = t, g = setTimeout(l, e), y ? r(t) : p
                            }(m);
                            if (x) return g = setTimeout(l, e), r(m)
                        }
                        return void 0 === g && (g = setTimeout(l, e)), p
                    }
                    var f, d, h, p, g, m, v = 0,
                        y = !1,
                        x = !1,
                        T = !0;
                    if ("function" != typeof t) throw new TypeError(a);
                    return e = o(e) || 0, i(n) && (y = !!n.leading, h = (x = "maxWait" in n) ? b(o(n.maxWait) || 0, e) : h, T = "trailing" in n ? !!n.trailing : T), u.cancel = function () {
                        void 0 !== g && clearTimeout(g), v = 0, f = m = d = g = void 0
                    }, u.flush = function () {
                        return void 0 === g ? p : c(w())
                    }, u
                }

                function i(t) {
                    var e = void 0 === t ? "undefined" : s(t);
                    return !!t && ("object" == e || "function" == e)
                }

                function r(t) {
                    return "symbol" == (void 0 === t ? "undefined" : s(t)) || function (t) {
                        return !!t && "object" == (void 0 === t ? "undefined" : s(t))
                    }(t) && y.call(t) == c
                }

                function o(t) {
                    if ("number" == typeof t) return t;
                    if (r(t)) return l;
                    if (i(t)) {
                        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                        t = i(e) ? e + "" : e
                    }
                    if ("string" != typeof t) return 0 === t ? t : +t;
                    t = t.replace(u, "");
                    var n = d.test(t);
                    return n || h.test(t) ? p(t.slice(2), n ? 2 : 8) : f.test(t) ? l : +t
                }
                var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                        return typeof t
                    } : function (t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    },
                    a = "Expected a function",
                    l = NaN,
                    c = "[object Symbol]",
                    u = /^\s+|\s+$/g,
                    f = /^[-+]0x[0-9a-f]+$/i,
                    d = /^0b[01]+$/i,
                    h = /^0o[0-7]+$/i,
                    p = parseInt,
                    g = "object" == (void 0 === e ? "undefined" : s(e)) && e && e.Object === Object && e,
                    m = "object" == ("undefined" == typeof self ? "undefined" : s(self)) && self && self.Object === Object && self,
                    v = g || m || Function("return this")(),
                    y = Object.prototype.toString,
                    b = Math.max,
                    _ = Math.min,
                    w = function () {
                        return v.Date.now()
                    };
                t.exports = function (t, e, r) {
                    var o = !0,
                        s = !0;
                    if ("function" != typeof t) throw new TypeError(a);
                    return i(r) && (o = "leading" in r ? !!r.leading : o, s = "trailing" in r ? !!r.trailing : s), n(t, e, {
                        leading: o,
                        maxWait: e,
                        trailing: s
                    })
                }
            }).call(e, function () {
                return this
            }())
        }, function (t, e) {
            (function (e) {
                "use strict";

                function n(t) {
                    var e = void 0 === t ? "undefined" : o(t);
                    return !!t && ("object" == e || "function" == e)
                }

                function i(t) {
                    return "symbol" == (void 0 === t ? "undefined" : o(t)) || function (t) {
                        return !!t && "object" == (void 0 === t ? "undefined" : o(t))
                    }(t) && v.call(t) == l
                }

                function r(t) {
                    if ("number" == typeof t) return t;
                    if (i(t)) return a;
                    if (n(t)) {
                        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                        t = n(e) ? e + "" : e
                    }
                    if ("string" != typeof t) return 0 === t ? t : +t;
                    t = t.replace(c, "");
                    var r = f.test(t);
                    return r || d.test(t) ? h(t.slice(2), r ? 2 : 8) : u.test(t) ? a : +t
                }
                var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                        return typeof t
                    } : function (t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    },
                    s = "Expected a function",
                    a = NaN,
                    l = "[object Symbol]",
                    c = /^\s+|\s+$/g,
                    u = /^[-+]0x[0-9a-f]+$/i,
                    f = /^0b[01]+$/i,
                    d = /^0o[0-7]+$/i,
                    h = parseInt,
                    p = "object" == (void 0 === e ? "undefined" : o(e)) && e && e.Object === Object && e,
                    g = "object" == ("undefined" == typeof self ? "undefined" : o(self)) && self && self.Object === Object && self,
                    m = p || g || Function("return this")(),
                    v = Object.prototype.toString,
                    y = Math.max,
                    b = Math.min,
                    _ = function () {
                        return m.Date.now()
                    };
                t.exports = function (t, e, i) {
                    function o(e) {
                        var n = f,
                            i = d;
                        return f = d = void 0, v = e, p = t.apply(i, n)
                    }

                    function a(t) {
                        var n = t - m;
                        return void 0 === m || n >= e || n < 0 || x && t - v >= h
                    }

                    function l() {
                        var t = _();
                        return a(t) ? c(t) : void(g = setTimeout(l, function (t) {
                            var n = e - (t - m);
                            return x ? b(n, h - (t - v)) : n
                        }(t)))
                    }

                    function c(t) {
                        return g = void 0, T && f ? o(t) : (f = d = void 0, p)
                    }

                    function u() {
                        var t = _(),
                            n = a(t);
                        if (f = arguments, d = this, m = t, n) {
                            if (void 0 === g) return function (t) {
                                return v = t, g = setTimeout(l, e), w ? o(t) : p
                            }(m);
                            if (x) return g = setTimeout(l, e), o(m)
                        }
                        return void 0 === g && (g = setTimeout(l, e)), p
                    }
                    var f, d, h, p, g, m, v = 0,
                        w = !1,
                        x = !1,
                        T = !0;
                    if ("function" != typeof t) throw new TypeError(s);
                    return e = r(e) || 0, n(i) && (w = !!i.leading, h = (x = "maxWait" in i) ? y(r(i.maxWait) || 0, e) : h, T = "trailing" in i ? !!i.trailing : T), u.cancel = function () {
                        void 0 !== g && clearTimeout(g), v = 0, f = m = d = g = void 0
                    }, u.flush = function () {
                        return void 0 === g ? p : c(_())
                    }, u
                }
            }).call(e, function () {
                return this
            }())
        }, function (t, e) {
            "use strict";

            function n(t) {
                t && t.forEach(function (t) {
                    var e = Array.prototype.slice.call(t.addedNodes),
                        n = Array.prototype.slice.call(t.removedNodes);
                    e.concat(n).filter(function (t) {
                        return t.hasAttribute && t.hasAttribute("data-aos")
                    }).length && i()
                })
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = function () {};
            e.default = function (t, e) {
                var r = window.document,
                    o = new(window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver)(n);
                i = e, o.observe(r.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0
                })
            }
        }, function (t, e) {
            "use strict";

            function n() {
                return navigator.userAgent || navigator.vendor || window.opera || ""
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = function () {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                        }
                    }
                    return function (e, n, i) {
                        return n && t(e.prototype, n), i && t(e, i), e
                    }
                }(),
                r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                o = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                s = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                l = function () {
                    function t() {
                        ! function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t)
                    }
                    return i(t, [{
                        key: "phone",
                        value: function () {
                            var t = n();
                            return !(!r.test(t) && !o.test(t.substr(0, 4)))
                        }
                    }, {
                        key: "mobile",
                        value: function () {
                            var t = n();
                            return !(!s.test(t) && !a.test(t.substr(0, 4)))
                        }
                    }, {
                        key: "tablet",
                        value: function () {
                            return this.mobile() && !this.phone()
                        }
                    }]), t
                }();
            e.default = new l
        }, function (t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            e.default = function (t, e) {
                var n = window.pageYOffset,
                    i = window.innerHeight;
                t.forEach(function (t, r) {
                    ! function (t, e, n) {
                        var i = t.node.getAttribute("data-aos-once");
                        e > t.position ? t.node.classList.add("aos-animate") : void 0 !== i && ("false" === i || !n && "true" !== i) && t.node.classList.remove("aos-animate")
                    }(t, i + n, e)
                })
            }
        }, function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = function (t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(12));
            e.default = function (t, e) {
                return t.forEach(function (t, n) {
                    t.node.classList.add("aos-init"), t.position = (0, i.default)(t.node, e.offset)
                }), t
            }
        }, function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = function (t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n(13));
            e.default = function (t, e) {
                var n = 0,
                    r = 0,
                    o = window.innerHeight,
                    s = {
                        offset: t.getAttribute("data-aos-offset"),
                        anchor: t.getAttribute("data-aos-anchor"),
                        anchorPlacement: t.getAttribute("data-aos-anchor-placement")
                    };
                switch (s.offset && !isNaN(s.offset) && (r = parseInt(s.offset)), s.anchor && document.querySelectorAll(s.anchor) && (t = document.querySelectorAll(s.anchor)[0]), n = (0, i.default)(t).top, s.anchorPlacement) {
                    case "top-bottom":
                        break;
                    case "center-bottom":
                        n += t.offsetHeight / 2;
                        break;
                    case "bottom-bottom":
                        n += t.offsetHeight;
                        break;
                    case "top-center":
                        n += o / 2;
                        break;
                    case "bottom-center":
                        n += o / 2 + t.offsetHeight;
                        break;
                    case "center-center":
                        n += o / 2 + t.offsetHeight / 2;
                        break;
                    case "top-top":
                        n += o;
                        break;
                    case "bottom-top":
                        n += t.offsetHeight + o;
                        break;
                    case "center-top":
                        n += t.offsetHeight / 2 + o
                }
                return s.anchorPlacement || s.offset || isNaN(e) || (r = e), n + r
            }
        }, function (t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            e.default = function (t) {
                for (var e = 0, n = 0; t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop);) e += t.offsetLeft - ("BODY" != t.tagName ? t.scrollLeft : 0), n += t.offsetTop - ("BODY" != t.tagName ? t.scrollTop : 0), t = t.offsetParent;
                return {
                    top: n,
                    left: e
                }
            }
        }, function (t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            e.default = function (t) {
                return t = t || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(t, function (t) {
                    return {
                        node: t
                    }
                })
            }
        }])
    });