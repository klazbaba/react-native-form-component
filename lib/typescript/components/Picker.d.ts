import { ReactText, ReactNode } from 'react';
import { LabelProps } from './Label';
interface Item {
    label: string;
    value: ReactText;
}
interface Props extends LabelProps {
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
declare function ShrPicker(props: Props): JSX.Element;
declare namespace ShrPicker {
    var defaultProps: {
        asterik: boolean;
        asterikStyle: {};
        buttonStyle: {};
    };
}
export default ShrPicker;
