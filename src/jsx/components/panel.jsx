const React = require("react");
const Label = require("Label");
const Table = require("Table");
const Demo1 = require("../components/panel/demo1");
const Demo2 = require("../components/panel/demo2");


let Page = React.createClass({

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">Panel 面板</h1>
                <blockquote className="page-tip">
                    通用内容容器。<br/>
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

                <h2 className="page-h2">API</h2>
                <h3 className="page-h3">Panel</h3>

                <Table columns={[
                    {name: "param", text: "参数"},
                    {name: "desc", text: "说明"},
                    {name: "type", text: "类型"},
                    {name: "default", text: "默认值"}
                ]} bordered={true} data={[
                    {param: "className", desc: "自定义class", type: "string", default: ""},
                    {param: "style", desc: "自定义样式", type: "object", default: ""},
                    {param: "title", desc: "标题", type: "string", default: ""},
                    {param: "content", desc: "内容", type: "string", default: ""},
                    {param: "tools", desc: "按钮", type: "object {align: '', components: []}", default: ""},
                    {param: "footers", desc: "footer区域的按钮同tools", type: "object", default: ""},
                    {param: "grid", desc: "Panel的宽度 grid={1/4}", type: "number/object", default: ""}
                ]}></Table>

                <h3 className="page-h3">Methods</h3>

                <ul className="code-methods">
                    <li>
                        <i>setTitle(title)</i>
                        <span>设置Panel的标题</span>
                        <ul>
                            <li>
                                title {`String`} 标题
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>setContent(content)</i>
                        <span>设置Panel的内容</span>
                        <ul>
                            <li>
                                content {`String`} 内容
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>setTitleAndContent(title, content)</i>
                        <span>设置Panel的标题和内容</span>
                        <ul>
                            <li>
                                title {`String`} 标题
                            </li>
                            <li>
                                content {`String`} 内容
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = Page;