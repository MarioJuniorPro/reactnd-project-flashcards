import { init } from "@rematch/core";
import storage from "utils/storage";

import * as models from "./models";
import selectors from "@rematch/select";
import persistStore from "./plugins/persistiStore";

export const store = init({
  plugins: [persistStore(), selectors()],
  models
});

// Load Initial State
const stateStorage = storage("@Udacity:flashcards:state");
stateStorage
  .getObject()
  .then(state => {
    store.dispatch.decks.setDecks(state.decks.table);
  })
  .catch(err => {
    console.tron.log(err);
  });
