import * as React from 'react';
import { View } from 'react-native';
import { Form, FormItem, Picker, PinInput } from 'react-native-form-component';
export default function App() {
    const [firstname, setFirstname] = React.useState('');
    const [number, setNumber] = React.useState(1);
    const [lastName, setLastName] = React.useState('');
    const [gender, setGender] = React.useState('male');
    return (React.createElement(View, { style: { flex: 1, backgroundColor: 'yellow', padding: 24 } },
        React.createElement(Form, { onButtonPress: () => console.warn('pressed button') },
            React.createElement(FormItem, { value: firstname, label: "Firstname", asterik: true, onChangeText: (firstname) => setFirstname(firstname), floatingLabel: true, isRequired: true, secureTextEntry: true }),
            React.createElement(Picker, { items: [
                    { label: 'One', value: 1 },
                    { label: 'Two', value: 2 },
                    { label: 'Three', value: 3 },
                    { label: 'Four', value: 4 },
                    { label: 'Five', value: 5 },
                    { label: 'Six', value: 6 },
                    { label: 'Seven', value: 7 },
                    { label: 'Eight', value: 8 },
                    { label: 'Nine', value: 9 },
                    { label: 'Ten', value: 10 },
                ], label: "Pick a number", selectedValue: number, onSelection: (item) => setNumber(item.value), type: "modal" }),
            React.createElement(Picker, { items: [
                    { label: 'Male', value: 'male' },
                    { label: 'Female', value: 'female' },
                ], label: "Gender", selectedValue: gender, onSelection: (item) => setGender(item.value), floatingLabel: true }),
            React.createElement(FormItem, { value: lastName, label: "Last Name", asterik: true, onChangeText: (lastName) => setLastName(lastName), floatingLabel: true, isRequired: true, textArea: true, showErrorIcon: false }),
            React.createElement(PinInput, { numOfInput: 4, onChangeText: (pin) => console.log('pin:', pin) }))));
}
