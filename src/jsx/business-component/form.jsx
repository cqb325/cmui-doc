const React = require("react");
const Label = require("Label");
const Row = require("Row");
const Col = require("Col");
const Demo1 = require("../business-component/form/demo1");


let Page = React.createClass({

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">表单</h1>
                <blockquote className="page-tip">
                    简单的表单通过配置展现。<br/>
                </blockquote>

                <h1 className="page-h1">代码演示</h1>

                <Row>
                    <Col grid={1} className="code-col">
                        <Label className="code-box">
                            <Demo1></Demo1>
                        </Label>
                    </Col>
                </Row>
            </div>
        );
    }
});

module.exports = Page;