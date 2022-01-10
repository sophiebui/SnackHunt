'use strict';
module.exports = (sequelize, DataTypes) => {
  const Snack = sequelize.define('Snack', {
    ownerId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Snack.associate = function(models) {
    Snack.belongsTo(models.User, {foreignKey: 'ownerId'})
    Snack.hasMany(models.Comment, {foreignKey: 'snackId'})
  };
  return Snack;
};
