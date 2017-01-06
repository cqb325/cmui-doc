const React = require("react");
const BaseDemo = require("../BaseDemo");
const FontIcon = require("FontIcon");
const Switch = require("Switch");

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <Switch checked={true}></Switch>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">默认选中</div>
                    <div>
                        默认选中可以设置checked为true
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <pre className="brush: js" ref="code">
                        {`
const Switch = require("Switch");

ReactDOM.render(
<div>
    <Switch checked={true}></Switch>
</div>, mountNode);
`}
                    </pre>
                </div>
            </div>
        );
    }
}

module.exports = Demo;