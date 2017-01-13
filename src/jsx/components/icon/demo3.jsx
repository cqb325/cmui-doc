const React = require("react");
const BaseDemo = require("../BaseDemo");
const FontIcon = require("FontIcon");
const Code = require("../Code");

class Demo extends BaseDemo{
    render(){
        let style= {color: "#20A0FF"};
        return (
            <div>
                <div className="code-box-demo">
                    <FontIcon icon="spinner" style={style} spin={true}></FontIcon>
                    <FontIcon icon="spinner" style={style} spin={true} pulse={true}></FontIcon>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">旋转</div>
                    <div>
                        设置FontIcon的 spin 为true， 可以让图标随着中心旋转
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const FontIcon = require("FontIcon");

ReactDOM.render(
<div>
    <FontIcon icon="spinner" style={style} spin={true}></FontIcon>
    <FontIcon icon="spinner" style={style} spin={true} pulse={true}></FontIcon>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;