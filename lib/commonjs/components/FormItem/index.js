"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.containsError = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _Label = _interopRequireDefault(require("../Label"));

var _colors = require("../../colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const FormItem = /*#__PURE__*/(0, _react.forwardRef)(({
  children,
  ...props
}, ref) => {
  const [hasError, setHasError] = (0, _react.useState)({
    status: false,
    message: ''
  });
  const [animatedBottom] = (0, _react.useState)(new _reactNative.Animated.Value(0));
  const [shouldAnimate, setShouldAnimate] = (0, _react.useState)(true);
  const [wrapperHeight, setWrapperHeight] = (0, _react.useState)(0);
  const {
    isRequired,
    value,
    keyboardType
  } = props;
  const inputRef = (0, _react.useRef)();
  (0, _react.useImperativeHandle)(ref, () => ({
    setState: () => {
      let validation;
      if (props.customValidation) validation = props.customValidation();
      setHasError(containsError(keyboardType, isRequired, value, validation));
    },
    focus: () => inputRef.current.focus(),
    blur: () => inputRef.current.blur(),
    clear: () => inputRef.current.clear(),
    isFocused: () => inputRef.current.isFocused(),
    getComponent: () => 'FormItem'
  }));

  const handleBlur = e => {
    let validation;
    if (props.customValidation) validation = props.customValidation();
    setHasError(containsError(keyboardType, isRequired, value, validation));
    if (props.onBlur) props.onBlur(e);
  };

  const handleFocus = e => {
    setHasError({
      status: false,
      message: ''
    });
    if (props.floatingLabel && shouldAnimate) _reactNative.Animated.timing(animatedBottom, {
      toValue: props.textArea ? 24 : wrapperHeight / 2,
      useNativeDriver: false,
      duration: 300
    }).start(() => setShouldAnimate(false));
    if (props.onFocus) props.onFocus(e);
  };

  if (props.floatingLabel) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: [styles.wrapper, props.textArea ? {
        height: 120,
        alignItems: 'flex-start'
      } : undefined, props.style, hasError.status ? {
        borderColor: _colors.colors.red,
        borderWidth: 1
      } : undefined],
      onLayout: ({
        nativeEvent
      }) => setWrapperHeight(nativeEvent.layout.height)
    }, props.label && /*#__PURE__*/_react.default.createElement(_Label.default, {
      text: props.label,
      textStyle: [!props.asterik ? {
        marginLeft: 4
      } : undefined, props.labelStyle],
      asterik: props.asterik,
      style: [props.floatingLabel ? {
        bottom: animatedBottom
      } : undefined, {
        paddingHorizontal: 2,
        backgroundColor: animatedBottom.interpolate({
          inputRange: [0, props.textArea ? 24 : wrapperHeight / 2],
          outputRange: ['transparent', _colors.colors.white]
        }),
        marginTop: props.textArea ? 16 : 0
      }]
    }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: [styles.wrapper, {
        marginBottom: 0,
        flex: 1,
        paddingHorizontal: 0,
        height: '100%',
        position: 'absolute',
        right: 8,
        left: 8,
        backgroundColor: 'transparent'
      }]
    }, children, /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, _extends({}, props, {
      style: [styles.inputText, props.textInputStyle],
      ref: inputRef,
      onBlur: handleBlur,
      onFocus: handleFocus,
      value: props.value,
      autoCapitalize: props.autoCapitalize || (props.keyboardType == 'email-address' ? 'none' : undefined),
      maxLength: props.maxLength || 150,
      placeholder: "",
      multiline: props.textArea || props.multiline,
      textAlignVertical: props.textArea ? 'top' : 'center',
      testID: "input"
    })), hasError.status && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: styles.errorWrapper
    }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: styles.exclamation
    }, '\u0021')))), hasError.status && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: [styles.underneathText, props.underneathTextStyle]
    }, props.underneathText || hasError.message));
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.label && /*#__PURE__*/_react.default.createElement(_Label.default, {
    text: props.label,
    textStyle: [styles.label, !props.asterik ? {
      marginLeft: 4
    } : undefined, props.labelStyle],
    asterik: props.asterik
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.wrapper, props.textArea ? {
      height: 120
    } : undefined, props.style, hasError.status ? {
      borderColor: _colors.colors.red,
      borderWidth: 1
    } : undefined]
  }, children, /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, _extends({}, props, {
    style: [styles.inputText, props.textInputStyle],
    ref: inputRef,
    onBlur: handleBlur,
    onFocus: handleFocus,
    value: props.value,
    autoCapitalize: props.autoCapitalize || (props.keyboardType == 'email-address' ? 'none' : undefined),
    maxLength: props.maxLength || 150,
    multiline: props.textArea || props.multiline,
    textAlignVertical: props.textArea ? 'top' : 'center',
    testID: "input"
  })), hasError.status && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.errorWrapper
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.exclamation
  }, '\u0021'))), hasError.status && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [styles.underneathText, props.underneathTextStyle]
  }, props.underneathText || hasError.message));
});

const validateEmail = email => {
  return /^\S+@\S+\.\S+$/.test(email);
};

const validateNumber = number => {
  return /^\d+$/.test(number);
};

const validateDecimalNumber = number => {
  return /^\d+.*\d*/.test(number) && !number.endsWith('.');
};

const validatePhoneNumber = number => /^\+{0,1}\d+$/.test(number.replace(/ /g, ''));

const containsError = (keyboardType = 'default', isRequired, value, extraValidation) => {
  if (extraValidation && !extraValidation.status) {
    return {
      status: true,
      message: extraValidation.message
    };
  } else if (extraValidation && extraValidation.status) {
    return {
      status: false,
      message: ''
    };
  }

  if (keyboardType == 'email-address' && !validateEmail(value)) return {
    status: true,
    message: 'Enter a valid email'
  };
  if (isRequired && !value) return {
    status: true,
    message: 'Cannot be empty'
  };
  if (keyboardType == 'number-pad' || keyboardType == 'numeric' && !validateNumber(value)) return {
    status: true,
    message: 'Invalid number'
  };
  if (keyboardType == 'phone-pad' && !validatePhoneNumber(value)) return {
    status: true,
    message: 'Invalid phone number'
  };
  if (keyboardType == 'decimal-pad' && !validateDecimalNumber(value)) return {
    status: true,
    message: 'Invalid number'
  };
  return {
    status: false,
    message: ''
  };
};

exports.containsError = containsError;

const styles = _reactNative.StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 8,
    height: 48,
    alignItems: 'center',
    marginBottom: 24
  },
  inputText: {
    flex: 1,
    paddingVertical: 8,
    ..._reactNative.Platform.select({
      web: {
        outlineWidth: 0
      }
    }),
    height: '90%'
  },
  underneathText: {
    marginTop: -24,
    marginLeft: 8,
    marginBottom: 24,
    color: _colors.colors.red
  },
  label: {
    marginBottom: 2
  },
  errorWrapper: {
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: _colors.colors.red
  },
  exclamation: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  }
});

var _default = FormItem;
exports.default = _default;
//# sourceMappingURL=index.js.map