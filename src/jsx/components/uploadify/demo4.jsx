const React = require("react");
const BaseDemo = require("../BaseDemo");
const FontIcon = require("FontIcon");
const Uploadify = require("Uploadify");
const Code = require("../Code");

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <Uploadify maxSize="100kb" mimeTypes={[{title : "Image files", extensions : "jpg,gif,png"}]} mode="grid" url="http://192.168.105.202:8415/mock/test/uploadify/upload" auto={true}></Uploadify>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">上传大小，文件类型限制</div>
                    <div>
                        maxSize属性可以限制上传文件大小， 单位支持b,kb,mb,gb;
                        mimeTypes可以过滤文件类型 类似 {`[{title: "Image files", extensions : "jpg,gif,png"}]`}
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const Uploadify = require("Uploadify");

ReactDOM.render(
<div>
    <Uploadify maxSize="100kb" mimeTypes={[{title : "Image files", extensions : "jpg,gif,png"}]} mode="grid" url="http://192.168.105.202:8415/mock/test/uploadify/upload" auto={true}></Uploadify>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;