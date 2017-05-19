const React = require("react");
const BaseDemo = require("../BaseDemo");
const Button = require("Button");
const InputNumber = require("InputNumber");
const FontIcon = require("FontIcon");
const Code = require("../Code");

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <InputNumber min={10} max={20} value={15.5} step={0.1}></InputNumber>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">step</div>
                    <div>
                        step为数字框的步长
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const InputNumber = require("InputNumber");

ReactDOM.render(
<div>
    <InputNumber min={10} max={20} value={15.5} step={0.1}></InputNumber>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;
