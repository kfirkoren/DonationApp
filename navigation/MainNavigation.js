/* eslint-disable react/react-in-jsx-scope */
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../screens/Home/Home';
import Test from '../screens/Test/Test';
import singleDonationItem from '../screens/SingleDonationItem/SingleDonationItem';
import Login from '../screens/Login/Login';
import Registration from '../screens/Registration/Registration';
import SingleDonationItem from '../screens/SingleDonationItem/SingleDonationItem';
import Payment from '../screens/Payment/Payment';

const Stack = createStackNavigator();
//ייאצנו את שני הנבייגיטורים
export const NonAuthenticated = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Login}
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.Registration} component={Registration} />
      {/* <Stack.Screen name={Routes.Test} component={Test} /> */}
    </Stack.Navigator>
  );
};

export const Authenticated = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen
        name={Routes.singleDonationItem}
        component={SingleDonationItem}
      />
      <Stack.Screen name={Routes.Payment} component={Payment} />
      {/* <Stack.Screen name={Routes.Test} component={Test} /> */}
    </Stack.Navigator>
  );
};
