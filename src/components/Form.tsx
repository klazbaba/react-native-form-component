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
  submitButtonText?: string;
  submitButtonStyle?: object | object[];
  submitButtonTextStyle?: object | object[];
}

export default function Form(props: Props) {
  const handleButtonPress = () => {
    const fieldsWithError: boolean[] = [];
    Children.forEach(props.children, (child) => {
      //@ts-ignore
      const { keyboardType, isRequired, value } = child.props;
      if (!isErrorFree(keyboardType, isRequired, value)) {
        //@ts-ignore
        fieldsWithError.push(child.props.label);
      }
    });

    if (fieldsWithError.length) {
      console.error(
        'The following fields do not fulfil their conditions:\n' +
          JSON.stringify(fieldsWithError, null, 2)
      );
      return;
    }
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
        style={[styles.button, props.submitButtonStyle]}
        onPress={handleButtonPress}
      >
        <Text style={[styles.buttonText, props.submitButtonTextStyle]}>
          {props.submitButtonText || 'Submit'}
        </Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b22222',
    borderRadius: 8,
    marginVertical: 32,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
