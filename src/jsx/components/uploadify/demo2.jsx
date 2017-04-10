const React = require("react");
const BaseDemo = require("../BaseDemo");
const FontIcon = require("FontIcon");
const Uploadify = require("Uploadify");
const Code = require("../Code");
// const Mock = require("mock");
//
// Mock.mock(/uploadify\/upload/, {
//     "OK": 1
// });

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <Uploadify url="http://192.168.105.202:8415/mock/test/uploadify/upload" auto={true} thumbnail={true}></Uploadify>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">显示缩略图</div>
                    <div>
                        设置thumbnail参数显示缩略图
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const Uploadify = require("Uploadify");

ReactDOM.render(
<div>
    <Uploadify url="http://192.168.105.202:8415/mock/test/uploadify/upload" auto={true} thumbnail={true}></Uploadify>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;