define(['react', 'jquery', 'react-dom', 'ReactRouter', "Routers", "SideBar"], function (React, jQuery, ReactDOM, ReactRouter, Routers, SideBar) {
    'use strict';

    var Router = ReactRouter.Router;
    var Route = ReactRouter.Route;
    var IndexRoute = ReactRouter.IndexRoute;

    var APP = {
        sysName: "CMUI",
        menus: Routers
    };

    var App = React.createClass({
        displayName: 'App',
        render: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    SideBar,
                    { data: APP.menus, style: { width: '200px' }, header: APP.sysName, hasExpand: true },
                    this.props.children
                )
            );
        }
    });

    var routers = [];
    APP.menus.map(function (item, index) {
        var _ctx = "../modules";
        if (item.children) {
            item.children.forEach(function (subItem, subIndex) {
                if (subItem.link) {
                    if (subItem.link.indexOf(".html") != -1) {
                        routers.push(React.createElement(Route, { path: subItem.link, key: subIndex }));
                    } else {
                        routers.push(React.createElement(Route, { key: subIndex, path: subItem.link,
                            getComponents: function getComponents(nextState, callback) {
                                var module_url = _ctx + "/" + subItem.link;
                                require.ensure([module_url], function (Widget) {
                                    callback(null, Widget);
                                });
                            } }));
                    }
                }
            });
        }
        if (item.link) {
            if (item.link.indexOf(".html") != -1) {
                routers.push(React.createElement(Route, { path: item.link, key: index }));
            } else {
                routers.push(React.createElement(Route, { path: item.link, key: index, getComponents: function getComponents(nextState, callback) {
                        var module_url = _ctx + "/" + item.link;
                        require.ensure([module_url], function (Widget) {
                            callback(null, Widget);
                        });
                    } }));
            }
        }
    });

    var Dashboard = React.createClass({
        displayName: 'Dashboard',
        render: function render() {
            return React.createElement(
                'div',
                null,
                'Welcome to the app!'
            );
        }
    });

    ReactDOM.render(React.createElement(
        Router,
        null,
        React.createElement(
            Route,
            { path: '/', component: App },
            React.createElement(IndexRoute, { component: Dashboard }),
            routers
        )
    ), document.querySelector("#desktop"));
});
