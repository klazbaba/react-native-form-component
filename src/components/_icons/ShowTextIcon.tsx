import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../../colors';

interface Props {
  hide: boolean;
  showIcon?: JSX.Element;
  hideIcon?: JSX.Element;
}

export default function ShowTextIcon(props: Props) {
  if (props.showIcon && !props.hide) return props.showIcon;
  if (props.hideIcon && props.hide) return props.hideIcon;
  return (
    <View>
      <View style={styles.eye}>
        <View style={styles.circle}>
          <View style={styles.dot} />
        </View>
      </View>

      {props.hide && <View style={styles.line} />}
    </View>
  );
}

const styles = StyleSheet.create({
  eye: {
    borderWidth: 2,
    height: 15,
    width: 20,
    borderColor: colors.lightgrey,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: colors.grey,
  },
  dot: {
    backgroundColor: colors.white,
    height: 2,
    width: 2,
    borderRadius: 1,
    marginLeft: 3,
    marginTop: 2,
  },
  line: {
    height: 27,
    width: 2,
    backgroundColor: colors.lightgrey,
    position: 'absolute',
    transform: [{ rotate: '-45deg' }],
    alignSelf: 'center',
    top: -6,
  },
});
