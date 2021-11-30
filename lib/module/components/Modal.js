function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { View, StyleSheet, Modal as NativeModal } from 'react-native';
export default function Modal(props) {
  if (props.show) {
    return /*#__PURE__*/React.createElement(NativeModal, _extends({}, props, {
      transparent: true,
      visible: true
    }), /*#__PURE__*/React.createElement(View, {
      style: {
        backgroundColor: props.backgroundColor,
        ...StyleSheet.absoluteFillObject
      }
    }), props.children);
  }

  return null;
}
//# sourceMappingURL=Modal.js.map