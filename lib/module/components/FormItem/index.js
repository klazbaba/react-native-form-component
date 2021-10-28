function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef, useState, useImperativeHandle, useRef } from 'react';
import { TextInput, View, StyleSheet, Text, Animated, Platform } from 'react-native';
import Label from '../Label';
import { colors } from '../../colors';
const FormItem = /*#__PURE__*/forwardRef(({
  children,
  ...props
}, ref) => {
  const [hasError, setHasError] = useState({
    status: false,
    message: ''
  });
  const [animatedBottom] = useState(new Animated.Value(0));
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [wrapperHeight, setWrapperHeight] = useState(0);
  const {
    isRequired,
    value,
    keyboardType
  } = props;
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
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
    if (props.floatingLabel && shouldAnimate) Animated.timing(animatedBottom, {
      toValue: props.textArea ? 24 : wrapperHeight / 2,
      useNativeDriver: false,
      duration: 300
    }).start(() => setShouldAnimate(false));
    if (props.onFocus) props.onFocus(e);
  };

  if (props.floatingLabel) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(View, {
      style: [styles.wrapper, props.textArea ? {
        height: 120,
        alignItems: 'flex-start'
      } : undefined, props.style, hasError.status ? {
        borderColor: colors.red,
        borderWidth: 1
      } : undefined],
      onLayout: ({
        nativeEvent
      }) => setWrapperHeight(nativeEvent.layout.height)
    }, props.label && /*#__PURE__*/React.createElement(Label, {
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
          outputRange: ['transparent', colors.white]
        }),
        marginTop: props.textArea ? 16 : 0
      }]
    }), /*#__PURE__*/React.createElement(View, {
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
    }, children, /*#__PURE__*/React.createElement(TextInput, _extends({}, props, {
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
    })), hasError.status && /*#__PURE__*/React.createElement(View, {
      style: styles.errorWrapper
    }, /*#__PURE__*/React.createElement(Text, {
      style: styles.exclamation
    }, '\u0021')))), hasError.status && /*#__PURE__*/React.createElement(Text, {
      style: [styles.underneathText, props.underneathTextStyle]
    }, props.underneathText || hasError.message));
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, props.label && /*#__PURE__*/React.createElement(Label, {
    text: props.label,
    textStyle: [styles.label, !props.asterik ? {
      marginLeft: 4
    } : undefined, props.labelStyle],
    asterik: props.asterik
  }), /*#__PURE__*/React.createElement(View, {
    style: [styles.wrapper, props.textArea ? {
      height: 120
    } : undefined, props.style, hasError.status ? {
      borderColor: colors.red,
      borderWidth: 1
    } : undefined]
  }, children, /*#__PURE__*/React.createElement(TextInput, _extends({}, props, {
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
  })), hasError.status && /*#__PURE__*/React.createElement(View, {
    style: styles.errorWrapper
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.exclamation
  }, '\u0021'))), hasError.status && /*#__PURE__*/React.createElement(Text, {
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

export const containsError = (keyboardType = 'default', isRequired, value, extraValidation) => {
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
const styles = StyleSheet.create({
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
    ...Platform.select({
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
    color: colors.red
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
    backgroundColor: colors.red
  },
  exclamation: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  }
});
export default FormItem;
//# sourceMappingURL=index.js.map