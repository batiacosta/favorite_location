import React from 'react';
import { Pressable, StyleSheet, Text, GestureResponderEvent } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { ComponentProps } from 'react';

import { Colors } from '../../constants/colors';

type IoniconsProps = ComponentProps<typeof Ionicons>;

type Props = {
  onPress?: (event: GestureResponderEvent) => void;
  icon?: IoniconsProps['name'];
  children?: React.ReactNode;
};

export default function OutlinedButton({ onPress, icon, children }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      {icon ? (
        <Ionicons
          style={styles.icon}
          name={icon}
          size={18}
          color={Colors.primary500}
        />
      ) : null}
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.primary500,
  },
  pressed: {
    opacity: 0.7,
  },
  icon: {
    marginRight: 6,
  },
  text: {
    color: Colors.primary500,
  },
});
