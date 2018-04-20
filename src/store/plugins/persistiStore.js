import throttle from "lodash/throttle";
import storage from "utils/storage";

const stateStorage = storage("@Udacity:flashcards:state");

const persistStore = () => {
  const bottleNeck = throttle(state => {
    stateStorage.setObject(state).catch(err => {});
  }, 3000);
  return {
    init: expose => ({
      middleware: store => next => action => {
        next(action); // call next before to get updated state
        bottleNeck(store.getState());
        return;
      }
    })
  };
};

export default persistStore;
