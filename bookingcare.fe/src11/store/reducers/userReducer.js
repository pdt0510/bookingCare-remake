import { ObjectKeysValues } from '../../utilities/constant';
import actionTypes from '../actions/actionTypes';

const { isLoggedIn, userInfo } = ObjectKeysValues;

const initialState = {
 [isLoggedIn]: false,
 [userInfo]: null,
 allUsers: null,
};

const userReducer = (state = initialState, action) => {
 const { type } = action;
 if (type === actionTypes.SUCCEEDED_USER_LOGIN) {
  return {
   ...state,
   [isLoggedIn]: true,
   [userInfo]: action.payload.info, //v45xx2
  };
 }
 if (type === actionTypes.SUCCEEDED_GET_ALL_USERS) {
  return {
   ...state,
   allUsers: action.payload.users, // v47xx1
  };
 }

 return state;
};

export default userReducer;
