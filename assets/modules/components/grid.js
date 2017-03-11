define(["module", "react", "Label", "../components/grid/demo1", "../components/grid/demo2", "../components/grid/demo3"], function (module, React, Label, Demo1, Demo2, Demo3) {
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
                    "Grid \u6805\u683C"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "\u65E0\u6781\u6805\u683C\u3002"
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
                )
            );
        }
    });

    module.exports = Page;
});
