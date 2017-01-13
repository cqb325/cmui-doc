const React = require("react");
const BaseDemo = require("../BaseDemo");
const CheckBoxGroup = require("CheckBoxGroup");
const FontIcon = require("FontIcon");
const Code = require("../Code");

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <CheckBoxGroup url="../assets/modules/components/checkbox/data.json" value="0" valueField="type" textField="name"></CheckBoxGroup>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">从数据源生成</div>
                    <div>
                        checkbox组 可以通过获取数据源数据生成复选框组 。
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const CheckBoxGroup = require("CheckBoxGroup");

ReactDOM.render(
<div>
    <CheckBoxGroup url="data.json" value="0" valueField="type" textField="name"></CheckBoxGroup>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;