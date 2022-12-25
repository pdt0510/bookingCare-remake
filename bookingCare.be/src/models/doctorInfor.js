'use strict';
import { tableInfo, handleColTypes } from '../migrations/doctorInfor-migration';
import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class DoctorInfor extends Model {
    static associate(models) {}
  }

  DoctorInfor.init(
    {
      ...handleColTypes(DataTypes, false),
    },
    {
      sequelize,
      modelName: tableInfo.tableName,
    },
  );
  return DoctorInfor;
};
