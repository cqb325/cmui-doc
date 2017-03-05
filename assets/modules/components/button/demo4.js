define(["module", "react", "../BaseDemo", "Button", "FontIcon", "../Code"], function (module, React, BaseDemo, Button, FontIcon, Code) {
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

    var Demo = function (_BaseDemo) {
        _inherits(Demo, _BaseDemo);

        function Demo() {
            _classCallCheck(this, Demo);

            return _possibleConstructorReturn(this, (Demo.__proto__ || Object.getPrototypeOf(Demo)).apply(this, arguments));
        }

        _createClass(Demo, [{
            key: "render",
            value: function render() {
                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "div",
                        { className: "code-box-demo" },
                        React.createElement(
                            "div",
                            null,
                            React.createElement(
                                Button,
                                null,
                                "Default"
                            ),
                            React.createElement(
                                Button,
                                { disabled: true, className: "ml-10" },
                                "Default"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "mt-15" },
                            React.createElement(Button, { theme: "primary", icon: "cloud" }),
                            React.createElement(Button, { theme: "primary", disabled: true, icon: "cloud", className: "ml-10" })
                        ),
                        React.createElement(
                            "div",
                            { className: "mt-15" },
                            React.createElement(
                                Button,
                                { theme: "primary", raised: true },
                                "Raised"
                            ),
                            React.createElement(
                                Button,
                                { theme: "primary", raised: true, disabled: true, className: "ml-10" },
                                "Disabled"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "mt-15" },
                            React.createElement(
                                Button,
                                { theme: "primary", flat: true },
                                "Flat"
                            ),
                            React.createElement(
                                Button,
                                { theme: "primary", flat: true, disabled: true, className: "ml-10" },
                                "Disabled"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-desc" },
                        React.createElement(
                            "div",
                            { className: "code-box-title" },
                            "\u7981\u7528\u72B6\u6001"
                        ),
                        React.createElement(
                            "div",
                            null,
                            "\u6DFB\u52A0 disabled \u5C5E\u6027\u5373\u53EF\u8BA9\u6309\u94AE\u5904\u4E8E\u4E0D\u53EF\u7528\u72B6\u6001\uFF0C\u540C\u65F6\u6309\u94AE\u6837\u5F0F\u4E5F\u4F1A\u6539\u53D8\u3002",
                            React.createElement(FontIcon, { icon: "chevron-circle-down", ref: "collapse", className: "collapse", onClick: this.openCloseCode.bind(this) })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-src", ref: "boxSrc" },
                        React.createElement(
                            Code,
                            { className: "language-jsx" },
                            "\nconst Button = require(\"Button\");\n\nReactDOM.render(\n<div>\n    <div>\n        <Button>Default</Button>\n        <Button disabled={true} className=\"ml-10\">Default</Button>\n    </div>\n    <div className=\"mt-15\">\n        <Button theme=\"primary\" icon=\"cloud\"></Button>\n        <Button theme=\"primary\" disabled={true} icon=\"cloud\" className=\"ml-10\"></Button>\n    </div>\n    <div className=\"mt-15\">\n        <Button theme=\"primary\" raised={true}>Raised</Button>\n        <Button theme=\"primary\" disabled={true} className=\"ml-10\">Disabled</Button>\n    </div>\n\n    <div className=\"mt-15\">\n        <Button theme=\"primary\" flat={true}>Flat</Button>\n        <Button theme=\"primary\" flat={true} disabled={true} className=\"ml-10\">Disabled</Button>\n    </div>\n</div>, mountNode);\n"
                        )
                    )
                );
            }
        }]);

        return Demo;
    }(BaseDemo);

    module.exports = Demo;
});
