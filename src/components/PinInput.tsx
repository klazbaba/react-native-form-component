import React, { useState, createRef, RefObject } from 'react';
import { View, StyleSheet, TextInput, TextStyle } from 'react-native';
import { colors } from '../colors';
import FormItem from './FormItem';

interface Props {
  numOfInput: number;
  onChangeText: (pin: string) => void;
  textInputStyle?: TextStyle;
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
    <View style={styles.wrapper}>
      {pin.map((_, index) => (
        <FormItem
          value={pin[index]}
          style={{ backgroundColor: 'transparent', flex: 1 }}
          onChangeText={(text) => {
            pin[index] = text;
            setPin([...pin]);
            changeFocus(index, text);
            props.onChangeText(pin.toString().replace(/,/g, ''));
          }}
          textInputStyle={[
            styles.formItem,
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
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  formItem: {
    maxWidth: 40,
    borderBottomWidth: 1.5,
    textAlign: 'center',
    fontSize: 20,
  },
});
