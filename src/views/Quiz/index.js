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
        cardsTotal: 30,
        cards:[{
          id: 0,
          question: `React Native is generate hibryd apps?`,
          answer: `Nope`
        },
        {
          id: 1,
          question: `React, Angular or Vue?`,
          answer: `React!!!!`
        },
        {
          id: 2,
          question: `Udacity, Udemy or Lymda?`,
          answer: `Udacity!`
        }]
      },
      currentCard: {
        id: 0,
        question: `First Card`,
        answer: `Yes`
      }
    };
  }

  componentWillMount() {
    // setInterval(() => {
    //   const num = Math.floor(Math.random() * 3);
    //   this.setState({
    //     currentCard: this.state.deck.cards[num]
    //   });
    // }, 10000);
  }

  static navigationOptions = {
    title: "Quiz",
    gesturesEnabled: false
  };

  render() {
    const { currentCard } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.cardCount}>0/1</Text>
        <Card card={currentCard} key={currentCard.id}/>
        {/* <Score navigation={navigation}/> */}
      </View>
    );
  }
}

export default Quiz;
