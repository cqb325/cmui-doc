const React = require("react");
const Label = require("Label");
const Row = require("Row");
const Col = require("Col");
const Demo1 = require("../components/spin/demo1");
const Demo2 = require("../components/spin/demo2");
const Demo3 = require("../components/spin/demo3");
const Demo4 = require("../components/spin/demo4");


let Page = React.createClass({

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">Spin 加载中</h1>
                <blockquote className="page-tip">
                    用于页面和区块的加载中状态。<br/>
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
                            <Demo4></Demo4>
                        </Label>
                    </Col>
                </Row>
            </div>
        );
    }
});

module.exports = Page;