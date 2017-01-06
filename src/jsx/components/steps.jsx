const React = require("react");
const Label = require("Label");
const Demo1 = require("../components/steps/demo1");
const Demo2 = require("../components/steps/demo2");
const Demo3 = require("../components/steps/demo3");
const Demo4 = require("../components/steps/demo4");
const Demo5 = require("../components/steps/demo5");


let Page = React.createClass({

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">Steps 步骤条</h1>
                <blockquote className="page-tip">
                    引导用户按照流程完成任务的导航条。<br/>
                    当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。
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

            </div>
        );
    }
});

module.exports = Page;