const Sequelize = require("sequelize");
const db = require("../db");

class TransactionItem extends Sequelize.Model{}

TransactionItem.init({
quantity:{
    type:Sequelize.INTEGER
}
},{sequelize:db , modelName:"transactionItem"})

module.exports = TransactionItem