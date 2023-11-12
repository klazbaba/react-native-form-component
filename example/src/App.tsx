import * as React from 'react';
import { SafeAreaView, View } from 'react-native';

import { Form, FormItem, Picker, PinInput } from 'react-native-form-component';

const firstnameInput = React.createRef();
const lastnameInput = React.createRef();

export default function App() {
  const [firstname, setFirstname] = React.useState('');
  const [number, setNumber] = React.useState(1);
  const [lastName, setLastName] = React.useState('');
  const [gender, setGender] = React.useState('male');

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: 'lightgreen', padding: 24 }}
    >
      <View style={{ padding: 24 }}>
        <Form onButtonPress={() => console.warn('pressed button')}>
          <FormItem
            value={firstname}
            label="Firstname"
            asterik
            onChangeText={(firstname: string) => setFirstname(firstname)}
            floatingLabel
            isRequired
            secureTextEntry
            ref={firstnameInput}
            keyboardType="numeric"
          />

          <Picker
            items={[
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
            ]}
            label="Pick a number"
            selectedValue={number}
            onSelection={(item: any) => setNumber(item.value as number)}
            type="modal"
          />

          <Picker
            items={[
              { label: 'Male', value: 'male' },
              { label: 'Female', value: 'female' },
            ]}
            label="Gender"
            selectedValue={gender}
            onSelection={(item: any) => setGender(item.value)}
            floatingLabel
          />

          <FormItem
            value={lastName}
            label="Last Name"
            asterik
            onChangeText={(lastName: string) => setLastName(lastName)}
            floatingLabel
            isRequired
            textArea
            showErrorIcon={false}
            ref={lastnameInput}
          />

          <PinInput
            numOfInput={4}
            placeholder="-"
            placeholderTextColor={'gray'}
            onChangeText={(text: string) => console.log(text)}
            autoFocus={true}
            keyboardType="number-pad"
          />
        </Form>
      </View>
    </SafeAreaView>
  );
}
