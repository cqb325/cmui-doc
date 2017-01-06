const React = require("react");
const Row = require("Row");
const Col = require("Col");
const Label = require("Label");
const Demo1 = require("../components/datetime/demo1");
const Demo2 = require("../components/datetime/demo2");
const Demo3 = require("../components/datetime/demo3");
const Demo4 = require("../components/datetime/demo4");
const Demo5 = require("../components/datetime/demo5");
const Demo6 = require("../components/datetime/demo6");
const Demo7 = require("../components/datetime/demo7");


let Page = React.createClass({

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">DateTime 时间选择器</h1>
                <blockquote className="page-tip">
                    选择日期和时间的控件。
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
            </div>
        );
    }
});

module.exports = Page;