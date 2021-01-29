import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function RequestBlood(props) {
  // const propsData = props.route;
  // const { itemId, otherParam } = propsData.params;
  return (
    <View style={styles.container}>
      <Text>RequestBlood Screen</Text>
      <Button title="Go back" onPress={() => props.navigation.goBack()} />
      {/* <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
