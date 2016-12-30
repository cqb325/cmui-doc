const React = require('react');
const jQuery = require('jquery');
const ReactDOM = require('react-dom');

const ReactRouter = require('ReactRouter');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;

const Routers = require("Routers");

const APP = {
    sysName: "CMUI",
    menus: Routers
};


const SideBar = require("SideBar");

const App = React.createClass({
    render() {
        return (
            <div>
                <SideBar data={APP.menus} style={{width: '200px'} } header={APP.sysName} hasExpand={true}>
                    {this.props.children}
                </SideBar>
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
                    routers.push(<Route key={subIndex} path={subItem.link}
                                        getComponents={function (nextState, callback) {
                                            let module_url = _ctx + "/" + subItem.link;
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
            routers.push(<Route path={item.link} key={index} getComponents={function (nextState, callback) {
                let module_url = _ctx + "/" + item.link;
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