import React from 'react';
import {Image, View, Text, Pressable} from 'react-native';
import Badge from '../Badge/Badge';
import Header from '../Header/Header';
import style from './style';
import PropTypes from 'prop-types';

const SingleDonationItem = props => {
  return (
    <Pressable
      //זה הטריק שבאמצעותו מעבירים אי די ספציפי מקומפוננטה החוצה
      onPress={() => {
        //באמצעות השורה הזו אנחנו מעבירים את האי די שלו החוצה למסך של הבית
        props.onPress(props.donationItemId);
      }}>
      <View>
        <View style={style.badge}>
          <Badge title={props.badgeTitle} />
        </View>
        <Image
          resizeMode={'cover'}
          source={{uri: props.uri}}
          style={style.image}
        />
      </View>
      <View style={style.donationInformation}>
        <Header
          title={props.donationTitle}
          type={3}
          color={'#0A043C'}
          numberOfLines={1}
        />
        <View>
          <Header
            title={'$' + props.price.toFixed(2)}
            type={3}
            color={'#156CF7'}
            style={style.price}
          />
        </View>
      </View>
    </Pressable>
  );
};

SingleDonationItem.defaultProps = {
  onPress: () => {},
};

SingleDonationItem.propTypes = {
  uri: PropTypes.string.isRequired,
  badgeTitle: PropTypes.string.isRequired,
  donationTitle: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onPress: PropTypes.func,
  donationItemId: PropTypes.number.isRequired,
};

export default SingleDonationItem;
