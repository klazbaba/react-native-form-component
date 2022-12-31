import { ReactNode } from 'react';
interface Item {
    label: string;
    value: string | number;
}
interface Props {
    items: Array<Item>;
    onSelection: (item: Item) => void;
    selectedValue: string | number;
    pickerIcon?: ReactNode;
    iconWrapperStyle?: object | object[];
    asterik?: boolean;
    labelStyle?: object | object[];
    asterikStyle?: object | object[];
    label?: string | number;
    labelWrapperStyle?: object | object[];
    placeholder?: string;
    selectedValueStyle?: object | object[];
    buttonStyle?: object | object[];
    itemLabelStyle?: object | object[];
    floatingLabel?: boolean;
    type?: 'dropdown' | 'modal';
}
declare function Picker(props: Props): JSX.Element;
declare namespace Picker {
    var defaultProps: {
        type: string;
    };
}
export default Picker;
