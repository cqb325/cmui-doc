define(["module", "react", "Label", "Row", "Col"], function (module, React, Label, Row, Col) {
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
                    "\u8272\u503C\u53C2\u8003"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "\u8272\u5F69\u5728\u754C\u9762\u8BBE\u8BA1\u4E2D\u7684\u4F7F\u7528\u5E94\u540C\u65F6\u5177\u5907\u54C1\u724C\u8BC6\u522B\u6027\u4EE5\u53CA\u754C\u9762\u8BBE\u8BA1\u529F\u80FD\u6027\u3002\u8272\u5F69\u662F\u76F8\u5F53\u611F\u6027\u7684\u4E1C\u897F\uFF0C\u8BBE\u8BA1\u4E2D\u5BF9\u8272\u5F69\u7684\u8FD0\u7528\u9996\u8981\u5E94\u8003\u8651\u5230\u54C1\u724C\u5C42\u9762\u7684\u8868\u8FBE\uFF0C\u53E6\u5916\u5F88\u91CD\u8981\u7684\u4E00\u70B9\u662F\u8272\u5F69\u7684\u8FD0\u7528\u5E94\u8FBE\u5230\u4FE1\u606F\u4F20\u9012\uFF0C\u52A8\u4F5C\u6307\u5F15\uFF0C\u4EA4\u4E92\u53CD\u9988\uFF0C\u6216\u662F\u5F3A\u5316\u548C\u51F8\u73B0\u67D0\u4E00\u4E2A\u5143\u7D20\u7684\u76EE\u7684\u3002\u4EFB\u4F55\u989C\u8272\u7684\u9009\u53D6\u548C\u4F7F\u7528\u5E94\u8BE5\u662F\u6709\u610F\u4E49\u7684\u3002"
                ),
                React.createElement(
                    "h1",
                    { className: "page-h1" },
                    "\u4E3B\u8272"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "CMUI\u7684\u4E3B\u8272\u662F\u9C9C\u8273\u3001\u53CB\u597D\u7684\u84DD\u8272\u3002"
                ),
                React.createElement(
                    "div",
                    { className: "mb-10" },
                    React.createElement(
                        Label,
                        { grid: 0.3, className: "color-box" },
                        React.createElement(
                            "div",
                            { className: "bg-blue-light color-box-inner" },
                            React.createElement(
                                "div",
                                null,
                                "LIGHT BLUE"
                            ),
                            React.createElement(
                                "div",
                                null,
                                "#58B7FF"
                            )
                        )
                    ),
                    React.createElement(
                        Label,
                        { grid: 0.3, className: "color-box" },
                        React.createElement(
                            "div",
                            { className: "bg-blue color-box-inner" },
                            React.createElement(
                                "div",
                                null,
                                "BLUE"
                            ),
                            React.createElement(
                                "div",
                                null,
                                "#20A0FF"
                            )
                        )
                    ),
                    React.createElement(
                        Label,
                        { grid: 0.3, className: "color-box" },
                        React.createElement(
                            "div",
                            { className: "bg-blue-dark color-box-inner" },
                            React.createElement(
                                "div",
                                null,
                                "DARK BLUE"
                            ),
                            React.createElement(
                                "div",
                                null,
                                "#1D8CE0"
                            )
                        )
                    )
                ),
                React.createElement(
                    "h1",
                    { className: "page-h1" },
                    "\u8F85\u52A9\u8272"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "\u9664\u4E86\u4E3B\u8272\u5916\u7684\u573A\u666F\u8272\uFF0C\u9700\u8981\u5728\u4E0D\u540C\u7684\u573A\u666F\u4E2D\u4F7F\u7528\uFF08\u4F8B\u5982\u5371\u9669\u8272\u8868\u793A\u5371\u9669\u7684\u64CD\u4F5C\uFF09\u3002"
                ),
                React.createElement(
                    "div",
                    { className: "mb-10" },
                    React.createElement(
                        Label,
                        { grid: 0.25, className: "color-box" },
                        React.createElement(
                            "div",
                            { className: "bg-blue color-box-inner" },
                            React.createElement(
                                "div",
                                null,
                                "BLUE"
                            ),
                            React.createElement(
                                "div",
                                null,
                                "#20A0FF"
                            )
                        )
                    ),
                    React.createElement(
                        Label,
                        { grid: 0.25, className: "color-box" },
                        React.createElement(
                            "div",
                            { className: "bg-success color-box-inner" },
                            React.createElement(
                                "div",
                                null,
                                "SUCCESS"
                            ),
                            React.createElement(
                                "div",
                                null,
                                "#13CE66"
                            )
                        )
                    ),
                    React.createElement(
                        Label,
                        { grid: 0.25, className: "color-box" },
                        React.createElement(
                            "div",
                            { className: "bg-warning color-box-inner" },
                            React.createElement(
                                "div",
                                null,
                                "WARNING"
                            ),
                            React.createElement(
                                "div",
                                null,
                                "#F7BA2A"
                            )
                        )
                    ),
                    React.createElement(
                        Label,
                        { grid: 0.25, className: "color-box" },
                        React.createElement(
                            "div",
                            { className: "bg-danger color-box-inner" },
                            React.createElement(
                                "div",
                                null,
                                "DANGER"
                            ),
                            React.createElement(
                                "div",
                                null,
                                "#FF4949"
                            )
                        )
                    )
                ),
                React.createElement(
                    "h1",
                    { className: "page-h1" },
                    "\u4E2D\u6027\u8272"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "\u4E2D\u6027\u8272\u7528\u4E8E\u6587\u672C\u3001\u80CC\u666F\u548C\u8FB9\u6846\u989C\u8272\u3002\u901A\u8FC7\u8FD0\u7528\u4E0D\u540C\u7684\u4E2D\u6027\u8272\uFF0C\u6765\u8868\u73B0\u5C42\u6B21\u7ED3\u6784\u3002"
                ),
                React.createElement(
                    "div",
                    { className: "mb-10" },
                    React.createElement(
                        Row,
                        null,
                        React.createElement(
                            Col,
                            { grid: 0.25, className: "color-box" },
                            React.createElement(
                                "div",
                                { className: "bg-dark color-box-inner" },
                                React.createElement(
                                    "div",
                                    null,
                                    "DARK"
                                ),
                                React.createElement(
                                    "div",
                                    null,
                                    "#1F2D3D"
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "bg-dark-light color-box-inner" },
                                React.createElement(
                                    "div",
                                    null,
                                    "LIGHT DARK"
                                ),
                                React.createElement(
                                    "div",
                                    null,
                                    "#324057"
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "bg-dark-lighter color-box-inner" },
                                React.createElement(
                                    "div",
                                    null,
                                    "LIGHTER DARK"
                                ),
                                React.createElement(
                                    "div",
                                    null,
                                    "#475669"
                                )
                            )
                        ),
                        React.createElement(
                            Col,
                            { grid: 0.25, className: "color-box" },
                            React.createElement(
                                "div",
                                { className: "bg-silver color-box-inner" },
                                React.createElement(
                                    "div",
                                    null,
                                    "Silver"
                                ),
                                React.createElement(
                                    "div",
                                    null,
                                    "#8492A6"
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "bg-silver-light color-box-inner" },
                                React.createElement(
                                    "div",
                                    null,
                                    "LIGHT Silver"
                                ),
                                React.createElement(
                                    "div",
                                    null,
                                    "#99A9BF"
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "bg-silver-lighter color-box-inner" },
                                React.createElement(
                                    "div",
                                    null,
                                    "LIGHTER Silver"
                                ),
                                React.createElement(
                                    "div",
                                    null,
                                    "#C0CCDA"
                                )
                            )
                        ),
                        React.createElement(
                            Col,
                            { grid: 0.25, className: "color-box" },
                            React.createElement(
                                "div",
                                { className: "bg-gray color-box-inner text-dark-lighter" },
                                React.createElement(
                                    "div",
                                    null,
                                    "GRAY"
                                ),
                                React.createElement(
                                    "div",
                                    null,
                                    "#D3DCE6"
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "bg-gray-light color-box-inner text-dark-lighter" },
                                React.createElement(
                                    "div",
                                    null,
                                    "LIGHT GRAY"
                                ),
                                React.createElement(
                                    "div",
                                    null,
                                    "#E5E9F2"
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "bg-gray-lighter color-box-inner text-dark-lighter" },
                                React.createElement(
                                    "div",
                                    null,
                                    "LIGHTER GRAY"
                                ),
                                React.createElement(
                                    "div",
                                    null,
                                    "#EFF2F7"
                                )
                            )
                        ),
                        React.createElement(
                            Col,
                            { grid: 0.25, className: "color-box" },
                            React.createElement(
                                "div",
                                { className: "bg-white color-box-inner text-dark-lighter" },
                                React.createElement(
                                    "div",
                                    null,
                                    "WHITE"
                                ),
                                React.createElement(
                                    "div",
                                    null,
                                    "#F9FAFC"
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "bg-white-light color-box-inner text-dark-lighter" },
                                React.createElement(
                                    "div",
                                    null,
                                    "LIGHT WHITE"
                                ),
                                React.createElement(
                                    "div",
                                    null,
                                    "#FFFFFF"
                                )
                            ),
                            React.createElement("div", { className: "bg-white color-box-inner text-dark" })
                        )
                    )
                )
            );
        }
    });

    module.exports = Page;
});
