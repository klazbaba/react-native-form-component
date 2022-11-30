/// <reference types="react" />
import { TextStyle } from 'react-native';
interface Props {
    numOfInput: number;
    onChangeText: (pin: string) => void;
    textInputStyle?: TextStyle;
}
export default function PinInput(props: Props): JSX.Element;
export {};
