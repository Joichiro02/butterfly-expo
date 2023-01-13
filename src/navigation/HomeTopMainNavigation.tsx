import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feeds from "../screens/homeMainNavScreens/feeds";
import Home from "../screens/homeMainNavScreens/Home";
import Moment from "../screens/homeMainNavScreens/Moment";
import Photography from "../screens/homeMainNavScreens/Photography";
import Date from "../screens/homeMainNavScreens/Date";
import { StyleSheet, Text, View } from "react-native";
import { globalStyle } from "../styles/index";

const MainTab = createMaterialTopTabNavigator();

const HomeTopMainNavigation = () => {
  return (
    <>
      <MainTab.Navigator
        initialRouteName="首页"
        screenOptions={{
          tabBarActiveTintColor: "#fff",
          tabBarIndicatorStyle: { backgroundColor: globalStyle.secondaryColor },
          tabBarInactiveTintColor: "#999",
          tabBarStyle: {
            backgroundColor: globalStyle.primaryColor,
            height: 40,
          },
          tabBarAllowFontScaling: true,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
          },
          tabBarContentContainerStyle: {
            alignItems: "center",
          },
          tabBarItemStyle: {
            width: 40,
            margin: 0,
            padding: 0,
          },
          animationEnabled: false,
        }}
      >
        <MainTab.Screen name="关注" component={Feeds} />
        <MainTab.Screen name="首页" component={Home} />
        <MainTab.Screen name="动态" component={Moment} />
        <MainTab.Screen name="约会" component={Photography} />
        <MainTab.Screen name="写真" component={Date} />
      </MainTab.Navigator>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#fff" />
        <Text style={styles.searchText}>搜索</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  searchText: {
    color: "#fff",
    fontSize: 12,
    marginHorizontal: 5,
  },
});

export default HomeTopMainNavigation;
