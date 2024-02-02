"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    static associate({ Category, User }) {
      Article.belongsTo(Category, { foreignKey: "categoryID" });
      Article.belongsTo(User, { foreignKey: "userID" });
    }
  }
  Article.init(
    {
      title: DataTypes.STRING,
      price: DataTypes.INTEGER,
      image: DataTypes.STRING,
      deletedAt: DataTypes.DATE,
      categoryID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Categories",
        },
      },
      userID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
        },
      },
    },
    {
      sequelize,
      modelName: "Article",
    }
  );
  return Article;
};
