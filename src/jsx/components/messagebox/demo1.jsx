const React = require("react");
const BaseDemo = require("../BaseDemo");
const FontIcon = require("FontIcon");
const Button = require("Button");
const MessageBox = require("MessageBox");
const Code = require("../Code");

class Demo extends BaseDemo{

    show(){
        this.refs.msg.show("Message Content");
    }

    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <MessageBox title="提示" ref="msg" confirmTheme="primary"></MessageBox>
                    <Button onClick={this.show.bind(this)}>Show</Button>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">简单用法</div>
                    <div>
                        简单用法。
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const MessageBox = require("MessageBox");
const Button = require("Button");

React.createClass({
    show(){
        this.refs.msg.show("Message Content");
    }

    render(){
        return <div>
            <MessageBox title="提示" ref="msg" confirmTheme="primary"></MessageBox>
            <Button onClick={show}>Show</Button>
        </div>
    }
});
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;