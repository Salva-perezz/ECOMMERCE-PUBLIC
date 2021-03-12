const router = require("express").Router()
const { TransactionItem, Transaction, Product } = require("../models")

router.post("/", (req, res) => {
  TransactionItem.create(req.body)
    .then((transactionItem) => {
      transactionItem.setTransaction(req.body.transactionId)
      transactionItem.setProduct(req.body.productId)
      res.status(201).json(transactionItem)
    })
    .catch(() => {
      res.sendStatus(500)
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
          urlPicture: item.product.urlPicture
        }
      })
      res.status(200).json(transactionItems)
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    })
})

module.exports = router
