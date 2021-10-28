import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import FormItem from './';

describe('test FormInput', () => {
  it('renders error when email format is wrong', () => {
    const { getByTestId, getByText } = render(
      <FormItem value="xyz@mail." keyboardType="email-address" />
    );

    fireEvent(getByTestId('input'), 'blur');
    expect(getByText('Enter a valid email')).toBeTruthy();
  });

  it('does not render email error when email format is correct', () => {
    const { getByTestId, queryByText } = render(
      <FormItem value="giwaklaz@gmail.com" keyboardType="email-address" />
    );

    fireEvent(getByTestId('input'), 'blur');
    expect(queryByText('Enter a valid email')).toBeNull();
  });
});
