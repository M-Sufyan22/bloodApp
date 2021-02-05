import React, { useState, useEffect } from "react";
import { StyleSheet, Platform, StatusBar, View } from "react-native";
import Navigation from "./src/config/Navigation";
import LoginSignup from "./src/screens/loginSignup";
import store from "./src/store";
import { Provider } from "react-redux";
import firebase from "./src/config/firebase";

export default function App() {
  const [userIsLogin, setUserIsLogin] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log(user.email);
        setUserIsLogin(true);
      } else {
        console.log("no user found");
        setUserIsLogin(false);
      }
    });
  }, []);
  return (
    <Provider store={store}>
      <View style={styles.container}>
        {userIsLogin ? <Navigation /> : <LoginSignup />}
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

// import React, { useState, useEffect } from "react";
// import Navigation from "./src/config/Navigation";
// import LoginSignup from "./src/screens/loginSignup";
// import store from "./src/store";
// import { Provider } from "react-redux";
// import firebase from "./src/config/firebase";
// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   Platform,
//   Image,
//   TouchableOpacity,
//   ImageBackground,
//   Alert,
//   TextInput,
//   Dimensions,
//   Button,
// } from "react-native";

// const { width, height } = Dimensions.get("window");

// export default function App() {
//   const [signupDetails, setSignupDetails] = useState({
//     email: "",
//     password: "",
//   });
//   const [loginDetails, setLoginDetails] = useState({
//     email: "",
//     password: "",
//   });
//   useEffect(() => {
//     firebase.auth().onAuthStateChanged(function (user) {
//       if (user) {
//         console.log(user.email);
//       } else {
//         console.log("no user found");
//       }
//     });
//   });

//   function signup() {
//     // console.log(signupDetails.email, signupDetails.password);
//     firebase
//       .auth()
//       .createUserWithEmailAndPassword(
//         signupDetails.email,
//         signupDetails.password
//       )
//       .then((userCredential) => {
//         // Signed in
//         var user = userCredential.user;
//         // console.log(user);
//         // ...
//       })
//       .catch((error) => {
//         // var errorCode = error.code;
//         var errorMessage = error.message;
//         console.log(errorMessage);
//         // ..
//       });
//   }

//   function login() {
//     // console.log(loginDetails.email, loginDetails.password);
//     firebase
//       .auth()
//       .signInWithEmailAndPassword(loginDetails.email, loginDetails.password)
//       .then(function (result) {
//         console.log("yes user is logged in ", result);
//       })
//       .catch(function (error) {
//         var errorMessage = error.message;
//         console.log(errorMessage);
//       });
//   }

//   function signOut() {
//     firebase
//       .auth()
//       .signOut()
//       .then(() => {
//         // Sign-out successful.
//         console.log("sign out successfully");
//       })
//       .catch((error) => {
//         console.log("sign out failed!");
//       });
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.formGroup}>
//         <View style={styles.formField}>
//           <Text style={styles.label}>Email Address</Text>
//           <TextInput
//             style={styles.formInput}
//             placeholder="Enail"
//             onChangeText={(email) =>
//               setLoginDetails({ ...loginDetails, email: email })
//             }
//           />
//         </View>
//         <View style={styles.formField}>
//           <Text style={styles.label}>Password</Text>
//           <TextInput
//             style={styles.formInput}
//             placeholder="Phone"
//             onChangeText={(password) =>
//               setLoginDetails({ ...loginDetails, password: password })
//             }
//           />
//         </View>
//         <View style={styles.formField}>
//           <TouchableOpacity
//             onPress={login}
//             style={{
//               backgroundColor: "#fff",
//               width: 80,
//             }}
//           >
//             <Text
//               style={{
//                 textAlign: "center",
//                 paddingVertical: 8,
//                 fontWeight: "bold",
//               }}
//             >
//               Login
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={signOut}
//             style={{
//               backgroundColor: "#fff",
//               width: 80,
//             }}
//           >
//             <Text
//               style={{
//                 textAlign: "center",
//                 paddingVertical: 8,
//                 fontWeight: "bold",
//               }}
//             >
//               Signout
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//       <Text>Welcome </Text>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   header: {
//     width: "100%",
//     flex: 0.7,
//     backgroundColor: "#cc1f0c",
//     alignContent: "center",
//     justifyContent: "center",
//   },
//   heading: {
//     textAlign: "center",
//     color: "#fff",
//     fontSize: 35,
//     fontWeight: "bold",
//     letterSpacing: 5,
//   },
//   logo: {
//     width: 35,
//     height: 35,
//   },
//   body: {
//     flex: 6,
//     backgroundColor: "#fff",
//     justifyContent: "center",
//     alignContent: "center",
//     alignItems: "center",
//   },
//   footer: {
//     flex: 0.5,
//     backgroundColor: "#000",
//     alignItems: "center",
//     justifyContent: "center",
//     alignContent: "center",
//   },
//   loginBtn: {
//     width: "80%",
//     marginTop: 5,
//     marginBottom: 2,
//     paddingTop: 20,
//     paddingBottom: 20,
//     alignItems: "center",
//     borderRadius: 5,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 12,
//     },
//     shadowOpacity: 0.58,
//     shadowRadius: 16.0,

//     elevation: 24,
//   },
//   footerText: {
//     color: "#fff",
//     textAlign: "center",
//   },
//   image: {
//     width: "100%",
//     alignItems: "center",
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "center",
//   },
//   formGroup: {
//     width: width - 25,
//     paddingHorizontal: 8,
//     paddingVertical: 10,
//     alignContent: "center",
//     alignItems: "center",
//     backgroundColor: "#cc1f50",
//     borderRadius: 5,
//   },
//   formField: {
//     marginVertical: 5,
//     alignContent: "center",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   label: { width: width - 55, marginVertical: 5, color: "#fff" },
//   formInput: {
//     backgroundColor: "#fff",
//     color: "#000",
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//     width: width - 55,
//     borderRadius: 3,
//   },
// });
