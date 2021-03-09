const Sequelize = require("sequelize");
const db = require("../db");

class Review extends Sequelize.Model{}

Review.init({

},{sequelize:db , modelName:"review"})

model.exports = Review