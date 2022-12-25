import axios from 'axios';

// v69xx4
const instance = axios.create({
 baseURL: process.env.REACT_APP_BACKEND_URL,
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
