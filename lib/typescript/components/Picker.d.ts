import { ReactText, ReactNode } from 'react';
interface Item {
    label: string;
    value: ReactText;
}
interface Props {
    items: Array<Item>;
    onSelection: (item: Item) => void;
    selectedValue: ReactText;
    children?: ReactNode;
    asterik?: boolean;
    labelStyle?: object | object[];
    asterikStyle?: object | object[];
    label?: ReactText;
    placeholder?: string;
    selectedValueStyle?: object | object[];
    buttonStyle?: object | object[];
    childWrapperStyle?: object | object[];
    itemLabelStyle?: object | object[];
}
export default function Picker(props: Props): JSX.Element;
export {};
