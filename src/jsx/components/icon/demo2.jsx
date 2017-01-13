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
                    <FontIcon icon="camera-retro" style={style}> normal size</FontIcon><br/>
                    <FontIcon icon="camera-retro" style={style} size="lg"> lg size</FontIcon><br/>
                    <FontIcon icon="camera-retro" style={style} size="2x"> 2x size</FontIcon><br/>
                    <FontIcon icon="camera-retro" style={style} size="3x"> 3x size</FontIcon><br/>
                    <FontIcon icon="camera-retro" style={style} size="4x"> 4x size</FontIcon><br/>
                    <FontIcon icon="camera-retro" style={style} size="5x"> 5x size</FontIcon><br/>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">图标尺寸</div>
                    <div>
                        设置FontIcon的 size 属性可以调节图标的大小， size 可设的值为 lg、2x、3x、4x、5x和不设置
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const FontIcon = require("FontIcon");

ReactDOM.render(
<div>
    <FontIcon icon="camera-retro" style={style}> normal size</FontIcon><br/>
    <FontIcon icon="camera-retro" style={style} size="lg"> lg size</FontIcon><br/>
    <FontIcon icon="camera-retro" style={style} size="2x"> 2x size</FontIcon><br/>
    <FontIcon icon="camera-retro" style={style} size="3x"> 3x size</FontIcon><br/>
    <FontIcon icon="camera-retro" style={style} size="4x"> 4x size</FontIcon><br/>
    <FontIcon icon="camera-retro" style={style} size="5x"> 5x size</FontIcon><br/>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;