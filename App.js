import React from "react";
import "./src/config/ReactotronConfig";
import { StackNavigator } from "react-navigation";
import { Provider } from "react-redux";

import { store } from "store";
import Routes from "./src/Routes";

import { localNotification } from 'utils'

export default class App extends React.Component {
  componentDidMount(){
    localNotification.setLocalNotification()
  }
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
