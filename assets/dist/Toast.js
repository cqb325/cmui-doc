define(["module", "react", 'react-dom', "classnames", "core/BaseComponent", 'Core', 'utils/Dom'], function (module, React, ReactDOM, classnames, BaseComponent, Core, Dom) {
    "use strict";

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

    var PropTypes = React.PropTypes;

    var Toast = function (_BaseComponent) {
        _inherits(Toast, _BaseComponent);

        function Toast(props) {
            _classCallCheck(this, Toast);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Toast).call(this, props));

            _this.addState({
                visibility: false
            });
            return _this;
        }

        _createClass(Toast, [{
            key: "show",
            value: function show() {
                this.setState({
                    visibility: true
                });
            }
        }, {
            key: "hide",
            value: function hide() {
                this.setState({
                    visibility: false
                });
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                if (!window.Toast) {
                    window.Toast = this;
                } else {
                    console.warn("Toast already exist");
                }
            }
        }, {
            key: "render",
            value: function render() {
                return React.createElement(
                    "div",
                    { className: "weui_loading_toast", style: { display: this.state.visibility ? "block" : "none" } },
                    React.createElement("div", { className: "weui_mask_transparent" }),
                    React.createElement(
                        "div",
                        { className: "weui_toast" },
                        React.createElement(
                            "div",
                            { className: "weui_loading" },
                            React.createElement("div", { className: "weui_loading_leaf weui_loading_leaf_0" }),
                            React.createElement("div", { className: "weui_loading_leaf weui_loading_leaf_1" }),
                            React.createElement("div", { className: "weui_loading_leaf weui_loading_leaf_2" }),
                            React.createElement("div", { className: "weui_loading_leaf weui_loading_leaf_3" }),
                            React.createElement("div", { className: "weui_loading_leaf weui_loading_leaf_4" }),
                            React.createElement("div", { className: "weui_loading_leaf weui_loading_leaf_5" }),
                            React.createElement("div", { className: "weui_loading_leaf weui_loading_leaf_6" }),
                            React.createElement("div", { className: "weui_loading_leaf weui_loading_leaf_7" }),
                            React.createElement("div", { className: "weui_loading_leaf weui_loading_leaf_8" }),
                            React.createElement("div", { className: "weui_loading_leaf weui_loading_leaf_9" }),
                            React.createElement("div", { className: "weui_loading_leaf weui_loading_leaf_10" }),
                            React.createElement("div", { className: "weui_loading_leaf weui_loading_leaf_11" })
                        ),
                        React.createElement(
                            "p",
                            { className: "weui_toast_content" },
                            "数据加载中"
                        )
                    )
                );
            }
        }]);

        return Toast;
    }(BaseComponent);

    Toast.propTypes = {
        /**
         * 自定义class
         * @attribute className
         * @type {String}
         */
        className: PropTypes.string,
        /**
         * 自定义样式
         * @attribute style
         * @type {Object}
         */
        style: PropTypes.object
    };

    module.exports = Toast;
});
