"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const arr = [
      { title: "Квартиры" },
      { title: "Авто" },
      { title: "Книги" },
      { title: "Техника" },
    ];
    const arrObj = arr.map((category) => ({
      ...category,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert("Categories", arrObj);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories");
  },
};
