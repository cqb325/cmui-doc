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
                        <FormControl type="text" label="Input"/>
                        <FormControl type="select" label="Select" data={["Option1","Option2"]}/>
                        <FormControl type="datetime" label="DateTime" dateOnly={true}/>
                        <FormControl type="daterange" label="DateRange" maxRange={30}/>
                        <FormControl type="checkbox" label="checkbox" data={[{id: "0", text: "check1"},{id: "1", text: "check2"}]}/>
                        <FormControl type="radio" stick={true} label="Radio" data={[{id: "0", text: "radio1"},{id: "1", text: "radio2"}]}/>
                        <FormControl type="file" label="Upload"/>
                        <FormControl type="textarea" label="TextArea" height="50"/>
                    </Form>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">基本用法</div>
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
        <FormControl type="text" label="Input"/>
        <FormControl type="select" label="Select" data={["Option1","Option2"]}/>
        <FormControl type="datetime" label="DateTime" dateOnly={true}/>
        <FormControl type="daterange" label="DateRange" maxRange={30}/>
        <FormControl type="checkbox" label="checkbox" data={[{id: "0", text: "check1"},{id: "1", text: "check2"}]}/>
        <FormControl type="radio" stick={true} label="Radio" data={[{id: "0", text: "radio1"},{id: "1", text: "radio2"}]}/>
        <FormControl type="file" label="Upload"/>
        <FormControl type="textarea" label="TextArea" height="50"/>
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