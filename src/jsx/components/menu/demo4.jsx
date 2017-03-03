const React = require("react");
const BaseDemo = require("../BaseDemo");
const FontIcon = require("FontIcon");
const Menu = require("Menu");
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.MenuItemGroup;
const Code = require("../Code");
const Switch = require("Switch");

class Demo extends BaseDemo{
    /**
     * 设置主题
     * @param value
     */
    switchTheme(value){
        this.refs.menu.setTheme(value ? "light" : "dark");
    }

    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <Menu ref="menu" style={{width: 300}} modal="multi" theme="dark">
                        <SubMenu title={<span><FontIcon icon="th-large"></FontIcon>Navigation One</span>} open={true}>
                            <Menu.Item>item1</Menu.Item>
                            <Menu.Item>item2</Menu.Item>
                            <SubMenu title={<span>SubMenu</span>}>
                                <Menu.Item>item3</Menu.Item>
                                <Menu.Item>item4</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu title={<span><FontIcon icon="codepen"></FontIcon>Navigation Two</span>}>
                            <MenuItemGroup title="Item Group">
                                <Menu.Item>item21</Menu.Item>
                                <Menu.Item>item22</Menu.Item>
                            </MenuItemGroup>
                        </SubMenu>
                    </Menu>
                    <div className="mt-30">
                        <Switch checkedText="dark" checked={true} unCheckedText="light" onChange={this.switchTheme.bind(this)}></Switch>
                    </div>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">多开</div>
                    <div>
                        设置 modal 为 multi 可以设置菜单为多展开状态 默认为signle 单开状态。
                        设置 theme 为 dark 可以设置黑色主题  支持 light 和 dark 默认为 light。
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const FontIcon = require("FontIcon");
const Menu = require("Menu");
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.MenuItemGroup;


ReactDOM.render(
<div>
    <Menu ref="menu" style={{width: 300}} modal="multi" theme="dark">
        <SubMenu title={<span><FontIcon icon="th-large"></FontIcon>Navigation One</span>} open={true}>
            <Menu.Item>item1</Menu.Item>
            <Menu.Item>item2</Menu.Item>
            <SubMenu title={<span>SubMenu</span>}>
                <Menu.Item>item3</Menu.Item>
                <Menu.Item>item4</Menu.Item>
            </SubMenu>
        </SubMenu>
        <SubMenu title={<span><FontIcon icon="codepen"></FontIcon>Navigation Two</span>}>
            <MenuItemGroup title="Item Group">
                <Menu.Item>item21</Menu.Item>
                <Menu.Item>item22</Menu.Item>
            </MenuItemGroup>
        </SubMenu>
    </Menu>
    <div className="mt-30">
        <Switch checkedText="dark" unCheckedText="light" onChange={this.switchTheme.bind(this)}></Switch>
    </div>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;