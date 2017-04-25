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
                    <Form layout="stack" labelWidth="80" useDefaultSubmitBtn={false} tipAlign="top" tipTheme="primary">
                        <FormControl type="text" label="Input" required={true} name="input" messages={{required: "请输入input的内容"}}/>
                        <FormControl type="select" label="Select" required={true} data={["Option1","Option2"]} name="select"/>
                        <FormControl type="datetime" label="DateTime" required={true} dateOnly={true} name="datetime"/>
                    </Form>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">layout, tip theme and tip align</div>
                    <div>
                        stack的布局方式
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
    <Form layout="stack" labelWidth="80" useDefaultSubmitBtn={false} tipAlign="top" tipTheme="primary">
        <FormControl type="text" label="Input" required={true} name="input" messages={{required: "请输入input的内容"}}/>
        <FormControl type="select" label="Select" required={true} data={["Option1","Option2"]} name="select"/>
        <FormControl type="datetime" label="DateTime" required={true} dateOnly={true} name="datetime"/>
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