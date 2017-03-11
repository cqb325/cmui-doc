define(["module", "react", "Label", "../components/menu/demo1", "../components/menu/demo2", "../components/menu/demo3", "../components/menu/demo4"], function (module, React, Label, Demo1, Demo2, Demo3, Demo4) {
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
                    "Menu \u83DC\u5355"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "\u4E3A\u9875\u9762\u548C\u529F\u80FD\u63D0\u4F9B\u5BFC\u822A\u7684\u83DC\u5355\u5217\u8868\u3002",
                    React.createElement("br", null)
                ),
                React.createElement(
                    "h1",
                    { className: "page-h1" },
                    "\u4EE3\u7801\u6F14\u793A"
                ),
                React.createElement(
                    Label,
                    { grid: 1, className: "code-col" },
                    React.createElement(
                        Label,
                        { className: "code-box" },
                        React.createElement(Demo1, null)
                    )
                ),
                React.createElement(
                    Label,
                    { grid: 1, className: "code-col" },
                    React.createElement(
                        Label,
                        { className: "code-box" },
                        React.createElement(Demo2, null)
                    )
                ),
                React.createElement(
                    Label,
                    { grid: 1, className: "code-col" },
                    React.createElement(
                        Label,
                        { className: "code-box" },
                        React.createElement(Demo3, null)
                    )
                ),
                React.createElement(
                    Label,
                    { grid: 1, className: "code-col" },
                    React.createElement(
                        Label,
                        { className: "code-box" },
                        React.createElement(Demo4, null)
                    )
                )
            );
        }
    });

    module.exports = Page;
});
