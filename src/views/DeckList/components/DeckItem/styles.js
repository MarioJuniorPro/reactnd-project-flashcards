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
        justifyContent: "center",
        shadowColor: 'black',
        shadowOffset: {width: 2, height: 5},
        shadowOpacity: .30,
        shadowRadius: 5,
        elevation: 2
    },
    title: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: metrics.baseFontSize * 2.5,
        marginBottom: metrics.baseMargin,
        color: colors.primary
    },
    infoBox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        
    },
    infoText: {
        color: colors.dark,
        fontSize: metrics.baseFontSize * 2,
        paddingHorizontal: 5,
    },
    infoDeckIcon: {
        color: colors.dark,
        fontSize: metrics.baseFontSize * 2.2,
    }
 });

export default styles
