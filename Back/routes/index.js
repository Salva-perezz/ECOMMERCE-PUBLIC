const router = require("express").Router()
module.exports = router

router.use("/products", require("./products"))
router.use("/users", require("./users"))
router.use("/payments", require("./payments"))
router.use("/transactions", require("./transactions"))
router.use("/reviews", require("./reviews"))
router.use("/addresses", require("./addresses"))
router.use("/transactionItems", require("./transactionItems"))
