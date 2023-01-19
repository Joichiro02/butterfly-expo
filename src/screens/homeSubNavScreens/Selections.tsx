import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Banner from "../../components/banner/Banner";
import Container from "../../components/Container";
import HorizontalSwiperVideos from "../../components/horizontalSwiperVideos";
import SingleVideo from "../../components/singleVideo";
import FourVideos from "../../components/fourVideos";
import { ScrollView } from "react-native-gesture-handler";
import { Divider } from "@react-native-material/core";

const Selections = ({ navigation }: any) => {
  return (
    <ScrollView>
      <Container>
        <Banner />
        <HorizontalSwiperVideos navigation={navigation} />
        <Divider color="#fff" style={styles.divider} />
        <SingleVideo navigation={navigation} />
        <Divider color="#fff" style={styles.divider} />
        <FourVideos navigation={navigation} />
      </Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  divider: {
    marginVertical: 10,
    marginHorizontal: 15,
  },
});

export default Selections;
