const React = require("react");
const Label = require("Label");
const Table = require("Table");
const Demo1 = require("../components/table/demo1");


let Page = React.createClass({

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">Table 表格</h1>
                <blockquote className="page-tip">
                    表格。<br/>
                </blockquote>

                <h1 className="page-h1">代码演示</h1>

                <Label className="code-col">
                    <Label className="code-box">
                        <Demo1></Demo1>
                    </Label>
                </Label>

                <h2 className="page-h2">API</h2>
                <h3 className="page-h3">Table</h3>

                <Table columns={[
                    {name: "param", text: "参数"},
                    {name: "desc", text: "说明"},
                    {name: "type", text: "类型"},
                    {name: "default", text: "默认值"}
                ]} bordered={true} data={[
                    {param: "className", desc: "自定义class", type: "string", default: ""},
                    {param: "style", desc: "自定义样式", type: "object", default: ""},
                    {param: "data", desc: "表格数据", type: "array", default: ""},
                    {param: "columns", desc: "表头字段信息", type: "Array", default: ""},
                    {param: "bordered", desc: "边框的表格", type: "boolean", default: "false"},
                    {param: "striped", desc: "是否交替显示背景", type: "boolean", default: "false"},
                    {param: "hover", desc: "鼠标滑过高亮", type: "boolean", default: "false"}
                ]}></Table>

                <h3 className="page-h3">Methods</h3>

                <ul className="code-methods">
                    <li>
                        <i>setData(data)</i>
                        <span>设置表格数据</span>
                        <ul>
                            <li>
                                data {`Array`} 表格数据
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>getData()</i>
                        <span>获取表格数据</span>
                        <ul>
                            <li>
                                return {`Array`} 表格数据
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>addRow(row)</i>
                        <span>添加行数据</span>
                        <ul>
                            <li>
                                row {`Object`} 对应columns字段定义的json数据
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>removeRow(index)</i>
                        <span>删除行</span>
                        <ul>
                            <li>
                                index {`Number`} 行号
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>removeRows(field, value)</i>
                        <span>删除行，根据字段和值进行匹配，删除匹配的数据</span>
                        <ul>
                            <li>
                                field {`String`} 字段名称
                            </li>
                            <li>
                                value {`String`} 对应的值
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>resetData(data)</i>
                        <span>重置数据</span>
                        <ul>
                            <li>
                                data {`Object {columns: [], data: []}`} 包含columns内容和表格数据的data
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>checkedAll(checked)</i>
                        <span>勾选所有或取消勾选所有</span>
                        <ul>
                            <li>
                                checked {`Boolean`} 如果是一个带有checkbox的列可以使用
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>checkRow(field, value)</i>
                        <span>根据属性勾选行</span>
                        <ul>
                            <li>
                                field {`String`} 字段名称
                            </li>
                            <li>
                                value {`String`} 对应的值
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>unCheckRow(field, value)</i>
                        <span>根据属性取消勾选行</span>
                        <ul>
                            <li>
                                field {`String`} 字段名称
                            </li>
                            <li>
                                value {`String`} 对应的值
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>getAllChecked()</i>
                        <span>获取所有勾选的数据</span>
                        <ul>
                            <li>
                                return {`Object {data: [], rows: []}`} 勾选的数据
                            </li>
                        </ul>
                    </li>
                </ul>


                <h3 className="page-h3">Columns</h3>

                <ul className="code-methods">
                    <li>
                        <i>{`[{name: "", type: "", text: "", tip: "", format: ""}]`}</i>
                        <span>表头格式</span>
                        <ul>
                            <li>
                                name {`String`} 字段名称
                            </li>
                            <li>
                                type {`String`} 为checkbox是为选择框列 为index是序号列
                            </li>
                            <li>
                                text {`String`} 表头字符串
                            </li>
                            <li>
                                tip {`Boolean`} 是否鼠标滑过提示
                            </li>
                            <li>
                                format {`function`} 字段格式化 format(value, column, row)
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = Page;