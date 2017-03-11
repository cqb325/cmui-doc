define(["module", "react", "Label", "Row", "Col", "../components/slick/demo1", "../components/slick/demo2", "../components/slick/demo3", "../components/slick/demo4", "../components/slick/demo5"], function (module, React, Label, Row, Col, Demo1, Demo2, Demo3, Demo4, Demo5) {
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
                    "Slick \u5E7B\u706F\u7247"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "\u4E00\u7EC4\u8F6E\u64AD\u7684\u533A\u57DF\u3002",
                    React.createElement("br", null),
                    "\u7528\u4E8E\u4E00\u7EC4\u56FE\u7247\u6216\u5361\u7247\u8F6E\u64AD"
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
                        )
                    )
                )
            );
        }
    });

    module.exports = Page;
});
