const React = require("react");
const BaseDemo = require("../BaseDemo");
const FontIcon = require("FontIcon");
const Uploadify = require("Uploadify");
const Code = require("../Code");

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <Uploadify mode="grid" url="http://192.168.105.202:8415/mock/test/uploadify/upload" auto={true}></Uploadify>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">grid模式</div>
                    <div>
                        设置grid参数 以格子模式显示
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const Uploadify = require("Uploadify");

ReactDOM.render(
<div>
    <Uploadify mode="grid" url="http://192.168.105.202:8415/mock/test/uploadify/upload" auto={true}></Uploadify>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;