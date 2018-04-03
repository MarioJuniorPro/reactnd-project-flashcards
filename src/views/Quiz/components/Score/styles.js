import React from "react";
import { StyleSheet } from "react-native";
import { general, metrics, colors } from "styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // paddingTop: metrics.basePadding * 5,
  },
  finalScoreText: {
    fontSize:36,
    fontWeight: 'bold',
    margin: metrics.baseMargin,
  },
  finalScore: {
    fontSize:70,
    fontWeight: 'bold',
    color: colors.primary
  },
  boxControls: {
    margin: metrics.baseMargin * 2,
    
    justifyContent: "space-between",
    height: 90,
  },
  // box: {
  //   alignItems: "center",
  //   justifyContent: "flex-start",
  //   marginBottom: metrics.baseMargin * 1,
  //   backgroundColor: colors.lighter,
  //   padding: metrics.basePadding / 2,
  //   width: 280,
  // },
  // boxText: {
  //   color: colors.primary,
  //   fontSize: metrics.baseFontSize * 1.6,
  //   paddingHorizontal: 5,
  //   fontWeight: "bold"
  // },
  // boxControls: {
  //   marginTop: metrics.baseMargin,
  // },
  // boxLabel: {
  //   color: colors.dark,
  //   fontSize: metrics.baseFontSize,
  //   paddingHorizontal: 5,
  //   fontStyle: "italic"
  // },
  // btnCorrect: {
  //   backgroundColor: "green"
  // },
  // btnIncorrect: {
  //   backgroundColor: "red"
  // }
});

export default styles;
