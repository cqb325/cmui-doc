const React = require("react");
const Row = require("Row");
const Col = require("Col");
const Label = require("Label");
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
                <h3 className="page-h3">Input</h3>

                <table className="cm-table table-bordered">
                    <thead>
                        <tr>
                            <th>参数</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>theme</td>
                            <td>theme</td>
                            <td>string</td>
                            <td>default</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = Page;