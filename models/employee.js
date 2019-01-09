'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    name: DataTypes.STRING,
    designation: DataTypes.STRING,
    salary: DataTypes.NUMBER
  }, {});
  Employee.associate = function(models) {
    // associations can be defined here
  };
  return Employee;
};