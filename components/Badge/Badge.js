import React, {useState, useRef} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import {Routes} from '../../navigation/Routes';
import style from './style';
import PropTypes from 'prop-types';
import {horizontalScale} from '../../assets/styles/scaling';

//כאן יצרנו קומפוננטה של הדר שתיתן מענה לכל ההדרים שיש באפליקציה

const Badge = props => {
  //היוז סטייס איפשר לי לקבל את ערך הרוחב של האובייקט ולהשתמש בו בחוץ
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 10;
  const badgeWIdth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };
  return (
    <View style={[style.badge, badgeWIdth]}>
      <Text
        onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={style.title}>
        {props.title}
      </Text>
    </View>
  );
};

Badge.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Badge;
