const React = require("react");
const Row = require("Row");
const Col = require("Col");
const Label = require("Label");
const Table = require("Table");
const Demo1 = require("../components/button/demo1");
const Demo2 = require("../components/button/demo2");
const Demo3 = require("../components/button/demo3");
const Demo4 = require("../components/button/demo4");
const Demo5 = require("../components/button/demo5");


let Page = React.createClass({

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">Button 按钮</h1>
                <blockquote className="page-tip">
                    按钮用于开始一个即时操作。响应用户点击行为，触发相应的业务逻辑。
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
                    </Col>
                    <Col grid={0.5} className="code-col">
                        <Label className="code-box">
                            <Demo2></Demo2>
                        </Label>
                        <Label className="code-box">
                            <Demo4></Demo4>
                        </Label>
                    </Col>
                </Row>

                <h2 className="page-h2">API</h2>
                <h3 className="page-h3">Button</h3>

                <Table columns={[
                    {name: "param", text: "参数"},
                    {name: "desc", text: "说明"},
                    {name: "type", text: "类型"},
                    {name: "default", text: "默认值"}
                ]} bordered={true} data={[
                    {param: "theme", desc: "主题default primary success warning danger", type: "string", default: "default"},
                    {param: "className", desc: "自定义class", type: "string", default: ""},
                    {param: "style", desc: "自定义样式", type: "object", default: ""},
                    {param: "disabled", desc: "禁用", type: "boolean", default: "false"},
                    {param: "raised", desc: "升起效果", type: "string/bool", default: "false"},
                    {param: "flat", desc: "无边框效果", type: "string/bool", default: "false"},
                    {param: "href", desc: "链接地址", type: "string", default: ""},
                    {param: "icon", desc: "按钮的图标", type: "string", default: ""},
                    {param: "iconAlign", desc: "图标位置 left right", type: "string", default: "left"},
                    {param: "size", desc: "按钮尺寸 large small", type: "string", default: ""},
                    {param: "target", desc: "跳转的目标通a标签的target", type: "string", default: ""},
                    {param: "onClick", desc: "点击后触发", type: "function", default: ""}
                ]}></Table>

                <h3 className="page-h3">Methods</h3>

                <ul className="code-methods">
                    <li>
                        <i>disable()</i>
                        <span>禁用</span>
                    </li>
                    <li>
                        <i>enable()</i>
                        <span>激活</span>
                    </li>
                    <li>
                        <i>setText(text)</i>
                        <span>设置按钮的文字</span>
                        <ul>
                            <li>
                                text {String} 要设置的按钮文字
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>getActive()</i>
                        <span>获取激活状态</span>
                        <ul>
                            <li>
                                return {`Boolean`} true 激活 其他为失活
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>setActive(active)</i>
                        <span>设置激活状态 在ButtonGroup中使用</span>
                        <ul>
                            <li>
                                active {`Boolean`} true激活 false 失活
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = Page;