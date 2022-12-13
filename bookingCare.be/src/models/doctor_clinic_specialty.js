'use strict';
import {
  tableInfo,
  handleColTypes,
} from '../migrations/doctor_clinic_specialty-migration';

import { Sequelize, DataTypes, Model } from 'sequelize';
module.exports = () => {
  class Doctor_Clinic_Specialty extends Model {
    static associate(models) {}
  }

  Doctor_Clinic_Specialty.init(
    { ...handleColTypes(DataTypes, false) },
    {
      sequelize: new Sequelize('sqlite::memory:'),
      modelName: tableInfo.tableName,
    },
  );
  return Doctor_Clinic_Specialty;
};
