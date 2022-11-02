import React, { useState, createRef, RefObject } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import FormItem from './FormItem';

interface Props {
  numOfInput: number;
  onChangeText: (pin: string) => string;
}

const refs: RefObject<TextInput>[] = [];
export default function PinInput(props: Props) {
  const [pin, setPin] = useState(Array(props.numOfInput).fill(''));
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
    <View style={styles.wrapper}>
      {pin.map((_, index) => (
        <FormItem
          value={pin[index]}
          style={{ backgroundColor: 'transparent' }}
          onChangeText={(text) => {
            pin[index] = text;
            setPin([...pin]);
            changeFocus(index, text);
            props.onChangeText(pin.toString().replaceAll(',', ''));
          }}
          textInputStyle={styles.formItem}
          maxLength={1}
          key={index}
          ref={refs[index]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  formItem: {
    maxWidth: 30,
    backgroundColor: 'transparent',
    borderBottomWidth: StyleSheet.hairlineWidth,
    textAlign: 'center',
  },
});
