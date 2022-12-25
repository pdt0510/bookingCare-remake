'use strict';
import { tableInfo, handleColTypes } from '../migrations/booking-migration';
import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associate(models) {}
  }

  Booking.init(
    { ...handleColTypes(DataTypes, false) },
    {
      sequelize,
      modelName: tableInfo.tableName,
    },
  );
  return Booking;
};
