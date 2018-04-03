import React, { Component } from "react";
import { Text, View, Animated } from "react-native";
import { Fab, Container } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { general } from "styles";
import styles from "./styles";
import { If, Unless } from "components/util";
import BtnDefault from "components/BtnDefault";

class Score extends Component {
  constructor(props) {
    super(props);

    this.state = {
      card: {},
      revealAnwser: false,
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
      duration: 2000
    }).start()
  }

  static navigationOptions = {
    title: "Final Score",
    gesturesEnabled: false
  };


  render() {
    // const { card: { question, anwser } } = this.props;
    const { fadeAnim } = this.state;
    return (
      <Container>
        <Animated.View style={{ opacity: fadeAnim }}>
          <View style={styles.container}>
            <Text>Final Score:</Text>
            <View >
              <Text>0/20</Text>
            </View>  
          </View>  
        </Animated.View>
      </Container>
    );
  }
}

export default Score;
