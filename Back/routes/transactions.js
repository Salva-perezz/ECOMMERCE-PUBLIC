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
                .then(transaction2 => transaction2.setUser(req.body.userId))
                .then(trans => res.send(trans))
    
        } else {
            return res.send(transaction)
        }
    }).catch((error) => {
        console.log(error)
        res.sendStatus(500)
    })
})

// router.get("/", (req, res) => {
//     Transaction.findOne({
//         userId: user.id
//     }).then((transaction) => {
//         res.status(201).json(transaction)
//     }).catch(() => {
//         res.sendStatus(500)
//     })
// })

module.exports = router;

