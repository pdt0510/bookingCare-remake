import { Model } from 'sequelize';
import { tableInfo, handleColTypes } from '../migrations/user-migration';

// 10ms01ss
// class User extends Model {
//   static associate(models) {}
// }

// User.init(
//   { ...handleColTypes(DataTypes, false) },
//   {
//     // sequelize,
//     modelName: tableInfo.tableName,
//   },
// );

// v32xx2
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
