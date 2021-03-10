const Sequelize = require("sequelize");
const db = require("../db");

class User extends Sequelize.Model { }

User.init({
    name: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
    birthDay: {
        type: Sequelize.DATE
    }
}, { sequelize: db, modelName: "user" })

module.exports = User