import React from "react";
import { StackNavigator } from "react-navigation";
import { Provider } from "react-redux";

import "./src/config/ReactotronConfig";
import { store } from "store";
import Routes from "./src/Routes";
console.tron.log('start')

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
