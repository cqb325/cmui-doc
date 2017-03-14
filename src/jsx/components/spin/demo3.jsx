const React = require("react");
const BaseDemo = require("../BaseDemo");
const Spin = require("Spin");
const CssSpin = Spin.CssSpin;
const Code = require("../Code");
const FontIcon = require("FontIcon");


class Demo extends BaseDemo{

    switchSpin(value){
        
        if(!value){
            this.refs.spin.show();
        }else{
            this.refs.spin.hide();
        }
    }

    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <CssSpin ref="spin" spinning={true} type="mask">
                        <div style={{height: 100, position: "relative", backgroundColor: "#ecf6fd", border: "1px solid #d2eafb", textAlian: "center"}}>
                            <strong>Alert message title</strong>
                            <p>Further details about the context of this alert.</p>
                        </div>
                    </CssSpin>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">Css Spin mask</div>
                    <div>
                        条带状Spin
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const Spin = require("Spin");
const CssSpin = Spin.CssSpin;

ReactDOM.render(
<div>
    <CssSpin ref="spin" spinning={true} type="mask">
        <div style={{height: 100, position: "relative", backgroundColor: "#ecf6fd", border: "1px solid #d2eafb", textAlian: "center"}}>
            <strong>Alert message title</strong>
            <p>Further details about the context of this alert.</p>
        </div>
    </CssSpin>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;