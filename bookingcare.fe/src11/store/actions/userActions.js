import actionTypes from './actionTypes';
import * as userServ from '../../services/userServiceClient';

// v47xx3
export const GetAllUsersFn = () => {
 return async (dispatch) => {
  try {
   const data = await userServ.GetAllUsersServ();
   if (data.errCode === 0) {
    dispatch(userActionFnStates.succeededGetAllUsersFn(data.users));
   } else {
    dispatch(userActionFnStates.failedGetAllUsersFn());
   }
   return data;
  } catch (error) {
   console.log('userLoginFn error - ', error);
  }
 };
};

// v45xx2
export const userLoginFn = (info) => {
 return async (dispatch) => {
  try {
   const data = await userServ.loginUserServ(info);
   if (data.errCode === 0) {
    dispatch(userActionFnStates.succeededLoginFn(data.user));
   } else {
    dispatch(userActionFnStates.failedLoginFn());
   }
   return data;
  } catch (error) {
   console.log('userLoginFn error - ', error);
  }
 };
};

const userActionFnStates = Object.freeze({
 succeededLoginFn: (info) => ({
  type: actionTypes.SUCCEEDED_USER_LOGIN,
  payload: { info },
 }),
 failedLoginFn: () => ({
  type: actionTypes.FAILED_USER_LOGIN,
 }),
 succeededGetAllUsersFn: (users) => ({
  type: actionTypes.SUCCEEDED_GET_ALL_USERS,
  payload: { users },
 }),
 failedGetAllUsersFn: () => ({
  type: actionTypes.FAILED_GET_ALL_USERS,
 }),
});
