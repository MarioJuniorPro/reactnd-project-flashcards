import { StackNavigator } from "react-navigation";

import DeckList from "./views/DeckList";

const Routes = StackNavigator(
  {
    Home: {
      screen: DeckList
    }
    // CreateDeck: {
    //   screen: DeckCreateView
    // }
  },
  {
    initialRoute: "Home"
  }
);

export default Routes;
