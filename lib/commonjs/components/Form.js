"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Form;
exports.submitForm = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _FormItem = require("./FormItem");

var _colors = require("../colors");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

let submitForm;
exports.submitForm = submitForm;

function Form(props) {
  const [width, setWidth] = (0, _react.useState)(0);
  const [opacity, setOpacity] = (0, _react.useState)(1);

  const handleButtonPress = () => {
    const fieldsWithError = [];

    _react.Children.forEach(props.children, (child, index) => {
      var _child$ref, _child$ref$current;

      //@ts-ignore
      if (child && ((_child$ref = child.ref) === null || _child$ref === void 0 ? void 0 : (_child$ref$current = _child$ref.current) === null || _child$ref$current === void 0 ? void 0 : _child$ref$current.getComponent()) == 'FormItem') {
        const {
          keyboardType,
          isRequired,
          value,
          customValidation //@ts-ignore

        } = child.props;
        let validation;
        if (customValidation) validation = customValidation();

        if ((0, _FormItem.containsError)(keyboardType, isRequired, value, validation).status) {
          var _child$ref2;

          fieldsWithError.push( //@ts-ignore
          child.props.label || child.props.placeholder || 'FormItem' + index); //@ts-ignore

          (_child$ref2 = child.ref) === null || _child$ref2 === void 0 ? void 0 : _child$ref2.current.setState();
        }
      }
    });

    if (fieldsWithError.length) {
      console.error('The following fields do not fulfil their conditions:\n' + JSON.stringify(fieldsWithError, null, 2));
      return;
    }

    props.onButtonPress();
  };

  exports.submitForm = submitForm = () => handleButtonPress();

  return /*#__PURE__*/_react.default.createElement(_reactNative.KeyboardAvoidingView, {
    keyboardVerticalOffset: _reactNative.Platform.OS == 'ios' ? props.keyboardVerticalOffset || 50 : undefined,
    behavior: _reactNative.Platform.OS == 'ios' ? 'padding' : undefined,
    style: {
      flex: 1
    }
  }, props.children, /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    style: [styles.button, _reactNative.Platform.OS == 'ios' ? {
      opacity
    } : undefined, props.buttonStyle],
    onPress: handleButtonPress,
    android_ripple: {
      color: 'lightgrey',
      radius: width
    },
    onLayout: event => setWidth(event.nativeEvent.layout.width),
    onPressIn: () => setOpacity(0.5),
    onPressOut: () => setOpacity(1)
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [styles.buttonText, props.buttonTextStyle]
  }, props.buttonText || 'Submit')));
}

const styles = _reactNative.StyleSheet.create({
  button: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: _colors.colors.red,
    borderRadius: 8,
    marginVertical: 32
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
//# sourceMappingURL=Form.js.map