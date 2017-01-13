const React = require("react");
const ReactDOM = require("react-dom");
const BaseDemo = require("../BaseDemo");
const DateRange = require("DateRange");
const FontIcon = require("FontIcon");
const moment = require("moment");
const Code = require("../Code");

class Demo extends BaseDemo{
    render(){
        let end = moment();
        end.add(15, "days");
        let start = moment();
        start.add(-2, "month");
        return (
            <div>
                <div className="code-box-demo">
                    <DateRange maxRange={7}></DateRange>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">限制选择</div>
                    <div>
                        设置 maxRange 可以限制最大选择天数。
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const DateTime = require("DateTime");

ReactDOM.render(
<div>
    <DateRange maxRange={7}></DateRange>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;