import actionTypes from '../actions/actionTypes';
import { ObjectKeysValues } from '../../assets/utilities/constant';

const { language } = ObjectKeysValues;
const initialState = {
 [language]: 'vi', //v37xx6
};

const appReducer = (state = initialState, action) => {
 return state;
};

export default appReducer;
