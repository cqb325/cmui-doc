const React = require("react");
const BaseDemo = require("../BaseDemo");
const Button = require("Button");
const Affix = require("Affix");
const FontIcon = require("FontIcon");
const Code = require("../Code");

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <Affix>
                        <Button theme={"primary"}>Affix</Button>
                    </Affix>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">基本用法</div>
                    <div>
                        简单的Affix
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const Button = require("Button");
const Affix = require("Affix");

ReactDOM.render(
<div>
    <Affix>
        <Button theme={"primary"}>Affix</Button>
    </Affix>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;
