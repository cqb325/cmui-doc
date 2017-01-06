const React = require("react");
const ReactDOM = require("react-dom");
const BaseDemo = require("../BaseDemo");
const DateRange = require("DateRange");
const FontIcon = require("FontIcon");
const moment = require("moment");

class Demo extends BaseDemo{
    render(){
        let end = moment();
        end.add(15, "days");
        let start = moment();
        start.add(-2, "month");
        return (
            <div>
                <div className="code-box-demo">
                    <DateRange endDate={end} startDate={start}></DateRange>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">限制选择</div>
                    <div>
                        设置 startDate 可以限制可选的开始日期， endDate 可以限制可选的结束日期。。
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <pre className="brush: js" ref="code">
                        {`
const DateTime = require("DateTime");
const moment = require("moment");

let end = moment();
end.add(15, "days");
let start = moment();
start.add(-2, "month");

ReactDOM.render(
<div>
    <DateRange endDate={end} startDate={start}></DateRange>
</div>, mountNode);
`}
                    </pre>
                </div>
            </div>
        );
    }
}

module.exports = Demo;