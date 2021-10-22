import React, { ReactNode } from 'react';
import { View, StyleSheet, Modal as NativeModal, Platform } from 'react-native';

interface Props {
  children: ReactNode;
  show: boolean;
  backgroundColor?: string;
}

export default function Modal(props: Props) {
  if (props.show) {
    if (Platform.OS !== 'web')
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

    return (
      <View style={styles.modal}>
        <View
          style={{
            backgroundColor: props.backgroundColor,
            ...StyleSheet.absoluteFillObject,
          }}
        />

        {props.children}
      </View>
    );
  }
  return null;
}

const styles = StyleSheet.create({
  modal: {
    ...StyleSheet.absoluteFillObject,
    elevation: 3,
    zIndex: 1,
  },
});
