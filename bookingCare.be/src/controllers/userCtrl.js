import { apiStates } from '../supplies/apiSupplies';
import * as accServ from '../services/userServ';
import Commons from './../utilities/Commons';
import * as constVals from '../utilities/constant';

export const updateUserByIdCtrl = async (req, res) => {
 const id = +req.body.id;
 let data = {
  errCode: apiStates.incorrectInfo.errCode,
  status: apiStates.incorrectInfo.status,
  message: apiStates.incorrectInfo.mesGroup.id,
 };

 // console.log('req.body ---', req.body); //v52xx3

 if (id && typeof id === 'number') {
  let isEmpty = false;
  const newData = req.body;

  for (const key in newData) {
   if (newData[key] === '' || newData[key] === null || newData[key] === undefined) {
    isEmpty = true;
   }
  }

  if (isEmpty) {
   data = apiStates.fieldRequired;
  } else {
   try {
    data = await accServ.updateUserByIdServ(newData);
   } catch (error) {
    console.log('updateUserByIdCtrl error', error);
   }
  }
 }

 return res.status(data.status).json(data);
};

export const getUserByIdCtrl = async (req, res) => {
 let data = null;
 const id = +req.query.id;

 if (id && typeof id === 'number') {
  try {
   data = await accServ.getUserByIdServ(id);
  } catch (error) {
   console.log('getUserByIdCtrl error', error);
  }
 } else {
  data = {
   errCode: apiStates.incorrectInfo.errCode,
   errCode: apiStates.incorrectInfo.status,
   message: apiStates.incorrectInfo.mesGroup.id,
  };
 }
 return res.status(data.status).json(data);
};

export const deleteUserByIdCtrl = async (req, res) => {
 const id = +req.query.id; //v51xx1
 let data = apiStates.fieldRequired;

 if (id && typeof id === 'number') {
  try {
   data = await accServ.deleteUserByIdServ(id);
  } catch (error) {
   data = apiStates.serverError;
   console.log('deleteUserByIdCtrl error', error);
  }
 }

 return res.status(data.status).json(data);
};

// v50xx1
export const createAccountCtrl = async (req, res) => {
 let data = null;
 let isValid = true;
 let isEmpty = false;
 const newData = req.body;
 const { email, password } = constVals.ObjectKeysValues;

 for (const key in newData) {
  if (newData[key] === null || newData[key] === undefined || newData[key] === '') {
   isEmpty = true;
   break;
  }

  if (key === email) {
   isValid = await Commons.checkEmailRegex(newData[key]);
   if (isValid === false) break;
  } else if (key === password) {
   isValid = await Commons.checkPasswordRegex(newData[key]);
   if (isValid === false) break;
  }
 }

 if (isEmpty) {
  data = apiStates.fieldRequired;
 } else if (isValid === false) {
  data = {
   errCode: apiStates.incorrectInfo.errCode,
   status: apiStates.incorrectInfo.status,
   message: apiStates.incorrectInfo.mesGroup.account,
  };
 } else {
  try {
   data = await accServ.createAccountServ(newData);
  } catch (error) {
   console.log('createAccountCtrl error', error);
  }
 }

 return res.status(data.status).json(data);
};

export const loginUserCtrl = async (req, res) => {
 let data = null;
 let isValid = true;
 const infoObj = req.body;
 const { email, password } = constVals.ObjectKeysValues;

 for (const key in infoObj) {
  if (key === email) {
   isValid = await Commons.checkEmailRegex(infoObj[key]);
  } else if (key === password) {
   isValid = await Commons.checkPasswordRegex(infoObj[key]);
  }
  if (isValid === false) {
   break;
  }
 }

 if (isValid === false) {
  data = {
   errCode: apiStates.incorrectInfo.errCode,
   status: apiStates.incorrectInfo.status,
   message: apiStates.incorrectInfo.mesGroup.account,
  };
 } else {
  try {
   data = await accServ.loginUserServ(infoObj);
  } catch (error) {
   console.log('loginUserCtrl error', error);
  }
 }

 return res.status(data.status).json(data);
};

export const getAllUsersCtrl = async (req, res) => {
 let data = null;
 try {
  data = await accServ.getAllUsersApiServ();
 } catch (error) {
  console.log('getAllUsersCtrl error', error);
 }
 return res.status(data.status).json(data);
};
