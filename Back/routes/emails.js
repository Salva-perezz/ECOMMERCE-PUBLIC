const router = require("express").Router()
const nodemailer = require("nodemailer");

router.post("/", (req, res) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        post: 465,
        secure: true,
        auth: {
            user: "corine.sauer43@ethereal.email",
            pass: "mqtr7kyQ5aqvzH8eVJ"
        }
    })
    let mailOptions = {
        from: "Clement Online Wines",
        to: req.body.email,
        subject: `Orden de compra N:${req.body.transactionId}`,
        text: req.body.body
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (info) res.status(200).json("Email Sent")
        else res.status(400), console.log(err)
    })
})

module.exports = router;