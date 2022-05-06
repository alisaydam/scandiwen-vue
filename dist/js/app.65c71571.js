(function () {
  "use strict";
  var e = {
      1699: function (e, t, n) {
        var r = n(9963),
          o = n(6252);
        function c(e, t, n, r, c, u) {
          const i = (0, o.up)("router-view"),
            a = (0, o.up)("Footer");
          return (
            (0, o.wg)(), (0, o.iD)(o.HY, null, [(0, o.Wm)(i), (0, o.Wm)(a)], 64)
          );
        }
        function u(e, t, n, r, c, u) {
          const i = (0, o.up)("Navbar"),
            a = (0, o.up)("Products");
          return (
            (0, o.wg)(),
            (0, o.iD)(
              o.HY,
              null,
              [
                (0, o.Wm)(
                  i,
                  {
                    title: "Product List",
                    leftItem: "ADD",
                    rightItem: "MASS DELETE",
                    onRightEvent: r.massDelete,
                    onLeftEvent: u.addProduct,
                  },
                  null,
                  8,
                  ["onRightEvent", "onLeftEvent"]
                ),
                (0, o.Wm)(
                  a,
                  {
                    value: r.checkedProducts,
                    "onUpdate:value":
                      t[0] || (t[0] = (e) => (r.checkedProducts = e)),
                    products: r.products,
                  },
                  null,
                  8,
                  ["value", "products"]
                ),
              ],
              64
            )
          );
        }
        n(6699);
        const i = { class: "products" };
        function a(e, t, n, r, c, u) {
          const a = (0, o.up)("Product");
          return (
            (0, o.wg)(),
            (0, o.iD)("div", i, [
              ((0, o.wg)(!0),
              (0, o.iD)(
                o.HY,
                null,
                (0, o.Ko)(
                  n.products,
                  (e) => (
                    (0, o.wg)(),
                    (0, o.j4)(
                      a,
                      {
                        checked: n.value.includes(e.id),
                        "onUpdate:checked": (t) => r.check(e.id, t),
                        product: e,
                        key: e.id,
                      },
                      null,
                      8,
                      ["checked", "onUpdate:checked", "product"]
                    )
                  )
                ),
                128
              )),
            ])
          );
        }
        var d = n(3577);
        const s = { class: "con" },
          l = { class: "product-con" },
          p = ["checked", "id"],
          f = ["for"];
        function v(e, t, n, r, c, u) {
          return (
            (0, o.wg)(),
            (0, o.iD)("div", s, [
              (0, o._)("div", l, [
                (0, o._)(
                  "input",
                  {
                    onInput:
                      t[0] ||
                      (t[0] = (t) =>
                        e.$emit("update:checked", t.target.checked)),
                    type: "checkbox",
                    checked: n.checked,
                    id: n.product.id,
                    class: "delete-checkbox",
                  },
                  null,
                  40,
                  p
                ),
                (0, o._)(
                  "label",
                  { for: n.product.id },
                  [
                    (0, o._)("p", null, (0, d.zw)(n.product.SKU), 1),
                    (0, o._)("p", null, (0, d.zw)(n.product.name), 1),
                    (0, o._)("p", null, (0, d.zw)(n.product.price) + " $", 1),
                    (0, o._)(
                      "p",
                      null,
                      (0, d.zw)(
                        "Book" === n.product.productType
                          ? "Weight: "
                          : "DVD" === n.product.productType
                          ? "Size: "
                          : "Dimentions: "
                      ) +
                        " " +
                        (0, d.zw)(
                          n.product.size ||
                            n.product.dimentions ||
                            n.product.weight
                        ) +
                        " " +
                        (0, d.zw)(
                          "Book" === n.product.productType
                            ? "KG"
                            : "DVD" === n.product.productType
                            ? "MB"
                            : ""
                        ),
                      1
                    ),
                  ],
                  8,
                  f
                ),
              ]),
            ])
          );
        }
        var h = {
            name: "Product",
            props: { product: Object, checked: { type: Boolean } },
          },
          m = n(3744);
        const g = (0, m.Z)(h, [
          ["render", v],
          ["__scopeId", "data-v-600d4eaf"],
        ]);
        var b = g,
          w = {
            emits: ["update:value"],
            props: {
              value: { type: Array, required: !0 },
              products: { type: Array, required: !0 },
            },
            setup(e, t) {
              const n = (n, r) => {
                let o = [...e.value];
                r ? o.push(n) : o.splice(o.indexOf(n), 1),
                  t.emit("update:value", o);
              };
              return { check: n };
            },
            components: { Product: b },
          };
        const y = (0, m.Z)(w, [
          ["render", a],
          ["__scopeId", "data-v-494048b3"],
        ]);
        var k = y,
          _ = n(2358),
          E = n(2262),
          D = {
            name: "HomeView",
            setup() {
              let e = (0, E.iH)([]),
                t = (0, E.iH)([]);
              const n = async () => {
                  const e = await fetch(
                      "https://product-api-sw.herokuapp.com/api/product/read.php"
                    ),
                    n = await e.json();
                  t.value = n.data;
                },
                r = async () => {
                  const t = await fetch(
                    "https://product-api-sw.herokuapp.com/api/product/delete.php",
                    {
                      method: "DELETE",
                      headers: { "Content-type": "application/json" },
                      body: JSON.stringify({
                        products: Object.values(e.value),
                      }),
                    }
                  );
                  await t.json();
                  n();
                };
              return (
                (0, o.bv)(() => {
                  n();
                }),
                {
                  massDelete: r,
                  checkedProducts: e,
                  getProducts: n,
                  products: t,
                }
              );
            },
            components: { Products: k, Navbar: _.Z },
            methods: {
              addProduct() {
                this.$router.push("/add-product");
              },
            },
          };
        const O = (0, m.Z)(D, [["render", u]]);
        var P = O;
        const j = (e) => (
            (0, o.dD)("data-v-205d6126"), (e = e()), (0, o.Cn)(), e
          ),
          S = j(() => (0, o._)("div", { class: "line" }, null, -1)),
          C = j(() => (0, o._)("p", null, "Scandiweb Test assignment", -1)),
          T = [S, C];
        function A(e, t, n, r, c, u) {
          return (0, o.wg)(), (0, o.iD)("footer", null, T);
        }
        var I = { name: "Footer" };
        const z = (0, m.Z)(I, [
          ["render", A],
          ["__scopeId", "data-v-205d6126"],
        ]);
        var N = z,
          L = { name: "App", components: { HomeView: P, Footer: N } };
        const x = (0, m.Z)(L, [["render", c]]);
        var H = x,
          Z = n(2119);
        const B = [
            { path: "/", name: "home", component: P },
            {
              path: "/add-product",
              name: "add-product",
              component: () => n.e(709).then(n.bind(n, 8889)),
            },
          ],
          F = (0, Z.p7)({ history: (0, Z.PO)("/scandiwen-vue/"), routes: B });
        var U = F;
        (0, r.ri)(H).use(U).mount("#app");
      },
      2358: function (e, t, n) {
        n.d(t, {
          Z: function () {
            return f;
          },
        });
        var r = n(6252),
          o = n(3577);
        const c = { class: "brand" },
          u = { class: "nav-lists", id: "menu" },
          i = { class: "nav-items" },
          a = { class: "nav-items" };
        function d(e, t, n, d, s, l) {
          return (
            (0, r.wg)(),
            (0, r.iD)("nav", null, [
              (0, r._)("h3", c, (0, o.zw)(n.title), 1),
              (0, r._)("ul", u, [
                (0, r._)("li", i, [
                  (0, r._)(
                    "button",
                    {
                      class: "link",
                      href: "#",
                      onClick: t[0] || (t[0] = (t) => e.$emit("leftEvent")),
                    },
                    (0, o.zw)(n.leftItem),
                    1
                  ),
                ]),
                (0, r._)("li", a, [
                  (0, r._)(
                    "button",
                    {
                      class: "link",
                      href: "#",
                      onClick: t[1] || (t[1] = (t) => e.$emit("rightEvent")),
                    },
                    (0, o.zw)(n.rightItem),
                    1
                  ),
                ]),
              ]),
            ])
          );
        }
        var s = {
            name: "Navbar",
            props: { title: String, rightItem: String, leftItem: String },
          },
          l = n(3744);
        const p = (0, l.Z)(s, [
          ["render", d],
          ["__scopeId", "data-v-367aa91a"],
        ]);
        var f = p;
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var c = (t[r] = { exports: {} });
    return e[r](c, c.exports, n), c.exports;
  }
  (n.m = e),
    (function () {
      var e = [];
      n.O = function (t, r, o, c) {
        if (!r) {
          var u = 1 / 0;
          for (s = 0; s < e.length; s++) {
            (r = e[s][0]), (o = e[s][1]), (c = e[s][2]);
            for (var i = !0, a = 0; a < r.length; a++)
              (!1 & c || u >= c) &&
              Object.keys(n.O).every(function (e) {
                return n.O[e](r[a]);
              })
                ? r.splice(a--, 1)
                : ((i = !1), c < u && (u = c));
            if (i) {
              e.splice(s--, 1);
              var d = o();
              void 0 !== d && (t = d);
            }
          }
          return t;
        }
        c = c || 0;
        for (var s = e.length; s > 0 && e[s - 1][2] > c; s--) e[s] = e[s - 1];
        e[s] = [r, o, c];
      };
    })(),
    (function () {
      n.d = function (e, t) {
        for (var r in t)
          n.o(t, r) &&
            !n.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      };
    })(),
    (function () {
      (n.f = {}),
        (n.e = function (e) {
          return Promise.all(
            Object.keys(n.f).reduce(function (t, r) {
              return n.f[r](e, t), t;
            }, [])
          );
        });
    })(),
    (function () {
      n.u = function (e) {
        return "js/add-product.e44a0ac6.js";
      };
    })(),
    (function () {
      n.miniCssF = function (e) {
        return "css/add-product.1cea4492.css";
      };
    })(),
    (function () {
      n.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      };
    })(),
    (function () {
      var e = {},
        t = "scandiweb-vue:";
      n.l = function (r, o, c, u) {
        if (e[r]) e[r].push(o);
        else {
          var i, a;
          if (void 0 !== c)
            for (
              var d = document.getElementsByTagName("script"), s = 0;
              s < d.length;
              s++
            ) {
              var l = d[s];
              if (
                l.getAttribute("src") == r ||
                l.getAttribute("data-webpack") == t + c
              ) {
                i = l;
                break;
              }
            }
          i ||
            ((a = !0),
            (i = document.createElement("script")),
            (i.charset = "utf-8"),
            (i.timeout = 120),
            n.nc && i.setAttribute("nonce", n.nc),
            i.setAttribute("data-webpack", t + c),
            (i.src = r)),
            (e[r] = [o]);
          var p = function (t, n) {
              (i.onerror = i.onload = null), clearTimeout(f);
              var o = e[r];
              if (
                (delete e[r],
                i.parentNode && i.parentNode.removeChild(i),
                o &&
                  o.forEach(function (e) {
                    return e(n);
                  }),
                t)
              )
                return t(n);
            },
            f = setTimeout(
              p.bind(null, void 0, { type: "timeout", target: i }),
              12e4
            );
          (i.onerror = p.bind(null, i.onerror)),
            (i.onload = p.bind(null, i.onload)),
            a && document.head.appendChild(i);
        }
      };
    })(),
    (function () {
      n.r = function (e) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      n.p = "/scandiwen-vue/";
    })(),
    (function () {
      var e = function (e, t, n, r) {
          var o = document.createElement("link");
          (o.rel = "stylesheet"), (o.type = "text/css");
          var c = function (c) {
            if (((o.onerror = o.onload = null), "load" === c.type)) n();
            else {
              var u = c && ("load" === c.type ? "missing" : c.type),
                i = (c && c.target && c.target.href) || t,
                a = new Error(
                  "Loading CSS chunk " + e + " failed.\n(" + i + ")"
                );
              (a.code = "CSS_CHUNK_LOAD_FAILED"),
                (a.type = u),
                (a.request = i),
                o.parentNode.removeChild(o),
                r(a);
            }
          };
          return (
            (o.onerror = o.onload = c),
            (o.href = t),
            document.head.appendChild(o),
            o
          );
        },
        t = function (e, t) {
          for (
            var n = document.getElementsByTagName("link"), r = 0;
            r < n.length;
            r++
          ) {
            var o = n[r],
              c = o.getAttribute("data-href") || o.getAttribute("href");
            if ("stylesheet" === o.rel && (c === e || c === t)) return o;
          }
          var u = document.getElementsByTagName("style");
          for (r = 0; r < u.length; r++) {
            (o = u[r]), (c = o.getAttribute("data-href"));
            if (c === e || c === t) return o;
          }
        },
        r = function (r) {
          return new Promise(function (o, c) {
            var u = n.miniCssF(r),
              i = n.p + u;
            if (t(u, i)) return o();
            e(r, i, o, c);
          });
        },
        o = { 143: 0 };
      n.f.miniCss = function (e, t) {
        var n = { 709: 1 };
        o[e]
          ? t.push(o[e])
          : 0 !== o[e] &&
            n[e] &&
            t.push(
              (o[e] = r(e).then(
                function () {
                  o[e] = 0;
                },
                function (t) {
                  throw (delete o[e], t);
                }
              ))
            );
      };
    })(),
    (function () {
      var e = { 143: 0 };
      (n.f.j = function (t, r) {
        var o = n.o(e, t) ? e[t] : void 0;
        if (0 !== o)
          if (o) r.push(o[2]);
          else {
            var c = new Promise(function (n, r) {
              o = e[t] = [n, r];
            });
            r.push((o[2] = c));
            var u = n.p + n.u(t),
              i = new Error(),
              a = function (r) {
                if (n.o(e, t) && ((o = e[t]), 0 !== o && (e[t] = void 0), o)) {
                  var c = r && ("load" === r.type ? "missing" : r.type),
                    u = r && r.target && r.target.src;
                  (i.message =
                    "Loading chunk " + t + " failed.\n(" + c + ": " + u + ")"),
                    (i.name = "ChunkLoadError"),
                    (i.type = c),
                    (i.request = u),
                    o[1](i);
                }
              };
            n.l(u, a, "chunk-" + t, t);
          }
      }),
        (n.O.j = function (t) {
          return 0 === e[t];
        });
      var t = function (t, r) {
          var o,
            c,
            u = r[0],
            i = r[1],
            a = r[2],
            d = 0;
          if (
            u.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (o in i) n.o(i, o) && (n.m[o] = i[o]);
            if (a) var s = a(n);
          }
          for (t && t(r); d < u.length; d++)
            (c = u[d]), n.o(e, c) && e[c] && e[c][0](), (e[c] = 0);
          return n.O(s);
        },
        r = (self["webpackChunkscandiweb_vue"] =
          self["webpackChunkscandiweb_vue"] || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var r = n.O(void 0, [998], function () {
    return n(1699);
  });
  r = n.O(r);
})();
//# sourceMappingURL=app.65c71571.js.map
