/// <reference types="react" />
interface Props {
    children: Element | Element[];
    keyboardVerticalOffset?: number;
    submitButtonText?: string;
    submitButtonStyle?: object | object[];
    submitButtonTextStyle?: object | object[];
}
export default function Form(props: Props): JSX.Element;
export {};
