# react-native-form-component

A customizable form component for react-native. It does validation of input, and also alerts you of a failed validation.

## Installation

```sh
yarn add react-native-form-component
```

## Components

- [Form](#form)
- [FormItem](#form-item)
- [Label](#label)

### Form

```jsx
import { Form } from 'react-native-form-component';
//...

return (
  <Form>
    <FormItem />
  </Form>
);
```

### Props

| Prop                   | Function                                                                                               | Type   | Required | Default | Platform |
| ---------------------- | ------------------------------------------------------------------------------------------------------ | ------ | -------- | ------- | -------- |
| keyboardVerticalOffset | Distance between the top of the user screen and the Form component, may be non-zero in some use cases. | number | no       | 50      | ios      |

### Form Item

### Label

```jsx
import { Label } from 'react-native-form-component';
//...

return (
  <Form>
    <FormItem />
  </Form>
);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
