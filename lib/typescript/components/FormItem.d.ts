import React from 'react';
import { TextInputProperties } from 'react-native';
interface Props extends TextInputProperties {
    textInputStyle?: object;
    children?: Element;
    underneathText?: string;
    underneathTextStyle?: object;
    label?: string;
    labelStyle?: object;
    isRequired?: boolean;
    value: string;
    hasError: boolean;
    validationCondition?: string | (() => boolean);
}
declare const FormItem: React.ForwardRefExoticComponent<Props & React.RefAttributes<unknown>>;
export default FormItem;
