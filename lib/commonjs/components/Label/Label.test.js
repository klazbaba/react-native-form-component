"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactNative = require("@testing-library/react-native");
var _ = _interopRequireDefault(require("./"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('Label component', () => {
  it('renders the label text and an asterik if the asterik prop is passed as true', () => {
    const {
      getByText
    } = (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_.default, {
      text: "My Label",
      asterik: true
    }));
    const labelText = getByText('My Label');
    const asterik = getByText('*');
    expect(labelText).toBeTruthy();
    expect(asterik).toBeTruthy();
  });
});
//# sourceMappingURL=Label.test.js.map