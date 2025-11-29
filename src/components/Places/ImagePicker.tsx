import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
  ImagePickerResult,
} from 'expo-image-picker';
import { useState } from 'react';

import { Colors } from '../../constants/colors';
import OutlinedButton from '../UI/OutlinedButton';

function ImagePicker() {
  const [pickedImage, setPickedImage] = useState<string | undefined>(undefined);

  const [cameraPermissionInformation, requestPermission] = useCameraPermissions();

  async function verifyPermissions() {
    // If we don't yet have any permission info, request it
    if (!cameraPermissionInformation) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insufficient Permissions!',
        'You need to grant camera permissions to use this app.'
      );
      return false;
    }

    return true;
  }

  async function takeImageHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const result: ImagePickerResult = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    // Handle both legacy result shape (`cancelled` + `uri`) and newer `assets` shape
    // Newer shape: { assets: [{ uri, ... }] }
    // Legacy shape: { cancelled: boolean, uri?: string }
    if ('assets' in result && result.assets && result.assets.length > 0) {
      setPickedImage(result.assets[0].uri);
      return;
    }

    // legacy shape: { cancelled: boolean, uri?: string }
    if ((result as any).cancelled === false && (result as any).uri) {
      setPickedImage((result as any).uri);
    }
  }

  let imagePreview = <Text>No image taken yet.</Text>;

  if (pickedImage) {
    imagePreview = <Image style={styles.image} source={{ uri: pickedImage }} />;
  }

  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <OutlinedButton icon="camera" onPress={takeImageHandler}>
        Take Image
      </OutlinedButton>
    </View>
  );
}

export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
