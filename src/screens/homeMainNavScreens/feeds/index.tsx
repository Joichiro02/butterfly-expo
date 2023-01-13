import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Card from "../../../components/Card";
import { globalStyle } from "../../../styles";

const sampleData = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const Index = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.cardContainer}>
          {sampleData.map((item, index) => (
            <Card key={index} navigation={navigation} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyle.primaryColor,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

export default Index;
