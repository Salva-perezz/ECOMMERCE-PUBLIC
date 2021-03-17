const router = require("express").Router()
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'clementonlinewineshop@gmail.com',
        pass: 'hrzcwxqcyqqeaqdy'
    }
});

router.post("/", (req, res) => {
    const mail = {
        from: "Clement Online <clementonlinewineshop@gmail.com>",
        to: `${req.body.fullname} <${req.body.mailto}>`,
        subject: `Orden de compra N: ${req.body.transactionId}`,
        text: req.body.body
    }

    transporter.sendMail(mail, (err, data) => {
        if (data) res.status(200).json("Email Sent")
        else res.status(400), console.log(err)
    })
})

module.exports = router;