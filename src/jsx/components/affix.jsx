const React = require("react");
const Label = require("Label");
const Row = require("Row");
const Col = require("Col");
const Table = require("Table");
const Demo1 = require("../components/affix/demo1");
const Demo2 = require("../components/affix/demo2");


let Page = React.createClass({

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">Affix 固钉</h1>
                <blockquote className="page-tip">
                    固钉。
                </blockquote>

                <h1 className="page-h1">代码演示</h1>

                <Row>
                    <Col grid={0.5}>
                        <Label className="code-col">
                            <Label className="code-box">
                                <Demo1></Demo1>
                            </Label>
                        </Label>
                    </Col>
                    <Col grid={0.5}>
                        <Label className="code-col">
                            <Label className="code-box">
                                <Demo2></Demo2>
                            </Label>
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
                    {param: "className", desc: "自定义class", type: "string", default: ""},
                    {param: "style", desc: "自定义样式", type: "object", default: ""},
                    {param: "target", desc: "容器选择器", type: "string", default: ""},
                ]}></Table>

            </div>
        );
    }
});

module.exports = Page;
