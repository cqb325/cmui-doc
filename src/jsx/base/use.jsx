const React = require("react");
const ReactDOM = require("react-dom");

let Page = React.createClass({

    render(){
        return (
            <div className="content">
                <h1 className="page-h1">开始使用</h1>
                <blockquote className="page-tip">
                    使用方式
                </blockquote>
            </div>
        );
    }
});

module.exports = Page;