const React = require("react");
const Row = require("Row");
const Col = require("Col");
const Label = require("Label");
const Table = require("Table");
const Demo1 = require("../components/badge/demo1");
const Demo2 = require("../components/badge/demo2");
const Demo3 = require("../components/badge/demo3");
const Demo4 = require("../components/badge/demo4");
const Demo5 = require("../components/badge/demo5");


let Page = React.createClass({

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">Badge 徽标</h1>
                <blockquote className="page-tip">
                    图标右上角的圆形徽标数字。
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
                    {param: "value", desc: "数量", type: "number/string", default: ""},
                    {param: "status", desc: "状态", type: "string", default: ""},
                    {param: "dot", desc: "是否显示红点", type: "string/bool", default: ""}
                ]}></Table>

                <h3 className="page-h3">Methods</h3>

                <ul className="code-methods">
                    <li>
                        <i>addCount(num)</i>
                        <span>添加num数量</span>
                        <ul>
                            <li>
                                num {`Number`} 要添加的数量
                            </li>
                        </ul>
                    </li>

                </ul>
            </div>
        );
    }
});

module.exports = Page;