define(["module", "react", "Label", "../components/table/demo1"], function (module, React, Label, Demo1) {
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
                    "Table \u8868\u683C"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "\u8868\u683C\u3002",
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
                )
            );
        }
    });

    module.exports = Page;
});
