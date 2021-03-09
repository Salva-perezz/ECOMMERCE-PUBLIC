const router = require("express").Router()
module.expors = router

router.use("/products", require("./products"))
router.use("/users", require("./users"))
router.use("/payments", require("./payments"))
router.use("/transactions", require("./transactions"))
router.use("/reviews", require("./reviews"))
router.use("/addresses", require("./addresses"))
router.use("/transactionItems", require("./transactionItems"))

router.use(function (req, res) {
    res.status(404).end();
  });