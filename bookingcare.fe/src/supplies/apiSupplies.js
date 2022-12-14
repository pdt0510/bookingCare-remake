export const urls = Object.freeze({
 homeUrl: '/',
 apiUrl: '/api',
 id: '/:id',
 createAccountApi: '/create-acc',
 getAllUsersApi: '/get-all-users',
 getUserByIdApi: '/get-user-by-id',
 updateUserByIdApi: '/update-user-by-id',
 deleteUserByIdApi: '/delete-user-by-id',
 loginUserApi: '/login-user',
});

export const apiStates = Object.freeze({
 noErrors: {
  errCode: 0,
  status: 200, //OK
  message: 'Successfully requested',
 },
 fieldRequired: {
  errCode: 1,
  status: 400, //Bad Request
  message: 'Fields required',
 },
 notFound: {
  errCode: 2,
  status: 404, //Not Found
  message: 'Not Found!',
 },
 incorrectInfo: {
  errCode: 3,
  status: 406, // Not Acceptable
  mesGroup: {
   id: 'Incorrect id',
   email: 'Incorrect email',
   account: 'Your account is incorrect',
   password: 'Incorrect password',
   isActived: 'Verified booking is actived already',
  },
 },
 missingParams: {
  errCode: 4,
  status: 406, // Not Acceptable
  idMes: 'Missing required id',
 },
 notCreated: {
  errCode: 5,
  status: 501, //Not Implemented
  message: `It's not created`,
 },
 serverError: {
  errCode: -1,
  status: 500, //OK
  message: 'Internal Server Error',
 },
});
