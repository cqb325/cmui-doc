const React = require("react");
const Label = require("Label");
const Table = require("Table");
const Demo1 = require("../components/radio/demo1");
const Demo2 = require("../components/radio/demo2");
const Demo3 = require("../components/radio/demo3");
const Demo4 = require("../components/radio/demo4");
const Demo5 = require("../components/radio/demo5");


let Page = React.createClass({

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">Radio 单选框</h1>
                <blockquote className="page-tip">
                    单选框。
                </blockquote>

                <h1 className="page-h1">代码演示</h1>

                <Label grid={0.5} className="code-col">
                    <Label className="code-box">
                        <Demo1></Demo1>
                    </Label>
                    <Label className="code-box">
                        <Demo3></Demo3>
                    </Label>
                    <Label className="code-box">
                        <Demo5></Demo5>
                    </Label>
                </Label>
                <Label grid={0.5} className="code-col">
                    <Label className="code-box">
                        <Demo2></Demo2>
                    </Label>
                    <Label className="code-box">
                        <Demo4></Demo4>
                    </Label>
                </Label>

                <h2 className="page-h2">API</h2>
                <h3 className="page-h3">RadioGroup</h3>

                <Table columns={[
                    {name: "param", text: "参数"},
                    {name: "desc", text: "说明"},
                    {name: "type", text: "类型"},
                    {name: "default", text: "默认值"}
                ]} bordered={true} data={[
                    {param: "value", desc: "默认值", type: "string", default: ""},
                    {param: "data", desc: "checkbox组的数据", type: "boolean", default: "false"},
                    {param: "disabled", desc: "禁用", type: "boolean", default: "false"},
                    {param: "className", desc: "自定义class", type: "string", default: ""},
                    {param: "style", desc: "自定义样式", type: "object", default: ""},
                    {param: "layout", desc: "行式inline、堆积stack布局", type: "string", default: "inline"},
                    {param: "url", desc: "数据源地址", type: "string", default: ""},
                    {param: "name", desc: "name属性", type: "string", default: ""},
                    {param: "valueField", desc: "value的字段，从对应data中的value", type: "string", default: ""},
                    {param: "textField", desc: "显示字段，从对应data中的key", type: "string", default: ""},
                    {param: "stick", desc: "按钮组模式", type: "boolean", default: "false"},
                    {param: "onChange", desc: "勾选变化后触发", type: "function", default: ""}
                ]}></Table>

                <h3 className="page-h3">Methods</h3>

                <ul className="code-methods">
                    <li>
                        <i>getValue()</i>
                        <span>获取当前选中的值</span>
                        <ul>
                            <li>
                                return {`String`} 选中的值以逗号隔开
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>setValue(value)</i>
                        <span>设置选中的值</span>
                        <ul>
                            <li>
                                value {`String`} 要设置的值以逗号隔开
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = Page;