const express = require('express')
const bodyParser = require('body-parser')
const sgMail = require('@sendgrid/mail');
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/form', (req, res) => {
  // sgMail.setApiKey(process.env.REACT_APP_SENDGRID_APIKEY)
  sgMail.setApiKey("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")

  let productsEmail = ''
  for (const item of req.body.products) {
    const str = `<li>${item.value} ${item.name}</li>`
    productsEmail += str
  }

  const htmlEmail = `
    <ul>
      <li>Name: ${req.body.username}</li>
      <li>Phone: ${req.body.userphone}</li>
      <li>Email: ${req.body.useremail}</li>
      <li>Comments: ${req.body.message}</li>
      <br>
      <li>Logo Location: ${req.body.hatLogoPos}</li>
      <br>
      ${productsEmail}
    </ul>
    <img src="https://storage.googleapis.com/psl-ssk-ppa34-pqq54sllls-imgsvr/hse1.jpg" alt="logoimage"></img>
  `
//    <img src=${req.body.hatLogoImage.preview} alt="logoimage"></img>

  console.log(htmlEmail)

  const msg = {
    to: ['globeubiquitous@gmail.com'], //'sales@kingclothing.com',
    from: req.body.useremail,
    subject: 'Online Order Request',
    text: 'and easy to do anywhere, even with Node.js',
    html: htmlEmail
  }
  sgMail.send(msg)
  res.send('{"message":"Email sent."}');
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server listing on port ${PORT}`)
})