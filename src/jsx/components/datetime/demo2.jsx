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
                    <DateTime theme="black" value="2017-01-01"></DateTime>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">主题</div>
                    <div>
                        设置DateTime的theme属性可以设置样式主题。支持的主题是black,不设置默认为白色。
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <pre className="brush: js" ref="code">
                        {`
const DateTime = require("DateTime");

ReactDOM.render(
<div>
    <DateTime theme="black"></DateTime>
</div>, mountNode);
`}
                    </pre>
                </div>
            </div>
        );
    }
}

module.exports = Demo;