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
                    <div style={{height: 250, overflow: 'auto', position: 'relative'}} id="scroll-wrap">
                        <span>some text</span>
                        <Affix target="#scroll-wrap" style={{position: "absolute", right: 5}}>
                            <Button theme={"primary"}>Affix</Button>
                        </Affix>
                        <div style={{height: 600}}></div>
                    </div>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">target</div>
                    <div>
                        Affix可以限制target作为容器
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
    <div style={{height: 250, overflow: 'auto', position: 'relative'}} id="scroll-wrap">
        <span>some text</span>
        <Affix target="#scroll-wrap" style={{position: "absolute", right: 5}}>
            <Button theme={"primary"}>Affix</Button>
        </Affix>
        <div style={{height: 600}}></div>
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
