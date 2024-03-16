import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import PinInput from './';

describe('PinInput component', () => {
  test('allows entering input', () => {
    const { getAllByTestId } = render(
      <PinInput
        numOfInput={4}
        inputTestID="pin-input-field"
        onChangeText={() => {}}
      />
    );
    const inputFields = getAllByTestId('pin-input-field');
    expect(inputFields.length).toBe(4);

    fireEvent.changeText(inputFields[0], '1');
    fireEvent.changeText(inputFields[1], '2');
    fireEvent.changeText(inputFields[2], '3');
    fireEvent.changeText(inputFields[3], '4');

    expect(inputFields[0].props.value).toBe('1');
    expect(inputFields[1].props.value).toBe('2');
    expect(inputFields[2].props.value).toBe('3');
    expect(inputFields[3].props.value).toBe('4');
  });
});
