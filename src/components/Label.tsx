import React, { ReactText } from 'react';
import { Text, StyleSheet, Animated } from 'react-native';

interface LabelProps {
  text: ReactText;
  asterik?: boolean;
  style?: object | object[];
  textStyle?: object | object[];
  asterikStyle?: object | object[];
}

export default function Label(props: LabelProps) {
  return (
    <Animated.View style={[styles.wrapper, props.style]}>
      <Text style={[styles.label, props.textStyle]}>{props.text}</Text>
      {props.asterik ? (
        <Text style={[styles.asterik, props.asterikStyle]}>*</Text>
      ) : null}
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
    fontWeight: 'bold',
    color: 'black',
  },
  wrapper: {
    flexDirection: 'row',
  },
});
