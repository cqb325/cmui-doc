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
                    <InputNumber className="mb-5" min={10} max={20} value={15.5} step={0.1} size="small" theme="primary"></InputNumber><br/>
                    <InputNumber className="mb-5" min={10} max={20} value={15.5} step={0.1} size="small" theme="success"></InputNumber><br/>
                    <InputNumber className="mb-5" min={10} max={20} value={15.5} step={0.1} size="small" theme="warning"></InputNumber><br/>
                    <InputNumber className="mb-5" min={10} max={20} value={15.5} step={0.1} size="small" theme="danger"></InputNumber><br/>
                    <InputNumber className="mb-5" min={10} max={20} value={15.5} step={0.1} size="small"></InputNumber><br/>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">theme</div>
                    <div>
                        theme支持 primary 、success、 warning、 danger
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const InputNumber = require("InputNumber");

ReactDOM.render(
<div>
    <InputNumber className="mb-5" min={10} max={20} value={15.5} step={0.1} size="small" theme="primary"></InputNumber><br/>
    <InputNumber className="mb-5" min={10} max={20} value={15.5} step={0.1} size="small" theme="success"></InputNumber><br/>
    <InputNumber className="mb-5" min={10} max={20} value={15.5} step={0.1} size="small" theme="warning"></InputNumber><br/>
    <InputNumber className="mb-5" min={10} max={20} value={15.5} step={0.1} size="small" theme="danger"></InputNumber><br/>
    <InputNumber className="mb-5" min={10} max={20} value={15.5} step={0.1} size="small"></InputNumber><br/>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;
