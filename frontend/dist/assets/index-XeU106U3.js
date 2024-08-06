var Cy = Object.defineProperty;
var Ty = (e, t, n) =>
  t in e
    ? Cy(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var A = (e, t, n) => (Ty(e, typeof t != "symbol" ? t + "" : t, n), n);
function Ey(e, t) {
  for (var n = 0; n < t.length; n++) {
    const i = t[n];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const r in i)
        if (r !== "default" && !(r in e)) {
          const s = Object.getOwnPropertyDescriptor(i, r);
          s &&
            Object.defineProperty(
              e,
              r,
              s.get ? s : { enumerable: !0, get: () => i[r] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r);
  new MutationObserver((r) => {
    for (const s of r)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && i(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const s = {};
    return (
      r.integrity && (s.integrity = r.integrity),
      r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function i(r) {
    if (r.ep) return;
    r.ep = !0;
    const s = n(r);
    fetch(r.href, s);
  }
})();
var Ro =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Ap(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Dp = { exports: {} },
  Sa = {},
  Ip = { exports: {} },
  U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ms = Symbol.for("react.element"),
  Py = Symbol.for("react.portal"),
  My = Symbol.for("react.fragment"),
  Oy = Symbol.for("react.strict_mode"),
  Ry = Symbol.for("react.profiler"),
  jy = Symbol.for("react.provider"),
  Ly = Symbol.for("react.context"),
  Ay = Symbol.for("react.forward_ref"),
  Dy = Symbol.for("react.suspense"),
  Iy = Symbol.for("react.memo"),
  Ny = Symbol.for("react.lazy"),
  Nd = Symbol.iterator;
function Fy(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Nd && e[Nd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Np = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Fp = Object.assign,
  zp = {};
function Ji(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = zp),
    (this.updater = n || Np);
}
Ji.prototype.isReactComponent = {};
Ji.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ji.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Bp() {}
Bp.prototype = Ji.prototype;
function oc(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = zp),
    (this.updater = n || Np);
}
var ac = (oc.prototype = new Bp());
ac.constructor = oc;
Fp(ac, Ji.prototype);
ac.isPureReactComponent = !0;
var Fd = Array.isArray,
  Wp = Object.prototype.hasOwnProperty,
  lc = { current: null },
  $p = { key: !0, ref: !0, __self: !0, __source: !0 };
function Hp(e, t, n) {
  var i,
    r = {},
    s = null,
    o = null;
  if (t != null)
    for (i in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Wp.call(t, i) && !$p.hasOwnProperty(i) && (r[i] = t[i]);
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  if (e && e.defaultProps)
    for (i in ((a = e.defaultProps), a)) r[i] === void 0 && (r[i] = a[i]);
  return {
    $$typeof: ms,
    type: e,
    key: s,
    ref: o,
    props: r,
    _owner: lc.current,
  };
}
function zy(e, t) {
  return {
    $$typeof: ms,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function uc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ms;
}
function By(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var zd = /\/+/g;
function tl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? By("" + e.key)
    : t.toString(36);
}
function uo(e, t, n, i, r) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ms:
          case Py:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (r = r(o)),
      (e = i === "" ? "." + tl(o, 0) : i),
      Fd(r)
        ? ((n = ""),
          e != null && (n = e.replace(zd, "$&/") + "/"),
          uo(r, t, n, "", function (u) {
            return u;
          }))
        : r != null &&
          (uc(r) &&
            (r = zy(
              r,
              n +
                (!r.key || (o && o.key === r.key)
                  ? ""
                  : ("" + r.key).replace(zd, "$&/") + "/") +
                e
            )),
          t.push(r)),
      1
    );
  if (((o = 0), (i = i === "" ? "." : i + ":"), Fd(e)))
    for (var a = 0; a < e.length; a++) {
      s = e[a];
      var l = i + tl(s, a);
      o += uo(s, t, n, l, r);
    }
  else if (((l = Fy(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(s = e.next()).done; )
      (s = s.value), (l = i + tl(s, a++)), (o += uo(s, t, n, l, r));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Ts(e, t, n) {
  if (e == null) return e;
  var i = [],
    r = 0;
  return (
    uo(e, i, "", "", function (s) {
      return t.call(n, s, r++);
    }),
    i
  );
}
function Wy(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Xe = { current: null },
  co = { transition: null },
  $y = {
    ReactCurrentDispatcher: Xe,
    ReactCurrentBatchConfig: co,
    ReactCurrentOwner: lc,
  };
U.Children = {
  map: Ts,
  forEach: function (e, t, n) {
    Ts(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ts(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ts(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!uc(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
U.Component = Ji;
U.Fragment = My;
U.Profiler = Ry;
U.PureComponent = oc;
U.StrictMode = Oy;
U.Suspense = Dy;
U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $y;
U.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var i = Fp({}, e.props),
    r = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = lc.current)),
      t.key !== void 0 && (r = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Wp.call(t, l) &&
        !$p.hasOwnProperty(l) &&
        (i[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  return { $$typeof: ms, type: e.type, key: r, ref: s, props: i, _owner: o };
};
U.createContext = function (e) {
  return (
    (e = {
      $$typeof: Ly,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: jy, _context: e }),
    (e.Consumer = e)
  );
};
U.createElement = Hp;
U.createFactory = function (e) {
  var t = Hp.bind(null, e);
  return (t.type = e), t;
};
U.createRef = function () {
  return { current: null };
};
U.forwardRef = function (e) {
  return { $$typeof: Ay, render: e };
};
U.isValidElement = uc;
U.lazy = function (e) {
  return { $$typeof: Ny, _payload: { _status: -1, _result: e }, _init: Wy };
};
U.memo = function (e, t) {
  return { $$typeof: Iy, type: e, compare: t === void 0 ? null : t };
};
U.startTransition = function (e) {
  var t = co.transition;
  co.transition = {};
  try {
    e();
  } finally {
    co.transition = t;
  }
};
U.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
U.useCallback = function (e, t) {
  return Xe.current.useCallback(e, t);
};
U.useContext = function (e) {
  return Xe.current.useContext(e);
};
U.useDebugValue = function () {};
U.useDeferredValue = function (e) {
  return Xe.current.useDeferredValue(e);
};
U.useEffect = function (e, t) {
  return Xe.current.useEffect(e, t);
};
U.useId = function () {
  return Xe.current.useId();
};
U.useImperativeHandle = function (e, t, n) {
  return Xe.current.useImperativeHandle(e, t, n);
};
U.useInsertionEffect = function (e, t) {
  return Xe.current.useInsertionEffect(e, t);
};
U.useLayoutEffect = function (e, t) {
  return Xe.current.useLayoutEffect(e, t);
};
U.useMemo = function (e, t) {
  return Xe.current.useMemo(e, t);
};
U.useReducer = function (e, t, n) {
  return Xe.current.useReducer(e, t, n);
};
U.useRef = function (e) {
  return Xe.current.useRef(e);
};
U.useState = function (e) {
  return Xe.current.useState(e);
};
U.useSyncExternalStore = function (e, t, n) {
  return Xe.current.useSyncExternalStore(e, t, n);
};
U.useTransition = function () {
  return Xe.current.useTransition();
};
U.version = "18.2.0";
Ip.exports = U;
var b = Ip.exports;
const Tt = Ap(b),
  Hy = Ey({ __proto__: null, default: Tt }, [b]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Uy = b,
  Vy = Symbol.for("react.element"),
  Yy = Symbol.for("react.fragment"),
  Xy = Object.prototype.hasOwnProperty,
  Ky = Uy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Gy = { key: !0, ref: !0, __self: !0, __source: !0 };
function Up(e, t, n) {
  var i,
    r = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (i in t) Xy.call(t, i) && !Gy.hasOwnProperty(i) && (r[i] = t[i]);
  if (e && e.defaultProps)
    for (i in ((t = e.defaultProps), t)) r[i] === void 0 && (r[i] = t[i]);
  return {
    $$typeof: Vy,
    type: e,
    key: s,
    ref: o,
    props: r,
    _owner: Ky.current,
  };
}
Sa.Fragment = Yy;
Sa.jsx = Up;
Sa.jsxs = Up;
Dp.exports = Sa;
var g = Dp.exports,
  Hl = {},
  Vp = { exports: {} },
  ct = {},
  Yp = { exports: {} },
  Xp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, L) {
    var F = M.length;
    M.push(L);
    e: for (; 0 < F; ) {
      var q = (F - 1) >>> 1,
        Z = M[q];
      if (0 < r(Z, L)) (M[q] = L), (M[F] = Z), (F = q);
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function i(M) {
    if (M.length === 0) return null;
    var L = M[0],
      F = M.pop();
    if (F !== L) {
      M[0] = F;
      e: for (var q = 0, Z = M.length, Ge = Z >>> 1; q < Ge; ) {
        var be = 2 * (q + 1) - 1,
          W = M[be],
          B = be + 1,
          I = M[B];
        if (0 > r(W, F))
          B < Z && 0 > r(I, W)
            ? ((M[q] = I), (M[B] = F), (q = B))
            : ((M[q] = W), (M[be] = F), (q = be));
        else if (B < Z && 0 > r(I, F)) (M[q] = I), (M[B] = F), (q = B);
        else break e;
      }
    }
    return L;
  }
  function r(M, L) {
    var F = M.sortIndex - L.sortIndex;
    return F !== 0 ? F : M.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    h = 3,
    f = !1,
    p = !1,
    y = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    v = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(M) {
    for (var L = n(u); L !== null; ) {
      if (L.callback === null) i(u);
      else if (L.startTime <= M)
        i(u), (L.sortIndex = L.expirationTime), t(l, L);
      else break;
      L = n(u);
    }
  }
  function _(M) {
    if (((y = !1), x(M), !p))
      if (n(l) !== null) (p = !0), X(S);
      else {
        var L = n(u);
        L !== null && Q(_, L.startTime - M);
      }
  }
  function S(M, L) {
    (p = !1), y && ((y = !1), m(T), (T = -1)), (f = !0);
    var F = h;
    try {
      for (
        x(L), d = n(l);
        d !== null && (!(d.expirationTime > L) || (M && !D()));

      ) {
        var q = d.callback;
        if (typeof q == "function") {
          (d.callback = null), (h = d.priorityLevel);
          var Z = q(d.expirationTime <= L);
          (L = e.unstable_now()),
            typeof Z == "function" ? (d.callback = Z) : d === n(l) && i(l),
            x(L);
        } else i(l);
        d = n(l);
      }
      if (d !== null) var Ge = !0;
      else {
        var be = n(u);
        be !== null && Q(_, be.startTime - L), (Ge = !1);
      }
      return Ge;
    } finally {
      (d = null), (h = F), (f = !1);
    }
  }
  var k = !1,
    C = null,
    T = -1,
    R = 5,
    O = -1;
  function D() {
    return !(e.unstable_now() - O < R);
  }
  function z() {
    if (C !== null) {
      var M = e.unstable_now();
      O = M;
      var L = !0;
      try {
        L = C(!0, M);
      } finally {
        L ? J() : ((k = !1), (C = null));
      }
    } else k = !1;
  }
  var J;
  if (typeof v == "function")
    J = function () {
      v(z);
    };
  else if (typeof MessageChannel < "u") {
    var ye = new MessageChannel(),
      H = ye.port2;
    (ye.port1.onmessage = z),
      (J = function () {
        H.postMessage(null);
      });
  } else
    J = function () {
      w(z, 0);
    };
  function X(M) {
    (C = M), k || ((k = !0), J());
  }
  function Q(M, L) {
    T = w(function () {
      M(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      p || f || ((p = !0), X(S));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (R = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (M) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = h;
      }
      var F = h;
      h = L;
      try {
        return M();
      } finally {
        h = F;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, L) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var F = h;
      h = M;
      try {
        return L();
      } finally {
        h = F;
      }
    }),
    (e.unstable_scheduleCallback = function (M, L, F) {
      var q = e.unstable_now();
      switch (
        (typeof F == "object" && F !== null
          ? ((F = F.delay), (F = typeof F == "number" && 0 < F ? q + F : q))
          : (F = q),
        M)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = F + Z),
        (M = {
          id: c++,
          callback: L,
          priorityLevel: M,
          startTime: F,
          expirationTime: Z,
          sortIndex: -1,
        }),
        F > q
          ? ((M.sortIndex = F),
            t(u, M),
            n(l) === null &&
              M === n(u) &&
              (y ? (m(T), (T = -1)) : (y = !0), Q(_, F - q)))
          : ((M.sortIndex = Z), t(l, M), p || f || ((p = !0), X(S))),
        M
      );
    }),
    (e.unstable_shouldYield = D),
    (e.unstable_wrapCallback = function (M) {
      var L = h;
      return function () {
        var F = h;
        h = L;
        try {
          return M.apply(this, arguments);
        } finally {
          h = F;
        }
      };
    });
})(Xp);
Yp.exports = Xp;
var Qy = Yp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Kp = b,
  ut = Qy;
function P(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Gp = new Set(),
  Ur = {};
function ci(e, t) {
  Wi(e, t), Wi(e + "Capture", t);
}
function Wi(e, t) {
  for (Ur[e] = t, e = 0; e < t.length; e++) Gp.add(t[e]);
}
var en = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ul = Object.prototype.hasOwnProperty,
  qy =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Bd = {},
  Wd = {};
function Jy(e) {
  return Ul.call(Wd, e)
    ? !0
    : Ul.call(Bd, e)
    ? !1
    : qy.test(e)
    ? (Wd[e] = !0)
    : ((Bd[e] = !0), !1);
}
function Zy(e, t, n, i) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return i
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function ev(e, t, n, i) {
  if (t === null || typeof t > "u" || Zy(e, t, n, i)) return !0;
  if (i) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ke(e, t, n, i, r, s, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = i),
    (this.attributeNamespace = r),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var Ie = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ie[e] = new Ke(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ie[t] = new Ke(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ie[e] = new Ke(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ie[e] = new Ke(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ie[e] = new Ke(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ie[e] = new Ke(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ie[e] = new Ke(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ie[e] = new Ke(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ie[e] = new Ke(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var cc = /[\-:]([a-z])/g;
function dc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(cc, dc);
    Ie[t] = new Ke(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(cc, dc);
    Ie[t] = new Ke(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(cc, dc);
  Ie[t] = new Ke(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ie[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ie.xlinkHref = new Ke(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ie[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function hc(e, t, n, i) {
  var r = Ie.hasOwnProperty(t) ? Ie[t] : null;
  (r !== null
    ? r.type !== 0
    : i ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (ev(t, n, r, i) && (n = null),
    i || r === null
      ? Jy(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : r.mustUseProperty
      ? (e[r.propertyName] = n === null ? (r.type === 3 ? !1 : "") : n)
      : ((t = r.attributeName),
        (i = r.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((r = r.type),
            (n = r === 3 || (r === 4 && n === !0) ? "" : "" + n),
            i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))));
}
var on = Kp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Es = Symbol.for("react.element"),
  xi = Symbol.for("react.portal"),
  wi = Symbol.for("react.fragment"),
  fc = Symbol.for("react.strict_mode"),
  Vl = Symbol.for("react.profiler"),
  Qp = Symbol.for("react.provider"),
  qp = Symbol.for("react.context"),
  pc = Symbol.for("react.forward_ref"),
  Yl = Symbol.for("react.suspense"),
  Xl = Symbol.for("react.suspense_list"),
  gc = Symbol.for("react.memo"),
  hn = Symbol.for("react.lazy"),
  Jp = Symbol.for("react.offscreen"),
  $d = Symbol.iterator;
function sr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = ($d && e[$d]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var pe = Object.assign,
  nl;
function wr(e) {
  if (nl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      nl = (t && t[1]) || "";
    }
  return (
    `
` +
    nl +
    e
  );
}
var il = !1;
function rl(e, t) {
  if (!e || il) return "";
  il = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var i = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          i = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        i = u;
      }
      e();
    }
  } catch (u) {
    if (u && i && typeof u.stack == "string") {
      for (
        var r = u.stack.split(`
`),
          s = i.stack.split(`
`),
          o = r.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && r[o] !== s[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (r[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || r[o] !== s[a])) {
                var l =
                  `
` + r[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (il = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? wr(e) : "";
}
function tv(e) {
  switch (e.tag) {
    case 5:
      return wr(e.type);
    case 16:
      return wr("Lazy");
    case 13:
      return wr("Suspense");
    case 19:
      return wr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = rl(e.type, !1)), e;
    case 11:
      return (e = rl(e.type.render, !1)), e;
    case 1:
      return (e = rl(e.type, !0)), e;
    default:
      return "";
  }
}
function Kl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case wi:
      return "Fragment";
    case xi:
      return "Portal";
    case Vl:
      return "Profiler";
    case fc:
      return "StrictMode";
    case Yl:
      return "Suspense";
    case Xl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case qp:
        return (e.displayName || "Context") + ".Consumer";
      case Qp:
        return (e._context.displayName || "Context") + ".Provider";
      case pc:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case gc:
        return (
          (t = e.displayName || null), t !== null ? t : Kl(e.type) || "Memo"
        );
      case hn:
        (t = e._payload), (e = e._init);
        try {
          return Kl(e(t));
        } catch {}
    }
  return null;
}
function nv(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Kl(t);
    case 8:
      return t === fc ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function jn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Zp(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function iv(e) {
  var t = Zp(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    i = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var r = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return r.call(this);
        },
        set: function (o) {
          (i = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return i;
        },
        setValue: function (o) {
          i = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ps(e) {
  e._valueTracker || (e._valueTracker = iv(e));
}
function eg(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    i = "";
  return (
    e && (i = Zp(e) ? (e.checked ? "true" : "false") : e.value),
    (e = i),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function jo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Gl(e, t) {
  var n = t.checked;
  return pe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Hd(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    i = t.checked != null ? t.checked : t.defaultChecked;
  (n = jn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: i,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function tg(e, t) {
  (t = t.checked), t != null && hc(e, "checked", t, !1);
}
function Ql(e, t) {
  tg(e, t);
  var n = jn(t.value),
    i = t.type;
  if (n != null)
    i === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (i === "submit" || i === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ql(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ql(e, t.type, jn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ud(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var i = t.type;
    if (
      !(
        (i !== "submit" && i !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ql(e, t, n) {
  (t !== "number" || jo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var _r = Array.isArray;
function ji(e, t, n, i) {
  if (((e = e.options), t)) {
    t = {};
    for (var r = 0; r < n.length; r++) t["$" + n[r]] = !0;
    for (n = 0; n < e.length; n++)
      (r = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== r && (e[n].selected = r),
        r && i && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + jn(n), t = null, r = 0; r < e.length; r++) {
      if (e[r].value === n) {
        (e[r].selected = !0), i && (e[r].defaultSelected = !0);
        return;
      }
      t !== null || e[r].disabled || (t = e[r]);
    }
    t !== null && (t.selected = !0);
  }
}
function Jl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
  return pe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Vd(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(P(92));
      if (_r(n)) {
        if (1 < n.length) throw Error(P(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: jn(n) };
}
function ng(e, t) {
  var n = jn(t.value),
    i = jn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    i != null && (e.defaultValue = "" + i);
}
function Yd(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ig(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Zl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ig(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ms,
  rg = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, i, r) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, i, r);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ms = Ms || document.createElement("div"),
          Ms.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ms.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Vr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Or = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  rv = ["Webkit", "ms", "Moz", "O"];
Object.keys(Or).forEach(function (e) {
  rv.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Or[t] = Or[e]);
  });
});
function sg(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Or.hasOwnProperty(e) && Or[e])
    ? ("" + t).trim()
    : t + "px";
}
function og(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var i = n.indexOf("--") === 0,
        r = sg(n, t[n], i);
      n === "float" && (n = "cssFloat"), i ? e.setProperty(n, r) : (e[n] = r);
    }
}
var sv = pe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function eu(e, t) {
  if (t) {
    if (sv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(P(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(P(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(P(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(P(62));
  }
}
function tu(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var nu = null;
function mc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var iu = null,
  Li = null,
  Ai = null;
function Xd(e) {
  if ((e = xs(e))) {
    if (typeof iu != "function") throw Error(P(280));
    var t = e.stateNode;
    t && ((t = Ea(t)), iu(e.stateNode, e.type, t));
  }
}
function ag(e) {
  Li ? (Ai ? Ai.push(e) : (Ai = [e])) : (Li = e);
}
function lg() {
  if (Li) {
    var e = Li,
      t = Ai;
    if (((Ai = Li = null), Xd(e), t)) for (e = 0; e < t.length; e++) Xd(t[e]);
  }
}
function ug(e, t) {
  return e(t);
}
function cg() {}
var sl = !1;
function dg(e, t, n) {
  if (sl) return e(t, n);
  sl = !0;
  try {
    return ug(e, t, n);
  } finally {
    (sl = !1), (Li !== null || Ai !== null) && (cg(), lg());
  }
}
function Yr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var i = Ea(n);
  if (i === null) return null;
  n = i[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (i = !i.disabled) ||
        ((e = e.type),
        (i = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !i);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(P(231, t, typeof n));
  return n;
}
var ru = !1;
if (en)
  try {
    var or = {};
    Object.defineProperty(or, "passive", {
      get: function () {
        ru = !0;
      },
    }),
      window.addEventListener("test", or, or),
      window.removeEventListener("test", or, or);
  } catch {
    ru = !1;
  }
function ov(e, t, n, i, r, s, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Rr = !1,
  Lo = null,
  Ao = !1,
  su = null,
  av = {
    onError: function (e) {
      (Rr = !0), (Lo = e);
    },
  };
function lv(e, t, n, i, r, s, o, a, l) {
  (Rr = !1), (Lo = null), ov.apply(av, arguments);
}
function uv(e, t, n, i, r, s, o, a, l) {
  if ((lv.apply(this, arguments), Rr)) {
    if (Rr) {
      var u = Lo;
      (Rr = !1), (Lo = null);
    } else throw Error(P(198));
    Ao || ((Ao = !0), (su = u));
  }
}
function di(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function hg(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Kd(e) {
  if (di(e) !== e) throw Error(P(188));
}
function cv(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = di(e)), t === null)) throw Error(P(188));
    return t !== e ? null : e;
  }
  for (var n = e, i = t; ; ) {
    var r = n.return;
    if (r === null) break;
    var s = r.alternate;
    if (s === null) {
      if (((i = r.return), i !== null)) {
        n = i;
        continue;
      }
      break;
    }
    if (r.child === s.child) {
      for (s = r.child; s; ) {
        if (s === n) return Kd(r), e;
        if (s === i) return Kd(r), t;
        s = s.sibling;
      }
      throw Error(P(188));
    }
    if (n.return !== i.return) (n = r), (i = s);
    else {
      for (var o = !1, a = r.child; a; ) {
        if (a === n) {
          (o = !0), (n = r), (i = s);
          break;
        }
        if (a === i) {
          (o = !0), (i = r), (n = s);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            (o = !0), (n = s), (i = r);
            break;
          }
          if (a === i) {
            (o = !0), (i = s), (n = r);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(P(189));
      }
    }
    if (n.alternate !== i) throw Error(P(190));
  }
  if (n.tag !== 3) throw Error(P(188));
  return n.stateNode.current === n ? e : t;
}
function fg(e) {
  return (e = cv(e)), e !== null ? pg(e) : null;
}
function pg(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = pg(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var gg = ut.unstable_scheduleCallback,
  Gd = ut.unstable_cancelCallback,
  dv = ut.unstable_shouldYield,
  hv = ut.unstable_requestPaint,
  xe = ut.unstable_now,
  fv = ut.unstable_getCurrentPriorityLevel,
  yc = ut.unstable_ImmediatePriority,
  mg = ut.unstable_UserBlockingPriority,
  Do = ut.unstable_NormalPriority,
  pv = ut.unstable_LowPriority,
  yg = ut.unstable_IdlePriority,
  ba = null,
  zt = null;
function gv(e) {
  if (zt && typeof zt.onCommitFiberRoot == "function")
    try {
      zt.onCommitFiberRoot(ba, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Et = Math.clz32 ? Math.clz32 : vv,
  mv = Math.log,
  yv = Math.LN2;
function vv(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((mv(e) / yv) | 0)) | 0;
}
var Os = 64,
  Rs = 4194304;
function Sr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Io(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var i = 0,
    r = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~r;
    a !== 0 ? (i = Sr(a)) : ((s &= o), s !== 0 && (i = Sr(s)));
  } else (o = n & ~r), o !== 0 ? (i = Sr(o)) : s !== 0 && (i = Sr(s));
  if (i === 0) return 0;
  if (
    t !== 0 &&
    t !== i &&
    !(t & r) &&
    ((r = i & -i), (s = t & -t), r >= s || (r === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((i & 4 && (i |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= i; 0 < t; )
      (n = 31 - Et(t)), (r = 1 << n), (i |= e[n]), (t &= ~r);
  return i;
}
function xv(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wv(e, t) {
  for (
    var n = e.suspendedLanes,
      i = e.pingedLanes,
      r = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var o = 31 - Et(s),
      a = 1 << o,
      l = r[o];
    l === -1
      ? (!(a & n) || a & i) && (r[o] = xv(a, t))
      : l <= t && (e.expiredLanes |= a),
      (s &= ~a);
  }
}
function ou(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function vg() {
  var e = Os;
  return (Os <<= 1), !(Os & 4194240) && (Os = 64), e;
}
function ol(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ys(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Et(t)),
    (e[t] = n);
}
function _v(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var i = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var r = 31 - Et(n),
      s = 1 << r;
    (t[r] = 0), (i[r] = -1), (e[r] = -1), (n &= ~s);
  }
}
function vc(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var i = 31 - Et(n),
      r = 1 << i;
    (r & t) | (e[i] & t) && (e[i] |= t), (n &= ~r);
  }
}
var te = 0;
function xg(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var wg,
  xc,
  _g,
  Sg,
  bg,
  au = !1,
  js = [],
  Sn = null,
  bn = null,
  kn = null,
  Xr = new Map(),
  Kr = new Map(),
  pn = [],
  Sv =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Qd(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Sn = null;
      break;
    case "dragenter":
    case "dragleave":
      bn = null;
      break;
    case "mouseover":
    case "mouseout":
      kn = null;
      break;
    case "pointerover":
    case "pointerout":
      Xr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Kr.delete(t.pointerId);
  }
}
function ar(e, t, n, i, r, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: i,
        nativeEvent: s,
        targetContainers: [r],
      }),
      t !== null && ((t = xs(t)), t !== null && xc(t)),
      e)
    : ((e.eventSystemFlags |= i),
      (t = e.targetContainers),
      r !== null && t.indexOf(r) === -1 && t.push(r),
      e);
}
function bv(e, t, n, i, r) {
  switch (t) {
    case "focusin":
      return (Sn = ar(Sn, e, t, n, i, r)), !0;
    case "dragenter":
      return (bn = ar(bn, e, t, n, i, r)), !0;
    case "mouseover":
      return (kn = ar(kn, e, t, n, i, r)), !0;
    case "pointerover":
      var s = r.pointerId;
      return Xr.set(s, ar(Xr.get(s) || null, e, t, n, i, r)), !0;
    case "gotpointercapture":
      return (
        (s = r.pointerId), Kr.set(s, ar(Kr.get(s) || null, e, t, n, i, r)), !0
      );
  }
  return !1;
}
function kg(e) {
  var t = qn(e.target);
  if (t !== null) {
    var n = di(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = hg(n)), t !== null)) {
          (e.blockedOn = t),
            bg(e.priority, function () {
              _g(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ho(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = lu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var i = new n.constructor(n.type, n);
      (nu = i), n.target.dispatchEvent(i), (nu = null);
    } else return (t = xs(n)), t !== null && xc(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function qd(e, t, n) {
  ho(e) && n.delete(t);
}
function kv() {
  (au = !1),
    Sn !== null && ho(Sn) && (Sn = null),
    bn !== null && ho(bn) && (bn = null),
    kn !== null && ho(kn) && (kn = null),
    Xr.forEach(qd),
    Kr.forEach(qd);
}
function lr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    au ||
      ((au = !0),
      ut.unstable_scheduleCallback(ut.unstable_NormalPriority, kv)));
}
function Gr(e) {
  function t(r) {
    return lr(r, e);
  }
  if (0 < js.length) {
    lr(js[0], e);
    for (var n = 1; n < js.length; n++) {
      var i = js[n];
      i.blockedOn === e && (i.blockedOn = null);
    }
  }
  for (
    Sn !== null && lr(Sn, e),
      bn !== null && lr(bn, e),
      kn !== null && lr(kn, e),
      Xr.forEach(t),
      Kr.forEach(t),
      n = 0;
    n < pn.length;
    n++
  )
    (i = pn[n]), i.blockedOn === e && (i.blockedOn = null);
  for (; 0 < pn.length && ((n = pn[0]), n.blockedOn === null); )
    kg(n), n.blockedOn === null && pn.shift();
}
var Di = on.ReactCurrentBatchConfig,
  No = !0;
function Cv(e, t, n, i) {
  var r = te,
    s = Di.transition;
  Di.transition = null;
  try {
    (te = 1), wc(e, t, n, i);
  } finally {
    (te = r), (Di.transition = s);
  }
}
function Tv(e, t, n, i) {
  var r = te,
    s = Di.transition;
  Di.transition = null;
  try {
    (te = 4), wc(e, t, n, i);
  } finally {
    (te = r), (Di.transition = s);
  }
}
function wc(e, t, n, i) {
  if (No) {
    var r = lu(e, t, n, i);
    if (r === null) ml(e, t, i, Fo, n), Qd(e, i);
    else if (bv(r, e, t, n, i)) i.stopPropagation();
    else if ((Qd(e, i), t & 4 && -1 < Sv.indexOf(e))) {
      for (; r !== null; ) {
        var s = xs(r);
        if (
          (s !== null && wg(s),
          (s = lu(e, t, n, i)),
          s === null && ml(e, t, i, Fo, n),
          s === r)
        )
          break;
        r = s;
      }
      r !== null && i.stopPropagation();
    } else ml(e, t, i, null, n);
  }
}
var Fo = null;
function lu(e, t, n, i) {
  if (((Fo = null), (e = mc(i)), (e = qn(e)), e !== null))
    if (((t = di(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = hg(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Fo = e), null;
}
function Cg(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (fv()) {
        case yc:
          return 1;
        case mg:
          return 4;
        case Do:
        case pv:
          return 16;
        case yg:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var yn = null,
  _c = null,
  fo = null;
function Tg() {
  if (fo) return fo;
  var e,
    t = _c,
    n = t.length,
    i,
    r = "value" in yn ? yn.value : yn.textContent,
    s = r.length;
  for (e = 0; e < n && t[e] === r[e]; e++);
  var o = n - e;
  for (i = 1; i <= o && t[n - i] === r[s - i]; i++);
  return (fo = r.slice(e, 1 < i ? 1 - i : void 0));
}
function po(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ls() {
  return !0;
}
function Jd() {
  return !1;
}
function dt(e) {
  function t(n, i, r, s, o) {
    (this._reactName = n),
      (this._targetInst = r),
      (this.type = i),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Ls
        : Jd),
      (this.isPropagationStopped = Jd),
      this
    );
  }
  return (
    pe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ls));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ls));
      },
      persist: function () {},
      isPersistent: Ls,
    }),
    t
  );
}
var Zi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Sc = dt(Zi),
  vs = pe({}, Zi, { view: 0, detail: 0 }),
  Ev = dt(vs),
  al,
  ll,
  ur,
  ka = pe({}, vs, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: bc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ur &&
            (ur && e.type === "mousemove"
              ? ((al = e.screenX - ur.screenX), (ll = e.screenY - ur.screenY))
              : (ll = al = 0),
            (ur = e)),
          al);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ll;
    },
  }),
  Zd = dt(ka),
  Pv = pe({}, ka, { dataTransfer: 0 }),
  Mv = dt(Pv),
  Ov = pe({}, vs, { relatedTarget: 0 }),
  ul = dt(Ov),
  Rv = pe({}, Zi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  jv = dt(Rv),
  Lv = pe({}, Zi, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Av = dt(Lv),
  Dv = pe({}, Zi, { data: 0 }),
  eh = dt(Dv),
  Iv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Nv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Fv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function zv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Fv[e]) ? !!t[e] : !1;
}
function bc() {
  return zv;
}
var Bv = pe({}, vs, {
    key: function (e) {
      if (e.key) {
        var t = Iv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = po(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Nv[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: bc,
    charCode: function (e) {
      return e.type === "keypress" ? po(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? po(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Wv = dt(Bv),
  $v = pe({}, ka, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  th = dt($v),
  Hv = pe({}, vs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: bc,
  }),
  Uv = dt(Hv),
  Vv = pe({}, Zi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Yv = dt(Vv),
  Xv = pe({}, ka, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Kv = dt(Xv),
  Gv = [9, 13, 27, 32],
  kc = en && "CompositionEvent" in window,
  jr = null;
en && "documentMode" in document && (jr = document.documentMode);
var Qv = en && "TextEvent" in window && !jr,
  Eg = en && (!kc || (jr && 8 < jr && 11 >= jr)),
  nh = " ",
  ih = !1;
function Pg(e, t) {
  switch (e) {
    case "keyup":
      return Gv.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Mg(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var _i = !1;
function qv(e, t) {
  switch (e) {
    case "compositionend":
      return Mg(t);
    case "keypress":
      return t.which !== 32 ? null : ((ih = !0), nh);
    case "textInput":
      return (e = t.data), e === nh && ih ? null : e;
    default:
      return null;
  }
}
function Jv(e, t) {
  if (_i)
    return e === "compositionend" || (!kc && Pg(e, t))
      ? ((e = Tg()), (fo = _c = yn = null), (_i = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Eg && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Zv = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function rh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Zv[e.type] : t === "textarea";
}
function Og(e, t, n, i) {
  ag(i),
    (t = zo(t, "onChange")),
    0 < t.length &&
      ((n = new Sc("onChange", "change", null, n, i)),
      e.push({ event: n, listeners: t }));
}
var Lr = null,
  Qr = null;
function e1(e) {
  Wg(e, 0);
}
function Ca(e) {
  var t = ki(e);
  if (eg(t)) return e;
}
function t1(e, t) {
  if (e === "change") return t;
}
var Rg = !1;
if (en) {
  var cl;
  if (en) {
    var dl = "oninput" in document;
    if (!dl) {
      var sh = document.createElement("div");
      sh.setAttribute("oninput", "return;"),
        (dl = typeof sh.oninput == "function");
    }
    cl = dl;
  } else cl = !1;
  Rg = cl && (!document.documentMode || 9 < document.documentMode);
}
function oh() {
  Lr && (Lr.detachEvent("onpropertychange", jg), (Qr = Lr = null));
}
function jg(e) {
  if (e.propertyName === "value" && Ca(Qr)) {
    var t = [];
    Og(t, Qr, e, mc(e)), dg(e1, t);
  }
}
function n1(e, t, n) {
  e === "focusin"
    ? (oh(), (Lr = t), (Qr = n), Lr.attachEvent("onpropertychange", jg))
    : e === "focusout" && oh();
}
function i1(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ca(Qr);
}
function r1(e, t) {
  if (e === "click") return Ca(t);
}
function s1(e, t) {
  if (e === "input" || e === "change") return Ca(t);
}
function o1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Mt = typeof Object.is == "function" ? Object.is : o1;
function qr(e, t) {
  if (Mt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    i = Object.keys(t);
  if (n.length !== i.length) return !1;
  for (i = 0; i < n.length; i++) {
    var r = n[i];
    if (!Ul.call(t, r) || !Mt(e[r], t[r])) return !1;
  }
  return !0;
}
function ah(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function lh(e, t) {
  var n = ah(e);
  e = 0;
  for (var i; n; ) {
    if (n.nodeType === 3) {
      if (((i = e + n.textContent.length), e <= t && i >= t))
        return { node: n, offset: t - e };
      e = i;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ah(n);
  }
}
function Lg(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Lg(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ag() {
  for (var e = window, t = jo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = jo(e.document);
  }
  return t;
}
function Cc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function a1(e) {
  var t = Ag(),
    n = e.focusedElem,
    i = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Lg(n.ownerDocument.documentElement, n)
  ) {
    if (i !== null && Cc(n)) {
      if (
        ((t = i.start),
        (e = i.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var r = n.textContent.length,
          s = Math.min(i.start, r);
        (i = i.end === void 0 ? s : Math.min(i.end, r)),
          !e.extend && s > i && ((r = i), (i = s), (s = r)),
          (r = lh(n, s));
        var o = lh(n, i);
        r &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== r.node ||
            e.anchorOffset !== r.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(r.node, r.offset),
          e.removeAllRanges(),
          s > i
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var l1 = en && "documentMode" in document && 11 >= document.documentMode,
  Si = null,
  uu = null,
  Ar = null,
  cu = !1;
function uh(e, t, n) {
  var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  cu ||
    Si == null ||
    Si !== jo(i) ||
    ((i = Si),
    "selectionStart" in i && Cc(i)
      ? (i = { start: i.selectionStart, end: i.selectionEnd })
      : ((i = (
          (i.ownerDocument && i.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (i = {
          anchorNode: i.anchorNode,
          anchorOffset: i.anchorOffset,
          focusNode: i.focusNode,
          focusOffset: i.focusOffset,
        })),
    (Ar && qr(Ar, i)) ||
      ((Ar = i),
      (i = zo(uu, "onSelect")),
      0 < i.length &&
        ((t = new Sc("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: i }),
        (t.target = Si))));
}
function As(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var bi = {
    animationend: As("Animation", "AnimationEnd"),
    animationiteration: As("Animation", "AnimationIteration"),
    animationstart: As("Animation", "AnimationStart"),
    transitionend: As("Transition", "TransitionEnd"),
  },
  hl = {},
  Dg = {};
en &&
  ((Dg = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete bi.animationend.animation,
    delete bi.animationiteration.animation,
    delete bi.animationstart.animation),
  "TransitionEvent" in window || delete bi.transitionend.transition);
function Ta(e) {
  if (hl[e]) return hl[e];
  if (!bi[e]) return e;
  var t = bi[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Dg) return (hl[e] = t[n]);
  return e;
}
var Ig = Ta("animationend"),
  Ng = Ta("animationiteration"),
  Fg = Ta("animationstart"),
  zg = Ta("transitionend"),
  Bg = new Map(),
  ch =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Dn(e, t) {
  Bg.set(e, t), ci(t, [e]);
}
for (var fl = 0; fl < ch.length; fl++) {
  var pl = ch[fl],
    u1 = pl.toLowerCase(),
    c1 = pl[0].toUpperCase() + pl.slice(1);
  Dn(u1, "on" + c1);
}
Dn(Ig, "onAnimationEnd");
Dn(Ng, "onAnimationIteration");
Dn(Fg, "onAnimationStart");
Dn("dblclick", "onDoubleClick");
Dn("focusin", "onFocus");
Dn("focusout", "onBlur");
Dn(zg, "onTransitionEnd");
Wi("onMouseEnter", ["mouseout", "mouseover"]);
Wi("onMouseLeave", ["mouseout", "mouseover"]);
Wi("onPointerEnter", ["pointerout", "pointerover"]);
Wi("onPointerLeave", ["pointerout", "pointerover"]);
ci(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
ci(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
ci("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ci(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
ci(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
ci(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var br =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  d1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(br));
function dh(e, t, n) {
  var i = e.type || "unknown-event";
  (e.currentTarget = n), uv(i, t, void 0, e), (e.currentTarget = null);
}
function Wg(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var i = e[n],
      r = i.event;
    i = i.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = i.length - 1; 0 <= o; o--) {
          var a = i[o],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== s && r.isPropagationStopped())) break e;
          dh(r, a, u), (s = l);
        }
      else
        for (o = 0; o < i.length; o++) {
          if (
            ((a = i[o]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== s && r.isPropagationStopped())
          )
            break e;
          dh(r, a, u), (s = l);
        }
    }
  }
  if (Ao) throw ((e = su), (Ao = !1), (su = null), e);
}
function re(e, t) {
  var n = t[gu];
  n === void 0 && (n = t[gu] = new Set());
  var i = e + "__bubble";
  n.has(i) || ($g(t, e, 2, !1), n.add(i));
}
function gl(e, t, n) {
  var i = 0;
  t && (i |= 4), $g(n, e, i, t);
}
var Ds = "_reactListening" + Math.random().toString(36).slice(2);
function Jr(e) {
  if (!e[Ds]) {
    (e[Ds] = !0),
      Gp.forEach(function (n) {
        n !== "selectionchange" && (d1.has(n) || gl(n, !1, e), gl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ds] || ((t[Ds] = !0), gl("selectionchange", !1, t));
  }
}
function $g(e, t, n, i) {
  switch (Cg(t)) {
    case 1:
      var r = Cv;
      break;
    case 4:
      r = Tv;
      break;
    default:
      r = wc;
  }
  (n = r.bind(null, t, n, e)),
    (r = void 0),
    !ru ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (r = !0),
    i
      ? r !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: r })
        : e.addEventListener(t, n, !0)
      : r !== void 0
      ? e.addEventListener(t, n, { passive: r })
      : e.addEventListener(t, n, !1);
}
function ml(e, t, n, i, r) {
  var s = i;
  if (!(t & 1) && !(t & 2) && i !== null)
    e: for (;;) {
      if (i === null) return;
      var o = i.tag;
      if (o === 3 || o === 4) {
        var a = i.stateNode.containerInfo;
        if (a === r || (a.nodeType === 8 && a.parentNode === r)) break;
        if (o === 4)
          for (o = i.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === r || (l.nodeType === 8 && l.parentNode === r))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = qn(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            i = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      i = i.return;
    }
  dg(function () {
    var u = s,
      c = mc(n),
      d = [];
    e: {
      var h = Bg.get(e);
      if (h !== void 0) {
        var f = Sc,
          p = e;
        switch (e) {
          case "keypress":
            if (po(n) === 0) break e;
          case "keydown":
          case "keyup":
            f = Wv;
            break;
          case "focusin":
            (p = "focus"), (f = ul);
            break;
          case "focusout":
            (p = "blur"), (f = ul);
            break;
          case "beforeblur":
          case "afterblur":
            f = ul;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            f = Zd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            f = Mv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            f = Uv;
            break;
          case Ig:
          case Ng:
          case Fg:
            f = jv;
            break;
          case zg:
            f = Yv;
            break;
          case "scroll":
            f = Ev;
            break;
          case "wheel":
            f = Kv;
            break;
          case "copy":
          case "cut":
          case "paste":
            f = Av;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            f = th;
        }
        var y = (t & 4) !== 0,
          w = !y && e === "scroll",
          m = y ? (h !== null ? h + "Capture" : null) : h;
        y = [];
        for (var v = u, x; v !== null; ) {
          x = v;
          var _ = x.stateNode;
          if (
            (x.tag === 5 &&
              _ !== null &&
              ((x = _),
              m !== null && ((_ = Yr(v, m)), _ != null && y.push(Zr(v, _, x)))),
            w)
          )
            break;
          v = v.return;
        }
        0 < y.length &&
          ((h = new f(h, p, null, n, c)), d.push({ event: h, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (f = e === "mouseout" || e === "pointerout"),
          h &&
            n !== nu &&
            (p = n.relatedTarget || n.fromElement) &&
            (qn(p) || p[tn]))
        )
          break e;
        if (
          (f || h) &&
          ((h =
            c.window === c
              ? c
              : (h = c.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          f
            ? ((p = n.relatedTarget || n.toElement),
              (f = u),
              (p = p ? qn(p) : null),
              p !== null &&
                ((w = di(p)), p !== w || (p.tag !== 5 && p.tag !== 6)) &&
                (p = null))
            : ((f = null), (p = u)),
          f !== p)
        ) {
          if (
            ((y = Zd),
            (_ = "onMouseLeave"),
            (m = "onMouseEnter"),
            (v = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = th),
              (_ = "onPointerLeave"),
              (m = "onPointerEnter"),
              (v = "pointer")),
            (w = f == null ? h : ki(f)),
            (x = p == null ? h : ki(p)),
            (h = new y(_, v + "leave", f, n, c)),
            (h.target = w),
            (h.relatedTarget = x),
            (_ = null),
            qn(c) === u &&
              ((y = new y(m, v + "enter", p, n, c)),
              (y.target = x),
              (y.relatedTarget = w),
              (_ = y)),
            (w = _),
            f && p)
          )
            t: {
              for (y = f, m = p, v = 0, x = y; x; x = mi(x)) v++;
              for (x = 0, _ = m; _; _ = mi(_)) x++;
              for (; 0 < v - x; ) (y = mi(y)), v--;
              for (; 0 < x - v; ) (m = mi(m)), x--;
              for (; v--; ) {
                if (y === m || (m !== null && y === m.alternate)) break t;
                (y = mi(y)), (m = mi(m));
              }
              y = null;
            }
          else y = null;
          f !== null && hh(d, h, f, y, !1),
            p !== null && w !== null && hh(d, w, p, y, !0);
        }
      }
      e: {
        if (
          ((h = u ? ki(u) : window),
          (f = h.nodeName && h.nodeName.toLowerCase()),
          f === "select" || (f === "input" && h.type === "file"))
        )
          var S = t1;
        else if (rh(h))
          if (Rg) S = s1;
          else {
            S = i1;
            var k = n1;
          }
        else
          (f = h.nodeName) &&
            f.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (S = r1);
        if (S && (S = S(e, u))) {
          Og(d, S, n, c);
          break e;
        }
        k && k(e, h, u),
          e === "focusout" &&
            (k = h._wrapperState) &&
            k.controlled &&
            h.type === "number" &&
            ql(h, "number", h.value);
      }
      switch (((k = u ? ki(u) : window), e)) {
        case "focusin":
          (rh(k) || k.contentEditable === "true") &&
            ((Si = k), (uu = u), (Ar = null));
          break;
        case "focusout":
          Ar = uu = Si = null;
          break;
        case "mousedown":
          cu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (cu = !1), uh(d, n, c);
          break;
        case "selectionchange":
          if (l1) break;
        case "keydown":
        case "keyup":
          uh(d, n, c);
      }
      var C;
      if (kc)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        _i
          ? Pg(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (Eg &&
          n.locale !== "ko" &&
          (_i || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && _i && (C = Tg())
            : ((yn = c),
              (_c = "value" in yn ? yn.value : yn.textContent),
              (_i = !0))),
        (k = zo(u, T)),
        0 < k.length &&
          ((T = new eh(T, e, null, n, c)),
          d.push({ event: T, listeners: k }),
          C ? (T.data = C) : ((C = Mg(n)), C !== null && (T.data = C)))),
        (C = Qv ? qv(e, n) : Jv(e, n)) &&
          ((u = zo(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new eh("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = C)));
    }
    Wg(d, t);
  });
}
function Zr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function zo(e, t) {
  for (var n = t + "Capture", i = []; e !== null; ) {
    var r = e,
      s = r.stateNode;
    r.tag === 5 &&
      s !== null &&
      ((r = s),
      (s = Yr(e, n)),
      s != null && i.unshift(Zr(e, s, r)),
      (s = Yr(e, t)),
      s != null && i.push(Zr(e, s, r))),
      (e = e.return);
  }
  return i;
}
function mi(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function hh(e, t, n, i, r) {
  for (var s = t._reactName, o = []; n !== null && n !== i; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === i) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      r
        ? ((l = Yr(n, s)), l != null && o.unshift(Zr(n, l, a)))
        : r || ((l = Yr(n, s)), l != null && o.push(Zr(n, l, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var h1 = /\r\n?/g,
  f1 = /\u0000|\uFFFD/g;
function fh(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      h1,
      `
`
    )
    .replace(f1, "");
}
function Is(e, t, n) {
  if (((t = fh(t)), fh(e) !== t && n)) throw Error(P(425));
}
function Bo() {}
var du = null,
  hu = null;
function fu(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var pu = typeof setTimeout == "function" ? setTimeout : void 0,
  p1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ph = typeof Promise == "function" ? Promise : void 0,
  g1 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ph < "u"
      ? function (e) {
          return ph.resolve(null).then(e).catch(m1);
        }
      : pu;
function m1(e) {
  setTimeout(function () {
    throw e;
  });
}
function yl(e, t) {
  var n = t,
    i = 0;
  do {
    var r = n.nextSibling;
    if ((e.removeChild(n), r && r.nodeType === 8))
      if (((n = r.data), n === "/$")) {
        if (i === 0) {
          e.removeChild(r), Gr(t);
          return;
        }
        i--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || i++;
    n = r;
  } while (n);
  Gr(t);
}
function Cn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function gh(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var er = Math.random().toString(36).slice(2),
  It = "__reactFiber$" + er,
  es = "__reactProps$" + er,
  tn = "__reactContainer$" + er,
  gu = "__reactEvents$" + er,
  y1 = "__reactListeners$" + er,
  v1 = "__reactHandles$" + er;
function qn(e) {
  var t = e[It];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[tn] || n[It])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = gh(e); e !== null; ) {
          if ((n = e[It])) return n;
          e = gh(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function xs(e) {
  return (
    (e = e[It] || e[tn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ki(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(P(33));
}
function Ea(e) {
  return e[es] || null;
}
var mu = [],
  Ci = -1;
function In(e) {
  return { current: e };
}
function se(e) {
  0 > Ci || ((e.current = mu[Ci]), (mu[Ci] = null), Ci--);
}
function ie(e, t) {
  Ci++, (mu[Ci] = e.current), (e.current = t);
}
var Ln = {},
  $e = In(Ln),
  et = In(!1),
  ii = Ln;
function $i(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ln;
  var i = e.stateNode;
  if (i && i.__reactInternalMemoizedUnmaskedChildContext === t)
    return i.__reactInternalMemoizedMaskedChildContext;
  var r = {},
    s;
  for (s in n) r[s] = t[s];
  return (
    i &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = r)),
    r
  );
}
function tt(e) {
  return (e = e.childContextTypes), e != null;
}
function Wo() {
  se(et), se($e);
}
function mh(e, t, n) {
  if ($e.current !== Ln) throw Error(P(168));
  ie($e, t), ie(et, n);
}
function Hg(e, t, n) {
  var i = e.stateNode;
  if (((t = t.childContextTypes), typeof i.getChildContext != "function"))
    return n;
  i = i.getChildContext();
  for (var r in i) if (!(r in t)) throw Error(P(108, nv(e) || "Unknown", r));
  return pe({}, n, i);
}
function $o(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ln),
    (ii = $e.current),
    ie($e, e),
    ie(et, et.current),
    !0
  );
}
function yh(e, t, n) {
  var i = e.stateNode;
  if (!i) throw Error(P(169));
  n
    ? ((e = Hg(e, t, ii)),
      (i.__reactInternalMemoizedMergedChildContext = e),
      se(et),
      se($e),
      ie($e, e))
    : se(et),
    ie(et, n);
}
var Xt = null,
  Pa = !1,
  vl = !1;
function Ug(e) {
  Xt === null ? (Xt = [e]) : Xt.push(e);
}
function x1(e) {
  (Pa = !0), Ug(e);
}
function Nn() {
  if (!vl && Xt !== null) {
    vl = !0;
    var e = 0,
      t = te;
    try {
      var n = Xt;
      for (te = 1; e < n.length; e++) {
        var i = n[e];
        do i = i(!0);
        while (i !== null);
      }
      (Xt = null), (Pa = !1);
    } catch (r) {
      throw (Xt !== null && (Xt = Xt.slice(e + 1)), gg(yc, Nn), r);
    } finally {
      (te = t), (vl = !1);
    }
  }
  return null;
}
var Ti = [],
  Ei = 0,
  Ho = null,
  Uo = 0,
  ft = [],
  pt = 0,
  ri = null,
  Gt = 1,
  Qt = "";
function Xn(e, t) {
  (Ti[Ei++] = Uo), (Ti[Ei++] = Ho), (Ho = e), (Uo = t);
}
function Vg(e, t, n) {
  (ft[pt++] = Gt), (ft[pt++] = Qt), (ft[pt++] = ri), (ri = e);
  var i = Gt;
  e = Qt;
  var r = 32 - Et(i) - 1;
  (i &= ~(1 << r)), (n += 1);
  var s = 32 - Et(t) + r;
  if (30 < s) {
    var o = r - (r % 5);
    (s = (i & ((1 << o) - 1)).toString(32)),
      (i >>= o),
      (r -= o),
      (Gt = (1 << (32 - Et(t) + r)) | (n << r) | i),
      (Qt = s + e);
  } else (Gt = (1 << s) | (n << r) | i), (Qt = e);
}
function Tc(e) {
  e.return !== null && (Xn(e, 1), Vg(e, 1, 0));
}
function Ec(e) {
  for (; e === Ho; )
    (Ho = Ti[--Ei]), (Ti[Ei] = null), (Uo = Ti[--Ei]), (Ti[Ei] = null);
  for (; e === ri; )
    (ri = ft[--pt]),
      (ft[pt] = null),
      (Qt = ft[--pt]),
      (ft[pt] = null),
      (Gt = ft[--pt]),
      (ft[pt] = null);
}
var lt = null,
  st = null,
  oe = !1,
  Ct = null;
function Yg(e, t) {
  var n = gt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function vh(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (lt = e), (st = Cn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (lt = e), (st = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = ri !== null ? { id: Gt, overflow: Qt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = gt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (lt = e),
            (st = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function yu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function vu(e) {
  if (oe) {
    var t = st;
    if (t) {
      var n = t;
      if (!vh(e, t)) {
        if (yu(e)) throw Error(P(418));
        t = Cn(n.nextSibling);
        var i = lt;
        t && vh(e, t)
          ? Yg(i, n)
          : ((e.flags = (e.flags & -4097) | 2), (oe = !1), (lt = e));
      }
    } else {
      if (yu(e)) throw Error(P(418));
      (e.flags = (e.flags & -4097) | 2), (oe = !1), (lt = e);
    }
  }
}
function xh(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  lt = e;
}
function Ns(e) {
  if (e !== lt) return !1;
  if (!oe) return xh(e), (oe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !fu(e.type, e.memoizedProps))),
    t && (t = st))
  ) {
    if (yu(e)) throw (Xg(), Error(P(418)));
    for (; t; ) Yg(e, t), (t = Cn(t.nextSibling));
  }
  if ((xh(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(P(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              st = Cn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      st = null;
    }
  } else st = lt ? Cn(e.stateNode.nextSibling) : null;
  return !0;
}
function Xg() {
  for (var e = st; e; ) e = Cn(e.nextSibling);
}
function Hi() {
  (st = lt = null), (oe = !1);
}
function Pc(e) {
  Ct === null ? (Ct = [e]) : Ct.push(e);
}
var w1 = on.ReactCurrentBatchConfig;
function St(e, t) {
  if (e && e.defaultProps) {
    (t = pe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Vo = In(null),
  Yo = null,
  Pi = null,
  Mc = null;
function Oc() {
  Mc = Pi = Yo = null;
}
function Rc(e) {
  var t = Vo.current;
  se(Vo), (e._currentValue = t);
}
function xu(e, t, n) {
  for (; e !== null; ) {
    var i = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), i !== null && (i.childLanes |= t))
        : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Ii(e, t) {
  (Yo = e),
    (Mc = Pi = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ze = !0), (e.firstContext = null));
}
function xt(e) {
  var t = e._currentValue;
  if (Mc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Pi === null)) {
      if (Yo === null) throw Error(P(308));
      (Pi = e), (Yo.dependencies = { lanes: 0, firstContext: e });
    } else Pi = Pi.next = e;
  return t;
}
var Jn = null;
function jc(e) {
  Jn === null ? (Jn = [e]) : Jn.push(e);
}
function Kg(e, t, n, i) {
  var r = t.interleaved;
  return (
    r === null ? ((n.next = n), jc(t)) : ((n.next = r.next), (r.next = n)),
    (t.interleaved = n),
    nn(e, i)
  );
}
function nn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var fn = !1;
function Lc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Gg(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Jt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Tn(e, t, n) {
  var i = e.updateQueue;
  if (i === null) return null;
  if (((i = i.shared), K & 2)) {
    var r = i.pending;
    return (
      r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (i.pending = t),
      nn(e, n)
    );
  }
  return (
    (r = i.interleaved),
    r === null ? ((t.next = t), jc(i)) : ((t.next = r.next), (r.next = t)),
    (i.interleaved = t),
    nn(e, n)
  );
}
function go(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var i = t.lanes;
    (i &= e.pendingLanes), (n |= i), (t.lanes = n), vc(e, n);
  }
}
function wh(e, t) {
  var n = e.updateQueue,
    i = e.alternate;
  if (i !== null && ((i = i.updateQueue), n === i)) {
    var r = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (r = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (r = s = t) : (s = s.next = t);
    } else r = s = t;
    (n = {
      baseState: i.baseState,
      firstBaseUpdate: r,
      lastBaseUpdate: s,
      shared: i.shared,
      effects: i.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Xo(e, t, n, i) {
  var r = e.updateQueue;
  fn = !1;
  var s = r.firstBaseUpdate,
    o = r.lastBaseUpdate,
    a = r.shared.pending;
  if (a !== null) {
    r.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), o === null ? (s = u) : (o.next = u), (o = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== o &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var d = r.baseState;
    (o = 0), (c = u = l = null), (a = s);
    do {
      var h = a.lane,
        f = a.eventTime;
      if ((i & h) === h) {
        c !== null &&
          (c = c.next =
            {
              eventTime: f,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var p = e,
            y = a;
          switch (((h = t), (f = n), y.tag)) {
            case 1:
              if (((p = y.payload), typeof p == "function")) {
                d = p.call(f, d, h);
                break e;
              }
              d = p;
              break e;
            case 3:
              p.flags = (p.flags & -65537) | 128;
            case 0:
              if (
                ((p = y.payload),
                (h = typeof p == "function" ? p.call(f, d, h) : p),
                h == null)
              )
                break e;
              d = pe({}, d, h);
              break e;
            case 2:
              fn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = r.effects),
          h === null ? (r.effects = [a]) : h.push(a));
      } else
        (f = {
          eventTime: f,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = f), (l = d)) : (c = c.next = f),
          (o |= h);
      if (((a = a.next), a === null)) {
        if (((a = r.shared.pending), a === null)) break;
        (h = a),
          (a = h.next),
          (h.next = null),
          (r.lastBaseUpdate = h),
          (r.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = d),
      (r.baseState = l),
      (r.firstBaseUpdate = u),
      (r.lastBaseUpdate = c),
      (t = r.shared.interleaved),
      t !== null)
    ) {
      r = t;
      do (o |= r.lane), (r = r.next);
      while (r !== t);
    } else s === null && (r.shared.lanes = 0);
    (oi |= o), (e.lanes = o), (e.memoizedState = d);
  }
}
function _h(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var i = e[t],
        r = i.callback;
      if (r !== null) {
        if (((i.callback = null), (i = n), typeof r != "function"))
          throw Error(P(191, r));
        r.call(i);
      }
    }
}
var Qg = new Kp.Component().refs;
function wu(e, t, n, i) {
  (t = e.memoizedState),
    (n = n(i, t)),
    (n = n == null ? t : pe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ma = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? di(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var i = Ve(),
      r = Pn(e),
      s = Jt(i, r);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = Tn(e, s, r)),
      t !== null && (Pt(t, e, r, i), go(t, e, r));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var i = Ve(),
      r = Pn(e),
      s = Jt(i, r);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Tn(e, s, r)),
      t !== null && (Pt(t, e, r, i), go(t, e, r));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ve(),
      i = Pn(e),
      r = Jt(n, i);
    (r.tag = 2),
      t != null && (r.callback = t),
      (t = Tn(e, r, i)),
      t !== null && (Pt(t, e, i, n), go(t, e, i));
  },
};
function Sh(e, t, n, i, r, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(i, s, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !qr(n, i) || !qr(r, s)
      : !0
  );
}
function qg(e, t, n) {
  var i = !1,
    r = Ln,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = xt(s))
      : ((r = tt(t) ? ii : $e.current),
        (i = t.contextTypes),
        (s = (i = i != null) ? $i(e, r) : Ln)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ma),
    (e.stateNode = t),
    (t._reactInternals = e),
    i &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = r),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function bh(e, t, n, i) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, i),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, i),
    t.state !== e && Ma.enqueueReplaceState(t, t.state, null);
}
function _u(e, t, n, i) {
  var r = e.stateNode;
  (r.props = n), (r.state = e.memoizedState), (r.refs = Qg), Lc(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (r.context = xt(s))
    : ((s = tt(t) ? ii : $e.current), (r.context = $i(e, s))),
    (r.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (wu(e, t, s, n), (r.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof r.getSnapshotBeforeUpdate == "function" ||
      (typeof r.UNSAFE_componentWillMount != "function" &&
        typeof r.componentWillMount != "function") ||
      ((t = r.state),
      typeof r.componentWillMount == "function" && r.componentWillMount(),
      typeof r.UNSAFE_componentWillMount == "function" &&
        r.UNSAFE_componentWillMount(),
      t !== r.state && Ma.enqueueReplaceState(r, r.state, null),
      Xo(e, n, r, i),
      (r.state = e.memoizedState)),
    typeof r.componentDidMount == "function" && (e.flags |= 4194308);
}
function cr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(P(309));
        var i = n.stateNode;
      }
      if (!i) throw Error(P(147, e));
      var r = i,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var a = r.refs;
            a === Qg && (a = r.refs = {}),
              o === null ? delete a[s] : (a[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(P(284));
    if (!n._owner) throw Error(P(290, e));
  }
  return e;
}
function Fs(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      P(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function kh(e) {
  var t = e._init;
  return t(e._payload);
}
function Jg(e) {
  function t(m, v) {
    if (e) {
      var x = m.deletions;
      x === null ? ((m.deletions = [v]), (m.flags |= 16)) : x.push(v);
    }
  }
  function n(m, v) {
    if (!e) return null;
    for (; v !== null; ) t(m, v), (v = v.sibling);
    return null;
  }
  function i(m, v) {
    for (m = new Map(); v !== null; )
      v.key !== null ? m.set(v.key, v) : m.set(v.index, v), (v = v.sibling);
    return m;
  }
  function r(m, v) {
    return (m = Mn(m, v)), (m.index = 0), (m.sibling = null), m;
  }
  function s(m, v, x) {
    return (
      (m.index = x),
      e
        ? ((x = m.alternate),
          x !== null
            ? ((x = x.index), x < v ? ((m.flags |= 2), v) : x)
            : ((m.flags |= 2), v))
        : ((m.flags |= 1048576), v)
    );
  }
  function o(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, v, x, _) {
    return v === null || v.tag !== 6
      ? ((v = Cl(x, m.mode, _)), (v.return = m), v)
      : ((v = r(v, x)), (v.return = m), v);
  }
  function l(m, v, x, _) {
    var S = x.type;
    return S === wi
      ? c(m, v, x.props.children, _, x.key)
      : v !== null &&
        (v.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === hn &&
            kh(S) === v.type))
      ? ((_ = r(v, x.props)), (_.ref = cr(m, v, x)), (_.return = m), _)
      : ((_ = _o(x.type, x.key, x.props, null, m.mode, _)),
        (_.ref = cr(m, v, x)),
        (_.return = m),
        _);
  }
  function u(m, v, x, _) {
    return v === null ||
      v.tag !== 4 ||
      v.stateNode.containerInfo !== x.containerInfo ||
      v.stateNode.implementation !== x.implementation
      ? ((v = Tl(x, m.mode, _)), (v.return = m), v)
      : ((v = r(v, x.children || [])), (v.return = m), v);
  }
  function c(m, v, x, _, S) {
    return v === null || v.tag !== 7
      ? ((v = ti(x, m.mode, _, S)), (v.return = m), v)
      : ((v = r(v, x)), (v.return = m), v);
  }
  function d(m, v, x) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (v = Cl("" + v, m.mode, x)), (v.return = m), v;
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Es:
          return (
            (x = _o(v.type, v.key, v.props, null, m.mode, x)),
            (x.ref = cr(m, null, v)),
            (x.return = m),
            x
          );
        case xi:
          return (v = Tl(v, m.mode, x)), (v.return = m), v;
        case hn:
          var _ = v._init;
          return d(m, _(v._payload), x);
      }
      if (_r(v) || sr(v))
        return (v = ti(v, m.mode, x, null)), (v.return = m), v;
      Fs(m, v);
    }
    return null;
  }
  function h(m, v, x, _) {
    var S = v !== null ? v.key : null;
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return S !== null ? null : a(m, v, "" + x, _);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Es:
          return x.key === S ? l(m, v, x, _) : null;
        case xi:
          return x.key === S ? u(m, v, x, _) : null;
        case hn:
          return (S = x._init), h(m, v, S(x._payload), _);
      }
      if (_r(x) || sr(x)) return S !== null ? null : c(m, v, x, _, null);
      Fs(m, x);
    }
    return null;
  }
  function f(m, v, x, _, S) {
    if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
      return (m = m.get(x) || null), a(v, m, "" + _, S);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case Es:
          return (m = m.get(_.key === null ? x : _.key) || null), l(v, m, _, S);
        case xi:
          return (m = m.get(_.key === null ? x : _.key) || null), u(v, m, _, S);
        case hn:
          var k = _._init;
          return f(m, v, x, k(_._payload), S);
      }
      if (_r(_) || sr(_)) return (m = m.get(x) || null), c(v, m, _, S, null);
      Fs(v, _);
    }
    return null;
  }
  function p(m, v, x, _) {
    for (
      var S = null, k = null, C = v, T = (v = 0), R = null;
      C !== null && T < x.length;
      T++
    ) {
      C.index > T ? ((R = C), (C = null)) : (R = C.sibling);
      var O = h(m, C, x[T], _);
      if (O === null) {
        C === null && (C = R);
        break;
      }
      e && C && O.alternate === null && t(m, C),
        (v = s(O, v, T)),
        k === null ? (S = O) : (k.sibling = O),
        (k = O),
        (C = R);
    }
    if (T === x.length) return n(m, C), oe && Xn(m, T), S;
    if (C === null) {
      for (; T < x.length; T++)
        (C = d(m, x[T], _)),
          C !== null &&
            ((v = s(C, v, T)), k === null ? (S = C) : (k.sibling = C), (k = C));
      return oe && Xn(m, T), S;
    }
    for (C = i(m, C); T < x.length; T++)
      (R = f(C, m, T, x[T], _)),
        R !== null &&
          (e && R.alternate !== null && C.delete(R.key === null ? T : R.key),
          (v = s(R, v, T)),
          k === null ? (S = R) : (k.sibling = R),
          (k = R));
    return (
      e &&
        C.forEach(function (D) {
          return t(m, D);
        }),
      oe && Xn(m, T),
      S
    );
  }
  function y(m, v, x, _) {
    var S = sr(x);
    if (typeof S != "function") throw Error(P(150));
    if (((x = S.call(x)), x == null)) throw Error(P(151));
    for (
      var k = (S = null), C = v, T = (v = 0), R = null, O = x.next();
      C !== null && !O.done;
      T++, O = x.next()
    ) {
      C.index > T ? ((R = C), (C = null)) : (R = C.sibling);
      var D = h(m, C, O.value, _);
      if (D === null) {
        C === null && (C = R);
        break;
      }
      e && C && D.alternate === null && t(m, C),
        (v = s(D, v, T)),
        k === null ? (S = D) : (k.sibling = D),
        (k = D),
        (C = R);
    }
    if (O.done) return n(m, C), oe && Xn(m, T), S;
    if (C === null) {
      for (; !O.done; T++, O = x.next())
        (O = d(m, O.value, _)),
          O !== null &&
            ((v = s(O, v, T)), k === null ? (S = O) : (k.sibling = O), (k = O));
      return oe && Xn(m, T), S;
    }
    for (C = i(m, C); !O.done; T++, O = x.next())
      (O = f(C, m, T, O.value, _)),
        O !== null &&
          (e && O.alternate !== null && C.delete(O.key === null ? T : O.key),
          (v = s(O, v, T)),
          k === null ? (S = O) : (k.sibling = O),
          (k = O));
    return (
      e &&
        C.forEach(function (z) {
          return t(m, z);
        }),
      oe && Xn(m, T),
      S
    );
  }
  function w(m, v, x, _) {
    if (
      (typeof x == "object" &&
        x !== null &&
        x.type === wi &&
        x.key === null &&
        (x = x.props.children),
      typeof x == "object" && x !== null)
    ) {
      switch (x.$$typeof) {
        case Es:
          e: {
            for (var S = x.key, k = v; k !== null; ) {
              if (k.key === S) {
                if (((S = x.type), S === wi)) {
                  if (k.tag === 7) {
                    n(m, k.sibling),
                      (v = r(k, x.props.children)),
                      (v.return = m),
                      (m = v);
                    break e;
                  }
                } else if (
                  k.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === hn &&
                    kh(S) === k.type)
                ) {
                  n(m, k.sibling),
                    (v = r(k, x.props)),
                    (v.ref = cr(m, k, x)),
                    (v.return = m),
                    (m = v);
                  break e;
                }
                n(m, k);
                break;
              } else t(m, k);
              k = k.sibling;
            }
            x.type === wi
              ? ((v = ti(x.props.children, m.mode, _, x.key)),
                (v.return = m),
                (m = v))
              : ((_ = _o(x.type, x.key, x.props, null, m.mode, _)),
                (_.ref = cr(m, v, x)),
                (_.return = m),
                (m = _));
          }
          return o(m);
        case xi:
          e: {
            for (k = x.key; v !== null; ) {
              if (v.key === k)
                if (
                  v.tag === 4 &&
                  v.stateNode.containerInfo === x.containerInfo &&
                  v.stateNode.implementation === x.implementation
                ) {
                  n(m, v.sibling),
                    (v = r(v, x.children || [])),
                    (v.return = m),
                    (m = v);
                  break e;
                } else {
                  n(m, v);
                  break;
                }
              else t(m, v);
              v = v.sibling;
            }
            (v = Tl(x, m.mode, _)), (v.return = m), (m = v);
          }
          return o(m);
        case hn:
          return (k = x._init), w(m, v, k(x._payload), _);
      }
      if (_r(x)) return p(m, v, x, _);
      if (sr(x)) return y(m, v, x, _);
      Fs(m, x);
    }
    return (typeof x == "string" && x !== "") || typeof x == "number"
      ? ((x = "" + x),
        v !== null && v.tag === 6
          ? (n(m, v.sibling), (v = r(v, x)), (v.return = m), (m = v))
          : (n(m, v), (v = Cl(x, m.mode, _)), (v.return = m), (m = v)),
        o(m))
      : n(m, v);
  }
  return w;
}
var Ui = Jg(!0),
  Zg = Jg(!1),
  ws = {},
  Bt = In(ws),
  ts = In(ws),
  ns = In(ws);
function Zn(e) {
  if (e === ws) throw Error(P(174));
  return e;
}
function Ac(e, t) {
  switch ((ie(ns, t), ie(ts, e), ie(Bt, ws), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Zl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Zl(t, e));
  }
  se(Bt), ie(Bt, t);
}
function Vi() {
  se(Bt), se(ts), se(ns);
}
function em(e) {
  Zn(ns.current);
  var t = Zn(Bt.current),
    n = Zl(t, e.type);
  t !== n && (ie(ts, e), ie(Bt, n));
}
function Dc(e) {
  ts.current === e && (se(Bt), se(ts));
}
var ce = In(0);
function Ko(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var xl = [];
function Ic() {
  for (var e = 0; e < xl.length; e++)
    xl[e]._workInProgressVersionPrimary = null;
  xl.length = 0;
}
var mo = on.ReactCurrentDispatcher,
  wl = on.ReactCurrentBatchConfig,
  si = 0,
  fe = null,
  Ce = null,
  Oe = null,
  Go = !1,
  Dr = !1,
  is = 0,
  _1 = 0;
function Fe() {
  throw Error(P(321));
}
function Nc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Mt(e[n], t[n])) return !1;
  return !0;
}
function Fc(e, t, n, i, r, s) {
  if (
    ((si = s),
    (fe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (mo.current = e === null || e.memoizedState === null ? C1 : T1),
    (e = n(i, r)),
    Dr)
  ) {
    s = 0;
    do {
      if (((Dr = !1), (is = 0), 25 <= s)) throw Error(P(301));
      (s += 1),
        (Oe = Ce = null),
        (t.updateQueue = null),
        (mo.current = E1),
        (e = n(i, r));
    } while (Dr);
  }
  if (
    ((mo.current = Qo),
    (t = Ce !== null && Ce.next !== null),
    (si = 0),
    (Oe = Ce = fe = null),
    (Go = !1),
    t)
  )
    throw Error(P(300));
  return e;
}
function zc() {
  var e = is !== 0;
  return (is = 0), e;
}
function At() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Oe === null ? (fe.memoizedState = Oe = e) : (Oe = Oe.next = e), Oe;
}
function wt() {
  if (Ce === null) {
    var e = fe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ce.next;
  var t = Oe === null ? fe.memoizedState : Oe.next;
  if (t !== null) (Oe = t), (Ce = e);
  else {
    if (e === null) throw Error(P(310));
    (Ce = e),
      (e = {
        memoizedState: Ce.memoizedState,
        baseState: Ce.baseState,
        baseQueue: Ce.baseQueue,
        queue: Ce.queue,
        next: null,
      }),
      Oe === null ? (fe.memoizedState = Oe = e) : (Oe = Oe.next = e);
  }
  return Oe;
}
function rs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function _l(e) {
  var t = wt(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var i = Ce,
    r = i.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (r !== null) {
      var o = r.next;
      (r.next = s.next), (s.next = o);
    }
    (i.baseQueue = r = s), (n.pending = null);
  }
  if (r !== null) {
    (s = r.next), (i = i.baseState);
    var a = (o = null),
      l = null,
      u = s;
    do {
      var c = u.lane;
      if ((si & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (i = u.hasEagerState ? u.eagerState : e(i, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = d), (o = i)) : (l = l.next = d),
          (fe.lanes |= c),
          (oi |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    l === null ? (o = i) : (l.next = a),
      Mt(i, t.memoizedState) || (Ze = !0),
      (t.memoizedState = i),
      (t.baseState = o),
      (t.baseQueue = l),
      (n.lastRenderedState = i);
  }
  if (((e = n.interleaved), e !== null)) {
    r = e;
    do (s = r.lane), (fe.lanes |= s), (oi |= s), (r = r.next);
    while (r !== e);
  } else r === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Sl(e) {
  var t = wt(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var i = n.dispatch,
    r = n.pending,
    s = t.memoizedState;
  if (r !== null) {
    n.pending = null;
    var o = (r = r.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== r);
    Mt(s, t.memoizedState) || (Ze = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, i];
}
function tm() {}
function nm(e, t) {
  var n = fe,
    i = wt(),
    r = t(),
    s = !Mt(i.memoizedState, r);
  if (
    (s && ((i.memoizedState = r), (Ze = !0)),
    (i = i.queue),
    Bc(sm.bind(null, n, i, e), [e]),
    i.getSnapshot !== t || s || (Oe !== null && Oe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ss(9, rm.bind(null, n, i, r, t), void 0, null),
      je === null)
    )
      throw Error(P(349));
    si & 30 || im(n, t, r);
  }
  return r;
}
function im(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = fe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (fe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function rm(e, t, n, i) {
  (t.value = n), (t.getSnapshot = i), om(t) && am(e);
}
function sm(e, t, n) {
  return n(function () {
    om(t) && am(e);
  });
}
function om(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Mt(e, n);
  } catch {
    return !0;
  }
}
function am(e) {
  var t = nn(e, 1);
  t !== null && Pt(t, e, 1, -1);
}
function Ch(e) {
  var t = At();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: rs,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = k1.bind(null, fe, e)),
    [t.memoizedState, e]
  );
}
function ss(e, t, n, i) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: i, next: null }),
    (t = fe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (fe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((i = n.next), (n.next = e), (e.next = i), (t.lastEffect = e))),
    e
  );
}
function lm() {
  return wt().memoizedState;
}
function yo(e, t, n, i) {
  var r = At();
  (fe.flags |= e),
    (r.memoizedState = ss(1 | t, n, void 0, i === void 0 ? null : i));
}
function Oa(e, t, n, i) {
  var r = wt();
  i = i === void 0 ? null : i;
  var s = void 0;
  if (Ce !== null) {
    var o = Ce.memoizedState;
    if (((s = o.destroy), i !== null && Nc(i, o.deps))) {
      r.memoizedState = ss(t, n, s, i);
      return;
    }
  }
  (fe.flags |= e), (r.memoizedState = ss(1 | t, n, s, i));
}
function Th(e, t) {
  return yo(8390656, 8, e, t);
}
function Bc(e, t) {
  return Oa(2048, 8, e, t);
}
function um(e, t) {
  return Oa(4, 2, e, t);
}
function cm(e, t) {
  return Oa(4, 4, e, t);
}
function dm(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function hm(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Oa(4, 4, dm.bind(null, t, e), n)
  );
}
function Wc() {}
function fm(e, t) {
  var n = wt();
  t = t === void 0 ? null : t;
  var i = n.memoizedState;
  return i !== null && t !== null && Nc(t, i[1])
    ? i[0]
    : ((n.memoizedState = [e, t]), e);
}
function pm(e, t) {
  var n = wt();
  t = t === void 0 ? null : t;
  var i = n.memoizedState;
  return i !== null && t !== null && Nc(t, i[1])
    ? i[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function gm(e, t, n) {
  return si & 21
    ? (Mt(n, t) || ((n = vg()), (fe.lanes |= n), (oi |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ze = !0)), (e.memoizedState = n));
}
function S1(e, t) {
  var n = te;
  (te = n !== 0 && 4 > n ? n : 4), e(!0);
  var i = wl.transition;
  wl.transition = {};
  try {
    e(!1), t();
  } finally {
    (te = n), (wl.transition = i);
  }
}
function mm() {
  return wt().memoizedState;
}
function b1(e, t, n) {
  var i = Pn(e);
  if (
    ((n = {
      lane: i,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ym(e))
  )
    vm(t, n);
  else if (((n = Kg(e, t, n, i)), n !== null)) {
    var r = Ve();
    Pt(n, e, i, r), xm(n, t, i);
  }
}
function k1(e, t, n) {
  var i = Pn(e),
    r = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ym(e)) vm(t, r);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = s(o, n);
        if (((r.hasEagerState = !0), (r.eagerState = a), Mt(a, o))) {
          var l = t.interleaved;
          l === null
            ? ((r.next = r), jc(t))
            : ((r.next = l.next), (l.next = r)),
            (t.interleaved = r);
          return;
        }
      } catch {
      } finally {
      }
    (n = Kg(e, t, r, i)),
      n !== null && ((r = Ve()), Pt(n, e, i, r), xm(n, t, i));
  }
}
function ym(e) {
  var t = e.alternate;
  return e === fe || (t !== null && t === fe);
}
function vm(e, t) {
  Dr = Go = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function xm(e, t, n) {
  if (n & 4194240) {
    var i = t.lanes;
    (i &= e.pendingLanes), (n |= i), (t.lanes = n), vc(e, n);
  }
}
var Qo = {
    readContext: xt,
    useCallback: Fe,
    useContext: Fe,
    useEffect: Fe,
    useImperativeHandle: Fe,
    useInsertionEffect: Fe,
    useLayoutEffect: Fe,
    useMemo: Fe,
    useReducer: Fe,
    useRef: Fe,
    useState: Fe,
    useDebugValue: Fe,
    useDeferredValue: Fe,
    useTransition: Fe,
    useMutableSource: Fe,
    useSyncExternalStore: Fe,
    useId: Fe,
    unstable_isNewReconciler: !1,
  },
  C1 = {
    readContext: xt,
    useCallback: function (e, t) {
      return (At().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: xt,
    useEffect: Th,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        yo(4194308, 4, dm.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return yo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return yo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = At();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var i = At();
      return (
        (t = n !== void 0 ? n(t) : t),
        (i.memoizedState = i.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (i.queue = e),
        (e = e.dispatch = b1.bind(null, fe, e)),
        [i.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = At();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ch,
    useDebugValue: Wc,
    useDeferredValue: function (e) {
      return (At().memoizedState = e);
    },
    useTransition: function () {
      var e = Ch(!1),
        t = e[0];
      return (e = S1.bind(null, e[1])), (At().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var i = fe,
        r = At();
      if (oe) {
        if (n === void 0) throw Error(P(407));
        n = n();
      } else {
        if (((n = t()), je === null)) throw Error(P(349));
        si & 30 || im(i, t, n);
      }
      r.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (r.queue = s),
        Th(sm.bind(null, i, s, e), [e]),
        (i.flags |= 2048),
        ss(9, rm.bind(null, i, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = At(),
        t = je.identifierPrefix;
      if (oe) {
        var n = Qt,
          i = Gt;
        (n = (i & ~(1 << (32 - Et(i) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = is++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = _1++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  T1 = {
    readContext: xt,
    useCallback: fm,
    useContext: xt,
    useEffect: Bc,
    useImperativeHandle: hm,
    useInsertionEffect: um,
    useLayoutEffect: cm,
    useMemo: pm,
    useReducer: _l,
    useRef: lm,
    useState: function () {
      return _l(rs);
    },
    useDebugValue: Wc,
    useDeferredValue: function (e) {
      var t = wt();
      return gm(t, Ce.memoizedState, e);
    },
    useTransition: function () {
      var e = _l(rs)[0],
        t = wt().memoizedState;
      return [e, t];
    },
    useMutableSource: tm,
    useSyncExternalStore: nm,
    useId: mm,
    unstable_isNewReconciler: !1,
  },
  E1 = {
    readContext: xt,
    useCallback: fm,
    useContext: xt,
    useEffect: Bc,
    useImperativeHandle: hm,
    useInsertionEffect: um,
    useLayoutEffect: cm,
    useMemo: pm,
    useReducer: Sl,
    useRef: lm,
    useState: function () {
      return Sl(rs);
    },
    useDebugValue: Wc,
    useDeferredValue: function (e) {
      var t = wt();
      return Ce === null ? (t.memoizedState = e) : gm(t, Ce.memoizedState, e);
    },
    useTransition: function () {
      var e = Sl(rs)[0],
        t = wt().memoizedState;
      return [e, t];
    },
    useMutableSource: tm,
    useSyncExternalStore: nm,
    useId: mm,
    unstable_isNewReconciler: !1,
  };
function Yi(e, t) {
  try {
    var n = "",
      i = t;
    do (n += tv(i)), (i = i.return);
    while (i);
    var r = n;
  } catch (s) {
    r =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: r, digest: null };
}
function bl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Su(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var P1 = typeof WeakMap == "function" ? WeakMap : Map;
function wm(e, t, n) {
  (n = Jt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var i = t.value;
  return (
    (n.callback = function () {
      Jo || ((Jo = !0), (ju = i)), Su(e, t);
    }),
    n
  );
}
function _m(e, t, n) {
  (n = Jt(-1, n)), (n.tag = 3);
  var i = e.type.getDerivedStateFromError;
  if (typeof i == "function") {
    var r = t.value;
    (n.payload = function () {
      return i(r);
    }),
      (n.callback = function () {
        Su(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        Su(e, t),
          typeof i != "function" &&
            (En === null ? (En = new Set([this])) : En.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Eh(e, t, n) {
  var i = e.pingCache;
  if (i === null) {
    i = e.pingCache = new P1();
    var r = new Set();
    i.set(t, r);
  } else (r = i.get(t)), r === void 0 && ((r = new Set()), i.set(t, r));
  r.has(n) || (r.add(n), (e = $1.bind(null, e, t, n)), t.then(e, e));
}
function Ph(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Mh(e, t, n, i, r) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = r), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Jt(-1, 1)), (t.tag = 2), Tn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var M1 = on.ReactCurrentOwner,
  Ze = !1;
function Ue(e, t, n, i) {
  t.child = e === null ? Zg(t, null, n, i) : Ui(t, e.child, n, i);
}
function Oh(e, t, n, i, r) {
  n = n.render;
  var s = t.ref;
  return (
    Ii(t, r),
    (i = Fc(e, t, n, i, s, r)),
    (n = zc()),
    e !== null && !Ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~r),
        rn(e, t, r))
      : (oe && n && Tc(t), (t.flags |= 1), Ue(e, t, i, r), t.child)
  );
}
function Rh(e, t, n, i, r) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Gc(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), Sm(e, t, s, i, r))
      : ((e = _o(n.type, null, i, t, t.mode, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & r))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : qr), n(o, i) && e.ref === t.ref)
    )
      return rn(e, t, r);
  }
  return (
    (t.flags |= 1),
    (e = Mn(s, i)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Sm(e, t, n, i, r) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (qr(s, i) && e.ref === t.ref)
      if (((Ze = !1), (t.pendingProps = i = s), (e.lanes & r) !== 0))
        e.flags & 131072 && (Ze = !0);
      else return (t.lanes = e.lanes), rn(e, t, r);
  }
  return bu(e, t, n, i, r);
}
function bm(e, t, n) {
  var i = t.pendingProps,
    r = i.children,
    s = e !== null ? e.memoizedState : null;
  if (i.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ie(Oi, rt),
        (rt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ie(Oi, rt),
          (rt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (i = s !== null ? s.baseLanes : n),
        ie(Oi, rt),
        (rt |= i);
    }
  else
    s !== null ? ((i = s.baseLanes | n), (t.memoizedState = null)) : (i = n),
      ie(Oi, rt),
      (rt |= i);
  return Ue(e, t, r, n), t.child;
}
function km(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function bu(e, t, n, i, r) {
  var s = tt(n) ? ii : $e.current;
  return (
    (s = $i(t, s)),
    Ii(t, r),
    (n = Fc(e, t, n, i, s, r)),
    (i = zc()),
    e !== null && !Ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~r),
        rn(e, t, r))
      : (oe && i && Tc(t), (t.flags |= 1), Ue(e, t, n, r), t.child)
  );
}
function jh(e, t, n, i, r) {
  if (tt(n)) {
    var s = !0;
    $o(t);
  } else s = !1;
  if ((Ii(t, r), t.stateNode === null))
    vo(e, t), qg(t, n, i), _u(t, n, i, r), (i = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var l = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = xt(u))
      : ((u = tt(n) ? ii : $e.current), (u = $i(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== i || l !== u) && bh(t, o, i, u)),
      (fn = !1);
    var h = t.memoizedState;
    (o.state = h),
      Xo(t, i, o, r),
      (l = t.memoizedState),
      a !== i || h !== l || et.current || fn
        ? (typeof c == "function" && (wu(t, n, c, i), (l = t.memoizedState)),
          (a = fn || Sh(t, n, a, i, h, l, u))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = i),
              (t.memoizedState = l)),
          (o.props = i),
          (o.state = l),
          (o.context = u),
          (i = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (i = !1));
  } else {
    (o = t.stateNode),
      Gg(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : St(t.type, a)),
      (o.props = u),
      (d = t.pendingProps),
      (h = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = xt(l))
        : ((l = tt(n) ? ii : $e.current), (l = $i(t, l)));
    var f = n.getDerivedStateFromProps;
    (c =
      typeof f == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== d || h !== l) && bh(t, o, i, l)),
      (fn = !1),
      (h = t.memoizedState),
      (o.state = h),
      Xo(t, i, o, r);
    var p = t.memoizedState;
    a !== d || h !== p || et.current || fn
      ? (typeof f == "function" && (wu(t, n, f, i), (p = t.memoizedState)),
        (u = fn || Sh(t, n, u, i, h, p, l) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(i, p, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(i, p, l)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = i),
            (t.memoizedState = p)),
        (o.props = i),
        (o.state = p),
        (o.context = l),
        (i = u))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (i = !1));
  }
  return ku(e, t, n, i, s, r);
}
function ku(e, t, n, i, r, s) {
  km(e, t);
  var o = (t.flags & 128) !== 0;
  if (!i && !o) return r && yh(t, n, !1), rn(e, t, s);
  (i = t.stateNode), (M1.current = t);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : i.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Ui(t, e.child, null, s)), (t.child = Ui(t, null, a, s)))
      : Ue(e, t, a, s),
    (t.memoizedState = i.state),
    r && yh(t, n, !0),
    t.child
  );
}
function Cm(e) {
  var t = e.stateNode;
  t.pendingContext
    ? mh(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && mh(e, t.context, !1),
    Ac(e, t.containerInfo);
}
function Lh(e, t, n, i, r) {
  return Hi(), Pc(r), (t.flags |= 256), Ue(e, t, n, i), t.child;
}
var Cu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Tu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Tm(e, t, n) {
  var i = t.pendingProps,
    r = ce.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (r & 2) !== 0),
    a
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (r |= 1),
    ie(ce, r & 1),
    e === null)
  )
    return (
      vu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = i.children),
          (e = i.fallback),
          s
            ? ((i = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(i & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = La(o, i, 0, null)),
              (e = ti(e, i, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Tu(n)),
              (t.memoizedState = Cu),
              e)
            : $c(t, o))
    );
  if (((r = e.memoizedState), r !== null && ((a = r.dehydrated), a !== null)))
    return O1(e, t, o, i, a, r, n);
  if (s) {
    (s = i.fallback), (o = t.mode), (r = e.child), (a = r.sibling);
    var l = { mode: "hidden", children: i.children };
    return (
      !(o & 1) && t.child !== r
        ? ((i = t.child),
          (i.childLanes = 0),
          (i.pendingProps = l),
          (t.deletions = null))
        : ((i = Mn(r, l)), (i.subtreeFlags = r.subtreeFlags & 14680064)),
      a !== null ? (s = Mn(a, s)) : ((s = ti(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (i.return = t),
      (i.sibling = s),
      (t.child = i),
      (i = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Tu(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Cu),
      i
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (i = Mn(s, { mode: "visible", children: i.children })),
    !(t.mode & 1) && (i.lanes = n),
    (i.return = t),
    (i.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = i),
    (t.memoizedState = null),
    i
  );
}
function $c(e, t) {
  return (
    (t = La({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function zs(e, t, n, i) {
  return (
    i !== null && Pc(i),
    Ui(t, e.child, null, n),
    (e = $c(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function O1(e, t, n, i, r, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (i = bl(Error(P(422)))), zs(e, t, o, i))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = i.fallback),
        (r = t.mode),
        (i = La({ mode: "visible", children: i.children }, r, 0, null)),
        (s = ti(s, r, o, null)),
        (s.flags |= 2),
        (i.return = t),
        (s.return = t),
        (i.sibling = s),
        (t.child = i),
        t.mode & 1 && Ui(t, e.child, null, o),
        (t.child.memoizedState = Tu(o)),
        (t.memoizedState = Cu),
        s);
  if (!(t.mode & 1)) return zs(e, t, o, null);
  if (r.data === "$!") {
    if (((i = r.nextSibling && r.nextSibling.dataset), i)) var a = i.dgst;
    return (i = a), (s = Error(P(419))), (i = bl(s, i, void 0)), zs(e, t, o, i);
  }
  if (((a = (o & e.childLanes) !== 0), Ze || a)) {
    if (((i = je), i !== null)) {
      switch (o & -o) {
        case 4:
          r = 2;
          break;
        case 16:
          r = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          r = 32;
          break;
        case 536870912:
          r = 268435456;
          break;
        default:
          r = 0;
      }
      (r = r & (i.suspendedLanes | o) ? 0 : r),
        r !== 0 &&
          r !== s.retryLane &&
          ((s.retryLane = r), nn(e, r), Pt(i, e, r, -1));
    }
    return Kc(), (i = bl(Error(P(421)))), zs(e, t, o, i);
  }
  return r.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = H1.bind(null, e)),
      (r._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (st = Cn(r.nextSibling)),
      (lt = t),
      (oe = !0),
      (Ct = null),
      e !== null &&
        ((ft[pt++] = Gt),
        (ft[pt++] = Qt),
        (ft[pt++] = ri),
        (Gt = e.id),
        (Qt = e.overflow),
        (ri = t)),
      (t = $c(t, i.children)),
      (t.flags |= 4096),
      t);
}
function Ah(e, t, n) {
  e.lanes |= t;
  var i = e.alternate;
  i !== null && (i.lanes |= t), xu(e.return, t, n);
}
function kl(e, t, n, i, r) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: n,
        tailMode: r,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = i),
      (s.tail = n),
      (s.tailMode = r));
}
function Em(e, t, n) {
  var i = t.pendingProps,
    r = i.revealOrder,
    s = i.tail;
  if ((Ue(e, t, i.children, n), (i = ce.current), i & 2))
    (i = (i & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ah(e, n, t);
        else if (e.tag === 19) Ah(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    i &= 1;
  }
  if ((ie(ce, i), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (r) {
      case "forwards":
        for (n = t.child, r = null; n !== null; )
          (e = n.alternate),
            e !== null && Ko(e) === null && (r = n),
            (n = n.sibling);
        (n = r),
          n === null
            ? ((r = t.child), (t.child = null))
            : ((r = n.sibling), (n.sibling = null)),
          kl(t, !1, r, n, s);
        break;
      case "backwards":
        for (n = null, r = t.child, t.child = null; r !== null; ) {
          if (((e = r.alternate), e !== null && Ko(e) === null)) {
            t.child = r;
            break;
          }
          (e = r.sibling), (r.sibling = n), (n = r), (r = e);
        }
        kl(t, !0, n, null, s);
        break;
      case "together":
        kl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function vo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function rn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (oi |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(P(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Mn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Mn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function R1(e, t, n) {
  switch (t.tag) {
    case 3:
      Cm(t), Hi();
      break;
    case 5:
      em(t);
      break;
    case 1:
      tt(t.type) && $o(t);
      break;
    case 4:
      Ac(t, t.stateNode.containerInfo);
      break;
    case 10:
      var i = t.type._context,
        r = t.memoizedProps.value;
      ie(Vo, i._currentValue), (i._currentValue = r);
      break;
    case 13:
      if (((i = t.memoizedState), i !== null))
        return i.dehydrated !== null
          ? (ie(ce, ce.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Tm(e, t, n)
          : (ie(ce, ce.current & 1),
            (e = rn(e, t, n)),
            e !== null ? e.sibling : null);
      ie(ce, ce.current & 1);
      break;
    case 19:
      if (((i = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (i) return Em(e, t, n);
        t.flags |= 128;
      }
      if (
        ((r = t.memoizedState),
        r !== null &&
          ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
        ie(ce, ce.current),
        i)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), bm(e, t, n);
  }
  return rn(e, t, n);
}
var Pm, Eu, Mm, Om;
Pm = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Eu = function () {};
Mm = function (e, t, n, i) {
  var r = e.memoizedProps;
  if (r !== i) {
    (e = t.stateNode), Zn(Bt.current);
    var s = null;
    switch (n) {
      case "input":
        (r = Gl(e, r)), (i = Gl(e, i)), (s = []);
        break;
      case "select":
        (r = pe({}, r, { value: void 0 })),
          (i = pe({}, i, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (r = Jl(e, r)), (i = Jl(e, i)), (s = []);
        break;
      default:
        typeof r.onClick != "function" &&
          typeof i.onClick == "function" &&
          (e.onclick = Bo);
    }
    eu(n, i);
    var o;
    n = null;
    for (u in r)
      if (!i.hasOwnProperty(u) && r.hasOwnProperty(u) && r[u] != null)
        if (u === "style") {
          var a = r[u];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Ur.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in i) {
      var l = i[u];
      if (
        ((a = r != null ? r[u] : void 0),
        i.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (n || (n = {}), (n[o] = l[o]));
          } else n || (s || (s = []), s.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (s = s || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Ur.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && re("scroll", e),
                  s || a === l || (s = []))
                : (s = s || []).push(u, l));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Om = function (e, t, n, i) {
  n !== i && (t.flags |= 4);
};
function dr(e, t) {
  if (!oe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var i = null; n !== null; )
          n.alternate !== null && (i = n), (n = n.sibling);
        i === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (i.sibling = null);
    }
}
function ze(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    i = 0;
  if (t)
    for (var r = e.child; r !== null; )
      (n |= r.lanes | r.childLanes),
        (i |= r.subtreeFlags & 14680064),
        (i |= r.flags & 14680064),
        (r.return = e),
        (r = r.sibling);
  else
    for (r = e.child; r !== null; )
      (n |= r.lanes | r.childLanes),
        (i |= r.subtreeFlags),
        (i |= r.flags),
        (r.return = e),
        (r = r.sibling);
  return (e.subtreeFlags |= i), (e.childLanes = n), t;
}
function j1(e, t, n) {
  var i = t.pendingProps;
  switch ((Ec(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ze(t), null;
    case 1:
      return tt(t.type) && Wo(), ze(t), null;
    case 3:
      return (
        (i = t.stateNode),
        Vi(),
        se(et),
        se($e),
        Ic(),
        i.pendingContext &&
          ((i.context = i.pendingContext), (i.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ns(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ct !== null && (Du(Ct), (Ct = null)))),
        Eu(e, t),
        ze(t),
        null
      );
    case 5:
      Dc(t);
      var r = Zn(ns.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Mm(e, t, n, i, r),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!i) {
          if (t.stateNode === null) throw Error(P(166));
          return ze(t), null;
        }
        if (((e = Zn(Bt.current)), Ns(t))) {
          (i = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((i[It] = t), (i[es] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              re("cancel", i), re("close", i);
              break;
            case "iframe":
            case "object":
            case "embed":
              re("load", i);
              break;
            case "video":
            case "audio":
              for (r = 0; r < br.length; r++) re(br[r], i);
              break;
            case "source":
              re("error", i);
              break;
            case "img":
            case "image":
            case "link":
              re("error", i), re("load", i);
              break;
            case "details":
              re("toggle", i);
              break;
            case "input":
              Hd(i, s), re("invalid", i);
              break;
            case "select":
              (i._wrapperState = { wasMultiple: !!s.multiple }),
                re("invalid", i);
              break;
            case "textarea":
              Vd(i, s), re("invalid", i);
          }
          eu(n, s), (r = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "children"
                ? typeof a == "string"
                  ? i.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Is(i.textContent, a, e),
                    (r = ["children", a]))
                  : typeof a == "number" &&
                    i.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Is(i.textContent, a, e),
                    (r = ["children", "" + a]))
                : Ur.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  re("scroll", i);
            }
          switch (n) {
            case "input":
              Ps(i), Ud(i, s, !0);
              break;
            case "textarea":
              Ps(i), Yd(i);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (i.onclick = Bo);
          }
          (i = r), (t.updateQueue = i), i !== null && (t.flags |= 4);
        } else {
          (o = r.nodeType === 9 ? r : r.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ig(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof i.is == "string"
                ? (e = o.createElement(n, { is: i.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    i.multiple
                      ? (o.multiple = !0)
                      : i.size && (o.size = i.size)))
              : (e = o.createElementNS(e, n)),
            (e[It] = t),
            (e[es] = i),
            Pm(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = tu(n, i)), n)) {
              case "dialog":
                re("cancel", e), re("close", e), (r = i);
                break;
              case "iframe":
              case "object":
              case "embed":
                re("load", e), (r = i);
                break;
              case "video":
              case "audio":
                for (r = 0; r < br.length; r++) re(br[r], e);
                r = i;
                break;
              case "source":
                re("error", e), (r = i);
                break;
              case "img":
              case "image":
              case "link":
                re("error", e), re("load", e), (r = i);
                break;
              case "details":
                re("toggle", e), (r = i);
                break;
              case "input":
                Hd(e, i), (r = Gl(e, i)), re("invalid", e);
                break;
              case "option":
                r = i;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!i.multiple }),
                  (r = pe({}, i, { value: void 0 })),
                  re("invalid", e);
                break;
              case "textarea":
                Vd(e, i), (r = Jl(e, i)), re("invalid", e);
                break;
              default:
                r = i;
            }
            eu(n, r), (a = r);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === "style"
                  ? og(e, l)
                  : s === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && rg(e, l))
                  : s === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Vr(e, l)
                    : typeof l == "number" && Vr(e, "" + l)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (Ur.hasOwnProperty(s)
                      ? l != null && s === "onScroll" && re("scroll", e)
                      : l != null && hc(e, s, l, o));
              }
            switch (n) {
              case "input":
                Ps(e), Ud(e, i, !1);
                break;
              case "textarea":
                Ps(e), Yd(e);
                break;
              case "option":
                i.value != null && e.setAttribute("value", "" + jn(i.value));
                break;
              case "select":
                (e.multiple = !!i.multiple),
                  (s = i.value),
                  s != null
                    ? ji(e, !!i.multiple, s, !1)
                    : i.defaultValue != null &&
                      ji(e, !!i.multiple, i.defaultValue, !0);
                break;
              default:
                typeof r.onClick == "function" && (e.onclick = Bo);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break e;
              case "img":
                i = !0;
                break e;
              default:
                i = !1;
            }
          }
          i && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ze(t), null;
    case 6:
      if (e && t.stateNode != null) Om(e, t, e.memoizedProps, i);
      else {
        if (typeof i != "string" && t.stateNode === null) throw Error(P(166));
        if (((n = Zn(ns.current)), Zn(Bt.current), Ns(t))) {
          if (
            ((i = t.stateNode),
            (n = t.memoizedProps),
            (i[It] = t),
            (s = i.nodeValue !== n) && ((e = lt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Is(i.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Is(i.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i)),
            (i[It] = t),
            (t.stateNode = i);
      }
      return ze(t), null;
    case 13:
      if (
        (se(ce),
        (i = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (oe && st !== null && t.mode & 1 && !(t.flags & 128))
          Xg(), Hi(), (t.flags |= 98560), (s = !1);
        else if (((s = Ns(t)), i !== null && i.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(P(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(P(317));
            s[It] = t;
          } else
            Hi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ze(t), (s = !1);
        } else Ct !== null && (Du(Ct), (Ct = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((i = i !== null),
          i !== (e !== null && e.memoizedState !== null) &&
            i &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ce.current & 1 ? Ee === 0 && (Ee = 3) : Kc())),
          t.updateQueue !== null && (t.flags |= 4),
          ze(t),
          null);
    case 4:
      return (
        Vi(), Eu(e, t), e === null && Jr(t.stateNode.containerInfo), ze(t), null
      );
    case 10:
      return Rc(t.type._context), ze(t), null;
    case 17:
      return tt(t.type) && Wo(), ze(t), null;
    case 19:
      if ((se(ce), (s = t.memoizedState), s === null)) return ze(t), null;
      if (((i = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (i) dr(s, !1);
        else {
          if (Ee !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Ko(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    dr(s, !1),
                    i = o.updateQueue,
                    i !== null && ((t.updateQueue = i), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    i = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = i),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ie(ce, (ce.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            xe() > Xi &&
            ((t.flags |= 128), (i = !0), dr(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!i)
          if (((e = Ko(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (i = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              dr(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !oe)
            )
              return ze(t), null;
          } else
            2 * xe() - s.renderingStartTime > Xi &&
              n !== 1073741824 &&
              ((t.flags |= 128), (i = !0), dr(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = xe()),
          (t.sibling = null),
          (n = ce.current),
          ie(ce, i ? (n & 1) | 2 : n & 1),
          t)
        : (ze(t), null);
    case 22:
    case 23:
      return (
        Xc(),
        (i = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== i && (t.flags |= 8192),
        i && t.mode & 1
          ? rt & 1073741824 && (ze(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ze(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(P(156, t.tag));
}
function L1(e, t) {
  switch ((Ec(t), t.tag)) {
    case 1:
      return (
        tt(t.type) && Wo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Vi(),
        se(et),
        se($e),
        Ic(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Dc(t), null;
    case 13:
      if (
        (se(ce), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(P(340));
        Hi();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return se(ce), null;
    case 4:
      return Vi(), null;
    case 10:
      return Rc(t.type._context), null;
    case 22:
    case 23:
      return Xc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Bs = !1,
  We = !1,
  A1 = typeof WeakSet == "function" ? WeakSet : Set,
  j = null;
function Mi(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (i) {
        ge(e, t, i);
      }
    else n.current = null;
}
function Pu(e, t, n) {
  try {
    n();
  } catch (i) {
    ge(e, t, i);
  }
}
var Dh = !1;
function D1(e, t) {
  if (((du = No), (e = Ag()), Cc(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var i = n.getSelection && n.getSelection();
        if (i && i.rangeCount !== 0) {
          n = i.anchorNode;
          var r = i.anchorOffset,
            s = i.focusNode;
          i = i.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            h = null;
          t: for (;;) {
            for (
              var f;
              d !== n || (r !== 0 && d.nodeType !== 3) || (a = o + r),
                d !== s || (i !== 0 && d.nodeType !== 3) || (l = o + i),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (f = d.firstChild) !== null;

            )
              (h = d), (d = f);
            for (;;) {
              if (d === e) break t;
              if (
                (h === n && ++u === r && (a = o),
                h === s && ++c === i && (l = o),
                (f = d.nextSibling) !== null)
              )
                break;
              (d = h), (h = d.parentNode);
            }
            d = f;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (hu = { focusedElem: e, selectionRange: n }, No = !1, j = t; j !== null; )
    if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (j = e);
    else
      for (; j !== null; ) {
        t = j;
        try {
          var p = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (p !== null) {
                  var y = p.memoizedProps,
                    w = p.memoizedState,
                    m = t.stateNode,
                    v = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : St(t.type, y),
                      w
                    );
                  m.__reactInternalSnapshotBeforeUpdate = v;
                }
                break;
              case 3:
                var x = t.stateNode.containerInfo;
                x.nodeType === 1
                  ? (x.textContent = "")
                  : x.nodeType === 9 &&
                    x.documentElement &&
                    x.removeChild(x.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(P(163));
            }
        } catch (_) {
          ge(t, t.return, _);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (j = e);
          break;
        }
        j = t.return;
      }
  return (p = Dh), (Dh = !1), p;
}
function Ir(e, t, n) {
  var i = t.updateQueue;
  if (((i = i !== null ? i.lastEffect : null), i !== null)) {
    var r = (i = i.next);
    do {
      if ((r.tag & e) === e) {
        var s = r.destroy;
        (r.destroy = void 0), s !== void 0 && Pu(t, n, s);
      }
      r = r.next;
    } while (r !== i);
  }
}
function Ra(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var i = n.create;
        n.destroy = i();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Mu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Rm(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Rm(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[It], delete t[es], delete t[gu], delete t[y1], delete t[v1])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function jm(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ih(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || jm(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ou(e, t, n) {
  var i = e.tag;
  if (i === 5 || i === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Bo));
  else if (i !== 4 && ((e = e.child), e !== null))
    for (Ou(e, t, n), e = e.sibling; e !== null; ) Ou(e, t, n), (e = e.sibling);
}
function Ru(e, t, n) {
  var i = e.tag;
  if (i === 5 || i === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (i !== 4 && ((e = e.child), e !== null))
    for (Ru(e, t, n), e = e.sibling; e !== null; ) Ru(e, t, n), (e = e.sibling);
}
var Ae = null,
  bt = !1;
function ln(e, t, n) {
  for (n = n.child; n !== null; ) Lm(e, t, n), (n = n.sibling);
}
function Lm(e, t, n) {
  if (zt && typeof zt.onCommitFiberUnmount == "function")
    try {
      zt.onCommitFiberUnmount(ba, n);
    } catch {}
  switch (n.tag) {
    case 5:
      We || Mi(n, t);
    case 6:
      var i = Ae,
        r = bt;
      (Ae = null),
        ln(e, t, n),
        (Ae = i),
        (bt = r),
        Ae !== null &&
          (bt
            ? ((e = Ae),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ae.removeChild(n.stateNode));
      break;
    case 18:
      Ae !== null &&
        (bt
          ? ((e = Ae),
            (n = n.stateNode),
            e.nodeType === 8
              ? yl(e.parentNode, n)
              : e.nodeType === 1 && yl(e, n),
            Gr(e))
          : yl(Ae, n.stateNode));
      break;
    case 4:
      (i = Ae),
        (r = bt),
        (Ae = n.stateNode.containerInfo),
        (bt = !0),
        ln(e, t, n),
        (Ae = i),
        (bt = r);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !We &&
        ((i = n.updateQueue), i !== null && ((i = i.lastEffect), i !== null))
      ) {
        r = i = i.next;
        do {
          var s = r,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && Pu(n, t, o),
            (r = r.next);
        } while (r !== i);
      }
      ln(e, t, n);
      break;
    case 1:
      if (
        !We &&
        (Mi(n, t),
        (i = n.stateNode),
        typeof i.componentWillUnmount == "function")
      )
        try {
          (i.props = n.memoizedProps),
            (i.state = n.memoizedState),
            i.componentWillUnmount();
        } catch (a) {
          ge(n, t, a);
        }
      ln(e, t, n);
      break;
    case 21:
      ln(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((We = (i = We) || n.memoizedState !== null), ln(e, t, n), (We = i))
        : ln(e, t, n);
      break;
    default:
      ln(e, t, n);
  }
}
function Nh(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new A1()),
      t.forEach(function (i) {
        var r = U1.bind(null, e, i);
        n.has(i) || (n.add(i), i.then(r, r));
      });
  }
}
function _t(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var i = 0; i < n.length; i++) {
      var r = n[i];
      try {
        var s = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ae = a.stateNode), (bt = !1);
              break e;
            case 3:
              (Ae = a.stateNode.containerInfo), (bt = !0);
              break e;
            case 4:
              (Ae = a.stateNode.containerInfo), (bt = !0);
              break e;
          }
          a = a.return;
        }
        if (Ae === null) throw Error(P(160));
        Lm(s, o, r), (Ae = null), (bt = !1);
        var l = r.alternate;
        l !== null && (l.return = null), (r.return = null);
      } catch (u) {
        ge(r, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Am(t, e), (t = t.sibling);
}
function Am(e, t) {
  var n = e.alternate,
    i = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((_t(t, e), Ot(e), i & 4)) {
        try {
          Ir(3, e, e.return), Ra(3, e);
        } catch (y) {
          ge(e, e.return, y);
        }
        try {
          Ir(5, e, e.return);
        } catch (y) {
          ge(e, e.return, y);
        }
      }
      break;
    case 1:
      _t(t, e), Ot(e), i & 512 && n !== null && Mi(n, n.return);
      break;
    case 5:
      if (
        (_t(t, e),
        Ot(e),
        i & 512 && n !== null && Mi(n, n.return),
        e.flags & 32)
      ) {
        var r = e.stateNode;
        try {
          Vr(r, "");
        } catch (y) {
          ge(e, e.return, y);
        }
      }
      if (i & 4 && ((r = e.stateNode), r != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && s.type === "radio" && s.name != null && tg(r, s),
              tu(a, o);
            var u = tu(a, s);
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                d = l[o + 1];
              c === "style"
                ? og(r, d)
                : c === "dangerouslySetInnerHTML"
                ? rg(r, d)
                : c === "children"
                ? Vr(r, d)
                : hc(r, c, d, u);
            }
            switch (a) {
              case "input":
                Ql(r, s);
                break;
              case "textarea":
                ng(r, s);
                break;
              case "select":
                var h = r._wrapperState.wasMultiple;
                r._wrapperState.wasMultiple = !!s.multiple;
                var f = s.value;
                f != null
                  ? ji(r, !!s.multiple, f, !1)
                  : h !== !!s.multiple &&
                    (s.defaultValue != null
                      ? ji(r, !!s.multiple, s.defaultValue, !0)
                      : ji(r, !!s.multiple, s.multiple ? [] : "", !1));
            }
            r[es] = s;
          } catch (y) {
            ge(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((_t(t, e), Ot(e), i & 4)) {
        if (e.stateNode === null) throw Error(P(162));
        (r = e.stateNode), (s = e.memoizedProps);
        try {
          r.nodeValue = s;
        } catch (y) {
          ge(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (_t(t, e), Ot(e), i & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Gr(t.containerInfo);
        } catch (y) {
          ge(e, e.return, y);
        }
      break;
    case 4:
      _t(t, e), Ot(e);
      break;
    case 13:
      _t(t, e),
        Ot(e),
        (r = e.child),
        r.flags & 8192 &&
          ((s = r.memoizedState !== null),
          (r.stateNode.isHidden = s),
          !s ||
            (r.alternate !== null && r.alternate.memoizedState !== null) ||
            (Vc = xe())),
        i & 4 && Nh(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((We = (u = We) || c), _t(t, e), (We = u)) : _t(t, e),
        Ot(e),
        i & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (j = e, c = e.child; c !== null; ) {
            for (d = j = c; j !== null; ) {
              switch (((h = j), (f = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ir(4, h, h.return);
                  break;
                case 1:
                  Mi(h, h.return);
                  var p = h.stateNode;
                  if (typeof p.componentWillUnmount == "function") {
                    (i = h), (n = h.return);
                    try {
                      (t = i),
                        (p.props = t.memoizedProps),
                        (p.state = t.memoizedState),
                        p.componentWillUnmount();
                    } catch (y) {
                      ge(i, n, y);
                    }
                  }
                  break;
                case 5:
                  Mi(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    zh(d);
                    continue;
                  }
              }
              f !== null ? ((f.return = h), (j = f)) : zh(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (r = d.stateNode),
                  u
                    ? ((s = r.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = sg("display", o)));
              } catch (y) {
                ge(e, e.return, y);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (y) {
                ge(e, e.return, y);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      _t(t, e), Ot(e), i & 4 && Nh(e);
      break;
    case 21:
      break;
    default:
      _t(t, e), Ot(e);
  }
}
function Ot(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (jm(n)) {
            var i = n;
            break e;
          }
          n = n.return;
        }
        throw Error(P(160));
      }
      switch (i.tag) {
        case 5:
          var r = i.stateNode;
          i.flags & 32 && (Vr(r, ""), (i.flags &= -33));
          var s = Ih(e);
          Ru(e, s, r);
          break;
        case 3:
        case 4:
          var o = i.stateNode.containerInfo,
            a = Ih(e);
          Ou(e, a, o);
          break;
        default:
          throw Error(P(161));
      }
    } catch (l) {
      ge(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function I1(e, t, n) {
  (j = e), Dm(e);
}
function Dm(e, t, n) {
  for (var i = (e.mode & 1) !== 0; j !== null; ) {
    var r = j,
      s = r.child;
    if (r.tag === 22 && i) {
      var o = r.memoizedState !== null || Bs;
      if (!o) {
        var a = r.alternate,
          l = (a !== null && a.memoizedState !== null) || We;
        a = Bs;
        var u = We;
        if (((Bs = o), (We = l) && !u))
          for (j = r; j !== null; )
            (o = j),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Bh(r)
                : l !== null
                ? ((l.return = o), (j = l))
                : Bh(r);
        for (; s !== null; ) (j = s), Dm(s), (s = s.sibling);
        (j = r), (Bs = a), (We = u);
      }
      Fh(e);
    } else
      r.subtreeFlags & 8772 && s !== null ? ((s.return = r), (j = s)) : Fh(e);
  }
}
function Fh(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              We || Ra(5, t);
              break;
            case 1:
              var i = t.stateNode;
              if (t.flags & 4 && !We)
                if (n === null) i.componentDidMount();
                else {
                  var r =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : St(t.type, n.memoizedProps);
                  i.componentDidUpdate(
                    r,
                    n.memoizedState,
                    i.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && _h(t, s, i);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                _h(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Gr(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(P(163));
          }
        We || (t.flags & 512 && Mu(t));
      } catch (h) {
        ge(t, t.return, h);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function zh(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function Bh(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ra(4, t);
          } catch (l) {
            ge(t, n, l);
          }
          break;
        case 1:
          var i = t.stateNode;
          if (typeof i.componentDidMount == "function") {
            var r = t.return;
            try {
              i.componentDidMount();
            } catch (l) {
              ge(t, r, l);
            }
          }
          var s = t.return;
          try {
            Mu(t);
          } catch (l) {
            ge(t, s, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Mu(t);
          } catch (l) {
            ge(t, o, l);
          }
      }
    } catch (l) {
      ge(t, t.return, l);
    }
    if (t === e) {
      j = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (j = a);
      break;
    }
    j = t.return;
  }
}
var N1 = Math.ceil,
  qo = on.ReactCurrentDispatcher,
  Hc = on.ReactCurrentOwner,
  yt = on.ReactCurrentBatchConfig,
  K = 0,
  je = null,
  Se = null,
  De = 0,
  rt = 0,
  Oi = In(0),
  Ee = 0,
  os = null,
  oi = 0,
  ja = 0,
  Uc = 0,
  Nr = null,
  qe = null,
  Vc = 0,
  Xi = 1 / 0,
  Yt = null,
  Jo = !1,
  ju = null,
  En = null,
  Ws = !1,
  vn = null,
  Zo = 0,
  Fr = 0,
  Lu = null,
  xo = -1,
  wo = 0;
function Ve() {
  return K & 6 ? xe() : xo !== -1 ? xo : (xo = xe());
}
function Pn(e) {
  return e.mode & 1
    ? K & 2 && De !== 0
      ? De & -De
      : w1.transition !== null
      ? (wo === 0 && (wo = vg()), wo)
      : ((e = te),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Cg(e.type))),
        e)
    : 1;
}
function Pt(e, t, n, i) {
  if (50 < Fr) throw ((Fr = 0), (Lu = null), Error(P(185)));
  ys(e, n, i),
    (!(K & 2) || e !== je) &&
      (e === je && (!(K & 2) && (ja |= n), Ee === 4 && gn(e, De)),
      nt(e, i),
      n === 1 && K === 0 && !(t.mode & 1) && ((Xi = xe() + 500), Pa && Nn()));
}
function nt(e, t) {
  var n = e.callbackNode;
  wv(e, t);
  var i = Io(e, e === je ? De : 0);
  if (i === 0)
    n !== null && Gd(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = i & -i), e.callbackPriority !== t)) {
    if ((n != null && Gd(n), t === 1))
      e.tag === 0 ? x1(Wh.bind(null, e)) : Ug(Wh.bind(null, e)),
        g1(function () {
          !(K & 6) && Nn();
        }),
        (n = null);
    else {
      switch (xg(i)) {
        case 1:
          n = yc;
          break;
        case 4:
          n = mg;
          break;
        case 16:
          n = Do;
          break;
        case 536870912:
          n = yg;
          break;
        default:
          n = Do;
      }
      n = Hm(n, Im.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Im(e, t) {
  if (((xo = -1), (wo = 0), K & 6)) throw Error(P(327));
  var n = e.callbackNode;
  if (Ni() && e.callbackNode !== n) return null;
  var i = Io(e, e === je ? De : 0);
  if (i === 0) return null;
  if (i & 30 || i & e.expiredLanes || t) t = ea(e, i);
  else {
    t = i;
    var r = K;
    K |= 2;
    var s = Fm();
    (je !== e || De !== t) && ((Yt = null), (Xi = xe() + 500), ei(e, t));
    do
      try {
        B1();
        break;
      } catch (a) {
        Nm(e, a);
      }
    while (!0);
    Oc(),
      (qo.current = s),
      (K = r),
      Se !== null ? (t = 0) : ((je = null), (De = 0), (t = Ee));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((r = ou(e)), r !== 0 && ((i = r), (t = Au(e, r)))), t === 1)
    )
      throw ((n = os), ei(e, 0), gn(e, i), nt(e, xe()), n);
    if (t === 6) gn(e, i);
    else {
      if (
        ((r = e.current.alternate),
        !(i & 30) &&
          !F1(r) &&
          ((t = ea(e, i)),
          t === 2 && ((s = ou(e)), s !== 0 && ((i = s), (t = Au(e, s)))),
          t === 1))
      )
        throw ((n = os), ei(e, 0), gn(e, i), nt(e, xe()), n);
      switch (((e.finishedWork = r), (e.finishedLanes = i), t)) {
        case 0:
        case 1:
          throw Error(P(345));
        case 2:
          Kn(e, qe, Yt);
          break;
        case 3:
          if (
            (gn(e, i), (i & 130023424) === i && ((t = Vc + 500 - xe()), 10 < t))
          ) {
            if (Io(e, 0) !== 0) break;
            if (((r = e.suspendedLanes), (r & i) !== i)) {
              Ve(), (e.pingedLanes |= e.suspendedLanes & r);
              break;
            }
            e.timeoutHandle = pu(Kn.bind(null, e, qe, Yt), t);
            break;
          }
          Kn(e, qe, Yt);
          break;
        case 4:
          if ((gn(e, i), (i & 4194240) === i)) break;
          for (t = e.eventTimes, r = -1; 0 < i; ) {
            var o = 31 - Et(i);
            (s = 1 << o), (o = t[o]), o > r && (r = o), (i &= ~s);
          }
          if (
            ((i = r),
            (i = xe() - i),
            (i =
              (120 > i
                ? 120
                : 480 > i
                ? 480
                : 1080 > i
                ? 1080
                : 1920 > i
                ? 1920
                : 3e3 > i
                ? 3e3
                : 4320 > i
                ? 4320
                : 1960 * N1(i / 1960)) - i),
            10 < i)
          ) {
            e.timeoutHandle = pu(Kn.bind(null, e, qe, Yt), i);
            break;
          }
          Kn(e, qe, Yt);
          break;
        case 5:
          Kn(e, qe, Yt);
          break;
        default:
          throw Error(P(329));
      }
    }
  }
  return nt(e, xe()), e.callbackNode === n ? Im.bind(null, e) : null;
}
function Au(e, t) {
  var n = Nr;
  return (
    e.current.memoizedState.isDehydrated && (ei(e, t).flags |= 256),
    (e = ea(e, t)),
    e !== 2 && ((t = qe), (qe = n), t !== null && Du(t)),
    e
  );
}
function Du(e) {
  qe === null ? (qe = e) : qe.push.apply(qe, e);
}
function F1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var i = 0; i < n.length; i++) {
          var r = n[i],
            s = r.getSnapshot;
          r = r.value;
          try {
            if (!Mt(s(), r)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function gn(e, t) {
  for (
    t &= ~Uc,
      t &= ~ja,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Et(t),
      i = 1 << n;
    (e[n] = -1), (t &= ~i);
  }
}
function Wh(e) {
  if (K & 6) throw Error(P(327));
  Ni();
  var t = Io(e, 0);
  if (!(t & 1)) return nt(e, xe()), null;
  var n = ea(e, t);
  if (e.tag !== 0 && n === 2) {
    var i = ou(e);
    i !== 0 && ((t = i), (n = Au(e, i)));
  }
  if (n === 1) throw ((n = os), ei(e, 0), gn(e, t), nt(e, xe()), n);
  if (n === 6) throw Error(P(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Kn(e, qe, Yt),
    nt(e, xe()),
    null
  );
}
function Yc(e, t) {
  var n = K;
  K |= 1;
  try {
    return e(t);
  } finally {
    (K = n), K === 0 && ((Xi = xe() + 500), Pa && Nn());
  }
}
function ai(e) {
  vn !== null && vn.tag === 0 && !(K & 6) && Ni();
  var t = K;
  K |= 1;
  var n = yt.transition,
    i = te;
  try {
    if (((yt.transition = null), (te = 1), e)) return e();
  } finally {
    (te = i), (yt.transition = n), (K = t), !(K & 6) && Nn();
  }
}
function Xc() {
  (rt = Oi.current), se(Oi);
}
function ei(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), p1(n)), Se !== null))
    for (n = Se.return; n !== null; ) {
      var i = n;
      switch ((Ec(i), i.tag)) {
        case 1:
          (i = i.type.childContextTypes), i != null && Wo();
          break;
        case 3:
          Vi(), se(et), se($e), Ic();
          break;
        case 5:
          Dc(i);
          break;
        case 4:
          Vi();
          break;
        case 13:
          se(ce);
          break;
        case 19:
          se(ce);
          break;
        case 10:
          Rc(i.type._context);
          break;
        case 22:
        case 23:
          Xc();
      }
      n = n.return;
    }
  if (
    ((je = e),
    (Se = e = Mn(e.current, null)),
    (De = rt = t),
    (Ee = 0),
    (os = null),
    (Uc = ja = oi = 0),
    (qe = Nr = null),
    Jn !== null)
  ) {
    for (t = 0; t < Jn.length; t++)
      if (((n = Jn[t]), (i = n.interleaved), i !== null)) {
        n.interleaved = null;
        var r = i.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = r), (i.next = o);
        }
        n.pending = i;
      }
    Jn = null;
  }
  return e;
}
function Nm(e, t) {
  do {
    var n = Se;
    try {
      if ((Oc(), (mo.current = Qo), Go)) {
        for (var i = fe.memoizedState; i !== null; ) {
          var r = i.queue;
          r !== null && (r.pending = null), (i = i.next);
        }
        Go = !1;
      }
      if (
        ((si = 0),
        (Oe = Ce = fe = null),
        (Dr = !1),
        (is = 0),
        (Hc.current = null),
        n === null || n.return === null)
      ) {
        (Ee = 1), (os = t), (Se = null);
        break;
      }
      e: {
        var s = e,
          o = n.return,
          a = n,
          l = t;
        if (
          ((t = De),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var h = c.alternate;
            h
              ? ((c.updateQueue = h.updateQueue),
                (c.memoizedState = h.memoizedState),
                (c.lanes = h.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var f = Ph(o);
          if (f !== null) {
            (f.flags &= -257),
              Mh(f, o, a, s, t),
              f.mode & 1 && Eh(s, u, t),
              (t = f),
              (l = u);
            var p = t.updateQueue;
            if (p === null) {
              var y = new Set();
              y.add(l), (t.updateQueue = y);
            } else p.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Eh(s, u, t), Kc();
              break e;
            }
            l = Error(P(426));
          }
        } else if (oe && a.mode & 1) {
          var w = Ph(o);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              Mh(w, o, a, s, t),
              Pc(Yi(l, a));
            break e;
          }
        }
        (s = l = Yi(l, a)),
          Ee !== 4 && (Ee = 2),
          Nr === null ? (Nr = [s]) : Nr.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var m = wm(s, l, t);
              wh(s, m);
              break e;
            case 1:
              a = l;
              var v = s.type,
                x = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof v.getDerivedStateFromError == "function" ||
                  (x !== null &&
                    typeof x.componentDidCatch == "function" &&
                    (En === null || !En.has(x))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var _ = _m(s, a, t);
                wh(s, _);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Bm(n);
    } catch (S) {
      (t = S), Se === n && n !== null && (Se = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Fm() {
  var e = qo.current;
  return (qo.current = Qo), e === null ? Qo : e;
}
function Kc() {
  (Ee === 0 || Ee === 3 || Ee === 2) && (Ee = 4),
    je === null || (!(oi & 268435455) && !(ja & 268435455)) || gn(je, De);
}
function ea(e, t) {
  var n = K;
  K |= 2;
  var i = Fm();
  (je !== e || De !== t) && ((Yt = null), ei(e, t));
  do
    try {
      z1();
      break;
    } catch (r) {
      Nm(e, r);
    }
  while (!0);
  if ((Oc(), (K = n), (qo.current = i), Se !== null)) throw Error(P(261));
  return (je = null), (De = 0), Ee;
}
function z1() {
  for (; Se !== null; ) zm(Se);
}
function B1() {
  for (; Se !== null && !dv(); ) zm(Se);
}
function zm(e) {
  var t = $m(e.alternate, e, rt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Bm(e) : (Se = t),
    (Hc.current = null);
}
function Bm(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = L1(n, t)), n !== null)) {
        (n.flags &= 32767), (Se = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ee = 6), (Se = null);
        return;
      }
    } else if (((n = j1(n, t, rt)), n !== null)) {
      Se = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Se = t;
      return;
    }
    Se = t = e;
  } while (t !== null);
  Ee === 0 && (Ee = 5);
}
function Kn(e, t, n) {
  var i = te,
    r = yt.transition;
  try {
    (yt.transition = null), (te = 1), W1(e, t, n, i);
  } finally {
    (yt.transition = r), (te = i);
  }
  return null;
}
function W1(e, t, n, i) {
  do Ni();
  while (vn !== null);
  if (K & 6) throw Error(P(327));
  n = e.finishedWork;
  var r = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(P(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (_v(e, s),
    e === je && ((Se = je = null), (De = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ws ||
      ((Ws = !0),
      Hm(Do, function () {
        return Ni(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = yt.transition), (yt.transition = null);
    var o = te;
    te = 1;
    var a = K;
    (K |= 4),
      (Hc.current = null),
      D1(e, n),
      Am(n, e),
      a1(hu),
      (No = !!du),
      (hu = du = null),
      (e.current = n),
      I1(n),
      hv(),
      (K = a),
      (te = o),
      (yt.transition = s);
  } else e.current = n;
  if (
    (Ws && ((Ws = !1), (vn = e), (Zo = r)),
    (s = e.pendingLanes),
    s === 0 && (En = null),
    gv(n.stateNode),
    nt(e, xe()),
    t !== null)
  )
    for (i = e.onRecoverableError, n = 0; n < t.length; n++)
      (r = t[n]), i(r.value, { componentStack: r.stack, digest: r.digest });
  if (Jo) throw ((Jo = !1), (e = ju), (ju = null), e);
  return (
    Zo & 1 && e.tag !== 0 && Ni(),
    (s = e.pendingLanes),
    s & 1 ? (e === Lu ? Fr++ : ((Fr = 0), (Lu = e))) : (Fr = 0),
    Nn(),
    null
  );
}
function Ni() {
  if (vn !== null) {
    var e = xg(Zo),
      t = yt.transition,
      n = te;
    try {
      if (((yt.transition = null), (te = 16 > e ? 16 : e), vn === null))
        var i = !1;
      else {
        if (((e = vn), (vn = null), (Zo = 0), K & 6)) throw Error(P(331));
        var r = K;
        for (K |= 4, j = e.current; j !== null; ) {
          var s = j,
            o = s.child;
          if (j.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (j = u; j !== null; ) {
                  var c = j;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ir(8, c, s);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (j = d);
                  else
                    for (; j !== null; ) {
                      c = j;
                      var h = c.sibling,
                        f = c.return;
                      if ((Rm(c), c === u)) {
                        j = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = f), (j = h);
                        break;
                      }
                      j = f;
                    }
                }
              }
              var p = s.alternate;
              if (p !== null) {
                var y = p.child;
                if (y !== null) {
                  p.child = null;
                  do {
                    var w = y.sibling;
                    (y.sibling = null), (y = w);
                  } while (y !== null);
                }
              }
              j = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (j = o);
          else
            e: for (; j !== null; ) {
              if (((s = j), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ir(9, s, s.return);
                }
              var m = s.sibling;
              if (m !== null) {
                (m.return = s.return), (j = m);
                break e;
              }
              j = s.return;
            }
        }
        var v = e.current;
        for (j = v; j !== null; ) {
          o = j;
          var x = o.child;
          if (o.subtreeFlags & 2064 && x !== null) (x.return = o), (j = x);
          else
            e: for (o = v; j !== null; ) {
              if (((a = j), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ra(9, a);
                  }
                } catch (S) {
                  ge(a, a.return, S);
                }
              if (a === o) {
                j = null;
                break e;
              }
              var _ = a.sibling;
              if (_ !== null) {
                (_.return = a.return), (j = _);
                break e;
              }
              j = a.return;
            }
        }
        if (
          ((K = r), Nn(), zt && typeof zt.onPostCommitFiberRoot == "function")
        )
          try {
            zt.onPostCommitFiberRoot(ba, e);
          } catch {}
        i = !0;
      }
      return i;
    } finally {
      (te = n), (yt.transition = t);
    }
  }
  return !1;
}
function $h(e, t, n) {
  (t = Yi(n, t)),
    (t = wm(e, t, 1)),
    (e = Tn(e, t, 1)),
    (t = Ve()),
    e !== null && (ys(e, 1, t), nt(e, t));
}
function ge(e, t, n) {
  if (e.tag === 3) $h(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        $h(t, e, n);
        break;
      } else if (t.tag === 1) {
        var i = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof i.componentDidCatch == "function" &&
            (En === null || !En.has(i)))
        ) {
          (e = Yi(n, e)),
            (e = _m(t, e, 1)),
            (t = Tn(t, e, 1)),
            (e = Ve()),
            t !== null && (ys(t, 1, e), nt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function $1(e, t, n) {
  var i = e.pingCache;
  i !== null && i.delete(t),
    (t = Ve()),
    (e.pingedLanes |= e.suspendedLanes & n),
    je === e &&
      (De & n) === n &&
      (Ee === 4 || (Ee === 3 && (De & 130023424) === De && 500 > xe() - Vc)
        ? ei(e, 0)
        : (Uc |= n)),
    nt(e, t);
}
function Wm(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Rs), (Rs <<= 1), !(Rs & 130023424) && (Rs = 4194304))
      : (t = 1));
  var n = Ve();
  (e = nn(e, t)), e !== null && (ys(e, t, n), nt(e, n));
}
function H1(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Wm(e, n);
}
function U1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var i = e.stateNode,
        r = e.memoizedState;
      r !== null && (n = r.retryLane);
      break;
    case 19:
      i = e.stateNode;
      break;
    default:
      throw Error(P(314));
  }
  i !== null && i.delete(t), Wm(e, n);
}
var $m;
$m = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || et.current) Ze = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ze = !1), R1(e, t, n);
      Ze = !!(e.flags & 131072);
    }
  else (Ze = !1), oe && t.flags & 1048576 && Vg(t, Uo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var i = t.type;
      vo(e, t), (e = t.pendingProps);
      var r = $i(t, $e.current);
      Ii(t, n), (r = Fc(null, t, i, e, r, n));
      var s = zc();
      return (
        (t.flags |= 1),
        typeof r == "object" &&
        r !== null &&
        typeof r.render == "function" &&
        r.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            tt(i) ? ((s = !0), $o(t)) : (s = !1),
            (t.memoizedState =
              r.state !== null && r.state !== void 0 ? r.state : null),
            Lc(t),
            (r.updater = Ma),
            (t.stateNode = r),
            (r._reactInternals = t),
            _u(t, i, e, n),
            (t = ku(null, t, i, !0, s, n)))
          : ((t.tag = 0), oe && s && Tc(t), Ue(null, t, r, n), (t = t.child)),
        t
      );
    case 16:
      i = t.elementType;
      e: {
        switch (
          (vo(e, t),
          (e = t.pendingProps),
          (r = i._init),
          (i = r(i._payload)),
          (t.type = i),
          (r = t.tag = Y1(i)),
          (e = St(i, e)),
          r)
        ) {
          case 0:
            t = bu(null, t, i, e, n);
            break e;
          case 1:
            t = jh(null, t, i, e, n);
            break e;
          case 11:
            t = Oh(null, t, i, e, n);
            break e;
          case 14:
            t = Rh(null, t, i, St(i.type, e), n);
            break e;
        }
        throw Error(P(306, i, ""));
      }
      return t;
    case 0:
      return (
        (i = t.type),
        (r = t.pendingProps),
        (r = t.elementType === i ? r : St(i, r)),
        bu(e, t, i, r, n)
      );
    case 1:
      return (
        (i = t.type),
        (r = t.pendingProps),
        (r = t.elementType === i ? r : St(i, r)),
        jh(e, t, i, r, n)
      );
    case 3:
      e: {
        if ((Cm(t), e === null)) throw Error(P(387));
        (i = t.pendingProps),
          (s = t.memoizedState),
          (r = s.element),
          Gg(e, t),
          Xo(t, i, null, n);
        var o = t.memoizedState;
        if (((i = o.element), s.isDehydrated))
          if (
            ((s = {
              element: i,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (r = Yi(Error(P(423)), t)), (t = Lh(e, t, i, n, r));
            break e;
          } else if (i !== r) {
            (r = Yi(Error(P(424)), t)), (t = Lh(e, t, i, n, r));
            break e;
          } else
            for (
              st = Cn(t.stateNode.containerInfo.firstChild),
                lt = t,
                oe = !0,
                Ct = null,
                n = Zg(t, null, i, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Hi(), i === r)) {
            t = rn(e, t, n);
            break e;
          }
          Ue(e, t, i, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        em(t),
        e === null && vu(t),
        (i = t.type),
        (r = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = r.children),
        fu(i, r) ? (o = null) : s !== null && fu(i, s) && (t.flags |= 32),
        km(e, t),
        Ue(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && vu(t), null;
    case 13:
      return Tm(e, t, n);
    case 4:
      return (
        Ac(t, t.stateNode.containerInfo),
        (i = t.pendingProps),
        e === null ? (t.child = Ui(t, null, i, n)) : Ue(e, t, i, n),
        t.child
      );
    case 11:
      return (
        (i = t.type),
        (r = t.pendingProps),
        (r = t.elementType === i ? r : St(i, r)),
        Oh(e, t, i, r, n)
      );
    case 7:
      return Ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((i = t.type._context),
          (r = t.pendingProps),
          (s = t.memoizedProps),
          (o = r.value),
          ie(Vo, i._currentValue),
          (i._currentValue = o),
          s !== null)
        )
          if (Mt(s.value, o)) {
            if (s.children === r.children && !et.current) {
              t = rn(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === i) {
                    if (s.tag === 1) {
                      (l = Jt(-1, n & -n)), (l.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      xu(s.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(P(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  xu(o, n, t),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        Ue(e, t, r.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (r = t.type),
        (i = t.pendingProps.children),
        Ii(t, n),
        (r = xt(r)),
        (i = i(r)),
        (t.flags |= 1),
        Ue(e, t, i, n),
        t.child
      );
    case 14:
      return (
        (i = t.type),
        (r = St(i, t.pendingProps)),
        (r = St(i.type, r)),
        Rh(e, t, i, r, n)
      );
    case 15:
      return Sm(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (i = t.type),
        (r = t.pendingProps),
        (r = t.elementType === i ? r : St(i, r)),
        vo(e, t),
        (t.tag = 1),
        tt(i) ? ((e = !0), $o(t)) : (e = !1),
        Ii(t, n),
        qg(t, i, r),
        _u(t, i, r, n),
        ku(null, t, i, !0, e, n)
      );
    case 19:
      return Em(e, t, n);
    case 22:
      return bm(e, t, n);
  }
  throw Error(P(156, t.tag));
};
function Hm(e, t) {
  return gg(e, t);
}
function V1(e, t, n, i) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = i),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function gt(e, t, n, i) {
  return new V1(e, t, n, i);
}
function Gc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Y1(e) {
  if (typeof e == "function") return Gc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === pc)) return 11;
    if (e === gc) return 14;
  }
  return 2;
}
function Mn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = gt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function _o(e, t, n, i, r, s) {
  var o = 2;
  if (((i = e), typeof e == "function")) Gc(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case wi:
        return ti(n.children, r, s, t);
      case fc:
        (o = 8), (r |= 8);
        break;
      case Vl:
        return (
          (e = gt(12, n, t, r | 2)), (e.elementType = Vl), (e.lanes = s), e
        );
      case Yl:
        return (e = gt(13, n, t, r)), (e.elementType = Yl), (e.lanes = s), e;
      case Xl:
        return (e = gt(19, n, t, r)), (e.elementType = Xl), (e.lanes = s), e;
      case Jp:
        return La(n, r, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Qp:
              o = 10;
              break e;
            case qp:
              o = 9;
              break e;
            case pc:
              o = 11;
              break e;
            case gc:
              o = 14;
              break e;
            case hn:
              (o = 16), (i = null);
              break e;
          }
        throw Error(P(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = gt(o, n, t, r)), (t.elementType = e), (t.type = i), (t.lanes = s), t
  );
}
function ti(e, t, n, i) {
  return (e = gt(7, e, i, t)), (e.lanes = n), e;
}
function La(e, t, n, i) {
  return (
    (e = gt(22, e, i, t)),
    (e.elementType = Jp),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Cl(e, t, n) {
  return (e = gt(6, e, null, t)), (e.lanes = n), e;
}
function Tl(e, t, n) {
  return (
    (t = gt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function X1(e, t, n, i, r) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ol(0)),
    (this.expirationTimes = ol(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ol(0)),
    (this.identifierPrefix = i),
    (this.onRecoverableError = r),
    (this.mutableSourceEagerHydrationData = null);
}
function Qc(e, t, n, i, r, s, o, a, l) {
  return (
    (e = new X1(e, t, n, a, l)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = gt(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: i,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Lc(s),
    e
  );
}
function K1(e, t, n) {
  var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: xi,
    key: i == null ? null : "" + i,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Um(e) {
  if (!e) return Ln;
  e = e._reactInternals;
  e: {
    if (di(e) !== e || e.tag !== 1) throw Error(P(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (tt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(P(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (tt(n)) return Hg(e, n, t);
  }
  return t;
}
function Vm(e, t, n, i, r, s, o, a, l) {
  return (
    (e = Qc(n, i, !0, e, r, s, o, a, l)),
    (e.context = Um(null)),
    (n = e.current),
    (i = Ve()),
    (r = Pn(n)),
    (s = Jt(i, r)),
    (s.callback = t ?? null),
    Tn(n, s, r),
    (e.current.lanes = r),
    ys(e, r, i),
    nt(e, i),
    e
  );
}
function Aa(e, t, n, i) {
  var r = t.current,
    s = Ve(),
    o = Pn(r);
  return (
    (n = Um(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Jt(s, o)),
    (t.payload = { element: e }),
    (i = i === void 0 ? null : i),
    i !== null && (t.callback = i),
    (e = Tn(r, t, o)),
    e !== null && (Pt(e, r, o, s), go(e, r, o)),
    o
  );
}
function ta(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Hh(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function qc(e, t) {
  Hh(e, t), (e = e.alternate) && Hh(e, t);
}
function G1() {
  return null;
}
var Ym =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Jc(e) {
  this._internalRoot = e;
}
Da.prototype.render = Jc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(P(409));
  Aa(e, t, null, null);
};
Da.prototype.unmount = Jc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ai(function () {
      Aa(null, e, null, null);
    }),
      (t[tn] = null);
  }
};
function Da(e) {
  this._internalRoot = e;
}
Da.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Sg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < pn.length && t !== 0 && t < pn[n].priority; n++);
    pn.splice(n, 0, e), n === 0 && kg(e);
  }
};
function Zc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ia(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Uh() {}
function Q1(e, t, n, i, r) {
  if (r) {
    if (typeof i == "function") {
      var s = i;
      i = function () {
        var u = ta(o);
        s.call(u);
      };
    }
    var o = Vm(t, i, e, 0, null, !1, !1, "", Uh);
    return (
      (e._reactRootContainer = o),
      (e[tn] = o.current),
      Jr(e.nodeType === 8 ? e.parentNode : e),
      ai(),
      o
    );
  }
  for (; (r = e.lastChild); ) e.removeChild(r);
  if (typeof i == "function") {
    var a = i;
    i = function () {
      var u = ta(l);
      a.call(u);
    };
  }
  var l = Qc(e, 0, !1, null, null, !1, !1, "", Uh);
  return (
    (e._reactRootContainer = l),
    (e[tn] = l.current),
    Jr(e.nodeType === 8 ? e.parentNode : e),
    ai(function () {
      Aa(t, l, n, i);
    }),
    l
  );
}
function Na(e, t, n, i, r) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof r == "function") {
      var a = r;
      r = function () {
        var l = ta(o);
        a.call(l);
      };
    }
    Aa(t, o, e, r);
  } else o = Q1(n, t, e, r, i);
  return ta(o);
}
wg = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Sr(t.pendingLanes);
        n !== 0 &&
          (vc(t, n | 1), nt(t, xe()), !(K & 6) && ((Xi = xe() + 500), Nn()));
      }
      break;
    case 13:
      ai(function () {
        var i = nn(e, 1);
        if (i !== null) {
          var r = Ve();
          Pt(i, e, 1, r);
        }
      }),
        qc(e, 1);
  }
};
xc = function (e) {
  if (e.tag === 13) {
    var t = nn(e, 134217728);
    if (t !== null) {
      var n = Ve();
      Pt(t, e, 134217728, n);
    }
    qc(e, 134217728);
  }
};
_g = function (e) {
  if (e.tag === 13) {
    var t = Pn(e),
      n = nn(e, t);
    if (n !== null) {
      var i = Ve();
      Pt(n, e, t, i);
    }
    qc(e, t);
  }
};
Sg = function () {
  return te;
};
bg = function (e, t) {
  var n = te;
  try {
    return (te = e), t();
  } finally {
    te = n;
  }
};
iu = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ql(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var i = n[t];
          if (i !== e && i.form === e.form) {
            var r = Ea(i);
            if (!r) throw Error(P(90));
            eg(i), Ql(i, r);
          }
        }
      }
      break;
    case "textarea":
      ng(e, n);
      break;
    case "select":
      (t = n.value), t != null && ji(e, !!n.multiple, t, !1);
  }
};
ug = Yc;
cg = ai;
var q1 = { usingClientEntryPoint: !1, Events: [xs, ki, Ea, ag, lg, Yc] },
  hr = {
    findFiberByHostInstance: qn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  J1 = {
    bundleType: hr.bundleType,
    version: hr.version,
    rendererPackageName: hr.rendererPackageName,
    rendererConfig: hr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: on.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = fg(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: hr.findFiberByHostInstance || G1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var $s = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!$s.isDisabled && $s.supportsFiber)
    try {
      (ba = $s.inject(J1)), (zt = $s);
    } catch {}
}
ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q1;
ct.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Zc(t)) throw Error(P(200));
  return K1(e, t, null, n);
};
ct.createRoot = function (e, t) {
  if (!Zc(e)) throw Error(P(299));
  var n = !1,
    i = "",
    r = Ym;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (r = t.onRecoverableError)),
    (t = Qc(e, 1, !1, null, null, n, !1, i, r)),
    (e[tn] = t.current),
    Jr(e.nodeType === 8 ? e.parentNode : e),
    new Jc(t)
  );
};
ct.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(P(188))
      : ((e = Object.keys(e).join(",")), Error(P(268, e)));
  return (e = fg(t)), (e = e === null ? null : e.stateNode), e;
};
ct.flushSync = function (e) {
  return ai(e);
};
ct.hydrate = function (e, t, n) {
  if (!Ia(t)) throw Error(P(200));
  return Na(null, e, t, !0, n);
};
ct.hydrateRoot = function (e, t, n) {
  if (!Zc(e)) throw Error(P(405));
  var i = (n != null && n.hydratedSources) || null,
    r = !1,
    s = "",
    o = Ym;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (r = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Vm(t, null, e, 1, n ?? null, r, !1, s, o)),
    (e[tn] = t.current),
    Jr(e),
    i)
  )
    for (e = 0; e < i.length; e++)
      (n = i[e]),
        (r = n._getVersion),
        (r = r(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, r])
          : t.mutableSourceEagerHydrationData.push(n, r);
  return new Da(t);
};
ct.render = function (e, t, n) {
  if (!Ia(t)) throw Error(P(200));
  return Na(null, e, t, !1, n);
};
ct.unmountComponentAtNode = function (e) {
  if (!Ia(e)) throw Error(P(40));
  return e._reactRootContainer
    ? (ai(function () {
        Na(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[tn] = null);
        });
      }),
      !0)
    : !1;
};
ct.unstable_batchedUpdates = Yc;
ct.unstable_renderSubtreeIntoContainer = function (e, t, n, i) {
  if (!Ia(n)) throw Error(P(200));
  if (e == null || e._reactInternals === void 0) throw Error(P(38));
  return Na(e, t, n, !1, i);
};
ct.version = "18.2.0-next-9e3b772b8-20220608";
function Xm() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xm);
    } catch (e) {
      console.error(e);
    }
}
Xm(), (Vp.exports = ct);
var Z1 = Vp.exports,
  Vh = Z1;
(Hl.createRoot = Vh.createRoot), (Hl.hydrateRoot = Vh.hydrateRoot);
/**
 * @remix-run/router v1.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function as() {
  return (
    (as = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
          }
          return e;
        }),
    as.apply(this, arguments)
  );
}
var xn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(xn || (xn = {}));
const Yh = "popstate";
function ex(e) {
  e === void 0 && (e = {});
  function t(i, r) {
    let { pathname: s, search: o, hash: a } = i.location;
    return Iu(
      "",
      { pathname: s, search: o, hash: a },
      (r.state && r.state.usr) || null,
      (r.state && r.state.key) || "default"
    );
  }
  function n(i, r) {
    return typeof r == "string" ? r : na(r);
  }
  return nx(t, n, null, e);
}
function _e(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function ed(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function tx() {
  return Math.random().toString(36).substr(2, 8);
}
function Xh(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Iu(e, t, n, i) {
  return (
    n === void 0 && (n = null),
    as(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? tr(t) : t,
      { state: n, key: (t && t.key) || i || tx() }
    )
  );
}
function na(e) {
  let { pathname: t = "/", search: n = "", hash: i = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    i && i !== "#" && (t += i.charAt(0) === "#" ? i : "#" + i),
    t
  );
}
function tr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let i = e.indexOf("?");
    i >= 0 && ((t.search = e.substr(i)), (e = e.substr(0, i))),
      e && (t.pathname = e);
  }
  return t;
}
function nx(e, t, n, i) {
  i === void 0 && (i = {});
  let { window: r = document.defaultView, v5Compat: s = !1 } = i,
    o = r.history,
    a = xn.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), o.replaceState(as({}, o.state, { idx: u }), ""));
  function c() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    a = xn.Pop;
    let w = c(),
      m = w == null ? null : w - u;
    (u = w), l && l({ action: a, location: y.location, delta: m });
  }
  function h(w, m) {
    a = xn.Push;
    let v = Iu(y.location, w, m);
    n && n(v, w), (u = c() + 1);
    let x = Xh(v, u),
      _ = y.createHref(v);
    try {
      o.pushState(x, "", _);
    } catch (S) {
      if (S instanceof DOMException && S.name === "DataCloneError") throw S;
      r.location.assign(_);
    }
    s && l && l({ action: a, location: y.location, delta: 1 });
  }
  function f(w, m) {
    a = xn.Replace;
    let v = Iu(y.location, w, m);
    n && n(v, w), (u = c());
    let x = Xh(v, u),
      _ = y.createHref(v);
    o.replaceState(x, "", _),
      s && l && l({ action: a, location: y.location, delta: 0 });
  }
  function p(w) {
    let m = r.location.origin !== "null" ? r.location.origin : r.location.href,
      v = typeof w == "string" ? w : na(w);
    return (
      _e(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          v
      ),
      new URL(v, m)
    );
  }
  let y = {
    get action() {
      return a;
    },
    get location() {
      return e(r, o);
    },
    listen(w) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        r.addEventListener(Yh, d),
        (l = w),
        () => {
          r.removeEventListener(Yh, d), (l = null);
        }
      );
    },
    createHref(w) {
      return t(r, w);
    },
    createURL: p,
    encodeLocation(w) {
      let m = p(w);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: h,
    replace: f,
    go(w) {
      return o.go(w);
    },
  };
  return y;
}
var Kh;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Kh || (Kh = {}));
function ix(e, t, n) {
  n === void 0 && (n = "/");
  let i = typeof t == "string" ? tr(t) : t,
    r = td(i.pathname || "/", n);
  if (r == null) return null;
  let s = Km(e);
  rx(s);
  let o = null;
  for (let a = 0; o == null && a < s.length; ++a) o = fx(s[a], mx(r));
  return o;
}
function Km(e, t, n, i) {
  t === void 0 && (t = []), n === void 0 && (n = []), i === void 0 && (i = "");
  let r = (s, o, a) => {
    let l = {
      relativePath: a === void 0 ? s.path || "" : a,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s,
    };
    l.relativePath.startsWith("/") &&
      (_e(
        l.relativePath.startsWith(i),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + i + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(i.length)));
    let u = On([i, l.relativePath]),
      c = n.concat(l);
    s.children &&
      s.children.length > 0 &&
      (_e(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Km(s.children, t, c, u)),
      !(s.path == null && !s.index) &&
        t.push({ path: u, score: dx(u, s.index), routesMeta: c });
  };
  return (
    e.forEach((s, o) => {
      var a;
      if (s.path === "" || !((a = s.path) != null && a.includes("?"))) r(s, o);
      else for (let l of Gm(s.path)) r(s, o, l);
    }),
    t
  );
}
function Gm(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...i] = t,
    r = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (i.length === 0) return r ? [s, ""] : [s];
  let o = Gm(i.join("/")),
    a = [];
  return (
    a.push(...o.map((l) => (l === "" ? s : [s, l].join("/")))),
    r && a.push(...o),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function rx(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : hx(
          t.routesMeta.map((i) => i.childrenIndex),
          n.routesMeta.map((i) => i.childrenIndex)
        )
  );
}
const sx = /^:[\w-]+$/,
  ox = 3,
  ax = 2,
  lx = 1,
  ux = 10,
  cx = -2,
  Gh = (e) => e === "*";
function dx(e, t) {
  let n = e.split("/"),
    i = n.length;
  return (
    n.some(Gh) && (i += cx),
    t && (i += ax),
    n
      .filter((r) => !Gh(r))
      .reduce((r, s) => r + (sx.test(s) ? ox : s === "" ? lx : ux), i)
  );
}
function hx(e, t) {
  return e.length === t.length && e.slice(0, -1).every((i, r) => i === t[r])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function fx(e, t) {
  let { routesMeta: n } = e,
    i = {},
    r = "/",
    s = [];
  for (let o = 0; o < n.length; ++o) {
    let a = n[o],
      l = o === n.length - 1,
      u = r === "/" ? t : t.slice(r.length) || "/",
      c = px(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: l },
        u
      );
    if (!c) return null;
    Object.assign(i, c.params);
    let d = a.route;
    s.push({
      params: i,
      pathname: On([r, c.pathname]),
      pathnameBase: _x(On([r, c.pathnameBase])),
      route: d,
    }),
      c.pathnameBase !== "/" && (r = On([r, c.pathnameBase]));
  }
  return s;
}
function px(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, i] = gx(e.path, e.caseSensitive, e.end),
    r = t.match(n);
  if (!r) return null;
  let s = r[0],
    o = s.replace(/(.)\/+$/, "$1"),
    a = r.slice(1);
  return {
    params: i.reduce((u, c, d) => {
      let { paramName: h, isOptional: f } = c;
      if (h === "*") {
        let y = a[d] || "";
        o = s.slice(0, s.length - y.length).replace(/(.)\/+$/, "$1");
      }
      const p = a[d];
      return f && !p ? (u[h] = void 0) : (u[h] = yx(p || "", h)), u;
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: e,
  };
}
function gx(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    ed(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let i = [],
    r =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, a, l) => (
            i.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (i.push({ paramName: "*" }),
        (r += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (r += "\\/*$")
      : e !== "" && e !== "/" && (r += "(?:(?=\\/|$))"),
    [new RegExp(r, t ? void 0 : "i"), i]
  );
}
function mx(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      ed(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function yx(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      ed(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function td(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    i = e.charAt(n);
  return i && i !== "/" ? null : e.slice(n) || "/";
}
function vx(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: i = "",
    hash: r = "",
  } = typeof e == "string" ? tr(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : xx(n, t)) : t,
    search: Sx(i),
    hash: bx(r),
  };
}
function xx(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((r) => {
      r === ".." ? n.length > 1 && n.pop() : r !== "." && n.push(r);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function El(e, t, n, i) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(i) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function wx(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function nd(e, t) {
  let n = wx(e);
  return t
    ? n.map((i, r) => (r === e.length - 1 ? i.pathname : i.pathnameBase))
    : n.map((i) => i.pathnameBase);
}
function id(e, t, n, i) {
  i === void 0 && (i = !1);
  let r;
  typeof e == "string"
    ? (r = tr(e))
    : ((r = as({}, e)),
      _e(
        !r.pathname || !r.pathname.includes("?"),
        El("?", "pathname", "search", r)
      ),
      _e(
        !r.pathname || !r.pathname.includes("#"),
        El("#", "pathname", "hash", r)
      ),
      _e(!r.search || !r.search.includes("#"), El("#", "search", "hash", r)));
  let s = e === "" || r.pathname === "",
    o = s ? "/" : r.pathname,
    a;
  if (o == null) a = n;
  else {
    let d = t.length - 1;
    if (!i && o.startsWith("..")) {
      let h = o.split("/");
      for (; h[0] === ".."; ) h.shift(), (d -= 1);
      r.pathname = h.join("/");
    }
    a = d >= 0 ? t[d] : "/";
  }
  let l = vx(r, a),
    u = o && o !== "/" && o.endsWith("/"),
    c = (s || o === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const On = (e) => e.join("/").replace(/\/\/+/g, "/"),
  _x = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Sx = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  bx = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function kx(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Qm = ["post", "put", "patch", "delete"];
new Set(Qm);
const Cx = ["get", ...Qm];
new Set(Cx);
/**
 * React Router v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ls() {
  return (
    (ls = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
          }
          return e;
        }),
    ls.apply(this, arguments)
  );
}
const rd = b.createContext(null),
  Tx = b.createContext(null),
  Fn = b.createContext(null),
  Fa = b.createContext(null),
  an = b.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  qm = b.createContext(null);
function Ex(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  nr() || _e(!1);
  let { basename: i, navigator: r } = b.useContext(Fn),
    { hash: s, pathname: o, search: a } = e0(e, { relative: n }),
    l = o;
  return (
    i !== "/" && (l = o === "/" ? i : On([i, o])),
    r.createHref({ pathname: l, search: a, hash: s })
  );
}
function nr() {
  return b.useContext(Fa) != null;
}
function hi() {
  return nr() || _e(!1), b.useContext(Fa).location;
}
function Jm(e) {
  b.useContext(Fn).static || b.useLayoutEffect(e);
}
function ir() {
  let { isDataRoute: e } = b.useContext(an);
  return e ? Bx() : Px();
}
function Px() {
  nr() || _e(!1);
  let e = b.useContext(rd),
    { basename: t, future: n, navigator: i } = b.useContext(Fn),
    { matches: r } = b.useContext(an),
    { pathname: s } = hi(),
    o = JSON.stringify(nd(r, n.v7_relativeSplatPath)),
    a = b.useRef(!1);
  return (
    Jm(() => {
      a.current = !0;
    }),
    b.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !a.current)) return;
        if (typeof u == "number") {
          i.go(u);
          return;
        }
        let d = id(u, JSON.parse(o), s, c.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : On([t, d.pathname])),
          (c.replace ? i.replace : i.push)(d, c.state, c);
      },
      [t, i, o, s, e]
    )
  );
}
function Zm() {
  let { matches: e } = b.useContext(an),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function e0(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: i } = b.useContext(Fn),
    { matches: r } = b.useContext(an),
    { pathname: s } = hi(),
    o = JSON.stringify(nd(r, i.v7_relativeSplatPath));
  return b.useMemo(() => id(e, JSON.parse(o), s, n === "path"), [e, o, s, n]);
}
function Mx(e, t) {
  return Ox(e, t);
}
function Ox(e, t, n, i) {
  nr() || _e(!1);
  let { navigator: r } = b.useContext(Fn),
    { matches: s } = b.useContext(an),
    o = s[s.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let l = o ? o.pathnameBase : "/";
  o && o.route;
  let u = hi(),
    c;
  if (t) {
    var d;
    let w = typeof t == "string" ? tr(t) : t;
    l === "/" || ((d = w.pathname) != null && d.startsWith(l)) || _e(!1),
      (c = w);
  } else c = u;
  let h = c.pathname || "/",
    f = l === "/" ? h : h.slice(l.length) || "/",
    p = ix(e, { pathname: f }),
    y = Dx(
      p &&
        p.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, a, w.params),
            pathname: On([
              l,
              r.encodeLocation
                ? r.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? l
                : On([
                    l,
                    r.encodeLocation
                      ? r.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          })
        ),
      s,
      n,
      i
    );
  return t && y
    ? b.createElement(
        Fa.Provider,
        {
          value: {
            location: ls(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: xn.Pop,
          },
        },
        y
      )
    : y;
}
function Rx() {
  let e = zx(),
    t = kx(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return b.createElement(
    b.Fragment,
    null,
    b.createElement("h2", null, "Unexpected Application Error!"),
    b.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? b.createElement("pre", { style: r }, n) : null,
    null
  );
}
const jx = b.createElement(Rx, null);
class Lx extends b.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? b.createElement(
          an.Provider,
          { value: this.props.routeContext },
          b.createElement(qm.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Ax(e) {
  let { routeContext: t, match: n, children: i } = e,
    r = b.useContext(rd);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = n.route.id),
    b.createElement(an.Provider, { value: t }, i)
  );
}
function Dx(e, t, n, i) {
  var r;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    i === void 0 && (i = null),
    e == null)
  ) {
    var s;
    if ((s = n) != null && s.errors) e = n.matches;
    else return null;
  }
  let o = e,
    a = (r = n) == null ? void 0 : r.errors;
  if (a != null) {
    let c = o.findIndex(
      (d) => d.route.id && (a == null ? void 0 : a[d.route.id])
    );
    c >= 0 || _e(!1), (o = o.slice(0, Math.min(o.length, c + 1)));
  }
  let l = !1,
    u = -1;
  if (n && i && i.v7_partialHydration)
    for (let c = 0; c < o.length; c++) {
      let d = o[c];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
        d.route.id)
      ) {
        let { loaderData: h, errors: f } = n,
          p =
            d.route.loader &&
            h[d.route.id] === void 0 &&
            (!f || f[d.route.id] === void 0);
        if (d.route.lazy || p) {
          (l = !0), u >= 0 ? (o = o.slice(0, u + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((c, d, h) => {
    let f,
      p = !1,
      y = null,
      w = null;
    n &&
      ((f = a && d.route.id ? a[d.route.id] : void 0),
      (y = d.route.errorElement || jx),
      l &&
        (u < 0 && h === 0
          ? (Wx("route-fallback", !1), (p = !0), (w = null))
          : u === h &&
            ((p = !0), (w = d.route.hydrateFallbackElement || null))));
    let m = t.concat(o.slice(0, h + 1)),
      v = () => {
        let x;
        return (
          f
            ? (x = y)
            : p
            ? (x = w)
            : d.route.Component
            ? (x = b.createElement(d.route.Component, null))
            : d.route.element
            ? (x = d.route.element)
            : (x = c),
          b.createElement(Ax, {
            match: d,
            routeContext: { outlet: c, matches: m, isDataRoute: n != null },
            children: x,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || h === 0)
      ? b.createElement(Lx, {
          location: n.location,
          revalidation: n.revalidation,
          component: y,
          error: f,
          children: v(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : v();
  }, null);
}
var t0 = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(t0 || {}),
  ia = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(ia || {});
function Ix(e) {
  let t = b.useContext(rd);
  return t || _e(!1), t;
}
function Nx(e) {
  let t = b.useContext(Tx);
  return t || _e(!1), t;
}
function Fx(e) {
  let t = b.useContext(an);
  return t || _e(!1), t;
}
function n0(e) {
  let t = Fx(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || _e(!1), n.route.id;
}
function zx() {
  var e;
  let t = b.useContext(qm),
    n = Nx(ia.UseRouteError),
    i = n0(ia.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[i];
}
function Bx() {
  let { router: e } = Ix(t0.UseNavigateStable),
    t = n0(ia.UseNavigateStable),
    n = b.useRef(!1);
  return (
    Jm(() => {
      n.current = !0;
    }),
    b.useCallback(
      function (r, s) {
        s === void 0 && (s = {}),
          n.current &&
            (typeof r == "number"
              ? e.navigate(r)
              : e.navigate(r, ls({ fromRouteId: t }, s)));
      },
      [e, t]
    )
  );
}
const Qh = {};
function Wx(e, t, n) {
  !t && !Qh[e] && (Qh[e] = !0);
}
function za(e) {
  let { to: t, replace: n, state: i, relative: r } = e;
  nr() || _e(!1);
  let { future: s, static: o } = b.useContext(Fn),
    { matches: a } = b.useContext(an),
    { pathname: l } = hi(),
    u = ir(),
    c = id(t, nd(a, s.v7_relativeSplatPath), l, r === "path"),
    d = JSON.stringify(c);
  return (
    b.useEffect(
      () => u(JSON.parse(d), { replace: n, state: i, relative: r }),
      [u, d, r, n, i]
    ),
    null
  );
}
function jt(e) {
  _e(!1);
}
function $x(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: i,
    navigationType: r = xn.Pop,
    navigator: s,
    static: o = !1,
    future: a,
  } = e;
  nr() && _e(!1);
  let l = t.replace(/^\/*/, "/"),
    u = b.useMemo(
      () => ({
        basename: l,
        navigator: s,
        static: o,
        future: ls({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, s, o]
    );
  typeof i == "string" && (i = tr(i));
  let {
      pathname: c = "/",
      search: d = "",
      hash: h = "",
      state: f = null,
      key: p = "default",
    } = i,
    y = b.useMemo(() => {
      let w = td(c, l);
      return w == null
        ? null
        : {
            location: { pathname: w, search: d, hash: h, state: f, key: p },
            navigationType: r,
          };
    }, [l, c, d, h, f, p, r]);
  return y == null
    ? null
    : b.createElement(
        Fn.Provider,
        { value: u },
        b.createElement(Fa.Provider, { children: n, value: y })
      );
}
function Hx(e) {
  let { children: t, location: n } = e;
  return Mx(Nu(t), n);
}
new Promise(() => {});
function Nu(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    b.Children.forEach(e, (i, r) => {
      if (!b.isValidElement(i)) return;
      let s = [...t, r];
      if (i.type === b.Fragment) {
        n.push.apply(n, Nu(i.props.children, s));
        return;
      }
      i.type !== jt && _e(!1), !i.props.index || !i.props.children || _e(!1);
      let o = {
        id: i.props.id || s.join("-"),
        caseSensitive: i.props.caseSensitive,
        element: i.props.element,
        Component: i.props.Component,
        index: i.props.index,
        path: i.props.path,
        loader: i.props.loader,
        action: i.props.action,
        errorElement: i.props.errorElement,
        ErrorBoundary: i.props.ErrorBoundary,
        hasErrorBoundary:
          i.props.ErrorBoundary != null || i.props.errorElement != null,
        shouldRevalidate: i.props.shouldRevalidate,
        handle: i.props.handle,
        lazy: i.props.lazy,
      };
      i.props.children && (o.children = Nu(i.props.children, s)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Fu() {
  return (
    (Fu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
          }
          return e;
        }),
    Fu.apply(this, arguments)
  );
}
function Ux(e, t) {
  if (e == null) return {};
  var n = {},
    i = Object.keys(e),
    r,
    s;
  for (s = 0; s < i.length; s++)
    (r = i[s]), !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function Vx(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Yx(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Vx(e);
}
const Xx = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  Kx = "6";
try {
  window.__reactRouterVersion = Kx;
} catch {}
const Gx = "startTransition",
  qh = Hy[Gx];
function Qx(e) {
  let { basename: t, children: n, future: i, window: r } = e,
    s = b.useRef();
  s.current == null && (s.current = ex({ window: r, v5Compat: !0 }));
  let o = s.current,
    [a, l] = b.useState({ action: o.action, location: o.location }),
    { v7_startTransition: u } = i || {},
    c = b.useCallback(
      (d) => {
        u && qh ? qh(() => l(d)) : l(d);
      },
      [l, u]
    );
  return (
    b.useLayoutEffect(() => o.listen(c), [o, c]),
    b.createElement($x, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: o,
      future: i,
    })
  );
}
const qx =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Jx = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Te = b.forwardRef(function (t, n) {
    let {
        onClick: i,
        relative: r,
        reloadDocument: s,
        replace: o,
        state: a,
        target: l,
        to: u,
        preventScrollReset: c,
        unstable_viewTransition: d,
      } = t,
      h = Ux(t, Xx),
      { basename: f } = b.useContext(Fn),
      p,
      y = !1;
    if (typeof u == "string" && Jx.test(u) && ((p = u), qx))
      try {
        let x = new URL(window.location.href),
          _ = u.startsWith("//") ? new URL(x.protocol + u) : new URL(u),
          S = td(_.pathname, f);
        _.origin === x.origin && S != null
          ? (u = S + _.search + _.hash)
          : (y = !0);
      } catch {}
    let w = Ex(u, { relative: r }),
      m = Zx(u, {
        replace: o,
        state: a,
        target: l,
        preventScrollReset: c,
        relative: r,
        unstable_viewTransition: d,
      });
    function v(x) {
      i && i(x), x.defaultPrevented || m(x);
    }
    return b.createElement(
      "a",
      Fu({}, h, { href: p || w, onClick: y || s ? i : v, ref: n, target: l })
    );
  });
var Jh;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Jh || (Jh = {}));
var Zh;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Zh || (Zh = {}));
function Zx(e, t) {
  let {
      target: n,
      replace: i,
      state: r,
      preventScrollReset: s,
      relative: o,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    l = ir(),
    u = hi(),
    c = e0(e, { relative: o });
  return b.useCallback(
    (d) => {
      if (Yx(d, n)) {
        d.preventDefault();
        let h = i !== void 0 ? i : na(u) === na(c);
        l(e, {
          replace: h,
          state: r,
          preventScrollReset: s,
          relative: o,
          unstable_viewTransition: a,
        });
      }
    },
    [u, l, c, i, r, n, e, s, o, a]
  );
}
const i0 = ({ heading: e, newClass: t, blogs: n }) =>
  g.jsxs("section", {
    className: t && t.length > 0 ? "dashboard-blogs blogs" : "blogs",
    children: [
      g.jsx("h3", { children: e }),
      g.jsx("div", {
        className: "container",
        children:
          n &&
          n.map((i) =>
            g.jsxs(
              Te,
              {
                to: `/blog/${i._id}`,
                className: "card",
                children: [
                  g.jsx("img", { src: i.mainImage.url, alt: "blog" }),
                  g.jsx("span", {
                    className: "category",
                    children: i.category,
                  }),
                  g.jsx("h4", { children: i.title }),
                  g.jsx("div", {
                    className: "writer_section",
                    children: g.jsxs("div", {
                      className: "author",
                      children: [
                        g.jsx("img", {
                          src: i.authorAvatar,
                          alt: "author_avatar",
                        }),
                        g.jsx("p", { children: i.authorName }),
                      ],
                    }),
                  }),
                ],
              },
              i._id
            )
          ),
      }),
    ],
  });
var ew = {
  cm: !0,
  mm: !0,
  in: !0,
  px: !0,
  pt: !0,
  pc: !0,
  em: !0,
  ex: !0,
  ch: !0,
  rem: !0,
  vw: !0,
  vh: !0,
  vmin: !0,
  vmax: !0,
  "%": !0,
};
function tw(e) {
  if (typeof e == "number") return { value: e, unit: "px" };
  var t,
    n = (e.match(/^[0-9.]*/) || "").toString();
  n.includes(".") ? (t = parseFloat(n)) : (t = parseInt(n, 10));
  var i = (e.match(/[^0-9]*$/) || "").toString();
  return ew[i]
    ? { value: t, unit: i }
    : (console.warn(
        "React Spinners: "
          .concat(e, " is not a valid css value. Defaulting to ")
          .concat(t, "px.")
      ),
      { value: t, unit: "px" });
}
function Pl(e) {
  var t = tw(e);
  return "".concat(t.value).concat(t.unit);
}
var nw = function (e, t, n) {
    var i = "react-spinners-".concat(e, "-").concat(n);
    if (typeof window > "u" || !window.document) return i;
    var r = document.createElement("style");
    document.head.appendChild(r);
    var s = r.sheet,
      o = `
    @keyframes `
        .concat(
          i,
          ` {
      `
        )
        .concat(
          t,
          `
    }
  `
        );
    return s && s.insertRule(o, 0), i;
  },
  ra = function () {
    return (
      (ra =
        Object.assign ||
        function (e) {
          for (var t, n = 1, i = arguments.length; n < i; n++) {
            t = arguments[n];
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          }
          return e;
        }),
      ra.apply(this, arguments)
    );
  },
  iw = function (e, t) {
    var n = {};
    for (var i in e)
      Object.prototype.hasOwnProperty.call(e, i) &&
        t.indexOf(i) < 0 &&
        (n[i] = e[i]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++)
        t.indexOf(i[r]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, i[r]) &&
          (n[i[r]] = e[i[r]]);
    return n;
  },
  rw = nw(
    "BeatLoader",
    "50% {transform: scale(0.75);opacity: 0.2} 100% {transform: scale(1);opacity: 1}",
    "beat"
  );
function Ba(e) {
  var t = e.loading,
    n = t === void 0 ? !0 : t,
    i = e.color,
    r = i === void 0 ? "#000000" : i,
    s = e.speedMultiplier,
    o = s === void 0 ? 1 : s,
    a = e.cssOverride,
    l = a === void 0 ? {} : a,
    u = e.size,
    c = u === void 0 ? 15 : u,
    d = e.margin,
    h = d === void 0 ? 2 : d,
    f = iw(e, [
      "loading",
      "color",
      "speedMultiplier",
      "cssOverride",
      "size",
      "margin",
    ]),
    p = ra({ display: "inherit" }, l),
    y = function (w) {
      return {
        display: "inline-block",
        backgroundColor: r,
        width: Pl(c),
        height: Pl(c),
        margin: Pl(h),
        borderRadius: "100%",
        animation: ""
          .concat(rw, " ")
          .concat(0.7 / o, "s ")
          .concat(w % 2 ? "0s" : "".concat(0.35 / o, "s"), " infinite linear"),
        animationFillMode: "both",
      };
    };
  return n
    ? b.createElement(
        "span",
        ra({ style: p }, f),
        b.createElement("span", { style: y(1) }),
        b.createElement("span", { style: y(2) }),
        b.createElement("span", { style: y(3) })
      )
    : null;
}
const sw = () => {
  const { blogs: e } = b.useContext(Ne);
  return g.jsx("section", {
    className: "hero",
    children:
      e && e.length > 0
        ? e
            .slice(0, 2)
            .map((t) =>
              g.jsxs(
                Te,
                {
                  to: `/blog/${t._id}`,
                  className: "card",
                  children: [
                    g.jsx("img", {
                      src: t.mainImage.url,
                      alt: "blog",
                      className: "blogImg",
                    }),
                    g.jsx("div", {
                      className: "category",
                      children: t.category,
                    }),
                    g.jsx("h1", { children: t.title }),
                    g.jsx("div", {
                      className: "writer_section",
                      children: g.jsxs("div", {
                        className: "author",
                        children: [
                          g.jsx("img", {
                            src: t.authorAvatar,
                            alt: "author_avatar",
                          }),
                          g.jsx("p", { children: t.authorName }),
                        ],
                      }),
                    }),
                  ],
                },
                t._id
              )
            )
        : g.jsx(Ba, { color: "gray", size: 30 }),
  });
};
var sd = {},
  od = {},
  de = {},
  Wa = {};
(function (e) {
  function t(o, a, l) {
    var u = a.slidesToShow,
      c = a.currentSlide;
    return l.length > 2 * u ? o + 2 * u : c >= l.length ? l.length + o : o;
  }
  function n(o, a) {
    if (a.length > 2 * o) {
      for (
        var l = {}, u = a.length - 2 * o, c = a.length - u, d = u, h = 0;
        h < c;
        h++
      )
        (l[h] = d), d++;
      var f = a.length + c,
        p = f + a.slice(0, 2 * o).length,
        y = 0;
      for (h = f; h <= p; h++) (l[h] = y), y++;
      var w = f,
        m = 0;
      for (h = c; h < w; h++) (l[h] = m), m++;
      return l;
    }
    l = {};
    var v = 3 * a.length,
      x = 0;
    for (h = 0; h < v; h++) (l[h] = x), ++x === a.length && (x = 0);
    return l;
  }
  function i(o, a) {
    return a.length < o
      ? a
      : a.length > 2 * o
      ? a.slice(a.length - 2 * o, a.length).concat(a, a.slice(0, 2 * o))
      : a.concat(a, a);
  }
  function r(o, a) {
    return a.length > 2 * o ? 2 * o : a.length;
  }
  function s(o, a, l) {
    var u,
      c = o.currentSlide,
      d = o.slidesToShow,
      h = o.itemWidth,
      f = o.totalItems,
      p = 0,
      y = 0,
      w = c === 0,
      m = a.length - (a.length - 2 * d);
    return (
      a.length < d
        ? ((y = p = 0), (w = u = !1))
        : a.length > 2 * d
        ? ((u = c >= m + a.length) && (y = -h * (p = c - a.length)),
          w && (y = -h * (p = m + (a.length - 2 * d))))
        : ((u = c >= 2 * a.length) && (y = -h * (p = c - a.length)),
          w && (y = l.showDots ? -h * (p = a.length) : -h * (p = f / 3))),
      {
        isReachingTheEnd: u,
        isReachingTheStart: w,
        nextSlide: p,
        nextPosition: y,
      }
    );
  }
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.getOriginalCounterPart = t),
    (e.getOriginalIndexLookupTableByClones = n),
    (e.getClones = i),
    (e.getInitialSlideInInfiniteMode = r),
    (e.checkClonesPosition = s);
})(Wa);
var Fi = {};
Object.defineProperty(Fi, "__esModule", { value: !0 });
function ow(e, t, n, i) {
  var r = 0,
    s = i || n;
  return (
    t &&
      s &&
      (r = e[s].partialVisibilityGutter || e[s].paritialVisibilityGutter),
    r
  );
}
function aw(e, t) {
  var n;
  return t[e] && (n = (100 / t[e].items).toFixed(1)), n;
}
function lw(e, t, n) {
  return Math.round(n / (t + (e.centerMode ? 1 : 0)));
}
(Fi.getPartialVisibilityGutter = ow),
  (Fi.getWidthFromDeviceType = aw),
  (Fi.getItemClientSideWidth = lw);
var Me = {};
Object.defineProperty(Me, "__esModule", { value: !0 });
var zu = Fi;
function ad(e) {
  var t = e.slidesToShow;
  return e.totalItems < t;
}
function uw(e, t) {
  var n,
    i = e.domLoaded,
    r = e.slidesToShow,
    s = e.containerWidth,
    o = e.itemWidth,
    a = t.deviceType,
    l = t.responsive,
    u = t.ssr,
    c = t.partialVisbile,
    d = t.partialVisible,
    h = !!(i && r && s && o);
  u && a && !h && (n = zu.getWidthFromDeviceType(a, l));
  var f = !!(u && a && !h && n);
  return {
    shouldRenderOnSSR: f,
    flexBisis: n,
    domFullyLoaded: h,
    partialVisibilityGutter: zu.getPartialVisibilityGutter(
      l,
      c || d,
      a,
      e.deviceType
    ),
    shouldRenderAtAll: f || h,
  };
}
function cw(e, t) {
  var n = t.currentSlide,
    i = t.slidesToShow;
  return n <= e && e < n + i;
}
function r0(e, t, n) {
  var i = n || e.transform;
  return (!t.infinite && e.currentSlide === 0) || ad(e)
    ? i
    : i + e.itemWidth / 2;
}
function dw(e) {
  return !(0 < e.currentSlide);
}
function s0(e) {
  var t = e.currentSlide,
    n = e.totalItems;
  return !(t + e.slidesToShow < n);
}
function o0(e, t, n, i) {
  t === void 0 && (t = 0);
  var r = e.currentSlide,
    s = e.slidesToShow,
    o = s0(e),
    a = !n.infinite && o,
    l = i || e.transform;
  if (ad(e)) return l;
  var u = l + r * t;
  return a ? u + (e.containerWidth - (e.itemWidth - t) * s) : u;
}
function a0(e, t) {
  return e.rtl ? -1 * t : t;
}
function hw(e, t, n) {
  var i = t.partialVisbile,
    r = t.partialVisible,
    s = t.responsive,
    o = t.deviceType,
    a = t.centerMode,
    l = n || e.transform,
    u = zu.getPartialVisibilityGutter(s, i || r, o, e.deviceType);
  return a0(t, r || i ? o0(e, u, t, n) : a ? r0(e, t, n) : l);
}
function fw(e, t) {
  var n = e.domLoaded,
    i = e.slidesToShow,
    r = e.containerWidth,
    s = e.itemWidth,
    o = t.deviceType,
    a = t.responsive,
    l = t.slidesToSlide || 1,
    u = !!(n && i && r && s);
  return (
    t.ssr &&
      t.deviceType &&
      !u &&
      Object.keys(a).forEach(function (c) {
        var d = a[c].slidesToSlide;
        o === c && d && (l = d);
      }),
    u &&
      Object.keys(a).forEach(function (c) {
        var d = a[c],
          h = d.breakpoint,
          f = d.slidesToSlide,
          p = h.max,
          y = h.min;
        f && window.innerWidth >= y && window.innerWidth <= p && (l = f);
      }),
    l
  );
}
(Me.notEnoughChildren = ad),
  (Me.getInitialState = uw),
  (Me.getIfSlideIsVisbile = cw),
  (Me.getTransformForCenterMode = r0),
  (Me.isInLeftEnd = dw),
  (Me.isInRightEnd = s0),
  (Me.getTransformForPartialVsibile = o0),
  (Me.parsePosition = a0),
  (Me.getTransform = hw),
  (Me.getSlidesToSlide = fw);
var ld = {};
Object.defineProperty(ld, "__esModule", { value: !0 });
var pw = function (e, t, n) {
  var i;
  return function () {
    var r = arguments;
    i ||
      (e.apply(this, r),
      (i = !0),
      typeof n == "function" && n(!0),
      setTimeout(function () {
        (i = !1), typeof n == "function" && n(!1);
      }, t));
  };
};
ld.default = pw;
var l0 = {};
(function (e) {
  function t(n, i) {
    var r = i.partialVisbile,
      s = i.partialVisible,
      o = i.centerMode,
      a = i.ssr,
      l = i.responsive;
    if ((r || s) && o)
      throw new Error(
        "center mode can not be used at the same time with partialVisible"
      );
    if (!l)
      throw a
        ? new Error(
            "ssr mode need to be used in conjunction with responsive prop"
          )
        : new Error(
            "Responsive prop is needed for deciding the amount of items to show on the screen"
          );
    if (l && typeof l != "object")
      throw new Error("responsive prop must be an object");
  }
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = t);
})(l0);
var ud = {};
Object.defineProperty(ud, "__esModule", { value: !0 });
var gw = Me;
function mw(e, t, n) {
  n === void 0 && (n = 0);
  var i,
    r,
    s = e.slidesToShow,
    o = e.currentSlide,
    a = e.itemWidth,
    l = e.totalItems,
    u = gw.getSlidesToSlide(e, t),
    c = o + 1 + n + s + (0 < n ? 0 : u);
  return (
    (r =
      c <= l
        ? -a * (i = o + n + (0 < n ? 0 : u))
        : l < c && o !== l - s
        ? -a * (i = l - s)
        : (i = void 0)),
    { nextSlides: i, nextPosition: r }
  );
}
ud.populateNextSlides = mw;
var cd = {};
Object.defineProperty(cd, "__esModule", { value: !0 });
var yw = b,
  vw = Me,
  xw = Me;
function ww(e, t, n) {
  n === void 0 && (n = 0);
  var i,
    r,
    s = e.currentSlide,
    o = e.itemWidth,
    a = e.slidesToShow,
    l = t.children,
    u = t.showDots,
    c = t.infinite,
    d = vw.getSlidesToSlide(e, t),
    h = s - n - (0 < n ? 0 : d),
    f = (yw.Children.toArray(l).length - a) % d;
  return (
    (r =
      0 <= h
        ? ((i = h),
          u && !c && 0 < f && xw.isInRightEnd(e) && (i = s - f),
          -o * i)
        : (i = h < 0 && s !== 0 ? 0 : void 0)),
    { nextSlides: i, nextPosition: r }
  );
}
cd.populatePreviousSlides = ww;
var u0 = {};
(function (e) {
  function t(n, i, r, s, o, a) {
    var l,
      u,
      c = n.itemWidth,
      d = n.slidesToShow,
      h = n.totalItems,
      f = n.currentSlide,
      p = i.infinite,
      y = !1,
      w = Math.round((r - s) / c),
      m = Math.round((s - r) / c),
      v = r < o;
    if (o < r && w <= d) {
      l = "right";
      var x = Math.abs(-c * (h - d)),
        _ = a - (s - o),
        S = f === h - d;
      (Math.abs(_) <= x || (S && p)) && ((u = _), (y = !0));
    }
    return (
      v &&
        m <= d &&
        ((l = "left"),
        ((_ = a + (o - s)) <= 0 || (f === 0 && p)) && ((y = !0), (u = _))),
      { direction: l, nextPosition: u, canContinue: y }
    );
  }
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.populateSlidesOnMouseTouchMove = t);
})(u0);
Object.defineProperty(de, "__esModule", { value: !0 });
var Hs = Wa;
(de.getOriginalCounterPart = Hs.getOriginalCounterPart),
  (de.getClones = Hs.getClones),
  (de.checkClonesPosition = Hs.checkClonesPosition),
  (de.getInitialSlideInInfiniteMode = Hs.getInitialSlideInInfiniteMode);
var Ml = Fi;
(de.getWidthFromDeviceType = Ml.getWidthFromDeviceType),
  (de.getPartialVisibilityGutter = Ml.getPartialVisibilityGutter),
  (de.getItemClientSideWidth = Ml.getItemClientSideWidth);
var un = Me;
(de.getInitialState = un.getInitialState),
  (de.getIfSlideIsVisbile = un.getIfSlideIsVisbile),
  (de.getTransformForCenterMode = un.getTransformForCenterMode),
  (de.getTransformForPartialVsibile = un.getTransformForPartialVsibile),
  (de.isInLeftEnd = un.isInLeftEnd),
  (de.isInRightEnd = un.isInRightEnd),
  (de.notEnoughChildren = un.notEnoughChildren),
  (de.getSlidesToSlide = un.getSlidesToSlide);
var _w = ld;
de.throttle = _w.default;
var Sw = l0;
de.throwError = Sw.default;
var bw = ud;
de.populateNextSlides = bw.populateNextSlides;
var kw = cd;
de.populatePreviousSlides = kw.populatePreviousSlides;
var Cw = u0;
de.populateSlidesOnMouseTouchMove = Cw.populateSlidesOnMouseTouchMove;
var $a = {},
  Tw =
    (Ro && Ro.__extends) ||
    (function () {
      var e = function (t, n) {
        return (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (i, r) {
              i.__proto__ = r;
            }) ||
          function (i, r) {
            for (var s in r) r.hasOwnProperty(s) && (i[s] = r[s]);
          })(t, n);
      };
      return function (t, n) {
        function i() {
          this.constructor = t;
        }
        e(t, n),
          (t.prototype =
            n === null
              ? Object.create(n)
              : ((i.prototype = n.prototype), new i()));
      };
    })();
Object.defineProperty($a, "__esModule", { value: !0 });
var Ew = b;
function Pw(e) {
  return "clientY" in e;
}
$a.isMouseMoveEvent = Pw;
var Mw = (function (e) {
  function t() {
    return (e !== null && e.apply(this, arguments)) || this;
  }
  return Tw(t, e), t;
})(Ew.Component);
$a.default = Mw;
var dd = {},
  hd = {};
Object.defineProperty(hd, "__esModule", { value: !0 });
var Ow = Wa,
  Rw = Me;
function jw(e, t, n, i) {
  var r = {},
    s = Rw.getSlidesToSlide(t, n);
  return (
    Array(e)
      .fill(0)
      .forEach(function (o, a) {
        var l = Ow.getOriginalCounterPart(a, t, i);
        if (a === 0) r[0] = l;
        else {
          var u = r[a - 1] + s;
          r[a] = u;
        }
      }),
    r
  );
}
hd.getLookupTableForNextSlides = jw;
Object.defineProperty(dd, "__esModule", { value: !0 });
var fr = b,
  Lw = Wa,
  Aw = hd,
  ef = Me,
  Dw = function (e) {
    var t = e.props,
      n = e.state,
      i = e.goToSlide,
      r = e.getState,
      s = t.showDots,
      o = t.customDot,
      a = t.dotListClass,
      l = t.infinite,
      u = t.children;
    if (!s || ef.notEnoughChildren(n)) return null;
    var c,
      d = n.currentSlide,
      h = n.slidesToShow,
      f = ef.getSlidesToSlide(n, t),
      p = fr.Children.toArray(u);
    c = l ? Math.ceil(p.length / f) : Math.ceil((p.length - h) / f) + 1;
    var y = Aw.getLookupTableForNextSlides(c, n, t, p),
      w = Lw.getOriginalIndexLookupTableByClones(h, p),
      m = w[d];
    return fr.createElement(
      "ul",
      { className: "react-multi-carousel-dot-list " + a },
      Array(c)
        .fill(0)
        .map(function (v, x) {
          var _, S;
          if (l) {
            S = y[x];
            var k = w[S];
            _ = m === k || (k <= m && m < k + f);
          } else {
            var C = p.length - h,
              T = x * f;
            _ =
              (S = C < T ? C : T) === d ||
              (S < d && d < S + f && d < p.length - h);
          }
          return o
            ? fr.cloneElement(o, {
                index: x,
                active: _,
                key: x,
                onClick: function () {
                  return i(S);
                },
                carouselState: r(),
              })
            : fr.createElement(
                "li",
                {
                  "data-index": x,
                  key: x,
                  className:
                    "react-multi-carousel-dot " +
                    (_ ? "react-multi-carousel-dot--active" : ""),
                },
                fr.createElement("button", {
                  "aria-label": "Go to slide " + (x + 1),
                  onClick: function () {
                    return i(S);
                  },
                })
              );
        })
    );
  };
dd.default = Dw;
var Ha = {};
Object.defineProperty(Ha, "__esModule", { value: !0 });
var sa = b,
  Iw = function (e) {
    var t = e.customLeftArrow,
      n = e.getState,
      i = e.previous,
      r = e.disabled,
      s = e.rtl;
    if (t)
      return sa.cloneElement(t, {
        onClick: function () {
          return i();
        },
        carouselState: n(),
        disabled: r,
        rtl: s,
      });
    var o = s ? "rtl" : "";
    return sa.createElement("button", {
      "aria-label": "Go to previous slide",
      className:
        "react-multiple-carousel__arrow react-multiple-carousel__arrow--left " +
        o,
      onClick: function () {
        return i();
      },
      type: "button",
      disabled: r,
    });
  };
Ha.LeftArrow = Iw;
var Nw = function (e) {
  var t = e.customRightArrow,
    n = e.getState,
    i = e.next,
    r = e.disabled,
    s = e.rtl;
  if (t)
    return sa.cloneElement(t, {
      onClick: function () {
        return i();
      },
      carouselState: n(),
      disabled: r,
      rtl: s,
    });
  var o = s ? "rtl" : "";
  return sa.createElement("button", {
    "aria-label": "Go to next slide",
    className:
      "react-multiple-carousel__arrow react-multiple-carousel__arrow--right " +
      o,
    onClick: function () {
      return i();
    },
    type: "button",
    disabled: r,
  });
};
Ha.RightArrow = Nw;
var fd = {};
Object.defineProperty(fd, "__esModule", { value: !0 });
var Us = b,
  Ol = de,
  Fw = function (e) {
    var t = e.props,
      n = e.state,
      i = e.goToSlide,
      r = e.clones,
      s = e.notEnoughChildren,
      o = n.itemWidth,
      a = t.children,
      l = t.infinite,
      u = t.itemClass,
      c = t.itemAriaLabel,
      d = t.partialVisbile,
      h = t.partialVisible,
      f = Ol.getInitialState(n, t),
      p = f.flexBisis,
      y = f.shouldRenderOnSSR,
      w = f.domFullyLoaded,
      m = f.partialVisibilityGutter;
    return f.shouldRenderAtAll
      ? (d &&
          console.warn(
            'WARNING: Please correct props name: "partialVisible" as old typo will be removed in future versions!'
          ),
        Us.createElement(
          Us.Fragment,
          null,
          (l ? r : Us.Children.toArray(a)).map(function (v, x) {
            return Us.createElement(
              "li",
              {
                key: x,
                "data-index": x,
                onClick: function () {
                  t.focusOnSelect && i(x);
                },
                "aria-hidden": Ol.getIfSlideIsVisbile(x, n) ? "false" : "true",
                "aria-label":
                  c || (v.props.ariaLabel ? v.props.ariaLabel : null),
                style: {
                  flex: y ? "1 0 " + p + "%" : "auto",
                  position: "relative",
                  width: w ? ((d || h) && m && !s ? o - m : o) + "px" : "auto",
                },
                className:
                  "react-multi-carousel-item " +
                  (Ol.getIfSlideIsVisbile(x, n)
                    ? "react-multi-carousel-item--active"
                    : "") +
                  " " +
                  u,
              },
              v
            );
          })
        ))
      : null;
  };
fd.default = Fw;
var zw =
  (Ro && Ro.__extends) ||
  (function () {
    var e = function (t, n) {
      return (e =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (i, r) {
            i.__proto__ = r;
          }) ||
        function (i, r) {
          for (var s in r) r.hasOwnProperty(s) && (i[s] = r[s]);
        })(t, n);
    };
    return function (t, n) {
      function i() {
        this.constructor = t;
      }
      e(t, n),
        (t.prototype =
          n === null
            ? Object.create(n)
            : ((i.prototype = n.prototype), new i()));
    };
  })();
Object.defineProperty(od, "__esModule", { value: !0 });
var Le = b,
  ve = de,
  $n = $a,
  Bw = dd,
  tf = Ha,
  Ww = fd,
  Vs = Me,
  Rt = 400,
  nf = "transform 400ms ease-in-out",
  $w = (function (e) {
    function t(n) {
      var i = e.call(this, n) || this;
      return (
        (i.containerRef = Le.createRef()),
        (i.listRef = Le.createRef()),
        (i.state = {
          itemWidth: 0,
          slidesToShow: 0,
          currentSlide: 0,
          totalItems: Le.Children.count(n.children),
          deviceType: "",
          domLoaded: !1,
          transform: 0,
          containerWidth: 0,
        }),
        (i.onResize = i.onResize.bind(i)),
        (i.handleDown = i.handleDown.bind(i)),
        (i.handleMove = i.handleMove.bind(i)),
        (i.handleOut = i.handleOut.bind(i)),
        (i.onKeyUp = i.onKeyUp.bind(i)),
        (i.handleEnter = i.handleEnter.bind(i)),
        (i.setIsInThrottle = i.setIsInThrottle.bind(i)),
        (i.next = ve.throttle(
          i.next.bind(i),
          n.transitionDuration || Rt,
          i.setIsInThrottle
        )),
        (i.previous = ve.throttle(
          i.previous.bind(i),
          n.transitionDuration || Rt,
          i.setIsInThrottle
        )),
        (i.goToSlide = ve.throttle(
          i.goToSlide.bind(i),
          n.transitionDuration || Rt,
          i.setIsInThrottle
        )),
        (i.onMove = !1),
        (i.initialX = 0),
        (i.lastX = 0),
        (i.isAnimationAllowed = !1),
        (i.direction = ""),
        (i.initialY = 0),
        (i.isInThrottle = !1),
        (i.transformPlaceHolder = 0),
        i
      );
    }
    return (
      zw(t, e),
      (t.prototype.resetTotalItems = function () {
        var n = this,
          i = Le.Children.count(this.props.children),
          r = ve.notEnoughChildren(this.state)
            ? 0
            : Math.max(0, Math.min(this.state.currentSlide, i));
        this.setState({ totalItems: i, currentSlide: r }, function () {
          n.setContainerAndItemWidth(n.state.slidesToShow, !0);
        });
      }),
      (t.prototype.setIsInThrottle = function (n) {
        n === void 0 && (n = !1), (this.isInThrottle = n);
      }),
      (t.prototype.setTransformDirectly = function (n, i) {
        var r = this.props.additionalTransfrom;
        this.transformPlaceHolder = n;
        var s = Vs.getTransform(
          this.state,
          this.props,
          this.transformPlaceHolder
        );
        this.listRef &&
          this.listRef.current &&
          (this.setAnimationDirectly(i),
          (this.listRef.current.style.transform =
            "translate3d(" + (s + r) + "px,0,0)"));
      }),
      (t.prototype.setAnimationDirectly = function (n) {
        this.listRef &&
          this.listRef.current &&
          (this.listRef.current.style.transition = n
            ? this.props.customTransition || nf
            : "none");
      }),
      (t.prototype.componentDidMount = function () {
        this.setState({ domLoaded: !0 }),
          this.setItemsToShow(),
          window.addEventListener("resize", this.onResize),
          this.onResize(!0),
          this.props.keyBoardControl &&
            window.addEventListener("keyup", this.onKeyUp),
          this.props.autoPlay &&
            (this.autoPlay = setInterval(this.next, this.props.autoPlaySpeed));
      }),
      (t.prototype.setClones = function (n, i, r, s) {
        var o = this;
        s === void 0 && (s = !1), (this.isAnimationAllowed = !1);
        var a = Le.Children.toArray(this.props.children),
          l = ve.getInitialSlideInInfiniteMode(n || this.state.slidesToShow, a),
          u = ve.getClones(this.state.slidesToShow, a),
          c = a.length < this.state.slidesToShow ? 0 : this.state.currentSlide;
        this.setState(
          { totalItems: u.length, currentSlide: r && !s ? c : l },
          function () {
            o.correctItemsPosition(i || o.state.itemWidth);
          }
        );
      }),
      (t.prototype.setItemsToShow = function (n, i) {
        var r = this,
          s = this.props.responsive;
        Object.keys(s).forEach(function (o) {
          var a = s[o],
            l = a.breakpoint,
            u = a.items,
            c = l.max,
            d = l.min,
            h = [window.innerWidth];
          window.screen && window.screen.width && h.push(window.screen.width);
          var f = Math.min.apply(Math, h);
          d <= f &&
            f <= c &&
            (r.setState({ slidesToShow: u, deviceType: o }),
            r.setContainerAndItemWidth(u, n, i));
        });
      }),
      (t.prototype.setContainerAndItemWidth = function (n, i, r) {
        var s = this;
        if (this.containerRef && this.containerRef.current) {
          var o = this.containerRef.current.offsetWidth,
            a = ve.getItemClientSideWidth(this.props, n, o);
          this.setState({ containerWidth: o, itemWidth: a }, function () {
            s.props.infinite && s.setClones(n, a, i, r);
          }),
            i && this.correctItemsPosition(a);
        }
      }),
      (t.prototype.correctItemsPosition = function (n, i, r) {
        i && (this.isAnimationAllowed = !0),
          !i && this.isAnimationAllowed && (this.isAnimationAllowed = !1);
        var s =
          this.state.totalItems < this.state.slidesToShow
            ? 0
            : -n * this.state.currentSlide;
        r && this.setTransformDirectly(s, !0), this.setState({ transform: s });
      }),
      (t.prototype.onResize = function (n) {
        var i;
        (i = !!this.props.infinite && (typeof n != "boolean" || !n)),
          this.setItemsToShow(i);
      }),
      (t.prototype.componentDidUpdate = function (n, i) {
        var r = this,
          s = n.keyBoardControl,
          o = n.autoPlay,
          a = n.children,
          l = i.containerWidth,
          u = i.domLoaded,
          c = i.currentSlide;
        if (
          (this.containerRef &&
            this.containerRef.current &&
            this.containerRef.current.offsetWidth !== l &&
            (this.itemsToShowTimeout && clearTimeout(this.itemsToShowTimeout),
            (this.itemsToShowTimeout = setTimeout(function () {
              r.setItemsToShow(!0);
            }, this.props.transitionDuration || Rt))),
          s &&
            !this.props.keyBoardControl &&
            window.removeEventListener("keyup", this.onKeyUp),
          !s &&
            this.props.keyBoardControl &&
            window.addEventListener("keyup", this.onKeyUp),
          o &&
            !this.props.autoPlay &&
            this.autoPlay &&
            (clearInterval(this.autoPlay), (this.autoPlay = void 0)),
          o ||
            !this.props.autoPlay ||
            this.autoPlay ||
            (this.autoPlay = setInterval(this.next, this.props.autoPlaySpeed)),
          a.length !== this.props.children.length
            ? (t.clonesTimeout = setTimeout(function () {
                r.props.infinite
                  ? r.setClones(r.state.slidesToShow, r.state.itemWidth, !0, !0)
                  : r.resetTotalItems();
              }, this.props.transitionDuration || Rt))
            : this.props.infinite &&
              this.state.currentSlide !== c &&
              this.correctClonesPosition({ domLoaded: u }),
          this.transformPlaceHolder !== this.state.transform &&
            (this.transformPlaceHolder = this.state.transform),
          this.props.autoPlay &&
            this.props.rewind &&
            !this.props.infinite &&
            ve.isInRightEnd(this.state))
        ) {
          var d = this.props.transitionDuration || Rt;
          t.isInThrottleTimeout = setTimeout(function () {
            r.setIsInThrottle(!1),
              r.resetAutoplayInterval(),
              r.goToSlide(0, void 0, !!r.props.rewindWithAnimation);
          }, d + this.props.autoPlaySpeed);
        }
      }),
      (t.prototype.correctClonesPosition = function (n) {
        var i = this,
          r = n.domLoaded,
          s = Le.Children.toArray(this.props.children),
          o = ve.checkClonesPosition(this.state, s, this.props),
          a = o.isReachingTheEnd,
          l = o.isReachingTheStart,
          u = o.nextSlide,
          c = o.nextPosition;
        this.state.domLoaded &&
          r &&
          (a || l) &&
          ((this.isAnimationAllowed = !1),
          (t.transformTimeout = setTimeout(function () {
            i.setState({ transform: c, currentSlide: u });
          }, this.props.transitionDuration || Rt)));
      }),
      (t.prototype.next = function (n) {
        var i = this;
        n === void 0 && (n = 0);
        var r = this.props,
          s = r.afterChange,
          o = r.beforeChange;
        if (!ve.notEnoughChildren(this.state)) {
          var a = ve.populateNextSlides(this.state, this.props, n),
            l = a.nextSlides,
            u = a.nextPosition,
            c = this.state.currentSlide;
          l !== void 0 &&
            u !== void 0 &&
            (typeof o == "function" && o(l, this.getState()),
            (this.isAnimationAllowed = !0),
            this.props.shouldResetAutoplay && this.resetAutoplayInterval(),
            this.setState({ transform: u, currentSlide: l }, function () {
              typeof s == "function" &&
                (t.afterChangeTimeout = setTimeout(function () {
                  s(c, i.getState());
                }, i.props.transitionDuration || Rt));
            }));
        }
      }),
      (t.prototype.previous = function (n) {
        var i = this;
        n === void 0 && (n = 0);
        var r = this.props,
          s = r.afterChange,
          o = r.beforeChange;
        if (!ve.notEnoughChildren(this.state)) {
          var a = ve.populatePreviousSlides(this.state, this.props, n),
            l = a.nextSlides,
            u = a.nextPosition;
          if (l !== void 0 && u !== void 0) {
            var c = this.state.currentSlide;
            typeof o == "function" && o(l, this.getState()),
              (this.isAnimationAllowed = !0),
              this.props.shouldResetAutoplay && this.resetAutoplayInterval(),
              this.setState({ transform: u, currentSlide: l }, function () {
                typeof s == "function" &&
                  (t.afterChangeTimeout2 = setTimeout(function () {
                    s(c, i.getState());
                  }, i.props.transitionDuration || Rt));
              });
          }
        }
      }),
      (t.prototype.resetAutoplayInterval = function () {
        this.props.autoPlay &&
          (clearInterval(this.autoPlay),
          (this.autoPlay = setInterval(this.next, this.props.autoPlaySpeed)));
      }),
      (t.prototype.componentWillUnmount = function () {
        window.removeEventListener("resize", this.onResize),
          this.props.keyBoardControl &&
            window.removeEventListener("keyup", this.onKeyUp),
          this.props.autoPlay &&
            this.autoPlay &&
            (clearInterval(this.autoPlay), (this.autoPlay = void 0)),
          this.itemsToShowTimeout && clearTimeout(this.itemsToShowTimeout),
          t.clonesTimeout && clearTimeout(t.clonesTimeout),
          t.isInThrottleTimeout && clearTimeout(t.isInThrottleTimeout),
          t.transformTimeout && clearTimeout(t.transformTimeout),
          t.afterChangeTimeout && clearTimeout(t.afterChangeTimeout),
          t.afterChangeTimeout2 && clearTimeout(t.afterChangeTimeout2),
          t.afterChangeTimeout3 && clearTimeout(t.afterChangeTimeout3);
      }),
      (t.prototype.resetMoveStatus = function () {
        (this.onMove = !1),
          (this.initialX = 0),
          (this.lastX = 0),
          (this.direction = ""),
          (this.initialY = 0);
      }),
      (t.prototype.getCords = function (n) {
        var i = n.clientX,
          r = n.clientY;
        return {
          clientX: Vs.parsePosition(this.props, i),
          clientY: Vs.parsePosition(this.props, r),
        };
      }),
      (t.prototype.handleDown = function (n) {
        if (
          !(
            (!$n.isMouseMoveEvent(n) && !this.props.swipeable) ||
            ($n.isMouseMoveEvent(n) && !this.props.draggable) ||
            this.isInThrottle
          )
        ) {
          var i = this.getCords($n.isMouseMoveEvent(n) ? n : n.touches[0]),
            r = i.clientX,
            s = i.clientY;
          (this.onMove = !0),
            (this.initialX = r),
            (this.initialY = s),
            (this.lastX = r),
            (this.isAnimationAllowed = !1);
        }
      }),
      (t.prototype.handleMove = function (n) {
        if (
          !(
            (!$n.isMouseMoveEvent(n) && !this.props.swipeable) ||
            ($n.isMouseMoveEvent(n) && !this.props.draggable) ||
            ve.notEnoughChildren(this.state)
          )
        ) {
          var i = this.getCords($n.isMouseMoveEvent(n) ? n : n.touches[0]),
            r = i.clientX,
            s = i.clientY,
            o = this.initialX - r,
            a = this.initialY - s;
          if (this.onMove) {
            if (!(Math.abs(o) > Math.abs(a))) return;
            var l = ve.populateSlidesOnMouseTouchMove(
                this.state,
                this.props,
                this.initialX,
                this.lastX,
                r,
                this.transformPlaceHolder
              ),
              u = l.direction,
              c = l.nextPosition,
              d = l.canContinue;
            u &&
              ((this.direction = u),
              d && c !== void 0 && this.setTransformDirectly(c)),
              (this.lastX = r);
          }
        }
      }),
      (t.prototype.handleOut = function (n) {
        this.props.autoPlay &&
          !this.autoPlay &&
          (this.autoPlay = setInterval(this.next, this.props.autoPlaySpeed));
        var i = n.type === "touchend" && !this.props.swipeable,
          r =
            (n.type === "mouseleave" || n.type === "mouseup") &&
            !this.props.draggable;
        if (!i && !r && this.onMove) {
          if ((this.setAnimationDirectly(!0), this.direction === "right"))
            if (this.initialX - this.lastX >= this.props.minimumTouchDrag) {
              var s = Math.round(
                (this.initialX - this.lastX) / this.state.itemWidth
              );
              this.next(s);
            } else this.correctItemsPosition(this.state.itemWidth, !0, !0);
          this.direction === "left" &&
            (this.lastX - this.initialX > this.props.minimumTouchDrag
              ? ((s = Math.round(
                  (this.lastX - this.initialX) / this.state.itemWidth
                )),
                this.previous(s))
              : this.correctItemsPosition(this.state.itemWidth, !0, !0)),
            this.resetMoveStatus();
        }
      }),
      (t.prototype.isInViewport = function (n) {
        var i = n.getBoundingClientRect(),
          r = i.top,
          s = r === void 0 ? 0 : r,
          o = i.left,
          a = o === void 0 ? 0 : o,
          l = i.bottom,
          u = l === void 0 ? 0 : l,
          c = i.right,
          d = c === void 0 ? 0 : c;
        return (
          0 <= s &&
          0 <= a &&
          u <= (window.innerHeight || document.documentElement.clientHeight) &&
          d <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }),
      (t.prototype.isChildOfCarousel = function (n) {
        return (
          !!(n instanceof Element && this.listRef && this.listRef.current) &&
          this.listRef.current.contains(n)
        );
      }),
      (t.prototype.onKeyUp = function (n) {
        var i = n.target;
        switch (n.keyCode) {
          case 37:
            if (this.isChildOfCarousel(i)) return this.previous();
            break;
          case 39:
            if (this.isChildOfCarousel(i)) return this.next();
            break;
          case 9:
            if (
              this.isChildOfCarousel(i) &&
              i instanceof HTMLInputElement &&
              this.isInViewport(i)
            )
              return this.next();
        }
      }),
      (t.prototype.handleEnter = function (n) {
        $n.isMouseMoveEvent(n) &&
          this.autoPlay &&
          this.props.autoPlay &&
          this.props.pauseOnHover &&
          (clearInterval(this.autoPlay), (this.autoPlay = void 0));
      }),
      (t.prototype.goToSlide = function (n, i, r) {
        var s = this;
        if ((r === void 0 && (r = !0), !this.isInThrottle)) {
          var o = this.state.itemWidth,
            a = this.props,
            l = a.afterChange,
            u = a.beforeChange,
            c = this.state.currentSlide;
          typeof u != "function" ||
            (i && (typeof i != "object" || i.skipBeforeChange)) ||
            u(n, this.getState()),
            (this.isAnimationAllowed = r),
            this.props.shouldResetAutoplay && this.resetAutoplayInterval(),
            this.setState({ currentSlide: n, transform: -o * n }, function () {
              s.props.infinite && s.correctClonesPosition({ domLoaded: !0 }),
                typeof l != "function" ||
                  (i && (typeof i != "object" || i.skipAfterChange)) ||
                  (t.afterChangeTimeout3 = setTimeout(function () {
                    l(c, s.getState());
                  }, s.props.transitionDuration || Rt));
            });
        }
      }),
      (t.prototype.getState = function () {
        return this.state;
      }),
      (t.prototype.renderLeftArrow = function (n) {
        var i = this,
          r = this.props,
          s = r.customLeftArrow,
          o = r.rtl;
        return Le.createElement(tf.LeftArrow, {
          customLeftArrow: s,
          getState: function () {
            return i.getState();
          },
          previous: this.previous,
          disabled: n,
          rtl: o,
        });
      }),
      (t.prototype.renderRightArrow = function (n) {
        var i = this,
          r = this.props,
          s = r.customRightArrow,
          o = r.rtl;
        return Le.createElement(tf.RightArrow, {
          customRightArrow: s,
          getState: function () {
            return i.getState();
          },
          next: this.next,
          disabled: n,
          rtl: o,
        });
      }),
      (t.prototype.renderButtonGroups = function () {
        var n = this,
          i = this.props.customButtonGroup;
        return i
          ? Le.cloneElement(i, {
              previous: function () {
                return n.previous();
              },
              next: function () {
                return n.next();
              },
              goToSlide: function (r, s) {
                return n.goToSlide(r, s);
              },
              carouselState: this.getState(),
            })
          : null;
      }),
      (t.prototype.renderDotsList = function () {
        var n = this;
        return Le.createElement(Bw.default, {
          state: this.state,
          props: this.props,
          goToSlide: this.goToSlide,
          getState: function () {
            return n.getState();
          },
        });
      }),
      (t.prototype.renderCarouselItems = function () {
        var n = [];
        if (this.props.infinite) {
          var i = Le.Children.toArray(this.props.children);
          n = ve.getClones(this.state.slidesToShow, i);
        }
        return Le.createElement(Ww.default, {
          clones: n,
          goToSlide: this.goToSlide,
          state: this.state,
          notEnoughChildren: ve.notEnoughChildren(this.state),
          props: this.props,
        });
      }),
      (t.prototype.render = function () {
        var n = this.props,
          i = n.deviceType,
          r = n.arrows,
          s = n.renderArrowsWhenDisabled,
          o = n.removeArrowOnDeviceType,
          a = n.infinite,
          l = n.containerClass,
          u = n.sliderClass,
          c = n.customTransition,
          d = n.additionalTransfrom,
          h = n.renderDotsOutside,
          f = n.renderButtonGroupOutside,
          p = n.className,
          y = n.rtl,
          w = ve.getInitialState(this.state, this.props),
          m = w.shouldRenderOnSSR,
          v = w.shouldRenderAtAll,
          x = ve.isInLeftEnd(this.state),
          _ = ve.isInRightEnd(this.state),
          S =
            r &&
            !(
              o &&
              ((i && -1 < o.indexOf(i)) ||
                (this.state.deviceType &&
                  -1 < o.indexOf(this.state.deviceType)))
            ) &&
            !ve.notEnoughChildren(this.state) &&
            v,
          k = !a && x,
          C = !a && _,
          T = Vs.getTransform(this.state, this.props);
        return Le.createElement(
          Le.Fragment,
          null,
          Le.createElement(
            "div",
            {
              className: "react-multi-carousel-list " + l + " " + p,
              dir: y ? "rtl" : "ltr",
              ref: this.containerRef,
            },
            Le.createElement(
              "ul",
              {
                ref: this.listRef,
                className: "react-multi-carousel-track " + u,
                style: {
                  transition: this.isAnimationAllowed ? c || nf : "none",
                  overflow: m ? "hidden" : "unset",
                  transform: "translate3d(" + (T + d) + "px,0,0)",
                },
                onMouseMove: this.handleMove,
                onMouseDown: this.handleDown,
                onMouseUp: this.handleOut,
                onMouseEnter: this.handleEnter,
                onMouseLeave: this.handleOut,
                onTouchStart: this.handleDown,
                onTouchMove: this.handleMove,
                onTouchEnd: this.handleOut,
              },
              this.renderCarouselItems()
            ),
            S && (!k || s) && this.renderLeftArrow(k),
            S && (!C || s) && this.renderRightArrow(C),
            v && !f && this.renderButtonGroups(),
            v && !h && this.renderDotsList()
          ),
          v && h && this.renderDotsList(),
          v && f && this.renderButtonGroups()
        );
      }),
      (t.defaultProps = {
        slidesToSlide: 1,
        infinite: !1,
        draggable: !0,
        swipeable: !0,
        arrows: !0,
        renderArrowsWhenDisabled: !1,
        containerClass: "",
        sliderClass: "",
        itemClass: "",
        keyBoardControl: !0,
        autoPlaySpeed: 3e3,
        showDots: !1,
        renderDotsOutside: !1,
        renderButtonGroupOutside: !1,
        minimumTouchDrag: 80,
        className: "",
        dotListClass: "",
        focusOnSelect: !1,
        centerMode: !1,
        additionalTransfrom: 0,
        pauseOnHover: !0,
        shouldResetAutoplay: !0,
        rewind: !1,
        rtl: !1,
        rewindWithAnimation: !1,
      }),
      t
    );
  })(Le.Component);
od.default = $w;
Object.defineProperty(sd, "__esModule", { value: !0 });
var Hw = od;
sd.default = Hw.default;
var Uw = sd;
const Vw = Ap(Uw),
  Yw = () => {
    const e = {
        extraLarge: {
          breakpoint: { max: 3e3, min: 1324 },
          items: 4,
          slidesToSlide: 4,
        },
        large: {
          breakpoint: { max: 1324, min: 1005 },
          items: 3,
          slidesToSlide: 3,
        },
        medium: {
          breakpoint: { max: 1005, min: 700 },
          items: 2,
          slidesToSlide: 2,
        },
        small: { breakpoint: { max: 700, min: 0 }, items: 1, slidesToSlide: 1 },
      },
      { blogs: t } = b.useContext(Ne);
    return g.jsxs("div", {
      className: "trending",
      children: [
        g.jsx("h3", { children: "Trending" }),
        g.jsx(Vw, {
          responsive: e,
          children:
            t && t.length > 0
              ? t
                  .slice(0, 6)
                  .map((n) =>
                    g.jsxs(
                      Te,
                      {
                        className: "card",
                        children: [
                          g.jsx("img", {
                            src: n.mainImage.url,
                            alt: "blog",
                            className: "blogImg",
                          }),
                          g.jsx("span", {
                            className: "category",
                            children: n.category,
                          }),
                          g.jsx("h4", { children: n.title }),
                          g.jsx("div", {
                            className: "writer_section",
                            children: g.jsxs("div", {
                              className: "author",
                              children: [
                                g.jsx("img", {
                                  src: n.authorAvatar,
                                  alt: "author_avatar",
                                }),
                                g.jsx("p", { children: n.authorName }),
                              ],
                            }),
                          }),
                        ],
                      },
                      n._id
                    )
                  )
              : g.jsx(Ba, { size: 30, color: "gray" }),
        }),
      ],
    });
  };
function c0(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Xw } = Object.prototype,
  { getPrototypeOf: pd } = Object,
  Ua = ((e) => (t) => {
    const n = Xw.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Wt = (e) => ((e = e.toLowerCase()), (t) => Ua(t) === e),
  Va = (e) => (t) => typeof t === e,
  { isArray: rr } = Array,
  us = Va("undefined");
function Kw(e) {
  return (
    e !== null &&
    !us(e) &&
    e.constructor !== null &&
    !us(e.constructor) &&
    vt(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const d0 = Wt("ArrayBuffer");
function Gw(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && d0(e.buffer)),
    t
  );
}
const Qw = Va("string"),
  vt = Va("function"),
  h0 = Va("number"),
  Ya = (e) => e !== null && typeof e == "object",
  qw = (e) => e === !0 || e === !1,
  So = (e) => {
    if (Ua(e) !== "object") return !1;
    const t = pd(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Jw = Wt("Date"),
  Zw = Wt("File"),
  e_ = Wt("Blob"),
  t_ = Wt("FileList"),
  n_ = (e) => Ya(e) && vt(e.pipe),
  i_ = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (vt(e.append) &&
          ((t = Ua(e)) === "formdata" ||
            (t === "object" &&
              vt(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  r_ = Wt("URLSearchParams"),
  s_ = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function _s(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let i, r;
  if ((typeof e != "object" && (e = [e]), rr(e)))
    for (i = 0, r = e.length; i < r; i++) t.call(null, e[i], i, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      o = s.length;
    let a;
    for (i = 0; i < o; i++) (a = s[i]), t.call(null, e[a], a, e);
  }
}
function f0(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let i = n.length,
    r;
  for (; i-- > 0; ) if (((r = n[i]), t === r.toLowerCase())) return r;
  return null;
}
const p0 =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  g0 = (e) => !us(e) && e !== p0;
function Bu() {
  const { caseless: e } = (g0(this) && this) || {},
    t = {},
    n = (i, r) => {
      const s = (e && f0(t, r)) || r;
      So(t[s]) && So(i)
        ? (t[s] = Bu(t[s], i))
        : So(i)
        ? (t[s] = Bu({}, i))
        : rr(i)
        ? (t[s] = i.slice())
        : (t[s] = i);
    };
  for (let i = 0, r = arguments.length; i < r; i++)
    arguments[i] && _s(arguments[i], n);
  return t;
}
const o_ = (e, t, n, { allOwnKeys: i } = {}) => (
    _s(
      t,
      (r, s) => {
        n && vt(r) ? (e[s] = c0(r, n)) : (e[s] = r);
      },
      { allOwnKeys: i }
    ),
    e
  ),
  a_ = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  l_ = (e, t, n, i) => {
    (e.prototype = Object.create(t.prototype, i)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  u_ = (e, t, n, i) => {
    let r, s, o;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (r = Object.getOwnPropertyNames(e), s = r.length; s-- > 0; )
        (o = r[s]), (!i || i(o, e, t)) && !a[o] && ((t[o] = e[o]), (a[o] = !0));
      e = n !== !1 && pd(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  c_ = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const i = e.indexOf(t, n);
    return i !== -1 && i === n;
  },
  d_ = (e) => {
    if (!e) return null;
    if (rr(e)) return e;
    let t = e.length;
    if (!h0(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  h_ = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && pd(Uint8Array)),
  f_ = (e, t) => {
    const i = (e && e[Symbol.iterator]).call(e);
    let r;
    for (; (r = i.next()) && !r.done; ) {
      const s = r.value;
      t.call(e, s[0], s[1]);
    }
  },
  p_ = (e, t) => {
    let n;
    const i = [];
    for (; (n = e.exec(t)) !== null; ) i.push(n);
    return i;
  },
  g_ = Wt("HTMLFormElement"),
  m_ = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, i, r) {
      return i.toUpperCase() + r;
    }),
  rf = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  y_ = Wt("RegExp"),
  m0 = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      i = {};
    _s(n, (r, s) => {
      let o;
      (o = t(r, s, e)) !== !1 && (i[s] = o || r);
    }),
      Object.defineProperties(e, i);
  },
  v_ = (e) => {
    m0(e, (t, n) => {
      if (vt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const i = e[n];
      if (vt(i)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  x_ = (e, t) => {
    const n = {},
      i = (r) => {
        r.forEach((s) => {
          n[s] = !0;
        });
      };
    return rr(e) ? i(e) : i(String(e).split(t)), n;
  },
  w_ = () => {},
  __ = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  Rl = "abcdefghijklmnopqrstuvwxyz",
  sf = "0123456789",
  y0 = { DIGIT: sf, ALPHA: Rl, ALPHA_DIGIT: Rl + Rl.toUpperCase() + sf },
  S_ = (e = 16, t = y0.ALPHA_DIGIT) => {
    let n = "";
    const { length: i } = t;
    for (; e--; ) n += t[(Math.random() * i) | 0];
    return n;
  };
function b_(e) {
  return !!(
    e &&
    vt(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const k_ = (e) => {
    const t = new Array(10),
      n = (i, r) => {
        if (Ya(i)) {
          if (t.indexOf(i) >= 0) return;
          if (!("toJSON" in i)) {
            t[r] = i;
            const s = rr(i) ? [] : {};
            return (
              _s(i, (o, a) => {
                const l = n(o, r + 1);
                !us(l) && (s[a] = l);
              }),
              (t[r] = void 0),
              s
            );
          }
        }
        return i;
      };
    return n(e, 0);
  },
  C_ = Wt("AsyncFunction"),
  T_ = (e) => e && (Ya(e) || vt(e)) && vt(e.then) && vt(e.catch),
  E = {
    isArray: rr,
    isArrayBuffer: d0,
    isBuffer: Kw,
    isFormData: i_,
    isArrayBufferView: Gw,
    isString: Qw,
    isNumber: h0,
    isBoolean: qw,
    isObject: Ya,
    isPlainObject: So,
    isUndefined: us,
    isDate: Jw,
    isFile: Zw,
    isBlob: e_,
    isRegExp: y_,
    isFunction: vt,
    isStream: n_,
    isURLSearchParams: r_,
    isTypedArray: h_,
    isFileList: t_,
    forEach: _s,
    merge: Bu,
    extend: o_,
    trim: s_,
    stripBOM: a_,
    inherits: l_,
    toFlatObject: u_,
    kindOf: Ua,
    kindOfTest: Wt,
    endsWith: c_,
    toArray: d_,
    forEachEntry: f_,
    matchAll: p_,
    isHTMLForm: g_,
    hasOwnProperty: rf,
    hasOwnProp: rf,
    reduceDescriptors: m0,
    freezeMethods: v_,
    toObjectSet: x_,
    toCamelCase: m_,
    noop: w_,
    toFiniteNumber: __,
    findKey: f0,
    global: p0,
    isContextDefined: g0,
    ALPHABET: y0,
    generateString: S_,
    isSpecCompliantForm: b_,
    toJSONObject: k_,
    isAsyncFn: C_,
    isThenable: T_,
  };
function V(e, t, n, i, r) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    i && (this.request = i),
    r && (this.response = r);
}
E.inherits(V, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: E.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const v0 = V.prototype,
  x0 = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  x0[e] = { value: e };
});
Object.defineProperties(V, x0);
Object.defineProperty(v0, "isAxiosError", { value: !0 });
V.from = (e, t, n, i, r, s) => {
  const o = Object.create(v0);
  return (
    E.toFlatObject(
      e,
      o,
      function (l) {
        return l !== Error.prototype;
      },
      (a) => a !== "isAxiosError"
    ),
    V.call(o, e.message, t, n, i, r),
    (o.cause = e),
    (o.name = e.name),
    s && Object.assign(o, s),
    o
  );
};
const E_ = null;
function Wu(e) {
  return E.isPlainObject(e) || E.isArray(e);
}
function w0(e) {
  return E.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function of(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (r, s) {
          return (r = w0(r)), !n && s ? "[" + r + "]" : r;
        })
        .join(n ? "." : "")
    : t;
}
function P_(e) {
  return E.isArray(e) && !e.some(Wu);
}
const M_ = E.toFlatObject(E, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Xa(e, t, n) {
  if (!E.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = E.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (y, w) {
        return !E.isUndefined(w[y]);
      }
    ));
  const i = n.metaTokens,
    r = n.visitor || c,
    s = n.dots,
    o = n.indexes,
    l = (n.Blob || (typeof Blob < "u" && Blob)) && E.isSpecCompliantForm(t);
  if (!E.isFunction(r)) throw new TypeError("visitor must be a function");
  function u(p) {
    if (p === null) return "";
    if (E.isDate(p)) return p.toISOString();
    if (!l && E.isBlob(p))
      throw new V("Blob is not supported. Use a Buffer instead.");
    return E.isArrayBuffer(p) || E.isTypedArray(p)
      ? l && typeof Blob == "function"
        ? new Blob([p])
        : Buffer.from(p)
      : p;
  }
  function c(p, y, w) {
    let m = p;
    if (p && !w && typeof p == "object") {
      if (E.endsWith(y, "{}"))
        (y = i ? y : y.slice(0, -2)), (p = JSON.stringify(p));
      else if (
        (E.isArray(p) && P_(p)) ||
        ((E.isFileList(p) || E.endsWith(y, "[]")) && (m = E.toArray(p)))
      )
        return (
          (y = w0(y)),
          m.forEach(function (x, _) {
            !(E.isUndefined(x) || x === null) &&
              t.append(
                o === !0 ? of([y], _, s) : o === null ? y : y + "[]",
                u(x)
              );
          }),
          !1
        );
    }
    return Wu(p) ? !0 : (t.append(of(w, y, s), u(p)), !1);
  }
  const d = [],
    h = Object.assign(M_, {
      defaultVisitor: c,
      convertValue: u,
      isVisitable: Wu,
    });
  function f(p, y) {
    if (!E.isUndefined(p)) {
      if (d.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      d.push(p),
        E.forEach(p, function (m, v) {
          (!(E.isUndefined(m) || m === null) &&
            r.call(t, m, E.isString(v) ? v.trim() : v, y, h)) === !0 &&
            f(m, y ? y.concat(v) : [v]);
        }),
        d.pop();
    }
  }
  if (!E.isObject(e)) throw new TypeError("data must be an object");
  return f(e), t;
}
function af(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (i) {
    return t[i];
  });
}
function gd(e, t) {
  (this._pairs = []), e && Xa(e, this, t);
}
const _0 = gd.prototype;
_0.append = function (t, n) {
  this._pairs.push([t, n]);
};
_0.toString = function (t) {
  const n = t
    ? function (i) {
        return t.call(this, i, af);
      }
    : af;
  return this._pairs
    .map(function (r) {
      return n(r[0]) + "=" + n(r[1]);
    }, "")
    .join("&");
};
function O_(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function S0(e, t, n) {
  if (!t) return e;
  const i = (n && n.encode) || O_,
    r = n && n.serialize;
  let s;
  if (
    (r
      ? (s = r(t, n))
      : (s = E.isURLSearchParams(t) ? t.toString() : new gd(t, n).toString(i)),
    s)
  ) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + s);
  }
  return e;
}
class lf {
  constructor() {
    this.handlers = [];
  }
  use(t, n, i) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: i ? i.synchronous : !1,
        runWhen: i ? i.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    E.forEach(this.handlers, function (i) {
      i !== null && t(i);
    });
  }
}
const b0 = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  R_ = typeof URLSearchParams < "u" ? URLSearchParams : gd,
  j_ = typeof FormData < "u" ? FormData : null,
  L_ = typeof Blob < "u" ? Blob : null,
  A_ = {
    isBrowser: !0,
    classes: { URLSearchParams: R_, FormData: j_, Blob: L_ },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  k0 = typeof window < "u" && typeof document < "u",
  D_ = ((e) => k0 && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  I_ =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  N_ = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: k0,
        hasStandardBrowserEnv: D_,
        hasStandardBrowserWebWorkerEnv: I_,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Nt = { ...N_, ...A_ };
function F_(e, t) {
  return Xa(
    e,
    new Nt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, i, r, s) {
          return Nt.isNode && E.isBuffer(n)
            ? (this.append(i, n.toString("base64")), !1)
            : s.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function z_(e) {
  return E.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function B_(e) {
  const t = {},
    n = Object.keys(e);
  let i;
  const r = n.length;
  let s;
  for (i = 0; i < r; i++) (s = n[i]), (t[s] = e[s]);
  return t;
}
function C0(e) {
  function t(n, i, r, s) {
    let o = n[s++];
    if (o === "__proto__") return !0;
    const a = Number.isFinite(+o),
      l = s >= n.length;
    return (
      (o = !o && E.isArray(r) ? r.length : o),
      l
        ? (E.hasOwnProp(r, o) ? (r[o] = [r[o], i]) : (r[o] = i), !a)
        : ((!r[o] || !E.isObject(r[o])) && (r[o] = []),
          t(n, i, r[o], s) && E.isArray(r[o]) && (r[o] = B_(r[o])),
          !a)
    );
  }
  if (E.isFormData(e) && E.isFunction(e.entries)) {
    const n = {};
    return (
      E.forEachEntry(e, (i, r) => {
        t(z_(i), r, n, 0);
      }),
      n
    );
  }
  return null;
}
function W_(e, t, n) {
  if (E.isString(e))
    try {
      return (t || JSON.parse)(e), E.trim(e);
    } catch (i) {
      if (i.name !== "SyntaxError") throw i;
    }
  return (n || JSON.stringify)(e);
}
const md = {
  transitional: b0,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const i = n.getContentType() || "",
        r = i.indexOf("application/json") > -1,
        s = E.isObject(t);
      if ((s && E.isHTMLForm(t) && (t = new FormData(t)), E.isFormData(t)))
        return r ? JSON.stringify(C0(t)) : t;
      if (
        E.isArrayBuffer(t) ||
        E.isBuffer(t) ||
        E.isStream(t) ||
        E.isFile(t) ||
        E.isBlob(t)
      )
        return t;
      if (E.isArrayBufferView(t)) return t.buffer;
      if (E.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let a;
      if (s) {
        if (i.indexOf("application/x-www-form-urlencoded") > -1)
          return F_(t, this.formSerializer).toString();
        if ((a = E.isFileList(t)) || i.indexOf("multipart/form-data") > -1) {
          const l = this.env && this.env.FormData;
          return Xa(
            a ? { "files[]": t } : t,
            l && new l(),
            this.formSerializer
          );
        }
      }
      return s || r ? (n.setContentType("application/json", !1), W_(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || md.transitional,
        i = n && n.forcedJSONParsing,
        r = this.responseType === "json";
      if (t && E.isString(t) && ((i && !this.responseType) || r)) {
        const o = !(n && n.silentJSONParsing) && r;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (o)
            throw a.name === "SyntaxError"
              ? V.from(a, V.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Nt.classes.FormData, Blob: Nt.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
E.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  md.headers[e] = {};
});
const yd = md,
  $_ = E.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  H_ = (e) => {
    const t = {};
    let n, i, r;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (o) {
            (r = o.indexOf(":")),
              (n = o.substring(0, r).trim().toLowerCase()),
              (i = o.substring(r + 1).trim()),
              !(!n || (t[n] && $_[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(i)
                    : (t[n] = [i])
                  : (t[n] = t[n] ? t[n] + ", " + i : i));
          }),
      t
    );
  },
  uf = Symbol("internals");
function pr(e) {
  return e && String(e).trim().toLowerCase();
}
function bo(e) {
  return e === !1 || e == null ? e : E.isArray(e) ? e.map(bo) : String(e);
}
function U_(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let i;
  for (; (i = n.exec(e)); ) t[i[1]] = i[2];
  return t;
}
const V_ = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function jl(e, t, n, i, r) {
  if (E.isFunction(i)) return i.call(this, t, n);
  if ((r && (t = n), !!E.isString(t))) {
    if (E.isString(i)) return t.indexOf(i) !== -1;
    if (E.isRegExp(i)) return i.test(t);
  }
}
function Y_(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, i) => n.toUpperCase() + i);
}
function X_(e, t) {
  const n = E.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((i) => {
    Object.defineProperty(e, i + n, {
      value: function (r, s, o) {
        return this[i].call(this, t, r, s, o);
      },
      configurable: !0,
    });
  });
}
class Ka {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, i) {
    const r = this;
    function s(a, l, u) {
      const c = pr(l);
      if (!c) throw new Error("header name must be a non-empty string");
      const d = E.findKey(r, c);
      (!d || r[d] === void 0 || u === !0 || (u === void 0 && r[d] !== !1)) &&
        (r[d || l] = bo(a));
    }
    const o = (a, l) => E.forEach(a, (u, c) => s(u, c, l));
    return (
      E.isPlainObject(t) || t instanceof this.constructor
        ? o(t, n)
        : E.isString(t) && (t = t.trim()) && !V_(t)
        ? o(H_(t), n)
        : t != null && s(n, t, i),
      this
    );
  }
  get(t, n) {
    if (((t = pr(t)), t)) {
      const i = E.findKey(this, t);
      if (i) {
        const r = this[i];
        if (!n) return r;
        if (n === !0) return U_(r);
        if (E.isFunction(n)) return n.call(this, r, i);
        if (E.isRegExp(n)) return n.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = pr(t)), t)) {
      const i = E.findKey(this, t);
      return !!(i && this[i] !== void 0 && (!n || jl(this, this[i], i, n)));
    }
    return !1;
  }
  delete(t, n) {
    const i = this;
    let r = !1;
    function s(o) {
      if (((o = pr(o)), o)) {
        const a = E.findKey(i, o);
        a && (!n || jl(i, i[a], a, n)) && (delete i[a], (r = !0));
      }
    }
    return E.isArray(t) ? t.forEach(s) : s(t), r;
  }
  clear(t) {
    const n = Object.keys(this);
    let i = n.length,
      r = !1;
    for (; i--; ) {
      const s = n[i];
      (!t || jl(this, this[s], s, t, !0)) && (delete this[s], (r = !0));
    }
    return r;
  }
  normalize(t) {
    const n = this,
      i = {};
    return (
      E.forEach(this, (r, s) => {
        const o = E.findKey(i, s);
        if (o) {
          (n[o] = bo(r)), delete n[s];
          return;
        }
        const a = t ? Y_(s) : String(s).trim();
        a !== s && delete n[s], (n[a] = bo(r)), (i[a] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      E.forEach(this, (i, r) => {
        i != null && i !== !1 && (n[r] = t && E.isArray(i) ? i.join(", ") : i);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const i = new this(t);
    return n.forEach((r) => i.set(r)), i;
  }
  static accessor(t) {
    const i = (this[uf] = this[uf] = { accessors: {} }).accessors,
      r = this.prototype;
    function s(o) {
      const a = pr(o);
      i[a] || (X_(r, o), (i[a] = !0));
    }
    return E.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
Ka.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
E.reduceDescriptors(Ka.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(i) {
      this[n] = i;
    },
  };
});
E.freezeMethods(Ka);
const Zt = Ka;
function Ll(e, t) {
  const n = this || yd,
    i = t || n,
    r = Zt.from(i.headers);
  let s = i.data;
  return (
    E.forEach(e, function (a) {
      s = a.call(n, s, r.normalize(), t ? t.status : void 0);
    }),
    r.normalize(),
    s
  );
}
function T0(e) {
  return !!(e && e.__CANCEL__);
}
function Ss(e, t, n) {
  V.call(this, e ?? "canceled", V.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
E.inherits(Ss, V, { __CANCEL__: !0 });
function K_(e, t, n) {
  const i = n.config.validateStatus;
  !n.status || !i || i(n.status)
    ? e(n)
    : t(
        new V(
          "Request failed with status code " + n.status,
          [V.ERR_BAD_REQUEST, V.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const G_ = Nt.hasStandardBrowserEnv
  ? {
      write(e, t, n, i, r, s) {
        const o = [e + "=" + encodeURIComponent(t)];
        E.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()),
          E.isString(i) && o.push("path=" + i),
          E.isString(r) && o.push("domain=" + r),
          s === !0 && o.push("secure"),
          (document.cookie = o.join("; "));
      },
      read(e) {
        const t = document.cookie.match(
          new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
        );
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove(e) {
        this.write(e, "", Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function Q_(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function q_(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function E0(e, t) {
  return e && !Q_(t) ? q_(e, t) : t;
}
const J_ = Nt.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let i;
      function r(s) {
        let o = s;
        return (
          t && (n.setAttribute("href", o), (o = n.href)),
          n.setAttribute("href", o),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (i = r(window.location.href)),
        function (o) {
          const a = E.isString(o) ? r(o) : o;
          return a.protocol === i.protocol && a.host === i.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function Z_(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function eS(e, t) {
  e = e || 10;
  const n = new Array(e),
    i = new Array(e);
  let r = 0,
    s = 0,
    o;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const u = Date.now(),
        c = i[s];
      o || (o = u), (n[r] = l), (i[r] = u);
      let d = s,
        h = 0;
      for (; d !== r; ) (h += n[d++]), (d = d % e);
      if (((r = (r + 1) % e), r === s && (s = (s + 1) % e), u - o < t)) return;
      const f = c && u - c;
      return f ? Math.round((h * 1e3) / f) : void 0;
    }
  );
}
function cf(e, t) {
  let n = 0;
  const i = eS(50, 250);
  return (r) => {
    const s = r.loaded,
      o = r.lengthComputable ? r.total : void 0,
      a = s - n,
      l = i(a),
      u = s <= o;
    n = s;
    const c = {
      loaded: s,
      total: o,
      progress: o ? s / o : void 0,
      bytes: a,
      rate: l || void 0,
      estimated: l && o && u ? (o - s) / l : void 0,
      event: r,
    };
    (c[t ? "download" : "upload"] = !0), e(c);
  };
}
const tS = typeof XMLHttpRequest < "u",
  nS =
    tS &&
    function (e) {
      return new Promise(function (n, i) {
        let r = e.data;
        const s = Zt.from(e.headers).normalize();
        let { responseType: o, withXSRFToken: a } = e,
          l;
        function u() {
          e.cancelToken && e.cancelToken.unsubscribe(l),
            e.signal && e.signal.removeEventListener("abort", l);
        }
        let c;
        if (E.isFormData(r)) {
          if (Nt.hasStandardBrowserEnv || Nt.hasStandardBrowserWebWorkerEnv)
            s.setContentType(!1);
          else if ((c = s.getContentType()) !== !1) {
            const [y, ...w] = c
              ? c
                  .split(";")
                  .map((m) => m.trim())
                  .filter(Boolean)
              : [];
            s.setContentType([y || "multipart/form-data", ...w].join("; "));
          }
        }
        let d = new XMLHttpRequest();
        if (e.auth) {
          const y = e.auth.username || "",
            w = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          s.set("Authorization", "Basic " + btoa(y + ":" + w));
        }
        const h = E0(e.baseURL, e.url);
        d.open(e.method.toUpperCase(), S0(h, e.params, e.paramsSerializer), !0),
          (d.timeout = e.timeout);
        function f() {
          if (!d) return;
          const y = Zt.from(
              "getAllResponseHeaders" in d && d.getAllResponseHeaders()
            ),
            m = {
              data:
                !o || o === "text" || o === "json"
                  ? d.responseText
                  : d.response,
              status: d.status,
              statusText: d.statusText,
              headers: y,
              config: e,
              request: d,
            };
          K_(
            function (x) {
              n(x), u();
            },
            function (x) {
              i(x), u();
            },
            m
          ),
            (d = null);
        }
        if (
          ("onloadend" in d
            ? (d.onloadend = f)
            : (d.onreadystatechange = function () {
                !d ||
                  d.readyState !== 4 ||
                  (d.status === 0 &&
                    !(d.responseURL && d.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(f);
              }),
          (d.onabort = function () {
            d &&
              (i(new V("Request aborted", V.ECONNABORTED, e, d)), (d = null));
          }),
          (d.onerror = function () {
            i(new V("Network Error", V.ERR_NETWORK, e, d)), (d = null);
          }),
          (d.ontimeout = function () {
            let w = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const m = e.transitional || b0;
            e.timeoutErrorMessage && (w = e.timeoutErrorMessage),
              i(
                new V(
                  w,
                  m.clarifyTimeoutError ? V.ETIMEDOUT : V.ECONNABORTED,
                  e,
                  d
                )
              ),
              (d = null);
          }),
          Nt.hasStandardBrowserEnv &&
            (a && E.isFunction(a) && (a = a(e)), a || (a !== !1 && J_(h))))
        ) {
          const y =
            e.xsrfHeaderName && e.xsrfCookieName && G_.read(e.xsrfCookieName);
          y && s.set(e.xsrfHeaderName, y);
        }
        r === void 0 && s.setContentType(null),
          "setRequestHeader" in d &&
            E.forEach(s.toJSON(), function (w, m) {
              d.setRequestHeader(m, w);
            }),
          E.isUndefined(e.withCredentials) ||
            (d.withCredentials = !!e.withCredentials),
          o && o !== "json" && (d.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            d.addEventListener("progress", cf(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            d.upload &&
            d.upload.addEventListener("progress", cf(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((l = (y) => {
              d &&
                (i(!y || y.type ? new Ss(null, e, d) : y),
                d.abort(),
                (d = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(l),
            e.signal &&
              (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
        const p = Z_(h);
        if (p && Nt.protocols.indexOf(p) === -1) {
          i(new V("Unsupported protocol " + p + ":", V.ERR_BAD_REQUEST, e));
          return;
        }
        d.send(r || null);
      });
    },
  $u = { http: E_, xhr: nS };
E.forEach($u, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const df = (e) => `- ${e}`,
  iS = (e) => E.isFunction(e) || e === null || e === !1,
  P0 = {
    getAdapter: (e) => {
      e = E.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, i;
      const r = {};
      for (let s = 0; s < t; s++) {
        n = e[s];
        let o;
        if (
          ((i = n),
          !iS(n) && ((i = $u[(o = String(n)).toLowerCase()]), i === void 0))
        )
          throw new V(`Unknown adapter '${o}'`);
        if (i) break;
        r[o || "#" + s] = i;
      }
      if (!i) {
        const s = Object.entries(r).map(
          ([a, l]) =>
            `adapter ${a} ` +
            (l === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let o = t
          ? s.length > 1
            ? `since :
` +
              s.map(df).join(`
`)
            : " " + df(s[0])
          : "as no adapter specified";
        throw new V(
          "There is no suitable adapter to dispatch the request " + o,
          "ERR_NOT_SUPPORT"
        );
      }
      return i;
    },
    adapters: $u,
  };
function Al(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Ss(null, e);
}
function hf(e) {
  return (
    Al(e),
    (e.headers = Zt.from(e.headers)),
    (e.data = Ll.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    P0.getAdapter(e.adapter || yd.adapter)(e).then(
      function (i) {
        return (
          Al(e),
          (i.data = Ll.call(e, e.transformResponse, i)),
          (i.headers = Zt.from(i.headers)),
          i
        );
      },
      function (i) {
        return (
          T0(i) ||
            (Al(e),
            i &&
              i.response &&
              ((i.response.data = Ll.call(e, e.transformResponse, i.response)),
              (i.response.headers = Zt.from(i.response.headers)))),
          Promise.reject(i)
        );
      }
    )
  );
}
const ff = (e) => (e instanceof Zt ? e.toJSON() : e);
function Ki(e, t) {
  t = t || {};
  const n = {};
  function i(u, c, d) {
    return E.isPlainObject(u) && E.isPlainObject(c)
      ? E.merge.call({ caseless: d }, u, c)
      : E.isPlainObject(c)
      ? E.merge({}, c)
      : E.isArray(c)
      ? c.slice()
      : c;
  }
  function r(u, c, d) {
    if (E.isUndefined(c)) {
      if (!E.isUndefined(u)) return i(void 0, u, d);
    } else return i(u, c, d);
  }
  function s(u, c) {
    if (!E.isUndefined(c)) return i(void 0, c);
  }
  function o(u, c) {
    if (E.isUndefined(c)) {
      if (!E.isUndefined(u)) return i(void 0, u);
    } else return i(void 0, c);
  }
  function a(u, c, d) {
    if (d in t) return i(u, c);
    if (d in e) return i(void 0, u);
  }
  const l = {
    url: s,
    method: s,
    data: s,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: a,
    headers: (u, c) => r(ff(u), ff(c), !0),
  };
  return (
    E.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const d = l[c] || r,
        h = d(e[c], t[c], c);
      (E.isUndefined(h) && d !== a) || (n[c] = h);
    }),
    n
  );
}
const M0 = "1.6.7",
  vd = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    vd[e] = function (i) {
      return typeof i === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const pf = {};
vd.transitional = function (t, n, i) {
  function r(s, o) {
    return (
      "[Axios v" +
      M0 +
      "] Transitional option '" +
      s +
      "'" +
      o +
      (i ? ". " + i : "")
    );
  }
  return (s, o, a) => {
    if (t === !1)
      throw new V(
        r(o, " has been removed" + (n ? " in " + n : "")),
        V.ERR_DEPRECATED
      );
    return (
      n &&
        !pf[o] &&
        ((pf[o] = !0),
        console.warn(
          r(
            o,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(s, o, a) : !0
    );
  };
};
function rS(e, t, n) {
  if (typeof e != "object")
    throw new V("options must be an object", V.ERR_BAD_OPTION_VALUE);
  const i = Object.keys(e);
  let r = i.length;
  for (; r-- > 0; ) {
    const s = i[r],
      o = t[s];
    if (o) {
      const a = e[s],
        l = a === void 0 || o(a, s, e);
      if (l !== !0)
        throw new V("option " + s + " must be " + l, V.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new V("Unknown option " + s, V.ERR_BAD_OPTION);
  }
}
const Hu = { assertOptions: rS, validators: vd },
  cn = Hu.validators;
class oa {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new lf(), response: new lf() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (i) {
      if (i instanceof Error) {
        let r;
        Error.captureStackTrace
          ? Error.captureStackTrace((r = {}))
          : (r = new Error());
        const s = r.stack ? r.stack.replace(/^.+\n/, "") : "";
        i.stack
          ? s &&
            !String(i.stack).endsWith(s.replace(/^.+\n.+\n/, "")) &&
            (i.stack +=
              `
` + s)
          : (i.stack = s);
      }
      throw i;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Ki(this.defaults, n));
    const { transitional: i, paramsSerializer: r, headers: s } = n;
    i !== void 0 &&
      Hu.assertOptions(
        i,
        {
          silentJSONParsing: cn.transitional(cn.boolean),
          forcedJSONParsing: cn.transitional(cn.boolean),
          clarifyTimeoutError: cn.transitional(cn.boolean),
        },
        !1
      ),
      r != null &&
        (E.isFunction(r)
          ? (n.paramsSerializer = { serialize: r })
          : Hu.assertOptions(
              r,
              { encode: cn.function, serialize: cn.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let o = s && E.merge(s.common, s[n.method]);
    s &&
      E.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (p) => {
          delete s[p];
        }
      ),
      (n.headers = Zt.concat(o, s));
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function (y) {
      (typeof y.runWhen == "function" && y.runWhen(n) === !1) ||
        ((l = l && y.synchronous), a.unshift(y.fulfilled, y.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (y) {
      u.push(y.fulfilled, y.rejected);
    });
    let c,
      d = 0,
      h;
    if (!l) {
      const p = [hf.bind(this), void 0];
      for (
        p.unshift.apply(p, a),
          p.push.apply(p, u),
          h = p.length,
          c = Promise.resolve(n);
        d < h;

      )
        c = c.then(p[d++], p[d++]);
      return c;
    }
    h = a.length;
    let f = n;
    for (d = 0; d < h; ) {
      const p = a[d++],
        y = a[d++];
      try {
        f = p(f);
      } catch (w) {
        y.call(this, w);
        break;
      }
    }
    try {
      c = hf.call(this, f);
    } catch (p) {
      return Promise.reject(p);
    }
    for (d = 0, h = u.length; d < h; ) c = c.then(u[d++], u[d++]);
    return c;
  }
  getUri(t) {
    t = Ki(this.defaults, t);
    const n = E0(t.baseURL, t.url);
    return S0(n, t.params, t.paramsSerializer);
  }
}
E.forEach(["delete", "get", "head", "options"], function (t) {
  oa.prototype[t] = function (n, i) {
    return this.request(
      Ki(i || {}, { method: t, url: n, data: (i || {}).data })
    );
  };
});
E.forEach(["post", "put", "patch"], function (t) {
  function n(i) {
    return function (s, o, a) {
      return this.request(
        Ki(a || {}, {
          method: t,
          headers: i ? { "Content-Type": "multipart/form-data" } : {},
          url: s,
          data: o,
        })
      );
    };
  }
  (oa.prototype[t] = n()), (oa.prototype[t + "Form"] = n(!0));
});
const ko = oa;
class xd {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (s) {
      n = s;
    });
    const i = this;
    this.promise.then((r) => {
      if (!i._listeners) return;
      let s = i._listeners.length;
      for (; s-- > 0; ) i._listeners[s](r);
      i._listeners = null;
    }),
      (this.promise.then = (r) => {
        let s;
        const o = new Promise((a) => {
          i.subscribe(a), (s = a);
        }).then(r);
        return (
          (o.cancel = function () {
            i.unsubscribe(s);
          }),
          o
        );
      }),
      t(function (s, o, a) {
        i.reason || ((i.reason = new Ss(s, o, a)), n(i.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new xd(function (r) {
        t = r;
      }),
      cancel: t,
    };
  }
}
const sS = xd;
function oS(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function aS(e) {
  return E.isObject(e) && e.isAxiosError === !0;
}
const Uu = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Uu).forEach(([e, t]) => {
  Uu[t] = e;
});
const lS = Uu;
function O0(e) {
  const t = new ko(e),
    n = c0(ko.prototype.request, t);
  return (
    E.extend(n, ko.prototype, t, { allOwnKeys: !0 }),
    E.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (r) {
      return O0(Ki(e, r));
    }),
    n
  );
}
const Y = O0(yd);
Y.Axios = ko;
Y.CanceledError = Ss;
Y.CancelToken = sS;
Y.isCancel = T0;
Y.VERSION = M0;
Y.toFormData = Xa;
Y.AxiosError = V;
Y.Cancel = Y.CanceledError;
Y.all = function (t) {
  return Promise.all(t);
};
Y.spread = oS;
Y.isAxiosError = aS;
Y.mergeConfig = Ki;
Y.AxiosHeaders = Zt;
Y.formToJSON = (e) => C0(E.isHTMLForm(e) ? new FormData(e) : e);
Y.getAdapter = P0.getAdapter;
Y.HttpStatusCode = lS;
Y.default = Y;
const uS = () => {
    const [e, t] = b.useState([]);
    return (
      b.useEffect(() => {
        (async () => {
          const { data: i } = await Y.get(
            `${window.location.origin}/api/v1/user/authors`,
            { withCredentials: !0 }
          );
          t(i.authors);
        })();
      }, []),
      g.jsxs("section", {
        className: "popularAuthors",
        children: [
          g.jsx("h3", { children: "Popular Authors" }),
          g.jsx("div", {
            className: "container",
            children:
              e && e.length > 0
                ? e
                    .slice(0, 4)
                    .map((n) =>
                      g.jsxs(
                        "div",
                        {
                          className: "card",
                          children: [
                            g.jsx("img", { src: n.avatar.url, alt: "author" }),
                            g.jsx("p", { children: n.name }),
                            g.jsx("p", { children: n.role }),
                          ],
                        },
                        n._id
                      )
                    )
                : g.jsx(Ba, { color: "gray", size: 30 }),
          }),
        ],
      })
    );
  },
  cS = () => {
    const { mode: e, blogs: t } = b.useContext(Ne),
      n = t.slice(0, 6);
    return g.jsx(g.Fragment, {
      children: g.jsxs("article", {
        className: e === "dark" ? "dark-bg" : "light-bg",
        children: [
          g.jsx(sw, {}),
          g.jsx(Yw, {}),
          g.jsx(i0, { heading: "Latest Blogs", blogs: n }),
          g.jsx(uS, {}),
        ],
      }),
    });
  },
  dS = () => {
    const { mode: e } = b.useContext(Ne);
    return g.jsx("article", {
      className: e === "dark" ? "dark-bg about" : "light-bg about",
      children: g.jsxs("div", {
        className: "container",
        children: [
          g.jsx("h2", { children: "About" }),
          g.jsx("p", {
            children:
              "Welcome to Zeta Blog, the ultimate platform for passionate writers and avid readers. Zeta Blog allows users to seamlessly post their thoughts, ideas, and stories, creating a vibrant community of authors and readers. Whether you're an aspiring author looking to share your work or a reader searching for diverse content, Zeta Blog has something for everyone. Our user-friendly interface makes it easy to publish articles, engage with others, and explore a wide range of topics. Join Zeta Blog today and become part of a dynamic network where creativity meets curiosity.",
          }),
          g.jsx("p", {}),
          g.jsx("p", {}),
        ],
      }),
    });
  },
  hS = () => {
    const { mode: e, blogs: t } = b.useContext(Ne);
    return g.jsx("article", {
      className: e === "dark" ? "dark-bg" : "light-bg",
      children: g.jsx(i0, { blogs: t, title: "Blogs" }),
    });
  };
let fS = { data: "" },
  pS = (e) =>
    typeof window == "object"
      ? (
          (e ? e.querySelector("#_goober") : window._goober) ||
          Object.assign(
            (e || document.head).appendChild(document.createElement("style")),
            { innerHTML: " ", id: "_goober" }
          )
        ).firstChild
      : e || fS,
  gS = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  mS = /\/\*[^]*?\*\/|  +/g,
  gf = /\n+/g,
  mn = (e, t) => {
    let n = "",
      i = "",
      r = "";
    for (let s in e) {
      let o = e[s];
      s[0] == "@"
        ? s[1] == "i"
          ? (n = s + " " + o + ";")
          : (i +=
              s[1] == "f"
                ? mn(o, s)
                : s + "{" + mn(o, s[1] == "k" ? "" : t) + "}")
        : typeof o == "object"
        ? (i += mn(
            o,
            t
              ? t.replace(/([^,])+/g, (a) =>
                  s.replace(/(^:.*)|([^,])+/g, (l) =>
                    /&/.test(l) ? l.replace(/&/g, a) : a ? a + " " + l : l
                  )
                )
              : s
          ))
        : o != null &&
          ((s = /^--/.test(s) ? s : s.replace(/[A-Z]/g, "-$&").toLowerCase()),
          (r += mn.p ? mn.p(s, o) : s + ":" + o + ";"));
    }
    return n + (t && r ? t + "{" + r + "}" : r) + i;
  },
  $t = {},
  R0 = (e) => {
    if (typeof e == "object") {
      let t = "";
      for (let n in e) t += n + R0(e[n]);
      return t;
    }
    return e;
  },
  yS = (e, t, n, i, r) => {
    let s = R0(e),
      o =
        $t[s] ||
        ($t[s] = ((l) => {
          let u = 0,
            c = 11;
          for (; u < l.length; ) c = (101 * c + l.charCodeAt(u++)) >>> 0;
          return "go" + c;
        })(s));
    if (!$t[o]) {
      let l =
        s !== e
          ? e
          : ((u) => {
              let c,
                d,
                h = [{}];
              for (; (c = gS.exec(u.replace(mS, ""))); )
                c[4]
                  ? h.shift()
                  : c[3]
                  ? ((d = c[3].replace(gf, " ").trim()),
                    h.unshift((h[0][d] = h[0][d] || {})))
                  : (h[0][c[1]] = c[2].replace(gf, " ").trim());
              return h[0];
            })(e);
      $t[o] = mn(r ? { ["@keyframes " + o]: l } : l, n ? "" : "." + o);
    }
    let a = n && $t.g ? $t.g : null;
    return (
      n && ($t.g = $t[o]),
      ((l, u, c, d) => {
        d
          ? (u.data = u.data.replace(d, l))
          : u.data.indexOf(l) === -1 && (u.data = c ? l + u.data : u.data + l);
      })($t[o], t, i, a),
      o
    );
  },
  vS = (e, t, n) =>
    e.reduce((i, r, s) => {
      let o = t[s];
      if (o && o.call) {
        let a = o(n),
          l = (a && a.props && a.props.className) || (/^go/.test(a) && a);
        o = l
          ? "." + l
          : a && typeof a == "object"
          ? a.props
            ? ""
            : mn(a, "")
          : a === !1
          ? ""
          : a;
      }
      return i + r + (o ?? "");
    }, "");
function Ga(e) {
  let t = this || {},
    n = e.call ? e(t.p) : e;
  return yS(
    n.unshift
      ? n.raw
        ? vS(n, [].slice.call(arguments, 1), t.p)
        : n.reduce((i, r) => Object.assign(i, r && r.call ? r(t.p) : r), {})
      : n,
    pS(t.target),
    t.g,
    t.o,
    t.k
  );
}
let j0, Vu, Yu;
Ga.bind({ g: 1 });
let sn = Ga.bind({ k: 1 });
function xS(e, t, n, i) {
  (mn.p = t), (j0 = e), (Vu = n), (Yu = i);
}
function zn(e, t) {
  let n = this || {};
  return function () {
    let i = arguments;
    function r(s, o) {
      let a = Object.assign({}, s),
        l = a.className || r.className;
      (n.p = Object.assign({ theme: Vu && Vu() }, a)),
        (n.o = / *go\d+/.test(l)),
        (a.className = Ga.apply(n, i) + (l ? " " + l : "")),
        t && (a.ref = o);
      let u = e;
      return (
        e[0] && ((u = a.as || e), delete a.as), Yu && u[0] && Yu(a), j0(u, a)
      );
    }
    return t ? t(r) : r;
  };
}
var wS = (e) => typeof e == "function",
  aa = (e, t) => (wS(e) ? e(t) : e),
  _S = (() => {
    let e = 0;
    return () => (++e).toString();
  })(),
  L0 = (() => {
    let e;
    return () => {
      if (e === void 0 && typeof window < "u") {
        let t = matchMedia("(prefers-reduced-motion: reduce)");
        e = !t || t.matches;
      }
      return e;
    };
  })(),
  SS = 20,
  Co = new Map(),
  bS = 1e3,
  mf = (e) => {
    if (Co.has(e)) return;
    let t = setTimeout(() => {
      Co.delete(e), fi({ type: 4, toastId: e });
    }, bS);
    Co.set(e, t);
  },
  kS = (e) => {
    let t = Co.get(e);
    t && clearTimeout(t);
  },
  Xu = (e, t) => {
    switch (t.type) {
      case 0:
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, SS) };
      case 1:
        return (
          t.toast.id && kS(t.toast.id),
          {
            ...e,
            toasts: e.toasts.map((s) =>
              s.id === t.toast.id ? { ...s, ...t.toast } : s
            ),
          }
        );
      case 2:
        let { toast: n } = t;
        return e.toasts.find((s) => s.id === n.id)
          ? Xu(e, { type: 1, toast: n })
          : Xu(e, { type: 0, toast: n });
      case 3:
        let { toastId: i } = t;
        return (
          i
            ? mf(i)
            : e.toasts.forEach((s) => {
                mf(s.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((s) =>
              s.id === i || i === void 0 ? { ...s, visible: !1 } : s
            ),
          }
        );
      case 4:
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((s) => s.id !== t.toastId) };
      case 5:
        return { ...e, pausedAt: t.time };
      case 6:
        let r = t.time - (e.pausedAt || 0);
        return {
          ...e,
          pausedAt: void 0,
          toasts: e.toasts.map((s) => ({
            ...s,
            pauseDuration: s.pauseDuration + r,
          })),
        };
    }
  },
  To = [],
  Eo = { toasts: [], pausedAt: void 0 },
  fi = (e) => {
    (Eo = Xu(Eo, e)),
      To.forEach((t) => {
        t(Eo);
      });
  },
  CS = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  TS = (e = {}) => {
    let [t, n] = b.useState(Eo);
    b.useEffect(
      () => (
        To.push(n),
        () => {
          let r = To.indexOf(n);
          r > -1 && To.splice(r, 1);
        }
      ),
      [t]
    );
    let i = t.toasts.map((r) => {
      var s, o;
      return {
        ...e,
        ...e[r.type],
        ...r,
        duration:
          r.duration ||
          ((s = e[r.type]) == null ? void 0 : s.duration) ||
          (e == null ? void 0 : e.duration) ||
          CS[r.type],
        style: {
          ...e.style,
          ...((o = e[r.type]) == null ? void 0 : o.style),
          ...r.style,
        },
      };
    });
    return { ...t, toasts: i };
  },
  ES = (e, t = "blank", n) => ({
    createdAt: Date.now(),
    visible: !0,
    type: t,
    ariaProps: { role: "status", "aria-live": "polite" },
    message: e,
    pauseDuration: 0,
    ...n,
    id: (n == null ? void 0 : n.id) || _S(),
  }),
  bs = (e) => (t, n) => {
    let i = ES(t, e, n);
    return fi({ type: 2, toast: i }), i.id;
  },
  ot = (e, t) => bs("blank")(e, t);
ot.error = bs("error");
ot.success = bs("success");
ot.loading = bs("loading");
ot.custom = bs("custom");
ot.dismiss = (e) => {
  fi({ type: 3, toastId: e });
};
ot.remove = (e) => fi({ type: 4, toastId: e });
ot.promise = (e, t, n) => {
  let i = ot.loading(t.loading, { ...n, ...(n == null ? void 0 : n.loading) });
  return (
    e
      .then(
        (r) => (
          ot.success(aa(t.success, r), {
            id: i,
            ...n,
            ...(n == null ? void 0 : n.success),
          }),
          r
        )
      )
      .catch((r) => {
        ot.error(aa(t.error, r), {
          id: i,
          ...n,
          ...(n == null ? void 0 : n.error),
        });
      }),
    e
  );
};
var PS = (e, t) => {
    fi({ type: 1, toast: { id: e, height: t } });
  },
  MS = () => {
    fi({ type: 5, time: Date.now() });
  },
  OS = (e) => {
    let { toasts: t, pausedAt: n } = TS(e);
    b.useEffect(() => {
      if (n) return;
      let s = Date.now(),
        o = t.map((a) => {
          if (a.duration === 1 / 0) return;
          let l = (a.duration || 0) + a.pauseDuration - (s - a.createdAt);
          if (l < 0) {
            a.visible && ot.dismiss(a.id);
            return;
          }
          return setTimeout(() => ot.dismiss(a.id), l);
        });
      return () => {
        o.forEach((a) => a && clearTimeout(a));
      };
    }, [t, n]);
    let i = b.useCallback(() => {
        n && fi({ type: 6, time: Date.now() });
      }, [n]),
      r = b.useCallback(
        (s, o) => {
          let {
              reverseOrder: a = !1,
              gutter: l = 8,
              defaultPosition: u,
            } = o || {},
            c = t.filter(
              (f) => (f.position || u) === (s.position || u) && f.height
            ),
            d = c.findIndex((f) => f.id === s.id),
            h = c.filter((f, p) => p < d && f.visible).length;
          return c
            .filter((f) => f.visible)
            .slice(...(a ? [h + 1] : [0, h]))
            .reduce((f, p) => f + (p.height || 0) + l, 0);
        },
        [t]
      );
    return {
      toasts: t,
      handlers: {
        updateHeight: PS,
        startPause: MS,
        endPause: i,
        calculateOffset: r,
      },
    };
  },
  RS = sn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  jS = sn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  LS = sn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  AS = zn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${RS} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${jS} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${LS} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  DS = sn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  IS = zn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${DS} 1s linear infinite;
`,
  NS = sn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  FS = sn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
  zS = zn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${NS} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${FS} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
  BS = zn("div")`
  position: absolute;
`,
  WS = zn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  $S = sn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  HS = zn("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${$S} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  US = ({ toast: e }) => {
    let { icon: t, type: n, iconTheme: i } = e;
    return t !== void 0
      ? typeof t == "string"
        ? b.createElement(HS, null, t)
        : t
      : n === "blank"
      ? null
      : b.createElement(
          WS,
          null,
          b.createElement(IS, { ...i }),
          n !== "loading" &&
            b.createElement(
              BS,
              null,
              n === "error"
                ? b.createElement(AS, { ...i })
                : b.createElement(zS, { ...i })
            )
        );
  },
  VS = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  YS = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`,
  XS = "0%{opacity:0;} 100%{opacity:1;}",
  KS = "0%{opacity:1;} 100%{opacity:0;}",
  GS = zn("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
  QS = zn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  qS = (e, t) => {
    let n = e.includes("top") ? 1 : -1,
      [i, r] = L0() ? [XS, KS] : [VS(n), YS(n)];
    return {
      animation: t
        ? `${sn(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${sn(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
    };
  },
  JS = b.memo(({ toast: e, position: t, style: n, children: i }) => {
    let r = e.height
        ? qS(e.position || t || "top-center", e.visible)
        : { opacity: 0 },
      s = b.createElement(US, { toast: e }),
      o = b.createElement(QS, { ...e.ariaProps }, aa(e.message, e));
    return b.createElement(
      GS,
      { className: e.className, style: { ...r, ...n, ...e.style } },
      typeof i == "function"
        ? i({ icon: s, message: o })
        : b.createElement(b.Fragment, null, s, o)
    );
  });
xS(b.createElement);
var ZS = ({
    id: e,
    className: t,
    style: n,
    onHeightUpdate: i,
    children: r,
  }) => {
    let s = b.useCallback(
      (o) => {
        if (o) {
          let a = () => {
            let l = o.getBoundingClientRect().height;
            i(e, l);
          };
          a(),
            new MutationObserver(a).observe(o, {
              subtree: !0,
              childList: !0,
              characterData: !0,
            });
        }
      },
      [e, i]
    );
    return b.createElement("div", { ref: s, className: t, style: n }, r);
  },
  eb = (e, t) => {
    let n = e.includes("top"),
      i = n ? { top: 0 } : { bottom: 0 },
      r = e.includes("center")
        ? { justifyContent: "center" }
        : e.includes("right")
        ? { justifyContent: "flex-end" }
        : {};
    return {
      left: 0,
      right: 0,
      display: "flex",
      position: "absolute",
      transition: L0() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
      transform: `translateY(${t * (n ? 1 : -1)}px)`,
      ...i,
      ...r,
    };
  },
  tb = Ga`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  Ys = 16,
  nb = ({
    reverseOrder: e,
    position: t = "top-center",
    toastOptions: n,
    gutter: i,
    children: r,
    containerStyle: s,
    containerClassName: o,
  }) => {
    let { toasts: a, handlers: l } = OS(n);
    return b.createElement(
      "div",
      {
        style: {
          position: "fixed",
          zIndex: 9999,
          top: Ys,
          left: Ys,
          right: Ys,
          bottom: Ys,
          pointerEvents: "none",
          ...s,
        },
        className: o,
        onMouseEnter: l.startPause,
        onMouseLeave: l.endPause,
      },
      a.map((u) => {
        let c = u.position || t,
          d = l.calculateOffset(u, {
            reverseOrder: e,
            gutter: i,
            defaultPosition: t,
          }),
          h = eb(c, d);
        return b.createElement(
          ZS,
          {
            id: u.id,
            key: u.id,
            onHeightUpdate: l.updateHeight,
            className: u.visible ? tb : "",
            style: h,
          },
          u.type === "custom"
            ? aa(u.message, u)
            : r
            ? r(u)
            : b.createElement(JS, { toast: u, position: c })
        );
      })
    );
  },
  Ye = ot;
const ib = () => {
  const { mode: e, user: t, isAuthenticated: n } = b.useContext(Ne),
    { id: i } = Zm(),
    [r, s] = b.useState({});
  return (
    b.useEffect(() => {
      (async () => {
        if (n)
          try {
            const { data: a } = await Y.get(
              `${window.location.origin}/api/v1/blog/singleblog/${i}`,
              { withCredentials: !0 }
            );
            s(a.blog);
          } catch (a) {
            s({}), console.log(a);
          }
        else Ye.error("Please log in to view this blog.", {});
      })();
    }, []),
    n
      ? g.jsx("article", {
          className:
            e === "dark" ? "dark-bg singleBlog" : "light-bg singleBlog",
          children:
            r &&
            g.jsxs("section", {
              className: "container",
              children: [
                g.jsx("div", { className: "category", children: r.category }),
                g.jsx("h1", { children: r.title }),
                g.jsx("div", {
                  className: "writer_section",
                  children: g.jsxs("div", {
                    className: "author",
                    children: [
                      g.jsx("img", {
                        src: r.authorAvatar,
                        alt: "author_avatar",
                      }),
                      g.jsx("p", { children: r.authorName }),
                    ],
                  }),
                }),
                r &&
                  r.mainImage &&
                  g.jsx("img", {
                    src: r.mainImage.url,
                    alt: "mainBlogImg",
                    className: "mainImg",
                  }),
                g.jsx("p", { className: "intro-text", children: r.intro }),
                g.jsxs("div", {
                  className: "sub-para",
                  children: [
                    g.jsx("h3", { children: r.paraOneTitle }),
                    r &&
                      r.paraOneImage &&
                      g.jsx("img", {
                        src: r.paraOneImage.url,
                        alt: "paraOneImg",
                      }),
                    g.jsx("p", { children: r.paraOneDescription }),
                  ],
                }),
                g.jsxs("div", {
                  className: "sub-para",
                  children: [
                    g.jsx("h3", { children: r.paraTwoTitle }),
                    r &&
                      r.paraTwoImage &&
                      g.jsx("img", {
                        src: r.paraTwoImage.url,
                        alt: "paraOneImg",
                      }),
                    g.jsx("p", { children: r.paraThreeDescription }),
                  ],
                }),
                g.jsxs("div", {
                  className: "sub-para",
                  children: [
                    g.jsx("h3", { children: r.paraThreeTitle }),
                    g.jsx("p", { children: r.paraThreeDescription }),
                    r &&
                      r.paraThreeImage &&
                      g.jsx("img", {
                        src: r.paraThreeImage.url,
                        alt: "paraOneImg",
                      }),
                  ],
                }),
              ],
            }),
        })
      : g.jsx(za, { to: "/" })
  );
};
var A0 = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  yf = Tt.createContext && Tt.createContext(A0),
  rb = ["attr", "size", "title"];
function sb(e, t) {
  if (e == null) return {};
  var n = ob(e, t),
    i,
    r;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++)
      (i = s[r]),
        !(t.indexOf(i) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, i) &&
          (n[i] = e[i]);
  }
  return n;
}
function ob(e, t) {
  if (e == null) return {};
  var n = {},
    i = Object.keys(e),
    r,
    s;
  for (s = 0; s < i.length; s++)
    (r = i[s]), !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function la() {
  return (
    (la = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
          }
          return e;
        }),
    la.apply(this, arguments)
  );
}
function vf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t &&
      (i = i.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })),
      n.push.apply(n, i);
  }
  return n;
}
function ua(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? vf(Object(n), !0).forEach(function (i) {
          ab(e, i, n[i]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : vf(Object(n)).forEach(function (i) {
          Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
        });
  }
  return e;
}
function ab(e, t, n) {
  return (
    (t = lb(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function lb(e) {
  var t = ub(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function ub(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(e, t || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function D0(e) {
  return (
    e &&
    e.map((t, n) =>
      Tt.createElement(t.tag, ua({ key: n }, t.attr), D0(t.child))
    )
  );
}
function pi(e) {
  return (t) =>
    Tt.createElement(cb, la({ attr: ua({}, e.attr) }, t), D0(e.child));
}
function cb(e) {
  var t = (n) => {
    var { attr: i, size: r, title: s } = e,
      o = sb(e, rb),
      a = r || n.size || "1em",
      l;
    return (
      n.className && (l = n.className),
      e.className && (l = (l ? l + " " : "") + e.className),
      Tt.createElement(
        "svg",
        la(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          i,
          o,
          {
            className: l,
            style: ua(ua({ color: e.color || n.color }, n.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        s && Tt.createElement("title", null, s),
        e.children
      )
    );
  };
  return yf !== void 0
    ? Tt.createElement(yf.Consumer, null, (n) => t(n))
    : t(A0);
}
function I0(e) {
  return pi({
    tag: "svg",
    attr: { viewBox: "0 0 15 15", fill: "none" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z",
          fill: "currentColor",
        },
        child: [],
      },
    ],
  })(e);
}
function N0(e) {
  return pi({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z",
        },
        child: [],
      },
    ],
  })(e);
}
function F0(e) {
  return pi({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "g",
        attr: { id: "Light" },
        child: [
          {
            tag: "g",
            attr: {},
            child: [
              {
                tag: "path",
                attr: {
                  d: "M12,18.09A6.09,6.09,0,1,1,18.09,12,6.1,6.1,0,0,1,12,18.09ZM12,6.91A5.09,5.09,0,1,0,17.09,12,5.1,5.1,0,0,0,12,6.91Z",
                },
                child: [],
              },
              {
                tag: "path",
                attr: {
                  d: "M11.5,2.568v1.6a.5.5,0,1,0,1,0v-1.6a.5.5,0,1,0-1,0Z",
                },
                child: [],
              },
              {
                tag: "path",
                attr: {
                  d: "M12.5,21.432v-1.6a.5.5,0,0,0-1,0v1.6a.5.5,0,1,0,1,0Z",
                },
                child: [],
              },
              {
                tag: "path",
                attr: {
                  d: "M21.432,11.5h-1.6a.5.5,0,0,0,0,1h1.6a.5.5,0,1,0,0-1Z",
                },
                child: [],
              },
              {
                tag: "path",
                attr: {
                  d: "M2.568,12.5h1.6a.5.5,0,1,0,0-1h-1.6a.5.5,0,1,0,0,1Z",
                },
                child: [],
              },
              {
                tag: "path",
                attr: {
                  d: "M18.316,4.977l-.992.992-.141.141a.514.514,0,0,0-.146.353.508.508,0,0,0,.146.354.5.5,0,0,0,.354.146.515.515,0,0,0,.353-.146l.992-.992.141-.141a.515.515,0,0,0,.147-.354.508.508,0,0,0-.147-.353.5.5,0,0,0-.353-.147.522.522,0,0,0-.354.147Z",
                },
                child: [],
              },
              {
                tag: "path",
                attr: {
                  d: "M5.684,19.023l.992-.992.141-.141a.514.514,0,0,0,.146-.353.508.508,0,0,0-.146-.354.5.5,0,0,0-.354-.146.515.515,0,0,0-.353.146l-.992.992-.141.141a.515.515,0,0,0-.147.354.508.508,0,0,0,.147.353.5.5,0,0,0,.353.147.522.522,0,0,0,.354-.147Z",
                },
                child: [],
              },
              {
                tag: "path",
                attr: {
                  d: "M19.023,18.316l-.992-.992-.141-.141a.514.514,0,0,0-.353-.146.508.508,0,0,0-.354.146.5.5,0,0,0-.146.354.515.515,0,0,0,.146.353l.992.992.141.141a.515.515,0,0,0,.354.147.508.508,0,0,0,.353-.147.5.5,0,0,0,.147-.353.522.522,0,0,0-.147-.354Z",
                },
                child: [],
              },
              {
                tag: "path",
                attr: {
                  d: "M4.977,5.684l.992.992.141.141a.514.514,0,0,0,.353.146.508.508,0,0,0,.354-.146.5.5,0,0,0,.146-.354.515.515,0,0,0-.146-.353l-.992-.992-.141-.141A.515.515,0,0,0,5.33,4.83a.508.508,0,0,0-.353.147.5.5,0,0,0-.147.353.522.522,0,0,0,.147.354Z",
                },
                child: [],
              },
            ],
          },
        ],
      },
    ],
  })(e);
}
const db = () => {
  const [e, t] = b.useState(!1),
    n = () => {
      t(!e);
    },
    i = hi(),
    {
      mode: r,
      setMode: s,
      isAuthenticated: o,
      user: a,
      setIsAuthenticated: l,
    } = b.useContext(Ne),
    u = ir(),
    c = async (d) => {
      d.preventDefault();
      try {
        const { data: h } = await Y.get(
          `${window.location.origin}/api/v1/user/logout`,
          { withCredentials: !0 }
        );
        l(!1), Ye.success(h.message), u("/");
      } catch (h) {
        Ye.error(h.response.data.message);
      }
    };
  return g.jsx("section", {
    className:
      i.pathname === "/dashboard"
        ? "hideNavbar"
        : r === "light"
        ? "header light-navbar"
        : "header dark-navbar",
    children: g.jsxs("nav", {
      children: [
        g.jsxs("div", {
          className: "logo",
          children: ["Zeta", g.jsx("span", { children: "Blog" })],
        }),
        g.jsxs("div", {
          className: e ? "links show" : "links",
          children: [
            g.jsxs("ul", {
              children: [
                g.jsx("li", {
                  children: g.jsx(Te, {
                    to: "/",
                    onClick: n,
                    children: "HOME",
                  }),
                }),
                g.jsx("li", {
                  children: g.jsx(Te, {
                    to: "/blogs",
                    onClick: n,
                    children: "BLOGS",
                  }),
                }),
                g.jsx("li", {
                  children: g.jsx(Te, {
                    to: "/authors",
                    onClick: n,
                    children: "ALL AUTHORS",
                  }),
                }),
                g.jsx("li", {
                  children: g.jsx(Te, {
                    to: "/about",
                    onClick: n,
                    children: "ABOUT",
                  }),
                }),
              ],
            }),
            g.jsxs("div", {
              className: "btns",
              children: [
                g.jsx("button", {
                  onClick: () => s(r === "light" ? "dark" : "light"),
                  className:
                    r === "light"
                      ? "mode-btn light-mode"
                      : "mode-btn dark-mode",
                  children:
                    r === "light"
                      ? g.jsx(F0, { className: "light-icon" })
                      : g.jsx(N0, { className: "dark-icon" }),
                }),
                o && a.role === "Author"
                  ? g.jsx(Te, {
                      to: "/dashboard",
                      onClick: n,
                      className: "dashboard-btn",
                      children: "DASHBOARD",
                    })
                  : "",
                o
                  ? g.jsx("div", {
                      children: g.jsx("button", {
                        className: "logout-btn",
                        onClick: c,
                        children: "LOGOUT",
                      }),
                    })
                  : g.jsx(Te, {
                      to: "/login",
                      onClick: n,
                      className: "login-btn",
                      children: "LOGIN",
                    }),
              ],
            }),
          ],
        }),
        g.jsx(I0, { className: "hamburger", onClick: n }),
      ],
    }),
  });
};
function hb(e) {
  return pi({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z",
        },
        child: [],
      },
    ],
  })(e);
}
function fb(e) {
  return pi({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z",
        },
        child: [],
      },
    ],
  })(e);
}
function pb(e) {
  return pi({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M100.59 334.24c48.57 3.31 58.95 2.11 58.95 11.94 0 20-65.55 20.06-65.55 1.52.01-5.09 3.29-9.4 6.6-13.46zm27.95-116.64c-32.29 0-33.75 44.47-.75 44.47 32.51 0 31.71-44.47.75-44.47zM448 80v352a48 48 0 0 1-48 48H48a48 48 0 0 1-48-48V80a48 48 0 0 1 48-48h352a48 48 0 0 1 48 48zm-227 69.31c0 14.49 8.38 22.88 22.86 22.88 14.74 0 23.13-8.39 23.13-22.88S258.62 127 243.88 127c-14.48 0-22.88 7.84-22.88 22.31zM199.18 195h-49.55c-25-6.55-81.56-4.85-81.56 46.75 0 18.8 9.4 32 21.85 38.11C74.23 294.23 66.8 301 66.8 310.6c0 6.87 2.79 13.22 11.18 16.76-8.9 8.4-14 14.48-14 25.92C64 373.35 81.53 385 127.52 385c44.22 0 69.87-16.51 69.87-45.73 0-36.67-28.23-35.32-94.77-39.38l8.38-13.43c17 4.74 74.19 6.23 74.19-42.43 0-11.69-4.83-19.82-9.4-25.67l23.38-1.78zm84.34 109.84l-13-1.78c-3.82-.51-4.07-1-4.07-5.09V192.52h-52.6l-2.79 20.57c15.75 5.55 17 4.86 17 10.17V298c0 5.62-.31 4.58-17 6.87v20.06h72.42zM384 315l-6.87-22.37c-40.93 15.37-37.85-12.41-37.85-16.73v-60.72h37.85v-25.41h-35.82c-2.87 0-2 2.52-2-38.63h-24.18c-2.79 27.7-11.68 38.88-34 41.42v22.62c20.47 0 19.82-.85 19.82 2.54v66.57c0 28.72 11.43 40.91 41.67 40.91 14.45 0 30.45-4.83 41.38-10.2z",
        },
        child: [],
      },
    ],
  })(e);
}
const gb = () => {
  const e = hi(),
    { mode: t, setMode: n } = b.useContext(Ne);
  return g.jsxs("footer", {
    className:
      e.pathname === "/dashboard"
        ? "hideFooter"
        : t === "light"
        ? "light-footer"
        : "dark-footer",
    children: [
      g.jsxs("div", {
        className: "container",
        children: [
          g.jsxs("div", {
            className: "about",
            children: [
              g.jsx("h3", { children: "About" }),
              g.jsx("p", {
                children:
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur possimus sed praesentium! Et sunt, distinctio veniam ullam, nesciunt ex laudantium quidem error sint, eum explicabo.",
              }),
              g.jsxs("p", {
                children: [
                  g.jsx("span", { children: "Email:" }),
                  "zk@gmail.com",
                ],
              }),
              g.jsxs("p", {
                children: [g.jsx("span", { children: "Phone:" }), "0123987123"],
              }),
            ],
          }),
          g.jsxs("div", {
            className: "quick_links",
            children: [
              g.jsx("h3", { children: "Quick Links" }),
              g.jsxs("ul", {
                children: [
                  g.jsx(Te, { to: "/", children: "Home" }),
                  g.jsx(Te, { to: "/blogs", children: "Blogs" }),
                  g.jsx(Te, { to: "/about", children: "About" }),
                  g.jsx(Te, { to: "/dashboard", children: "Dashboard" }),
                ],
              }),
            ],
          }),
          g.jsxs("div", {
            className: "categories",
            children: [
              g.jsx("h3", { children: "Categories" }),
              g.jsxs("ul", {
                children: [
                  g.jsx("li", { children: "Lifestyle" }),
                  g.jsx("li", { children: "Technology" }),
                  g.jsx("li", { children: "Sports" }),
                  g.jsx("li", { children: "Travel" }),
                  g.jsx("li", { children: "Business" }),
                  g.jsx("li", { children: "Economy" }),
                ],
              }),
            ],
          }),
          g.jsxs("div", {
            className: "news_letter",
            children: [
              g.jsxs("div", {
                children: [
                  g.jsx("h3", { children: "Weekly Newletter" }),
                  g.jsx("p", {
                    children: "Get blog articles and offer via email",
                  }),
                ],
              }),
              g.jsxs("div", {
                children: [
                  g.jsx("input", { type: "text", placeholder: "Your Email" }),
                  g.jsx("button", { children: "Subscribe" }),
                ],
              }),
            ],
          }),
        ],
      }),
      g.jsxs("div", {
        className: "container",
        children: [
          g.jsxs("div", {
            className: "logo",
            children: ["ZETA ", g.jsx("span", { children: "BLOG" })],
          }),
          g.jsxs("div", {
            className: "links",
            children: [
              g.jsx(Te, { to: "/", target: "_blank", children: g.jsx(hb, {}) }),
              g.jsx(Te, { to: "/", target: "_blank", children: g.jsx(pb, {}) }),
              g.jsx(Te, { to: "/", target: "_blank", children: g.jsx(fb, {}) }),
            ],
          }),
        ],
      }),
    ],
  });
};
function mb(e) {
  return pi({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z",
        },
        child: [],
      },
    ],
  })(e);
}
const yb = ({ setComponent: e }) => {
    const [t, n] = b.useState(!1),
      {
        mode: i,
        setMode: r,
        setIsAuthenticated: s,
        user: o,
      } = b.useContext(Ne),
      a = ir(),
      l = async (d) => {
        d.preventDefault();
        try {
          const { data: h } = await Y.get(
            `${window.location.origin}/api/v1/user/logout`,
            { withCredentials: !0 }
          );
          s(!1), Ye.success(h.message), a("/");
        } catch (h) {
          Ye.error(h.response.data.message);
        }
      },
      u = () => {
        a("/");
      },
      c = (d) => {
        e(d);
      };
    return g.jsxs(g.Fragment, {
      children: [
        g.jsx("div", {
          className: "icon-wrapper",
          onClick: () => n(!t),
          children: g.jsx(I0, {}),
        }),
        g.jsxs("section", {
          className: t ? "show-sidebar sidebar" : "sidebar",
          children: [
            g.jsx("div", {
              className: "icon-wrapper-arrow",
              onClick: () => n(!t),
              children: g.jsx(mb, {}),
            }),
            g.jsxs("div", {
              className: "user-detail",
              children: [
                g.jsx("img", { src: o && o.avatar.url, alt: "avatar" }),
                g.jsx("p", { children: o.name }),
              ],
            }),
            g.jsxs("ul", {
              children: [
                g.jsx("button", {
                  onClick: () => c("My Blogs"),
                  children: "MY BLOGS",
                }),
                g.jsx("button", {
                  onClick: () => c("Create Blog"),
                  children: "CREATE BLOG",
                }),
                g.jsx("button", {
                  onClick: () => c("Analytics"),
                  children: "CHART",
                }),
                g.jsx("button", {
                  onClick: () => c("My Profile"),
                  children: "MY PROFILE",
                }),
                g.jsx("button", { onClick: u, children: "HOME" }),
                g.jsx("button", { onClick: l, children: "LOGOUT" }),
                g.jsx("button", {
                  onClick: () => r(i === "light" ? "dark" : "light"),
                  className:
                    i === "light"
                      ? "mode-btn light-mode"
                      : "mode-btn dark-mode",
                  children:
                    i === "light"
                      ? g.jsx(F0, { className: "light-icon" })
                      : g.jsx(N0, { className: "dark-icon" }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  vb = () => {
    const [e, t] = b.useState([]);
    b.useEffect(() => {
      (async () => {
        const { data: r } = await Y.get(
          `${window.location.origin}/api/v1/blog/myblogs`,
          { withCredentials: !0 }
        );
        t(r.blogs);
      })();
    }, []);
    const n = async (i) => {
      await Y.delete(`http://localhost:4000/api/v1/blog/delete/${i}`, {
        withCredentials: !0,
      })
        .then((r) => {
          Ye.success(r.data.message), t((s) => s.filter((o) => o._id !== i));
        })
        .catch((r) => {
          Ye.error(r.response.data.message);
        });
    };
    return g.jsx(g.Fragment, {
      children: g.jsx("section", {
        className: "my-blogs",
        children:
          e && e.length > 0
            ? e.map((i) =>
                g.jsxs(
                  "div",
                  {
                    className: "author-blog-card",
                    children: [
                      i.mainImage &&
                        i.mainImage &&
                        g.jsx("img", { src: i.mainImage.url, alt: "blogImg" }),
                      g.jsx("span", {
                        className: "category",
                        children: i.category,
                      }),
                      g.jsx("h4", { children: i.title }),
                      g.jsxs("div", {
                        className: "btn-wrapper",
                        children: [
                          g.jsx(Te, {
                            to: `/blog/update/${i._id}`,
                            className: "update-btn",
                            children: "UPDATE",
                          }),
                          g.jsx("button", {
                            className: "delete-btn",
                            onClick: () => n(i._id),
                            children: "DELETE",
                          }),
                        ],
                      }),
                    ],
                  },
                  i._id
                )
              )
            : "You have not posted any blog!",
      }),
    });
  },
  xb = () => {
    const { user: e } = b.useContext(Ne);
    return g.jsxs("section", {
      className: "profile",
      children: [
        g.jsx("div", {
          className: "avatar",
          children: g.jsx("img", { src: "/pic.jpg", alt: "avatar" }),
        }),
        g.jsxs("div", {
          className: "user-detail",
          children: [
            g.jsxs("p", {
              children: ["Name: ", g.jsx("span", { children: e.name })],
            }),
            g.jsxs("p", {
              children: ["Email: ", g.jsx("span", { children: e.email })],
            }),
            g.jsxs("p", {
              children: ["Phone: ", g.jsx("span", { children: e.phone })],
            }),
            g.jsxs("p", {
              children: ["Role: ", g.jsx("span", { children: e.role })],
            }),
          ],
        }),
      ],
    });
  },
  wb = () => {
    const [e, t] = b.useState(""),
      [n, i] = b.useState(""),
      [r, s] = b.useState(""),
      [o, a] = b.useState(""),
      [l, u] = b.useState(""),
      [c, d] = b.useState(""),
      [h, f] = b.useState(""),
      [p, y] = b.useState(""),
      [w, m] = b.useState(""),
      [v, x] = b.useState(""),
      [_, S] = b.useState(""),
      [k, C] = b.useState(""),
      [T, R] = b.useState(""),
      [O, D] = b.useState(""),
      [z, J] = b.useState(""),
      [ye, H] = b.useState(""),
      [X, Q] = b.useState(""),
      [M, L] = b.useState(!0),
      F = (W) => {
        const B = W.target.files[0],
          I = new FileReader();
        I.readAsDataURL(B),
          (I.onload = () => {
            R(I.result), i(B);
          });
      },
      q = (W) => {
        const B = W.target.files[0],
          I = new FileReader();
        I.readAsDataURL(B),
          (I.onload = () => {
            D(I.result), u(B);
          });
      },
      Z = (W) => {
        const B = W.target.files[0],
          I = new FileReader();
        I.readAsDataURL(B),
          (I.onload = () => {
            J(I.result), y(B);
          });
      },
      Ge = (W) => {
        const B = W.target.files[0],
          I = new FileReader();
        I.readAsDataURL(B),
          (I.onload = () => {
            H(I.result), S(B);
          });
      },
      be = async (W) => {
        W.preventDefault();
        const B = new FormData();
        B.append("title", X),
          B.append("intro", r),
          B.append("mainImage", n),
          B.append("category", e),
          B.append("published", M),
          o.length > 0 && B.append("paraOneTitle", o),
          c.length > 0 && B.append("paraOneDescription", c),
          l && B.append("paraOneImage", l),
          h.length > 0 && B.append("paraTwoTitle", h),
          w.length > 0 && B.append("paraTwoDescription", w),
          p && B.append("paraTwoImage", p),
          v.length > 0 && B.append("paraThreeTitle", v),
          k.length > 0 && B.append("paraThreeDescription", k),
          _ && B.append("paraThreeImage", _);
        try {
          const { data: I } = await Y.post(
            `${window.location.origin}/api/v1/blog/post`,
            B,
            {
              withCredentials: !0,
              headers: { "Content-Type": "multipart/form-data" },
            }
          );
          Q(""),
            s(""),
            t(""),
            i(""),
            R(""),
            a(""),
            d(""),
            u(""),
            D(""),
            f(""),
            m(""),
            y(""),
            J(""),
            x(""),
            C(""),
            S(""),
            H(""),
            Ye.success(I.message);
        } catch (I) {
          Ye.error(I.response.data.message);
        }
      };
    return g.jsxs("section", {
      className: "create-blog",
      children: [
        g.jsx("h3", { children: "CREATE BLOG" }),
        g.jsx("div", {
          className: "container",
          children: g.jsxs("form", {
            onSubmit: be,
            children: [
              g.jsxs("div", {
                className: "category-box",
                children: [
                  g.jsx("label", { children: "Category" }),
                  g.jsxs("select", {
                    value: e,
                    onChange: (W) => t(W.target.value),
                    children: [
                      g.jsx("option", {
                        value: "",
                        children: "Select Blog Category",
                      }),
                      g.jsx("option", {
                        value: "Lifestyle",
                        children: "Lifestyle",
                      }),
                      g.jsx("option", {
                        value: "Technology",
                        children: "Technology",
                      }),
                      g.jsx("option", { value: "Sports", children: "Sports" }),
                      g.jsx("option", { value: "Travel", children: "Travel" }),
                      g.jsx("option", {
                        value: "Business",
                        children: "Business",
                      }),
                      g.jsx("option", {
                        value: "Economy",
                        children: "Economy",
                      }),
                    ],
                  }),
                ],
              }),
              g.jsx("input", {
                type: "text",
                placeholder: "BLOG MAIN TITLE",
                value: X,
                onChange: (W) => Q(W.target.value),
              }),
              g.jsxs("div", {
                style: { display: "flex", flexDirection: "column" },
                children: [
                  g.jsx("label", { children: "BLOG MAIN IMAGE" }),
                  g.jsx("img", {
                    src: T ? `${T}` : "/imgPL.webp",
                    alt: "mainImg",
                    className: "mainImg",
                  }),
                  g.jsx("input", {
                    type: "file",
                    onChange: F,
                    style: { border: "none" },
                  }),
                ],
              }),
              g.jsx("textarea", {
                rows: "25",
                className: "intro",
                placeholder:
                  "BLOG INTRO..... (Must contain at least 250 characters!)",
                value: r,
                onChange: (W) => s(W.target.value),
              }),
              g.jsxs("div", {
                className: "sub-para",
                children: [
                  g.jsx("input", {
                    type: "text",
                    placeholder: "Paragraph one title",
                    value: o,
                    onChange: (W) => a(W.target.value),
                  }),
                  g.jsx("img", {
                    src: O ? `${O}` : "/imgPL.webp",
                    alt: "subParaOneImg",
                  }),
                  g.jsx("input", {
                    type: "file",
                    onChange: q,
                    style: { border: "none" },
                  }),
                  g.jsx("textarea", {
                    rows: "10",
                    placeholder: "Blog First Sub Paragraph Comes Here...",
                    value: c,
                    onChange: (W) => d(W.target.value),
                  }),
                ],
              }),
              g.jsxs("div", {
                className: "sub-para",
                children: [
                  g.jsx("input", {
                    type: "text",
                    placeholder: "Paragraph two title",
                    value: h,
                    onChange: (W) => f(W.target.value),
                  }),
                  g.jsx("img", {
                    src: z ? `${z}` : "/imgPL.webp",
                    alt: "subParaTwoImg",
                  }),
                  g.jsx("input", {
                    type: "file",
                    onChange: Z,
                    style: { border: "none" },
                  }),
                  g.jsx("textarea", {
                    rows: "10",
                    placeholder: "Blog Second Sub Paragraph Comes Here...",
                    value: w,
                    onChange: (W) => m(W.target.value),
                  }),
                ],
              }),
              g.jsxs("div", {
                className: "sub-para",
                children: [
                  g.jsx("input", {
                    type: "text",
                    placeholder: "Paragraph three title",
                    value: v,
                    onChange: (W) => x(W.target.value),
                  }),
                  g.jsx("img", {
                    src: ye ? `${ye}` : "/imgPL.webp",
                    alt: "subParaThreeImg",
                  }),
                  g.jsx("input", {
                    type: "file",
                    onChange: Ge,
                    style: { border: "none" },
                  }),
                  g.jsx("textarea", {
                    rows: "10",
                    placeholder: "Blog Third Sub Paragraph Comes Here...",
                    value: k,
                    onChange: (W) => C(W.target.value),
                  }),
                ],
              }),
              g.jsxs("div", {
                className: "publish-box",
                children: [
                  g.jsx("label", { children: "Wants to publish now?" }),
                  g.jsxs("select", {
                    value: M,
                    onChange: (W) => L(W.target.value === "true"),
                    children: [
                      g.jsx("option", { value: !0, children: "Yes" }),
                      g.jsx("option", { value: !1, children: "No" }),
                    ],
                  }),
                ],
              }),
              g.jsx("button", {
                className: "create-btn",
                type: "submit",
                children: "POST BLOG",
              }),
            ],
          }),
        }),
      ],
    });
  };
/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */ function ks(e) {
  return (e + 0.5) | 0;
}
const wn = (e, t, n) => Math.max(Math.min(e, n), t);
function kr(e) {
  return wn(ks(e * 2.55), 0, 255);
}
function Rn(e) {
  return wn(ks(e * 255), 0, 255);
}
function Kt(e) {
  return wn(ks(e / 2.55) / 100, 0, 1);
}
function xf(e) {
  return wn(ks(e * 100), 0, 100);
}
const ht = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  },
  Ku = [..."0123456789ABCDEF"],
  _b = (e) => Ku[e & 15],
  Sb = (e) => Ku[(e & 240) >> 4] + Ku[e & 15],
  Xs = (e) => (e & 240) >> 4 === (e & 15),
  bb = (e) => Xs(e.r) && Xs(e.g) && Xs(e.b) && Xs(e.a);
function kb(e) {
  var t = e.length,
    n;
  return (
    e[0] === "#" &&
      (t === 4 || t === 5
        ? (n = {
            r: 255 & (ht[e[1]] * 17),
            g: 255 & (ht[e[2]] * 17),
            b: 255 & (ht[e[3]] * 17),
            a: t === 5 ? ht[e[4]] * 17 : 255,
          })
        : (t === 7 || t === 9) &&
          (n = {
            r: (ht[e[1]] << 4) | ht[e[2]],
            g: (ht[e[3]] << 4) | ht[e[4]],
            b: (ht[e[5]] << 4) | ht[e[6]],
            a: t === 9 ? (ht[e[7]] << 4) | ht[e[8]] : 255,
          })),
    n
  );
}
const Cb = (e, t) => (e < 255 ? t(e) : "");
function Tb(e) {
  var t = bb(e) ? _b : Sb;
  return e ? "#" + t(e.r) + t(e.g) + t(e.b) + Cb(e.a, t) : void 0;
}
const Eb =
  /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function z0(e, t, n) {
  const i = t * Math.min(n, 1 - n),
    r = (s, o = (s + e / 30) % 12) =>
      n - i * Math.max(Math.min(o - 3, 9 - o, 1), -1);
  return [r(0), r(8), r(4)];
}
function Pb(e, t, n) {
  const i = (r, s = (r + e / 60) % 6) =>
    n - n * t * Math.max(Math.min(s, 4 - s, 1), 0);
  return [i(5), i(3), i(1)];
}
function Mb(e, t, n) {
  const i = z0(e, 1, 0.5);
  let r;
  for (t + n > 1 && ((r = 1 / (t + n)), (t *= r), (n *= r)), r = 0; r < 3; r++)
    (i[r] *= 1 - t - n), (i[r] += t);
  return i;
}
function Ob(e, t, n, i, r) {
  return e === r
    ? (t - n) / i + (t < n ? 6 : 0)
    : t === r
    ? (n - e) / i + 2
    : (e - t) / i + 4;
}
function wd(e) {
  const n = e.r / 255,
    i = e.g / 255,
    r = e.b / 255,
    s = Math.max(n, i, r),
    o = Math.min(n, i, r),
    a = (s + o) / 2;
  let l, u, c;
  return (
    s !== o &&
      ((c = s - o),
      (u = a > 0.5 ? c / (2 - s - o) : c / (s + o)),
      (l = Ob(n, i, r, c, s)),
      (l = l * 60 + 0.5)),
    [l | 0, u || 0, a]
  );
}
function _d(e, t, n, i) {
  return (Array.isArray(t) ? e(t[0], t[1], t[2]) : e(t, n, i)).map(Rn);
}
function Sd(e, t, n) {
  return _d(z0, e, t, n);
}
function Rb(e, t, n) {
  return _d(Mb, e, t, n);
}
function jb(e, t, n) {
  return _d(Pb, e, t, n);
}
function B0(e) {
  return ((e % 360) + 360) % 360;
}
function Lb(e) {
  const t = Eb.exec(e);
  let n = 255,
    i;
  if (!t) return;
  t[5] !== i && (n = t[6] ? kr(+t[5]) : Rn(+t[5]));
  const r = B0(+t[2]),
    s = +t[3] / 100,
    o = +t[4] / 100;
  return (
    t[1] === "hwb"
      ? (i = Rb(r, s, o))
      : t[1] === "hsv"
      ? (i = jb(r, s, o))
      : (i = Sd(r, s, o)),
    { r: i[0], g: i[1], b: i[2], a: n }
  );
}
function Ab(e, t) {
  var n = wd(e);
  (n[0] = B0(n[0] + t)), (n = Sd(n)), (e.r = n[0]), (e.g = n[1]), (e.b = n[2]);
}
function Db(e) {
  if (!e) return;
  const t = wd(e),
    n = t[0],
    i = xf(t[1]),
    r = xf(t[2]);
  return e.a < 255
    ? `hsla(${n}, ${i}%, ${r}%, ${Kt(e.a)})`
    : `hsl(${n}, ${i}%, ${r}%)`;
}
const wf = {
    x: "dark",
    Z: "light",
    Y: "re",
    X: "blu",
    W: "gr",
    V: "medium",
    U: "slate",
    A: "ee",
    T: "ol",
    S: "or",
    B: "ra",
    C: "lateg",
    D: "ights",
    R: "in",
    Q: "turquois",
    E: "hi",
    P: "ro",
    O: "al",
    N: "le",
    M: "de",
    L: "yello",
    F: "en",
    K: "ch",
    G: "arks",
    H: "ea",
    I: "ightg",
    J: "wh",
  },
  _f = {
    OiceXe: "f0f8ff",
    antiquewEte: "faebd7",
    aqua: "ffff",
    aquamarRe: "7fffd4",
    azuY: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "0",
    blanKedOmond: "ffebcd",
    Xe: "ff",
    XeviTet: "8a2be2",
    bPwn: "a52a2a",
    burlywood: "deb887",
    caMtXe: "5f9ea0",
    KartYuse: "7fff00",
    KocTate: "d2691e",
    cSO: "ff7f50",
    cSnflowerXe: "6495ed",
    cSnsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "ffff",
    xXe: "8b",
    xcyan: "8b8b",
    xgTMnPd: "b8860b",
    xWay: "a9a9a9",
    xgYF: "6400",
    xgYy: "a9a9a9",
    xkhaki: "bdb76b",
    xmagFta: "8b008b",
    xTivegYF: "556b2f",
    xSange: "ff8c00",
    xScEd: "9932cc",
    xYd: "8b0000",
    xsOmon: "e9967a",
    xsHgYF: "8fbc8f",
    xUXe: "483d8b",
    xUWay: "2f4f4f",
    xUgYy: "2f4f4f",
    xQe: "ced1",
    xviTet: "9400d3",
    dAppRk: "ff1493",
    dApskyXe: "bfff",
    dimWay: "696969",
    dimgYy: "696969",
    dodgerXe: "1e90ff",
    fiYbrick: "b22222",
    flSOwEte: "fffaf0",
    foYstWAn: "228b22",
    fuKsia: "ff00ff",
    gaRsbSo: "dcdcdc",
    ghostwEte: "f8f8ff",
    gTd: "ffd700",
    gTMnPd: "daa520",
    Way: "808080",
    gYF: "8000",
    gYFLw: "adff2f",
    gYy: "808080",
    honeyMw: "f0fff0",
    hotpRk: "ff69b4",
    RdianYd: "cd5c5c",
    Rdigo: "4b0082",
    ivSy: "fffff0",
    khaki: "f0e68c",
    lavFMr: "e6e6fa",
    lavFMrXsh: "fff0f5",
    lawngYF: "7cfc00",
    NmoncEffon: "fffacd",
    ZXe: "add8e6",
    ZcSO: "f08080",
    Zcyan: "e0ffff",
    ZgTMnPdLw: "fafad2",
    ZWay: "d3d3d3",
    ZgYF: "90ee90",
    ZgYy: "d3d3d3",
    ZpRk: "ffb6c1",
    ZsOmon: "ffa07a",
    ZsHgYF: "20b2aa",
    ZskyXe: "87cefa",
    ZUWay: "778899",
    ZUgYy: "778899",
    ZstAlXe: "b0c4de",
    ZLw: "ffffe0",
    lime: "ff00",
    limegYF: "32cd32",
    lRF: "faf0e6",
    magFta: "ff00ff",
    maPon: "800000",
    VaquamarRe: "66cdaa",
    VXe: "cd",
    VScEd: "ba55d3",
    VpurpN: "9370db",
    VsHgYF: "3cb371",
    VUXe: "7b68ee",
    VsprRggYF: "fa9a",
    VQe: "48d1cc",
    VviTetYd: "c71585",
    midnightXe: "191970",
    mRtcYam: "f5fffa",
    mistyPse: "ffe4e1",
    moccasR: "ffe4b5",
    navajowEte: "ffdead",
    navy: "80",
    Tdlace: "fdf5e6",
    Tive: "808000",
    TivedBb: "6b8e23",
    Sange: "ffa500",
    SangeYd: "ff4500",
    ScEd: "da70d6",
    pOegTMnPd: "eee8aa",
    pOegYF: "98fb98",
    pOeQe: "afeeee",
    pOeviTetYd: "db7093",
    papayawEp: "ffefd5",
    pHKpuff: "ffdab9",
    peru: "cd853f",
    pRk: "ffc0cb",
    plum: "dda0dd",
    powMrXe: "b0e0e6",
    purpN: "800080",
    YbeccapurpN: "663399",
    Yd: "ff0000",
    Psybrown: "bc8f8f",
    PyOXe: "4169e1",
    saddNbPwn: "8b4513",
    sOmon: "fa8072",
    sandybPwn: "f4a460",
    sHgYF: "2e8b57",
    sHshell: "fff5ee",
    siFna: "a0522d",
    silver: "c0c0c0",
    skyXe: "87ceeb",
    UXe: "6a5acd",
    UWay: "708090",
    UgYy: "708090",
    snow: "fffafa",
    sprRggYF: "ff7f",
    stAlXe: "4682b4",
    tan: "d2b48c",
    teO: "8080",
    tEstN: "d8bfd8",
    tomato: "ff6347",
    Qe: "40e0d0",
    viTet: "ee82ee",
    JHt: "f5deb3",
    wEte: "ffffff",
    wEtesmoke: "f5f5f5",
    Lw: "ffff00",
    LwgYF: "9acd32",
  };
function Ib() {
  const e = {},
    t = Object.keys(_f),
    n = Object.keys(wf);
  let i, r, s, o, a;
  for (i = 0; i < t.length; i++) {
    for (o = a = t[i], r = 0; r < n.length; r++)
      (s = n[r]), (a = a.replace(s, wf[s]));
    (s = parseInt(_f[o], 16)),
      (e[a] = [(s >> 16) & 255, (s >> 8) & 255, s & 255]);
  }
  return e;
}
let Ks;
function Nb(e) {
  Ks || ((Ks = Ib()), (Ks.transparent = [0, 0, 0, 0]));
  const t = Ks[e.toLowerCase()];
  return t && { r: t[0], g: t[1], b: t[2], a: t.length === 4 ? t[3] : 255 };
}
const Fb =
  /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function zb(e) {
  const t = Fb.exec(e);
  let n = 255,
    i,
    r,
    s;
  if (t) {
    if (t[7] !== i) {
      const o = +t[7];
      n = t[8] ? kr(o) : wn(o * 255, 0, 255);
    }
    return (
      (i = +t[1]),
      (r = +t[3]),
      (s = +t[5]),
      (i = 255 & (t[2] ? kr(i) : wn(i, 0, 255))),
      (r = 255 & (t[4] ? kr(r) : wn(r, 0, 255))),
      (s = 255 & (t[6] ? kr(s) : wn(s, 0, 255))),
      { r: i, g: r, b: s, a: n }
    );
  }
}
function Bb(e) {
  return (
    e &&
    (e.a < 255
      ? `rgba(${e.r}, ${e.g}, ${e.b}, ${Kt(e.a)})`
      : `rgb(${e.r}, ${e.g}, ${e.b})`)
  );
}
const Dl = (e) =>
    e <= 0.0031308 ? e * 12.92 : Math.pow(e, 1 / 2.4) * 1.055 - 0.055,
  yi = (e) => (e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4));
function Wb(e, t, n) {
  const i = yi(Kt(e.r)),
    r = yi(Kt(e.g)),
    s = yi(Kt(e.b));
  return {
    r: Rn(Dl(i + n * (yi(Kt(t.r)) - i))),
    g: Rn(Dl(r + n * (yi(Kt(t.g)) - r))),
    b: Rn(Dl(s + n * (yi(Kt(t.b)) - s))),
    a: e.a + n * (t.a - e.a),
  };
}
function Gs(e, t, n) {
  if (e) {
    let i = wd(e);
    (i[t] = Math.max(0, Math.min(i[t] + i[t] * n, t === 0 ? 360 : 1))),
      (i = Sd(i)),
      (e.r = i[0]),
      (e.g = i[1]),
      (e.b = i[2]);
  }
}
function W0(e, t) {
  return e && Object.assign(t || {}, e);
}
function Sf(e) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return (
    Array.isArray(e)
      ? e.length >= 3 &&
        ((t = { r: e[0], g: e[1], b: e[2], a: 255 }),
        e.length > 3 && (t.a = Rn(e[3])))
      : ((t = W0(e, { r: 0, g: 0, b: 0, a: 1 })), (t.a = Rn(t.a))),
    t
  );
}
function $b(e) {
  return e.charAt(0) === "r" ? zb(e) : Lb(e);
}
class cs {
  constructor(t) {
    if (t instanceof cs) return t;
    const n = typeof t;
    let i;
    n === "object"
      ? (i = Sf(t))
      : n === "string" && (i = kb(t) || Nb(t) || $b(t)),
      (this._rgb = i),
      (this._valid = !!i);
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = W0(this._rgb);
    return t && (t.a = Kt(t.a)), t;
  }
  set rgb(t) {
    this._rgb = Sf(t);
  }
  rgbString() {
    return this._valid ? Bb(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? Tb(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? Db(this._rgb) : void 0;
  }
  mix(t, n) {
    if (t) {
      const i = this.rgb,
        r = t.rgb;
      let s;
      const o = n === s ? 0.5 : n,
        a = 2 * o - 1,
        l = i.a - r.a,
        u = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
      (s = 1 - u),
        (i.r = 255 & (u * i.r + s * r.r + 0.5)),
        (i.g = 255 & (u * i.g + s * r.g + 0.5)),
        (i.b = 255 & (u * i.b + s * r.b + 0.5)),
        (i.a = o * i.a + (1 - o) * r.a),
        (this.rgb = i);
    }
    return this;
  }
  interpolate(t, n) {
    return t && (this._rgb = Wb(this._rgb, t._rgb, n)), this;
  }
  clone() {
    return new cs(this.rgb);
  }
  alpha(t) {
    return (this._rgb.a = Rn(t)), this;
  }
  clearer(t) {
    const n = this._rgb;
    return (n.a *= 1 - t), this;
  }
  greyscale() {
    const t = this._rgb,
      n = ks(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
    return (t.r = t.g = t.b = n), this;
  }
  opaquer(t) {
    const n = this._rgb;
    return (n.a *= 1 + t), this;
  }
  negate() {
    const t = this._rgb;
    return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this;
  }
  lighten(t) {
    return Gs(this._rgb, 2, t), this;
  }
  darken(t) {
    return Gs(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return Gs(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return Gs(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return Ab(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.4.1
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */ function Ht() {}
const Hb = (() => {
  let e = 0;
  return () => e++;
})();
function ae(e) {
  return e === null || typeof e > "u";
}
function he(e) {
  if (Array.isArray && Array.isArray(e)) return !0;
  const t = Object.prototype.toString.call(e);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function G(e) {
  return e !== null && Object.prototype.toString.call(e) === "[object Object]";
}
function Re(e) {
  return (typeof e == "number" || e instanceof Number) && isFinite(+e);
}
function it(e, t) {
  return Re(e) ? e : t;
}
function $(e, t) {
  return typeof e > "u" ? t : e;
}
const Ub = (e, t) =>
    typeof e == "string" && e.endsWith("%") ? parseFloat(e) / 100 : +e / t,
  $0 = (e, t) =>
    typeof e == "string" && e.endsWith("%") ? (parseFloat(e) / 100) * t : +e;
function ne(e, t, n) {
  if (e && typeof e.call == "function") return e.apply(n, t);
}
function ee(e, t, n, i) {
  let r, s, o;
  if (he(e))
    if (((s = e.length), i)) for (r = s - 1; r >= 0; r--) t.call(n, e[r], r);
    else for (r = 0; r < s; r++) t.call(n, e[r], r);
  else if (G(e))
    for (o = Object.keys(e), s = o.length, r = 0; r < s; r++)
      t.call(n, e[o[r]], o[r]);
}
function ca(e, t) {
  let n, i, r, s;
  if (!e || !t || e.length !== t.length) return !1;
  for (n = 0, i = e.length; n < i; ++n)
    if (
      ((r = e[n]),
      (s = t[n]),
      r.datasetIndex !== s.datasetIndex || r.index !== s.index)
    )
      return !1;
  return !0;
}
function da(e) {
  if (he(e)) return e.map(da);
  if (G(e)) {
    const t = Object.create(null),
      n = Object.keys(e),
      i = n.length;
    let r = 0;
    for (; r < i; ++r) t[n[r]] = da(e[n[r]]);
    return t;
  }
  return e;
}
function H0(e) {
  return ["__proto__", "prototype", "constructor"].indexOf(e) === -1;
}
function Vb(e, t, n, i) {
  if (!H0(e)) return;
  const r = t[e],
    s = n[e];
  G(r) && G(s) ? ds(r, s, i) : (t[e] = da(s));
}
function ds(e, t, n) {
  const i = he(t) ? t : [t],
    r = i.length;
  if (!G(e)) return e;
  n = n || {};
  const s = n.merger || Vb;
  let o;
  for (let a = 0; a < r; ++a) {
    if (((o = i[a]), !G(o))) continue;
    const l = Object.keys(o);
    for (let u = 0, c = l.length; u < c; ++u) s(l[u], e, o, n);
  }
  return e;
}
function zr(e, t) {
  return ds(e, t, { merger: Yb });
}
function Yb(e, t, n) {
  if (!H0(e)) return;
  const i = t[e],
    r = n[e];
  G(i) && G(r)
    ? zr(i, r)
    : Object.prototype.hasOwnProperty.call(t, e) || (t[e] = da(r));
}
const bf = { "": (e) => e, x: (e) => e.x, y: (e) => e.y };
function Xb(e) {
  const t = e.split("."),
    n = [];
  let i = "";
  for (const r of t)
    (i += r),
      i.endsWith("\\") ? (i = i.slice(0, -1) + ".") : (n.push(i), (i = ""));
  return n;
}
function Kb(e) {
  const t = Xb(e);
  return (n) => {
    for (const i of t) {
      if (i === "") break;
      n = n && n[i];
    }
    return n;
  };
}
function hs(e, t) {
  return (bf[t] || (bf[t] = Kb(t)))(e);
}
function bd(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const ha = (e) => typeof e < "u",
  An = (e) => typeof e == "function",
  kf = (e, t) => {
    if (e.size !== t.size) return !1;
    for (const n of e) if (!t.has(n)) return !1;
    return !0;
  };
function Gb(e) {
  return e.type === "mouseup" || e.type === "click" || e.type === "contextmenu";
}
const ue = Math.PI,
  le = 2 * ue,
  Qb = le + ue,
  fa = Number.POSITIVE_INFINITY,
  qb = ue / 180,
  we = ue / 2,
  Hn = ue / 4,
  Cf = (ue * 2) / 3,
  _n = Math.log10,
  Gi = Math.sign;
function Br(e, t, n) {
  return Math.abs(e - t) < n;
}
function Tf(e) {
  const t = Math.round(e);
  e = Br(e, t, e / 1e3) ? t : e;
  const n = Math.pow(10, Math.floor(_n(e))),
    i = e / n;
  return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * n;
}
function Jb(e) {
  const t = [],
    n = Math.sqrt(e);
  let i;
  for (i = 1; i < n; i++) e % i === 0 && (t.push(i), t.push(e / i));
  return n === (n | 0) && t.push(n), t.sort((r, s) => r - s).pop(), t;
}
function pa(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function Zb(e, t) {
  const n = Math.round(e);
  return n - t <= e && n + t >= e;
}
function U0(e, t, n) {
  let i, r, s;
  for (i = 0, r = e.length; i < r; i++)
    (s = e[i][n]),
      isNaN(s) || ((t.min = Math.min(t.min, s)), (t.max = Math.max(t.max, s)));
}
function Ft(e) {
  return e * (ue / 180);
}
function kd(e) {
  return e * (180 / ue);
}
function Ef(e) {
  if (!Re(e)) return;
  let t = 1,
    n = 0;
  for (; Math.round(e * t) / t !== e; ) (t *= 10), n++;
  return n;
}
function V0(e, t) {
  const n = t.x - e.x,
    i = t.y - e.y,
    r = Math.sqrt(n * n + i * i);
  let s = Math.atan2(i, n);
  return s < -0.5 * ue && (s += le), { angle: s, distance: r };
}
function Gu(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function ek(e, t) {
  return ((e - t + Qb) % le) - ue;
}
function kt(e) {
  return ((e % le) + le) % le;
}
function fs(e, t, n, i) {
  const r = kt(e),
    s = kt(t),
    o = kt(n),
    a = kt(s - r),
    l = kt(o - r),
    u = kt(r - s),
    c = kt(r - o);
  return r === s || r === o || (i && s === o) || (a > l && u < c);
}
function at(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function tk(e) {
  return at(e, -32768, 32767);
}
function Ri(e, t, n, i = 1e-6) {
  return e >= Math.min(t, n) - i && e <= Math.max(t, n) + i;
}
function Cd(e, t, n) {
  n = n || ((o) => e[o] < t);
  let i = e.length - 1,
    r = 0,
    s;
  for (; i - r > 1; ) (s = (r + i) >> 1), n(s) ? (r = s) : (i = s);
  return { lo: r, hi: i };
}
const Qu = (e, t, n, i) =>
    Cd(
      e,
      n,
      i
        ? (r) => {
            const s = e[r][t];
            return s < n || (s === n && e[r + 1][t] === n);
          }
        : (r) => e[r][t] < n
    ),
  nk = (e, t, n) => Cd(e, n, (i) => e[i][t] >= n);
function ik(e, t, n) {
  let i = 0,
    r = e.length;
  for (; i < r && e[i] < t; ) i++;
  for (; r > i && e[r - 1] > n; ) r--;
  return i > 0 || r < e.length ? e.slice(i, r) : e;
}
const Y0 = ["push", "pop", "shift", "splice", "unshift"];
function rk(e, t) {
  if (e._chartjs) {
    e._chartjs.listeners.push(t);
    return;
  }
  Object.defineProperty(e, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: { listeners: [t] },
  }),
    Y0.forEach((n) => {
      const i = "_onData" + bd(n),
        r = e[n];
      Object.defineProperty(e, n, {
        configurable: !0,
        enumerable: !1,
        value(...s) {
          const o = r.apply(this, s);
          return (
            e._chartjs.listeners.forEach((a) => {
              typeof a[i] == "function" && a[i](...s);
            }),
            o
          );
        },
      });
    });
}
function Pf(e, t) {
  const n = e._chartjs;
  if (!n) return;
  const i = n.listeners,
    r = i.indexOf(t);
  r !== -1 && i.splice(r, 1),
    !(i.length > 0) &&
      (Y0.forEach((s) => {
        delete e[s];
      }),
      delete e._chartjs);
}
function sk(e) {
  const t = new Set(e);
  return t.size === e.length ? e : Array.from(t);
}
const X0 = (function () {
  return typeof window > "u"
    ? function (e) {
        return e();
      }
    : window.requestAnimationFrame;
})();
function K0(e, t) {
  let n = [],
    i = !1;
  return function (...r) {
    (n = r),
      i ||
        ((i = !0),
        X0.call(window, () => {
          (i = !1), e.apply(t, n);
        }));
  };
}
function ok(e, t) {
  let n;
  return function (...i) {
    return (
      t ? (clearTimeout(n), (n = setTimeout(e, t, i))) : e.apply(this, i), t
    );
  };
}
const Td = (e) => (e === "start" ? "left" : e === "end" ? "right" : "center"),
  Be = (e, t, n) => (e === "start" ? t : e === "end" ? n : (t + n) / 2),
  ak = (e, t, n, i) =>
    e === (i ? "left" : "right") ? n : e === "center" ? (t + n) / 2 : t,
  Qs = (e) => e === 0 || e === 1,
  Mf = (e, t, n) =>
    -(Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - t) * le) / n)),
  Of = (e, t, n) => Math.pow(2, -10 * e) * Math.sin(((e - t) * le) / n) + 1,
  Wr = {
    linear: (e) => e,
    easeInQuad: (e) => e * e,
    easeOutQuad: (e) => -e * (e - 2),
    easeInOutQuad: (e) =>
      (e /= 0.5) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1),
    easeInCubic: (e) => e * e * e,
    easeOutCubic: (e) => (e -= 1) * e * e + 1,
    easeInOutCubic: (e) =>
      (e /= 0.5) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2),
    easeInQuart: (e) => e * e * e * e,
    easeOutQuart: (e) => -((e -= 1) * e * e * e - 1),
    easeInOutQuart: (e) =>
      (e /= 0.5) < 1 ? 0.5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2),
    easeInQuint: (e) => e * e * e * e * e,
    easeOutQuint: (e) => (e -= 1) * e * e * e * e + 1,
    easeInOutQuint: (e) =>
      (e /= 0.5) < 1
        ? 0.5 * e * e * e * e * e
        : 0.5 * ((e -= 2) * e * e * e * e + 2),
    easeInSine: (e) => -Math.cos(e * we) + 1,
    easeOutSine: (e) => Math.sin(e * we),
    easeInOutSine: (e) => -0.5 * (Math.cos(ue * e) - 1),
    easeInExpo: (e) => (e === 0 ? 0 : Math.pow(2, 10 * (e - 1))),
    easeOutExpo: (e) => (e === 1 ? 1 : -Math.pow(2, -10 * e) + 1),
    easeInOutExpo: (e) =>
      Qs(e)
        ? e
        : e < 0.5
        ? 0.5 * Math.pow(2, 10 * (e * 2 - 1))
        : 0.5 * (-Math.pow(2, -10 * (e * 2 - 1)) + 2),
    easeInCirc: (e) => (e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1)),
    easeOutCirc: (e) => Math.sqrt(1 - (e -= 1) * e),
    easeInOutCirc: (e) =>
      (e /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - e * e) - 1)
        : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1),
    easeInElastic: (e) => (Qs(e) ? e : Mf(e, 0.075, 0.3)),
    easeOutElastic: (e) => (Qs(e) ? e : Of(e, 0.075, 0.3)),
    easeInOutElastic(e) {
      return Qs(e)
        ? e
        : e < 0.5
        ? 0.5 * Mf(e * 2, 0.1125, 0.45)
        : 0.5 + 0.5 * Of(e * 2 - 1, 0.1125, 0.45);
    },
    easeInBack(e) {
      return e * e * ((1.70158 + 1) * e - 1.70158);
    },
    easeOutBack(e) {
      return (e -= 1) * e * ((1.70158 + 1) * e + 1.70158) + 1;
    },
    easeInOutBack(e) {
      let t = 1.70158;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    },
    easeInBounce: (e) => 1 - Wr.easeOutBounce(1 - e),
    easeOutBounce(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    },
    easeInOutBounce: (e) =>
      e < 0.5
        ? Wr.easeInBounce(e * 2) * 0.5
        : Wr.easeOutBounce(e * 2 - 1) * 0.5 + 0.5,
  };
function Ed(e) {
  if (e && typeof e == "object") {
    const t = e.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function Rf(e) {
  return Ed(e) ? e : new cs(e);
}
function Il(e) {
  return Ed(e) ? e : new cs(e).saturate(0.5).darken(0.1).hexString();
}
const lk = ["x", "y", "borderWidth", "radius", "tension"],
  uk = ["color", "borderColor", "backgroundColor"];
function ck(e) {
  e.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0,
  }),
    e.describe("animation", {
      _fallback: !1,
      _indexable: !1,
      _scriptable: (t) =>
        t !== "onProgress" && t !== "onComplete" && t !== "fn",
    }),
    e.set("animations", {
      colors: { type: "color", properties: uk },
      numbers: { type: "number", properties: lk },
    }),
    e.describe("animations", { _fallback: "animation" }),
    e.set("transitions", {
      active: { animation: { duration: 400 } },
      resize: { animation: { duration: 0 } },
      show: {
        animations: {
          colors: { from: "transparent" },
          visible: { type: "boolean", duration: 0 },
        },
      },
      hide: {
        animations: {
          colors: { to: "transparent" },
          visible: { type: "boolean", easing: "linear", fn: (t) => t | 0 },
        },
      },
    });
}
function dk(e) {
  e.set("layout", {
    autoPadding: !0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  });
}
const jf = new Map();
function hk(e, t) {
  t = t || {};
  const n = e + JSON.stringify(t);
  let i = jf.get(n);
  return i || ((i = new Intl.NumberFormat(e, t)), jf.set(n, i)), i;
}
function Qa(e, t, n) {
  return hk(t, n).format(e);
}
const G0 = {
  values(e) {
    return he(e) ? e : "" + e;
  },
  numeric(e, t, n) {
    if (e === 0) return "0";
    const i = this.chart.options.locale;
    let r,
      s = e;
    if (n.length > 1) {
      const u = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value));
      (u < 1e-4 || u > 1e15) && (r = "scientific"), (s = fk(e, n));
    }
    const o = _n(Math.abs(s)),
      a = isNaN(o) ? 1 : Math.max(Math.min(-1 * Math.floor(o), 20), 0),
      l = { notation: r, minimumFractionDigits: a, maximumFractionDigits: a };
    return Object.assign(l, this.options.ticks.format), Qa(e, i, l);
  },
  logarithmic(e, t, n) {
    if (e === 0) return "0";
    const i = n[t].significand || e / Math.pow(10, Math.floor(_n(e)));
    return [1, 2, 3, 5, 10, 15].includes(i) || t > 0.8 * n.length
      ? G0.numeric.call(this, e, t, n)
      : "";
  },
};
function fk(e, t) {
  let n = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(n) >= 1 && e !== Math.floor(e) && (n = e - Math.floor(e)), n;
}
var qa = { formatters: G0 };
function pk(e) {
  e.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    clip: !0,
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (t, n) => n.lineWidth,
      tickColor: (t, n) => n.color,
      offset: !1,
    },
    border: { display: !0, dash: [], dashOffset: 0, width: 1 },
    title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: qa.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2,
    },
  }),
    e.route("scale.ticks", "color", "", "color"),
    e.route("scale.grid", "color", "", "borderColor"),
    e.route("scale.border", "color", "", "borderColor"),
    e.route("scale.title", "color", "", "color"),
    e.describe("scale", {
      _fallback: !1,
      _scriptable: (t) =>
        !t.startsWith("before") &&
        !t.startsWith("after") &&
        t !== "callback" &&
        t !== "parser",
      _indexable: (t) =>
        t !== "borderDash" && t !== "tickBorderDash" && t !== "dash",
    }),
    e.describe("scales", { _fallback: "scale" }),
    e.describe("scale.ticks", {
      _scriptable: (t) => t !== "backdropPadding" && t !== "callback",
      _indexable: (t) => t !== "backdropPadding",
    });
}
const li = Object.create(null),
  qu = Object.create(null);
function $r(e, t) {
  if (!t) return e;
  const n = t.split(".");
  for (let i = 0, r = n.length; i < r; ++i) {
    const s = n[i];
    e = e[s] || (e[s] = Object.create(null));
  }
  return e;
}
function Nl(e, t, n) {
  return typeof t == "string" ? ds($r(e, t), n) : ds($r(e, ""), t);
}
class gk {
  constructor(t, n) {
    (this.animation = void 0),
      (this.backgroundColor = "rgba(0,0,0,0.1)"),
      (this.borderColor = "rgba(0,0,0,0.1)"),
      (this.color = "#666"),
      (this.datasets = {}),
      (this.devicePixelRatio = (i) => i.chart.platform.getDevicePixelRatio()),
      (this.elements = {}),
      (this.events = [
        "mousemove",
        "mouseout",
        "click",
        "touchstart",
        "touchmove",
      ]),
      (this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: "normal",
        lineHeight: 1.2,
        weight: null,
      }),
      (this.hover = {}),
      (this.hoverBackgroundColor = (i, r) => Il(r.backgroundColor)),
      (this.hoverBorderColor = (i, r) => Il(r.borderColor)),
      (this.hoverColor = (i, r) => Il(r.color)),
      (this.indexAxis = "x"),
      (this.interaction = {
        mode: "nearest",
        intersect: !0,
        includeInvisible: !1,
      }),
      (this.maintainAspectRatio = !0),
      (this.onHover = null),
      (this.onClick = null),
      (this.parsing = !0),
      (this.plugins = {}),
      (this.responsive = !0),
      (this.scale = void 0),
      (this.scales = {}),
      (this.showLine = !0),
      (this.drawActiveElementsOnTop = !0),
      this.describe(t),
      this.apply(n);
  }
  set(t, n) {
    return Nl(this, t, n);
  }
  get(t) {
    return $r(this, t);
  }
  describe(t, n) {
    return Nl(qu, t, n);
  }
  override(t, n) {
    return Nl(li, t, n);
  }
  route(t, n, i, r) {
    const s = $r(this, t),
      o = $r(this, i),
      a = "_" + n;
    Object.defineProperties(s, {
      [a]: { value: s[n], writable: !0 },
      [n]: {
        enumerable: !0,
        get() {
          const l = this[a],
            u = o[r];
          return G(l) ? Object.assign({}, u, l) : $(l, u);
        },
        set(l) {
          this[a] = l;
        },
      },
    });
  }
  apply(t) {
    t.forEach((n) => n(this));
  }
}
var me = new gk(
  {
    _scriptable: (e) => !e.startsWith("on"),
    _indexable: (e) => e !== "events",
    hover: { _fallback: "interaction" },
    interaction: { _scriptable: !1, _indexable: !1 },
  },
  [ck, dk, pk]
);
function mk(e) {
  return !e || ae(e.size) || ae(e.family)
    ? null
    : (e.style ? e.style + " " : "") +
        (e.weight ? e.weight + " " : "") +
        e.size +
        "px " +
        e.family;
}
function ga(e, t, n, i, r) {
  let s = t[r];
  return (
    s || ((s = t[r] = e.measureText(r).width), n.push(r)), s > i && (i = s), i
  );
}
function yk(e, t, n, i) {
  i = i || {};
  let r = (i.data = i.data || {}),
    s = (i.garbageCollect = i.garbageCollect || []);
  i.font !== t &&
    ((r = i.data = {}), (s = i.garbageCollect = []), (i.font = t)),
    e.save(),
    (e.font = t);
  let o = 0;
  const a = n.length;
  let l, u, c, d, h;
  for (l = 0; l < a; l++)
    if (((d = n[l]), d != null && !he(d))) o = ga(e, r, s, o, d);
    else if (he(d))
      for (u = 0, c = d.length; u < c; u++)
        (h = d[u]), h != null && !he(h) && (o = ga(e, r, s, o, h));
  e.restore();
  const f = s.length / 2;
  if (f > n.length) {
    for (l = 0; l < f; l++) delete r[s[l]];
    s.splice(0, f);
  }
  return o;
}
function Un(e, t, n) {
  const i = e.currentDevicePixelRatio,
    r = n !== 0 ? Math.max(n / 2, 0.5) : 0;
  return Math.round((t - r) * i) / i + r;
}
function Lf(e, t) {
  (t = t || e.getContext("2d")),
    t.save(),
    t.resetTransform(),
    t.clearRect(0, 0, e.width, e.height),
    t.restore();
}
function Ju(e, t, n, i) {
  Q0(e, t, n, i, null);
}
function Q0(e, t, n, i, r) {
  let s, o, a, l, u, c, d, h;
  const f = t.pointStyle,
    p = t.rotation,
    y = t.radius;
  let w = (p || 0) * qb;
  if (
    f &&
    typeof f == "object" &&
    ((s = f.toString()),
    s === "[object HTMLImageElement]" || s === "[object HTMLCanvasElement]")
  ) {
    e.save(),
      e.translate(n, i),
      e.rotate(w),
      e.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height),
      e.restore();
    return;
  }
  if (!(isNaN(y) || y <= 0)) {
    switch ((e.beginPath(), f)) {
      default:
        r ? e.ellipse(n, i, r / 2, y, 0, 0, le) : e.arc(n, i, y, 0, le),
          e.closePath();
        break;
      case "triangle":
        (c = r ? r / 2 : y),
          e.moveTo(n + Math.sin(w) * c, i - Math.cos(w) * y),
          (w += Cf),
          e.lineTo(n + Math.sin(w) * c, i - Math.cos(w) * y),
          (w += Cf),
          e.lineTo(n + Math.sin(w) * c, i - Math.cos(w) * y),
          e.closePath();
        break;
      case "rectRounded":
        (u = y * 0.516),
          (l = y - u),
          (o = Math.cos(w + Hn) * l),
          (d = Math.cos(w + Hn) * (r ? r / 2 - u : l)),
          (a = Math.sin(w + Hn) * l),
          (h = Math.sin(w + Hn) * (r ? r / 2 - u : l)),
          e.arc(n - d, i - a, u, w - ue, w - we),
          e.arc(n + h, i - o, u, w - we, w),
          e.arc(n + d, i + a, u, w, w + we),
          e.arc(n - h, i + o, u, w + we, w + ue),
          e.closePath();
        break;
      case "rect":
        if (!p) {
          (l = Math.SQRT1_2 * y),
            (c = r ? r / 2 : l),
            e.rect(n - c, i - l, 2 * c, 2 * l);
          break;
        }
        w += Hn;
      case "rectRot":
        (d = Math.cos(w) * (r ? r / 2 : y)),
          (o = Math.cos(w) * y),
          (a = Math.sin(w) * y),
          (h = Math.sin(w) * (r ? r / 2 : y)),
          e.moveTo(n - d, i - a),
          e.lineTo(n + h, i - o),
          e.lineTo(n + d, i + a),
          e.lineTo(n - h, i + o),
          e.closePath();
        break;
      case "crossRot":
        w += Hn;
      case "cross":
        (d = Math.cos(w) * (r ? r / 2 : y)),
          (o = Math.cos(w) * y),
          (a = Math.sin(w) * y),
          (h = Math.sin(w) * (r ? r / 2 : y)),
          e.moveTo(n - d, i - a),
          e.lineTo(n + d, i + a),
          e.moveTo(n + h, i - o),
          e.lineTo(n - h, i + o);
        break;
      case "star":
        (d = Math.cos(w) * (r ? r / 2 : y)),
          (o = Math.cos(w) * y),
          (a = Math.sin(w) * y),
          (h = Math.sin(w) * (r ? r / 2 : y)),
          e.moveTo(n - d, i - a),
          e.lineTo(n + d, i + a),
          e.moveTo(n + h, i - o),
          e.lineTo(n - h, i + o),
          (w += Hn),
          (d = Math.cos(w) * (r ? r / 2 : y)),
          (o = Math.cos(w) * y),
          (a = Math.sin(w) * y),
          (h = Math.sin(w) * (r ? r / 2 : y)),
          e.moveTo(n - d, i - a),
          e.lineTo(n + d, i + a),
          e.moveTo(n + h, i - o),
          e.lineTo(n - h, i + o);
        break;
      case "line":
        (o = r ? r / 2 : Math.cos(w) * y),
          (a = Math.sin(w) * y),
          e.moveTo(n - o, i - a),
          e.lineTo(n + o, i + a);
        break;
      case "dash":
        e.moveTo(n, i),
          e.lineTo(n + Math.cos(w) * (r ? r / 2 : y), i + Math.sin(w) * y);
        break;
      case !1:
        e.closePath();
        break;
    }
    e.fill(), t.borderWidth > 0 && e.stroke();
  }
}
function qt(e, t, n) {
  return (
    (n = n || 0.5),
    !t ||
      (e &&
        e.x > t.left - n &&
        e.x < t.right + n &&
        e.y > t.top - n &&
        e.y < t.bottom + n)
  );
}
function Pd(e, t) {
  e.save(),
    e.beginPath(),
    e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top),
    e.clip();
}
function Md(e) {
  e.restore();
}
function vk(e, t, n, i, r) {
  if (!t) return e.lineTo(n.x, n.y);
  if (r === "middle") {
    const s = (t.x + n.x) / 2;
    e.lineTo(s, t.y), e.lineTo(s, n.y);
  } else (r === "after") != !!i ? e.lineTo(t.x, n.y) : e.lineTo(n.x, t.y);
  e.lineTo(n.x, n.y);
}
function xk(e, t, n, i) {
  if (!t) return e.lineTo(n.x, n.y);
  e.bezierCurveTo(
    i ? t.cp1x : t.cp2x,
    i ? t.cp1y : t.cp2y,
    i ? n.cp2x : n.cp1x,
    i ? n.cp2y : n.cp1y,
    n.x,
    n.y
  );
}
function wk(e, t) {
  t.translation && e.translate(t.translation[0], t.translation[1]),
    ae(t.rotation) || e.rotate(t.rotation),
    t.color && (e.fillStyle = t.color),
    t.textAlign && (e.textAlign = t.textAlign),
    t.textBaseline && (e.textBaseline = t.textBaseline);
}
function _k(e, t, n, i, r) {
  if (r.strikethrough || r.underline) {
    const s = e.measureText(i),
      o = t - s.actualBoundingBoxLeft,
      a = t + s.actualBoundingBoxRight,
      l = n - s.actualBoundingBoxAscent,
      u = n + s.actualBoundingBoxDescent,
      c = r.strikethrough ? (l + u) / 2 : u;
    (e.strokeStyle = e.fillStyle),
      e.beginPath(),
      (e.lineWidth = r.decorationWidth || 2),
      e.moveTo(o, c),
      e.lineTo(a, c),
      e.stroke();
  }
}
function Sk(e, t) {
  const n = e.fillStyle;
  (e.fillStyle = t.color),
    e.fillRect(t.left, t.top, t.width, t.height),
    (e.fillStyle = n);
}
function ui(e, t, n, i, r, s = {}) {
  const o = he(t) ? t : [t],
    a = s.strokeWidth > 0 && s.strokeColor !== "";
  let l, u;
  for (e.save(), e.font = r.string, wk(e, s), l = 0; l < o.length; ++l)
    (u = o[l]),
      s.backdrop && Sk(e, s.backdrop),
      a &&
        (s.strokeColor && (e.strokeStyle = s.strokeColor),
        ae(s.strokeWidth) || (e.lineWidth = s.strokeWidth),
        e.strokeText(u, n, i, s.maxWidth)),
      e.fillText(u, n, i, s.maxWidth),
      _k(e, n, i, u, s),
      (i += Number(r.lineHeight));
  e.restore();
}
function ma(e, t) {
  const { x: n, y: i, w: r, h: s, radius: o } = t;
  e.arc(n + o.topLeft, i + o.topLeft, o.topLeft, 1.5 * ue, ue, !0),
    e.lineTo(n, i + s - o.bottomLeft),
    e.arc(n + o.bottomLeft, i + s - o.bottomLeft, o.bottomLeft, ue, we, !0),
    e.lineTo(n + r - o.bottomRight, i + s),
    e.arc(
      n + r - o.bottomRight,
      i + s - o.bottomRight,
      o.bottomRight,
      we,
      0,
      !0
    ),
    e.lineTo(n + r, i + o.topRight),
    e.arc(n + r - o.topRight, i + o.topRight, o.topRight, 0, -we, !0),
    e.lineTo(n + o.topLeft, i);
}
const bk = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
  kk = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function Ck(e, t) {
  const n = ("" + e).match(bk);
  if (!n || n[1] === "normal") return t * 1.2;
  switch (((e = +n[2]), n[3])) {
    case "px":
      return e;
    case "%":
      e /= 100;
      break;
  }
  return t * e;
}
const Tk = (e) => +e || 0;
function Od(e, t) {
  const n = {},
    i = G(t),
    r = i ? Object.keys(t) : t,
    s = G(e) ? (i ? (o) => $(e[o], e[t[o]]) : (o) => e[o]) : () => e;
  for (const o of r) n[o] = Tk(s(o));
  return n;
}
function Ek(e) {
  return Od(e, { top: "y", right: "x", bottom: "y", left: "x" });
}
function zi(e) {
  return Od(e, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
}
function He(e) {
  const t = Ek(e);
  return (t.width = t.left + t.right), (t.height = t.top + t.bottom), t;
}
function Pe(e, t) {
  (e = e || {}), (t = t || me.font);
  let n = $(e.size, t.size);
  typeof n == "string" && (n = parseInt(n, 10));
  let i = $(e.style, t.style);
  i &&
    !("" + i).match(kk) &&
    (console.warn('Invalid font style specified: "' + i + '"'), (i = void 0));
  const r = {
    family: $(e.family, t.family),
    lineHeight: Ck($(e.lineHeight, t.lineHeight), n),
    size: n,
    style: i,
    weight: $(e.weight, t.weight),
    string: "",
  };
  return (r.string = mk(r)), r;
}
function qs(e, t, n, i) {
  let r = !0,
    s,
    o,
    a;
  for (s = 0, o = e.length; s < o; ++s)
    if (
      ((a = e[s]),
      a !== void 0 &&
        (t !== void 0 && typeof a == "function" && ((a = a(t)), (r = !1)),
        n !== void 0 && he(a) && ((a = a[n % a.length]), (r = !1)),
        a !== void 0))
    )
      return i && !r && (i.cacheable = !1), a;
}
function Pk(e, t, n) {
  const { min: i, max: r } = e,
    s = $0(t, (r - i) / 2),
    o = (a, l) => (n && a === 0 ? 0 : a + l);
  return { min: o(i, -Math.abs(s)), max: o(r, s) };
}
function Bn(e, t) {
  return Object.assign(Object.create(e), t);
}
function Rd(e, t = [""], n, i, r = () => e[0]) {
  const s = n || e;
  typeof i > "u" && (i = ey("_fallback", e));
  const o = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: e,
    _rootScopes: s,
    _fallback: i,
    _getTarget: r,
    override: (a) => Rd([a, ...e], t, s, i),
  };
  return new Proxy(o, {
    deleteProperty(a, l) {
      return delete a[l], delete a._keys, delete e[0][l], !0;
    },
    get(a, l) {
      return J0(a, l, () => Ik(l, t, e, a));
    },
    getOwnPropertyDescriptor(a, l) {
      return Reflect.getOwnPropertyDescriptor(a._scopes[0], l);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e[0]);
    },
    has(a, l) {
      return Df(a).includes(l);
    },
    ownKeys(a) {
      return Df(a);
    },
    set(a, l, u) {
      const c = a._storage || (a._storage = r());
      return (a[l] = c[l] = u), delete a._keys, !0;
    },
  });
}
function Qi(e, t, n, i) {
  const r = {
    _cacheable: !1,
    _proxy: e,
    _context: t,
    _subProxy: n,
    _stack: new Set(),
    _descriptors: q0(e, i),
    setContext: (s) => Qi(e, s, n, i),
    override: (s) => Qi(e.override(s), t, n, i),
  };
  return new Proxy(r, {
    deleteProperty(s, o) {
      return delete s[o], delete e[o], !0;
    },
    get(s, o, a) {
      return J0(s, o, () => Ok(s, o, a));
    },
    getOwnPropertyDescriptor(s, o) {
      return s._descriptors.allKeys
        ? Reflect.has(e, o)
          ? { enumerable: !0, configurable: !0 }
          : void 0
        : Reflect.getOwnPropertyDescriptor(e, o);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e);
    },
    has(s, o) {
      return Reflect.has(e, o);
    },
    ownKeys() {
      return Reflect.ownKeys(e);
    },
    set(s, o, a) {
      return (e[o] = a), delete s[o], !0;
    },
  });
}
function q0(e, t = { scriptable: !0, indexable: !0 }) {
  const {
    _scriptable: n = t.scriptable,
    _indexable: i = t.indexable,
    _allKeys: r = t.allKeys,
  } = e;
  return {
    allKeys: r,
    scriptable: n,
    indexable: i,
    isScriptable: An(n) ? n : () => n,
    isIndexable: An(i) ? i : () => i,
  };
}
const Mk = (e, t) => (e ? e + bd(t) : t),
  jd = (e, t) =>
    G(t) &&
    e !== "adapters" &&
    (Object.getPrototypeOf(t) === null || t.constructor === Object);
function J0(e, t, n) {
  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
  const i = n();
  return (e[t] = i), i;
}
function Ok(e, t, n) {
  const { _proxy: i, _context: r, _subProxy: s, _descriptors: o } = e;
  let a = i[t];
  return (
    An(a) && o.isScriptable(t) && (a = Rk(t, a, e, n)),
    he(a) && a.length && (a = jk(t, a, e, o.isIndexable)),
    jd(t, a) && (a = Qi(a, r, s && s[t], o)),
    a
  );
}
function Rk(e, t, n, i) {
  const { _proxy: r, _context: s, _subProxy: o, _stack: a } = n;
  if (a.has(e))
    throw new Error(
      "Recursion detected: " + Array.from(a).join("->") + "->" + e
    );
  a.add(e);
  let l = t(s, o || i);
  return a.delete(e), jd(e, l) && (l = Ld(r._scopes, r, e, l)), l;
}
function jk(e, t, n, i) {
  const { _proxy: r, _context: s, _subProxy: o, _descriptors: a } = n;
  if (typeof s.index < "u" && i(e)) return t[s.index % t.length];
  if (G(t[0])) {
    const l = t,
      u = r._scopes.filter((c) => c !== l);
    t = [];
    for (const c of l) {
      const d = Ld(u, r, e, c);
      t.push(Qi(d, s, o && o[e], a));
    }
  }
  return t;
}
function Z0(e, t, n) {
  return An(e) ? e(t, n) : e;
}
const Lk = (e, t) => (e === !0 ? t : typeof e == "string" ? hs(t, e) : void 0);
function Ak(e, t, n, i, r) {
  for (const s of t) {
    const o = Lk(n, s);
    if (o) {
      e.add(o);
      const a = Z0(o._fallback, n, r);
      if (typeof a < "u" && a !== n && a !== i) return a;
    } else if (o === !1 && typeof i < "u" && n !== i) return null;
  }
  return !1;
}
function Ld(e, t, n, i) {
  const r = t._rootScopes,
    s = Z0(t._fallback, n, i),
    o = [...e, ...r],
    a = new Set();
  a.add(i);
  let l = Af(a, o, n, s || n, i);
  return l === null ||
    (typeof s < "u" && s !== n && ((l = Af(a, o, s, l, i)), l === null))
    ? !1
    : Rd(Array.from(a), [""], r, s, () => Dk(t, n, i));
}
function Af(e, t, n, i, r) {
  for (; n; ) n = Ak(e, t, n, i, r);
  return n;
}
function Dk(e, t, n) {
  const i = e._getTarget();
  t in i || (i[t] = {});
  const r = i[t];
  return he(r) && G(n) ? n : r || {};
}
function Ik(e, t, n, i) {
  let r;
  for (const s of t)
    if (((r = ey(Mk(s, e), n)), typeof r < "u"))
      return jd(e, r) ? Ld(n, i, e, r) : r;
}
function ey(e, t) {
  for (const n of t) {
    if (!n) continue;
    const i = n[e];
    if (typeof i < "u") return i;
  }
}
function Df(e) {
  let t = e._keys;
  return t || (t = e._keys = Nk(e._scopes)), t;
}
function Nk(e) {
  const t = new Set();
  for (const n of e)
    for (const i of Object.keys(n).filter((r) => !r.startsWith("_"))) t.add(i);
  return Array.from(t);
}
const Fk = Number.EPSILON || 1e-14,
  qi = (e, t) => t < e.length && !e[t].skip && e[t],
  ty = (e) => (e === "x" ? "y" : "x");
function zk(e, t, n, i) {
  const r = e.skip ? t : e,
    s = t,
    o = n.skip ? t : n,
    a = Gu(s, r),
    l = Gu(o, s);
  let u = a / (a + l),
    c = l / (a + l);
  (u = isNaN(u) ? 0 : u), (c = isNaN(c) ? 0 : c);
  const d = i * u,
    h = i * c;
  return {
    previous: { x: s.x - d * (o.x - r.x), y: s.y - d * (o.y - r.y) },
    next: { x: s.x + h * (o.x - r.x), y: s.y + h * (o.y - r.y) },
  };
}
function Bk(e, t, n) {
  const i = e.length;
  let r,
    s,
    o,
    a,
    l,
    u = qi(e, 0);
  for (let c = 0; c < i - 1; ++c)
    if (((l = u), (u = qi(e, c + 1)), !(!l || !u))) {
      if (Br(t[c], 0, Fk)) {
        n[c] = n[c + 1] = 0;
        continue;
      }
      (r = n[c] / t[c]),
        (s = n[c + 1] / t[c]),
        (a = Math.pow(r, 2) + Math.pow(s, 2)),
        !(a <= 9) &&
          ((o = 3 / Math.sqrt(a)),
          (n[c] = r * o * t[c]),
          (n[c + 1] = s * o * t[c]));
    }
}
function Wk(e, t, n = "x") {
  const i = ty(n),
    r = e.length;
  let s,
    o,
    a,
    l = qi(e, 0);
  for (let u = 0; u < r; ++u) {
    if (((o = a), (a = l), (l = qi(e, u + 1)), !a)) continue;
    const c = a[n],
      d = a[i];
    o &&
      ((s = (c - o[n]) / 3),
      (a[`cp1${n}`] = c - s),
      (a[`cp1${i}`] = d - s * t[u])),
      l &&
        ((s = (l[n] - c) / 3),
        (a[`cp2${n}`] = c + s),
        (a[`cp2${i}`] = d + s * t[u]));
  }
}
function $k(e, t = "x") {
  const n = ty(t),
    i = e.length,
    r = Array(i).fill(0),
    s = Array(i);
  let o,
    a,
    l,
    u = qi(e, 0);
  for (o = 0; o < i; ++o)
    if (((a = l), (l = u), (u = qi(e, o + 1)), !!l)) {
      if (u) {
        const c = u[t] - l[t];
        r[o] = c !== 0 ? (u[n] - l[n]) / c : 0;
      }
      s[o] = a
        ? u
          ? Gi(r[o - 1]) !== Gi(r[o])
            ? 0
            : (r[o - 1] + r[o]) / 2
          : r[o - 1]
        : r[o];
    }
  Bk(e, r, s), Wk(e, s, t);
}
function Js(e, t, n) {
  return Math.max(Math.min(e, n), t);
}
function Hk(e, t) {
  let n,
    i,
    r,
    s,
    o,
    a = qt(e[0], t);
  for (n = 0, i = e.length; n < i; ++n)
    (o = s),
      (s = a),
      (a = n < i - 1 && qt(e[n + 1], t)),
      s &&
        ((r = e[n]),
        o &&
          ((r.cp1x = Js(r.cp1x, t.left, t.right)),
          (r.cp1y = Js(r.cp1y, t.top, t.bottom))),
        a &&
          ((r.cp2x = Js(r.cp2x, t.left, t.right)),
          (r.cp2y = Js(r.cp2y, t.top, t.bottom))));
}
function Uk(e, t, n, i, r) {
  let s, o, a, l;
  if (
    (t.spanGaps && (e = e.filter((u) => !u.skip)),
    t.cubicInterpolationMode === "monotone")
  )
    $k(e, r);
  else {
    let u = i ? e[e.length - 1] : e[0];
    for (s = 0, o = e.length; s < o; ++s)
      (a = e[s]),
        (l = zk(u, a, e[Math.min(s + 1, o - (i ? 0 : 1)) % o], t.tension)),
        (a.cp1x = l.previous.x),
        (a.cp1y = l.previous.y),
        (a.cp2x = l.next.x),
        (a.cp2y = l.next.y),
        (u = a);
  }
  t.capBezierPoints && Hk(e, n);
}
function Ad() {
  return typeof window < "u" && typeof document < "u";
}
function Dd(e) {
  let t = e.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function ya(e, t, n) {
  let i;
  return (
    typeof e == "string"
      ? ((i = parseInt(e, 10)),
        e.indexOf("%") !== -1 && (i = (i / 100) * t.parentNode[n]))
      : (i = e),
    i
  );
}
const Ja = (e) => e.ownerDocument.defaultView.getComputedStyle(e, null);
function Vk(e, t) {
  return Ja(e).getPropertyValue(t);
}
const Yk = ["top", "right", "bottom", "left"];
function ni(e, t, n) {
  const i = {};
  n = n ? "-" + n : "";
  for (let r = 0; r < 4; r++) {
    const s = Yk[r];
    i[s] = parseFloat(e[t + "-" + s + n]) || 0;
  }
  return (i.width = i.left + i.right), (i.height = i.top + i.bottom), i;
}
const Xk = (e, t, n) => (e > 0 || t > 0) && (!n || !n.shadowRoot);
function Kk(e, t) {
  const n = e.touches,
    i = n && n.length ? n[0] : e,
    { offsetX: r, offsetY: s } = i;
  let o = !1,
    a,
    l;
  if (Xk(r, s, e.target)) (a = r), (l = s);
  else {
    const u = t.getBoundingClientRect();
    (a = i.clientX - u.left), (l = i.clientY - u.top), (o = !0);
  }
  return { x: a, y: l, box: o };
}
function Gn(e, t) {
  if ("native" in e) return e;
  const { canvas: n, currentDevicePixelRatio: i } = t,
    r = Ja(n),
    s = r.boxSizing === "border-box",
    o = ni(r, "padding"),
    a = ni(r, "border", "width"),
    { x: l, y: u, box: c } = Kk(e, n),
    d = o.left + (c && a.left),
    h = o.top + (c && a.top);
  let { width: f, height: p } = t;
  return (
    s && ((f -= o.width + a.width), (p -= o.height + a.height)),
    {
      x: Math.round((((l - d) / f) * n.width) / i),
      y: Math.round((((u - h) / p) * n.height) / i),
    }
  );
}
function Gk(e, t, n) {
  let i, r;
  if (t === void 0 || n === void 0) {
    const s = Dd(e);
    if (!s) (t = e.clientWidth), (n = e.clientHeight);
    else {
      const o = s.getBoundingClientRect(),
        a = Ja(s),
        l = ni(a, "border", "width"),
        u = ni(a, "padding");
      (t = o.width - u.width - l.width),
        (n = o.height - u.height - l.height),
        (i = ya(a.maxWidth, s, "clientWidth")),
        (r = ya(a.maxHeight, s, "clientHeight"));
    }
  }
  return { width: t, height: n, maxWidth: i || fa, maxHeight: r || fa };
}
const Zs = (e) => Math.round(e * 10) / 10;
function Qk(e, t, n, i) {
  const r = Ja(e),
    s = ni(r, "margin"),
    o = ya(r.maxWidth, e, "clientWidth") || fa,
    a = ya(r.maxHeight, e, "clientHeight") || fa,
    l = Gk(e, t, n);
  let { width: u, height: c } = l;
  if (r.boxSizing === "content-box") {
    const h = ni(r, "border", "width"),
      f = ni(r, "padding");
    (u -= f.width + h.width), (c -= f.height + h.height);
  }
  return (
    (u = Math.max(0, u - s.width)),
    (c = Math.max(0, i ? u / i : c - s.height)),
    (u = Zs(Math.min(u, o, l.maxWidth))),
    (c = Zs(Math.min(c, a, l.maxHeight))),
    u && !c && (c = Zs(u / 2)),
    (t !== void 0 || n !== void 0) &&
      i &&
      l.height &&
      c > l.height &&
      ((c = l.height), (u = Zs(Math.floor(c * i)))),
    { width: u, height: c }
  );
}
function If(e, t, n) {
  const i = t || 1,
    r = Math.floor(e.height * i),
    s = Math.floor(e.width * i);
  (e.height = Math.floor(e.height)), (e.width = Math.floor(e.width));
  const o = e.canvas;
  return (
    o.style &&
      (n || (!o.style.height && !o.style.width)) &&
      ((o.style.height = `${e.height}px`), (o.style.width = `${e.width}px`)),
    e.currentDevicePixelRatio !== i || o.height !== r || o.width !== s
      ? ((e.currentDevicePixelRatio = i),
        (o.height = r),
        (o.width = s),
        e.ctx.setTransform(i, 0, 0, i, 0, 0),
        !0)
      : !1
  );
}
const qk = (function () {
  let e = !1;
  try {
    const t = {
      get passive() {
        return (e = !0), !1;
      },
    };
    Ad() &&
      (window.addEventListener("test", null, t),
      window.removeEventListener("test", null, t));
  } catch {}
  return e;
})();
function Nf(e, t) {
  const n = Vk(e, t),
    i = n && n.match(/^(\d+)(\.\d+)?px$/);
  return i ? +i[1] : void 0;
}
function Qn(e, t, n, i) {
  return { x: e.x + n * (t.x - e.x), y: e.y + n * (t.y - e.y) };
}
function Jk(e, t, n, i) {
  return {
    x: e.x + n * (t.x - e.x),
    y:
      i === "middle"
        ? n < 0.5
          ? e.y
          : t.y
        : i === "after"
        ? n < 1
          ? e.y
          : t.y
        : n > 0
        ? t.y
        : e.y,
  };
}
function Zk(e, t, n, i) {
  const r = { x: e.cp2x, y: e.cp2y },
    s = { x: t.cp1x, y: t.cp1y },
    o = Qn(e, r, n),
    a = Qn(r, s, n),
    l = Qn(s, t, n),
    u = Qn(o, a, n),
    c = Qn(a, l, n);
  return Qn(u, c, n);
}
const e2 = function (e, t) {
    return {
      x(n) {
        return e + e + t - n;
      },
      setWidth(n) {
        t = n;
      },
      textAlign(n) {
        return n === "center" ? n : n === "right" ? "left" : "right";
      },
      xPlus(n, i) {
        return n - i;
      },
      leftForLtr(n, i) {
        return n - i;
      },
    };
  },
  t2 = function () {
    return {
      x(e) {
        return e;
      },
      setWidth(e) {},
      textAlign(e) {
        return e;
      },
      xPlus(e, t) {
        return e + t;
      },
      leftForLtr(e, t) {
        return e;
      },
    };
  };
function Bi(e, t, n) {
  return e ? e2(t, n) : t2();
}
function ny(e, t) {
  let n, i;
  (t === "ltr" || t === "rtl") &&
    ((n = e.canvas.style),
    (i = [n.getPropertyValue("direction"), n.getPropertyPriority("direction")]),
    n.setProperty("direction", t, "important"),
    (e.prevTextDirection = i));
}
function iy(e, t) {
  t !== void 0 &&
    (delete e.prevTextDirection,
    e.canvas.style.setProperty("direction", t[0], t[1]));
}
function ry(e) {
  return e === "angle"
    ? { between: fs, compare: ek, normalize: kt }
    : { between: Ri, compare: (t, n) => t - n, normalize: (t) => t };
}
function Ff({ start: e, end: t, count: n, loop: i, style: r }) {
  return {
    start: e % n,
    end: t % n,
    loop: i && (t - e + 1) % n === 0,
    style: r,
  };
}
function n2(e, t, n) {
  const { property: i, start: r, end: s } = n,
    { between: o, normalize: a } = ry(i),
    l = t.length;
  let { start: u, end: c, loop: d } = e,
    h,
    f;
  if (d) {
    for (u += l, c += l, h = 0, f = l; h < f && o(a(t[u % l][i]), r, s); ++h)
      u--, c--;
    (u %= l), (c %= l);
  }
  return c < u && (c += l), { start: u, end: c, loop: d, style: e.style };
}
function i2(e, t, n) {
  if (!n) return [e];
  const { property: i, start: r, end: s } = n,
    o = t.length,
    { compare: a, between: l, normalize: u } = ry(i),
    { start: c, end: d, loop: h, style: f } = n2(e, t, n),
    p = [];
  let y = !1,
    w = null,
    m,
    v,
    x;
  const _ = () => l(r, x, m) && a(r, x) !== 0,
    S = () => a(s, m) === 0 || l(s, x, m),
    k = () => y || _(),
    C = () => !y || S();
  for (let T = c, R = c; T <= d; ++T)
    (v = t[T % o]),
      !v.skip &&
        ((m = u(v[i])),
        m !== x &&
          ((y = l(m, r, s)),
          w === null && k() && (w = a(m, r) === 0 ? T : R),
          w !== null &&
            C() &&
            (p.push(Ff({ start: w, end: T, loop: h, count: o, style: f })),
            (w = null)),
          (R = T),
          (x = m)));
  return (
    w !== null && p.push(Ff({ start: w, end: d, loop: h, count: o, style: f })),
    p
  );
}
function r2(e, t) {
  const n = [],
    i = e.segments;
  for (let r = 0; r < i.length; r++) {
    const s = i2(i[r], e.points, t);
    s.length && n.push(...s);
  }
  return n;
}
function s2(e, t, n, i) {
  let r = 0,
    s = t - 1;
  if (n && !i) for (; r < t && !e[r].skip; ) r++;
  for (; r < t && e[r].skip; ) r++;
  for (r %= t, n && (s += r); s > r && e[s % t].skip; ) s--;
  return (s %= t), { start: r, end: s };
}
function o2(e, t, n, i) {
  const r = e.length,
    s = [];
  let o = t,
    a = e[t],
    l;
  for (l = t + 1; l <= n; ++l) {
    const u = e[l % r];
    u.skip || u.stop
      ? a.skip ||
        ((i = !1),
        s.push({ start: t % r, end: (l - 1) % r, loop: i }),
        (t = o = u.stop ? l : null))
      : ((o = l), a.skip && (t = l)),
      (a = u);
  }
  return o !== null && s.push({ start: t % r, end: o % r, loop: i }), s;
}
function a2(e, t) {
  const n = e.points,
    i = e.options.spanGaps,
    r = n.length;
  if (!r) return [];
  const s = !!e._loop,
    { start: o, end: a } = s2(n, r, s, i);
  if (i === !0) return zf(e, [{ start: o, end: a, loop: s }], n, t);
  const l = a < o ? a + r : a,
    u = !!e._fullLoop && o === 0 && a === r - 1;
  return zf(e, o2(n, o, l, u), n, t);
}
function zf(e, t, n, i) {
  return !i || !i.setContext || !n ? t : l2(e, t, n, i);
}
function l2(e, t, n, i) {
  const r = e._chart.getContext(),
    s = Bf(e.options),
    {
      _datasetIndex: o,
      options: { spanGaps: a },
    } = e,
    l = n.length,
    u = [];
  let c = s,
    d = t[0].start,
    h = d;
  function f(p, y, w, m) {
    const v = a ? -1 : 1;
    if (p !== y) {
      for (p += l; n[p % l].skip; ) p -= v;
      for (; n[y % l].skip; ) y += v;
      p % l !== y % l &&
        (u.push({ start: p % l, end: y % l, loop: w, style: m }),
        (c = m),
        (d = y % l));
    }
  }
  for (const p of t) {
    d = a ? d : p.start;
    let y = n[d % l],
      w;
    for (h = d + 1; h <= p.end; h++) {
      const m = n[h % l];
      (w = Bf(
        i.setContext(
          Bn(r, {
            type: "segment",
            p0: y,
            p1: m,
            p0DataIndex: (h - 1) % l,
            p1DataIndex: h % l,
            datasetIndex: o,
          })
        )
      )),
        u2(w, c) && f(d, h - 1, p.loop, c),
        (y = m),
        (c = w);
    }
    d < h - 1 && f(d, h - 1, p.loop, c);
  }
  return u;
}
function Bf(e) {
  return {
    backgroundColor: e.backgroundColor,
    borderCapStyle: e.borderCapStyle,
    borderDash: e.borderDash,
    borderDashOffset: e.borderDashOffset,
    borderJoinStyle: e.borderJoinStyle,
    borderWidth: e.borderWidth,
    borderColor: e.borderColor,
  };
}
function u2(e, t) {
  if (!t) return !1;
  const n = [],
    i = function (r, s) {
      return Ed(s) ? (n.includes(s) || n.push(s), n.indexOf(s)) : s;
    };
  return JSON.stringify(e, i) !== JSON.stringify(t, i);
}
/*!
 * Chart.js v4.4.1
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */ class c2 {
  constructor() {
    (this._request = null),
      (this._charts = new Map()),
      (this._running = !1),
      (this._lastDate = void 0);
  }
  _notify(t, n, i, r) {
    const s = n.listeners[r],
      o = n.duration;
    s.forEach((a) =>
      a({
        chart: t,
        initial: n.initial,
        numSteps: o,
        currentStep: Math.min(i - n.start, o),
      })
    );
  }
  _refresh() {
    this._request ||
      ((this._running = !0),
      (this._request = X0.call(window, () => {
        this._update(),
          (this._request = null),
          this._running && this._refresh();
      })));
  }
  _update(t = Date.now()) {
    let n = 0;
    this._charts.forEach((i, r) => {
      if (!i.running || !i.items.length) return;
      const s = i.items;
      let o = s.length - 1,
        a = !1,
        l;
      for (; o >= 0; --o)
        (l = s[o]),
          l._active
            ? (l._total > i.duration && (i.duration = l._total),
              l.tick(t),
              (a = !0))
            : ((s[o] = s[s.length - 1]), s.pop());
      a && (r.draw(), this._notify(r, i, t, "progress")),
        s.length ||
          ((i.running = !1),
          this._notify(r, i, t, "complete"),
          (i.initial = !1)),
        (n += s.length);
    }),
      (this._lastDate = t),
      n === 0 && (this._running = !1);
  }
  _getAnims(t) {
    const n = this._charts;
    let i = n.get(t);
    return (
      i ||
        ((i = {
          running: !1,
          initial: !0,
          items: [],
          listeners: { complete: [], progress: [] },
        }),
        n.set(t, i)),
      i
    );
  }
  listen(t, n, i) {
    this._getAnims(t).listeners[n].push(i);
  }
  add(t, n) {
    !n || !n.length || this._getAnims(t).items.push(...n);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const n = this._charts.get(t);
    n &&
      ((n.running = !0),
      (n.start = Date.now()),
      (n.duration = n.items.reduce((i, r) => Math.max(i, r._duration), 0)),
      this._refresh());
  }
  running(t) {
    if (!this._running) return !1;
    const n = this._charts.get(t);
    return !(!n || !n.running || !n.items.length);
  }
  stop(t) {
    const n = this._charts.get(t);
    if (!n || !n.items.length) return;
    const i = n.items;
    let r = i.length - 1;
    for (; r >= 0; --r) i[r].cancel();
    (n.items = []), this._notify(t, n, Date.now(), "complete");
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var Ut = new c2();
const Wf = "transparent",
  d2 = {
    boolean(e, t, n) {
      return n > 0.5 ? t : e;
    },
    color(e, t, n) {
      const i = Rf(e || Wf),
        r = i.valid && Rf(t || Wf);
      return r && r.valid ? r.mix(i, n).hexString() : t;
    },
    number(e, t, n) {
      return e + (t - e) * n;
    },
  };
class h2 {
  constructor(t, n, i, r) {
    const s = n[i];
    r = qs([t.to, r, s, t.from]);
    const o = qs([t.from, s, r]);
    (this._active = !0),
      (this._fn = t.fn || d2[t.type || typeof o]),
      (this._easing = Wr[t.easing] || Wr.linear),
      (this._start = Math.floor(Date.now() + (t.delay || 0))),
      (this._duration = this._total = Math.floor(t.duration)),
      (this._loop = !!t.loop),
      (this._target = n),
      (this._prop = i),
      (this._from = o),
      (this._to = r),
      (this._promises = void 0);
  }
  active() {
    return this._active;
  }
  update(t, n, i) {
    if (this._active) {
      this._notify(!1);
      const r = this._target[this._prop],
        s = i - this._start,
        o = this._duration - s;
      (this._start = i),
        (this._duration = Math.floor(Math.max(o, t.duration))),
        (this._total += s),
        (this._loop = !!t.loop),
        (this._to = qs([t.to, n, r, t.from])),
        (this._from = qs([t.from, r, n]));
    }
  }
  cancel() {
    this._active &&
      (this.tick(Date.now()), (this._active = !1), this._notify(!1));
  }
  tick(t) {
    const n = t - this._start,
      i = this._duration,
      r = this._prop,
      s = this._from,
      o = this._loop,
      a = this._to;
    let l;
    if (((this._active = s !== a && (o || n < i)), !this._active)) {
      (this._target[r] = a), this._notify(!0);
      return;
    }
    if (n < 0) {
      this._target[r] = s;
      return;
    }
    (l = (n / i) % 2),
      (l = o && l > 1 ? 2 - l : l),
      (l = this._easing(Math.min(1, Math.max(0, l)))),
      (this._target[r] = this._fn(s, a, l));
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((n, i) => {
      t.push({ res: n, rej: i });
    });
  }
  _notify(t) {
    const n = t ? "res" : "rej",
      i = this._promises || [];
    for (let r = 0; r < i.length; r++) i[r][n]();
  }
}
class sy {
  constructor(t, n) {
    (this._chart = t), (this._properties = new Map()), this.configure(n);
  }
  configure(t) {
    if (!G(t)) return;
    const n = Object.keys(me.animation),
      i = this._properties;
    Object.getOwnPropertyNames(t).forEach((r) => {
      const s = t[r];
      if (!G(s)) return;
      const o = {};
      for (const a of n) o[a] = s[a];
      ((he(s.properties) && s.properties) || [r]).forEach((a) => {
        (a === r || !i.has(a)) && i.set(a, o);
      });
    });
  }
  _animateOptions(t, n) {
    const i = n.options,
      r = p2(t, i);
    if (!r) return [];
    const s = this._createAnimations(r, i);
    return (
      i.$shared &&
        f2(t.options.$animations, i).then(
          () => {
            t.options = i;
          },
          () => {}
        ),
      s
    );
  }
  _createAnimations(t, n) {
    const i = this._properties,
      r = [],
      s = t.$animations || (t.$animations = {}),
      o = Object.keys(n),
      a = Date.now();
    let l;
    for (l = o.length - 1; l >= 0; --l) {
      const u = o[l];
      if (u.charAt(0) === "$") continue;
      if (u === "options") {
        r.push(...this._animateOptions(t, n));
        continue;
      }
      const c = n[u];
      let d = s[u];
      const h = i.get(u);
      if (d)
        if (h && d.active()) {
          d.update(h, c, a);
          continue;
        } else d.cancel();
      if (!h || !h.duration) {
        t[u] = c;
        continue;
      }
      (s[u] = d = new h2(h, t, u, c)), r.push(d);
    }
    return r;
  }
  update(t, n) {
    if (this._properties.size === 0) {
      Object.assign(t, n);
      return;
    }
    const i = this._createAnimations(t, n);
    if (i.length) return Ut.add(this._chart, i), !0;
  }
}
function f2(e, t) {
  const n = [],
    i = Object.keys(t);
  for (let r = 0; r < i.length; r++) {
    const s = e[i[r]];
    s && s.active() && n.push(s.wait());
  }
  return Promise.all(n);
}
function p2(e, t) {
  if (!t) return;
  let n = e.options;
  if (!n) {
    e.options = t;
    return;
  }
  return (
    n.$shared &&
      (e.options = n = Object.assign({}, n, { $shared: !1, $animations: {} })),
    n
  );
}
function $f(e, t) {
  const n = (e && e.options) || {},
    i = n.reverse,
    r = n.min === void 0 ? t : 0,
    s = n.max === void 0 ? t : 0;
  return { start: i ? s : r, end: i ? r : s };
}
function g2(e, t, n) {
  if (n === !1) return !1;
  const i = $f(e, n),
    r = $f(t, n);
  return { top: r.end, right: i.end, bottom: r.start, left: i.start };
}
function m2(e) {
  let t, n, i, r;
  return (
    G(e)
      ? ((t = e.top), (n = e.right), (i = e.bottom), (r = e.left))
      : (t = n = i = r = e),
    { top: t, right: n, bottom: i, left: r, disabled: e === !1 }
  );
}
function oy(e, t) {
  const n = [],
    i = e._getSortedDatasetMetas(t);
  let r, s;
  for (r = 0, s = i.length; r < s; ++r) n.push(i[r].index);
  return n;
}
function Hf(e, t, n, i = {}) {
  const r = e.keys,
    s = i.mode === "single";
  let o, a, l, u;
  if (t !== null) {
    for (o = 0, a = r.length; o < a; ++o) {
      if (((l = +r[o]), l === n)) {
        if (i.all) continue;
        break;
      }
      (u = e.values[l]), Re(u) && (s || t === 0 || Gi(t) === Gi(u)) && (t += u);
    }
    return t;
  }
}
function y2(e) {
  const t = Object.keys(e),
    n = new Array(t.length);
  let i, r, s;
  for (i = 0, r = t.length; i < r; ++i) (s = t[i]), (n[i] = { x: s, y: e[s] });
  return n;
}
function Uf(e, t) {
  const n = e && e.options.stacked;
  return n || (n === void 0 && t.stack !== void 0);
}
function v2(e, t, n) {
  return `${e.id}.${t.id}.${n.stack || n.type}`;
}
function x2(e) {
  const { min: t, max: n, minDefined: i, maxDefined: r } = e.getUserBounds();
  return {
    min: i ? t : Number.NEGATIVE_INFINITY,
    max: r ? n : Number.POSITIVE_INFINITY,
  };
}
function w2(e, t, n) {
  const i = e[t] || (e[t] = {});
  return i[n] || (i[n] = {});
}
function Vf(e, t, n, i) {
  for (const r of t.getMatchingVisibleMetas(i).reverse()) {
    const s = e[r.index];
    if ((n && s > 0) || (!n && s < 0)) return r.index;
  }
  return null;
}
function Yf(e, t) {
  const { chart: n, _cachedMeta: i } = e,
    r = n._stacks || (n._stacks = {}),
    { iScale: s, vScale: o, index: a } = i,
    l = s.axis,
    u = o.axis,
    c = v2(s, o, i),
    d = t.length;
  let h;
  for (let f = 0; f < d; ++f) {
    const p = t[f],
      { [l]: y, [u]: w } = p,
      m = p._stacks || (p._stacks = {});
    (h = m[u] = w2(r, c, y)),
      (h[a] = w),
      (h._top = Vf(h, o, !0, i.type)),
      (h._bottom = Vf(h, o, !1, i.type));
    const v = h._visualValues || (h._visualValues = {});
    v[a] = w;
  }
}
function Fl(e, t) {
  const n = e.scales;
  return Object.keys(n)
    .filter((i) => n[i].axis === t)
    .shift();
}
function _2(e, t) {
  return Bn(e, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset",
  });
}
function S2(e, t, n) {
  return Bn(e, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: n,
    index: t,
    mode: "default",
    type: "data",
  });
}
function gr(e, t) {
  const n = e.controller.index,
    i = e.vScale && e.vScale.axis;
  if (i) {
    t = t || e._parsed;
    for (const r of t) {
      const s = r._stacks;
      if (!s || s[i] === void 0 || s[i][n] === void 0) return;
      delete s[i][n],
        s[i]._visualValues !== void 0 &&
          s[i]._visualValues[n] !== void 0 &&
          delete s[i]._visualValues[n];
    }
  }
}
const zl = (e) => e === "reset" || e === "none",
  Xf = (e, t) => (t ? e : Object.assign({}, e)),
  b2 = (e, t, n) =>
    e && !t.hidden && t._stacked && { keys: oy(n, !0), values: null };
class Hr {
  constructor(t, n) {
    (this.chart = t),
      (this._ctx = t.ctx),
      (this.index = n),
      (this._cachedDataOpts = {}),
      (this._cachedMeta = this.getMeta()),
      (this._type = this._cachedMeta.type),
      (this.options = void 0),
      (this._parsing = !1),
      (this._data = void 0),
      (this._objectData = void 0),
      (this._sharedOptions = void 0),
      (this._drawStart = void 0),
      (this._drawCount = void 0),
      (this.enableOptionSharing = !1),
      (this.supportsDecimation = !1),
      (this.$context = void 0),
      (this._syncList = []),
      (this.datasetElementType = new.target.datasetElementType),
      (this.dataElementType = new.target.dataElementType),
      this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(),
      this.linkScales(),
      (t._stacked = Uf(t.vScale, t)),
      this.addElements(),
      this.options.fill &&
        !this.chart.isPluginEnabled("filler") &&
        console.warn(
          "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options"
        );
  }
  updateIndex(t) {
    this.index !== t && gr(this._cachedMeta), (this.index = t);
  }
  linkScales() {
    const t = this.chart,
      n = this._cachedMeta,
      i = this.getDataset(),
      r = (d, h, f, p) => (d === "x" ? h : d === "r" ? p : f),
      s = (n.xAxisID = $(i.xAxisID, Fl(t, "x"))),
      o = (n.yAxisID = $(i.yAxisID, Fl(t, "y"))),
      a = (n.rAxisID = $(i.rAxisID, Fl(t, "r"))),
      l = n.indexAxis,
      u = (n.iAxisID = r(l, s, o, a)),
      c = (n.vAxisID = r(l, o, s, a));
    (n.xScale = this.getScaleForId(s)),
      (n.yScale = this.getScaleForId(o)),
      (n.rScale = this.getScaleForId(a)),
      (n.iScale = this.getScaleForId(u)),
      (n.vScale = this.getScaleForId(c));
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const n = this._cachedMeta;
    return t === n.iScale ? n.vScale : n.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const t = this._cachedMeta;
    this._data && Pf(this._data, this), t._stacked && gr(t);
  }
  _dataCheck() {
    const t = this.getDataset(),
      n = t.data || (t.data = []),
      i = this._data;
    if (G(n)) this._data = y2(n);
    else if (i !== n) {
      if (i) {
        Pf(i, this);
        const r = this._cachedMeta;
        gr(r), (r._parsed = []);
      }
      n && Object.isExtensible(n) && rk(n, this),
        (this._syncList = []),
        (this._data = n);
    }
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(),
      this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const n = this._cachedMeta,
      i = this.getDataset();
    let r = !1;
    this._dataCheck();
    const s = n._stacked;
    (n._stacked = Uf(n.vScale, n)),
      n.stack !== i.stack && ((r = !0), gr(n), (n.stack = i.stack)),
      this._resyncElements(t),
      (r || s !== n._stacked) && Yf(this, n._parsed);
  }
  configure() {
    const t = this.chart.config,
      n = t.datasetScopeKeys(this._type),
      i = t.getOptionScopes(this.getDataset(), n, !0);
    (this.options = t.createResolver(i, this.getContext())),
      (this._parsing = this.options.parsing),
      (this._cachedDataOpts = {});
  }
  parse(t, n) {
    const { _cachedMeta: i, _data: r } = this,
      { iScale: s, _stacked: o } = i,
      a = s.axis;
    let l = t === 0 && n === r.length ? !0 : i._sorted,
      u = t > 0 && i._parsed[t - 1],
      c,
      d,
      h;
    if (this._parsing === !1) (i._parsed = r), (i._sorted = !0), (h = r);
    else {
      he(r[t])
        ? (h = this.parseArrayData(i, r, t, n))
        : G(r[t])
        ? (h = this.parseObjectData(i, r, t, n))
        : (h = this.parsePrimitiveData(i, r, t, n));
      const f = () => d[a] === null || (u && d[a] < u[a]);
      for (c = 0; c < n; ++c)
        (i._parsed[c + t] = d = h[c]), l && (f() && (l = !1), (u = d));
      i._sorted = l;
    }
    o && Yf(this, h);
  }
  parsePrimitiveData(t, n, i, r) {
    const { iScale: s, vScale: o } = t,
      a = s.axis,
      l = o.axis,
      u = s.getLabels(),
      c = s === o,
      d = new Array(r);
    let h, f, p;
    for (h = 0, f = r; h < f; ++h)
      (p = h + i),
        (d[h] = { [a]: c || s.parse(u[p], p), [l]: o.parse(n[p], p) });
    return d;
  }
  parseArrayData(t, n, i, r) {
    const { xScale: s, yScale: o } = t,
      a = new Array(r);
    let l, u, c, d;
    for (l = 0, u = r; l < u; ++l)
      (c = l + i),
        (d = n[c]),
        (a[l] = { x: s.parse(d[0], c), y: o.parse(d[1], c) });
    return a;
  }
  parseObjectData(t, n, i, r) {
    const { xScale: s, yScale: o } = t,
      { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing,
      u = new Array(r);
    let c, d, h, f;
    for (c = 0, d = r; c < d; ++c)
      (h = c + i),
        (f = n[h]),
        (u[c] = { x: s.parse(hs(f, a), h), y: o.parse(hs(f, l), h) });
    return u;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, n, i) {
    const r = this.chart,
      s = this._cachedMeta,
      o = n[t.axis],
      a = { keys: oy(r, !0), values: n._stacks[t.axis]._visualValues };
    return Hf(a, o, s.index, { mode: i });
  }
  updateRangeFromParsed(t, n, i, r) {
    const s = i[n.axis];
    let o = s === null ? NaN : s;
    const a = r && i._stacks[n.axis];
    r && a && ((r.values = a), (o = Hf(r, s, this._cachedMeta.index))),
      (t.min = Math.min(t.min, o)),
      (t.max = Math.max(t.max, o));
  }
  getMinMax(t, n) {
    const i = this._cachedMeta,
      r = i._parsed,
      s = i._sorted && t === i.iScale,
      o = r.length,
      a = this._getOtherScale(t),
      l = b2(n, i, this.chart),
      u = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
      { min: c, max: d } = x2(a);
    let h, f;
    function p() {
      f = r[h];
      const y = f[a.axis];
      return !Re(f[t.axis]) || c > y || d < y;
    }
    for (
      h = 0;
      h < o && !(!p() && (this.updateRangeFromParsed(u, t, f, l), s));
      ++h
    );
    if (s) {
      for (h = o - 1; h >= 0; --h)
        if (!p()) {
          this.updateRangeFromParsed(u, t, f, l);
          break;
        }
    }
    return u;
  }
  getAllParsedValues(t) {
    const n = this._cachedMeta._parsed,
      i = [];
    let r, s, o;
    for (r = 0, s = n.length; r < s; ++r)
      (o = n[r][t.axis]), Re(o) && i.push(o);
    return i;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta,
      i = n.iScale,
      r = n.vScale,
      s = this.getParsed(t);
    return {
      label: i ? "" + i.getLabelForValue(s[i.axis]) : "",
      value: r ? "" + r.getLabelForValue(s[r.axis]) : "",
    };
  }
  _update(t) {
    const n = this._cachedMeta;
    this.update(t || "default"),
      (n._clip = m2(
        $(this.options.clip, g2(n.xScale, n.yScale, this.getMaxOverflow()))
      ));
  }
  update(t) {}
  draw() {
    const t = this._ctx,
      n = this.chart,
      i = this._cachedMeta,
      r = i.data || [],
      s = n.chartArea,
      o = [],
      a = this._drawStart || 0,
      l = this._drawCount || r.length - a,
      u = this.options.drawActiveElementsOnTop;
    let c;
    for (i.dataset && i.dataset.draw(t, s, a, l), c = a; c < a + l; ++c) {
      const d = r[c];
      d.hidden || (d.active && u ? o.push(d) : d.draw(t, s));
    }
    for (c = 0; c < o.length; ++c) o[c].draw(t, s);
  }
  getStyle(t, n) {
    const i = n ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(i)
      : this.resolveDataElementOptions(t || 0, i);
  }
  getContext(t, n, i) {
    const r = this.getDataset();
    let s;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const o = this._cachedMeta.data[t];
      (s = o.$context || (o.$context = S2(this.getContext(), t, o))),
        (s.parsed = this.getParsed(t)),
        (s.raw = r.data[t]),
        (s.index = s.dataIndex = t);
    } else
      (s =
        this.$context ||
        (this.$context = _2(this.chart.getContext(), this.index))),
        (s.dataset = r),
        (s.index = s.datasetIndex = this.index);
    return (s.active = !!n), (s.mode = i), s;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, n) {
    return this._resolveElementOptions(this.dataElementType.id, n, t);
  }
  _resolveElementOptions(t, n = "default", i) {
    const r = n === "active",
      s = this._cachedDataOpts,
      o = t + "-" + n,
      a = s[o],
      l = this.enableOptionSharing && ha(i);
    if (a) return Xf(a, l);
    const u = this.chart.config,
      c = u.datasetElementScopeKeys(this._type, t),
      d = r ? [`${t}Hover`, "hover", t, ""] : [t, ""],
      h = u.getOptionScopes(this.getDataset(), c),
      f = Object.keys(me.elements[t]),
      p = () => this.getContext(i, r, n),
      y = u.resolveNamedOptions(h, f, p, d);
    return y.$shared && ((y.$shared = l), (s[o] = Object.freeze(Xf(y, l)))), y;
  }
  _resolveAnimations(t, n, i) {
    const r = this.chart,
      s = this._cachedDataOpts,
      o = `animation-${n}`,
      a = s[o];
    if (a) return a;
    let l;
    if (r.options.animation !== !1) {
      const c = this.chart.config,
        d = c.datasetAnimationScopeKeys(this._type, n),
        h = c.getOptionScopes(this.getDataset(), d);
      l = c.createResolver(h, this.getContext(t, i, n));
    }
    const u = new sy(r, l && l.animations);
    return l && l._cacheable && (s[o] = Object.freeze(u)), u;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return (
        this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
      );
  }
  includeOptions(t, n) {
    return !n || zl(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, n) {
    const i = this.resolveDataElementOptions(t, n),
      r = this._sharedOptions,
      s = this.getSharedOptions(i),
      o = this.includeOptions(n, s) || s !== r;
    return (
      this.updateSharedOptions(s, n, i), { sharedOptions: s, includeOptions: o }
    );
  }
  updateElement(t, n, i, r) {
    zl(r) ? Object.assign(t, i) : this._resolveAnimations(n, r).update(t, i);
  }
  updateSharedOptions(t, n, i) {
    t && !zl(n) && this._resolveAnimations(void 0, n).update(t, i);
  }
  _setStyle(t, n, i, r) {
    t.active = r;
    const s = this.getStyle(n, r);
    this._resolveAnimations(n, i, r).update(t, {
      options: (!r && this.getSharedOptions(s)) || s,
    });
  }
  removeHoverStyle(t, n, i) {
    this._setStyle(t, i, "active", !1);
  }
  setHoverStyle(t, n, i) {
    this._setStyle(t, i, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !0);
  }
  _resyncElements(t) {
    const n = this._data,
      i = this._cachedMeta.data;
    for (const [a, l, u] of this._syncList) this[a](l, u);
    this._syncList = [];
    const r = i.length,
      s = n.length,
      o = Math.min(s, r);
    o && this.parse(0, o),
      s > r
        ? this._insertElements(r, s - r, t)
        : s < r && this._removeElements(s, r - s);
  }
  _insertElements(t, n, i = !0) {
    const r = this._cachedMeta,
      s = r.data,
      o = t + n;
    let a;
    const l = (u) => {
      for (u.length += n, a = u.length - 1; a >= o; a--) u[a] = u[a - n];
    };
    for (l(s), a = t; a < o; ++a) s[a] = new this.dataElementType();
    this._parsing && l(r._parsed),
      this.parse(t, n),
      i && this.updateElements(s, t, n, "reset");
  }
  updateElements(t, n, i, r) {}
  _removeElements(t, n) {
    const i = this._cachedMeta;
    if (this._parsing) {
      const r = i._parsed.splice(t, n);
      i._stacked && gr(i, r);
    }
    i.data.splice(t, n);
  }
  _sync(t) {
    if (this._parsing) this._syncList.push(t);
    else {
      const [n, i, r] = t;
      this[n](i, r);
    }
    this.chart._dataChanges.push([this.index, ...t]);
  }
  _onDataPush() {
    const t = arguments.length;
    this._sync(["_insertElements", this.getDataset().data.length - t, t]);
  }
  _onDataPop() {
    this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
  }
  _onDataShift() {
    this._sync(["_removeElements", 0, 1]);
  }
  _onDataSplice(t, n) {
    n && this._sync(["_removeElements", t, n]);
    const i = arguments.length - 2;
    i && this._sync(["_insertElements", t, i]);
  }
  _onDataUnshift() {
    this._sync(["_insertElements", 0, arguments.length]);
  }
}
A(Hr, "defaults", {}),
  A(Hr, "datasetElementType", null),
  A(Hr, "dataElementType", null);
function k2(e, t, n) {
  let i = 1,
    r = 1,
    s = 0,
    o = 0;
  if (t < le) {
    const a = e,
      l = a + t,
      u = Math.cos(a),
      c = Math.sin(a),
      d = Math.cos(l),
      h = Math.sin(l),
      f = (x, _, S) => (fs(x, a, l, !0) ? 1 : Math.max(_, _ * n, S, S * n)),
      p = (x, _, S) => (fs(x, a, l, !0) ? -1 : Math.min(_, _ * n, S, S * n)),
      y = f(0, u, d),
      w = f(we, c, h),
      m = p(ue, u, d),
      v = p(ue + we, c, h);
    (i = (y - m) / 2),
      (r = (w - v) / 2),
      (s = -(y + m) / 2),
      (o = -(w + v) / 2);
  }
  return { ratioX: i, ratioY: r, offsetX: s, offsetY: o };
}
class Cr extends Hr {
  constructor(t, n) {
    super(t, n),
      (this.enableOptionSharing = !0),
      (this.innerRadius = void 0),
      (this.outerRadius = void 0),
      (this.offsetX = void 0),
      (this.offsetY = void 0);
  }
  linkScales() {}
  parse(t, n) {
    const i = this.getDataset().data,
      r = this._cachedMeta;
    if (this._parsing === !1) r._parsed = i;
    else {
      let s = (l) => +i[l];
      if (G(i[t])) {
        const { key: l = "value" } = this._parsing;
        s = (u) => +hs(i[u], l);
      }
      let o, a;
      for (o = t, a = t + n; o < a; ++o) r._parsed[o] = s(o);
    }
  }
  _getRotation() {
    return Ft(this.options.rotation - 90);
  }
  _getCircumference() {
    return Ft(this.options.circumference);
  }
  _getRotationExtents() {
    let t = le,
      n = -le;
    for (let i = 0; i < this.chart.data.datasets.length; ++i)
      if (
        this.chart.isDatasetVisible(i) &&
        this.chart.getDatasetMeta(i).type === this._type
      ) {
        const r = this.chart.getDatasetMeta(i).controller,
          s = r._getRotation(),
          o = r._getCircumference();
        (t = Math.min(t, s)), (n = Math.max(n, s + o));
      }
    return { rotation: t, circumference: n - t };
  }
  update(t) {
    const n = this.chart,
      { chartArea: i } = n,
      r = this._cachedMeta,
      s = r.data,
      o =
        this.getMaxBorderWidth() + this.getMaxOffset(s) + this.options.spacing,
      a = Math.max((Math.min(i.width, i.height) - o) / 2, 0),
      l = Math.min(Ub(this.options.cutout, a), 1),
      u = this._getRingWeight(this.index),
      { circumference: c, rotation: d } = this._getRotationExtents(),
      { ratioX: h, ratioY: f, offsetX: p, offsetY: y } = k2(d, c, l),
      w = (i.width - o) / h,
      m = (i.height - o) / f,
      v = Math.max(Math.min(w, m) / 2, 0),
      x = $0(this.options.radius, v),
      _ = Math.max(x * l, 0),
      S = (x - _) / this._getVisibleDatasetWeightTotal();
    (this.offsetX = p * x),
      (this.offsetY = y * x),
      (r.total = this.calculateTotal()),
      (this.outerRadius = x - S * this._getRingWeightOffset(this.index)),
      (this.innerRadius = Math.max(this.outerRadius - S * u, 0)),
      this.updateElements(s, 0, s.length, t);
  }
  _circumference(t, n) {
    const i = this.options,
      r = this._cachedMeta,
      s = this._getCircumference();
    return (n && i.animation.animateRotate) ||
      !this.chart.getDataVisibility(t) ||
      r._parsed[t] === null ||
      r.data[t].hidden
      ? 0
      : this.calculateCircumference((r._parsed[t] * s) / le);
  }
  updateElements(t, n, i, r) {
    const s = r === "reset",
      o = this.chart,
      a = o.chartArea,
      u = o.options.animation,
      c = (a.left + a.right) / 2,
      d = (a.top + a.bottom) / 2,
      h = s && u.animateScale,
      f = h ? 0 : this.innerRadius,
      p = h ? 0 : this.outerRadius,
      { sharedOptions: y, includeOptions: w } = this._getSharedOptions(n, r);
    let m = this._getRotation(),
      v;
    for (v = 0; v < n; ++v) m += this._circumference(v, s);
    for (v = n; v < n + i; ++v) {
      const x = this._circumference(v, s),
        _ = t[v],
        S = {
          x: c + this.offsetX,
          y: d + this.offsetY,
          startAngle: m,
          endAngle: m + x,
          circumference: x,
          outerRadius: p,
          innerRadius: f,
        };
      w &&
        (S.options =
          y || this.resolveDataElementOptions(v, _.active ? "active" : r)),
        (m += x),
        this.updateElement(_, v, S, r);
    }
  }
  calculateTotal() {
    const t = this._cachedMeta,
      n = t.data;
    let i = 0,
      r;
    for (r = 0; r < n.length; r++) {
      const s = t._parsed[r];
      s !== null &&
        !isNaN(s) &&
        this.chart.getDataVisibility(r) &&
        !n[r].hidden &&
        (i += Math.abs(s));
    }
    return i;
  }
  calculateCircumference(t) {
    const n = this._cachedMeta.total;
    return n > 0 && !isNaN(t) ? le * (Math.abs(t) / n) : 0;
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta,
      i = this.chart,
      r = i.data.labels || [],
      s = Qa(n._parsed[t], i.options.locale);
    return { label: r[t] || "", value: s };
  }
  getMaxBorderWidth(t) {
    let n = 0;
    const i = this.chart;
    let r, s, o, a, l;
    if (!t) {
      for (r = 0, s = i.data.datasets.length; r < s; ++r)
        if (i.isDatasetVisible(r)) {
          (o = i.getDatasetMeta(r)), (t = o.data), (a = o.controller);
          break;
        }
    }
    if (!t) return 0;
    for (r = 0, s = t.length; r < s; ++r)
      (l = a.resolveDataElementOptions(r)),
        l.borderAlign !== "inner" &&
          (n = Math.max(n, l.borderWidth || 0, l.hoverBorderWidth || 0));
    return n;
  }
  getMaxOffset(t) {
    let n = 0;
    for (let i = 0, r = t.length; i < r; ++i) {
      const s = this.resolveDataElementOptions(i);
      n = Math.max(n, s.offset || 0, s.hoverOffset || 0);
    }
    return n;
  }
  _getRingWeightOffset(t) {
    let n = 0;
    for (let i = 0; i < t; ++i)
      this.chart.isDatasetVisible(i) && (n += this._getRingWeight(i));
    return n;
  }
  _getRingWeight(t) {
    return Math.max($(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
A(Cr, "id", "doughnut"),
  A(Cr, "defaults", {
    datasetElementType: !1,
    dataElementType: "arc",
    animation: { animateRotate: !0, animateScale: !1 },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "circumference",
          "endAngle",
          "innerRadius",
          "outerRadius",
          "startAngle",
          "x",
          "y",
          "offset",
          "borderWidth",
          "spacing",
        ],
      },
    },
    cutout: "50%",
    rotation: 0,
    circumference: 360,
    radius: "100%",
    spacing: 0,
    indexAxis: "r",
  }),
  A(Cr, "descriptors", {
    _scriptable: (t) => t !== "spacing",
    _indexable: (t) =>
      t !== "spacing" &&
      !t.startsWith("borderDash") &&
      !t.startsWith("hoverBorderDash"),
  }),
  A(Cr, "overrides", {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels(t) {
            const n = t.data;
            if (n.labels.length && n.datasets.length) {
              const {
                labels: { pointStyle: i, color: r },
              } = t.legend.options;
              return n.labels.map((s, o) => {
                const l = t.getDatasetMeta(0).controller.getStyle(o);
                return {
                  text: s,
                  fillStyle: l.backgroundColor,
                  strokeStyle: l.borderColor,
                  fontColor: r,
                  lineWidth: l.borderWidth,
                  pointStyle: i,
                  hidden: !t.getDataVisibility(o),
                  index: o,
                };
              });
            }
            return [];
          },
        },
        onClick(t, n, i) {
          i.chart.toggleDataVisibility(n.index), i.chart.update();
        },
      },
    },
  });
function Vn() {
  throw new Error(
    "This method is not implemented: Check that a complete date adapter is provided."
  );
}
class Id {
  constructor(t) {
    A(this, "options");
    this.options = t || {};
  }
  static override(t) {
    Object.assign(Id.prototype, t);
  }
  init() {}
  formats() {
    return Vn();
  }
  parse() {
    return Vn();
  }
  format() {
    return Vn();
  }
  add() {
    return Vn();
  }
  diff() {
    return Vn();
  }
  startOf() {
    return Vn();
  }
  endOf() {
    return Vn();
  }
}
var C2 = { _date: Id };
function T2(e, t, n, i) {
  const { controller: r, data: s, _sorted: o } = e,
    a = r._cachedMeta.iScale;
  if (a && t === a.axis && t !== "r" && o && s.length) {
    const l = a._reversePixels ? nk : Qu;
    if (i) {
      if (r._sharedOptions) {
        const u = s[0],
          c = typeof u.getRange == "function" && u.getRange(t);
        if (c) {
          const d = l(s, t, n - c),
            h = l(s, t, n + c);
          return { lo: d.lo, hi: h.hi };
        }
      }
    } else return l(s, t, n);
  }
  return { lo: 0, hi: s.length - 1 };
}
function Cs(e, t, n, i, r) {
  const s = e.getSortedVisibleDatasetMetas(),
    o = n[t];
  for (let a = 0, l = s.length; a < l; ++a) {
    const { index: u, data: c } = s[a],
      { lo: d, hi: h } = T2(s[a], t, o, r);
    for (let f = d; f <= h; ++f) {
      const p = c[f];
      p.skip || i(p, u, f);
    }
  }
}
function E2(e) {
  const t = e.indexOf("x") !== -1,
    n = e.indexOf("y") !== -1;
  return function (i, r) {
    const s = t ? Math.abs(i.x - r.x) : 0,
      o = n ? Math.abs(i.y - r.y) : 0;
    return Math.sqrt(Math.pow(s, 2) + Math.pow(o, 2));
  };
}
function Bl(e, t, n, i, r) {
  const s = [];
  return (
    (!r && !e.isPointInArea(t)) ||
      Cs(
        e,
        n,
        t,
        function (a, l, u) {
          (!r && !qt(a, e.chartArea, 0)) ||
            (a.inRange(t.x, t.y, i) &&
              s.push({ element: a, datasetIndex: l, index: u }));
        },
        !0
      ),
    s
  );
}
function P2(e, t, n, i) {
  let r = [];
  function s(o, a, l) {
    const { startAngle: u, endAngle: c } = o.getProps(
        ["startAngle", "endAngle"],
        i
      ),
      { angle: d } = V0(o, { x: t.x, y: t.y });
    fs(d, u, c) && r.push({ element: o, datasetIndex: a, index: l });
  }
  return Cs(e, n, t, s), r;
}
function M2(e, t, n, i, r, s) {
  let o = [];
  const a = E2(n);
  let l = Number.POSITIVE_INFINITY;
  function u(c, d, h) {
    const f = c.inRange(t.x, t.y, r);
    if (i && !f) return;
    const p = c.getCenterPoint(r);
    if (!(!!s || e.isPointInArea(p)) && !f) return;
    const w = a(t, p);
    w < l
      ? ((o = [{ element: c, datasetIndex: d, index: h }]), (l = w))
      : w === l && o.push({ element: c, datasetIndex: d, index: h });
  }
  return Cs(e, n, t, u), o;
}
function Wl(e, t, n, i, r, s) {
  return !s && !e.isPointInArea(t)
    ? []
    : n === "r" && !i
    ? P2(e, t, n, r)
    : M2(e, t, n, i, r, s);
}
function Kf(e, t, n, i, r) {
  const s = [],
    o = n === "x" ? "inXRange" : "inYRange";
  let a = !1;
  return (
    Cs(e, n, t, (l, u, c) => {
      l[o](t[n], r) &&
        (s.push({ element: l, datasetIndex: u, index: c }),
        (a = a || l.inRange(t.x, t.y, r)));
    }),
    i && !a ? [] : s
  );
}
var O2 = {
  evaluateInteractionItems: Cs,
  modes: {
    index(e, t, n, i) {
      const r = Gn(t, e),
        s = n.axis || "x",
        o = n.includeInvisible || !1,
        a = n.intersect ? Bl(e, r, s, i, o) : Wl(e, r, s, !1, i, o),
        l = [];
      return a.length
        ? (e.getSortedVisibleDatasetMetas().forEach((u) => {
            const c = a[0].index,
              d = u.data[c];
            d &&
              !d.skip &&
              l.push({ element: d, datasetIndex: u.index, index: c });
          }),
          l)
        : [];
    },
    dataset(e, t, n, i) {
      const r = Gn(t, e),
        s = n.axis || "xy",
        o = n.includeInvisible || !1;
      let a = n.intersect ? Bl(e, r, s, i, o) : Wl(e, r, s, !1, i, o);
      if (a.length > 0) {
        const l = a[0].datasetIndex,
          u = e.getDatasetMeta(l).data;
        a = [];
        for (let c = 0; c < u.length; ++c)
          a.push({ element: u[c], datasetIndex: l, index: c });
      }
      return a;
    },
    point(e, t, n, i) {
      const r = Gn(t, e),
        s = n.axis || "xy",
        o = n.includeInvisible || !1;
      return Bl(e, r, s, i, o);
    },
    nearest(e, t, n, i) {
      const r = Gn(t, e),
        s = n.axis || "xy",
        o = n.includeInvisible || !1;
      return Wl(e, r, s, n.intersect, i, o);
    },
    x(e, t, n, i) {
      const r = Gn(t, e);
      return Kf(e, r, "x", n.intersect, i);
    },
    y(e, t, n, i) {
      const r = Gn(t, e);
      return Kf(e, r, "y", n.intersect, i);
    },
  },
};
const ay = ["left", "top", "right", "bottom"];
function mr(e, t) {
  return e.filter((n) => n.pos === t);
}
function Gf(e, t) {
  return e.filter((n) => ay.indexOf(n.pos) === -1 && n.box.axis === t);
}
function yr(e, t) {
  return e.sort((n, i) => {
    const r = t ? i : n,
      s = t ? n : i;
    return r.weight === s.weight ? r.index - s.index : r.weight - s.weight;
  });
}
function R2(e) {
  const t = [];
  let n, i, r, s, o, a;
  for (n = 0, i = (e || []).length; n < i; ++n)
    (r = e[n]),
      ({
        position: s,
        options: { stack: o, stackWeight: a = 1 },
      } = r),
      t.push({
        index: n,
        box: r,
        pos: s,
        horizontal: r.isHorizontal(),
        weight: r.weight,
        stack: o && s + o,
        stackWeight: a,
      });
  return t;
}
function j2(e) {
  const t = {};
  for (const n of e) {
    const { stack: i, pos: r, stackWeight: s } = n;
    if (!i || !ay.includes(r)) continue;
    const o = t[i] || (t[i] = { count: 0, placed: 0, weight: 0, size: 0 });
    o.count++, (o.weight += s);
  }
  return t;
}
function L2(e, t) {
  const n = j2(e),
    { vBoxMaxWidth: i, hBoxMaxHeight: r } = t;
  let s, o, a;
  for (s = 0, o = e.length; s < o; ++s) {
    a = e[s];
    const { fullSize: l } = a.box,
      u = n[a.stack],
      c = u && a.stackWeight / u.weight;
    a.horizontal
      ? ((a.width = c ? c * i : l && t.availableWidth), (a.height = r))
      : ((a.width = i), (a.height = c ? c * r : l && t.availableHeight));
  }
  return n;
}
function A2(e) {
  const t = R2(e),
    n = yr(
      t.filter((u) => u.box.fullSize),
      !0
    ),
    i = yr(mr(t, "left"), !0),
    r = yr(mr(t, "right")),
    s = yr(mr(t, "top"), !0),
    o = yr(mr(t, "bottom")),
    a = Gf(t, "x"),
    l = Gf(t, "y");
  return {
    fullSize: n,
    leftAndTop: i.concat(s),
    rightAndBottom: r.concat(l).concat(o).concat(a),
    chartArea: mr(t, "chartArea"),
    vertical: i.concat(r).concat(l),
    horizontal: s.concat(o).concat(a),
  };
}
function Qf(e, t, n, i) {
  return Math.max(e[n], t[n]) + Math.max(e[i], t[i]);
}
function ly(e, t) {
  (e.top = Math.max(e.top, t.top)),
    (e.left = Math.max(e.left, t.left)),
    (e.bottom = Math.max(e.bottom, t.bottom)),
    (e.right = Math.max(e.right, t.right));
}
function D2(e, t, n, i) {
  const { pos: r, box: s } = n,
    o = e.maxPadding;
  if (!G(r)) {
    n.size && (e[r] -= n.size);
    const d = i[n.stack] || { size: 0, count: 1 };
    (d.size = Math.max(d.size, n.horizontal ? s.height : s.width)),
      (n.size = d.size / d.count),
      (e[r] += n.size);
  }
  s.getPadding && ly(o, s.getPadding());
  const a = Math.max(0, t.outerWidth - Qf(o, e, "left", "right")),
    l = Math.max(0, t.outerHeight - Qf(o, e, "top", "bottom")),
    u = a !== e.w,
    c = l !== e.h;
  return (
    (e.w = a),
    (e.h = l),
    n.horizontal ? { same: u, other: c } : { same: c, other: u }
  );
}
function I2(e) {
  const t = e.maxPadding;
  function n(i) {
    const r = Math.max(t[i] - e[i], 0);
    return (e[i] += r), r;
  }
  (e.y += n("top")), (e.x += n("left")), n("right"), n("bottom");
}
function N2(e, t) {
  const n = t.maxPadding;
  function i(r) {
    const s = { left: 0, top: 0, right: 0, bottom: 0 };
    return (
      r.forEach((o) => {
        s[o] = Math.max(t[o], n[o]);
      }),
      s
    );
  }
  return i(e ? ["left", "right"] : ["top", "bottom"]);
}
function Tr(e, t, n, i) {
  const r = [];
  let s, o, a, l, u, c;
  for (s = 0, o = e.length, u = 0; s < o; ++s) {
    (a = e[s]),
      (l = a.box),
      l.update(a.width || t.w, a.height || t.h, N2(a.horizontal, t));
    const { same: d, other: h } = D2(t, n, a, i);
    (u |= d && r.length), (c = c || h), l.fullSize || r.push(a);
  }
  return (u && Tr(r, t, n, i)) || c;
}
function eo(e, t, n, i, r) {
  (e.top = n),
    (e.left = t),
    (e.right = t + i),
    (e.bottom = n + r),
    (e.width = i),
    (e.height = r);
}
function qf(e, t, n, i) {
  const r = n.padding;
  let { x: s, y: o } = t;
  for (const a of e) {
    const l = a.box,
      u = i[a.stack] || { count: 1, placed: 0, weight: 1 },
      c = a.stackWeight / u.weight || 1;
    if (a.horizontal) {
      const d = t.w * c,
        h = u.size || l.height;
      ha(u.start) && (o = u.start),
        l.fullSize
          ? eo(l, r.left, o, n.outerWidth - r.right - r.left, h)
          : eo(l, t.left + u.placed, o, d, h),
        (u.start = o),
        (u.placed += d),
        (o = l.bottom);
    } else {
      const d = t.h * c,
        h = u.size || l.width;
      ha(u.start) && (s = u.start),
        l.fullSize
          ? eo(l, s, r.top, h, n.outerHeight - r.bottom - r.top)
          : eo(l, s, t.top + u.placed, h, d),
        (u.start = s),
        (u.placed += d),
        (s = l.right);
    }
  }
  (t.x = s), (t.y = o);
}
var mt = {
  addBox(e, t) {
    e.boxes || (e.boxes = []),
      (t.fullSize = t.fullSize || !1),
      (t.position = t.position || "top"),
      (t.weight = t.weight || 0),
      (t._layers =
        t._layers ||
        function () {
          return [
            {
              z: 0,
              draw(n) {
                t.draw(n);
              },
            },
          ];
        }),
      e.boxes.push(t);
  },
  removeBox(e, t) {
    const n = e.boxes ? e.boxes.indexOf(t) : -1;
    n !== -1 && e.boxes.splice(n, 1);
  },
  configure(e, t, n) {
    (t.fullSize = n.fullSize), (t.position = n.position), (t.weight = n.weight);
  },
  update(e, t, n, i) {
    if (!e) return;
    const r = He(e.options.layout.padding),
      s = Math.max(t - r.width, 0),
      o = Math.max(n - r.height, 0),
      a = A2(e.boxes),
      l = a.vertical,
      u = a.horizontal;
    ee(e.boxes, (y) => {
      typeof y.beforeLayout == "function" && y.beforeLayout();
    });
    const c =
        l.reduce(
          (y, w) => (w.box.options && w.box.options.display === !1 ? y : y + 1),
          0
        ) || 1,
      d = Object.freeze({
        outerWidth: t,
        outerHeight: n,
        padding: r,
        availableWidth: s,
        availableHeight: o,
        vBoxMaxWidth: s / 2 / c,
        hBoxMaxHeight: o / 2,
      }),
      h = Object.assign({}, r);
    ly(h, He(i));
    const f = Object.assign(
        { maxPadding: h, w: s, h: o, x: r.left, y: r.top },
        r
      ),
      p = L2(l.concat(u), d);
    Tr(a.fullSize, f, d, p),
      Tr(l, f, d, p),
      Tr(u, f, d, p) && Tr(l, f, d, p),
      I2(f),
      qf(a.leftAndTop, f, d, p),
      (f.x += f.w),
      (f.y += f.h),
      qf(a.rightAndBottom, f, d, p),
      (e.chartArea = {
        left: f.left,
        top: f.top,
        right: f.left + f.w,
        bottom: f.top + f.h,
        height: f.h,
        width: f.w,
      }),
      ee(a.chartArea, (y) => {
        const w = y.box;
        Object.assign(w, e.chartArea),
          w.update(f.w, f.h, { left: 0, top: 0, right: 0, bottom: 0 });
      });
  },
};
class uy {
  acquireContext(t, n) {}
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, n, i) {}
  removeEventListener(t, n, i) {}
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, n, i, r) {
    return (
      (n = Math.max(0, n || t.width)),
      (i = i || t.height),
      { width: n, height: Math.max(0, r ? Math.floor(n / r) : i) }
    );
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {}
}
class F2 extends uy {
  acquireContext(t) {
    return (t && t.getContext && t.getContext("2d")) || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const Po = "$chartjs",
  z2 = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout",
  },
  Jf = (e) => e === null || e === "";
function B2(e, t) {
  const n = e.style,
    i = e.getAttribute("height"),
    r = e.getAttribute("width");
  if (
    ((e[Po] = {
      initial: {
        height: i,
        width: r,
        style: { display: n.display, height: n.height, width: n.width },
      },
    }),
    (n.display = n.display || "block"),
    (n.boxSizing = n.boxSizing || "border-box"),
    Jf(r))
  ) {
    const s = Nf(e, "width");
    s !== void 0 && (e.width = s);
  }
  if (Jf(i))
    if (e.style.height === "") e.height = e.width / (t || 2);
    else {
      const s = Nf(e, "height");
      s !== void 0 && (e.height = s);
    }
  return e;
}
const cy = qk ? { passive: !0 } : !1;
function W2(e, t, n) {
  e.addEventListener(t, n, cy);
}
function $2(e, t, n) {
  e.canvas.removeEventListener(t, n, cy);
}
function H2(e, t) {
  const n = z2[e.type] || e.type,
    { x: i, y: r } = Gn(e, t);
  return {
    type: n,
    chart: t,
    native: e,
    x: i !== void 0 ? i : null,
    y: r !== void 0 ? r : null,
  };
}
function va(e, t) {
  for (const n of e) if (n === t || n.contains(t)) return !0;
}
function U2(e, t, n) {
  const i = e.canvas,
    r = new MutationObserver((s) => {
      let o = !1;
      for (const a of s)
        (o = o || va(a.addedNodes, i)), (o = o && !va(a.removedNodes, i));
      o && n();
    });
  return r.observe(document, { childList: !0, subtree: !0 }), r;
}
function V2(e, t, n) {
  const i = e.canvas,
    r = new MutationObserver((s) => {
      let o = !1;
      for (const a of s)
        (o = o || va(a.removedNodes, i)), (o = o && !va(a.addedNodes, i));
      o && n();
    });
  return r.observe(document, { childList: !0, subtree: !0 }), r;
}
const ps = new Map();
let Zf = 0;
function dy() {
  const e = window.devicePixelRatio;
  e !== Zf &&
    ((Zf = e),
    ps.forEach((t, n) => {
      n.currentDevicePixelRatio !== e && t();
    }));
}
function Y2(e, t) {
  ps.size || window.addEventListener("resize", dy), ps.set(e, t);
}
function X2(e) {
  ps.delete(e), ps.size || window.removeEventListener("resize", dy);
}
function K2(e, t, n) {
  const i = e.canvas,
    r = i && Dd(i);
  if (!r) return;
  const s = K0((a, l) => {
      const u = r.clientWidth;
      n(a, l), u < r.clientWidth && n();
    }, window),
    o = new ResizeObserver((a) => {
      const l = a[0],
        u = l.contentRect.width,
        c = l.contentRect.height;
      (u === 0 && c === 0) || s(u, c);
    });
  return o.observe(r), Y2(e, s), o;
}
function $l(e, t, n) {
  n && n.disconnect(), t === "resize" && X2(e);
}
function G2(e, t, n) {
  const i = e.canvas,
    r = K0((s) => {
      e.ctx !== null && n(H2(s, e));
    }, e);
  return W2(i, t, r), r;
}
class Q2 extends uy {
  acquireContext(t, n) {
    const i = t && t.getContext && t.getContext("2d");
    return i && i.canvas === t ? (B2(t, n), i) : null;
  }
  releaseContext(t) {
    const n = t.canvas;
    if (!n[Po]) return !1;
    const i = n[Po].initial;
    ["height", "width"].forEach((s) => {
      const o = i[s];
      ae(o) ? n.removeAttribute(s) : n.setAttribute(s, o);
    });
    const r = i.style || {};
    return (
      Object.keys(r).forEach((s) => {
        n.style[s] = r[s];
      }),
      (n.width = n.width),
      delete n[Po],
      !0
    );
  }
  addEventListener(t, n, i) {
    this.removeEventListener(t, n);
    const r = t.$proxies || (t.$proxies = {}),
      o = { attach: U2, detach: V2, resize: K2 }[n] || G2;
    r[n] = o(t, n, i);
  }
  removeEventListener(t, n) {
    const i = t.$proxies || (t.$proxies = {}),
      r = i[n];
    if (!r) return;
    (({ attach: $l, detach: $l, resize: $l })[n] || $2)(t, n, r),
      (i[n] = void 0);
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, n, i, r) {
    return Qk(t, n, i, r);
  }
  isAttached(t) {
    const n = Dd(t);
    return !!(n && n.isConnected);
  }
}
function q2(e) {
  return !Ad() || (typeof OffscreenCanvas < "u" && e instanceof OffscreenCanvas)
    ? F2
    : Q2;
}
var lo;
let Wn =
  ((lo = class {
    constructor() {
      A(this, "x");
      A(this, "y");
      A(this, "active", !1);
      A(this, "options");
      A(this, "$animations");
    }
    tooltipPosition(t) {
      const { x: n, y: i } = this.getProps(["x", "y"], t);
      return { x: n, y: i };
    }
    hasValue() {
      return pa(this.x) && pa(this.y);
    }
    getProps(t, n) {
      const i = this.$animations;
      if (!n || !i) return this;
      const r = {};
      return (
        t.forEach((s) => {
          r[s] = i[s] && i[s].active() ? i[s]._to : this[s];
        }),
        r
      );
    }
  }),
  A(lo, "defaults", {}),
  A(lo, "defaultRoutes"),
  lo);
function J2(e, t) {
  const n = e.options.ticks,
    i = Z2(e),
    r = Math.min(n.maxTicksLimit || i, i),
    s = n.major.enabled ? tC(t) : [],
    o = s.length,
    a = s[0],
    l = s[o - 1],
    u = [];
  if (o > r) return nC(t, u, s, o / r), u;
  const c = eC(s, t, r);
  if (o > 0) {
    let d, h;
    const f = o > 1 ? Math.round((l - a) / (o - 1)) : null;
    for (to(t, u, c, ae(f) ? 0 : a - f, a), d = 0, h = o - 1; d < h; d++)
      to(t, u, c, s[d], s[d + 1]);
    return to(t, u, c, l, ae(f) ? t.length : l + f), u;
  }
  return to(t, u, c), u;
}
function Z2(e) {
  const t = e.options.offset,
    n = e._tickSize(),
    i = e._length / n + (t ? 0 : 1),
    r = e._maxLength / n;
  return Math.floor(Math.min(i, r));
}
function eC(e, t, n) {
  const i = iC(e),
    r = t.length / n;
  if (!i) return Math.max(r, 1);
  const s = Jb(i);
  for (let o = 0, a = s.length - 1; o < a; o++) {
    const l = s[o];
    if (l > r) return l;
  }
  return Math.max(r, 1);
}
function tC(e) {
  const t = [];
  let n, i;
  for (n = 0, i = e.length; n < i; n++) e[n].major && t.push(n);
  return t;
}
function nC(e, t, n, i) {
  let r = 0,
    s = n[0],
    o;
  for (i = Math.ceil(i), o = 0; o < e.length; o++)
    o === s && (t.push(e[o]), r++, (s = n[r * i]));
}
function to(e, t, n, i, r) {
  const s = $(i, 0),
    o = Math.min($(r, e.length), e.length);
  let a = 0,
    l,
    u,
    c;
  for (
    n = Math.ceil(n), r && ((l = r - i), (n = l / Math.floor(l / n))), c = s;
    c < 0;

  )
    a++, (c = Math.round(s + a * n));
  for (u = Math.max(s, 0); u < o; u++)
    u === c && (t.push(e[u]), a++, (c = Math.round(s + a * n)));
}
function iC(e) {
  const t = e.length;
  let n, i;
  if (t < 2) return !1;
  for (i = e[0], n = 1; n < t; ++n) if (e[n] - e[n - 1] !== i) return !1;
  return i;
}
const rC = (e) => (e === "left" ? "right" : e === "right" ? "left" : e),
  ep = (e, t, n) => (t === "top" || t === "left" ? e[t] + n : e[t] - n),
  tp = (e, t) => Math.min(t || e, e);
function np(e, t) {
  const n = [],
    i = e.length / t,
    r = e.length;
  let s = 0;
  for (; s < r; s += i) n.push(e[Math.floor(s)]);
  return n;
}
function sC(e, t, n) {
  const i = e.ticks.length,
    r = Math.min(t, i - 1),
    s = e._startPixel,
    o = e._endPixel,
    a = 1e-6;
  let l = e.getPixelForTick(r),
    u;
  if (
    !(
      n &&
      (i === 1
        ? (u = Math.max(l - s, o - l))
        : t === 0
        ? (u = (e.getPixelForTick(1) - l) / 2)
        : (u = (l - e.getPixelForTick(r - 1)) / 2),
      (l += r < t ? u : -u),
      l < s - a || l > o + a)
    )
  )
    return l;
}
function oC(e, t) {
  ee(e, (n) => {
    const i = n.gc,
      r = i.length / 2;
    let s;
    if (r > t) {
      for (s = 0; s < r; ++s) delete n.data[i[s]];
      i.splice(0, r);
    }
  });
}
function vr(e) {
  return e.drawTicks ? e.tickLength : 0;
}
function ip(e, t) {
  if (!e.display) return 0;
  const n = Pe(e.font, t),
    i = He(e.padding);
  return (he(e.text) ? e.text.length : 1) * n.lineHeight + i.height;
}
function aC(e, t) {
  return Bn(e, { scale: t, type: "scale" });
}
function lC(e, t, n) {
  return Bn(e, { tick: n, index: t, type: "tick" });
}
function uC(e, t, n) {
  let i = Td(e);
  return ((n && t !== "right") || (!n && t === "right")) && (i = rC(i)), i;
}
function cC(e, t, n, i) {
  const { top: r, left: s, bottom: o, right: a, chart: l } = e,
    { chartArea: u, scales: c } = l;
  let d = 0,
    h,
    f,
    p;
  const y = o - r,
    w = a - s;
  if (e.isHorizontal()) {
    if (((f = Be(i, s, a)), G(n))) {
      const m = Object.keys(n)[0],
        v = n[m];
      p = c[m].getPixelForValue(v) + y - t;
    } else
      n === "center" ? (p = (u.bottom + u.top) / 2 + y - t) : (p = ep(e, n, t));
    h = a - s;
  } else {
    if (G(n)) {
      const m = Object.keys(n)[0],
        v = n[m];
      f = c[m].getPixelForValue(v) - w + t;
    } else
      n === "center" ? (f = (u.left + u.right) / 2 - w + t) : (f = ep(e, n, t));
    (p = Be(i, o, r)), (d = n === "left" ? -we : we);
  }
  return { titleX: f, titleY: p, maxWidth: h, rotation: d };
}
class gi extends Wn {
  constructor(t) {
    super(),
      (this.id = t.id),
      (this.type = t.type),
      (this.options = void 0),
      (this.ctx = t.ctx),
      (this.chart = t.chart),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
      (this.maxWidth = void 0),
      (this.maxHeight = void 0),
      (this.paddingTop = void 0),
      (this.paddingBottom = void 0),
      (this.paddingLeft = void 0),
      (this.paddingRight = void 0),
      (this.axis = void 0),
      (this.labelRotation = void 0),
      (this.min = void 0),
      (this.max = void 0),
      (this._range = void 0),
      (this.ticks = []),
      (this._gridLineItems = null),
      (this._labelItems = null),
      (this._labelSizes = null),
      (this._length = 0),
      (this._maxLength = 0),
      (this._longestTextCache = {}),
      (this._startPixel = void 0),
      (this._endPixel = void 0),
      (this._reversePixels = !1),
      (this._userMax = void 0),
      (this._userMin = void 0),
      (this._suggestedMax = void 0),
      (this._suggestedMin = void 0),
      (this._ticksLength = 0),
      (this._borderValue = 0),
      (this._cache = {}),
      (this._dataLimitsCached = !1),
      (this.$context = void 0);
  }
  init(t) {
    (this.options = t.setContext(this.getContext())),
      (this.axis = t.axis),
      (this._userMin = this.parse(t.min)),
      (this._userMax = this.parse(t.max)),
      (this._suggestedMin = this.parse(t.suggestedMin)),
      (this._suggestedMax = this.parse(t.suggestedMax));
  }
  parse(t, n) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: n, _suggestedMin: i, _suggestedMax: r } = this;
    return (
      (t = it(t, Number.POSITIVE_INFINITY)),
      (n = it(n, Number.NEGATIVE_INFINITY)),
      (i = it(i, Number.POSITIVE_INFINITY)),
      (r = it(r, Number.NEGATIVE_INFINITY)),
      { min: it(t, i), max: it(n, r), minDefined: Re(t), maxDefined: Re(n) }
    );
  }
  getMinMax(t) {
    let { min: n, max: i, minDefined: r, maxDefined: s } = this.getUserBounds(),
      o;
    if (r && s) return { min: n, max: i };
    const a = this.getMatchingVisibleMetas();
    for (let l = 0, u = a.length; l < u; ++l)
      (o = a[l].controller.getMinMax(this, t)),
        r || (n = Math.min(n, o.min)),
        s || (i = Math.max(i, o.max));
    return (
      (n = s && n > i ? i : n),
      (i = r && n > i ? n : i),
      { min: it(n, it(i, n)), max: it(i, it(n, i)) }
    );
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0,
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return (
      this.options.labels ||
      (this.isHorizontal() ? t.xLabels : t.yLabels) ||
      t.labels ||
      []
    );
  }
  getLabelItems(t = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(t));
  }
  beforeLayout() {
    (this._cache = {}), (this._dataLimitsCached = !1);
  }
  beforeUpdate() {
    ne(this.options.beforeUpdate, [this]);
  }
  update(t, n, i) {
    const { beginAtZero: r, grace: s, ticks: o } = this.options,
      a = o.sampleSize;
    this.beforeUpdate(),
      (this.maxWidth = t),
      (this.maxHeight = n),
      (this._margins = i =
        Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, i)),
      (this.ticks = null),
      (this._labelSizes = null),
      (this._gridLineItems = null),
      (this._labelItems = null),
      this.beforeSetDimensions(),
      this.setDimensions(),
      this.afterSetDimensions(),
      (this._maxLength = this.isHorizontal()
        ? this.width + i.left + i.right
        : this.height + i.top + i.bottom),
      this._dataLimitsCached ||
        (this.beforeDataLimits(),
        this.determineDataLimits(),
        this.afterDataLimits(),
        (this._range = Pk(this, s, r)),
        (this._dataLimitsCached = !0)),
      this.beforeBuildTicks(),
      (this.ticks = this.buildTicks() || []),
      this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? np(this.ticks, a) : this.ticks),
      this.configure(),
      this.beforeCalculateLabelRotation(),
      this.calculateLabelRotation(),
      this.afterCalculateLabelRotation(),
      o.display &&
        (o.autoSkip || o.source === "auto") &&
        ((this.ticks = J2(this, this.ticks)),
        (this._labelSizes = null),
        this.afterAutoSkip()),
      l && this._convertTicksToLabels(this.ticks),
      this.beforeFit(),
      this.fit(),
      this.afterFit(),
      this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse,
      n,
      i;
    this.isHorizontal()
      ? ((n = this.left), (i = this.right))
      : ((n = this.top), (i = this.bottom), (t = !t)),
      (this._startPixel = n),
      (this._endPixel = i),
      (this._reversePixels = t),
      (this._length = i - n),
      (this._alignToPixels = this.options.alignToPixels);
  }
  afterUpdate() {
    ne(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    ne(this.options.beforeSetDimensions, [this]);
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = 0),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = 0),
        (this.bottom = this.height)),
      (this.paddingLeft = 0),
      (this.paddingTop = 0),
      (this.paddingRight = 0),
      (this.paddingBottom = 0);
  }
  afterSetDimensions() {
    ne(this.options.afterSetDimensions, [this]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), ne(this.options[t], [this]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    ne(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(t) {
    const n = this.options.ticks;
    let i, r, s;
    for (i = 0, r = t.length; i < r; i++)
      (s = t[i]), (s.label = ne(n.callback, [s.value, i, t], this));
  }
  afterTickToLabelConversion() {
    ne(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    ne(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const t = this.options,
      n = t.ticks,
      i = tp(this.ticks.length, t.ticks.maxTicksLimit),
      r = n.minRotation || 0,
      s = n.maxRotation;
    let o = r,
      a,
      l,
      u;
    if (
      !this._isVisible() ||
      !n.display ||
      r >= s ||
      i <= 1 ||
      !this.isHorizontal()
    ) {
      this.labelRotation = r;
      return;
    }
    const c = this._getLabelSizes(),
      d = c.widest.width,
      h = c.highest.height,
      f = at(this.chart.width - d, 0, this.maxWidth);
    (a = t.offset ? this.maxWidth / i : f / (i - 1)),
      d + 6 > a &&
        ((a = f / (i - (t.offset ? 0.5 : 1))),
        (l =
          this.maxHeight -
          vr(t.grid) -
          n.padding -
          ip(t.title, this.chart.options.font)),
        (u = Math.sqrt(d * d + h * h)),
        (o = kd(
          Math.min(
            Math.asin(at((c.highest.height + 6) / a, -1, 1)),
            Math.asin(at(l / u, -1, 1)) - Math.asin(at(h / u, -1, 1))
          )
        )),
        (o = Math.max(r, Math.min(s, o)))),
      (this.labelRotation = o);
  }
  afterCalculateLabelRotation() {
    ne(this.options.afterCalculateLabelRotation, [this]);
  }
  afterAutoSkip() {}
  beforeFit() {
    ne(this.options.beforeFit, [this]);
  }
  fit() {
    const t = { width: 0, height: 0 },
      {
        chart: n,
        options: { ticks: i, title: r, grid: s },
      } = this,
      o = this._isVisible(),
      a = this.isHorizontal();
    if (o) {
      const l = ip(r, n.options.font);
      if (
        (a
          ? ((t.width = this.maxWidth), (t.height = vr(s) + l))
          : ((t.height = this.maxHeight), (t.width = vr(s) + l)),
        i.display && this.ticks.length)
      ) {
        const {
            first: u,
            last: c,
            widest: d,
            highest: h,
          } = this._getLabelSizes(),
          f = i.padding * 2,
          p = Ft(this.labelRotation),
          y = Math.cos(p),
          w = Math.sin(p);
        if (a) {
          const m = i.mirror ? 0 : w * d.width + y * h.height;
          t.height = Math.min(this.maxHeight, t.height + m + f);
        } else {
          const m = i.mirror ? 0 : y * d.width + w * h.height;
          t.width = Math.min(this.maxWidth, t.width + m + f);
        }
        this._calculatePadding(u, c, w, y);
      }
    }
    this._handleMargins(),
      a
        ? ((this.width = this._length =
            n.width - this._margins.left - this._margins.right),
          (this.height = t.height))
        : ((this.width = t.width),
          (this.height = this._length =
            n.height - this._margins.top - this._margins.bottom));
  }
  _calculatePadding(t, n, i, r) {
    const {
        ticks: { align: s, padding: o },
        position: a,
      } = this.options,
      l = this.labelRotation !== 0,
      u = a !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const c = this.getPixelForTick(0) - this.left,
        d = this.right - this.getPixelForTick(this.ticks.length - 1);
      let h = 0,
        f = 0;
      l
        ? u
          ? ((h = r * t.width), (f = i * n.height))
          : ((h = i * t.height), (f = r * n.width))
        : s === "start"
        ? (f = n.width)
        : s === "end"
        ? (h = t.width)
        : s !== "inner" && ((h = t.width / 2), (f = n.width / 2)),
        (this.paddingLeft = Math.max(
          ((h - c + o) * this.width) / (this.width - c),
          0
        )),
        (this.paddingRight = Math.max(
          ((f - d + o) * this.width) / (this.width - d),
          0
        ));
    } else {
      let c = n.height / 2,
        d = t.height / 2;
      s === "start"
        ? ((c = 0), (d = t.height))
        : s === "end" && ((c = n.height), (d = 0)),
        (this.paddingTop = c + o),
        (this.paddingBottom = d + o);
    }
  }
  _handleMargins() {
    this._margins &&
      ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
      (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
      (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
      (this._margins.bottom = Math.max(
        this.paddingBottom,
        this._margins.bottom
      )));
  }
  afterFit() {
    ne(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const { axis: t, position: n } = this.options;
    return n === "top" || n === "bottom" || t === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t);
    let n, i;
    for (n = 0, i = t.length; n < i; n++)
      ae(t[n].label) && (t.splice(n, 1), i--, n--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const n = this.options.ticks.sampleSize;
      let i = this.ticks;
      n < i.length && (i = np(i, n)),
        (this._labelSizes = t =
          this._computeLabelSizes(
            i,
            i.length,
            this.options.ticks.maxTicksLimit
          ));
    }
    return t;
  }
  _computeLabelSizes(t, n, i) {
    const { ctx: r, _longestTextCache: s } = this,
      o = [],
      a = [],
      l = Math.floor(n / tp(n, i));
    let u = 0,
      c = 0,
      d,
      h,
      f,
      p,
      y,
      w,
      m,
      v,
      x,
      _,
      S;
    for (d = 0; d < n; d += l) {
      if (
        ((p = t[d].label),
        (y = this._resolveTickFontOptions(d)),
        (r.font = w = y.string),
        (m = s[w] = s[w] || { data: {}, gc: [] }),
        (v = y.lineHeight),
        (x = _ = 0),
        !ae(p) && !he(p))
      )
        (x = ga(r, m.data, m.gc, x, p)), (_ = v);
      else if (he(p))
        for (h = 0, f = p.length; h < f; ++h)
          (S = p[h]),
            !ae(S) && !he(S) && ((x = ga(r, m.data, m.gc, x, S)), (_ += v));
      o.push(x), a.push(_), (u = Math.max(x, u)), (c = Math.max(_, c));
    }
    oC(s, n);
    const k = o.indexOf(u),
      C = a.indexOf(c),
      T = (R) => ({ width: o[R] || 0, height: a[R] || 0 });
    return {
      first: T(0),
      last: T(n - 1),
      widest: T(k),
      highest: T(C),
      widths: o,
      heights: a,
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, n) {
    return NaN;
  }
  getValueForPixel(t) {}
  getPixelForTick(t) {
    const n = this.ticks;
    return t < 0 || t > n.length - 1 ? null : this.getPixelForValue(n[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const n = this._startPixel + t * this._length;
    return tk(this._alignToPixels ? Un(this.chart, n, 0) : n);
  }
  getDecimalForPixel(t) {
    const n = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - n : n;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: n } = this;
    return t < 0 && n < 0 ? n : t > 0 && n > 0 ? t : 0;
  }
  getContext(t) {
    const n = this.ticks || [];
    if (t >= 0 && t < n.length) {
      const i = n[t];
      return i.$context || (i.$context = lC(this.getContext(), t, i));
    }
    return this.$context || (this.$context = aC(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks,
      n = Ft(this.labelRotation),
      i = Math.abs(Math.cos(n)),
      r = Math.abs(Math.sin(n)),
      s = this._getLabelSizes(),
      o = t.autoSkipPadding || 0,
      a = s ? s.widest.width + o : 0,
      l = s ? s.highest.height + o : 0;
    return this.isHorizontal()
      ? l * i > a * r
        ? a / i
        : l / r
      : l * r < a * i
      ? l / i
      : a / r;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const n = this.axis,
      i = this.chart,
      r = this.options,
      { grid: s, position: o, border: a } = r,
      l = s.offset,
      u = this.isHorizontal(),
      d = this.ticks.length + (l ? 1 : 0),
      h = vr(s),
      f = [],
      p = a.setContext(this.getContext()),
      y = p.display ? p.width : 0,
      w = y / 2,
      m = function (X) {
        return Un(i, X, y);
      };
    let v, x, _, S, k, C, T, R, O, D, z, J;
    if (o === "top")
      (v = m(this.bottom)),
        (C = this.bottom - h),
        (R = v - w),
        (D = m(t.top) + w),
        (J = t.bottom);
    else if (o === "bottom")
      (v = m(this.top)),
        (D = t.top),
        (J = m(t.bottom) - w),
        (C = v + w),
        (R = this.top + h);
    else if (o === "left")
      (v = m(this.right)),
        (k = this.right - h),
        (T = v - w),
        (O = m(t.left) + w),
        (z = t.right);
    else if (o === "right")
      (v = m(this.left)),
        (O = t.left),
        (z = m(t.right) - w),
        (k = v + w),
        (T = this.left + h);
    else if (n === "x") {
      if (o === "center") v = m((t.top + t.bottom) / 2 + 0.5);
      else if (G(o)) {
        const X = Object.keys(o)[0],
          Q = o[X];
        v = m(this.chart.scales[X].getPixelForValue(Q));
      }
      (D = t.top), (J = t.bottom), (C = v + w), (R = C + h);
    } else if (n === "y") {
      if (o === "center") v = m((t.left + t.right) / 2);
      else if (G(o)) {
        const X = Object.keys(o)[0],
          Q = o[X];
        v = m(this.chart.scales[X].getPixelForValue(Q));
      }
      (k = v - w), (T = k - h), (O = t.left), (z = t.right);
    }
    const ye = $(r.ticks.maxTicksLimit, d),
      H = Math.max(1, Math.ceil(d / ye));
    for (x = 0; x < d; x += H) {
      const X = this.getContext(x),
        Q = s.setContext(X),
        M = a.setContext(X),
        L = Q.lineWidth,
        F = Q.color,
        q = M.dash || [],
        Z = M.dashOffset,
        Ge = Q.tickWidth,
        be = Q.tickColor,
        W = Q.tickBorderDash || [],
        B = Q.tickBorderDashOffset;
      (_ = sC(this, x, l)),
        _ !== void 0 &&
          ((S = Un(i, _, L)),
          u ? (k = T = O = z = S) : (C = R = D = J = S),
          f.push({
            tx1: k,
            ty1: C,
            tx2: T,
            ty2: R,
            x1: O,
            y1: D,
            x2: z,
            y2: J,
            width: L,
            color: F,
            borderDash: q,
            borderDashOffset: Z,
            tickWidth: Ge,
            tickColor: be,
            tickBorderDash: W,
            tickBorderDashOffset: B,
          }));
    }
    return (this._ticksLength = d), (this._borderValue = v), f;
  }
  _computeLabelItems(t) {
    const n = this.axis,
      i = this.options,
      { position: r, ticks: s } = i,
      o = this.isHorizontal(),
      a = this.ticks,
      { align: l, crossAlign: u, padding: c, mirror: d } = s,
      h = vr(i.grid),
      f = h + c,
      p = d ? -c : f,
      y = -Ft(this.labelRotation),
      w = [];
    let m,
      v,
      x,
      _,
      S,
      k,
      C,
      T,
      R,
      O,
      D,
      z,
      J = "middle";
    if (r === "top")
      (k = this.bottom - p), (C = this._getXAxisLabelAlignment());
    else if (r === "bottom")
      (k = this.top + p), (C = this._getXAxisLabelAlignment());
    else if (r === "left") {
      const H = this._getYAxisLabelAlignment(h);
      (C = H.textAlign), (S = H.x);
    } else if (r === "right") {
      const H = this._getYAxisLabelAlignment(h);
      (C = H.textAlign), (S = H.x);
    } else if (n === "x") {
      if (r === "center") k = (t.top + t.bottom) / 2 + f;
      else if (G(r)) {
        const H = Object.keys(r)[0],
          X = r[H];
        k = this.chart.scales[H].getPixelForValue(X) + f;
      }
      C = this._getXAxisLabelAlignment();
    } else if (n === "y") {
      if (r === "center") S = (t.left + t.right) / 2 - f;
      else if (G(r)) {
        const H = Object.keys(r)[0],
          X = r[H];
        S = this.chart.scales[H].getPixelForValue(X);
      }
      C = this._getYAxisLabelAlignment(h).textAlign;
    }
    n === "y" && (l === "start" ? (J = "top") : l === "end" && (J = "bottom"));
    const ye = this._getLabelSizes();
    for (m = 0, v = a.length; m < v; ++m) {
      (x = a[m]), (_ = x.label);
      const H = s.setContext(this.getContext(m));
      (T = this.getPixelForTick(m) + s.labelOffset),
        (R = this._resolveTickFontOptions(m)),
        (O = R.lineHeight),
        (D = he(_) ? _.length : 1);
      const X = D / 2,
        Q = H.color,
        M = H.textStrokeColor,
        L = H.textStrokeWidth;
      let F = C;
      o
        ? ((S = T),
          C === "inner" &&
            (m === v - 1
              ? (F = this.options.reverse ? "left" : "right")
              : m === 0
              ? (F = this.options.reverse ? "right" : "left")
              : (F = "center")),
          r === "top"
            ? u === "near" || y !== 0
              ? (z = -D * O + O / 2)
              : u === "center"
              ? (z = -ye.highest.height / 2 - X * O + O)
              : (z = -ye.highest.height + O / 2)
            : u === "near" || y !== 0
            ? (z = O / 2)
            : u === "center"
            ? (z = ye.highest.height / 2 - X * O)
            : (z = ye.highest.height - D * O),
          d && (z *= -1),
          y !== 0 && !H.showLabelBackdrop && (S += (O / 2) * Math.sin(y)))
        : ((k = T), (z = ((1 - D) * O) / 2));
      let q;
      if (H.showLabelBackdrop) {
        const Z = He(H.backdropPadding),
          Ge = ye.heights[m],
          be = ye.widths[m];
        let W = z - Z.top,
          B = 0 - Z.left;
        switch (J) {
          case "middle":
            W -= Ge / 2;
            break;
          case "bottom":
            W -= Ge;
            break;
        }
        switch (C) {
          case "center":
            B -= be / 2;
            break;
          case "right":
            B -= be;
            break;
          case "inner":
            m === v - 1 ? (B -= be) : m > 0 && (B -= be / 2);
            break;
        }
        q = {
          left: B,
          top: W,
          width: be + Z.width,
          height: Ge + Z.height,
          color: H.backdropColor,
        };
      }
      w.push({
        label: _,
        font: R,
        textOffset: z,
        options: {
          rotation: y,
          color: Q,
          strokeColor: M,
          strokeWidth: L,
          textAlign: F,
          textBaseline: J,
          translation: [S, k],
          backdrop: q,
        },
      });
    }
    return w;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: n } = this.options;
    if (-Ft(this.labelRotation)) return t === "top" ? "left" : "right";
    let r = "center";
    return (
      n.align === "start"
        ? (r = "left")
        : n.align === "end"
        ? (r = "right")
        : n.align === "inner" && (r = "inner"),
      r
    );
  }
  _getYAxisLabelAlignment(t) {
    const {
        position: n,
        ticks: { crossAlign: i, mirror: r, padding: s },
      } = this.options,
      o = this._getLabelSizes(),
      a = t + s,
      l = o.widest.width;
    let u, c;
    return (
      n === "left"
        ? r
          ? ((c = this.right + s),
            i === "near"
              ? (u = "left")
              : i === "center"
              ? ((u = "center"), (c += l / 2))
              : ((u = "right"), (c += l)))
          : ((c = this.right - a),
            i === "near"
              ? (u = "right")
              : i === "center"
              ? ((u = "center"), (c -= l / 2))
              : ((u = "left"), (c = this.left)))
        : n === "right"
        ? r
          ? ((c = this.left + s),
            i === "near"
              ? (u = "right")
              : i === "center"
              ? ((u = "center"), (c -= l / 2))
              : ((u = "left"), (c -= l)))
          : ((c = this.left + a),
            i === "near"
              ? (u = "left")
              : i === "center"
              ? ((u = "center"), (c += l / 2))
              : ((u = "right"), (c = this.right)))
        : (u = "right"),
      { textAlign: u, x: c }
    );
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) return;
    const t = this.chart,
      n = this.options.position;
    if (n === "left" || n === "right")
      return { top: 0, left: this.left, bottom: t.height, right: this.right };
    if (n === "top" || n === "bottom")
      return { top: this.top, left: 0, bottom: this.bottom, right: t.width };
  }
  drawBackground() {
    const {
      ctx: t,
      options: { backgroundColor: n },
      left: i,
      top: r,
      width: s,
      height: o,
    } = this;
    n && (t.save(), (t.fillStyle = n), t.fillRect(i, r, s, o), t.restore());
  }
  getLineWidthForValue(t) {
    const n = this.options.grid;
    if (!this._isVisible() || !n.display) return 0;
    const r = this.ticks.findIndex((s) => s.value === t);
    return r >= 0 ? n.setContext(this.getContext(r)).lineWidth : 0;
  }
  drawGrid(t) {
    const n = this.options.grid,
      i = this.ctx,
      r =
        this._gridLineItems ||
        (this._gridLineItems = this._computeGridLineItems(t));
    let s, o;
    const a = (l, u, c) => {
      !c.width ||
        !c.color ||
        (i.save(),
        (i.lineWidth = c.width),
        (i.strokeStyle = c.color),
        i.setLineDash(c.borderDash || []),
        (i.lineDashOffset = c.borderDashOffset),
        i.beginPath(),
        i.moveTo(l.x, l.y),
        i.lineTo(u.x, u.y),
        i.stroke(),
        i.restore());
    };
    if (n.display)
      for (s = 0, o = r.length; s < o; ++s) {
        const l = r[s];
        n.drawOnChartArea && a({ x: l.x1, y: l.y1 }, { x: l.x2, y: l.y2 }, l),
          n.drawTicks &&
            a(
              { x: l.tx1, y: l.ty1 },
              { x: l.tx2, y: l.ty2 },
              {
                color: l.tickColor,
                width: l.tickWidth,
                borderDash: l.tickBorderDash,
                borderDashOffset: l.tickBorderDashOffset,
              }
            );
      }
  }
  drawBorder() {
    const {
        chart: t,
        ctx: n,
        options: { border: i, grid: r },
      } = this,
      s = i.setContext(this.getContext()),
      o = i.display ? s.width : 0;
    if (!o) return;
    const a = r.setContext(this.getContext(0)).lineWidth,
      l = this._borderValue;
    let u, c, d, h;
    this.isHorizontal()
      ? ((u = Un(t, this.left, o) - o / 2),
        (c = Un(t, this.right, a) + a / 2),
        (d = h = l))
      : ((d = Un(t, this.top, o) - o / 2),
        (h = Un(t, this.bottom, a) + a / 2),
        (u = c = l)),
      n.save(),
      (n.lineWidth = s.width),
      (n.strokeStyle = s.color),
      n.beginPath(),
      n.moveTo(u, d),
      n.lineTo(c, h),
      n.stroke(),
      n.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display) return;
    const i = this.ctx,
      r = this._computeLabelArea();
    r && Pd(i, r);
    const s = this.getLabelItems(t);
    for (const o of s) {
      const a = o.options,
        l = o.font,
        u = o.label,
        c = o.textOffset;
      ui(i, u, 0, c, l, a);
    }
    r && Md(i);
  }
  drawTitle() {
    const {
      ctx: t,
      options: { position: n, title: i, reverse: r },
    } = this;
    if (!i.display) return;
    const s = Pe(i.font),
      o = He(i.padding),
      a = i.align;
    let l = s.lineHeight / 2;
    n === "bottom" || n === "center" || G(n)
      ? ((l += o.bottom),
        he(i.text) && (l += s.lineHeight * (i.text.length - 1)))
      : (l += o.top);
    const {
      titleX: u,
      titleY: c,
      maxWidth: d,
      rotation: h,
    } = cC(this, l, n, a);
    ui(t, i.text, 0, 0, s, {
      color: i.color,
      maxWidth: d,
      rotation: h,
      textAlign: uC(a, n, r),
      textBaseline: "middle",
      translation: [u, c],
    });
  }
  draw(t) {
    this._isVisible() &&
      (this.drawBackground(),
      this.drawGrid(t),
      this.drawBorder(),
      this.drawTitle(),
      this.drawLabels(t));
  }
  _layers() {
    const t = this.options,
      n = (t.ticks && t.ticks.z) || 0,
      i = $(t.grid && t.grid.z, -1),
      r = $(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== gi.prototype.draw
      ? [
          {
            z: n,
            draw: (s) => {
              this.draw(s);
            },
          },
        ]
      : [
          {
            z: i,
            draw: (s) => {
              this.drawBackground(), this.drawGrid(s), this.drawTitle();
            },
          },
          {
            z: r,
            draw: () => {
              this.drawBorder();
            },
          },
          {
            z: n,
            draw: (s) => {
              this.drawLabels(s);
            },
          },
        ];
  }
  getMatchingVisibleMetas(t) {
    const n = this.chart.getSortedVisibleDatasetMetas(),
      i = this.axis + "AxisID",
      r = [];
    let s, o;
    for (s = 0, o = n.length; s < o; ++s) {
      const a = n[s];
      a[i] === this.id && (!t || a.type === t) && r.push(a);
    }
    return r;
  }
  _resolveTickFontOptions(t) {
    const n = this.options.ticks.setContext(this.getContext(t));
    return Pe(n.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class no {
  constructor(t, n, i) {
    (this.type = t),
      (this.scope = n),
      (this.override = i),
      (this.items = Object.create(null));
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(
      this.type.prototype,
      t.prototype
    );
  }
  register(t) {
    const n = Object.getPrototypeOf(t);
    let i;
    fC(n) && (i = this.register(n));
    const r = this.items,
      s = t.id,
      o = this.scope + "." + s;
    if (!s) throw new Error("class does not have id: " + t);
    return (
      s in r ||
        ((r[s] = t),
        dC(t, o, i),
        this.override && me.override(t.id, t.overrides)),
      o
    );
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const n = this.items,
      i = t.id,
      r = this.scope;
    i in n && delete n[i],
      r && i in me[r] && (delete me[r][i], this.override && delete li[i]);
  }
}
function dC(e, t, n) {
  const i = ds(Object.create(null), [
    n ? me.get(n) : {},
    me.get(t),
    e.defaults,
  ]);
  me.set(t, i),
    e.defaultRoutes && hC(t, e.defaultRoutes),
    e.descriptors && me.describe(t, e.descriptors);
}
function hC(e, t) {
  Object.keys(t).forEach((n) => {
    const i = n.split("."),
      r = i.pop(),
      s = [e].concat(i).join("."),
      o = t[n].split("."),
      a = o.pop(),
      l = o.join(".");
    me.route(s, r, l, a);
  });
}
function fC(e) {
  return "id" in e && "defaults" in e;
}
class pC {
  constructor() {
    (this.controllers = new no(Hr, "datasets", !0)),
      (this.elements = new no(Wn, "elements")),
      (this.plugins = new no(Object, "plugins")),
      (this.scales = new no(gi, "scales")),
      (this._typedRegistries = [this.controllers, this.scales, this.elements]);
  }
  add(...t) {
    this._each("register", t);
  }
  remove(...t) {
    this._each("unregister", t);
  }
  addControllers(...t) {
    this._each("register", t, this.controllers);
  }
  addElements(...t) {
    this._each("register", t, this.elements);
  }
  addPlugins(...t) {
    this._each("register", t, this.plugins);
  }
  addScales(...t) {
    this._each("register", t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, "controller");
  }
  getElement(t) {
    return this._get(t, this.elements, "element");
  }
  getPlugin(t) {
    return this._get(t, this.plugins, "plugin");
  }
  getScale(t) {
    return this._get(t, this.scales, "scale");
  }
  removeControllers(...t) {
    this._each("unregister", t, this.controllers);
  }
  removeElements(...t) {
    this._each("unregister", t, this.elements);
  }
  removePlugins(...t) {
    this._each("unregister", t, this.plugins);
  }
  removeScales(...t) {
    this._each("unregister", t, this.scales);
  }
  _each(t, n, i) {
    [...n].forEach((r) => {
      const s = i || this._getRegistryForType(r);
      i || s.isForType(r) || (s === this.plugins && r.id)
        ? this._exec(t, s, r)
        : ee(r, (o) => {
            const a = i || this._getRegistryForType(o);
            this._exec(t, a, o);
          });
    });
  }
  _exec(t, n, i) {
    const r = bd(t);
    ne(i["before" + r], [], i), n[t](i), ne(i["after" + r], [], i);
  }
  _getRegistryForType(t) {
    for (let n = 0; n < this._typedRegistries.length; n++) {
      const i = this._typedRegistries[n];
      if (i.isForType(t)) return i;
    }
    return this.plugins;
  }
  _get(t, n, i) {
    const r = n.get(t);
    if (r === void 0)
      throw new Error('"' + t + '" is not a registered ' + i + ".");
    return r;
  }
}
var Dt = new pC();
class gC {
  constructor() {
    this._init = [];
  }
  notify(t, n, i, r) {
    n === "beforeInit" &&
      ((this._init = this._createDescriptors(t, !0)),
      this._notify(this._init, t, "install"));
    const s = r ? this._descriptors(t).filter(r) : this._descriptors(t),
      o = this._notify(s, t, n, i);
    return (
      n === "afterDestroy" &&
        (this._notify(s, t, "stop"), this._notify(this._init, t, "uninstall")),
      o
    );
  }
  _notify(t, n, i, r) {
    r = r || {};
    for (const s of t) {
      const o = s.plugin,
        a = o[i],
        l = [n, r, s.options];
      if (ne(a, l, o) === !1 && r.cancelable) return !1;
    }
    return !0;
  }
  invalidate() {
    ae(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
  }
  _descriptors(t) {
    if (this._cache) return this._cache;
    const n = (this._cache = this._createDescriptors(t));
    return this._notifyStateChanges(t), n;
  }
  _createDescriptors(t, n) {
    const i = t && t.config,
      r = $(i.options && i.options.plugins, {}),
      s = mC(i);
    return r === !1 && !n ? [] : vC(t, s, r, n);
  }
  _notifyStateChanges(t) {
    const n = this._oldCache || [],
      i = this._cache,
      r = (s, o) =>
        s.filter((a) => !o.some((l) => a.plugin.id === l.plugin.id));
    this._notify(r(n, i), t, "stop"), this._notify(r(i, n), t, "start");
  }
}
function mC(e) {
  const t = {},
    n = [],
    i = Object.keys(Dt.plugins.items);
  for (let s = 0; s < i.length; s++) n.push(Dt.getPlugin(i[s]));
  const r = e.plugins || [];
  for (let s = 0; s < r.length; s++) {
    const o = r[s];
    n.indexOf(o) === -1 && (n.push(o), (t[o.id] = !0));
  }
  return { plugins: n, localIds: t };
}
function yC(e, t) {
  return !t && e === !1 ? null : e === !0 ? {} : e;
}
function vC(e, { plugins: t, localIds: n }, i, r) {
  const s = [],
    o = e.getContext();
  for (const a of t) {
    const l = a.id,
      u = yC(i[l], r);
    u !== null &&
      s.push({
        plugin: a,
        options: xC(e.config, { plugin: a, local: n[l] }, u, o),
      });
  }
  return s;
}
function xC(e, { plugin: t, local: n }, i, r) {
  const s = e.pluginScopeKeys(t),
    o = e.getOptionScopes(i, s);
  return (
    n && t.defaults && o.push(t.defaults),
    e.createResolver(o, r, [""], { scriptable: !1, indexable: !1, allKeys: !0 })
  );
}
function Zu(e, t) {
  const n = me.datasets[e] || {};
  return (
    ((t.datasets || {})[e] || {}).indexAxis || t.indexAxis || n.indexAxis || "x"
  );
}
function wC(e, t) {
  let n = e;
  return (
    e === "_index_" ? (n = t) : e === "_value_" && (n = t === "x" ? "y" : "x"),
    n
  );
}
function _C(e, t) {
  return e === t ? "_index_" : "_value_";
}
function rp(e) {
  if (e === "x" || e === "y" || e === "r") return e;
}
function SC(e) {
  if (e === "top" || e === "bottom") return "x";
  if (e === "left" || e === "right") return "y";
}
function ec(e, ...t) {
  if (rp(e)) return e;
  for (const n of t) {
    const i =
      n.axis || SC(n.position) || (e.length > 1 && rp(e[0].toLowerCase()));
    if (i) return i;
  }
  throw new Error(
    `Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`
  );
}
function sp(e, t, n) {
  if (n[t + "AxisID"] === e) return { axis: t };
}
function bC(e, t) {
  if (t.data && t.data.datasets) {
    const n = t.data.datasets.filter((i) => i.xAxisID === e || i.yAxisID === e);
    if (n.length) return sp(e, "x", n[0]) || sp(e, "y", n[0]);
  }
  return {};
}
function kC(e, t) {
  const n = li[e.type] || { scales: {} },
    i = t.scales || {},
    r = Zu(e.type, t),
    s = Object.create(null);
  return (
    Object.keys(i).forEach((o) => {
      const a = i[o];
      if (!G(a))
        return console.error(`Invalid scale configuration for scale: ${o}`);
      if (a._proxy)
        return console.warn(
          `Ignoring resolver passed as options for scale: ${o}`
        );
      const l = ec(o, a, bC(o, e), me.scales[a.type]),
        u = _C(l, r),
        c = n.scales || {};
      s[o] = zr(Object.create(null), [{ axis: l }, a, c[l], c[u]]);
    }),
    e.data.datasets.forEach((o) => {
      const a = o.type || e.type,
        l = o.indexAxis || Zu(a, t),
        c = (li[a] || {}).scales || {};
      Object.keys(c).forEach((d) => {
        const h = wC(d, l),
          f = o[h + "AxisID"] || h;
        (s[f] = s[f] || Object.create(null)),
          zr(s[f], [{ axis: h }, i[f], c[d]]);
      });
    }),
    Object.keys(s).forEach((o) => {
      const a = s[o];
      zr(a, [me.scales[a.type], me.scale]);
    }),
    s
  );
}
function hy(e) {
  const t = e.options || (e.options = {});
  (t.plugins = $(t.plugins, {})), (t.scales = kC(e, t));
}
function fy(e) {
  return (
    (e = e || {}),
    (e.datasets = e.datasets || []),
    (e.labels = e.labels || []),
    e
  );
}
function CC(e) {
  return (e = e || {}), (e.data = fy(e.data)), hy(e), e;
}
const op = new Map(),
  py = new Set();
function io(e, t) {
  let n = op.get(e);
  return n || ((n = t()), op.set(e, n), py.add(n)), n;
}
const xr = (e, t, n) => {
  const i = hs(t, n);
  i !== void 0 && e.add(i);
};
class TC {
  constructor(t) {
    (this._config = CC(t)),
      (this._scopeCache = new Map()),
      (this._resolverCache = new Map());
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = fy(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    this.clearCache(), hy(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return io(t, () => [[`datasets.${t}`, ""]]);
  }
  datasetAnimationScopeKeys(t, n) {
    return io(`${t}.transition.${n}`, () => [
      [`datasets.${t}.transitions.${n}`, `transitions.${n}`],
      [`datasets.${t}`, ""],
    ]);
  }
  datasetElementScopeKeys(t, n) {
    return io(`${t}-${n}`, () => [
      [`datasets.${t}.elements.${n}`, `datasets.${t}`, `elements.${n}`, ""],
    ]);
  }
  pluginScopeKeys(t) {
    const n = t.id,
      i = this.type;
    return io(`${i}-plugin-${n}`, () => [
      [`plugins.${n}`, ...(t.additionalOptionScopes || [])],
    ]);
  }
  _cachedScopes(t, n) {
    const i = this._scopeCache;
    let r = i.get(t);
    return (!r || n) && ((r = new Map()), i.set(t, r)), r;
  }
  getOptionScopes(t, n, i) {
    const { options: r, type: s } = this,
      o = this._cachedScopes(t, i),
      a = o.get(n);
    if (a) return a;
    const l = new Set();
    n.forEach((c) => {
      t && (l.add(t), c.forEach((d) => xr(l, t, d))),
        c.forEach((d) => xr(l, r, d)),
        c.forEach((d) => xr(l, li[s] || {}, d)),
        c.forEach((d) => xr(l, me, d)),
        c.forEach((d) => xr(l, qu, d));
    });
    const u = Array.from(l);
    return (
      u.length === 0 && u.push(Object.create(null)), py.has(n) && o.set(n, u), u
    );
  }
  chartOptionScopes() {
    const { options: t, type: n } = this;
    return [t, li[n] || {}, me.datasets[n] || {}, { type: n }, me, qu];
  }
  resolveNamedOptions(t, n, i, r = [""]) {
    const s = { $shared: !0 },
      { resolver: o, subPrefixes: a } = ap(this._resolverCache, t, r);
    let l = o;
    if (PC(o, n)) {
      (s.$shared = !1), (i = An(i) ? i() : i);
      const u = this.createResolver(t, i, a);
      l = Qi(o, i, u);
    }
    for (const u of n) s[u] = l[u];
    return s;
  }
  createResolver(t, n, i = [""], r) {
    const { resolver: s } = ap(this._resolverCache, t, i);
    return G(n) ? Qi(s, n, void 0, r) : s;
  }
}
function ap(e, t, n) {
  let i = e.get(t);
  i || ((i = new Map()), e.set(t, i));
  const r = n.join();
  let s = i.get(r);
  return (
    s ||
      ((s = {
        resolver: Rd(t, n),
        subPrefixes: n.filter((a) => !a.toLowerCase().includes("hover")),
      }),
      i.set(r, s)),
    s
  );
}
const EC = (e) => G(e) && Object.getOwnPropertyNames(e).some((t) => An(e[t]));
function PC(e, t) {
  const { isScriptable: n, isIndexable: i } = q0(e);
  for (const r of t) {
    const s = n(r),
      o = i(r),
      a = (o || s) && e[r];
    if ((s && (An(a) || EC(a))) || (o && he(a))) return !0;
  }
  return !1;
}
var MC = "4.4.1";
const OC = ["top", "bottom", "left", "right", "chartArea"];
function lp(e, t) {
  return e === "top" || e === "bottom" || (OC.indexOf(e) === -1 && t === "x");
}
function up(e, t) {
  return function (n, i) {
    return n[e] === i[e] ? n[t] - i[t] : n[e] - i[e];
  };
}
function cp(e) {
  const t = e.chart,
    n = t.options.animation;
  t.notifyPlugins("afterRender"), ne(n && n.onComplete, [e], t);
}
function RC(e) {
  const t = e.chart,
    n = t.options.animation;
  ne(n && n.onProgress, [e], t);
}
function gy(e) {
  return (
    Ad() && typeof e == "string"
      ? (e = document.getElementById(e))
      : e && e.length && (e = e[0]),
    e && e.canvas && (e = e.canvas),
    e
  );
}
const Mo = {},
  dp = (e) => {
    const t = gy(e);
    return Object.values(Mo)
      .filter((n) => n.canvas === t)
      .pop();
  };
function jC(e, t, n) {
  const i = Object.keys(e);
  for (const r of i) {
    const s = +r;
    if (s >= t) {
      const o = e[r];
      delete e[r], (n > 0 || s > t) && (e[s + n] = o);
    }
  }
}
function LC(e, t, n, i) {
  return !n || e.type === "mouseout" ? null : i ? t : e;
}
function ro(e, t, n) {
  return e.options.clip ? e[n] : t[n];
}
function AC(e, t) {
  const { xScale: n, yScale: i } = e;
  return n && i
    ? {
        left: ro(n, t, "left"),
        right: ro(n, t, "right"),
        top: ro(i, t, "top"),
        bottom: ro(i, t, "bottom"),
      }
    : t;
}
var dn;
let Za =
  ((dn = class {
    static register(...t) {
      Dt.add(...t), hp();
    }
    static unregister(...t) {
      Dt.remove(...t), hp();
    }
    constructor(t, n) {
      const i = (this.config = new TC(n)),
        r = gy(t),
        s = dp(r);
      if (s)
        throw new Error(
          "Canvas is already in use. Chart with ID '" +
            s.id +
            "' must be destroyed before the canvas with ID '" +
            s.canvas.id +
            "' can be reused."
        );
      const o = i.createResolver(i.chartOptionScopes(), this.getContext());
      (this.platform = new (i.platform || q2(r))()),
        this.platform.updateConfig(i);
      const a = this.platform.acquireContext(r, o.aspectRatio),
        l = a && a.canvas,
        u = l && l.height,
        c = l && l.width;
      if (
        ((this.id = Hb()),
        (this.ctx = a),
        (this.canvas = l),
        (this.width = c),
        (this.height = u),
        (this._options = o),
        (this._aspectRatio = this.aspectRatio),
        (this._layers = []),
        (this._metasets = []),
        (this._stacks = void 0),
        (this.boxes = []),
        (this.currentDevicePixelRatio = void 0),
        (this.chartArea = void 0),
        (this._active = []),
        (this._lastEvent = void 0),
        (this._listeners = {}),
        (this._responsiveListeners = void 0),
        (this._sortedMetasets = []),
        (this.scales = {}),
        (this._plugins = new gC()),
        (this.$proxies = {}),
        (this._hiddenIndices = {}),
        (this.attached = !1),
        (this._animationsDisabled = void 0),
        (this.$context = void 0),
        (this._doResize = ok((d) => this.update(d), o.resizeDelay || 0)),
        (this._dataChanges = []),
        (Mo[this.id] = this),
        !a || !l)
      ) {
        console.error(
          "Failed to create chart: can't acquire context from the given item"
        );
        return;
      }
      Ut.listen(this, "complete", cp),
        Ut.listen(this, "progress", RC),
        this._initialize(),
        this.attached && this.update();
    }
    get aspectRatio() {
      const {
        options: { aspectRatio: t, maintainAspectRatio: n },
        width: i,
        height: r,
        _aspectRatio: s,
      } = this;
      return ae(t) ? (n && s ? s : r ? i / r : null) : t;
    }
    get data() {
      return this.config.data;
    }
    set data(t) {
      this.config.data = t;
    }
    get options() {
      return this._options;
    }
    set options(t) {
      this.config.options = t;
    }
    get registry() {
      return Dt;
    }
    _initialize() {
      return (
        this.notifyPlugins("beforeInit"),
        this.options.responsive
          ? this.resize()
          : If(this, this.options.devicePixelRatio),
        this.bindEvents(),
        this.notifyPlugins("afterInit"),
        this
      );
    }
    clear() {
      return Lf(this.canvas, this.ctx), this;
    }
    stop() {
      return Ut.stop(this), this;
    }
    resize(t, n) {
      Ut.running(this)
        ? (this._resizeBeforeDraw = { width: t, height: n })
        : this._resize(t, n);
    }
    _resize(t, n) {
      const i = this.options,
        r = this.canvas,
        s = i.maintainAspectRatio && this.aspectRatio,
        o = this.platform.getMaximumSize(r, t, n, s),
        a = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
        l = this.width ? "resize" : "attach";
      (this.width = o.width),
        (this.height = o.height),
        (this._aspectRatio = this.aspectRatio),
        If(this, a, !0) &&
          (this.notifyPlugins("resize", { size: o }),
          ne(i.onResize, [this, o], this),
          this.attached && this._doResize(l) && this.render());
    }
    ensureScalesHaveIDs() {
      const n = this.options.scales || {};
      ee(n, (i, r) => {
        i.id = r;
      });
    }
    buildOrUpdateScales() {
      const t = this.options,
        n = t.scales,
        i = this.scales,
        r = Object.keys(i).reduce((o, a) => ((o[a] = !1), o), {});
      let s = [];
      n &&
        (s = s.concat(
          Object.keys(n).map((o) => {
            const a = n[o],
              l = ec(o, a),
              u = l === "r",
              c = l === "x";
            return {
              options: a,
              dposition: u ? "chartArea" : c ? "bottom" : "left",
              dtype: u ? "radialLinear" : c ? "category" : "linear",
            };
          })
        )),
        ee(s, (o) => {
          const a = o.options,
            l = a.id,
            u = ec(l, a),
            c = $(a.type, o.dtype);
          (a.position === void 0 || lp(a.position, u) !== lp(o.dposition)) &&
            (a.position = o.dposition),
            (r[l] = !0);
          let d = null;
          if (l in i && i[l].type === c) d = i[l];
          else {
            const h = Dt.getScale(c);
            (d = new h({ id: l, type: c, ctx: this.ctx, chart: this })),
              (i[d.id] = d);
          }
          d.init(a, t);
        }),
        ee(r, (o, a) => {
          o || delete i[a];
        }),
        ee(i, (o) => {
          mt.configure(this, o, o.options), mt.addBox(this, o);
        });
    }
    _updateMetasets() {
      const t = this._metasets,
        n = this.data.datasets.length,
        i = t.length;
      if ((t.sort((r, s) => r.index - s.index), i > n)) {
        for (let r = n; r < i; ++r) this._destroyDatasetMeta(r);
        t.splice(n, i - n);
      }
      this._sortedMetasets = t.slice(0).sort(up("order", "index"));
    }
    _removeUnreferencedMetasets() {
      const {
        _metasets: t,
        data: { datasets: n },
      } = this;
      t.length > n.length && delete this._stacks,
        t.forEach((i, r) => {
          n.filter((s) => s === i._dataset).length === 0 &&
            this._destroyDatasetMeta(r);
        });
    }
    buildOrUpdateControllers() {
      const t = [],
        n = this.data.datasets;
      let i, r;
      for (
        this._removeUnreferencedMetasets(), i = 0, r = n.length;
        i < r;
        i++
      ) {
        const s = n[i];
        let o = this.getDatasetMeta(i);
        const a = s.type || this.config.type;
        if (
          (o.type &&
            o.type !== a &&
            (this._destroyDatasetMeta(i), (o = this.getDatasetMeta(i))),
          (o.type = a),
          (o.indexAxis = s.indexAxis || Zu(a, this.options)),
          (o.order = s.order || 0),
          (o.index = i),
          (o.label = "" + s.label),
          (o.visible = this.isDatasetVisible(i)),
          o.controller)
        )
          o.controller.updateIndex(i), o.controller.linkScales();
        else {
          const l = Dt.getController(a),
            { datasetElementType: u, dataElementType: c } = me.datasets[a];
          Object.assign(l, {
            dataElementType: Dt.getElement(c),
            datasetElementType: u && Dt.getElement(u),
          }),
            (o.controller = new l(this, i)),
            t.push(o.controller);
        }
      }
      return this._updateMetasets(), t;
    }
    _resetElements() {
      ee(
        this.data.datasets,
        (t, n) => {
          this.getDatasetMeta(n).controller.reset();
        },
        this
      );
    }
    reset() {
      this._resetElements(), this.notifyPlugins("reset");
    }
    update(t) {
      const n = this.config;
      n.update();
      const i = (this._options = n.createResolver(
          n.chartOptionScopes(),
          this.getContext()
        )),
        r = (this._animationsDisabled = !i.animation);
      if (
        (this._updateScales(),
        this._checkEventBindings(),
        this._updateHiddenIndices(),
        this._plugins.invalidate(),
        this.notifyPlugins("beforeUpdate", { mode: t, cancelable: !0 }) === !1)
      )
        return;
      const s = this.buildOrUpdateControllers();
      this.notifyPlugins("beforeElementsUpdate");
      let o = 0;
      for (let u = 0, c = this.data.datasets.length; u < c; u++) {
        const { controller: d } = this.getDatasetMeta(u),
          h = !r && s.indexOf(d) === -1;
        d.buildOrUpdateElements(h), (o = Math.max(+d.getMaxOverflow(), o));
      }
      (o = this._minPadding = i.layout.autoPadding ? o : 0),
        this._updateLayout(o),
        r ||
          ee(s, (u) => {
            u.reset();
          }),
        this._updateDatasets(t),
        this.notifyPlugins("afterUpdate", { mode: t }),
        this._layers.sort(up("z", "_idx"));
      const { _active: a, _lastEvent: l } = this;
      l
        ? this._eventHandler(l, !0)
        : a.length && this._updateHoverStyles(a, a, !0),
        this.render();
    }
    _updateScales() {
      ee(this.scales, (t) => {
        mt.removeBox(this, t);
      }),
        this.ensureScalesHaveIDs(),
        this.buildOrUpdateScales();
    }
    _checkEventBindings() {
      const t = this.options,
        n = new Set(Object.keys(this._listeners)),
        i = new Set(t.events);
      (!kf(n, i) || !!this._responsiveListeners !== t.responsive) &&
        (this.unbindEvents(), this.bindEvents());
    }
    _updateHiddenIndices() {
      const { _hiddenIndices: t } = this,
        n = this._getUniformDataChanges() || [];
      for (const { method: i, start: r, count: s } of n) {
        const o = i === "_removeElements" ? -s : s;
        jC(t, r, o);
      }
    }
    _getUniformDataChanges() {
      const t = this._dataChanges;
      if (!t || !t.length) return;
      this._dataChanges = [];
      const n = this.data.datasets.length,
        i = (s) =>
          new Set(
            t
              .filter((o) => o[0] === s)
              .map((o, a) => a + "," + o.splice(1).join(","))
          ),
        r = i(0);
      for (let s = 1; s < n; s++) if (!kf(r, i(s))) return;
      return Array.from(r)
        .map((s) => s.split(","))
        .map((s) => ({ method: s[1], start: +s[2], count: +s[3] }));
    }
    _updateLayout(t) {
      if (this.notifyPlugins("beforeLayout", { cancelable: !0 }) === !1) return;
      mt.update(this, this.width, this.height, t);
      const n = this.chartArea,
        i = n.width <= 0 || n.height <= 0;
      (this._layers = []),
        ee(
          this.boxes,
          (r) => {
            (i && r.position === "chartArea") ||
              (r.configure && r.configure(), this._layers.push(...r._layers()));
          },
          this
        ),
        this._layers.forEach((r, s) => {
          r._idx = s;
        }),
        this.notifyPlugins("afterLayout");
    }
    _updateDatasets(t) {
      if (
        this.notifyPlugins("beforeDatasetsUpdate", {
          mode: t,
          cancelable: !0,
        }) !== !1
      ) {
        for (let n = 0, i = this.data.datasets.length; n < i; ++n)
          this.getDatasetMeta(n).controller.configure();
        for (let n = 0, i = this.data.datasets.length; n < i; ++n)
          this._updateDataset(n, An(t) ? t({ datasetIndex: n }) : t);
        this.notifyPlugins("afterDatasetsUpdate", { mode: t });
      }
    }
    _updateDataset(t, n) {
      const i = this.getDatasetMeta(t),
        r = { meta: i, index: t, mode: n, cancelable: !0 };
      this.notifyPlugins("beforeDatasetUpdate", r) !== !1 &&
        (i.controller._update(n),
        (r.cancelable = !1),
        this.notifyPlugins("afterDatasetUpdate", r));
    }
    render() {
      this.notifyPlugins("beforeRender", { cancelable: !0 }) !== !1 &&
        (Ut.has(this)
          ? this.attached && !Ut.running(this) && Ut.start(this)
          : (this.draw(), cp({ chart: this })));
    }
    draw() {
      let t;
      if (this._resizeBeforeDraw) {
        const { width: i, height: r } = this._resizeBeforeDraw;
        this._resize(i, r), (this._resizeBeforeDraw = null);
      }
      if (
        (this.clear(),
        this.width <= 0 ||
          this.height <= 0 ||
          this.notifyPlugins("beforeDraw", { cancelable: !0 }) === !1)
      )
        return;
      const n = this._layers;
      for (t = 0; t < n.length && n[t].z <= 0; ++t) n[t].draw(this.chartArea);
      for (this._drawDatasets(); t < n.length; ++t) n[t].draw(this.chartArea);
      this.notifyPlugins("afterDraw");
    }
    _getSortedDatasetMetas(t) {
      const n = this._sortedMetasets,
        i = [];
      let r, s;
      for (r = 0, s = n.length; r < s; ++r) {
        const o = n[r];
        (!t || o.visible) && i.push(o);
      }
      return i;
    }
    getSortedVisibleDatasetMetas() {
      return this._getSortedDatasetMetas(!0);
    }
    _drawDatasets() {
      if (this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 }) === !1)
        return;
      const t = this.getSortedVisibleDatasetMetas();
      for (let n = t.length - 1; n >= 0; --n) this._drawDataset(t[n]);
      this.notifyPlugins("afterDatasetsDraw");
    }
    _drawDataset(t) {
      const n = this.ctx,
        i = t._clip,
        r = !i.disabled,
        s = AC(t, this.chartArea),
        o = { meta: t, index: t.index, cancelable: !0 };
      this.notifyPlugins("beforeDatasetDraw", o) !== !1 &&
        (r &&
          Pd(n, {
            left: i.left === !1 ? 0 : s.left - i.left,
            right: i.right === !1 ? this.width : s.right + i.right,
            top: i.top === !1 ? 0 : s.top - i.top,
            bottom: i.bottom === !1 ? this.height : s.bottom + i.bottom,
          }),
        t.controller.draw(),
        r && Md(n),
        (o.cancelable = !1),
        this.notifyPlugins("afterDatasetDraw", o));
    }
    isPointInArea(t) {
      return qt(t, this.chartArea, this._minPadding);
    }
    getElementsAtEventForMode(t, n, i, r) {
      const s = O2.modes[n];
      return typeof s == "function" ? s(this, t, i, r) : [];
    }
    getDatasetMeta(t) {
      const n = this.data.datasets[t],
        i = this._metasets;
      let r = i.filter((s) => s && s._dataset === n).pop();
      return (
        r ||
          ((r = {
            type: null,
            data: [],
            dataset: null,
            controller: null,
            hidden: null,
            xAxisID: null,
            yAxisID: null,
            order: (n && n.order) || 0,
            index: t,
            _dataset: n,
            _parsed: [],
            _sorted: !1,
          }),
          i.push(r)),
        r
      );
    }
    getContext() {
      return (
        this.$context ||
        (this.$context = Bn(null, { chart: this, type: "chart" }))
      );
    }
    getVisibleDatasetCount() {
      return this.getSortedVisibleDatasetMetas().length;
    }
    isDatasetVisible(t) {
      const n = this.data.datasets[t];
      if (!n) return !1;
      const i = this.getDatasetMeta(t);
      return typeof i.hidden == "boolean" ? !i.hidden : !n.hidden;
    }
    setDatasetVisibility(t, n) {
      const i = this.getDatasetMeta(t);
      i.hidden = !n;
    }
    toggleDataVisibility(t) {
      this._hiddenIndices[t] = !this._hiddenIndices[t];
    }
    getDataVisibility(t) {
      return !this._hiddenIndices[t];
    }
    _updateVisibility(t, n, i) {
      const r = i ? "show" : "hide",
        s = this.getDatasetMeta(t),
        o = s.controller._resolveAnimations(void 0, r);
      ha(n)
        ? ((s.data[n].hidden = !i), this.update())
        : (this.setDatasetVisibility(t, i),
          o.update(s, { visible: i }),
          this.update((a) => (a.datasetIndex === t ? r : void 0)));
    }
    hide(t, n) {
      this._updateVisibility(t, n, !1);
    }
    show(t, n) {
      this._updateVisibility(t, n, !0);
    }
    _destroyDatasetMeta(t) {
      const n = this._metasets[t];
      n && n.controller && n.controller._destroy(), delete this._metasets[t];
    }
    _stop() {
      let t, n;
      for (
        this.stop(), Ut.remove(this), t = 0, n = this.data.datasets.length;
        t < n;
        ++t
      )
        this._destroyDatasetMeta(t);
    }
    destroy() {
      this.notifyPlugins("beforeDestroy");
      const { canvas: t, ctx: n } = this;
      this._stop(),
        this.config.clearCache(),
        t &&
          (this.unbindEvents(),
          Lf(t, n),
          this.platform.releaseContext(n),
          (this.canvas = null),
          (this.ctx = null)),
        delete Mo[this.id],
        this.notifyPlugins("afterDestroy");
    }
    toBase64Image(...t) {
      return this.canvas.toDataURL(...t);
    }
    bindEvents() {
      this.bindUserEvents(),
        this.options.responsive
          ? this.bindResponsiveEvents()
          : (this.attached = !0);
    }
    bindUserEvents() {
      const t = this._listeners,
        n = this.platform,
        i = (s, o) => {
          n.addEventListener(this, s, o), (t[s] = o);
        },
        r = (s, o, a) => {
          (s.offsetX = o), (s.offsetY = a), this._eventHandler(s);
        };
      ee(this.options.events, (s) => i(s, r));
    }
    bindResponsiveEvents() {
      this._responsiveListeners || (this._responsiveListeners = {});
      const t = this._responsiveListeners,
        n = this.platform,
        i = (l, u) => {
          n.addEventListener(this, l, u), (t[l] = u);
        },
        r = (l, u) => {
          t[l] && (n.removeEventListener(this, l, u), delete t[l]);
        },
        s = (l, u) => {
          this.canvas && this.resize(l, u);
        };
      let o;
      const a = () => {
        r("attach", a),
          (this.attached = !0),
          this.resize(),
          i("resize", s),
          i("detach", o);
      };
      (o = () => {
        (this.attached = !1),
          r("resize", s),
          this._stop(),
          this._resize(0, 0),
          i("attach", a);
      }),
        n.isAttached(this.canvas) ? a() : o();
    }
    unbindEvents() {
      ee(this._listeners, (t, n) => {
        this.platform.removeEventListener(this, n, t);
      }),
        (this._listeners = {}),
        ee(this._responsiveListeners, (t, n) => {
          this.platform.removeEventListener(this, n, t);
        }),
        (this._responsiveListeners = void 0);
    }
    updateHoverStyle(t, n, i) {
      const r = i ? "set" : "remove";
      let s, o, a, l;
      for (
        n === "dataset" &&
          ((s = this.getDatasetMeta(t[0].datasetIndex)),
          s.controller["_" + r + "DatasetHoverStyle"]()),
          a = 0,
          l = t.length;
        a < l;
        ++a
      ) {
        o = t[a];
        const u = o && this.getDatasetMeta(o.datasetIndex).controller;
        u && u[r + "HoverStyle"](o.element, o.datasetIndex, o.index);
      }
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(t) {
      const n = this._active || [],
        i = t.map(({ datasetIndex: s, index: o }) => {
          const a = this.getDatasetMeta(s);
          if (!a) throw new Error("No dataset found at index " + s);
          return { datasetIndex: s, element: a.data[o], index: o };
        });
      !ca(i, n) &&
        ((this._active = i),
        (this._lastEvent = null),
        this._updateHoverStyles(i, n));
    }
    notifyPlugins(t, n, i) {
      return this._plugins.notify(this, t, n, i);
    }
    isPluginEnabled(t) {
      return this._plugins._cache.filter((n) => n.plugin.id === t).length === 1;
    }
    _updateHoverStyles(t, n, i) {
      const r = this.options.hover,
        s = (l, u) =>
          l.filter(
            (c) =>
              !u.some(
                (d) => c.datasetIndex === d.datasetIndex && c.index === d.index
              )
          ),
        o = s(n, t),
        a = i ? t : s(t, n);
      o.length && this.updateHoverStyle(o, r.mode, !1),
        a.length && r.mode && this.updateHoverStyle(a, r.mode, !0);
    }
    _eventHandler(t, n) {
      const i = {
          event: t,
          replay: n,
          cancelable: !0,
          inChartArea: this.isPointInArea(t),
        },
        r = (o) =>
          (o.options.events || this.options.events).includes(t.native.type);
      if (this.notifyPlugins("beforeEvent", i, r) === !1) return;
      const s = this._handleEvent(t, n, i.inChartArea);
      return (
        (i.cancelable = !1),
        this.notifyPlugins("afterEvent", i, r),
        (s || i.changed) && this.render(),
        this
      );
    }
    _handleEvent(t, n, i) {
      const { _active: r = [], options: s } = this,
        o = n,
        a = this._getActiveElements(t, r, i, o),
        l = Gb(t),
        u = LC(t, this._lastEvent, i, l);
      i &&
        ((this._lastEvent = null),
        ne(s.onHover, [t, a, this], this),
        l && ne(s.onClick, [t, a, this], this));
      const c = !ca(a, r);
      return (
        (c || n) && ((this._active = a), this._updateHoverStyles(a, r, n)),
        (this._lastEvent = u),
        c
      );
    }
    _getActiveElements(t, n, i, r) {
      if (t.type === "mouseout") return [];
      if (!i) return n;
      const s = this.options.hover;
      return this.getElementsAtEventForMode(t, s.mode, s, r);
    }
  }),
  A(dn, "defaults", me),
  A(dn, "instances", Mo),
  A(dn, "overrides", li),
  A(dn, "registry", Dt),
  A(dn, "version", MC),
  A(dn, "getChart", dp),
  dn);
function hp() {
  return ee(Za.instances, (e) => e._plugins.invalidate());
}
function DC(e, t, n) {
  const {
    startAngle: i,
    pixelMargin: r,
    x: s,
    y: o,
    outerRadius: a,
    innerRadius: l,
  } = t;
  let u = r / a;
  e.beginPath(),
    e.arc(s, o, a, i - u, n + u),
    l > r
      ? ((u = r / l), e.arc(s, o, l, n + u, i - u, !0))
      : e.arc(s, o, r, n + we, i - we),
    e.closePath(),
    e.clip();
}
function IC(e) {
  return Od(e, ["outerStart", "outerEnd", "innerStart", "innerEnd"]);
}
function NC(e, t, n, i) {
  const r = IC(e.options.borderRadius),
    s = (n - t) / 2,
    o = Math.min(s, (i * t) / 2),
    a = (l) => {
      const u = ((n - Math.min(s, l)) * i) / 2;
      return at(l, 0, Math.min(s, u));
    };
  return {
    outerStart: a(r.outerStart),
    outerEnd: a(r.outerEnd),
    innerStart: at(r.innerStart, 0, o),
    innerEnd: at(r.innerEnd, 0, o),
  };
}
function vi(e, t, n, i) {
  return { x: n + e * Math.cos(t), y: i + e * Math.sin(t) };
}
function xa(e, t, n, i, r, s) {
  const { x: o, y: a, startAngle: l, pixelMargin: u, innerRadius: c } = t,
    d = Math.max(t.outerRadius + i + n - u, 0),
    h = c > 0 ? c + i + n + u : 0;
  let f = 0;
  const p = r - l;
  if (i) {
    const H = c > 0 ? c - i : 0,
      X = d > 0 ? d - i : 0,
      Q = (H + X) / 2,
      M = Q !== 0 ? (p * Q) / (Q + i) : p;
    f = (p - M) / 2;
  }
  const y = Math.max(0.001, p * d - n / ue) / d,
    w = (p - y) / 2,
    m = l + w + f,
    v = r - w - f,
    {
      outerStart: x,
      outerEnd: _,
      innerStart: S,
      innerEnd: k,
    } = NC(t, h, d, v - m),
    C = d - x,
    T = d - _,
    R = m + x / C,
    O = v - _ / T,
    D = h + S,
    z = h + k,
    J = m + S / D,
    ye = v - k / z;
  if ((e.beginPath(), s)) {
    const H = (R + O) / 2;
    if ((e.arc(o, a, d, R, H), e.arc(o, a, d, H, O), _ > 0)) {
      const L = vi(T, O, o, a);
      e.arc(L.x, L.y, _, O, v + we);
    }
    const X = vi(z, v, o, a);
    if ((e.lineTo(X.x, X.y), k > 0)) {
      const L = vi(z, ye, o, a);
      e.arc(L.x, L.y, k, v + we, ye + Math.PI);
    }
    const Q = (v - k / h + (m + S / h)) / 2;
    if (
      (e.arc(o, a, h, v - k / h, Q, !0),
      e.arc(o, a, h, Q, m + S / h, !0),
      S > 0)
    ) {
      const L = vi(D, J, o, a);
      e.arc(L.x, L.y, S, J + Math.PI, m - we);
    }
    const M = vi(C, m, o, a);
    if ((e.lineTo(M.x, M.y), x > 0)) {
      const L = vi(C, R, o, a);
      e.arc(L.x, L.y, x, m - we, R);
    }
  } else {
    e.moveTo(o, a);
    const H = Math.cos(R) * d + o,
      X = Math.sin(R) * d + a;
    e.lineTo(H, X);
    const Q = Math.cos(O) * d + o,
      M = Math.sin(O) * d + a;
    e.lineTo(Q, M);
  }
  e.closePath();
}
function FC(e, t, n, i, r) {
  const { fullCircles: s, startAngle: o, circumference: a } = t;
  let l = t.endAngle;
  if (s) {
    xa(e, t, n, i, l, r);
    for (let u = 0; u < s; ++u) e.fill();
    isNaN(a) || (l = o + (a % le || le));
  }
  return xa(e, t, n, i, l, r), e.fill(), l;
}
function zC(e, t, n, i, r) {
  const { fullCircles: s, startAngle: o, circumference: a, options: l } = t,
    {
      borderWidth: u,
      borderJoinStyle: c,
      borderDash: d,
      borderDashOffset: h,
    } = l,
    f = l.borderAlign === "inner";
  if (!u) return;
  e.setLineDash(d || []),
    (e.lineDashOffset = h),
    f
      ? ((e.lineWidth = u * 2), (e.lineJoin = c || "round"))
      : ((e.lineWidth = u), (e.lineJoin = c || "bevel"));
  let p = t.endAngle;
  if (s) {
    xa(e, t, n, i, p, r);
    for (let y = 0; y < s; ++y) e.stroke();
    isNaN(a) || (p = o + (a % le || le));
  }
  f && DC(e, t, p), s || (xa(e, t, n, i, p, r), e.stroke());
}
class Er extends Wn {
  constructor(n) {
    super();
    A(this, "circumference");
    A(this, "endAngle");
    A(this, "fullCircles");
    A(this, "innerRadius");
    A(this, "outerRadius");
    A(this, "pixelMargin");
    A(this, "startAngle");
    (this.options = void 0),
      (this.circumference = void 0),
      (this.startAngle = void 0),
      (this.endAngle = void 0),
      (this.innerRadius = void 0),
      (this.outerRadius = void 0),
      (this.pixelMargin = 0),
      (this.fullCircles = 0),
      n && Object.assign(this, n);
  }
  inRange(n, i, r) {
    const s = this.getProps(["x", "y"], r),
      { angle: o, distance: a } = V0(s, { x: n, y: i }),
      {
        startAngle: l,
        endAngle: u,
        innerRadius: c,
        outerRadius: d,
        circumference: h,
      } = this.getProps(
        [
          "startAngle",
          "endAngle",
          "innerRadius",
          "outerRadius",
          "circumference",
        ],
        r
      ),
      f = (this.options.spacing + this.options.borderWidth) / 2,
      y = $(h, u - l) >= le || fs(o, l, u),
      w = Ri(a, c + f, d + f);
    return y && w;
  }
  getCenterPoint(n) {
    const {
        x: i,
        y: r,
        startAngle: s,
        endAngle: o,
        innerRadius: a,
        outerRadius: l,
      } = this.getProps(
        ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"],
        n
      ),
      { offset: u, spacing: c } = this.options,
      d = (s + o) / 2,
      h = (a + l + c + u) / 2;
    return { x: i + Math.cos(d) * h, y: r + Math.sin(d) * h };
  }
  tooltipPosition(n) {
    return this.getCenterPoint(n);
  }
  draw(n) {
    const { options: i, circumference: r } = this,
      s = (i.offset || 0) / 4,
      o = (i.spacing || 0) / 2,
      a = i.circular;
    if (
      ((this.pixelMargin = i.borderAlign === "inner" ? 0.33 : 0),
      (this.fullCircles = r > le ? Math.floor(r / le) : 0),
      r === 0 || this.innerRadius < 0 || this.outerRadius < 0)
    )
      return;
    n.save();
    const l = (this.startAngle + this.endAngle) / 2;
    n.translate(Math.cos(l) * s, Math.sin(l) * s);
    const u = 1 - Math.sin(Math.min(ue, r || 0)),
      c = s * u;
    (n.fillStyle = i.backgroundColor),
      (n.strokeStyle = i.borderColor),
      FC(n, this, c, o, a),
      zC(n, this, c, o, a),
      n.restore();
  }
}
A(Er, "id", "arc"),
  A(Er, "defaults", {
    borderAlign: "center",
    borderColor: "#fff",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: void 0,
    borderRadius: 0,
    borderWidth: 2,
    offset: 0,
    spacing: 0,
    angle: void 0,
    circular: !0,
  }),
  A(Er, "defaultRoutes", { backgroundColor: "backgroundColor" }),
  A(Er, "descriptors", {
    _scriptable: !0,
    _indexable: (n) => n !== "borderDash",
  });
function my(e, t, n = t) {
  (e.lineCap = $(n.borderCapStyle, t.borderCapStyle)),
    e.setLineDash($(n.borderDash, t.borderDash)),
    (e.lineDashOffset = $(n.borderDashOffset, t.borderDashOffset)),
    (e.lineJoin = $(n.borderJoinStyle, t.borderJoinStyle)),
    (e.lineWidth = $(n.borderWidth, t.borderWidth)),
    (e.strokeStyle = $(n.borderColor, t.borderColor));
}
function BC(e, t, n) {
  e.lineTo(n.x, n.y);
}
function WC(e) {
  return e.stepped
    ? vk
    : e.tension || e.cubicInterpolationMode === "monotone"
    ? xk
    : BC;
}
function yy(e, t, n = {}) {
  const i = e.length,
    { start: r = 0, end: s = i - 1 } = n,
    { start: o, end: a } = t,
    l = Math.max(r, o),
    u = Math.min(s, a),
    c = (r < o && s < o) || (r > a && s > a);
  return {
    count: i,
    start: l,
    loop: t.loop,
    ilen: u < l && !c ? i + u - l : u - l,
  };
}
function $C(e, t, n, i) {
  const { points: r, options: s } = t,
    { count: o, start: a, loop: l, ilen: u } = yy(r, n, i),
    c = WC(s);
  let { move: d = !0, reverse: h } = i || {},
    f,
    p,
    y;
  for (f = 0; f <= u; ++f)
    (p = r[(a + (h ? u - f : f)) % o]),
      !p.skip &&
        (d ? (e.moveTo(p.x, p.y), (d = !1)) : c(e, y, p, h, s.stepped),
        (y = p));
  return l && ((p = r[(a + (h ? u : 0)) % o]), c(e, y, p, h, s.stepped)), !!l;
}
function HC(e, t, n, i) {
  const r = t.points,
    { count: s, start: o, ilen: a } = yy(r, n, i),
    { move: l = !0, reverse: u } = i || {};
  let c = 0,
    d = 0,
    h,
    f,
    p,
    y,
    w,
    m;
  const v = (_) => (o + (u ? a - _ : _)) % s,
    x = () => {
      y !== w && (e.lineTo(c, w), e.lineTo(c, y), e.lineTo(c, m));
    };
  for (l && ((f = r[v(0)]), e.moveTo(f.x, f.y)), h = 0; h <= a; ++h) {
    if (((f = r[v(h)]), f.skip)) continue;
    const _ = f.x,
      S = f.y,
      k = _ | 0;
    k === p
      ? (S < y ? (y = S) : S > w && (w = S), (c = (d * c + _) / ++d))
      : (x(), e.lineTo(_, S), (p = k), (d = 0), (y = w = S)),
      (m = S);
  }
  x();
}
function tc(e) {
  const t = e.options,
    n = t.borderDash && t.borderDash.length;
  return !e._decimated &&
    !e._loop &&
    !t.tension &&
    t.cubicInterpolationMode !== "monotone" &&
    !t.stepped &&
    !n
    ? HC
    : $C;
}
function UC(e) {
  return e.stepped
    ? Jk
    : e.tension || e.cubicInterpolationMode === "monotone"
    ? Zk
    : Qn;
}
function VC(e, t, n, i) {
  let r = t._path;
  r || ((r = t._path = new Path2D()), t.path(r, n, i) && r.closePath()),
    my(e, t.options),
    e.stroke(r);
}
function YC(e, t, n, i) {
  const { segments: r, options: s } = t,
    o = tc(t);
  for (const a of r)
    my(e, s, a.style),
      e.beginPath(),
      o(e, t, a, { start: n, end: n + i - 1 }) && e.closePath(),
      e.stroke();
}
const XC = typeof Path2D == "function";
function KC(e, t, n, i) {
  XC && !t.options.segment ? VC(e, t, n, i) : YC(e, t, n, i);
}
class Pr extends Wn {
  constructor(t) {
    super(),
      (this.animated = !0),
      (this.options = void 0),
      (this._chart = void 0),
      (this._loop = void 0),
      (this._fullLoop = void 0),
      (this._path = void 0),
      (this._points = void 0),
      (this._segments = void 0),
      (this._decimated = !1),
      (this._pointsUpdated = !1),
      (this._datasetIndex = void 0),
      t && Object.assign(this, t);
  }
  updateControlPoints(t, n) {
    const i = this.options;
    if (
      (i.tension || i.cubicInterpolationMode === "monotone") &&
      !i.stepped &&
      !this._pointsUpdated
    ) {
      const r = i.spanGaps ? this._loop : this._fullLoop;
      Uk(this._points, i, t, r, n), (this._pointsUpdated = !0);
    }
  }
  set points(t) {
    (this._points = t),
      delete this._segments,
      delete this._path,
      (this._pointsUpdated = !1);
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = a2(this, this.options.segment));
  }
  first() {
    const t = this.segments,
      n = this.points;
    return t.length && n[t[0].start];
  }
  last() {
    const t = this.segments,
      n = this.points,
      i = t.length;
    return i && n[t[i - 1].end];
  }
  interpolate(t, n) {
    const i = this.options,
      r = t[n],
      s = this.points,
      o = r2(this, { property: n, start: r, end: r });
    if (!o.length) return;
    const a = [],
      l = UC(i);
    let u, c;
    for (u = 0, c = o.length; u < c; ++u) {
      const { start: d, end: h } = o[u],
        f = s[d],
        p = s[h];
      if (f === p) {
        a.push(f);
        continue;
      }
      const y = Math.abs((r - f[n]) / (p[n] - f[n])),
        w = l(f, p, y, i.stepped);
      (w[n] = t[n]), a.push(w);
    }
    return a.length === 1 ? a[0] : a;
  }
  pathSegment(t, n, i) {
    return tc(this)(t, this, n, i);
  }
  path(t, n, i) {
    const r = this.segments,
      s = tc(this);
    let o = this._loop;
    (n = n || 0), (i = i || this.points.length - n);
    for (const a of r) o &= s(t, this, a, { start: n, end: n + i - 1 });
    return !!o;
  }
  draw(t, n, i, r) {
    const s = this.options || {};
    (this.points || []).length &&
      s.borderWidth &&
      (t.save(), KC(t, this, i, r), t.restore()),
      this.animated && ((this._pointsUpdated = !1), (this._path = void 0));
  }
}
A(Pr, "id", "line"),
  A(Pr, "defaults", {
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: "default",
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0,
  }),
  A(Pr, "defaultRoutes", {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  }),
  A(Pr, "descriptors", {
    _scriptable: !0,
    _indexable: (t) => t !== "borderDash" && t !== "fill",
  });
function fp(e, t, n, i) {
  const r = e.options,
    { [n]: s } = e.getProps([n], i);
  return Math.abs(t - s) < r.radius + r.hitRadius;
}
class Oo extends Wn {
  constructor(n) {
    super();
    A(this, "parsed");
    A(this, "skip");
    A(this, "stop");
    (this.options = void 0),
      (this.parsed = void 0),
      (this.skip = void 0),
      (this.stop = void 0),
      n && Object.assign(this, n);
  }
  inRange(n, i, r) {
    const s = this.options,
      { x: o, y: a } = this.getProps(["x", "y"], r);
    return (
      Math.pow(n - o, 2) + Math.pow(i - a, 2) <
      Math.pow(s.hitRadius + s.radius, 2)
    );
  }
  inXRange(n, i) {
    return fp(this, n, "x", i);
  }
  inYRange(n, i) {
    return fp(this, n, "y", i);
  }
  getCenterPoint(n) {
    const { x: i, y: r } = this.getProps(["x", "y"], n);
    return { x: i, y: r };
  }
  size(n) {
    n = n || this.options || {};
    let i = n.radius || 0;
    i = Math.max(i, (i && n.hoverRadius) || 0);
    const r = (i && n.borderWidth) || 0;
    return (i + r) * 2;
  }
  draw(n, i) {
    const r = this.options;
    this.skip ||
      r.radius < 0.1 ||
      !qt(this, i, this.size(r) / 2) ||
      ((n.strokeStyle = r.borderColor),
      (n.lineWidth = r.borderWidth),
      (n.fillStyle = r.backgroundColor),
      Ju(n, r, this.x, this.y));
  }
  getRange() {
    const n = this.options || {};
    return n.radius + n.hitRadius;
  }
}
A(Oo, "id", "point"),
  A(Oo, "defaults", {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: "circle",
    radius: 3,
    rotation: 0,
  }),
  A(Oo, "defaultRoutes", {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  });
const pp = (e, t) => {
    let { boxHeight: n = t, boxWidth: i = t } = e;
    return (
      e.usePointStyle &&
        ((n = Math.min(n, t)), (i = e.pointStyleWidth || Math.min(i, t))),
      { boxWidth: i, boxHeight: n, itemHeight: Math.max(t, n) }
    );
  },
  GC = (e, t) =>
    e !== null &&
    t !== null &&
    e.datasetIndex === t.datasetIndex &&
    e.index === t.index;
class gp extends Wn {
  constructor(t) {
    super(),
      (this._added = !1),
      (this.legendHitBoxes = []),
      (this._hoveredItem = null),
      (this.doughnutMode = !1),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this.legendItems = void 0),
      (this.columnSizes = void 0),
      (this.lineWidths = void 0),
      (this.maxHeight = void 0),
      (this.maxWidth = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this._margins = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(t, n, i) {
    (this.maxWidth = t),
      (this.maxHeight = n),
      (this._margins = i),
      this.setDimensions(),
      this.buildLabels(),
      this.fit();
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = this._margins.left),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = this._margins.top),
        (this.bottom = this.height));
  }
  buildLabels() {
    const t = this.options.labels || {};
    let n = ne(t.generateLabels, [this.chart], this) || [];
    t.filter && (n = n.filter((i) => t.filter(i, this.chart.data))),
      t.sort && (n = n.sort((i, r) => t.sort(i, r, this.chart.data))),
      this.options.reverse && n.reverse(),
      (this.legendItems = n);
  }
  fit() {
    const { options: t, ctx: n } = this;
    if (!t.display) {
      this.width = this.height = 0;
      return;
    }
    const i = t.labels,
      r = Pe(i.font),
      s = r.size,
      o = this._computeTitleHeight(),
      { boxWidth: a, itemHeight: l } = pp(i, s);
    let u, c;
    (n.font = r.string),
      this.isHorizontal()
        ? ((u = this.maxWidth), (c = this._fitRows(o, s, a, l) + 10))
        : ((c = this.maxHeight), (u = this._fitCols(o, r, a, l) + 10)),
      (this.width = Math.min(u, t.maxWidth || this.maxWidth)),
      (this.height = Math.min(c, t.maxHeight || this.maxHeight));
  }
  _fitRows(t, n, i, r) {
    const {
        ctx: s,
        maxWidth: o,
        options: {
          labels: { padding: a },
        },
      } = this,
      l = (this.legendHitBoxes = []),
      u = (this.lineWidths = [0]),
      c = r + a;
    let d = t;
    (s.textAlign = "left"), (s.textBaseline = "middle");
    let h = -1,
      f = -c;
    return (
      this.legendItems.forEach((p, y) => {
        const w = i + n / 2 + s.measureText(p.text).width;
        (y === 0 || u[u.length - 1] + w + 2 * a > o) &&
          ((d += c), (u[u.length - (y > 0 ? 0 : 1)] = 0), (f += c), h++),
          (l[y] = { left: 0, top: f, row: h, width: w, height: r }),
          (u[u.length - 1] += w + a);
      }),
      d
    );
  }
  _fitCols(t, n, i, r) {
    const {
        ctx: s,
        maxHeight: o,
        options: {
          labels: { padding: a },
        },
      } = this,
      l = (this.legendHitBoxes = []),
      u = (this.columnSizes = []),
      c = o - t;
    let d = a,
      h = 0,
      f = 0,
      p = 0,
      y = 0;
    return (
      this.legendItems.forEach((w, m) => {
        const { itemWidth: v, itemHeight: x } = QC(i, n, s, w, r);
        m > 0 &&
          f + x + 2 * a > c &&
          ((d += h + a),
          u.push({ width: h, height: f }),
          (p += h + a),
          y++,
          (h = f = 0)),
          (l[m] = { left: p, top: f, col: y, width: v, height: x }),
          (h = Math.max(h, v)),
          (f += x + a);
      }),
      (d += h),
      u.push({ width: h, height: f }),
      d
    );
  }
  adjustHitBoxes() {
    if (!this.options.display) return;
    const t = this._computeTitleHeight(),
      {
        legendHitBoxes: n,
        options: {
          align: i,
          labels: { padding: r },
          rtl: s,
        },
      } = this,
      o = Bi(s, this.left, this.width);
    if (this.isHorizontal()) {
      let a = 0,
        l = Be(i, this.left + r, this.right - this.lineWidths[a]);
      for (const u of n)
        a !== u.row &&
          ((a = u.row),
          (l = Be(i, this.left + r, this.right - this.lineWidths[a]))),
          (u.top += this.top + t + r),
          (u.left = o.leftForLtr(o.x(l), u.width)),
          (l += u.width + r);
    } else {
      let a = 0,
        l = Be(i, this.top + t + r, this.bottom - this.columnSizes[a].height);
      for (const u of n)
        u.col !== a &&
          ((a = u.col),
          (l = Be(
            i,
            this.top + t + r,
            this.bottom - this.columnSizes[a].height
          ))),
          (u.top = l),
          (u.left += this.left + r),
          (u.left = o.leftForLtr(o.x(u.left), u.width)),
          (l += u.height + r);
    }
  }
  isHorizontal() {
    return (
      this.options.position === "top" || this.options.position === "bottom"
    );
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      Pd(t, this), this._draw(), Md(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: n, lineWidths: i, ctx: r } = this,
      { align: s, labels: o } = t,
      a = me.color,
      l = Bi(t.rtl, this.left, this.width),
      u = Pe(o.font),
      { padding: c } = o,
      d = u.size,
      h = d / 2;
    let f;
    this.drawTitle(),
      (r.textAlign = l.textAlign("left")),
      (r.textBaseline = "middle"),
      (r.lineWidth = 0.5),
      (r.font = u.string);
    const { boxWidth: p, boxHeight: y, itemHeight: w } = pp(o, d),
      m = function (k, C, T) {
        if (isNaN(p) || p <= 0 || isNaN(y) || y < 0) return;
        r.save();
        const R = $(T.lineWidth, 1);
        if (
          ((r.fillStyle = $(T.fillStyle, a)),
          (r.lineCap = $(T.lineCap, "butt")),
          (r.lineDashOffset = $(T.lineDashOffset, 0)),
          (r.lineJoin = $(T.lineJoin, "miter")),
          (r.lineWidth = R),
          (r.strokeStyle = $(T.strokeStyle, a)),
          r.setLineDash($(T.lineDash, [])),
          o.usePointStyle)
        ) {
          const O = {
              radius: (y * Math.SQRT2) / 2,
              pointStyle: T.pointStyle,
              rotation: T.rotation,
              borderWidth: R,
            },
            D = l.xPlus(k, p / 2),
            z = C + h;
          Q0(r, O, D, z, o.pointStyleWidth && p);
        } else {
          const O = C + Math.max((d - y) / 2, 0),
            D = l.leftForLtr(k, p),
            z = zi(T.borderRadius);
          r.beginPath(),
            Object.values(z).some((J) => J !== 0)
              ? ma(r, { x: D, y: O, w: p, h: y, radius: z })
              : r.rect(D, O, p, y),
            r.fill(),
            R !== 0 && r.stroke();
        }
        r.restore();
      },
      v = function (k, C, T) {
        ui(r, T.text, k, C + w / 2, u, {
          strikethrough: T.hidden,
          textAlign: l.textAlign(T.textAlign),
        });
      },
      x = this.isHorizontal(),
      _ = this._computeTitleHeight();
    x
      ? (f = {
          x: Be(s, this.left + c, this.right - i[0]),
          y: this.top + c + _,
          line: 0,
        })
      : (f = {
          x: this.left + c,
          y: Be(s, this.top + _ + c, this.bottom - n[0].height),
          line: 0,
        }),
      ny(this.ctx, t.textDirection);
    const S = w + c;
    this.legendItems.forEach((k, C) => {
      (r.strokeStyle = k.fontColor), (r.fillStyle = k.fontColor);
      const T = r.measureText(k.text).width,
        R = l.textAlign(k.textAlign || (k.textAlign = o.textAlign)),
        O = p + h + T;
      let D = f.x,
        z = f.y;
      l.setWidth(this.width),
        x
          ? C > 0 &&
            D + O + c > this.right &&
            ((z = f.y += S),
            f.line++,
            (D = f.x = Be(s, this.left + c, this.right - i[f.line])))
          : C > 0 &&
            z + S > this.bottom &&
            ((D = f.x = D + n[f.line].width + c),
            f.line++,
            (z = f.y =
              Be(s, this.top + _ + c, this.bottom - n[f.line].height)));
      const J = l.x(D);
      if (
        (m(J, z, k),
        (D = ak(R, D + p + h, x ? D + O : this.right, t.rtl)),
        v(l.x(D), z, k),
        x)
      )
        f.x += O + c;
      else if (typeof k.text != "string") {
        const ye = u.lineHeight;
        f.y += vy(k, ye) + c;
      } else f.y += S;
    }),
      iy(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options,
      n = t.title,
      i = Pe(n.font),
      r = He(n.padding);
    if (!n.display) return;
    const s = Bi(t.rtl, this.left, this.width),
      o = this.ctx,
      a = n.position,
      l = i.size / 2,
      u = r.top + l;
    let c,
      d = this.left,
      h = this.width;
    if (this.isHorizontal())
      (h = Math.max(...this.lineWidths)),
        (c = this.top + u),
        (d = Be(t.align, d, this.right - h));
    else {
      const p = this.columnSizes.reduce((y, w) => Math.max(y, w.height), 0);
      c =
        u +
        Be(
          t.align,
          this.top,
          this.bottom - p - t.labels.padding - this._computeTitleHeight()
        );
    }
    const f = Be(a, d, d + h);
    (o.textAlign = s.textAlign(Td(a))),
      (o.textBaseline = "middle"),
      (o.strokeStyle = n.color),
      (o.fillStyle = n.color),
      (o.font = i.string),
      ui(o, n.text, f, c, i);
  }
  _computeTitleHeight() {
    const t = this.options.title,
      n = Pe(t.font),
      i = He(t.padding);
    return t.display ? n.lineHeight + i.height : 0;
  }
  _getLegendItemAt(t, n) {
    let i, r, s;
    if (Ri(t, this.left, this.right) && Ri(n, this.top, this.bottom)) {
      for (s = this.legendHitBoxes, i = 0; i < s.length; ++i)
        if (
          ((r = s[i]),
          Ri(t, r.left, r.left + r.width) && Ri(n, r.top, r.top + r.height))
        )
          return this.legendItems[i];
    }
    return null;
  }
  handleEvent(t) {
    const n = this.options;
    if (!ZC(t.type, n)) return;
    const i = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const r = this._hoveredItem,
        s = GC(r, i);
      r && !s && ne(n.onLeave, [t, r, this], this),
        (this._hoveredItem = i),
        i && !s && ne(n.onHover, [t, i, this], this);
    } else i && ne(n.onClick, [t, i, this], this);
  }
}
function QC(e, t, n, i, r) {
  const s = qC(i, e, t, n),
    o = JC(r, i, t.lineHeight);
  return { itemWidth: s, itemHeight: o };
}
function qC(e, t, n, i) {
  let r = e.text;
  return (
    r &&
      typeof r != "string" &&
      (r = r.reduce((s, o) => (s.length > o.length ? s : o))),
    t + n.size / 2 + i.measureText(r).width
  );
}
function JC(e, t, n) {
  let i = e;
  return typeof t.text != "string" && (i = vy(t, n)), i;
}
function vy(e, t) {
  const n = e.text ? e.text.length : 0;
  return t * n;
}
function ZC(e, t) {
  return !!(
    ((e === "mousemove" || e === "mouseout") && (t.onHover || t.onLeave)) ||
    (t.onClick && (e === "click" || e === "mouseup"))
  );
}
var eT = {
  id: "legend",
  _element: gp,
  start(e, t, n) {
    const i = (e.legend = new gp({ ctx: e.ctx, options: n, chart: e }));
    mt.configure(e, i, n), mt.addBox(e, i);
  },
  stop(e) {
    mt.removeBox(e, e.legend), delete e.legend;
  },
  beforeUpdate(e, t, n) {
    const i = e.legend;
    mt.configure(e, i, n), (i.options = n);
  },
  afterUpdate(e) {
    const t = e.legend;
    t.buildLabels(), t.adjustHitBoxes();
  },
  afterEvent(e, t) {
    t.replay || e.legend.handleEvent(t.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(e, t, n) {
      const i = t.datasetIndex,
        r = n.chart;
      r.isDatasetVisible(i)
        ? (r.hide(i), (t.hidden = !0))
        : (r.show(i), (t.hidden = !1));
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (e) => e.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(e) {
        const t = e.data.datasets,
          {
            labels: {
              usePointStyle: n,
              pointStyle: i,
              textAlign: r,
              color: s,
              useBorderRadius: o,
              borderRadius: a,
            },
          } = e.legend.options;
        return e._getSortedDatasetMetas().map((l) => {
          const u = l.controller.getStyle(n ? 0 : void 0),
            c = He(u.borderWidth);
          return {
            text: t[l.index].label,
            fillStyle: u.backgroundColor,
            fontColor: s,
            hidden: !l.visible,
            lineCap: u.borderCapStyle,
            lineDash: u.borderDash,
            lineDashOffset: u.borderDashOffset,
            lineJoin: u.borderJoinStyle,
            lineWidth: (c.width + c.height) / 4,
            strokeStyle: u.borderColor,
            pointStyle: i || u.pointStyle,
            rotation: u.rotation,
            textAlign: r || u.textAlign,
            borderRadius: o && (a || u.borderRadius),
            datasetIndex: l.index,
          };
        }, this);
      },
    },
    title: {
      color: (e) => e.chart.options.color,
      display: !1,
      position: "center",
      text: "",
    },
  },
  descriptors: {
    _scriptable: (e) => !e.startsWith("on"),
    labels: {
      _scriptable: (e) => !["generateLabels", "filter", "sort"].includes(e),
    },
  },
};
class xy extends Wn {
  constructor(t) {
    super(),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this._padding = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(t, n) {
    const i = this.options;
    if (((this.left = 0), (this.top = 0), !i.display)) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    (this.width = this.right = t), (this.height = this.bottom = n);
    const r = he(i.text) ? i.text.length : 1;
    this._padding = He(i.padding);
    const s = r * Pe(i.font).lineHeight + this._padding.height;
    this.isHorizontal() ? (this.height = s) : (this.width = s);
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: n, left: i, bottom: r, right: s, options: o } = this,
      a = o.align;
    let l = 0,
      u,
      c,
      d;
    return (
      this.isHorizontal()
        ? ((c = Be(a, i, s)), (d = n + t), (u = s - i))
        : (o.position === "left"
            ? ((c = i + t), (d = Be(a, r, n)), (l = ue * -0.5))
            : ((c = s - t), (d = Be(a, n, r)), (l = ue * 0.5)),
          (u = r - n)),
      { titleX: c, titleY: d, maxWidth: u, rotation: l }
    );
  }
  draw() {
    const t = this.ctx,
      n = this.options;
    if (!n.display) return;
    const i = Pe(n.font),
      s = i.lineHeight / 2 + this._padding.top,
      { titleX: o, titleY: a, maxWidth: l, rotation: u } = this._drawArgs(s);
    ui(t, n.text, 0, 0, i, {
      color: n.color,
      maxWidth: l,
      rotation: u,
      textAlign: Td(n.align),
      textBaseline: "middle",
      translation: [o, a],
    });
  }
}
function tT(e, t) {
  const n = new xy({ ctx: e.ctx, options: t, chart: e });
  mt.configure(e, n, t), mt.addBox(e, n), (e.titleBlock = n);
}
var nT = {
  id: "title",
  _element: xy,
  start(e, t, n) {
    tT(e, n);
  },
  stop(e) {
    const t = e.titleBlock;
    mt.removeBox(e, t), delete e.titleBlock;
  },
  beforeUpdate(e, t, n) {
    const i = e.titleBlock;
    mt.configure(e, i, n), (i.options = n);
  },
  defaults: {
    align: "center",
    display: !1,
    font: { weight: "bold" },
    fullSize: !0,
    padding: 10,
    position: "top",
    text: "",
    weight: 2e3,
  },
  defaultRoutes: { color: "color" },
  descriptors: { _scriptable: !0, _indexable: !1 },
};
const Mr = {
  average(e) {
    if (!e.length) return !1;
    let t,
      n,
      i = 0,
      r = 0,
      s = 0;
    for (t = 0, n = e.length; t < n; ++t) {
      const o = e[t].element;
      if (o && o.hasValue()) {
        const a = o.tooltipPosition();
        (i += a.x), (r += a.y), ++s;
      }
    }
    return { x: i / s, y: r / s };
  },
  nearest(e, t) {
    if (!e.length) return !1;
    let n = t.x,
      i = t.y,
      r = Number.POSITIVE_INFINITY,
      s,
      o,
      a;
    for (s = 0, o = e.length; s < o; ++s) {
      const l = e[s].element;
      if (l && l.hasValue()) {
        const u = l.getCenterPoint(),
          c = Gu(t, u);
        c < r && ((r = c), (a = l));
      }
    }
    if (a) {
      const l = a.tooltipPosition();
      (n = l.x), (i = l.y);
    }
    return { x: n, y: i };
  },
};
function Lt(e, t) {
  return t && (he(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e;
}
function Vt(e) {
  return (typeof e == "string" || e instanceof String) &&
    e.indexOf(`
`) > -1
    ? e.split(`
`)
    : e;
}
function iT(e, t) {
  const { element: n, datasetIndex: i, index: r } = t,
    s = e.getDatasetMeta(i).controller,
    { label: o, value: a } = s.getLabelAndValue(r);
  return {
    chart: e,
    label: o,
    parsed: s.getParsed(r),
    raw: e.data.datasets[i].data[r],
    formattedValue: a,
    dataset: s.getDataset(),
    dataIndex: r,
    datasetIndex: i,
    element: n,
  };
}
function mp(e, t) {
  const n = e.chart.ctx,
    { body: i, footer: r, title: s } = e,
    { boxWidth: o, boxHeight: a } = t,
    l = Pe(t.bodyFont),
    u = Pe(t.titleFont),
    c = Pe(t.footerFont),
    d = s.length,
    h = r.length,
    f = i.length,
    p = He(t.padding);
  let y = p.height,
    w = 0,
    m = i.reduce(
      (_, S) => _ + S.before.length + S.lines.length + S.after.length,
      0
    );
  if (
    ((m += e.beforeBody.length + e.afterBody.length),
    d &&
      (y += d * u.lineHeight + (d - 1) * t.titleSpacing + t.titleMarginBottom),
    m)
  ) {
    const _ = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
    y += f * _ + (m - f) * l.lineHeight + (m - 1) * t.bodySpacing;
  }
  h && (y += t.footerMarginTop + h * c.lineHeight + (h - 1) * t.footerSpacing);
  let v = 0;
  const x = function (_) {
    w = Math.max(w, n.measureText(_).width + v);
  };
  return (
    n.save(),
    (n.font = u.string),
    ee(e.title, x),
    (n.font = l.string),
    ee(e.beforeBody.concat(e.afterBody), x),
    (v = t.displayColors ? o + 2 + t.boxPadding : 0),
    ee(i, (_) => {
      ee(_.before, x), ee(_.lines, x), ee(_.after, x);
    }),
    (v = 0),
    (n.font = c.string),
    ee(e.footer, x),
    n.restore(),
    (w += p.width),
    { width: w, height: y }
  );
}
function rT(e, t) {
  const { y: n, height: i } = t;
  return n < i / 2 ? "top" : n > e.height - i / 2 ? "bottom" : "center";
}
function sT(e, t, n, i) {
  const { x: r, width: s } = i,
    o = n.caretSize + n.caretPadding;
  if ((e === "left" && r + s + o > t.width) || (e === "right" && r - s - o < 0))
    return !0;
}
function oT(e, t, n, i) {
  const { x: r, width: s } = n,
    {
      width: o,
      chartArea: { left: a, right: l },
    } = e;
  let u = "center";
  return (
    i === "center"
      ? (u = r <= (a + l) / 2 ? "left" : "right")
      : r <= s / 2
      ? (u = "left")
      : r >= o - s / 2 && (u = "right"),
    sT(u, e, t, n) && (u = "center"),
    u
  );
}
function yp(e, t, n) {
  const i = n.yAlign || t.yAlign || rT(e, n);
  return { xAlign: n.xAlign || t.xAlign || oT(e, t, n, i), yAlign: i };
}
function aT(e, t) {
  let { x: n, width: i } = e;
  return t === "right" ? (n -= i) : t === "center" && (n -= i / 2), n;
}
function lT(e, t, n) {
  let { y: i, height: r } = e;
  return (
    t === "top" ? (i += n) : t === "bottom" ? (i -= r + n) : (i -= r / 2), i
  );
}
function vp(e, t, n, i) {
  const { caretSize: r, caretPadding: s, cornerRadius: o } = e,
    { xAlign: a, yAlign: l } = n,
    u = r + s,
    { topLeft: c, topRight: d, bottomLeft: h, bottomRight: f } = zi(o);
  let p = aT(t, a);
  const y = lT(t, l, u);
  return (
    l === "center"
      ? a === "left"
        ? (p += u)
        : a === "right" && (p -= u)
      : a === "left"
      ? (p -= Math.max(c, h) + r)
      : a === "right" && (p += Math.max(d, f) + r),
    { x: at(p, 0, i.width - t.width), y: at(y, 0, i.height - t.height) }
  );
}
function so(e, t, n) {
  const i = He(n.padding);
  return t === "center"
    ? e.x + e.width / 2
    : t === "right"
    ? e.x + e.width - i.right
    : e.x + i.left;
}
function xp(e) {
  return Lt([], Vt(e));
}
function uT(e, t, n) {
  return Bn(e, { tooltip: t, tooltipItems: n, type: "tooltip" });
}
function wp(e, t) {
  const n = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return n ? e.override(n) : e;
}
const wy = {
  beforeTitle: Ht,
  title(e) {
    if (e.length > 0) {
      const t = e[0],
        n = t.chart.data.labels,
        i = n ? n.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return t.dataset.label || "";
      if (t.label) return t.label;
      if (i > 0 && t.dataIndex < i) return n[t.dataIndex];
    }
    return "";
  },
  afterTitle: Ht,
  beforeBody: Ht,
  beforeLabel: Ht,
  label(e) {
    if (this && this.options && this.options.mode === "dataset")
      return e.label + ": " + e.formattedValue || e.formattedValue;
    let t = e.dataset.label || "";
    t && (t += ": ");
    const n = e.formattedValue;
    return ae(n) || (t += n), t;
  },
  labelColor(e) {
    const n = e.chart
      .getDatasetMeta(e.datasetIndex)
      .controller.getStyle(e.dataIndex);
    return {
      borderColor: n.borderColor,
      backgroundColor: n.backgroundColor,
      borderWidth: n.borderWidth,
      borderDash: n.borderDash,
      borderDashOffset: n.borderDashOffset,
      borderRadius: 0,
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(e) {
    const n = e.chart
      .getDatasetMeta(e.datasetIndex)
      .controller.getStyle(e.dataIndex);
    return { pointStyle: n.pointStyle, rotation: n.rotation };
  },
  afterLabel: Ht,
  afterBody: Ht,
  beforeFooter: Ht,
  footer: Ht,
  afterFooter: Ht,
};
function Qe(e, t, n, i) {
  const r = e[t].call(n, i);
  return typeof r > "u" ? wy[t].call(n, i) : r;
}
class nc extends Wn {
  constructor(t) {
    super(),
      (this.opacity = 0),
      (this._active = []),
      (this._eventPosition = void 0),
      (this._size = void 0),
      (this._cachedAnimations = void 0),
      (this._tooltipItems = []),
      (this.$animations = void 0),
      (this.$context = void 0),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.dataPoints = void 0),
      (this.title = void 0),
      (this.beforeBody = void 0),
      (this.body = void 0),
      (this.afterBody = void 0),
      (this.footer = void 0),
      (this.xAlign = void 0),
      (this.yAlign = void 0),
      (this.x = void 0),
      (this.y = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this.caretX = void 0),
      (this.caretY = void 0),
      (this.labelColors = void 0),
      (this.labelPointStyles = void 0),
      (this.labelTextColors = void 0);
  }
  initialize(t) {
    (this.options = t),
      (this._cachedAnimations = void 0),
      (this.$context = void 0);
  }
  _resolveAnimations() {
    const t = this._cachedAnimations;
    if (t) return t;
    const n = this.chart,
      i = this.options.setContext(this.getContext()),
      r = i.enabled && n.options.animation && i.animations,
      s = new sy(this.chart, r);
    return r._cacheable && (this._cachedAnimations = Object.freeze(s)), s;
  }
  getContext() {
    return (
      this.$context ||
      (this.$context = uT(this.chart.getContext(), this, this._tooltipItems))
    );
  }
  getTitle(t, n) {
    const { callbacks: i } = n,
      r = Qe(i, "beforeTitle", this, t),
      s = Qe(i, "title", this, t),
      o = Qe(i, "afterTitle", this, t);
    let a = [];
    return (a = Lt(a, Vt(r))), (a = Lt(a, Vt(s))), (a = Lt(a, Vt(o))), a;
  }
  getBeforeBody(t, n) {
    return xp(Qe(n.callbacks, "beforeBody", this, t));
  }
  getBody(t, n) {
    const { callbacks: i } = n,
      r = [];
    return (
      ee(t, (s) => {
        const o = { before: [], lines: [], after: [] },
          a = wp(i, s);
        Lt(o.before, Vt(Qe(a, "beforeLabel", this, s))),
          Lt(o.lines, Qe(a, "label", this, s)),
          Lt(o.after, Vt(Qe(a, "afterLabel", this, s))),
          r.push(o);
      }),
      r
    );
  }
  getAfterBody(t, n) {
    return xp(Qe(n.callbacks, "afterBody", this, t));
  }
  getFooter(t, n) {
    const { callbacks: i } = n,
      r = Qe(i, "beforeFooter", this, t),
      s = Qe(i, "footer", this, t),
      o = Qe(i, "afterFooter", this, t);
    let a = [];
    return (a = Lt(a, Vt(r))), (a = Lt(a, Vt(s))), (a = Lt(a, Vt(o))), a;
  }
  _createItems(t) {
    const n = this._active,
      i = this.chart.data,
      r = [],
      s = [],
      o = [];
    let a = [],
      l,
      u;
    for (l = 0, u = n.length; l < u; ++l) a.push(iT(this.chart, n[l]));
    return (
      t.filter && (a = a.filter((c, d, h) => t.filter(c, d, h, i))),
      t.itemSort && (a = a.sort((c, d) => t.itemSort(c, d, i))),
      ee(a, (c) => {
        const d = wp(t.callbacks, c);
        r.push(Qe(d, "labelColor", this, c)),
          s.push(Qe(d, "labelPointStyle", this, c)),
          o.push(Qe(d, "labelTextColor", this, c));
      }),
      (this.labelColors = r),
      (this.labelPointStyles = s),
      (this.labelTextColors = o),
      (this.dataPoints = a),
      a
    );
  }
  update(t, n) {
    const i = this.options.setContext(this.getContext()),
      r = this._active;
    let s,
      o = [];
    if (!r.length) this.opacity !== 0 && (s = { opacity: 0 });
    else {
      const a = Mr[i.position].call(this, r, this._eventPosition);
      (o = this._createItems(i)),
        (this.title = this.getTitle(o, i)),
        (this.beforeBody = this.getBeforeBody(o, i)),
        (this.body = this.getBody(o, i)),
        (this.afterBody = this.getAfterBody(o, i)),
        (this.footer = this.getFooter(o, i));
      const l = (this._size = mp(this, i)),
        u = Object.assign({}, a, l),
        c = yp(this.chart, i, u),
        d = vp(i, u, c, this.chart);
      (this.xAlign = c.xAlign),
        (this.yAlign = c.yAlign),
        (s = {
          opacity: 1,
          x: d.x,
          y: d.y,
          width: l.width,
          height: l.height,
          caretX: a.x,
          caretY: a.y,
        });
    }
    (this._tooltipItems = o),
      (this.$context = void 0),
      s && this._resolveAnimations().update(this, s),
      t &&
        i.external &&
        i.external.call(this, { chart: this.chart, tooltip: this, replay: n });
  }
  drawCaret(t, n, i, r) {
    const s = this.getCaretPosition(t, i, r);
    n.lineTo(s.x1, s.y1), n.lineTo(s.x2, s.y2), n.lineTo(s.x3, s.y3);
  }
  getCaretPosition(t, n, i) {
    const { xAlign: r, yAlign: s } = this,
      { caretSize: o, cornerRadius: a } = i,
      { topLeft: l, topRight: u, bottomLeft: c, bottomRight: d } = zi(a),
      { x: h, y: f } = t,
      { width: p, height: y } = n;
    let w, m, v, x, _, S;
    return (
      s === "center"
        ? ((_ = f + y / 2),
          r === "left"
            ? ((w = h), (m = w - o), (x = _ + o), (S = _ - o))
            : ((w = h + p), (m = w + o), (x = _ - o), (S = _ + o)),
          (v = w))
        : (r === "left"
            ? (m = h + Math.max(l, c) + o)
            : r === "right"
            ? (m = h + p - Math.max(u, d) - o)
            : (m = this.caretX),
          s === "top"
            ? ((x = f), (_ = x - o), (w = m - o), (v = m + o))
            : ((x = f + y), (_ = x + o), (w = m + o), (v = m - o)),
          (S = x)),
      { x1: w, x2: m, x3: v, y1: x, y2: _, y3: S }
    );
  }
  drawTitle(t, n, i) {
    const r = this.title,
      s = r.length;
    let o, a, l;
    if (s) {
      const u = Bi(i.rtl, this.x, this.width);
      for (
        t.x = so(this, i.titleAlign, i),
          n.textAlign = u.textAlign(i.titleAlign),
          n.textBaseline = "middle",
          o = Pe(i.titleFont),
          a = i.titleSpacing,
          n.fillStyle = i.titleColor,
          n.font = o.string,
          l = 0;
        l < s;
        ++l
      )
        n.fillText(r[l], u.x(t.x), t.y + o.lineHeight / 2),
          (t.y += o.lineHeight + a),
          l + 1 === s && (t.y += i.titleMarginBottom - a);
    }
  }
  _drawColorBox(t, n, i, r, s) {
    const o = this.labelColors[i],
      a = this.labelPointStyles[i],
      { boxHeight: l, boxWidth: u } = s,
      c = Pe(s.bodyFont),
      d = so(this, "left", s),
      h = r.x(d),
      f = l < c.lineHeight ? (c.lineHeight - l) / 2 : 0,
      p = n.y + f;
    if (s.usePointStyle) {
      const y = {
          radius: Math.min(u, l) / 2,
          pointStyle: a.pointStyle,
          rotation: a.rotation,
          borderWidth: 1,
        },
        w = r.leftForLtr(h, u) + u / 2,
        m = p + l / 2;
      (t.strokeStyle = s.multiKeyBackground),
        (t.fillStyle = s.multiKeyBackground),
        Ju(t, y, w, m),
        (t.strokeStyle = o.borderColor),
        (t.fillStyle = o.backgroundColor),
        Ju(t, y, w, m);
    } else {
      (t.lineWidth = G(o.borderWidth)
        ? Math.max(...Object.values(o.borderWidth))
        : o.borderWidth || 1),
        (t.strokeStyle = o.borderColor),
        t.setLineDash(o.borderDash || []),
        (t.lineDashOffset = o.borderDashOffset || 0);
      const y = r.leftForLtr(h, u),
        w = r.leftForLtr(r.xPlus(h, 1), u - 2),
        m = zi(o.borderRadius);
      Object.values(m).some((v) => v !== 0)
        ? (t.beginPath(),
          (t.fillStyle = s.multiKeyBackground),
          ma(t, { x: y, y: p, w: u, h: l, radius: m }),
          t.fill(),
          t.stroke(),
          (t.fillStyle = o.backgroundColor),
          t.beginPath(),
          ma(t, { x: w, y: p + 1, w: u - 2, h: l - 2, radius: m }),
          t.fill())
        : ((t.fillStyle = s.multiKeyBackground),
          t.fillRect(y, p, u, l),
          t.strokeRect(y, p, u, l),
          (t.fillStyle = o.backgroundColor),
          t.fillRect(w, p + 1, u - 2, l - 2));
    }
    t.fillStyle = this.labelTextColors[i];
  }
  drawBody(t, n, i) {
    const { body: r } = this,
      {
        bodySpacing: s,
        bodyAlign: o,
        displayColors: a,
        boxHeight: l,
        boxWidth: u,
        boxPadding: c,
      } = i,
      d = Pe(i.bodyFont);
    let h = d.lineHeight,
      f = 0;
    const p = Bi(i.rtl, this.x, this.width),
      y = function (T) {
        n.fillText(T, p.x(t.x + f), t.y + h / 2), (t.y += h + s);
      },
      w = p.textAlign(o);
    let m, v, x, _, S, k, C;
    for (
      n.textAlign = o,
        n.textBaseline = "middle",
        n.font = d.string,
        t.x = so(this, w, i),
        n.fillStyle = i.bodyColor,
        ee(this.beforeBody, y),
        f = a && w !== "right" ? (o === "center" ? u / 2 + c : u + 2 + c) : 0,
        _ = 0,
        k = r.length;
      _ < k;
      ++_
    ) {
      for (
        m = r[_],
          v = this.labelTextColors[_],
          n.fillStyle = v,
          ee(m.before, y),
          x = m.lines,
          a &&
            x.length &&
            (this._drawColorBox(n, t, _, p, i),
            (h = Math.max(d.lineHeight, l))),
          S = 0,
          C = x.length;
        S < C;
        ++S
      )
        y(x[S]), (h = d.lineHeight);
      ee(m.after, y);
    }
    (f = 0), (h = d.lineHeight), ee(this.afterBody, y), (t.y -= s);
  }
  drawFooter(t, n, i) {
    const r = this.footer,
      s = r.length;
    let o, a;
    if (s) {
      const l = Bi(i.rtl, this.x, this.width);
      for (
        t.x = so(this, i.footerAlign, i),
          t.y += i.footerMarginTop,
          n.textAlign = l.textAlign(i.footerAlign),
          n.textBaseline = "middle",
          o = Pe(i.footerFont),
          n.fillStyle = i.footerColor,
          n.font = o.string,
          a = 0;
        a < s;
        ++a
      )
        n.fillText(r[a], l.x(t.x), t.y + o.lineHeight / 2),
          (t.y += o.lineHeight + i.footerSpacing);
    }
  }
  drawBackground(t, n, i, r) {
    const { xAlign: s, yAlign: o } = this,
      { x: a, y: l } = t,
      { width: u, height: c } = i,
      {
        topLeft: d,
        topRight: h,
        bottomLeft: f,
        bottomRight: p,
      } = zi(r.cornerRadius);
    (n.fillStyle = r.backgroundColor),
      (n.strokeStyle = r.borderColor),
      (n.lineWidth = r.borderWidth),
      n.beginPath(),
      n.moveTo(a + d, l),
      o === "top" && this.drawCaret(t, n, i, r),
      n.lineTo(a + u - h, l),
      n.quadraticCurveTo(a + u, l, a + u, l + h),
      o === "center" && s === "right" && this.drawCaret(t, n, i, r),
      n.lineTo(a + u, l + c - p),
      n.quadraticCurveTo(a + u, l + c, a + u - p, l + c),
      o === "bottom" && this.drawCaret(t, n, i, r),
      n.lineTo(a + f, l + c),
      n.quadraticCurveTo(a, l + c, a, l + c - f),
      o === "center" && s === "left" && this.drawCaret(t, n, i, r),
      n.lineTo(a, l + d),
      n.quadraticCurveTo(a, l, a + d, l),
      n.closePath(),
      n.fill(),
      r.borderWidth > 0 && n.stroke();
  }
  _updateAnimationTarget(t) {
    const n = this.chart,
      i = this.$animations,
      r = i && i.x,
      s = i && i.y;
    if (r || s) {
      const o = Mr[t.position].call(this, this._active, this._eventPosition);
      if (!o) return;
      const a = (this._size = mp(this, t)),
        l = Object.assign({}, o, this._size),
        u = yp(n, t, l),
        c = vp(t, l, u, n);
      (r._to !== c.x || s._to !== c.y) &&
        ((this.xAlign = u.xAlign),
        (this.yAlign = u.yAlign),
        (this.width = a.width),
        (this.height = a.height),
        (this.caretX = o.x),
        (this.caretY = o.y),
        this._resolveAnimations().update(this, c));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const n = this.options.setContext(this.getContext());
    let i = this.opacity;
    if (!i) return;
    this._updateAnimationTarget(n);
    const r = { width: this.width, height: this.height },
      s = { x: this.x, y: this.y };
    i = Math.abs(i) < 0.001 ? 0 : i;
    const o = He(n.padding),
      a =
        this.title.length ||
        this.beforeBody.length ||
        this.body.length ||
        this.afterBody.length ||
        this.footer.length;
    n.enabled &&
      a &&
      (t.save(),
      (t.globalAlpha = i),
      this.drawBackground(s, t, r, n),
      ny(t, n.textDirection),
      (s.y += o.top),
      this.drawTitle(s, t, n),
      this.drawBody(s, t, n),
      this.drawFooter(s, t, n),
      iy(t, n.textDirection),
      t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, n) {
    const i = this._active,
      r = t.map(({ datasetIndex: a, index: l }) => {
        const u = this.chart.getDatasetMeta(a);
        if (!u) throw new Error("Cannot find a dataset at index " + a);
        return { datasetIndex: a, element: u.data[l], index: l };
      }),
      s = !ca(i, r),
      o = this._positionChanged(r, n);
    (s || o) &&
      ((this._active = r),
      (this._eventPosition = n),
      (this._ignoreReplayEvents = !0),
      this.update(!0));
  }
  handleEvent(t, n, i = !0) {
    if (n && this._ignoreReplayEvents) return !1;
    this._ignoreReplayEvents = !1;
    const r = this.options,
      s = this._active || [],
      o = this._getActiveElements(t, s, n, i),
      a = this._positionChanged(o, t),
      l = n || !ca(o, s) || a;
    return (
      l &&
        ((this._active = o),
        (r.enabled || r.external) &&
          ((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, n))),
      l
    );
  }
  _getActiveElements(t, n, i, r) {
    const s = this.options;
    if (t.type === "mouseout") return [];
    if (!r)
      return n.filter(
        (a) =>
          this.chart.data.datasets[a.datasetIndex] &&
          this.chart
            .getDatasetMeta(a.datasetIndex)
            .controller.getParsed(a.index) !== void 0
      );
    const o = this.chart.getElementsAtEventForMode(t, s.mode, s, i);
    return s.reverse && o.reverse(), o;
  }
  _positionChanged(t, n) {
    const { caretX: i, caretY: r, options: s } = this,
      o = Mr[s.position].call(this, t, n);
    return o !== !1 && (i !== o.x || r !== o.y);
  }
}
A(nc, "positioners", Mr);
var cT = {
  id: "tooltip",
  _element: nc,
  positioners: Mr,
  afterInit(e, t, n) {
    n && (e.tooltip = new nc({ chart: e, options: n }));
  },
  beforeUpdate(e, t, n) {
    e.tooltip && e.tooltip.initialize(n);
  },
  reset(e, t, n) {
    e.tooltip && e.tooltip.initialize(n);
  },
  afterDraw(e) {
    const t = e.tooltip;
    if (t && t._willRender()) {
      const n = { tooltip: t };
      if (e.notifyPlugins("beforeTooltipDraw", { ...n, cancelable: !0 }) === !1)
        return;
      t.draw(e.ctx), e.notifyPlugins("afterTooltipDraw", n);
    }
  },
  afterEvent(e, t) {
    if (e.tooltip) {
      const n = t.replay;
      e.tooltip.handleEvent(t.event, n, t.inChartArea) && (t.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: { weight: "bold" },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: { weight: "bold" },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (e, t) => t.bodyFont.size,
    boxWidth: (e, t) => t.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: !0,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: { duration: 400, easing: "easeOutQuart" },
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "width", "height", "caretX", "caretY"],
      },
      opacity: { easing: "linear", duration: 200 },
    },
    callbacks: wy,
  },
  defaultRoutes: { bodyFont: "font", footerFont: "font", titleFont: "font" },
  descriptors: {
    _scriptable: (e) => e !== "filter" && e !== "itemSort" && e !== "external",
    _indexable: !1,
    callbacks: { _scriptable: !1, _indexable: !1 },
    animation: { _fallback: !1 },
    animations: { _fallback: "animation" },
  },
  additionalOptionScopes: ["interaction"],
};
const dT = (e, t, n, i) => (
  typeof t == "string"
    ? ((n = e.push(t) - 1), i.unshift({ index: n, label: t }))
    : isNaN(t) && (n = null),
  n
);
function hT(e, t, n, i) {
  const r = e.indexOf(t);
  if (r === -1) return dT(e, t, n, i);
  const s = e.lastIndexOf(t);
  return r !== s ? n : r;
}
const fT = (e, t) => (e === null ? null : at(Math.round(e), 0, t));
function _p(e) {
  const t = this.getLabels();
  return e >= 0 && e < t.length ? t[e] : e;
}
class ic extends gi {
  constructor(t) {
    super(t),
      (this._startValue = void 0),
      (this._valueRange = 0),
      (this._addedLabels = []);
  }
  init(t) {
    const n = this._addedLabels;
    if (n.length) {
      const i = this.getLabels();
      for (const { index: r, label: s } of n) i[r] === s && i.splice(r, 1);
      this._addedLabels = [];
    }
    super.init(t);
  }
  parse(t, n) {
    if (ae(t)) return null;
    const i = this.getLabels();
    return (
      (n =
        isFinite(n) && i[n] === t ? n : hT(i, t, $(n, t), this._addedLabels)),
      fT(n, i.length - 1)
    );
  }
  determineDataLimits() {
    const { minDefined: t, maxDefined: n } = this.getUserBounds();
    let { min: i, max: r } = this.getMinMax(!0);
    this.options.bounds === "ticks" &&
      (t || (i = 0), n || (r = this.getLabels().length - 1)),
      (this.min = i),
      (this.max = r);
  }
  buildTicks() {
    const t = this.min,
      n = this.max,
      i = this.options.offset,
      r = [];
    let s = this.getLabels();
    (s = t === 0 && n === s.length - 1 ? s : s.slice(t, n + 1)),
      (this._valueRange = Math.max(s.length - (i ? 0 : 1), 1)),
      (this._startValue = this.min - (i ? 0.5 : 0));
    for (let o = t; o <= n; o++) r.push({ value: o });
    return r;
  }
  getLabelForValue(t) {
    return _p.call(this, t);
  }
  configure() {
    super.configure(),
      this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(t) {
    return (
      typeof t != "number" && (t = this.parse(t)),
      t === null
        ? NaN
        : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
    );
  }
  getPixelForTick(t) {
    const n = this.ticks;
    return t < 0 || t > n.length - 1 ? null : this.getPixelForValue(n[t].value);
  }
  getValueForPixel(t) {
    return Math.round(
      this._startValue + this.getDecimalForPixel(t) * this._valueRange
    );
  }
  getBasePixel() {
    return this.bottom;
  }
}
A(ic, "id", "category"), A(ic, "defaults", { ticks: { callback: _p } });
function pT(e, t) {
  const n = [],
    {
      bounds: r,
      step: s,
      min: o,
      max: a,
      precision: l,
      count: u,
      maxTicks: c,
      maxDigits: d,
      includeBounds: h,
    } = e,
    f = s || 1,
    p = c - 1,
    { min: y, max: w } = t,
    m = !ae(o),
    v = !ae(a),
    x = !ae(u),
    _ = (w - y) / (d + 1);
  let S = Tf((w - y) / p / f) * f,
    k,
    C,
    T,
    R;
  if (S < 1e-14 && !m && !v) return [{ value: y }, { value: w }];
  (R = Math.ceil(w / S) - Math.floor(y / S)),
    R > p && (S = Tf((R * S) / p / f) * f),
    ae(l) || ((k = Math.pow(10, l)), (S = Math.ceil(S * k) / k)),
    r === "ticks"
      ? ((C = Math.floor(y / S) * S), (T = Math.ceil(w / S) * S))
      : ((C = y), (T = w)),
    m && v && s && Zb((a - o) / s, S / 1e3)
      ? ((R = Math.round(Math.min((a - o) / S, c))),
        (S = (a - o) / R),
        (C = o),
        (T = a))
      : x
      ? ((C = m ? o : C), (T = v ? a : T), (R = u - 1), (S = (T - C) / R))
      : ((R = (T - C) / S),
        Br(R, Math.round(R), S / 1e3)
          ? (R = Math.round(R))
          : (R = Math.ceil(R)));
  const O = Math.max(Ef(S), Ef(C));
  (k = Math.pow(10, ae(l) ? O : l)),
    (C = Math.round(C * k) / k),
    (T = Math.round(T * k) / k);
  let D = 0;
  for (
    m &&
    (h && C !== o
      ? (n.push({ value: o }),
        C < o && D++,
        Br(Math.round((C + D * S) * k) / k, o, Sp(o, _, e)) && D++)
      : C < o && D++);
    D < R;
    ++D
  ) {
    const z = Math.round((C + D * S) * k) / k;
    if (v && z > a) break;
    n.push({ value: z });
  }
  return (
    v && h && T !== a
      ? n.length && Br(n[n.length - 1].value, a, Sp(a, _, e))
        ? (n[n.length - 1].value = a)
        : n.push({ value: a })
      : (!v || T === a) && n.push({ value: T }),
    n
  );
}
function Sp(e, t, { horizontal: n, minRotation: i }) {
  const r = Ft(i),
    s = (n ? Math.sin(r) : Math.cos(r)) || 0.001,
    o = 0.75 * t * ("" + e).length;
  return Math.min(t / s, o);
}
class wa extends gi {
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._endValue = void 0),
      (this._valueRange = 0);
  }
  parse(t, n) {
    return ae(t) ||
      ((typeof t == "number" || t instanceof Number) && !isFinite(+t))
      ? null
      : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options,
      { minDefined: n, maxDefined: i } = this.getUserBounds();
    let { min: r, max: s } = this;
    const o = (l) => (r = n ? r : l),
      a = (l) => (s = i ? s : l);
    if (t) {
      const l = Gi(r),
        u = Gi(s);
      l < 0 && u < 0 ? a(0) : l > 0 && u > 0 && o(0);
    }
    if (r === s) {
      let l = s === 0 ? 1 : Math.abs(s * 0.05);
      a(s + l), t || o(r - l);
    }
    (this.min = r), (this.max = s);
  }
  getTickLimit() {
    const t = this.options.ticks;
    let { maxTicksLimit: n, stepSize: i } = t,
      r;
    return (
      i
        ? ((r = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1),
          r > 1e3 &&
            (console.warn(
              `scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${r} ticks. Limiting to 1000.`
            ),
            (r = 1e3)))
        : ((r = this.computeTickLimit()), (n = n || 11)),
      n && (r = Math.min(n, r)),
      r
    );
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options,
      n = t.ticks;
    let i = this.getTickLimit();
    i = Math.max(2, i);
    const r = {
        maxTicks: i,
        bounds: t.bounds,
        min: t.min,
        max: t.max,
        precision: n.precision,
        step: n.stepSize,
        count: n.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: n.minRotation || 0,
        includeBounds: n.includeBounds !== !1,
      },
      s = this._range || this,
      o = pT(r, s);
    return (
      t.bounds === "ticks" && U0(o, this, "value"),
      t.reverse
        ? (o.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      o
    );
  }
  configure() {
    const t = this.ticks;
    let n = this.min,
      i = this.max;
    if ((super.configure(), this.options.offset && t.length)) {
      const r = (i - n) / Math.max(t.length - 1, 1) / 2;
      (n -= r), (i += r);
    }
    (this._startValue = n), (this._endValue = i), (this._valueRange = i - n);
  }
  getLabelForValue(t) {
    return Qa(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class rc extends wa {
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!0);
    (this.min = Re(t) ? t : 0),
      (this.max = Re(n) ? n : 1),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(),
      n = t ? this.width : this.height,
      i = Ft(this.options.ticks.minRotation),
      r = (t ? Math.sin(i) : Math.cos(i)) || 0.001,
      s = this._resolveTickFontOptions(0);
    return Math.ceil(n / Math.min(40, s.lineHeight / r));
  }
  getPixelForValue(t) {
    return t === null
      ? NaN
      : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
A(rc, "id", "linear"),
  A(rc, "defaults", { ticks: { callback: qa.formatters.numeric } });
const gs = (e) => Math.floor(_n(e)),
  Yn = (e, t) => Math.pow(10, gs(e) + t);
function bp(e) {
  return e / Math.pow(10, gs(e)) === 1;
}
function kp(e, t, n) {
  const i = Math.pow(10, n),
    r = Math.floor(e / i);
  return Math.ceil(t / i) - r;
}
function gT(e, t) {
  const n = t - e;
  let i = gs(n);
  for (; kp(e, t, i) > 10; ) i++;
  for (; kp(e, t, i) < 10; ) i--;
  return Math.min(i, gs(e));
}
function mT(e, { min: t, max: n }) {
  t = it(e.min, t);
  const i = [],
    r = gs(t);
  let s = gT(t, n),
    o = s < 0 ? Math.pow(10, Math.abs(s)) : 1;
  const a = Math.pow(10, s),
    l = r > s ? Math.pow(10, r) : 0,
    u = Math.round((t - l) * o) / o,
    c = Math.floor((t - l) / a / 10) * a * 10;
  let d = Math.floor((u - c) / Math.pow(10, s)),
    h = it(e.min, Math.round((l + c + d * Math.pow(10, s)) * o) / o);
  for (; h < n; )
    i.push({ value: h, major: bp(h), significand: d }),
      d >= 10 ? (d = d < 15 ? 15 : 20) : d++,
      d >= 20 && (s++, (d = 2), (o = s >= 0 ? 1 : o)),
      (h = Math.round((l + c + d * Math.pow(10, s)) * o) / o);
  const f = it(e.max, h);
  return i.push({ value: f, major: bp(f), significand: d }), i;
}
class Cp extends gi {
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._valueRange = 0);
  }
  parse(t, n) {
    const i = wa.prototype.parse.apply(this, [t, n]);
    if (i === 0) {
      this._zero = !0;
      return;
    }
    return Re(i) && i > 0 ? i : null;
  }
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!0);
    (this.min = Re(t) ? Math.max(0, t) : null),
      (this.max = Re(n) ? Math.max(0, n) : null),
      this.options.beginAtZero && (this._zero = !0),
      this._zero &&
        this.min !== this._suggestedMin &&
        !Re(this._userMin) &&
        (this.min = t === Yn(this.min, 0) ? Yn(this.min, -1) : Yn(this.min, 0)),
      this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const { minDefined: t, maxDefined: n } = this.getUserBounds();
    let i = this.min,
      r = this.max;
    const s = (a) => (i = t ? i : a),
      o = (a) => (r = n ? r : a);
    i === r && (i <= 0 ? (s(1), o(10)) : (s(Yn(i, -1)), o(Yn(r, 1)))),
      i <= 0 && s(Yn(r, -1)),
      r <= 0 && o(Yn(i, 1)),
      (this.min = i),
      (this.max = r);
  }
  buildTicks() {
    const t = this.options,
      n = { min: this._userMin, max: this._userMax },
      i = mT(n, this);
    return (
      t.bounds === "ticks" && U0(i, this, "value"),
      t.reverse
        ? (i.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      i
    );
  }
  getLabelForValue(t) {
    return t === void 0
      ? "0"
      : Qa(t, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const t = this.min;
    super.configure(),
      (this._startValue = _n(t)),
      (this._valueRange = _n(this.max) - _n(t));
  }
  getPixelForValue(t) {
    return (
      (t === void 0 || t === 0) && (t = this.min),
      t === null || isNaN(t)
        ? NaN
        : this.getPixelForDecimal(
            t === this.min ? 0 : (_n(t) - this._startValue) / this._valueRange
          )
    );
  }
  getValueForPixel(t) {
    const n = this.getDecimalForPixel(t);
    return Math.pow(10, this._startValue + n * this._valueRange);
  }
}
A(Cp, "id", "logarithmic"),
  A(Cp, "defaults", {
    ticks: { callback: qa.formatters.logarithmic, major: { enabled: !0 } },
  });
function sc(e) {
  const t = e.ticks;
  if (t.display && e.display) {
    const n = He(t.backdropPadding);
    return $(t.font && t.font.size, me.font.size) + n.height;
  }
  return 0;
}
function yT(e, t, n) {
  return (
    (n = he(n) ? n : [n]), { w: yk(e, t.string, n), h: n.length * t.lineHeight }
  );
}
function Tp(e, t, n, i, r) {
  return e === i || e === r
    ? { start: t - n / 2, end: t + n / 2 }
    : e < i || e > r
    ? { start: t - n, end: t }
    : { start: t, end: t + n };
}
function vT(e) {
  const t = {
      l: e.left + e._padding.left,
      r: e.right - e._padding.right,
      t: e.top + e._padding.top,
      b: e.bottom - e._padding.bottom,
    },
    n = Object.assign({}, t),
    i = [],
    r = [],
    s = e._pointLabels.length,
    o = e.options.pointLabels,
    a = o.centerPointLabels ? ue / s : 0;
  for (let l = 0; l < s; l++) {
    const u = o.setContext(e.getPointLabelContext(l));
    r[l] = u.padding;
    const c = e.getPointPosition(l, e.drawingArea + r[l], a),
      d = Pe(u.font),
      h = yT(e.ctx, d, e._pointLabels[l]);
    i[l] = h;
    const f = kt(e.getIndexAngle(l) + a),
      p = Math.round(kd(f)),
      y = Tp(p, c.x, h.w, 0, 180),
      w = Tp(p, c.y, h.h, 90, 270);
    xT(n, t, f, y, w);
  }
  e.setCenterPoint(t.l - n.l, n.r - t.r, t.t - n.t, n.b - t.b),
    (e._pointLabelItems = ST(e, i, r));
}
function xT(e, t, n, i, r) {
  const s = Math.abs(Math.sin(n)),
    o = Math.abs(Math.cos(n));
  let a = 0,
    l = 0;
  i.start < t.l
    ? ((a = (t.l - i.start) / s), (e.l = Math.min(e.l, t.l - a)))
    : i.end > t.r && ((a = (i.end - t.r) / s), (e.r = Math.max(e.r, t.r + a))),
    r.start < t.t
      ? ((l = (t.t - r.start) / o), (e.t = Math.min(e.t, t.t - l)))
      : r.end > t.b &&
        ((l = (r.end - t.b) / o), (e.b = Math.max(e.b, t.b + l)));
}
function wT(e, t, n) {
  const i = e.drawingArea,
    { extra: r, additionalAngle: s, padding: o, size: a } = n,
    l = e.getPointPosition(t, i + r + o, s),
    u = Math.round(kd(kt(l.angle + we))),
    c = CT(l.y, a.h, u),
    d = bT(u),
    h = kT(l.x, a.w, d);
  return {
    visible: !0,
    x: l.x,
    y: c,
    textAlign: d,
    left: h,
    top: c,
    right: h + a.w,
    bottom: c + a.h,
  };
}
function _T(e, t) {
  if (!t) return !0;
  const { left: n, top: i, right: r, bottom: s } = e;
  return !(
    qt({ x: n, y: i }, t) ||
    qt({ x: n, y: s }, t) ||
    qt({ x: r, y: i }, t) ||
    qt({ x: r, y: s }, t)
  );
}
function ST(e, t, n) {
  const i = [],
    r = e._pointLabels.length,
    s = e.options,
    { centerPointLabels: o, display: a } = s.pointLabels,
    l = { extra: sc(s) / 2, additionalAngle: o ? ue / r : 0 };
  let u;
  for (let c = 0; c < r; c++) {
    (l.padding = n[c]), (l.size = t[c]);
    const d = wT(e, c, l);
    i.push(d), a === "auto" && ((d.visible = _T(d, u)), d.visible && (u = d));
  }
  return i;
}
function bT(e) {
  return e === 0 || e === 180 ? "center" : e < 180 ? "left" : "right";
}
function kT(e, t, n) {
  return n === "right" ? (e -= t) : n === "center" && (e -= t / 2), e;
}
function CT(e, t, n) {
  return (
    n === 90 || n === 270 ? (e -= t / 2) : (n > 270 || n < 90) && (e -= t), e
  );
}
function TT(e, t, n) {
  const { left: i, top: r, right: s, bottom: o } = n,
    { backdropColor: a } = t;
  if (!ae(a)) {
    const l = zi(t.borderRadius),
      u = He(t.backdropPadding);
    e.fillStyle = a;
    const c = i - u.left,
      d = r - u.top,
      h = s - i + u.width,
      f = o - r + u.height;
    Object.values(l).some((p) => p !== 0)
      ? (e.beginPath(), ma(e, { x: c, y: d, w: h, h: f, radius: l }), e.fill())
      : e.fillRect(c, d, h, f);
  }
}
function ET(e, t) {
  const {
    ctx: n,
    options: { pointLabels: i },
  } = e;
  for (let r = t - 1; r >= 0; r--) {
    const s = e._pointLabelItems[r];
    if (!s.visible) continue;
    const o = i.setContext(e.getPointLabelContext(r));
    TT(n, o, s);
    const a = Pe(o.font),
      { x: l, y: u, textAlign: c } = s;
    ui(n, e._pointLabels[r], l, u + a.lineHeight / 2, a, {
      color: o.color,
      textAlign: c,
      textBaseline: "middle",
    });
  }
}
function _y(e, t, n, i) {
  const { ctx: r } = e;
  if (n) r.arc(e.xCenter, e.yCenter, t, 0, le);
  else {
    let s = e.getPointPosition(0, t);
    r.moveTo(s.x, s.y);
    for (let o = 1; o < i; o++)
      (s = e.getPointPosition(o, t)), r.lineTo(s.x, s.y);
  }
}
function PT(e, t, n, i, r) {
  const s = e.ctx,
    o = t.circular,
    { color: a, lineWidth: l } = t;
  (!o && !i) ||
    !a ||
    !l ||
    n < 0 ||
    (s.save(),
    (s.strokeStyle = a),
    (s.lineWidth = l),
    s.setLineDash(r.dash),
    (s.lineDashOffset = r.dashOffset),
    s.beginPath(),
    _y(e, n, o, i),
    s.closePath(),
    s.stroke(),
    s.restore());
}
function MT(e, t, n) {
  return Bn(e, { label: n, index: t, type: "pointLabel" });
}
class oo extends wa {
  constructor(t) {
    super(t),
      (this.xCenter = void 0),
      (this.yCenter = void 0),
      (this.drawingArea = void 0),
      (this._pointLabels = []),
      (this._pointLabelItems = []);
  }
  setDimensions() {
    const t = (this._padding = He(sc(this.options) / 2)),
      n = (this.width = this.maxWidth - t.width),
      i = (this.height = this.maxHeight - t.height);
    (this.xCenter = Math.floor(this.left + n / 2 + t.left)),
      (this.yCenter = Math.floor(this.top + i / 2 + t.top)),
      (this.drawingArea = Math.floor(Math.min(n, i) / 2));
  }
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!1);
    (this.min = Re(t) && !isNaN(t) ? t : 0),
      (this.max = Re(n) && !isNaN(n) ? n : 0),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / sc(this.options));
  }
  generateTickLabels(t) {
    wa.prototype.generateTickLabels.call(this, t),
      (this._pointLabels = this.getLabels()
        .map((n, i) => {
          const r = ne(this.options.pointLabels.callback, [n, i], this);
          return r || r === 0 ? r : "";
        })
        .filter((n, i) => this.chart.getDataVisibility(i)));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display
      ? vT(this)
      : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, n, i, r) {
    (this.xCenter += Math.floor((t - n) / 2)),
      (this.yCenter += Math.floor((i - r) / 2)),
      (this.drawingArea -= Math.min(
        this.drawingArea / 2,
        Math.max(t, n, i, r)
      ));
  }
  getIndexAngle(t) {
    const n = le / (this._pointLabels.length || 1),
      i = this.options.startAngle || 0;
    return kt(t * n + Ft(i));
  }
  getDistanceFromCenterForValue(t) {
    if (ae(t)) return NaN;
    const n = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * n : (t - this.min) * n;
  }
  getValueForDistanceFromCenter(t) {
    if (ae(t)) return NaN;
    const n = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - n : this.min + n;
  }
  getPointLabelContext(t) {
    const n = this._pointLabels || [];
    if (t >= 0 && t < n.length) {
      const i = n[t];
      return MT(this.getContext(), t, i);
    }
  }
  getPointPosition(t, n, i = 0) {
    const r = this.getIndexAngle(t) - we + i;
    return {
      x: Math.cos(r) * n + this.xCenter,
      y: Math.sin(r) * n + this.yCenter,
      angle: r,
    };
  }
  getPointPositionForValue(t, n) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(n));
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue());
  }
  getPointLabelPosition(t) {
    const { left: n, top: i, right: r, bottom: s } = this._pointLabelItems[t];
    return { left: n, top: i, right: r, bottom: s };
  }
  drawBackground() {
    const {
      backgroundColor: t,
      grid: { circular: n },
    } = this.options;
    if (t) {
      const i = this.ctx;
      i.save(),
        i.beginPath(),
        _y(
          this,
          this.getDistanceFromCenterForValue(this._endValue),
          n,
          this._pointLabels.length
        ),
        i.closePath(),
        (i.fillStyle = t),
        i.fill(),
        i.restore();
    }
  }
  drawGrid() {
    const t = this.ctx,
      n = this.options,
      { angleLines: i, grid: r, border: s } = n,
      o = this._pointLabels.length;
    let a, l, u;
    if (
      (n.pointLabels.display && ET(this, o),
      r.display &&
        this.ticks.forEach((c, d) => {
          if (d !== 0) {
            l = this.getDistanceFromCenterForValue(c.value);
            const h = this.getContext(d),
              f = r.setContext(h),
              p = s.setContext(h);
            PT(this, f, l, o, p);
          }
        }),
      i.display)
    ) {
      for (t.save(), a = o - 1; a >= 0; a--) {
        const c = i.setContext(this.getPointLabelContext(a)),
          { color: d, lineWidth: h } = c;
        !h ||
          !d ||
          ((t.lineWidth = h),
          (t.strokeStyle = d),
          t.setLineDash(c.borderDash),
          (t.lineDashOffset = c.borderDashOffset),
          (l = this.getDistanceFromCenterForValue(
            n.ticks.reverse ? this.min : this.max
          )),
          (u = this.getPointPosition(a, l)),
          t.beginPath(),
          t.moveTo(this.xCenter, this.yCenter),
          t.lineTo(u.x, u.y),
          t.stroke());
      }
      t.restore();
    }
  }
  drawBorder() {}
  drawLabels() {
    const t = this.ctx,
      n = this.options,
      i = n.ticks;
    if (!i.display) return;
    const r = this.getIndexAngle(0);
    let s, o;
    t.save(),
      t.translate(this.xCenter, this.yCenter),
      t.rotate(r),
      (t.textAlign = "center"),
      (t.textBaseline = "middle"),
      this.ticks.forEach((a, l) => {
        if (l === 0 && !n.reverse) return;
        const u = i.setContext(this.getContext(l)),
          c = Pe(u.font);
        if (
          ((s = this.getDistanceFromCenterForValue(this.ticks[l].value)),
          u.showLabelBackdrop)
        ) {
          (t.font = c.string),
            (o = t.measureText(a.label).width),
            (t.fillStyle = u.backdropColor);
          const d = He(u.backdropPadding);
          t.fillRect(
            -o / 2 - d.left,
            -s - c.size / 2 - d.top,
            o + d.width,
            c.size + d.height
          );
        }
        ui(t, a.label, 0, -s, c, {
          color: u.color,
          strokeColor: u.textStrokeColor,
          strokeWidth: u.textStrokeWidth,
        });
      }),
      t.restore();
  }
  drawTitle() {}
}
A(oo, "id", "radialLinear"),
  A(oo, "defaults", {
    display: !0,
    animate: !0,
    position: "chartArea",
    angleLines: {
      display: !0,
      lineWidth: 1,
      borderDash: [],
      borderDashOffset: 0,
    },
    grid: { circular: !1 },
    startAngle: 0,
    ticks: { showLabelBackdrop: !0, callback: qa.formatters.numeric },
    pointLabels: {
      backdropColor: void 0,
      backdropPadding: 2,
      display: !0,
      font: { size: 10 },
      callback(t) {
        return t;
      },
      padding: 5,
      centerPointLabels: !1,
    },
  }),
  A(oo, "defaultRoutes", {
    "angleLines.color": "borderColor",
    "pointLabels.color": "color",
    "ticks.color": "color",
  }),
  A(oo, "descriptors", { angleLines: { _fallback: "grid" } });
const el = {
    millisecond: { common: !0, size: 1, steps: 1e3 },
    second: { common: !0, size: 1e3, steps: 60 },
    minute: { common: !0, size: 6e4, steps: 60 },
    hour: { common: !0, size: 36e5, steps: 24 },
    day: { common: !0, size: 864e5, steps: 30 },
    week: { common: !1, size: 6048e5, steps: 4 },
    month: { common: !0, size: 2628e6, steps: 12 },
    quarter: { common: !1, size: 7884e6, steps: 4 },
    year: { common: !0, size: 3154e7 },
  },
  Je = Object.keys(el);
function Ep(e, t) {
  return e - t;
}
function Pp(e, t) {
  if (ae(t)) return null;
  const n = e._adapter,
    { parser: i, round: r, isoWeekday: s } = e._parseOpts;
  let o = t;
  return (
    typeof i == "function" && (o = i(o)),
    Re(o) || (o = typeof i == "string" ? n.parse(o, i) : n.parse(o)),
    o === null
      ? null
      : (r &&
          (o =
            r === "week" && (pa(s) || s === !0)
              ? n.startOf(o, "isoWeek", s)
              : n.startOf(o, r)),
        +o)
  );
}
function Mp(e, t, n, i) {
  const r = Je.length;
  for (let s = Je.indexOf(e); s < r - 1; ++s) {
    const o = el[Je[s]],
      a = o.steps ? o.steps : Number.MAX_SAFE_INTEGER;
    if (o.common && Math.ceil((n - t) / (a * o.size)) <= i) return Je[s];
  }
  return Je[r - 1];
}
function OT(e, t, n, i, r) {
  for (let s = Je.length - 1; s >= Je.indexOf(n); s--) {
    const o = Je[s];
    if (el[o].common && e._adapter.diff(r, i, o) >= t - 1) return o;
  }
  return Je[n ? Je.indexOf(n) : 0];
}
function RT(e) {
  for (let t = Je.indexOf(e) + 1, n = Je.length; t < n; ++t)
    if (el[Je[t]].common) return Je[t];
}
function Op(e, t, n) {
  if (!n) e[t] = !0;
  else if (n.length) {
    const { lo: i, hi: r } = Cd(n, t),
      s = n[i] >= t ? n[i] : n[r];
    e[s] = !0;
  }
}
function jT(e, t, n, i) {
  const r = e._adapter,
    s = +r.startOf(t[0].value, i),
    o = t[t.length - 1].value;
  let a, l;
  for (a = s; a <= o; a = +r.add(a, 1, i))
    (l = n[a]), l >= 0 && (t[l].major = !0);
  return t;
}
function Rp(e, t, n) {
  const i = [],
    r = {},
    s = t.length;
  let o, a;
  for (o = 0; o < s; ++o)
    (a = t[o]), (r[a] = o), i.push({ value: a, major: !1 });
  return s === 0 || !n ? i : jT(e, i, r, n);
}
class _a extends gi {
  constructor(t) {
    super(t),
      (this._cache = { data: [], labels: [], all: [] }),
      (this._unit = "day"),
      (this._majorUnit = void 0),
      (this._offsets = {}),
      (this._normalized = !1),
      (this._parseOpts = void 0);
  }
  init(t, n = {}) {
    const i = t.time || (t.time = {}),
      r = (this._adapter = new C2._date(t.adapters.date));
    r.init(n),
      zr(i.displayFormats, r.formats()),
      (this._parseOpts = {
        parser: i.parser,
        round: i.round,
        isoWeekday: i.isoWeekday,
      }),
      super.init(t),
      (this._normalized = n.normalized);
  }
  parse(t, n) {
    return t === void 0 ? null : Pp(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
  }
  determineDataLimits() {
    const t = this.options,
      n = this._adapter,
      i = t.time.unit || "day";
    let { min: r, max: s, minDefined: o, maxDefined: a } = this.getUserBounds();
    function l(u) {
      !o && !isNaN(u.min) && (r = Math.min(r, u.min)),
        !a && !isNaN(u.max) && (s = Math.max(s, u.max));
    }
    (!o || !a) &&
      (l(this._getLabelBounds()),
      (t.bounds !== "ticks" || t.ticks.source !== "labels") &&
        l(this.getMinMax(!1))),
      (r = Re(r) && !isNaN(r) ? r : +n.startOf(Date.now(), i)),
      (s = Re(s) && !isNaN(s) ? s : +n.endOf(Date.now(), i) + 1),
      (this.min = Math.min(r, s - 1)),
      (this.max = Math.max(r + 1, s));
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let n = Number.POSITIVE_INFINITY,
      i = Number.NEGATIVE_INFINITY;
    return t.length && ((n = t[0]), (i = t[t.length - 1])), { min: n, max: i };
  }
  buildTicks() {
    const t = this.options,
      n = t.time,
      i = t.ticks,
      r = i.source === "labels" ? this.getLabelTimestamps() : this._generate();
    t.bounds === "ticks" &&
      r.length &&
      ((this.min = this._userMin || r[0]),
      (this.max = this._userMax || r[r.length - 1]));
    const s = this.min,
      o = this.max,
      a = ik(r, s, o);
    return (
      (this._unit =
        n.unit ||
        (i.autoSkip
          ? Mp(n.minUnit, this.min, this.max, this._getLabelCapacity(s))
          : OT(this, a.length, n.minUnit, this.min, this.max))),
      (this._majorUnit =
        !i.major.enabled || this._unit === "year" ? void 0 : RT(this._unit)),
      this.initOffsets(r),
      t.reverse && a.reverse(),
      Rp(this, a, this._majorUnit)
    );
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip &&
      this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let n = 0,
      i = 0,
      r,
      s;
    this.options.offset &&
      t.length &&
      ((r = this.getDecimalForValue(t[0])),
      t.length === 1
        ? (n = 1 - r)
        : (n = (this.getDecimalForValue(t[1]) - r) / 2),
      (s = this.getDecimalForValue(t[t.length - 1])),
      t.length === 1
        ? (i = s)
        : (i = (s - this.getDecimalForValue(t[t.length - 2])) / 2));
    const o = t.length < 3 ? 0.5 : 0.25;
    (n = at(n, 0, o)),
      (i = at(i, 0, o)),
      (this._offsets = { start: n, end: i, factor: 1 / (n + 1 + i) });
  }
  _generate() {
    const t = this._adapter,
      n = this.min,
      i = this.max,
      r = this.options,
      s = r.time,
      o = s.unit || Mp(s.minUnit, n, i, this._getLabelCapacity(n)),
      a = $(r.ticks.stepSize, 1),
      l = o === "week" ? s.isoWeekday : !1,
      u = pa(l) || l === !0,
      c = {};
    let d = n,
      h,
      f;
    if (
      (u && (d = +t.startOf(d, "isoWeek", l)),
      (d = +t.startOf(d, u ? "day" : o)),
      t.diff(i, n, o) > 1e5 * a)
    )
      throw new Error(
        n + " and " + i + " are too far apart with stepSize of " + a + " " + o
      );
    const p = r.ticks.source === "data" && this.getDataTimestamps();
    for (h = d, f = 0; h < i; h = +t.add(h, a, o), f++) Op(c, h, p);
    return (
      (h === i || r.bounds === "ticks" || f === 1) && Op(c, h, p),
      Object.keys(c)
        .sort(Ep)
        .map((y) => +y)
    );
  }
  getLabelForValue(t) {
    const n = this._adapter,
      i = this.options.time;
    return i.tooltipFormat
      ? n.format(t, i.tooltipFormat)
      : n.format(t, i.displayFormats.datetime);
  }
  format(t, n) {
    const r = this.options.time.displayFormats,
      s = this._unit,
      o = n || r[s];
    return this._adapter.format(t, o);
  }
  _tickFormatFunction(t, n, i, r) {
    const s = this.options,
      o = s.ticks.callback;
    if (o) return ne(o, [t, n, i], this);
    const a = s.time.displayFormats,
      l = this._unit,
      u = this._majorUnit,
      c = l && a[l],
      d = u && a[u],
      h = i[n],
      f = u && d && h && h.major;
    return this._adapter.format(t, r || (f ? d : c));
  }
  generateTickLabels(t) {
    let n, i, r;
    for (n = 0, i = t.length; n < i; ++n)
      (r = t[n]), (r.label = this._tickFormatFunction(r.value, n, t));
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const n = this._offsets,
      i = this.getDecimalForValue(t);
    return this.getPixelForDecimal((n.start + i) * n.factor);
  }
  getValueForPixel(t) {
    const n = this._offsets,
      i = this.getDecimalForPixel(t) / n.factor - n.end;
    return this.min + i * (this.max - this.min);
  }
  _getLabelSize(t) {
    const n = this.options.ticks,
      i = this.ctx.measureText(t).width,
      r = Ft(this.isHorizontal() ? n.maxRotation : n.minRotation),
      s = Math.cos(r),
      o = Math.sin(r),
      a = this._resolveTickFontOptions(0).size;
    return { w: i * s + a * o, h: i * o + a * s };
  }
  _getLabelCapacity(t) {
    const n = this.options.time,
      i = n.displayFormats,
      r = i[n.unit] || i.millisecond,
      s = this._tickFormatFunction(t, 0, Rp(this, [t], this._majorUnit), r),
      o = this._getLabelSize(s),
      a =
        Math.floor(this.isHorizontal() ? this.width / o.w : this.height / o.h) -
        1;
    return a > 0 ? a : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [],
      n,
      i;
    if (t.length) return t;
    const r = this.getMatchingVisibleMetas();
    if (this._normalized && r.length)
      return (this._cache.data = r[0].controller.getAllParsedValues(this));
    for (n = 0, i = r.length; n < i; ++n)
      t = t.concat(r[n].controller.getAllParsedValues(this));
    return (this._cache.data = this.normalize(t));
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let n, i;
    if (t.length) return t;
    const r = this.getLabels();
    for (n = 0, i = r.length; n < i; ++n) t.push(Pp(this, r[n]));
    return (this._cache.labels = this._normalized ? t : this.normalize(t));
  }
  normalize(t) {
    return sk(t.sort(Ep));
  }
}
A(_a, "id", "time"),
  A(_a, "defaults", {
    bounds: "data",
    adapters: {},
    time: {
      parser: !1,
      unit: !1,
      round: !1,
      isoWeekday: !1,
      minUnit: "millisecond",
      displayFormats: {},
    },
    ticks: { source: "auto", callback: !1, major: { enabled: !1 } },
  });
function ao(e, t, n) {
  let i = 0,
    r = e.length - 1,
    s,
    o,
    a,
    l;
  n
    ? (t >= e[i].pos && t <= e[r].pos && ({ lo: i, hi: r } = Qu(e, "pos", t)),
      ({ pos: s, time: a } = e[i]),
      ({ pos: o, time: l } = e[r]))
    : (t >= e[i].time &&
        t <= e[r].time &&
        ({ lo: i, hi: r } = Qu(e, "time", t)),
      ({ time: s, pos: a } = e[i]),
      ({ time: o, pos: l } = e[r]));
  const u = o - s;
  return u ? a + ((l - a) * (t - s)) / u : a;
}
class jp extends _a {
  constructor(t) {
    super(t),
      (this._table = []),
      (this._minPos = void 0),
      (this._tableRange = void 0);
  }
  initOffsets() {
    const t = this._getTimestampsForTable(),
      n = (this._table = this.buildLookupTable(t));
    (this._minPos = ao(n, this.min)),
      (this._tableRange = ao(n, this.max) - this._minPos),
      super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: n, max: i } = this,
      r = [],
      s = [];
    let o, a, l, u, c;
    for (o = 0, a = t.length; o < a; ++o)
      (u = t[o]), u >= n && u <= i && r.push(u);
    if (r.length < 2)
      return [
        { time: n, pos: 0 },
        { time: i, pos: 1 },
      ];
    for (o = 0, a = r.length; o < a; ++o)
      (c = r[o + 1]),
        (l = r[o - 1]),
        (u = r[o]),
        Math.round((c + l) / 2) !== u && s.push({ time: u, pos: o / (a - 1) });
    return s;
  }
  _generate() {
    const t = this.min,
      n = this.max;
    let i = super.getDataTimestamps();
    return (
      (!i.includes(t) || !i.length) && i.splice(0, 0, t),
      (!i.includes(n) || i.length === 1) && i.push(n),
      i.sort((r, s) => r - s)
    );
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length) return t;
    const n = this.getDataTimestamps(),
      i = this.getLabelTimestamps();
    return (
      n.length && i.length
        ? (t = this.normalize(n.concat(i)))
        : (t = n.length ? n : i),
      (t = this._cache.all = t),
      t
    );
  }
  getDecimalForValue(t) {
    return (ao(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const n = this._offsets,
      i = this.getDecimalForPixel(t) / n.factor - n.end;
    return ao(this._table, i * this._tableRange + this._minPos, !0);
  }
}
A(jp, "id", "timeseries"), A(jp, "defaults", _a.defaults);
const Sy = "label";
function Lp(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function LT(e, t) {
  const n = e.options;
  n && t && Object.assign(n, t);
}
function by(e, t) {
  e.labels = t;
}
function ky(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Sy;
  const i = [];
  e.datasets = t.map((r) => {
    const s = e.datasets.find((o) => o[n] === r[n]);
    return !s || !r.data || i.includes(s)
      ? { ...r }
      : (i.push(s), Object.assign(s, r), s);
  });
}
function AT(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Sy;
  const n = { labels: [], datasets: [] };
  return by(n, e.labels), ky(n, e.datasets, t), n;
}
function DT(e, t) {
  const {
      height: n = 150,
      width: i = 300,
      redraw: r = !1,
      datasetIdKey: s,
      type: o,
      data: a,
      options: l,
      plugins: u = [],
      fallbackContent: c,
      updateMode: d,
      ...h
    } = e,
    f = b.useRef(null),
    p = b.useRef(),
    y = () => {
      f.current &&
        ((p.current = new Za(f.current, {
          type: o,
          data: AT(a, s),
          options: l && { ...l },
          plugins: u,
        })),
        Lp(t, p.current));
    },
    w = () => {
      Lp(t, null), p.current && (p.current.destroy(), (p.current = null));
    };
  return (
    b.useEffect(() => {
      !r && p.current && l && LT(p.current, l);
    }, [r, l]),
    b.useEffect(() => {
      !r && p.current && by(p.current.config.data, a.labels);
    }, [r, a.labels]),
    b.useEffect(() => {
      !r && p.current && a.datasets && ky(p.current.config.data, a.datasets, s);
    }, [r, a.datasets]),
    b.useEffect(() => {
      p.current && (r ? (w(), setTimeout(y)) : p.current.update(d));
    }, [r, l, a.labels, a.datasets, d]),
    b.useEffect(() => {
      p.current && (w(), setTimeout(y));
    }, [o]),
    b.useEffect(() => (y(), () => w()), []),
    Tt.createElement(
      "canvas",
      Object.assign({ ref: f, role: "img", height: n, width: i }, h),
      c
    )
  );
}
const IT = b.forwardRef(DT);
function NT(e, t) {
  return (
    Za.register(t),
    b.forwardRef((n, i) =>
      Tt.createElement(IT, Object.assign({}, n, { ref: i, type: e }))
    )
  );
}
const FT = NT("doughnut", Cr);
Za.register(ic, rc, Pr, Oo, nT, cT, Er, eT);
const zT = () => {
    const [e, t] = b.useState([]);
    b.useEffect(() => {
      (async () => {
        const { data: o } = await Y.get(
          `${window.location.origin}/api/v1/blog/myblogs`,
          { withCredentials: !0 }
        );
        t(o.blogs);
      })();
    }, []);
    const n = e && e.filter((s) => s.published === !0),
      i = e && e.filter((s) => s.published === !1),
      r = {
        labels: ["Published", "Not Published"],
        datasets: [
          {
            label: "Blogs",
            data: [n.length > 0 ? n.length : 0, i.length > 0 ? i.length : 0],
            borderColor: ["#0e7490", "#facc15"],
            backgroundColor: ["#0e7490", "#facc15"],
            borderWidth: 1,
          },
        ],
      };
    return g.jsxs("section", {
      className: "chart-container",
      style: { height: "90vh" },
      children: [
        g.jsx("h3", { children: "BLOG ANALYTICS" }),
        g.jsx(FT, { data: r, style: { height: "550px" } }),
      ],
    });
  },
  BT = () => {
    const [e, t] = b.useState("MyBlogs"),
      { mode: n, isAuthenticated: i } = b.useContext(Ne);
    return i
      ? g.jsxs("section", {
          className: n === "dark" ? "dark-bg dashboard" : "light-bg dashboard",
          children: [
            g.jsx(yb, { component: e, setComponent: t }),
            e === "My Profile"
              ? g.jsx(xb, {})
              : e === "Create Blog"
              ? g.jsx(wb, {})
              : e === "Analytics"
              ? g.jsx(zT, {})
              : g.jsx(vb, {}),
          ],
        })
      : g.jsx(za, { to: "/" });
  },
  WT = () => {
    const [e, t] = b.useState(""),
      [n, i] = b.useState(""),
      [r, s] = b.useState(""),
      [o, a] = b.useState(""),
      [l, u] = b.useState(""),
      [c, d] = b.useState(""),
      [h, f] = b.useState(""),
      [p, y] = b.useState(""),
      w = (S) => {
        const k = S.target.files[0],
          C = new FileReader();
        C.readAsDataURL(k),
          (C.onload = () => {
            y(C.result), f(k);
          });
      },
      { mode: m, isAuthenticated: v } = b.useContext(Ne),
      x = ir(),
      _ = async (S) => {
        S.preventDefault();
        const k = new FormData();
        k.append("name", e),
          k.append("email", n),
          k.append("phone", r),
          k.append("password", o),
          k.append("education", c),
          k.append("role", l),
          k.append("avatar", h);
        try {
          const { data: C } = await Y.post(
            `${window.location.origin}/api/v1/user/register`,
            k,
            {
              withCredentials: !0,
              headers: { "Content-Type": "multipart/form-data" },
            }
          );
          t(""),
            i(""),
            d(""),
            a(""),
            s(""),
            u(""),
            f(""),
            y(""),
            Ye.success(C.message),
            x("/");
        } catch (C) {
          Ye.error(C.response.data.message);
        }
      };
    return v
      ? g.jsx(za, { to: "/" })
      : g.jsx("article", {
          className: m === "dark" ? "dark-bg" : "light-bg",
          children: g.jsx("section", {
            className: "auth-form",
            children: g.jsxs("form", {
              onSubmit: _,
              children: [
                g.jsx("h1", { children: "REGISTER" }),
                g.jsxs("select", {
                  value: l,
                  onChange: (S) => u(S.target.value),
                  children: [
                    g.jsx("option", { value: "", children: "SELECT ROLE" }),
                    g.jsx("option", { value: "Reader", children: "READER" }),
                    g.jsx("option", { value: "Author", children: "AUTHOR" }),
                  ],
                }),
                g.jsx("div", {
                  children: g.jsx("input", {
                    type: "text",
                    placeholder: "Your Name",
                    value: e,
                    onChange: (S) => t(S.target.value),
                  }),
                }),
                g.jsx("div", {
                  children: g.jsx("input", {
                    type: "email",
                    placeholder: "Your Email",
                    value: n,
                    onChange: (S) => i(S.target.value),
                  }),
                }),
                g.jsx("div", {
                  children: g.jsx("input", {
                    type: "number",
                    placeholder: "Phone Number",
                    value: r,
                    onChange: (S) => s(S.target.value),
                  }),
                }),
                g.jsx("div", {
                  children: g.jsx("input", {
                    type: "password",
                    placeholder: "Password",
                    value: o,
                    onChange: (S) => a(S.target.value),
                  }),
                }),
                g.jsxs("select", {
                  value: c,
                  onChange: (S) => d(S.target.value),
                  children: [
                    g.jsx("option", {
                      value: "",
                      children: "SELECT YOUR EDUCATION",
                    }),
                    g.jsx("option", { value: "Matric", children: "Matric" }),
                    g.jsx("option", {
                      value: "Intermediate",
                      children: "Intermediate",
                    }),
                    g.jsx("option", {
                      value: "Graducation",
                      children: "Graducation",
                    }),
                    g.jsx("option", { value: "Masters", children: "Masters" }),
                    g.jsx("option", { value: "PhD", children: "PhD" }),
                  ],
                }),
                g.jsxs("div", {
                  style: {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  },
                  children: [
                    g.jsx("div", {
                      className: "avatar",
                      children: g.jsx("img", {
                        src: p ? `${p}` : "/pic.jpg",
                        alt: "avatar",
                      }),
                    }),
                    g.jsx("input", {
                      type: "file",
                      onChange: w,
                      className: "avatar_input_tag",
                      style: { border: "none" },
                    }),
                  ],
                }),
                g.jsxs("p", {
                  children: [
                    "Already Registered? ",
                    g.jsx(Te, { to: "/login", children: "Login Now" }),
                  ],
                }),
                g.jsx("button", {
                  className: "submit-btn",
                  type: "submit",
                  children: "REGISTER",
                }),
              ],
            }),
          }),
        });
  },
  $T = () => {
    const [e, t] = b.useState(""),
      [n, i] = b.useState(""),
      [r, s] = b.useState(""),
      { mode: o, isAuthenticated: a, setIsAuthenticated: l } = b.useContext(Ne),
      u = ir(),
      c = async (d) => {
        d.preventDefault(),
          await Y.post(
            `${window.location.origin}/api/v1/user/login`,
            { email: e, password: n, role: r },
            {
              withCredentials: !0,
              headers: { "Content-Type": "application/json" },
            }
          )
            .then((h) => {
              Ye.success(h.data.message), t(""), i(""), s(""), u("/"), l(!0);
            })
            .catch((h) => {
              Ye.error(h.response.data.message);
            });
      };
    return a
      ? g.jsx(za, { to: "/" })
      : g.jsx("article", {
          className: o === "dark" ? "dark-bg" : "light-bg",
          children: g.jsx("section", {
            className: "auth-form",
            children: g.jsxs("form", {
              onSubmit: c,
              children: [
                g.jsx("h1", { children: "LOGIN" }),
                g.jsx("div", {
                  children: g.jsxs("select", {
                    value: r,
                    onChange: (d) => s(d.target.value),
                    children: [
                      g.jsx("option", { value: "", children: "SELECT ROLE" }),
                      g.jsx("option", { value: "Reader", children: "READER" }),
                      g.jsx("option", { value: "Author", children: "AUTHOR" }),
                    ],
                  }),
                }),
                g.jsx("div", {
                  children: g.jsx("input", {
                    type: "email",
                    placeholder: "Your Email",
                    value: e,
                    onChange: (d) => t(d.target.value),
                  }),
                }),
                g.jsx("div", {
                  children: g.jsx("input", {
                    type: "password",
                    placeholder: "Password",
                    value: n,
                    onChange: (d) => i(d.target.value),
                  }),
                }),
                g.jsxs("p", {
                  children: [
                    "Don't have any Account? ",
                    g.jsx(Te, { to: "/register", children: "Register Now" }),
                  ],
                }),
                g.jsx("button", {
                  className: "submit-btn",
                  type: "submit",
                  children: "LOGIN",
                }),
              ],
            }),
          }),
        });
  },
  HT = () => {
    const [e, t] = b.useState([]),
      { mode: n } = b.useContext(Ne);
    return (
      b.useEffect(() => {
        (async () => {
          const { data: r } = await Y.get(
            `${window.location.origin}/api/v1/user/authors`,
            { withCredentials: !0 }
          );
          t(r.authors);
        })();
      }, []),
      g.jsxs("article", {
        className:
          n === "dark" ? "dark-bg all-authors" : "light-bg all-authors",
        children: [
          g.jsx("h2", { children: "ALL AUTHORS" }),
          g.jsx("div", {
            className: "container",
            children:
              e && e.length > 0
                ? e.map((i) =>
                    g.jsxs(
                      "div",
                      {
                        className: "card",
                        children: [
                          g.jsx("img", {
                            src: i.avatar.url,
                            alt: "author_avatar",
                          }),
                          g.jsx("h3", { children: i.name }),
                          g.jsx("p", { children: i.role }),
                        ],
                      },
                      i._id
                    )
                  )
                : g.jsx(Ba, {
                    color: "gray",
                    size: 50,
                    style: { padding: "200px 0" },
                  }),
          }),
        ],
      })
    );
  },
  UT = () => {
    const { id: e } = Zm(),
      [t, n] = b.useState(""),
      [i, r] = b.useState(""),
      [s, o] = b.useState(""),
      [a, l] = b.useState(""),
      [u, c] = b.useState(""),
      [d, h] = b.useState(""),
      [f, p] = b.useState(""),
      [y, w] = b.useState(""),
      [m, v] = b.useState(""),
      [x, _] = b.useState(""),
      [S, k] = b.useState(""),
      [C, T] = b.useState(""),
      [R, O] = b.useState(""),
      [D, z] = b.useState(""),
      [J, ye] = b.useState(""),
      [H, X] = b.useState(""),
      [Q, M] = b.useState(""),
      [L, F] = b.useState(!0);
    b.useEffect(() => {
      (async () => {
        try {
          const { data: N } = await Y.get(
            `${window.location.origin}/api/v1/blog/singleblog/${e}`,
            { withCredentials: !0 }
          );
          M(N.blog.title),
            o(N.blog.intro),
            n(N.blog.category),
            F(N.blog.published),
            r(N.blog.mainImage.url),
            l(N.blog.paraOneTitle),
            h(N.blog.paraOneDescription),
            N.blog.paraOneImage && c(N.blog.paraOneImage.url),
            p(N.blog.paraTwoTitle),
            v(N.blog.paraTwoDescription),
            N.blog.paraTwoImage && w(N.blog.paraTwoImage.url),
            _(N.blog.paraThreeTitle),
            T(N.blog.paraThreeDescription),
            N.blog.paraThreeImage && k(N.blog.paraThreeImage.url);
        } catch (N) {
          console.log(N);
        }
      })();
    }, [e]);
    const q = async (I) => {
        I.preventDefault();
        const N = new FormData();
        N.append("title", Q),
          N.append("intro", s),
          N.append("category", t),
          console.log(L),
          N.append("published", L),
          N.append("mainImage", i),
          a && a.length !== 0
            ? N.append("paraOneTitle", a)
            : N.append("paraOneTitle", ""),
          d && d.length !== 0
            ? N.append("paraOneDescription", d)
            : N.append("paraOneDescription", ""),
          u && N.append("paraOneImage", u),
          f && f.length !== 0
            ? N.append("paraTwoTitle", f)
            : N.append("paraTwoTitle", ""),
          m && m.length !== 0
            ? N.append("paraTwoDescription", m)
            : N.append("paraTwoDescription", ""),
          y && N.append("paraTwoImage", y),
          x && x.length !== 0
            ? N.append("paraThreeTitle", x)
            : N.append("paraThreeTitle", ""),
          C && C.length !== 0
            ? N.append("paraThreeDescription", C)
            : N.append("paraThreeDescription", ""),
          S && N.append("paraThreeImage", S);
        try {
          const { data: ke } = await Y.put(
            `http://localhost:4000/api/v1/blog/update/${e}`,
            N,
            { withCredentials: !0 }
          );
          Ye.success(ke.message);
        } catch (ke) {
          Ye.error(ke.response.data.message);
        }
      },
      Z = (I) => {
        const N = I.target.files[0],
          ke = new FileReader();
        ke.readAsDataURL(N),
          (ke.onload = () => {
            O(ke.result), r(N);
          });
      },
      Ge = (I) => {
        const N = I.target.files[0],
          ke = new FileReader();
        ke.readAsDataURL(N),
          (ke.onload = () => {
            z(ke.result), c(N);
          });
      },
      be = (I) => {
        const N = I.target.files[0],
          ke = new FileReader();
        ke.readAsDataURL(N),
          (ke.onload = () => {
            ye(ke.result), w(N);
          });
      },
      W = (I) => {
        const N = I.target.files[0],
          ke = new FileReader();
        ke.readAsDataURL(N),
          (ke.onload = () => {
            X(ke.result), k(N);
          });
      },
      { mode: B } = b.useContext(Ne);
    return g.jsx("article", {
      className: B === "dark" ? "dark-bg" : "light-bg",
      children: g.jsxs("section", {
        className: "update-blog",
        children: [
          g.jsx("h3", { children: "UPDATE BLOG" }),
          g.jsxs("form", {
            children: [
              g.jsxs("div", {
                className: "category-box",
                children: [
                  g.jsx("label", { children: "Category" }),
                  g.jsxs("select", {
                    value: t,
                    onChange: (I) => n(I.target.value),
                    children: [
                      g.jsx("option", {
                        value: "",
                        children: "Select Blog Category",
                      }),
                      g.jsx("option", {
                        value: "Lifestyle",
                        children: "Lifestyle",
                      }),
                      g.jsx("option", {
                        value: "Technology",
                        children: "Technology",
                      }),
                      g.jsx("option", { value: "Sports", children: "Sports" }),
                      g.jsx("option", { value: "Travel", children: "Travel" }),
                      g.jsx("option", {
                        value: "Business",
                        children: "Business",
                      }),
                      g.jsx("option", {
                        value: "Economy",
                        children: "Economy",
                      }),
                    ],
                  }),
                ],
              }),
              g.jsx("input", {
                type: "text",
                placeholder: "BLOG MAIN TITLE",
                value: Q,
                onChange: (I) => M(I.target.value),
              }),
              g.jsxs("div", {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                },
                children: [
                  g.jsx("label", { children: "BLOG MAIN IMAGE" }),
                  g.jsx("img", {
                    src: R ? `${R}` : i ? `${i}` : "/imgPL.webp",
                    alt: "subParaOneImg",
                  }),
                  g.jsx("input", {
                    type: "file",
                    onChange: Z,
                    style: { border: "none" },
                  }),
                ],
              }),
              g.jsx("textarea", {
                rows: "25",
                className: "intro",
                placeholder:
                  "BLOG INTRO..... (Must contain at least 250 characters!)",
                value: s,
                onChange: (I) => o(I.target.value),
              }),
              g.jsxs("div", {
                className: "sub-para",
                children: [
                  g.jsx("input", {
                    type: "text",
                    placeholder: "Paragraph one title",
                    value: a && a.length > 0 ? a : "",
                    onChange: (I) => l(I.target.value),
                  }),
                  g.jsx("img", {
                    src: D ? `${D}` : u ? `${u}` : "/imgPL.webp",
                    alt: "subParaOneImg",
                  }),
                  g.jsx("input", {
                    type: "file",
                    onChange: Ge,
                    style: { border: "none" },
                  }),
                  g.jsx("textarea", {
                    rows: "10",
                    placeholder: "Blog First Sub Paragraph Comes Here...",
                    value: d && d.length > 0 ? d : "",
                    onChange: (I) => h(I.target.value),
                  }),
                ],
              }),
              g.jsxs("div", {
                className: "sub-para",
                children: [
                  g.jsx("input", {
                    type: "text",
                    placeholder: "Paragraph two title",
                    value: f && f.length > 0 ? f : "",
                    onChange: (I) => p(I.target.value),
                  }),
                  g.jsx("img", {
                    src: J ? `${J}` : y ? `${y}` : "/imgPL.webp",
                    alt: "subParaOneImg",
                  }),
                  g.jsx("input", {
                    type: "file",
                    onChange: be,
                    style: { border: "none" },
                  }),
                  g.jsx("textarea", {
                    rows: "10",
                    placeholder: "Blog Second Sub Paragraph Comes Here...",
                    value: m && m.length > 0 ? m : "",
                    onChange: (I) => v(I.target.value),
                  }),
                ],
              }),
              g.jsxs("div", {
                className: "sub-para",
                children: [
                  g.jsx("input", {
                    type: "text",
                    placeholder: "Paragraph three title",
                    value: x && x.length > 0 ? x : "",
                    onChange: (I) => _(I.target.value),
                  }),
                  g.jsx("img", {
                    src: H ? `${H}` : S ? `${S}` : "/imgPL.webp",
                    alt: "subParaOneImg",
                  }),
                  g.jsx("input", {
                    type: "file",
                    onChange: W,
                    style: { border: "none" },
                  }),
                  g.jsx("textarea", {
                    rows: "10",
                    placeholder: "Blog Third Sub Paragraph Comes Here...",
                    value: C && C.length > 0 ? C : "",
                    onChange: (I) => T(I.target.value),
                  }),
                ],
              }),
              g.jsxs("div", {
                className: "publish-box",
                children: [
                  g.jsx("label", { children: "Published?" }),
                  g.jsxs("select", {
                    value: L === null ? "" : L,
                    onChange: (I) => F(I.target.value === "true"),
                    children: [
                      g.jsx("option", { value: !0, children: "Yes" }),
                      g.jsx("option", { value: !1, children: "No" }),
                    ],
                  }),
                ],
              }),
              g.jsx("button", {
                className: "update-btn",
                onClick: q,
                children: "UPDATE",
              }),
            ],
          }),
        ],
      }),
    });
  },
  VT = () => {
    const {
      setUser: e,
      isAuthenticated: t,
      setIsAuthenticated: n,
      user: i,
      setBlogs: r,
    } = b.useContext(Ne);
    return (
      b.useEffect(() => {
        const s = async () => {
            if (t)
              try {
                const { data: a } = await Y.get(
                  `${window.location.origin}/api/v1/user/myprofile`,
                  { withCredentials: !0 }
                );
                e(a.user), n(!0);
              } catch (a) {
                console.log(a), n(!1), e({});
              }
          },
          o = async () => {
            try {
              const { data: a } = await Y.get(
                `${window.location.origin}/api/v1/blog/all`,
                { withCredentials: !0 }
              );
              r(a.allBlogs);
            } catch (a) {
              console.log(a), r([]);
            }
          };
        s(), o();
      }, [t, i]),
      g.jsx(g.Fragment, {
        children: g.jsxs(Qx, {
          children: [
            g.jsx(db, {}),
            g.jsxs(Hx, {
              children: [
                g.jsx(jt, { path: "/", element: g.jsx(cS, {}) }),
                g.jsx(jt, { path: "/register", element: g.jsx(WT, {}) }),
                g.jsx(jt, { path: "/login", element: g.jsx($T, {}) }),
                g.jsx(jt, { path: "/blogs", element: g.jsx(hS, {}) }),
                g.jsx(jt, { path: "/blog/:id", element: g.jsx(ib, {}) }),
                g.jsx(jt, { path: "/about", element: g.jsx(dS, {}) }),
                g.jsx(jt, { path: "/authors", element: g.jsx(HT, {}) }),
                g.jsx(jt, { path: "/dashboard", element: g.jsx(BT, {}) }),
                g.jsx(jt, { path: "/blog/update/:id", element: g.jsx(UT, {}) }),
              ],
            }),
            g.jsx(gb, {}),
            g.jsx(nb, {}),
          ],
        }),
      })
    );
  },
  Ne = b.createContext({ isAuthenticated: !1 }),
  YT = () => {
    const [e, t] = b.useState(!1),
      [n, i] = b.useState({}),
      [r, s] = b.useState([]),
      [o, a] = b.useState("dark");
    return g.jsx(Ne.Provider, {
      value: {
        user: n,
        setUser: i,
        blogs: r,
        setBlogs: s,
        mode: o,
        setMode: a,
        isAuthenticated: e,
        setIsAuthenticated: t,
      },
      children: g.jsx(VT, {}),
    });
  };
Hl.createRoot(document.getElementById("root")).render(
  g.jsx(Tt.StrictMode, { children: g.jsx(YT, {}) })
);
