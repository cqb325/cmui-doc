define(["module", "react", "react-dom", "../BaseDemo", "Breadcrumb", "FontIcon", "../Code"], function (module, React, ReactDOM, BaseDemo, Breadcrumb, FontIcon, Code) {
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

            return _possibleConstructorReturn(this, Object.getPrototypeOf(Demo).apply(this, arguments));
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
                            Breadcrumb,
                            { separator: ">" },
                            React.createElement(
                                Breadcrumb.Item,
                                null,
                                React.createElement(FontIcon, { icon: "home" })
                            ),
                            React.createElement(
                                Breadcrumb.Item,
                                { link: "javascript:void(0)" },
                                React.createElement(FontIcon, { icon: "list-ul" }),
                                React.createElement(
                                    "span",
                                    null,
                                    "Application List"
                                )
                            ),
                            React.createElement(
                                Breadcrumb.Item,
                                null,
                                "Application"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-desc" },
                        React.createElement(
                            "div",
                            { className: "code-box-title" },
                            "分隔符"
                        ),
                        React.createElement(
                            "div",
                            null,
                            "设置Breadcrumb的separator属性可以自定义面包屑的分隔符。",
                            React.createElement(FontIcon, { icon: "chevron-circle-down", ref: "collapse", className: "collapse", onClick: this.openCloseCode.bind(this) })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-src", ref: "boxSrc" },
                        React.createElement(
                            Code,
                            { className: "language-jsx" },
                            "\nconst Breadcrumb = require(\"Breadcrumb\");\nconst FontIcon = require(\"FontIcon\");\n\nReactDOM.render(\n<div>\n    <Breadcrumb separator=\">\">\n        <Breadcrumb.Item>\n            <FontIcon icon={\"home\"}></FontIcon>\n        </Breadcrumb.Item>\n        <Breadcrumb.Item link=\"javascript:void(0)\">\n            <FontIcon icon={\"list-ul\"}></FontIcon>\n            <span>Application List</span>\n        </Breadcrumb.Item>\n        <Breadcrumb.Item>Application</Breadcrumb.Item>\n    </Breadcrumb>\n</div>, mountNode);\n"
                        )
                    )
                );
            }
        }]);

        return Demo;
    }(BaseDemo);

    module.exports = Demo;
});
