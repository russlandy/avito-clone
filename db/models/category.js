"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate({ Article }) {
      Category.hasMany(Article, { foreignKey: "categoryID" });
    }
  }
  Category.init(
    {
      title: DataTypes.STRING,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Category",
      tableName: "Categories",
    }
  );
  return Category;
};
