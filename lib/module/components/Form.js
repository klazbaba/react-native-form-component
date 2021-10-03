import React, { Children, useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, Text, StyleSheet } from 'react-native';
import { containsError } from './FormItem';
import { colors } from '../colors';
export let submitForm;
export default function Form(props) {
  const [width, setWidth] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const handleButtonPress = () => {
    const fieldsWithError = [];
    Children.forEach(props.children, (child, index) => {
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

        if (containsError(keyboardType, isRequired, value, validation).status) {
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

  submitForm = () => handleButtonPress();

  return /*#__PURE__*/React.createElement(KeyboardAvoidingView, {
    keyboardVerticalOffset: Platform.OS == 'ios' ? props.keyboardVerticalOffset || 50 : undefined,
    behavior: Platform.OS == 'ios' ? 'padding' : undefined,
    style: {
      flex: 1
    }
  }, props.children, /*#__PURE__*/React.createElement(Pressable, {
    style: [styles.button, Platform.OS == 'ios' ? {
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
  }, /*#__PURE__*/React.createElement(Text, {
    style: [styles.buttonText, props.buttonTextStyle]
  }, props.buttonText || 'Submit')));
}
const styles = StyleSheet.create({
  button: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.red,
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