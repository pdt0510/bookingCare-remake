import axios from '../axios';
import * as apiSupplies from '../supplies/apiSupplies';

export const updateAnUserByIdServ = (newData) => {
 return new Promise(async (resolve, reject) => {
  try {
   const { apiUrl, updateUserByIdApi } = apiSupplies.urls;
   const result = await axios.patch(apiUrl + updateUserByIdApi, newData);
   resolve(result);
  } catch (error) {
   reject(error);
  }
 });
};

export const getAnUserByIdServ = (id) => {
 return new Promise(async (resolve, reject) => {
  try {
   const { apiUrl, getUserByIdApi } = apiSupplies.urls;
   const result = await axios.get(apiUrl + getUserByIdApi, {
    params: { id },
   });
   resolve(result);
  } catch (error) {
   reject(error);
  }
 });
};

export const deleteUserByIdServ = (id) => {
 return new Promise(async (resolve, reject) => {
  try {
   const { apiUrl, deleteUserByIdApi } = apiSupplies.urls;
   const result = await axios.delete(apiUrl + deleteUserByIdApi, {
    params: { id }, //v51xx1
   });
   resolve(result);
  } catch (error) {
   reject(error);
  }
 });
};

// v50xx1
export const createAccountServ = (newData) => {
 return new Promise(async (resolve, reject) => {
  try {
   const { apiUrl, createAccountApi } = apiSupplies.urls;
   const result = await axios.post(apiUrl + createAccountApi, newData);
   resolve(result);
  } catch (error) {
   reject(error);
  }
 });
};

export const GetAllUsersServ = () => {
 return new Promise(async (resolve, reject) => {
  try {
   const { apiUrl, getAllUsersApi } = apiSupplies.urls;
   const result = await axios.get(apiUrl + getAllUsersApi);

   resolve(result);
  } catch (error) {
   reject(error);
  }
 });
};

export const loginUserServ = (info) => {
 return new Promise(async (resolve, reject) => {
  try {
   const { apiUrl, loginUserApi } = apiSupplies.urls;
   const result = await axios.post(apiUrl + loginUserApi, info);
   resolve(result);
  } catch (error) {
   reject(error);
  }
 });
};
