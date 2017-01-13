const React = require("react");
const BaseDemo = require("../BaseDemo");
const Row = require("Row");
const Col = require("Col");
const FontIcon = require("FontIcon");
const Code = require("../Code");

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <Row className="demo-row">
                        <Col grid={1/4} className="demo-col">grid(1/4)</Col>
                        <Col grid={{width: 1/4, offset: 1/2}} className="demo-col">{`grid{{width: 1/4, offset: 1/2}}`}</Col>
                    </Row>
                    <Row className="demo-row">
                        <Col grid={{width: 1/3, offset: 1/2}} className="demo-col">{`grid{{width: 1/3, offset: 1/2}}`}</Col>
                    </Row>
                    <Row className="demo-row">
                        <Col grid={{width: 1/2, offset: 1/6}} className="demo-col">{`grid{{width: 1/2, offset: 1/6}}`}</Col>
                    </Row>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">左右偏移</div>
                    <div>
                        使用 grid 的 offset 可以将列向右侧偏。例如，offset={1/2} 将元素向右侧偏移了 50% 的宽度。
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const Row = require("Row");
const Col = require("Col");

ReactDOM.render(
<div>
    <Row className="demo-row">
        <Col grid={1/4} className="demo-col">grid(1/4)</Col>
        <Col grid={{width: 1/4, offset: 1/2}} className="demo-col">{'grid{{width: 1/4, offset: 1/2}}'}</Col>
    </Row>
    <Row className="demo-row">
        <Col grid={{width: 1/3, offset: 1/2}} className="demo-col">{'grid{{width: 1/3, offset: 1/2}}'}</Col>
    </Row>
    <Row className="demo-row">
        <Col grid={{width: 1/2, offset: 1/6}} className="demo-col">{'grid{{width: 1/2, offset: 1/6}}'}</Col>
    </Row>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;