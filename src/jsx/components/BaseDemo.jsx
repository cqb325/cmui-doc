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

    componentWillMount(){
        // if(this.url) {
        //     Ajax.ajax({
        //         url: "../src/jsx/components/button/demo1.jsx",
        //         dataType: "text",
        //         method: "get"
        //     }).then((data)=> {
        //         this.setState({src: `${data}`});
        //     });
        // }
    }

    componentDidMount(){
        let block = ReactDOM.findDOMNode(this.refs.code);
        SyntaxHighlighter.highlight({}, block);
    }
}

module.exports = BaseDemo;