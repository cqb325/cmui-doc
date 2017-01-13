const React = require("react");
const ReactDOM = require("react-dom");
const BaseDemo = require("../BaseDemo");
const DateRange = require("DateRange");
const FontIcon = require("FontIcon");
const Code = require("../Code");

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <DateRange value="2017-01-01至2017-01-15" sep="至" shortcuts={["一周内","一个月内","三个月内","半年内","一个月后","半年后"]}></DateRange>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">快捷选择</div>
                    <div>
                        设置 shortcuts 可以设置快捷选择。
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const DateTime = require("DateTime");

ReactDOM.render(
<div>
    <DateRange value="2017-01-01至2017-01-15" sep="至"></DateRange>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;