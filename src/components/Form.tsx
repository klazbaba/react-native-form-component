import React, { useEffect, Children } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { isErrorFree } from './FormItem';

interface Props {
  children: Element | Element[];
  keyboardVerticalOffset?: number;
}

export default function Form(props: Props) {
  const errors: boolean[] = [];
  useEffect(() => {
    Children.forEach(props.children, (child) => {
      //@ts-ignore
      const { keyboardType, isRequired, value } = child.props;
      errors.push(isErrorFree(keyboardType, isRequired, value));
    });
    console.warn(errors);
  });

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
