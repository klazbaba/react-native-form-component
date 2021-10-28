"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("@testing-library/react-native");

var _ = _interopRequireDefault(require("./"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('test FormInput', () => {
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
      getByTestId,
      queryByText
    } = (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_.default, {
      value: "giwaklaz@gmail.com",
      keyboardType: "email-address"
    }));
    (0, _reactNative.fireEvent)(getByTestId('input'), 'blur');
    expect(queryByText('Enter a valid email')).toBeNull();
  });
});
//# sourceMappingURL=FormItem.test.js.map