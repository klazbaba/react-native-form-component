import React, { ReactText, ReactNode, RefObject } from 'react';
import { View } from 'react-native';
interface Item {
    label: string;
    value: ReactText;
}
interface Props {
    items: Array<Item>;
    onSelection: (item: Item) => void;
    selectedValue: ReactText;
    pickerIcon?: ReactNode;
    iconWrapperStyle?: object | object[];
    asterik?: boolean;
    labelStyle?: object | object[];
    asterikStyle?: object | object[];
    label?: ReactText;
    labelWrapperStyle?: object | object[];
    placeholder?: string;
    selectedValueStyle?: object | object[];
    buttonStyle?: object | object[];
    itemLabelStyle?: object | object[];
    ref: RefObject<View>;
}
declare const Picker: React.ForwardRefExoticComponent<Pick<Props, "asterik" | "label" | "placeholder" | "labelStyle" | "items" | "onSelection" | "selectedValue" | "pickerIcon" | "iconWrapperStyle" | "asterikStyle" | "labelWrapperStyle" | "selectedValueStyle" | "buttonStyle" | "itemLabelStyle"> & React.RefAttributes<unknown>>;
export default Picker;
