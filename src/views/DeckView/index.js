import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Content, Form, Item, Input } from "native-base";
import { Text, View, Button, Alert } from "react-native";
import { NavigationActions } from "react-navigation";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { navigateResetAction } from "utils/navigation";
import { select } from '@rematch/select'

import { general } from "styles";
import styles from "./styles";
import BtnDefault from "components/BtnDefault";

class DeckView extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    deck: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      cardsTotal: PropTypes.number,
      cards: PropTypes.array
    })
  };

  static navigationOptions = {
    title: "Deck"
  };

  toAddCard = () => {
    const { navigation, deck } = this.props;
    navigation.navigate("CardCreate", { deckId: deck.id});
  };

  startQuiz = () => {
    const { deck } = this.props
    this.props.startQuiz({deck})
    this.props.navigation.dispatch(navigateResetAction({routeName: "Quiz"}));
  };

  deleteDeck = () => {
    Alert.alert(
      "Delete Deck",
      "Are you sure? ",
      [
        { text: "Cancel", onPress: () => {} },
        { text: "Ok", onPress: () => {
          this.props.removeDeck(this.props.deck.id);
          this.props.navigation.popToTop();
        } }
      ],
      {
        cancelable: true
      }
    );
  };

  render() {
    const { deck } = this.props;
    return (
      <Container>
        <Content style={general.container}>
          {deck && (
            <View style={styles.container}>
              <Text style={styles.title}>{deck.title}</Text>
              <View style={styles.infoBox}>
                <Text style={styles.infoText}>
                  Total cards: {deck.cardsTotal}
                </Text>
              </View>
              <View style={styles.controls}>
                <BtnDefault
                  text="Start Quiz"
                  onPress={this.startQuiz}
                  btnStyles={styles.btn}
                  disabled={deck.cardsTotal === 0}
                />
                <BtnDefault
                  text="Add Card"
                  onPress={this.toAddCard}
                  btnStyles={styles.btn}
                />
                <BtnDefault
                  text="Delete Deck"
                  onPress={this.deleteDeck}
                  btnStyles={styles.btn}
                />
              </View>
            </View>
          )}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  deck: select.decks.selectedDeck(state)
});

const mapDispatchToProps = ({ decks, quiz }) => ({
  removeDeck: decks.removeDeck,
  startQuiz: quiz.start
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckView);
