define(["module", "react", "Label", "../components/card/demo1", "../components/card/demo2", "../components/card/demo3", "../components/card/demo4", "../components/card/demo5", "../components/card/demo6"], function (module, React, Label, Demo1, Demo2, Demo3, Demo4, Demo5, Demo6) {
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
                    "Card \u5361\u7247"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "\u901A\u7528\u5361\u7247\u5BB9\u5668\u3002",
                    React.createElement("br", null),
                    "\u6700\u57FA\u7840\u7684\u5361\u7247\u5BB9\u5668\uFF0C\u53EF\u627F\u8F7D\u6587\u5B57\u3001\u5217\u8868\u3001\u56FE\u7247\u3001\u6BB5\u843D\uFF0C\u5E38\u7528\u4E8E\u540E\u53F0\u6982\u89C8\u9875\u9762\u3002"
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
                ),
                React.createElement(
                    Label,
                    { className: "code-col" },
                    React.createElement(
                        Label,
                        { className: "code-box" },
                        React.createElement(Demo3, null)
                    )
                ),
                React.createElement(
                    Label,
                    { className: "code-col" },
                    React.createElement(
                        Label,
                        { className: "code-box" },
                        React.createElement(Demo4, null)
                    )
                ),
                React.createElement(
                    Label,
                    { className: "code-col" },
                    React.createElement(
                        Label,
                        { className: "code-box" },
                        React.createElement(Demo5, null)
                    )
                ),
                React.createElement(
                    Label,
                    { className: "code-col" },
                    React.createElement(
                        Label,
                        { className: "code-box" },
                        React.createElement(Demo6, null)
                    )
                )
            );
        }
    });

    module.exports = Page;
});
