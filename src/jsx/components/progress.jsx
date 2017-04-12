const React = require("react");
const Label = require("Label");
const Row = require("Row");
const Col = require("Col");
const Table = require("Table");
const Demo1 = require("../components/progress/demo1");
const Demo2 = require("../components/progress/demo2");
const Demo3 = require("../components/progress/demo3");
const Demo4 = require("../components/progress/demo4");
const Demo5 = require("../components/progress/demo5");
const Demo6 = require("../components/progress/demo6");
const Demo7 = require("../components/progress/demo7");



let Page = React.createClass({

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">Progress 进度条</h1>
                <blockquote className="page-tip">
                    展示操作的当前进度。<br/>
                    在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态
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
                        <Label className="code-box">
                            <Demo7></Demo7>
                        </Label>
                    </Col>
                    <Col grid={0.5} className="code-col">
                        <Label className="code-box">
                            <Demo2></Demo2>
                        </Label>
                        <Label className="code-box">
                            <Demo4></Demo4>
                        </Label>
                        <Label className="code-box">
                            <Demo6></Demo6>
                        </Label>
                    </Col>
                </Row>

                <h2 className="page-h2">API</h2>
                <h3 className="page-h3">Progress</h3>

                <Table columns={[
                    {name: "param", text: "参数"},
                    {name: "desc", text: "说明"},
                    {name: "type", text: "类型"},
                    {name: "default", text: "默认值"}
                ]} bordered={true} data={[
                    {param: "className", desc: "自定义class", type: "string", default: ""},
                    {param: "style", desc: "自定义样式", type: "object", default: ""},
                    {param: "value", desc: "进度值", type: "number", default: "0"},
                    {param: "min", desc: "最小值", type: "number", default: "0"},
                    {param: "max", desc: "最大值", type: "number", default: "100"},
                    {param: "radius", desc: "半径", type: "number", default: "60"},
                    {param: "strokeWidth", desc: "圆形线条粗细值", type: "number", default: "10"},
                    {param: "status", desc: "状态", type: "string", default: ""},
                    {param: "showPercent", desc: "是否显示进度文字", type: "boolean", default: "true"},
                    {param: "active", desc: "动效状态激活", type: "boolean", default: "false"},
                    {param: "type", desc: "普通进度line 还是圆形进度circle", type: "string", default: ""},
                    {param: "format", desc: "进度结果格式化", type: "function", default: ""}
                ]}></Table>

                <h3 className="page-h3">Methods</h3>

                <ul className="code-methods">
                    <li>
                        <i>getMin()</i>
                        <span>获取最小值</span>
                        <ul>
                            <li>
                                return {`Number`} 最小值
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>getMax()</i>
                        <span>获取最大值</span>
                        <ul>
                            <li>
                                return {`Number`} 最大值
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>getValue()</i>
                        <span>获取当前值</span>
                        <ul>
                            <li>
                                return {`Number`} 当前进度值
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>update(value)</i>
                        <span>更新当前进度</span>
                        <ul>
                            <li>
                                value {`Number`}
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = Page;