const React = require("react");
const BaseDemo = require("../BaseDemo");
const CheckBox = require("CheckBox");
const RadioGroup = require("RadioGroup");
const FontIcon = require("FontIcon");

class Demo extends BaseDemo{
    render(){
        let groupData = [
            {type: "0", name: "iPhone"},
            {type: "1", name: "Android"},
            {type: "2", name: "WinPhone"}
        ];
        return (
            <div>
                <div className="code-box-demo">
                    <RadioGroup data={groupData} stick={true} value="0" valueField="type" textField="name"></RadioGroup>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">样式</div>
                    <div>
                        可以设置 RadioGroup 的stick为true，将 RadioGroup 变为按钮组
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <pre className="brush: js" ref="code">
                        {`
const RadioGroup = require("RadioGroup");

let groupData = [
    {type: "0", name: "iPhone"},
    {type: "1", name: "Android"},
    {type: "2", name: "WinPhone"}
];

ReactDOM.render(
<div>
    <RadioGroup data={groupData} stick={true} value="0" valueField="type" textField="name"></RadioGroup>
</div>, mountNode);
`}
                    </pre>
                </div>
            </div>
        );
    }
}

module.exports = Demo;