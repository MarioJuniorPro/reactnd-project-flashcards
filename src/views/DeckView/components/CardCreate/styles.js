import React from "react";
import { StyleSheet } from "react-native";
import { general, metrics, colors } from "styles";

const styles = StyleSheet.create({
  container: {
    ...general.container
    // margin: metrics.basePadding
  },
  form: {
    backgroundColor: colors.white
  },
  controls: {}
});

export default styles;
