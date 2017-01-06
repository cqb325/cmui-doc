const React = require("react");
const BaseDemo = require("../BaseDemo");
const FontIcon = require("FontIcon");
const Switch = require("Switch");

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <Switch></Switch>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">基本用法</div>
                    <div>
                        简单用法
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <pre>
                        <code className="jsx" ref="code">
                        {`
const Switch = require("Switch");

ReactDOM.render(
<div>
    <Switch></Switch>
</div>, mountNode);
`}
                        </code>
                    </pre>
                </div>
            </div>
        );
    }
}

module.exports = Demo;