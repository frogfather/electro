'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {}
  Event.init({
    id: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN,
    control: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Event',
    tableName: 'event'
  });
  return Event;
};