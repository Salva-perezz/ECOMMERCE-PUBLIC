const Sequelize = require("sequelize")
const db = require("../db")

class Payment extends Sequelize.Model {}

Payment.init(
  {
    fullName: {
      type: Sequelize.STRING,
    },
    cardType: {
      type: Sequelize.STRING,
    },
    ccNumber: {
<<<<<<< HEAD
        type: Sequelize.STRING,
        // validate: {
        //     isCreditCard: true
        // }
    },
    secCode: {
        type: Sequelize.INTEGER,
    }

}, { sequelize: db, modelName: "payment" })
=======
      type: Sequelize.INTEGER,
    },
    secCode: {
      type: Sequelize.INTEGER,
    },
    expirationMonth: {
        type: Sequelize.INTEGER,
    },
    expirationYear: {
        type: Sequelize.INTEGER,
    },
    hiddenNumber: {
      type: Sequelize.VIRTUAL,
      get: function () {
        return this.ccNumber
          ? Array(this.ccNumber.length - 4)
              .fill("*")
              .join("") + this.ccNumber.slice(-4)
          : ""
      },
    },
  },
  { sequelize: db, modelName: "payment" }
)
>>>>>>> 3e87a8a2da92559e3aa4861d61b65cfafe3602c8

module.exports = Payment
