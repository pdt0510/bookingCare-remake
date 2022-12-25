import { combineReducers } from 'redux';
import userReducer from './userReducer';
import appReducer from './appReducer';
import adminReducer from './adminReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { ObjectKeysValues } from '../../utilities/constant';

const { user, isLoggedIn, userInfo, app, language, isLoadingSymbol } = ObjectKeysValues;

const commonPersistConfig = {
 storage,
 stateReconciler: autoMergeLevel2,
};

const userPersistConfig = {
 ...commonPersistConfig,
 key: user,
 whitelist: [isLoadingSymbol], //v54xx3
 blacklist: [isLoggedIn, userInfo],
};

const appPersistConfig = {
 ...commonPersistConfig,
 key: app,
 whitelist: [language], //v54xx3
};

const rootReducers = combineReducers({
 userReducer: persistReducer(userPersistConfig, userReducer),
 appReducer: persistReducer(appPersistConfig, appReducer),
 adminReducer,
});

export default rootReducers;
