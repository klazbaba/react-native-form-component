# react-native-form-component

A customizable form component for react-native. It handles basic validation of inputs, and also alerts you of a failed validation.

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

| Prop                   | Function                                                                                               | Type              | Required | Default | Platform |
| ---------------------- | ------------------------------------------------------------------------------------------------------ | ----------------- | -------- | ------- | -------- |
| keyboardVerticalOffset | Distance between the top of the user screen and the Form component, may be non-zero in some use cases. | number            | no       | 50      | ios      |
| submitButtonText       | Text to be displayed by submit button                                                                  | string            | no       | Submit  | All      |
| submitButtonStyle      | Style of submit button                                                                                 | object / object[] | no       | -       | All      |
| submitButtonTextStyle  | Style of submit button text                                                                            | object / object[] | no       | -       | All      |

### Form Item

### Label

```jsx
import { Label } from 'react-native-form-component';
//...

return (
  //...
  <Label text="repository name" isRequired />
);
```

### Props

| Prop       | Type    | Required |
| ---------- | ------- | -------- |
| text       | string  | yes      |
| isRequired | boolean | no       |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
