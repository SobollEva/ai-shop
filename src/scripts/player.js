(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === "object" && typeof module === "object") module.exports = factory();
  else if (typeof define === "function" && define.amd) define([], factory);
  else {
    var a = factory();
    for (var i in a) (typeof exports === "object" ? exports : root)[i] = a[i]
  }
})(window, function () {
  return function (modules) {
    var installedModules = {};

    function __webpack_require__(moduleId) {
      if (installedModules[moduleId]) {
        return installedModules[moduleId].exports
      }
      var module = installedModules[moduleId] = {
        i: moduleId,
        l: false,
        exports: {}
      };
      modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      module.l = true;
      return module.exports
    }

    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function (exports, name, getter) {
      if (!__webpack_require__.o(exports, name)) {
        Object.defineProperty(exports, name, {
          configurable: false,
          enumerable: true,
          get: getter
        })
      }
    };
    __webpack_require__.r = function (exports) {
      Object.defineProperty(exports, "__esModule", {
        value: true
      })
    };
    __webpack_require__.n = function (module) {
      var getter = module && module.__esModule ? function getDefault() {
        return module["default"]
      } : function getModuleExports() {
        return module
      };
      __webpack_require__.d(getter, "a", getter);
      return getter
    };
    __webpack_require__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property)
    };
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = 28)
  }([function (module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /*!
         * jQuery JavaScript Library v3.3.1
         * https://jquery.com/
         *
         * Includes Sizzle.js
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://jquery.org/license
         *
         * Date: 2018-01-20T17:24Z
         */
    /*!
         * jQuery JavaScript Library v3.3.1
         * https://jquery.com/
         *
         * Includes Sizzle.js
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://jquery.org/license
         *
         * Date: 2018-01-20T17:24Z
         */
    (function (global, factory) {
      "use strict";
      if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = global.document ? factory(global, true) : function (w) {
          if (!w.document) {
            throw new Error("jQuery requires a window with a document")
          }
          return factory(w)
        }
      } else {
        factory(global)
      }
    })(typeof window !== "undefined" ? window : this, function (window, noGlobal) {
      "use strict";
      var arr = [];
      var document = window.document;
      var getProto = Object.getPrototypeOf;
      var slice = arr.slice;
      var concat = arr.concat;
      var push = arr.push;
      var indexOf = arr.indexOf;
      var class2type = {};
      var toString = class2type.toString;
      var hasOwn = class2type.hasOwnProperty;
      var fnToString = hasOwn.toString;
      var ObjectFunctionString = fnToString.call(Object);
      var support = {};
      var isFunction = function isFunction(obj) {
        return typeof obj === "function" && typeof obj.nodeType !== "number"
      };
      var isWindow = function isWindow(obj) {
        return obj != null && obj === obj.window
      };
      var preservedScriptAttributes = {
        type: true,
        src: true,
        noModule: true
      };

      function DOMEval(code, doc, node) {
        doc = doc || document;
        var i, script = doc.createElement("script");
        script.text = code;
        if (node) {
          for (i in preservedScriptAttributes) {
            if (node[i]) {
              script[i] = node[i]
            }
          }
        }
        doc.head.appendChild(script).parentNode.removeChild(script)
      }

      function toType(obj) {
        if (obj == null) {
          return obj + ""
        }
        return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj
      }

      var version = "3.3.1",
        jQuery = function (selector, context) {
          return new jQuery.fn.init(selector, context)
        },
        rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      jQuery.fn = jQuery.prototype = {
        jquery: version,
        constructor: jQuery,
        length: 0,
        toArray: function () {
          return slice.call(this)
        },
        get: function (num) {
          if (num == null) {
            return slice.call(this)
          }
          return num < 0 ? this[num + this.length] : this[num]
        },
        pushStack: function (elems) {
          var ret = jQuery.merge(this.constructor(), elems);
          ret.prevObject = this;
          return ret
        },
        each: function (callback) {
          return jQuery.each(this, callback)
        },
        map: function (callback) {
          return this.pushStack(jQuery.map(this, function (elem, i) {
            return callback.call(elem, i, elem)
          }))
        },
        slice: function () {
          return this.pushStack(slice.apply(this, arguments))
        },
        first: function () {
          return this.eq(0)
        },
        last: function () {
          return this.eq(-1)
        },
        eq: function (i) {
          var len = this.length,
            j = +i + (i < 0 ? len : 0);
          return this.pushStack(j >= 0 && j < len ? [this[j]] : [])
        },
        end: function () {
          return this.prevObject || this.constructor()
        },
        push: push,
        sort: arr.sort,
        splice: arr.splice
      };
      jQuery.extend = jQuery.fn.extend = function () {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {},
          i = 1,
          length = arguments.length,
          deep = false;
        if (typeof target === "boolean") {
          deep = target;
          target = arguments[i] || {};
          i++
        }
        if (typeof target !== "object" && !isFunction(target)) {
          target = {}
        }
        if (i === length) {
          target = this;
          i--
        }
        for (; i < length; i++) {
          if ((options = arguments[i]) != null) {
            for (name in options) {
              src = target[name];
              copy = options[name];
              if (target === copy) {
                continue
              }
              if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                if (copyIsArray) {
                  copyIsArray = false;
                  clone = src && Array.isArray(src) ? src : []
                } else {
                  clone = src && jQuery.isPlainObject(src) ? src : {}
                }
                target[name] = jQuery.extend(deep, clone, copy)
              } else if (copy !== undefined) {
                target[name] = copy
              }
            }
          }
        }
        return target
      };
      jQuery.extend({
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
        isReady: true,
        error: function (msg) {
          throw new Error(msg)
        },
        noop: function () {
        },
        isPlainObject: function (obj) {
          var proto, Ctor;
          if (!obj || toString.call(obj) !== "[object Object]") {
            return false
          }
          proto = getProto(obj);
          if (!proto) {
            return true
          }
          Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
          return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString
        },
        isEmptyObject: function (obj) {
          var name;
          for (name in obj) {
            return false
          }
          return true
        },
        globalEval: function (code) {
          DOMEval(code)
        },
        each: function (obj, callback) {
          var length, i = 0;
          if (isArrayLike(obj)) {
            length = obj.length;
            for (; i < length; i++) {
              if (callback.call(obj[i], i, obj[i]) === false) {
                break
              }
            }
          } else {
            for (i in obj) {
              if (callback.call(obj[i], i, obj[i]) === false) {
                break
              }
            }
          }
          return obj
        },
        trim: function (text) {
          return text == null ? "" : (text + "").replace(rtrim, "")
        },
        makeArray: function (arr, results) {
          var ret = results || [];
          if (arr != null) {
            if (isArrayLike(Object(arr))) {
              jQuery.merge(ret, typeof arr === "string" ? [arr] : arr)
            } else {
              push.call(ret, arr)
            }
          }
          return ret
        },
        inArray: function (elem, arr, i) {
          return arr == null ? -1 : indexOf.call(arr, elem, i)
        },
        merge: function (first, second) {
          var len = +second.length,
            j = 0,
            i = first.length;
          for (; j < len; j++) {
            first[i++] = second[j]
          }
          first.length = i;
          return first
        },
        grep: function (elems, callback, invert) {
          var callbackInverse, matches = [],
            i = 0,
            length = elems.length,
            callbackExpect = !invert;
          for (; i < length; i++) {
            callbackInverse = !callback(elems[i], i);
            if (callbackInverse !== callbackExpect) {
              matches.push(elems[i])
            }
          }
          return matches
        },
        map: function (elems, callback, arg) {
          var length, value, i = 0,
            ret = [];
          if (isArrayLike(elems)) {
            length = elems.length;
            for (; i < length; i++) {
              value = callback(elems[i], i, arg);
              if (value != null) {
                ret.push(value)
              }
            }
          } else {
            for (i in elems) {
              value = callback(elems[i], i, arg);
              if (value != null) {
                ret.push(value)
              }
            }
          }
          return concat.apply([], ret)
        },
        guid: 1,
        support: support
      });
      if (typeof Symbol === "function") {
        jQuery.fn[Symbol.iterator] = arr[Symbol.iterator]
      }
      jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase()
      });

      function isArrayLike(obj) {
        var length = !!obj && "length" in obj && obj.length,
          type = toType(obj);
        if (isFunction(obj) || isWindow(obj)) {
          return false
        }
        return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj
      }

      var Sizzle =
        /*!
                 * Sizzle CSS Selector Engine v2.3.3
                 * https://sizzlejs.com/
                 *
                 * Copyright jQuery Foundation and other contributors
                 * Released under the MIT license
                 * http://jquery.org/license
                 *
                 * Date: 2016-08-08
                 */
        function (window) {
          var i, support, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate,
            setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains,
            expando = "sizzle" + 1 * new Date,
            preferredDoc = window.document,
            dirruns = 0,
            done = 0,
            classCache = createCache(),
            tokenCache = createCache(),
            compilerCache = createCache(),
            sortOrder = function (a, b) {
              if (a === b) {
                hasDuplicate = true
              }
              return 0
            },
            hasOwn = {}.hasOwnProperty,
            arr = [],
            pop = arr.pop,
            push_native = arr.push,
            push = arr.push,
            slice = arr.slice,
            indexOf = function (list, elem) {
              var i = 0,
                len = list.length;
              for (; i < len; i++) {
                if (list[i] === elem) {
                  return i
                }
              }
              return -1
            },
            booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            whitespace = "[\\x20\\t\\r\\n\\f]",
            identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
            pseudos = ":(" + identifier + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + ".*" + ")\\)|)",
            rwhitespace = new RegExp(whitespace + "+", "g"),
            rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
            rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
            rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
            rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
            rpseudo = new RegExp(pseudos),
            ridentifier = new RegExp("^" + identifier + "$"),
            matchExpr = {
              ID: new RegExp("^#(" + identifier + ")"),
              CLASS: new RegExp("^\\.(" + identifier + ")"),
              TAG: new RegExp("^(" + identifier + "|[*])"),
              ATTR: new RegExp("^" + attributes),
              PSEUDO: new RegExp("^" + pseudos),
              CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
              bool: new RegExp("^(?:" + booleans + ")$", "i"),
              needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
            },
            rinputs = /^(?:input|select|textarea|button)$/i,
            rheader = /^h\d$/i,
            rnative = /^[^{]+\{\s*\[native \w/,
            rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            rsibling = /[+~]/,
            runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
            funescape = function (_, escaped, escapedWhitespace) {
              var high = "0x" + escaped - 65536;
              return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320)
            },
            rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            fcssescape = function (ch, asCodePoint) {
              if (asCodePoint) {
                if (ch === "\0") {
                  return "�"
                }
                return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " "
              }
              return "\\" + ch
            },
            unloadHandler = function () {
              setDocument()
            },
            disabledAncestor = addCombinator(function (elem) {
              return elem.disabled === true && ("form" in elem || "label" in elem)
            }, {
              dir: "parentNode",
              next: "legend"
            });
          try {
            push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
            arr[preferredDoc.childNodes.length].nodeType
          } catch (e) {
            push = {
              apply: arr.length ? function (target, els) {
                push_native.apply(target, slice.call(els))
              } : function (target, els) {
                var j = target.length,
                  i = 0;
                while (target[j++] = els[i++]) {
                }
                target.length = j - 1
              }
            }
          }

          function Sizzle(selector, context, results, seed) {
            var m, i, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument,
              nodeType = context ? context.nodeType : 9;
            results = results || [];
            if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
              return results
            }
            if (!seed) {
              if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
                setDocument(context)
              }
              context = context || document;
              if (documentIsHTML) {
                if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
                  if (m = match[1]) {
                    if (nodeType === 9) {
                      if (elem = context.getElementById(m)) {
                        if (elem.id === m) {
                          results.push(elem);
                          return results
                        }
                      } else {
                        return results
                      }
                    } else {
                      if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                        results.push(elem);
                        return results
                      }
                    }
                  } else if (match[2]) {
                    push.apply(results, context.getElementsByTagName(selector));
                    return results
                  } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
                    push.apply(results, context.getElementsByClassName(m));
                    return results
                  }
                }
                if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                  if (nodeType !== 1) {
                    newContext = context;
                    newSelector = selector
                  } else if (context.nodeName.toLowerCase() !== "object") {
                    if (nid = context.getAttribute("id")) {
                      nid = nid.replace(rcssescape, fcssescape)
                    } else {
                      context.setAttribute("id", nid = expando)
                    }
                    groups = tokenize(selector);
                    i = groups.length;
                    while (i--) {
                      groups[i] = "#" + nid + " " + toSelector(groups[i])
                    }
                    newSelector = groups.join(",");
                    newContext = rsibling.test(selector) && testContext(context.parentNode) || context
                  }
                  if (newSelector) {
                    try {
                      push.apply(results, newContext.querySelectorAll(newSelector));
                      return results
                    } catch (qsaError) {
                    } finally {
                      if (nid === expando) {
                        context.removeAttribute("id")
                      }
                    }
                  }
                }
              }
            }
            return select(selector.replace(rtrim, "$1"), context, results, seed)
          }

          function createCache() {
            var keys = [];

            function cache(key, value) {
              if (keys.push(key + " ") > Expr.cacheLength) {
                delete cache[keys.shift()]
              }
              return cache[key + " "] = value
            }

            return cache
          }

          function markFunction(fn) {
            fn[expando] = true;
            return fn
          }

          function assert(fn) {
            var el = document.createElement("fieldset");
            try {
              return !!fn(el)
            } catch (e) {
              return false
            } finally {
              if (el.parentNode) {
                el.parentNode.removeChild(el)
              }
              el = null
            }
          }

          function addHandle(attrs, handler) {
            var arr = attrs.split("|"),
              i = arr.length;
            while (i--) {
              Expr.attrHandle[arr[i]] = handler
            }
          }

          function siblingCheck(a, b) {
            var cur = b && a,
              diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;
            if (diff) {
              return diff
            }
            if (cur) {
              while (cur = cur.nextSibling) {
                if (cur === b) {
                  return -1
                }
              }
            }
            return a ? 1 : -1
          }

          function createInputPseudo(type) {
            return function (elem) {
              var name = elem.nodeName.toLowerCase();
              return name === "input" && elem.type === type
            }
          }

          function createButtonPseudo(type) {
            return function (elem) {
              var name = elem.nodeName.toLowerCase();
              return (name === "input" || name === "button") && elem.type === type
            }
          }

          function createDisabledPseudo(disabled) {
            return function (elem) {
              if ("form" in elem) {
                if (elem.parentNode && elem.disabled === false) {
                  if ("label" in elem) {
                    if ("label" in elem.parentNode) {
                      return elem.parentNode.disabled === disabled
                    } else {
                      return elem.disabled === disabled
                    }
                  }
                  return elem.isDisabled === disabled || elem.isDisabled !== !disabled && disabledAncestor(elem) === disabled
                }
                return elem.disabled === disabled
              } else if ("label" in elem) {
                return elem.disabled === disabled
              }
              return false
            }
          }

          function createPositionalPseudo(fn) {
            return markFunction(function (argument) {
              argument = +argument;
              return markFunction(function (seed, matches) {
                var j, matchIndexes = fn([], seed.length, argument),
                  i = matchIndexes.length;
                while (i--) {
                  if (seed[j = matchIndexes[i]]) {
                    seed[j] = !(matches[j] = seed[j])
                  }
                }
              })
            })
          }

          function testContext(context) {
            return context && typeof context.getElementsByTagName !== "undefined" && context
          }

          support = Sizzle.support = {};
          isXML = Sizzle.isXML = function (elem) {
            var documentElement = elem && (elem.ownerDocument || elem).documentElement;
            return documentElement ? documentElement.nodeName !== "HTML" : false
          };
          setDocument = Sizzle.setDocument = function (node) {
            var hasCompare, subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
            if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
              return document
            }
            document = doc;
            docElem = document.documentElement;
            documentIsHTML = !isXML(document);
            if (preferredDoc !== document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {
              if (subWindow.addEventListener) {
                subWindow.addEventListener("unload", unloadHandler, false)
              } else if (subWindow.attachEvent) {
                subWindow.attachEvent("onunload", unloadHandler)
              }
            }
            support.attributes = assert(function (el) {
              el.className = "i";
              return !el.getAttribute("className")
            });
            support.getElementsByTagName = assert(function (el) {
              el.appendChild(document.createComment(""));
              return !el.getElementsByTagName("*").length
            });
            support.getElementsByClassName = rnative.test(document.getElementsByClassName);
            support.getById = assert(function (el) {
              docElem.appendChild(el).id = expando;
              return !document.getElementsByName || !document.getElementsByName(expando).length
            });
            if (support.getById) {
              Expr.filter["ID"] = function (id) {
                var attrId = id.replace(runescape, funescape);
                return function (elem) {
                  return elem.getAttribute("id") === attrId
                }
              };
              Expr.find["ID"] = function (id, context) {
                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                  var elem = context.getElementById(id);
                  return elem ? [elem] : []
                }
              }
            } else {
              Expr.filter["ID"] = function (id) {
                var attrId = id.replace(runescape, funescape);
                return function (elem) {
                  var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                  return node && node.value === attrId
                }
              };
              Expr.find["ID"] = function (id, context) {
                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                  var node, i, elems, elem = context.getElementById(id);
                  if (elem) {
                    node = elem.getAttributeNode("id");
                    if (node && node.value === id) {
                      return [elem]
                    }
                    elems = context.getElementsByName(id);
                    i = 0;
                    while (elem = elems[i++]) {
                      node = elem.getAttributeNode("id");
                      if (node && node.value === id) {
                        return [elem]
                      }
                    }
                  }
                  return []
                }
              }
            }
            Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
              if (typeof context.getElementsByTagName !== "undefined") {
                return context.getElementsByTagName(tag)
              } else if (support.qsa) {
                return context.querySelectorAll(tag)
              }
            } : function (tag, context) {
              var elem, tmp = [],
                i = 0,
                results = context.getElementsByTagName(tag);
              if (tag === "*") {
                while (elem = results[i++]) {
                  if (elem.nodeType === 1) {
                    tmp.push(elem)
                  }
                }
                return tmp
              }
              return results
            };
            Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
              if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
                return context.getElementsByClassName(className)
              }
            };
            rbuggyMatches = [];
            rbuggyQSA = [];
            if (support.qsa = rnative.test(document.querySelectorAll)) {
              assert(function (el) {
                docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
                if (el.querySelectorAll("[msallowcapture^='']").length) {
                  rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")")
                }
                if (!el.querySelectorAll("[selected]").length) {
                  rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")")
                }
                if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
                  rbuggyQSA.push("~=")
                }
                if (!el.querySelectorAll(":checked").length) {
                  rbuggyQSA.push(":checked")
                }
                if (!el.querySelectorAll("a#" + expando + "+*").length) {
                  rbuggyQSA.push(".#.+[+~]")
                }
              });
              assert(function (el) {
                el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";
                var input = document.createElement("input");
                input.setAttribute("type", "hidden");
                el.appendChild(input).setAttribute("name", "D");
                if (el.querySelectorAll("[name=d]").length) {
                  rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=")
                }
                if (el.querySelectorAll(":enabled").length !== 2) {
                  rbuggyQSA.push(":enabled", ":disabled")
                }
                docElem.appendChild(el).disabled = true;
                if (el.querySelectorAll(":disabled").length !== 2) {
                  rbuggyQSA.push(":enabled", ":disabled")
                }
                el.querySelectorAll("*,:x");
                rbuggyQSA.push(",.*:")
              })
            }
            if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
              assert(function (el) {
                support.disconnectedMatch = matches.call(el, "*");
                matches.call(el, "[s!='']:x");
                rbuggyMatches.push("!=", pseudos)
              })
            }
            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
            rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
            hasCompare = rnative.test(docElem.compareDocumentPosition);
            contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
              var adown = a.nodeType === 9 ? a.documentElement : a,
                bup = b && b.parentNode;
              return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16))
            } : function (a, b) {
              if (b) {
                while (b = b.parentNode) {
                  if (b === a) {
                    return true
                  }
                }
              }
              return false
            };
            sortOrder = hasCompare ? function (a, b) {
              if (a === b) {
                hasDuplicate = true;
                return 0
              }
              var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
              if (compare) {
                return compare
              }
              compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
              if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
                if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
                  return -1
                }
                if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
                  return 1
                }
                return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0
              }
              return compare & 4 ? -1 : 1
            } : function (a, b) {
              if (a === b) {
                hasDuplicate = true;
                return 0
              }
              var cur, i = 0,
                aup = a.parentNode,
                bup = b.parentNode,
                ap = [a],
                bp = [b];
              if (!aup || !bup) {
                return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0
              } else if (aup === bup) {
                return siblingCheck(a, b)
              }
              cur = a;
              while (cur = cur.parentNode) {
                ap.unshift(cur)
              }
              cur = b;
              while (cur = cur.parentNode) {
                bp.unshift(cur)
              }
              while (ap[i] === bp[i]) {
                i++
              }
              return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0
            };
            return document
          };
          Sizzle.matches = function (expr, elements) {
            return Sizzle(expr, null, null, elements)
          };
          Sizzle.matchesSelector = function (elem, expr) {
            if ((elem.ownerDocument || elem) !== document) {
              setDocument(elem)
            }
            expr = expr.replace(rattributeQuotes, "='$1']");
            if (support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
              try {
                var ret = matches.call(elem, expr);
                if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
                  return ret
                }
              } catch (e) {
              }
            }
            return Sizzle(expr, document, null, [elem]).length > 0
          };
          Sizzle.contains = function (context, elem) {
            if ((context.ownerDocument || context) !== document) {
              setDocument(context)
            }
            return contains(context, elem)
          };
          Sizzle.attr = function (elem, name) {
            if ((elem.ownerDocument || elem) !== document) {
              setDocument(elem)
            }
            var fn = Expr.attrHandle[name.toLowerCase()],
              val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
            return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null
          };
          Sizzle.escape = function (sel) {
            return (sel + "").replace(rcssescape, fcssescape)
          };
          Sizzle.error = function (msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg)
          };
          Sizzle.uniqueSort = function (results) {
            var elem, duplicates = [],
              j = 0,
              i = 0;
            hasDuplicate = !support.detectDuplicates;
            sortInput = !support.sortStable && results.slice(0);
            results.sort(sortOrder);
            if (hasDuplicate) {
              while (elem = results[i++]) {
                if (elem === results[i]) {
                  j = duplicates.push(i)
                }
              }
              while (j--) {
                results.splice(duplicates[j], 1)
              }
            }
            sortInput = null;
            return results
          };
          getText = Sizzle.getText = function (elem) {
            var node, ret = "",
              i = 0,
              nodeType = elem.nodeType;
            if (!nodeType) {
              while (node = elem[i++]) {
                ret += getText(node)
              }
            } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
              if (typeof elem.textContent === "string") {
                return elem.textContent
              } else {
                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                  ret += getText(elem)
                }
              }
            } else if (nodeType === 3 || nodeType === 4) {
              return elem.nodeValue
            }
            return ret
          };
          Expr = Sizzle.selectors = {
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {},
            find: {},
            relative: {
              ">": {
                dir: "parentNode",
                first: true
              },
              " ": {
                dir: "parentNode"
              },
              "+": {
                dir: "previousSibling",
                first: true
              },
              "~": {
                dir: "previousSibling"
              }
            },
            preFilter: {
              ATTR: function (match) {
                match[1] = match[1].replace(runescape, funescape);
                match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                if (match[2] === "~=") {
                  match[3] = " " + match[3] + " "
                }
                return match.slice(0, 4)
              },
              CHILD: function (match) {
                match[1] = match[1].toLowerCase();
                if (match[1].slice(0, 3) === "nth") {
                  if (!match[3]) {
                    Sizzle.error(match[0])
                  }
                  match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                  match[5] = +(match[7] + match[8] || match[3] === "odd")
                } else if (match[3]) {
                  Sizzle.error(match[0])
                }
                return match
              },
              PSEUDO: function (match) {
                var excess, unquoted = !match[6] && match[2];
                if (matchExpr["CHILD"].test(match[0])) {
                  return null
                }
                if (match[3]) {
                  match[2] = match[4] || match[5] || ""
                } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                  match[0] = match[0].slice(0, excess);
                  match[2] = unquoted.slice(0, excess)
                }
                return match.slice(0, 3)
              }
            },
            filter: {
              TAG: function (nodeNameSelector) {
                var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                return nodeNameSelector === "*" ? function () {
                  return true
                } : function (elem) {
                  return elem.nodeName && elem.nodeName.toLowerCase() === nodeName
                }
              },
              CLASS: function (className) {
                var pattern = classCache[className + " "];
                return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
                  return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "")
                })
              },
              ATTR: function (name, operator, check) {
                return function (elem) {
                  var result = Sizzle.attr(elem, name);
                  if (result == null) {
                    return operator === "!="
                  }
                  if (!operator) {
                    return true
                  }
                  result += "";
                  return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false
                }
              },
              CHILD: function (type, what, argument, first, last) {
                var simple = type.slice(0, 3) !== "nth",
                  forward = type.slice(-4) !== "last",
                  ofType = what === "of-type";
                return first === 1 && last === 0 ? function (elem) {
                  return !!elem.parentNode
                } : function (elem, context, xml) {
                  var cache, uniqueCache, outerCache, node, nodeIndex, start,
                    dir = simple !== forward ? "nextSibling" : "previousSibling",
                    parent = elem.parentNode,
                    name = ofType && elem.nodeName.toLowerCase(),
                    useCache = !xml && !ofType,
                    diff = false;
                  if (parent) {
                    if (simple) {
                      while (dir) {
                        node = elem;
                        while (node = node[dir]) {
                          if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                            return false
                          }
                        }
                        start = dir = type === "only" && !start && "nextSibling"
                      }
                      return true
                    }
                    start = [forward ? parent.firstChild : parent.lastChild];
                    if (forward && useCache) {
                      node = parent;
                      outerCache = node[expando] || (node[expando] = {});
                      uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                      cache = uniqueCache[type] || [];
                      nodeIndex = cache[0] === dirruns && cache[1];
                      diff = nodeIndex && cache[2];
                      node = nodeIndex && parent.childNodes[nodeIndex];
                      while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                        if (node.nodeType === 1 && ++diff && node === elem) {
                          uniqueCache[type] = [dirruns, nodeIndex, diff];
                          break
                        }
                      }
                    } else {
                      if (useCache) {
                        node = elem;
                        outerCache = node[expando] || (node[expando] = {});
                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                        cache = uniqueCache[type] || [];
                        nodeIndex = cache[0] === dirruns && cache[1];
                        diff = nodeIndex
                      }
                      if (diff === false) {
                        while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                          if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                            if (useCache) {
                              outerCache = node[expando] || (node[expando] = {});
                              uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                              uniqueCache[type] = [dirruns, diff]
                            }
                            if (node === elem) {
                              break
                            }
                          }
                        }
                      }
                    }
                    diff -= last;
                    return diff === first || diff % first === 0 && diff / first >= 0
                  }
                }
              },
              PSEUDO: function (pseudo, argument) {
                var args,
                  fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                if (fn[expando]) {
                  return fn(argument)
                }
                if (fn.length > 1) {
                  args = [pseudo, pseudo, "", argument];
                  return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
                    var idx, matched = fn(seed, argument),
                      i = matched.length;
                    while (i--) {
                      idx = indexOf(seed, matched[i]);
                      seed[idx] = !(matches[idx] = matched[i])
                    }
                  }) : function (elem) {
                    return fn(elem, 0, args)
                  }
                }
                return fn
              }
            },
            pseudos: {
              not: markFunction(function (selector) {
                var input = [],
                  results = [],
                  matcher = compile(selector.replace(rtrim, "$1"));
                return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
                  var elem, unmatched = matcher(seed, null, xml, []),
                    i = seed.length;
                  while (i--) {
                    if (elem = unmatched[i]) {
                      seed[i] = !(matches[i] = elem)
                    }
                  }
                }) : function (elem, context, xml) {
                  input[0] = elem;
                  matcher(input, null, xml, results);
                  input[0] = null;
                  return !results.pop()
                }
              }),
              has: markFunction(function (selector) {
                return function (elem) {
                  return Sizzle(selector, elem).length > 0
                }
              }),
              contains: markFunction(function (text) {
                text = text.replace(runescape, funescape);
                return function (elem) {
                  return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1
                }
              }),
              lang: markFunction(function (lang) {
                if (!ridentifier.test(lang || "")) {
                  Sizzle.error("unsupported lang: " + lang)
                }
                lang = lang.replace(runescape, funescape).toLowerCase();
                return function (elem) {
                  var elemLang;
                  do {
                    if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                      elemLang = elemLang.toLowerCase();
                      return elemLang === lang || elemLang.indexOf(lang + "-") === 0
                    }
                  } while ((elem = elem.parentNode) && elem.nodeType === 1);
                  return false
                }
              }),
              target: function (elem) {
                var hash = window.location && window.location.hash;
                return hash && hash.slice(1) === elem.id
              },
              root: function (elem) {
                return elem === docElem
              },
              focus: function (elem) {
                return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex)
              },
              enabled: createDisabledPseudo(false),
              disabled: createDisabledPseudo(true),
              checked: function (elem) {
                var nodeName = elem.nodeName.toLowerCase();
                return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected
              },
              selected: function (elem) {
                if (elem.parentNode) {
                  elem.parentNode.selectedIndex
                }
                return elem.selected === true
              },
              empty: function (elem) {
                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                  if (elem.nodeType < 6) {
                    return false
                  }
                }
                return true
              },
              parent: function (elem) {
                return !Expr.pseudos["empty"](elem)
              },
              header: function (elem) {
                return rheader.test(elem.nodeName)
              },
              input: function (elem) {
                return rinputs.test(elem.nodeName)
              },
              button: function (elem) {
                var name = elem.nodeName.toLowerCase();
                return name === "input" && elem.type === "button" || name === "button"
              },
              text: function (elem) {
                var attr;
                return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text")
              },
              first: createPositionalPseudo(function () {
                return [0]
              }),
              last: createPositionalPseudo(function (matchIndexes, length) {
                return [length - 1]
              }),
              eq: createPositionalPseudo(function (matchIndexes, length, argument) {
                return [argument < 0 ? argument + length : argument]
              }),
              even: createPositionalPseudo(function (matchIndexes, length) {
                var i = 0;
                for (; i < length; i += 2) {
                  matchIndexes.push(i)
                }
                return matchIndexes
              }),
              odd: createPositionalPseudo(function (matchIndexes, length) {
                var i = 1;
                for (; i < length; i += 2) {
                  matchIndexes.push(i)
                }
                return matchIndexes
              }),
              lt: createPositionalPseudo(function (matchIndexes, length, argument) {
                var i = argument < 0 ? argument + length : argument;
                for (; --i >= 0;) {
                  matchIndexes.push(i)
                }
                return matchIndexes
              }),
              gt: createPositionalPseudo(function (matchIndexes, length, argument) {
                var i = argument < 0 ? argument + length : argument;
                for (; ++i < length;) {
                  matchIndexes.push(i)
                }
                return matchIndexes
              })
            }
          };
          Expr.pseudos["nth"] = Expr.pseudos["eq"];
          for (i in {
            radio: true,
            checkbox: true,
            file: true,
            password: true,
            image: true
          }) {
            Expr.pseudos[i] = createInputPseudo(i)
          }
          for (i in {
            submit: true,
            reset: true
          }) {
            Expr.pseudos[i] = createButtonPseudo(i)
          }

          function setFilters() {
          }

          setFilters.prototype = Expr.filters = Expr.pseudos;
          Expr.setFilters = new setFilters;
          tokenize = Sizzle.tokenize = function (selector, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
            if (cached) {
              return parseOnly ? 0 : cached.slice(0)
            }
            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;
            while (soFar) {
              if (!matched || (match = rcomma.exec(soFar))) {
                if (match) {
                  soFar = soFar.slice(match[0].length) || soFar
                }
                groups.push(tokens = [])
              }
              matched = false;
              if (match = rcombinators.exec(soFar)) {
                matched = match.shift();
                tokens.push({
                  value: matched,
                  type: match[0].replace(rtrim, " ")
                });
                soFar = soFar.slice(matched.length)
              }
              for (type in Expr.filter) {
                if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                  matched = match.shift();
                  tokens.push({
                    value: matched,
                    type: type,
                    matches: match
                  });
                  soFar = soFar.slice(matched.length)
                }
              }
              if (!matched) {
                break
              }
            }
            return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0)
          };

          function toSelector(tokens) {
            var i = 0,
              len = tokens.length,
              selector = "";
            for (; i < len; i++) {
              selector += tokens[i].value
            }
            return selector
          }

          function addCombinator(matcher, combinator, base) {
            var dir = combinator.dir,
              skip = combinator.next,
              key = skip || dir,
              checkNonElements = base && key === "parentNode",
              doneName = done++;
            return combinator.first ? function (elem, context, xml) {
              while (elem = elem[dir]) {
                if (elem.nodeType === 1 || checkNonElements) {
                  return matcher(elem, context, xml)
                }
              }
              return false
            } : function (elem, context, xml) {
              var oldCache, uniqueCache, outerCache, newCache = [dirruns, doneName];
              if (xml) {
                while (elem = elem[dir]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    if (matcher(elem, context, xml)) {
                      return true
                    }
                  }
                }
              } else {
                while (elem = elem[dir]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    outerCache = elem[expando] || (elem[expando] = {});
                    uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
                    if (skip && skip === elem.nodeName.toLowerCase()) {
                      elem = elem[dir] || elem
                    } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                      return newCache[2] = oldCache[2]
                    } else {
                      uniqueCache[key] = newCache;
                      if (newCache[2] = matcher(elem, context, xml)) {
                        return true
                      }
                    }
                  }
                }
              }
              return false
            }
          }

          function elementMatcher(matchers) {
            return matchers.length > 1 ? function (elem, context, xml) {
              var i = matchers.length;
              while (i--) {
                if (!matchers[i](elem, context, xml)) {
                  return false
                }
              }
              return true
            } : matchers[0]
          }

          function multipleContexts(selector, contexts, results) {
            var i = 0,
              len = contexts.length;
            for (; i < len; i++) {
              Sizzle(selector, contexts[i], results)
            }
            return results
          }

          function condense(unmatched, map, filter, context, xml) {
            var elem, newUnmatched = [],
              i = 0,
              len = unmatched.length,
              mapped = map != null;
            for (; i < len; i++) {
              if (elem = unmatched[i]) {
                if (!filter || filter(elem, context, xml)) {
                  newUnmatched.push(elem);
                  if (mapped) {
                    map.push(i)
                  }
                }
              }
            }
            return newUnmatched
          }

          function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            if (postFilter && !postFilter[expando]) {
              postFilter = setMatcher(postFilter)
            }
            if (postFinder && !postFinder[expando]) {
              postFinder = setMatcher(postFinder, postSelector)
            }
            return markFunction(function (seed, results, context, xml) {
              var temp, i, elem, preMap = [],
                postMap = [],
                preexisting = results.length,
                elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
                matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
                matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
              if (matcher) {
                matcher(matcherIn, matcherOut, context, xml)
              }
              if (postFilter) {
                temp = condense(matcherOut, postMap);
                postFilter(temp, [], context, xml);
                i = temp.length;
                while (i--) {
                  if (elem = temp[i]) {
                    matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem)
                  }
                }
              }
              if (seed) {
                if (postFinder || preFilter) {
                  if (postFinder) {
                    temp = [];
                    i = matcherOut.length;
                    while (i--) {
                      if (elem = matcherOut[i]) {
                        temp.push(matcherIn[i] = elem)
                      }
                    }
                    postFinder(null, matcherOut = [], temp, xml)
                  }
                  i = matcherOut.length;
                  while (i--) {
                    if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                      seed[temp] = !(results[temp] = elem)
                    }
                  }
                }
              } else {
                matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                if (postFinder) {
                  postFinder(null, results, matcherOut, xml)
                } else {
                  push.apply(results, matcherOut)
                }
              }
            })
          }

          function matcherFromTokens(tokens) {
            var checkContext, matcher, j, len = tokens.length,
              leadingRelative = Expr.relative[tokens[0].type],
              implicitRelative = leadingRelative || Expr.relative[" "],
              i = leadingRelative ? 1 : 0,
              matchContext = addCombinator(function (elem) {
                return elem === checkContext
              }, implicitRelative, true),
              matchAnyContext = addCombinator(function (elem) {
                return indexOf(checkContext, elem) > -1
              }, implicitRelative, true),
              matchers = [function (elem, context, xml) {
                var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                checkContext = null;
                return ret
              }];
            for (; i < len; i++) {
              if (matcher = Expr.relative[tokens[i].type]) {
                matchers = [addCombinator(elementMatcher(matchers), matcher)]
              } else {
                matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                if (matcher[expando]) {
                  j = ++i;
                  for (; j < len; j++) {
                    if (Expr.relative[tokens[j].type]) {
                      break
                    }
                  }
                  return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
                    value: tokens[i - 2].type === " " ? "*" : ""
                  })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens))
                }
                matchers.push(matcher)
              }
            }
            return elementMatcher(matchers)
          }

          function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var bySet = setMatchers.length > 0,
              byElement = elementMatchers.length > 0,
              superMatcher = function (seed, context, xml, results, outermost) {
                var elem, j, matcher, matchedCount = 0,
                  i = "0",
                  unmatched = seed && [],
                  setMatched = [],
                  contextBackup = outermostContext,
                  elems = seed || byElement && Expr.find["TAG"]("*", outermost),
                  dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || .1,
                  len = elems.length;
                if (outermost) {
                  outermostContext = context === document || context || outermost
                }
                for (; i !== len && (elem = elems[i]) != null; i++) {
                  if (byElement && elem) {
                    j = 0;
                    if (!context && elem.ownerDocument !== document) {
                      setDocument(elem);
                      xml = !documentIsHTML
                    }
                    while (matcher = elementMatchers[j++]) {
                      if (matcher(elem, context || document, xml)) {
                        results.push(elem);
                        break
                      }
                    }
                    if (outermost) {
                      dirruns = dirrunsUnique
                    }
                  }
                  if (bySet) {
                    if (elem = !matcher && elem) {
                      matchedCount--
                    }
                    if (seed) {
                      unmatched.push(elem)
                    }
                  }
                }
                matchedCount += i;
                if (bySet && i !== matchedCount) {
                  j = 0;
                  while (matcher = setMatchers[j++]) {
                    matcher(unmatched, setMatched, context, xml)
                  }
                  if (seed) {
                    if (matchedCount > 0) {
                      while (i--) {
                        if (!(unmatched[i] || setMatched[i])) {
                          setMatched[i] = pop.call(results)
                        }
                      }
                    }
                    setMatched = condense(setMatched)
                  }
                  push.apply(results, setMatched);
                  if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                    Sizzle.uniqueSort(results)
                  }
                }
                if (outermost) {
                  dirruns = dirrunsUnique;
                  outermostContext = contextBackup
                }
                return unmatched
              };
            return bySet ? markFunction(superMatcher) : superMatcher
          }

          compile = Sizzle.compile = function (selector, match) {
            var i, setMatchers = [],
              elementMatchers = [],
              cached = compilerCache[selector + " "];
            if (!cached) {
              if (!match) {
                match = tokenize(selector)
              }
              i = match.length;
              while (i--) {
                cached = matcherFromTokens(match[i]);
                if (cached[expando]) {
                  setMatchers.push(cached)
                } else {
                  elementMatchers.push(cached)
                }
              }
              cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
              cached.selector = selector
            }
            return cached
          };
          select = Sizzle.select = function (selector, context, results, seed) {
            var i, tokens, token, type, find, compiled = typeof selector === "function" && selector,
              match = !seed && tokenize(selector = compiled.selector || selector);
            results = results || [];
            if (match.length === 1) {
              tokens = match[0] = match[0].slice(0);
              if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                if (!context) {
                  return results
                } else if (compiled) {
                  context = context.parentNode
                }
                selector = selector.slice(tokens.shift().value.length)
              }
              i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
              while (i--) {
                token = tokens[i];
                if (Expr.relative[type = token.type]) {
                  break
                }
                if (find = Expr.find[type]) {
                  if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
                    tokens.splice(i, 1);
                    selector = seed.length && toSelector(tokens);
                    if (!selector) {
                      push.apply(results, seed);
                      return results
                    }
                    break
                  }
                }
              }
            }
            (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
            return results
          };
          support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
          support.detectDuplicates = !!hasDuplicate;
          setDocument();
          support.sortDetached = assert(function (el) {
            return el.compareDocumentPosition(document.createElement("fieldset")) & 1
          });
          if (!assert(function (el) {
            el.innerHTML = "<a href='#'></a>";
            return el.firstChild.getAttribute("href") === "#"
          })) {
            addHandle("type|href|height|width", function (elem, name, isXML) {
              if (!isXML) {
                return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2)
              }
            })
          }
          if (!support.attributes || !assert(function (el) {
            el.innerHTML = "<input/>";
            el.firstChild.setAttribute("value", "");
            return el.firstChild.getAttribute("value") === ""
          })) {
            addHandle("value", function (elem, name, isXML) {
              if (!isXML && elem.nodeName.toLowerCase() === "input") {
                return elem.defaultValue
              }
            })
          }
          if (!assert(function (el) {
            return el.getAttribute("disabled") == null
          })) {
            addHandle(booleans, function (elem, name, isXML) {
              var val;
              if (!isXML) {
                return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null
              }
            })
          }
          return Sizzle
        }(window);
      jQuery.find = Sizzle;
      jQuery.expr = Sizzle.selectors;
      jQuery.expr[":"] = jQuery.expr.pseudos;
      jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
      jQuery.text = Sizzle.getText;
      jQuery.isXMLDoc = Sizzle.isXML;
      jQuery.contains = Sizzle.contains;
      jQuery.escapeSelector = Sizzle.escape;
      var dir = function (elem, dir, until) {
        var matched = [],
          truncate = until !== undefined;
        while ((elem = elem[dir]) && elem.nodeType !== 9) {
          if (elem.nodeType === 1) {
            if (truncate && jQuery(elem).is(until)) {
              break
            }
            matched.push(elem)
          }
        }
        return matched
      };
      var siblings = function (n, elem) {
        var matched = [];
        for (; n; n = n.nextSibling) {
          if (n.nodeType === 1 && n !== elem) {
            matched.push(n)
          }
        }
        return matched
      };
      var rneedsContext = jQuery.expr.match.needsContext;

      function nodeName(elem, name) {
        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase()
      }

      var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

      function winnow(elements, qualifier, not) {
        if (isFunction(qualifier)) {
          return jQuery.grep(elements, function (elem, i) {
            return !!qualifier.call(elem, i, elem) !== not
          })
        }
        if (qualifier.nodeType) {
          return jQuery.grep(elements, function (elem) {
            return elem === qualifier !== not
          })
        }
        if (typeof qualifier !== "string") {
          return jQuery.grep(elements, function (elem) {
            return indexOf.call(qualifier, elem) > -1 !== not
          })
        }
        return jQuery.filter(qualifier, elements, not)
      }

      jQuery.filter = function (expr, elems, not) {
        var elem = elems[0];
        if (not) {
          expr = ":not(" + expr + ")"
        }
        if (elems.length === 1 && elem.nodeType === 1) {
          return jQuery.find.matchesSelector(elem, expr) ? [elem] : []
        }
        return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
          return elem.nodeType === 1
        }))
      };
      jQuery.fn.extend({
        find: function (selector) {
          var i, ret, len = this.length,
            self = this;
          if (typeof selector !== "string") {
            return this.pushStack(jQuery(selector).filter(function () {
              for (i = 0; i < len; i++) {
                if (jQuery.contains(self[i], this)) {
                  return true
                }
              }
            }))
          }
          ret = this.pushStack([]);
          for (i = 0; i < len; i++) {
            jQuery.find(selector, self[i], ret)
          }
          return len > 1 ? jQuery.uniqueSort(ret) : ret
        },
        filter: function (selector) {
          return this.pushStack(winnow(this, selector || [], false))
        },
        not: function (selector) {
          return this.pushStack(winnow(this, selector || [], true))
        },
        is: function (selector) {
          return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length
        }
      });
      var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        init = jQuery.fn.init = function (selector, context, root) {
          var match, elem;
          if (!selector) {
            return this
          }
          root = root || rootjQuery;
          if (typeof selector === "string") {
            if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
              match = [null, selector, null]
            } else {
              match = rquickExpr.exec(selector)
            }
            if (match && (match[1] || !context)) {
              if (match[1]) {
                context = context instanceof jQuery ? context[0] : context;
                jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
                if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                  for (match in context) {
                    if (isFunction(this[match])) {
                      this[match](context[match])
                    } else {
                      this.attr(match, context[match])
                    }
                  }
                }
                return this
              } else {
                elem = document.getElementById(match[2]);
                if (elem) {
                  this[0] = elem;
                  this.length = 1
                }
                return this
              }
            } else if (!context || context.jquery) {
              return (context || root).find(selector)
            } else {
              return this.constructor(context).find(selector)
            }
          } else if (selector.nodeType) {
            this[0] = selector;
            this.length = 1;
            return this
          } else if (isFunction(selector)) {
            return root.ready !== undefined ? root.ready(selector) : selector(jQuery)
          }
          return jQuery.makeArray(selector, this)
        };
      init.prototype = jQuery.fn;
      rootjQuery = jQuery(document);
      var rparentsprev = /^(?:parents|prev(?:Until|All))/,
        guaranteedUnique = {
          children: true,
          contents: true,
          next: true,
          prev: true
        };
      jQuery.fn.extend({
        has: function (target) {
          var targets = jQuery(target, this),
            l = targets.length;
          return this.filter(function () {
            var i = 0;
            for (; i < l; i++) {
              if (jQuery.contains(this, targets[i])) {
                return true
              }
            }
          })
        },
        closest: function (selectors, context) {
          var cur, i = 0,
            l = this.length,
            matched = [],
            targets = typeof selectors !== "string" && jQuery(selectors);
          if (!rneedsContext.test(selectors)) {
            for (; i < l; i++) {
              for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                  matched.push(cur);
                  break
                }
              }
            }
          }
          return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched)
        },
        index: function (elem) {
          if (!elem) {
            return this[0] && this[0].parentNode ? this.first().prevAll().length : -1
          }
          if (typeof elem === "string") {
            return indexOf.call(jQuery(elem), this[0])
          }
          return indexOf.call(this, elem.jquery ? elem[0] : elem)
        },
        add: function (selector, context) {
          return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))))
        },
        addBack: function (selector) {
          return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector))
        }
      });

      function sibling(cur, dir) {
        while ((cur = cur[dir]) && cur.nodeType !== 1) {
        }
        return cur
      }

      jQuery.each({
        parent: function (elem) {
          var parent = elem.parentNode;
          return parent && parent.nodeType !== 11 ? parent : null
        },
        parents: function (elem) {
          return dir(elem, "parentNode")
        },
        parentsUntil: function (elem, i, until) {
          return dir(elem, "parentNode", until)
        },
        next: function (elem) {
          return sibling(elem, "nextSibling")
        },
        prev: function (elem) {
          return sibling(elem, "previousSibling")
        },
        nextAll: function (elem) {
          return dir(elem, "nextSibling")
        },
        prevAll: function (elem) {
          return dir(elem, "previousSibling")
        },
        nextUntil: function (elem, i, until) {
          return dir(elem, "nextSibling", until)
        },
        prevUntil: function (elem, i, until) {
          return dir(elem, "previousSibling", until)
        },
        siblings: function (elem) {
          return siblings((elem.parentNode || {}).firstChild, elem)
        },
        children: function (elem) {
          return siblings(elem.firstChild)
        },
        contents: function (elem) {
          if (nodeName(elem, "iframe")) {
            return elem.contentDocument
          }
          if (nodeName(elem, "template")) {
            elem = elem.content || elem
          }
          return jQuery.merge([], elem.childNodes)
        }
      }, function (name, fn) {
        jQuery.fn[name] = function (until, selector) {
          var matched = jQuery.map(this, fn, until);
          if (name.slice(-5) !== "Until") {
            selector = until
          }
          if (selector && typeof selector === "string") {
            matched = jQuery.filter(selector, matched)
          }
          if (this.length > 1) {
            if (!guaranteedUnique[name]) {
              jQuery.uniqueSort(matched)
            }
            if (rparentsprev.test(name)) {
              matched.reverse()
            }
          }
          return this.pushStack(matched)
        }
      });
      var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;

      function createOptions(options) {
        var object = {};
        jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
          object[flag] = true
        });
        return object
      }

      jQuery.Callbacks = function (options) {
        options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
        var firing, memory, fired, locked, list = [],
          queue = [],
          firingIndex = -1,
          fire = function () {
            locked = locked || options.once;
            fired = firing = true;
            for (; queue.length; firingIndex = -1) {
              memory = queue.shift();
              while (++firingIndex < list.length) {
                if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                  firingIndex = list.length;
                  memory = false
                }
              }
            }
            if (!options.memory) {
              memory = false
            }
            firing = false;
            if (locked) {
              if (memory) {
                list = []
              } else {
                list = ""
              }
            }
          },
          self = {
            add: function () {
              if (list) {
                if (memory && !firing) {
                  firingIndex = list.length - 1;
                  queue.push(memory)
                }
                (function add(args) {
                  jQuery.each(args, function (_, arg) {
                    if (isFunction(arg)) {
                      if (!options.unique || !self.has(arg)) {
                        list.push(arg)
                      }
                    } else if (arg && arg.length && toType(arg) !== "string") {
                      add(arg)
                    }
                  })
                })(arguments);
                if (memory && !firing) {
                  fire()
                }
              }
              return this
            },
            remove: function () {
              jQuery.each(arguments, function (_, arg) {
                var index;
                while ((index = jQuery.inArray(arg, list, index)) > -1) {
                  list.splice(index, 1);
                  if (index <= firingIndex) {
                    firingIndex--
                  }
                }
              });
              return this
            },
            has: function (fn) {
              return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0
            },
            empty: function () {
              if (list) {
                list = []
              }
              return this
            },
            disable: function () {
              locked = queue = [];
              list = memory = "";
              return this
            },
            disabled: function () {
              return !list
            },
            lock: function () {
              locked = queue = [];
              if (!memory && !firing) {
                list = memory = ""
              }
              return this
            },
            locked: function () {
              return !!locked
            },
            fireWith: function (context, args) {
              if (!locked) {
                args = args || [];
                args = [context, args.slice ? args.slice() : args];
                queue.push(args);
                if (!firing) {
                  fire()
                }
              }
              return this
            },
            fire: function () {
              self.fireWith(this, arguments);
              return this
            },
            fired: function () {
              return !!fired
            }
          };
        return self
      };

      function Identity(v) {
        return v
      }

      function Thrower(ex) {
        throw ex
      }

      function adoptValue(value, resolve, reject, noValue) {
        var method;
        try {
          if (value && isFunction(method = value.promise)) {
            method.call(value).done(resolve).fail(reject)
          } else if (value && isFunction(method = value.then)) {
            method.call(value, resolve, reject)
          } else {
            resolve.apply(undefined, [value].slice(noValue))
          }
        } catch (value) {
          reject.apply(undefined, [value])
        }
      }

      jQuery.extend({
        Deferred: function (func) {
          var tuples = [
              ["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2],
              ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"],
              ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]
            ],
            state = "pending",
            promise = {
              state: function () {
                return state
              },
              always: function () {
                deferred.done(arguments).fail(arguments);
                return this
              },
              catch: function (fn) {
                return promise.then(null, fn)
              },
              pipe: function () {
                var fns = arguments;
                return jQuery.Deferred(function (newDefer) {
                  jQuery.each(tuples, function (i, tuple) {
                    var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                    deferred[tuple[1]](function () {
                      var returned = fn && fn.apply(this, arguments);
                      if (returned && isFunction(returned.promise)) {
                        returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject)
                      } else {
                        newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments)
                      }
                    })
                  });
                  fns = null
                }).promise()
              },
              then: function (onFulfilled, onRejected, onProgress) {
                var maxDepth = 0;

                function resolve(depth, deferred, handler, special) {
                  return function () {
                    var that = this,
                      args = arguments,
                      mightThrow = function () {
                        var returned, then;
                        if (depth < maxDepth) {
                          return
                        }
                        returned = handler.apply(that, args);
                        if (returned === deferred.promise()) {
                          throw new TypeError("Thenable self-resolution")
                        }
                        then = returned && (typeof returned === "object" || typeof returned === "function") && returned.then;
                        if (isFunction(then)) {
                          if (special) {
                            then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special))
                          } else {
                            maxDepth++;
                            then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith))
                          }
                        } else {
                          if (handler !== Identity) {
                            that = undefined;
                            args = [returned]
                          }
                          (special || deferred.resolveWith)(that, args)
                        }
                      },
                      process = special ? mightThrow : function () {
                        try {
                          mightThrow()
                        } catch (e) {
                          if (jQuery.Deferred.exceptionHook) {
                            jQuery.Deferred.exceptionHook(e, process.stackTrace)
                          }
                          if (depth + 1 >= maxDepth) {
                            if (handler !== Thrower) {
                              that = undefined;
                              args = [e]
                            }
                            deferred.rejectWith(that, args)
                          }
                        }
                      };
                    if (depth) {
                      process()
                    } else {
                      if (jQuery.Deferred.getStackHook) {
                        process.stackTrace = jQuery.Deferred.getStackHook()
                      }
                      window.setTimeout(process)
                    }
                  }
                }

                return jQuery.Deferred(function (newDefer) {
                  tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));
                  tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity));
                  tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower))
                }).promise()
              },
              promise: function (obj) {
                return obj != null ? jQuery.extend(obj, promise) : promise
              }
            },
            deferred = {};
          jQuery.each(tuples, function (i, tuple) {
            var list = tuple[2],
              stateString = tuple[5];
            promise[tuple[1]] = list.add;
            if (stateString) {
              list.add(function () {
                state = stateString
              }, tuples[3 - i][2].disable, tuples[3 - i][3].disable, tuples[0][2].lock, tuples[0][3].lock)
            }
            list.add(tuple[3].fire);
            deferred[tuple[0]] = function () {
              deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
              return this
            };
            deferred[tuple[0] + "With"] = list.fireWith
          });
          promise.promise(deferred);
          if (func) {
            func.call(deferred, deferred)
          }
          return deferred
        },
        when: function (singleValue) {
          var remaining = arguments.length,
            i = remaining,
            resolveContexts = Array(i),
            resolveValues = slice.call(arguments),
            master = jQuery.Deferred(),
            updateFunc = function (i) {
              return function (value) {
                resolveContexts[i] = this;
                resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value;
                if (!--remaining) {
                  master.resolveWith(resolveContexts, resolveValues)
                }
              }
            };
          if (remaining <= 1) {
            adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining);
            if (master.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
              return master.then()
            }
          }
          while (i--) {
            adoptValue(resolveValues[i], updateFunc(i), master.reject)
          }
          return master.promise()
        }
      });
      var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      jQuery.Deferred.exceptionHook = function (error, stack) {
        if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
          window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack)
        }
      };
      jQuery.readyException = function (error) {
        window.setTimeout(function () {
          throw error
        })
      };
      var readyList = jQuery.Deferred();
      jQuery.fn.ready = function (fn) {
        readyList.then(fn).catch(function (error) {
          jQuery.readyException(error)
        });
        return this
      };
      jQuery.extend({
        isReady: false,
        readyWait: 1,
        ready: function (wait) {
          if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
            return
          }
          jQuery.isReady = true;
          if (wait !== true && --jQuery.readyWait > 0) {
            return
          }
          readyList.resolveWith(document, [jQuery])
        }
      });
      jQuery.ready.then = readyList.then;

      function completed() {
        document.removeEventListener("DOMContentLoaded", completed);
        window.removeEventListener("load", completed);
        jQuery.ready()
      }

      if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
        window.setTimeout(jQuery.ready)
      } else {
        document.addEventListener("DOMContentLoaded", completed);
        window.addEventListener("load", completed)
      }
      var access = function (elems, fn, key, value, chainable, emptyGet, raw) {
        var i = 0,
          len = elems.length,
          bulk = key == null;
        if (toType(key) === "object") {
          chainable = true;
          for (i in key) {
            access(elems, fn, i, key[i], true, emptyGet, raw)
          }
        } else if (value !== undefined) {
          chainable = true;
          if (!isFunction(value)) {
            raw = true
          }
          if (bulk) {
            if (raw) {
              fn.call(elems, value);
              fn = null
            } else {
              bulk = fn;
              fn = function (elem, key, value) {
                return bulk.call(jQuery(elem), value)
              }
            }
          }
          if (fn) {
            for (; i < len; i++) {
              fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)))
            }
          }
        }
        if (chainable) {
          return elems
        }
        if (bulk) {
          return fn.call(elems)
        }
        return len ? fn(elems[0], key) : emptyGet
      };
      var rmsPrefix = /^-ms-/,
        rdashAlpha = /-([a-z])/g;

      function fcamelCase(all, letter) {
        return letter.toUpperCase()
      }

      function camelCase(string) {
        return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase)
      }

      var acceptData = function (owner) {
        return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType
      };

      function Data() {
        this.expando = jQuery.expando + Data.uid++
      }

      Data.uid = 1;
      Data.prototype = {
        cache: function (owner) {
          var value = owner[this.expando];
          if (!value) {
            value = {};
            if (acceptData(owner)) {
              if (owner.nodeType) {
                owner[this.expando] = value
              } else {
                Object.defineProperty(owner, this.expando, {
                  value: value,
                  configurable: true
                })
              }
            }
          }
          return value
        },
        set: function (owner, data, value) {
          var prop, cache = this.cache(owner);
          if (typeof data === "string") {
            cache[camelCase(data)] = value
          } else {
            for (prop in data) {
              cache[camelCase(prop)] = data[prop]
            }
          }
          return cache
        },
        get: function (owner, key) {
          return key === undefined ? this.cache(owner) : owner[this.expando] && owner[this.expando][camelCase(key)]
        },
        access: function (owner, key, value) {
          if (key === undefined || key && typeof key === "string" && value === undefined) {
            return this.get(owner, key)
          }
          this.set(owner, key, value);
          return value !== undefined ? value : key
        },
        remove: function (owner, key) {
          var i, cache = owner[this.expando];
          if (cache === undefined) {
            return
          }
          if (key !== undefined) {
            if (Array.isArray(key)) {
              key = key.map(camelCase)
            } else {
              key = camelCase(key);
              key = key in cache ? [key] : key.match(rnothtmlwhite) || []
            }
            i = key.length;
            while (i--) {
              delete cache[key[i]]
            }
          }
          if (key === undefined || jQuery.isEmptyObject(cache)) {
            if (owner.nodeType) {
              owner[this.expando] = undefined
            } else {
              delete owner[this.expando]
            }
          }
        },
        hasData: function (owner) {
          var cache = owner[this.expando];
          return cache !== undefined && !jQuery.isEmptyObject(cache)
        }
      };
      var dataPriv = new Data;
      var dataUser = new Data;
      var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        rmultiDash = /[A-Z]/g;

      function getData(data) {
        if (data === "true") {
          return true
        }
        if (data === "false") {
          return false
        }
        if (data === "null") {
          return null
        }
        if (data === +data + "") {
          return +data
        }
        if (rbrace.test(data)) {
          return JSON.parse(data)
        }
        return data
      }

      function dataAttr(elem, key, data) {
        var name;
        if (data === undefined && elem.nodeType === 1) {
          name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
          data = elem.getAttribute(name);
          if (typeof data === "string") {
            try {
              data = getData(data)
            } catch (e) {
            }
            dataUser.set(elem, key, data)
          } else {
            data = undefined
          }
        }
        return data
      }

      jQuery.extend({
        hasData: function (elem) {
          return dataUser.hasData(elem) || dataPriv.hasData(elem)
        },
        data: function (elem, name, data) {
          return dataUser.access(elem, name, data)
        },
        removeData: function (elem, name) {
          dataUser.remove(elem, name)
        },
        _data: function (elem, name, data) {
          return dataPriv.access(elem, name, data)
        },
        _removeData: function (elem, name) {
          dataPriv.remove(elem, name)
        }
      });
      jQuery.fn.extend({
        data: function (key, value) {
          var i, name, data, elem = this[0],
            attrs = elem && elem.attributes;
          if (key === undefined) {
            if (this.length) {
              data = dataUser.get(elem);
              if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                i = attrs.length;
                while (i--) {
                  if (attrs[i]) {
                    name = attrs[i].name;
                    if (name.indexOf("data-") === 0) {
                      name = camelCase(name.slice(5));
                      dataAttr(elem, name, data[name])
                    }
                  }
                }
                dataPriv.set(elem, "hasDataAttrs", true)
              }
            }
            return data
          }
          if (typeof key === "object") {
            return this.each(function () {
              dataUser.set(this, key)
            })
          }
          return access(this, function (value) {
            var data;
            if (elem && value === undefined) {
              data = dataUser.get(elem, key);
              if (data !== undefined) {
                return data
              }
              data = dataAttr(elem, key);
              if (data !== undefined) {
                return data
              }
              return
            }
            this.each(function () {
              dataUser.set(this, key, value)
            })
          }, null, value, arguments.length > 1, null, true)
        },
        removeData: function (key) {
          return this.each(function () {
            dataUser.remove(this, key)
          })
        }
      });
      jQuery.extend({
        queue: function (elem, type, data) {
          var queue;
          if (elem) {
            type = (type || "fx") + "queue";
            queue = dataPriv.get(elem, type);
            if (data) {
              if (!queue || Array.isArray(data)) {
                queue = dataPriv.access(elem, type, jQuery.makeArray(data))
              } else {
                queue.push(data)
              }
            }
            return queue || []
          }
        },
        dequeue: function (elem, type) {
          type = type || "fx";
          var queue = jQuery.queue(elem, type),
            startLength = queue.length,
            fn = queue.shift(),
            hooks = jQuery._queueHooks(elem, type),
            next = function () {
              jQuery.dequeue(elem, type)
            };
          if (fn === "inprogress") {
            fn = queue.shift();
            startLength--
          }
          if (fn) {
            if (type === "fx") {
              queue.unshift("inprogress")
            }
            delete hooks.stop;
            fn.call(elem, next, hooks)
          }
          if (!startLength && hooks) {
            hooks.empty.fire()
          }
        },
        _queueHooks: function (elem, type) {
          var key = type + "queueHooks";
          return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
            empty: jQuery.Callbacks("once memory").add(function () {
              dataPriv.remove(elem, [type + "queue", key])
            })
          })
        }
      });
      jQuery.fn.extend({
        queue: function (type, data) {
          var setter = 2;
          if (typeof type !== "string") {
            data = type;
            type = "fx";
            setter--
          }
          if (arguments.length < setter) {
            return jQuery.queue(this[0], type)
          }
          return data === undefined ? this : this.each(function () {
            var queue = jQuery.queue(this, type, data);
            jQuery._queueHooks(this, type);
            if (type === "fx" && queue[0] !== "inprogress") {
              jQuery.dequeue(this, type)
            }
          })
        },
        dequeue: function (type) {
          return this.each(function () {
            jQuery.dequeue(this, type)
          })
        },
        clearQueue: function (type) {
          return this.queue(type || "fx", [])
        },
        promise: function (type, obj) {
          var tmp, count = 1,
            defer = jQuery.Deferred(),
            elements = this,
            i = this.length,
            resolve = function () {
              if (!--count) {
                defer.resolveWith(elements, [elements])
              }
            };
          if (typeof type !== "string") {
            obj = type;
            type = undefined
          }
          type = type || "fx";
          while (i--) {
            tmp = dataPriv.get(elements[i], type + "queueHooks");
            if (tmp && tmp.empty) {
              count++;
              tmp.empty.add(resolve)
            }
          }
          resolve();
          return defer.promise(obj)
        }
      });
      var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
      var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
      var cssExpand = ["Top", "Right", "Bottom", "Left"];
      var isHiddenWithinTree = function (elem, el) {
        elem = el || elem;
        return elem.style.display === "none" || elem.style.display === "" && jQuery.contains(elem.ownerDocument, elem) && jQuery.css(elem, "display") === "none"
      };
      var swap = function (elem, options, callback, args) {
        var ret, name, old = {};
        for (name in options) {
          old[name] = elem.style[name];
          elem.style[name] = options[name]
        }
        ret = callback.apply(elem, args || []);
        for (name in options) {
          elem.style[name] = old[name]
        }
        return ret
      };

      function adjustCSS(elem, prop, valueParts, tween) {
        var adjusted, scale, maxIterations = 20,
          currentValue = tween ? function () {
            return tween.cur()
          } : function () {
            return jQuery.css(elem, prop, "")
          },
          initial = currentValue(),
          unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
          initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
        if (initialInUnit && initialInUnit[3] !== unit) {
          initial = initial / 2;
          unit = unit || initialInUnit[3];
          initialInUnit = +initial || 1;
          while (maxIterations--) {
            jQuery.style(elem, prop, initialInUnit + unit);
            if ((1 - scale) * (1 - (scale = currentValue() / initial || .5)) <= 0) {
              maxIterations = 0
            }
            initialInUnit = initialInUnit / scale
          }
          initialInUnit = initialInUnit * 2;
          jQuery.style(elem, prop, initialInUnit + unit);
          valueParts = valueParts || []
        }
        if (valueParts) {
          initialInUnit = +initialInUnit || +initial || 0;
          adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
          if (tween) {
            tween.unit = unit;
            tween.start = initialInUnit;
            tween.end = adjusted
          }
        }
        return adjusted
      }

      var defaultDisplayMap = {};

      function getDefaultDisplay(elem) {
        var temp, doc = elem.ownerDocument,
          nodeName = elem.nodeName,
          display = defaultDisplayMap[nodeName];
        if (display) {
          return display
        }
        temp = doc.body.appendChild(doc.createElement(nodeName));
        display = jQuery.css(temp, "display");
        temp.parentNode.removeChild(temp);
        if (display === "none") {
          display = "block"
        }
        defaultDisplayMap[nodeName] = display;
        return display
      }

      function showHide(elements, show) {
        var display, elem, values = [],
          index = 0,
          length = elements.length;
        for (; index < length; index++) {
          elem = elements[index];
          if (!elem.style) {
            continue
          }
          display = elem.style.display;
          if (show) {
            if (display === "none") {
              values[index] = dataPriv.get(elem, "display") || null;
              if (!values[index]) {
                elem.style.display = ""
              }
            }
            if (elem.style.display === "" && isHiddenWithinTree(elem)) {
              values[index] = getDefaultDisplay(elem)
            }
          } else {
            if (display !== "none") {
              values[index] = "none";
              dataPriv.set(elem, "display", display)
            }
          }
        }
        for (index = 0; index < length; index++) {
          if (values[index] != null) {
            elements[index].style.display = values[index]
          }
        }
        return elements
      }

      jQuery.fn.extend({
        show: function () {
          return showHide(this, true)
        },
        hide: function () {
          return showHide(this)
        },
        toggle: function (state) {
          if (typeof state === "boolean") {
            return state ? this.show() : this.hide()
          }
          return this.each(function () {
            if (isHiddenWithinTree(this)) {
              jQuery(this).show()
            } else {
              jQuery(this).hide()
            }
          })
        }
      });
      var rcheckableType = /^(?:checkbox|radio)$/i;
      var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i;
      var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
      var wrapMap = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
      wrapMap.optgroup = wrapMap.option;
      wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
      wrapMap.th = wrapMap.td;

      function getAll(context, tag) {
        var ret;
        if (typeof context.getElementsByTagName !== "undefined") {
          ret = context.getElementsByTagName(tag || "*")
        } else if (typeof context.querySelectorAll !== "undefined") {
          ret = context.querySelectorAll(tag || "*")
        } else {
          ret = []
        }
        if (tag === undefined || tag && nodeName(context, tag)) {
          return jQuery.merge([context], ret)
        }
        return ret
      }

      function setGlobalEval(elems, refElements) {
        var i = 0,
          l = elems.length;
        for (; i < l; i++) {
          dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"))
        }
      }

      var rhtml = /<|&#?\w+;/;

      function buildFragment(elems, context, scripts, selection, ignored) {
        var elem, tmp, tag, wrap, contains, j, fragment = context.createDocumentFragment(),
          nodes = [],
          i = 0,
          l = elems.length;
        for (; i < l; i++) {
          elem = elems[i];
          if (elem || elem === 0) {
            if (toType(elem) === "object") {
              jQuery.merge(nodes, elem.nodeType ? [elem] : elem)
            } else if (!rhtml.test(elem)) {
              nodes.push(context.createTextNode(elem))
            } else {
              tmp = tmp || fragment.appendChild(context.createElement("div"));
              tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
              wrap = wrapMap[tag] || wrapMap._default;
              tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
              j = wrap[0];
              while (j--) {
                tmp = tmp.lastChild
              }
              jQuery.merge(nodes, tmp.childNodes);
              tmp = fragment.firstChild;
              tmp.textContent = ""
            }
          }
        }
        fragment.textContent = "";
        i = 0;
        while (elem = nodes[i++]) {
          if (selection && jQuery.inArray(elem, selection) > -1) {
            if (ignored) {
              ignored.push(elem)
            }
            continue
          }
          contains = jQuery.contains(elem.ownerDocument, elem);
          tmp = getAll(fragment.appendChild(elem), "script");
          if (contains) {
            setGlobalEval(tmp)
          }
          if (scripts) {
            j = 0;
            while (elem = tmp[j++]) {
              if (rscriptType.test(elem.type || "")) {
                scripts.push(elem)
              }
            }
          }
        }
        return fragment
      }

      (function () {
        var fragment = document.createDocumentFragment(),
          div = fragment.appendChild(document.createElement("div")),
          input = document.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");
        div.appendChild(input);
        support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue
      })();
      var documentElement = document.documentElement;
      var rkeyEvent = /^key/,
        rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

      function returnTrue() {
        return true
      }

      function returnFalse() {
        return false
      }

      function safeActiveElement() {
        try {
          return document.activeElement
        } catch (err) {
        }
      }

      function on(elem, types, selector, data, fn, one) {
        var origFn, type;
        if (typeof types === "object") {
          if (typeof selector !== "string") {
            data = data || selector;
            selector = undefined
          }
          for (type in types) {
            on(elem, type, selector, data, types[type], one)
          }
          return elem
        }
        if (data == null && fn == null) {
          fn = selector;
          data = selector = undefined
        } else if (fn == null) {
          if (typeof selector === "string") {
            fn = data;
            data = undefined
          } else {
            fn = data;
            data = selector;
            selector = undefined
          }
        }
        if (fn === false) {
          fn = returnFalse
        } else if (!fn) {
          return elem
        }
        if (one === 1) {
          origFn = fn;
          fn = function (event) {
            jQuery().off(event);
            return origFn.apply(this, arguments)
          };
          fn.guid = origFn.guid || (origFn.guid = jQuery.guid++)
        }
        return elem.each(function () {
          jQuery.event.add(this, types, fn, data, selector)
        })
      }

      jQuery.event = {
        global: {},
        add: function (elem, types, handler, data, selector) {
          var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType,
            elemData = dataPriv.get(elem);
          if (!elemData) {
            return
          }
          if (handler.handler) {
            handleObjIn = handler;
            handler = handleObjIn.handler;
            selector = handleObjIn.selector
          }
          if (selector) {
            jQuery.find.matchesSelector(documentElement, selector)
          }
          if (!handler.guid) {
            handler.guid = jQuery.guid++
          }
          if (!(events = elemData.events)) {
            events = elemData.events = {}
          }
          if (!(eventHandle = elemData.handle)) {
            eventHandle = elemData.handle = function (e) {
              return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined
            }
          }
          types = (types || "").match(rnothtmlwhite) || [""];
          t = types.length;
          while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort();
            if (!type) {
              continue
            }
            special = jQuery.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            special = jQuery.event.special[type] || {};
            handleObj = jQuery.extend({
              type: type,
              origType: origType,
              data: data,
              handler: handler,
              guid: handler.guid,
              selector: selector,
              needsContext: selector && jQuery.expr.match.needsContext.test(selector),
              namespace: namespaces.join(".")
            }, handleObjIn);
            if (!(handlers = events[type])) {
              handlers = events[type] = [];
              handlers.delegateCount = 0;
              if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                if (elem.addEventListener) {
                  elem.addEventListener(type, eventHandle)
                }
              }
            }
            if (special.add) {
              special.add.call(elem, handleObj);
              if (!handleObj.handler.guid) {
                handleObj.handler.guid = handler.guid
              }
            }
            if (selector) {
              handlers.splice(handlers.delegateCount++, 0, handleObj)
            } else {
              handlers.push(handleObj)
            }
            jQuery.event.global[type] = true
          }
        },
        remove: function (elem, types, handler, selector, mappedTypes) {
          var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType,
            elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
          if (!elemData || !(events = elemData.events)) {
            return
          }
          types = (types || "").match(rnothtmlwhite) || [""];
          t = types.length;
          while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort();
            if (!type) {
              for (type in events) {
                jQuery.event.remove(elem, type + types[t], handler, selector, true)
              }
              continue
            }
            special = jQuery.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            handlers = events[type] || [];
            tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
            origCount = j = handlers.length;
            while (j--) {
              handleObj = handlers[j];
              if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                handlers.splice(j, 1);
                if (handleObj.selector) {
                  handlers.delegateCount--
                }
                if (special.remove) {
                  special.remove.call(elem, handleObj)
                }
              }
            }
            if (origCount && !handlers.length) {
              if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                jQuery.removeEvent(elem, type, elemData.handle)
              }
              delete events[type]
            }
          }
          if (jQuery.isEmptyObject(events)) {
            dataPriv.remove(elem, "handle events")
          }
        },
        dispatch: function (nativeEvent) {
          var event = jQuery.event.fix(nativeEvent);
          var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length),
            handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
            special = jQuery.event.special[event.type] || {};
          args[0] = event;
          for (i = 1; i < arguments.length; i++) {
            args[i] = arguments[i]
          }
          event.delegateTarget = this;
          if (special.preDispatch && special.preDispatch.call(this, event) === false) {
            return
          }
          handlerQueue = jQuery.event.handlers.call(this, event, handlers);
          i = 0;
          while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
            event.currentTarget = matched.elem;
            j = 0;
            while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
              if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {
                event.handleObj = handleObj;
                event.data = handleObj.data;
                ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                if (ret !== undefined) {
                  if ((event.result = ret) === false) {
                    event.preventDefault();
                    event.stopPropagation()
                  }
                }
              }
            }
          }
          if (special.postDispatch) {
            special.postDispatch.call(this, event)
          }
          return event.result
        },
        handlers: function (event, handlers) {
          var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [],
            delegateCount = handlers.delegateCount,
            cur = event.target;
          if (delegateCount && cur.nodeType && !(event.type === "click" && event.button >= 1)) {
            for (; cur !== this; cur = cur.parentNode || this) {
              if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                matchedHandlers = [];
                matchedSelectors = {};
                for (i = 0; i < delegateCount; i++) {
                  handleObj = handlers[i];
                  sel = handleObj.selector + " ";
                  if (matchedSelectors[sel] === undefined) {
                    matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length
                  }
                  if (matchedSelectors[sel]) {
                    matchedHandlers.push(handleObj)
                  }
                }
                if (matchedHandlers.length) {
                  handlerQueue.push({
                    elem: cur,
                    handlers: matchedHandlers
                  })
                }
              }
            }
          }
          cur = this;
          if (delegateCount < handlers.length) {
            handlerQueue.push({
              elem: cur,
              handlers: handlers.slice(delegateCount)
            })
          }
          return handlerQueue
        },
        addProp: function (name, hook) {
          Object.defineProperty(jQuery.Event.prototype, name, {
            enumerable: true,
            configurable: true,
            get: isFunction(hook) ? function () {
              if (this.originalEvent) {
                return hook(this.originalEvent)
              }
            } : function () {
              if (this.originalEvent) {
                return this.originalEvent[name]
              }
            },
            set: function (value) {
              Object.defineProperty(this, name, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: value
              })
            }
          })
        },
        fix: function (originalEvent) {
          return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent)
        },
        special: {
          load: {
            noBubble: true
          },
          focus: {
            trigger: function () {
              if (this !== safeActiveElement() && this.focus) {
                this.focus();
                return false
              }
            },
            delegateType: "focusin"
          },
          blur: {
            trigger: function () {
              if (this === safeActiveElement() && this.blur) {
                this.blur();
                return false
              }
            },
            delegateType: "focusout"
          },
          click: {
            trigger: function () {
              if (this.type === "checkbox" && this.click && nodeName(this, "input")) {
                this.click();
                return false
              }
            },
            _default: function (event) {
              return nodeName(event.target, "a")
            }
          },
          beforeunload: {
            postDispatch: function (event) {
              if (event.result !== undefined && event.originalEvent) {
                event.originalEvent.returnValue = event.result
              }
            }
          }
        }
      };
      jQuery.removeEvent = function (elem, type, handle) {
        if (elem.removeEventListener) {
          elem.removeEventListener(type, handle)
        }
      };
      jQuery.Event = function (src, props) {
        if (!(this instanceof jQuery.Event)) {
          return new jQuery.Event(src, props)
        }
        if (src && src.type) {
          this.originalEvent = src;
          this.type = src.type;
          this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && src.returnValue === false ? returnTrue : returnFalse;
          this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
          this.currentTarget = src.currentTarget;
          this.relatedTarget = src.relatedTarget
        } else {
          this.type = src
        }
        if (props) {
          jQuery.extend(this, props)
        }
        this.timeStamp = src && src.timeStamp || Date.now();
        this[jQuery.expando] = true
      };
      jQuery.Event.prototype = {
        constructor: jQuery.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        isSimulated: false,
        preventDefault: function () {
          var e = this.originalEvent;
          this.isDefaultPrevented = returnTrue;
          if (e && !this.isSimulated) {
            e.preventDefault()
          }
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          this.isPropagationStopped = returnTrue;
          if (e && !this.isSimulated) {
            e.stopPropagation()
          }
        },
        stopImmediatePropagation: function () {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = returnTrue;
          if (e && !this.isSimulated) {
            e.stopImmediatePropagation()
          }
          this.stopPropagation()
        }
      };
      jQuery.each({
        altKey: true,
        bubbles: true,
        cancelable: true,
        changedTouches: true,
        ctrlKey: true,
        detail: true,
        eventPhase: true,
        metaKey: true,
        pageX: true,
        pageY: true,
        shiftKey: true,
        view: true,
        char: true,
        charCode: true,
        key: true,
        keyCode: true,
        button: true,
        buttons: true,
        clientX: true,
        clientY: true,
        offsetX: true,
        offsetY: true,
        pointerId: true,
        pointerType: true,
        screenX: true,
        screenY: true,
        targetTouches: true,
        toElement: true,
        touches: true,
        which: function (event) {
          var button = event.button;
          if (event.which == null && rkeyEvent.test(event.type)) {
            return event.charCode != null ? event.charCode : event.keyCode
          }
          if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
            if (button & 1) {
              return 1
            }
            if (button & 2) {
              return 3
            }
            if (button & 4) {
              return 2
            }
            return 0
          }
          return event.which
        }
      }, jQuery.event.addProp);
      jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function (orig, fix) {
        jQuery.event.special[orig] = {
          delegateType: fix,
          bindType: fix,
          handle: function (event) {
            var ret, target = this,
              related = event.relatedTarget,
              handleObj = event.handleObj;
            if (!related || related !== target && !jQuery.contains(target, related)) {
              event.type = handleObj.origType;
              ret = handleObj.handler.apply(this, arguments);
              event.type = fix
            }
            return ret
          }
        }
      });
      jQuery.fn.extend({
        on: function (types, selector, data, fn) {
          return on(this, types, selector, data, fn)
        },
        one: function (types, selector, data, fn) {
          return on(this, types, selector, data, fn, 1)
        },
        off: function (types, selector, fn) {
          var handleObj, type;
          if (types && types.preventDefault && types.handleObj) {
            handleObj = types.handleObj;
            jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
            return this
          }
          if (typeof types === "object") {
            for (type in types) {
              this.off(type, selector, types[type])
            }
            return this
          }
          if (selector === false || typeof selector === "function") {
            fn = selector;
            selector = undefined
          }
          if (fn === false) {
            fn = returnFalse
          }
          return this.each(function () {
            jQuery.event.remove(this, types, fn, selector)
          })
        }
      });
      var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        rnoInnerhtml = /<script|<style|<link/i,
        rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

      function manipulationTarget(elem, content) {
        if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
          return jQuery(elem).children("tbody")[0] || elem
        }
        return elem
      }

      function disableScript(elem) {
        elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
        return elem
      }

      function restoreScript(elem) {
        if ((elem.type || "").slice(0, 5) === "true/") {
          elem.type = elem.type.slice(5)
        } else {
          elem.removeAttribute("type")
        }
        return elem
      }

      function cloneCopyEvent(src, dest) {
        var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
        if (dest.nodeType !== 1) {
          return
        }
        if (dataPriv.hasData(src)) {
          pdataOld = dataPriv.access(src);
          pdataCur = dataPriv.set(dest, pdataOld);
          events = pdataOld.events;
          if (events) {
            delete pdataCur.handle;
            pdataCur.events = {};
            for (type in events) {
              for (i = 0, l = events[type].length; i < l; i++) {
                jQuery.event.add(dest, type, events[type][i])
              }
            }
          }
        }
        if (dataUser.hasData(src)) {
          udataOld = dataUser.access(src);
          udataCur = jQuery.extend({}, udataOld);
          dataUser.set(dest, udataCur)
        }
      }

      function fixInput(src, dest) {
        var nodeName = dest.nodeName.toLowerCase();
        if (nodeName === "input" && rcheckableType.test(src.type)) {
          dest.checked = src.checked
        } else if (nodeName === "input" || nodeName === "textarea") {
          dest.defaultValue = src.defaultValue
        }
      }

      function domManip(collection, args, callback, ignored) {
        args = concat.apply([], args);
        var fragment, first, scripts, hasScripts, node, doc, i = 0,
          l = collection.length,
          iNoClone = l - 1,
          value = args[0],
          valueIsFunction = isFunction(value);
        if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
          return collection.each(function (index) {
            var self = collection.eq(index);
            if (valueIsFunction) {
              args[0] = value.call(this, index, self.html())
            }
            domManip(self, args, callback, ignored)
          })
        }
        if (l) {
          fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
          first = fragment.firstChild;
          if (fragment.childNodes.length === 1) {
            fragment = first
          }
          if (first || ignored) {
            scripts = jQuery.map(getAll(fragment, "script"), disableScript);
            hasScripts = scripts.length;
            for (; i < l; i++) {
              node = fragment;
              if (i !== iNoClone) {
                node = jQuery.clone(node, true, true);
                if (hasScripts) {
                  jQuery.merge(scripts, getAll(node, "script"))
                }
              }
              callback.call(collection[i], node, i)
            }
            if (hasScripts) {
              doc = scripts[scripts.length - 1].ownerDocument;
              jQuery.map(scripts, restoreScript);
              for (i = 0; i < hasScripts; i++) {
                node = scripts[i];
                if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                  if (node.src && (node.type || "").toLowerCase() !== "module") {
                    if (jQuery._evalUrl) {
                      jQuery._evalUrl(node.src)
                    }
                  } else {
                    DOMEval(node.textContent.replace(rcleanScript, ""), doc, node)
                  }
                }
              }
            }
          }
        }
        return collection
      }

      function remove(elem, selector, keepData) {
        var node, nodes = selector ? jQuery.filter(selector, elem) : elem,
          i = 0;
        for (;
          (node = nodes[i]) != null; i++) {
          if (!keepData && node.nodeType === 1) {
            jQuery.cleanData(getAll(node))
          }
          if (node.parentNode) {
            if (keepData && jQuery.contains(node.ownerDocument, node)) {
              setGlobalEval(getAll(node, "script"))
            }
            node.parentNode.removeChild(node)
          }
        }
        return elem
      }

      jQuery.extend({
        htmlPrefilter: function (html) {
          return html.replace(rxhtmlTag, "<$1></$2>")
        },
        clone: function (elem, dataAndEvents, deepDataAndEvents) {
          var i, l, srcElements, destElements, clone = elem.cloneNode(true),
            inPage = jQuery.contains(elem.ownerDocument, elem);
          if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
            destElements = getAll(clone);
            srcElements = getAll(elem);
            for (i = 0, l = srcElements.length; i < l; i++) {
              fixInput(srcElements[i], destElements[i])
            }
          }
          if (dataAndEvents) {
            if (deepDataAndEvents) {
              srcElements = srcElements || getAll(elem);
              destElements = destElements || getAll(clone);
              for (i = 0, l = srcElements.length; i < l; i++) {
                cloneCopyEvent(srcElements[i], destElements[i])
              }
            } else {
              cloneCopyEvent(elem, clone)
            }
          }
          destElements = getAll(clone, "script");
          if (destElements.length > 0) {
            setGlobalEval(destElements, !inPage && getAll(elem, "script"))
          }
          return clone
        },
        cleanData: function (elems) {
          var data, elem, type, special = jQuery.event.special,
            i = 0;
          for (;
            (elem = elems[i]) !== undefined; i++) {
            if (acceptData(elem)) {
              if (data = elem[dataPriv.expando]) {
                if (data.events) {
                  for (type in data.events) {
                    if (special[type]) {
                      jQuery.event.remove(elem, type)
                    } else {
                      jQuery.removeEvent(elem, type, data.handle)
                    }
                  }
                }
                elem[dataPriv.expando] = undefined
              }
              if (elem[dataUser.expando]) {
                elem[dataUser.expando] = undefined
              }
            }
          }
        }
      });
      jQuery.fn.extend({
        detach: function (selector) {
          return remove(this, selector, true)
        },
        remove: function (selector) {
          return remove(this, selector)
        },
        text: function (value) {
          return access(this, function (value) {
            return value === undefined ? jQuery.text(this) : this.empty().each(function () {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                this.textContent = value
              }
            })
          }, null, value, arguments.length)
        },
        append: function () {
          return domManip(this, arguments, function (elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var target = manipulationTarget(this, elem);
              target.appendChild(elem)
            }
          })
        },
        prepend: function () {
          return domManip(this, arguments, function (elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var target = manipulationTarget(this, elem);
              target.insertBefore(elem, target.firstChild)
            }
          })
        },
        before: function () {
          return domManip(this, arguments, function (elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this)
            }
          })
        },
        after: function () {
          return domManip(this, arguments, function (elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this.nextSibling)
            }
          })
        },
        empty: function () {
          var elem, i = 0;
          for (;
            (elem = this[i]) != null; i++) {
            if (elem.nodeType === 1) {
              jQuery.cleanData(getAll(elem, false));
              elem.textContent = ""
            }
          }
          return this
        },
        clone: function (dataAndEvents, deepDataAndEvents) {
          dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
          deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
          return this.map(function () {
            return jQuery.clone(this, dataAndEvents, deepDataAndEvents)
          })
        },
        html: function (value) {
          return access(this, function (value) {
            var elem = this[0] || {},
              i = 0,
              l = this.length;
            if (value === undefined && elem.nodeType === 1) {
              return elem.innerHTML
            }
            if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
              value = jQuery.htmlPrefilter(value);
              try {
                for (; i < l; i++) {
                  elem = this[i] || {};
                  if (elem.nodeType === 1) {
                    jQuery.cleanData(getAll(elem, false));
                    elem.innerHTML = value
                  }
                }
                elem = 0
              } catch (e) {
              }
            }
            if (elem) {
              this.empty().append(value)
            }
          }, null, value, arguments.length)
        },
        replaceWith: function () {
          var ignored = [];
          return domManip(this, arguments, function (elem) {
            var parent = this.parentNode;
            if (jQuery.inArray(this, ignored) < 0) {
              jQuery.cleanData(getAll(this));
              if (parent) {
                parent.replaceChild(elem, this)
              }
            }
          }, ignored)
        }
      });
      jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function (name, original) {
        jQuery.fn[name] = function (selector) {
          var elems, ret = [],
            insert = jQuery(selector),
            last = insert.length - 1,
            i = 0;
          for (; i <= last; i++) {
            elems = i === last ? this : this.clone(true);
            jQuery(insert[i])[original](elems);
            push.apply(ret, elems.get())
          }
          return this.pushStack(ret)
        }
      });
      var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
      var getStyles = function (elem) {
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
          view = window
        }
        return view.getComputedStyle(elem)
      };
      var rboxStyle = new RegExp(cssExpand.join("|"), "i");
      (function () {
        function computeStyleTests() {
          if (!div) {
            return
          }
          container.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
          div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
          documentElement.appendChild(container).appendChild(div);
          var divStyle = window.getComputedStyle(div);
          pixelPositionVal = divStyle.top !== "1%";
          reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
          div.style.right = "60%";
          pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
          boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
          div.style.position = "absolute";
          scrollboxSizeVal = div.offsetWidth === 36 || "absolute";
          documentElement.removeChild(container);
          div = null
        }

        function roundPixelMeasures(measure) {
          return Math.round(parseFloat(measure))
        }

        var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableMarginLeftVal,
          container = document.createElement("div"),
          div = document.createElement("div");
        if (!div.style) {
          return
        }
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";
        jQuery.extend(support, {
          boxSizingReliable: function () {
            computeStyleTests();
            return boxSizingReliableVal
          },
          pixelBoxStyles: function () {
            computeStyleTests();
            return pixelBoxStylesVal
          },
          pixelPosition: function () {
            computeStyleTests();
            return pixelPositionVal
          },
          reliableMarginLeft: function () {
            computeStyleTests();
            return reliableMarginLeftVal
          },
          scrollboxSize: function () {
            computeStyleTests();
            return scrollboxSizeVal
          }
        })
      })();

      function curCSS(elem, name, computed) {
        var width, minWidth, maxWidth, ret, style = elem.style;
        computed = computed || getStyles(elem);
        if (computed) {
          ret = computed.getPropertyValue(name) || computed[name];
          if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
            ret = jQuery.style(elem, name)
          }
          if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
            width = style.width;
            minWidth = style.minWidth;
            maxWidth = style.maxWidth;
            style.minWidth = style.maxWidth = style.width = ret;
            ret = computed.width;
            style.width = width;
            style.minWidth = minWidth;
            style.maxWidth = maxWidth
          }
        }
        return ret !== undefined ? ret + "" : ret
      }

      function addGetHookIf(conditionFn, hookFn) {
        return {
          get: function () {
            if (conditionFn()) {
              delete this.get;
              return
            }
            return (this.get = hookFn).apply(this, arguments)
          }
        }
      }

      var rdisplayswap = /^(none|table(?!-c[ea]).+)/,
        rcustomProp = /^--/,
        cssShow = {
          position: "absolute",
          visibility: "hidden",
          display: "block"
        },
        cssNormalTransform = {
          letterSpacing: "0",
          fontWeight: "400"
        },
        cssPrefixes = ["Webkit", "Moz", "ms"],
        emptyStyle = document.createElement("div").style;

      function vendorPropName(name) {
        if (name in emptyStyle) {
          return name
        }
        var capName = name[0].toUpperCase() + name.slice(1),
          i = cssPrefixes.length;
        while (i--) {
          name = cssPrefixes[i] + capName;
          if (name in emptyStyle) {
            return name
          }
        }
      }

      function finalPropName(name) {
        var ret = jQuery.cssProps[name];
        if (!ret) {
          ret = jQuery.cssProps[name] = vendorPropName(name) || name
        }
        return ret
      }

      function setPositiveNumber(elem, value, subtract) {
        var matches = rcssNum.exec(value);
        return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value
      }

      function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
        var i = dimension === "width" ? 1 : 0,
          extra = 0,
          delta = 0;
        if (box === (isBorderBox ? "border" : "content")) {
          return 0
        }
        for (; i < 4; i += 2) {
          if (box === "margin") {
            delta += jQuery.css(elem, box + cssExpand[i], true, styles)
          }
          if (!isBorderBox) {
            delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
            if (box !== "padding") {
              delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles)
            } else {
              extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles)
            }
          } else {
            if (box === "content") {
              delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles)
            }
            if (box !== "margin") {
              delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles)
            }
          }
        }
        if (!isBorderBox && computedVal >= 0) {
          delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - .5))
        }
        return delta
      }

      function getWidthOrHeight(elem, dimension, extra) {
        var styles = getStyles(elem),
          val = curCSS(elem, dimension, styles),
          isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box",
          valueIsBorderBox = isBorderBox;
        if (rnumnonpx.test(val)) {
          if (!extra) {
            return val
          }
          val = "auto"
        }
        valueIsBorderBox = valueIsBorderBox && (support.boxSizingReliable() || val === elem.style[dimension]);
        if (val === "auto" || !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") {
          val = elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)];
          valueIsBorderBox = true
        }
        val = parseFloat(val) || 0;
        return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, val) + "px"
      }

      jQuery.extend({
        cssHooks: {
          opacity: {
            get: function (elem, computed) {
              if (computed) {
                var ret = curCSS(elem, "opacity");
                return ret === "" ? "1" : ret
              }
            }
          }
        },
        cssNumber: {
          animationIterationCount: true,
          columnCount: true,
          fillOpacity: true,
          flexGrow: true,
          flexShrink: true,
          fontWeight: true,
          lineHeight: true,
          opacity: true,
          order: true,
          orphans: true,
          widows: true,
          zIndex: true,
          zoom: true
        },
        cssProps: {},
        style: function (elem, name, value, extra) {
          if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
            return
          }
          var ret, type, hooks, origName = camelCase(name),
            isCustomProp = rcustomProp.test(name),
            style = elem.style;
          if (!isCustomProp) {
            name = finalPropName(origName)
          }
          hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
          if (value !== undefined) {
            type = typeof value;
            if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
              value = adjustCSS(elem, name, ret);
              type = "number"
            }
            if (value == null || value !== value) {
              return
            }
            if (type === "number") {
              value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px")
            }
            if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
              style[name] = "inherit"
            }
            if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
              if (isCustomProp) {
                style.setProperty(name, value)
              } else {
                style[name] = value
              }
            }
          } else {
            if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
              return ret
            }
            return style[name]
          }
        },
        css: function (elem, name, extra, styles) {
          var val, num, hooks, origName = camelCase(name),
            isCustomProp = rcustomProp.test(name);
          if (!isCustomProp) {
            name = finalPropName(origName)
          }
          hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
          if (hooks && "get" in hooks) {
            val = hooks.get(elem, true, extra)
          }
          if (val === undefined) {
            val = curCSS(elem, name, styles)
          }
          if (val === "normal" && name in cssNormalTransform) {
            val = cssNormalTransform[name]
          }
          if (extra === "" || extra) {
            num = parseFloat(val);
            return extra === true || isFinite(num) ? num || 0 : val
          }
          return val
        }
      });
      jQuery.each(["height", "width"], function (i, dimension) {
        jQuery.cssHooks[dimension] = {
          get: function (elem, computed, extra) {
            if (computed) {
              return rdisplayswap.test(jQuery.css(elem, "display")) && (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function () {
                return getWidthOrHeight(elem, dimension, extra)
              }) : getWidthOrHeight(elem, dimension, extra)
            }
          },
          set: function (elem, value, extra) {
            var matches, styles = getStyles(elem),
              isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box",
              subtract = extra && boxModelAdjustment(elem, dimension, extra, isBorderBox, styles);
            if (isBorderBox && support.scrollboxSize() === styles.position) {
              subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - .5)
            }
            if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
              elem.style[dimension] = value;
              value = jQuery.css(elem, dimension)
            }
            return setPositiveNumber(elem, value, subtract)
          }
        }
      });
      jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
        if (computed) {
          return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
            marginLeft: 0
          }, function () {
            return elem.getBoundingClientRect().left
          })) + "px"
        }
      });
      jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
      }, function (prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
          expand: function (value) {
            var i = 0,
              expanded = {},
              parts = typeof value === "string" ? value.split(" ") : [value];
            for (; i < 4; i++) {
              expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0]
            }
            return expanded
          }
        };
        if (prefix !== "margin") {
          jQuery.cssHooks[prefix + suffix].set = setPositiveNumber
        }
      });
      jQuery.fn.extend({
        css: function (name, value) {
          return access(this, function (elem, name, value) {
            var styles, len, map = {},
              i = 0;
            if (Array.isArray(name)) {
              styles = getStyles(elem);
              len = name.length;
              for (; i < len; i++) {
                map[name[i]] = jQuery.css(elem, name[i], false, styles)
              }
              return map
            }
            return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name)
          }, name, value, arguments.length > 1)
        }
      });

      function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing)
      }

      jQuery.Tween = Tween;
      Tween.prototype = {
        constructor: Tween,
        init: function (elem, options, prop, end, easing, unit) {
          this.elem = elem;
          this.prop = prop;
          this.easing = easing || jQuery.easing._default;
          this.options = options;
          this.start = this.now = this.cur();
          this.end = end;
          this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px")
        },
        cur: function () {
          var hooks = Tween.propHooks[this.prop];
          return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this)
        },
        run: function (percent) {
          var eased, hooks = Tween.propHooks[this.prop];
          if (this.options.duration) {
            this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration)
          } else {
            this.pos = eased = percent
          }
          this.now = (this.end - this.start) * eased + this.start;
          if (this.options.step) {
            this.options.step.call(this.elem, this.now, this)
          }
          if (hooks && hooks.set) {
            hooks.set(this)
          } else {
            Tween.propHooks._default.set(this)
          }
          return this
        }
      };
      Tween.prototype.init.prototype = Tween.prototype;
      Tween.propHooks = {
        _default: {
          get: function (tween) {
            var result;
            if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
              return tween.elem[tween.prop]
            }
            result = jQuery.css(tween.elem, tween.prop, "");
            return !result || result === "auto" ? 0 : result
          },
          set: function (tween) {
            if (jQuery.fx.step[tween.prop]) {
              jQuery.fx.step[tween.prop](tween)
            } else if (tween.elem.nodeType === 1 && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
              jQuery.style(tween.elem, tween.prop, tween.now + tween.unit)
            } else {
              tween.elem[tween.prop] = tween.now
            }
          }
        }
      };
      Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function (tween) {
          if (tween.elem.nodeType && tween.elem.parentNode) {
            tween.elem[tween.prop] = tween.now
          }
        }
      };
      jQuery.easing = {
        linear: function (p) {
          return p
        },
        swing: function (p) {
          return .5 - Math.cos(p * Math.PI) / 2
        },
        _default: "swing"
      };
      jQuery.fx = Tween.prototype.init;
      jQuery.fx.step = {};
      var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/,
        rrun = /queueHooks$/;

      function schedule() {
        if (inProgress) {
          if (document.hidden === false && window.requestAnimationFrame) {
            window.requestAnimationFrame(schedule)
          } else {
            window.setTimeout(schedule, jQuery.fx.interval)
          }
          jQuery.fx.tick()
        }
      }

      function createFxNow() {
        window.setTimeout(function () {
          fxNow = undefined
        });
        return fxNow = Date.now()
      }

      function genFx(type, includeWidth) {
        var which, i = 0,
          attrs = {
            height: type
          };
        includeWidth = includeWidth ? 1 : 0;
        for (; i < 4; i += 2 - includeWidth) {
          which = cssExpand[i];
          attrs["margin" + which] = attrs["padding" + which] = type
        }
        if (includeWidth) {
          attrs.opacity = attrs.width = type
        }
        return attrs
      }

      function createTween(value, prop, animation) {
        var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
          index = 0,
          length = collection.length;
        for (; index < length; index++) {
          if (tween = collection[index].call(animation, prop, value)) {
            return tween
          }
        }
      }

      function defaultPrefilter(elem, props, opts) {
        var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
          isBox = "width" in props || "height" in props,
          anim = this,
          orig = {},
          style = elem.style,
          hidden = elem.nodeType && isHiddenWithinTree(elem),
          dataShow = dataPriv.get(elem, "fxshow");
        if (!opts.queue) {
          hooks = jQuery._queueHooks(elem, "fx");
          if (hooks.unqueued == null) {
            hooks.unqueued = 0;
            oldfire = hooks.empty.fire;
            hooks.empty.fire = function () {
              if (!hooks.unqueued) {
                oldfire()
              }
            }
          }
          hooks.unqueued++;
          anim.always(function () {
            anim.always(function () {
              hooks.unqueued--;
              if (!jQuery.queue(elem, "fx").length) {
                hooks.empty.fire()
              }
            })
          })
        }
        for (prop in props) {
          value = props[prop];
          if (rfxtypes.test(value)) {
            delete props[prop];
            toggle = toggle || value === "toggle";
            if (value === (hidden ? "hide" : "show")) {
              if (value === "show" && dataShow && dataShow[prop] !== undefined) {
                hidden = true
              } else {
                continue
              }
            }
            orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop)
          }
        }
        propTween = !jQuery.isEmptyObject(props);
        if (!propTween && jQuery.isEmptyObject(orig)) {
          return
        }
        if (isBox && elem.nodeType === 1) {
          opts.overflow = [style.overflow, style.overflowX, style.overflowY];
          restoreDisplay = dataShow && dataShow.display;
          if (restoreDisplay == null) {
            restoreDisplay = dataPriv.get(elem, "display")
          }
          display = jQuery.css(elem, "display");
          if (display === "none") {
            if (restoreDisplay) {
              display = restoreDisplay
            } else {
              showHide([elem], true);
              restoreDisplay = elem.style.display || restoreDisplay;
              display = jQuery.css(elem, "display");
              showHide([elem])
            }
          }
          if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
            if (jQuery.css(elem, "float") === "none") {
              if (!propTween) {
                anim.done(function () {
                  style.display = restoreDisplay
                });
                if (restoreDisplay == null) {
                  display = style.display;
                  restoreDisplay = display === "none" ? "" : display
                }
              }
              style.display = "inline-block"
            }
          }
        }
        if (opts.overflow) {
          style.overflow = "hidden";
          anim.always(function () {
            style.overflow = opts.overflow[0];
            style.overflowX = opts.overflow[1];
            style.overflowY = opts.overflow[2]
          })
        }
        propTween = false;
        for (prop in orig) {
          if (!propTween) {
            if (dataShow) {
              if ("hidden" in dataShow) {
                hidden = dataShow.hidden
              }
            } else {
              dataShow = dataPriv.access(elem, "fxshow", {
                display: restoreDisplay
              })
            }
            if (toggle) {
              dataShow.hidden = !hidden
            }
            if (hidden) {
              showHide([elem], true)
            }
            anim.done(function () {
              if (!hidden) {
                showHide([elem])
              }
              dataPriv.remove(elem, "fxshow");
              for (prop in orig) {
                jQuery.style(elem, prop, orig[prop])
              }
            })
          }
          propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
          if (!(prop in dataShow)) {
            dataShow[prop] = propTween.start;
            if (hidden) {
              propTween.end = propTween.start;
              propTween.start = 0
            }
          }
        }
      }

      function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;
        for (index in props) {
          name = camelCase(index);
          easing = specialEasing[name];
          value = props[index];
          if (Array.isArray(value)) {
            easing = value[1];
            value = props[index] = value[0]
          }
          if (index !== name) {
            props[name] = value;
            delete props[index]
          }
          hooks = jQuery.cssHooks[name];
          if (hooks && "expand" in hooks) {
            value = hooks.expand(value);
            delete props[name];
            for (index in value) {
              if (!(index in props)) {
                props[index] = value[index];
                specialEasing[index] = easing
              }
            }
          } else {
            specialEasing[name] = easing
          }
        }
      }

      function Animation(elem, properties, options) {
        var result, stopped, index = 0,
          length = Animation.prefilters.length,
          deferred = jQuery.Deferred().always(function () {
            delete tick.elem
          }),
          tick = function () {
            if (stopped) {
              return false
            }
            var currentTime = fxNow || createFxNow(),
              remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
              temp = remaining / animation.duration || 0,
              percent = 1 - temp,
              index = 0,
              length = animation.tweens.length;
            for (; index < length; index++) {
              animation.tweens[index].run(percent)
            }
            deferred.notifyWith(elem, [animation, percent, remaining]);
            if (percent < 1 && length) {
              return remaining
            }
            if (!length) {
              deferred.notifyWith(elem, [animation, 1, 0])
            }
            deferred.resolveWith(elem, [animation]);
            return false
          },
          animation = deferred.promise({
            elem: elem,
            props: jQuery.extend({}, properties),
            opts: jQuery.extend(true, {
              specialEasing: {},
              easing: jQuery.easing._default
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function (prop, end) {
              var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
              animation.tweens.push(tween);
              return tween
            },
            stop: function (gotoEnd) {
              var index = 0,
                length = gotoEnd ? animation.tweens.length : 0;
              if (stopped) {
                return this
              }
              stopped = true;
              for (; index < length; index++) {
                animation.tweens[index].run(1)
              }
              if (gotoEnd) {
                deferred.notifyWith(elem, [animation, 1, 0]);
                deferred.resolveWith(elem, [animation, gotoEnd])
              } else {
                deferred.rejectWith(elem, [animation, gotoEnd])
              }
              return this
            }
          }),
          props = animation.props;
        propFilter(props, animation.opts.specialEasing);
        for (; index < length; index++) {
          result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
          if (result) {
            if (isFunction(result.stop)) {
              jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result)
            }
            return result
          }
        }
        jQuery.map(props, createTween, animation);
        if (isFunction(animation.opts.start)) {
          animation.opts.start.call(elem, animation)
        }
        animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
        jQuery.fx.timer(jQuery.extend(tick, {
          elem: elem,
          anim: animation,
          queue: animation.opts.queue
        }));
        return animation
      }

      jQuery.Animation = jQuery.extend(Animation, {
        tweeners: {
          "*": [function (prop, value) {
            var tween = this.createTween(prop, value);
            adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
            return tween
          }]
        },
        tweener: function (props, callback) {
          if (isFunction(props)) {
            callback = props;
            props = ["*"]
          } else {
            props = props.match(rnothtmlwhite)
          }
          var prop, index = 0,
            length = props.length;
          for (; index < length; index++) {
            prop = props[index];
            Animation.tweeners[prop] = Animation.tweeners[prop] || [];
            Animation.tweeners[prop].unshift(callback)
          }
        },
        prefilters: [defaultPrefilter],
        prefilter: function (callback, prepend) {
          if (prepend) {
            Animation.prefilters.unshift(callback)
          } else {
            Animation.prefilters.push(callback)
          }
        }
      });
      jQuery.speed = function (speed, easing, fn) {
        var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
          complete: fn || !fn && easing || isFunction(speed) && speed,
          duration: speed,
          easing: fn && easing || easing && !isFunction(easing) && easing
        };
        if (jQuery.fx.off) {
          opt.duration = 0
        } else {
          if (typeof opt.duration !== "number") {
            if (opt.duration in jQuery.fx.speeds) {
              opt.duration = jQuery.fx.speeds[opt.duration]
            } else {
              opt.duration = jQuery.fx.speeds._default
            }
          }
        }
        if (opt.queue == null || opt.queue === true) {
          opt.queue = "fx"
        }
        opt.old = opt.complete;
        opt.complete = function () {
          if (isFunction(opt.old)) {
            opt.old.call(this)
          }
          if (opt.queue) {
            jQuery.dequeue(this, opt.queue)
          }
        };
        return opt
      };
      jQuery.fn.extend({
        fadeTo: function (speed, to, easing, callback) {
          return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({
            opacity: to
          }, speed, easing, callback)
        },
        animate: function (prop, speed, easing, callback) {
          var empty = jQuery.isEmptyObject(prop),
            optall = jQuery.speed(speed, easing, callback),
            doAnimation = function () {
              var anim = Animation(this, jQuery.extend({}, prop), optall);
              if (empty || dataPriv.get(this, "finish")) {
                anim.stop(true)
              }
            };
          doAnimation.finish = doAnimation;
          return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation)
        },
        stop: function (type, clearQueue, gotoEnd) {
          var stopQueue = function (hooks) {
            var stop = hooks.stop;
            delete hooks.stop;
            stop(gotoEnd)
          };
          if (typeof type !== "string") {
            gotoEnd = clearQueue;
            clearQueue = type;
            type = undefined
          }
          if (clearQueue && type !== false) {
            this.queue(type || "fx", [])
          }
          return this.each(function () {
            var dequeue = true,
              index = type != null && type + "queueHooks",
              timers = jQuery.timers,
              data = dataPriv.get(this);
            if (index) {
              if (data[index] && data[index].stop) {
                stopQueue(data[index])
              }
            } else {
              for (index in data) {
                if (data[index] && data[index].stop && rrun.test(index)) {
                  stopQueue(data[index])
                }
              }
            }
            for (index = timers.length; index--;) {
              if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                timers[index].anim.stop(gotoEnd);
                dequeue = false;
                timers.splice(index, 1)
              }
            }
            if (dequeue || !gotoEnd) {
              jQuery.dequeue(this, type)
            }
          })
        },
        finish: function (type) {
          if (type !== false) {
            type = type || "fx"
          }
          return this.each(function () {
            var index, data = dataPriv.get(this),
              queue = data[type + "queue"],
              hooks = data[type + "queueHooks"],
              timers = jQuery.timers,
              length = queue ? queue.length : 0;
            data.finish = true;
            jQuery.queue(this, type, []);
            if (hooks && hooks.stop) {
              hooks.stop.call(this, true)
            }
            for (index = timers.length; index--;) {
              if (timers[index].elem === this && timers[index].queue === type) {
                timers[index].anim.stop(true);
                timers.splice(index, 1)
              }
            }
            for (index = 0; index < length; index++) {
              if (queue[index] && queue[index].finish) {
                queue[index].finish.call(this)
              }
            }
            delete data.finish
          })
        }
      });
      jQuery.each(["toggle", "show", "hide"], function (i, name) {
        var cssFn = jQuery.fn[name];
        jQuery.fn[name] = function (speed, easing, callback) {
          return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback)
        }
      });
      jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {
          opacity: "show"
        },
        fadeOut: {
          opacity: "hide"
        },
        fadeToggle: {
          opacity: "toggle"
        }
      }, function (name, props) {
        jQuery.fn[name] = function (speed, easing, callback) {
          return this.animate(props, speed, easing, callback)
        }
      });
      jQuery.timers = [];
      jQuery.fx.tick = function () {
        var timer, i = 0,
          timers = jQuery.timers;
        fxNow = Date.now();
        for (; i < timers.length; i++) {
          timer = timers[i];
          if (!timer() && timers[i] === timer) {
            timers.splice(i--, 1)
          }
        }
        if (!timers.length) {
          jQuery.fx.stop()
        }
        fxNow = undefined
      };
      jQuery.fx.timer = function (timer) {
        jQuery.timers.push(timer);
        jQuery.fx.start()
      };
      jQuery.fx.interval = 13;
      jQuery.fx.start = function () {
        if (inProgress) {
          return
        }
        inProgress = true;
        schedule()
      };
      jQuery.fx.stop = function () {
        inProgress = null
      };
      jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
      };
      jQuery.fn.delay = function (time, type) {
        time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
        type = type || "fx";
        return this.queue(type, function (next, hooks) {
          var timeout = window.setTimeout(next, time);
          hooks.stop = function () {
            window.clearTimeout(timeout)
          }
        })
      };
      (function () {
        var input = document.createElement("input"),
          select = document.createElement("select"),
          opt = select.appendChild(document.createElement("option"));
        input.type = "checkbox";
        support.checkOn = input.value !== "";
        support.optSelected = opt.selected;
        input = document.createElement("input");
        input.value = "t";
        input.type = "radio";
        support.radioValue = input.value === "t"
      })();
      var boolHook, attrHandle = jQuery.expr.attrHandle;
      jQuery.fn.extend({
        attr: function (name, value) {
          return access(this, jQuery.attr, name, value, arguments.length > 1)
        },
        removeAttr: function (name) {
          return this.each(function () {
            jQuery.removeAttr(this, name)
          })
        }
      });
      jQuery.extend({
        attr: function (elem, name, value) {
          var ret, hooks, nType = elem.nodeType;
          if (nType === 3 || nType === 8 || nType === 2) {
            return
          }
          if (typeof elem.getAttribute === "undefined") {
            return jQuery.prop(elem, name, value)
          }
          if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
            hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined)
          }
          if (value !== undefined) {
            if (value === null) {
              jQuery.removeAttr(elem, name);
              return
            }
            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
              return ret
            }
            elem.setAttribute(name, value + "");
            return value
          }
          if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret
          }
          ret = jQuery.find.attr(elem, name);
          return ret == null ? undefined : ret
        },
        attrHooks: {
          type: {
            set: function (elem, value) {
              if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                var val = elem.value;
                elem.setAttribute("type", value);
                if (val) {
                  elem.value = val
                }
                return value
              }
            }
          }
        },
        removeAttr: function (elem, value) {
          var name, i = 0,
            attrNames = value && value.match(rnothtmlwhite);
          if (attrNames && elem.nodeType === 1) {
            while (name = attrNames[i++]) {
              elem.removeAttribute(name)
            }
          }
        }
      });
      boolHook = {
        set: function (elem, value, name) {
          if (value === false) {
            jQuery.removeAttr(elem, name)
          } else {
            elem.setAttribute(name, name)
          }
          return name
        }
      };
      jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
        var getter = attrHandle[name] || jQuery.find.attr;
        attrHandle[name] = function (elem, name, isXML) {
          var ret, handle, lowercaseName = name.toLowerCase();
          if (!isXML) {
            handle = attrHandle[lowercaseName];
            attrHandle[lowercaseName] = ret;
            ret = getter(elem, name, isXML) != null ? lowercaseName : null;
            attrHandle[lowercaseName] = handle
          }
          return ret
        }
      });
      var rfocusable = /^(?:input|select|textarea|button)$/i,
        rclickable = /^(?:a|area)$/i;
      jQuery.fn.extend({
        prop: function (name, value) {
          return access(this, jQuery.prop, name, value, arguments.length > 1)
        },
        removeProp: function (name) {
          return this.each(function () {
            delete this[jQuery.propFix[name] || name]
          })
        }
      });
      jQuery.extend({
        prop: function (elem, name, value) {
          var ret, hooks, nType = elem.nodeType;
          if (nType === 3 || nType === 8 || nType === 2) {
            return
          }
          if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
            name = jQuery.propFix[name] || name;
            hooks = jQuery.propHooks[name]
          }
          if (value !== undefined) {
            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
              return ret
            }
            return elem[name] = value
          }
          if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret
          }
          return elem[name]
        },
        propHooks: {
          tabIndex: {
            get: function (elem) {
              var tabindex = jQuery.find.attr(elem, "tabindex");
              if (tabindex) {
                return parseInt(tabindex, 10)
              }
              if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
                return 0
              }
              return -1
            }
          }
        },
        propFix: {
          for: "htmlFor",
          class: "className"
        }
      });
      if (!support.optSelected) {
        jQuery.propHooks.selected = {
          get: function (elem) {
            var parent = elem.parentNode;
            if (parent && parent.parentNode) {
              parent.parentNode.selectedIndex
            }
            return null
          },
          set: function (elem) {
            var parent = elem.parentNode;
            if (parent) {
              parent.selectedIndex;
              if (parent.parentNode) {
                parent.parentNode.selectedIndex
              }
            }
          }
        }
      }
      jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        jQuery.propFix[this.toLowerCase()] = this
      });

      function stripAndCollapse(value) {
        var tokens = value.match(rnothtmlwhite) || [];
        return tokens.join(" ")
      }

      function getClass(elem) {
        return elem.getAttribute && elem.getAttribute("class") || ""
      }

      function classesToArray(value) {
        if (Array.isArray(value)) {
          return value
        }
        if (typeof value === "string") {
          return value.match(rnothtmlwhite) || []
        }
        return []
      }

      jQuery.fn.extend({
        addClass: function (value) {
          var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
          if (isFunction(value)) {
            return this.each(function (j) {
              jQuery(this).addClass(value.call(this, j, getClass(this)))
            })
          }
          classes = classesToArray(value);
          if (classes.length) {
            while (elem = this[i++]) {
              curValue = getClass(elem);
              cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
              if (cur) {
                j = 0;
                while (clazz = classes[j++]) {
                  if (cur.indexOf(" " + clazz + " ") < 0) {
                    cur += clazz + " "
                  }
                }
                finalValue = stripAndCollapse(cur);
                if (curValue !== finalValue) {
                  elem.setAttribute("class", finalValue)
                }
              }
            }
          }
          return this
        },
        removeClass: function (value) {
          var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
          if (isFunction(value)) {
            return this.each(function (j) {
              jQuery(this).removeClass(value.call(this, j, getClass(this)))
            })
          }
          if (!arguments.length) {
            return this.attr("class", "")
          }
          classes = classesToArray(value);
          if (classes.length) {
            while (elem = this[i++]) {
              curValue = getClass(elem);
              cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
              if (cur) {
                j = 0;
                while (clazz = classes[j++]) {
                  while (cur.indexOf(" " + clazz + " ") > -1) {
                    cur = cur.replace(" " + clazz + " ", " ")
                  }
                }
                finalValue = stripAndCollapse(cur);
                if (curValue !== finalValue) {
                  elem.setAttribute("class", finalValue)
                }
              }
            }
          }
          return this
        },
        toggleClass: function (value, stateVal) {
          var type = typeof value,
            isValidValue = type === "string" || Array.isArray(value);
          if (typeof stateVal === "boolean" && isValidValue) {
            return stateVal ? this.addClass(value) : this.removeClass(value)
          }
          if (isFunction(value)) {
            return this.each(function (i) {
              jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal)
            })
          }
          return this.each(function () {
            var className, i, self, classNames;
            if (isValidValue) {
              i = 0;
              self = jQuery(this);
              classNames = classesToArray(value);
              while (className = classNames[i++]) {
                if (self.hasClass(className)) {
                  self.removeClass(className)
                } else {
                  self.addClass(className)
                }
              }
            } else if (value === undefined || type === "boolean") {
              className = getClass(this);
              if (className) {
                dataPriv.set(this, "__className__", className)
              }
              if (this.setAttribute) {
                this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "")
              }
            }
          })
        },
        hasClass: function (selector) {
          var className, elem, i = 0;
          className = " " + selector + " ";
          while (elem = this[i++]) {
            if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
              return true
            }
          }
          return false
        }
      });
      var rreturn = /\r/g;
      jQuery.fn.extend({
        val: function (value) {
          var hooks, ret, valueIsFunction, elem = this[0];
          if (!arguments.length) {
            if (elem) {
              hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
              if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
                return ret
              }
              ret = elem.value;
              if (typeof ret === "string") {
                return ret.replace(rreturn, "")
              }
              return ret == null ? "" : ret
            }
            return
          }
          valueIsFunction = isFunction(value);
          return this.each(function (i) {
            var val;
            if (this.nodeType !== 1) {
              return
            }
            if (valueIsFunction) {
              val = value.call(this, i, jQuery(this).val())
            } else {
              val = value
            }
            if (val == null) {
              val = ""
            } else if (typeof val === "number") {
              val += ""
            } else if (Array.isArray(val)) {
              val = jQuery.map(val, function (value) {
                return value == null ? "" : value + ""
              })
            }
            hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
            if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
              this.value = val
            }
          })
        }
      });
      jQuery.extend({
        valHooks: {
          option: {
            get: function (elem) {
              var val = jQuery.find.attr(elem, "value");
              return val != null ? val : stripAndCollapse(jQuery.text(elem))
            }
          },
          select: {
            get: function (elem) {
              var value, option, i, options = elem.options,
                index = elem.selectedIndex,
                one = elem.type === "select-one",
                values = one ? null : [],
                max = one ? index + 1 : options.length;
              if (index < 0) {
                i = max
              } else {
                i = one ? index : 0
              }
              for (; i < max; i++) {
                option = options[i];
                if ((option.selected || i === index) && !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                  value = jQuery(option).val();
                  if (one) {
                    return value
                  }
                  values.push(value)
                }
              }
              return values
            },
            set: function (elem, value) {
              var optionSet, option, options = elem.options,
                values = jQuery.makeArray(value),
                i = options.length;
              while (i--) {
                option = options[i];
                if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
                  optionSet = true
                }
              }
              if (!optionSet) {
                elem.selectedIndex = -1
              }
              return values
            }
          }
        }
      });
      jQuery.each(["radio", "checkbox"], function () {
        jQuery.valHooks[this] = {
          set: function (elem, value) {
            if (Array.isArray(value)) {
              return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1
            }
          }
        };
        if (!support.checkOn) {
          jQuery.valHooks[this].get = function (elem) {
            return elem.getAttribute("value") === null ? "on" : elem.value
          }
        }
      });
      support.focusin = "onfocusin" in window;
      var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
        stopPropagationCallback = function (e) {
          e.stopPropagation()
        };
      jQuery.extend(jQuery.event, {
        trigger: function (event, data, elem, onlyHandlers) {
          var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document],
            type = hasOwn.call(event, "type") ? event.type : event,
            namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
          cur = lastElement = tmp = elem = elem || document;
          if (elem.nodeType === 3 || elem.nodeType === 8) {
            return
          }
          if (rfocusMorph.test(type + jQuery.event.triggered)) {
            return
          }
          if (type.indexOf(".") > -1) {
            namespaces = type.split(".");
            type = namespaces.shift();
            namespaces.sort()
          }
          ontype = type.indexOf(":") < 0 && "on" + type;
          event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
          event.isTrigger = onlyHandlers ? 2 : 3;
          event.namespace = namespaces.join(".");
          event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
          event.result = undefined;
          if (!event.target) {
            event.target = elem
          }
          data = data == null ? [event] : jQuery.makeArray(data, [event]);
          special = jQuery.event.special[type] || {};
          if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
            return
          }
          if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
            bubbleType = special.delegateType || type;
            if (!rfocusMorph.test(bubbleType + type)) {
              cur = cur.parentNode
            }
            for (; cur; cur = cur.parentNode) {
              eventPath.push(cur);
              tmp = cur
            }
            if (tmp === (elem.ownerDocument || document)) {
              eventPath.push(tmp.defaultView || tmp.parentWindow || window)
            }
          }
          i = 0;
          while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
            lastElement = cur;
            event.type = i > 1 ? bubbleType : special.bindType || type;
            handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");
            if (handle) {
              handle.apply(cur, data)
            }
            handle = ontype && cur[ontype];
            if (handle && handle.apply && acceptData(cur)) {
              event.result = handle.apply(cur, data);
              if (event.result === false) {
                event.preventDefault()
              }
            }
          }
          event.type = type;
          if (!onlyHandlers && !event.isDefaultPrevented()) {
            if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
              if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                tmp = elem[ontype];
                if (tmp) {
                  elem[ontype] = null
                }
                jQuery.event.triggered = type;
                if (event.isPropagationStopped()) {
                  lastElement.addEventListener(type, stopPropagationCallback)
                }
                elem[type]();
                if (event.isPropagationStopped()) {
                  lastElement.removeEventListener(type, stopPropagationCallback)
                }
                jQuery.event.triggered = undefined;
                if (tmp) {
                  elem[ontype] = tmp
                }
              }
            }
          }
          return event.result
        },
        simulate: function (type, elem, event) {
          var e = jQuery.extend(new jQuery.Event, event, {
            type: type,
            isSimulated: true
          });
          jQuery.event.trigger(e, null, elem)
        }
      });
      jQuery.fn.extend({
        trigger: function (type, data) {
          return this.each(function () {
            jQuery.event.trigger(type, data, this)
          })
        },
        triggerHandler: function (type, data) {
          var elem = this[0];
          if (elem) {
            return jQuery.event.trigger(type, data, elem, true)
          }
        }
      });
      if (!support.focusin) {
        jQuery.each({
          focus: "focusin",
          blur: "focusout"
        }, function (orig, fix) {
          var handler = function (event) {
            jQuery.event.simulate(fix, event.target, jQuery.event.fix(event))
          };
          jQuery.event.special[fix] = {
            setup: function () {
              var doc = this.ownerDocument || this,
                attaches = dataPriv.access(doc, fix);
              if (!attaches) {
                doc.addEventListener(orig, handler, true)
              }
              dataPriv.access(doc, fix, (attaches || 0) + 1)
            },
            teardown: function () {
              var doc = this.ownerDocument || this,
                attaches = dataPriv.access(doc, fix) - 1;
              if (!attaches) {
                doc.removeEventListener(orig, handler, true);
                dataPriv.remove(doc, fix)
              } else {
                dataPriv.access(doc, fix, attaches)
              }
            }
          }
        })
      }
      var location = window.location;
      var nonce = Date.now();
      var rquery = /\?/;
      jQuery.parseXML = function (data) {
        var xml;
        if (!data || typeof data !== "string") {
          return null
        }
        try {
          xml = (new window.DOMParser).parseFromString(data, "text/xml")
        } catch (e) {
          xml = undefined
        }
        if (!xml || xml.getElementsByTagName("parsererror").length) {
          jQuery.error("Invalid XML: " + data)
        }
        return xml
      };
      var rbracket = /\[\]$/,
        rCRLF = /\r?\n/g,
        rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
        rsubmittable = /^(?:input|select|textarea|keygen)/i;

      function buildParams(prefix, obj, traditional, add) {
        var name;
        if (Array.isArray(obj)) {
          jQuery.each(obj, function (i, v) {
            if (traditional || rbracket.test(prefix)) {
              add(prefix, v)
            } else {
              buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add)
            }
          })
        } else if (!traditional && toType(obj) === "object") {
          for (name in obj) {
            buildParams(prefix + "[" + name + "]", obj[name], traditional, add)
          }
        } else {
          add(prefix, obj)
        }
      }

      jQuery.param = function (a, traditional) {
        var prefix, s = [],
          add = function (key, valueOrFunction) {
            var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
            s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value)
          };
        if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
          jQuery.each(a, function () {
            add(this.name, this.value)
          })
        } else {
          for (prefix in a) {
            buildParams(prefix, a[prefix], traditional, add)
          }
        }
        return s.join("&")
      };
      jQuery.fn.extend({
        serialize: function () {
          return jQuery.param(this.serializeArray())
        },
        serializeArray: function () {
          return this.map(function () {
            var elements = jQuery.prop(this, "elements");
            return elements ? jQuery.makeArray(elements) : this
          }).filter(function () {
            var type = this.type;
            return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type))
          }).map(function (i, elem) {
            var val = jQuery(this).val();
            if (val == null) {
              return null
            }
            if (Array.isArray(val)) {
              return jQuery.map(val, function (val) {
                return {
                  name: elem.name,
                  value: val.replace(rCRLF, "\r\n")
                }
              })
            }
            return {
              name: elem.name,
              value: val.replace(rCRLF, "\r\n")
            }
          }).get()
        }
      });
      var r20 = /%20/g,
        rhash = /#.*$/,
        rantiCache = /([?&])_=[^&]*/,
        rheaders = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        rnoContent = /^(?:GET|HEAD)$/,
        rprotocol = /^\/\//,
        prefilters = {},
        transports = {},
        allTypes = "*/".concat("*"),
        originAnchor = document.createElement("a");
      originAnchor.href = location.href;

      function addToPrefiltersOrTransports(structure) {
        return function (dataTypeExpression, func) {
          if (typeof dataTypeExpression !== "string") {
            func = dataTypeExpression;
            dataTypeExpression = "*"
          }
          var dataType, i = 0,
            dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
          if (isFunction(func)) {
            while (dataType = dataTypes[i++]) {
              if (dataType[0] === "+") {
                dataType = dataType.slice(1) || "*";
                (structure[dataType] = structure[dataType] || []).unshift(func)
              } else {
                (structure[dataType] = structure[dataType] || []).push(func)
              }
            }
          }
        }
      }

      function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {},
          seekingTransport = structure === transports;

        function inspect(dataType) {
          var selected;
          inspected[dataType] = true;
          jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
            var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
            if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
              options.dataTypes.unshift(dataTypeOrTransport);
              inspect(dataTypeOrTransport);
              return false
            } else if (seekingTransport) {
              return !(selected = dataTypeOrTransport)
            }
          });
          return selected
        }

        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*")
      }

      function ajaxExtend(target, src) {
        var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
        for (key in src) {
          if (src[key] !== undefined) {
            (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key]
          }
        }
        if (deep) {
          jQuery.extend(true, target, deep)
        }
        return target
      }

      function ajaxHandleResponses(s, jqXHR, responses) {
        var ct, type, finalDataType, firstDataType, contents = s.contents,
          dataTypes = s.dataTypes;
        while (dataTypes[0] === "*") {
          dataTypes.shift();
          if (ct === undefined) {
            ct = s.mimeType || jqXHR.getResponseHeader("Content-Type")
          }
        }
        if (ct) {
          for (type in contents) {
            if (contents[type] && contents[type].test(ct)) {
              dataTypes.unshift(type);
              break
            }
          }
        }
        if (dataTypes[0] in responses) {
          finalDataType = dataTypes[0]
        } else {
          for (type in responses) {
            if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
              finalDataType = type;
              break
            }
            if (!firstDataType) {
              firstDataType = type
            }
          }
          finalDataType = finalDataType || firstDataType
        }
        if (finalDataType) {
          if (finalDataType !== dataTypes[0]) {
            dataTypes.unshift(finalDataType)
          }
          return responses[finalDataType]
        }
      }

      function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev, converters = {},
          dataTypes = s.dataTypes.slice();
        if (dataTypes[1]) {
          for (conv in s.converters) {
            converters[conv.toLowerCase()] = s.converters[conv]
          }
        }
        current = dataTypes.shift();
        while (current) {
          if (s.responseFields[current]) {
            jqXHR[s.responseFields[current]] = response
          }
          if (!prev && isSuccess && s.dataFilter) {
            response = s.dataFilter(response, s.dataType)
          }
          prev = current;
          current = dataTypes.shift();
          if (current) {
            if (current === "*") {
              current = prev
            } else if (prev !== "*" && prev !== current) {
              conv = converters[prev + " " + current] || converters["* " + current];
              if (!conv) {
                for (conv2 in converters) {
                  tmp = conv2.split(" ");
                  if (tmp[1] === current) {
                    conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                    if (conv) {
                      if (conv === true) {
                        conv = converters[conv2]
                      } else if (converters[conv2] !== true) {
                        current = tmp[0];
                        dataTypes.unshift(tmp[1])
                      }
                      break
                    }
                  }
                }
              }
              if (conv !== true) {
                if (conv && s.throws) {
                  response = conv(response)
                } else {
                  try {
                    response = conv(response)
                  } catch (e) {
                    return {
                      state: "parsererror",
                      error: conv ? e : "No conversion from " + prev + " to " + current
                    }
                  }
                }
              }
            }
          }
        }
        return {
          state: "success",
          data: response
        }
      }

      jQuery.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: location.href,
          type: "GET",
          isLocal: rlocalProtocol.test(location.protocol),
          global: true,
          processData: true,
          async: true,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": allTypes,
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
            "text html": true,
            "text json": JSON.parse,
            "text xml": jQuery.parseXML
          },
          flatOptions: {
            url: true,
            context: true
          }
        },
        ajaxSetup: function (target, settings) {
          return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target)
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        ajax: function (url, options) {
          if (typeof url === "object") {
            options = url;
            url = undefined
          }
          options = options || {};
          var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed,
            fireGlobals, i, uncached, s = jQuery.ajaxSetup({}, options),
            callbackContext = s.context || s,
            globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
            deferred = jQuery.Deferred(),
            completeDeferred = jQuery.Callbacks("once memory"),
            statusCode = s.statusCode || {},
            requestHeaders = {},
            requestHeadersNames = {},
            strAbort = "canceled",
            jqXHR = {
              readyState: 0,
              getResponseHeader: function (key) {
                var match;
                if (completed) {
                  if (!responseHeaders) {
                    responseHeaders = {};
                    while (match = rheaders.exec(responseHeadersString)) {
                      responseHeaders[match[1].toLowerCase()] = match[2]
                    }
                  }
                  match = responseHeaders[key.toLowerCase()]
                }
                return match == null ? null : match
              },
              getAllResponseHeaders: function () {
                return completed ? responseHeadersString : null
              },
              setRequestHeader: function (name, value) {
                if (completed == null) {
                  name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                  requestHeaders[name] = value
                }
                return this
              },
              overrideMimeType: function (type) {
                if (completed == null) {
                  s.mimeType = type
                }
                return this
              },
              statusCode: function (map) {
                var code;
                if (map) {
                  if (completed) {
                    jqXHR.always(map[jqXHR.status])
                  } else {
                    for (code in map) {
                      statusCode[code] = [statusCode[code], map[code]]
                    }
                  }
                }
                return this
              },
              abort: function (statusText) {
                var finalText = statusText || strAbort;
                if (transport) {
                  transport.abort(finalText)
                }
                done(0, finalText);
                return this
              }
            };
          deferred.promise(jqXHR);
          s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
          s.type = options.method || options.type || s.method || s.type;
          s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
          if (s.crossDomain == null) {
            urlAnchor = document.createElement("a");
            try {
              urlAnchor.href = s.url;
              urlAnchor.href = urlAnchor.href;
              s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host
            } catch (e) {
              s.crossDomain = true
            }
          }
          if (s.data && s.processData && typeof s.data !== "string") {
            s.data = jQuery.param(s.data, s.traditional)
          }
          inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
          if (completed) {
            return jqXHR
          }
          fireGlobals = jQuery.event && s.global;
          if (fireGlobals && jQuery.active++ === 0) {
            jQuery.event.trigger("ajaxStart")
          }
          s.type = s.type.toUpperCase();
          s.hasContent = !rnoContent.test(s.type);
          cacheURL = s.url.replace(rhash, "");
          if (!s.hasContent) {
            uncached = s.url.slice(cacheURL.length);
            if (s.data && (s.processData || typeof s.data === "string")) {
              cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
              delete s.data
            }
            if (s.cache === false) {
              cacheURL = cacheURL.replace(rantiCache, "$1");
              uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++ + uncached
            }
            s.url = cacheURL + uncached
          } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
            s.data = s.data.replace(r20, "+")
          }
          if (s.ifModified) {
            if (jQuery.lastModified[cacheURL]) {
              jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL])
            }
            if (jQuery.etag[cacheURL]) {
              jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL])
            }
          }
          if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
            jqXHR.setRequestHeader("Content-Type", s.contentType)
          }
          jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
          for (i in s.headers) {
            jqXHR.setRequestHeader(i, s.headers[i])
          }
          if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {
            return jqXHR.abort()
          }
          strAbort = "abort";
          completeDeferred.add(s.complete);
          jqXHR.done(s.success);
          jqXHR.fail(s.error);
          transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
          if (!transport) {
            done(-1, "No Transport")
          } else {
            jqXHR.readyState = 1;
            if (fireGlobals) {
              globalEventContext.trigger("ajaxSend", [jqXHR, s])
            }
            if (completed) {
              return jqXHR
            }
            if (s.async && s.timeout > 0) {
              timeoutTimer = window.setTimeout(function () {
                jqXHR.abort("timeout")
              }, s.timeout)
            }
            try {
              completed = false;
              transport.send(requestHeaders, done)
            } catch (e) {
              if (completed) {
                throw e
              }
              done(-1, e)
            }
          }

          function done(status, nativeStatusText, responses, headers) {
            var isSuccess, success, error, response, modified, statusText = nativeStatusText;
            if (completed) {
              return
            }
            completed = true;
            if (timeoutTimer) {
              window.clearTimeout(timeoutTimer)
            }
            transport = undefined;
            responseHeadersString = headers || "";
            jqXHR.readyState = status > 0 ? 4 : 0;
            isSuccess = status >= 200 && status < 300 || status === 304;
            if (responses) {
              response = ajaxHandleResponses(s, jqXHR, responses)
            }
            response = ajaxConvert(s, response, jqXHR, isSuccess);
            if (isSuccess) {
              if (s.ifModified) {
                modified = jqXHR.getResponseHeader("Last-Modified");
                if (modified) {
                  jQuery.lastModified[cacheURL] = modified
                }
                modified = jqXHR.getResponseHeader("etag");
                if (modified) {
                  jQuery.etag[cacheURL] = modified
                }
              }
              if (status === 204 || s.type === "HEAD") {
                statusText = "nocontent"
              } else if (status === 304) {
                statusText = "notmodified"
              } else {
                statusText = response.state;
                success = response.data;
                error = response.error;
                isSuccess = !error
              }
            } else {
              error = statusText;
              if (status || !statusText) {
                statusText = "error";
                if (status < 0) {
                  status = 0
                }
              }
            }
            jqXHR.status = status;
            jqXHR.statusText = (nativeStatusText || statusText) + "";
            if (isSuccess) {
              deferred.resolveWith(callbackContext, [success, statusText, jqXHR])
            } else {
              deferred.rejectWith(callbackContext, [jqXHR, statusText, error])
            }
            jqXHR.statusCode(statusCode);
            statusCode = undefined;
            if (fireGlobals) {
              globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error])
            }
            completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
            if (fireGlobals) {
              globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
              if (!--jQuery.active) {
                jQuery.event.trigger("ajaxStop")
              }
            }
          }

          return jqXHR
        },
        getJSON: function (url, data, callback) {
          return jQuery.get(url, data, callback, "json")
        },
        getScript: function (url, callback) {
          return jQuery.get(url, undefined, callback, "script")
        }
      });
      jQuery.each(["get", "post"], function (i, method) {
        jQuery[method] = function (url, data, callback, type) {
          if (isFunction(data)) {
            type = type || callback;
            callback = data;
            data = undefined
          }
          return jQuery.ajax(jQuery.extend({
            url: url,
            type: method,
            dataType: type,
            data: data,
            success: callback
          }, jQuery.isPlainObject(url) && url))
        }
      });
      jQuery._evalUrl = function (url) {
        return jQuery.ajax({
          url: url,
          type: "GET",
          dataType: "script",
          cache: true,
          async: false,
          global: false,
          throws: true
        })
      };
      jQuery.fn.extend({
        wrapAll: function (html) {
          var wrap;
          if (this[0]) {
            if (isFunction(html)) {
              html = html.call(this[0])
            }
            wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
            if (this[0].parentNode) {
              wrap.insertBefore(this[0])
            }
            wrap.map(function () {
              var elem = this;
              while (elem.firstElementChild) {
                elem = elem.firstElementChild
              }
              return elem
            }).append(this)
          }
          return this
        },
        wrapInner: function (html) {
          if (isFunction(html)) {
            return this.each(function (i) {
              jQuery(this).wrapInner(html.call(this, i))
            })
          }
          return this.each(function () {
            var self = jQuery(this),
              contents = self.contents();
            if (contents.length) {
              contents.wrapAll(html)
            } else {
              self.append(html)
            }
          })
        },
        wrap: function (html) {
          var htmlIsFunction = isFunction(html);
          return this.each(function (i) {
            jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html)
          })
        },
        unwrap: function (selector) {
          this.parent(selector).not("body").each(function () {
            jQuery(this).replaceWith(this.childNodes)
          });
          return this
        }
      });
      jQuery.expr.pseudos.hidden = function (elem) {
        return !jQuery.expr.pseudos.visible(elem)
      };
      jQuery.expr.pseudos.visible = function (elem) {
        return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length)
      };
      jQuery.ajaxSettings.xhr = function () {
        try {
          return new window.XMLHttpRequest
        } catch (e) {
        }
      };
      var xhrSuccessStatus = {
          0: 200,
          1223: 204
        },
        xhrSupported = jQuery.ajaxSettings.xhr();
      support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
      support.ajax = xhrSupported = !!xhrSupported;
      jQuery.ajaxTransport(function (options) {
        var callback, errorCallback;
        if (support.cors || xhrSupported && !options.crossDomain) {
          return {
            send: function (headers, complete) {
              var i, xhr = options.xhr();
              xhr.open(options.type, options.url, options.async, options.username, options.password);
              if (options.xhrFields) {
                for (i in options.xhrFields) {
                  xhr[i] = options.xhrFields[i]
                }
              }
              if (options.mimeType && xhr.overrideMimeType) {
                xhr.overrideMimeType(options.mimeType)
              }
              if (!options.crossDomain && !headers["X-Requested-With"]) {
                headers["X-Requested-With"] = "XMLHttpRequest"
              }
              for (i in headers) {
                xhr.setRequestHeader(i, headers[i])
              }
              callback = function (type) {
                return function () {
                  if (callback) {
                    callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                    if (type === "abort") {
                      xhr.abort()
                    } else if (type === "error") {
                      if (typeof xhr.status !== "number") {
                        complete(0, "error")
                      } else {
                        complete(xhr.status, xhr.statusText)
                      }
                    } else {
                      complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                        binary: xhr.response
                      } : {
                        text: xhr.responseText
                      }, xhr.getAllResponseHeaders())
                    }
                  }
                }
              };
              xhr.onload = callback();
              errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
              if (xhr.onabort !== undefined) {
                xhr.onabort = errorCallback
              } else {
                xhr.onreadystatechange = function () {
                  if (xhr.readyState === 4) {
                    window.setTimeout(function () {
                      if (callback) {
                        errorCallback()
                      }
                    })
                  }
                }
              }
              callback = callback("abort");
              try {
                xhr.send(options.hasContent && options.data || null)
              } catch (e) {
                if (callback) {
                  throw e
                }
              }
            },
            abort: function () {
              if (callback) {
                callback()
              }
            }
          }
        }
      });
      jQuery.ajaxPrefilter(function (s) {
        if (s.crossDomain) {
          s.contents.script = false
        }
      });
      jQuery.ajaxSetup({
        accepts: {
          script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
        },
        contents: {
          script: /\b(?:java|ecma)script\b/
        },
        converters: {
          "text script": function (text) {
            jQuery.globalEval(text);
            return text
          }
        }
      });
      jQuery.ajaxPrefilter("script", function (s) {
        if (s.cache === undefined) {
          s.cache = false
        }
        if (s.crossDomain) {
          s.type = "GET"
        }
      });
      jQuery.ajaxTransport("script", function (s) {
        if (s.crossDomain) {
          var script, callback;
          return {
            send: function (_, complete) {
              script = jQuery("<script>").prop({
                charset: s.scriptCharset,
                src: s.url
              }).on("load error", callback = function (evt) {
                script.remove();
                callback = null;
                if (evt) {
                  complete(evt.type === "error" ? 404 : 200, evt.type)
                }
              });
              document.head.appendChild(script[0])
            },
            abort: function () {
              if (callback) {
                callback()
              }
            }
          }
        }
      });
      var oldCallbacks = [],
        rjsonp = /(=)\?(?=&|$)|\?\?/;
      jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
          this[callback] = true;
          return callback
        }
      });
      jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer,
          jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
        if (jsonProp || s.dataTypes[0] === "jsonp") {
          callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
          if (jsonProp) {
            s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName)
          } else if (s.jsonp !== false) {
            s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName
          }
          s.converters["script json"] = function () {
            if (!responseContainer) {
              jQuery.error(callbackName + " was not called")
            }
            return responseContainer[0]
          };
          s.dataTypes[0] = "json";
          overwritten = window[callbackName];
          window[callbackName] = function () {
            responseContainer = arguments
          };
          jqXHR.always(function () {
            if (overwritten === undefined) {
              jQuery(window).removeProp(callbackName)
            } else {
              window[callbackName] = overwritten
            }
            if (s[callbackName]) {
              s.jsonpCallback = originalSettings.jsonpCallback;
              oldCallbacks.push(callbackName)
            }
            if (responseContainer && isFunction(overwritten)) {
              overwritten(responseContainer[0])
            }
            responseContainer = overwritten = undefined
          });
          return "script"
        }
      });
      support.createHTMLDocument = function () {
        var body = document.implementation.createHTMLDocument("").body;
        body.innerHTML = "<form></form><form></form>";
        return body.childNodes.length === 2
      }();
      jQuery.parseHTML = function (data, context, keepScripts) {
        if (typeof data !== "string") {
          return []
        }
        if (typeof context === "boolean") {
          keepScripts = context;
          context = false
        }
        var base, parsed, scripts;
        if (!context) {
          if (support.createHTMLDocument) {
            context = document.implementation.createHTMLDocument("");
            base = context.createElement("base");
            base.href = document.location.href;
            context.head.appendChild(base)
          } else {
            context = document
          }
        }
        parsed = rsingleTag.exec(data);
        scripts = !keepScripts && [];
        if (parsed) {
          return [context.createElement(parsed[1])]
        }
        parsed = buildFragment([data], context, scripts);
        if (scripts && scripts.length) {
          jQuery(scripts).remove()
        }
        return jQuery.merge([], parsed.childNodes)
      };
      jQuery.fn.load = function (url, params, callback) {
        var selector, type, response, self = this,
          off = url.indexOf(" ");
        if (off > -1) {
          selector = stripAndCollapse(url.slice(off));
          url = url.slice(0, off)
        }
        if (isFunction(params)) {
          callback = params;
          params = undefined
        } else if (params && typeof params === "object") {
          type = "POST"
        }
        if (self.length > 0) {
          jQuery.ajax({
            url: url,
            type: type || "GET",
            dataType: "html",
            data: params
          }).done(function (responseText) {
            response = arguments;
            self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText)
          }).always(callback && function (jqXHR, status) {
            self.each(function () {
              callback.apply(this, response || [jqXHR.responseText, status, jqXHR])
            })
          })
        }
        return this
      };
      jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
        jQuery.fn[type] = function (fn) {
          return this.on(type, fn)
        }
      });
      jQuery.expr.pseudos.animated = function (elem) {
        return jQuery.grep(jQuery.timers, function (fn) {
          return elem === fn.elem
        }).length
      };
      jQuery.offset = {
        setOffset: function (elem, options, i) {
          var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
            position = jQuery.css(elem, "position"),
            curElem = jQuery(elem),
            props = {};
          if (position === "static") {
            elem.style.position = "relative"
          }
          curOffset = curElem.offset();
          curCSSTop = jQuery.css(elem, "top");
          curCSSLeft = jQuery.css(elem, "left");
          calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
          if (calculatePosition) {
            curPosition = curElem.position();
            curTop = curPosition.top;
            curLeft = curPosition.left
          } else {
            curTop = parseFloat(curCSSTop) || 0;
            curLeft = parseFloat(curCSSLeft) || 0
          }
          if (isFunction(options)) {
            options = options.call(elem, i, jQuery.extend({}, curOffset))
          }
          if (options.top != null) {
            props.top = options.top - curOffset.top + curTop
          }
          if (options.left != null) {
            props.left = options.left - curOffset.left + curLeft
          }
          if ("using" in options) {
            options.using.call(elem, props)
          } else {
            curElem.css(props)
          }
        }
      };
      jQuery.fn.extend({
        offset: function (options) {
          if (arguments.length) {
            return options === undefined ? this : this.each(function (i) {
              jQuery.offset.setOffset(this, options, i)
            })
          }
          var rect, win, elem = this[0];
          if (!elem) {
            return
          }
          if (!elem.getClientRects().length) {
            return {
              top: 0,
              left: 0
            }
          }
          rect = elem.getBoundingClientRect();
          win = elem.ownerDocument.defaultView;
          return {
            top: rect.top + win.pageYOffset,
            left: rect.left + win.pageXOffset
          }
        },
        position: function () {
          if (!this[0]) {
            return
          }
          var offsetParent, offset, doc, elem = this[0],
            parentOffset = {
              top: 0,
              left: 0
            };
          if (jQuery.css(elem, "position") === "fixed") {
            offset = elem.getBoundingClientRect()
          } else {
            offset = this.offset();
            doc = elem.ownerDocument;
            offsetParent = elem.offsetParent || doc.documentElement;
            while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
              offsetParent = offsetParent.parentNode
            }
            if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
              parentOffset = jQuery(offsetParent).offset();
              parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
              parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true)
            }
          }
          return {
            top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
            left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
          }
        },
        offsetParent: function () {
          return this.map(function () {
            var offsetParent = this.offsetParent;
            while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
              offsetParent = offsetParent.offsetParent
            }
            return offsetParent || documentElement
          })
        }
      });
      jQuery.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
      }, function (method, prop) {
        var top = "pageYOffset" === prop;
        jQuery.fn[method] = function (val) {
          return access(this, function (elem, method, val) {
            var win;
            if (isWindow(elem)) {
              win = elem
            } else if (elem.nodeType === 9) {
              win = elem.defaultView
            }
            if (val === undefined) {
              return win ? win[prop] : elem[method]
            }
            if (win) {
              win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset)
            } else {
              elem[method] = val
            }
          }, method, val, arguments.length)
        }
      });
      jQuery.each(["top", "left"], function (i, prop) {
        jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
          if (computed) {
            computed = curCSS(elem, prop);
            return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed
          }
        })
      });
      jQuery.each({
        Height: "height",
        Width: "width"
      }, function (name, type) {
        jQuery.each({
          padding: "inner" + name,
          content: type,
          "": "outer" + name
        }, function (defaultExtra, funcName) {
          jQuery.fn[funcName] = function (margin, value) {
            var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
              extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
            return access(this, function (elem, type, value) {
              var doc;
              if (isWindow(elem)) {
                return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name]
              }
              if (elem.nodeType === 9) {
                doc = elem.documentElement;
                return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name])
              }
              return value === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra)
            }, type, chainable ? margin : undefined, chainable)
          }
        })
      });
      jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function (i, name) {
        jQuery.fn[name] = function (data, fn) {
          return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name)
        }
      });
      jQuery.fn.extend({
        hover: function (fnOver, fnOut) {
          return this.mouseenter(fnOver).mouseleave(fnOut || fnOver)
        }
      });
      jQuery.fn.extend({
        bind: function (types, data, fn) {
          return this.on(types, null, data, fn)
        },
        unbind: function (types, fn) {
          return this.off(types, null, fn)
        },
        delegate: function (selector, types, data, fn) {
          return this.on(types, selector, data, fn)
        },
        undelegate: function (selector, types, fn) {
          return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn)
        }
      });
      jQuery.proxy = function (fn, context) {
        var tmp, args, proxy;
        if (typeof context === "string") {
          tmp = fn[context];
          context = fn;
          fn = tmp
        }
        if (!isFunction(fn)) {
          return undefined
        }
        args = slice.call(arguments, 2);
        proxy = function () {
          return fn.apply(context || this, args.concat(slice.call(arguments)))
        };
        proxy.guid = fn.guid = fn.guid || jQuery.guid++;
        return proxy
      };
      jQuery.holdReady = function (hold) {
        if (hold) {
          jQuery.readyWait++
        } else {
          jQuery.ready(true)
        }
      };
      jQuery.isArray = Array.isArray;
      jQuery.parseJSON = JSON.parse;
      jQuery.nodeName = nodeName;
      jQuery.isFunction = isFunction;
      jQuery.isWindow = isWindow;
      jQuery.camelCase = camelCase;
      jQuery.type = toType;
      jQuery.now = Date.now;
      jQuery.isNumeric = function (obj) {
        var type = jQuery.type(obj);
        return (type === "number" || type === "string") && !isNaN(obj - parseFloat(obj))
      };
      if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
          return jQuery
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
      }
      var _jQuery = window.jQuery,
        _$ = window.$;
      jQuery.noConflict = function (deep) {
        if (window.$ === jQuery) {
          window.$ = _$
        }
        if (deep && window.jQuery === jQuery) {
          window.jQuery = _jQuery
        }
        return jQuery
      };
      if (!noGlobal) {
        window.jQuery = window.$ = jQuery
      }
      return jQuery
    })
  }, function (module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    (function (global, factory) {
      if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
      } else {
        var mod
      }
    })(this, function (exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key]
            }
          }
        }
        return target
      };
      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
      };
      var isDate = exports.isDate = function isDate(d) {
        return d instanceof Date
      };
      var isEmpty = exports.isEmpty = function isEmpty(o) {
        return Object.keys(o).length === 0
      };
      var isObject = exports.isObject = function isObject(o) {
        return o != null && (typeof o === "undefined" ? "undefined" : _typeof(o)) === "object"
      };
      var properObject = exports.properObject = function properObject(o) {
        return isObject(o) && !o.hasOwnProperty ? _extends({}, o) : o
      }
    })
  }, function (module, exports, __webpack_require__) {
    "use strict";
    var __assign = this && this.__assign || Object.assign || function (t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
      }
      return t
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var $ = __webpack_require__(0);
    var Effects_1 = __webpack_require__(21);
    var SlideObject = function () {
      function SlideObject(slide, player, index) {
        this.slide = slide;
        this.player = player;
        this.index = index;
        return this
      }

      SlideObject.prototype._rootInit = function () {
        this.data = this.player.data.slides[this.slide.index].objects[this.index];
        if (this.data.style == undefined) this.data.style = {};
        if (this.data.end > this.slide.data.duration) {
          this.duration = this.slide.data.duration - this.data.start
        } else {
          this.duration = this.data.end - this.data.start
        }
        this.entrance_animation = Effects_1.SlideObjectEffects.get(this.data.entrance_animation);
        this.ongoing_animation = Effects_1.SlideObjectEffects.get(this.data.ongoing_animation || "none");
        this.exit_animation = Effects_1.SlideObjectEffects.get(this.data.exit_animation);
        this._renderContainer()
      };
      SlideObject.prototype._renderContainer = function () {
        if (this.$root) this.$root.remove();
        this.$root = $('<div class="' + this.player.options.class_prefix + 'slide-object"></div>');
        this.$root.attr("slide-index", this.slide.index);
        this.$root.attr("object-index", this.index);
        this.$root.attr("object-type", this.data.type);
        this.ongoingAnimationLayerDOM = $('<div class="' + this.player.options.class_prefix + 'slide-object-ongoing-animation-layer"></div>').appendTo(this.$root);
        this.transformLayerDOM = $('<div class="' + this.player.options.class_prefix + 'slide-object-transform-layer"></div>').appendTo(this.ongoingAnimationLayerDOM);
        this.deepestNode = this.transformLayerDOM;
        this._styleContainer();
        this.$root.appendTo(this.slide.slideObjectsContainer)
      };
      SlideObject.prototype._styleContainer = function () {
        this.$root.css({
          position: "absolute",
          left: this.data.x || 0,
          top: this.data.y || 0,
          width: this.data.width_auto || !this.data.width ? "auto" : this.data.width,
          height: this.data.height_auto || !this.data.height ? "auto" : this.data.height,
          "max-width": "100%",
          "max-height": "100%",
          "box-sizing": "border-box",
          "z-index": 200 + this.slide.index - this.index
        });
        this.ongoingAnimationLayerDOM.css({
          width: "100%",
          height: "100%"
        });
        this.transformLayerDOM.css({
          transform: "rotate(" + (this.data.rotate || 0) + "deg)",
          background: this.data.style.background || "rgba(0,0,0,0)",
          padding: this.data.style.padding || 0,
          "border-top-width": this.data.style.border_top ? this.data.style.border_top + "px" : "0",
          "border-bottom-width": this.data.style.border_bottom ? this.data.style.border_bottom + "px" : "0",
          "border-left-width": this.data.style.border_left ? this.data.style.border_left + "px" : "0",
          "border-right-width": this.data.style.border_right ? this.data.style.border_right + "px" : "0",
          "border-style": this.data.style.border_style || "solid",
          "border-color": this.data.style.border_color || "rgba(0,0,0,0)",
          "border-radius": this.data.style.border_radius || "0",
          width: "100%",
          height: "100%"
        })
      };
      SlideObject.prototype.rootRenderAnimationFunction = function () {
        var self = this;
        return function (context, state) {
          if (state.display) {
            self.$root.css(__assign({
              transform: self._createTransformString(state),
              opacity: state.opacity == undefined ? 1 : state.opacity,
              display: "inline-block",
              filter: state.blur ? "blur(" + state.blur + "px)" : "none"
            }, state.top && {
              top: state.top
            }, state.left && {
              left: state.left
            }, {
              "transform-origin": (state.transform_origin_x == undefined ? 50 : state.transform_origin_x) + "% " + (state.transform_origin_y == undefined ? 50 : state.transform_origin_y) + "%"
            }))
          } else {
            self.$root.css({
              display: "none"
            })
          }
        }
      };
      SlideObject.prototype.rootRenderOngoingAnimationFunction = function () {
        var self = this;
        return function (context, state) {
          if (state.display == 1) {
            self.ongoingAnimationLayerDOM.css({
              transform: self._createTransformString(state),
              opacity: state.opacity == undefined ? 1 : state.opacity,
              filter: state.blur ? "blur(" + state.blur + "px)" : "none"
            })
          }
        }
      };
      SlideObject.prototype._createTransformString = function (state) {
        var transform = [],
          translate3d = [],
          scale3d = [],
          rotate3d = [];
        scale3d.push(state.scale3d_x || 1);
        scale3d.push(state.scale3d_y || 1);
        scale3d.push(state.scale3d_z || 1);
        transform.push("scale3d(" + scale3d.join(",") + ")");
        translate3d.push((state.translate3d_x || 0) + "px");
        translate3d.push((state.translate3d_y || 0) + "px");
        translate3d.push((state.translate3d_z || 0) + "px");
        transform.push("translate3d(" + translate3d.join(",") + ")");
        rotate3d.push(state.rotate3d_x || 0);
        rotate3d.push(state.rotate3d_y || 0);
        rotate3d.push(state.rotate3d_z || 0);
        rotate3d.push((state.rotate3d_deg || 0) + "deg");
        transform.push("rotate3d(" + rotate3d.join(",") + ")");
        transform.push("scale(" + (state.scale || 1) + ")");
        transform.push("rotate(" + (state.rotate || 0) + "deg)");
        transform.push("skewX(" + (state.skewX == undefined ? 0 : state.skewX) + "deg)");
        transform.push("perspective(" + (state.perspective || 0) + "px)");
        var transform_string = transform.join(" ");
        return transform_string
      };
      SlideObject.prototype.getAnimationStates = function () {
        var entrance_speed = this.data.entrance_animation_properties && this.data.entrance_animation_properties.speed ? this.data.entrance_animation_properties.speed : 1;
        var entrance_easing = this.data.entrance_animation_properties && this.data.entrance_animation_properties.easing ? this.data.entrance_animation_properties.easing : this.entrance_animation["easing"];
        var entrance_duration = (typeof this.entrance_animation.duration === "function" ? this.entrance_animation.duration(this) : this.entrance_animation.duration) || 200;
        entrance_duration = entrance_duration * (1 / entrance_speed);
        if (entrance_duration > this.duration) entrance_duration = this.duration - 10;
        var exit_speed = this.data.exit_animation_properties && this.data.exit_animation_properties.speed ? this.data.exit_animation_properties.speed : 1;
        var exit_easing = this.data.exit_animation_properties && this.data.exit_animation_properties.easing ? this.data.exit_animation_properties.easing : this.exit_animation["easing"];
        var exit_duration = (typeof this.exit_animation.duration === "function" ? this.exit_animation.duration(this) : this.exit_animation.duration) || 200;
        exit_duration = exit_duration * (1 / exit_speed);
        if (exit_duration > this.duration) exit_duration = this.duration - 10;
        if (entrance_duration + exit_duration > this.duration) {
          var entrance_duration_original = JSON.parse(JSON.stringify(entrance_duration));
          var exit_duration_original = JSON.parse(JSON.stringify(exit_duration));
          entrance_duration = Math.floor(entrance_duration_original * this.duration / (entrance_duration_original + exit_duration_original)) - 10;
          exit_duration = Math.floor(exit_duration_original * this.duration / (entrance_duration_original + exit_duration)) - 10
        }
        var states = {};
        states[0] = {
          state: this.entrance_animation.animation[0],
          easing: entrance_easing
        };
        for (var percent in this.entrance_animation.animation) {
          var p = parseInt(percent);
          if (p != 0 && p != 100) {
            states[entrance_duration / (this.duration / p)] = {
              state: this.entrance_animation.animation[p],
              easing: entrance_easing
            }
          }
        }
        states[entrance_duration / (this.duration / 100)] = {
          state: this.entrance_animation.animation[100],
          easing: entrance_easing
        };
        var exit_start_percent = (this.duration - exit_duration) / (this.duration / 100);
        states[exit_start_percent] = {
          state: this.exit_animation.animation[0],
          easing: exit_easing
        };
        for (var percent in this.exit_animation.animation) {
          var p = parseInt(percent);
          if (p != 0 && p != 100) {
            states[exit_start_percent + exit_duration / (this.duration / p)] = {
              state: this.exit_animation.animation[p],
              easing: exit_easing
            }
          }
        }
        states[100] = {
          state: this.exit_animation.animation[100],
          easing: exit_easing
        };
        return states
      };
      SlideObject.prototype.getOngoingAnimationStates = function () {
        var states = {};
        var speed = this.data.ongoing_animation_properties && this.data.ongoing_animation_properties.speed ? this.data.ongoing_animation_properties.speed : 1;
        var easing = this.data.ongoing_animation_properties && this.data.ongoing_animation_properties.easing ? this.data.ongoing_animation_properties.easing : this.ongoing_animation["easing"];
        var animation_duration = this.ongoing_animation.duration * (1 / speed);
        if (animation_duration > 0) {
          var repeat_times = Math.ceil(this.duration / animation_duration);
          var animation_duration_adjusted = 100 / repeat_times;
          for (var i = 0; i < repeat_times; i++) {
            for (var percent in this.ongoing_animation.animation) {
              var p = parseInt(percent);
              var state_percent = Math.round(animation_duration_adjusted * i + animation_duration_adjusted / 100 * p) + i * .001;
              states[state_percent] = {
                state: this.ongoing_animation.animation[p],
                easing: easing
              }
            }
          }
        } else {
          for (var percent in this.ongoing_animation.animation) {
            var p = parseInt(percent);
            states[Math.round(p)] = {
              state: this.ongoing_animation.animation[p],
              easing: easing
            }
          }
        }
        return states
      };
      SlideObject.prototype.destroy = function () {
        this.$root.remove()
      };
      return SlideObject
    }();
    exports.SlideObject = SlideObject
  }, function (module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var $ = __webpack_require__(0);
    var Factory_1 = __webpack_require__(24);
    var Slide = function () {
      function Slide(player, index) {
        this.slide_objects = [];
        this.promises = [];
        this.player = player;
        this.index = index;
        return this
      }

      Slide.prototype._rootInit = function () {
        this.data = this.player.data.slides[this.index];
        this.$context = $(this.player.slides_container);
        this._renderContainer();
        this.renderSlideObjects()
      };
      Slide.prototype.renderSlideObjects = function () {
        this.data = this.player.data.slides[this.index];
        for (var _i = 0, _a = this.slide_objects; _i < _a.length; _i++) {
          var slide_object = _a[_i];
          slide_object.destroy()
        }
        this.slide_objects = [];
        for (var slide_object_index in this.data.objects) {
          var slide_object = Factory_1.SlideObjectFactory.create(this, this.player, slide_object_index);
          this.slide_objects.push(slide_object);
          this.promises.push(slide_object.promise)
        }
      };
      Slide.prototype._renderContainer = function () {
        if (this.$root) this.$root.remove();
        this.$root = $('<div class="' + this.player.options.class_prefix + "slide " + this.player.options.class_prefix + "slide-" + this.data.type + '"></div>');
        this.slideObjectsContainer = $('<div class="' + this.player.options.class_prefix + 'slide-objects"></div>').appendTo(this.$root);
        this._styleContainer();
        this.$root.appendTo(this.$context)
      };
      Slide.prototype._styleContainer = function () {
        this.$root.css({
          overflow: "hidden",
          "z-index": 100 - this.index
        });
        if (this.data.type != "shared") {
          this.$root.css({
            position: "absolute",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0
          })
        }
      };
      Slide.prototype.rootRenderAnimationFunction = function () {
        var self = this;
        return function (context, state) {
          self.$root.css({
            opacity: state.opacity == undefined ? 1 : state.opacity,
            display: state.display ? "block" : "none",
            top: state.top || 0,
            left: state.left || 0
          })
        }
      };
      Slide.prototype.getTransition = function () {
        var transitions = {
          none: {
            overlay: false,
            current: {
              from: {},
              to: {}
            },
            next: {
              from: {},
              to: {}
            }
          },
          opacity: {
            overlay: true,
            current: {
              from: {
                opacity: 1
              },
              to: {
                opacity: 0
              }
            },
            next: {
              from: {
                opacity: 0
              },
              to: {
                opacity: 1
              }
            }
          },
          flash: {
            overlay: false,
            current: {
              from: {
                opacity: 1
              },
              to: {
                opacity: 0
              }
            },
            next: {
              from: {
                opacity: 0
              },
              to: {
                opacity: 1
              }
            }
          }
        };
        return transitions[this.data.transition_animation || "none"]
      };
      Slide.prototype.destroy = function () {
        this.$root.remove()
      };
      return Slide
    }();
    exports.Slide = Slide
  }, function (module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    (function (global, factory) {
      if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
      } else {
        var mod
      }
    })(this, function (module, exports, _utils) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          })
        } else {
          obj[key] = value
        }
        return obj
      }

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key]
            }
          }
        }
        return target
      };
      var updatedDiff = function updatedDiff(lhs, rhs) {
        if (lhs === rhs) return {};
        if (!(0, _utils.isObject)(lhs) || !(0, _utils.isObject)(rhs)) return rhs;
        var l = (0, _utils.properObject)(lhs);
        var r = (0, _utils.properObject)(rhs);
        if ((0, _utils.isDate)(l) || (0, _utils.isDate)(r)) {
          if (l.valueOf() == r.valueOf()) return {};
          return r
        }
        return Object.keys(r).reduce(function (acc, key) {
          if (l.hasOwnProperty(key)) {
            var difference = updatedDiff(l[key], r[key]);
            if ((0, _utils.isObject)(difference) && (0, _utils.isEmpty)(difference) && !(0, _utils.isDate)(difference)) return acc;
            return _extends({}, acc, _defineProperty({}, key, difference))
          }
          return acc
        }, {})
      };
      exports.default = updatedDiff;
      module.exports = exports["default"]
    })
  }, function (module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    (function (global, factory) {
      if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
      } else {
        var mod
      }
    })(this, function (module, exports, _utils) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          })
        } else {
          obj[key] = value
        }
        return obj
      }

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key]
            }
          }
        }
        return target
      };
      var deletedDiff = function deletedDiff(lhs, rhs) {
        if (lhs === rhs || !(0, _utils.isObject)(lhs) || !(0, _utils.isObject)(rhs)) return {};
        var l = (0, _utils.properObject)(lhs);
        var r = (0, _utils.properObject)(rhs);
        return Object.keys(l).reduce(function (acc, key) {
          if (r.hasOwnProperty(key)) {
            var difference = deletedDiff(l[key], r[key]);
            if ((0, _utils.isObject)(difference) && (0, _utils.isEmpty)(difference)) return acc;
            return _extends({}, acc, _defineProperty({}, key, difference))
          }
          return _extends({}, acc, _defineProperty({}, key, undefined))
        }, {})
      };
      exports.default = deletedDiff;
      module.exports = exports["default"]
    })
  }, function (module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    (function (global, factory) {
      if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
      } else {
        var mod
      }
    })(this, function (module, exports, _utils) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          })
        } else {
          obj[key] = value
        }
        return obj
      }

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key]
            }
          }
        }
        return target
      };
      var addedDiff = function addedDiff(lhs, rhs) {
        if (lhs === rhs || !(0, _utils.isObject)(lhs) || !(0, _utils.isObject)(rhs)) return {};
        var l = (0, _utils.properObject)(lhs);
        var r = (0, _utils.properObject)(rhs);
        return Object.keys(r).reduce(function (acc, key) {
          if (l.hasOwnProperty(key)) {
            var difference = addedDiff(l[key], r[key]);
            if ((0, _utils.isObject)(difference) && (0, _utils.isEmpty)(difference)) return acc;
            return _extends({}, acc, _defineProperty({}, key, difference))
          }
          return _extends({}, acc, _defineProperty({}, key, r[key]))
        }, {})
      };
      exports.default = addedDiff;
      module.exports = exports["default"]
    })
  }, function (module, exports, __webpack_require__) {
    /*! 2.3.1 */
    !function (t, e) {
      true ? module.exports = e() : undefined
    }(this, function () {
      return function (t) {
        function e(r) {
          if (n[r]) return n[r].exports;
          var i = n[r] = {
            i: r,
            l: !1,
            exports: {}
          };
          return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
        }

        var n = {};
        return e.m = t, e.c = n, e.i = function (t) {
          return t
        }, e.d = function (t, n, r) {
          e.o(t, n) || Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: r
          })
        }, e.n = function (t) {
          var n = t && t.__esModule ? function () {
            return t.default
          } : function () {
            return t
          };
          return e.d(n, "a", n), n
        }, e.o = function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "/assets/", e(e.s = 6)
      }([function (t, e, n) {
        "use strict";
        (function (t) {
          function r(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e.default = t, e
          }

          function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }

          function o() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              e = new j,
              n = e.tween(t);
            return n.tweenable = e, n
          }

          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.Tweenable = e.composeEasingObject = e.tweenProps = e.clone = e.each = void 0;
          var u = function () {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
              }

              return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
              }
            }(),
            a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
              return typeof t
            } : function (t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            };
          e.tween = o;
          var c = n(5),
            s = r(c),
            f = n(1),
            h = function (t) {
              return t && t.__esModule ? t : {
                default: t
              }
            }(f),
            l = n(7),
            p = r(l),
            d = "undefined" != typeof window ? window : t,
            m = d.cancelAnimationFrame || d.webkitCancelAnimationFrame || d.oCancelAnimationFrame || d.msCancelAnimationFrame || d.mozCancelRequestAnimationFrame || d.clearTimeout,
            _ = d.requestAnimationFrame || d.webkitRequestAnimationFrame || d.oRequestAnimationFrame || d.msRequestAnimationFrame || d.mozCancelRequestAnimationFrame && d.mozRequestAnimationFrame || setTimeout,
            v = function () {
            },
            y = e.each = function (t, e) {
              return Object.keys(t).forEach(e)
            },
            w = e.clone = function (t) {
              return (0, h.default)({}, t)
            },
            g = w(s),
            b = function (t, e, n, r) {
              return t + (e - t) * n(r)
            },
            O = e.tweenProps = function (t, e, n, r, i, o, u) {
              var a = t < o ? 0 : (t - o) / i;
              return y(e, function (t) {
                var i = u[t],
                  o = "function" == typeof i ? i : g[i];
                e[t] = b(n[t], r[t], o, a)
              }), e
            },
            M = e.composeEasingObject = function (t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "linear",
                n = {},
                r = void 0 === e ? "undefined" : a(e);
              return "string" === r || "function" === r ? y(t, function (t) {
                return n[t] = e
              }) : y(t, function (t) {
                return n[t] = n[t] || e[t] || "linear"
              }), n
            },
            j = e.Tweenable = function () {
              function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                i(this, t), this._currentState = e, this._configured = !1, this._scheduleFunction = _, void 0 !== n && this.setConfig(n)
              }

              return u(t, [{
                key: "_applyFilter",
                value: function (e) {
                  var n = this,
                    r = t.filters,
                    i = this._filterArgs;
                  y(r, function (t) {
                    var o = r[t][e];
                    void 0 !== o && o.apply(n, i)
                  })
                }
              }, {
                key: "_timeoutHandler",
                value: function (e) {
                  var n = this,
                    r = arguments,
                    i = this._currentState,
                    o = this._delay,
                    u = this._duration,
                    a = this._step,
                    c = this._targetState,
                    s = this._timestamp,
                    f = s + o + u,
                    h = Math.min(e || t.now(), f),
                    l = h >= f,
                    p = u - (f - h);
                  this.isPlaying() && (l ? (a(c, this._attachment, p), this.stop(!0)) : (this._scheduleId = this._scheduleFunction.call(d, function () {
                    return n._timeoutHandler.apply(n, r)
                  }, 1e3 / 60), this._applyFilter("beforeTween"), h < s + o ? (h = 1, u = 1, s = 1) : s += o, O(h, i, this._originalState, c, u, s, this._easing), this._applyFilter("afterTween"), a(i, this._attachment, p)))
                }
              }, {
                key: "tween",
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
                    n = this._attachment,
                    r = this._configured;
                  return this._isTweening ? this : (void 0 === e && r || this.setConfig(e), this._timestamp = t.now(), this._start(this.get(), n), this.resume())
                }
              }, {
                key: "setConfig",
                value: function () {
                  var t = this,
                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  this._configured = !0, this._attachment = e.attachment, (0, h.default)(this, {
                    _pausedAtTime: null,
                    _scheduleId: null,
                    _delay: e.delay || 0,
                    _start: e.start || v,
                    _step: e.step || v,
                    _duration: e.duration || 500,
                    _currentState: w(e.from || this.get())
                  }), (0, h.default)(this, {
                    _originalState: this.get(),
                    _targetState: w(e.to || this.get())
                  });
                  var n = this._currentState;
                  this._targetState = (0, h.default)({}, n, this._targetState), this._easing = M(n, e.easing), this._filterArgs = [n, this._originalState, this._targetState, this._easing], this._applyFilter("tweenCreated");
                  var r = e.promise || Promise;
                  return this._promise = new r(function (e, n) {
                    t._resolve = e, t._reject = n
                  }), this._promise.catch(v), this
                }
              }, {
                key: "get",
                value: function () {
                  return w(this._currentState)
                }
              }, {
                key: "set",
                value: function (t) {
                  this._currentState = t
                }
              }, {
                key: "pause",
                value: function () {
                  return this._pausedAtTime = t.now(), this._isPaused = !0, this
                }
              }, {
                key: "resume",
                value: function () {
                  return this._isPaused && (this._timestamp += t.now() - this._pausedAtTime), this._isPaused = !1, this._isTweening = !0, this._timeoutHandler(), this._promise
                }
              }, {
                key: "seek",
                value: function (e) {
                  e = Math.max(e, 0);
                  var n = t.now();
                  return this._timestamp + e === 0 ? this : (this._timestamp = n - e, this.isPlaying() || (this._isTweening = !0, this._isPaused = !1, this._timeoutHandler(n), this.pause()), this)
                }
              }, {
                key: "stop",
                value: function () {
                  var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    e = this._attachment,
                    n = this._currentState,
                    r = this._easing,
                    i = this._originalState,
                    o = this._targetState;
                  return this._isTweening = !1, this._isPaused = !1, m(this._scheduleId), t ? (this._applyFilter("beforeTween"), O(1, n, i, o, 1, 0, r), this._applyFilter("afterTween"), this._applyFilter("afterTweenEnd"), this._resolve(n, e)) : this._reject(n, e), this
                }
              }, {
                key: "isPlaying",
                value: function () {
                  return this._isTweening && !this._isPaused
                }
              }, {
                key: "setScheduleFunction",
                value: function (t) {
                  this._scheduleFunction = t
                }
              }, {
                key: "dispose",
                value: function () {
                  var t = this;
                  y(this, function (e) {
                    return delete t[e]
                  })
                }
              }]), t
            }();
          (0, h.default)(j, {
            formulas: g,
            filters: {
              token: p
            },
            now: Date.now || function (t) {
              return +new Date
            }
          })
        }).call(e, n(4))
      }, function (t, e, n) {
        "use strict";

        function r(t) {
          if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
          return Object(t)
        }

        var i = Object.getOwnPropertySymbols,
          o = Object.prototype.hasOwnProperty,
          u = Object.prototype.propertyIsEnumerable;
        t.exports = function () {
          try {
            if (!Object.assign) return !1;
            var t = new String("abc");
            if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
            for (var e = {}, n = 0; n < 10; n++) e["_" + String.fromCharCode(n)] = n;
            if ("0123456789" !== Object.getOwnPropertyNames(e).map(function (t) {
              return e[t]
            }).join("")) return !1;
            var r = {};
            return "abcdefghijklmnopqrst".split("").forEach(function (t) {
              r[t] = t
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
          } catch (t) {
            return !1
          }
        }() ? Object.assign : function (t, e) {
          for (var n, a, c = r(t), s = 1; s < arguments.length; s++) {
            n = Object(arguments[s]);
            for (var f in n) o.call(n, f) && (c[f] = n[f]);
            if (i) {
              a = i(n);
              for (var h = 0; h < a.length; h++) u.call(n, a[h]) && (c[a[h]] = n[a[h]])
            }
          }
          return c
        }
      }, function (t, e, n) {
        "use strict";

        function r(t, e, n, r, i, o) {
          var u = 0,
            a = 0,
            c = 0,
            s = 0,
            f = 0,
            h = 0,
            l = function (t) {
              return ((u * t + a) * t + c) * t
            },
            p = function (t) {
              return ((s * t + f) * t + h) * t
            },
            d = function (t) {
              return (3 * u * t + 2 * a) * t + c
            },
            m = function (t) {
              return t >= 0 ? t : 0 - t
            },
            _ = function (t, e) {
              var n = void 0,
                r = void 0,
                i = void 0,
                o = void 0,
                u = void 0,
                a = void 0;
              for (i = t, a = 0; a < 8; a++) {
                if (o = l(i) - t, m(o) < e) return i;
                if (u = d(i), m(u) < 1e-6) break;
                i -= o / u
              }
              if (n = 0, r = 1, (i = t) < n) return n;
              if (i > r) return r;
              for (; n < r;) {
                if (o = l(i), m(o - t) < e) return i;
                t > o ? n = i : r = i, i = .5 * (r - n) + n
              }
              return i
            };
          return c = 3 * e, a = 3 * (r - e) - c, u = 1 - c - a, h = 3 * n, f = 3 * (i - n) - h, s = 1 - h - f,
            function (t, e) {
              return p(_(t, e))
            }(t, function (t) {
              return 1 / (200 * t)
            }(o))
        }

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.unsetBezierFunction = e.setBezierFunction = void 0;
        var i = n(0),
          o = n(1),
          u = function (t) {
            return t && t.__esModule ? t : {
              default: t
            }
          }(o),
          a = function (t, e, n, i) {
            return function (o) {
              return r(o, t, e, n, i, 1)
            }
          };
        e.setBezierFunction = function (t, e, n, r, o) {
          return i.Tweenable.formulas[t] = (0, u.default)(a(e, n, r, o), {
            displayName: t,
            x1: e,
            y1: n,
            x2: r,
            y2: o
          })
        }, e.unsetBezierFunction = function (t) {
          return delete i.Tweenable.formulas[t]
        }
      }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.interpolate = void 0;
        var r = n(0),
          i = new r.Tweenable;
        i._filterArgs = [];
        e.interpolate = function (t, e, n, o) {
          var u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
            a = (0, r.clone)(t),
            c = (0, r.composeEasingObject)(t, o);
          i.set({}), i._filterArgs = [a, t, e, c], i._applyFilter("tweenCreated"), i._applyFilter("beforeTween");
          var s = (0, r.tweenProps)(n, a, t, e, 1, u, c);
          return i._applyFilter("afterTween"), s
        }
      }, function (t, e, n) {
        "use strict";
        var r, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
          return typeof t
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        };
        r = function () {
          return this
        }();
        try {
          r = r || Function("return this")() || (0, eval)("this")
        } catch (t) {
          "object" === ("undefined" == typeof window ? "undefined" : i(window)) && (r = window)
        }
        t.exports = r
      }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        e.linear = function (t) {
          return t
        }, e.easeInQuad = function (t) {
          return Math.pow(t, 2)
        }, e.easeOutQuad = function (t) {
          return -(Math.pow(t - 1, 2) - 1)
        }, e.easeInOutQuad = function (t) {
          return (t /= .5) < 1 ? .5 * Math.pow(t, 2) : -.5 * ((t -= 2) * t - 2)
        }, e.easeInCubic = function (t) {
          return Math.pow(t, 3)
        }, e.easeOutCubic = function (t) {
          return Math.pow(t - 1, 3) + 1
        }, e.easeInOutCubic = function (t) {
          return (t /= .5) < 1 ? .5 * Math.pow(t, 3) : .5 * (Math.pow(t - 2, 3) + 2)
        }, e.easeInQuart = function (t) {
          return Math.pow(t, 4)
        }, e.easeOutQuart = function (t) {
          return -(Math.pow(t - 1, 4) - 1)
        }, e.easeInOutQuart = function (t) {
          return (t /= .5) < 1 ? .5 * Math.pow(t, 4) : -.5 * ((t -= 2) * Math.pow(t, 3) - 2)
        }, e.easeInQuint = function (t) {
          return Math.pow(t, 5)
        }, e.easeOutQuint = function (t) {
          return Math.pow(t - 1, 5) + 1
        }, e.easeInOutQuint = function (t) {
          return (t /= .5) < 1 ? .5 * Math.pow(t, 5) : .5 * (Math.pow(t - 2, 5) + 2)
        }, e.easeInSine = function (t) {
          return 1 - Math.cos(t * (Math.PI / 2))
        }, e.easeOutSine = function (t) {
          return Math.sin(t * (Math.PI / 2))
        }, e.easeInOutSine = function (t) {
          return -.5 * (Math.cos(Math.PI * t) - 1)
        }, e.easeInExpo = function (t) {
          return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
        }, e.easeOutExpo = function (t) {
          return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
        }, e.easeInOutExpo = function (t) {
          return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
        }, e.easeInCirc = function (t) {
          return -(Math.sqrt(1 - t * t) - 1)
        }, e.easeOutCirc = function (t) {
          return Math.sqrt(1 - Math.pow(t - 1, 2))
        }, e.easeInOutCirc = function (t) {
          return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        }, e.easeOutBounce = function (t) {
          return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }, e.easeInBack = function (t) {
          var e = 1.70158;
          return t * t * ((e + 1) * t - e)
        }, e.easeOutBack = function (t) {
          var e = 1.70158;
          return (t -= 1) * t * ((e + 1) * t + e) + 1
        }, e.easeInOutBack = function (t) {
          var e = 1.70158;
          return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
        }, e.elastic = function (t) {
          return -1 * Math.pow(4, -8 * t) * Math.sin((6 * t - 1) * (2 * Math.PI) / 2) + 1
        }, e.swingFromTo = function (t) {
          var e = 1.70158;
          return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
        }, e.swingFrom = function (t) {
          var e = 1.70158;
          return t * t * ((e + 1) * t - e)
        }, e.swingTo = function (t) {
          var e = 1.70158;
          return (t -= 1) * t * ((e + 1) * t + e) + 1
        }, e.bounce = function (t) {
          return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }, e.bouncePast = function (t) {
          return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }, e.easeFromTo = function (t) {
          return (t /= .5) < 1 ? .5 * Math.pow(t, 4) : -.5 * ((t -= 2) * Math.pow(t, 3) - 2)
        }, e.easeFrom = function (t) {
          return Math.pow(t, 4)
        }, e.easeTo = function (t) {
          return Math.pow(t, .25)
        }
      }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var r = n(0);
        Object.defineProperty(e, "Tweenable", {
          enumerable: !0,
          get: function () {
            return r.Tweenable
          }
        }), Object.defineProperty(e, "tween", {
          enumerable: !0,
          get: function () {
            return r.tween
          }
        });
        var i = n(3);
        Object.defineProperty(e, "interpolate", {
          enumerable: !0,
          get: function () {
            return i.interpolate
          }
        });
        var o = n(2);
        Object.defineProperty(e, "setBezierFunction", {
          enumerable: !0,
          get: function () {
            return o.setBezierFunction
          }
        }), Object.defineProperty(e, "unsetBezierFunction", {
          enumerable: !0,
          get: function () {
            return o.unsetBezierFunction
          }
        })
      }, function (t, e, n) {
        "use strict";

        function r(t) {
          return parseInt(t, 16)
        }

        function i(t, e, n) {
          [t, e, n].forEach(_), this._tokenData = g(t)
        }

        function o(t, e, n, r) {
          var i = this._tokenData;
          P(r, i), [t, e, n].forEach(function (t) {
            return b(t, i)
          })
        }

        function u(t, e, n, r) {
          var i = this._tokenData;
          [t, e, n].forEach(function (t) {
            return F(t, i)
          }), S(r, i)
        }

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.tweenCreated = i, e.beforeTween = o, e.afterTween = u;
        var a = n(0),
          c = function () {
            var t = /[0-9.\-]+/g.source,
              e = /,\s*/.source;
            return new RegExp("rgb\\(" + t + e + t + e + t + "\\)", "g")
          }(),
          s = /#([0-9]|[a-f]){3,6}/gi,
          f = function (t, e) {
            return t.map(function (t, n) {
              return "_" + e + "_" + n
            })
          },
          h = function (t) {
            var e = t.match(/([^\-0-9\.]+)/g);
            return e ? (1 === e.length || t.charAt(0).match(/(\d|\-|\.)/)) && e.unshift("") : e = ["", ""], e.join("VAL")
          },
          l = function (t) {
            return t = t.replace(/#/, ""), 3 === t.length && (t = t.split(""), t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), [r(t.substr(0, 2)), r(t.substr(2, 2)), r(t.substr(4, 2))]
          },
          p = function (t) {
            return "rgb(" + l(t).join(",") + ")"
          },
          d = function (t, e, n) {
            var r = e.match(t),
              i = e.replace(t, "VAL");
            return r && r.forEach(function (t) {
              return i = i.replace("VAL", n(t))
            }), i
          },
          m = function (t) {
            return d(s, t, p)
          },
          _ = function (t) {
            (0, a.each)(t, function (e) {
              var n = t[e];
              "string" == typeof n && n.match(s) && (t[e] = m(n))
            })
          },
          v = function (t) {
            var e = t.match(/[0-9.\-]+/g).map(Math.floor);
            return "" + t.match(/^.*\(/)[0] + e.join(",") + ")"
          },
          y = function (t) {
            return d(c, t, v)
          },
          w = function (t) {
            return t.match(/[0-9.\-]+/g)
          },
          g = function (t) {
            var e = {};
            return (0, a.each)(t, function (n) {
              var r = t[n];
              "string" == typeof r && (e[n] = {
                formatString: h(r),
                chunkNames: f(w(r), n)
              })
            }), e
          },
          b = function (t, e) {
            (0, a.each)(e, function (n) {
              w(t[n]).forEach(function (r, i) {
                return t[e[n].chunkNames[i]] = +r
              }), delete t[n]
            })
          },
          O = function (t, e) {
            var n = {};
            return e.forEach(function (e) {
              n[e] = t[e], delete t[e]
            }), n
          },
          M = function (t, e) {
            return e.map(function (e) {
              return t[e]
            })
          },
          j = function (t, e) {
            return e.forEach(function (e) {
              return t = t.replace("VAL", +e.toFixed(4))
            }), t
          },
          F = function (t, e) {
            (0, a.each)(e, function (n) {
              var r = e[n],
                i = r.chunkNames,
                o = r.formatString,
                u = j(o, M(O(t, i), i));
              t[n] = y(u)
            })
          },
          P = function (t, e) {
            (0, a.each)(e, function (n) {
              var r = e[n].chunkNames,
                i = t[n];
              "string" == typeof i ? function () {
                var e = i.split(" "),
                  n = e[e.length - 1];
                r.forEach(function (r, i) {
                  return t[r] = e[i] || n
                })
              }() : r.forEach(function (e) {
                return t[e] = i
              }), delete t[n]
            })
          },
          S = function (t, e) {
            (0, a.each)(e, function (n) {
              var r = e[n].chunkNames,
                i = (r.length, t[r[0]]);
              t[n] = "string" == typeof i ? r.map(function (e) {
                var n = t[e];
                return delete t[e], n
              }).join(" ") : i
            })
          }
      }])
    })
  }, function (module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var $ = __webpack_require__(0);
    var Utils = function () {
      function Utils() {
      }

      Utils.clone = function (source) {
        return JSON.parse(JSON.stringify(source))
      };
      Utils.isEqual = function (obj1, obj2) {
        return JSON.stringify(obj1) === JSON.stringify(obj2)
      };
      Utils.tagTextElements = function (text, class_namespace) {
        var text_arr = text.split("");
        var re = /\[([.\s\S]*?)\]/g;
        var selected_ranges = [];
        var match;
        while ((match = re.exec(text)) != null) {
          selected_ranges.push([match.index, re.lastIndex])
        }
        var text_container = $("<span></span>");
        var word = $('<span class="' + class_namespace + 'word"></span>');
        for (var i = 0; i < text_arr.length; i++) {
          var selected = false;
          var hide = false;
          var last_letter = i == text_arr.length - 1;
          selected_ranges.forEach(function (range) {
            if (i >= range[0] && i < range[1]) {
              if (i == range[0] || i == range[1] - 1) hide = true;
              selected = true
            }
          });
          if (!hide) {
            var transformed_letter = text_arr[i];
            var next_new_word = false;
            if (text_arr[i + 1] && (text_arr[i + 1] == " " || text_arr[i + 1] == "\n" || text_arr[i + 1] == "]" && text_arr[i + 2] == " ")) {
              var next_new_word = true
            }
            if (text_arr[i] == "\n") {
              transformed_letter = "<br />"
            }
            if (text_arr[i] != " ") {
              var letter = $('<span class="' + class_namespace + 'letter">' + transformed_letter + "" + (next_new_word ? " " : "") + "</span>");
              letter.appendTo(word);
              if (next_new_word || last_letter) {
                word.appendTo(text_container);
                word = $('<span class="' + class_namespace + 'word"></span>')
              }
              if (selected) letter.addClass(class_namespace + "letter-selected")
            }
          } else {
            if (last_letter) {
              word.appendTo(text_container);
              word = $('<span class="' + class_namespace + 'word"></span>')
            }
          }
        }
        return text_container
      };
      Utils.without = function (array) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          values[_i - 1] = arguments[_i]
        }
        return array.filter(function (value) {
          return !~values.indexOf(value)
        })
      };
      return Utils
    }();
    exports.Utils = Utils
  }, function (module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    (function (global, factory) {
      if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(6), __webpack_require__(5), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
      } else {
        var mod
      }
    })(this, function (module, exports, _added, _deleted, _updated) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _added2 = _interopRequireDefault(_added);
      var _deleted2 = _interopRequireDefault(_deleted);
      var _updated2 = _interopRequireDefault(_updated);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        }
      }

      var detailedDiff = function detailedDiff(lhs, rhs) {
        return {
          added: (0, _added2.default)(lhs, rhs),
          deleted: (0, _deleted2.default)(lhs, rhs),
          updated: (0, _updated2.default)(lhs, rhs)
        }
      };
      exports.default = detailedDiff;
      module.exports = exports["default"]
    })
  }, function (module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    (function (global, factory) {
      if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
      } else {
        var mod
      }
    })(this, function (module, exports, _utils) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          })
        } else {
          obj[key] = value
        }
        return obj
      }

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key]
            }
          }
        }
        return target
      };
      var diff = function diff(lhs, rhs) {
        if (lhs === rhs) return {};
        if (!(0, _utils.isObject)(lhs) || !(0, _utils.isObject)(rhs)) return rhs;
        var l = (0, _utils.properObject)(lhs);
        var r = (0, _utils.properObject)(rhs);
        var deletedValues = Object.keys(l).reduce(function (acc, key) {
          return r.hasOwnProperty(key) ? acc : _extends({}, acc, _defineProperty({}, key, undefined))
        }, {});
        if ((0, _utils.isDate)(l) || (0, _utils.isDate)(r)) {
          if (l.valueOf() == r.valueOf()) return {};
          return r
        }
        return Object.keys(r).reduce(function (acc, key) {
          if (!l.hasOwnProperty(key)) return _extends({}, acc, _defineProperty({}, key, r[key]));
          var difference = diff(l[key], r[key]);
          if ((0, _utils.isObject)(difference) && (0, _utils.isEmpty)(difference) && !(0, _utils.isDate)(difference)) return acc;
          return _extends({}, acc, _defineProperty({}, key, difference))
        }, deletedValues)
      };
      exports.default = diff;
      module.exports = exports["default"]
    })
  }, function (module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    (function (global, factory) {
      if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(10), __webpack_require__(6), __webpack_require__(5), __webpack_require__(4), __webpack_require__(9)], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
      } else {
        var mod
      }
    })(this, function (exports, _diff, _added, _deleted, _updated, _detailed) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.detailedDiff = exports.updatedDiff = exports.deletedDiff = exports.diff = exports.addedDiff = undefined;
      var _diff2 = _interopRequireDefault(_diff);
      var _added2 = _interopRequireDefault(_added);
      var _deleted2 = _interopRequireDefault(_deleted);
      var _updated2 = _interopRequireDefault(_updated);
      var _detailed2 = _interopRequireDefault(_detailed);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        }
      }

      exports.addedDiff = _added2.default;
      exports.diff = _diff2.default;
      exports.deletedDiff = _deleted2.default;
      exports.updatedDiff = _updated2.default;
      exports.detailedDiff = _detailed2.default
    })
  }, function (module, exports, __webpack_require__) {
    /*! 2.2.1 */
    !function (e, t) {
      true ? module.exports = t(__webpack_require__(7)) : undefined
    }(this, function (e) {
      return function (e) {
        function t(r) {
          if (n[r]) return n[r].exports;
          var i = n[r] = {
            i: r,
            l: !1,
            exports: {}
          };
          return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
        }

        var n = {};
        return t.m = e, t.c = n, t.i = function (e) {
          return e
        }, t.d = function (e, n, r) {
          t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r
          })
        }, t.n = function (e) {
          var n = e && e.__esModule ? function () {
            return e.default
          } : function () {
            return e
          };
          return t.d(n, "a", n), n
        }, t.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "/assets/", t(t.s = 10)
      }([function (e, t, n) {
        "use strict";
        (function (e) {
          function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }

          function i(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
              return n
            }
            return Array.from(e)
          }

          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.Rekapi = t.rendererBootstrappers = t.updateToCurrentMillisecond = t.updateToMillisecond = t.calculateLoopPosition = t.updatePlayState = t.isAnimationComplete = t.calculateTimeSinceStart = t.determineCurrentLoopIteration = t.invalidateAnimationLength = t.fireEvent = t.DEFAULT_EASING = void 0;
          var o = function () {
              function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
              }

              return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
              }
            }(),
            a = n(2),
            u = n(3),
            c = n(1),
            s = (t.DEFAULT_EASING = "linear", t.fireEvent = function (e, t) {
              var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              return e._events[t].forEach(function (t) {
                return t(e, n)
              })
            }),
            l = t.invalidateAnimationLength = function (e) {
              return e._animationLengthValid = !1
            },
            f = t.determineCurrentLoopIteration = function (e, t) {
              var n = e.getAnimationLength();
              return 0 === n ? t : Math.floor(t / n)
            },
            p = t.calculateTimeSinceStart = function (e) {
              return a.Tweenable.now() - e._loopTimestamp
            },
            h = t.isAnimationComplete = function (e, t) {
              return t >= e._timesToIterate && -1 !== e._timesToIterate
            },
            d = t.updatePlayState = function (e, t) {
              h(e, t) && (e.stop(), s(e, "animationComplete"))
            },
            y = t.calculateLoopPosition = function (e, t, n) {
              var r = e.getAnimationLength();
              return 0 === r ? 0 : h(e, n) ? r : t % r
            },
            v = t.updateToMillisecond = function (e, t) {
              var n = f(e, t),
                r = y(e, t, n);
              e._loopPosition = r;
              var o = [];
              n > e._latestIteration && (s(e, "animationLooped"), e._actors.forEach(function (e) {
                var t = e._keyframeProperties,
                  n = Object.keys(t).reduce(function (e, n) {
                    var r = t[n];
                    return "function" === r.name && e.push(r), e
                  }, []),
                  r = n[n.length - 1];
                r && !r.hasFired && r.invoke(), o.push.apply(o, i(n))
              })), e._latestIteration = n, e.update(r, !0), d(e, n), o.forEach(function (e) {
                e.hasFired = !1
              })
            },
            m = t.updateToCurrentMillisecond = function (e) {
              return v(e, p(e))
            },
            _ = function (t) {
              return t._loopId = t._scheduleUpdate.call ? t._scheduleUpdate.call(e, t._updateFn, 1e3 / 60) : setTimeout(t._updateFn, 1e3 / 60)
            },
            g = function () {
              return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || e.mozCancelRequestAnimationFrame && e.mozRequestAnimationFrame || e.setTimeout
            },
            b = function () {
              return e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.oCancelAnimationFrame || e.msCancelAnimationFrame || e.mozCancelRequestAnimationFrame || e.clearTimeout
            },
            k = function (t) {
              return t._cancelUpdate.call ? t._cancelUpdate.call(e, t._loopId) : clearTimeout(t._loopId)
            },
            P = "stopped",
            w = t.rendererBootstrappers = [];
          t.Rekapi = function () {
            function e() {
              var t = this,
                n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              r(this, e), this.context = n, this._actors = [], this._playState = P, this.sort = null, this._events = {
                animationComplete: [],
                playStateChange: [],
                play: [],
                pause: [],
                stop: [],
                beforeUpdate: [],
                afterUpdate: [],
                addActor: [],
                removeActor: [],
                beforeAddKeyframeProperty: [],
                addKeyframeProperty: [],
                removeKeyframeProperty: [],
                removeKeyframePropertyComplete: [],
                beforeRemoveKeyframeProperty: [],
                addKeyframePropertyTrack: [],
                removeKeyframePropertyTrack: [],
                timelineModified: [],
                animationLooped: []
              }, this._timesToIterate = -1, this._animationLength = 0, this._animationLengthValid = !1, this._loopId = null, this._loopTimestamp = null, this._pausedAtTime = null, this._lastUpdatedMillisecond = 0, this._latestIteration = 0, this._loopPosition = null, this._scheduleUpdate = g(), this._cancelUpdate = b(), this._updateFn = function () {
                _(t), m(t)
              }, this.renderers = w.map(function (e) {
                return e(t)
              }).filter(function (e) {
                return e
              })
            }

            return o(e, [{
              key: "addActor",
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  t = e instanceof u.Actor ? e : new u.Actor(e);
                return ~this._actors.indexOf(t) ? t : (t.context = t.context || this.context, t.rekapi = this, this._actors.push(t), l(this), t.setup(), s(this, "addActor", t), t)
              }
            }, {
              key: "getActor",
              value: function (e) {
                return this._actors.filter(function (t) {
                  return t.id === e
                })[0]
              }
            }, {
              key: "getActorIds",
              value: function () {
                return this._actors.map(function (e) {
                  return e.id
                })
              }
            }, {
              key: "getAllActors",
              value: function () {
                return this._actors.slice()
              }
            }, {
              key: "getActorCount",
              value: function () {
                return this._actors.length
              }
            }, {
              key: "removeActor",
              value: function (e) {
                return this._actors = (0, c.without)(this._actors, e), delete e.rekapi, e.teardown(), l(this), s(this, "removeActor", e), e
              }
            }, {
              key: "removeAllActors",
              value: function () {
                var e = this;
                return this.getAllActors().map(function (t) {
                  return e.removeActor(t)
                })
              }
            }, {
              key: "play",
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                return k(this), "paused" === this._playState ? this._loopTimestamp += a.Tweenable.now() - this._pausedAtTime : this._loopTimestamp = a.Tweenable.now(), this._timesToIterate = e, this._playState = "playing", _(this), s(this, "playStateChange"), s(this, "play"), this
              }
            }, {
              key: "playFrom",
              value: function (e, t) {
                return this.play(t), this._loopTimestamp = a.Tweenable.now() - e, this._actors.forEach(function (t) {
                  return t._resetFnKeyframesFromMillisecond(e)
                }), this
              }
            }, {
              key: "playFromCurrent",
              value: function (e) {
                return this.playFrom(this._lastUpdatedMillisecond, e)
              }
            }, {
              key: "pause",
              value: function () {
                return "paused" === this._playState ? this : (this._playState = "paused", k(this), this._pausedAtTime = a.Tweenable.now(), s(this, "playStateChange"), s(this, "pause"), this)
              }
            }, {
              key: "stop",
              value: function () {
                return this._playState = P, k(this), this._actors.forEach(function (e) {
                  return e._resetFnKeyframesFromMillisecond(0)
                }), s(this, "playStateChange"), s(this, "stop"), this
              }
            }, {
              key: "isPlaying",
              value: function () {
                return "playing" === this._playState
              }
            }, {
              key: "isPaused",
              value: function () {
                return "paused" === this._playState
              }
            }, {
              key: "isStopped",
              value: function () {
                return this._playState === P
              }
            }, {
              key: "update",
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._lastUpdatedMillisecond,
                  t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                s(this, "beforeUpdate");
                var n = this.sort;
                return (n ? this._actors.sort(function (e, t) {
                  return n(e) - n(t)
                }) : this._actors).forEach(function (n) {
                  n._updateState(e, t), n.wasActive && n.render(n.context, n.get())
                }), this._lastUpdatedMillisecond = e, s(this, "afterUpdate"), this
              }
            }, {
              key: "getLastPositionUpdated",
              value: function () {
                return this._lastUpdatedMillisecond / this.getAnimationLength()
              }
            }, {
              key: "getLastMillisecondUpdated",
              value: function () {
                return this._lastUpdatedMillisecond
              }
            }, {
              key: "getAnimationLength",
              value: function () {
                return this._animationLengthValid || (this._animationLength = Math.max.apply(Math, this._actors.map(function (e) {
                  return e.getEnd()
                })), this._animationLengthValid = !0), this._animationLength
              }
            }, {
              key: "on",
              value: function (e, t) {
                return this._events[e] ? (this._events[e].push(t), this) : this
              }
            }, {
              key: "trigger",
              value: function (e, t) {
                return s(this, e, t), this
              }
            }, {
              key: "off",
              value: function (e, t) {
                return this._events[e] ? (this._events[e] = t ? (0, c.without)(this._events[e], t) : [], this) : this
              }
            }, {
              key: "exportTimeline",
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  t = e.withId,
                  n = void 0 !== t && t,
                  r = {
                    duration: this.getAnimationLength(),
                    actors: this._actors.map(function (e) {
                      return e.exportTimeline({
                        withId: n
                      })
                    })
                  },
                  i = a.Tweenable.formulas,
                  o = Object.keys(i).filter(function (e) {
                    return "number" == typeof i[e].x1
                  }),
                  u = ["displayName", "x1", "y1", "x2", "y2"];
                return r.curves = o.reduce(function (e, t) {
                  var n = i[t];
                  return e[n.displayName] = (0, c.pick)(n, u), e
                }, {}), r
              }
            }, {
              key: "importTimeline",
              value: function (e) {
                var t = this;
                (0, c.each)(e.curves, function (e, t) {
                  return (0, a.setBezierFunction)(t, e.x1, e.y1, e.x2, e.y2)
                }), e.actors.forEach(function (e) {
                  var n = new u.Actor;
                  n.importTimeline(e), t.addActor(n)
                })
              }
            }, {
              key: "getEventNames",
              value: function () {
                return Object.keys(this._events)
              }
            }, {
              key: "getRendererInstance",
              value: function (e) {
                return this.renderers.filter(function (t) {
                  return t instanceof e
                })[0]
              }
            }, {
              key: "moveActorToPosition",
              value: function (e, t) {
                return t < this._actors.length && t > -1 && (this._actors = (0, c.without)(this._actors, e), this._actors.splice(t, 0, e)), this
              }
            }]), e
          }()
        }).call(t, n(5))
      }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var r = (t.clone = function (e) {
          return Object.assign({}, e)
        }, t.difference = function (e, t) {
          return e.filter(function (e) {
            return !~t.indexOf(e)
          })
        }, t.each = function (e, t) {
          return Object.keys(e).forEach(function (n) {
            return t(e[n], n)
          })
        }, t.intersection = function (e, t) {
          return e.filter(function (e) {
            return ~t.indexOf(e)
          })
        }, t.pick = function (e, t) {
          return t.reduce(function (t, n) {
            var r = e[n];
            return void 0 !== r && (t[n] = r), t
          }, {})
        }, t.reject = function (e, t) {
          return e.filter(function (e) {
            return !t(e)
          })
        }, t.uniq = function (e) {
          return e.reduce(function (e, t) {
            return ~e.indexOf(t) || e.push(t), e
          }, [])
        }, 0);
        t.uniqueId = function () {
          return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "") + r++
        }, t.without = function (e) {
          for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
          return e.filter(function (e) {
            return !~n.indexOf(e)
          })
        }
      }, function (t, n) {
        t.exports = e
      }, function (e, t, n) {
        "use strict";

        function r(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n, e
        }

        function i(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function a(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.Actor = void 0;
        var u = function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
              }
            }

            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t
            }
          }(),
          c = n(2),
          s = n(4),
          l = n(0),
          f = n(1),
          p = n(8),
          h = function (e) {
            return e && e.__esModule ? e : {
              default: e
            }
          }(p),
          d = function () {
          },
          y = function (e) {
            return e.millisecond
          },
          v = function (e, t, n) {
            return e.rekapi && (0, l.fireEvent)(e.rekapi, t, n)
          },
          m = function (e, t) {
            var n = e._timelinePropertyCache,
              r = (0, h.default)(n, {
                _millisecond: t
              }, function (e) {
                return e._millisecond
              });
            if (n[r]) return n[r]._millisecond === t ? n[r] : r >= 1 ? n[r - 1] : n[0]
          },
          _ = function (e, t) {
            return (0, h.default)(e, {
              millisecond: t
            }, y)
          },
          g = function (e, t) {
            var n = {};
            return (0, f.each)(e._propertyTracks, function (e, r) {
              var i = _(e, t);
              n[r] = e[i] && e[i].millisecond === t ? e[i] : i >= 1 ? e[i - 1] : e[0]
            }), n
          },
          b = function (e, t) {
            var n = _(e, t);
            return e[n] && e[n].millisecond === t ? n : -1
          },
          k = function (e) {
            return e._timelinePropertyCacheValid = !1
          },
          P = function (e) {
            if (!e._timelinePropertyCacheValid) {
              e._timelinePropertyCache = [], e._timelineFunctionCache = [];
              var t = e._keyframeProperties,
                n = e._timelineFunctionCache,
                r = e._timelinePropertyCache,
                i = Object.keys(t).map(function (e) {
                  return t[e]
                }).sort(function (e, t) {
                  return e.millisecond - t.millisecond
                }),
                o = g(e, 0);
              o._millisecond = 0, r.push(o), i.forEach(function (e) {
                e.millisecond !== o._millisecond && (o = (0, f.clone)(o), o._millisecond = e.millisecond, r.push(o)), o[e.name] = e, "function" === e.name && n.push(e)
              }), e._timelinePropertyCacheValid = !0
            }
          },
          w = function (e) {
            var t = e._propertyTracks;
            Object.keys(t).forEach(function (n) {
              t[n].length || (delete t[n], v(e, "removeKeyframePropertyTrack", n))
            })
          },
          A = function (e) {
            (0, f.each)(e._propertyTracks, function (t, n) {
              t = t.sort(function (e, t) {
                return e.millisecond - t.millisecond
              }), t.forEach(function (e, n) {
                return e.linkToNext(t[n + 1])
              }), e._propertyTracks[n] = t
            })
          },
          T = function (e) {
            A(e), k(e), e.rekapi && (0, l.invalidateAnimationLength)(e.rekapi), v(e, "timelineModified")
          },
          O = t.Actor = function (e) {
            function t() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              i(this, t);
              var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
              return Object.assign(n, {
                _propertyTracks: {},
                _timelinePropertyCache: [],
                _timelineFunctionCache: [],
                _timelinePropertyCacheValid: !1,
                _keyframeProperties: {},
                id: (0, f.uniqueId)(),
                context: e.context,
                setup: e.setup || d,
                render: e.render || d,
                teardown: e.teardown || d,
                wasActive: !0
              }), n
            }

            return a(t, e), u(t, [{
              key: "keyframe",
              value: function (e, t) {
                var n = this,
                  r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.DEFAULT_EASING;
                return t instanceof Function && (t = {
                  function: t
                }), (0, f.each)(t, function (t, i) {
                  return n.addKeyframeProperty(new s.KeyframeProperty(e, i, t, "string" == typeof r ? r : r[i] || l.DEFAULT_EASING))
                }), this.rekapi && (0, l.invalidateAnimationLength)(this.rekapi), k(this), v(this, "timelineModified"), this
              }
            }, {
              key: "hasKeyframeAt",
              value: function (e) {
                var t = this,
                  n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                  r = this._propertyTracks;
                if (n && !r[n]) return !1;
                var i = n ? (0, f.pick)(r, [n]) : r;
                return Object.keys(i).some(function (n) {
                  return i.hasOwnProperty(n) && !!t.getKeyframeProperty(n, e)
                })
              }
            }, {
              key: "copyKeyframe",
              value: function (e, t) {
                var n = this,
                  r = {},
                  i = {};
                return (0, f.each)(this._propertyTracks, function (t, o) {
                  var a = n.getKeyframeProperty(o, e);
                  a && (r[o] = a.value, i[o] = a.easing)
                }), this.keyframe(t, r, i), this
              }
            }, {
              key: "moveKeyframe",
              value: function (e, t) {
                return !(!this.hasKeyframeAt(e) || this.hasKeyframeAt(t)) && ((0, f.each)(this._propertyTracks, function (n, r) {
                  var i = b(n, e);
                  -1 !== i && (n[i].millisecond = t)
                }), T(this), !0)
              }
            }, {
              key: "modifyKeyframe",
              value: function (e, t) {
                var n = this,
                  r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return (0, f.each)(this._propertyTracks, function (i, o) {
                  var a = n.getKeyframeProperty(o, e);
                  a ? a.modifyWith({
                    value: t[o],
                    easing: r[o]
                  }) : t[o] && n.addKeyframeProperty(new s.KeyframeProperty(e, o, t[o], r[o]))
                }), T(this), this
              }
            }, {
              key: "removeKeyframe",
              value: function (e) {
                var t = this;
                return (0, f.each)(this._propertyTracks, function (n, r) {
                  var i = b(n, e);
                  if (-1 !== i) {
                    var o = n[i];
                    t._deleteKeyframePropertyAt(n, i), o.detach()
                  }
                }), w(this), T(this), v(this, "timelineModified"), this
              }
            }, {
              key: "removeAllKeyframes",
              value: function () {
                return (0, f.each)(this._propertyTracks, function (e) {
                  return e.length = 0
                }), (0, f.each)(this._keyframeProperties, function (e) {
                  return e.detach()
                }), w(this), this._keyframeProperties = {}, this.removeKeyframe(0)
              }
            }, {
              key: "getKeyframeProperty",
              value: function (e, t) {
                var n = this._propertyTracks[e];
                return n[b(n, t)]
              }
            }, {
              key: "modifyKeyframeProperty",
              value: function (e, t, n) {
                var r = this.getKeyframeProperty(e, t);
                if (r) {
                  if ("millisecond" in n && this.hasKeyframeAt(n.millisecond, e)) throw new Error("Tried to move " + e + " to " + n.millisecond + "ms, but a keyframe property already exists there");
                  r.modifyWith(n), T(this)
                }
                return this
              }
            }, {
              key: "removeKeyframeProperty",
              value: function (e, t) {
                var n = this._propertyTracks;
                if (n[e]) {
                  var r = n[e],
                    i = b(r, t),
                    o = r[i];
                  return v(this, "beforeRemoveKeyframeProperty", o), this._deleteKeyframePropertyAt(r, i), o.detach(), w(this), T(this), v(this, "removeKeyframePropertyComplete", o), o
                }
              }
            }, {
              key: "getTrackNames",
              value: function () {
                return Object.keys(this._propertyTracks)
              }
            }, {
              key: "getPropertiesInTrack",
              value: function (e) {
                return (this._propertyTracks[e] || []).slice(0)
              }
            }, {
              key: "getStart",
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
                  t = this._propertyTracks,
                  n = [];
                if (t.hasOwnProperty(e)) {
                  var r = t[e][0];
                  r && n.push(r.millisecond)
                } else (0, f.each)(t, function (e) {
                  e.length && n.push(e[0].millisecond)
                });
                return n.length > 0 ? Math.min.apply(Math, n) : 0
              }
            }, {
              key: "getEnd",
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
                  t = [0],
                  n = e ? r({}, e, this._propertyTracks[e]) : this._propertyTracks;
                return (0, f.each)(n, function (e) {
                  e.length && t.push(e[e.length - 1].millisecond)
                }), Math.max.apply(Math, t)
              }
            }, {
              key: "getLength",
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
                return this.getEnd(e) - this.getStart(e)
              }
            }, {
              key: "wait",
              value: function (e) {
                var t = this.getEnd();
                if (e <= t) return this;
                var n = g(this, this.getEnd()),
                  r = {},
                  i = {};
                return (0, f.each)(n, function (e, t) {
                  r[t] = e.value, i[t] = e.easing
                }), this.modifyKeyframe(t, r, i), this.keyframe(e, r, i), this
              }
            }, {
              key: "_insertKeyframePropertyAt",
              value: function (e, t, n) {
                t.splice(n, 0, e)
              }
            }, {
              key: "_deleteKeyframePropertyAt",
              value: function (e, t) {
                e.splice(t, 1)
              }
            }, {
              key: "addKeyframeProperty",
              value: function (e) {
                this.rekapi && v(this, "beforeAddKeyframeProperty", e), e.actor = this, this._keyframeProperties[e.id] = e;
                var t = e.name,
                  n = this._propertyTracks,
                  r = this.rekapi;
                if (this._propertyTracks[t]) {
                  var i = _(n[t], e.millisecond);
                  if (n[t][i]) {
                    var o = e.millisecond,
                      a = n[t][i].millisecond;
                    if (a === o) throw new Error("Cannot add duplicate " + t + " keyframe property @ " + o + "ms");
                    r && r._warnOnOutOfOrderKeyframes && console.warn(new Error("Added a keyframe property before end of " + t + " track @ " + o + "ms (< " + a + "ms)"))
                  }
                  this._insertKeyframePropertyAt(e, n[t], i), T(this)
                } else n[t] = [e], r && v(this, "addKeyframePropertyTrack", e);
                return r && v(this, "addKeyframeProperty", e), this
              }
            }, {
              key: "setActive",
              value: function (e, t) {
                var n = !!this._propertyTracks._active,
                  r = n && this.getKeyframeProperty("_active", e);
                return r ? r.value = t : this.addKeyframeProperty(new s.KeyframeProperty(e, "_active", t)), this
              }
            }, {
              key: "_updateState",
              value: function (e) {
                var t = this,
                  n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                  r = this.getStart(),
                  i = this.getEnd(),
                  o = {};
                e = Math.min(i, e), P(this);
                var a = (0, f.clone)(m(this, e));
                if (delete a._millisecond, a._active && e >= a._active.millisecond) {
                  if (this.wasActive = a._active.getValueAt(e), !this.wasActive) return this
                } else this.wasActive = !0;
                return r === i ? (0, f.each)(a, function (t, n) {
                  if (t.shouldInvokeForMillisecond(e)) return t.invoke(), void(t.hasFired = !1);
                  o[n] = t.value
                }) : (0, f.each)(a, function (n, r) {
                  if (t._beforeKeyframePropertyInterpolate !== d && t._beforeKeyframePropertyInterpolate(n), n.shouldInvokeForMillisecond(e)) return void n.invoke();
                  o[r] = n.getValueAt(e), t._afterKeyframePropertyInterpolate !== d && t._afterKeyframePropertyInterpolate(n, o)
                }), this.set(o), n || this._resetFnKeyframesFromMillisecond(e), this
              }
            }, {
              key: "_resetFnKeyframesFromMillisecond",
              value: function (e) {
                for (var t = this._timelineFunctionCache, n = t.length, r = (0, h.default)(t, {
                  millisecond: e
                }, y); r < n;) t[r++].hasFired = !1
              }
            }, {
              key: "exportTimeline",
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  t = e.withId,
                  n = void 0 !== t && t,
                  r = {
                    start: this.getStart(),
                    end: this.getEnd(),
                    trackNames: this.getTrackNames(),
                    propertyTracks: {}
                  };
                return n && (r.id = this.id), (0, f.each)(this._propertyTracks, function (e, t) {
                  var i = [];
                  e.forEach(function (e) {
                    i.push(e.exportPropertyData({
                      withId: n
                    }))
                  }), r.propertyTracks[t] = i
                }), r
              }
            }, {
              key: "importTimeline",
              value: function (e) {
                var t = this;
                (0, f.each)(e.propertyTracks, function (e) {
                  e.forEach(function (e) {
                    t.keyframe(e.millisecond, r({}, e.name, e.value), e.easing)
                  })
                })
              }
            }]), t
          }(c.Tweenable);
        Object.assign(O.prototype, {
          _beforeKeyframePropertyInterpolate: d,
          _afterKeyframePropertyInterpolate: d
        })
      }, function (e, t, n) {
        "use strict";

        function r(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n, e
        }

        function i(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.KeyframeProperty = void 0;
        var o = function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
              }
            }

            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t
            }
          }(),
          a = n(2),
          u = n(0),
          c = n(1),
          s = "linear";
        t.KeyframeProperty = function () {
          function e(t, n, r) {
            var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s;
            i(this, e), this.id = (0, c.uniqueId)("keyframeProperty_"), this.hasFired = null, this.nextProperty = null, Object.assign(this, {
              millisecond: t,
              name: n,
              value: r,
              easing: o
            })
          }

          return o(e, [{
            key: "modifyWith",
            value: function (e) {
              Object.assign(this, e)
            }
          }, {
            key: "getValueAt",
            value: function (e) {
              var t = this.nextProperty;
              if ("boolean" == typeof this.value) return this.value;
              if (t) {
                var n = Math.min(Math.max(e, this.millisecond), t.millisecond),
                  i = this.name,
                  o = t.millisecond - this.millisecond,
                  u = (n - this.millisecond) / o;
                return (0, a.interpolate)(r({}, i, this.value), r({}, i, t.value), u, t.easing)[i]
              }
              return this.value
            }
          }, {
            key: "linkToNext",
            value: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
              this.nextProperty = e
            }
          }, {
            key: "detach",
            value: function () {
              var e = this.actor;
              return e && e.rekapi && ((0, u.fireEvent)(e.rekapi, "removeKeyframeProperty", this), delete e._keyframeProperties[this.id], this.actor = null), this
            }
          }, {
            key: "exportPropertyData",
            value: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.withId,
                n = void 0 !== t && t,
                r = ["millisecond", "name", "value", "easing"];
              return n && r.push("id"), (0, c.pick)(this, r)
            }
          }, {
            key: "shouldInvokeForMillisecond",
            value: function (e) {
              return e >= this.millisecond && "function" === this.name && !this.hasFired
            }
          }, {
            key: "invoke",
            value: function () {
              var e = this.actor.rekapi._loopPosition - this.millisecond,
                t = this.value(this.actor, e);
              return this.hasFired = !0, t
            }
          }]), e
        }()
      }, function (e, t, n) {
        "use strict";
        var r, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        r = function () {
          return this
        }();
        try {
          r = r || Function("return this")() || (0, eval)("this")
        } catch (e) {
          "object" === ("undefined" == typeof window ? "undefined" : i(window)) && (r = window)
        }
        e.exports = r
      }, function (e, t, n) {
        "use strict";

        function r(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.CanvasRenderer = void 0;
        var i = function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
              }
            }

            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t
            }
          }(),
          o = n(0),
          a = (function (e) {
            e && e.__esModule
          }(o), function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
            return void 0 !== n && (e[t] = n, e.style[t] = n + "px"), e[t]
          }),
          u = function () {
            function e(t) {
              var n = this,
                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
              r(this, e), Object.assign(this, {
                rekapi: t,
                canvasContext: i || t.context
              }), t.on("beforeUpdate", function () {
                return n.clear()
              })
            }

            return i(e, [{
              key: "height",
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
                return a(this.canvasContext.canvas, "height", e)
              }
            }, {
              key: "width",
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
                return a(this.canvasContext.canvas, "width", e)
              }
            }, {
              key: "clear",
              value: function () {
                return this.canvasContext.clearRect(0, 0, this.width(), this.height()), this
              }
            }]), e
          }();
        t.CanvasRenderer = u, o.rendererBootstrappers.push(function (e) {
          if ("undefined" != typeof CanvasRenderingContext2D && e.context instanceof CanvasRenderingContext2D) return new u(e)
        })
      }, function (e, t, n) {
        "use strict";

        function r(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n, e
        }

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.DOMRenderer = t.getActorCSS = t.canOptimizeAnyKeyframeProperties = t.generateCSSClass = t.generateCSSAnimationProperties = t.generateAnimationIterationProperty = t.generateAnimationNameProperty = t.generateBoilerplatedKeyframes = t.generateActorKeyframes = t.canOptimizeKeyframeProperty = t.simulateTrailingWait = t.simulateLeadingWait = t.generateActorTrackSegment = t.serializeActorStep = t.combineTransformProperties = t.generateOptimizedKeyframeSegment = t.applyVendorBoilerplates = t.applyVendorPropertyPrefixes = t.VENDOR_TOKEN = t.TRANSFORM_TOKEN = t.transformFunctions = void 0;
        var o = function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
              }
            }

            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t
            }
          }(),
          a = function () {
            function e(e, t) {
              var n = [],
                r = !0,
                i = !1,
                o = void 0;
              try {
                for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) ;
              } catch (e) {
                i = !0, o = e
              } finally {
                try {
                  !r && u.return && u.return()
                } finally {
                  if (i) throw o
                }
              }
              return n
            }

            return function (t, n) {
              if (Array.isArray(t)) return t;
              if (Symbol.iterator in Object(t)) return e(t, n);
              throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
          }(),
          u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          },
          c = n(2),
          s = n(0),
          l = (function (e) {
            e && e.__esModule
          }(s), n(1)),
          f = c.Tweenable.now,
          p = ["transform", "webkitTransform", "MozTransform", "oTransform", "msTransform"],
          h = t.transformFunctions = ["translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "perspective", "rotate", "rotateX", "rotateY", "rotateZ", "skewX", "skewY"],
          d = t.TRANSFORM_TOKEN = "TRANSFORM",
          y = t.VENDOR_TOKEN = "VENDOR",
          v = new RegExp(d, "g"),
          m = new RegExp(y, "g"),
          _ = {
            microsoft: "-ms-",
            mozilla: "-moz-",
            opera: "-o-",
            w3: "",
            webkit: "-webkit-"
          },
          g = {
            linear: ".25,.25,.75,.75",
            easeInQuad: ".55,.085,.68,.53",
            easeInCubic: ".55,.055,.675,.19",
            easeInQuart: ".895,.03,.685,.22",
            easeInQuint: ".755,.05,.855,.06",
            easeInSine: ".47,0,.745,.715",
            easeInExpo: ".95,.05,.795,.035",
            easeInCirc: ".6,.04,.98, .335",
            easeOutQuad: ".25,.46,.45,.94",
            easeOutCubic: ".215,.61,.355,1",
            easeOutQuart: ".165,.84,.44,1",
            easeOutQuint: ".23,1,.32,1",
            easeOutSine: ".39,.575,.565,1",
            easeOutExpo: ".19,1,.22,1",
            easeOutCirc: ".075,.82,.165,1",
            easeInOutQuad: ".455,.03,.515,.955",
            easeInOutCubic: ".645,.045,.355,1",
            easeInOutQuart: ".77,0,.175,1",
            easeInOutQuint: ".86,0.07,1",
            easeInOutSine: ".445,.05,.55,.95",
            easeInOutExpo: "1,0,0,1",
            easeInOutCirc: ".785,.135,.15,.86"
          },
          b = /3d\(/g,
          k = function (e) {
            return e % 1 == 0
          },
          P = function () {
            if ("undefined" != typeof document) {
              var e = document.body.style;
              return "-webkit-animation" in e ? "webkit" : "-moz-animation" in e ? "mozilla" : "-ms-animation" in e ? "microsoft" : "-o-animation" in e ? "opera" : "animation" in e ? "w3" : ""
            }
          }(),
          w = function (e) {
            return "actor-" + e.id
          },
          A = function (e) {
            var t = document.createElement("div");
            e.getAllActors().forEach(function (e) {
              if (1 === e.context.nodeType) {
                var n = e.context,
                  r = n.parentElement;
                r.replaceChild(t, n), r.replaceChild(n, t)
              }
            })
          },
          T = 0,
          O = function (e, t) {
            var n = document.createElement("style"),
              r = "rekapi-" + T++;
            return n.id = r, n.innerHTML = t, document.head.appendChild(n), A(e), n
          },
          j = function (e, t, n) {
            return e.style[t] = n
          },
          S = function (e) {
            return ~h.indexOf(e)
          },
          E = function (e, t) {
            var n = [];
            return e.forEach(function (e) {
              void 0 !== t[e] && n.push(e + "(" + t[e] + ")")
            }), n.join(" ")
          },
          x = function (e, t) {
            return p.forEach(function (n) {
              return j(e, n, t)
            })
          },
          C = function (e, t, n) {
            var r = Object.keys(n),
              i = r.filter(S),
              o = (0, l.pick)(n, (0, l.reject)(r, S));
            i.length ? x(t, E(e._transformOrder, (0, l.pick)(n, i))) : n.transform && x(t, n.transform), (0, l.each)(o, function (e, n) {
              return j(t, n, e)
            })
          },
          K = function (e) {
            var t = e.context,
              n = t.className.match(/\S+/g),
              r = (0, l.without)(n, w(e));
            t.className = r.join(" ")
          },
          M = function (e) {
            if ("transform" === e.name) {
              var t = e.value,
                n = e.nextProperty;
              n && t.match(b) && (e.value = t.replace(b, "__THREED__"), n.value = n.value.replace(b, "__THREED__"))
            }
          },
          I = function (e, t) {
            if ("transform" === e.name) {
              var n = e.value,
                r = e.nextProperty,
                i = e.name;
              r && n.match("__THREED__") && (e.value = n.replace("__THREED__", "3d("), r.value = r.value.replace("__THREED__", "3d("), t[i] = t[i].replace("__THREED__", "3d("))
            }
          },
          F = function (e, t) {
            var n = t.context;
            if (1 === n.nodeType) {
              var r = w(t);
              n.className.match(r) || (n.className += " " + r), Object.assign(t, {
                render: C.bind(t, t),
                teardown: K.bind(t, t),
                _transformOrder: h.slice(0),
                _beforeKeyframePropertyInterpolate: M,
                _afterKeyframePropertyInterpolate: I
              })
            }
          },
          R = t.applyVendorPropertyPrefixes = function (e, t) {
            return e.replace(m, _[t]).replace(v, _[t] + "transform")
          },
          L = t.applyVendorBoilerplates = function (e, t) {
            return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ["w3"]).map(function (n) {
              return R("@" + _[n] + "keyframes " + t + "-keyframes {\n" + e + "\n}", n)
            }).join("\n")
          },
          N = t.generateOptimizedKeyframeSegment = function (e, t, n) {
            var r = "transform" === e.name ? d : e.name,
              i = e.nextProperty,
              o = e.value,
              a = k(t) ? t : t.toFixed(2),
              u = k(n) ? n : n.toFixed(2),
              c = g[i.easing.split(" ")[0]];
            return "  " + a + "% {" + r + ":" + o + ";" + y + "animation-timing-function: cubic-bezier(" + c + ");}\n  " + u + "% {" + r + ":" + i.value + ";}"
          },
          U = t.combineTransformProperties = function (e, t) {
            if (!Object.keys((0, l.pick)(e, h)).length) return e;
            var n = function () {
              var n = (0, l.clone)(e);
              return n[d] = t.reduce(function (e, t) {
                return n.hasOwnProperty(t) && (e += " " + t + "(" + n[t] + ")", delete n[t]), e
              }, "").slice(1), {
                v: n
              }
            }();
            return "object" === (void 0 === n ? "undefined" : u(n)) ? n.v : void 0
          },
          D = t.serializeActorStep = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
              n = U(t ? i({}, t, e.get()[t]) : e.get(), e._transformOrder);
            return "{" + Object.keys(n).reduce(function (e, t) {
              return "" + e + ("transform" === t ? d : t) + ":" + n[t] + ";"
            }, "") + "}"
          },
          z = t.generateActorTrackSegment = function (e, t, n, r, i) {
            for (var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : void 0, a = [], u = e.getLength(), c = 0; c < t; c++) {
              var s = i + c * n;
              e._updateState(s / 100 * u + r, !0);
              var l = D(e, o && o.name);
              a.push("  " + +s.toFixed(2) + "% " + l)
            }
            return a
          },
          V = function (e, t) {
            return z(e, t + 1, 100 / t, 0, 0).join("\n")
          },
          q = t.simulateLeadingWait = function (e, t, n) {
            var r = e._propertyTracks[t][0];
            if (void 0 !== r && r.millisecond !== n) return z(e, 1, 1, r.millisecond, 0, r).join("\n")
          },
          B = t.simulateTrailingWait = function (e, t, n, r) {
            var i = e._propertyTracks[t].slice(-1),
              o = a(i, 1),
              u = o[0];
            if (void 0 !== u && u.millisecond !== r) return z(e, 1, 1, n, 100, u).join("\n")
          },
          W = function (e, t, n) {
            return (e.millisecond - t) / n * 100
          },
          H = function (e, t, n, r, i, o) {
            return z(e, 1, o - i, t, i, n)
          },
          $ = function (e, t) {
            return e.name === t.name && e.value === t.value
          },
          Q = t.canOptimizeKeyframeProperty = function (e) {
            return !!e.nextProperty && (!!$(e, e.nextProperty) || e.nextProperty.easing.split(" ").every(function (e, t, n) {
              return !(!g[e] || t > 0 && n[t - 1] !== e)
            }))
          },
          G = t.generateActorKeyframes = function (e, t, n) {
            var r = [],
              i = e.getEnd(),
              o = e.getStart(),
              a = e.getLength(),
              u = q(e, n, o);
            u && r.push(u);
            var c = !1;
            e._propertyTracks[n].forEach(function (n) {
              var i = W(n, o, a),
                u = n.nextProperty,
                s = void 0,
                l = void 0,
                f = void 0;
              if (u) {
                s = W(u, o, a);
                var p = s - i;
                l = Math.floor(p / 100 * t) || 1, f = p / l
              } else s = 100, l = 1, f = 1;
              var h = void 0;
              u && $(n, u) ? (h = H(e, o, n, 0, i, s), c && h.shift(), c = !1) : Q(n) ? (h = N(n, i, s), c && (r[r.length - 1] = r[r.length - 1].split("\n")[0]), c = !0) : (h = z(e, l, f, o, i, n), c && h.shift(), h.length && (h = h.join("\n")), c = !1), h.length && r.push(h)
            });
            var s = B(e, n, o, i);
            return s && r.push(s), r.join("\n")
          },
          X = t.generateBoilerplatedKeyframes = function (e, t, n, r) {
            var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0;
            return r ? L(V(e, n), t, i) : e.getTrackNames().map(function (r) {
              return L(G(e, n, r), t + "-" + r, i)
            }).join("\n")
          },
          Y = t.generateAnimationNameProperty = function (e, t, n, r) {
            var i = "  " + n + "animation-name:";
            if (r) i += " " + t + "-keyframes;";
            else {
              var o = e.getTrackNames();
              i = ((0, l.intersection)(o, h).length ? (0, l.difference)(o, h).concat("transform") : o).reduce(function (e, n) {
                return e + " " + t + "-" + n + "-keyframes,"
              }, i).replace(/.$/, ";")
            }
            return i
          },
          Z = t.generateAnimationIterationProperty = function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
            return "  " + t + "animation-iteration-count: " + (void 0 !== n ? n : -1 === e._timesToIterate ? "infinite" : e._timesToIterate) + ";"
          },
          J = t.generateCSSAnimationProperties = function (e, t, n, r) {
            var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0,
              o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              a = _[n],
              u = e.getStart(),
              c = e.getEnd(),
              s = [Y(e, t, a, r), "  " + a + "animation-duration: " + (c - u) + "ms;", "  " + a + "animation-delay: " + u + "ms;", "  " + a + "animation-fill-mode: forwards;", "  " + a + "animation-timing-function: linear;", Z(e.rekapi, a, i)];
            return o && s.push("  " + a + "transform-origin: 0 0;"), s.join("\n")
          },
          ee = t.generateCSSClass = function (e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ["w3"],
              i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0,
              o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : void 0;
            return "." + t + " {\n" + r.map(function (r) {
              return J(e, t, r, n, i, o)
            }).join("\n") + "\n}"
          },
          te = t.canOptimizeAnyKeyframeProperties = function (e) {
            return Object.keys(e._keyframeProperties).some(function (t) {
              return Q(e._keyframeProperties[t])
            }) && !(0, l.intersection)(Object.keys(e._propertyTracks), h).length
          },
          ne = t.getActorCSS = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = t.name,
              r = t.vendors,
              i = t.iterations,
              o = t.isCentered,
              a = n ? e.rekapi.getActorCount() > 1 ? n + "-" + e.id : n : w(e),
              u = Math.ceil(e.rekapi.getAnimationLength() / 1e3 * (t.fps || 30)),
              c = !te(e);
            return [ee(e, a, c, r, i, o), X(e, a, u, c, r)].join("\n")
          },
          re = t.DOMRenderer = function () {
            function e(t) {
              var n = this;
              r(this, e), Object.assign(this, {
                rekapi: t,
                _playTimestamp: null,
                _cachedCSS: null,
                _styleElement: null,
                _stopSetTimeoutHandle: null
              }), t.on("timelineModified", function () {
                return n._cachedCSS = null
              }), t.on("addActor", F)
            }

            return o(e, [{
              key: "canAnimateWithCSS",
              value: function () {
                return !!P
              }
            }, {
              key: "play",
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (this.isPlaying() && this.stop(), this._styleElement = O(this.rekapi, this._cachedCSS || this.prerender.apply(this, arguments)), this._playTimestamp = f(), e) {
                  var t = e * this.rekapi.getAnimationLength();
                  this._stopSetTimeoutHandle = setTimeout(this.stop.bind(this, !0), t + 250)
                }
                (0, s.fireEvent)(this.rekapi, "play")
              }
            }, {
              key: "stop",
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
                if (this.isPlaying()) {
                  clearTimeout(this._stopSetTimeoutHandle), this._styleElement.innerHTML = "", document.head.removeChild(this._styleElement), this._styleElement = null;
                  var t = this.rekapi.getAnimationLength();
                  this.rekapi.update(e ? t : (f() - this._playTimestamp) % t), (0, s.fireEvent)(this.rekapi, "stop")
                }
              }
            }, {
              key: "isPlaying",
              value: function () {
                return !!this._styleElement
              }
            }, {
              key: "prerender",
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                return this._cachedCSS = this.getCss({
                  vendors: [P],
                  fps: t,
                  iterations: e
                })
              }
            }, {
              key: "setActorTransformOrder",
              value: function (e, t) {
                var n = (0, l.reject)(t, S);
                if (n.length) throw "Unknown or unsupported transform functions: " + n.join(", ");
                return e._transformOrder = (0, l.uniq)(t), this.rekapi
              }
            }, {
              key: "getCss",
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  t = [];
                return this.rekapi.getAllActors().forEach(function (n) {
                  1 === n.context.nodeType && t.push(ne(n, e))
                }), t.join("\n")
              }
            }]), e
          }();
        s.rendererBootstrappers.push(function (e) {
          return 1 === e.context.nodeType && new re(e)
        })
      }, function (e, t, n) {
        "use strict";
        (function (e, n) {
          function r(e, t) {
            for (var n = -1, r = e ? e.length : 0; ++n < r;)
              if (t(e[n], n, e)) return !0;
            return !1
          }

          function i(e) {
            return function (t) {
              return null == t ? void 0 : t[e]
            }
          }

          function o(e, t) {
            for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
            return r
          }

          function a(e, t) {
            return null == e ? void 0 : e[t]
          }

          function u(e) {
            var t = !1;
            if (null != e && "function" != typeof e.toString) try {
              t = !!(e + "")
            } catch (e) {
            }
            return t
          }

          function c(e) {
            var t = -1,
              n = Array(e.size);
            return e.forEach(function (e, r) {
              n[++t] = [r, e]
            }), n
          }

          function s(e) {
            var t = -1,
              n = Array(e.size);
            return e.forEach(function (e) {
              n[++t] = e
            }), n
          }

          function l(e) {
            var t = -1,
              n = e ? e.length : 0;
            for (this.clear(); ++t < n;) {
              var r = e[t];
              this.set(r[0], r[1])
            }
          }

          function f() {
            this.__data__ = Bt ? Bt(null) : {}
          }

          function p(e) {
            return this.has(e) && delete this.__data__[e]
          }

          function h(e) {
            var t = this.__data__;
            if (Bt) {
              var n = t[e];
              return n === Le ? void 0 : n
            }
            return Et.call(t, e) ? t[e] : void 0
          }

          function d(e) {
            var t = this.__data__;
            return Bt ? void 0 !== t[e] : Et.call(t, e)
          }

          function y(e, t) {
            return this.__data__[e] = Bt && void 0 === t ? Le : t, this
          }

          function v(e) {
            var t = -1,
              n = e ? e.length : 0;
            for (this.clear(); ++t < n;) {
              var r = e[t];
              this.set(r[0], r[1])
            }
          }

          function m() {
            this.__data__ = []
          }

          function _(e) {
            var t = this.__data__,
              n = N(t, e);
            return !(n < 0) && (n == t.length - 1 ? t.pop() : Ft.call(t, n, 1), !0)
          }

          function g(e) {
            var t = this.__data__,
              n = N(t, e);
            return n < 0 ? void 0 : t[n][1]
          }

          function b(e) {
            return N(this.__data__, e) > -1
          }

          function k(e, t) {
            var n = this.__data__,
              r = N(n, e);
            return r < 0 ? n.push([e, t]) : n[r][1] = t, this
          }

          function P(e) {
            var t = -1,
              n = e ? e.length : 0;
            for (this.clear(); ++t < n;) {
              var r = e[t];
              this.set(r[0], r[1])
            }
          }

          function w() {
            this.__data__ = {
              hash: new l,
              map: new (Dt || v),
              string: new l
            }
          }

          function A(e) {
            return ie(this, e).delete(e)
          }

          function T(e) {
            return ie(this, e).get(e)
          }

          function O(e) {
            return ie(this, e).has(e)
          }

          function j(e, t) {
            return ie(this, e).set(e, t), this
          }

          function S(e) {
            var t = -1,
              n = e ? e.length : 0;
            for (this.__data__ = new P; ++t < n;) this.add(e[t])
          }

          function E(e) {
            return this.__data__.set(e, Le), this
          }

          function x(e) {
            return this.__data__.has(e)
          }

          function C(e) {
            this.__data__ = new v(e)
          }

          function K() {
            this.__data__ = new v
          }

          function M(e) {
            return this.__data__.delete(e)
          }

          function I(e) {
            return this.__data__.get(e)
          }

          function F(e) {
            return this.__data__.has(e)
          }

          function R(e, t) {
            var n = this.__data__;
            if (n instanceof v) {
              var r = n.__data__;
              if (!Dt || r.length < Fe - 1) return r.push([e, t]), this;
              n = this.__data__ = new P(r)
            }
            return n.set(e, t), this
          }

          function L(e, t) {
            var n = tn(e) || be(e) ? o(e.length, String) : [],
              r = n.length,
              i = !!r;
            for (var a in e) !t && !Et.call(e, a) || i && ("length" == a || ce(a, r)) || n.push(a);
            return n
          }

          function N(e, t) {
            for (var n = e.length; n--;)
              if (ge(e[n][0], t)) return n;
            return -1
          }

          function U(e, t) {
            t = se(t, e) ? [t] : ee(t);
            for (var n = 0, r = t.length; null != e && n < r;) e = e[ye(t[n++])];
            return n && n == r ? e : void 0
          }

          function D(e) {
            return xt.call(e)
          }

          function z(e, t) {
            return null != e && t in Object(e)
          }

          function V(e, t, n, r, i) {
            return e === t || (null == e || null == t || !Te(e) && !Oe(t) ? e !== e && t !== t : q(e, t, V, n, r, i))
          }

          function q(e, t, n, r, i, o) {
            var a = tn(e),
              c = tn(t),
              s = Be,
              l = Be;
            a || (s = Jt(e), s = s == qe ? Ze : s), c || (l = Jt(t), l = l == qe ? Ze : l);
            var f = s == Ze && !u(e),
              p = l == Ze && !u(t),
              h = s == l;
            if (h && !f) return o || (o = new C), a || nn(e) ? te(e, t, n, r, i, o) : ne(e, t, s, n, r, i, o);
            if (!(i & Ue)) {
              var d = f && Et.call(e, "__wrapped__"),
                y = p && Et.call(t, "__wrapped__");
              if (d || y) {
                var v = d ? e.value() : e,
                  m = y ? t.value() : t;
                return o || (o = new C), n(v, m, r, i, o)
              }
            }
            return !!h && (o || (o = new C), re(e, t, n, r, i, o))
          }

          function B(e, t, n, r) {
            var i = n.length,
              o = i,
              a = !r;
            if (null == e) return !o;
            for (e = Object(e); i--;) {
              var u = n[i];
              if (a && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1
            }
            for (; ++i < o;) {
              u = n[i];
              var c = u[0],
                s = e[c],
                l = u[1];
              if (a && u[2]) {
                if (void 0 === s && !(c in e)) return !1
              } else {
                var f = new C;
                if (r) var p = r(s, l, c, e, t, f);
                if (!(void 0 === p ? V(l, s, r, Ne | Ue, f) : p)) return !1
              }
            }
            return !0
          }

          function W(e) {
            return !(!Te(e) || fe(e)) && (we(e) || u(e) ? Ct : ft).test(ve(e))
          }

          function H(e) {
            return Oe(e) && Ae(e.length) && !!ht[xt.call(e)]
          }

          function $(e) {
            return "function" == typeof e ? e : null == e ? Ke : "object" == (void 0 === e ? "undefined" : Ie(e)) ? tn(e) ? X(e[0], e[1]) : G(e) : Me(e)
          }

          function Q(e) {
            if (!pe(e)) return Lt(e);
            var t = [];
            for (var n in Object(e)) Et.call(e, n) && "constructor" != n && t.push(n);
            return t
          }

          function G(e) {
            var t = oe(e);
            return 1 == t.length && t[0][2] ? de(t[0][0], t[0][1]) : function (n) {
              return n === e || B(n, e, t)
            }
          }

          function X(e, t) {
            return se(e) && he(t) ? de(ye(e), t) : function (n) {
              var r = Ee(n, e);
              return void 0 === r && r === t ? xe(n, e) : V(t, r, void 0, Ne | Ue)
            }
          }

          function Y(e) {
            return function (t) {
              return U(t, e)
            }
          }

          function Z(e, t, n, r) {
            t = n(t);
            for (var i = 0, o = e ? e.length : 0, a = t !== t, u = null === t, c = je(t), s = void 0 === t; i < o;) {
              var l = Rt((i + o) / 2),
                f = n(e[l]),
                p = void 0 !== f,
                h = null === f,
                d = f === f,
                y = je(f);
              if (a) var v = r || d;
              else v = s ? d && (r || p) : u ? d && p && (r || !h) : c ? d && p && !h && (r || !y) : !h && !y && (r ? f <= t : f < t);
              v ? i = l + 1 : o = l
            }
            return Nt(o, Ve)
          }

          function J(e) {
            if ("string" == typeof e) return e;
            if (je(e)) return Zt ? Zt.call(e) : "";
            var t = e + "";
            return "0" == t && 1 / e == -De ? "-0" : t
          }

          function ee(e) {
            return tn(e) ? e : en(e)
          }

          function te(e, t, n, i, o, a) {
            var u = o & Ue,
              c = e.length,
              s = t.length;
            if (c != s && !(u && s > c)) return !1;
            var l = a.get(e);
            if (l && a.get(t)) return l == t;
            var f = -1,
              p = !0,
              h = o & Ne ? new S : void 0;
            for (a.set(e, t), a.set(t, e); ++f < c;) {
              var d = e[f],
                y = t[f];
              if (i) var v = u ? i(y, d, f, t, e, a) : i(d, y, f, e, t, a);
              if (void 0 !== v) {
                if (v) continue;
                p = !1;
                break
              }
              if (h) {
                if (!r(t, function (e, t) {
                  if (!h.has(t) && (d === e || n(d, e, i, o, a))) return h.add(t)
                })) {
                  p = !1;
                  break
                }
              } else if (d !== y && !n(d, y, i, o, a)) {
                p = !1;
                break
              }
            }
            return a.delete(e), a.delete(t), p
          }

          function ne(e, t, n, r, i, o, a) {
            switch (n) {
              case it:
                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                e = e.buffer, t = t.buffer;
              case rt:
                return !(e.byteLength != t.byteLength || !r(new Mt(e), new Mt(t)));
              case We:
              case He:
              case Ye:
                return ge(+e, +t);
              case $e:
                return e.name == t.name && e.message == t.message;
              case Je:
              case tt:
                return e == t + "";
              case Xe:
                var u = c;
              case et:
                var l = o & Ue;
                if (u || (u = s), e.size != t.size && !l) return !1;
                var f = a.get(e);
                if (f) return f == t;
                o |= Ne, a.set(e, t);
                var p = te(u(e), u(t), r, i, o, a);
                return a.delete(e), p;
              case nt:
                if (Yt) return Yt.call(e) == Yt.call(t)
            }
            return !1
          }

          function re(e, t, n, r, i, o) {
            var a = i & Ue,
              u = Ce(e),
              c = u.length;
            if (c != Ce(t).length && !a) return !1;
            for (var s = c; s--;) {
              var l = u[s];
              if (!(a ? l in t : Et.call(t, l))) return !1
            }
            var f = o.get(e);
            if (f && o.get(t)) return f == t;
            var p = !0;
            o.set(e, t), o.set(t, e);
            for (var h = a; ++s < c;) {
              l = u[s];
              var d = e[l],
                y = t[l];
              if (r) var v = a ? r(y, d, l, t, e, o) : r(d, y, l, e, t, o);
              if (!(void 0 === v ? d === y || n(d, y, r, i, o) : v)) {
                p = !1;
                break
              }
              h || (h = "constructor" == l)
            }
            if (p && !h) {
              var m = e.constructor,
                _ = t.constructor;
              m != _ && "constructor" in e && "constructor" in t && !("function" == typeof m && m instanceof m && "function" == typeof _ && _ instanceof _) && (p = !1)
            }
            return o.delete(e), o.delete(t), p
          }

          function ie(e, t) {
            var n = e.__data__;
            return le(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
          }

          function oe(e) {
            for (var t = Ce(e), n = t.length; n--;) {
              var r = t[n],
                i = e[r];
              t[n] = [r, i, he(i)]
            }
            return t
          }

          function ae(e, t) {
            var n = a(e, t);
            return W(n) ? n : void 0
          }

          function ue(e, t, n) {
            t = se(t, e) ? [t] : ee(t);
            for (var r, i = -1, o = t.length; ++i < o;) {
              var a = ye(t[i]);
              if (!(r = null != e && n(e, a))) break;
              e = e[a]
            }
            if (r) return r;
            var o = e ? e.length : 0;
            return !!o && Ae(o) && ce(a, o) && (tn(e) || be(e))
          }

          function ce(e, t) {
            return !!(t = null == t ? ze : t) && ("number" == typeof e || pt.test(e)) && e > -1 && e % 1 == 0 && e < t
          }

          function se(e, t) {
            if (tn(e)) return !1;
            var n = void 0 === e ? "undefined" : Ie(e);
            return !("number" != n && "symbol" != n && "boolean" != n && null != e && !je(e)) || (at.test(e) || !ot.test(e) || null != t && e in Object(t))
          }

          function le(e) {
            var t = void 0 === e ? "undefined" : Ie(e);
            return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
          }

          function fe(e) {
            return !!jt && jt in e
          }

          function pe(e) {
            var t = e && e.constructor;
            return e === ("function" == typeof t && t.prototype || Tt)
          }

          function he(e) {
            return e === e && !Te(e)
          }

          function de(e, t) {
            return function (n) {
              return null != n && (n[e] === t && (void 0 !== t || e in Object(n)))
            }
          }

          function ye(e) {
            if ("string" == typeof e || je(e)) return e;
            var t = e + "";
            return "0" == t && 1 / e == -De ? "-0" : t
          }

          function ve(e) {
            if (null != e) {
              try {
                return St.call(e)
              } catch (e) {
              }
              try {
                return e + ""
              } catch (e) {
              }
            }
            return ""
          }

          function me(e, t, n) {
            return Z(e, t, $(n, 2))
          }

          function _e(e, t) {
            if ("function" != typeof e || t && "function" != typeof t) throw new TypeError(Re);
            var n = function n() {
              var r = arguments,
                i = t ? t.apply(this, r) : r[0],
                o = n.cache;
              if (o.has(i)) return o.get(i);
              var a = e.apply(this, r);
              return n.cache = o.set(i, a), a
            };
            return n.cache = new (_e.Cache || P), n
          }

          function ge(e, t) {
            return e === t || e !== e && t !== t
          }

          function be(e) {
            return Pe(e) && Et.call(e, "callee") && (!It.call(e, "callee") || xt.call(e) == qe)
          }

          function ke(e) {
            return null != e && Ae(e.length) && !we(e)
          }

          function Pe(e) {
            return Oe(e) && ke(e)
          }

          function we(e) {
            var t = Te(e) ? xt.call(e) : "";
            return t == Qe || t == Ge
          }

          function Ae(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= ze
          }

          function Te(e) {
            var t = void 0 === e ? "undefined" : Ie(e);
            return !!e && ("object" == t || "function" == t)
          }

          function Oe(e) {
            return !!e && "object" == (void 0 === e ? "undefined" : Ie(e))
          }

          function je(e) {
            return "symbol" == (void 0 === e ? "undefined" : Ie(e)) || Oe(e) && xt.call(e) == nt
          }

          function Se(e) {
            return null == e ? "" : J(e)
          }

          function Ee(e, t, n) {
            var r = null == e ? void 0 : U(e, t);
            return void 0 === r ? n : r
          }

          function xe(e, t) {
            return null != e && ue(e, t, z)
          }

          function Ce(e) {
            return ke(e) ? L(e) : Q(e)
          }

          function Ke(e) {
            return e
          }

          function Me(e) {
            return se(e) ? i(ye(e)) : Y(e)
          }

          var Ie = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
              return typeof e
            } : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            Fe = 200,
            Re = "Expected a function",
            Le = "__lodash_hash_undefined__",
            Ne = 1,
            Ue = 2,
            De = 1 / 0,
            ze = 9007199254740991,
            Ve = 4294967294,
            qe = "[object Arguments]",
            Be = "[object Array]",
            We = "[object Boolean]",
            He = "[object Date]",
            $e = "[object Error]",
            Qe = "[object Function]",
            Ge = "[object GeneratorFunction]",
            Xe = "[object Map]",
            Ye = "[object Number]",
            Ze = "[object Object]",
            Je = "[object RegExp]",
            et = "[object Set]",
            tt = "[object String]",
            nt = "[object Symbol]",
            rt = "[object ArrayBuffer]",
            it = "[object DataView]",
            ot = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            at = /^\w*$/,
            ut = /^\./,
            ct = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            st = /[\\^$.*+?()[\]{}|]/g,
            lt = /\\(\\)?/g,
            ft = /^\[object .+?Constructor\]$/,
            pt = /^(?:0|[1-9]\d*)$/,
            ht = {};
          ht["[object Float32Array]"] = ht["[object Float64Array]"] = ht["[object Int8Array]"] = ht["[object Int16Array]"] = ht["[object Int32Array]"] = ht["[object Uint8Array]"] = ht["[object Uint8ClampedArray]"] = ht["[object Uint16Array]"] = ht["[object Uint32Array]"] = !0, ht[qe] = ht[Be] = ht[rt] = ht[We] = ht[it] = ht[He] = ht[$e] = ht[Qe] = ht[Xe] = ht[Ye] = ht[Ze] = ht[Je] = ht[et] = ht[tt] = ht["[object WeakMap]"] = !1;
          var dt = "object" == (void 0 === e ? "undefined" : Ie(e)) && e && e.Object === Object && e,
            yt = "object" == ("undefined" == typeof self ? "undefined" : Ie(self)) && self && self.Object === Object && self,
            vt = dt || yt || Function("return this")(),
            mt = "object" == Ie(t) && t && !t.nodeType && t,
            _t = mt && "object" == Ie(n) && n && !n.nodeType && n,
            gt = _t && _t.exports === mt,
            bt = gt && dt.process,
            kt = function () {
              try {
                return bt && bt.binding("util")
              } catch (e) {
              }
            }(),
            Pt = kt && kt.isTypedArray,
            wt = Array.prototype,
            At = Function.prototype,
            Tt = Object.prototype,
            Ot = vt["__core-js_shared__"],
            jt = function () {
              var e = /[^.]+$/.exec(Ot && Ot.keys && Ot.keys.IE_PROTO || "");
              return e ? "Symbol(src)_1." + e : ""
            }(),
            St = At.toString,
            Et = Tt.hasOwnProperty,
            xt = Tt.toString,
            Ct = RegExp("^" + St.call(Et).replace(st, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            Kt = vt.Symbol,
            Mt = vt.Uint8Array,
            It = Tt.propertyIsEnumerable,
            Ft = wt.splice,
            Rt = Math.floor,
            Lt = function (e, t) {
              return function (n) {
                return e(t(n))
              }
            }(Object.keys, Object),
            Nt = Math.min,
            Ut = ae(vt, "DataView"),
            Dt = ae(vt, "Map"),
            zt = ae(vt, "Promise"),
            Vt = ae(vt, "Set"),
            qt = ae(vt, "WeakMap"),
            Bt = ae(Object, "create"),
            Wt = ve(Ut),
            Ht = ve(Dt),
            $t = ve(zt),
            Qt = ve(Vt),
            Gt = ve(qt),
            Xt = Kt ? Kt.prototype : void 0,
            Yt = Xt ? Xt.valueOf : void 0,
            Zt = Xt ? Xt.toString : void 0;
          l.prototype.clear = f, l.prototype.delete = p, l.prototype.get = h, l.prototype.has = d, l.prototype.set = y, v.prototype.clear = m, v.prototype.delete = _, v.prototype.get = g, v.prototype.has = b, v.prototype.set = k, P.prototype.clear = w, P.prototype.delete = A, P.prototype.get = T, P.prototype.has = O, P.prototype.set = j, S.prototype.add = S.prototype.push = E, S.prototype.has = x, C.prototype.clear = K, C.prototype.delete = M, C.prototype.get = I, C.prototype.has = F, C.prototype.set = R;
          var Jt = D;
          (Ut && Jt(new Ut(new ArrayBuffer(1))) != it || Dt && Jt(new Dt) != Xe || zt && "[object Promise]" != Jt(zt.resolve()) || Vt && Jt(new Vt) != et || qt && "[object WeakMap]" != Jt(new qt)) && (Jt = function (e) {
            var t = xt.call(e),
              n = t == Ze ? e.constructor : void 0,
              r = n ? ve(n) : void 0;
            if (r) switch (r) {
              case Wt:
                return it;
              case Ht:
                return Xe;
              case $t:
                return "[object Promise]";
              case Qt:
                return et;
              case Gt:
                return "[object WeakMap]"
            }
            return t
          });
          var en = _e(function (e) {
            e = Se(e);
            var t = [];
            return ut.test(e) && t.push(""), e.replace(ct, function (e, n, r, i) {
              t.push(r ? i.replace(lt, "$1") : n || e)
            }), t
          });
          _e.Cache = P;
          var tn = Array.isArray,
            nn = Pt ? function (e) {
              return function (t) {
                return e(t)
              }
            }(Pt) : H;
          n.exports = me
        }).call(t, n(5), n(9)(e))
      }, function (e, t, n) {
        "use strict";
        e.exports = function (e) {
          return e.webpackPolyfill || (e.deprecate = function () {
          }, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
              return e.l
            }
          }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function () {
              return e.i
            }
          }), e.webpackPolyfill = 1), e
        }
      }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
          value: !0
        });
        var r = n(0);
        Object.defineProperty(t, "Rekapi", {
          enumerable: !0,
          get: function () {
            return r.Rekapi
          }
        });
        var i = n(3);
        Object.defineProperty(t, "Actor", {
          enumerable: !0,
          get: function () {
            return i.Actor
          }
        });
        var o = n(4);
        Object.defineProperty(t, "KeyframeProperty", {
          enumerable: !0,
          get: function () {
            return o.KeyframeProperty
          }
        });
        var a = n(6);
        Object.defineProperty(t, "CanvasRenderer", {
          enumerable: !0,
          get: function () {
            return a.CanvasRenderer
          }
        });
        var u = n(7);
        Object.defineProperty(t, "DOMRenderer", {
          enumerable: !0,
          get: function () {
            return u.DOMRenderer
          }
        })
      }])
    })
  }, function (module, exports, __webpack_require__) {
    "use strict";
    var __assign = this && this.__assign || Object.assign || function (t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
      }
      return t
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var rekapi_1 = __webpack_require__(12);
    var shifty_1 = __webpack_require__(7);
    var Timeline = function () {
      function Timeline(context) {
        this.slides = [];
        this.slide_objects = [];
        this.slides_bounds = [];
        this.context = context;
        this.rekapi = new rekapi_1.Rekapi(this.context);
        this._setBezierFunction()
      }

      Timeline.prototype._setBezierFunction = function () {
        shifty_1.setBezierFunction("ease", .25, .1, .25, 1);
        shifty_1.setBezierFunction("ease-in", .42, 0, 1, 1);
        shifty_1.setBezierFunction("ease-out", 0, 0, .58, 1);
        shifty_1.setBezierFunction("ease-in-out", .42, 0, .58, 1);
        shifty_1.setBezierFunction("easeInQuad", .55, .085, .68, .53);
        shifty_1.setBezierFunction("easeInCubic", .55, .055, .675, .19);
        shifty_1.setBezierFunction("easeInQuart", .895, .03, .685, .22);
        shifty_1.setBezierFunction("easeInQuint", .755, .05, .855, .06);
        shifty_1.setBezierFunction("easeInSine", .47, 0, .745, .715);
        shifty_1.setBezierFunction("easeInExpo", .95, .05, .795, .035);
        shifty_1.setBezierFunction("easeInCirc", .6, .04, .98, .335);
        shifty_1.setBezierFunction("easeInBack", .6, -.28, .735, .045);
        shifty_1.setBezierFunction("easeOutQuad", .25, .46, .45, .94);
        shifty_1.setBezierFunction("easeOutCubic", .215, .61, .355, 1);
        shifty_1.setBezierFunction("easeOutQuart", .165, .84, .44, 1);
        shifty_1.setBezierFunction("easeOutQuint", .23, 1, .32, 1);
        shifty_1.setBezierFunction("easeOutSine", .39, .575, .565, 1);
        shifty_1.setBezierFunction("easeOutExpo", .19, 1, .22, 1);
        shifty_1.setBezierFunction("easeOutCirc", .075, .82, .165, 1);
        shifty_1.setBezierFunction("easeOutBack", .175, .885, .32, 1.275);
        shifty_1.setBezierFunction("easeInOutQuad", .455, .03, .515, .955);
        shifty_1.setBezierFunction("easeInOutCubic", .645, .045, .355, 1);
        shifty_1.setBezierFunction("easeInOutQuart", .77, 0, .175, 1);
        shifty_1.setBezierFunction("easeInOutQuint", .86, 0, .07, 1);
        shifty_1.setBezierFunction("easeInOutSine", .445, .05, .55, .95);
        shifty_1.setBezierFunction("easeInOutExpo", 1, 0, 0, 1);
        shifty_1.setBezierFunction("easeInOutCirc", .785, .135, .15, .86);
        shifty_1.setBezierFunction("easeInOutBack", .68, -.55, .265, 1.55)
      };
      Timeline.prototype.addSlide = function (slide) {
        this.slides.push(slide);
        this.updateTimeline()
      };
      Timeline.prototype.setSlides = function (slides) {
        this.slides = slides;
        this.updateTimeline()
      };
      Timeline.prototype.updateTimeline = function () {
        this.slides_bounds = [];
        var slides_position = 0;
        var slide_transition_start = {
          from: {},
          to: {}
        };
        for (var _i = 0, _a = this.slides; _i < _a.length; _i++) {
          var slide = _a[_i];
          var transition_duration = this._getTransitionDuration(slide);
          var slide_transition = slide.getTransition();
          if (slide.data.duration) {
            this._slideAnimation(slide, slides_position, slide_transition_start, slide_transition.current, transition_duration);
            this.slides_bounds.push([slides_position, slides_position + slide.data.duration])
          }
          for (var _b = 0, _c = slide.slide_objects; _b < _c.length; _b++) {
            var slide_object = _c[_b];
            this._slideObjectAnimation(slide, slide_object, slide.data.duration ? slides_position : 0)
          }
          slide_transition_start = slide_transition.next;
          if (slide_transition.overlay) slides_position += slide.data.duration - transition_duration;
          else slides_position += slide.data.duration
        }
      };
      Timeline.prototype._slideAnimation = function (slide, start_position, slide_transition_start, slide_transition_end, transition_duration) {
        var actor = this.rekapi.addActor({
          context: slide.$root,
          render: slide.renderAnimationFunction()
        });
        var animation_states = slide.getAnimationStates();
        for (var animation_state in animation_states) {
          var percent = slide.data.duration / 100;
          var position = start_position + percent * parseInt(animation_state);
          if (parseInt(animation_state) == 0) {
            actor.keyframe(position + this._ns(slide.index, 1), __assign({
              display: 0
            }, slide_transition_start.from));
            actor.keyframe(position + transition_duration, __assign({
              display: 1
            }, slide_transition_start.to))
          }
          actor.keyframe(position + this._ns(slide.index, 2), __assign({}, animation_states[animation_state], {
            display: 1
          }));
          if (parseInt(animation_state) == 100) {
            actor.keyframe(position - transition_duration + this._ns(slide.index, 3), __assign({
              display: 1
            }, slide_transition_end.from));
            actor.keyframe(position + this._ns(slide.index, 4), __assign({
              display: 0
            }, slide_transition_end.to))
          }
        }
      };
      Timeline.prototype._slideObjectAnimation = function (slide, slide_object, start_position) {
        var actor = this.rekapi.addActor({
          context: slide_object.$root,
          render: slide_object.renderAnimationFunction()
        });
        if (slide.data.type == "shared") {
          var overflow = slide_object.data.start + slide_object.duration - this.rekapi.getAnimationLength();
          if (overflow > 0) {
            if (slide_object.duration > overflow) {
              slide_object.duration = slide_object.duration - overflow
            } else {
              return
            }
          }
        }
        var actor_ongoing = this.rekapi.addActor({
          context: slide_object.ongoingAnimationLayerDOM,
          render: slide_object.renderOngoingAnimationFunction()
        });
        var animation_states = slide_object.getAnimationStates();
        var ongoing_animation_states = slide_object.getOngoingAnimationStates();
        var num = 0;
        for (var p in animation_states) {
          num++;
          var percent = slide_object.duration / 100;
          var position = start_position + slide_object.data.start + percent * Math.round(parseFloat(p));
          var ns_base = slide.index + "" + slide_object.index + "" + num;
          if (parseInt(p) == 0) {
            actor.keyframe(position + this._ns(ns_base, 1), {
              display: 0
            });
            actor.keyframe(position + this._ns(ns_base, 2), {
              display: 1
            }, animation_states[p]["easing"])
          }
          actor.keyframe(position + this._ns(ns_base, 3), __assign({}, animation_states[p]["state"], {
            display: 1
          }), animation_states[p]["easing"]);
          if (parseInt(p) == 100) {
            actor.keyframe(position - this._ns(ns_base, 4), {
              display: 1
            }, animation_states[p]["easing"]);
            actor.keyframe(position + this._ns(ns_base, 5), {
              display: 0
            })
          }
        }
        num = 0;
        for (var p in ongoing_animation_states) {
          num++;
          var percent = slide_object.duration / 100;
          var position = start_position + slide_object.data.start + percent * parseInt(p);
          var ns_base = "1" + slide.index + "" + slide_object.index + "" + num;
          if (parseInt(p) == 0) {
            actor_ongoing.keyframe(position + this._ns(ns_base, 1), {
              display: 0
            });
            actor_ongoing.keyframe(position + this._ns(ns_base, 2), {
              display: 1
            }, ongoing_animation_states[p]["easing"])
          }
          actor_ongoing.keyframe(position + this._ns(ns_base, 3), ongoing_animation_states[p]["state"], ongoing_animation_states[p]["easing"]);
          if (parseInt(p) == 100) {
            actor_ongoing.keyframe(position - this._ns(ns_base, 4), {
              display: 1
            }, ongoing_animation_states[p]["easing"]);
            actor_ongoing.keyframe(position + this._ns(ns_base, 5), {
              display: 0
            })
          }
        }
      };
      Timeline.prototype._ns = function (index, uniqid) {
        return parseInt(index + "" + uniqid) / 1e5
      };
      Timeline.prototype._getTransitionDuration = function (slide) {
        if (slide.data.duration >= 1e3) {
          return 700
        } else {
          return slide.data.duration / 2
        }
      };
      return Timeline
    }();
    exports.Timeline = Timeline
  }, function (module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Sound = function () {
      function Sound(player, sound) {
        var self = this;
        this.player = player;
        this.audio = new Audio(sound.url);
        self.audio.currentTime = this.player.getPosition() / 1e3;
        this.promise = new Promise(function (resolve, reject) {
          self.audio.addEventListener("canplaythrough", function () {
            resolve(self)
          }, false)
        });
        this.play_state_change_handler = function (player) {
          if (player.isPlaying()) {
            self.audio.play()
          } else {
            self.audio.pause()
          }
        };
        this.position_update_handler = function (player, position) {
          if (!player.isPlaying()) {
            self.audio.currentTime = player.getPosition() / 1e3
          }
        };
        this.animation_loop_handler = function (player) {
          self.audio.currentTime = 0
        };
        this.volume_update_handler = function (player, volume) {
          self.audio.volume = volume
        };
        this.player.on("playStateChange", this.play_state_change_handler);
        this.player.on("positionUpdate", this.position_update_handler);
        this.player.on("animationLooped", this.animation_loop_handler);
        this.player.on("volumeUpdate", this.volume_update_handler);
        return this
      }

      Sound.prototype.destroy = function () {
        this.player.off("playStateChange", this.play_state_change_handler);
        this.player.off("positionUpdate", this.position_update_handler);
        this.player.off("animationLooped", this.animation_loop_handler);
        this.player.off("volumeUpdate", this.volume_update_handler);
        this.audio.pause()
      };
      return Sound
    }();
    exports.Sound = Sound
  }, function (module, exports, __webpack_require__) {
    "use strict";
    var __extends = this && this.__extends || function () {
      var extendStatics = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function (d, b) {
          d.__proto__ = b
        } || function (d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p)) d[p] = b[p]
        };
      return function (d, b) {
        extendStatics(d, b);

        function __() {
          this.constructor = d
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __)
      }
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Slide_1 = __webpack_require__(3);
    var SlideShared = function (_super) {
      __extends(SlideShared, _super);

      function SlideShared(player, index) {
        var _this = _super.call(this, player, index) || this;
        _this.init();
        return _this
      }

      SlideShared.prototype.init = function () {
        this._rootInit();
        this._renderInnerDOM();
        this.promises.push(this.load())
      };
      SlideShared.prototype._renderInnerDOM = function () {
        this._styleInnerDOM()
      };
      SlideShared.prototype._styleInnerDOM = function () {
        this.$root.css({
          "z-index": 101
        })
      };
      SlideShared.prototype.load = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
          resolve(self)
        })
      };
      SlideShared.prototype.renderAnimationFunction = function () {
        var self = this;
        return function (context, state) {
          self.rootRenderAnimationFunction()(context, state)
        }
      };
      SlideShared.prototype.getAnimationStates = function () {
        return {
          0: {},
          100: {}
        }
      };
      return SlideShared
    }(Slide_1.Slide);
    exports.SlideShared = SlideShared
  }, function (module, exports, __webpack_require__) {
    "use strict";
    var __extends = this && this.__extends || function () {
      var extendStatics = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function (d, b) {
          d.__proto__ = b
        } || function (d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p)) d[p] = b[p]
        };
      return function (d, b) {
        extendStatics(d, b);

        function __() {
          this.constructor = d
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __)
      }
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var $ = __webpack_require__(0);
    var Slide_1 = __webpack_require__(3);
    var SlideColor = function (_super) {
      __extends(SlideColor, _super);

      function SlideColor(player, index) {
        var _this = _super.call(this, player, index) || this;
        _this.init();
        return _this
      }

      SlideColor.prototype.init = function () {
        this._rootInit();
        this._renderInnerDOM();
        this.promises.push(this.load())
      };
      SlideColor.prototype._renderInnerDOM = function () {
        if (this.$inner) this.$inner.remove();
        this.$inner = $('<div class="' + this.player.options.class_prefix + "slide-background " + this.player.options.class_prefix + 'slide-background-color"></div>').appendTo(this.$root);
        this._styleInnerDOM()
      };
      SlideColor.prototype._styleInnerDOM = function () {
        this.$inner.css({
          width: "100%",
          height: "100%",
          background: this.data.color
        })
      };
      SlideColor.prototype.load = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
          resolve(self)
        })
      };
      SlideColor.prototype.renderAnimationFunction = function () {
        var self = this;
        return function (context, state) {
          self.rootRenderAnimationFunction()(context, state)
        }
      };
      SlideColor.prototype.getAnimationStates = function () {
        return {
          0: {},
          100: {}
        }
      };
      return SlideColor
    }(Slide_1.Slide);
    exports.SlideColor = SlideColor
  }, function (module, exports, __webpack_require__) {
    "use strict";
    var __extends = this && this.__extends || function () {
      var extendStatics = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function (d, b) {
          d.__proto__ = b
        } || function (d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p)) d[p] = b[p]
        };
      return function (d, b) {
        extendStatics(d, b);

        function __() {
          this.constructor = d
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __)
      }
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var $ = __webpack_require__(0);
    var Slide_1 = __webpack_require__(3);
    var SlideVideo = function (_super) {
      __extends(SlideVideo, _super);

      function SlideVideo(player, index) {
        var _this = _super.call(this, player, index) || this;
        _this.init();
        return _this
      }

      SlideVideo.prototype.init = function () {
        var self = this;
        this._rootInit();
        this._renderInnerDOM();
        this.promise = this.load();
        this.promises.push(this.promise);
        this.promise.then(function () {
          self._ready()
        })
      };
      SlideVideo.prototype._renderInnerDOM = function () {
        var video_path = this.data[this.player.options.background_video_path_namespace + "path"];
        if (this.$inner) this.$inner.remove();
        this.$inner = $('<div class="' + this.player.options.class_prefix + "slide-background " + this.player.options.class_prefix + 'slide-background-video"></div>').appendTo(this.$root);
        if (this.player.options.video_backgrounds) this.videoDOM = $('<video preload="auto" src="' + video_path + '"></video>').appendTo(this.$inner);
        this._styleInnerDOM()
      };
      SlideVideo.prototype._styleInnerDOM = function () {
        this.$inner.css({
          width: "100%",
          height: "100%"
        });
        this.$inner.find("video").css({
          "max-width": "100%",
          "max-height": "100%",
          "min-width": "100%",
          "min-height": "100%"
        })
      };
      SlideVideo.prototype._ready = function () {
        var self = this;
        this.player.on("playStateChange", function (data) {
          if (!data.isPlaying()) {
            if (self.videoDOM) self.videoDOM[0].pause()
          }
        });
        this.player.on("volumeUpdate", function (player, volume) {
          if (self.videoDOM) self.videoDOM[0].volume = volume
        })
      };
      SlideVideo.prototype.load = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
          if (!self.videoDOM) return resolve(self);
          self.videoDOM[0].addEventListener("loadeddata", function () {
            resolve(self.videoDOM.attr("src"))
          }, false)
        })
      };
      SlideVideo.prototype.renderAnimationFunction = function () {
        var self = this;
        return function (context, state) {
          if (!self.player.isPlaying() && state.display) {
            if (self.videoDOM) self.videoDOM[0].currentTime = state.video_time / 1e3
          }
          if (self.player.isPlaying() && state.display && self.videoDOM[0].paused) {
            if (self.videoDOM) self.videoDOM[0].currentTime = state.video_time / 1e3;
            if (self.videoDOM) self.videoDOM[0].play()
          }
          self.rootRenderAnimationFunction()(context, state)
        }
      };
      SlideVideo.prototype.getAnimationStates = function () {
        return {
          0: {
            video_time: 0
          },
          100: {
            video_time: this.data.duration
          }
        }
      };
      return SlideVideo
    }(Slide_1.Slide);
    exports.SlideVideo = SlideVideo
  }, function (module, exports, __webpack_require__) {
    "use strict";
    var __extends = this && this.__extends || function () {
      var extendStatics = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function (d, b) {
          d.__proto__ = b
        } || function (d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p)) d[p] = b[p]
        };
      return function (d, b) {
        extendStatics(d, b);

        function __() {
          this.constructor = d
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __)
      }
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var $ = __webpack_require__(0);
    var SlideObject_1 = __webpack_require__(2);
    var SlideObjectImage = function (_super) {
      __extends(SlideObjectImage, _super);

      function SlideObjectImage(slide, player, index) {
        var _this = _super.call(this, slide, player, index) || this;
        _this.init();
        return _this
      }

      SlideObjectImage.prototype.init = function () {
        this._rootInit();
        this._renderInnerDOM();
        this.promise = this.load()
      };
      SlideObjectImage.prototype._renderInnerDOM = function () {
        if (this.$inner) this.$inner.remove();
        this.$inner = $('<div class="' + this.player.options.class_prefix + 'slide-object-image"></div>').appendTo(this.deepestNode);
        this.image = $('<img src="' + this.data.path + '">').appendTo(this.$inner);
        this._styleInnerDOM()
      };
      SlideObjectImage.prototype._styleInnerDOM = function () {
        this.$inner.css({
          height: "100%",
          width: "100%"
        });
        this.$inner.find("img").css({
          "max-height": "100%",
          "max-width": "100%",
          "min-width": "100%",
          "min-height": "100%",
          "pointer-events": "100%"
        });
        if (this.entrance_animation.applyStyles) {
          this.entrance_animation.applyStyles(this)
        }
      };
      SlideObjectImage.prototype.load = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
          var img = new Image;
          img.onload = function () {
            resolve(self)
          };
          img.onerror = function () {
            reject(img.src)
          };
          img.src = self.data.path
        })
      };
      SlideObjectImage.prototype.renderAnimationFunction = function () {
        var self = this;
        return function (context, state) {
          if (state.display == 1 && self.entrance_animation.applyEffectExtra) {
            self.entrance_animation.applyEffectExtra(state, self)
          }
          self.rootRenderAnimationFunction()(context, state)
        }
      };
      SlideObjectImage.prototype.renderOngoingAnimationFunction = function () {
        var self = this;
        return function (context, state) {
          self.rootRenderOngoingAnimationFunction()(context, state)
        }
      };
      return SlideObjectImage
    }(SlideObject_1.SlideObject);
    exports.SlideObjectImage = SlideObjectImage
  }, function (module, exports, __webpack_require__) {
    "use strict";
    var __extends = this && this.__extends || function () {
      var extendStatics = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function (d, b) {
          d.__proto__ = b
        } || function (d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p)) d[p] = b[p]
        };
      return function (d, b) {
        extendStatics(d, b);

        function __() {
          this.constructor = d
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __)
      }
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var $ = __webpack_require__(0);
    var SlideObject_1 = __webpack_require__(2);
    var SlideObjectRect = function (_super) {
      __extends(SlideObjectRect, _super);

      function SlideObjectRect(slide, player, index) {
        var _this = _super.call(this, slide, player, index) || this;
        _this.init();
        return _this
      }

      SlideObjectRect.prototype.init = function () {
        this._rootInit();
        this._renderInnerDOM();
        this.promise = this.load()
      };
      SlideObjectRect.prototype._renderInnerDOM = function () {
        if (this.$inner) this.$inner.remove();
        this.$inner = $('<div class="' + this.player.options.class_prefix + 'slide-object-rect"></div>').appendTo(this.deepestNode);
        this._styleInnerDOM()
      };
      SlideObjectRect.prototype._styleInnerDOM = function () {
        this.$inner.css({});
        if (this.entrance_animation.applyStyles) {
          this.entrance_animation.applyStyles(this)
        }
      };
      SlideObjectRect.prototype.load = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
          resolve(self)
        })
      };
      SlideObjectRect.prototype.renderAnimationFunction = function (context, state) {
        var self = this;
        return function (context, state) {
          if (state.display == 1 && self.entrance_animation.applyEffectExtra) {
            self.entrance_animation.applyEffectExtra(state, self)
          }
          self.rootRenderAnimationFunction()(context, state)
        }
      };
      SlideObjectRect.prototype.renderOngoingAnimationFunction = function (context, state) {
        var self = this;
        return function (context, state) {
          self.rootRenderOngoingAnimationFunction()(context, state)
        }
      };
      return SlideObjectRect
    }(SlideObject_1.SlideObject);
    exports.SlideObjectRect = SlideObjectRect
  }, function (module, exports, __webpack_require__) {
    "use strict";
    var __extends = this && this.__extends || function () {
      var extendStatics = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function (d, b) {
          d.__proto__ = b
        } || function (d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p)) d[p] = b[p]
        };
      return function (d, b) {
        extendStatics(d, b);

        function __() {
          this.constructor = d
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __)
      }
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var $ = __webpack_require__(0);
    var SlideObject_1 = __webpack_require__(2);
    var SlideObjectIcon = function (_super) {
      __extends(SlideObjectIcon, _super);

      function SlideObjectIcon(slide, player, index) {
        var _this = _super.call(this, slide, player, index) || this;
        _this.init();
        return _this
      }

      SlideObjectIcon.prototype.init = function () {
        this._rootInit();
        this._renderInnerDOM();
        this.promise = this.load()
      };
      SlideObjectIcon.prototype._renderInnerDOM = function () {
        if (this.$inner) this.$inner.remove();
        this.$inner = $('<div class="' + this.player.options.class_prefix + 'slide-object-icon"></div>').appendTo(this.deepestNode);
        this.svg = $(this.data.svg).appendTo(this.$inner);
        this._styleInnerDOM()
      };
      SlideObjectIcon.prototype._styleInnerDOM = function () {
        this.$inner.css({
          height: "100%"
        });
        this.$inner.find("svg").css({
          fill: this.data.style.fill || "#000000",
          stroke: this.data.style.stroke || "none",
          height: "100%",
          "max-height": "100%",
          "max-width": "100%",
          "min-width": "100%",
          "min-height": "100%"
        });
        if (this.entrance_animation.applyStyles) {
          this.entrance_animation.applyStyles(this)
        }
      };
      SlideObjectIcon.prototype.load = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
          resolve(self)
        })
      };
      SlideObjectIcon.prototype.renderAnimationFunction = function (context, state) {
        var self = this;
        return function (context, state) {
          if (state.display == 1 && self.entrance_animation.applyEffectExtra) {
            self.entrance_animation.applyEffectExtra(state, self)
          }
          self.rootRenderAnimationFunction()(context, state)
        }
      };
      SlideObjectIcon.prototype.renderOngoingAnimationFunction = function (context, state) {
        var self = this;
        return function (context, state) {
          self.rootRenderOngoingAnimationFunction()(context, state)
        }
      };
      return SlideObjectIcon
    }(SlideObject_1.SlideObject);
    exports.SlideObjectIcon = SlideObjectIcon
  }, function (module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SlideObjectEffects = function () {
      function SlideObjectEffects() {
      }

      SlideObjectEffects.visibleElements = function (length, percent) {
        var visible_length = length / 100 * percent;
        var visible_full = Math.floor(length / 100 * percent);
        var visible_part = visible_length - visible_full;
        return {
          full: visible_full,
          part: visible_part
        }
      };
      SlideObjectEffects.get = function (name) {
        var self = this;
        var effects = {
          none: {
            duration: 0,
            easing: "linear",
            animation: {
              0: {},
              100: {}
            }
          },
          speedInLeft: {
            duration: 555,
            easing: "easeOutCubic",
            animation: {
              0: {
                opacity: 0,
                translate3d_x: -700
              },
              20: {
                opacity: 1
              },
              100: {
                translate3d_x: 0
              }
            }
          },
          speedInRight: {
            duration: 555,
            easing: "easeOutCubic",
            animation: {
              0: {
                opacity: 0,
                translate3d_x: 700
              },
              20: {
                opacity: 1
              },
              100: {
                translate3d_x: 0
              }
            }
          },
          speedInUp: {
            duration: 555,
            easing: "easeOutCubic",
            animation: {
              0: {
                opacity: 0,
                translate3d_y: -700
              },
              20: {
                opacity: 1
              },
              100: {
                translate3d_y: 0
              }
            }
          },
          speedInDown: {
            duration: 555,
            easing: "easeOutCubic",
            animation: {
              0: {
                opacity: 0,
                translate3d_y: 700
              },
              20: {
                opacity: 1
              },
              100: {
                translate3d_y: 0
              }
            }
          },
          speedOutLeft: {
            duration: 555,
            easing: "easeInCubic",
            animation: {
              0: {
                opacity: 1,
                translate3d_x: 0
              },
              40: {
                opacity: 1
              },
              100: {
                translate3d_x: -700,
                opacity: 0
              }
            }
          },
          speedOutRight: {
            duration: 555,
            easing: "easeInCubic",
            animation: {
              0: {
                opacity: 1,
                translate3d_x: 0
              },
              40: {
                opacity: 1
              },
              100: {
                translate3d_x: 700,
                opacity: 0
              }
            }
          },
          speedOutUp: {
            duration: 555,
            easing: "easeInCubic",
            animation: {
              0: {
                opacity: 1,
                translate3d_y: 0
              },
              40: {
                opacity: 1
              },
              100: {
                translate3d_y: -700,
                opacity: 0
              }
            }
          },
          speedOutDown: {
            duration: 555,
            easing: "easeInCubic",
            animation: {
              0: {
                opacity: 1,
                translate3d_y: 0
              },
              40: {
                opacity: 1
              },
              100: {
                translate3d_y: 700,
                opacity: 0
              }
            }
          },
          fadeIn: {
            duration: 505,
            easing: "linear",
            animation: {
              0: {
                opacity: 0
              },
              100: {
                opacity: 1
              }
            }
          },
          fadeInUp: {
            duration: 505,
            easing: "linear",
            animation: {
              0: {
                opacity: 0,
                translate3d_y: -50
              },
              100: {
                opacity: 1,
                translate3d_y: 0
              }
            }
          },
          fadeInLeft: {
            duration: 505,
            easing: "linear",
            animation: {
              0: {
                opacity: 0,
                translate3d_x: -50
              },
              100: {
                opacity: 1,
                translate3d_x: 0
              }
            }
          },
          fadeInRight: {
            duration: 505,
            easing: "linear",
            animation: {
              0: {
                opacity: 0,
                translate3d_x: 50
              },
              100: {
                opacity: 1,
                translate3d_x: 0
              }
            }
          },
          fadeInDown: {
            duration: 505,
            easing: "linear",
            animation: {
              0: {
                opacity: 0,
                translate3d_y: 50
              },
              100: {
                opacity: 1,
                translate3d_y: 0
              }
            }
          },
          fadeOut: {
            duration: 506,
            easing: "linear",
            animation: {
              0: {
                opacity: 1
              },
              100: {
                opacity: 0
              }
            }
          },
          fadeOutDown: {
            duration: 506,
            easing: "linear",
            animation: {
              0: {
                opacity: 1,
                translate3d_y: 0
              },
              100: {
                opacity: 0,
                translate3d_y: 50
              }
            }
          },
          fadeOutLeft: {
            duration: 506,
            easing: "linear",
            animation: {
              0: {
                opacity: 1,
                translate3d_x: 0
              },
              100: {
                opacity: 0,
                translate3d_x: -50
              }
            }
          },
          fadeOutRight: {
            duration: 506,
            easing: "linear",
            animation: {
              0: {
                opacity: 1,
                translate3d_x: 0
              },
              100: {
                opacity: 0,
                translate3d_x: 50
              }
            }
          },
          fadeOutUp: {
            duration: 506,
            easing: "linear",
            animation: {
              0: {
                opacity: 1,
                translate3d_y: 0
              },
              100: {
                opacity: 0,
                translate3d_y: -50
              }
            }
          },
          blurFilterIn: {
            duration: 505,
            easing: "linear",
            animation: {
              0: {
                blur: 100
              },
              100: {
                blur: 0
              }
            }
          },
          blurOut: {
            duration: 405,
            easing: "linear",
            animation: {
              0: {
                blur: 0
              },
              100: {
                blur: 100
              }
            }
          },
          bounceIn: {
            duration: 705,
            easing: "easeOutCubic",
            animation: {
              0: {
                scale3d_x: "0",
                scale3d_y: "0",
                scale3d_z: "0"
              },
              20: {
                scale3d_x: "1.1",
                scale3d_y: "1.1",
                scale3d_z: "1.1"
              },
              40: {
                scale3d_x: "0.9",
                scale3d_y: "0.9",
                scale3d_z: "0.9"
              },
              60: {
                scale3d_x: "1.03",
                scale3d_y: "1.03",
                scale3d_z: "1.03"
              },
              80: {
                scale3d_x: "0.97",
                scale3d_y: "0.97",
                scale3d_z: "0.97"
              },
              100: {
                scale3d_x: "1",
                scale3d_y: "1",
                scale3d_z: "1"
              }
            }
          },
          bounceInDown: {
            duration: 705,
            easing: "easeOutCubic",
            animation: {
              0: {
                translate3d_y: 3e3
              },
              60: {
                translate3d_y: -25
              },
              75: {
                translate3d_y: 10
              },
              90: {
                translate3d_y: -5
              },
              100: {
                translate3d_y: 0
              }
            }
          },
          bounceInLeft: {
            duration: 705,
            easing: "easeOutCubic",
            animation: {
              0: {
                translate3d_x: -3e3
              },
              60: {
                translate3d_x: 25
              },
              75: {
                translate3d_x: -10
              },
              90: {
                translate3d_x: 5
              },
              100: {
                translate3d_x: 0
              }
            }
          },
          bounceInRight: {
            duration: 705,
            easing: "easeOutCubic",
            animation: {
              0: {
                translate3d_x: 3e3
              },
              60: {
                translate3d_x: -25
              },
              75: {
                translate3d_x: 10
              },
              90: {
                translate3d_x: -5
              },
              100: {
                translate3d_x: 0
              }
            }
          },
          bounceInUp: {
            duration: 705,
            easing: "easeOutCubic",
            animation: {
              0: {
                translate3d_y: -3e3
              },
              60: {
                translate3d_y: -25
              },
              75: {
                translate3d_y: 10
              },
              90: {
                translate3d_y: -5
              },
              100: {
                translate3d_y: 0
              }
            }
          },
          bounceOut: {
            duration: 706,
            easing: "easeInCubic",
            animation: {
              0: {
                scale3d_x: "1",
                scale3d_y: "1",
                scale3d_z: "1",
                opacity: 1
              },
              20: {
                scale3d_x: "1.1",
                scale3d_y: "1.1",
                scale3d_z: "1.1"
              },
              40: {
                scale3d_x: "1.1",
                scale3d_y: "1.1",
                scale3d_z: "1.1"
              },
              100: {
                scale3d_x: ".3",
                scale3d_y: ".3",
                scale3d_z: ".3",
                opacity: 0
              }
            }
          },
          bounceOutDown: {
            duration: 706,
            easing: "easeInCubic",
            animation: {
              0: {
                translate3d_y: 0
              },
              20: {
                translate3d_y: 10
              },
              40: {
                translate3d_y: -20,
                opacity: 1
              },
              45: {
                translate3d_y: -20,
                opacity: 1
              },
              100: {
                translate3d_y: 2e3,
                opacity: 0
              }
            }
          },
          bounceOutUp: {
            duration: 706,
            easing: "easeInCubic",
            animation: {
              0: {
                translate3d_y: 0
              },
              20: {
                translate3d_y: -10
              },
              40: {
                translate3d_y: 20,
                opacity: 1
              },
              45: {
                translate3d_y: 20,
                opacity: 1
              },
              100: {
                translate3d_y: -2e3,
                opacity: 0
              }
            }
          },
          bounceOutLeft: {
            duration: 706,
            easing: "easeInCubic",
            animation: {
              0: {
                translate3d_x: 0
              },
              30: {
                translate3d_x: 20,
                opacity: 1
              },
              100: {
                translate3d_x: -2e3,
                opacity: 0
              }
            }
          },
          bounceOutRight: {
            duration: 706,
            easing: "easeInCubic",
            animation: {
              0: {
                translate3d_x: 0
              },
              20: {
                translate3d_x: -20,
                opacity: 1
              },
              100: {
                translate3d_x: 2e3,
                opacity: 0
              }
            }
          },
          slideLeftIn: {
            duration: 706,
            easing: "ease-out",
            animation: {
              0: {
                scale3d_x: "0",
                scale3d_y: "1",
                scale3d_z: "1",
                transform_origin_x: 100
              },
              100: {
                scale3d_x: "1",
                scale3d_y: "1",
                scale3d_z: "1",
                transform_origin_x: 100
              }
            }
          },
          slideRightIn: {
            duration: 706,
            easing: "ease-out",
            animation: {
              0: {
                scale3d_x: "0",
                scale3d_y: "1",
                scale3d_z: "1",
                transform_origin_x: 0
              },
              100: {
                scale3d_x: "1",
                scale3d_y: "1",
                scale3d_z: "1",
                transform_origin_x: 0
              }
            }
          },
          slideUpIn: {
            duration: 706,
            easing: "ease-out",
            animation: {
              0: {
                scale3d_x: "1",
                scale3d_y: "0",
                scale3d_z: "1",
                transform_origin_y: 100
              },
              100: {
                scale3d_x: "1",
                scale3d_y: "1",
                scale3d_z: "1",
                transform_origin_y: 100
              }
            }
          },
          slideDownIn: {
            duration: 706,
            easing: "ease-out",
            animation: {
              0: {
                scale3d_x: "1",
                scale3d_y: "0",
                scale3d_z: "1",
                transform_origin_y: 0
              },
              100: {
                scale3d_x: "1",
                scale3d_y: "1",
                scale3d_z: "1",
                transform_origin_y: 0
              }
            }
          },
          slideLeftOut: {
            duration: 706,
            easing: "ease-in",
            animation: {
              0: {
                scale3d_x: "1",
                scale3d_y: "1",
                scale3d_z: "1",
                transform_origin_x: 0
              },
              100: {
                scale3d_x: "0",
                scale3d_y: "1",
                scale3d_z: "1",
                transform_origin_x: 0
              }
            }
          },
          slideRightOut: {
            duration: 706,
            easing: "ease-in",
            animation: {
              0: {
                scale3d_x: "1",
                scale3d_y: "1",
                scale3d_z: "1",
                transform_origin_x: 100
              },
              100: {
                scale3d_x: "0",
                scale3d_y: "1",
                scale3d_z: "1",
                transform_origin_x: 100
              }
            }
          },
          slideUpOut: {
            duration: 706,
            easing: "ease-in",
            animation: {
              0: {
                scale3d_x: "1",
                scale3d_y: "1",
                scale3d_z: "1",
                transform_origin_y: 0
              },
              100: {
                scale3d_x: "1",
                scale3d_y: "0",
                scale3d_z: "1",
                transform_origin_y: 0
              }
            }
          },
          slideDownOut: {
            duration: 706,
            easing: "ease-in",
            animation: {
              0: {
                scale3d_x: "1",
                scale3d_y: "1",
                scale3d_z: "1",
                transform_origin_y: 100
              },
              100: {
                scale3d_x: "1",
                scale3d_y: "0",
                scale3d_z: "1",
                transform_origin_y: 100
              }
            }
          },
          flipInX: {
            duration: 705,
            easing: "ease-in",
            animation: {
              0: {
                opacity: 0,
                perspective: 400,
                rotate3d_x: 1,
                rotate3d_y: 0,
                rotate3d_z: 0,
                rotate3d_deg: 90
              },
              40: {
                perspective: 400,
                rotate3d_x: 1,
                rotate3d_y: 0,
                rotate3d_z: 0,
                rotate3d_deg: -20
              },
              60: {
                opacity: 1,
                perspective: 400,
                rotate3d_x: 1,
                rotate3d_y: 0,
                rotate3d_z: 0,
                rotate3d_deg: 10
              },
              80: {
                opacity: 1,
                perspective: 400,
                rotate3d_x: 1,
                rotate3d_y: 0,
                rotate3d_z: 0,
                rotate3d_deg: -5
              },
              81: {
                opacity: 1,
                perspective: 0,
                rotate3d_x: 0,
                rotate3d_y: 0,
                rotate3d_z: 0,
                rotate3d_deg: 0
              },
              100: {
                opacity: 1,
                perspective: 0,
                rotate3d_x: 0,
                rotate3d_y: 0,
                rotate3d_z: 0,
                rotate3d_deg: 0
              }
            }
          },
          flipInY: {
            duration: 705,
            easing: "ease-in",
            animation: {
              0: {
                opacity: 0,
                perspective: 400,
                rotate3d_x: 0,
                rotate3d_y: 1,
                rotate3d_z: 0,
                rotate3d_deg: 90
              },
              40: {
                perspective: 400,
                rotate3d_x: 0,
                rotate3d_y: 1,
                rotate3d_z: 0,
                rotate3d_deg: -20
              },
              60: {
                opacity: 1,
                perspective: 400,
                rotate3d_x: 0,
                rotate3d_y: 1,
                rotate3d_z: 0,
                rotate3d_deg: 10
              },
              80: {
                opacity: 1,
                perspective: 400,
                rotate3d_x: 0,
                rotate3d_y: 1,
                rotate3d_z: 0,
                rotate3d_deg: -5
              },
              81: {
                opacity: 1,
                perspective: 0,
                rotate3d_x: 0,
                rotate3d_y: 0,
                rotate3d_z: 0,
                rotate3d_deg: 0
              },
              100: {
                opacity: 1,
                perspective: 0,
                rotate3d_x: 0,
                rotate3d_y: 0,
                rotate3d_z: 0,
                rotate3d_deg: 0
              }
            }
          },
          flipOutX: {
            duration: 706,
            easing: "ease-in",
            animation: {
              0: {
                opacity: 1,
                perspective: 400,
                rotate3d_x: 1,
                rotate3d_y: 0,
                rotate3d_z: 0,
                rotate3d_deg: 0
              },
              30: {
                opacity: 1,
                perspective: 400,
                rotate3d_x: 1,
                rotate3d_y: 0,
                rotate3d_z: 0,
                rotate3d_deg: -20
              },
              100: {
                opacity: 0,
                perspective: 400,
                rotate3d_x: 1,
                rotate3d_y: 0,
                rotate3d_z: 0,
                rotate3d_deg: 90
              }
            }
          },
          flipOutY: {
            duration: 706,
            easing: "ease-in",
            animation: {
              0: {
                opacity: 1,
                perspective: 400,
                rotate3d_x: 0,
                rotate3d_y: 1,
                rotate3d_z: 0,
                rotate3d_deg: 0
              },
              30: {
                opacity: 1,
                perspective: 400,
                rotate3d_x: 0,
                rotate3d_y: 1,
                rotate3d_z: 0,
                rotate3d_deg: -15
              },
              100: {
                opacity: 0,
                perspective: 400,
                rotate3d_x: 0,
                rotate3d_y: 1,
                rotate3d_z: 0,
                rotate3d_deg: 90
              }
            }
          },
          lightSpeedIn: {
            duration: 505,
            easing: "ease-out",
            animation: {
              0: {
                opacity: 0,
                translate3d_x: 500,
                skewX: -30
              },
              60: {
                opacity: 1,
                skewX: 20
              },
              80: {
                opacity: 1,
                skewX: -5
              },
              100: {
                opacity: 1,
                translate3d_x: 0,
                skewX: 0
              }
            }
          },
          lightSpeedOut: {
            duration: 506,
            easing: "ease-in",
            animation: {
              0: {
                opacity: 1,
                translate3d_x: 0,
                skewX: 0
              },
              100: {
                opacity: 0,
                translate3d_x: 500,
                skewX: 30
              }
            }
          },
          rotateIn: {
            duration: 605,
            easing: "linear",
            animation: {
              0: {
                opacity: 0,
                rotate3d_x: 0,
                rotate3d_y: 0,
                rotate3d_z: 1,
                rotate3d_deg: -200
              },
              100: {
                opacity: 1,
                rotate3d_x: 0,
                rotate3d_y: 0,
                rotate3d_z: 1,
                rotate3d_deg: 0
              }
            }
          },
          rotateOut: {
            duration: 606,
            easing: "linear",
            animation: {
              0: {
                opacity: 1,
                rotate3d_x: 0,
                rotate3d_y: 0,
                rotate3d_z: 1,
                rotate3d_deg: 0
              },
              100: {
                opacity: 0,
                rotate3d_x: 0,
                rotate3d_y: 0,
                rotate3d_z: 1,
                rotate3d_deg: 200
              }
            }
          },
          zoomIn: {
            duration: 405,
            easing: "linear",
            animation: {
              0: {
                opacity: 0,
                scale3d_x: ".3",
                scale3d_y: ".3",
                scale3d_z: ".3"
              },
              100: {
                opacity: 1,
                scale3d_x: "1",
                scale3d_y: "1",
                scale3d_z: "1"
              }
            }
          },
          zoomOut: {
            duration: 406,
            easing: "linear",
            animation: {
              0: {
                opacity: 1,
                scale3d_x: "1",
                scale3d_y: "1",
                scale3d_z: "1"
              },
              100: {
                opacity: 0,
                scale3d_x: ".3",
                scale3d_y: ".3",
                scale3d_z: ".3"
              }
            }
          },
          rollIn: {
            duration: 105,
            easing: "linear",
            animation: {
              0: {
                opacity: 0,
                translate3d_x: -200,
                rotate3d_x: 0,
                rotate3d_y: 0,
                rotate3d_z: 1,
                rotate3d_deg: -120
              },
              100: {
                opacity: 1,
                translate3d_x: 0,
                rotate3d_x: 0,
                rotate3d_y: 0,
                rotate3d_z: 1,
                rotate3d_deg: 0
              }
            }
          },
          rollOut: {
            duration: 106,
            easing: "linear",
            animation: {
              0: {
                opacity: 1,
                translate3d_x: 0,
                rotate3d_x: 0,
                rotate3d_y: 0,
                rotate3d_z: 1,
                rotate3d_deg: 0
              },
              100: {
                opacity: 0,
                translate3d_x: 200,
                rotate3d_x: 0,
                rotate3d_y: 0,
                rotate3d_z: 1,
                rotate3d_deg: 120
              }
            }
          },
          typingIn: {
            duration: function (slide_object) {
              return slide_object.letters.length / 2 * 100
            },
            easing: "linear",
            animation: {
              0: {
                length_percent: 0
              },
              100: {
                length_percent: 100
              }
            },
            applyStyles: function (slide_object) {
              slide_object.$inner.css("background-color", "rgba(0,0,0,0)");
              slide_object.splitted_text.css("background-color", "rgba(0,0,0,0)");
              slide_object.letters.css("background-color", slide_object.data.style.text_background_color || "rgba(0,0,0,0)")
            },
            applyEffectExtra: function (state, slide_object) {
              var visible = self.visibleElements(slide_object.letters.length, state.length_percent);
              slide_object.letters.slice(visible.full, visible.full + 1).css({
                visibility: "visible",
                opacity: visible.part
              });
              slide_object.letters.slice(0, visible.full).css({
                visibility: "visible",
                opacity: 1
              });
              slide_object.letters.slice(visible.full + 1, slide_object.letters.length).css("visibility", "hidden")
            }
          },
          typingFallingIn: {
            duration: function (slide_object) {
              return slide_object.letters.length / 2 * 100
            },
            easing: "linear",
            animation: {
              0: {
                length_percent: 0
              },
              100: {
                length_percent: 100
              }
            },
            applyStyles: function (slide_object) {
              slide_object.letters.css({
                position: "relative"
              });
              slide_object.$inner.css("background-color", "rgba(0,0,0,0)");
              slide_object.splitted_text.css("background-color", "rgba(0,0,0,0)");
              slide_object.letters.css("background-color", slide_object.data.style.text_background_color || "rgba(0,0,0,0)")
            },
            applyEffectExtra: function (state, slide_object) {
              var visible = self.visibleElements(slide_object.letters.length, state.length_percent);
              var start_bottom = 50;
              var to_bottom = 0;
              var current_bottom = (start_bottom - to_bottom) * (1 - visible.part) + to_bottom;
              slide_object.letters.slice(visible.full, visible.full + 1).css({
                visibility: "visible",
                opacity: visible.part,
                bottom: current_bottom
              });
              slide_object.letters.slice(0, visible.full).css({
                visibility: "visible",
                opacity: 1,
                bottom: 0
              });
              slide_object.letters.slice(visible.full + 1, slide_object.letters.length).css("visibility", "hidden")
            }
          },
          typingByWordIn: {
            duration: function (elements) {
              return elements.words.length / 2 * 700
            },
            easing: "linear",
            animation: {
              0: {
                words_percent: 0
              },
              100: {
                words_percent: 100
              }
            },
            applyStyles: function (slide_object) {
              slide_object.$inner.css("background-color", "rgba(0,0,0,0)");
              slide_object.splitted_text.css("background-color", "rgba(0,0,0,0)");
              slide_object.letters.css("background-color", slide_object.data.style.text_background_color || "rgba(0,0,0,0)")
            },
            applyEffectExtra: function (state, slide_object) {
              var visible = self.visibleElements(slide_object.words.length, state.words_percent);
              slide_object.words.slice(0, visible.full).css({
                visibility: "visible",
                opacity: 1
              });
              slide_object.words.slice(visible.full, visible.full + 1).css({
                visibility: "visible",
                opacity: visible.part
              });
              slide_object.words.slice(visible.full + 1, slide_object.words.length).css("visibility", "hidden")
            }
          },
          typingByWordScaleIn: {
            duration: function (elements) {
              return elements.words.length / 2 * 700
            },
            easing: "linear",
            animation: {
              0: {
                words_percent: 0
              },
              100: {
                words_percent: 100
              }
            },
            applyStyles: function (slide_object) {
              slide_object.$inner.css("background-color", "rgba(0,0,0,0)");
              slide_object.splitted_text.css("background-color", "rgba(0,0,0,0)");
              slide_object.letters.css("background-color", slide_object.data.style.text_background_color || "rgba(0,0,0,0)");
              slide_object.words.css({
                display: "inline-block"
              });
              slide_object.words.find("." + slide_object.player.options.class_prefix + "letter:last-child").css({
                "padding-right": 10
              })
            },
            applyEffectExtra: function (state, slide_object) {
              var visible = self.visibleElements(slide_object.words.length, state.words_percent);
              var start_scale = 3;
              var to_scale = 1;
              var current_scale = (start_scale - to_scale) * (1 - visible.part) + to_scale;
              slide_object.words.slice(0, visible.full).css({
                visibility: "visible",
                opacity: 1,
                transform: "scale(1)"
              });
              slide_object.words.slice(visible.full, visible.full + 1).css({
                visibility: "visible",
                opacity: visible.part,
                transform: "scale(" + current_scale + ")"
              });
              slide_object.words.slice(visible.full + 1, slide_object.words.length).css("visibility", "hidden")
            }
          },
          typingByWordFallDownIn: {
            duration: function (elements) {
              return elements.words.length / 2 * 500
            },
            easing: "linear",
            animation: {
              0: {
                words_percent: 0
              },
              100: {
                words_percent: 100
              }
            },
            applyStyles: function (slide_object) {
              slide_object.$inner.css("background-color", "rgba(0,0,0,0)");
              slide_object.splitted_text.css("background-color", "rgba(0,0,0,0)");
              slide_object.letters.css("background-color", slide_object.data.style.text_background_color || "rgba(0,0,0,0)")
            },
            applyEffectExtra: function (state, slide_object) {
              var visible = self.visibleElements(slide_object.words.length, state.words_percent);
              var start_bottom = 50;
              var to_bottom = 0;
              var current_bottom = (start_bottom - to_bottom) * (1 - visible.part) + to_bottom;
              slide_object.words.slice(0, visible.full).css({
                visibility: "visible",
                opacity: 1,
                position: "static",
                bottom: 0
              });
              slide_object.words.slice(visible.full, visible.full + 1).css({
                visibility: "visible",
                opacity: visible.part,
                position: "relative",
                bottom: current_bottom
              });
              slide_object.words.slice(visible.full + 1, slide_object.words.length).css("visibility", "hidden")
            }
          },
          typingByWordBlurIn: {
            duration: function (elements) {
              return elements.words.length / 2 * 700
            },
            easing: "linear",
            animation: {
              0: {
                words_percent: 0
              },
              100: {
                words_percent: 100
              }
            },
            applyStyles: function (slide_object) {
              slide_object.$inner.css("background-color", "rgba(0,0,0,0)");
              slide_object.splitted_text.css("background-color", "rgba(0,0,0,0)");
              slide_object.letters.css("background-color", slide_object.data.style.text_background_color || "rgba(0,0,0,0)")
            },
            applyEffectExtra: function (state, slide_object) {
              var visible = self.visibleElements(slide_object.words.length, state.words_percent);
              var start_blur = 10;
              var to_blur = 0;
              var current_blur = (start_blur - to_blur) * (1 - visible.part) + to_blur;
              slide_object.words.slice(0, visible.full).css({
                visibility: "visible",
                opacity: 1,
                filter: "none"
              });
              slide_object.words.slice(visible.full, visible.full + 1).css({
                visibility: "visible",
                opacity: 1,
                filter: "blur(" + current_blur + "px)"
              });
              slide_object.words.slice(visible.full + 1, slide_object.words.length).css("visibility", "hidden")
            }
          },
          typingOut: {
            duration: 5e3,
            easing: "linear",
            animation: {
              0: {
                length_percent: 100
              },
              100: {
                length_percent: 0
              }
            }
          },
          ongoingMoveLeft: {
            easing: "linear",
            animation: {
              0: {
                translate3d_x: 0
              },
              100: {
                translate3d_x: -25
              }
            }
          },
          ongoingMoveRight: {
            easing: "linear",
            animation: {
              0: {
                translate3d_x: 0
              },
              100: {
                translate3d_x: 25
              }
            }
          },
          ongoingMoveUp: {
            easing: "linear",
            animation: {
              0: {
                translate3d_y: 0
              },
              100: {
                translate3d_y: -25
              }
            }
          },
          ongoingMoveDown: {
            easing: "linear",
            animation: {
              0: {
                translate3d_y: 0
              },
              100: {
                translate3d_y: 25
              }
            }
          },
          ongoingMildRotate: {
            easing: "linear",
            animation: {
              0: {
                rotate: 0
              },
              100: {
                rotate: 5
              }
            }
          },
          ongoingMildRotateCounterClockwise: {
            easing: "linear",
            animation: {
              0: {
                rotate: 0
              },
              100: {
                rotate: -5
              }
            }
          },
          ongoingZoomIn: {
            easing: "linear",
            animation: {
              0: {
                scale: 1
              },
              100: {
                scale: 1.1
              }
            }
          },
          ongoingZoomOut: {
            easing: "linear",
            animation: {
              0: {
                scale: 1
              },
              100: {
                scale: .9
              }
            }
          },
          ongoingPulse: {
            easing: "linear",
            duration: 500,
            animation: {
              0: {
                scale: 1
              },
              50: {
                scale: 1.2
              },
              100: {
                scale: 1
              }
            }
          },
          ongoingPulseUp: {
            easing: "linear",
            duration: 500,
            animation: {
              0: {
                translate3d_y: 0
              },
              50: {
                translate3d_y: -25
              },
              100: {
                translate3d_y: 0
              }
            }
          },
          ongoingPulseDown: {
            easing: "linear",
            duration: 500,
            animation: {
              0: {
                translate3d_y: 0
              },
              50: {
                translate3d_y: 25
              },
              100: {
                translate3d_y: 0
              }
            }
          },
          ongoingPulseLeft: {
            easing: "linear",
            duration: 500,
            animation: {
              0: {
                translate3d_x: 0
              },
              50: {
                translate3d_x: -25
              },
              100: {
                translate3d_x: 0
              }
            }
          },
          ongoingPulseRight: {
            easing: "linear",
            duration: 500,
            animation: {
              0: {
                translate3d_x: 0
              },
              50: {
                translate3d_x: 25
              },
              100: {
                translate3d_x: 0
              }
            }
          },
          ongoingPulseWidth: {
            easing: "linear",
            duration: 500,
            animation: {
              0: {
                scale3d_x: 1,
                scale3d_y: 1,
                scale3d_z: 1
              },
              50: {
                scale3d_x: 1.1,
                scale3d_y: 1,
                scale3d_z: 1
              },
              100: {
                scale3d_x: 1,
                scale3d_y: 1,
                scale3d_z: 1
              }
            }
          },
          ongoingPulseHeight: {
            easing: "linear",
            duration: 500,
            animation: {
              0: {
                scale3d_x: 1,
                scale3d_y: 1,
                scale3d_z: 1
              },
              50: {
                scale3d_x: 1,
                scale3d_y: 1.1,
                scale3d_z: 1
              },
              100: {
                scale3d_x: 1,
                scale3d_y: 1,
                scale3d_z: 1
              }
            }
          },
          ongoingRotateClockwise: {
            easing: "linear",
            duration: 2e3,
            animation: {
              0: {
                rotate: 0
              },
              100: {
                rotate: 360
              }
            }
          },
          ongoingRotateCounterClockwise: {
            easing: "linear",
            duration: 2e3,
            animation: {
              0: {
                rotate: 0
              },
              100: {
                rotate: -360
              }
            }
          }
        };
        return effects[name]
      };
      return SlideObjectEffects
    }();
    exports.SlideObjectEffects = SlideObjectEffects
  }, function (module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    (function () {
      function aa(a, b, c) {
        return a.call.apply(a.bind, arguments)
      }

      function ba(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
          var d = Array.prototype.slice.call(arguments, 2);
          return function () {
            var c = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c, d);
            return a.apply(b, c)
          }
        }
        return function () {
          return a.apply(b, arguments)
        }
      }

      function p(a, b, c) {
        p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? aa : ba;
        return p.apply(null, arguments)
      }

      var q = Date.now || function () {
        return +new Date
      };

      function ca(a, b) {
        this.a = a;
        this.o = b || a;
        this.c = this.o.document
      }

      var da = !!window.FontFace;

      function t(a, b, c, d) {
        b = a.c.createElement(b);
        if (c)
          for (var e in c) c.hasOwnProperty(e) && ("style" == e ? b.style.cssText = c[e] : b.setAttribute(e, c[e]));
        d && b.appendChild(a.c.createTextNode(d));
        return b
      }

      function u(a, b, c) {
        a = a.c.getElementsByTagName(b)[0];
        a || (a = document.documentElement);
        a.insertBefore(c, a.lastChild)
      }

      function v(a) {
        a.parentNode && a.parentNode.removeChild(a)
      }

      function w(a, b, c) {
        b = b || [];
        c = c || [];
        for (var d = a.className.split(/\s+/), e = 0; e < b.length; e += 1) {
          for (var f = !1, g = 0; g < d.length; g += 1)
            if (b[e] === d[g]) {
              f = !0;
              break
            }
          f || d.push(b[e])
        }
        b = [];
        for (e = 0; e < d.length; e += 1) {
          f = !1;
          for (g = 0; g < c.length; g += 1)
            if (d[e] === c[g]) {
              f = !0;
              break
            }
          f || b.push(d[e])
        }
        a.className = b.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
      }

      function y(a, b) {
        for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++)
          if (c[d] == b) return !0;
        return !1
      }

      function ea(a) {
        return a.o.location.hostname || a.a.location.hostname
      }

      function z(a, b, c) {
        function d() {
          m && e && f && (m(g), m = null)
        }

        b = t(a, "link", {
          rel: "stylesheet",
          href: b,
          media: "all"
        });
        var e = !1,
          f = !0,
          g = null,
          m = c || null;
        da ? (b.onload = function () {
          e = !0;
          d()
        }, b.onerror = function () {
          e = !0;
          g = Error("Stylesheet failed to load");
          d()
        }) : setTimeout(function () {
          e = !0;
          d()
        }, 0);
        u(a, "head", b)
      }

      function A(a, b, c, d) {
        var e = a.c.getElementsByTagName("head")[0];
        if (e) {
          var f = t(a, "script", {
              src: b
            }),
            g = !1;
          f.onload = f.onreadystatechange = function () {
            g || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (g = !0, c && c(null), f.onload = f.onreadystatechange = null, "HEAD" == f.parentNode.tagName && e.removeChild(f))
          };
          e.appendChild(f);
          setTimeout(function () {
            g || (g = !0, c && c(Error("Script load timeout")))
          }, d || 5e3);
          return f
        }
        return null
      }

      function B() {
        this.a = 0;
        this.c = null
      }

      function C(a) {
        a.a++;
        return function () {
          a.a--;
          D(a)
        }
      }

      function E(a, b) {
        a.c = b;
        D(a)
      }

      function D(a) {
        0 == a.a && a.c && (a.c(), a.c = null)
      }

      function F(a) {
        this.a = a || "-"
      }

      F.prototype.c = function (a) {
        for (var b = [], c = 0; c < arguments.length; c++) b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase());
        return b.join(this.a)
      };

      function G(a, b) {
        this.c = a;
        this.f = 4;
        this.a = "n";
        var c = (b || "n4").match(/^([nio])([1-9])$/i);
        c && (this.a = c[1], this.f = parseInt(c[2], 10))
      }

      function fa(a) {
        return H(a) + " " + (a.f + "00") + " 300px " + I(a.c)
      }

      function I(a) {
        var b = [];
        a = a.split(/,\s*/);
        for (var c = 0; c < a.length; c++) {
          var d = a[c].replace(/['"]/g, "");
          -1 != d.indexOf(" ") || /^\d/.test(d) ? b.push("'" + d + "'") : b.push(d)
        }
        return b.join(",")
      }

      function J(a) {
        return a.a + a.f
      }

      function H(a) {
        var b = "normal";
        "o" === a.a ? b = "oblique" : "i" === a.a && (b = "italic");
        return b
      }

      function ga(a) {
        var b = 4,
          c = "n",
          d = null;
        a && ((d = a.match(/(normal|oblique|italic)/i)) && d[1] && (c = d[1].substr(0, 1).toLowerCase()), (d = a.match(/([1-9]00|normal|bold)/i)) && d[1] && (/bold/i.test(d[1]) ? b = 7 : /[1-9]00/.test(d[1]) && (b = parseInt(d[1].substr(0, 1), 10))));
        return c + b
      }

      function ha(a, b) {
        this.c = a;
        this.f = a.o.document.documentElement;
        this.h = b;
        this.a = new F("-");
        this.j = !1 !== b.events;
        this.g = !1 !== b.classes
      }

      function ia(a) {
        a.g && w(a.f, [a.a.c("wf", "loading")]);
        K(a, "loading")
      }

      function L(a) {
        if (a.g) {
          var b = y(a.f, a.a.c("wf", "active")),
            c = [],
            d = [a.a.c("wf", "loading")];
          b || c.push(a.a.c("wf", "inactive"));
          w(a.f, c, d)
        }
        K(a, "inactive")
      }

      function K(a, b, c) {
        if (a.j && a.h[b])
          if (c) a.h[b](c.c, J(c));
          else a.h[b]()
      }

      function ja() {
        this.c = {}
      }

      function ka(a, b, c) {
        var d = [],
          e;
        for (e in b)
          if (b.hasOwnProperty(e)) {
            var f = a.c[e];
            f && d.push(f(b[e], c))
          }
        return d
      }

      function M(a, b) {
        this.c = a;
        this.f = b;
        this.a = t(this.c, "span", {
          "aria-hidden": "true"
        }, this.f)
      }

      function N(a) {
        u(a.c, "body", a.a)
      }

      function O(a) {
        return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + I(a.c) + ";" + ("font-style:" + H(a) + ";font-weight:" + (a.f + "00") + ";")
      }

      function P(a, b, c, d, e, f) {
        this.g = a;
        this.j = b;
        this.a = d;
        this.c = c;
        this.f = e || 3e3;
        this.h = f || void 0
      }

      P.prototype.start = function () {
        var a = this.c.o.document,
          b = this,
          c = q(),
          d = new Promise(function (d, e) {
            function f() {
              q() - c >= b.f ? e() : a.fonts.load(fa(b.a), b.h).then(function (a) {
                1 <= a.length ? d() : setTimeout(f, 25)
              }, function () {
                e()
              })
            }

            f()
          }),
          e = null,
          f = new Promise(function (a, d) {
            e = setTimeout(d, b.f)
          });
        Promise.race([f, d]).then(function () {
          e && (clearTimeout(e), e = null);
          b.g(b.a)
        }, function () {
          b.j(b.a)
        })
      };

      function Q(a, b, c, d, e, f, g) {
        this.v = a;
        this.B = b;
        this.c = c;
        this.a = d;
        this.s = g || "BESbswy";
        this.f = {};
        this.w = e || 3e3;
        this.u = f || null;
        this.m = this.j = this.h = this.g = null;
        this.g = new M(this.c, this.s);
        this.h = new M(this.c, this.s);
        this.j = new M(this.c, this.s);
        this.m = new M(this.c, this.s);
        a = new G(this.a.c + ",serif", J(this.a));
        a = O(a);
        this.g.a.style.cssText = a;
        a = new G(this.a.c + ",sans-serif", J(this.a));
        a = O(a);
        this.h.a.style.cssText = a;
        a = new G("serif", J(this.a));
        a = O(a);
        this.j.a.style.cssText = a;
        a = new G("sans-serif", J(this.a));
        a = O(a);
        this.m.a.style.cssText = a;
        N(this.g);
        N(this.h);
        N(this.j);
        N(this.m)
      }

      var R = {
          D: "serif",
          C: "sans-serif"
        },
        S = null;

      function T() {
        if (null === S) {
          var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
          S = !!a && (536 > parseInt(a[1], 10) || 536 === parseInt(a[1], 10) && 11 >= parseInt(a[2], 10))
        }
        return S
      }

      Q.prototype.start = function () {
        this.f.serif = this.j.a.offsetWidth;
        this.f["sans-serif"] = this.m.a.offsetWidth;
        this.A = q();
        U(this)
      };

      function la(a, b, c) {
        for (var d in R)
          if (R.hasOwnProperty(d) && b === a.f[R[d]] && c === a.f[R[d]]) return !0;
        return !1
      }

      function U(a) {
        var b = a.g.a.offsetWidth,
          c = a.h.a.offsetWidth,
          d;
        (d = b === a.f.serif && c === a.f["sans-serif"]) || (d = T() && la(a, b, c));
        d ? q() - a.A >= a.w ? T() && la(a, b, c) && (null === a.u || a.u.hasOwnProperty(a.a.c)) ? V(a, a.v) : V(a, a.B) : ma(a) : V(a, a.v)
      }

      function ma(a) {
        setTimeout(p(function () {
          U(this)
        }, a), 50)
      }

      function V(a, b) {
        setTimeout(p(function () {
          v(this.g.a);
          v(this.h.a);
          v(this.j.a);
          v(this.m.a);
          b(this.a)
        }, a), 0)
      }

      function W(a, b, c) {
        this.c = a;
        this.a = b;
        this.f = 0;
        this.m = this.j = !1;
        this.s = c
      }

      var X = null;
      W.prototype.g = function (a) {
        var b = this.a;
        b.g && w(b.f, [b.a.c("wf", a.c, J(a).toString(), "active")], [b.a.c("wf", a.c, J(a).toString(), "loading"), b.a.c("wf", a.c, J(a).toString(), "inactive")]);
        K(b, "fontactive", a);
        this.m = !0;
        na(this)
      };
      W.prototype.h = function (a) {
        var b = this.a;
        if (b.g) {
          var c = y(b.f, b.a.c("wf", a.c, J(a).toString(), "active")),
            d = [],
            e = [b.a.c("wf", a.c, J(a).toString(), "loading")];
          c || d.push(b.a.c("wf", a.c, J(a).toString(), "inactive"));
          w(b.f, d, e)
        }
        K(b, "fontinactive", a);
        na(this)
      };

      function na(a) {
        0 == --a.f && a.j && (a.m ? (a = a.a, a.g && w(a.f, [a.a.c("wf", "active")], [a.a.c("wf", "loading"), a.a.c("wf", "inactive")]), K(a, "active")) : L(a.a))
      }

      function oa(a) {
        this.j = a;
        this.a = new ja;
        this.h = 0;
        this.f = this.g = !0
      }

      oa.prototype.load = function (a) {
        this.c = new ca(this.j, a.context || this.j);
        this.g = !1 !== a.events;
        this.f = !1 !== a.classes;
        pa(this, new ha(this.c, a), a)
      };

      function qa(a, b, c, d, e) {
        var f = 0 == --a.h;
        (a.f || a.g) && setTimeout(function () {
          var a = e || null,
            m = d || null || {};
          if (0 === c.length && f) L(b.a);
          else {
            b.f += c.length;
            f && (b.j = f);
            var h, l = [];
            for (h = 0; h < c.length; h++) {
              var k = c[h],
                n = m[k.c],
                r = b.a,
                x = k;
              r.g && w(r.f, [r.a.c("wf", x.c, J(x).toString(), "loading")]);
              K(r, "fontloading", x);
              r = null;
              if (null === X)
                if (window.FontFace) {
                  var x = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),
                    xa = /OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent) && /Apple/.exec(window.navigator.vendor);
                  X = x ? 42 < parseInt(x[1], 10) : xa ? !1 : !0
                } else X = !1;
              X ? r = new P(p(b.g, b), p(b.h, b), b.c, k, b.s, n) : r = new Q(p(b.g, b), p(b.h, b), b.c, k, b.s, a, n);
              l.push(r)
            }
            for (h = 0; h < l.length; h++) l[h].start()
          }
        }, 0)
      }

      function pa(a, b, c) {
        var d = [],
          e = c.timeout;
        ia(b);
        var d = ka(a.a, c, a.c),
          f = new W(a.c, b, e);
        a.h = d.length;
        b = 0;
        for (c = d.length; b < c; b++) d[b].load(function (b, d, c) {
          qa(a, f, b, d, c)
        })
      }

      function ra(a, b) {
        this.c = a;
        this.a = b
      }

      ra.prototype.load = function (a) {
        function b() {
          if (f["__mti_fntLst" + d]) {
            var c = f["__mti_fntLst" + d](),
              e = [],
              h;
            if (c)
              for (var l = 0; l < c.length; l++) {
                var k = c[l].fontfamily;
                void 0 != c[l].fontStyle && void 0 != c[l].fontWeight ? (h = c[l].fontStyle + c[l].fontWeight, e.push(new G(k, h))) : e.push(new G(k))
              }
            a(e)
          } else setTimeout(function () {
            b()
          }, 50)
        }

        var c = this,
          d = c.a.projectId,
          e = c.a.version;
        if (d) {
          var f = c.c.o;
          A(this.c, (c.a.api || "https://fast.fonts.net/jsapi") + "/" + d + ".js" + (e ? "?v=" + e : ""), function (e) {
            e ? a([]) : (f["__MonotypeConfiguration__" + d] = function () {
              return c.a
            }, b())
          }).id = "__MonotypeAPIScript__" + d
        } else a([])
      };

      function sa(a, b) {
        this.c = a;
        this.a = b
      }

      sa.prototype.load = function (a) {
        var b, c, d = this.a.urls || [],
          e = this.a.families || [],
          f = this.a.testStrings || {},
          g = new B;
        b = 0;
        for (c = d.length; b < c; b++) z(this.c, d[b], C(g));
        var m = [];
        b = 0;
        for (c = e.length; b < c; b++)
          if (d = e[b].split(":"), d[1])
            for (var h = d[1].split(","), l = 0; l < h.length; l += 1) m.push(new G(d[0], h[l]));
          else m.push(new G(d[0]));
        E(g, function () {
          a(m, f)
        })
      };

      function ta(a, b) {
        a ? this.c = a : this.c = ua;
        this.a = [];
        this.f = [];
        this.g = b || ""
      }

      var ua = "https://fonts.googleapis.com/css";

      function va(a, b) {
        for (var c = b.length, d = 0; d < c; d++) {
          var e = b[d].split(":");
          3 == e.length && a.f.push(e.pop());
          var f = "";
          2 == e.length && "" != e[1] && (f = ":");
          a.a.push(e.join(f))
        }
      }

      function wa(a) {
        if (0 == a.a.length) throw Error("No fonts to load!");
        if (-1 != a.c.indexOf("kit=")) return a.c;
        for (var b = a.a.length, c = [], d = 0; d < b; d++) c.push(a.a[d].replace(/ /g, "+"));
        b = a.c + "?family=" + c.join("%7C");
        0 < a.f.length && (b += "&subset=" + a.f.join(","));
        0 < a.g.length && (b += "&text=" + encodeURIComponent(a.g));
        return b
      }

      function ya(a) {
        this.f = a;
        this.a = [];
        this.c = {}
      }

      var za = {
          latin: "BESbswy",
          "latin-ext": "çöüğş",
          cyrillic: "йяЖ",
          greek: "αβΣ",
          khmer: "កខគ",
          Hanuman: "កខគ"
        },
        Aa = {
          thin: "1",
          extralight: "2",
          "extra-light": "2",
          ultralight: "2",
          "ultra-light": "2",
          light: "3",
          regular: "4",
          book: "4",
          medium: "5",
          "semi-bold": "6",
          semibold: "6",
          "demi-bold": "6",
          demibold: "6",
          bold: "7",
          "extra-bold": "8",
          extrabold: "8",
          "ultra-bold": "8",
          ultrabold: "8",
          black: "9",
          heavy: "9",
          l: "3",
          r: "4",
          b: "7"
        },
        Ba = {
          i: "i",
          italic: "i",
          n: "n",
          normal: "n"
        },
        Ca = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;

      function Da(a) {
        for (var b = a.f.length, c = 0; c < b; c++) {
          var d = a.f[c].split(":"),
            e = d[0].replace(/\+/g, " "),
            f = ["n4"];
          if (2 <= d.length) {
            var g;
            var m = d[1];
            g = [];
            if (m)
              for (var m = m.split(","), h = m.length, l = 0; l < h; l++) {
                var k;
                k = m[l];
                if (k.match(/^[\w-]+$/)) {
                  var n = Ca.exec(k.toLowerCase());
                  if (null == n) k = "";
                  else {
                    k = n[2];
                    k = null == k || "" == k ? "n" : Ba[k];
                    n = n[1];
                    if (null == n || "" == n) n = "4";
                    else var r = Aa[n],
                      n = r ? r : isNaN(n) ? "4" : n.substr(0, 1);
                    k = [k, n].join("")
                  }
                } else k = "";
                k && g.push(k)
              }
            0 < g.length && (f = g);
            3 == d.length && (d = d[2], g = [], d = d ? d.split(",") : g, 0 < d.length && (d = za[d[0]]) && (a.c[e] = d))
          }
          a.c[e] || (d = za[e]) && (a.c[e] = d);
          for (d = 0; d < f.length; d += 1) a.a.push(new G(e, f[d]))
        }
      }

      function Ea(a, b) {
        this.c = a;
        this.a = b
      }

      var Fa = {
        Arimo: !0,
        Cousine: !0,
        Tinos: !0
      };
      Ea.prototype.load = function (a) {
        var b = new B,
          c = this.c,
          d = new ta(this.a.api, this.a.text),
          e = this.a.families;
        va(d, e);
        var f = new ya(e);
        Da(f);
        z(c, wa(d), C(b));
        E(b, function () {
          a(f.a, f.c, Fa)
        })
      };

      function Ga(a, b) {
        this.c = a;
        this.a = b
      }

      Ga.prototype.load = function (a) {
        var b = this.a.id,
          c = this.c.o;
        b ? A(this.c, (this.a.api || "https://use.typekit.net") + "/" + b + ".js", function (b) {
          if (b) a([]);
          else if (c.Typekit && c.Typekit.config && c.Typekit.config.fn) {
            b = c.Typekit.config.fn;
            for (var e = [], f = 0; f < b.length; f += 2)
              for (var g = b[f], m = b[f + 1], h = 0; h < m.length; h++) e.push(new G(g, m[h]));
            try {
              c.Typekit.load({
                events: !1,
                classes: !1,
                async: !0
              })
            } catch (l) {
            }
            a(e)
          }
        }, 2e3) : a([])
      };

      function Ha(a, b) {
        this.c = a;
        this.f = b;
        this.a = []
      }

      Ha.prototype.load = function (a) {
        var b = this.f.id,
          c = this.c.o,
          d = this;
        b ? (c.__webfontfontdeckmodule__ || (c.__webfontfontdeckmodule__ = {}), c.__webfontfontdeckmodule__[b] = function (b, c) {
          for (var g = 0, m = c.fonts.length; g < m; ++g) {
            var h = c.fonts[g];
            d.a.push(new G(h.name, ga("font-weight:" + h.weight + ";font-style:" + h.style)))
          }
          a(d.a)
        }, A(this.c, (this.f.api || "https://f.fontdeck.com/s/css/js/") + ea(this.c) + "/" + b + ".js", function (b) {
          b && a([])
        })) : a([])
      };
      var Y = new oa(window);
      Y.a.c.custom = function (a, b) {
        return new sa(b, a)
      };
      Y.a.c.fontdeck = function (a, b) {
        return new Ha(b, a)
      };
      Y.a.c.monotype = function (a, b) {
        return new ra(b, a)
      };
      Y.a.c.typekit = function (a, b) {
        return new Ga(b, a)
      };
      Y.a.c.google = function (a, b) {
        return new Ea(b, a)
      };
      var Z = {
        load: p(Y.load, Y)
      };
      true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
        return Z
      }.call(exports, __webpack_require__, exports, module),
      __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined
    })()
  }, function (module, exports, __webpack_require__) {
    "use strict";
    var __extends = this && this.__extends || function () {
      var extendStatics = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function (d, b) {
          d.__proto__ = b
        } || function (d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p)) d[p] = b[p]
        };
      return function (d, b) {
        extendStatics(d, b);

        function __() {
          this.constructor = d
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __)
      }
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var $ = __webpack_require__(0);
    var WebFontLoader = __webpack_require__(22);
    var SlideObject_1 = __webpack_require__(2);
    var Utils_1 = __webpack_require__(8);
    var SlideObjectText = function (_super) {
      __extends(SlideObjectText, _super);

      function SlideObjectText(slide, player, index) {
        var _this = _super.call(this, slide, player, index) || this;
        _this.init();
        return _this
      }

      SlideObjectText.prototype.init = function () {
        this._rootInit();
        this._renderInnerDOM();
        this.promise = this.load()
      };
      SlideObjectText.prototype._renderInnerDOM = function () {
        if (this.$inner) this.$inner.remove();
        this.splitted_text = Utils_1.Utils.tagTextElements(this.data.text, this.player.options.class_prefix);
        this.$inner = $('<div class="' + this.player.options.class_prefix + 'slide-object-text"></div>').appendTo(this.deepestNode);
        this.splitted_text.appendTo(this.$inner);
        this.letters = this.splitted_text.find("." + this.player.options.class_prefix + "letter");
        this.words = this.splitted_text.find("." + this.player.options.class_prefix + "word");
        this._styleInnerDOM()
      };
      SlideObjectText.prototype.load = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
          if (!self.player.options.fonts_loader) return resolve();
          WebFontLoader.load({
            custom: {
              families: [self.data.style.font_family]
            },
            active: function () {
              resolve(self)
            }
          })
        })
      };
      SlideObjectText.prototype._styleInnerDOM = function () {
        if (this.data.style.font_url && this.player.font_urls_loaded.indexOf(this.data.style.font_url) == -1 && $("#style_font_" + Math.random().toString(36).substring(7)).length == 0) {
          $("head").prepend("<style id='style_" + this.data.style.font_family + "'>@font-face {" + "font-family: '" + this.data.style.font_family + "';" + "font-style: normal;" + "font-weight: 400;" + "src:" + "url('" + this.data.style.font_url + "');" + "}</style>");
          this.player.font_urls_loaded.push(this.data.style.font_url)
        }
        this.$inner.css({
          "font-family": '"' + this.data.style.font_family + '"' || "Open Sans",
          "font-size": this.data.style.font_size + "px",
          color: this.data.style.color,
          "font-weight": this.data.style.bold ? "700" : "400",
          "font-style": this.data.style.italic && !this.data.style.text_background_color ? "italic" : "normal",
          "text-align": this.data.style.text_align || "left",
          "text-decoration": this.data.style.underline ? "underline" : "none",
          "text-shadow": this.data.style.shadow && !this.data.style.stroke_color ? this.data.style.shadow : "none",
          "line-height": this.data.style.line_height || 1.3,
          "text-transform": this.data.style.text_transform || "none",
          cursor: "default",
          margin: "4px 0"
        });
        this.$inner.find("." + this.player.options.class_prefix + "letter-selected").css("color", this.data.style.extra_color || "#ffd800");
        if (this.data.style.stroke_color) {
          var stroke_color = this.data.style.stroke_color || "rgba(0,0,0,0)";
          var stroke_width = this.data.style.stroke_width || Math.ceil(this.data.style.font_size / 40);
          this.$inner.css({
            "text-shadow": "-" + stroke_width + "px -" + stroke_width + "px 0 " + stroke_color + ", " + stroke_width + "px -" + stroke_width + "px 0 " + stroke_color + ", -" + stroke_width + "px " + stroke_width + "px 0 " + stroke_color + ", " + stroke_width + "px " + stroke_width + "px 0 " + stroke_color + ""
          })
        }
        this.splitted_text.css({
          padding: "1px 10px",
          "-webkit-box-decoration-break": "clone",
          "background-color": this.data.style.text_background_color || "rgba(0,0,0,0)",
          "box-decoration-break": "clone"
        });
        if (this.entrance_animation.applyStyles) {
          this.entrance_animation.applyStyles(this)
        }
      };
      SlideObjectText.prototype.renderAnimationFunction = function (context, state) {
        var self = this;
        return function (context, state) {
          if (state.display == 1 && self.entrance_animation.applyEffectExtra) {
            self.entrance_animation.applyEffectExtra(state, self)
          }
          self.rootRenderAnimationFunction()(context, state)
        }
      };
      SlideObjectText.prototype.renderOngoingAnimationFunction = function (context, state) {
        var self = this;
        return function (context, state) {
          self.rootRenderOngoingAnimationFunction()(context, state)
        }
      };
      return SlideObjectText
    }(SlideObject_1.SlideObject);
    exports.SlideObjectText = SlideObjectText
  }, function (module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Text_1 = __webpack_require__(23);
    var Icon_1 = __webpack_require__(20);
    var Rect_1 = __webpack_require__(19);
    var Image_1 = __webpack_require__(18);
    var SlideObjectFactory = function () {
      function SlideObjectFactory() {
      }

      SlideObjectFactory.create = function (slide, player, index) {
        if (player.data.slides[slide.index].objects[index].type == "text") {
          return new Text_1.SlideObjectText(slide, player, index)
        }
        if (player.data.slides[slide.index].objects[index].type == "icon") {
          return new Icon_1.SlideObjectIcon(slide, player, index)
        }
        if (player.data.slides[slide.index].objects[index].type == "rect") {
          return new Rect_1.SlideObjectRect(slide, player, index)
        }
        if (player.data.slides[slide.index].objects[index].type == "image") {
          return new Image_1.SlideObjectImage(slide, player, index)
        }
      };
      return SlideObjectFactory
    }();
    exports.SlideObjectFactory = SlideObjectFactory
  }, function (module, exports, __webpack_require__) {
    "use strict";
    var __extends = this && this.__extends || function () {
      var extendStatics = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function (d, b) {
          d.__proto__ = b
        } || function (d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p)) d[p] = b[p]
        };
      return function (d, b) {
        extendStatics(d, b);

        function __() {
          this.constructor = d
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __)
      }
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var $ = __webpack_require__(0);
    var Slide_1 = __webpack_require__(3);
    var SlideImage = function (_super) {
      __extends(SlideImage, _super);

      function SlideImage(player, index) {
        var _this = _super.call(this, player, index) || this;
        _this.init();
        return _this
      }

      SlideImage.prototype.init = function () {
        this._rootInit();
        this._renderInnerDOM();
        this.promises.push(this.load())
      };
      SlideImage.prototype._renderInnerDOM = function () {
        var self = this;
        if (this.$inner) this.$inner.remove();
        this.$inner = $('<div class="' + this.player.options.class_prefix + "slide-background " + this.player.options.class_prefix + 'slide-background-image"></div>').appendTo(this.$root);
        this.filterDOM = $('<div class="' + this.player.options.class_prefix + "filter " + this.player.options.class_prefix + "filter-" + this.data.filter + '"></div>').appendTo(this.$inner);
        this.canvasDOM = $("<canvas></canvas>").appendTo(this.filterDOM);
        this._styleInnerDOM();
        var img_path = self.data[self.player.options.background_image_path_namespace + "path"];
        if (self.img && self.img.src == img_path) {
          this._renderCanvas()
        } else {
          self.img = new Image;
          self.img.onload = function () {
            self._renderCanvas()
          };
          self.img.src = img_path
        }
      };
      SlideImage.prototype._renderCanvas = function () {
        var self = this;
        var ctx = self.canvasDOM[0].getContext("2d");
        var crop = self.data[self.player.options.background_image_path_namespace + "crop"];
        if (crop) {
          self.canvasDOM[0].width = crop.width;
          self.canvasDOM[0].height = crop.height;
          ctx.drawImage(self.img, crop.x, crop.y, crop.width, crop.height, 0, 0, crop.width, crop.height)
        } else {
          self.canvasDOM[0].width = self.img.width;
          self.canvasDOM[0].height = self.img.height;
          ctx.drawImage(self.img, 0, 0, self.img.width, self.img.height)
        }
      };
      SlideImage.prototype._styleInnerDOM = function () {
        this.$inner.css({
          width: "100%",
          height: "100%"
        });
        this.canvasDOM.css({
          "min-width": "100%",
          "min-height": "100%",
          "max-width": "100%",
          "max-height": "100%"
        })
      };
      SlideImage.prototype.load = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
          var img = new Image;
          img.onload = function () {
            resolve(self)
          };
          img.onerror = function () {
            reject(img.src)
          };
          img.src = self.data[self.player.options.background_image_path_namespace + "path"]
        })
      };
      SlideImage.prototype.renderAnimationFunction = function () {
        var self = this;
        return function (context, state) {
          if (state.display == 1) {
            var transform = [],
              translate3d = [],
              rotate3d = [];
            translate3d.push((state.translate3d_x || 0) + "px");
            translate3d.push((state.translate3d_y || 0) + "px");
            translate3d.push((state.translate3d_z || 0) + "px");
            transform.push("translate3d(" + translate3d.join(",") + ")");
            transform.push("scale(" + (state.scale == undefined ? 1 : state.scale) + ")");
            rotate3d.push(state.rotate3d_x || 0);
            rotate3d.push(state.rotate3d_y || 0);
            rotate3d.push(state.rotate3d_z || 0);
            rotate3d.push((state.rotate3d_deg || 0) + "deg");
            transform.push("rotate3d(" + rotate3d.join(",") + ")");
            transform.push("rotate(" + (state.rotate == undefined ? .02 + "deg" : state.rotate + "deg") + ")");
            self.canvasDOM.css({
              transform: transform.join(" ")
            })
          }
          self.rootRenderAnimationFunction()(context, state)
        }
      };
      SlideImage.prototype.getAnimationStates = function () {
        var scale_modifier = 1.3;
        var x_translate = Math.floor(this.player.data.size[0] * (scale_modifier - 1) / 2);
        var y_translate = Math.floor(this.player.data.size[1] * (scale_modifier - 1) / 2);
        var slide_animations = {
          none: {
            0: {},
            100: {}
          },
          zoomIn: {
            0: {
              scale: 1.05
            },
            100: {
              scale: scale_modifier
            }
          },
          zoomInRotate: {
            0: {
              scale: 1.05,
              rotate: 0
            },
            100: {
              scale: scale_modifier,
              rotate: 5
            }
          },
          zoomInLeftTop: {
            0: {
              scale: 1.05,
              translate3d_x: 0,
              translate3d_y: 0,
              translate3d_z: 0
            },
            100: {
              scale: scale_modifier,
              translate3d_x: x_translate,
              translate3d_y: y_translate,
              translate3d_z: 0
            }
          },
          zoomInRightTop: {
            0: {
              scale: 1.05,
              translate3d_x: 0,
              translate3d_y: 0,
              translate3d_z: 0
            },
            100: {
              scale: scale_modifier,
              translate3d_x: -x_translate,
              translate3d_y: y_translate,
              translate3d_z: 0
            }
          },
          zoomInLeftBottom: {
            0: {
              scale: 1.05,
              translate3d_x: 0,
              translate3d_y: 0,
              translate3d_z: 0
            },
            100: {
              scale: scale_modifier,
              translate3d_x: x_translate,
              translate3d_y: -y_translate,
              translate3d_z: 0
            }
          },
          zoomInRightBottom: {
            0: {
              scale: 1.05,
              translate3d_x: 0,
              translate3d_y: 0,
              translate3d_z: 0
            },
            100: {
              scale: scale_modifier,
              translate3d_x: -x_translate,
              translate3d_y: -y_translate,
              translate3d_z: 0
            }
          },
          zoomOut: {
            0: {
              scale: scale_modifier
            },
            100: {
              scale: 1
            }
          },
          moveLeft: {
            0: {
              scale: scale_modifier,
              translate3d_x: 0
            },
            100: {
              scale: scale_modifier,
              translate3d_x: x_translate
            }
          },
          moveRight: {
            0: {
              scale: scale_modifier,
              translate3d_x: 0
            },
            100: {
              scale: scale_modifier,
              translate3d_x: -x_translate
            }
          },
          moveUp: {
            0: {
              scale: scale_modifier,
              translate3d_y: 0
            },
            100: {
              scale: scale_modifier,
              translate3d_y: y_translate
            }
          },
          moveDown: {
            0: {
              scale: scale_modifier,
              translate3d_y: 0
            },
            100: {
              scale: scale_modifier,
              translate3d_y: -y_translate
            }
          }
        };
        return slide_animations[this.data.animation]
      };
      return SlideImage
    }(Slide_1.Slide);
    exports.SlideImage = SlideImage
  }, function (module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Image_1 = __webpack_require__(25);
    var Video_1 = __webpack_require__(17);
    var Color_1 = __webpack_require__(16);
    var Shared_1 = __webpack_require__(15);
    var SlideFactory = function () {
      function SlideFactory() {
      }

      SlideFactory.create = function (player, index) {
        if (player.data.slides[index].source == "image") {
          return new Image_1.SlideImage(player, index)
        }
        if (player.data.slides[index].source == "video") {
          return new Video_1.SlideVideo(player, index)
        }
        if (player.data.slides[index].source == "color") {
          return new Color_1.SlideColor(player, index)
        }
        if (player.data.slides[index].type == "shared") {
          return new Shared_1.SlideShared(player, index)
        }
      };
      return SlideFactory
    }();
    exports.SlideFactory = SlideFactory
  }, function (module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var $ = __webpack_require__(0);
    var Factory_1 = __webpack_require__(26);
    var Sound_1 = __webpack_require__(14);
    var Timeline_1 = __webpack_require__(13);
    var Utils_1 = __webpack_require__(8);
    var deep_object_diff_1 = __webpack_require__(11);
    var Player = function () {
      function Player(context, data, options) {
        if (options === void 0) {
          options = {}
        }
        Player.prototype.font_urls_loaded = [];
        Player.prototype.stopPosition = null;
        Player.prototype._events = {
          init: [],
          load: [],
          loadError: [],
          dataUpdate: [],
          positionUpdate: [],
          volumeUpdate: [],
          playStateChange: [],
          animationLooped: [],
          animationComplete: []
        };
        Player.prototype.context = context;
        Player.prototype.timeline = new Timeline_1.Timeline(Player.prototype.context);
        Player.prototype.data = Utils_1.Utils.clone(data);
        Player.prototype.init.bind(Player.prototype, [options, true])();
        Player.prototype._stopPositionMonitor.bind(Player.prototype)();
      }

      Player.prototype.init = function (options, first_run) {
        if (options === void 0) {
          options = {}
        }
        if (first_run === void 0) {
          first_run = false
        }
        var self = this;
        this.pause();
        this.options = {
          watermark_path: "",
          watermark: false,
          background_slides: true,
          shared_slides: true,
          transitions: true,
          sounds: true,
          video_backgrounds: true,
          fonts_loader: true,
          volume: 1,
          class_prefix: "__aivideo_player__",
          on: {},
          background_image_path_namespace: "",
          background_video_path_namespace: ""
        };
        Object.assign(this.options, options);
        this._destroySounds();
        this.promises = [];
        this.slides = [];
        this.sounds = [];
        this._render();
        this._buildTimeline();
        if (this.options.sounds && this.data.sounds && this.data.sounds.length > 0) this._addSounds();
        this.setVolume(this.options.volume);
        if (first_run) {
          this._setEvents();
          this.fireEvent(this, "init")
        }
        return this
      };
      Player.prototype._render = function () {
        $(this.context).html("");
        this.slides_container = $("<div class='" + this.options.class_prefix + "slides'></div>").appendTo($(this.context));
        this._renderSlides();
        this._renderWatermark();
        this._stylePlayer()
      };
      Player.prototype._renderSlides = function () {
        for (var slide_index in this.data.slides) {
          if (!this.options.transitions) this.data.slides[slide_index].transition_animation = "none";
          var slide = Factory_1.SlideFactory.create(this, slide_index);
          this.slides.push(slide);
          this.promises = this.promises.concat(slide.promises)
        }
        if (!this.options.background_slides || !this.options.shared_slides) {
          this.slides_container.css({
            display: "none"
          })
        }
      };
      Player.prototype._renderWatermark = function () {
        this.watermark_container = $("<div class='" + this.options.class_prefix + "watermark'></div>").appendTo($(this.context));
        $('<img src="' + this.options.watermark_path + '">').appendTo(this.watermark_container)
      };
      Player.prototype._loader = function (promises, success_callback, error_callback) {
        var self = this;
        Promise.all(promises).then(function () {
          success_callback()
        }).catch(function (error) {
          error_callback(error)
        })
      };
      Player.prototype._buildTimeline = function () {
        this.timeline.slide_bounds = [];
        var last_time = this.timeline.rekapi.getLastMillisecondUpdated();
        this.timeline.rekapi.removeAllActors();
        this.timeline.setSlides(this.slides);
        this.timeline.rekapi.update(last_time || 1)
      };
      Player.prototype._setEvents = function () {
        var self = this;
        for (var _i = 0, _a = this.timeline.rekapi.getEventNames(); _i < _a.length; _i++) {
          var eventname = _a[_i];
          this.timeline.rekapi.off(eventname)
        }
        this._loader(this.promises, function () {
          self.fireEvent(self, "load")
        }, function (error) {
          self.fireEvent(self, "loadError", error)
        });
        for (var key in this.options.on) {
          this.on(key, this.options.on[key])
        }
        this.timeline.rekapi.on("afterUpdate", function () {
          self.fireEvent(self, "positionUpdate", self.getPosition())
        });
        this.timeline.rekapi.on("playStateChange", function () {
          self.fireEvent(self, "playStateChange", self.isPlaying())
        });
        this.timeline.rekapi.on("animationLooped", function () {
          self.fireEvent(self, "animationLooped")
        });
        this.timeline.rekapi.on("animationComplete", function () {
          self.fireEvent(self, "animationComplete")
        })
      };
      Player.prototype._addSounds = function () {
        this.sounds = [];
        for (var _i = 0, _a = this.data.sounds; _i < _a.length; _i++) {
          var sound = _a[_i];
          var s = new Sound_1.Sound(this, sound);
          this.sounds.push(s);
          this.promises.push(s.promise)
        }
      };
      Player.prototype._destroySounds = function () {
        if (this.sounds && this.sounds.length > 0) {
          for (var _i = 0, _a = this.sounds; _i < _a.length; _i++) {
            var sound = _a[_i];
            sound.destroy()
          }
        }
      };
      Player.prototype._stylePlayer = function () {
        $(this.context).css({
          width: this.data.size[0],
          height: this.data.size[1],
          position: "relative",
          "user-select": "none",
          overflow: "hidden"
        });
        $(this.context).find("*").css({
          "box-sizing": "border-box"
        });
        this.slides_container.css({
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        });
        this.watermark_container.css({
          "z-index": 1e8,
          position: "absolute",
          top: "auto",
          left: "10px",
          opacity: "0.8",
          "max-width": "125px",
          bottom: "5px",
          display: this.options.watermark ? "block" : "none"
        });
        this.watermark_container.find("img").css({
          "max-width": "125px"
        })
      };
      Player.prototype.setData = function (new_data) {
        var self = this;
        this.pause();
        this._smartDataUpdate(new_data);
        this._buildTimeline();
        if (this.getPosition() > this.getDuration()) {
          var index = self.data.slides.slice().reverse().findIndex(function (slide) {
            return slide.type !== "shared"
          });
          var count = self.data.slides.length - 1;
          var last_slide_index = count - index;
          this.setPosition(self.data.slides[last_slide_index].duration / 2)
        }
        this.fireEvent(this, "dataUpdate", new_data);
        this._loader(this.promises, function () {
          self.fireEvent(self, "load")
        }, function (error) {
          self.fireEvent(self, "loadError", error)
        });
        return this
      };
      Player.prototype._smartDataUpdate = function (new_data) {
        var old_data = Utils_1.Utils.clone(this.data);
        this.data = Utils_1.Utils.clone(new_data);
        if (!Utils_1.Utils.isEqual(old_data.sounds, new_data.sounds)) return this.init(this.options);
        if (!Utils_1.Utils.isEqual(old_data.size, new_data.size)) return this.init(this.options);
        if (!Utils_1.Utils.isEqual(old_data.slides, new_data.slides)) {
          if (old_data.slides.length != new_data.slides.length) return this.init(this.options);
          for (var slide_index in old_data.slides) {
            var slide_diff = deep_object_diff_1.diff(old_data.slides[slide_index], new_data.slides[slide_index]);
            if (Object.keys(slide_diff).length > 0) {
              if (Object.keys(slide_diff).length == 1 && Object.keys(slide_diff)[0] == "objects") {
                if (old_data.slides[slide_index].objects.length != new_data.slides[slide_index].objects.length) {
                  this.slides[slide_index].renderSlideObjects()
                } else {
                  for (var slide_object_index in old_data.slides[slide_index].objects) {
                    if (!Utils_1.Utils.isEqual(old_data.slides[slide_index].objects[slide_object_index], new_data.slides[slide_index].objects[slide_object_index])) {
                      if (old_data.slides[slide_index].objects[slide_object_index].type != new_data.slides[slide_index].objects[slide_object_index].type) {
                        this.slides[slide_index].renderSlideObjects()
                      } else {
                        this.slides[slide_index].slide_objects[slide_object_index].init(this.options)
                      }
                    }
                  }
                }
              } else {
                if (Object.keys(slide_diff).indexOf("source") > -1 || Object.keys(slide_diff).indexOf("type") > -1 || Object.keys(slide_diff).indexOf("duration") > -1) {
                  return this.init(this.options)
                } else {
                  this.slides[slide_index].init(this.options)
                }
              }
            }
          }
        }
      };
      Player.prototype._stopPositionMonitor = function () {
        var self = this;
        var prev_position = null;
        this.on("positionUpdate", function (player, position) {
          if (self.stopPosition != null && self.isPlaying() && (position >= self.stopPosition.position || prev_position && prev_position > position)) {
            if (self.stopPosition.redirect) self.setPosition(self.stopPosition.redirect);
            self.pause()
          }
          prev_position = position
        })
      };
      Player.prototype.getData = function () {
        return Utils_1.Utils.clone(this.data)
      };
      Player.prototype.play = function (loops) {
        if (loops === void 0) {
          loops = -1
        }
        this.stopPosition = null;
        this.timeline.rekapi.playFromCurrent(loops);
        return this
      };
      Player.prototype.playRange = function (from, to, redirect) {
        if (redirect === void 0) {
          redirect = null
        }
        this.setPosition(from);
        this.play();
        this.stopPosition = {
          position: to,
          redirect: !redirect ? from : redirect
        };
        return this
      };
      Player.prototype.pause = function () {
        this.stopPosition = null;
        this.timeline.rekapi.pause();
        return this
      };
      Player.prototype.setPosition = function (time) {
        this.stopPosition = null;
        this.timeline.rekapi.update(time);
        return this
      };
      Player.prototype.isPlaying = function () {
        return this.timeline.rekapi.isPlaying()
      };
      Player.prototype.getDuration = function () {
        return parseInt(this.timeline.rekapi.getAnimationLength())
      };
      Player.prototype.getPosition = function () {
        return this.timeline.rekapi.getLastMillisecondUpdated()
      };
      Player.prototype.setVolume = function (value) {
        this.options.volume = value;
        this.fireEvent(this, "volumeUpdate", value);
        return this
      };
      Player.prototype.getVolume = function () {
        return this.options.volume
      };
      Player.prototype.mute = function () {
        this.setVolume(0);
        return this
      };
      Player.prototype.on = function (eventName, handler) {
        if (!this._events[eventName]) {
          return this
        }
        this._events[eventName].push(handler);
        return this
      };
      Player.prototype.trigger = function (eventName, data) {
        this.fireEvent(this, eventName, data);
        return this
      };
      Player.prototype.fireEvent = function (player, eventName, data) {
        var _this = this;
        if (data === void 0) {
          data = {}
        }
        player._events[eventName].forEach(function (handler) {
          return handler(_this, data)
        })
      };
      Player.prototype.off = function (eventName, handler) {
        if (handler === void 0) {
          handler = null
        }
        if (!this._events[eventName]) {
          return this
        }
        this._events[eventName] = handler ? Utils_1.Utils.without(this._events[eventName], handler) : [];
        return this
      };
      Player.prototype.getEventNames = function () {
        return Object.keys(this._events)
      };
      Player.prototype.getSlidesBounds = function () {
        return this.timeline.slides_bounds
      };
      return Player
    }();
    exports.Player = Player
  }, function (module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Player_1 = __webpack_require__(27);
    var AivideoPlayer = Player_1.Player;
    exports.AivideoPlayer = AivideoPlayer
  }])
});
