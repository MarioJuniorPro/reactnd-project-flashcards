import React, { Component } from "react";
import { Container, Content, Form, Item, Input } from "native-base";
import { Text, View, Button } from "react-native";
import { NavigationActions } from 'react-navigation';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { general } from "styles";
import styles from "./styles";
import BtnDefault from 'components/BtnDefault'

class DeckView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deck: {
        title: 'Deck 001',
        cardsTotal: 30
      }
    };
  }

  componentWillMount() {
    const { deck } = this.props.navigation.state.params;
    this.setState({ deck });
  }

  static navigationOptions = {
    title: "Deck"
  };

  toAddCard = () => {
    const { navigation } = this.props;
    navigation.navigate('CardCreate', {})
  }

  startQuiz = () => {
    // const { navigation } = this.props;
    // navigation.navigate('Quiz', {})
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Quiz' }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
    
  }

  render() {
    const { deck } = this.state;
    return (
      <Container>
        <Content style={general.container}>
          {deck && (
            <View style={styles.container}>
              <Text style={styles.title}>{deck.title}</Text>
              <View style={styles.infoBox}>
                <Text style={styles.infoText}>Total cards: {deck.cardsTotal}</Text>
              </View>
              <View style={styles.controls}>
                <BtnDefault text="Add Card" onPress={this.toAddCard} />
                <BtnDefault text="Start Quiz" onPress={this.startQuiz} />
              </View>
            </View>
          )}
        </Content>
      </Container>
    );
  }
}

export default DeckView;
