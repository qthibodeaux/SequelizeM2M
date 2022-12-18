'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      users.hasOne(models.userDetails, {
        foreignKey: 'userId',
        as: 'userDetails',
        onDelete: 'CASCADE'
      })
      users.hasMany(models.posts, {
        foreignKey: 'userId',
        as: 'posts'
      })
      users.belongsToMany(models.groups, {
        foreignKey: 'userId',
        through: 'users_groups',
        as: 'groups'
      })
    }
  }
  users.init({
    userName: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};