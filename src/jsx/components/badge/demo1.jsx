const React = require("react");
const ReactDOM = require("react-dom");
const BaseDemo = require("../BaseDemo");
const Badge = require("Badge");
const FontIcon = require("FontIcon");
const Code = require("../Code");

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <Badge value="0">
                        <span className="rect-box"></span>
                    </Badge>
                    <Badge value="1">
                        <span className="rect-box"></span>
                    </Badge>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">基本</div>
                    <div>
                        简单实用
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const Badge = require("Badge");

ReactDOM.render(
<div>
    <Badge value="0">
        <span className="rect-box"></span>
    </Badge>
    <Badge value="1">
        <span className="rect-box"></span>
    </Badge>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;