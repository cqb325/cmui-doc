define(["module", "react", "Label", "../components/layout/demo1"], function (module, React, Label, Demo1) {
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
                    "Layout \u5E03\u5C40"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "\u53EF\u534F\u52A9\u8FDB\u884C\u9875\u9762\u7EA7\u6574\u4F53\u5E03\u5C40\u3002\u91C7\u7528flex\u5E03\u5C40 \u6CE8\u610F\u6D4F\u89C8\u5668\u517C\u5BB9\u6027",
                    React.createElement("br", null),
                    React.createElement(
                        "ol",
                        { style: { paddingLeft: 15, listStyle: 'circle' } },
                        React.createElement(
                            "li",
                            null,
                            "Layout\uFF1A\u5E03\u5C40\u5BB9\u5668\uFF0C\u5176\u4E0B\u53EF\u5D4C\u5957 Header Sider Content Footer \u6216 Layout \u672C\u8EAB\u3002"
                        ),
                        React.createElement(
                            "li",
                            null,
                            "Header\uFF1A\u9876\u90E8\u5E03\u5C40\uFF0C\u81EA\u5E26\u9ED8\u8BA4\u6837\u5F0F\u3002"
                        ),
                        React.createElement(
                            "li",
                            null,
                            "Sider\uFF1A\u4FA7\u8FB9\u680F\uFF0C\u81EA\u5E26\u9ED8\u8BA4\u6837\u5F0F\u53CA\u57FA\u672C\u529F\u80FD\u3002"
                        ),
                        React.createElement(
                            "li",
                            null,
                            "Content\uFF1A\u5185\u5BB9\u90E8\u5206\uFF0C\u81EA\u5E26\u9ED8\u8BA4\u6837\u5F0F\u3002"
                        ),
                        React.createElement(
                            "li",
                            null,
                            "Footer\uFF1A\u5E95\u90E8\u5E03\u5C40\uFF0C\u81EA\u5E26\u9ED8\u8BA4\u6837\u5F0F\u3002"
                        )
                    )
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
