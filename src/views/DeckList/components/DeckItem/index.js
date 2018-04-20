import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { general, colors } from "styles";
import styles from "./styles";

class DeckItem extends PureComponent {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    item: PropTypes.shape({
      title: PropTypes.string,
      cardsTotal: PropTypes.number
    })
  };

  static defaultProps = {
    item: {}
  };

  render() {
    const { item } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.infoBox}>
          <MaterialCommunityIcons name="cards-outline" style={styles.infoDeckIcon} />
          <Text style={styles.infoText}>{item.cardsTotal}</Text>
        </View>
      </View>
      
    );
  }
}

export default DeckItem;
