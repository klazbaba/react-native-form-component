/// <reference types="react" />
interface LabelProps {
    text: string | number;
    asterik?: boolean;
    style?: object | object[];
    textStyle?: object | object[];
    asterikStyle?: object | object[];
}
export default function Label(props: LabelProps): JSX.Element;
export {};
