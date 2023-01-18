import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Banner from "../../components/Banner";
import { globalStyle } from "../../styles";

const Selections = ({ setSwipe }: any) => {
  return (
    <View style={styles.container}>
      <Banner setSwipe={setSwipe} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyle.primaryColor,
  },
});

export default Selections;
