import React, { forwardRef, useState } from 'react';
import {
  TextInput,
  TextInputProperties,
  View,
  StyleSheet,
  Text,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  KeyboardTypeOptions,
} from 'react-native';

import Label from '../components/Label';
import { colors } from '../colors';

interface Props extends TextInputProperties {
  textInputStyle?: object | object[];
  children?: Element;
  underneathText?: string;
  underneathTextStyle?: object | object[];
  label?: string;
  labelStyle?: object | object[];
  isRequired?: boolean;
  value: string;
}

const FormItem = forwardRef(({ children, ...props }: Props, ref) => {
  const [hasError, setHasError] = useState({ status: false, message: '' });
  const { isRequired, value, keyboardType } = props;

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setHasError(containsError(keyboardType, isRequired!, value));
    if (props.onBlur) props.onBlur(e);
  };

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setHasError({ status: false, message: '' });
    if (props.onFocus) props.onFocus(e);
  };

  return (
    <>
      {props.label && (
        <Label
          text={props.label}
          style={[styles.label, props.labelStyle]}
          isRequired={props.isRequired}
        />
      )}
      <View
        style={[
          styles.wrapper,
          props.style,
          hasError.status
            ? { borderColor: colors.red, borderWidth: 1 }
            : undefined,
        ]}
      >
        {
          // this is separated from props because adding it causes TextInput to throw an error
          children
        }
        <TextInput
          {...props}
          style={[styles.inputText, props.textInputStyle]}
          // @ts-ignore
          ref={ref}
          onBlur={handleBlur}
          onFocus={handleFocus}
          value={props.value}
          autoCapitalize={
            props.keyboardType == 'email-address' ? 'none' : undefined
          }
        />
        {hasError.status && (
          <View style={styles.errorWrapper}>
            <Text style={styles.exclamation}>{'\u0021'}</Text>
          </View>
        )}
      </View>

      {hasError.status && (
        <Text style={[styles.underneathText, props.underneathTextStyle]}>
          {props.underneathText || hasError.message + '!'}
        </Text>
      )}
    </>
  );
});

const validateEmail = (email: string) => {
  return /^\S+@\S+\.\S+$/.test(email);
};

export const containsError = (
  keyboardType: KeyboardTypeOptions = 'default',
  isRequired: boolean,
  value: string
) => {
  if (keyboardType == 'email-address' && !validateEmail(value))
    return { status: true, message: 'Enter a valid email' };
  if (isRequired && value.length === 0)
    return { status: true, message: 'Cannot be empty' };

  return { status: false, message: '' };
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 8,
    minHeight: 48,
    alignItems: 'center',
    marginBottom: 24,
  },
  inputText: {
    flex: 1,
    paddingVertical: 8,
  },
  underneathText: {
    marginTop: -24,
    marginLeft: 8,
    marginBottom: 24,
    color: colors.red,
  },
  label: {
    marginBottom: 2,
  },
  errorWrapper: {
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.red,
  },
  exclamation: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default FormItem;
