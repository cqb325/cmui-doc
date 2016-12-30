define(["module", "react", 'react-dom', "classnames", "core/BaseComponent", 'Core', 'core/Ajax', "utils/ClickAway", 'internal/EnhancedButton', 'utils/strings', 'utils/Dom', 'utils/grids', 'FormControl'], function (module, React, ReactDOM, classnames, BaseComponent, Core, Ajax, clickAway, EnhancedButton, strings, Dom, grids, FormControl) {
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

    var substitute = strings.substitute;
    var PropTypes = React.PropTypes;

    var getGrid = grids.getGrid;

    var Select = function (_BaseComponent) {
        _inherits(Select, _BaseComponent);

        function Select(props) {
            _classCallCheck(this, Select);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Select).call(this, props));

            _this.selectedItems = {};
            var valueField = props.valueField || "id";
            var data = _this._rebuildData(props.data, props.value, valueField);

            _this.addState({
                value: props.value,
                active: false,
                data: data
            });

            _this.showOptions = _this.showOptions.bind(_this);
            _this.hideOptions = _this.hideOptions.bind(_this);
            return _this;
        }

        /**
         * 重置数据源
         * @method _rebuildData
         * @param data 原数据源
         * @param defaultValue 默认的值
         * @param valueField 默认的值字段
         * @returns {*}
         * @private
         */


        _createClass(Select, [{
            key: "_rebuildData",
            value: function _rebuildData(data, defaultValue, valueField) {
                if (!data) {
                    return null;
                }
                if (Core.isArray(data)) {
                    var one = data[0];
                    if (Core.isString(one)) {
                        return data.map(function (item) {
                            var option = { id: item, text: item };
                            if (item == defaultValue) {
                                this.selectedItems[item] = option;
                            }
                            return option;
                        });
                    }
                    if (Core.isObject(one)) {
                        if (defaultValue != undefined) {
                            data.forEach(function (item) {
                                if (item[valueField] == defaultValue) {
                                    this.selectedItems[defaultValue] = item;
                                }
                            }, this);
                        }
                        return data;
                    }

                    return null;
                }
                if (Core.isObject(data)) {
                    var ret = [];
                    for (var id in data) {
                        var item = { id: id, text: data[id] };
                        if (id == defaultValue) {
                            this.selectedItems[defaultValue] = item;
                        }
                        ret.push(item);
                    }

                    return ret;
                }

                return null;
            }
        }, {
            key: "_renderValues",
            value: function _renderValues() {
                var item = this.selectedItems[this.state.value];
                var textField = this.props.textField || "text",
                    label = item ? item[textField] : this.props.placeholder ? this.props.placeholder + "&nbsp;" : "&nbsp;",
                    className = classnames("cm-select-value", {
                    placeholder: !item && this.props.placeholder
                });

                var optionsTpl = this.props.optionsTpl,
                    html = label;
                if (optionsTpl && item) {
                    html = substitute(optionsTpl, item);
                }
                html += '<input type="hidden" name="' + this.props.name + '" value="' + this.state.value + '">';
                return React.createElement("span", { className: className, dangerouslySetInnerHTML: { __html: html } });
            }
        }, {
            key: "_renderFilter",
            value: function _renderFilter() {
                return "";
            }
        }, {
            key: "_selectItem",
            value: function _selectItem(item) {
                var valueField = this.props.valueField || "id";

                var value = null;
                if (!item) {
                    if (!this.props.multi) {
                        this.hideOptions();
                    }
                    this.selectedItems = {};
                } else {
                    if (this.props.multi) {
                        this.selectedItems[item[valueField]] = item;
                        value = this.getSelectedValues();
                    } else {
                        value = item[valueField];
                        this.selectedItems = {};
                        this.selectedItems[value] = item;
                        this.hideOptions();
                    }
                }

                this.setState({
                    value: value
                });

                if (this.props.onChange) {
                    this.props.onChange(value, item);
                }

                this.emit("change", value, item);
            }
        }, {
            key: "getSelectedValues",
            value: function getSelectedValues() {
                if (this.selectedItems) {
                    var ret = [];
                    for (var value in this.selectedItems) {
                        ret.push(value);
                    }
                    return ret.join(",");
                }
                return "";
            }
        }, {
            key: "getValue",
            value: function getValue() {
                return this.getSelectedValues();
            }
        }, {
            key: "setValue",
            value: function setValue(value) {
                var valueField = this.props.valueField || "id";
                var data = this.state.data;
                if (value == null || value == undefined || value == "") {
                    this.selectedItems = {};
                    this.setState({ value: value });
                }
                if (value != undefined) {
                    for (var i in data) {
                        var item = data[i];
                        if (item[valueField] == value) {
                            this.selectedItems[value] = item;
                            this.setState({ value: value });
                            break;
                        }
                    }
                }
            }
        }, {
            key: "_renderOptions",
            value: function _renderOptions() {
                var _props = this.props;
                var disabled = _props.disabled;
                var readOnly = _props.readOnly;
                var textField = _props.textField;
                var valueField = _props.valueField;
                var optionsTpl = _props.optionsTpl;


                var data = this.state.data;
                if (!data) {
                    return "";
                }
                var ret = [];
                if (!this.props.multi && this.props.hasEmptyOption) {
                    ret.push(React.createElement(
                        "li",
                        { key: -1, onClick: this._selectItem.bind(this, null) },
                        React.createElement(
                            "a",
                            { href: "javascript:void(0)" },
                            React.createElement(
                                EnhancedButton,
                                { initFull: true,
                                    touchRippleColor: 'rgba(0, 0, 0, 0.1)' },
                                this.props.choiceText || "--请选择--"
                            )
                        )
                    ));
                }
                data.forEach(function (item, index) {
                    textField = textField || "text";
                    valueField = valueField || "id";
                    var text = item[textField],
                        value = item[valueField];
                    var liClassName = classnames({
                        active: !!this.selectedItems[value]
                    });

                    var html = text;
                    if (optionsTpl) {
                        html = substitute(optionsTpl, item);
                    }
                    ret.push(React.createElement(
                        "li",
                        { className: liClassName, key: index, onClick: this._selectItem.bind(this, item) },
                        React.createElement(
                            "a",
                            { href: "javascript:void(0)" },
                            React.createElement(
                                EnhancedButton,
                                { initFull: true,
                                    touchRippleColor: 'rgba(0, 0, 0, 0.1)'
                                },
                                React.createElement("span", { dangerouslySetInnerHTML: { __html: html } })
                            )
                        )
                    ));
                }, this);

                return ret;
            }
        }, {
            key: "componentClickAway",
            value: function componentClickAway() {
                this.hideOptions();
            }
        }, {
            key: "showOptions",
            value: function showOptions() {
                var _this2 = this;

                if (this.props.readOnly || this.props.disabled) {
                    return;
                }
                if (this.state.active) {
                    this.hideOptions();
                    return;
                }

                var options = ReactDOM.findDOMNode(this.refs.options);
                options.style.display = 'block';

                var container = Dom.closest(options, ".cm-select");
                var offset = Dom.getOuterHeight(options) + 5;
                var dropup = Dom.overView(container, offset);

                Dom.withoutTransition(container, function () {
                    _this2.setState({ dropup: dropup });
                });

                this.bindClickAway();

                setTimeout(function () {
                    _this2.setState({ active: true });
                }, 0);
            }
        }, {
            key: "hideOptions",
            value: function hideOptions() {
                var _this3 = this;

                this.setState({ active: false });
                var options = ReactDOM.findDOMNode(this.refs.options);

                this.unbindClickAway();

                var time = 500;
                if (this.isLtIE9()) {
                    time = 0;
                }

                setTimeout(function () {
                    if (_this3.state.active === false) {
                        options.style.display = 'none';
                    }
                }, time);
            }
        }, {
            key: "setData",
            value: function setData(data) {
                data = this._rebuildData(data);
                this.setState({
                    data: data,
                    value: ""
                });
            }
        }, {
            key: "componentWillMount",
            value: function componentWillMount() {
                var _this4 = this;

                if (this.props.url) {
                    (function () {
                        var scope = _this4;
                        Ajax.get(_this4.props.url, {}, function (data) {
                            if (data) {
                                data = scope._rebuildData(data);
                                scope.setState({
                                    data: data
                                });
                            }
                        });
                    })();
                }
            }
        }, {
            key: "render",
            value: function render() {
                var _props2 = this.props;
                var className = _props2.className;
                var disabled = _props2.disabled;
                var readOnly = _props2.readOnly;
                var style = _props2.style;
                var grid = _props2.grid;

                className = classnames("cm-select", getGrid(grid), {
                    active: this.state.active,
                    disabled: disabled || readOnly,
                    dropup: this.state.dropup,
                    hasEmptyOption: this.props.hasEmptyOption
                });

                var text = this._renderValues();
                var filter = this._renderFilter();
                var options = this._renderOptions();
                return React.createElement(
                    "div",
                    { className: className, style: style, onClick: this.showOptions },
                    text,
                    React.createElement("span", { className: "cm-select-cert" }),
                    React.createElement(
                        "div",
                        { className: "cm-select-options-wrap" },
                        React.createElement(
                            "div",
                            { ref: "options", className: "cm-select-options" },
                            filter,
                            React.createElement(
                                "ul",
                                null,
                                options
                            )
                        )
                    )
                );
            }
        }]);

        return Select;
    }(BaseComponent);

    Select = clickAway(Select);

    Select.propTypes = {
        /**
         * 数据源
         * @attribute data
         * @type {Array/Object}
         */
        data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
        /**
         * 默认选中的值
         * @attribute value
         * @type {String}
         */
        value: PropTypes.string,
        /**
         * 自定义class
         * @attribute className
         * @type {String}
         */
        className: PropTypes.string,
        /**
         * 禁用
         * @attribute disabled
         * @type {Boolean}
         */
        disabled: PropTypes.bool,
        /**
         * 只读
         * @attribute readOnly
         * @type {Boolean}
         */
        readOnly: PropTypes.bool,
        /**
         * 多选状态
         * @attribute multi
         * @type {Boolean}
         */
        multi: PropTypes.bool,
        /**
         * 自定义样式
         * @attribute style
         * @type {Object}
         */
        style: PropTypes.object,
        /**
         * 显示字段
         * @attribute textField
         * @type {String}
         */
        textField: PropTypes.string,
        /**
         * 取值字段
         * @attribute valueField
         * @type {String}
         */
        valueField: PropTypes.string,
        /**
         * 请选择文字
         * @attribute choiceText
         * @type {String}
         */
        choiceText: PropTypes.string,
        /**
         * holder文字
         * @attribute placeholder
         * @type {String}
         */
        placeholder: PropTypes.string
    };

    FormControl.register(Select, "select");

    module.exports = Select;
});
