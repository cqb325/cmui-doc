const React = require("react");
const BaseDemo = require("../BaseDemo");
const Select = require("Select");
const Code = require("../Code");
const FontIcon = require("FontIcon");

class Demo extends BaseDemo{
    render(){
        let data = [
            {"id":"110000","text":"北京"},
            {"id":"120000","text":"天津"},
            {"id":"310000","text":"上海"}
        ];


        return (
            <div>
                <div className="code-box-demo">
                    <Select data={data} value="110000" disabled={true}></Select>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">禁用</div>
                    <div>
                        禁用状态的select
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const Select = require("Select");

let data = [
    {"id":"110000","text":"北京"},
    {"id":"120000","text":"天津"},
    {"id":"310000","text":"上海"}
];

ReactDOM.render(
<div>
    <Select data={data} value="110000" disabled={true}></Select>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;