import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

interface Props {
  children: ReactNode;
  show: boolean;
  backgroundColor?: string;
}

export default function Modal(props: Props) {
  if (props.show) {
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
    zIndex: 1,
  },
});
