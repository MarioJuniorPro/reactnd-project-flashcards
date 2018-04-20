import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Text,
  View,
  Animated,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Container } from 'native-base'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { general, colors } from "styles";
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

  static propTypes = {
    answer: PropTypes.func
  };

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
      this.answerBoxRef.flipInY(1000);
    }, 0);
  };

  static navigationOptions = {
    title: "Quiz",
    gesturesEnabled: false
  };

  answerCorrect = () => {
    this.props.answer(true);
  };

  answerIncorrect = () => {
    this.props.answer(false);
  };

  render() {
    const {
      card: { question, answer }
    } = this.props;
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
            <Animatable.View
              ref={ref => (this.answerBoxRef = ref)}
              style={[styles.box, styles.answerBox, { opacity: 0 }]}
            >
              <View style={[styles.box, styles.answerBox]}>
                <Text style={styles.boxLabel}>Answer</Text>
                <Text style={styles.boxText}>{answer}</Text>
              </View>
            </Animatable.View>
          </View>
          <If test={flipped}>
            <View style={styles.controls}>
              <TouchableOpacity onPress={this.answerIncorrect}>
                <View style={[styles.btnCircle, styles.incorrectContainer]}>
                  <MaterialCommunityIcons
                    name="thumb-down"
                    size={32}
                    color={colors.white}
                  />
                  <Text style={styles.incorrectText}>Incorrect</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.answerCorrect}>
                <View style={[styles.btnCircle, styles.correctContainer]}>
                  <MaterialCommunityIcons
                    name="thumb-up"
                    size={32}
                    color={colors.white}
                  />
                  <Text style={styles.correctText}>Correct</Text>
                </View>
              </TouchableOpacity>
            </View>
          </If>
        </Animated.View>
      </Container>
    );
  }
}

export default Card;
