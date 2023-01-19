import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Banner from "../../components/banner/Banner";
import Container from "../../components/Container";
import { globalStyle } from "../../styles";
import HorizontalSwiperVideos from "../../components/horizontalSwiperVideos";

const Selections = ({ navigation }: any) => {
  return (
    <Container>
      <Banner />
      <HorizontalSwiperVideos navigation={navigation} />
    </Container>
  );
};

export default Selections;
