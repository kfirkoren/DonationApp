import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(24),
    flex: 1,
    justifyContent: 'center',
  },
  BackButton: {
    marginLeft: horizontalScale(14),
    marginTop: verticalScale(7),
  },
  successMessage: {
    color: '#28a645',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(16),
    marginBottom:verticalScale(24),
  },
  errorMessage: {
    color: 'red',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(16),
    marginBottom:verticalScale(24),
  },
});

export default style;
