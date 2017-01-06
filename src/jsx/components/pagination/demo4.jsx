const React = require("react");
const BaseDemo = require("../BaseDemo");
const FontIcon = require("FontIcon");
const Pagination = require("Pagination");

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <Pagination theme="primary" current={1} pageSize={10} total={100}></Pagination>
                    <Pagination theme="primary" shape="circle" current={1} pageSize={10} total={100}></Pagination>
                    <Pagination theme="primary" shape="none" displayInfo={false} current={1} pageSize={10} total={100}></Pagination>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">theme primary</div>
                    <div>
                        primary样式
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <pre className="brush: js" ref="code">
                        {`
const Pagination = require("Pagination");

ReactDOM.render(
<div>
    <Pagination theme="primary" current={1} pageSize={10} total={100}></Pagination>
    <Pagination theme="primary" shape="circle" current={1} pageSize={10} total={100}></Pagination>
    <Pagination theme="primary" shape="none" displayInfo={false} current={1} pageSize={10} total={100}></Pagination>
</div>, mountNode);
`}
                    </pre>
                </div>
            </div>
        );
    }
}

module.exports = Demo;