import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Dimensions,
  FlatList,
  ScrollView,
} from "react-native";
import ReqBlood from "../components/ReqBlood";
import Carousel from "../components/Carousel";
import Constants from "expo-constants";

const { width, height } = Dimensions.get("window");

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

export default function Home(props) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Carousel />
        <View style={styles.section}>
          <FlatList
            style={styles.faltList}
            data={DATA}
            showsHorizontalScrollIndicator={false}
            renderItem={({ DATA }) => {
              return <ReqBlood item={DATA} />;
            }}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  section: {
    flex: 1,
    width: width,
  },
  faltList: {
    flex: 1,
    width: width,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: "#f2f3f5",
  },
});
