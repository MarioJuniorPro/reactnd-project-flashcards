import React from "react";
import { StyleSheet } from "react-native";
import { general, metrics, colors } from "styles";

const styles = StyleSheet.create({
    container: {
        ...general.box,
        marginHorizontal: metrics.basePadding,
        marginTop: metrics.baseMargin,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    
 });

export default styles
