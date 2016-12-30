const React = require("react");
const Label = require("Label");
const Demo1 = require("../components/icon/demo1");
const Demo2 = require("../components/icon/demo2");
const Demo3 = require("../components/icon/demo3");


let Page = React.createClass({

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">FontIcon 字体图标</h1>
                <blockquote className="page-tip">
                    语义化的矢量图形。
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
                </Label>

            </div>
        );
    }
});

module.exports = Page;