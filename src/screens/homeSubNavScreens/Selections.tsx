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
        <Divider color="#fff" style={styles.divider} />
        <FeedVideos navigation={navigation} />
        <Divider color="#fff" style={styles.divider} />
        <SingleVideo navigation={navigation} />
        <Divider color="#fff" style={styles.divider} />
        <FourVideos navigation={navigation} />
        <Divider color="#fff" style={styles.divider} />
        <FeedVideos navigation={navigation} />
        <Divider color="#fff" style={styles.divider} />
        <SingleVideo navigation={navigation} />
        <Divider color="#fff" style={styles.divider} />
        <FourVideos navigation={navigation} />
        <Divider color="#fff" style={styles.divider} />
        <FeedVideos navigation={navigation} />
        <Divider color="#fff" style={styles.divider} />
        <SingleVideo navigation={navigation} />
        <Divider color="#fff" style={styles.divider} />
        <FourVideos navigation={navigation} />
        <Divider color="#fff" style={styles.divider} />
        <SingleVideo navigation={navigation} />
        <Divider color="#fff" style={styles.divider} />
        <FourVideos navigation={navigation} />
        <Divider color="#fff" style={styles.divider} />
        <SixVideos navigation={navigation} />
        <Divider color="#fff" style={styles.divider} />
        <HorizontalSwiperVideos navigation={navigation} />
        <Divider color="#fff" style={styles.divider} />
        <SingleVideo navigation={navigation} />
        <Divider color="#fff" style={styles.divider} />
        <FourVideos navigation={navigation} />
        <Divider color="#fff" style={styles.divider} />
        <SixVideos navigation={navigation} />
        <Divider color="#fff" style={styles.divider} />
        <FeedVideos navigation={navigation} />
        <Divider color="#fff" style={styles.divider} />
        <SingleVideo navigation={navigation} />
        <Divider color="#fff" style={styles.divider} />
        <FourVideos navigation={navigation} />
        <Divider color="#fff" style={styles.divider} />
        <FeedVideos navigation={navigation} />
        <Divider color="#fff" style={styles.divider} />
        <SingleVideo navigation={navigation} />
        <Divider color="#fff" style={styles.divider} />
        <FourVideos navigation={navigation} />
        <Divider color="#fff" style={styles.divider} />
        <MultipleVideos navigation={navigation} />
        <Divider color="#fff" style={styles.divider} />
        <Text style={styles.bottomText}>人家也是有底线的啦！</Text>
      </Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  divider: {
    marginVertical: 10,
    marginHorizontal: 15,
  },
  bottomText: {
    textAlign: "center",
    color: "#fff",
    paddingTop: 15,
    paddingBottom: 30,
    fontSize: 16,
  },
});

export default Selections;
