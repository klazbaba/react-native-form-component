import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Picker from './';

describe('Picker component', () => {
  const items = [
    { label: 'Item 1', value: 'item1' },
    { label: 'Item 2', value: 'item2' },
    { label: 'Item 3', value: 'item3' },
  ];

  it('sets picker value as selectedValue', () => {
    const { getByText } = render(
      <Picker items={items} onSelection={() => {}} selectedValue="item1" />
    );

    expect(getByText('Item 1')).toBeTruthy();
  });

  it('calls onSelection with the correct item when an item is selected', () => {
    const onSelectionMock = jest.fn();
    const { getByTestId } = render(
      <Picker
        items={items}
        onSelection={onSelectionMock}
        selectedValue="item1"
        testID="picker"
      />
    );

    const picker = getByTestId('picker');
    fireEvent.press(picker);
    fireEvent.press(getByTestId('picker-item-item2'));
    expect(onSelectionMock).toHaveBeenCalledWith(items[1]);
  });

  it('renders correctly with floating label', () => {
    const { getByText } = render(
      <Picker
        items={items}
        onSelection={() => {}}
        selectedValue="item1"
        floatingLabel={true}
        label="Select an item"
      />
    );

    expect(getByText('Select an item')).toBeTruthy();
  });

  it('renders correctly with placeholder', () => {
    const { getByText } = render(
      <Picker
        items={items}
        onSelection={() => {}}
        selectedValue=""
        placeholder="Select an item"
      />
    );

    expect(getByText('Select an item')).toBeTruthy();
  });
});
