define(["module", "react", "Core", "classnames", "core/BaseComponent", "moment", "utils/Dom"], function (module, React, Core, classnames, BaseComponent, moment, Dom) {
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

    var PropTypes = React.PropTypes;

    var Table = function (_BaseComponent) {
        _inherits(Table, _BaseComponent);

        function Table(props) {
            _classCallCheck(this, Table);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Table).call(this, props));

            _this.addState({
                data: props.data || [],
                header: props.header
            });
            return _this;
        }

        /**
         * 设置数据
         * @method setData
         * @param data {Array} 表体数据
         */


        _createClass(Table, [{
            key: "setData",
            value: function setData(data) {
                this.setState({ data: data });
            }
        }, {
            key: "resetData",
            value: function resetData(data) {
                this.setState({ header: data.header, data: data.data });
            }
        }, {
            key: "_renderHeader",
            value: function _renderHeader() {
                var header = this.state.header,
                    cols = void 0;
                if (header) {
                    cols = header.map(function (col, colIndex) {
                        if (col.hide) {
                            return null;
                        } else {
                            return React.createElement(
                                "th",
                                { key: "header_" + colIndex, className: col.className, width: col.width,
                                    name: col.name },
                                col.text
                            );
                        }
                    });
                }
                return React.createElement(
                    "thead",
                    null,
                    React.createElement(
                        "tr",
                        null,
                        cols
                    )
                );
            }
        }, {
            key: "_renderBody",
            value: function _renderBody() {
                var data = this.state.data,
                    header = this.state.header,
                    rows = void 0;

                if (data && data.length && header) {
                    rows = data.map(function (row, rowIndex) {
                        var cells = header.map(function (col, colIndex) {
                            if (col.hide) {
                                return null;
                            } else {
                                var value = row[col.name];
                                value = this._formatData(value, col, row);
                                var tip = "";
                                if (React.isValidElement(value)) {
                                    if (col.tip) {
                                        tip = value.props.children;
                                    }
                                    return React.createElement(
                                        "td",
                                        { key: "cell_" + rowIndex + "_" + colIndex, title: tip },
                                        value
                                    );
                                }

                                if (value instanceof Array) {
                                    value = value.join("");
                                    col.tip = false;
                                }

                                if (col.tip) {
                                    tip = value + "";
                                    if ('<' == tip.charAt(0)) {
                                        tip = Dom.dom(tip).text();
                                    }
                                }
                                return React.createElement("td", { key: "cell_" + rowIndex + "_" + colIndex, title: tip,
                                    dangerouslySetInnerHTML: { __html: value } });
                            }
                        }, this);

                        return React.createElement(
                            "tr",
                            { key: "row_" + rowIndex },
                            cells
                        );
                    }, this);
                }

                return React.createElement(
                    "tbody",
                    null,
                    rows
                );
            }
        }, {
            key: "_formatData",
            value: function _formatData(value, col, row) {
                if (col.format) {
                    var formatFun = void 0;
                    if (Core.isFunction(col.format)) {
                        formatFun = col.format;
                    } else if (Core.isString(col.format)) {
                        formatFun = Table.Formats[col.format];
                    }
                    if (formatFun) {
                        value = formatFun(value, col, row);
                    }
                }

                return value;
            }
        }, {
            key: "render",
            value: function render() {
                var className = classnames("cm-table", "table", this.props.className, {
                    "table-bordered": this.props.bordered,
                    "table-striped": this.props.striped,
                    "table-hover": this.props.hover
                });
                var header = this._renderHeader();
                var body = this._renderBody();
                return React.createElement(
                    "div",
                    { className: "table-responsive" },
                    React.createElement(
                        "table",
                        { className: className, style: this.props.style },
                        header,
                        body
                    )
                );
            }
        }]);

        return Table;
    }(BaseComponent);

    Table.propTypes = {
        /**
         * 表中数据
         * @attribute data
         * @type {Array}
         */
        data: PropTypes.array,
        /**
         * 表头定义
         * @attribute header
         * @type {Array}
         */
        header: PropTypes.array,
        /**
         * 宽度
         * @attribute width
         * @type {String}
         * @default auto/100%
         */
        width: PropTypes.string,
        /**
         * 高度
         * @attribute height
         * @type {String}
         * @default auto
         */
        height: PropTypes.string,
        /**
         * 是否显示边框
         * @attribute bordered
         * @type {Boolean}
         * @default false
         */
        bordered: PropTypes.bool,
        /**
         * 是否交替显示背景
         * @attribute striped
         * @type {Boolean}
         * @default false
         */
        striped: PropTypes.bool,
        /**
         * 鼠标滑过是否显示背景色
         * @attribute hover
         * @type {Boolean}
         * @default false
         */
        hover: PropTypes.bool
    };

    Table.Formats = {
        /**
         * 日期格式化
         * @param value
         * @param column
         * @param row
         * @returns {*}
         * @constructor
         */
        DateFormat: function DateFormat(value, column, row) {
            if (value) {
                return moment(value).format("YYYY-MM-DD");
            } else {
                return "";
            }
        },

        /**
         * 日期时间格式化
         * @param value
         * @param column
         * @param row
         * @returns {*}
         * @constructor
         */
        DateTimeFormat: function DateTimeFormat(value, column, row) {
            if (value) {
                return moment(value).format("YYYY-MM-DD HH:mm:ss");
            } else {
                return "";
            }
        }
    };

    module.exports = Table;
});
