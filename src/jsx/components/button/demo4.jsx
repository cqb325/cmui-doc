const React = require("react");
const BaseDemo = require("../BaseDemo");
const Button = require("Button");
const FontIcon = require("FontIcon");
const Code = require("../Code");

class Demo extends BaseDemo{

    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <div>
                        <Button>Default</Button>
                        <Button disabled={true} className="ml-10">Default</Button>
                    </div>
                    <div className="mt-15">
                        <Button theme="primary" icon="cloud"></Button>
                        <Button theme="primary" disabled={true} icon="cloud" className="ml-10"></Button>
                    </div>
                    <div className="mt-15">
                        <Button theme="primary" raised={true}>Raised</Button>
                        <Button theme="primary" raised={true} disabled={true} className="ml-10">Disabled</Button>
                    </div>

                    <div className="mt-15">
                        <Button theme="primary" flat={true}>Flat</Button>
                        <Button theme="primary" flat={true} disabled={true} className="ml-10">Disabled</Button>
                    </div>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">禁用状态</div>
                    <div>
                        添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const Button = require("Button");

ReactDOM.render(
<div>
    <div>
        <Button>Default</Button>
        <Button disabled={true} className="ml-10">Default</Button>
    </div>
    <div className="mt-15">
        <Button theme="primary" icon="cloud"></Button>
        <Button theme="primary" disabled={true} icon="cloud" className="ml-10"></Button>
    </div>
    <div className="mt-15">
        <Button theme="primary" raised={true}>Raised</Button>
        <Button theme="primary" disabled={true} className="ml-10">Disabled</Button>
    </div>

    <div className="mt-15">
        <Button theme="primary" flat={true}>Flat</Button>
        <Button theme="primary" flat={true} disabled={true} className="ml-10">Disabled</Button>
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