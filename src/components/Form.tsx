import React, { Children, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  StyleSheet,
} from 'react-native';

import { containsError } from './FormItem';
import { colors } from '../colors';

interface Props {
  children: Element | Element[];
  keyboardVerticalOffset?: number;
  buttonText?: string;
  buttonStyle?: object | object[];
  buttonTextStyle?: object | object[];
  onButtonPress: () => void;
}

export let submitForm: Function;
export default function Form(props: Props) {
  const [width, setWidth] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const handleButtonPress = () => {
    const fieldsWithError: string[] = [];
    Children.forEach(props.children, (child, index) => {
      //@ts-ignore
      const { keyboardType, isRequired, value } = child.props;
      if (containsError(keyboardType, isRequired, value).status) {
        fieldsWithError.push(
          //@ts-ignore
          child.props.label || child.props.placeholder || 'FormItem' + index
        );
        //@ts-ignore
        child.ref.current.setState();
      }
    });

    if (fieldsWithError.length) {
      console.error(
        'The following fields do not fulfil their conditions:\n' +
          JSON.stringify(fieldsWithError, null, 2)
      );
      return;
    }

    props.onButtonPress();
  };
  submitForm = handleButtonPress;

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={
        Platform.OS == 'ios' ? props.keyboardVerticalOffset || 50 : undefined
      }
      behavior={Platform.OS == 'ios' ? 'padding' : undefined}
    >
      {props.children}
      <Pressable
        style={[
          styles.button,
          Platform.OS == 'ios' ? { opacity } : undefined,
          props.buttonStyle,
        ]}
        onPress={handleButtonPress}
        android_ripple={{ color: 'lightgrey', radius: width }}
        onLayout={(event) => setWidth(event.nativeEvent.layout.width)}
        onPressIn={() => setOpacity(0.5)}
        onPressOut={() => setOpacity(1)}
      >
        <Text style={[styles.buttonText, props.buttonTextStyle]}>
          {props.buttonText || 'Submit'}
        </Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.red,
    borderRadius: 8,
    marginVertical: 32,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
