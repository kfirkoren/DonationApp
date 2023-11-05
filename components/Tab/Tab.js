import React, {useState, useRef} from 'react';
import {Pressable, SafeAreaView, Text, View} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import {Routes} from '../../navigation/Routes';
import style from './style';
import PropTypes from 'prop-types';
import {horizontalScale} from '../../assets/styles/scaling';


const Tab = props => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  // console.log(width);
  const paddingHorizontal = 33;
  const tabWIdth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };
  return (
    <Pressable
      style={[
        style.tab,
        props.isInactive && style.inactiveTab,
        {width: horizontalScale(paddingHorizontal * 2 + width)},
      ]}
      onPress={() => props.onPress(props.tabId)}>
      <Text
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
