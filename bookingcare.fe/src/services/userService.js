import axios from '../axios';
import * as apiSupplies from '../supplies/apiSupplies';

//v45xx2
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

// v45xx1
export const loginUserServ1 = (info) => {
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
