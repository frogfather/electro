'use strict';
import { Model, DataTypes } from 'sequelize';
import Sequelize from "sequelize";

  class Readings extends Model {}
  Readings.init({
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
    modelName: 'Readings',
  });

export default Readings;
