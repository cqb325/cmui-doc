define(["module", "exports", "react", "react-dom", "react", "react-dom"], function (module, exports) {
  "use strict";

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
  };

  !function (root, factory) {
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = factory() : "function" == typeof define && define.amd ? define(["react", "react-dom"], factory) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.ReactDraggable = factory() : root.ReactDraggable = factory(root.React, root.ReactDOM);
  }(undefined, function (__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
    return function (modules) {
      function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;var module = installedModules[moduleId] = { exports: {}, id: moduleId, loaded: !1 };return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.loaded = !0, module.exports;
      }var installedModules = {};return __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.p = "", __webpack_require__(0);
    }([function (module, exports, __webpack_require__) {
      "use strict";
      module.exports = __webpack_require__(1).default, module.exports.DraggableCore = __webpack_require__(9).default;
    }, function (module, exports, __webpack_require__) {
      "use strict";
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }function _defineProperty(obj, key, value) {
        return key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
      }function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
      }function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !call || "object" != (typeof call === "undefined" ? "undefined" : _typeof(call)) && "function" != typeof call ? self : call;
      }function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 } }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
      }Object.defineProperty(exports, "__esModule", { value: !0 });var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
          }
        }return target;
      },
          _slicedToArray = function () {
        function sliceIterator(arr, i) {
          var _arr = [],
              _n = !0,
              _d = !1,
              _e = void 0;try {
            for (var _s, _i = arr[Symbol.iterator](); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i); _n = !0) {}
          } catch (err) {
            _d = !0, _e = err;
          } finally {
            try {
              !_n && _i.return && _i.return();
            } finally {
              if (_d) throw _e;
            }
          }return _arr;
        }return function (arr, i) {
          if (Array.isArray(arr)) return arr;if (Symbol.iterator in Object(arr)) return sliceIterator(arr, i);throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      }(),
          _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor;
        };
      }(),
          _react = __webpack_require__(2),
          _react2 = _interopRequireDefault(_react),
          _reactDom = __webpack_require__(3),
          _reactDom2 = _interopRequireDefault(_reactDom),
          _classnames = __webpack_require__(4),
          _classnames2 = _interopRequireDefault(_classnames),
          _domFns = __webpack_require__(5),
          _positionFns = __webpack_require__(8),
          _shims = __webpack_require__(6),
          _DraggableCore = __webpack_require__(9),
          _DraggableCore2 = _interopRequireDefault(_DraggableCore),
          _log = __webpack_require__(11),
          _log2 = _interopRequireDefault(_log),
          Draggable = function (_React$Component) {
        function Draggable(props) {
          _classCallCheck(this, Draggable);var _this = _possibleConstructorReturn(this, (Draggable.__proto__ || Object.getPrototypeOf(Draggable)).call(this, props));return _this.onDragStart = function (e, coreData) {
            (0, _log2.default)("Draggable: onDragStart: %j", coreData);var shouldStart = _this.props.onStart(e, (0, _positionFns.createDraggableData)(_this, coreData));return shouldStart !== !1 && void _this.setState({ dragging: !0, dragged: !0 });
          }, _this.onDrag = function (e, coreData) {
            if (!_this.state.dragging) return !1;(0, _log2.default)("Draggable: onDrag: %j", coreData);var uiData = (0, _positionFns.createDraggableData)(_this, coreData),
                newState = { x: uiData.x, y: uiData.y };if (_this.props.bounds) {
              var _x = newState.x,
                  _y = newState.y;newState.x += _this.state.slackX, newState.y += _this.state.slackY;var _getBoundPosition = (0, _positionFns.getBoundPosition)(_this, newState.x, newState.y),
                  _getBoundPosition2 = _slicedToArray(_getBoundPosition, 2);newState.x = _getBoundPosition2[0], newState.y = _getBoundPosition2[1], newState.slackX = _this.state.slackX + (_x - newState.x), newState.slackY = _this.state.slackY + (_y - newState.y), uiData.x = _x, uiData.y = _y, uiData.deltaX = newState.x - _this.state.x, uiData.deltaY = newState.y - _this.state.y;
            }var shouldUpdate = _this.props.onDrag(e, uiData);return shouldUpdate !== !1 && void _this.setState(newState);
          }, _this.onDragStop = function (e, coreData) {
            if (!_this.state.dragging) return !1;var shouldStop = _this.props.onStop(e, (0, _positionFns.createDraggableData)(_this, coreData));if (shouldStop === !1) return !1;(0, _log2.default)("Draggable: onDragStop: %j", coreData);var newState = { dragging: !1, slackX: 0, slackY: 0 },
                controlled = Boolean(_this.props.position);if (controlled) {
              var _this$props$position = _this.props.position,
                  _x2 = _this$props$position.x,
                  _y2 = _this$props$position.y;newState.x = _x2, newState.y = _y2;
            }_this.setState(newState);
          }, _this.state = { dragging: !1, dragged: !1, x: props.position ? props.position.x : props.defaultPosition.x, y: props.position ? props.position.y : props.defaultPosition.y, slackX: 0, slackY: 0, isElementSVG: !1 }, _this;
        }return _inherits(Draggable, _React$Component), _createClass(Draggable, [{ key: "componentWillMount", value: function value() {
            !this.props.position || this.props.onDrag || this.props.onStop || console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
          } }, { key: "componentDidMount", value: function value() {
            "undefined" != typeof SVGElement && _reactDom2.default.findDOMNode(this) instanceof SVGElement && this.setState({ isElementSVG: !0 });
          } }, { key: "componentWillReceiveProps", value: function value(nextProps) {
            !nextProps.position || this.props.position && nextProps.position.x === this.props.position.x && nextProps.position.y === this.props.position.y || this.setState({ x: nextProps.position.x, y: nextProps.position.y });
          } }, { key: "componentWillUnmount", value: function value() {
            this.setState({ dragging: !1 });
          } }, { key: "render", value: function value() {
            var _classNames,
                style = {},
                svgTransform = null,
                controlled = Boolean(this.props.position),
                draggable = !controlled || this.state.dragging,
                position = this.props.position || this.props.defaultPosition,
                transformOpts = { x: (0, _positionFns.canDragX)(this) && draggable ? this.state.x : position.x, y: (0, _positionFns.canDragY)(this) && draggable ? this.state.y : position.y };this.state.isElementSVG ? svgTransform = (0, _domFns.createSVGTransform)(transformOpts) : style = (0, _domFns.createCSSTransform)(transformOpts);var _props = this.props,
                defaultClassName = _props.defaultClassName,
                defaultClassNameDragging = _props.defaultClassNameDragging,
                defaultClassNameDragged = _props.defaultClassNameDragged,
                className = (0, _classnames2.default)(this.props.children.props.className || "", defaultClassName, (_classNames = {}, _defineProperty(_classNames, defaultClassNameDragging, this.state.dragging), _defineProperty(_classNames, defaultClassNameDragged, this.state.dragged), _classNames));return _react2.default.createElement(_DraggableCore2.default, _extends({}, this.props, { onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop }), _react2.default.cloneElement(_react2.default.Children.only(this.props.children), { className: className, style: _extends({}, this.props.children.props.style, style), transform: svgTransform }));
          } }]), Draggable;
      }(_react2.default.Component);Draggable.displayName = "Draggable", Draggable.propTypes = _extends({}, _DraggableCore2.default.propTypes, { axis: _react.PropTypes.oneOf(["both", "x", "y", "none"]), bounds: _react.PropTypes.oneOfType([_react.PropTypes.shape({ left: _react.PropTypes.number, right: _react.PropTypes.number, top: _react.PropTypes.number, bottom: _react.PropTypes.number }), _react.PropTypes.string, _react.PropTypes.oneOf([!1])]), defaultClassName: _react.PropTypes.string, defaultClassNameDragging: _react.PropTypes.string, defaultClassNameDragged: _react.PropTypes.string, defaultPosition: _react.PropTypes.shape({ x: _react.PropTypes.number, y: _react.PropTypes.number }), position: _react.PropTypes.shape({ x: _react.PropTypes.number, y: _react.PropTypes.number }), className: _shims.dontSetMe, style: _shims.dontSetMe, transform: _shims.dontSetMe }), Draggable.defaultProps = _extends({}, _DraggableCore2.default.defaultProps, { axis: "both", bounds: !1, defaultClassName: "react-draggable", defaultClassNameDragging: "react-draggable-dragging", defaultClassNameDragged: "react-draggable-dragged", defaultPosition: { x: 0, y: 0 }, position: null }), exports.default = Draggable;
    }, function (module, exports) {
      module.exports = __WEBPACK_EXTERNAL_MODULE_2__;
    }, function (module, exports) {
      module.exports = __WEBPACK_EXTERNAL_MODULE_3__;
    }, function (module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function () {
        "use strict";
        function classNames() {
          for (var classes = [], i = 0; i < arguments.length; i++) {
            var arg = arguments[i];if (arg) {
              var argType = typeof arg === "undefined" ? "undefined" : _typeof(arg);if ("string" === argType || "number" === argType) classes.push(arg);else if (Array.isArray(arg)) classes.push(classNames.apply(null, arg));else if ("object" === argType) for (var key in arg) {
                hasOwn.call(arg, key) && arg[key] && classes.push(key);
              }
            }
          }return classes.join(" ");
        }var hasOwn = {}.hasOwnProperty;"undefined" != typeof module && module.exports ? module.exports = classNames : (__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
          return classNames;
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)));
      }();
    }, function (module, exports, __webpack_require__) {
      "use strict";
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }function _defineProperty(obj, key, value) {
        return key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
      }function matchesSelector(el, selector) {
        return matchesSelectorFunc || (matchesSelectorFunc = (0, _shims.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function (method) {
          return (0, _shims.isFunction)(el[method]);
        })), el[matchesSelectorFunc].call(el, selector);
      }function matchesSelectorAndParentsTo(el, selector, baseNode) {
        var node = el;do {
          if (matchesSelector(node, selector)) return !0;if (node === baseNode) return !1;node = node.parentNode;
        } while (node);return !1;
      }function addEvent(el, event, handler) {
        el && (el.attachEvent ? el.attachEvent("on" + event, handler) : el.addEventListener ? el.addEventListener(event, handler, !0) : el["on" + event] = handler);
      }function removeEvent(el, event, handler) {
        el && (el.detachEvent ? el.detachEvent("on" + event, handler) : el.removeEventListener ? el.removeEventListener(event, handler, !0) : el["on" + event] = null);
      }function outerHeight(node) {
        var height = node.clientHeight,
            computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);return height += (0, _shims.int)(computedStyle.borderTopWidth), height += (0, _shims.int)(computedStyle.borderBottomWidth);
      }function outerWidth(node) {
        var width = node.clientWidth,
            computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);return width += (0, _shims.int)(computedStyle.borderLeftWidth), width += (0, _shims.int)(computedStyle.borderRightWidth);
      }function innerHeight(node) {
        var height = node.clientHeight,
            computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);return height -= (0, _shims.int)(computedStyle.paddingTop), height -= (0, _shims.int)(computedStyle.paddingBottom);
      }function innerWidth(node) {
        var width = node.clientWidth,
            computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);return width -= (0, _shims.int)(computedStyle.paddingLeft), width -= (0, _shims.int)(computedStyle.paddingRight);
      }function offsetXYFromParent(evt, offsetParent) {
        var isBody = offsetParent === offsetParent.ownerDocument.body,
            offsetParentRect = isBody ? { left: 0, top: 0 } : offsetParent.getBoundingClientRect(),
            x = evt.clientX + offsetParent.scrollLeft - offsetParentRect.left,
            y = evt.clientY + offsetParent.scrollTop - offsetParentRect.top;return { x: x, y: y };
      }function createCSSTransform(_ref) {
        var x = _ref.x,
            y = _ref.y;return _defineProperty({}, (0, _getPrefix.browserPrefixToKey)("transform", _getPrefix2.default), "translate(" + x + "px," + y + "px)");
      }function createSVGTransform(_ref3) {
        var x = _ref3.x,
            y = _ref3.y;return "translate(" + x + "," + y + ")";
      }function getTouch(e, identifier) {
        return e.targetTouches && (0, _shims.findInArray)(e.targetTouches, function (t) {
          return identifier === t.identifier;
        }) || e.changedTouches && (0, _shims.findInArray)(e.changedTouches, function (t) {
          return identifier === t.identifier;
        });
      }function getTouchIdentifier(e) {
        return e.targetTouches && e.targetTouches[0] ? e.targetTouches[0].identifier : e.changedTouches && e.changedTouches[0] ? e.changedTouches[0].identifier : void 0;
      }function addUserSelectStyles(body) {
        var style = body.getAttribute("style") || "";body.setAttribute("style", style + userSelectStyle);
      }function removeUserSelectStyles(body) {
        var style = body.getAttribute("style") || "";body.setAttribute("style", style.replace(userSelectReplaceRegExp, ""));
      }function styleHacks() {
        var childStyle = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};return _extends({ touchAction: "none" }, childStyle);
      }Object.defineProperty(exports, "__esModule", { value: !0 });var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
          }
        }return target;
      };exports.matchesSelector = matchesSelector, exports.matchesSelectorAndParentsTo = matchesSelectorAndParentsTo, exports.addEvent = addEvent, exports.removeEvent = removeEvent, exports.outerHeight = outerHeight, exports.outerWidth = outerWidth, exports.innerHeight = innerHeight, exports.innerWidth = innerWidth, exports.offsetXYFromParent = offsetXYFromParent, exports.createCSSTransform = createCSSTransform, exports.createSVGTransform = createSVGTransform, exports.getTouch = getTouch, exports.getTouchIdentifier = getTouchIdentifier, exports.addUserSelectStyles = addUserSelectStyles, exports.removeUserSelectStyles = removeUserSelectStyles, exports.styleHacks = styleHacks;var _shims = __webpack_require__(6),
          _getPrefix = __webpack_require__(7),
          _getPrefix2 = _interopRequireDefault(_getPrefix),
          matchesSelectorFunc = "",
          userSelectPrefix = (0, _getPrefix.getPrefix)("user-select"),
          userSelect = (0, _getPrefix.browserPrefixToStyle)("user-select", userSelectPrefix),
          userSelectStyle = ";" + userSelect + ": none;",
          userSelectReplaceRegExp = new RegExp(";?" + userSelect + ": none;");
    }, function (module, exports) {
      "use strict";
      function findInArray(array, callback) {
        for (var i = 0, length = array.length; i < length; i++) {
          if (callback.apply(callback, [array[i], i, array])) return array[i];
        }
      }function isFunction(func) {
        return "function" == typeof func || "[object Function]" === Object.prototype.toString.call(func);
      }function isNum(num) {
        return "number" == typeof num && !isNaN(num);
      }function int(a) {
        return parseInt(a, 10);
      }function dontSetMe(props, propName, componentName) {
        if (props[propName]) return new Error("Invalid prop " + propName + " passed to " + componentName + " - do not set this, set it on the child.");
      }Object.defineProperty(exports, "__esModule", { value: !0 }), exports.findInArray = findInArray, exports.isFunction = isFunction, exports.isNum = isNum, exports.int = int, exports.dontSetMe = dontSetMe;
    }, function (module, exports) {
      "use strict";
      function getPrefix() {
        var prop = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "transform";if ("undefined" == typeof window || "undefined" == typeof window.document) return "";var style = window.document.documentElement.style;if (prop in style) return "";for (var i = 0; i < prefixes.length; i++) {
          if (browserPrefixToKey(prop, prefixes[i]) in style) return prefixes[i];
        }return "";
      }function browserPrefixToKey(prop, prefix) {
        return prefix ? "" + prefix + kebabToTitleCase(prop) : prop;
      }function browserPrefixToStyle(prop, prefix) {
        return prefix ? "-" + prefix.toLowerCase() + "-" + prop : prop;
      }function kebabToTitleCase(str) {
        for (var out = "", shouldCapitalize = !0, i = 0; i < str.length; i++) {
          shouldCapitalize ? (out += str[i].toUpperCase(), shouldCapitalize = !1) : "-" === str[i] ? shouldCapitalize = !0 : out += str[i];
        }return out;
      }Object.defineProperty(exports, "__esModule", { value: !0 }), exports.getPrefix = getPrefix, exports.browserPrefixToKey = browserPrefixToKey, exports.browserPrefixToStyle = browserPrefixToStyle;var prefixes = ["Moz", "Webkit", "O", "ms"];exports.default = getPrefix();
    }, function (module, exports, __webpack_require__) {
      "use strict";
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }function getBoundPosition(draggable, x, y) {
        if (!draggable.props.bounds) return [x, y];var bounds = draggable.props.bounds;bounds = "string" == typeof bounds ? bounds : cloneBounds(bounds);var node = _reactDom2.default.findDOMNode(draggable);if ("string" == typeof bounds) {
          var ownerDocument = node.ownerDocument,
              ownerWindow = ownerDocument.defaultView,
              boundNode = void 0;if ("parent" === bounds) boundNode = node.parentNode;else if (boundNode = ownerDocument.querySelector(bounds), !boundNode) throw new Error('Bounds selector "' + bounds + '" could not find an element.');var nodeStyle = ownerWindow.getComputedStyle(node),
              boundNodeStyle = ownerWindow.getComputedStyle(boundNode);bounds = { left: -node.offsetLeft + (0, _shims.int)(boundNodeStyle.paddingLeft) + (0, _shims.int)(nodeStyle.borderLeftWidth) + (0, _shims.int)(nodeStyle.marginLeft), top: -node.offsetTop + (0, _shims.int)(boundNodeStyle.paddingTop) + (0, _shims.int)(nodeStyle.borderTopWidth) + (0, _shims.int)(nodeStyle.marginTop), right: (0, _domFns.innerWidth)(boundNode) - (0, _domFns.outerWidth)(node) - node.offsetLeft, bottom: (0, _domFns.innerHeight)(boundNode) - (0, _domFns.outerHeight)(node) - node.offsetTop };
        }return (0, _shims.isNum)(bounds.right) && (x = Math.min(x, bounds.right)), (0, _shims.isNum)(bounds.bottom) && (y = Math.min(y, bounds.bottom)), (0, _shims.isNum)(bounds.left) && (x = Math.max(x, bounds.left)), (0, _shims.isNum)(bounds.top) && (y = Math.max(y, bounds.top)), [x, y];
      }function snapToGrid(grid, pendingX, pendingY) {
        var x = Math.round(pendingX / grid[0]) * grid[0],
            y = Math.round(pendingY / grid[1]) * grid[1];return [x, y];
      }function canDragX(draggable) {
        return "both" === draggable.props.axis || "x" === draggable.props.axis;
      }function canDragY(draggable) {
        return "both" === draggable.props.axis || "y" === draggable.props.axis;
      }function getControlPosition(e, touchIdentifier, draggableCore) {
        var touchObj = "number" == typeof touchIdentifier ? (0, _domFns.getTouch)(e, touchIdentifier) : null;if ("number" == typeof touchIdentifier && !touchObj) return null;var node = _reactDom2.default.findDOMNode(draggableCore),
            offsetParent = draggableCore.props.offsetParent || node.offsetParent || node.ownerDocument.body;return (0, _domFns.offsetXYFromParent)(touchObj || e, offsetParent);
      }function createCoreData(draggable, x, y) {
        var state = draggable.state,
            isStart = !(0, _shims.isNum)(state.lastX);return isStart ? { node: _reactDom2.default.findDOMNode(draggable), deltaX: 0, deltaY: 0, lastX: x, lastY: y, x: x, y: y } : { node: _reactDom2.default.findDOMNode(draggable), deltaX: x - state.lastX, deltaY: y - state.lastY, lastX: state.lastX, lastY: state.lastY, x: x, y: y };
      }function createDraggableData(draggable, coreData) {
        return { node: coreData.node, x: draggable.state.x + coreData.deltaX, y: draggable.state.y + coreData.deltaY, deltaX: coreData.deltaX, deltaY: coreData.deltaY, lastX: draggable.state.x, lastY: draggable.state.y };
      }function cloneBounds(bounds) {
        return { left: bounds.left, top: bounds.top, right: bounds.right, bottom: bounds.bottom };
      }Object.defineProperty(exports, "__esModule", { value: !0 }), exports.getBoundPosition = getBoundPosition, exports.snapToGrid = snapToGrid, exports.canDragX = canDragX, exports.canDragY = canDragY, exports.getControlPosition = getControlPosition, exports.createCoreData = createCoreData, exports.createDraggableData = createDraggableData;var _shims = __webpack_require__(6),
          _reactDom = __webpack_require__(3),
          _reactDom2 = _interopRequireDefault(_reactDom),
          _domFns = __webpack_require__(5);
    }, function (module, exports, __webpack_require__) {
      (function (process) {
        "use strict";
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }function _possibleConstructorReturn(self, call) {
          if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !call || "object" != (typeof call === "undefined" ? "undefined" : _typeof(call)) && "function" != typeof call ? self : call;
        }function _inherits(subClass, superClass) {
          if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 } }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }Object.defineProperty(exports, "__esModule", { value: !0 });var _slicedToArray = function () {
          function sliceIterator(arr, i) {
            var _arr = [],
                _n = !0,
                _d = !1,
                _e = void 0;try {
              for (var _s, _i = arr[Symbol.iterator](); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i); _n = !0) {}
            } catch (err) {
              _d = !0, _e = err;
            } finally {
              try {
                !_n && _i.return && _i.return();
              } finally {
                if (_d) throw _e;
              }
            }return _arr;
          }return function (arr, i) {
            if (Array.isArray(arr)) return arr;if (Symbol.iterator in Object(arr)) return sliceIterator(arr, i);throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        }(),
            _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor;
          };
        }(),
            _react = __webpack_require__(2),
            _react2 = _interopRequireDefault(_react),
            _reactDom = __webpack_require__(3),
            _reactDom2 = _interopRequireDefault(_reactDom),
            _domFns = __webpack_require__(5),
            _positionFns = __webpack_require__(8),
            _shims = __webpack_require__(6),
            _log = __webpack_require__(11),
            _log2 = _interopRequireDefault(_log),
            eventsFor = { touch: { start: "touchstart", move: "touchmove", stop: "touchend" }, mouse: { start: "mousedown", move: "mousemove", stop: "mouseup" } },
            dragEventFor = eventsFor.mouse,
            DraggableCore = function (_React$Component) {
          function DraggableCore() {
            var _ref, _temp, _this, _ret;_classCallCheck(this, DraggableCore);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }return _temp = _this = _possibleConstructorReturn(this, (_ref = DraggableCore.__proto__ || Object.getPrototypeOf(DraggableCore)).call.apply(_ref, [this].concat(args))), _this.state = { dragging: !1, lastX: NaN, lastY: NaN, touchIdentifier: null }, _this.handleDragStart = function (e) {
              if (_this.props.onMouseDown(e), !_this.props.allowAnyClick && "number" == typeof e.button && 0 !== e.button) return !1;var domNode = _reactDom2.default.findDOMNode(_this),
                  ownerDocument = domNode.ownerDocument;if (!(_this.props.disabled || !(e.target instanceof ownerDocument.defaultView.Node) || _this.props.handle && !(0, _domFns.matchesSelectorAndParentsTo)(e.target, _this.props.handle, domNode) || _this.props.cancel && (0, _domFns.matchesSelectorAndParentsTo)(e.target, _this.props.cancel, domNode))) {
                var touchIdentifier = (0, _domFns.getTouchIdentifier)(e);_this.setState({ touchIdentifier: touchIdentifier });var position = (0, _positionFns.getControlPosition)(e, touchIdentifier, _this);if (null != position) {
                  var x = position.x,
                      y = position.y,
                      coreEvent = (0, _positionFns.createCoreData)(_this, x, y);(0, _log2.default)("DraggableCore: handleDragStart: %j", coreEvent), (0, _log2.default)("calling", _this.props.onStart);var shouldUpdate = _this.props.onStart(e, coreEvent);shouldUpdate !== !1 && (_this.props.enableUserSelectHack && (0, _domFns.addUserSelectStyles)(ownerDocument.body), _this.setState({ dragging: !0, lastX: x, lastY: y }), (0, _domFns.addEvent)(ownerDocument, dragEventFor.move, _this.handleDrag), (0, _domFns.addEvent)(ownerDocument, dragEventFor.stop, _this.handleDragStop));
                }
              }
            }, _this.handleDrag = function (e) {
              "touchmove" === e.type && e.preventDefault();var position = (0, _positionFns.getControlPosition)(e, _this.state.touchIdentifier, _this);if (null != position) {
                var x = position.x,
                    y = position.y;if (Array.isArray(_this.props.grid)) {
                  var deltaX = x - _this.state.lastX,
                      deltaY = y - _this.state.lastY,
                      _snapToGrid = (0, _positionFns.snapToGrid)(_this.props.grid, deltaX, deltaY),
                      _snapToGrid2 = _slicedToArray(_snapToGrid, 2);if (deltaX = _snapToGrid2[0], deltaY = _snapToGrid2[1], !deltaX && !deltaY) return;x = _this.state.lastX + deltaX, y = _this.state.lastY + deltaY;
                }var coreEvent = (0, _positionFns.createCoreData)(_this, x, y);(0, _log2.default)("DraggableCore: handleDrag: %j", coreEvent);var shouldUpdate = _this.props.onDrag(e, coreEvent);if (shouldUpdate !== !1) _this.setState({ lastX: x, lastY: y });else try {
                  _this.handleDragStop(new MouseEvent("mouseup"));
                } catch (err) {
                  var event = document.createEvent("MouseEvents");event.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), _this.handleDragStop(event);
                }
              }
            }, _this.handleDragStop = function (e) {
              if (_this.state.dragging) {
                var position = (0, _positionFns.getControlPosition)(e, _this.state.touchIdentifier, _this);if (null != position) {
                  var x = position.x,
                      y = position.y,
                      coreEvent = (0, _positionFns.createCoreData)(_this, x, y),
                      _ReactDOM$findDOMNode = _reactDom2.default.findDOMNode(_this),
                      ownerDocument = _ReactDOM$findDOMNode.ownerDocument;_this.props.enableUserSelectHack && (0, _domFns.removeUserSelectStyles)(ownerDocument.body), (0, _log2.default)("DraggableCore: handleDragStop: %j", coreEvent), _this.setState({ dragging: !1, lastX: NaN, lastY: NaN }), _this.props.onStop(e, coreEvent), (0, _log2.default)("DraggableCore: Removing handlers"), (0, _domFns.removeEvent)(ownerDocument, dragEventFor.move, _this.handleDrag), (0, _domFns.removeEvent)(ownerDocument, dragEventFor.stop, _this.handleDragStop);
                }
              }
            }, _this.onMouseDown = function (e) {
              return dragEventFor = eventsFor.mouse, _this.handleDragStart(e);
            }, _this.onMouseUp = function (e) {
              return dragEventFor = eventsFor.mouse, _this.handleDragStop(e);
            }, _this.onTouchStart = function (e) {
              return dragEventFor = eventsFor.touch, _this.handleDragStart(e);
            }, _this.onTouchEnd = function (e) {
              return dragEventFor = eventsFor.touch, _this.handleDragStop(e);
            }, _ret = _temp, _possibleConstructorReturn(_this, _ret);
          }return _inherits(DraggableCore, _React$Component), _createClass(DraggableCore, [{ key: "componentWillUnmount", value: function value() {
              var _ReactDOM$findDOMNode2 = _reactDom2.default.findDOMNode(this),
                  ownerDocument = _ReactDOM$findDOMNode2.ownerDocument;(0, _domFns.removeEvent)(ownerDocument, eventsFor.mouse.move, this.handleDrag), (0, _domFns.removeEvent)(ownerDocument, eventsFor.touch.move, this.handleDrag), (0, _domFns.removeEvent)(ownerDocument, eventsFor.mouse.stop, this.handleDragStop), (0, _domFns.removeEvent)(ownerDocument, eventsFor.touch.stop, this.handleDragStop), this.props.enableUserSelectHack && (0, _domFns.removeUserSelectStyles)(ownerDocument.body);
            } }, { key: "render", value: function value() {
              return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), { style: (0, _domFns.styleHacks)(this.props.children.props.style), onMouseDown: this.onMouseDown, onTouchStart: this.onTouchStart, onMouseUp: this.onMouseUp, onTouchEnd: this.onTouchEnd });
            } }]), DraggableCore;
        }(_react2.default.Component);DraggableCore.displayName = "DraggableCore", DraggableCore.propTypes = { allowAnyClick: _react.PropTypes.bool, disabled: _react.PropTypes.bool, enableUserSelectHack: _react.PropTypes.bool, offsetParent: function offsetParent(props, propName) {
            if (process.browser && props[propName] && 1 !== props[propName].nodeType) throw new Error("Draggable's offsetParent must be a DOM Node.");
          }, grid: _react.PropTypes.arrayOf(_react.PropTypes.number), handle: _react.PropTypes.string, cancel: _react.PropTypes.string, onStart: _react.PropTypes.func, onDrag: _react.PropTypes.func, onStop: _react.PropTypes.func, onMouseDown: _react.PropTypes.func, className: _shims.dontSetMe, style: _shims.dontSetMe, transform: _shims.dontSetMe }, DraggableCore.defaultProps = { allowAnyClick: !1, cancel: null, disabled: !1, enableUserSelectHack: !0, offsetParent: null, handle: null, grid: null, transform: null, onStart: function onStart() {}, onDrag: function onDrag() {}, onStop: function onStop() {}, onMouseDown: function onMouseDown() {} }, exports.default = DraggableCore;
      }).call(exports, __webpack_require__(10));
    }, function (module, exports) {
      function defaultSetTimout() {
        throw new Error("setTimeout has not been defined");
      }function defaultClearTimeout() {
        throw new Error("clearTimeout has not been defined");
      }function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) return setTimeout(fun, 0);if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) return cachedSetTimeout = setTimeout, setTimeout(fun, 0);try {
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e) {
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) return clearTimeout(marker);if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) return cachedClearTimeout = clearTimeout, clearTimeout(marker);try {
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            return cachedClearTimeout.call(null, marker);
          } catch (e) {
            return cachedClearTimeout.call(this, marker);
          }
        }
      }function cleanUpNextTick() {
        draining && currentQueue && (draining = !1, currentQueue.length ? queue = currentQueue.concat(queue) : queueIndex = -1, queue.length && drainQueue());
      }function drainQueue() {
        if (!draining) {
          var timeout = runTimeout(cleanUpNextTick);draining = !0;for (var len = queue.length; len;) {
            for (currentQueue = queue, queue = []; ++queueIndex < len;) {
              currentQueue && currentQueue[queueIndex].run();
            }queueIndex = -1, len = queue.length;
          }currentQueue = null, draining = !1, runClearTimeout(timeout);
        }
      }function Item(fun, array) {
        this.fun = fun, this.array = array;
      }function noop() {}var cachedSetTimeout,
          cachedClearTimeout,
          process = module.exports = {};!function () {
        try {
          cachedSetTimeout = "function" == typeof setTimeout ? setTimeout : defaultSetTimout;
        } catch (e) {
          cachedSetTimeout = defaultSetTimout;
        }try {
          cachedClearTimeout = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout;
        } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
        }
      }();var currentQueue,
          queue = [],
          draining = !1,
          queueIndex = -1;process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) {
          args[i - 1] = arguments[i];
        }queue.push(new Item(fun, args)), 1 !== queue.length || draining || runTimeout(drainQueue);
      }, Item.prototype.run = function () {
        this.fun.apply(null, this.array);
      }, process.title = "browser", process.browser = !0, process.env = {}, process.argv = [], process.version = "", process.versions = {}, process.on = noop, process.addListener = noop, process.once = noop, process.off = noop, process.removeListener = noop, process.removeAllListeners = noop, process.emit = noop, process.binding = function (name) {
        throw new Error("process.binding is not supported");
      }, process.cwd = function () {
        return "/";
      }, process.chdir = function (dir) {
        throw new Error("process.chdir is not supported");
      }, process.umask = function () {
        return 0;
      };
    }, function (module, exports, __webpack_require__) {
      "use strict";
      function log() {}Object.defineProperty(exports, "__esModule", { value: !0 }), exports.default = log;
    }]);
  });
});
