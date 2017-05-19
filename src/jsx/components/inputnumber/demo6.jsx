const React = require("react");
const BaseDemo = require("../BaseDemo");
const Button = require("Button");
const InputNumber = require("InputNumber");
const FontIcon = require("FontIcon");
const Code = require("../Code");

class Demo extends BaseDemo{

    onChange(value){
        console.log(value);
    }

    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <InputNumber className="mb-5" min="0" value="100" max="100"
                        formatter={(value)=>`${value}%`}
                        parser={(value)=>value.replace('%', '')}
                        onChange={this.onChange.bind(this)}
                    /><br/>

                    <InputNumber
                      value={1000}
                      formatter={value => `$ ${value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
                      parser={value => value.replace(/\$\s?|(,*)/g, '')}
                    />
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

onChange(value){
    console.log(value);
}

ReactDOM.render(
<div>
    <InputNumber className="mb-5" min="0" value="100" max="100"
        formatter={(value)=>\`\${value}%\`}
        parser={(value)=>value.replace('%', '')}
        onChange={this.onChange.bind(this)}
    /><br/>

    <InputNumber
      value={1000}
      formatter={value => \`$ \${value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}\`}
      parser={value => value.replace(/\$\s?|(,*)/g, '')}
    />
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;
