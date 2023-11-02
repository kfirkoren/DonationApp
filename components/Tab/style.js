import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  tab: {
    backgroundColor: '#2979F2',
    height: verticalScale(50),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },
  title: {
    color: '#FFF',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(17),
    textAlign: 'center',
    // paddingHorizontal: horizontalScale(33),
  },
  inactiveTab: {
    backgroundColor: '#F3F5F9',
  },
  inactiveTitle: {
    color: '#79869F',
  },
});

export default style;
