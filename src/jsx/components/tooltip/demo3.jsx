const React = require("react");
const BaseDemo = require("../BaseDemo");
const FontIcon = require("FontIcon");
const Tooltip = require("Tooltip");
const Row = require("Row");
const Col = require("Col");
const Code = require("../Code");

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <Row>
                        <Col grid={0.2}>&nbsp;</Col>
                        <Col grid={0.2}>
                            <Tooltip title="tip text" align="topLeft">
                                <span className="align-item">TL</span>
                            </Tooltip>
                        </Col>
                        <Col grid={0.2}>
                            <Tooltip title="tip text" align="top">
                                <span className="align-item">Top</span>
                            </Tooltip>
                        </Col>
                        <Col grid={0.2}>
                            <Tooltip title="tip text" align="topRight">
                                <span className="align-item">TR</span>
                            </Tooltip>
                        </Col>
                        <Col grid={0.2}>&nbsp;</Col>
                    </Row>
                    <Row className="mt-30">
                        <Col grid={0.2}>
                            <Tooltip title="tip text" align="leftTop">
                                <span className="align-item">LT</span>
                            </Tooltip>
                        </Col>
                        <Col grid={0.2}>&nbsp;</Col>
                        <Col grid={0.2}>&nbsp;</Col>
                        <Col grid={0.2}>&nbsp;</Col>
                        <Col grid={0.2}>
                            <Tooltip title="tip text" align="rightTop">
                                <span className="align-item">RT</span>
                            </Tooltip>
                        </Col>
                    </Row>
                    <Row className="mt-30">
                        <Col grid={0.2}>
                            <Tooltip title="tip text" align="left">
                                <span className="align-item">Left</span>
                            </Tooltip>
                        </Col>
                        <Col grid={0.2}>&nbsp;</Col>
                        <Col grid={0.2}>&nbsp;</Col>
                        <Col grid={0.2}>&nbsp;</Col>
                        <Col grid={0.2}>
                            <Tooltip title="tip text" align="right">
                                <span className="align-item">Right</span>
                            </Tooltip>
                        </Col>
                    </Row>
                    <Row className="mt-30">
                        <Col grid={0.2}>
                            <Tooltip title="tip text" align="leftBottom">
                                <span className="align-item">LB</span>
                            </Tooltip>
                        </Col>
                        <Col grid={0.2}>&nbsp;</Col>
                        <Col grid={0.2}>&nbsp;</Col>
                        <Col grid={0.2}>&nbsp;</Col>
                        <Col grid={0.2}>
                            <Tooltip title="tip text" align="rightBottom">
                                <span className="align-item">RB</span>
                            </Tooltip>
                        </Col>
                    </Row>
                    <Row className="mt-30">
                        <Col grid={0.2}>&nbsp;</Col>
                        <Col grid={0.2}>
                            <Tooltip title="tip text" align="bottomLeft">
                                <span className="align-item">BL</span>
                            </Tooltip>
                        </Col>
                        <Col grid={0.2}>
                            <Tooltip title="tip text" align="bottom">
                                <span className="align-item">Bottom</span>
                            </Tooltip>
                        </Col>
                        <Col grid={0.2}>
                            <Tooltip title="tip text" align="bottomRight">
                                <span className="align-item">BR</span>
                            </Tooltip>
                        </Col>
                        <Col grid={0.2}>&nbsp;</Col>
                    </Row>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">位置</div>
                    <div>
                        支持12个不同的显示位置，通过设置align属性设置。
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const Tooltip = require("Tooltip");
const Row = require("Row");
const Col = require("Col");

ReactDOM.render(
<div>
    <Row>
        <Col grid={0.2}>&nbsp;</Col>
        <Col grid={0.2}>
            <Tooltip title="tip text" align="topLeft">
                <span className="align-item">TL</span>
            </Tooltip>
        </Col>
        <Col grid={0.2}>
            <Tooltip title="tip text" align="top">
                <span className="align-item">Top</span>
            </Tooltip>
        </Col>
        <Col grid={0.2}>
            <Tooltip title="tip text" align="topRight">
                <span className="align-item">TR</span>
            </Tooltip>
        </Col>
        <Col grid={0.2}>&nbsp;</Col>
    </Row>
    <Row className="mt-30">
        <Col grid={0.2}>
            <Tooltip title="tip text" align="leftTop">
                <span className="align-item">LT</span>
            </Tooltip>
        </Col>
        <Col grid={0.2}>&nbsp;</Col>
        <Col grid={0.2}>&nbsp;</Col>
        <Col grid={0.2}>&nbsp;</Col>
        <Col grid={0.2}>
            <Tooltip title="tip text" align="rightTop">
                <span className="align-item">RT</span>
            </Tooltip>
        </Col>
    </Row>
    <Row className="mt-30">
        <Col grid={0.2}>
            <Tooltip title="tip text" align="left">
                <span className="align-item">Left</span>
            </Tooltip>
        </Col>
        <Col grid={0.2}>&nbsp;</Col>
        <Col grid={0.2}>&nbsp;</Col>
        <Col grid={0.2}>&nbsp;</Col>
        <Col grid={0.2}>
            <Tooltip title="tip text" align="right">
                <span className="align-item">Right</span>
            </Tooltip>
        </Col>
    </Row>
    <Row className="mt-30">
        <Col grid={0.2}>
            <Tooltip title="tip text" align="leftBottom">
                <span className="align-item">LB</span>
            </Tooltip>
        </Col>
        <Col grid={0.2}>&nbsp;</Col>
        <Col grid={0.2}>&nbsp;</Col>
        <Col grid={0.2}>&nbsp;</Col>
        <Col grid={0.2}>
            <Tooltip title="tip text" align="rightBottom">
                <span className="align-item">RB</span>
            </Tooltip>
        </Col>
    </Row>
    <Row className="mt-30">
        <Col grid={0.2}>&nbsp;</Col>
        <Col grid={0.2}>
            <Tooltip title="tip text" align="bottomLeft">
                <span className="align-item">BL</span>
            </Tooltip>
        </Col>
        <Col grid={0.2}>
            <Tooltip title="tip text" align="bottom">
                <span className="align-item">Bottom</span>
            </Tooltip>
        </Col>
        <Col grid={0.2}>
            <Tooltip title="tip text" align="bottomRight">
                <span className="align-item">BR</span>
            </Tooltip>
        </Col>
        <Col grid={0.2}>&nbsp;</Col>
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