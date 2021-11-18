import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import FormItem from './';
describe('test email input to FormInput', () => {
  it('renders error when email format is wrong', () => {
    const {
      getByTestId,
      getByText
    } = render( /*#__PURE__*/React.createElement(FormItem, {
      value: "xyz@mail.",
      keyboardType: "email-address"
    }));
    fireEvent(getByTestId('input'), 'blur');
    expect(getByText('Enter a valid email')).toBeTruthy();
  });
  it('does not render email error when email format is correct', () => {
    const {
      getByTestId,
      queryByText
    } = render( /*#__PURE__*/React.createElement(FormItem, {
      value: "giwaklaz@gmail.com",
      keyboardType: "email-address"
    }));
    fireEvent(getByTestId('input'), 'blur');
    expect(queryByText('Enter a valid email')).toBeNull();
  });
});
describe('test number input to FormInput', () => {
  it('renders error if a non number is entered', () => {
    const {
      getByTestId,
      getByText
    } = render( /*#__PURE__*/React.createElement(FormItem, {
      value: "1472ad",
      keyboardType: "numeric"
    }));
    fireEvent(getByTestId('input'), 'blur');
    expect(getByText('Invalid number')).toBeTruthy();
  });
});
//# sourceMappingURL=FormItem.test.js.map