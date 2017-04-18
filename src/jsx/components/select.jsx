const React = require("react");
const Row = require("Row");
const Col = require("Col");
const Label = require("Label");
const Table = require("Table");
const Demo1 = require("../components/select/demo1");
const Demo2 = require("../components/select/demo2");
const Demo3 = require("../components/select/demo3");
const Demo4 = require("../components/select/demo4");
const Demo5 = require("../components/select/demo5");


let Page = React.createClass({

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">Select 选择器</h1>
                <blockquote className="page-tip">
                    弹出一个下拉菜单给用户选择操作，用于代替原生的选择器。<br/>
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
                    </Col>
                    <Col grid={0.5} className="code-col">
                        <Label className="code-box">
                            <Demo2></Demo2>
                        </Label>
                        <Label className="code-box">
                            <Demo5></Demo5>
                        </Label>
                    </Col>

                    <Col grid={1} className="code-col">
                        <Label className="code-box">
                            <Demo4></Demo4>
                        </Label>
                    </Col>
                </Row>

                <h2 className="page-h2">API</h2>
                <h3 className="page-h3">Select</h3>

                <Table columns={[
                    {name: "param", text: "参数"},
                    {name: "desc", text: "说明"},
                    {name: "type", text: "类型"},
                    {name: "default", text: "默认值"}
                ]} bordered={true} data={[
                    {param: "className", desc: "自定义class", type: "string", default: ""},
                    {param: "style", desc: "自定义样式", type: "object", default: ""},
                    {param: "valueField", desc: "value取值字段", type: "string", default: "id"},
                    {param: "textField", desc: "text取值字段", type: "string", default: "text"},
                    {param: "sep", desc: "分隔符", type: "string", default: ","},
                    {param: "value", desc: "默认值", type: "string", default: ""},
                    {param: "data", desc: "select的初始数据", type: "array", default: ""},
                    {param: "placeholder", desc: "未选择的placeholder", type: "string", default: ""},
                    {param: "optionsTpl", desc: "选择后的显示的模板", type: "string", default: ""},
                    {param: "name", desc: "作为form表单元素的name", type: "string", default: ""},
                    {param: "multi", desc: "是否多选", type: "boolean", default: "false"},
                    {param: "onChange", desc: "选择后值改变回调", type: "function", default: ""},
                    {param: "hasEmptyOption", desc: "Select是否存在空选项 单选时有效", type: "boolean", default: "false"},
                    {param: "choiceText", desc: "Select空选项的显示文字 单选时有效", type: "string", default: "--请选择--"},
                    {param: "url", desc: "数据源地址，指定会自动获取数据并展示数据", type: "string", default: ""}
                ]}></Table>


                <h3 className="page-h3">Methods</h3>

                <ul className="code-methods">
                    <li>
                        <i>getValue()</i>
                        <span>获取当前值</span>
                        <ul>
                            <li>
                                return {`String`} 选中的值，多选的话值用sep指定的符号分割
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>setValue(value)</i>
                        <span>设置Select的值</span>
                        <ul>
                            <li>
                                value {`String`} 值，多选的话值用sep指定的符号分割
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>setData(data)</i>
                        <span>设置Select的初始数据</span>
                        <ul>
                            <li>
                                data {`Array`} Select的初始选项数据
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>disable()</i>
                        <span>禁用</span>
                    </li>
                    <li>
                        <i>enable()</i>
                        <span>启用</span>
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = Page;