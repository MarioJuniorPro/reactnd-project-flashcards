import React, { Component } from "react";
import { Entypo } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { general } from "styles";
import styles from "./styles";
import { Container, Button, Content, Form, Item, Input } from "native-base";

class DeckCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      disableSubmit: true
    }
  }

  static navigationOptions = {
    title: "Create Deck"
  };

  submit = () => {
    console.tron.log(this.state.name);
  };

  disableSubmit = () => {
    this.setState({disableSubmit: (this.state.name.length < 1)})
  }

  render() {
    return (
      <Container style={general.container}>
        <Content>
          <Form>
            <Item last>
              <Input
                placeholder="Deck name"
                autoFocus={true}
                onChange={this.disableSubmit}
                onChangeText={(text) => this.setState({name:text})}
                onSubmitEditing={this.submit}
                value={this.state.name}
                style={general.input}
              />
            </Item>

            <Button full style={general.buttonPrimary} onPress={this.submit} disabled={this.state.disableSubmit}>
              <Text style={general.buttonTextPrimary}>Create</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default DeckCreate;
