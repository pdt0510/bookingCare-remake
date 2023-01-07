import { Model } from 'sequelize';
import { tableInfo, handleColTypes } from '../migrations/user-migration';

module.exports = (sequelize, DataTypes) => {
 class User extends Model {
  static associate(models) {}
 }
 const colsTypes = handleColTypes(DataTypes, false);

 User.init(
  {
   ...colsTypes,
  },
  {
   sequelize,
   modelName: `${tableInfo.tableName}`,
  },
 );
 return User;
};
