/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import BottomMainNavigation from "./src/navigation/BottomMainNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ModelVideos from "./src/screens/homeMainNavScreens/feeds/ModelVideos/ModelVideos";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { globalStyle } from "./src/styles";
import { Image, StyleSheet, Text, View } from "react-native";
import girl from "./src/images/girl.jpg";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="关注"
        screenOptions={{ animation: "slide_from_right" }}
      >
        <Stack.Screen
          name="关注"
          options={{ headerShown: false }}
          component={BottomMainNavigation}
        />
        <Stack.Screen
          name="model"
          component={ModelVideos}
          options={({ navigation }) => ({
            title: "",
            headerStyle: {
              backgroundColor: globalStyle.primaryColor,
            },
            headerLeft: () => (
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Ionicons
                  name="chevron-back-sharp"
                  color="#fff"
                  size={30}
                  onPress={() => navigation.goBack()}
                />
                <Image source={girl} style={styles.image} />
                <View>
                  <Text style={styles.title}>Nana_taipei</Text>
                  <Text style={styles.subTitle}>123456789</Text>
                </View>
              </View>
            ),
            headerTitleStyle: {
              color: "#fff",
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    color: "#fff",
  },
  subTitle: {
    color: "#999",
  },
});

export default App;
