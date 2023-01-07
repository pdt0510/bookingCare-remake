import actionTypes from './actionTypes';
import * as userServClient from '../../services/userServiceClient';
import * as constVals from '../../utilities';

export const userLoginFn = (info) => {
 return async (dispatch) => {
  try {
   const { noErrors } = constVals.ObjectKeysValues;
   const data = await userServClient.loginUserServ(info);

   if (data.errCode === noErrors) {
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
});
