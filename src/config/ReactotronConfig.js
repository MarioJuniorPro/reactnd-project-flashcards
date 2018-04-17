import Reactotron, { trackGlobalErrors } from "reactotron-react-native";

const tron = Reactotron.configure()
  .useReactNative()
  .connect();

tron.clear();
tron.log("tron");
console.tron = tron;
