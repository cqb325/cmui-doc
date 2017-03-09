const React = require("react");
const Label = require("Label");
const Row = require("Row");
const Col = require("Col");
const Demo1 = require("../components/progress/demo1");
const Demo2 = require("../components/progress/demo2");
const Demo3 = require("../components/progress/demo3");
const Demo4 = require("../components/progress/demo4");
const Demo5 = require("../components/progress/demo5");
const Demo6 = require("../components/progress/demo6");
const Demo7 = require("../components/progress/demo7");



let Page = React.createClass({

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">Progress 进度条</h1>
                <blockquote className="page-tip">
                    展示操作的当前进度。<br/>
                    在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态
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