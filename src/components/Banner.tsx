import { Dimensions, StyleSheet, Text, View } from "react-native";
//@ts-ignore
// import Carousel, { Pagination } from "@vandrei977/react-native-snap-carousel";
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselCardItem";
import React, { useEffect, useRef, useState } from "react";
import { data } from "../data/data";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";

import Carousel from "react-native-reanimated-carousel";
import Swipeable from "react-native-gesture-handler/Swipeable";

type Props = {};

const Banner = ({ setSwipe }: any) => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);

  const width = Dimensions.get("window").width;

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
      <GestureHandlerRootView
        onTouchStart={() => setSwipe(false)}
        onTouchMove={() => setSwipe(false)}
      >
        {/* <Carousel
          layout="stack"
          layoutCardOffset={9}
          ref={isCarousel}
          data={data}
          renderItem={CarouselCardItem}
          sliderWidth={Math.round(SLIDER_WIDTH)}
          itemWidth={ITEM_WIDTH}
          onSnapToItem={(index: number) => setIndex(index)}
          useScrollView={true}
          loopClonesPerSide={data.length}
          loop={true}
          autoplay={true}
          enableSnap={true}
          removeClippedSubviews={false}
          horizontal={true}
          firstItem={data.length}
          autoplayDelay={100}
          autoplayInterval={2000}
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
        /> */}
        <Carousel
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
      </GestureHandlerRootView>
      <View
        style={{ backgroundColor: "coral", flex: 1 }}
        onTouchStart={() => setSwipe(true)}
        onTouchEnd={() => setSwipe(false)}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    backgroundColor: "cyan",
    flex: 1,
  },
});

export default Banner;
