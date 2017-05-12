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
                    <Badge dot={true}>
                        <FontIcon icon="book" size="3x"></FontIcon>
                    </Badge>

                    <Badge dot={false}>
                        <FontIcon icon="book" size="3x"></FontIcon>
                    </Badge>

                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">dot</div>
                    <div>
                        dot 为 true 只显示红点 false就不显示点
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const Badge = require("Badge");

ReactDOM.render(
<div>
    <Badge dot={true}>
        <FontIcon icon="book" size="3x"></FontIcon>
    </Badge>

    <Badge dot={false}>
        <FontIcon icon="book" size="3x"></FontIcon>
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