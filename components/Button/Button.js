import React, {useState, useEffect} from 'react';
import {Pressable, SafeAreaView, Text, View} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import {Routes} from '../../navigation/Routes';
import style from './style';
import PropTypes from 'prop-types';

//כאן יצרנו קומפוננטה של הדר שתיתן מענה לכל ההדרים שיש באפליקציה

const Button = props => {
  return (
    //בחרנו בפרסבל כי פרסבל זה כמו ויו או דיב שניתן לערוך
    <Pressable
      disabled={props.isDisabled}
      style={[style.button, props.isDisabled && style.Disabled]}
      onPress={() => props.onPress()}>
      <Text style={style.title}>{props.title}</Text>
    </Pressable>
  );
};

//מאפשר להגדיר ערכים דיפולטיבים לפרופס
Button.default = {
  isDisabled: false,
  onPress: () => {},
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onPress: PropTypes.func,
};

export default Button;
