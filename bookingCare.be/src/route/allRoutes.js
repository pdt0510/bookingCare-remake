import express from 'express';
import * as userCtrls from '../controllers/userCtrl';
import { urls } from '../supplies/apiSupplies';

const appRouter = express.Router();

const initWebRoutes = (app) => {
 const {
  homeUrl,
  apiUrl,
  createTestAccountApi,
  getAllUsersApi,
  getUserByIdApi,
  updateUserByIdApi,
  deleteUserByIdApi,
  loginUserApi,
 } = urls;

 const {
  createTestAccountCtrl,
  getAllUsersCtrl,
  getUserByIdCtrl,
  updateUserByIdCtrl,
  deleteUserByIdCtrl,
  loginUserCtrl,
 } = userCtrls;

 appRouter.post(apiUrl + createTestAccountApi, createTestAccountCtrl);
 appRouter.get(apiUrl + getAllUsersApi, getAllUsersCtrl);
 appRouter.get(apiUrl + getUserByIdApi, getUserByIdCtrl);
 appRouter.patch(apiUrl + updateUserByIdApi, updateUserByIdCtrl);
 appRouter.delete(apiUrl + deleteUserByIdApi, deleteUserByIdCtrl);
 appRouter.post(apiUrl + loginUserApi, loginUserCtrl); //v43xx1

 return app.use(homeUrl, appRouter);
};

export default initWebRoutes;
