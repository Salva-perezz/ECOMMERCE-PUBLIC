const router = require("express").Router()
const { TransactionItem, Transaction, Product } = require("../models")

router.post("/", (req, res) => {
    TransactionItem.findOne({
        where: {
            transactionId: req.body.transactionId,
            productId: req.body.productId,
        },
    })
        .then((transactionItem) => {
            if (!transactionItem) {
                TransactionItem.create(req.body)
                    .then(transactionItem => transactionItem.setTransaction(req.body.transactionId))
                    .then(transactionItem => transactionItem.setProduct(req.body.productId))
                    .then((transactionItem) => res.send(transactionItem))
            } else {
                transactionItem
                    .update({
                        quantity:
                            Number(req.body.quantity) + Number(transactionItem.quantity),
                    })
                    .then((transactionItem) => res.send(transactionItem))
            }
        }).catch((err) => {
            console.log(err)
            res.sendStatus(400)
        })
})

//Modificar por delete con req.params.id
router.put("/remove", (req, res) => {
    TransactionItem.destroy({
        where: { id: req.body.id },
    })
        .then(() => {
            res.status(200).send()
        }).catch((err) => {
            console.log(err)
            res.sendStatus(400)
        })
})

router.put("/", (req, res) => {
    transactionItem
        .update(
            { quantity: req.body.quantity },
            {
                where: { id: req.body.id },
                returning: true,
                plain: true
            }
        )
        .then((transactionItemUpdated) => {
            res.status(200).json(transactionItemUpdated[1])
        }).catch((err) => {
            console.log(err)
            res.sendStatus(400)
        })
})

router.put("/load", (req, res) => {
    TransactionItem.findAll({
        where: { transactionId: req.body.transactionId },
        include: Product,
    })
        .then((transactionItems) => {
            transactionItems = transactionItems.map((item) => {
                return {
                    id: item.id,
                    productId: item.productId,
                    quantity: item.quantity,
                    name: item.product.name,
                    price: item.product.price,
                    urlPicture: item.product.urlPicture,
                }
            })
            res.status(200).json(transactionItems)
        }).catch((err) => {
          console.log(err)
          res.sendStatus(400)
      })
})

router.get("/:id", (req, res) => {
    TransactionItem.findAll({
        include: [{
            model: Transaction,
            where: { userId: req.params.id }
        }, Product],
    }).then((transactionItems) => {
        res.status(201).json(transactionItems)
    }).catch((err) => {
        console.log(err)
        res.sendStatus(400)
    })
})

module.exports = router
