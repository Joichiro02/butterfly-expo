import { Dimensions, StyleSheet, View } from "react-native";
import CarouselCardItem from "./CarouselCardItem";
import React, { useEffect, useRef, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { globalStyle } from "../../styles";
import banner1 from "../../images/banner1.jpg";
import banner2 from "../../images/banner2.jpg";
import banner3 from "../../images/banner3.jpg";
import banner4 from "../../images/banner4.jpg";
import banner5 from "../../images/banner5.jpg";
import banner6 from "../../images/banner6.jpg";
import banner7 from "../../images/banner7.jpg";
import banner8 from "../../images/banner8.jpg";
import banner9 from "../../images/banner9.jpg";
import banner10 from "../../images/banner10.jpg";

const { width, height } = Dimensions.get("window");
const images = [
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  banner7,
  banner8,
  banner9,
  banner10,
];

const Banner = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);

  const handlePrev = () => {
    //@ts-ignore
    isCarousel?.current?.prev();
  };
  const handleNext = () => {
    //@ts-ignore
    isCarousel?.current?.next();
  };
  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <AntDesign
          name="leftcircleo"
          size={20}
          style={styles.leftIcon}
          onPress={handlePrev}
          color={globalStyle.secondaryColor}
        />
        <Carousel
          ref={isCarousel}
          loop
          width={width}
          height={150}
          autoPlay={true}
          data={images}
          scrollAnimationDuration={1000}
          autoPlayInterval={7000}
          onSnapToItem={(index: any) => setIndex(index)}
          overscrollEnabled={true}
          renderItem={CarouselCardItem}
          pagingEnabled={true}
        />
        <AntDesign
          name="rightcircleo"
          size={20}
          style={styles.rightIcon}
          onPress={handleNext}
          color={globalStyle.secondaryColor}
        />
        <View style={styles.pagination}>
          {images.map((_, idx) => (
            <FontAwesome
              key={idx}
              name="circle"
              size={7}
              style={styles.circle}
              color={index === idx ? globalStyle.secondaryColor : "white"}
            />
          ))}
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
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
  pagination: {
    position: "absolute",
    width: 200,
    zIndex: 10,
    bottom: 10,
    left: width / 2,
    transform: [{ translateX: -100 }],
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    marginHorizontal: 2,
  },
});

export default Banner;
