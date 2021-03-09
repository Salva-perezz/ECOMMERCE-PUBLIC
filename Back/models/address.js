const Sequelize = require("sequelize");
const db = require("../db");

class Address extends Sequelize.Model{}

Address.init({

},{sequelize:db , modelName:"address"})

model.exports = Address