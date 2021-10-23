import React from 'react';
import { View, StyleSheet, Modal as Native } from 'react-native';
export default function Modal(props) {
  if (props.show) {
    return /*#__PURE__*/React.createElement(Native, {
      transparent: true
    }, /*#__PURE__*/React.createElement(View, {
      style: {
        backgroundColor: props.backgroundColor,
        ...StyleSheet.absoluteFillObject
      }
    }), props.children);
  }

  return null;
}
//# sourceMappingURL=Modal.js.map