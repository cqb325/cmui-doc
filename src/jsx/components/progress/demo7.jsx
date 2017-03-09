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
                    <Progress value={75} type="circle" className="mr-20" format={(percent, value, min, max)=>{return percent+"DAYS"}}></Progress>
                    <Progress value={100} type="circle" className="mr-20" format={(percent, value, min, max)=>{return "DONE"}}></Progress>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">自定义显示</div>
                    <div>
                        使用format自定义显示
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const Progress = require("Progress");

ReactDOM.render(
<div>
    <Progress value={75} type="circle" className="mr-20" format={(percent, value, min, max)=>{return percent+"DAYS"}}></Progress>
    <Progress value={100} type="circle" className="mr-20" format={(percent, value, min, max)=>{return "DONE"}}></Progress>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;