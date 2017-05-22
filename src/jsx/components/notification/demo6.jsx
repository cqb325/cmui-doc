const React = require("react");
const BaseDemo = require("../BaseDemo");
const Button = require("Button");
const notification = require("Notification");
const FontIcon = require("FontIcon");
const Code = require("../Code");
const Select = require("Select");

class Demo extends BaseDemo{
    openNotification(){
        let align = this.refs.align.getValue();
        notification.open({
            title: "Notification Title",
            desc: "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
            dock: align
        });
    }

    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <Select ref="align" data={["topRight","bottomRight","bottomLeft","topLeft"]} value="topRight"></Select>
                    <Button theme="primary" raised onClick={this.openNotification.bind(this)}>open the otification</Button>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">提示位置</div>
                    <div>
                        指定 dock 可以将通知框显示在不同的位置  支持 topRight、bottomRight、bottomLeft、topLeft，默认是 topRight。
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const Button = require("Button");
const notification = require("Notification");

openNotification(){
    let align = this.refs.align.getValue();
    notification.open({
        title: "Notification Title",
        desc: "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
        dock: align
    });
}

ReactDOM.render(
<div>
    <Select ref="align" data={["topRight","bottomRight","bottomLeft","topLeft"]} value="topRight"></Select>
    <Button theme="primary" raised onClick={this.openNotification.bind(this)}>open the otification</Button>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;
