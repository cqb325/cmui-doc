const React = require("react");
const Label = require("Label");
const Demo1 = require("../components/switch/demo1");
const Demo2 = require("../components/switch/demo2");
const Demo3 = require("../components/switch/demo3");
const Demo4 = require("../components/switch/demo4");
const Demo5 = require("../components/switch/demo5");


let Page = React.createClass({

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">Switch 开关</h1>
                <blockquote className="page-tip">
                    开关选择器。<br/>
                    需要表示开关状态/两种状态之间的切换时使用。
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