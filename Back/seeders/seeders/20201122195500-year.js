"use strict";

//YEAR
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("years", [
      {
        name: 2012,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 2013,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 2016,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 2017,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 2018,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 2019,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("years", null, {});
  },
};
