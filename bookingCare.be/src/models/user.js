import { Sequelize, DataTypes, Model } from 'sequelize';
import { tableInfo } from '../migrations/user-migration';

//10ms01ss
module.exports = () => {
  class User extends Model {
    static associate(models) {}
  }

  User.init(
    { ...handleColTypesolTypes(DataTypes, false) },
    {
      sequelize: new Sequelize('sqlite::memory:'),
      modelName: tableInfo.tableName,
    },
  );
};
