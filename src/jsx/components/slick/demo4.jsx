const React = require("react");
const BaseDemo = require("../BaseDemo");
const Slick = require("Slick");
const Code = require("../Code");
const FontIcon = require("FontIcon");

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <Slick effect="slide">
                        <Slick.Item>1</Slick.Item>
                        <Slick.Item>2</Slick.Item>
                        <Slick.Item>3</Slick.Item>
                        <Slick.Item>4</Slick.Item>
                    </Slick>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">slide特效</div>
                    <div>
                        设置effect属性为slide即可
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const Select = require("Select");

ReactDOM.render(
<div>
    <Slick effect="slide">
        <Slick.Item>1</Slick.Item>
        <Slick.Item>2</Slick.Item>
        <Slick.Item>3</Slick.Item>
        <Slick.Item>4</Slick.Item>
    </Slick>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;