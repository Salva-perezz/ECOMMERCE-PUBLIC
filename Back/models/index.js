const User = require("./user");
const Address = require("./address");
const Payment = require("./payment");
const Product = require("./product");
const Review = require("./review");
const Transaction = require("./transaction");
const TransactionItem = require("./transactionItem");
const Year = require("./year");
const Type = require("./type");
const Country = require("./country");


//Relaciones: Transaction

<<<<<<< HEAD
Transaction.belongsTo(User)
Transaction.belongsTo(Payment)
Transaction.belongsTo(Address)
Transaction.hasMany(TransactionItem)
=======
Transaction.belongsTo(User);
Transaction.belongsTo(Payment);
Transaction.belongsTo(Address);
>>>>>>> 3e87a8a2da92559e3aa4861d61b65cfafe3602c8

//Relaciones: transactionItem

TransactionItem.belongsTo(Product);
TransactionItem.belongsTo(Transaction);

//Relaciones: Payment

Payment.belongsTo(User);

//Relaciones: Review

Review.belongsTo(User);
Review.belongsTo(Product);

//Relaciones: Address

Address.belongsTo(User);

//Relaciones: Productos

Product.belongsTo(Type);
Product.belongsTo(Country);
Product.belongsTo(Year);

module.exports = { User, Address, Payment, Product, Review, Transaction, TransactionItem, Type, Year, Country }

