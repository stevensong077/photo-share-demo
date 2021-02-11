import React from "react";
import { View, Text,Image } from "react-native";
import styles from "./styles";

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://i.imgur.com/TkIrScD.png" }}
        style={styles.logo}
      />
      <Text style={styles.instructions}>
        Image Share is an application for sharing your photos with your families and friends.
        To share a photo from your phone with a friend, just navigate to the Share below!
      </Text>
    </View>
  );
};

export default Home;
