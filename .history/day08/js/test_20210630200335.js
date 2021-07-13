(window.webpackJsonp = window.webpackJsonp || []).push([
    [13], {
        "2WMd": function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t["default"] = void 0, r("rE2o"), r("ioFf"), r("rGqo"), r("/SS/"), r("VRzm"), r("xfY5");
            var o = _interopRequireDefault(r("aP5i")),
                n = _interopRequireDefault(r("qF34")),
                a = _interopRequireDefault(r("7xuk")),
                i = _interopRequireDefault(r("S+ax")),
                l = _interopRequireDefault(r("oP/V")),
                u = function _interopRequireWildcard(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e)
                            if (Object.prototype.hasOwnProperty.call(e, r)) {
                                var o = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
                                o.get || o.set ? Object.defineProperty(t, r, o) : t[r] = e[r]
                            } return t["default"] = e, t
                }(r("n5if")),
                c = u,
                s = _interopRequireDefault(r("FpJ4")),
                f = r("6OU5"),
                p = r("DJys"),
                d = r("8T6v"),
                y = r("Lwym"),
                m = r("szSY");

            function _interopRequireDefault(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function _typeof(e) {
                return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(e) {
                    return typeof e
                } : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function _slicedToArray(e, t) {
                return function _arrayWithHoles(e) {
                    if (Array.isArray(e)) return e
                }(e) || function _iterableToArrayLimit(e, t) {
                    var r = [],
                        o = !0,
                        n = !1,
                        a = undefined;
                    try {
                        for (var i, l = e[Symbol.iterator](); !(o = (i = l.next()).done) && (r.push(i.value), !t || r.length !== t); o = !0);
                    } catch (u) {
                        n = !0, a = u
                    } finally {
                        try {
                            o || null == l["return"] || l["return"]()
                        } finally {
                            if (n) throw a
                        }
                    }
                    return r
                }(e, t) || function _nonIterableRest() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }

            function _defineProperties(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function _possibleConstructorReturn(e, t) {
                return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
            }

            function _getPrototypeOf(e) {
                return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function _setPrototypeOf(e, t) {
                return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function _assertThisInitialized(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function _defineProperty(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var _ = function (e) {
                function PromotionalSimpleTop() {
                    var e, t, r;
                    ! function _classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, PromotionalSimpleTop);
                    for (var o = arguments.length, n = new Array(o), a = 0; a < o; a++) n[a] = arguments[a];
                    return _possibleConstructorReturn(r, (t = r = _possibleConstructorReturn(this, (e = _getPrototypeOf(PromotionalSimpleTop)).call.apply(e, [this].concat(n))), _defineProperty(_assertThisInitialized(_assertThisInitialized(r)), "handleTopData", function (e) {
                        var t = {
                            src: null,
                            href: null,
                            type: null,
                            bgColor: null,
                            exposal_url: null
                        };
                        if (!e || 0 !== Number(e.code) || !e.data) return t;
                        var o = e.data.top;
                        return o && o.type ? r.checkIsMaterial(o) ? {
                            src: o.src,
                            href: o.href,
                            type: o.type,
                            bgColor: o.bgColor
                        } : {
                            type: o.type,
                            src: o.image_url,
                            href: o.target_url,
                            bgColor: o.color_ext,
                            exposal_url: o.exposal_url,
                            extension_id: o.extension_id
                        } : t
                    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(r)), "handleDomestictData", function (e) {
                        var t = e.href,
                            o = e.src,
                            n = e.bgColor,
                            a = 990,
                            l = 80;
                        return c.reportExpose({
                            poi: "head|adtop|04",
                            url: t
                        }), r.setState({
                            href: t,
                            bgColor: n,
                            img: (0, i["default"])(o, {
                                clip: "".concat(a, "x").concat(l)
                            }),
                            wideImg: (0, i["default"])(o)
                        }), Promise.reject({
                            isCustom: 200,
                            msg: "鏁版嵁鑾峰彇鎴愬姛 涓嶅啀鑾峰彇鍥藉唴鏁版嵁"
                        })
                    }), t))
                }
                return function _inherits(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && _setPrototypeOf(e, t)
                    }(PromotionalSimpleTop, o["default"].PureComponent),
                    function _createClass(e, t, r) {
                        return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
                    }(PromotionalSimpleTop, [{
                        key: "componentDidMount",
                        value: function componentDidMount() {
                            var e = this;
                            (0, m.getCityIds)().then(function (t) {
                                var r, o = _slicedToArray(t, 3),
                                    n = o[0],
                                    a = o[1];
                                o[2];
                                "CN" !== n && (r = (p.REGION[n] || p.REGION.DEFAULT).code);
                                return p.PROVINCE[a] && (r = p.PROVINCE[a].code), r ? e.getOverseasData(r).then(function (t) {
                                    var r = t.data;
                                    return (0, f.isEmpty)(r) || e.syncState(r), Promise.reject({
                                        isCustom: 200,
                                        msg: "鍥藉鏁版嵁鑾峰彇澶辫触 涓嶅啀鑾峰彇鍥藉唴鏁版嵁"
                                    })
                                }) : e.getDomestictData().then(e.handleDomestictData)
                            })["catch"](function (e) {
                                e.isCustom ? n["default"].info("%c ".concat(e.msg), "color:#6190E8") : n["default"].error(e)
                            })
                        }
                    }, {
                        key: "dataCheck",
                        value: function dataCheck(e) {
                            var t = e.code,
                                r = e.data;
                            return !(!Array.isArray(r) || (0, f.isEmpty)(r)) && (0 === t && r.some(function (e) {
                                return !!e.bigImageUrl
                            }))
                        }
                    }, {
                        key: "syncState",
                        value: function syncState(e) {
                            var t = (0, m.getRandomData)(e),
                                r = t.href,
                                o = t.ext1,
                                n = t.bigImageUrl,
                                a = t.imageUrl;
                            c.reportExpose({
                                poi: "head|adtop|04",
                                url: r
                            }), this.setState({
                                href: r,
                                bgColor: o,
                                img: (0, i["default"])(a),
                                wideImg: (0, i["default"])(n)
                            })
                        }
                    }, {
                        key: "getOverseasData",
                        value: function getOverseasData(e) {
                            var t = this;
                            return new Promise(function (r) {
                                (0, a["default"])(d.PROMOTIONAL_TOP_OVERSEAS, {
                                    retryTimes: 0,
                                    name: "jsonpOverseas",
                                    params: {
                                        locid: e
                                    },
                                    dataCheck: t.dataCheck
                                }).then(function (e) {
                                    (0, f.isEmpty)(e) || t.setState({
                                        isOverseas: !0
                                    }), r(e)
                                })["catch"](function (e) {
                                    r({
                                        code: 0,
                                        msg: "ok",
                                        data: []
                                    })
                                })
                            })
                        }
                    }, {
                        key: "checkIsMaterial",
                        value: function checkIsMaterial(e) {
                            return "material" === e.type
                        }
                    }, {
                        key: "getDomestictData",
                        value: function getDomestictData() {
                            var e = this;
                            return new Promise(function (t) {
                                (0, y.getMonetizeTopAndTreasure)().then(function (r) {
                                    var o = e.handleTopData(r);
                                    if ("ad" === o.type) {
                                        var n = o.exposal_url;
                                        e.exposeExposalUrl(n)
                                    }
                                    t(o)
                                })
                            })
                        }
                    }, {
                        key: "exposeExposalUrl",
                        value: function exposeExposalUrl(e) {
                            e && u.reportUrlExpose({
                                clog: e
                            })
                        }
                    }, {
                        key: "checkBgColor",
                        value: function checkBgColor(e) {
                            return e && "#" === e[0] && 7 === e.length
                        }
                    }, {
                        key: "render",
                        value: function render() {
                            var e = this.state,
                                t = e.img,
                                r = e.wideImg,
                                n = e.href,
                                a = e.bgColor,
                                i = e.isOverseas;
                            return this.checkBgColor(a) ? o["default"].createElement(s["default"], {
                                img: t,
                                href: n,
                                wideImg: r,
                                bgColor: a,
                                label: "椤堕儴鎺ㄥ箍",
                                onClick: function onClick() {
                                    c.reportClick({
                                        poi: "head|adtop|04",
                                        url: n
                                    })
                                },
                                clstag: (0, m.generateClstag)("head|adtop_04"),
                                className: (0, l["default"])({
                                    "promotional-top--overseas": i
                                }),
                                isAdaptive: !0,
                                showTag: !0
                            }) : null
                        }
                    }]), PromotionalSimpleTop
            }();
            t["default"] = _
        },
        DJys: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PROVINCE = t.REGION = void 0;
            t.REGION = {
                US: {
                    value: "US",
                    name: "缇庡浗",
                    code: "840"
                },
                AU: {
                    value: "AU",
                    name: "婢冲ぇ鍒╀簹",
                    code: "36"
                },
                JP: {
                    value: "JP",
                    name: "鏃ユ湰",
                    code: "392"
                },
                MY: {
                    value: "MY",
                    name: "椹潵瑗夸簹",
                    code: "458"
                },
                SG: {
                    value: "SG",
                    name: "鏂板姞鍧�",
                    code: "702"
                },
                CA: {
                    value: "CA",
                    name: "鍔犳嬁澶�",
                    code: "124"
                },
                GB: {
                    value: "GB",
                    name: "鑻卞浗",
                    code: "826"
                },
                ID: {
                    value: "ID",
                    name: "鍗板害灏艰タ浜�",
                    code: "360"
                },
                TH: {
                    value: "TH",
                    name: "娉板浗",
                    code: "764"
                },
                RU: {
                    value: "RU",
                    name: "淇勭綏鏂�",
                    code: "643"
                },
                DEFAULT: {
                    value: "global",
                    name: "鍏ㄧ悆閫氱敤",
                    code: "784"
                }
            };
            t.PROVINCE = {
                820000: {
                    value: "820000",
                    name: "涓浗婢抽棬",
                    code: "446"
                },
                810000: {
                    value: "810000",
                    name: "涓浗棣欐腐",
                    code: "344"
                },
                710000: {
                    value: "710000",
                    name: "涓浗鍙版咕",
                    code: "158"
                }
            }
        }
    }
]);