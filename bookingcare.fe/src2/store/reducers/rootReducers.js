import { combineReducers } from 'redux';
import userReducer from './userReducer';
import appReducer from './appReducer';
import adminReducer from './adminReducer';

const rootReducers = combineReducers({
 userReducer,
 appReducer,
 adminReducer,
});

export default rootReducers;
