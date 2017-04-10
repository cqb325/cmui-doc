const React = require("react");
const Label = require("Label");
const Row = require("Row");
const Col = require("Col");
const Demo1 = require("../components/uploadify/demo1");
const Demo2 = require("../components/uploadify/demo2");
const Demo3 = require("../components/uploadify/demo3");
const Demo4 = require("../components/uploadify/demo4");


let Page = React.createClass({

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">多上传文件</h1>
                <blockquote className="page-tip">
                    文件选择上传控件，展现上传的进度<br/>
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