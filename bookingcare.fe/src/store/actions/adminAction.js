import actionTypes from './actionTypes';
import * as userServClient from '../../services/userServiceClient';
import * as constVals from '../../utilities';

export const updateAnUserFn = (newData) => {
 return async (dispatch) => {
  try {
   const { noErrors } = constVals.ObjectKeysValues;
   const data = await userServClient.updateAnUserByIdServ(newData);
   if (data.errCode === noErrors) {
    dispatch(adminActionFnStates.succeededUpdateAnUser());
    constVals.displayToast.toastSuccess();
   } else {
    dispatch(adminActionFnStates.failedUpdateAnUser());
    constVals.displayToast.toastError(data.message);
   }
   return data;
  } catch (error) {
   console.log('deleteUserByIdFn error - ', error);
  }
 };
};

export const getAnUserByIdFn = (id) => {
 return async (dispatch) => {
  try {
   const { noErrors } = constVals.ObjectKeysValues;
   const data = await userServClient.getAnUserByIdServ(id);

   if (data.errCode === noErrors) {
    dispatch(adminActionFnStates.succeedGetAnUserById());
   } else {
    dispatch(adminActionFnStates.failedGetAnUserById());
    constVals.displayToast.toastError(data.message);
   }
   return data;
  } catch (error) {
   console.log('getAnUserByIdFn error - ', error);
  }
 };
};

// v51xx1
export const deleteUserByIdFn = (id) => {
 return async (dispatch) => {
  try {
   const { noErrors } = constVals.ObjectKeysValues;
   const data = await userServClient.deleteUserByIdServ(id);
   if (data.errCode === noErrors) {
    dispatch(adminActionFnStates.succeededCreateAccountFn());
    constVals.displayToast.toastSuccess(); //v50xx2
   } else {
    dispatch(adminActionFnStates.failedCreateAccountFn());
    constVals.displayToast.toastError(data.message);
   }
   return data;
  } catch (error) {
   console.log('deleteUserByIdFn error - ', error);
  }
 };
};
// v50xx1
export const createAccountFn = (newData) => {
 return async (dispatch) => {
  try {
   const { noErrors } = constVals.ObjectKeysValues;
   const data = await userServClient.createAccountServ(newData);
   if (data.errCode === noErrors) {
    dispatch(adminActionFnStates.succeededCreateAccountFn());
    constVals.displayToast.toastSuccess(); //v50xx2
   } else {
    dispatch(adminActionFnStates.failedCreateAccountFn());
    constVals.displayToast.toastError(data.message);
   }
   return data;
  } catch (error) {
   console.log('createAccountFn error - ', error);
  }
 };
};

export const GetAllUsersFn = () => {
 return async (dispatch) => {
  try {
   const { noErrors } = constVals.ObjectKeysValues;
   const data = await userServClient.GetAllUsersServ();
   if (data.errCode === noErrors) {
    dispatch(adminActionFnStates.succeededGetAllUsersFn(data.users));
   } else {
    dispatch(adminActionFnStates.failedGetAllUsersFn());
   }
   return data;
  } catch (error) {
   console.log('userLoginFn error - ', error);
  }
 };
};

const adminActionFnStates = Object.freeze({
 succeededUpdateAnUser: () => ({
  type: actionTypes.SUCCEEDED_UPDATE_AN_USER,
 }),
 failedUpdateAnUser: () => ({
  type: actionTypes.FAILED_UPDATE_AN_USER,
 }),

 succeedGetAnUserById: () => ({
  type: actionTypes.SUCCEEDED_GET_AN_USER_BY_ID,
 }),
 failedGetAnUserById: () => ({
  type: actionTypes.FAILED_GET_AN_USER_BY_ID,
 }),

 succeededCreateAccountFn: () => ({
  type: actionTypes.SUCCEEDED_CREATE_ACCOUNT,
 }),
 failedCreateAccountFn: () => ({
  type: actionTypes.FAILED_CREATE_ACCOUNT,
 }),

 succeededGetAllUsersFn: (users) => ({
  type: actionTypes.SUCCEEDED_GET_ALL_USERS,
  payload: { users },
 }),
 failedGetAllUsersFn: () => ({
  type: actionTypes.FAILED_GET_ALL_USERS,
 }),

 succeededLoginFn: (info) => ({
  type: actionTypes.SUCCEEDED_USER_LOGIN,
  payload: { info },
 }),
 failedLoginFn: () => ({
  type: actionTypes.FAILED_USER_LOGIN,
 }),
});
