import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import type { PlaceType } from '../../models/place';

type Props = {
  place: PlaceType;
  onSelect?: () => void;
};

function PlaceItem({ place, onSelect }: Props) {
  return (
    <Pressable onPress={onSelect} style={styles.container}>
      <Image source={{ uri: place.imageUri }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{place.title}</Text>
        <Text style={styles.address}>{place.address}</Text>
      </View>
    </Pressable>
  );
}

export default PlaceItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 6,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  address: {
    color: '#666',
  },
});
