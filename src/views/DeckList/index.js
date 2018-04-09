import React, { Component } from "react";
import { connect } from 'react-redux'
import { Entypo } from "@expo/vector-icons";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { general } from "styles";
import { Container, Header, Fab, Button, Icon } from "native-base";
import styles from "./styles";
import DeckItem from "./components/DeckItem";

class DeckList extends Component {
  constructor(props) {
    super(props);
  }
  
  // componentDidMount(){
  //   setInterval(() => {
  //     this.props.selectDeck({})
  //   },300)
  // }
  static navigationOptions = {
    title: "Home"
  };

  toDeckCreate = () => {
    this.props.navigation.navigate({ routeName: 'DeckCreate' })
  }

  toDeck = (deck) => {
    this.props.selectDeck(deck)
    this.props.navigation.navigate({ routeName: 'DeckView'})
  }

  renderListItem = ({ item }) => {
    return <TouchableOpacity onPress={() => this.toDeck(item)}><DeckItem item={item} /></TouchableOpacity>;
  };

  render() {
    const { decks } = this.props
    return (
      <Container>
        <View style={styles.container}>
          <FlatList
            data={decks}
            keyExtractor={item => String(item.id)}
            renderItem={this.renderListItem}
            initialNumToRender={1}
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

const mapStateToProps = (state) => ({
  decks: state.decks.list
})

const mapDispatchToProps = ({decks: { selectDeck }}) => ({
  selectDeck
})


export default connect(mapStateToProps, mapDispatchToProps)(DeckList);
