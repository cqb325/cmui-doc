const React = require("react");
const Label = require("Label");
const Row = require("Row");
const Col = require("Col");
const Table = require("Table");
const Demo1 = require("../components/notification/demo1");
const Demo2 = require("../components/notification/demo2");
const Demo3 = require("../components/notification/demo3");
const Demo4 = require("../components/notification/demo4");
const Demo5 = require("../components/notification/demo5");
const Demo6 = require("../components/notification/demo6");
const Demo7 = require("../components/notification/demo7");



let Page = React.createClass({

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">Notification 通知框</h1>
                <blockquote className="page-tip">
                    通知框。
                </blockquote>

                <h1 className="page-h1">代码演示</h1>

                <Row>
                    <Col grid={0.5}>
                        <Label className="code-col">
                            <Label className="code-box">
                                <Demo1></Demo1>
                            </Label>
                        </Label>
                        <Label className="code-col">
                            <Label className="code-box">
                                <Demo3></Demo3>
                            </Label>
                        </Label>
                        <Label className="code-col">
                            <Label className="code-box">
                                <Demo5></Demo5>
                            </Label>
                        </Label>
                        <Label className="code-col">
                            <Label className="code-box">
                                <Demo7></Demo7>
                            </Label>
                        </Label>
                    </Col>
                    <Col grid={0.5}>
                        <Label className="code-col">
                            <Label className="code-box">
                                <Demo2></Demo2>
                            </Label>
                        </Label>

                        <Label className="code-col">
                            <Label className="code-box">
                                <Demo4></Demo4>
                            </Label>
                        </Label>

                        <Label className="code-col">
                            <Label className="code-box">
                                <Demo6></Demo6>
                            </Label>
                        </Label>
                    </Col>
                </Row>


                <h2 className="page-h2">API</h2>
                <h3 className="page-h3">Notification config参数信息</h3>

                <Table columns={[
                    {name: "param", text: "参数"},
                    {name: "desc", text: "说明"},
                    {name: "type", text: "类型"},
                    {name: "default", text: "默认值"}
                ]} bordered={true} data={[
                    {param: "style", desc: "自定义样式", type: "object", default: ""},
                    {param: "key", desc: "该通知的标识，未填写时自动生成", type: "string", default: ""},
                    {param: "dock", desc: "通知停靠的位置", type: "string", default: "topRight"},
                    {param: "title", desc: "标题", type: "string", default: ""},
                    {param: "desc", desc: "描述", type: "string", default: ""},
                    {param: "icon", desc: "自定义图标", type: "ReactElement", default: ""},
                    {param: "btn", desc: "自定义按钮", type: "ReactElement", default: ""},
                    {param: "duration", desc: "延迟自动关闭时间 单位s", type: "number", default: "4.5"},
                    {param: "onClose", desc: "关闭回调", type: "function", default: ""}
                ]}></Table>

                <h3 className="page-h3">Methods</h3>

                <ul className="code-methods">
                    <li>
                        <i>success(config)</i>
                        <span>打开success通知</span>
                        <ul>
                            <li>
                                config {`Object`} 通知配置信息
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>info(config)</i>
                        <span>打开 info 通知</span>
                        <ul>
                            <li>
                                config {`Object`} 通知配置信息
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>warning(config)</i>
                        <span>打开 warning 通知</span>
                        <ul>
                            <li>
                                config {`Object`} 通知配置信息
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>error(config)</i>
                        <span>打开 error 通知</span>
                        <ul>
                            <li>
                                config {`Object`} 通知配置信息
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>question(config)</i>
                        <span>打开 question 通知</span>
                        <ul>
                            <li>
                                config {`Object`} 通知配置信息
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>open(config)</i>
                        <span>打开通知</span>
                        <ul>
                            <li>
                                config {`Object`} 通知配置信息
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>close(key)</i>
                        <span>关闭通知</span>
                        <ul>
                            <li>
                                key {`String`} 通知的key
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>getNotification(key)</i>
                        <span>获取通知key</span>
                        <ul>
                            <li>
                                key {`String`} 通知的key
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = Page;
