import React, { Component } from 'react';
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
}

interface State {
  hasError: { status: boolean; message: string };
}

export const instances: Array<{ setState: Function }> = [];

export default class FormItem extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: { status: false, message: '' } };
  }

  handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    const { keyboardType, isRequired, value } = this.props;
    let validation;
    if (this.props.validation) validation = this.props.validation();
    this.setState({
      hasError: containsError(keyboardType, isRequired!, value, validation),
    });
    if (this.props.onBlur) this.props.onBlur(e);
  };

  handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    this.setState({ hasError: { status: false, message: '' } });
    if (this.props.onFocus) this.props.onFocus(e);
  };

  componentDidMount = () => instances.push(this);

  render() {
    const { hasError } = this.state;
    return (
      <>
        {this.props.label && (
          <Label
            text={this.props.label}
            style={[styles.label, this.props.labelStyle]}
            asterik={this.props.asterik}
          />
        )}
        <View
          style={[
            styles.wrapper,
            this.props.style,
            hasError.status
              ? { borderColor: colors.red, borderWidth: 1 }
              : undefined,
          ]}
        >
          {
            // this is separated from props because adding it causes TextInput to throw an error
            this.props.children
          }
          <TextInput
            {...this.props}
            style={[styles.inputText, this.props.textInputStyle]}
            // @ts-ignore
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            value={this.props.value}
            autoCapitalize={
              this.props.keyboardType == 'email-address' ? 'none' : undefined
            }
          />
          {hasError.status && (
            <View style={styles.errorWrapper}>
              <Text style={styles.exclamation}>{'\u0021'}</Text>
            </View>
          )}
        </View>

        {hasError.status && (
          <Text style={[styles.underneathText, this.props.underneathTextStyle]}>
            {this.props.underneathText || hasError.message + '!'}
          </Text>
        )}
      </>
    );
  }
}

const validateEmail = (email: string) => {
  return /^\S+@\S+\.\S+$/.test(email);
};

export const containsError = (
  keyboardType: KeyboardTypeOptions = 'default',
  isRequired: boolean,
  value: string,
  customValidation: Validation = { status: true, message: '' }
) => {
  if (isRequired && value.length === 0)
    return { status: true, message: 'Cannot be empty' };
  if (!customValidation.status)
    return { status: true, message: customValidation.message };
  if (keyboardType == 'email-address' && !validateEmail(value))
    return { status: true, message: 'Enter a valid email' };

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
