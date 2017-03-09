const React = require("react");
const BaseDemo = require("../BaseDemo");
const FontIcon = require("FontIcon");
const Tree = require("Tree");
const Code = require("../Code");

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <Tree url="../assets/modules/components/tree/big_data.json"></Tree>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">加载远程数据</div>
                    <div>
                        tree从url地址中获取远程数据进行渲染
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const Tree = require("Tree");


ReactDOM.render(
<div>
   <Tree url="../assets/modules/components/tree/big_data.json"></Tree>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;