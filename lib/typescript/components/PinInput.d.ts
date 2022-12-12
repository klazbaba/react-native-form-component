/// <reference types="react" />
import { TextStyle, ViewStyle, StyleProp } from 'react-native';
interface Props {
    numOfInput: number;
    onChangeText: (pin: string) => void;
    textInputStyle?: TextStyle;
    style?: StyleProp<ViewStyle>;
}
export default function PinInput(props: Props): JSX.Element;
export {};
