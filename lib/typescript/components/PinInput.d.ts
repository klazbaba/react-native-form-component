/// <reference types="react" />
import { TextStyle, ViewStyle, StyleProp, TextInputProps } from 'react-native';
interface Props extends TextInputProps {
    numOfInput: number;
    onChangeText: (pin: string) => void;
    textInputStyle?: TextStyle;
    style?: StyleProp<ViewStyle>;
}
export default function PinInput(props: Props): JSX.Element;
export {};
