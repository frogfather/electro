'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Reading extends Model {}
  Reading.init({
    id: {
            type: DataTypes.NUMBER,
            primaryKey: true
        },
    sensorId:
        {
            type: DataTypes.STRING,
            field: "sensor_id"
        },
    value:
        {
            type: DataTypes.DOUBLE
        }
  }, {
    sequelize,
    modelName: 'Reading',
  });
  return Reading;
}
