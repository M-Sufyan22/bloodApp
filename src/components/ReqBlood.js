import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Dimensions,
  Image,
} from "react-native";
import Constants from "expo-constants";
import MapView from "react-native-maps";

const { width, height } = Dimensions.get("window");

export default function ReqBlood(props) {
  return (
    <View style={styles.postWrapper}>
      <View style={styles.postTop}>
        <Image
          style={styles.userImg}
          source={{
            uri:
              "https://cdn2.iconfinder.com/data/icons/men-avatars/33/man_2-512.png",
          }}
        />

        <View style={styles.userDetail}>
          <Text style={styles.userName}>Muhammad Sufyan</Text>
          <Text style={styles.requireBlood}>
            Lookin for AB+ in{" "}
            <Text style={styles.placeName}>Jannah Hospital</Text>
          </Text>

          <Text style={styles.postTime}>about 1 hour ago</Text>
        </View>
      </View>
      <View style={styles.postBody}>
        <View style={styles.postMessage}>
          <Text>I need AB+ Blood Urgent</Text>
        </View>
        <MapView style={styles.map} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postWrapper: {
    // borderWidth: 1,
    // borderColor: "green",
    backgroundColor: "#fff",
    flex: 1,
    width: width,
    height: 300,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
    // borderRadius: 15,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.29,
    // shadowRadius: 4.65,

    // elevation: 7,
  },
  postTop: {
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    borderBottomColor: "#ebedf0",
    borderBottomWidth: 1,
    paddingVertical: 5,
  },
  userImg: {
    flex: 1,
    height: 50,
    resizeMode: "contain",
    alignSelf: "center",
    borderRadius: 50,
  },
  userDetail: {
    flex: 4,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    borderTopRightRadius: 15,
  },
  userName: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 18,
  },
  requireBlood: {
    fontSize: 14,
  },
  placeName: {
    fontSize: 14,
    color: "#000",
    fontWeight: "bold",
  },
  postTime: {
    fontSize: 13,
    color: "gray",
  },

  postBody: {
    flex: 3,
    width: "100%",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  postMessage: {
    flex: 1,
    alignContent: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  map: {
    flex: 4,
  },
});
