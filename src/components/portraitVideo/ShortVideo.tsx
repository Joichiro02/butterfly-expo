import { StyleSheet, Text, View, Dimensions, Alert } from 'react-native'
import React from 'react';
import { ResizeMode, Video } from 'expo-av';
import { Pressable, VStack } from "@react-native-material/core";
import { IconComponentProvider, Icon } from "@react-native-material/core";
import { Image } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window")


type Props = {
	uri: string
	userName: string
	description: string
	tags: string
	likes: number
	comments: number
	userImage: string
	isActive: boolean
}

const ShortVideo = (props: Props) => {
	const tabBarHeight = useBottomTabBarHeight();
	return (
		<View style={[styles.container, { height: windowHeight - tabBarHeight }]}>
		<Video
			source={{ uri: props.uri }}
			style={styles.video}
			resizeMode={ResizeMode.STRETCH}
			isLooping={true}
			shouldPlay={props.isActive}
			useNativeControls={false}
		/>
		<VStack spacing={8} style={styles.bottomSection}>
			<Pressable onPress={() => { Alert.alert("Go to user Profile!") }} pressEffect="none">
				<Text style={[styles.userName, styles.iconText]}>@{props.userName}</Text>
			</Pressable>
			<Text style={styles.iconText}>{props.description}</Text>
				<Pressable onPress={() => { Alert.alert("Search by Tag") }} pressEffect="none">
				<Text style={styles.iconText}>{props.tags}</Text>
			</Pressable>
			<Pressable onPress={() => { Alert.alert("Go to VIP purchase") }} pressEffect="none">
				<Text style={styles.subscribe}>Subscription needed or gold coin</Text>
			</Pressable>
		</VStack>
		<VStack spacing={8} style={styles.verticalBar}>
			<View style={styles.verticalBarItem}>
				<Pressable onPress={() => { Alert.alert("Go to user Profile!") }} pressEffect="none">
					<Image
						style={styles.userLogo}
						source={{ uri: props.userImage }}
					/>
				</Pressable>
				<View style={styles.followButton}>
					<Pressable onPress={() => { Alert.alert("Follow User!") }} pressEffect="none">
						<Feather name="plus" color={"white"} size={16} />
					</Pressable>
				</View>
			</View>
			<View style={styles.verticalBarItem}>
				<Pressable onPress={() => { Alert.alert("Like!") }} pressEffectColor='red' pressEffect='android-ripple'>
					<Ionicons name="heart" color={"white"} size={40} />
				</Pressable>
				<Text style={styles.iconText}>{props.likes}</Text>
			</View>
			<View style={styles.verticalBarItem}>
				<Pressable onPress={() => { Alert.alert("Open Comment") }} pressEffectColor='black' pressEffect='android-ripple'>
					<MaterialCommunityIcons name="comment" color={"white"} size={40} />
				</Pressable>
				<Text style={styles.iconText}>{props.comments}</Text>
			</View>
			<View style={styles.verticalBarItem}>
				<Pressable onPress={() => { Alert.alert("Add to Fave") }} pressEffectColor='yellow' pressEffect='android-ripple'>
					<Ionicons name="star" color={"white"} size={40} />
				</Pressable>
				<Text style={styles.iconText}>Fave</Text>
			</View>
			<View style={styles.verticalBarItem}>
				<Pressable onPress={() => { Alert.alert("Download Video") }} pressEffectColor='black' pressEffect='android-ripple'>
					<MaterialCommunityIcons name="download" color={"white"} size={40} />
				</Pressable>
				<Text style={styles.iconText}>DL</Text>
			</View>
		</VStack>
		</View>
	)
}

export default ShortVideo

const styles = StyleSheet.create({
	container: {
		width: windowWidth,
		height: windowHeight
	},
	video: {
		position: "absolute",
		width: "100%",
		height: "100%"
	},
	text: {
		fontSize: 20,
	},
	bottomSection: {
		position: "absolute",
		bottom: 0,
		paddingHorizontal: 8,
		paddingBottom: 16
	},
	userName: {
		fontWeight: "bold",
	},
	verticalBar: {
		position: "absolute",
		right: 8,
		bottom: 0,
		paddingBottom: 16
	},
	verticalBarItem: {
		alignItems: "center",
	},
	iconText: {
		color: 'white',
		textShadowColor: "black",
		textShadowOffset: { width: 0, height: 0 },
		textShadowRadius: 24,
	},
	followButton: {
		position: "relative",
		bottom: 12,
		backgroundColor: "red",
		borderRadius: 8
	},
	subscribe: {
		color: "white",
		borderWidth: 1,
		borderColor: "white",
		borderRadius: 4,
		padding: 5,
		fontWeight: "bold",
		textShadowColor: "black",
		textShadowOffset: { width: 0, height: 0 },
		textShadowRadius: 24,
	},
	userLogo: {
		width: 40,
		height: 40,
		borderRadius: 20,
		borderWidth: 2,
		borderColor: "white",
	}
})