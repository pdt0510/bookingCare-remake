'use strict';
import { Sequelize, DataTypes, Model } from 'sequelize';
import { tableInfo, handleColTypes } from '../migrations/schedule-migration';

module.exports = () => {
  class Schedule extends Model {
    static associate(models) {}
  }

  Schedule.init(
    { ...handleColTypes(DataTypes, false) },
    {
      sequelize: new Sequelize('sqlite::memory:'),
      modelName: tableInfo.tableName,
    },
  );
  return Schedule;
};
