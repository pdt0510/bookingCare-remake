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
 } = urls;

 const {
  createTestAccountCtrl,
  getAllUsersCtrl,
  getUserByIdCtrl,
  updateUserByIdCtrl,
  deleteUserByIdCtrl,
 } = userCtrls;

 appRouter.post(apiUrl + createTestAccountApi, createTestAccountCtrl); //v32xx1
 appRouter.get(apiUrl + getAllUsersApi, getAllUsersCtrl); //v33xx1
 appRouter.get(apiUrl + getUserByIdApi, getUserByIdCtrl); //v34xx1
 appRouter.patch(apiUrl + updateUserByIdApi, updateUserByIdCtrl); //v34xx3
 appRouter.delete(apiUrl + deleteUserByIdApi, deleteUserByIdCtrl); //v34xx3

 return app.use(homeUrl, appRouter);
};

export default initWebRoutes;
