const React = require("react");
const BaseDemo = require("../BaseDemo");
const FontIcon = require("FontIcon");
const Button = require("Button");
const Panel = require("Panel");
const Code = require("../Code");

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <Panel title="Panel Title">
                        <p>Panel content</p>
                        <p>Panel content</p>
                        <p>Panel content</p>
                    </Panel>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">没有footer</div>
                    <div>
                        不设置footers属性，将不显示footer。
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const Panel = require("Panel");
const FontIcon = require("FontIcon");

ReactDOM.render(
<Panel title="Panel Title">
    <p>Panel content</p>
    <p>Panel content</p>
    <p>Panel content</p>
</Panel>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;