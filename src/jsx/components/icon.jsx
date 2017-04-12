const React = require("react");
const Label = require("Label");
const Table = require("Table");
const Demo1 = require("../components/icon/demo1");
const Demo2 = require("../components/icon/demo2");
const Demo3 = require("../components/icon/demo3");
const Demo12 = require("../components/icon/demo12");


let Page = React.createClass({

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">FontIcon 字体图标</h1>
                <blockquote className="page-tip">
                    语义化的矢量图形。
                </blockquote>

                <h1 className="page-h1">代码演示</h1>

                <Label grid={0.5} className="code-col">
                    <Label className="code-box">
                        <Demo1></Demo1>
                    </Label>
                    <Label className="code-box">
                        <Demo3></Demo3>
                    </Label>
                    <Label className="code-box">
                        <Demo12></Demo12>
                    </Label>
                </Label>
                <Label grid={0.5} className="code-col">
                    <Label className="code-box">
                        <Demo2></Demo2>
                    </Label>
                </Label>

                <h2 className="page-h2">API</h2>
                <h3 className="page-h3">FontIcon</h3>

                <Table columns={[
                    {name: "param", text: "参数"},
                    {name: "desc", text: "说明"},
                    {name: "type", text: "类型"},
                    {name: "default", text: "默认值"}
                ]} bordered={true} data={[
                    {param: "icon", desc: "图标名称 font awesome 中的图标", type: "string", default: ""},
                    {param: "font", desc: "自定义字体的名称", type: "string", default: ""},
                    {param: "spin", desc: "是否旋转", type: "boolean", default: ""},
                    {param: "pulse", desc: "分步旋转", type: "boolean", default: ""},
                    {param: "title", desc: "提示文字", type: "string", default: ""},
                    {param: "className", desc: "自定义class", type: "string", default: ""},
                    {param: "size", desc: "字体大小 lg、2x、3x、4x、5x", type: "string", default: ""},
                    {param: "color", desc: "颜色", type: "string", default: ""},
                    {param: "style", desc: "自定义样式", type: "object", default: ""}
                ]}></Table>
            </div>
        );
    }
});

module.exports = Page;