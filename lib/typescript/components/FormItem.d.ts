import React from 'react';
import { TextInputProperties } from 'react-native';
interface Props extends TextInputProperties {
    textInputStyle?: object;
    children?: Element;
    hasError?: boolean;
    underneathText?: string;
    underneathTextStyle?: object;
    text?: string;
    labelStyle?: object;
    isRequired?: boolean;
}
declare const FormItem: React.ForwardRefExoticComponent<Props & React.RefAttributes<unknown>>;
export default FormItem;
