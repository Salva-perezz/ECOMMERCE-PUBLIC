const express = require("express");
const router = express.Router();
const { Product } = require("../models");


router.post("/", (req, res) => {
    Product.create(req.body)
        .then((product) => {
            res.status(201).json(product)
        }).catch(() => {
            res.sendStatus(500)
        })
})

router.get("/:id", (req, res) => {
    Product.findByPk(req.params.id)
        .then((product) => {
            res.status(200).json(product)
        }).catch(() => {
            res.sendStatus(500)
        })
})

router.get("/search", (req, res) => {
    Product.findAll({
        where: req.body
    }).then((product) => {
        res.status(200).json(product)
    }).catch(() => {
        res.sendStatus(500)
    })
})


router.get("/", (req, res) => {
    Product.findAll()
        .then((products) => {
            res.status(200).json(products)
        }).catch(() => {
            res.sendStatus(500)
        })
})


router.put("/:id", (req, res) => {
    Product.update(req.body, {
        where: { id: req.params.id },
        returning: true,
    }).then((product) => {
        product = product[1]
        res.status(200).json(product)
    }).catch(() => {
        res.sendStatus(500)
    })
})


router.delete("/:id", (req, res) => {
    Product.delete({
        where: { id: req.params.id }
    }).then(() => {
        res.status(200).send("Product Deleted")
    }).catch(() => {
        res.sendStatus(500)
    })
})

module.exports = router;