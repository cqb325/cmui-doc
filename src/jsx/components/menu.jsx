const React = require("react");
const Label = require("Label");
const Table = require("Table");
const Demo1 = require("../components/menu/demo1");
const Demo2 = require("../components/menu/demo2");
const Demo3 = require("../components/menu/demo3");
const Demo4 = require("../components/menu/demo4");


let Page = React.createClass({

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">Menu 菜单</h1>
                <blockquote className="page-tip">
                    为页面和功能提供导航的菜单列表。<br/>
                </blockquote>

                <h1 className="page-h1">代码演示</h1>

                <Label grid={1} className="code-col">
                    <Label className="code-box">
                        <Demo1></Demo1>
                    </Label>
                </Label>

                <Label grid={1} className="code-col">
                    <Label className="code-box">
                        <Demo2></Demo2>
                    </Label>
                </Label>

                <Label grid={1} className="code-col">
                    <Label className="code-box">
                        <Demo3></Demo3>
                    </Label>
                </Label>

                <Label grid={1} className="code-col">
                    <Label className="code-box">
                        <Demo4></Demo4>
                    </Label>
                </Label>

                <h2 className="page-h2">API</h2>
                <h3 className="page-h3">Menu</h3>

                <Table columns={[
                    {name: "param", text: "参数"},
                    {name: "desc", text: "说明"},
                    {name: "type", text: "类型"},
                    {name: "default", text: "默认值"}
                ]} bordered={true} data={[
                    {param: "className", desc: "自定义class", type: "string", default: ""},
                    {param: "style", desc: "自定义样式", type: "object", default: ""},
                    {param: "theme", desc: "主题 dark light", type: "object", default: "light"},
                    {param: "modal", desc: "选择模式multi 或者 single ", type: "string", default: "single"},
                    {param: "layout", desc: "Menu的布局 horizontal和vertical", type: "string", default: "vertical"},
                    {param: "onSelect", desc: "选择菜单时触发", type: "function", default: ""},
                    {param: "unSelect", desc: "上一个菜单项未选择回调", type: "function", default: ""},
                    {param: "onClick", desc: "选择菜单时触发", type: "function", default: ""},
                    {param: "onCollapse", desc: "菜单折叠回调", type: "function", default: ""},
                    {param: "onOpen", desc: "菜单打开回调", type: "function", default: ""}
                ]}></Table>

                <h3 className="page-h3">Methods</h3>

                <ul className="code-methods">
                    <li>
                        <i>selectItem(key)</i>
                        <span>选中菜单项</span>
                        <ul>
                            <li>
                                key {`String`} 菜单项的唯一key值
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>collapse(key, collapsed)</i>
                        <span>折叠或展开</span>
                        <ul>
                            <li>
                                key {`String`} 菜单项的唯一key值
                            </li>
                            <li>
                                collapsed {`Boolean`} true折叠false打开
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>setTheme(theme)</i>
                        <span>设置主题</span>
                        <ul>
                            <li>
                                theme {`String`} 菜单主题
                            </li>
                        </ul>
                    </li>

                    <li>
                        <i>getModal()</i>
                        <span>当前的选择模式</span>
                        <ul>
                            <li>
                                return {`String`} 获取模式 single、multi
                            </li>
                        </ul>
                    </li>
                </ul>

                <h3 className="page-h3">Menu.SubMenu</h3>

                <Table columns={[
                    {name: "param", text: "参数"},
                    {name: "desc", text: "说明"},
                    {name: "type", text: "类型"},
                    {name: "default", text: "默认值"}
                ]} bordered={true} data={[
                    {param: "className", desc: "自定义class", type: "string", default: ""},
                    {param: "style", desc: "自定义样式", type: "object", default: ""},
                    {param: "open", desc: "是否打开", type: "boolean", default: ""},
                    {param: "identify", desc: "唯一标识 可选 默认系统自动生成", type: "string", default: ""},
                    {param: "disabled", desc: "是否禁用", type: "boolean", default: "false"}
                ]}></Table>


                <h3 className="page-h3">Methods</h3>

                <ul className="code-methods">
                    <li>
                        <i>collapse(collapsed)</i>
                        <span>折叠或打开</span>
                        <ul>
                            <li>
                                collapsed {`Boolean`} true折叠false打开
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>isOpen()</i>
                        <span>是否打开的状态</span>
                        <ul>
                            <li>
                                return {`Boolean`} true折叠false打开
                            </li>
                        </ul>
                    </li>
                </ul>

                <h3 className="page-h3">Menu.MenuItemGroup</h3>

                <Table columns={[
                    {name: "param", text: "参数"},
                    {name: "desc", text: "说明"},
                    {name: "type", text: "类型"},
                    {name: "default", text: "默认值"}
                ]} bordered={true} data={[
                    {param: "title", desc: "标题", type: "string", default: ""}
                ]}></Table>

                <h3 className="page-h3">Menu.Item</h3>

                <Table columns={[
                    {name: "param", text: "参数"},
                    {name: "desc", text: "说明"},
                    {name: "type", text: "类型"},
                    {name: "default", text: "默认值"}
                ]} bordered={true} data={[
                    {param: "title", desc: "标题", type: "string", default: ""},
                    {param: "identify", desc: "菜单项的唯一标识", type: "string", default: ""},
                    {param: "select", desc: "是否选中", type: "boolean", default: "false"},
                    {param: "disabled", desc: "是否禁用", type: "boolean", default: "false"},
                    {param: "className", desc: "自定义class", type: "string", default: ""},
                    {param: "style", desc: "自定义样式", type: "object", default: ""},
                    {param: "link", desc: "链接地址", type: "string", default: ""}
                ]}></Table>

                <h3 className="page-h3">Methods</h3>

                <ul className="code-methods">
                    <li>
                        <i>getKey()</i>
                        <span>获取菜单项的Key</span>
                        <ul>
                            <li>
                                return {`String`} 菜单项的Key
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>select()</i>
                        <span>选中</span>
                    </li>
                    <li>
                        <i>unSelect()</i>
                        <span>取消选中</span>
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = Page;