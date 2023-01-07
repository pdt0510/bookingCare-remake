import { apiStates } from '../supplies/apiSupplies';
import db from '../models/index';
import bcrypt from 'bcrypt';

export const updateUserByIdServ = (newData) => {
 return new Promise(async (resolve, reject) => {
  try {
   const id = newData.id;
   let result = apiStates.notCreated;

   const user = await db.users.findOne({
    where: { id },
   });

   if (user) {
    const success = 1;
    const dataForUpdate = {
     ...newData,
     id: undefined, //v52xx3
    };
    const isChecked = await db.users.update(dataForUpdate, {
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
    attributes: ['email', 'firstname', 'lastname', 'address'],
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

// v50xx1
export const createAccountServ = (newData) => {
 return new Promise(async (resolve, reject) => {
  try {
   const successed = true;
   let result = apiStates.notCreated;

   const isExisted = await db.users.findOne({
    where: { email: newData.email },
   });

   if (isExisted) {
    result = {
     errCode: apiStates.incorrectInfo.errCode,
     status: apiStates.incorrectInfo.status,
     message: apiStates.incorrectInfo.mesGroup.existedEmail,
    };
   } else {
    const hashedPassword = await convertToHashedPassword(newData.password);
    const isCreated = await db.users.create({
     ...newData,
     password: hashedPassword,
    });

    if (isCreated._options.isNewRecord === successed) {
     result = apiStates.noErrors;
    }
   }
   resolve(result);
  } catch (error) {
   reject(error);
  }
 });
};

export const loginUserServ = (info) => {
 return new Promise(async (resolve, reject) => {
  try {
   let result = {
    errCode: apiStates.incorrectInfo.errCode,
    status: apiStates.incorrectInfo.status,
    message: apiStates.incorrectInfo.mesGroup.account,
   };

   const user = await db.users.findOne({
    where: { email: info.email },
    attributes: ['id', 'email', 'password', 'firstname', 'lastname'],
   });

   if (user) {
    const isMatched = await checkPassword(info.password, user.password);
    if (isMatched) {
     result = {
      ...apiStates.noErrors,
      user: { ...user, password: undefined },
     };
    }
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
    attributes: ['id', 'email', 'firstname', 'lastname', 'address'],
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
