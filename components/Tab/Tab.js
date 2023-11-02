import React, {useState, useRef} from 'react';
import {Pressable, SafeAreaView, Text, View} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import {Routes} from '../../navigation/Routes';
import style from './style';
import PropTypes from 'prop-types';
import {horizontalScale} from '../../assets/styles/scaling';

//כאן יצרנו קומפוננטה של הדר שתיתן מענה לכל ההדרים שיש באפליקציה

const Tab = props => {
  //היוז סטייס איפשר לי לקבל את ערך הרוחב של האובייקט ולהשתמש בו בחוץ
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  // console.log(width);
  const paddingHorizontal = 33;
  const tabWIdth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };
  return (
    //בחרנו בפרסבל כי פרסבל זה כמו ויו או דיב שניתן לערוך
    <Pressable
      // disabled={props.isInactive}
      style={[
        style.tab,
        props.isInactive && style.inactiveTab,
        {width: horizontalScale(paddingHorizontal * 2 + width)},
      ]}
      //בעצם מה שאמרנו פה זה שהערך המוחזר כשנלחץ על הטאב זה הטאב אי די שלו
      onPress={() => props.onPress(props.tabId)}>
      <Text
        //און טקסט לייאוט זו תכונה שמאפשרת להוציא מידע על האובייקט אחרי שהוא רונדר מידע כמו רוחב גובה וכו
        onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={[style.title, props.isInactive && style.inactiveTitle]}>
        {props.title}
      </Text>
    </Pressable>
  );
};

//מאפשר להגדיר ערכים דיפולטיבים לפרופס
Tab.default = {
  isInactive: false,
  onPress: () => {},
};

Tab.propTypes = {
  tabId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isInactive: PropTypes.bool,
  onPress: PropTypes.func,
};

export default Tab;
