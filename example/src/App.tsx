import * as React from 'react';
import { View } from 'react-native';

import { Form, FormItem } from 'react-native-form-component';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'yellow', padding: 24 }}>
      <Form onButtonPress={() => console.warn('slap')}>
        <FormItem value="tell" />
      </Form>
    </View>
  );
}
