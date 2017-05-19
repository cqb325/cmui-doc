const React = require("react");
const BaseDemo = require("../BaseDemo");
const Button = require("Button");
const InputNumber = require("InputNumber");
const FontIcon = require("FontIcon");
const Code = require("../Code");

class Demo extends BaseDemo{

    constructor(props){
        super(props);
        this.state = {
            disabled: true
        }
    }

    toggleDisable(){
        if(this.state.disabled){
            this.refs.inputNumber.enable();
            this.setState({disabled: false});
        }else{
            this.refs.inputNumber.disable();
            this.setState({disabled: true});
        }
    }

    setMax(){
        this.refs.inputNumber.setMax(50);
    }

    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <InputNumber className="mb-5" min="0" value="100" max="100" ref="inputNumber"
                        formatter={(value)=>`${value}%`}
                        parser={(value)=>value.replace('%', '')}
                        disabled
                    /><br/>

                    <Button onClick={this.toggleDisable.bind(this)}>{this.state.disabled ? "激活" : "禁用"}</Button>
                    <Button className="ml-5" onClick={this.setMax.bind(this)}>设置最大值</Button>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">formatter和parser</div>
                    <div>
                        theme支持 primary 、success、 warning、 danger
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const InputNumber = require("InputNumber");

toggleDisable(){
    if(this.state.disabled){
        this.refs.inputNumber.enable();
        this.setState({disabled: false});
    }else{
        this.refs.inputNumber.disable();
        this.setState({disabled: true});
    }
}

setMax(){
    this.refs.inputNumber.setMax(50);
}

ReactDOM.render(
<div>
    <InputNumber className="mb-5" min="0" value="100" max="100" ref="inputNumber"
        formatter={(value)=>\`\${value}%\`}
        parser={(value)=>value.replace('%', '')}
        disabled
    /><br/>

    <Button onClick={this.toggleDisable.bind(this)}>{this.state.disabled ? "激活" : "禁用"}</Button>
    <Button className="ml-5" onClick={this.setMax.bind(this)}>设置最大值</Button>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;
