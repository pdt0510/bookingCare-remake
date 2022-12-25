import { ObjectKeysValues } from '../../utilities/constant';
import actionTypes from '../actions/actionTypes';

const { language, vi } = ObjectKeysValues;
const initialState = {
 started: false,
 [language]: vi,
};

const appReducer = (state = initialState, action) => {
 const { type, payload } = action;
 if (type === actionTypes.APP_START_UP_COMPLETE) {
  return {
   ...state,
   started: true, //v37xx8
  };
 }
 return state;
};

export default appReducer;
