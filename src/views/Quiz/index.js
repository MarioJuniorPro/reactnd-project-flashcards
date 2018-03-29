import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import styles from "./styles";
import Card from './components/Card'

import BtnDefault from "components/BtnDefault";

class Quiz extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   deck: {
    //     title: "Deck 001",
    //     cardsTotal: 30
    //   }
    // };
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
        <Text>0/1</Text>
        <Card />
      </View>
    );
  }
}

export default Quiz;
