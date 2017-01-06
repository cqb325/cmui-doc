const React = require("react");
const BaseDemo = require("../BaseDemo");
const FontIcon = require("FontIcon");
const Switch = require("Switch");

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <div>
                        <Switch checked={true}></Switch>
                    </div>
                    <div className="mt-15">
                        <Switch size="small"></Switch>
                    </div>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">大小</div>
                    <div>
                        设置size为small可以设置小switch。
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <pre className="brush: js" ref="code">
                        {`
const Switch = require("Switch");

ReactDOM.render(
<div>
    <div>
        <Switch checked={true}></Switch>
    </div>
    <div className="mt-15">
        <Switch size="small"></Switch>
    </div>
</div>, mountNode);
`}
                    </pre>
                </div>
            </div>
        );
    }
}

module.exports = Demo;