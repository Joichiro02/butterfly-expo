import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import React from 'react'
import Container from '../../../components/Container'
import { Flex, Avatar } from "@react-native-material/core";


const Users = [
	{
		name: 'First Item',
	},
	{
		name: 'Second Item',
	},
	{
		name: 'Third Item',
	},
	{
		name: 'First Item',
	},
	{
		name: 'Second Item',
	},
	{
		name: 'Third Item',
	},
	{
		name: 'First Item',
	},
	{
		name: 'Second Item',
	},
	{
		name: 'Third Item',
	},
	{
		name: 'First Item',
	},
	{
		name: 'Second Item',
	},
	{
		name: 'Third Item',
	},
];

type Props = {}

const OverallScreen = (props: Props) => {
	return (
		<Container>
			<ScrollView scrollEnabled={true}>
				<Text style={styles.categoryText}>我的关注</Text>
				<FlatList
					scrollEnabled={false}
					columnWrapperStyle={{justifyContent:"space-between", margin: 24}}
					numColumns={4}
					data={Users}
					renderItem={({ item, index }) => <Avatar key={index} label={item.name} size={48} />}
					keyExtractor={(item, index) => "" + index}
				/>
				<Text style={styles.categoryText}>糖心 Model</Text>
				<FlatList
					scrollEnabled={false}
					columnWrapperStyle={{ justifyContent: "space-between", margin: 24 }}
					numColumns={4}
					data={Users}
					renderItem={({ item, index }) => <Avatar key={index} label={item.name} size={48} />}
					keyExtractor={(item, index) => "" + index}
				/>
				<Text style={styles.categoryText}>Swagger</Text>
				<FlatList
					scrollEnabled={false}
					columnWrapperStyle={{ justifyContent: "space-between", margin: 24 }}
					numColumns={4}
					data={Users}
					renderItem={({ item, index }) => <Avatar key={index} label={item.name} size={48} />}
					keyExtractor={(item, index) => "" + index}
				/>
				<Text style={styles.categoryText}>福利姫</Text>
				<FlatList
					scrollEnabled={false}
					columnWrapperStyle={{ justifyContent: "space-between", margin: 24 }}
					numColumns={4}
					data={Users}
					renderItem={({ item, index }) => <Avatar key={index} label={item.name} size={48} />}
					keyExtractor={(item, index) => "" + index}
				/>
				<Text style={styles.subText}>人家也是有底线的啦!</Text>
			</ScrollView>
		</Container>
	)
}

export default OverallScreen

const styles = StyleSheet.create({
	text: {
		color:"white"
	},
	categoryText: {
		color: "white",
		borderLeftColor: "#e15655",
		borderLeftWidth: 4,
		paddingLeft: 12,
		marginTop: 12
	},
	subText: {
		color: "#999",
		textAlign: "center",
		marginVertical: 24
	}
})