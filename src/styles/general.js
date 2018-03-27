import colors from "./colors";
import metrics from "./metrics";

export default {
  headerStyle: {
    backgroundColor: colors.primary,
  },
  headerTintColor: colors.lighter,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  // input: {
  //   backgroundColor: colors.white,
  // },
  box: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding
  },
  buttonPrimary: {
    backgroundColor: colors.primary
  },
  buttonTextPrimary: {
    color: colors.lighter,
  },
};
