define(["module", "react", "Label"], function (module, React, Label) {
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
                    "\u5B57\u4F53"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "\u8DE8\u5E73\u53F0\u7684\u5B57\u4F53\u8BBE\u5B9A\uFF0C\u529B\u6C42\u5728\u5404\u4E2A\u64CD\u4F5C\u7CFB\u7EDF\u4E0B\u90FD\u6709\u6700\u4F73\u5C55\u793A\u6548\u679C\u3002"
                ),
                React.createElement(
                    "h1",
                    { className: "main-title-bold" },
                    "\u4E2D\u6587\u5B57\u4F53"
                ),
                React.createElement(
                    "div",
                    { className: "mb-30" },
                    React.createElement(
                        Label,
                        { grid: 0.3, className: "doc-font-box" },
                        React.createElement(
                            "div",
                            { className: "doc-font-box-inner" },
                            React.createElement(
                                "div",
                                { className: "font-40 demo-font-PingFang" },
                                "\u5B57\u4F53"
                            ),
                            React.createElement(
                                "div",
                                null,
                                "PingFang SC"
                            )
                        )
                    ),
                    React.createElement(
                        Label,
                        { grid: 0.3, className: "doc-font-box" },
                        React.createElement(
                            "div",
                            { className: "doc-font-box-inner" },
                            React.createElement(
                                "div",
                                { className: "font-40 demo-font-Hiragino" },
                                "\u5B57\u4F53"
                            ),
                            React.createElement(
                                "div",
                                null,
                                "Hiragino Sans GB"
                            )
                        )
                    ),
                    React.createElement(
                        Label,
                        { grid: 0.3, className: "doc-font-box" },
                        React.createElement(
                            "div",
                            { className: "doc-font-box-inner" },
                            React.createElement(
                                "div",
                                { className: "font-40 demo-font-YaHei" },
                                "\u5B57\u4F53"
                            ),
                            React.createElement(
                                "div",
                                null,
                                "Microsoft YaHei"
                            )
                        )
                    )
                ),
                React.createElement(
                    "h1",
                    { className: "main-title-bold" },
                    "\u6570\u5B57\u82F1\u6587\u5B57\u4F53"
                ),
                React.createElement(
                    "div",
                    { className: "mb-30" },
                    React.createElement(
                        Label,
                        { grid: 0.3, className: "doc-font-box" },
                        React.createElement(
                            "div",
                            { className: "doc-font-box-inner" },
                            React.createElement(
                                "div",
                                { className: "font-40" },
                                "FONT"
                            ),
                            React.createElement(
                                "div",
                                null,
                                "Helvetica Neue"
                            )
                        )
                    ),
                    React.createElement(
                        Label,
                        { grid: 0.3, className: "doc-font-box" },
                        React.createElement(
                            "div",
                            { className: "doc-font-box-inner" },
                            React.createElement(
                                "div",
                                { className: "font-40 demo-font-Helvetica" },
                                "FONT"
                            ),
                            React.createElement(
                                "div",
                                null,
                                "Helvetica"
                            )
                        )
                    ),
                    React.createElement(
                        Label,
                        { grid: 0.3, className: "doc-font-box" },
                        React.createElement(
                            "div",
                            { className: "doc-font-box-inner" },
                            React.createElement(
                                "div",
                                { className: "font-40 demo-font-Arial" },
                                "FONT"
                            ),
                            React.createElement(
                                "div",
                                null,
                                "Arial"
                            )
                        )
                    )
                ),
                React.createElement(
                    "h1",
                    { className: "main-title-bold" },
                    "\u5B57\u4F53\u4F7F\u7528\u89C4\u8303"
                ),
                React.createElement(
                    "div",
                    { className: "doc-font-use" },
                    React.createElement(
                        "div",
                        { className: "mb-10" },
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "main-title" },
                            React.createElement(
                                "div",
                                null,
                                "\u4E3B\u6807\u9898"
                            )
                        ),
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "main-title" },
                            React.createElement(
                                "div",
                                null,
                                "Main Head"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "mb-30" },
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "main-title-bold" },
                            React.createElement(
                                "div",
                                null,
                                "\u6211\u662F\u6807\u9898\u52A0\u7C97 #666 16px"
                            )
                        ),
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "main-title-bold" },
                            React.createElement(
                                "div",
                                null,
                                "I am example text bold #666 16px"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "mb-10" },
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "sub-title" },
                            React.createElement(
                                "div",
                                null,
                                "\u6B21\u7EA7\u6807\u9898"
                            )
                        ),
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "sub-title" },
                            React.createElement(
                                "div",
                                null,
                                "Sub Head"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "mb-30" },
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "sub-title-bold" },
                            React.createElement(
                                "div",
                                null,
                                "\u6211\u662F\u6807\u9898 \u52A0\u7C97 #666 14px"
                            )
                        ),
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "sub-title-bold" },
                            React.createElement(
                                "div",
                                null,
                                "I am example text bold #666 14px"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "mb-10" },
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "small-title" },
                            React.createElement(
                                "div",
                                null,
                                "\u5C0F\u6807\u9898"
                            )
                        ),
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "small-title" },
                            React.createElement(
                                "div",
                                null,
                                "Small Head"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "mb-30" },
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "small-title-bold" },
                            React.createElement(
                                "div",
                                null,
                                "\u6211\u662F\u6807\u9898 \u52A0\u7C97 #666 12px"
                            )
                        ),
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "small-title-bold" },
                            React.createElement(
                                "div",
                                null,
                                "I am example text bold #666 12px"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "mb-10" },
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "text-normal" },
                            React.createElement(
                                "div",
                                null,
                                "\u6B63\u6587"
                            )
                        ),
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "text-normal" },
                            React.createElement(
                                "div",
                                null,
                                "Text"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "mb-30" },
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "text-normal" },
                            React.createElement(
                                "div",
                                null,
                                "\u6211\u662F\u6B63\u6587 #666 12px"
                            )
                        ),
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "text-normal" },
                            React.createElement(
                                "div",
                                null,
                                "I am example text #666 12px"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "mb-10" },
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "text-promote" },
                            React.createElement(
                                "div",
                                null,
                                "\u8F85\u52A9\u6587\u5B57"
                            )
                        ),
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "text-promote" },
                            React.createElement(
                                "div",
                                null,
                                "Help Text"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "mb-30" },
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "text-promote" },
                            React.createElement(
                                "div",
                                null,
                                "\u6211\u662F\u8F85\u52A9\u6587\u5B57 #999 12px"
                            )
                        ),
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "text-promote" },
                            React.createElement(
                                "div",
                                null,
                                "I am example text #999 12px"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "mb-10" },
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "text-invalid" },
                            React.createElement(
                                "div",
                                null,
                                "\u5931\u6548\u6587\u5B57"
                            )
                        ),
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "text-invalid" },
                            React.createElement(
                                "div",
                                null,
                                "Help Text"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "mb-30" },
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "text-invalid" },
                            React.createElement(
                                "div",
                                null,
                                "\u6211\u662F\u5931\u6548\u6587\u5B57 #ccc 12px"
                            )
                        ),
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "text-invalid" },
                            React.createElement(
                                "div",
                                null,
                                "I am example text #ccc 12px"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "mb-10" },
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "text-link" },
                            React.createElement(
                                "div",
                                null,
                                "\u94FE\u63A5\u6587\u5B57"
                            )
                        ),
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "text-link" },
                            React.createElement(
                                "div",
                                null,
                                "Help Text"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "mb-30" },
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "text-link" },
                            React.createElement(
                                "div",
                                null,
                                "\u6211\u662F\u94FE\u63A5\u6587\u5B57 #20A0FF 12px"
                            )
                        ),
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "text-link" },
                            React.createElement(
                                "div",
                                null,
                                "I am example text #20A0FF 12px"
                            )
                        )
                    )
                )
            );
        }
    });

    module.exports = Page;
});
