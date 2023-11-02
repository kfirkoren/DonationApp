import auth from '@react-native-firebase/auth';
import {err} from 'react-native-svg/lib/typescript/xml';
import store from '../redux/store';
import {updateToken} from '../redux/reducers/User';

//אסור לשכוח את כל האוויטים (את כל הלחכות) אחרת התהליך לא ייקרה כמו שצריך !
export const createUser = async (fullName, email, password) => {
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    //אחת מהתכונות שיש ליוזר בפיירבייס זה דיספלי ניים
    //ואפשר באמצעות תכונה זו לשדך ליוזר את השם המלא שלו
    await user.user.updateProfile({displayName: fullName});
    // console.log(user);
    return user;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      return {error: 'The email you entered is already in use.'};
    } else if (error.code === 'auth/invalid-email') {
      return {error: 'Please enter a valid email address.'};
    }
    return {error: 'Something went wrong with your request.'};
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    const token = await response.user.getIdToken();
    return {
      status: true,
      data: {
        displayName: response.user.displayName,
        email: response.user.email,
        token,
      },
    };
  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      return {status: false, error: 'Please enter a correct password'};
    } else if (error.code === 'auth/user-not-found') {
      return {
        status: false,
        error:
          'The email you entered does not exist. Please create a new account',
      };
    }
    //אם נרצה לדעת באיזה תקלות אפשר להתקל כדי להדפיס להם דברים מתאימים נוכל להדפיס את התקלות
    console.log(error);
    return {
      status: false,
      error: 'Something went wrong',
    };
  }
};

export const logOut = async () => {
  //אווס אחראי על היוזר המחובר אז הוא יודע גם את מי לנתק
  await auth().signOut();
};

// פוקציה שמעדכנת ביוזר שברידקס את הטוקן ובנוסף גם נותנת טוקן עדכני
export const checkToken = async () => {
  try {
    let response = await auth().currentUser.getIdToken(true);
    console.log('We are updating the token for you \n' + response);
    store.dispatch(updateToken(response));
    return response;
  } catch (error) {
    return error;
  }
};
