'use strict';
import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
  class Readings extends Model {
    static associate(models) {
      // define association here
    }
  }
  Readings.init({
    id: {
            type: DataTypes.NUMBER,
            primaryKey: true
        }
    sensorId:
        {
            type: DataTypes.STRING,
            field: "sensor_id"
        }
    value:
        {
            type: DataTypes.DOUBLE
        }
  }, {
    sequelize,
    modelName: 'Readings',
  });
  return Readings;
};