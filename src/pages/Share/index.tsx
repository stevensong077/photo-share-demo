import React, { useState } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Sharing from "expo-sharing";
import styles from "./styles";

const Share: React.FC = () => {
  interface ImageData {
    localUri: string | undefined;
  }
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  const openCameraAsync = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access cemera is required!");
      return;
    }
    const cameraResult = await ImagePicker.launchCameraAsync();
    if (cameraResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: cameraResult.uri });
  };

  const openImagePickerAsync = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access media library is required!");
      return;
    }
    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri });
  };

  const openSharingDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert("Sharing is not availiable on your platform");
      return;
    }
    await Sharing.shareAsync(selectedImage.localUri);
  };

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
        <TouchableOpacity
          onPress={openSharingDialogAsync}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Share this photo</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={openCameraAsync}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Take another photo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={openImagePickerAsync}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Select another photo</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://i.imgur.com/TkIrScD.png" }}
        style={styles.logo}
      />
      <Text style={styles.instructions}>
        To share a photo from your phone with a friend, just press the button
        below!
      </Text>
      <TouchableOpacity onPress={openCameraAsync} style={styles.button}>
        <Text style={styles.buttonText}>Take a photo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Share;
