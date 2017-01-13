const React = require("react");
const ReactDOM = require("react-dom");
const BaseDemo = require("../BaseDemo");
const DateTime = require("DateTime");
const FontIcon = require("FontIcon");
const moment = require("moment");
const Code = require("../Code");

class Demo extends BaseDemo{
    render(){
        let start = moment();
        start.add("-1", "month");
        let end = moment();
        return (
            <div>
                <div className="code-box-demo">
                    <DateTime dateOnly={true} startDate={start.format("YYYY-MM-DD")} endDate={end}></DateTime>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">限制选择</div>
                    <div>
                        设置 startDate 可以限制可选的开始日期， endDate 可以限制可选的结束日期。
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const DateTime = require("DateTime");

ReactDOM.render(
<div>
    <DateTime dateOnly={true} startDate={start.format("YYYY-MM-DD")} endDate={end}></DateTime>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;