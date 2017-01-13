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
                        <Col grid={{width: 1/4, responsive: "sm"}} className="demo-col">grid(1/4)</Col>
                        <Col grid={{width: 1/4, responsive: "sm"}} className="demo-col lighter">grid(1/4)</Col>
                        <Col grid={{width: 1/4, responsive: "sm"}} className="demo-col">grid(1/4)</Col>
                        <Col grid={{width: 1/4, responsive: "sm"}} className="demo-col lighter">grid(1/4)</Col>
                    </Row>

                    <Row className="demo-row">
                        <Col grid={{width: 1/4, responsive: "lg"}} className="demo-col">grid(1/4)</Col>
                        <Col grid={{width: 1/4, responsive: "lg"}} className="demo-col lighter">grid(1/4)</Col>
                        <Col grid={{width: 1/4, responsive: "lg"}} className="demo-col">grid(1/4)</Col>
                        <Col grid={{width: 1/4, responsive: "lg"}} className="demo-col lighter">grid(1/4)</Col>
                    </Row>

                    <Row className="demo-row">
                        <Col grid={{width: 1/4, responsive: "xl"}} className="demo-col">grid(1/4)</Col>
                        <Col grid={{width: 1/4, responsive: "xl"}} className="demo-col lighter">grid(1/4)</Col>
                        <Col grid={{width: 1/4, responsive: "xl"}} className="demo-col">grid(1/4)</Col>
                        <Col grid={{width: 1/4, responsive: "xl"}} className="demo-col lighter">grid(1/4)</Col>
                    </Row>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">响应式布局</div>
                    <div>
                        栅格布局 为响应式布局预设了四个尺寸，sm/md/lg/xl。
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
        <Col grid={{width: 1/4, responsive: "sm"}} className="demo-col">grid(1/4)</Col>
        <Col grid={{width: 1/4, responsive: "sm"}} className="demo-col lighter">grid(1/4)</Col>
        <Col grid={{width: 1/4, responsive: "sm"}} className="demo-col">grid(1/4)</Col>
        <Col grid={{width: 1/4, responsive: "sm"}} className="demo-col lighter">grid(1/4)</Col>
    </Row>

    <Row className="demo-row">
        <Col grid={{width: 1/4, responsive: "lg"}} className="demo-col">grid(1/4)</Col>
        <Col grid={{width: 1/4, responsive: "lg"}} className="demo-col lighter">grid(1/4)</Col>
        <Col grid={{width: 1/4, responsive: "lg"}} className="demo-col">grid(1/4)</Col>
        <Col grid={{width: 1/4, responsive: "lg"}} className="demo-col lighter">grid(1/4)</Col>
    </Row>

    <Row className="demo-row">
        <Col grid={{width: 1/4, responsive: "xl"}} className="demo-col">grid(1/4)</Col>
        <Col grid={{width: 1/4, responsive: "xl"}} className="demo-col lighter">grid(1/4)</Col>
        <Col grid={{width: 1/4, responsive: "xl"}} className="demo-col">grid(1/4)</Col>
        <Col grid={{width: 1/4, responsive: "xl"}} className="demo-col lighter">grid(1/4)</Col>
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