const React = require("react");
const BaseDemo = require("../BaseDemo");
const FontIcon = require("FontIcon");
const Form = require("Form");
const FormControl = require("FormControl");
const Input = require("Input");
const Select = require("Select");
const TextArea = require("TextArea");
const RadioGroup = require("RadioGroup");
const CheckBoxGroup = require("CheckBoxGroup");
const DateTime = require("DateTime");
const DateRange = require("DateRange");
const Upload = require("Upload");
const Code = require("../Code");
const Button = require("Button");

class Demo extends BaseDemo{

    openDialog(){
        this.refs.dialog.open();
    }

    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <Form layout="stack-inline" labelWidth="80">
                        <FormControl type="text" label="Input" required={true} name="input" messages={{required: "请输入input的内容"}}/>
                        <FormControl type="select" label="Select" required={true} data={["Option1","Option2"]} name="select"/>
                        <FormControl type="datetime" label="DateTime" required={true} dateOnly={true} name="datetime"/>
                        <FormControl type="daterange" label="DateRange" required={true} maxRange={30} name="daterange"/>
                        <FormControl type="checkbox" label="checkbox" required={true} data={[{id: "0", text: "check1"},{id: "1", text: "check2"}]} name="checkbox"/>
                        <FormControl type="radio" stick={true} label="Radio" required={true} data={[{id: "0", text: "radio1"},{id: "1", text: "radio2"}]} name="radio"/>
                        <FormControl type="file" label="Upload" required={true} name="file"/>
                        <FormControl type="textarea" label="TextArea" height="50" autoHeight={true} required={true} name="textarea"/>
                    </Form>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">验证</div>
                    <div>
                        简单用法
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const Form = require("Form");
const FormControl = require("FormControl");
const Input = require("Input");
const Select = require("Select");
const TextArea = require("TextArea");
const RadioGroup = require("RadioGroup");
const CheckBoxGroup = require("CheckBoxGroup");
const DateTime = require("DateTime");
const DateRange = require("DateRange");
const Upload = require("Upload");

ReactDOM.render(
<div>
    <Form layout="stack-inline" labelWidth="80">
        <FormControl type="text" label="Input" required={true} name="input" messages={{required: "请输入input的内容"}}/>
        <FormControl type="select" label="Select" required={true} data={["Option1","Option2"]} name="select"/>
        <FormControl type="datetime" label="DateTime" required={true} dateOnly={true} name="datetime"/>
        <FormControl type="daterange" label="DateRange" required={true} maxRange={30} name="daterange"/>
        <FormControl type="checkbox" label="checkbox" required={true} data={[{id: "0", text: "check1"},{id: "1", text: "check2"}]} name="checkbox"/>
        <FormControl type="radio" stick={true} label="Radio" required={true} data={[{id: "0", text: "radio1"},{id: "1", text: "radio2"}]} name="radio"/>
        <FormControl type="file" label="Upload" required={true} name="file"/>
        <FormControl type="textarea" label="TextArea" height="50" autoHeight={true} required={true} name="textarea"/>
    </Form>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;