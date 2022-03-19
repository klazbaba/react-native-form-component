"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("@testing-library/react-native");

var _ = _interopRequireDefault(require("./"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('test email input to FormInput', () => {
  it('renders error when email format is wrong', () => {
    const {
      getByTestId,
      getByText
    } = (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_.default, {
      value: "xyz@mail.",
      keyboardType: "email-address"
    }));
    (0, _reactNative.fireEvent)(getByTestId('input'), 'blur');
    expect(getByText('Enter a valid email')).toBeTruthy();
  });
  it('does not render email error when email format is correct', () => {
    const {
      getByDisplayValue,
      queryByText
    } = (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_.default, {
      value: "giwaklaz@gmail.com",
      keyboardType: "email-address"
    }));
    (0, _reactNative.fireEvent)(getByDisplayValue('giwaklaz@gmail.com'), 'blur');
    expect(queryByText('Enter a valid email')).toBeNull();
  });
});
describe('test number input to FormInput', () => {
  it('renders error if a non number is entered', () => {
    const {
      getByDisplayValue,
      getByText
    } = (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_.default, {
      value: "1472ad",
      keyboardType: "numeric"
    }));
    (0, _reactNative.fireEvent)(getByDisplayValue('1472ad'), 'blur');
    expect(getByText('Invalid number')).toBeTruthy();
  });
});
describe('test behaviour when an error occurs', () => {
  it('should not show error icon when showErrorIcon is false', () => {
    const {
      getByDisplayValue,
      queryByText
    } = (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_.default, {
      value: "",
      showErrorIcon: false,
      isRequired: true
    }));
    (0, _reactNative.fireEvent)(getByDisplayValue(''), 'blur');
    expect(queryByText('\u0021')).toBeFalsy();
  });
  it('should show error icon when an error occurs', () => {
    const {
      getByDisplayValue,
      queryByText
    } = (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_.default, {
      value: "",
      isRequired: true
    }));
    (0, _reactNative.fireEvent)(getByDisplayValue(''), 'blur');
    expect(queryByText('\u0021')).toBeTruthy();
  });
  it('error border color can be set to any color', () => {
    const {
      getByDisplayValue
    } = (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_.default, {
      value: "",
      errorBorderColor: "green"
    }));
    const element = getByDisplayValue('');
    (0, _reactNative.fireEvent)(element, 'blur');
    expect(element.props.errorBorderColor).toBe('green');
  });
});
//# sourceMappingURL=FormItem.test.js.map