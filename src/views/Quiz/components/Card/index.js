import React, { Component } from "react";
import { Text, View, Animated } from "react-native";
import { Fab, Container } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { general } from "styles";
import styles from "./styles";
import { If, Unless } from "components/util";
import BtnDefault from "components/BtnDefault";
import * as Animatable from "react-native-animatable";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      card: {},
      flipped: false,
      fadeAnim: new Animated.Value(0)
    };
  }

  componentWillMount() {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 1000
    }).start();
  }

  componentWillUnmount() {
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 500
    }).start();
  }

  flip = () => {
    this.setState({ flipped: true });
    setTimeout(() => {
      this.anwserBoxRef.flipInY(1000);
    }, 0);
  };

  static navigationOptions = {
    title: "Quiz",
    gesturesEnabled: false
  };

  __nextCard = () => {};

  render() {
    const { card: { question, anwser } } = this.props;
    const { flipped, fadeAnim } = this.state;
    return (
      <Container>
        <Animated.View style={{ opacity: fadeAnim }}>
          <View style={styles.container}>
            <Unless test={flipped}>
              <View style={[styles.box, styles.questionBox]}>
                <Text style={styles.boxLabel}>Question</Text>
                <Text style={styles.boxText}>{question}</Text>
              </View>

              <View style={styles.boxControls}>
                <BtnDefault text="Reveal!" onPress={this.flip} />
              </View>
            </Unless>
            {/* <If test={flipped}> */}
              <Animatable.View
                ref={ref => (this.anwserBoxRef = ref)}
                style={[styles.box, styles.anwserBox, {opacity: 0}]}
              >
                <Text style={styles.boxLabel}>Anwser</Text>
                <Text style={styles.boxText}>{anwser}</Text>
              </Animatable.View>
            {/* </If> */}
          </View>
          <If test={flipped}>
            <View>
              <Fab
                position="bottomRight"
                onPress={this.__nextCard}
                style={styles.btnCorrect}
              >
                <MaterialCommunityIcons name="thumb-up" size={32} />
              </Fab>
              <Fab
                position="bottomLeft"
                onPress={this.__nextCard}
                style={styles.btnIncorrect}
              >
                <MaterialCommunityIcons name="thumb-down" size={32} />
              </Fab>
            </View>
          </If>
        </Animated.View>
      </Container>
    );
  }
}

export default Card;
