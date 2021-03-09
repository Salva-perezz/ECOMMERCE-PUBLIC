const Sequelize = require("sequelize");
const db = require("../db");

class TransactionItem extends Sequelize.Model{}

TransactionItem.init({

},{sequelize:db , modelName:"transactionItem"})

model.exports = TransactionItem