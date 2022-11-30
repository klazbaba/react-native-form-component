import React from 'react';
import { Text, StyleSheet, Animated } from 'react-native';
export default function Label(props) {
    return (React.createElement(Animated.View, { style: [styles.wrapper, props.style] },
        React.createElement(Text, { style: [styles.label, props.textStyle] }, props.text),
        props.asterik ? (React.createElement(Text, { style: [styles.asterik, props.asterikStyle] }, "*")) : null));
}
const styles = StyleSheet.create({
    asterik: {
        color: '#C92B2B',
        fontSize: 16,
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
    },
    wrapper: {
        flexDirection: 'row',
    },
});
