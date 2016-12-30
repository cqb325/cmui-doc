const React = require("react");
const Label = require("Label");
const Demo4 = require("../components/icon/demo4");
const Demo5 = require("../components/icon/demo5");
const Demo6 = require("../components/icon/demo6");
const Demo7 = require("../components/icon/demo7");
const Demo8 = require("../components/icon/demo8");
const Demo9 = require("../components/icon/demo9");
const Demo10 = require("../components/icon/demo10");
const Demo11 = require("../components/icon/demo11");


let Page = React.createClass({

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">FontIcon 字体图标</h1>
                <blockquote className="page-tip">
                    语义化的矢量图形。
                </blockquote>

                <h1 className="page-h1">代码演示</h1>

                <h1 className="page-h1">Web Application Icons</h1>
                <Label grid={1}>
                    <Demo4/>
                </Label>

                <h1 className="page-h1">Accessibility Icons</h1>
                <Label grid={1}>
                    <Demo5/>
                </Label>

                <h1 className="page-h1">Hand Icons</h1>
                <Label grid={1}>
                    <Demo6/>
                </Label>

                <h1 className="page-h1">Transportation Icons</h1>
                <Label grid={1}>
                    <Demo7/>
                </Label>

                <h1 className="page-h1">Gender Icons</h1>
                <Label grid={1}>
                    <Demo8/>
                </Label>

                <h1 className="page-h1">File Type Icons</h1>
                <Label grid={1}>
                    <Demo9/>
                </Label>

                <h1 className="page-h1">Spinner Icons</h1>
                <Label grid={1}>
                    <Demo10/>
                </Label>

                <Demo11/>
            </div>
        );
    }
});

module.exports = Page;