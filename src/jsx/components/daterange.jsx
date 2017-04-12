const React = require("react");
const Row = require("Row");
const Col = require("Col");
const Label = require("Label");
const Table = require("Table");
const Demo1 = require("../components/daterange/demo1");
const Demo2 = require("../components/daterange/demo2");
const Demo3 = require("../components/daterange/demo3");
const Demo4 = require("../components/daterange/demo4");
const Demo5 = require("../components/daterange/demo5");
const Demo6 = require("../components/daterange/demo6");
const Demo7 = require("../components/daterange/demo7");


let Page = React.createClass({

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">DateRange 时间段选择器</h1>
                <blockquote className="page-tip">
                    选择一段时间的控件。
                </blockquote>

                <h1 className="page-h1">代码演示</h1>

                <Row>
                    <Col grid={0.5} className="code-col">
                        <Label className="code-box">
                            <Demo1></Demo1>
                        </Label>
                        <Label className="code-box">
                            <Demo3></Demo3>
                        </Label>
                        <Label className="code-box">
                            <Demo5></Demo5>
                        </Label>
                        <Label className="code-box">
                            <Demo7></Demo7>
                        </Label>
                    </Col>
                    <Col grid={0.5} className="code-col">
                        <Label className="code-box">
                            <Demo2></Demo2>
                        </Label>
                        <Label className="code-box">
                            <Demo4></Demo4>
                        </Label>
                        <Label className="code-box">
                            <Demo6></Demo6>
                        </Label>
                    </Col>
                </Row>

                <h2 className="page-h2">API</h2>
                <h3 className="page-h3">DateRange</h3>

                <Table columns={[
                    {name: "param", text: "参数"},
                    {name: "desc", text: "说明"},
                    {name: "type", text: "类型"},
                    {name: "default", text: "默认值"}
                ]} bordered={true} data={[
                    {param: "className", desc: "自定义class", type: "string", default: ""},
                    {param: "style", desc: "自定义样式", type: "object", default: ""},
                    {param: "disabled", desc: "禁用", type: "boolean", default: "false"},
                    {param: "readOnly", desc: "只读", type: "boolean", default: "false"},
                    {param: "value", desc: "默认时间段", type: "string/moment", default: ""},
                    {param: "sep", desc: "分割符", type: "string", default: ""},
                    {param: "maxRange", desc: "最多能选择的天数", type: "number", default: ""},
                    {param: "startDate", desc: "限定开始时间", type: "string", default: ""},
                    {param: "endDate", desc: "限定结束时间", type: "string", default: ""},
                    {param: "onSelectStart", desc: "第一个日期选中时触发", type: "function", default: ""},
                    {param: "onSelectEnd", desc: "第二个日期选中时触发", type: "function", default: ""},
                    {param: "onSelect", desc: "选中时间段完成时触发", type: "function", default: ""},
                    {param: "onChange", desc: "选中时间段完成时触发", type: "function", default: ""},
                    {param: "clear", desc: "是否显示清除按钮", type: "boolean", default: "false"},
                    {param: "shortcuts", desc: "快捷选中,默认有：一周内、一个月内、三个月内、半年内、<br/>一年内、一周后、一个月后、三个月后、半年后、一年后", type: "array", default: ""},
                    {param: "startName", desc: "作为表单时第一个日期的name", type: "string", default: "startDate"},
                    {param: "endName", desc: "作为表单时第二个日期的name", type: "string", default: "endDate"},
                ]}></Table>

                <h3 className="page-h3">Methods</h3>

                <ul className="code-methods">
                    <li>
                        <i>getValue()</i>
                        <span>获取当前选中的日期</span>
                        <ul>
                            <li>
                                return {`String`} 选中的时间段
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>setValue(value)</i>
                        <span>设置默认时间段</span>
                        <ul>
                            <li>
                                value {`String`} 时间段
                            </li>
                        </ul>
                    </li>

                    <li>
                        <i>hide()</i>
                        <span>隐藏操作</span>
                    </li>

                    <li>
                        <i>show()</i>
                        <span>显示日期面板</span>
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = Page;