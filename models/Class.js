const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Class = sequelize.define('Class', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
});

// models/Class.js
Class.hasMany(Member, { foreignKey: 'classId' });

// models/Member.js
Member.belongsTo(Class, { foreignKey: 'classId' });

module.exports = Class;
