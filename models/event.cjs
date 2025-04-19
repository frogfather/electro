'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {}
  Event.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    active: DataTypes.BOOLEAN,
    control: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Event',
    tableName: 'event'
  });
  return Event;
};