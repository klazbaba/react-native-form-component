import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../../colors';
export default function ShowTextIcon(props) {
  if (props.showIcon && !props.hide) return props.showIcon;
  if (props.hideIcon && props.hide) return props.hideIcon;
  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(View, {
    style: styles.eye
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.circle
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.dot
  }))), props.hide && /*#__PURE__*/React.createElement(View, {
    style: styles.line
  }));
}
const styles = StyleSheet.create({
  eye: {
    borderWidth: 2,
    height: 15,
    width: 20,
    borderColor: colors.lightgrey,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: colors.grey
  },
  dot: {
    backgroundColor: colors.white,
    height: 2,
    width: 2,
    borderRadius: 1,
    marginLeft: 3,
    marginTop: 2
  },
  line: {
    height: 27,
    width: 2,
    backgroundColor: colors.lightgrey,
    position: 'absolute',
    transform: [{
      rotate: '-45deg'
    }],
    alignSelf: 'center',
    top: -6
  }
});
//# sourceMappingURL=ShowTextIcon.js.map