define(["module", "react", "../BaseDemo", "FontIcon", "Card", "../Code"], function (module, React, BaseDemo, FontIcon, Card, Code) {
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
                            { style: { background: '#ECECEC', padding: '30px' } },
                            React.createElement(
                                Card,
                                { title: "Card Title", style: { width: 300 } },
                                React.createElement(
                                    "p",
                                    null,
                                    "Card content"
                                ),
                                React.createElement(
                                    "p",
                                    null,
                                    "Card content"
                                ),
                                React.createElement(
                                    "p",
                                    null,
                                    "Card content"
                                ),
                                React.createElement(
                                    "p",
                                    null,
                                    "Card content"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-desc" },
                        React.createElement(
                            "div",
                            { className: "code-box-title" },
                            "\u65E0\u8FB9\u6846"
                        ),
                        React.createElement(
                            "div",
                            null,
                            "\u5728\u7070\u8272\u80CC\u666F\u4E0A\u4F7F\u7528\u65E0\u8FB9\u6846\u7684\u5361\u7247\u3002",
                            React.createElement(FontIcon, { icon: "chevron-circle-down", ref: "collapse", className: "collapse", onClick: this.openCloseCode.bind(this) })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-src", ref: "boxSrc" },
                        React.createElement(
                            Code,
                            { className: "language-jsx" },
                            "\nconst Card = require(\"Card\");\n\nReactDOM.render(\n<div style={{background: '#ECECEC', padding: '30px'}}>\n    <Card title=\"Card Title\" style={{ width: 300 }}>\n        <p>Card content</p>\n        <p>Card content</p>\n        <p>Card content</p>\n        <p>Card content</p>\n    </Card>\n</div>, mountNode);\n"
                        )
                    )
                );
            }
        }]);

        return Demo;
    }(BaseDemo);

    module.exports = Demo;
});
