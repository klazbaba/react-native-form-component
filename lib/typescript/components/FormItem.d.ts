import React from 'react';
import { TextInputProperties } from 'react-native';
declare type DataType = 'email' | 'number' | 'default';
interface Props extends TextInputProperties {
    textInputStyle?: object;
    children?: Element;
    underneathText?: string;
    underneathTextStyle?: object;
    label?: string;
    labelStyle?: object;
    isRequired?: boolean;
    dataType: DataType;
}
declare const FormItem: React.ForwardRefExoticComponent<Props & React.RefAttributes<unknown>>;
export default FormItem;
