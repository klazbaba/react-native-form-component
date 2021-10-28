"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Label;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Label(props) {
  return /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    style: [styles.wrapper, props.style]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [styles.label, props.textStyle]
  }, props.text), props.asterik ? /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [styles.asterik, props.asterikStyle]
  }, "*") : null);
}

const styles = _reactNative.StyleSheet.create({
  asterik: {
    color: '#C92B2B',
    fontSize: 16
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black'
  },
  wrapper: {
    flexDirection: 'row'
  }
});
//# sourceMappingURL=Label.js.map