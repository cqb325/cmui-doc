const React = require("react");
const BaseDemo = require("../BaseDemo");
const RadioGroup = require("RadioGroup");
const FontIcon = require("FontIcon");
const Code = require("../Code");

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <RadioGroup url="../assets/modules/components/radio/data.json" value="1" valueField="type" textField="name"></RadioGroup>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">从数据源生成</div>
                    <div>
                        RadioGroup 可以通过获取数据源数据生成单选框组 。
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const RadioGroup = require("RadioGroup");

ReactDOM.render(
<div>
    <RadioGroup url="data.json" value="1" valueField="type" textField="name"></RadioGroup>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;