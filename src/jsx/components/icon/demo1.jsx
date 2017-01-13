const React = require("react");
const BaseDemo = require("../BaseDemo");
const FontIcon = require("FontIcon");
const Code = require("../Code");

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <FontIcon icon={"flag"} style={{color: "#20A0FF"}}> flag icon </FontIcon>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">基本用法</div>
                    <div>
                        设置FontIcon的icon属性即可显示一个对应样式的图标
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const FontIcon = require("FontIcon");

ReactDOM.render(
<div>
    <FontIcon icon={"flag"} style={{color: "#20A0FF"}}> flag icon </FontIcon>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;