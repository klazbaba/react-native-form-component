// import React, { forwardRef } from 'react';
// import { TextInput, TextInputProperties, View, StyleSheet } from 'react-native';

// interface Props extends TextInputProperties {
//   textInputStyle?: object;
//   children?: Element;
//   hasError?: boolean;
//   underneathText?: string;
//   underneathTextStyle?: object;
//   label?: string;
//   labelStyle?: object;
//   isRequired?: boolean;
// }

// const FormItem = forwardRef(({ children, ...props }: Props, ref) => {
//   return (
//     <>
//       {props.label && (
//         <Label
//           title={props.label}
//           style={props.labelStyle}
//           isRequired={props.isRequired}
//         />
//       )}
//       <View style={[styles.wrapper, props.style]}>
//         {
//           // this is separated from props because adding it causes TextInput to throw an exception
//           children
//         }
//         <TextInput
//           {...props}
//           style={[styles.inputText, props.textInputStyle]}
//           // @ts-ignore
//           ref={ref}
//         />
//         {props.hasError && (
//           <Icon
//             name="error"
//             type="MaterialIcons"
//             style={{ color: colors.primary }}
//           />
//         )}
//       </View>
//       {!!props.underneathText && (
//         <ShrText
//           title={props.underneathText}
//           style={[styles.underneathText, props.underneathTextStyle]}
//         />
//       )}
//     </>
//   );
// });

// const styles = StyleSheet.create({
//   wrapper: {
//     flexDirection: 'row',
//     backgroundColor: colors.white,
//     borderRadius: 5,
//     paddingHorizontal: 8,
//     minHeight: 48,
//     alignItems: 'center',
//   },
//   inputText: {
//     flex: 1,
//     paddingVertical: 8,
//   },
//   underneathText: {
//     marginTop: 8,
//     marginLeft: 8,
//     color: colors.white,
//   },
// });

// export default FormItem;
