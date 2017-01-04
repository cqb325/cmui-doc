const React = require("react");
const Label = require("Label");
const Demo1 = require("../components/grid/demo1");
const Demo2 = require("../components/grid/demo2");
const Demo3 = require("../components/grid/demo3");


let Page = React.createClass({

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">Grid 栅格</h1>
                <blockquote className="page-tip">
                    无极栅格。
                </blockquote>

                <h1 className="page-h1">代码演示</h1>

                <Label grid={1} className="code-col">
                    <Label className="code-box">
                        <Demo1></Demo1>
                    </Label>
                </Label>

                <Label grid={1} className="code-col">
                    <Label className="code-box">
                        <Demo2></Demo2>
                    </Label>
                </Label>

                <Label grid={1} className="code-col">
                    <Label className="code-box">
                        <Demo3></Demo3>
                    </Label>
                </Label>
            </div>
        );
    }
});

module.exports = Page;