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

//בגלל שהרשמה זה מסך שהוא חלק מהמחסנית של המסכים אז נביגיטיון זה חלק מהתכונות שהוא מקבל
//ולכן לא צריך לעשות לנביגיישן אימפורט
const Registration = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setfullName] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  console.log(email);
  console.log(password);
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={style.BackButton}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <ScrollView
        contentContainerStyle={style.container}
        showsVerticalScrollIndicator={false}>
        <View style={globalStyle.marginBottom24}>
          <Header type={1} title={'Hello and Welcome !'} />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            placeholder="Enter your full name"
            label={'First & Last Name...'}
            //בגלל הסט אימייל שמשנה את מצב האימייל, הקונסול לוג מדפיס כל פעם ערך חדש
            onChangeText={value => setfullName(value)}
            keyboardType={'default'}
          />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            placeholder="Enter your email..."
            label={'Email'}
            //בגלל הסט אימייל שמשנה את מצב האימייל, הקונסול לוג מדפיס כל פעם ערך חדש
            onChangeText={value => setEmail(value)}
            keyboardType={'email-address'}
          />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            placeholder="******"
            label={'Password'}
            //בגלל הסט אימייל שמשנה את מצב האימייל, הקונסול לוג מדפיס כל פעם ערך חדש
            onChangeText={value => setPassword(value)}
            secureTextEntry={true}
          />
        </View>
        {/* הצורת כתיבה פה אומרת שרק אם יש משהו בסקסס או בארור רק אז הקומפוננטה הזו תרונדר */}
        {error.length > 0 && <Text style={style.errorMessage}>{error}</Text>}
        {success.length > 0 && (
          <Text style={style.successMessage}>{success}</Text>
        )}
        <View style={globalStyle.marginBottom24}>
          <Button
            //לא ניתן יהייה ללחוץ על הלחצן אם השדות לא יעמדו בפרמטרים האלו
            isDisabled={
              fullName.length <= 2 || email.length <= 5 || password.length <= 8
            }
            title="Register"
            onPress={async () => {
              let user = await createUser(fullName, email, password);
              //אם הוחזרה בעיה  ניכנס אחרת נלך לסקסספול
              if (user.error) {
                setError(user.error);
              } else {
                setError('');
                setSuccess('You have successfuly registered');
                //אחרי שלוש שניות נעבור לוג אין
                setTimeout(() => navigation.goBack(), 3000);
              }
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Registration;
