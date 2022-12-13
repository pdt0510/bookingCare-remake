'use strict';
import { tableInfo, handleColTypes } from '../migrations/booking-migration';
import { Sequelize, DataTypes, Model } from 'sequelize';

module.exports = () => {
  class Booking extends Model {
    static associate(models) {}
  }

  Booking.init(
    { ...handleColTypes(DataTypes, false) },
    {
      sequelize: new Sequelize('sqlite::memory:'),
      modelName: tableInfo.tableName,
    },
  );
  return Booking;
};
