const React = require("react");
const BaseDemo = require("../BaseDemo");
const FontIcon = require("FontIcon");
const Steps = require("Steps");
const Step = Steps.Step;

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <Steps current={1}>
                        <Step title="Finished" description="This is a description."></Step>
                        <Step title="In Progress" description="This is a description." />
                        <Step title="Waiting" description="This is a description." />
                    </Steps>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">基本用法</div>
                    <div>
                        简单用法
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <pre className="brush: js" ref="code">
                        {`
const Steps = require("Steps");
const Step = Steps.Step;

ReactDOM.render(
<div>
    <Steps current={1}>
        <Step title="Finished" description="This is a description."></Step>
        <Step title="In Progress" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
    </Steps>
</div>, mountNode);
`}
                    </pre>
                </div>
            </div>
        );
    }
}

module.exports = Demo;