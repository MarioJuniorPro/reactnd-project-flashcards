import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { general } from '../../styles'

const decks = [
  { title: 'Deck 1', cardsTotal: 20 },
  { title: 'Deck 2', cardsTotal: 20 },
  { title: 'Deck 3', cardsTotal: 9 },
  { title: 'Deck 4', cardsTotal: 2 },
  { title: 'Deck 5', cardsTotal: 30 }
]

const styles = StyleSheet.create({
  deckList: {
    flex: 1
  },
  deck: {
    flex: 1
  }
})

class DeckList extends Component {
  constructor(props){
    super(props)
  }

  static navigationOptions = {
    title: 'Home',
  }

  render(){
    return (
      <View style={[general.container, styles.deckList]}>
        {decks.map(deck => (
          <View key={deck.title} style={[general.box, styles.deck]}>
            <Text>{deck.title}</Text>
          </View>
        ))}
      </View>
    );
  }
};

export default DeckList