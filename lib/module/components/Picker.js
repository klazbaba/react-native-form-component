import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Pressable, ScrollView, Text, Animated } from 'react-native';
import { colors } from '../colors';
import Label from './Label';
import Modal from './Modal';
export default function Picker(props) {
  var _props$items$filter$;

  const [selectedValue, setSelectedValue] = useState(props.selectedValue);
  const [showPicker, setShowPicker] = useState(false);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });
  const [animatedBottom, setAnimatedBottom] = useState(new Animated.Value(0));
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const pickerRef = useRef();

  const handlePress = () => {
    var _pickerRef$current;

    if (props.floatingLabel && shouldAnimate) Animated.timing(animatedBottom, {
      toValue: position.height - 10,
      useNativeDriver: false,
      duration: 300
    }).start(() => setShouldAnimate(false));
    if (!showPicker) (_pickerRef$current = pickerRef.current) === null || _pickerRef$current === void 0 ? void 0 : _pickerRef$current.measureInWindow((x, y, width, height) => {
      setPosition({
        x,
        y,
        width,
        height
      });
    });
    setShowPicker(!showPicker);
  };

  useEffect(() => {
    if (props.floatingLabel && props.selectedValue) Animated.timing(animatedBottom, {
      toValue: position.height - 10,
      useNativeDriver: false,
      duration: 300
    }).start(() => setShouldAnimate(false));
  }, [shouldAnimate, position]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, props.label && !props.floatingLabel && /*#__PURE__*/React.createElement(Label, {
    text: props.label,
    textStyle: props.labelStyle,
    style: props.labelWrapperStyle,
    asterik: props.asterik,
    asterikStyle: props.asterikStyle
  }), /*#__PURE__*/React.createElement(Pressable, {
    style: [styles.pickerButton, props.buttonStyle],
    onPress: handlePress,
    ref: pickerRef,
    onLayout: ({
      nativeEvent
    }) => {
      setPosition({ ...position,
        height: nativeEvent.layout.height
      });
      setAnimatedBottom(new Animated.Value(nativeEvent.layout.height / 4));
    }
  }, props.floatingLabel && props.label && /*#__PURE__*/React.createElement(Label, {
    text: props.label,
    textStyle: props.labelStyle,
    style: [props.labelWrapperStyle, {
      position: 'absolute',
      bottom: animatedBottom,
      paddingHorizontal: 2,
      backgroundColor: animatedBottom.interpolate({
        inputRange: [0, position.height / 3, position.height / 2],
        outputRange: ['transparent', 'transparent', colors.white]
      })
    }],
    asterik: props.asterik,
    asterikStyle: props.asterikStyle
  }), /*#__PURE__*/React.createElement(Text, {
    style: [{
      maxWidth: '90%',
      opacity: props.floatingLabel && shouldAnimate ? 0 : 1
    }, props.selectedValueStyle],
    numberOfLines: 1
  }, ((_props$items$filter$ = props.items.filter(item => item.value === props.selectedValue)[0]) === null || _props$items$filter$ === void 0 ? void 0 : _props$items$filter$.label) || props.placeholder || '--Pick a value--'), /*#__PURE__*/React.createElement(View, {
    style: [styles.childIconWrapper, props.iconWrapperStyle]
  }, props.pickerIcon || /*#__PURE__*/React.createElement(View, {
    style: styles.pickerIcon
  }))), /*#__PURE__*/React.createElement(Modal, {
    show: showPicker
  }, /*#__PURE__*/React.createElement(Pressable, {
    style: [{ ...StyleSheet.absoluteFillObject,
      elevation: 3
    }, props.type === 'dropdown' ? {} : {
      justifyContent: 'flex-end'
    }],
    onPress: () => setShowPicker(false)
  }, /*#__PURE__*/React.createElement(View, {
    style: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      ...StyleSheet.absoluteFillObject
    }
  }), props.type === 'dropdown' ? /*#__PURE__*/React.createElement(ScrollView, {
    style: [styles.wrapper, {
      width: position.width,
      position: 'absolute',
      top: position.y + position.height + 8,
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
  }, item.label)))) : /*#__PURE__*/React.createElement(View, {
    style: {
      justifyContent: 'flex-end',
      maxHeight: '50%'
    }
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.buttomHeader
  }, /*#__PURE__*/React.createElement(Text, {
    style: [props.itemLabelStyle, styles.buttomButtonText]
  }, props.label)), /*#__PURE__*/React.createElement(ScrollView, null, props.items.map(item => /*#__PURE__*/React.createElement(Pressable, {
    key: item.value,
    style: [styles.button, styles.buttomButton, props.selectedValue === item.value ? {
      backgroundColor: colors.blue
    } : null],
    onPress: () => {
      setSelectedValue(item.value);
      setShowPicker(false);
      props.onSelection(item);
    }
  }, /*#__PURE__*/React.createElement(Text, {
    style: [props.itemLabelStyle, styles.buttomButtonText, {
      color: selectedValue === item.value ? colors.white : colors.text
    }]
  }, item.label))))))));
}
Picker.defaultProps = {
  type: 'dropdown'
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
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 8,
    marginBottom: 24,
    height: 44,
    backgroundColor: colors.white
  },
  childIconWrapper: {
    backgroundColor: colors.white,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 8,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    marginRight: 8
  },
  pickerIcon: {
    borderTopColor: colors.grey,
    borderTopWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftWidth: 9,
    borderRightWidth: 9,
    borderBottomWidth: 0,
    borderRadius: 4
  },
  buttomButton: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(0,0,0,0.1)',
    height: 50,
    justifyContent: 'center',
    backgroundColor: colors.white,
    marginHorizontal: 8
  },
  buttomButtonText: {
    textAlign: 'center',
    fontSize: 16
  },
  buttomHeader: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    marginHorizontal: 8,
    fontSize: 16
  }
});
//# sourceMappingURL=Picker.js.map