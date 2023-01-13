import { StyleSheet, Text, View } from "react-native";
//@ts-ignore
import Carousel, { Pagination } from "@vandrei977/react-native-snap-carousel";
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselCardItem";
import React, { useEffect, useRef, useState } from "react";
import { data } from "../data/data";

type Props = {};

const Banner = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  useEffect(() => {
    //   setTimeout(() => {
    //     if (index === data.length - 1) {
    //       isCarousel?.current?.snapToItem(0);
    //     } else {
    //       isCarousel?.current?.snapToItem(index + 1);
    //     }
    //   }, 2000);
    // console.log("@@@", page.current);
  }, [index]);
  return (
    <View style={styles.container}>
      <Carousel
        layout="stack"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index: number) => setIndex(index)}
        useScrollView={true}
        loopClonesPerSide={data.length}
        loop={true}
        autoplay={true}
        enableSnap={true}
        enableMomentum={false}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: "rgba(0, 0, 0, 0.92)",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    backgroundColor: "cyan",
  },
});

export default Banner;
