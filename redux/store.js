import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import User from './reducers/User';
import {logger} from 'redux-logger/src';
import Categories from './reducers/Categories';
import Donations from './reducers/Donations';

//פה נגדיר בעצם באיזה רידוסרס(אובייקטים) אנחנו נרצה שיהיו לנו בחנות ושתהייה
//לנו בעצם גישה אליהם מכל מקום בפרוקייט
const rootReducer = combineReducers({
  user: User,
  categories: Categories,
  donations: Donations,
});

const configuration = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};

//זה בעצם מאחסן את כל האבוייקטים שיצרנו בתוך מחסן ששומר על הערכים של האבוייקטים
//ככה שלאחר שנטען את האפליקציה מחדש הערכים ששינינו יישמרו ולא יאבדו
const persistedReducer = persistReducer(configuration, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },

  //ההבדל בין הקוד העליון לתחתות זה שהעליו מדפיס את המצב לפני ואחרי לקונדול לוג
  //והעליון לא מדפיס
  // middleware: getDefaultMiddleware => {
  //   return getDefaultMiddleware({
  //     serializableCheck: false,
  //   }).concat(logger);
  // },
});

export default store;
//אובייקט שאחראי להעלות את כל הנתונים ששמרנו במחסן בצורה טובה כאשר עשינו ריסטור לאפליקציה
//לא בדיוק הבנתי את המשמעות של זה יכול להיות שמה שכתוב למעלה זה חירטוט
export const persistor = persistStore(store);
