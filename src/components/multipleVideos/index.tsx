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
import banner5 from "../../images/banner5.jpg";
import banner6 from "../../images/banner6.jpg";
import banner7 from "../../images/banner7.jpg";
import banner8 from "../../images/banner8.jpg";
import banner9 from "../../images/banner9.jpg";
import banner10 from "../../images/banner10.jpg";
import { FlatList } from "react-native-gesture-handler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { globalStyle } from "../../styles";

const images = [
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  banner7,
  banner8,
  banner9,
  banner10,
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  banner7,
  banner8,
  banner9,
  banner10,
];
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
        <Text style={[styles.text, styles.titleDescription]}>
          Title and Description
        </Text>
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
  titleDescription: {
    paddingHorizontal: 5,
  },
  text: {
    color: "#fff",
  },
});
