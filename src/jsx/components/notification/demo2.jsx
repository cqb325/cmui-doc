const React = require("react");
const BaseDemo = require("../BaseDemo");
const Button = require("Button");
const notification = require("Notification");
const FontIcon = require("FontIcon");
const Code = require("../Code");

class Demo extends BaseDemo{
    openNotification(){
        notification.open({
            title: "Notification Title",
            desc: "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
            duration: 0
        });
    }

    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <Button theme="primary" raised onClick={this.openNotification.bind(this)}>open default notification</Button>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">取消自动关闭</div>
                    <div>
                        取消自动关闭，只需设置duration的值为0即可， 默认为4.5s。
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const Button = require("Button");
const notification = require("Notification");

openNotification(){
    notification.open({
        title: "Notification Title",
        desc: "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
        duration: 0
    });
}

ReactDOM.render(
<div>
    <Button onClick={this.openNotification.bind(this)}>open default notification</Button>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;
