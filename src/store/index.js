import { init } from "@rematch/core";
import storage from "utils/storage";
import persistStore from "./plugins/persistiStore";
import * as models from "./models";

export const store = init({
  plugins: [persistStore()],
  models
});


// Load Initial State
const stateStorage = storage('@Udacity:flashcards:state')
stateStorage.getObject()
  .then(state => {
    store.dispatch.decks.setDecks(state.decks.list)
  })
  .catch(err => {
    console.tron.log(err)
  })