import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Selections from "../screens/homeSubNavScreens/Selections";
import Latest from "../screens/homeSubNavScreens/Latest";
import Original from "../screens/homeSubNavScreens/Original";
import HomeMade from "../screens/homeSubNavScreens/HomeMade";
import Hot from "../screens/homeSubNavScreens/Hot";
import Local from "../screens/homeSubNavScreens/Local";
import PornStars from "../screens/homeSubNavScreens/PornStars";
import Loli from "../screens/homeSubNavScreens/Loli";
import AVModels from "../screens/homeSubNavScreens/AVModels";
import Hentai from "../screens/homeSubNavScreens/Hentai";
import { globalStyle } from "../styles/index";

const SubMenuTab = createMaterialTopTabNavigator();

const HomeTopSubNavigation = () => {
  return (
    <SubMenuTab.Navigator
      initialRouteName="精选"
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
          margin: 0,
          padding: 0,
          width: 45,
        },
        tabBarScrollEnabled: true,
        animationEnabled: false,
      }}
    >
      <SubMenuTab.Screen name="精选" component={Selections} />
      <SubMenuTab.Screen name="最新" component={Latest} />
      <SubMenuTab.Screen name="原创" component={Original} />
      <SubMenuTab.Screen name="自制" component={HomeMade} />
      <SubMenuTab.Screen name="热门" component={Hot} />
      <SubMenuTab.Screen name="国产" component={Local} />
      <SubMenuTab.Screen name="网黄" component={PornStars} />
      <SubMenuTab.Screen name="萝莉" component={Loli} />
      <SubMenuTab.Screen name="AV" component={AVModels} />
      <SubMenuTab.Screen name="动漫" component={Hentai} />
    </SubMenuTab.Navigator>
  );
};

export default HomeTopSubNavigation;
