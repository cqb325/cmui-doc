const React = require('react');
const jQuery = require('jquery');
const ReactDOM = require('react-dom');

const ReactRouter = require('ReactRouter');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const FontIcon = require("FontIcon");
const Logo = require("Logo");
const store = require("store");

const Routers = require("Routers");

const APP = {
    sysName: "CMUI",
    menus: Routers
};


const SideBar = require("SideBar");
const Menu = require("Menu");
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.MenuItemGroup;

const App = React.createClass({
    getInitialState(){
        return {};
    },

    forwardModule(item){
        store.set("cm-cmui-doc-lastSelectKey", item.getKey());
        if(window.location.hash.indexOf(item.props.link) == -1){
            window.location.hash = item.props.link;
        }
        return;
    },

    renderMenu(){
        this.menuIndex = 0;
        return Routers.map((menuItem)=>{
            this.menuIndex ++;
            if(menuItem.link){
                let icon = menuItem.icon ? <FontIcon icon={menuItem.icon} style={{marginRight: "8px"}}></FontIcon> : null;
                return <Menu.Item key={this.menuIndex} identify={menuItem.identify} link={menuItem.link}>
                    {icon}{menuItem.text}
                </Menu.Item>
            }else{
                let icon = menuItem.icon ? <FontIcon icon={menuItem.icon}></FontIcon> : null;
                return <SubMenu open={true} key={this.menuIndex} title={<span>{icon}{menuItem.text}</span>}>
                    {this.renderSubMenu(menuItem.children)}
                </SubMenu>
            }
        });
    },

    renderSubMenu(subMenus){
        return subMenus.map((menuItem)=>{
            this.menuIndex ++;
            if(menuItem.link){
                let icon = menuItem.icon ? <FontIcon icon={menuItem.icon} style={{marginRight: "8px"}}></FontIcon> : null;
                return <Menu.Item key={this.menuIndex} identify={menuItem.identify} link={menuItem.link}>
                    {icon}{menuItem.text}
                </Menu.Item>
            }else{
                return <MenuItemGroup key={this.menuIndex} title={menuItem.text}>
                    {this.renderMenuItemGroup(menuItem.children)}
                </MenuItemGroup>
            }
        });
    },

    renderMenuItemGroup(subMenus){
        return subMenus.map((menuItem)=>{
            this.menuIndex ++;
            if(menuItem.link){
                let icon = menuItem.icon ? <FontIcon icon={menuItem.icon} style={{marginRight: "8px"}}></FontIcon> : null;
                return <Menu.Item key={this.menuIndex} identify={menuItem.identify} link={menuItem.link}>
                    {icon}{menuItem.text}
                </Menu.Item>
            }else{
                return null;
            }
        });
    },

    componentDidMount(){
        let key = store.get("cm-cmui-doc-lastSelectKey");
        if(key) {
            this.refs.menu.selectItem(key);
        }else{
            this.refs.menu.selectItem("31");
        }
    },

    render() {
        return (
            <div className="rc-desktop-wrap">
                <div className="menu-wrap">
                    <div style={{verticalAlign: "middle", borderBottom: "1px dashed #e7e7e7"}}>
                        <Logo></Logo> <span className="ml-5" style={{position: "relative", top: -11}}>CMUI</span>
                    </div>
                    <Menu style={{width: 200}}
                          ref="menu"
                          onSelect={this.forwardModule}
                    >
                        {this.renderMenu()}
                    </Menu>
                </div>
                <div className="desktop">
                    {this.props.children}
                </div>
            </div>
        )
    }
});

let routers = [];
APP.menus.map(function(item, index){
    var _ctx = "../modules";
    if(item.children){
        item.children.forEach(function(subItem, subIndex){
            if(subItem.link){
                if(subItem.link.indexOf(".html") != -1){
                    routers.push(<Route path={subItem.link} key={subIndex} />);
                }else {
                    routers.push(<Route key={subIndex} path={subItem.link.substring(2)}
                                        getComponents={function (nextState, callback) {
                                            let module_url = _ctx + "/" + subItem.link.substring(2);
                                            require.ensure([module_url], function (Widget) {
                                                callback(null, Widget);
                                            });
                                        }}/>);
                }
            }
        });
    }
    if(item.link) {
        if(item.link.indexOf(".html") != -1){
            routers.push(<Route path={item.link} key={index} />);
        }else {
            routers.push(<Route path={item.link.substring(2)} key={index} getComponents={function (nextState, callback) {
                let module_url = _ctx + "/" + item.link.substring(2);
                require.ensure([module_url], function (Widget) {
                    callback(null, Widget);

                });
            }}/>);
        }
    }

});

let Dashboard = React.createClass({
    render() {
        return <div>Welcome to the app!</div>
    }
});

ReactDOM.render((
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Dashboard} />
            {routers}
        </Route>
    </Router>
), document.querySelector("#desktop"));
