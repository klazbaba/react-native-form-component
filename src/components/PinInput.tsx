import React, { useState, createRef, RefObject } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TextStyle,
  ViewStyle,
  StyleProp,
  TextInputProps,
} from 'react-native';

import { colors } from '../colors';
import FormItem from './FormItem';

interface Props extends TextInputProps {
  numOfInput: number;
  onChangeText: (pin: string) => void;
  textInputStyle?: TextStyle;
  style?: StyleProp<ViewStyle>;
}

const refs: RefObject<TextInput>[] = [];
export default function PinInput(props: Props) {
  const [pin, setPin] = useState(Array(props.numOfInput).fill(''));
  const [activeInput, setActiveInput] = useState(0);
  if (!refs.length) {
    for (let i = 0; i < pin.length; i++) {
      refs.push(createRef());
    }
  }

  const changeFocus = (index: number, text: string) => {
    if (text) refs[index + 1]?.current?.focus();
    else refs[index - 1]?.current?.focus();
  };

  return (
    <View style={[styles.wrapper, props.style]}>
      {pin.map((_, index) => (
        <FormItem
          {...props}
          value={pin[index]}
          style={styles.formItem}
          onChangeText={(text) => {
            pin[index] = text;
            setPin([...pin]);
            changeFocus(index, text);
            props.onChangeText(pin.toString().replace(/,/g, ''));
          }}
          textInputStyle={[
            styles.input,
            {
              borderBottomColor:
                activeInput === index ? colors.black : colors.lightgrey,
            },
            props.textInputStyle,
          ]}
          maxLength={1}
          key={index}
          ref={refs[index]}
          onFocus={() => setActiveInput(index)}
          customValidation={() => ({ status: true, message: '' })}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  input: {
    maxWidth: 40,
    borderBottomWidth: 1.5,
    textAlign: 'center',
    fontSize: 20,
  },
  formItem: {
    backgroundColor: 'transparent',
    paddingLeft: 0,
    paddingRight: 0,
    minWidth: 40,
  },
});
