const React = require("react");
const BaseDemo = require("../BaseDemo");
const Spin = require("Spin");
const WaterSpin = Spin.WaterSpin;
const SVGSpin = Spin.SVGSpin;
const CssSpin = Spin.CssSpin;
const ButtonGroup = require("ButtonGroup");
const Button = require("Button");
const Code = require("../Code");
const FontIcon = require("FontIcon");


class Demo extends BaseDemo{

    plus(){
        let percent = this.refs.waterSpin.getPercent();
        if(percent < 100) {
            this.refs.waterSpin.setPercent(percent + 10);
        }
    }

    subtract(){
        let percent = this.refs.waterSpin.getPercent();
        if(percent > 0) {
            this.refs.waterSpin.setPercent(percent - 10);
        }
    }

    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <div style={{background: "#1d1f20", padding: 30}}>
                        <WaterSpin ref="waterSpin" size={150} percent="50"></WaterSpin>
                        <ButtonGroup className={"mt-20"}>
                            <Button theme="primary" onClick={this.subtract.bind(this)}>-</Button>
                            <Button theme="primary" onClick={this.plus.bind(this)}>+</Button>
                        </ButtonGroup>
                    </div>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">水波状</div>
                    <div>
                        水波状Spin
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const Spin = require("Spin");
const WaterSpin = Spin.WaterSpin;
const ButtonGroup = require("ButtonGroup");
const Button = require("Button");

ReactDOM.render(
<div>
    <div style={{background: "#1d1f20"}}>
        <WaterSpin ref="waterSpin" size={150} percent="50"></WaterSpin>
        <ButtonGroup>
            <Button theme="primary" onClick={this.subtract.bind(this)}>-</Button>
            <Button theme="primary" onClick={this.plus.bind(this)}>+</Button>
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