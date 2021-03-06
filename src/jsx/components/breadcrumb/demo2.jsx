const React = require("react");
const ReactDOM = require("react-dom");
const BaseDemo = require("../BaseDemo");
const Breadcrumb = require("Breadcrumb");
const FontIcon = require("FontIcon");
const Code = require("../Code");

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <FontIcon icon={"home"}></FontIcon>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item link="javascript:void(0)">
                            <FontIcon icon={"list-ul"}></FontIcon>
                            <span>Application List</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>Application</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">图标</div>
                    <div>
                        图标放在文字前面。
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const Breadcrumb = require("Breadcrumb");
const FontIcon = require("FontIcon");

ReactDOM.render(
<div>
    <Breadcrumb>
        <Breadcrumb.Item>
            <FontIcon icon={"home"}></FontIcon>
        </Breadcrumb.Item>
        <Breadcrumb.Item link="javascript:void(0)">
            <FontIcon icon={"list-ul"}></FontIcon>
            <span>Application List</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Application</Breadcrumb.Item>
    </Breadcrumb>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;