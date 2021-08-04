import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
export default function Label(props) {
  return /*#__PURE__*/React.createElement(View, {
    style: styles.wrapper
  }, /*#__PURE__*/React.createElement(Text, {
    style: [styles.label, props.style]
  }, props.text), props.asterik ? /*#__PURE__*/React.createElement(Text, {
    style: styles.asterik
  }, "*") : null);
}
const styles = StyleSheet.create({
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