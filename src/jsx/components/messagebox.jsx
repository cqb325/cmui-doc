const React = require("react");
const Label = require("Label");
const Table = require("Table");
const Demo1 = require("../components/messagebox/demo1");
const Demo2 = require("../components/messagebox/demo2");


let Page = React.createClass({

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">MessageBox 消息框</h1>
                <blockquote className="page-tip">
                    消息框。<br/>
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
                <h3 className="page-h3">MessageBox</h3>

                <Table columns={[
                    {name: "param", text: "参数"},
                    {name: "desc", text: "说明"},
                    {name: "type", text: "类型"},
                    {name: "default", text: "默认值"}
                ]} bordered={true} data={[
                    {param: "className", desc: "自定义class", type: "string", default: ""},
                    {param: "style", desc: "自定义样式", type: "object", default: ""},
                    {param: "title", desc: "标题", type: "string", default: ""},
                    {param: "msg", desc: "提示的内容", type: "string", default: ""},
                    {param: "type", desc: "消息框的类型info、confirm", type: "string", default: "info"},
                    {param: "confirmText", desc: "确认按钮的文字", type: "string", default: "确 定"},
                    {param: "cancelText", desc: "取消按钮的文字", type: "string", default: "取 消"},
                    {param: "confirmTheme", desc: "确认按钮的主题", type: "string", default: "primary"},
                    {param: "cancelTheme", desc: "取消按钮的主题", type: "string", default: "default"},
                    {param: "confirmIcon", desc: "确认按钮的图标", type: "string", default: "check"},
                    {param: "cancelIcon", desc: "取消按钮的图标", type: "string", default: "close"},
                    {param: "footers", desc: "footer区域的按钮同Panel", type: "object", default: ""},
                    {param: "confirm", desc: "点击按钮时触发", type: "function", default: ""},
                    {param: "onHide", desc: "消息框隐藏时触发", type: "function", default: ""},
                    {param: "onShow", desc: "消息框显示时触发", type: "function", default: ""}
                ]}></Table>

                <h3 className="page-h3">Methods</h3>

                <ul className="code-methods">
                    <li>
                        <i>show(msg, title)</i>
                        <span>显示消息框并设置内容或标题</span>
                        <ul>
                            <li>
                                msg {`String`} 内容
                            </li>
                            <li>
                                title {`String`} 标题
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>hide()</i>
                        <span>关闭消息框</span>
                    </li>
                    <li>
                        <i>setData(data)</i>
                        <span>设置消息框的附带数据</span>
                        <ul>
                            <li>
                                data {`any`} 附带数据
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>getData()</i>
                        <span>获取消息框的附带数据</span>
                        <ul>
                            <li>
                                return {`any`} 消息框的附带数据
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = Page;