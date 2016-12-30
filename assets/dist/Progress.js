define(["module", "react", "classnames", "core/BaseComponent", 'utils/grids'], function (module, React, classnames, BaseComponent, grids) {
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

    var getGrid = grids.getGrid;

    /**
     * Progress 类
     * @class Progress
     * @constructor
     * @extend BaseComponent
     */

    var Progress = function (_BaseComponent) {
        _inherits(Progress, _BaseComponent);

        function Progress(props) {
            _classCallCheck(this, Progress);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Progress).call(this, props));

            _this.addState({
                value: parseFloat(props.value) || parseFloat(props.min) || 0,
                min: parseFloat(props.min) || 0,
                max: parseFloat(props.max) || 100
            });
            return _this;
        }

        _createClass(Progress, [{
            key: "update",
            value: function update(value) {
                if (this._isMounted) {
                    this.setState({
                        value: value
                    });
                }
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this._isMounted = true;
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this._isMounted = false;
            }
        }, {
            key: "render",
            value: function render() {
                var _props = this.props;
                var className = _props.className;
                var style = _props.style;
                var disabled = _props.disabled;
                var grid = _props.grid;
                var showPercent = _props.showPercent;
                var striped = _props.striped;
                var active = _props.active;

                className = classnames("cm-progress", className, getGrid(grid), this.state.theme, {
                    disabled: disabled,
                    striped: striped,
                    active: active
                });
                var width = ((this.state.value - this.state.min) / (this.state.max - this.state.min) * 100).toFixed(2) + "%";
                var percent = showPercent ? width : null;
                return React.createElement(
                    "div",
                    { className: className, style: style },
                    React.createElement(
                        "div",
                        { className: "cm-progress-bar", style: { width: width } },
                        percent
                    )
                );
            }
        }]);

        return Progress;
    }(BaseComponent);

    module.exports = Progress;
});
