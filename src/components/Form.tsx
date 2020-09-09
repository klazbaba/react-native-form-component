import React, { Children } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  StyleSheet,
} from 'react-native';

import { isErrorFree } from './FormItem';

interface Props {
  children: Element | Element[];
  keyboardVerticalOffset?: number;
  buttonText?: string;
  buttonStyle?: object | object[];
  buttonTextStyle?: object | object[];
  onButtonPress: () => void;
}

export default function Form(props: Props) {
  const handleButtonPress = () => {
    const fieldsWithError: string[] = [];
    Children.forEach(props.children, (child) => {
      //@ts-ignore
      const { keyboardType, isRequired, value } = child.props;
      if (!isErrorFree(keyboardType, isRequired, value)) {
        //@ts-ignore
        fieldsWithError.push(child.props.label || child.props.placeholder);
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

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={
        Platform.OS == 'ios' ? props.keyboardVerticalOffset || 50 : undefined
      }
      behavior={Platform.OS == 'ios' ? 'padding' : undefined}
    >
      {props.children}

      <Pressable
        style={[styles.button, props.buttonStyle]}
        onPress={handleButtonPress}
        android_ripple={{ color: 'lightgrey', radius: 300 }}
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
    backgroundColor: '#D81F28',
    borderRadius: 8,
    marginVertical: 32,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
