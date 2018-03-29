import React from "react";
import { StackNavigator } from "react-navigation";
import Expo from "expo";

import "./src/config/ReactotronConfig";

import Routes from "./src/Routes";

export default class App extends React.Component {
  render() {
    return (
      <Routes />
    );
  }
}
