define(["module", "react", "Label", "../components/panel/demo1", "../components/panel/demo2", "../components/card/demo3", "../components/card/demo4", "../components/card/demo5", "../components/card/demo6"], function (module, React, Label, Demo1, Demo2, Demo3, Demo4, Demo5, Demo6) {
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
                    "Panel 面板"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "通用内容容器。",
                    React.createElement("br", null)
                ),
                React.createElement(
                    "h1",
                    { className: "page-h1" },
                    "代码演示"
                ),
                React.createElement(
                    Label,
                    { className: "code-col" },
                    React.createElement(
                        Label,
                        { className: "code-box" },
                        React.createElement(Demo1, null)
                    )
                ),
                React.createElement(
                    Label,
                    { className: "code-col" },
                    React.createElement(
                        Label,
                        { className: "code-box" },
                        React.createElement(Demo2, null)
                    )
                )
            );
        }
    });

    module.exports = Page;
});
