import React from 'react';
import { View, StyleSheet } from 'react-native';
export default function Modal(props) {
  if (props.show) {
    return /*#__PURE__*/React.createElement(View, {
      style: styles.modal
    }, /*#__PURE__*/React.createElement(View, {
      style: {
        backgroundColor: props.backgroundColor,
        ...StyleSheet.absoluteFillObject
      }
    }), props.children);
  }

  return null;
}
const styles = StyleSheet.create({
  modal: { ...StyleSheet.absoluteFillObject,
    zIndex: 1
  }
});
//# sourceMappingURL=Modal.js.map