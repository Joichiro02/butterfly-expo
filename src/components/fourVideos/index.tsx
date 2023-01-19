import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import React from "react";
import banner1 from "../../images/banner1.jpg";
import banner2 from "../../images/banner2.jpg";
import banner3 from "../../images/banner3.jpg";
import banner4 from "../../images/banner4.jpg";
import { FlatList } from "react-native-gesture-handler";

const images = [banner1, banner2, banner3, banner4];
const { width } = Dimensions.get("window");

const index = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={images}
        renderItem={({ item }) => <Video item={item} navigation={navigation} />}
        keyExtractor={(item, index) => "" + index}
      />
    </View>
  );
};

const Video = ({ item, navigation }: any) => {
  const handlePress = () => {
    navigation.navigate("model");
  };
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.videoContainer}
      onPress={handlePress}
    >
      <View>
        <Image source={item} style={styles.video} />
        <Text style={[styles.text, styles.title]}>Title and Description</Text>
      </View>
      <View style={styles.textContent}>
        <Text style={styles.text}>Nana Taipei</Text>
        <Entypo name="dots-three-vertical" color={"#fff"} />
      </View>
    </TouchableOpacity>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  videoContainer: {
    margin: 5,
    borderWidth: 1,
    borderColor: "#fff",
  },
  video: {
    height: width * 0.3,
    width: width * 0.44,
  },
  textContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
  },
  title: {
    paddingHorizontal: 5,
  },
  text: {
    color: "#fff",
  },
});
