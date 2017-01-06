const React = require("react");
const ReactDOM = require("react-dom");
const BaseDemo = require("../BaseDemo");
const DateRange = require("DateRange");
const FontIcon = require("FontIcon");
const moment = require("moment");

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <DateRange value="2017-01-01~2017-01-15" disabled={true}></DateRange>
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
    <DateRange value="2017-01-01~2017-01-15" disabled={true}></DateRange>
</div>, mountNode);
`}
                    </pre>
                </div>
            </div>
        );
    }
}

module.exports = Demo;