const router = require("express").Router()
const { Transaction, transactionItem, User } = require("../models");

router.post("/", (req, res) => {
    Transaction.findOne({
        where: {
            checkoutDate: null,
            userId: req.body.userId
        }
    }).then(transaction => {
        if (!transaction) {
            Transaction.create()
                .then(transaction => transaction.setUser(req.body.userId))
                .then(transaction => res.send(transaction))
                .catch(err => console.log('ACAA', err))
        } else {
            return res.send(transaction)
        }
    }).catch((err) => {
        console.log(err)
        res.sendStatus(400)
    })
})

router.get("/:id", (req, res) => {
    Transaction.findAll({
        where: { userId: req.params.id },
    }).then((transaction) => {
        res.status(201).json(transaction)
    }).catch((err) => {
        console.log(err)
        res.sendStatus(400)
    })
})

module.exports = router;

