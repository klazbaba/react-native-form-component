import React from 'react';
import { render } from '@testing-library/react-native';
import Label from './';

describe('Label component', () => {
  it('renders the label text and an asterik if the asterik prop is passed as true', () => {
    const { getByText } = render(<Label text="My Label" asterik={true} />);
    const labelText = getByText('My Label');
    const asterik = getByText('*');
    expect(labelText).toBeTruthy();
    expect(asterik).toBeTruthy();
  });
});
