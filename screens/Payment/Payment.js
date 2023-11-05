import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, ScrollView, Pressable} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import {Routes} from '../../navigation/Routes';
import style from './style';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Tab from '../../components/Tab/Tab';
import Badge from '../../components/Badge/Badge';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import Search from '../../components/Search/Search';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import {horizontalScale} from '../../assets/styles/scaling';
import Input from '../../components/Input/Input';
import BackButton from '../../components/BackButton/BackButton';
import {createUser} from '../../api/user';
import {useSelector} from 'react-redux';

const Payment = ({navigation}) => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  const [fullName, setfullName] = useState('');
  const [cardNamber, setcardNamber] = useState('');
  const [expiredDte, setexpiredDte] = useState('');
  const [cvv, setCvv] = useState('');
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView contentContainerStyle={style.paymentContainer}>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Header title={'Making Donation'} />
        <View style={style.paymentDetailsContainer}>
          <View style={globalStyle.marginBottom24}>
            <Input
              placeholder="Enter your full name"
              label={'Card Holder Name'}
              onChangeText={value => setfullName(value)}
              keyboardType={'default'}
            />
          </View>
          <View style={globalStyle.marginBottom24}>
            <Input
              placeholder="e.g 2524 1950 5100 "
              label={'Card Number'}
              onChangeText={value => setcardNamber(value)}
              keyboardType={'Numeric'}
            />
          </View>
          <View style={style.detailContainer}>
            <View style={[globalStyle.marginBottom24, style.check]}>
              <Input
                placeholder="ex. 06/24"
                label={'Expired Date'}
                onChangeText={value => setexpiredDte(value)}
                keyboardType={'Numeric'}
              />
            </View>
            <View style={[globalStyle.marginBottom24, style.check]}>
              <Input
                placeholder="ex. 599"
                label={'CVV'}
                onChangeText={value => setCvv(value)}
                keyboardType={'Numeric'}
              />
            </View>
          </View>
          <Text style={style.donationAmountDescription}>
            Yo are about to donate {donationItemInformation.price}
          </Text>
        </View>
      </ScrollView>
      <View style={style.button}>
        <Button title="Confirm Payment" />
      </View>
    </SafeAreaView>
  );
};

export default Payment;
