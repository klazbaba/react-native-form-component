import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface Props {
  text: string;
  isRequired?: boolean;
  labelStyle?: object | object[];
}

export default function Label(props: Props) {
  return (
    <Text style={styles.asterik}>
      {props.isRequired ? '*' : ''}
      <Text style={[styles.label, props.labelStyle]}>{props.text}</Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  asterik: {
    color: 'red',
    fontSize: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: 'bold',
  },
});
