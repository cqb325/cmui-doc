const React = require("react");
const BaseDemo = require("../BaseDemo");
const FontIcon = require("FontIcon");
const Pagination = require("Pagination");
const Code = require("../Code");

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <Pagination shape="none" displayInfo={false} current={1} pageSize={10} total={1000} onChange={(page, size)=>{console.log(page);}}></Pagination>
                    <Pagination shape="none" theme="cyan" displayInfo={false} current={1} pageSize={10} total={1000} onChange={(page, size)=>{console.log(page);}}></Pagination>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">圆形</div>
                    <div>
                        设置shape为circle页号变为圆形, theme 支持 cyan, none
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const Pagination = require("Pagination");

ReactDOM.render(
<div>
    <Pagination shape="none" displayInfo={false} current={1} pageSize={10} total={1000} onChange={(page, size)=>{console.log(page);}}></Pagination>
    <Pagination shape="none" theme="cyan" displayInfo={false} current={1} pageSize={10} total={1000} onChange={(page, size)=>{console.log(page);}}></Pagination>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;