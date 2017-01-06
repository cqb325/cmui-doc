define(["module", "react", "react-dom", "core/Ajax"], function (module, React, ReactDOM, Ajax) {
    "use strict";

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var BaseDemo = function (_React$Component) {
        _inherits(BaseDemo, _React$Component);

        function BaseDemo(props) {
            _classCallCheck(this, BaseDemo);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BaseDemo).call(this, props));

            _this.state = {
                src: ""
            };

            _this.url = "";
            return _this;
        }

        _createClass(BaseDemo, [{
            key: "openCloseCode",
            value: function openCloseCode() {
                var collapse = ReactDOM.findDOMNode(this.refs.collapse);
                $(collapse).toggleClass("active");
                var boxSrc = ReactDOM.findDOMNode(this.refs.boxSrc);
                $(boxSrc).toggleClass("active");
            }
        }, {
            key: "componentWillMount",
            value: function componentWillMount() {
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
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                var block = ReactDOM.findDOMNode(this.refs.code);
                SyntaxHighlighter.highlight({}, block);
                hljs.highlightBlock(block);
            }
        }]);

        return BaseDemo;
    }(React.Component);

    module.exports = BaseDemo;
});
