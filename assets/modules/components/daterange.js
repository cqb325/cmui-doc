define(["module", "react", "Row", "Col", "Label", "../components/daterange/demo1", "../components/daterange/demo2", "../components/daterange/demo3", "../components/daterange/demo4", "../components/daterange/demo5", "../components/daterange/demo6", "../components/daterange/demo7"], function (module, React, Row, Col, Label, Demo1, Demo2, Demo3, Demo4, Demo5, Demo6, Demo7) {
    "use strict";

    var Page = React.createClass({
        displayName: "Page",
        render: function render() {
            return React.createElement(
                "div",
                { className: "main-container" },
                React.createElement(
                    "h1",
                    { className: "page-h1" },
                    "DateRange \u65F6\u95F4\u6BB5\u9009\u62E9\u5668"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "\u9009\u62E9\u4E00\u6BB5\u65F6\u95F4\u7684\u63A7\u4EF6\u3002"
                ),
                React.createElement(
                    "h1",
                    { className: "page-h1" },
                    "\u4EE3\u7801\u6F14\u793A"
                ),
                React.createElement(
                    Row,
                    null,
                    React.createElement(
                        Col,
                        { grid: 0.5, className: "code-col" },
                        React.createElement(
                            Label,
                            { className: "code-box" },
                            React.createElement(Demo1, null)
                        ),
                        React.createElement(
                            Label,
                            { className: "code-box" },
                            React.createElement(Demo3, null)
                        ),
                        React.createElement(
                            Label,
                            { className: "code-box" },
                            React.createElement(Demo5, null)
                        ),
                        React.createElement(
                            Label,
                            { className: "code-box" },
                            React.createElement(Demo7, null)
                        )
                    ),
                    React.createElement(
                        Col,
                        { grid: 0.5, className: "code-col" },
                        React.createElement(
                            Label,
                            { className: "code-box" },
                            React.createElement(Demo2, null)
                        ),
                        React.createElement(
                            Label,
                            { className: "code-box" },
                            React.createElement(Demo4, null)
                        ),
                        React.createElement(
                            Label,
                            { className: "code-box" },
                            React.createElement(Demo6, null)
                        )
                    )
                )
            );
        }
    });

    module.exports = Page;
});
