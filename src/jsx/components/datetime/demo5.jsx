const React = require("react");
const ReactDOM = require("react-dom");
const BaseDemo = require("../BaseDemo");
const DateTime = require("DateTime");
const FontIcon = require("FontIcon");

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <DateTime monthOnly={true}></DateTime>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">月份</div>
                    <div>
                        设置 monthOnly 为 true 只能选择月份。
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <pre className="brush: js" ref="code">
                        {`
const DateTime = require("DateTime");

ReactDOM.render(
<div>
    <DateTime monthOnly={true}></DateTime>
</div>, mountNode);
`}
                    </pre>
                </div>
            </div>
        );
    }
}

module.exports = Demo;