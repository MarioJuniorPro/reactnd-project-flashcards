import React from "react";
import { StyleSheet } from "react-native";
import { general, metrics, colors } from "styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  cardCount: {
    padding: metrics.basePadding,
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.dark
  }
});

export default styles;
