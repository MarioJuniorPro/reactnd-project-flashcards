import { NavigationActions } from "react-navigation";

export const navigateResetAction = routeName => {
  const resetAction = NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName })]
  });
  return resetAction;
};
