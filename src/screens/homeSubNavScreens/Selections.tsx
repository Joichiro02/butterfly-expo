import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Banner from "../../components/Banner";
import { globalStyle } from "../../styles";

const Selections = () => {
  return (
    <View style={styles.container}>
      <Banner />
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
