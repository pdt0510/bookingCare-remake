'use strict';
import { tableInfo, handleColTypes } from '../migrations/history-migration';
import { Sequelize, DataTypes, Model } from 'sequelize';

module.exports = () => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }

  History.init(
    { ...handleColTypes(DataTypes, false) },
    {
      sequelize: new Sequelize('sqlite::memory:'),
      modelName: tableInfo.tableName,
    },
  );
  return History;
};
