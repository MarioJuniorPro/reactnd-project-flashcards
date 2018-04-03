import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import styles from "./styles";
import Card from "./components/Card";
import Score from "./components/Score";

import BtnDefault from "components/BtnDefault";

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deck: {
        title: "Deck 001",
        cardsTotal: 30
      },
      currentCard: {
        id: 0,
        question: `BLa bla`,
        anwser: `ble vlwlwllw`
      }
    };
  }

  componentWillMount() {
    setInterval(() => {
      const num = Math.random();
      this.setState({
        currentCard: {
          id: num,
          question: `BLa bla ${num}`,
          anwser: `ble vlwlwllw  ${num}`
        }
      });
    }, 16000);
  }

  static navigationOptions = {
    title: "Quiz",
    gesturesEnabled: false
  };

  render() {
    const { currentCard } = this.state;
    return (
      <View style={styles.container}>
        <Text>0/1</Text>
        <Card card={currentCard} key={currentCard.id}/>
        {/* <Score /> */}
      </View>
    );
  }
}

export default Quiz;
