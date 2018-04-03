import React from "react";
import { StyleSheet } from "react-native";
import { general, metrics, colors } from "styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  box: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: metrics.baseMargin * 1,
    backgroundColor: colors.primary,
    padding: metrics.basePadding,
    width: 300, 
    height: 250
  },
  boxText: {
    color: colors.white,
    fontSize: metrics.baseFontSize * 1.6,
    paddingHorizontal: 5,
    fontWeight: "bold"
  },
  boxControls: {
    marginTop: metrics.baseMargin,
  },
  boxLabel: {
    justifyContent: "flex-start",
    color: colors.lighter,
    fontSize: metrics.baseFontSize,
    paddingHorizontal: 5,
    fontStyle: "italic"
  },
  btnCorrect: {
    backgroundColor: "green"
  },
  btnIncorrect: {
    backgroundColor: "red"
  }
});

export default styles;
