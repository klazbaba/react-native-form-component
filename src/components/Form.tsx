import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

interface Props {
  children: Element | Element[];
}

export default function Form(props: Props) {
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : undefined}
    >
      {props.children}
    </KeyboardAvoidingView>
  );
}
