const { equal } = require("assert");
const { EDESTADDRREQ } = require("constants");
const { timingSafeEqual } = require("crypto");
const { Router } = require("express");
const express = require("express");
const router = express.Router();
const models = require("../models");
const Product = models.Product;
module.exports = router;

Router.post("/add", (req, res) => {
    Product.create(req.body)
        .then((product) => {
            res.status(201).json(product)
        }).catch(() => {
            res.sendStatus(500)
        })
})

Router.get("/:id", (req, res) => {
    Product.findByPk(req.params.id)
        .then((product) => {
            res.status(201).json(product)
        }).catch(() => {
            res.sendStatus(500)
        })
})

Router.get("/search", (req, res) => {
    Product.findAll({
        where: { name: req.body.name }
    }).then((product) => {
        res.status(201).json(product)
    }).catch(() => {
        res.sendStatus(500)
    })
})

Router.put("/:id", (req, res) => {
    Product.update(req.body, {
        where: { id: req.params.id }
    }).then((product) => {
        res.status(201).json(product)
    }).catch(() => {
        res.sendStatus(500)
    })
})

// Router.("/:id", (req, res) => {
//     Product.update(req.body, {
//         where: { id: req.params.id }
//     }).then((product) => {
//         res.status(201).json(product)
//     }).catch(() => {
//         res.sendStatus(500)
//     })
// })