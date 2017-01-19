const React = require("react");
const Label = require("Label");
const Demo1 = require("../components/layout/demo1");


let Page = React.createClass({

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">Layout 布局</h1>
                <blockquote className="page-tip">
                    可协助进行页面级整体布局。采用flex布局 注意浏览器兼容性<br/>
                    <ol style={{paddingLeft: 15, listStyle: 'circle'}}>
                        <li>Layout：布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身。</li>
                        <li>Header：顶部布局，自带默认样式。</li>
                        <li>Sider：侧边栏，自带默认样式及基本功能。</li>
                        <li>Content：内容部分，自带默认样式。</li>
                        <li>Footer：底部布局，自带默认样式。</li>
                    </ol>
                </blockquote>

                <h1 className="page-h1">代码演示</h1>

                <Label className="code-col">
                    <Label className="code-box">
                        <Demo1></Demo1>
                    </Label>
                </Label>

            </div>
        );
    }
});

module.exports = Page;