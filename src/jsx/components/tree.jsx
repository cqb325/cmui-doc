const React = require("react");
const Label = require("Label");
const Demo1 = require("../components/tree/demo1");


let Page = React.createClass({

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">Tree 选择器</h1>
                <blockquote className="page-tip">
                    弹出一个下拉菜单给用户选择操作，用于代替原生的选择器。<br/>
                </blockquote>

                <h1 className="page-h1">代码演示</h1>

                <Label className="code-col">
                    <Label grid={0.5} className="code-box">
                        <Demo1></Demo1>
                    </Label>
                </Label>
            </div>
        );
    }
});

module.exports = Page;