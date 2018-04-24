import { NavigationActions } from "react-navigation";

export const navigateResetAction = (ops) => {
  const resetAction = NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate(ops)]
  });
  return resetAction;
};

export default {
  navigateResetAction
}
