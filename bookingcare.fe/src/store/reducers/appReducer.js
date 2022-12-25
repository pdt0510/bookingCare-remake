import * as varConsts from '../../utilities/constant';
import actionTypes from '../actions/actionTypes';

const { language, vi, en } = varConsts.ObjectKeysValues;
const initialState = {
 started: false,
 [language]: vi,
};

const appReducer = (state = initialState, action) => {
 const { type, payload } = action;
 if (type === actionTypes.APP_START_UP_COMPLETE) {
  return {
   ...state,
   started: true,
  };
 }
 if (type === actionTypes.SWITCH_LANGUAGE) {
  return {
   ...state,
   [language]: state.language === varConsts.LANGUAGES.EN ? vi : en,
  };
 }
 return state;
};

export default appReducer;
