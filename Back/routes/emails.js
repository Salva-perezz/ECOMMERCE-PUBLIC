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

    // const transactionInfo = req.body.transactionInfo.map(item => {
    //     return `<div>
    //         <ul>
    //             <li>${item.name} qty:${item.quantity} u.price:${item.price}</li>
    //         </ul>
    //         <h4> Total: $ ${0+=item.price}.-</h4>
    //     </div>`
    // })

    let htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
    @font-face {
        font-family: "BonVivant-Regular";
        src: url("Sonneta Script.otf");
      }
    h1  {
        font-family: "BonVivant-Regular";
        font-size: 2.5em;
        }
    </style>
    <title>Document</title>
</head>
<body>
    <h1>Clement Online Wine Store</h1>
    <h3>${req.body.fullname}, thank you for choosing us.</h3>
    <hr>
    <p>Order details:</p>
    ${transactionInfo}
</body>
</html>
    `
    const mail = {
        from: "Clement Online <clementonlinewineshop@gmail.com>",
        to: `${req.body.fullname} <${req.body.mailto}>`,
        subject: `Orden de compra N: ${req.body.transactionId}`,
        text: req.body.body,
        html: htmlTemplate
    }

    transporter.sendMail(mail, (err, data) => {
        if (data) res.status(200).json("Email Sent")
        else res.status(400), console.log(err)
    })
})

module.exports = router;