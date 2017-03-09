const React = require("react");
const BaseDemo = require("../BaseDemo");
const FontIcon = require("FontIcon");
const Table = require("Table2");
const Code = require("../Code");

class Demo extends BaseDemo{
    render(){
        let columns = [
            {name: "field1", text: "数字"},
            {name: "field2", text: "日期", format: "DateFormat"},
            {name: "field3", text: "文字"}
        ];
        let data = [];
        for(let i = 0; i < 10; i++){
            data.push({
                field1: i+1,
                field2: new Date(),
                field3: "文字abc"
            });
        }
        return (
            <div>
                <div className="code-box-demo">
                    <Table data={data} columns={columns}></Table>
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