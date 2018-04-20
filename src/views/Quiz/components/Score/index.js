import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View, Animated } from "react-native";
import { Fab, Container } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Audio } from "expo";

import { general } from "styles";
import styles from "./styles";
import BtnDefault from "components/BtnDefault";

class Score extends Component {
  constructor(props) {
    super(props);

    this.state = {
      card: {},
      revealAnswer: false,
      fadeAnim: new Animated.Value(0)
    };
  }

  static propTypes = {
    score: PropTypes.shape({
      count: PropTypes.number,
      total: PropTypes.number
    }),
    retry: PropTypes.func.isRequired,
    finished: PropTypes.bool
  };

  static defaultProps = {
    score: {
      count: 0,
      total: 0
    },
    finished: false
  };

  componentDidMount() {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 1000
    }).start();
    this.props.finished && this.playWinSound();
  }

  componentWillUnmount() {
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 2000
    }).start();
  }

  async playWinSound() {
    try {
      const winSound = new Audio.Sound();
      await winSound.loadAsync(require("assets/sounds/win.mp3"));
      await winSound.playAsync();
    } catch (err) {
      console.log(err);
    }
  }

  retry = () => {
    this.props.retry();
  };

  toMain = () => {
    const { navigation, retry } = this.props;
    retry();
    navigation.replace("Main");
  };

  render() {
    const { fadeAnim } = this.state;
    const { count, total } = this.props.score;
    return (
      <Container>
        <Animated.View style={{ opacity: fadeAnim }}>
          <View style={styles.container}>
            <Text style={styles.finalScoreText}>FINAL SCORE:</Text>
            <View>
              <Text style={styles.finalScore}>{`${count}/${total}`}</Text>
            </View>
            <View style={styles.boxControls}>
              <BtnDefault text="Retry" onPress={this.retry} />
              <BtnDefault text="Back to Main" onPress={this.toMain} />
            </View>
          </View>
        </Animated.View>
      </Container>
    );
  }
}

export default Score;
