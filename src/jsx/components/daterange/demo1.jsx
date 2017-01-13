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
                    <DateRange></DateRange>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">基本</div>
                    <div>
                        最简单的用法。
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const DateTime = require("DateTime");

ReactDOM.render(
<div>
    <DateRange></DateRange>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;