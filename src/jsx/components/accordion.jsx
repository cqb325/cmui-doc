const React = require("react");
const Row = require("Row");
const Col = require("Col");
const Label = require("Label");
const Table = require("Table");
const Demo1 = require("../components/accordion/demo1");
const Demo2 = require("../components/accordion/demo2");
const Demo3 = require("../components/accordion/demo3");


let Page = React.createClass({

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">Accordion 折叠面板</h1>
                <blockquote className="page-tip">
                    可以折叠/展开的内容区域。
                </blockquote>

                <h1 className="page-h1">代码演示</h1>

                <Row>
                    <Col grid={1} className="code-col">
                        <Label className="code-box">
                            <Demo1></Demo1>
                        </Label>
                        <Label className="code-box">
                            <Demo2></Demo2>
                        </Label>
                        <Label className="code-box">
                            <Demo3></Demo3>
                        </Label>
                    </Col>
                </Row>

                <h2 className="page-h2">API</h2>
                <h3 className="page-h3">Button</h3>

                <Table columns={[
                    {name: "param", text: "参数"},
                    {name: "desc", text: "说明"},
                    {name: "type", text: "类型"},
                    {name: "default", text: "默认值"}
                ]} bordered={true} data={[
                    {param: "theme", desc: "主题default primary success warning danger", type: "string", default: "default"},
                    {param: "className", desc: "自定义class", type: "string", default: ""},
                    {param: "style", desc: "自定义样式", type: "object", default: ""},
                    {param: "onOpen", desc: "面板项展开回调", type: "function", default: ""},
                    {param: "onCollapse", desc: "面板项折叠回调", type: "function", default: ""},
                    {param: "onOpened", desc: "面板项展开后回调", type: "function", default: ""},
                    {param: "onCollapsed", desc: "面板项折叠后回调", type: "function", default: ""},
                    {param: "bordered", desc: "是否添加边框", type: "boolean", default: "false"}
                ]}></Table>

                <h3 className="page-h3">Methods</h3>

                <ul className="code-methods">
                    <li>
                        <i>activeByIndex(index)</i>
                        <span>根据index索引展开</span>
                        <ul>
                            <li>
                                index {Number} 面板项的索引
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>activeItem(item)</i>
                        <span>根据item对象或item的key值打开面板</span>
                        <ul>
                            <li>
                                item {String/Object} item对象或item的key值
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>getItem(key)</i>
                        <span>获取Item对象</span>
                        <ul>
                            <li>
                                key {String} item的key值
                            </li>
                            <li>
                                return {Object} item对象
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = Page;
