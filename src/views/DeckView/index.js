import React, { Component } from "react";
import { Container, Content, Form, Item, Input } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View, Button } from "react-native";
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
    // const { deck } = this.props.navigation.state.params;
    // this.setState({ deck });
    // console.tron.log(deck);
  }

  static navigationOptions = {
    title: "Deck"
  };

  toAddQuestion = () => {

  }

  startQuiz = () => {

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
                <MaterialCommunityIcons
                  name="cards-outline"
                  style={styles.infoDeckIcon}
                />
                <Text style={styles.infoText}>{deck.cardsTotal}</Text>
              </View>
              {/* <Button title="Add question" onPress={this.toAddQuestion} />
              <Button title="Start quiz" onPress={this.startQuiz} /> */}
              <View style={styles.controls}>
                <BtnDefault text="Add question" onPress={this.toAddQuestion} />
                <BtnDefault text="Start quiz" onPress={this.startQuiz} />
              </View>
            </View>
          )}
        </Content>
      </Container>
    );
  }
}

export default DeckView;
