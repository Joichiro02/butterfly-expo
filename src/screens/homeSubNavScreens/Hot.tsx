import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Banner from "../../components/banner/Banner";
import Container from "../../components/Container";
//@ts-ignore
import Carousel from "@vandrei977/react-native-snap-carousel";
import CarouselCardItem from "../../components/banner/CarouselCardItem";
import DividerContainer from "../../components/DividerContainer";
import TitleDescription from "../../components/TitleDescription";
import HorizontalSwiperVideos from "../../components/horizontalSwiperVideos";
import SingleVideo from "../../components/singleVideo";
import FourVideos from "../../components/fourVideos";
import FeedVideos from "../../components/feedsVidoes";
import SixVideos from "../../components/sixVideos";
import MultipleVideos from "../../components/multipleVideos";
import { ScrollView } from "react-native-gesture-handler";

const Hot = ({ navigation }: any) => {
  return (
    <ScrollView>
      <Container>
        <Banner />
        <SingleContainer navigation={navigation} />
        <DividerContainer />
        <FourContainer navigation={navigation} />
        <DividerContainer />
        <FeedContainer navigation={navigation} />
        <DividerContainer />
        <SingleContainer navigation={navigation} />
        <DividerContainer />
        <FourContainer navigation={navigation} />
        <DividerContainer />
        <FeedContainer navigation={navigation} />
        <DividerContainer />
        <SingleContainer navigation={navigation} />
        <DividerContainer />
        <FourContainer navigation={navigation} />
        <DividerContainer />
        <Text style={styles.bottomText}>人家也是有底线的啦！</Text>
      </Container>
    </ScrollView>
  );
};

const SingleContainer = ({ navigation }: any) => {
  return (
    <View>
      <TitleDescription />
      <SingleVideo navigation={navigation} />
    </View>
  );
};

const FourContainer = ({ navigation }: any) => {
  return (
    <View>
      <FourVideos navigation={navigation} />
    </View>
  );
};

const FeedContainer = ({ navigation }: any) => {
  return (
    <View>
      <TitleDescription />
      <FeedVideos navigation={navigation} />
    </View>
  );
};

export default Hot;

const styles = StyleSheet.create({
  bottomText: {
    textAlign: "center",
    color: "#fff",
    paddingTop: 10,
    paddingBottom: 20,
    fontSize: 16,
  },
});
