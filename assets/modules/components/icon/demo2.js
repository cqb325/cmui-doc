define(["module", "react", "../BaseDemo", "FontIcon"], function (module, React, BaseDemo, FontIcon) {
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

            return _possibleConstructorReturn(this, Object.getPrototypeOf(Demo).apply(this, arguments));
        }

        _createClass(Demo, [{
            key: "render",
            value: function render() {
                var style = { color: "#20A0FF" };
                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "div",
                        { className: "code-box-demo" },
                        React.createElement(
                            FontIcon,
                            { icon: "camera-retro", style: style },
                            " normal size"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            FontIcon,
                            { icon: "camera-retro", style: style, size: "lg" },
                            " lg size"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            FontIcon,
                            { icon: "camera-retro", style: style, size: "2x" },
                            " 2x size"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            FontIcon,
                            { icon: "camera-retro", style: style, size: "3x" },
                            " 3x size"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            FontIcon,
                            { icon: "camera-retro", style: style, size: "4x" },
                            " 4x size"
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            FontIcon,
                            { icon: "camera-retro", style: style, size: "5x" },
                            " 5x size"
                        ),
                        React.createElement("br", null)
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-desc" },
                        React.createElement(
                            "div",
                            { className: "code-box-title" },
                            "图标尺寸"
                        ),
                        React.createElement(
                            "div",
                            null,
                            "设置FontIcon的 size 属性可以调节图标的大小， size 可设的值为 lg、2x、3x、4x、5x和不设置",
                            React.createElement(FontIcon, { icon: "chevron-circle-down", ref: "collapse", className: "collapse", onClick: this.openCloseCode.bind(this) })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-src", ref: "boxSrc" },
                        React.createElement(
                            "pre",
                            { className: "brush: js", ref: "code" },
                            "\nconst FontIcon = require(\"FontIcon\");\n\nReactDOM.render(\n<div>\n    <FontIcon icon=\"camera-retro\" style={style}> normal size</FontIcon><br/>\n    <FontIcon icon=\"camera-retro\" style={style} size=\"lg\"> lg size</FontIcon><br/>\n    <FontIcon icon=\"camera-retro\" style={style} size=\"2x\"> 2x size</FontIcon><br/>\n    <FontIcon icon=\"camera-retro\" style={style} size=\"3x\"> 3x size</FontIcon><br/>\n    <FontIcon icon=\"camera-retro\" style={style} size=\"4x\"> 4x size</FontIcon><br/>\n    <FontIcon icon=\"camera-retro\" style={style} size=\"5x\"> 5x size</FontIcon><br/>\n</div>, mountNode);\n"
                        )
                    )
                );
            }
        }]);

        return Demo;
    }(BaseDemo);

    module.exports = Demo;
});
