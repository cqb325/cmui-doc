const React = require("react");
const Label = require("Label");
const Row = require("Row");
const Col = require("Col");
const Table = require("Table");
const Demo1 = require("../components/tree/demo1");
const Demo2 = require("../components/tree/demo2");
const Demo3 = require("../components/tree/demo3");
const Demo4 = require("../components/tree/demo4");
const Demo5 = require("../components/tree/demo5");


let Page = React.createClass({

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">Tree 选择器</h1>
                <blockquote className="page-tip">
                    弹出一个下拉菜单给用户选择操作，用于代替原生的选择器。<br/>
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
                        <Label className="code-box">
                            <Demo5></Demo5>
                        </Label>
                    </Col>
                    <Col grid={0.5} className="code-col">
                        <Label className="code-box">
                            <Demo2></Demo2>
                        </Label>
                        <Label className="code-box">
                            <Demo4></Demo4>
                        </Label>
                    </Col>
                </Row>

                <h2 className="page-h2">API</h2>
                <h3 className="page-h3">Uploadify</h3>

                <Table columns={[
                    {name: "param", text: "参数"},
                    {name: "desc", text: "说明"},
                    {name: "type", text: "类型"},
                    {name: "default", text: "默认值"}
                ]} bordered={true} data={[
                    {param: "className", desc: "自定义class", type: "string", default: ""},
                    {param: "style", desc: "自定义样式", type: "object", default: ""},
                    {param: "data", desc: "初始化数据", type: "array", default: ""},
                    {param: "url", desc: "ajax请求数据进行初始化", type: "string", default: ""},
                    {param: "enableCheckbox", desc: "是否使用复选框", type: "boolean", default: "false"},
                    {param: "enableSmartCheckbox", desc: "是否使用级联复选框", type: "boolean", default: "false"},
                    {param: "onSelect", desc: "选中节点的回调", type: "function(item)", default: ""},
                    {param: "onOpen", desc: "打开子节点的回调", type: "function(item)", default: ""},
                    {param: "onCheck", desc: "勾选节点复选框回调", type: "function(item)", default: ""}
                ]}></Table>

                <h3 className="page-h3">Methods</h3>

                <ul className="code-methods">
                    <li>
                        <i>setSmartSubChecked(item)</i>
                        <span>设置子节点的级联显示</span>
                        <ul>
                            <li>
                                item {`String/Object`} 节点id或对象
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>setSubChecked(item)</i>
                        <span>选中当前节点的子节点</span>
                        <ul>
                            <li>
                                item {`String/Object`} 节点id或对象
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>setItemChecked(item, checked)</i>
                        <span>设置节点的勾选状态</span>
                        <ul>
                            <li>
                                item {`String/Object`} 节点id或对象
                            </li>
                            <li>
                                checked {`Number`} 节点勾选状态 0 未勾选、1 勾选
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>getSubItems(item)</i>
                        <span>根据节点的Id或则节点对象获取子节点</span>
                        <ul>
                            <li>
                                return {`Array`} 子节点对象
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>getItem(itemId)</i>
                        <span>根据节点的Id获取节点对象</span>
                        <ul>
                            <li>
                                itemId {`String`} 节点对象
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>getItemText(item)</i>
                        <span>根据节点id获取节点的文字</span>
                        <ul>
                            <li>
                                item {`String/Object`} 节点id或对象
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>setItemText(item, text)</i>
                        <span>根据节点id或节点对象设置节点文字</span>
                        <ul>
                            <li>
                                item {`String/Object`} 节点id或对象
                            </li>
                            <li>
                                text {`String`} 节点名称
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>setItemColor(item, color)</i>
                        <span>根据节点id或节点对象设置节点颜色</span>
                        <ul>
                            <li>
                                item {`String/Object`} 节点id或对象
                            </li>
                            <li>
                                color {`String`} 要设置的颜色
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>setItemImg(item, img)</i>
                        <span>根据节点id或节点对象设置节点图标</span>
                        <ul>
                            <li>
                                item {`String/Object`} 节点id或对象
                            </li>
                            <li>
                                img {`String`} 要设置的图标
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>getLevel(item)</i>
                        <span>根据节点的Id或则节点对象获取节点的层级</span>
                        <ul>
                            <li>
                                item {`String/Object`} 节点id或对象
                            </li>
                            <li>
                                return {`Number`} 层级
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>getOpenState(item)</i>
                        <span>根据节点的Id或则节点对象获取节点的打开状态</span>
                        <ul>
                            <li>
                                item {`String/Object`} 节点id或对象
                            </li>
                            <li>
                                return {`Number`} 节点打开状态
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>getSelectedItem()</i>
                        <span>获取当前选中的节点</span>
                        <ul>
                            <li>
                                return {`Object`} 节点对象
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>isItemChecked(item)</i>
                        <span>根据节点的Id或则节点对象判断节点是否勾选</span>
                        <ul>
                            <li>
                                item {`String/Object`} 节点id或对象
                            </li>
                            <li>
                                return {`Number`} 节点勾选状态
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>checkItem(item)</i>
                        <span>根据节点的Id或则节点对象勾选节点</span>
                        <ul>
                            <li>
                                item {`String/Object`} 节点id或对象
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>unCheckItem(item)</i>
                        <span>根据节点的Id或则节点对象取消勾选节点</span>
                        <ul>
                            <li>
                                item {`String/Object`} 节点id或对象
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>openItem(item)</i>
                        <span>根据节点的Id或则节点对象打开节点</span>
                        <ul>
                            <li>
                                item {`String/Object`} 节点id或对象
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>openAllItem()</i>
                        <span>打开所有的节点</span>
                    </li>
                    <li>
                        <i>closeItem(item)</i>
                        <span>根据节点的Id或则节点对象关闭节点</span>
                        <ul>
                            <li>
                                item {`String/Object`} 节点id或对象
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>closeAllItem()</i>
                        <span>关闭所有的节点</span>
                    </li>
                    <li>
                        <i>selectItem(item)</i>
                        <span>根据节点的Id或则节点对象选中节点</span>
                        <ul>
                            <li>
                                item {`String/Object`} 节点id或对象
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>unSelectItem(item)</i>
                        <span>根据节点的Id或则节点对象取消选中节点</span>
                        <ul>
                            <li>
                                item {`String/Object`} 节点id或对象
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>getSubCheckedItems(item)</i>
                        <span>根据节点的Id或则节点对象获取勾选的子节点</span>
                        <ul>
                            <li>
                                item {`String/Object`} 节点id或对象
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>getSubUncheckedItems(item)</i>
                        <span>根据节点的Id或则节点对象获取未勾选的子节点</span>
                        <ul>
                            <li>
                                item {`String/Object`} 节点id或对象
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>getAllChecked()</i>
                        <span>获取所有勾选的节点</span>
                        <ul>
                            <li>
                                return {`Array`} 节点数组
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>getAllCheckedIncludeSmart()</i>
                        <span>获取所有勾选的节点包含smart节点</span>
                        <ul>
                            <li>
                                return {`Array`} 节点数组
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>getSubChecks(item, checked)</i>
                        <span>根据节点的Id或则节点对象获取指定勾选状态的子节点</span>
                        <ul>
                            <li>
                                item {`String/Object`} 节点id或对象
                            </li>
                            <li>
                                checked {`Number`} 节点勾选状态
                            </li>
                            <li>
                                return {`Array`} 节点数组
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>getAllCheckedBranches()</i>
                        <span>获取所有勾选的非叶子节点</span>
                        <ul>
                            <li>
                                return {`Array`} 节点数组
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>getAllCheckedLeafs()</i>
                        <span>获取所有勾选的叶子节点</span>
                        <ul>
                            <li>
                                return {`Array`} 节点数组
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>addItem(parent, item)</i>
                        <span>添加一个节点</span>
                        <ul>
                            <li>
                                parent {`String/Object`} 节点id或对象
                            </li>
                            <li>
                                item {`Object`} 节点对象
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>deleteChildItems(item)</i>
                        <span>删除所有的孩子结点</span>
                        <ul>
                            <li>
                                item {`String/Object`} 节点id或对象
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>removeItem(item)</i>
                        <span>删除节点</span>
                        <ul>
                            <li>
                                item {`String/Object`} 节点id或对象
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>getAllBranches()</i>
                        <span>获取所有的非叶子节点</span>
                        <ul>
                            <li>
                                return {`Array`} 非叶子节点数组
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>getAllLeafs()</i>
                        <span>获取所有的叶子节点</span>
                        <ul>
                            <li>
                                return {`Array`} 叶子节点数组
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>updateParentCheckStatus(item)</i>
                        <span>级联更新父节点的状态</span>
                        <ul>
                            <li>
                                item {`String/Object`} 节点id或对象
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>loadDynamicJSON(parent, json, cback)</i>
                        <span>动态加载JSON数据</span>
                        <ul>
                            <li>
                                parent {`String/Object`} 节点id或对象
                            </li>
                            <li>
                                json {`Object`} 子节点数据
                            </li>
                            <li>
                                cback {`function`} 加载完成之后的回调
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = Page;