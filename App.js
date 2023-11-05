/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef, useEffect} from 'react';
import {AppState} from 'react-native';
import {SafeAreaView, Text} from 'react-native';
import {getFontFamily} from './assets/fonts/helper';
import MainNavigation from './navigation/MainNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store, {persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import RootNavigation from './navigation/RootNavigation';
import {checkToken} from './api/user';

const App = () => {
  //DonationAppTest
  //אובייקט שמטרתו לעקוב אחרי הסטייט של האפליקציה
  const appState = useRef(AppState.currentState);
  //היוז אפקט ייפעל כל פעם שהאפליקציה תעלה
  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      //ברגע שיש שינוי במצד של האפליקציה אז נקסט סטייס מקבל את המצב הבא
      async nextAppState => {
        if (
          //בודק אם האפליקציה הייתה ברקע או כבויה והמשתמש נכנס אליה
          appState.current.match(/inactive|background/) &&
          nextAppState === 'active'
        ) {
          console.log('1');
          console.log('You have come back into the app');
          await checkToken();
        }
        appState.current = nextAppState;
      },
    );
    console.log('2');
    checkToken();
    console.log('Application has rendered');
  }, []);
  return (
    //ברגע שאני עוטף את כל האפליקציה בפרוביידר עם הסטור שיצרנו אנחנו מאפשרים גישה לכל האפקליקצה
    //לסטור הזה ואז כל האובייקטים יהיו נגישים עבור כל החלקים באפליקציה
    <Provider store={store}>
      {/* פרסיסטגייט עוטף את האפליקציה מכאן כדי להבטיח שהאפליקציה לא תיטען לפני שכל המידע הנחוץ ייובא */}
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          {/* <MainNavigation /> */}
          {/* השתמשנו ברוט נביגיישן כדי לתת גישה למי שמחובר לעמודים ספציפים ולמי שלא מחובר שלא תהייה לו גישה לעמודים לא רלוונטים */}
          <RootNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
