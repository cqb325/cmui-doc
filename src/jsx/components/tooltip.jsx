const React = require("react");
const Label = require("Label");
const Demo1 = require("../components/tooltip/demo1");
const Demo2 = require("../components/tooltip/demo2");
const Demo3 = require("../components/tooltip/demo3");
const Demo4 = require("../components/tooltip/demo4");


let Page = React.createClass({

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">Tooltip 文字提示</h1>
                <blockquote className="page-tip">
                    简单的文字提示气泡框。<br/>
                    鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。
                </blockquote>

                <h1 className="page-h1">代码演示</h1>

                <Label grid={0.5} className="code-col">
                    <Label className="code-box">
                        <Demo1></Demo1>
                    </Label>
                    <Label className="code-box">
                        <Demo3></Demo3>
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