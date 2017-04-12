const React = require("react");
const Label = require("Label");
const Row = require("Row");
const Col = require("Col");
const Table = require("Table");
const Demo1 = require("../components/uploadify/demo1");
const Demo2 = require("../components/uploadify/demo2");
const Demo3 = require("../components/uploadify/demo3");
const Demo4 = require("../components/uploadify/demo4");


let Page = React.createClass({

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">多上传文件</h1>
                <blockquote className="page-tip">
                    文件选择上传控件，展现上传的进度<br/>
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
                <h3 className="page-h3">Uploadify</h3>

                <Table columns={[
                    {name: "param", text: "参数"},
                    {name: "desc", text: "说明"},
                    {name: "type", text: "类型"},
                    {name: "default", text: "默认值"}
                ]} bordered={true} data={[
                    {param: "className", desc: "自定义class", type: "string", default: ""},
                    {param: "style", desc: "自定义样式", type: "object", default: ""},
                    {param: "buttonText", desc: "上传按钮的文字", type: "string", default: "upload"},
                    {param: "files", desc: "默认文件，这些文件只起到显示作用", type: "array", default: ""},
                    {param: "params", desc: "额外的参数", type: "object", default: ""},
                    {param: "mode", desc: "模式falls和grid", type: "string", default: "falls"},
                    {param: "onInit", desc: "初始化后回调", type: "function", default: ""},
                    {param: "auto", desc: "自动上传", type: "boolean", default: "true"},
                    {param: "onFilesAdded", desc: "选中文件后回调", type: "function", default: ""},
                    {param: "onProgress", desc: "文件上传进度回调", type: "function", default: ""},
                    {param: "onFileUploaded", desc: "文件上传完成回调", type: "function", default: ""},
                    {param: "onUploadComplete", desc: "所有文件上传完成回调", type: "function", default: ""},
                    {param: "onException", desc: "错误回调", type: "function", default: ""},
                    {param: "onRemoveFile", desc: "移除文件回调", type: "function", default: ""},
                    {param: "thumbnail", desc: "falls时显示缩略图", type: "boolean", default: "false"},
                    {param: "maxSize", desc: "最大上传限制单位支持b、kb、mb、gb", type: "string", default: ""},
                    {param: "mimeTypes", desc: "过滤文件", type: "array", default: ""},
                    {param: "name", desc: "上传时字段名称", type: "string", default: "file"},
                    {param: "url", desc: "上传时服务端接口url", type: "string", default: ""},
                    {param: "multi", desc: "是否多选", type: "boolean", default: "true"}
                ]}></Table>

                <h3 className="page-h3">Methods</h3>

                <ul className="code-methods">
                    <li>
                        <i>setParams(params)</i>
                        <span>设置key/value参数</span>
                        <ul>
                            <li>
                                params {`Object`} 额外的参数，键值对
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>start()</i>
                        <span>开始上传</span>
                    </li>
                </ul>


                <h3 className="page-h3">mimeTypes</h3>
                <ul className="code-methods">
                    <li>
                        <i>{`[{title : "Image files", extensions : "jpg,gif,png"}]`}</i>
                        <ul>
                            <li>
                                title {`String`} 文件选择框的说明
                            </li>
                            <li>
                                extensions {`String`} 文件后缀,隔开
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = Page;