import axios from '../axios';
import * as apiSupplies from '../supplies/apiSupplies';

// v47xx3
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
