import React, { ReactNode } from 'react';
import { KeyboardTypeOptions, TextInputProps } from 'react-native';
type Validation = {
    status: boolean;
    message: string;
};
interface Props extends TextInputProps {
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
    showErrorIcon?: boolean;
    errorBorderColor?: string;
    showIcon?: JSX.Element;
    hideIcon?: JSX.Element;
}
declare const FormItem: React.ForwardRefExoticComponent<Props & React.RefAttributes<unknown>>;
export declare const containsError: (keyboardType: KeyboardTypeOptions | undefined, isRequired: boolean, value: string, extraValidation?: Validation) => {
    status: boolean;
    message: string;
};
export default FormItem;
