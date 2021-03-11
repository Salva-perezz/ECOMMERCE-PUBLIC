const User = require("./user");
const Address = require("./address");
const Payment = require("./payment");
const Product = require("./product");
const Review = require("./review");
const Transaction = require("./transaction");
const TransactionItem = require("./transactionItem");


//Relaciones: Transaction

Transaction.belongsTo(User)
Transaction.belongsTo(Payment)
Transaction.belongsTo(Address)

//Relaciones: transactionItem

TransactionItem.belongsTo(Product)
TransactionItem.belongsTo(Transaction)

//Relaciones: Payment

Payment.belongsTo(User)

//Relaciones: Review

Review.belongsTo(User)
Review.belongsTo(Product)

//Relaciones: Address

Address.belongsTo(User)

module.exports = { User, Address, Payment, Product, Review, Transaction, TransactionItem }

