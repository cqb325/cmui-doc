const React = require("react");
const BaseDemo = require("../BaseDemo");
const Button = require("Button");
const notification = require("Notification");
const FontIcon = require("FontIcon");
const Code = require("../Code");

class Demo extends BaseDemo{

    closeNotification(key){
        notification.close(key);
    }

    onClose(){
        console.log("notification has closed!");
    }

    openNotification(){
        let key = new Date().getTime();
        notification.open({
            title: "Notification Title",
            desc: "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
            btn: <Button size="small" theme="primary" onClick={this.closeNotification.bind(this, key)}>confirm</Button>,
            key: key,
            onClose: this.onClose.bind(this)
        });
    }

    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <Button theme="primary" raised onClick={this.openNotification.bind(this)}>open notification</Button>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">自定义按钮</div>
                    <div>
                        可以在notification中添加一个自定义按钮。
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const Button = require("Button");
const notification = require("Notification");

closeNotification(key){
    notification.close(key);
}

onClose(){
    console.log("notification has closed!");
}

openNotification(){
    let key = new Date().getTime();
    notification.open({
        title: "Notification Title",
        desc: "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
        btn: <Button size="small" theme="primary" onClick={this.closeNotification.bind(this, key)}>confirm</Button>,
        key: key,
        onClose: this.onClose.bind(this)
    });
}


ReactDOM.render(
<div>
    <Button theme="primary" raised onClick={this.openNotification.bind(this)}>open notification</Button>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;
