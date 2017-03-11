define(["module", "react", "../BaseDemo", "FontIcon", "Tree", "../Code"], function (module, React, BaseDemo, FontIcon, Tree, Code) {
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

    var Demo = function (_BaseDemo) {
        _inherits(Demo, _BaseDemo);

        function Demo() {
            _classCallCheck(this, Demo);

            return _possibleConstructorReturn(this, (Demo.__proto__ || Object.getPrototypeOf(Demo)).apply(this, arguments));
        }

        _createClass(Demo, [{
            key: "render",
            value: function render() {
                var treeData = [{
                    id: 0,
                    text: "中国",
                    open: true,
                    children: [{
                        id: '1',
                        text: "北京",
                        children: [{ id: '11', text: "海淀" }, { id: '12', text: "朝阳" }]
                    }, {
                        id: '2',
                        text: "上海"
                    }]
                }];

                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "div",
                        { className: "code-box-demo" },
                        React.createElement(Tree, { data: treeData })
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-desc" },
                        React.createElement(
                            "div",
                            { className: "code-box-title" },
                            "\u57FA\u672C\u7528\u6CD5"
                        ),
                        React.createElement(
                            "div",
                            null,
                            "\u7B80\u5355\u7528\u6CD5",
                            React.createElement(FontIcon, { icon: "chevron-circle-down", ref: "collapse", className: "collapse", onClick: this.openCloseCode.bind(this) })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-src", ref: "boxSrc" },
                        React.createElement(
                            Code,
                            { className: "language-jsx" },
                            "\nconst Tree = require(\"Tree\");\n\nlet treeData = [{\n    id: 0,\n    text: \"\u4E2D\u56FD\",\n    open: true,\n    children: [\n        {\n            id: '1',\n            text: \"\u5317\u4EAC\",\n            children: [{id: '11', text: \"\u6D77\u6DC0\"},{id: '12', text: \"\u671D\u9633\"}]\n        },{\n            id: '2',\n            text: \"\u4E0A\u6D77\"\n        }\n    ]\n}];\n\nReactDOM.render(\n<div>\n   <Tree data={treeData}></Tree>\n</div>, mountNode);\n"
                        )
                    )
                );
            }
        }]);

        return Demo;
    }(BaseDemo);

    module.exports = Demo;
});
