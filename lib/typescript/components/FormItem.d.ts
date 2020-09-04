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
}
declare const FormItem: React.ForwardRefExoticComponent<Props & React.RefAttributes<unknown>>;
export declare const isErrorFree: (keyboardType: "default" | "email-address" | "numeric" | "phone-pad" | "number-pad" | "decimal-pad" | "visible-password" | "ascii-capable" | "numbers-and-punctuation" | "url" | "name-phone-pad" | "twitter" | "web-search" | undefined, isRequired: boolean, value: string) => boolean;
export default FormItem;
