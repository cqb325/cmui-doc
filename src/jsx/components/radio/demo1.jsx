const React = require("react");
const BaseDemo = require("../BaseDemo");
const RadioGroup = require("RadioGroup");
const FontIcon = require("FontIcon");

class Demo extends BaseDemo{
    render(){
        let groupData = [
            {id: "0", text: "iPhone"},
            {id: "1", text: "Android"},
            {id: "2", text: "WinPhone"}
        ];

        return (
            <div>
                <div className="code-box-demo">
                    <RadioGroup data={groupData} value="0"></RadioGroup>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">基本用法</div>
                    <div>
                        简单的 radio
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <pre className="brush: js" ref="code">
                        {`
const RadioGroup = require("RadioGroup");

let groupData = [
    {id: "0", text: "iPhone"},
    {id: "1", text: "Android"},
    {id: "2", text: "WinPhone"}
];

ReactDOM.render(
<div>
    <RadioGroup data={groupData} value="0"></RadioGroup>
</div>, mountNode);
`}
                    </pre>
                </div>
            </div>
        );
    }
}

module.exports = Demo;