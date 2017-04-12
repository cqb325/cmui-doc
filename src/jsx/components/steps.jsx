const React = require("react");
const Label = require("Label");
const Table = require("Table");
const Demo1 = require("../components/steps/demo1");
const Demo2 = require("../components/steps/demo2");
const Demo3 = require("../components/steps/demo3");
const Demo4 = require("../components/steps/demo4");
const Demo5 = require("../components/steps/demo5");


let Page = React.createClass({

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">Steps 步骤条</h1>
                <blockquote className="page-tip">
                    引导用户按照流程完成任务的导航条。<br/>
                    当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。
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

                <Label className="code-col">
                    <Label className="code-box">
                        <Demo5></Demo5>
                    </Label>
                </Label>

                <h2 className="page-h2">API</h2>
                <h3 className="page-h3">Steps</h3>

                <Table columns={[
                    {name: "param", text: "参数"},
                    {name: "desc", text: "说明"},
                    {name: "type", text: "类型"},
                    {name: "default", text: "默认值"}
                ]} bordered={true} data={[
                    {param: "className", desc: "自定义class", type: "string", default: ""},
                    {param: "style", desc: "自定义样式", type: "object", default: ""},
                    {param: "current", desc: "默认当前步骤", type: "number", default: "0"},
                    {param: "onFinished", desc: "步骤完成时触发", type: "function", default: ""},
                    {param: "onChange", desc: "步骤发生变化时触发", type: "function", default: ""},
                    {param: "size", desc: "步骤的尺寸 small", type: "string", default: ""},
                    {param: "layout", desc: "步骤条的布局 为空横向，vertical为竖直", type: "string", default: ""}
                ]}></Table>

                <h3 className="page-h3">Methods</h3>

                <ul className="code-methods">
                    <li>
                        <i>setActive(current)</i>
                        <span>激活第current个步骤</span>
                        <ul>
                            <li>
                                current {`Number`} 步骤索引
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>prev()</i>
                        <span>跳转到上一步</span>
                    </li>
                    <li>
                        <i>next()</i>
                        <span>跳转到下一步</span>
                    </li>
                </ul>

                <h3 className="page-h3">Steps.Step</h3>

                <Table columns={[
                    {name: "param", text: "参数"},
                    {name: "desc", text: "说明"},
                    {name: "type", text: "类型"},
                    {name: "default", text: "默认值"}
                ]} bordered={true} data={[
                    {param: "className", desc: "自定义class", type: "string", default: ""},
                    {param: "style", desc: "自定义样式", type: "object", default: ""},
                    {param: "title", desc: "步骤标题", type: "string", default: ""},
                    {param: "description", desc: "步骤描述", type: "string", default: ""},
                    {param: "content", desc: "步骤内容", type: "string", default: ""},
                    {param: "icon", desc: "图标", type: "string", default: ""}
                ]}></Table>
            </div>
        );
    }
});

module.exports = Page;