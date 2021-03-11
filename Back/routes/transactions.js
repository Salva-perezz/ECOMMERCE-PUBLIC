const express = require("express");
const router = express.Router();
const { Transaction } = require("../models");

router.post("/", (req, res) => {
    Transaction.create({ userId: user.id })
        .then((transaction) => {
            res.status(201).json(transaction)
        }).catch(() => {
            res.sendStatus(500)
        })
})

router.get("/", (req, res) => {
    Transaction.findOne({
        userId: user.id
    }).then((transaction) => {
        res.status(201).json(transaction)
    }).catch(() => {
        res.sendStatus(500)
    })
})

module.exports = router;

