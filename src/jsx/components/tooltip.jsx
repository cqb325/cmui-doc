const React = require("react");
const Label = require("Label");
const Table = require("Table");
const Demo1 = require("../components/tooltip/demo1");
const Demo2 = require("../components/tooltip/demo2");
const Demo3 = require("../components/tooltip/demo3");
const Demo4 = require("../components/tooltip/demo4");


let Page = React.createClass({

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">Tooltip 文字提示</h1>
                <blockquote className="page-tip">
                    简单的文字提示气泡框。<br/>
                    鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。
                </blockquote>

                <h1 className="page-h1">代码演示</h1>

                <Label grid={0.5} className="code-col">
                    <Label className="code-box">
                        <Demo1></Demo1>
                    </Label>
                    <Label className="code-box">
                        <Demo3></Demo3>
                    </Label>
                </Label>

                <Label grid={0.5} className="code-col">
                    <Label className="code-box">
                        <Demo2></Demo2>
                    </Label>
                    <Label className="code-box">
                        <Demo4></Demo4>
                    </Label>
                </Label>

                <h2 className="page-h2">API</h2>
                <h3 className="page-h3">Tooltip</h3>

                <Table columns={[
                    {name: "param", text: "参数"},
                    {name: "desc", text: "说明"},
                    {name: "type", text: "类型"},
                    {name: "default", text: "默认值"}
                ]} bordered={true} data={[
                    {param: "className", desc: "自定义class", type: "string", default: ""},
                    {param: "style", desc: "自定义样式", type: "object", default: ""},
                    {param: "title", desc: "提示信息", type: "string", default: ""},
                    {param: "theme", desc: "主题default、black、primary、error", type: "string", default: "black"},
                    {param: "delay", desc: "鼠标移走后延迟响应时间", type: "number", default: "0"},
                    {param: "trigger", desc: "触发类型 click or hover", type: "string", default: "hover"},
                    {param: "onVisibleChange", desc: "显隐改变时触发", type: "function", default: ""},
                    {param: "align", desc: "显示的位置为12个方向", type: "string", default: "top"}
                ]}></Table>

                <h3 className="page-h3">Methods</h3>

                <ul className="code-methods">
                    <li>
                        <i>setTitle(title)</i>
                        <span>设置标题</span>
                        <ul>
                            <li>
                                title {`String`} 标题
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = Page;