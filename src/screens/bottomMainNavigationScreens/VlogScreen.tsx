import { StyleSheet, FlatList, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import ShortVideo from '../../components/portraitVideo/ShortVideo';
import { FlashList } from '@shopify/flash-list';

const { width: windowWidth, height: windowHeight } = Dimensions.get("window")

type Props = {}

interface VideoModel {
	id: number;
	userName: string;
	uri: string;
	isPortrait: boolean
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
		isPortrait: true,
		description: 'Cute dog shaking hands',
		tags: "#cute #puppy",
		likes: 4321,
		amountOfComments: 2841,
		avatarUri: 'https://wallpaperaccess.com/full/1669289.jpg',
	},
	{
		id: 15,
		userName: 'Landscape Video 1',
		uri: 'http://d3rlna7iyyu8wu.cloudfront.net/skip_armstrong/skip_armstrong_stereo_subs.m3u8',
		isPortrait: false,
		description: 'Landscape video testing',
		tags: "#landscape #HLS",
		likes: 4321,
		amountOfComments: 2841,
		avatarUri: 'https://wallpaperaccess.com/full/1669289.jpg',
	},
	{
		id: 2,
		userName: 'band 1',
		uri: 'https://assets.mixkit.co/videos/preview/mixkit-pop-rock-band-performing-a-song-5121-large.mp4',
		isPortrait: true,
		description: 'Cute dog shaking hands',
		tags: "#band #guitar",
		likes: 4321,
		amountOfComments: 2841,
		avatarUri: 'https://wallpaperaccess.com/full/1669289.jpg',
	},
	{
		id: 25,
		userName: 'Landscape Video 2',
		uri: 'http://amssamples.streaming.mediaservices.windows.net/69fbaeba-8e92-4740-aedc-ce09ae945073/AzurePromo.ism/manifest(format=m3u8-aapl)',
		isPortrait: false,
		description: 'Landscape video testing',
		tags: "#landscape #HLS",
		likes: 4321,
		amountOfComments: 2841,
		avatarUri: 'https://wallpaperaccess.com/full/1669289.jpg',
	},
	{
		id: 3,
		userName: 'User meow',
		uri: 'https://v.pinimg.com/videos/mc/720p/11/05/2c/11052c35282355459147eabe31cf3c75.mp4',
		isPortrait: true,
		description: 'Doggies eating candy',
		tags: "#cute #puppy",
		likes: 2411,
		amountOfComments: 1222,
		avatarUri: 'https://wallpaperaccess.com/thumb/266770.jpg',
	},
	{
		id: 35,
		userName: 'Landscape Video 3',
		uri: 'https://moctobpltc-i.akamaihd.net/hls/live/571329/eight/playlist.m3u8',
		isPortrait: false,
		description: 'Landscape video testing',
		tags: "#landscape #HLS",
		likes: 2411,
		amountOfComments: 1222,
		avatarUri: 'https://wallpaperaccess.com/thumb/266770.jpg',
	},
	{
		id: 4,
		userName: 'bartender',
		uri: 'https://assets.mixkit.co/videos/preview/mixkit-serving-drink-in-a-small-metal-mixer-5129-large.mp4',
		isPortrait: true,
		description: 'Doggies eating candy',
		tags: "#drink #bar",
		likes: 2411,
		amountOfComments: 1222,
		avatarUri: 'https://wallpaperaccess.com/thumb/266770.jpg',
	},
	{
		id: 5,
		userName: 'sports',
		uri: 'https://assets.mixkit.co/videos/preview/mixkit-close-up-view-of-woman-stretching-before-exercising-5356-large.mp4',
		isPortrait: true,
		description: 'Doggies eating candy',
		tags: "#sports #stretch",
		likes: 2411,
		amountOfComments: 1222,
		avatarUri: 'https://wallpaperaccess.com/thumb/266770.jpg',
	},
	{
		id: 6,
		userName: 'User yummy',
		uri: 'https://v.pinimg.com/videos/mc/720p/c9/22/d8/c922d8391146cc2fdbeb367e8da0d61f.mp4',
		isPortrait: true,
		description: 'Brown little puppy',
		tags: "#cute #puppy",
		likes: 3100,
		amountOfComments: 801,
		avatarUri: 'https://wallpaperaccess.com/thumb/384178.jpg',
	},
	{
		id: 7,
		userName: 'User person 1',
		uri: 'https://assets.mixkit.co/videos/preview/mixkit-fashion-model-with-a-cold-and-pale-appearance-39877-large.mp4',
		isPortrait: true,
		description: 'Brown little puppy',
		tags: "#cute #puppy",
		likes: 1200,
		amountOfComments: 51,
		avatarUri: 'https://wallpaperaccess.com/thumb/384178.jpg',
	},
	{
		id: 8,
		userName: 'User person 2',
		uri: 'https://assets.mixkit.co/videos/preview/mixkit-cheerful-man-moves-forward-dancing-in-the-middle-of-nature-32746-large.mp4',
		isPortrait: true,
		description: 'Brown little puppy',
		tags: "#cute #puppy",
		likes: 1200,
		amountOfComments: 51,
		avatarUri: 'https://wallpaperaccess.com/thumb/384178.jpg',
	},
	{
		id: 9,
		userName: 'User person 3',
		uri: 'https://assets.mixkit.co/videos/preview/mixkit-blogging-girl-down-the-street-with-his-cell-34487-large.mp4',
		isPortrait: true,
		description: 'Brown little puppy',
		tags: "#cute #puppy",
		likes: 1200,
		amountOfComments: 51,
		avatarUri: 'https://wallpaperaccess.com/thumb/384178.jpg',
	},
	{
		id: 10,
		userName: 'Scene 1',
		uri: 'https://assets.mixkit.co/videos/preview/mixkit-under-a-peripheral-road-with-two-avenues-on-the-sides-34560-large.mp4',
		isPortrait: true,
		description: 'Brown little puppy',
		tags: "#scene #city",
		likes: 1200,
		amountOfComments: 51,
		avatarUri: 'https://wallpaperaccess.com/thumb/384178.jpg',
	},
	{
		id: 11,
		userName: 'Scene 2',
		uri: 'https://assets.mixkit.co/videos/preview/mixkit-city-traffic-on-bridges-and-streets-34565-large.mp4',
		isPortrait: true,
		description: 'Brown little puppy',
		tags: "#scene #city",
		likes: 1200,
		amountOfComments: 51,
		avatarUri: 'https://wallpaperaccess.com/thumb/384178.jpg',
	},
	{
		id: 12,
		userName: 'Scene 3',
		uri: 'https://assets.mixkit.co/videos/preview/mixkit-shadow-of-a-persons-hand-waving-3924-large.mp4',
		isPortrait: true,
		description: 'Brown little puppy',
		tags: "#scene #city",
		likes: 1200,
		amountOfComments: 51,
		avatarUri: 'https://wallpaperaccess.com/thumb/384178.jpg',
	},
]

const VlogScreen = (props: Props) => {
	const [activeVideoIndex, secActiveVideoIndex] = useState(0)
	const bottomTabHeight = useBottomTabBarHeight()
	return (
		<FlatList
			// estimatedItemSize={15}
			data={data}
			pagingEnabled
			removeClippedSubviews={true}
			renderItem={({ item, index }) =>
				<ShortVideo
					key={item.id}
					uri={item.uri}
					isPortrait={item.isPortrait}
					userName={item.userName}
					description={item.description}
					tags={item.tags}
					likes={item.likes}
					amountOfComments={item.amountOfComments}
					userImage={item.avatarUri}
					isActive={activeVideoIndex === index}
					activeVideoIndex={activeVideoIndex}
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