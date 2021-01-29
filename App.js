import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Navigation from "./src/config/Navigation";
import LoginSignup from "./src/screens/loginSignup";
import store from "./src/store";
import { Provider } from "react-redux";

export default function App() {
  const [userIsLogin, setUserIsLogin] = useState(true);

  return (
    <Provider store={store}>
      {userIsLogin ? <Navigation /> : <LoginSignup />}
    </Provider>
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
