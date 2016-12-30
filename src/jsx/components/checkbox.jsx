const React = require("react");
const Label = require("Label");
const Demo1 = require("../components/checkbox/demo1");
const Demo2 = require("../components/checkbox/demo2");
const Demo3 = require("../components/checkbox/demo3");
const Demo4 = require("../components/checkbox/demo4");
const Demo5 = require("../components/checkbox/demo5");
const Demo6 = require("../components/checkbox/demo6");


let Page = React.createClass({

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">CheckBox 复选框</h1>
                <blockquote className="page-tip">
                    多选框。
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
                    <Label className="code-box">
                        <Demo6></Demo6>
                    </Label>
                </Label>
            </div>
        );
    }
});

module.exports = Page;