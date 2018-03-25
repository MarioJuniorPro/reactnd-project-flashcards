import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import { general, colors } from "styles";
import styles from "./styles";

class DeckItem extends PureComponent {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    // prop: PropTypes
  };

  static defaultProps = {
    item: {}
  };

  render() {
    const { item } = this.props;
    return (
      <View key={item.title} style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  }
}

export default DeckItem;
