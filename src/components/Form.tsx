import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

interface Props {
  children: Element | Element[];
  keyboardVerticalOffset?: number;
}

export default function Form(props: Props) {
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={
        Platform.OS == 'ios' ? props.keyboardVerticalOffset || 50 : undefined
      }
      behavior={Platform.OS == 'ios' ? 'padding' : undefined}
    >
      {props.children}
    </KeyboardAvoidingView>
  );
}
