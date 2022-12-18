'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users_groups extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      users_groups.belongsTo(models.users, {
        foreignKey: 'userId',
        as: 'user'
      })
      users_groups.belongsTo(models.groups, {
        foreignKey: 'groupId',
        as: 'group'
      })
    }
  }
  users_groups.init({
    userId: DataTypes.INTEGER,
    groupId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'users_groups',
  });
  return users_groups;
};