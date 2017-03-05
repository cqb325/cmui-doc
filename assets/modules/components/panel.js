define(["module", "react", "Label", "../components/panel/demo1", "../components/panel/demo2"], function (module, React, Label, Demo1, Demo2) {
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
                    "Panel \u9762\u677F"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "\u901A\u7528\u5185\u5BB9\u5BB9\u5668\u3002",
                    React.createElement("br", null)
                ),
                React.createElement(
                    "h1",
                    { className: "page-h1" },
                    "\u4EE3\u7801\u6F14\u793A"
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
