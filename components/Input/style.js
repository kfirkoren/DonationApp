import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import {hasExpectedRequestMetadata} from '@reduxjs/toolkit/dist/matchers';

const style = StyleSheet.create({
  label: {
    color: '#36455A',
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(12),
    lineHeight: scaleFontSize(17),
  },
  input: {
    paddingVertical: verticalScale(12),
    borderBottomColor: 'rgba(167, 167, 167, 0.50)',
    borderBottomWidth: 1,
  },
});

export default style;
