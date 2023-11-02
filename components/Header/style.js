import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  title1: {
    color: '#022150',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(24),
    lineHeight: scaleFontSize(29),
  },
  title2: {
    color: '#022150',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(18),
    lineHeight: scaleFontSize(22),
  },
  title3: {
    color: '#022150',
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
  },
});

export default style;
