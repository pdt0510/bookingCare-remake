'use strict';
import { Sequelize, DataTypes, Model } from 'sequelize';
import { tableInfo, handleColTypes } from '../migrations/markdown-migration';

module.exports = () => {
  class Markdown extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }

  Markdown.init(
    { ...handleColTypes(DataTypes, false) },
    {
      sequelize: new Sequelize('sqlite::memory:'),
      modelName: tableInfo.tableName,
    },
  );
  return Markdown;
};
