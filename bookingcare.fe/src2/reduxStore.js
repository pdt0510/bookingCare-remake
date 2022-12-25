import { applyMiddleware, legacy_createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducers from './../src/store/reducers/rootReducers';
import { logger } from 'redux-logger';
// import 'dotenv/config'; //v37xx3

const middlewareList = [thunkMiddleware]; //v37xx2
const environment = process.env.NODE_ENV || 'development'; //v37xx3
let isDevelopment = environment === 'development' ? true : false;

// isDevelopment = false; //v37xx2
const composeEnhancers =
 isDevelopment === true && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose; //v37xx4

// v37xx2, false for hiding the logger/redux devtools
// isDevelopment = false;
if (isDevelopment) {
 middlewareList.push(logger);
}

const configureReduxStore = () =>
 legacy_createStore(rootReducers, composeEnhancers(applyMiddleware(...middlewareList)));

export default configureReduxStore; // v37xx1
