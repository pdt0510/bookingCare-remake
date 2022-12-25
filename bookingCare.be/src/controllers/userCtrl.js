import { apiStates } from '../supplies/apiSupplies';
import * as accServ from '../services/userServ';

export const deleteUserByIdCtrl = async (req, res) => {
 const id = +req.query.id;
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

export const updateUserByIdCtrl = async (req, res) => {
 const id = +req.body.id;
 let data = {
  errCode: apiStates.incorrectInfo.errCode,
  status: apiStates.incorrectInfo.status,
  message: apiStates.incorrectInfo.mesGroup.id,
 };

 if (id && typeof id === 'number') {
  let isEmpty = false;
  const newData = req.body; //v34xx2

  for (const key in newData) {
   if (newData[key] === '' || newData[key] === null || newData[key] === undefined) {
    isEmpty = true;
   }
  }

  if (isEmpty) {
   data = apiStates.fieldRequired;
  } else {
   try {
    data = await accServ.updateUserByIdServ(id, newData);
   } catch (error) {
    console.log('updateUserByIdCtrl error', error);
   }
  }
 }

 return res.status(data.status).json(data);
};

export const getUserByIdCtrl = async (req, res) => {
 let data = null;
 const id = +req.query.id; //v34xx2

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

export const getAllUsersCtrl = async (req, res) => {
 let data = null;
 try {
  data = await accServ.getAllUsersApiServ();
 } catch (error) {
  console.log('getAllUsersCtrl error', error);
 }
 return res.status(data.status).json(data);
};

export const createTestAccountCtrl = async (req, res) => {
 let data = null;
 let isEmpty = false;
 const newData = req.body; //v34xx2

 for (const key in newData) {
  if (newData[key] === '' || newData[key] === null || newData[key] === undefined) {
   isEmpty = true;
  }
 }

 if (isEmpty) {
  data = apiStates.fieldRequired;
 } else {
  try {
   data = await accServ.createTestAccountServ(newData);
  } catch (error) {
   console.log('createTestAccountCtrl error', error);
  }
 }

 return res.status(data.status).json(data);
};
