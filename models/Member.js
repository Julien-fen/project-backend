const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Class = require('./Class');

const Member = sequelize.define('Member', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
  },
  classId: {
    type: DataTypes.INTEGER,
    references: {
      model: Class,
      key: 'id',
    },
  },
});

// models/Class.js
Class.hasMany(Member, { foreignKey: 'classId' });

// models/Member.js
Member.belongsTo(Class, { foreignKey: 'classId' });

module.exports = Member;
