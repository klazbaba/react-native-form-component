import React, { useState, createRef } from 'react';
import { View, StyleSheet, Pressable, Modal, ScrollView, Text } from 'react-native';
import { colors } from 'src/colors';
import Label from './Label';
const button = /*#__PURE__*/createRef();
export default function ShrPicker(props) {
  var _props$items$filter$;

  const [selectedValue, setSelectedValue] = useState(props.selectedValue);
  const [showPicker, setShowPicker] = useState(false);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, props.label && /*#__PURE__*/React.createElement(Label, props), /*#__PURE__*/React.createElement(Pressable, {
    style: [styles.pickerButton, props.buttonStyle],
    onPress: () => {
      var _button$current;

      (_button$current = button.current) === null || _button$current === void 0 ? void 0 : _button$current.measureInWindow((x, y, width, height) => setPosition({
        x,
        y,
        width,
        height
      }));
      setShowPicker(!showPicker);
    } // @ts-ignore
    ,
    ref: button
  }, /*#__PURE__*/React.createElement(Text, {
    style: [{
      maxWidth: '90%'
    }, props.selectedValueStyle],
    numberOfLines: 1
  }, ((_props$items$filter$ = props.items.filter(item => item.value === props.selectedValue)[0]) === null || _props$items$filter$ === void 0 ? void 0 : _props$items$filter$.label) || props.placeholder || '--Pick a value--'), /*#__PURE__*/React.createElement(View, {
    style: [styles.childIconWrapper, props.childWrapperStyle]
  }, props.children)), /*#__PURE__*/React.createElement(Modal, {
    transparent: true,
    visible: showPicker
  }, /*#__PURE__*/React.createElement(Pressable, {
    style: { ...StyleSheet.absoluteFillObject
    },
    onPress: () => setShowPicker(false)
  }, /*#__PURE__*/React.createElement(ScrollView, {
    style: [styles.wrapper, {
      top: position.height + position.y + 8,
      width: position.width,
      left: position.x
    }],
    nestedScrollEnabled: true
  }, props.items.map(item => /*#__PURE__*/React.createElement(Pressable, {
    key: item.value,
    style: [styles.button, props.selectedValue === item.value ? {
      backgroundColor: colors.blue
    } : null],
    onPress: () => {
      setSelectedValue(item.value);
      setShowPicker(false);
      props.onSelection(item);
    }
  }, /*#__PURE__*/React.createElement(Text, {
    style: [props.itemLabelStyle, {
      color: selectedValue === item.value ? colors.white : colors.text
    }]
  }, item.label)))))));
}
ShrPicker.defaultProps = {
  asterik: false,
  asterikStyle: {},
  buttonStyle: {}
};
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    borderRadius: 4,
    zIndex: 1,
    maxHeight: 200,
    flexGrow: 0,
    borderWidth: 0.5,
    borderColor: colors.lightBlue,
    elevation: 4,
    shadowColor: colors.lightgrey,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 1,
    shadowRadius: 4
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  pickerButton: {
    borderWidth: 1,
    borderColor: colors.lightBlue,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    paddingLeft: 8,
    height: 44,
    marginBottom: 24
  },
  childIconWrapper: {
    backgroundColor: colors.faintBlue,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'stretch',
    borderLeftWidth: 1,
    borderColor: colors.faintBlue,
    padding: 8,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4
  }
});
//# sourceMappingURL=Picker.js.map