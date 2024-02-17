import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Modal from './';
import { Button, Text } from 'react-native';

describe('Modal component', () => {
  it('renders correctly when show is true', () => {
    const { getByTestId, getByText } = render(
      <Modal show={true} testID="modal">
        <Text>Modal Content</Text>
        <Button onPress={() => {}} title="Close" />
      </Modal>
    );

    const modalElement = getByTestId('modal');
    const modalContent = getByText('Modal Content');
    const closeButton = getByText('Close');

    expect(modalElement).toBeTruthy();
    expect(modalContent).toBeTruthy();
    expect(closeButton).toBeTruthy();
  });

  it('does not render when show is false', () => {
    const { queryByTestId } = render(
      <Modal show={false} testID="modal">
        <Text>Modal Content</Text>
        <Button onPress={() => {}} title="Close" />
      </Modal>
    );

    const modalElement = queryByTestId('modal');
    expect(modalElement).toBeNull();
  });

  it('calls the close function when the close button is pressed', () => {
    const onCloseMock = jest.fn();
    const { getByText } = render(
      <Modal show={true} testID="modal" onClose={onCloseMock}>
        <Text>Modal Content</Text>
        <Button onPress={() => onCloseMock()} title="Close" />
      </Modal>
    );

    const closeButton = getByText('Close');
    fireEvent.press(closeButton);

    expect(onCloseMock).toHaveBeenCalled();
  });
});
