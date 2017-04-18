const React = require("react");
const Label = require("Label");
const Row = require("Row");
const Col = require("Col");
const Table = require("Table");
const Demo1 = require("../components/form/demo1");
const Demo2 = require("../components/form/demo2");
const Demo3 = require("../components/form/demo3");
const Demo4 = require("../components/form/demo4");



let Page = React.createClass({

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">Form表单元素</h1>
                <blockquote className="page-tip">
                    表单元素<br/>
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
                        <Label className="code-box">
                            <Demo4></Demo4>
                        </Label>
                    </Col>
                </Row>

                <h2 className="page-h2">API</h2>
                <h3 className="page-h3">Form</h3>

                <Table columns={[
                    {name: "param", text: "参数"},
                    {name: "desc", text: "说明"},
                    {name: "type", text: "类型"},
                    {name: "default", text: "默认值"}
                ]} bordered={true} data={[
                    {param: "className", desc: "自定义class", type: "string", default: ""},
                    {param: "style", desc: "自定义样式", type: "object", default: ""},
                    {param: "action", desc: "提交表单的服务地址", type: "string", default: ""},
                    {param: "method", desc: "提交方式get、post、ajax、custom", type: "string", default: ""},
                    {param: "target", desc: "同form元素的target", type: "string", default: ""},
                    {param: "useDefaultSubmitBtn", desc: "是否使用自带的表单提交按钮", type: "string/boolean", default: "true"},
                    {param: "component", desc: "Form渲染后是form还是div", type: "string", default: "form"},
                    {param: "layout", desc: "表单的布局方式inline、stack-inline、stack", type: "string", default: "inline"},
                    {param: "labelWidth", desc: "所有label的默认宽度", type: "number", default: ""},
                    {param: "customParams", desc: "除了表单元素外的其他需要提交的参数 JSON格式", type: "object", default: ""},
                    {param: "success", desc: "提交成功回调", type: "function", default: ""},
                    {param: "error", desc: "提交失败回调", type: "function", default: ""},
                    {param: "submit", desc: "自定义提交操作方法", type: "function", default: ""},
                    {param: "submitText", desc: "默认提交按钮的显示文字", type: "string", default: "保 存"},
                    {param: "encType", desc: "表单有上传文件时的encType", type: "string", default: ""}
                ]}></Table>

                <h3 className="page-h3">Methods</h3>

                <ul className="code-methods">
                    <li>
                        <i>getFormParams()</i>
                        <span>获取表单的数据 key/value形式</span>
                        <ul>
                            <li>
                                return {`Object`} key/value 表单数据
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>getItems()</i>
                        <span>获取表单的Items</span>
                        <ul>
                            <li>
                                return {`Array`} FormControl元素数组
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>submit()</i>
                        <span>提交表单</span>
                    </li>
                    <li>
                        <i>getItem(name)</i>
                        <span>根据name获取Form表单元素</span>
                        <ul>
                            <li>
                                name {`String`} 元素的name
                            </li>
                            <li>
                                return {`Object`} Input、TextArea等元素
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>getFormControl(name)</i>
                        <span>根据name获取Form表单元素</span>
                        <ul>
                            <li>
                                name {`String`} 元素的name
                            </li>
                            <li>
                                return {`Object`} FormControl元素
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>isValid()</i>
                        <span>获取表单验证是否通过</span>
                        <ul>
                            <li>
                                return {`Boolean`} true/false
                            </li>
                        </ul>
                    </li>
                </ul>


                <h3 className="page-h3">FormControl</h3>
                <Table columns={[
                    {name: "param", text: "参数"},
                    {name: "desc", text: "说明"},
                    {name: "type", text: "类型"},
                    {name: "default", text: "默认值"}
                ]} bordered={true} data={[
                    {param: "className", desc: "自定义class", type: "string", default: ""},
                    {param: "style", desc: "自定义样式", type: "object", default: ""},
                    {param: "rules", desc: "验证规则", type: "object", default: ""},
                    {param: "messages", desc: "对应验证规则的提示信息", type: "object", default: ""},
                    {param: "isFormItem", desc: "当前元素是否是表单元素 false 不进行验证", type: "boolean", default: "true"},
                    {param: "name", desc: "元素的名称", type: "string", default: ""},
                    {param: "tipAlign", desc: "验证失败的提示位置 同Tooltip", type: "string", default: "right"},
                    {param: "required", desc: "同表单元素的required", type: "string/boolean", default: ""},
                    {param: "type", desc: "注册的表单类型", type: "string", default: ""},
                    {param: "id", desc: "id", type: "string", default: ""},
                    {param: "disabled", desc: "禁用", type: "boolean", default: "false"},
                    {param: "onChange", desc: "值改变回调", type: "function", default: ""},
                    {param: "onValid", desc: "验证后的回调", type: "function", default: ""}
                ]}></Table>

                <h3 className="page-h3">Methods</h3>
                <ul className="code-methods">
                    <li>
                        <i>setMessage(rule, message)</i>
                        <span>动态设置验证提示消息</span>
                        <ul>
                            <li>
                                rule {`String`} 规则名称
                            </li>
                            <li>
                                message {`String`} 规则对应的提示信息
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>setRule(rule, rule_args)</i>
                        <span>动态设置验证规则</span>
                        <ul>
                            <li>
                                rule {`String`} 规则名称
                            </li>
                            <li>
                                rule_args {`any`} 规则参数
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>setErrorTip(msg)</i>
                        <span>设置错误信息</span>
                        <ul>
                            <li>
                                msg {`String`} 错误提示信息
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>isFormItem()</i>
                        <span>是否为表单元素</span>
                        <ul>
                            <li>
                                return {`boolean`} true/false
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>getName()</i>
                        <span>获取表单名称</span>
                        <ul>
                            <li>
                                return {`String`} 表单名称
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>setValue(value)</i>
                        <span>设置元素的值</span>
                        <ul>
                            <li>
                                value {`any`} 表单元素的值
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>getValue()</i>
                        <span>获取元素的值</span>
                        <ul>
                            <li>
                                return {`any`} 字段的值
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>isValid()</i>
                        <span>获取元素验证是否通过</span>
                        <ul>
                            <li>
                                return {`boolean`} 元素是否验证通过
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>getReference()</i>
                        <span>获取子元素Input或TextArea等注册的元素</span>
                        <ul>
                            <li>
                                return {`ReactElement`} 子元素对象
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>check()</i>
                        <span>验证元素</span>
                        <ul>
                            <li>
                                return {`boolean`} true/false
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = Page;