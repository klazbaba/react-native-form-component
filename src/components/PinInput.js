import React, { useState, createRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../colors';
import FormItem from './FormItem';
const refs = [];
export default function PinInput(props) {
    const [pin, setPin] = useState(Array(props.numOfInput).fill(''));
    const [activeInput, setActiveInput] = useState(0);
    if (!refs.length) {
        for (let i = 0; i < pin.length; i++) {
            refs.push(createRef());
        }
    }
    const changeFocus = (index, text) => {
        if (text)
            refs[index + 1]?.current?.focus();
        else
            refs[index - 1]?.current?.focus();
    };
    return (React.createElement(View, { style: styles.wrapper }, pin.map((_, index) => (React.createElement(FormItem, { value: pin[index], style: styles.formItem, onChangeText: (text) => {
            pin[index] = text;
            setPin([...pin]);
            changeFocus(index, text);
            props.onChangeText(pin.toString().replace(/,/g, ''));
        }, textInputStyle: [
            styles.input,
            {
                borderBottomColor: activeInput === index ? colors.black : colors.lightgrey,
            },
            props.textInputStyle,
        ], maxLength: 1, key: index, ref: refs[index], onFocus: () => setActiveInput(index) })))));
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
