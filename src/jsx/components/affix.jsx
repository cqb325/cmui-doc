const React = require("react");
const Label = require("Label");
const Demo1 = require("../components/affix/demo1");


let Page = React.createClass({

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">Affix 固钉</h1>
                <blockquote className="page-tip">
                    固钉。
                </blockquote>

                <h1 className="page-h1">代码演示</h1>

                <Label grid={0.5} className="code-col">
                    <Label className="code-box">
                        <Demo1></Demo1>
                    </Label>
                </Label>
            </div>
        );
    }
});

module.exports = Page;