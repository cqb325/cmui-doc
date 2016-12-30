const React = require("react");
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

                <Label grid={0.5} className="code-col">
                    <Label className="code-box">
                        <Demo1></Demo1>
                    </Label>
                    <Label className="code-box">
                        <Demo3></Demo3>
                    </Label>
                    <Label className="code-box">
                        <Demo5></Demo5>
                    </Label>
                </Label>
                <Label grid={0.5} className="code-col">
                    <Label className="code-box">
                        <Demo2></Demo2>
                    </Label>
                    <Label className="code-box">
                        <Demo4></Demo4>
                    </Label>
                </Label>
            </div>
        );
    }
});

module.exports = Page;