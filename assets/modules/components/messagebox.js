define(["module", "react", "Label", "../components/messagebox/demo1", "../components/messagebox/demo2"], function (module, React, Label, Demo1, Demo2) {
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
                    "MessageBox \u6D88\u606F\u6846"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "\u6D88\u606F\u6846\u3002",
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
