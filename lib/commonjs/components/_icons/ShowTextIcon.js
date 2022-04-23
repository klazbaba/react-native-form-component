"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ShowTextIcon;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _colors = require("../../colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ShowTextIcon(props) {
  if (props.showIcon && !props.hide) return props.showIcon;
  if (props.hideIcon && props.hide) return props.hideIcon;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.eye
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.circle
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.dot
  }))), props.hide && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.line
  }));
}

const styles = _reactNative.StyleSheet.create({
  eye: {
    borderWidth: 2,
    height: 15,
    width: 20,
    borderColor: _colors.colors.lightgrey,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: _colors.colors.grey
  },
  dot: {
    backgroundColor: _colors.colors.white,
    height: 2,
    width: 2,
    borderRadius: 1,
    marginLeft: 3,
    marginTop: 2
  },
  line: {
    height: 27,
    width: 2,
    backgroundColor: _colors.colors.lightgrey,
    position: 'absolute',
    transform: [{
      rotate: '-45deg'
    }],
    alignSelf: 'center',
    top: -6
  }
});
//# sourceMappingURL=ShowTextIcon.js.map