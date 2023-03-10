import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Banner from "../../components/banner/Banner";
import Container from "../../components/Container";
import HorizontalSwiperVideos from "../../components/horizontalSwiperVideos";
import SingleVideo from "../../components/singleVideo";
import FourVideos from "../../components/fourVideos";
import FeedVideos from "../../components/feedsVidoes";
import SixVideos from "../../components/sixVideos";
import MultipleVideos from "../../components/multipleVideos";
import { ScrollView } from "react-native-gesture-handler";
import TitleDescription from "../../components/TitleDescription";
import DividerContainer from "../../components/DividerContainer";

const Selections = ({ navigation }: any) => {
  return (
    <ScrollView>
      <Container>
        <Banner />
        <HorizontalSwiperVideosContainer navigation={navigation} />
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
        <SingleContainer navigation={navigation} />
        <DividerContainer />
        <FourContainer navigation={navigation} />
        <DividerContainer />
        <SixContainer navigation={navigation} />
        <DividerContainer />
        <HorizontalSwiperVideosContainer navigation={navigation} />
        <DividerContainer />
        <SingleContainer navigation={navigation} />
        <DividerContainer />
        <FourContainer navigation={navigation} />
        <DividerContainer />
        <SixContainer navigation={navigation} />
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
        <MultipleContainer navigation={navigation} />
        <DividerContainer />
        <Text style={styles.bottomText}>??????????????????????????????</Text>
      </Container>
    </ScrollView>
  );
};

const HorizontalSwiperVideosContainer = ({ navigation }: any) => {
  return (
    <View>
      <TitleDescription />
      <HorizontalSwiperVideos navigation={navigation} />
    </View>
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

const SixContainer = ({ navigation }: any) => {
  return (
    <View>
      <TitleDescription />
      <SixVideos navigation={navigation} />
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

const MultipleContainer = ({ navigation }: any) => {
  return (
    <View>
      <TitleDescription />
      <MultipleVideos navigation={navigation} />
    </View>
  );
};

export default Selections;

const styles = StyleSheet.create({
  bottomText: {
    textAlign: "center",
    color: "#fff",
    paddingTop: 10,
    paddingBottom: 20,
    fontSize: 16,
  },
});
