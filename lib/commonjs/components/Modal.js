"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Modal(props) {
  if (props.show) {
    return /*#__PURE__*/_react.default.createElement(_reactNative.Modal, {
      transparent: true
    }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: {
        backgroundColor: 'red',
        ..._reactNative.StyleSheet.absoluteFillObject,
        zIndex: 4
      }
    }), props.children);
  }

  return null;
}
//# sourceMappingURL=Modal.js.map