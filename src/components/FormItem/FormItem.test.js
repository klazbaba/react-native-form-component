import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import FormItem from './';

describe('test email input to FormInput', () => {
  it('renders error when email format is wrong', () => {
    const { getByTestId, getByText } = render(
      <FormItem value="xyz@mail." keyboardType="email-address" />
    );

    fireEvent(getByTestId('input'), 'blur');
    expect(getByText('Enter a valid email')).toBeTruthy();
  });

  it('does not render email error when email format is correct', () => {
    const { getByDisplayValue, queryByText } = render(
      <FormItem value="giwaklaz@gmail.com" keyboardType="email-address" />
    );

    fireEvent(getByDisplayValue('giwaklaz@gmail.com'), 'blur');
    expect(queryByText('Enter a valid email')).toBeNull();
  });
});

describe('test number input to FormInput', () => {
  it('renders error if a non number is entered', () => {
    const { getByDisplayValue, getByText } = render(
      <FormItem value="1472ad" keyboardType="numeric" />
    );

    fireEvent(getByDisplayValue('1472ad'), 'blur');
    expect(getByText('Invalid number')).toBeTruthy();
  });
});

describe('test behaviour when an error occurs', () => {
  it('should not show error icon when showErrorIcon is false', () => {
    const { getByDisplayValue, queryByText } = render(
      <FormItem value="" showErrorIcon={false} isRequired />
    );

    fireEvent(getByDisplayValue(''), 'blur');
    expect(queryByText('\u0021')).toBeFalsy();
  });

  it('should show error icon when an error occurs', () => {
    const { getByDisplayValue, queryByText } = render(
      <FormItem value="" isRequired />
    );

    fireEvent(getByDisplayValue(''), 'blur');
    expect(queryByText('\u0021')).toBeTruthy();
  });

  it('error border color can be set to any color', () => {
    const { getByDisplayValue } = render(
      <FormItem value="" errorBorderColor="green" />
    );

    const element = getByDisplayValue('');
    fireEvent(element, 'blur');
    expect(element.props.errorBorderColor).toBe('green');
  });
});
