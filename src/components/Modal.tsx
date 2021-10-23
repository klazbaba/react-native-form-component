import React, { ReactNode } from 'react';
import { View, StyleSheet, Modal as NativeModal } from 'react-native';

interface Props {
  children: ReactNode;
  show: boolean;
  backgroundColor?: string;
}

export default function Modal(props: Props) {
  if (props.show) {
    return (
      <NativeModal transparent>
        <View
          style={{
            backgroundColor: props.backgroundColor,
            ...StyleSheet.absoluteFillObject,
          }}
        />

        {props.children}
      </NativeModal>
    );
  }
  return null;
}
