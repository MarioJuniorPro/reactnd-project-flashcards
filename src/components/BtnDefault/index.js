import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity } from "react-native";
import { general } from "styles";
import styles from "./styles";

const BtnDefault = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      {...props}
      style={styles.btnContainer}
    >
      
        <Text style={styles.btnText}>{props.text}</Text>
      
    </TouchableOpacity>
  );
};

BtnDefault.name = "BtnDefault";

BtnDefault.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};
export default BtnDefault;
