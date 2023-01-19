import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import banner10 from "../../images/banner10.jpg";
import Ionicons from "react-native-vector-icons/Ionicons";
import { globalStyle } from "../../styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

type Props = {};

const { width } = Dimensions.get("window");

const index = ({ navigation }: any) => {
  const handlePress = () => {
    navigation.navigate("model");
  };
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={handlePress}
    >
      <View style={styles.titleContent}>
        <Text style={styles.title}>Title and Description</Text>
        <MaterialCommunityIcons
          name="chevron-triple-right"
          color={globalStyle.secondaryColor}
          size={20}
        />
      </View>
      <Image source={banner10} style={styles.image} />
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

export default index;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    height: 225,
    marginHorizontal: 15,
  },
  titleContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    paddingHorizontal: 10,
    borderLeftColor: globalStyle.secondaryColor,
    borderLeftWidth: 4,
    textAlign: "center",
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
