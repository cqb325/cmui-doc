const React = require("react");
const BaseDemo = require("../BaseDemo");
const CheckBox = require("CheckBox");
const FontIcon = require("FontIcon");
const Code = require("../Code");

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <CheckBox value="0" label="Iphone"/>
                    <CheckBox value="1" label="Android"/>
                    <CheckBox value="2" label="WinPhone"/>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">基本用法</div>
                    <div>
                        简单的 checkbox
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const CheckBox = require("CheckBox");

ReactDOM.render(
<div>
    <CheckBox value="0" label="Iphone"/>
    <CheckBox value="1" label="Android"/>
    <CheckBox value="2" label="WinPhone"/>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;