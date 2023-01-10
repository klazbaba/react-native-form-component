import React, { createRef } from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import FormItem from '../FormItem';
import Form from './';

describe('Form', () => {
  it('calls onButtonPress prop function when all fields are valid', () => {
    const onButtonPress = jest.fn();
    const emailInput = createRef();
    const secondInput = createRef();

    const { getByText } = render(
      <Form onButtonPress={onButtonPress}>
        <FormItem
          keyboardType="email-address"
          isRequired
          value="test@example.com"
          ref={emailInput}
        />
        <FormItem isRequired value="Test value" ref={secondInput} />
      </Form>
    );

    const submitButton = getByText('Submit');
    fireEvent.press(submitButton);

    expect(onButtonPress).toHaveBeenCalled();
  });

  it('does not call onButtonPress prop function when any field is invalid', () => {
    const onButtonPress = jest.fn();
    const emailInput = createRef();
    const secondInput = createRef();

    const { getByText } = render(
      <Form onButtonPress={onButtonPress}>
        <FormItem
          keyboardType="email-address"
          isRequired
          value="test@example.com"
          ref={emailInput}
        />
        <FormItem isRequired value="" ref={secondInput} />
      </Form>
    );

    const submitButton = getByText('Submit');
    fireEvent.press(submitButton);

    expect(onButtonPress).not.toHaveBeenCalled();
  });
});
