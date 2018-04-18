import React, { Component } from "react";
import { Text, View, Animated } from "react-native";
import { Fab, Container } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Audio } from 'expo'

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

  componentWillMount() {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 1000
    }).start();
    this.playWinSound()
  }
  
  componentWillUnmount() {
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 2000
    }).start()
  }

  async playWinSound(){
    try{
      const winSound = new Audio.Sound()
      await winSound.loadAsync(require('assets/sounds/win.mp3'))
      await winSound.playAsync()
    }catch(err){
      console.log(err)
    }
  }

  retry = () => {
    
  }

  toMain = () => {
    const { navigation } = this.props
    navigation.replace('Main')
  }

  render() {
    const { fadeAnim } = this.state;
    return (
      <Container>
        <Animated.View style={{ opacity: fadeAnim }}>
          <View style={styles.container}>
            <Text style={styles.finalScoreText}>FINAL SCORE:</Text>
            <View >
              <Text style={styles.finalScore}>0/20</Text>
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
