define(["module", "react", "react-dom"], function (module, React, ReactDOM) {
    "use strict";

    var Page = React.createClass({
        displayName: "Page",
        render: function render() {
            return React.createElement(
                "div",
                { className: "content" },
                React.createElement(
                    "h1",
                    { className: "page-h1" },
                    "\u5F00\u59CB\u4F7F\u7528"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "\u4F7F\u7528\u65B9\u5F0F"
                )
            );
        }
    });

    module.exports = Page;
});
