'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Marriage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    }
  }
  Marriage.init({
    MomId: DataTypes.INTEGER,
    DadId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Marriage',
  });
  return Marriage;
};