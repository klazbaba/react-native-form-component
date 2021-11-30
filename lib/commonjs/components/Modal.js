"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Modal(props) {
  if (props.show) {
    return /*#__PURE__*/_react.default.createElement(_reactNative.Modal, _extends({}, props, {
      transparent: true,
      visible: true
    }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: {
        backgroundColor: props.backgroundColor,
        ..._reactNative.StyleSheet.absoluteFillObject
      }
    }), props.children);
  }

  return null;
}
//# sourceMappingURL=Modal.js.map