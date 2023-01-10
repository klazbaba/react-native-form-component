import React, { createRef } from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import FormItem from '../FormItem';
import Form from './';
describe('Form', () => {
  it('calls onButtonPress prop function when all fields are valid', () => {
    const onButtonPress = jest.fn();
    const emailInput = /*#__PURE__*/createRef();
    const secondInput = /*#__PURE__*/createRef();
    const {
      getByText
    } = render( /*#__PURE__*/React.createElement(Form, {
      onButtonPress: onButtonPress
    }, /*#__PURE__*/React.createElement(FormItem, {
      keyboardType: "email-address",
      isRequired: true,
      value: "test@example.com",
      ref: emailInput
    }), /*#__PURE__*/React.createElement(FormItem, {
      isRequired: true,
      value: "Test value",
      ref: secondInput
    })));
    const submitButton = getByText('Submit');
    fireEvent.press(submitButton);
    expect(onButtonPress).toHaveBeenCalled();
  });
  it('does not call onButtonPress prop function when any field is invalid', () => {
    const onButtonPress = jest.fn();
    const emailInput = /*#__PURE__*/createRef();
    const secondInput = /*#__PURE__*/createRef();
    const {
      getByText
    } = render( /*#__PURE__*/React.createElement(Form, {
      onButtonPress: onButtonPress
    }, /*#__PURE__*/React.createElement(FormItem, {
      keyboardType: "email-address",
      isRequired: true,
      value: "test@example.com",
      ref: emailInput
    }), /*#__PURE__*/React.createElement(FormItem, {
      isRequired: true,
      value: "",
      ref: secondInput
    })));
    const submitButton = getByText('Submit');
    fireEvent.press(submitButton);
    expect(onButtonPress).not.toHaveBeenCalled();
  });
});
//# sourceMappingURL=Form.test.js.map