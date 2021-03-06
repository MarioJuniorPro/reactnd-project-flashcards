import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  basePadding: 20,
  baseMargin: 20,
  baseRadius: 3,
  baseFontSize: 14,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};