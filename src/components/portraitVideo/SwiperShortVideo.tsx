import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Alert,
  FlatList,
} from "react-native";
import { ResizeMode, Video } from "expo-av";
import { Pressable, VStack } from "@react-native-material/core";
import { Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

interface VideoModel {
  id: number;
  userName: string;
  uri: string;
  description: string;
  tags: string;
  likes: number;
  comments: number;
  avatarUri: string;
}

const data: VideoModel[] = [
  {
    id: 1,
    userName: "User cutedog",
    uri: "https://v.pinimg.com/videos/mc/720p/f6/88/88/f68888290d70aca3cbd4ad9cd3aa732f.mp4",
    description: "Cute dog shaking hands",
    tags: "#cute #puppy",
    likes: 4321,
    comments: 2841,
    avatarUri: "https://wallpaperaccess.com/full/1669289.jpg",
  },
  {
    id: 2,
    userName: "User meow",
    uri: "https://v.pinimg.com/videos/mc/720p/11/05/2c/11052c35282355459147eabe31cf3c75.mp4",
    description: "Doggies eating candy",
    tags: "#cute #puppy",
    likes: 2411,
    comments: 1222,
    avatarUri: "https://wallpaperaccess.com/thumb/266770.jpg",
  },
  {
    id: 3,
    userName: "User yummy",
    uri: "https://v.pinimg.com/videos/mc/720p/c9/22/d8/c922d8391146cc2fdbeb367e8da0d61f.mp4",
    description: "Brown little puppy",
    tags: "#cute #puppy",
    likes: 3100,
    comments: 801,
    avatarUri: "https://wallpaperaccess.com/thumb/384178.jpg",
  },
];

const SwiperShortVideo = ({ navigation }: any) => {
  const [activeVideoIndex, secActiveVideoIndex] = useState(0);
  return (
    <View style={{ position: "relative" }}>
      <Ionicons
        name="chevron-back"
        size={35}
        color="#fff"
        style={{ position: "absolute", top: 5, left: 0, zIndex: 10 }}
        onPress={() => navigation.goBack()}
      />
      <FlatList
        data={data}
        pagingEnabled
        renderItem={({ item, index }) => (
          <ShortVideo
            key={item.id}
            uri={item.uri}
            userName={item.userName}
            description={item.description}
            tags={item.tags}
            likes={item.likes}
            comments={item.comments}
            userImage={item.avatarUri}
            isActive={activeVideoIndex === index}
          />
        )}
        onScroll={(e) => {
          const index = Math.round(
            e.nativeEvent.contentOffset.y / windowHeight
          );
          secActiveVideoIndex(index);
        }}
      />
    </View>
  );
};

interface Props {
  uri: string;
  userName: string;
  description: string;
  tags: string;
  likes: number;
  comments: number;
  userImage: string;
  isActive: boolean;
}

const ShortVideo: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <Video
        source={{ uri: props.uri }}
        style={styles.video}
        resizeMode={ResizeMode.STRETCH}
        isLooping={true}
        shouldPlay={props.isActive}
        useNativeControls={false}
      />
      <VStack spacing={8} style={styles.bottomSection}>
        <Pressable
          onPress={() => {
            Alert.alert("Go to user Profile!");
          }}
          pressEffect="none"
        >
          <Text style={[styles.userName, styles.iconText]}>
            @{props.userName}
          </Text>
        </Pressable>
        <Text style={styles.iconText}>{props.description}</Text>
        <Pressable
          onPress={() => {
            Alert.alert("Search by Tag");
          }}
          pressEffect="none"
        >
          <Text style={styles.iconText}>{props.tags}</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            Alert.alert("Go to VIP purchase");
          }}
          pressEffect="none"
        >
          <Text style={styles.subscribe}>Subscription needed or gold coin</Text>
        </Pressable>
      </VStack>
      <VStack spacing={8} style={styles.verticalBar}>
        <View style={styles.verticalBarItem}>
          <Pressable
            onPress={() => {
              Alert.alert("Go to user Profile!");
            }}
            pressEffect="none"
          >
            <Image style={styles.userLogo} source={{ uri: props.userImage }} />
          </Pressable>
          <View style={styles.followButton}>
            <Pressable
              onPress={() => {
                Alert.alert("Follow User!");
              }}
              pressEffect="none"
            >
              <Feather name="plus" color={"white"} size={16} />
            </Pressable>
          </View>
        </View>
        <View style={styles.verticalBarItem}>
          <Pressable
            onPress={() => {
              Alert.alert("Like!");
            }}
            pressEffectColor="red"
            pressEffect="android-ripple"
          >
            <Ionicons name="heart" color={"white"} size={40} />
          </Pressable>
          <Text style={styles.iconText}>{props.likes}</Text>
        </View>
        <View style={styles.verticalBarItem}>
          <Pressable
            onPress={() => {
              Alert.alert("Open Comment");
            }}
            pressEffectColor="black"
            pressEffect="android-ripple"
          >
            <MaterialCommunityIcons name="comment" color={"white"} size={40} />
          </Pressable>
          <Text style={styles.iconText}>{props.comments}</Text>
        </View>
        <View style={styles.verticalBarItem}>
          <Pressable
            onPress={() => {
              Alert.alert("Add to Fave");
            }}
            pressEffectColor="yellow"
            pressEffect="android-ripple"
          >
            <Ionicons name="star" color={"white"} size={40} />
          </Pressable>
          <Text style={styles.iconText}>Fave</Text>
        </View>
        <View style={styles.verticalBarItem}>
          <Pressable
            onPress={() => {
              Alert.alert("Download Video");
            }}
            pressEffectColor="black"
            pressEffect="android-ripple"
          >
            <MaterialCommunityIcons name="download" color={"white"} size={40} />
          </Pressable>
          <Text style={styles.iconText}>DL</Text>
        </View>
      </VStack>
    </View>
  );
};

export default SwiperShortVideo;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
  },
  video: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: 20,
  },
  bottomSection: {
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 8,
    paddingBottom: 16,
  },
  userName: {
    fontWeight: "bold",
  },
  verticalBar: {
    position: "absolute",
    right: 8,
    bottom: 0,
    paddingBottom: 16,
  },
  verticalBarItem: {
    alignItems: "center",
  },
  iconText: {
    color: "white",
    textShadowColor: "black",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 24,
  },
  followButton: {
    position: "relative",
    bottom: 12,
    backgroundColor: "red",
    borderRadius: 8,
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
});
