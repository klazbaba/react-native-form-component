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

interface Props extends TextInputProperties {
  textInputStyle?: object | object[];
  children?: Element;
  underneathText?: string;
  underneathTextStyle?: object;
  label?: string;
  labelStyle?: object;
  isRequired?: boolean;
  value: string;
}

export type FormItemProps = Props;

const FormItem = forwardRef(({ children, ...props }: FormItemProps, ref) => {
  const [hasError, setHasError] = useState(false);
  const { isRequired, value, keyboardType } = props;

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setHasError(!isErrorFree(keyboardType, isRequired!, value));
    if (props.onBlur) props.onBlur(e);
  };

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setHasError(false);
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
          hasError ? { borderColor: 'red', borderWidth: 0.8 } : undefined,
          props.style,
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
        />
        {hasError && (
          <View style={styles.errorWrapper}>
            <Text style={styles.exclamation}>{'\u0021'}</Text>
          </View>
        )}
      </View>
      {!!props.underneathText && (
        <Label
          text={props.underneathText}
          style={[styles.underneathText, props.underneathTextStyle]}
        />
      )}
    </>
  );
});

const validateEmail = (email: string) => {
  return /^\S+@\S+\.\S+$/.test(email);
};

export const isErrorFree = (
  keyboardType: KeyboardTypeOptions = 'default',
  isRequired: boolean,
  value: string
) => {
  if (isRequired && !value?.length) return false;
  if (keyboardType == 'email-address') {
    if (!isRequired && !value?.length) return true;
    const isEmail = validateEmail(value);
    if (!isEmail) return false;
  }

  return true;
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 8,
    minHeight: 48,
    alignItems: 'center',
    marginBottom: 16,
  },
  inputText: {
    flex: 1,
    paddingVertical: 8,
  },
  underneathText: {
    marginTop: 8,
    marginLeft: 8,
    color: 'white',
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
    backgroundColor: 'red',
  },
  exclamation: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default FormItem;
