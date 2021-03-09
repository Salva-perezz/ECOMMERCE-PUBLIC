const Sequelize = require("sequelize");
const db = require("../db");

class User extends Sequelize.Model{}

User.init({

},{sequelize:db , modelName:"user"})

model.exports = User