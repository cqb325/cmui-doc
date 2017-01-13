const React = require("react");
const BaseDemo = require("../BaseDemo");
const FontIcon = require("FontIcon");
const Switch = require("Switch");
const Code = require("../Code");

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <div>
                        <Switch checkedText="开" unCheckedText="关"></Switch>
                    </div>
                    <div className="mt-15">
                        <Switch checkedText="on" unCheckedText="off"></Switch>
                    </div>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">文字</div>
                    <div>
                        带有文字的Switch。
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const Switch = require("Switch");

ReactDOM.render(
<div>
    <div>
        <Switch checkedText="开" unCheckedText="关"></Switch>
    </div>
    <div className="mt-15">
        <Switch checkedText="on" unCheckedText="off"></Switch>
    </div>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;