const React = require("react");
const BaseDemo = require("../BaseDemo");
const FontIcon = require("FontIcon");
const Dropdown = require("Dropdown");
const Code = require("../Code");
const Menu = require('Menu');

class Demo extends BaseDemo{
    render(){
        let menu = <Menu>
            <Menu.Item>item1</Menu.Item>
            <Menu.Item>item2</Menu.Item>
            <Menu.Item>退出</Menu.Item>
            <Menu.Item disabled={true}>item4(disabled)</Menu.Item>
        </Menu>;

        return (
            <div>
                <div className="code-box-demo">
                    <Dropdown overlay={menu}>欢迎您，admin</Dropdown>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">基本用法</div>
                    <div>
                        简单用法
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const Dropdown = require("Dropdown");
const Menu = require('Menu');

let menu = <Menu>
            <Menu.Item>item1</Menu.Item>
            <Menu.Item>item2</Menu.Item>
            <Menu.Item>退出</Menu.Item>
            <Menu.Item disabled={true}>item4(disabled)</Menu.Item>
        </Menu>;

ReactDOM.render(
<Dropdown action="click" overlay={menu}>欢迎您，admin</Dropdown>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;