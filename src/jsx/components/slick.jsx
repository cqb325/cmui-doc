const React = require("react");
const Label = require("Label");
const Row = require("Row");
const Col = require("Col");
const Demo1 = require("../components/slick/demo1");
const Demo2 = require("../components/slick/demo2");
const Demo3 = require("../components/slick/demo3");
const Demo4 = require("../components/slick/demo4");
const Demo5 = require("../components/slick/demo5");



let Page = React.createClass({

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">Slick 幻灯片</h1>
                <blockquote className="page-tip">
                    一组轮播的区域。<br/>
                    用于一组图片或卡片轮播
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
            </div>
        );
    }
});

module.exports = Page;