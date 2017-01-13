const React = require("react");
const BaseDemo = require("../BaseDemo");
const FontIcon = require("FontIcon");
const Card = require("Card");
const Code = require("../Code");

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <Card title="Card Title" style={{ width: 300 }} tools={<a href="#">More</a>}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">典型用法</div>
                    <div>
                        包含标题、内容、操作区域。
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const Card = require("Card");

ReactDOM.render(
<Card title="Card Title" style={{ width: 300 }} tools={<a href="#">More</a>}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
</Card>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;