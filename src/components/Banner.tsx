import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselCardItem";
import React, { useEffect, useRef, useState } from "react";
import { data } from "../data/data";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import AntDesign from "react-native-vector-icons/AntDesign";

type Props = {};
const { width, height } = Dimensions.get("window");

const Banner = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);

  const handlePrev = () => {
    isCarousel?.current.prev();
    // setIndex(index - 1);
  };
  const handleNext = () => {
    isCarousel?.current.next();
    // setIndex(index + 1);
  };
  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <AntDesign
          name="leftcircleo"
          size={30}
          style={styles.leftIcon}
          onPress={handlePrev}
        />
        <Carousel
          ref={isCarousel}
          loop
          width={width}
          height={width / 2}
          autoPlay={true}
          data={data}
          scrollAnimationDuration={1000}
          onSnapToItem={(index: any) => setIndex(index)}
          overscrollEnabled={true}
          renderItem={CarouselCardItem}
          pagingEnabled={true}
        />
        <AntDesign
          name="rightcircleo"
          size={30}
          style={styles.rightIcon}
          onPress={handleNext}
        />
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: "cyan",
    position: "relative",
    flexDirection: "row",
    width: width,
  },
  leftIcon: {
    position: "absolute",
    left: 20,
    top: "50%",
    zIndex: 10,
    transform: [{ translateY: -15 }],
  },
  rightIcon: {
    position: "absolute",
    right: 20,
    top: "50%",
    zIndex: 10,
    transform: [{ translateY: -15 }],
  },
});

export default Banner;
