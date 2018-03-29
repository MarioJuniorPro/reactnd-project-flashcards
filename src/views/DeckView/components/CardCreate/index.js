import React, { Component } from "react";
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
      awnser: '',
      disableSubmit: true
    }
  }

  static navigationOptions = {
    title: "New Card"
  };

  submit = () => {
    console.tron.log(this.state.name);
  };

  disableSubmit = () => {
    const {question, awnser} = this.state
    this.setState({disableSubmit: (question.length < 1 || awnser.length < 1)})
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
                placeholder="Awnser"
                autoFocus={true}
                onChange={this.disableSubmit}
                onChangeText={(text) => this.setState({awnser:text})}
                onSubmitEditing={this.submit}
                value={this.state.awnser}
                
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

export default CardCreate;
