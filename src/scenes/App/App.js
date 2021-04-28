import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { Touchable } from "../../components";

function App() {
  const handlePress = () => {
    console.log("here");
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/react-native-web.png")}
        style={styles.logo}
      />
      <Touchable onPress={handlePress} style={styles.touchable}>
        <Text style={styles.welcome}>
          Welcome to React Native for Web Starter!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.web.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{"\n"}
          Alt+Cmd+I for dev menu
        </Text>
      </Touchable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  logo: {
    alignSelf: "center",
    marginBottom: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
  touchable: {
    backgroundColor: "#CAE6FE",
  },
});

export default App;
