import axios from 'axios';

const instance = axios.create({
 baseURL: process.env.REACT_APP_BACKEND_URL || 3000,
 withCredentials: true,
});

instance.interceptors.response.use(
 (response) => {
  return response.data;
 },
 (error) => {
  const { response } = error;
  return response.data;
 },
);

export default instance;
