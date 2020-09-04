import React, { useEffect, Children } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

interface Props {
  children: Element | Element[];
  keyboardVerticalOffset?: number;
}

export default function Form(props: Props) {
  useEffect(() => {
    Children.forEach(props.children, (child) => {
      //@ts-ignore
      console.warn(child.props);
    });
  }, [props.children]);

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
