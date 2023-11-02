import React, {useState, useRef} from 'react';
import {SafeAreaView, Text, View, TextInput, Pressable} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import {Routes} from '../../navigation/Routes';
import style from './style';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const Search = props => {
  const textInputRef = useRef(null);
  const [search, setSearch] = useState('');
  const handleFocus = () => {
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  };
  const hsndleSearch = searchValue => {
    setSearch(searchValue);
    props.onSearch(searchValue);
  };
  return (
    <Pressable style={style.searchInputcontainer} onPress={handleFocus}>
      <FontAwesomeIcon icon={faSearch} color={'#25C0FF'} size={22} />
      <TextInput
        ref={textInputRef}
        style={style.searchInput}
        underlineColorAndroid={'transparent'}
        value={search}
        onChangeText={value => hsndleSearch(value)}
        placeholder={props.placeHolder}
      />
    </Pressable>
  );
};

Search.defaultProps = {
  onSearch: () => {},
  placeHolder: 'Search',
};

Search.propTypes = {
  onSearch: PropTypes.func,
  placeHolder: PropTypes.string,
};

export default Search;
