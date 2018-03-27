import { StackNavigator } from "react-navigation";
import { general } from "styles";

import DeckList from "./views/DeckList";
import DeckCreate from "./views/DeckCreate";
import DeckView from "./views/DeckView";

const Routes = StackNavigator(
  {
    Home: {
      screen: DeckList
    },
    DeckCreate: {
      screen: DeckCreate
    },
    DeckView: {
      screen: DeckView
    }
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      headerStyle: general.headerStyle,
      headerTintColor: general.headerTintColor,
      headerTitleStyle: general.headerTitleStyle
    },
  }
);

export default Routes;
