const React = require("react");
const BaseDemo = require("../BaseDemo");
const FontIcon = require("FontIcon");
const Code = require("../Code");

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <FontIcon font="cfont" icon={"qq"} style={{color: "#20A0FF", fontSize: "30px"}}> </FontIcon>
                    <FontIcon font="cfont" icon={"iphone"} style={{color: "#20A0FF", fontSize: "30px"}}> </FontIcon>
                    <FontIcon font="cfont" icon={"android"} style={{color: "#20A0FF", fontSize: "30px"}}> </FontIcon>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">自定义字体</div>
                    <div>
                        设置FontIcon的 font 属性即可设置字体的family，icon属性指向的字就是该字体中的图标，在页面中的head需要引入对应的css样式
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const FontIcon = require("FontIcon");

ReactDOM.render(
<div>
    <FontIcon font="cfont" icon={"qq"} style={{color: "#20A0FF", fontSize: "30px"}}> </FontIcon>
    <FontIcon font="cfont" icon={"iphone"} style={{color: "#20A0FF", fontSize: "30px"}}> </FontIcon>
    <FontIcon font="cfont" icon={"android"} style={{color: "#20A0FF", fontSize: "30px"}}> </FontIcon>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;