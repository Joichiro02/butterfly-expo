import React from "react";
import { StatusBar } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import HomeScreen from "../screens/bottomMainNavigationScreens/HomeScreen";
import VlogScreen from "../screens/bottomMainNavigationScreens/VlogScreen";
import ChatScreen from "../screens/bottomMainNavigationScreens/AccountScreen";
import AccountScreen from "../screens/bottomMainNavigationScreens/AccountScreen";
import { globalStyle } from "../styles/index";
//@ts-ignore
// import Countly from 'countly-sdk-react-native-bridge';

const BottomTab = createBottomTabNavigator();

const BottomMainNavigation = () => {
  //*COUNTLY START CODE
  // const countlyFunc = async () => {
  //   const initial = await Countly?.isInitialized();
  //   console.log('@@@', initial);

  //   if (initial) {
  //     await Countly.init(
  //       'http://45.118.134.146',
  //       '1219cd34028b8ed24ba78f4590a74d94ebaa14e9',
  //     );
  //     Countly.start();
  //   }
  //   console.log('hahahahaha');
  // };

  // useEffect(() => {
  //   countlyFunc();
  // }, []);
  //*COUNTLY END CODE

  return (
    <>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={globalStyle.primaryColor}
      />

      <BottomTab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: globalStyle.secondaryColor,
          tabBarInactiveTintColor: "#fff",
          tabBarStyle: {
            backgroundColor: "#262632",
            paddingBottom: 10,
            height: 60,
          },
        }}
      >
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "首页",
            tabBarIcon: ({ color, size }) => (
              <Feather name="home" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Vlog"
          component={VlogScreen}
          options={{
            tabBarLabel: "Vlog",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="play-box-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            tabBarLabel: "聊天",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="chatbubbles-outline" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarLabel: "我的",
            tabBarIcon: ({ color, size }) => (
              <Octicons name="person" color={color} size={size} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </>
  );
};

export default BottomMainNavigation;
