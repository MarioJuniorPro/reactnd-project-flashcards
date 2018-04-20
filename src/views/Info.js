import React, { Component } from "react";
import { Text, View, StyleSheet, Linking } from "react-native";

const GITHUB_LINK = "https://github.com/MarioJuniorPro";

const NANODEGREE_LINK = "https://br.udacity.com/course/react-nanodegree--nd019";

export default props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flash Cards</Text>
      <Text style={styles.text}>
        This is the third project of 
        <Text
          style={styles.link}
          onPress={() => Linking.openURL(NANODEGREE_LINK)}
          textDecorationLine="underline"
        >
          Udacity React Developer Nanodegree
        </Text>.
      </Text>
      <Text style={styles.by}>
        Coded by{" "}
        <Text
          style={styles.link}
          onPress={() => Linking.openURL(GITHUB_LINK)}
          textDecorationLine="underline"
        >
          Mario Costa Junior
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 20
  },
  text: { fontSize: 20, marginBottom: 20 },
  by: { fontSize: 24 },
  link: {
    color: "#2196F3",
    textDecorationLine: "underline"
  }
});
