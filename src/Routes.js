import { StackNavigator } from "react-navigation";
import { general } from "styles";

import DeckList from "./views/DeckList";
import DeckCreate from "./views/DeckCreate";
import DeckView from "./views/DeckView";
import CardCreate from "./views/DeckView/components/CardCreate";
import Quiz from "./views/Quiz";

const Routes = StackNavigator(
  {
    Main: {
      screen: DeckList
    },
    DeckCreate: {
      screen: DeckCreate
    },
    DeckView: {
      screen: DeckView
    },
    CardCreate: {
      screen: CardCreate
    },
    Quiz: {
      screen: Quiz
    },
  },
  {
    initialRouteName: "Main",
    navigationOptions: {
      headerStyle: general.headerStyle,
      headerTintColor: general.headerTintColor,
      headerTitleStyle: general.headerTitleStyle
    }
  }
);

export default Routes;
