import React, { Component } from "react";
import { Container, Content, Form, Item, Input } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View, Button } from "react-native";
import { general } from "styles";
import styles from "./styles";

import BtnDefault from "components/BtnDefault";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deck: {
        title: "Deck 001",
        cardsTotal: 30
      }
    };
  }

  componentWillMount() {}

  static navigationOptions = {
    title: "Quiz",
    gesturesEnabled: false,
  };

  render() {
    // const { deck } = this.state;
    return (
        <View style={styles.container}>
          <View style={[styles.box, styles.questionBox]}>
            <Text style={styles.boxLabel}>Question</Text>
            <Text style={styles.boxText}>Beibe beide do biruleibe baibe?</Text>
          </View>

          <View style={[styles.box, styles.anwserBox]}>
            <Text style={styles.boxLabel}>Anwser</Text>
            <Text style={styles.boxText}>gluglu!</Text>
          </View>
        </View>
    );
  }
}

export default Card;
