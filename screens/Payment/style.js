import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  paymentContainer: {
    marginHorizontal: horizontalScale(24),
  },
  paymentDetailsContainer: {
    marginTop: verticalScale(31),
  },
  donationAmountDescription: {
    marginTop: verticalScale(10),
  },
  button: {
    marginHorizontal: horizontalScale(24),
    marginBottom: verticalScale(10),
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  check: {
    // flex: 1,
    width: horizontalScale(145),
  },
});

export default style;
