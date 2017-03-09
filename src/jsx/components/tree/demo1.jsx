const React = require("react");
const BaseDemo = require("../BaseDemo");
const FontIcon = require("FontIcon");
const Tree = require("Tree");
const Code = require("../Code");

class Demo extends BaseDemo{
    render(){
        let treeData = [{
            id: 0,
            text: "中国",
            open: true,
            children: [
                {
                    id: '1',
                    text: "北京",
                    children: [{id: '11', text: "海淀"},{id: '12', text: "朝阳"}]
                },{
                    id: '2',
                    text: "上海"
                }
            ]
        }];

        return (
            <div>
                <div className="code-box-demo">
                    <Tree data={treeData}></Tree>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">基本用法</div>
                    <div>
                        简单用法
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const Tree = require("Tree");

let treeData = [{
    id: 0,
    text: "中国",
    open: true,
    children: [
        {
            id: '1',
            text: "北京",
            children: [{id: '11', text: "海淀"},{id: '12', text: "朝阳"}]
        },{
            id: '2',
            text: "上海"
        }
    ]
}];

ReactDOM.render(
<div>
   <Tree data={treeData}></Tree>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;