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
    // marginBottom: metrics.baseMargin,
    backgroundColor: colors.primary,
    padding: metrics.basePadding * 0.8,
    width: 350, 
    height: 280
  },
  answerBox:{
    // padding: metrics.basePadding * 0.3,
  },
  boxText: {
    color: colors.white,
    fontSize: metrics.baseFontSize * 1.3,
    paddingHorizontal: 5,
    marginBottom: metrics.baseMargin,
  },
  boxControls: {
    marginTop: metrics.baseMargin,
  },
  boxLabel: {
    justifyContent: "center",
    color: colors.lighter,
    fontSize: metrics.baseFontSize * 1.5,
    paddingHorizontal: 5,
    fontWeight: "bold",
    fontStyle: "italic"

  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: metrics.baseMargin * 2,
    paddingHorizontal: metrics.basePadding *2 
  },
  btnCircle: {
    borderRadius: 40,
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  incorrectContainer: {
    backgroundColor: "#F44336",
  },
  correctContainer:{
    backgroundColor: "#4CAF50"
  },
  incorrectText:{
    color: colors.white
  },
  correctText:{
    color: colors.white
  }
});

export default styles;
