function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useState, createRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../colors';
import FormItem from './FormItem';
const refs = [];
export default function PinInput(props) {
  const [pin, setPin] = useState(Array(props.numOfInput).fill(''));
  const [activeInput, setActiveInput] = useState(0);
  if (!refs.length) {
    for (let i = 0; i < pin.length; i++) {
      refs.push( /*#__PURE__*/createRef());
    }
  }
  const changeFocus = (index, text) => {
    var _refs, _refs$current, _refs2, _refs2$current;
    if (text) (_refs = refs[index + 1]) === null || _refs === void 0 ? void 0 : (_refs$current = _refs.current) === null || _refs$current === void 0 ? void 0 : _refs$current.focus();else (_refs2 = refs[index - 1]) === null || _refs2 === void 0 ? void 0 : (_refs2$current = _refs2.current) === null || _refs2$current === void 0 ? void 0 : _refs2$current.focus();
  };
  return /*#__PURE__*/React.createElement(View, {
    style: [styles.wrapper, props.style]
  }, pin.map((_, index) => /*#__PURE__*/React.createElement(FormItem, _extends({}, props, {
    value: pin[index],
    style: styles.formItem,
    onChangeText: text => {
      pin[index] = text;
      setPin([...pin]);
      changeFocus(index, text);
      props.onChangeText(pin.toString().replace(/,/g, ''));
    },
    textInputStyle: [styles.input, {
      borderBottomColor: activeInput === index ? colors.black : colors.lightgrey
    }, props.textInputStyle],
    maxLength: 1,
    key: index,
    ref: refs[index],
    onFocus: () => setActiveInput(index),
    customValidation: () => ({
      status: true,
      message: ''
    })
  }))));
}
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  input: {
    maxWidth: 40,
    borderBottomWidth: 1.5,
    textAlign: 'center',
    fontSize: 20
  },
  formItem: {
    backgroundColor: 'transparent',
    paddingLeft: 0,
    paddingRight: 0,
    minWidth: 40
  }
});
//# sourceMappingURL=PinInput.js.map