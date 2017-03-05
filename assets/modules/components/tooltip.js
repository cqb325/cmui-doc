define(["module", "react", "Label", "../components/tooltip/demo1", "../components/tooltip/demo2", "../components/tooltip/demo3", "../components/tooltip/demo4"], function (module, React, Label, Demo1, Demo2, Demo3, Demo4) {
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
                    "Tooltip \u6587\u5B57\u63D0\u793A"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "\u7B80\u5355\u7684\u6587\u5B57\u63D0\u793A\u6C14\u6CE1\u6846\u3002",
                    React.createElement("br", null),
                    "\u9F20\u6807\u79FB\u5165\u5219\u663E\u793A\u63D0\u793A\uFF0C\u79FB\u51FA\u6D88\u5931\uFF0C\u6C14\u6CE1\u6D6E\u5C42\u4E0D\u627F\u8F7D\u590D\u6742\u6587\u672C\u548C\u64CD\u4F5C\u3002"
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
