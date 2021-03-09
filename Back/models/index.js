const User = require("./user");
const Address = require("./address");
const Payment = require("./payment");
const Product = require("./product");
const Review = require("./review");
const Transaction = require("./transaction");
const transactionItem = require("./transactionItem");

//Relaciones: Transaction

Transaction.belongsTo(User)
Transaction.belongsTo(Payment)
Transaction.belongsTo(Address)

//Relaciones: transactionItem

transactionItem.belongsTo(Product)
transactionItem.belongsTo(Transaction)

//Relaciones: Payment

Payment.belongsTo(User)

//Relaciones: Review

Review.belongsTo(User)

//Relaciones: Address

Address.belongsTo(User)


module.exports = {User,Address,Payment,Product,Review,Transaction,transactionItem}