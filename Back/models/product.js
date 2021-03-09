const Sequelize = require("sequelize");
const db = require("../db");

class Product extends Sequelize.Model{}

Product.init({

},{sequelize:db , modelName:"product"})

model.exports = Product