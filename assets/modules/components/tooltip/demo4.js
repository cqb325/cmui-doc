define(["module", "react", "../BaseDemo", "FontIcon", "Tooltip", "../Code"], function (module, React, BaseDemo, FontIcon, Tooltip, Code) {
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
                                Tooltip,
                                { title: "tip text" },
                                "default theme"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "mt-15" },
                            React.createElement(
                                Tooltip,
                                { title: "tip text", theme: "default" },
                                "white theme"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "mt-15" },
                            React.createElement(
                                Tooltip,
                                { title: "tip text", theme: "primary" },
                                "primary theme"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "mt-15" },
                            React.createElement(
                                Tooltip,
                                { title: "tip text", theme: "error" },
                                "error theme"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-desc" },
                        React.createElement(
                            "div",
                            { className: "code-box-title" },
                            "\u4E3B\u9898"
                        ),
                        React.createElement(
                            "div",
                            null,
                            "\u8BBE\u7F6E theme \u5C5E\u6027\u8BBE\u7F6E Tooltip \u7684\u4E3B\u9898\uFF0C \u76EE\u524D\u652F\u6301default\u3001black\u3001primary\u3001error\uFF0C\u9ED8\u8BA4\u4E3Ablack\u3002",
                            React.createElement(FontIcon, { icon: "chevron-circle-down", ref: "collapse", className: "collapse", onClick: this.openCloseCode.bind(this) })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-src", ref: "boxSrc" },
                        React.createElement(
                            Code,
                            { className: "language-jsx" },
                            "\nconst Tooltip = require(\"Tooltip\");\n\nReactDOM.render(\n<div>\n    <div>\n        <Tooltip title=\"tip text\">\n            default theme\n        </Tooltip>\n    </div>\n\n    <div className=\"mt-15\">\n        <Tooltip title=\"tip text\" theme=\"default\">\n            white theme\n        </Tooltip>\n    </div>\n\n    <div className=\"mt-15\">\n        <Tooltip title=\"tip text\" theme=\"primary\">\n            primary theme\n        </Tooltip>\n    </div>\n\n    <div className=\"mt-15\">\n        <Tooltip title=\"tip text\" theme=\"error\">\n            error theme\n        </Tooltip>\n    </div>\n</div>, mountNode);\n"
                        )
                    )
                );
            }
        }]);

        return Demo;
    }(BaseDemo);

    module.exports = Demo;
});
