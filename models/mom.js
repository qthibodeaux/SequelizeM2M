'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Mom.belongsTo(models.Dad, {
        through: 'Marriage',
        as: 'Mom',
        foreignKey: 'MomId'
      })
    }
  }
  Mom.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    married: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Mom',
  });
  return Mom;
};