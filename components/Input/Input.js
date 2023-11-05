import React, {useState, useRef} from 'react';
import {SafeAreaView, Text, View, TextInput, Pressable} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import {Routes} from '../../navigation/Routes';
import style from './style';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const Input = props => {
  const [value, setValue] = useState('');
  return (
    <View>
      <Text style={style.label}>{props.label}</Text>
      <TextInput
        placeholder={props.placeholder ? props.placeholder : null}
        style={style.input}
        value={value}
        onChangeText={val => {
          setValue(val);
          props.onChangeText(val);
        }}
        keyboardType={props.keyboardType ? props.keyboardType : 'default'}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
};

Input.defaultProps = {
  onChangeText: () => {},
  keyboardType: 'default',
  secureTextEntry: false,
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
};

export default Input;
