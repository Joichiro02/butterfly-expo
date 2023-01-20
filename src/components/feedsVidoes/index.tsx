import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import feed1 from "../../images/feed1.jpg";
import feed2 from "../../images/feed2.jpg";
import feed3 from "../../images/feed3.jpg";
import feed4 from "../../images/feed4.jpg";
import feed5 from "../../images/feed5.jpg";
import feed6 from "../../images/feed6.jpg";
import feed7 from "../../images/feed7.jpg";
import feed8 from "../../images/feed8.jpg";
import feed9 from "../../images/feed9.jpg";
import feed10 from "../../images/feed10.jpg";
import feed11 from "../../images/feed11.jpg";
import feed12 from "../../images/feed12.jpg";
import { FlatList } from "react-native-gesture-handler";
import { globalStyle } from "../../styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const feeds = [
  feed1,
  feed2,
  feed3,
  feed4,
  feed5,
  feed6,
  feed7,
  feed8,
  feed9,
  feed10,
  feed10,
  feed11,
  feed12,
];

const { width } = Dimensions.get("window");

const index = ({ navigation }: any) => {
  return (
    <FlatList
      alwaysBounceHorizontal={true}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={feeds}
      renderItem={({ item, index }) => (
        <VideoContent key={index} item={item} index={index} data={feeds} />
      )}
      keyExtractor={(_, index) => "" + index}
    />
  );
};

const VideoContent = ({ item, index, data }: any) => {
  return (
    <TouchableOpacity
      style={[
        styles.feedContent,
        index === 0 ? { marginLeft: 15 } : null,
        index === data.length - 1 ? { marginRight: 15 } : null,
      ]}
      activeOpacity={1}
    >
      <Image source={item} style={styles.image} />
      <View style={styles.textContent}>
        <Text style={styles.text}>Title and Description</Text>
      </View>
    </TouchableOpacity>
  );
};

export default index;

const styles = StyleSheet.create({
  feedContent: {
    height: 250,
    width: width * 0.33,
    marginHorizontal: 3,
    position: "relative",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  textContent: {
    position: "absolute",
    bottom: 0,
    height: 40,
    width: width * 0.33,
    backgroundColor: "rgba(0,0,0, 0.3)",
    padding: 3,
  },
  text: {
    color: "#fff",
    fontSize: 14,
  },
});
