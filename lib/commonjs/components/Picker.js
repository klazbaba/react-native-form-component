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

const button = /*#__PURE__*/(0, _react.createRef)();

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
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.label && /*#__PURE__*/_react.default.createElement(_Label.default, {
    text: props.label,
    textStyle: props.labelStyle,
    style: props.labelWrapperStyle,
    asterik: props.asterik,
    asterikStyle: props.asterikStyle
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    style: [styles.pickerButton, props.buttonStyle],
    onPress: () => {
      setShowPicker(!showPicker);
    } // @ts-ignore
    ,
    ref: button,
    onLayout: ({
      nativeEvent
    }) => {
      var _button$current;

      if (_reactNative.Platform.OS === 'web') setPosition({
        height: nativeEvent.layout.height,
        y: nativeEvent.layout.y,
        width: nativeEvent.layout.width,
        x: nativeEvent.layout.x
      });else (_button$current = button.current) === null || _button$current === void 0 ? void 0 : _button$current.measure((_x, _y, width, height, pageX, pageY) => {
        setPosition({
          height: height,
          y: pageY + height,
          width: width,
          x: pageX
        });
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [{
      maxWidth: '90%'
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
    zIndex: 10,
    maxHeight: 200,
    flexGrow: 0,
    borderWidth: 0.5,
    borderColor: _colors.colors.lightBlue,
    elevation: 50,
    shadowColor: _colors.colors.lightgrey,
    shadowOffset: {
      width: 0,
      height: 5
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