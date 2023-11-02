import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  //לאחר שיצרנו ממשק עם הפיירבייס לא צריך את זה יותר
  // firstName: 'Kfir',
  // lastName: 'Koren',
  // userId: 1,
  isLoggedIn: false,
  profileImage:
    'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top',
};

export const User = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    //סטייט זה המצב הקיים
    //אקשן זה המצב החדש שאותו אנחנו רוצים לעדכן במצב הקיים
    // updateFirstName: (state, action) => {
    //   state.firstName = action.payload.firstName;
    // },

    logIn: (state, action) => {
      //האובייקט שיוזר יחזיר זה מה שנחזיר פה ולא מה שיש במצב ההתחלתי
      //בעצם פונקצים עם ריטרן ברידקס מעדכנת את האובייקט שלנו לערכים שיש בריטרן
      //יוצרים כאן העתק של האינישיאל סטייט שבעצם עבור כול יוזר יחזיר את הערכים שלו
      return {...state, ...{isLoggedIn: true}, ...action.payload};
    },

    updateToken: (state, action) => {
      state.token = action.payload;
    },

    //פונקציה חובה שמה שהיא עושה היא מאפשרת לנו לאפס את האובייקט לערכים ההתחלתים שלו
    //לאחר שהשתמשנו בפריסטור ובעצם שמרנו את הנתונים הקודמים במחסן
    //וזה בעצם מאפשר לנו תמיד לעשות ריסט לאובייקט וחזור לערכים ההתחלתיים שלו
    resetToInitialState: () => {
      return initialState;
    },
  },
});

export const {updateFirstName, logIn, resetToInitialState, updateToken} =
  User.actions;

export default User.reducer;
