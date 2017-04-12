const React = require("react");
const Label = require("Label");
const Row = require("Row");
const Col = require("Col");
const Table = require("Table");
const Demo1 = require("../components/slick/demo1");
const Demo2 = require("../components/slick/demo2");
const Demo3 = require("../components/slick/demo3");
const Demo4 = require("../components/slick/demo4");
const Demo5 = require("../components/slick/demo5");



let Page = React.createClass({

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">Slick 幻灯片</h1>
                <blockquote className="page-tip">
                    一组轮播的区域。<br/>
                    用于一组图片或卡片轮播
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
                <h3 className="page-h3">Slick</h3>

                <Table columns={[
                    {name: "param", text: "参数"},
                    {name: "desc", text: "说明"},
                    {name: "type", text: "类型"},
                    {name: "default", text: "默认值"}
                ]} bordered={true} data={[
                    {param: "className", desc: "自定义class", type: "string", default: ""},
                    {param: "style", desc: "自定义样式", type: "object", default: ""},
                    {param: "current", desc: "当前索引", type: "number", default: "0"},
                    {param: "layout", desc: "布局horizontal，vertical", type: "string", default: "horizontal"},
                    {param: "autoPlay", desc: "自动播放", type: "boolean", default: "false"},
                    {param: "effect", desc: "特效名称slide、fade、normal", type: "string", default: "slide"},
                    {param: "onShow", desc: "跳转到下一个的回调", type: "function", default: ""},
                    {param: "onShown", desc: "特效完成的回调", type: "function", default: ""},
                    {param: "delay", desc: "特效的延迟时间", type: "number", default: "3000"}
                ]}></Table>

                <h3 className="page-h3">Methods</h3>

                <ul className="code-methods">
                    <li>
                        <i>play()</i>
                        <span>播放</span>
                    </li>
                    <li>
                        <i>getActive()</i>
                        <span>获取当前的索引</span>
                        <ul>
                            <li>
                                return {`Number`} 当前的索引
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>jumpTo(index, callback)</i>
                        <span>跳转到指定索引</span>
                        <ul>
                            <li>
                                index {`Number`} 要跳转的索引
                            </li>
                            <li>
                                callback {`function`}  跳转完成后的回调
                            </li>
                        </ul>
                    </li>
                </ul>

                <h3 className="page-h3">Slick.Item</h3>

                <Table columns={[
                    {name: "param", text: "参数"},
                    {name: "desc", text: "说明"},
                    {name: "type", text: "类型"},
                    {name: "default", text: "默认值"}
                ]} bordered={true} data={[
                    {param: "className", desc: "自定义class", type: "string", default: ""},
                    {param: "active", desc: "激活状态", type: "boolean", default: "false"}
                ]}></Table>
            </div>
        );
    }
});

module.exports = Page;