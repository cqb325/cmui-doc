const React = require("react");

class Code extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this._hightlight();
    }

    componentDidUpdate(){
        this._hightlight();
    }

    _hightlight(){
        Prism.highlightElement(this.refs.code, false);
    }

    render(){
        let {className, children} = this.props;
        return (
            <code ref="code" className={className}>
                {children}
            </code>
        );
    }
}

module.exports = Code;