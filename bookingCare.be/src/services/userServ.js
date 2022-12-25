import { apiStates } from '../supplies/apiSupplies';
import db from '../models/index';
import bcrypt from 'bcrypt';

export const deleteUserByIdServ = (id) => {
 return new Promise(async (resolve, reject) => {
  try {
   let result = apiStates.notFound;

   const user = await db.users.findOne({
    where: { id },
    attributes: ['id'],
   });

   if (user) {
    const isdeleted = await db.users.destroy({
     where: { id },
    });

    const success = 1;
    if (isdeleted === success) {
     result = apiStates.noErrors;
    }
   }

   resolve(result);
  } catch (error) {
   reject(error);
  }
 });
};

export const updateUserByIdServ = (id, newData) => {
 return new Promise(async (resolve, reject) => {
  try {
   let result = apiStates.notCreated;

   const user = await db.users.findOne({
    where: { id },
   });

   if (user) {
    const success = 1;
    const isChecked = await db.users.update(newData, {
     where: { id },
    });
    result = isChecked[0] === success ? apiStates.noErrors : apiStates.notCreated;
   } else {
    result = apiStates.notFound;
   }

   resolve(result);
  } catch (error) {
   reject(error);
  }
 });
};

export const getUserByIdServ = (id) => {
 return new Promise(async (resolve, reject) => {
  try {
   let result = apiStates.notFound;

   const user = await db.users.findOne({
    where: { id },
    attributes: ['email', 'firstName', 'lastName'],
   });

   if (user) {
    result = {
     ...apiStates.noErrors,
     user,
    };
   }

   resolve(result);
  } catch (error) {
   reject(error);
  }
 });
};

export const getAllUsersApiServ = () => {
 return new Promise(async (resolve, reject) => {
  try {
   let result = apiStates.notCreated;
   const users = await db.users.findAll({
    attributes: ['email', 'firstName', 'lastName'],
   });

   if (users) {
    result = {
     ...apiStates.noErrors,
     users,
    };
   }

   resolve(result);
  } catch (error) {
   reject(error);
  }
 });
};

const checkPassword = (password, hashed) => {
 return new Promise(async (resolve, reject) => {
  try {
   const isChecked = await bcrypt.compare(password, hashed);
   resolve(isChecked);
  } catch (error) {
   reject(error);
  }
 });
};

const convertToHashedPassword = (password) => {
 return new Promise(async (resolve, reject) => {
  try {
   const saltRounds = 10;
   const hashed = await bcrypt.hashSync(password, saltRounds);
   resolve(hashed);
  } catch (error) {
   reject(error);
  }
 });
};

export const createTestAccountServ = (newData) => {
 return new Promise(async (resolve, reject) => {
  try {
   const successed = true;
   let result = apiStates.notCreated;
   const hashedPassword = await convertToHashedPassword(newData.password);

   const isCreated = await db.users.create({
    ...newData,
    password: hashedPassword,
   });

   if (isCreated._options.isNewRecord === successed) {
    result = apiStates.noErrors;
   }

   resolve(result);
  } catch (error) {
   reject(error);
  }
 });
};
