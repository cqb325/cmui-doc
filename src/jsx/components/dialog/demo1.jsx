const React = require("react");
const BaseDemo = require("../BaseDemo");
const FontIcon = require("FontIcon");
const Dialog = require("Dialog");
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
                    <Dialog ref="dialog" title="提示">
                        <p>dialog content</p>
                        <p>dialog content</p>
                        <p>dialog content</p>
                    </Dialog>

                    <Button onClick={this.openDialog.bind(this)}>click to open dialog</Button>
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
const Dialog = require("Dialog");

ReactDOM.render(
<div>
    <Dialog ref="dialog" title="提示">
        <p>dialog content</p>
        <p>dialog content</p>
        <p>dialog content</p>
    </Dialog>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;