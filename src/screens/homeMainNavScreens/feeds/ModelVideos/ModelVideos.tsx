import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
  TextInput,
  Alert
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Fontisto from "react-native-vector-icons/Fontisto";
import Zocial from "react-native-vector-icons/Zocial";
import React from "react";
import Container from "../../../../components/Container";
import frog from "../../../../images/frog.jpg";
import { Video, AVPlaybackStatus, ResizeMode } from "expo-av";
import * as ScreenOrientation from 'expo-screen-orientation';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { globalStyle } from "../../../../styles/index";
import FourVideos from "../../../../components/fourVideos/index"
import { Pressable, VStack, Avatar, HStack, Divider, Wrap } from "@react-native-material/core";

type Props = {};

const { width, height } = Dimensions.get("window");

// SUB TAB COMPONENTS (here for now for  testing purposes)
const TAVideos = ({ navigation }: any) => {
  
  return (
    <ScrollView nestedScrollEnabled={true}>
      <Container>
        <FourVideos navigation={navigation} />
        <FourVideos navigation={navigation} />
      </Container>
    </ScrollView>
  )
}

const RecommendedVideos = ({ navigation }: any) => {

  return (
    <Container>
      <FourVideos navigation={navigation} />
      <FourVideos navigation={navigation} />
    </Container>
  )
}

const CommentSection = () => {
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

  return (
    <Container>
      <View style={{paddingVertical: 24, paddingHorizontal: 12}}>
        <FlatList
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          data={commentData}
          ListFooterComponent={<Text style={styles.subText}>人家也是有底线的啦!</Text>}
          // keyExtractor
          renderItem={({ item }) =>
            <VStack spacing={6}>
              <HStack spacing={8}>
                <Avatar label={item.userName} autoColor size={42} />
                <VStack spacing={4} ph={6} style={{ flex: 1 }}>
                  <Text style={{ color: "white" }}>{item.userName}</Text>
                  <Text style={{ color: "white" }}>{item.comment}</Text>
                </VStack>
              </HStack>
              <Divider color="gray" style={{ marginVertical: 6 }} />
            </VStack>}
        />
        <TextInput
          style={{ color: "white", backgroundColor: "#262632", position: "absolute", bottom: 0, padding: 12, width: width }}
          cursorColor={"white"}
          // value={"number"}
          placeholder="发表评论"
          placeholderTextColor="white"
          keyboardType="default" />
        <Pressable onPress={() => { Alert.alert("asd") }}>
          <Text style={{ color: "white", position: "absolute", bottom: 0, right: 0 }}>确定</Text>
        </Pressable>
      </View>
    </Container>
  )
}

const SubMenuTab = createMaterialTopTabNavigator();

const ModelVideos = (props: Props) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  function setOrientation() {
    if (Dimensions.get('window').height > Dimensions.get('window').width) {
      //Device is in portrait mode, rotate to landscape mode.
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    } else {
      //Device is in landscape mode, rotate to portrait mode.
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
  }

  return (
    <Container>
      <View style={styles.videoContent}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: "https://moctobpltc-i.akamaihd.net/hls/live/571329/eight/playlist.m3u8",
          }}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          onFullscreenUpdate={setOrientation}
        />
        {/* <View style={styles.buttons}>
          <Button
            title={status.isPlaying ? "Pause" : "Play"}
            onPress={() =>
              status.isPlaying
                ? video.current.pauseAsync()
                : video.current.playAsync()
            }
          />
        </View> */}
      </View>
      <ScrollView stickyHeaderIndices={[5]} nestedScrollEnabled={true} >
        <Text style={styles.title}>
          Components in the header need to interact with the screen component
        </Text>
        <View style={styles.watchContent}>
          <View style={styles.item}>
            <MaterialCommunityIcons
              name="play-box-outline"
              color="#999"
              size={15}
              style={styles.icon}
            />
            <Text style={styles.text}>56554 | Duration: 45:12</Text>
          </View>
          <View style={styles.item}>
            <AntDesign
              name="exclamationcircleo"
              color="#999"
              size={13}
              style={styles.icon}
            />
            <Text style={styles.text}>56554 | Duration: 45:12</Text>
          </View>
        </View>
        <View style={styles.tags}>
          <Text style={styles.tag}>Cosplay</Text>
          <Text style={styles.tag}>Nana</Text>
          <Text style={styles.tag}>Hentai</Text>
        </View>
        <View style={styles.buttonsContent}>
          <View style={styles.buttonItem}>
            <AntDesign
              name="heart"
              color="#999"
              size={15}
              style={styles.icon}
            />
            <Text style={styles.text}>314738</Text>
          </View>
          <View style={styles.buttonItem}>
            <MaterialIcons
              name="star"
              color="#999"
              size={18}
              style={styles.icon}
            />
            <Text style={styles.text}>Star</Text>
          </View>
          <View style={[styles.buttonItem, { flexDirection: "column" }]}>
            <Zocial
              name="bitcoin"
              color="#ff9900"
              size={18}
              style={styles.icon}
            />
            <Text style={[styles.text, { marginVertical: 3 }]}>29 Star</Text>
          </View>
          <View style={styles.buttonItem}>
            <MaterialCommunityIcons
              name="download"
              color="#999"
              size={18}
              style={styles.icon}
            />
            <Text style={styles.text}>Download</Text>
          </View>
          <View style={styles.buttonItem}>
            <Fontisto
              name="share-a"
              color="#999"
              size={15}
              style={styles.icon}
            />
            <Text style={styles.text}>Share</Text>
          </View>
        </View>
        <View style={styles.singleAds}>
          <Text>Single Banner GIF Ads</Text>
        </View>
        <SubMenuTab.Navigator
          style={{minHeight: 900, flex: 1}}
          initialRouteName="TA的视频"
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
              // margin: 0,
              // padding: 0,
              // width: 45,
            },
            // tabBarScrollEnabled: true,
            animationEnabled: false,
            tabBarShowLabel: true,
            lazy: true,
            swipeEnabled: true,
          }}
        >
          <SubMenuTab.Screen name="TA的视频" component={TAVideos} />
          <SubMenuTab.Screen name="更多推荐" component={RecommendedVideos} />
          <SubMenuTab.Screen name="评论" component={CommentSection} />
        </SubMenuTab.Navigator>
      </ScrollView>
    </Container>
  );
};

export default ModelVideos;

const styles = StyleSheet.create({
  videoContent: {
    height: 200,
  },
  title: {
    color: "#fff",
    fontSize: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  watchContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "#999",
    fontSize: 12,
  },
  icon: {
    marginHorizontal: 3,
  },
  tags: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  tag: {
    fontSize: 12,
    color: "#999",
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderColor: "#999",
    borderWidth: 2,
    borderRadius: 20,
    textAlign: "center",
    marginHorizontal: 3,
    marginVertical: 5,
  },
  buttonsContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 5,
  },
  buttonItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  video: {
    alignSelf: "center",
    width: width,
    height: 200,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  singleAds: {
    height: 100,
    width: "100%",
    backgroundColor: "tomato",
    alignItems: "center",
    justifyContent: "center"
  },
  tabHeader: {
    color: "white"
  },
  subText: {
    color: "#999",
    textAlign: "center",
    marginVertical: 6,
    marginBottom: 48,
  }
});
