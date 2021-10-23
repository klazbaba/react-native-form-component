import React, { ReactNode } from 'react';
import { View, StyleSheet, Modal as Native } from 'react-native';

interface Props {
  children: ReactNode;
  show: boolean;
  backgroundColor?: string;
}

export default function Modal(props: Props) {
  if (props.show) {
    return (
      <Native transparent>
        <View
          style={{
            backgroundColor: 'red',
            ...StyleSheet.absoluteFillObject,
            zIndex: 4,
          }}
        />

        {props.children}
      </Native>
    );
  }
  return null;
}
