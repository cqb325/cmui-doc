define(["module", "react"], function (module, React) {
    "use strict";

    var CodeBox = React.createClass({
        displayName: "CodeBox",
        getInitialState: function getInitialState() {
            return {
                status: "close"
            };
        },
        render: function render() {
            return React.createElement(
                "div",
                { className: "code-box" },
                this.props.children
            );
        }
    });

    var CodeBoxDemo = React.createClass({
        displayName: "CodeBoxDemo",
        render: function render() {
            return React.createElement(
                "div",
                { className: "code-box-demo" },
                this.props.children
            );
        }
    });

    module.exports = CodeBox;
});
