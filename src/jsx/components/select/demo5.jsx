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
                    <Select data={data} placeholder="选择城市" hasEmptyOption="true" choiceText="--自定义请选择--"></Select>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">placeholder和choiceText</div>
                    <div>
                        可以设置placeholder显示未选择的文字和choiceText取消选中的文字
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
    <Select data={data} placeholder="选择城市" hasEmptyOption="true" choiceText="--自定义请选择--"></Select>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;