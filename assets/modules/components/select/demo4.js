define(["module", "react", "../BaseDemo", "Select", "../Code", "FontIcon", "./all_district"], function (module, React, BaseDemo, Select, Code, FontIcon, DISTRICT_DATA) {
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
            key: "selectProvince",
            value: function selectProvince(value, item) {
                if (item) {
                    this.refs.city.setData(item.children);
                    this.refs.district.setData([]);
                }
            }
        }, {
            key: "selectCity",
            value: function selectCity(value, item) {
                if (item) {
                    this.refs.district.setData(item.children);
                }
            }
        }, {
            key: "render",
            value: function render() {
                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "div",
                        { className: "code-box-demo" },
                        React.createElement(Select, { data: DISTRICT_DATA, placeholder: "\u7701\u4EFD", hasEmptyOption: "true", ref: "province", onChange: this.selectProvince.bind(this) }),
                        React.createElement("span", { className: "mr-10" }),
                        React.createElement(Select, { ref: "city", placeholder: "\u57CE\u5E02", onChange: this.selectCity.bind(this) }),
                        React.createElement("span", { className: "mr-10" }),
                        React.createElement(Select, { ref: "district", placeholder: "\u533A\u53BF" })
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-desc" },
                        React.createElement(
                            "div",
                            { className: "code-box-title" },
                            "\u591A\u9009"
                        ),
                        React.createElement(
                            "div",
                            null,
                            "\u591A\u9009\u9009\u62E9\u6846,\u8BBE\u7F6Emulti\u4E3Atrue\uFF0C sep\u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u591A\u503C\u4E4B\u95F4\u7684\u5206\u9694\u7B26",
                            React.createElement(FontIcon, { icon: "chevron-circle-down", ref: "collapse", className: "collapse", onClick: this.openCloseCode.bind(this) })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-src", ref: "boxSrc" },
                        React.createElement(
                            Code,
                            { className: "language-jsx" },
                            "\nconst Select = require(\"Select\");\n\nlet data = [\n    {\"id\":\"110000\",\"text\":\"\u5317\u4EAC\"},\n    {\"id\":\"120000\",\"text\":\"\u5929\u6D25\"},\n    {\"id\":\"310000\",\"text\":\"\u4E0A\u6D77\"}\n];\n\nReactDOM.render(\n<div>\n    <Select data={data} value=\"110000\" multi={true}></Select>\n    <div className=\"mt-10\"></div>\n    <Select data={data} value=\"110000\" multi={true} sep=\";\"></Select>\n</div>, mountNode);\n"
                        )
                    )
                );
            }
        }]);

        return Demo;
    }(BaseDemo);

    module.exports = Demo;
});
