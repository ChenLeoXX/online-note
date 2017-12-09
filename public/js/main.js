/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (a, b) {
  "use strict";
  "object" == ( false ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
  } : b(a);
}("undefined" != typeof window ? window : undefined, function (a, b) {
  "use strict";
  var c = [],
      d = a.document,
      e = Object.getPrototypeOf,
      f = c.slice,
      g = c.concat,
      h = c.push,
      i = c.indexOf,
      j = {},
      k = j.toString,
      l = j.hasOwnProperty,
      m = l.toString,
      n = m.call(Object),
      o = {};function p(a, b) {
    b = b || d;var c = b.createElement("script");c.text = a, b.head.appendChild(c).parentNode.removeChild(c);
  }var q = "3.2.1",
      r = function r(a, b) {
    return new r.fn.init(a, b);
  },
      s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      t = /^-ms-/,
      u = /-([a-z])/g,
      v = function v(a, b) {
    return b.toUpperCase();
  };r.fn = r.prototype = { jquery: q, constructor: r, length: 0, toArray: function toArray() {
      return f.call(this);
    }, get: function get(a) {
      return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a];
    }, pushStack: function pushStack(a) {
      var b = r.merge(this.constructor(), a);return b.prevObject = this, b;
    }, each: function each(a) {
      return r.each(this, a);
    }, map: function map(a) {
      return this.pushStack(r.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    }, slice: function slice() {
      return this.pushStack(f.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(a) {
      var b = this.length,
          c = +a + (a < 0 ? b : 0);return this.pushStack(c >= 0 && c < b ? [this[c]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: h, sort: c.sort, splice: c.splice }, r.extend = r.fn.extend = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++) {
      if (null != (a = arguments[h])) for (b in a) {
        c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = Array.isArray(d))) ? (e ? (e = !1, f = c && Array.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
      }
    }return g;
  }, r.extend({ expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
      throw new Error(a);
    }, noop: function noop() {}, isFunction: function isFunction(a) {
      return "function" === r.type(a);
    }, isWindow: function isWindow(a) {
      return null != a && a === a.window;
    }, isNumeric: function isNumeric(a) {
      var b = r.type(a);return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
    }, isPlainObject: function isPlainObject(a) {
      var b, c;return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n));
    }, isEmptyObject: function isEmptyObject(a) {
      var b;for (b in a) {
        return !1;
      }return !0;
    }, type: function type(a) {
      return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? j[k.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
    }, globalEval: function globalEval(a) {
      p(a);
    }, camelCase: function camelCase(a) {
      return a.replace(t, "ms-").replace(u, v);
    }, each: function each(a, b) {
      var c,
          d = 0;if (w(a)) {
        for (c = a.length; d < c; d++) {
          if (b.call(a[d], d, a[d]) === !1) break;
        }
      } else for (d in a) {
        if (b.call(a[d], d, a[d]) === !1) break;
      }return a;
    }, trim: function trim(a) {
      return null == a ? "" : (a + "").replace(s, "");
    }, makeArray: function makeArray(a, b) {
      var c = b || [];return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c;
    }, inArray: function inArray(a, b, c) {
      return null == b ? -1 : i.call(b, a, c);
    }, merge: function merge(a, b) {
      for (var c = +b.length, d = 0, e = a.length; d < c; d++) {
        a[e++] = b[d];
      }return a.length = e, a;
    }, grep: function grep(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) {
        d = !b(a[f], f), d !== h && e.push(a[f]);
      }return e;
    }, map: function map(a, b, c) {
      var d,
          e,
          f = 0,
          h = [];if (w(a)) for (d = a.length; f < d; f++) {
        e = b(a[f], f, c), null != e && h.push(e);
      } else for (f in a) {
        e = b(a[f], f, c), null != e && h.push(e);
      }return g.apply([], h);
    }, guid: 1, proxy: function proxy(a, b) {
      var c, d, e;if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function e() {
        return a.apply(b || this, d.concat(f.call(arguments)));
      }, e.guid = a.guid = a.guid || r.guid++, e;
    }, now: Date.now, support: o }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
    j["[object " + b + "]"] = b.toLowerCase();
  });function w(a) {
    var b = !!a && "length" in a && a.length,
        c = r.type(a);return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a);
  }var x = function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = "sizzle" + 1 * new Date(),
        v = a.document,
        w = 0,
        x = 0,
        y = ha(),
        z = ha(),
        A = ha(),
        B = function B(a, b) {
      return a === b && (l = !0), 0;
    },
        C = {}.hasOwnProperty,
        D = [],
        E = D.pop,
        F = D.push,
        G = D.push,
        H = D.slice,
        I = function I(a, b) {
      for (var c = 0, d = a.length; c < d; c++) {
        if (a[c] === b) return c;
      }return -1;
    },
        J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        K = "[\\x20\\t\\r\\n\\f]",
        L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
        N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
        O = new RegExp(K + "+", "g"),
        P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
        Q = new RegExp("^" + K + "*," + K + "*"),
        R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
        S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
        T = new RegExp(N),
        U = new RegExp("^" + L + "$"),
        V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + N), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") },
        W = /^(?:input|select|textarea|button)$/i,
        X = /^h\d$/i,
        Y = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        $ = /[+~]/,
        _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
        aa = function aa(a, b, c) {
      var d = "0x" + b - 65536;return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
    },
        ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ca = function ca(a, b) {
      return b ? "\0" === a ? "\uFFFD" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a;
    },
        da = function da() {
      m();
    },
        ea = ta(function (a) {
      return a.disabled === !0 && ("form" in a || "label" in a);
    }, { dir: "parentNode", next: "legend" });try {
      G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType;
    } catch (fa) {
      G = { apply: D.length ? function (a, b) {
          F.apply(a, H.call(b));
        } : function (a, b) {
          var c = a.length,
              d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
        } };
    }function ga(a, b, d, e) {
      var f,
          h,
          j,
          k,
          l,
          o,
          r,
          s = b && b.ownerDocument,
          w = b ? b.nodeType : 9;if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== w && (l = Z.exec(a))) if (f = l[1]) {
          if (9 === w) {
            if (!(j = b.getElementById(f))) return d;if (j.id === f) return d.push(j), d;
          } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
        } else {
          if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d;
        }if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== w) s = b, r = a;else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u), o = g(a), h = o.length;while (h--) {
              o[h] = "#" + k + " " + sa(o[h]);
            }r = o.join(","), s = $.test(a) && qa(b.parentNode) || b;
          }if (r) try {
            return G.apply(d, s.querySelectorAll(r)), d;
          } catch (x) {} finally {
            k === u && b.removeAttribute("id");
          }
        }
      }return i(a.replace(P, "$1"), b, d, e);
    }function ha() {
      var a = [];function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
      }return b;
    }function ia(a) {
      return a[u] = !0, a;
    }function ja(a) {
      var b = n.createElement("fieldset");try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }function ka(a, b) {
      var c = a.split("|"),
          e = c.length;while (e--) {
        d.attrHandle[c[e]] = b;
      }
    }function la(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;if (d) return d;if (c) while (c = c.nextSibling) {
        if (c === b) return -1;
      }return a ? 1 : -1;
    }function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
      };
    }function na(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
      };
    }function oa(a) {
      return function (b) {
        return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a;
      };
    }function pa(a) {
      return ia(function (b) {
        return b = +b, ia(function (c, d) {
          var e,
              f = a([], c.length, b),
              g = f.length;while (g--) {
            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
          }
        });
      });
    }function qa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }c = ga.support = {}, f = ga.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;return !!b && "HTML" !== b.nodeName;
    }, m = ga.setDocument = function (a) {
      var b,
          e,
          g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function (a) {
        return a.className = "i", !a.getAttribute("className");
      }), c.getElementsByTagName = ja(function (a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
      }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function (a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
      }), c.getById ? (d.filter.ID = function (a) {
        var b = a.replace(_, aa);return function (a) {
          return a.getAttribute("id") === b;
        };
      }, d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);return c ? [c] : [];
        }
      }) : (d.filter.ID = function (a) {
        var b = a.replace(_, aa);return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
        };
      }, d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c,
              d,
              e,
              f = b.getElementById(a);if (f) {
            if (c = f.getAttributeNode("id"), c && c.value === a) return [f];e = b.getElementsByName(a), d = 0;while (f = e[d++]) {
              if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
            }
          }return [];
        }
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
      } : function (a, b) {
        var c,
            d = [],
            e = 0,
            f = b.getElementsByTagName(a);if ("*" === a) {
          while (c = f[e++]) {
            1 === c.nodeType && d.push(c);
          }return d;
        }return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a);
      }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), ja(function (a) {
        a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b = n.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
        c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N);
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) {
          if (b === a) return !0;
        }return !1;
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = !0, 0;var c,
            d = 0,
            e = a.parentNode,
            f = b.parentNode,
            g = [a],
            h = [b];if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;if (e === f) return la(a, b);c = a;while (c = c.parentNode) {
          g.unshift(c);
        }c = b;while (c = c.parentNode) {
          h.unshift(c);
        }while (g[d] === h[d]) {
          d++;
        }return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
      }, n) : n;
    }, ga.matches = function (a, b) {
      return ga(a, null, null, b);
    }, ga.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
        var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}return ga(b, n, null, [a]).length > 0;
    }, ga.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, ga.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
          f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, ga.escape = function (a) {
      return (a + "").replace(ba, ca);
    }, ga.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, ga.uniqueSort = function (a) {
      var b,
          d = [],
          e = 0,
          f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) {
          b === a[f] && (e = d.push(f));
        }while (e--) {
          a.splice(d[e], 1);
        }
      }return k = null, a;
    }, e = ga.getText = function (a) {
      var b,
          c = "",
          d = 0,
          f = a.nodeType;if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
            c += e(a);
          }
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) {
        c += e(b);
      }return c;
    }, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
          return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        }, CHILD: function CHILD(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
        }, PSEUDO: function PSEUDO(a) {
          var b,
              c = !a[6] && a[2];return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        } }, filter: { TAG: function TAG(a) {
          var b = a.replace(_, aa).toLowerCase();return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        }, CLASS: function CLASS(a) {
          var b = y[a + " "];return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(a, b, c) {
          return function (d) {
            var e = ga.attr(d, a);return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"));
          };
        }, CHILD: function CHILD(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
                k,
                l,
                m,
                n,
                o,
                p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h,
                t = !1;if (q) {
              if (f) {
                while (p) {
                  m = b;while (m = m[p]) {
                    if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                  }o = p = "only" === a && !o && "nextSibling";
                }return !0;
              }if (o = [g ? q.firstChild : q.lastChild], g && s) {
                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                  if (1 === m.nodeType && ++t && m === b) {
                    k[a] = [w, n, t];break;
                  }
                }
              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
              }return t -= e, t === d || t % d === 0 && t / d >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(a, b) {
          var c,
              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
            var d,
                f = e(a, b),
                g = f.length;while (g--) {
              d = I(a, f[g]), a[d] = !(c[d] = f[g]);
            }
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        } }, pseudos: { not: ia(function (a) {
          var b = [],
              c = [],
              d = h(a.replace(P, "$1"));return d[u] ? ia(function (a, b, c, e) {
            var f,
                g = d(a, null, e, []),
                h = a.length;while (h--) {
              (f = g[h]) && (a[h] = !(b[h] = f));
            }
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
          };
        }), has: ia(function (a) {
          return function (b) {
            return ga(a, b).length > 0;
          };
        }), contains: ia(function (a) {
          return a = a.replace(_, aa), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }), lang: ia(function (a) {
          return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(), function (b) {
            var c;do {
              if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
            } while ((b = b.parentNode) && 1 === b.nodeType);return !1;
          };
        }), target: function target(b) {
          var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
        }, root: function root(a) {
          return a === o;
        }, focus: function focus(a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        }, enabled: oa(!1), disabled: oa(!0), checked: function checked(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
        }, selected: function selected(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        }, empty: function empty(a) {
          for (a = a.firstChild; a; a = a.nextSibling) {
            if (a.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(a) {
          return !d.pseudos.empty(a);
        }, header: function header(a) {
          return X.test(a.nodeName);
        }, input: function input(a) {
          return W.test(a.nodeName);
        }, button: function button(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
        }, text: function text(a) {
          var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
        }, first: pa(function () {
          return [0];
        }), last: pa(function (a, b) {
          return [b - 1];
        }), eq: pa(function (a, b, c) {
          return [c < 0 ? c + b : c];
        }), even: pa(function (a, b) {
          for (var c = 0; c < b; c += 2) {
            a.push(c);
          }return a;
        }), odd: pa(function (a, b) {
          for (var c = 1; c < b; c += 2) {
            a.push(c);
          }return a;
        }), lt: pa(function (a, b, c) {
          for (var d = c < 0 ? c + b : c; --d >= 0;) {
            a.push(d);
          }return a;
        }), gt: pa(function (a, b, c) {
          for (var d = c < 0 ? c + b : c; ++d < b;) {
            a.push(d);
          }return a;
        }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      d.pseudos[b] = ma(b);
    }for (b in { submit: !0, reset: !0 }) {
      d.pseudos[b] = na(b);
    }function ra() {}ra.prototype = d.filters = d.pseudos, d.setFilters = new ra(), g = ga.tokenize = function (a, b) {
      var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
        c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length));for (g in d.filter) {
          !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
        }if (!c) break;
      }return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
    };function sa(a) {
      for (var b = 0, c = a.length, d = ""; b < c; b++) {
        d += a[b].value;
      }return d;
    }function ta(a, b, c) {
      var d = b.dir,
          e = b.next,
          f = e || d,
          g = c && "parentNode" === f,
          h = x++;return b.first ? function (b, c, e) {
        while (b = b[d]) {
          if (1 === b.nodeType || g) return a(b, c, e);
        }return !1;
      } : function (b, c, i) {
        var j,
            k,
            l,
            m = [w, h];if (i) {
          while (b = b[d]) {
            if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
          }
        } else while (b = b[d]) {
          if (1 === b.nodeType || g) if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;else {
            if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];if (k[f] = m, m[2] = a(b, c, i)) return !0;
          }
        }return !1;
      };
    }function ua(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;while (e--) {
          if (!a[e](b, c, d)) return !1;
        }return !0;
      } : a[0];
    }function va(a, b, c) {
      for (var d = 0, e = b.length; d < e; d++) {
        ga(a, b[d], c);
      }return c;
    }function wa(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++) {
        (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
      }return g;
    }function xa(a, b, c, d, e, f) {
      return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function (f, g, h, i) {
        var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || va(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : wa(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
          j = wa(r, n), d(j, [], h, i), k = j.length;while (k--) {
            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
        }if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;while (k--) {
                (l = r[k]) && j.push(q[k] = l);
              }e(null, r = [], j, i);
            }k = r.length;while (k--) {
              (l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
            }
          }
        } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r);
      });
    }function ya(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function (a) {
        return a === b;
      }, h, !0), l = ta(function (a) {
        return I(b, a) > -1;
      }, h, !0), m = [function (a, c, d) {
        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
      }]; i < f; i++) {
        if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; e < f; e++) {
              if (d.relative[a[e].type]) break;
            }return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a));
          }m.push(c);
        }
      }return ua(m);
    }function za(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function f(_f, g, h, i, k) {
        var l,
            o,
            q,
            r = 0,
            s = "0",
            t = _f && [],
            u = [],
            v = j,
            x = _f || e && d.find.TAG("*", k),
            y = w += null == v ? 1 : Math.random() || .1,
            z = x.length;for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
          if (e && l) {
            o = 0, g || l.ownerDocument === n || (m(l), h = !p);while (q = a[o++]) {
              if (q(l, g || n, h)) {
                i.push(l);break;
              }
            }k && (w = y);
          }c && ((l = !q && l) && r--, _f && t.push(l));
        }if (r += s, c && s !== r) {
          o = 0;while (q = b[o++]) {
            q(t, u, g, h);
          }if (_f) {
            if (r > 0) while (s--) {
              t[s] || u[s] || (u[s] = E.call(i));
            }u = wa(u);
          }G.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i);
        }return k && (w = y, j = v), t;
      };return c ? ia(f) : f;
    }return h = ga.compile = function (a, b) {
      var c,
          d = [],
          e = [],
          f = A[a + " "];if (!f) {
        b || (b = g(a)), c = b.length;while (c--) {
          f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
        }f = A(a, za(e, d)), f.selector = a;
      }return f;
    }, i = ga.select = function (a, b, c, e) {
      var f,
          i,
          j,
          k,
          l,
          m = "function" == typeof a && a,
          n = !e && g(a = m.selector || a);if (c = c || [], 1 === n.length) {
        if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
          if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;m && (b = b.parentNode), a = a.slice(i.shift().value.length);
        }f = V.needsContext.test(a) ? 0 : i.length;while (f--) {
          if (j = i[f], d.relative[k = j.type]) break;if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
            if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c;break;
          }
        }
      }return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c;
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("fieldset"));
    }), ja(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || ka("type|href|height|width", function (a, b, c) {
      if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ja(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || ka("value", function (a, b, c) {
      if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
    }), ja(function (a) {
      return null == a.getAttribute("disabled");
    }) || ka(J, function (a, b, c) {
      var d;if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), ga;
  }(a);r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;var y = function y(a, b, c) {
    var d = [],
        e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) {
      if (1 === a.nodeType) {
        if (e && r(a).is(c)) break;d.push(a);
      }
    }return d;
  },
      z = function z(a, b) {
    for (var c = []; a; a = a.nextSibling) {
      1 === a.nodeType && a !== b && c.push(a);
    }return c;
  },
      A = r.expr.match.needsContext;function B(a, b) {
    return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
  }var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
      D = /^.[^:#\[\.,]*$/;function E(a, b, c) {
    return r.isFunction(b) ? r.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    }) : b.nodeType ? r.grep(a, function (a) {
      return a === b !== c;
    }) : "string" != typeof b ? r.grep(a, function (a) {
      return i.call(b, a) > -1 !== c;
    }) : D.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function (a) {
      return i.call(b, a) > -1 !== c && 1 === a.nodeType;
    }));
  }r.filter = function (a, b, c) {
    var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, r.fn.extend({ find: function find(a) {
      var b,
          c,
          d = this.length,
          e = this;if ("string" != typeof a) return this.pushStack(r(a).filter(function () {
        for (b = 0; b < d; b++) {
          if (r.contains(e[b], this)) return !0;
        }
      }));for (c = this.pushStack([]), b = 0; b < d; b++) {
        r.find(a, e[b], c);
      }return d > 1 ? r.uniqueSort(c) : c;
    }, filter: function filter(a) {
      return this.pushStack(E(this, a || [], !1));
    }, not: function not(a) {
      return this.pushStack(E(this, a || [], !0));
    }, is: function is(a) {
      return !!E(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length;
    } });var F,
      G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      H = r.fn.init = function (a, b, c) {
    var e, f;if (!a) return this;if (c = c || F, "string" == typeof a) {
      if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : G.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);if (e[1]) {
        if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), C.test(e[1]) && r.isPlainObject(b)) for (e in b) {
          r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
        }return this;
      }return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this;
    }return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this);
  };H.prototype = r.fn, F = r(d);var I = /^(?:parents|prev(?:Until|All))/,
      J = { children: !0, contents: !0, next: !0, prev: !0 };r.fn.extend({ has: function has(a) {
      var b = r(a, this),
          c = b.length;return this.filter(function () {
        for (var a = 0; a < c; a++) {
          if (r.contains(this, b[a])) return !0;
        }
      });
    }, closest: function closest(a, b) {
      var c,
          d = 0,
          e = this.length,
          f = [],
          g = "string" != typeof a && r(a);if (!A.test(a)) for (; d < e; d++) {
        for (c = this[d]; c && c !== b; c = c.parentNode) {
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
            f.push(c);break;
          }
        }
      }return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f);
    }, index: function index(a) {
      return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(a, b) {
      return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))));
    }, addBack: function addBack(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    } });function K(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType) {}return a;
  }r.each({ parent: function parent(a) {
      var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
    }, parents: function parents(a) {
      return y(a, "parentNode");
    }, parentsUntil: function parentsUntil(a, b, c) {
      return y(a, "parentNode", c);
    }, next: function next(a) {
      return K(a, "nextSibling");
    }, prev: function prev(a) {
      return K(a, "previousSibling");
    }, nextAll: function nextAll(a) {
      return y(a, "nextSibling");
    }, prevAll: function prevAll(a) {
      return y(a, "previousSibling");
    }, nextUntil: function nextUntil(a, b, c) {
      return y(a, "nextSibling", c);
    }, prevUntil: function prevUntil(a, b, c) {
      return y(a, "previousSibling", c);
    }, siblings: function siblings(a) {
      return z((a.parentNode || {}).firstChild, a);
    }, children: function children(a) {
      return z(a.firstChild);
    }, contents: function contents(a) {
      return B(a, "iframe") ? a.contentDocument : (B(a, "template") && (a = a.content || a), r.merge([], a.childNodes));
    } }, function (a, b) {
    r.fn[a] = function (c, d) {
      var e = r.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (J[a] || r.uniqueSort(e), I.test(a) && e.reverse()), this.pushStack(e);
    };
  });var L = /[^\x20\t\r\n\f]+/g;function M(a) {
    var b = {};return r.each(a.match(L) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }r.Callbacks = function (a) {
    a = "string" == typeof a ? M(a) : r.extend({}, a);var b,
        c,
        d,
        e,
        f = [],
        g = [],
        h = -1,
        i = function i() {
      for (e = e || a.once, d = b = !0; g.length; h = -1) {
        c = g.shift();while (++h < f.length) {
          f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
        }
      }a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
    },
        j = { add: function add() {
        return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
          r.each(b, function (b, c) {
            r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c);
          });
        }(arguments), c && !b && i()), this;
      }, remove: function remove() {
        return r.each(arguments, function (a, b) {
          var c;while ((c = r.inArray(b, f, c)) > -1) {
            f.splice(c, 1), c <= h && h--;
          }
        }), this;
      }, has: function has(a) {
        return a ? r.inArray(a, f) > -1 : f.length > 0;
      }, empty: function empty() {
        return f && (f = []), this;
      }, disable: function disable() {
        return e = g = [], f = c = "", this;
      }, disabled: function disabled() {
        return !f;
      }, lock: function lock() {
        return e = g = [], c || b || (f = c = ""), this;
      }, locked: function locked() {
        return !!e;
      }, fireWith: function fireWith(a, c) {
        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
      }, fire: function fire() {
        return j.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!d;
      } };return j;
  };function N(a) {
    return a;
  }function O(a) {
    throw a;
  }function P(a, b, c, d) {
    var e;try {
      a && r.isFunction(e = a.promise) ? e.call(a).done(b).fail(c) : a && r.isFunction(e = a.then) ? e.call(a, b, c) : b.apply(void 0, [a].slice(d));
    } catch (a) {
      c.apply(void 0, [a]);
    }
  }r.extend({ Deferred: function Deferred(b) {
      var c = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]],
          d = "pending",
          e = { state: function state() {
          return d;
        }, always: function always() {
          return f.done(arguments).fail(arguments), this;
        }, "catch": function _catch(a) {
          return e.then(null, a);
        }, pipe: function pipe() {
          var a = arguments;return r.Deferred(function (b) {
            r.each(c, function (c, d) {
              var e = r.isFunction(a[d[4]]) && a[d[4]];f[d[1]](function () {
                var a = e && e.apply(this, arguments);a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments);
              });
            }), a = null;
          }).promise();
        }, then: function then(b, d, e) {
          var f = 0;function g(b, c, d, e) {
            return function () {
              var h = this,
                  i = arguments,
                  j = function j() {
                var a, j;if (!(b < f)) {
                  if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");j = a && ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, N, e), g(f, c, O, e)) : (f++, j.call(a, g(f, c, N, e), g(f, c, O, e), g(f, c, N, c.notifyWith))) : (d !== N && (h = void 0, i = [a]), (e || c.resolveWith)(h, i));
                }
              },
                  k = e ? j : function () {
                try {
                  j();
                } catch (a) {
                  r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== O && (h = void 0, i = [a]), c.rejectWith(h, i));
                }
              };b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k));
            };
          }return r.Deferred(function (a) {
            c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : N)), c[2][3].add(g(0, a, r.isFunction(d) ? d : O));
          }).promise();
        }, promise: function promise(a) {
          return null != a ? r.extend(a, e) : e;
        } },
          f = {};return r.each(c, function (a, b) {
        var g = b[2],
            h = b[5];e[b[1]] = g.add, h && g.add(function () {
          d = h;
        }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () {
          return f[b[0] + "With"](this === f ? void 0 : this, arguments), this;
        }, f[b[0] + "With"] = g.fireWith;
      }), e.promise(f), b && b.call(f, f), f;
    }, when: function when(a) {
      var b = arguments.length,
          c = b,
          d = Array(c),
          e = f.call(arguments),
          g = r.Deferred(),
          h = function h(a) {
        return function (c) {
          d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e);
        };
      };if (b <= 1 && (P(a, g.done(h(c)).resolve, g.reject, !b), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();while (c--) {
        P(e[c], h(c), g.reject);
      }return g.promise();
    } });var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook = function (b, c) {
    a.console && a.console.warn && b && Q.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
  }, r.readyException = function (b) {
    a.setTimeout(function () {
      throw b;
    });
  };var R = r.Deferred();r.fn.ready = function (a) {
    return R.then(a)["catch"](function (a) {
      r.readyException(a);
    }), this;
  }, r.extend({ isReady: !1, readyWait: 1, ready: function ready(a) {
      (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || R.resolveWith(d, [r]));
    } }), r.ready.then = R.then;function S() {
    d.removeEventListener("DOMContentLoaded", S), a.removeEventListener("load", S), r.ready();
  }"complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", S), a.addEventListener("load", S));var T = function T(a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;if ("object" === r.type(c)) {
      e = !0;for (h in c) {
        T(a, b, h, c[h], !0, f, g);
      }
    } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b, c) {
      return j.call(r(a), c);
    })), b)) for (; h < i; h++) {
      b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    }return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  },
      U = function U(a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
  };function V() {
    this.expando = r.expando + V.uid++;
  }V.uid = 1, V.prototype = { cache: function cache(a) {
      var b = a[this.expando];return b || (b = {}, U(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b;
    }, set: function set(a, b, c) {
      var d,
          e = this.cache(a);if ("string" == typeof b) e[r.camelCase(b)] = c;else for (d in b) {
        e[r.camelCase(d)] = b[d];
      }return e;
    }, get: function get(a, b) {
      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)];
    }, access: function access(a, b, c) {
      return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b);
    }, remove: function remove(a, b) {
      var c,
          d = a[this.expando];if (void 0 !== d) {
        if (void 0 !== b) {
          Array.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(L) || []), c = b.length;while (c--) {
            delete d[b[c]];
          }
        }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
      }
    }, hasData: function hasData(a) {
      var b = a[this.expando];return void 0 !== b && !r.isEmptyObject(b);
    } };var W = new V(),
      X = new V(),
      Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Z = /[A-Z]/g;function $(a) {
    return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : Y.test(a) ? JSON.parse(a) : a);
  }function _(a, b, c) {
    var d;if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Z, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
      try {
        c = $(c);
      } catch (e) {}X.set(a, b, c);
    } else c = void 0;return c;
  }r.extend({ hasData: function hasData(a) {
      return X.hasData(a) || W.hasData(a);
    }, data: function data(a, b, c) {
      return X.access(a, b, c);
    }, removeData: function removeData(a, b) {
      X.remove(a, b);
    }, _data: function _data(a, b, c) {
      return W.access(a, b, c);
    }, _removeData: function _removeData(a, b) {
      W.remove(a, b);
    } }), r.fn.extend({ data: function data(a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;if (void 0 === a) {
        if (this.length && (e = X.get(f), 1 === f.nodeType && !W.get(f, "hasDataAttrs"))) {
          c = g.length;while (c--) {
            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), _(f, d, e[d])));
          }W.set(f, "hasDataAttrs", !0);
        }return e;
      }return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
        X.set(this, a);
      }) : T(this, function (b) {
        var c;if (f && void 0 === b) {
          if (c = X.get(f, a), void 0 !== c) return c;if (c = _(f, a), void 0 !== c) return c;
        } else this.each(function () {
          X.set(this, a, b);
        });
      }, null, b, arguments.length > 1, null, !0);
    }, removeData: function removeData(a) {
      return this.each(function () {
        X.remove(this, a);
      });
    } }), r.extend({ queue: function queue(a, b, c) {
      var d;if (a) return b = (b || "fx") + "queue", d = W.get(a, b), c && (!d || Array.isArray(c) ? d = W.access(a, b, r.makeArray(c)) : d.push(c)), d || [];
    }, dequeue: function dequeue(a, b) {
      b = b || "fx";var c = r.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = r._queueHooks(a, b),
          g = function g() {
        r.dequeue(a, b);
      };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    }, _queueHooks: function _queueHooks(a, b) {
      var c = b + "queueHooks";return W.get(a, c) || W.access(a, c, { empty: r.Callbacks("once memory").add(function () {
          W.remove(a, [b + "queue", c]);
        }) });
    } }), r.fn.extend({ queue: function queue(a, b) {
      var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = r.queue(this, a, b);r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a);
      });
    }, dequeue: function dequeue(a) {
      return this.each(function () {
        r.dequeue(this, a);
      });
    }, clearQueue: function clearQueue(a) {
      return this.queue(a || "fx", []);
    }, promise: function promise(a, b) {
      var c,
          d = 1,
          e = r.Deferred(),
          f = this,
          g = this.length,
          h = function h() {
        --d || e.resolveWith(f, [f]);
      };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
        c = W.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      }return h(), e.promise(b);
    } });var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"),
      ca = ["Top", "Right", "Bottom", "Left"],
      da = function da(a, b) {
    return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display");
  },
      ea = function ea(a, b, c, d) {
    var e,
        f,
        g = {};for (f in b) {
      g[f] = a.style[f], a.style[f] = b[f];
    }e = c.apply(a, d || []);for (f in b) {
      a.style[f] = g[f];
    }return e;
  };function fa(a, b, c, d) {
    var e,
        f = 1,
        g = 20,
        h = d ? function () {
      return d.cur();
    } : function () {
      return r.css(a, b, "");
    },
        i = h(),
        j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
        k = (r.cssNumber[b] || "px" !== j && +i) && ba.exec(r.css(a, b));if (k && k[3] !== j) {
      j = j || k[3], c = c || [], k = +i || 1;do {
        f = f || ".5", k /= f, r.style(a, b, k + j);
      } while (f !== (f = h() / i) && 1 !== f && --g);
    }return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
  }var ga = {};function ha(a) {
    var b,
        c = a.ownerDocument,
        d = a.nodeName,
        e = ga[d];return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), ga[d] = e, e);
  }function ia(a, b) {
    for (var c, d, e = [], f = 0, g = a.length; f < g; f++) {
      d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = W.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && da(d) && (e[f] = ha(d))) : "none" !== c && (e[f] = "none", W.set(d, "display", c)));
    }for (f = 0; f < g; f++) {
      null != e[f] && (a[f].style.display = e[f]);
    }return a;
  }r.fn.extend({ show: function show() {
      return ia(this, !0);
    }, hide: function hide() {
      return ia(this);
    }, toggle: function toggle(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        da(this) ? r(this).show() : r(this).hide();
      });
    } });var ja = /^(?:checkbox|radio)$/i,
      ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      la = /^$|\/(?:java|ecma)script/i,
      ma = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ma.optgroup = ma.option, ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead, ma.th = ma.td;function na(a, b) {
    var c;return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && B(a, b) ? r.merge([a], c) : c;
  }function oa(a, b) {
    for (var c = 0, d = a.length; c < d; c++) {
      W.set(a[c], "globalEval", !b || W.get(b[c], "globalEval"));
    }
  }var pa = /<|&#?\w+;/;function qa(a, b, c, d, e) {
    for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++) {
      if (f = a[n], f || 0 === f) if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);else if (pa.test(f)) {
        g = g || l.appendChild(b.createElement("div")), h = (ka.exec(f) || ["", ""])[1].toLowerCase(), i = ma[h] || ma._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];while (k--) {
          g = g.lastChild;
        }r.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
      } else m.push(b.createTextNode(f));
    }l.textContent = "", n = 0;while (f = m[n++]) {
      if (d && r.inArray(f, d) > -1) e && e.push(f);else if (j = r.contains(f.ownerDocument, f), g = na(l.appendChild(f), "script"), j && oa(g), c) {
        k = 0;while (f = g[k++]) {
          la.test(f.type || "") && c.push(f);
        }
      }
    }return l;
  }!function () {
    var a = d.createDocumentFragment(),
        b = a.appendChild(d.createElement("div")),
        c = d.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
  }();var ra = d.documentElement,
      sa = /^key/,
      ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      ua = /^([^.]*)(?:\.(.+)|)/;function va() {
    return !0;
  }function wa() {
    return !1;
  }function xa() {
    try {
      return d.activeElement;
    } catch (a) {}
  }function ya(a, b, c, d, e, f) {
    var g, h;if ("object" == (typeof b === "undefined" ? "undefined" : _typeof(b))) {
      "string" != typeof c && (d = d || c, c = void 0);for (h in b) {
        ya(a, h, c, d, b[h], f);
      }return a;
    }if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = wa;else if (!e) return a;return 1 === f && (g = e, e = function e(a) {
      return r().off(a), g.apply(this, arguments);
    }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function () {
      r.event.add(this, b, e, d, c);
    });
  }r.event = { global: {}, add: function add(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = W.get(a);if (q) {
        c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(ra, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
          return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0;
        }), b = (b || "").match(L) || [""], j = b.length;while (j--) {
          h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && r.expr.match.needsContext.test(e), namespace: o.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0);
        }
      }
    }, remove: function remove(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = W.hasData(a) && W.get(a);if (q && (i = q.events)) {
        b = (b || "").match(L) || [""], j = b.length;while (j--) {
          if (h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
            l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) {
              k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
            }g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n]);
          } else for (n in i) {
            r.event.remove(a, n + b[j], c, d, !0);
          }
        }r.isEmptyObject(i) && W.remove(a, "handle events");
      }
    }, dispatch: function dispatch(a) {
      var b = r.event.fix(a),
          c,
          d,
          e,
          f,
          g,
          h,
          i = new Array(arguments.length),
          j = (W.get(this, "events") || {})[b.type] || [],
          k = r.event.special[b.type] || {};for (i[0] = b, c = 1; c < arguments.length; c++) {
        i[c] = arguments[c];
      }if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
        h = r.event.handlers.call(this, b, j), c = 0;while ((f = h[c++]) && !b.isPropagationStopped()) {
          b.currentTarget = f.elem, d = 0;while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) {
            b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()));
          }
        }return k.postDispatch && k.postDispatch.call(this, b), b.result;
      }
    }, handlers: function handlers(a, b) {
      var c,
          d,
          e,
          f,
          g,
          h = [],
          i = b.delegateCount,
          j = a.target;if (i && j.nodeType && !("click" === a.type && a.button >= 1)) for (; j !== this; j = j.parentNode || this) {
        if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
          for (f = [], g = {}, c = 0; c < i; c++) {
            d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
          }f.length && h.push({ elem: j, handlers: f });
        }
      }return j = this, i < b.length && h.push({ elem: j, handlers: b.slice(i) }), h;
    }, addProp: function addProp(a, b) {
      Object.defineProperty(r.Event.prototype, a, { enumerable: !0, configurable: !0, get: r.isFunction(b) ? function () {
          if (this.originalEvent) return b(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[a];
        }, set: function set(b) {
          Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: b });
        } });
    }, fix: function fix(a) {
      return a[r.expando] ? a : new r.Event(a);
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== xa() && this.focus) return this.focus(), !1;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          if (this === xa() && this.blur) return this.blur(), !1;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          if ("checkbox" === this.type && this.click && B(this, "input")) return this.click(), !1;
        }, _default: function _default(a) {
          return B(a.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        } } } }, r.removeEvent = function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c);
  }, r.Event = function (a, b) {
    return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? va : wa, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void (this[r.expando] = !0)) : new r.Event(a, b);
  }, r.Event.prototype = { constructor: r.Event, isDefaultPrevented: wa, isPropagationStopped: wa, isImmediatePropagationStopped: wa, isSimulated: !1, preventDefault: function preventDefault() {
      var a = this.originalEvent;this.isDefaultPrevented = va, a && !this.isSimulated && a.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var a = this.originalEvent;this.isPropagationStopped = va, a && !this.isSimulated && a.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var a = this.originalEvent;this.isImmediatePropagationStopped = va, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation();
    } }, r.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(a) {
      var b = a.button;return null == a.which && sa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ta.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which;
    } }, r.event.addProp), r.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
    r.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      } };
  }), r.fn.extend({ on: function on(a, b, c, d) {
      return ya(this, a, b, c, d);
    }, one: function one(a, b, c, d) {
      return ya(this, a, b, c, d, 1);
    }, off: function off(a, b, c) {
      var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
        for (e in a) {
          this.off(e, b, a[e]);
        }return this;
      }return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = wa), this.each(function () {
        r.event.remove(this, a, c, b);
      });
    } });var za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Aa = /<script|<style|<link/i,
      Ba = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ca = /^true\/(.*)/,
      Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a, b) {
    return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr") ? r(">tbody", a)[0] || a : a;
  }function Fa(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
  }function Ga(a) {
    var b = Ca.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }function Ha(a, b) {
    var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
      if (W.hasData(a) && (f = W.access(a), g = W.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};for (e in j) {
          for (c = 0, d = j[e].length; c < d; c++) {
            r.event.add(b, e, j[e][c]);
          }
        }
      }X.hasData(a) && (h = X.access(a), i = r.extend({}, h), X.set(b, i));
    }
  }function Ia(a, b) {
    var c = b.nodeName.toLowerCase();"input" === c && ja.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
  }function Ja(a, b, c, d) {
    b = g.apply([], b);var e,
        f,
        h,
        i,
        j,
        k,
        l = 0,
        m = a.length,
        n = m - 1,
        q = b[0],
        s = r.isFunction(q);if (s || m > 1 && "string" == typeof q && !o.checkClone && Ba.test(q)) return a.each(function (e) {
      var f = a.eq(e);s && (b[0] = q.call(this, e, f.html())), Ja(f, b, c, d);
    });if (m && (e = qa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
      for (h = r.map(na(e, "script"), Fa), i = h.length; l < m; l++) {
        j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, na(j, "script"))), c.call(a[l], j, l);
      }if (i) for (k = h[h.length - 1].ownerDocument, r.map(h, Ga), l = 0; l < i; l++) {
        j = h[l], la.test(j.type || "") && !W.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Da, ""), k));
      }
    }return a;
  }function Ka(a, b, c) {
    for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
      c || 1 !== d.nodeType || r.cleanData(na(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && oa(na(d, "script")), d.parentNode.removeChild(d));
    }return a;
  }r.extend({ htmlPrefilter: function htmlPrefilter(a) {
      return a.replace(za, "<$1></$2>");
    }, clone: function clone(a, b, c) {
      var d,
          e,
          f,
          g,
          h = a.cloneNode(!0),
          i = r.contains(a.ownerDocument, a);if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a))) for (g = na(h), f = na(a), d = 0, e = f.length; d < e; d++) {
        Ia(f[d], g[d]);
      }if (b) if (c) for (f = f || na(a), g = g || na(h), d = 0, e = f.length; d < e; d++) {
        Ha(f[d], g[d]);
      } else Ha(a, h);return g = na(h, "script"), g.length > 0 && oa(g, !i && na(a, "script")), h;
    }, cleanData: function cleanData(a) {
      for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++) {
        if (U(c)) {
          if (b = c[W.expando]) {
            if (b.events) for (d in b.events) {
              e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
            }c[W.expando] = void 0;
          }c[X.expando] && (c[X.expando] = void 0);
        }
      }
    } }), r.fn.extend({ detach: function detach(a) {
      return Ka(this, a, !0);
    }, remove: function remove(a) {
      return Ka(this, a);
    }, text: function text(a) {
      return T(this, function (a) {
        return void 0 === a ? r.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
        });
      }, null, a, arguments.length);
    }, append: function append() {
      return Ja(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ea(this, a);b.appendChild(a);
        }
      });
    }, prepend: function prepend() {
      return Ja(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ea(this, a);b.insertBefore(a, b.firstChild);
        }
      });
    }, before: function before() {
      return Ja(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    }, after: function after() {
      return Ja(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    }, empty: function empty() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && (r.cleanData(na(a, !1)), a.textContent = "");
      }return this;
    }, clone: function clone(a, b) {
      return a = null != a && a, b = null == b ? a : b, this.map(function () {
        return r.clone(this, a, b);
      });
    }, html: function html(a) {
      return T(this, function (a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !Aa.test(a) && !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = r.htmlPrefilter(a);try {
            for (; c < d; c++) {
              b = this[c] || {}, 1 === b.nodeType && (r.cleanData(na(b, !1)), b.innerHTML = a);
            }b = 0;
          } catch (e) {}
        }b && this.empty().append(a);
      }, null, a, arguments.length);
    }, replaceWith: function replaceWith() {
      var a = [];return Ja(this, arguments, function (b) {
        var c = this.parentNode;r.inArray(this, a) < 0 && (r.cleanData(na(this)), c && c.replaceChild(b, this));
      }, a);
    } }), r.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
    r.fn[a] = function (a) {
      for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) {
        c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
      }return this.pushStack(d);
    };
  });var La = /^margin/,
      Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"),
      Na = function Na(b) {
    var c = b.ownerDocument.defaultView;return c && c.opener || (c = a), c.getComputedStyle(b);
  };!function () {
    function b() {
      if (i) {
        i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", ra.appendChild(h);var b = a.getComputedStyle(i);c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, ra.removeChild(h), i = null;
      }
    }var c,
        e,
        f,
        g,
        h = d.createElement("div"),
        i = d.createElement("div");i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, { pixelPosition: function pixelPosition() {
        return b(), c;
      }, boxSizingReliable: function boxSizingReliable() {
        return b(), e;
      }, pixelMarginRight: function pixelMarginRight() {
        return b(), f;
      }, reliableMarginLeft: function reliableMarginLeft() {
        return b(), g;
      } }));
  }();function Oa(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;return c = c || Na(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ma.test(g) && La.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
  }function Pa(a, b) {
    return { get: function get() {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
      } };
  }var Qa = /^(none|table(?!-c[ea]).+)/,
      Ra = /^--/,
      Sa = { position: "absolute", visibility: "hidden", display: "block" },
      Ta = { letterSpacing: "0", fontWeight: "400" },
      Ua = ["Webkit", "Moz", "ms"],
      Va = d.createElement("div").style;function Wa(a) {
    if (a in Va) return a;var b = a[0].toUpperCase() + a.slice(1),
        c = Ua.length;while (c--) {
      if (a = Ua[c] + b, a in Va) return a;
    }
  }function Xa(a) {
    var b = r.cssProps[a];return b || (b = r.cssProps[a] = Wa(a) || a), b;
  }function Ya(a, b, c) {
    var d = ba.exec(b);return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
  }function Za(a, b, c, d, e) {
    var f,
        g = 0;for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) {
      "margin" === c && (g += r.css(a, c + ca[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ca[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ca[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ca[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ca[f] + "Width", !0, e)));
    }return g;
  }function $a(a, b, c) {
    var d,
        e = Na(a),
        f = Oa(a, b, e),
        g = "border-box" === r.css(a, "boxSizing", !1, e);return Ma.test(f) ? f : (d = g && (o.boxSizingReliable() || f === a.style[b]), "auto" === f && (f = a["offset" + b[0].toUpperCase() + b.slice(1)]), f = parseFloat(f) || 0, f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px");
  }r.extend({ cssHooks: { opacity: { get: function get(a, b) {
          if (b) {
            var c = Oa(a, "opacity");return "" === c ? "1" : c;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
            f,
            g,
            h = r.camelCase(b),
            i = Ra.test(b),
            j = a.style;return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : j[b] : (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = ba.exec(c)) && e[1] && (c = fa(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i ? j.setProperty(b, c) : j[b] = c)), void 0);
      }
    }, css: function css(a, b, c, d) {
      var e,
          f,
          g,
          h = r.camelCase(b),
          i = Ra.test(b);return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Oa(a, b, d)), "normal" === e && b in Ta && (e = Ta[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
    } }), r.each(["height", "width"], function (a, b) {
    r.cssHooks[b] = { get: function get(a, c, d) {
        if (c) return !Qa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? $a(a, b, d) : ea(a, Sa, function () {
          return $a(a, b, d);
        });
      }, set: function set(a, c, d) {
        var e,
            f = d && Na(a),
            g = d && Za(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);return g && (e = ba.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Ya(a, c, g);
      } };
  }), r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function (a, b) {
    if (b) return (parseFloat(Oa(a, "marginLeft")) || a.getBoundingClientRect().left - ea(a, { marginLeft: 0 }, function () {
      return a.getBoundingClientRect().left;
    })) + "px";
  }), r.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
    r.cssHooks[a + b] = { expand: function expand(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) {
          e[a + ca[d] + b] = f[d] || f[d - 2] || f[0];
        }return e;
      } }, La.test(a) || (r.cssHooks[a + b].set = Ya);
  }), r.fn.extend({ css: function css(a, b) {
      return T(this, function (a, b, c) {
        var d,
            e,
            f = {},
            g = 0;if (Array.isArray(b)) {
          for (d = Na(a), e = b.length; g < e; g++) {
            f[b[g]] = r.css(a, b[g], !1, d);
          }return f;
        }return void 0 !== c ? r.style(a, b, c) : r.css(a, b);
      }, a, b, arguments.length > 1);
    } });function _a(a, b, c, d, e) {
    return new _a.prototype.init(a, b, c, d, e);
  }r.Tween = _a, _a.prototype = { constructor: _a, init: function init(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px");
    }, cur: function cur() {
      var a = _a.propHooks[this.prop];return a && a.get ? a.get(this) : _a.propHooks._default.get(this);
    }, run: function run(a) {
      var b,
          c = _a.propHooks[this.prop];return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : _a.propHooks._default.set(this), this;
    } }, _a.prototype.init.prototype = _a.prototype, _a.propHooks = { _default: { get: function get(a) {
        var b;return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
      }, set: function set(a) {
        r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit);
      } } }, _a.propHooks.scrollTop = _a.propHooks.scrollLeft = { set: function set(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    } }, r.easing = { linear: function linear(a) {
      return a;
    }, swing: function swing(a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    }, _default: "swing" }, r.fx = _a.prototype.init, r.fx.step = {};var ab,
      bb,
      cb = /^(?:toggle|show|hide)$/,
      db = /queueHooks$/;function eb() {
    bb && (d.hidden === !1 && a.requestAnimationFrame ? a.requestAnimationFrame(eb) : a.setTimeout(eb, r.fx.interval), r.fx.tick());
  }function fb() {
    return a.setTimeout(function () {
      ab = void 0;
    }), ab = r.now();
  }function gb(a, b) {
    var c,
        d = 0,
        e = { height: a };for (b = b ? 1 : 0; d < 4; d += 2 - b) {
      c = ca[d], e["margin" + c] = e["padding" + c] = a;
    }return b && (e.opacity = e.width = a), e;
  }function hb(a, b, c) {
    for (var d, e = (kb.tweeners[b] || []).concat(kb.tweeners["*"]), f = 0, g = e.length; f < g; f++) {
      if (d = e[f].call(c, b, a)) return d;
    }
  }function ib(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = "width" in b || "height" in b,
        m = this,
        n = {},
        o = a.style,
        p = a.nodeType && da(a),
        q = W.get(a, "fxshow");c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () {
      g.unqueued || h();
    }), g.unqueued++, m.always(function () {
      m.always(function () {
        g.unqueued--, r.queue(a, "fx").length || g.empty.fire();
      });
    }));for (d in b) {
      if (e = b[d], cb.test(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
          if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
        }n[d] = q && q[d] || r.style(a, d);
      }
    }if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
      l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = W.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ia([a], !0), j = a.style.display || j, k = r.css(a, "display"), ia([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function () {
        o.display = j;
      }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () {
        o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
      })), i = !1;for (d in n) {
        i || (q ? "hidden" in q && (p = q.hidden) : q = W.access(a, "fxshow", { display: j }), f && (q.hidden = !p), p && ia([a], !0), m.done(function () {
          p || ia([a]), W.remove(a, "fxshow");for (d in n) {
            r.style(a, d, n[d]);
          }
        })), i = hb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0));
      }
    }
  }function jb(a, b) {
    var c, d, e, f, g;for (c in a) {
      if (d = r.camelCase(c), e = b[d], f = a[c], Array.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];for (c in f) {
          c in a || (a[c] = f[c], b[c] = e);
        }
      } else b[d] = e;
    }
  }function kb(a, b, c) {
    var d,
        e,
        f = 0,
        g = kb.prefilters.length,
        h = r.Deferred().always(function () {
      delete i.elem;
    }),
        i = function i() {
      if (e) return !1;for (var b = ab || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) {
        j.tweens[g].run(f);
      }return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (i || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1);
    },
        j = h.promise({ elem: a, props: r.extend({}, b), opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c), originalProperties: b, originalOptions: c, startTime: ab || fb(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
        var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
      }, stop: function stop(b) {
        var c = 0,
            d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; c < d; c++) {
          j.tweens[c].run(1);
        }return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
      } }),
        k = j.props;for (jb(k, j.opts.specialEasing); f < g; f++) {
      if (d = kb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
    }return r.map(k, hb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always), r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j;
  }r.Animation = r.extend(kb, { tweeners: { "*": [function (a, b) {
        var c = this.createTween(a, b);return fa(c.elem, a, ba.exec(b), c), c;
      }] }, tweener: function tweener(a, b) {
      r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(L);for (var c, d = 0, e = a.length; d < e; d++) {
        c = a[d], kb.tweeners[c] = kb.tweeners[c] || [], kb.tweeners[c].unshift(b);
      }
    }, prefilters: [ib], prefilter: function prefilter(a, b) {
      b ? kb.prefilters.unshift(a) : kb.prefilters.push(a);
    } }), r.speed = function (a, b, c) {
    var d = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? r.extend({}, a) : { complete: c || !c && b || r.isFunction(a) && a, duration: a, easing: c && b || b && !r.isFunction(b) && b };return r.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in r.fx.speeds ? d.duration = r.fx.speeds[d.duration] : d.duration = r.fx.speeds._default), null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
      r.isFunction(d.old) && d.old.call(this), d.queue && r.dequeue(this, d.queue);
    }, d;
  }, r.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
      return this.filter(da).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
    }, animate: function animate(a, b, c, d) {
      var e = r.isEmptyObject(a),
          f = r.speed(b, c, d),
          g = function g() {
        var b = kb(this, r.extend({}, a), f);(e || W.get(this, "finish")) && b.stop(!0);
      };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    }, stop: function stop(a, b, c) {
      var d = function d(a) {
        var b = a.stop;delete a.stop, b(c);
      };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0,
            e = null != a && a + "queueHooks",
            f = r.timers,
            g = W.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
          g[e] && g[e].stop && db.test(e) && d(g[e]);
        }for (e = f.length; e--;) {
          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        }!b && c || r.dequeue(this, a);
      });
    }, finish: function finish(a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b,
            c = W.get(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = r.timers,
            g = d ? d.length : 0;for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        }for (b = 0; b < g; b++) {
          d[b] && d[b].finish && d[b].finish.call(this);
        }delete c.finish;
      });
    } }), r.each(["toggle", "show", "hide"], function (a, b) {
    var c = r.fn[b];r.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e);
    };
  }), r.each({ slideDown: gb("show"), slideUp: gb("hide"), slideToggle: gb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
    r.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), r.timers = [], r.fx.tick = function () {
    var a,
        b = 0,
        c = r.timers;for (ab = r.now(); b < c.length; b++) {
      a = c[b], a() || c[b] !== a || c.splice(b--, 1);
    }c.length || r.fx.stop(), ab = void 0;
  }, r.fx.timer = function (a) {
    r.timers.push(a), r.fx.start();
  }, r.fx.interval = 13, r.fx.start = function () {
    bb || (bb = !0, eb());
  }, r.fx.stop = function () {
    bb = null;
  }, r.fx.speeds = { slow: 600, fast: 200, _default: 400 }, r.fn.delay = function (b, c) {
    return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
      var e = a.setTimeout(c, b);d.stop = function () {
        a.clearTimeout(e);
      };
    });
  }, function () {
    var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value;
  }();var lb,
      mb = r.expr.attrHandle;r.fn.extend({ attr: function attr(a, b) {
      return T(this, r.attr, a, b, arguments.length > 1);
    }, removeAttr: function removeAttr(a) {
      return this.each(function () {
        r.removeAttr(this, a);
      });
    } }), r.extend({ attr: function attr(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? lb : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d));
    }, attrHooks: { type: { set: function set(a, b) {
          if (!o.radioValue && "radio" === b && B(a, "input")) {
            var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
          }
        } } }, removeAttr: function removeAttr(a, b) {
      var c,
          d = 0,
          e = b && b.match(L);if (e && 1 === a.nodeType) while (c = e[d++]) {
        a.removeAttribute(c);
      }
    } }), lb = { set: function set(a, b, c) {
      return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c;
    } }, r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = mb[b] || r.find.attr;mb[b] = function (a, b, d) {
      var e,
          f,
          g = b.toLowerCase();return d || (f = mb[g], mb[g] = e, e = null != c(a, b, d) ? g : null, mb[g] = f), e;
    };
  });var nb = /^(?:input|select|textarea|button)$/i,
      ob = /^(?:a|area)$/i;r.fn.extend({ prop: function prop(a, b) {
      return T(this, r.prop, a, b, arguments.length > 1);
    }, removeProp: function removeProp(a) {
      return this.each(function () {
        delete this[r.propFix[a] || a];
      });
    } }), r.extend({ prop: function prop(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    }, propHooks: { tabIndex: { get: function get(a) {
          var b = r.find.attr(a, "tabindex");return b ? parseInt(b, 10) : nb.test(a.nodeName) || ob.test(a.nodeName) && a.href ? 0 : -1;
        } } }, propFix: { "for": "htmlFor", "class": "className" } }), o.optSelected || (r.propHooks.selected = { get: function get(a) {
      var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
    }, set: function set(a) {
      var b = a.parentNode;b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
    } }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    r.propFix[this.toLowerCase()] = this;
  });function pb(a) {
    var b = a.match(L) || [];return b.join(" ");
  }function qb(a) {
    return a.getAttribute && a.getAttribute("class") || "";
  }r.fn.extend({ addClass: function addClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (r.isFunction(a)) return this.each(function (b) {
        r(this).addClass(a.call(this, b, qb(this)));
      });if ("string" == typeof a && a) {
        b = a.match(L) || [];while (c = this[i++]) {
          if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
            g = 0;while (f = b[g++]) {
              d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            }h = pb(d), e !== h && c.setAttribute("class", h);
          }
        }
      }return this;
    }, removeClass: function removeClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (r.isFunction(a)) return this.each(function (b) {
        r(this).removeClass(a.call(this, b, qb(this)));
      });if (!arguments.length) return this.attr("class", "");if ("string" == typeof a && a) {
        b = a.match(L) || [];while (c = this[i++]) {
          if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
            g = 0;while (f = b[g++]) {
              while (d.indexOf(" " + f + " ") > -1) {
                d = d.replace(" " + f + " ", " ");
              }
            }h = pb(d), e !== h && c.setAttribute("class", h);
          }
        }
      }return this;
    }, toggleClass: function toggleClass(a, b) {
      var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function (c) {
        r(this).toggleClass(a.call(this, c, qb(this), b), b);
      }) : this.each(function () {
        var b, d, e, f;if ("string" === c) {
          d = 0, e = r(this), f = a.match(L) || [];while (b = f[d++]) {
            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
          }
        } else void 0 !== a && "boolean" !== c || (b = qb(this), b && W.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : W.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(a) {
      var b,
          c,
          d = 0;b = " " + a + " ";while (c = this[d++]) {
        if (1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1) return !0;
      }return !1;
    } });var rb = /\r/g;r.fn.extend({ val: function val(a) {
      var b,
          c,
          d,
          e = this[0];{
        if (arguments.length) return d = r.isFunction(a), this.each(function (c) {
          var e;1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = r.map(e, function (a) {
            return null == a ? "" : a + "";
          })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
        });if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c);
      }
    } }), r.extend({ valHooks: { option: { get: function get(a) {
          var b = r.find.attr(a, "value");return null != b ? b : pb(r.text(a));
        } }, select: { get: function get(a) {
          var b,
              c,
              d,
              e = a.options,
              f = a.selectedIndex,
              g = "select-one" === a.type,
              h = g ? null : [],
              i = g ? f + 1 : e.length;for (d = f < 0 ? i : g ? f : 0; d < i; d++) {
            if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !B(c.parentNode, "optgroup"))) {
              if (b = r(c).val(), g) return b;h.push(b);
            }
          }return h;
        }, set: function set(a, b) {
          var c,
              d,
              e = a.options,
              f = r.makeArray(b),
              g = e.length;while (g--) {
            d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
          }return c || (a.selectedIndex = -1), f;
        } } } }), r.each(["radio", "checkbox"], function () {
    r.valHooks[this] = { set: function set(a, b) {
        if (Array.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1;
      } }, o.checkOn || (r.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  });var sb = /^(?:focusinfocus|focusoutblur)$/;r.extend(r.event, { trigger: function trigger(b, c, e, f) {
      var g,
          h,
          i,
          j,
          k,
          m,
          n,
          o = [e || d],
          p = l.call(b, "type") ? b.type : b,
          q = l.call(b, "namespace") ? b.namespace.split(".") : [];if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !sb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
        if (!f && !n.noBubble && !r.isWindow(e)) {
          for (j = n.delegateType || p, sb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) {
            o.push(h), i = h;
          }i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a);
        }g = 0;while ((h = o[g++]) && !b.isPropagationStopped()) {
          b.type = g > 1 ? j : n.bindType || p, m = (W.get(h, "events") || {})[b.type] && W.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && U(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
        }return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !U(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result;
      }
    }, simulate: function simulate(a, b, c) {
      var d = r.extend(new r.Event(), c, { type: a, isSimulated: !0 });r.event.trigger(d, null, b);
    } }), r.fn.extend({ trigger: function trigger(a, b) {
      return this.each(function () {
        r.event.trigger(a, b, this);
      });
    }, triggerHandler: function triggerHandler(a, b) {
      var c = this[0];if (c) return r.event.trigger(a, b, c, !0);
    } }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
    r.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), r.fn.extend({ hover: function hover(a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    } }), o.focusin = "onfocusin" in a, o.focusin || r.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
    var c = function c(a) {
      r.event.simulate(b, a.target, r.event.fix(a));
    };r.event.special[b] = { setup: function setup() {
        var d = this.ownerDocument || this,
            e = W.access(d, b);e || d.addEventListener(a, c, !0), W.access(d, b, (e || 0) + 1);
      }, teardown: function teardown() {
        var d = this.ownerDocument || this,
            e = W.access(d, b) - 1;e ? W.access(d, b, e) : (d.removeEventListener(a, c, !0), W.remove(d, b));
      } };
  });var tb = a.location,
      ub = r.now(),
      vb = /\?/;r.parseXML = function (b) {
    var c;if (!b || "string" != typeof b) return null;try {
      c = new a.DOMParser().parseFromString(b, "text/xml");
    } catch (d) {
      c = void 0;
    }return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c;
  };var wb = /\[\]$/,
      xb = /\r?\n/g,
      yb = /^(?:submit|button|image|reset|file)$/i,
      zb = /^(?:input|select|textarea|keygen)/i;function Ab(a, b, c, d) {
    var e;if (Array.isArray(b)) r.each(b, function (b, e) {
      c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null != e ? b : "") + "]", e, c, d);
    });else if (c || "object" !== r.type(b)) d(a, b);else for (e in b) {
      Ab(a + "[" + e + "]", b[e], c, d);
    }
  }r.param = function (a, b) {
    var c,
        d = [],
        e = function e(a, b) {
      var c = r.isFunction(b) ? b() : b;d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
    };if (Array.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) {
      Ab(c, a[c], b, e);
    }return d.join("&");
  }, r.fn.extend({ serialize: function serialize() {
      return r.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var a = r.prop(this, "elements");return a ? r.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;return this.name && !r(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !ja.test(a));
      }).map(function (a, b) {
        var c = r(this).val();return null == c ? null : Array.isArray(c) ? r.map(c, function (a) {
          return { name: b.name, value: a.replace(xb, "\r\n") };
        }) : { name: b.name, value: c.replace(xb, "\r\n") };
      }).get();
    } });var Bb = /%20/g,
      Cb = /#.*$/,
      Db = /([?&])_=[^&]*/,
      Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Gb = /^(?:GET|HEAD)$/,
      Hb = /^\/\//,
      Ib = {},
      Jb = {},
      Kb = "*/".concat("*"),
      Lb = d.createElement("a");Lb.href = tb.href;function Mb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");var d,
          e = 0,
          f = b.toLowerCase().match(L) || [];if (r.isFunction(c)) while (d = f[e++]) {
        "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
      }
    };
  }function Nb(a, b, c, d) {
    var e = {},
        f = a === Jb;function g(h) {
      var i;return e[h] = !0, r.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }return g(b.dataTypes[0]) || !e["*"] && g("*");
  }function Ob(a, b) {
    var c,
        d,
        e = r.ajaxSettings.flatOptions || {};for (c in b) {
      void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    }return d && r.extend(!0, a, d), a;
  }function Pb(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;while ("*" === i[0]) {
      i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    }if (d) for (e in h) {
      if (h[e] && h[e].test(d)) {
        i.unshift(e);break;
      }
    }if (i[0] in c) f = i[0];else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;break;
        }g || (g = e);
      }f = f || g;
    }if (f) return f !== i[0] && i.unshift(f), c[f];
  }function Qb(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
      j[g.toLowerCase()] = a.converters[g];
    }f = k.shift();while (f) {
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
        if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
          }
        }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
          b = g(b);
        } catch (l) {
          return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
        }
      }
    }return { state: "success", data: b };
  }r.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: tb.href, type: "GET", isLocal: Fb.test(tb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Kb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": r.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
      return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a);
    }, ajaxPrefilter: Mb(Ib), ajaxTransport: Mb(Jb), ajax: function ajax(b, c) {
      "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (c = b, b = void 0), c = c || {};var e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o = r.ajaxSetup({}, c),
          p = o.context || o,
          q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
          s = r.Deferred(),
          t = r.Callbacks("once memory"),
          u = o.statusCode || {},
          v = {},
          w = {},
          x = "canceled",
          y = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
          var b;if (k) {
            if (!h) {
              h = {};while (b = Eb.exec(g)) {
                h[b[1].toLowerCase()] = b[2];
              }
            }b = h[a.toLowerCase()];
          }return null == b ? null : b;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return k ? g : null;
        }, setRequestHeader: function setRequestHeader(a, b) {
          return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this;
        }, overrideMimeType: function overrideMimeType(a) {
          return null == k && (o.mimeType = a), this;
        }, statusCode: function statusCode(a) {
          var b;if (a) if (k) y.always(a[y.status]);else for (b in a) {
            u[b] = [u[b], a[b]];
          }return this;
        }, abort: function abort(a) {
          var b = a || x;return e && e.abort(b), A(0, b), this;
        } };if (s.promise(y), o.url = ((b || o.url || tb.href) + "").replace(Hb, tb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(L) || [""], null == o.crossDomain) {
        j = d.createElement("a");try {
          j.href = o.url, j.href = j.href, o.crossDomain = Lb.protocol + "//" + Lb.host != j.protocol + "//" + j.host;
        } catch (z) {
          o.crossDomain = !0;
        }
      }if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Nb(Ib, o, c, y), k) return y;l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Gb.test(o.type), f = o.url.replace(Cb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Bb, "+")) : (n = o.url.slice(f.length), o.data && (f += (vb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Db, "$1"), n = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Kb + "; q=0.01" : "") : o.accepts["*"]);for (m in o.headers) {
        y.setRequestHeader(m, o.headers[m]);
      }if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Nb(Jb, o, c, y)) {
        if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;o.async && o.timeout > 0 && (i = a.setTimeout(function () {
          y.abort("timeout");
        }, o.timeout));try {
          k = !1, e.send(v, A);
        } catch (z) {
          if (k) throw z;A(-1, z);
        }
      } else A(-1, "No Transport");function A(b, c, d, h) {
        var j,
            m,
            n,
            v,
            w,
            x = c;k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Pb(o, y, d)), v = Qb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")));
      }return y;
    }, getJSON: function getJSON(a, b, c) {
      return r.get(a, b, c, "json");
    }, getScript: function getScript(a, b) {
      return r.get(a, void 0, b, "script");
    } }), r.each(["get", "post"], function (a, b) {
    r[b] = function (a, c, d, e) {
      return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({ url: a, type: b, dataType: e, data: c, success: d }, r.isPlainObject(a) && a));
    };
  }), r._evalUrl = function (a) {
    return r.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 });
  }, r.fn.extend({ wrapAll: function wrapAll(a) {
      var b;return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
        var a = this;while (a.firstElementChild) {
          a = a.firstElementChild;
        }return a;
      }).append(this)), this;
    }, wrapInner: function wrapInner(a) {
      return r.isFunction(a) ? this.each(function (b) {
        r(this).wrapInner(a.call(this, b));
      }) : this.each(function () {
        var b = r(this),
            c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
      });
    }, wrap: function wrap(a) {
      var b = r.isFunction(a);return this.each(function (c) {
        r(this).wrapAll(b ? a.call(this, c) : a);
      });
    }, unwrap: function unwrap(a) {
      return this.parent(a).not("body").each(function () {
        r(this).replaceWith(this.childNodes);
      }), this;
    } }), r.expr.pseudos.hidden = function (a) {
    return !r.expr.pseudos.visible(a);
  }, r.expr.pseudos.visible = function (a) {
    return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
  }, r.ajaxSettings.xhr = function () {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  };var Rb = { 0: 200, 1223: 204 },
      Sb = r.ajaxSettings.xhr();o.cors = !!Sb && "withCredentials" in Sb, o.ajax = Sb = !!Sb, r.ajaxTransport(function (b) {
    var _c, d;if (o.cors || Sb && !b.crossDomain) return { send: function send(e, f) {
        var g,
            h = b.xhr();if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) {
          h[g] = b.xhrFields[g];
        }b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");for (g in e) {
          h.setRequestHeader(g, e[g]);
        }_c = function c(a) {
          return function () {
            _c && (_c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Rb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders()));
          };
        }, h.onload = _c(), d = h.onerror = _c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
          4 === h.readyState && a.setTimeout(function () {
            _c && d();
          });
        }, _c = _c("abort");try {
          h.send(b.hasContent && b.data || null);
        } catch (i) {
          if (_c) throw i;
        }
      }, abort: function abort() {
        _c && _c();
      } };
  }), r.ajaxPrefilter(function (a) {
    a.crossDomain && (a.contents.script = !1);
  }), r.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(a) {
        return r.globalEval(a), a;
      } } }), r.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
  }), r.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b, _c2;return { send: function send(e, f) {
          b = r("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", _c2 = function c(a) {
            b.remove(), _c2 = null, a && f("error" === a.type ? 404 : 200, a.type);
          }), d.head.appendChild(b[0]);
        }, abort: function abort() {
          _c2 && _c2();
        } };
    }
  });var Tb = [],
      Ub = /(=)\?(?=&|$)|\?\?/;r.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var a = Tb.pop() || r.expando + "_" + ub++;return this[a] = !0, a;
    } }), r.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
        f,
        g,
        h = b.jsonp !== !1 && (Ub.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ub.test(b.data) && "data");if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Ub, "$1" + e) : b.jsonp !== !1 && (b.url += (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || r.error(e + " was not called"), g[0];
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Tb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0;
    }), "script";
  }), o.createHTMLDocument = function () {
    var a = d.implementation.createHTMLDocument("").body;return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length;
  }(), r.parseHTML = function (a, b, c) {
    if ("string" != typeof a) return [];"boolean" == typeof b && (c = b, b = !1);var e, f, g;return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = C.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = qa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes));
  }, r.fn.load = function (a, b, c) {
    var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");return h > -1 && (d = pb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (e = "POST"), g.length > 0 && r.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) {
      f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a);
    }).always(c && function (a, b) {
      g.each(function () {
        c.apply(this, f || [a.responseText, b, a]);
      });
    }), this;
  }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    r.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), r.expr.pseudos.animated = function (a) {
    return r.grep(r.timers, function (b) {
      return a === b.elem;
    }).length;
  }, r.offset = { setOffset: function setOffset(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = r.css(a, "position"),
          l = r(a),
          m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
    } }, r.fn.extend({ offset: function offset(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        r.offset.setOffset(this, a, b);
      });var b,
          c,
          d,
          e,
          f = this[0];if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), b = f.ownerDocument, c = b.documentElement, e = b.defaultView, { top: d.top + e.pageYOffset - c.clientTop, left: d.left + e.pageXOffset - c.clientLeft }) : { top: 0, left: 0 };
    }, position: function position() {
      if (this[0]) {
        var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), B(a[0], "html") || (d = a.offset()), d = { top: d.top + r.css(a[0], "borderTopWidth", !0), left: d.left + r.css(a[0], "borderLeftWidth", !0) }), { top: b.top - d.top - r.css(c, "marginTop", !0), left: b.left - d.left - r.css(c, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        var a = this.offsetParent;while (a && "static" === r.css(a, "position")) {
          a = a.offsetParent;
        }return a || ra;
      });
    } }), r.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
    var c = "pageYOffset" === b;r.fn[a] = function (d) {
      return T(this, function (a, d, e) {
        var f;return r.isWindow(a) ? f = a : 9 === a.nodeType && (f = a.defaultView), void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
      }, a, d, arguments.length);
    };
  }), r.each(["top", "left"], function (a, b) {
    r.cssHooks[b] = Pa(o.pixelPosition, function (a, c) {
      if (c) return c = Oa(a, b), Ma.test(c) ? r(a).position()[b] + "px" : c;
    });
  }), r.each({ Height: "height", Width: "width" }, function (a, b) {
    r.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
      r.fn[d] = function (e, f) {
        var g = arguments.length && (c || "boolean" != typeof e),
            h = c || (e === !0 || f === !0 ? "margin" : "border");return T(this, function (b, c, e) {
          var f;return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h);
        }, b, g ? e : void 0, g);
      };
    });
  }), r.fn.extend({ bind: function bind(a, b, c) {
      return this.on(a, null, b, c);
    }, unbind: function unbind(a, b) {
      return this.off(a, null, b);
    }, delegate: function delegate(a, b, c, d) {
      return this.on(b, a, c, d);
    }, undelegate: function undelegate(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    } }), r.holdReady = function (a) {
    a ? r.readyWait++ : r.ready(!0);
  }, r.isArray = Array.isArray, r.parseJSON = JSON.parse, r.nodeName = B, "function" == "function" && __webpack_require__(7) && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
    return r;
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Vb = a.jQuery,
      Wb = a.$;return r.noConflict = function (b) {
    return a.$ === r && (a.$ = Wb), b && a.jQuery === r && (a.jQuery = Vb), r;
  }, b || (a.jQuery = a.$ = r), r;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(11);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var event = function () {
  var eventPool = {};
  function on(topic, handler) {
    eventPool[topic] = eventPool[topic] || [];
    eventPool[topic].push({
      handler: handler
    });
  }
  function trigger(topic, args) {
    if (!eventPool[topic]) {
      return;
    }
    for (var i = 0; i < eventPool[topic].length; i++) {
      eventPool[topic][i].handler(args);
    }
  }
  function off(topic, handler) {
    eventPool[topic].forEach(function (it, inx) {
      if (it.handler === handler) {
        eventPool[topic].splice(inx, 1);
      }
    });
  }
  return {
    on: on,
    off: off,
    trigger: trigger
  };
}();
module.exports = event;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

__webpack_require__(17);
function totas(msg, time) {
  this.msg = msg;
  this.time = time || 1000; //ms
  this.createTotas();
  this.showTotas(); //原型上创建两个方法控制创建，消失功能
}
totas.prototype = {
  createTotas: function createTotas() {
    var tpl = '<div class="totas">' + this.msg + '</div>'; //元素模板
    $('body').append(tpl); //插入元素
  },
  showTotas: function showTotas() {
    var _this = this; //声明外部的this指向， 防止setTimeout内部发生变化
    var $totas = $('.totas');
    $totas.fadeIn(500, function () {
      setTimeout(function () {
        $totas.fadeOut(500, function () {
          $totas.remove();
        });
      }, _this.time);
    });
  }
};
function Totas(msg, time) {
  return new totas(msg, time);
}
module.exports.totas = Totas;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

__webpack_require__(8);
var waterFall = __webpack_require__(12);
var NoteControl = __webpack_require__(13).noteControl;
var event = __webpack_require__(3);
NoteControl.load();
$('.new-note').on('click', function () {
  NoteControl.add();
});
event.on('waterfall', function () {
  waterFall.init($('#content'));
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./index.less", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./index.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "html,\nbody {\n  height: 100%;\n  margin: 0;\n}\na {\n  text-decoration: none;\n  color: #000000;\n}\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 20px;\n  background: url(" + __webpack_require__(10) + ");\n  background-size: cover;\n}\n#content {\n  font-family: Arial, Helvetica, sans-serif;\n  position: relative;\n  height: -webkit-calc(70%);\n  height: calc(70%);\n}\n#top-nav .login {\n  color: #000000;\n  float: right;\n  cursor: pointer;\n  margin-right: 20px;\n  font-family: 'Shadows Into Light Two', cursive;\n  font-weight: bold;\n  font-size: 25px;\n}\n#top-nav i {\n  font-size: 35px;\n  line-height: 40px;\n  vertical-align: sub;\n}\n.logo {\n  font-family: 'Shadows Into Light Two', cursive;\n  font-size: 30px;\n  font-weight: bold;\n  margin-left: 20px;\n}\n.clearfix::after {\n  content: '';\n  display: block;\n  clear: both;\n}\n.note-add {\n  cursor: pointer;\n}\n.new-note {\n  display: inline-block;\n  font-size: 80px;\n  position: fixed;\n  bottom: 30px;\n  right: 40px;\n  color: #fff;\n  cursor: pointer;\n}\n.new-note i {\n  display: block;\n  transform: rotate(180deg);\n}\n.new-note:hover i {\n  animation: roll 0.5s linear 1;\n}\n@keyframes roll {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transfrom: rotate(180deg);\n  }\n}\n", ""]);

// exports


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../img/bed29d3fabf0ad87d640530b41b3e6a6.png";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

/*
   debug 日记 $noteCt,$ct 目前还有问题12.5                                         

*/
var waterFall = function () {
    var $noteCt;
    var $notes;
    function render(ct) {
        $noteCt = ct;
        $notes = $noteCt.children();
        var $noteWidth = $notes.outerWidth(true),
            colNum = parseInt($(window).width() / $noteWidth),
            colHeight = [];
        for (var i = 0; i < colNum; i++) {
            //初始化列高数组
            colHeight.push(0);
        }
        $notes.each(function () {
            var minHeight = colHeight[0],
                //设置最小，高度，索引
            minIndx = 0,
                $curEl = $(this);
            for (var _i = 0; _i < colNum; _i++) {
                if (colHeight[_i] < minHeight) {
                    minHeight = colHeight[_i];
                    minIndx = _i;
                }
            }
            $curEl.css({
                left: minIndx * $noteWidth,
                top: minHeight
            });
            colHeight[minIndx] += $curEl.outerHeight(true); //修改最小列高
        });
    }
    $(window).on('resize', function () {
        render($noteCt);
    });
    return {
        init: render
    };
}();
module.exports = waterFall;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var Note = __webpack_require__(14).note;
var Totas = __webpack_require__(4).totas;
var event = __webpack_require__(3);

var noteControl = function () {
    function load() {
        $.get('/api/notes').done(function (ret) {
            if (ret.status == 0) {
                $.each(ret.data, function (idx, artical) {
                    new Note({
                        id: artical.id,
                        text: artical.text
                    });
                });
                event.trigger('waterfall');
            } else {
                Totas(ret.errorMsg);
            }
        }).fail(function () {
            Totas('网络异常');
        });
    }

    function add() {
        new Note();
    }

    return {
        load: load,
        add: add
    };
}();
module.exports.noteControl = noteControl;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

__webpack_require__(15);
var event = __webpack_require__(3);
var totas = __webpack_require__(4).totas;

function Note(opts) {
    this.initOpts(opts);
    this.create();
    this.setStyle();
    this.bindEvent();
}
Note.prototype = {
    colorPool: [//随机贴纸16进制颜色
    '#ffaa4f', '#ef69b3', '#9f9be8', '#f7bec9', '#97daae', '#9bd1e0'],
    defaultOpts: {
        id: '',
        $ct: $('#content').length > 0 ? $('#content') : $('body'), // 默认容器
        text: '输入内容...'
    },
    initOpts: function initOpts(opts) {
        this.opts = $.extend({}, this.defaultOpts, opts || {}); //复制一个选项参数，如果没有opts参数，默认为default
        if (this.opts.id) {
            this.id = this.opts.id;
        }
    },
    create: function create() {
        //字符串模板
        var tpl = '<div class="note"> \n     <div class="time">Date:' + new Date().toLocaleDateString() + ' <br>\n                       Time:' + new Date().toLocaleTimeString() + '\n     </div>\n     <div class="tuding" contenteditable=false></div>\n     <div class="close" contenteditable=false>X</div>\n     <div class="content" contenteditable=true></div>\n</div>';
        this.$note = $(tpl);
        this.$ct = this.$note.parent();
        var $noteCt = this.$note.find('.content');
        $noteCt.html(this.opts.text);
    },
    setStyle: function setStyle() {
        var color = this.colorPool[Math.floor(Math.random() * 6)];
        this.$note.css('background', color);
        this.opts.$ct.append(this.$note);
        event.trigger('waterfall');
    },
    layout: function layout() {
        var self = this;
        if (self.clk) {
            clearTimeout(self.clk);
        }
        self.clk = setTimeout(function () {
            event.trigger('waterfall');
        }, 100);
    },
    bindEvent: function bindEvent() {
        var self = this,
            $note = this.$note,
            $delete = $note.find('.close'),
            $noteHead = $note.find('.tuding'),
            $noteCt = $note.find('.content');
        $note.on('mouseenter', function () {
            $delete.css({ display: 'inline' });
        }).on('mouseleave', function () {
            $delete.css({ display: 'none' });
        });
        $delete.on('click', function () {
            self.delete();
        });
        $noteCt.on('focus', function () {
            //绑定事件，模拟input的change事件 $.data()方法设置属性，存储 note的文本内容
            if ($noteCt.html() == '输入内容...') {
                $noteCt.html('');
            }
            $noteCt.data('before', $noteCt.html());
            console.log($noteCt.data('before'));
        }).on('blur pasete', function () {
            if ($noteCt.data('before') != $noteCt.html()) {
                $noteCt.data('before', $noteCt.html());
                self.layout();
                if (self.id) {
                    self.edit($noteCt.html());
                } else if (self.id === self.id) {
                    self.add($noteCt.html());
                }
            }
        });
        //贴纸移动
        $noteHead.on('mousedown', function (e) {
            var targetX = e.pageX - $note.offset().left,
                //记录鼠标在元素内点击位置到，body文档最左侧距离
            targetY = e.pageY - $note.offset().top; //记录鼠标在元素内点击位置到，body文档最上侧距离
            $note.addClass('draggable').data('targetPos', {
                x: targetX,
                y: targetY
            });
        }).on('mouseup', function (e) {
            $note.removeClass('draggable').removeData('pos');
        });
        $('body').on('mousemove', function (e) {
            $('.draggable').length && $('.draggable').offset({
                left: e.pageX - $('.draggable').data('targetPos').x, // note X轴偏移位置， 当前鼠标在body内位置 - （图钉触发鼠标点击位置 - note自身到body左侧位置）
                top: e.pageY - $('.draggable').data('targetPos').y
            });
        });
    },
    edit: function edit(msg) {
        var self = this;
        $.post('/api/notes/edit', {
            id: this.id,
            note: msg
        }).done(function (ret) {
            if (ret.status === 0) {
                totas('Update Success');
            } else {
                totas(ret.errorMsg);
            }
        });
    },

    add: function add(msg) {
        console.log('execute...add');
        var self = this;
        $.post('/api/notes/add', { note: msg }).done(function (ret) {
            if (ret.status === 0) {
                self.id = ret.id;
                console.log(self.id);
                totas('Add Success');
            } else {
                self.$note.remove();
                event.trigger('waterfall');
                totas(ret.errorMsg);
            }
        });
    },

    delete: function _delete() {
        var self = this;
        $.post('/api/notes/delete', { id: this.id }).done(function (ret) {
            if (ret.status === 0) {
                totas('Delete Success');
                self.$note.remove();
                event.trigger('waterfall');
            } else {
                totas(ret.errorMsg);
            }
        });
    }
};
module.exports.note = Note;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(16);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./note.less", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./note.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".note {\n  position: absolute;\n  width: 300px;\n  min-height: 200px;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 30px;\n  padding-bottom: 51px;\n  background-color: #fa4;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.4), 0px 0px 40px rgba(0, 0, 0, 0.1) inset;\n  margin: 10px;\n  transition: all 0.4s ;\n}\n.note::before,\n.note::after {\n  content: \"\";\n  position: absolute;\n  background: transparent;\n  bottom: 13px;\n  width: 90%;\n  height: 80%;\n  z-index: -1;\n  box-shadow: 0px 4px 5px 2px rgba(0, 0, 0, 0.7);\n}\n.note::before {\n  right: 20px;\n  transform: skew(10deg) rotate(4deg);\n}\n.note::after {\n  left: 20px;\n  transform: skew(-10deg) rotate(-4deg);\n}\n.tuding {\n  position: absolute;\n  top: 8px;\n  left: 50%;\n  margin-left: -5px;\n  border: 5px solid #f33c3ff2;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.6);\n}\n.tuding::before {\n  content: '';\n  position: absolute;\n  width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  background: #fff;\n  left: 0;\n  top: -2px;\n}\n.tuding::after {\n  content: '';\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: #962121;\n  left: 0;\n  top: 0px;\n}\n.close {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n  color: #fff;\n  font-size: 15px;\n  cursor: pointer;\n  display: none;\n}\n.content {\n  outline: none;\n  min-height: 200px;\n}\n.draggable {\n  opacity: 0.7;\n  cursor: move;\n  transition: 0.2s;\n}\n.time {\n  font-size: 20px;\n  position: absolute;\n  bottom: 8px;\n  right: 8px;\n}\n", ""]);

// exports


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(18);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./totas.less", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./totas.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".totas {\n  font-family: 'Shadows Into Light Two', cursive;\n  position: fixed;\n  display: none;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 50px;\n  color: #d15a39;\n  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.6);\n  padding: 6px 15px;\n  background-color: #fff;\n  border-radius: 3px;\n  font-weight: bold;\n}\n", ""]);

// exports


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzBiYjU1ODRmMGJmMDVmMTczOTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xpYi9qcXVlcnktMy4yLjEubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudC9ldmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50L3RvdGFzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vYW1kLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xlc3MvaW5kZXgubGVzcz9mNmIyIiwid2VicGFjazovLy8uL3NyYy9sZXNzL2luZGV4Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9iZzIucG5nIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudC93YXRlcmZhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudC9ub3RlLWNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudC9ub3RlLmpzIiwid2VicGFjazovLy8uL3NyYy9sZXNzL25vdGUubGVzcz83N2JlIiwid2VicGFjazovLy8uL3NyYy9sZXNzL25vdGUubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGVzcy90b3Rhcy5sZXNzP2RiOTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xlc3MvdG90YXMubGVzcyJdLCJuYW1lcyI6WyJhIiwiYiIsIm1vZHVsZSIsImV4cG9ydHMiLCJkb2N1bWVudCIsIkVycm9yIiwid2luZG93IiwiYyIsImQiLCJlIiwiT2JqZWN0IiwiZ2V0UHJvdG90eXBlT2YiLCJmIiwic2xpY2UiLCJnIiwiY29uY2F0IiwiaCIsInB1c2giLCJpIiwiaW5kZXhPZiIsImoiLCJrIiwidG9TdHJpbmciLCJsIiwiaGFzT3duUHJvcGVydHkiLCJtIiwibiIsImNhbGwiLCJvIiwicCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0IiwiaGVhZCIsImFwcGVuZENoaWxkIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwicSIsInIiLCJmbiIsImluaXQiLCJzIiwidCIsInUiLCJ2IiwidG9VcHBlckNhc2UiLCJwcm90b3R5cGUiLCJqcXVlcnkiLCJjb25zdHJ1Y3RvciIsImxlbmd0aCIsInRvQXJyYXkiLCJnZXQiLCJwdXNoU3RhY2siLCJtZXJnZSIsInByZXZPYmplY3QiLCJlYWNoIiwibWFwIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJmaXJzdCIsImVxIiwibGFzdCIsImVuZCIsInNvcnQiLCJzcGxpY2UiLCJleHRlbmQiLCJpc0Z1bmN0aW9uIiwiaXNQbGFpbk9iamVjdCIsIkFycmF5IiwiaXNBcnJheSIsImV4cGFuZG8iLCJNYXRoIiwicmFuZG9tIiwicmVwbGFjZSIsImlzUmVhZHkiLCJlcnJvciIsIm5vb3AiLCJ0eXBlIiwiaXNXaW5kb3ciLCJpc051bWVyaWMiLCJpc05hTiIsInBhcnNlRmxvYXQiLCJpc0VtcHR5T2JqZWN0IiwiZ2xvYmFsRXZhbCIsImNhbWVsQ2FzZSIsInciLCJ0cmltIiwibWFrZUFycmF5IiwiaW5BcnJheSIsImdyZXAiLCJndWlkIiwicHJveHkiLCJub3ciLCJEYXRlIiwic3VwcG9ydCIsIlN5bWJvbCIsIml0ZXJhdG9yIiwic3BsaXQiLCJ0b0xvd2VyQ2FzZSIsIngiLCJ5IiwiaGEiLCJ6IiwiQSIsIkIiLCJDIiwiRCIsIkUiLCJwb3AiLCJGIiwiRyIsIkgiLCJJIiwiSiIsIksiLCJMIiwiTSIsIk4iLCJPIiwiUmVnRXhwIiwiUCIsIlEiLCJSIiwiUyIsIlQiLCJVIiwiViIsIklEIiwiQ0xBU1MiLCJUQUciLCJBVFRSIiwiUFNFVURPIiwiQ0hJTEQiLCJib29sIiwibmVlZHNDb250ZXh0IiwiVyIsIlgiLCJZIiwiWiIsIiQiLCJfIiwiYWEiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJiYSIsImNhIiwiY2hhckNvZGVBdCIsImRhIiwiZWEiLCJ0YSIsImRpc2FibGVkIiwiZGlyIiwibmV4dCIsImNoaWxkTm9kZXMiLCJub2RlVHlwZSIsImZhIiwiZ2EiLCJvd25lckRvY3VtZW50IiwiZXhlYyIsImdldEVsZW1lbnRCeUlkIiwiaWQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJxc2EiLCJ0ZXN0Iiwibm9kZU5hbWUiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJzYSIsImpvaW4iLCJxYSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjYWNoZUxlbmd0aCIsInNoaWZ0IiwiaWEiLCJqYSIsImthIiwiYXR0ckhhbmRsZSIsImxhIiwic291cmNlSW5kZXgiLCJuZXh0U2libGluZyIsIm1hIiwibmEiLCJvYSIsImlzRGlzYWJsZWQiLCJwYSIsImlzWE1MIiwiZG9jdW1lbnRFbGVtZW50Iiwic2V0RG9jdW1lbnQiLCJkZWZhdWx0VmlldyIsInRvcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhdHRhY2hFdmVudCIsImF0dHJpYnV0ZXMiLCJjbGFzc05hbWUiLCJjcmVhdGVDb21tZW50IiwiZ2V0QnlJZCIsImdldEVsZW1lbnRzQnlOYW1lIiwiZmlsdGVyIiwiZmluZCIsImdldEF0dHJpYnV0ZU5vZGUiLCJ2YWx1ZSIsImlubmVySFRNTCIsIm1hdGNoZXNTZWxlY3RvciIsIm1hdGNoZXMiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJtb3pNYXRjaGVzU2VsZWN0b3IiLCJvTWF0Y2hlc1NlbGVjdG9yIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJkaXNjb25uZWN0ZWRNYXRjaCIsImNvbXBhcmVEb2N1bWVudFBvc2l0aW9uIiwiY29udGFpbnMiLCJzb3J0RGV0YWNoZWQiLCJ1bnNoaWZ0IiwiYXR0ciIsInNwZWNpZmllZCIsImVzY2FwZSIsInVuaXF1ZVNvcnQiLCJkZXRlY3REdXBsaWNhdGVzIiwic29ydFN0YWJsZSIsImdldFRleHQiLCJ0ZXh0Q29udGVudCIsImZpcnN0Q2hpbGQiLCJub2RlVmFsdWUiLCJzZWxlY3RvcnMiLCJjcmVhdGVQc2V1ZG8iLCJtYXRjaCIsInJlbGF0aXZlIiwicHJlRmlsdGVyIiwibGFzdENoaWxkIiwidW5pcXVlSUQiLCJwc2V1ZG9zIiwic2V0RmlsdGVycyIsIm5vdCIsImhhcyIsImlubmVyVGV4dCIsImxhbmciLCJ0YXJnZXQiLCJsb2NhdGlvbiIsImhhc2giLCJyb290IiwiZm9jdXMiLCJhY3RpdmVFbGVtZW50IiwiaGFzRm9jdXMiLCJocmVmIiwidGFiSW5kZXgiLCJlbmFibGVkIiwiY2hlY2tlZCIsInNlbGVjdGVkIiwic2VsZWN0ZWRJbmRleCIsImVtcHR5IiwicGFyZW50IiwiaGVhZGVyIiwiaW5wdXQiLCJidXR0b24iLCJldmVuIiwib2RkIiwibHQiLCJndCIsIm50aCIsInJhZGlvIiwiY2hlY2tib3giLCJmaWxlIiwicGFzc3dvcmQiLCJpbWFnZSIsInN1Ym1pdCIsInJlc2V0IiwicmEiLCJmaWx0ZXJzIiwidG9rZW5pemUiLCJ1YSIsInZhIiwid2EiLCJ4YSIsInlhIiwiemEiLCJjb21waWxlIiwic2VsZWN0b3IiLCJzZWxlY3QiLCJkZWZhdWx0VmFsdWUiLCJleHByIiwidW5pcXVlIiwiaXNYTUxEb2MiLCJlc2NhcGVTZWxlY3RvciIsImlzIiwicGFyc2VIVE1MIiwicmVhZHkiLCJjaGlsZHJlbiIsImNvbnRlbnRzIiwicHJldiIsImNsb3Nlc3QiLCJpbmRleCIsInByZXZBbGwiLCJhZGQiLCJhZGRCYWNrIiwicGFyZW50cyIsInBhcmVudHNVbnRpbCIsIm5leHRBbGwiLCJuZXh0VW50aWwiLCJwcmV2VW50aWwiLCJzaWJsaW5ncyIsImNvbnRlbnREb2N1bWVudCIsImNvbnRlbnQiLCJyZXZlcnNlIiwiQ2FsbGJhY2tzIiwib25jZSIsInN0b3BPbkZhbHNlIiwibWVtb3J5IiwicmVtb3ZlIiwiZGlzYWJsZSIsImxvY2siLCJsb2NrZWQiLCJmaXJlV2l0aCIsImZpcmUiLCJmaXJlZCIsInByb21pc2UiLCJkb25lIiwiZmFpbCIsInRoZW4iLCJEZWZlcnJlZCIsInN0YXRlIiwiYWx3YXlzIiwicGlwZSIsInByb2dyZXNzIiwibm90aWZ5IiwicmVzb2x2ZSIsInJlamVjdCIsIlR5cGVFcnJvciIsIm5vdGlmeVdpdGgiLCJyZXNvbHZlV2l0aCIsImV4Y2VwdGlvbkhvb2siLCJzdGFja1RyYWNlIiwicmVqZWN0V2l0aCIsImdldFN0YWNrSG9vayIsInNldFRpbWVvdXQiLCJ3aGVuIiwiY29uc29sZSIsIndhcm4iLCJuYW1lIiwibWVzc2FnZSIsInN0YWNrIiwicmVhZHlFeGNlcHRpb24iLCJyZWFkeVdhaXQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVhZHlTdGF0ZSIsImRvU2Nyb2xsIiwidWlkIiwiY2FjaGUiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsInNldCIsImFjY2VzcyIsImhhc0RhdGEiLCJKU09OIiwicGFyc2UiLCJkYXRhIiwicmVtb3ZlRGF0YSIsIl9kYXRhIiwiX3JlbW92ZURhdGEiLCJxdWV1ZSIsImRlcXVldWUiLCJfcXVldWVIb29rcyIsInN0b3AiLCJjbGVhclF1ZXVlIiwic291cmNlIiwic3R5bGUiLCJkaXNwbGF5IiwiY3NzIiwiY3VyIiwiY3NzTnVtYmVyIiwidW5pdCIsInN0YXJ0IiwiYm9keSIsInNob3ciLCJoaWRlIiwidG9nZ2xlIiwib3B0aW9uIiwidGhlYWQiLCJjb2wiLCJ0ciIsInRkIiwiX2RlZmF1bHQiLCJvcHRncm91cCIsInRib2R5IiwidGZvb3QiLCJjb2xncm91cCIsImNhcHRpb24iLCJ0aCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJodG1sUHJlZmlsdGVyIiwiY3JlYXRlVGV4dE5vZGUiLCJjaGVja0Nsb25lIiwiY2xvbmVOb2RlIiwibm9DbG9uZUNoZWNrZWQiLCJvZmYiLCJldmVudCIsImdsb2JhbCIsImhhbmRsZXIiLCJldmVudHMiLCJoYW5kbGUiLCJ0cmlnZ2VyZWQiLCJkaXNwYXRjaCIsInNwZWNpYWwiLCJkZWxlZ2F0ZVR5cGUiLCJiaW5kVHlwZSIsIm9yaWdUeXBlIiwibmFtZXNwYWNlIiwiZGVsZWdhdGVDb3VudCIsInNldHVwIiwidGVhcmRvd24iLCJyZW1vdmVFdmVudCIsImZpeCIsImRlbGVnYXRlVGFyZ2V0IiwicHJlRGlzcGF0Y2giLCJoYW5kbGVycyIsImlzUHJvcGFnYXRpb25TdG9wcGVkIiwiY3VycmVudFRhcmdldCIsImVsZW0iLCJpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCIsInJuYW1lc3BhY2UiLCJoYW5kbGVPYmoiLCJyZXN1bHQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInBvc3REaXNwYXRjaCIsImFkZFByb3AiLCJFdmVudCIsImVudW1lcmFibGUiLCJvcmlnaW5hbEV2ZW50Iiwid3JpdGFibGUiLCJsb2FkIiwibm9CdWJibGUiLCJ0cmlnZ2VyIiwiYmx1ciIsImNsaWNrIiwiYmVmb3JldW5sb2FkIiwicmV0dXJuVmFsdWUiLCJpc0RlZmF1bHRQcmV2ZW50ZWQiLCJkZWZhdWx0UHJldmVudGVkIiwicmVsYXRlZFRhcmdldCIsInRpbWVTdGFtcCIsImlzU2ltdWxhdGVkIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiYWx0S2V5IiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJjaGFuZ2VkVG91Y2hlcyIsImN0cmxLZXkiLCJkZXRhaWwiLCJldmVudFBoYXNlIiwibWV0YUtleSIsInBhZ2VYIiwicGFnZVkiLCJzaGlmdEtleSIsInZpZXciLCJjaGFyQ29kZSIsImtleSIsImtleUNvZGUiLCJidXR0b25zIiwiY2xpZW50WCIsImNsaWVudFkiLCJvZmZzZXRYIiwib2Zmc2V0WSIsInBvaW50ZXJJZCIsInBvaW50ZXJUeXBlIiwic2NyZWVuWCIsInNjcmVlblkiLCJ0YXJnZXRUb3VjaGVzIiwidG9FbGVtZW50IiwidG91Y2hlcyIsIndoaWNoIiwibW91c2VlbnRlciIsIm1vdXNlbGVhdmUiLCJwb2ludGVyZW50ZXIiLCJwb2ludGVybGVhdmUiLCJvbiIsIm9uZSIsIkFhIiwiQmEiLCJDYSIsIkRhIiwiRWEiLCJGYSIsIkdhIiwiSGEiLCJJYSIsIkphIiwiaHRtbCIsImNsb25lIiwic3JjIiwiX2V2YWxVcmwiLCJLYSIsImNsZWFuRGF0YSIsImRldGFjaCIsImFwcGVuZCIsInByZXBlbmQiLCJpbnNlcnRCZWZvcmUiLCJiZWZvcmUiLCJhZnRlciIsInJlcGxhY2VXaXRoIiwicmVwbGFjZUNoaWxkIiwiYXBwZW5kVG8iLCJwcmVwZW5kVG8iLCJpbnNlcnRBZnRlciIsInJlcGxhY2VBbGwiLCJMYSIsIk1hIiwiTmEiLCJvcGVuZXIiLCJnZXRDb21wdXRlZFN0eWxlIiwiY3NzVGV4dCIsIm1hcmdpbkxlZnQiLCJ3aWR0aCIsIm1hcmdpblJpZ2h0IiwiYmFja2dyb3VuZENsaXAiLCJjbGVhckNsb25lU3R5bGUiLCJwaXhlbFBvc2l0aW9uIiwiYm94U2l6aW5nUmVsaWFibGUiLCJwaXhlbE1hcmdpblJpZ2h0IiwicmVsaWFibGVNYXJnaW5MZWZ0IiwiT2EiLCJnZXRQcm9wZXJ0eVZhbHVlIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIlBhIiwiUWEiLCJSYSIsIlNhIiwicG9zaXRpb24iLCJ2aXNpYmlsaXR5IiwiVGEiLCJsZXR0ZXJTcGFjaW5nIiwiZm9udFdlaWdodCIsIlVhIiwiVmEiLCJXYSIsIlhhIiwiY3NzUHJvcHMiLCJZYSIsIm1heCIsIlphIiwiJGEiLCJjc3NIb29rcyIsIm9wYWNpdHkiLCJhbmltYXRpb25JdGVyYXRpb25Db3VudCIsImNvbHVtbkNvdW50IiwiZmlsbE9wYWNpdHkiLCJmbGV4R3JvdyIsImZsZXhTaHJpbmsiLCJsaW5lSGVpZ2h0Iiwib3JkZXIiLCJvcnBoYW5zIiwid2lkb3dzIiwiekluZGV4Iiwiem9vbSIsInNldFByb3BlcnR5IiwiaXNGaW5pdGUiLCJnZXRDbGllbnRSZWN0cyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm9yZGVyIiwiZXhwYW5kIiwiX2EiLCJUd2VlbiIsInByb3AiLCJlYXNpbmciLCJvcHRpb25zIiwicHJvcEhvb2tzIiwicnVuIiwiZHVyYXRpb24iLCJwb3MiLCJzdGVwIiwiZngiLCJzY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwibGluZWFyIiwic3dpbmciLCJjb3MiLCJQSSIsImFiIiwiYmIiLCJjYiIsImRiIiwiZWIiLCJoaWRkZW4iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpbnRlcnZhbCIsInRpY2siLCJmYiIsImdiIiwiaGVpZ2h0IiwiaGIiLCJrYiIsInR3ZWVuZXJzIiwiaWIiLCJ1bnF1ZXVlZCIsIm92ZXJmbG93Iiwib3ZlcmZsb3dYIiwib3ZlcmZsb3dZIiwiamIiLCJwcmVmaWx0ZXJzIiwic3RhcnRUaW1lIiwidHdlZW5zIiwicHJvcHMiLCJvcHRzIiwic3BlY2lhbEVhc2luZyIsIm9yaWdpbmFsUHJvcGVydGllcyIsIm9yaWdpbmFsT3B0aW9ucyIsImNyZWF0ZVR3ZWVuIiwiY29tcGxldGUiLCJ0aW1lciIsImFuaW0iLCJBbmltYXRpb24iLCJ0d2VlbmVyIiwicHJlZmlsdGVyIiwic3BlZWQiLCJzcGVlZHMiLCJvbGQiLCJmYWRlVG8iLCJhbmltYXRlIiwiZmluaXNoIiwidGltZXJzIiwic2xpZGVEb3duIiwic2xpZGVVcCIsInNsaWRlVG9nZ2xlIiwiZmFkZUluIiwiZmFkZU91dCIsImZhZGVUb2dnbGUiLCJzbG93IiwiZmFzdCIsImRlbGF5IiwiY2xlYXJUaW1lb3V0IiwiY2hlY2tPbiIsIm9wdFNlbGVjdGVkIiwicmFkaW9WYWx1ZSIsImxiIiwibWIiLCJyZW1vdmVBdHRyIiwiYXR0ckhvb2tzIiwibmIiLCJvYiIsInJlbW92ZVByb3AiLCJwcm9wRml4IiwicGFyc2VJbnQiLCJwYiIsInFiIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInRvZ2dsZUNsYXNzIiwiaGFzQ2xhc3MiLCJyYiIsInZhbCIsInZhbEhvb2tzIiwic2IiLCJpc1RyaWdnZXIiLCJwYXJlbnRXaW5kb3ciLCJzaW11bGF0ZSIsInRyaWdnZXJIYW5kbGVyIiwiaG92ZXIiLCJmb2N1c2luIiwidGIiLCJ1YiIsInZiIiwicGFyc2VYTUwiLCJET01QYXJzZXIiLCJwYXJzZUZyb21TdHJpbmciLCJ3YiIsInhiIiwieWIiLCJ6YiIsIkFiIiwicGFyYW0iLCJlbmNvZGVVUklDb21wb25lbnQiLCJzZXJpYWxpemUiLCJzZXJpYWxpemVBcnJheSIsIkJiIiwiQ2IiLCJEYiIsIkViIiwiRmIiLCJHYiIsIkhiIiwiSWIiLCJKYiIsIktiIiwiTGIiLCJNYiIsIk5iIiwiZGF0YVR5cGVzIiwiT2IiLCJhamF4U2V0dGluZ3MiLCJmbGF0T3B0aW9ucyIsIlBiIiwibWltZVR5cGUiLCJnZXRSZXNwb25zZUhlYWRlciIsImNvbnZlcnRlcnMiLCJRYiIsInJlc3BvbnNlRmllbGRzIiwiZGF0YUZpbHRlciIsImRhdGFUeXBlIiwiYWN0aXZlIiwibGFzdE1vZGlmaWVkIiwiZXRhZyIsInVybCIsImlzTG9jYWwiLCJwcm90b2NvbCIsInByb2Nlc3NEYXRhIiwiYXN5bmMiLCJjb250ZW50VHlwZSIsImFjY2VwdHMiLCJ4bWwiLCJqc29uIiwiY29udGV4dCIsImFqYXhTZXR1cCIsImFqYXhQcmVmaWx0ZXIiLCJhamF4VHJhbnNwb3J0IiwiYWpheCIsInN0YXR1c0NvZGUiLCJnZXRBbGxSZXNwb25zZUhlYWRlcnMiLCJzZXRSZXF1ZXN0SGVhZGVyIiwib3ZlcnJpZGVNaW1lVHlwZSIsInN0YXR1cyIsImFib3J0IiwibWV0aG9kIiwiY3Jvc3NEb21haW4iLCJob3N0IiwidHJhZGl0aW9uYWwiLCJoYXNDb250ZW50IiwiaWZNb2RpZmllZCIsImhlYWRlcnMiLCJiZWZvcmVTZW5kIiwic3VjY2VzcyIsInRpbWVvdXQiLCJzZW5kIiwic3RhdHVzVGV4dCIsImdldEpTT04iLCJnZXRTY3JpcHQiLCJ3cmFwQWxsIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJ3cmFwSW5uZXIiLCJ3cmFwIiwidW53cmFwIiwidmlzaWJsZSIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJSYiIsIlNiIiwiY29ycyIsIm9wZW4iLCJ1c2VybmFtZSIsInhockZpZWxkcyIsIm9ubG9hZCIsIm9uZXJyb3IiLCJvbmFib3J0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVzcG9uc2VUeXBlIiwicmVzcG9uc2VUZXh0IiwiYmluYXJ5IiwicmVzcG9uc2UiLCJzY3JpcHQiLCJjaGFyc2V0Iiwic2NyaXB0Q2hhcnNldCIsIlRiIiwiVWIiLCJqc29ucCIsImpzb25wQ2FsbGJhY2siLCJjcmVhdGVIVE1MRG9jdW1lbnQiLCJpbXBsZW1lbnRhdGlvbiIsImFuaW1hdGVkIiwib2Zmc2V0Iiwic2V0T2Zmc2V0IiwidXNpbmciLCJwYWdlWU9mZnNldCIsImNsaWVudFRvcCIsInBhZ2VYT2Zmc2V0IiwiY2xpZW50TGVmdCIsIm9mZnNldFBhcmVudCIsInNjcm9sbFRvIiwiSGVpZ2h0IiwiV2lkdGgiLCJiaW5kIiwidW5iaW5kIiwiZGVsZWdhdGUiLCJ1bmRlbGVnYXRlIiwiaG9sZFJlYWR5IiwicGFyc2VKU09OIiwiVmIiLCJqUXVlcnkiLCJXYiIsIm5vQ29uZmxpY3QiLCJ1c2VTb3VyY2VNYXAiLCJsaXN0IiwiaXRlbSIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJtb2R1bGVzIiwibWVkaWFRdWVyeSIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJjc3NNYXBwaW5nIiwiYnRvYSIsInNvdXJjZU1hcHBpbmciLCJ0b0NvbW1lbnQiLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZVJvb3QiLCJzb3VyY2VNYXAiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsInN0cmluZ2lmeSIsImV2ZW50UG9vbCIsInRvcGljIiwiYXJncyIsImZvckVhY2giLCJpdCIsImlueCIsInJlcXVpcmUiLCJ0b3RhcyIsIm1zZyIsInRpbWUiLCJjcmVhdGVUb3RhcyIsInNob3dUb3RhcyIsInRwbCIsIl90aGlzIiwiJHRvdGFzIiwiVG90YXMiLCJ3YXRlckZhbGwiLCJOb3RlQ29udHJvbCIsIm5vdGVDb250cm9sIiwid2VicGFja1BvbHlmaWxsIiwiZGVwcmVjYXRlIiwicGF0aHMiLCJiYXNlVXJsIiwiY3VycmVudERpciIsInBhdGhuYW1lIiwiZml4ZWRDc3MiLCJmdWxsTWF0Y2giLCJvcmlnVXJsIiwidW5xdW90ZWRPcmlnVXJsIiwiJDEiLCJuZXdVcmwiLCIkbm90ZUN0IiwiJG5vdGVzIiwicmVuZGVyIiwiY3QiLCIkbm90ZVdpZHRoIiwib3V0ZXJXaWR0aCIsImNvbE51bSIsImNvbEhlaWdodCIsIm1pbkhlaWdodCIsIm1pbkluZHgiLCIkY3VyRWwiLCJvdXRlckhlaWdodCIsIk5vdGUiLCJub3RlIiwicmV0IiwiaWR4IiwiYXJ0aWNhbCIsImVycm9yTXNnIiwiaW5pdE9wdHMiLCJjcmVhdGUiLCJzZXRTdHlsZSIsImJpbmRFdmVudCIsImNvbG9yUG9vbCIsImRlZmF1bHRPcHRzIiwiJGN0IiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwiJG5vdGUiLCJjb2xvciIsImZsb29yIiwibGF5b3V0Iiwic2VsZiIsImNsayIsIiRkZWxldGUiLCIkbm90ZUhlYWQiLCJkZWxldGUiLCJsb2ciLCJlZGl0IiwidGFyZ2V0WCIsInRhcmdldFkiLCJwb3N0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVB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dUJBQXVCLDRCQUE0QixpQkFBaUIsZUFBZSxnQkFBZ0IsZ0JBQWdCLG1EQUFtRCxHQUFHLGlCQUFpQixnQkFBZ0Isd0NBQXdDLEdBQUcsZ0JBQWdCLGVBQWUsMENBQTBDLEdBQUcsV0FBVyx1QkFBdUIsYUFBYSxjQUFjLHNCQUFzQixnQ0FBZ0MsZ0JBQWdCLGlCQUFpQix1QkFBdUIsK0NBQStDLEdBQUcsbUJBQW1CLGdCQUFnQix1QkFBdUIsZUFBZSxnQkFBZ0IsdUJBQXVCLHFCQUFxQixZQUFZLGNBQWMsR0FBRyxrQkFBa0IsZ0JBQWdCLHVCQUF1QixnQkFBZ0IsaUJBQWlCLHVCQUF1Qiw4QkFBOEIsWUFBWSxhQUFhLEdBQUcsVUFBVSx1QkFBdUIsYUFBYSxnQkFBZ0IsZ0JBQWdCLG9CQUFvQixvQkFBb0Isa0JBQWtCLEdBQUcsWUFBWSxrQkFBa0Isc0JBQXNCLEdBQUcsY0FBYyxpQkFBaUIsaUJBQWlCLHFCQUFxQixHQUFHLFNBQVMsb0JBQW9CLHVCQUF1QixnQkFBZ0IsZUFBZSxHQUFHOztBQUV6bEQ7Ozs7Ozs7QUNQQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7O0FDekJBO0FBQ0E7OztBQUdBO0FBQ0EsaUNBQWtDLG1EQUFtRCxvQkFBb0Isa0JBQWtCLGNBQWMsZ0NBQWdDLGlCQUFpQixtQkFBbUIsbURBQW1ELHNCQUFzQiwyQkFBMkIsdUJBQXVCLHNCQUFzQixHQUFHOztBQUVqVyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMzBiYjU1ODRmMGJmMDVmMTczOTYiLCIvKiEgalF1ZXJ5IHYzLjIuMSB8IChjKSBKUyBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgfCBqcXVlcnkub3JnL2xpY2Vuc2UgKi9cbiFmdW5jdGlvbihhLGIpe1widXNlIHN0cmljdFwiO1wib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1hLmRvY3VtZW50P2IoYSwhMCk6ZnVuY3Rpb24oYSl7aWYoIWEuZG9jdW1lbnQpdGhyb3cgbmV3IEVycm9yKFwialF1ZXJ5IHJlcXVpcmVzIGEgd2luZG93IHdpdGggYSBkb2N1bWVudFwiKTtyZXR1cm4gYihhKX06YihhKX0oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6dGhpcyxmdW5jdGlvbihhLGIpe1widXNlIHN0cmljdFwiO3ZhciBjPVtdLGQ9YS5kb2N1bWVudCxlPU9iamVjdC5nZXRQcm90b3R5cGVPZixmPWMuc2xpY2UsZz1jLmNvbmNhdCxoPWMucHVzaCxpPWMuaW5kZXhPZixqPXt9LGs9ai50b1N0cmluZyxsPWouaGFzT3duUHJvcGVydHksbT1sLnRvU3RyaW5nLG49bS5jYWxsKE9iamVjdCksbz17fTtmdW5jdGlvbiBwKGEsYil7Yj1ifHxkO3ZhciBjPWIuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtjLnRleHQ9YSxiLmhlYWQuYXBwZW5kQ2hpbGQoYykucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjKX12YXIgcT1cIjMuMi4xXCIscj1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgci5mbi5pbml0KGEsYil9LHM9L15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLHQ9L14tbXMtLyx1PS8tKFthLXpdKS9nLHY9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYi50b1VwcGVyQ2FzZSgpfTtyLmZuPXIucHJvdG90eXBlPXtqcXVlcnk6cSxjb25zdHJ1Y3RvcjpyLGxlbmd0aDowLHRvQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gZi5jYWxsKHRoaXMpfSxnZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/Zi5jYWxsKHRoaXMpOmE8MD90aGlzW2ErdGhpcy5sZW5ndGhdOnRoaXNbYV19LHB1c2hTdGFjazpmdW5jdGlvbihhKXt2YXIgYj1yLm1lcmdlKHRoaXMuY29uc3RydWN0b3IoKSxhKTtyZXR1cm4gYi5wcmV2T2JqZWN0PXRoaXMsYn0sZWFjaDpmdW5jdGlvbihhKXtyZXR1cm4gci5lYWNoKHRoaXMsYSl9LG1hcDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soci5tYXAodGhpcyxmdW5jdGlvbihiLGMpe3JldHVybiBhLmNhbGwoYixjLGIpfSkpfSxzbGljZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnB1c2hTdGFjayhmLmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9LGZpcnN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoMCl9LGxhc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgtMSl9LGVxOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMubGVuZ3RoLGM9K2ErKGE8MD9iOjApO3JldHVybiB0aGlzLnB1c2hTdGFjayhjPj0wJiZjPGI/W3RoaXNbY11dOltdKX0sZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHJldk9iamVjdHx8dGhpcy5jb25zdHJ1Y3RvcigpfSxwdXNoOmgsc29ydDpjLnNvcnQsc3BsaWNlOmMuc3BsaWNlfSxyLmV4dGVuZD1yLmZuLmV4dGVuZD1mdW5jdGlvbigpe3ZhciBhLGIsYyxkLGUsZixnPWFyZ3VtZW50c1swXXx8e30saD0xLGk9YXJndW1lbnRzLmxlbmd0aCxqPSExO2ZvcihcImJvb2xlYW5cIj09dHlwZW9mIGcmJihqPWcsZz1hcmd1bWVudHNbaF18fHt9LGgrKyksXCJvYmplY3RcIj09dHlwZW9mIGd8fHIuaXNGdW5jdGlvbihnKXx8KGc9e30pLGg9PT1pJiYoZz10aGlzLGgtLSk7aDxpO2grKylpZihudWxsIT0oYT1hcmd1bWVudHNbaF0pKWZvcihiIGluIGEpYz1nW2JdLGQ9YVtiXSxnIT09ZCYmKGomJmQmJihyLmlzUGxhaW5PYmplY3QoZCl8fChlPUFycmF5LmlzQXJyYXkoZCkpKT8oZT8oZT0hMSxmPWMmJkFycmF5LmlzQXJyYXkoYyk/YzpbXSk6Zj1jJiZyLmlzUGxhaW5PYmplY3QoYyk/Yzp7fSxnW2JdPXIuZXh0ZW5kKGosZixkKSk6dm9pZCAwIT09ZCYmKGdbYl09ZCkpO3JldHVybiBnfSxyLmV4dGVuZCh7ZXhwYW5kbzpcImpRdWVyeVwiKyhxK01hdGgucmFuZG9tKCkpLnJlcGxhY2UoL1xcRC9nLFwiXCIpLGlzUmVhZHk6ITAsZXJyb3I6ZnVuY3Rpb24oYSl7dGhyb3cgbmV3IEVycm9yKGEpfSxub29wOmZ1bmN0aW9uKCl7fSxpc0Z1bmN0aW9uOmZ1bmN0aW9uKGEpe3JldHVyblwiZnVuY3Rpb25cIj09PXIudHlwZShhKX0saXNXaW5kb3c6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWEmJmE9PT1hLndpbmRvd30saXNOdW1lcmljOmZ1bmN0aW9uKGEpe3ZhciBiPXIudHlwZShhKTtyZXR1cm4oXCJudW1iZXJcIj09PWJ8fFwic3RyaW5nXCI9PT1iKSYmIWlzTmFOKGEtcGFyc2VGbG9hdChhKSl9LGlzUGxhaW5PYmplY3Q6ZnVuY3Rpb24oYSl7dmFyIGIsYztyZXR1cm4hKCFhfHxcIltvYmplY3QgT2JqZWN0XVwiIT09ay5jYWxsKGEpKSYmKCEoYj1lKGEpKXx8KGM9bC5jYWxsKGIsXCJjb25zdHJ1Y3RvclwiKSYmYi5jb25zdHJ1Y3RvcixcImZ1bmN0aW9uXCI9PXR5cGVvZiBjJiZtLmNhbGwoYyk9PT1uKSl9LGlzRW1wdHlPYmplY3Q6ZnVuY3Rpb24oYSl7dmFyIGI7Zm9yKGIgaW4gYSlyZXR1cm4hMTtyZXR1cm4hMH0sdHlwZTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9hK1wiXCI6XCJvYmplY3RcIj09dHlwZW9mIGF8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGE/altrLmNhbGwoYSldfHxcIm9iamVjdFwiOnR5cGVvZiBhfSxnbG9iYWxFdmFsOmZ1bmN0aW9uKGEpe3AoYSl9LGNhbWVsQ2FzZTpmdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKHQsXCJtcy1cIikucmVwbGFjZSh1LHYpfSxlYWNoOmZ1bmN0aW9uKGEsYil7dmFyIGMsZD0wO2lmKHcoYSkpe2ZvcihjPWEubGVuZ3RoO2Q8YztkKyspaWYoYi5jYWxsKGFbZF0sZCxhW2RdKT09PSExKWJyZWFrfWVsc2UgZm9yKGQgaW4gYSlpZihiLmNhbGwoYVtkXSxkLGFbZF0pPT09ITEpYnJlYWs7cmV0dXJuIGF9LHRyaW06ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/XCJcIjooYStcIlwiKS5yZXBsYWNlKHMsXCJcIil9LG1ha2VBcnJheTpmdW5jdGlvbihhLGIpe3ZhciBjPWJ8fFtdO3JldHVybiBudWxsIT1hJiYodyhPYmplY3QoYSkpP3IubWVyZ2UoYyxcInN0cmluZ1wiPT10eXBlb2YgYT9bYV06YSk6aC5jYWxsKGMsYSkpLGN9LGluQXJyYXk6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBudWxsPT1iPy0xOmkuY2FsbChiLGEsYyl9LG1lcmdlOmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPStiLmxlbmd0aCxkPTAsZT1hLmxlbmd0aDtkPGM7ZCsrKWFbZSsrXT1iW2RdO3JldHVybiBhLmxlbmd0aD1lLGF9LGdyZXA6ZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZCxlPVtdLGY9MCxnPWEubGVuZ3RoLGg9IWM7ZjxnO2YrKylkPSFiKGFbZl0sZiksZCE9PWgmJmUucHVzaChhW2ZdKTtyZXR1cm4gZX0sbWFwOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9MCxoPVtdO2lmKHcoYSkpZm9yKGQ9YS5sZW5ndGg7ZjxkO2YrKyllPWIoYVtmXSxmLGMpLG51bGwhPWUmJmgucHVzaChlKTtlbHNlIGZvcihmIGluIGEpZT1iKGFbZl0sZixjKSxudWxsIT1lJiZoLnB1c2goZSk7cmV0dXJuIGcuYXBwbHkoW10saCl9LGd1aWQ6MSxwcm94eTpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZTtpZihcInN0cmluZ1wiPT10eXBlb2YgYiYmKGM9YVtiXSxiPWEsYT1jKSxyLmlzRnVuY3Rpb24oYSkpcmV0dXJuIGQ9Zi5jYWxsKGFyZ3VtZW50cywyKSxlPWZ1bmN0aW9uKCl7cmV0dXJuIGEuYXBwbHkoYnx8dGhpcyxkLmNvbmNhdChmLmNhbGwoYXJndW1lbnRzKSkpfSxlLmd1aWQ9YS5ndWlkPWEuZ3VpZHx8ci5ndWlkKyssZX0sbm93OkRhdGUubm93LHN1cHBvcnQ6b30pLFwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmKHIuZm5bU3ltYm9sLml0ZXJhdG9yXT1jW1N5bWJvbC5pdGVyYXRvcl0pLHIuZWFjaChcIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3IgU3ltYm9sXCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEsYil7altcIltvYmplY3QgXCIrYitcIl1cIl09Yi50b0xvd2VyQ2FzZSgpfSk7ZnVuY3Rpb24gdyhhKXt2YXIgYj0hIWEmJlwibGVuZ3RoXCJpbiBhJiZhLmxlbmd0aCxjPXIudHlwZShhKTtyZXR1cm5cImZ1bmN0aW9uXCIhPT1jJiYhci5pc1dpbmRvdyhhKSYmKFwiYXJyYXlcIj09PWN8fDA9PT1ifHxcIm51bWJlclwiPT10eXBlb2YgYiYmYj4wJiZiLTEgaW4gYSl9dmFyIHg9ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGgsaSxqLGssbCxtLG4sbyxwLHEscixzLHQsdT1cInNpenpsZVwiKzEqbmV3IERhdGUsdj1hLmRvY3VtZW50LHc9MCx4PTAseT1oYSgpLHo9aGEoKSxBPWhhKCksQj1mdW5jdGlvbihhLGIpe3JldHVybiBhPT09YiYmKGw9ITApLDB9LEM9e30uaGFzT3duUHJvcGVydHksRD1bXSxFPUQucG9wLEY9RC5wdXNoLEc9RC5wdXNoLEg9RC5zbGljZSxJPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTAsZD1hLmxlbmd0aDtjPGQ7YysrKWlmKGFbY109PT1iKXJldHVybiBjO3JldHVybi0xfSxKPVwiY2hlY2tlZHxzZWxlY3RlZHxhc3luY3xhdXRvZm9jdXN8YXV0b3BsYXl8Y29udHJvbHN8ZGVmZXJ8ZGlzYWJsZWR8aGlkZGVufGlzbWFwfGxvb3B8bXVsdGlwbGV8b3BlbnxyZWFkb25seXxyZXF1aXJlZHxzY29wZWRcIixLPVwiW1xcXFx4MjBcXFxcdFxcXFxyXFxcXG5cXFxcZl1cIixMPVwiKD86XFxcXFxcXFwufFtcXFxcdy1dfFteXFwwLVxcXFx4YTBdKStcIixNPVwiXFxcXFtcIitLK1wiKihcIitMK1wiKSg/OlwiK0srXCIqKFsqXiR8IX5dPz0pXCIrSytcIiooPzonKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCJ8KFwiK0wrXCIpKXwpXCIrSytcIipcXFxcXVwiLE49XCI6KFwiK0wrXCIpKD86XFxcXCgoKCcoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcIil8KCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKClbXFxcXF1dfFwiK00rXCIpKil8LiopXFxcXCl8KVwiLE89bmV3IFJlZ0V4cChLK1wiK1wiLFwiZ1wiKSxQPW5ldyBSZWdFeHAoXCJeXCIrSytcIit8KCg/Ol58W15cXFxcXFxcXF0pKD86XFxcXFxcXFwuKSopXCIrSytcIiskXCIsXCJnXCIpLFE9bmV3IFJlZ0V4cChcIl5cIitLK1wiKixcIitLK1wiKlwiKSxSPW5ldyBSZWdFeHAoXCJeXCIrSytcIiooWz4rfl18XCIrSytcIilcIitLK1wiKlwiKSxTPW5ldyBSZWdFeHAoXCI9XCIrSytcIiooW15cXFxcXSdcXFwiXSo/KVwiK0srXCIqXFxcXF1cIixcImdcIiksVD1uZXcgUmVnRXhwKE4pLFU9bmV3IFJlZ0V4cChcIl5cIitMK1wiJFwiKSxWPXtJRDpuZXcgUmVnRXhwKFwiXiMoXCIrTCtcIilcIiksQ0xBU1M6bmV3IFJlZ0V4cChcIl5cXFxcLihcIitMK1wiKVwiKSxUQUc6bmV3IFJlZ0V4cChcIl4oXCIrTCtcInxbKl0pXCIpLEFUVFI6bmV3IFJlZ0V4cChcIl5cIitNKSxQU0VVRE86bmV3IFJlZ0V4cChcIl5cIitOKSxDSElMRDpuZXcgUmVnRXhwKFwiXjoob25seXxmaXJzdHxsYXN0fG50aHxudGgtbGFzdCktKGNoaWxkfG9mLXR5cGUpKD86XFxcXChcIitLK1wiKihldmVufG9kZHwoKFsrLV18KShcXFxcZCopbnwpXCIrSytcIiooPzooWystXXwpXCIrSytcIiooXFxcXGQrKXwpKVwiK0srXCIqXFxcXCl8KVwiLFwiaVwiKSxib29sOm5ldyBSZWdFeHAoXCJeKD86XCIrSitcIikkXCIsXCJpXCIpLG5lZWRzQ29udGV4dDpuZXcgUmVnRXhwKFwiXlwiK0srXCIqWz4rfl18OihldmVufG9kZHxlcXxndHxsdHxudGh8Zmlyc3R8bGFzdCkoPzpcXFxcKFwiK0srXCIqKCg/Oi1cXFxcZCk/XFxcXGQqKVwiK0srXCIqXFxcXCl8KSg/PVteLV18JClcIixcImlcIil9LFc9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxYPS9eaFxcZCQvaSxZPS9eW157XStcXHtcXHMqXFxbbmF0aXZlIFxcdy8sWj0vXig/OiMoW1xcdy1dKyl8KFxcdyspfFxcLihbXFx3LV0rKSkkLywkPS9bK35dLyxfPW5ldyBSZWdFeHAoXCJcXFxcXFxcXChbXFxcXGRhLWZdezEsNn1cIitLK1wiP3woXCIrSytcIil8LilcIixcImlnXCIpLGFhPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1cIjB4XCIrYi02NTUzNjtyZXR1cm4gZCE9PWR8fGM/YjpkPDA/U3RyaW5nLmZyb21DaGFyQ29kZShkKzY1NTM2KTpTdHJpbmcuZnJvbUNoYXJDb2RlKGQ+PjEwfDU1Mjk2LDEwMjMmZHw1NjMyMCl9LGJhPS8oW1xcMC1cXHgxZlxceDdmXXxeLT9cXGQpfF4tJHxbXlxcMC1cXHgxZlxceDdmLVxcdUZGRkZcXHctXS9nLGNhPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGI/XCJcXDBcIj09PWE/XCJcXHVmZmZkXCI6YS5zbGljZSgwLC0xKStcIlxcXFxcIithLmNoYXJDb2RlQXQoYS5sZW5ndGgtMSkudG9TdHJpbmcoMTYpK1wiIFwiOlwiXFxcXFwiK2F9LGRhPWZ1bmN0aW9uKCl7bSgpfSxlYT10YShmdW5jdGlvbihhKXtyZXR1cm4gYS5kaXNhYmxlZD09PSEwJiYoXCJmb3JtXCJpbiBhfHxcImxhYmVsXCJpbiBhKX0se2RpcjpcInBhcmVudE5vZGVcIixuZXh0OlwibGVnZW5kXCJ9KTt0cnl7Ry5hcHBseShEPUguY2FsbCh2LmNoaWxkTm9kZXMpLHYuY2hpbGROb2RlcyksRFt2LmNoaWxkTm9kZXMubGVuZ3RoXS5ub2RlVHlwZX1jYXRjaChmYSl7Rz17YXBwbHk6RC5sZW5ndGg/ZnVuY3Rpb24oYSxiKXtGLmFwcGx5KGEsSC5jYWxsKGIpKX06ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLmxlbmd0aCxkPTA7d2hpbGUoYVtjKytdPWJbZCsrXSk7YS5sZW5ndGg9Yy0xfX19ZnVuY3Rpb24gZ2EoYSxiLGQsZSl7dmFyIGYsaCxqLGssbCxvLHIscz1iJiZiLm93bmVyRG9jdW1lbnQsdz1iP2Iubm9kZVR5cGU6OTtpZihkPWR8fFtdLFwic3RyaW5nXCIhPXR5cGVvZiBhfHwhYXx8MSE9PXcmJjkhPT13JiYxMSE9PXcpcmV0dXJuIGQ7aWYoIWUmJigoYj9iLm93bmVyRG9jdW1lbnR8fGI6dikhPT1uJiZtKGIpLGI9Ynx8bixwKSl7aWYoMTEhPT13JiYobD1aLmV4ZWMoYSkpKWlmKGY9bFsxXSl7aWYoOT09PXcpe2lmKCEoaj1iLmdldEVsZW1lbnRCeUlkKGYpKSlyZXR1cm4gZDtpZihqLmlkPT09ZilyZXR1cm4gZC5wdXNoKGopLGR9ZWxzZSBpZihzJiYoaj1zLmdldEVsZW1lbnRCeUlkKGYpKSYmdChiLGopJiZqLmlkPT09ZilyZXR1cm4gZC5wdXNoKGopLGR9ZWxzZXtpZihsWzJdKXJldHVybiBHLmFwcGx5KGQsYi5nZXRFbGVtZW50c0J5VGFnTmFtZShhKSksZDtpZigoZj1sWzNdKSYmYy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZiLmdldEVsZW1lbnRzQnlDbGFzc05hbWUpcmV0dXJuIEcuYXBwbHkoZCxiLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZikpLGR9aWYoYy5xc2EmJiFBW2ErXCIgXCJdJiYoIXF8fCFxLnRlc3QoYSkpKXtpZigxIT09dylzPWIscj1hO2Vsc2UgaWYoXCJvYmplY3RcIiE9PWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKSl7KGs9Yi5nZXRBdHRyaWJ1dGUoXCJpZFwiKSk/az1rLnJlcGxhY2UoYmEsY2EpOmIuc2V0QXR0cmlidXRlKFwiaWRcIixrPXUpLG89ZyhhKSxoPW8ubGVuZ3RoO3doaWxlKGgtLSlvW2hdPVwiI1wiK2srXCIgXCIrc2Eob1toXSk7cj1vLmpvaW4oXCIsXCIpLHM9JC50ZXN0KGEpJiZxYShiLnBhcmVudE5vZGUpfHxifWlmKHIpdHJ5e3JldHVybiBHLmFwcGx5KGQscy5xdWVyeVNlbGVjdG9yQWxsKHIpKSxkfWNhdGNoKHgpe31maW5hbGx5e2s9PT11JiZiLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpfX19cmV0dXJuIGkoYS5yZXBsYWNlKFAsXCIkMVwiKSxiLGQsZSl9ZnVuY3Rpb24gaGEoKXt2YXIgYT1bXTtmdW5jdGlvbiBiKGMsZSl7cmV0dXJuIGEucHVzaChjK1wiIFwiKT5kLmNhY2hlTGVuZ3RoJiZkZWxldGUgYlthLnNoaWZ0KCldLGJbYytcIiBcIl09ZX1yZXR1cm4gYn1mdW5jdGlvbiBpYShhKXtyZXR1cm4gYVt1XT0hMCxhfWZ1bmN0aW9uIGphKGEpe3ZhciBiPW4uY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO3RyeXtyZXR1cm4hIWEoYil9Y2F0Y2goYyl7cmV0dXJuITF9ZmluYWxseXtiLnBhcmVudE5vZGUmJmIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiKSxiPW51bGx9fWZ1bmN0aW9uIGthKGEsYil7dmFyIGM9YS5zcGxpdChcInxcIiksZT1jLmxlbmd0aDt3aGlsZShlLS0pZC5hdHRySGFuZGxlW2NbZV1dPWJ9ZnVuY3Rpb24gbGEoYSxiKXt2YXIgYz1iJiZhLGQ9YyYmMT09PWEubm9kZVR5cGUmJjE9PT1iLm5vZGVUeXBlJiZhLnNvdXJjZUluZGV4LWIuc291cmNlSW5kZXg7aWYoZClyZXR1cm4gZDtpZihjKXdoaWxlKGM9Yy5uZXh0U2libGluZylpZihjPT09YilyZXR1cm4tMTtyZXR1cm4gYT8xOi0xfWZ1bmN0aW9uIG1hKGEpe3JldHVybiBmdW5jdGlvbihiKXt2YXIgYz1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09YyYmYi50eXBlPT09YX19ZnVuY3Rpb24gbmEoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm4oXCJpbnB1dFwiPT09Y3x8XCJidXR0b25cIj09PWMpJiZiLnR5cGU9PT1hfX1mdW5jdGlvbiBvYShhKXtyZXR1cm4gZnVuY3Rpb24oYil7cmV0dXJuXCJmb3JtXCJpbiBiP2IucGFyZW50Tm9kZSYmYi5kaXNhYmxlZD09PSExP1wibGFiZWxcImluIGI/XCJsYWJlbFwiaW4gYi5wYXJlbnROb2RlP2IucGFyZW50Tm9kZS5kaXNhYmxlZD09PWE6Yi5kaXNhYmxlZD09PWE6Yi5pc0Rpc2FibGVkPT09YXx8Yi5pc0Rpc2FibGVkIT09IWEmJmVhKGIpPT09YTpiLmRpc2FibGVkPT09YTpcImxhYmVsXCJpbiBiJiZiLmRpc2FibGVkPT09YX19ZnVuY3Rpb24gcGEoYSl7cmV0dXJuIGlhKGZ1bmN0aW9uKGIpe3JldHVybiBiPStiLGlhKGZ1bmN0aW9uKGMsZCl7dmFyIGUsZj1hKFtdLGMubGVuZ3RoLGIpLGc9Zi5sZW5ndGg7d2hpbGUoZy0tKWNbZT1mW2ddXSYmKGNbZV09IShkW2VdPWNbZV0pKX0pfSl9ZnVuY3Rpb24gcWEoYSl7cmV0dXJuIGEmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmdldEVsZW1lbnRzQnlUYWdOYW1lJiZhfWM9Z2Euc3VwcG9ydD17fSxmPWdhLmlzWE1MPWZ1bmN0aW9uKGEpe3ZhciBiPWEmJihhLm93bmVyRG9jdW1lbnR8fGEpLmRvY3VtZW50RWxlbWVudDtyZXR1cm4hIWImJlwiSFRNTFwiIT09Yi5ub2RlTmFtZX0sbT1nYS5zZXREb2N1bWVudD1mdW5jdGlvbihhKXt2YXIgYixlLGc9YT9hLm93bmVyRG9jdW1lbnR8fGE6djtyZXR1cm4gZyE9PW4mJjk9PT1nLm5vZGVUeXBlJiZnLmRvY3VtZW50RWxlbWVudD8obj1nLG89bi5kb2N1bWVudEVsZW1lbnQscD0hZihuKSx2IT09biYmKGU9bi5kZWZhdWx0VmlldykmJmUudG9wIT09ZSYmKGUuYWRkRXZlbnRMaXN0ZW5lcj9lLmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmxvYWRcIixkYSwhMSk6ZS5hdHRhY2hFdmVudCYmZS5hdHRhY2hFdmVudChcIm9udW5sb2FkXCIsZGEpKSxjLmF0dHJpYnV0ZXM9amEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuY2xhc3NOYW1lPVwiaVwiLCFhLmdldEF0dHJpYnV0ZShcImNsYXNzTmFtZVwiKX0pLGMuZ2V0RWxlbWVudHNCeVRhZ05hbWU9amEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuYXBwZW5kQ2hpbGQobi5jcmVhdGVDb21tZW50KFwiXCIpKSwhYS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIikubGVuZ3RofSksYy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lPVkudGVzdChuLmdldEVsZW1lbnRzQnlDbGFzc05hbWUpLGMuZ2V0QnlJZD1qYShmdW5jdGlvbihhKXtyZXR1cm4gby5hcHBlbmRDaGlsZChhKS5pZD11LCFuLmdldEVsZW1lbnRzQnlOYW1lfHwhbi5nZXRFbGVtZW50c0J5TmFtZSh1KS5sZW5ndGh9KSxjLmdldEJ5SWQ/KGQuZmlsdGVyLklEPWZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShfLGFhKTtyZXR1cm4gZnVuY3Rpb24oYSl7cmV0dXJuIGEuZ2V0QXR0cmlidXRlKFwiaWRcIik9PT1ifX0sZC5maW5kLklEPWZ1bmN0aW9uKGEsYil7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIuZ2V0RWxlbWVudEJ5SWQmJnApe3ZhciBjPWIuZ2V0RWxlbWVudEJ5SWQoYSk7cmV0dXJuIGM/W2NdOltdfX0pOihkLmZpbHRlci5JRD1mdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UoXyxhYSk7cmV0dXJuIGZ1bmN0aW9uKGEpe3ZhciBjPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmdldEF0dHJpYnV0ZU5vZGUmJmEuZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpO3JldHVybiBjJiZjLnZhbHVlPT09Yn19LGQuZmluZC5JRD1mdW5jdGlvbihhLGIpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLmdldEVsZW1lbnRCeUlkJiZwKXt2YXIgYyxkLGUsZj1iLmdldEVsZW1lbnRCeUlkKGEpO2lmKGYpe2lmKGM9Zi5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIiksYyYmYy52YWx1ZT09PWEpcmV0dXJuW2ZdO2U9Yi5nZXRFbGVtZW50c0J5TmFtZShhKSxkPTA7d2hpbGUoZj1lW2QrK10paWYoYz1mLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKSxjJiZjLnZhbHVlPT09YSlyZXR1cm5bZl19cmV0dXJuW119fSksZC5maW5kLlRBRz1jLmdldEVsZW1lbnRzQnlUYWdOYW1lP2Z1bmN0aW9uKGEsYil7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIuZ2V0RWxlbWVudHNCeVRhZ05hbWU/Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShhKTpjLnFzYT9iLnF1ZXJ5U2VsZWN0b3JBbGwoYSk6dm9pZCAwfTpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9W10sZT0wLGY9Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShhKTtpZihcIipcIj09PWEpe3doaWxlKGM9ZltlKytdKTE9PT1jLm5vZGVUeXBlJiZkLnB1c2goYyk7cmV0dXJuIGR9cmV0dXJuIGZ9LGQuZmluZC5DTEFTUz1jLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmZ1bmN0aW9uKGEsYil7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmcClyZXR1cm4gYi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGEpfSxyPVtdLHE9W10sKGMucXNhPVkudGVzdChuLnF1ZXJ5U2VsZWN0b3JBbGwpKSYmKGphKGZ1bmN0aW9uKGEpe28uYXBwZW5kQ2hpbGQoYSkuaW5uZXJIVE1MPVwiPGEgaWQ9J1wiK3UrXCInPjwvYT48c2VsZWN0IGlkPSdcIit1K1wiLVxcclxcXFwnIG1zYWxsb3djYXB0dXJlPScnPjxvcHRpb24gc2VsZWN0ZWQ9Jyc+PC9vcHRpb24+PC9zZWxlY3Q+XCIsYS5xdWVyeVNlbGVjdG9yQWxsKFwiW21zYWxsb3djYXB0dXJlXj0nJ11cIikubGVuZ3RoJiZxLnB1c2goXCJbKl4kXT1cIitLK1wiKig/OicnfFxcXCJcXFwiKVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbc2VsZWN0ZWRdXCIpLmxlbmd0aHx8cS5wdXNoKFwiXFxcXFtcIitLK1wiKig/OnZhbHVlfFwiK0orXCIpXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIltpZH49XCIrdStcIi1dXCIpLmxlbmd0aHx8cS5wdXNoKFwifj1cIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiOmNoZWNrZWRcIikubGVuZ3RofHxxLnB1c2goXCI6Y2hlY2tlZFwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhI1wiK3UrXCIrKlwiKS5sZW5ndGh8fHEucHVzaChcIi4jLitbK35dXCIpfSksamEoZnVuY3Rpb24oYSl7YS5pbm5lckhUTUw9XCI8YSBocmVmPScnIGRpc2FibGVkPSdkaXNhYmxlZCc+PC9hPjxzZWxlY3QgZGlzYWJsZWQ9J2Rpc2FibGVkJz48b3B0aW9uLz48L3NlbGVjdD5cIjt2YXIgYj1uLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtiLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImhpZGRlblwiKSxhLmFwcGVuZENoaWxkKGIpLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcIkRcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9ZF1cIikubGVuZ3RoJiZxLnB1c2goXCJuYW1lXCIrSytcIipbKl4kfCF+XT89XCIpLDIhPT1hLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZW5hYmxlZFwiKS5sZW5ndGgmJnEucHVzaChcIjplbmFibGVkXCIsXCI6ZGlzYWJsZWRcIiksby5hcHBlbmRDaGlsZChhKS5kaXNhYmxlZD0hMCwyIT09YS5xdWVyeVNlbGVjdG9yQWxsKFwiOmRpc2FibGVkXCIpLmxlbmd0aCYmcS5wdXNoKFwiOmVuYWJsZWRcIixcIjpkaXNhYmxlZFwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqLDp4XCIpLHEucHVzaChcIiwuKjpcIil9KSksKGMubWF0Y2hlc1NlbGVjdG9yPVkudGVzdChzPW8ubWF0Y2hlc3x8by53ZWJraXRNYXRjaGVzU2VsZWN0b3J8fG8ubW96TWF0Y2hlc1NlbGVjdG9yfHxvLm9NYXRjaGVzU2VsZWN0b3J8fG8ubXNNYXRjaGVzU2VsZWN0b3IpKSYmamEoZnVuY3Rpb24oYSl7Yy5kaXNjb25uZWN0ZWRNYXRjaD1zLmNhbGwoYSxcIipcIikscy5jYWxsKGEsXCJbcyE9JyddOnhcIiksci5wdXNoKFwiIT1cIixOKX0pLHE9cS5sZW5ndGgmJm5ldyBSZWdFeHAocS5qb2luKFwifFwiKSkscj1yLmxlbmd0aCYmbmV3IFJlZ0V4cChyLmpvaW4oXCJ8XCIpKSxiPVkudGVzdChvLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKSx0PWJ8fFkudGVzdChvLmNvbnRhaW5zKT9mdW5jdGlvbihhLGIpe3ZhciBjPTk9PT1hLm5vZGVUeXBlP2EuZG9jdW1lbnRFbGVtZW50OmEsZD1iJiZiLnBhcmVudE5vZGU7cmV0dXJuIGE9PT1kfHwhKCFkfHwxIT09ZC5ub2RlVHlwZXx8IShjLmNvbnRhaW5zP2MuY29udGFpbnMoZCk6YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiYmMTYmYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihkKSkpfTpmdW5jdGlvbihhLGIpe2lmKGIpd2hpbGUoYj1iLnBhcmVudE5vZGUpaWYoYj09PWEpcmV0dXJuITA7cmV0dXJuITF9LEI9Yj9mdW5jdGlvbihhLGIpe2lmKGE9PT1iKXJldHVybiBsPSEwLDA7dmFyIGQ9IWEuY29tcGFyZURvY3VtZW50UG9zaXRpb24tIWIuY29tcGFyZURvY3VtZW50UG9zaXRpb247cmV0dXJuIGQ/ZDooZD0oYS5vd25lckRvY3VtZW50fHxhKT09PShiLm93bmVyRG9jdW1lbnR8fGIpP2EuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYik6MSwxJmR8fCFjLnNvcnREZXRhY2hlZCYmYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihhKT09PWQ/YT09PW58fGEub3duZXJEb2N1bWVudD09PXYmJnQodixhKT8tMTpiPT09bnx8Yi5vd25lckRvY3VtZW50PT09diYmdCh2LGIpPzE6az9JKGssYSktSShrLGIpOjA6NCZkPy0xOjEpfTpmdW5jdGlvbihhLGIpe2lmKGE9PT1iKXJldHVybiBsPSEwLDA7dmFyIGMsZD0wLGU9YS5wYXJlbnROb2RlLGY9Yi5wYXJlbnROb2RlLGc9W2FdLGg9W2JdO2lmKCFlfHwhZilyZXR1cm4gYT09PW4/LTE6Yj09PW4/MTplPy0xOmY/MTprP0koayxhKS1JKGssYik6MDtpZihlPT09ZilyZXR1cm4gbGEoYSxiKTtjPWE7d2hpbGUoYz1jLnBhcmVudE5vZGUpZy51bnNoaWZ0KGMpO2M9Yjt3aGlsZShjPWMucGFyZW50Tm9kZSloLnVuc2hpZnQoYyk7d2hpbGUoZ1tkXT09PWhbZF0pZCsrO3JldHVybiBkP2xhKGdbZF0saFtkXSk6Z1tkXT09PXY/LTE6aFtkXT09PXY/MTowfSxuKTpufSxnYS5tYXRjaGVzPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGdhKGEsbnVsbCxudWxsLGIpfSxnYS5tYXRjaGVzU2VsZWN0b3I9ZnVuY3Rpb24oYSxiKXtpZigoYS5vd25lckRvY3VtZW50fHxhKSE9PW4mJm0oYSksYj1iLnJlcGxhY2UoUyxcIj0nJDEnXVwiKSxjLm1hdGNoZXNTZWxlY3RvciYmcCYmIUFbYitcIiBcIl0mJighcnx8IXIudGVzdChiKSkmJighcXx8IXEudGVzdChiKSkpdHJ5e3ZhciBkPXMuY2FsbChhLGIpO2lmKGR8fGMuZGlzY29ubmVjdGVkTWF0Y2h8fGEuZG9jdW1lbnQmJjExIT09YS5kb2N1bWVudC5ub2RlVHlwZSlyZXR1cm4gZH1jYXRjaChlKXt9cmV0dXJuIGdhKGIsbixudWxsLFthXSkubGVuZ3RoPjB9LGdhLmNvbnRhaW5zPWZ1bmN0aW9uKGEsYil7cmV0dXJuKGEub3duZXJEb2N1bWVudHx8YSkhPT1uJiZtKGEpLHQoYSxiKX0sZ2EuYXR0cj1mdW5jdGlvbihhLGIpeyhhLm93bmVyRG9jdW1lbnR8fGEpIT09biYmbShhKTt2YXIgZT1kLmF0dHJIYW5kbGVbYi50b0xvd2VyQ2FzZSgpXSxmPWUmJkMuY2FsbChkLmF0dHJIYW5kbGUsYi50b0xvd2VyQ2FzZSgpKT9lKGEsYiwhcCk6dm9pZCAwO3JldHVybiB2b2lkIDAhPT1mP2Y6Yy5hdHRyaWJ1dGVzfHwhcD9hLmdldEF0dHJpYnV0ZShiKTooZj1hLmdldEF0dHJpYnV0ZU5vZGUoYikpJiZmLnNwZWNpZmllZD9mLnZhbHVlOm51bGx9LGdhLmVzY2FwZT1mdW5jdGlvbihhKXtyZXR1cm4oYStcIlwiKS5yZXBsYWNlKGJhLGNhKX0sZ2EuZXJyb3I9ZnVuY3Rpb24oYSl7dGhyb3cgbmV3IEVycm9yKFwiU3ludGF4IGVycm9yLCB1bnJlY29nbml6ZWQgZXhwcmVzc2lvbjogXCIrYSl9LGdhLnVuaXF1ZVNvcnQ9ZnVuY3Rpb24oYSl7dmFyIGIsZD1bXSxlPTAsZj0wO2lmKGw9IWMuZGV0ZWN0RHVwbGljYXRlcyxrPSFjLnNvcnRTdGFibGUmJmEuc2xpY2UoMCksYS5zb3J0KEIpLGwpe3doaWxlKGI9YVtmKytdKWI9PT1hW2ZdJiYoZT1kLnB1c2goZikpO3doaWxlKGUtLSlhLnNwbGljZShkW2VdLDEpfXJldHVybiBrPW51bGwsYX0sZT1nYS5nZXRUZXh0PWZ1bmN0aW9uKGEpe3ZhciBiLGM9XCJcIixkPTAsZj1hLm5vZGVUeXBlO2lmKGYpe2lmKDE9PT1mfHw5PT09Znx8MTE9PT1mKXtpZihcInN0cmluZ1wiPT10eXBlb2YgYS50ZXh0Q29udGVudClyZXR1cm4gYS50ZXh0Q29udGVudDtmb3IoYT1hLmZpcnN0Q2hpbGQ7YTthPWEubmV4dFNpYmxpbmcpYys9ZShhKX1lbHNlIGlmKDM9PT1mfHw0PT09ZilyZXR1cm4gYS5ub2RlVmFsdWV9ZWxzZSB3aGlsZShiPWFbZCsrXSljKz1lKGIpO3JldHVybiBjfSxkPWdhLnNlbGVjdG9ycz17Y2FjaGVMZW5ndGg6NTAsY3JlYXRlUHNldWRvOmlhLG1hdGNoOlYsYXR0ckhhbmRsZTp7fSxmaW5kOnt9LHJlbGF0aXZlOntcIj5cIjp7ZGlyOlwicGFyZW50Tm9kZVwiLGZpcnN0OiEwfSxcIiBcIjp7ZGlyOlwicGFyZW50Tm9kZVwifSxcIitcIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCIsZmlyc3Q6ITB9LFwiflwiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIn19LHByZUZpbHRlcjp7QVRUUjpmdW5jdGlvbihhKXtyZXR1cm4gYVsxXT1hWzFdLnJlcGxhY2UoXyxhYSksYVszXT0oYVszXXx8YVs0XXx8YVs1XXx8XCJcIikucmVwbGFjZShfLGFhKSxcIn49XCI9PT1hWzJdJiYoYVszXT1cIiBcIithWzNdK1wiIFwiKSxhLnNsaWNlKDAsNCl9LENISUxEOmZ1bmN0aW9uKGEpe3JldHVybiBhWzFdPWFbMV0udG9Mb3dlckNhc2UoKSxcIm50aFwiPT09YVsxXS5zbGljZSgwLDMpPyhhWzNdfHxnYS5lcnJvcihhWzBdKSxhWzRdPSsoYVs0XT9hWzVdKyhhWzZdfHwxKToyKihcImV2ZW5cIj09PWFbM118fFwib2RkXCI9PT1hWzNdKSksYVs1XT0rKGFbN10rYVs4XXx8XCJvZGRcIj09PWFbM10pKTphWzNdJiZnYS5lcnJvcihhWzBdKSxhfSxQU0VVRE86ZnVuY3Rpb24oYSl7dmFyIGIsYz0hYVs2XSYmYVsyXTtyZXR1cm4gVi5DSElMRC50ZXN0KGFbMF0pP251bGw6KGFbM10/YVsyXT1hWzRdfHxhWzVdfHxcIlwiOmMmJlQudGVzdChjKSYmKGI9ZyhjLCEwKSkmJihiPWMuaW5kZXhPZihcIilcIixjLmxlbmd0aC1iKS1jLmxlbmd0aCkmJihhWzBdPWFbMF0uc2xpY2UoMCxiKSxhWzJdPWMuc2xpY2UoMCxiKSksYS5zbGljZSgwLDMpKX19LGZpbHRlcjp7VEFHOmZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShfLGFhKS50b0xvd2VyQ2FzZSgpO3JldHVyblwiKlwiPT09YT9mdW5jdGlvbigpe3JldHVybiEwfTpmdW5jdGlvbihhKXtyZXR1cm4gYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09Yn19LENMQVNTOmZ1bmN0aW9uKGEpe3ZhciBiPXlbYStcIiBcIl07cmV0dXJuIGJ8fChiPW5ldyBSZWdFeHAoXCIoXnxcIitLK1wiKVwiK2ErXCIoXCIrSytcInwkKVwiKSkmJnkoYSxmdW5jdGlvbihhKXtyZXR1cm4gYi50ZXN0KFwic3RyaW5nXCI9PXR5cGVvZiBhLmNsYXNzTmFtZSYmYS5jbGFzc05hbWV8fFwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmdldEF0dHJpYnV0ZSYmYS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIil9KX0sQVRUUjpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGZ1bmN0aW9uKGQpe3ZhciBlPWdhLmF0dHIoZCxhKTtyZXR1cm4gbnVsbD09ZT9cIiE9XCI9PT1iOiFifHwoZSs9XCJcIixcIj1cIj09PWI/ZT09PWM6XCIhPVwiPT09Yj9lIT09YzpcIl49XCI9PT1iP2MmJjA9PT1lLmluZGV4T2YoYyk6XCIqPVwiPT09Yj9jJiZlLmluZGV4T2YoYyk+LTE6XCIkPVwiPT09Yj9jJiZlLnNsaWNlKC1jLmxlbmd0aCk9PT1jOlwifj1cIj09PWI/KFwiIFwiK2UucmVwbGFjZShPLFwiIFwiKStcIiBcIikuaW5kZXhPZihjKT4tMTpcInw9XCI9PT1iJiYoZT09PWN8fGUuc2xpY2UoMCxjLmxlbmd0aCsxKT09PWMrXCItXCIpKX19LENISUxEOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGY9XCJudGhcIiE9PWEuc2xpY2UoMCwzKSxnPVwibGFzdFwiIT09YS5zbGljZSgtNCksaD1cIm9mLXR5cGVcIj09PWI7cmV0dXJuIDE9PT1kJiYwPT09ZT9mdW5jdGlvbihhKXtyZXR1cm4hIWEucGFyZW50Tm9kZX06ZnVuY3Rpb24oYixjLGkpe3ZhciBqLGssbCxtLG4sbyxwPWYhPT1nP1wibmV4dFNpYmxpbmdcIjpcInByZXZpb3VzU2libGluZ1wiLHE9Yi5wYXJlbnROb2RlLHI9aCYmYi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLHM9IWkmJiFoLHQ9ITE7aWYocSl7aWYoZil7d2hpbGUocCl7bT1iO3doaWxlKG09bVtwXSlpZihoP20ubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXI6MT09PW0ubm9kZVR5cGUpcmV0dXJuITE7bz1wPVwib25seVwiPT09YSYmIW8mJlwibmV4dFNpYmxpbmdcIn1yZXR1cm4hMH1pZihvPVtnP3EuZmlyc3RDaGlsZDpxLmxhc3RDaGlsZF0sZyYmcyl7bT1xLGw9bVt1XXx8KG1bdV09e30pLGs9bFttLnVuaXF1ZUlEXXx8KGxbbS51bmlxdWVJRF09e30pLGo9a1thXXx8W10sbj1qWzBdPT09dyYmalsxXSx0PW4mJmpbMl0sbT1uJiZxLmNoaWxkTm9kZXNbbl07d2hpbGUobT0rK24mJm0mJm1bcF18fCh0PW49MCl8fG8ucG9wKCkpaWYoMT09PW0ubm9kZVR5cGUmJisrdCYmbT09PWIpe2tbYV09W3csbix0XTticmVha319ZWxzZSBpZihzJiYobT1iLGw9bVt1XXx8KG1bdV09e30pLGs9bFttLnVuaXF1ZUlEXXx8KGxbbS51bmlxdWVJRF09e30pLGo9a1thXXx8W10sbj1qWzBdPT09dyYmalsxXSx0PW4pLHQ9PT0hMSl3aGlsZShtPSsrbiYmbSYmbVtwXXx8KHQ9bj0wKXx8by5wb3AoKSlpZigoaD9tLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1yOjE9PT1tLm5vZGVUeXBlKSYmKyt0JiYocyYmKGw9bVt1XXx8KG1bdV09e30pLGs9bFttLnVuaXF1ZUlEXXx8KGxbbS51bmlxdWVJRF09e30pLGtbYV09W3csdF0pLG09PT1iKSlicmVhaztyZXR1cm4gdC09ZSx0PT09ZHx8dCVkPT09MCYmdC9kPj0wfX19LFBTRVVETzpmdW5jdGlvbihhLGIpe3ZhciBjLGU9ZC5wc2V1ZG9zW2FdfHxkLnNldEZpbHRlcnNbYS50b0xvd2VyQ2FzZSgpXXx8Z2EuZXJyb3IoXCJ1bnN1cHBvcnRlZCBwc2V1ZG86IFwiK2EpO3JldHVybiBlW3VdP2UoYik6ZS5sZW5ndGg+MT8oYz1bYSxhLFwiXCIsYl0sZC5zZXRGaWx0ZXJzLmhhc093blByb3BlcnR5KGEudG9Mb3dlckNhc2UoKSk/aWEoZnVuY3Rpb24oYSxjKXt2YXIgZCxmPWUoYSxiKSxnPWYubGVuZ3RoO3doaWxlKGctLSlkPUkoYSxmW2ddKSxhW2RdPSEoY1tkXT1mW2ddKX0pOmZ1bmN0aW9uKGEpe3JldHVybiBlKGEsMCxjKX0pOmV9fSxwc2V1ZG9zOntub3Q6aWEoZnVuY3Rpb24oYSl7dmFyIGI9W10sYz1bXSxkPWgoYS5yZXBsYWNlKFAsXCIkMVwiKSk7cmV0dXJuIGRbdV0/aWEoZnVuY3Rpb24oYSxiLGMsZSl7dmFyIGYsZz1kKGEsbnVsbCxlLFtdKSxoPWEubGVuZ3RoO3doaWxlKGgtLSkoZj1nW2hdKSYmKGFbaF09IShiW2hdPWYpKX0pOmZ1bmN0aW9uKGEsZSxmKXtyZXR1cm4gYlswXT1hLGQoYixudWxsLGYsYyksYlswXT1udWxsLCFjLnBvcCgpfX0pLGhhczppYShmdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oYil7cmV0dXJuIGdhKGEsYikubGVuZ3RoPjB9fSksY29udGFpbnM6aWEoZnVuY3Rpb24oYSl7cmV0dXJuIGE9YS5yZXBsYWNlKF8sYWEpLGZ1bmN0aW9uKGIpe3JldHVybihiLnRleHRDb250ZW50fHxiLmlubmVyVGV4dHx8ZShiKSkuaW5kZXhPZihhKT4tMX19KSxsYW5nOmlhKGZ1bmN0aW9uKGEpe3JldHVybiBVLnRlc3QoYXx8XCJcIil8fGdhLmVycm9yKFwidW5zdXBwb3J0ZWQgbGFuZzogXCIrYSksYT1hLnJlcGxhY2UoXyxhYSkudG9Mb3dlckNhc2UoKSxmdW5jdGlvbihiKXt2YXIgYztkbyBpZihjPXA/Yi5sYW5nOmIuZ2V0QXR0cmlidXRlKFwieG1sOmxhbmdcIil8fGIuZ2V0QXR0cmlidXRlKFwibGFuZ1wiKSlyZXR1cm4gYz1jLnRvTG93ZXJDYXNlKCksYz09PWF8fDA9PT1jLmluZGV4T2YoYStcIi1cIik7d2hpbGUoKGI9Yi5wYXJlbnROb2RlKSYmMT09PWIubm9kZVR5cGUpO3JldHVybiExfX0pLHRhcmdldDpmdW5jdGlvbihiKXt2YXIgYz1hLmxvY2F0aW9uJiZhLmxvY2F0aW9uLmhhc2g7cmV0dXJuIGMmJmMuc2xpY2UoMSk9PT1iLmlkfSxyb290OmZ1bmN0aW9uKGEpe3JldHVybiBhPT09b30sZm9jdXM6ZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1uLmFjdGl2ZUVsZW1lbnQmJighbi5oYXNGb2N1c3x8bi5oYXNGb2N1cygpKSYmISEoYS50eXBlfHxhLmhyZWZ8fH5hLnRhYkluZGV4KX0sZW5hYmxlZDpvYSghMSksZGlzYWJsZWQ6b2EoITApLGNoZWNrZWQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWImJiEhYS5jaGVja2VkfHxcIm9wdGlvblwiPT09YiYmISFhLnNlbGVjdGVkfSxzZWxlY3RlZDpmdW5jdGlvbihhKXtyZXR1cm4gYS5wYXJlbnROb2RlJiZhLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCxhLnNlbGVjdGVkPT09ITB9LGVtcHR5OmZ1bmN0aW9uKGEpe2ZvcihhPWEuZmlyc3RDaGlsZDthO2E9YS5uZXh0U2libGluZylpZihhLm5vZGVUeXBlPDYpcmV0dXJuITE7cmV0dXJuITB9LHBhcmVudDpmdW5jdGlvbihhKXtyZXR1cm4hZC5wc2V1ZG9zLmVtcHR5KGEpfSxoZWFkZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIFgudGVzdChhLm5vZGVOYW1lKX0saW5wdXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIFcudGVzdChhLm5vZGVOYW1lKX0sYnV0dG9uOmZ1bmN0aW9uKGEpe3ZhciBiPWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1iJiZcImJ1dHRvblwiPT09YS50eXBlfHxcImJ1dHRvblwiPT09Yn0sdGV4dDpmdW5jdGlvbihhKXt2YXIgYjtyZXR1cm5cImlucHV0XCI9PT1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkmJlwidGV4dFwiPT09YS50eXBlJiYobnVsbD09KGI9YS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKXx8XCJ0ZXh0XCI9PT1iLnRvTG93ZXJDYXNlKCkpfSxmaXJzdDpwYShmdW5jdGlvbigpe3JldHVyblswXX0pLGxhc3Q6cGEoZnVuY3Rpb24oYSxiKXtyZXR1cm5bYi0xXX0pLGVxOnBhKGZ1bmN0aW9uKGEsYixjKXtyZXR1cm5bYzwwP2MrYjpjXX0pLGV2ZW46cGEoZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MDtjPGI7Yys9MilhLnB1c2goYyk7cmV0dXJuIGF9KSxvZGQ6cGEoZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MTtjPGI7Yys9MilhLnB1c2goYyk7cmV0dXJuIGF9KSxsdDpwYShmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPWM8MD9jK2I6YzstLWQ+PTA7KWEucHVzaChkKTtyZXR1cm4gYX0pLGd0OnBhKGZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQ9YzwwP2MrYjpjOysrZDxiOylhLnB1c2goZCk7cmV0dXJuIGF9KX19LGQucHNldWRvcy5udGg9ZC5wc2V1ZG9zLmVxO2ZvcihiIGlue3JhZGlvOiEwLGNoZWNrYm94OiEwLGZpbGU6ITAscGFzc3dvcmQ6ITAsaW1hZ2U6ITB9KWQucHNldWRvc1tiXT1tYShiKTtmb3IoYiBpbntzdWJtaXQ6ITAscmVzZXQ6ITB9KWQucHNldWRvc1tiXT1uYShiKTtmdW5jdGlvbiByYSgpe31yYS5wcm90b3R5cGU9ZC5maWx0ZXJzPWQucHNldWRvcyxkLnNldEZpbHRlcnM9bmV3IHJhLGc9Z2EudG9rZW5pemU9ZnVuY3Rpb24oYSxiKXt2YXIgYyxlLGYsZyxoLGksaixrPXpbYStcIiBcIl07aWYoaylyZXR1cm4gYj8wOmsuc2xpY2UoMCk7aD1hLGk9W10saj1kLnByZUZpbHRlcjt3aGlsZShoKXtjJiYhKGU9US5leGVjKGgpKXx8KGUmJihoPWguc2xpY2UoZVswXS5sZW5ndGgpfHxoKSxpLnB1c2goZj1bXSkpLGM9ITEsKGU9Ui5leGVjKGgpKSYmKGM9ZS5zaGlmdCgpLGYucHVzaCh7dmFsdWU6Yyx0eXBlOmVbMF0ucmVwbGFjZShQLFwiIFwiKX0pLGg9aC5zbGljZShjLmxlbmd0aCkpO2ZvcihnIGluIGQuZmlsdGVyKSEoZT1WW2ddLmV4ZWMoaCkpfHxqW2ddJiYhKGU9altnXShlKSl8fChjPWUuc2hpZnQoKSxmLnB1c2goe3ZhbHVlOmMsdHlwZTpnLG1hdGNoZXM6ZX0pLGg9aC5zbGljZShjLmxlbmd0aCkpO2lmKCFjKWJyZWFrfXJldHVybiBiP2gubGVuZ3RoOmg/Z2EuZXJyb3IoYSk6eihhLGkpLnNsaWNlKDApfTtmdW5jdGlvbiBzYShhKXtmb3IodmFyIGI9MCxjPWEubGVuZ3RoLGQ9XCJcIjtiPGM7YisrKWQrPWFbYl0udmFsdWU7cmV0dXJuIGR9ZnVuY3Rpb24gdGEoYSxiLGMpe3ZhciBkPWIuZGlyLGU9Yi5uZXh0LGY9ZXx8ZCxnPWMmJlwicGFyZW50Tm9kZVwiPT09ZixoPXgrKztyZXR1cm4gYi5maXJzdD9mdW5jdGlvbihiLGMsZSl7d2hpbGUoYj1iW2RdKWlmKDE9PT1iLm5vZGVUeXBlfHxnKXJldHVybiBhKGIsYyxlKTtyZXR1cm4hMX06ZnVuY3Rpb24oYixjLGkpe3ZhciBqLGssbCxtPVt3LGhdO2lmKGkpe3doaWxlKGI9YltkXSlpZigoMT09PWIubm9kZVR5cGV8fGcpJiZhKGIsYyxpKSlyZXR1cm4hMH1lbHNlIHdoaWxlKGI9YltkXSlpZigxPT09Yi5ub2RlVHlwZXx8ZylpZihsPWJbdV18fChiW3VdPXt9KSxrPWxbYi51bmlxdWVJRF18fChsW2IudW5pcXVlSURdPXt9KSxlJiZlPT09Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKWI9YltkXXx8YjtlbHNle2lmKChqPWtbZl0pJiZqWzBdPT09dyYmalsxXT09PWgpcmV0dXJuIG1bMl09alsyXTtpZihrW2ZdPW0sbVsyXT1hKGIsYyxpKSlyZXR1cm4hMH1yZXR1cm4hMX19ZnVuY3Rpb24gdWEoYSl7cmV0dXJuIGEubGVuZ3RoPjE/ZnVuY3Rpb24oYixjLGQpe3ZhciBlPWEubGVuZ3RoO3doaWxlKGUtLSlpZighYVtlXShiLGMsZCkpcmV0dXJuITE7cmV0dXJuITB9OmFbMF19ZnVuY3Rpb24gdmEoYSxiLGMpe2Zvcih2YXIgZD0wLGU9Yi5sZW5ndGg7ZDxlO2QrKylnYShhLGJbZF0sYyk7cmV0dXJuIGN9ZnVuY3Rpb24gd2EoYSxiLGMsZCxlKXtmb3IodmFyIGYsZz1bXSxoPTAsaT1hLmxlbmd0aCxqPW51bGwhPWI7aDxpO2grKykoZj1hW2hdKSYmKGMmJiFjKGYsZCxlKXx8KGcucHVzaChmKSxqJiZiLnB1c2goaCkpKTtyZXR1cm4gZ31mdW5jdGlvbiB4YShhLGIsYyxkLGUsZil7cmV0dXJuIGQmJiFkW3VdJiYoZD14YShkKSksZSYmIWVbdV0mJihlPXhhKGUsZikpLGlhKGZ1bmN0aW9uKGYsZyxoLGkpe3ZhciBqLGssbCxtPVtdLG49W10sbz1nLmxlbmd0aCxwPWZ8fHZhKGJ8fFwiKlwiLGgubm9kZVR5cGU/W2hdOmgsW10pLHE9IWF8fCFmJiZiP3A6d2EocCxtLGEsaCxpKSxyPWM/ZXx8KGY/YTpvfHxkKT9bXTpnOnE7aWYoYyYmYyhxLHIsaCxpKSxkKXtqPXdhKHIsbiksZChqLFtdLGgsaSksaz1qLmxlbmd0aDt3aGlsZShrLS0pKGw9altrXSkmJihyW25ba11dPSEocVtuW2tdXT1sKSl9aWYoZil7aWYoZXx8YSl7aWYoZSl7aj1bXSxrPXIubGVuZ3RoO3doaWxlKGstLSkobD1yW2tdKSYmai5wdXNoKHFba109bCk7ZShudWxsLHI9W10saixpKX1rPXIubGVuZ3RoO3doaWxlKGstLSkobD1yW2tdKSYmKGo9ZT9JKGYsbCk6bVtrXSk+LTEmJihmW2pdPSEoZ1tqXT1sKSl9fWVsc2Ugcj13YShyPT09Zz9yLnNwbGljZShvLHIubGVuZ3RoKTpyKSxlP2UobnVsbCxnLHIsaSk6Ry5hcHBseShnLHIpfSl9ZnVuY3Rpb24geWEoYSl7Zm9yKHZhciBiLGMsZSxmPWEubGVuZ3RoLGc9ZC5yZWxhdGl2ZVthWzBdLnR5cGVdLGg9Z3x8ZC5yZWxhdGl2ZVtcIiBcIl0saT1nPzE6MCxrPXRhKGZ1bmN0aW9uKGEpe3JldHVybiBhPT09Yn0saCwhMCksbD10YShmdW5jdGlvbihhKXtyZXR1cm4gSShiLGEpPi0xfSxoLCEwKSxtPVtmdW5jdGlvbihhLGMsZCl7dmFyIGU9IWcmJihkfHxjIT09ail8fCgoYj1jKS5ub2RlVHlwZT9rKGEsYyxkKTpsKGEsYyxkKSk7cmV0dXJuIGI9bnVsbCxlfV07aTxmO2krKylpZihjPWQucmVsYXRpdmVbYVtpXS50eXBlXSltPVt0YSh1YShtKSxjKV07ZWxzZXtpZihjPWQuZmlsdGVyW2FbaV0udHlwZV0uYXBwbHkobnVsbCxhW2ldLm1hdGNoZXMpLGNbdV0pe2ZvcihlPSsraTtlPGY7ZSsrKWlmKGQucmVsYXRpdmVbYVtlXS50eXBlXSlicmVhaztyZXR1cm4geGEoaT4xJiZ1YShtKSxpPjEmJnNhKGEuc2xpY2UoMCxpLTEpLmNvbmNhdCh7dmFsdWU6XCIgXCI9PT1hW2ktMl0udHlwZT9cIipcIjpcIlwifSkpLnJlcGxhY2UoUCxcIiQxXCIpLGMsaTxlJiZ5YShhLnNsaWNlKGksZSkpLGU8ZiYmeWEoYT1hLnNsaWNlKGUpKSxlPGYmJnNhKGEpKX1tLnB1c2goYyl9cmV0dXJuIHVhKG0pfWZ1bmN0aW9uIHphKGEsYil7dmFyIGM9Yi5sZW5ndGg+MCxlPWEubGVuZ3RoPjAsZj1mdW5jdGlvbihmLGcsaCxpLGspe3ZhciBsLG8scSxyPTAscz1cIjBcIix0PWYmJltdLHU9W10sdj1qLHg9Znx8ZSYmZC5maW5kLlRBRyhcIipcIixrKSx5PXcrPW51bGw9PXY/MTpNYXRoLnJhbmRvbSgpfHwuMSx6PXgubGVuZ3RoO2ZvcihrJiYoaj1nPT09bnx8Z3x8ayk7cyE9PXomJm51bGwhPShsPXhbc10pO3MrKyl7aWYoZSYmbCl7bz0wLGd8fGwub3duZXJEb2N1bWVudD09PW58fChtKGwpLGg9IXApO3doaWxlKHE9YVtvKytdKWlmKHEobCxnfHxuLGgpKXtpLnB1c2gobCk7YnJlYWt9ayYmKHc9eSl9YyYmKChsPSFxJiZsKSYmci0tLGYmJnQucHVzaChsKSl9aWYocis9cyxjJiZzIT09cil7bz0wO3doaWxlKHE9YltvKytdKXEodCx1LGcsaCk7aWYoZil7aWYocj4wKXdoaWxlKHMtLSl0W3NdfHx1W3NdfHwodVtzXT1FLmNhbGwoaSkpO3U9d2EodSl9Ry5hcHBseShpLHUpLGsmJiFmJiZ1Lmxlbmd0aD4wJiZyK2IubGVuZ3RoPjEmJmdhLnVuaXF1ZVNvcnQoaSl9cmV0dXJuIGsmJih3PXksaj12KSx0fTtyZXR1cm4gYz9pYShmKTpmfXJldHVybiBoPWdhLmNvbXBpbGU9ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPVtdLGU9W10sZj1BW2ErXCIgXCJdO2lmKCFmKXtifHwoYj1nKGEpKSxjPWIubGVuZ3RoO3doaWxlKGMtLSlmPXlhKGJbY10pLGZbdV0/ZC5wdXNoKGYpOmUucHVzaChmKTtmPUEoYSx6YShlLGQpKSxmLnNlbGVjdG9yPWF9cmV0dXJuIGZ9LGk9Z2Euc2VsZWN0PWZ1bmN0aW9uKGEsYixjLGUpe3ZhciBmLGksaixrLGwsbT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBhJiZhLG49IWUmJmcoYT1tLnNlbGVjdG9yfHxhKTtpZihjPWN8fFtdLDE9PT1uLmxlbmd0aCl7aWYoaT1uWzBdPW5bMF0uc2xpY2UoMCksaS5sZW5ndGg+MiYmXCJJRFwiPT09KGo9aVswXSkudHlwZSYmOT09PWIubm9kZVR5cGUmJnAmJmQucmVsYXRpdmVbaVsxXS50eXBlXSl7aWYoYj0oZC5maW5kLklEKGoubWF0Y2hlc1swXS5yZXBsYWNlKF8sYWEpLGIpfHxbXSlbMF0sIWIpcmV0dXJuIGM7bSYmKGI9Yi5wYXJlbnROb2RlKSxhPWEuc2xpY2UoaS5zaGlmdCgpLnZhbHVlLmxlbmd0aCl9Zj1WLm5lZWRzQ29udGV4dC50ZXN0KGEpPzA6aS5sZW5ndGg7d2hpbGUoZi0tKXtpZihqPWlbZl0sZC5yZWxhdGl2ZVtrPWoudHlwZV0pYnJlYWs7aWYoKGw9ZC5maW5kW2tdKSYmKGU9bChqLm1hdGNoZXNbMF0ucmVwbGFjZShfLGFhKSwkLnRlc3QoaVswXS50eXBlKSYmcWEoYi5wYXJlbnROb2RlKXx8YikpKXtpZihpLnNwbGljZShmLDEpLGE9ZS5sZW5ndGgmJnNhKGkpLCFhKXJldHVybiBHLmFwcGx5KGMsZSksYzticmVha319fXJldHVybihtfHxoKGEsbikpKGUsYiwhcCxjLCFifHwkLnRlc3QoYSkmJnFhKGIucGFyZW50Tm9kZSl8fGIpLGN9LGMuc29ydFN0YWJsZT11LnNwbGl0KFwiXCIpLnNvcnQoQikuam9pbihcIlwiKT09PXUsYy5kZXRlY3REdXBsaWNhdGVzPSEhbCxtKCksYy5zb3J0RGV0YWNoZWQ9amEoZnVuY3Rpb24oYSl7cmV0dXJuIDEmYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihuLmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKSl9KSxqYShmdW5jdGlvbihhKXtyZXR1cm4gYS5pbm5lckhUTUw9XCI8YSBocmVmPScjJz48L2E+XCIsXCIjXCI9PT1hLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKX0pfHxrYShcInR5cGV8aHJlZnxoZWlnaHR8d2lkdGhcIixmdW5jdGlvbihhLGIsYyl7aWYoIWMpcmV0dXJuIGEuZ2V0QXR0cmlidXRlKGIsXCJ0eXBlXCI9PT1iLnRvTG93ZXJDYXNlKCk/MToyKX0pLGMuYXR0cmlidXRlcyYmamEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuaW5uZXJIVE1MPVwiPGlucHV0Lz5cIixhLmZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIlwiKSxcIlwiPT09YS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpfSl8fGthKFwidmFsdWVcIixmdW5jdGlvbihhLGIsYyl7aWYoIWMmJlwiaW5wdXRcIj09PWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKSlyZXR1cm4gYS5kZWZhdWx0VmFsdWV9KSxqYShmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YS5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKX0pfHxrYShKLGZ1bmN0aW9uKGEsYixjKXt2YXIgZDtpZighYylyZXR1cm4gYVtiXT09PSEwP2IudG9Mb3dlckNhc2UoKTooZD1hLmdldEF0dHJpYnV0ZU5vZGUoYikpJiZkLnNwZWNpZmllZD9kLnZhbHVlOm51bGx9KSxnYX0oYSk7ci5maW5kPXgsci5leHByPXguc2VsZWN0b3JzLHIuZXhwcltcIjpcIl09ci5leHByLnBzZXVkb3Msci51bmlxdWVTb3J0PXIudW5pcXVlPXgudW5pcXVlU29ydCxyLnRleHQ9eC5nZXRUZXh0LHIuaXNYTUxEb2M9eC5pc1hNTCxyLmNvbnRhaW5zPXguY29udGFpbnMsci5lc2NhcGVTZWxlY3Rvcj14LmVzY2FwZTt2YXIgeT1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9W10sZT12b2lkIDAhPT1jO3doaWxlKChhPWFbYl0pJiY5IT09YS5ub2RlVHlwZSlpZigxPT09YS5ub2RlVHlwZSl7aWYoZSYmcihhKS5pcyhjKSlicmVhaztkLnB1c2goYSl9cmV0dXJuIGR9LHo9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9W107YTthPWEubmV4dFNpYmxpbmcpMT09PWEubm9kZVR5cGUmJmEhPT1iJiZjLnB1c2goYSk7cmV0dXJuIGN9LEE9ci5leHByLm1hdGNoLm5lZWRzQ29udGV4dDtmdW5jdGlvbiBCKGEsYil7cmV0dXJuIGEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWIudG9Mb3dlckNhc2UoKX12YXIgQz0vXjwoW2Etel1bXlxcL1xcMD46XFx4MjBcXHRcXHJcXG5cXGZdKilbXFx4MjBcXHRcXHJcXG5cXGZdKlxcLz8+KD86PFxcL1xcMT58KSQvaSxEPS9eLlteOiNcXFtcXC4sXSokLztmdW5jdGlvbiBFKGEsYixjKXtyZXR1cm4gci5pc0Z1bmN0aW9uKGIpP3IuZ3JlcChhLGZ1bmN0aW9uKGEsZCl7cmV0dXJuISFiLmNhbGwoYSxkLGEpIT09Y30pOmIubm9kZVR5cGU/ci5ncmVwKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1iIT09Y30pOlwic3RyaW5nXCIhPXR5cGVvZiBiP3IuZ3JlcChhLGZ1bmN0aW9uKGEpe3JldHVybiBpLmNhbGwoYixhKT4tMSE9PWN9KTpELnRlc3QoYik/ci5maWx0ZXIoYixhLGMpOihiPXIuZmlsdGVyKGIsYSksci5ncmVwKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGkuY2FsbChiLGEpPi0xIT09YyYmMT09PWEubm9kZVR5cGV9KSl9ci5maWx0ZXI9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWJbMF07cmV0dXJuIGMmJihhPVwiOm5vdChcIithK1wiKVwiKSwxPT09Yi5sZW5ndGgmJjE9PT1kLm5vZGVUeXBlP3IuZmluZC5tYXRjaGVzU2VsZWN0b3IoZCxhKT9bZF06W106ci5maW5kLm1hdGNoZXMoYSxyLmdyZXAoYixmdW5jdGlvbihhKXtyZXR1cm4gMT09PWEubm9kZVR5cGV9KSl9LHIuZm4uZXh0ZW5kKHtmaW5kOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZD10aGlzLmxlbmd0aCxlPXRoaXM7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGEpcmV0dXJuIHRoaXMucHVzaFN0YWNrKHIoYSkuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKGI9MDtiPGQ7YisrKWlmKHIuY29udGFpbnMoZVtiXSx0aGlzKSlyZXR1cm4hMH0pKTtmb3IoYz10aGlzLnB1c2hTdGFjayhbXSksYj0wO2I8ZDtiKyspci5maW5kKGEsZVtiXSxjKTtyZXR1cm4gZD4xP3IudW5pcXVlU29ydChjKTpjfSxmaWx0ZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKEUodGhpcyxhfHxbXSwhMSkpfSxub3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKEUodGhpcyxhfHxbXSwhMCkpfSxpczpmdW5jdGlvbihhKXtyZXR1cm4hIUUodGhpcyxcInN0cmluZ1wiPT10eXBlb2YgYSYmQS50ZXN0KGEpP3IoYSk6YXx8W10sITEpLmxlbmd0aH19KTt2YXIgRixHPS9eKD86XFxzKig8W1xcd1xcV10rPilbXj5dKnwjKFtcXHctXSspKSQvLEg9ci5mbi5pbml0PWZ1bmN0aW9uKGEsYixjKXt2YXIgZSxmO2lmKCFhKXJldHVybiB0aGlzO2lmKGM9Y3x8RixcInN0cmluZ1wiPT10eXBlb2YgYSl7aWYoZT1cIjxcIj09PWFbMF0mJlwiPlwiPT09YVthLmxlbmd0aC0xXSYmYS5sZW5ndGg+PTM/W251bGwsYSxudWxsXTpHLmV4ZWMoYSksIWV8fCFlWzFdJiZiKXJldHVybiFifHxiLmpxdWVyeT8oYnx8YykuZmluZChhKTp0aGlzLmNvbnN0cnVjdG9yKGIpLmZpbmQoYSk7aWYoZVsxXSl7aWYoYj1iIGluc3RhbmNlb2Ygcj9iWzBdOmIsci5tZXJnZSh0aGlzLHIucGFyc2VIVE1MKGVbMV0sYiYmYi5ub2RlVHlwZT9iLm93bmVyRG9jdW1lbnR8fGI6ZCwhMCkpLEMudGVzdChlWzFdKSYmci5pc1BsYWluT2JqZWN0KGIpKWZvcihlIGluIGIpci5pc0Z1bmN0aW9uKHRoaXNbZV0pP3RoaXNbZV0oYltlXSk6dGhpcy5hdHRyKGUsYltlXSk7cmV0dXJuIHRoaXN9cmV0dXJuIGY9ZC5nZXRFbGVtZW50QnlJZChlWzJdKSxmJiYodGhpc1swXT1mLHRoaXMubGVuZ3RoPTEpLHRoaXN9cmV0dXJuIGEubm9kZVR5cGU/KHRoaXNbMF09YSx0aGlzLmxlbmd0aD0xLHRoaXMpOnIuaXNGdW5jdGlvbihhKT92b2lkIDAhPT1jLnJlYWR5P2MucmVhZHkoYSk6YShyKTpyLm1ha2VBcnJheShhLHRoaXMpfTtILnByb3RvdHlwZT1yLmZuLEY9cihkKTt2YXIgST0vXig/OnBhcmVudHN8cHJldig/OlVudGlsfEFsbCkpLyxKPXtjaGlsZHJlbjohMCxjb250ZW50czohMCxuZXh0OiEwLHByZXY6ITB9O3IuZm4uZXh0ZW5kKHtoYXM6ZnVuY3Rpb24oYSl7dmFyIGI9cihhLHRoaXMpLGM9Yi5sZW5ndGg7cmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKHZhciBhPTA7YTxjO2ErKylpZihyLmNvbnRhaW5zKHRoaXMsYlthXSkpcmV0dXJuITB9KX0sY2xvc2VzdDpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9MCxlPXRoaXMubGVuZ3RoLGY9W10sZz1cInN0cmluZ1wiIT10eXBlb2YgYSYmcihhKTtpZighQS50ZXN0KGEpKWZvcig7ZDxlO2QrKylmb3IoYz10aGlzW2RdO2MmJmMhPT1iO2M9Yy5wYXJlbnROb2RlKWlmKGMubm9kZVR5cGU8MTEmJihnP2cuaW5kZXgoYyk+LTE6MT09PWMubm9kZVR5cGUmJnIuZmluZC5tYXRjaGVzU2VsZWN0b3IoYyxhKSkpe2YucHVzaChjKTticmVha31yZXR1cm4gdGhpcy5wdXNoU3RhY2soZi5sZW5ndGg+MT9yLnVuaXF1ZVNvcnQoZik6Zil9LGluZGV4OmZ1bmN0aW9uKGEpe3JldHVybiBhP1wic3RyaW5nXCI9PXR5cGVvZiBhP2kuY2FsbChyKGEpLHRoaXNbMF0pOmkuY2FsbCh0aGlzLGEuanF1ZXJ5P2FbMF06YSk6dGhpc1swXSYmdGhpc1swXS5wYXJlbnROb2RlP3RoaXMuZmlyc3QoKS5wcmV2QWxsKCkubGVuZ3RoOi0xfSxhZGQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soci51bmlxdWVTb3J0KHIubWVyZ2UodGhpcy5nZXQoKSxyKGEsYikpKSl9LGFkZEJhY2s6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuYWRkKG51bGw9PWE/dGhpcy5wcmV2T2JqZWN0OnRoaXMucHJldk9iamVjdC5maWx0ZXIoYSkpfX0pO2Z1bmN0aW9uIEsoYSxiKXt3aGlsZSgoYT1hW2JdKSYmMSE9PWEubm9kZVR5cGUpO3JldHVybiBhfXIuZWFjaCh7cGFyZW50OmZ1bmN0aW9uKGEpe3ZhciBiPWEucGFyZW50Tm9kZTtyZXR1cm4gYiYmMTEhPT1iLm5vZGVUeXBlP2I6bnVsbH0scGFyZW50czpmdW5jdGlvbihhKXtyZXR1cm4geShhLFwicGFyZW50Tm9kZVwiKX0scGFyZW50c1VudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4geShhLFwicGFyZW50Tm9kZVwiLGMpfSxuZXh0OmZ1bmN0aW9uKGEpe3JldHVybiBLKGEsXCJuZXh0U2libGluZ1wiKX0scHJldjpmdW5jdGlvbihhKXtyZXR1cm4gSyhhLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0QWxsOmZ1bmN0aW9uKGEpe3JldHVybiB5KGEsXCJuZXh0U2libGluZ1wiKX0scHJldkFsbDpmdW5jdGlvbihhKXtyZXR1cm4geShhLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0VW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB5KGEsXCJuZXh0U2libGluZ1wiLGMpfSxwcmV2VW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB5KGEsXCJwcmV2aW91c1NpYmxpbmdcIixjKX0sc2libGluZ3M6ZnVuY3Rpb24oYSl7cmV0dXJuIHooKGEucGFyZW50Tm9kZXx8e30pLmZpcnN0Q2hpbGQsYSl9LGNoaWxkcmVuOmZ1bmN0aW9uKGEpe3JldHVybiB6KGEuZmlyc3RDaGlsZCl9LGNvbnRlbnRzOmZ1bmN0aW9uKGEpe3JldHVybiBCKGEsXCJpZnJhbWVcIik/YS5jb250ZW50RG9jdW1lbnQ6KEIoYSxcInRlbXBsYXRlXCIpJiYoYT1hLmNvbnRlbnR8fGEpLHIubWVyZ2UoW10sYS5jaGlsZE5vZGVzKSl9fSxmdW5jdGlvbihhLGIpe3IuZm5bYV09ZnVuY3Rpb24oYyxkKXt2YXIgZT1yLm1hcCh0aGlzLGIsYyk7cmV0dXJuXCJVbnRpbFwiIT09YS5zbGljZSgtNSkmJihkPWMpLGQmJlwic3RyaW5nXCI9PXR5cGVvZiBkJiYoZT1yLmZpbHRlcihkLGUpKSx0aGlzLmxlbmd0aD4xJiYoSlthXXx8ci51bmlxdWVTb3J0KGUpLEkudGVzdChhKSYmZS5yZXZlcnNlKCkpLHRoaXMucHVzaFN0YWNrKGUpfX0pO3ZhciBMPS9bXlxceDIwXFx0XFxyXFxuXFxmXSsvZztmdW5jdGlvbiBNKGEpe3ZhciBiPXt9O3JldHVybiByLmVhY2goYS5tYXRjaChMKXx8W10sZnVuY3Rpb24oYSxjKXtiW2NdPSEwfSksYn1yLkNhbGxiYWNrcz1mdW5jdGlvbihhKXthPVwic3RyaW5nXCI9PXR5cGVvZiBhP00oYSk6ci5leHRlbmQoe30sYSk7dmFyIGIsYyxkLGUsZj1bXSxnPVtdLGg9LTEsaT1mdW5jdGlvbigpe2ZvcihlPWV8fGEub25jZSxkPWI9ITA7Zy5sZW5ndGg7aD0tMSl7Yz1nLnNoaWZ0KCk7d2hpbGUoKytoPGYubGVuZ3RoKWZbaF0uYXBwbHkoY1swXSxjWzFdKT09PSExJiZhLnN0b3BPbkZhbHNlJiYoaD1mLmxlbmd0aCxjPSExKX1hLm1lbW9yeXx8KGM9ITEpLGI9ITEsZSYmKGY9Yz9bXTpcIlwiKX0saj17YWRkOmZ1bmN0aW9uKCl7cmV0dXJuIGYmJihjJiYhYiYmKGg9Zi5sZW5ndGgtMSxnLnB1c2goYykpLGZ1bmN0aW9uIGQoYil7ci5lYWNoKGIsZnVuY3Rpb24oYixjKXtyLmlzRnVuY3Rpb24oYyk/YS51bmlxdWUmJmouaGFzKGMpfHxmLnB1c2goYyk6YyYmYy5sZW5ndGgmJlwic3RyaW5nXCIhPT1yLnR5cGUoYykmJmQoYyl9KX0oYXJndW1lbnRzKSxjJiYhYiYmaSgpKSx0aGlzfSxyZW1vdmU6ZnVuY3Rpb24oKXtyZXR1cm4gci5lYWNoKGFyZ3VtZW50cyxmdW5jdGlvbihhLGIpe3ZhciBjO3doaWxlKChjPXIuaW5BcnJheShiLGYsYykpPi0xKWYuc3BsaWNlKGMsMSksYzw9aCYmaC0tfSksdGhpc30saGFzOmZ1bmN0aW9uKGEpe3JldHVybiBhP3IuaW5BcnJheShhLGYpPi0xOmYubGVuZ3RoPjB9LGVtcHR5OmZ1bmN0aW9uKCl7cmV0dXJuIGYmJihmPVtdKSx0aGlzfSxkaXNhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIGU9Zz1bXSxmPWM9XCJcIix0aGlzfSxkaXNhYmxlZDpmdW5jdGlvbigpe3JldHVybiFmfSxsb2NrOmZ1bmN0aW9uKCl7cmV0dXJuIGU9Zz1bXSxjfHxifHwoZj1jPVwiXCIpLHRoaXN9LGxvY2tlZDpmdW5jdGlvbigpe3JldHVybiEhZX0sZmlyZVdpdGg6ZnVuY3Rpb24oYSxjKXtyZXR1cm4gZXx8KGM9Y3x8W10sYz1bYSxjLnNsaWNlP2Muc2xpY2UoKTpjXSxnLnB1c2goYyksYnx8aSgpKSx0aGlzfSxmaXJlOmZ1bmN0aW9uKCl7cmV0dXJuIGouZmlyZVdpdGgodGhpcyxhcmd1bWVudHMpLHRoaXN9LGZpcmVkOmZ1bmN0aW9uKCl7cmV0dXJuISFkfX07cmV0dXJuIGp9O2Z1bmN0aW9uIE4oYSl7cmV0dXJuIGF9ZnVuY3Rpb24gTyhhKXt0aHJvdyBhfWZ1bmN0aW9uIFAoYSxiLGMsZCl7dmFyIGU7dHJ5e2EmJnIuaXNGdW5jdGlvbihlPWEucHJvbWlzZSk/ZS5jYWxsKGEpLmRvbmUoYikuZmFpbChjKTphJiZyLmlzRnVuY3Rpb24oZT1hLnRoZW4pP2UuY2FsbChhLGIsYyk6Yi5hcHBseSh2b2lkIDAsW2FdLnNsaWNlKGQpKX1jYXRjaChhKXtjLmFwcGx5KHZvaWQgMCxbYV0pfX1yLmV4dGVuZCh7RGVmZXJyZWQ6ZnVuY3Rpb24oYil7dmFyIGM9W1tcIm5vdGlmeVwiLFwicHJvZ3Jlc3NcIixyLkNhbGxiYWNrcyhcIm1lbW9yeVwiKSxyLkNhbGxiYWNrcyhcIm1lbW9yeVwiKSwyXSxbXCJyZXNvbHZlXCIsXCJkb25lXCIsci5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxyLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLDAsXCJyZXNvbHZlZFwiXSxbXCJyZWplY3RcIixcImZhaWxcIixyLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLHIuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksMSxcInJlamVjdGVkXCJdXSxkPVwicGVuZGluZ1wiLGU9e3N0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIGR9LGFsd2F5czpmdW5jdGlvbigpe3JldHVybiBmLmRvbmUoYXJndW1lbnRzKS5mYWlsKGFyZ3VtZW50cyksdGhpc30sXCJjYXRjaFwiOmZ1bmN0aW9uKGEpe3JldHVybiBlLnRoZW4obnVsbCxhKX0scGlwZTpmdW5jdGlvbigpe3ZhciBhPWFyZ3VtZW50cztyZXR1cm4gci5EZWZlcnJlZChmdW5jdGlvbihiKXtyLmVhY2goYyxmdW5jdGlvbihjLGQpe3ZhciBlPXIuaXNGdW5jdGlvbihhW2RbNF1dKSYmYVtkWzRdXTtmW2RbMV1dKGZ1bmN0aW9uKCl7dmFyIGE9ZSYmZS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7YSYmci5pc0Z1bmN0aW9uKGEucHJvbWlzZSk/YS5wcm9taXNlKCkucHJvZ3Jlc3MoYi5ub3RpZnkpLmRvbmUoYi5yZXNvbHZlKS5mYWlsKGIucmVqZWN0KTpiW2RbMF0rXCJXaXRoXCJdKHRoaXMsZT9bYV06YXJndW1lbnRzKX0pfSksYT1udWxsfSkucHJvbWlzZSgpfSx0aGVuOmZ1bmN0aW9uKGIsZCxlKXt2YXIgZj0wO2Z1bmN0aW9uIGcoYixjLGQsZSl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGg9dGhpcyxpPWFyZ3VtZW50cyxqPWZ1bmN0aW9uKCl7dmFyIGEsajtpZighKGI8Zikpe2lmKGE9ZC5hcHBseShoLGkpLGE9PT1jLnByb21pc2UoKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlbmFibGUgc2VsZi1yZXNvbHV0aW9uXCIpO2o9YSYmKFwib2JqZWN0XCI9PXR5cGVvZiBhfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBhKSYmYS50aGVuLHIuaXNGdW5jdGlvbihqKT9lP2ouY2FsbChhLGcoZixjLE4sZSksZyhmLGMsTyxlKSk6KGYrKyxqLmNhbGwoYSxnKGYsYyxOLGUpLGcoZixjLE8sZSksZyhmLGMsTixjLm5vdGlmeVdpdGgpKSk6KGQhPT1OJiYoaD12b2lkIDAsaT1bYV0pLChlfHxjLnJlc29sdmVXaXRoKShoLGkpKX19LGs9ZT9qOmZ1bmN0aW9uKCl7dHJ5e2ooKX1jYXRjaChhKXtyLkRlZmVycmVkLmV4Y2VwdGlvbkhvb2smJnIuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayhhLGsuc3RhY2tUcmFjZSksYisxPj1mJiYoZCE9PU8mJihoPXZvaWQgMCxpPVthXSksYy5yZWplY3RXaXRoKGgsaSkpfX07Yj9rKCk6KHIuRGVmZXJyZWQuZ2V0U3RhY2tIb29rJiYoay5zdGFja1RyYWNlPXIuRGVmZXJyZWQuZ2V0U3RhY2tIb29rKCkpLGEuc2V0VGltZW91dChrKSl9fXJldHVybiByLkRlZmVycmVkKGZ1bmN0aW9uKGEpe2NbMF1bM10uYWRkKGcoMCxhLHIuaXNGdW5jdGlvbihlKT9lOk4sYS5ub3RpZnlXaXRoKSksY1sxXVszXS5hZGQoZygwLGEsci5pc0Z1bmN0aW9uKGIpP2I6TikpLGNbMl1bM10uYWRkKGcoMCxhLHIuaXNGdW5jdGlvbihkKT9kOk8pKX0pLnByb21pc2UoKX0scHJvbWlzZTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YT9yLmV4dGVuZChhLGUpOmV9fSxmPXt9O3JldHVybiByLmVhY2goYyxmdW5jdGlvbihhLGIpe3ZhciBnPWJbMl0saD1iWzVdO2VbYlsxXV09Zy5hZGQsaCYmZy5hZGQoZnVuY3Rpb24oKXtkPWh9LGNbMy1hXVsyXS5kaXNhYmxlLGNbMF1bMl0ubG9jayksZy5hZGQoYlszXS5maXJlKSxmW2JbMF1dPWZ1bmN0aW9uKCl7cmV0dXJuIGZbYlswXStcIldpdGhcIl0odGhpcz09PWY/dm9pZCAwOnRoaXMsYXJndW1lbnRzKSx0aGlzfSxmW2JbMF0rXCJXaXRoXCJdPWcuZmlyZVdpdGh9KSxlLnByb21pc2UoZiksYiYmYi5jYWxsKGYsZiksZn0sd2hlbjpmdW5jdGlvbihhKXt2YXIgYj1hcmd1bWVudHMubGVuZ3RoLGM9YixkPUFycmF5KGMpLGU9Zi5jYWxsKGFyZ3VtZW50cyksZz1yLkRlZmVycmVkKCksaD1mdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oYyl7ZFthXT10aGlzLGVbYV09YXJndW1lbnRzLmxlbmd0aD4xP2YuY2FsbChhcmd1bWVudHMpOmMsLS1ifHxnLnJlc29sdmVXaXRoKGQsZSl9fTtpZihiPD0xJiYoUChhLGcuZG9uZShoKGMpKS5yZXNvbHZlLGcucmVqZWN0LCFiKSxcInBlbmRpbmdcIj09PWcuc3RhdGUoKXx8ci5pc0Z1bmN0aW9uKGVbY10mJmVbY10udGhlbikpKXJldHVybiBnLnRoZW4oKTt3aGlsZShjLS0pUChlW2NdLGgoYyksZy5yZWplY3QpO3JldHVybiBnLnByb21pc2UoKX19KTt2YXIgUT0vXihFdmFsfEludGVybmFsfFJhbmdlfFJlZmVyZW5jZXxTeW50YXh8VHlwZXxVUkkpRXJyb3IkLztyLkRlZmVycmVkLmV4Y2VwdGlvbkhvb2s9ZnVuY3Rpb24oYixjKXthLmNvbnNvbGUmJmEuY29uc29sZS53YXJuJiZiJiZRLnRlc3QoYi5uYW1lKSYmYS5jb25zb2xlLndhcm4oXCJqUXVlcnkuRGVmZXJyZWQgZXhjZXB0aW9uOiBcIitiLm1lc3NhZ2UsYi5zdGFjayxjKX0sci5yZWFkeUV4Y2VwdGlvbj1mdW5jdGlvbihiKXthLnNldFRpbWVvdXQoZnVuY3Rpb24oKXt0aHJvdyBifSl9O3ZhciBSPXIuRGVmZXJyZWQoKTtyLmZuLnJlYWR5PWZ1bmN0aW9uKGEpe3JldHVybiBSLnRoZW4oYSlbXCJjYXRjaFwiXShmdW5jdGlvbihhKXtyLnJlYWR5RXhjZXB0aW9uKGEpfSksdGhpc30sci5leHRlbmQoe2lzUmVhZHk6ITEscmVhZHlXYWl0OjEscmVhZHk6ZnVuY3Rpb24oYSl7KGE9PT0hMD8tLXIucmVhZHlXYWl0OnIuaXNSZWFkeSl8fChyLmlzUmVhZHk9ITAsYSE9PSEwJiYtLXIucmVhZHlXYWl0PjB8fFIucmVzb2x2ZVdpdGgoZCxbcl0pKX19KSxyLnJlYWR5LnRoZW49Ui50aGVuO2Z1bmN0aW9uIFMoKXtkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsUyksXG5hLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsUyksci5yZWFkeSgpfVwiY29tcGxldGVcIj09PWQucmVhZHlTdGF0ZXx8XCJsb2FkaW5nXCIhPT1kLnJlYWR5U3RhdGUmJiFkLmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbD9hLnNldFRpbWVvdXQoci5yZWFkeSk6KGQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixTKSxhLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsUykpO3ZhciBUPWZ1bmN0aW9uKGEsYixjLGQsZSxmLGcpe3ZhciBoPTAsaT1hLmxlbmd0aCxqPW51bGw9PWM7aWYoXCJvYmplY3RcIj09PXIudHlwZShjKSl7ZT0hMDtmb3IoaCBpbiBjKVQoYSxiLGgsY1toXSwhMCxmLGcpfWVsc2UgaWYodm9pZCAwIT09ZCYmKGU9ITAsci5pc0Z1bmN0aW9uKGQpfHwoZz0hMCksaiYmKGc/KGIuY2FsbChhLGQpLGI9bnVsbCk6KGo9YixiPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gai5jYWxsKHIoYSksYyl9KSksYikpZm9yKDtoPGk7aCsrKWIoYVtoXSxjLGc/ZDpkLmNhbGwoYVtoXSxoLGIoYVtoXSxjKSkpO3JldHVybiBlP2E6aj9iLmNhbGwoYSk6aT9iKGFbMF0sYyk6Zn0sVT1mdW5jdGlvbihhKXtyZXR1cm4gMT09PWEubm9kZVR5cGV8fDk9PT1hLm5vZGVUeXBlfHwhK2Eubm9kZVR5cGV9O2Z1bmN0aW9uIFYoKXt0aGlzLmV4cGFuZG89ci5leHBhbmRvK1YudWlkKyt9Vi51aWQ9MSxWLnByb3RvdHlwZT17Y2FjaGU6ZnVuY3Rpb24oYSl7dmFyIGI9YVt0aGlzLmV4cGFuZG9dO3JldHVybiBifHwoYj17fSxVKGEpJiYoYS5ub2RlVHlwZT9hW3RoaXMuZXhwYW5kb109YjpPYmplY3QuZGVmaW5lUHJvcGVydHkoYSx0aGlzLmV4cGFuZG8se3ZhbHVlOmIsY29uZmlndXJhYmxlOiEwfSkpKSxifSxzZXQ6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGU9dGhpcy5jYWNoZShhKTtpZihcInN0cmluZ1wiPT10eXBlb2YgYillW3IuY2FtZWxDYXNlKGIpXT1jO2Vsc2UgZm9yKGQgaW4gYillW3IuY2FtZWxDYXNlKGQpXT1iW2RdO3JldHVybiBlfSxnZXQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdm9pZCAwPT09Yj90aGlzLmNhY2hlKGEpOmFbdGhpcy5leHBhbmRvXSYmYVt0aGlzLmV4cGFuZG9dW3IuY2FtZWxDYXNlKGIpXX0sYWNjZXNzOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdm9pZCAwPT09Ynx8YiYmXCJzdHJpbmdcIj09dHlwZW9mIGImJnZvaWQgMD09PWM/dGhpcy5nZXQoYSxiKToodGhpcy5zZXQoYSxiLGMpLHZvaWQgMCE9PWM/YzpiKX0scmVtb3ZlOmZ1bmN0aW9uKGEsYil7dmFyIGMsZD1hW3RoaXMuZXhwYW5kb107aWYodm9pZCAwIT09ZCl7aWYodm9pZCAwIT09Yil7QXJyYXkuaXNBcnJheShiKT9iPWIubWFwKHIuY2FtZWxDYXNlKTooYj1yLmNhbWVsQ2FzZShiKSxiPWIgaW4gZD9bYl06Yi5tYXRjaChMKXx8W10pLGM9Yi5sZW5ndGg7d2hpbGUoYy0tKWRlbGV0ZSBkW2JbY11dfSh2b2lkIDA9PT1ifHxyLmlzRW1wdHlPYmplY3QoZCkpJiYoYS5ub2RlVHlwZT9hW3RoaXMuZXhwYW5kb109dm9pZCAwOmRlbGV0ZSBhW3RoaXMuZXhwYW5kb10pfX0saGFzRGF0YTpmdW5jdGlvbihhKXt2YXIgYj1hW3RoaXMuZXhwYW5kb107cmV0dXJuIHZvaWQgMCE9PWImJiFyLmlzRW1wdHlPYmplY3QoYil9fTt2YXIgVz1uZXcgVixYPW5ldyBWLFk9L14oPzpcXHtbXFx3XFxXXSpcXH18XFxbW1xcd1xcV10qXFxdKSQvLFo9L1tBLVpdL2c7ZnVuY3Rpb24gJChhKXtyZXR1cm5cInRydWVcIj09PWF8fFwiZmFsc2VcIiE9PWEmJihcIm51bGxcIj09PWE/bnVsbDphPT09K2ErXCJcIj8rYTpZLnRlc3QoYSk/SlNPTi5wYXJzZShhKTphKX1mdW5jdGlvbiBfKGEsYixjKXt2YXIgZDtpZih2b2lkIDA9PT1jJiYxPT09YS5ub2RlVHlwZSlpZihkPVwiZGF0YS1cIitiLnJlcGxhY2UoWixcIi0kJlwiKS50b0xvd2VyQ2FzZSgpLGM9YS5nZXRBdHRyaWJ1dGUoZCksXCJzdHJpbmdcIj09dHlwZW9mIGMpe3RyeXtjPSQoYyl9Y2F0Y2goZSl7fVguc2V0KGEsYixjKX1lbHNlIGM9dm9pZCAwO3JldHVybiBjfXIuZXh0ZW5kKHtoYXNEYXRhOmZ1bmN0aW9uKGEpe3JldHVybiBYLmhhc0RhdGEoYSl8fFcuaGFzRGF0YShhKX0sZGF0YTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIFguYWNjZXNzKGEsYixjKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihhLGIpe1gucmVtb3ZlKGEsYil9LF9kYXRhOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gVy5hY2Nlc3MoYSxiLGMpfSxfcmVtb3ZlRGF0YTpmdW5jdGlvbihhLGIpe1cucmVtb3ZlKGEsYil9fSksci5mbi5leHRlbmQoe2RhdGE6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZj10aGlzWzBdLGc9ZiYmZi5hdHRyaWJ1dGVzO2lmKHZvaWQgMD09PWEpe2lmKHRoaXMubGVuZ3RoJiYoZT1YLmdldChmKSwxPT09Zi5ub2RlVHlwZSYmIVcuZ2V0KGYsXCJoYXNEYXRhQXR0cnNcIikpKXtjPWcubGVuZ3RoO3doaWxlKGMtLSlnW2NdJiYoZD1nW2NdLm5hbWUsMD09PWQuaW5kZXhPZihcImRhdGEtXCIpJiYoZD1yLmNhbWVsQ2FzZShkLnNsaWNlKDUpKSxfKGYsZCxlW2RdKSkpO1cuc2V0KGYsXCJoYXNEYXRhQXR0cnNcIiwhMCl9cmV0dXJuIGV9cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIGE/dGhpcy5lYWNoKGZ1bmN0aW9uKCl7WC5zZXQodGhpcyxhKX0pOlQodGhpcyxmdW5jdGlvbihiKXt2YXIgYztpZihmJiZ2b2lkIDA9PT1iKXtpZihjPVguZ2V0KGYsYSksdm9pZCAwIT09YylyZXR1cm4gYztpZihjPV8oZixhKSx2b2lkIDAhPT1jKXJldHVybiBjfWVsc2UgdGhpcy5lYWNoKGZ1bmN0aW9uKCl7WC5zZXQodGhpcyxhLGIpfSl9LG51bGwsYixhcmd1bWVudHMubGVuZ3RoPjEsbnVsbCwhMCl9LHJlbW92ZURhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1gucmVtb3ZlKHRoaXMsYSl9KX19KSxyLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkO2lmKGEpcmV0dXJuIGI9KGJ8fFwiZnhcIikrXCJxdWV1ZVwiLGQ9Vy5nZXQoYSxiKSxjJiYoIWR8fEFycmF5LmlzQXJyYXkoYyk/ZD1XLmFjY2VzcyhhLGIsci5tYWtlQXJyYXkoYykpOmQucHVzaChjKSksZHx8W119LGRlcXVldWU6ZnVuY3Rpb24oYSxiKXtiPWJ8fFwiZnhcIjt2YXIgYz1yLnF1ZXVlKGEsYiksZD1jLmxlbmd0aCxlPWMuc2hpZnQoKSxmPXIuX3F1ZXVlSG9va3MoYSxiKSxnPWZ1bmN0aW9uKCl7ci5kZXF1ZXVlKGEsYil9O1wiaW5wcm9ncmVzc1wiPT09ZSYmKGU9Yy5zaGlmdCgpLGQtLSksZSYmKFwiZnhcIj09PWImJmMudW5zaGlmdChcImlucHJvZ3Jlc3NcIiksZGVsZXRlIGYuc3RvcCxlLmNhbGwoYSxnLGYpKSwhZCYmZiYmZi5lbXB0eS5maXJlKCl9LF9xdWV1ZUhvb2tzOmZ1bmN0aW9uKGEsYil7dmFyIGM9YitcInF1ZXVlSG9va3NcIjtyZXR1cm4gVy5nZXQoYSxjKXx8Vy5hY2Nlc3MoYSxjLHtlbXB0eTpyLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLmFkZChmdW5jdGlvbigpe1cucmVtb3ZlKGEsW2IrXCJxdWV1ZVwiLGNdKX0pfSl9fSksci5mbi5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGEsYil7dmFyIGM9MjtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgYSYmKGI9YSxhPVwiZnhcIixjLS0pLGFyZ3VtZW50cy5sZW5ndGg8Yz9yLnF1ZXVlKHRoaXNbMF0sYSk6dm9pZCAwPT09Yj90aGlzOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBjPXIucXVldWUodGhpcyxhLGIpO3IuX3F1ZXVlSG9va3ModGhpcyxhKSxcImZ4XCI9PT1hJiZcImlucHJvZ3Jlc3NcIiE9PWNbMF0mJnIuZGVxdWV1ZSh0aGlzLGEpfSl9LGRlcXVldWU6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3IuZGVxdWV1ZSh0aGlzLGEpfSl9LGNsZWFyUXVldWU6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucXVldWUoYXx8XCJmeFwiLFtdKX0scHJvbWlzZTpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9MSxlPXIuRGVmZXJyZWQoKSxmPXRoaXMsZz10aGlzLmxlbmd0aCxoPWZ1bmN0aW9uKCl7LS1kfHxlLnJlc29sdmVXaXRoKGYsW2ZdKX07XCJzdHJpbmdcIiE9dHlwZW9mIGEmJihiPWEsYT12b2lkIDApLGE9YXx8XCJmeFwiO3doaWxlKGctLSljPVcuZ2V0KGZbZ10sYStcInF1ZXVlSG9va3NcIiksYyYmYy5lbXB0eSYmKGQrKyxjLmVtcHR5LmFkZChoKSk7cmV0dXJuIGgoKSxlLnByb21pc2UoYil9fSk7dmFyIGFhPS9bKy1dPyg/OlxcZCpcXC58KVxcZCsoPzpbZUVdWystXT9cXGQrfCkvLnNvdXJjZSxiYT1uZXcgUmVnRXhwKFwiXig/OihbKy1dKT18KShcIithYStcIikoW2EteiVdKikkXCIsXCJpXCIpLGNhPVtcIlRvcFwiLFwiUmlnaHRcIixcIkJvdHRvbVwiLFwiTGVmdFwiXSxkYT1mdW5jdGlvbihhLGIpe3JldHVybiBhPWJ8fGEsXCJub25lXCI9PT1hLnN0eWxlLmRpc3BsYXl8fFwiXCI9PT1hLnN0eWxlLmRpc3BsYXkmJnIuY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpJiZcIm5vbmVcIj09PXIuY3NzKGEsXCJkaXNwbGF5XCIpfSxlYT1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZSxmLGc9e307Zm9yKGYgaW4gYilnW2ZdPWEuc3R5bGVbZl0sYS5zdHlsZVtmXT1iW2ZdO2U9Yy5hcHBseShhLGR8fFtdKTtmb3IoZiBpbiBiKWEuc3R5bGVbZl09Z1tmXTtyZXR1cm4gZX07ZnVuY3Rpb24gZmEoYSxiLGMsZCl7dmFyIGUsZj0xLGc9MjAsaD1kP2Z1bmN0aW9uKCl7cmV0dXJuIGQuY3VyKCl9OmZ1bmN0aW9uKCl7cmV0dXJuIHIuY3NzKGEsYixcIlwiKX0saT1oKCksaj1jJiZjWzNdfHwoci5jc3NOdW1iZXJbYl0/XCJcIjpcInB4XCIpLGs9KHIuY3NzTnVtYmVyW2JdfHxcInB4XCIhPT1qJiYraSkmJmJhLmV4ZWMoci5jc3MoYSxiKSk7aWYoayYma1szXSE9PWope2o9anx8a1szXSxjPWN8fFtdLGs9K2l8fDE7ZG8gZj1mfHxcIi41XCIsay89ZixyLnN0eWxlKGEsYixrK2opO3doaWxlKGYhPT0oZj1oKCkvaSkmJjEhPT1mJiYtLWcpfXJldHVybiBjJiYoaz0ra3x8K2l8fDAsZT1jWzFdP2srKGNbMV0rMSkqY1syXTorY1syXSxkJiYoZC51bml0PWosZC5zdGFydD1rLGQuZW5kPWUpKSxlfXZhciBnYT17fTtmdW5jdGlvbiBoYShhKXt2YXIgYixjPWEub3duZXJEb2N1bWVudCxkPWEubm9kZU5hbWUsZT1nYVtkXTtyZXR1cm4gZT9lOihiPWMuYm9keS5hcHBlbmRDaGlsZChjLmNyZWF0ZUVsZW1lbnQoZCkpLGU9ci5jc3MoYixcImRpc3BsYXlcIiksYi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGIpLFwibm9uZVwiPT09ZSYmKGU9XCJibG9ja1wiKSxnYVtkXT1lLGUpfWZ1bmN0aW9uIGlhKGEsYil7Zm9yKHZhciBjLGQsZT1bXSxmPTAsZz1hLmxlbmd0aDtmPGc7ZisrKWQ9YVtmXSxkLnN0eWxlJiYoYz1kLnN0eWxlLmRpc3BsYXksYj8oXCJub25lXCI9PT1jJiYoZVtmXT1XLmdldChkLFwiZGlzcGxheVwiKXx8bnVsbCxlW2ZdfHwoZC5zdHlsZS5kaXNwbGF5PVwiXCIpKSxcIlwiPT09ZC5zdHlsZS5kaXNwbGF5JiZkYShkKSYmKGVbZl09aGEoZCkpKTpcIm5vbmVcIiE9PWMmJihlW2ZdPVwibm9uZVwiLFcuc2V0KGQsXCJkaXNwbGF5XCIsYykpKTtmb3IoZj0wO2Y8ZztmKyspbnVsbCE9ZVtmXSYmKGFbZl0uc3R5bGUuZGlzcGxheT1lW2ZdKTtyZXR1cm4gYX1yLmZuLmV4dGVuZCh7c2hvdzpmdW5jdGlvbigpe3JldHVybiBpYSh0aGlzLCEwKX0saGlkZTpmdW5jdGlvbigpe3JldHVybiBpYSh0aGlzKX0sdG9nZ2xlOmZ1bmN0aW9uKGEpe3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgYT9hP3RoaXMuc2hvdygpOnRoaXMuaGlkZSgpOnRoaXMuZWFjaChmdW5jdGlvbigpe2RhKHRoaXMpP3IodGhpcykuc2hvdygpOnIodGhpcykuaGlkZSgpfSl9fSk7dmFyIGphPS9eKD86Y2hlY2tib3h8cmFkaW8pJC9pLGthPS88KFthLXpdW15cXC9cXDA+XFx4MjBcXHRcXHJcXG5cXGZdKykvaSxsYT0vXiR8XFwvKD86amF2YXxlY21hKXNjcmlwdC9pLG1hPXtvcHRpb246WzEsXCI8c2VsZWN0IG11bHRpcGxlPSdtdWx0aXBsZSc+XCIsXCI8L3NlbGVjdD5cIl0sdGhlYWQ6WzEsXCI8dGFibGU+XCIsXCI8L3RhYmxlPlwiXSxjb2w6WzIsXCI8dGFibGU+PGNvbGdyb3VwPlwiLFwiPC9jb2xncm91cD48L3RhYmxlPlwiXSx0cjpbMixcIjx0YWJsZT48dGJvZHk+XCIsXCI8L3Rib2R5PjwvdGFibGU+XCJdLHRkOlszLFwiPHRhYmxlPjx0Ym9keT48dHI+XCIsXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIl0sX2RlZmF1bHQ6WzAsXCJcIixcIlwiXX07bWEub3B0Z3JvdXA9bWEub3B0aW9uLG1hLnRib2R5PW1hLnRmb290PW1hLmNvbGdyb3VwPW1hLmNhcHRpb249bWEudGhlYWQsbWEudGg9bWEudGQ7ZnVuY3Rpb24gbmEoYSxiKXt2YXIgYztyZXR1cm4gYz1cInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRFbGVtZW50c0J5VGFnTmFtZT9hLmdldEVsZW1lbnRzQnlUYWdOYW1lKGJ8fFwiKlwiKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5xdWVyeVNlbGVjdG9yQWxsP2EucXVlcnlTZWxlY3RvckFsbChifHxcIipcIik6W10sdm9pZCAwPT09Ynx8YiYmQihhLGIpP3IubWVyZ2UoW2FdLGMpOmN9ZnVuY3Rpb24gb2EoYSxiKXtmb3IodmFyIGM9MCxkPWEubGVuZ3RoO2M8ZDtjKyspVy5zZXQoYVtjXSxcImdsb2JhbEV2YWxcIiwhYnx8Vy5nZXQoYltjXSxcImdsb2JhbEV2YWxcIikpfXZhciBwYT0vPHwmIz9cXHcrOy87ZnVuY3Rpb24gcWEoYSxiLGMsZCxlKXtmb3IodmFyIGYsZyxoLGksaixrLGw9Yi5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksbT1bXSxuPTAsbz1hLmxlbmd0aDtuPG87bisrKWlmKGY9YVtuXSxmfHwwPT09ZilpZihcIm9iamVjdFwiPT09ci50eXBlKGYpKXIubWVyZ2UobSxmLm5vZGVUeXBlP1tmXTpmKTtlbHNlIGlmKHBhLnRlc3QoZikpe2c9Z3x8bC5hcHBlbmRDaGlsZChiLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLGg9KGthLmV4ZWMoZil8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpLGk9bWFbaF18fG1hLl9kZWZhdWx0LGcuaW5uZXJIVE1MPWlbMV0rci5odG1sUHJlZmlsdGVyKGYpK2lbMl0saz1pWzBdO3doaWxlKGstLSlnPWcubGFzdENoaWxkO3IubWVyZ2UobSxnLmNoaWxkTm9kZXMpLGc9bC5maXJzdENoaWxkLGcudGV4dENvbnRlbnQ9XCJcIn1lbHNlIG0ucHVzaChiLmNyZWF0ZVRleHROb2RlKGYpKTtsLnRleHRDb250ZW50PVwiXCIsbj0wO3doaWxlKGY9bVtuKytdKWlmKGQmJnIuaW5BcnJheShmLGQpPi0xKWUmJmUucHVzaChmKTtlbHNlIGlmKGo9ci5jb250YWlucyhmLm93bmVyRG9jdW1lbnQsZiksZz1uYShsLmFwcGVuZENoaWxkKGYpLFwic2NyaXB0XCIpLGomJm9hKGcpLGMpe2s9MDt3aGlsZShmPWdbaysrXSlsYS50ZXN0KGYudHlwZXx8XCJcIikmJmMucHVzaChmKX1yZXR1cm4gbH0hZnVuY3Rpb24oKXt2YXIgYT1kLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxiPWEuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxjPWQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO2Muc2V0QXR0cmlidXRlKFwidHlwZVwiLFwicmFkaW9cIiksYy5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsXCJjaGVja2VkXCIpLGMuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwidFwiKSxiLmFwcGVuZENoaWxkKGMpLG8uY2hlY2tDbG9uZT1iLmNsb25lTm9kZSghMCkuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuY2hlY2tlZCxiLmlubmVySFRNTD1cIjx0ZXh0YXJlYT54PC90ZXh0YXJlYT5cIixvLm5vQ2xvbmVDaGVja2VkPSEhYi5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5kZWZhdWx0VmFsdWV9KCk7dmFyIHJhPWQuZG9jdW1lbnRFbGVtZW50LHNhPS9ea2V5Lyx0YT0vXig/Om1vdXNlfHBvaW50ZXJ8Y29udGV4dG1lbnV8ZHJhZ3xkcm9wKXxjbGljay8sdWE9L14oW14uXSopKD86XFwuKC4rKXwpLztmdW5jdGlvbiB2YSgpe3JldHVybiEwfWZ1bmN0aW9uIHdhKCl7cmV0dXJuITF9ZnVuY3Rpb24geGEoKXt0cnl7cmV0dXJuIGQuYWN0aXZlRWxlbWVudH1jYXRjaChhKXt9fWZ1bmN0aW9uIHlhKGEsYixjLGQsZSxmKXt2YXIgZyxoO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBiKXtcInN0cmluZ1wiIT10eXBlb2YgYyYmKGQ9ZHx8YyxjPXZvaWQgMCk7Zm9yKGggaW4gYil5YShhLGgsYyxkLGJbaF0sZik7cmV0dXJuIGF9aWYobnVsbD09ZCYmbnVsbD09ZT8oZT1jLGQ9Yz12b2lkIDApOm51bGw9PWUmJihcInN0cmluZ1wiPT10eXBlb2YgYz8oZT1kLGQ9dm9pZCAwKTooZT1kLGQ9YyxjPXZvaWQgMCkpLGU9PT0hMSllPXdhO2Vsc2UgaWYoIWUpcmV0dXJuIGE7cmV0dXJuIDE9PT1mJiYoZz1lLGU9ZnVuY3Rpb24oYSl7cmV0dXJuIHIoKS5vZmYoYSksZy5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGUuZ3VpZD1nLmd1aWR8fChnLmd1aWQ9ci5ndWlkKyspKSxhLmVhY2goZnVuY3Rpb24oKXtyLmV2ZW50LmFkZCh0aGlzLGIsZSxkLGMpfSl9ci5ldmVudD17Z2xvYmFsOnt9LGFkZDpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmLGcsaCxpLGosayxsLG0sbixvLHAscT1XLmdldChhKTtpZihxKXtjLmhhbmRsZXImJihmPWMsYz1mLmhhbmRsZXIsZT1mLnNlbGVjdG9yKSxlJiZyLmZpbmQubWF0Y2hlc1NlbGVjdG9yKHJhLGUpLGMuZ3VpZHx8KGMuZ3VpZD1yLmd1aWQrKyksKGk9cS5ldmVudHMpfHwoaT1xLmV2ZW50cz17fSksKGc9cS5oYW5kbGUpfHwoZz1xLmhhbmRsZT1mdW5jdGlvbihiKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgciYmci5ldmVudC50cmlnZ2VyZWQhPT1iLnR5cGU/ci5ldmVudC5kaXNwYXRjaC5hcHBseShhLGFyZ3VtZW50cyk6dm9pZCAwfSksYj0oYnx8XCJcIikubWF0Y2goTCl8fFtcIlwiXSxqPWIubGVuZ3RoO3doaWxlKGotLSloPXVhLmV4ZWMoYltqXSl8fFtdLG49cD1oWzFdLG89KGhbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksbiYmKGw9ci5ldmVudC5zcGVjaWFsW25dfHx7fSxuPShlP2wuZGVsZWdhdGVUeXBlOmwuYmluZFR5cGUpfHxuLGw9ci5ldmVudC5zcGVjaWFsW25dfHx7fSxrPXIuZXh0ZW5kKHt0eXBlOm4sb3JpZ1R5cGU6cCxkYXRhOmQsaGFuZGxlcjpjLGd1aWQ6Yy5ndWlkLHNlbGVjdG9yOmUsbmVlZHNDb250ZXh0OmUmJnIuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQudGVzdChlKSxuYW1lc3BhY2U6by5qb2luKFwiLlwiKX0sZiksKG09aVtuXSl8fChtPWlbbl09W10sbS5kZWxlZ2F0ZUNvdW50PTAsbC5zZXR1cCYmbC5zZXR1cC5jYWxsKGEsZCxvLGcpIT09ITF8fGEuYWRkRXZlbnRMaXN0ZW5lciYmYS5hZGRFdmVudExpc3RlbmVyKG4sZykpLGwuYWRkJiYobC5hZGQuY2FsbChhLGspLGsuaGFuZGxlci5ndWlkfHwoay5oYW5kbGVyLmd1aWQ9Yy5ndWlkKSksZT9tLnNwbGljZShtLmRlbGVnYXRlQ291bnQrKywwLGspOm0ucHVzaChrKSxyLmV2ZW50Lmdsb2JhbFtuXT0hMCl9fSxyZW1vdmU6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZixnLGgsaSxqLGssbCxtLG4sbyxwLHE9Vy5oYXNEYXRhKGEpJiZXLmdldChhKTtpZihxJiYoaT1xLmV2ZW50cykpe2I9KGJ8fFwiXCIpLm1hdGNoKEwpfHxbXCJcIl0saj1iLmxlbmd0aDt3aGlsZShqLS0paWYoaD11YS5leGVjKGJbal0pfHxbXSxuPXA9aFsxXSxvPShoWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLG4pe2w9ci5ldmVudC5zcGVjaWFsW25dfHx7fSxuPShkP2wuZGVsZWdhdGVUeXBlOmwuYmluZFR5cGUpfHxuLG09aVtuXXx8W10saD1oWzJdJiZuZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIrby5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIiksZz1mPW0ubGVuZ3RoO3doaWxlKGYtLSlrPW1bZl0sIWUmJnAhPT1rLm9yaWdUeXBlfHxjJiZjLmd1aWQhPT1rLmd1aWR8fGgmJiFoLnRlc3Qoay5uYW1lc3BhY2UpfHxkJiZkIT09ay5zZWxlY3RvciYmKFwiKipcIiE9PWR8fCFrLnNlbGVjdG9yKXx8KG0uc3BsaWNlKGYsMSksay5zZWxlY3RvciYmbS5kZWxlZ2F0ZUNvdW50LS0sbC5yZW1vdmUmJmwucmVtb3ZlLmNhbGwoYSxrKSk7ZyYmIW0ubGVuZ3RoJiYobC50ZWFyZG93biYmbC50ZWFyZG93bi5jYWxsKGEsbyxxLmhhbmRsZSkhPT0hMXx8ci5yZW1vdmVFdmVudChhLG4scS5oYW5kbGUpLGRlbGV0ZSBpW25dKX1lbHNlIGZvcihuIGluIGkpci5ldmVudC5yZW1vdmUoYSxuK2Jbal0sYyxkLCEwKTtyLmlzRW1wdHlPYmplY3QoaSkmJlcucmVtb3ZlKGEsXCJoYW5kbGUgZXZlbnRzXCIpfX0sZGlzcGF0Y2g6ZnVuY3Rpb24oYSl7dmFyIGI9ci5ldmVudC5maXgoYSksYyxkLGUsZixnLGgsaT1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCksaj0oVy5nZXQodGhpcyxcImV2ZW50c1wiKXx8e30pW2IudHlwZV18fFtdLGs9ci5ldmVudC5zcGVjaWFsW2IudHlwZV18fHt9O2ZvcihpWzBdPWIsYz0xO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspaVtjXT1hcmd1bWVudHNbY107aWYoYi5kZWxlZ2F0ZVRhcmdldD10aGlzLCFrLnByZURpc3BhdGNofHxrLnByZURpc3BhdGNoLmNhbGwodGhpcyxiKSE9PSExKXtoPXIuZXZlbnQuaGFuZGxlcnMuY2FsbCh0aGlzLGIsaiksYz0wO3doaWxlKChmPWhbYysrXSkmJiFiLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpe2IuY3VycmVudFRhcmdldD1mLmVsZW0sZD0wO3doaWxlKChnPWYuaGFuZGxlcnNbZCsrXSkmJiFiLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCkpYi5ybmFtZXNwYWNlJiYhYi5ybmFtZXNwYWNlLnRlc3QoZy5uYW1lc3BhY2UpfHwoYi5oYW5kbGVPYmo9ZyxiLmRhdGE9Zy5kYXRhLGU9KChyLmV2ZW50LnNwZWNpYWxbZy5vcmlnVHlwZV18fHt9KS5oYW5kbGV8fGcuaGFuZGxlcikuYXBwbHkoZi5lbGVtLGkpLHZvaWQgMCE9PWUmJihiLnJlc3VsdD1lKT09PSExJiYoYi5wcmV2ZW50RGVmYXVsdCgpLGIuc3RvcFByb3BhZ2F0aW9uKCkpKX1yZXR1cm4gay5wb3N0RGlzcGF0Y2gmJmsucG9zdERpc3BhdGNoLmNhbGwodGhpcyxiKSxiLnJlc3VsdH19LGhhbmRsZXJzOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGYsZyxoPVtdLGk9Yi5kZWxlZ2F0ZUNvdW50LGo9YS50YXJnZXQ7aWYoaSYmai5ub2RlVHlwZSYmIShcImNsaWNrXCI9PT1hLnR5cGUmJmEuYnV0dG9uPj0xKSlmb3IoO2ohPT10aGlzO2o9ai5wYXJlbnROb2RlfHx0aGlzKWlmKDE9PT1qLm5vZGVUeXBlJiYoXCJjbGlja1wiIT09YS50eXBlfHxqLmRpc2FibGVkIT09ITApKXtmb3IoZj1bXSxnPXt9LGM9MDtjPGk7YysrKWQ9YltjXSxlPWQuc2VsZWN0b3IrXCIgXCIsdm9pZCAwPT09Z1tlXSYmKGdbZV09ZC5uZWVkc0NvbnRleHQ/cihlLHRoaXMpLmluZGV4KGopPi0xOnIuZmluZChlLHRoaXMsbnVsbCxbal0pLmxlbmd0aCksZ1tlXSYmZi5wdXNoKGQpO2YubGVuZ3RoJiZoLnB1c2goe2VsZW06aixoYW5kbGVyczpmfSl9cmV0dXJuIGo9dGhpcyxpPGIubGVuZ3RoJiZoLnB1c2goe2VsZW06aixoYW5kbGVyczpiLnNsaWNlKGkpfSksaH0sYWRkUHJvcDpmdW5jdGlvbihhLGIpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShyLkV2ZW50LnByb3RvdHlwZSxhLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxnZXQ6ci5pc0Z1bmN0aW9uKGIpP2Z1bmN0aW9uKCl7aWYodGhpcy5vcmlnaW5hbEV2ZW50KXJldHVybiBiKHRoaXMub3JpZ2luYWxFdmVudCl9OmZ1bmN0aW9uKCl7aWYodGhpcy5vcmlnaW5hbEV2ZW50KXJldHVybiB0aGlzLm9yaWdpbmFsRXZlbnRbYV19LHNldDpmdW5jdGlvbihiKXtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxhLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpifSl9fSl9LGZpeDpmdW5jdGlvbihhKXtyZXR1cm4gYVtyLmV4cGFuZG9dP2E6bmV3IHIuRXZlbnQoYSl9LHNwZWNpYWw6e2xvYWQ6e25vQnViYmxlOiEwfSxmb2N1czp7dHJpZ2dlcjpmdW5jdGlvbigpe2lmKHRoaXMhPT14YSgpJiZ0aGlzLmZvY3VzKXJldHVybiB0aGlzLmZvY3VzKCksITF9LGRlbGVnYXRlVHlwZTpcImZvY3VzaW5cIn0sYmx1cjp7dHJpZ2dlcjpmdW5jdGlvbigpe2lmKHRoaXM9PT14YSgpJiZ0aGlzLmJsdXIpcmV0dXJuIHRoaXMuYmx1cigpLCExfSxkZWxlZ2F0ZVR5cGU6XCJmb2N1c291dFwifSxjbGljazp7dHJpZ2dlcjpmdW5jdGlvbigpe2lmKFwiY2hlY2tib3hcIj09PXRoaXMudHlwZSYmdGhpcy5jbGljayYmQih0aGlzLFwiaW5wdXRcIikpcmV0dXJuIHRoaXMuY2xpY2soKSwhMX0sX2RlZmF1bHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIEIoYS50YXJnZXQsXCJhXCIpfX0sYmVmb3JldW5sb2FkOntwb3N0RGlzcGF0Y2g6ZnVuY3Rpb24oYSl7dm9pZCAwIT09YS5yZXN1bHQmJmEub3JpZ2luYWxFdmVudCYmKGEub3JpZ2luYWxFdmVudC5yZXR1cm5WYWx1ZT1hLnJlc3VsdCl9fX19LHIucmVtb3ZlRXZlbnQ9ZnVuY3Rpb24oYSxiLGMpe2EucmVtb3ZlRXZlbnRMaXN0ZW5lciYmYS5yZW1vdmVFdmVudExpc3RlbmVyKGIsYyl9LHIuRXZlbnQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcyBpbnN0YW5jZW9mIHIuRXZlbnQ/KGEmJmEudHlwZT8odGhpcy5vcmlnaW5hbEV2ZW50PWEsdGhpcy50eXBlPWEudHlwZSx0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1hLmRlZmF1bHRQcmV2ZW50ZWR8fHZvaWQgMD09PWEuZGVmYXVsdFByZXZlbnRlZCYmYS5yZXR1cm5WYWx1ZT09PSExP3ZhOndhLHRoaXMudGFyZ2V0PWEudGFyZ2V0JiYzPT09YS50YXJnZXQubm9kZVR5cGU/YS50YXJnZXQucGFyZW50Tm9kZTphLnRhcmdldCx0aGlzLmN1cnJlbnRUYXJnZXQ9YS5jdXJyZW50VGFyZ2V0LHRoaXMucmVsYXRlZFRhcmdldD1hLnJlbGF0ZWRUYXJnZXQpOnRoaXMudHlwZT1hLGImJnIuZXh0ZW5kKHRoaXMsYiksdGhpcy50aW1lU3RhbXA9YSYmYS50aW1lU3RhbXB8fHIubm93KCksdm9pZCh0aGlzW3IuZXhwYW5kb109ITApKTpuZXcgci5FdmVudChhLGIpfSxyLkV2ZW50LnByb3RvdHlwZT17Y29uc3RydWN0b3I6ci5FdmVudCxpc0RlZmF1bHRQcmV2ZW50ZWQ6d2EsaXNQcm9wYWdhdGlvblN0b3BwZWQ6d2EsaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ6d2EsaXNTaW11bGF0ZWQ6ITEscHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9dmEsYSYmIXRoaXMuaXNTaW11bGF0ZWQmJmEucHJldmVudERlZmF1bHQoKX0sc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9dmEsYSYmIXRoaXMuaXNTaW11bGF0ZWQmJmEuc3RvcFByb3BhZ2F0aW9uKCl9LHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkPXZhLGEmJiF0aGlzLmlzU2ltdWxhdGVkJiZhLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLHRoaXMuc3RvcFByb3BhZ2F0aW9uKCl9fSxyLmVhY2goe2FsdEtleTohMCxidWJibGVzOiEwLGNhbmNlbGFibGU6ITAsY2hhbmdlZFRvdWNoZXM6ITAsY3RybEtleTohMCxkZXRhaWw6ITAsZXZlbnRQaGFzZTohMCxtZXRhS2V5OiEwLHBhZ2VYOiEwLHBhZ2VZOiEwLHNoaWZ0S2V5OiEwLHZpZXc6ITAsXCJjaGFyXCI6ITAsY2hhckNvZGU6ITAsa2V5OiEwLGtleUNvZGU6ITAsYnV0dG9uOiEwLGJ1dHRvbnM6ITAsY2xpZW50WDohMCxjbGllbnRZOiEwLG9mZnNldFg6ITAsb2Zmc2V0WTohMCxwb2ludGVySWQ6ITAscG9pbnRlclR5cGU6ITAsc2NyZWVuWDohMCxzY3JlZW5ZOiEwLHRhcmdldFRvdWNoZXM6ITAsdG9FbGVtZW50OiEwLHRvdWNoZXM6ITAsd2hpY2g6ZnVuY3Rpb24oYSl7dmFyIGI9YS5idXR0b247cmV0dXJuIG51bGw9PWEud2hpY2gmJnNhLnRlc3QoYS50eXBlKT9udWxsIT1hLmNoYXJDb2RlP2EuY2hhckNvZGU6YS5rZXlDb2RlOiFhLndoaWNoJiZ2b2lkIDAhPT1iJiZ0YS50ZXN0KGEudHlwZSk/MSZiPzE6MiZiPzM6NCZiPzI6MDphLndoaWNofX0sci5ldmVudC5hZGRQcm9wKSxyLmVhY2goe21vdXNlZW50ZXI6XCJtb3VzZW92ZXJcIixtb3VzZWxlYXZlOlwibW91c2VvdXRcIixwb2ludGVyZW50ZXI6XCJwb2ludGVyb3ZlclwiLHBvaW50ZXJsZWF2ZTpcInBvaW50ZXJvdXRcIn0sZnVuY3Rpb24oYSxiKXtyLmV2ZW50LnNwZWNpYWxbYV09e2RlbGVnYXRlVHlwZTpiLGJpbmRUeXBlOmIsaGFuZGxlOmZ1bmN0aW9uKGEpe3ZhciBjLGQ9dGhpcyxlPWEucmVsYXRlZFRhcmdldCxmPWEuaGFuZGxlT2JqO3JldHVybiBlJiYoZT09PWR8fHIuY29udGFpbnMoZCxlKSl8fChhLnR5cGU9Zi5vcmlnVHlwZSxjPWYuaGFuZGxlci5hcHBseSh0aGlzLGFyZ3VtZW50cyksYS50eXBlPWIpLGN9fX0pLHIuZm4uZXh0ZW5kKHtvbjpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4geWEodGhpcyxhLGIsYyxkKX0sb25lOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB5YSh0aGlzLGEsYixjLGQsMSl9LG9mZjpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZTtpZihhJiZhLnByZXZlbnREZWZhdWx0JiZhLmhhbmRsZU9iailyZXR1cm4gZD1hLmhhbmRsZU9iaixyKGEuZGVsZWdhdGVUYXJnZXQpLm9mZihkLm5hbWVzcGFjZT9kLm9yaWdUeXBlK1wiLlwiK2QubmFtZXNwYWNlOmQub3JpZ1R5cGUsZC5zZWxlY3RvcixkLmhhbmRsZXIpLHRoaXM7aWYoXCJvYmplY3RcIj09dHlwZW9mIGEpe2ZvcihlIGluIGEpdGhpcy5vZmYoZSxiLGFbZV0pO3JldHVybiB0aGlzfXJldHVybiBiIT09ITEmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGJ8fChjPWIsYj12b2lkIDApLGM9PT0hMSYmKGM9d2EpLHRoaXMuZWFjaChmdW5jdGlvbigpe3IuZXZlbnQucmVtb3ZlKHRoaXMsYSxjLGIpfSl9fSk7dmFyIHphPS88KD8hYXJlYXxicnxjb2x8ZW1iZWR8aHJ8aW1nfGlucHV0fGxpbmt8bWV0YXxwYXJhbSkoKFthLXpdW15cXC9cXDA+XFx4MjBcXHRcXHJcXG5cXGZdKilbXj5dKilcXC8+L2dpLEFhPS88c2NyaXB0fDxzdHlsZXw8bGluay9pLEJhPS9jaGVja2VkXFxzKig/OltePV18PVxccyouY2hlY2tlZC4pL2ksQ2E9L150cnVlXFwvKC4qKS8sRGE9L15cXHMqPCEoPzpcXFtDREFUQVxcW3wtLSl8KD86XFxdXFxdfC0tKT5cXHMqJC9nO2Z1bmN0aW9uIEVhKGEsYil7cmV0dXJuIEIoYSxcInRhYmxlXCIpJiZCKDExIT09Yi5ub2RlVHlwZT9iOmIuZmlyc3RDaGlsZCxcInRyXCIpP3IoXCI+dGJvZHlcIixhKVswXXx8YTphfWZ1bmN0aW9uIEZhKGEpe3JldHVybiBhLnR5cGU9KG51bGwhPT1hLmdldEF0dHJpYnV0ZShcInR5cGVcIikpK1wiL1wiK2EudHlwZSxhfWZ1bmN0aW9uIEdhKGEpe3ZhciBiPUNhLmV4ZWMoYS50eXBlKTtyZXR1cm4gYj9hLnR5cGU9YlsxXTphLnJlbW92ZUF0dHJpYnV0ZShcInR5cGVcIiksYX1mdW5jdGlvbiBIYShhLGIpe3ZhciBjLGQsZSxmLGcsaCxpLGo7aWYoMT09PWIubm9kZVR5cGUpe2lmKFcuaGFzRGF0YShhKSYmKGY9Vy5hY2Nlc3MoYSksZz1XLnNldChiLGYpLGo9Zi5ldmVudHMpKXtkZWxldGUgZy5oYW5kbGUsZy5ldmVudHM9e307Zm9yKGUgaW4gailmb3IoYz0wLGQ9altlXS5sZW5ndGg7YzxkO2MrKylyLmV2ZW50LmFkZChiLGUsaltlXVtjXSl9WC5oYXNEYXRhKGEpJiYoaD1YLmFjY2VzcyhhKSxpPXIuZXh0ZW5kKHt9LGgpLFguc2V0KGIsaSkpfX1mdW5jdGlvbiBJYShhLGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcImlucHV0XCI9PT1jJiZqYS50ZXN0KGEudHlwZSk/Yi5jaGVja2VkPWEuY2hlY2tlZDpcImlucHV0XCIhPT1jJiZcInRleHRhcmVhXCIhPT1jfHwoYi5kZWZhdWx0VmFsdWU9YS5kZWZhdWx0VmFsdWUpfWZ1bmN0aW9uIEphKGEsYixjLGQpe2I9Zy5hcHBseShbXSxiKTt2YXIgZSxmLGgsaSxqLGssbD0wLG09YS5sZW5ndGgsbj1tLTEscT1iWzBdLHM9ci5pc0Z1bmN0aW9uKHEpO2lmKHN8fG0+MSYmXCJzdHJpbmdcIj09dHlwZW9mIHEmJiFvLmNoZWNrQ2xvbmUmJkJhLnRlc3QocSkpcmV0dXJuIGEuZWFjaChmdW5jdGlvbihlKXt2YXIgZj1hLmVxKGUpO3MmJihiWzBdPXEuY2FsbCh0aGlzLGUsZi5odG1sKCkpKSxKYShmLGIsYyxkKX0pO2lmKG0mJihlPXFhKGIsYVswXS5vd25lckRvY3VtZW50LCExLGEsZCksZj1lLmZpcnN0Q2hpbGQsMT09PWUuY2hpbGROb2Rlcy5sZW5ndGgmJihlPWYpLGZ8fGQpKXtmb3IoaD1yLm1hcChuYShlLFwic2NyaXB0XCIpLEZhKSxpPWgubGVuZ3RoO2w8bTtsKyspaj1lLGwhPT1uJiYoaj1yLmNsb25lKGosITAsITApLGkmJnIubWVyZ2UoaCxuYShqLFwic2NyaXB0XCIpKSksYy5jYWxsKGFbbF0saixsKTtpZihpKWZvcihrPWhbaC5sZW5ndGgtMV0ub3duZXJEb2N1bWVudCxyLm1hcChoLEdhKSxsPTA7bDxpO2wrKylqPWhbbF0sbGEudGVzdChqLnR5cGV8fFwiXCIpJiYhVy5hY2Nlc3MoaixcImdsb2JhbEV2YWxcIikmJnIuY29udGFpbnMoayxqKSYmKGouc3JjP3IuX2V2YWxVcmwmJnIuX2V2YWxVcmwoai5zcmMpOnAoai50ZXh0Q29udGVudC5yZXBsYWNlKERhLFwiXCIpLGspKX1yZXR1cm4gYX1mdW5jdGlvbiBLYShhLGIsYyl7Zm9yKHZhciBkLGU9Yj9yLmZpbHRlcihiLGEpOmEsZj0wO251bGwhPShkPWVbZl0pO2YrKyljfHwxIT09ZC5ub2RlVHlwZXx8ci5jbGVhbkRhdGEobmEoZCkpLGQucGFyZW50Tm9kZSYmKGMmJnIuY29udGFpbnMoZC5vd25lckRvY3VtZW50LGQpJiZvYShuYShkLFwic2NyaXB0XCIpKSxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZCkpO3JldHVybiBhfXIuZXh0ZW5kKHtodG1sUHJlZmlsdGVyOmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UoemEsXCI8JDE+PC8kMj5cIil9LGNsb25lOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuY2xvbmVOb2RlKCEwKSxpPXIuY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpO2lmKCEoby5ub0Nsb25lQ2hlY2tlZHx8MSE9PWEubm9kZVR5cGUmJjExIT09YS5ub2RlVHlwZXx8ci5pc1hNTERvYyhhKSkpZm9yKGc9bmEoaCksZj1uYShhKSxkPTAsZT1mLmxlbmd0aDtkPGU7ZCsrKUlhKGZbZF0sZ1tkXSk7aWYoYilpZihjKWZvcihmPWZ8fG5hKGEpLGc9Z3x8bmEoaCksZD0wLGU9Zi5sZW5ndGg7ZDxlO2QrKylIYShmW2RdLGdbZF0pO2Vsc2UgSGEoYSxoKTtyZXR1cm4gZz1uYShoLFwic2NyaXB0XCIpLGcubGVuZ3RoPjAmJm9hKGcsIWkmJm5hKGEsXCJzY3JpcHRcIikpLGh9LGNsZWFuRGF0YTpmdW5jdGlvbihhKXtmb3IodmFyIGIsYyxkLGU9ci5ldmVudC5zcGVjaWFsLGY9MDt2b2lkIDAhPT0oYz1hW2ZdKTtmKyspaWYoVShjKSl7aWYoYj1jW1cuZXhwYW5kb10pe2lmKGIuZXZlbnRzKWZvcihkIGluIGIuZXZlbnRzKWVbZF0/ci5ldmVudC5yZW1vdmUoYyxkKTpyLnJlbW92ZUV2ZW50KGMsZCxiLmhhbmRsZSk7Y1tXLmV4cGFuZG9dPXZvaWQgMH1jW1guZXhwYW5kb10mJihjW1guZXhwYW5kb109dm9pZCAwKX19fSksci5mbi5leHRlbmQoe2RldGFjaDpmdW5jdGlvbihhKXtyZXR1cm4gS2EodGhpcyxhLCEwKX0scmVtb3ZlOmZ1bmN0aW9uKGEpe3JldHVybiBLYSh0aGlzLGEpfSx0ZXh0OmZ1bmN0aW9uKGEpe3JldHVybiBUKHRoaXMsZnVuY3Rpb24oYSl7cmV0dXJuIHZvaWQgMD09PWE/ci50ZXh0KHRoaXMpOnRoaXMuZW1wdHkoKS5lYWNoKGZ1bmN0aW9uKCl7MSE9PXRoaXMubm9kZVR5cGUmJjExIT09dGhpcy5ub2RlVHlwZSYmOSE9PXRoaXMubm9kZVR5cGV8fCh0aGlzLnRleHRDb250ZW50PWEpfSl9LG51bGwsYSxhcmd1bWVudHMubGVuZ3RoKX0sYXBwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIEphKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGEpe2lmKDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKXt2YXIgYj1FYSh0aGlzLGEpO2IuYXBwZW5kQ2hpbGQoYSl9fSl9LHByZXBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gSmEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciBiPUVhKHRoaXMsYSk7Yi5pbnNlcnRCZWZvcmUoYSxiLmZpcnN0Q2hpbGQpfX0pfSxiZWZvcmU6ZnVuY3Rpb24oKXtyZXR1cm4gSmEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsdGhpcyl9KX0sYWZ0ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gSmEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsdGhpcy5uZXh0U2libGluZyl9KX0sZW1wdHk6ZnVuY3Rpb24oKXtmb3IodmFyIGEsYj0wO251bGwhPShhPXRoaXNbYl0pO2IrKykxPT09YS5ub2RlVHlwZSYmKHIuY2xlYW5EYXRhKG5hKGEsITEpKSxhLnRleHRDb250ZW50PVwiXCIpO3JldHVybiB0aGlzfSxjbG9uZTpmdW5jdGlvbihhLGIpe3JldHVybiBhPW51bGwhPWEmJmEsYj1udWxsPT1iP2E6Yix0aGlzLm1hcChmdW5jdGlvbigpe3JldHVybiByLmNsb25lKHRoaXMsYSxiKX0pfSxodG1sOmZ1bmN0aW9uKGEpe3JldHVybiBUKHRoaXMsZnVuY3Rpb24oYSl7dmFyIGI9dGhpc1swXXx8e30sYz0wLGQ9dGhpcy5sZW5ndGg7aWYodm9pZCAwPT09YSYmMT09PWIubm9kZVR5cGUpcmV0dXJuIGIuaW5uZXJIVE1MO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhJiYhQWEudGVzdChhKSYmIW1hWyhrYS5leGVjKGEpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKV0pe2E9ci5odG1sUHJlZmlsdGVyKGEpO3RyeXtmb3IoO2M8ZDtjKyspYj10aGlzW2NdfHx7fSwxPT09Yi5ub2RlVHlwZSYmKHIuY2xlYW5EYXRhKG5hKGIsITEpKSxiLmlubmVySFRNTD1hKTtiPTB9Y2F0Y2goZSl7fX1iJiZ0aGlzLmVtcHR5KCkuYXBwZW5kKGEpfSxudWxsLGEsYXJndW1lbnRzLmxlbmd0aCl9LHJlcGxhY2VXaXRoOmZ1bmN0aW9uKCl7dmFyIGE9W107cmV0dXJuIEphKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGIpe3ZhciBjPXRoaXMucGFyZW50Tm9kZTtyLmluQXJyYXkodGhpcyxhKTwwJiYoci5jbGVhbkRhdGEobmEodGhpcykpLGMmJmMucmVwbGFjZUNoaWxkKGIsdGhpcykpfSxhKX19KSxyLmVhY2goe2FwcGVuZFRvOlwiYXBwZW5kXCIscHJlcGVuZFRvOlwicHJlcGVuZFwiLGluc2VydEJlZm9yZTpcImJlZm9yZVwiLGluc2VydEFmdGVyOlwiYWZ0ZXJcIixyZXBsYWNlQWxsOlwicmVwbGFjZVdpdGhcIn0sZnVuY3Rpb24oYSxiKXtyLmZuW2FdPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYyxkPVtdLGU9cihhKSxmPWUubGVuZ3RoLTEsZz0wO2c8PWY7ZysrKWM9Zz09PWY/dGhpczp0aGlzLmNsb25lKCEwKSxyKGVbZ10pW2JdKGMpLGguYXBwbHkoZCxjLmdldCgpKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2soZCl9fSk7dmFyIExhPS9ebWFyZ2luLyxNYT1uZXcgUmVnRXhwKFwiXihcIithYStcIikoPyFweClbYS16JV0rJFwiLFwiaVwiKSxOYT1mdW5jdGlvbihiKXt2YXIgYz1iLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7cmV0dXJuIGMmJmMub3BlbmVyfHwoYz1hKSxjLmdldENvbXB1dGVkU3R5bGUoYil9OyFmdW5jdGlvbigpe2Z1bmN0aW9uIGIoKXtpZihpKXtpLnN0eWxlLmNzc1RleHQ9XCJib3gtc2l6aW5nOmJvcmRlci1ib3g7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jazttYXJnaW46YXV0bztib3JkZXI6MXB4O3BhZGRpbmc6MXB4O3RvcDoxJTt3aWR0aDo1MCVcIixpLmlubmVySFRNTD1cIlwiLHJhLmFwcGVuZENoaWxkKGgpO3ZhciBiPWEuZ2V0Q29tcHV0ZWRTdHlsZShpKTtjPVwiMSVcIiE9PWIudG9wLGc9XCIycHhcIj09PWIubWFyZ2luTGVmdCxlPVwiNHB4XCI9PT1iLndpZHRoLGkuc3R5bGUubWFyZ2luUmlnaHQ9XCI1MCVcIixmPVwiNHB4XCI9PT1iLm1hcmdpblJpZ2h0LHJhLnJlbW92ZUNoaWxkKGgpLGk9bnVsbH19dmFyIGMsZSxmLGcsaD1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksaT1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aS5zdHlsZSYmKGkuc3R5bGUuYmFja2dyb3VuZENsaXA9XCJjb250ZW50LWJveFwiLGkuY2xvbmVOb2RlKCEwKS5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cIlwiLG8uY2xlYXJDbG9uZVN0eWxlPVwiY29udGVudC1ib3hcIj09PWkuc3R5bGUuYmFja2dyb3VuZENsaXAsaC5zdHlsZS5jc3NUZXh0PVwiYm9yZGVyOjA7d2lkdGg6OHB4O2hlaWdodDowO3RvcDowO2xlZnQ6LTk5OTlweDtwYWRkaW5nOjA7bWFyZ2luLXRvcDoxcHg7cG9zaXRpb246YWJzb2x1dGVcIixoLmFwcGVuZENoaWxkKGkpLHIuZXh0ZW5kKG8se3BpeGVsUG9zaXRpb246ZnVuY3Rpb24oKXtyZXR1cm4gYigpLGN9LGJveFNpemluZ1JlbGlhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIGIoKSxlfSxwaXhlbE1hcmdpblJpZ2h0OmZ1bmN0aW9uKCl7cmV0dXJuIGIoKSxmfSxyZWxpYWJsZU1hcmdpbkxlZnQ6ZnVuY3Rpb24oKXtyZXR1cm4gYigpLGd9fSkpfSgpO2Z1bmN0aW9uIE9hKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuc3R5bGU7cmV0dXJuIGM9Y3x8TmEoYSksYyYmKGc9Yy5nZXRQcm9wZXJ0eVZhbHVlKGIpfHxjW2JdLFwiXCIhPT1nfHxyLmNvbnRhaW5zKGEub3duZXJEb2N1bWVudCxhKXx8KGc9ci5zdHlsZShhLGIpKSwhby5waXhlbE1hcmdpblJpZ2h0KCkmJk1hLnRlc3QoZykmJkxhLnRlc3QoYikmJihkPWgud2lkdGgsZT1oLm1pbldpZHRoLGY9aC5tYXhXaWR0aCxoLm1pbldpZHRoPWgubWF4V2lkdGg9aC53aWR0aD1nLGc9Yy53aWR0aCxoLndpZHRoPWQsaC5taW5XaWR0aD1lLGgubWF4V2lkdGg9ZikpLHZvaWQgMCE9PWc/ZytcIlwiOmd9ZnVuY3Rpb24gUGEoYSxiKXtyZXR1cm57Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGEoKT92b2lkIGRlbGV0ZSB0aGlzLmdldDoodGhpcy5nZXQ9YikuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19dmFyIFFhPS9eKG5vbmV8dGFibGUoPyEtY1tlYV0pLispLyxSYT0vXi0tLyxTYT17cG9zaXRpb246XCJhYnNvbHV0ZVwiLHZpc2liaWxpdHk6XCJoaWRkZW5cIixkaXNwbGF5OlwiYmxvY2tcIn0sVGE9e2xldHRlclNwYWNpbmc6XCIwXCIsZm9udFdlaWdodDpcIjQwMFwifSxVYT1bXCJXZWJraXRcIixcIk1velwiLFwibXNcIl0sVmE9ZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlO2Z1bmN0aW9uIFdhKGEpe2lmKGEgaW4gVmEpcmV0dXJuIGE7dmFyIGI9YVswXS50b1VwcGVyQ2FzZSgpK2Euc2xpY2UoMSksYz1VYS5sZW5ndGg7d2hpbGUoYy0tKWlmKGE9VWFbY10rYixhIGluIFZhKXJldHVybiBhfWZ1bmN0aW9uIFhhKGEpe3ZhciBiPXIuY3NzUHJvcHNbYV07cmV0dXJuIGJ8fChiPXIuY3NzUHJvcHNbYV09V2EoYSl8fGEpLGJ9ZnVuY3Rpb24gWWEoYSxiLGMpe3ZhciBkPWJhLmV4ZWMoYik7cmV0dXJuIGQ/TWF0aC5tYXgoMCxkWzJdLShjfHwwKSkrKGRbM118fFwicHhcIik6Yn1mdW5jdGlvbiBaYShhLGIsYyxkLGUpe3ZhciBmLGc9MDtmb3IoZj1jPT09KGQ/XCJib3JkZXJcIjpcImNvbnRlbnRcIik/NDpcIndpZHRoXCI9PT1iPzE6MDtmPDQ7Zis9MilcIm1hcmdpblwiPT09YyYmKGcrPXIuY3NzKGEsYytjYVtmXSwhMCxlKSksZD8oXCJjb250ZW50XCI9PT1jJiYoZy09ci5jc3MoYSxcInBhZGRpbmdcIitjYVtmXSwhMCxlKSksXCJtYXJnaW5cIiE9PWMmJihnLT1yLmNzcyhhLFwiYm9yZGVyXCIrY2FbZl0rXCJXaWR0aFwiLCEwLGUpKSk6KGcrPXIuY3NzKGEsXCJwYWRkaW5nXCIrY2FbZl0sITAsZSksXCJwYWRkaW5nXCIhPT1jJiYoZys9ci5jc3MoYSxcImJvcmRlclwiK2NhW2ZdK1wiV2lkdGhcIiwhMCxlKSkpO3JldHVybiBnfWZ1bmN0aW9uICRhKGEsYixjKXt2YXIgZCxlPU5hKGEpLGY9T2EoYSxiLGUpLGc9XCJib3JkZXItYm94XCI9PT1yLmNzcyhhLFwiYm94U2l6aW5nXCIsITEsZSk7cmV0dXJuIE1hLnRlc3QoZik/ZjooZD1nJiYoby5ib3hTaXppbmdSZWxpYWJsZSgpfHxmPT09YS5zdHlsZVtiXSksXCJhdXRvXCI9PT1mJiYoZj1hW1wib2Zmc2V0XCIrYlswXS50b1VwcGVyQ2FzZSgpK2Iuc2xpY2UoMSldKSxmPXBhcnNlRmxvYXQoZil8fDAsZitaYShhLGIsY3x8KGc/XCJib3JkZXJcIjpcImNvbnRlbnRcIiksZCxlKStcInB4XCIpfXIuZXh0ZW5kKHtjc3NIb29rczp7b3BhY2l0eTp7Z2V0OmZ1bmN0aW9uKGEsYil7aWYoYil7dmFyIGM9T2EoYSxcIm9wYWNpdHlcIik7cmV0dXJuXCJcIj09PWM/XCIxXCI6Y319fX0sY3NzTnVtYmVyOnthbmltYXRpb25JdGVyYXRpb25Db3VudDohMCxjb2x1bW5Db3VudDohMCxmaWxsT3BhY2l0eTohMCxmbGV4R3JvdzohMCxmbGV4U2hyaW5rOiEwLGZvbnRXZWlnaHQ6ITAsbGluZUhlaWdodDohMCxvcGFjaXR5OiEwLG9yZGVyOiEwLG9ycGhhbnM6ITAsd2lkb3dzOiEwLHpJbmRleDohMCx6b29tOiEwfSxjc3NQcm9wczp7XCJmbG9hdFwiOlwiY3NzRmxvYXRcIn0sc3R5bGU6ZnVuY3Rpb24oYSxiLGMsZCl7aWYoYSYmMyE9PWEubm9kZVR5cGUmJjghPT1hLm5vZGVUeXBlJiZhLnN0eWxlKXt2YXIgZSxmLGcsaD1yLmNhbWVsQ2FzZShiKSxpPVJhLnRlc3QoYiksaj1hLnN0eWxlO3JldHVybiBpfHwoYj1YYShoKSksZz1yLmNzc0hvb2tzW2JdfHxyLmNzc0hvb2tzW2hdLHZvaWQgMD09PWM/ZyYmXCJnZXRcImluIGcmJnZvaWQgMCE9PShlPWcuZ2V0KGEsITEsZCkpP2U6altiXTooZj10eXBlb2YgYyxcInN0cmluZ1wiPT09ZiYmKGU9YmEuZXhlYyhjKSkmJmVbMV0mJihjPWZhKGEsYixlKSxmPVwibnVtYmVyXCIpLG51bGwhPWMmJmM9PT1jJiYoXCJudW1iZXJcIj09PWYmJihjKz1lJiZlWzNdfHwoci5jc3NOdW1iZXJbaF0/XCJcIjpcInB4XCIpKSxvLmNsZWFyQ2xvbmVTdHlsZXx8XCJcIiE9PWN8fDAhPT1iLmluZGV4T2YoXCJiYWNrZ3JvdW5kXCIpfHwoaltiXT1cImluaGVyaXRcIiksZyYmXCJzZXRcImluIGcmJnZvaWQgMD09PShjPWcuc2V0KGEsYyxkKSl8fChpP2ouc2V0UHJvcGVydHkoYixjKTpqW2JdPWMpKSx2b2lkIDApfX0sY3NzOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlLGYsZyxoPXIuY2FtZWxDYXNlKGIpLGk9UmEudGVzdChiKTtyZXR1cm4gaXx8KGI9WGEoaCkpLGc9ci5jc3NIb29rc1tiXXx8ci5jc3NIb29rc1toXSxnJiZcImdldFwiaW4gZyYmKGU9Zy5nZXQoYSwhMCxjKSksdm9pZCAwPT09ZSYmKGU9T2EoYSxiLGQpKSxcIm5vcm1hbFwiPT09ZSYmYiBpbiBUYSYmKGU9VGFbYl0pLFwiXCI9PT1jfHxjPyhmPXBhcnNlRmxvYXQoZSksYz09PSEwfHxpc0Zpbml0ZShmKT9mfHwwOmUpOmV9fSksci5lYWNoKFtcImhlaWdodFwiLFwid2lkdGhcIl0sZnVuY3Rpb24oYSxiKXtyLmNzc0hvb2tzW2JdPXtnZXQ6ZnVuY3Rpb24oYSxjLGQpe2lmKGMpcmV0dXJuIVFhLnRlc3Qoci5jc3MoYSxcImRpc3BsYXlcIikpfHxhLmdldENsaWVudFJlY3RzKCkubGVuZ3RoJiZhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoPyRhKGEsYixkKTplYShhLFNhLGZ1bmN0aW9uKCl7cmV0dXJuICRhKGEsYixkKX0pfSxzZXQ6ZnVuY3Rpb24oYSxjLGQpe3ZhciBlLGY9ZCYmTmEoYSksZz1kJiZaYShhLGIsZCxcImJvcmRlci1ib3hcIj09PXIuY3NzKGEsXCJib3hTaXppbmdcIiwhMSxmKSxmKTtyZXR1cm4gZyYmKGU9YmEuZXhlYyhjKSkmJlwicHhcIiE9PShlWzNdfHxcInB4XCIpJiYoYS5zdHlsZVtiXT1jLGM9ci5jc3MoYSxiKSksWWEoYSxjLGcpfX19KSxyLmNzc0hvb2tzLm1hcmdpbkxlZnQ9UGEoby5yZWxpYWJsZU1hcmdpbkxlZnQsZnVuY3Rpb24oYSxiKXtpZihiKXJldHVybihwYXJzZUZsb2F0KE9hKGEsXCJtYXJnaW5MZWZ0XCIpKXx8YS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LWVhKGEse21hcmdpbkxlZnQ6MH0sZnVuY3Rpb24oKXtyZXR1cm4gYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0fSkpK1wicHhcIn0pLHIuZWFjaCh7bWFyZ2luOlwiXCIscGFkZGluZzpcIlwiLGJvcmRlcjpcIldpZHRoXCJ9LGZ1bmN0aW9uKGEsYil7ci5jc3NIb29rc1thK2JdPXtleHBhbmQ6ZnVuY3Rpb24oYyl7Zm9yKHZhciBkPTAsZT17fSxmPVwic3RyaW5nXCI9PXR5cGVvZiBjP2Muc3BsaXQoXCIgXCIpOltjXTtkPDQ7ZCsrKWVbYStjYVtkXStiXT1mW2RdfHxmW2QtMl18fGZbMF07cmV0dXJuIGV9fSxMYS50ZXN0KGEpfHwoci5jc3NIb29rc1thK2JdLnNldD1ZYSl9KSxyLmZuLmV4dGVuZCh7Y3NzOmZ1bmN0aW9uKGEsYil7cmV0dXJuIFQodGhpcyxmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmPXt9LGc9MDtpZihBcnJheS5pc0FycmF5KGIpKXtmb3IoZD1OYShhKSxlPWIubGVuZ3RoO2c8ZTtnKyspZltiW2ddXT1yLmNzcyhhLGJbZ10sITEsZCk7cmV0dXJuIGZ9cmV0dXJuIHZvaWQgMCE9PWM/ci5zdHlsZShhLGIsYyk6ci5jc3MoYSxiKX0sYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9fSk7ZnVuY3Rpb24gX2EoYSxiLGMsZCxlKXtyZXR1cm4gbmV3IF9hLnByb3RvdHlwZS5pbml0KGEsYixjLGQsZSl9ci5Ud2Vlbj1fYSxfYS5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOl9hLGluaXQ6ZnVuY3Rpb24oYSxiLGMsZCxlLGYpe3RoaXMuZWxlbT1hLHRoaXMucHJvcD1jLHRoaXMuZWFzaW5nPWV8fHIuZWFzaW5nLl9kZWZhdWx0LHRoaXMub3B0aW9ucz1iLHRoaXMuc3RhcnQ9dGhpcy5ub3c9dGhpcy5jdXIoKSx0aGlzLmVuZD1kLHRoaXMudW5pdD1mfHwoci5jc3NOdW1iZXJbY10/XCJcIjpcInB4XCIpfSxjdXI6ZnVuY3Rpb24oKXt2YXIgYT1fYS5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gYSYmYS5nZXQ/YS5nZXQodGhpcyk6X2EucHJvcEhvb2tzLl9kZWZhdWx0LmdldCh0aGlzKX0scnVuOmZ1bmN0aW9uKGEpe3ZhciBiLGM9X2EucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIHRoaXMub3B0aW9ucy5kdXJhdGlvbj90aGlzLnBvcz1iPXIuZWFzaW5nW3RoaXMuZWFzaW5nXShhLHRoaXMub3B0aW9ucy5kdXJhdGlvbiphLDAsMSx0aGlzLm9wdGlvbnMuZHVyYXRpb24pOnRoaXMucG9zPWI9YSx0aGlzLm5vdz0odGhpcy5lbmQtdGhpcy5zdGFydCkqYit0aGlzLnN0YXJ0LHRoaXMub3B0aW9ucy5zdGVwJiZ0aGlzLm9wdGlvbnMuc3RlcC5jYWxsKHRoaXMuZWxlbSx0aGlzLm5vdyx0aGlzKSxjJiZjLnNldD9jLnNldCh0aGlzKTpfYS5wcm9wSG9va3MuX2RlZmF1bHQuc2V0KHRoaXMpLHRoaXN9fSxfYS5wcm90b3R5cGUuaW5pdC5wcm90b3R5cGU9X2EucHJvdG90eXBlLF9hLnByb3BIb29rcz17X2RlZmF1bHQ6e2dldDpmdW5jdGlvbihhKXt2YXIgYjtyZXR1cm4gMSE9PWEuZWxlbS5ub2RlVHlwZXx8bnVsbCE9YS5lbGVtW2EucHJvcF0mJm51bGw9PWEuZWxlbS5zdHlsZVthLnByb3BdP2EuZWxlbVthLnByb3BdOihiPXIuY3NzKGEuZWxlbSxhLnByb3AsXCJcIiksYiYmXCJhdXRvXCIhPT1iP2I6MCl9LHNldDpmdW5jdGlvbihhKXtyLmZ4LnN0ZXBbYS5wcm9wXT9yLmZ4LnN0ZXBbYS5wcm9wXShhKToxIT09YS5lbGVtLm5vZGVUeXBlfHxudWxsPT1hLmVsZW0uc3R5bGVbci5jc3NQcm9wc1thLnByb3BdXSYmIXIuY3NzSG9va3NbYS5wcm9wXT9hLmVsZW1bYS5wcm9wXT1hLm5vdzpyLnN0eWxlKGEuZWxlbSxhLnByb3AsYS5ub3crYS51bml0KX19fSxfYS5wcm9wSG9va3Muc2Nyb2xsVG9wPV9hLnByb3BIb29rcy5zY3JvbGxMZWZ0PXtzZXQ6ZnVuY3Rpb24oYSl7YS5lbGVtLm5vZGVUeXBlJiZhLmVsZW0ucGFyZW50Tm9kZSYmKGEuZWxlbVthLnByb3BdPWEubm93KX19LHIuZWFzaW5nPXtsaW5lYXI6ZnVuY3Rpb24oYSl7cmV0dXJuIGF9LHN3aW5nOmZ1bmN0aW9uKGEpe3JldHVybi41LU1hdGguY29zKGEqTWF0aC5QSSkvMn0sX2RlZmF1bHQ6XCJzd2luZ1wifSxyLmZ4PV9hLnByb3RvdHlwZS5pbml0LHIuZnguc3RlcD17fTt2YXIgYWIsYmIsY2I9L14oPzp0b2dnbGV8c2hvd3xoaWRlKSQvLGRiPS9xdWV1ZUhvb2tzJC87ZnVuY3Rpb24gZWIoKXtiYiYmKGQuaGlkZGVuPT09ITEmJmEucmVxdWVzdEFuaW1hdGlvbkZyYW1lP2EucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGViKTphLnNldFRpbWVvdXQoZWIsci5meC5pbnRlcnZhbCksci5meC50aWNrKCkpfWZ1bmN0aW9uIGZiKCl7cmV0dXJuIGEuc2V0VGltZW91dChmdW5jdGlvbigpe2FiPXZvaWQgMH0pLGFiPXIubm93KCl9ZnVuY3Rpb24gZ2IoYSxiKXt2YXIgYyxkPTAsZT17aGVpZ2h0OmF9O2ZvcihiPWI/MTowO2Q8NDtkKz0yLWIpYz1jYVtkXSxlW1wibWFyZ2luXCIrY109ZVtcInBhZGRpbmdcIitjXT1hO3JldHVybiBiJiYoZS5vcGFjaXR5PWUud2lkdGg9YSksZX1mdW5jdGlvbiBoYihhLGIsYyl7Zm9yKHZhciBkLGU9KGtiLnR3ZWVuZXJzW2JdfHxbXSkuY29uY2F0KGtiLnR3ZWVuZXJzW1wiKlwiXSksZj0wLGc9ZS5sZW5ndGg7ZjxnO2YrKylpZihkPWVbZl0uY2FsbChjLGIsYSkpcmV0dXJuIGR9ZnVuY3Rpb24gaWIoYSxiLGMpe3ZhciBkLGUsZixnLGgsaSxqLGssbD1cIndpZHRoXCJpbiBifHxcImhlaWdodFwiaW4gYixtPXRoaXMsbj17fSxvPWEuc3R5bGUscD1hLm5vZGVUeXBlJiZkYShhKSxxPVcuZ2V0KGEsXCJmeHNob3dcIik7Yy5xdWV1ZXx8KGc9ci5fcXVldWVIb29rcyhhLFwiZnhcIiksbnVsbD09Zy51bnF1ZXVlZCYmKGcudW5xdWV1ZWQ9MCxoPWcuZW1wdHkuZmlyZSxnLmVtcHR5LmZpcmU9ZnVuY3Rpb24oKXtnLnVucXVldWVkfHxoKCl9KSxnLnVucXVldWVkKyssbS5hbHdheXMoZnVuY3Rpb24oKXttLmFsd2F5cyhmdW5jdGlvbigpe2cudW5xdWV1ZWQtLSxyLnF1ZXVlKGEsXCJmeFwiKS5sZW5ndGh8fGcuZW1wdHkuZmlyZSgpfSl9KSk7Zm9yKGQgaW4gYilpZihlPWJbZF0sY2IudGVzdChlKSl7aWYoZGVsZXRlIGJbZF0sZj1mfHxcInRvZ2dsZVwiPT09ZSxlPT09KHA/XCJoaWRlXCI6XCJzaG93XCIpKXtpZihcInNob3dcIiE9PWV8fCFxfHx2b2lkIDA9PT1xW2RdKWNvbnRpbnVlO3A9ITB9bltkXT1xJiZxW2RdfHxyLnN0eWxlKGEsZCl9aWYoaT0hci5pc0VtcHR5T2JqZWN0KGIpLGl8fCFyLmlzRW1wdHlPYmplY3Qobikpe2wmJjE9PT1hLm5vZGVUeXBlJiYoYy5vdmVyZmxvdz1bby5vdmVyZmxvdyxvLm92ZXJmbG93WCxvLm92ZXJmbG93WV0saj1xJiZxLmRpc3BsYXksbnVsbD09aiYmKGo9Vy5nZXQoYSxcImRpc3BsYXlcIikpLGs9ci5jc3MoYSxcImRpc3BsYXlcIiksXCJub25lXCI9PT1rJiYoaj9rPWo6KGlhKFthXSwhMCksaj1hLnN0eWxlLmRpc3BsYXl8fGosaz1yLmNzcyhhLFwiZGlzcGxheVwiKSxpYShbYV0pKSksKFwiaW5saW5lXCI9PT1rfHxcImlubGluZS1ibG9ja1wiPT09ayYmbnVsbCE9aikmJlwibm9uZVwiPT09ci5jc3MoYSxcImZsb2F0XCIpJiYoaXx8KG0uZG9uZShmdW5jdGlvbigpe28uZGlzcGxheT1qfSksbnVsbD09aiYmKGs9by5kaXNwbGF5LGo9XCJub25lXCI9PT1rP1wiXCI6aykpLG8uZGlzcGxheT1cImlubGluZS1ibG9ja1wiKSksYy5vdmVyZmxvdyYmKG8ub3ZlcmZsb3c9XCJoaWRkZW5cIixtLmFsd2F5cyhmdW5jdGlvbigpe28ub3ZlcmZsb3c9Yy5vdmVyZmxvd1swXSxvLm92ZXJmbG93WD1jLm92ZXJmbG93WzFdLG8ub3ZlcmZsb3dZPWMub3ZlcmZsb3dbMl19KSksaT0hMTtmb3IoZCBpbiBuKWl8fChxP1wiaGlkZGVuXCJpbiBxJiYocD1xLmhpZGRlbik6cT1XLmFjY2VzcyhhLFwiZnhzaG93XCIse2Rpc3BsYXk6an0pLGYmJihxLmhpZGRlbj0hcCkscCYmaWEoW2FdLCEwKSxtLmRvbmUoZnVuY3Rpb24oKXtwfHxpYShbYV0pLFcucmVtb3ZlKGEsXCJmeHNob3dcIik7Zm9yKGQgaW4gbilyLnN0eWxlKGEsZCxuW2RdKX0pKSxpPWhiKHA/cVtkXTowLGQsbSksZCBpbiBxfHwocVtkXT1pLnN0YXJ0LHAmJihpLmVuZD1pLnN0YXJ0LGkuc3RhcnQ9MCkpfX1mdW5jdGlvbiBqYihhLGIpe3ZhciBjLGQsZSxmLGc7Zm9yKGMgaW4gYSlpZihkPXIuY2FtZWxDYXNlKGMpLGU9YltkXSxmPWFbY10sQXJyYXkuaXNBcnJheShmKSYmKGU9ZlsxXSxmPWFbY109ZlswXSksYyE9PWQmJihhW2RdPWYsZGVsZXRlIGFbY10pLGc9ci5jc3NIb29rc1tkXSxnJiZcImV4cGFuZFwiaW4gZyl7Zj1nLmV4cGFuZChmKSxkZWxldGUgYVtkXTtmb3IoYyBpbiBmKWMgaW4gYXx8KGFbY109ZltjXSxiW2NdPWUpfWVsc2UgYltkXT1lfWZ1bmN0aW9uIGtiKGEsYixjKXt2YXIgZCxlLGY9MCxnPWtiLnByZWZpbHRlcnMubGVuZ3RoLGg9ci5EZWZlcnJlZCgpLmFsd2F5cyhmdW5jdGlvbigpe2RlbGV0ZSBpLmVsZW19KSxpPWZ1bmN0aW9uKCl7aWYoZSlyZXR1cm4hMTtmb3IodmFyIGI9YWJ8fGZiKCksYz1NYXRoLm1heCgwLGouc3RhcnRUaW1lK2ouZHVyYXRpb24tYiksZD1jL2ouZHVyYXRpb258fDAsZj0xLWQsZz0wLGk9ai50d2VlbnMubGVuZ3RoO2c8aTtnKyspai50d2VlbnNbZ10ucnVuKGYpO3JldHVybiBoLm5vdGlmeVdpdGgoYSxbaixmLGNdKSxmPDEmJmk/YzooaXx8aC5ub3RpZnlXaXRoKGEsW2osMSwwXSksaC5yZXNvbHZlV2l0aChhLFtqXSksITEpfSxqPWgucHJvbWlzZSh7ZWxlbTphLHByb3BzOnIuZXh0ZW5kKHt9LGIpLG9wdHM6ci5leHRlbmQoITAse3NwZWNpYWxFYXNpbmc6e30sZWFzaW5nOnIuZWFzaW5nLl9kZWZhdWx0fSxjKSxvcmlnaW5hbFByb3BlcnRpZXM6YixvcmlnaW5hbE9wdGlvbnM6YyxzdGFydFRpbWU6YWJ8fGZiKCksZHVyYXRpb246Yy5kdXJhdGlvbix0d2VlbnM6W10sY3JlYXRlVHdlZW46ZnVuY3Rpb24oYixjKXt2YXIgZD1yLlR3ZWVuKGEsai5vcHRzLGIsYyxqLm9wdHMuc3BlY2lhbEVhc2luZ1tiXXx8ai5vcHRzLmVhc2luZyk7cmV0dXJuIGoudHdlZW5zLnB1c2goZCksZH0sc3RvcDpmdW5jdGlvbihiKXt2YXIgYz0wLGQ9Yj9qLnR3ZWVucy5sZW5ndGg6MDtpZihlKXJldHVybiB0aGlzO2ZvcihlPSEwO2M8ZDtjKyspai50d2VlbnNbY10ucnVuKDEpO3JldHVybiBiPyhoLm5vdGlmeVdpdGgoYSxbaiwxLDBdKSxoLnJlc29sdmVXaXRoKGEsW2osYl0pKTpoLnJlamVjdFdpdGgoYSxbaixiXSksdGhpc319KSxrPWoucHJvcHM7Zm9yKGpiKGssai5vcHRzLnNwZWNpYWxFYXNpbmcpO2Y8ZztmKyspaWYoZD1rYi5wcmVmaWx0ZXJzW2ZdLmNhbGwoaixhLGssai5vcHRzKSlyZXR1cm4gci5pc0Z1bmN0aW9uKGQuc3RvcCkmJihyLl9xdWV1ZUhvb2tzKGouZWxlbSxqLm9wdHMucXVldWUpLnN0b3A9ci5wcm94eShkLnN0b3AsZCkpLGQ7cmV0dXJuIHIubWFwKGssaGIsaiksci5pc0Z1bmN0aW9uKGoub3B0cy5zdGFydCkmJmoub3B0cy5zdGFydC5jYWxsKGEsaiksai5wcm9ncmVzcyhqLm9wdHMucHJvZ3Jlc3MpLmRvbmUoai5vcHRzLmRvbmUsai5vcHRzLmNvbXBsZXRlKS5mYWlsKGoub3B0cy5mYWlsKS5hbHdheXMoai5vcHRzLmFsd2F5cyksci5meC50aW1lcihyLmV4dGVuZChpLHtlbGVtOmEsYW5pbTpqLHF1ZXVlOmoub3B0cy5xdWV1ZX0pKSxqfXIuQW5pbWF0aW9uPXIuZXh0ZW5kKGtiLHt0d2VlbmVyczp7XCIqXCI6W2Z1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5jcmVhdGVUd2VlbihhLGIpO3JldHVybiBmYShjLmVsZW0sYSxiYS5leGVjKGIpLGMpLGN9XX0sdHdlZW5lcjpmdW5jdGlvbihhLGIpe3IuaXNGdW5jdGlvbihhKT8oYj1hLGE9W1wiKlwiXSk6YT1hLm1hdGNoKEwpO2Zvcih2YXIgYyxkPTAsZT1hLmxlbmd0aDtkPGU7ZCsrKWM9YVtkXSxrYi50d2VlbmVyc1tjXT1rYi50d2VlbmVyc1tjXXx8W10sa2IudHdlZW5lcnNbY10udW5zaGlmdChiKX0scHJlZmlsdGVyczpbaWJdLHByZWZpbHRlcjpmdW5jdGlvbihhLGIpe2I/a2IucHJlZmlsdGVycy51bnNoaWZ0KGEpOmtiLnByZWZpbHRlcnMucHVzaChhKX19KSxyLnNwZWVkPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1hJiZcIm9iamVjdFwiPT10eXBlb2YgYT9yLmV4dGVuZCh7fSxhKTp7Y29tcGxldGU6Y3x8IWMmJmJ8fHIuaXNGdW5jdGlvbihhKSYmYSxkdXJhdGlvbjphLGVhc2luZzpjJiZifHxiJiYhci5pc0Z1bmN0aW9uKGIpJiZifTtyZXR1cm4gci5meC5vZmY/ZC5kdXJhdGlvbj0wOlwibnVtYmVyXCIhPXR5cGVvZiBkLmR1cmF0aW9uJiYoZC5kdXJhdGlvbiBpbiByLmZ4LnNwZWVkcz9kLmR1cmF0aW9uPXIuZnguc3BlZWRzW2QuZHVyYXRpb25dOmQuZHVyYXRpb249ci5meC5zcGVlZHMuX2RlZmF1bHQpLG51bGwhPWQucXVldWUmJmQucXVldWUhPT0hMHx8KGQucXVldWU9XCJmeFwiKSxkLm9sZD1kLmNvbXBsZXRlLGQuY29tcGxldGU9ZnVuY3Rpb24oKXtyLmlzRnVuY3Rpb24oZC5vbGQpJiZkLm9sZC5jYWxsKHRoaXMpLGQucXVldWUmJnIuZGVxdWV1ZSh0aGlzLGQucXVldWUpfSxkfSxyLmZuLmV4dGVuZCh7ZmFkZVRvOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB0aGlzLmZpbHRlcihkYSkuY3NzKFwib3BhY2l0eVwiLDApLnNob3coKS5lbmQoKS5hbmltYXRlKHtvcGFjaXR5OmJ9LGEsYyxkKX0sYW5pbWF0ZTpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1yLmlzRW1wdHlPYmplY3QoYSksZj1yLnNwZWVkKGIsYyxkKSxnPWZ1bmN0aW9uKCl7dmFyIGI9a2IodGhpcyxyLmV4dGVuZCh7fSxhKSxmKTsoZXx8Vy5nZXQodGhpcyxcImZpbmlzaFwiKSkmJmIuc3RvcCghMCl9O3JldHVybiBnLmZpbmlzaD1nLGV8fGYucXVldWU9PT0hMT90aGlzLmVhY2goZyk6dGhpcy5xdWV1ZShmLnF1ZXVlLGcpfSxzdG9wOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1mdW5jdGlvbihhKXt2YXIgYj1hLnN0b3A7ZGVsZXRlIGEuc3RvcCxiKGMpfTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgYSYmKGM9YixiPWEsYT12b2lkIDApLGImJmEhPT0hMSYmdGhpcy5xdWV1ZShhfHxcImZ4XCIsW10pLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiPSEwLGU9bnVsbCE9YSYmYStcInF1ZXVlSG9va3NcIixmPXIudGltZXJzLGc9Vy5nZXQodGhpcyk7aWYoZSlnW2VdJiZnW2VdLnN0b3AmJmQoZ1tlXSk7ZWxzZSBmb3IoZSBpbiBnKWdbZV0mJmdbZV0uc3RvcCYmZGIudGVzdChlKSYmZChnW2VdKTtmb3IoZT1mLmxlbmd0aDtlLS07KWZbZV0uZWxlbSE9PXRoaXN8fG51bGwhPWEmJmZbZV0ucXVldWUhPT1hfHwoZltlXS5hbmltLnN0b3AoYyksYj0hMSxmLnNwbGljZShlLDEpKTshYiYmY3x8ci5kZXF1ZXVlKHRoaXMsYSl9KX0sZmluaXNoOmZ1bmN0aW9uKGEpe3JldHVybiBhIT09ITEmJihhPWF8fFwiZnhcIiksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGIsYz1XLmdldCh0aGlzKSxkPWNbYStcInF1ZXVlXCJdLGU9Y1thK1wicXVldWVIb29rc1wiXSxmPXIudGltZXJzLGc9ZD9kLmxlbmd0aDowO2ZvcihjLmZpbmlzaD0hMCxyLnF1ZXVlKHRoaXMsYSxbXSksZSYmZS5zdG9wJiZlLnN0b3AuY2FsbCh0aGlzLCEwKSxiPWYubGVuZ3RoO2ItLTspZltiXS5lbGVtPT09dGhpcyYmZltiXS5xdWV1ZT09PWEmJihmW2JdLmFuaW0uc3RvcCghMCksZi5zcGxpY2UoYiwxKSk7Zm9yKGI9MDtiPGc7YisrKWRbYl0mJmRbYl0uZmluaXNoJiZkW2JdLmZpbmlzaC5jYWxsKHRoaXMpO2RlbGV0ZSBjLmZpbmlzaH0pfX0pLHIuZWFjaChbXCJ0b2dnbGVcIixcInNob3dcIixcImhpZGVcIl0sZnVuY3Rpb24oYSxiKXt2YXIgYz1yLmZuW2JdO3IuZm5bYl09ZnVuY3Rpb24oYSxkLGUpe3JldHVybiBudWxsPT1hfHxcImJvb2xlYW5cIj09dHlwZW9mIGE/Yy5hcHBseSh0aGlzLGFyZ3VtZW50cyk6dGhpcy5hbmltYXRlKGdiKGIsITApLGEsZCxlKX19KSxyLmVhY2goe3NsaWRlRG93bjpnYihcInNob3dcIiksc2xpZGVVcDpnYihcImhpZGVcIiksc2xpZGVUb2dnbGU6Z2IoXCJ0b2dnbGVcIiksZmFkZUluOntvcGFjaXR5Olwic2hvd1wifSxmYWRlT3V0OntvcGFjaXR5OlwiaGlkZVwifSxmYWRlVG9nZ2xlOntvcGFjaXR5OlwidG9nZ2xlXCJ9fSxmdW5jdGlvbihhLGIpe3IuZm5bYV09ZnVuY3Rpb24oYSxjLGQpe3JldHVybiB0aGlzLmFuaW1hdGUoYixhLGMsZCl9fSksci50aW1lcnM9W10sci5meC50aWNrPWZ1bmN0aW9uKCl7dmFyIGEsYj0wLGM9ci50aW1lcnM7Zm9yKGFiPXIubm93KCk7YjxjLmxlbmd0aDtiKyspYT1jW2JdLGEoKXx8Y1tiXSE9PWF8fGMuc3BsaWNlKGItLSwxKTtjLmxlbmd0aHx8ci5meC5zdG9wKCksYWI9dm9pZCAwfSxyLmZ4LnRpbWVyPWZ1bmN0aW9uKGEpe3IudGltZXJzLnB1c2goYSksci5meC5zdGFydCgpfSxyLmZ4LmludGVydmFsPTEzLHIuZnguc3RhcnQ9ZnVuY3Rpb24oKXtiYnx8KGJiPSEwLGViKCkpfSxyLmZ4LnN0b3A9ZnVuY3Rpb24oKXtiYj1udWxsfSxyLmZ4LnNwZWVkcz17c2xvdzo2MDAsZmFzdDoyMDAsX2RlZmF1bHQ6NDAwfSxyLmZuLmRlbGF5PWZ1bmN0aW9uKGIsYyl7cmV0dXJuIGI9ci5meD9yLmZ4LnNwZWVkc1tiXXx8YjpiLGM9Y3x8XCJmeFwiLHRoaXMucXVldWUoYyxmdW5jdGlvbihjLGQpe3ZhciBlPWEuc2V0VGltZW91dChjLGIpO2Quc3RvcD1mdW5jdGlvbigpe2EuY2xlYXJUaW1lb3V0KGUpfX0pfSxmdW5jdGlvbigpe3ZhciBhPWQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGI9ZC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpLGM9Yi5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIikpO2EudHlwZT1cImNoZWNrYm94XCIsby5jaGVja09uPVwiXCIhPT1hLnZhbHVlLG8ub3B0U2VsZWN0ZWQ9Yy5zZWxlY3RlZCxhPWQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGEudmFsdWU9XCJ0XCIsYS50eXBlPVwicmFkaW9cIixvLnJhZGlvVmFsdWU9XCJ0XCI9PT1hLnZhbHVlfSgpO3ZhciBsYixtYj1yLmV4cHIuYXR0ckhhbmRsZTtyLmZuLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihhLGIpe3JldHVybiBUKHRoaXMsci5hdHRyLGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtyLnJlbW92ZUF0dHIodGhpcyxhKX0pfX0pLHIuZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9YS5ub2RlVHlwZTtpZigzIT09ZiYmOCE9PWYmJjIhPT1mKXJldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBhLmdldEF0dHJpYnV0ZT9yLnByb3AoYSxiLGMpOigxPT09ZiYmci5pc1hNTERvYyhhKXx8KGU9ci5hdHRySG9va3NbYi50b0xvd2VyQ2FzZSgpXXx8KHIuZXhwci5tYXRjaC5ib29sLnRlc3QoYik/bGI6dm9pZCAwKSksdm9pZCAwIT09Yz9udWxsPT09Yz92b2lkIHIucmVtb3ZlQXR0cihhLGIpOmUmJlwic2V0XCJpbiBlJiZ2b2lkIDAhPT0oZD1lLnNldChhLGMsYikpP2Q6KGEuc2V0QXR0cmlidXRlKGIsYytcIlwiKSxjKTplJiZcImdldFwiaW4gZSYmbnVsbCE9PShkPWUuZ2V0KGEsYikpP2Q6KGQ9ci5maW5kLmF0dHIoYSxiKSxcbm51bGw9PWQ/dm9pZCAwOmQpKX0sYXR0ckhvb2tzOnt0eXBlOntzZXQ6ZnVuY3Rpb24oYSxiKXtpZighby5yYWRpb1ZhbHVlJiZcInJhZGlvXCI9PT1iJiZCKGEsXCJpbnB1dFwiKSl7dmFyIGM9YS52YWx1ZTtyZXR1cm4gYS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsYiksYyYmKGEudmFsdWU9YyksYn19fX0scmVtb3ZlQXR0cjpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9MCxlPWImJmIubWF0Y2goTCk7aWYoZSYmMT09PWEubm9kZVR5cGUpd2hpbGUoYz1lW2QrK10pYS5yZW1vdmVBdHRyaWJ1dGUoYyl9fSksbGI9e3NldDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGI9PT0hMT9yLnJlbW92ZUF0dHIoYSxjKTphLnNldEF0dHJpYnV0ZShjLGMpLGN9fSxyLmVhY2goci5leHByLm1hdGNoLmJvb2wuc291cmNlLm1hdGNoKC9cXHcrL2cpLGZ1bmN0aW9uKGEsYil7dmFyIGM9bWJbYl18fHIuZmluZC5hdHRyO21iW2JdPWZ1bmN0aW9uKGEsYixkKXt2YXIgZSxmLGc9Yi50b0xvd2VyQ2FzZSgpO3JldHVybiBkfHwoZj1tYltnXSxtYltnXT1lLGU9bnVsbCE9YyhhLGIsZCk/ZzpudWxsLG1iW2ddPWYpLGV9fSk7dmFyIG5iPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksb2I9L14oPzphfGFyZWEpJC9pO3IuZm4uZXh0ZW5kKHtwcm9wOmZ1bmN0aW9uKGEsYil7cmV0dXJuIFQodGhpcyxyLnByb3AsYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHJlbW92ZVByb3A6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe2RlbGV0ZSB0aGlzW3IucHJvcEZpeFthXXx8YV19KX19KSxyLmV4dGVuZCh7cHJvcDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmPWEubm9kZVR5cGU7aWYoMyE9PWYmJjghPT1mJiYyIT09ZilyZXR1cm4gMT09PWYmJnIuaXNYTUxEb2MoYSl8fChiPXIucHJvcEZpeFtiXXx8YixlPXIucHJvcEhvb2tzW2JdKSx2b2lkIDAhPT1jP2UmJlwic2V0XCJpbiBlJiZ2b2lkIDAhPT0oZD1lLnNldChhLGMsYikpP2Q6YVtiXT1jOmUmJlwiZ2V0XCJpbiBlJiZudWxsIT09KGQ9ZS5nZXQoYSxiKSk/ZDphW2JdfSxwcm9wSG9va3M6e3RhYkluZGV4OntnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9ci5maW5kLmF0dHIoYSxcInRhYmluZGV4XCIpO3JldHVybiBiP3BhcnNlSW50KGIsMTApOm5iLnRlc3QoYS5ub2RlTmFtZSl8fG9iLnRlc3QoYS5ub2RlTmFtZSkmJmEuaHJlZj8wOi0xfX19LHByb3BGaXg6e1wiZm9yXCI6XCJodG1sRm9yXCIsXCJjbGFzc1wiOlwiY2xhc3NOYW1lXCJ9fSksby5vcHRTZWxlY3RlZHx8KHIucHJvcEhvb2tzLnNlbGVjdGVkPXtnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5wYXJlbnROb2RlO3JldHVybiBiJiZiLnBhcmVudE5vZGUmJmIucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LG51bGx9LHNldDpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudE5vZGU7YiYmKGIuc2VsZWN0ZWRJbmRleCxiLnBhcmVudE5vZGUmJmIucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4KX19KSxyLmVhY2goW1widGFiSW5kZXhcIixcInJlYWRPbmx5XCIsXCJtYXhMZW5ndGhcIixcImNlbGxTcGFjaW5nXCIsXCJjZWxsUGFkZGluZ1wiLFwicm93U3BhblwiLFwiY29sU3BhblwiLFwidXNlTWFwXCIsXCJmcmFtZUJvcmRlclwiLFwiY29udGVudEVkaXRhYmxlXCJdLGZ1bmN0aW9uKCl7ci5wcm9wRml4W3RoaXMudG9Mb3dlckNhc2UoKV09dGhpc30pO2Z1bmN0aW9uIHBiKGEpe3ZhciBiPWEubWF0Y2goTCl8fFtdO3JldHVybiBiLmpvaW4oXCIgXCIpfWZ1bmN0aW9uIHFiKGEpe3JldHVybiBhLmdldEF0dHJpYnV0ZSYmYS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIn1yLmZuLmV4dGVuZCh7YWRkQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGgsaT0wO2lmKHIuaXNGdW5jdGlvbihhKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGIpe3IodGhpcykuYWRkQ2xhc3MoYS5jYWxsKHRoaXMsYixxYih0aGlzKSkpfSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEmJmEpe2I9YS5tYXRjaChMKXx8W107d2hpbGUoYz10aGlzW2krK10paWYoZT1xYihjKSxkPTE9PT1jLm5vZGVUeXBlJiZcIiBcIitwYihlKStcIiBcIil7Zz0wO3doaWxlKGY9YltnKytdKWQuaW5kZXhPZihcIiBcIitmK1wiIFwiKTwwJiYoZCs9ZitcIiBcIik7aD1wYihkKSxlIT09aCYmYy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGgpfX1yZXR1cm4gdGhpc30scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGgsaT0wO2lmKHIuaXNGdW5jdGlvbihhKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGIpe3IodGhpcykucmVtb3ZlQ2xhc3MoYS5jYWxsKHRoaXMsYixxYih0aGlzKSkpfSk7aWYoIWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHRoaXMuYXR0cihcImNsYXNzXCIsXCJcIik7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEmJmEpe2I9YS5tYXRjaChMKXx8W107d2hpbGUoYz10aGlzW2krK10paWYoZT1xYihjKSxkPTE9PT1jLm5vZGVUeXBlJiZcIiBcIitwYihlKStcIiBcIil7Zz0wO3doaWxlKGY9YltnKytdKXdoaWxlKGQuaW5kZXhPZihcIiBcIitmK1wiIFwiKT4tMSlkPWQucmVwbGFjZShcIiBcIitmK1wiIFwiLFwiIFwiKTtoPXBiKGQpLGUhPT1oJiZjLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsaCl9fXJldHVybiB0aGlzfSx0b2dnbGVDbGFzczpmdW5jdGlvbihhLGIpe3ZhciBjPXR5cGVvZiBhO3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgYiYmXCJzdHJpbmdcIj09PWM/Yj90aGlzLmFkZENsYXNzKGEpOnRoaXMucmVtb3ZlQ2xhc3MoYSk6ci5pc0Z1bmN0aW9uKGEpP3RoaXMuZWFjaChmdW5jdGlvbihjKXtyKHRoaXMpLnRvZ2dsZUNsYXNzKGEuY2FsbCh0aGlzLGMscWIodGhpcyksYiksYil9KTp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYixkLGUsZjtpZihcInN0cmluZ1wiPT09Yyl7ZD0wLGU9cih0aGlzKSxmPWEubWF0Y2goTCl8fFtdO3doaWxlKGI9ZltkKytdKWUuaGFzQ2xhc3MoYik/ZS5yZW1vdmVDbGFzcyhiKTplLmFkZENsYXNzKGIpfWVsc2Ugdm9pZCAwIT09YSYmXCJib29sZWFuXCIhPT1jfHwoYj1xYih0aGlzKSxiJiZXLnNldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiLGIpLHRoaXMuc2V0QXR0cmlidXRlJiZ0aGlzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsYnx8YT09PSExP1wiXCI6Vy5nZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIil8fFwiXCIpKX0pfSxoYXNDbGFzczpmdW5jdGlvbihhKXt2YXIgYixjLGQ9MDtiPVwiIFwiK2ErXCIgXCI7d2hpbGUoYz10aGlzW2QrK10paWYoMT09PWMubm9kZVR5cGUmJihcIiBcIitwYihxYihjKSkrXCIgXCIpLmluZGV4T2YoYik+LTEpcmV0dXJuITA7cmV0dXJuITF9fSk7dmFyIHJiPS9cXHIvZztyLmZuLmV4dGVuZCh7dmFsOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlPXRoaXNbMF07e2lmKGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIGQ9ci5pc0Z1bmN0aW9uKGEpLHRoaXMuZWFjaChmdW5jdGlvbihjKXt2YXIgZTsxPT09dGhpcy5ub2RlVHlwZSYmKGU9ZD9hLmNhbGwodGhpcyxjLHIodGhpcykudmFsKCkpOmEsbnVsbD09ZT9lPVwiXCI6XCJudW1iZXJcIj09dHlwZW9mIGU/ZSs9XCJcIjpBcnJheS5pc0FycmF5KGUpJiYoZT1yLm1hcChlLGZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP1wiXCI6YStcIlwifSkpLGI9ci52YWxIb29rc1t0aGlzLnR5cGVdfHxyLnZhbEhvb2tzW3RoaXMubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0sYiYmXCJzZXRcImluIGImJnZvaWQgMCE9PWIuc2V0KHRoaXMsZSxcInZhbHVlXCIpfHwodGhpcy52YWx1ZT1lKSl9KTtpZihlKXJldHVybiBiPXIudmFsSG9va3NbZS50eXBlXXx8ci52YWxIb29rc1tlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldLGImJlwiZ2V0XCJpbiBiJiZ2b2lkIDAhPT0oYz1iLmdldChlLFwidmFsdWVcIikpP2M6KGM9ZS52YWx1ZSxcInN0cmluZ1wiPT10eXBlb2YgYz9jLnJlcGxhY2UocmIsXCJcIik6bnVsbD09Yz9cIlwiOmMpfX19KSxyLmV4dGVuZCh7dmFsSG9va3M6e29wdGlvbjp7Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiPXIuZmluZC5hdHRyKGEsXCJ2YWx1ZVwiKTtyZXR1cm4gbnVsbCE9Yj9iOnBiKHIudGV4dChhKSl9fSxzZWxlY3Q6e2dldDpmdW5jdGlvbihhKXt2YXIgYixjLGQsZT1hLm9wdGlvbnMsZj1hLnNlbGVjdGVkSW5kZXgsZz1cInNlbGVjdC1vbmVcIj09PWEudHlwZSxoPWc/bnVsbDpbXSxpPWc/ZisxOmUubGVuZ3RoO2ZvcihkPWY8MD9pOmc/ZjowO2Q8aTtkKyspaWYoYz1lW2RdLChjLnNlbGVjdGVkfHxkPT09ZikmJiFjLmRpc2FibGVkJiYoIWMucGFyZW50Tm9kZS5kaXNhYmxlZHx8IUIoYy5wYXJlbnROb2RlLFwib3B0Z3JvdXBcIikpKXtpZihiPXIoYykudmFsKCksZylyZXR1cm4gYjtoLnB1c2goYil9cmV0dXJuIGh9LHNldDpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZT1hLm9wdGlvbnMsZj1yLm1ha2VBcnJheShiKSxnPWUubGVuZ3RoO3doaWxlKGctLSlkPWVbZ10sKGQuc2VsZWN0ZWQ9ci5pbkFycmF5KHIudmFsSG9va3Mub3B0aW9uLmdldChkKSxmKT4tMSkmJihjPSEwKTtyZXR1cm4gY3x8KGEuc2VsZWN0ZWRJbmRleD0tMSksZn19fX0pLHIuZWFjaChbXCJyYWRpb1wiLFwiY2hlY2tib3hcIl0sZnVuY3Rpb24oKXtyLnZhbEhvb2tzW3RoaXNdPXtzZXQ6ZnVuY3Rpb24oYSxiKXtpZihBcnJheS5pc0FycmF5KGIpKXJldHVybiBhLmNoZWNrZWQ9ci5pbkFycmF5KHIoYSkudmFsKCksYik+LTF9fSxvLmNoZWNrT258fChyLnZhbEhvb2tzW3RoaXNdLmdldD1mdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09PWEuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik/XCJvblwiOmEudmFsdWV9KX0pO3ZhciBzYj0vXig/OmZvY3VzaW5mb2N1c3xmb2N1c291dGJsdXIpJC87ci5leHRlbmQoci5ldmVudCx7dHJpZ2dlcjpmdW5jdGlvbihiLGMsZSxmKXt2YXIgZyxoLGksaixrLG0sbixvPVtlfHxkXSxwPWwuY2FsbChiLFwidHlwZVwiKT9iLnR5cGU6YixxPWwuY2FsbChiLFwibmFtZXNwYWNlXCIpP2IubmFtZXNwYWNlLnNwbGl0KFwiLlwiKTpbXTtpZihoPWk9ZT1lfHxkLDMhPT1lLm5vZGVUeXBlJiY4IT09ZS5ub2RlVHlwZSYmIXNiLnRlc3QocCtyLmV2ZW50LnRyaWdnZXJlZCkmJihwLmluZGV4T2YoXCIuXCIpPi0xJiYocT1wLnNwbGl0KFwiLlwiKSxwPXEuc2hpZnQoKSxxLnNvcnQoKSksaz1wLmluZGV4T2YoXCI6XCIpPDAmJlwib25cIitwLGI9YltyLmV4cGFuZG9dP2I6bmV3IHIuRXZlbnQocCxcIm9iamVjdFwiPT10eXBlb2YgYiYmYiksYi5pc1RyaWdnZXI9Zj8yOjMsYi5uYW1lc3BhY2U9cS5qb2luKFwiLlwiKSxiLnJuYW1lc3BhY2U9Yi5uYW1lc3BhY2U/bmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK3Euam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpOm51bGwsYi5yZXN1bHQ9dm9pZCAwLGIudGFyZ2V0fHwoYi50YXJnZXQ9ZSksYz1udWxsPT1jP1tiXTpyLm1ha2VBcnJheShjLFtiXSksbj1yLmV2ZW50LnNwZWNpYWxbcF18fHt9LGZ8fCFuLnRyaWdnZXJ8fG4udHJpZ2dlci5hcHBseShlLGMpIT09ITEpKXtpZighZiYmIW4ubm9CdWJibGUmJiFyLmlzV2luZG93KGUpKXtmb3Ioaj1uLmRlbGVnYXRlVHlwZXx8cCxzYi50ZXN0KGorcCl8fChoPWgucGFyZW50Tm9kZSk7aDtoPWgucGFyZW50Tm9kZSlvLnB1c2goaCksaT1oO2k9PT0oZS5vd25lckRvY3VtZW50fHxkKSYmby5wdXNoKGkuZGVmYXVsdFZpZXd8fGkucGFyZW50V2luZG93fHxhKX1nPTA7d2hpbGUoKGg9b1tnKytdKSYmIWIuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSliLnR5cGU9Zz4xP2o6bi5iaW5kVHlwZXx8cCxtPShXLmdldChoLFwiZXZlbnRzXCIpfHx7fSlbYi50eXBlXSYmVy5nZXQoaCxcImhhbmRsZVwiKSxtJiZtLmFwcGx5KGgsYyksbT1rJiZoW2tdLG0mJm0uYXBwbHkmJlUoaCkmJihiLnJlc3VsdD1tLmFwcGx5KGgsYyksYi5yZXN1bHQ9PT0hMSYmYi5wcmV2ZW50RGVmYXVsdCgpKTtyZXR1cm4gYi50eXBlPXAsZnx8Yi5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8bi5fZGVmYXVsdCYmbi5fZGVmYXVsdC5hcHBseShvLnBvcCgpLGMpIT09ITF8fCFVKGUpfHxrJiZyLmlzRnVuY3Rpb24oZVtwXSkmJiFyLmlzV2luZG93KGUpJiYoaT1lW2tdLGkmJihlW2tdPW51bGwpLHIuZXZlbnQudHJpZ2dlcmVkPXAsZVtwXSgpLHIuZXZlbnQudHJpZ2dlcmVkPXZvaWQgMCxpJiYoZVtrXT1pKSksYi5yZXN1bHR9fSxzaW11bGF0ZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9ci5leHRlbmQobmV3IHIuRXZlbnQsYyx7dHlwZTphLGlzU2ltdWxhdGVkOiEwfSk7ci5ldmVudC50cmlnZ2VyKGQsbnVsbCxiKX19KSxyLmZuLmV4dGVuZCh7dHJpZ2dlcjpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtyLmV2ZW50LnRyaWdnZXIoYSxiLHRoaXMpfSl9LHRyaWdnZXJIYW5kbGVyOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpc1swXTtpZihjKXJldHVybiByLmV2ZW50LnRyaWdnZXIoYSxiLGMsITApfX0pLHIuZWFjaChcImJsdXIgZm9jdXMgZm9jdXNpbiBmb2N1c291dCByZXNpemUgc2Nyb2xsIGNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZXVwIG1vdXNlbW92ZSBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlIGNoYW5nZSBzZWxlY3Qgc3VibWl0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgY29udGV4dG1lbnVcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oYSxiKXtyLmZuW2JdPWZ1bmN0aW9uKGEsYyl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg+MD90aGlzLm9uKGIsbnVsbCxhLGMpOnRoaXMudHJpZ2dlcihiKX19KSxyLmZuLmV4dGVuZCh7aG92ZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5tb3VzZWVudGVyKGEpLm1vdXNlbGVhdmUoYnx8YSl9fSksby5mb2N1c2luPVwib25mb2N1c2luXCJpbiBhLG8uZm9jdXNpbnx8ci5lYWNoKHtmb2N1czpcImZvY3VzaW5cIixibHVyOlwiZm9jdXNvdXRcIn0sZnVuY3Rpb24oYSxiKXt2YXIgYz1mdW5jdGlvbihhKXtyLmV2ZW50LnNpbXVsYXRlKGIsYS50YXJnZXQsci5ldmVudC5maXgoYSkpfTtyLmV2ZW50LnNwZWNpYWxbYl09e3NldHVwOmZ1bmN0aW9uKCl7dmFyIGQ9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLGU9Vy5hY2Nlc3MoZCxiKTtlfHxkLmFkZEV2ZW50TGlzdGVuZXIoYSxjLCEwKSxXLmFjY2VzcyhkLGIsKGV8fDApKzEpfSx0ZWFyZG93bjpmdW5jdGlvbigpe3ZhciBkPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcyxlPVcuYWNjZXNzKGQsYiktMTtlP1cuYWNjZXNzKGQsYixlKTooZC5yZW1vdmVFdmVudExpc3RlbmVyKGEsYywhMCksVy5yZW1vdmUoZCxiKSl9fX0pO3ZhciB0Yj1hLmxvY2F0aW9uLHViPXIubm93KCksdmI9L1xcPy87ci5wYXJzZVhNTD1mdW5jdGlvbihiKXt2YXIgYztpZighYnx8XCJzdHJpbmdcIiE9dHlwZW9mIGIpcmV0dXJuIG51bGw7dHJ5e2M9KG5ldyBhLkRPTVBhcnNlcikucGFyc2VGcm9tU3RyaW5nKGIsXCJ0ZXh0L3htbFwiKX1jYXRjaChkKXtjPXZvaWQgMH1yZXR1cm4gYyYmIWMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwYXJzZXJlcnJvclwiKS5sZW5ndGh8fHIuZXJyb3IoXCJJbnZhbGlkIFhNTDogXCIrYiksY307dmFyIHdiPS9cXFtcXF0kLyx4Yj0vXFxyP1xcbi9nLHliPS9eKD86c3VibWl0fGJ1dHRvbnxpbWFnZXxyZXNldHxmaWxlKSQvaSx6Yj0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxrZXlnZW4pL2k7ZnVuY3Rpb24gQWIoYSxiLGMsZCl7dmFyIGU7aWYoQXJyYXkuaXNBcnJheShiKSlyLmVhY2goYixmdW5jdGlvbihiLGUpe2N8fHdiLnRlc3QoYSk/ZChhLGUpOkFiKGErXCJbXCIrKFwib2JqZWN0XCI9PXR5cGVvZiBlJiZudWxsIT1lP2I6XCJcIikrXCJdXCIsZSxjLGQpfSk7ZWxzZSBpZihjfHxcIm9iamVjdFwiIT09ci50eXBlKGIpKWQoYSxiKTtlbHNlIGZvcihlIGluIGIpQWIoYStcIltcIitlK1wiXVwiLGJbZV0sYyxkKX1yLnBhcmFtPWZ1bmN0aW9uKGEsYil7dmFyIGMsZD1bXSxlPWZ1bmN0aW9uKGEsYil7dmFyIGM9ci5pc0Z1bmN0aW9uKGIpP2IoKTpiO2RbZC5sZW5ndGhdPWVuY29kZVVSSUNvbXBvbmVudChhKStcIj1cIitlbmNvZGVVUklDb21wb25lbnQobnVsbD09Yz9cIlwiOmMpfTtpZihBcnJheS5pc0FycmF5KGEpfHxhLmpxdWVyeSYmIXIuaXNQbGFpbk9iamVjdChhKSlyLmVhY2goYSxmdW5jdGlvbigpe2UodGhpcy5uYW1lLHRoaXMudmFsdWUpfSk7ZWxzZSBmb3IoYyBpbiBhKUFiKGMsYVtjXSxiLGUpO3JldHVybiBkLmpvaW4oXCImXCIpfSxyLmZuLmV4dGVuZCh7c2VyaWFsaXplOmZ1bmN0aW9uKCl7cmV0dXJuIHIucGFyYW0odGhpcy5zZXJpYWxpemVBcnJheSgpKX0sc2VyaWFsaXplQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgYT1yLnByb3AodGhpcyxcImVsZW1lbnRzXCIpO3JldHVybiBhP3IubWFrZUFycmF5KGEpOnRoaXN9KS5maWx0ZXIoZnVuY3Rpb24oKXt2YXIgYT10aGlzLnR5cGU7cmV0dXJuIHRoaXMubmFtZSYmIXIodGhpcykuaXMoXCI6ZGlzYWJsZWRcIikmJnpiLnRlc3QodGhpcy5ub2RlTmFtZSkmJiF5Yi50ZXN0KGEpJiYodGhpcy5jaGVja2VkfHwhamEudGVzdChhKSl9KS5tYXAoZnVuY3Rpb24oYSxiKXt2YXIgYz1yKHRoaXMpLnZhbCgpO3JldHVybiBudWxsPT1jP251bGw6QXJyYXkuaXNBcnJheShjKT9yLm1hcChjLGZ1bmN0aW9uKGEpe3JldHVybntuYW1lOmIubmFtZSx2YWx1ZTphLnJlcGxhY2UoeGIsXCJcXHJcXG5cIil9fSk6e25hbWU6Yi5uYW1lLHZhbHVlOmMucmVwbGFjZSh4YixcIlxcclxcblwiKX19KS5nZXQoKX19KTt2YXIgQmI9LyUyMC9nLENiPS8jLiokLyxEYj0vKFs/Jl0pXz1bXiZdKi8sRWI9L14oLio/KTpbIFxcdF0qKFteXFxyXFxuXSopJC9nbSxGYj0vXig/OmFib3V0fGFwcHxhcHAtc3RvcmFnZXwuKy1leHRlbnNpb258ZmlsZXxyZXN8d2lkZ2V0KTokLyxHYj0vXig/OkdFVHxIRUFEKSQvLEhiPS9eXFwvXFwvLyxJYj17fSxKYj17fSxLYj1cIiovXCIuY29uY2F0KFwiKlwiKSxMYj1kLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO0xiLmhyZWY9dGIuaHJlZjtmdW5jdGlvbiBNYihhKXtyZXR1cm4gZnVuY3Rpb24oYixjKXtcInN0cmluZ1wiIT10eXBlb2YgYiYmKGM9YixiPVwiKlwiKTt2YXIgZCxlPTAsZj1iLnRvTG93ZXJDYXNlKCkubWF0Y2goTCl8fFtdO2lmKHIuaXNGdW5jdGlvbihjKSl3aGlsZShkPWZbZSsrXSlcIitcIj09PWRbMF0/KGQ9ZC5zbGljZSgxKXx8XCIqXCIsKGFbZF09YVtkXXx8W10pLnVuc2hpZnQoYykpOihhW2RdPWFbZF18fFtdKS5wdXNoKGMpfX1mdW5jdGlvbiBOYihhLGIsYyxkKXt2YXIgZT17fSxmPWE9PT1KYjtmdW5jdGlvbiBnKGgpe3ZhciBpO3JldHVybiBlW2hdPSEwLHIuZWFjaChhW2hdfHxbXSxmdW5jdGlvbihhLGgpe3ZhciBqPWgoYixjLGQpO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBqfHxmfHxlW2pdP2Y/IShpPWopOnZvaWQgMDooYi5kYXRhVHlwZXMudW5zaGlmdChqKSxnKGopLCExKX0pLGl9cmV0dXJuIGcoYi5kYXRhVHlwZXNbMF0pfHwhZVtcIipcIl0mJmcoXCIqXCIpfWZ1bmN0aW9uIE9iKGEsYil7dmFyIGMsZCxlPXIuYWpheFNldHRpbmdzLmZsYXRPcHRpb25zfHx7fTtmb3IoYyBpbiBiKXZvaWQgMCE9PWJbY10mJigoZVtjXT9hOmR8fChkPXt9KSlbY109YltjXSk7cmV0dXJuIGQmJnIuZXh0ZW5kKCEwLGEsZCksYX1mdW5jdGlvbiBQYihhLGIsYyl7dmFyIGQsZSxmLGcsaD1hLmNvbnRlbnRzLGk9YS5kYXRhVHlwZXM7d2hpbGUoXCIqXCI9PT1pWzBdKWkuc2hpZnQoKSx2b2lkIDA9PT1kJiYoZD1hLm1pbWVUeXBlfHxiLmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1UeXBlXCIpKTtpZihkKWZvcihlIGluIGgpaWYoaFtlXSYmaFtlXS50ZXN0KGQpKXtpLnVuc2hpZnQoZSk7YnJlYWt9aWYoaVswXWluIGMpZj1pWzBdO2Vsc2V7Zm9yKGUgaW4gYyl7aWYoIWlbMF18fGEuY29udmVydGVyc1tlK1wiIFwiK2lbMF1dKXtmPWU7YnJlYWt9Z3x8KGc9ZSl9Zj1mfHxnfWlmKGYpcmV0dXJuIGYhPT1pWzBdJiZpLnVuc2hpZnQoZiksY1tmXX1mdW5jdGlvbiBRYihhLGIsYyxkKXt2YXIgZSxmLGcsaCxpLGo9e30saz1hLmRhdGFUeXBlcy5zbGljZSgpO2lmKGtbMV0pZm9yKGcgaW4gYS5jb252ZXJ0ZXJzKWpbZy50b0xvd2VyQ2FzZSgpXT1hLmNvbnZlcnRlcnNbZ107Zj1rLnNoaWZ0KCk7d2hpbGUoZilpZihhLnJlc3BvbnNlRmllbGRzW2ZdJiYoY1thLnJlc3BvbnNlRmllbGRzW2ZdXT1iKSwhaSYmZCYmYS5kYXRhRmlsdGVyJiYoYj1hLmRhdGFGaWx0ZXIoYixhLmRhdGFUeXBlKSksaT1mLGY9ay5zaGlmdCgpKWlmKFwiKlwiPT09ZilmPWk7ZWxzZSBpZihcIipcIiE9PWkmJmkhPT1mKXtpZihnPWpbaStcIiBcIitmXXx8altcIiogXCIrZl0sIWcpZm9yKGUgaW4gailpZihoPWUuc3BsaXQoXCIgXCIpLGhbMV09PT1mJiYoZz1qW2krXCIgXCIraFswXV18fGpbXCIqIFwiK2hbMF1dKSl7Zz09PSEwP2c9altlXTpqW2VdIT09ITAmJihmPWhbMF0say51bnNoaWZ0KGhbMV0pKTticmVha31pZihnIT09ITApaWYoZyYmYVtcInRocm93c1wiXSliPWcoYik7ZWxzZSB0cnl7Yj1nKGIpfWNhdGNoKGwpe3JldHVybntzdGF0ZTpcInBhcnNlcmVycm9yXCIsZXJyb3I6Zz9sOlwiTm8gY29udmVyc2lvbiBmcm9tIFwiK2krXCIgdG8gXCIrZn19fXJldHVybntzdGF0ZTpcInN1Y2Nlc3NcIixkYXRhOmJ9fXIuZXh0ZW5kKHthY3RpdmU6MCxsYXN0TW9kaWZpZWQ6e30sZXRhZzp7fSxhamF4U2V0dGluZ3M6e3VybDp0Yi5ocmVmLHR5cGU6XCJHRVRcIixpc0xvY2FsOkZiLnRlc3QodGIucHJvdG9jb2wpLGdsb2JhbDohMCxwcm9jZXNzRGF0YTohMCxhc3luYzohMCxjb250ZW50VHlwZTpcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOFwiLGFjY2VwdHM6e1wiKlwiOktiLHRleHQ6XCJ0ZXh0L3BsYWluXCIsaHRtbDpcInRleHQvaHRtbFwiLHhtbDpcImFwcGxpY2F0aW9uL3htbCwgdGV4dC94bWxcIixqc29uOlwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0XCJ9LGNvbnRlbnRzOnt4bWw6L1xcYnhtbFxcYi8saHRtbDovXFxiaHRtbC8sanNvbjovXFxianNvblxcYi99LHJlc3BvbnNlRmllbGRzOnt4bWw6XCJyZXNwb25zZVhNTFwiLHRleHQ6XCJyZXNwb25zZVRleHRcIixqc29uOlwicmVzcG9uc2VKU09OXCJ9LGNvbnZlcnRlcnM6e1wiKiB0ZXh0XCI6U3RyaW5nLFwidGV4dCBodG1sXCI6ITAsXCJ0ZXh0IGpzb25cIjpKU09OLnBhcnNlLFwidGV4dCB4bWxcIjpyLnBhcnNlWE1MfSxmbGF0T3B0aW9uczp7dXJsOiEwLGNvbnRleHQ6ITB9fSxhamF4U2V0dXA6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYj9PYihPYihhLHIuYWpheFNldHRpbmdzKSxiKTpPYihyLmFqYXhTZXR0aW5ncyxhKX0sYWpheFByZWZpbHRlcjpNYihJYiksYWpheFRyYW5zcG9ydDpNYihKYiksYWpheDpmdW5jdGlvbihiLGMpe1wib2JqZWN0XCI9PXR5cGVvZiBiJiYoYz1iLGI9dm9pZCAwKSxjPWN8fHt9O3ZhciBlLGYsZyxoLGksaixrLGwsbSxuLG89ci5hamF4U2V0dXAoe30sYykscD1vLmNvbnRleHR8fG8scT1vLmNvbnRleHQmJihwLm5vZGVUeXBlfHxwLmpxdWVyeSk/cihwKTpyLmV2ZW50LHM9ci5EZWZlcnJlZCgpLHQ9ci5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSx1PW8uc3RhdHVzQ29kZXx8e30sdj17fSx3PXt9LHg9XCJjYW5jZWxlZFwiLHk9e3JlYWR5U3RhdGU6MCxnZXRSZXNwb25zZUhlYWRlcjpmdW5jdGlvbihhKXt2YXIgYjtpZihrKXtpZighaCl7aD17fTt3aGlsZShiPUViLmV4ZWMoZykpaFtiWzFdLnRvTG93ZXJDYXNlKCldPWJbMl19Yj1oW2EudG9Mb3dlckNhc2UoKV19cmV0dXJuIG51bGw9PWI/bnVsbDpifSxnZXRBbGxSZXNwb25zZUhlYWRlcnM6ZnVuY3Rpb24oKXtyZXR1cm4gaz9nOm51bGx9LHNldFJlcXVlc3RIZWFkZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbnVsbD09ayYmKGE9d1thLnRvTG93ZXJDYXNlKCldPXdbYS50b0xvd2VyQ2FzZSgpXXx8YSx2W2FdPWIpLHRoaXN9LG92ZXJyaWRlTWltZVR5cGU6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWsmJihvLm1pbWVUeXBlPWEpLHRoaXN9LHN0YXR1c0NvZGU6ZnVuY3Rpb24oYSl7dmFyIGI7aWYoYSlpZihrKXkuYWx3YXlzKGFbeS5zdGF0dXNdKTtlbHNlIGZvcihiIGluIGEpdVtiXT1bdVtiXSxhW2JdXTtyZXR1cm4gdGhpc30sYWJvcnQ6ZnVuY3Rpb24oYSl7dmFyIGI9YXx8eDtyZXR1cm4gZSYmZS5hYm9ydChiKSxBKDAsYiksdGhpc319O2lmKHMucHJvbWlzZSh5KSxvLnVybD0oKGJ8fG8udXJsfHx0Yi5ocmVmKStcIlwiKS5yZXBsYWNlKEhiLHRiLnByb3RvY29sK1wiLy9cIiksby50eXBlPWMubWV0aG9kfHxjLnR5cGV8fG8ubWV0aG9kfHxvLnR5cGUsby5kYXRhVHlwZXM9KG8uZGF0YVR5cGV8fFwiKlwiKS50b0xvd2VyQ2FzZSgpLm1hdGNoKEwpfHxbXCJcIl0sbnVsbD09by5jcm9zc0RvbWFpbil7aj1kLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO3RyeXtqLmhyZWY9by51cmwsai5ocmVmPWouaHJlZixvLmNyb3NzRG9tYWluPUxiLnByb3RvY29sK1wiLy9cIitMYi5ob3N0IT1qLnByb3RvY29sK1wiLy9cIitqLmhvc3R9Y2F0Y2goeil7by5jcm9zc0RvbWFpbj0hMH19aWYoby5kYXRhJiZvLnByb2Nlc3NEYXRhJiZcInN0cmluZ1wiIT10eXBlb2Ygby5kYXRhJiYoby5kYXRhPXIucGFyYW0oby5kYXRhLG8udHJhZGl0aW9uYWwpKSxOYihJYixvLGMseSksaylyZXR1cm4geTtsPXIuZXZlbnQmJm8uZ2xvYmFsLGwmJjA9PT1yLmFjdGl2ZSsrJiZyLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RhcnRcIiksby50eXBlPW8udHlwZS50b1VwcGVyQ2FzZSgpLG8uaGFzQ29udGVudD0hR2IudGVzdChvLnR5cGUpLGY9by51cmwucmVwbGFjZShDYixcIlwiKSxvLmhhc0NvbnRlbnQ/by5kYXRhJiZvLnByb2Nlc3NEYXRhJiYwPT09KG8uY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJihvLmRhdGE9by5kYXRhLnJlcGxhY2UoQmIsXCIrXCIpKToobj1vLnVybC5zbGljZShmLmxlbmd0aCksby5kYXRhJiYoZis9KHZiLnRlc3QoZik/XCImXCI6XCI/XCIpK28uZGF0YSxkZWxldGUgby5kYXRhKSxvLmNhY2hlPT09ITEmJihmPWYucmVwbGFjZShEYixcIiQxXCIpLG49KHZiLnRlc3QoZik/XCImXCI6XCI/XCIpK1wiXz1cIit1YisrICtuKSxvLnVybD1mK24pLG8uaWZNb2RpZmllZCYmKHIubGFzdE1vZGlmaWVkW2ZdJiZ5LnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Nb2RpZmllZC1TaW5jZVwiLHIubGFzdE1vZGlmaWVkW2ZdKSxyLmV0YWdbZl0mJnkuc2V0UmVxdWVzdEhlYWRlcihcIklmLU5vbmUtTWF0Y2hcIixyLmV0YWdbZl0pKSwoby5kYXRhJiZvLmhhc0NvbnRlbnQmJm8uY29udGVudFR5cGUhPT0hMXx8Yy5jb250ZW50VHlwZSkmJnkuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLG8uY29udGVudFR5cGUpLHkuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLG8uZGF0YVR5cGVzWzBdJiZvLmFjY2VwdHNbby5kYXRhVHlwZXNbMF1dP28uYWNjZXB0c1tvLmRhdGFUeXBlc1swXV0rKFwiKlwiIT09by5kYXRhVHlwZXNbMF0/XCIsIFwiK0tiK1wiOyBxPTAuMDFcIjpcIlwiKTpvLmFjY2VwdHNbXCIqXCJdKTtmb3IobSBpbiBvLmhlYWRlcnMpeS5zZXRSZXF1ZXN0SGVhZGVyKG0sby5oZWFkZXJzW21dKTtpZihvLmJlZm9yZVNlbmQmJihvLmJlZm9yZVNlbmQuY2FsbChwLHksbyk9PT0hMXx8aykpcmV0dXJuIHkuYWJvcnQoKTtpZih4PVwiYWJvcnRcIix0LmFkZChvLmNvbXBsZXRlKSx5LmRvbmUoby5zdWNjZXNzKSx5LmZhaWwoby5lcnJvciksZT1OYihKYixvLGMseSkpe2lmKHkucmVhZHlTdGF0ZT0xLGwmJnEudHJpZ2dlcihcImFqYXhTZW5kXCIsW3ksb10pLGspcmV0dXJuIHk7by5hc3luYyYmby50aW1lb3V0PjAmJihpPWEuc2V0VGltZW91dChmdW5jdGlvbigpe3kuYWJvcnQoXCJ0aW1lb3V0XCIpfSxvLnRpbWVvdXQpKTt0cnl7az0hMSxlLnNlbmQodixBKX1jYXRjaCh6KXtpZihrKXRocm93IHo7QSgtMSx6KX19ZWxzZSBBKC0xLFwiTm8gVHJhbnNwb3J0XCIpO2Z1bmN0aW9uIEEoYixjLGQsaCl7dmFyIGosbSxuLHYsdyx4PWM7a3x8KGs9ITAsaSYmYS5jbGVhclRpbWVvdXQoaSksZT12b2lkIDAsZz1ofHxcIlwiLHkucmVhZHlTdGF0ZT1iPjA/NDowLGo9Yj49MjAwJiZiPDMwMHx8MzA0PT09YixkJiYodj1QYihvLHksZCkpLHY9UWIobyx2LHksaiksaj8oby5pZk1vZGlmaWVkJiYodz15LmdldFJlc3BvbnNlSGVhZGVyKFwiTGFzdC1Nb2RpZmllZFwiKSx3JiYoci5sYXN0TW9kaWZpZWRbZl09dyksdz15LmdldFJlc3BvbnNlSGVhZGVyKFwiZXRhZ1wiKSx3JiYoci5ldGFnW2ZdPXcpKSwyMDQ9PT1ifHxcIkhFQURcIj09PW8udHlwZT94PVwibm9jb250ZW50XCI6MzA0PT09Yj94PVwibm90bW9kaWZpZWRcIjooeD12LnN0YXRlLG09di5kYXRhLG49di5lcnJvcixqPSFuKSk6KG49eCwhYiYmeHx8KHg9XCJlcnJvclwiLGI8MCYmKGI9MCkpKSx5LnN0YXR1cz1iLHkuc3RhdHVzVGV4dD0oY3x8eCkrXCJcIixqP3MucmVzb2x2ZVdpdGgocCxbbSx4LHldKTpzLnJlamVjdFdpdGgocCxbeSx4LG5dKSx5LnN0YXR1c0NvZGUodSksdT12b2lkIDAsbCYmcS50cmlnZ2VyKGo/XCJhamF4U3VjY2Vzc1wiOlwiYWpheEVycm9yXCIsW3ksbyxqP206bl0pLHQuZmlyZVdpdGgocCxbeSx4XSksbCYmKHEudHJpZ2dlcihcImFqYXhDb21wbGV0ZVwiLFt5LG9dKSwtLXIuYWN0aXZlfHxyLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RvcFwiKSkpfXJldHVybiB5fSxnZXRKU09OOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gci5nZXQoYSxiLGMsXCJqc29uXCIpfSxnZXRTY3JpcHQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gci5nZXQoYSx2b2lkIDAsYixcInNjcmlwdFwiKX19KSxyLmVhY2goW1wiZ2V0XCIsXCJwb3N0XCJdLGZ1bmN0aW9uKGEsYil7cltiXT1mdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gci5pc0Z1bmN0aW9uKGMpJiYoZT1lfHxkLGQ9YyxjPXZvaWQgMCksci5hamF4KHIuZXh0ZW5kKHt1cmw6YSx0eXBlOmIsZGF0YVR5cGU6ZSxkYXRhOmMsc3VjY2VzczpkfSxyLmlzUGxhaW5PYmplY3QoYSkmJmEpKX19KSxyLl9ldmFsVXJsPWZ1bmN0aW9uKGEpe3JldHVybiByLmFqYXgoe3VybDphLHR5cGU6XCJHRVRcIixkYXRhVHlwZTpcInNjcmlwdFwiLGNhY2hlOiEwLGFzeW5jOiExLGdsb2JhbDohMSxcInRocm93c1wiOiEwfSl9LHIuZm4uZXh0ZW5kKHt3cmFwQWxsOmZ1bmN0aW9uKGEpe3ZhciBiO3JldHVybiB0aGlzWzBdJiYoci5pc0Z1bmN0aW9uKGEpJiYoYT1hLmNhbGwodGhpc1swXSkpLGI9cihhLHRoaXNbMF0ub3duZXJEb2N1bWVudCkuZXEoMCkuY2xvbmUoITApLHRoaXNbMF0ucGFyZW50Tm9kZSYmYi5pbnNlcnRCZWZvcmUodGhpc1swXSksYi5tYXAoZnVuY3Rpb24oKXt2YXIgYT10aGlzO3doaWxlKGEuZmlyc3RFbGVtZW50Q2hpbGQpYT1hLmZpcnN0RWxlbWVudENoaWxkO3JldHVybiBhfSkuYXBwZW5kKHRoaXMpKSx0aGlzfSx3cmFwSW5uZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIHIuaXNGdW5jdGlvbihhKT90aGlzLmVhY2goZnVuY3Rpb24oYil7cih0aGlzKS53cmFwSW5uZXIoYS5jYWxsKHRoaXMsYikpfSk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9cih0aGlzKSxjPWIuY29udGVudHMoKTtjLmxlbmd0aD9jLndyYXBBbGwoYSk6Yi5hcHBlbmQoYSl9KX0sd3JhcDpmdW5jdGlvbihhKXt2YXIgYj1yLmlzRnVuY3Rpb24oYSk7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihjKXtyKHRoaXMpLndyYXBBbGwoYj9hLmNhbGwodGhpcyxjKTphKX0pfSx1bndyYXA6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucGFyZW50KGEpLm5vdChcImJvZHlcIikuZWFjaChmdW5jdGlvbigpe3IodGhpcykucmVwbGFjZVdpdGgodGhpcy5jaGlsZE5vZGVzKX0pLHRoaXN9fSksci5leHByLnBzZXVkb3MuaGlkZGVuPWZ1bmN0aW9uKGEpe3JldHVybiFyLmV4cHIucHNldWRvcy52aXNpYmxlKGEpfSxyLmV4cHIucHNldWRvcy52aXNpYmxlPWZ1bmN0aW9uKGEpe3JldHVybiEhKGEub2Zmc2V0V2lkdGh8fGEub2Zmc2V0SGVpZ2h0fHxhLmdldENsaWVudFJlY3RzKCkubGVuZ3RoKX0sci5hamF4U2V0dGluZ3MueGhyPWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBuZXcgYS5YTUxIdHRwUmVxdWVzdH1jYXRjaChiKXt9fTt2YXIgUmI9ezA6MjAwLDEyMjM6MjA0fSxTYj1yLmFqYXhTZXR0aW5ncy54aHIoKTtvLmNvcnM9ISFTYiYmXCJ3aXRoQ3JlZGVudGlhbHNcImluIFNiLG8uYWpheD1TYj0hIVNiLHIuYWpheFRyYW5zcG9ydChmdW5jdGlvbihiKXt2YXIgYyxkO2lmKG8uY29yc3x8U2ImJiFiLmNyb3NzRG9tYWluKXJldHVybntzZW5kOmZ1bmN0aW9uKGUsZil7dmFyIGcsaD1iLnhocigpO2lmKGgub3BlbihiLnR5cGUsYi51cmwsYi5hc3luYyxiLnVzZXJuYW1lLGIucGFzc3dvcmQpLGIueGhyRmllbGRzKWZvcihnIGluIGIueGhyRmllbGRzKWhbZ109Yi54aHJGaWVsZHNbZ107Yi5taW1lVHlwZSYmaC5vdmVycmlkZU1pbWVUeXBlJiZoLm92ZXJyaWRlTWltZVR5cGUoYi5taW1lVHlwZSksYi5jcm9zc0RvbWFpbnx8ZVtcIlgtUmVxdWVzdGVkLVdpdGhcIl18fChlW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXT1cIlhNTEh0dHBSZXF1ZXN0XCIpO2ZvcihnIGluIGUpaC5zZXRSZXF1ZXN0SGVhZGVyKGcsZVtnXSk7Yz1mdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oKXtjJiYoYz1kPWgub25sb2FkPWgub25lcnJvcj1oLm9uYWJvcnQ9aC5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxcImFib3J0XCI9PT1hP2guYWJvcnQoKTpcImVycm9yXCI9PT1hP1wibnVtYmVyXCIhPXR5cGVvZiBoLnN0YXR1cz9mKDAsXCJlcnJvclwiKTpmKGguc3RhdHVzLGguc3RhdHVzVGV4dCk6ZihSYltoLnN0YXR1c118fGguc3RhdHVzLGguc3RhdHVzVGV4dCxcInRleHRcIiE9PShoLnJlc3BvbnNlVHlwZXx8XCJ0ZXh0XCIpfHxcInN0cmluZ1wiIT10eXBlb2YgaC5yZXNwb25zZVRleHQ/e2JpbmFyeTpoLnJlc3BvbnNlfTp7dGV4dDpoLnJlc3BvbnNlVGV4dH0saC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkpfX0saC5vbmxvYWQ9YygpLGQ9aC5vbmVycm9yPWMoXCJlcnJvclwiKSx2b2lkIDAhPT1oLm9uYWJvcnQ/aC5vbmFib3J0PWQ6aC5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXs0PT09aC5yZWFkeVN0YXRlJiZhLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtjJiZkKCl9KX0sYz1jKFwiYWJvcnRcIik7dHJ5e2guc2VuZChiLmhhc0NvbnRlbnQmJmIuZGF0YXx8bnVsbCl9Y2F0Y2goaSl7aWYoYyl0aHJvdyBpfX0sYWJvcnQ6ZnVuY3Rpb24oKXtjJiZjKCl9fX0pLHIuYWpheFByZWZpbHRlcihmdW5jdGlvbihhKXthLmNyb3NzRG9tYWluJiYoYS5jb250ZW50cy5zY3JpcHQ9ITEpfSksci5hamF4U2V0dXAoe2FjY2VwdHM6e3NjcmlwdDpcInRleHQvamF2YXNjcmlwdCwgYXBwbGljYXRpb24vamF2YXNjcmlwdCwgYXBwbGljYXRpb24vZWNtYXNjcmlwdCwgYXBwbGljYXRpb24veC1lY21hc2NyaXB0XCJ9LGNvbnRlbnRzOntzY3JpcHQ6L1xcYig/OmphdmF8ZWNtYSlzY3JpcHRcXGIvfSxjb252ZXJ0ZXJzOntcInRleHQgc2NyaXB0XCI6ZnVuY3Rpb24oYSl7cmV0dXJuIHIuZ2xvYmFsRXZhbChhKSxhfX19KSxyLmFqYXhQcmVmaWx0ZXIoXCJzY3JpcHRcIixmdW5jdGlvbihhKXt2b2lkIDA9PT1hLmNhY2hlJiYoYS5jYWNoZT0hMSksYS5jcm9zc0RvbWFpbiYmKGEudHlwZT1cIkdFVFwiKX0pLHIuYWpheFRyYW5zcG9ydChcInNjcmlwdFwiLGZ1bmN0aW9uKGEpe2lmKGEuY3Jvc3NEb21haW4pe3ZhciBiLGM7cmV0dXJue3NlbmQ6ZnVuY3Rpb24oZSxmKXtiPXIoXCI8c2NyaXB0PlwiKS5wcm9wKHtjaGFyc2V0OmEuc2NyaXB0Q2hhcnNldCxzcmM6YS51cmx9KS5vbihcImxvYWQgZXJyb3JcIixjPWZ1bmN0aW9uKGEpe2IucmVtb3ZlKCksYz1udWxsLGEmJmYoXCJlcnJvclwiPT09YS50eXBlPzQwNDoyMDAsYS50eXBlKX0pLGQuaGVhZC5hcHBlbmRDaGlsZChiWzBdKX0sYWJvcnQ6ZnVuY3Rpb24oKXtjJiZjKCl9fX19KTt2YXIgVGI9W10sVWI9Lyg9KVxcPyg/PSZ8JCl8XFw/XFw/LztyLmFqYXhTZXR1cCh7anNvbnA6XCJjYWxsYmFja1wiLGpzb25wQ2FsbGJhY2s6ZnVuY3Rpb24oKXt2YXIgYT1UYi5wb3AoKXx8ci5leHBhbmRvK1wiX1wiK3ViKys7cmV0dXJuIHRoaXNbYV09ITAsYX19KSxyLmFqYXhQcmVmaWx0ZXIoXCJqc29uIGpzb25wXCIsZnVuY3Rpb24oYixjLGQpe3ZhciBlLGYsZyxoPWIuanNvbnAhPT0hMSYmKFViLnRlc3QoYi51cmwpP1widXJsXCI6XCJzdHJpbmdcIj09dHlwZW9mIGIuZGF0YSYmMD09PShiLmNvbnRlbnRUeXBlfHxcIlwiKS5pbmRleE9mKFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpJiZVYi50ZXN0KGIuZGF0YSkmJlwiZGF0YVwiKTtpZihofHxcImpzb25wXCI9PT1iLmRhdGFUeXBlc1swXSlyZXR1cm4gZT1iLmpzb25wQ2FsbGJhY2s9ci5pc0Z1bmN0aW9uKGIuanNvbnBDYWxsYmFjayk/Yi5qc29ucENhbGxiYWNrKCk6Yi5qc29ucENhbGxiYWNrLGg/YltoXT1iW2hdLnJlcGxhY2UoVWIsXCIkMVwiK2UpOmIuanNvbnAhPT0hMSYmKGIudXJsKz0odmIudGVzdChiLnVybCk/XCImXCI6XCI/XCIpK2IuanNvbnArXCI9XCIrZSksYi5jb252ZXJ0ZXJzW1wic2NyaXB0IGpzb25cIl09ZnVuY3Rpb24oKXtyZXR1cm4gZ3x8ci5lcnJvcihlK1wiIHdhcyBub3QgY2FsbGVkXCIpLGdbMF19LGIuZGF0YVR5cGVzWzBdPVwianNvblwiLGY9YVtlXSxhW2VdPWZ1bmN0aW9uKCl7Zz1hcmd1bWVudHN9LGQuYWx3YXlzKGZ1bmN0aW9uKCl7dm9pZCAwPT09Zj9yKGEpLnJlbW92ZVByb3AoZSk6YVtlXT1mLGJbZV0mJihiLmpzb25wQ2FsbGJhY2s9Yy5qc29ucENhbGxiYWNrLFRiLnB1c2goZSkpLGcmJnIuaXNGdW5jdGlvbihmKSYmZihnWzBdKSxnPWY9dm9pZCAwfSksXCJzY3JpcHRcIn0pLG8uY3JlYXRlSFRNTERvY3VtZW50PWZ1bmN0aW9uKCl7dmFyIGE9ZC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIikuYm9keTtyZXR1cm4gYS5pbm5lckhUTUw9XCI8Zm9ybT48L2Zvcm0+PGZvcm0+PC9mb3JtPlwiLDI9PT1hLmNoaWxkTm9kZXMubGVuZ3RofSgpLHIucGFyc2VIVE1MPWZ1bmN0aW9uKGEsYixjKXtpZihcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm5bXTtcImJvb2xlYW5cIj09dHlwZW9mIGImJihjPWIsYj0hMSk7dmFyIGUsZixnO3JldHVybiBifHwoby5jcmVhdGVIVE1MRG9jdW1lbnQ/KGI9ZC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIiksZT1iLmNyZWF0ZUVsZW1lbnQoXCJiYXNlXCIpLGUuaHJlZj1kLmxvY2F0aW9uLmhyZWYsYi5oZWFkLmFwcGVuZENoaWxkKGUpKTpiPWQpLGY9Qy5leGVjKGEpLGc9IWMmJltdLGY/W2IuY3JlYXRlRWxlbWVudChmWzFdKV06KGY9cWEoW2FdLGIsZyksZyYmZy5sZW5ndGgmJnIoZykucmVtb3ZlKCksci5tZXJnZShbXSxmLmNoaWxkTm9kZXMpKX0sci5mbi5sb2FkPWZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZz10aGlzLGg9YS5pbmRleE9mKFwiIFwiKTtyZXR1cm4gaD4tMSYmKGQ9cGIoYS5zbGljZShoKSksYT1hLnNsaWNlKDAsaCkpLHIuaXNGdW5jdGlvbihiKT8oYz1iLGI9dm9pZCAwKTpiJiZcIm9iamVjdFwiPT10eXBlb2YgYiYmKGU9XCJQT1NUXCIpLGcubGVuZ3RoPjAmJnIuYWpheCh7dXJsOmEsdHlwZTplfHxcIkdFVFwiLGRhdGFUeXBlOlwiaHRtbFwiLGRhdGE6Yn0pLmRvbmUoZnVuY3Rpb24oYSl7Zj1hcmd1bWVudHMsZy5odG1sKGQ/cihcIjxkaXY+XCIpLmFwcGVuZChyLnBhcnNlSFRNTChhKSkuZmluZChkKTphKX0pLmFsd2F5cyhjJiZmdW5jdGlvbihhLGIpe2cuZWFjaChmdW5jdGlvbigpe2MuYXBwbHkodGhpcyxmfHxbYS5yZXNwb25zZVRleHQsYixhXSl9KX0pLHRoaXN9LHIuZWFjaChbXCJhamF4U3RhcnRcIixcImFqYXhTdG9wXCIsXCJhamF4Q29tcGxldGVcIixcImFqYXhFcnJvclwiLFwiYWpheFN1Y2Nlc3NcIixcImFqYXhTZW5kXCJdLGZ1bmN0aW9uKGEsYil7ci5mbltiXT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5vbihiLGEpfX0pLHIuZXhwci5wc2V1ZG9zLmFuaW1hdGVkPWZ1bmN0aW9uKGEpe3JldHVybiByLmdyZXAoci50aW1lcnMsZnVuY3Rpb24oYil7cmV0dXJuIGE9PT1iLmVsZW19KS5sZW5ndGh9LHIub2Zmc2V0PXtzZXRPZmZzZXQ6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnLGgsaSxqLGs9ci5jc3MoYSxcInBvc2l0aW9uXCIpLGw9cihhKSxtPXt9O1wic3RhdGljXCI9PT1rJiYoYS5zdHlsZS5wb3NpdGlvbj1cInJlbGF0aXZlXCIpLGg9bC5vZmZzZXQoKSxmPXIuY3NzKGEsXCJ0b3BcIiksaT1yLmNzcyhhLFwibGVmdFwiKSxqPShcImFic29sdXRlXCI9PT1rfHxcImZpeGVkXCI9PT1rKSYmKGYraSkuaW5kZXhPZihcImF1dG9cIik+LTEsaj8oZD1sLnBvc2l0aW9uKCksZz1kLnRvcCxlPWQubGVmdCk6KGc9cGFyc2VGbG9hdChmKXx8MCxlPXBhcnNlRmxvYXQoaSl8fDApLHIuaXNGdW5jdGlvbihiKSYmKGI9Yi5jYWxsKGEsYyxyLmV4dGVuZCh7fSxoKSkpLG51bGwhPWIudG9wJiYobS50b3A9Yi50b3AtaC50b3ArZyksbnVsbCE9Yi5sZWZ0JiYobS5sZWZ0PWIubGVmdC1oLmxlZnQrZSksXCJ1c2luZ1wiaW4gYj9iLnVzaW5nLmNhbGwoYSxtKTpsLmNzcyhtKX19LHIuZm4uZXh0ZW5kKHtvZmZzZXQ6ZnVuY3Rpb24oYSl7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdm9pZCAwPT09YT90aGlzOnRoaXMuZWFjaChmdW5jdGlvbihiKXtyLm9mZnNldC5zZXRPZmZzZXQodGhpcyxhLGIpfSk7dmFyIGIsYyxkLGUsZj10aGlzWzBdO2lmKGYpcmV0dXJuIGYuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGg/KGQ9Zi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxiPWYub3duZXJEb2N1bWVudCxjPWIuZG9jdW1lbnRFbGVtZW50LGU9Yi5kZWZhdWx0Vmlldyx7dG9wOmQudG9wK2UucGFnZVlPZmZzZXQtYy5jbGllbnRUb3AsbGVmdDpkLmxlZnQrZS5wYWdlWE9mZnNldC1jLmNsaWVudExlZnR9KTp7dG9wOjAsbGVmdDowfX0scG9zaXRpb246ZnVuY3Rpb24oKXtpZih0aGlzWzBdKXt2YXIgYSxiLGM9dGhpc1swXSxkPXt0b3A6MCxsZWZ0OjB9O3JldHVyblwiZml4ZWRcIj09PXIuY3NzKGMsXCJwb3NpdGlvblwiKT9iPWMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk6KGE9dGhpcy5vZmZzZXRQYXJlbnQoKSxiPXRoaXMub2Zmc2V0KCksQihhWzBdLFwiaHRtbFwiKXx8KGQ9YS5vZmZzZXQoKSksZD17dG9wOmQudG9wK3IuY3NzKGFbMF0sXCJib3JkZXJUb3BXaWR0aFwiLCEwKSxsZWZ0OmQubGVmdCtyLmNzcyhhWzBdLFwiYm9yZGVyTGVmdFdpZHRoXCIsITApfSkse3RvcDpiLnRvcC1kLnRvcC1yLmNzcyhjLFwibWFyZ2luVG9wXCIsITApLGxlZnQ6Yi5sZWZ0LWQubGVmdC1yLmNzcyhjLFwibWFyZ2luTGVmdFwiLCEwKX19fSxvZmZzZXRQYXJlbnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9mZnNldFBhcmVudDt3aGlsZShhJiZcInN0YXRpY1wiPT09ci5jc3MoYSxcInBvc2l0aW9uXCIpKWE9YS5vZmZzZXRQYXJlbnQ7cmV0dXJuIGF8fHJhfSl9fSksci5lYWNoKHtzY3JvbGxMZWZ0OlwicGFnZVhPZmZzZXRcIixzY3JvbGxUb3A6XCJwYWdlWU9mZnNldFwifSxmdW5jdGlvbihhLGIpe3ZhciBjPVwicGFnZVlPZmZzZXRcIj09PWI7ci5mblthXT1mdW5jdGlvbihkKXtyZXR1cm4gVCh0aGlzLGZ1bmN0aW9uKGEsZCxlKXt2YXIgZjtyZXR1cm4gci5pc1dpbmRvdyhhKT9mPWE6OT09PWEubm9kZVR5cGUmJihmPWEuZGVmYXVsdFZpZXcpLHZvaWQgMD09PWU/Zj9mW2JdOmFbZF06dm9pZChmP2Yuc2Nyb2xsVG8oYz9mLnBhZ2VYT2Zmc2V0OmUsYz9lOmYucGFnZVlPZmZzZXQpOmFbZF09ZSl9LGEsZCxhcmd1bWVudHMubGVuZ3RoKX19KSxyLmVhY2goW1widG9wXCIsXCJsZWZ0XCJdLGZ1bmN0aW9uKGEsYil7ci5jc3NIb29rc1tiXT1QYShvLnBpeGVsUG9zaXRpb24sZnVuY3Rpb24oYSxjKXtpZihjKXJldHVybiBjPU9hKGEsYiksTWEudGVzdChjKT9yKGEpLnBvc2l0aW9uKClbYl0rXCJweFwiOmN9KX0pLHIuZWFjaCh7SGVpZ2h0OlwiaGVpZ2h0XCIsV2lkdGg6XCJ3aWR0aFwifSxmdW5jdGlvbihhLGIpe3IuZWFjaCh7cGFkZGluZzpcImlubmVyXCIrYSxjb250ZW50OmIsXCJcIjpcIm91dGVyXCIrYX0sZnVuY3Rpb24oYyxkKXtyLmZuW2RdPWZ1bmN0aW9uKGUsZil7dmFyIGc9YXJndW1lbnRzLmxlbmd0aCYmKGN8fFwiYm9vbGVhblwiIT10eXBlb2YgZSksaD1jfHwoZT09PSEwfHxmPT09ITA/XCJtYXJnaW5cIjpcImJvcmRlclwiKTtyZXR1cm4gVCh0aGlzLGZ1bmN0aW9uKGIsYyxlKXt2YXIgZjtyZXR1cm4gci5pc1dpbmRvdyhiKT8wPT09ZC5pbmRleE9mKFwib3V0ZXJcIik/YltcImlubmVyXCIrYV06Yi5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbXCJjbGllbnRcIithXTo5PT09Yi5ub2RlVHlwZT8oZj1iLmRvY3VtZW50RWxlbWVudCxNYXRoLm1heChiLmJvZHlbXCJzY3JvbGxcIithXSxmW1wic2Nyb2xsXCIrYV0sYi5ib2R5W1wib2Zmc2V0XCIrYV0sZltcIm9mZnNldFwiK2FdLGZbXCJjbGllbnRcIithXSkpOnZvaWQgMD09PWU/ci5jc3MoYixjLGgpOnIuc3R5bGUoYixjLGUsaCl9LGIsZz9lOnZvaWQgMCxnKX19KX0pLHIuZm4uZXh0ZW5kKHtiaW5kOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdGhpcy5vbihhLG51bGwsYixjKX0sdW5iaW5kOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMub2ZmKGEsbnVsbCxiKX0sZGVsZWdhdGU6ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHRoaXMub24oYixhLGMsZCl9LHVuZGVsZWdhdGU6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiAxPT09YXJndW1lbnRzLmxlbmd0aD90aGlzLm9mZihhLFwiKipcIik6dGhpcy5vZmYoYixhfHxcIioqXCIsYyl9fSksci5ob2xkUmVhZHk9ZnVuY3Rpb24oYSl7YT9yLnJlYWR5V2FpdCsrOnIucmVhZHkoITApfSxyLmlzQXJyYXk9QXJyYXkuaXNBcnJheSxyLnBhcnNlSlNPTj1KU09OLnBhcnNlLHIubm9kZU5hbWU9QixcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQmJmRlZmluZShcImpxdWVyeVwiLFtdLGZ1bmN0aW9uKCl7cmV0dXJuIHJ9KTt2YXIgVmI9YS5qUXVlcnksV2I9YS4kO3JldHVybiByLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oYil7cmV0dXJuIGEuJD09PXImJihhLiQ9V2IpLGImJmEualF1ZXJ5PT09ciYmKGEualF1ZXJ5PVZiKSxyfSxifHwoYS5qUXVlcnk9YS4kPXIpLHJ9KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9saWIvanF1ZXJ5LTMuMi4xLm1pbi5qcyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbihzZWxlY3Rvcikge1xuXHRcdGlmICh0eXBlb2YgbWVtb1tzZWxlY3Rvcl0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGZuLmNhbGwodGhpcywgc2VsZWN0b3IpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmIChzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bc2VsZWN0b3JdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3NlbGVjdG9yXVxuXHR9O1xufSkoZnVuY3Rpb24gKHRhcmdldCkge1xuXHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpXG59KTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24pIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG5cdGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZXZlbnQgPSAoZnVuY3Rpb24oKXtcclxuICAgIGxldCBldmVudFBvb2wgPSB7fVxyXG4gICAgZnVuY3Rpb24gb24odG9waWMsaGFuZGxlcil7XHJcbiAgICAgIGV2ZW50UG9vbFt0b3BpY10gPSBldmVudFBvb2xbdG9waWNdIHx8IFtdXHJcbiAgICAgIGV2ZW50UG9vbFt0b3BpY10ucHVzaCh7XHJcbiAgICAgICAgaGFuZGxlcjpoYW5kbGVyXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB0cmlnZ2VyKHRvcGljLGFyZ3Mpe1xyXG4gICAgICBpZighZXZlbnRQb29sW3RvcGljXSkge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIGZvcihsZXQgaT0wO2k8ZXZlbnRQb29sW3RvcGljXS5sZW5ndGg7aSsrKXtcclxuICAgICAgICBldmVudFBvb2xbdG9waWNdW2ldLmhhbmRsZXIoYXJncylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb2ZmKHRvcGljLGhhbmRsZXIpe1xyXG4gICAgICBldmVudFBvb2xbdG9waWNdLmZvckVhY2goKGl0LGlueCk9PntcclxuICAgICAgIGlmKGl0LmhhbmRsZXIgPT09IGhhbmRsZXIpe1xyXG4gICAgICAgIGV2ZW50UG9vbFt0b3BpY10uc3BsaWNlKGlueCwxKVxyXG4gICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgb246b24sXHJcbiAgICAgIG9mZjpvZmYsXHJcbiAgICAgIHRyaWdnZXI6dHJpZ2dlclxyXG4gICAgfVxyXG4gIH0pKClcclxubW9kdWxlLmV4cG9ydHMgPSBldmVudFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jb21wb25lbnQvZXZlbnQuanMiLCJyZXF1aXJlKCdsZXNzL3RvdGFzLmxlc3MnKVxyXG5mdW5jdGlvbiB0b3Rhcyhtc2csdGltZSl7XHJcbiAgdGhpcy5tc2c9bXNnXHJcbiAgdGhpcy50aW1lID0gdGltZSB8fCAxMDAwIC8vbXNcclxuICB0aGlzLmNyZWF0ZVRvdGFzKClcclxuICB0aGlzLnNob3dUb3RhcygpIC8v5Y6f5Z6L5LiK5Yib5bu65Lik5Liq5pa55rOV5o6n5Yi25Yib5bu677yM5raI5aSx5Yqf6IO9XHJcbn1cclxudG90YXMucHJvdG90eXBlID0ge1xyXG4gIGNyZWF0ZVRvdGFzOmZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgdHBsPSAnPGRpdiBjbGFzcz1cInRvdGFzXCI+JysgdGhpcy5tc2crJzwvZGl2PicgLy/lhYPntKDmqKHmnb9cclxuICAgICQoJ2JvZHknKS5hcHBlbmQodHBsKS8v5o+S5YWl5YWD57SgXHJcbiB9LFxyXG4gc2hvd1RvdGFzOmZ1bmN0aW9uKCl7XHJcbiAgIHZhciBfdGhpcz0gdGhpcyAvL+WjsOaYjuWklumDqOeahHRoaXPmjIflkJHvvIwg6Ziy5q2ic2V0VGltZW91dOWGhemDqOWPkeeUn+WPmOWMllxyXG4gICB2YXIgJHRvdGFzID0gJCgnLnRvdGFzJylcclxuICAgJHRvdGFzLmZhZGVJbig1MDAsZnVuY3Rpb24oKXsgIFxyXG4gICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICR0b3Rhcy5mYWRlT3V0KDUwMCxmdW5jdGlvbigpe1xyXG4gICAgICAkdG90YXMucmVtb3ZlKCkgICAgICBcclxuICAgICAgfSlcclxuICAgIH0sX3RoaXMudGltZSlcclxuICB9KVxyXG59XHJcbn1cclxuZnVuY3Rpb24gVG90YXMobXNnLHRpbWUpe1xyXG4gcmV0dXJuIG5ldyB0b3Rhcyhtc2csdGltZSlcclxufVxyXG5tb2R1bGUuZXhwb3J0cy50b3Rhcz0gVG90YXNcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudC90b3Rhcy5qcyIsInJlcXVpcmUoJ2xlc3MvaW5kZXgubGVzcycpXHJcbmNvbnN0IHdhdGVyRmFsbCA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudC93YXRlcmZhbGwuanMnKVxyXG52YXIgTm90ZUNvbnRyb2wgPSByZXF1aXJlKCcuLi9jb21wb25lbnQvbm90ZS1jb250cm9sLmpzJykubm90ZUNvbnRyb2xcclxudmFyIGV2ZW50ID0gcmVxdWlyZSgnLi4vY29tcG9uZW50L2V2ZW50LmpzJylcclxuTm90ZUNvbnRyb2wubG9hZCgpXHJcbiQoJy5uZXctbm90ZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gIE5vdGVDb250cm9sLmFkZCgpXHJcbn0pXHJcbmV2ZW50Lm9uKCd3YXRlcmZhbGwnLCBmdW5jdGlvbigpe1xyXG4gIHdhdGVyRmFsbC5pbml0KCQoJyNjb250ZW50JykpXHJcbn0pXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9hcHAvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIi8qIGdsb2JhbHMgX193ZWJwYWNrX2FtZF9vcHRpb25zX18gKi9cbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX2FtZF9vcHRpb25zX187XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXgubGVzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXgubGVzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXgubGVzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbGVzcy9pbmRleC5sZXNzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxufVxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICMwMDAwMDA7XFxufVxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vaW1nL2JnMi5wbmdcIikgKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG4jY29udGVudCB7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogLXdlYmtpdC1jYWxjKDcwJSk7XFxuICBoZWlnaHQ6IGNhbGMoNzAlKTtcXG59XFxuI3RvcC1uYXYgLmxvZ2luIHtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdTaGFkb3dzIEludG8gTGlnaHQgVHdvJywgY3Vyc2l2ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG4jdG9wLW5hdiBpIHtcXG4gIGZvbnQtc2l6ZTogMzVweDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgdmVydGljYWwtYWxpZ246IHN1YjtcXG59XFxuLmxvZ28ge1xcbiAgZm9udC1mYW1pbHk6ICdTaGFkb3dzIEludG8gTGlnaHQgVHdvJywgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcbi5jbGVhcmZpeDo6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNsZWFyOiBib3RoO1xcbn1cXG4ubm90ZS1hZGQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubmV3LW5vdGUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiA4MHB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAzMHB4O1xcbiAgcmlnaHQ6IDQwcHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm5ldy1ub3RlIGkge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG4ubmV3LW5vdGU6aG92ZXIgaSB7XFxuICBhbmltYXRpb246IHJvbGwgMC41cyBsaW5lYXIgMTtcXG59XFxuQGtleWZyYW1lcyByb2xsIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmcm9tOiByb3RhdGUoMTgwZGVnKTtcXG4gIH1cXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NyYy9sZXNzL2luZGV4Lmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi4vaW1nL2JlZDI5ZDNmYWJmMGFkODdkNjQwNTMwYjQxYjNlNmE2LnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltZy9iZzIucG5nXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcLykvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCIvKlxyXG4gICBkZWJ1ZyDml6XorrAgJG5vdGVDdCwkY3Qg55uu5YmN6L+Y5pyJ6Zeu6aKYMTIuNSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4qLyBcclxudmFyIHdhdGVyRmFsbCA9IChmdW5jdGlvbigpe1xyXG4gICAgdmFyICRub3RlQ3RcclxuICAgIHZhciAkbm90ZXNcclxuICBmdW5jdGlvbiByZW5kZXIoY3Qpe1xyXG4gICAgJG5vdGVDdCA9IGN0XHJcbiAgICAkbm90ZXMgPSAkbm90ZUN0LmNoaWxkcmVuKClcclxuICAgIHZhciAkbm90ZVdpZHRoID0gJG5vdGVzLm91dGVyV2lkdGgodHJ1ZSksXHJcbiAgICAgICAgY29sTnVtID0gcGFyc2VJbnQoJCh3aW5kb3cpLndpZHRoKCkvICRub3RlV2lkdGgpLFxyXG4gICAgICAgIGNvbEhlaWdodCA9IFtdXHJcbiAgICAgICAgICAgIGZvcihsZXQgaT0wO2k8Y29sTnVtO2krKyl7IC8v5Yid5aeL5YyW5YiX6auY5pWw57uEXHJcbiAgICAgICAgICAgICAgICBjb2xIZWlnaHQucHVzaCgwKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAkbm90ZXMuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgIGxldCBtaW5IZWlnaHQgPWNvbEhlaWdodFswXSAsIC8v6K6+572u5pyA5bCP77yM6auY5bqm77yM57Si5byVXHJcbiAgICAgICAgICAgIG1pbkluZHggPTAsXHJcbiAgICAgICAgJGN1ckVsID0gJCh0aGlzKVxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8Y29sTnVtO2krKyl7XHJcbiAgICAgICAgICAgIGlmKGNvbEhlaWdodFtpXTxtaW5IZWlnaHQpe1xyXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0ID0gY29sSGVpZ2h0W2ldXHJcbiAgICAgICAgICAgICAgICBtaW5JbmR4ID0gaVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRjdXJFbC5jc3Moe1xyXG4gICAgICAgICAgICBsZWZ0Om1pbkluZHgqICRub3RlV2lkdGgsXHJcbiAgICAgICAgICAgIHRvcDptaW5IZWlnaHRcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbEhlaWdodFttaW5JbmR4XSArPSAkY3VyRWwub3V0ZXJIZWlnaHQodHJ1ZSkvL+S/ruaUueacgOWwj+WIl+mrmFxyXG4gICAgfSkgICAgICAgICAgICAgICBcclxuICB9XHJcbiAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLGZ1bmN0aW9uKCl7XHJcbiAgICByZW5kZXIoJG5vdGVDdClcclxuICB9KVxyXG4gIHJldHVybiB7XHJcbiAgICBpbml0OiByZW5kZXJcclxuICB9XHJcbn0pKClcclxubW9kdWxlLmV4cG9ydHMgPSB3YXRlckZhbGxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50L3dhdGVyZmFsbC5qcyIsImNvbnN0IE5vdGUgPSByZXF1aXJlKCcuL25vdGUuanMnKS5ub3RlO1xyXG5jb25zdCBUb3RhcyA9IHJlcXVpcmUoJy4vdG90YXMuanMnKS50b3RhcztcclxuY29uc3QgZXZlbnQgPSByZXF1aXJlKCcuL2V2ZW50LmpzJyk7XHJcblxyXG52YXIgbm90ZUNvbnRyb2wgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gbG9hZCgpIHtcclxuICAgICAgICAkLmdldCgnL2FwaS9ub3RlcycpLmRvbmUoZnVuY3Rpb24gKHJldCkge1xyXG4gICAgICAgICAgICBpZiAocmV0LnN0YXR1cyA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAkLmVhY2gocmV0LmRhdGEsIGZ1bmN0aW9uIChpZHgsIGFydGljYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgTm90ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBhcnRpY2FsLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBhcnRpY2FsLnRleHRcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGV2ZW50LnRyaWdnZXIoJ3dhdGVyZmFsbCcpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBUb3RhcyhyZXQuZXJyb3JNc2cpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5mYWlsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgVG90YXMoJ+e9kee7nOW8guW4uCcpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGQoKSB7XHJcbiAgICAgICBuZXcgTm90ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbG9hZDogbG9hZCxcclxuICAgICAgICBhZGQ6IGFkZFxyXG4gICAgfVxyXG59KSgpXHJcbm1vZHVsZS5leHBvcnRzLm5vdGVDb250cm9sID0gbm90ZUNvbnRyb2xcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50L25vdGUtY29udHJvbC5qcyIsInJlcXVpcmUoJ2xlc3Mvbm90ZS5sZXNzJylcclxuY29uc3QgZXZlbnQgPSByZXF1aXJlKCcuL2V2ZW50LmpzJylcclxuY29uc3QgdG90YXMgPSByZXF1aXJlKCcuL3RvdGFzLmpzJykudG90YXNcclxuXHJcbmZ1bmN0aW9uIE5vdGUob3B0cykge1xyXG4gICAgdGhpcy5pbml0T3B0cyhvcHRzKVxyXG4gICAgdGhpcy5jcmVhdGUoKVxyXG4gICAgdGhpcy5zZXRTdHlsZSgpXHJcbiAgICB0aGlzLmJpbmRFdmVudCgpXHJcbn1cclxuTm90ZS5wcm90b3R5cGUgPSB7XHJcbiAgICBjb2xvclBvb2w6IFsgLy/pmo/mnLrotLTnurgxNui/m+WItuminOiJslxyXG4gICAgICAgICcjZmZhYTRmJywgJyNlZjY5YjMnLFxyXG4gICAgICAgICcjOWY5YmU4JywgJyNmN2JlYzknLFxyXG4gICAgICAgICcjOTdkYWFlJywgJyM5YmQxZTAnXHJcbiAgICBdLFxyXG4gICAgZGVmYXVsdE9wdHM6IHtcclxuICAgICAgICBpZDogJycsXHJcbiAgICAgICAgJGN0OiAkKCcjY29udGVudCcpLmxlbmd0aCA+IDAgPyAkKCcjY29udGVudCcpIDogJCgnYm9keScpLCAvLyDpu5jorqTlrrnlmahcclxuICAgICAgICB0ZXh0OiAn6L6T5YWl5YaF5a65Li4uJ1xyXG4gICAgfSxcclxuICAgIGluaXRPcHRzOiBmdW5jdGlvbiAob3B0cykge1xyXG4gICAgICAgIHRoaXMub3B0cyA9ICQuZXh0ZW5kKHt9LCB0aGlzLmRlZmF1bHRPcHRzLCBvcHRzIHx8IHt9KSAvL+WkjeWItuS4gOS4qumAiemhueWPguaVsO+8jOWmguaenOayoeaciW9wdHPlj4LmlbDvvIzpu5jorqTkuLpkZWZhdWx0XHJcbiAgICAgICAgaWYgKHRoaXMub3B0cy5pZCkge1xyXG4gICAgICAgICAgICB0aGlzLmlkID0gdGhpcy5vcHRzLmlkXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8v5a2X56ym5Liy5qih5p2/XHJcbiAgICAgICAgbGV0IHRwbCA9IGA8ZGl2IGNsYXNzPVwibm90ZVwiPiBcclxuICAgICA8ZGl2IGNsYXNzPVwidGltZVwiPkRhdGU6JHsobmV3IERhdGUoKSkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9IDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICBUaW1lOiR7KG5ldyBEYXRlKCkpLnRvTG9jYWxlVGltZVN0cmluZygpfVxyXG4gICAgIDwvZGl2PlxyXG4gICAgIDxkaXYgY2xhc3M9XCJ0dWRpbmdcIiBjb250ZW50ZWRpdGFibGU9ZmFsc2U+PC9kaXY+XHJcbiAgICAgPGRpdiBjbGFzcz1cImNsb3NlXCIgY29udGVudGVkaXRhYmxlPWZhbHNlPlg8L2Rpdj5cclxuICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiIGNvbnRlbnRlZGl0YWJsZT10cnVlPjwvZGl2PlxyXG48L2Rpdj5gXHJcbiAgICAgICAgdGhpcy4kbm90ZSA9ICQodHBsKVxyXG4gICAgICAgIHRoaXMuJGN0ID0gdGhpcy4kbm90ZS5wYXJlbnQoKVxyXG4gICAgICAgIHZhciAkbm90ZUN0ID0gdGhpcy4kbm90ZS5maW5kKCcuY29udGVudCcpXHJcbiAgICAgICAgICAgICRub3RlQ3QuaHRtbCh0aGlzLm9wdHMudGV4dClcclxuICAgIH0sXHJcbiAgICBzZXRTdHlsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBjb2xvciA9IHRoaXMuY29sb3JQb29sW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpXVxyXG4gICAgICAgIHRoaXMuJG5vdGUuY3NzKCdiYWNrZ3JvdW5kJyxjb2xvcilcclxuICAgICAgICB0aGlzLm9wdHMuJGN0LmFwcGVuZCh0aGlzLiRub3RlKVxyXG4gICAgICAgIGV2ZW50LnRyaWdnZXIoJ3dhdGVyZmFsbCcpXHJcbiAgICB9LFxyXG4gICAgbGF5b3V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXHJcbiAgICAgICAgaWYgKHNlbGYuY2xrKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChzZWxmLmNsaylcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZi5jbGsgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGV2ZW50LnRyaWdnZXIoJ3dhdGVyZmFsbCcpXHJcbiAgICAgICAgfSwxMDApO1xyXG4gICAgfSxcclxuICAgIGJpbmRFdmVudDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICAgICAgJG5vdGUgPSB0aGlzLiRub3RlLFxyXG4gICAgICAgICAgICAkZGVsZXRlID0gJG5vdGUuZmluZCgnLmNsb3NlJyksXHJcbiAgICAgICAgICAgICRub3RlSGVhZCA9ICRub3RlLmZpbmQoJy50dWRpbmcnKSxcclxuICAgICAgICAgICAgJG5vdGVDdCA9ICRub3RlLmZpbmQoJy5jb250ZW50JylcclxuICAgICAgICAgICAgJG5vdGUub24oJ21vdXNlZW50ZXInLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAkZGVsZXRlLmNzcyh7ZGlzcGxheTonaW5saW5lJ30pXHJcbiAgICAgICAgICAgIH0pLm9uKCdtb3VzZWxlYXZlJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgJGRlbGV0ZS5jc3Moe2Rpc3BsYXk6J25vbmUnfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAkZGVsZXRlLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZi5kZWxldGUoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJG5vdGVDdC5vbignZm9jdXMnLCBmdW5jdGlvbiAoKSB7IC8v57uR5a6a5LqL5Lu277yM5qih5oufaW5wdXTnmoRjaGFuZ2Xkuovku7YgJC5kYXRhKCnmlrnms5Xorr7nva7lsZ7mgKfvvIzlrZjlgqggbm90ZeeahOaWh+acrOWGheWuuVxyXG4gICAgICAgICAgICBpZiAoJG5vdGVDdC5odG1sKCkgPT0gJ+i+k+WFpeWGheWuuS4uLicpIHtcclxuICAgICAgICAgICAgICAgICRub3RlQ3QuaHRtbCgnJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkbm90ZUN0LmRhdGEoJ2JlZm9yZScsJG5vdGVDdC5odG1sKCkpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCRub3RlQ3QuZGF0YSgnYmVmb3JlJykpXHJcbiAgICAgICAgfSkub24oJ2JsdXIgcGFzZXRlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJG5vdGVDdC5kYXRhKCdiZWZvcmUnKSAhPSAkbm90ZUN0Lmh0bWwoKSkge1xyXG4gICAgICAgICAgICAgICAgJG5vdGVDdC5kYXRhKCdiZWZvcmUnLCAkbm90ZUN0Lmh0bWwoKSlcclxuICAgICAgICAgICAgICAgIHNlbGYubGF5b3V0KClcclxuICAgICAgICAgICAgICAgIGlmIChzZWxmLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5lZGl0KCRub3RlQ3QuaHRtbCgpKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHNlbGYuaWQgPT09c2VsZi5pZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hZGQoJG5vdGVDdC5odG1sKCkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC8v6LS057q456e75YqoXHJcbiAgICAgICAgJG5vdGVIZWFkLm9uKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0WCA9IGUucGFnZVggLSAkbm90ZS5vZmZzZXQoKS5sZWZ0LCAvL+iusOW9lem8oOagh+WcqOWFg+e0oOWGheeCueWHu+S9jee9ruWIsO+8jGJvZHnmlofmoaPmnIDlt6bkvqfot53nprtcclxuICAgICAgICAgICAgICAgIHRhcmdldFkgPSBlLnBhZ2VZIC0gJG5vdGUub2Zmc2V0KCkudG9wICAgICAgIC8v6K6w5b2V6byg5qCH5Zyo5YWD57Sg5YaF54K55Ye75L2N572u5Yiw77yMYm9keeaWh+aho+acgOS4iuS+p+i3neemu1xyXG4gICAgICAgICAgICAkbm90ZS5hZGRDbGFzcygnZHJhZ2dhYmxlJykuZGF0YSgndGFyZ2V0UG9zJywge1xyXG4gICAgICAgICAgICAgICAgeDogdGFyZ2V0WCxcclxuICAgICAgICAgICAgICAgIHk6IHRhcmdldFlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KS5vbignbW91c2V1cCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICRub3RlLnJlbW92ZUNsYXNzKCdkcmFnZ2FibGUnKS5yZW1vdmVEYXRhKCdwb3MnKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJCgnYm9keScpLm9uKCdtb3VzZW1vdmUnLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAkKCcuZHJhZ2dhYmxlJykubGVuZ3RoICYmICQoJy5kcmFnZ2FibGUnKS5vZmZzZXQoe1xyXG4gICAgICAgICAgICAgICAgbGVmdDplLnBhZ2VYIC0gJCgnLmRyYWdnYWJsZScpLmRhdGEoJ3RhcmdldFBvcycpLngsIC8vIG5vdGUgWOi9tOWBj+enu+S9jee9ru+8jCDlvZPliY3pvKDmoIflnKhib2R55YaF5L2N572uIC0g77yI5Zu+6ZKJ6Kem5Y+R6byg5qCH54K55Ye75L2N572uIC0gbm90ZeiHqui6q+WIsGJvZHnlt6bkvqfkvY3nva7vvIlcclxuICAgICAgICAgICAgICAgIHRvcDogZS5wYWdlWSAtICQoJy5kcmFnZ2FibGUnKS5kYXRhKCd0YXJnZXRQb3MnKS55XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBlZGl0OiBmdW5jdGlvbiAobXNnKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICQucG9zdCgnL2FwaS9ub3Rlcy9lZGl0Jyx7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICBub3RlOiBtc2dcclxuICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24ocmV0KXtcclxuICAgICAgICAgIGlmKHJldC5zdGF0dXMgPT09IDApe1xyXG4gICAgICAgICAgICB0b3RhcygnVXBkYXRlIFN1Y2Nlc3MnKTtcclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0b3RhcyhyZXQuZXJyb3JNc2cpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICBcclxuICAgICAgYWRkOiBmdW5jdGlvbiAobXNnKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdleGVjdXRlLi4uYWRkJylcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgJC5wb3N0KCcvYXBpL25vdGVzL2FkZCcsIHtub3RlOiBtc2d9KVxyXG4gICAgICAgICAgLmRvbmUoZnVuY3Rpb24ocmV0KXtcclxuICAgICAgICAgICAgaWYocmV0LnN0YXR1cyA9PT0gMCl7XHJcbiAgICAgICAgICAgICAgc2VsZi5pZCA9cmV0LmlkXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZi5pZClcclxuICAgICAgICAgICAgICB0b3RhcygnQWRkIFN1Y2Nlc3MnKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgc2VsZi4kbm90ZS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICBldmVudC50cmlnZ2VyKCd3YXRlcmZhbGwnKVxyXG4gICAgICAgICAgICAgIHRvdGFzKHJldC5lcnJvck1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgXHJcbiAgICAgIGRlbGV0ZTogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgJC5wb3N0KCcvYXBpL25vdGVzL2RlbGV0ZScsIHtpZDogdGhpcy5pZH0pXHJcbiAgICAgICAgICAuZG9uZShmdW5jdGlvbihyZXQpe1xyXG4gICAgICAgICAgICBpZihyZXQuc3RhdHVzID09PSAwKXtcclxuICAgICAgICAgICAgICB0b3RhcygnRGVsZXRlIFN1Y2Nlc3MnKTtcclxuICAgICAgICAgICAgICBzZWxmLiRub3RlLnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgZXZlbnQudHJpZ2dlcignd2F0ZXJmYWxsJylcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgdG90YXMocmV0LmVycm9yTXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbn1cclxubW9kdWxlLmV4cG9ydHMubm90ZSA9IE5vdGVcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50L25vdGUuanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm90ZS5sZXNzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3RlLmxlc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vdGUubGVzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbGVzcy9ub3RlLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5ub3RlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDUxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmE0O1xcbiAgYm94LXNoYWRvdzogMHB4IDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpLCAwcHggMHB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjEpIGluc2V0O1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgO1xcbn1cXG4ubm90ZTo6YmVmb3JlLFxcbi5ub3RlOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm90dG9tOiAxM3B4O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogODAlO1xcbiAgei1pbmRleDogLTE7XFxuICBib3gtc2hhZG93OiAwcHggNHB4IDVweCAycHggcmdiYSgwLCAwLCAwLCAwLjcpO1xcbn1cXG4ubm90ZTo6YmVmb3JlIHtcXG4gIHJpZ2h0OiAyMHB4O1xcbiAgdHJhbnNmb3JtOiBza2V3KDEwZGVnKSByb3RhdGUoNGRlZyk7XFxufVxcbi5ub3RlOjphZnRlciB7XFxuICBsZWZ0OiAyMHB4O1xcbiAgdHJhbnNmb3JtOiBza2V3KC0xMGRlZykgcm90YXRlKC00ZGVnKTtcXG59XFxuLnR1ZGluZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDhweDtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xcbiAgYm9yZGVyOiA1cHggc29saWQgI2YzM2MzZmYyO1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3gtc2hhZG93OiAxcHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNik7XFxufVxcbi50dWRpbmc6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAzcHg7XFxuICBoZWlnaHQ6IDNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAtMnB4O1xcbn1cXG4udHVkaW5nOjphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk2MjEyMTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDBweDtcXG59XFxuLmNsb3NlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNXB4O1xcbiAgcmlnaHQ6IDEwcHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5jb250ZW50IHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBtaW4taGVpZ2h0OiAyMDBweDtcXG59XFxuLmRyYWdnYWJsZSB7XFxuICBvcGFjaXR5OiAwLjc7XFxuICBjdXJzb3I6IG1vdmU7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG4udGltZSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDhweDtcXG4gIHJpZ2h0OiA4cHg7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zcmMvbGVzcy9ub3RlLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b3Rhcy5sZXNzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b3Rhcy5sZXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b3Rhcy5sZXNzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9sZXNzL3RvdGFzLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50b3RhcyB7XFxuICBmb250LWZhbWlseTogJ1NoYWRvd3MgSW50byBMaWdodCBUd28nLCBjdXJzaXZlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIGJvdHRvbTogNTBweDtcXG4gIGNvbG9yOiAjZDE1YTM5O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMXB4IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gIHBhZGRpbmc6IDZweCAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3JjL2xlc3MvdG90YXMubGVzc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==