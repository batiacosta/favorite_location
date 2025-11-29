import { Pressable, StyleSheet, GestureResponderEvent } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { ComponentProps } from 'react';

type IoniconsProps = ComponentProps<typeof Ionicons>;

type Props = {
  icon: IoniconsProps['name'];
  size?: IoniconsProps['size'];
  color?: IoniconsProps['color'];
  onPress?: (event: GestureResponderEvent) => void;
};

export default function IconButton({ icon, size = 24, color, onPress }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
});
