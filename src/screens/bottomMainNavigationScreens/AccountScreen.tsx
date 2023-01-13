import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Octicons from "react-native-vector-icons/Octicons";
import Container from "../../components/Container";
import { globalStyle } from "../../styles";

const AccountScreen = () => {
  return (
    <Container>
      <View style={styles.header}>
        <Feather name="bell" style={styles.headerIcon} size={25} />
        <Octicons name="gear" style={styles.headerIcon} size={25} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  headerIcon: {
    color: "#fff",
    marginHorizontal: 10,
    marginVertical: 2,
  },
});

export default AccountScreen;
