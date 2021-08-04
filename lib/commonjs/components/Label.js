"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Label;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Label(props) {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.wrapper
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [styles.label, props.style]
  }, props.text), props.asterik ? /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.asterik
  }, "*") : null);
}

const styles = _reactNative.StyleSheet.create({
  asterik: {
    color: 'red',
    fontSize: 16,
    marginLeft: 2
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: 'black'
  },
  wrapper: {
    flexDirection: 'row'
  }
});
//# sourceMappingURL=Label.js.map