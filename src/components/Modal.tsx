import React, { ReactNode } from 'react';
import {
  View,
  StyleSheet,
  Modal as NativeModal,
  ModalProps,
} from 'react-native';

interface Props extends ModalProps {
  children: ReactNode;
  show: boolean;
  backgroundColor?: string;
}

export default function Modal(props: Props) {
  if (props.show) {
    return (
      <NativeModal {...props} transparent visible>
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
