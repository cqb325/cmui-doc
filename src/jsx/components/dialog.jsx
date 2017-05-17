const React = require("react");
const Label = require("Label");
const Row = require("Row");
const Col = require("Col");
const Table = require("Table");
const Demo1 = require("../components/dialog/demo1");
const Demo2 = require("../components/dialog/demo2");
const Demo3 = require("../components/dialog/demo3");


let Page = React.createClass({

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">Dialog 对话框</h1>
                <blockquote className="page-tip">
                    模态对话框<br/>
                </blockquote>

                <h1 className="page-h1">代码演示</h1>

                <Row>
                    <Col grid={0.5} className="code-col">
                        <Label className="code-box">
                            <Demo1></Demo1>
                        </Label>
                        <Label className="code-box">
                            <Demo3></Demo3>
                        </Label>
                    </Col>
                    <Col grid={0.5} className="code-col">
                        <Label className="code-box">
                            <Demo2></Demo2>
                        </Label>
                    </Col>
                </Row>

                <h2 className="page-h2">API</h2>
                <h3 className="page-h3">Dialog</h3>

                <Table columns={[
                    {name: "param", text: "参数"},
                    {name: "desc", text: "说明"},
                    {name: "type", text: "类型"},
                    {name: "default", text: "默认值"}
                ]} bordered={true} data={[
                    {param: "className", desc: "自定义class", type: "string", default: ""},
                    {param: "style", desc: "自定义样式", type: "object", default: ""},
                    {param: "title", desc: "标题", type: "string", default: ""},
                    {param: "hasFooter", desc: "是否显示footer区域", type: "boolean", default: "false"},
                    {param: "okButtonText", desc: "确认按钮的文字", type: "string", default: "确 定"},
                    {param: "cancelButtonText", desc: "取消按钮的文字", type: "string", default: "取 消"},
                    {param: "footers", desc: "footer区域的按钮同Panel", type: "object", default: ""},
                    {param: "onConfirm", desc: "点击按钮时触发", type: "function", default: ""},
                    {param: "onClose", desc: "Dialog关闭时触发", type: "function", default: ""},
                    {param: "onOpen", desc: "Dialog显示时触发", type: "function", default: ""},
                    {param: "hasCloseBtn", desc: "Dialog是否使用右上角的关闭", type: "boolean", default: "true"}
                ]}></Table>

                <h3 className="page-h3">Methods</h3>

                <ul className="code-methods">
                    <li>
                        <i>open(orign)</i>
                        <span>打开对话框</span>
                        <ul>
                            <li>
                                orign {`html Element`} 可选  指定该值对话框从该元素的坐标慢慢打开
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>close()</i>
                        <span>关闭对话框</span>
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
                    <li>
                        <i>setTitle(title)</i>
                        <span>设置标题</span>
                        <ul>
                            <li>
                                title {`String`} 标题
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>setContent(content)</i>
                        <span>设置内容</span>
                        <ul>
                            <li>
                                content {`String/ReactElement`} 内容
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>getPanel()</i>
                        <span>获取dialog的panel</span>
                        <ul>
                            <li>
                                return {`Panel`} Panel对象
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>getContainer()</i>
                        <span>获取dialog的容器</span>
                        <ul>
                            <li>
                                return {`HTMLElement`} Dialog容器
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>isOpen()</i>
                        <span>是否打开状态</span>
                        <ul>
                            <li>
                                return {`Boolean`} 打开状态
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = Page;