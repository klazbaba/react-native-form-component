import React, {
  useState,
  ReactText,
  ReactNode,
  RefObject,
  useRef,
  useEffect,
} from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  ScrollView,
  Text,
  Animated,
} from 'react-native';

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
  floatingLabel?: boolean;
}

export default function Picker(props: Props) {
  const [selectedValue, setSelectedValue] = useState(props.selectedValue);
  const [showPicker, setShowPicker] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [animatedBottom, setAnimatedBottom] = useState(new Animated.Value(0));
  const [shouldAnimate, setShouldAnimate] = useState(true);

  const pickerRef: RefObject<View> = useRef() as RefObject<View>;

  const handlePress = () => {
    if (props.floatingLabel && shouldAnimate)
      Animated.timing(animatedBottom, {
        toValue: position.height - 10,
        useNativeDriver: false,
        duration: 300,
      }).start(() => setShouldAnimate(false));

    if (!showPicker)
      pickerRef.current?.measureInWindow(
        (x: number, y: number, width: number, height: number) => {
          setPosition({ x, y, width, height });
        }
      );
    setShowPicker(!showPicker);
  };

  useEffect(() => {
    if (props.floatingLabel && props.selectedValue)
      Animated.timing(animatedBottom, {
        toValue: position.height - 10,
        useNativeDriver: false,
        duration: 300,
      }).start(() => setShouldAnimate(false));
  }, [shouldAnimate]);

  return (
    <>
      {props.label && !props.floatingLabel && (
        <Label
          text={props.label}
          textStyle={props.labelStyle}
          style={props.labelWrapperStyle}
          asterik={props.asterik}
          asterikStyle={props.asterikStyle}
        />
      )}
      <Pressable
        style={[styles.pickerButton, props.buttonStyle]}
        onPress={handlePress}
        ref={pickerRef}
        onLayout={({ nativeEvent }) => {
          setPosition({ ...position, height: nativeEvent.layout.height });
          setAnimatedBottom(new Animated.Value(nativeEvent.layout.height / 4));
        }}
      >
        {props.floatingLabel && props.label && (
          <Label
            text={props.label}
            textStyle={props.labelStyle}
            style={[
              props.labelWrapperStyle,
              {
                position: 'absolute',
                bottom: animatedBottom,
                paddingHorizontal: 2,
                backgroundColor: animatedBottom.interpolate({
                  inputRange: [0, position.height / 3, position.height / 2],
                  outputRange: ['transparent', 'transparent', colors.white],
                }),
              },
            ]}
            asterik={props.asterik}
            asterikStyle={props.asterikStyle}
          />
        )}

        <Text
          style={[
            {
              maxWidth: '90%',
              opacity: props.floatingLabel && shouldAnimate ? 0 : 1,
            },
            props.selectedValueStyle,
          ]}
          numberOfLines={1}
        >
          {props.items.filter((item) => item.value === props.selectedValue)[0]
            ?.label ||
            props.placeholder ||
            '--Pick a value--'}
        </Text>

        <View style={[styles.childIconWrapper, props.iconWrapperStyle]}>
          {props.pickerIcon || <View style={styles.pickerIcon} />}
        </View>
      </Pressable>

      <Modal show={showPicker}>
        <Pressable
          style={{ ...StyleSheet.absoluteFillObject, elevation: 3 }}
          onPress={() => setShowPicker(false)}
        >
          <ScrollView
            style={[
              styles.wrapper,
              {
                width: position.width,
                position: 'absolute',
                top: position.y + position.height + 8,
                left: position.x,
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
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 8,
    marginBottom: 24,
    height: 44,
    backgroundColor: colors.white,
  },
  childIconWrapper: {
    backgroundColor: colors.white,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 8,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    marginRight: 8,
  },
  pickerIcon: {
    borderTopColor: colors.grey,
    borderTopWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftWidth: 9,
    borderRightWidth: 9,
    borderBottomWidth: 0,
    borderRadius: 4,
  },
});
