import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Banner from "../../components/banner/Banner";
import Container from "../../components/Container";
import DividerContainer from "../../components/DividerContainer";
import SingleVideo from "../../components/singleVideo";
import TitleDescription from "../../components/TitleDescription";
import FeedVideos from "../../components/feedsVidoes";

const Latest = ({ navigation }: any) => {
  return (
    <ScrollView>
      <Container>
        <Banner />
        <TitleDescription />
        {[...Array(40)].map((_, index) => (
          <View style={styles.container}>
            <SingleVideo navigation={navigation} />
          </View>
        ))}
        <DividerContainer />
        <FeedContainer navigation={navigation} />
        <DividerContainer />
        <Text style={styles.bottomText}>人家也是有底线的啦！</Text>
      </Container>
    </ScrollView>
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

export default Latest;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  bottomText: {
    textAlign: "center",
    color: "#fff",
    paddingTop: 10,
    paddingBottom: 20,
    fontSize: 16,
  },
});
