const React = require("react");
const Label = require("Label");
const Demo1 = require("../components/card/demo1");
const Demo2 = require("../components/card/demo2");
const Demo3 = require("../components/card/demo3");
const Demo4 = require("../components/card/demo4");
const Demo5 = require("../components/card/demo5");
const Demo6 = require("../components/card/demo6");


let Page = React.createClass({

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">Card 卡片</h1>
                <blockquote className="page-tip">
                    通用卡片容器。<br/>
                    最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。
                </blockquote>

                <h1 className="page-h1">代码演示</h1>

                <Label className="code-col">
                    <Label className="code-box">
                        <Demo1></Demo1>
                    </Label>
                </Label>

                <Label className="code-col">
                    <Label className="code-box">
                        <Demo2></Demo2>
                    </Label>
                </Label>

                <Label className="code-col">
                    <Label className="code-box">
                        <Demo3></Demo3>
                    </Label>
                </Label>

                <Label className="code-col">
                    <Label className="code-box">
                        <Demo4></Demo4>
                    </Label>
                </Label>

                <Label className="code-col">
                    <Label className="code-box">
                        <Demo5></Demo5>
                    </Label>
                </Label>

                <Label className="code-col">
                    <Label className="code-box">
                        <Demo6></Demo6>
                    </Label>
                </Label>
            </div>
        );
    }
});

module.exports = Page;