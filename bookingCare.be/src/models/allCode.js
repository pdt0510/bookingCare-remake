'use strict';
import { tableInfo, handleColTypes } from '../migrations/allCode-migration';
import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
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
      sequelize,
      modelName: tableInfo.tableName,
    },
  );
  return Allcode;
};
