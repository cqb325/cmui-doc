const React = require("react");
const Row = require("Row");
const Col = require("Col");
const Label = require("Label");
const Demo1 = require("../components/breadcrumb/demo1");
const Demo2 = require("../components/breadcrumb/demo2");
const Demo3 = require("../components/breadcrumb/demo3");


let Page = React.createClass({

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">Breadcrumb 面包屑</h1>
                <blockquote className="page-tip">
                    显示当前页面在系统层级结构中的位置，并能向上返回。
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
                </Row>
            </div>
        );
    }
});

module.exports = Page;