const React = require("react");
const BaseDemo = require("../BaseDemo");
const Button = require("Button");
const ButtonGroup = require("ButtonGroup");
const FontIcon = require("FontIcon");
const Code = require("../Code");

class Demo extends BaseDemo{

    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <div>
                        <ButtonGroup>
                            <Button>Default</Button>
                            <Button>Default</Button>
                            <Button>Default</Button>
                        </ButtonGroup>
                    </div>
                    <div className="mt-15">
                        <ButtonGroup>
                            <Button theme="primary" icon="cloud"></Button>
                            <Button theme="primary" icon="cloud"></Button>
                            <Button theme="primary" icon="cloud"></Button>
                        </ButtonGroup>
                    </div>
                    <div className="mt-15">
                        <ButtonGroup>
                            <Button theme="primary" icon="angle-left">Go back</Button>
                            <Button theme="primary" icon="angle-right" iconAlign="right">Go forward</Button>
                        </ButtonGroup>
                    </div>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">按钮组</div>
                    <div>
                        可以将多个 Button 放入 ButtonGroup 的容器中。
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const Button = require("Button");
const ButtonGroup = require("ButtonGroup");

ReactDOM.render(
<div>
    <div>
        <ButtonGroup>
            <Button>Default</Button>
            <Button>Default</Button>
            <Button>Default</Button>
        </ButtonGroup>
    </div>
    <div className="mt-15">
        <ButtonGroup>
            <Button theme="primary" icon="cloud"></Button>
            <Button theme="primary" icon="cloud"></Button>
            <Button theme="primary" icon="cloud"></Button>
        </ButtonGroup>
    </div>
    <div className="mt-15">
        <ButtonGroup>
            <Button theme="primary" icon="angle-left">Go back</Button>
            <Button theme="primary" icon="angle-right" iconAlign="right">Go forward</Button>
        </ButtonGroup>
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