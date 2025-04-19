'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Reading extends Model {}
  Reading.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
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
    tableName: 'reading'
  });
  return Reading;
}
