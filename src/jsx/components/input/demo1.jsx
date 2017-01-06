const React = require("react");
const BaseDemo = require("../BaseDemo");
const FontIcon = require("FontIcon");
const Input = require("Input");

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <Input name="text" placeholder="Basic usage"></Input>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">基本用法</div>
                    <div>
                        简单用法
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <pre className="brush: js" ref="code">
                        {`
const Input = require("Input");

ReactDOM.render(
<div>
    <Input name="text"  placeholder="Basic usage"></Input>
</div>, mountNode);
`}
                    </pre>
                </div>
            </div>
        );
    }
}

module.exports = Demo;