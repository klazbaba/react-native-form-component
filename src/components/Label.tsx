import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

interface Props {
  text: string;
  asterik?: boolean;
  style?: object | object[];
}

export default function Label(props: Props) {
  return (
    <View style={styles.wrapper}>
      <Text style={[styles.label, props.style]}>{props.text}</Text>
      {props.asterik ? <Text style={styles.asterik}>*</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  asterik: {
    color: 'red',
    fontSize: 16,
    marginLeft: 2,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: 'black',
  },
  wrapper: {
    flexDirection: 'row',
  },
});
