const Sequelize = require("sequelize");
const db = require("../db");

class Transaction extends Sequelize.Model{}

Transaction.init({

},{sequelize:db , modelName:"transaction"})

model.exports = Transaction