const Sequelize = require("sequelize");
const db = require("../db");

class Payment extends Sequelize.Model { }

Payment.init({
    fullName: {
        type: Sequelize.STRING
    },
    cardType: {
        type: Sequelize.STRING
    },
    ccNumber: {
        type: Sequelize.INTEGER
    },
    secCode: {
        type: Sequelize.INTEGER
    }

}, { sequelize: db, modelName: "payment" })

module.exports = Payment