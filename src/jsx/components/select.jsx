const React = require("react");
const Row = require("Row");
const Col = require("Col");
const Label = require("Label");
const Demo1 = require("../components/select/demo1");
const Demo2 = require("../components/select/demo2");
const Demo3 = require("../components/select/demo3");
const Demo4 = require("../components/select/demo4");


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
                    </Col>

                    <Col grid={1} className="code-col">
                        <Label className="code-box">
                            <Demo4></Demo4>
                        </Label>
                    </Col>
                </Row>
            </div>
        );
    }
});

module.exports = Page;