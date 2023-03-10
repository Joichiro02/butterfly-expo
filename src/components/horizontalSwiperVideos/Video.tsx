import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import Ionicons from "react-native-vector-icons/Ionicons";

type Props = {};

const { width } = Dimensions.get("window");

const Video = ({ navigation, index, data, item }: any) => {
  const handlePress = () => {
    navigation.navigate("model");
  };
  return (
    <TouchableOpacity
      style={[
        styles.container,
        index === 0 ? { marginLeft: 15 } : null,
        index === data.length - 1 ? { marginRight: 15 } : null,
      ]}
      activeOpacity={1}
      onPress={handlePress}
    >
      <Image source={item} style={styles.image} />
      <View style={styles.content}>
        <Ionicons name="person-circle-outline" size={40} color={"#fff"} />
        <View style={styles.texts}>
          <Text style={styles.text}>The Color Green Frog</Text>
          <Text style={styles.text}>Frog</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Video;

const styles = StyleSheet.create({
  container: {
    borderColor: "#fff",
    borderWidth: 1,
    width: width * 0.7,
    height: 205,
    marginHorizontal: 5,
  },
  image: {
    height: 160,
    width: "100%",
  },
  content: {
    flexDirection: "row",
  },
  texts: {
    justifyContent: "space-evenly",
  },
  text: {
    color: "#fff",
    fontSize: 15,
  },
});
