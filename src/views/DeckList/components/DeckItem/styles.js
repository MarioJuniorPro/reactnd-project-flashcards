import React from "react";
import { StyleSheet } from "react-native";
import { general, metrics } from "styles";

const styles = StyleSheet.create({
    container: {
        ...general.box,
        marginHorizontal: metrics.basePadding,
        marginTop: metrics.baseMargin,
    },
    title: {
        fontWeight: 'bold',
        fontSize: metrics.baseFontSize * 1.5,
    }
 });

export default styles
