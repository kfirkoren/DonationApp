import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(7),
  },
  image: {
    height: verticalScale(240),
    width: '100%',
    marginTop: verticalScale(12),
    marginBottom: verticalScale(24),
    borderRadius: horizontalScale(5),
  },
  badge: {
    marginBottom: verticalScale(16),
  },
  description: {
    marginTop: verticalScale(4),
    marginHorizontal: horizontalScale(4),
    color: 'black',
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(22),
    marginBottom: verticalScale(10),
  },
  button: {
    marginHorizontal: horizontalScale(20),
    marginBottom: verticalScale(20),
  },
});

export default style;
