import React from 'react';
import { TextInputProperties } from 'react-native';
interface Props extends TextInputProperties {
    textInputStyle?: object | object[];
    children?: Element;
    underneathText?: string;
    underneathTextStyle?: object | object[];
    label?: string;
    labelStyle?: object | object[];
    isRequired?: boolean;
    value: string;
}
export declare let displayError: Function;
declare const FormItem: React.ForwardRefExoticComponent<Props & React.RefAttributes<unknown>>;
export declare const containsError: (keyboardType: "default" | "email-address" | "numeric" | "phone-pad" | "number-pad" | "decimal-pad" | "visible-password" | "ascii-capable" | "numbers-and-punctuation" | "url" | "name-phone-pad" | "twitter" | "web-search" | undefined, isRequired: boolean, value: string) => {
    status: boolean;
    message: string;
};
export default FormItem;
