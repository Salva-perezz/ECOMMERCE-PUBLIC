const router = require("express").Router()
const { TransactionItem, Transaction, Product } = require("../models")

// router.post("/", (req, res) => {
//   TransactionItem.create(req.body)
//     .then((transactionItem) => {
//       transactionItem.setTransaction(req.body.transactionId)
//       transactionItem.setProduct(req.body.productId)
//       res.status(201).json(transactionItem)
//     })
//     .catch((error) => {
//      console.log(error)
//       res.sendStatus(404)
//     })
// })

router.post("/", (req, res) => {
<<<<<<< HEAD
    TransactionItem.findOne({
        where: {
            transactionId: req.body.transactionId,
            productId: req.body.productId
        }
    }).then(transactionItem => {
        if (!transactionItem) {
            TransactionItem.create(req.body)
                .then(transactionItem => {
                    transactionItem.setTransaction(req.body.transactionId),
                        transactionItem.setProduct(req.body.productId)
                })
                .then(transItem => res.send(transItem))

        } else {
            transactionItem.update({ quantity: req.body.quantity + transactionItem.quantity })
                .then(transactionItem => res.send(transactionItem))
        }
    }).catch((error) => {
        console.log(error)
        res.sendStatus(404)
=======
  TransactionItem.findOne({
    where: {
      transactionId: req.body.transactionId,
      productId: req.body.productId,
    },
  })
    .then((transactionItem) => {
      if (!transactionItem) {
        TransactionItem.create(req.body)
          .then((transactionItem) => {
            transactionItem.setTransaction(req.body.transactionId)
            transactionItem.setProduct(req.body.productId)
            return transactionItem
          })
          .then((transItem) => res.send(transItem))
      } else {
        transactionItem
          .update({
            quantity:
              Number(req.body.quantity) + Number(transactionItem.quantity),
          })
          .then((transactionItem) => res.send(transactionItem))
      }
    })
    .catch((error) => {
      console.log(error)
      res.sendStatus(500)
>>>>>>> 5d97ed885198dd527ddff52e95608cd52a028b9c
    })
})

router.put("/remove", (req, res) => {
  TransactionItem.destroy({
    where: { id: req.body.id },
  })
    .then(() => {
      res.status(200).send("Item Eliminado")
    })
    .catch(() => {
      res.sendStatus(500)
    })
})

router.put("/", (req, res) => {
  transactionItem
    .update(
      { quantity: req.body.quantity },
      {
        where: { id: req.body.id },
        returning: true,
      }
    )
    .then((transactionItemUpdated) => {
      transactionItemUpdated = transactionItemUpdated[1]
      res.status(200).json(transactionItemUpdated)
    })
    .catch(() => {
      res.sendStatus(500)
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
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    })
<<<<<<< HEAD
        .then((transactionItems) => {
            transactionItems = transactionItems.map((item) => {
                return {
                    id: item.id,
                    productId: item.productId,
                    quantity: item.quantity,
                    name: item.product.name,
                    price: item.product.price,
                    urlPicture: item.product.urlPicture
                }
            })
            res.status(200).json(transactionItems)
        })
        .catch((error) => {
            console.log(error)
            res.sendStatus(404)
        })
=======
>>>>>>> 5d97ed885198dd527ddff52e95608cd52a028b9c
})

module.exports = router
