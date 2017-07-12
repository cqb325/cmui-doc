define(["module", "react", "classnames", "core/BaseComponent"], function (module, React, classnames, BaseComponent) {
    "use strict";

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var WaterSpin = function (_BaseComponent) {
        _inherits(WaterSpin, _BaseComponent);

        function WaterSpin(props) {
            _classCallCheck(this, WaterSpin);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(WaterSpin).call(this, props));

            _this.addState({
                percent: parseFloat(props.percent) || 0,
                spinning: props.spinning || false
            });

            return _this;
        }

        /**
         * 设置百分比
         * @param percent
         */


        _createClass(WaterSpin, [{
            key: "setPercent",
            value: function setPercent(percent) {
                this.setState({ percent: percent });
                if (percent == 100) {
                    if (this.props.onFinish) {
                        this.props.onFinish();
                    }
                    this.emit("finish");
                }
            }
        }, {
            key: "getPercent",
            value: function getPercent() {
                return this.state.percent;
            }
        }, {
            key: "render",
            value: function render() {
                var top = 100 - this.state.percent + "%";
                var fontSize = this.props.size / 250 * 75;
                return React.createElement(
                    "div",
                    { className: "cm-water-spin-wrap", style: { width: this.props.size, height: this.props.size } },
                    React.createElement(
                        "div",
                        { className: "cm-water-spin-inner" },
                        React.createElement(
                            "div",
                            { className: "cm-water-spin-text", style: { fontSize: fontSize, lineHeight: this.props.size - 10 + "px" } },
                            this.state.percent + "%"
                        ),
                        React.createElement("div", { className: "cm-water-spin", style: { top: top } }),
                        React.createElement("div", { className: "cm-water-glare" })
                    )
                );
            }
        }]);

        return WaterSpin;
    }(BaseComponent);

    WaterSpin.defaultProps = {
        size: 250
    };

    module.exports.WaterSpin = WaterSpin;

    /**
     * SVGSpin 类
     * @class SVGSpin
     * @constructor
     * @extend BaseComponent
     */

    var SVGSpin = function (_BaseComponent2) {
        _inherits(SVGSpin, _BaseComponent2);

        function SVGSpin(props) {
            _classCallCheck(this, SVGSpin);

            var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(SVGSpin).call(this, props));

            _this2.addState({
                spinning: props.spinning || false
            });

            return _this2;
        }

        _createClass(SVGSpin, [{
            key: "show",
            value: function show() {
                this.setState({
                    spinning: true
                });
            }
        }, {
            key: "hide",
            value: function hide() {
                this.setState({
                    spinning: false
                });
            }
        }, {
            key: "renderSpin",
            value: function renderSpin() {
                if (this.state.spinning) {
                    return React.createElement(
                        "div",
                        { className: "cm-svg-spin-inner" },
                        React.createElement(
                            "div",
                            { className: "cm-svg-spin" },
                            React.createElement(
                                "svg",
                                { className: "lds-gears", width: "32px", height: "32px", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid" },
                                React.createElement(
                                    "g",
                                    { transform: "translate(50 50)" },
                                    React.createElement(
                                        "g",
                                        { transform: "translate(-19 -19) scale(0.6)" },
                                        React.createElement(
                                            "g",
                                            { transform: "rotate(177)" },
                                            React.createElement("animateTransform", { attributeName: "transform", type: "rotate", values: "0;360", keyTimes: "0;1", dur: "2s", begin: "0s", repeatCount: "indefinite" }),
                                            React.createElement("path", { fill: "#20a0ff",
                                                d: "M37.3496987939662 -7 L47.3496987939662 -7 L47.3496987939662 7 L37.3496987939662 7 A38 38 0 0 1 31.359972760794346 21.46047782418268 L31.359972760794346 21.46047782418268 L38.431040572659825 28.531545636048154 L28.531545636048154 38.431040572659825 L21.46047782418268 31.359972760794346 A38 38 0 0 1 7.0000000000000036 37.3496987939662 L7.0000000000000036 37.3496987939662 L7.000000000000004 47.3496987939662 L-6.999999999999999 47.3496987939662 L-7 37.3496987939662 A38 38 0 0 1 -21.46047782418268 31.35997276079435 L-21.46047782418268 31.35997276079435 L-28.531545636048154 38.431040572659825 L-38.43104057265982 28.531545636048158 L-31.359972760794346 21.460477824182682 A38 38 0 0 1 -37.3496987939662 7.000000000000007 L-37.3496987939662 7.000000000000007 L-47.3496987939662 7.000000000000008 L-47.3496987939662 -6.9999999999999964 L-37.3496987939662 -6.999999999999997 A38 38 0 0 1 -31.35997276079435 -21.460477824182675 L-31.35997276079435 -21.460477824182675 L-38.431040572659825 -28.531545636048147 L-28.53154563604818 -38.4310405726598 L-21.4604778241827 -31.35997276079433 A38 38 0 0 1 -6.999999999999992 -37.3496987939662 L-6.999999999999992 -37.3496987939662 L-6.999999999999994 -47.3496987939662 L6.999999999999977 -47.3496987939662 L6.999999999999979 -37.3496987939662 A38 38 0 0 1 21.460477824182686 -31.359972760794342 L21.460477824182686 -31.359972760794342 L28.531545636048158 -38.43104057265982 L38.4310405726598 -28.53154563604818 L31.35997276079433 -21.4604778241827 A38 38 0 0 1 37.3496987939662 -6.999999999999995 M0 -23A23 23 0 1 0 0 23 A23 23 0 1 0 0 -23"
                                            })
                                        )
                                    ),
                                    React.createElement(
                                        "g",
                                        { transform: "translate(19 19) scale(0.6)" },
                                        React.createElement(
                                            "g",
                                            { transform: "rotate(160.5)" },
                                            React.createElement("animateTransform", { attributeName: "transform", type: "rotate", values: "360;0", keyTimes: "0;1", dur: "2s", begin: "-0.125s", repeatCount: "indefinite" }),
                                            React.createElement("path", { fill: "rgba(12.549019607843137%,62.74509803921568%,100%,0.382)", d: "M37.3496987939662 -7 L47.3496987939662 -7 L47.3496987939662 7 L37.3496987939662 7 A38 38 0 0 1 31.359972760794346 21.46047782418268 L31.359972760794346 21.46047782418268 L38.431040572659825 28.531545636048154 L28.531545636048154 38.431040572659825 L21.46047782418268 31.359972760794346 A38 38 0 0 1 7.0000000000000036 37.3496987939662 L7.0000000000000036 37.3496987939662 L7.000000000000004 47.3496987939662 L-6.999999999999999 47.3496987939662 L-7 37.3496987939662 A38 38 0 0 1 -21.46047782418268 31.35997276079435 L-21.46047782418268 31.35997276079435 L-28.531545636048154 38.431040572659825 L-38.43104057265982 28.531545636048158 L-31.359972760794346 21.460477824182682 A38 38 0 0 1 -37.3496987939662 7.000000000000007 L-37.3496987939662 7.000000000000007 L-47.3496987939662 7.000000000000008 L-47.3496987939662 -6.9999999999999964 L-37.3496987939662 -6.999999999999997 A38 38 0 0 1 -31.35997276079435 -21.460477824182675 L-31.35997276079435 -21.460477824182675 L-38.431040572659825 -28.531545636048147 L-28.53154563604818 -38.4310405726598 L-21.4604778241827 -31.35997276079433 A38 38 0 0 1 -6.999999999999992 -37.3496987939662 L-6.999999999999992 -37.3496987939662 L-6.999999999999994 -47.3496987939662 L6.999999999999977 -47.3496987939662 L6.999999999999979 -37.3496987939662 A38 38 0 0 1 21.460477824182686 -31.359972760794342 L21.460477824182686 -31.359972760794342 L28.531545636048158 -38.43104057265982 L38.4310405726598 -28.53154563604818 L31.35997276079433 -21.4604778241827 A38 38 0 0 1 37.3496987939662 -6.999999999999995 M0 -23A23 23 0 1 0 0 23 A23 23 0 1 0 0 -23" })
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "cm-svg-spin-text" },
                            this.props.title || "loading..."
                        )
                    );
                } else {
                    return null;
                }
            }
        }, {
            key: "render",
            value: function render() {
                var className = classnames(this.props.className, "cm-svg-spin-wrap");
                var containerClassName = classnames("cm-spin-container", {
                    "cm-svg-spin-blur": this.state.spinning
                });
                var spin = this.renderSpin();
                return React.createElement(
                    "div",
                    { className: className },
                    spin,
                    React.createElement(
                        "div",
                        { className: containerClassName },
                        this.props.children
                    )
                );
            }
        }]);

        return SVGSpin;
    }(BaseComponent);

    module.exports.SVGSpin = SVGSpin;

    var SpinMap = {
        mask: React.createElement(
            "span",
            null,
            React.createElement(
                "div",
                { className: "cm-mask cm-mask-top" },
                React.createElement("div", { className: "cm-mask-plane" })
            ),
            React.createElement(
                "div",
                { className: "cm-mask cm-mask-middle" },
                React.createElement("div", { className: "cm-mask-plane" })
            ),
            React.createElement(
                "div",
                { className: "cm-mask cm-mask-bottom" },
                React.createElement("div", { className: "cm-mask-plane" })
            )
        ),

        waves: React.createElement("div", { className: "cm-waves" })
    };

    /**
     * CssSpin 类
     * @class CssSpin
     * @constructor
     * @extend BaseComponent
     */

    var CssSpin = function (_BaseComponent3) {
        _inherits(CssSpin, _BaseComponent3);

        function CssSpin(props) {
            _classCallCheck(this, CssSpin);

            var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(CssSpin).call(this, props));

            _this3.addState({
                spinning: props.spinning || false
            });

            return _this3;
        }

        /**
         *
         */


        _createClass(CssSpin, [{
            key: "show",
            value: function show() {
                this.setState({
                    spinning: true
                });
            }
        }, {
            key: "hide",
            value: function hide() {
                this.setState({
                    spinning: false
                });
            }
        }, {
            key: "renderSpin",
            value: function renderSpin() {
                if (this.state.spinning) {
                    return React.createElement(
                        "div",
                        { className: "cm-spin-inner" },
                        React.createElement(
                            "div",
                            { className: "cm-spin" },
                            SpinMap[this.props.type]
                        ),
                        React.createElement(
                            "div",
                            { className: "cm-spin-text" },
                            this.props.title || "loading..."
                        )
                    );
                } else {
                    return null;
                }
            }
        }, {
            key: "render",
            value: function render() {
                var className = classnames(this.props.className, "cm-spin-wrap", _defineProperty({}, "cm-spin-" + this.props.type, this.props.type));
                var containerClassName = classnames("cm-container", {
                    "cm-spin-blur": this.state.spinning
                });
                var spin = this.renderSpin();
                return React.createElement(
                    "div",
                    { className: className },
                    spin,
                    React.createElement(
                        "div",
                        { className: containerClassName },
                        this.props.children
                    )
                );
            }
        }]);

        return CssSpin;
    }(BaseComponent);

    module.exports.CssSpin = CssSpin;

    /**
     * GIFSpin 类
     * @class GIFSpin
     * @constructor
     * @extend BaseComponent
     */

    var GIFSpin = function (_BaseComponent4) {
        _inherits(GIFSpin, _BaseComponent4);

        function GIFSpin(props) {
            _classCallCheck(this, GIFSpin);

            var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(GIFSpin).call(this, props));

            _this4.addState({
                spinning: props.spinning || false
            });

            return _this4;
        }

        /**
         *
         */


        _createClass(GIFSpin, [{
            key: "show",
            value: function show() {
                this.setState({
                    spinning: true
                });
            }
        }, {
            key: "hide",
            value: function hide() {
                this.setState({
                    spinning: false
                });
            }
        }, {
            key: "renderSpin",
            value: function renderSpin() {
                if (this.state.spinning) {
                    return React.createElement(
                        "div",
                        { className: "cm-spin-inner" },
                        React.createElement(
                            "div",
                            { className: "cm-spin" },
                            React.createElement("img", { src: this.props.src, width: this.props.size, height: this.props.size })
                        ),
                        React.createElement(
                            "div",
                            { className: "cm-spin-text" },
                            this.props.title || "loading..."
                        )
                    );
                } else {
                    return null;
                }
            }
        }, {
            key: "render",
            value: function render() {
                var className = classnames(this.props.className, "cm-spin-wrap", _defineProperty({}, "cm-spin-" + this.props.type, this.props.type));
                var containerClassName = classnames("cm-container", {
                    "cm-spin-blur": this.state.spinning
                });
                var spin = this.renderSpin();
                return React.createElement(
                    "div",
                    { className: className },
                    spin,
                    React.createElement(
                        "div",
                        { className: containerClassName },
                        this.props.children
                    )
                );
            }
        }]);

        return GIFSpin;
    }(BaseComponent);

    GIFSpin.defaultProps = {
        size: 32
    };

    module.exports.GIFSpin = GIFSpin;
});
