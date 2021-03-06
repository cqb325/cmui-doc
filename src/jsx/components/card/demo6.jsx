const React = require("react");
const BaseDemo = require("../BaseDemo");
const FontIcon = require("FontIcon");
const Card = require("Card");
const Button = require("Button");
const Code = require("../Code");

class Demo extends BaseDemo{

    setTitle(){
        this.refs.card.setTitle("New Card Title");
    }

    setContent(){
        this.refs.card.setContent(<div>
            <p>New Card content</p>
            <p>New Card content</p>
            <p>New Card content</p>
        </div>);
    }

    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <Card ref="card" title="Card Title" loadding={true} style={{width: 340}}>
                        <p>Card content</p>
                    </Card>

                    <div className="mt-15">
                        <Button onClick={this.setTitle.bind(this)}>改变标题</Button>
                        <Button onClick={this.setContent.bind(this)} className={"ml-10"}>改变内容</Button>
                    </div>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">栅格卡片</div>
                    <div>
                        在系统概览页面常常和栅格进行配合。
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const Card = require("Card");

ReactDOM.render(
<div style={{background: '#ECECEC', padding: '30px'}} className="mt-20">
    <Row className="card-row">
        <Col grid={1/3} className="card-col">
            <Card title="Card Title">
                <p>Card content</p>
            </Card>
        </Col>
        <Col grid={1/3} className="card-col">
            <Card title="Card Title">
                <p>Card content</p>
            </Card>
        </Col>
        <Col grid={1/3} className="card-col">
            <Card title="Card Title">
                <p>Card content</p>
            </Card>
        </Col>
    </Row>
</div>, mountNode);
`}
                    </Code>
                    <Code className="language-less">
                        {`
.card-row{
  margin-left: -8px;
  margin-right: -8px;
  .card-col{
    padding: 0 8px;
  }
}
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;