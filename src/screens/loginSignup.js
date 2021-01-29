import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { StyleSheet, Text, View, Button } from "react-native";

// export default function LoginSignup(props) {
//   // const propsData = props.route;
//   // const { itemId, otherParam } = propsData.params;
//   return (
//     <View style={styles.container}>
//       {/* <Text>LoginSignup Screen</Text> */}
//       {/* <Button title="Go back" onPress={() => props.navigation.goBack()} /> */}
//       {/* <Text>itemId: {JSON.stringify(itemId)}</Text>
//       <Text>otherParam: {JSON.stringify(otherParam)}</Text> */}

//       <StatusBar style="auto" />
//     </View>
//   );
// }

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Image,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";

// import firebase from "../config/firebase";
import * as Facebook from "expo-facebook";
// import * as Google from "expo-google-app-auth";
import { connect } from "react-redux";
import { saveCurrentUser } from "../store/action/action";

function LoginSignup(props) {
  const [user, setUser] = useState();

  useEffect(() => {
    if (user !== undefined && user !== null) {
      () => props.saveCurrentUser(user);
    }
  }, []);

  const loginWithGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "19661093153-51k6ffaj6vso0i638gg2k0spr3m33s97.apps.googleusercontent.com",
        iosClientId:
          "19661093153-oh7t2nuko4dp8cmkl9thmdusd8op0lce.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  };

  // function storeHighScore(userId, score) {
  //   firebase
  //     .database()
  //     .ref("users/" + userId)
  //     .set({
  //       highscore: score,
  //     });
  // }
  // setupHighscoreListener();
  // function setupHighscoreListener() {
  //   firebase
  //     .database()
  //     .ref("users")
  //     .on("value", (snapshot) => {
  //       console.log(snapshot.val()[1]);
  //       // const highscore = snapshot.val().highscore;
  //       // console.log("New high score: " + highscore);
  //     });
  // }

  // const loginWithFb = () => {
  //   console.log("login with facebook");
  // };
  async function loginWithFb() {
    try {
      await Facebook.initializeAsync({
        appId: "328337495107644",
      });
      const {
        type,
        token,
        expirationDate,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile"],
      });
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture.type(large)`
        );

        const user = await response.json();
        setUser(user);
        () => props.saveCurrentUser(user);

        Alert.alert("Logged in!", `Hi ${user.name}!`);
      } else {
        Alert.alert("Logged in Faild!!", "Some  error accured");
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }
  // console.log(user);
  // console.log(props.currentUser);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>
          <Image
            source={require("../../assets/icon.png")}
            style={styles.logo}
          ></Image>
          Donrr
        </Text>
      </View>
      <View style={styles.body}>
        <ImageBackground
          source={require("../../assets/images/image1.jpg")}
          style={styles.image}
        >
          {/* <TouchableOpacity
            onPress={loginWithGoogle}
            activeOpacity={0.7}
            style={{ ...styles.loginBtn, backgroundColor: "#fff" }}
          >
            <Text style={{ color: "#000", fontWeight: "bold" }}>
              Login with
              <Text style={{ color: "#4285F4" }}> G</Text>
              <Text style={{ color: "#DB4437" }}>o</Text>
              <Text style={{ color: "#F4B400" }}>o</Text>
              <Text style={{ color: "#4285F4" }}>g</Text>
              <Text style={{ color: "#0F9D58" }}>l</Text>
              <Text style={{ color: "#DB4437" }}>e</Text>
            </Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            onPress={loginWithFb}
            style={{ ...styles.loginBtn, backgroundColor: "#3b5998" }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
              Login with Facebook
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
      {/* <View style={styles.footer}>
      <Text style={styles.footerText}>Developed by Muhammad Sufiyan</Text> 
      </View> */}
    </SafeAreaView>
  );
}

// function mapStateToProps(state) {
//   return {
//     users: state.users,
//     products: state.products,
//     currentUser: state.currentUser,
//   };
// }

// const mapDispatchToProps = (dispatch) => ({
//   AddNewUser: () => dispatch(AddNewUser()),
//   saveCurrentUser: (user) => dispatch(saveCurrentUser(user)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

const mapDispatchToProps = (dispatch) => ({
  saveCurrentUser: (user) => dispatch(saveCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginSignup);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    width: "100%",
    flex: 0.7,
    backgroundColor: "#cc1f0c",
    alignContent: "center",
    justifyContent: "center",
  },
  heading: {
    textAlign: "center",
    color: "#fff",
    fontSize: 35,
    fontWeight: "bold",
    letterSpacing: 5,
  },
  logo: {
    width: 35,
    height: 35,
  },
  body: {
    flex: 6,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 0.5,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  loginBtn: {
    width: "80%",
    marginTop: 5,
    marginBottom: 2,
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: "center",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  footerText: {
    color: "#fff",
    textAlign: "center",
  },
  image: {
    width: "100%",
    alignItems: "center",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
