import axios from '../axios';
import * as apiSupplies from '../supplies/apiSupplies';

// v69xx4
export const testAxiosConnection = () => {
 return new Promise(async (resolve, reject) => {
  try {
   const { apiUrl, getAllUsersApi } = apiSupplies.urls;
   const data = await axios.get(apiUrl + getAllUsersApi);
   resolve(data);
  } catch (error) {
   reject(error);
  }
 });
};
