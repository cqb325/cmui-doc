const React = require("react");
const ReactDOM = require("react-dom");
const BaseDemo = require("../BaseDemo");
const FontIcon = require("FontIcon");
const Dialog = require("Dialog");
const Code = require("../Code");
const Button = require("Button");

class Demo extends BaseDemo{

    openDialog(){
        let ele = ReactDOM.findDOMNode(this.refs.button);
        this.refs.dialog.open(ele);
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

                    <Button ref="button" theme="primary" onClick={this.openDialog.bind(this)}>open dialog</Button>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">特效</div>
                    <div>
                        从某一个元素位置开始弹出
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

    <Button ref="button" onClick={this.openDialog.bind(this)}>click to open dialog</Button>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;