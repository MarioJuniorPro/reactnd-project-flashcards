import { AsyncStorage } from "react-native";

export default (storage = key => {
  // AsyncStorage.removeItem(key)
  return {
    setItem: value => AsyncStorage.setItem(key, value),
    getItem: () => AsyncStorage.getItem(key),
    setObject: value => AsyncStorage.setItem(key, JSON.stringify(value)),
    getObject: () => AsyncStorage.getItem(key).then(JSON.parse),
    clear: key => AsyncStorage.removeItem(key)
  };
});
