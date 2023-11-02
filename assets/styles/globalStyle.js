import {StyleSheet} from 'react-native';
import {getFontFamily} from '../fonts/helper';
import {horizontalScale, scaleFontSize, verticalScale} from './scaling';

const globalStyle = StyleSheet.create({
  backgroundWhite: {
    backgroundColor: 'white',
    //נותן רקע לבן לדף
  },
  flex: {
    flex: 1,
    //דואג שהרקע הלבן שנתנו לדף יהייה לכל העמוד ולא רק למעלה
  },
  flexGrow: {
    flexGrow: 1,
  },
  marginBottom24: {
    marginBottom: verticalScale(24),
  },
});

export default globalStyle;
