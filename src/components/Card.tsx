import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import frog from "../images/frog.jpg";
import { globalStyle } from "../styles";

const Card = ({ navigation }: any) => {
  const handlePress = () => {
    navigation.navigate("model");
  };
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onPress={handlePress}
    >
      <Image source={frog} style={styles.image} />
      <Text style={styles.title}>Green Frog</Text>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomContent}>
          <Ionicons name="person-circle-outline" style={styles.iconProfile} />
          <Text style={styles.text}>Nana_taipei</Text>
        </View>
        <View style={styles.bottomContent}>
          <AntDesign name="heart" style={styles.iconHeart} />
          <Text style={styles.text}>31.4w</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "#fff",
    height: 190,
    width: 190,
    marginBottom: 15,
  },
  image: {
    height: "80%",
    width: "100%",
    resizeMode: "contain",
  },
  iconProfile: {
    color: "#fff",
    marginRight: 2,
  },
  iconHeart: {
    color: globalStyle.secondaryColor,
    marginRight: 2,
  },
  title: {
    color: "#fff",
    marginHorizontal: 5,
    fontSize: 12,
  },
  bottomContainer: {
    marginHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottomContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 8,
  },
});

export default Card;
