import { ObjectKeysValues } from '../../assets/utilities/constant';
import actionTypes from '../actions/actionTypes';

const { isLoggedIn, userInfo } = ObjectKeysValues;

const initialState = {
 testValue: 0,
 [isLoggedIn]: false, //v37xx6
 [userInfo]: null,
 isLoadingSymbol: false,
};

const userReducer = (state = initialState, action) => {
 const { type, payload } = action;

 if (type === actionTypes.TEST_ACTION) {
  return {
   ...state,
   testValue: state.testValue + payload,
  };
 }

 return state;
};

export default userReducer;
