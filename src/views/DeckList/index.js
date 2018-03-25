import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { general } from "styles";
import styles from "./styles";

import DeckItem from './components/DeckItem'

const decks = Array.from(new Array(20)).map((n, i) => ({ id: 5, title: `Deck ${i}`, cardsTotal: i * 20 }))

class DeckList extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "Home"
  };

  renderListItem = ({ item }) => {
    return <DeckItem item={item} />
  }
  
  render() {
    return (
      <View style={ general.container }>
        <FlatList
          data={decks}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderListItem}
          initialNumToRender={4}
        />
      </View>
    );
  }
}

export default DeckList;
