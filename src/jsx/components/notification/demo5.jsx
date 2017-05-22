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
            icon: <FontIcon icon="coffee"></FontIcon>
        });
    }

    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <Button theme="primary" raised onClick={this.openNotification.bind(this)}>open the otification</Button>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">自定义图标</div>
                    <div>
                        指定icon可以自定义消息图标。
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
        icon: <FontIcon icon="coffee"></FontIcon>
    });
}

ReactDOM.render(
<div>
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
