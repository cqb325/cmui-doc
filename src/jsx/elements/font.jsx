const React = require("react");
const Label = require("Label");


let Page = React.createClass({

    render(){

        return (
            <div className="main-container">
                <h1 className="page-h1">字体</h1>
                <blockquote className="page-tip">
                    跨平台的字体设定，力求在各个操作系统下都有最佳展示效果。
                </blockquote>

                <h1 className="main-title-bold">中文字体</h1>
                <div className="mb-30">
                    <Label grid={0.3} className="doc-font-box">
                        <div className="doc-font-box-inner">
                            <div className="font-40 demo-font-PingFang">字体</div>
                            <div>PingFang SC</div>
                        </div>
                    </Label>
                    <Label grid={0.3} className="doc-font-box">
                        <div className="doc-font-box-inner">
                            <div className="font-40 demo-font-Hiragino">字体</div>
                            <div>Hiragino Sans GB</div>
                        </div>
                    </Label>
                    <Label grid={0.3} className="doc-font-box">
                        <div className="doc-font-box-inner">
                            <div className="font-40 demo-font-YaHei">字体</div>
                            <div>Microsoft YaHei</div>
                        </div>
                    </Label>
                </div>

                <h1 className="main-title-bold">数字英文字体</h1>

                <div className="mb-30">
                    <Label grid={0.3} className="doc-font-box">
                        <div className="doc-font-box-inner">
                            <div className="font-40">FONT</div>
                            <div>Helvetica Neue</div>
                        </div>
                    </Label>
                    <Label grid={0.3} className="doc-font-box">
                        <div className="doc-font-box-inner">
                            <div className="font-40 demo-font-Helvetica">FONT</div>
                            <div>Helvetica</div>
                        </div>
                    </Label>
                    <Label grid={0.3} className="doc-font-box">
                        <div className="doc-font-box-inner">
                            <div className="font-40 demo-font-Arial">FONT</div>
                            <div>Arial</div>
                        </div>
                    </Label>
                </div>


                <h1 className="main-title-bold">字体使用规范</h1>

                <div className="doc-font-use">
                    <div className="mb-10">
                        <Label grid={0.5} className="main-title">
                            <div>主标题</div>
                        </Label>
                        <Label grid={0.5} className="main-title">
                            <div>Main Head</div>
                        </Label>
                    </div>
                    <div className="mb-30">
                        <Label grid={0.5}  className="main-title-bold">
                            <div>我是标题加粗 #666 16px</div>
                        </Label>
                        <Label grid={0.5} className="main-title-bold">
                            <div>I am example text bold #666 16px</div>
                        </Label>
                    </div>

                    <div className="mb-10">
                        <Label grid={0.5}  className="sub-title">
                            <div>次级标题</div>
                        </Label>
                        <Label grid={0.5} className="sub-title">
                            <div>Sub Head</div>
                        </Label>
                    </div>
                    <div className="mb-30">
                        <Label grid={0.5}  className="sub-title-bold">
                            <div>我是标题 加粗 #666 14px</div>
                        </Label>
                        <Label grid={0.5} className="sub-title-bold">
                            <div>I am example text bold #666 14px</div>
                        </Label>
                    </div>

                    <div className="mb-10">
                        <Label grid={0.5}  className="small-title">
                            <div>小标题</div>
                        </Label>
                        <Label grid={0.5} className="small-title">
                            <div>Small Head</div>
                        </Label>
                    </div>
                    <div className="mb-30">
                        <Label grid={0.5}  className="small-title-bold">
                            <div>我是标题 加粗 #666 12px</div>
                        </Label>
                        <Label grid={0.5} className="small-title-bold">
                            <div>I am example text bold #666 12px</div>
                        </Label>
                    </div>

                    <div className="mb-10">
                        <Label grid={0.5}  className="text-normal">
                            <div>正文</div>
                        </Label>
                        <Label grid={0.5} className="text-normal">
                            <div>Text</div>
                        </Label>
                    </div>
                    <div className="mb-30">
                        <Label grid={0.5}  className="text-normal">
                            <div>我是正文 #666 12px</div>
                        </Label>
                        <Label grid={0.5} className="text-normal">
                            <div>I am example text #666 12px</div>
                        </Label>
                    </div>

                    <div className="mb-10">
                        <Label grid={0.5}  className="text-promote">
                            <div>辅助文字</div>
                        </Label>
                        <Label grid={0.5} className="text-promote">
                            <div>Help Text</div>
                        </Label>
                    </div>
                    <div className="mb-30">
                        <Label grid={0.5}  className="text-promote">
                            <div>我是辅助文字 #999 12px</div>
                        </Label>
                        <Label grid={0.5} className="text-promote">
                            <div>I am example text #999 12px</div>
                        </Label>
                    </div>

                    <div className="mb-10">
                        <Label grid={0.5}  className="text-invalid">
                            <div>失效文字</div>
                        </Label>
                        <Label grid={0.5} className="text-invalid">
                            <div>Help Text</div>
                        </Label>
                    </div>
                    <div className="mb-30">
                        <Label grid={0.5}  className="text-invalid">
                            <div>我是失效文字 #ccc 12px</div>
                        </Label>
                        <Label grid={0.5} className="text-invalid">
                            <div>I am example text #ccc 12px</div>
                        </Label>
                    </div>

                    <div className="mb-10">
                        <Label grid={0.5}  className="text-link">
                            <div>链接文字</div>
                        </Label>
                        <Label grid={0.5} className="text-link">
                            <div>Help Text</div>
                        </Label>
                    </div>
                    <div className="mb-30">
                        <Label grid={0.5}  className="text-link">
                            <div>我是链接文字 #20A0FF 12px</div>
                        </Label>
                        <Label grid={0.5} className="text-link">
                            <div>I am example text #20A0FF 12px</div>
                        </Label>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Page;