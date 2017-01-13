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
                    <Affix target=".desktop-wrap">
                        <Button theme={"primary"}>Affix</Button>
                    </Affix>
                    <div>temp</div>
                    <div style={{height: "1000px"}}></div>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">基本用法</div>
                    <div>
                        简单的Affix 设置target作为固钉的容器
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
    <Affix target=".desktop-wrap">
        <Button theme={"primary"}>Affix</Button>
    </Affix>
    <div>temp</div>
    <div style={{height: "1000px"}}></div>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;