import { StyleSheet, Text, View, Pressable, Alert } from 'react-native'
import React from 'react'
import Container from '../../../components/Container'
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Octicons from "react-native-vector-icons/Octicons";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { VStack, Box, HStack, Avatar } from "@react-native-material/core";

type Props = {}

const NewsScreen = (props: Props) => {
	return (
		<Container>
			<HStack spacing={12} style={styles.optionsList}>
				<Pressable onPress={() => {Alert.alert("View Fans")} }>
					<VStack spacing={6}>
						<Box style={styles.box}>
							<Feather name="heart" color={"white"} size={24} />
						</Box>
						<Text style={styles.centerText}>粉丝</Text>
					</VStack>
				</Pressable>
				<Pressable onPress={() => { Alert.alert("View Likes") }}>
					<VStack spacing={6}>
						<Box style={styles.box}>
							<AntDesign name="like2" color={"white"} size={24} />
						</Box>
						<Text style={styles.centerText}>点赞</Text>
					</VStack>
				</Pressable>
				<Pressable onPress={() => { Alert.alert("View Comments") }}>
					<VStack spacing={6}>
						<Box style={styles.box}>
							<FontAwesome name="comment-o" color={"white"} size={24} />
						</Box>
						<Text style={styles.centerText}>评论</Text>
					</VStack>
				</Pressable>
				<Pressable onPress={() => { Alert.alert("View Earnings") }}>
					<VStack spacing={6}>
						<Box style={styles.box}>
							<Fontisto name="money-symbol" color={"white"} size={24} />
						</Box>
						<Text style={styles.centerText}>收益</Text>
					</VStack>
				</Pressable>
				<Pressable onPress={() => { Alert.alert("View System") }}>
					<VStack spacing={6}>
						<Box style={styles.box}>
							<Octicons name="gear" color={"white"} size={24} />
						</Box>
						<Text style={styles.centerText}>系统</Text>
					</VStack>
				</Pressable>
			</HStack>
			<Text style={styles.categoryText}>私信列表</Text>
			{/* FLATLIST renderItem()=> this */}
			<VStack dividerStyle={{ backgroundColor: "#999"}} divider={true} spacing={12} style={{ backgroundColor: "#262632", marginTop: 12, padding: 12 }}>
				<Pressable onPress={() => { Alert.alert("View Message") }}>
					<HStack spacing={12}>
						<Pressable onPress={() => { Alert.alert("Go to user profile") }}>
							<Avatar label="Tang Xin" color='white' size={42} />
						</Pressable>
						<VStack spacing={4}>
							<Text style={styles.text}>User Name</Text>
							<Text style={styles.text}>A very long messageeeeeeee </Text>
						</VStack>
						<Pressable onPress={() => { Alert.alert("Delete Message") }} style={styles.deleteIcon}>
							<MaterialCommunityIcons name="delete-outline" color={"white"} size={24} />
							{/* <Text style={styles.text}>删除</Text> */}
						</Pressable>
					</HStack>
				</Pressable>
			</VStack>
			{/* at the very end of flat list */}
			<Text style={styles.subText}>人家也是有底线的啦!</Text>
		</Container>
	)
}

export default NewsScreen

const styles = StyleSheet.create({
	optionsList: {
		paddingVertical: 12,
		paddingHorizontal: 24,
		justifyContent: "space-between"
	},
	box: {
		padding: 6,
		borderWidth: 1,
		borderColor: "white",
	},
	centerText: {
		color: "white",
		textAlign: "center"
	},
	text: {
		color: "white",
	},
	categoryText: {
		color: "white",
		borderLeftColor: "#e15655",
		borderLeftWidth: 4,
		paddingLeft: 12,
		marginTop: 12
	},
	deleteIcon: {
		alignSelf: "center",
		marginLeft: "auto"
	},
	subText: {
		color: "#999",
		textAlign: "center",
		marginTop: 12
	}
})