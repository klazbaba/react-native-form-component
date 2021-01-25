# react-native-form-component

A customizable form component for react-native. It handles basic validation of inputs, and also alerts you of a failed validation.

## Installation

```sh
yarn add react-native-form-component
```

## Functions

| Name       | Description                                                                                                                 |
| ---------- | --------------------------------------------------------------------------------------------------------------------------- |
| submitForm | Does the same thing as `onButtonPress()` in `Form` component. It does validation first, then carries out the defined action |

<br />

## Components

- [Form](#form)
- [FormItem](#form-item)
- [Label](#label)

### Form

Wrapper component for form items. It is advised to use this component to wrap every other component contained in this library. The `Form` component comes with a button that does validation of `FormItem`s when clicked. The default validation for each `FormItem` is based on the value of its keyboardType prop.

```jsx
import { Form } from 'react-native-form-component';
//...

return (
  <Form onButtonPress={() => console.warn('do something')}>
    <FormItem />
  </Form>
);
```

### Props

| Prop                   | Function                                                                                               | Type               | Default | Platform |
| ---------------------- | ------------------------------------------------------------------------------------------------------ | ------------------ | ------- | -------- |
| keyboardVerticalOffset | Distance between the top of the user screen and the Form component, may be non-zero in some use cases. | number             | 50      | iOS      |
| buttonText             | Text to be displayed by submit button                                                                  | string             | Submit  | All      |
| buttonStyle            | Style of submit button                                                                                 | object \| object[] | -       | All      |
| buttonTextStyle        | Style of submit button text                                                                            | object \| object[] | -       | All      |
| onButtonPress          | Action to be performed when button is pressed                                                          | () => void         | -       | All      |

<br />

### Form Item

```jsx
import { FormItem } from 'react-native-form-component';
//...

return (
  //...
  <FormItem
    label="Email"
    isRequired
    value={email}
    onChangeText={(email) => setEmail(email)}
  />
);
```

### Props

Inherits [TextInput Props](https://reactnative.dev/docs/textinput#props)

| Prop                | Function                                                                                                                                                                                                                                                                             | Type                                     | Required |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | -------- |
| label               | Label for FormItem                                                                                                                                                                                                                                                                   | string                                   | no       |
| labelStyle          | Style of label                                                                                                                                                                                                                                                                       | object \| object[]                       | no       |
| textInputStyle      | Style of TextInput portion of `FormItem`                                                                                                                                                                                                                                             | object \| object[]                       | no       |
| isRequired          | Indicates whethter this item is required or not                                                                                                                                                                                                                                      | boolean                                  | no       |
| value               | Value to show for the `FormItem`                                                                                                                                                                                                                                                     | string                                   | yes      |
| underneathText      | Text just below the `FormItem`                                                                                                                                                                                                                                                       | string                                   | no       |
| underneathTextStyle | Style of underneathText                                                                                                                                                                                                                                                              | object \| object[]                       | no       |
| customValidation    | A function used to add custom validation to a `FormItem`. The function returns an object of the shape `{status: boolean, message: string}`. `status` is true when the validation passes and false when it fails. `message` is the underneath text to be shown when validation fails. | () => {status: boolean, message: string} | no       |
| asterik             | Whether or not to add an asterik to label                                                                                                                                                                                                                                            | boolean                                  | no       |
| ref                 | Used to identify the component and also to expose TextInput methods `FormItem`                                                                                                                                                                                                       | `RefObject<TextInput>`                   | yes      |
| children            | A ReactElement to render on the left part of the TextInput. Usually an icon                                                                                                                                                                                                          | ReactElement                             | no       |

<br />

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
| asterik    | boolean | no       |

<br />

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
