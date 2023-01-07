import { ObjectKeysValues } from '../../utilities/constant';
import actionTypes from '../actions/actionTypes';

const { isLoggedIn, userInfo } = ObjectKeysValues;

const initialState = {
 [isLoggedIn]: false,
 [userInfo]: null,
};

const userReducer = (state = initialState, action) => {
 const { type } = action;
 if (type === actionTypes.SUCCEEDED_USER_LOGIN) {
  return {
   ...state,
   [isLoggedIn]: true,
   [userInfo]: action.payload.info,
  };
 }

 return state;
};

export default userReducer;
