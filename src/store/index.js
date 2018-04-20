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
    const decks = require("utils/seed").decks;

    if (state && state.decks) {
      if (Object.keys(state.decks.table).length === 0) {
        store.dispatch.decks.setDecks(decks);
        return;
      }
      store.dispatch.decks.setDecks(state.decks.table);
    } else {
      store.dispatch.decks.setDecks(decks);
    }
  })
  .catch(err => {
    console.log(err);
  });
