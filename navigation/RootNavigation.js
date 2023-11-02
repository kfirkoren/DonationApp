import React from 'react';
import {useSelector} from 'react-redux';
import {Authenticated, NonAuthenticated} from './MainNavigation';

const RootNavigation = () => {
  const user = useSelector(state => state.user);
  //ברגע שהיוזר יתנתק אוטומטית יופיע לו המסך של הלוג אין כי הנביגייטור ייקלוט שהבדיקה
  //פה של יוזר לוג אין הפכה לפולס ולא טרו (לשקר ולא אמת)
  return user.isLoggedIn ? <Authenticated /> : <NonAuthenticated />;
};

export default RootNavigation;
