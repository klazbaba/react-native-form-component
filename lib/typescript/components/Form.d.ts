import { ReactNode } from 'react';
import { TextInputSubmitEditingEventData, NativeSyntheticEvent, ViewStyle } from 'react-native';
interface Props {
    children: ReactNode;
    keyboardVerticalOffset?: number;
    buttonText?: string;
    buttonStyle?: object | object[];
    buttonTextStyle?: object | object[];
    onButtonPress: () => void;
    style?: ViewStyle;
}
export declare let submitForm: (e?: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
declare function Form(props: Props): JSX.Element;
declare namespace Form {
    var defaultProps: {
        style: {};
    };
}
export default Form;
