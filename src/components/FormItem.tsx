import React, {
  forwardRef,
  useState,
  useImperativeHandle,
  useRef,
  RefObject,
} from 'react';
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

type Validation = { status: boolean; message: string };

interface Props extends TextInputProperties {
  textInputStyle?: object | object[];
  children?: Element;
  underneathText?: string;
  underneathTextStyle?: object | object[];
  label?: string;
  labelStyle?: object | object[];
  isRequired?: boolean;
  value: string;
  validation?: () => Validation;
  asterik?: boolean;
  ref: RefObject<TextInput>;
}

const FormItem = forwardRef(({ children, ...props }: Props, ref: any) => {
  const [hasError, setHasError] = useState({ status: false, message: '' });
  const { isRequired, value, keyboardType } = props;
  const inputRef: any = useRef();

  useImperativeHandle(ref, () => ({
    setState: () => {
      let validation;
      if (props.validation) validation = props.validation();
      setHasError(containsError(keyboardType, isRequired!, value, validation));
    },
    focus: () => inputRef.current.focus(),
    blur: () => inputRef.current.blur(),
    clear: () => inputRef.current.clear(),
    isFocused: () => inputRef.current.isFocused(),
  }));

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    let validation;
    if (props.validation) validation = props.validation();
    setHasError(containsError(keyboardType, isRequired!, value, validation));
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
          style={[
            styles.label,
            !props.asterik ? { marginLeft: 4 } : undefined,
            props.labelStyle,
          ]}
          asterik={props.asterik}
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
          ref={inputRef}
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

const validateNumber = (number: string) => {
  return /^\d+$/.test(number);
};

const validateDecimalNumber = (number: string) => {
  return /^\d+.*\d*/.test(number) && !number.endsWith('.');
};

export const containsError = (
  keyboardType: KeyboardTypeOptions = 'default',
  isRequired: boolean,
  value: string,
  extraValidation?: Validation
) => {
  if (extraValidation && !extraValidation.status) {
    return {
      status: true,
      message: extraValidation.message,
    };
  } else if (extraValidation && extraValidation.status) {
    return { status: false, message: '' };
  }

  if (keyboardType == 'email-address' && !validateEmail(value))
    return { status: true, message: 'Enter a valid email' };
  if (isRequired && value.length === 0)
    return { status: true, message: 'Cannot be empty' };
  if (
    keyboardType == 'number-pad' ||
    keyboardType == 'phone-pad' ||
    (keyboardType == 'numeric' && !validateNumber(value))
  )
    return { status: true, message: 'Invalid number' };
  if (keyboardType == 'decimal-pad' && !validateDecimalNumber(value))
    return { status: true, message: 'Invalid number' };

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
