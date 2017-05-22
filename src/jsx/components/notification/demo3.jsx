const React = require("react");
const BaseDemo = require("../BaseDemo");
const Button = require("Button");
const notification = require("Notification");
const FontIcon = require("FontIcon");
const Code = require("../Code");

class Demo extends BaseDemo{
    openNotification(type){
        notification[type]({
            title: "Notification Title",
            desc: "This is the content of the notification. This is the content of the notification. This is the content of the notification."
        });
    }

    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <Button raised onClick={this.openNotification.bind(this, "success")}>Success</Button>
                    <Button className="ml-5" raised onClick={this.openNotification.bind(this, "info")}>Info</Button>
                    <Button className="ml-5" raised onClick={this.openNotification.bind(this, "warning")}>Warning</Button>
                    <Button className="ml-5" raised onClick={this.openNotification.bind(this, "error")}>Error</Button>
                    <Button className="ml-5" raised onClick={this.openNotification.bind(this, "question")}>Question</Button>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">通知类型</div>
                    <div>
                        带有图标的通知提醒框，success、info、warning、error和question
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const Button = require("Button");
const notification = require("Notification");

openNotification(type){
    notification[type]({
        title: "Notification Title",
        desc: "This is the content of the notification. This is the content of the notification. This is the content of the notification."
    });
}

ReactDOM.render(
<div>
    <Button raised onClick={this.openNotification.bind(this, "success")}>Success</Button>
    <Button className="ml-5" raised onClick={this.openNotification.bind(this, "info")}>Info</Button>
    <Button className="ml-5" raised onClick={this.openNotification.bind(this, "warning")}>Warning</Button>
    <Button className="ml-5" raised onClick={this.openNotification.bind(this, "error")}>Error</Button>
    <Button className="ml-5" raised onClick={this.openNotification.bind(this, "question")}>Question</Button>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;
