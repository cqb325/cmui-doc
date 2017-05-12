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
                    <div className="code-box-title">displayInfo</div>
                    <div>
                        设置displayInfo 为false 可以不显示页数信息等
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