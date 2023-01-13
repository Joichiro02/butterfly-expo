import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyle } from "../styles";

interface DataTypes {
  children: any;
}

const Container: React.FC<DataTypes> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyle.primaryColor,
  },
});
