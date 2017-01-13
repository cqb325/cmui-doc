const React = require("react");
const ReactDOM = require("react-dom");
const Ajax = require("core/Ajax");

class BaseDemo extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            src: ``
        };

        this.url = "";
    }

    openCloseCode(){
        var collapse = ReactDOM.findDOMNode(this.refs.collapse);
        $(collapse).toggleClass("active");
        var boxSrc = ReactDOM.findDOMNode(this.refs.boxSrc);
        $(boxSrc).toggleClass("active");
    }
}

module.exports = BaseDemo;