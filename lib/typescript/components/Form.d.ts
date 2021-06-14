import { ReactNode } from 'react';
import { TextInputSubmitEditingEventData, NativeSyntheticEvent } from 'react-native';
interface Props {
    children: ReactNode;
    keyboardVerticalOffset?: number;
    buttonText?: string;
    buttonStyle?: object | object[];
    buttonTextStyle?: object | object[];
    onButtonPress: () => void;
}
export declare let submitForm: (e?: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
export default function Form(props: Props): JSX.Element;
export {};
