define(["module", "react", "../BaseDemo", "Row", "Col", "FontIcon", "../Code"], function (module, React, BaseDemo, Row, Col, FontIcon, Code) {
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
                            Row,
                            { className: "demo-row" },
                            React.createElement(
                                Col,
                                { grid: 1, className: "demo-col" },
                                "grid(1)"
                            )
                        ),
                        React.createElement(
                            Row,
                            { className: "demo-row" },
                            React.createElement(
                                Col,
                                { grid: 1 / 4, className: "demo-col" },
                                "grid(1/4)"
                            ),
                            React.createElement(
                                Col,
                                { grid: 1 / 4, className: "demo-col lighter" },
                                "grid(1/4)"
                            ),
                            React.createElement(
                                Col,
                                { grid: 1 / 4, className: "demo-col" },
                                "grid(1/4)"
                            ),
                            React.createElement(
                                Col,
                                { grid: 1 / 4, className: "demo-col lighter" },
                                "grid(1/4)"
                            )
                        ),
                        React.createElement(
                            Row,
                            { className: "demo-row" },
                            React.createElement(
                                Col,
                                { grid: 1 / 3, className: "demo-col" },
                                "grid(1/3)"
                            ),
                            React.createElement(
                                Col,
                                { grid: 1 / 3, className: "demo-col lighter" },
                                "grid(1/3)"
                            ),
                            React.createElement(
                                Col,
                                { grid: 1 / 3, className: "demo-col" },
                                "grid(1/3)"
                            )
                        ),
                        React.createElement(
                            Row,
                            { className: "demo-row" },
                            React.createElement(
                                Col,
                                { grid: 1 / 2, className: "demo-col" },
                                "grid(1/2)"
                            ),
                            React.createElement(
                                Col,
                                { grid: 1 / 2, className: "demo-col lighter" },
                                "grid(1/2)"
                            )
                        ),
                        React.createElement(
                            Row,
                            { className: "demo-row" },
                            React.createElement(
                                Col,
                                { grid: 5 / 6, className: "demo-col" },
                                "grid(5/6)"
                            ),
                            React.createElement(
                                Col,
                                { grid: 1 / 6, className: "demo-col lighter" },
                                "grid(1/6)"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-desc" },
                        React.createElement(
                            "div",
                            { className: "code-box-title" },
                            "\u57FA\u672C\u7528\u6CD5"
                        ),
                        React.createElement(
                            "div",
                            null,
                            "\u5E03\u5C40\u7684\u6805\u683C\u5316\u7CFB\u7EDF\uFF0C\u6211\u4EEC\u662F\u57FA\u4E8E\u884C\uFF08row\uFF09\u548C\u5217\uFF08col\uFF09\u6765\u5B9A\u4E49\u4FE1\u606F\u533A\u5757\u7684\u5916\u90E8\u6846\u67B6\uFF0C\u4EE5\u4FDD\u8BC1\u9875\u9762\u7684\u6BCF\u4E2A\u533A\u57DF\u80FD\u591F\u7A33\u5065\u5730\u6392\u5E03\u8D77\u6765",
                            React.createElement(FontIcon, { icon: "chevron-circle-down", ref: "collapse", className: "collapse", onClick: this.openCloseCode.bind(this) })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-src", ref: "boxSrc" },
                        React.createElement(
                            Code,
                            { className: "language-jsx" },
                            "\nconst Row = require(\"Row\");\nconst Col = require(\"Col\");\n\nReactDOM.render(\n<div>\n    <Row className=\"demo-row\">\n        <Col grid={1} className=\"demo-col\">grid(1)</Col>\n    </Row>\n    <Row className=\"demo-row\">\n        <Col grid={1/4} className=\"demo-col\">grid(1/4)</Col>\n        <Col grid={1/4} className=\"demo-col lighter\">grid(1/4)</Col>\n        <Col grid={1/4} className=\"demo-col\">grid(1/4)</Col>\n        <Col grid={1/4} className=\"demo-col lighter\">grid(1/4)</Col>\n    </Row>\n    <Row className=\"demo-row\">\n        <Col grid={1/3} className=\"demo-col\">grid(1/3)</Col>\n        <Col grid={1/3} className=\"demo-col lighter\">grid(1/3)</Col>\n        <Col grid={1/3} className=\"demo-col\">grid(1/3)</Col>\n    </Row>\n    <Row className=\"demo-row\">\n        <Col grid={1/2} className=\"demo-col\">grid(1/2)</Col>\n        <Col grid={1/2} className=\"demo-col lighter\">grid(1/2)</Col>\n    </Row>\n    <Row className=\"demo-row\">\n        <Col grid={5/6} className=\"demo-col\">grid(5/6)</Col>\n        <Col grid={1/6} className=\"demo-col lighter\">grid(1/6)</Col>\n    </Row>\n</div>, mountNode);\n"
                        )
                    )
                );
            }
        }]);

        return Demo;
    }(BaseDemo);

    module.exports = Demo;
});
