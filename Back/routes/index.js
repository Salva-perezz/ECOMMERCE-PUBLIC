const router = require("express").Router()

router.use("/products", require("./products"))
router.use("/users", require("./users"))
router.use("/payments", require("./payments"))
router.use("/transactions", require("./transactions"))
router.use("/reviews", require("./reviews"))
router.use("/addresses", require("./addresses"))
router.use("/transactionitems", require("./transactionitems"))

module.exports = router

