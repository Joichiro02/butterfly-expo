import React from "react";
import { StyleSheet } from "react-native";
import Container from "../../components/Container";
import { globalStyle } from "../../styles";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import OverallScreen from "./ChatScreenNavScreens/OverallScreen";
import NewsScreen from "./ChatScreenNavScreens/NewsScreen";


const SubMenuTab = createMaterialTopTabNavigator();

const ChatScreen = () => {
	return (
		<Container>
			<SubMenuTab.Navigator
				initialRouteName="全部"
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
				<SubMenuTab.Screen name="全部" component={OverallScreen} />
				<SubMenuTab.Screen name="消息" component={NewsScreen} />
			</SubMenuTab.Navigator>
		</Container>
	);
};

const styles = StyleSheet.create({
	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-end",
	},
	headerIcon: {
		color: "#fff",
		marginHorizontal: 10,
		marginVertical: 2,
	},
	text: {
		color: "white"
	}
});

export default ChatScreen;
