"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PinInput;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _FormItem = _interopRequireDefault(require("./FormItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const refs = [];

function PinInput(props) {
  const [pin, setPin] = (0, _react.useState)(Array(props.numOfInput).fill(''));

  if (!refs.length) {
    for (let i = 0; i < pin.length; i++) {
      refs.push( /*#__PURE__*/(0, _react.createRef)());
    }
  }

  const changeFocus = (index, text) => {
    var _refs, _refs$current, _refs2, _refs2$current;

    if (text) (_refs = refs[index + 1]) === null || _refs === void 0 ? void 0 : (_refs$current = _refs.current) === null || _refs$current === void 0 ? void 0 : _refs$current.focus();else (_refs2 = refs[index - 1]) === null || _refs2 === void 0 ? void 0 : (_refs2$current = _refs2.current) === null || _refs2$current === void 0 ? void 0 : _refs2$current.focus();
  };

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.wrapper
  }, pin.map((_, index) => /*#__PURE__*/_react.default.createElement(_FormItem.default, {
    value: pin[index],
    style: {
      backgroundColor: 'transparent'
    },
    onChangeText: text => {
      pin[index] = text;
      setPin([...pin]);
      changeFocus(index, text);
      props.onChangeText(pin.toString().replaceAll(',', ''));
    },
    textInputStyle: styles.formItem,
    maxLength: 1,
    key: index,
    ref: refs[index]
  })));
}

const styles = _reactNative.StyleSheet.create({
  wrapper: {
    flexDirection: 'row'
  },
  formItem: {
    maxWidth: 30,
    backgroundColor: 'transparent',
    borderBottomWidth: _reactNative.StyleSheet.hairlineWidth,
    textAlign: 'center'
  }
});
//# sourceMappingURL=PinInput.js.map