(window.webpackJsonp = window.webpackJsonp || []).push([
    [10], {
        "1w/q": function (e, t, r) {},
        "6LXm": function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t["default"] = void 0, r("rE2o"), r("ioFf"), r("/SS/");
            var i = _interopRequireDefault(r("aP5i")),
                o = _interopRequireDefault(r("aP5i")),
                n = _interopRequireDefault(r("oP/V"));

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

            function _defineProperties(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
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
            r("gHYS");
            var a = function (e) {
                function Lazyimg() {
                    var e;
                    return function _classCallCheck(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, Lazyimg), _defineProperty(_assertThisInitialized(_assertThisInitialized(e = function _possibleConstructorReturn(e, t) {
                        return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
                    }(this, _getPrototypeOf(Lazyimg).apply(this, arguments)))), "loaded", !1), _defineProperty(_assertThisInitialized(_assertThisInitialized(e)), "retryCount", 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(e)), "getCtnRef", function (t) {
                        var r = o["default"].findDOMNode(t);
                        r && (e.ctnDom = r)
                    }), _defineProperty(_assertThisInitialized(_assertThisInitialized(e)), "getImgRef", function (t) {
                        var r = o["default"].findDOMNode(t);
                        r && (e.imgDom = r)
                    }), e.load = e.load.bind(_assertThisInitialized(_assertThisInitialized(e))), e
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
                    }(Lazyimg, i["default"].Component),
                    function _createClass(e, t, r) {
                        return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
                    }(Lazyimg, [{
                        key: "done",
                        value: function done() {
                            var e = this.props.src,
                                t = this.props.className;
                            this.imgDom && (this.imgDom.src = e), this.ctnDom && (this.ctnDom.className = (0, n["default"])("lazyimg", "lazyimg_loaded", t))
                        }
                    }, {
                        key: "error",
                        value: function error() {
                            var e = this.props.errSrc,
                                t = this.props.className;
                            this.imgDom && (this.imgDom.src = e, "dataset" in this.imgDom && (this.imgDom.dataset.src = this.props.src)), this.ctnDom && (this.ctnDom.className = (0, n["default"])("lazyimg", "lazyimg_loaded", "lazyimg_error", t))
                        }
                    }, {
                        key: "load",
                        value: function load(e) {
                            var t = this;
                            clearTimeout(this.retryTimer);
                            var r = new Image,
                                i = !1,
                                o = r.onload = function () {
                                    i ? r.onload = null : (t.done(), i = !0, r.onload = null)
                                };
                            r.onerror = function () {
                                r.onerror = null, t.retryCount < (t.props.retryTimes || 2) ? t.retryTimer = setTimeout(function () {
                                    t.retryCount++, t.load(e)
                                }, 10) : t.error()
                            }, r.src = e, r.complete && o()
                        }
                    }, {
                        key: "componentDidMount",
                        value: function componentDidMount() {
                            this.load(this.props.src)
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function componentWillReceiveProps(e) {
                            e.src !== this.props.src && (this.retryCount = 0, this.load(e.src))
                        }
                    }, {
                        key: "render",
                        value: function render() {
                            var e = this.props,
                                t = e.lazySrc,
                                r = e.className,
                                o = e.alt;
                            return i["default"].createElement("div", {
                                ref: this.getCtnRef,
                                className: (0, n["default"])("lazyimg", r)
                            }, i["default"].createElement("img", {
                                src: t,
                                ref: this.getImgRef,
                                className: "lazyimg_img",
                                alt: o
                            }))
                        }
                    }]), Lazyimg
            }();
            _defineProperty(a, "defaultProps", {
                lazySrc: "//misc.360buyimg.com/mtd/pc/common/img/blank.png",
                src: "//misc.360buyimg.com/mtd/pc/common/img/blank.png",
                errSrc: "//misc.360buyimg.com/mtd/pc/common/img/blank.png"
            });
            var s = a;
            t["default"] = s
        },
        KJKd: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t["default"] = void 0, r("rE2o"), r("ioFf"), r("91GP"), r("/SS/"), r("rGqo"), r("dRSK");
            var i = _interopRequireDefault(r("aP5i")),
                o = _interopRequireDefault(r("oP/V")),
                n = function _interopRequireWildcard(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e)
                            if (Object.prototype.hasOwnProperty.call(e, r)) {
                                var i = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
                                i.get || i.set ? Object.defineProperty(t, r, i) : t[r] = e[r]
                            } return t["default"] = e, t
                }(r("vT+D")),
                a = _interopRequireDefault(r("L6Ds")),
                s = _interopRequireDefault(r("6LXm")),
                l = r("szSY");
            r("FMqi"), r("NUc3");
            var c = r("0a0O");

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

            function _extends() {
                return (_extends = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
                    }
                    return e
                }).apply(this, arguments)
            }

            function _defineProperties(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
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
            var u = function ItemTop(e) {
                    var t = e.recommendTheme,
                        r = e.goodsPic,
                        o = e.url,
                        a = e.index % e.count;
                    return i["default"].createElement("a", {
                        target: "_blank",
                        href: o,
                        className: "goods goods--top",
                        clstag: (0, l.generateClstag)("core|goods_b", a),
                        onClick: n.handleClickSkuItem.bind(void 0, e, a)
                    }, i["default"].createElement("div", {
                        className: "goods__image"
                    }, i["default"].createElement(s["default"], {
                        alt: t,
                        src: r
                    })), i["default"].createElement("div", {
                        className: "goods__name"
                    }, t))
                },
                d = function ItemBottom(e) {
                    var t = e.recommendTheme,
                        r = e.goodsPic,
                        o = e.url,
                        a = e.index % e.count;
                    return i["default"].createElement("a", {
                        target: "_blank",
                        href: o,
                        className: "goods goods--bottom",
                        clstag: (0, l.generateClstag)("core|goods_b", a),
                        onClick: n.handleClickSkuItem.bind(void 0, e, a)
                    }, i["default"].createElement("div", {
                        className: "goods__name"
                    }, t), i["default"].createElement("div", {
                        className: "goods__image"
                    }, i["default"].createElement(s["default"], {
                        alt: t,
                        src: r
                    })))
                },
                f = .8,
                p = function (e) {
                    function NiceGoodsRecommend(e) {
                        var t;
                        ! function _classCallCheck(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, NiceGoodsRecommend), _defineProperty(_assertThisInitialized(_assertThisInitialized(t = function _possibleConstructorReturn(e, t) {
                            return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
                        }(this, _getPrototypeOf(NiceGoodsRecommend).call(this, e)))), "isStop", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "isTouched", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "outerWidth", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "scrollBarWidth", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "goodListRef", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "scrollbarRef", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "ratio", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "startX", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "endedValue", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "listLength", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "maxTranslateValue", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "maxScrollTranslateValue", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "currentTranslateX", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "action", function () {
                            var e = _assertThisInitialized(_assertThisInitialized(t)).maxTranslateValue,
                                r = t.state.translateX + f;
                            r >= e ? t.setState({
                                translateX: 0
                            }) : t.setState({
                                translateX: r
                            })
                        }), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "saveListRef", function (e) {
                            t.goodListRef = e
                        }), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "saveScrollbarRef", function (e) {
                            t.scrollbarRef = e
                        }), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "handleMouseEnter", function () {
                            var e = t.state.translateX;
                            t.setState({
                                isStop: !0,
                                scrollbarTranslateX: t._getScrollTranslateByList(e)
                            })
                        }), _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "handleMouseLeave", function () {
                            var e = _assertThisInitialized(_assertThisInitialized(t)).isTouched,
                                r = t.state.isStop;
                            e || !1 === r || t.setState({
                                isStop: !1
                            }, function () {
                                t.step()
                            })
                        });
                        var r = t.props.list;
                        return t.startX = 0, t.endedValue = 0, t.listLength = r.length, t.state = {
                            isStop: !1,
                            translateX: 0,
                            scrollbarTranslateX: 0,
                            list: (0, c.isIE)(8) ? r : r.concat(r)
                        }, t
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
                        }(NiceGoodsRecommend, i["default"].PureComponent),
                        function _createClass(e, t, r) {
                            return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
                        }(NiceGoodsRecommend, [{
                            key: "_getMoveValue",
                            value: function _getMoveValue(e, t) {
                                return t - e
                            }
                        }, {
                            key: "_getMaxScrollValue",
                            value: function _getMaxScrollValue() {
                                var e = this.listLength,
                                    t = this.outerWidth;
                                return this.scrollBarWidth - t / e
                            }
                        }, {
                            key: "_getScrollValue",
                            value: function _getScrollValue(e, t, r) {
                                var i = this.maxScrollTranslateValue,
                                    o = e + this._getMoveValue(t, r);
                                return o >= i ? i : o <= 0 ? 0 : o
                            }
                        }, {
                            key: "_getMaxTranslateXValue",
                            value: function _getMaxTranslateXValue(e) {
                                return 200 * e
                            }
                        }, {
                            key: "_getRatio",
                            value: function _getRatio() {
                                return this.maxScrollTranslateValue / this.maxTranslateValue
                            }
                        }, {
                            key: "_getListTranslateByScroll",
                            value: function _getListTranslateByScroll(e) {
                                return e / this.ratio
                            }
                        }, {
                            key: "_getScrollTranslateByList",
                            value: function _getScrollTranslateByList(e) {
                                return e * this.ratio
                            }
                        }, {
                            key: "step",
                            value: function step() {
                                var e = this,
                                    t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0,
                                    r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                                this.state.isStop || (r > 10 && (this.action(), r = 0), window.requestAnimationFrame(function (i) {
                                    e.step(i, r + i - t)
                                }))
                            }
                        }, {
                            key: "handleTouchStart",
                            value: function handleTouchStart(e) {
                                e.preventDefault(), e.stopPropagation();
                                var t = e.clientX;
                                this.isTouched = !0, this.startX = t, this.currentTranslateX = this.state.translateX, this.endedValue = this.state.scrollbarTranslateX
                            }
                        }, {
                            key: "handleTouchMove",
                            value: function handleTouchMove(e) {
                                if (e.stopPropagation(), e.preventDefault(), this.isTouched) {
                                    var t = e.clientX,
                                        r = this.startX,
                                        i = this.endedValue,
                                        o = this._getScrollValue(i, r, t),
                                        n = this._getListTranslateByScroll(this._getMoveValue(r, t)),
                                        a = this.maxScrollTranslateValue;
                                    o <= 0 ? this.setState({
                                        translateX: 0,
                                        scrollbarTranslateX: o
                                    }) : o >= a ? this.setState({
                                        translateX: this._getListTranslateByScroll(a),
                                        scrollbarTranslateX: o
                                    }) : this.setState({
                                        scrollbarTranslateX: o,
                                        translateX: this.currentTranslateX + n
                                    })
                                }
                            }
                        }, {
                            key: "handleTouchEnd",
                            value: function handleTouchEnd(e) {
                                if (e.stopPropagation(), e.preventDefault(), this.isTouched) {
                                    var t = e.clientX,
                                        r = e.target,
                                        i = this.endedValue,
                                        o = this.startX;
                                    this.isTouched = !1, this.endedValue = this._getScrollValue(i, o, t), r instanceof HTMLElement && $(".nice-goods").find(r).length > 0 || this.handleMouseLeave()
                                }
                            }
                        }, {
                            key: "updateWidthData",
                            value: function updateWidthData() {
                                this.goodListRef && (this.outerWidth = this.goodListRef.clientWidth), this.scrollbarRef && (this.scrollBarWidth = this.scrollbarRef.clientWidth);
                                var e = this.listLength;
                                this.maxTranslateValue = this._getMaxTranslateXValue(e), this.maxScrollTranslateValue = this._getMaxScrollValue(), this.ratio = this._getRatio()
                            }
                        }, {
                            key: "componentDidMount",
                            value: function componentDidMount() {
                                (0, c.isIE)(8) || (this.updateWidthData(), this.step(), $(".nice-goods").mouseenter(this.handleMouseEnter), $(".nice-goods").mouseleave(this.handleMouseLeave), $(window.document).bind("mouseup", this.handleTouchEnd.bind(this)), $(window.document).bind("mousemove", this.handleTouchMove.bind(this)), $(window.document).delegate(".nice-goods__recommends .scroll-points", "mousedown", this.handleTouchStart.bind(this)), this.props.list.forEach(function (e, t) {
                                    n.exposeSku(t, e)
                                }))
                            }
                        }, {
                            key: "componentWillReceiveProps",
                            value: function componentWillReceiveProps(e) {
                                (0, c.isIE)(8) || this.props.isWide !== e.isWide && this.updateWidthData()
                            }
                        }, {
                            key: "render",
                            value: function render() {
                                var e = this.outerWidth,
                                    t = this.state,
                                    r = t.translateX,
                                    n = t.scrollbarTranslateX,
                                    a = t.isStop,
                                    s = t.list,
                                    l = this.listLength,
                                    c = {
                                        width: e / this.listLength,
                                        transform: "translate3d(".concat(n, "px, 0, 0)"),
                                        msTransform: "translateX(".concat(n, "px)"),
                                        WebkitTransform: "translate3d(".concat(n, "px, 0, 0)")
                                    },
                                    f = (0, o["default"])("nice-goods__recommends", {
                                        "nice-goods__recommends--scroll": a
                                    }),
                                    p = {
                                        transform: "translate3d(-".concat(r, "px, 0, 0)"),
                                        msTransform: "translateX(-".concat(r, "px)"),
                                        WebkitTransform: "translate3d(-".concat(r, "px, 0, 0)")
                                    };
                                return i["default"].createElement("div", {
                                    className: f
                                }, i["default"].createElement("div", {
                                    className: "goods-list",
                                    style: p,
                                    ref: this.saveListRef
                                }, s.map(function (e, t) {
                                    return t % 2 == 0 ? i["default"].createElement(d, _extends({
                                        key: t,
                                        index: t
                                    }, e, {
                                        count: l
                                    })) : i["default"].createElement(u, _extends({
                                        key: t,
                                        index: t
                                    }, e, {
                                        count: l
                                    }))
                                })), i["default"].createElement("div", {
                                    className: "scroll-bar",
                                    ref: this.saveScrollbarRef
                                }, i["default"].createElement("span", {
                                    style: c,
                                    className: "scroll-points"
                                })))
                            }
                        }]), NiceGoodsRecommend
                }(),
                h = (0, a["default"])(p);
            t["default"] = h
        },
        NUc3: function (e, t, r) {},
        "W+yW": function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t["default"] = void 0, r("rE2o"), r("ioFf"), r("/SS/"), r("xfY5");
            var i = _interopRequireDefault(r("aP5i")),
                o = function _interopRequireWildcard(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e)
                            if (Object.prototype.hasOwnProperty.call(e, r)) {
                                var i = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
                                i.get || i.set ? Object.defineProperty(t, r, i) : t[r] = e[r]
                            } return t["default"] = e, t
                }(r("vT+D")),
                n = _interopRequireDefault(r("vZHt")),
                a = _interopRequireDefault(r("7xuk")),
                s = _interopRequireDefault(r("S+ax")),
                l = r("6OU5"),
                c = r("szSY"),
                u = r("Vn4U"),
                d = r("8T6v"),
                f = _interopRequireDefault(r("6/ko")),
                p = _interopRequireDefault(r("KJKd"));

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

            function _defineProperties(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
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
            r("SkmP"), r("1w/q");
            var h = (0, l.random)(1, 6),
                _ = function (e) {
                    function NiceGoods() {
                        var e, t, r;
                        ! function _classCallCheck(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, NiceGoods);
                        for (var i = arguments.length, o = new Array(i), n = 0; n < i; n++) o[n] = arguments[n];
                        return _possibleConstructorReturn(r, (t = r = _possibleConstructorReturn(this, (e = _getPrototypeOf(NiceGoods)).call.apply(e, [this].concat(o))), function _defineProperty(e, t, r) {
                            return t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r, e
                        }(_assertThisInitialized(_assertThisInitialized(r)), "state", {
                            list: [],
                            isLoading: !0
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
                        }(NiceGoods, i["default"].Component),
                        function _createClass(e, t, r) {
                            return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
                        }(NiceGoods, [{
                            key: "componentDidMount",
                            value: function componentDidMount() {
                                var e = this,
                                    t = this.props.onError;
                                (0, a["default"])(d.NICE_GOODS, {
                                    name: "jsonpNiceGoods",
                                    speedID: 20,
                                    umpID: 22,
                                    backup: [d.NICE_GOODS_BACKUP],
                                    params: {
                                        pin: n["default"].pin
                                    },
                                    dataCheck: function dataCheck(e) {
                                        var t = Number(e.code),
                                            r = e.data,
                                            i = r.length >= 6 && r.every(function (e) {
                                                return e.goodsPic || e.recommendTheme || e.sku || e.id
                                            });
                                        return 0 === t && i
                                    }
                                }).then(function (t) {
                                    var r = t.data,
                                        i = 2 * Math.floor(r.length / 2),
                                        n = r.slice(0, i),
                                        a = n.filter(function (e) {
                                            return e.id
                                        }).map(function (e) {
                                            return e.id
                                        }),
                                        l = n.map(function (e) {
                                            var t = e.goodsPic,
                                                r = e.recommendTheme,
                                                i = e.id;
                                            return {
                                                sku: e.sku,
                                                recommendTheme: r,
                                                url: "".concat(u.NICE_GOODS, "?linkIds=").concat(a, "#").concat(i),
                                                goodsPic: (0, s["default"])(t, {
                                                    resize: ["300x300", "150x150"]
                                                })
                                            }
                                        });
                                    e.setState({
                                        list: l,
                                        isLoading: !1
                                    }, function () {
                                        o.expose()
                                    })
                                })["catch"](function () {
                                    t && t()
                                })
                            }
                        }, {
                            key: "render",
                            value: function render() {
                                var e = this.state,
                                    t = e.list;
                                if (e.isLoading) return i["default"].createElement(f["default"], null);
                                var r = "nice-goods__logo nice-goods__logo--bg-".concat(h);
                                return i["default"].createElement("div", {
                                    className: "jd_container nice-goods",
                                    "aria-label": "鍙戠幇濂借揣"
                                }, i["default"].createElement("a", {
                                    href: u.NICE_GOODS,
                                    target: "_blank",
                                    className: r,
                                    clstag: (0, c.generateClstag)("core|goods_a"),
                                    onClick: o.handleClickHeader
                                }, i["default"].createElement("div", {
                                    className: "logo-container"
                                }, i["default"].createElement("div", {
                                    className: "logo-text"
                                }, "鎺㈢储鏂扮敓娲�", i["default"].createElement("i", null)))), (0, l.isEmpty)(t) ? null : i["default"].createElement(p["default"], {
                                    list: t
                                }))
                            }
                        }]), NiceGoods
                }();
            t["default"] = _
        },
        gHYS: function (e, t, r) {},
        "vT+D": function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.handleClickHeader = function handleClickHeader() {
                i.reportClick({
                    poi: "core|goods|a"
                })
            }, t.handleClickSkuItem = function handleClickSkuItem(e, t) {
                var r = (0, o.padding)(t + 1, 2),
                    n = e.url,
                    a = e.sku;
                i.reportClick({
                    url: n,
                    text: a,
                    poi: "core|goods|b".concat(r)
                })
            }, t.expose = function expose() {
                i.reportExpose({
                    poi: "core|all|02"
                })
            }, t.exposeSku = function exposeSku(e, t) {
                var r = (0, o.padding)(e + 1, 2),
                    n = t.sku;
                i.reportExpose({
                    text: n,
                    poi: "core|goods|b".concat(r)
                })
            };
            var i = function _interopRequireWildcard(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e)
                            if (Object.prototype.hasOwnProperty.call(e, r)) {
                                var i = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
                                i.get || i.set ? Object.defineProperty(t, r, i) : t[r] = e[r]
                            } return t["default"] = e, t
                }(r("n5if")),
                o = r("szSY")
        }
    }
]);