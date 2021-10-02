import React, {
  useState,
  ReactText,
  createRef,
  RefObject,
  ReactNode,
} from 'react';
import { View, StyleSheet, Pressable, ScrollView, Text } from 'react-native';

import { colors } from '../colors';
import Label from './Label';
import Modal from './Modal';

interface Item {
  label: string;
  value: ReactText;
}

interface Props {
  items: Array<Item>;
  onSelection: (item: Item) => void;
  selectedValue: ReactText;
  children?: ReactNode;
  asterik?: boolean;
  labelStyle?: object | object[];
  asterikStyle?: object | object[];
  label?: ReactText;
  placeholder?: string;
  selectedValueStyle?: object | object[];
  buttonStyle?: object | object[];
  childWrapperStyle?: object | object[];
  itemLabelStyle?: object | object[];
}

const button: RefObject<View> = createRef();
export default function Picker(props: Props) {
  const [selectedValue, setSelectedValue] = useState(props.selectedValue);
  const [showPicker, setShowPicker] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0, width: 0, height: 0 });
  return (
    <>
      {props.label && <Label text={props.label} textStyle={props.labelStyle} />}
      <Pressable
        style={[styles.pickerButton, props.buttonStyle]}
        onPress={() => {
          button.current?.measureInWindow(
            (x: number, y: number, width: number, height: number) =>
              setPosition({ x, y, width, height })
          );
          setShowPicker(!showPicker);
        }}
        // @ts-ignore
        ref={button}
      >
        <Text
          style={[{ maxWidth: '90%' }, props.selectedValueStyle]}
          numberOfLines={1}
        >
          {props.items.filter((item) => item.value === props.selectedValue)[0]
            ?.label ||
            props.placeholder ||
            '--Pick a value--'}
        </Text>

        <View style={[styles.childIconWrapper, props.childWrapperStyle]}>
          {props.children}
        </View>
      </Pressable>

      <Modal show={showPicker}>
        <Pressable
          style={{ ...StyleSheet.absoluteFillObject }}
          onPress={() => setShowPicker(false)}
        >
          <ScrollView
            style={[
              styles.wrapper,
              {
                top: position.height / 2 + position.y,
                width: position.width,
                // left: position.x,
              },
            ]}
            nestedScrollEnabled
          >
            {props.items.map((item) => (
              <Pressable
                key={item.value}
                style={[
                  styles.button,
                  props.selectedValue === item.value
                    ? { backgroundColor: colors.blue }
                    : null,
                ]}
                onPress={() => {
                  setSelectedValue(item.value);
                  setShowPicker(false);
                  props.onSelection(item);
                }}
              >
                <Text
                  style={[
                    props.itemLabelStyle,
                    {
                      color:
                        selectedValue === item.value
                          ? colors.white
                          : colors.text,
                    },
                  ]}
                >
                  {item.label}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </Pressable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    borderRadius: 4,
    zIndex: 1,
    maxHeight: 200,
    flexGrow: 0,
    borderWidth: 0.5,
    borderColor: colors.lightBlue,
    elevation: 4,
    shadowColor: colors.lightgrey,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  pickerButton: {
    borderWidth: 1,
    borderColor: colors.lightBlue,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 8,
    marginBottom: 24,
    height: 44,
  },
  childIconWrapper: {
    backgroundColor: colors.faintBlue,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'stretch',
    borderLeftWidth: 1,
    borderColor: colors.faintBlue,
    padding: 8,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
});
