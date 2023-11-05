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
import {loginUser} from '../../api/user';
import {useDispatch} from 'react-redux';
import { logIn, resetToInitialState } from '../../redux/reducers/User';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  console.log(email);
  console.log(password);
  const dispatch = useDispatch();



  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        contentContainerStyle={style.container}
        showsVerticalScrollIndicator={false}>
        <View style={globalStyle.marginBottom24}>
          <Header type={1} title={'Welcome Back'} />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            placeholder="Enter your email"
            label={'Email'}
            onChangeText={value => setEmail(value)}
            keyboardType={'default'}
          />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            placeholder="******"
            label={'Password'}
            onChangeText={value => setPassword(value)}
            secureTextEntry={true}
          />
        </View>
        {error.length > 0 && <Text style={style.errorMessage}>{error}</Text>}
        {success.length > 0 && (
          <Text style={style.successMessage}>{success}</Text>
        )}
        <View style={globalStyle.marginBottom24}>
          <Button
            title="Login"
            isDisabled={email.length < 5 || password.length < 8}
            onPress={async () => {
              let user = await loginUser(email, password);
              if (!user.status) {
                setError(user.error);
              } else {
                setError('');
                dispatch(logIn(user.data));
                navigation.navigate(Routes.Home);
              }
            }}
          />
        </View>
        <Pressable
          style={style.registerationButton}
          onPress={() => navigation.navigate(Routes.Registration)}>
          <Header type={3} title={"Don't have an account?"} color={'#156CF7'} />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
