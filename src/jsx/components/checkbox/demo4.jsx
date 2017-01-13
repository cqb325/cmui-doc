const React = require("react");
const BaseDemo = require("../BaseDemo");
const CheckBox = require("CheckBox");
const CheckBoxGroup = require("CheckBoxGroup");
const FontIcon = require("FontIcon");
const Code = require("../Code");

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
                    <CheckBoxGroup data={groupData} value="0,1" layout="stack" valueField="type" textField="name"></CheckBoxGroup>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">CheckBox 组 堆积布局</div>
                    <div>
                        checkbox组堆积布局，设置CheckBoxGroup的layout为stack。
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const CheckBox = require("CheckBox");
const CheckBoxGroup = require("CheckBoxGroup");

let groupData = [
    {type: "0", name: "iPhone"},
    {type: "1", name: "Android"},
    {type: "2", name: "WinPhone"}
];

ReactDOM.render(
<div>
    <CheckBoxGroup data={groupData} value="0,1" layout="stack" valueField="type" textField="name"></CheckBoxGroup>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;