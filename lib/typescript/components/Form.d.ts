/// <reference types="react" />
interface Props {
    children: Element | Element[];
    keyboardVerticalOffset?: number;
    buttonText?: string;
    buttonStyle?: object | object[];
    buttonTextStyle?: object | object[];
    onButtonPress: () => void;
}
export default function Form(props: Props): JSX.Element;
export {};
