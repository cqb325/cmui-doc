const React = require("react");
const Label = require("Label");
const Demo1 = require("../components/panel/demo1");
const Demo2 = require("../components/panel/demo2");


let Page = React.createClass({

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">Panel 面板</h1>
                <blockquote className="page-tip">
                    通用内容容器。<br/>
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
            </div>
        );
    }
});

module.exports = Page;