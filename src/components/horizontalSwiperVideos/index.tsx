import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyle } from "../../styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Video from "./Video";
import { FlatList } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");

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
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        renderItem={() => <Video navigation={navigation} />}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  titleContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
