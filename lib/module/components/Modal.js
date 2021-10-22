import React from 'react';
import { View, StyleSheet, Modal as NativeModal, Platform } from 'react-native';
export default function Modal(props) {
  if (props.show) {
    if (Platform.OS !== 'web') return /*#__PURE__*/React.createElement(NativeModal, {
      transparent: true
    }, /*#__PURE__*/React.createElement(View, {
      style: {
        backgroundColor: props.backgroundColor,
        ...StyleSheet.absoluteFillObject
      }
    }), props.children);
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
    elevation: 3,
    zIndex: 1
  }
});
//# sourceMappingURL=Modal.js.map