import React, { Component } from "react";
import { Text, View, Dimensions } from "react-native";
//@ts-ignore
import Carousel from "react-native-looped-carousel";

const { width, height } = Dimensions.get("window");
const size = { width, height };
export default function Example() {
  const handleNextPage = (index: number) => {
    console.log(index);
  };
  return (
    <View style={{ flex: 1 }}>
      <Carousel
        delay={2000}
        style={size}
        autoplay
        pageInfo
        onAnimateNextPage={handleNextPage}
      >
        <View style={[{ backgroundColor: "#BADA55" }, size]}>
          <Text>1</Text>
        </View>
        <View style={[{ backgroundColor: "red" }, size]}>
          <Text>2</Text>
        </View>
        <View style={[{ backgroundColor: "blue" }, size]}>
          <Text>3</Text>
        </View>
      </Carousel>
    </View>
  );
}
