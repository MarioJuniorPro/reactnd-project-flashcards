import React, { Component } from "react";
import { Entypo } from "@expo/vector-icons";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { general } from "styles";
import { Container, Header, Fab, Button, Icon } from "native-base";
import styles from "./styles";
import DeckItem from "./components/DeckItem";

const decks = Array.from(new Array(20)).map((n, i) => ({
  id: i,
  title: `Deck ${i}`,
  cardsTotal: i * 20
}));

class DeckList extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "Home"
  };

  toDeckCreate = () => {
    console.tron.log('nav')
    this.props.navigation.navigate({ routeName: 'DeckCreate' })
  }

  toDeck = (deck) => {
    this.props.navigation.navigate({ routeName: 'DeckView', params: { deck }})
  }

  renderListItem = ({ item }) => {
    return <TouchableOpacity onPress={() => this.toDeck(item)}><DeckItem item={item} /></TouchableOpacity>;
  };

  render() {
    return (
      <Container>
        <View style={general.container}>
          <FlatList
            data={decks}
            keyExtractor={item => String(item.id)}
            renderItem={this.renderListItem}
            initialNumToRender={4}
          />
        </View>
        <Fab
          position="bottomRight"
          onPress={this.toDeckCreate}
          style={ styles.addDeckFAB }
        >
          <Entypo name="plus" />
        </Fab>
      </Container>
    );
  }
}

export default DeckList;
