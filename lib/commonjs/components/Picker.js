"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Picker;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _colors = require("../colors");

var _Label = _interopRequireDefault(require("./Label"));

var _Modal = _interopRequireDefault(require("./Modal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Picker(props) {
  var _props$items$filter$;

  const [selectedValue, setSelectedValue] = (0, _react.useState)(props.selectedValue);
  const [showPicker, setShowPicker] = (0, _react.useState)(false);
  const [position, setPosition] = (0, _react.useState)({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });
  const [animatedBottom] = (0, _react.useState)(new _reactNative.Animated.Value(0));
  const [shouldAnimate, setShouldAnimate] = (0, _react.useState)(true);
  const pickerRef = (0, _react.useRef)();

  const handlePress = () => {
    var _pickerRef$current;

    if (props.floatingLabel && shouldAnimate) _reactNative.Animated.timing(animatedBottom, {
      toValue: position.height,
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

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.label && !props.floatingLabel && /*#__PURE__*/_react.default.createElement(_Label.default, {
    text: props.label,
    textStyle: props.labelStyle,
    style: props.labelWrapperStyle,
    asterik: props.asterik,
    asterikStyle: props.asterikStyle
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    style: [styles.pickerButton, props.buttonStyle],
    onPress: handlePress,
    ref: pickerRef,
    onLayout: ({
      nativeEvent
    }) => setPosition({ ...position,
      height: nativeEvent.layout.height
    })
  }, props.floatingLabel && props.label && /*#__PURE__*/_react.default.createElement(_Label.default, {
    text: props.label,
    textStyle: props.labelStyle,
    style: [props.labelWrapperStyle, {
      position: 'absolute',
      marginBottom: animatedBottom,
      paddingHorizontal: 2,
      backgroundColor: animatedBottom.interpolate({
        inputRange: [0, position.height],
        outputRange: ['transparent', _colors.colors.white]
      })
    }],
    asterik: props.asterik,
    asterikStyle: props.asterikStyle
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [{
      maxWidth: '90%',
      opacity: props.floatingLabel && shouldAnimate ? 0 : 1
    }, props.selectedValueStyle],
    numberOfLines: 1
  }, ((_props$items$filter$ = props.items.filter(item => item.value === props.selectedValue)[0]) === null || _props$items$filter$ === void 0 ? void 0 : _props$items$filter$.label) || props.placeholder || '--Pick a value--'), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.childIconWrapper, props.iconWrapperStyle]
  }, props.pickerIcon || /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.pickerIcon
  }))), /*#__PURE__*/_react.default.createElement(_Modal.default, {
    show: showPicker
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    style: { ..._reactNative.StyleSheet.absoluteFillObject,
      elevation: 3
    },
    onPress: () => setShowPicker(false)
  }, /*#__PURE__*/_react.default.createElement(_reactNative.ScrollView, {
    style: [styles.wrapper, {
      width: position.width,
      position: 'absolute',
      top: position.y + position.height + 8,
      left: position.x
    }],
    nestedScrollEnabled: true
  }, props.items.map(item => /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    key: item.value,
    style: [styles.button, props.selectedValue === item.value ? {
      backgroundColor: _colors.colors.blue
    } : null],
    onPress: () => {
      setSelectedValue(item.value);
      setShowPicker(false);
      props.onSelection(item);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [props.itemLabelStyle, {
      color: selectedValue === item.value ? _colors.colors.white : _colors.colors.text
    }]
  }, item.label)))))));
}

const styles = _reactNative.StyleSheet.create({
  wrapper: {
    backgroundColor: _colors.colors.white,
    borderRadius: 4,
    zIndex: 1,
    maxHeight: 200,
    flexGrow: 0,
    borderWidth: 0.5,
    borderColor: _colors.colors.lightBlue,
    elevation: 4,
    shadowColor: _colors.colors.lightgrey,
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
    backgroundColor: _colors.colors.white
  },
  childIconWrapper: {
    backgroundColor: _colors.colors.white,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 8,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    marginRight: 8
  },
  pickerIcon: {
    borderTopColor: _colors.colors.grey,
    borderTopWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftWidth: 9,
    borderRightWidth: 9,
    borderBottomWidth: 0,
    borderRadius: 4
  }
});
//# sourceMappingURL=Picker.js.map