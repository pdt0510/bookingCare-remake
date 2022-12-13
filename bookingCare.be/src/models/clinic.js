'use strict';
import { Sequelize, DataTypes, Model } from 'sequelize';
import { tableInfo, handleColTypes } from '../migrations/clinic-migration';

module.exports = () => {
  class Clinic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }

  Clinic.init(
    { ...handleColTypes(DataTypes, false) },
    {
      sequelize: new Sequelize('sqlite::memory:'),
      modelName: tableInfo.tableName,
    },
  );
  return Clinic;
};
