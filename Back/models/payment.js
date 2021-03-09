const Sequelize = require("sequelize");
const db = require("../db");

class Payment extends Sequelize.Model{}

Payment.init({

},{sequelize:db , modelName:"payment"})

model.exports = Payment