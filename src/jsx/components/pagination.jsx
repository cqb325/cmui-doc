const React = require("react");
const Label = require("Label");
const Table = require("Table");
const Demo1 = require("../components/pagination/demo1");
const Demo2 = require("../components/pagination/demo2");
const Demo3 = require("../components/pagination/demo3");
const Demo4 = require("../components/pagination/demo4");


let Page = React.createClass({

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">Pagination 分页</h1>
                <blockquote className="page-tip">
                    分页显示数据或者内容时使用。
                </blockquote>

                <h1 className="page-h1">代码演示</h1>

                <Label className="code-col">
                    <Label className="code-box">
                        <Demo1></Demo1>
                    </Label>
                </Label>

                <Label className="code-col">
                    <Label className="code-box">
                        <Demo2></Demo2>
                    </Label>
                </Label>

                <Label className="code-col">
                    <Label className="code-box">
                        <Demo3></Demo3>
                    </Label>
                </Label>

                <Label className="code-col">
                    <Label className="code-box">
                        <Demo4></Demo4>
                    </Label>
                </Label>

                <h2 className="page-h2">API</h2>
                <h3 className="page-h3">Pagination</h3>

                <Table columns={[
                    {name: "param", text: "参数"},
                    {name: "desc", text: "说明"},
                    {name: "type", text: "类型"},
                    {name: "default", text: "默认值"}
                ]} bordered={true} data={[
                    {param: "className", desc: "自定义class", type: "string", default: ""},
                    {param: "style", desc: "自定义样式", type: "object", default: ""},
                    {param: "current", desc: "当前选中的页号", type: "number", default: ""},
                    {param: "total", desc: "记录总数", type: "number", default: ""},
                    {param: "pageSize", desc: "每页记录数", type: "number", default: ""},
                    {param: "displayInfo", desc: "是否限制具体页数总记录跳转等信息", type: "boolean", default: "true"},
                    {param: "onShowSizeChange", desc: "pageSize变化时触发", type: "function", default: ""},
                    {param: "onChange", desc: "页号变化时触发", type: "function", default: ""},
                    {param: "shape", desc: "页号的形状 目前只有circle", type: "string", default: ""}
                ]}></Table>

                <h3 className="page-h3">Methods</h3>

                <ul className="code-methods">
                    <li>
                        <i>update(data)</i>
                        <span>更新组件状态</span>
                        <ul>
                            <li>
                                data {`Object`} 包含pageSize、total、current信息的json对象
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = Page;