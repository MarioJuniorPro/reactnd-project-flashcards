import React from "react";
import { StyleSheet } from "react-native";
import { general, metrics, colors } from "styles";

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: colors.primary,
    padding: 10,
    alignItems: 'center',
    justifyContent: "center",
  },
  btnText: {
    color: colors.white,
    fontWeight: 'bold',
  },
  disabled: {
    backgroundColor: colors.regular,
    padding: 10,
    alignItems: 'center',
    justifyContent: "center",
  }
});

export default styles;
