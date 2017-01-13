const React = require("react");
const BaseDemo = require("../BaseDemo");
const FontIcon = require("FontIcon");
const Steps = require("Steps");
const Step = Steps.Step;
const Code = require("../Code");

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <Steps current={1} size="small">
                        <Step title="Finished" description="This is a description."></Step>
                        <Step title="In Progress" description="This is a description." />
                        <Step title="Waiting" description="This is a description." />
                    </Steps>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">迷你步骤条</div>
                    <div>
                        迷你版的步骤条，通过设置 { `<Steps size="small"> `} 启用.
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const Steps = require("Steps");
const Step = Steps.Step;

ReactDOM.render(
<div>
    <Steps current={1} size="small">
        <Step title="Finished" description="This is a description."></Step>
        <Step title="In Progress" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
    </Steps>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;