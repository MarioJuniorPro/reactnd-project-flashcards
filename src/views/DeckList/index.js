import React, { Component } from "react";
import { connect } from "react-redux";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { general } from "styles";
import { Container, Header, Fab, Button, Icon } from "native-base";
import { select } from "@rematch/select";
import styles from "./styles";
import DeckItem from "./components/DeckItem";

class DeckList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.navigation.setParams({ toInfo: this.toInfo })
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state

    return {
      title: "Udacity Flash Cards",
      headerRight: (
        <TouchableOpacity
          onPress={() => params.toInfo()}
          style={general.headerRight}
        >
          <MaterialCommunityIcons name="information" color="white" size={30} />
        </TouchableOpacity>
      )
    };
  };

  toInfo = () => {
    this.props.navigation.navigate({ routeName: "Info" });
  };

  toDeckCreate = () => {
    this.props.navigation.navigate({ routeName: "DeckCreate" });
  };

  toDeck = deck => {
    this.props.selectDeck(deck.id);
    this.props.navigation.navigate({ routeName: "DeckView" });
  };

  renderListItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => this.toDeck(item)}>
        <DeckItem item={item} />
      </TouchableOpacity>
    );
  };

  render() {
    const { decks } = this.props;
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
          style={styles.addDeckFAB}
        >
          <MaterialCommunityIcons name="plus" />
        </Fab>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  decks: select.decks.deckList(state)
});

const mapDispatchToProps = ({ decks: { selectDeck } }) => ({
  selectDeck
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);
