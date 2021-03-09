const express = require("express");
const router = express.Router();
const models = require("../models");
const User = models.user;
module.exports = router;

Router.post("/register", (req, res) => {
    User.create(req.body)
        .then((user) => {
            res.status(201).json(user)
        }).catch(() => {
            res.sendStatus(500)
        })
})