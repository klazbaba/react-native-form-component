import React, { useState, createRef } from 'react';
import { View, StyleSheet } from 'react-native';
import FormItem from './FormItem';
const refs = [];
export default function PinInput(props) {
  const [pin, setPin] = useState(Array(props.numOfInput).fill(''));

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
    style: styles.wrapper
  }, pin.map((_, index) => /*#__PURE__*/React.createElement(FormItem, {
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
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row'
  },
  formItem: {
    maxWidth: 30,
    backgroundColor: 'transparent',
    borderBottomWidth: StyleSheet.hairlineWidth,
    textAlign: 'center'
  }
});
//# sourceMappingURL=PinInput.js.map