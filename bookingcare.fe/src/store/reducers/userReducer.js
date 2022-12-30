import { ObjectKeysValues } from '../../utilities/constant';
import actionTypes from '../actions/actionTypes';

const { isLoggedIn, userInfo, isLoadingSymbol } = ObjectKeysValues;

const initialState = {
 [isLoggedIn]: false,
 [userInfo]: null,
 [isLoadingSymbol]: false,
};

const userReducer = (state = initialState, action) => {
 const { type } = action;
 if (type === actionTypes.SUCCEEDED_USER_LOGIN) {
  return {
   ...state,
   [isLoggedIn]: true,
   [isLoadingSymbol]: true,
   [userInfo]: action.payload.info, //v45xx2
  };
 }

 return state;
};

export default userReducer;
