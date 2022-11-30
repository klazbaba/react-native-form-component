import React from 'react';
import { View, StyleSheet, Modal as NativeModal, } from 'react-native';
export default function Modal(props) {
    if (props.show) {
        return (React.createElement(NativeModal, { ...props, transparent: true, visible: true },
            React.createElement(View, { style: {
                    backgroundColor: props.backgroundColor,
                    ...StyleSheet.absoluteFillObject,
                } }),
            props.children));
    }
    return null;
}
