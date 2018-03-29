import React, { Component } from "react";
import { Fab, Container } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View, Button } from "react-native";
import { general } from "styles";
import styles from "./styles";
import { If, Unless } from "components/util";
import BtnDefault from "components/BtnDefault";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      card: {},
      revealAnwser: false
    };
  }

  componentWillMount() {
    // this.setState({ card: this.props.card || {} });
  }

  static navigationOptions = {
    title: "Quiz",
    gesturesEnabled: false
  };

  render() {
    const { revealAnwser } = this.state;
    return (
      <Container>
        <View style={styles.container}>
          <View style={[styles.box, styles.questionBox]}>
            <Text style={styles.boxLabel}>Question</Text>
            <Text style={styles.boxText}>Beibe beide do biruleibe baibe?</Text>
            <Unless test={revealAnwser}>
              <View style={styles.boxControls}>
                <BtnDefault
                  text="Reveal the anwser"
                  onPress={() => {
                    this.setState({ revealAnwser: !revealAnwser });
                  }}
                />
              </View>
            </Unless>
          </View>

          <View style={[styles.box, styles.anwserBox]}>
            <Text style={styles.boxLabel}>Anwser</Text>
            <Text style={styles.boxText}>gluglu!</Text>
          </View>
        </View>
        <If test={revealAnwser}>
          <View>
            <Fab
              position="bottomRight"
              onPress={() => {}}
              style={styles.btnCorrect}
            >
              <MaterialCommunityIcons name="thumb-up" size={32} />
            </Fab>
            <Fab
              position="bottomLeft"
              onPress={() => {}}
              style={styles.btnIncorrect}
            >
              <MaterialCommunityIcons name="thumb-down" size={32} />
            </Fab>
          </View>
        </If>
      </Container>
    );
  }
}

export default Card;
