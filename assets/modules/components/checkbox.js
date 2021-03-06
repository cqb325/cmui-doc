define(["module", "react", "Label", "Table", "../components/checkbox/demo1", "../components/checkbox/demo2", "../components/checkbox/demo3", "../components/checkbox/demo4", "../components/checkbox/demo5", "../components/checkbox/demo6"], function (module, React, Label, Table, Demo1, Demo2, Demo3, Demo4, Demo5, Demo6) {
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
                    "CheckBox 复选框"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "多选框。"
                ),
                React.createElement(
                    "h1",
                    { className: "page-h1" },
                    "代码演示"
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
                    ),
                    React.createElement(
                        Label,
                        { className: "code-box" },
                        React.createElement(Demo5, null)
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
                    ),
                    React.createElement(
                        Label,
                        { className: "code-box" },
                        React.createElement(Demo6, null)
                    )
                ),
                React.createElement(
                    "h2",
                    { className: "page-h2" },
                    "API"
                ),
                React.createElement(
                    "h3",
                    { className: "page-h3" },
                    "CheckBox"
                ),
                React.createElement(Table, { columns: [{ name: "param", text: "参数" }, { name: "desc", text: "说明" }, { name: "type", text: "类型" }, { name: "default", text: "默认值" }], bordered: true, data: [{ param: "value", desc: "默认值", type: "string", default: "" }, { param: "checked", desc: "勾选状态", type: "boolean", default: "false" }, { param: "disabled", desc: "禁用", type: "boolean", default: "false" }, { param: "className", desc: "自定义class", type: "string", default: "" }, { param: "style", desc: "自定义样式", type: "object", default: "" }, { param: "type", desc: "类型radio或checkbox", type: "string", default: "checkbox" }, { param: "name", desc: "name属性", type: "string", default: "" }, { param: "label", desc: "该项的label", type: "string", default: "" }, { param: "onChange", desc: "勾选变化后触发", type: "function", default: "" }] }),
                React.createElement(
                    "h3",
                    { className: "page-h3" },
                    "CheckBoxGroup"
                ),
                React.createElement(Table, { columns: [{ name: "param", text: "参数" }, { name: "desc", text: "说明" }, { name: "type", text: "类型" }, { name: "default", text: "默认值" }], bordered: true, data: [{ param: "value", desc: "默认值", type: "string", default: "" }, { param: "data", desc: "checkbox组的数据", type: "boolean", default: "false" }, { param: "disabled", desc: "禁用", type: "boolean", default: "false" }, { param: "className", desc: "自定义class", type: "string", default: "" }, { param: "style", desc: "自定义样式", type: "object", default: "" }, { param: "layout", desc: "行式inline、堆积stack布局", type: "string", default: "inline" }, { param: "url", desc: "数据源地址", type: "string", default: "" }, { param: "name", desc: "name属性", type: "string", default: "" }, { param: "valueField", desc: "value的字段，从对应data中的value", type: "string", default: "" }, { param: "textField", desc: "显示字段，从对应data中的key", type: "string", default: "" }, { param: "onChange", desc: "勾选变化后触发", type: "function", default: "" }] }),
                React.createElement(
                    "h3",
                    { className: "page-h3" },
                    "Methods"
                ),
                React.createElement(
                    "ul",
                    { className: "code-methods" },
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "getValue()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "获取当前选中的值"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "String",
                                " 选中的值以逗号隔开"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "setValue(value)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "设置选中的值"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "value ",
                                "String",
                                " 要设置的值以逗号隔开"
                            )
                        )
                    )
                )
            );
        }
    });

    module.exports = Page;
});
