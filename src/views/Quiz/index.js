import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { connect } from "react-redux";
import { select } from "@rematch/select";
import styles from "./styles";
import Card from "./components/Card";
import Score from "./components/Score";
import BtnDefault from "components/BtnDefault";
import { If, Unless } from "components/util";


class Quiz extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "Quiz",
    gesturesEnabled: false
  };

  render() {
    const {
      navigation,
      currentCard,
      cardPosition,
      deckSize,
      answer,
      finished,
      correctAnswers,
      retry
    } = this.props;
    return (
      <View style={styles.container}>
        <Unless test={finished}>
          <Text style={styles.cardCount}>{`${cardPosition}/${deckSize}`}</Text>
          <Card card={currentCard} key={currentCard.id} answer={answer} />
        </Unless>
        <If test={finished}>
          <Score
            navigation={navigation}
            score={{ count: correctAnswers, total: deckSize }}
            retry={retry}
            finished={finished}
          />
        </If>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  deckSize: state.quiz.size,
  correctAnswers: state.quiz.correctAnswers,
  cardPosition: select.quiz.cardPosition(state),
  currentCard: select.quiz.currentCard(state),
  finished: select.quiz.finished(state)
});

const mapDispatchToProps = ({ quiz: { answer, retry } }) => ({
  answer,
  retry
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
