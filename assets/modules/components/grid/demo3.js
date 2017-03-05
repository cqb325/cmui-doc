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
                                { grid: { width: 1 / 4, responsive: "sm" }, className: "demo-col" },
                                "grid(1/4)"
                            ),
                            React.createElement(
                                Col,
                                { grid: { width: 1 / 4, responsive: "sm" }, className: "demo-col lighter" },
                                "grid(1/4)"
                            ),
                            React.createElement(
                                Col,
                                { grid: { width: 1 / 4, responsive: "sm" }, className: "demo-col" },
                                "grid(1/4)"
                            ),
                            React.createElement(
                                Col,
                                { grid: { width: 1 / 4, responsive: "sm" }, className: "demo-col lighter" },
                                "grid(1/4)"
                            )
                        ),
                        React.createElement(
                            Row,
                            { className: "demo-row" },
                            React.createElement(
                                Col,
                                { grid: { width: 1 / 4, responsive: "lg" }, className: "demo-col" },
                                "grid(1/4)"
                            ),
                            React.createElement(
                                Col,
                                { grid: { width: 1 / 4, responsive: "lg" }, className: "demo-col lighter" },
                                "grid(1/4)"
                            ),
                            React.createElement(
                                Col,
                                { grid: { width: 1 / 4, responsive: "lg" }, className: "demo-col" },
                                "grid(1/4)"
                            ),
                            React.createElement(
                                Col,
                                { grid: { width: 1 / 4, responsive: "lg" }, className: "demo-col lighter" },
                                "grid(1/4)"
                            )
                        ),
                        React.createElement(
                            Row,
                            { className: "demo-row" },
                            React.createElement(
                                Col,
                                { grid: { width: 1 / 4, responsive: "xl" }, className: "demo-col" },
                                "grid(1/4)"
                            ),
                            React.createElement(
                                Col,
                                { grid: { width: 1 / 4, responsive: "xl" }, className: "demo-col lighter" },
                                "grid(1/4)"
                            ),
                            React.createElement(
                                Col,
                                { grid: { width: 1 / 4, responsive: "xl" }, className: "demo-col" },
                                "grid(1/4)"
                            ),
                            React.createElement(
                                Col,
                                { grid: { width: 1 / 4, responsive: "xl" }, className: "demo-col lighter" },
                                "grid(1/4)"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-desc" },
                        React.createElement(
                            "div",
                            { className: "code-box-title" },
                            "\u54CD\u5E94\u5F0F\u5E03\u5C40"
                        ),
                        React.createElement(
                            "div",
                            null,
                            "\u6805\u683C\u5E03\u5C40 \u4E3A\u54CD\u5E94\u5F0F\u5E03\u5C40\u9884\u8BBE\u4E86\u56DB\u4E2A\u5C3A\u5BF8\uFF0Csm/md/lg/xl\u3002",
                            React.createElement(FontIcon, { icon: "chevron-circle-down", ref: "collapse", className: "collapse", onClick: this.openCloseCode.bind(this) })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-src", ref: "boxSrc" },
                        React.createElement(
                            Code,
                            { className: "language-jsx" },
                            "\nconst Row = require(\"Row\");\nconst Col = require(\"Col\");\n\nReactDOM.render(\n<div>\n    <Row className=\"demo-row\">\n        <Col grid={{width: 1/4, responsive: \"sm\"}} className=\"demo-col\">grid(1/4)</Col>\n        <Col grid={{width: 1/4, responsive: \"sm\"}} className=\"demo-col lighter\">grid(1/4)</Col>\n        <Col grid={{width: 1/4, responsive: \"sm\"}} className=\"demo-col\">grid(1/4)</Col>\n        <Col grid={{width: 1/4, responsive: \"sm\"}} className=\"demo-col lighter\">grid(1/4)</Col>\n    </Row>\n\n    <Row className=\"demo-row\">\n        <Col grid={{width: 1/4, responsive: \"lg\"}} className=\"demo-col\">grid(1/4)</Col>\n        <Col grid={{width: 1/4, responsive: \"lg\"}} className=\"demo-col lighter\">grid(1/4)</Col>\n        <Col grid={{width: 1/4, responsive: \"lg\"}} className=\"demo-col\">grid(1/4)</Col>\n        <Col grid={{width: 1/4, responsive: \"lg\"}} className=\"demo-col lighter\">grid(1/4)</Col>\n    </Row>\n\n    <Row className=\"demo-row\">\n        <Col grid={{width: 1/4, responsive: \"xl\"}} className=\"demo-col\">grid(1/4)</Col>\n        <Col grid={{width: 1/4, responsive: \"xl\"}} className=\"demo-col lighter\">grid(1/4)</Col>\n        <Col grid={{width: 1/4, responsive: \"xl\"}} className=\"demo-col\">grid(1/4)</Col>\n        <Col grid={{width: 1/4, responsive: \"xl\"}} className=\"demo-col lighter\">grid(1/4)</Col>\n    </Row>\n</div>, mountNode);\n"
                        )
                    )
                );
            }
        }]);

        return Demo;
    }(BaseDemo);

    module.exports = Demo;
});
