import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  button: {
    backgroundColor: '#2979F2',
    height: verticalScale(55),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },
  title: {
    color: '#FFF',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    textAlign: 'center',
  },
  Disabled: {
    opacity: 0.5,
  },
});

export default style;
