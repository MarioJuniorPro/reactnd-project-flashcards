import React, { Component } from "react";
import { connect } from 'react-redux'
import { dispatch } from '@rematch/core'
import { Entypo } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { general } from "styles";
import styles from "./styles";
import { Container, Button, Content, Form, Item, Input } from "native-base";

class CardCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: '',
      disableSubmit: true
    }
  }

  static navigationOptions = {
    title: "New Card"
  };

  submit = () => {
    const { deckId } = this.props.navigation.state.params
    const {question, answer} = this.state

    const newCard = {
      id: "1",
      question: question.trim(),
      answer: answer.trim(),
      deckId
    }

    this.props.addCard(newCard)
    this.props.navigation.goBack()
  };
  
  disableSubmit = () => {
    const {question, answer} = this.state
    this.setState({disableSubmit: (question.length < 1 || answer.length < 1)})
  }

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <Form style={styles.form}>
            <Item>
              <Input
                placeholder="Question"
                autoFocus={true}
                onChange={this.disableSubmit}
                onChangeText={(text) => this.setState({question:text})}
                onSubmitEditing={this.submit}
                value={this.state.question}
              />
            </Item>
            <Item last>
              <Input
                placeholder="Answer"
                onChange={this.disableSubmit}
                onChangeText={(text) => this.setState({answer:text})}
                onSubmitEditing={this.submit}
                value={this.state.answer}
                
              />
            </Item>
            <View style={styles.controls}>
              <Button full style={general.buttonPrimary} onPress={this.submit} disabled={this.state.disableSubmit}>
                <Text style={general.buttonTextPrimary}>Add Card</Text>
              </Button>
            </View>
          </Form>
        </View>
      </Container>
    );
  }
}

const mapDispatch  = ({ decks: {addCard}}) => ({
  addCard
})


export default connect(null, mapDispatch)(CardCreate);
