import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    borderRadius: horizontalScale(26),
    height: horizontalScale(44),
    width: horizontalScale(44),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default style;
