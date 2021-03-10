const express = require("express");
const router = express.Router();
const models = require("../models");
const User = models.User;
const jswt = require("jsonwebtoken");

router.post("/register", (req, res) => {
  console.log("llega")
  User.create(req.body)
    .then((user) => {
      const token = jswt.sign({ id: user.id, email: user.email }, "ecommerce");

      res.status(201).json({token, user});
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email) res.status(500).send("Invalid email");
  if (!password) res.status(500).send("Invalid password");

  User.findOne({
    where: {
      email,
    },
  }).then((user) => {
    if (!user) return res.status(400).send("The user doesn't exist");

    if (!user.validPassword(password)) return res.status(401).send("Invalid credentials");

    const token = jswt.sign({ id: user.id, email: user.email }, "ecommerce");

    res.status(200).json({token, user});
  });
});



router.put("/:id", (req, res) => {
    User.update(req.body, {
        where: { id: req.params.id },
        returning: true,
    }).then((userEdited) => {
        res.status(201).json(userEdited[1][0].dataValues)
    }).catch(() => {
        res.sendStatus(500)
    })
})

module.exports = router;