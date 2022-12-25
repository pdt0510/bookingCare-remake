import { ObjectKeysValues } from '../../utilities/constant';
import actionTypes from '../actions/actionTypes';

const { language, vi, en } = ObjectKeysValues;
const initialState = {
 started: false,
 [language]: en,
};

const appReducer = (state = initialState, action) => {
 const { type, payload } = action;
 if (type === actionTypes.APP_START_UP_COMPLETE) {
  return {
   ...state,
   started: true,
  };
 }
 return state;
};

export default appReducer;
