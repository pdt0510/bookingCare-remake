'use strict';
import { tableInfo, handleColTypes } from '../migrations/doctorInfor-migration';

import { Sequelize, DataTypes, Model } from 'sequelize';

module.exports = () => {
  class DoctorInfor extends Model {
    static associate(models) {}
  }

  DoctorInfor.init(
    {
      ...handleColTypes(Sequelize),
    },
    {
      sequelize: new Sequelize('sqlite::memory:'),
      modelName: tableInfo.tableName,
    },
  );
  return DoctorInfor;
};
