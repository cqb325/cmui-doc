define(["module", "react", "Label", "../components/radio/demo1", "../components/radio/demo2", "../components/radio/demo3", "../components/radio/demo4", "../components/radio/demo5"], function (module, React, Label, Demo1, Demo2, Demo3, Demo4, Demo5) {
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
                    "Radio \u5355\u9009\u6846"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "\u5355\u9009\u6846\u3002"
                ),
                React.createElement(
                    "h1",
                    { className: "page-h1" },
                    "\u4EE3\u7801\u6F14\u793A"
                ),
                React.createElement(
                    Label,
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
                    Label,
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
            );
        }
    });

    module.exports = Page;
});
