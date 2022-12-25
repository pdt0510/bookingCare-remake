import { combineReducers } from 'redux';
import userReducer from './userReducer';
import appReducer from './appReducer';
import adminReducer from './adminReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { ObjectKeysValues } from '../../assets/utilities/constant';

const { user, isLoggedIn, userInfo, app, language, isLoadingSymbol } = ObjectKeysValues;

const commonPersistConfig = {
 storage,
 stateReconciler: autoMergeLevel2, //v37xx5
};

const userPersistConfig = {
 ...commonPersistConfig,
 key: user, //v37xx6
 blacklist: [isLoggedIn, userInfo], //v37xx6, v37xx7
 whitelist: [isLoadingSymbol], //v37xx7
};

const appPersistConfig = {
 ...commonPersistConfig,
 key: app,
 whitelist: [language], //v37xx7
};

const rootReducers = combineReducers({
 userReducer: persistReducer(userPersistConfig, userReducer), //v37xx5
 appReducer: persistReducer(appPersistConfig, appReducer),
 adminReducer,
});

export default rootReducers;
