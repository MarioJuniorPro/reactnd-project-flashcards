import React, { Component } from "react";
import uuid from 'uuid/v4'

import { Text, View } from "react-native";
import { connect } from "react-redux";
import { Entypo } from "@expo/vector-icons";

import { navigateResetAction } from 'utils/navigation'
import { general } from "styles";
import styles from "./styles";
import { Container, Button, Content, Form, Item, Input } from "native-base";

class DeckCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      disableSubmit: true
    };
  }

  static navigationOptions = {
    title: "Create Deck"
  };

  submit = () => {
    const newDeck = {
      title: this.state.title.trim(),
      id: uuid(),
      cardsTotal: 0,
      cards: []
    };
    this.props.addDeck(newDeck);
    this.setState({ disableSubmit: true });

    this.props.navigation.dispatch(navigateResetAction('Main'));
  };

  disableSubmit = () => {
    this.setState({ disableSubmit: this.state.title.length < 1 });
  };

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <Form style={styles.form}>
            <Item last>
              <Input
                placeholder="Deck title"
                autoFocus={true}
                onChange={this.disableSubmit}
                onChangeText={title => this.setState({ title: title })}
                onSubmitEditing={this.submit}
                value={this.state.title}
                style={general.input}
                maxLength={15}
              />
            </Item>

            <Button
              full
              style={general.buttonPrimary}
              onPress={this.submit}
              disabled={this.state.disableSubmit}
            >
              <Text style={general.buttonTextPrimary}>Create</Text>
            </Button>
          </Form>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = ({ decks: { addDeck } }) => ({
  addDeck
});

export default connect(null, mapDispatchToProps)(DeckCreate);
