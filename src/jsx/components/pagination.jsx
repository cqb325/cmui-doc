const React = require("react");
const Label = require("Label");
const Demo1 = require("../components/pagination/demo1");
const Demo2 = require("../components/pagination/demo2");
const Demo3 = require("../components/pagination/demo3");
const Demo4 = require("../components/pagination/demo4");


let Page = React.createClass({

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">Pagination 分页</h1>
                <blockquote className="page-tip">
                    分页显示数据或者内容时使用。
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
            </div>
        );
    }
});

module.exports = Page;