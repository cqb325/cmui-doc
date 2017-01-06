const React = require("react");
const ReactDOM = require("react-dom");
const BaseDemo = require("../BaseDemo");
const DateTime = require("DateTime");
const FontIcon = require("FontIcon");
const moment = require("moment");

class Demo extends BaseDemo{
    render(){
        let start = moment();
        start.add("-1", "month");
        let end = moment();
        return (
            <div>
                <div className="code-box-demo">
                    <DateTime dateOnly={true} disabled={true} value="2017-01-01"></DateTime>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">禁用</div>
                    <div>
                        设置 disabled 可以禁用选择器。
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <pre className="brush: js" ref="code">
                        {`
const DateTime = require("DateTime");

ReactDOM.render(
<div>
    <DateTime dateOnly={true} disabled={true}></DateTime>
</div>, mountNode);
`}
                    </pre>
                </div>
            </div>
        );
    }
}

module.exports = Demo;