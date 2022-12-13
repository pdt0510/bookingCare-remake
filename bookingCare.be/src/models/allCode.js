'use strict';
import { tableInfo, handleColTypes } from '../migrations/allCode-migration';
import { Sequelize, DataTypes, Model } from 'sequelize';

module.exports = () => {
  class Allcode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {}
  }

  Allcode.init(
    { ...handleColTypes(DataTypes, false) },
    {
      sequelize: new Sequelize('sqlite::memory:'),
      modelName: tableInfo.tableName,
    },
  );
  return Allcode;
};
