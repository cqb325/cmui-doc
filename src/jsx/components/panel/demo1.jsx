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
                    <Panel title="Panel Title" tools={{
                        components: [
                            <a href="javascript:void(0)">more</a>,
                            <a href="javascript:void(0)"><FontIcon icon={"times"} className="ml-10"></FontIcon></a>
                        ]
                    }} footers={{
                        components: [
                            <Button icon="save" theme="success">Save</Button>,
                            <Button icon="flask" className="ml-10">Cancel</Button>
                        ]
                    }}>
                        <p>Panel content</p>
                        <p>Panel content</p>
                        <p>Panel content</p>
                    </Panel>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">简单用法</div>
                    <div>
                        简单用法。
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const Panel = require("Panel");
const FontIcon = require("FontIcon");
const Button = require("Button");

ReactDOM.render(
<Panel title="Panel Title" tools={{
    components: [
        <a href="javascript:void(0)">more</a>,
        <a href="javascript:void(0)"><FontIcon icon={"times"} className="ml-10"></FontIcon></a>
    ]
}} footers={{
    components: [
        <Button icon="save" theme="success">Save</Button>,
        <Button icon="flask" className="ml-10">Cancel</Button>
    ]
}}>
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