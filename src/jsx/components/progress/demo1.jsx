const React = require("react");
const BaseDemo = require("../BaseDemo");
const FontIcon = require("FontIcon");
const Progress = require("Progress");
const Code = require("../Code");

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <Progress value={30}></Progress>
                    <Progress value={50} active={true}></Progress>
                    <Progress value={70} status="exception"></Progress>
                    <Progress value={100}></Progress>
                    <Progress value={50} showPercent={false}></Progress>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">基本用法</div>
                    <div>
                        标准的进度条
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const Progress = require("Progress");

ReactDOM.render(
<div>
    <Progress value={30}></Progress>
    <Progress value={50} active={true}></Progress>
    <Progress value={70} status="exception"></Progress>
    <Progress value={100}></Progress>
    <Progress value={50} showPercent={false}></Progress>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;