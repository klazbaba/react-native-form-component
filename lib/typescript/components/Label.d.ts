import { ReactText } from 'react';
interface LabelProps {
    text: ReactText;
    asterik?: boolean;
    style?: object | object[];
    textStyle?: object | object[];
}
export default function Label(props: LabelProps): JSX.Element;
export {};
