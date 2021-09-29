import React from 'react';
import { Text, StyleSheet, Animated } from 'react-native';

interface Props {
  text: string;
  asterik?: boolean;
  style?: object | object[];
  textStyle?: object | object[];
}

export default function Label(props: Props) {
  return (
    <Animated.View style={[styles.wrapper, props.style]}>
      <Text style={[styles.label, props.textStyle]}>{props.text}</Text>
      {props.asterik ? <Text style={styles.asterik}>*</Text> : null}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  asterik: {
    color: '#C92B2B',
    fontSize: 16,
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
