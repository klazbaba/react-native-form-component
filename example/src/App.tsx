import * as React from 'react';
import { View } from 'react-native';

import { Form, FormItem, Picker } from 'react-native-form-component';

export default function App() {
  const [firstname, setFirstname] = React.useState('');
  const [number, setNumber] = React.useState<React.ReactText>(1);
  return (
    <View style={{ flex: 1, backgroundColor: 'yellow', padding: 24 }}>
      <Form onButtonPress={() => console.warn('slap')}>
        <FormItem
          value={firstname}
          label="Firstname"
          asterik
          onChangeText={(firstname) => setFirstname(firstname)}
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
          onSelection={(item) => setNumber(item.value)}
        />
      </Form>
    </View>
  );
}
