import {StyleSheet} from 'react-native';
import {getFontFamily} from '../fonts/helper';
import {horizontalScale, scaleFontSize, verticalScale} from './scaling';

const globalStyle = StyleSheet.create({
  backgroundWhite: {
    backgroundColor: 'white',
  },
  flex: {
    flex: 1,
  },
  flexGrow: {
    flexGrow: 1,
  },
  marginBottom24: {
    marginBottom: verticalScale(24),
  },
});

export default globalStyle;
