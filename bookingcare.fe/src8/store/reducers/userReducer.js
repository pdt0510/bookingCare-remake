import { ObjectKeysValues } from '../../utilities/constant';
import actionTypes from '../actions/actionTypes';

const { isLoggedIn, userInfo, isLoadingSymbol } = ObjectKeysValues;

const initialState = {
 testValue: 0,
 [isLoggedIn]: false,
 [userInfo]: null,
 [isLoadingSymbol]: false,
};

const userReducer = (state = initialState, action) => {
 const { type, payload } = action;

 return state;
};

export default userReducer;
