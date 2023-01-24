import { StyleSheet, FlatList, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import ShortVideo from '../../components/portraitVideo/ShortVideo';

const { width: windowWidth, height: windowHeight } = Dimensions.get("window")

type Props = {}

interface VideoModel {
	id: number;
	userName: string;
	uri: string;
	description: string;
	tags: string
	likes: number;
	amountOfComments: number;
	avatarUri: string;
}

const data: VideoModel[] = [
	{
		id: 1,
		userName: 'User cutedog',
		uri: 'https://v.pinimg.com/videos/mc/720p/f6/88/88/f68888290d70aca3cbd4ad9cd3aa732f.mp4',
		description: 'Cute dog shaking hands',
		tags: "#cute #puppy",
		likes: 4321,
		amountOfComments: 2841,
		avatarUri: 'https://wallpaperaccess.com/full/1669289.jpg',
	},
	{
		id: 2,
		userName: 'User meow',
		uri: 'https://v.pinimg.com/videos/mc/720p/11/05/2c/11052c35282355459147eabe31cf3c75.mp4',
		description: 'Doggies eating candy',
		tags: "#cute #puppy",
		likes: 2411,
		amountOfComments: 1222,
		avatarUri: 'https://wallpaperaccess.com/thumb/266770.jpg',
	},
	{
		id: 3,
		userName: 'User yummy',
		uri: 'https://v.pinimg.com/videos/mc/720p/c9/22/d8/c922d8391146cc2fdbeb367e8da0d61f.mp4',
		description: 'Brown little puppy',
		tags: "#cute #puppy",
		likes: 3100,
		amountOfComments: 801,
		avatarUri: 'https://wallpaperaccess.com/thumb/384178.jpg',
	},
]

const VlogScreen = (props: Props) => {
	const [activeVideoIndex, secActiveVideoIndex] = useState(0)
	const bottomTabHeight = useBottomTabBarHeight()
	return (
		<FlatList
			data={data}
			pagingEnabled
			renderItem={({ item, index }) =>
				<ShortVideo
					key={item.id}
					uri={item.uri}
					userName={item.userName}
					description={item.description}
					tags={item.tags}
					likes={item.likes}
					amountOfComments={item.amountOfComments}
					userImage={item.avatarUri}
					isActive={activeVideoIndex === index}
				/>}
			onScroll={e => {
				const index = Math.round(e.nativeEvent.contentOffset.y / (windowHeight - bottomTabHeight))
				secActiveVideoIndex(index)
			}}
		/>
	)
}

export default VlogScreen

const styles = StyleSheet.create({})