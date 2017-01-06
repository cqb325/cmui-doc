const React = require("react");
const Label = require("Label");
const Demo1 = require("../components/input/demo1");


let Page = React.createClass({

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">Input 输入框</h1>
                <blockquote className="page-tip">
                    输入框。
                </blockquote>

                <h1 className="page-h1">代码演示</h1>

                <Label className="code-col">
                    <Label className="code-box">
                        <Demo1></Demo1>
                    </Label>
                </Label>

            </div>
        );
    }
});

module.exports = Page;