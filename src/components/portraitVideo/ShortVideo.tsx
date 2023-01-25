import { StyleSheet, Text, View, Dimensions, Alert, Modal, FlatList, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react';
import { ResizeMode, Video } from 'expo-av';
import { Pressable, VStack, Avatar, HStack, Divider, Wrap } from "@react-native-material/core";
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
	amountOfComments: number
	userImage: string
	isActive: boolean
	activeVideoIndex: number
}

const commentData = [
	{
		userName: "first user Name",
		comment: 'A very long comment First Comment Item ITEM ITEM ITEM ITEM  ITEMITEM LONG COMMMENT LONG COMMMENT LONG COMMMENT',
	},
	{
		userName: "second user Name",
		comment: 'Second Comment Item Another different comment abit longer',
	},
	{
		userName: "third user Name",
		comment: 'Third Comment Item comment but its shorter',
	},
	{
		userName: "fourth user Name",
		comment: 'Frouth Comment Item comment but its shorter',
	},
	{
		userName: "fith user Name",
		comment: 'fith Comment Item comment but its shorter',
	},
	{
		userName: "six user Name",
		comment: 'sixth Comment Item comment but its shorter',
	},
];

const ShortVideo = (props: Props) => {
	const [modalVisible, setModalVisible] = useState(false);
	const tabBarHeight = useBottomTabBarHeight();
	console.log("Active: " + props.isActive)
	return (
		<View style={[styles.container, { height: windowHeight - tabBarHeight }]}>
			<Modal
				statusBarTranslucent={true}
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => { setModalVisible(!modalVisible) }}>
				<TouchableOpacity onPress={() => setModalVisible(!modalVisible)}  style={{
					height: "50%",
					marginBottom: "auto",
					backgroundColor: '#191d26',
					opacity: 0.5,
					padding: 24,
				}}>
				</TouchableOpacity>
				<View style={styles.modalContainer}>
					<FlatList
						showsVerticalScrollIndicator={false}
						data={commentData}
						ListFooterComponent={<Text style={styles.subText}>人家也是有底线的啦!</Text>}
						// keyExtractor
						renderItem={({ item }) =>
						<VStack spacing={6}>
							<HStack spacing={8}>
								<Avatar label={item.userName} autoColor size={42} />
								<VStack spacing={4} ph={6} style={{flex: 1}}>
									<Text style={{ color: "white" }}>{item.userName}</Text>
									<Text style={{ color: "white" }}>{item.comment}</Text>
								</VStack>
								</HStack>
								<Divider color="gray" style={{marginVertical: 6}} />
						</VStack>}
					/>
						<TextInput
							style={{ color: "white", backgroundColor:"#262632", position:"absolute", bottom: 0, padding: 12, width: windowWidth}}
							cursorColor={"white"}
							// value={"number"}
							placeholder="发表评论"
							placeholderTextColor="white"
							keyboardType="default" />
						<Pressable onPress={()=>{Alert.alert("asd")}}>
							<Text style={{ color: "white", position: "absolute", bottom: 0, right:0}}>确定</Text>
						</Pressable>
				</View>
			</Modal>
			{props.isActive && 
				<Video
					source={{ uri: props.uri }}
					style={styles.video}
					resizeMode={ResizeMode.STRETCH}
					isLooping={true}
					shouldPlay={props.isActive}
					useNativeControls={false}
				/>
			 }
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
					<Pressable onPress={() => setModalVisible(!modalVisible)} pressEffectColor='black' pressEffect='android-ripple'>
						<MaterialCommunityIcons name="comment" color={"white"} size={40} />
					</Pressable>
					<Text style={styles.iconText}>{props.amountOfComments}</Text>
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
		height: windowHeight,
		backgroundColor: "#191d26",
	},
	blackLayer: {
		flex: 1,
		backgroundColor: "black",
		opacity: 0.5,
		height: windowHeight,
		zIndex: 2
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
	},
	modalContainer: {
		height: "50%",
		marginTop: "auto",
		backgroundColor: '#191d26',
		paddingVertical: 12,
		paddingHorizontal: 24
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	subText: {
		color: "#999",
		textAlign: "center",
		marginVertical: 6,
		marginBottom: 48,
	}
})