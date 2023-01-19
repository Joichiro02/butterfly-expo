import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyle } from "../../styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Video from "./Video";
import { FlatList } from "react-native-gesture-handler";
import banner1 from "../../images/banner1.jpg";
import banner2 from "../../images/banner2.jpg";
import banner3 from "../../images/banner3.jpg";
import banner4 from "../../images/banner4.jpg";
import banner5 from "../../images/banner5.jpg";
import banner6 from "../../images/banner6.jpg";
import banner7 from "../../images/banner7.jpg";
import banner8 from "../../images/banner8.jpg";
import banner9 from "../../images/banner9.jpg";

const { width } = Dimensions.get("window");
const data = [
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  banner7,
  banner8,
  banner9,
];

const index = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContent}>
        <Text style={styles.title}>Title and Description</Text>
        <MaterialCommunityIcons
          name="chevron-triple-right"
          color={globalStyle.secondaryColor}
          size={20}
        />
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(_, index) => "" + index}
        renderItem={({ item, index }) => (
          <Video
            navigation={navigation}
            index={index}
            data={data}
            item={item}
          />
        )}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  titleContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 15,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    paddingHorizontal: 10,
    borderLeftColor: globalStyle.secondaryColor,
    borderLeftWidth: 4,
    textAlign: "center",
  },
});
