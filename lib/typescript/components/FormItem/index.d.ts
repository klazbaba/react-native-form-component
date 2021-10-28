import React, { ComponentProps, ReactNode } from 'react';
import { TextInput, KeyboardTypeOptions } from 'react-native';
declare type Validation = {
    status: boolean;
    message: string;
};
interface Props extends ComponentProps<typeof TextInput> {
    textInputStyle?: object | object[];
    children?: ReactNode;
    underneathText?: string;
    underneathTextStyle?: object | object[];
    label?: string;
    labelStyle?: object | object[];
    isRequired?: boolean;
    value: string;
    customValidation?: () => Validation;
    asterik?: boolean;
    floatingLabel?: boolean;
    textArea?: boolean;
}
declare const FormItem: React.ForwardRefExoticComponent<Props & React.RefAttributes<unknown>>;
export declare const containsError: (keyboardType: KeyboardTypeOptions | undefined, isRequired: boolean, value: string, extraValidation?: Validation | undefined) => {
    status: boolean;
    message: string;
};
export default FormItem;
