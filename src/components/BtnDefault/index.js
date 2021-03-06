import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity } from "react-native";

import { general } from "styles";
import styles from "./styles";

const BtnDefault = props => {
  const { btnStyles, textStyles, disabled } = props;
  return (
    <TouchableOpacity
      {...props}
      onPress={props.onPress}
      style={[disabled ? styles.disabled : styles.btnContainer,btnStyles]}
    >
      <Text style={[styles.btnText, textStyles]}>{props.text}</Text>
    </TouchableOpacity>
  );
};

BtnDefault.name = "BtnDefault";

BtnDefault.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};
export default BtnDefault;
